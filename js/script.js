var selectedTitle = 1;
var char_copied_n = 0;

const max_columns = 10;
const max_rows = 6;

var mostUsedEmojis = []

generateTitles();

function copyEmoji(text) {
    document.getElementById("text_to_copy").style.display = "block";
    document.getElementById("text_to_copy").value = text;
    var copyText = document.getElementById("text_to_copy");
    copyText.select();
    document.execCommand("copy");
    document.getElementById("text_to_copy").style.display = "none";
    showMessageBottom();

    let nameOfSetting = "mostUsed";
    let syncResult = browser.storage.sync.get(nameOfSetting);
    syncResult.then(function (value) {
        if (value[nameOfSetting] != undefined) {
            //already exist, so set the array at saved status
            mostUsedEmojis = value[nameOfSetting];
        }
        addToMostUsed(text);
    })
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
    max_value = max_columns * max_rows;
    if (mostUsedEmojis.length > max_value) {
        let removed = mostUsedEmojis.splice(max_value, (mostUsedEmojis.length - max_value));
    }
    sortMostUsedEmojis();
    browser.storage.sync.set({"mostUsed": mostUsedEmojis});
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
    for (let i = 0; i < titles.length; i++) {
        document.getElementById("titles").innerHTML += "<input type='button' class='section_title' id='title" + i + "' value='" + titles[i] + "' />";
        document.getElementsByClassName("section_title")[i].style.width = widthToSet + "%";
    }
    for (let i = 0; i < titles.length; i++) {
        if (i == 0) {
            if (!search) document.getElementsByClassName("section_title")[i].style.display = "none";
            else document.getElementsByClassName("section_title")[i].style.display = "inline-block";
        } else {
            if (i == 1) {
                if (mostUsedLength == 0) {
                    document.getElementsByClassName("section_title")[i].style.display = "none";
                    if (titleToSet == 1) titleToSet = 2;
                } else {
                    document.getElementsByClassName("section_title")[i].style.display = "inline-block";
                }
            }
            document.getElementsByClassName("section_title")[i].onclick = function (e) {
                resetAndSetTitle(this.id.replace("title", ""));
            };
        }
    }
    if (!search) setTitle(titleToSet);
    else setTitle(0);
}

function forgetMostUsedEmojis() {
    browser.storage.sync.clear();
}

function resetAndSetTitle(newTitle) {
    generateTitles(false, newTitle);
}

function setTitle(newTitle) {
    document.getElementsByClassName("section_title")[selectedTitle].style.borderTopColor = "transparent";
    selectedTitle = newTitle;
    document.getElementsByClassName("section_title")[selectedTitle].style.borderTopColor = "rgb(10, 132, 255)";
    generateEmojis(newTitle);
}

function generateEmojis(title) {
    document.getElementById("emojis").innerHTML = "";
    let n_emojis = 0;
    if (title == 1) {
        // it's the mostUsedEmojis section
        n_emojis = mostUsedEmojis.length;
        let tempEmojisJSON = mostUsedEmojis;
        for (let i = 0; i < n_emojis; i++) {
            document.getElementById("emojis").innerHTML += "<input type=\"button\" class=\"emoji\" value=\"" + mostUsedEmojis[i].emoji + "\" />";
        }
        if (n_emojis == 0) {
            document.getElementById("emojis").innerHTML = "<div id='no_most_used_emojis'><span style='font-family:twemoji;margin-right:10px;font-size:25px;'>😬</span> No most used emojis</div>";
        }
    } else {
        n_emojis = Object.keys(emojis[title]).length;
        let tempEmojisJSON = emojis[title];
        for (let i in tempEmojisJSON) {
            document.getElementById("emojis").innerHTML += "<input type=\"button\" class=\"emoji\" value=\"" + i + "\" />";
        }
    }
    for (let i = 0; i < n_emojis; i++) {
        document.getElementsByClassName("emoji")[i].onclick = function (e) {
            copyEmoji(this.value);
        };
    }
    setPopUpSize();
}

function setPopUpSize() {
    // selectedTitle==1 means you are in mostUsedEmojis
    let n_emojis = selectedTitle == 1 ? (max_columns * max_rows) : Object.keys(emojis[selectedTitle]).length;
    let rows = parseInt(n_emojis / max_columns + "");
    if ((n_emojis % max_columns) != 0) rows += 1;

    document.getElementById("emojis").style.height = (max_rows * 50 + 4) + "px";
    document.getElementById("popup-content").style.height = (max_rows * 50 + 4 + 36 + (34 + 12)) + "px"; //36 is the height of titles, 34+12 because there is the search-box (and its margin)

    let widthToSet = (max_columns * 50 + 4 + 10); //50 is the height of one row, 4 is the padding of emojis div, 10 is the width of scrollbar (customised), otherwise it would be 18

    /*if (rows > max_rows) {
        document.body.style.width = widthToSet + "px";
        document.getElementById("emojis").style.overflowY = "auto";
    } else {
        document.body.style.width = (max_columns * 50 + 4) + "px";
        document.getElementById("emojis").style.overflowY = "hidden";
    }*/
    document.body.style.width = widthToSet + "px";
    document.getElementById("emojis").style.overflowY = "auto";

    document.getElementById("emojis").scrollTop = (0, 0);
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
        hideCopied(index_to_use);
    }, 1500);
}

function hideCopied(index_to_use) {
    document.getElementById("character-copied-" + index_to_use).style.display = "none";
}

function searchEmoji(value) {
    emojis[0] = {};
    let n_results = 0;
    let valueToUse = value.toLowerCase().replace(".", "").replace("’", "'");
    let valueToCheck = valueToUse.replace(/\s/ig, "");
    if (valueToCheck.length > 1) {
        for (let title = 1; title < titles.length; title++) {
            for (let emoji in emojis[title]) {
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
            document.getElementById("emojis").innerHTML = "<div id='no_emojis_found'><span style='font-family:twemoji;margin-right:10px;font-size:25px;'>😟</span> No emojis found</div>";
        }
    } else {
        if (this.selectedTitle == 0) {
            if (valueToCheck.length == 0) generateTitles(false); //clear searchbox
            else generateTitles(false, 1, false); //don't clear searchbox
        }
    }
}

document.getElementById("search-bar-input").onkeyup = function (e) {
    searchEmoji(document.getElementById("search-bar-input").value);
}
document.getElementById("search-bar-input").focus();