function releaseNotes(release) {
    release_notes_text = "";
    switch (release) {
        case "3.9":
        case "3.9.1":
            release_notes_text = "<ul>";
            release_notes_text += "<li>You can support this project buying a coffee to the developer on PayPal or Ko-fi (see the Settings bottom) {{emoji}}☕{{/emoji}}</li>";
            release_notes_text += "<li>Added the shortcut to open this add-on: Ctrl/Command+Alt+A (only in Firefox!)</li>";
            release_notes_text += "<li>Press \"Enter\" when finish to digit the keyword to focus automatically the results</li>";
            release_notes_text += "</ul>";
            break;

        case "3.10":
            release_notes_text = "<ul>";
            release_notes_text += "<li>Added tooltip over the emojis when you search or navigate in sections {{emoji}}😉{{/emoji}}</li>";
            release_notes_text += "<li>Added \"I need help\" button in Settings, if you need support {{emoji}}🆘{{/emoji}}</li>";
            release_notes_text += "<li>Added auto-save in Settings, so you don't need to press \"Save\" anymore</li>";
            release_notes_text += "<li>Added some information about the add-on in Settings (like version number, etc.)</li>";
            release_notes_text += "</ul>";
            break;

        case "3.10.1":
            release_notes_text = "<ul>";
            release_notes_text += "<li>Added tooltip also in <i>Most used section</i> (just for emoji you'll copy since now)</li>";
            release_notes_text += "<li>Fixed a bug with \"Auto-focus\" for the search box</li>";
            release_notes_text += "</ul>";
            break;

        case "3.10.2":
            release_notes_text = "<ul>";
            release_notes_text += "<li>Improved the speed to show emojis</li>";
            release_notes_text += "<li>Now you can change skin-tone without restart pop-up {{emoji}}✌✌🏻✌🏼✌🏽✌🏾✌🏿{{emoji}}</li>";
            release_notes_text += "</ul>";
            break;
    }
    return release_notes_text;
}