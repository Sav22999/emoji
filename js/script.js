var titles = {};
var emojis = [];

var selectedTitle = 1;
var char_copied_n = 0;

var registered = null;

var marginToUse = 10;
var max_columns = 10;
var max_rows = 6;

var height_of_the_popup = 0; //generated dynamically || useful to know the popup height
var width_of_the_popup = 0; //generated dynamically || useful to know the popup width

var theme = 0;
var size_emojis = 40; //30, 35, 40, 50, 60
var auto_close = "no"; //yes, no
var skin_tone_selected = ""; //nothing
var skin_tone_previous = "";
var multi_copy = "no";
var extension_icon_selected = 0; //extension-icon-1
var language_to_show = "en";
const extension_icons = ["extension-icon-1", "extension-icon-2", "extension-icon-3", "extension-icon-4", "extension-icon-5", "extension-icon-6", "extension-icon-7", "extension-icon-8", "extension-icon-9", "extension-icon-10", "extension-icon-11"];
var space_emoji = "no";
var insert_directly_emoji = "no";

var requestNumber = 0;

var all_emojis = [];
var emojis_supporting_skin_tones = {};
var contextmenu_set = false;

var deleting = false;

var number_of_emojis_generations = 0;

const skin_tones = ["", "🏻", "🏼", "🏽", "🏾", "🏿"]; //standard(yellow)|light|medium-light|medium|medium-dark|dark

var mostUsedEmojis = [];

var browserOrChromeIndex = 0; //TODO: change manually: {0: Firefox, 1: Microsoft Edge, 2: Chrome Web Store}

var browserAgentSettings = "";

const linkReview = ["https://addons.mozilla.org/firefox/addon/emoji-sav/", "https://microsoftedge.microsoft.com/addons/detail/emoji/ejcgfbaipbelddlbokgcfajefbnnagfm", "https://chrome.google.com/webstore/detail/emoji/kjepehkgbooeigeflhiogplnckadlife?hl=it&authuser=0"];
const linkDonate = ["https://www.paypal.me/saveriomorelli", "https://ko-fi.com/saveriomorelli", "https://bit.ly/3eXs7Oy"]; //{paypal, ko-fi, liberapay}
const linkTranslate = "https://crowdin.com/project/emoji-sav";
const linkNeedHelp = ["https://www.saveriomorelli.com/contact-me/"];
const storeName = ["Firefox Add-ons", "Microsoft Edge Add-ons", "Google Chrome Web Store"];
const fontFamily = ["twemoji", "notocoloremoji", "notocoloremoji", "twemoji-fix-macos", "joypixels"];

if (browserOrChromeIndex == 0) {
    browserAgentSettings = browser;
} else if (browserOrChromeIndex == 1 || browserOrChromeIndex == 2) {
    browserAgentSettings = chrome;
}

var font_family = fontFamily[browserOrChromeIndex]; //twemoji (Twitter), notocoloremoji (Google), openmojicolor (OpenMoji), openmojiblack, default

const hideChooseSkinToneMiniPopUpAfterSeconds = 2 * 1000; //2 seconds
const hideMessageBottomAfterSeconds = 1500;

var set_timeout_mini_popup = null;

const jsonSettingsDefaultValue = {
    "theme": 0,
    "columns": 2,
    "rows": 2,
    "size": 2,
    "font": 0,
    "auto_close": 1,
    "skin_tone": 0,
    "multi_copy": 1,
    "extension_icon": 0,
    "language": getLanguageCode(browserAgentSettings.i18n.getUILanguage().toString()),
    "space_emoji": 0,
    "insert_directly_emoji": 1,
};

const storeNameAbbr = ["MFA", "MEA", "GCWS"];//{MozillaFirefoxAddons, MicrosoftEdgeAddons, GoogleChromeWebStore}
const releaseNumber = browserAgentSettings.runtime.getManifest().version;

var copyText = "";

const titlesElement = document.getElementById("titles");
const emojisElement = document.getElementById("emojis");
const topSectionElement = document.getElementById("top-section");
const searchBarInputElement = document.getElementById("search-bar-input");
const textToCopyElement = document.getElementById("text-to-copy");
const searchBoxElement = document.getElementById("search-box");
const deleteButtonElement = document.getElementById("delete-button");

setLanguageFile();
setVariablesFromSettings(true);
generateTitles();

function loaded() {
    searchBarInputElement.onkeyup = function (e) {
        searchEmoji(searchBarInputElement.value);
        number_of_emojis_generations = 0;
    }
    searchBarInputElement.onkeydown = function (e) {
        if (e.key == "Enter") {
            number_of_emojis_generations = 5;
        }
    }
    searchBarInputElement.onfocus = function () {
        number_of_emojis_generations = 0;
    }

    setVariablesFromSettings(true, true);

    checkReview();
    checkOpenedAddon();
    showNewsInRelease(false);
}

function focusSearchBox() {
    number_of_emojis_generations = 0;
    searchBarInputElement.focus();
}

function copyEmoji(text, tooltip) {
    hideChooseSkinToneMiniPopUp();
    let nameOfSetting = "mostUsed";
    if (!deleting) {
        textToCopyElement.style.display = "block";
        let copyEmojiTemp = text;
        if (multi_copy == "no") {
            copyText = copyEmojiTemp;
        } else {
            let spaceCharacter = " ";
            if (space_emoji == "no") spaceCharacter = "";
            copyText = copyText + spaceCharacter + copyEmojiTemp;
        }
        textToCopyElement.value = copyText;
        var copyTextTemp = textToCopyElement
        copyTextTemp.select();
        document.execCommand("copy");
        textToCopyElement.style.display = "none";
        showMessageBottom(strings["other"]["label-copied"], copyText);

        if (insert_directly_emoji === "yes") {
            browserAgentSettings.tabs.query({active: true, currentWindow: true}, function (tabs) {
                requestNumber++;
                browserAgentSettings.runtime.sendMessage({
                    type: "requestNumber"
                }).then((response) => {
                    browserAgentSettings.tabs.sendMessage(tabs[0].id, {
                        emoji: text, requestNumber: response.requestNumber
                    }).catch(onError);
                    addToMostUsedCopyEmoji(nameOfSetting, text, tooltip);
                }).catch(onError);
            });
        } else {
            addToMostUsedCopyEmoji(nameOfSetting, text, tooltip);
        }


    } else {
        removeFromMostUsed(text);
        showMessageBottom(strings["other"]["label-removed-correctly"], text);

        browserAgentSettings.storage.sync.get(nameOfSetting, function (value) {
            if (value[nameOfSetting] != undefined) {
                //already exist, so set the array at saved status
                mostUsedEmojis = value[nameOfSetting];
            }
            getMostUsedEmojisLength(selectedTitle);
        });
    }
}

function onError(error) {
    console.error(`Error: ${error}`);
}

function addToMostUsedCopyEmoji(nameOfSetting, text, tooltip) {
    browserAgentSettings.storage.sync.get(nameOfSetting, function (value) {
        if (value[nameOfSetting] != undefined) {
            //already exist, so set the array at saved status
            mostUsedEmojis = value[nameOfSetting];
        }
        addToMostUsed(text, tooltip);
        getMostUsedEmojisLength(selectedTitle);
    });
}

function autoCloseAfterCopied() {
    if (auto_close == "yes") {
        window.close();
    }
}

function generateMostUsedEmojis(generateEmojiBool = false) {
    let nameOfSetting = "mostUsed";
    browserAgentSettings.storage.sync.get(nameOfSetting, function (value) {
        if (value[nameOfSetting] != undefined) {
            mostUsedEmojis = value[nameOfSetting];
        }
        if (generateEmojiBool) generateEmojis(1);
        return mostUsedEmojis.length;
    });
}

function getMostUsedEmojisLength(titleToSet) {
    let generateEmojiBool = false;
    if (titleToSet == 1) generateEmojiBool = true;
    return generateMostUsedEmojis(generateEmojiBool);
}

