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
    }
    return release_notes_text;
}