browser.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "openPopup") {
        console.log("Enter here");
        window.open(chrome.extension.getURL("popup.html"), "_blank");
    }
});