function addToMostUsed(emoji, tooltip) {
    let emojiToAdd = {"emoji": emoji, "occurrences": 1, "tooltip": tooltip};
    let indexToUse = -1; // -1: not in the JSON
    for (let tempIndex = 0; tempIndex < mostUsedEmojis.length && indexToUse == -1; tempIndex++) {
        if (mostUsedEmojis[tempIndex].emoji == emoji) {
            indexToUse = tempIndex;
        }
    }
    if (indexToUse != -1) {
        // the emoji is already in the JSON, so I increment it
        mostUsedEmojis[indexToUse].occurrences++;
        if (mostUsedEmojis[indexToUse].tooltip == undefined || mostUsedEmojis[indexToUse].tooltip == "") {
            if (tooltip != "" && tooltip != undefined) {
                mostUsedEmojis[indexToUse].tooltip = tooltip;
            } else {
                mostUsedEmojis[indexToUse].tooltip = searchForTooltip(emoji);
            }
        }
    } else {
        // the emoji is not in the JSON, so I initialise it at "1"
        mostUsedEmojis.unshift(emojiToAdd); //(unshift -> add the element at the beginning -> in this way the "remove function" won't remove the emoji just inserted
    }
    //remove elements if they are too much (max value = max_columns * max_rows)
    let max_value = max_columns * max_rows;
    if (mostUsedEmojis.length > max_value) {
        let removed = mostUsedEmojis.splice(max_value, (mostUsedEmojis.length - max_value));
    }
    sortMostUsedEmojis();
    browserAgentSettings.storage.sync.set({"mostUsed": mostUsedEmojis}, function () {
    });
    autoCloseAfterCopied();
}

function removeFromMostUsed(emoji) {
    let indexToUse = -1; // -1: not in the JSON
    for (let tempIndex = 0; tempIndex < mostUsedEmojis.length && indexToUse == -1; tempIndex++) {
        if (mostUsedEmojis[tempIndex].emoji == emoji) {
            indexToUse = tempIndex;
        }
    }
    if (indexToUse != -1) {
        // the emoji is in the list, so I remove it
        mostUsedEmojis.splice(indexToUse, 1);
    }
    sortMostUsedEmojis();
    browserAgentSettings.storage.sync.set({"mostUsed": mostUsedEmojis}, function () {
    });
}

function sortMostUsedEmojis() {
    mostUsedEmojis.sort(function (itemA, itemB) {
        // sort based on occurrences (before most used)
        return itemA.occurrences < itemB.occurrences;
    });
}

function generateTitles(search = false, titleToSet = 1, clearSearchBox = true) {
    let widthToSet = 0;
    let titleLength = Object.keys(titles).length;
    let mostUsedLength = getMostUsedEmojisLength(titleToSet);
    if (mostUsedLength == 0) {
        titleLength -= 1;
    }
    if (!search) {
        titleLength -= 1
        if (clearSearchBox) searchBarInputElement.value = "";
    }
    widthToSet = 100 / titleLength;
    titlesElement.textContent = "";
    let i = 0;
    for (let title in titles) {
        let buttonToAdd = document.createElement("input");
        buttonToAdd.type = "button";
        buttonToAdd.classList.add("section-title", theme);
        buttonToAdd.title = titles[title];
        buttonToAdd.id = "title" + i.toString();
        buttonToAdd.value = title;
        //titlesElement.innerHTML += "<input type='button' class='section-title " + theme + "' title='" + titles[title] + "' id='title" + i + "' value='" + title + "' />";
        titlesElement.appendChild(buttonToAdd);
        document.getElementsByClassName("section-title")[i].style.width = widthToSet + "%";
        i++;
    }
    for (let i = 0; i < Object.keys(titles).length; i++) {
        if (i == 0) {
            //search title
            if (!search) document.getElementsByClassName("section-title")[i].style.display = "none"; else document.getElementsByClassName("section-title")[i].style.display = "inline-block";
        } else {
            if (i == 1) {
                if (mostUsedLength == 0) {
                    document.getElementsByClassName("section-title")[i].style.display = "none";
                    if (titleToSet == 1) titleToSet = 2;
                } else {
                    document.getElementsByClassName("section-title")[i].style.display = "inline-block";
                }
            }
            document.getElementsByClassName("section-title")[i].onclick = function (e) {
                number_of_emojis_generations = 5;
                resetAndSetTitle(this.id.replace("title", ""));
            };

            //removeThemeClassClass("section-title", i);

            document.getElementsByClassName("section-title")[i].classList.add(theme + "-section-title");
        }
    }
    if (!search) setTitle(titleToSet); else setTitle(0);
}

function clearAllData() {
    browserAgentSettings.storage.sync.clear();
    mostUsedEmojis = [];
    setVariablesFromSettings(true);
}

function resetAndSetTitle(newTitle) {
    generateTitles(false, newTitle);
}

function setTitle(newTitle) {
    finishEditMode();

    //old title
    if (document.getElementsByClassName("section-title")[selectedTitle].classList.contains("section-title-selected")) {
        document.getElementsByClassName("section-title")[selectedTitle].classList.remove("section-title-selected");
    }
    selectedTitle = newTitle;
    //new title
    document.getElementsByClassName("section-title")[selectedTitle].classList.add("section-title-selected");
    generateEmojis(newTitle);

    if (selectedTitle == 1) {
        searchBoxElement.style.right = "80px";
        deleteButtonElement.style.display = "block";
    } else {
        searchBoxElement.style.right = "40px";
        deleteButtonElement.style.display = "none";
    }
}

function generateEmojis(title) {
    hideChooseSkinToneMiniPopUp();
    emojisElement.textContent = "";
    emojisElement.scrollTo(0, 0);
    let n_emojis = 0;
    if (title == 1) {
        // it's the mostUsedEmojis section
        n_emojis = mostUsedEmojis.length;
        let tempEmojisJSON = mostUsedEmojis;
        let tempEmojisToShow = "";

        for (let i = 0; i < n_emojis; i++) {
            let tooltipToUse = mostUsedEmojis[i].tooltip;
            if (tooltipToUse == undefined) {
                tooltipToUse = "";
            }
            tempEmojisToShow += "<input type='button' class='emoji " + theme + "-button-emoji size-emoji-button-" + size_emojis + "' value='" + mostUsedEmojis[i].emoji + "' title='" + tooltipToUse + "' alt='" + tooltipToUse + "' />";
        }
        if (n_emojis == 0) {
            emojisElement.innerHTML = "<div id='no_most_used_emojis'>" + strings["other"]["label-no-most-used-emojis"].replaceAll("{{properties}}", "class='font-" + font_family + " margin-right-10 font-size-25'") + "</div>";
        } else {
            emojisElement.innerHTML = tempEmojisToShow;
        }
    } else {
        // other sections
        n_emojis = Object.keys(all_emojis[title]).length;
        let tempEmojisJSON = all_emojis[title];
        let tempEmojisToShow = "";

        for (let i in tempEmojisJSON) {
            let tooltipToUse = tempEmojisJSON[i][0];
            /*if (tooltipToUse == undefined) {
                tooltipToUse = "";
            }*/
            tempEmojisToShow += "<input type='button' class='emoji " + theme + "-button-emoji size-emoji-button-" + size_emojis + "' value='" + i + "' title='" + tooltipToUse + "' alt='" + tooltipToUse + "' />";
        }
        emojisElement.innerHTML = tempEmojisToShow;
    }
    for (let i = 0; i < n_emojis; i++) {
        document.getElementsByClassName("emoji")[i].onclick = function (e) {
            copyEmoji(this.value, this.title);
        };
    }
    if (n_emojis > 0 && number_of_emojis_generations > 4) {
        document.getElementsByClassName("emoji")[0].focus();
    }
    number_of_emojis_generations++;
    //setPopUpUI();
    setContextMenu();
}

