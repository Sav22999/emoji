var extension_icon_selected = 0; //extension-icon-1
var extension_icons = ["extension-icon-1", "extension-icon-2", "extension-icon-3", "extension-icon-4", "extension-icon-5", "extension-icon-6", "extension-icon-7", "extension-icon-8", "extension-icon-9", "extension-icon-10", "extension-icon-11"];

var browserAgentSettings = "";
var browserOrChromeIndex = 0; //TODO: change manually: {0: Firefox, 1: Microsoft Edge, 2: Chrome Web Store}
if (browserOrChromeIndex === 0) {
    browserAgentSettings = browser;
} else if (browserOrChromeIndex === 1 || browserOrChromeIndex === 2) {
    browserAgentSettings = chrome;
}

function loaded() {
    let jsonSettings = {};

    let nameOfSetting = "settings";
    browserAgentSettings.storage.sync.get(nameOfSetting, function (value) {
        if (value[nameOfSetting] !== undefined) {
            jsonSettings = value[nameOfSetting];
        }
        extension_icon_selected = jsonSettings.extension_icon;
        if (extension_icon_selected === undefined) extension_icon_selected = 0;
        setExtensionIcon("../img/extension-icons/" + extension_icons[extension_icon_selected] + ".png");
    });

    setAddressBarSearch();
}

function setExtensionIcon(url) {
    browserAgentSettings.browserAction.setIcon({path: url});
}

let requestNumber = 0;

browserAgentSettings.tabs.onActivated.addListener(listener => {
    //nothing
});

browserAgentSettings.tabs.onUpdated.addListener(tabUpdated);

function tabUpdated(tabId, changeInfo, tabInfo) {
    //nothing
}

browserAgentSettings.runtime.onMessage.addListener((request) => {
    if (request.type === "inject") {
        //inject the script
        injectContentScript(request.file);
    } else if (request.type === "requestNumber") {
        //return the request number for the injection
        return Promise.resolve({requestNumber: requestNumber++});
    } else {
        console.error("Request unknown");
    }
});

async function injectContentScript(file) {
    return await browserAgentSettings.tabs.executeScript({file: file, allFrames: true});
}

function setAddressBarSearch() {
    browserAgentSettings.omnibox.setDefaultSuggestion({
        description: browserAgentSettings.runtime.getManifest().description,
    });

    browserAgentSettings.omnibox.onInputStarted.addListener(handleSuggestion);
    browserAgentSettings.omnibox.onInputChanged.addListener(handleSuggestion);
    browserAgentSettings.omnibox.onInputEntered.addListener(function (emoji) {
        console.log("You selected: " + emoji);
    });

    /*browserAgentSettings.tabs.query({active: true, currentWindow: true}, function (tabs) {
        const activeTab = tabs[0];
        browserAgentSettings.tabs.sendMessage(activeTab.id, {
            action: "search_background",
            data: "Some data from background"
        }, function (response) {
            console.log("Received response from content script:", JSON.stringify(response));
        });
    });*/
}

function handleSuggestion(text, suggest) {
    /*if (text != undefined && text.length > 0) {
        const suggestion = {
            content: "Content", //the emoji to copy
            description: text, //the searching (keywords)
        };

        //generate suggestion with results
        suggest([suggestion]);
        suggest([suggestion]);
    } else {
        //no search
    }*/
}

function copyEmoji(emoji) {
    //send request to script.js (because it has to increment "most used" as well)
}

function searchEmoji(text) {
    //send request to script.js
}

loaded();

