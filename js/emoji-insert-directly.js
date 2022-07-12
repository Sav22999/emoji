var browserAgentSettings = "";
var browserOrChromeIndex = 3; //TODO: change manually: {0: Firefox, 1: Microsoft Edge, 2: Chrome Web Store, 3: Thunderbird}
if (browserOrChromeIndex == 0 || browserOrChromeIndex == 3) {
    browserAgentSettings = browser;
} else if (browserOrChromeIndex == 1 || browserOrChromeIndex == 2) {
    browserAgentSettings = chrome;
}

browserAgentSettings.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    let active = document.activeElement;
    if (["input", "textarea"].includes(active.tagName.toLowerCase())) {
        let pre = (active.value).substring(0, active.selectionStart);
        let post = (active.value).substring(active.selectionEnd, active.value.length);
        active.value = pre + request.emoji + post;
    }
});