function setPopUpUI() {
    all_emojis = emojis.slice();

    // selectedTitle==1 means you are in mostUsedEmojis
    let n_emojis = selectedTitle == 1 ? (max_columns * max_rows) : Object.keys(all_emojis[selectedTitle]).length;
    let rows = parseInt(n_emojis / max_columns + "");
    if ((n_emojis % max_columns) != 0) rows += 1;

    let versionNumberText = "Release #{{version-number}}::{{store-name}}";
    versionNumberText = versionNumberText.replaceAll("{{version-number}}", releaseNumber);
    versionNumberText = versionNumberText.replaceAll("{{store-name}}", storeNameAbbr[browserOrChromeIndex]);
    document.getElementById("version-number").textContent = versionNumberText;

    emojisElement.style.height = (max_rows * (size_emojis + marginToUse) + 4) + "px"; //10: 5margin * 2, 4: 2margin * 2
    document.getElementById("popup-content").style.height = (max_rows * (size_emojis + marginToUse) + 4 + 36 + (34 + 12)) + "px"; //36 is the height of titles, 34+12 because there is the search-box (and its margin)

    let widthToSet = (max_columns * (size_emojis + marginToUse) + 4 + 10); //4 is the padding of emojis div, 10 is the width of scrollbar (customised), otherwise it would be 18

    document.body.style.width = widthToSet + "px";
    emojisElement.style.overflowY = "auto";

    emojisElement.scrollTop = (0, 0);

    height_of_the_popup = document.body.offsetHeight;
    width_of_the_popup = document.body.offsetWidth;

    setLanguageSelector(language_to_show);

    document.getElementById("settings-button").onclick = function () {
        showSettings();
    }
    deleteButtonElement.onclick = function () {
        editMode();
    }
    document.getElementById("finish-edit-button").onclick = function () {
        finishEditMode();
    }
    document.getElementById("hide-settings-button").onclick = function () {
        hideElement("settings-section");
        focusSearchBox();
    }
    document.getElementById("clear-data-settings").onclick = function () {
        clearAllData();
        generateTitles(false);
        generateMostUsedEmojis();
        hideElement("settings-section");
        focusSearchBox();
    }
    document.getElementById("save-data-settings").onclick = function () {
        saveSettings();
    }
    document.getElementById("reset-data-settings").onclick = function () {
        resetSettings();
    }
    document.getElementById("emojis-size-selected").onchange = function () {
        setColumnsRowsSettings(document.getElementById("emojis-size-selected").value.toLowerCase(), -1, -1);

        saveSettings();
    }

    document.getElementById("skin-tone-selected").onchange = function () {
        selectSkinToneButton(document.getElementById("skin-tone-selected").selectedIndex);

        saveSettings();
    }
    selectSkinToneButton(document.getElementById("skin-tone-selected").selectedIndex);

    document.getElementById("extension-icon-selected").onchange = function () {
        selectExtensionIconButton(document.getElementById("extension-icon-selected").selectedIndex);

        saveSettings();
    }
    selectExtensionIconButton(document.getElementById("extension-icon-selected").selectedIndex);

    document.getElementById("font-family-selected").onchange = function () {
        checkFontFamily();

        saveSettings();
    }
    checkFontFamily();

    document.getElementById("close-popup-after-copied-selected").onchange = function () {
        selectYesNoAutoClose(document.getElementById("close-popup-after-copied-selected").selectedIndex);
        if (document.getElementById("close-popup-after-copied-selected").selectedIndex) {
            document.getElementById("multi-copy-selected").selectedIndex = 1;
            selectYesNoMultiCopy(1);
        }

        saveSettings();
    }
    selectYesNoAutoClose(document.getElementById("close-popup-after-copied-selected").selectedIndex);

    document.getElementById("multi-copy-selected").onchange = function () {
        selectYesNoMultiCopy(document.getElementById("multi-copy-selected").selectedIndex);
        if (document.getElementById("multi-copy-selected").selectedIndex == 0) {
            document.getElementById("close-popup-after-copied-selected").selectedIndex = 1;
            selectYesNoAutoClose(1);
        }

        saveSettings();
    }
    selectYesNoMultiCopy(document.getElementById("multi-copy-selected").selectedIndex);

    document.getElementById("theme-selected").onchange = function () {
        selectYesNoTheme(document.getElementById("theme-selected").selectedIndex);

        saveSettings();
    }
    selectYesNoTheme(document.getElementById("theme-selected").selectedIndex);

    for (let i = 0; i < 6; i++) {
        document.getElementsByClassName("skin-tone-button")[i].onclick = function () {
            document.getElementById("skin-tone-selected").selectedIndex = i;
            selectSkinToneButton(i);

            saveSettings();
        }
    }

    for (let i = 0; i < 11; i++) {
        document.getElementsByClassName("extension-icon-button")[i].onclick = function () {
            document.getElementById("extension-icon-selected").selectedIndex = i;
            selectExtensionIconButton(i);

            saveSettings();
        }
    }

    document.getElementById("space-emoji-selected").onchange = function () {
        selectYesNoSpaceEmoji(document.getElementById("space-emoji-selected").selectedIndex);

        saveSettings();
    }
    selectYesNoSpaceEmoji(document.getElementById("space-emoji-selected").selectedIndex);

    selectYesNoInsertEmoji(document.getElementById("insert-emoji-selected").selectedIndex, onlyStatus = true);

    document.getElementById("auto-close-yes").onclick = function () {
        document.getElementById("close-popup-after-copied-selected").selectedIndex = 0;
        selectYesNoAutoClose(0);

        document.getElementById("multi-copy-selected").selectedIndex = 1;
        selectYesNoMultiCopy(1);

        saveSettings();
    }
    document.getElementById("auto-close-no").onclick = function () {
        document.getElementById("close-popup-after-copied-selected").selectedIndex = 1;
        selectYesNoAutoClose(1);

        saveSettings();
    }

    document.getElementById("multi-copy-yes").onclick = function () {
        document.getElementById("multi-copy-selected").selectedIndex = 0;
        selectYesNoMultiCopy(0);

        document.getElementById("close-popup-after-copied-selected").selectedIndex = 1;
        selectYesNoAutoClose(1);

        saveSettings();
    }
    document.getElementById("multi-copy-no").onclick = function () {
        document.getElementById("multi-copy-selected").selectedIndex = 1;
        selectYesNoMultiCopy(1);

        saveSettings();
    }
    document.getElementById("space-emoji-no").onclick = function () {
        document.getElementById("space-emoji-selected").selectedIndex = 1;
        selectYesNoSpaceEmoji(1);

        saveSettings();
    }
    document.getElementById("space-emoji-yes").onclick = function () {
        document.getElementById("space-emoji-selected").selectedIndex = 0;
        selectYesNoSpaceEmoji(0);

        saveSettings();
    }
    document.getElementById("insert-emoji-no").onclick = function () {
        document.getElementById("insert-emoji-selected").selectedIndex = 1;
        selectYesNoInsertEmoji(1);

        saveSettings();
    }
    document.getElementById("insert-emoji-yes").addEventListener("click", function () {
        document.getElementById("insert-emoji-selected").selectedIndex = 0;
        selectYesNoInsertEmoji(0);

        saveSettings();
    });

    document.getElementById("theme-light").onclick = function () {
        document.getElementById("theme-selected").selectedIndex = 0;
        selectYesNoTheme(0);

        saveSettings();
    }
    document.getElementById("theme-dark").onclick = function () {
        document.getElementById("theme-selected").selectedIndex = 1;
        selectYesNoTheme(1);

        saveSettings();
    }

    document.getElementById("donate-paypal-settings").onclick = function () {
        let url_to_use = linkDonate[0];
        browserAgentSettings.tabs.create({url: url_to_use});
        window.close();
    };
    document.getElementById("donate-kofi-settings").onclick = function () {
        let url_to_use = linkDonate[1];
        browserAgentSettings.tabs.create({url: url_to_use});
        window.close();
    };
    document.getElementById("donate-liberapay-settings").onclick = function () {
        let url_to_use = linkDonate[2];
        browserAgentSettings.tabs.create({url: url_to_use});
        window.close();
    };
    document.getElementById("translate-settings").onclick = function () {
        let url_to_use = linkTranslate;
        browserAgentSettings.tabs.create({url: url_to_use});
        window.close();
    };

    document.getElementById("columns-selected").onchange = function () {
        saveSettings();
    }

    document.getElementById("rows-selected").onchange = function () {
        saveSettings();
    }


    document.getElementById("need-help-settings").onclick = function () {
        let url_to_use = linkNeedHelp[0];
        browserAgentSettings.tabs.create({url: url_to_use});
        window.close();
    };

    document.getElementById("language-selected").onchange = function () {
        setLanguageFile()
        setLanguageUI();

        saveSettings();
    }

    //document.getElementsByClassName("theme-button")[0].focus(); //after saveSettings get again focus of the first element in Settings

    setSkinToneEmojis();
    setContextMenu();

    setLanguageFile();
    setLanguageUI();

    sendMessageForInjection();
}

