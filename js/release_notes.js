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
            release_notes_text += "<li>You can now translate the add-on and the emojis easily on Crowdin.<br><small><i>You can change the language in Settings.</i></small><br><br><div class='text-center'><a href='https://crowdin.com/project/emoji-sav' class='close-popup button-release'>Translate now!</a></div></li>";
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
            release_notes_text += "<li>Updated all languages<br><br><div class='text-center'><a href='https://crowdin.com/project/emoji-sav' class='close-popup button-release'>Translate now in your language!</a></div></li>";
            release_notes_text += "</ul>";
            break;

        case "3.14":
            release_notes_text = "<ul>";
            release_notes_text += "<li>Added a new option in Settings: you can now enable the inserting an emoji instead of only copy it! Turn on <i>Also insert directly the emoji</i> in Settings.</li>";
            release_notes_text += "<li><i><small>Did you know...?</small></i><br>You can open automatically the popup with the shortcut:<br><br><div class='text-center'><span class='background-lightblue'>Ctrl/Cmd + Alt + A</span></div></li>";
            release_notes_text += "</ul>";
            break;

        case "3.14.2":
            release_notes_text = "<ul>";
            release_notes_text += "<li>Optional permissions for the feature <i>Also insert directly the emoji</i>. You need to (re)turn on it in Settings. (Thank you @<b>minxaa</b>)</li>";
            release_notes_text += "<li>Fixed issues with some emojis.</li>";
            release_notes_text += "<li>Updated languages.</li>";
            release_notes_text += "</ul>";
            break;

        case "3.14.4.1":
        case "3.14.6":
            release_notes_text = "<ul>";
            release_notes_text += "<li><b>Important for macOS users:</b><br><br>If you see an empty screen after the update, and you want to use \"Twemoji\", please don't use \"Twemoji (Recommended)\", instead use the font <small><span class='background-lightblue'>Twemoji (temporary fix)</span></small> (you will not be able to see the new emojis in Unicode 14) or another font-family</li>";
            release_notes_text += "<li>Added \"JoyPixels\" and \"Google (notocoloremoji)\" font family</li>";
            release_notes_text += "<li>Updated languages</li>";
            release_notes_text += "</ul>";
            break;

        case "3.16.1":
            release_notes_text = "<ul>";
            release_notes_text += "<li>You can now customise the keyboard shortcut to open the add-on! Go to <small><span class='background-lightblue'>Settings</span></small> and choose your favourite shortcut</li>";
            release_notes_text += "<li>Improved the choosing of emoji-size in Settings, in fact now you have a preview of button</li>";
            release_notes_text += "<li>Added some new emojis</li>";
            release_notes_text += "<li>Updated languages</li>";
            release_notes_text += "</ul>";
            break;

        case "3.17.1":
        case "3.17":
            release_notes_text = "<ul>";
            release_notes_text += "<li>Improved the feature 'Insert directly the emoji' (now support also many other elements)</li>";
            release_notes_text += "<li>Updated languages</li>";
            release_notes_text += "</ul>";
            release_notes_text += "<br>Remember to buy me a coffee if you like the add-on and you want to support me<br><br><div class='text-center'><a href='https://paypal.me/saveriomorelli' class='close-popup button-release'>PayPay</a> <a href='https://liberapay.com/Sav22999/donate' class='close-popup button-release'>LiberaPay</a></div>";
            break;

        case "3.18":
            release_notes_text = "<ul>";
            release_notes_text += "<li>Improved the searching: now it's more precise!</li>";
            release_notes_text += "<li>For searching, added emojis by shortcode – for example <small><span class='background-lightblue'>:grinning:</span></small></li>";
            release_notes_text += "<li>For searching, added emojis by colour – for example <small><span class='background-lightblue'>:purple:</span></small></li>";
            release_notes_text += "<li>For searching, added emojis by gender: <small><span class='background-lightblue'>:man:</span></small>, <small><span class='background-lightblue'>:woman:</span></small> or <small><span class='background-lightblue'>:person:</span></small></li>";
            release_notes_text += "<li>New website of the add-on: https://emojiaddon.com <a href='https://www.emojiaddon.com/' class='close-popup button-release'>Visit the new website</a></li>";
            release_notes_text += "</ul>";
            break;

        case "3.18.1":
            release_notes_text = "<ul>";
            release_notes_text += "<li>Improved the searching for some emojis</li>";
            release_notes_text += "<li>Removed flags in the Settings > Language to be more inclusive</li>";
            release_notes_text += "<li>Updated fonts (in particular, OpenMoji now works well!)</li>";
            release_notes_text += "<li>Added some missing emojis</li>";
            release_notes_text += "<li>If you need help, or you want to suggest anything, use the website: https://emojiaddon.com/help <a href='https://www.emojiaddon.com/help' class='close-popup button-release'>Go to the website</a></li>";
            release_notes_text += "</ul>";
            break;

        case "3.19":
            release_notes_text = "<ul>";
            release_notes_text += "<li>Some new improvements</li>";
            release_notes_text += "<li>New: import and export settings when change</li>";
            release_notes_text += "<li>Fixed some bugs</li>";
            release_notes_text += "</ul>";
            break;

        case "3.21":
            release_notes_text = "<ul>";
            release_notes_text += "<li>Some new improvements</li>";
            release_notes_text += "<br>Do you like Emoji? Do you use Telegram? Join in my Telegram group, where you'll <b>find many other open-source and free projects</b> I develop";
            release_notes_text += "<br><div class='text-center'><a href='https://t.me/sav_projects' class='close-popup button-release'>Join now on Telegram!</a></div>";
            release_notes_text += "</ul>";
            break;

        case "3.22.2":
            release_notes_text = "<ul>";
            release_notes_text += "<li>Removed <span class='background-lightblue'>JoyPixels</span> font</li>";
            release_notes_text += "<li>Added new emojis</li>";
            release_notes_text += "<li>The current Twemoji version doesn't support the latest emojis (Emoji 15.1 - 2023), so if you want to use them, please, use another emoji font: change it in Settings</li>";
            release_notes_text += "<li>New Instagram account, follow it now! </li>";
            release_notes_text += "<br><div class='text-center'><a href='https://www.instagram.com/emojiaddon/' class='close-popup button-release'>Follow now</a></div>";
            release_notes_text += "</ul>";
            break;
    }
    return release_notes_text;
}