var browserAgentSettings = "";
var browserOrChromeIndex = 1; //TODO: change manually: {0: Firefox, 1: Microsoft Edge, 2: Chrome Web Store}
if (browserOrChromeIndex === 0) {
    browserAgentSettings = browser;
} else if (browserOrChromeIndex === 1 || browserOrChromeIndex === 2) {
    browserAgentSettings = chrome;
}
var lastRequestNumber = -1;
browserAgentSettings.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.requestNumber !== lastRequestNumber) {
        let active = document.activeElement;
        if (["input", "textarea"].includes(active.tagName.toLowerCase())) {
            let pre = (active.value).substring(0, active.selectionStart);
            let post = (active.value).substring(active.selectionEnd, active.value.length);
            active.value = pre + request.emoji + post;
        }
        lastRequestNumber = request.requestNumber; //update the request number used to avoid to show more emoji (because of more injection scripts)
    }
});