function setContextMenu() {
    if (!contextmenu_set) {
        contextmenu_set = true;
        document.addEventListener("contextmenu", function (e) {
            let classNames = e.target.className.split(" ");
            if (classNames.includes("emoji") && !classNames.includes("emoji-mini-popup")) {
                //right-click
                let index_to_use = 0;
                for (index_to_use in emojis_supporting_skin_tones) {
                    if (emojis_supporting_skin_tones[index_to_use]["emojis"].includes(e.target.value)) {
                        //show "sub-popup" (choose another skin-tone for the selected emoji)
                        showChooseSkinToneMiniPopUp(index_to_use, e.clientX, e.clientY);
                    }
                }
            }

            if (!(e.target.nodeName == "INPUT" && e.target.type == "search")) {
                e.preventDefault();
                //show (default) context menu just for the "search-box"
            }
        }, false);
        emojisElement.addEventListener("scroll", function () {
            hideChooseSkinToneMiniPopUp();
        });
    }
}

function showChooseSkinToneMiniPopUp(index, positionX, positionY) {
    let miniPopupSkinToneEmojiElement = document.getElementById("emoji-skin-choose");

    miniPopupSkinToneEmojiElement.textContent = "";
    let n_emojis = Object.keys(emojis_supporting_skin_tones[index]["emojis"]).length;

    miniPopupSkinToneEmojiElement.style.width = (n_emojis * (size_emojis + marginToUse) + 4 + 4) + "px"; //4 is the padding of emojis div

    let tempEmojisJSON = emojis_supporting_skin_tones[index];
    let tempEmojisToShow = "";

    for (let i in tempEmojisJSON["emojis"]) {
        let emoji_temp = tempEmojisJSON["emojis"][i];
        let tooltipToUse = tempEmojisJSON["tooltip"];
        if (tooltipToUse == undefined) {
            tooltipToUse = "";
        }
        let buttonToAdd = document.createElement("input");
        buttonToAdd.type = "button";
        buttonToAdd.classList.add("emoji", "emoji-mini-popup", "size-emoji-button-" + size_emojis.toString(), theme.toString() + "-button-emoji");
        buttonToAdd.title = tooltipToUse;
        buttonToAdd.value = emoji_temp;
        buttonToAdd.alt = tooltipToUse;
        //tempEmojisToShow += "<input type='button' class='emoji emoji-mini-popup " + theme + "-button-emoji size-emoji-button-" + size_emojis + "' value='" + emoji_temp + "' title='" + tooltipToUse + "' alt='" + tooltipToUse + "' />";
        miniPopupSkinToneEmojiElement.appendChild(buttonToAdd);
    }
    //miniPopupSkinToneEmojiElement.innerHTML = tempEmojisToShow;
    for (let i = 0; i < n_emojis; i++) {
        document.getElementsByClassName("emoji-mini-popup")[i].onclick = function (e) {
            copyEmoji(this.value, this.title);
        };
    }

    miniPopupSkinToneEmojiElement.style.display = "block";
    const miniPopUpWidth = miniPopupSkinToneEmojiElement.offsetWidth;
    const miniPopUpHeight = miniPopupSkinToneEmojiElement.offsetHeight;
    miniPopupSkinToneEmojiElement.style.display = "none";

    let topToUse = 0;
    let leftToUse = 0;

    const fixedAdditionalMargin = 2;

    const marginTopTemp = emojisElement.offsetTop;

    const condition1 = (positionY + miniPopUpHeight + fixedAdditionalMargin > height_of_the_popup);
    const condition2 = (positionY - miniPopUpHeight / 2 - fixedAdditionalMargin <= (marginTopTemp));

    if (condition1 && !condition2) {
        topToUse = height_of_the_popup - miniPopUpHeight - fixedAdditionalMargin;
    } else if (!condition1 && condition2) {
        topToUse = marginTopTemp - fixedAdditionalMargin;
    } else {
        topToUse = positionY - miniPopUpHeight / 2 - fixedAdditionalMargin;
    }

    const condition3 = (positionX + miniPopUpWidth / 2 + fixedAdditionalMargin > width_of_the_popup);
    const condition4 = (positionX - miniPopUpWidth / 2 - fixedAdditionalMargin <= (0));

    if (condition3 && !condition4) {
        leftToUse = width_of_the_popup - miniPopUpWidth - fixedAdditionalMargin;
    } else if (!condition3 && condition4) {
        leftToUse = fixedAdditionalMargin;
    } else {
        leftToUse = positionX - miniPopUpWidth / 2 - fixedAdditionalMargin;
    }

    miniPopupSkinToneEmojiElement.style.top = topToUse + "px";
    miniPopupSkinToneEmojiElement.style.left = leftToUse + "px";

    miniPopupSkinToneEmojiElement.style.display = "block";

    miniPopupSkinToneEmojiElement.addEventListener("mouseenter", function () {
        stopTimeoutMiniPopUp();
    });
    miniPopupSkinToneEmojiElement.addEventListener("mouseleave", function () {
        startTimeoutMiniPopUp();
    });

    startTimeoutMiniPopUp();
}

function startTimeoutMiniPopUp() {
    stopTimeoutMiniPopUp();
    set_timeout_mini_popup = setTimeout(function () {
        hideChooseSkinToneMiniPopUp()
    }, hideChooseSkinToneMiniPopUpAfterSeconds);
}

function stopTimeoutMiniPopUp() {
    if (set_timeout_mini_popup != null) {
        clearTimeout(set_timeout_mini_popup);
        set_timeout_mini_popup = null;
    }
}

function hideChooseSkinToneMiniPopUp() {
    document.getElementById("emoji-skin-choose").style.display = "none";

    stopTimeoutMiniPopUp();
}

function checkFontFamily() {
    if (document.getElementById("font-family-selected").selectedIndex != 0) {
        document.getElementById("alert-font-pop-up").style.display = "inline-block";
    } else {
        document.getElementById("alert-font-pop-up").style.display = "none";
    }
}

function setLanguageSelector(selected) {
    let selectElement = document.getElementById('language-selected');
    selectElement.textContent = "";
    for (let language in supported_languages) {
        let optionElement = document.createElement("option");
        optionElement.value = language;
        optionElement.selected = (language == selected);
        optionElement.textContent = supported_languages[language];
        selectElement.appendChild(optionElement);
    }
}

function showReviewAddonMessage() {
    let message_element = document.createElement("div");
    message_element.id = "review-message";
    message_element.innerHTML = "" + strings["other"]["label-review-the-addon"].replaceAll("{{properties}}", "class='font-" + font_family + " font-size-22 margin-right-5'").replaceAll("{{store}}", storeName[browserOrChromeIndex]) + "<br><div id='review-message-buttons'></div>";
    document.getElementById("popup-content").append(message_element);

    let background_opacity = document.createElement("div");
    background_opacity.id = "background-opacity-review";
    document.getElementById("popup-content").append(background_opacity);

    let button_review_now_element = document.createElement("button");
    button_review_now_element.onclick = function () {
        setReviewed(-1);
        let url_review_addons = linkReview[browserOrChromeIndex];
        browserAgentSettings.tabs.create({url: url_review_addons});
        window.close();
    };
    button_review_now_element.className = "review-button";
    button_review_now_element.id = "review-button-now";
    button_review_now_element.textContent = strings["other"]["button-review-now"];

    let button_review_later_element = document.createElement("button");
    button_review_later_element.onclick = function () {
        setReviewed(0);
        hideReviewMessage();
    };
    button_review_later_element.className = "review-button";
    button_review_later_element.id = "review-button-later";
    button_review_later_element.textContent = strings["other"]["button-review-later"];

    let button_dont_want_element = document.createElement("button");
    button_dont_want_element.onclick = function () {
        setReviewed(-1);
        hideReviewMessage();
    };
    button_dont_want_element.className = "review-button";
    button_dont_want_element.id = "no-review-button";
    button_dont_want_element.textContent = strings["other"]["button-sorry-dont-want"];

    document.getElementById("review-message-buttons").append(button_dont_want_element);
    document.getElementById("review-message-buttons").append(button_review_later_element);
    document.getElementById("review-message-buttons").append(button_review_now_element);

    button_review_now_element.focus();
}

