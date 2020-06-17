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
            document.getElementsByClassName("section_title")[i].onclick = function (e) {
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
    //emoji[title][i]
    document.getElementById("emojis").innerHTML = "";
    var n_emojis = emojis[title].length;
    for (var i = 0; i < n_emojis; i++) {
        document.getElementById("emojis").innerHTML += "<input type=\"button\" class=\"emoji\" value=\"" + emojis[title][i] + "\" />";
    }

    for (var i = 0; i < n_emojis; i++) {
        document.getElementsByClassName("emoji")[i].onclick = function (e) {
            copyEmoji(this.value);
        };
    }
    console.log(emojis[title]);
    setHeight();
}

function setHeight() {
    let max_columns = 9;
    let max_rows = 6;
    let n_emojis = emojis[selectedTitle].length;
    let rows = parseInt(n_emojis / max_columns + "");
    if ((n_emojis % max_columns) != 0) rows += 1;

    document.getElementById("emojis").style.height = max_rows * 50 + 4 + "px";
    document.getElementById("popup-content").style.height = max_rows * 50 + 4 + 36 + "px"; //36 is the height of titles

    let widthToSet = max_columns * 50 + 4 + 10; //50 is the height of one row, 4 is the padding of emojis div, 10 is the width of scrollbar (customised), otherwise it would be 18
    if (rows > max_rows) {
        document.body.style.width = widthToSet + "px";
        document.getElementById("emojis").style.overflowY = "auto";
    } else {
        document.body.style.width = max_columns * 50 + 4 + "px";
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
    setTimeout(function () {
        hideCopied(index_to_use);
    }, 1500);
}

function hideCopied(index_to_use) {
    document.getElementById("character-copied-" + index_to_use).style.display = "none";
}

function searchEmoji(value) {
    emojis[0] = [];
    let n_results = 0;
    let valueToUse = value.replace(/\s/ig, "").toLowerCase();
    if (valueToUse.length != 0) {
        for (let position = 1; position < titles.length; position++) {
            for (let index = 0; index < emojis_details[position].length; index++) {
                for (let details_index = 0; details_index < emojis_details[position][index].length; details_index++) {
                    let tmp_str = emojis_details[position][index][details_index].toLowerCase()
                    if (tmp_str.includes(valueToUse) || valueToUse.includes(tmp_str)) {
                        emojis[0][n_results] = emojis[position][index];
                        n_results++;
                    }
                }
            }
        }
        generateTitles(true);
    } else {
        if (this.selectedTitle == 0) generateTitles(false);
    }
}

document.getElementById("search-bar-input").onkeyup = function (e) {
    searchEmoji(document.getElementById("search-bar-input").value);
}