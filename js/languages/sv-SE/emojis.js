// descriptions took from Emojipedia.org
lang = 'sv-SE';
//use i18n language code of the browser, more details: https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/i18n/LanguageCode
titles_language[lang] = {
    '🔍': 'Resultat',
    '🕒': 'Mest använda emojis',
    '😀': 'Smileys',
    '🙋': 'Personer',
    '🦊': 'Djur',
    '🅰️': 'Symboler',
    '🍎': 'Mat och dryck',
    '🏳️‍🌈': 'Flaggor',
    '🏊': 'Sport',
    '✈️': 'Resor och platser',
    '🖱️': 'Teknik och kontor',
    '👗': 'Kläder och tillbehör',
    '🖐️': 'Händer och kroppsdelar',
    '🛎️': 'Annat'
};
emojis_language[lang] = [];
/*search*/
emojis_language[lang][0] = {};
/*smileys*/
emojis_language[lang][2] = {
    '😀': [
        'Slipat ansikte',
        ':grinning:',
        ':grinning_face:',
        '::):',
        'Glad Ansikte',
        'Smiley ansikte'
    ],
    '😃': [
        'Grinning Face med stora ögon',
        ':smiley:',
        ':grinning_face_with_big_eyes:',
        '::D:',
        'Glad Ansikte',
        'Smiley ansikte',
        'Leende ansikte med öppen mun'
    ],
    '😄': [
        'Grinning Face med Smiling Eyes',
        ':smile:',
        ':grinning_face_with_smiling_eyes:',
        'Glad Ansikte',
        'Smiley ansikte',
        'Grinning Face med Squinting Eyes',
        'Leende ansikte med öppen mun och leende ögon'
    ],
    '😁': [
        'Beaming Face med Smiling Eyes',
        ':grin:',
        ':beaming_face_with_smiling_eyes:',
        'Grinning Face med Smiling Eyes'
    ],
    '😆': [
        'Grinning Squinting Face',
        ':grinning_squinting_face:',
        ':xD:',
        ':><:',
        'Stor Grin',
        'Stängda ögon leende',
        'Skrattar',
        'Slipning Ansikte med tätt stängda ögon',
        'Leende ansikte med öppen mun och tätt stängda ögon'
    ],
    '😅': [
        'Slipning Ansikte med svett',
        ':happy_sweat:',
        'Motion',
        'Glad svett',
        'Grinning Face med Squinting Eyes och Sweat Drop',
        'Leende ansikte med öppen mun och kall svett'
    ],
    '🤣': [
        'ROFL',
        ':rofl:',
        'Rullande på golvet Skratt'
    ],
    '😂': [
        'Ansikte med tårar av glädje',
        ':lol:',
        'Skrattar',
        'Skrattar gråter',
        'Skrattande tårar',
        'LOL'
    ],
    '🙂': [
        'Lätt leende ansikte',
        ':smile:',
        '::):',
        'Ganska glad',
        'Det här är bra'
    ],
    '🙃': [
        'Upp-och-ner ansikte',
        ':upside-down_face:',
        ':upside_down_face:',
        'Sarcasm',
        'Silly',
        'Upp och ner ansikte'
    ],
    '😉': [
        'Blinkande ansikte',
        ':winking:',
        ':;):',
        'Bänk',
        'Vinkansikte',
        'Blåsigt ansikte'
    ],
    '😊': [
        'Leende Ansikte med leende ögon',
        ':smiling_face:',
        ':^^:',
        'Glad Ansikte',
        'Leende',
        'Smiley ansikte'
    ],
    '😇': [
        'Leende Ansikte med Halo',
        ':smiling_angel:',
        'Ängel',
        'Halo'
    ],
    '🥰': [
        'Leende ansikte med hjärtan',
        ':smiling_hearts:',
        'I Kärlek Ansikte',
        'Leende ansikte med leende ögon och tre hjärtan'
    ],
    '😍': [
        'Leende Ansikte med hjärt-ögon',
        'kärlek',
        ':smiling_heart-eyes:',
        ':smiling_heart_eyes:',
        ':*.*:',
        'Hjärta Ögon',
        'Hjärta Ansikte',
        'Leende Ansikte med hjärtformade ögon'
    ],
    '🤩': [
        'Stjärnstöt',
        ':star_eyes:',
        'Upphetsad',
        'Stjärna ögon',
        'Stjärnor Ögade',
        'Wow ansikte',
        'Ansikte med Starry Ögon',
        'Grinning Face med Star Eyes'
    ],
    '😘': [
        'Ansikte blåser en kyss',
        'kärlek',
        ':kissing_face:',
        '::*:',
        '::-*:',
        'Blås en kyss',
        'Blåsande kyss',
        'Kyssar',
        'Ansikte kasta en kyss'
    ],
    '😗': [
        'Kissar ansikte',
        'kyss',
        ':kissing_face:',
        '::*:',
        '::-*:',
        'Anka Ansikte',
        'Kissy Face',
        'Visslande'
    ],
    '☺️': [
        'Leende Ansikte',
        ':smiling_face:',
        'Glad Ansikte',
        'Smiley ansikte',
        'Leende',
        'Vitt leende ansikte'
    ],
    '😚': [
        'Kyssar ansikte med stängda ögon',
        ':kissing_face:',
        'Kyss ansikte',
        'Kissy Face'
    ],
    '😙': [
        'Kyssar ansikte med leende ögon',
        ':kissing_face:',
        'Kyss ansikte',
        'Kissy',
        'Vissla',
        'Visslande'
    ],
    '😋': [
        'Ansikte Savoring Mat',
        ':savoring_face:',
        'Göm',
        'Hungrig',
        'Leende läpparna för ansiktet',
        'Ansikte Savouring Läcker mat',
        'Yum Yum'
    ],
    '😛': [
        'Ansikte med tunga',
        ':tongue_face:',
        '::P:',
        'Skönt',
        'Tunga Ansikte',
        'Tunga-ut',
        'Ansikte med Stuck-Out tungan'
    ],
    '😜': [
        'Blinkande ansikte med tunga',
        ':winking:',
        ':;P:',
        'Galen',
        'Galet ansikte',
        'Winking Face med Stuck-Out Tongue',
        'Ansikte med Stuck-Out Tongue och Winking Eye'
    ],
    '🤪': [
        'Zany Face',
        ':crazy_face:',
        'Galen ögon',
        'Upphetsad',
        'Vild',
        'Goofy Face',
        'Slipning Face med One Large och One Small Eye'
    ],
    '😝': [
        'Squinting Face med tungan',
        ':tongue_face:',
        ':xP:',
        'Tunga ut',
        'Ansikte med Stuck Out Tongue och Tightly-Closed Eyes',
        'Ansikte med Stuck-Out Tongue och Tightly-Closed Eyes'
    ],
    '🤑': [
        'Money-Mouth Face',
        ':money-mouth_face:',
        ':money_mouth_face:',
        '::$:',
        'Dollar tecken Ögon',
        'Pengar ansikte',
        'Rik'
    ],
    '🤗': [
        'Huggande Ansikte',
        ':hugging_face:',
        'Hug',
        'Kramar',
        'Kramar',
        'Glad ansikte med kramande händer'
    ],
    '🤭': [
        'Hoppsan',
        ':oops:',
        'Ansikte med handen över munnen',
        'Leende ansikte med Smiling Eyes och Hand Täckande Mun'
    ],
    '🤫': [
        'Shh',
        ':shushing_face:',
        'Shush',
        'Shushing Face',
        'Tyst',
        'Tyst',
        'Tystnad',
        'Tyst',
        'Ansikte med fingerskydd stängda läppar'
    ],
    '🤔': [
        'Vad',
        ':thinking_face:',
        '?',
        'Hmm',
        'Tänker ansikte',
        'Chin Miniatyr',
        'Tänkare',
        'Kastande rakning'
    ],
    '🤐': [
        'Postnummer',
        'tyst',
        'tystnad',
        ':zip_face:',
        'Blixtlås-mun-ansikte',
        'Läppar förseglade',
        'Förseglade Läppar',
        'Postnummer det',
        'Ansikte med en dragkedja'
    ],
    '🤨': [
        'Ansikte med Raised Eyebrow',
        ':face_with_raised_eyebrow:',
        'Kolbert',
        'Stenen',
        'Face With Raised Eyebrow',
        'Ansikte med One Eyebrow Raised'
    ],
    '😐': [
        'Neutralt ansikte',
        ':neutral_face:',
        ':|',
        'Ansikte med rak mun',
        'Rakt vänd mot'
    ],
    '😑': [
        'Uttryckslöst ansikte',
        ':expressionless_face:',
        '-_-',
        'Ansikte med rak mun',
        'Rakt ansikte'
    ],
    '😶': [
        'Ansikte utan mun',
        ':face_without_mouth:',
        'Tomt Ansikte',
        'Munlös',
        'Tystnad',
        'Tyst'
    ],
    '😏': [
        'Smirking ansikte',
        ':smirking_face:',
        'Flirtar',
        'Sexuellt ansikte',
        'Mugg Ansikte',
        'Stimulerande mile'
    ],
    '😒': [
        'Namnlöst Ansikte',
        ':unamused_face:',
        'Missnöjd',
        'Meh',
        'Side-Eye',
        'Oimponerad'
    ],
    '🙄': [
        'Ansikte med Rolling Eyes',
        ':face_with_rolling_eye:',
        ':eye_roll:',
        'Ögon rulle'
    ],
    '😬': [
        'Grimacing ansikte',
        ':awkward:',
        'Tacksam',
        'Eek',
        'Fot i montage',
        'Nervös',
        'Snapchat Ömsesidig #1 Bästa Vän'
    ],
    '🤥': [
        'Liggande ansikte',
        ':lying_face:',
        'Lögnare',
        'Lång näsa',
        'Pinocchio'
    ],
    '😌': [
        'Lindrat ansikte',
        ':relieved_face:',
        'Innehåll',
        'Grattis'
    ],
    '😔': [
        'Ledsen',
        ':sad_face:',
        'Pensivt ansikte',
        'Pentig',
        'Ledsen',
        'Sadface',
        'Sorg',
        'Ledsen Pensiv Ansikte'
    ],
    '😪': [
        'Sömnigt ansikte',
        ':sleepy_face:',
        'Side-Tear',
        'Snöbubbla'
    ],
    '🤤': [
        'Saliv',
        ':saliva_face:',
        'Drooling Face',
        'Drool'
    ],
    '😴': [
        'Sovande Ansikte',
        ':sleeping_face:',
        ':zzz:',
        'Zzz',
        'Sömn ansikte',
        'Snarkning',
        'Zzz ansikte'
    ],
    '🥱': [
        'Yawning ansikte',
        'trött',
        ':yawning_face:'
    ],
    '😷': [
        'Ansikte med Medical Mask',
        'sjuk',
        'dokument',
        ':face_with_medical_mask:',
        'Coronavirus',
        'COVID-19',
        'Mask Ansikte',
        'Kirurgisk mask',
        'ill'
    ],
    '🤒': [
        'Ansikte med termometer',
        ':face_with_thermometer:',
        ':sick:',
        ':ill:',
        'Ill',
        'Sjuk'
    ],
    '🤕': [
        'Ansikte med Huvud-Bandage',
        'sjukhus',
        'sjuk',
        ':face_with_head-bandage:',
        ':face_with_head_bandage:',
        'Bandat Huvud',
        'Klumpig',
        'Skadad',
        'ill'
    ],
    '🤢': [
        'Illamående ansikte',
        'sjuk',
        ':nauseated_face:',
        'Avsmak',
        'Grönt ansikte',
        'Kräkningar',
        ':green:',
        'ill'
    ],
    '🤮': [
        'Ansikte kräks',
        'sjuk',
        ':face_vomiting:',
        'Speg',
        'Bleah',
        'Bleurgh',
        'Yuk',
        'Yuck',
        'Åt',
        'Speg',
        'Kastar upp',
        'Kräkningar',
        'Ansikte med öppen mun kräkningar',
        'ill'
    ],
    '🤧': [
        'Nysningar ansikte',
        'sjuk',
        ':sneezing_face:',
        'Gesundheit',
        'ill'
    ],
    '🥵': [
        'Varmt Ansikte',
        ':hot_face:',
        'Överhettat ansikte',
        ':red:'
    ],
    '🥶': [
        'Kallt ansikte',
        ':cold_face:',
        'Sval',
        'Kyl',
        'Underkylt ansikte',
        ':blue:'
    ],
    '🥴': [
        'Vackert ansikte',
        ':woozy_face:',
        'Drunkat ansikte',
        'Ansikte med Uneven Eyes och Wavy Mouth'
    ],
    '😵': [
        'Dizzy Face',
        ':dizzy_face:',
        'Cross Eyes ansikte',
        'Spiral Ögon ansikte'
    ],
    '🤯': [
        'Exploderande huvud',
        'bom',
        ':exploding_head:',
        'Sinnet blåst',
        'Chockat ansikte med exploderande huvud'
    ],
    '🤠': [
        'Cowboy Hatt ansikte',
        ':cowboy_hat_face:',
        'Cowboy',
        'Cowboy Face',
        'Ansikte med Cowboy Hatt'
    ],
    '🥳': [
        'Festligt ansikte',
        ':partying_face:',
        'Partyansikte',
        'Ansikte med Party Horn och Party Hat'
    ],
    '😎': [
        'Leende Ansikte med solglasögon',
        ':smiling_face_with_sunglasses:',
        'Sval',
        'Ömsesidiga Bästa Vänner (Snapchat)',
        'Solglasögon'
    ],
    '🤓': [
        'Nörd ansikte',
        ':nerd_face:',
        'Nerdy'
    ],
    '🧐': [
        'Ansikte med Monocle',
        ':face_with_monocle:'
    ],
    '😕': [
        'Förvirrat ansikte',
        ':confused_face:',
        '::/:',
        '::S:',
        'Icke-plusad',
        'Förbryllad'
    ],
    '😟': [
        'Oroat ansikte',
        ':worried_face:',
        '::(:',
        'Ledsen',
        'Sadface'
    ],
    '🙁': [
        'Något rynkat ansikte',
        ':slightly_frowning_face:',
        '::(:',
        'Något ledsen'
    ],
    '☹️': [
        'Frowning Face',
        ':frowning_face:',
        '::(:',
        'Megafrown',
        'Vitt rynkat ansikte'
    ],
    '😮': [
        'Wow',
        ':wow:',
        '::O:',
        'Åh min!',
        'Ansikte med öppen mun',
        'Öppna munnen',
        'Förvånat ansikte med öppen mun'
    ],
    '😯': [
        'Tystat ansikte',
        ':husked_face:',
        '::O:',
        'Överraskning',
        'Förvånat ansikte'
    ],
    '😲': [
        'Chockat ansikte',
        ':shocked_face:',
        '::O:',
        'Wow',
        'Förstansat ansikte',
        'Drunkat ansikte',
        'Gaspande ansikte'
    ],
    '😳': [
        'Spolat ansikte',
        ':flushed_face:',
        '::$:',
        'Blushing Face',
        'Inbarrassed',
        'Skämt',
        'Ansikte med breda öppna ögon'
    ],
    '🥺': [
        'Pleading ansikte',
        ':pleading_face:',
        '::(:',
        'Nybörjare',
        'Glansiga ögon',
        'Simp',
        'Ansikte med Pleading Eyes'
    ],
    '😦': [
        'Frowning Face med öppen mun',
        ':frowning_face_with_open_mouth:',
        ':D::',
        'Gryning'
    ],
    '😧': [
        'Anguished Face',
        ':anguished_face:',
        ':anguished:',
        ':D::',
        'Pained Face'
    ],
    '😨': [
        'Skrämd',
        ':scared:',
        ':D::',
        'Fruktansvärt ansikte',
        'Förvånad'
    ],
    '😰': [
        'Anxiöst ansikte med svett',
        ':anxious_face_with_sweat:',
        'Blått ansikte',
        'Bekymrat Ansikte',
        'Nervöst ansikte',
        'Ansikte med öppen mun och kall svett'
    ],
    '😥': [
        'Ledsen men befriad Ansikte',
        ':sad_but_relieved_face:',
        '::(:',
        'Ögonbrynssvett',
        'Besviken men befriad ansikte'
    ],
    '😢': [
        'Gråter Ansikte',
        ':crying_face:',
        '::(:',
        'Gråt',
        'Riv'
    ],
    '😭': [
        'Högt gråtande ansikte',
        ':loudly_crying_face:',
        'Bawling',
        'Gråt',
        'Ledsna tårar',
        'Sobbing'
    ],
    '😱': [
        'Ansikte skriker i skräck',
        ':face_screaming_in_fear:',
        'Hem ensam',
        'Skri',
        'Skrikande ansikte'
    ],
    '😖': [
        'Samtyckt ansikte',
        ':confounded_face:',
        'Quivering Mun',
        'Krympt Ansikte'
    ],
    '😣': [
        'Ihållande ansikte',
        ':persevering_face:',
        'Hjälplöst ansikte',
        'Skrynkade ögon'
    ],
    '😞': [
        'Sviket ansikte',
        ':disappointed_face:',
        '::(:',
        'Ledsen',
        'Sadface'
    ],
    '😓': [
        'Downcast Ansikte med svett',
        ':downcast_face_with_sweat:',
        'Hårt arbete',
        'Ledsen Svett Ansikte',
        'Ansikte med kall svett'
    ],
    '😩': [
        'Bärbart ansikte',
        ':weary_face:',
        'Distraught ansikte',
        'Salighet'
    ],
    '😫': [
        'Trött ansikte',
        ':tired_face:',
        'Utmattad',
        'Fed upp',
        'Distraught ansikte'
    ],
    '😤': [
        'Ansikte med Steam från näsan',
        ':face_with_steam_from_nose:',
        'Airing of Grievances',
        'Frustrerad',
        'Mad ansikte',
        'Ånger',
        'Huffa med ilska ansikte'
    ],
    '😡': [
        'Pouting ansikte',
        'fuck',
        ':pouting_face:',
        'Arg Ansikte',
        'Grumpy ansikte',
        'Mad ansikte',
        'Rött Ansikte',
        ':red:'
    ],
    '😠': [
        'Arg Ansikte',
        ':angry_face:',
        'Arg',
        'Grumpy ansikte'
    ],
    '🤬': [
        'Sväva',
        'fuck',
        ':swearing:',
        '@#$%&!',
        'Ansikte med symboler i munnen',
        'Förbannad',
        'Kusslar',
        'Grawlix',
        'Ansikte med symboler över munnen',
        'Allvarligt ansikte med symboler Täckande mun',
        ':red:'
    ],
    '🥲': [
        'Leende Ansikte med Riv',
        ':smiling_face_with_tear:'
    ],
    '😮‍💨': [
        'Ansikte utandning',
        ':face_exhaling:',
        'Lö'
    ],
    '😵‍💫': [
        'Ansikte med spiralögon',
        ':face_with_spiral_eyes:',
        'Dizzy Face'
    ],
    '😶‍🌫️': [
        'Ansikte i moln',
        'rök',
        ':face_in_clouds:',
        'Brain Fog',
        'Glömmande',
        'Dis'
    ],
    '🥸': [
        'Förklädd yta',
        ':disguised_face:'
    ],
    '🫠': [
        'Smältande ansikte',
        ':melting_face:'
    ],
    '🫢': [
        'Ansikte med öppna ögon och hand över mun',
        ':face_with_open_eyes_and_hand_over_mouth:'
    ],
    '🫣': [
        'Ansikte med Peeking Eye',
        ':face_with_peeking_eye:'
    ],
    '🫡': [
        'Hälsningsfullt ansikte',
        ':saluting_face:',
        'Militär',
        'Armé',
        'RAF',
        'Marin'
    ],
    '🫥': [
        'Prickad linje ansikte',
        ':dotted_line_face:',
        ':transparent:'
    ],
    '🫤': [
        'Ansikte med diagonal mun',
        ':face_with_diagonal_mouth:'
    ],
    '🥹': [
        'Ansikte håller tillbaka tårar',
        ':face_holding_back_tears:'
    ],
    //"🫨": ["Shaking Face", ":shaking_face:"],
    '😈': [
        'Leende ansikte med horn',
        ':smiling_face_with_horns:',
        'Djävulen',
        'Djävuls horn',
        'Glad Djävulen',
        'Lila Djävulen',
        'Röd Djävulen',
        ':purple:'
    ],
    '👿': [
        'Argt ansikte med horn',
        ':angry_face_with_horns:',
        'Djävulen',
        'Djävuls horn',
        'Lila Djävulen',
        'Lila Goblin',
        'Ledsen Djävulen',
        'Imp',
        ':purple:'
    ],
    '🤡': [
        'Clownens ansikte',
        ':clown_face:',
        'Läskig clown',
        'Ond clown',
        'Skrämmande Clown'
    ],
    '👽': [
        'Utomjordisk',
        ':alien:',
        'ET'
    ],
    '👾': [
        'Främmande monster',
        ':alien_monster:',
        'Invader i webb-ytan',
        'Videospel monster'
    ],
    '🤖': [
        'Robot',
        ':robot:',
        'Robot ansikte'
    ],
    '👹': [
        'Ogre',
        ':ogre:',
        'Mask Ansikte',
        'Oni',
        'Rött monster',
        'Japanska Ogre',
        ':red:'
    ],
    '👻': [
        'Spöke',
        ':ghost:',
        'Halloween'
    ],
    '🗣️': [
        'Talar huvud',
        ':speaking_head:',
        'Mansplying',
        'Rop',
        'Skriker',
        'Tala Huvud i Silhouette',
        ':blue:'
    ],
    '👤': [
        'Byst i Silhouette',
        ':bust_in_silhouette:',
        'Skugga',
        'Silhouette',
        'Användare',
        'Siluett av person',
        ':blue:'
    ],
    '🫂': [
        'Folk kramar',
        ':people_hugging:',
        ':blue:'
    ],
    '👥': [
        'Byst i Silhouette',
        ':busts_in_silhouette:',
        'Skuggor',
        'Silhouettes',
        'Användare',
        'Siluett av två personer',
        ':blue:'
    ]
};
/*people*/
emojis_language[lang][3] = {
    '👶{{skin_tone}}': [
        'Baby',
        ':baby:',
        'Barn',
        'Småbarn'
    ],
    '🧒{{skin_tone}}': [
        'Barn',
        ':child:',
        'Neutralt barn kön'
    ],
    '👧{{skin_tone}}': [
        'Flicka',
        ':girl:',
        ':woman:'
    ],
    '🧑{{skin_tone}}': [
        'Person',
        ':person:',
        'Neutralt Könsberoende',
        'Vuxen',
        ':person:'
    ],
    '🧑{{skin_tone}}': [
        'Person: Skägg',
        ':person_beard:',
        'Skägg',
        'Skäggig Person',
        'Skäggig Person',
        ':person:'
    ],
    '🧑{{skin_tone}}‍🦰': [
        'Person: Rött hår',
        ':person_red_hair:',
        'Ingefära Person',
        'Person Redhead',
        'Person med rött hår',
        ':person:'
    ],
    '🧑{{skin_tone}}‍🦱': [
        'Person: Lockigt hår',
        ':person_curly_hair:',
        'Person med lockigt hår',
        ':person:'
    ],
    '🧑{{skin_tone}}‍🦳': [
        'Person: vitt hår',
        ':person_white_hair:',
        'Person med grått hår',
        ':person:'
    ],
    '🧑{{skin_tone}}‍🦲': [
        'Person: Skallig',
        ':person_bald:',
        'Person med inget hår',
        ':person:'
    ],
    '👱{{skin_tone}}': [
        'Person: Blondt hår',
        ':person_blond_hair:',
        'Person med blont hår',
        ':person:'
    ],
    '👨{{skin_tone}}': [
        'Människan',
        ':man:',
        'Man',
        'Mustasch Man',
        ':man:'
    ],
    '🧔{{skin_tone}}‍♂️': [
        'Man: Skägg',
        ':man_beard:',
        'Skägg',
        'Skäggad Man',
        'Skäggig Person',
        ':man:'
    ],
    '👨{{skin_tone}}‍🦰': [
        'Man: Rött hår',
        ':man_red_hair:',
        'Ingefära Man',
        'Man Redhead',
        'Man med rött hår',
        ':man:'
    ],
    '👨{{skin_tone}}‍🦱': [
        'Man: Lockigt hår',
        ':man_curly_hair:',
        'Man med lockigt hår',
        ':man:'
    ],
    '👨{{skin_tone}}‍🦳': [
        'Man: vitt hår',
        ':man_white_hair:',
        'Man med grått hår',
        ':man:'
    ],
    '👨{{skin_tone}}‍🦲': [
        'Man: Skallig',
        ':man_bald:',
        'Man med inget hår',
        ':man:'
    ],
    '👱{{skin_tone}}‍♂️': [
        'Man: Blond hår',
        ':man_blond_hair:',
        'Man med blont hår',
        ':man:'
    ],
    '👩{{skin_tone}}': [
        'Kvinna',
        ':woman:',
        'Kvinna',
        'Dam',
        'Gul kvinna',
        ':woman:'
    ],
    '🧔{{skin_tone}}‍♀️': [
        'Kvinna: Skägg',
        ':woman_beard:',
        'Skägg',
        'Skäggad kvinna',
        ':woman:'
    ],
    '👩{{skin_tone}}‍🦰': [
        'Kvinna: Rött hår',
        ':woman_red_hair:',
        'Ingefära Kvinna',
        'Woman Redhead',
        'Kvinna med rött hår',
        ':woman:'
    ],
    '👩{{skin_tone}}‍🦱': [
        'Kvinna: Lockigt hår',
        ':woman_curly_hair:',
        'Kvinna med lockigt hår',
        ':woman:'
    ],
    '👩{{skin_tone}}‍🦳': [
        'Kvinna: Vitt hår',
        ':woman_white_hair:',
        'Kvinna med grått hår',
        ':woman:'
    ],
    '👩{{skin_tone}}‍🦲': [
        'Kvinna: Skallig',
        ':woman_bald:',
        'Kvinna med inget hår',
        ':woman:'
    ],
    '👱{{skin_tone}}‍♀️': [
        'Kvinna: Blond hår',
        ':woman_blond_hair:',
        'Kvinna med blont hår',
        ':woman:'
    ],
    '👴{{skin_tone}}': [
        'Äldre Man',
        ':older_man:',
        ':older:',
        'Äldre Man',
        'Grandpa',
        'Gammal man',
        ':man:'
    ],
    '👵{{skin_tone}}': [
        'Äldre kvinna',
        ':older_woman:',
        ':older:',
        'Äldre kvinna',
        'Mormor',
        'Nanna',
        'Gammal dam',
        'Gammal kvinna',
        ':woman:'
    ],
    '🧓{{skin_tone}}': [
        'Äldre person',
        ':older_person:',
        ':older:',
        'Könsneutrala äldre vuxna',
        ':person:'
    ],
    '👼{{skin_tone}}': [
        'Baby Ängel',
        ':baby_angel:',
        'Ängel',
        'Cherub',
        'Cupid',
        'Putto'
    ],
    '🎅{{skin_tone}}': [
        'Santa Claus',
        ':santa_claus:',
        'Saint Nicholas',
        'Sinterklaas',
        'Father Christmas',
        ':man:'
    ],
    '🤶{{skin_tone}}': [
        'Mrs Claus',
        ':mrs_claus:',
        'Mother Christmas',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🎄': [
        'Mx Claus',
        ':mx_clause:',
        'Person Jul',
        ':person:'
    ],
    '🤴{{skin_tone}}': [
        'Prins',
        ':price:',
        ':man:'
    ],
    '👸{{skin_tone}}': [
        'Prinsessan',
        ':pricess:',
        'Blond Flicka',
        'Flicka med krona',
        'Flicka med Tiara',
        ':woman:'
    ],
    '🫅{{skin_tone}}': [
        'Person med krona',
        ':person_with_crown:',
        ':person:'
    ],
    '👳{{skin_tone}}‍♂️': [
        'Man Bär Turban',
        ':man_wearing_turban:',
        ':wearing_turban:',
        'Arabiska',
        'Muselman',
        'Sikh',
        'Turban',
        ':man:'
    ],
    '👳{{skin_tone}}‍♀️': [
        'Kvinna Bär Turban',
        ':woman_wearing_turban:',
        ':wearing_turban:',
        'Arabiska',
        'Muselman',
        'Sikh',
        'Turban',
        ':woman:'
    ],
    '👳{{skin_tone}}': [
        'Person Bär Turban',
        ':person_wearing_turban:',
        ':wearing_turban:',
        'Arabiska',
        'Muselman',
        'Sikh',
        'Turban',
        ':person:'
    ],
    '👲{{skin_tone}}': [
        'Person med Skullcap',
        ':person_with_skullcap:',
        'Asiatisk man',
        'Man med kinesisk mössa',
        'Man med Gua Pi Mao',
        ':person:'
    ],
    '🧕{{skin_tone}}': [
        'Kvinna med huvudduk',
        ':woman_with_headscarf:',
        'Hijab',
        'Person med huvudduk',
        ':woman:'
    ],
    '🤵{{skin_tone}}‍♀️': [
        'Man i Tuxedo',
        ':man_in_tuxedo:',
        ':tuxedo:',
        'Groom',
        'Man i kostym',
        'Bröllop',
        ':man:'
    ],
    '🤵{{skin_tone}}‍♂️': [
        'Kvinna i Tuxedo',
        ':woman_in_tuxedo:',
        ':tuxedo:',
        'Groom',
        'Kvinna i kostym',
        'Bröllop',
        ':woman:'
    ],
    '🤵{{skin_tone}}': [
        'Person i Tuxedo',
        ':person_in_tuxedo:',
        ':tuxedo:',
        'Groom',
        'Person i kostym',
        'Bröllop',
        ':person:'
    ],
    '👰{{skin_tone}}‍♂️': [
        'Man med slöja',
        ':man_with_veil:',
        ':veil:',
        'Bröllop',
        'Brudgum',
        'Äktenskap',
        ':man:'
    ],
    '👰{{skin_tone}}‍♀️': [
        'Kvinna med slöja',
        ':woman_with_veil:',
        ':veil:',
        'Bröllop',
        'Brud',
        'Brud med slöja',
        'Äktenskap',
        ':woman:'
    ],
    '👰{{skin_tone}}': [
        'Person med slöja',
        ':person_with_veil:',
        ':veil:',
        'Bröllop',
        'Äktenskap',
        ':person:'
    ],
    '👨{{skin_tone}}‍🍼': [
        'Mannen utfodring Baby',
        ':man_feeding_baby:',
        ':feeding_baby:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🍼': [
        'Kvinnans utfodring Baby',
        ':woman_feeding_baby:',
        ':feeding_baby:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🍼': [
        'Person utfodring Baby',
        ':person_feeding_baby:',
        ':feeding_baby:',
        ':person:'
    ],
    '🥷': [
        'Ninja',
        ':ninja:'
    ],
    '🫃{{skin_tone}}': [
        'Gravid Man',
        ':pregnant_man:',
        ':pregnant:',
        'Graviditet',
        ':man:'
    ],
    '🤰{{skin_tone}}': [
        'Gravid kvinna',
        ':pregnant_woman:',
        ':pregnant:',
        'Graviditet',
        'Gravid Dam',
        ':woman:'
    ],
    '🫄{{skin_tone}}': [
        'Gravid Person',
        ':pregnant_person:',
        ':pregnant:',
        'Graviditet',
        ':person:'
    ],
    '🤱{{skin_tone}}': [
        'Breast-Feeding',
        ':breast-feeding:',
        ':breast_feeding:',
        'Breastfeeding'
    ],
    '🦸{{skin_tone}}‍♂️': [
        'Man Superhjälte',
        ':man_superhero:',
        ':superhero:',
        ':man:'
    ],
    '🦸{{skin_tone}}‍♀️': [
        'Kvinna Superhjälte',
        ':woman_superhero:',
        ':superhero:',
        ':woman:'
    ],
    '🦸{{skin_tone}}': [
        'Person Superhjälte',
        ':person_superhero:',
        ':superhero:',
        ':person:'
    ],
    '🦹{{skin_tone}}‍♂️': [
        'Mannen Superskurk',
        ':man_supervillain:',
        ':supervillain:',
        ':man:'
    ],
    '🦹{{skin_tone}}‍♀️': [
        'Kvinna Superskurk',
        ':woman_supervillain:',
        ':supervillain:',
        ':woman:'
    ],
    '🦹{{skin_tone}}': [
        'Person Superskurk',
        ':person_supervillain:',
        ':supervillain:',
        ':person:'
    ],
    '🧙{{skin_tone}}‍♂️': [
        'Man magi',
        ':man_mage:',
        ':mage:',
        'Sorcerer',
        'Guide',
        ':man:'
    ],
    '🧙{{skin_tone}}‍♀️': [
        'Kvinna magi',
        ':woman_mage:',
        ':mage:',
        'Häxa',
        'Ursäkta',
        'Guide',
        ':woman:'
    ],
    '🧙{{skin_tone}}': [
        'Person magi',
        ':person_mage:',
        ':mage:',
        'Guide',
        ':mage:',
        ':person:'
    ],
    '🧚{{skin_tone}}‍♂️': [
        'Man älva',
        ':man_fairy:',
        ':fairy:',
        ':man:'
    ],
    '🧚{{skin_tone}}‍♀️': [
        'Kvinna älva',
        ':woman_fairy:',
        ':fairy:',
        ':woman:'
    ],
    '🧚{{skin_tone}}': [
        'Person älva',
        ':person_fairy:',
        ':fairy:',
        ':person:'
    ],
    '🧛{{skin_tone}}‍♂️': [
        'Man Vampyr',
        ':man_vampire:',
        ':vampire:',
        'Dracula',
        ':man:'
    ],
    '🧛{{skin_tone}}‍♀️': [
        'Kvinna Vampyr',
        ':woman_vampire:',
        ':vampire:',
        ':woman:'
    ],
    '🧛{{skin_tone}}': [
        'Person Vampyr',
        ':person_vampire:',
        ':vampire:',
        ':person:'
    ],
    '🧜{{skin_tone}}‍♂️': [
        'Merman',
        ':merman:',
        'Merboy',
        ':man:'
    ],
    '🧜{{skin_tone}}‍♀️': [
        'Sjöjungfru',
        ':mermaid:',
        'Mergirl',
        ':woman:'
    ],
    '🧜{{skin_tone}}': [
        'Merperson',
        ':merperson:',
        ':person:'
    ],
    '🧝{{skin_tone}}‍♂️': [
        'Mannen Alf',
        ':man_elf:',
        ':elf:',
        ':man:'
    ],
    '🧝{{skin_tone}}‍♀️': [
        'Kvinna Alf',
        ':woman_elf:',
        ':elf:',
        ':woman:'
    ],
    '🧝{{skin_tone}}': [
        'Person Alf',
        ':person_elf:',
        ':elf:',
        ':person:'
    ],
    '🧞‍♂️': [
        'Man Genie',
        ':man_genie:',
        ':genie:',
        ':man:'
    ],
    '🧞‍♀️': [
        'Woman Genie',
        ':woman_genie:',
        ':genie:',
        ':woman:'
    ],
    '🧞': [
        'Person Genie',
        ':person_genie:',
        ':genie:',
        ':person:'
    ],
    '🕵️{{skin_tone}}‍♂️': [
        'Man Detektiv',
        ':man_detective:',
        ':detective:',
        'Privat öga',
        'Sleuth',
        'Spionera',
        'Man Sleuth',
        'Sömn eller spion',
        '007',
        'Inspektör',
        ':man:'
    ],
    '🕵️{{skin_tone}}‍♀️': [
        'Kvinna Detektiv',
        ':woman_detective:',
        ':detective:',
        'Privat öga',
        'Sleuth',
        'Spionera',
        'Kvinna Sömn',
        'Sömn eller spion',
        '007',
        'Inspektör',
        ':woman:'
    ],
    '🕵{{skin_tone}}': [
        'Person Detektiv',
        ':person_detective:',
        ':detective:',
        'Privat öga',
        'Sleuth',
        'Spionera',
        'Person Sömn',
        'Sömn eller spion',
        '007',
        'Inspektör',
        ':person:'
    ],
    '💂{{skin_tone}}‍♂️': [
        'Man: Guard',
        ':man_guard:',
        ':guard:',
        'Brittisk väktare',
        'Fot Vakt',
        ':man:'
    ],
    '💂{{skin_tone}}‍♀️': [
        'Kvinna: Vakt',
        ':woman_guard:',
        ':guard:',
        'Brittisk väktare',
        'Fot Vakt',
        ':woman:'
    ],
    '💂{{skin_tone}}': [
        'Person: Vakt',
        ':person_guard:',
        ':guard:',
        'Brittisk väktare',
        'Fot Vakt',
        ':person:'
    ],
    '👮{{skin_tone}}‍♂️': [
        'Polis',
        ':man_police_officer:',
        ':police_officer:',
        'Cop',
        'Polis',
        'Polis',
        ':man:'
    ],
    '👮{{skin_tone}}‍♀️': [
        'Kvinnlig polis',
        ':woman_police_officer:',
        ':police_officer:',
        'Cop',
        'Polis',
        'Poliskvinna',
        ':woman:'
    ],
    '👮{{skin_tone}}': [
        'Polis',
        ':person_police_officer:',
        ':police_officer:',
        'Cop',
        'Polis',
        ':person:'
    ],
    '👨{{skin_tone}}‍🚒': [
        'Man brandman',
        ':man_firefighter:',
        ':firefighter:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🚒': [
        'Kvinna brandman',
        ':woman_firefighter:',
        ':firefighter:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🚒': [
        'Person brandman',
        ':person_firefighter:',
        ':firefighter:',
        ':person:'
    ],
    '👨{{skin_tone}}‍✈️': [
        'Manlig Pilot',
        ':man_pilot:',
        ':pilot:',
        ':man:'
    ],
    '👩{{skin_tone}}‍✈️': [
        'Kvinna Pilot',
        ':woman_pilot:',
        ':pilot:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍✈️': [
        'Person Pilot',
        ':person_pilot:',
        ':pilot:',
        ':person:'
    ],
    '👨{{skin_tone}}‍💻': [
        'Mannen Tekniker',
        ':man_technologist:',
        ':technologist:',
        'Mannen Tekniker',
        ':man:'
    ],
    '👩{{skin_tone}}‍💻': [
        'Kvinna Tekniker',
        ':woman_technologist:',
        ':technologist:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍💻': [
        'Person Tekniker',
        ':person_technologist:',
        ':technologist:',
        ':person:'
    ],
    '👨{{skin_tone}}‍🎤': [
        'Manlig sångare',
        ':man_singer:',
        ':singer:',
        'Bowie',
        'Aladdin Sane',
        ':man:'
    ],
    '👩{{skin_tone}}‍🎤': [
        'Kvinnlig sångare',
        ':woman_singer:',
        ':singer:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🎤': [
        'Person sångare',
        ':person_singer:',
        ':singer:',
        ':person:'
    ],
    '👨{{skin_tone}}‍🎨': [
        'Mannen konstnär',
        ':man_artist:',
        ':artist:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🎨': [
        'Kvinna konstnär',
        ':woman_artist:',
        ':artist:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🎨': [
        'Person Artist',
        ':person_artist:',
        ':artist:',
        ':person:'
    ],
    '👷{{skin_tone}}‍♂️': [
        'Man Construction Worker',
        ':man_contruction_worker:',
        ':contruction_worker:',
        ':man:'
    ],
    '👷{{skin_tone}}‍♀️': [
        'Kvinnlig byggnadsarbetare',
        ':woman_contruction_worker:',
        ':contruction_worker:',
        ':woman:'
    ],
    '👷{{skin_tone}}': [
        'Person Construction Worker',
        ':person_contruction_worker:',
        ':contruction_worker:',
        ':person:'
    ],
    '👨{{skin_tone}}‍🚀': [
        'Man astronauter',
        ':man_astronaut:',
        ':astronaut:',
        'Man Cosmonaut',
        ':man:'
    ],
    '👩{{skin_tone}}‍🚀': [
        'Kvinna astronaut',
        ':woman_astronaut:',
        ':astronaut:',
        'Kvinna Cosmonaut',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🚀': [
        'Person astronauter',
        ':person_astronaut:',
        ':astronaut:',
        'Person Cosmonaut',
        ':person:'
    ],
    '👨{{skin_tone}}‍🔬': [
        'Mannen vetenskapsman',
        ':man_scientist:',
        ':scientist:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🔬': [
        'Kvinna forskare',
        ':woman_scientist:',
        ':scientist:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🔬': [
        'Person forskare',
        ':person_scientist:',
        ':scientist:',
        ':person:'
    ],
    '👨{{skin_tone}}‍💼': [
        'Man Office Worker',
        ':man_office_worker:',
        ':office_worker:',
        'VD',
        'Affärsman',
        ':man:'
    ],
    '👩{{skin_tone}}‍💼': [
        'Kvinna kontorsarbetare',
        ':woman_office_worker:',
        ':office_worker:',
        'Affärskvinna',
        'VD',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍💼': [
        'Person Office Worker',
        ':person_office_worker:',
        ':office_worker:',
        'Företag',
        'VD',
        ':person:'
    ],
    '👨{{skin_tone}}‍🏭': [
        'Man Factory Worker',
        ':man_factory_worker:',
        ':factory_worker:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🏭': [
        'Kvinna fabriksarbetare',
        ':woman_factory_worker:',
        ':factory_worker:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🏭': [
        'Person Factory Worker',
        ':person_factory_worker:',
        ':factory_worker:',
        ':person:'
    ],
    '👨{{skin_tone}}‍🔧': [
        'Man Mekaniker',
        ':man_mechanic:',
        ':mechanic:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🔧': [
        'Kvinna mekaniker',
        ':woman_mechanic:',
        ':mechanic:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🔧': [
        'Person mekaniker',
        ':person_mechanic:',
        ':mechanic:',
        ':person:'
    ],
    '👨{{skin_tone}}‍🍳': [
        'Man Cook',
        ':man_cook:',
        ':cook:',
        'Mannen kock',
        'Manlig kock',
        ':man:'
    ],
    '👩{{skin_tone}}‍🍳': [
        'Kvinna Cook',
        ':woman_cook:',
        ':cook:',
        'Kvinna kock',
        'Kvinnlig kock',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🍳': [
        'Person Cook',
        ':person_cook:',
        ':cook:',
        'Person Kock',
        ':person:'
    ],
    '👨{{skin_tone}}‍🌾': [
        'Mannen bonde',
        ':man_farmer:',
        ':farmer:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🌾': [
        'Kvinna Bonde',
        ':woman_farmer:',
        ':farmer:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🌾': [
        'Person Bonde',
        ':person_farmer:',
        ':farmer:',
        ':person:'
    ],
    '👨{{skin_tone}}‍⚖️': [
        'Man Judge',
        ':man_judge:',
        ':judge:',
        ':man:'
    ],
    '👩‍{{skin_tone}}⚖️': [
        'Woman Judge',
        ':woman_judge:',
        ':judge:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍⚖️': [
        'Person Judge',
        ':person_judge:',
        ':judge:',
        ':person:'
    ],
    '👨{{skin_tone}}‍🏫': [
        'Man Teacher',
        ':man_teacher:',
        ':teacher:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🏫': [
        'Woman Teacher',
        ':woman_teacher:',
        ':teacher:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🏫': [
        'Person Teacher',
        ':person_teacher:',
        ':teacher:',
        ':person:'
    ],
    '👨{{skin_tone}}‍🎓': [
        'Man student',
        ':man_student:',
        ':student:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🎓': [
        'Kvinna student',
        ':woman_student:',
        ':student:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🎓': [
        'Person student',
        ':person_student:',
        ':student:',
        ':person:'
    ],
    '👨{{skin_tone}}‍⚕️': [
        'Man hälsa arbetare',
        ':man_health_worker:',
        ':health_worker:',
        'Manlig läkare',
        'Manlig sjuksköterska',
        ':man:'
    ],
    '👩{{skin_tone}}‍⚕️': [
        'Kvinna Hälsoarbetare',
        ':woman_health_worker:',
        ':health_worker:',
        'Kvinnlig läkare',
        'Kvinnlig sjuksköterska',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍⚕️': [
        'Person Health Worker',
        ':person_health_worker:',
        ':health_worker:',
        'Person Doctor',
        'Person Nurse',
        ':person:'
    ],
    '🤷{{skin_tone}}‍♂️': [
        'Man Shrugging',
        ':man_shrugging:',
        ':shrugging:',
        'idk man',
        'dunno',
        ':man:'
    ],
    '🤷{{skin_tone}}‍♀️': [
        'Kvinna skakar',
        ':woman_shrugging:',
        ':shrugging:',
        'idk kvinna',
        'dunno',
        ':woman:'
    ],
    '🤷{{skin_tone}}': [
        'Person ryckning',
        ':person_shrugging:',
        ':shrugging:',
        'idk person',
        'dunno',
        ':person:'
    ],
    '🤦{{skin_tone}}‍♂️': [
        'Man Facepalming',
        ':man_facepalming:',
        ':facepalming:',
        ':man:'
    ],
    '🤦{{skin_tone}}‍♀️': [
        'Kvinna Facepalming',
        ':woman_facepalming:',
        ':facepalming:',
        ':woman:'
    ],
    '🤦{{skin_tone}}': [
        'Person Facepalming',
        ':person_facepalming:',
        ':facepalming:',
        ':person:'
    ],
    '🙇{{skin_tone}}‍♂️': [
        'Man Bowing',
        ':man_bowing:',
        ':bowing:',
        ':man:'
    ],
    '🙇{{skin_tone}}‍♀️': [
        'Woman Bowing',
        ':woman_bowing:',
        ':bowing:',
        ':woman:'
    ],
    '🙇{{skin_tone}}': [
        'Person böja',
        ':person_bowing:',
        ':bowing:',
        ':person:'
    ],
    '🧏{{skin_tone}}‍♂️': [
        'Döva man',
        ':deaf_man:',
        ':deaf:',
        ':man:'
    ],
    '🧏{{skin_tone}}‍♀️': [
        'Deaf Woman',
        ':deaf_woman:',
        ':deaf:',
        ':woman:'
    ],
    '🧏{{skin_tone}}': [
        'Döva person',
        ':deaf_person:',
        ':deaf:',
        ':person:'
    ],
    '🙋{{skin_tone}}‍♂️': [
        'Man Raising Hand',
        ':man_raising_hand:',
        'Happy Man Raising One Hand',
        ':raising_hand:',
        ':man:'
    ],
    '🙋{{skin_tone}}‍♀️': [
        'Kvinna höjer hand',
        ':woman_raising_hand:',
        'Glad kvinna höja en hand',
        ':raising_hand:',
        ':woman:'
    ],
    '🙋{{skin_tone}}': [
        'Person Uppresande Hand',
        ':person_raising_hand:',
        'Glad person Att höja en hand',
        ':raising_hand:',
        ':person:'
    ],
    '💁{{skin_tone}}‍♂️': [
        'Man tippa hand',
        ':man_tipping_hand:',
        'Information Desk Man',
        ':tipping_hand:',
        ':man:'
    ],
    '💁{{skin_tone}}‍♀️': [
        'Kvinna tippande hand',
        ':woman_tipping_hand:',
        'Information Desk Kvinna',
        ':tipping_hand:',
        ':woman:'
    ],
    '💁{{skin_tone}}': [
        'Person tippa hand',
        ':person_tipping_hand:',
        'Personen i informationsdisken',
        ':tipping_hand:',
        ':person:'
    ],
    '🙆{{skin_tone}}‍♂️': [
        'Man Gesturing OK',
        ':man_gesturing_ok:',
        ':gesturing_ok:',
        ':man:'
    ],
    '🙆{{skin_tone}}‍♀️': [
        'Kvinna Gest OK',
        ':woman_gesturing_ok:',
        ':gesturing_ok:',
        ':woman:'
    ],
    '🙆{{skin_tone}}': [
        'Person Gest OK',
        ':person_gesturing_ok:',
        ':gesturing_ok:',
        ':person:'
    ],
    '🙅{{skin_tone}}‍♂️': [
        'Man Gesturing Nej',
        ':man_gesturing_no:',
        ':gesturing_no:',
        ':man:'
    ],
    '🙅{{skin_tone}}‍♀️': [
        'Kvinna Gest Nej',
        ':woman_gesturing_no:',
        ':gesturing_no:',
        ':woman:'
    ],
    '🙅{{skin_tone}}': [
        'Person Gest Nej',
        ':person_gesturing_no:',
        ':gesturing_no:',
        ':person:'
    ],
    '🙎{{skin_tone}}‍♂️': [
        'Man Pouting',
        ':man_pouting:',
        ':pouting:',
        ':man:'
    ],
    '🙎{{skin_tone}}‍♀️': [
        'Woman Pouting',
        ':woman_pouting:',
        ':pouting:',
        ':woman:'
    ],
    '🙎{{skin_tone}}': [
        'Person Pouting',
        ':person_pouting:',
        ':pouting:',
        ':person:'
    ],
    '🙍{{skin_tone}}‍♂️': [
        'Man Frowning',
        ':man_frowining:',
        ':frowining:',
        ':man:'
    ],
    '🙍{{skin_tone}}‍♀️': [
        'Kvinna rynkar',
        ':woman_frowining:',
        ':frowining:',
        ':woman:'
    ],
    '🙍{{skin_tone}}': [
        'Person Frowning',
        ':person_frowining:',
        ':frowining:',
        ':person:'
    ],
    '🧟‍♂️': [
        'Man Zombie',
        ':man_zombie:',
        ':zombie:',
        ':man:'
    ],
    '🧟‍♀️': [
        'Woman Zombie',
        ':woman_zombie:',
        ':zombie:',
        ':woman:'
    ],
    '🧟': [
        'Person Zombie',
        ':person_zombie:',
        ':zombie:',
        ':person:'
    ],
    '🚶{{skin_tone}}‍♂️': [
        'Man Promenader',
        ':man_walking:',
        ':walking:',
        ':man:'
    ],
    '🚶{{skin_tone}}‍♀️': [
        'Kvinna Promenader',
        ':woman_walking:',
        ':walking:',
        ':woman:'
    ],
    '🚶{{skin_tone}}': [
        'Person Promenader',
        ':person_walking:',
        ':walking:',
        ':person:'
    ],
    '🧍{{skin_tone}}‍♂️': [
        'Man stående',
        ':man_standing:',
        ':standing:',
        ':man:'
    ],
    '🧍{{skin_tone}}‍♀️': [
        'Kvinna stående',
        ':woman_standing:',
        ':standing:',
        ':woman:'
    ],
    '🧍{{skin_tone}}': [
        'Person Stående',
        ':person_standing:',
        ':standing:',
        ':person:'
    ],
    '🧎{{skin_tone}}‍♂️': [
        'Man knä',
        ':man_kneeling:',
        ':kneeling:',
        ':man:'
    ],
    '🧎{{skin_tone}}‍♀️': [
        'Knäbbning av kvinna',
        ':woman_kneeling:',
        ':kneeling:',
        ':woman:'
    ],
    '🧎{{skin_tone}}': [
        'Person Kneelink',
        ':person_kneeling:',
        ':kneeling:',
        ':person:'
    ],
    '👨{{skin_tone}}‍🦯': [
        'Man med vit sockerrör',
        ':man_with_white_cane:',
        ':white_cane:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🦯': [
        'Kvinna med vit sockerrör',
        ':woman_with_white_cane:',
        ':white_cane:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🦯': [
        'Person med vit sockerrör',
        ':person_with_white_cane:',
        ':white_cane:',
        ':person:'
    ],
    '👨{{skin_tone}}‍🦼': [
        'Man i Motorized Rullstol',
        ':man_in_motorized_wheelchair:',
        ':motorized_wheelchair:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🦼': [
        'Kvinna i Motorized Rullstol',
        ':woman_in_motorized_wheelchair:',
        ':motorized_wheelchair:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🦼': [
        'Person i Motorized Rullstol',
        ':person_in_motorized_wheelchair:',
        ':motorized_wheelchair:',
        ':person:'
    ],
    '👨{{skin_tone}}‍🦽': [
        'Man i manuell rullstol',
        ':man_manual_wheelchair:',
        ':manual_wheelchair:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🦽': [
        'Kvinna i manuell rullstol',
        ':woman_manual_wheelchair:',
        ':manual_wheelchair:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🦽': [
        'Person i manuell rullstol',
        ':person_manual_wheelchair:',
        ':manual_wheelchair:',
        ':person:'
    ],
    '👯‍♂️': [
        'Män med kaninöron',
        ':men_with_bunny_hears:',
        ':bunny_ears:',
        ':man:'
    ],
    '👯‍♀️': [
        'Kvinnor med kaninöron',
        ':women_with_bunny_hears:',
        ':bunny_ears:',
        ':woman:'
    ],
    '👯': [
        'Personer med kaninöron',
        ':people_with_bunny_hears:',
        ':bunny_ears:',
        ':person:'
    ],
    '🕴️{{skin_tone}}': [
        'Person i Kostym Leviterande',
        ':person_in_suit_levitating:',
        'Hovering av man',
        'Ohyfsad pojke',
        'Walt Jabsco',
        'Man i Business Suit Levitating',
        ':person:'
    ],
    '🧖{{skin_tone}}‍♂️': [
        'Man i Steamy Room',
        ':man_in_steamy_room:',
        ':steamy_room:',
        'Man i Bastu',
        ':man:'
    ],
    '🧖{{skin_tone}}‍♀️': [
        'Kvinna i ångande rum',
        ':woman_in_steamy_room:',
        ':steamy_room:',
        'Kvinna i Bastu',
        ':woman:'
    ],
    '🧖{{skin_tone}}': [
        'Person i Steamy Room',
        ':person_in_steamy_room:',
        ':steamy_room:',
        'Person i Bastu',
        ':person:'
    ],
    '👫{{skin_tone}}': [
        'Kvinna och man håller händer',
        ':woman_and_man_holding_hands:',
        ':holding_hands:',
        'Heterosexuell Par',
        'Rak Par',
        'Man och kvinna håller händer',
        ':woman:'
    ],
    '👬{{skin_tone}}': [
        'Män som håller händer',
        ':holding_hands:',
        ':men_holding_hands:',
        'Gay Par',
        'Två Män som håller händer',
        ':man:'
    ],
    '👭{{skin_tone}}': [
        'Kvinnor som håller händer',
        ':holding_hands:',
        ':women_holding_hands:',
        'Lesbiskt Par',
        'Två kvinnor som håller händer',
        ':woman:'
    ],
    '🧑‍🤝‍🧑': [
        'Personer som håller händer',
        ':holding_hands:',
        ':people_holding_hands:',
        'Två personer som håller händer',
        'Inkluderande kön par',
        'Neutral Könspar',
        'Paret Nonconforming kön',
        ':person:'
    ],
    '👨‍👩‍👦': [
        'Familj med mor, far och son',
        ':family_with_mother_father_and_son:',
        'Familj: Man, Kvinna, Pojke'
    ],
    '👨‍👩‍👧': [
        'Familj med mamma, far och dotter',
        ':family_with_mother_father_and_daughter:',
        'Familj: Man, Kvinna, Flicka'
    ],
    '👨‍👩‍👧‍👦': [
        'Familj med mor, fader, son och dotter',
        ':family_with_mother_father_son_and_daughter:',
        'Familj: Man, Kvinna, Flikt, Pojke'
    ],
    '👨‍👩‍👦‍👦': [
        'Familj med mor, far och två söner',
        ':family_with_mother_father_and_two_sons:',
        'Familj: Man, Kvinna, Pojke, Pojke'
    ],
    '👨‍👩‍👧‍👧': [
        'Familj med mamma, far och två döttrar',
        ':family_with_mother_father_and_two_daughters:',
        'Familj: Man, Kvinna, Flicka'
    ],
    '👨‍👨‍👦': [
        'Familj med två fäder och son',
        ':family_with_two_fathers_and_son:',
        'Familj: Man, Man, Pojke',
        ':man:'
    ],
    '👨‍👨‍👧': [
        'Familj med två fäder och dotter',
        ':family_with_two_fathers_and_daughter:',
        'Familj: Man, Man, Flicka',
        ':man:'
    ],
    '👨‍👨‍👧‍👦': [
        'Familj med två fäder, Son och dotter',
        ':family_with_two_fathers_son_and_daughter:',
        'Familj: Man, Man, Flikt, Pojke',
        ':man:'
    ],
    '👨‍👨‍👦‍👦': [
        'Familj med två fäder och två söner',
        ':family_with_two_fathers_and_two_sons:',
        'Familj: Man, Man, Pojke, Pojke',
        ':man:'
    ],
    '👨‍👨‍👧‍👧': [
        'Familj med två fäder och två döttrar',
        ':family_with_two_fathers_and_two_daughters:',
        'Familj: Man, Man, Flikt, Flicka',
        ':man:'
    ],
    '👩‍👩‍👦': [
        'Familj med två mödrar och son',
        ':family_with_two_mothers_and_son:',
        'Familj: Kvinna, Kvinna, Pojke',
        ':woman:'
    ],
    '👩‍👩‍👧': [
        'Familj med två mödrar och dotter',
        ':family_with_two_mothers_and_daughter:',
        'Familj: Kvinna, Kvinna, Flicka',
        ':woman:'
    ],
    '👩‍👩‍👧‍👦': [
        'Familj med två mödrar, son och dotter',
        ':family_with_two_mothers_son_and_daughter:',
        'Familj: Kvinna, Kvinna, flicka, pojke',
        ':woman:'
    ],
    '👩‍👩‍👦‍👦': [
        'Familj med två mödrar och två söner',
        ':family_with_two_mothers_and_two_sons:',
        'Familj: Kvinna, Kvinna, Pojk, Pojke',
        ':woman:'
    ],
    '👩‍👩‍👧‍👧': [
        'Familj med två mödrar och två döttrar',
        ':family_with_two_mothers_and_two_daughters:',
        'Familj: Kvinna, Kvinna, Flicka',
        ':woman:'
    ],
    '👨‍👦': [
        'Familj med far och son',
        ':family_with_father_and_son:',
        'Familj: Man, Pojke',
        ':man:'
    ],
    '👨‍👧': [
        'Familj med far och dotter',
        ':family_with_father_and_daughter:',
        'Familj: Man, Flicka',
        ':man:'
    ],
    '👨‍👦‍👦': [
        'Familj med far och två söner',
        ':family_with_father_and_two_sons:',
        'Familj: Man, pojke, pojke',
        ':man:'
    ],
    '👨‍👧‍👦': [
        'Familj med Fader, Son och Dotter',
        ':family_with_father_son_and_daughter:',
        'Familj: Man, flicka, pojke',
        ':man:'
    ],
    '👨‍👧‍👧': [
        'Familj med far och två döttrar',
        ':family_with_father_and_two_daughters:',
        'Familj: Man, flicka, flicka',
        ':man:'
    ],
    '👩‍👦': [
        'Familj med mor och son',
        ':family_with_mother_and_son:',
        'Familj: Kvinna, Pojke',
        ':woman:'
    ],
    '👩‍👧': [
        'Familj med mor och dotter',
        ':family_with_mother_and_daughter:',
        'Familj: Kvinna, Flicka',
        ':woman:'
    ],
    '👩‍👦‍👦': [
        'Familj med mor och två söner',
        ':family_with_mother_and_two_sons:',
        'Familj: Kvinna, pojke, pojke',
        ':woman:'
    ],
    '👩‍👧‍👦': [
        'Familj med mor, son och dotter',
        ':family_with_mother_son_and_daughter:',
        'Familj: Kvinna, flicka, pojke',
        ':woman:'
    ],
    '👩‍👧‍👧': [
        'Familj med mor och två döttrar',
        ':family_with_mother_and_two_daughters:',
        'Familj: Kvinna, flicka, flicka',
        ':woman:'
    ],
    '💑{{skin_tone}}': [
        'Par med hjärta',
        ':couple_with_heart:',
        'Par i kärlek',
        'Kärleksfullt par',
        'Neutral Könspar',
        ':person:'
    ],
    '👩‍❤️‍👨': [
        'Man och kvinna med hjärta',
        ':man_and_woman_with_heart:',
        'Par i kärlek',
        'Kärleksfullt par',
        'Par med hjärta'
    ],
    '👨‍❤️‍👨': [
        'Två män med hjärta',
        ':two_men_with_heart:',
        'Par med hjärtat: Man, Man',
        ':man:'
    ],
    '👩‍❤️‍👩': [
        'Två kvinnor med hjärta',
        ':two_women_with_heart:',
        'Par med hjärta: Kvinna, kvinna',
        ':woman:'
    ],
    '💏{{skin_tone}}': [
        'Par kysser',
        ':couple_kissing:',
        'Kyss',
        'Könsneutrala par kysser',
        ':person:'
    ],
    '👩‍❤️‍💋‍👨': [
        'Man och kvinna kysser',
        ':man_and_woman_kissing:'
    ],
    '👨‍❤️‍💋‍👨': [
        'Två Män kysser',
        ':two_men_kissing:',
        'Man och man kysser',
        ':man:'
    ],
    '👩‍❤️‍💋‍👩': [
        'Två kvinnor kysser',
        ':two_women_kissing:',
        'Kvinna och kvinna kysser',
        ':woman:'
    ],
    '💆{{skin_tone}}‍♂️': [
        'Man få huvud massage',
        ':man_getting_head_massage:',
        ':getting_head_massage:',
        ':man:'
    ],
    '💆{{skin_tone}}‍♀️': [
        'Kvinna få huvud massage',
        ':woman_getting_head_massage:',
        ':getting_head_massage:',
        ':woman:'
    ],
    '💆{{skin_tone}}': [
        'Person få huvud massage',
        ':person_getting_head_massage:',
        ':getting_head_massage:',
        ':person:'
    ],
    '💇{{skin_tone}}‍♂️': [
        'Man att få frisyr',
        ':man_getting_haircut:',
        ':getting_haircut:',
        ':man:'
    ],
    '💇{{skin_tone}}‍♀️': [
        'Kvinna få hårklippning',
        ':woman_getting_haircut:',
        ':getting_haircut:',
        ':woman:'
    ],
    '💇{{skin_tone}}': [
        'Person få hårklippning',
        ':person_getting_haircut:',
        ':getting_haircut:',
        ':person:'
    ],
    '🛌{{skin_tone}}': [
        'Övernattning',
        'trött',
        ':sleeping_accommodation:',
        'Person i sängen',
        'Person sovande'
    ],
    '🛀{{skin_tone}}': [
        'Person tar bad',
        'Badplats',
        ':bath:',
        ':person_taking_bath:',
        'Hett bad',
        'Person att ta ett bad',
        'Badkar',
        'Dusch',
        'Tvål',
        'Tidy',
        'Clean',
        'Scrub'
    ],
    '🧌': [
        'Troll',
        ':troll:'
    ],
    '👺': [
        'Goblin',
        ':goblin:',
        'Lång näsa ansikte',
        'Röd mask',
        'Tengu',
        'Japanska Goblin'
    ]
};
/*animals*/
emojis_language[lang][4] = {
    '😺': [
        'Grinning Katt',
        ':happy_cat:',
        ':smiling_cat:',
        '::):',
        'Glad katt',
        'Leende katt',
        'Glad kattansikte',
        'Leende kattansikte med öppen mun'
    ],
    '😸': [
        'Slipning Katt med leende ögon',
        ':grinning_cat:',
        '::D:',
        'Grinning Katt',
        'Glad katt',
        'Grinning kattansikte'
    ],
    '😹': [
        'Katt med tårar av glädje',
        ':laughing_cat:',
        '::):',
        'Glada tårar Katt',
        'Skrattad katt'
    ],
    '😻': [
        'Leende katt med hjärta-ögon',
        ':heart_eyes_cat:',
        ':*.*:',
        'Hjärta Ögon Katt',
        'Kärleksfull katt',
        'Leende kattansikte med hjärtformade ögon'
    ],
    '😼': [
        'Katt med Wry Smile',
        ':cat_with_wry_smile:',
        'Smirking Katt',
        'Smirking Cat Face',
        'Katt ansikte med Wry Smile'
    ],
    '😽': [
        'Kyssar katt',
        ':kissing_cat:',
        '::*:',
        'Kissar kattansikte',
        'Kyssar Katt Ansikte med stängda ögon'
    ],
    '🙀': [
        'Bärbar katt',
        ':weary_cat:',
        '::O:',
        'Skrämd Katt',
        'Skrikande katt',
        'Katt ansikte skriker i skräck',
        'Berikat kattansikte'
    ],
    '😿': [
        'Gråter Katt',
        ':crying_cat:',
        '::(:',
        'Ledsen katt',
        'Gråtande kattansikte'
    ],
    '😾': [
        'Pouting katt',
        ':pouting_cat:',
        'Grumpy Cat',
        'Pouting kattansikte'
    ],
    '🙈': [
        'See-No-Ondska Apa',
        'Apa',
        ':see-no-evil_mokey:',
        ':see_no_evil_mokey:',
        ':monkey:',
        'Mizaru',
        'Monkey omslutande ögon'
    ],
    '🙉': [
        'Hear-No-Ond apa',
        'Apa',
        ':hear-no-evil_monkey:',
        ':hear_no_evil_monkey:',
        ':monkey:',
        'Kikazaru',
        'Apa omslutande öron'
    ],
    '🙊': [
        'Tala-Nej-Ond apa',
        'Apa',
        ':speak-no-evil_monkey:',
        ':speak_no_evil_monkey:',
        ':monkey:',
        'Iwazaru',
        'Apa Täckande Mun',
        'Inget tal'
    ],
    '🐵': [
        'Monkey ansikte',
        ':monkey_face:',
        'Apa',
        'Apa Huvud'
    ],
    '🐒': [
        'Apa',
        ':monkey:',
        'Glansfull apa'
    ],
    '🦍': [
        'Gorilla',
        ':gorilla:'
    ],
    '🐶': [
        'Hund ansikte',
        ':dog_face:',
        'Hund',
        'Valp'
    ],
    '🐕': [
        'Hund',
        ':dog:',
        'Doggo',
        'Akita Inu'
    ],
    '🦮': [
        'Ser Ögonhund',
        ':seeing_eye_dog:',
        'Guide Hund'
    ],
    '🐕‍🦺': [
        'Tjänstens Hund',
        ':service_dog:'
    ],
    '🐩': [
        'Poodle',
        ':poodle:',
        'Hund',
        'Miniatyr Poodle',
        'Standard Poodle',
        'Leksak Poodle'
    ],
    '🐺': [
        'Varg',
        ':wolf:',
        'Vargansikte',
        ':gray:',
        ':grey:'
    ],
    '🦊': [
        'Räv',
        ':fox:',
        'Räv ansikte',
        ':orange:'
    ],
    '🦝': [
        'tvättbjörn',
        ':raccoon:'
    ],
    '🐱': [
        'Katt ansikte',
        ':cat_face:',
        ':3',
        'Kattunge',
        'Kitty'
    ],
    '🐈': [
        'Katt',
        ':cat:',
        'Inhemsk katt',
        'Feline',
        'Hus'
    ],
    '🐈‍⬛': [
        'Svart katt',
        ':black_cat:',
        ':black:'
    ],
    '🦁': [
        'Lejon',
        ':lion:',
        'Lejonansikte'
    ],
    '🐯': [
        'Tiger ansikte',
        ':tiger_face:',
        'Söt Tiger'
    ],
    '🐅': [
        'Tiger',
        ':tiger:',
        'Bengal Tiger'
    ],
    '🐆': [
        'Leopard',
        ':leopard:',
        'Afrikansk Leopard',
        'Jaguar'
    ],
    '🐴': [
        'Hästens ansikte',
        ':horse_face:',
        'Hästhuvud'
    ],
    '🐎': [
        'Häst',
        ':horse:',
        'Gallring häst',
        'Racinghäst'
    ],
    '🦄': [
        'Enhörning',
        ':unicorn:',
        'Enhörningsyta'
    ],
    '🦓': [
        'Zebra',
        ':zebra:',
        'Zebra Ansikte',
        ':white:',
        ':black:'
    ],
    '🦌': [
        'Rådjur',
        ':deer:',
        'Buck',
        'Ren',
        'Stag'
    ],
    '🐮': [
        'Ko ansikte',
        ':cow_face:',
        'Ko',
        'Glad Ko'
    ],
    '🐂': [
        'Ox',
        ':ox:',
        'Tjurar',
        'Bullock',
        'Oxen',
        'Styrare'
    ],
    '🐃': [
        'Vatten Buffalo',
        ':water_buffalo:',
        'Buffel',
        'Vatten för hushållsbruk Buffalo'
    ],
    '🐄': [
        'Ko',
        ':cow:',
        'Mejeri Ko'
    ],
    '🐷': [
        'Gris ansikte',
        ':pig_fase:',
        'Gris',
        'Gris Huvud',
        ':pink:'
    ],
    '🐖': [
        'Gris',
        ':pig:',
        'Hund',
        'Sow',
        ':pink:'
    ],
    '🐗': [
        'Vildsvin',
        ':boar:',
        'Warthog',
        'Vildsvin',
        'Vild gris'
    ],
    '🐽': [
        'Gris näsa',
        ':pig_nose:'
    ],
    '🐏': [
        'Ram',
        ':ram:',
        'Får'
    ],
    '🐑': [
        'Ewe',
        ':ewe:',
        'Lamb',
        'Får'
    ],
    '🐐': [
        'Gock',
        ':goat:'
    ],
    '🐪': [
        'Kamel',
        ':camel:',
        'Arabiska Camel',
        'Dromedary Kamel',
        'One-Bump kamel'
    ],
    '🐫': [
        'Två-hump kamel',
        ':two-hump_camel:',
        ':two_hump_camel:',
        'Asiatisk kamel',
        'Bactrian kamel'
    ],
    '🦙': [
        'Llama',
        ':llama:',
        'Alpaca'
    ],
    '🦒': [
        'Giraffe',
        ':giraffe:',
        'Giraffe Face'
    ],
    '🐘': [
        'Elefant',
        ':elephant:'
    ],
    '🦏': [
        'Rhinoceros',
        ':rhinoceros:',
        'Rhino'
    ],
    '🦛': [
        'Hippopotamus',
        ':hippopotamus:',
        'Hippo'
    ],
    '🐭': [
        'Mus Ansikte',
        ':mouse_face:',
        'Mus'
    ],
    '🐁': [
        'Mus',
        ':mouse:',
        'Drummus',
        'Gnagare',
        'Möss'
    ],
    '🐀': [
        'Råtta',
        ':rat:',
        'Gnagare'
    ],
    '🐹': [
        'Hamster',
        ':hamster:',
        'Hamster ansikte'
    ],
    '🐰': [
        'Kanin ansikte',
        ':rabbit_face:',
        'Påskharen'
    ],
    '🐇': [
        'Kanin',
        'Bunny',
        ':rabbit:',
        'Kanin Kanin'
    ],
    '🐿️': [
        'Chipmunk',
        ':chipmunk:',
        'Ekorre'
    ],
    '🦔': [
        'Igelkott',
        ':hedgehog:'
    ],
    '🦇': [
        'Fladdermus',
        ':bat:',
        'Batman',
        ':black:'
    ],
    '🐻': [
        'Björn',
        ':bear:',
        'Björnansikte',
        'Nallebjörn',
        ':brown:'
    ],
    '🐨': [
        'Koala',
        ':koala:',
        'Koala ansikte'
    ],
    '🐼': [
        'Panda',
        ':panda:',
        'Panda ansikte'
    ],
    '🦘': [
        'Kangaroo',
        ':kangaroo:',
        'Roo'
    ],
    '🦡': [
        'Grävling',
        ':badger:'
    ],
    '🦃': [
        'Turkiet',
        ':turkey:',
        'Thanksgiving Turkiet',
        'Vilda Turkiet'
    ],
    '🐔': [
        'Kyckling',
        ':chicken:',
        'Hen'
    ],
    '🐓': [
        'Tuppen',
        ':cock:',
        'Rooster',
        'Cockerel'
    ],
    '🐣': [
        'Hattar Chick',
        ':hatching_chick:',
        'Baby kyckling',
        'Kyckling Kyckling',
        ':yellow:'
    ],
    '🐤': [
        'Bäbis Chick',
        ':baby_chick:',
        'Gul fågel',
        ':yellow:'
    ],
    '🐥': [
        'Front-Facing Baby Chick',
        ':front_baby_chick:',
        'Bäbis Chick',
        'Stående Kock',
        ':yellow:'
    ],
    '🐦': [
        'Fågel',
        ':bird:'
    ],
    '🐧': [
        'Penguin',
        ':penguin:'
    ],
    '🕊️': [
        'Duva',
        ':Dove:',
        'Dove av fred',
        ':white:'
    ],
    '🦅': [
        'Örn',
        ':Eagle:',
        'Skallig örn'
    ],
    '🦆': [
        'Anka',
        ':Duck:'
    ],
    '🦢': [
        'Svanen',
        ':swan:',
        ':white:'
    ],
    '🦉': [
        'Uggla',
        ':owl:',
        ':brown:'
    ],
    '🦚': [
        'Påfågel',
        ':peacock:'
    ],
    '🦜': [
        'Papegoja',
        ':parrot:'
    ],
    '🐸': [
        'Groda',
        ':frog:',
        'Padda',
        'Groda ansikte',
        ':green:'
    ],
    '🐊': [
        'Krokodil',
        ':crocodile:',
        'Alligator',
        'Krok',
        ':green:'
    ],
    '🐢': [
        'Sköldpadda',
        ':turtle:',
        'Tortoise',
        ':green:'
    ],
    '🦎': [
        'Ödla',
        ':lizard:',
        'Gecko',
        ':green:'
    ],
    '🐍': [
        'Orm',
        ':snake:',
        'Orm'
    ],
    '🐲': [
        'Drak Ansikte',
        ':dragon_face:',
        'Drake Huvud'
    ],
    '🐉': [
        'Drake',
        ':dragon:'
    ],
    '🦕': [
        'Sauropod',
        ':sauropod:',
        'Brachiosaurus',
        'Brontosaurus',
        'Dinosaur'
    ],
    '🦖': [
        'T-Rex',
        ':t-rex:',
        ':t_rex:',
        'Tyrannosaurus Rex'
    ],
    '🐳': [
        'Spottar val',
        ':spouting_whale:',
        'Söt val'
    ],
    '🐋': [
        'Val',
        ':whale:'
    ],
    '🐬': [
        'Delfin',
        ':dolphin:'
    ],
    '🐟': [
        'Fisk',
        ':fish:',
        'Sötvattenfisk'
    ],
    '🐠': [
        'Tropisk fisk',
        ':tropical_fish:',
        'Fisk',
        'Gul-blå fisk'
    ],
    '🐡': [
        'Blowfish',
        ':blowfish:',
        'Fugu',
        'Pufferfish'
    ],
    '🦈': [
        'Hajen',
        ':shark:',
        'Stor vit haj'
    ],
    '🐙': [
        'Bläckfisk',
        ':octopus:'
    ],
    '🐚': [
        'Spiral skal',
        ':spiral_shell:',
        'Seashell',
        'Skal'
    ],
    '🐌': [
        'Snigel',
        ':snail:',
        'Snigel',
        'Trädgård snigel'
    ],
    '🦋': [
        'Fjäril',
        ':butterfly:'
    ],
    '🐛': [
        'Bugg',
        ':bug:',
        'Caterpillar',
        'Insekt'
    ],
    '🐜': [
        'Ant',
        ':ant:',
        'Bugg',
        'Insekt'
    ],
    '🐝': [
        'Honungsbin',
        ':honeybee:',
        'Bi',
        'Bumblebee',
        ':yellow:',
        ':black:'
    ],
    '🐞': [
        'Lady skalbagge',
        ':lady_beetle:',
        'Ladybird',
        'Ladybug',
        'Bugg'
    ],
    '🦗': [
        'Cricket',
        ':cricket:',
        'Gräshoppa'
    ],
    '🕷️': [
        'Spindel',
        ':spider:'
    ],
    '🦂': [
        'Skorpion',
        ':scorpion:'
    ],
    '🦟': [
        'Myggor',
        ':mosquito:',
        ':black:'
    ],
    '🦀': [
        'Krabba',
        ':crab:',
        ':red:'
    ],
    '🦞': [
        'Hummer',
        ':lobster:'
    ],
    '🦐': [
        'Räkor',
        ':shrimp:',
        'Prawn'
    ],
    '🦑': [
        'Bläckfisk',
        ':squid:'
    ],
    '🦧': [
        'Orangutan',
        ':orangutan:'
    ],
    '🦥': [
        'Sakta',
        ':sloth:'
    ],
    '🦦': [
        'Otter',
        ':otter:'
    ],
    '🦨': [
        'Skunk',
        ':skunk:'
    ],
    '🦬': [
        'Bison',
        ':bison:'
    ],
    '🦣': [
        'Mammut',
        ':mammoth:',
        ':brown:'
    ],
    '🦫': [
        'Bäver',
        ':beaver:'
    ],
    '🐻‍❄️': [
        'Polar björn',
        ':polar_bear:',
        ':white:'
    ],
    '🦤': [
        'Dodo',
        ':dodo:'
    ],
    '🦭': [
        'Tätning',
        ':seal:'
    ],
    '🪲': [
        'Skalbagge',
        ':beetle:'
    ],
    '🪳': [
        'Kackerlacka',
        ':cockroach:'
    ],
    '🪰': [
        'Flyg',
        ':fly:'
    ],
    '🪱': [
        'Masken',
        ':worm:'
    ],
    '🦩': [
        'Flamingo',
        ':flamingo:'
    ],
    '🪹': [
        'Tomt bo',
        ':empty_nest:',
        'Fåglar',
        'Hem'
    ],
    '🪺': [
        'Bäste med ägg',
        ':nest_with_eggs:',
        'Fåglar',
        'Hem'
    ]
};
/*symbols*/
emojis_language[lang][5] = {
    '💘': [
        'Hjärta med Pil',
        ':heart_with_arrow:',
        'Cupid pil',
        'Lovestruck',
        ':pink:'
    ],
    '💝': [
        'Hjärta med band',
        ':heart_with_ribbon:',
        'Choklad låda',
        'Gåva Låda',
        'Gåva hjärta',
        ':red:'
    ],
    '💖': [
        'Sparkling Heart',
        ':sparkling_heart:',
        'Gnistra Hjärta',
        'Gnistrande Hjärta',
        'Stjärnor hjärta',
        ':pink:'
    ],
    '💗': [
        'Växande hjärta',
        ':growing_heart:',
        'Multipla hjärtan',
        'Trippel hjärta',
        ':pink:'
    ],
    '💓': [
        'Slå hjärta',
        ':beating_heart:',
        'Hjärtlarm',
        'Heartbeat',
        'Wifi hjärta',
        ':pink:'
    ],
    '💞': [
        'Roterande hjärtan',
        ':revolving_hearts:',
        'Två hjärtan',
        ':pink:'
    ],
    '💕': [
        'Två hjärtan',
        ':two_hearts:',
        'Små hjärtan',
        'Två rosa hjärtan',
        ':pink:'
    ],
    '💟': [
        'Hjärtdekoration',
        ':heart_decoration:',
        ':purple:'
    ],
    '❣️': [
        'Utropande av hjärta',
        ':heart_exclamation:',
        'Hjärta ovanför punkt',
        'Rött hjärta som utropstecken',
        'Tung hjärta utropstecken prydnad',
        ':red:'
    ],
    '💔': [
        'Trasigt hjärta',
        ':broken_heart:',
        'Bryta hjärtat',
        'Brokenhearted',
        'Hjärtat trasigt',
        ':red:'
    ],
    '❤️‍🩹': [
        'Lagning hjärta',
        ':mending_heart:',
        'Bandurerat hjärta',
        'Helande hjärta',
        'Obrutet hjärta',
        ':red:'
    ],
    '❤️‍🔥': [
        'Hjärta på Eld',
        ':heart_on_fire:',
        ':red:'
    ],
    '❤️': [
        'Jag älskar dig',
        ':red_heart:',
        'Rött hjärta',
        'Hjärta',
        'Kärlek Hjärta',
        'Rött hjärta',
        ':red:'
    ],
    '🧡': [
        'Orange hjärta',
        ':orange_heart:',
        'Jag älskar dig',
        ':orange:'
    ],
    '💛': [
        'Gul hjärta',
        ':yellow_heart:',
        '#1 BF Snapchat',
        'Guld Hjärta',
        'Jag älskar dig',
        ':yellow:'
    ],
    '💚': [
        'Grönt hjärta',
        ':green_heart:',
        'Svartsjukt hjärta',
        'Jag älskar dig',
        ':green:'
    ],
    '💙': [
        'Blått hjärta',
        ':blue_heart:',
        'Jag älskar dig',
        ':blue:'
    ],
    '💜': [
        'Lila Hjärta',
        ':purple_heart:',
        'Jag älskar dig',
        ':purple:'
    ],
    '🖤': [
        'Svart hjärta',
        ':black_heart:',
        'Mörkt hjärta',
        'Jag älskar dig',
        ':black:'
    ],
    '🤍': [
        'Vitt hjärta',
        ':white_heart:',
        'Jag älskar dig',
        ':white:'
    ],
    '🤎': [
        'Brunt hjärta',
        ':brown_heart:',
        'Jag älskar dig',
        ':brown:'
    ],
    //"🩷": ["Pink Heart", ":pink_heart:", "I Love You", ":pink:"],
    //"🩵": ["Light Blue Heart", ":lightblue_heart:", "I Love You", ":blue:"],
    //"🩶": ["Grey Heart","Gray Heart", ":grey_heart:",":gray_heart:", "I Love You", ":gray:", ":grey:"],
    '💯': [
        'Hundra poäng',
        ':hundred_points:',
        '100',
        '%',
        'Behåll den 100',
        'Perfekt Poäng',
        'Hundra punkter Symbol'
    ],
    '💬': [
        'Talballong',
        ':speech_balloon:',
        'Chatt Bubble',
        'Talbubbla',
        ':white:'
    ],
    '💭': [
        'Tänkte ballong',
        ':thought_balloon:',
        'Tänker bubbla',
        'Tänkte bubbla',
        ':white:'
    ],
    '💤': [
        'Zzz',
        ':zzz:',
        'Sängtid',
        'Tråkigt',
        'Sov',
        'Viloläge',
        'Sovande symbol'
    ],
    '♠': [
        'Spade Kostym',
        ':spade_suit:',
        'Spades',
        'Black Spade Suit'
    ],
    '♥': [
        'Hjärtdräkt',
        ':heart_suit:',
        'Kort med hjärta',
        'Hjärtan',
        'Svart Hjärtdräkt'
    ],
    '♦': [
        'Diamant Kostym',
        ':diamond_suit:',
        'Diamanter',
        'Svart Diamant Kostym'
    ],
    '♣': [
        'Klubb Kostym',
        ':club_suit:',
        'Klubbar',
        'Svart Club Kostym'
    ],
    '🏧': [
        'ATM tecken',
        ':atm_sign:',
        'Bankomat',
        'Automatiserad Telleer-maskin',
        ':blue:'
    ],
    '🎧': [
        'Hörlurar',
        ':headphone:',
        'Hörlurar',
        'iPod',
        'Hörlurar'
    ],
    '🎵': [
        'Musikalisk anteckning',
        ':musical_note:',
        'Beamed par av åttonde anteckningar',
        'Beamed par kvavers',
        'Musik anteckning'
    ],
    '🎶': [
        'Musikaliska anteckningar',
        ':musical_notes:',
        'Musik',
        'Musikanteckningar',
        'Sjunger',
        'Flera musikaliska anteckningar'
    ],
    '🔔': [
        'Ringklocka',
        ':bell:',
        'Frihetsklocka',
        'Ringer',
        'Bröllopsklocka',
        ':yellow:'
    ],
    '🔕': [
        'Ringklocka med Slash',
        ':bell_with_slash:',
        'Aviseringar',
        'Ringsignal inaktiverad',
        'Tystad klocka',
        'Klockan med avbokning Stroke',
        ':yellow:'
    ],
    '🔈': [
        'Högtalare låg volym',
        ':speaker_low_volum:',
        'Volym',
        'Högtalare'
    ],
    '🔉': [
        'Högtalare Medium Volym',
        ':speaker_medium_volume:',
        'Minska volymen',
        'Högtalare med medium volym',
        'Högtalare med en ljudvåg'
    ],
    '🔊': [
        'Högtalare med hög volym',
        ':speaker_high_volume:',
        'Öka volymen',
        'Högtalare med tre ljudvågor'
    ],
    '🔇': [
        'Tystad högtalare',
        ':muted_speaker:',
        'Tysta volym',
        'Högtalare med avbokningsstation'
    ],
    '📢': [
        'Loudspeaker',
        ':loudspeaker:',
        'Meddelande',
        'PA-system',
        'Offentlig adress Högtalare'
    ],
    '⛔': [
        'Ingen post',
        ':no_entry:',
        ':red:'
    ],
    '🚫': [
        'Förbjuden',
        ':prohibited:',
        'Bannlyst',
        'Cirkel bakåtsnedstreck',
        'Nej',
        'Röd cirkel korsade',
        'Begränsad',
        'Ingen post skylt',
        ':red:'
    ],
    '🚳': [
        'Inga cyklar',
        ':no_bicycles:',
        'Inga cyklar signera',
        ':red:',
        ':black:'
    ],
    '🚭': [
        'Rökning förbjuden',
        ':no_smoking:',
        'Rökning förbjuden symbol',
        ':red:',
        ':black:'
    ],
    '🚯': [
        'Ingen skräp',
        ':no_littering:',
        'Ingen skräp symbol',
        ':red:',
        ':black:'
    ],
    '🚱': [
        'Icke-potentiellt vatten',
        ':non-potable_water:',
        ':non_potable_water:',
        'Inget vatten',
        'Inget dricksvatten',
        'Icke möjlig vattensymbol',
        ':red:',
        ':black:'
    ],
    '🚷': [
        'Inga fotgängare',
        ':no_pedestrians:',
        'Inga personer',
        'Ingen vandring',
        ':red:',
        ':black:'
    ],
    '🔞': [
        'Ingen under arton',
        ':no_one_under_18:',
        'NSFW',
        'Ingen under arton symbol',
        '18',
        ':red:',
        ':black:'
    ],
    '📵': [
        'Inga mobiltelefoner',
        ':no_mobile_phones:',
        'Inga mobiltelefoner',
        'Inga telefoner',
        'Inga smartphones',
        ':red:',
        ':black:'
    ],
    '☢️': [
        'Radioactive',
        ':radioactive:',
        'Internationell symbol för strålning',
        'Kärnkraft',
        'Radioaktivt tecken',
        ':orange:'
    ],
    '☣️': [
        'Biorisk',
        ':biohazard:',
        'Biohazard tecken',
        ':orange:'
    ],
    '⬆️': [
        'Upp pilknapp',
        ':up_arrow_button:',
        'Pil markerar upp',
        'Uppåt Svart Pil',
        ':blue:'
    ],
    '↗️': [
        'Upp till höger pilknapp',
        ':up-right_arrow_button:',
        ':up_right_arrow_button:',
        'Diagonal upp-höger pil',
        'Nordöstra pilen',
        ':blue:'
    ],
    '➡️': [
        'Höger pilknapp',
        ':right_arrow_button:',
        'Pil pekar höger',
        'Svart höger pil',
        ':blue:'
    ],
    '↘️': [
        'Nedåtgående pilknapp',
        ':down-right_arrow_button:',
        ':down_right_arrow_button:',
        'Diagonalt nedtill till höger pil',
        'Sydöstra pilen',
        ':blue:'
    ],
    '⬇️': [
        'Nedåtpilsknapp',
        ':down_arrow_button:',
        'Pil markerar nedåt',
        'Nedåt Svart Pil',
        ':blue:'
    ],
    '↙️': [
        'Nedåt-vänster pilknapp',
        ':down-left_arrow_button:',
        ':down_left_arrow_button:',
        'Diagonalt nedåt vänster pil',
        'Sydväst pil',
        ':blue:'
    ],
    '⬅️': [
        'Vänster pilknapp',
        ':left_arrow_button:',
        'Pil pekar vänster',
        'Vänster Svart Pil',
        ':blue:'
    ],
    '↖️': [
        'Upp till vänster pilknapp',
        ':up-left_arrow_button:',
        ':up_left_arrow_button:',
        'Diagonal upp-vänster pil',
        'Nordvästra pilen',
        ':blue:'
    ],
    '↕️': [
        'Upp-Ner pilknapp',
        ':up-down_arrow_button:',
        ':up_down_arrow_button:',
        'Vertikala pilar',
        'Upp Pil Ned',
        ':blue:'
    ],
    '↔️': [
        'Vänster-höger pilknapp',
        ':left-right_arrow_button:',
        ':left_right_arrow_button:',
        'Horisontell pilar',
        'Sidovägar Pilar',
        'Vänster Höger Pil',
        ':blue:'
    ],
    '↩️': [
        'Höger pilböjda vänster knapp',
        ':right_arrow_curving_left_button:',
        'Svar via e-post',
        'Vänster böjda pil',
        'Vänster pil med krok',
        ':blue:'
    ],
    '↪️': [
        'Vänster pilen svänger höger knapp',
        ':left_arrow_curving_right_button:',
        'E-posta vidare',
        'Höger böjda pilar',
        'Höger pil med krok',
        ':blue:'
    ],
    '⤴️': [
        'Höger pilen svänger upp knappen',
        ':right_arrow_curving_up_button:',
        'Pil pekar höger och svänger sedan uppåt',
        ':blue:'
    ],
    '⤵️': [
        'Höger pilen svänger ner knappen',
        ':right_arrow_curving_down_button:',
        'Böjd nedåtgående pil',
        'Pil pekar höger och svänger sedan nedåt',
        ':blue:'
    ],
    '🔃': [
        'Clockwise vertikala pilar knapp',
        ':clockwise_vertical_button:',
        'Clockwise nedåt och uppåt öppen cirkel pilar',
        ':blue:'
    ],
    '🔄': [
        'Motsols pilknapp',
        ':counterclockwise_button:',
        'Uppdatera',
        'Rotera',
        'Växla',
        'Mot-Clockwise pilar',
        'Moturs nedåt och uppåt öppen cirkel pilar',
        ':blue:'
    ],
    '🔙': [
        'Bakåtpilen',
        ':back_arrow:',
        'Tillbaka',
        'Baksida med vänster pil ovanför',
        ':black:'
    ],
    '🔚': [
        'Avsluta pilen',
        ':end_arrow:',
        'Slut',
        'Avsluta med vänster pil ovanför',
        ':black:'
    ],
    '🔛': [
        'På! Pil',
        ':on_arrow:',
        'På',
        'På med utropstecken med vänster högerpil ovanför',
        ':black:'
    ],
    '🔜': [
        'Snart pil',
        ':soon_arrow:',
        'Snart',
        'Snart med höger pil ovanför',
        ':black:'
    ],
    '🔝': [
        'Översta pilen',
        ':top_arrow:',
        'Överst',
        'Topp med uppåtpilen ovanför',
        ':black:'
    ],
    '🛐': [
        'Platsen för dyrkan',
        ':place_of_worship:',
        'Religiös byggnad',
        ':purple:'
    ],
    '⚛️': [
        'Atom symbol',
        ':atom_symbol:',
        ':purple:'
    ],
    '🕉️': [
        'Om Symbol',
        ':om_symbol:',
        'Om',
        'Aumkara',
        'Omkara',
        'Pranava',
        ':purple:'
    ],
    '✡️': [
        'Davids stjärna',
        ':star_of_david:',
        'Magen David',
        ':purple:'
    ],
    '☸️': [
        'Hjul av Dharma',
        ':wheel_of_dharma:',
        'Hjälm',
        ':purple:'
    ],
    '☯️': [
        'Yin Yang',
        ':yin_yang:',
        ':purple:'
    ],
    '✝️': [
        'Latinskt kors',
        ':latin_cross:',
        'Kristet Kors',
        ':purple:'
    ],
    '☦️': [
        'Ortodoxt kors',
        ':orthodox_cross:',
        ':purple:'
    ],
    '☪️': [
        'Stjärn- och halvmåne',
        ':star_and_crescent:',
        ':purple:'
    ],
    '☮️': [
        'Fred symbol',
        ':peace:',
        'Fred tecken',
        ':purple:'
    ],
    '🕎': [
        'Menorah',
        ':menorah:',
        'Candelabrum',
        'Ljus',
        'Chanukiah',
        'Menorah',
        'Menorah med nio grenar',
        ':purple:'
    ],
    '🔯': [
        'Prickad sex-tonad stjärna',
        ':dotted_six-pointed_star:',
        ':dotted_six_pointed_star:',
        'Sex Pointed Star med Mitten Punkt',
        ':purple:'
    ],
    //"🪯": ["Khanda", ":khanda:", "Sikhism", ":purple:"],
    '♈': [
        'Aries',
        ':aries:',
        ':zodiac:',
        'Zodiak',
        ':purple:'
    ],
    '♉': [
        'Taurus',
        ':taurus:',
        ':zodiac:',
        'Zodiak',
        ':purple:'
    ],
    '♊': [
        'Gemini',
        ':gemini:',
        ':zodiac:',
        'Zodiak',
        ':purple:'
    ],
    '♋': [
        'Cancer',
        ':cancer:',
        ':zodiac:',
        'Zodiak',
        ':purple:'
    ],
    '♌': [
        'Lejon',
        ':leo:',
        ':zodiac:',
        'Zodiak',
        ':purple:'
    ],
    '♍': [
        'Jungfrun',
        ':virgo:',
        ':zodiac:',
        'Zodiak',
        ':purple:'
    ],
    '♎': [
        'Libra',
        ':libra:',
        ':zodiac:',
        'Zodiak',
        ':purple:'
    ],
    '♏': [
        'Skorpion',
        ':scorpio:',
        ':zodiac:',
        'Skorpius',
        'Zodiak',
        ':purple:'
    ],
    '♐': [
        'Sagittarius',
        ':sagittarius:',
        ':zodiac:',
        'Zodiak',
        ':purple:'
    ],
    '♑': [
        'Stenbock',
        ':capricorn:',
        ':zodiac:',
        'Zodiak',
        ':purple:'
    ],
    '♒': [
        'Vattumannen',
        ':aquarius:',
        ':zodiac:',
        'Zodiak',
        ':purple:'
    ],
    '♓': [
        'Pisces',
        ':pisces:',
        ':zodiac:',
        'Zodiak',
        ':purple:'
    ],
    '⛎': [
        'Ophiuchus',
        ':ophiuchus:',
        ':zodiac:',
        'Zodiak',
        ':purple:'
    ],
    '⏭️': [
        'Hoppa över vidarebefordra symbol',
        'Svart Högerpekande Dubbel triangel med vertikal stång',
        ':skip_forward_button:',
        'Nästa spårknapp',
        ':blue:'
    ],
    '⏮️': [
        'Hoppa över bakåtsymbol',
        'Svart Vänsterpekande Dubbel triangel med vertikal stång',
        ':skip_backward_button:',
        'Senaste spårknappen',
        'Föregående spår',
        ':blue:'
    ],
    '⏯️': [
        'Spela eller pausa knappen',
        'Svart Höger Pointing Triangel med dubbel vertikal bar',
        ':play_button:',
        ':pause_button:',
        ':play_or_pause_button:',
        'Spela Symbol',
        'Pausa symbol',
        ':blue:'
    ],
    '🔀': [
        'Blanda spårningsknapp',
        ':shuffle_tracks_button:',
        'Vridna höger pilar',
        ':blue:'
    ],
    '🔁': [
        'Upprepa knappen',
        ':repeat_button:',
        'Loop Symbol',
        'Retweet',
        'Clockwise Höger och Vänster Öppen Cirkel Pilar',
        ':blue:'
    ],
    '🔂': [
        'Upprepa enkelknapp',
        ':repeat_single_button:',
        'Cirkel pilar med nummer 1',
        'Loopa en gång symbol',
        'Upprepa enda spår symbol',
        'Clockwise Höger och Vänster Öppen Cirkel Pilar med Circled One Overlay',
        ':blue:'
    ],
    '▶️': [
        'Spela upp knappen',
        ':play_button:',
        'Höger triangel',
        'Högerpekande triangel',
        'Svart Högerpekande Triangel',
        ':blue:'
    ],
    '◀️': [
        'Omvänd knapp',
        ':reverse_button:',
        'Vänster triangel',
        'Vänsterpekande triangel',
        'Svart Triangel till vänster',
        ':blue:'
    ],
    '🔼': [
        'Uppåt-knapp',
        ':upwards_button:',
        'Upp Triangel',
        'Upp-Pekar Triangel',
        'Upp-Pointing Liten Röd Triangel',
        ':blue:'
    ],
    '🔽': [
        'Knappen nedåt',
        ':downwards_button:',
        'Ner Triangel',
        'Nedpekande triangel',
        'Liten röd triangelformad ned',
        ':blue:'
    ],
    '⏩': [
        'Snabb-Vidarebefordra knapp',
        ':fast-forward_button:',
        ':fast_forward_button:',
        'Snabb framåt',
        'Snabb Framåtriktad symbol',
        'Svart Högerpekande Dubbel Triangel',
        ':blue:'
    ],
    '⏪': [
        'Fast Reverse Button',
        ':fast_reverse_button:',
        'Rewind',
        'Spola tillbaka symbol',
        'Svart Vänsterpekande Dubbel triangel',
        ':blue:'
    ],
    '⏫': [
        'Snabb uppåt-knapp',
        ':fast_up_button:',
        'Upp-Pekar dubbel triangel',
        'Svart upp-pekande dubbel triangel',
        ':blue:'
    ],
    '⏬': [
        'Snabb nedåt-knapp',
        ':fast_down_button:',
        'Dubbel triangel nedpekande',
        'Svart nedpekande dubbel triangel',
        ':blue:'
    ],
    '⏹️': [
        'Stoppa knapp',
        ':stop_button:',
        'Stoppa',
        'Stoppa symbol',
        'Svart fyrkant för stopp',
        ':blue:'
    ],
    '⏏️': [
        'Utmatningsknapp',
        ':eject_button:',
        'Eject Symbol',
        ':blue:'
    ],
    '🎦': [
        'Bio',
        ':cinema_button:',
        'Cinema Skärm',
        'Filmer',
        'Film',
        'Biograf symbol',
        'Inspelning',
        ':blue:'
    ],
    '📶': [
        'Antennstaplar',
        ':antenna_bars_button:',
        'Mottagningsgaller',
        'Signalstyrka',
        'Stairs',
        'Signal Styrka Symbol',
        'Antenn med barer',
        ':blue:'
    ],
    '✖️': [
        'Multiplicera',
        ':multiply:',
        'Tider',
        'Multiplikation Symbol',
        'Kraftig multiplikation X',
        ':black:'
    ],
    '➕': [
        'Plus',
        ':plus:',
        'Plus symbol',
        'Tung Plus-skylt',
        ':black:'
    ],
    '➖': [
        'Minus',
        ':minus:',
        'Minus Symbol',
        'Tung Minus-skylt',
        ':black:'
    ],
    '➗': [
        'Dela',
        ':divide:',
        'Divisionssymbol',
        'Tung Division tecken',
        ':black:'
    ],
    '🟰': [
        'Tung Lika Tecken',
        ':heavy_equals_sign:',
        'Lika',
        'Resultat',
        ':black:'
    ],
    '♾️': [
        'Oändlighet',
        ':infinity:',
        'Permanent papperstecken'
    ],
    '‼️': [
        'Dubbel utropsmärkning',
        ':double_exclamation_mark:',
        'Röd dubbel utropsmärkning',
        ':red:'
    ],
    '⁉️': [
        'Frågetecken för utropet',
        ':exclamation_question_mark:',
        'Röd utropsmärkning och frågemärke',
        ':red:'
    ],
    '❓': [
        'Frågetecken',
        ':question_mark:',
        'Rött frågetecken',
        'Svart frågemärke prydnad',
        ':red:'
    ],
    '❔': [
        'Vitt frågetecken',
        ':white_question_mark:',
        ':question_mark:',
        'Vitt frågetecken',
        'Vitt frågemärke prydnad',
        ':white:'
    ],
    '❗': [
        'Utropsmärkning',
        ':exclamation_mark:',
        'Rött utropstecken',
        'Tung utropsmärkning symbol',
        ':red:'
    ],
    '❕': [
        'Vit utropsmärkning',
        ':white_exclamation_mark:',
        ':exclamation_mark:',
        'Vit utropsmärkning prydnad',
        ':white:'
    ],
    '⭕': [
        'Ihålig röd cirkel',
        ':hollow_red_circle:',
        'Cirkel',
        'Rätt',
        'Röd cirkel',
        'Cirkel Mark',
        'Kraftig stor cirkel',
        ':red:'
    ],
    '☑️': [
        'Kryssruta med check',
        ':check_box_with_check:',
        'V',
        'Kryssruta',
        'Kryssa i rutan',
        'Vallåda med check'
    ],
    '✔️': [
        'Markera betyg',
        ':check_mark:',
        'V',
        'Kontrollera',
        'Bocka',
        'Checkmark',
        'Tung check-markering',
        ':black:'
    ],
    '❌': [
        'Korsmarkering',
        ':cross_mark:',
        'Kors',
        'X',
        ':red:'
    ],
    '✅': [
        'Markera markeringsknapp',
        ':check_mark_button:',
        'V',
        'Grön markering',
        'Grön spark',
        'Markera betyg',
        'Vit Heavy Check Mark',
        ':green:'
    ],
    '❎': [
        'Kryssmarksknapp',
        ':cross_mark_button:',
        'Kors',
        'X',
        'X betyg',
        'Negativt Squared Cross Mark',
        ':green:'
    ],
    '#️⃣': [
        'Tangentkorts nummerskylt',
        ':hash_key:',
        '#',
        'Hash-nyckel',
        'Hashtag',
        'Oktothorpe',
        'Pund nyckel',
        'Nummerskylt',
        ':blue:'
    ],
    '*️⃣': [
        'Keycap Asterisk',
        ':asterisk:',
        'Stjärna Keycap',
        ':blue:'
    ],
    '0️⃣': [
        'Nummer 0',
        ':number_0:',
        'Keycap Digit Zero'
    ],
    '1️⃣': [
        'Nummer 1',
        ':number_1:',
        'Nyckelkorts siffra ett'
    ],
    '2️⃣': [
        'Nummer 2',
        ':number_2:',
        'Keycap Siffra två'
    ],
    '3️⃣': [
        'Nummer 3',
        ':number_3:',
        'Nyckelkorts siffra tre'
    ],
    '4️⃣': [
        'Nummer 4',
        ':number_4:',
        'Nyckelkorts siffra fyra'
    ],
    '5️⃣': [
        'Nummer 5',
        ':number_5:',
        'Nyckelkorts siffra fem'
    ],
    '6️⃣': [
        'Nummer 6',
        ':number_6:',
        'Nyckelkorts siffra sex'
    ],
    '7️⃣': [
        'Nummer 7',
        ':number_7:',
        'Keycap Digit Seven'
    ],
    '8️⃣': [
        'Nummer 8',
        ':number_8:',
        'Nyckelkorts siffra Åtta'
    ],
    '9️⃣': [
        'Nummer 9',
        ':number_9:',
        'Nyckelkorts siffra nio'
    ],
    '🔟': [
        'Nummer 10',
        ':number_10:',
        'Keycap: 10',
        '10',
        'Keycap Siffra tio'
    ],
    '🔠': [
        'Input Latin Uppercase',
        ':input_latin_uppercase:',
        'ABCD',
        'Versaler',
        'Inmatningssymbol för versaler',
        'Symbolen för latinska kapital bokstäver',
        ':blue:'
    ],
    '🔡': [
        'Input Latin Lowercase',
        ':input_latin_lowercase:',
        'abcd',
        'Gemener',
        'Inmatningssymbol för små bokstäver',
        'Inmatningssymbol för latinska små bokstäver',
        ':blue:'
    ],
    '🔢': [
        'Input Numbers',
        ':input_numbers:',
        '1234',
        'Nummer',
        'Numeric Input',
        'Symbolen för siffror',
        ':blue:'
    ],
    '🔣': [
        'Ingångssymbol för symboler',
        ':input_symbols:',
        'Symboler',
        'Symbol inmatning',
        ':blue:'
    ],
    '🔤': [
        'Input Latin Letters',
        ':input_latin_letters:',
        'abc',
        'Alfabetet',
        'Bokstäver',
        'Symbolen för bokstäver',
        'Symbolen för latinska bokstäver',
        ':blue:'
    ],
    '🅰️': [
        'En knapp (Blodtyp)',
        ':a_blood:',
        'Blodtyp A',
        'Brev A',
        'Negativt Squared Latin Capital Brev A',
        ':red:'
    ],
    '🆎': [
        'AB-knapp (Blodtyp)',
        ':ab_blood:',
        'Brev AB',
        'Blodstyp AB',
        'Negativ Squared AB',
        ':red:'
    ],
    '🅱️': [
        'B-knapp (Blodtyp)',
        ':b_blood:',
        'Brev B',
        'Blodtyp B',
        'Negativt Squared Latin Capital Brev B',
        ':red:'
    ],
    '🆑': [
        'CL knapp',
        ':cl_button:',
        'Rensa',
        'Rensa knapp',
        'CL tecken',
        'Kvadrat CL',
        'Bokstäver CL',
        ':red:'
    ],
    '🆒': [
        'Kall knapp',
        ':cool_button:',
        'Kall Kvadrat',
        'Sval skylt',
        'Squared Cool',
        ':blue:'
    ],
    '🆓': [
        'Kostnadsfri knapp',
        ':free_button:',
        'Gratis',
        'Gratis skylt',
        'Gratis, Squared gratis',
        ':blue:'
    ],
    'ℹ️': [
        'Information',
        ':info_button:',
        'Information',
        'Gemener I',
        'Turistinformation',
        'Information Källa',
        ':blue:'
    ],
    '🆔': [
        'ID-knapp',
        ':id_button:',
        'ID',
        'Identifiering',
        'Identifieringstecken',
        'Kvadrat ID',
        ':purple:'
    ],
    '🆕': [
        'Ny knapp',
        ':new_button:',
        'Ny',
        'Ny skylt',
        'Squared ny',
        ':blue:'
    ],
    '🅾️': [
        'O-knapp (Blodtyp)',
        ':0_blood:',
        'Blodtyp O',
        '0',
        'Negativt Squared Latin Capital Brev',
        'Brev O',
        ':red:'
    ],
    '🆗': [
        'Ok knapp',
        ':ok_button:',
        'OK',
        'Okej',
        'Kvadrat',
        'Ok Signera',
        'Kvadrat OK',
        ':blue:'
    ],
    '🅿️': [
        'P-knapp',
        ':p_button:',
        ':parking_sign:',
        'Parkering skylt',
        'Negativt Squared Latin Capital Brev',
        'Brev P',
        ':blue:'
    ],
    '🆘': [
        'SOS knapp',
        ':sos_button:',
        'Nödsignal',
        'Nödläge',
        'SOS',
        'SOS tecken',
        'Squared SOS',
        'Hjälp',
        ':red:'
    ],
    '🆙': [
        'Upp! Knapp',
        ':up_button:',
        'Nivå upp',
        'Upp',
        'Registrera dig',
        'Kvadrat upp med utropsmärkning',
        ':blue:'
    ],
    '🆚': [
        'Vs-knapp',
        ':vs_button:',
        'Fyrkantiga V',
        ':orange:'
    ],
    '🆖': [
        'NG knapp',
        ':ng_button:',
        'Kvadrat NG',
        'Inget bra tecken',
        'Inget bra',
        ':ng:',
        'Blooper',
        ':blue:'
    ],
    '🔴': [
        'Röd cirkel',
        ':red_circle:',
        'Stor röd cirkel',
        ':red:'
    ],
    '🟠': [
        'Orange cirkel',
        ':orange_circle:',
        'Stor Orange cirkel',
        ':orange:'
    ],
    '🟡': [
        'Gul cirkel',
        ':yellow_circle:',
        'Stor Gula Cirkel',
        ':yellow:'
    ],
    '🟢': [
        'Grön cirkel',
        ':green_circle:',
        'Stor grön cirkel',
        ':green:'
    ],
    '🔵': [
        'Blå cirkel',
        ':blue_circle:',
        'Stor blå cirkel',
        ':blue:'
    ],
    '🟣': [
        'Lila cirkel',
        ':purple_circle:',
        'Stor lila cirkel',
        ':purple:'
    ],
    '🟤': [
        'Brun cirkel',
        ':brown_circle:',
        'Stor Brun Cirkel',
        ':brown:'
    ],
    '⚫': [
        'Svart cirkel',
        ':black_circle:',
        'Mellan svart cirkel',
        ':black:'
    ],
    '⚪': [
        'Vit cirkel',
        ':white_circle:',
        'Mellan vit cirkel',
        ':white:'
    ],
    '🟥': [
        'Röd Kvadrat',
        ':red_square:',
        'Stor röd fyrkant',
        ':red:'
    ],
    '🟧': [
        'Orange Kvadrat',
        ':orange_square:',
        'Stor Orange Fyrkant',
        ':orange:'
    ],
    '🟨': [
        'Gul kvadrat',
        ':yellow_square:',
        'Stor gul fyrkant',
        ':yellow:'
    ],
    '🟩': [
        'Grön Kvadrat',
        ':green_square:',
        'Stor grön kvadrat',
        ':green:'
    ],
    '🟦': [
        'Blå Fyrkant',
        ':blue_square:',
        'Stor blå kvadrat',
        ':blue:'
    ],
    '🟪': [
        'Lila Fyrkant',
        ':purple_square:',
        'Stor lila kvadrat',
        ':purple:'
    ],
    '🟫': [
        'Brun Kvadrat',
        ':brown_square:',
        'Stor Brun Fyrkant',
        ':brown:'
    ],
    '⬛': [
        'Svart stor kvadrat',
        ':black_large_square:',
        ':black:'
    ],
    '⬜': [
        'Vit stor kvadrat',
        ':white_large_square:',
        ':white:'
    ],
    '◼️': [
        'Svart Medium Kvadrat',
        ':black_medium_square:',
        ':black:'
    ],
    '◻️': [
        'Vit Medium Kvadrat',
        ':white_medium_square:',
        ':white:'
    ],
    '◾': [
        'Svart Medium liten kvadrat',
        ':black_medium_small_square:',
        ':black:'
    ],
    '◽': [
        'Vit Medium Liten Kvadrat',
        ':white_medium_small_square:',
        ':white:'
    ],
    '▪️': [
        'Svart liten kvadrat',
        ':black_small_square:',
        ':black:'
    ],
    '▫️': [
        'Vit liten kvadrat',
        ':white_small_square:',
        ':white:'
    ],
    '💠': [
        'Diamant form med en prick inuti',
        ':diamond_shape_with_dot:',
        'Sötma',
        'Diamant Blomma',
        'Kawaii'
    ],
    '🔶': [
        'Stor Orange Diamant',
        ':large_orange_diamond:',
        ':orange:'
    ],
    '🔷': [
        'Stor Blå Diamant',
        ':large_blue_diamond:',
        ':blue:'
    ],
    '🔸': [
        'Liten orange diamant',
        ':small_orange_diamond:',
        ':orange:'
    ],
    '🔹': [
        'Liten Blå Diamant',
        ':small_blue_diamond:',
        ':blue:'
    ],
    '🔺': [
        'Röd triangel lyfts upp',
        ':red_triangle_pointed_up:',
        'Upp-pekande Röd Triangel',
        ':red:'
    ],
    '🔻': [
        'Röd triangelformad ned',
        ':red_triangle_pointed_down:',
        'Nedpekande Röd Triangel',
        ':red:'
    ],
    '🔳': [
        'Vit Kvadratknapp',
        ':white_square_button:',
        ':white:',
        ':black:'
    ],
    '🔲': [
        'Svart kvadratknapp',
        ':black_square_button:',
        ':white:',
        ':black:'
    ],
    '©️': [
        'Upphovsrätt',
        ':copyright:',
        ':c:',
        'Signera upphovsrätt'
    ],
    '®️': [
        'Registrerad',
        ':registered:',
        ':r:',
        'Registrerad skylt'
    ],
    '™️': [
        'Varumärke',
        ':trade_mark:',
        ':tm:',
        'Varumärke',
        'Varumärkesskylt'
    ],
    '🛅': [
        'Vänster Bagage',
        ':left_luggage:',
        'Väska med nyckel',
        'Låst Resväska',
        ':blue:'
    ],
    '🛄': [
        'Hämtning av bagage',
        ':baggage_claim:',
        ':blue:'
    ],
    '🛃': [
        'Tull',
        ':customs:',
        ':blue:'
    ],
    '🛂': [
        'Passkontroll',
        ':passport_control:',
        'Gräns kontroll',
        ':blue:'
    ],
    //"🛜": ["Wireless", ":wireless:", ":wifi:", ":wi_fi:", "Wifi", "wi-fi", "wireless connection", ":blue:"],
    '🚰': [
        'Potabel vattensymbol',
        ':potable_water_symbol:',
        'Törst',
        'Törstig',
        'Vattentryck',
        'Vattenkran'
    ],
    '🇦': [
        'Brev A',
        ':letter_a:',
        ':a:',
        'Regionala indikator Symbol Brev A'
    ],
    '🇧': [
        'Brev B',
        ':letter_b:',
        ':b:',
        'Regionala indikatorn Symbol Brev B'
    ],
    '🇨': [
        'Brev C',
        ':letter_c:',
        ':c:',
        'Regional indikator Symbol Letter C'
    ],
    '🇩': [
        'Brev D',
        ':letter_d:',
        ':d:',
        'Regional indikator Symbol Letter D'
    ],
    '🇪': [
        'Brev E',
        ':letter_e:',
        ':e:',
        'Regional indikator Symbol Brev E'
    ],
    '🇫': [
        'Brev F',
        ':letter_f:',
        ':f:',
        'Regional indikator Symbol Brev F'
    ],
    '🇬': [
        'Brev G',
        ':letter_g:',
        ':g:',
        'Regional indikator Symbol Brev G'
    ],
    '🇭': [
        'Brev H',
        ':letter_h:',
        ':h:',
        'Regional indikator Symbol Brev H'
    ],
    '🇮': [
        'Brev I',
        ':letter_i:',
        ':i:',
        'Regional indikator Symbol Brev I'
    ],
    '🇯': [
        'Brev J',
        ':letter_j:',
        ':j:',
        'Regional indikator Symbol Letter J'
    ],
    '🇰': [
        'Brev K',
        ':letter_k:',
        ':k:',
        'Regional indikator Symbol Letter K'
    ],
    '🇱': [
        'Brev L',
        ':letter_l:',
        ':l:',
        'Regional indikator Symbol Letter L'
    ],
    '🇲': [
        'Brev M',
        ':letter_m:',
        ':m:',
        'Regional indikator Symbol Brev M'
    ],
    '🇳': [
        'Brev N',
        ':letter_n:',
        ':n:',
        'Regional indikator Symbol Letter N'
    ],
    '🇴': [
        'Brev O',
        ':letter_o:',
        ':o:',
        'Regional indikator Symbol Brev O'
    ],
    '🇵': [
        'Brev P',
        ':letter_p:',
        ':p:',
        'Regional indikator Symbol Letter P'
    ],
    '🇶': [
        'Brev Q',
        ':letter_q:',
        ':q:',
        'Regional indikator Symbol Letter Q'
    ],
    '🇷': [
        'Brev R',
        ':letter_r:',
        ':r:',
        'Regional indikator Symbol Letter R'
    ],
    '🇸': [
        'Brev S',
        ':letter_s:',
        ':s:',
        'Regionala indikator Symbol Brev S'
    ],
    '🇹': [
        'Brev T',
        ':letter_t:',
        ':t:',
        'Regional indikator Symbol Brev T'
    ],
    '🇺': [
        'Brev U',
        ':letter_u:',
        ':u:',
        'Regional indikator Symbol Letter U'
    ],
    '🇻': [
        'Brev V',
        ':letter_v:',
        ':v:',
        'Regional indikator Symbol Brev V'
    ],
    '🇼': [
        'Brev W',
        ':letter_w:',
        ':w:',
        'Regional indikator Symbol Brev W'
    ],
    '🇽': [
        'Brev X',
        ':letter_x:',
        ':x:',
        'Regional indikator Symbol Letter X'
    ],
    '🇾': [
        'Brev Y',
        ':letter_y:',
        ':y:',
        'Regional indikator Symbol Brev Y'
    ],
    '🇿': [
        'Brev Z',
        ':letter_z:',
        ':z:',
        'Regional indikator Symbol Brev Z'
    ],
    '💌': [
        'Älskar brev',
        ':love_letter:',
        'Hjärtkuvert',
        'Älskar anteckning'
    ],
    '🚮': [
        'Sätt skräp i sin plats symbol',
        ':put_litter_in_bing_sign:',
        'Kull i papperskorgen',
        'Lägg skräp i papperskorgen',
        'Person med papperskorgen'
    ],
    '♿': [
        'Symbol för rullstol',
        ':wheelchair_symbol:',
        'Tillgängligt badrum'
    ],
    '🚹': [
        'Symbolen för män',
        ':mens_symbol:',
        'Symbolen för män',
        'Män Toalett',
        'Manlig Restroom',
        'Manlig WC',
        ':blue:'
    ],
    '🚺': [
        'Kvinnornas symbol',
        ':womens_symbol:',
        'Kvinnornas symbol',
        'Kvinnors toalett',
        'Kvinnlig Restroom',
        'Famale WC',
        ':purple:',
        ':pink:'
    ],
    '🚻': [
        'Restroom',
        ':restroom:',
        'Badrum skylt',
        'Toalettskylt',
        'Toalettskylt',
        ':blue:'
    ],
    '🚼': [
        'Baby symbol',
        ':baby_symbol:',
        'Baby ändra station',
        'Baby ändra symbol',
        'Barnkammare',
        ':orange:'
    ],
    '🚾': [
        'Vatten garderob',
        ':wc:',
        'WC',
        'Toalett WC',
        ':blue:'
    ],
    '⚠️': [
        'Varningsskylt',
        ':warning_sign:',
        'Varning Symbol',
        ':yellow:'
    ],
    '🚸': [
        'Barn korsar',
        ':children_crossing:',
        'Barn korsar',
        'Skolans korsning',
        ':yellow:'
    ],
    '🔅': [
        'Symbol för låg ljusstyrka',
        ':low_brightness_symbol:',
        'Dimma knappen',
        'Minska ljusstyrkan'
    ],
    '🔆': [
        'Symbol för hög ljusstyrka',
        ':high_brightness_symbol:',
        'Öka ljusstyrkan',
        'Ljus knapp'
    ],
    '📳': [
        'Vibrationsläge',
        ':vibration_mode:',
        'Telefon hjärta',
        'Tyst läge',
        ':orange:'
    ],
    '📴': [
        'Mobiltelefon av',
        ':mobile_phone_off:',
        ':orange:'
    ],
    '〰️': [
        'Våg',
        'Vågig bindestreck',
        ':wave:'
    ],
    '💱': [
        'Valutautbyte',
        ':currency_exchange:'
    ],
    '💲': [
        'Tung Dollar tecken',
        ':dollar_symbol:',
        'Dollar',
        'Dollar tecken'
    ],
    '♻️': [
        'Svart universell återvinning symbol',
        ':recycling_symbol:',
        'Återvinningssymbol',
        'Återvinn logotyp',
        ':green:'
    ],
    '🔱': [
        'Trident Emblem',
        ':trident_emblem:',
        'Pitchfork',
        'Trident'
    ],
    '📛': [
        'Namnmärke',
        ':name_badge:',
        'Tofu vid brand',
        'Namntagg',
        'Eld Tagg'
    ],
    '🔰': [
        'Japansk symbol för nybörjare',
        ':japanese_symbol_beginner:',
        'Shoshinsha Mark',
        'Gul grön sköld',
        ':green:',
        ':yellow:'
    ],
    '➰': [
        'Lockig loop',
        ':curly_loop:',
        'Curling loop',
        'Loop'
    ],
    '➿': [
        'Dubbel lockig loop',
        ':double_curly_loop:',
        'Dubbel Curling Loop',
        'Röstbrevlåda'
    ],
    '〽️': [
        'Alternativ för del',
        ':part_alternation_mark:',
        'M',
        'McDonalds'
    ],
    '✳️': [
        'Åtta Asterisk',
        ':eight_spoked_asterisk:',
        ':green:'
    ],
    '✴️': [
        'Åtta tonade svarta stjärnan',
        ':eight_pointed_star:',
        'Orange stjärna',
        'Åtta Pointed Star',
        ':orange:'
    ],
    '❇️': [
        'Gnista',
        ':sparkle:',
        ':green:'
    ],
    'Ⓜ️': [
        'Cirklad M',
        'Circled Latin Capital Brev M',
        ':circled_m:',
        'Metro',
        ':blue:'
    ],
    '🈁': [
        'Japansk ordskylt betyder här',
        'Squared Katakana Koko',
        ':japanese_here:',
        'Här',
        'Mål',
        ':blue:'
    ],
    '🈂️': [
        'Japansk underteckna mening service eller serviceavgift',
        'Squared Katakana Sa',
        ':japanese_service:',
        ':blue:'
    ],
    '🈷️': [
        'Japansk underteckna betyder månadsbelopp',
        'Squared CJK Unified Ideograph-6708',
        ':japanese_monthly_amouny:',
        'Radikal 74',
        '月',
        ':orange:'
    ],
    '🈶': [
        'Japanska tecken betyder inte gratis',
        'Squared CJK Unified Ideograph-6709',
        ':japanese_own:',
        'Egen',
        '有',
        ':orange:'
    ],
    '🈯': [
        'Japansk skylt innebörd reserverad',
        'Squared CJK Unified Ideograph-6307',
        ':japanese_reserved:',
        'Finger Punkt',
        '指',
        ':green:'
    ],
    '🉐': [
        'Japansk underteckna mening fynd',
        'Fördel för cirklad ideografi',
        ':japanese_acquire:',
        'Förvärva',
        '得',
        ':red:'
    ],
    '🈹': [
        'Japanska tecken betyder rabatt',
        'Squared CJK Unified Ideograph-5272',
        ':japanese_discount:',
        'Fynd försäljning',
        '割',
        ':red:'
    ],
    '🈚': [
        'Japanska tecken betyder gratis laddning',
        'Squared CJK Unified Ideograph-7121',
        ':japanese_lacking:',
        'Brist',
        '無',
        ':orange:'
    ],
    '🈲': [
        'Japansk teckeninnebörd Förbjuden',
        'Squared CJK Unified Ideograph-7981',
        ':japanese_prohibited:',
        'Forbid',
        '禁',
        ':red:'
    ],
    '🉑': [
        'Japansk skylt betyder Acceptabel',
        'Cirklad ideograf Acceptera',
        ':japanese_accept:',
        'Acceptera',
        ':orange:'
    ],
    '🈸': [
        'Japansk teckensnittsprogram',
        'Squared CJK Unified Ideograph-7533',
        ':japanese_application_form:',
        'Formulär för ansökan',
        'Apa',
        'Begäran',
        '申',
        ':orange:'
    ],
    '🈴': [
        'Japansk teckeninnebörd Godkänd (betyg)',
        'Squared CJK Unified Ideograph-5408',
        ':japanese_agreement:',
        'Avtal',
        '合',
        ':red:'
    ],
    '🈳': [
        'Japansk skylt innebörd ledig',
        'Squared CJK Unified Ideograph-7a7a',
        ':japanese_available:',
        'Tom och tillgänglig',
        '空',
        ':blue:'
    ],
    '㊗️': [
        'Japansk teckeninnebörd Grattis',
        'Cirklad ideograf Grattis',
        ':japanese_congratulations:',
        ':red:'
    ],
    '㊙️': [
        'Cirklad ideograf hemlighet',
        ':japanese_secret:',
        'Japansk underteckna betyda hemlighet',
        'Hemlighet',
        ':red:'
    ],
    '🈺': [
        'Japansk underteckna betydelse Öppen för företag',
        'Squared CJK Unified Ideograph-55b6',
        ':japanese_open_for_business:',
        'Arbete',
        '営',
        ':orange:'
    ],
    '🈵': [
        'Japansk skylt betyder fullt; Ingen ledig',
        'Squared CJK Unified Ideograph-6e80',
        ':japanese_full:',
        'Fullt',
        '満',
        ':red:'
    ],
    '🔘': [
        'Radioknapp',
        ':radio_button:'
    ],
    '🛑': [
        'Stoppa signering',
        ':stop_sign:',
        'Octagonal tecken',
        ':red:'
    ],
    '⚕️': [
        'Medicinsk symbol',
        ':medical_symbol:',
        'Aesculapius',
        'Asklepios',
        'Rod av Asclepius',
        'Aesculapius personal'
    ],
    '🛗': [
        'Hiss',
        ':elevator:',
        ':lift:',
        'Lyft'
    ],
    '⚧️': [
        'Transgendersymbolen',
        ':transgender_sign:'
    ],
    '♂️': [
        'Manlig skylt',
        ':male_sign:',
        'Mannen symbol',
        'Mars symbol'
    ],
    '♀️': [
        'Kvinna tecken',
        ':female_sign:',
        'Kvinna symbol',
        'Venus Symbol'
    ]
};
/*food and drinks*/
emojis_language[lang][6] = {
    '🍇': [
        'Druvor',
        ':grapes:',
        'Druva',
        ':purple:'
    ],
    '🍈': [
        'Melon',
        ':melon:',
        'Cantaloupe',
        'Honungsdagg',
        'Muskmelon'
    ],
    '🍉': [
        'Vattenmelon',
        ':watermelon:',
        ':red:'
    ],
    '🍊': [
        'Tangerine',
        ':tangerine:',
        'Mandarin',
        ':orange:'
    ],
    '🍋': [
        'Citron',
        ':lemon:',
        'Citronblad',
        ':yellow:'
    ],
    '🍌': [
        'Banan',
        ':banana:',
        'Täckt',
        ':yellow:'
    ],
    '🍍': [
        'Ananas',
        ':pineapple:'
    ],
    '🥭': [
        'Mango',
        ':mango:'
    ],
    '🍎': [
        'Rött äpple',
        ':red_apple:',
        ':apple:',
        'Röd Läckra Äpple',
        ':red:'
    ],
    '🍏': [
        'Grönt äpple',
        ':green_apple:',
        ':apple:',
        'Gyllene Läckert Äpple',
        'Mormor Smith Apple',
        ':green:'
    ],
    '🍐': [
        'Päron',
        ':pear:'
    ],
    '🍑': [
        'Persika',
        ':peach:',
        'Botten',
        'Butt',
        ':orange:',
        ':pink:'
    ],
    '🍒': [
        'Körsbär',
        ':cherry:',
        'Körsbär',
        'Vild körsbär',
        ':red:'
    ],
    '🍓': [
        'Jordgubbe',
        ':strawberry:',
        ':red:'
    ],
    '🥝': [
        'Kiwi frukt',
        ':kiwi:',
        'Kinesiska krusbär',
        'Kiwi',
        'Kiwifrukt',
        ':green:'
    ],
    '🍅': [
        'Tomat',
        ':tomato:',
        ':red:'
    ],
    '🥥': [
        'Kokkos',
        ':coconut:',
        'Cocoanut'
    ],
    '🥑': [
        'Avokado',
        ':avocado:',
        ':green:'
    ],
    '🍆': [
        'Äggplanta',
        ':eggplant:',
        ':aubergine:',
        'Aubergine',
        'Phalliska',
        'Lila grönsak',
        ':purple:'
    ],
    '🥔': [
        'Potatis',
        ':potato:',
        'Bakad potatis',
        'Idaho Potatis'
    ],
    '🥕': [
        'Morot',
        ':carrot:',
        ':orange:'
    ],
    '🌽': [
        'Öron av majs',
        ':ear_of_corn:',
        'Majs',
        'Majs på Cob',
        'Majs',
        'Öron av Majs'
    ],
    '🌶️': [
        'Varm paprika',
        ':hot_pepper:',
        'Chili Pepper',
        'Kryddig',
        ':red:'
    ],
    '🥒': [
        'Gurka',
        ':cucumber:',
        'Gherkin',
        'Plocka',
        ':green:'
    ],
    '🥬': [
        'lummig grön',
        ':leafy_green:',
        'Bok Choy',
        'Kinesisk kål',
        'Cos Lettuce',
        'Romänsk sallad',
        'lummiga gröna',
        ':green:'
    ],
    '🥦': [
        'Broccoli',
        ':broccoli:',
        ':green:'
    ],
    '🍄': [
        'Svamp',
        ':mushroom:',
        'Shroom',
        'Toadstool'
    ],
    '🥜': [
        'Peanuts',
        ':peanuts:',
        'Nötter',
        ':brown:'
    ],
    '🌰': [
        'Kastanj',
        ':chestnut:',
        'Eollon',
        'Nöt',
        ':brown:'
    ],
    '🍞': [
        'Bröd',
        ':bread:',
        'Bröd Av Bröd',
        ':brown:'
    ],
    '🥐': [
        'Croissant',
        ':croissant:',
        ':brown:'
    ],
    '🥖': [
        'Baguette Bröd',
        ':baguette_bread:',
        'Fransk Bröd',
        'Baguette',
        ':brown:'
    ],
    '🥨': [
        'Pretzel',
        ':pretzel:',
        ':brown:'
    ],
    '🥯': [
        'Bagel',
        ':bagel:',
        ':brown:'
    ],
    '🥞': [
        'Pannkakor',
        ':pancakes:',
        'Cre<unk> pes',
        'Hotcakes',
        ':yellow:'
    ],
    '🧀': [
        'Ost Kil',
        ':cheese_wedge:',
        'Ost',
        ':yellow:'
    ],
    '🍖': [
        'Kött på ben',
        ':meat_on_bone:',
        'Grill',
        'Grillning',
        'Manga Kött',
        ':red:'
    ],
    '🍗': [
        'Poultry Leg',
        ':poultry_leg:',
        'Trumslagg',
        'Turkiet Ben',
        ':red:'
    ],
    '🥩': [
        'Skär av kött',
        ':cut_of_meat:',
        'Kött',
        'Stek',
        ':red:'
    ],
    '🥓': [
        'Bacon',
        ':bacon:',
        'Rashers',
        ':red:'
    ],
    '🍔': [
        'Hamburgare',
        ':hamburger:',
        'Burger',
        'Osteburger'
    ],
    '🍟': [
        'Pommes frites',
        ':french_fries:',
        'Chips',
        'Frier',
        'McDonalds pommes frites',
        ':yellow:'
    ],
    '🍕': [
        'Pizza',
        ':pizza:',
        'Pepperoni Pizza',
        'Skiva av Pizza',
        ':red:'
    ],
    '🌭': [
        'Het hund',
        ':hot_dog:',
        'korv',
        'Korv',
        ':red:'
    ],
    '🥪': [
        'Smörgås',
        ':sandwich:'
    ],
    '🌮': [
        'Taco',
        ':taco:'
    ],
    '🌯': [
        'Burrito',
        ':burrito:',
        'Radbryt'
    ],
    '🥙': [
        'Fyllt Flatbread',
        ':stuffed_flatbread:',
        'Doner Kebab',
        'Gyro',
        'Shawarma',
        'Pita smörgås'
    ],
    '🍳': [
        'Matlagning',
        ':cooking:',
        'Frukost',
        'Stekt ägg',
        'Frying Pan'
    ],
    '🥘': [
        'Shallow Pan of Food',
        ':shallow_pan_of_food:',
        'Paella',
        'Pan av mat'
    ],
    '🍲': [
        'Kruka av mat',
        ':pot_of_food:',
        'Skål av mat',
        'Soppa',
        'Gryta'
    ],
    '🥣': [
        'Skål med sked',
        ':bowl_with_spoon:',
        'Spannmål skål'
    ],
    '🥗': [
        'Grön sallad',
        ':green_salad:',
        'Sallad',
        ':green:'
    ],
    '🍿': [
        'Popcorn',
        ':popcorn:',
        'Poppar majs'
    ],
    '🧂': [
        'Salt',
        ':salt:',
        'Salt Shaker',
        ':white:'
    ],
    '🥫': [
        'Konserverad mat',
        ':canned_food:',
        'Kan av mat',
        'Tunn burk',
        'Konserverad mat'
    ],
    '🍱': [
        'Bento Box',
        ':bento_box:',
        'Lunchlåda'
    ],
    '🍘': [
        'Ris knäckt',
        ':rice_cracker:',
        'Knäckare'
    ],
    '🍙': [
        'Risboll',
        ':rice_ball:',
        'Onigiri'
    ],
    '🍚': [
        'Tillagad ris',
        ':cooked_rice:',
        'Kokt ris',
        'Ris',
        'Skål av ris',
        'Ångad ris'
    ],
    '🍛': [
        'Curry Ris',
        ':curry_rice:',
        'Valuta',
        'Indisk mat',
        'Curry och ris'
    ],
    '🍜': [
        'Ångande skål',
        ':steaming_bowl:',
        'Nudlar',
        'Nudlar med pinnar',
        'Ramen'
    ],
    '🍝': [
        'Spaghetti',
        ':spaghetti:',
        'Pasta'
    ],
    '🍠': [
        'Rostad söt potatis',
        ':roasted_sweet_potato:',
        'Söt potatis',
        'Åk'
    ],
    '🍢': [
        'Oden',
        ':oden:',
        'Kebab',
        'Grant'
    ],
    '🍣': [
        'Sushi',
        ':sushi:',
        'Sashimi',
        'Skaldjur',
        ':pink:'
    ],
    '🍤': [
        'Stekt räkor',
        ':fried_shrimp:',
        'Stekt Räka',
        'Räkor Tempura'
    ],
    '🍥': [
        'Fisk tårta med virveln',
        ':fish_cake_with_swirl:',
        'Fiskkaka',
        'Pink Swirl'
    ],
    '🥮': [
        'Månen tårta',
        ':moon_cake:',
        'Månkaka'
    ],
    '🍡': [
        'Dango',
        ':dango:',
        'Dessert Stick',
        'Rosa vita gröna bollar'
    ],
    '🥟': [
        'Dumpling',
        ':dumpling:',
        'Empanada',
        'Pierogi'
    ],
    '🥠': [
        'Fortune kaka',
        ':fortune_cookie:'
    ],
    '🥡': [
        'Takeout Box',
        ':takeout_box:',
        'Kinesisk matlåda',
        'Oyster Pail'
    ],
    '🍦': [
        'Mjuk glass',
        ':soft_ice_cream:',
        'Herr Whippy',
        'Mjuk Servera'
    ],
    '🍧': [
        'Rakad is',
        ':shaved_ice:',
        'Snö Kon'
    ],
    '🍨': [
        'Glass',
        ':ice_cream:',
        'Skål av glass',
        'Dessert'
    ],
    '🍩': [
        'Munk',
        ':doughnut:',
        'Donut'
    ],
    '🍪': [
        'Kaka',
        ':cookie:',
        'Kaka',
        'Choklad Chip Cookie',
        ':brown:'
    ],
    '🎂': [
        'Födelsedagstårta',
        ':birthday_cake:',
        'Födelsedag',
        'Tårta',
        'Tårta med ljus'
    ],
    '🍰': [
        'Kortkaka',
        ':shortcake:',
        'Tårta',
        'Delen av kakan',
        'Jordgubbsmousse'
    ],
    '🧁': [
        'Cupcake',
        ':cupcake:',
        'Fen tårta'
    ],
    '🥧': [
        'Paj',
        ':pie:'
    ],
    '🍫': [
        'Choklad Bar',
        ':chocolate_bar:',
        'Godis Bar',
        'Choklad',
        ':brown:'
    ],
    '🍬': [
        'Godis',
        ':candy:',
        'Lolly',
        'Söt'
    ],
    '🍭': [
        'Lollipop',
        ':lollipop:',
        'Sucker'
    ],
    '🍮': [
        'Skönhet',
        ':custard:',
        'Creme Caramel',
        'Dessert',
        'Flan',
        'Pudding'
    ],
    '🍯': [
        'Honungspott',
        ':honey_pot:',
        'Honung',
        'Kruka',
        ':yellow:'
    ],
    '🍼': [
        'Baby Flaska',
        ':baby_bottle:',
        'Flaska matning'
    ],
    '🥛': [
        'Glas av Mjölk',
        ':glass_of_milk:',
        'Mjölk',
        ':white:'
    ],
    '☕': [
        'Varm dryck',
        ':hot_beverage:',
        'Kaffe',
        'Espresso',
        'Varm Choklad',
        'Te'
    ],
    '🍵': [
        'Tekopp utan handtag',
        ':green_tea:',
        'Grönt te',
        'Matcha',
        'Matcha grönt te',
        ':green:'
    ],
    '🍶': [
        'Sake',
        ':sake:',
        'Flaska',
        'Ris Vin',
        'Sake Flaska och Cup'
    ],
    '🍾': [
        'Flaska med Popping Cork',
        ':champagne:',
        'Firande',
        'Champagne',
        'Mousserande vin'
    ],
    '🍷': [
        'Vin glas',
        ':wine_glass:',
        'Alkohol',
        'Rött vin',
        'Vin'
    ],
    '🍸': [
        'Cocktailglas',
        ':cocktail_glass:',
        'Cocktail',
        'Martini'
    ],
    '🍹': [
        'Tropisk Dryck',
        ':tropical_drink:',
        'Frukt Punch',
        'Tiki Dryck'
    ],
    '🍺': [
        'Mugg öl',
        ':beer_mug:',
        'Öl',
        'Öl Stein',
        ':yellow:'
    ],
    '🍻': [
        'Länkande ölmuggar',
        ':clinking_beer_mugs:',
        'Öl',
        'Skål'
    ],
    '🥂': [
        'Länkande glasögon',
        ':clinking_glasses:',
        'Firande',
        'Champagneglas',
        'Skål'
    ],
    '🥃': [
        'Tumbler glas',
        ':tumbler_glass:',
        'Bourbon',
        'Sprit',
        'Rum',
        'Whiskey',
        'Whisky'
    ],
    '🥤': [
        'Kopp med halm',
        ':cup_with_straw:',
        'Milkshake',
        'Smoothie',
        'Sodapop',
        'Mjuk Dryck'
    ],
    '🥢': [
        'Chopsticks',
        ':chopsticks:'
    ],
    '🍽️': [
        'Gaffel och kniv med platta',
        ':fork_and_knife_with_plate:',
        'Middag',
        ':white:',
        ':gray:',
        ':grey:'
    ],
    '🍴': [
        'Gaffel och kniv',
        ':fork_and_knife:',
        'Bestick',
        'Kniv och gaffel',
        'Silverware',
        ':gray:',
        ':grey:'
    ],
    '🥄': [
        'Sked',
        ':spoon:',
        ':gray:',
        ':grey:'
    ],
    '🧄': [
        'Vitlök',
        ':garlic:'
    ],
    '🧅': [
        'Lök',
        ':onion:'
    ],
    '🧇': [
        'Waffle',
        ':waffle:'
    ],
    '🧆': [
        'Falafel',
        ':falafel:'
    ],
    '🧈': [
        'Smör',
        ':butter:'
    ],
    '🦪': [
        'Ostron',
        ':oyster:'
    ],
    '🧃': [
        'Dryckeslåda',
        ':beverage_box:',
        'Juice Box'
    ],
    '🧉': [
        'Para Dryck',
        ':mate_drink:',
        'Chimarra<unk> o',
        'Cimarrón',
        'Yerba partner'
    ],
    '🫒': [
        'Oliv',
        ':olive:',
        ':green:'
    ],
    '🫐': [
        'Blåbär',
        ':blueberries:',
        ':blue:'
    ],
    '🫑': [
        'Pepparklocka',
        ':bell_pepper:',
        ':green:'
    ],
    '🫓': [
        'Flatbröd',
        ':flatbread:'
    ],
    '🫔': [
        'Tamale',
        ':tamale:',
        'Tämjd'
    ],
    '🫕': [
        'Fondue',
        ':fondue:'
    ],
    '🧋': [
        'Bubbla te',
        ':boba:',
        'Boba'
    ],
    '🧊': [
        'Iskub',
        ':ice_cube:'
    ],
    '🫘': [
        'Beans',
        'Flatulence',
        ':beans:',
        'Kaffebönor',
        'Spill the beans'
    ],
    '🫗': [
        'Häll Flytande',
        ':puring_liquid:',
        'Hälla Dryck',
        'Vatten'
    ]
};
/*flags*/
emojis_language[lang][7] = {
    '🏁': [
        'Chequered flagga',
        ':chequered_flag:',
        'Markerad flagga',
        'Rutnät flicka',
        'Racing flagga',
        ':black:',
        ':white:'
    ],
    '🚩': [
        'Triangulär flagga',
        ':triangular_flag:',
        'Flagga på stolpe',
        'Röd flagga',
        'Triangulär flagga på inlägg',
        ':red:'
    ],
    '🎌': [
        'Korsade flaggor',
        ':crossed_flags:',
        'Två flaggor'
    ],
    '🏴': [
        'Svart flagga',
        ':black_flag:',
        'Vågar svart flagga',
        ':black:'
    ],
    '🏳️': [
        'Vit flagga',
        ':white_flag:',
        'Vågar vit flagga',
        ':white:'
    ],
    '🏳️‍🌈': [
        'Regnbågsflagga',
        ':rainbow_flag:',
        'Pride Flag',
        'HBT',
        'HBTQIA+',
        'Gay',
        'Transkön',
        'Lesbian',
        'Asex',
        'Queer'
    ],
    '🏳️‍⚧️': [
        'Transgenderflaggan',
        ':transgender_flag:',
        'Blå, rosa och vit flagga',
        'Trans flagga',
        'Blue',
        'Pink'
    ],
    '🏴‍☠️': [
        'Pirat flagga',
        ':pirate_flag:',
        'Jolly Roger',
        ':black:',
        'Corsair',
        'Privateer',
        'Buccaneer'
    ],
    '🇺🇳': [
        'Förenta Nationernas flagga',
        ':un:',
        'Flagga: FN'
    ],
    '🇪🇺': [
        'Europeiska unionens flagga',
        ':eu:',
        'Flagga: Europeiska unionen',
        'EU Flag'
    ],
    '🇦🇨': [
        'Flagga av Upplyftning Island',
        ':ac:'
    ],
    '🇦🇩': [
        'Andorras flagga',
        ':ad:',
        'Andorran Flag'
    ],
    '🇦🇪': [
        'Förenade Arabemiratens flagga',
        ':ae:',
        'Emirati Flag',
        'Förenade Arabemiratens flagga'
    ],
    '🇦🇫': [
        'Afghanistans flagga',
        ':af:',
        'Afghan Flag'
    ],
    '🇦🇬': [
        'Antigua & Barbuda flagga',
        ':ag:'
    ],
    '🇦🇮': [
        'Anguillas flagga',
        ':ai:',
        'Anguillans flagga'
    ],
    '🇦🇱': [
        'Albaniens flagga',
        ':al:',
        'Albansk flagga'
    ],
    '🇦🇲': [
        'Armeniens flagga',
        ':am:',
        'Armenien flagga'
    ],
    '🇦🇴': [
        'Angolas flagga',
        ':ao:',
        'Angolansk flagga'
    ],
    '🇦🇶': [
        'Flagga av Antarktis',
        ':aq:',
        'Antarktis flagga'
    ],
    '🇦🇷': [
        'Flagga i Argentina',
        ':ar:',
        'Argentinsk flagga'
    ],
    '🇦🇸': [
        'Amerikanska Samoas flagga',
        ':as:',
        'American Samoan Flag'
    ],
    '🇦🇹': [
        'Österrikes flagga',
        ':at:',
        'Austrian Flag'
    ],
    '🇦🇺': [
        'Australien flagga',
        ':au:',
        'Aussie flagga',
        'Australisk flagga'
    ],
    '🇦🇼': [
        'Arubas flagga',
        ':aw:',
        'Aruban Flagga'
    ],
    '🇦🇽': [
        'Flagga av A<unk> land öarna',
        ':ax:',
        'Landflagga'
    ],
    '🇦🇿': [
        'Azerbajdzjans flagga',
        ':az:',
        'Azerbajdzjans flagga'
    ],
    '🇧🇦': [
        'Bosnien & Hercegovinas flagga',
        ':ba:'
    ],
    '🇧🇧': [
        'Barbados flagga',
        ':bb:',
        'Barbadisk flagga',
        'Bajansk flagga'
    ],
    '🇧🇩': [
        'Bangladesh flagga',
        ':bd:',
        'Bangladeshi Flag'
    ],
    '🇧🇪': [
        'Belgien flagga',
        ':be:',
        'Belgisk flagga'
    ],
    '🇧🇫': [
        'Burkina Fasos flagga',
        ':bf:',
        'Burkinabe flagga'
    ],
    '🇧🇬': [
        'Bulgariens flagga',
        ':bg:',
        'Bulgarisk flagga'
    ],
    '🇧🇭': [
        'Flagga Bahrain',
        ':bh:',
        'Bahrani flagga',
        'Bahrains flagga'
    ],
    '🇧🇮': [
        'Burundis flagga',
        ':bi:',
        'Burundian Flag'
    ],
    '🇧🇯': [
        'Benin flagga',
        ':bj:',
        'Beninsk flagga'
    ],
    '🇧🇱': [
        'Flagga av Saint Barthélemy',
        ':bl:',
        'Flagga: St. Barthélemy'
    ],
    '🇧🇲': [
        'Flagga av Bermuda',
        ':bm:',
        'Bermudan Flag'
    ],
    '🇧🇳': [
        'Brunei flagga',
        ':bn:',
        'Bruneian flagga'
    ],
    '🇧🇴': [
        'Flagga Bolivia',
        ':bo:',
        'Bolivian Flag'
    ],
    '🇧🇶': [
        'Flagga i Karibien Nederländerna',
        ':bq:',
        'Bonaire'
    ],
    '🇧🇷': [
        'Brasiliens flagga',
        ':br:',
        'Brasiliansk flagga'
    ],
    '🇧🇸': [
        'Bahamas flagga',
        ':bs:',
        'Bahamas flagga'
    ],
    '🇧🇹': [
        'Flagga av Bhutan',
        ':bt:',
        'Bhutanesisk flagga'
    ],
    '🇧🇻': [
        'Flagga Bouvet Island',
        ':bv:',
        'Flagga: Bouvet Island'
    ],
    '🇧🇼': [
        'Botswanas flagga',
        ':bw:',
        'Batswana Flag'
    ],
    '🇧🇾': [
        'Vitrysslands flagga',
        ':by:',
        'Vitryska flaggan'
    ],
    '🇧🇿': [
        'Flagga av Belize',
        ':bz:',
        'Belizesisk flagga'
    ],
    '🇨🇦': [
        'Kanadas flagga',
        'Kanadensisk flagga',
        ':ca:'
    ],
    '🇨🇨': [
        'Flagga av Cocos (Keeling) öarna',
        ':cc:'
    ],
    '🇨🇩': [
        'Flag of Congo - Kinshasa',
        ':cd:'
    ],
    '🇨🇫': [
        'Centralafrikanska republikens flagga',
        ':cf:',
        'Centralafrikansk flagga'
    ],
    '🇨🇬': [
        'Kongos flagga - Brazzaville',
        ':cg:'
    ],
    '🇨🇭': [
        'Schweiz flagga',
        ':ch:',
        'Rött Kors',
        'Schweizisk flagga'
    ],
    '🇨🇮': [
        'Flagga Elfenbenskusten',
        ':ci:',
        'Flag: Côte d’Ivoire'
    ],
    '🇨🇰': [
        'Flagga av Cook Islands',
        ':ck:',
        'Laga Islander Flagga'
    ],
    '🇨🇱': [
        'Chiles flagga',
        ':cl:',
        'Chiles flagga'
    ],
    '🇨🇲': [
        'Kameruns flagga',
        ':cm:',
        'Kameruns flagga'
    ],
    '🇨🇳': [
        'Flagga av Kina',
        ':cn:',
        'Kinesisk flagga'
    ],
    '🇨🇴': [
        'Colombias flagga',
        ':co:',
        'Colombias flagga'
    ],
    '🇨🇵': [
        'Flagga på Clipperton Island',
        ':cp:',
        'Flagga: Clipperton Island'
    ],
    '🇨🇷': [
        'Costa Ricas flagga',
        ':cr:',
        'Costa Ricas flagga'
    ],
    '🇨🇺': [
        'Kubas flagga',
        ':cu:',
        'Kubansk flagga'
    ],
    '🇨🇻': [
        'Flagga av Kap Verde',
        ':cv:',
        'Kap Verdian flagga'
    ],
    '🇨🇼': [
        'Flagga av Curac ao',
        ':cw:',
        'Curaçaoan Flag'
    ],
    '🇨🇽': [
        'Flagga av julön',
        ':cx:',
        'Julöns flagga'
    ],
    '🇨🇾': [
        'Flagga Cypern',
        ':cy:',
        'Cypriotisk flagga'
    ],
    '🇨🇿': [
        'Flagga av Tjeckiska',
        ':cz:',
        'Tjeckisk flagga'
    ],
    '🇩🇪': [
        'Tysklands flagga',
        ':de:',
        'Deutsch flagga',
        'Tysk flagga'
    ],
    '🇩🇬': [
        'Diego Garcia flagga',
        ':dg:',
        'Flagga: Diego Garcia'
    ],
    '🇩🇯': [
        'Djiboutis flagga',
        ':dj:',
        'Djibouti Flag',
        'Djiboutian Flag'
    ],
    '🇩🇰': [
        'Danmark flagga',
        ':dk:',
        'Dansk flagga'
    ],
    '🇩🇲': [
        'Dominicas flagga',
        ':dm:'
    ],
    '🇩🇴': [
        'Dominikanska republikens flagga',
        ':do:',
        'Dom Rep flagga',
        'Dominikanska flaggan'
    ],
    '🇩🇿': [
        'Algeriets flagga',
        ':dz:',
        'Algerian Flag'
    ],
    '🇪🇦': [
        'Flagga Ceuta & Melilla',
        ':ea:',
        'Flagga Melilla',
        'Flagga av Ceuta',
        'Flag: Ceuta & Melilla'
    ],
    '🇪🇨': [
        'Ecuadors flagga',
        ':ec:',
        'Ecuadorian Flag'
    ],
    '🇪🇪': [
        'Estlands flagga',
        ':ee:',
        'Estnisk flagga'
    ],
    '🇪🇬': [
        'Egyptens flagga',
        ':eg:',
        'Egyptisk flagga'
    ],
    '🇪🇭': [
        'Flagga i Västsahara',
        ':eh:',
        'Västsaharas flagga'
    ],
    '🇪🇷': [
        'Eritreas flagga',
        ':er:',
        'Eritrean Flag'
    ],
    '🇪🇹': [
        'Etiopiens flagga',
        ':et:',
        'Ethiopian Flag'
    ],
    '🇪🇸': [
        'Spanien flagga',
        ':es:',
        'Spansk flagga'
    ],
    '🇫🇮': [
        'Finlands flagga',
        ':fi:',
        'Finsk flagga'
    ],
    '🇫🇯': [
        'Flagga av Fiji',
        ':fj:',
        'Fijian Flag'
    ],
    '🇫🇰': [
        'Falklandsöarnas flagga',
        ':fk:',
        'Falklanders flagga'
    ],
    '🇫🇲': [
        'Mikronesiens flagga',
        ':fm:',
        'Mikronesisk flagga'
    ],
    '🇫🇴': [
        'Färöarnas flagga',
        ':fo:',
        'Faroe Islander Flag'
    ],
    '🇫🇷': [
        'Frankrikes flagga',
        ':fr:',
        'Fransk flagga'
    ],
    '🇬🇦': [
        'Flagga Gabon',
        ':ga:',
        'Gabons flagga'
    ],
    '🇬🇧': [
        'Förenade kungarikets flagga',
        ':gb:',
        'Brittisk flagga',
        'Storbritannien',
        'Kund Jack',
        'Storbritannien'
    ],
    '🏴󠁧󠁢󠁥󠁮󠁧󠁿': [
        'Flag of England',
        ':england:',
        'St Georges Cross',
        'English Flag'
    ],
    '🏴󠁧󠁢󠁷󠁬󠁳󠁿': [
        'Flag of Wales',
        ':wales:',
        'Welsh Flag',
        'Red Dragon',
        'Baner Cymru',
        'Y Ddraig Goch'
    ],
    '🏴󠁧󠁢󠁳󠁣󠁴󠁿': [
        'Flag of Scotland',
        ':scotland:',
        'Scottish Flag',
        'St Andrews Cross',
        'Saltire'
    ],
    '🇬🇩': [
        'Grenadas flagga',
        ':gd:',
        'Grenadiansk flagga'
    ],
    '🇬🇪': [
        'Georgiens flagga',
        ':ge:',
        'Georgisk flagga'
    ],
    '🇬🇫': [
        'Franska Guyanas flagga',
        ':gf:',
        'Franska guineanska flaggan'
    ],
    '🇬🇬': [
        'Flagga Guernsey',
        ':gg:',
        'Guernsey Flag'
    ],
    '🇬🇭': [
        'Flagga Ghana',
        ':gh:',
        'Ghanaiansk flagga'
    ],
    '🇬🇮': [
        'Flagga Gibraltar',
        ':gi:',
        'Gibraltars flagga'
    ],
    '🇬🇱': [
        'Grönlands flagga',
        ':gl:',
        'Greenlandic Flag'
    ],
    '🇬🇲': [
        'Gambias flagga',
        ':gm:',
        'Gambian Flag'
    ],
    '🇬🇳': [
        'Guineas flagga',
        ':gn:',
        'Guinean Flag'
    ],
    '🇬🇵': [
        'Guadeloupes flagga',
        ':gp:',
        'Guadeloupean flagga'
    ],
    '🇬🇶': [
        'Ekvatorialguineas flagga',
        ':gq:',
        'Equatorial Guinean Flag',
        'Equatoguinean flagga'
    ],
    '🇬🇷': [
        'Greklands flagga',
        ':gr:',
        'Grekisk flagga'
    ],
    '🇬🇸': [
        'Flagga Sydgeorgien & Sydsandwichöarna',
        ':gs:'
    ],
    '🇬🇹': [
        'Guatemalas flagga',
        ':gt:',
        'Guatemalan Flag'
    ],
    '🇬🇺': [
        'Flagga Guam',
        ':gu:',
        'Guamaniansk flagga',
        'Chamorro flagga'
    ],
    '🇬🇼': [
        'Guinea-Bissau flagga',
        ':gw:',
        'Guinea-Bissau Flag'
    ],
    '🇬🇾': [
        'Guyana flagga',
        ':gy:',
        'Guyanesisk flagga'
    ],
    '🇭🇰': [
        'Flagga Hongkong SAR Kina',
        ':hk:',
        'Hongkong flagga'
    ],
    '🇭🇲': [
        'Heard & McDonald Islands flagga',
        ':hm:',
        'Flagga: Heard & McDonald Islands'
    ],
    '🇭🇳': [
        'Honduras flagga',
        ':hn:',
        'Honduras flagga'
    ],
    '🇭🇷': [
        'Kroatien flagga',
        ':hr:',
        'Kroatiens flagga'
    ],
    '🇭🇹': [
        'Haiti flagga',
        ':ht:',
        'Haitian Flag'
    ],
    '🇭🇺': [
        'Ungerns flagga',
        ':hu:',
        'Ungersk flagga'
    ],
    '🇮🇨': [
        'Flagga på Kanarieöarna',
        ':ic:'
    ],
    '🇮🇩': [
        'Indonesiens flagga',
        ':id:',
        'Indonesisk flagga'
    ],
    '🇮🇪': [
        'Irlands flagga',
        ':ie:',
        'Irländsk flagga'
    ],
    '🇮🇱': [
        'Israels flagga',
        ':il:',
        'Israelisk flagga'
    ],
    '🇮🇲': [
        'Flagga Isle of Man',
        ':im:',
        'Manx Flag'
    ],
    '🇮🇳': [
        'Indiens flagga',
        ':in:',
        'Indisk flagga'
    ],
    '🇮🇴': [
        'Flagga Brittiska territoriet i Indiska oceanen',
        ':io:',
        'Brittiska territoriet i Indiska oceanen flagga'
    ],
    '🇮🇶': [
        'Iraks flagga',
        ':iq:',
        'Iraqi Flag'
    ],
    '🇮🇷': [
        'Irans flagga',
        ':ir:',
        'Iransk flagga'
    ],
    '🇮🇸': [
        'Islands flagga',
        ':is:',
        'Isländsk flagga'
    ],
    '🇮🇹': [
        'Italiens flagga',
        ':it:',
        'Italiensk flagga'
    ],
    '🇯🇪': [
        'Flagga av Jersey',
        ':je:',
        'Tröjans flagga'
    ],
    '🇯🇲': [
        'Jamaicas flagga',
        ':jm:',
        'Jamaicansk flagga'
    ],
    '🇯🇴': [
        'Jordaniens flagga',
        ':jo:',
        'Jordansk flagga'
    ],
    '🇯🇵': [
        'Japans flagga',
        ':jp:',
        'Japansk flagga'
    ],
    '🇰🇪': [
        'Kenyas flagga',
        ':ke:',
        'Kenyansk flagga'
    ],
    '🇰🇬': [
        'Flagga i Kirgizistan',
        ':kg:',
        'Kyrgyzstani Flag'
    ],
    '🇰🇭': [
        'Kambodjas flagga',
        ':kh:',
        'Kambodjas flagga'
    ],
    '🇰🇮': [
        'Flagga av Kiribati',
        ':ki:',
        'I-Kiribati flagga'
    ],
    '🇰🇲': [
        'Flagga Komorerna',
        ':km:',
        'Komorernas flagga'
    ],
    '🇰🇳': [
        'Saint Kitts & Nevis flagga',
        ':kn:'
    ],
    '🇰🇵': [
        'Nordkoreas flagga',
        ':kp:',
        'Nordkoreansk flagga'
    ],
    '🇰🇷': [
        'Sydkoreas flagga',
        ':kr:',
        'Sydkoreansk flagga'
    ],
    '🇰🇼': [
        'Kuwaits flagga',
        ':kw:',
        'Kuwaiti Flag'
    ],
    '🇰🇾': [
        'Flagga Caymanöarna',
        ':ky:',
        'Caymansk flagga'
    ],
    '🇰🇿': [
        'Kazakstan flagga',
        ':kz:',
        'Kazakhstani Flag',
        'Kazakh Flag'
    ],
    '🇱🇦': [
        'Laos flagga',
        ':la:',
        'Laotisk flagga',
        'Lao flagga'
    ],
    '🇱🇧': [
        'Libanons flagga',
        ':lb:',
        'Libanesisk flagga'
    ],
    '🇱🇨': [
        'Saint Lucia flagga',
        ':lc:'
    ],
    '🇱🇮': [
        'Liechtensteins flagga',
        ':lt:',
        'Liechtensteiner flagga'
    ],
    '🇱🇰': [
        'Sri Lankas flagga',
        ':lk:',
        'Sri Lankas flagga'
    ],
    '🇱🇷': [
        'Liberias flagga',
        ':lr:',
        'Liberias flagga'
    ],
    '🇱🇸': [
        'Flag of Lesotho',
        ':ls:',
        'Basotho Flag'
    ],
    '🇱🇹': [
        'Litauens flagga',
        ':lt:',
        'Litauisk flagga'
    ],
    '🇱🇺': [
        'Luxemburg flagga',
        ':lu:',
        'Luxemburgs flagga'
    ],
    '🇱🇻': [
        'Lettlands flagga',
        ':lv:',
        'Lettiska flagga'
    ],
    '🇱🇾': [
        'Libyens flagga',
        ':ly:',
        'Libyens flagga'
    ],
    '🇲🇦': [
        'Flagga Marocko',
        ':ma:',
        'Marockansk flagga'
    ],
    '🇲🇨': [
        'Flagga Monaco',
        ':mc:',
        'Flagga Mone<unk> gasque'
    ],
    '🇲🇩': [
        'Moldaviens flagga',
        ':md:',
        'Moldavisk flagga'
    ],
    '🇲🇪': [
        'Montenegros flagga',
        ':me:',
        'Montenegrins flagga'
    ],
    '🇲🇫': [
        'Saint Martins flagga',
        ':mf:',
        'Flag: St. Martin'
    ],
    '🇲🇬': [
        'Madagaskars flagga',
        ':mg:',
        'Madagascan Flag'
    ],
    '🇲🇭': [
        'Flagga på Marshallöarna',
        ':mh:',
        'Marshallesisk flagga'
    ],
    '🇲🇰': [
        'Makedoniens flagga',
        ':mk:',
        'Makedonsk flagga'
    ],
    '🇲🇱': [
        'Malis flagga',
        ':ml:',
        'Maliansk flagga'
    ],
    '🇲🇲': [
        'Flagga i Myanmar (Burma)',
        ':mm:',
        'Myanmaresisk flagga',
        'Flagga för Burma',
        'Burmas flagga'
    ],
    '🇲🇳': [
        'Mongoliets flagga',
        ':mn:',
        'Mongolisk flagga'
    ],
    '🇲🇴': [
        'Macau Sar Kinas flagga',
        ':mo:',
        'Macanesisk flagga'
    ],
    '🇲🇵': [
        'Flagga på Nordmarianerna',
        ':mp:',
        'Mikronesisk flagga'
    ],
    '🇲🇶': [
        'Flagga av Martinique',
        ':mq:',
        'Orm flagga av Martinique',
        'Martiniquais flagga'
    ],
    '🇲🇷': [
        'Mauretaniens flagga',
        ':mr:',
        'Mauretaniens flagga'
    ],
    '🇲🇸': [
        'Flag of Montserrat',
        ':ms:',
        'Montserratian Flag'
    ],
    '🇲🇹': [
        'Maltas flagga',
        ':mt:',
        'Maltese Flag'
    ],
    '🇲🇺': [
        'Flag of Mauritius',
        ':mu:',
        'Mauritisk flagga'
    ],
    '🇲🇻': [
        'Flagga av Maldiverna',
        ':mv:',
        'Maldivisk flagga'
    ],
    '🇲🇼': [
        'Malawis flagga',
        ':mw:',
        'Malawian Flag'
    ],
    '🇲🇽': [
        'Mexikos flagga',
        ':mx:',
        'Mexikansk flagga'
    ],
    '🇲🇾': [
        'Flagga i Malaysia',
        ':my:',
        'Malaysian Flag'
    ],
    '🇲🇿': [
        'Moçambiques flagga',
        ':mz:',
        'Moçambique flagga'
    ],
    '🇳🇦': [
        'Namibias flagga',
        ':na:',
        'Namibian Flag'
    ],
    '🇳🇨': [
        'Nya Kaledoniens flagga',
        ':nc:',
        'Ny Kaledonisk flagga'
    ],
    '🇳🇪': [
        'Nigers flagga',
        ':ne:',
        'Nigeriens flagga'
    ],
    '🇳🇫': [
        'Flagga på Norfolk Island',
        ':nf:',
        'Norfolk Island flagga'
    ],
    '🇳🇬': [
        'Nigerias flagga',
        ':ng:',
        'Nigeriansk flagga'
    ],
    '🇳🇮': [
        'Flag of Nicaragua',
        ':ni:',
        'Nicaraguan Flag'
    ],
    '🇳🇱': [
        'Nederländernas flagga',
        ':nl:',
        'Nederländsk flagga',
        'Holland'
    ],
    '🇳🇴': [
        'Norges flagga',
        ':no:',
        'Norska flaggan'
    ],
    '🇳🇵': [
        'Nepals flagga',
        ':np:',
        'Nepalesisk flagga'
    ],
    '🇳🇷': [
        'Flagga av Nauru',
        ':nr:',
        'Nauruan Flag'
    ],
    '🇳🇺': [
        'Flagga av Niue',
        ':nu:',
        'Niuean Flag'
    ],
    '🇳🇿': [
        'Nya Zeelands flagga',
        ':nz:',
        'Kiwi flagga'
    ],
    '🇴🇲': [
        'Omans flagga',
        ':om:',
        'Omani flagga'
    ],
    '🇵🇦': [
        'Panamas flagga',
        ':pa:',
        'Panamas flagga'
    ],
    '🇵🇪': [
        'Flagga i Peru',
        ':pe:',
        'Peruansk flagga'
    ],
    '🇵🇫': [
        'Flagga Franska Polynesien',
        ':pf:',
        'Franska polynesiska flaggan'
    ],
    '🇵🇬': [
        'Papua Nya Guineas flagga',
        ':pg:',
        'PNG flagga',
        'Papua New Guinean Flag'
    ],
    '🇵🇭': [
        'Filippinernas flagga',
        ':ph:'
    ],
    '🇵🇰': [
        'Pakistans flagga',
        ':pk:',
        'Pakistansk flagga'
    ],
    '🇵🇱': [
        'Polens flagga',
        ':pl:',
        'Polsk flagga'
    ],
    '🇵🇲': [
        'Saint Pierre & Miquelon flagga',
        ':pm:'
    ],
    '🇵🇳': [
        'Flagga av Pitcairn',
        ':pn:'
    ],
    '🇵🇷': [
        'Flagga i Puerto Rico',
        ':pr:',
        'Puerto Ricans flagga'
    ],
    '🇵🇸': [
        'De palestinska territoriernas flagga',
        ':ps:',
        'Palestine'
    ],
    '🇵🇹': [
        'Portugals flagga',
        ':pt:',
        'Portugisisk flagga'
    ],
    '🇵🇼': [
        'Palau flagga',
        ':pw:',
        'Palauansk flagga'
    ],
    '🇵🇾': [
        'Paraguays flagga',
        ':py:',
        'Paraguayan Flag'
    ],
    '🇶🇦': [
        'Flagga av Qatar',
        ':qa:',
        'Qatari flagga'
    ],
    '🇷🇪': [
        'Återföreningens flagga',
        ':re:',
        'Fackföreningens flagga'
    ],
    '🇷🇴': [
        'Rumäniens flagga',
        ':ro:',
        'Rumänsk flagga'
    ],
    '🇷🇸': [
        'Serbiens flagga',
        ':rs:',
        'Serbisk flagga'
    ],
    '🇷🇺': [
        'Rysslands flagga',
        ':ru:',
        'Rysk flagga'
    ],
    '🇷🇼': [
        'Flag of Rwanda',
        ':rw:',
        'Rwandan Flag'
    ],
    '🇸🇦': [
        'Saudiarabiens flagga',
        ':sa:',
        'Saudiarabiens flagga'
    ],
    '🇸🇧': [
        'Salomonöarnas flagga',
        ':sb:',
        'Solomon Islander Flagga'
    ],
    '🇸🇨': [
        'Flagga Seychellerna',
        ':sc:',
        'Seychellois Flag'
    ],
    '🇸🇩': [
        'Sudans flagga',
        ':sd:',
        'Sudanese Flag'
    ],
    '🇸🇪': [
        'Sveriges flagga',
        ':se:',
        'Svensk flagga'
    ],
    '🇸🇬': [
        'Singapores flagga',
        ':sg:',
        'Singaporeansk flagga'
    ],
    '🇸🇭': [
        'Saint Helena flagga',
        ':sh:'
    ],
    '🇸🇮': [
        'Sloveniens flagga',
        ':si:',
        'Slovenska flaggan'
    ],
    '🇸🇯': [
        'Flagga Svalbard & Jan Mayen',
        ':sj:'
    ],
    '🇸🇰': [
        'Slovakiens flagga',
        ':sk:',
        'Slovakiska Flagga',
        'Slovakian Flag'
    ],
    '🇸🇱': [
        'Flagga Sierra Leone',
        ':sl:',
        'Sierra Leonean Flag'
    ],
    '🇸🇲': [
        'San Marinos flagga',
        ':sm:',
        'Sammarinesisk flagga'
    ],
    '🇸🇳': [
        'Flagga av Senegal',
        ':sn:',
        'Sengalesisk flagga'
    ],
    '🇸🇴': [
        'Somalias flagga',
        ':so:',
        'Somalian Flag'
    ],
    '🇸🇷': [
        'Surinames flagga',
        ':sr:',
        'Surinamer flagga'
    ],
    '🇸🇸': [
        'Flagga i Sydsudan',
        ':ss:',
        'Sydsudanesisk flagga'
    ],
    '🇸🇹': [
        'Flagga Sa<unk> o Tome<unk> & Pri<unk> ncipe',
        ':st:'
    ],
    '🇸🇻': [
        'El Salvadors flagga',
        ':sv:',
        'El Salvadoras flagga'
    ],
    '🇸🇽': [
        'Flagga av Sint Maarten',
        ':sx:'
    ],
    '🇸🇾': [
        'Syriens flagga',
        ':sy:',
        'Syrisk flagga'
    ],
    '🇸🇿': [
        'Flagga av Swaziland',
        ':sz:',
        'Eswatini flagga'
    ],
    '🇹🇦': [
        'Flag of Tristan Da Cunha',
        ':ta:'
    ],
    '🇹🇨': [
        'Flagga av turkar & Caicos öarna',
        ':tc:'
    ],
    '🇹🇩': [
        'Flagga Tchad',
        ':td:',
        'Tchadisk flagga'
    ],
    '🇹🇫': [
        'Flagga franska sydliga territorier',
        ':tf:',
        'Franska sydliga länderna flagga'
    ],
    '🇹🇬': [
        'Togos flagga',
        ':tg:',
        'Togolese Flag'
    ],
    '🇹🇭': [
        'Thailands flagga',
        ':th:',
        'Thailändsk flagga'
    ],
    '🇹🇯': [
        'Tadzjikistan flagga',
        ':tj:',
        'Tadzjiks flagga'
    ],
    '🇹🇰': [
        'Flagga Tokelau',
        ':tk:',
        'Tokelauisk flagga'
    ],
    '🇹🇱': [
        'Flagga av Östtimor',
        ':tl:',
        'Östtimors flagga',
        'Östtimors flagga'
    ],
    '🇹🇲': [
        'Turkmenistans flagga',
        ':tm:',
        'Turkmen Flag'
    ],
    '🇹🇳': [
        'Flagga Tunisien',
        ':tn:',
        'Tunisisk flagga'
    ],
    '🇹🇴': [
        'Tonga flagga',
        ':to:',
        'Tongan Flag'
    ],
    '🇹🇷': [
        'Turkiets flagga',
        ':tr:',
        'Turkisk flagga'
    ],
    '🇹🇹': [
        'Trinidad & Tobago flagga',
        ':tt:'
    ],
    '🇹🇻': [
        'Tuvalu flagga',
        ':tv:',
        'Tuvaluans flagga'
    ],
    '🇹🇼': [
        'Taiwan flagga',
        ':tw:',
        'Taiwanesisk flagga'
    ],
    '🇹🇿': [
        'Tanzanias flagga',
        ':tz:',
        'Tanzanian Flag'
    ],
    '🇺🇦': [
        'Ukrainas flagga',
        ':ua:',
        'Ukrainska flaggan'
    ],
    '🇺🇬': [
        'Ugandas flagga',
        ':ug:',
        'Ugandas flagga'
    ],
    '🇺🇲': [
        'Flagga: USA: s yttre öar',
        ':um:'
    ],
    '🇺🇸': [
        'Flagga i USA',
        ':us:',
        'Amerikansk flagga',
        'USA flagga'
    ],
    '🇺🇾': [
        'Flag of Uruguay',
        ':uy:',
        'Uruguayan Flag'
    ],
    '🇺🇿': [
        'Flag of Uzbekistan',
        ':uz:',
        'Uzbekistani Flag',
        'Uzbek Flag'
    ],
    '🇻🇦': [
        'Heliga stolens flagga',
        ':va:',
        'Vanticanien flagga'
    ],
    '🇻🇨': [
        'Saint Vincent & Grenadinernas flagga',
        ':vc:'
    ],
    '🇻🇪': [
        'Venezuelas flagga',
        ':ve:',
        'Venezuelas flagga'
    ],
    '🇻🇬': [
        'Brittiska Jungfruöarnas flagga',
        ':vg:',
        'Brittiska Jungfrun Islander flagga'
    ],
    '🇻🇮': [
        'Flagga av Amerikanska Jungfruöarna',
        ':vi:',
        'Amerikanska Jungfrun Islander Flagga'
    ],
    '🇻🇳': [
        'Vietnams flagga',
        ':vn:',
        'Vietnamesisk flagga'
    ],
    '🇻🇺': [
        'Flag of Vanuatu',
        ':vu:',
        'Ni-Vanuatu Flag'
    ],
    '🇼🇫': [
        'Flagga av Wallis & Futuna',
        ':wf:'
    ],
    '🇼🇸': [
        'Flagga Samoa',
        ':ws:',
        'Samoan Flag'
    ],
    '🇽🇰': [
        'Kosovos flagga',
        ':xk:',
        'Kosovar Flag'
    ],
    '🇾🇪': [
        'Jemens flagga',
        ':ye:',
        'Jemens flagga'
    ],
    '🇾🇹': [
        'Flagga av Mayotte',
        ':yt:',
        'Mayotte flagga'
    ],
    '🇿🇦': [
        'Sydafrikas flagga',
        ':za:',
        'Sydafrikansk flagga'
    ],
    '🇿🇲': [
        'Zambias flagga',
        ':zm:',
        'Zambian Flag'
    ],
    '🇿🇼': [
        'Zimbabwes flagga',
        ':zw:',
        'Zimbabwes flagga',
        'Zim flagga'
    ]
};
/*sports*/
emojis_language[lang][8] = {
    '🧗{{skin_tone}}‍♂️': [
        'Man klättrar',
        ':man_climbing:',
        ':climbing:',
        'Manlig Bergsklättrare',
        'Man klättrare',
        ':man:'
    ],
    '🧗{{skin_tone}}‍♀️': [
        'Klättring av kvinna',
        ':woman_climbing:',
        ':climbing:',
        'Kvinnlig bergsklättrare',
        'Kvinna Klättrare',
        ':woman:'
    ],
    '🧗{{skin_tone}}': [
        'Person Klättring',
        ':person_climbing:',
        ':climbing:',
        'Person bergsklättrare',
        'Person klättrare',
        ':person:'
    ],
    '🏇{{skin_tone}}': [
        'Häst Racing',
        ':horse_racing:',
        'Häst Lopp',
        'Jockey'
    ],
    '⛷{{skin_tone}}‍️': [
        'Skidåkare',
        ':skier:'
    ],
    '🏂{{skin_tone}}': [
        'Snowboarder',
        ':snowboarder:'
    ],
    '🏌️{{skin_tone}}‍♂️': [
        'Man Golfer',
        ':man_golfer:',
        ':golfer:',
        ':man:'
    ],
    '🏌️{{skin_tone}}‍♀️': [
        'Kvinna Golfare',
        ':woman_golfer:',
        ':golfer:',
        ':woman:'
    ],
    '🏌️{{skin_tone}}': [
        'Person Golfare',
        ':person_golfer:',
        ':golfer:',
        ':person:'
    ],
    '🏄{{skin_tone}}‍♂️': [
        'Man Surfer',
        ':man_surfer:',
        ':surfer:',
        ':man:'
    ],
    '🏄{{skin_tone}}‍♀️': [
        'Kvinna Surfer',
        ':woman_surfer:',
        ':surfer:',
        ':woman:'
    ],
    '🏄{{skin_tone}}': [
        'Person Surfer',
        ':person_surfer:',
        ':surfer:',
        ':person:'
    ],
    '🚣{{skin_tone}}‍♂️': [
        'Man Rodd Båt',
        ':man_rowing_boat:',
        ':rowing_boat:',
        ':man:'
    ],
    '🚣{{skin_tone}}‍♀️': [
        'Kvinna Rodd Båt',
        ':woman_rowing_boat:',
        ':rowing_boat:',
        ':woman:'
    ],
    '🚣{{skin_tone}}': [
        'Person Rodd Båt',
        ':person_rowing_boat:',
        ':rowing_boat:',
        ':person:'
    ],
    '🏊{{skin_tone}}‍♂️': [
        'Man simmar',
        ':man_swimming:',
        ':swimming:',
        'Man simmare',
        ':man:'
    ],
    '🏊{{skin_tone}}‍♀️': [
        'Kvinna simning',
        ':woman_swimming:',
        ':swimming:',
        'Kvinna simmare',
        ':woman:'
    ],
    '🏊{{skin_tone}}': [
        'Person simning',
        ':person_swimming:',
        ':swimming:',
        'Person simmare',
        ':person:'
    ],
    '⛹{{skin_tone}}‍️‍♂️': [
        'Man studsar boll',
        ':man_bouncing_ball:',
        ':bouncing_ball:',
        'Man Basket Player',
        ':man:'
    ],
    '⛹️{{skin_tone}}‍♀️': [
        'Kvinna studsar boll',
        ':woman_bouncing_ball:',
        ':boucing_ball:',
        'Kvinna Basket Spelare',
        ':woman:'
    ],
    '⛹️{{skin_tone}}': [
        'Person studsar boll',
        ':person_bouncing_ball:',
        ':boucing_ball:',
        'Person Basket Spelare',
        ':person:'
    ],
    '🏋️{{skin_tone}}‍♂️': [
        'Man lyfta vikter',
        ':man_lifting_weights:',
        ':lifting_weights:',
        'Man tyngdlyftare',
        ':man:'
    ],
    '🏋️{{skin_tone}}‍♀️': [
        'Kvinnliga lyftvikter',
        ':woman_lifting_weights:',
        ':lifting_weights:',
        'Kvinna Styrkelyftare',
        ':woman:'
    ],
    '🏋️{{skin_tone}}': [
        'Personlyft Vikter',
        ':person_lifting_weights:',
        ':lifting_weights:',
        'Person Styrkelyft',
        ':person:'
    ],
    '🚴{{skin_tone}}‍♂️': [
        'Man Cykling',
        ':man_biking:',
        ':biking:',
        'Man Cyklist',
        'Manlig Cyklist',
        ':man:'
    ],
    '🚴{{skin_tone}}‍♀️': [
        'Kvinna Cykling',
        ':woman_biking:',
        ':biking:',
        'Kvinna Cyklist',
        'Kvinnlig Cyklist',
        ':woman:'
    ],
    '🚴{{skin_tone}}': [
        'Person Cykling',
        ':person_biking:',
        ':biking:',
        'Person Cyklist',
        'Person Cyklist',
        ':person:'
    ],
    '🚵{{skin_tone}}‍♂️': [
        'Man Mountainbike',
        ':man_mountain_bike:',
        ':mountain_bike:',
        'Man Mountain Biker',
        ':man:'
    ],
    '🚵{{skin_tone}}‍♀️': [
        'Kvinnlig mountainbike',
        ':woman_mountain_bike:',
        ':mountain_bike:',
        'Kvinna Mountain Biker',
        ':woman:'
    ],
    '🚵{{skin_tone}}': [
        'Person Mountainbike',
        ':person_mountain_bike:',
        ':mountain_bike:',
        'Person Mountain Biker',
        ':person:'
    ],
    '🤸{{skin_tone}}‍♂️': [
        'Mannen kartrullning',
        ':man_cartwheeling:',
        ':cartwheeling:',
        'Man gör Cartwheel',
        ':man:'
    ],
    '🤸{{skin_tone}}‍♀️': [
        'Kvinnlig kartrullning',
        ':woman_cartwheeling:',
        ':cartwheeling:',
        'Kvinna gör Cartwheel',
        ':woman:'
    ],
    '🤸{{skin_tone}}': [
        'Person kartrullning',
        ':person_cartwheeling:',
        ':cartwheeling:',
        'Person gör Cartwheel',
        ':person:'
    ],
    '🤼‍♂️': [
        'Män brottning',
        ':men_wrestling:',
        ':wrestling:',
        'Brottning',
        'Brottare',
        ':man:'
    ],
    '🤼‍♀️': [
        'Kvinnor brottning',
        ':women_wrestling:',
        ':wrestling:',
        'Brottning',
        'Brottare',
        ':woman:'
    ],
    '🤼': [
        'Folk brottas',
        ':people_wrestling:',
        ':wrestling:',
        'Brottning',
        'Brottare',
        ':person:'
    ],
    '🤽{{skin_tone}}‍♂️': [
        'Man spelar vatten Polo',
        ':man_playing_water_polo:',
        ':playing_water_polo:',
        ':man:'
    ],
    '🤽{{skin_tone}}‍♀️': [
        'Kvinna spelar vatten Polo',
        ':woman_playing_water_polo:',
        ':playing_water_polo:',
        ':woman:'
    ],
    '🤽{{skin_tone}}': [
        'Person spelar vatten Polo',
        ':person_playing_water_polo:',
        ':playing_water_polo:',
        ':person:'
    ],
    '🤾{{skin_tone}}‍♂️': [
        'Man spelar handboll',
        ':man_playing_handball:',
        ':playing_handball:',
        ':man:'
    ],
    '🤾{{skin_tone}}‍♀️': [
        'Kvinna som spelar handboll',
        ':woman_playing_handball:',
        ':playing_handball:',
        ':woman:'
    ],
    '🤾{{skin_tone}}': [
        'Person spelar handboll',
        ':person_playing_handball:',
        ':playing_handball:',
        ':person:'
    ],
    '🤹{{skin_tone}}‍♂️': [
        'Man Jonglera',
        ':man_juggling:',
        ':juggling:',
        'Manlig Jugglare',
        ':man:'
    ],
    '🤹{{skin_tone}}‍♀️': [
        'Kvinna Jonglerar',
        ':woman_juggling:',
        ':juggling:',
        'Kvinnlig Jugglare',
        ':woman:'
    ],
    '🤹{{skin_tone}}': [
        'Person Jonglering',
        ':person_juggling:',
        ':juggling:',
        'Person Jongler',
        ':person:'
    ],
    '🧘{{skin_tone}}‍♂️': [
        'Man i Lotus position',
        ':man_lotus_position:',
        ':lotus_position:',
        'Meditation',
        'Zen',
        'Korsben',
        'Yoga',
        ':man:'
    ],
    '🧘{{skin_tone}}‍♀️': [
        'Kvinna i Lotus position',
        ':woman_lotus_position:',
        ':lotus_position:',
        'Meditation',
        'Zen',
        'Korsben',
        'Yoga',
        ':woman:'
    ],
    '🧘{{skin_tone}}': [
        'Person i Lotus position',
        ':person_lotus:_position',
        ':lotus_position:',
        'Meditation',
        'Zen',
        'Korsben',
        'Yoga',
        ':person:'
    ],
    '🏃{{skin_tone}}‍♂️': [
        'Mannen springer',
        ':man_running:',
        ':running:',
        ':man:'
    ],
    '🏃{{skin_tone}}‍♀️': [
        'Kvinna springer',
        ':woman_running:',
        ':running:',
        ':woman:'
    ],
    '🏃{{skin_tone}}': [
        'Person kör',
        ':person_running:',
        ':running:',
        ':person:'
    ],
    '🕺{{skin_tone}}': [
        'Man dansar',
        ':man_dancing:',
        ':dancing:',
        ':man:'
    ],
    '💃{{skin_tone}}': [
        'Kvinna dansar',
        ':woman_dancing:',
        ':dancing:',
        ':woman:'
    ],
    '🤺': [
        'Person Fäktning',
        ':person_fencing:',
        'Fansare',
        ':fencing:'
    ],
    '🏆': [
        'Trofé',
        ':trophy:',
        'Mästerskap',
        'Vinnare',
        ':gold:',
        ':yellow:'
    ],
    '🏅': [
        'Sport medalj',
        ':sports_medal:',
        ':medal:',
        ':gold:',
        ':yellow:'
    ],
    '🥇': [
        '1:a plats medalj',
        ':first_place_medal:',
        ':gold_medal:',
        'Första plats medalj',
        'Guldmedalj',
        ':yellow:',
        ':gold:'
    ],
    '🥈': [
        '2:a plats medalj',
        ':second_place_medal:',
        ':silver_medal:',
        'Andra plats medalj',
        'Silvermedalj',
        ':gray:',
        ':grey:',
        ':silver:'
    ],
    '🥉': [
        '3:e plats medalj',
        ':third_place_medal:',
        ':bronze_medal:',
        'Tredje plats medalj',
        'Brons medalj',
        ':brown:',
        ':bronze:'
    ],
    '⚽': [
        'Fotboll',
        ':football:',
        'Fotboll',
        ':white:',
        ':black:'
    ],
    '⚾': [
        'Baseboll',
        ':baseball:',
        'Softboll',
        ':white:'
    ],
    '🥎': [
        'Softboll',
        ':softball:',
        ':yellow:'
    ],
    '🏀': [
        'Basket',
        ':basketball:',
        ':orange:',
        'Basket och Hoop'
    ],
    '🏐': [
        'Volleyboll',
        ':volleyball:',
        ':white:'
    ],
    '🏈': [
        'Amerikansk fotboll',
        ':american_football:',
        'Fotboll',
        'Gridiron',
        'Superskål',
        ':brown:'
    ],
    '🏉': [
        'Fotboll i rugby',
        ':rugby:',
        'Fotboll',
        'Liga',
        'Rugby',
        'Kund'
    ],
    '🎾': [
        'Tennis',
        ':tennis:',
        ':ball:',
        'Bollen',
        'Racket',
        'Reglering',
        ':yellow:'
    ],
    '🥏': [
        'Flygande disk',
        ':flying_disk:',
        'Frisbee'
    ],
    '🎳': [
        'Bowling',
        ':bowling:',
        'Nålar',
        'Käglor',
        'Tio Pin Bowling'
    ],
    '🏏': [
        'Cricket',
        ':cricket:',
        'Fladdermus',
        'Bollen'
    ],
    '🏑': [
        'Landhockey',
        ':field_hockey:',
        'Bollen',
        'Klistra'
    ],
    '🏒': [
        'Ishockey',
        ':ice_hockey:',
        'Bollen',
        'Klistra'
    ],
    '🥍': [
        'Lacrosse',
        ':lacrosse:',
        'Bollen',
        'Klistra',
        ':red:'
    ],
    '🏓': [
        'Ping Pong',
        ':ping_pong:',
        ':table_tennis:',
        'Bordtennis',
        'Bollen',
        'Paddle'
    ],
    '🏸': [
        'Badminton',
        ':badminton:',
        'Shuttleock',
        'Reglering'
    ],
    '🥊': [
        'Boxningshandske',
        ':boxing_glove:',
        ':red:'
    ],
    '🥋': [
        'Kampsport Uniform',
        ':martial_arts_uniform:',
        ':judo:',
        ':karate:',
        ':kung_fu:',
        'Jude',
        'Karate',
        'Kung fu'
    ],
    '⛳': [
        'Flagga i hål',
        ':flag_in_hole:',
        ':golf_flag:',
        'Golfflagga'
    ],
    '⛸️': [
        'Skridskoåkning',
        ':ice_skate:',
        'Skridskoåkning'
    ],
    '🎣': [
        'Fiske',
        ':fishing:',
        'Stång',
        'Fisk',
        'Fiske Rod'
    ],
    '🎽': [
        'Löpande tröja',
        ':running_shirt:',
        'Singel',
        'Kasta'
    ],
    '🎿': [
        'Skidor',
        ':skis:',
        'Skidåkning',
        'Boot'
    ],
    '🛷': [
        'Släppt',
        ':sled:'
    ],
    '🥌': [
        'Curling Sten',
        ':curling_stone:'
    ],
    '🎯': [
        'Direkt träff',
        ':direct_hit:',
        'Bågskytte',
        'Bullseye',
        'Dart'
    ],
    '🎱': [
        'Pool 8 Ball',
        ':pool_8_ball:',
        'Cue Ball',
        'Snooker',
        'Biljard',
        ':black:'
    ],
    '🎮': [
        'Video Game Controller',
        ':video_game_controller:',
        ':playstation:',
        ':xbox:',
        'Playstation',
        'Xbox',
        'Gamepad',
        'Wii U'
    ],
    '♟️': [
        'Svart Schackbonde',
        ':black_chess_pawn:',
        ':black:'
    ],
    '🏹': [
        'Pilbåge och pilar',
        ':arch:',
        'Båge'
    ],
    '🥅': [
        'Mål Netto',
        ':goal_net:'
    ],
    '🀄': [
        'Mahjong Röd Drake',
        ':mahjong:',
        'Mahjong',
        'Mahjong Tile',
        '中',
        'Mahjong kakel röd drake'
    ],
    '🎴': [
        'Blomma spelkort',
        ':flower_playing_cards:',
        'Kortlek på kort',
        'Hanafuda',
        'Hwatu',
        'Spelar kort'
    ]
};
/*travel and places*/
emojis_language[lang][9] = {
    '🚂': [
        'Ånglok',
        ':steam_train:',
        'Ånga tåg',
        'Järnvägslok'
    ],
    '🚃': [
        'Järnvägs bil',
        ':railway_car:',
        'Järnväg',
        'Järnväg bil',
        'Järnvägstransport',
        'Järnvägsvagn'
    ],
    '🚄': [
        'Hastighetståg',
        ':high_speed_train:'
    ],
    '🚅': [
        'Bullet Tåg',
        ':bullet_train:',
        'Shinkansen',
        'Höghastighetståg med Bullet Nose'
    ],
    '🚆': [
        'Tåg',
        ':train:'
    ],
    '🚇': [
        'Underjordisk',
        ':underground:',
        'Tub',
        'Metro',
        'Tunnelbana'
    ],
    '🚈': [
        'Lätt räls',
        ':light_rail:',
        'Tåg'
    ],
    '🚊': [
        'Spårvagn',
        ':tram:'
    ],
    '🚝': [
        'Monorail',
        ':monorail:',
        'Tåg'
    ],
    '🚞': [
        'Mountain Railway',
        ':mountain_railway:',
        'Funicular',
        'Tåg och berg'
    ],
    '🚋': [
        'Spårvagn Bil',
        ':tram_car:'
    ],
    '🚌': [
        'Buss',
        ':bus:',
        'Tränare'
    ],
    '🚍': [
        'Pågående buss',
        ':front_of_bus:',
        'Framsidan av bussen'
    ],
    '🚎': [
        'Trolleybus',
        ':trolleybus:',
        'Elektrisk buss'
    ],
    '🚐': [
        'Minibus',
        ':minibus:',
        'Minivan',
        'Människa-Mover'
    ],
    '🚑': [
        'Ambulans',
        ':ambulance:'
    ],
    '🚒': [
        'Eld Motor',
        ':fire_engine:',
        'Eld Avdelning',
        'Eld Lastbil'
    ],
    '🚓': [
        'Polis bil',
        ':police_car:',
        'Cop bil',
        'Sida av polisbil'
    ],
    '🚔': [
        'Pågående polisbil',
        ':front_of_police_car:',
        'Front of Police Car',
        'Cop bil'
    ],
    '🚕': [
        'Taxi',
        ':taxi:',
        'New York Taxi',
        'Side av Taxi'
    ],
    '🚖': [
        'Taxi',
        ':front_of_taxi:',
        'Pågående taxi',
        'Framsidan av taxin'
    ],
    '🚗': [
        'Bil',
        ':car:',
        'Röd bil',
        'Sida av Bil',
        'Bil'
    ],
    '🚘': [
        'Oncoming Automobile',
        ':front_of_car:',
        'Röd bil',
        'Framsidan av bilen'
    ],
    '🚚': [
        'Leverans lastbil',
        ':lorry:',
        'Lastbil'
    ],
    '🚛': [
        'Ledad Lastbil',
        ':articulated_lorry:',
        'Grön lastbil'
    ],
    '🚜': [
        'Traktor',
        ':tractor:',
        'Gård'
    ],
    '🛻': [
        'Hämtas lastbil',
        ':pickup_truck:'
    ],
    '🏎️': [
        'Racing Bil',
        ':racing_car:',
        'F1',
        'Formel En',
        'Race Bil'
    ],
    '🏍️': [
        'Motorcykel',
        ':motorbike:',
        'Motorcykel'
    ],
    '🛵': [
        'Motor scooter',
        ':motor_scooter:',
        'Vespa',
        'Motor cykel',
        'Motor cykel'
    ],
    '🛺': [
        'Auto Rickshaw',
        ':auto_rickshaw:',
        'Tuk Tuk'
    ],
    '🚲': [
        'Cykel',
        ':bike:',
        'Cykel'
    ],
    '🛴': [
        'Sparka Scooter',
        ':kick_scooter:'
    ],
    '⛵': [
        'Segelbåt',
        ':sailboat:',
        'Dinghy',
        'Segling'
    ],
    '🚤': [
        'Hastighetsbåt',
        ':speedboat:',
        'Motorbåt',
        'Strömbåt'
    ],
    '🛳️': [
        'Passagerarfartyg',
        ':passenger_ship:'
    ],
    '⛴️': [
        'Färja',
        ':ferry:'
    ],
    '🛥️': [
        'Motorbåt',
        ':motor_boat:'
    ],
    '🚢': [
        'Kryssningsfartyg',
        ':cruise_ship:'
    ],
    '✈️': [
        'Flygplan',
        ':airplane:',
        'Aeroplane'
    ],
    '🛩️': [
        'Liten flygplan',
        ':small_airplane:',
        'Liten flygplan'
    ],
    '🚁': [
        'Helikopter',
        ':helicopter:'
    ],
    '🚟': [
        'Upphängning Järnväg',
        ':suspension_railway:'
    ],
    '🚠': [
        'Bergskablar',
        ':mountain_cableway:'
    ],
    '🚡': [
        'Flygbana',
        ':aerial_tramway:',
        'Kabelbil',
        'Gondola',
        'Linbana'
    ],
    '🛰️': [
        'Satellit',
        ':satellite:'
    ],
    '🚀': [
        'Raket',
        ':rocket:',
        'Rymd Shuttle'
    ],
    '🛸': [
        'Flygande fat',
        ':flying_saucer:',
        'UFO'
    ],
    '🚉': [
        'Tågstation',
        ':train_station:',
        'Tåg Plattform'
    ],
    '🚏': [
        'Busshållplats',
        ':bus_stop:'
    ],
    '🛣️': [
        'Motorväg',
        ':motorway:',
        'Väg',
        'Motorväg',
        'Interstatera'
    ],
    '🛤️': [
        'Järnvägs spår',
        ':railway_track:'
    ],
    '🛫': [
        'Flygplan Avresa',
        ':airplane_departure:',
        'Tar av'
    ],
    '🛬': [
        'Flygplan ankomst',
        ':airplane_arrival:',
        'Flygplan anländer',
        'Landning'
    ],
    '🗾': [
        'Karta över Japan',
        ':map_of_japan:'
    ],
    '⛰️': [
        'Berg',
        ':mountain:'
    ],
    '🏔️': [
        'Snö Capped Mountain',
        ':snow_capped_mountain:'
    ],
    '🌋': [
        'Vulkanen',
        ':volcano:'
    ],
    '🗻': [
        'Montera Fuji',
        ':mount_fuji:',
        'Fuji-san'
    ],
    '🏕️': [
        'Camping',
        ':camping:',
        'Campingplats'
    ],
    '🏖️': [
        'Strand med paraply',
        ':beach_with_umbrella:'
    ],
    '🏜️': [
        'Desert',
        ':desert:'
    ],
    '🏝️': [
        'Ökenö',
        ':desert_island:'
    ],
    '🏞️': [
        'Nationalpark',
        ':national_park:'
    ],
    '🏟️': [
        'Ishallar',
        ':stadium:',
        'Grandställ',
        'Sport Stadion'
    ],
    '🏛️': [
        'Klassisk byggnad',
        ':classical_building:',
        'Grekiska',
        'Rom'
    ],
    '🏗️': [
        'Byggnad Konstruktion',
        ':building_construction:',
        'Kran'
    ],
    '🏘️': [
        'Hus Byggnader',
        ':houses_building:',
        'Grupp av hus'
    ],
    '🏚️': [
        'Derelict hus byggnad',
        ':old_house:',
        'Övergivet hus',
        'Gammalt hus',
        'Hemsökt hus'
    ],
    '🏠': [
        'Hem',
        ':home:',
        'Hus byggnad'
    ],
    '🏡': [
        'Hus med trädgård',
        ':house_with_garden:',
        'Hus och träd'
    ],
    '🏢': [
        'Kontor byggnad',
        ':office_building:',
        'Stad byggnad',
        'Höguppåtgående byggnad'
    ],
    '🏣': [
        'Japanska postkontor',
        ':japanese_post_office:',
        'Japansk postmärke'
    ],
    '🏤': [
        'Postkontor',
        ':european_post_office:',
        'Europeiska postkontoret'
    ],
    '🏥': [
        'Sjukhus',
        ':hospital:',
        'ÄR',
        'A&E',
        'Nödrum',
        'Olycka och nödsituation',
        'Rött Kors',
        'Medicinsk'
    ],
    '🏦': [
        'Bank',
        ':bank:',
        'BK',
        'Bakkureru',
        'Bank filial',
        'Bakkureru'
    ],
    '🏨': [
        'Hotell',
        ':hotel:',
        'Boende',
        'H Byggnad'
    ],
    '🏩': [
        'Love Hotel',
        ':love_hotel:',
        'Love Heart Hotel'
    ],
    '🏪': [
        'Butik för bekvämlighet',
        ':convenience_store:',
        '24-timmarsbutik',
        '7-Elva',
        'Hörnaffär',
        'Kwik-E-Mart'
    ],
    '🏫': [
        'Skolan',
        ':school:',
        'Klocka torn',
        'Elementärt Hög Mitten'
    ],
    '🏬': [
        'Varuhus',
        ':department_store:',
        'Köpcenter',
        'Butik'
    ],
    '🏭': [
        'Fabrik',
        ':factory:',
        'Industriell',
        'Industri',
        'Föroreningar',
        'Rökig'
    ],
    '🏯': [
        'Japansk Slott',
        ':japanese_castle:',
        'Fästning'
    ],
    '🏰': [
        'Europeiskt Slott',
        ':european_castle:',
        'Turrets'
    ],
    '💒': [
        'Kyrkans hjärta',
        ':church_heart:',
        'Bröllop i kyrkan',
        'Äktenskap'
    ],
    '🗼': [
        'Tokyo Torn',
        ':tokyo_tower:',
        'Eiffeltornet',
        'Rött Torn'
    ],
    '🗽': [
        'Frihetsgudinnan',
        ':statue_of_liberty:',
        'New York'
    ],
    '⛪': [
        'Kyrka byggnad',
        ':church_building:',
        'Kors'
    ],
    '🕌': [
        'Moské',
        ':mosque:',
        'Domat tak',
        'Minaret'
    ],
    '🛕': [
        'Hinduiskt Tempel',
        ':hindu_temple:'
    ],
    '🕍': [
        'Synagogan',
        ':synagogue:',
        'Judisk',
        'Synagog',
        'Tempel'
    ],
    '⛩️': [
        'Shinto Helgedom',
        ':shinto_shrine:',
        'Kami-no-michi'
    ],
    '🕋': [
        'Kaaba',
        ':kaaba:',
        'Mecca'
    ],
    '🏙️': [
        'Cityscape',
        ':cityscape:'
    ],
    '⛱️': [
        'Paraply på mark',
        ':beach_umbrella:',
        'Paraply vid stranden'
    ],
    '🌄': [
        'Soluppgång över berg',
        ':sunrise_over_mountains:',
        'Morgon',
        'Soluppgång'
    ],
    '🌅': [
        'Soluppgång',
        ':sunrise:',
        ':sunset:',
        'Solnedgång'
    ],
    '🌆': [
        'Stadsbilden på skymningen',
        ':cityscape_at_dusk:',
        'Orange Sky stad',
        'Skymning Stad'
    ],
    '🌇': [
        'Solnedgång över byggnader',
        ':sunset_over_buildings:',
        'Stad Solnedgång'
    ],
    '🌃': [
        'Natt med stjärnor',
        ':night_with_stars:',
        'Stad på natten',
        'Stjärnig Natt'
    ],
    '🗿': [
        'Moai',
        ':moai:',
        'Påskön Staty',
        'Mänsklig hällristning',
        'Moyai Staty'
    ],
    '🌠': [
        'Skytte stjärna',
        ':shooting_star:',
        'När du önskar på en stjärna',
        'Meteoroid'
    ],
    '🌌': [
        'Vintergatan',
        ':milky_way:',
        'Galaxen',
        'Natthimmel',
        'Mellanslag',
        'Stjärnor',
        'Universum'
    ],
    '🎑': [
        'Månens tittarceremoni',
        ':moon_viewing_ceremony:',
        'Gräs, Dumplings och Moon',
        'Skörda Månen',
        'Mitten av hösten Festival',
        'Tsukimi'
    ],
    '🛖': [
        'Hydda',
        ':hut:'
    ],
    '🎢': [
        'Berg-och dalbana',
        ':roller_coaster:',
        'Rollercoaster',
        'Temapark'
    ],
    '🛝': [
        'Lekplats diabild',
        ':playground_slide:',
        'Baby',
        'Barn'
    ]
};
/*technologies (smartphones, laptops, etc.) and office*/
emojis_language[lang][10] = {
    '⌚': [
        'Titta',
        ':watch:',
        'Tidbok',
        'Apple Klocka'
    ],
    '⏰': [
        'Alarm Klocka',
        ':alarm_clock:'
    ],
    '⏱️': [
        'Stoppur',
        ':stopwatch:'
    ],
    '⏲️': [
        'Timer Klocka',
        ':timer_clock:'
    ],
    '🕰️': [
        'Mantelpiece klocka',
        ':mantelpiece_clock:'
    ],
    '🧭': [
        'Kompass',
        ':compass:'
    ],
    '🕹️': [
        'Joystick',
        ':joystick:'
    ],
    '🎙️': [
        'Studio mikrofon',
        ':studio_microphone:'
    ],
    '🎚️': [
        'Nivå matare',
        ':level_slider:'
    ],
    '🎛️': [
        'Kontrollera knutar',
        ':control_knobs:'
    ],
    '📻': [
        'Radio',
        ':radio:',
        'Digital Radio',
        'Trådlös'
    ],
    '📱': [
        'Mobiltelefon',
        ':mobile_phone:',
        'Smartphone',
        'iPhone',
        'Mobiltelefon',
        'Device'
    ],
    '📲': [
        'Mobiltelefon med höger pil till vänster',
        ':phone_call:',
        'Telefonsamtal',
        'Pekar på telefon'
    ],
    '☎️': [
        'Svart telefon',
        ':rotary_phone:',
        'Roterande telefon',
        ':red:'
    ],
    '📞': [
        'Telefonmottagare',
        ':phone:',
        'Handset',
        'Telefon',
        ':black:',
        'Device'
    ],
    '📟': [
        'Personsökare',
        ':pager:',
        'Beeper',
        'Bleeper'
    ],
    '📠': [
        'Faxmaskin',
        ':fax_machine:',
        'Facsimile',
        'Fax'
    ],
    '🔋': [
        'Batteri',
        ':battery:',
        'AA batteri',
        'Batteri för telefon'
    ],
    '🔌': [
        'Elektrisk plugg',
        ':power_cable:',
        'AC Adaptor',
        'Ström kabel',
        'Ström Plug'
    ],
    '💻': [
        'Bärbar dator',
        ':laptop:',
        ':computer:',
        'Notebook',
        'Personal Computer',
        'PC',
        'MacBook',
        'Surface',
        'Device'
    ],
    '🖥️': [
        'Skrivbord Dator',
        ':desktop_computer:',
        ':computer:',
        'iMac',
        'PC',
        'Device'
    ],
    '🖨️': [
        'Skrivare',
        ':printer:',
        'Device'
    ],
    '⌨️': [
        'Computer Keyboard',
        ':keyboard:',
        ':computer_keyboard:'
    ],
    '🖱️': [
        'Dator mus',
        ':computer_mouse:',
        'Mus med tre knappar'
    ],
    '🖲️': [
        'Spårboll',
        ':trackball:'
    ],
    '💽': [
        'Dator Disk',
        ':blu_ray:',
        'Minidisc',
        'CD',
        'DVD',
        'Blu-ray',
        'BD'
    ],
    '💾': [
        'Diskett diskett',
        ':floppy_disk:',
        '3.5″-disk',
        'Diskett'
    ],
    '💿': [
        'Optisk disk',
        ':cd:',
        'CD',
        'CD-ROM',
        'Kompakt skiva'
    ],
    '📀': [
        'DVD',
        'DVD-ROM',
        ':dvd:',
        'DVD Video'
    ],
    '🎥': [
        'Filmkamera',
        ':movie_camera:',
        'Film Kamera',
        'Hollywood',
        'Film'
    ],
    '🎞️': [
        'Film bågar',
        ':film_frames:'
    ],
    '📽️': [
        'Film Projektor',
        ':film_projector:'
    ],
    '📺': [
        'Tv',
        ':tv:',
        'TV'
    ],
    '📷': [
        'Digital kamera',
        ':digital_camera:'
    ],
    '📸': [
        'Kamera med Flash',
        ':camera_flash:'
    ],
    '📹': [
        'Videokamera',
        ':video_camera:',
        'Videokamera'
    ],
    '📼': [
        'Videokassett',
        ':vhs:',
        'VHS',
        'VCR',
        'Video Tejp',
        'Videokassett'
    ],
    '💳': [
        'Kreditkort',
        ':credit_card:',
        'Betalkort',
        'AMEX',
        'Diners Club',
        'American Express',
        'Mastercard',
        'VISA kort'
    ],
    '📧': [
        'E-post',
        ':email:',
        'E-post'
    ],
    '📨': [
        'Inkommande kuvert',
        ':incoming_envelope:',
        'Kuvert med linjer',
        'Snabbt kuvert'
    ],
    '📩': [
        'Kuvert med nedåt pil ovanför',
        ':insert_in_envelope:',
        'Ned pil kuvert',
        'Infoga i kuvert'
    ],
    '📤': [
        'Utkorgsfack',
        ':outbox_tray:'
    ],
    '📥': [
        'Inkorg fack',
        ':inbox_tray:'
    ],
    '📮': [
        'Brevlåda',
        ':postbox:'
    ],
    '📁': [
        'Fil mapp',
        ':file_folder:',
        'Mapp',
        'Katalog',
        'Stängd filmapp'
    ],
    '📂': [
        'Öppna filmapp',
        ':open_file_folder:',
        'Katalog'
    ],
    '🗂️': [
        'Kortindex delare',
        ':card_index_dividers:'
    ],
    '📅': [
        'Kalender',
        ':calendar:',
        '17 juli',
        'Världsdagen för emoji'
    ],
    '🗓️': [
        'Spiral kalender Pad',
        ':spiral_calendar_pad:'
    ],
    '📆': [
        'Tear-Off kalender',
        ':day_calendar:',
        'Dag Kalender',
        'Kalendern för skrivbord'
    ],
    '📈': [
        'Ökning av diagram',
        ':increasing_chart:',
        'Positiv diagram',
        'Pekar upp graf',
        'Diagram med uppåtgående trend'
    ],
    '📉': [
        'Diagram minskar',
        ':decreasing_chart:',
        'Negativ tabell',
        'Pekar ner graf',
        'Diagram med nedåtgående trend'
    ],
    '📊': [
        'Stapeldiagram',
        ':bar_chart:',
        'Graf för stapel'
    ],
    '📌': [
        'Pushpin',
        ':pushpin:',
        'Thumb Tack',
        ':red:'
    ],
    '📋': [
        'Urklipp',
        ':clipboard:'
    ],
    '📍': [
        'Rund Pushpin',
        ':round_pushpin:',
        'Släppt nål',
        'Fäst på kartan',
        'Fäst',
        'Röd nål',
        ':red:'
    ],
    '📎': [
        'Klämma',
        ':paperclip:',
        'Klippig'
    ],
    '📏': [
        'Rak linjal',
        ':straight_ruler:'
    ],
    '📐': [
        'Triangulär linjal',
        ':triangular_ruler:',
        'Triangel linjal'
    ],
    '✂️': [
        'Sax',
        ':scissors:',
        'Skärning'
    ],
    '✏️': [
        'Penna',
        ':pencil:',
        'Blyertspenna'
    ],
    '✒️': [
        'Svart Nib',
        ':black_nib:',
        'Penna Nib',
        'Fontänpenna'
    ],
    '🖋️': [
        'Fontänpenna',
        ':fountain_pen:',
        'Nedre vänstra fontänpenna'
    ],
    '🖊️': [
        'Penna',
        ':pen:',
        'Nedre vänstra kulspetspenna',
        'Kulspetspenna'
    ],
    '🖌️': [
        'Målningsborste',
        ':paintbrush:',
        'Pensla',
        'Nedre Vänster Målningsborste'
    ],
    '🖍️': [
        'Crayon',
        ':crayon:',
        'Nedre vänsterkritan'
    ],
    '📝': [
        'Anteckning',
        ':memo:',
        'Memorandum',
        'Anteckning',
        'Penna och papper'
    ],
    '🗑️': [
        'Papperskorg',
        ':wastepaper_basket:',
        'Sopburk',
        'Skräp Papperskorg',
        'Papperskorgen kan'
    ],
    '📡': [
        'Satellit antenn',
        ':satellite_antenna:'
    ],
    '🔭': [
        'Teleskop',
        ':telescope:',
        'Stargazing'
    ],
    '🔬': [
        'Mikroskop',
        ':microscope:',
        'Magnify',
        'Vetenskap'
    ],
    '📭': [
        'Öppna brevlåda med sänkt flagga',
        ':open_mailbox_lowered:'
    ],
    '📬': [
        'Öppna brevlådan med upphöjd flagga',
        ':open_mailbox_raised:',
        'Öppna brevlådan'
    ],
    '📪': [
        'Stängd brevlåda med sänkt flagga',
        ':closed_mailbox_lowered:'
    ],
    '📫': [
        'Stängd brevlåda med upphöjd flagga',
        ':closed_mailbox_raised:'
    ],
    '📰': [
        'Tidning',
        ':newspaper:'
    ],
    '🗞️': [
        'Upprullad tidning',
        ':rolled_up_newspaper:',
        'Tidning Leverans'
    ],
    '📄': [
        'Sida vänd uppåt',
        ':printed_page:',
        'Tryckt sida'
    ],
    '📜': [
        'Rulla',
        ':scroll:',
        'Grad',
        'Parchment'
    ],
    '📃': [
        'Sida med Curl',
        ':curled_page:',
        'Curled Page',
        'Curly Page'
    ],
    '📓': [
        'Anteckningsbok',
        ':notebook:',
        'Svart och vit bok'
    ],
    '📔': [
        'Anteckningsbok med dekorativ omslag',
        ':notebook_decorative_cover:'
    ],
    '📕': [
        'Stängd bok',
        ':closed_book:',
        'Röd bok',
        'Röd lärobok',
        ':red:'
    ],
    '📖': [
        'Öppna bok',
        ':open_book:',
        'Bok',
        'Novel'
    ],
    '📗': [
        'Grön bok',
        ':green_book:',
        'Grön lärobok',
        ':green:'
    ],
    '📘': [
        'Blå bok',
        ':blue_book:',
        'Blå lärobok',
        ':blue:'
    ],
    '📙': [
        'Orange bok',
        ':orange_book:',
        'Orange lärobok',
        ':orange:'
    ],
    '📚': [
        'Böcker',
        ':books:',
        'Högen av böcker',
        'Stack med böcker'
    ],
    '🗳️': [
        'Vallåda med röstsedel',
        ':ballot_box:',
        'Röstlåda',
        'Röstning'
    ],
    '🗄️': [
        'Skåp för fil',
        ':file_cabinet:',
        'Filskåp'
    ],
    '🗃️': [
        'Kort Fil Box',
        ':card_file_box:'
    ],
    '🖇️': [
        'Länkade gem',
        ':linked_paperclips:',
        ':gray:',
        ':grey:'
    ]
};
/*clothes and accessories*/
emojis_language[lang][11] = {
    '👣': [
        'Fotavtryck',
        ':footprints:',
        'Fötter',
        'Fotsteg'
    ],
    '👓': [
        'Glasögon',
        ':glasses:',
        'Eveyglas'
    ],
    '🕶️': [
        'Solglasögon',
        ':sunglasses:'
    ],
    '🥽': [
        'Goggles',
        ':goggles:'
    ],
    '🥼': [
        'Labb Coat',
        ':lab_coat:'
    ],
    '👔': [
        'Necktie',
        ':necktie:',
        'Affärströja',
        'Skjorta och slips'
    ],
    '👕': [
        'T-tröja',
        ':t_shirt:',
        ':t-shirt:',
        'Tee tröja',
        'Pikétröja'
    ],
    '👖': [
        'Jeans',
        ':jeans:',
        'Denim',
        'Byxor',
        'Byxor'
    ],
    '🧣': [
        'Scarf',
        ':scarf:'
    ],
    '🧤': [
        'Handskar',
        ':gloves:'
    ],
    '🧥': [
        'Kappa',
        ':coat:'
    ],
    '🧦': [
        'Socks',
        ':socks:'
    ],
    '👗': [
        'Klänning',
        ':dress:',
        'Kjol',
        'Klänning'
    ],
    '👘': [
        'Kimono',
        ':kimono:',
        'Klänning klänning',
        'Japansk klänning'
    ],
    '👙': [
        'Bikini',
        ':bikini:',
        'Bäder',
        'Baddräkt'
    ],
    '🩱': [
        'Ett stycke baddräkt',
        'Baddräkt',
        'en-baddräkt'
    ],
    '👚': [
        'Kläder för kvinnor',
        ':womans_clothes:',
        'Kläder för kvinnor',
        'Blouse',
        'Rosa tröja',
        'Blouse'
    ],
    '👛': [
        'Handväska',
        ':purse:',
        'Plånbok'
    ],
    '👜': [
        'Handväska',
        ':handbag:'
    ],
    '👝': [
        'Kopplingspåse',
        ':clutch_bag:',
        'Koppling',
        'Liten väska',
        'Pouch'
    ],
    '🎒': [
        'Ryggsäck',
        ':backpack:',
        'Väska',
        'Skolväska',
        'Skola Satchel',
        'Rucksack'
    ],
    '👞': [
        'Mans Shoe',
        ':mans_shoe:',
        'Mans Shoe',
        'Sko',
        'Brun serie',
        'Visa klänning'
    ],
    '👟': [
        'Friidrott Sko',
        ':athletic_shoe:',
        'Löpande Sko',
        'Sneaker',
        'Löpare',
        'Tränare',
        'Tennis Sko'
    ],
    '🥾': [
        'Vandring Boot',
        ':hiking_boot:'
    ],
    '🥿': [
        'Platt sko',
        ':flat_shoe:'
    ],
    '👠': [
        'Högklackad sko',
        ':high_heeled_shoe:',
        ':high_heel:',
        'Stiletto',
        'Höga hälar'
    ],
    '👡': [
        'Kvinna Sandal',
        ':womans_sandal:',
        'Kvinna Sandal',
        'Heeled Sandal',
        'Sandaler',
        'Sandal'
    ],
    '👢': [
        'Kvinnor Stövlar',
        ':womans_boots_',
        'Kvinnor Stövlar',
        'Cowgirl Stövlar',
        'Knä Höga Stövlar',
        'Heeled Stövlar'
    ],
    '👑': [
        'Kron',
        ':crown:',
        'Kung',
        'Drottning',
        'Prins',
        'Kunglig',
        'Prinsessan',
        ':gold:',
        ':yellow:'
    ],
    '👒': [
        'Hatt',
        ':hat:',
        'Kvinna Hatt',
        'Hatt med pilbåge',
        'Damhatt'
    ],
    '🎩': [
        'Topp Hatt',
        ':top_hat:',
        'Formell Bär',
        'Groom',
        ':black:'
    ],
    '🎓': [
        'Graduation Cap',
        ':graduation_cap:',
        'Universitet',
        'Graduate',
        'Mörsare Bräde',
        'Universitet',
        'Fyrkantig akademisk keps',
        ':black:'
    ],
    '🧢': [
        'Fakturerad keps',
        ':billed_cap:',
        'Hatt för baseboller'
    ],
    '⛑️': [
        'Hjälm med vitt kors',
        ':helmet_with_white_cross:',
        ':helmet_with_cross:',
        ':rescue_worker_helmet:',
        ':rescue_workers_helmet:',
        'Räddningsarbetare Hjälm',
        ':red:',
        ':white:'
    ],
    '💼': [
        'Portfölj',
        ':briefcase:',
        'Resväska'
    ],
    '🎖️': [
        'Militär medalj',
        ':military_medal:',
        ':medal:',
        'Medalj',
        'Medaljon',
        'Militär Dekoration'
    ],
    '📿': [
        'Bönpärlor',
        ':prayer_beads:',
        'Dhikr pärlor',
        'radband Pärlor'
    ],
    '🎗️': [
        'Påminnelse Band',
        ':reminder_ribbo:'
    ],
    '🤿': [
        'Dykning Mask',
        ':diving_mask:'
    ],
    '🦺': [
        'Säkerhetsväst',
        ':safety_vest:'
    ],
    '🥻': [
        'Sari',
        ':sari:',
        'Äre',
        'Shari'
    ],
    '🩲': [
        'Briefs',
        ':briefs:',
        'Undies',
        'Underwear',
        'Underpants',
        'Jocks',
        'Panties'
    ],
    '🩳': [
        'Shorts',
        ':shorts:'
    ],
    '🛼': [
        'Rullskridsko',
        ':roller_skate:',
        'Infogad skridsko',
        'Rulla Derby'
    ],
    '🩴': [
        'Vänd Flop',
        ':flip_flop:',
        'Thong Sandal'
    ],
    '🪖': [
        'Militär Hjälm',
        ':military_helmet:'
    ],
    '🩰': [
        'Balett Skor',
        ':ballet_shoes:',
        'Pointe sko'
    ],
    '🩼': [
        'Crutch',
        ':crutch:'
    ]
};
/*hands and parts of body*/
emojis_language[lang][12] = {
    '👋{{skin_tone}}': [
        'Vågande handskylt',
        ':wave:',
        ':waving_hand:',
        'Adjö',
        'Hand Våg',
        'Hej',
        'Hi'
    ],
    '🖐️{{skin_tone}}': [
        'Hand med fingertopparna Splayed',
        ':hand_splayed:',
        ':raised_hand_with_fingers_splayed:',
        ':hand_with_fingers_splayed:',
        'Fem Hand',
        'Visad hand',
        'Raised Hand med fingertoppar Splayed'
    ],
    '🤚{{skin_tone}}': [
        'Upphöjd baksida av handen',
        ':raised_back_of_hand:',
        ':back_of_hand:',
        'Bakhand'
    ],
    '✋{{skin_tone}}': [
        'Upphöjd hand',
        ':raised_hand:',
        ':hand:',
        'Hög Fem',
        'Stoppa'
    ],
    '🖖{{skin_tone}}': [
        'Vulcan Salute',
        ':vulcan_salute:',
        'Spock',
        'Stjärna Trek',
        'Upphöjd hand med del mellan mitten och ringfingrar'
    ],
    '👌{{skin_tone}}': [
        'Ok Hand Signering',
        ':ok_hand:',
        'Okej',
        'Perfekt',
        'Ja'
    ],
    '✌️{{skin_tone}}': [
        'Seger Hand',
        ':victory_hand:',
        'Air Offerter',
        'Fred tecken',
        'V Signera'
    ],
    '🤞{{skin_tone}}': [
        'Korsade fingertoppar',
        ':crossed_fingers:',
        'Fingrar korsade',
        'Lycka till',
        'Hand med index och mellanfingrar korsade'
    ],
    '🤟{{skin_tone}}': [
        'Love-You Gest',
        ':love_you_gesture:',
        ':i_love_you_hand_sign:',
        'Jag älskar dig Hand tecken'
    ],
    '🤘{{skin_tone}}': [
        'Tecken på hornen',
        ':the_horns:',
        ':sign_of_the_horns:',
        ':metal:',
        'Djävulsfingrar',
        'Kraftig metall',
        'Sten på'
    ],
    '🤙{{skin_tone}}': [
        'Ring mig hand underteckna',
        ':call_me_hand:',
        ':call_me:',
        'Hand för telefon',
        'Shaka'
    ],
    '🤏{{skin_tone}}': [
        'Knyp hand',
        ':pinching_hand:'
    ],
    '👈{{skin_tone}}': [
        'Bakhand indexmarkering vänster',
        ':backhand_index_pointing_left:',
        ':point_left:',
        'Vit vänster pekar Bakhand Index'
    ],
    '👉{{skin_tone}}': [
        'Bakhand Index markerar höger',
        ':backhand_index_pointing_right:',
        ':point_right:',
        'Vit Höger Pekar Bakhand Index'
    ],
    '👆{{skin_tone}}': [
        'Bakhand Index Pekar upp',
        ':point_up_2:',
        ':backhand_index_pointing_up:',
        'Vit Upp Pekar Bakhand Index',
        'Mitten Finger'
    ],
    '👇{{skin_tone}}': [
        'Bakhand Index markerar ner',
        ':point_down:',
        ':backhand_index_pointing_down:',
        'Vit ned pekar Backhand Index',
        'Pekar ner'
    ],
    '☝{{skin_tone}}': [
        'Indexet pekar upp',
        ':point_up:',
        ':index_pointing_up:',
        'Vit Upp Pekar Index',
        'Hemlighet'
    ],
    '🖕{{skin_tone}}': [
        'Mitten Finger',
        ':middle_finger:',
        'Fågeln vrider',
        'Ohyfsad Finger',
        'Omvänd hand med mellanfingret utökat'
    ],
    '👍{{skin_tone}}': [
        'Miniatyrer upp skylt',
        ':thumbs_up_sign:',
        'Gilla',
        'Ja'
    ],
    '👎{{skin_tone}}': [
        'Miniatyrer Ned Sign',
        ':thumbs_down_sign:',
        'Dålig',
        'Dislike',
        'Nej'
    ],
    '✊{{skin_tone}}': [
        'Upphöjd näve',
        ':raised_fist:',
        'Näve Pump'
    ],
    '👊{{skin_tone}}': [
        'Pågående näve',
        ':oncoming_fist:',
        'Bro Fist',
        'Brofist',
        'Knytnäve Bump',
        'Punch',
        'Stängd näve',
        'Fisted Hand Sign'
    ],
    '🤛{{skin_tone}}': [
        'Vänster knytnäve',
        ':left_fist_bump:'
    ],
    '🤜{{skin_tone}}': [
        'Höger Knytnäve Bump',
        ':right_fist:bump:'
    ],
    '🤌{{skin_tone}}': [
        'Knypade fingertoppar',
        ':pinched_fingers:',
        'Ma Che Vuoi',
        'Finger handväska'
    ],
    '👏{{skin_tone}}': [
        'Clapping Hands Sign',
        ':cap:',
        ':clapping_hands:',
        'Applåder',
        'Clap',
        'Klappa',
        'Golf Clap',
        'Runda av Applåder'
    ],
    '🙌{{skin_tone}}': [
        'Person höja båda händerna i firandet',
        ':raised_hands:',
        ':raising_hands:',
        'Höjer händer',
        'Vapen i luften',
        'Banzai',
        'Festivus mirakel',
        'Hallelujah',
        'Prisa händer',
        'Två händer'
    ],
    '👐{{skin_tone}}': [
        'Öppna händer tecken',
        ':open_hands_sign:',
        'Hug',
        'Jazzens händer'
    ],
    '🤲{{skin_tone}}': [
        'Palmer upp tillsammans',
        ':palms_up_together:',
        'Dua'
    ],
    '🤝{{skin_tone}}': [
        'Handshake',
        ':handshake:',
        'Skakar händer'
    ],
    '🙏{{skin_tone}}': [
        'Vikta händer',
        ':folded_hands:',
        'Namaste',
        'Vänligen',
        'Bön',
        'Tack så mycket',
        'Person med vikta händer'
    ],
    '✍{{skin_tone}}': [
        'Skriva hand',
        ':writing_hand:'
    ],
    '🫱{{skin_tone}}': [
        'Höger Hand',
        ':rightwards_hand:'
    ],
    '🫲{{skin_tone}}': [
        'Vänster hand',
        ':leftwards_hand:'
    ],
    '🫳{{skin_tone}}': [
        'Palm Ned Hand',
        ':palm_down_hand:'
    ],
    '🫴{{skin_tone}}': [
        'Palm upp hand',
        ':palm_up_hand:'
    ],
    '🫰{{skin_tone}}': [
        'Hand med Index Finger och Tumme Korsade',
        ':hand_with_index_finger_and_thumb_crossed:'
    ],
    '🫵{{skin_tone}}': [
        'Index pekar på tittaren',
        ':index_pointing_at_the_viewer:'
    ],
    '🫶{{skin_tone}}': [
        'Hjärta händer',
        ':heart_hands:',
        'Kärlek'
    ],
    '💪{{skin_tone}}': [
        'Flexad Biceps',
        ':flexed_biceps:',
        'Flexing armmuskler',
        'Musle',
        'Stark'
    ],
    '🦵{{skin_tone}}': [
        'Ben',
        ':leg:'
    ],
    '🦶{{skin_tone}}': [
        'Fot',
        ':foot:'
    ],
    '👂{{skin_tone}}': [
        'Öron',
        ':ear:',
        'Öron',
        'Hörsel',
        'Lyssnar'
    ],
    '👃{{skin_tone}}': [
        'Näsa',
        ':nose:',
        'Luktande',
        'Sniffar',
        'Stinky'
    ],
    '🦻{{skin_tone}}': [
        'Öron med hörapparat',
        ':ear_with_hearing_aid:'
    ],
    '🧠': [
        'Hjärnan',
        ':brain:',
        ':pink:'
    ],
    '🦷': [
        'Tand',
        ':tooth:',
        ':white:'
    ],
    '👀': [
        'Ögon',
        ':eyes:',
        'Ögonglobar',
        'Shifty Ögon',
        'Kloka ögon'
    ],
    '👁️': [
        'Öga',
        ':eye:',
        'Enskilt öga'
    ],
    '👅': [
        'Tunga ut',
        ':tongue_out:',
        ':red:'
    ],
    '👄': [
        'Mun',
        ':mouth:',
        'Kissar läppar',
        'Läppar',
        ':red:'
    ],
    '🫦': [
        'Bitande Lip',
        ':biting_lip:',
        'Läppar',
        ':red:'
    ],
    '🫀': [
        'Anatomiskt hjärta',
        ':anatomical_heart:',
        ':red:'
    ],
    '🫁': [
        'Lungor',
        ':lungs:',
        ':red:'
    ],
    '🦾': [
        'Mekanisk Arm',
        ':mechanical_arm:',
        'Stark',
        ':gray:',
        ':grey:'
    ],
    '🦿': [
        'Mekanisk Ben',
        ':mechanical_leg:',
        ':gray:',
        ':grey:'
    ],
    '💅{{skin_tone}}': [
        'Nail Polish',
        ':nail_polish:',
        'Fingrar',
        'Manicure',
        'Nonchalant'
    ],
    '🤳{{skin_tone}}': [
        'Selfie',
        ':selfie:',
        'Telefon kamera',
        'Selfie hand'
    ]
};
/*other*/
emojis_language[lang][13] = {
    '💩': [
        'Högen av Poo',
        ':pile_of_poo:',
        'Hund Jord',
        'Leende Poop',
        ':brown:'
    ],
    '💋': [
        'Kyss Mark',
        ':kiss_mark:',
        'Kissar läppar',
        ':red:'
    ],
    '🦴': [
        'Ben',
        ':bone:'
    ],
    '🧳': [
        'Bagage',
        ':luggage:',
        'Resväska'
    ],
    '🌂': [
        'Stängt Paraply',
        ':closed_umbrella:',
        'Kollapsade paraply',
        'Rosa paraply',
        ':pink:',
        ':purple:'
    ],
    '☂️': [
        'Paraply',
        ':umbrella:',
        ':purple:'
    ],
    '☔': [
        'Paraply med regndroppar',
        ':umbrella_with_rain_drops:',
        ':umbrella:',
        'Regn',
        'Rainy'
    ],
    '🧵': [
        'Trådens bassäng',
        ':spool_of_thread:'
    ],
    '🧶': [
        'Bollen av Garn',
        ':ball_of_yarn:'
    ],
    '💄': [
        'Lipstick',
        ':lipstick:',
        'Läppglans',
        'Smink',
        ':red:'
    ],
    '💍': [
        'Ring',
        ':ring:',
        'Diamant Ring',
        'Ring för förlovning'
    ],
    '💎': [
        'Pärla sten',
        ':gem_stone:',
        'Diamant',
        'Pärla',
        'Ädelsten',
        'Juvel',
        ':blue:'
    ],
    '💥': [
        'Kollisionssymbol',
        ':collision_symbol:',
        'Bang',
        'Explodera',
        'Påverkan',
        'Röd gnista',
        'Explosion'
    ],
    '💫': [
        'Yrselös symbol',
        ':dizzy_symbol:',
        'Cirkel och stjärna',
        ':yellow:'
    ],
    '💦': [
        'Kastande svettsymbol',
        'sweatdroppar',
        'sweatdroppar',
        'Plewds',
        'Kastande vatten',
        'Vatten droppar',
        ':blue:'
    ],
    '💨': [
        'Streckning Borta',
        ':dashing_away:',
        'Snabb',
        'Ånga',
        'Vapar',
        'Vind',
        'Strecksymbol',
        'Vindens byst'
    ],
    '🌬️': [
        'Vind ansikte',
        ':wind_face:',
        'Blåser vind',
        'Moder Natur',
        'Vind Blowing Face',
        ':white:'
    ],
    '🐾': [
        'Tass Utskrifter',
        ':paw_prints:',
        'Katt Tass Utskrifter',
        'Hund Tass Utskrifter',
        'Kitten Tass Utskrifter',
        'Valp Tass Utskrifter'
    ],
    '🕸️': [
        'Spindelnät',
        ':spider_web:',
        'Kobb',
        'Webb',
        'Spiderweb'
    ],
    '🦠': [
        'Mikrob',
        ':microbe:',
        'Mobil',
        'Coronavirus',
        'COVID-19',
        'Gräddfil',
        'Mikroorganism',
        'Virus',
        ':green:'
    ],
    '💐': [
        'Bukett av blommor',
        ':bouquet_of_flowers:'
    ],
    '🌍': [
        'Globe Visar Europa-Afrika',
        ':globe_showing_europe_africa:',
        ':earth_africa:',
        'Jord',
        'Glob',
        'Planet',
        'Världen',
        'Globe Visar Europa och Afrika',
        ':blue:'
    ],
    '🌎': [
        'Globe Visar Amerika',
        ':globe_showing_americas:',
        ':earth_americas:',
        'Jord',
        'Glob',
        'Planet',
        'Världen',
        ':blue:'
    ],
    '🌏': [
        'Visar Asien-Australien',
        ':globe_showing_asia_australia:',
        ':earth_asia:',
        'Jord',
        'Glob',
        'Planet',
        'Världen',
        'Globe Visar Asien och Australien',
        ':blue:'
    ],
    '🌐': [
        'Globe med Meridianer',
        ':globe_with_meridians:',
        'Internet',
        'Världsomspännande webben',
        'WWW'
    ],
    '🌑': [
        'Ny månsymbol',
        ':new_moon:',
        'Mörk Måne',
        'Skugga Månen',
        'Sol-förmörkelse',
        ':black:'
    ],
    '🌒': [
        'Waxing Crescent Moon Symbol',
        ':waxing_crescent_moon:',
        ':yellow:',
        ':black:'
    ],
    '🌓': [
        'Första kvartalet Månen Symbol',
        ':first_quarter_moon:',
        ':yellow:',
        ':black:'
    ],
    '🌔': [
        'Vaxning Gibbous Moon Symbol',
        ':moon:',
        ':waxing_gibbous_moon:',
        ':yellow:',
        ':black:'
    ],
    '🌕': [
        'Fullmåne symbol',
        ':full_moon:',
        ':yellow:'
    ],
    '🌖': [
        'Avtagande Gibbous Moon Symbol',
        ':waning_gibbous_moon:',
        ':yellow:',
        ':black:'
    ],
    '🌗': [
        'Sista kvartalet Månen Symbol',
        ':last_quarter_moon:',
        ':yellow:',
        ':black:'
    ],
    '🌘': [
        'Avtagande halvmåne symbol',
        ':waning_crescent_moon:',
        ':yellow:',
        ':black:'
    ],
    '🌙': [
        'Halvmåne',
        ':crescent_moon:',
        ':yellow:'
    ],
    '🌚': [
        'Ny måne med ansikte',
        ':new_moon_with_face:',
        'Läskig Måne',
        'Mörk Månens Ansikte',
        'Molester måne',
        ':black:',
        ':gray:',
        ':grey:'
    ],
    '🌝': [
        'Full Moon med ansikte',
        ':full_moon_with_face:',
        'Moonface',
        'Smiley Moon',
        'Leende Månen',
        ':yellow:'
    ],
    '🌛': [
        'Första kvartalet Månen med ansikte',
        ':first_quarter_moon_with_face:',
        ':first_quarter_moon_face:',
        ':yellow:'
    ],
    '🌜': [
        'Sista kvartalet Månen med Ansikte',
        ':last_quarter_moon_with_face:',
        ':last_quarter_moon_face:',
        ':yellow:'
    ],
    '🌞': [
        'Sön med ansikte',
        ':sun_with_face:',
        'Smiley Sön',
        'Sunface',
        'Leende Solen',
        ':yellow:'
    ],
    '☀️': [
        'Sön',
        ':sun:',
        'Solsken',
        ':yellow:'
    ],
    '⭐': [
        'Stjärna',
        ':star:',
        'Vit Medium Stjärna',
        ':yellow:'
    ],
    '🌟': [
        'Glödande stjärna',
        ':glowing_star:',
        'Skinande Stjärna',
        ':yellow:'
    ],
    '☁️': [
        'Moln',
        ':cloud:',
        'Molnigt',
        'Mulet',
        ':white:'
    ],
    '⛅': [
        'Sön bakom molnet',
        ':thunder_cloud_and_rain:',
        ':thunder_cloud_rain:',
        ':cloud_with_lightning_and_rain:',
        ':white:'
    ],
    '⛈️': [
        'Moln med blixt och regn',
        ':thunder_cloud_and_rain:',
        ':thunder_cloud_rain:',
        ':cloud_with_lightning_and_rain:',
        'Åskmoln och regn',
        ':white:'
    ],
    '🌤️': [
        'Vit sol med litet moln',
        ':mostly_sunny:',
        ':sun_behind_small_cloud:',
        ':sun_small_cloud:',
        ':white_sun_small_cloud:',
        ':white_sun_with_small_cloud:',
        ':white:'
    ],
    '🌥️': [
        'Sön bakom stort moln',
        ':sun_behind_large_cloud:',
        'Vit sol bakom molnet',
        ':white:'
    ],
    '🌦️': [
        'Vit sol bakom molnet med regn',
        ':sun_behind_rain_cloud:',
        ':partly_sunny_rain:',
        ':white_sun_rain_cloud:',
        ':white_sun_behind_cloud_with_rain:',
        ':white:'
    ],
    '🌧️': [
        'Moln med regn',
        ':cloud_with_rain:',
        ':white:'
    ],
    '🌨️': [
        'Moln med snö',
        ':cloud_with_snow:',
        ':white:'
    ],
    '🌩️': [
        'Moln med Lightning',
        ':cloud_with_lightning:',
        ':white:'
    ],
    '🌪️': [
        'Tornado',
        ':tornado:',
        'Moln med Tornado'
    ],
    '🌫️': [
        'Fog',
        ':fag:',
        ':white:',
        ':gray:',
        ':grey:'
    ],
    '🌈': [
        'Regnbåge',
        ':rainbow:',
        'Gay Pride',
        'Primär regnbåge',
        'HBTQIA+',
        'HBT+'
    ],
    '❄️': [
        'Snöflinga',
        ':snowflake:',
        'Snö',
        'Snöar',
        ':white:'
    ],
    '🌀': [
        'Cyklon',
        ':cyclone:',
        'Orkan',
        'Spiral',
        'Virveln',
        'Tornado'
    ],
    '⚡': [
        'Högspänningstecken',
        ':high_voltage_sign:',
        'Blixtnedslag Bolt',
        'Thunderbolt',
        'Hög spänning'
    ],
    '☃️': [
        'Snögubbe',
        ':snowman:',
        'Snögubbe med snöflingor',
        ':white:'
    ],
    '⛄': [
        'Snögubbe utan snö',
        'Snöman_Utanför',
        ':snowman:',
        'Frostiga snögubben',
        'Olaf',
        'Snögubbe',
        ':white:'
    ],
    '☄️': [
        'Komet',
        ':comet:'
    ],
    '🔥': [
        'Eld',
        ':fire:',
        'Flamma',
        'Het',
        'Lit',
        'Snapstreak',
        ':red:'
    ],
    '💧': [
        'Droplet',
        ':droplet:',
        'Vatten',
        'Vatten Släpp',
        ':blue:'
    ],
    '✨': [
        'Gnistrar',
        ':sparkles:',
        'Glitter',
        'Shiny',
        'Ny'
    ],
    '🌊': [
        'Vatten Våg',
        ':water_wave:',
        'Strand',
        'Havets Våg',
        'Hav',
        ':blue:'
    ],
    '🎄': [
        'Julgran',
        'Julklappsträd',
        'Jul',
        'Xmas träd',
        ':green:'
    ],
    '🎃': [
        'Jack-O-lykta',
        'Lykta',
        'Halloween',
        'Pumpa',
        ':orange:'
    ],
    '🌻': [
        'Solros',
        ':sunflower:',
        'Gul blomma',
        ':yellow:'
    ],
    '🌼': [
        'Blossom',
        ':blossom:',
        'Blommande Blomma',
        'Daisy',
        'Gul blomma',
        ':yellow:'
    ],
    '🌷': [
        'Tulip',
        ':tulip:',
        ':pink:'
    ],
    '🌹': [
        'Ros Blomma',
        ':rose_flower:',
        'Röd ros',
        ':red:'
    ],
    '☘️': [
        'Schampo',
        ':shamrock:',
        'Klöver',
        'Trefolie',
        ':green:'
    ],
    '🍀': [
        'Fyra blad klöver',
        ':four_leaf_clover:',
        'Klöver',
        'Irland',
        'Tur',
        'Lycka',
        ':green:'
    ],
    '🌸': [
        'Cherry Blossom',
        ':cherry_blossom:',
        'Rosa blomma',
        'Sakura',
        ':pink:'
    ],
    '💮': [
        'Vit Blomma',
        ':white_flower:',
        'Cherry Blossom',
        'Papper Doily',
        'Väl klar stämpel',
        ':white:'
    ],
    '🌺': [
        'Hibiscus',
        ':hibiscus:',
        ':red:'
    ],
    '🏵️': [
        'Rosett',
        ':rosette:',
        ':orange:',
        ':yellow:'
    ],
    '🌱': [
        'Utsäde',
        ':seedling:',
        'Fjäder',
        'Sprout',
        'Gror',
        ':green:'
    ],
    '🌲': [
        'Vintergröna träd',
        ':evergreen_tree:',
        'Fir träd',
        'Tall träd',
        ':green:'
    ],
    '🌳': [
        'Lövträd',
        ':deciduous_tree:',
        'Rundat träd',
        ':green:'
    ],
    '🌴': [
        'Palmträd',
        ':palm_tree:',
        'Kokosträd',
        ':green:'
    ],
    '🎋': [
        'Tanabata träd',
        ':tanabata_tree:',
        'Tanabata',
        'Önskat träd'
    ],
    '🎍': [
        'Tall dekoration',
        ':pine_decoration:',
        'Bambu',
        'Kadomatsu',
        'Dekoration för nyår'
    ],
    '🌵': [
        'Cactus',
        ':cactus:',
        'Desert',
        ':green:'
    ],
    '🌾': [
        'Kniva av ris',
        ':sheaf_of_rice:',
        'Beskär',
        'Jordbruk',
        'Vete',
        'Öron av ris'
    ],
    '🌿': [
        'Ört',
        ':herb:',
        'Beskär',
        'Plantera',
        ':green:'
    ],
    '🍁': [
        'Lönn löv',
        ':maple_leaf:',
        'Kanada',
        'Kanadensisk',
        'Lönn',
        ':brown:'
    ],
    '🍂': [
        'Fallna blad',
        ':fallen_leaf:',
        'Höstens blad',
        'Höstlöv',
        'Brun Löv',
        'Höstlöv',
        'Fallna löv',
        ':brown:'
    ],
    '🍃': [
        'Bladflöjter i vinden',
        ':leaf_fluttering_in_wind:',
        ':leaves:',
        'Gröna blad',
        'Fjäder',
        ':green:'
    ],
    '🪴': [
        'Krukväxt',
        ':potted_plant:',
        ':green:'
    ],
    '🪸': [
        'Korall',
        ':coral:',
        'Klimatförändringar'
    ],
    '🪷': [
        'Lotus',
        ':lotus:',
        'Renhet',
        'Skönhet',
        'Lugn',
        'Lugn'
    ],
    //"🪻": ["Hyacinth", ":hyacinth:", "Purple flower", ":purple:"],
    //"🫛": ["Pea Pod", ":pea_pod:", ":green:"],
    //"🫚": ["Ginger root", ":ginger:", "Spice", "Flavour", ":brown:"],
    '🔑': [
        'Nyckel',
        ':key:',
        'Guld nyckel',
        ':gold:',
        ':yellow:'
    ],
    '🗝️': [
        'Gammal nyckel',
        ':old_key:',
        ':brown:'
    ],
    '🔨': [
        'Hammare',
        ':hammer:',
        'Claw hammare',
        'Handyman',
        'Verktyg'
    ],
    '⛏️': [
        'Välj',
        ':pick:',
        'Hacka'
    ],
    '🪓': [
        'Yxa',
        ':axe:',
        'brandman'
    ],
    '🪚': [
        'Snickarsåg',
        ':carpentry_saw:'
    ],
    '🪛': [
        'Skruvmejsel',
        ':screwdriver:'
    ],
    '🪝': [
        'Krok',
        ':hook:'
    ],
    '🪠': [
        'Plunger',
        ':plunger:'
    ],
    '🪣': [
        'Hink',
        ':bucket:'
    ],
    '🔩': [
        'Mutter och Bolt',
        ':nut_and_bolt:',
        'Bolt',
        'Skruv',
        ':gray:',
        ':grey:'
    ],
    '🗜️': [
        'Klämma',
        ':clamp:',
        'Tabell Vice',
        'WinZip',
        'Komprimering',
        ':gray:',
        ':grey:'
    ],
    '🔒': [
        'Låst',
        ':locked:',
        'Stängt lås',
        'Hänglås'
    ],
    '🔓': [
        'Upplåst',
        ':unlocked:',
        'Öppna Padlock',
        'Öppna lås'
    ],
    '🔏': [
        'Låst med penna',
        ':locked_with_pen:',
        'Lås och penna',
        'Lås med reservoarpenna',
        'Lås med bläckpenna'
    ],
    '🔐': [
        'Låst med nyckel',
        ':locked_with_key:',
        'Stängt lås med nyckel'
    ],
    '🗡️': [
        'Dagger',
        ':dagger:',
        'Kniv Vapen',
        ':gray:',
        ':grey:'
    ],
    '⚔️': [
        'Korsade Svärd',
        ':crossed_swords:',
        ':gray:',
        ':grey:'
    ],
    '🔫': [
        'Pistol',
        ':pistol:',
        'Kanon',
        'Revolver',
        'Spruta Pistol',
        'Vatten Kanon',
        'Vatten Pistol'
    ],
    '🧰': [
        'Verktygslåda',
        ':toolbox:',
        ':red:'
    ],
    '🧲': [
        'Magnet',
        ':magnet:',
        ':red:'
    ],
    '⛓️': [
        'Kedjor',
        ':chains:'
    ],
    '💉': [
        'Syringe',
        ':syringe:',
        'Blod Donation',
        'Blodprov',
        'Nål',
        'Vaccination',
        'blod',
        'sjuk',
        'ill'
    ],
    '🧬': [
        'DNA',
        ':dna:',
        'Dubbla DNA-spiraler'
    ],
    '🧪': [
        'Provrör',
        ':test_tube:',
        ':green:'
    ],
    '🛏️': [
        'Säng',
        ':bed:',
        'Sovrum'
    ],
    '🛋️': [
        'Soffa och lampa',
        ':couch_and_lamp:',
        'Vardagsrum',
        'Settee',
        'Soffa'
    ],
    '🪑': [
        'Stol',
        ':chair:'
    ],
    '🚪': [
        'Dörr',
        ':door:',
        'Dörrväg',
        'Dörren fram'
    ],
    '🪟': [
        'Fönster',
        ':window:'
    ],
    '🪜': [
        'Stege',
        ':ladder:'
    ],
    '🪞': [
        'Spegel',
        ':mirror:'
    ],
    '🚽': [
        'Toalett',
        ':toilet:',
        'Badrum',
        'Loo',
        'Restroom',
        'WC',
        ':white:'
    ],
    '🚿': [
        'Dusch',
        ':shower:',
        'Dusch Huvud',
        ':shower:'
    ],
    '🛁': [
        'Badkar',
        ':bathtub:',
        'Bubbelbad',
        ':shower:'
    ],
    '🧴': [
        'Lotion Flaska',
        ':location_bottle:'
    ],
    '🧷': [
        'PIN-kod för säkerhet',
        ':safety_pin:',
        ':gray:',
        ':grey:'
    ],
    '🧺': [
        'Korg',
        ':basket:',
        ':brown:'
    ],
    '🧻': [
        'Pappersrulle',
        ':roll_of_paper:',
        'Toalettpapper',
        ':white:'
    ],
    '🧼': [
        'Tvål bar',
        ':bar_of_soap:',
        'Tidy',
        'Clean',
        'Scrub'
    ],
    '🧽': [
        'Svamp',
        ':sponge:',
        ':yellow:'
    ],
    '🧯': [
        'Brandsläckare',
        ':fire_extinguisher:',
        ':red:'
    ],
    '🚬': [
        'Cigarett',
        ':cigarette:',
        'Röksymbol'
    ],
    '⚰️': [
        'Kaffe',
        ':coffin:',
        'Casket',
        'Begravning',
        ':brown:'
    ],
    '⚱️': [
        'Begravning Urn',
        ':funeral_urn:',
        'Vas'
    ],
    '🛡️': [
        'Sköld',
        ':shield:'
    ],
    '⚙️': [
        'Växel',
        ':gear:',
        'Inställningar',
        'Alternativ',
        ':gray:',
        ':grey:'
    ],
    '⚖️': [
        'Balansskala',
        ':balance_scale:',
        'Skalor av rättvisa'
    ],
    '🔗': [
        'Länk',
        ':link:',
        'Kedja',
        'Hyperlänk',
        'Länkad kedja',
        ':gray:',
        ':grey:'
    ],
    '💀': [
        'Skalle',
        ':skull:',
        'Död',
        'Grå skalle',
        'Skelett',
        ':white:'
    ],
    '☠️': [
        'Skalle och Crossbones',
        ':skull_and_crossbones:',
        ':white:'
    ],
    '🎡': [
        'Pariserhjul',
        ':ferris_wheel:',
        'Stort hjul',
        'Fairgroundl',
        'Observationshjul'
    ],
    '⛽': [
        'Bränslepump',
        'bränslepump:',
        'Olja',
        'Bensin',
        'Gas',
        ':red:'
    ],
    '🚨': [
        'Polisen bilar volvande ljus',
        ':rotating_light:',
        ':police_police_car:',
        'Nödljus',
        'Blinkande ljus',
        'Siren',
        ':red:'
    ],
    '🚥': [
        'Horisontell trafik ljus',
        ':horizontal_traffic_light:',
        ':green:',
        ':red:',
        ':yellow:',
        ':orange:'
    ],
    '🚦': [
        'Vertikalt trafikljus',
        ':vertical_traffic_light:',
        ':green:',
        ':red:',
        ':yellow:',
        ':orange:'
    ],
    '⚓': [
        'Admiralty Mönster Anchor',
        ':anchor:',
        'Fiskare'
    ],
    '🚧': [
        'Konstruktion Signering',
        ':construction_sign:',
        'Svart och gul Randig skylt',
        ':yellow:',
        ':black:'
    ],
    '🪂': [
        'Parachute',
        ':parachute:'
    ],
    '💺': [
        'Sittplats',
        ':seat:',
        'Buss Flygplan Tåg Flygplan'
    ],
    '🪐': [
        'Saturnus',
        ':saturn:'
    ],
    '🎆': [
        'Fyrverkerier',
        ':fireworks:',
        'Explosion'
    ],
    '🎇': [
        'Senko Hanabi',
        ':senko_hanabi:',
        'Fyrverkeri Glitter'
    ],
    '💷': [
        'Pund sedel',
        ':pound:',
        ':pound_banknote:',
        '£20 Anteckning',
        'Tjugo Quid Note',
        'Sedel med pund',
        ':purple:'
    ],
    '💶': [
        'Euro Banknote',
        ':euro:',
        ':euro_banknote:',
        '€100 Notering',
        'Sedel med euroskylt',
        ':blue:'
    ],
    '💵': [
        'Dollar sedel',
        ':dollar:',
        ':dollar_banknote:',
        '$1 Not',
        'Sedel med Dollarskylt',
        'Dollar Bill',
        'Amerikansk Dollar',
        ':green:'
    ],
    '💴': [
        'Yen sedel',
        ':yen:',
        ':yen_banknote:',
        '<unk> 1000 Anteckning',
        'Yen anteckning',
        'Sedel med Yen Sign',
        ':yellow:'
    ],
    '⛺': [
        'Camping Tält',
        ':camping_tent:'
    ],
    '⛲': [
        'Fontänen',
        ':fountain:',
        'Vattenfunktion',
        'Vatten fontän',
        'Parkera'
    ],
    '💰': [
        'Pengar väska',
        ':money_bag:',
        'Moneybags',
        'Rik',
        '$'
    ],
    '💸': [
        'Pengar med vingar',
        ':money_with_wings:',
        'Flygande pengar',
        ' Förlorar pengar'
    ],
    '🏷️': [
        'Etikett tagg',
        ':label_tag:'
    ],
    '🔖': [
        'Bokmärke',
        ':bookmark:',
        'Pris tagg',
        'Tagg'
    ],
    '📑': [
        'Bokmärk flikar',
        ':bookmark_tabs:',
        ':white:'
    ],
    '📯': [
        'Postalt horn',
        ':postal_horn:',
        'Bugle',
        'Fransk Horn'
    ],
    '🪁': [
        'Kite',
        ':kite:',
        ':purple:'
    ],
    '🪀': [
        'Yo-Yo',
        ':yo_yo:',
        ':yo-yo:'
    ],
    '🎊': [
        'Confetti Ball',
        ':confetti_ball:',
        'Confetti'
    ],
    '🎉': [
        'Party Popper',
        ':party_popper:',
        'Firande',
        'Fest Hatt'
    ],
    '🎈': [
        'Ballong',
        ':balloon:',
        'Fest',
        'Röd ballong',
        ':red:'
    ],
    '🌡️': [
        'Termometer',
        ':thermometer:',
        'Varmt väder',
        'Temperatur',
        ':red:'
    ],
    '🛢️': [
        'Olja trumma',
        ':oil_drum:'
    ],
    '💣': [
        'Bomb',
        ':bomb:',
        'bom'
    ],
    '🔪': [
        'Kök kniv',
        ':kitchen_knife:',
        'Kniv',
        'Slaktare kniv',
        'Hocho'
    ],
    '🏺': [
        'Amphora',
        ':amphora:',
        'Burk',
        'Vas'
    ],
    '🗺️': [
        'Karta över världen',
        ':world_map:'
    ],
    '🎼': [
        'Musikalisk poäng',
        ':musical_score:',
        'Musik på arket',
        'Treble Clef'
    ],
    '🎬': [
        'Klapperbräda',
        ':clapper_board:',
        'Klipp',
        'Åtgärd',
        'Direktör',
        'Film skiffer'
    ],
    '🎻': [
        'Violin',
        ':violin:',
        'Sträng kvartett',
        'Världar Minsta Violin'
    ],
    '🎺': [
        'Trumpet',
        ':trumpet:',
        'Horn',
        'Jazz'
    ],
    '🎸': [
        'Gitarr',
        ':guitar:',
        'Akustisk gitarr',
        'Bas gitarr',
        'Elektrisk gitarr'
    ],
    '🎷': [
        'Saxofon',
        ':saxophone:',
        'Jazz',
        'Sax'
    ],
    '🥁': [
        'Trumma',
        ':drum:',
        'Trumma med trumstockar'
    ],
    '🎹': [
        'Piano',
        ':piano:',
        'Musikiskt tangentbord',
        ':white:',
        ':black:'
    ],
    '🪕': [
        'Banjo',
        ':banjo:'
    ],
    '🪗': [
        'Dragspel',
        ':accordion:'
    ],
    '🪘': [
        'Lång trumma',
        ':long_drum:'
    ],
    '🎨': [
        'Artist Palett',
        ':artist_palette:',
        'Konst',
        'Målning'
    ],
    '🧩': [
        'Pusselbit',
        ':puzzle_piece:',
        'Pusselbit för pussel',
        ':green:'
    ],
    '🎲': [
        'Spel Die',
        ':game_die:',
        'Tärning',
        ':white:'
    ],
    '🎭': [
        'Scenkonst',
        'Föreställningar',
        'Teater',
        'Teater',
        'Drama Masker',
        'Grekisk teater Masker',
        'Tragedi och komedi masker',
        'Venedig'
    ],
    '🔍': [
        'Förstoringsglas lutat till vänster',
        ':mag:',
        ':magnifying_glass_tilted_left:',
        'Magnifier',
        'Sök ikon',
        'Förstoringsglas till vänster',
        'Sök',
        ':transparent:'
    ],
    '🔎': [
        'Förstoringsglas lutat höger',
        ':mag_right:',
        ':magnifying_glass_tilted_right:',
        'Magnifier',
        'Sök ikon',
        'Förstoringsglas med högerpekare',
        'Sök',
        ':transparent:'
    ],
    '⌛': [
        'Timglaset klart',
        ':hourglass:',
        ':hourglass_done:',
        'Timglas',
        'Time',
        'Egg timer',
        'Empty',
        'Ended',
        'Finished',
        'Sand Clock'
    ],
    '⏳': [
        'Timglaset är inte gjort',
        ':hourglass_flowing_sand:',
        ':hourglass_not_done:',
        'Timglas med flödande sand',
        'Busy',
        'Time',
        'Egg timer',
        'Flowing',
        'Sand Clock'
    ],
    '🕐': [
        'Ett OClock',
        ':clock1:',
        ':one_oclock:',
        'Klocka Face One OClock',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕜': [
        'Klocka Ansikte En Trettio',
        ':clock130:',
        ':one_thirty:',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕑': [
        'Två OClock',
        ':clock2:',
        ':two_oclock:',
        'Klocka Ansikte Två OClock',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕝': [
        'Klocka Face Två-30',
        ':clock230:',
        ':two_thirty:',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕒': [
        'Tre OClock',
        ':clock3:',
        ':three_oclock:',
        'Klocka Ansikte Tre OClock',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕞': [
        'Klocka Ansikte tre-30',
        ':clock330:',
        ':three_thirty:',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕓': [
        'Fyra OClock',
        ':clock4:',
        ':four_oclock:',
        'Klocka Ansikte Fyra OClock',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕟': [
        'Klocka Ansikte Fyra Trettio',
        ':clock430:',
        ':four_thirty:',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕔': [
        'Fem OClock',
        ':clock5:',
        ':five_oclock:',
        'Klocka Face Fem OClock',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕠': [
        'Klocka ansikte fem-trettio',
        ':clock530:',
        ':five_thirty:',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕕': [
        'Sex OClock',
        ':clock6:',
        ':size_oclock:',
        'Klocka Ansikte Sex OClock',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕡': [
        'Klocka Ansikte sex-trettio',
        ':clock630:',
        ':six_thirty:',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕖': [
        'Sju OClock',
        ':clock7:',
        ':seven_oclock:',
        'Klocka Ansikte Sju OClock',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕢': [
        'Klocka Ansikte sju-trettio',
        ':clock730:',
        ':sever_thirty:',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕗': [
        'Åtta OClock',
        ':clock8:',
        ':eight_oclock:',
        'Klocka Ansikte Åtta OClock',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕣': [
        'Klocka ansikte åtta Trettio',
        ':clock830:',
        ':eight_thirty:',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕘': [
        'Nio OClock',
        ':clock9:',
        ':nine_clock:',
        'Klocka Ansikte Nio OClock',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕤': [
        'Klocka Ansikte nio-trettio',
        ':clock930:',
        ':nine_thirty:',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕙': [
        'Tio OClock',
        ':clock10:',
        ':ten_oclock:',
        'Klocka Ansikte Tio OClock',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕥': [
        'Klocka Ansikte Tio-Trettio',
        ':clock1030:',
        ':ten_thirty:',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕚': [
        'Eleven OClock',
        ':click11:',
        ':eleven_oclock:',
        'Klocka Ansikte Elva OClock',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕦': [
        'Klocka ansikte Elva Trettio',
        ':clock1130:',
        ':eleven_thirty:',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕛': [
        'Tolv OClock',
        ':clock12:',
        ':twelve_oclock:',
        'Klocka Ansikte Tolv OClock',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕧': [
        'Klocka Ansikte Tolv-30',
        ':clock1230:',
        ':twelve_thirty:',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '♨️': [
        'Hot Springs',
        ':hot_springs:',
        'Onsen',
        'Ånga',
        ':red:'
    ],
    '💈': [
        'Frisör Stång',
        ':barber_pole:',
        'Barberare Shop',
        'Barbers Rand',
        'Frisör',
        ':blue:',
        ':red:'
    ],
    '🎪': [
        'Cirkus tält',
        ':circus_tent:',
        'Stor topp',
        'Cirkus'
    ],
    '💢': [
        'Ilska Symbol',
        ':anger_symbol:',
        'Ilska tecken',
        'Vein Pop',
        ':red:'
    ],
    '🗯️': [
        'Rätt ilska bubbla',
        ':right_anger_bubble:',
        ':anger_right:',
        'Zig Zag Bubble',
        'Arg talbubbla',
        ':white:'
    ],
    '🗨️': [
        'Vänster talbubbla',
        ':left_speech_bubble:',
        ':speech_left:'
    ],
    '💊': [
        'Pill',
        ':pill:',
        'Kapsel',
        'Surfplatta',
        'Droger',
        'Sjuk',
        'ill',
        ':yellow:',
        ':red:'
    ],
    '🎎': [
        'Dockor',
        ':dolls:',
        'Hinamatsuri',
        'Brittiska dockor',
        'Japanska dockor'
    ],
    '🎏': [
        'Karp Streamer',
        ':carp_streamer:',
        'Fisk flagga',
        'Koinobori',
        'Vind Strumpor'
    ],
    '🎐': [
        'Vind Chime',
        ':wind_chime:',
        'Furin',
        'Manet',
        'Vind Bell'
    ],
    '🎀': [
        'Band pilbåge',
        ':ribbon_bow:',
        'Rosa pilbåge',
        'Pilbåge',
        ':pink:'
    ],
    '🎁': [
        'Omsluten gåva',
        ':wrapped_gift:',
        'Födelsedag närvarande',
        'Julklapp',
        'Gåva',
        'Gåva Låda',
        'Nuvarande',
        'Omsluten Present'
    ],
    '🎫': [
        'Ärende',
        ':ticket:',
        'Biljett Stubb',
        'Biljett till världsturné'
    ],
    '🃏': [
        'Skämt',
        ':joker:',
        'Jokerkort',
        'Spela kort svart Joker'
    ],
    '💡': [
        'Glödlampa',
        ':light_bulb:',
        'Idé',
        'Elektrisk glödlampa'
    ],
    '🔦': [
        'Ficklampa',
        ':flashlight:',
        'Ficklampa',
        'Elektrisk fackla'
    ],
    '🏮': [
        'Rödpapper lykta',
        ':izakaya_lantern:',
        ':lantern:',
        ':red_paper_lantern:',
        'Asiatisk lykta',
        'Japansk lykta',
        'Röd lykta',
        'Izakaya lykta',
        ':red:'
    ],
    '📦': [
        'Paket',
        ':package:',
        'Låda',
        'Paket',
        ':brown:'
    ],
    '📇': [
        'Index kort',
        ':card_index:',
        'Rolodex',
        'System kort',
        'Kortets index'
    ],
    '🕳️': [
        'Hål',
        ':hole:',
        ':black:'
    ],
    '👁️‍🗨️': [
        'Jag är vittne',
        ':eye_in_speech_bubble:',
        ':eye_speech_bubble:',
        ':eye-in-speech-bubble:',
        'Öga i talbubbla'
    ],
    '⚜️': [
        'Fleur-de-lis',
        ':fleur_de_lis:',
        'Scouter',
        'Nya Orleans helgon'
    ],
    '⚗️': [
        'Alembic',
        ':alembic:'
    ],
    '🕯️': [
        'Ljus',
        ':candle:',
        ':white:'
    ],
    '🖼️': [
        'Inramad bild',
        ':framed_picture:',
        'Målning',
        'Bildens ram',
        'Ram med bild'
    ],
    '🛍️': [
        'Shoppa väskor',
        ':shopping_bags:'
    ],
    '🛒': [
        'Kundvagn',
        ':shopping_cart:',
        'Shopping vagn',
        ':shopping_trolley:',
        ':gray:',
        ':grey:',
        'Market'
    ],
    '🎟️': [
        'Antagning Biljetter',
        ':admission_tickets:',
        'Theater',
        'Theatre',
        'Party'
    ],
    '🛎️': [
        'Bellhop Bell',
        ':bellhop_bell:',
        ':yellow:',
        ':gold:',
        'Hotel',
        'Reception'
    ],
    '🧾': [
        'Kvitto',
        ':receipt:',
        ':white:',
        'Bill'
    ],
    '🧮': [
        'Abacus',
        ':abacus:'
    ],
    '🧫': [
        'Petri maträtt',
        ':petri_dish:'
    ],
    '🧹': [
        'Brum',
        ':broom:',
        'Pensla',
        'Svep',
        ':yellow:',
        'Tidy',
        'Clean'
    ],
    '🎰': [
        'Spelautomat',
        ':slot_machine:',
        'Kasino',
        'Frukt Maskin',
        'Spelande',
        'Poker maskin'
    ],
    '🦽': [
        'Manuell Rullstol',
        ':manual_wheelchair:',
        ':wheelchair:'
    ],
    '🦼': [
        'Motordriven Rullstol',
        ':motorized_wheelchair:'
    ],
    '🪔': [
        'Diya lampa',
        ':diya_lamp:'
    ],
    '🦯': [
        'White Cane',
        ':whie_cane:'
    ],
    '🩸': [
        'Släpp blod',
        ':drop_of_blood:',
        ':red:'
    ],
    '🩹': [
        'Självhäftande bandage',
        ':adhesive_bandage:'
    ],
    '🩺': [
        'Stetoskop',
        ':stethoscope:'
    ],
    '🪶': [
        'Fjäder',
        ':feather:',
        'Animal'
    ],
    '🪤': [
        'Mus Fälla',
        ':mouse_trap:'
    ],
    '🫖': [
        'Teapot',
        ':teapot:'
    ],
    '🪨': [
        'Sten',
        ':rock:',
        ':gray:',
        ':grey:'
    ],
    '🪵': [
        'Trä',
        ':wood:',
        ':brown:'
    ],
    '🪄': [
        'Magiskt trollstav',
        ':magin_wand:'
    ],
    '🔮': [
        'Kristall boll',
        ':crystal_ball:',
        'Clairvoyant',
        'Fortune Teller',
        'Psykisk',
        'Lila Kristall',
        ':purple:'
    ],
    '🪅': [
        'Pin<unk> ata',
        ':pinata:',
        ':piñata:'
    ],
    '🪆': [
        'Häckande dockor',
        ':nesting_dolls:',
        'Matrjosjka'
    ],
    '🪡': [
        'Sy nål',
        ':swing_needle:'
    ],
    '🪢': [
        'Knut',
        ':knot:',
        ':red:',
        ':blue:'
    ],
    '🪙': [
        'Mynt',
        ':coin:'
    ],
    '🪃': [
        'Boomerang',
        ':boomerang:',
        ':brown:'
    ],
    '🪥': [
        'Tandborste',
        ':toothbrush:'
    ],
    '🪦': [
        'Huvudsten',
        ':headstone:',
        ':gray:',
        ':grey:'
    ],
    '🪧': [
        'Placard',
        ':placard:'
    ],
    '🪒': [
        'Razor',
        ':razor:'
    ],
    '🫙': [
        'Burk',
        ':jar:',
        ':transparent:'
    ],
    '🛞': [
        'Hjul',
        ':wheel:',
        'Fordon',
        'Bilar',
        ':black:'
    ],
    '🛟': [
        'Ringboj',
        ':ring_buoy:',
        'Livräddare',
        'Livets Ring',
        'Båtar',
        'Säkerhet',
        'Vatten',
        'Livräddning',
        ':red:',
        ':white:'
    ],
    '🪬': [
        'Hamsa',
        ':hamsa:',
        'Islam',
        'Judendomen',
        'Buddhism',
        'Kristendomen',
        'Religioner',
        'Tur',
        'Skydd',
        'Vägledning',
        'Feminin Kraft',
        'Tro',
        ':blue:'
    ],
    '🪩': [
        'Spegelboll',
        ':mirror_ball:',
        'Disco boll'
    ],
    '🪫': [
        'Låg batterinivå',
        ':low_battery:',
        ':red:',
        'Energi',
        'Röd',
        'Device',
        'Smartphone',
        'Computer',
        'Console'
    ],
    '🩻': [
        'Röntgen',
        ':x_ray:',
        ':x-ray:',
        ':blue:'
    ],
    '🫧': [
        'Bubblor',
        ':bubbles:',
        'Tvål Suds',
        'Karbonation',
        'Effektiv personlighet',
        ':transparent:'
    ],
    '🪪': [
        'Identifieringskort',
        ':identification_card:',
        'Identitet',
        'Pass',
        'ID',
        'Country',
        'Security',
        'Travel'
    ],
    '🧿': [
        'Nazar Amulet',
        ':nazar_amulet:',
        'Onda Öga',
        ':blue:'
    ],
    '🧸': [
        'Nallebjörn',
        ':teddy_bear:',
        'Leksak',
        ':brown:',
        'Baby',
        'Child',
        'Children'
    ]
};