function showOpenedAddonMessage(numberOpened) {
    let message_element = document.createElement("div");
    message_element.id = "opened-addon-message";
    message_element.innerHTML = "" + strings["other"]["label-you-opened-this-addon-times"].replaceAll("{{properties1}}", "class='text-center padding-5'").replaceAll("{{properties2}}", "class='font-" + font_family + " font-size-20 margin-right-5'").replaceAll("{{properties3}}", "class='font-size-20 font-bold'").replaceAll("{{times}}", numberOpened.toString()).replaceAll("{{properties4}}", "class='text-left padding-5'") + "<div id='opened-addon-message-buttons' class='message-buttons-container text-right'></div>";
    document.getElementById("popup-content").append(message_element);

    let background_opacity = document.createElement("div");
    background_opacity.className = "background-opacity";
    background_opacity.id = "background-opacity-opened-addon";
    document.getElementById("popup-content").append(background_opacity);

    let button_donate_element = document.createElement("button");
    button_donate_element.onclick = function () {
        browserAgentSettings.tabs.create({url: linkDonate[0]});
        window.close();
    };
    button_donate_element.className = "message-button";
    button_donate_element.id = "opened-addon-button-donate";
    button_donate_element.textContent = strings["other"]["button-buy-me-a-coffee"];

    let button_later_element = document.createElement("button");
    button_later_element.onclick = function () {
        hideOpenedAddonMessage();
    };
    button_later_element.className = "message-button";
    button_later_element.id = "opened-addon-button-later";
    button_later_element.textContent = strings["other"]["button-maybe-another-time"];

    document.getElementById("opened-addon-message-buttons").append(button_donate_element);
    document.getElementById("opened-addon-message-buttons").append(button_later_element);

    button_donate_element.focus();
}

function showMessageTop(text) {
    let message_element = document.createElement("div");
    message_element.id = "top-message";
    let text_to_use = text;
    text_to_use = text_to_use.replace(/{{emoji}}/g, "<span class='font-" + font_family + " font-size-22 margin-right-5'>");
    text_to_use = text_to_use.replace(/{{\/emoji}}/g, "</span>");
    message_element.innerHTML = "<div id='title-release-notes'>Release notes</div>" + text_to_use + "<br><div id='top-message-buttons'></div>";
    document.getElementById("popup-content").append(message_element);

    let background_opacity = document.createElement("div");
    background_opacity.className = "background-opacity";
    background_opacity.id = "background-opacity-top";
    document.getElementById("popup-content").append(background_opacity);

    let button_hide_element = document.createElement("button");
    button_hide_element.onclick = function () {
        hideReleaseNotesMessage();
        let this_release = browserAgentSettings.runtime.getManifest().version;
        updateLastRelease(this_release);
    };
    button_hide_element.className = "message-button";
    button_hide_element.id = "close-release-button";
    button_hide_element.textContent = strings["other"]["button-hide"];

    document.getElementById("top-message-buttons").append(button_hide_element);
}

function openLink(url) {
    browserAgentSettings.tabs.create({url: url});
    window.close();
}

function showMessageBottom(text = "", emoji_text = null) {
    let text_to_use = strings["other"]["label-copied"];
    if (text != "") text_to_use = text
    let index_to_use = char_copied_n;
    char_copied_n++;
    let text_message_to_show = document.createElement("div");
    text_message_to_show.className = "character-copied";
    text_message_to_show.id = "character-copied-" + index_to_use;
    let emoji_to_use = "";
    if (emoji_text != null) {
        emoji_to_use = emoji_text;
    }
    text_message_to_show.innerHTML = text_to_use.replaceAll("{{emojis}}", "<span class='font-" + font_family + " margin-right-10'>" + emoji_to_use + "</span>");

    document.getElementById("popup-content").append(text_message_to_show);
    setTimeout(function () {
        hideElement("character-copied-" + index_to_use);
    }, hideMessageBottomAfterSeconds);
}

function toggleElement(id_to_use) {
    let display_attribute = document.getElementById(id_to_use).style.display;
    if (display_attribute == "block") hideElement(id_to_use); else showElement(id_to_use);
}

function hideElement(id_to_use) {
    document.getElementById(id_to_use).style.display = "none";
}

function showElement(id_to_use) {
    document.getElementById(id_to_use).style.display = "block";
}

function setReviewed(value) {
    browserAgentSettings.storage.sync.set({"review-addon": value}, function () {
    });
    if (value == -1) {
        hideReviewMessage();
    }
}

function checkReview() {
    browserAgentSettings.storage.sync.get("review-addon", function (value) {
        let count = 0;
        if (value["review-addon"] != undefined) {
            if (value["review-addon"] != -1) count = value["review-addon"] + 1; else count = -1;
        }
        if (count >= 30) showReviewAddonMessage(); else if (count > -1) setReviewed(count);
    });
}

function hideReviewMessage() {
    hideElement("review-message");
    hideElement("background-opacity-review");
}

function incrementOpenedAddon(value) {
    value += 1;
    browserAgentSettings.storage.sync.set({"opened-addon": value}, function () {
    });
}

function checkOpenedAddon() {

    browserAgentSettings.storage.sync.get("opened-addon", function (value) {
        let currentValue = 0;
        if (value["opened-addon"] != undefined) {
            currentValue = value["opened-addon"];
        }
        incrementOpenedAddon(currentValue);

        currentValue++

        if (currentValue == 1000 || currentValue == 100000 || currentValue == 1000000 || currentValue == 10000000) {
            showOpenedAddonMessage(currentValue);
        }
    });
}

function hideOpenedAddonMessage() {
    hideElement("opened-addon-message");
    hideElement("background-opacity-opened-addon");
}

function searchEmoji(value) {
    all_emojis[0] = {};
    let n_results = 0;
    let max_results = (max_rows * max_columns) * 3;
    let valueToUse = value.toLowerCase().replace(".", "").replace("’", "'").replace("“", "\"").replace("”", "\"");
    let valueToCheck = valueToUse.replace(/\s/ig, "");
    if (valueToCheck.length > 1) {
        if (valueToCheck === "saverio" || valueToCheck === "sav22999") {
            //easter egg
            //show S A V E R I O
            easter_egg_emojis = ["🔸", "🇸", "🇦", "🇻", "🇪", "🇷", "🇮", "🇴", "🔹"];
            title = 5; //TODO: this index is fixed manually, and it's the "symbols" section
            for (let index in easter_egg_emojis) {
                all_emojis[0][easter_egg_emojis[index]] = [all_emojis[title][easter_egg_emojis[index]][0]]; //add emoji to the list
                n_results++;
            }
        } else {
            for (let title = 1; title < Object.keys(titles).length && n_results <= max_results; title++) {
                for (let emoji in all_emojis[title]) {
                    if (n_results >= max_results) {
                        break;
                    }
                    for (let description in all_emojis[title][emoji]) {
                        let tmp_str = all_emojis[title][emoji][description].toLowerCase().replace(".", "");
                        if (tmp_str.includes(valueToUse) || valueToUse.includes(tmp_str)) {
                            all_emojis[0][emoji] = [all_emojis[title][emoji][0]]; //add emoji to the list
                            n_results++;
                            break;
                        }
                    }
                }
            }
        }
        generateTitles(true, 0);
        if (n_results == 0) {
            emojisElement.innerHTML = "<div id='no_emojis_found'>" + strings["other"]["label-no-emojis-found"].replaceAll("{{properties}}", "class='font-" + font_family + " margin-right-10 font-size-25'") + "</div>";
        }
    } else {
        if (this.selectedTitle == 0) {
            if (valueToCheck.length == 0) generateTitles(false); //clear searchbox
            else generateTitles(false, 1, false); //don't clear searchbox
        }
    }
}

function showSettings() {
    hideChooseSkinToneMiniPopUp();
    showElement("settings-section");

    setVariablesFromSettings(true);
}

function setColumnsRowsSettings(value, selected_c = 2, selected_r = 2) {
    let min_c = 8, max_c = 14, min_r = 4, max_r = 10;

    marginToUse = 10;

    switch (value) {
        case "big":
            max_c = 13;
            max_r = 8;
            break;

        case "very big":
            max_c = 11;
            max_r = 7;
            break;

        case "small":
            min_c = 9;
            marginToUse = 5;
            break;

        case "very small":
            min_c = 10;
            break;

        default:
            max_c = 14;
            max_r = 10;
            marginToUse = 10;
        //nothing -> default value
    }

    if (selected_c == -1) selected_c = max_columns - min_c;
    if (selected_r == -1) selected_r = max_rows - min_r;
    generateColumnsSettings(min_c, max_c, selected_c);
    generateRowsSettings(min_r, max_r, selected_r);
}

