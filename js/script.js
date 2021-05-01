var selectedTitle = 1;
var char_copied_n = 0;

var max_columns = 10;
var max_rows = 6;
var theme = 0;
var size_emojis = 40; //30, 35, 40, 50, 60
var auto_close = "no"; //yes, no
var skin_tone_selected = ""; //nothing
var skin_tone_previous = "";
var multi_copy = "no";

var all_emojis = [];

var deleting = false;

var number_of_emojis_generations = 0;

var skin_tones = ["", "🏻", "🏼", "🏽", "🏾", "🏿"]; //standard(yellow)|light|medium-light|medium|medium-dark|dark

var mostUsedEmojis = [];

var browserOrChromeIndex = 0; //TODO: change manually: {0: Firefox, 1: Microsoft Edge, 2: Chrome Web Store}

var browserAgentSettings = "";
var font_family = ""; //twemoji (Twitter), notocoloremoji (Google), openmojicolor (OpenMoji), openmojiblack, default

const linkReview = ["https://addons.mozilla.org/firefox/addon/emoji-sav/", "https://microsoftedge.microsoft.com/addons/detail/emoji/ejcgfbaipbelddlbokgcfajefbnnagfm", "https://chrome.google.com/webstore/detail/emoji/kjepehkgbooeigeflhiogplnckadlife?hl=it&authuser=0"];
const linkDonate = ["https://www.paypal.com/pools/c/8yl6auiU6e", "https://ko-fi.com/saveriomorelli", "https://bit.ly/3eXs7Oy"]; //{paypal, ko-fi, liberapay}
const linkNeedHelp = ["https://www.saveriomorelli.com/contact-me/"];
const storeName = ["Firefox Add-ons", "Microsoft Edge Add-ons", "Google Chrome Web Store"];
const fontFamily = ["twemoji", "notocoloremoji", "notocoloremoji"];


font_family = fontFamily[browserOrChromeIndex];

if (browserOrChromeIndex == 0) {
    browserAgentSettings = browser;
} else if (browserOrChromeIndex == 1 || browserOrChromeIndex == 2) {
    browserAgentSettings = chrome;
}

const storeNameAbbr = ["MFA", "MEA", "GCWS"];//{MozillaFirefoxAddons, MicrosoftEdgeAddons, GoogleChromeWebStore}
const releaseNumber = browserAgentSettings.runtime.getManifest().version;

var copyText = "";

setVariablesFromSettings(true);
generateTitles();

function loaded() {
    document.getElementById("search-bar-input").onkeyup = function (e) {
        searchEmoji(document.getElementById("search-bar-input").value);
        number_of_emojis_generations = 0;
    }
    document.getElementById("search-bar-input").onkeydown = function (e) {
        if (e.key == "Enter") {
            number_of_emojis_generations = 5;
        }
    }
    document.getElementById("search-bar-input").onfocus = function () {
        number_of_emojis_generations = 0;
    }
    focusSearchBox();

    checkReview();
    checkOpenedAddon();
    showNewsInRelease(false);
}

function focusSearchBox() {
    number_of_emojis_generations = 0;
    document.getElementById("search-bar-input").focus();
}

function copyEmoji(text, tooltip) {
    let nameOfSetting = "mostUsed";
    if (!deleting) {
        document.getElementById("text-to-copy").style.display = "block";
        let copyEmojiTemp = text;
        if (multi_copy == "no") {
            copyText = copyEmojiTemp;
        } else {
            copyText = copyText + " " + copyEmojiTemp;
        }
        document.getElementById("text-to-copy").value = copyText;
        var copyTextTemp = document.getElementById("text-to-copy")
        copyTextTemp.select();
        document.execCommand("copy");
        document.getElementById("text-to-copy").style.display = "none";
        showMessageBottom("copied ✔", copyText);

        browserAgentSettings.storage.sync.get(nameOfSetting, function (value) {
            if (value[nameOfSetting] != undefined) {
                //already exist, so set the array at saved status
                mostUsedEmojis = value[nameOfSetting];
            }
            addToMostUsed(text, tooltip);
            getMostUsedEmojisLength(selectedTitle);
        })
    } else {
        removeFromMostUsed(text);
        showMessageBottom("removed correctly", text);

        browserAgentSettings.storage.sync.get(nameOfSetting, function (value) {
            if (value[nameOfSetting] != undefined) {
                //already exist, so set the array at saved status
                mostUsedEmojis = value[nameOfSetting];
            }
            getMostUsedEmojisLength(selectedTitle);
        })
    }
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
    })
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
    mostUsedEmojis.sort(function (elA, elB) {
        // sort based on occurrences (before most used)
        return elA.occurrences < elB.occurrences;
    });
}

