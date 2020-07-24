var selectedTitle = 1;
var char_copied_n = 0;

var max_columns = 10;
var max_rows = 6;
var theme = 0;
var size_emojis = 40; //30, 35, 40, 50, 60
var auto_close = "no";//yes, no
var font_family = "twemoji"; //twemoji (Twitter), notocoloremoji (Google), openmojicolor (OpenMoji)

var mostUsedEmojis = [];

setVariablesFromSettings(true);
generateTitles();

function copyEmoji(text) {
    document.getElementById("text-to-copy").style.display = "block";
    document.getElementById("text-to-copy").value = text;
    var copyText = document.getElementById("text-to-copy");
    copyText.select();
    document.execCommand("copy");
    document.getElementById("text-to-copy").style.display = "none";
    showMessageBottom();

    let nameOfSetting = "mostUsed";
    let syncResult = browser.storage.sync.get(nameOfSetting);
    syncResult.then(function (value) {
        if (value[nameOfSetting] != undefined) {
            //already exist, so set the array at saved status
            mostUsedEmojis = value[nameOfSetting];
        }
        addToMostUsed(text);
        getMostUsedEmojisLength(selectedTitle);
    })
}

function autoCloseAfterCopied() {
    if (auto_close == "yes") {
        window.close();
    }
}