function generateColumnsSettings(min, max, selected) {
    generateOptionsSelectSettings(min, max, selected, document.getElementById("columns-selected"));
}

function generateRowsSettings(min, max, selected) {
    generateOptionsSelectSettings(min, max, selected, document.getElementById("rows-selected"));
}

function generateOptionsSelectSettings(min, max, selected, element) {
    element.textContent = "";
    for (let i = min; i <= max; i++) {
        let details = "";
        if (selected == (i - min)) details = " selected";
        element.innerHTML += "<option" + details + ">" + i + "</option>";
    }
}

function resetSettings() {
    saveSettings(true);
}

function saveSettings(reset = false) {
    let theme = document.getElementById("theme-selected").selectedIndex;
    let columns = document.getElementById("columns-selected").selectedIndex;
    let rows = document.getElementById("rows-selected").selectedIndex;
    let emojisSize = document.getElementById("emojis-size-selected").selectedIndex;
    let fontFamily = document.getElementById("font-family-selected").selectedIndex;
    let autoClosePopup = document.getElementById("close-popup-after-copied-selected").selectedIndex;
    let skinTone = document.getElementById("skin-tone-selected").selectedIndex;
    let multiCopy = document.getElementById("multi-copy-selected").selectedIndex;
    let extensionIcon = document.getElementById("extension-icon-selected").selectedIndex;
    let language = document.getElementById("language-selected").value;
    let spaceEmoji = document.getElementById("space-emoji-selected").selectedIndex;
    let alsoInsertEmoji = document.getElementById("insert-emoji-selected").selectedIndex;

    let jsonSettings = {
        "theme": theme,
        "columns": columns,
        "rows": rows,
        "size": emojisSize,
        "font": fontFamily,
        "auto_close": autoClosePopup,
        "skin_tone": skinTone,
        "multi_copy": multiCopy,
        "extension_icon": extensionIcon,
        "language": language,
        "space_emoji": spaceEmoji,
        "insert_directly_emoji": alsoInsertEmoji,
    };
    if (reset) {
        jsonSettings = jsonSettingsDefaultValue;
    }
    browserAgentSettings.storage.sync.set({"settings": jsonSettings}, function () {
        //hideElement("settings-section");
        number_of_emojis_generations = 0;
        focusSearchBox();
        setVariablesFromSettings(true);
        setSkinToneEmojis();
    });
}

function setVariablesFromSettings(resize_popup_ui = false, focus_search_box = false) {
    let themeElement = document.getElementById("theme-selected");
    let columnsElement = document.getElementById("columns-selected");
    let rowsElement = document.getElementById("rows-selected");
    let emojisSizeElement = document.getElementById("emojis-size-selected");
    let fontFamily = document.getElementById("font-family-selected");
    let autoClosePopupElement = document.getElementById("close-popup-after-copied-selected");
    let skinToneElement = document.getElementById("skin-tone-selected");
    let multiCopyElement = document.getElementById("multi-copy-selected");
    let extensionIconElement = document.getElementById("extension-icon-selected");
    let languageElement = document.getElementById("language-selected");
    let spaceEmojiElement = document.getElementById("space-emoji-selected");
    let alsoInsertEmojiElement = document.getElementById("insert-emoji-selected");

    let jsonSettings = jsonSettingsDefaultValue;
    let nameOfSetting = "settings";

    browserAgentSettings.storage.sync.get(nameOfSetting, function (value) {
        if (value[nameOfSetting] != undefined) {
            jsonSettings = value[nameOfSetting];
        }
        setColumnsRowsSettings(emojisSizeElement.value.toLowerCase(), jsonSettings.columns, jsonSettings.rows);

        themeElement.selectedIndex = 0;
        if (jsonSettings.theme != undefined) themeElement.selectedIndex = jsonSettings.theme;
        columnsElement.selectedIndex = 2;
        if (jsonSettings.columns != undefined) columnsElement.selectedIndex = jsonSettings.columns;
        rowsElement.selectedIndex = 2;
        if (jsonSettings.rows != undefined) rowsElement.selectedIndex = jsonSettings.rows;
        emojisSizeElement.selectedIndex = 2;
        if (jsonSettings.size != undefined) emojisSizeElement.selectedIndex = jsonSettings.size;
        fontFamily.selectedIndex = 0;
        if (jsonSettings.font != undefined || jsonSettings.font < fontFamily.length) fontFamily.selectedIndex = jsonSettings.font;
        autoClosePopupElement.selectedIndex = 1;
        if (jsonSettings.auto_close != undefined) autoClosePopupElement.selectedIndex = jsonSettings.auto_close;
        skinToneElement.selectedIndex = 0;
        if (jsonSettings.skin_tone != undefined) skinToneElement.selectedIndex = jsonSettings.skin_tone;
        multiCopyElement.selectedIndex = 1;
        if (jsonSettings.multi_copy != undefined) multiCopyElement.selectedIndex = jsonSettings.multi_copy;
        extensionIconElement.selectedIndex = 0;
        if (jsonSettings.extension_icon != undefined) extensionIconElement.selectedIndex = jsonSettings.extension_icon;
        let languageToSet = browserAgentSettings.i18n.getUILanguage().toString();
        if (jsonSettings.language != undefined) languageToSet = getLanguageCode(jsonSettings.language);
        spaceEmojiElement.selectedIndex = 0;
        if (jsonSettings.space_emoji != undefined) spaceEmojiElement.selectedIndex = jsonSettings.space_emoji;
        alsoInsertEmojiElement.selectedIndex = 1;
        if (jsonSettings.insert_directly_emoji != undefined) alsoInsertEmojiElement.selectedIndex = jsonSettings.insert_directly_emoji;


        let languagesTemp = [];
        for (let item in supported_languages) {
            languagesTemp.push(item);
        }
        languageElement.selectedIndex = languagesTemp.indexOf(languageToSet);

        theme = themeElement.value.toLowerCase();
        language_to_show = languageToSet;
        max_columns = columnsElement.value;
        max_rows = rowsElement.value;
        font_family = fontFamily.value;

        auto_close = autoClosePopupElement.value.toLowerCase();
        /*
        if (skin_tone_selected !== undefined) skin_tone_previous = skin_tone_selected;
        else skin_tone_previous = "";
        */
        multi_copy = multiCopyElement.value.toLowerCase();
        skin_tone_previous = skin_tone_selected;
        skin_tone_selected = skin_tones[skinToneElement.selectedIndex];
        switch (emojisSizeElement.value.toLowerCase()) {
            case "very small":
                size_emojis = 30;
                break;
            case "small":
                size_emojis = 35;
                break;
            case "big":
                size_emojis = 50;
                break;
            case "very big":
                size_emojis = 60;
                break;

            case "normal":
            default:
                size_emojis = 40;
        }
        extension_icon_selected = extensionIconElement.selectedIndex;
        if (extension_icon_selected == undefined) extension_icon_selected = 0;
        space_emoji = spaceEmojiElement.value.toLowerCase();
        insert_directly_emoji = alsoInsertEmojiElement.value.toLowerCase();

        setExtensionIcon("../img/extension-icons/" + extension_icons[extension_icon_selected] + ".png");

        setFontFamily();

        setTheme();

        if (resize_popup_ui) {
            setPopUpUI();
            resetAndSetTitle();
            generateEmojis(1);
        }

        if (focus_search_box) {
            focusSearchBox();
        }
    });
}

function getLanguageCode(language) {
    if (supported_languages[language] != undefined) return language; else return "en";
}

function setFontFamily() {
    emojisElement.classList.remove("font-twemoji", "font-notocoloremoji", "font-openmojicolor", "font-openmojiblack", "font-default", "font-twemoji-fix-macos", "font-joypixels");
    titlesElement.classList.remove("font-twemoji", "font-notocoloremoji", "font-openmojicolor", "font-openmojiblack", "font-default", "font-twemoji-fix-macos", "font-joypixels");
    topSectionElement.classList.remove("font-twemoji", "font-notocoloremoji", "font-openmojicolor", "font-openmojiblack", "font-default", "font-twemoji-fix-macos", "font-joypixels");
    document.getElementById("emoji-skin-choose").classList.remove("font-twemoji", "font-notocoloremoji", "font-openmojicolor", "font-openmojiblack", "font-default", "font-twemoji-fix-macos", "font-joypixels");

    emojisElement.classList.add("font-" + font_family);
    titlesElement.classList.add("font-" + font_family);
    topSectionElement.classList.add("font-" + font_family);
    document.getElementById("emoji-skin-choose").classList.add("font-" + font_family);
}

