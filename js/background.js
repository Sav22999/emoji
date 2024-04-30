var extension_icon_selected = 0; //extension-icon-1
var extension_icons = ["extension-icon-1", "extension-icon-2", "extension-icon-3", "extension-icon-4", "extension-icon-5", "extension-icon-6", "extension-icon-7", "extension-icon-8", "extension-icon-9", "extension-icon-10", "extension-icon-11"];

var browserAgentSettings = "";
var browserOrChromeIndex = 2; //TODO: change manually: {0: Firefox, 1: Microsoft Edge, 2: Chrome Web Store, 3: Opera add-ons}
if (browserOrChromeIndex === 0) {
    browserAgentSettings = browser;
} else if (browserOrChromeIndex === 1 || browserOrChromeIndex === 2 || browserOrChromeIndex === 3) {
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
        setExtensionIcon("../img/extension-icons/" + extension_icons[extension_icon_selected] + ".png", "../img/extension-icons/size/16/" + extension_icons[extension_icon_selected] + ".png", "../img/extension-icons/size/48/" + extension_icons[extension_icon_selected] + ".png", "../img/extension-icons/size/128/" + extension_icons[extension_icon_selected] + ".png");
    });
}

function setExtensionIcon(url, url16, url48, url128) {
    if (browserOrChromeIndex === 1 || browserOrChromeIndex === 2 || browserOrChromeIndex === 3) {
        browserAgentSettings.action.setIcon({
            path: {
                "16": url16,
                "48": url48,
                "128": url128
            }
        });
    } else {
        browserAgentSettings.browserAction.setIcon({path: url});
    }
}

let requestNumber = 0;

browserAgentSettings.tabs.onActivated.addListener(listener => {
    //nothing
});

browserAgentSettings.tabs.onUpdated.addListener(tabUpdated);

function tabUpdated(tabId, changeInfo, tabInfo) {
    //nothing
}

browserAgentSettings.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === "inject") {
        //inject the script
        injectContentScript(request.file);
    } else if (request.type === "requestNumber") {
        //return the request number for the injection
        sendResponse({
            requestNumber: requestNumber++
        });
    } else {
        console.error("Request unknown");
    }
});

function injectContentScript(file) {
    //return await browserAgentSettings.tabs.executeScript({file: file, allFrames: true});

    /*return await browserAgentSettings.tabs.query({active: true, currentWindow: true}, function (tabs) {
        const activeTab = tabs[0];
        browserAgentSettings.scripting.executeScript({
            target: {tabId: activeTab.id, allFrames: true},
            files: [file],
        });
    });*/

    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        const activeTab = tabs[0];
        if (tabs !== undefined && tabs.length > 0) {
            chrome.scripting.executeScript({
                target: {tabId: activeTab.id, allFrames: true},
                files: [file],
            }).then(() => {
                // Script executed successfully
            }).catch((error) => {
                console.error("E1: " + error + "\nin " + activeTab.url);
            });
        }
    });
}

loaded();