function generateTitles(search = false, titleToSet = 1, clearSearchBox = true) {
    let widthToSet = 0;
    let titleLength = titles.length;
    let mostUsedLength = getMostUsedEmojisLength(titleToSet);
    if (mostUsedLength == 0) {
        titleLength -= 1;
    }
    if (!search) {
        titleLength -= 1
        if (clearSearchBox) document.getElementById("search-bar-input").value = "";
    }
    widthToSet = 100 / titleLength;
    document.getElementById("titles").innerHTML = "";
    for (let i = 0; i < titles.length; i++) {
        document.getElementById("titles").innerHTML += "<input type='button' class='section-title " + theme + "' id='title" + i + "' value='" + titles[i] + "' />";
        document.getElementsByClassName("section-title")[i].style.width = widthToSet + "%";
    }
    for (let i = 0; i < titles.length; i++) {
        if (i == 0) {
            if (!search) document.getElementsByClassName("section-title")[i].style.display = "none";
            else document.getElementsByClassName("section-title")[i].style.display = "inline-block";
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
    if (!search) setTitle(titleToSet);
    else setTitle(0);
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

    document.getElementsByClassName("section-title")[selectedTitle].style.borderTopColor = "transparent";
    selectedTitle = newTitle;
    document.getElementsByClassName("section-title")[selectedTitle].style.borderTopColor = "rgb(10, 132, 255)";
    generateEmojis(newTitle);

    if (selectedTitle == 1) {
        document.getElementById("search-box").style.right = "80px";
        document.getElementById("delete-button").style.display = "block";
    } else {
        document.getElementById("search-box").style.right = "40px";
        document.getElementById("delete-button").style.display = "none";
    }
}

function generateEmojis(title) {
    document.getElementById("emojis").innerHTML = "";
    document.getElementById("emojis").scrollTo(0, 0);
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
            document.getElementById("emojis").innerHTML = "<div id='no_most_used_emojis'><span class='font-" + font_family + " margin-right-10 font-size-25'>😬</span> No most used emojis</div>";
        } else {
            document.getElementById("emojis").innerHTML = tempEmojisToShow;
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
        document.getElementById("emojis").innerHTML = tempEmojisToShow;
    }
    for (let i = 0; i < n_emojis; i++) {
        document.getElementsByClassName("emoji")[i].onclick = function (e) {
            copyEmoji(this.value, this.title);
        };
    }
    if (n_emojis > 0 && number_of_emojis_generations > 4) {
        document.getElementsByClassName("emoji")[0].focus();
    }
    number_of_emojis_generations++
    //setPopUpUI();
}

function setPopUpUI() {
    all_emojis = emojis.slice();

    // selectedTitle==1 means you are in mostUsedEmojis
    let n_emojis = selectedTitle == 1 ? (max_columns * max_rows) : Object.keys(all_emojis[selectedTitle]).length;
    let rows = parseInt(n_emojis / max_columns + "");
    if ((n_emojis % max_columns) != 0) rows += 1;

    let versionNumberText = "Release #{{*{{version-number}}*}}::{{*{{store-name}}*}}";
    versionNumberText = versionNumberText.replaceAll("{{*{{version-number}}*}}", releaseNumber);
    versionNumberText = versionNumberText.replaceAll("{{*{{store-name}}*}}", storeNameAbbr[browserOrChromeIndex]);
    document.getElementById("version-number").innerHTML = versionNumberText;

    document.getElementById("emojis").style.height = (max_rows * (size_emojis + 10) + 4) + "px"; //10: 5margin * 2, 4: 2margin * 2
    document.getElementById("popup-content").style.height = (max_rows * (size_emojis + 10) + 4 + 36 + (34 + 12)) + "px"; //36 is the height of titles, 34+12 because there is the search-box (and its margin)

    let widthToSet = (max_columns * (size_emojis + 10) + 4 + 10); //50 is the height of one row, 4 is the padding of emojis div, 10 is the width of scrollbar (customised), otherwise it would be 18

    document.body.style.width = widthToSet + "px";
    document.getElementById("emojis").style.overflowY = "auto";

    document.getElementById("emojis").scrollTop = (0, 0);

    document.getElementById("settings-button").onclick = function () {
        showSettings();
    }
    document.getElementById("delete-button").onclick = function () {
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

    document.getElementById("skin-standard").onclick = function () {
        document.getElementById("skin-tone-selected").selectedIndex = 0;
        selectSkinToneButton(0);

        saveSettings();
    }
    document.getElementById("skin-light").onclick = function () {
        document.getElementById("skin-tone-selected").selectedIndex = 1;
        selectSkinToneButton(1);

        saveSettings();
    }
    document.getElementById("skin-mlight").onclick = function () {
        document.getElementById("skin-tone-selected").selectedIndex = 2;
        selectSkinToneButton(2);

        saveSettings();
    }
    document.getElementById("skin-medium").onclick = function () {
        document.getElementById("skin-tone-selected").selectedIndex = 3;
        selectSkinToneButton(3);

        saveSettings();
    }
    document.getElementById("skin-mdark").onclick = function () {
        document.getElementById("skin-tone-selected").selectedIndex = 4;
        selectSkinToneButton(4);

        saveSettings();
    }
    document.getElementById("skin-dark").onclick = function () {
        document.getElementById("skin-tone-selected").selectedIndex = 5;
        selectSkinToneButton(5);

        saveSettings();
    }

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

    setSkinToneEmojis();
}

function checkFontFamily() {
    if (document.getElementById("font-family-selected").selectedIndex != 0) {
        document.getElementById("alert-font-pop-up").style.display = "inline-block";
    } else {
        document.getElementById("alert-font-pop-up").style.display = "none";
    }
}

function showReviewAddonMessage() {
    let message_element = document.createElement("div");
    message_element.id = "review-message";
    message_element.innerHTML = "" +
        "<span class='font-" + font_family + " font-size-22 margin-right-5'>🖋</span>️ If you like this addon, please review it on " + storeName[browserOrChromeIndex] + "." +
        "<br><div id='review-message-buttons'></div>";
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
    button_review_now_element.innerHTML = "Review now";

    let button_review_later_element = document.createElement("button");
    button_review_later_element.onclick = function () {
        setReviewed(0);
        hideReviewMessage();
    };
    button_review_later_element.className = "review-button";
    button_review_later_element.id = "review-button-later";
    button_review_later_element.innerHTML = "I'll review later";

    let button_dont_want_element = document.createElement("button");
    button_dont_want_element.onclick = function () {
        setReviewed(-1);
        hideReviewMessage();
    };
    button_dont_want_element.className = "review-button";
    button_dont_want_element.id = "no-review-button";
    button_dont_want_element.innerHTML = "Sorry, I don't want";

    document.getElementById("review-message-buttons").append(button_dont_want_element);
    document.getElementById("review-message-buttons").append(button_review_later_element);
    document.getElementById("review-message-buttons").append(button_review_now_element);

    button_review_now_element.focus();
}

function showOpenedAddonMessage(numberOpened) {
    let message_element = document.createElement("div");
    message_element.id = "opened-addon-message";
    message_element.innerHTML = "" +
        "<div class='text-center padding-5'><span class='font-" + font_family + " font-size-20 margin-right-5'>😍</span>" +
        "You opened this add-on exactly <span class='font-size-20 font-bold'>" + numberOpened + "</span> times since the installation!</div>" +
        "<div class='text-left padding-5'>If you like the add-on, please consider to buy me a coffee on PayPal to support my work.</div>" +
        "<div id='opened-addon-message-buttons' class='message-buttons-container text-right'></div>";
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
    button_donate_element.innerHTML = "Buy me a coffee on PayPal ☕";

    let button_later_element = document.createElement("button");
    button_later_element.onclick = function () {
        hideOpenedAddonMessage();
    };
    button_later_element.className = "message-button";
    button_later_element.id = "opened-addon-button-later";
    button_later_element.innerHTML = "Maybe another time";

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
    ;
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
    button_hide_element.innerHTML = "Hide";

    document.getElementById("top-message-buttons").append(button_hide_element);
}

function openLink(url) {
    browserAgentSettings.tabs.create({url: url});
    window.close();
}

function showMessageBottom(text = "Copied ✔", emoji_text = null) {
    let index_to_use = char_copied_n;
    char_copied_n++;
    let text_message_to_show = document.createElement("div");
    text_message_to_show.className = "character-copied";
    text_message_to_show.id = "character-copied-" + index_to_use;
    if (emoji_text != null) {
        text_message_to_show.innerHTML = "<span class='font-" + font_family + " margin-right-10'>" + emoji_text + "</span>" + text;
    } else {
        text_message_to_show.innerHTML = text;
    }
    document.getElementById("popup-content").append(text_message_to_show);
    setTimeout(function () {
        hideElement("character-copied-" + index_to_use);
    }, 1500);
}

function toggleElement(id_to_use) {
    let display_attribute = document.getElementById(id_to_use).style.display;
    if (display_attribute == "block") hideElement(id_to_use);
    else showElement(id_to_use);
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
            if (value["review-addon"] != -1) count = value["review-addon"] + 1;
            else count = -1;
        }
        if (count >= 30) showReviewAddonMessage();
        else if (count > -1) setReviewed(count);
    })
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
    })
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
            for (let title = 1; title < titles.length && n_results <= max_results; title++) {
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
            document.getElementById("emojis").innerHTML = "<div id='no_emojis_found'><span class='font-twemoji margin-right-10 font-size-25'>😟</span> No emojis found</div>";
        }
    } else {
        if (this.selectedTitle == 0) {
            if (valueToCheck.length == 0) generateTitles(false); //clear searchbox
            else generateTitles(false, 1, false); //don't clear searchbox
        }
    }
}