function setTheme() {
    // theme=light, theme=dark
    removeThemeClassId("popup-content");
    removeThemeClassId("emoji-skin-choose");
    removeThemeClassId("search-bar-input", "-search-bar-input");
    removeThemeClassId("settings-button", "-settings-button");
    removeThemeClassId("settings-section", "-settings");
    removeThemeClassId("delete-button", "-delete-button");
    removeThemeClassId("finish-edit-button", "-finish-edit-button");
    removeThemeClassId("theme-selected", "-select");
    removeThemeClassId("columns-selected", "-select");
    removeThemeClassId("rows-selected", "-select");
    removeThemeClassId("emojis-size-selected", "-select");
    removeThemeClassId("save-data-settings", "-btn-settings-button");
    removeThemeClassId("reset-data-settings", "-btn-settings-button");
    removeThemeClassId("close-popup-after-copied-selected", "-select");
    removeThemeClassId("multi-copy-selected", "-select");
    removeThemeClassId("skin-tone-selected", "-select");
    removeThemeClassId("font-family-selected", "-select");
    removeThemeClassId("extension-icon-selected", "-select");
    removeThemeClassId("donate-paypal-settings", "-btn-settings-button");
    removeThemeClassId("donate-kofi-settings", "-btn-settings-button");
    removeThemeClassId("donate-liberapay-settings", "-btn-settings-button");
    removeThemeClassId("translate-settings", "-btn-settings-button");
    removeThemeClassId("language-selected", "-select");
    removeThemeClassId("space-emoji-selected", "-select");
    removeThemeClassId("insert-emoji-selected", "-select");

    document.getElementById("popup-content").classList.add(theme);
    document.getElementById("emoji-skin-choose").classList.add(theme);
    searchBarInputElement.classList.add(theme + "-search-bar-input");
    document.getElementById("settings-button").classList.add(theme + "-settings-button");
    document.getElementById("settings-section").classList.add(theme + "-settings");
    deleteButtonElement.classList.add(theme + "-delete-button");
    document.getElementById("finish-edit-button").classList.add(theme + "-finish-edit-button");
    document.getElementById("theme-selected").classList.add(theme + "-select");
    document.getElementById("columns-selected").classList.add(theme + "-select");
    document.getElementById("rows-selected").classList.add(theme + "-select");
    document.getElementById("emojis-size-selected").classList.add(theme + "-select");
    document.getElementById("close-popup-after-copied-selected").classList.add(theme + "-select");
    document.getElementById("multi-copy-selected").classList.add(theme + "-select");
    document.getElementById("skin-tone-selected").classList.add(theme + "-select");
    document.getElementById("font-family-selected").classList.add(theme + "-select");
    document.getElementById("extension-icon-selected").classList.add(theme + "-select");
    document.getElementById("save-data-settings").classList.add(theme + "-btn-settings-button");
    document.getElementById("reset-data-settings").classList.add(theme + "-btn-settings-button");
    document.getElementById("donate-paypal-settings").classList.add(theme + "-btn-settings-button");
    document.getElementById("donate-kofi-settings").classList.add(theme + "-btn-settings-button");
    document.getElementById("donate-liberapay-settings").classList.add(theme + "-btn-settings-button");
    document.getElementById("translate-settings").classList.add(theme + "-btn-settings-button");
    document.getElementById("language-selected").classList.add(theme + "-select");
    document.getElementById("space-emoji-selected").classList.add(theme + "-select");
    document.getElementById("insert-emoji-selected").classList.add(theme + "-select");

    //TODO: change when add/remove an option in Settings
    for (let n = 0; n < 11; n++) {
        removeThemeClassClass("subsection-settings", n, "-subsection-settings");
        document.getElementsByClassName("subsection-settings")[n].classList.add(theme + "-subsection-settings");
    }

    document.getElementById("save-data-settings").classList.add(theme + "-save-data-settings-button");
    document.getElementById("reset-data-settings").classList.add(theme + "-reset-data-settings-button");
}

function removeThemeClassId(id_to_use, details_to_use = "") {
    document.getElementById(id_to_use).classList.remove("dark" + details_to_use);
    document.getElementById(id_to_use).classList.remove("light" + details_to_use);
}

function removeThemeClassClass(class_to_use, index_to_use, details_to_use = "") {
    document.getElementsByClassName(class_to_use)[index_to_use].classList.remove("dark" + details_to_use);
    document.getElementsByClassName(class_to_use)[index_to_use].classList.remove("light" + details_to_use);
}

function setSkinToneEmojis() {
    let replacement_symbol = "{{skin_tone}}";
    if (skin_tone_selected === undefined) skin_tone_selected = "";
    let string = emojis.slice();

    string[3] = (JSON.stringify(string[3])).replaceAll(replacement_symbol, skin_tone_selected);
    string[8] = (JSON.stringify(string[8])).replaceAll(replacement_symbol, skin_tone_selected);
    string[12] = (JSON.stringify(string[12])).replaceAll(replacement_symbol, skin_tone_selected);

    let all_emojis_temp = all_emojis;
    emojis_supporting_skin_tones = {};
    let emoji_index_temp = 0;
    for (emoji_key_temp in all_emojis_temp) {
        for (emoji_value_temp in all_emojis_temp[emoji_key_temp]) {
            if (emoji_value_temp.includes("{{skin_tone}}")) {
                emoji_index_temp++;
                emojis_supporting_skin_tones[emoji_index_temp] = {};
                emojis_supporting_skin_tones[emoji_index_temp]["tooltip"] = all_emojis_temp[emoji_key_temp][emoji_value_temp][0];
                emojis_supporting_skin_tones[emoji_index_temp]["emojis"] = [];
                for (skin_tone_temp in skin_tones) {
                    emojis_supporting_skin_tones[emoji_index_temp]["emojis"].push(emoji_value_temp.replaceAll("{{skin_tone}}", skin_tones[skin_tone_temp]));
                }
            }
        }
    }

    all_emojis[3] = JSON.parse(string[3]);
    all_emojis[8] = JSON.parse(string[8]);
    all_emojis[12] = JSON.parse(string[12]);
}

function editMode() {
    searchBarInputElement.style.display = "none";
    document.getElementById("text-click-on-emoji-to-remove").style.display = "block";
    document.getElementById("finish-edit-button").style.display = "block";
    deleteButtonElement.style.display = "none";
    searchBoxElement.style.right = "128px";
    if (searchBoxElement.offsetWidth < 370) document.getElementById("text-click-on-emoji-to-remove").style.margin = "-1px"; else document.getElementById("text-click-on-emoji-to-remove").style.margin = "5px";

    deleting = true;
}

function finishEditMode() {
    searchBarInputElement.style.display = "block";
    document.getElementById("text-click-on-emoji-to-remove").style.display = "none";
    document.getElementById("finish-edit-button").style.display = "none";
    deleteButtonElement.style.display = "block";
    searchBoxElement.style.right = "80px";

    deleting = false;
}

function selectSkinToneButton(index) {
    //reset all buttons (skin)
    document.querySelectorAll('.skin-tone-button').forEach((item) => {
        item.classList.remove('skin-tone-button-selected');
    });

    document.getElementsByClassName("skin-tone-button")[index].classList.add("skin-tone-button-selected");
}

function selectExtensionIconButton(index) {
    //reset all buttons (extension)
    document.querySelectorAll('.extension-icon-button').forEach((item) => {
        item.classList.remove('extension-icon-button-selected');
    });

    document.getElementsByClassName("extension-icon-button")[index].classList.add("extension-icon-button-selected");
}

function selectYesNoAutoClose(index) {
    selectYesNoButton("auto-close-button", index);
}

function selectYesNoMultiCopy(index) {
    selectYesNoButton("multi-copy-button", index);
    copyText = "";
}

