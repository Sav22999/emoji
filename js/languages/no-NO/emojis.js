// descriptions took from Emojipedia.org
lang = 'no';
//use i18n language code of the browser, more details: https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/i18n/LanguageCode
titles_language[lang] = {
    '🔍': 'Resultater',
    '🕒': 'Mest brukte emojier',
    '😀': 'Smilefjes',
    '🙋': 'Folk',
    '🦊': 'Dyr',
    '🅰️': 'Symboler',
    '🍎': 'Mat og drikke',
    '🏳️‍🌈': 'Flagg',
    '🏊': 'Sport',
    '✈️': 'Reise og steder',
    '🖱️': 'Teknologi og kontor',
    '👗': 'Klær og tilbehør',
    '🖐️': 'Hender og deler av kroppen',
    '🛎️': 'Annet'
};
emojis_language[lang] = [];
/*search*/
emojis_language[lang][0] = {};
/*smileys*/
emojis_language[lang][2] = {
    '😀': [
        'Flirer Ansikt',
        ':grinning:',
        ':grinning_face:',
        '::):',
        'Glad ansikt',
        'Smil Ansikt'
    ],
    '😃': [
        'Avfeier ansikt med store øyne',
        ':smiley:',
        ':grinning_face_with_big_eyes:',
        '::D:',
        'Glad ansikt',
        'Smil Ansikt',
        'Smilende ansikt med åpne mesterskap'
    ],
    '😄': [
        'Råttende Ansikt med Smilende øyne',
        ':smile:',
        ':grinning_face_with_smiling_eyes:',
        'Glad ansikt',
        'Smil Ansikt',
        'Glipende Ansikt med bukøyne',
        'Smil ansikt med åpne mester- og smilende øyne'
    ],
    '😁': [
        'Ã ammer Ansikt med Smilende øyne',
        ':grin:',
        ':beaming_face_with_smiling_eyes:',
        'Råttende Ansikt med Smilende øyne'
    ],
    '😆': [
        'Grinning Squinting Face',
        ':grinning_squinting_face:',
        ':xD:',
        ':><:',
        'Stor storfn',
        'Lukkede øyne Smil',
        'Ler',
        'Råttent Ansikt med Tightly Closed Eyes',
        'Smil ansikt med åpne meire og toppleste øyne'
    ],
    '😅': [
        'Flirer Ansikt med Sweat',
        ':happy_sweat:',
        'Øvelse',
        'Glad sverm',
        'Fantasme Med Plantende øyne og Sweat Slipp',
        'Smil ansikt med åpen meig og kald søt'
    ],
    '🤣': [
        'ROFL',
        ':rofl:',
        'Ruller på gulv lading'
    ],
    '😂': [
        'Ansikt med frykt for Joy',
        ':lol:',
        'Ler',
        'Ler gråting',
        'Ler Tårer',
        'LOL'
    ],
    '🙂': [
        'Litt Smilende Ansikt',
        ':smile:',
        '::):',
        'Litt Glad',
        'Dette er fin'
    ],
    '🙃': [
        'Opp-Ned Ansikt',
        ':upside-down_face:',
        ':upside_down_face:',
        'Sarcasm',
        'Silly',
        'Opp-ned Ansikt'
    ],
    '😉': [
        'Blunker Ansikt',
        ':winking:',
        ':;):',
        'Blunk',
        'Blunke Ansikt',
        'Blunke Ansikt'
    ],
    '😊': [
        'Smør Ansikt med Smilende øyne',
        ':smiling_face:',
        ':^^:',
        'Glad ansikt',
        'Smil',
        'Smil Ansikt'
    ],
    '😇': [
        'Smilende ansikt med Halo',
        ':smiling_angel:',
        'Engel',
        'Halo'
    ],
    '🥰': [
        'Smilende ansikt med hjerter',
        ':smiling_hearts:',
        'I Kjærlighets Ansikt',
        'Smør ansikt med smilende øyne og tre hjerter'
    ],
    '😍': [
        'Smilende ansikt med hjerte-øyne',
        'forelsket',
        ':smiling_heart-eyes:',
        ':smiling_heart_eyes:',
        ':*.*:',
        'Hjerte øyne',
        'Hjerte Ansikt',
        'Smilende ansikt med hjerteformede øyne'
    ],
    '🤩': [
        'Star-Stru',
        ':star_eyes:',
        'Opphevet',
        'Stjerne øyne',
        'Stjerne Eyed',
        'Wow Ansikt',
        'Ansikt med skarpe øyne',
        'Grinning Face with Star Eyes'
    ],
    '😘': [
        'Flytende en kiss',
        'forelsket',
        ':kissing_face:',
        '::*:',
        '::-*:',
        'Blow A Kiss',
        'Blomsterende Kiss',
        'Kyssing',
        'Grav Kyss'
    ],
    '😗': [
        'Kysser ansikt',
        'kyss',
        ':kissing_face:',
        '::*:',
        '::-*:',
        'And Ansikt',
        'Kissy Face',
        'Plyndring'
    ],
    '☺️': [
        'Smilefjes',
        ':smiling_face:',
        'Glad ansikt',
        'Smil Ansikt',
        'Smil',
        'Hvit Smilende Ansikt'
    ],
    '😚': [
        'Kysser ansikt med lukkede øyne',
        ':kissing_face:',
        'Kiss Face',
        'Kissy Face'
    ],
    '😙': [
        'Kysser ansikt med Smil øyne',
        ':kissing_face:',
        'Kiss Face',
        'Kissy',
        'Plystre',
        'Plyndring'
    ],
    '😋': [
        'Ansikt sparer mat',
        ':savoring_face:',
        'Goofy',
        'Sulten',
        'Smil Ansikt Lisens Lips',
        'Ansikt sparer deilig mat',
        'Nam nam'
    ],
    '😛': [
        'Ansikt med Tongue',
        ':tongue_face:',
        '::P:',
        'Spøkefull',
        'Tongue Ansikt',
        'Tongue-Out',
        'Ansikt med "Stuck-out" tunue'
    ],
    '😜': [
        'Winking Ansikt med Tongue',
        ':winking:',
        ':;P:',
        'Gal',
        'Gal Ansikt',
        'Winking Ansikt Med Tongue Stuck-Out',
        'Ansikt med "Stuck-Out Tongue" og Winking Øye'
    ],
    '🤪': [
        'Zany Face',
        ':crazy_face:',
        'Gale øyne',
        'Opphevet',
        'Viltlevende',
        'Goofy Face',
        'Fruktende Ansikt med én stor og en liten øye'
    ],
    '😝': [
        'Kvadratisk Ansikt med Tongue',
        ':tongue_face:',
        ':xP:',
        'Tongue ut',
        'Ansikt med "Stuck" Tongue and Tightly-Closed Eyes',
        'Ansikt med Stuck-Out Tongue og Tightly-Closed Eyes'
    ],
    '🤑': [
        'Money-Mouth Ansikt',
        ':money-mouth_face:',
        ':money_mouth_face:',
        '::$:',
        'Dollar Sign Eyes',
        'Penger ansikt',
        'Velstående'
    ],
    '🤗': [
        'Gomp Ansikt',
        ':hugging_face:',
        'Gigantisk',
        'Gigantisk',
        'Klemmer',
        'Glad Face With Hugging Hands'
    ],
    '🤭': [
        'Ops',
        ':oops:',
        'Ansikt med innflytelse over mor',
        'Smilende ansikt med smilende øyne og hånddekkende mannskap'
    ],
    '🤫': [
        'Shh',
        ':shushing_face:',
        'Dempe',
        'Sakte Ansikt',
        'Dempe',
        'Rolig',
        'Forstummet',
        'Stille',
        'Ansikt med Fingerkover lukkede lepper'
    ],
    '🤔': [
        'Hva',
        ':thinking_face:',
        '?',
        'Hmm',
        'Tenk Ansikt',
        'Chin tommel',
        'Tysker',
        'Kaste Shade'
    ],
    '🤐': [
        'Postnummer',
        'stille',
        'stillhet',
        ':zip_face:',
        'Zipper-Mouth Ansikt',
        'Lepper forseglet',
        'Forseglede lepper',
        'Postnr det',
        'Ansikt med en Zipper ungdom'
    ],
    '🤨': [
        'Ansikt med Rent Eyebrow',
        ':face_with_raised_eyebrow:',
        'Fargearbeid',
        'The Rock',
        'Ansikt med forhøyd Eyebrow',
        'Ansikt med One Eyebrow Rå'
    ],
    '😐': [
        'Nøytral Ansikt',
        ':neutral_face:',
        ':|',
        'Kjønn med rett mor',
        'Rett ansikt'
    ],
    '😑': [
        'Uttrykksløs ansikt',
        ':expressionless_face:',
        '-_-',
        'Kjønn med rett mor',
        'Rett Ansikt'
    ],
    '😶': [
        'Bekymringsfri mor',
        ':face_without_mouth:',
        'Tom Face',
        'Munnløst',
        'Forstummet',
        'Stille'
    ],
    '😏': [
        'Smørende Ansikt',
        ':smirking_face:',
        'Flytte',
        'Seksuelt ansikt',
        'Smug Ansikt',
        'Foreslått smil'
    ],
    '😒': [
        'Navngitt ansikt',
        ':unamused_face:',
        'Misfornøyd',
        'Nja',
        'Side-Øye',
        'Uimponert'
    ],
    '🙄': [
        'Ansikt med Rullende øyne',
        ':face_with_rolling_eye:',
        ':eye_roll:',
        'Øye Rull'
    ],
    '😬': [
        'Grimacing Ansikt',
        ':awkward:',
        'Rar',
        'Eek',
        'Fot i fjellet',
        'Nevrologiske',
        'Snapchat gjensidig #1 beste venn'
    ],
    '🤥': [
        'Forløper løper',
        ':lying_face:',
        'Lor',
        'Lang nese',
        'Pinocchio'
    ],
    '😌': [
        'Utlevert ansikt',
        ':relieved_face:',
        'Innhold',
        'Vennlig'
    ],
    '😔': [
        'Beklager',
        ':sad_face:',
        'Pensiv Ansikt',
        'Pensiv',
        'Trist',
        'Dysmodig',
        'Sorterbar',
        'Trist penetrerende Ansikt'
    ],
    '😪': [
        'Søvnig ansikt',
        ':sleepy_face:',
        'Side-tear',
        'Ikke Boble'
    ],
    '🤤': [
        'Spyttsår',
        ':saliva_face:',
        'Drooling Face',
        'Drool'
    ],
    '😴': [
        'Sover Ansikt',
        ':sleeping_face:',
        ':zzz:',
        'Zz',
        'Hvilemodus ansikt',
        'Snorking',
        'Zzz ansikt'
    ],
    '🥱': [
        'Gjesping Ansikt',
        'trøtt',
        ':yawning_face:'
    ],
    '😷': [
        'Ansikt med medisinsk maske',
        'syk',
        'duk',
        ':face_with_medical_mask:',
        'Koronavirus',
        'COVID-19',
        'Maske Ansikt',
        'Kirurgisk maske',
        'ill'
    ],
    '🤒': [
        'Ansikt med termometer',
        ':face_with_thermometer:',
        ':sick:',
        ':ill:',
        'Ill',
        'Syk'
    ],
    '🤕': [
        'Ansikt med Hodebandasje',
        'sykehus',
        'syk',
        ':face_with_head-bandage:',
        ':face_with_head_bandage:',
        'Bandert Hode',
        'Klummer',
        'Skader',
        'ill'
    ],
    '🤢': [
        'Kvalme Face',
        'syk',
        ':nauseated_face:',
        'Disgust',
        'Grønn ansikt',
        'Slag',
        ':green:',
        'ill'
    ],
    '🤮': [
        'Face Oppkast',
        'syk',
        ':face_vomiting:',
        'Hastighet',
        'Bleah',
        'Bleurgh',
        'Yuk',
        'Juck',
        'Uw',
        'Hastighet',
        'Kast opp',
        'Slag',
        'Ansikt med Åpen Mouth Oppkast',
        'ill'
    ],
    '🤧': [
        'Nysing Ansikt',
        'syk',
        ':sneezing_face:',
        'Gesundheit',
        'ill'
    ],
    '🥵': [
        'Varmt ansikt',
        ':hot_face:',
        'Overopphetet ansikt',
        ':red:'
    ],
    '🥶': [
        'Kald Ansikt',
        ':cold_face:',
        'Kul',
        'Slapp',
        'Underkjølt ansikt',
        ':blue:'
    ],
    '🥴': [
        'Uvirkelig Ansikt',
        ':woozy_face:',
        'Kjæledyr Ansikt',
        'Ansikt med Uneven Eyes og Wavy Mouth'
    ],
    '😵': [
        'Dizzy Face',
        ':dizzy_face:',
        'Kryss øyne ansikt',
        'Spiral Eyes Ansikt'
    ],
    '🤯': [
        'Eksploderende Hode',
        'kranarm',
        ':exploding_head:',
        'Mind Blown',
        'Shocked ansikt med eksploderende hodet'
    ],
    '🤠': [
        'Cowboy hatt Ansikt',
        ':cowboy_hat_face:',
        'Kowgutt',
        'Cowboy Ansikt',
        'Tale med ugress Hatt'
    ],
    '🥳': [
        'Deler Ansikt',
        ':partying_face:',
        'Fest Ansikt',
        'Ansikt med Party Horn og Party Hatt'
    ],
    '😎': [
        'Smør ansikt med solbriller',
        ':smiling_face_with_sunglasses:',
        'Kul',
        'Felles bestevenner (Snapchat)',
        'Solbriller'
    ],
    '🤓': [
        'Nerd ansikt',
        ':nerd_face:',
        'Nerdy'
    ],
    '🧐': [
        'Ansikt med monole',
        ':face_with_monocle:'
    ],
    '😕': [
        'Forvirret ansikt',
        ':confused_face:',
        '::/:',
        '::S:',
        'Ubrukt',
        'Oppgave'
    ],
    '😟': [
        'Bekymret Ansikt',
        ':worried_face:',
        '::(:',
        'Trist',
        'Dysmodig'
    ],
    '🙁': [
        'Litt Frowning Ansikt',
        ':slightly_frowning_face:',
        '::(:',
        'Litt trist'
    ],
    '☹️': [
        'Frowning Ansikt',
        ':frowning_face:',
        '::(:',
        'Megafrown',
        'Hvit Frowning Ansikt'
    ],
    '😮': [
        'Kyr',
        ':wow:',
        '::O:',
        'Å meg!',
        'Ansikt med åpen mor',
        'Åpne e-post',
        'Overrasket ansikt med åpen mor'
    ],
    '😯': [
        'Dempet Ansikt',
        ':husked_face:',
        '::O:',
        'Overraskelse',
        'Overrasket ansikt'
    ],
    '😲': [
        'Shocked ansikt',
        ':shocked_face:',
        '::O:',
        'Kyr',
        'Astonert Ansikt',
        'Kjæledyr Ansikt',
        'gripende ansikt'
    ],
    '😳': [
        'Rødt Ansikt',
        ':flushed_face:',
        '::$:',
        'Rødme Ansikt',
        'Flau',
        'Shame',
        'Ansikt med vidde øyne'
    ],
    '🥺': [
        'Kryssende ansikt',
        ':pleading_face:',
        '::(:',
        'Klekk',
        'Glansende øyne',
        'Simp',
        'Ansikt med parrende øyne'
    ],
    '😦': [
        'Frowning Ansikt med Open Mouth',
        ':frowning_face_with_open_mouth:',
        ':D::',
        'Gjesping'
    ],
    '😧': [
        'Anguished Face',
        ':anguished_face:',
        ':anguished:',
        ':D::',
        'Pained Face'
    ],
    '😨': [
        'Speidt',
        ':scared:',
        ':D::',
        'Fryktelig ansikt',
        'Overrasket'
    ],
    '😰': [
        'Engstelig ansikt med søt',
        ':anxious_face_with_sweat:',
        'Blått Ansikt',
        'Bekreftet Ansikt',
        'Nervøs ansikt',
        'Ansikt med åpen mor og kald søt'
    ],
    '😥': [
        'Trist men frisk ansikt',
        ':sad_but_relieved_face:',
        '::(:',
        'Eyebrow geit',
        'Skuffet uten friluftsliv'
    ],
    '😢': [
        'Gråte Ansikt',
        ':crying_face:',
        '::(:',
        'Gråter',
        'Riv'
    ],
    '😭': [
        'Høylytt gråt ansikt',
        ':loudly_crying_face:',
        'Bawling',
        'Gråter',
        'Trist Tårer',
        'Sobbing'
    ],
    '😱': [
        'Ansiktsscreaming i frykt',
        ':face_screaming_in_fear:',
        'Hjemme Alen',
        'Skrik',
        'Skrikende Ansikt'
    ],
    '😖': [
        'Forkledd Ansikt',
        ':confounded_face:',
        'Quivering Mouth',
        'Srundet Ansikt'
    ],
    '😣': [
        'Vurdering av ansikt',
        ':persevering_face:',
        'Hjelp Ansikt',
        'Srunede øyne'
    ],
    '😞': [
        'Skuffet Ansikt',
        ':disappointed_face:',
        '::(:',
        'Trist',
        'Dysmodig'
    ],
    '😓': [
        'Fjern ansikt med søt',
        ':downcast_face_with_sweat:',
        'Vanskelig arbeid',
        'Trist søt ansikt',
        'Ansikt med gammel søt'
    ],
    '😩': [
        'Bekjente Ansikt',
        ':weary_face:',
        'Tørrt ansikt',
        'Levering'
    ],
    '😫': [
        'Lei Ansikt',
        ':tired_face:',
        'Utslitt',
        'Satt opp',
        'Tørrt ansikt'
    ],
    '😤': [
        'Ansikt med Steam fra nese',
        ':face_with_steam_from_nose:',
        'Airing of Grievances',
        'Frustrert',
        'Sint Ansikt',
        'Steaming',
        'Håper med marger ansikt'
    ],
    '😡': [
        'Poutering ansikt',
        'fuck',
        ':pouting_face:',
        'Sint Ansikt',
        'Grumpy Ansikt',
        'Sint Ansikt',
        'Rød ansikt',
        ':red:'
    ],
    '😠': [
        'Sint Ansikt',
        ':angry_face:',
        'Sint',
        'Grumpy Ansikt'
    ],
    '🤬': [
        'Henvendelse',
        'fuck',
        ':swearing:',
        '@#$%&!',
        'Ansikt med symboler på ungdom',
        'Cursing',
        'Dussing',
        'Grawlix',
        'Ansikt med symboler over mor',
        'Alvorlig ansikt med symboler for dekkende mor',
        ':red:'
    ],
    '🥲': [
        'Smil ansikt med tåre',
        ':smiling_face_with_tear:'
    ],
    '😮‍💨': [
        'Ansikt utånding',
        ':face_exhaling:',
        'Sigh'
    ],
    '😵‍💫': [
        'Ansikt med Spiral Eyes',
        ':face_with_spiral_eyes:',
        'Dizzy Face'
    ],
    '😶‍🌫️': [
        'Ansikt i skyer',
        'røyk',
        ':face_in_clouds:',
        'Brain Fog',
        'Glemmefull',
        'Dis'
    ],
    '🥸': [
        'Forkledd ansikt',
        ':disguised_face:'
    ],
    '🫠': [
        'Melting Ansikt',
        ':melting_face:'
    ],
    '🫢': [
        'Ansikt med Open Eyes og Hand Over Mouth',
        ':face_with_open_eyes_and_hand_over_mouth:'
    ],
    '🫣': [
        'Tone med Peeking Øye',
        ':face_with_peeking_eye:'
    ],
    '🫡': [
        'Lønner Ansikt',
        ':saluting_face:',
        'Militær',
        'Hær',
        'RAF',
        'Marineblå'
    ],
    '🫥': [
        'Dottet linjefase',
        ':dotted_line_face:',
        ':transparent:'
    ],
    '🫤': [
        'Ansikt med diagonalt Mouth',
        ':face_with_diagonal_mouth:'
    ],
    '🥹': [
        'Ansikt holder igjen tårer',
        ':face_holding_back_tears:'
    ],
    '🫨': [
        'Shaking Face',
        ':shaking_face:'
    ],
    '🙂‍↔️': [
        'Head Shaking Horizontally',
        ':head_shaking_horizontally:'
    ],
    '🙂‍↕️': [
        'Head Shaking Vertically',
        ':head_shaking_vertically:'
    ],
    '😈': [
        'Smilende Ansikt med horn',
        ':smiling_face_with_horns:',
        'Ond',
        'Onde horn',
        'Glad djevelen',
        'Lilla djonde',
        'Rød djevelen',
        ':purple:'
    ],
    '👿': [
        'Sint Ansikt med horn',
        ':angry_face_with_horns:',
        'Ond',
        'Onde horn',
        'Lilla djonde',
        'Lilla Goblin',
        'Trist djevelen',
        'Imp',
        ':purple:'
    ],
    '🤡': [
        'Klovn Ansikt',
        ':clown_face:',
        'Skumle klovn',
        'Ond klovn',
        'Skummel klovn'
    ],
    '👽': [
        'Romvesen',
        ':alien:',
        'ET'
    ],
    '👾': [
        'Romvesen Monster',
        ':alien_monster:',
        'Mellomroms inngraver',
        'Video Spill Monster'
    ],
    '🤖': [
        'Robot',
        ':robot:',
        'Robot Ansikt'
    ],
    '👹': [
        'Ogre',
        ':ogre:',
        'Maske Ansikt',
        'Oni',
        'Rød monster',
        'Japanske Ogre',
        ':red:'
    ],
    '👻': [
        'Spøkelse',
        ':ghost:',
        'Halloween'
    ],
    '🗣️': [
        'Snakke hodet',
        ':speaking_head:',
        'Mansundring',
        'Melding',
        'Rope',
        'Tale hode i Silhouette',
        ':blue:'
    ],
    '👤': [
        'Støv i Silhouette',
        ':bust_in_silhouette:',
        'Skygge',
        'Silhouette',
        'Bruker',
        'Silhouette of Person',
        ':blue:'
    ],
    '🫂': [
        'Folk digdiggging',
        ':people_hugging:',
        ':blue:'
    ],
    '👥': [
        'Stenger i Silhouette',
        ':busts_in_silhouette:',
        'Skygger',
        'Silhouettes',
        'Brukere',
        'Silhouette til to folk',
        ':blue:'
    ]
};
/*people*/
emojis_language[lang][3] = {
    '👶{{skin_tone}}': [
        'Baby',
        ':baby:',
        'Barn',
        'Smøller'
    ],
    '🧒{{skin_tone}}': [
        'Barn',
        ':child:',
        'Kjønn nøytral barn'
    ],
    '👧{{skin_tone}}': [
        'Jente',
        ':girl:',
        ':woman:'
    ],
    '🧑{{skin_tone}}': [
        'Person',
        ':person:',
        'Kjønn nøytral voksen',
        'Voksen',
        ':person:'
    ],
    '🧔{{skin_tone}}': [
        'Person: Beard',
        ':person_beard:',
        'Beard',
        'Bearded Person',
        'Bearded Person',
        ':person:'
    ],
    '🧑{{skin_tone}}‍🦰': [
        'Person: Rød Hår',
        ':person_red_hair:',
        'Fingerperson',
        'Person rødhode',
        'Person med rød hår',
        ':person:'
    ],
    '🧑{{skin_tone}}‍🦱': [
        'Person: Krøllete hår',
        ':person_curly_hair:',
        'Person med forbannelseshår',
        ':person:'
    ],
    '🧑{{skin_tone}}‍🦳': [
        'Person: Hvit hår',
        ':person_white_hair:',
        'Person med grå hår',
        ':person:'
    ],
    '🧑{{skin_tone}}‍🦲': [
        'Person: Bald',
        ':person_bald:',
        'Person med intet hår',
        ':person:'
    ],
    '👱{{skin_tone}}': [
        'Person: ond hår',
        ':person_blond_hair:',
        'Person med Blonde Hår',
        ':person:'
    ],
    '👨{{skin_tone}}': [
        'Mann',
        ':man:',
        'Mann',
        'Bart Mann',
        ':man:'
    ],
    '🧔{{skin_tone}}‍♂️': [
        'Man: Skjegg',
        ':man_beard:',
        'Bjørne',
        'Berget mann',
        'Bearded Person',
        ':man:'
    ],
    '👨{{skin_tone}}‍🦰': [
        'Man: Rød hår',
        ':man_red_hair:',
        'Sanger Mann',
        'Man Redhead',
        'Mann med rødt hår',
        ':man:'
    ],
    '👨{{skin_tone}}‍🦱': [
        'Man: Krølllhår',
        ':man_curly_hair:',
        'Mann med krølle hår',
        ':man:'
    ],
    '👨{{skin_tone}}‍🦳': [
        'Man: Hvit hår',
        ':man_white_hair:',
        'Mann med grå hår',
        ':man:'
    ],
    '👨{{skin_tone}}‍🦲': [
        'Man: Bald',
        ':man_bald:',
        'Mann med Intet Hår',
        ':man:'
    ],
    '👱{{skin_tone}}‍♂️': [
        'Man: ond hår',
        ':man_blond_hair:',
        'Mennesket med Blonde Hår',
        ':man:'
    ],
    '👩{{skin_tone}}': [
        'Kvinne',
        ':woman:',
        'Kvinne',
        'Dame',
        'Gul dame',
        ':woman:'
    ],
    '🧔{{skin_tone}}‍♀️': [
        'Kvinner: Skje',
        ':woman_beard:',
        'Bjørne',
        'Berget dame',
        ':woman:'
    ],
    '👩{{skin_tone}}‍🦰': [
        'Kvinner: Rød Hår',
        ':woman_red_hair:',
        'Finger dame',
        'Woman Redhead',
        'Kvinne med rødt hår',
        ':woman:'
    ],
    '👩{{skin_tone}}‍🦱': [
        'Kvinner: Krølllhår',
        ':woman_curly_hair:',
        'Kvinne med kaffe hår',
        ':woman:'
    ],
    '👩{{skin_tone}}‍🦳': [
        'Kvinner: Hvit hår',
        ':woman_white_hair:',
        'Kvinne med grå hår',
        ':woman:'
    ],
    '👩{{skin_tone}}‍🦲': [
        'Kvinner: Bald',
        ':woman_bald:',
        'Kvinne i Intet Hår',
        ':woman:'
    ],
    '👱{{skin_tone}}‍♀️': [
        'Kvinner: Blond hår',
        ':woman_blond_hair:',
        'Kvinne med Blonde Hår',
        ':woman:'
    ],
    '👴{{skin_tone}}': [
        'Eldre mann',
        ':older_man:',
        ':older:',
        'Gammel mann',
        'Grandpa',
        'Gammel mann',
        ':man:'
    ],
    '👵{{skin_tone}}': [
        'Eldre dame',
        ':older_woman:',
        ':older:',
        'Eldre dame',
        'Bestemor',
        'Nanna',
        'Gammel dame',
        'Gammel dame',
        ':woman:'
    ],
    '🧓{{skin_tone}}': [
        'Eldre person',
        ':older_person:',
        ':older:',
        'Kjønn nøytral eldre voksne',
        ':person:'
    ],
    '👼{{skin_tone}}': [
        'Baby Engel',
        ':baby_angel:',
        'Engel',
        'Cherub',
        'Hemmelig',
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
        'Mx krav',
        ':mx_clause:',
        'Person jul',
        ':person:'
    ],
    '🤴{{skin_tone}}': [
        'Prins',
        ':price:',
        ':man:'
    ],
    '👸{{skin_tone}}': [
        'Prinsesse',
        ':pricess:',
        'Blonde jente',
        'Jente med krone',
        'Jente Med Tiara',
        ':woman:'
    ],
    '🫅{{skin_tone}}': [
        'Person med krone',
        ':person_with_crown:',
        ':person:'
    ],
    '👳{{skin_tone}}‍♂️': [
        'Mann jente Turban',
        ':man_wearing_turban:',
        ':wearing_turban:',
        'Arabisk',
        'Muslimsk',
        'Buddistisk',
        'Turban',
        ':man:'
    ],
    '👳{{skin_tone}}‍♀️': [
        'Kvinne fryktelig Turban',
        ':woman_wearing_turban:',
        ':wearing_turban:',
        'Arabisk',
        'Muslimsk',
        'Buddistisk',
        'Turban',
        ':woman:'
    ],
    '👳{{skin_tone}}': [
        'Person som frykter Turban',
        ':person_wearing_turban:',
        ':wearing_turban:',
        'Arabisk',
        'Muslimsk',
        'Buddistisk',
        'Turban',
        ':person:'
    ],
    '👲{{skin_tone}}': [
        'Person med hodeskall',
        ':person_with_skullcap:',
        'Asiatisk mann',
        'Mann med kinesisk hatt',
        'Mann med Gua Pi Mao',
        ':person:'
    ],
    '🧕{{skin_tone}}': [
        'Kvinne med hoskarf',
        ':woman_with_headscarf:',
        'Hijab',
        'Person med hodebunn',
        ':woman:'
    ],
    '🤵{{skin_tone}}‍♀️': [
        'Mann i Tuxedo',
        ':man_in_tuxedo:',
        ':tuxedo:',
        'Groom',
        'Mann i Drakt',
        'Bryllup',
        ':man:'
    ],
    '🤵{{skin_tone}}‍♂️': [
        'Kvinne i Tuxedo',
        ':woman_in_tuxedo:',
        ':tuxedo:',
        'Groom',
        'Kvinne i Drakt',
        'Bryllup',
        ':woman:'
    ],
    '🤵{{skin_tone}}': [
        'Person i Tuxedo',
        ':person_in_tuxedo:',
        ':tuxedo:',
        'Groom',
        'Person i Drakt',
        'Bryllup',
        ':person:'
    ],
    '👰{{skin_tone}}‍♂️': [
        'Mann med Veil',
        ':man_with_veil:',
        ':veil:',
        'Bryllup',
        'Bridegroom',
        'Bryllup',
        ':man:'
    ],
    '👰{{skin_tone}}‍♀️': [
        'Kvinne med Veil',
        ':woman_with_veil:',
        ':veil:',
        'Bryllup',
        'Bro',
        'Bro med Veil',
        'Bryllup',
        ':woman:'
    ],
    '👰{{skin_tone}}': [
        'Person med Veil',
        ':person_with_veil:',
        ':veil:',
        'Bryllup',
        'Bryllup',
        ':person:'
    ],
    '👨{{skin_tone}}‍🍼': [
        'Menneskemat Baby',
        ':man_feeding_baby:',
        ':feeding_baby:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🍼': [
        'Kvinne mating Baby',
        ':woman_feeding_baby:',
        ':feeding_baby:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🍼': [
        'Person Feeding Baby',
        ':person_feeding_baby:',
        ':feeding_baby:',
        ':person:'
    ],
    '🥷': [
        'Ninja',
        ':ninja:'
    ],
    '🫃{{skin_tone}}': [
        'Gravid mann',
        ':pregnant_man:',
        ':pregnant:',
        'Graviditet',
        ':man:'
    ],
    '🤰{{skin_tone}}': [
        'Gravide dame',
        ':pregnant_woman:',
        ':pregnant:',
        'Graviditet',
        'Gravid kvinne',
        ':woman:'
    ],
    '🫄{{skin_tone}}': [
        'Graviditet Person',
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
        'Mann Superhelt',
        ':man_superhero:',
        ':superhero:',
        ':man:'
    ],
    '🦸{{skin_tone}}‍♀️': [
        'Kvinne Superhelt',
        ':woman_superhero:',
        ':superhero:',
        ':woman:'
    ],
    '🦸{{skin_tone}}': [
        'Person Superhelt',
        ':person_superhero:',
        ':superhero:',
        ':person:'
    ],
    '🦹{{skin_tone}}‍♂️': [
        'Mann Supervillin',
        ':man_supervillain:',
        ':supervillain:',
        ':man:'
    ],
    '🦹{{skin_tone}}‍♀️': [
        'Kvinnisk Supervillberg',
        ':woman_supervillain:',
        ':supervillain:',
        ':woman:'
    ],
    '🦹{{skin_tone}}': [
        'Person Supervillain',
        ':person_supervillain:',
        ':supervillain:',
        ':person:'
    ],
    '🧙{{skin_tone}}‍♂️': [
        'Manns Magiker',
        ':man_mage:',
        ':mage:',
        'Sorcerer',
        'Veiviser',
        ':man:'
    ],
    '🧙{{skin_tone}}‍♀️': [
        'Kvinne Magiker',
        ':woman_mage:',
        ':mage:',
        'Heks',
        'Ørhet',
        'Veiviser',
        ':woman:'
    ],
    '🧙{{skin_tone}}': [
        'Person alder',
        ':person_mage:',
        ':mage:',
        'Veiviser',
        ':mage:',
        ':person:'
    ],
    '🧚{{skin_tone}}‍♂️': [
        'Mann Fe',
        ':man_fairy:',
        ':fairy:',
        ':man:'
    ],
    '🧚{{skin_tone}}‍♀️': [
        'Kvinne Fe',
        ':woman_fairy:',
        ':fairy:',
        ':woman:'
    ],
    '🧚{{skin_tone}}': [
        'Person Fe',
        ':person_fairy:',
        ':fairy:',
        ':person:'
    ],
    '🧛{{skin_tone}}‍♂️': [
        'Mannlig Vampyr',
        ':man_vampire:',
        ':vampire:',
        'Drakula',
        ':man:'
    ],
    '🧛{{skin_tone}}‍♀️': [
        'Kvinne Vampyr',
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
        'Havfrue',
        ':mermaid:',
        'Nakjente',
        ':woman:'
    ],
    '🧜{{skin_tone}}': [
        'Merperson',
        ':merperson:',
        ':person:'
    ],
    '🧝{{skin_tone}}‍♂️': [
        'Mann alv',
        ':man_elf:',
        ':elf:',
        ':man:'
    ],
    '🧝{{skin_tone}}‍♀️': [
        'Kvinne alv',
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
        'Mann Detektiv',
        ':man_detective:',
        ':detective:',
        'Privat øye',
        'Sleuth',
        'Spion',
        'Man Sleuth',
        'Søvn eller Spy',
        '007',
        'Inspektør',
        ':man:'
    ],
    '🕵️{{skin_tone}}‍♀️': [
        'Kvinne detektiv',
        ':woman_detective:',
        ':detective:',
        'Privat øye',
        'Sleuth',
        'Spion',
        'Kvinne sløvhet',
        'Søvn eller Spy',
        '007',
        'Inspektør',
        ':woman:'
    ],
    '🕵{{skin_tone}}': [
        'Person Detektiv',
        ':person_detective:',
        ':detective:',
        'Privat øye',
        'Sleuth',
        'Spion',
        'Person Sleuth',
        'Søvn eller Spy',
        '007',
        'Inspektør',
        ':person:'
    ],
    '💂{{skin_tone}}‍♂️': [
        'Menn: Vakt',
        ':man_guard:',
        ':guard:',
        'Britisk Guardsman',
        'Fot vakt',
        ':man:'
    ],
    '💂{{skin_tone}}‍♀️': [
        'Kvinner: Vakt',
        ':woman_guard:',
        ':guard:',
        'Britisk Guardsman',
        'Fot vakt',
        ':woman:'
    ],
    '💂{{skin_tone}}': [
        'Person: Vakt',
        ':person_guard:',
        ':guard:',
        'Britisk Guardsman',
        'Fot vakt',
        ':person:'
    ],
    '👮{{skin_tone}}‍♂️': [
        'Politipolitisk offiser',
        ':man_police_officer:',
        ':police_officer:',
        'Kopp',
        'Politi',
        'Politisk',
        ':man:'
    ],
    '👮{{skin_tone}}‍♀️': [
        'Kvinne politimyndighet',
        ':woman_police_officer:',
        ':police_officer:',
        'Kopp',
        'Politi',
        'Policewomansk',
        ':woman:'
    ],
    '👮{{skin_tone}}': [
        'Politipolitisk offiser',
        ':person_police_officer:',
        ':police_officer:',
        'Kopp',
        'Politi',
        ':person:'
    ],
    '👨{{skin_tone}}‍🚒': [
        'Mannlig Brannmann',
        ':man_firefighter:',
        ':firefighter:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🚒': [
        'Kvinne i Brannmann',
        ':woman_firefighter:',
        ':firefighter:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🚒': [
        'Person Firefighter',
        ':person_firefighter:',
        ':firefighter:',
        ':person:'
    ],
    '👨{{skin_tone}}‍✈️': [
        'Mann Pilot',
        ':man_pilot:',
        ':pilot:',
        ':man:'
    ],
    '👩{{skin_tone}}‍✈️': [
        'Kvinne Pilot',
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
        'Mannlig teknologi',
        ':man_technologist:',
        ':technologist:',
        'Mannlig teknologi',
        ':man:'
    ],
    '👩{{skin_tone}}‍💻': [
        'Kvinne teknologist',
        ':woman_technologist:',
        ':technologist:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍💻': [
        'Person teknologist',
        ':person_technologist:',
        ':technologist:',
        ':person:'
    ],
    '👨{{skin_tone}}‍🎤': [
        'Mann sanger',
        ':man_singer:',
        ':singer:',
        'Bowie',
        'Aladdin Sane',
        ':man:'
    ],
    '👩{{skin_tone}}‍🎤': [
        'Kvinnesanger',
        ':woman_singer:',
        ':singer:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🎤': [
        'Person sanger',
        ':person_singer:',
        ':singer:',
        ':person:'
    ],
    '👨{{skin_tone}}‍🎨': [
        'Mann artist',
        ':man_artist:',
        ':artist:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🎨': [
        'Kvinne Artist',
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
        'Mann byggearbeider',
        ':man_contruction_worker:',
        ':contruction_worker:',
        ':man:'
    ],
    '👷{{skin_tone}}‍♀️': [
        'Kvinne byggearbeider',
        ':woman_contruction_worker:',
        ':contruction_worker:',
        ':woman:'
    ],
    '👷{{skin_tone}}': [
        'Konstruksjonsarbeider for Person',
        ':person_contruction_worker:',
        ':contruction_worker:',
        ':person:'
    ],
    '👨{{skin_tone}}‍🚀': [
        'Mann Astronaut',
        ':man_astronaut:',
        ':astronaut:',
        'Mann Kosmonaut',
        ':man:'
    ],
    '👩{{skin_tone}}‍🚀': [
        'Kvinne Astronaut',
        ':woman_astronaut:',
        ':astronaut:',
        'Kvinne monmonaut',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🚀': [
        'Person Astronaut',
        ':person_astronaut:',
        ':astronaut:',
        'Person Cosmonaut',
        ':person:'
    ],
    '👨{{skin_tone}}‍🔬': [
        'Mann Forsker',
        ':man_scientist:',
        ':scientist:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🔬': [
        'Kvinne forsker',
        ':woman_scientist:',
        ':scientist:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🔬': [
        'Person forsker',
        ':person_scientist:',
        ':scientist:',
        ':person:'
    ],
    '👨{{skin_tone}}‍💼': [
        'Mannlig kontorarbeider',
        ':man_office_worker:',
        ':office_worker:',
        'Administrerende direktør',
        'Forretningsmann',
        ':man:'
    ],
    '👩{{skin_tone}}‍💼': [
        'Kvinne i kontorarbeider',
        ':woman_office_worker:',
        ':office_worker:',
        'Bedøvende kvinne',
        'Administrerende direktør',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍💼': [
        'Person kontorarbeider',
        ':person_office_worker:',
        ':office_worker:',
        'Forretninger',
        'Administrerende direktør',
        ':person:'
    ],
    '👨{{skin_tone}}‍🏭': [
        'Manisk fabrikkarbeider',
        ':man_factory_worker:',
        ':factory_worker:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🏭': [
        'Kvinnelig fabrikkarbeider',
        ':woman_factory_worker:',
        ':factory_worker:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🏭': [
        'Fabrikkarbeider for Person',
        ':person_factory_worker:',
        ':factory_worker:',
        ':person:'
    ],
    '👨{{skin_tone}}‍🔧': [
        'Mann Mekanisk',
        ':man_mechanic:',
        ':mechanic:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🔧': [
        'Kvinne Mekanisk',
        ':woman_mechanic:',
        ':mechanic:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🔧': [
        'Person Mechanic',
        ':person_mechanic:',
        ':mechanic:',
        ':person:'
    ],
    '👨{{skin_tone}}‍🍳': [
        'Mann kokk',
        ':man_cook:',
        ':cook:',
        'Mann kokk',
        'Mann kokk',
        ':man:'
    ],
    '👩{{skin_tone}}‍🍳': [
        'Kvinnesoken',
        ':woman_cook:',
        ':cook:',
        'Kul kokk',
        'Kvinnelig kokk',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🍳': [
        'Person kok',
        ':person_cook:',
        ':cook:',
        'Person kokk',
        ':person:'
    ],
    '👨{{skin_tone}}‍🌾': [
        'Mann Dyrker',
        ':man_farmer:',
        ':farmer:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🌾': [
        'Kvinne bonde',
        ':woman_farmer:',
        ':farmer:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🌾': [
        'Person Dyrker',
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
        'Mann student',
        ':man_student:',
        ':student:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🎓': [
        'Kvinne student',
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
        'Mannlig helsearbeider',
        ':man_health_worker:',
        ':health_worker:',
        'Mannlig doktor',
        'Mannlig sykepleie',
        ':man:'
    ],
    '👩{{skin_tone}}‍⚕️': [
        'Kvinne helsearbeider',
        ':woman_health_worker:',
        ':health_worker:',
        'Kvinnelig doktor',
        'Kvinnelig nakke',
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
        'Menns krymping',
        ':man_shrugging:',
        ':shrugging:',
        'huk mann',
        'dunno',
        ':man:'
    ],
    '🤷{{skin_tone}}‍♀️': [
        'Kvinne Brygging',
        ':woman_shrugging:',
        ':shrugging:',
        'huk kvinne',
        'dunno',
        ':woman:'
    ],
    '🤷{{skin_tone}}': [
        'Person innvielse',
        ':person_shrugging:',
        ':shrugging:',
        'foretaks person',
        'dunno',
        ':person:'
    ],
    '🤦{{skin_tone}}‍♂️': [
        'Mann ansiktslam',
        ':man_facepalming:',
        ':facepalming:',
        ':man:'
    ],
    '🤦{{skin_tone}}‍♀️': [
        'Kvinne Facepalming',
        ':woman_facepalming:',
        ':facepalming:',
        ':woman:'
    ],
    '🤦{{skin_tone}}': [
        'Fakultet for Person',
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
        'Person bue',
        ':person_bowing:',
        ':bowing:',
        ':person:'
    ],
    '🧏{{skin_tone}}‍♂️': [
        'Deaf Mann',
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
        'Deaf Person',
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
        'Kvinne Raising Hand',
        ':woman_raising_hand:',
        'Glad dame Raising One Hand',
        ':raising_hand:',
        ':woman:'
    ],
    '🙋{{skin_tone}}': [
        'Person Raising Hand',
        ':person_raising_hand:',
        'Glad Person Raising One Hand',
        ':raising_hand:',
        ':person:'
    ],
    '💁{{skin_tone}}‍♂️': [
        'Menneskehetens Tipping Hand',
        ':man_tipping_hand:',
        'Information Desk Mann',
        ':tipping_hand:',
        ':man:'
    ],
    '💁{{skin_tone}}‍♀️': [
        'Kvinne Tipping Hand',
        ':woman_tipping_hand:',
        'Information Desk dame',
        ':tipping_hand:',
        ':woman:'
    ],
    '💁{{skin_tone}}': [
        'Person Tipping Hand',
        ':person_tipping_hand:',
        'Information Desk Person',
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
        'Kvinnene Gest OK',
        ':woman_gesturing_ok:',
        ':gesturing_ok:',
        ':woman:'
    ],
    '🙆{{skin_tone}}': [
        'Person Går OK',
        ':person_gesturing_ok:',
        ':gesturing_ok:',
        ':person:'
    ],
    '🙅{{skin_tone}}‍♂️': [
        'Mann flytter nei',
        ':man_gesturing_no:',
        ':gesturing_no:',
        ':man:'
    ],
    '🙅{{skin_tone}}‍♀️': [
        'Kvinne Gest Nei',
        ':woman_gesturing_no:',
        ':gesturing_no:',
        ':woman:'
    ],
    '🙅{{skin_tone}}': [
        'Person Gest Nei',
        ':person_gesturing_no:',
        ':gesturing_no:',
        ':person:'
    ],
    '🙎{{skin_tone}}‍♂️': [
        'Mann Pouting',
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
        'Person poserer',
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
        'Kvinne Frowning',
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
        'Mann går',
        ':man_walking:',
        ':walking:',
        ':man:'
    ],
    '🚶{{skin_tone}}‍♀️': [
        'Kvinne gåing',
        ':woman_walking:',
        ':walking:',
        ':woman:'
    ],
    '🚶{{skin_tone}}': [
        'Person gåing',
        ':person_walking:',
        ':walking:',
        ':person:'
    ],
    '🚶{{skin_tone}}‍♂️‍➡️': [
        'Man Walking Facing Right',
        ':man_walking_facing_right:',
        ':walking:',
        ':man:'
    ],
    '🚶{{skin_tone}}‍♀️‍➡️': [
        'Woman Walking Facing Right',
        ':woman_walking_facing_right:',
        ':walking:',
        ':woman'
    ],
    '🚶{{skin_tone}}‍➡️': [
        'Person Walking Facing Right',
        ':person_walking_facing_right:',
        ':walking:',
        ':person:'
    ],
    '🧍{{skin_tone}}‍♂️': [
        'Mann reiser',
        ':man_standing:',
        ':standing:',
        ':man:'
    ],
    '🧍{{skin_tone}}‍♀️': [
        'Kvinne i stand',
        ':woman_standing:',
        ':standing:',
        ':woman:'
    ],
    '🧍{{skin_tone}}': [
        'Person stående',
        ':person_standing:',
        ':standing:',
        ':person:'
    ],
    '🧎{{skin_tone}}‍♂️': [
        'Mann Kneeling',
        ':man_kneeling:',
        ':kneeling:',
        ':man:'
    ],
    '🧎{{skin_tone}}‍♀️': [
        'Kvinne Nesten',
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
    '🧎{{skin_tone}}‍♂️‍➡️': [
        'Man Kneeling Facing Right',
        ':man_kneeling_facing_right:',
        ':kneeling:',
        ':man:'
    ],
    '🧎{{skin_tone}}‍♀️‍➡️': [
        'Woman Kneeling Facing Right',
        ':woman_kneeling_facing_right:',
        ':kneeling:',
        ':woman:'
    ],
    '🧎{{skin_tone}}‍➡️': [
        'Person Kneeling Facing Right',
        ':person_kneeling_facing_right:',
        ':kneeling:',
        ':person:'
    ],
    '👨{{skin_tone}}‍🦯': [
        'Mann med hvit stang',
        ':man_with_white_cane:',
        ':white_cane:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🦯': [
        'Kvinne med hvit stang',
        ':woman_with_white_cane:',
        ':white_cane:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🦯': [
        'Person med hvit stang',
        ':person_with_white_cane:',
        ':white_cane:',
        ':person:'
    ],
    '👨{{skin_tone}}‍🦯‍➡️': [
        'Man with White Cane Facing Right',
        ':man_with_white_cane_facing_right:',
        ':white_cane:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🦯‍➡️': [
        'Woman with White Cane Facing Right',
        ':woman_with_white_cane_facing_right:',
        ':white_cane:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🦯‍➡️': [
        'Person with White Cane Facing Right',
        ':person_with_white_cane_facing_right:',
        ':white_cane:',
        ':person:'
    ],
    '👨{{skin_tone}}‍🦼': [
        'Mann i motorisert rullestol',
        ':man_in_motorized_wheelchair:',
        ':motorized_wheelchair:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🦼': [
        'Kvinne i motorisert rullestol',
        ':woman_in_motorized_wheelchair:',
        ':motorized_wheelchair:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🦼': [
        'Person i motorisert rullestol',
        ':person_in_motorized_wheelchair:',
        ':motorized_wheelchair:',
        ':person:'
    ],
    '👨{{skin_tone}}‍🦼‍➡️': [
        'Man in Motorized Wheelchair Facing Right',
        ':man_in_motorized_wheelchair_facing_right:',
        ':motorized_wheel:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🦼‍➡️': [
        'Woman in Motorized Wheelchair Facing Right',
        ':woman_in_motorized_wheelchair_facing_right:',
        ':motorized_wheel:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🦼‍➡️': [
        'Person in Motorized Wheelchair Facing Right',
        ':person_in_motorized_wheelchair_facing_right:',
        ':motorized_wheel:',
        ':person:'
    ],
    '👨{{skin_tone}}‍🦽': [
        'Mann i håndbok rullestol',
        ':man_manual_wheelchair:',
        ':manual_wheelchair:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🦽': [
        'Kvinne i Manuell rullestol',
        ':woman_manual_wheelchair:',
        ':manual_wheelchair:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🦽': [
        'Person i håndbok rullestol',
        ':person_manual_wheelchair:',
        ':manual_wheelchair:',
        ':person:'
    ],
    '👨{{skin_tone}}‍🦽‍➡️': [
        'Man in Manual Wheelchair Facing Right',
        ':man_manual_wheelchair_facing_right:',
        ':manual_wheelchair:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🦽‍➡️': [
        'Woman in Manual Wheelchair Facing Right',
        ':woman_manual_wheelchair_facing_right:',
        ':manual_wheelchair:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🦽‍➡️': [
        'Person in Manual Wheelchair Facing Right',
        ':person_manual_wheelchair_facing_right:',
        ':manual_wheelchair:',
        ':person:'
    ],
    '👯‍♂️': [
        'Menn med Bunny ører',
        ':men_with_bunny_hears:',
        ':bunny_ears:',
        ':man:'
    ],
    '👯‍♀️': [
        'Kvinner med Bunny ører',
        ':women_with_bunny_hears:',
        ':bunny_ears:',
        ':woman:'
    ],
    '👯': [
        'Mennesker med Bunny ører',
        ':people_with_bunny_hears:',
        ':bunny_ears:',
        ':person:'
    ],
    '🕴️{{skin_tone}}': [
        'Person i Drakt Levitating',
        ':person_in_suit_levitating:',
        'Svevende mann',
        'Rude gutt',
        'Walt Jabsco',
        'Mann i Business Drakt Levitating',
        ':person:'
    ],
    '🧖{{skin_tone}}‍♂️': [
        'Mann i Steamy Room',
        ':man_in_steamy_room:',
        ':steamy_room:',
        'Mann i Sauna',
        ':man:'
    ],
    '🧖{{skin_tone}}‍♀️': [
        'Kvinne i Steamy Room',
        ':woman_in_steamy_room:',
        ':steamy_room:',
        'Kvinne i Sauna',
        ':woman:'
    ],
    '🧖{{skin_tone}}': [
        'Person i Steamy Room',
        ':person_in_steamy_room:',
        ':steamy_room:',
        'Person i Sauna',
        ':person:'
    ],
    '👫{{skin_tone}}': [
        'Kvinne og mann Holding Hands',
        ':woman_and_man_holding_hands:',
        ':holding_hands:',
        'Heteroseksuelt Couple',
        'Rett Couple',
        'Mann og kvinners Holding Hands',
        ':woman:'
    ],
    '👬{{skin_tone}}': [
        'Menn Holding Hånd',
        ':holding_hands:',
        ':men_holding_hands:',
        'Si Couple',
        'To menn Holding Hands',
        ':man:'
    ],
    '👭{{skin_tone}}': [
        'Kvinner som Holding Hands',
        ':holding_hands:',
        ':women_holding_hands:',
        'Lesbiisk Couple',
        'To kvinner Holding Hands',
        ':woman:'
    ],
    '🧑‍🤝‍🧑': [
        'Folk som holder hoder',
        ':holding_hands:',
        ':people_holding_hands:',
        'To folk som holder orden',
        'Kvinnelig Kven',
        'Kjønn Nøytral Couple',
        'Kjønnsavvik Couple',
        ':person:'
    ],
    '🧑‍🧑‍🧒': [
        'Family: Adult, Adult, Child',
        ':family_adult_adult_child:',
        'Family: Person, Person, Child'
    ],
    '👨‍👩‍👦': [
        'Familie med mor, Far og Sønn',
        ':family_with_mother_father_and_son:',
        'Familie: Menn, Kvinner, Gutt'
    ],
    '👨‍👩‍👧': [
        'Familie med mor, Far og døre',
        ':family_with_mother_father_and_daughter:',
        'Familie: Menn, Kvinner, Jente'
    ],
    '👨‍👨‍👦': [
        'Familie med to Fadere og Sønn',
        ':family_with_two_fathers_and_son:',
        'Familie: Menn, Gutt',
        ':man:'
    ],
    '👨‍👨‍👧': [
        'Familie med to fly og latter',
        ':family_with_two_fathers_and_daughter:',
        'Familie: Menn, Jente',
        ':man:'
    ],
    '👩‍👩‍👦': [
        'Familie med to mødre og Sønn',
        ':family_with_two_mothers_and_son:',
        'Familie: Kvinner, Kvinner, Gutt',
        ':woman:'
    ],
    '👩‍👩‍👧': [
        'Familie med to mødre og drakt',
        ':family_with_two_mothers_and_daughter:',
        'Familie: Kvinner, jenter, jente',
        ':woman:'
    ],
    '🧑‍🧑‍🧒‍🧒': [
        'Family: Adult, Adult, Child, Child',
        ':family_adult_adult_child_child:',
        'Family: Person, Person, Child, Child'
    ],
    '👨‍👩‍👧‍👦': [
        'Familie med mor, Fader, Sønn og latter',
        ':family_with_mother_father_son_and_daughter:',
        'Familie: Menn, Kvinner, Jenter, Gutt'
    ],
    '👨‍👩‍👦‍👦': [
        'Familie med mor, Fader og to sanger',
        ':family_with_mother_father_and_two_sons:',
        'Familie: Menn, Kvinner, Gutt, Gutt'
    ],
    '👨‍👩‍👧‍👧': [
        'Familie med mor, Fader og to latter',
        ':family_with_mother_father_and_two_daughters:',
        'Familie: Menn, Kvinner, jenter, jente'
    ],
    '👨‍👨‍👧‍👦': [
        'Familie med to farer, Sønn og drakt',
        ':family_with_two_fathers_son_and_daughter:',
        'Familie: Menn, Menn, Jenter, Gutt',
        ':man:'
    ],
    '👨‍👨‍👦‍👦': [
        'Familie med to flaggermus og to sanger',
        ':family_with_two_fathers_and_two_sons:',
        'Familie: Menn, Menn, Gutt, Gutt',
        ':man:'
    ],
    '👨‍👨‍👧‍👧': [
        'Familie med to fly og to latter',
        ':family_with_two_fathers_and_two_daughters:',
        'Familie: Menn, Menn, Jenter, Jente',
        ':man:'
    ],
    '👩‍👩‍👧‍👦': [
        'Familie med to mor, Sønn og drakt',
        ':family_with_two_mothers_son_and_daughter:',
        'Familie: Kvinner, jenter, gutt',
        ':woman:'
    ],
    '👩‍👩‍👦‍👦': [
        'Familie med to mødre og to sanger',
        ':family_with_two_mothers_and_two_sons:',
        'Familie: Kvinner, Gutt, Gutt',
        ':woman:'
    ],
    '👩‍👩‍👧‍👧': [
        'Familie med to mødre og to latter',
        ':family_with_two_mothers_and_two_daughters:',
        'Familie: Kvinner, jenter, jente',
        ':woman:'
    ],
    '🧑‍🧒': [
        'Family: Adult, Child',
        ':family_adult_child:',
        'Family: Person, Child'
    ],
    '👨‍👦': [
        'Familie med Far og Sønn',
        ':family_with_father_and_son:',
        'Familie: Menn, Gutt',
        ':man:'
    ],
    '👨‍👧': [
        'Familie med Far og Morter',
        ':family_with_father_and_daughter:',
        'Familie: Menn, Jente',
        ':man:'
    ],
    '👩‍👧': [
        'Familie med mor og latter',
        ':family_with_mother_and_daughter:',
        'Familie: Kvinner, jente',
        ':woman:'
    ],
    '👨‍👧‍👧': [
        'Familie med Fader og to angrep',
        ':family_with_father_and_two_daughters:',
        'Familie: Menn, jenter, jente',
        ':man:'
    ],
    '🧑‍🧒‍🧒': [
        'Family: Adult, Child, Child',
        ':family_adult_child_child:',
        'Family: Person, Child, Child'
    ],
    '👨‍👦‍👦': [
        'Familie med Fader og to sanger',
        ':family_with_father_and_two_sons:',
        'Familie: Menn, Gutt',
        ':man:'
    ],
    '👨‍👧‍👦': [
        'Familie med Fader, Sønn og latter',
        ':family_with_father_son_and_daughter:',
        'Familie: Menn, Jenter, Gutt',
        ':man:'
    ],
    '👩‍👦': [
        'Familie med mor og Sønn',
        ':family_with_mother_and_son:',
        'Familie: Kvinner, Gutt',
        ':woman:'
    ],
    '👩‍👦‍👦': [
        'Familie med mor og to sanger',
        ':family_with_mother_and_two_sons:',
        'Familie: Kvinner, Gutt',
        ':woman:'
    ],
    '👩‍👧‍👦': [
        'Familie Med mor, Sønn og latter',
        ':family_with_mother_son_and_daughter:',
        'Familie: Kvinner, jenter, gutt',
        ':woman:'
    ],
    '👩‍👧‍👧': [
        'Familie med mor og to latter',
        ':family_with_mother_and_two_daughters:',
        'Familie: Kvinner, jenter, jente',
        ':woman:'
    ],
    '💑{{skin_tone}}': [
        'Couple with Heart',
        ':couple_with_heart:',
        'Par i kjærlighet',
        'Elsker Couple',
        'Kjønn Nøytral Couple',
        ':person:'
    ],
    '👩‍❤️‍👨': [
        'Mennesk og dame i hjerte',
        ':man_and_woman_with_heart:',
        'Par i kjærlighet',
        'Elsker Couple',
        'Couple with Heart'
    ],
    '👨‍❤️‍👨': [
        'To menn med hjerte',
        ':two_men_with_heart:',
        'Couple with Heart: Man, Mann',
        ':man:'
    ],
    '👩‍❤️‍👩': [
        'To kvinner med hjerte',
        ':two_women_with_heart:',
        'Couple with Heart: Woman, Woman',
        ':woman:'
    ],
    '💏{{skin_tone}}': [
        'Couple Kissing',
        ':couple_kissing:',
        'Kyss',
        'Kjønn Nøytral Couple Kissing',
        ':person:'
    ],
    '👩‍❤️‍💋‍👨': [
        'Mann og Kyssing',
        ':man_and_woman_kissing:'
    ],
    '👨‍❤️‍💋‍👨': [
        'To menn Kyssing',
        ':two_men_kissing:',
        'Mann og Mann Kyssing',
        ':man:'
    ],
    '👩‍❤️‍💋‍👩': [
        'To kvinner Kyssing',
        ':two_women_kissing:',
        'Kvinne og dame kyssing',
        ':woman:'
    ],
    '💆{{skin_tone}}‍♂️': [
        'Mann kjære sjef, massasje',
        ':man_getting_head_massage:',
        ':getting_head_massage:',
        ':man:'
    ],
    '💆{{skin_tone}}‍♀️': [
        'Kvinne hovedmassasje',
        ':woman_getting_head_massage:',
        ':getting_head_massage:',
        ':woman:'
    ],
    '💆{{skin_tone}}': [
        'Person kjeder sjefsmassasje',
        ':person_getting_head_massage:',
        ':getting_head_massage:',
        ':person:'
    ],
    '💇{{skin_tone}}‍♂️': [
        'Mann Henter Hårklipp',
        ':man_getting_haircut:',
        ':getting_haircut:',
        ':man:'
    ],
    '💇{{skin_tone}}‍♀️': [
        'Kvinne man Haircut',
        ':woman_getting_haircut:',
        ':getting_haircut:',
        ':woman:'
    ],
    '💇{{skin_tone}}': [
        'Person Henter hår',
        ':person_getting_haircut:',
        ':getting_haircut:',
        ':person:'
    ],
    '🛌{{skin_tone}}': [
        'Sover bolig',
        'trøtt',
        ':sleeping_accommodation:',
        'Person i sengen',
        'Person sove'
    ],
    '🛀{{skin_tone}}': [
        'Person bruker bath',
        'Badet',
        ':bath:',
        ':person_taking_bath:',
        'Populær bane',
        'Person tar en ed',
        'Sti',
        'Dusj',
        'Såpe',
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
        'Lang Rose Ansikt',
        'Rød maske',
        'Tengu',
        'Japansk Goblin'
    ]
};
/*animals*/
emojis_language[lang][4] = {
    '😺': [
        'Flirer katt',
        ':happy_cat:',
        ':smiling_cat:',
        '::):',
        'Glad katt',
        'Smør katt',
        'Glad katt Ansikt',
        'Smilende katt Ansikt med åpne mesterskap'
    ],
    '😸': [
        'Flirende katt med smøreøyne',
        ':grinning_cat:',
        '::D:',
        'Flirer katt',
        'Glad katt',
        'Grinning katt ansikt'
    ],
    '😹': [
        'Katt med Tårer med Joy',
        ':laughing_cat:',
        '::):',
        'Godte Tears katt',
        'Ler katt'
    ],
    '😻': [
        'Smilende katt med Hjerteøyne',
        ':heart_eyes_cat:',
        ':*.*:',
        'Hjerte øyne katt',
        'Elsker katt',
        'Smilende katt Ansikt med Hjerteformede øyne'
    ],
    '😼': [
        'Katt med Wry Smil',
        ':cat_with_wry_smile:',
        'Smør katt',
        'Smakende katt Ansikt',
        'Katt Ansikt med tørr mil'
    ],
    '😽': [
        'Kyss katt',
        ':kissing_cat:',
        '::*:',
        'Kyss katt ansikt',
        'Kysser katt ansikt med lukkede øyne'
    ],
    '🙀': [
        'Bekkyr katt',
        ':weary_cat:',
        '::O:',
        'Skarpt katt',
        'Skrikende katt',
        'Katt Ansikts-Screaming i Frykt',
        'Bra katt Ansikt'
    ],
    '😿': [
        'Gråte katt',
        ':crying_cat:',
        '::(:',
        'Trist katt',
        'Gråte katt Ansikt'
    ],
    '😾': [
        'Pouting katt',
        ':pouting_cat:',
        'Grumpy Cat',
        'Pouting katt ansikt'
    ],
    '🙈': [
        'See-No-Ond Ape',
        'Ape',
        ':see-no-evil_mokey:',
        ':see_no_evil_mokey:',
        ':monkey:',
        'Mizaru',
        'Apekattig Dekkende øyne'
    ],
    '🙉': [
        'Hjernet-Ond Ape',
        'Ape',
        ':hear-no-evil_monkey:',
        ':hear_no_evil_monkey:',
        ':monkey:',
        'Kikazaru',
        'Apekattig Dekkende Ører'
    ],
    '🙊': [
        'Høytaler uten Ond Ape',
        'Ape',
        ':speak-no-evil_monkey:',
        ':speak_no_evil_monkey:',
        ':monkey:',
        'Iwazaru',
        'Apekattig ungdom',
        'Ingen tale'
    ],
    '🐵': [
        'Ape Ansikt',
        ':monkey_face:',
        'Ape',
        'Ape hodet'
    ],
    '🐒': [
        'Ape',
        ':monkey:',
        'Spøkelig ape'
    ],
    '🦍': [
        'Gorilla',
        ':gorilla:'
    ],
    '🐶': [
        'Hund ansikt',
        ':dog_face:',
        'Hund',
        'Hvalp'
    ],
    '🐕': [
        'Hund',
        ':dog:',
        'Doggo',
        'Akita Inu'
    ],
    '🦮': [
        'Se øyepund',
        ':seeing_eye_dog:',
        'Guide hund'
    ],
    '🐕‍🦺': [
        'Service Hund',
        ':service_dog:'
    ],
    '🐩': [
        'Giftele',
        ':poodle:',
        'Hund',
        'Ørbrød',
        'Standard pakke',
        'Lekepoke'
    ],
    '🐺': [
        'Ulv',
        ':wolf:',
        'Ulv Ansikt',
        ':gray:',
        ':grey:'
    ],
    '🦊': [
        'Rev',
        ':fox:',
        'Rev ansikt',
        ':orange:'
    ],
    '🦝': [
        'Raccoon',
        ':raccoon:'
    ],
    '🐱': [
        'Katt ansikt',
        ':cat_face:',
        ':3',
        'Kattunge',
        'Sparken'
    ],
    '🐈': [
        'Katt',
        ':cat:',
        'Katt innenlands',
        'Tidslinje',
        'Hus'
    ],
    '🐈‍⬛': [
        'Svart katt',
        ':black_cat:',
        ':black:'
    ],
    '🦁': [
        'Løve',
        ':lion:',
        'Løve Ansikt'
    ],
    '🐯': [
        'Tiger Ansikt',
        ':tiger_face:',
        'Søt tigrer'
    ],
    '🐅': [
        'Tiger',
        ':tiger:',
        'Bengal tiger'
    ],
    '🐆': [
        'Leopard',
        ':leopard:',
        'Afrikansk Leopard',
        'Jaguar'
    ],
    '🐴': [
        'Hest Ansikt',
        ':horse_face:',
        'Hest hodet'
    ],
    '🐎': [
        'Hest',
        ':horse:',
        'Galloping Hest',
        'Stridshest'
    ],
    '🦄': [
        'Enhjørning',
        ':unicorn:',
        'Enhjørnings ansikt'
    ],
    '🦓': [
        'Zebra',
        ':zebra:',
        'Sebra ansikt',
        ':white:',
        ':black:'
    ],
    '🦌': [
        'Rådyr',
        ':deer:',
        'And',
        'Reinsdyr',
        'Stag'
    ],
    '🐮': [
        'Ku Ansikt',
        ':cow_face:',
        'Ku',
        'Glad ku'
    ],
    '🐂': [
        'OK',
        ':ox:',
        'Okse',
        'Lyse',
        'Oksen',
        'Steer'
    ],
    '🐃': [
        'Vann Buffalo',
        ':water_buffalo:',
        'Buffal',
        'Innenlandsk vannbuffer'
    ],
    '🐄': [
        'Ku',
        ':cow:',
        'Meire ku'
    ],
    '🐷': [
        'Gris Ansikt',
        ':pig_fase:',
        'Gris',
        'Grise hodet',
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
        'Villsvin',
        ':boar:',
        'Vortesvin',
        'Vild Boar',
        'Vild gris'
    ],
    '🐽': [
        'Gris Nose',
        ':pig_nose:'
    ],
    '🐏': [
        'Ram',
        ':ram:',
        'Sau'
    ],
    '🐑': [
        'Ewe',
        ':ewe:',
        'Lamb',
        'Sau'
    ],
    '🐐': [
        'Geit',
        ':goat:'
    ],
    '🐪': [
        'Kamel',
        ':camel:',
        'Arabisk Kamel',
        'Dromedary Camel',
        'Ett-Bump kamel'
    ],
    '🐫': [
        'ToHump Kamuel',
        ':two-hump_camel:',
        ':two_hump_camel:',
        'Asiatisk Kamel',
        'Bactriansk Kamel'
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
        'Mus Ansikt',
        ':mouse_face:',
        'Mus'
    ],
    '🐁': [
        'Mus',
        ':mouse:',
        'Smøremus',
        'Gnagning',
        'Mus'
    ],
    '🐀': [
        'Rotte',
        ':rat:',
        'Gnagning'
    ],
    '🐹': [
        'Hamster',
        ':hamster:',
        'Hamster Ansikt'
    ],
    '🐰': [
        'Kanin Ansikt',
        ':rabbit_face:',
        'Påske Hare'
    ],
    '🐇': [
        'Kanin',
        'Bunny',
        ':rabbit:',
        'Kanin Kanin'
    ],
    '🐿️': [
        'Jipmunk',
        ':chipmunk:',
        'Ekorn'
    ],
    '🦔': [
        'Pinnsvin',
        ':hedgehog:'
    ],
    '🦇': [
        'Flaggermus',
        ':bat:',
        'Batman',
        ':black:'
    ],
    '🐻': [
        'Bjørn',
        ':bear:',
        'Bjørn Ansikt',
        'Teddikete bjørn',
        ':brown:'
    ],
    '🐨': [
        'Koala',
        ':koala:',
        'Koala Face'
    ],
    '🐼': [
        'Panda',
        ':panda:',
        'Panda Face'
    ],
    '🦘': [
        'Kangaroo',
        ':kangaroo:',
        'Roo'
    ],
    '🦡': [
        'Distinksjon',
        ':badger:'
    ],
    '🦃': [
        'Tyrkia',
        ':turkey:',
        'thanksgiving Kalkun',
        'Vill Kalkun'
    ],
    '🐔': [
        'Kylling',
        ':chicken:',
        'Hen'
    ],
    '🐓': [
        'Kokk',
        ':cock:',
        'Rooster',
        'Kokerel'
    ],
    '🐣': [
        'Klekking kylling',
        ':hatching_chick:',
        'Baby kylling',
        'Kylling lukker',
        ':yellow:'
    ],
    '🐤': [
        'Baby kylling',
        ':baby_chick:',
        'Gul fugl',
        ':yellow:'
    ],
    '🐥': [
        'Baby Front-Facing kylling',
        ':front_baby_chick:',
        'Baby kylling',
        'Stående kylling',
        ':yellow:'
    ],
    '🐦': [
        'Fugl',
        ':bird:'
    ],
    '🐧': [
        'Penguin',
        ':penguin:'
    ],
    '🕊️': [
        'Flis',
        ':Dove:',
        'Dove of Peace',
        ':white:'
    ],
    '🦅': [
        'Ørn',
        ':Eagle:',
        'Bald Ørn'
    ],
    '🦆': [
        'And',
        ':Duck:'
    ],
    '🦢': [
        'Svane',
        ':swan:',
        ':white:'
    ],
    '🦉': [
        'Ugle',
        ':owl:',
        ':brown:'
    ],
    '🦚': [
        'Påfugl',
        ':peacock:'
    ],
    '🦜': [
        'Papegøye',
        ':parrot:'
    ],
    '🐸': [
        'Frosk',
        ':frog:',
        'Padde',
        'Frosk Ansikt',
        ':green:'
    ],
    '🐊': [
        'Krokodille',
        ':crocodile:',
        'Tilordner',
        'Krok',
        ':green:'
    ],
    '🐢': [
        'Skilpadde',
        ':turtle:',
        'Tortoise',
        ':green:'
    ],
    '🦎': [
        'Trollmann',
        ':lizard:',
        'Gecko',
        ':green:'
    ],
    '🐍': [
        'Slange',
        ':snake:',
        'Serpent'
    ],
    '🐲': [
        'Drage Face',
        ':dragon_face:',
        'Drage Hode'
    ],
    '🐉': [
        'Drage',
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
        'Ektende hval',
        ':spouting_whale:',
        'Søt hval'
    ],
    '🐋': [
        'Hval',
        ':whale:'
    ],
    '🐬': [
        'Delfin',
        ':dolphin:'
    ],
    '🐟': [
        'Fisk',
        ':fish:',
        'ferskvannsfisk'
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
        'Kulefisk'
    ],
    '🦈': [
        'Hai',
        ':shark:',
        'Gode hvite Hai'
    ],
    '🐙': [
        'Blekksprut',
        ':octopus:'
    ],
    '🐚': [
        'Spiral Shell',
        ':spiral_shell:',
        'Seasell',
        'Skall'
    ],
    '🐌': [
        'Snegl',
        ':snail:',
        'KG',
        'Hage snegl'
    ],
    '🦋': [
        'Sommerfugl',
        ':butterfly:'
    ],
    '🐛': [
        'Feil',
        ':bug:',
        'Larve',
        'Insektsmitte'
    ],
    '🐜': [
        'Ant',
        ':ant:',
        'Feil',
        'Insektsmitte'
    ],
    '🐝': [
        'Honningsbee',
        ':honeybee:',
        'Bie',
        'Bumblebee',
        ':yellow:',
        ':black:'
    ],
    '🐞': [
        'Lady Bønne',
        ':lady_beetle:',
        'Ladybird',
        'Ladybug',
        'Feil'
    ],
    '🦗': [
        'Kricket',
        ':cricket:',
        'Gresshoppe'
    ],
    '🕷️': [
        'Edderkopp',
        ':spider:'
    ],
    '🦂': [
        'Skorpion',
        ':scorpion:'
    ],
    '🦟': [
        'Mygg',
        ':mosquito:',
        ':black:'
    ],
    '🦀': [
        'Krabbe',
        ':crab:',
        ':red:'
    ],
    '🦞': [
        'Hummer',
        ':lobster:'
    ],
    '🦐': [
        'Reke',
        ':shrimp:',
        'Prawn'
    ],
    '🦑': [
        'Blekksprut',
        ':squid:'
    ],
    '🦧': [
        'Orangutan',
        ':orangutan:'
    ],
    '🦥': [
        'Dovendyr',
        ':sloth:'
    ],
    '🦦': [
        'Otter',
        ':otter:'
    ],
    '🦨': [
        'Snkun',
        ':skunk:'
    ],
    '🦬': [
        'Gift',
        ':bison:'
    ],
    '🦣': [
        'Mammut',
        ':mammoth:',
        ':brown:'
    ],
    '🦫': [
        'Bever',
        ':beaver:'
    ],
    '🐻‍❄️': [
        'Isbjørn',
        ':polar_bear:',
        ':white:'
    ],
    '🦤': [
        'Dodo',
        ':dodo:'
    ],
    '🦭': [
        'Seler',
        ':seal:'
    ],
    '🪲': [
        'Bille',
        ':beetle:'
    ],
    '🪳': [
        'Kakerlakk',
        ':cockroach:'
    ],
    '🪰': [
        'Flue',
        ':fly:'
    ],
    '🪱': [
        'Orm',
        ':worm:'
    ],
    '🦩': [
        'Flammende',
        ':flamingo:'
    ],
    '🪹': [
        'Tom Rest',
        ':empty_nest:',
        'Fugler',
        'Hjem'
    ],
    '🪺': [
        'Nest med egg',
        ':nest_with_eggs:',
        'Fugler',
        'Hjem'
    ],
    '🫏': [
        'Donkey',
        ':donkey:',
        ':grey:',
        ':gray:'
    ],
    '🫎': [
        'Moose',
        ':moose:',
        'Moose Face',
        ':brown:'
    ],
    '🪿': [
        'Goose',
        ':goose:',
        ':white:'
    ],
    '🪼': [
        'Jellyfish',
        ':jellyfish:',
        ':blue:'
    ],
    '🐦‍⬛': [
        'Black bird',
        ':black_bird:',
        ':raven:',
        'Raven',
        'Crow',
        'Rook',
        ':black:'
    ],
    '🐦‍🔥': [
        'Phoenix',
        'Fire',
        'Reborn',
        ':phoenix:',
        ':red:'
    ]
};
/*symbols*/
emojis_language[lang][5] = {
    '💘': [
        'Hjerte med pil',
        ':heart_with_arrow:',
        'Hemmelig pil',
        'Lovestruck',
        ':pink:'
    ],
    '💝': [
        'Hjerte med bånd',
        ':heart_with_ribbon:',
        'Sjokolade boks',
        'Gave Boks',
        'Gave hjerte',
        ':red:'
    ],
    '💖': [
        'Sparkling Heart',
        ':sparkling_heart:',
        'Gallehjerte',
        'Glittig hjerte',
        'Stjerner hjerte',
        ':pink:'
    ],
    '💗': [
        'Voksende hjerte',
        ':growing_heart:',
        'Flere hjerte',
        'Trippel hjerte',
        ':pink:'
    ],
    '💓': [
        'Veldig hjerte',
        ':beating_heart:',
        'Hjerte Alarm',
        'Heartbeat',
        'Wi-Fi hjerte',
        ':pink:'
    ],
    '💞': [
        'Roterende hjerter',
        ':revolving_hearts:',
        'To hjerter',
        ':pink:'
    ],
    '💕': [
        'To hjerter',
        ':two_hearts:',
        'Små hjerte',
        'To rosa hjerte',
        ':pink:'
    ],
    '💟': [
        'Hjerte dekorasjon',
        ':heart_decoration:',
        ':purple:'
    ],
    '❣️': [
        'Hjerte eksklamasjon',
        ':heart_exclamation:',
        'Hjertet over dott',
        'Rødt hjerte som ekklamasjonsmerke',
        'Tungt hjerteklaffing Merk Ornament',
        ':red:'
    ],
    '💔': [
        'Ødelagt hjerte',
        ':broken_heart:',
        'Ødelegger hjerte',
        'Brokenært',
        'Hjerte frakoblet',
        ':red:'
    ],
    '❤️‍🩹': [
        'Beliggende hjerte',
        ':mending_heart:',
        'Bandert hjerte',
        'Helbredelse hjerte',
        'Ubrutt hjerte',
        ':red:'
    ],
    '❤️‍🔥': [
        'Hjertet ved flamme',
        ':heart_on_fire:',
        ':red:'
    ],
    '❤️': [
        'Jeg elsker deg',
        ':red_heart:',
        'Rødt hjerte',
        'Hjerte',
        'Kjærlighets hjerte',
        'Rødt hjerte',
        ':red:'
    ],
    '🧡': [
        'Oransje hjerte',
        ':orange_heart:',
        'Jeg elsker deg',
        ':orange:'
    ],
    '💛': [
        'Gult hjerte',
        ':yellow_heart:',
        '#1 BF Snapchat',
        'Gull hjerte',
        'Jeg elsker deg',
        ':yellow:'
    ],
    '💚': [
        'Grønt hjerte',
        ':green_heart:',
        'Jealous Heart',
        'Jeg elsker deg',
        ':green:'
    ],
    '💙': [
        'Blått hjerte',
        ':blue_heart:',
        'Jeg elsker deg',
        ':blue:'
    ],
    '💜': [
        'Lilla hjerte',
        ':purple_heart:',
        'Jeg elsker deg',
        ':purple:'
    ],
    '🖤': [
        'Svart hjerte',
        ':black_heart:',
        'Mørkt hjerte',
        'Jeg elsker deg',
        ':black:'
    ],
    '🤍': [
        'Hvitt hjerte',
        ':white_heart:',
        'Jeg elsker deg',
        ':white:'
    ],
    '🤎': [
        'Brun hjerte',
        ':brown_heart:',
        'Jeg elsker deg',
        ':brown:'
    ],
    '🩷': [
        'Pink Heart',
        ':pink_heart:',
        'I Love You',
        ':pink:'
    ],
    '🩵': [
        'Light Blue Heart',
        ':lightblue_heart:',
        'I Love You',
        ':blue:'
    ],
    '🩶': [
        'Grey Heart',
        'Gray Heart',
        ':grey_heart:',
        ':gray_heart:',
        'I Love You',
        ':gray:',
        ':grey:'
    ],
    '💯': [
        'Hundrete poeng',
        ':hundred_points:',
        '100',
        '%',
        'Behold det 100',
        'Perfekt score',
        'Hundrete punkt symbol'
    ],
    '💬': [
        'Tale ballong',
        ':speech_balloon:',
        'Snakke boble',
        'Tale boble',
        ':white:'
    ],
    '💭': [
        'Kjøpte ballong',
        ':thought_balloon:',
        'Tenking bobble',
        'Kjøpt boble',
        ':white:'
    ],
    '💤': [
        'Zz',
        ':zzz:',
        'Sengetid',
        'Kantsår',
        'Hvilemodus',
        'Sover skilt',
        'Søvnig symbol'
    ],
    '♠': [
        'Spade Drakt',
        ':spade_suit:',
        'Spades',
        'Black Spade Suit'
    ],
    '♥': [
        'Hjertet Drakt',
        ':heart_suit:',
        'Kort med hjerte',
        'Hjerter',
        'Svart hjerte Drakt'
    ],
    '♦': [
        'Diamant Drakt',
        ':diamond_suit:',
        'Diamanter',
        'Svart diamant Drakt'
    ],
    '♣': [
        'Klubb Drakt',
        ':club_suit:',
        'Klubber',
        'Svart Klubb Drakt'
    ],
    '🏧': [
        'ATM Skilt',
        ':atm_sign:',
        'Minibank',
        'Automatisert Telleer Maskin',
        ':blue:'
    ],
    '🎧': [
        'Hodetelefon',
        ':headphone:',
        'Øretelefon',
        'iPod',
        'Hodetelefoner'
    ],
    '🎵': [
        'Musikalsk notat',
        ':musical_note:',
        'Kjente Par Of Eighth Notes',
        'Gi Par Quavers',
        'Musikk notat'
    ],
    '🎶': [
        'Musikalske notater',
        ':musical_notes:',
        'Musikk',
        'Musikk notater',
        'sang',
        'Flere musikalske notater'
    ],
    '🔔': [
        'Bjelle',
        ':bell:',
        'Frihets- Bell',
        'Ringer',
        'Bryllups Bell',
        ':yellow:'
    ],
    '🔕': [
        'Bell med Slash',
        ':bell_with_slash:',
        'Varsler',
        'Ringelyd deaktivert',
        'Dempet Belle',
        'Bell med Kansellering Stroke',
        ':yellow:'
    ],
    '🔈': [
        'Lavt volum på høyttaler',
        ':speaker_low_volum:',
        'Volum',
        'Høyttaler'
    ],
    '🔉': [
        'Høytaler Middels Volum',
        ':speaker_medium_volume:',
        'Reduser volumet',
        'Høytaler med mellomstor volum',
        'Høytaler med "One Sound Wave'
    ],
    '🔊': [
        'Høytaler Høy Volum',
        ':speaker_high_volume:',
        'Øk volum',
        'Høytaler med Tre Lydbølger'
    ],
    '🔇': [
        'Dempet taler',
        ':muted_speaker:',
        'Demp volum',
        'Høytaler med Kansellering Stroke'
    ],
    '📢': [
        'Loudspeaker',
        ':loudspeaker:',
        'Kunngjøring',
        'PA System',
        'Offentlig adresse, høyttaler'
    ],
    '⛔': [
        'Ingen oppføring',
        ':no_entry:',
        ':red:'
    ],
    '🚫': [
        'Forbudt',
        ':prohibited:',
        'Utestengt',
        'Sirkel Backslash',
        'Nei',
        'Rød sirkel krysset',
        'Begrenset',
        'Ingen signering fra oppføring',
        ':red:'
    ],
    '🚳': [
        'Ingen sykler',
        ':no_bicycles:',
        'Ingen sykler skilt',
        ':red:',
        ':black:'
    ],
    '🚭': [
        'Ingen røyking',
        ':no_smoking:',
        'Ingen Røyksymbolet',
        ':red:',
        ':black:'
    ],
    '🚯': [
        'Ingen Littering',
        ':no_littering:',
        'Ikke intet Litter Symbol',
        ':red:',
        ':black:'
    ],
    '🚱': [
        'Ikke-drikkevann',
        ':non-potable_water:',
        ':non_potable_water:',
        'Ingen vann',
        'Ikke drikk vann',
        'Ikke-Potable vannsymboler',
        ':red:',
        ':black:'
    ],
    '🚷': [
        'Ingen fotgjengere',
        ':no_pedestrians:',
        'Ingen Personer',
        'Ikke gå',
        ':red:',
        ':black:'
    ],
    '🔞': [
        'Ingen under 18 år',
        ':no_one_under_18:',
        'NSFW',
        'Ingen under Eighteen symbol',
        '18',
        ':red:',
        ':black:'
    ],
    '📵': [
        'Ingen mobiltelefoner',
        ':no_mobile_phones:',
        'Ingen mobiltelefoner',
        'Ingen telefoner',
        'Ingen Smarttelefoner',
        ':red:',
        ':black:'
    ],
    '☢️': [
        'Radioactive',
        ':radioactive:',
        'Internasjonalt strålingssymbol',
        'Kjernefysisk',
        'Radioaktiv skilt',
        ':orange:'
    ],
    '☣️': [
        'Biorisiko',
        ':biohazard:',
        'Biohazard Skilt',
        ':orange:'
    ],
    '⬆️': [
        'Knapp for pil opp',
        ':up_arrow_button:',
        'Pil Pointing Opp',
        'Svart pil oppover',
        ':blue:'
    ],
    '↗️': [
        'Knapp for opp- og høyre pil',
        ':up-right_arrow_button:',
        ':up_right_arrow_button:',
        'Diagonalt opp-høyre pil',
        'Nordøst Pil',
        ':blue:'
    ],
    '➡️': [
        'Knapp for høyre pil',
        ':right_arrow_button:',
        'Pil Pointing Høyre',
        'Svart Høyrevei pil',
        ':blue:'
    ],
    '↘️': [
        'Knapp for ned-høyre pil',
        ':down-right_arrow_button:',
        ':down_right_arrow_button:',
        'Diagonal ned-høyre pil',
        'Sørøst Pil',
        ':blue:'
    ],
    '⬇️': [
        'Knapp for ned-piler',
        ':down_arrow_button:',
        'Pil Pointing Ned',
        'Svart pil nedover',
        ':blue:'
    ],
    '↙️': [
        'Knapp for ned-venstre pil',
        ':down-left_arrow_button:',
        ':down_left_arrow_button:',
        'Diagonalt ned venstre pil',
        'Sydvest pil',
        ':blue:'
    ],
    '⬅️': [
        'Knapp for venstre pil',
        ':left_arrow_button:',
        'Pil Pointing Venstre',
        'Øvre svart pil',
        ':blue:'
    ],
    '↖️': [
        'Knapp for venstre pil',
        ':up-left_arrow_button:',
        ':up_left_arrow_button:',
        'Diagonalt opp-venstre pil',
        'Nordvest Pil',
        ':blue:'
    ],
    '↕️': [
        'Knapp for opp- -ned-piler',
        ':up-down_arrow_button:',
        ':up_down_arrow_button:',
        'Vertikale piler',
        'Opp Ned Pil',
        ':blue:'
    ],
    '↔️': [
        'Venstre-Høyre Pil',
        ':left-right_arrow_button:',
        ':left_right_arrow_button:',
        'Horisontale piler',
        'Sideveis piler',
        'Venstre høyre pil',
        ':blue:'
    ],
    '↩️': [
        'Høyre Pil kurve venstre knapp',
        ':right_arrow_curving_left_button:',
        'E-post svar',
        'Venstre buet pil',
        'Mot venstre pil med krok',
        ':blue:'
    ],
    '↪️': [
        'Venstre pil kurverende høyre knapp',
        ':left_arrow_curving_right_button:',
        'E-post fremover',
        'Høyre buet pil',
        'Høyre pil med krok',
        ':blue:'
    ],
    '⤴️': [
        'Høyre Pil Curving Opp Knapp',
        ':right_arrow_curving_up_button:',
        'Pil Pointing Rightwards Then Curving Upwards',
        ':blue:'
    ],
    '⤵️': [
        'Høyre Pil kurve ned knapp',
        ':right_arrow_curving_down_button:',
        'Buet Ned Pil',
        'Pil Pointing Rightwards Then Curving Downwards',
        ':blue:'
    ],
    '🔃': [
        'Knapp for vertikalt piler med urviseren',
        ':clockwise_vertical_button:',
        'Åpne piler med urviseren nedover og oppover',
        ':blue:'
    ],
    '🔄': [
        'Knapp for piler med urviseren',
        ':counterclockwise_button:',
        'Oppdater',
        'Roter',
        'Bytt',
        'Kontrter-kloke piler',
        'Åpent sirkel med klokken nedover og oppover',
        ':blue:'
    ],
    '🔙': [
        'Pil bakover',
        ':back_arrow:',
        'Tilbake',
        'Tilbake med venstrepilen over',
        ':black:'
    ],
    '🔚': [
        'Slutt pil',
        ':end_arrow:',
        'Slutt',
        'Slutt med venstre pil over',
        ':black:'
    ],
    '🔛': [
        'På! Pil',
        ':on_arrow:',
        'På',
        'På med omkampmerke med venstre høyre pil over',
        ':black:'
    ],
    '🔜': [
        'Snart pil',
        ':soon_arrow:',
        'Snart',
        'Snart med høyre mot pil',
        ':black:'
    ],
    '🔝': [
        'Pil med topp',
        ':top_arrow:',
        'Topp',
        'Topp med ovenstående pil over',
        ':black:'
    ],
    '🛐': [
        'Sted for tilbedelse',
        ':place_of_worship:',
        'Religiøs bygning',
        ':purple:'
    ],
    '⚛️': [
        'Atom symbol',
        ':atom_symbol:',
        ':purple:'
    ],
    '🕉️': [
        'Om symbol',
        ':om_symbol:',
        'Om',
        'Aumkara',
        'Omkara',
        'Pranava',
        ':purple:'
    ],
    '✡️': [
        'Davids stjerne',
        ':star_of_david:',
        'Magen David',
        ':purple:'
    ],
    '☸️': [
        'Wheel of Dharma',
        ':wheel_of_dharma:',
        'Hjelm',
        ':purple:'
    ],
    '☯️': [
        'Yin Yang',
        ':yin_yang:',
        ':purple:'
    ],
    '✝️': [
        'Latin-Kors',
        ':latin_cross:',
        'Christian Cross',
        ':purple:'
    ],
    '☦️': [
        'Orthodox Cross',
        ':orthodox_cross:',
        ':purple:'
    ],
    '☪️': [
        'Stjerne og halvmåne',
        ':star_and_crescent:',
        ':purple:'
    ],
    '☮️': [
        'Fredssymbol',
        ':peace:',
        'Fred skilt',
        ':purple:'
    ],
    '🕎': [
        'Menorah',
        ':menorah:',
        'Candelabrum',
        'Stearinlys',
        'Kanukja',
        'Menorah',
        'Menorah med Nine Branches',
        ':purple:'
    ],
    '🔯': [
        'Prikket Six-Pointed Star',
        ':dotted_six-pointed_star:',
        ':dotted_six_pointed_star:',
        'Seks strandede stjerner med Midt-Dot',
        ':purple:'
    ],
    '🪯': [
        'Khanda',
        ':khanda:',
        'Sikhism',
        ':purple:'
    ],
    '♈': [
        'Væren',
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
        'Krepsen',
        ':cancer:',
        ':zodiac:',
        'Zodiak',
        ':purple:'
    ],
    '♌': [
        'Løven',
        ':leo:',
        ':zodiac:',
        'Zodiak',
        ':purple:'
    ],
    '♍': [
        'Jomfruen',
        ':virgo:',
        ':zodiac:',
        'Zodiak',
        ':purple:'
    ],
    '♎': [
        'Vekten',
        ':libra:',
        ':zodiac:',
        'Zodiak',
        ':purple:'
    ],
    '♏': [
        'Skorpionen',
        ':scorpio:',
        ':zodiac:',
        'Poengs',
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
        'Steinbukken',
        ':capricorn:',
        ':zodiac:',
        'Zodiak',
        ':purple:'
    ],
    '♒': [
        'Vannmannen',
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
        'Hopp over fremselssymbol',
        'Svart høyre lokking dobbel-trekant med vertikal søyle',
        ':skip_forward_button:',
        'Neste sporknapp',
        ':blue:'
    ],
    '⏮️': [
        'Hopp over bakoverSymbol',
        'Svart Venstreplings dobbelt trekant med vertikal søyle',
        ':skip_backward_button:',
        'Siste spor knapp',
        'Forrige spor',
        ':blue:'
    ],
    '⏯️': [
        'Spill eller Pause knapp',
        'Svart Høyrepunksjon av trekant med dobbel loddrett linje',
        ':play_button:',
        ':pause_button:',
        ':play_or_pause_button:',
        'Spill symbol',
        'Pause symbol',
        ':blue:'
    ],
    '🔀': [
        'Bland sporingsknapp',
        ':shuffle_tracks_button:',
        'Vindskjevheter for høyre piler',
        ':blue:'
    ],
    '🔁': [
        'Knapp for gjentakelse',
        ':repeat_button:',
        'Sløyfe symbol',
        'Prøv igjen',
        'Med urviseren rettveg og venstre, åpne sirkel piler',
        ':blue:'
    ],
    '🔂': [
        'Gjenta enkel knapp',
        ':repeat_single_button:',
        'Sirkel piler med nummer 1',
        'Gjenta Once Symbol',
        'Gjenta enkelt spor symbol',
        'Med jevne mellomrom og åpne sirkel piler mot venstre med sirkel med sirkel én overlegg',
        ':blue:'
    ],
    '▶️': [
        'Spill av knapp',
        ':play_button:',
        'Høyre trekant',
        'Høyre-pointing Triangle',
        'Svart høyre trakt trekant',
        ':blue:'
    ],
    '◀️': [
        'Omvendt knapp',
        ':reverse_button:',
        'Trekant til venstre',
        'Venstre-pointing Triangle',
        'Svart Venstre-Pointing Triangel',
        ':blue:'
    ],
    '🔼': [
        'Knapp for oppover',
        ':upwards_button:',
        'Opp trekant',
        'Opp-Pointing Treangle',
        'Opp-Pointing Small Red Triangle',
        ':blue:'
    ],
    '🔽': [
        'Knapp for nedover',
        ':downwards_button:',
        'Triangel Ned',
        'Triangel med undergraving',
        'Nedgradering liten rÃ¸d trekant',
        ':blue:'
    ],
    '⏩': [
        'Raske-fremover knapp',
        ':fast-forward_button:',
        ':fast_forward_button:',
        'Hurtig fremover',
        'Raskt fremsynt symbol',
        'Svart Høyre-Eleksir Dobbel Triangle',
        ':blue:'
    ],
    '⏪': [
        'Fast Reverse Button',
        ':fast_reverse_button:',
        'Rewind',
        'Spol om spoling',
        'Svart Venstre-Eleksir Dobbel Triangel',
        ':blue:'
    ],
    '⏫': [
        'Knapp for rask opp',
        ':fast_up_button:',
        'Opp-Pointing Dobbel Triangle',
        'Svart Opp-Elepleri Dobbel Trekant',
        ':blue:'
    ],
    '⏬': [
        'Knapp for rask ned',
        ':fast_down_button:',
        'Dobbel trekant ned',
        'Svart nedlastings Eleksir Dobbel Triangle',
        ':blue:'
    ],
    '⏹️': [
        'Stopp knapp',
        ':stop_button:',
        'Stopp',
        'Stopp symbol',
        'Svart kvadrat for Stopp',
        ':blue:'
    ],
    '⏏️': [
        'Løs ut knapp',
        ':eject_button:',
        'Eject Symbol',
        ':blue:'
    ],
    '🎦': [
        'Kino',
        ':cinema_button:',
        'Kino Skjerm',
        'Filmer',
        'Film',
        'Kino symbol',
        'Opptak',
        ':blue:'
    ],
    '📶': [
        'Antenne stolper',
        ':antenna_bars_button:',
        'Resepsjonslinjer',
        'Signal styrke',
        'Stairs',
        'Signal styrke symbol',
        'Antenne med barer',
        ':blue:'
    ],
    '✖️': [
        'Multiplisere',
        ':multiply:',
        'Tidspunkt',
        'Multiplikasjonssymbol',
        'Stor multiplikasjon X',
        ':black:'
    ],
    '➕': [
        'Pluss',
        ':plus:',
        'Pluss symbol',
        'Tunge Plass Signer',
        ':black:'
    ],
    '➖': [
        'Minus',
        ':minus:',
        'Minus Symbol',
        'Tung Minus Skilt',
        ':black:'
    ],
    '➗': [
        'Dividere',
        ':divide:',
        'Divisjon symbol',
        'Tung divisjonsskilt',
        ':black:'
    ],
    '🟰': [
        'Tunge Liker Skilt',
        ':heavy_equals_sign:',
        'Lik',
        'Resultat',
        ':black:'
    ],
    '♾️': [
        'Uendelig',
        ':infinity:',
        'Permanent skilt av papir'
    ],
    '‼️': [
        'Tverrklamasjons merke',
        ':double_exclamation_mark:',
        'Rødt dobbelklameringsmerke',
        ':red:'
    ],
    '⁉️': [
        'Markering av utlysningsspørsmål',
        ':exclamation_question_mark:',
        'Marker og mål for røde utlysninger',
        ':red:'
    ],
    '❓': [
        'Spørsmål Mark',
        ':question_mark:',
        'Rødt spørsmål merke',
        'Svart Spørsmål Mark Ornament',
        ':red:'
    ],
    '❔': [
        'Hvit Spørsmål Mark',
        ':white_question_mark:',
        ':question_mark:',
        'Hvit Spørsmål Mark',
        'Hvitt Spørsmål Mark Ornament',
        ':white:'
    ],
    '❗': [
        'Exclamation Mark',
        ':exclamation_mark:',
        'Rødt uttrykk merke',
        'Tung ekspansjonsmarken symbol',
        ':red:'
    ],
    '❕': [
        'White Exclamation Mark',
        ':white_exclamation_mark:',
        ':exclamation_mark:',
        'White Exclamation Mark Ornament',
        ':white:'
    ],
    '⭕': [
        'Hul rød sirkel',
        ':hollow_red_circle:',
        'Sirkel',
        'Riktig',
        'Rød sirkel',
        'Sirkel Merk',
        'Kraftig stor sirkel',
        ':red:'
    ],
    '☑️': [
        'Merk av boks med sjekk',
        ':check_box_with_check:',
        'V',
        'Avmerkingsboks',
        'Sjekk merke i boks',
        'Ballot Boks med sjekk'
    ],
    '✔️': [
        'Merk av',
        ':check_mark:',
        'V',
        'Sjekk',
        'Kryss',
        'Checkmark',
        'Tung sjekk merke',
        ':black:'
    ],
    '❌': [
        'Kryss Merke',
        ':cross_mark:',
        'Kryss',
        'Ti',
        ':red:'
    ],
    '✅': [
        'Knapp for markering',
        ':check_mark_button:',
        'V',
        'Grønt merke',
        'Grønn Kryss',
        'Merk av',
        'Hvit Tung sjekk merke',
        ':green:'
    ],
    '❎': [
        'Knapp for ulike marker',
        ':cross_mark_button:',
        'Kryss',
        'Ti',
        'Merke X',
        'Negativ Kvadert Kryssmark',
        ':green:'
    ],
    '#️⃣': [
        'Tastatur nummer',
        ':hash_key:',
        '#',
        'Hash nøkkel',
        'Hashtag',
        'Oktothorpe',
        'Pund nøkkel',
        'Nummer skilt',
        ':blue:'
    ],
    '*️⃣': [
        'Keycap Asterisk',
        ':asterisk:',
        'Stjerne tastatur',
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
        'Tastehette en'
    ],
    '2️⃣': [
        'Nummer 2',
        ':number_2:',
        'Nøkkeldel siffer to'
    ],
    '3️⃣': [
        'Nummer 3',
        ':number_3:',
        'Tastelapp siffer tre'
    ],
    '4️⃣': [
        'Nummer 4',
        ':number_4:',
        'Nøkkelhette siffer fire'
    ],
    '5️⃣': [
        'Nummer 5',
        ':number_5:',
        'Tastehette siffer fem'
    ],
    '6️⃣': [
        'Nummer 6',
        ':number_6:',
        'Tastehette six'
    ],
    '7️⃣': [
        'Nummer 7',
        ':number_7:',
        'Keycap Digit Seven'
    ],
    '8️⃣': [
        'Nummer 8',
        ':number_8:',
        'Tastelokk siffer Åtte'
    ],
    '9️⃣': [
        'Antall 9',
        ':number_9:',
        'Tastatur siffer Ni'
    ],
    '🔟': [
        'Nummer 10',
        ':number_10:',
        'Keycap: 10',
        '10',
        'Ti tastatur'
    ],
    '🔠': [
        'Input Latin Uppercase',
        ':input_latin_uppercase:',
        'ABCD',
        'Store bokstaver',
        'Inngangs symbol for store bokstaver',
        'Inngangs symbol for latinske kapitalbrev',
        ':blue:'
    ],
    '🔡': [
        'Input Latin Lowercase',
        ':input_latin_lowercase:',
        'abcd',
        'Små bokstaver',
        'Input Symbol for små bokstaver',
        'Inngangs symbol for latinske sÃ¥ små bokstaver',
        ':blue:'
    ],
    '🔢': [
        'Input Numbers',
        ':input_numbers:',
        '1234',
        'Tall',
        'Numeric Input',
        'Inngangs symbol for tall',
        ':blue:'
    ],
    '🔣': [
        'Inngangs symbol for symboler',
        ':input_symbols:',
        'Symboler',
        'Symbolets Inngang',
        ':blue:'
    ],
    '🔤': [
        'Input Latin Letters',
        ':input_latin_letters:',
        'abc',
        'Alfabetet',
        'Bokstaver',
        'Inngangs symbol for bokstaver',
        'Input Symbol for Latin-Bokstaver',
        ':blue:'
    ],
    '🅰️': [
        'En knapp (tegntype)',
        ':a_blood:',
        'Blod type A',
        'Brev A',
        'Negativ Squared Latin Capital Letter A',
        ':red:'
    ],
    '🆎': [
        'Mateknapp (sterkt typer)',
        ':ab_blood:',
        'Brev AB',
        'Blodtype AB',
        'Negativ Squared AB',
        ':red:'
    ],
    '🅱️': [
        'B Knapp (Type partitur)',
        ':b_blood:',
        'Brev B',
        'Blodtype B',
        'Negativ Squared Latin Capital Letter B',
        ':red:'
    ],
    '🆑': [
        'CL Knapp',
        ':cl_button:',
        'Tøm',
        'Tømmer-knapp',
        'CL skilt',
        'Kvadert CL',
        'Brev CL',
        ':red:'
    ],
    '🆒': [
        'Kul knapp',
        ':cool_button:',
        'Kul kvadrat',
        'Kul skilt',
        'Kvadert kul',
        ':blue:'
    ],
    '🆓': [
        'Gratis knapp',
        ':free_button:',
        'Gratis',
        'Gratis skilt',
        'Squared Free',
        ':blue:'
    ],
    'ℹ️': [
        'Informasjon',
        ':info_button:',
        'Informasjon',
        'Små bokstaver 1',
        'Tourist informasjon',
        'Kilde for informasjon',
        ':blue:'
    ],
    '🆔': [
        'ID Knapp',
        ':id_button:',
        'ID',
        'Identifikasjon',
        'Identifikasjons skilt',
        'Kvadert ID',
        ':purple:'
    ],
    '🆕': [
        'Ny knapp',
        ':new_button:',
        'Ny',
        'Nytt skilt',
        'Kvadert nytt',
        ':blue:'
    ],
    '🅾️': [
        '0-knapp (tegntype)',
        ':0_blood:',
        'Blod type O',
        '0',
        'Negativt Squared Latin Capital Letter',
        'Brev O',
        ':red:'
    ],
    '🆗': [
        'Ok knapp',
        ':ok_button:',
        'Ok',
        'Ok',
        'Firkant',
        'Ok Signer',
        'Kvadert OK',
        ':blue:'
    ],
    '🅿️': [
        'P Knapp',
        ':p_button:',
        ':parking_sign:',
        'Parkering skilt',
        'Negativt Squared Latin Capital Letter',
        'Brev P',
        ':blue:'
    ],
    '🆘': [
        'SOS knapp',
        ':sos_button:',
        'Nød signal',
        'Nødsituasjon',
        'SOS',
        'SOS Skilt',
        'Kvadert SOS',
        'Hjelp',
        ':red:'
    ],
    '🆙': [
        'Opp! knapp',
        ':up_button:',
        'Nivå opp',
        'Opp',
        'Registrer deg',
        'Kvadert opp med Exclamation Mark',
        ':blue:'
    ],
    '🆚': [
        'V knapp',
        ':vs_button:',
        'Kvadtert Vs',
        ':orange:'
    ],
    '🆖': [
        'Knapp for NG',
        ':ng_button:',
        'Squared NG',
        'Ingen god skilt',
        'Ikke noe bra',
        ':ng:',
        'Blodplate',
        ':blue:'
    ],
    '🔴': [
        'Rød sirkel',
        ':red_circle:',
        'Stor rød sirkel',
        ':red:'
    ],
    '🟠': [
        'Oransje sirkel',
        ':orange_circle:',
        'Stor Oransje sirkel',
        ':orange:'
    ],
    '🟡': [
        'Gul sirkel',
        ':yellow_circle:',
        'Stor gul sirkel',
        ':yellow:'
    ],
    '🟢': [
        'Grønn sirkel',
        ':green_circle:',
        'Stor grønn sirkel',
        ':green:'
    ],
    '🔵': [
        'Blå sirkel',
        ':blue_circle:',
        'Stor blå sirkel',
        ':blue:'
    ],
    '🟣': [
        'Lilla sirkel',
        ':purple_circle:',
        'Stor lilla sirkel',
        ':purple:'
    ],
    '🟤': [
        'Brun sirkel',
        ':brown_circle:',
        'Stor brun sirkel',
        ':brown:'
    ],
    '⚫': [
        'Svart sirkel',
        ':black_circle:',
        'Svart sirkel med middels',
        ':black:'
    ],
    '⚪': [
        'Hvit sirkel',
        ':white_circle:',
        'Medium hvit sirkel',
        ':white:'
    ],
    '🟥': [
        'Rød firkant',
        ':red_square:',
        'Stor Rød firkant',
        ':red:'
    ],
    '🟧': [
        'Oransje firkant',
        ':orange_square:',
        'Stor oransje kvadrat',
        ':orange:'
    ],
    '🟨': [
        'Gul kvadrat',
        ':yellow_square:',
        'Stor gul firkant',
        ':yellow:'
    ],
    '🟩': [
        'Grønn firkant',
        ':green_square:',
        'Stor grønn firkant',
        ':green:'
    ],
    '🟦': [
        'Blå firkant',
        ':blue_square:',
        'Stor blå firkant',
        ':blue:'
    ],
    '🟪': [
        'Lilla firkant',
        ':purple_square:',
        'Stor lilla firkant',
        ':purple:'
    ],
    '🟫': [
        'Brun firkant',
        ':brown_square:',
        'Stor Brun Square',
        ':brown:'
    ],
    '⬛': [
        'Sort Stor Kvadrat',
        ':black_large_square:',
        ':black:'
    ],
    '⬜': [
        'Hvit stor firkant',
        ':white_large_square:',
        ':white:'
    ],
    '◼️': [
        'Svart Medium firkant',
        ':black_medium_square:',
        ':black:'
    ],
    '◻️': [
        'Hvit Medium firkant',
        ':white_medium_square:',
        ':white:'
    ],
    '◾': [
        'Svart Medium liten firkant',
        ':black_medium_small_square:',
        ':black:'
    ],
    '◽': [
        'Hvit Medium liten firkant',
        ':white_medium_small_square:',
        ':white:'
    ],
    '▪️': [
        'Svart liten kvadrat',
        ':black_small_square:',
        ':black:'
    ],
    '▫️': [
        'Hvit liten firkant',
        ':white_small_square:',
        ':white:'
    ],
    '💠': [
        'Diamant form med en dot innside',
        ':diamond_shape_with_dot:',
        'Løpenhet',
        'Diamant blomst',
        'Kawaii'
    ],
    '🔶': [
        'Stor Oransje diamant',
        ':large_orange_diamond:',
        ':orange:'
    ],
    '🔷': [
        'Stor blå diamant',
        ':large_blue_diamond:',
        ':blue:'
    ],
    '🔸': [
        'Liten oransje diamant',
        ':small_orange_diamond:',
        ':orange:'
    ],
    '🔹': [
        'Liten blå diamant',
        ':small_blue_diamond:',
        ':blue:'
    ],
    '🔺': [
        'Rød trekant Pikset opp',
        ':red_triangle_pointed_up:',
        'Opp-Pointing Rød Triangle',
        ':red:'
    ],
    '🔻': [
        'Rød trekant Pikket Ned',
        ':red_triangle_pointed_down:',
        'Nedgraderings rød trekant',
        ':red:'
    ],
    '🔳': [
        'Hvitt kvadrat knapp',
        ':white_square_button:',
        ':white:',
        ':black:'
    ],
    '🔲': [
        'Svart kvadrat knapp',
        ':black_square_button:',
        ':white:',
        ':black:'
    ],
    '©️': [
        'Opphavsrett',
        ':copyright:',
        ':c:',
        'Opphavsrett skilt'
    ],
    '®️': [
        'Registrert',
        ':registered:',
        ':r:',
        'Registrert skilt'
    ],
    '™️': [
        'Handel merke',
        ':trade_mark:',
        ':tm:',
        'Varemerke',
        'Handle merke skilt'
    ],
    '🛅': [
        'Venstre bagasje',
        ':left_luggage:',
        'Pose med nøkkel',
        'Låst Drakt',
        ':blue:'
    ],
    '🛄': [
        'Baggage belønning',
        ':baggage_claim:',
        ':blue:'
    ],
    '🛃': [
        'Toll',
        ':customs:',
        ':blue:'
    ],
    '🛂': [
        'Passport kontroll',
        ':passport_control:',
        'Ramme kontroll',
        ':blue:'
    ],
    '🛜': [
        'Wireless',
        ':wireless:',
        ':wifi:',
        ':wi_fi:',
        'Wifi',
        'wi-fi',
        'wireless connection',
        ':blue:'
    ],
    '🚰': [
        'Brunt vannsymbol',
        ':potable_water_symbol:',
        'Tørst',
        'Tørste',
        'Vann Tapp',
        'Water Faucet'
    ],
    '🇦': [
        'Brev A',
        ':letter_a:',
        ':a:',
        'Regional indikator symbol Letter A'
    ],
    '🇧': [
        'Brev B',
        ':letter_b:',
        ':b:',
        'Regional indikator symbol Letter B'
    ],
    '🇨': [
        'Brev C',
        ':letter_c:',
        ':c:',
        'Regional indikator symbol Letter C'
    ],
    '🇩': [
        'Brev D',
        ':letter_d:',
        ':d:',
        'Regional indikator symbol bokstav/brev D'
    ],
    '🇪': [
        'Brev E',
        ':letter_e:',
        ':e:',
        'Regional indikator symbol bokstav/brev'
    ],
    '🇫': [
        'Brev F',
        ':letter_f:',
        ':f:',
        'Regional indikator symbol Letter F'
    ],
    '🇬': [
        'Brev G',
        ':letter_g:',
        ':g:',
        'Regional indikator symbol Letter G'
    ],
    '🇭': [
        'Brev H',
        ':letter_h:',
        ':h:',
        'Regional indikator symbol Letter H'
    ],
    '🇮': [
        'Brev I',
        ':letter_i:',
        ':i:',
        'Regional indikator symbol bokstavelister I'
    ],
    '🇯': [
        'Brev J',
        ':letter_j:',
        ':j:',
        'Regional indikator symbol Letter J'
    ],
    '🇰': [
        'Brev K',
        ':letter_k:',
        ':k:',
        'Regional indikator symbol bokstavbokstaven K'
    ],
    '🇱': [
        'Brev L',
        ':letter_l:',
        ':l:',
        'Regional indikator symbol L'
    ],
    '🇲': [
        'Brev M',
        ':letter_m:',
        ':m:',
        'Regional indikator symbol Letter M'
    ],
    '🇳': [
        'Brev N',
        ':letter_n:',
        ':n:',
        'Regional indikator symbol Letter N'
    ],
    '🇴': [
        'Brev O',
        ':letter_o:',
        ':o:',
        'Regional indikator symbol bokstav/brev O'
    ],
    '🇵': [
        'Brev P',
        ':letter_p:',
        ':p:',
        'Regional indikator symbol Letter P'
    ],
    '🇶': [
        'Brev Q',
        ':letter_q:',
        ':q:',
        'Regional indikator symbol Letter Q'
    ],
    '🇷': [
        'Brev R',
        ':letter_r:',
        ':r:',
        'Regional indikator symbol bokstav/brev R'
    ],
    '🇸': [
        'Brev S',
        ':letter_s:',
        ':s:',
        'Regional indikator symbol Letter S'
    ],
    '🇹': [
        'Brev t t',
        ':letter_t:',
        ':t:',
        'Regional indikator symbol bokstav/brev T'
    ],
    '🇺': [
        'Brev U',
        ':letter_u:',
        ':u:',
        'Regional indikator symbol Letter U'
    ],
    '🇻': [
        'Brev V',
        ':letter_v:',
        ':v:',
        'Regional indikator symbol Letter V'
    ],
    '🇼': [
        'Brev W',
        ':letter_w:',
        ':w:',
        'Regional indikator symbol Letter W'
    ],
    '🇽': [
        'Brev X',
        ':letter_x:',
        ':x:',
        'Regional indikator symbol bokstavbokstaven X'
    ],
    '🇾': [
        'Brev Y',
        ':letter_y:',
        ':y:',
        'Regional indikator symbol bokstav Y'
    ],
    '🇿': [
        'Brev Z',
        ':letter_z:',
        ':z:',
        'Regional indikator symbol Letter Z'
    ],
    '💌': [
        'Kjærlighets brev',
        ':love_letter:',
        'Hjerte konvolutt',
        'Elsker merknad'
    ],
    '🚮': [
        'Legg Litter i Place symbol',
        ':put_litter_in_bing_sign:',
        'Litter i papirkurv',
        'Sett Litter i papirkurven',
        'Person med papirkurv'
    ],
    '♿': [
        'Rullestol symbol',
        ':wheelchair_symbol:',
        'Tilgjengelig bad'
    ],
    '🚹': [
        'Mens symbol',
        ':mens_symbol:',
        'Mens symbol',
        'Mens Toilet',
        'Mann Restroom',
        'Mannlig WC',
        ':blue:'
    ],
    '🚺': [
        'Kvinnens symbol',
        ':womens_symbol:',
        'Kvinnens symbol',
        'Kvinners Toalett',
        'Kvinnelig resterom',
        'Familie WC',
        ':purple:',
        ':pink:'
    ],
    '🚻': [
        'Restom',
        ':restroom:',
        'Bad Skilt',
        'Toalett Skilt',
        'WC skilt',
        ':blue:'
    ],
    '🚼': [
        'Baby symbol',
        ':baby_symbol:',
        'Baby endre stasjon',
        'Baby endringssymbol',
        'Barnerom',
        ':orange:'
    ],
    '🚾': [
        'Vannklosett',
        ':wc:',
        'WK',
        'Toalett WC',
        ':blue:'
    ],
    '⚠️': [
        'Advarsel skilt',
        ':warning_sign:',
        'Varsel symbol',
        ':yellow:'
    ],
    '🚸': [
        'Undernivå kryssing',
        ':children_crossing:',
        'Barn kryssing',
        'Kryssing av skolen',
        ':yellow:'
    ],
    '🔅': [
        'Lav lysstyrke-symbol',
        ':low_brightness_symbol:',
        'Dim knapp',
        'Senk lysstyrken'
    ],
    '🔆': [
        'Høy lysstyrke-symbol',
        ':high_brightness_symbol:',
        'Øk lysstyrken',
        'Lyst knapp'
    ],
    '📳': [
        'Vibrasjon modus',
        ':vibration_mode:',
        'Telefon hjerte',
        'Stille Modus',
        ':orange:'
    ],
    '📴': [
        'Mobiltelefon av',
        ':mobile_phone_off:',
        ':orange:'
    ],
    '〰️': [
        'Bølge',
        'Bølgeaktig Dash',
        ':wave:'
    ],
    '💱': [
        'Valuta utveksling',
        ':currency_exchange:'
    ],
    '💲': [
        'Tung Dollar Skilt',
        ':dollar_symbol:',
        'Dollar',
        'Dollar skilt'
    ],
    '♻️': [
        'Black Universal Recycling Symbol',
        ':recycling_symbol:',
        'Resirkulerings symbol',
        'Resirkuler logo',
        ':green:'
    ],
    '🔱': [
        'Trident emblem',
        ':trident_emblem:',
        'Hekke',
        'Trident'
    ],
    '📛': [
        'Navngi merke',
        ':name_badge:',
        'Tofu Ved Brann',
        'Navn Tagg',
        'Brann etikett'
    ],
    '🔰': [
        'Japansk symbol for nybegynnere',
        ':japanese_symbol_beginner:',
        'Shoshinsha Mark',
        'Gult grått skjold',
        ':green:',
        ':yellow:'
    ],
    '➰': [
        'Krøllete sløyfe',
        ':curly_loop:',
        'Gjentakende løkke',
        'Sløyfe'
    ],
    '➿': [
        'Dobbel krøllut',
        ':double_curly_loop:',
        'Dobbel kurrende sløyfe',
        'Talepostkasse'
    ],
    '〽️': [
        'Del alternativ merke',
        ':part_alternation_mark:',
        'Ma',
        'Dvalere'
    ],
    '✳️': [
        'Åtte Spoked Asterisk',
        ':eight_spoked_asterisk:',
        ':green:'
    ],
    '✴️': [
        'Åtte pnede svarte stjerner',
        ':eight_pointed_star:',
        'Oransje stjerne',
        'Åtte Pointed Stjerner',
        ':orange:'
    ],
    '❇️': [
        'Glitter',
        ':sparkle:',
        ':green:'
    ],
    'Ⓜ️': [
        'Sirklet M',
        'Circled Latin Capital Letter M',
        ':circled_m:',
        'T-bane',
        ':blue:'
    ],
    '🈁': [
        'Japansk ord Sign Meaning her',
        'Squared Katakana Koko',
        ':japanese_here:',
        'Her',
        'Mål',
        ':blue:'
    ],
    '🈂️': [
        'Japansk påloggingstjeneste eller tjeneste lading',
        'Squared Katakana Sa',
        ':japanese_service:',
        ':blue:'
    ],
    '🈷️': [
        'Japansk Sign Meaning Månedlig Beløp',
        'Squared CJK Unified Ideograph-6708',
        ':japanese_monthly_amouny:',
        'Radikal 74',
        '月',
        ':orange:'
    ],
    '🈶': [
        'Japansk Sign Meaning er ikke gratis for ladning',
        'Squared CJK Unified Ideograph-6709',
        ':japanese_own:',
        'Egen',
        '有',
        ':orange:'
    ],
    '🈯': [
        'Japansk Sign Meaning Reserved',
        'Squared CJK Unified Ideograph-6307',
        ':japanese_reserved:',
        'Finger Punkt',
        '指',
        ':green:'
    ],
    '🉐': [
        'Japansk Sign Meaning Bargain',
        'Sirkulær Ideografi bred forretning',
        ':japanese_acquire:',
        'Utfordre',
        '得',
        ':red:'
    ],
    '🈹': [
        'Japansk behovsrabatt',
        'Squared CJK Unified Ideograph-5272',
        ':japanese_discount:',
        'Barforsterknings salg',
        '割',
        ':red:'
    ],
    '🈚': [
        'Japansk Sign Meaning Free of Charge',
        'Kvadert CJK Unified Ideograph-7121',
        ':japanese_lacking:',
        'Manglende',
        '無',
        ':orange:'
    ],
    '🈲': [
        'Japansk Signing Forbudte',
        'Squared CJK Unified Ideograph-7981',
        ':japanese_prohibited:',
        'Forbid',
        '禁',
        ':red:'
    ],
    '🉑': [
        'Japansk Sign Meaning Akseptable',
        'Sirklet ideografi-aksept',
        ':japanese_accept:',
        'Godta',
        ':orange:'
    ],
    '🈸': [
        'Japansk Sign Meaning applikasjon',
        'Squared CJK Unified Ideograph-7533',
        ':japanese_application_form:',
        'Søknadsskjema',
        'Ape',
        'Forespørsel',
        '申',
        ':orange:'
    ],
    '🈴': [
        'Japansk Sign Meaning Passing (Grade)',
        'Squared CJK Unified Ideograph-5408',
        ':japanese_agreement:',
        'Avtale',
        '合',
        ':red:'
    ],
    '🈳': [
        'Japansk Sign Meaning Vacancy',
        'Squared CJK Unified Ideograph-7a7a',
        ':japanese_available:',
        'Tom og tilgjengelig',
        '空',
        ':blue:'
    ],
    '㊗️': [
        'Japansk Sign Meaning Congratulations',
        'Prioritering av Sirkulær',
        ':japanese_congratulations:',
        ':red:'
    ],
    '㊙️': [
        'Sirklet ideografi hemmelighet',
        ':japanese_secret:',
        'Japansk signeringsmening hemmelighet',
        'Hemmelig',
        ':red:'
    ],
    '🈺': [
        'Japansk Sign Meaning åpen for Business',
        'Squared CJK Unified Ideograph-55b6',
        ':japanese_open_for_business:',
        'Arbeid',
        '営',
        ':orange:'
    ],
    '🈵': [
        'Japansk Sign Meaning Full; Ingen ferdighet',
        'Squared CJK Unified Ideograph-6e80',
        ':japanese_full:',
        'Full',
        '満',
        ':red:'
    ],
    '🔘': [
        'Radio knapp',
        ':radio_button:'
    ],
    '🛑': [
        'Stopp skilt',
        ':stop_sign:',
        'Åttekanter skilt',
        ':red:'
    ],
    '⚕️': [
        'Medisinsk symbol',
        ':medical_symbol:',
        'Aesculapius',
        'Asklepios',
        'Torsk av Asclepius',
        'Ansatte av Aesculapius'
    ],
    '🛗': [
        'Heis',
        ':elevator:',
        ':lift:',
        'Løft'
    ],
    '⚧️': [
        'Transgender symbol',
        ':transgender_sign:'
    ],
    '♂️': [
        'Mann skilt',
        ':male_sign:',
        'Menns symbol',
        'Mars symbol'
    ],
    '♀️': [
        'Kvinnelig skilt',
        ':female_sign:',
        'Kvinnesymbol',
        'Venus Symbol'
    ]
};
/*food and drinks*/
emojis_language[lang][6] = {
    '🍇': [
        'Druer',
        ':grapes:',
        'Drug',
        ':purple:'
    ],
    '🍈': [
        'Melon',
        ':melon:',
        'Cantaloupe',
        'Honeydew',
        'Muskmelon'
    ],
    '🍉': [
        'Vannmelon',
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
        'Sitron',
        ':lemon:',
        'Sitronbrus',
        ':yellow:'
    ],
    '🍌': [
        'Banan',
        ':banana:',
        'Planlegger',
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
        'Rødt eple',
        ':red_apple:',
        ':apple:',
        'Rød deilig eple',
        ':red:'
    ],
    '🍏': [
        'Grønt eple',
        ':green_apple:',
        ':apple:',
        'Gull Skadelig Eple',
        'Granny Smith eple',
        ':green:'
    ],
    '🍐': [
        'Pære',
        ':pear:'
    ],
    '🍑': [
        'Fersken',
        ':peach:',
        'Bunn',
        'Dempet',
        ':orange:',
        ':pink:'
    ],
    '🍒': [
        'Cherries',
        ':cherry:',
        'Kirsebær',
        'Vill kirsebær',
        ':red:'
    ],
    '🍓': [
        'Jordbær',
        ':strawberry:',
        ':red:'
    ],
    '🥝': [
        'Kiwi Frukt',
        ':kiwi:',
        'Kinesisk Gooseberry',
        'Kiwi',
        'Kiwifruit',
        ':green:'
    ],
    '🍅': [
        'Tomat',
        ':tomato:',
        ':red:'
    ],
    '🥥': [
        'Kokosnøtt',
        ':coconut:',
        'Cocoanut'
    ],
    '🥑': [
        'Avokado',
        ':avocado:',
        ':green:'
    ],
    '🍆': [
        'Eggplant',
        ':eggplant:',
        ':aubergine:',
        'Aubergine',
        'Phallic',
        'Lilla Vegetable',
        ':purple:'
    ],
    '🥔': [
        'Potet',
        ':potato:',
        'Bakt potet',
        'Idaho Potet'
    ],
    '🥕': [
        'Gulrot',
        ':carrot:',
        ':orange:'
    ],
    '🌽': [
        'Øren mais',
        ':ear_of_corn:',
        'Mais',
        'Mais på kuben',
        'Lager',
        'Øren av Maize'
    ],
    '🌶️': [
        'Topp tjener',
        ':hot_pepper:',
        'Chili Pepper',
        'Krydder',
        ':red:'
    ],
    '🥒': [
        'Agurk',
        ':cucumber:',
        'gresskar',
        'Sigd',
        ':green:'
    ],
    '🥬': [
        'Lekkete grønn',
        ':leafy_green:',
        'Bok valg',
        'Kinesisk kål',
        'Cos Lettuce',
        'Romaine Lettuce',
        'Lekkholdige griser',
        ':green:'
    ],
    '🥦': [
        'Brokkoli',
        ':broccoli:',
        ':green:'
    ],
    '🍋‍🟩': [
        'Lime',
        ':lime:',
        ':green:'
    ],
    '🍄': [
        'Sopp',
        ':mushroom:',
        'Sjakttopp',
        'Toadstool'
    ],
    '🍄‍🟫': [
        'Brown Mushroom',
        ':brown_mushroom:',
        'Mushroom',
        'Shroom',
        'Toadstool',
        ':brown:'
    ],
    '🥜': [
        'Peanuts',
        ':peanuts:',
        'Muttere',
        ':brown:'
    ],
    '🌰': [
        'Kastanje',
        ':chestnut:',
        'Eikenøtt',
        'Nøtter',
        ':brown:'
    ],
    '🍞': [
        'Brød',
        ':bread:',
        'Plydøv av brød',
        ':brown:'
    ],
    '🥐': [
        'Croissant',
        ':croissant:',
        ':brown:'
    ],
    '🥖': [
        'Baguette Brød',
        ':baguette_bread:',
        'Fransk Brød',
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
        'Pannekaker',
        ':pancakes:',
        'KreHOLD',
        'Hotkaker',
        ':yellow:'
    ],
    '🧀': [
        'Ost kile',
        ':cheese_wedge:',
        'Ost',
        ':yellow:'
    ],
    '🍖': [
        'Kjøtt på beinet',
        ':meat_on_bone:',
        'BBQ',
        'Grill',
        'Manga kjøtt',
        ':red:'
    ],
    '🍗': [
        'Poultry Leg',
        ':poultry_leg:',
        'Vrimmel',
        'Tyrkia legglegg:',
        ':red:'
    ],
    '🥩': [
        'Klipp av kjøtt',
        ':cut_of_meat:',
        'Kjøtt',
        'Biff',
        ':red:'
    ],
    '🥓': [
        'Bacon',
        ':bacon:',
        'Rashers',
        ':red:'
    ],
    '🍔': [
        'Hamburger',
        ':hamburger:',
        'Burger',
        'Cheeseburger'
    ],
    '🍟': [
        'Franske venner',
        ':french_fries:',
        'Brikker',
        'Venner',
        'McDonalds venner',
        ':yellow:'
    ],
    '🍕': [
        'Pizza',
        ':pizza:',
        'Pepperoni pizza',
        'Utsnitt av pizza',
        ':red:'
    ],
    '🌭': [
        'Pølse med Brød',
        ':hot_dog:',
        'Pølse',
        'Sausage',
        ':red:'
    ],
    '🥪': [
        'Sandwich',
        ':sandwich:'
    ],
    '🌮': [
        'Taco',
        ':taco:'
    ],
    '🌯': [
        'Burrito',
        ':burrito:',
        'Bryt'
    ],
    '🥙': [
        'Fylt Flatbrød',
        ':stuffed_flatbread:',
        'Doner Kebab',
        'Gyro',
        'Shawarma',
        'Pita Sandwich'
    ],
    '🍳': [
        'Matlaging',
        ':cooking:',
        'Frokost',
        'Stekt egg',
        'Bråt fan'
    ],
    '🥘': [
        'Grunt bue mat',
        ':shallow_pan_of_food:',
        'Paella',
        'Panne av mat'
    ],
    '🍲': [
        'Potte av mat',
        ':pot_of_food:',
        'Bolle av mat',
        'Suppe',
        'Forny'
    ],
    '🥣': [
        'Bolle med Spoon',
        ':bowl_with_spoon:',
        'Cereal Bolle'
    ],
    '🥗': [
        'Grønn Salad',
        ':green_salad:',
        'Salat',
        ':green:'
    ],
    '🍿': [
        'Popkorn',
        ':popcorn:',
        'Popping Mais'
    ],
    '🧂': [
        'Salt',
        ':salt:',
        'Salt Shaker',
        ':white:'
    ],
    '🥫': [
        'Skannet mat',
        ':canned_food:',
        'Kan av mat',
        'Tin boks',
        'Hermetisert mat'
    ],
    '🍱': [
        'Bento Box',
        ':bento_box:',
        'Lunsj boks'
    ],
    '🍘': [
        'Raseri',
        ':rice_cracker:',
        'Skaper'
    ],
    '🍙': [
        'Rice Ball',
        ':rice_ball:',
        'Onigiri'
    ],
    '🍚': [
        'Stekt ris',
        ':cooked_rice:',
        'Kokt stein',
        'Ris',
        'Bolle av ris',
        'Steamed Rice'
    ],
    '🍛': [
        'Curry Rice',
        ':curry_rice:',
        'Curry',
        'Indisk mat',
        'Curry and Rice'
    ],
    '🍜': [
        'Steaming-Bolle',
        ':steaming_bowl:',
        'Nudler',
        'Nudler med Chopsticks',
        'Ramen'
    ],
    '🍝': [
        'Spaghetti',
        ':spaghetti:',
        'Pasta'
    ],
    '🍠': [
        'Kastet søt potet',
        ':roasted_sweet_potato:',
        'Søt potet',
        'Iam'
    ],
    '🍢': [
        'Oden',
        ':oden:',
        'Kebab',
        'skjevhet'
    ],
    '🍣': [
        'Susi',
        ':sushi:',
        'Sashimi',
        'Sjømat',
        ':pink:'
    ],
    '🍤': [
        'Stekt reke',
        ':fried_shrimp:',
        'Stort slag',
        'Reke Tempura'
    ],
    '🍥': [
        'Fiskekake med virvel',
        ':fish_cake_with_swirl:',
        'Fiskekake',
        'Pink Swirl'
    ],
    '🥮': [
        'Måne kake',
        ':moon_cake:',
        'MÃ¥nekake'
    ],
    '🍡': [
        'Dango',
        ':dango:',
        'Sette Pinne',
        'Rosa hvite baller'
    ],
    '🥟': [
        'Innbakt',
        ':dumpling:',
        'Empanada',
        'Pierogi'
    ],
    '🥠': [
        'Lykkekake',
        ':fortune_cookie:'
    ],
    '🥡': [
        'Angrepsboks',
        ':takeout_box:',
        'Kinesisk matboks',
        'Oyster Pail'
    ],
    '🍦': [
        'Myk iskrem',
        ':soft_ice_cream:',
        'Herr Whippy',
        'Myk tjener'
    ],
    '🍧': [
        'Farget is',
        ':shaved_ice:',
        'Snø kopi'
    ],
    '🍨': [
        'Iskrem',
        ':ice_cream:',
        'Bolle av iskrem',
        'Forskyvd'
    ],
    '🍩': [
        'Doughnøtt',
        ':doughnut:',
        'Donut'
    ],
    '🍪': [
        'Kjeks',
        ':cookie:',
        'Kjeks',
        'Sjokolade Chip Kjeks',
        ':brown:'
    ],
    '🎂': [
        'Bursdags Kake',
        ':birthday_cake:',
        'Fødselsdag',
        'Kake',
        'Kake med stearinlys'
    ],
    '🍰': [
        'Kortkake',
        ':shortcake:',
        'Kake',
        'Bruddstykke kake',
        'Jordbær kortkake'
    ],
    '🧁': [
        'Huskake',
        ':cupcake:',
        'Fe Kake'
    ],
    '🥧': [
        'Pai',
        ':pie:'
    ],
    '🍫': [
        'Sjokolade Bar',
        ':chocolate_bar:',
        'Godteri Bar',
        'Sjokolade',
        ':brown:'
    ],
    '🍬': [
        'Godteri',
        ':candy:',
        'Lolsk',
        'søt'
    ],
    '🍭': [
        'Lollipop',
        ':lollipop:',
        'Suger'
    ],
    '🍮': [
        'Hoggjest',
        ':custard:',
        'Creme Caramel',
        'Forskyvd',
        'Bønne',
        'Pudding'
    ],
    '🍯': [
        'Honning Potte',
        ':honey_pot:',
        'Honning',
        'Potte',
        ':yellow:'
    ],
    '🍼': [
        'Baby flaske',
        ':baby_bottle:',
        'Flaske Feeding'
    ],
    '🥛': [
        'Glass Melk',
        ':glass_of_milk:',
        'Melk',
        ':white:'
    ],
    '☕': [
        'Varm Drikke',
        ':hot_beverage:',
        'Kaffe',
        'Espresso',
        'Varm sjokolade',
        'Te'
    ],
    '🍵': [
        'Teider uten håndtak',
        ':green_tea:',
        'Grønn te',
        'Matcha',
        'Matcha grønn te',
        ':green:'
    ],
    '🍶': [
        'Sake',
        ':sake:',
        'Flaske',
        'Gris vin',
        'Falsk flaske og kopp'
    ],
    '🍾': [
        'Flaske med kork',
        ':champagne:',
        'Feiring',
        'Champagne',
        'Glitrende vin'
    ],
    '🍷': [
        'Vin glass',
        ':wine_glass:',
        'Alkohol',
        'Rød vin',
        'Vin'
    ],
    '🍸': [
        'Steinhalsk glass',
        ':cocktail_glass:',
        'Steinkjell',
        'Martini'
    ],
    '🍹': [
        'Tropisk drikk',
        ':tropical_drink:',
        'Frukt Slokk',
        'Tiki drikk'
    ],
    '🍺': [
        'Øl Mug',
        ':beer_mug:',
        'Øl',
        'Øl Stein',
        ':yellow:'
    ],
    '🍻': [
        'Linkende øl feil',
        ':clinking_beer_mugs:',
        'Øl',
        'Mekere'
    ],
    '🥂': [
        'klinking Briller',
        ':clinking_glasses:',
        'Feiring',
        'Champagne Briller',
        'Mekere'
    ],
    '🥃': [
        'Tumbler glass',
        ':tumbler_glass:',
        'Bourbon',
        'Sprit',
        'Rum',
        'Whiskey',
        'Whisky'
    ],
    '🥤': [
        'Kopp med Straw',
        ':cup_with_straw:',
        'Milkshake',
        'Utjevning',
        'Loda hop',
        'Myk drikke'
    ],
    '🥢': [
        'Kløepinner',
        ':chopsticks:'
    ],
    '🍽️': [
        'Fork og Kniv med plate',
        ':fork_and_knife_with_plate:',
        'Middag',
        ':white:',
        ':gray:',
        ':grey:'
    ],
    '🍴': [
        'Fork og Knife',
        ':fork_and_knife:',
        'Bestikk',
        'Kniv og Fork',
        'Silverware',
        ':gray:',
        ':grey:'
    ],
    '🥄': [
        'Skje',
        ':spoon:',
        ':gray:',
        ':grey:'
    ],
    '🧄': [
        'Hvitløk',
        ':garlic:'
    ],
    '🧅': [
        'Løkk',
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
        'Smør',
        ':butter:'
    ],
    '🦪': [
        'Østers',
        ':oyster:'
    ],
    '🧃': [
        'Drivstoffboks',
        ':beverage_box:',
        'Juice Box'
    ],
    '🧉': [
        'Mate Drikk',
        ':mate_drink:',
        'Chimarra¤ o',
        'Cimarrón',
        'Yerba mus mus'
    ],
    '🫒': [
        'Olivengrønn',
        ':olive:',
        ':green:'
    ],
    '🫐': [
        'Blåbær',
        ':blueberries:',
        ':blue:'
    ],
    '🫑': [
        'Bell Pepper',
        ':bell_pepper:',
        ':green:'
    ],
    '🫓': [
        'Flatbrød',
        ':flatbread:'
    ],
    '🫔': [
        'Tamilk',
        ':tamale:',
        'Tamellt'
    ],
    '🫕': [
        'Fondue',
        ':fondue:'
    ],
    '🧋': [
        'Boble te',
        ':boba:',
        'Boba'
    ],
    '🧊': [
        'Is kube',
        ':ice_cube:'
    ],
    '🫘': [
        'Beans',
        'Flatulence',
        ':beans:',
        'Kaffebønner',
        'Spill the beans'
    ],
    '🫗': [
        'Svingende væske',
        ':puring_liquid:',
        'Belegning drikke',
        'Vann'
    ]
};
/*flags*/
emojis_language[lang][7] = {
    '🏁': [
        'Jukset flagg',
        ':chequered_flag:',
        'Markert flagg',
        'Rutenettjente',
        'Rasende flagg',
        ':black:',
        ':white:'
    ],
    '🚩': [
        'Triangulær flagg',
        ':triangular_flag:',
        'Flagg på Pole',
        'Rød flagg',
        'Triangulær flagg på Innlegg',
        ':red:'
    ],
    '🎌': [
        'Krysset flagg',
        ':crossed_flags:',
        'To flagg'
    ],
    '🏴': [
        'Svart flagg',
        ':black_flag:',
        'Bølgende svart flagg',
        ':black:'
    ],
    '🏳️': [
        'Hvit flagg',
        ':white_flag:',
        'Bølgende hvit flagg',
        ':white:'
    ],
    '🏳️‍🌈': [
        'Regnbue flagg',
        ':rainbow_flag:',
        'Pride Flag',
        'LGBT',
        'LGBTQIA+',
        'Homofil',
        'Trankjønn',
        'Lesbian',
        'Aseksuell',
        'Queer'
    ],
    '🏳️‍⚧️': [
        'Transgender Flag',
        ':transgender_flag:',
        'Blå, rosa og hvit flagg',
        'Trans flagg',
        'Blue',
        'Pink'
    ],
    '🏴‍☠️': [
        'Pirat Flagg',
        ':pirate_flag:',
        'Jolly Roger',
        ':black:',
        'Corsair',
        'Privateer',
        'Buccaneer'
    ],
    '🇺🇳': [
        'Flagg fra De forente nasjoner',
        ':un:',
        'Flagg: De forente nasjoner'
    ],
    '🇪🇺': [
        'Flagg fra Den europeiske union',
        ':eu:',
        'Flagg: Den europeiske union',
        'EU Flag'
    ],
    '🇦🇨': [
        'Markering av Ascension Island',
        ':ac:'
    ],
    '🇦🇩': [
        'Flagg fra Andorra',
        ':ad:',
        'Andorran Flag'
    ],
    '🇦🇪': [
        'Flagg av De forente arabiske emirater',
        ':ae:',
        'Emirati Flag',
        'Flagg for Arabisk'
    ],
    '🇦🇫': [
        'Flagg til Afghanistan',
        ':af:',
        'Afghan Flag'
    ],
    '🇦🇬': [
        'Markering av Antigua og Barbuda',
        ':ag:'
    ],
    '🇦🇮': [
        'Markering av Anguilla',
        ':ai:',
        'Anguillansk flagg'
    ],
    '🇦🇱': [
        'Flagg av Albania',
        ':al:',
        'Albansk Flagg'
    ],
    '🇦🇲': [
        'Flagg av Armenia',
        ':am:',
        'Armenia flagg'
    ],
    '🇦🇴': [
        'Flagg av Angola',
        ':ao:',
        'Angolansk flagg'
    ],
    '🇦🇶': [
        'Markering av Antarktis',
        ':aq:',
        'Antarktis flagg'
    ],
    '🇦🇷': [
        'Markering av Argentina',
        ':ar:',
        'Argentinsk flagg'
    ],
    '🇦🇸': [
        'Flagg av amerikansk Samoa',
        ':as:',
        'American Samoan Flag'
    ],
    '🇦🇹': [
        'Flagg over Østerrike',
        ':at:',
        'Austrian Flag'
    ],
    '🇦🇺': [
        'Markering av Australia',
        ':au:',
        'Aussie flagg',
        'Australsk flagg'
    ],
    '🇦🇼': [
        'Flagg over Aruba',
        ':aw:',
        'Arubiske flagg'
    ],
    '🇦🇽': [
        'Flagg over Åland øyene',
        ':ax:',
        'Åland Flagg'
    ],
    '🇦🇿': [
        'Flagg av Aserbajdsjan',
        ':az:',
        'Aserbajdsjansk Flagg'
    ],
    '🇧🇦': [
        'Flagg av Bosnia & Hercegovina',
        ':ba:'
    ],
    '🇧🇧': [
        'Markering av Barbados',
        ':bb:',
        'Barbadiansk flagg',
        'Bajansk flagg'
    ],
    '🇧🇩': [
        'Flagg av Bangladesh',
        ':bd:',
        'Bangladeshi Flag'
    ],
    '🇧🇪': [
        'Flagg av Belgia',
        ':be:',
        'Belgisk flagg'
    ],
    '🇧🇫': [
        'Markering av Burkina Faso',
        ':bf:',
        'Burkinabe flagg'
    ],
    '🇧🇬': [
        'Bulgarsk flagg',
        ':bg:',
        'Bulgarsk flagg'
    ],
    '🇧🇭': [
        'Flagg av Bahrain',
        ':bh:',
        'Bahrani-flagg',
        'Bahrainske Flagg'
    ],
    '🇧🇮': [
        'Markering av Burundi',
        ':bi:',
        'Burundian Flag'
    ],
    '🇧🇯': [
        'Flagg av Benin',
        ':bj:',
        'Beninesisk Flag'
    ],
    '🇧🇱': [
        'Markering av Saint Barthe∙lemy',
        ':bl:',
        'Flagg: St. Barthe∙lemy'
    ],
    '🇧🇲': [
        'Flagg over Bermuda',
        ':bm:',
        'Bermudan Flag'
    ],
    '🇧🇳': [
        'Markering av Brunei',
        ':bn:',
        'Bruneiansk Flagg'
    ],
    '🇧🇴': [
        'Flagg av Bolivia',
        ':bo:',
        'Bolivian Flag'
    ],
    '🇧🇶': [
        'Flagg av Karibbe Nederland',
        ':bq:',
        'Bonaire'
    ],
    '🇧🇷': [
        'Flagg fra Brasil',
        ':br:',
        'Flag i Brasil'
    ],
    '🇧🇸': [
        'Flagg av Bahamas',
        ':bs:',
        'Bahamas Flagg'
    ],
    '🇧🇹': [
        'Flagg av Bhutan',
        ':bt:',
        'Bhutanske Flag'
    ],
    '🇧🇻': [
        'Markering av Bouvet-øya',
        ':bv:',
        'Flagg: Bouvet-øya'
    ],
    '🇧🇼': [
        'Flagg over Botswana',
        ':bw:',
        'Batswana Flag'
    ],
    '🇧🇾': [
        'Flagg av Hviterussland',
        ':by:',
        'Hviterussisk flagg'
    ],
    '🇧🇿': [
        'Markering av Belize',
        ':bz:',
        'Belizsk flagg'
    ],
    '🇨🇦': [
        'Flagg over Canada',
        'Kanadisk Flagg',
        ':ca:'
    ],
    '🇨🇨': [
        'Flagg av Kokosøyene (Keelingøyene)',
        ':cc:'
    ],
    '🇨🇩': [
        'Flag of Congo - Kinshasa',
        ':cd:'
    ],
    '🇨🇫': [
        'Flagg av Den sentralafrikanske republikk',
        ':cf:',
        'Sentralafrikanske flagg'
    ],
    '🇨🇬': [
        'Flagg av Kongo - Brazzaville',
        ':cg:'
    ],
    '🇨🇭': [
        'Flagg av Sveits',
        ':ch:',
        'Røde Kors',
        'Sveitsiske flagg'
    ],
    '🇨🇮': [
        'Flagg av Elfenbenskysten',
        ':ci:',
        'Flag: Côte d’Ivoire'
    ],
    '🇨🇰': [
        'Flagg over Cook-øyene',
        ':ck:',
        'Cook Islander Flag'
    ],
    '🇨🇱': [
        'Flagg av Chile',
        ':cl:',
        'Chilensk flagg'
    ],
    '🇨🇲': [
        'Flagg til Kamerun',
        ':cm:',
        'Kamerun flagg'
    ],
    '🇨🇳': [
        'Flagg over Kina',
        ':cn:',
        'Kinesisk flagg'
    ],
    '🇨🇴': [
        'Flagg til Colombia',
        ':co:',
        'Colombiansk flagg'
    ],
    '🇨🇵': [
        'Flagg av Clipperton Øy',
        ':cp:',
        'Flagg: Blippertøyer'
    ],
    '🇨🇷': [
        'Flagg av Costa Rica',
        ':cr:',
        'Costa Ricansk Flagg'
    ],
    '🇨🇺': [
        'Markering av Cuba',
        ':cu:',
        'Cubansk flagg'
    ],
    '🇨🇻': [
        'Flagg av Kapp Verde',
        ':cv:',
        'Kapp Verdie Flagg'
    ],
    '🇨🇼': [
        'Flagg av Curacautiao',
        ':cw:',
        'Curaçaoan Flag'
    ],
    '🇨🇽': [
        'Flagg for Jule Island',
        ':cx:',
        'Jul Øy Flagg'
    ],
    '🇨🇾': [
        'Flagg av Kypros',
        ':cy:',
        'Kypriotisk Flagg'
    ],
    '🇨🇿': [
        'Markering av tsjekkia',
        ':cz:',
        'Tsjekkisk flagg'
    ],
    '🇩🇪': [
        'Flagg over Tyskland',
        ':de:',
        'Tysk flagg',
        'Tysk Flagg'
    ],
    '🇩🇬': [
        'Flagg av Diego Garcia',
        ':dg:',
        'Flagg: Diego Garcia'
    ],
    '🇩🇯': [
        'Flagg av Djibouti',
        ':dj:',
        'Djibouti Flag',
        'Djiboutian Flag'
    ],
    '🇩🇰': [
        'Flagg over Danmark',
        ':dk:',
        'Dansk Flagg'
    ],
    '🇩🇲': [
        'Flagg av Dominica',
        ':dm:'
    ],
    '🇩🇴': [
        'Flagg av Den dominikanske republikk',
        ':do:',
        'Dom Rep Flagg',
        'Dominikanske flagg'
    ],
    '🇩🇿': [
        'Flagg over Algerie',
        ':dz:',
        'Algerian Flag'
    ],
    '🇪🇦': [
        'Markering av Ceuta og Melilla',
        ':ea:',
        'Flagg av Melilla',
        'Flagg av Ceuta',
        'Flag: Ceuta & Melilla'
    ],
    '🇪🇨': [
        'Markering av Ecuador',
        ':ec:',
        'Ecuadorian Flag'
    ],
    '🇪🇪': [
        'Markering av Estland',
        ':ee:',
        'Estisk flagg'
    ],
    '🇪🇬': [
        'Flagg i Egypt',
        ':eg:',
        'Egyptisk flagg'
    ],
    '🇪🇭': [
        'Flagg over Vest-Sahara',
        ':eh:',
        'Vest-Saharas flagg'
    ],
    '🇪🇷': [
        'Flagg av Eritrea',
        ':er:',
        'Eritrean Flag'
    ],
    '🇪🇹': [
        'Flagg av Etiopia',
        ':et:',
        'Ethiopian Flag'
    ],
    '🇪🇸': [
        'Flagg av Spania',
        ':es:',
        'Spansk flagg'
    ],
    '🇫🇮': [
        'Markering av Finland',
        ':fi:',
        'Finsk Flagg'
    ],
    '🇫🇯': [
        'Flagg av Fiji',
        ':fj:',
        'Fijian Flag'
    ],
    '🇫🇰': [
        'Flagg over Falklandsøyene',
        ':fk:',
        'Falklandsflagg'
    ],
    '🇫🇲': [
        'Flagg av Micronesia',
        ':fm:',
        'Mikronesisk Flagg'
    ],
    '🇫🇴': [
        'Flagg på Færøyene',
        ':fo:',
        'Faroe Islander Flag'
    ],
    '🇫🇷': [
        'Markering av Frankrike',
        ':fr:',
        'Fransk Flagg'
    ],
    '🇬🇦': [
        'Flagg av Gabon',
        ':ga:',
        'Gabonesisk Flagg'
    ],
    '🇬🇧': [
        'Flagg av Storbritannia',
        ':gb:',
        'Britisk flagg',
        'Storbritannia (t)',
        'Fugle sammen',
        'Storbritannia'
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
        'Markering av Grenada',
        ':gd:',
        'Grenadisk flagg'
    ],
    '🇬🇪': [
        'Flagg av Georgia',
        ':ge:',
        'Georgisk Flag'
    ],
    '🇬🇫': [
        'Markering av den franske Guiana',
        ':gf:',
        'Fransk Guineisk Flagg'
    ],
    '🇬🇬': [
        'Flagg av Guernsey',
        ':gg:',
        'Guernsey Flag'
    ],
    '🇬🇭': [
        'Flagg av Ghana',
        ':gh:',
        'Ghandisk Flagg'
    ],
    '🇬🇮': [
        'Markering av Gibraltar',
        ':gi:',
        'Gibraltisk Flag'
    ],
    '🇬🇱': [
        'Flagg av Grønland',
        ':gl:',
        'Greenlandic Flag'
    ],
    '🇬🇲': [
        'Flagg av Gambia',
        ':gm:',
        'Gambian Flag'
    ],
    '🇬🇳': [
        'Flagg av Guinea',
        ':gn:',
        'Guinean Flag'
    ],
    '🇬🇵': [
        'Flagg av Guadeloupe',
        ':gp:',
        'Guadeloupeansk flagg'
    ],
    '🇬🇶': [
        'Markering av Ekvatorial-Guinea',
        ':gq:',
        'Equatorial Guinean Flag',
        'Ekvatoguinisk Flagg'
    ],
    '🇬🇷': [
        'Markering av Hellas',
        ':gr:',
        'Gresk flagg'
    ],
    '🇬🇸': [
        'Flagg fra Sør-Georgia og Sør-Sandwichøyene',
        ':gs:'
    ],
    '🇬🇹': [
        'Flagg av Guatemala',
        ':gt:',
        'Guatemalan Flag'
    ],
    '🇬🇺': [
        'Flagg av Guam',
        ':gu:',
        'Guamaniske flagg',
        'Chamorro Flagg'
    ],
    '🇬🇼': [
        'Flagg av Guinea-Bissau',
        ':gw:',
        'Guinea-Bissau Flag'
    ],
    '🇬🇾': [
        'Flagg av Guyana',
        ':gy:',
        'Guyanske Flag'
    ],
    '🇭🇰': [
        'Flagg fra Hong Kong SAR Kina',
        ':hk:',
        'Hong Kong Flagg'
    ],
    '🇭🇲': [
        'Flagg på Heard & McDonald øyene',
        ':hm:',
        'Flagg: Heard & McDonald Islands'
    ],
    '🇭🇳': [
        'Honduras flagg',
        ':hn:',
        'Hondurisk flagg'
    ],
    '🇭🇷': [
        'Flagg av Kroatia',
        ':hr:',
        'Kroatisk flagg'
    ],
    '🇭🇹': [
        'Flagg over Haiti',
        ':ht:',
        'Haitian Flag'
    ],
    '🇭🇺': [
        'Flagg av Ungarn',
        ':hu:',
        'Ungarsk Flag'
    ],
    '🇮🇨': [
        'Markering av Canariøyene',
        ':ic:'
    ],
    '🇮🇩': [
        'Flagg av Indonesia',
        ':id:',
        'Indonesisk Flagg'
    ],
    '🇮🇪': [
        'Flagg fra Irland',
        ':ie:',
        'Irsk flagg'
    ],
    '🇮🇱': [
        'Israels flagg',
        ':il:',
        'Israelsk flagg'
    ],
    '🇮🇲': [
        'Flagg over Menneskeferd',
        ':im:',
        'Manx Flag'
    ],
    '🇮🇳': [
        'Flagg over India',
        ':in:',
        'Indisk Flagg'
    ],
    '🇮🇴': [
        'Flagg over det britiske territoriet i Indiahavet',
        ':io:',
        'Britisk Indisk hav territorium flagg'
    ],
    '🇮🇶': [
        'Flagg av Irak',
        ':iq:',
        'Iraqi Flag'
    ],
    '🇮🇷': [
        'Polarsvømmesnips i Iran',
        ':ir:',
        'Iranske Flag'
    ],
    '🇮🇸': [
        'Flagg på Island',
        ':is:',
        'Islandsk flagg'
    ],
    '🇮🇹': [
        'Flagg av Italia',
        ':it:',
        'Italiensk flagg'
    ],
    '🇯🇪': [
        'Markering av Jersey',
        ':je:',
        'Jersey Flagg'
    ],
    '🇯🇲': [
        'Flagg over Jamaica',
        ':jm:',
        'Jamaicanske Flagg'
    ],
    '🇯🇴': [
        'Flagg av Jordan',
        ':jo:',
        'Jordanske flagg'
    ],
    '🇯🇵': [
        'Flagg over Japan',
        ':jp:',
        'Japansk Flagg'
    ],
    '🇰🇪': [
        'Markering av Kenya',
        ':ke:',
        'Kenyanske Flagg'
    ],
    '🇰🇬': [
        'Flagg av Kirgisistan',
        ':kg:',
        'Kyrgyzstani Flag'
    ],
    '🇰🇭': [
        'Flagg av Kambodsja',
        ':kh:',
        'Kambodsjansk Flagg'
    ],
    '🇰🇮': [
        'Flagg av Kiribati',
        ':ki:',
        'I-Kiribati Flagg'
    ],
    '🇰🇲': [
        'Flagg av Komorene',
        ':km:',
        'Komorisk flagg'
    ],
    '🇰🇳': [
        'Flagg av Saint Kitts og Nevis',
        ':kn:'
    ],
    '🇰🇵': [
        'Flagg av Nord-Korea',
        ':kp:',
        'Nordkoreanske Flagg'
    ],
    '🇰🇷': [
        'Flagg over Sør-Korea',
        ':kr:',
        'Sydkoreansk Flagg'
    ],
    '🇰🇼': [
        'Flagg av Kuwait',
        ':kw:',
        'Kuwaiti Flag'
    ],
    '🇰🇾': [
        'Flagg over Cayman Øyene',
        ':ky:',
        'Caymanisk Flagg'
    ],
    '🇰🇿': [
        'Flagg av Kasakhstan',
        ':kz:',
        'Kazakhstani Flag',
        'Kazakh Flag'
    ],
    '🇱🇦': [
        'Flagg av Laos',
        ':la:',
        'Laotiansk flagg',
        'Lao flagg'
    ],
    '🇱🇧': [
        'Flagg av Libanon',
        ':lb:',
        'Libanesiske flagg'
    ],
    '🇱🇨': [
        'Flagg av Saint Lucia',
        ':lc:'
    ],
    '🇱🇮': [
        'Flagg over Liechtenstein',
        ':lt:',
        'Liechtensteiner Flagg'
    ],
    '🇱🇰': [
        'Flagg av Sri Lanka',
        ':lk:',
        'Sri Lankas flagg'
    ],
    '🇱🇷': [
        'Flagg for Liberia',
        ':lr:',
        'Liberiske Flag'
    ],
    '🇱🇸': [
        'Flag of Lesotho',
        ':ls:',
        'Basotho Flag'
    ],
    '🇱🇹': [
        'Flagg over Litauen',
        ':lt:',
        'Litauisk Flagg'
    ],
    '🇱🇺': [
        'Flagg over Luxembourg',
        ':lu:',
        'Luxembourger Flagg'
    ],
    '🇱🇻': [
        'Flagg av Latvia',
        ':lv:',
        'Latvisk flagg'
    ],
    '🇱🇾': [
        'Flagg over Libya',
        ':ly:',
        'Libysk flagg'
    ],
    '🇲🇦': [
        'Markering av Marokko',
        ':ma:',
        'Marokkansk Flagg'
    ],
    '🇲🇨': [
        'Flagg av Monaco',
        ':mc:',
        'Moneεgasque Flag'
    ],
    '🇲🇩': [
        'Flagg av Moldova',
        ':md:',
        'Moldovisk Flagg'
    ],
    '🇲🇪': [
        'Markering av Montenegro',
        ':me:',
        'Montenegrin flagg'
    ],
    '🇲🇫': [
        'Flagg av Saint Martin',
        ':mf:',
        'Flag: St. Martin'
    ],
    '🇲🇬': [
        'Flagg over Madagaskar',
        ':mg:',
        'Madagascan Flag'
    ],
    '🇲🇭': [
        'Flagg over Marshall-øyene',
        ':mh:',
        'Marshallesisk Flagg'
    ],
    '🇲🇰': [
        'Flagg av Makedonia',
        ':mk:',
        'Makedonsk Flag'
    ],
    '🇲🇱': [
        'Flagg over Mali',
        ':ml:',
        'Malisk Flagg'
    ],
    '🇲🇲': [
        'Flagg av Myanmar (Burma)',
        ':mm:',
        'Myanmarese Flagg',
        'Flagg for Burma',
        'Burmesisk Flagg'
    ],
    '🇲🇳': [
        'Markering av Mongolia',
        ':mn:',
        'Mongolsk flagg'
    ],
    '🇲🇴': [
        'Flagg for Macau Sar China',
        ':mo:',
        'Macauisk Flag'
    ],
    '🇲🇵': [
        'Flagg fra Nord-Mariana Øyene',
        ':mp:',
        'Mikronesisk Flagg'
    ],
    '🇲🇶': [
        'Flagg av Martinique',
        ':mq:',
        'Slange Flag av Martinique',
        'Martiniquais Flag'
    ],
    '🇲🇷': [
        'Flagg fra Mauritania',
        ':mr:',
        'Mauritansk Flagg'
    ],
    '🇲🇸': [
        'Flag of Montserrat',
        ':ms:',
        'Montserratian Flag'
    ],
    '🇲🇹': [
        'Flagg over Malta',
        ':mt:',
        'Maltese Flag'
    ],
    '🇲🇺': [
        'Flag of Mauritius',
        ':mu:',
        'Mauritisk flagg'
    ],
    '🇲🇻': [
        'Flagg over Maldivene',
        ':mv:',
        'Maldiviansk Flagg'
    ],
    '🇲🇼': [
        'Flagg til Malawi',
        ':mw:',
        'Malawian Flag'
    ],
    '🇲🇽': [
        'Flagg av Mexico',
        ':mx:',
        'Meksikansk Flagg'
    ],
    '🇲🇾': [
        'Flagg av Malaysia',
        ':my:',
        'Malaysian Flag'
    ],
    '🇲🇿': [
        'Flagg av Mosambik',
        ':mz:',
        'Mosambikisk flagg'
    ],
    '🇳🇦': [
        'Flagg av Namibia',
        ':na:',
        'Namibian Flag'
    ],
    '🇳🇨': [
        'Flagg om Ny-Caledonia',
        ':nc:',
        'Ny Caledonsk Flag'
    ],
    '🇳🇪': [
        'Flagg av Niger',
        ':ne:',
        'Nigerien Flag'
    ],
    '🇳🇫': [
        'Flagg over Norfolkøya',
        ':nf:',
        'NorfolkIsland Flagg'
    ],
    '🇳🇬': [
        'Markering av Nigeria',
        ':ng:',
        'Nigeriansk Flagg'
    ],
    '🇳🇮': [
        'Flag of Nicaragua',
        ':ni:',
        'Nicaraguan Flag'
    ],
    '🇳🇱': [
        'Flagg til Nederland',
        ':nl:',
        'Nederlandsk flagg',
        'Holland'
    ],
    '🇳🇴': [
        'Flagg av Norge',
        ':no:',
        'Norsk flagg'
    ],
    '🇳🇵': [
        'Markering av Nepal',
        ':np:',
        'Nepalsk Flagg'
    ],
    '🇳🇷': [
        'Flagg av Nauru',
        ':nr:',
        'Nauruan Flag'
    ],
    '🇳🇺': [
        'Flagg av Niue',
        ':nu:',
        'Niuean Flag'
    ],
    '🇳🇿': [
        'Markering av New Zealand',
        ':nz:',
        'Kiwi Flagg'
    ],
    '🇴🇲': [
        'Flagg av Oman',
        ':om:',
        'Omanisk flagg'
    ],
    '🇵🇦': [
        'Flagg av Panama',
        ':pa:',
        'Panamaniske flagg'
    ],
    '🇵🇪': [
        'Flagg av Peru',
        ':pe:',
        'Peruanske flagg'
    ],
    '🇵🇫': [
        'Flagg av Fransk Polynesia',
        ':pf:',
        'Fransk Polynesisk Flag'
    ],
    '🇵🇬': [
        'Flagg om Papua Ny-Guinea',
        ':pg:',
        'PNG flagg',
        'Papua New Guinean Flag'
    ],
    '🇵🇭': [
        'Flagg over Filippinene',
        ':ph:'
    ],
    '🇵🇰': [
        'Markering av Pakistan',
        ':pk:',
        'Pakistansk Flag'
    ],
    '🇵🇱': [
        'Flagg til Polen',
        ':pl:',
        'Polsk flagg'
    ],
    '🇵🇲': [
        'Flagg av Saint Pierre og Miquelon',
        ':pm:'
    ],
    '🇵🇳': [
        'Flagg av Pitcairnøyene',
        ':pn:'
    ],
    '🇵🇷': [
        'Flagg av Puerto Rico',
        ':pr:',
        'Puerto Rikansk Flagg'
    ],
    '🇵🇸': [
        'Flagg over palestinske områder',
        ':ps:',
        'Palestine'
    ],
    '🇵🇹': [
        'Markering av Portugal',
        ':pt:',
        'Portugisisk Flag'
    ],
    '🇵🇼': [
        'Markering av Palau',
        ':pw:',
        'Palauisk Flagg'
    ],
    '🇵🇾': [
        'Flagg av Paraguay',
        ':py:',
        'Paraguayan Flag'
    ],
    '🇶🇦': [
        'Markering av Qatar',
        ':qa:',
        'Qatarsk flagg'
    ],
    '🇷🇪': [
        'Markering av ny union',
        ':re:',
        'Re∙unionnais flagg'
    ],
    '🇷🇴': [
        'Flagg fra Romania',
        ':ro:',
        'Rumenske flagg'
    ],
    '🇷🇸': [
        'Flagg av Serbia',
        ':rs:',
        'Serbisk flagg'
    ],
    '🇷🇺': [
        'Flagg over Russland',
        ':ru:',
        'Russisk flagg'
    ],
    '🇷🇼': [
        'Flag of Rwanda',
        ':rw:',
        'Rwandan Flag'
    ],
    '🇸🇦': [
        'Flagg av Saudi-Arabia',
        ':sa:',
        'Saudi-arabisk flagg'
    ],
    '🇸🇧': [
        'Flagg Salomos øyene',
        ':sb:',
        'Fra Salomonøyene Flagg'
    ],
    '🇸🇨': [
        'Markering av Seychellene',
        ':sc:',
        'Seychellois Flag'
    ],
    '🇸🇩': [
        'Flagg av Sudan',
        ':sd:',
        'Sudanese Flag'
    ],
    '🇸🇪': [
        'Flagg fra Sverige',
        ':se:',
        'Svensk flagg'
    ],
    '🇸🇬': [
        'Flagg over Singapore',
        ':sg:',
        'Singaporisk Flag'
    ],
    '🇸🇭': [
        'Flagg av Saint Helena',
        ':sh:'
    ],
    '🇸🇮': [
        'Flagg av Slovenia',
        ':si:',
        'Slovensk flagg'
    ],
    '🇸🇯': [
        'Markering av Svalbard og Jan Mayen',
        ':sj:'
    ],
    '🇸🇰': [
        'Flagg av Slovakia',
        ':sk:',
        'Slovakisk flagg',
        'Slovakian Flag'
    ],
    '🇸🇱': [
        'Markering av Sierra Leone',
        ':sl:',
        'Sierra Leonean Flag'
    ],
    '🇸🇲': [
        'Flagg fra San Marino',
        ':sm:',
        'Sammarinesisk Flagg'
    ],
    '🇸🇳': [
        'Flagg av Senegal',
        ':sn:',
        'Sengalsk Flagg'
    ],
    '🇸🇴': [
        'Flagg over Somalia',
        ':so:',
        'Somalian Flag'
    ],
    '🇸🇷': [
        'Flagg av Surinam',
        ':sr:',
        'Surinamer Flagg'
    ],
    '🇸🇸': [
        'Flagg over Sør-Sudan',
        ':ss:',
        'Sør Sudansk Flag'
    ],
    '🇸🇹': [
        'Flagg til SaÚo Tome″& PriiNaturncipe',
        ':st:'
    ],
    '🇸🇻': [
        'Markering av El Salvador',
        ':sv:',
        'El Salvadoransk Flagg'
    ],
    '🇸🇽': [
        'Flagg av Sint Maarten',
        ':sx:'
    ],
    '🇸🇾': [
        'Flagg over Syria',
        ':sy:',
        'Syrisk flagg'
    ],
    '🇸🇿': [
        'Markering av Swaziland',
        ':sz:',
        'Eswatini flagg'
    ],
    '🇹🇦': [
        'Flag of Tristan Da Cunha',
        ':ta:'
    ],
    '🇹🇨': [
        'Flagg av Turks & Caicos øyene',
        ':tc:'
    ],
    '🇹🇩': [
        'Flagg av Tsjad',
        ':td:',
        'Tsjadisk flagg'
    ],
    '🇹🇫': [
        'Flagg av franske sørterritorier',
        ':tf:',
        'Franske sørlandsflagg'
    ],
    '🇹🇬': [
        'Markering av Togo',
        ':tg:',
        'Togolese Flag'
    ],
    '🇹🇭': [
        'Flagg over Thailand',
        ':th:',
        'Thailandske flagg'
    ],
    '🇹🇯': [
        'Flagg av Tadsjikistan',
        ':tj:',
        'Tadsjikisk Flagg'
    ],
    '🇹🇰': [
        'Markering av Tokelau',
        ':tk:',
        'Tokelauansk flagg'
    ],
    '🇹🇱': [
        'Flagg av Timor-Leste',
        ':tl:',
        'Øst-Timor',
        'Øst-Timoresisk Flagg'
    ],
    '🇹🇲': [
        'Flagg av Turkmenistan',
        ':tm:',
        'Turkmen Flag'
    ],
    '🇹🇳': [
        'Flagg av Tunisia',
        ':tn:',
        'Tunisisk Flagg'
    ],
    '🇹🇴': [
        'Flagg fra Tonga',
        ':to:',
        'Tongan Flag'
    ],
    '🇹🇷': [
        'Flagg til Tyrkia',
        ':tr:',
        'Tyrkisk Flagg'
    ],
    '🇹🇹': [
        'Flagg av Trinidad og Tobago',
        ':tt:'
    ],
    '🇹🇻': [
        'Markering av Tuvalu',
        ':tv:',
        'Tuvaluansk flagg'
    ],
    '🇹🇼': [
        'Markering av taiwan',
        ':tw:',
        'Taiwanesisk Flagg'
    ],
    '🇹🇿': [
        'Flagg over Tanzania',
        ':tz:',
        'Tanzanian Flag'
    ],
    '🇺🇦': [
        'Flagg av Ukraina',
        ':ua:',
        'Ukrainsk flagg'
    ],
    '🇺🇬': [
        'Markering av Uganda',
        ':ug:',
        'Ugandisk flagg'
    ],
    '🇺🇲': [
        'Flagg: De ytre øyene i USA',
        ':um:'
    ],
    '🇺🇸': [
        'Flagg av USA',
        ':us:',
        'Amerikansk flagg',
        'USA Flagg'
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
        'Markering av den Helliges',
        ':va:',
        'Vanticanien Flagg'
    ],
    '🇻🇨': [
        'Flagg av Saint Vincent og Grenadines',
        ':vc:'
    ],
    '🇻🇪': [
        'Flagg over Venezuela',
        ':ve:',
        'Venezuelansk Flagg'
    ],
    '🇻🇬': [
        'Flagg over De britiske Jomfruøyene',
        ':vg:',
        'De britiske jomfruøyer Flagg'
    ],
    '🇻🇮': [
        'Flagg over de amerikanske Jomfruøyene',
        ':vi:',
        'Flagg til De amerikanske Jomfruøyene'
    ],
    '🇻🇳': [
        'Flagg av Vietnam',
        ':vn:',
        'Vietnamesisk Flag'
    ],
    '🇻🇺': [
        'Flag of Vanuatu',
        ':vu:',
        'Ni-Vanuatu Flag'
    ],
    '🇼🇫': [
        'Markering av Wallis og Futuna',
        ':wf:'
    ],
    '🇼🇸': [
        'Flagg av Samoa',
        ':ws:',
        'Samoan Flag'
    ],
    '🇽🇰': [
        'Flagg av Kosovo',
        ':xk:',
        'Kosovar Flag'
    ],
    '🇾🇪': [
        'Flagg av Jemen',
        ':ye:',
        'Jemensk flagg'
    ],
    '🇾🇹': [
        'Markering av Mayotte',
        ':yt:',
        'Mayotte Flagg'
    ],
    '🇿🇦': [
        'Flagg fra Sør-Afrika',
        ':za:',
        'Sydafrikanske flagg'
    ],
    '🇿🇲': [
        'Flagg av Zambia',
        ':zm:',
        'Zambian Flag'
    ],
    '🇿🇼': [
        'Flagg over Zimbabwe',
        ':zw:',
        'Zimbabwiske flagg',
        'Zim Flagg'
    ]
};
/*sports*/
emojis_language[lang][8] = {
    '🧗{{skin_tone}}‍♂️': [
        'Mann Klatring',
        ':man_climbing:',
        ':climbing:',
        'Mannlig Stein Klimber',
        'Mann Klimber',
        ':man:'
    ],
    '🧗{{skin_tone}}‍♀️': [
        'Klatring av dame',
        ':woman_climbing:',
        ':climbing:',
        'Kvinnelig Stein Klimber',
        'Ku Klatre',
        ':woman:'
    ],
    '🧗{{skin_tone}}': [
        'Person Klatring',
        ':person_climbing:',
        ':climbing:',
        'Person Stein Klimber',
        'Person Klimber',
        ':person:'
    ],
    '🏇{{skin_tone}}': [
        'Hest Racing',
        ':horse_racing:',
        'Hest Race',
        'Smie'
    ],
    '⛷{{skin_tone}}‍️': [
        'Skiker',
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
        'Kvinne Golfer',
        ':woman_golfer:',
        ':golfer:',
        ':woman:'
    ],
    '🏌️{{skin_tone}}': [
        'Person Golfer',
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
        'Kvinne Surfer',
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
        'Mann rar båt',
        ':man_rowing_boat:',
        ':rowing_boat:',
        ':man:'
    ],
    '🚣{{skin_tone}}‍♀️': [
        'Kvinnisk roterende båt',
        ':woman_rowing_boat:',
        ':rowing_boat:',
        ':woman:'
    ],
    '🚣{{skin_tone}}': [
        'Person roterende båt',
        ':person_rowing_boat:',
        ':rowing_boat:',
        ':person:'
    ],
    '🏊{{skin_tone}}‍♂️': [
        'Mann svømming',
        ':man_swimming:',
        ':swimming:',
        'Mannlig svømmer',
        ':man:'
    ],
    '🏊{{skin_tone}}‍♀️': [
        'Kvinne svømming',
        ':woman_swimming:',
        ':swimming:',
        'Kvinne Swimmer',
        ':woman:'
    ],
    '🏊{{skin_tone}}': [
        'Person svømming',
        ':person_swimming:',
        ':swimming:',
        'Person Swimmer',
        ':person:'
    ],
    '⛹{{skin_tone}}‍️‍♂️': [
        'Man Bouncing Ball',
        ':man_bouncing_ball:',
        ':bouncing_ball:',
        'Man Basketball spiller',
        ':man:'
    ],
    '⛹️{{skin_tone}}‍♀️': [
        'Kvinne Bouncing Ball',
        ':woman_bouncing_ball:',
        ':boucing_ball:',
        'Kvinne basketball spiller',
        ':woman:'
    ],
    '⛹️{{skin_tone}}': [
        'Person Bouncing Ball',
        ':person_bouncing_ball:',
        ':boucing_ball:',
        'Person Basketball Spiller',
        ':person:'
    ],
    '🏋️{{skin_tone}}‍♂️': [
        'Mann Levende Vekter',
        ':man_lifting_weights:',
        ':lifting_weights:',
        'Mann Vektløfter',
        ':man:'
    ],
    '🏋️{{skin_tone}}‍♀️': [
        'Kvinniske Levevekter',
        ':woman_lifting_weights:',
        ':lifting_weights:',
        'Kvinne vekter',
        ':woman:'
    ],
    '🏋️{{skin_tone}}': [
        'Levende vekter for Person',
        ':person_lifting_weights:',
        ':lifting_weights:',
        'Person Weightlifter',
        ':person:'
    ],
    '🚴{{skin_tone}}‍♂️': [
        'Mann sykling',
        ':man_biking:',
        ':biking:',
        'Mann sykkel',
        'Mannlig sykkel',
        ':man:'
    ],
    '🚴{{skin_tone}}‍♀️': [
        'Kvinne sykling',
        ':woman_biking:',
        ':biking:',
        'Kvinne sykler',
        'Kvinnelig syklist',
        ':woman:'
    ],
    '🚴{{skin_tone}}': [
        'Person sykling',
        ':person_biking:',
        ':biking:',
        'Person sykkelist',
        'Person sykkelist',
        ':person:'
    ],
    '🚵{{skin_tone}}‍♂️': [
        'Mann Fjell Sykling',
        ':man_mountain_bike:',
        ':mountain_bike:',
        'Mann Fjell Sykler',
        ':man:'
    ],
    '🚵{{skin_tone}}‍♀️': [
        'Kvinne ved fotturer',
        ':woman_mountain_bike:',
        ':mountain_bike:',
        'Kvinne ved Fjellsykler',
        ':woman:'
    ],
    '🚵{{skin_tone}}': [
        'Person Fjelltur',
        ':person_mountain_bike:',
        ':mountain_bike:',
        'Person Fjell sykler',
        ':person:'
    ],
    '🤸{{skin_tone}}‍♂️': [
        'Mannlig Eske med',
        ':man_cartwheeling:',
        ':cartwheeling:',
        'Mann som gjÃ¸r karthjul',
        ':man:'
    ],
    '🤸{{skin_tone}}‍♀️': [
        'Kvinnelige karthjul',
        ':woman_cartwheeling:',
        ':cartwheeling:',
        'Kvinne begers tegnehjul',
        ':woman:'
    ],
    '🤸{{skin_tone}}': [
        'Karttrapp av Person',
        ':person_cartwheeling:',
        ':cartwheeling:',
        'Person Doing Karthjul',
        ':person:'
    ],
    '🤼‍♂️': [
        'Menn Bry',
        ':men_wrestling:',
        ':wrestling:',
        'Bryting',
        'Bransjer',
        ':man:'
    ],
    '🤼‍♀️': [
        'Kvinner blottet',
        ':women_wrestling:',
        ':wrestling:',
        'Bryting',
        'Bransjer',
        ':woman:'
    ],
    '🤼': [
        'Folk bruser',
        ':people_wrestling:',
        ':wrestling:',
        'Bryting',
        'Bransjer',
        ':person:'
    ],
    '🤽{{skin_tone}}‍♂️': [
        'Mann leker vann polo',
        ':man_playing_water_polo:',
        ':playing_water_polo:',
        ':man:'
    ],
    '🤽{{skin_tone}}‍♀️': [
        'Kvinne Lekende Vann Polo',
        ':woman_playing_water_polo:',
        ':playing_water_polo:',
        ':woman:'
    ],
    '🤽{{skin_tone}}': [
        'Person Playing Water Polo',
        ':person_playing_water_polo:',
        ':playing_water_polo:',
        ':person:'
    ],
    '🤾{{skin_tone}}‍♂️': [
        'Mann Spillehåndball',
        ':man_playing_handball:',
        ':playing_handball:',
        ':man:'
    ],
    '🤾{{skin_tone}}‍♀️': [
        'Kvinne spiller håndball',
        ':woman_playing_handball:',
        ':playing_handball:',
        ':woman:'
    ],
    '🤾{{skin_tone}}': [
        'Person Playing håndball',
        ':person_playing_handball:',
        ':playing_handball:',
        ':person:'
    ],
    '🤹{{skin_tone}}‍♂️': [
        'Man Jugger',
        ':man_juggling:',
        ':juggling:',
        'Mannlig Juggler',
        ':man:'
    ],
    '🤹{{skin_tone}}‍♀️': [
        'Kvinne pip',
        ':woman_juggling:',
        ':juggling:',
        'Kvinnelig Juggler',
        ':woman:'
    ],
    '🤹{{skin_tone}}': [
        'Person Juggling',
        ':person_juggling:',
        ':juggling:',
        'Person Juggler',
        ':person:'
    ],
    '🧘{{skin_tone}}‍♂️': [
        'Mann i Lotus posisjon',
        ':man_lotus_position:',
        ':lotus_position:',
        'Meditasjon',
        'Zen',
        'Kryss bekledd',
        'Ioga',
        ':man:'
    ],
    '🧘{{skin_tone}}‍♀️': [
        'Kvinne i Lotusposisjon',
        ':woman_lotus_position:',
        ':lotus_position:',
        'Meditasjon',
        'Zen',
        'Kryss bekledd',
        'Ioga',
        ':woman:'
    ],
    '🧘{{skin_tone}}': [
        'Person i Lotus-posisjon',
        ':person_lotus:_posisjon',
        ':lotus_position:',
        'Meditasjon',
        'Zen',
        'Kryss bekledd',
        'Ioga',
        ':person:'
    ],
    '🏃{{skin_tone}}‍♂️': [
        'Mann løper',
        ':man_running:',
        ':running:',
        ':man:'
    ],
    '🏃{{skin_tone}}‍♀️': [
        'Kvinne kjørende',
        ':woman_running:',
        ':running:',
        ':woman:'
    ],
    '🏃{{skin_tone}}': [
        'Person løper',
        ':person_running:',
        ':running:',
        ':person:'
    ],
    '🏃{{skin_tone}}‍♂️‍➡️': [
        'Man Running Facing Right',
        ':man_running_facing_right:',
        ':running:',
        ':man:'
    ],
    '🏃{{skin_tone}}‍♀️‍➡️': [
        'Woman Running Facing Right',
        'woman_running_facing_right:',
        ':running:',
        ':woman:'
    ],
    '🏃{{skin_tone}}‍➡️': [
        'Person Running Facing Right',
        ':person_running_facing_right:',
        ':running:',
        ':person:'
    ],
    '🕺{{skin_tone}}': [
        'Mannlig Dancing',
        ':man_dancing:',
        ':dancing:',
        ':man:'
    ],
    '💃{{skin_tone}}': [
        'Dans for dans',
        ':woman_dancing:',
        ':dancing:',
        ':woman:'
    ],
    '🤺': [
        'Person gjerde',
        ':person_fencing:',
        'Fanser',
        ':fencing:'
    ],
    '🏆': [
        'Trofé',
        ':trophy:',
        'Championship',
        'Vinner',
        ':gold:',
        ':yellow:'
    ],
    '🏅': [
        'Sport Medal',
        ':sports_medal:',
        ':medal:',
        ':gold:',
        ':yellow:'
    ],
    '🥇': [
        '1. plass medalje',
        ':first_place_medal:',
        ':gold_medal:',
        'Førsteplass medalje',
        'Gull Medal',
        ':yellow:',
        ':gold:'
    ],
    '🥈': [
        '2. plass medalje',
        ':second_place_medal:',
        ':silver_medal:',
        'Andre plass medalje',
        'SÃ¸lv Medal',
        ':gray:',
        ':grey:',
        ':silver:'
    ],
    '🥉': [
        'Tredje plass medalje',
        ':third_place_medal:',
        ':bronze_medal:',
        'Tredje plass medal',
        'Bronse Medal',
        ':brown:',
        ':bronze:'
    ],
    '⚽': [
        'Fotball',
        ':football:',
        'Fotball',
        ':white:',
        ':black:'
    ],
    '⚾': [
        'Baskeball',
        ':baseball:',
        'Mykball',
        ':white:'
    ],
    '🥎': [
        'Mykball',
        ':softball:',
        ':yellow:'
    ],
    '🏀': [
        'basketball',
        ':basketball:',
        ':orange:',
        'Basketball og Hoop'
    ],
    '🏐': [
        'volleyball',
        ':volleyball:',
        ':white:'
    ],
    '🏈': [
        'Amerikansk fotball',
        ':american_football:',
        'Fotball',
        'Gridiron',
        'Overbolle',
        ':brown:'
    ],
    '🏉': [
        'Rugby fotball',
        ':rugby:',
        'Fotball',
        'Liga',
        'Fugler',
        'Unionen'
    ],
    '🎾': [
        'Tennis',
        ':tennis:',
        ':ball:',
        'Ballett',
        'Racket',
        'Racket',
        ':yellow:'
    ],
    '🥏': [
        'Flyvende Disk',
        ':flying_disk:',
        'Frisbie'
    ],
    '🎳': [
        'bowling',
        ':bowling:',
        'Tilkobling',
        'Skitter',
        'Ti pung buling'
    ],
    '🏏': [
        'Kricket',
        ':cricket:',
        'Flaggermus',
        'Ballett'
    ],
    '🏑': [
        'Felt hockey',
        ':field_hockey:',
        'Ballett',
        'Pinne'
    ],
    '🏒': [
        'Is hockey',
        ':ice_hockey:',
        'Ballett',
        'Pinne'
    ],
    '🥍': [
        'Lakrosse',
        ':lacrosse:',
        'Ballett',
        'Pinne',
        ':red:'
    ],
    '🏓': [
        'Ping Pong',
        ':ping_pong:',
        ':table_tennis:',
        'Tabell Tennis',
        'Ballett',
        'Paddle'
    ],
    '🏸': [
        'Badminton',
        ':badminton:',
        'Hentekokk',
        'Racket'
    ],
    '🥊': [
        'Boksing hanske',
        ':boxing_glove:',
        ':red:'
    ],
    '🥋': [
        'Martial kunst unik',
        ':martial_arts_uniform:',
        ':judo:',
        ':karate:',
        ':kung_fu:',
        'Judo',
        'Karaté',
        'Kung fu'
    ],
    '⛳': [
        'Flagg i Hole',
        ':flag_in_hole:',
        ':golf_flag:',
        'Golf Flagg'
    ],
    '⛸️': [
        'Is skate',
        ':ice_skate:',
        'Skade'
    ],
    '🎣': [
        'fisking',
        ':fishing:',
        'Pol',
        'Fisk',
        'Fiskestang'
    ],
    '🎽': [
        'Kjører skjorte',
        ':running_shirt:',
        'Singel',
        'Sash'
    ],
    '🎿': [
        'Skis',
        ':skis:',
        'Ski',
        'Oppstart'
    ],
    '🛷': [
        'Skrevet',
        ':sled:'
    ],
    '🥌': [
        'Kuraterende stein',
        ':curling_stone:'
    ],
    '🎯': [
        'Direkte treff',
        ':direct_hit:',
        'Bueskyting',
        'Bullseye',
        'Dart'
    ],
    '🎱': [
        'Basseng 8 Ball',
        ':pool_8_ball:',
        'Cue Ball',
        'Snooker',
        'Biljard',
        ':black:'
    ],
    '🎮': [
        'Videospillkontroller (Automatic Translation)',
        ':video_game_controller:',
        ':playstation:',
        ':xbox:',
        'Spillestasjon',
        'Xbox',
        'Spillannonse',
        'Wii U'
    ],
    '♟️': [
        'Svart Sjakk',
        ':black_chess_pawn:',
        ':black:'
    ],
    '🏹': [
        'Bue og Pil',
        ':arch:',
        'Ark'
    ],
    '🥅': [
        'Mål Netto',
        ':goal_net:'
    ],
    '🀄': [
        'Mahjong rød drage',
        ':mahjong:',
        'Mahjong',
        'Mahjong Tile',
        '中',
        'Mahjong GrÃ¸d Drage'
    ],
    '🎴': [
        'Blomster spillekort',
        ':flower_playing_cards:',
        'Kortstokk av kort',
        'Hanafuda',
        'Hwatu',
        'Spiller kort'
    ]
};
/*travel and places*/
emojis_language[lang][9] = {
    '🚂': [
        'Steam Lokomotiv',
        ':steam_train:',
        'Damptog',
        'Lokomotiv Jernbane'
    ],
    '🚃': [
        'Jernbane bil',
        ':railway_car:',
        'Jernbil',
        'Jernbane bil',
        'Jernbane frakt',
        'Jernbane vogn'
    ],
    '🚄': [
        'Tog med høy hastighet',
        ':high_speed_train:'
    ],
    '🚅': [
        'Kule tog',
        ':bullet_train:',
        'Shinkansen',
        'Høyhastighets Tog med Bullet Nose'
    ],
    '🚆': [
        'Tog',
        ':train:'
    ],
    '🚇': [
        'Undergrunnsbane',
        ':underground:',
        'Rør',
        'T-bane',
        'T-bane'
    ],
    '🚈': [
        'Lys skinne',
        ':light_rail:',
        'Tog'
    ],
    '🚊': [
        'Trikk',
        ':tram:'
    ],
    '🚝': [
        'Enskinnebane',
        ':monorail:',
        'Tog'
    ],
    '🚞': [
        'Fjell Jernbane',
        ':mountain_railway:',
        'Funicular',
        'Tog og fjell'
    ],
    '🚋': [
        'Trikk stol',
        ':tram_car:'
    ],
    '🚌': [
        'Buss',
        ':bus:',
        'Trener'
    ],
    '🚍': [
        'Pågående buss',
        ':front_of_bus:',
        'Front av buss'
    ],
    '🚎': [
        'Trolleybus',
        ':trolleybus:',
        'Elektronisk buss'
    ],
    '🚐': [
        'Minibus',
        ':minibus:',
        'Minivansk',
        'Personer-overtrekk'
    ],
    '🚑': [
        'Ambulanse',
        ':ambulance:'
    ],
    '🚒': [
        'Brann Motor',
        ':fire_engine:',
        'Brann avdeling',
        'Brann Lastebil'
    ],
    '🚓': [
        'Politi bil',
        ':police_car:',
        'Cop bil',
        'Side av politiets bil'
    ],
    '🚔': [
        'Kommende politibil',
        ':front_of_police_car:',
        'Foran politiets bil',
        'Cop bil'
    ],
    '🚕': [
        'taxi',
        ':taxi:',
        'New York Taxi',
        'Side av taxi'
    ],
    '🚖': [
        'taxi',
        ':front_of_taxi:',
        'Pågående taxi',
        'Forside av taxi'
    ],
    '🚗': [
        'Bil',
        ':car:',
        'Rød bil',
        'Side av bil',
        'Bil'
    ],
    '🚘': [
        'Kommende bilkompilering',
        ':front_of_car:',
        'Rød bil',
        'Forside av bil'
    ],
    '🚚': [
        'Levering lastebil',
        ':lorry:',
        'Lastebil'
    ],
    '🚛': [
        'Ledsaget Lorry',
        ':articulated_lorry:',
        'Grønn lastebil'
    ],
    '🚜': [
        'Traktor',
        ':tractor:',
        'Gård'
    ],
    '🛻': [
        'Henting Lastebil',
        ':pickup_truck:'
    ],
    '🏎️': [
        'Rasende bil',
        ':racing_car:',
        'F1',
        'Formel En',
        'Race Bil'
    ],
    '🏍️': [
        'Motorsykkel',
        ':motorbike:',
        'Motorsykkel'
    ],
    '🛵': [
        'Motorisk scooter',
        ':motor_scooter:',
        'Vespa',
        'Motorsykkel',
        'Motorsykkel'
    ],
    '🛺': [
        'Automatisk rairkshaw',
        ':auto_rickshaw:',
        'Tuk Tuk'
    ],
    '🚲': [
        'Sykkel',
        ':bike:',
        'Sykkel'
    ],
    '🛴': [
        'Kast ut scooter',
        ':kick_scooter:'
    ],
    '⛵': [
        'Seilbåt',
        ':sailboat:',
        'Dinghy',
        'Yacht'
    ],
    '🚤': [
        'Fartsbåt',
        ':speedboat:',
        'Motorbåt',
        'Kraftbåt'
    ],
    '🛳️': [
        'Passasjerskip,',
        ':passenger_ship:'
    ],
    '⛴️': [
        'Ferge',
        ':ferry:'
    ],
    '🛥️': [
        'Motor båt',
        ':motor_boat:'
    ],
    '🚢': [
        'Cruise skip',
        ':cruise_ship:'
    ],
    '✈️': [
        'Fly',
        ':airplane:',
        'Aeroplane'
    ],
    '🛩️': [
        'Lite fly',
        ':small_airplane:',
        'Liten fly'
    ],
    '🚁': [
        'Helikopter',
        ':helicopter:'
    ],
    '🚟': [
        'Jernbanestengen Suspensjon',
        ':suspension_railway:'
    ],
    '🚠': [
        'Mountain Cableway',
        ':mountain_cableway:'
    ],
    '🚡': [
        'Aerial Tramway',
        ':aerial_tramway:',
        'Kabel bil',
        'Gondola',
        'Ropeway'
    ],
    '🛰️': [
        'Satellitt',
        ':satellite:'
    ],
    '🚀': [
        'Rakett',
        ':rocket:',
        'Rom pendelbuss'
    ],
    '🛸': [
        'Sukkersiver',
        ':flying_saucer:',
        'FO'
    ],
    '🚉': [
        'Tog stasjon',
        ':train_station:',
        'Tren plattform'
    ],
    '🚏': [
        'Stopp buss',
        ':bus_stop:'
    ],
    '🛣️': [
        'Motorvei',
        ':motorway:',
        'Vei',
        'Motorvei',
        'Intervall'
    ],
    '🛤️': [
        'Jernbane spor',
        ':railway_track:'
    ],
    '🛫': [
        'Fly Avreise',
        ':airplane_departure:',
        'Tar av'
    ],
    '🛬': [
        'Fly ankomst',
        ':airplane_arrival:',
        'Fly ankommer',
        'Landing'
    ],
    '🗾': [
        'Kart over Japan',
        ':map_of_japan:'
    ],
    '⛰️': [
        'Fjell',
        ':mountain:'
    ],
    '🏔️': [
        'Snøskappet fjell',
        ':snow_capped_mountain:'
    ],
    '🌋': [
        'Vulkan',
        ':volcano:'
    ],
    '🗻': [
        'Monter Fuji',
        ':mount_fuji:',
        'Fujisisk/e'
    ],
    '🏕️': [
        'Camping',
        ':camping:',
        'Leirplass'
    ],
    '🏖️': [
        'Beach With Umbrella',
        ':beach_with_umbrella:'
    ],
    '🏜️': [
        'Desert',
        ':desert:'
    ],
    '🏝️': [
        'Ørken Øy',
        ':desert_island:'
    ],
    '🏞️': [
        'Nasjonalpark',
        ':national_park:'
    ],
    '🏟️': [
        'Stadion',
        ':stadium:',
        'Bestefar',
        'Sport Stadium'
    ],
    '🏛️': [
        'Klassisk bygning',
        ':classical_building:',
        'Gresk',
        'Roma'
    ],
    '🏗️': [
        'Konstruksjon av bygning',
        ':building_construction:',
        'Kran'
    ],
    '🏘️': [
        'Husbygg',
        ':houses_building:',
        'Hus og gruppe'
    ],
    '🏚️': [
        'Derelict hus bygging',
        ':old_house:',
        'Forlatt hus',
        'Gammelt hus',
        'Hjemmelaget hus'
    ],
    '🏠': [
        'Hjem',
        ':home:',
        'Husbygning'
    ],
    '🏡': [
        'Hus med Hage',
        ':house_with_garden:',
        'Hus og tre'
    ],
    '🏢': [
        'Kontor bygging',
        ':office_building:',
        'By bygning',
        'Høy-Støy bygning'
    ],
    '🏣': [
        'Japansk postkontor',
        ':japanese_post_office:',
        'Japansk postmerke'
    ],
    '🏤': [
        'Post kontor',
        ':european_post_office:',
        'Europeisk postkontor'
    ],
    '🏥': [
        'Sykehus',
        ':hospital:',
        'ER',
        'A&E',
        'Nødrom',
        'Ulykke og nødsituasjon',
        'Røde Kors',
        'Medisinsk'
    ],
    '🏦': [
        'Bank^forbindelse',
        ':bank:',
        'BK',
        'Bakkureru',
        'Bank filial',
        'Bakkureru'
    ],
    '🏨': [
        'Hotell',
        ':hotel:',
        'Overnatting',
        'H bygning'
    ],
    '🏩': [
        'Kjærlighets hotell',
        ':love_hotel:',
        'Kjærlighets hotell'
    ],
    '🏪': [
        'Bekvemmelighet Butikk',
        ':convenience_store:',
        '24-timers butikk',
        '7-11',
        'Hjørne Butikk',
        'Kwik-E-Mart'
    ],
    '🏫': [
        'Skole',
        ':school:',
        'Klokke tårn',
        'Grunnleggende høymidt i verden'
    ],
    '🏬': [
        'Avdeling butikk',
        ':department_store:',
        'Handel senter',
        'Butikk'
    ],
    '🏭': [
        'Fabrikk',
        ':factory:',
        'Industriell',
        'Industri',
        'Forurensning',
        'Smog'
    ],
    '🏯': [
        'Japansk slott',
        ':japanese_castle:',
        'Festning'
    ],
    '🏰': [
        'Europeisk Borg',
        ':european_castle:',
        'Turrets'
    ],
    '💒': [
        'Kirke hjerte',
        ':church_heart:',
        'Brylling av kirke',
        'Bryllup'
    ],
    '🗼': [
        'Tokyo Tårn',
        ':tokyo_tower:',
        'Eiffel tårn',
        'Rød tårn'
    ],
    '🗽': [
        'Frihetsfylke',
        ':statue_of_liberty:',
        'New York'
    ],
    '⛪': [
        'Kirke bygning',
        ':church_building:',
        'Kryss'
    ],
    '🕌': [
        'Moske',
        ':mosque:',
        'Domet tak',
        'Minaret'
    ],
    '🛕': [
        'Orginal tempel',
        ':hindu_temple:'
    ],
    '🕍': [
        'Synagogue',
        ':synagogue:',
        'Jødedom',
        'Synagog',
        'Tempel'
    ],
    '⛩️': [
        'Shrine skal legges',
        ':shinto_shrine:',
        'Kami-nei-michi'
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
        'Paraply på Ground',
        ':beach_umbrella:',
        'Beach paraply'
    ],
    '🌄': [
        'Soloppgang over fjell',
        ':sunrise_over_mountains:',
        'Morgen',
        'Soloppgang'
    ],
    '🌅': [
        'Soloppgang',
        ':sunrise:',
        ':sunset:',
        'Solnedgang'
    ],
    '🌆': [
        'Sitron til Dusk',
        ':cityscape_at_dusk:',
        'Oransje himmel by',
        'Skumring'
    ],
    '🌇': [
        'Solnedgang Over Bygninger',
        ':sunset_over_buildings:',
        'By solnedgang'
    ],
    '🌃': [
        'Natt med stjerner',
        ':night_with_stars:',
        'By på Natt',
        'Stjerne Natt'
    ],
    '🗿': [
        'Moai',
        ':moai:',
        'Påske Øya Statue',
        'Menneskelig stein som løfter',
        'Moyai Statue'
    ],
    '🌠': [
        'Skytende stjerne',
        ':shooting_star:',
        'Når du ønsker en stjerne',
        'Meteoroid'
    ],
    '🌌': [
        'Milky Way',
        ':milky_way:',
        'Galakse',
        'Natt Himmel',
        'Mellomrom',
        'Stjerner',
        'Univers'
    ],
    '🎑': [
        'Måne leskjerm seremoni',
        ':moon_viewing_ceremony:',
        'Grass, innbakt og måne',
        'Høst måne',
        'Midtsommer festival',
        'Tsukimi'
    ],
    '🛖': [
        'Hytta',
        ':hut:'
    ],
    '🎢': [
        'Berg- og Dalbane',
        ':roller_coaster:',
        'rulleskøyting',
        'Tema Park'
    ],
    '🛝': [
        'Lekeplass lysbilde',
        ':playground_slide:',
        'Baby',
        'Barn'
    ]
};
/*technologies (smartphones, laptops, etc.) and office*/
emojis_language[lang][10] = {
    '⌚': [
        'Overvåk',
        ':watch:',
        'Timepepiece',
        'Apple klokke'
    ],
    '⏰': [
        'Alarmen klokke',
        ':alarm_clock:'
    ],
    '⏱️': [
        'Stoppeklokke',
        ':stopwatch:'
    ],
    '⏲️': [
        'Tidtaker klokke',
        ':timer_clock:'
    ],
    '🕰️': [
        'Mantelbrikke Klokke',
        ':mantelpiece_clock:'
    ],
    '🧭': [
        'Kompass',
        ':compass:'
    ],
    '🕹️': [
        'Styrespak',
        ':joystick:'
    ],
    '🎙️': [
        'Studio mikrofon',
        ':studio_microphone:'
    ],
    '🎚️': [
        'Nivå skyveknapp',
        ':level_slider:'
    ],
    '🎛️': [
        'Styre knuter',
        ':control_knobs:'
    ],
    '📻': [
        'Radiokasse',
        ':radio:',
        'Digitalt radio',
        'Trådløs'
    ],
    '📱': [
        'Mobil',
        ':mobile_phone:',
        'Smarttelefon',
        'iPhone',
        'Mobiltelefon',
        'Device'
    ],
    '📲': [
        'Mobiltelefon med Høyre pil til venstre',
        ':phone_call:',
        'Telefon samtale',
        'Spurt til telefon'
    ],
    '☎️': [
        'Svart telefon',
        ':rotary_phone:',
        'Roterende telefon',
        ':red:'
    ],
    '📞': [
        'Telefon mottaker',
        ':phone:',
        'Handset',
        'Telefon',
        ':black:',
        'Device'
    ],
    '📟': [
        'Personsøker',
        ':pager:',
        'Beeper',
        'Bleeper'
    ],
    '📠': [
        'Faks Maskin',
        ':fax_machine:',
        'Facsimile',
        'Faks'
    ],
    '🔋': [
        'Batteri',
        ':battery:',
        'AA Batteri',
        'Telefon batteri'
    ],
    '🔌': [
        'Elektrisk Plug',
        ':power_cable:',
        'AC Adaptor',
        'Strøm Kabel',
        'Strøm strang'
    ],
    '💻': [
        'Lautopp',
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
        'Skrivebord Datamaskin',
        ':desktop_computer:',
        ':computer:',
        'iMac',
        'PC',
        'Device'
    ],
    '🖨️': [
        'Skriver',
        ':printer:',
        'Device'
    ],
    '⌨️': [
        'Computer Keyboard',
        ':keyboard:',
        ':computer_keyboard:'
    ],
    '🖱️': [
        'Datamaskin Mus',
        ':computer_mouse:',
        'Museknapp for tre'
    ],
    '🖲️': [
        'Sporball',
        ':trackball:'
    ],
    '💽': [
        'Datamaskin disk',
        ':blu_ray:',
        'Minidisc',
        'CD',
        'DVD',
        'Blu-ray',
        'BD'
    ],
    '💾': [
        'Diskett disk',
        ':floppy_disk:',
        '3,5′\' Disk',
        'Disk'
    ],
    '💿': [
        'Optisk disk',
        ':cd:',
        'CD',
        'CD-ROM',
        'Kompakt plate'
    ],
    '📀': [
        'DVD',
        'DVD-ROM',
        ':dvd:',
        'DVD video'
    ],
    '🎥': [
        'Slå på kamera',
        ':movie_camera:',
        'Film Kamera',
        'Hollywood',
        'Film'
    ],
    '🎞️': [
        'Film Frames',
        ':film_frames:'
    ],
    '📽️': [
        'Filmprojektor',
        ':film_projector:'
    ],
    '📺': [
        'TV',
        ':tv:',
        'Tv'
    ],
    '📷': [
        'Digitalt kamera',
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
        'Video tape',
        'Videokassett'
    ],
    '💳': [
        'Kredittkort',
        ':credit_card:',
        'Debet kort',
        'AMEX',
        'Diners Club',
        'Amerikansk Express',
        'Masterkort',
        'VISA kort'
    ],
    '📧': [
        'E-post',
        ':email:',
        'E-post'
    ],
    '📨': [
        'Innkommende konvolutt',
        ':incoming_envelope:',
        'Konvolutt med linjer',
        'Hurtig konvolutt'
    ],
    '📩': [
        'Konvolutt med pil nedover over',
        ':insert_in_envelope:',
        'Pil Ned Konvolutt',
        'Sett inn i konvolutt'
    ],
    '📤': [
        'Utboks-linje',
        ':outbox_tray:'
    ],
    '📥': [
        'Innbokslinje (Automatic Translation)',
        ':inbox_tray:'
    ],
    '📮': [
        'Postkasse',
        ':postbox:'
    ],
    '📁': [
        'Fil mappe',
        ':file_folder:',
        'Mappe',
        'Katalog',
        'Stengt filmappe'
    ],
    '📂': [
        'Åpne filmappe',
        ':open_file_folder:',
        'Katalog'
    ],
    '🗂️': [
        'Kort indeksering divister',
        ':card_index_dividers:'
    ],
    '📅': [
        'Kalender',
        ':calendar:',
        '17. juli',
        'Verdens Emoji-dag'
    ],
    '🗓️': [
        'Spiral kalender annonse',
        ':spiral_calendar_pad:'
    ],
    '📆': [
        'Tear-Off Calendar',
        ':day_calendar:',
        'Dag kalender',
        'Desk kalender'
    ],
    '📈': [
        'Økning av kart',
        ':increasing_chart:',
        'Positivt diagram',
        'Opp Pointing Graf',
        'Diagram med Trend oppover'
    ],
    '📉': [
        'Avvisning av kart',
        ':decreasing_chart:',
        'Negativt diagram',
        'Ned Pointing Graf',
        'Diagram med Trend nedover'
    ],
    '📊': [
        'Stolpediagram',
        ':bar_chart:',
        'Diagram for søyle'
    ],
    '📌': [
        'Trykknapp',
        ':pushpin:',
        'Thumb Tack',
        ':red:'
    ],
    '📋': [
        'Utklippstavle',
        ':clipboard:'
    ],
    '📍': [
        'Runde Pushpin',
        ':round_pushpin:',
        'Sette inn',
        'Kart Fest Fest',
        'Fest',
        'Rød PIN',
        ':red:'
    ],
    '📎': [
        'Paperklipp',
        ':paperclip:',
        'Utklipp'
    ],
    '📏': [
        'Rett linjal',
        ':straight_ruler:'
    ],
    '📐': [
        'Triangulær linjal',
        ':triangular_ruler:',
        'Trekant linjal'
    ],
    '✂️': [
        'Saks',
        ':scissors:',
        'Skjæring'
    ],
    '✏️': [
        'Blyant',
        ':pencil:',
        'Bly'
    ],
    '✒️': [
        'Svart Nib',
        ':black_nib:',
        'Pennens nib',
        'Fontene penn'
    ],
    '🖋️': [
        'Fontene penn',
        ':fountain_pen:',
        'Nedre venstre penn'
    ],
    '🖊️': [
        'Penn',
        ':pen:',
        'Nedre venstre Ballpoint penn',
        'Ballepunkt penn'
    ],
    '🖌️': [
        'Malekost',
        ':paintbrush:',
        'Pensel',
        'Lavere venstre malingpensel'
    ],
    '🖍️': [
        'Crayon',
        ':crayon:',
        'Nedre venstre fargestift'
    ],
    '📝': [
        'Beskjed',
        ':memo:',
        'Memorandum',
        'Notat',
        'Blyant og papir'
    ],
    '🗑️': [
        'Vastepaper kurv',
        ':wastepaper_basket:',
        'Søppel boks',
        'Gummilig seng',
        'Papirkurv kan'
    ],
    '📡': [
        'Satellitt Antenna',
        ':satellite_antenna:'
    ],
    '🔭': [
        'Teleskop',
        ':telescope:',
        'Starassering'
    ],
    '🔬': [
        'Mikroskop',
        ':microscope:',
        'Magnify',
        'Vitenskap'
    ],
    '📭': [
        'Åpne \'Postkasse\' med lav flagg',
        ':open_mailbox_lowered:'
    ],
    '📬': [
        'Åpne postkasse med haug flagg',
        ':open_mailbox_raised:',
        'Åpne postkasse'
    ],
    '📪': [
        'Stengt postkasse med lav flagg',
        ':closed_mailbox_lowered:'
    ],
    '📫': [
        'Stengt postkasse med luftflagg',
        ':closed_mailbox_raised:'
    ],
    '📰': [
        'Avis',
        ':newspaper:'
    ],
    '🗞️': [
        'Rollesika opp avis',
        ':rolled_up_newspaper:',
        'Avis Levering'
    ],
    '📄': [
        'Oppfatning av side',
        ':printed_page:',
        'Utskrevet side'
    ],
    '📜': [
        'Rull',
        ':scroll:',
        'Grader',
        'Parchment'
    ],
    '📃': [
        'Side med Curl',
        ':curled_page:',
        'Curled Page',
        'Curly Page'
    ],
    '📓': [
        'Notatbok',
        ':notebook:',
        'Svart og hvit bok'
    ],
    '📔': [
        'Notebook med dekorativt Cover',
        ':notebook_decorative_cover:'
    ],
    '📕': [
        'Lukket bok',
        ':closed_book:',
        'Rød bok',
        'Rød tekstbok',
        ':red:'
    ],
    '📖': [
        'Åpne bok',
        ':open_book:',
        'Bok',
        'Novel'
    ],
    '📗': [
        'Grønn bok',
        ':green_book:',
        'Grønn tekstbok',
        ':green:'
    ],
    '📘': [
        'Blå bok',
        ':blue_book:',
        'Blå tekstbok',
        ':blue:'
    ],
    '📙': [
        'Oransje bok',
        ':orange_book:',
        'Oransje tekstbok',
        ':orange:'
    ],
    '📚': [
        'Bøker',
        ':books:',
        'Bøker hagl',
        'Stabel av bøker'
    ],
    '🗳️': [
        'Ballot Boks med Ballot',
        ':ballot_box:',
        'Stem boks',
        'Stemming'
    ],
    '🗄️': [
        'Filkabinett',
        ':file_cabinet:',
        'Filer Kabinett'
    ],
    '🗃️': [
        'Oppgavelappens Filboks',
        ':card_file_box:'
    ],
    '🖇️': [
        'Sammenkoblede Paperclips',
        ':linked_paperclips:',
        ':gray:',
        ':grey:'
    ]
};
/*clothes and accessories*/
emojis_language[lang][11] = {
    '👣': [
        'Fotprinter',
        ':footprints:',
        'Fot',
        'Fotspor'
    ],
    '👓': [
        'Briller',
        ':glasses:',
        'Eveylglass'
    ],
    '🕶️': [
        'Solbriller',
        ':sunglasses:'
    ],
    '🥽': [
        'Goggler',
        ':goggles:'
    ],
    '🥼': [
        'Lab frakk',
        ':lab_coat:'
    ],
    '👔': [
        'Necktie',
        ':necktie:',
        'Bedrift skjorte',
        'Skjorte og slips'
    ],
    '👕': [
        'T-skjorte',
        ':t_shirt:',
        ':t-shirt:',
        'Te skjorte',
        'Polo skjorte'
    ],
    '👖': [
        'Demonter',
        ':jeans:',
        'Denim/henne',
        'Bukser',
        'Bukser'
    ],
    '🧣': [
        'Scarf',
        ':scarf:'
    ],
    '🧤': [
        'Hansker',
        ':gloves:'
    ],
    '🧥': [
        'Frakk',
        ':coat:'
    ],
    '🧦': [
        'Socks',
        ':socks:'
    ],
    '👗': [
        'Kjole',
        ':dress:',
        'Skjorte',
        'Gal'
    ],
    '👘': [
        'Kimono',
        ':kimono:',
        'Prikking egen',
        'Japansk kjole'
    ],
    '👙': [
        'Bikini',
        ':bikini:',
        'Baner',
        'Swimdress'
    ],
    '🩱': [
        'En-Piece Swimsuit',
        'one_brudd_swimsuit',
        'en-brikke_svømmeboks'
    ],
    '👚': [
        'Kvinne klær',
        ':womans_clothes:',
        'Kvinne klær',
        'Blouse',
        'Rosa skjorte',
        'Blouse'
    ],
    '👛': [
        'Tømme',
        ':purse:',
        'Lommebok'
    ],
    '👜': [
        'Håndpose',
        ':handbag:'
    ],
    '👝': [
        'Klær bagasje',
        ':clutch_bag:',
        'Klær',
        'Liten handlekurv',
        'Pouch'
    ],
    '🎒': [
        'Ryggsekk',
        ':backpack:',
        'Kurv',
        'Skolen kurv',
        'Skole Satchel',
        'Rucksack'
    ],
    '👞': [
        'Mans Shoe',
        ':mans_shoe:',
        'Mans Shoe',
        'Sko',
        'Brun serie',
        'Kjole på Serie'
    ],
    '👟': [
        'Atletisk Sko',
        ':athletic_shoe:',
        'Kjører Sko',
        'Sneaker',
        'Løper',
        'Kurspilot',
        'Tennis Sko'
    ],
    '🥾': [
        'Hiking oppstartsmiljø',
        ':hiking_boot:'
    ],
    '🥿': [
        'Flat sko',
        ':flat_shoe:'
    ],
    '👠': [
        'HøyHøyt Sko',
        ':high_heeled_shoe:',
        ':high_heel:',
        'Stilettil',
        'Høy He\'el'
    ],
    '👡': [
        'Kvinnene sandal',
        ':womans_sandal:',
        'Kvinnene sandal',
        'Helbredet sandal',
        'Sandaler',
        'Sandal'
    ],
    '👢': [
        'Kvinne stÃ¸vler',
        ':womans_boots_',
        'Kvinne stÃ¸vler',
        'Kubjente Sko',
        'Kne høye støvler',
        'Helbrede støvler'
    ],
    '👑': [
        'Krone',
        ':crown:',
        'Konge',
        'Dronning',
        'Prins',
        'Kongelig',
        'Prinsesse',
        ':gold:',
        ':yellow:'
    ],
    '👒': [
        'Hatt',
        ':hat:',
        'Kvinne Hatt',
        'Hatt med bue',
        'Ladies Hat'
    ],
    '🎩': [
        'Topp Hatt',
        ':top_hat:',
        'Formell Wear',
        'Groom',
        ':black:'
    ],
    '🎓': [
        'Avgangsskap',
        ':graduation_cap:',
        'Universitet',
        'Graduate',
        'Mørtar brett',
        'Universitet',
        'Kvadrat akademisk cap',
        ':black:'
    ],
    '🧢': [
        'Fakturert hetten',
        ':billed_cap:',
        'Baskeball hatt'
    ],
    '⛑️': [
        'Hjelm med White Cross',
        ':helmet_with_white_cross:',
        ':helmet_with_cross:',
        ':rescue_worker_helmet:',
        ':rescue_workers_helmet:',
        'Redde arbeidere hjelm',
        ':red:',
        ':white:'
    ],
    '💼': [
        'Dokumentmappe',
        ':briefcase:',
        'Suitcase'
    ],
    '🎖️': [
        'Militær Medalje',
        ':military_medal:',
        ':medal:',
        'Medalje',
        'Medallion',
        'MilitÃ¦r dekorasjon'
    ],
    '📿': [
        'Bønder av bønner',
        ':prayer_beads:',
        'Dhikr Bjelker',
        'Rosary regninger'
    ],
    '🎗️': [
        'Påminnelse Ribbo',
        ':reminder_ribbo:'
    ],
    '🤿': [
        'dykking maske',
        ':diving_mask:'
    ],
    '🦺': [
        'Sikkerhet vest',
        ':safety_vest:'
    ],
    '🥻': [
        'Sari',
        ':sari:',
        'SER',
        'Hai'
    ],
    '🩲': [
        'Bakker',
        ':briefs:',
        'Undies',
        'Underwear',
        'Underpants',
        'Jocks',
        'Panties'
    ],
    '🩳': [
        'Kortbukser',
        ':shorts:'
    ],
    '🛼': [
        'Roller skate',
        ':roller_skate:',
        'Innebygd skall',
        'Rullesorter Derby'
    ],
    '🩴': [
        'Flipp Flopp',
        ':flip_flop:',
        'Thong Sandal'
    ],
    '🪖': [
        'Militær hjelm',
        ':military_helmet:'
    ],
    '🩰': [
        'Ballett Sko',
        ':ballet_shoes:',
        'Kjæledyr Sko'
    ],
    '🩼': [
        'Crutch',
        ':crutch:'
    ]
};
/*hands and parts of body*/
emojis_language[lang][12] = {
    '👋{{skin_tone}}': [
        'Bølgende Hånd skilt',
        ':wave:',
        ':waving_hand:',
        'Adjø',
        'Hånd bølge',
        'Hei',
        'Hi'
    ],
    '🖐️{{skin_tone}}': [
        'Hånd med Fingers Splayed',
        ':hand_splayed:',
        ':raised_hand_with_fingers_splayed:',
        ':hand_with_fingers_splayed:',
        'Fem side',
        'Sspilt Hånd',
        'Hånd med hengseler sittet'
    ],
    '🤚{{skin_tone}}': [
        'Hevet bakside av Hånd',
        ':raised_back_of_hand:',
        ':back_of_hand:',
        'Bakhånd'
    ],
    '✋{{skin_tone}}': [
        'Hevet Hånd',
        ':raised_hand:',
        ':hand:',
        'Høy fem',
        'Stopp'
    ],
    '🖖{{skin_tone}}': [
        'Vulcan Salute',
        ':vulcan_salute:',
        'Spock',
        'Stjerne tren',
        'Hendelse med del mellom midterste og ringfrukter'
    ],
    '👌{{skin_tone}}': [
        'OK hånd-signering',
        ':ok_hand:',
        'Ok',
        'Perfekt',
        'Ja'
    ],
    '✌️{{skin_tone}}': [
        'Seier Hand',
        ':victory_hand:',
        'Lufthavn Tilbud',
        'Fred skilt',
        'V Skilt'
    ],
    '🤞{{skin_tone}}': [
        'Krysset fingere',
        ':crossed_fingers:',
        'Fingere krysset',
        'God Lykke',
        'Hånd med indeks og mellomfingere krysset'
    ],
    '🤟{{skin_tone}}': [
        'Lov-Deg Gest',
        ':love_you_gesture:',
        ':i_love_you_hand_sign:',
        'Jeg Elsker Deg Hånd Skilt'
    ],
    '🤘{{skin_tone}}': [
        'Tegn på hornene',
        ':the_horns:',
        ':sign_of_the_horns:',
        ':metal:',
        'Onde fingre',
        'heavy metal',
        'rock på'
    ],
    '🤙{{skin_tone}}': [
        'Ring meg manuelt skilt',
        ':call_me_hand:',
        ':call_me:',
        'Telefon Hånd',
        'Shaka'
    ],
    '🤏{{skin_tone}}': [
        'Rosa side',
        ':pinching_hand:'
    ],
    '👈{{skin_tone}}': [
        'Backhand Indeks Eleksimer Venstre',
        ':backhand_index_pointing_left:',
        ':point_left:',
        'Hvitt venstre Eleksir Bakgrunnsindeks'
    ],
    '👉{{skin_tone}}': [
        'Backhand Indeks Eleksir Høyre',
        ':backhand_index_pointing_right:',
        ':point_right:',
        'Hvitt høyre Eleksir Bakgrunnsindeks'
    ],
    '👆{{skin_tone}}': [
        'Backhand Indeks Eleksir Opp',
        ':point_up_2:',
        ':backhand_index_pointing_up:',
        'Hvit opp Elektrikkeri Bakgrunnsindeks',
        'Midtre Finger'
    ],
    '👇{{skin_tone}}': [
        'Bakoverdepot pot ned',
        ':point_down:',
        ':backhand_index_pointing_down:',
        'Hvit Ned Pointing Backhand Index',
        'Poeng ned'
    ],
    '☝{{skin_tone}}': [
        'Indeks Finger Pointing Opp',
        ':point_up:',
        ':index_pointing_up:',
        'Hvit Opp Pointing Index',
        'Hemmelig'
    ],
    '🖕{{skin_tone}}': [
        'Midtre Finger',
        ':middle_finger:',
        'Flipping The Bird',
        'Fasde Finger',
        'Reversert Hand med Midt-Finger Utvidet'
    ],
    '👍{{skin_tone}}': [
        'Miniatyrbilder opp skilt',
        ':thumbs_up_sign:',
        'Lik',
        'Ja'
    ],
    '👎{{skin_tone}}': [
        'Tommel Ned skilt',
        ':thumbs_down_sign:',
        'Dårlig',
        'Dislike',
        'Nei'
    ],
    '✊{{skin_tone}}': [
        'Hevet Fist',
        ':raised_fist:',
        'Fist Pumpe'
    ],
    '👊{{skin_tone}}': [
        'Kommende Fist',
        ':oncoming_fist:',
        'Bro Fist',
        'Brofist',
        'Fist Bump',
        'Slå',
        'Lukket Fist',
        'Stengt håndskilt'
    ],
    '🤛{{skin_tone}}': [
        'Venstre fjerne pumpe',
        ':left_fist_bump:'
    ],
    '🤜{{skin_tone}}': [
        'Høyre fjerne pumpe',
        ':rightfist:bump:'
    ],
    '🤌{{skin_tone}}': [
        'Hengende fingre',
        ':pinched_fingers:',
        'Ma Che Vuoi',
        'Finger rens'
    ],
    '👏{{skin_tone}}': [
        'Klappe Hånd skilt',
        ':cap:',
        ':clapping_hands:',
        'Brukur',
        'Clap',
        'Klapper',
        'Golf Klapp',
        'Runde av Applause'
    ],
    '🙌{{skin_tone}}': [
        'Person Raising Both Hands in Celebration',
        ':raised_hands:',
        ':raising_hands:',
        'Raising Hands',
        'Armer i Luft',
        'Banzai',
        'Festivus Miracle',
        'Hallelujah',
        'Hyll hengslene',
        'To Hender'
    ],
    '👐{{skin_tone}}': [
        'Åpne Hands skilt',
        ':open_hands_sign:',
        'Gigantisk',
        'Jazz sand'
    ],
    '🤲{{skin_tone}}': [
        'Palmer opp sammen',
        ':palms_up_together:',
        'Dua'
    ],
    '🤝{{skin_tone}}': [
        'Handshake',
        ':handshake:',
        'Riste Hender'
    ],
    '🙏{{skin_tone}}': [
        'Mengder',
        ':folded_hands:',
        'Namaste',
        'Vennligst',
        'Bønn',
        'Tusen takk',
        'Person med Fulgte Hånd'
    ],
    '✍{{skin_tone}}': [
        'Skriving av hånd',
        ':writing_hand:'
    ],
    '🫱{{skin_tone}}': [
        'Høyre Hånd',
        ':rightwards_hand:'
    ],
    '🫲{{skin_tone}}': [
        'Øvre side',
        ':leftwards_hand:'
    ],
    '🫳{{skin_tone}}': [
        'Palm ned hånd',
        ':palm_down_hand:'
    ],
    '🫴{{skin_tone}}': [
        'Palme opp side',
        ':palm_up_hand:'
    ],
    '🫰{{skin_tone}}': [
        'Håndtak med Indeks Finger og Tumb krysset',
        ':hand_with_index_finger_and_thumb_crossed:'
    ],
    '🫵{{skin_tone}}': [
        'Indeks Eleksir på Viseren',
        ':index_pointing_at_the_viewer:'
    ],
    '🫶{{skin_tone}}': [
        'Hjerte sår',
        ':heart_hands:',
        'Kjærlighet'
    ],
    '💪{{skin_tone}}': [
        'Fleksede sokler',
        ':flexed_biceps:',
        'Fleksibel Arm Muskler',
        'Musle',
        'Sterk'
    ],
    '🦵{{skin_tone}}': [
        'Legg',
        ':leg:'
    ],
    '🦶{{skin_tone}}': [
        'Fot',
        ':foot:'
    ],
    '👂{{skin_tone}}': [
        'Øre',
        ':ear:',
        'Ører',
        'Høring',
        'Hører'
    ],
    '👃{{skin_tone}}': [
        'Rosa',
        ':nose:',
        'Smelling',
        'Undersøkelser',
        'Stinky'
    ],
    '🦻{{skin_tone}}': [
        'Øl med hørsels-hjelp',
        ':ear_with_hearing_aid:'
    ],
    '🧠': [
        'Hjerne',
        ':brain:',
        ':pink:'
    ],
    '🦷': [
        'Tannvann',
        ':tooth:',
        ':white:'
    ],
    '👀': [
        'Øyner',
        ':eyes:',
        'Eyeballs',
        'Kvelende øyne',
        'Øde øyne'
    ],
    '👁️': [
        'Øye',
        ':eye:',
        'Enkelt øye'
    ],
    '👅': [
        'Tongue ut',
        ':tongue_out:',
        ':red:'
    ],
    '👄': [
        'Ung',
        ':mouth:',
        'Kysser lepper',
        'Lepper',
        ':red:'
    ],
    '🫦': [
        'Skarp Leppe',
        ':biting_lip:',
        'Lepper',
        ':red:'
    ],
    '🫀': [
        'Anatomisk hjerte',
        ':anatomical_heart:',
        ':red:'
    ],
    '🫁': [
        'Lunger',
        ':lungs:',
        ':red:'
    ],
    '🦾': [
        'Mekanisk Arm',
        ':mechanical_arm:',
        'Sterk',
        ':gray:',
        ':grey:'
    ],
    '🦿': [
        'Mekanisk Legge:',
        ':mechanical_leg:',
        ':gray:',
        ':grey:'
    ],
    '💅{{skin_tone}}': [
        'Polsk negl',
        ':nail_polish:',
        'Fingere',
        'Manicure',
        'Nonchalant'
    ],
    '🤳{{skin_tone}}': [
        'Selfie',
        ':selfie:',
        'Telefon kamera',
        'Selfie side'
    ],
    '🫸{{skin_tone}}': [
        'Rightwards Pushing Hand',
        ':rightwards_pushing_hand:'
    ],
    '🫷{{skin_tone}}': [
        'Leftwards Pushing Hand',
        ':leftwards_pushing_hand:'
    ]
};
/*other*/
emojis_language[lang][13] = {
    '💩': [
        'Haug av Poo',
        ':pile_of_poo:',
        'Hund jord',
        'Smilende bæsj',
        ':brown:'
    ],
    '💋': [
        'Kiss Mark',
        ':kiss_mark:',
        'Kysser lepper',
        ':red:'
    ],
    '🦴': [
        'Bein',
        ':bone:'
    ],
    '🧳': [
        'Bagasje',
        ':luggage:',
        'Suitcase'
    ],
    '🌂': [
        'Lukket Paraply',
        ':closed_umbrella:',
        'Kollapset paraply',
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
        'Paraply med Regndråper',
        ':umbrella_with_rain_drops:',
        ':umbrella:',
        'Regnende',
        'Rainy'
    ],
    '🧵': [
        'Spool fra Tråden',
        ':spool_of_thread:'
    ],
    '🧶': [
        'Ball av Yarn',
        ':ball_of_yarn:'
    ],
    '💄': [
        'Lipstick',
        ':lipstick:',
        'Leppe Gtap',
        'Sminke',
        ':red:'
    ],
    '💍': [
        'Ringing',
        ':ring:',
        'Diamant ring',
        'Engasjement ring'
    ],
    '💎': [
        'Gem stein',
        ':gem_stone:',
        'Diamant',
        'Ekkeflek',
        'Gemstein',
        'Juvel',
        ':blue:'
    ],
    '💥': [
        'Kollision symbol',
        ':collision_symbol:',
        'Engelsk',
        'Eksplodere',
        'Påvirkning',
        'Rød Glitter',
        'Eksplosjon'
    ],
    '💫': [
        'Svimmelhet Symbol',
        ':dizzy_symbol:',
        'Sirkel og stjerne',
        ':yellow:'
    ],
    '💦': [
        'Sprutende geit Symbol',
        'svette_dråper',
        'søat_dråper',
        'Venner',
        'Sprutende vann',
        'Vann slipp',
        ':blue:'
    ],
    '💨': [
        'Streking Borte over',
        ':dashing_away:',
        'Rask',
        'Damp',
        'Vare',
        'Vind',
        'Dash symbol',
        'Støv av vind'
    ],
    '🌬️': [
        'Vind Ansikt',
        ':wind_face:',
        'Brunt vind',
        'Mor natur',
        'Vindglødende ansikt',
        ':white:'
    ],
    '🐾': [
        'Paw Printer',
        ':paw_prints:',
        'Katt Tegneserier',
        'Hund Paw Skrifter',
        'Kitten Paw Skrifter',
        'Utskrifter av valper'
    ],
    '🕸️': [
        'Edderkopp Web',
        ':spider_web:',
        'Spindelvev',
        'Nett',
        'Spiderweb'
    ],
    '🦠': [
        'Mikrobe',
        ':microbe:',
        'Celle',
        'Koronavirus',
        'COVID-19',
        'Bakgrunn',
        'Mikroorganisme',
        'Viruset',
        ':green:'
    ],
    '💐': [
        'Blått av blomster',
        ':bouquet_of_flowers:'
    ],
    '🌍': [
        'Vis Europa-Afrika',
        ':globe_showing_europe_africa:',
        ':earth_africa:',
        'Jorden',
        'Hule',
        'Planet',
        'Verden',
        'Viser Europa og Afrika',
        ':blue:'
    ],
    '🌎': [
        'Globe viser Amerika',
        ':globe_showing_americas:',
        ':earth_americas:',
        'Jorden',
        'Hule',
        'Planet',
        'Verden',
        ':blue:'
    ],
    '🌏': [
        'Hviterussland regner Asia-Australia',
        ':globe_showing_asia_australia:',
        ':earth_asia:',
        'Jorden',
        'Hule',
        'Planet',
        'Verden',
        'Viser Asia og Australia',
        ':blue:'
    ],
    '🌐': [
        'Hvitløkke med titalls',
        ':globe_with_meridians:',
        'Internett',
        'Verdensbredd Web',
        'VVS'
    ],
    '🌑': [
        'Ny måne-symbol',
        ':new_moon:',
        'Mørk måne',
        'Skygge måne',
        'Solenergi Eclipse',
        ':black:'
    ],
    '🌒': [
        'Voksende halvmåne med moon Symbol',
        ':waxing_crescent_moon:',
        ':yellow:',
        ':black:'
    ],
    '🌓': [
        'Første kvartal måne symbol',
        ':first_quarter_moon:',
        ':yellow:',
        ':black:'
    ],
    '🌔': [
        'Voksende trekvartmåne symbol',
        ':moon:',
        ':waxing_gibbous_moon:',
        ':yellow:',
        ':black:'
    ],
    '🌕': [
        'Full måne-symbol',
        ':full_moon:',
        ':yellow:'
    ],
    '🌖': [
        'Avtagende romvesener med måne-symbol',
        ':waning_gibbous_moon:',
        ':yellow:',
        ':black:'
    ],
    '🌗': [
        'Siste kvartal måne symbol',
        ':last_quarter_moon:',
        ':yellow:',
        ':black:'
    ],
    '🌘': [
        'Avtagende halvmåne Symbol',
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
        'Ny mÃ¥ne med Face',
        ':new_moon_with_face:',
        'Skumle måne',
        'Mørk mÃ¥ne Ansikt',
        'Molester måne',
        ':black:',
        ':gray:',
        ':grey:'
    ],
    '🌝': [
        'Full mÃ¥ne med Face',
        ':full_moon_with_face:',
        'Moonface',
        'Smilefjes måne',
        'Smør måne',
        ':yellow:'
    ],
    '🌛': [
        'Første kvartal måne med Face',
        ':first_quarter_moon_with_face:',
        ':first_quarter_moon_face:',
        ':yellow:'
    ],
    '🌜': [
        'Siste kvartal måne med Face',
        ':last_quarter_moon_with_face:',
        ':last_quarter_moon_face:',
        ':yellow:'
    ],
    '🌞': [
        'Søn med Ansikt',
        ':sun_with_face:',
        'Smilefjes',
        'Sunface',
        'Smilende søn',
        ':yellow:'
    ],
    '☀️': [
        'Søn',
        ':sun:',
        'Solskinne',
        ':yellow:'
    ],
    '⭐': [
        'Stjerne',
        ':star:',
        'Hvit Medium Stjerne',
        ':yellow:'
    ],
    '🌟': [
        'Glød stjerne',
        ':glowing_star:',
        'Shining Stjerne',
        ':yellow:'
    ],
    '☁️': [
        'Sky',
        ':cloud:',
        'Overskyet',
        'Overskyet',
        ':white:'
    ],
    '⛅': [
        'Solen bak skyen',
        ':thunder_cloud_and_rain:',
        ':thunder_cloud_rain:',
        ':cloud_with_lightning_and_rain:',
        ':white:'
    ],
    '⛈️': [
        'Sky med lys og regn',
        ':thunder_cloud_and_rain:',
        ':thunder_cloud_rain:',
        ':cloud_with_lightning_and_rain:',
        'Thunder Cloud and Regn',
        ':white:'
    ],
    '🌤️': [
        'Hvit Solen med liten Sky',
        ':mostly_sunny:',
        ':sun_behind_small_cloud:',
        ':sun_small_cloud:',
        ':white_sun_small_cloud:',
        ':white_sun_with_small_cloud:',
        ':white:'
    ],
    '🌥️': [
        'Solen Bak Stor Sky',
        ':sun_behind_large_cloud:',
        'Hvitt Solen Bak Sky',
        ':white:'
    ],
    '🌦️': [
        'Hvitt Solen bak til Skyen med regn',
        ':sun_behind_rain_cloud:',
        ':partly_sunny_rain:',
        ':white_sun_rain_cloud:',
        ':white_sun_behind_cloud_with_rain:',
        ':white:'
    ],
    '🌧️': [
        'Sky med regn',
        ':cloud_with_rain:',
        ':white:'
    ],
    '🌨️': [
        'Sky med snø',
        ':cloud_with_snow:',
        ':white:'
    ],
    '🌩️': [
        'Sky med lyn',
        ':cloud_with_lightning:',
        ':white:'
    ],
    '🌪️': [
        'Tornado',
        ':tornado:',
        'Sky med Tornado'
    ],
    '🌫️': [
        'Fog',
        ':fag:',
        ':white:',
        ':gray:',
        ':grey:'
    ],
    '🌈': [
        'Regnbue',
        ':rainbow:',
        'Gay Pride',
        'Primær regnbue',
        'LGBTQIA+',
        'LGBT+'
    ],
    '❄️': [
        'Snøfnugg',
        ':snowflake:',
        'Snø',
        'Snør',
        ':white:'
    ],
    '🌀': [
        'Syklon',
        ':cyclone:',
        'Orkan',
        'Spiral',
        'Rotér',
        'Tornado'
    ],
    '⚡': [
        'Høyt spenningsskilt',
        ':high_voltage_sign:',
        'Lyn Lyst',
        'Tordenvær',
        'Høy spenning'
    ],
    '☃️': [
        'Snømann',
        ':snowman:',
        'Snømann Med Snowflakes',
        ':white:'
    ],
    '⛄': [
        'Snømann uten snø',
        'snø_ninne_snø',
        ':snowman:',
        'Frossen Snømann',
        'Olaf',
        'Snømann',
        ':white:'
    ],
    '☄️': [
        'Komet',
        ':comet:'
    ],
    '🔥': [
        'Ild',
        ':fire:',
        'Flamme',
        'Varmt',
        'Lit',
        'Snapstreak',
        ':red:'
    ],
    '💧': [
        'Droplet',
        ':droplet:',
        'Vann',
        'Senere vann fall',
        ':blue:'
    ],
    '✨': [
        'Glitter',
        ':sparkles:',
        'Glitter',
        'Shiny',
        'Ny'
    ],
    '🌊': [
        'Vann bølge',
        ':water_wave:',
        'Strand',
        'Hav bølge',
        'Hav',
        ':blue:'
    ],
    '🎄': [
        'Jule tre',
        'christmas_tre',
        'Julestemning',
        'Jule tre',
        ':green:'
    ],
    '🎃': [
        'Jack-O-Lantern',
        'jakk_lanterne',
        'Halloween',
        'Gresskar',
        ':orange:'
    ],
    '🌻': [
        'Solsikke',
        ':sunflower:',
        'Gul blomst',
        ':yellow:'
    ],
    '🌼': [
        'Blossom',
        ':blossom:',
        'Blomster Blomst',
        'Daisy',
        'Gul blomst',
        ':yellow:'
    ],
    '🌷': [
        'Tulip',
        ':tulip:',
        ':pink:'
    ],
    '🌹': [
        'Rose blomst',
        ':rose_flower:',
        'Røde roser',
        ':red:'
    ],
    '☘️': [
        'Samstein',
        ':shamrock:',
        'Kløver',
        'Trefoil',
        ':green:'
    ],
    '🍀': [
        'Fire blafokker',
        ':four_leaf_clover:',
        'Kløver',
        'Irland',
        'Heldig',
        'Formue',
        ':green:'
    ],
    '🌸': [
        'Cherry Blossom',
        ':cherry_blossom:',
        'Rosa blomst',
        'Sakura',
        ':pink:'
    ],
    '💮': [
        'Hvit blomst',
        ':white_flower:',
        'Cherry Blossom',
        'Papir oljeholdig',
        'Godt ferdig stempel',
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
        'frøplante',
        ':seedling:',
        'Våren',
        'Sprout',
        'Herding',
        ':green:'
    ],
    '🌲': [
        'Eviggrønn tre',
        ':evergreen_tree:',
        'Sirk tre',
        'Furu tre',
        ':green:'
    ],
    '🌳': [
        'Dekorasjons tre',
        ':deciduous_tree:',
        'Avrundet tre',
        ':green:'
    ],
    '🌴': [
        'Palme tre',
        ':palm_tree:',
        'Kokosnøtt tre',
        ':green:'
    ],
    '🎋': [
        'Tanabata tre',
        ':tanabata_tree:',
        'Tanabata',
        'Ønsk tre'
    ],
    '🎍': [
        'Furu dekorasjon',
        ':pine_decoration:',
        'Bambus',
        'Kadomatsu',
        'Ny år dekorasjon'
    ],
    '🌵': [
        'Cactus',
        ':cactus:',
        'Desert',
        ':green:'
    ],
    '🌾': [
        'Sau av ris',
        ':sheaf_of_rice:',
        'Beskjær',
        'Jordbruk',
        'Hvete',
        'Øren av ris'
    ],
    '🌿': [
        'Urt',
        ':herb:',
        'Beskjær',
        'Plante',
        ':green:'
    ],
    '🍁': [
        'LÃ¸nn blad',
        ':maple_leaf:',
        'Kanada',
        'Kanadisk',
        'LÃ¸nn',
        ':brown:'
    ],
    '🍂': [
        'Beseiret blad',
        ':fallen_leaf:',
        'Høstflate',
        'Løper fra hÃ¸ster',
        'Brun blader',
        'Fall blader',
        'Beseiret blader',
        ':brown:'
    ],
    '🍃': [
        'Løve fløytring inn vind',
        ':leaf_fluttering_in_wind:',
        ':leaves:',
        'Grønne løv',
        'Våren',
        ':green:'
    ],
    '🪴': [
        'Pottet plante',
        ':potted_plant:',
        ':green:'
    ],
    '🪸': [
        'Korall',
        ':coral:',
        'Endring i klima'
    ],
    '🪷': [
        'Lotus',
        ':lotus:',
        'Purity',
        'Skjønnhet',
        'Retthet',
        'Serenitet'
    ],
    '🪻': [
        'Hyacinth',
        ':hyacinth:',
        'Purple flower',
        ':purple:'
    ],
    '🫛': [
        'Pea Pod',
        ':pea_pod:',
        ':green:'
    ],
    '🫚': [
        'Ginger root',
        ':ginger:',
        'Spice',
        'Flavour',
        ':brown:'
    ],
    '🔑': [
        'Nøkkel',
        ':key:',
        'Gull nøkkel',
        ':gold:',
        ':yellow:'
    ],
    '🗝️': [
        'Gammel nøkkel',
        ':old_key:',
        ':brown:'
    ],
    '🔨': [
        'Hammer',
        ':hammer:',
        'Lov hammer',
        'Handyman',
        'Verktøy'
    ],
    '⛏️': [
        'Velg',
        ':pick:',
        'Hakke'
    ],
    '🪓': [
        'Øks',
        ':axe:',
        'brannvesen'
    ],
    '🪚': [
        'Carpentry enr',
        ':carpentry_saw:'
    ],
    '🪛': [
        'Skruesjør',
        ':screwdriver:'
    ],
    '🪝': [
        'Knagg',
        ':hook:'
    ],
    '🪠': [
        'Plunger',
        ':plunger:'
    ],
    '🪣': [
        'Bøtte',
        ':bucket:'
    ],
    '🔩': [
        'Nut og bolt',
        ':nut_and_bolt:',
        'Skrue',
        'Skru',
        ':gray:',
        ':grey:'
    ],
    '🗜️': [
        'Skvis',
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
        'Lukket lås',
        'Stiftelås'
    ],
    '🔓': [
        'Opplåst',
        ':unlocked:',
        'Åpne hengelås',
        'Åpne lås'
    ],
    '🔏': [
        'Låst med penn',
        ':locked_with_pen:',
        'Lås og penn',
        'Lås med pennen',
        'Lås med blekk penn'
    ],
    '🔐': [
        'Låst med nøkkel',
        ':locked_with_key:',
        'Lukket lås med nøkkel'
    ],
    '🗡️': [
        'Dagger',
        ':dagger:',
        'Kniv våpen',
        ':gray:',
        ':grey:'
    ],
    '⚔️': [
        'Krysset sverd',
        ':crossed_swords:',
        ':gray:',
        ':grey:'
    ],
    '🔫': [
        'Pistol',
        ':pistol:',
        'Pistol',
        'Revolver',
        'Kvadrat pistol',
        'Vann pistol',
        'Vann Pistol'
    ],
    '🧰': [
        'Verktøykasse',
        ':toolbox:',
        ':red:'
    ],
    '🧲': [
        'Magnet',
        ':magnet:',
        ':red:'
    ],
    '💉': [
        'Syringe',
        ':syringe:',
        'Blod donasjon',
        'Blodprøve',
        'Kanyle',
        'Vaksinasjon',
        'blod',
        'syk',
        'ill'
    ],
    '🧬': [
        'DNA',
        ':dna:',
        'Dobbelt DNA-helix'
    ],
    '🧪': [
        'Testrør',
        ':test_tube:',
        ':green:'
    ],
    '🛏️': [
        'Seng',
        ':bed:',
        'Soverom'
    ],
    '🛋️': [
        'Sofa og lampe',
        ':couch_and_lamp:',
        'Salong',
        'Innstilling',
        'Sofa'
    ],
    '🪑': [
        'Stol',
        ':chair:'
    ],
    '🚪': [
        'Dør',
        ':door:',
        'Døråpning',
        'Front Dør'
    ],
    '🪟': [
        'Vindu',
        ':window:'
    ],
    '🪜': [
        'Stige',
        ':ladder:'
    ],
    '🪞': [
        'Speil',
        ':mirror:'
    ],
    '🚽': [
        'Toalett',
        ':toilet:',
        'Bad',
        'Loo',
        'Restom',
        'WK',
        ':white:'
    ],
    '🚿': [
        'Dusj',
        ':shower:',
        'Dusj hodet',
        ':shower:'
    ],
    '🛁': [
        'Badekar',
        ':bathtub:',
        'Boble statte',
        ':shower:'
    ],
    '🧴': [
        'Løs flaske',
        ':location_bottle:'
    ],
    '🧷': [
        'Sikkerhet Pin',
        ':safety_pin:',
        ':gray:',
        ':grey:'
    ],
    '🧺': [
        'Kurv',
        ':basket:',
        ':brown:'
    ],
    '🧻': [
        'Papir rulle',
        ':roll_of_paper:',
        'Toalettpapir',
        ':white:'
    ],
    '🧼': [
        'Såpestøyle for såpe',
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
        'Flammekuber',
        ':fire_extinguisher:',
        ':red:'
    ],
    '🚬': [
        'Sigarett',
        ':cigarette:',
        'Røykens symbol'
    ],
    '⚰️': [
        'Kiste',
        ':coffin:',
        'Casket',
        'Begravelse',
        ':brown:'
    ],
    '⚱️': [
        'Begravelse Urn',
        ':funeral_urn:',
        'Vase'
    ],
    '🛡️': [
        'Skjold',
        ':shield:'
    ],
    '⚙️': [
        'Tannhjul',
        ':gear:',
        'Innstillinger',
        'Alternativer',
        ':gray:',
        ':grey:'
    ],
    '⚖️': [
        'Balanse skala',
        ':balance_scale:',
        'Rettferdighetsskalaene'
    ],
    '⛓️': [
        'Kjettinger',
        ':chains:'
    ],
    '🔗': [
        'Lenke',
        ':link:',
        'Kjede',
        'Hyperkobling',
        'Sammenlenket kjede',
        ':gray:',
        ':grey:'
    ],
    '⛓️‍💥': [
        'Broken chain',
        ':broken_chain:',
        'Chain',
        'Hyperlink',
        'Linked Chain',
        'Unlinked chain',
        ':gray:',
        ':grey:'
    ],
    '💀': [
        'Hodeskalle',
        ':skull:',
        'Død',
        'Grått hodeskalle',
        'Skjelett',
        ':white:'
    ],
    '☠️': [
        'Skrog og kryssende bein',
        ':skull_and_crossbones:',
        ':white:'
    ],
    '🎡': [
        'Ferris Hjul',
        ':ferris_wheel:',
        'Stort hjul',
        'Fairgroundl',
        'Observasjons hjul'
    ],
    '⛽': [
        'Drivstoff Pumpe',
        'fuel_pump:',
        'Olje',
        'Drivstoff',
        'Gass',
        ':red:'
    ],
    '🚨': [
        'Police Cars Revolving Light',
        ':rotating_light:',
        ':police_police_car:',
        'Nødvendig lys',
        'Lommelykt Lys',
        'Siren',
        ':red:'
    ],
    '🚥': [
        'Vannrett trafikklys',
        ':horizontal_traffic_light:',
        ':green:',
        ':red:',
        ':yellow:',
        ':orange:'
    ],
    '🚦': [
        'Vertikalt trafikklys',
        ':vertical_traffic_light:',
        ':green:',
        ':red:',
        ':yellow:',
        ':orange:'
    ],
    '⚓': [
        'Avidviddom Mønster Anchor',
        ':anchor:',
        'Fisker'
    ],
    '🚧': [
        'Konstruksjonsskilt skilt',
        ':construction_sign:',
        'Svart og gul stripet skilt',
        ':yellow:',
        ':black:'
    ],
    '🪂': [
        'Parachute',
        ':parachute:'
    ],
    '💺': [
        'Sete',
        ':seat:',
        'Bus fly fly fly'
    ],
    '🪐': [
        'Metn',
        ':saturn:'
    ],
    '🎆': [
        'Fyrverkeri',
        ':fireworks:',
        'Eksplosjon'
    ],
    '🎇': [
        'Senko Hanabi',
        ':senko_hanabi:',
        'Fyrverkeri Glaser'
    ],
    '💷': [
        'Pund Banknote',
        ':pound:',
        ':pound_banknote:',
        '500.20 merknad',
        'Tjuende Quid notat',
        'Banknotat med pund skilt',
        ':purple:'
    ],
    '💶': [
        'Euro Banknote',
        ':euro:',
        ':euro_banknote:',
        '10000 notat',
        'Banknotat med Euro skilt',
        ':blue:'
    ],
    '💵': [
        'Dollar Banknotat',
        ':dollar:',
        ':dollar_banknote:',
        '$1 notat',
        'Banknotat med Dollar skilt',
        'Dollar Bill',
        'Amerikansk Dollar',
        ':green:'
    ],
    '💴': [
        'Jen Banknote',
        ':yen:',
        ':yen_banknote:',
        'ε1000 notat',
        'Jen notat',
        'Banknotat med Jen skilt',
        ':yellow:'
    ],
    '⛺': [
        'Camping Tent',
        ':camping_tent:'
    ],
    '⛲': [
        'Fontene',
        ':fountain:',
        'Vann Funksjon',
        'Vannbeslag',
        'Park'
    ],
    '💰': [
        'Penger sekk',
        ':money_bag:',
        'Moneyboser',
        'Velstående',
        '$'
    ],
    '💸': [
        'Penger med vinger',
        ':money_with_wings:',
        'Flyvende Penger',
        ' Taper penger'
    ],
    '🏷️': [
        'Etikett',
        ':label_tag:'
    ],
    '🔖': [
        'Bokmerke',
        ':bookmark:',
        'Pris merke',
        'Tagg'
    ],
    '📑': [
        'Bokmerke faner',
        ':bookmark_tabs:',
        ':white:'
    ],
    '📯': [
        'Postale horn',
        ':postal_horn:',
        'Bugle',
        'Fransk Horn'
    ],
    '🪁': [
        'Drage',
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
        'Fest popper',
        ':party_popper:',
        'Feiring',
        'Fest hatt'
    ],
    '🎈': [
        'Ballong',
        ':balloon:',
        'Fest',
        'Rød ballong',
        ':red:'
    ],
    '🌡️': [
        'Termometer',
        ':thermometer:',
        'Varmt vær',
        'Temperatur',
        ':red:'
    ],
    '🛢️': [
        'Olje Trommel',
        ':oil_drum:'
    ],
    '💣': [
        'Bombe',
        ':bomb:',
        'kranarm'
    ],
    '🔪': [
        'Kjøkken Kniv',
        ':kitchen_knife:',
        'Kniv',
        'Bueskytter Kniv',
        'Hocho'
    ],
    '🏺': [
        'Amphora',
        ':amphora:',
        'Krukke',
        'Vase'
    ],
    '🗺️': [
        'Verden Kart',
        ':world_map:'
    ],
    '🎼': [
        'Musikalsk Poeng',
        ':musical_score:',
        'Armatsk musikk',
        'Treble Clef'
    ],
    '🎬': [
        'Clapper Board',
        ':clapper_board:',
        'Klipp',
        'Handling',
        'Regissør',
        'Film Skate'
    ],
    '🎻': [
        'Trompet',
        ':violin:',
        'Streng kvartær',
        'Verdener Minste Fiollin'
    ],
    '🎺': [
        'Trompet',
        ':trumpet:',
        'Horn',
        'jazz'
    ],
    '🎸': [
        'Gitar',
        ':guitar:',
        'Akustisk gitar',
        'Bass gitar',
        'Elektrisk gitar'
    ],
    '🎷': [
        'Saksofon',
        ':saxophone:',
        'jazz',
        'Saks'
    ],
    '🥁': [
        'Tromme',
        ':drum:',
        'Tromme med pinner'
    ],
    '🎹': [
        'Klaver',
        ':piano:',
        'Musikalsk Keyboard',
        ':white:',
        ':black:'
    ],
    '🪕': [
        'Bandjo',
        ':banjo:'
    ],
    '🪗': [
        'Trekkspill',
        ':accordion:'
    ],
    '🪘': [
        'Lang Trommel',
        ':long_drum:'
    ],
    '🎨': [
        'Kunstner Palett',
        ':artist_palette:',
        'Kunst',
        'Maling'
    ],
    '🧩': [
        'Oppgave deler',
        ':puzzle_piece:',
        'Jigsaw puslespill stykke',
        ':green:'
    ],
    '🎲': [
        'Spill die',
        ':game_die:',
        'Terning',
        ':white:'
    ],
    '🎭': [
        'Utøvende kunst',
        'utfør_bukser',
        'Teater',
        'Teater',
        'Drama masker',
        'Gresk Teater Masker',
        'Tragedy og Comedy Maler',
        'Venedig'
    ],
    '🔍': [
        'Forstørret glass flislagt venstre',
        ':mag:',
        ':magnifying_glass_tilted_left:',
        'Magnifier',
        'Søk i Ikon',
        'VenstrePointing Magnifying Glass',
        'Finn',
        ':transparent:'
    ],
    '🔎': [
        'Forstørr Glass Flistert Høyre',
        ':mag_right:',
        ':magnifying_glass_tilted_right:',
        'Magnifier',
        'Søk i Ikon',
        'Høyre-Pointing Magnifying Glass',
        'Finn',
        ':transparent:'
    ],
    '⌛': [
        'Timeglass ferdig',
        ':hourglass:',
        ':hourglass_done:',
        'Timeglass',
        'Time',
        'Egg timer',
        'Empty',
        'Ended',
        'Finished',
        'Sand Clock'
    ],
    '⏳': [
        'Timeglass ikke ferdig',
        ':hourglass_flowing_sand:',
        ':hourglass_not_done:',
        'Fjellglass med flytende sand',
        'Busy',
        'Time',
        'Egg timer',
        'Flowing',
        'Sand Clock'
    ],
    '🕐': [
        'En OKlokke',
        ':clock1:',
        ':one_oclock:',
        'Klokke Ansikt Én OClock',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕜': [
        'Klokke Ansikt En-Tretti',
        ':clock130:',
        ':one_thirty:',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕑': [
        'To klokka',
        ':clock2:',
        ':two_oclock:',
        'Klokke Ansikt to OClock',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕝': [
        'Klokke Ansikt to tretti',
        ':clock230:',
        ':two_thirty:',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕒': [
        'Tre klokka',
        ':clock3:',
        ':three_oclock:',
        'Klokke Ansikt Tre OClock',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕞': [
        'Klokke Ansikt-Treten-Tretti',
        ':clock330:',
        ':three_thirty:',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕓': [
        'Fire klokka',
        ':clock4:',
        ':four_oclock:',
        'Klokke Ansikt Fire OClock',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕟': [
        'Klokke Ansikt –30',
        ':clock430:',
        ':four_thirty:',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕔': [
        'Fem Oklokke',
        ':clock5:',
        ':five_oclock:',
        'Klokke Ansikt Fem Oklokke',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕠': [
        'Klokke Ansikt Trettsighet',
        ':clock530:',
        ':five_thirty:',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕕': [
        'Seks OClock',
        ':clock6:',
        ':size_oclock:',
        'Klokke Ansikt Seks OClock',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕡': [
        'Klokke Ansikt Sjix-Thirty',
        ':clock630:',
        ':six_thirty:',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕖': [
        'Syv OKlokke',
        ':clock7:',
        ':seven_oclock:',
        'Klokke Ansikt Syv OClock',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕢': [
        'Klokke Ansikts Kjeven-Tretti',
        ':clock730:',
        ':sever_thirty:',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕗': [
        'Åtte klokka',
        ':clock8:',
        ':eight_oclock:',
        'Klokke Ansikt Åtte OClock',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕣': [
        'Klokke Ansikt Eight-Thirty',
        ':clock830:',
        ':eight_thirty:',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕘': [
        'Ni OClock',
        ':clock9:',
        ':nine_clock:',
        'Klokke Ansikt Oklokke',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕤': [
        'Klokke Ansikt ine-Tretti',
        ':clock930:',
        ':nine_thirty:',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕙': [
        'Ti OClock',
        ':clock10:',
        ':ten_oclock:',
        'Klokke Ansikt Ti OClock',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕥': [
        'Klokke Ansikt Ten-tretti',
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
        'Klokke Ansikt Eleven OClock',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕦': [
        'Klokke ansikt Eleven-tretti',
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
        'Klokke Ansikt Tolv OClock',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕧': [
        'Klokke Ansikt 12-tretti',
        ':clock1230:',
        ':twelve_thirty:',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '♨️': [
        'Populære kilder',
        ':hot_springs:',
        'Onsen',
        'Damp',
        ':red:'
    ],
    '💈': [
        'Barberpol',
        ':barber_pole:',
        'Barber Butikk',
        'Barbere striper',
        'Hårfrisør',
        ':blue:',
        ':red:'
    ],
    '🎪': [
        'Sirkus telt',
        ':circus_tent:',
        'Stor topp',
        'Sirkus'
    ],
    '💢': [
        'Anger symbol',
        ':anger_symbol:',
        'Sinne skilt',
        'Vein Pop',
        ':red:'
    ],
    '🗯️': [
        'Høyre Sinne boble',
        ':right_anger_bubble:',
        ':anger_right:',
        'Zig Zag Bubble',
        'Sint tale boble',
        ':white:'
    ],
    '🗨️': [
        'Venstre tale boble',
        ':left_speech_bubble:',
        ':speech_left:'
    ],
    '💊': [
        'Pill',
        ':pill:',
        'Kapsel',
        'Nettbrett',
        'Narkotika',
        'Syk',
        'ill',
        ':yellow:',
        ':red:'
    ],
    '🎎': [
        'Dukker',
        ':dolls:',
        'Hinamatsuri',
        'Imperiale Doller',
        'Japanske Doller'
    ],
    '🎏': [
        'Carp Streamer',
        ':carp_streamer:',
        'Fiskeslag',
        'Koinobori',
        'Vindsokker'
    ],
    '🎐': [
        'Vindsjime',
        ':wind_chime:',
        'Furin',
        'Manet',
        'Vindklokke'
    ],
    '🎀': [
        'Bånd bue',
        ':ribbon_bow:',
        'Rosa bue',
        'Bue',
        ':pink:'
    ],
    '🎁': [
        'Pakket gave',
        ':wrapped_gift:',
        'Bursdag tilstede',
        'Jule gave',
        'Gave',
        'Gave Boks',
        'Gave',
        'Pakket frem'
    ],
    '🎫': [
        'Billett',
        ':ticket:',
        'saks stein',
        'Globale gjennomgang billett'
    ],
    '🃏': [
        'Bein',
        ':joker:',
        'Joker kort',
        'Svart Joker for avspilling'
    ],
    '💡': [
        'Lys lyspære',
        ':light_bulb:',
        'Idé',
        'Elektrisk lyspære'
    ],
    '🔦': [
        'Lommelykt',
        ':flashlight:',
        'Lommelykt',
        'Elektrisk fakkel'
    ],
    '🏮': [
        'Rød papir lanterne',
        ':izakaya_lantern:',
        ':lantern:',
        ':red_paper_lantern:',
        'Asiatisk lanterne',
        'Japansk lanterne',
        'Rødt lanterne',
        'Izakaya Lantern',
        ':red:'
    ],
    '📦': [
        'Pakke',
        ':package:',
        'Boks',
        'Pakke',
        ':brown:'
    ],
    '📇': [
        'Indeks kort',
        ':card_index:',
        'Rullodex',
        'System kort',
        'Kort indeks'
    ],
    '🕳️': [
        'Hull',
        ':hole:',
        ':black:'
    ],
    '👁️‍🗨️': [
        'I Am A Witness',
        ':eye_in_speech_bubble:',
        ':eye_speech_bubble:',
        ':eye-in-speech-bubble:',
        'Øye i talekobble'
    ],
    '⚜️': [
        'Fleur-de-lis',
        ':fleur_de_lis:',
        'Speidere',
        'New Orleans Maling'
    ],
    '⚗️': [
        'Alembic',
        ':alembic:'
    ],
    '🕯️': [
        'Lys',
        ':candle:',
        ':white:'
    ],
    '🖼️': [
        'Innrammet bilde',
        ':framed_picture:',
        'Maling',
        'Bilde Ramme',
        'Ramme med bilde'
    ],
    '🛍️': [
        'Handlekurver',
        ':shopping_bags:'
    ],
    '🛒': [
        'Handlekurv',
        ':shopping_cart:',
        'Handlingskapult',
        ':shopping_trolley:',
        ':gray:',
        ':grey:',
        'Market'
    ],
    '🎟️': [
        'Adgang saker',
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
        'Kvittering',
        ':receipt:',
        ':white:',
        'Bill'
    ],
    '🧮': [
        'Abacus',
        ':abacus:'
    ],
    '🧫': [
        'Petri Dish',
        ':petri_dish:'
    ],
    '🧹': [
        'Kost',
        ':broom:',
        'Pensel',
        'Sveip',
        ':yellow:',
        'Tidy',
        'Clean'
    ],
    '🎰': [
        'Spor Maskin',
        ':slot_machine:',
        'Kasino',
        'Frukt Maskin',
        'Pengespill',
        'Poker maskin'
    ],
    '🦽': [
        'Manuell rullestol',
        ':manual_wheelchair:',
        ':wheelchair:',
        'invalid',
        'disability',
        'accessibility',
        'mobility'
    ],
    '🦼': [
        'Motorisert rullestol',
        ':motorized_wheelchair:',
        ':wheelchair:',
        'invalid',
        'disability',
        'accessibility',
        'mobility'
    ],
    '🪔': [
        'Diya Lampe',
        ':diya_lamp:'
    ],
    '🦯': [
        'White Cane',
        ':whie_cane:'
    ],
    '🩸': [
        'Fallende blod',
        ':drop_of_blood:',
        ':red:'
    ],
    '🩹': [
        'Selvklebende bandasje',
        ':adhesive_bandage:'
    ],
    '🩺': [
        'Stetioskop',
        ':stethoscope:'
    ],
    '🪶': [
        'Fjær',
        ':feather:',
        'Animal'
    ],
    '🪤': [
        'Mus felle',
        ':mouse_trap:'
    ],
    '🫖': [
        'Teapot',
        ':teapot:'
    ],
    '🪨': [
        'rock',
        ':rock:',
        ':gray:',
        ':grey:'
    ],
    '🪵': [
        'Tre',
        ':wood:',
        ':brown:'
    ],
    '🪄': [
        'Magisk tryllestav',
        ':magin_wand:'
    ],
    '🔮': [
        'Krystall Ball',
        ':crystal_ball:',
        'Clairvoyant',
        'Lykke Teller',
        'Psykisk',
        'Lilla krystall',
        ':purple:'
    ],
    '🪅': [
        'Pinso-ata',
        ':pinata:',
        ':piñata:'
    ],
    '🪆': [
        'Hengende Doller',
        ':nesting_dolls:',
        'Matryoshka'
    ],
    '🪡': [
        'Litt kanyle',
        ':swing_needle:'
    ],
    '🪢': [
        'Knop',
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
        'Tannbørste',
        ':toothbrush:'
    ],
    '🪦': [
        'Hodestein',
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
        'Krukke',
        ':jar:',
        ':transparent:'
    ],
    '🛞': [
        'Hjul',
        ':wheel:',
        'Kjøretøy',
        'Biler',
        ':black:'
    ],
    '🛟': [
        'Ring bøye',
        ':ring_buoy:',
        'Life Preserver',
        'Livet ring',
        'Båter',
        'Sikkerhet',
        'Vann',
        'Livsopphold',
        ':red:',
        ':white:'
    ],
    '🪬': [
        'Hamsa',
        ':hamsa:',
        'Islam',
        'Jødedom',
        'Buddhism',
        'Kristendom',
        'Religioner',
        'Flaks',
        'Beskyttelse',
        'Guiding',
        'Feminin Power',
        'Tro',
        ':blue:'
    ],
    '🪩': [
        'Speil Ball',
        ':mirror_ball:',
        'Disco Ball'
    ],
    '🪫': [
        'Lavt batterinivå',
        ':low_battery:',
        ':red:',
        'Energi',
        'Rød',
        'Device',
        'Smartphone',
        'Computer',
        'Console'
    ],
    '🩻': [
        'X-Ray',
        ':x_ray:',
        ':x-ray:',
        ':blue:'
    ],
    '🫧': [
        'Bobler',
        ':bubbles:',
        'Såpe Billetter',
        'Karbonatisering',
        'Effervescent Personlighet',
        ':transparent:'
    ],
    '🪪': [
        'Identifikasjons kort',
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
        'Ondt Øye',
        ':blue:'
    ],
    '🧸': [
        'Teddikete bjørn',
        ':teddy_bear:',
        'Leketøy',
        ':brown:',
        'Baby',
        'Child',
        'Children'
    ],
    '🪽': [
        'Wing',
        ':wing:',
        'Fly',
        ':white:'
    ],
    '🪭': [
        'Folding Hand Fan',
        ':folding_hand_fan:',
        'Fan',
        'Manual fan',
        'Summer',
        ':red:'
    ],
    '🪮': [
        'Hair Pick',
        ':hair_pick:',
        'Black culture',
        'Black pride',
        ':black:'
    ],
    '🪈': [
        'Flute',
        ':flute:',
        'Plastic flute',
        'Metal plute',
        'Bamboo flute',
        'Musical instrument',
        ':brown:'
    ],
    '🪇': [
        'Maracas',
        ':maracas:'
    ]
};