function showSettings() {
    showElement("settings-section");

    setVariablesFromSettings(true);
}

function setColumnsRowsSettings(value, selected_c = 2, selected_r = 2) {
    let min_c = 8,
        max_c = 14,
        min_r = 4,
        max_r = 10;

    switch (value) {
        case "big":
            max_c = 13;
            max_r = 8;
            break;

        case "very big":
            max_c = 11;
            max_r = 7;
            break;

        default:
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
    element.innerHTML = "";
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

    let jsonSettings = {
        "theme": theme,
        "columns": columns,
        "rows": rows,
        "size": emojisSize,
        "font": fontFamily,
        "auto_close": autoClosePopup,
        "skin_tone": skinTone,
        "multi_copy": multiCopy
    };
    if (reset) {
        jsonSettings = {
            "theme": 0,
            "columns": 2,
            "rows": 2,
            "size": 2,
            "font": 0,
            "auto_close": 1,
            "skin_tone": 0,
            "multi_copy": 1
        };
    }
    browserAgentSettings.storage.sync.set({"settings": jsonSettings}, function () {
    });

    //hideElement("settings-section");
    number_of_emojis_generations = 0;
    focusSearchBox();
    setVariablesFromSettings(true);
    setSkinToneEmojis();
}

function setVariablesFromSettings(resize_popup_ui = false) {
    let themeElement = document.getElementById("theme-selected");
    let columnsElement = document.getElementById("columns-selected");
    let rowsElement = document.getElementById("rows-selected");
    let emojisSizeElement = document.getElementById("emojis-size-selected");
    let fontFamily = document.getElementById("font-family-selected");
    let autoClosePopupElement = document.getElementById("close-popup-after-copied-selected");
    let skinToneElement = document.getElementById("skin-tone-selected");
    let multiCopyElement = document.getElementById("multi-copy-selected");

    let jsonSettings = {
        "theme": 0,
        "columns": 2,
        "rows": 2,
        "size": 2,
        "font": 0,
        "auto_close": 1,
        "skin_tone": 0,
        "multi_copy": 1
    };

    let nameOfSetting = "settings";
    browserAgentSettings.storage.sync.get(nameOfSetting, function (value) {
        if (value[nameOfSetting] != undefined) {
            jsonSettings = value[nameOfSetting];
        }
        setColumnsRowsSettings(emojisSizeElement.value.toLowerCase(), jsonSettings.columns, jsonSettings.rows);

        themeElement.selectedIndex = jsonSettings.theme;
        columnsElement.selectedIndex = jsonSettings.columns;
        rowsElement.selectedIndex = jsonSettings.rows;
        emojisSizeElement.selectedIndex = jsonSettings.size;
        fontFamily.selectedIndex = jsonSettings.font;
        autoClosePopupElement.selectedIndex = jsonSettings.auto_close;
        skinToneElement.selectedIndex = jsonSettings.skin_tone;
        multiCopyElement.selectedIndex = jsonSettings.multi_copy;

        theme = themeElement.value.toLowerCase();
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

        setFontFamily();

        setTheme();

        if (resize_popup_ui) {
            setPopUpUI();
            resetAndSetTitle();
            generateEmojis(1);
        }
    })
}

function setFontFamily() {
    document.getElementById("emojis").classList.remove("font-twemoji");
    document.getElementById("emojis").classList.remove("font-notocoloremoji");
    document.getElementById("emojis").classList.remove("font-openmojicolor");
    document.getElementById("emojis").classList.remove("font-openmojiblack");
    document.getElementById("emojis").classList.remove("font-default");

    document.getElementById("titles").classList.remove("font-twemoji");
    document.getElementById("titles").classList.remove("font-notocoloremoji");
    document.getElementById("titles").classList.remove("font-openmojicolor");
    document.getElementById("titles").classList.remove("font-openmojiblack");
    document.getElementById("titles").classList.remove("font-default");

    document.getElementById("top-section").classList.remove("font-twemoji");
    document.getElementById("top-section").classList.remove("font-notocoloremoji");
    document.getElementById("top-section").classList.remove("font-openmojicolor");
    document.getElementById("top-section").classList.remove("font-openmojiblack");
    document.getElementById("top-section").classList.remove("font-default");

    document.getElementById("emojis").classList.add("font-" + font_family);
    document.getElementById("titles").classList.add("font-" + font_family);
    document.getElementById("top-section").classList.add("font-" + font_family);
}

function setTheme() {
    // theme=light, theme=dark
    removeThemeClassId("popup-content");
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
    removeThemeClassId("donate-paypal-settings", "-btn-settings-button");
    removeThemeClassId("donate-kofi-settings", "-btn-settings-button");
    removeThemeClassId("donate-liberapay-settings", "-btn-settings-button");

    document.getElementById("popup-content").classList.add(theme);
    document.getElementById("search-bar-input").classList.add(theme + "-search-bar-input");
    document.getElementById("settings-button").classList.add(theme + "-settings-button");
    document.getElementById("settings-section").classList.add(theme + "-settings");
    document.getElementById("delete-button").classList.add(theme + "-delete-button");
    document.getElementById("finish-edit-button").classList.add(theme + "-finish-edit-button");
    document.getElementById("theme-selected").classList.add(theme + "-select");
    document.getElementById("columns-selected").classList.add(theme + "-select");
    document.getElementById("rows-selected").classList.add(theme + "-select");
    document.getElementById("emojis-size-selected").classList.add(theme + "-select");
    document.getElementById("close-popup-after-copied-selected").classList.add(theme + "-select");
    document.getElementById("multi-copy-selected").classList.add(theme + "-select");
    document.getElementById("skin-tone-selected").classList.add(theme + "-select");
    document.getElementById("font-family-selected").classList.add(theme + "-select");
    document.getElementById("save-data-settings").classList.add(theme + "-btn-settings-button");
    document.getElementById("reset-data-settings").classList.add(theme + "-btn-settings-button");
    document.getElementById("donate-paypal-settings").classList.add(theme + "-btn-settings-button");
    document.getElementById("donate-kofi-settings").classList.add(theme + "-btn-settings-button");
    document.getElementById("donate-liberapay-settings").classList.add(theme + "-btn-settings-button");

    for (let n = 0; n < 7; n++) {
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
    let replacement_symbol = "[[*skin_tone*]]";
    if (skin_tone_selected === undefined) skin_tone_selected = "";
    let string = emojis.slice();

    string[3] = (JSON.stringify(string[3])).replaceAll(replacement_symbol, skin_tone_selected);
    string[8] = (JSON.stringify(string[8])).replaceAll(replacement_symbol, skin_tone_selected);
    string[12] = (JSON.stringify(string[12])).replaceAll(replacement_symbol, skin_tone_selected);

    all_emojis[3] = JSON.parse(string[3]);
    all_emojis[8] = JSON.parse(string[8]);
    all_emojis[12] = JSON.parse(string[12]);
}

function editMode() {
    document.getElementById("search-bar-input").style.display = "none";
    document.getElementById("text-click-on-emoji-to-remove").style.display = "block";
    document.getElementById("finish-edit-button").style.display = "block";
    document.getElementById("delete-button").style.display = "none";
    document.getElementById("search-box").style.right = "128px";
    if (document.getElementById("search-box").offsetWidth < 370) document.getElementById("text-click-on-emoji-to-remove").style.margin = "-1px";
    else document.getElementById("text-click-on-emoji-to-remove").style.margin = "5px";

    deleting = true;
}

function finishEditMode() {
    document.getElementById("search-bar-input").style.display = "block";
    document.getElementById("text-click-on-emoji-to-remove").style.display = "none";
    document.getElementById("finish-edit-button").style.display = "none";
    document.getElementById("delete-button").style.display = "block";
    document.getElementById("search-box").style.right = "80px";

    deleting = false;
}

function selectSkinToneButton(index) {
    document.getElementsByClassName("skin-tone-button")[0].classList.remove("skin-tone-button-selected"); //standard
    document.getElementsByClassName("skin-tone-button")[1].classList.remove("skin-tone-button-selected"); //light
    document.getElementsByClassName("skin-tone-button")[2].classList.remove("skin-tone-button-selected"); //medium-light
    document.getElementsByClassName("skin-tone-button")[3].classList.remove("skin-tone-button-selected"); //medium
    document.getElementsByClassName("skin-tone-button")[4].classList.remove("skin-tone-button-selected"); //medium-dark
    document.getElementsByClassName("skin-tone-button")[5].classList.remove("skin-tone-button-selected"); //dark

    document.getElementsByClassName("skin-tone-button")[index].classList.add("skin-tone-button-selected");
}

function selectYesNoAutoClose(index) {
    selectYesNoButton("auto-close-button", index)
}

function selectYesNoMultiCopy(index) {
    selectYesNoButton("multi-copy-button", index)
}

function selectYesNoTheme(index) {
    selectYesNoButton("theme-button", index)
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
    })
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
    for (let title = 1; title < titles.length && !found; title++) {
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

loaded();