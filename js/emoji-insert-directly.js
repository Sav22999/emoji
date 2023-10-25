var browserAgentSettings = "";
var browserOrChromeIndex = 3; //TODO: change manually: {0: Firefox, 1: Microsoft Edge, 2: Chrome Web Store}
if (browserOrChromeIndex === 0 || browserOrChromeIndex === 3) {
    browserAgentSettings = browser;
} else if (browserOrChromeIndex === 1 || browserOrChromeIndex === 2) {
    browserAgentSettings = chrome;
}
var lastRequestNumber = -1;
browserAgentSettings.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.type === "insert-emoji-by-injection" && request.requestNumber !== lastRequestNumber) {
        let active = document.activeElement;
        if (["input", "textarea"].includes(active.tagName.toLowerCase())) {
            let pre = (active.value).substring(0, active.selectionStart);
            let post = (active.value).substring(active.selectionEnd, active.value.length);
            active.value = pre + request.emoji + post;
        } else if (["p", "div", "span"].includes(active.tagName.toLowerCase()) && active.contentEditable) {
            try {
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

                let range3 = document.createRange();
                range3.setStart(active.childNodes[0], position.start + (request.emoji.length));
                range3.setEnd(active.childNodes[0], position.start + (request.emoji.length));
                selection.removeAllRanges();
                selection.addRange(range3);
            } catch (e) {
                console.error("Exception: " + e);
            }
        }
        lastRequestNumber = request.requestNumber; //update the request number used to avoid to show more emoji (because of more injection scripts)
    }
});