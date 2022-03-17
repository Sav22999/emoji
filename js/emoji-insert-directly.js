chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    let active = document.activeElement;
    // This does not handle anything else, like contenteditable elements, e.g. Disqus.
    if (["input", "textarea"].includes(active.tagName.toLowerCase())) {
        let pre = (active.value).substring(0, active.selectionStart);
        let post = (active.value).substring(active.selectionEnd, active.value.length);
        active.value = pre + request.emoji + post;
    }
});