function generateMostUsedEmojis(generateEmojiBool = false) {
    let nameOfSetting = "mostUsed";
    let syncResult = browser.storage.sync.get(nameOfSetting);
    syncResult.then(function (value) {
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

function addToMostUsed(text) {
    let emojiToAdd = {"emoji": text, "occurrences": 1};
    let indexToUse = -1; // -1: not in the JSON
    for (let tempIndex = 0; tempIndex < mostUsedEmojis.length && indexToUse == -1; tempIndex++) {
        if (mostUsedEmojis[tempIndex].emoji == text) {
            indexToUse = tempIndex;
        }
    }
    if (indexToUse != -1) {
        // the emoji is already in the JSON, so I increment it
        mostUsedEmojis[indexToUse].occurrences++;
    } else {
        // the emoji is not in the JSON, so I initialise it at "1"
        mostUsedEmojis.unshift(emojiToAdd);//(unshift -> add the element at the beginning -> in this way the "remove function" won't remove the emoji just inserted
    }
    //remove elements if they are too much (max value = max_columns * max_rows)
    let max_value = max_columns * max_rows;
    if (mostUsedEmojis.length > max_value) {
        let removed = mostUsedEmojis.splice(max_value, (mostUsedEmojis.length - max_value));
    }
    sortMostUsedEmojis();
    browser.storage.sync.set({"mostUsed": mostUsedEmojis});
    autoCloseAfterCopied();
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
    browser.storage.sync.clear();
    mostUsedEmojis = [];
    setVariablesFromSettings(true);
}

function resetAndSetTitle(newTitle) {
    generateTitles(false, newTitle);
}

function setTitle(newTitle) {
    document.getElementsByClassName("section-title")[selectedTitle].style.borderTopColor = "transparent";
    selectedTitle = newTitle;
    document.getElementsByClassName("section-title")[selectedTitle].style.borderTopColor = "rgb(10, 132, 255)";
    generateEmojis(newTitle);
}

function generateEmojis(title) {
    document.getElementById("emojis").innerHTML = "";
    document.getElementById("emojis").scrollTo(0, 0);
    let n_emojis = 0;
    if (title == 1) {
        // it's the mostUsedEmojis section
        n_emojis = mostUsedEmojis.length;
        let tempEmojisJSON = mostUsedEmojis;
        for (let i = 0; i < n_emojis; i++) {
            document.getElementById("emojis").innerHTML += "<input type=\"button\" class=\"emoji " + theme + "-button-emoji size-emoji-button-" + size_emojis + "\" value=\"" + mostUsedEmojis[i].emoji + "\" />";
        }
        if (n_emojis == 0) {
            document.getElementById("emojis").innerHTML = "<div id='no_most_used_emojis'><span class='font-twemoji margin-right-10 font-size-25'>😬</span> No most used emojis</div>";
        }
    } else {
        n_emojis = Object.keys(emojis[title]).length;
        let tempEmojisJSON = emojis[title];
        for (let i in tempEmojisJSON) {
            document.getElementById("emojis").innerHTML += "<input type=\"button\" class=\"emoji " + theme + "-button-emoji size-emoji-button-" + size_emojis + "\" value=\"" + i + "\" />";
        }
    }
    for (let i = 0; i < n_emojis; i++) {
        document.getElementsByClassName("emoji")[i].onclick = function (e) {
            copyEmoji(this.value);
        };
    }
    //setPopUpUI();
}

function setPopUpUI() {
    // selectedTitle==1 means you are in mostUsedEmojis
    let n_emojis = selectedTitle == 1 ? (max_columns * max_rows) : Object.keys(emojis[selectedTitle]).length;
    let rows = parseInt(n_emojis / max_columns + "");
    if ((n_emojis % max_columns) != 0) rows += 1;

    document.getElementById("emojis").style.height = (max_rows * (size_emojis + 10) + 4) + "px";
    document.getElementById("popup-content").style.height = (max_rows * (size_emojis + 10) + 4 + 36 + (34 + 12)) + "px"; //36 is the height of titles, 34+12 because there is the search-box (and its margin)

    let widthToSet = (max_columns * (size_emojis + 10) + 4 + 10); //50 is the height of one row, 4 is the padding of emojis div, 10 is the width of scrollbar (customised), otherwise it would be 18

    document.body.style.width = widthToSet + "px";
    document.getElementById("emojis").style.overflowY = "auto";

    document.getElementById("emojis").scrollTop = (0, 0);

    document.getElementById("settings-button").onclick = function () {
        showSettings();
    }
    document.getElementById("hide-settings-button").onclick = function () {
        hideElement("settings-section");
    }
    document.getElementById("clear-data-settings").onclick = function () {
        clearAllData();
        generateTitles(false);
        generateMostUsedEmojis();
        hideElement("settings-section");
    }
    document.getElementById("save-data-settings").onclick = function () {
        saveSettings();
    }
    document.getElementById("reset-data-settings").onclick = function () {
        resetSettings();
    }
    document.getElementById("emojis-size-selected").onchange = function () {
        setColumnsRowsSettings(document.getElementById("emojis-size-selected").value.toLowerCase(), -1, -1);
    }
}

function showReviewAddonMessage() {
    let message_element = document.createElement("div");
    message_element.id = "review-message";
    message_element.innerHTML = "" +
        "<span class='font-twemoji font-size-22 margin-right-5'>🖋</span>️ If you like this addon, please review it on Firefox Add-ons." +
        "<br><div id='review-message-buttons'></div>";
    document.getElementById("popup-content").append(message_element);

    let background_opacity = document.createElement("div");
    background_opacity.id = "background-opacity-review";
    document.getElementById("popup-content").append(background_opacity);

    let button_review_now_element = document.createElement("button");
    button_review_now_element.onclick = function () {
        setReviewed(-1);
        let url_firefox_addons = "https://addons.mozilla.org/firefox/addon/emoji-sav/";
        browser.tabs.create({url: url_firefox_addons});
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

function showMessageBottom(text = "Copied ✔") {
    let index_to_use = char_copied_n;
    char_copied_n++;
    let new_b_element = document.createElement("b");
    new_b_element.className = "character-copied";
    new_b_element.id = "character-copied-" + index_to_use;
    new_b_element.innerHTML = text;
    document.getElementById("popup-content").append(new_b_element);
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
    browser.storage.sync.set({"review-addon": value});
    if (value == -1) {
        hideReviewMessage();
    }
}

function checkReview() {
    let syncResult = browser.storage.sync.get("review-addon");
    syncResult.then(function (value) {
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

function searchEmoji(value) {
    emojis[0] = {};
    let n_results = 0;
    let max_results = (max_rows * max_columns) * 3;
    let valueToUse = value.toLowerCase().replace(".", "").replace("’", "'").replace("“", "\"").replace("”", "\"");
    let valueToCheck = valueToUse.replace(/\s/ig, "");
    if (valueToCheck.length > 1) {
        for (let title = 1; title < titles.length && n_results <= max_results; title++) {
            for (let emoji in emojis[title]) {
                if (n_results >= max_results) {
                    break;
                }
                for (let description in emojis[title][emoji]) {
                    let tmp_str = emojis[title][emoji][description].toLowerCase().replace(".", "");
                    if (tmp_str.includes(valueToUse) || valueToUse.includes(tmp_str)) {
                        emojis[0][emoji] = []; //add emoji to the list
                        n_results++;
                        break;
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
    let min_c = 8, max_c = 14, min_r = 4, max_r = 10;

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
    genereteOptionsSelectSettings(min, max, selected, document.getElementById("columns-selected"));
}

function generateRowsSettings(min, max, selected) {
    genereteOptionsSelectSettings(min, max, selected, document.getElementById("rows-selected"));
}

function genereteOptionsSelectSettings(min, max, selected, element) {
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

    let jsonSettings = {
        "theme": theme,
        "columns": columns,
        "rows": rows,
        "size": emojisSize,
        "font": fontFamily,
        "auto_close": autoClosePopup
    };
    if (reset) {
        jsonSettings = {"theme": 0, "columns": 2, "rows": 2, "size": 2, "font": 0, "auto_close": 1};
    }
    browser.storage.sync.set({"settings": jsonSettings});

    hideElement("settings-section");
    setVariablesFromSettings(true);
}

function setVariablesFromSettings(resize_popup_ui = false) {
    let themeElement = document.getElementById("theme-selected");
    let columnsElement = document.getElementById("columns-selected");
    let rowsElement = document.getElementById("rows-selected");
    let emojisSizeElement = document.getElementById("emojis-size-selected");
    let fontFamily = document.getElementById("font-family-selected");
    let autoClosePopup = document.getElementById("close-popup-after-copied-selected");

    let jsonSettings = {"theme": 0, "columns": 2, "rows": 2, "size": 2, "font": 0, "auto_close": 1};

    let nameOfSetting = "settings";
    let syncResult = browser.storage.sync.get(nameOfSetting);
    syncResult.then(function (value) {
        if (value[nameOfSetting] != undefined) {
            jsonSettings = value[nameOfSetting];
        }
        setColumnsRowsSettings(emojisSizeElement.value.toLowerCase(), jsonSettings.columns, jsonSettings.rows);

        themeElement.selectedIndex = jsonSettings.theme;
        columnsElement.selectedIndex = jsonSettings.columns;
        rowsElement.selectedIndex = jsonSettings.rows;
        emojisSizeElement.selectedIndex = jsonSettings.size;
        fontFamily.selectedIndex = jsonSettings.font;
        autoClosePopup.selectedIndex = jsonSettings.auto_close;


        theme = themeElement.value.toLowerCase();
        max_columns = columnsElement.value;
        max_rows = rowsElement.value;
        font_family = fontFamily.value;
        auto_close = autoClosePopup.value.toLowerCase();
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

    document.getElementById("emojis").classList.add("font-" + font_family);
}

function setTheme() {
    // theme=light, theme=dark
    removeThemeClassId("popup-content");
    removeThemeClassId("search-bar-input", "-search-bar-input");
    removeThemeClassId("settings-button", "-settings-button");
    removeThemeClassId("settings-section", "-settings");
    removeThemeClassId("theme-selected", "-select");
    removeThemeClassId("columns-selected", "-select");
    removeThemeClassId("rows-selected", "-select");
    removeThemeClassId("emojis-size-selected", "-select");
    removeThemeClassId("save-data-settings", "-save-data-settings-button");
    removeThemeClassId("reset-data-settings", "-reset-data-settings-button");
    removeThemeClassId("close-popup-after-copied-selected", "-select");
    removeThemeClassId("font-family-selected", "-select");

    document.getElementById("popup-content").classList.add(theme);
    document.getElementById("search-bar-input").classList.add(theme + "-search-bar-input");
    document.getElementById("settings-button").classList.add(theme + "-settings-button");
    document.getElementById("settings-section").classList.add(theme + "-settings");
    document.getElementById("theme-selected").classList.add(theme + "-select");
    document.getElementById("columns-selected").classList.add(theme + "-select");
    document.getElementById("rows-selected").classList.add(theme + "-select");
    document.getElementById("emojis-size-selected").classList.add(theme + "-select");
    document.getElementById("close-popup-after-copied-selected").classList.add(theme + "-select");
    document.getElementById("font-family-selected").classList.add(theme + "-select");

    for (let n = 0; n < 5; n++) {
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

document.getElementById("search-bar-input").onkeyup = function (e) {
    searchEmoji(document.getElementById("search-bar-input").value);
}
document.getElementById("search-bar-input").focus();

checkReview();