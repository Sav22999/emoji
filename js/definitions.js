var strings = {};
strings["settings"] = {};
strings["other"] = {};

var titles_language = {};
var emojis_language = {};
var other_strings = {};
var settings_strings = {};

var lang = "";
var supported_languages = sortSupportedLanguages({
    "en": "English",
    "it": "Italian",
    "ar": "Arabic",
    "zh-CN": "Chinese (Simplified)",
    "zh-TW": "Chinese (Traditional)",
    "cs": "Czech",
    "da": "Danish",
    "nl": "Dutch",
    "fa": "Farsi / Persian",
    "fi": "Finnish",
    "fr": "French",
    "de": "German",
    "el": "Greek",
    "ja": "Japanese",
    "ko": "Korean",
    "no": "Norwegian",
    "pl": "Polish",
    "pt": "Portuguese",
    "ro": "Romanian",
    "ru": "Russian",
    "es": "Spanish",
    "sv-SE": "Swedish",
    "uk": "Ukrainian",
});

function sortSupportedLanguages(dict) {
    var keys = [];
    for (var key in dict) {
        keys[keys.length] = key;
    }

    var values = [];
    for (var i = 0; i < keys.length; i++) {
        values[values.length] = dict[keys [i]];
    }

    let tempArray = values.sort(sortLanguages);
    let dictToReturn = {};
    for (let index in tempArray) {
        dictToReturn[getKeyByValue(dict, tempArray[index])] = tempArray[index];
    }
    return dictToReturn;
}

function sortLanguages(a, b) {
    return ('' + a).localeCompare(b);
}

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}