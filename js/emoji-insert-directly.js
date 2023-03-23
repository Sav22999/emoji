var browserAgentSettings = "";
var browserOrChromeIndex = 0; //TODO: change manually: {0: Firefox, 1: Microsoft Edge, 2: Chrome Web Store}
if (browserOrChromeIndex === 0) {
    browserAgentSettings = browser;
} else if (browserOrChromeIndex === 1 || browserOrChromeIndex === 2) {
    browserAgentSettings = chrome;
}
var lastRequestNumber = -1;
browserAgentSettings.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.type === "insert-emoji-by-injection" && request.requestNumber !== lastRequestNumber) {
        let active = document.activeElement;
        console.log(active.textContent);
        if (["input", "textarea"].includes(active.tagName.toLowerCase())) {
            let pre = (active.value).substring(0, active.selectionStart);
            let post = (active.value).substring(active.selectionEnd, active.value.length);
            active.value = pre + request.emoji + post;
        } else if (["p", "div", "span"].includes(active.tagName.toLowerCase()) || active.contentEditable) {
            let position = {start: 0, end: 0};
            let selection = document.getSelection();
            let range = selection.getRangeAt(0);
            let range2 = range.cloneRange();
            range2.selectNodeContents(active);
            position.start = range.startOffset;
            position.end = range.endOffset;
            let pre = (active.textContent).substring(0, position.start);
            let post = (active.textContent).substring(position.end, active.textContent.length);
            active.textContent = pre + request.emoji + post;
        }
        lastRequestNumber = request.requestNumber; //update the request number used to avoid to show more emoji (because of more injection scripts)
    }
});