function selectYesNoSpaceEmoji(index) {
    selectYesNoButton("space-emoji-button", index);
}

function sendMessageForInjection(forced = false) {
    browserAgentSettings.runtime.sendMessage({type: "inject", file: contestScriptJs[0].file, forced: forced});
}

let insertEmojiStatus = 0;
let contestScriptMatches = ["<all_urls>"];
let contestScriptJs = [{file: "./js/emoji-insert-directly.js"}];

function selectYesNoInsertEmoji(index, onlyStatus = false) {
    if (onlyStatus) {
        selectYesNoButton("insert-emoji-button", index);
        browserAgentSettings.permissions.getAll().then((result) => {
            //check permissions and in case force to "No"
            if (index === 0 && (!result.origins.includes(contestScriptMatches[0]) || !result.permissions.includes("activeTab"))) {
                selectYesNoButton("insert-emoji-button", 1);
                insert_directly_emoji = "no";
            }
        });
    } else {
        insertEmojiStatus++;
        if (index === 0) {
            // yes
            if (insertEmojiStatus === 1) {
                const permissionsToRequest = {
                    permissions: ["activeTab"], origins: contestScriptMatches
                }

                async function onResponse(response) {
                    if (response) {
                        //Granted
                        selectYesNoButton("insert-emoji-button", index);
                        saveSettings();
                        sendMessageForInjection(true); //forced the injection the first time
                    } else {
                        //Refused
                        selectYesNoButton("insert-emoji-button", 1);
                        saveSettings();
                    }
                    return browserAgentSettings.permissions.getAll();
                }

                browserAgentSettings.permissions.request(permissionsToRequest).then(onResponse);
            }
        } else {
            insertEmojiStatus = 0;
            // no
            selectYesNoButton("insert-emoji-button", 1);
            saveSettings();
        }
    }
}

function selectYesNoTheme(index) {
    selectYesNoButton("theme-button", index);
}

function selectYesNoButton(class_name, index) {
    document.getElementsByClassName(class_name)[0].classList.remove("button-yes-no-selected"); //yes
    document.getElementsByClassName(class_name)[1].classList.remove("button-yes-no-selected"); //no

    document.getElementsByClassName(class_name)[index].classList.add("button-yes-no-selected");
}

function showNewsInRelease(forced = false) {
    let last_release_saved = "";
    let nameOfSetting = "release_notes";
    browserAgentSettings.storage.sync.get(nameOfSetting, function (value) {
        if (value[nameOfSetting] != undefined) {
            last_release_saved = value[nameOfSetting];
        }
        let this_release = releaseNumber;
        if (last_release_saved != this_release || forced) {
            if (releaseNotes(this_release) != "") {
                showMessageTop(releaseNotes(this_release));
            }
        }
    });
}

function updateLastRelease(release) {
    browserAgentSettings.storage.sync.set({"release_notes": release}, function () {
    });
}

function hideReleaseNotesMessage() {
    hideElement("top-message");
    hideElement("background-opacity-top");
}

function searchForTooltip(emojiToSearch) {
    let found = false;
    let tooltipToReturn = "";
    for (let title = 1; title < Object.keys(titles).length && !found; title++) {
        for (let emoji in all_emojis[title]) {
            if (found) {
                break;
            }
            if (emoji == emojiToSearch) {
                tooltipToReturn = all_emojis[title][emoji][0];
                found = true;
            }
        }
    }
    return tooltipToReturn;
}

function setExtensionIcon(url) {
    browserAgentSettings.browserAction.setIcon({path: url});
}

function setLanguageFile() {
    lang = language_to_show;

    if (supported_languages[lang] == undefined || settings_strings[lang] == undefined || other_strings[lang] == undefined) {
        lang = "en";
    }

    strings["settings"] = settings_strings[lang];
    strings["other"] = other_strings[lang];
    emojis = emojis_language[lang];
    titles = titles_language[lang];

    all_emojis = emojis.slice();
    setSkinToneEmojis();
}

function setLanguageUI() {
    document.getElementById("search-bar-input").placeholder = strings["settings"]["placeholder-searchbox"];
    document.getElementById("text-click-on-emoji-to-remove").textContent = strings["settings"]["label-click-on-the-emojis"];
    document.getElementById("finish-edit-button").value = strings["settings"]["button-finish"];
    document.getElementById("delete-button").title = strings["settings"]["label-delete-emoji"];
    document.getElementById("settings-button").title = strings["settings"]["button-open-settings"];
    document.getElementById("settings-title").textContent = strings["settings"]["label-settings"];
    document.getElementById("label-theme").textContent = strings["settings"]["label-theme"];
    document.getElementById("theme-light").textContent = strings["settings"]["button-light"];
    document.getElementById("theme-dark").textContent = strings["settings"]["button-dark"];
    document.getElementById("label-columns").textContent = strings["settings"]["label-columns"];
    document.getElementById("label-rows").textContent = strings["settings"]["label-rows"];
    document.getElementById("label-emoji-size").textContent = strings["settings"]["label-emoji-size"];
    document.getElementById("select-emoji-size-1").textContent = strings["settings"]["select-very-small"];
    document.getElementById("select-emoji-size-2").textContent = strings["settings"]["select-small"];
    document.getElementById("select-emoji-size-3").textContent = strings["settings"]["select-medium"];
    document.getElementById("select-emoji-size-4").textContent = strings["settings"]["select-big"];
    document.getElementById("select-emoji-size-5").textContent = strings["settings"]["select-very-big"];
    document.getElementById("label-close-popup").textContent = strings["settings"]["label-close-pop-up-after-emoji"];
    document.getElementById("auto-close-yes").textContent = strings["settings"]["button-yes"];
    document.getElementById("auto-close-no").textContent = strings["settings"]["button-no"];
    document.getElementById("label-multi-copy").textContent = strings["settings"]["label-multi-copy"];
    document.getElementById("multi-copy-yes").textContent = strings["settings"]["button-yes"];
    document.getElementById("multi-copy-no").textContent = strings["settings"]["button-no"];
    document.getElementById("label-skin-tone").textContent = strings["settings"]["label-skin-tone"];
    document.getElementById("label-font-family").textContent = strings["settings"]["label-font-family"];
    document.getElementById("select-font-family-1").textContent = strings["settings"]["select-twitter"];
    document.getElementById("select-font-family-2").textContent = strings["settings"]["select-openmoji-color"];
    document.getElementById("select-font-family-3").textContent = strings["settings"]["select-openmoji-black"];
    document.getElementById("select-font-family-4").textContent = strings["settings"]["select-os-emoji-font"];
    document.getElementById("alert-font-pop-up").textContent = strings["settings"]["label-font-family-use-twitter"];
    document.getElementById("label-extension-icon").textContent = strings["settings"]["label-extension-icon"];
    document.getElementById("label-language").textContent = strings["settings"]["label-language"];
    document.getElementById("label-space-emoji").textContent = strings["settings"]["label-space-emoji"];
    document.getElementById("space-emoji-yes").textContent = strings["settings"]["button-yes"];
    document.getElementById("space-emoji-no").textContent = strings["settings"]["button-no"];
    document.getElementById("label-insert-emoji").textContent = strings["settings"]["label-insert-emoji"];
    document.getElementById("insert-emoji-yes").textContent = strings["settings"]["button-yes"];
    document.getElementById("insert-emoji-no").textContent = strings["settings"]["button-no"];
    document.getElementById("save-data-settings").value = strings["settings"]["button-save"];
    document.getElementById("reset-data-settings").value = strings["settings"]["button-reset-settings"];
    document.getElementById("clear-data-settings").value = strings["settings"]["button-clear-all-data"];
    document.getElementById("need-help-settings").value = strings["settings"]["button-need-help"];
    document.getElementById("donate-paypal-settings").value = strings["settings"]["button-paypal"];
    document.getElementById("donate-liberapay-settings").value = strings["settings"]["button-liberapay"];
    document.getElementById("donate-kofi-settings").value = strings["settings"]["button-ko-fi"];
    document.getElementById("translate-settings").value = strings["settings"]["button-translate"];
    document.getElementById("made-in-basilicata-settings").innerHTML = strings["settings"]["label-made-with-heart-basilicata"].replaceAll("{{properties}}", "class='font-" + font_family + " font-size-16'");
}

loaded();
