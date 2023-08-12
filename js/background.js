var extension_icon_selected = 0; //extension-icon-1
var extension_icons = ["extension-icon-1", "extension-icon-2", "extension-icon-3", "extension-icon-4", "extension-icon-5", "extension-icon-6", "extension-icon-7", "extension-icon-8", "extension-icon-9", "extension-icon-10", "extension-icon-11"];

var browserAgentSettings = "";
var browserOrChromeIndex = 1; //TODO: change manually: {0: Firefox, 1: Microsoft Edge, 2: Chrome Web Store}
if (browserOrChromeIndex === 0) {
    browserAgentSettings = browser;
} else if (browserOrChromeIndex === 1 || browserOrChromeIndex === 2) {
    browserAgentSettings = chrome;
}

var language = "en";
var emojis;

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

loaded();
