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

        case "3.10.3":
            release_notes_text = "<ul>";
            release_notes_text += "<li>As many of you asked, I've added also LiberaPay to <i>Support my work</i> (to buy me a coffee) in Settings {{emoji}}☕{{/emoji}}</li>";
            release_notes_text += "</ul>";
            break;

        case "3.11":
            release_notes_text = "<ul>";
            release_notes_text += "<li>Fixed some bugs</li>";
            release_notes_text += "<li>Added an <i>Ester egg</i>: try to digit <i>Sav22999</i></li>";
            release_notes_text += "<li>Added description (tooltip) also for the section titles</li>";
            release_notes_text += "<li>Improved the UX/UI</li>";
            release_notes_text += "</ul>";
            break;

        case "3.12":
            release_notes_text = "<ul>";
            release_notes_text += "<li>Added quick choice of the skin-tone: press <i>Right-click</i> on an emoji and choose your needed skin-tone! (warning: the skin-tone in the emoji-picker will remain with the selected skin-tone, change it in Settings)</li>";
            release_notes_text += "<li>Added the customisation of the extension-icon, in Settings</li>";
            release_notes_text += "<li>Disabled the context-menu everywhere, except in the search-box</li>";
            release_notes_text += "<li>Fixed minor bugs</li>";
            release_notes_text += "</ul>";
            break;

        case "3.13":
            release_notes_text = "<ul>";
            release_notes_text += "<li>You can now translate the add-on and the emojis easily on Crowdin.<br><small><i>You can change the language in Settings.</i></small><br><br><div class='text-center'><a href='https://crowdin.com/project/emoji-sav' class='button-release'>Translate now!</a></div></li>";
            release_notes_text += "</ul>";
            break;

        case "3.13.1":
            release_notes_text = "<ul>";
            release_notes_text += "<li>Added translation in Arabic (ar) 🇦🇪 🇪🇭 🇸🇦, Chinese (zh-CN) 🇨🇳, Czech (cs) 🇨🇿, Danish (da) 🇩🇰, Dutch (nl) 🇳🇱, Finnish (fi) 🇫🇮, French (fr) 🇫🇷, German (de) 🇩🇪, Greek (el) 🇬🇷, Italian (it) 🇮🇹, Japanese (jp) 🇯🇵, Norwegian (no) 🇳🇴, Polish (pl) 🇵🇱, Portuguese (pt-PT and pt-BR) 🇵🇹 🇧🇷, Romanian (ro) 🇷🇴, Russian (ru) 🇷🇺, Spanish (es-ES) 🇪🇸, Swedish (sv-SE) 🇸🇪, Ukrainian (uk) 🇺🇦.<br><br><div class='text-center'><a href='https://crowdin.com/project/emoji-sav' class='button-release'>Translate now in your language!</a></div></li>";
            release_notes_text += "</ul>";
            break;

        case "3.13.7":
            release_notes_text = "<ul>";
            release_notes_text += "<li>Added a new option in Settings: when <i>Multi-copy</i> is enabled, you can choose to insert a space between emojis or not.</li>";
            release_notes_text += "<li>Updated all languages<br><br><div class='text-center'><a href='https://crowdin.com/project/emoji-sav' class='button-release'>Translate now in your language!</a></div></li>";
            release_notes_text += "</ul>";
            break;
    }
    return release_notes_text;
}