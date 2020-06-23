var selectedTitle = 1;
var char_copied_n = 0;

generateTitles();

function copyEmoji(text) {
    document.getElementById("text_to_copy").style.display = "block";
    document.getElementById("text_to_copy").value = text;
    var copyText = document.getElementById("text_to_copy");
    copyText.select();
    document.execCommand("copy");
    document.getElementById("text_to_copy").style.display = "none";
    showCopied()
}

function generateTitles(search = false, titleToSet = 1) {
    var widthToSet = 0;
    if (search) {
        widthToSet = 100 / titles.length;
    } else {
        widthToSet = 100 / (titles.length - 1);
        document.getElementById("search-bar-input").value = "";
    }
    for (let i = 0; i < titles.length; i++) {
        document.getElementById("titles").innerHTML += "<input type='button' class='section_title' id='title" + i + "' value='" + titles[i] + "' />";
        document.getElementsByClassName("section_title")[i].style.width = widthToSet + "%";
    }
    for (let i = 0; i < titles.length; i++) {
        if (i == 0) {
            if (!search) document.getElementsByClassName("section_title")[i].style.display = "none";
            else document.getElementsByClassName("section_title")[i].style.display = "inline-block";
        } else {
            document.getElementsByClassName("section_title")[i].onclick = function(e) {
                resetAndSetTitle(this.id.replace("title", ""));
            };
        }
    }
    if (!search) setTitle(titleToSet);
    else setTitle(0);
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
    let n_emojis = Object.keys(emojis[title]).length;
    for (let i in emojis[title]) {
        document.getElementById("emojis").innerHTML += "<input type=\"button\" class=\"emoji\" value=\"" + i + "\" />";
    }

    for (let i = 0; i < n_emojis; i++) {
        document.getElementsByClassName("emoji")[i].onclick = function(e) {
            copyEmoji(this.value);
        };
    }
    //console.log(emojis[title]);
    setHeight();
}

function setHeight() {
    let max_columns = 10;
    let max_rows = 6;
    let n_emojis = Object.keys(emojis[selectedTitle]).length;
    let rows = parseInt(n_emojis / max_columns + "");
    if ((n_emojis % max_columns) != 0) rows += 1;

    document.getElementById("emojis").style.height = (max_rows * 50 + 4) + "px";
    document.getElementById("popup-content").style.height = (max_rows * 50 + 4 + 36 + (34 + 12)) + "px"; //36 is the height of titles, 34+12 because there is the search-box (and its margin)

    let widthToSet = (max_columns * 50 + 4 + 10); //50 is the height of one row, 4 is the padding of emojis div, 10 is the width of scrollbar (customised), otherwise it would be 18
    if (rows > max_rows) {
        document.body.style.width = widthToSet + "px";
        document.getElementById("emojis").style.overflowY = "auto";
    } else {
        document.body.style.width = (max_columns * 50 + 4) + "px";
        document.getElementById("emojis").style.overflowY = "hidden";
    }
    document.getElementById("emojis").scrollTop = (0, 0);
}

function showCopied() {
    let index_to_use = char_copied_n;
    char_copied_n++;
    let new_b_element = document.createElement("b");
    new_b_element.className = "character-copied";
    new_b_element.id = "character-copied-" + index_to_use;
    new_b_element.innerHTML = "Copied ✔";
    document.getElementById("popup-content").append(new_b_element);
    setTimeout(function() {
        hideCopied(index_to_use);
    }, 1500);
}

function hideCopied(index_to_use) {
    document.getElementById("character-copied-" + index_to_use).style.display = "none";
}

function searchEmoji(value) {
    emojis[0] = {};
    let n_results = 0;
    let valueToUse = value.toLowerCase();
    let valueToCheck = valueToUse.replace(/\s/ig, "")
    if (valueToCheck.length != 0) {
        for (let title = 1; title < titles.length; title++) {
            for (let emoji in emojis[title]) {
                for (let description in emojis[title][emoji]) {
                    let tmp_str = emojis[title][emoji][description].toLowerCase()
                    if (tmp_str.includes(valueToUse) || valueToUse.includes(tmp_str)) {
                        emojis[0][emoji] = [];
                        n_results++;
                        break;
                    }
                }
            }
        }
        generateTitles(true);
        if (n_results == 0) {
            document.getElementById("emojis").innerHTML = "<div id='no_emojis_found'><span style='font-family:twemoji;margin-right:10px;font-size:25px;'>😟</span> No emojis found</div>";
        }
    } else {
        if (this.selectedTitle == 0) generateTitles(false);
    }
}

document.getElementById("search-bar-input").onkeyup = function(e) {
    searchEmoji(document.getElementById("search-bar-input").value);
}
document.getElementById("search-bar-input").focus();