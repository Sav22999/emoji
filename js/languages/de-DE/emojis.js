// descriptions took from Emojipedia.org
lang = 'de';
//use i18n language code of the browser, more details: https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/i18n/LanguageCode
titles_language[lang] = {
    '🔍': 'Ergebnisse',
    '🕒': 'Meist verwendete Emojis',
    '😀': 'Smileys',
    '🙋': 'Personen',
    '🦊': 'Tiere',
    '🅰️': 'Symbole',
    '🍎': 'Essen und Getränke',
    '🏳️‍🌈': 'Flaggen',
    '🏊': 'Sport',
    '✈️': 'Reisen und Orte',
    '🖱️': 'Technologien und Büro',
    '👗': 'Kleidung und Accessoires',
    '🖐️': 'Hände und Körperteile',
    '🛎️': 'Anderes'
};
emojis_language[lang] = [];
/*search*/
emojis_language[lang][0] = {};
/*smileys*/
emojis_language[lang][2] = {
    '😀': [
        'Grinsendes Gesicht',
        ':grinning:',
        ':grinning_face:',
        '::):',
        'Glückliches Gesicht',
        'Smiley-Gesicht'
    ],
    '😃': [
        'Grinsendes Gesicht mit großen Augen',
        ':smiley:',
        ':grinning_face_with_big_eyes:',
        '::D:',
        'Glückliches Gesicht',
        'Smiley-Gesicht',
        'Lächelndes Gesicht mit offenem Mund'
    ],
    '😄': [
        'Grinsendes Gesicht mit lächelnden Augen',
        ':smile:',
        ':grinning_face_with_smiling_eyes:',
        'Glückliches Gesicht',
        'Smiley-Gesicht',
        'Grinsendes Gesicht mit schrumpfenden Augen',
        'Lächelndes Gesicht mit offenen Augen und lächelnden Augen'
    ],
    '😁': [
        'Strahlendes Gesicht mit lächelnden Augen',
        ':grin:',
        ':beaming_face_with_smiling_eyes:',
        'Grinsendes Gesicht mit lächelnden Augen'
    ],
    '😆': [
        'Grinsendes blinzelndes Gesicht',
        ':grinning_squinting_face:',
        ':xD:',
        ':><:',
        'Großes Grinsen',
        'Geschlossenes Auge Lächeln',
        'Lachen',
        'Grinsendes Gesicht mit dicht geschlossenen Augen',
        'Lächelndes Gesicht mit offenem Mund und dicht geschlossenen Augen'
    ],
    '😅': [
        'Grinnendes Gesicht mit Schweiß',
        ':happy_sweat:',
        'Übung',
        'Glücklicher Schweiß',
        'Grinsendes Gesicht mit blinzelnden Augen und Schweißtropfen',
        'Lächelndes Gesicht mit offenem Mund und kaltem Schweiß'
    ],
    '🤣': [
        'ROFL',
        ':rofl:',
        'Auf dem Boden lachend rollen'
    ],
    '😂': [
        'Gesicht mit Freudentränen',
        ':lol:',
        'Lachen',
        'Weinend lachen',
        'Lachende Tränen',
        'LOL'
    ],
    '🙂': [
        'Leicht lächelndes Gesicht',
        ':smile:',
        '::):',
        'Etwas glücklich',
        'Alles gut'
    ],
    '🙃': [
        'Verkehrtes Gesicht',
        ':upside-down_face:',
        ':upside_down_face:',
        'Sarkasmus',
        'Albernd',
        'Verkehrtes Gesicht'
    ],
    '😉': [
        'Zwinkerndes Gesicht',
        ':winking:',
        ':;):',
        'Zwinkern',
        'Zwinkern Gesicht',
        'Zwinkerndes Gesicht'
    ],
    '😊': [
        'Lächelndes Gesicht mit lächelnden Augen',
        ':smiling_face:',
        ':^^:',
        'Glückliches Gesicht',
        'Lächeln',
        'Smiley-Gesicht'
    ],
    '😇': [
        'Lächelndes Gesicht mit Heiligenschein',
        ':smiling_angel:',
        'Engel',
        'Heiligenschein'
    ],
    '🥰': [
        'Lächelndes Gesicht mit Herzen',
        ':smiling_hearts:',
        'Verliebtes Gesicht',
        'Lächelndes Gesicht mit lächelnden Augen und drei Herzen'
    ],
    '😍': [
        'Lächelndes Gesicht mit Herzaugen',
        ':smiling_heart-eyes:',
        ':smiling_heart_eyes:',
        ':*.*:',
        'Herz Augen',
        'Herz Gesicht',
        'Lächelndes Gesicht mit Herz geformten Augen'
    ],
    '🤩': [
        'Sternenhimmel',
        ':star_eyes:',
        'Aufgeregt',
        'Sternaugen',
        'Sternenhimmel',
        'Wow Gesicht',
        'Gesicht mit Sternenhimmelaugen',
        'Grinsendes Gesicht mit Sternaugen'
    ],
    '😘': [
        'Gesicht mit Luftkuss',
        ':kissing_face:',
        '::*:',
        '::-*:',
        'Einen Luftkuss geben',
        'Luftkuss',
        'Küssen',
        'Gesicht gibt einen Kuss'
    ],
    '😗': [
        'Küssendes Gesicht',
        ':kissing_face:',
        '::*:',
        '::-*:',
        'Duck-Face',
        'Küssendes Gesicht',
        'Pfeifen'
    ],
    '☺️': [
        'Lächelndes Gesicht',
        ':smiling_face:',
        'Glückliches Gesicht',
        'Smiley-Gesicht',
        'Lächeln',
        'Leicht lächelndes Gesicht'
    ],
    '😚': [
        'Küssendes Gesicht mit geschlossenen Augen',
        ':kissing_face:',
        'Kuss-Gesicht',
        'Küssendes Gesicht'
    ],
    '😙': [
        'Küssendes Gesicht mit lächelnden Augen',
        ':kissing_face:',
        'Kuss-Gesicht',
        'Küssend',
        'Pfeife',
        'Pfeifen'
    ],
    '😋': [
        'Gesicht genießt das Essen',
        ':savoring_face:',
        'Albernd',
        'Hungrig',
        'Lächelndes Gesicht mit Zunge',
        'Gesicht genießt leckeres Essen',
        'Lecker'
    ],
    '😛': [
        'Gesicht mit Zunge',
        ':tongue_face:',
        '::P:',
        'Frech',
        'Zunge Gesicht',
        'Zunge raus',
        'Gesichter mit rausgestreckter Zunge'
    ],
    '😜': [
        'Zwinkendes Gesicht mit Zunge',
        ':winking:',
        ':;P:',
        'Verrückt',
        'Verrücktes Gesicht',
        'Winkende Seite mit steckender Tongue',
        'Gesichter mit Stuck-Out Tongue und Winking Eye'
    ],
    '🤪': [
        'Zany Face',
        ':crazy_face:',
        'Verrückte Augen',
        'Aufgeregt',
        'Wilde',
        'Goofy Face',
        'Grinsendes Gesicht mit einem großen und einem kleinen Auge'
    ],
    '😝': [
        'Abschütterndes Gesicht mit Zunge',
        ':tongue_face:',
        ':xP:',
        'Zunge raus',
        'Face with Stuck Out Tongue and streng Closed Eyes',
        'Gesichter mit fester Zunge und fest verschlossenen Augen'
    ],
    '🤑': [
        'Geld-und-Mund-Gesicht',
        ':money-mouth_face:',
        ':money_mouth_face:',
        '::$:',
        'Dollar-Schild Augen',
        'Geld-Gesicht',
        'Reiche'
    ],
    '🤗': [
        'Rumpfendes Gesicht',
        ':hugging_face:',
        'Hub',
        'Racheln',
        'Hengst',
        'Happy Face mit Hugging Hands'
    ],
    '🤭': [
        'Hoppla',
        ':oops:',
        'Gesicht mit Hand Over Mouth',
        'Lächelndes Gesicht mit lächelnden Augen und Hand-Covering-Mund'
    ],
    '🤫': [
        'Shh',
        ':shushing_face:',
        'Mischen',
        'Schützendes Gesicht',
        'Hülse',
        'Ruhig',
        'Stille',
        'Stumm',
        'Face with Finger Covering Closed Lips'
    ],
    '🤔': [
        'Was',
        ':thinking_face:',
        '?',
        'Hmm',
        'Denkendes Gesicht',
        'Kinn-Vorschaubild',
        'Denker',
        'Werfender Schatten'
    ],
    '🤐': [
        'Zip',
        ':zip_face:',
        'Zipper-Mund Gesicht',
        'Gesiegelte Lippen',
        'Versiegelte Lippen',
        'Zip',
        'Gesicht mit Zipper Mund'
    ],
    '🤨': [
        'Gesicht mit erhöhter Augenbraue',
        ':face_with_raised_eyebrow:',
        'Jörg',
        'Der Felsen',
        'Gesicht mit erhöhter Augenbraue',
        'Gesicht mit einer Augenbraue erhöht'
    ],
    '😐': [
        'Neutrales Gesicht',
        ':neutral_face:',
        ':|',
        'Gesicht mit geraden Mund',
        'Geradlinig'
    ],
    '😑': [
        'Ausdrucksloses Gesicht',
        ':expressionless_face:',
        '-_-',
        'Gesicht mit geraden Mund',
        'Geraden Gesicht'
    ],
    '😶': [
        'Gesicht ohne Mund',
        ':face_without_mouth:',
        'Leeres Gesicht',
        'Mundlos',
        'Stille',
        'Stumm'
    ],
    '😏': [
        'Smirking Gesicht',
        ':smirking_face:',
        'Flirt',
        'Sexuelles Gesicht',
        'Smug Gesicht',
        'Vorgeschlagenes Lächeln'
    ],
    '😒': [
        'Unamüsiertes Gesicht',
        ':unamused_face:',
        'Unzufrieden',
        'Meh',
        'Seitenauge',
        'Nicht beeindruckt'
    ],
    '🙄': [
        'Gesicht mit Rollenden Augen',
        ':face_with_rolling_eye:',
        ':eye_roll:',
        'Augenrolle'
    ],
    '😬': [
        'Grauendes Gesicht',
        ':awkward:',
        'Awkward',
        'Eek',
        'Fuß in Berührung',
        'Nervus',
        'Snapchat Gegenseitig #1 Bester Freund'
    ],
    '🤥': [
        'Lügengesicht',
        ':lying_face:',
        'Lüge',
        'Lange Nase',
        'Pinocchio'
    ],
    '😌': [
        'Gelassenes Gesicht',
        ':relieved_face:',
        'Inhalt',
        'Gefällt'
    ],
    '😔': [
        'Tut uns leid',
        ':sad_face:',
        'Pensives Gesicht',
        'Pensiv',
        'Traurig',
        'Sophie',
        'Traurig',
        'Trauriges Pensive-Gesicht'
    ],
    '😪': [
        'Schlafendes Gesicht',
        ':sleepy_face:',
        'Seiten-Tear',
        'Schneeblase'
    ],
    '🤤': [
        'Speichel',
        ':saliva_face:',
        'Drooling Face',
        'Drool'
    ],
    '😴': [
        'Schlafendes Gesicht',
        ':sleeping_face:',
        ':zzz:',
        'Zzz',
        'Schlaf Gesicht',
        'Schnarrend',
        'Zzz Gesicht'
    ],
    '🥱': [
        'Yawning-Gesicht',
        ':yawning_face:'
    ],
    '😷': [
        'Gesicht mit medizinischer Maske',
        ':face_with_medical_mask:',
        'Coronavirus',
        'COVID-19',
        'Maske Gesicht',
        'Chirurgische Maske'
    ],
    '🤒': [
        'Gesicht mit Thermometer',
        ':face_with_thermometer:',
        ':sick:',
        ':ill:',
        'Ill',
        'Krank'
    ],
    '🤕': [
        'Gesicht mit Kopf-Bandage',
        ':face_with_head-bandage:',
        ':face_with_head_bandage:',
        'Verbandter Kopf',
        'Unhöflich',
        'Verletzte'
    ],
    '🤢': [
        'Geselliges Gesicht',
        ':nauseated_face:',
        'Abscheu',
        'Grüne Fläche',
        'Erbrechen',
        ':green:'
    ],
    '🤮': [
        'Gesicht Erbrechen',
        ':face_vomiting:',
        'Sprechen',
        'Bleah',
        'Bleurgh',
        'Julia',
        'Hannah',
        'Ehe',
        'Sprechen',
        'Werfe nach oben',
        'Erbrechen',
        'Gesicht mit offenem Mund Vomiting'
    ],
    '🤧': [
        'Niesen Gesicht',
        ':sneezing_face:',
        'Gesundheit'
    ],
    '🥵': [
        'Heißes Gesicht',
        ':hot_face:',
        'Überhitztes Gesicht',
        ':red:'
    ],
    '🥶': [
        'Kaltes Gesicht',
        ':cold_face:',
        'Kühl',
        'Kühl',
        'Gefrierendes Gesicht',
        ':blue:'
    ],
    '🥴': [
        'Wahnsinniges Gesicht',
        ':woozy_face:',
        'Ertrunkenes Gesicht',
        'Gesicht mit Uneven Augen und Wavy Mund'
    ],
    '😵': [
        'Dizzy Face',
        ':dizzy_face:',
        'Cross-Augen Gesicht',
        'Spiralaugen Gesicht'
    ],
    '🤯': [
        'Explodierender Kopf',
        ':exploding_head:',
        'Verstand Blown',
        'Schockiertes Gesicht mit explodierendem Kopf'
    ],
    '🤠': [
        'Cowboy Hut Gesicht',
        ':cowboy_hat_face:',
        'Cowboy',
        'Cowboy-Gesicht',
        'Gesicht mit Cowboy Hut'
    ],
    '🥳': [
        'Partierendes Gesicht',
        ':partying_face:',
        'Party-Gesicht',
        'Gesicht mit Party Horn und Party Hut'
    ],
    '😎': [
        'Lächelndes Gesicht mit Sonnenbrille',
        ':smiling_face_with_sunglasses:',
        'Kühl',
        'Gemeinsame beste Freunde (SnapChat)',
        'Sonnenbrille'
    ],
    '🤓': [
        'Nerd Gesicht',
        ':nerd_face:',
        'Nerdy'
    ],
    '🧐': [
        'Gesicht mit Monokle',
        ':face_with_monocle:'
    ],
    '😕': [
        'Verwirrtes Gesicht',
        ':confused_face:',
        '::/:',
        '::S:',
        'Unplussed',
        'Verwirrt'
    ],
    '😟': [
        'Beunruhigtes Gesicht',
        ':worried_face:',
        '::(:',
        'Traurig',
        'Sophie'
    ],
    '🙁': [
        'Leicht brüchiges Gesicht',
        ':slightly_frowning_face:',
        '::(:',
        'Leicht traurig'
    ],
    '☹️': [
        'Frowning Gesicht',
        ':frowning_face:',
        '::(:',
        'Megafrown',
        'Weiß brüchiges Gesicht'
    ],
    '😮': [
        'Wow',
        ':wow:',
        '::O:',
        'Oh mich!',
        'Gesicht mit offenem Mund',
        'Mund öffnen',
        'Überraschtes Gesicht mit offenem Mund'
    ],
    '😯': [
        'Gehülltes Gesicht',
        ':husked_face:',
        '::O:',
        'Überraschung',
        'Überraschtes Gesicht'
    ],
    '😲': [
        'Schockiertes Gesicht',
        ':shocked_face:',
        '::O:',
        'Wow',
        'Erschüttertes Gesicht',
        'Ertrunkenes Gesicht',
        'Giebelnde Fläche'
    ],
    '😳': [
        'Gespeichertes Gesicht',
        ':flushed_face:',
        '::$:',
        'Blushing Gesicht',
        'Verwurzelt',
        'Schande',
        'Gesicht mit breiten offenen Augen'
    ],
    '🥺': [
        'Pleitendes Gesicht',
        ':pleading_face:',
        '::(:',
        'Beginn',
        'Glänzende Augen',
        'Simp',
        'Gesicht mit Pleitenden Augen'
    ],
    '😦': [
        'Frowning Gesicht mit offenem Mund',
        ':frowning_face_with_open_mouth:',
        ':D::',
        'Yawning'
    ],
    '😨': [
        'Geborgen',
        ':scared:',
        ':D::',
        'Furchtbares Gesicht',
        'Überrascht'
    ],
    '😰': [
        'Ängstliches Gesicht mit Schweiß',
        ':anxious_face_with_sweat:',
        'Blaues Gesicht',
        'Beunruhigtes Gesicht',
        'Nervisches Gesicht',
        'Gesicht mit offenem Mund und kaltem Schweiß'
    ],
    '😥': [
        'Traurig, aber beruhigtes Gesicht',
        ':sad_but_relieved_face:',
        '::(:',
        'Augenbrauen-Schweiß',
        'Unernennt, aber beruhigtes Gesicht'
    ],
    '😢': [
        'Weinendes Gesicht',
        ':crying_face:',
        '::(:',
        'Weinen',
        'Tränen'
    ],
    '😭': [
        'Lauterweise weinend Gesicht',
        ':loudly_crying_face:',
        'Bawling',
        'Weinen',
        'Traurige Tränen',
        'Sobbing'
    ],
    '😱': [
        'Gesichtsschreien in Angst',
        ':face_screaming_in_fear:',
        'Alleinstehend',
        'Schreien',
        'Screaming Gesicht'
    ],
    '😖': [
        'Verwirrtes Gesicht',
        ':confounded_face:',
        'Quivering Mund',
        'Zerklapptes Gesicht'
    ],
    '😣': [
        'Beharrliches Gesicht',
        ':persevering_face:',
        'Hilfreich Gesicht',
        'Geschnittene Augen'
    ],
    '😞': [
        'Unbenanntes Gesicht',
        ':disappointed_face:',
        '::(:',
        'Traurig',
        'Sophie'
    ],
    '😓': [
        'Abgestrahltes Gesicht mit Schweiß',
        ':downcast_face_with_sweat:',
        'Harte Arbeit',
        'Trauriges Schweiß-Gesicht',
        'Gesicht mit kaltem Schweiß'
    ],
    '😩': [
        'Weary Gesicht',
        ':weary_face:',
        'Distraught Gesicht',
        'Flügel'
    ],
    '😫': [
        'Müde Gesicht',
        ':tired_face:',
        'Erschöpft',
        'Fed hoch',
        'Distraught Gesicht'
    ],
    '😤': [
        'Gesicht mit Steam aus der Nase',
        ':face_with_steam_from_nose:',
        'Ausstrahlung von Grievances',
        'Frustriert',
        'Wahnsinniges Gesicht',
        'Steaming',
        'Huffing mit Zorn Gesicht'
    ],
    '😡': [
        'Pouting Gesicht',
        ':pouting_face:',
        'Zorniges Gesicht',
        'Grumpe Gesicht',
        'Wahnsinniges Gesicht',
        'Rotes Gesicht',
        ':red:'
    ],
    '😠': [
        'Zorniges Gesicht',
        ':angry_face:',
        'Zorn',
        'Grumpe Gesicht'
    ],
    '🤬': [
        'Schweißen',
        ':swearing:',
        '@#$%&!',
        'Gesicht mit Symbolen am Mund',
        'Fluch',
        'Zuschneiden',
        'Grawlix',
        'Gesicht mit Symbole über Mund',
        'Seriöses Gesicht mit Symbolen Covering Mouth',
        ':red:'
    ],
    '🥲': [
        'Lächelndes Gesicht mit Tear',
        ':smiling_face_with_tear:'
    ],
    '😮‍💨': [
        'Gesichtsausblendung',
        ':face_exhaling:',
        'Hoch'
    ],
    '😵‍💫': [
        'Gesicht mit Spiralaugen',
        ':face_with_spiral_eyes:',
        'Dizzy Face'
    ],
    '🥸': [
        'Verkleidtes Gesicht',
        ':disguised_face:'
    ],
    '🫠': [
        'Schmelzendes Gesicht',
        ':melting_face:'
    ],
    '🫢': [
        'Gesicht mit offenen Augen und Hand Over Mouth',
        ':face_with_open_eyes_and_hand_over_mouth:'
    ],
    '🫣': [
        'Gesicht mit aufsehendem Auge',
        ':face_with_peeking_eye:'
    ],
    '🫡': [
        'Heißes Gesicht',
        ':saluting_face:',
        'Militär',
        'Armee',
        'RUF',
        'Marine'
    ],
    '🫥': [
        'Gepunktete Linie Fläche',
        ':dotted_line_face:',
        ':transparent:'
    ],
    '🫤': [
        'Gesicht mit diagonaler Mund',
        ':face_with_diagonal_mouth:'
    ],
    '🥹': [
        'Gesicht, welches die Tränen zurückhält',
        ':face_holding_back_tears:'
    ],
    '😈': [
        'Lächelndes Gesicht mit Hörnern',
        ':smiling_face_with_horns:',
        'Teufel',
        'Teufelshörner',
        'Glücklicher Teufel',
        'Violette Teufel',
        'Roter Teufel',
        ':purple:'
    ],
    '👿': [
        'Wütendes Gesicht mit Hörnern',
        ':angry_face_with_horns:',
        'Teufel',
        'Teufelshörner',
        'Violette Teufel',
        'Violette Goblin',
        'Trauriger Teufel',
        'Imp',
        ':lila'
    ],
    '🤡': [
        'Clown Gesicht',
        ':clown_face:',
        'Gruseliger Clown',
        'Böses Clown',
        'Schrecklicher Clown'
    ],
    '👽': [
        'Alien',
        ':alien:',
        'ET'
    ],
    '👾': [
        'Alien Monster',
        ':alien_monster:',
        'Weltraumeindringling',
        'Videospiel-Monster'
    ],
    '🤖': [
        'Robot',
        ':robot:',
        'Roboter Gesicht'
    ],
    '👹': [
        'Ogre',
        ':ogre:',
        'Maske Gesicht',
        'Oni',
        'Rotes Monster',
        'Japanischer Oger',
        ':red:'
    ],
    '👻': [
        'Geist',
        ':ghost:',
        'Halloween'
    ],
    '🗣️': [
        'Sprechender Kopf',
        ':speaking_head:',
        'Mansplaine',
        'Rufe',
        'Rufe',
        'Sprich Kopf in Silhouette',
        ':blue:'
    ],
    '👤': [
        'Büste in Silhouette',
        ':bust_in_silhouette:',
        'Schatten',
        'Silhouette',
        'Benutzer',
        'Silhouette der Person',
        ':blue:'
    ],
    '🫂': [
        'Leute Huggen',
        ':people_hugging:',
        ':blue:'
    ],
    '👥': [
        'Büsten in Silhouette',
        ':busts_in_silhouette:',
        'Schatten',
        'Silhouettes',
        'Benutzer',
        'Silhouette von zwei Personen',
        ':blue:'
    ]
};
/*people*/
emojis_language[lang][3] = {
    '👶{{skin_tone}}': [
        'Baby',
        ':baby:',
        'Kind',
        'Kleinling'
    ],
    '🧒{{skin_tone}}': [
        'Kind',
        ':child:',
        'Geschlechtsneutrales Kind'
    ],
    '👧{{skin_tone}}': [
        'Mädchen',
        ':girl:',
        ':woman:'
    ],
    '🧑{{skin_tone}}': [
        'Person',
        ':person:',
        'Geschlechtsneutrale Erwachsene',
        'Erwachsene',
        ':person:'
    ],
    '🧑{{skin_tone}}': [
        'Person: Bart',
        ':person_beard:',
        'Bart',
        'Bearded Person',
        'Bearded Person',
        ':person:'
    ],
    '🧑{{skin_tone}}‍🦰': [
        'Person: Rotes Haar',
        ':person_red_hair:',
        'Ingwer',
        'Person Redhead',
        'Person mit Rotem Haar',
        ':person:'
    ],
    '🧑{{skin_tone}}‍🦱': [
        'Person: Geschwommenes Haar',
        ':person_curly_hair:',
        'Person mit geschwungener Haare',
        ':person:'
    ],
    '🧑{{skin_tone}}‍🦳': [
        'Person: Weiße Haare',
        ':person_white_hair:',
        'Person mit grauem Haar',
        ':person:'
    ],
    '🧑{{skin_tone}}‍🦲': [
        'Person: Kahle',
        ':person_bald:',
        'Person ohne Haar',
        ':person:'
    ],
    '👱{{skin_tone}}': [
        'Person: Blond Haar',
        ':person_blond_hair:',
        'Person mit Blondenhaar',
        ':person:'
    ],
    '👨{{skin_tone}}': [
        'Mann',
        ':man:',
        'Mann',
        'Moustache Mann',
        ':man:'
    ],
    '🧔{{skin_tone}}‍♂️': [
        'Man: Bart',
        ':man_beard:',
        'Bart',
        'Bearteter Mann',
        'Bearded Person',
        ':man:'
    ],
    '👨{{skin_tone}}‍🦰': [
        'Man: Rotes Haar',
        ':man_red_hair:',
        'Ingwer',
        'Man Redhead',
        'Mann mit Rotem Haar',
        ':man:'
    ],
    '👨{{skin_tone}}‍🦱': [
        'Man: Schweigehaar',
        ':man_curly_hair:',
        'Mann mit geschwungener Haare',
        ':man:'
    ],
    '👨{{skin_tone}}‍🦳': [
        'Man: Weißes Haar',
        ':man_white_hair:',
        'Mann mit grauem Haar',
        ':man:'
    ],
    '👨{{skin_tone}}‍🦲': [
        'Mann: Kahle',
        ':man_bald:',
        'Mann ohne Haar',
        ':man:'
    ],
    '👱{{skin_tone}}‍♂️': [
        'Man: Blond Haar',
        ':man_blond_hair:',
        'Mann mit Blondenhaar',
        ':man:'
    ],
    '👩{{skin_tone}}': [
        'Frau',
        ':woman:',
        'Weiblich',
        'Dame',
        'Gelbe Frau',
        ':woman:'
    ],
    '🧔{{skin_tone}}‍♀️': [
        'Frau: Bart',
        ':woman_beard:',
        'Bart',
        'Bärenfrauen',
        ':woman:'
    ],
    '👩{{skin_tone}}‍🦰': [
        'Frau: Rotes Haar',
        ':woman_red_hair:',
        'Ingwer Frau',
        'Woman Redhead',
        'Frau mit Rotem Haar',
        ':woman:'
    ],
    '👩{{skin_tone}}‍🦱': [
        'Frau: Weibliches Haar',
        ':woman_curly_hair:',
        'Frau mit geschwungener Haare',
        ':woman:'
    ],
    '👩{{skin_tone}}‍🦳': [
        'Frau: Weißes Haar',
        ':woman_white_hair:',
        'Frau mit Grauem Haar',
        ':woman:'
    ],
    '👩{{skin_tone}}‍🦲': [
        'Frau: Kumpel',
        ':woman_bald:',
        'Frauen ohne Haar',
        ':woman:'
    ],
    '👱{{skin_tone}}‍♀️': [
        'Frau: Blond Haar',
        ':woman_blond_hair:',
        'Frau mit Blonde Haar',
        ':woman:'
    ],
    '👴{{skin_tone}}': [
        'Älterer Mann',
        ':older_man:',
        ':older:',
        'Älterer Mann',
        'Grandpa',
        'Alter Mann',
        ':man:'
    ],
    '👵{{skin_tone}}': [
        'Ältere Frau',
        ':older_woman:',
        ':older:',
        'Ältere Frau',
        'Oma',
        'Nina',
        'Alte Frau',
        'Alte Frau',
        ':woman:'
    ],
    '🧓{{skin_tone}}': [
        'Ältere Person',
        ':older_person:',
        ':older:',
        'Geschlechtsneutrale Ältere Erwachsene',
        ':person:'
    ],
    '👼{{skin_tone}}': [
        'Baby-Engel',
        ':baby_angel:',
        'Engel',
        'Cherub',
        'Amor',
        'Lila'
    ],
    '👨{{skin_tone}}‍🎄': [
        'Weihnachtsmann',
        ':santa_claus:',
        'Sankt Nikolaus',
        'Sinterklaas',
        'Vater Weihnachten',
        ':man:'
    ],
    '👩{{skin_tone}}‍🎄': [
        'Frau Claus',
        ':mrs_claus:',
        'Mutter Weihnachten',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🎄': [
        'Mx-Klaus',
        ':mx_clause:',
        'Personen-Weihnachten',
        ':person:'
    ],
    '🤴{{skin_tone}}': [
        'Prinz',
        ':price:',
        ':man:'
    ],
    '👸{{skin_tone}}': [
        'Prinzessin',
        ':pricess:',
        'Blonde Mädchen',
        'Mädchen mit Krone',
        'Mädchen mit Tiara',
        ':woman:'
    ],
    '🫅{{skin_tone}}': [
        'Person mit Krone',
        ':person_with_crown:',
        ':person:'
    ],
    '👳{{skin_tone}}‍♂️': [
        'Mann trägt Turban',
        ':man_wearing_turban:',
        ':wearing_turban:',
        'Arabisch',
        'Moslem',
        'Sikh',
        'Turban',
        ':man:'
    ],
    '👳{{skin_tone}}‍♀️': [
        'Frauen tragen Turban',
        ':woman_wearing_turban:',
        ':wearing_turban:',
        'Arabisch',
        'Moslem',
        'Sikh',
        'Turban',
        ':woman:'
    ],
    '👳{{skin_tone}}': [
        'Turban trägt Person',
        ':person_wearing_turban:',
        ':wearing_turban:',
        'Arabisch',
        'Moslem',
        'Sikh',
        'Turban',
        ':person:'
    ],
    '👲{{skin_tone}}': [
        'Person mit Schädelkappe',
        ':person_with_skullcap:',
        'Asiatischer Mann',
        'Mann mit chinesischer Kappe',
        'Mann mit Gua Pi Mao',
        ':person:'
    ],
    '🧕{{skin_tone}}': [
        'Frau mit Kopftuch',
        ':woman_with_headscarf:',
        'Hijab',
        'Person mit Kopftuch',
        ':woman:'
    ],
    '🤵{{skin_tone}}‍♀️': [
        'Mann in Tuxedo',
        ':man_in_tuxedo:',
        ':tuxedo:',
        'Groom',
        'Mann im Anzug',
        'Hochzeit',
        ':man:'
    ],
    '🤵{{skin_tone}}‍♂️': [
        'Frau in Tuxedo',
        ':woman_in_tuxedo:',
        ':tuxedo:',
        'Groom',
        'Frau im Anzug',
        'Hochzeit',
        ':woman:'
    ],
    '🤵{{skin_tone}}': [
        'Person in Tuxedo',
        ':person_in_tuxedo:',
        ':tuxedo:',
        'Groom',
        'Person in Anzug',
        'Hochzeit',
        ':person:'
    ],
    '👰{{skin_tone}}‍♂️': [
        'Mann mit Schleier',
        ':man_with_veil:',
        ':veil:',
        'Hochzeit',
        'Bräutigam',
        'Ehe',
        ':man:'
    ],
    '👰{{skin_tone}}‍♀️': [
        'Frau mit Schleier',
        ':woman_with_veil:',
        ':veil:',
        'Hochzeit',
        'Braut',
        'Braut mit Schleier',
        'Ehe',
        ':woman:'
    ],
    '👰{{skin_tone}}': [
        'Person mit Schleier',
        ':person_with_veil:',
        ':veil:',
        'Hochzeit',
        'Ehe',
        ':person:'
    ],
    '👨{{skin_tone}}‍🍼': [
        'Mann ernährt Baby',
        ':man_feeding_baby:',
        ':feeding_baby:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🍼': [
        'Frauen ernähren Baby',
        ':woman_feeding_baby:',
        ':feeding_baby:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🍼': [
        'Person füttert Baby',
        ':person_feeding_baby:',
        ':feeding_baby:',
        ':person:'
    ],
    '🥷': [
        'Ninja',
        ':ninja:'
    ],
    '🫃{{skin_tone}}': [
        'Schwangerer Mann',
        ':pregnant_man:',
        ':pregnant:',
        'Schwangerschaft',
        ':man:'
    ],
    '🤰{{skin_tone}}': [
        'Schwangere Frau',
        ':pregnant_woman:',
        ':pregnant:',
        'Schwangerschaft',
        'Schwangere Lady',
        ':woman:'
    ],
    '🫄{{skin_tone}}': [
        'Schwangere Person',
        ':pregnant_person:',
        ':pregnant:',
        'Schwangerschaft',
        ':person:'
    ],
    '🤱{{skin_tone}}‍': [
        'Stillen',
        ':breast-feeding:',
        ':breast_feeding:',
        'Stillen'
    ],
    '🦸{{skin_tone}}‍♂️': [
        'Mann Superheld',
        ':man_superhero:',
        ':superhero:',
        ':man:'
    ],
    '🦸{{skin_tone}}‍♀️': [
        'Frauen-Superheld',
        ':woman_superhero:',
        ':superhero:',
        ':woman:'
    ],
    '🦸{{skin_tone}}': [
        'Person Superheld',
        ':person_superhero:',
        ':superhero:',
        ':person:'
    ],
    '🦹{{skin_tone}}‍♂️': [
        'Mann Superbösartig',
        ':man_supervillain:',
        ':supervillain:',
        ':man:'
    ],
    '🦹{{skin_tone}}‍♀️': [
        'Frauen-Supervillain',
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
        'Mann Magier',
        ':man_mage:',
        ':mage:',
        'Sorcerer',
        'Assistent',
        ':man:'
    ],
    '🧙{{skin_tone}}‍♀️': [
        'Frauen-Magier',
        ':woman_mage:',
        ':mage:',
        'Hexe',
        'Hexerei',
        'Assistent',
        ':woman:'
    ],
    '🧙{{skin_tone}}': [
        'Persönlicher Magier',
        ':person_mage:',
        ':mage:',
        'Assistent',
        ':mage:',
        ':person:'
    ],
    '🧚{{skin_tone}}‍♂️': [
        'Mannfee',
        ':man_fairy:',
        ':fairy:',
        ':man:'
    ],
    '🧚{{skin_tone}}‍♀️': [
        'Frauen-Fee',
        ':woman_fairy:',
        ':fairy:',
        ':woman:'
    ],
    '🧚{{skin_tone}}': [
        'Person Fee',
        ':person_fairy:',
        ':fairy:',
        ':person:'
    ],
    '🧛{{skin_tone}}‍♂️': [
        'Mann Vampir',
        ':man_vampire:',
        ':vampire:',
        'Gabriel',
        ':man:'
    ],
    '🧛{{skin_tone}}‍♀️': [
        'Frauen-Vampir',
        ':woman_vampire:',
        ':vampire:',
        ':woman:'
    ],
    '🧛{{skin_tone}}': [
        'Vampir der Person',
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
        'Meerjungfrau',
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
        'Mensch-Elf',
        ':man_elf:',
        ':elf:',
        ':man:'
    ],
    '🧝{{skin_tone}}‍♀️': [
        'Frauen-Elf',
        ':woman_elf:',
        ':elf:',
        ':woman:'
    ],
    '🧝{{skin_tone}}': [
        'Mensch-Elf',
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
        'Person-Genie',
        ':person_genie:',
        ':genie:',
        ':person:'
    ],
    '🕵️{{skin_tone}}‍♂️': [
        'Mensch Detektiv',
        ':man_detective:',
        ':detective:',
        'Privates Auge',
        'Sleuth',
        'Spion',
        'Man Sleuth',
        'Schlauch oder Spion',
        '007',
        'Inspektor',
        ':man:'
    ],
    '🕵️{{skin_tone}}‍♀️': [
        'Frauen-Detektiv',
        ':woman_detective:',
        ':detective:',
        'Privates Auge',
        'Sleuth',
        'Spion',
        'Frauenschlösser',
        'Schlauch oder Spion',
        '007',
        'Inspektor',
        ':woman:'
    ],
    '🕵{{skin_tone}}': [
        'Personendetektiv',
        ':person_detective:',
        ':detective:',
        'Privates Auge',
        'Sleuth',
        'Spion',
        'Persönlicher Schlaf',
        'Schlauch oder Spion',
        '007',
        'Inspektor',
        ':person:'
    ],
    '💂{{skin_tone}}‍♂️': [
        'Man: Wächter',
        ':man_guard:',
        ':guard:',
        'Britischer Wachmann',
        'Fußwächter',
        ':man:'
    ],
    '💂{{skin_tone}}‍♀️': [
        'Frauen: Wache',
        ':woman_guard:',
        ':guard:',
        'Britischer Wachmann',
        'Fußwächter',
        ':woman:'
    ],
    '💂{{skin_tone}}': [
        'Person: Wächter',
        ':person_guard:',
        ':guard:',
        'Britischer Wachmann',
        'Fußwächter',
        ':person:'
    ],
    '👮{{skin_tone}}‍♂️': [
        'Polizeibeamter',
        ':man_police_officer:',
        ':police_officer:',
        'Bulle',
        'Polizei',
        'Polizist',
        ':man:'
    ],
    '👮{{skin_tone}}‍♀️': [
        'Frauenpolizei Offizier',
        ':woman_police_officer:',
        ':police_officer:',
        'Bulle',
        'Polizei',
        'Polizist',
        ':woman:'
    ],
    '👮{{skin_tone}}': [
        'Polizeibeamter',
        ':person_police_officer:',
        ':police_officer:',
        'Bulle',
        'Polizei',
        ':person:'
    ],
    '👨{{skin_tone}}‍🚒': [
        'Feuerwehrmann',
        ':man_firefighter:',
        ':firefighter:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🚒': [
        'Frauen-Feuerwehrmann',
        ':woman_firefighter:',
        ':firefighter:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🚒': [
        'Person Feuerwehrmann',
        ':person_firefighter:',
        ':firefighter:',
        ':person:'
    ],
    '👨{{skin_tone}}‍✈️': [
        'Mann-Pilot',
        ':man_pilot:',
        ':pilot:',
        ':man:'
    ],
    '👩{{skin_tone}}‍✈️': [
        'Frauen-Pilot',
        ':woman_pilot:',
        ':pilot:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍✈️': [
        'Personen-Pilot',
        ':person_pilot:',
        ':pilot:',
        ':person:'
    ],
    '👨{{skin_tone}}‍💻': [
        'Mensch-Techniker',
        ':man_technologist:',
        ':technologist:',
        'Mensch-Techniker',
        ':man:'
    ],
    '👩{{skin_tone}}‍💻': [
        'Frauen-Technikerin',
        ':woman_technologist:',
        ':technologist:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍💻': [
        'Person-Techniker',
        ':person_technologist:',
        ':technologist:',
        ':person:'
    ],
    '👨{{skin_tone}}‍🎤': [
        'Mann Singer',
        ':man_singer:',
        ':singer:',
        'Bowie',
        'Aladdin Sane',
        ':man:'
    ],
    '👩{{skin_tone}}‍🎤': [
        'Frauensängerin',
        ':woman_singer:',
        ':singer:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🎤': [
        'Persönlicher Singer',
        ':person_singer:',
        ':singer:',
        ':person:'
    ],
    '👨{{skin_tone}}‍🎨': [
        'Mensch-Künstler',
        ':man_artist:',
        ':artist:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🎨': [
        'Frauen-Interpret',
        ':woman_artist:',
        ':artist:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🎨': [
        'Persönlicher Künstler',
        ':person_artist:',
        ':artist:',
        ':person:'
    ],
    '👷{{skin_tone}}‍♂️': [
        'Bauarbeiter des Mannes',
        ':man_contruction_worker:',
        ':contruction_worker:',
        ':man:'
    ],
    '👷{{skin_tone}}‍♀️': [
        'Damenbauarbeiter',
        ':woman_contruction_worker:',
        ':contruction_worker:',
        ':woman:'
    ],
    '👷{{skin_tone}}': [
        'Personen-Konstruktionsarbeiter',
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
        'Frauen-Astronaut',
        ':woman_astronaut:',
        ':astronaut:',
        'Frauenkosmonaut',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🚀': [
        'Person Astronaut',
        ':person_astronaut:',
        ':astronaut:',
        'Person Kosmonaut',
        ':person:'
    ],
    '👨{{skin_tone}}‍🔬': [
        'Menschwissenschaftler',
        ':man_scientist:',
        ':scientist:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🔬': [
        'Frauen-Wissenschaftler',
        ':woman_scientist:',
        ':scientist:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🔬': [
        'Menschwissenschaftler',
        ':person_scientist:',
        ':scientist:',
        ':person:'
    ],
    '👨{{skin_tone}}‍💼': [
        'Man-Büroarbeiter',
        ':man_office_worker:',
        ':office_worker:',
        'CEO',
        'Geschäftsmann',
        ':man:'
    ],
    '👩{{skin_tone}}‍💼': [
        'Frau Büroarbeiterin',
        ':woman_office_worker:',
        ':office_worker:',
        'Geschäftsfrau',
        'CEO',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍💼': [
        'Persönliche Büroarbeiterin',
        ':person_office_worker:',
        ':office_worker:',
        'Geschäftlich',
        'CEO',
        ':person:'
    ],
    '👨{{skin_tone}}‍🏭': [
        'Manufaktur',
        ':man_factory_worker:',
        ':factory_worker:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🏭': [
        'Frauen-Fabrik Arbeiter',
        ':woman_factory_worker:',
        ':factory_worker:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🏭': [
        'Person Fabrik Arbeiter',
        ':person_factory_worker:',
        ':factory_worker:',
        ':person:'
    ],
    '👨{{skin_tone}}‍🔧': [
        'Mensch-Mechanik',
        ':man_mechanic:',
        ':mechanic:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🔧': [
        'Frauen-Mechanik',
        ':woman_mechanic:',
        ':mechanic:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🔧': [
        'Mensch-Mechanik',
        ':person_mechanic:',
        ':mechanic:',
        ':person:'
    ],
    '👨{{skin_tone}}‍🍳': [
        'Mann Kochen',
        ':man_cook:',
        ':cook:',
        'Man-Koch',
        'Männlicher Küchenchef',
        ':man:'
    ],
    '👩{{skin_tone}}‍🍳': [
        'Frauenkoch',
        ':woman_cook:',
        ':cook:',
        'Frauenkoch',
        'Weiblicher Küchenchef',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🍳': [
        'Person Kochen',
        ':person_cook:',
        ':cook:',
        'Personenkoch',
        ':person:'
    ],
    '👨{{skin_tone}}‍🌾': [
        'Mann Bauer',
        ':man_farmer:',
        ':farmer:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🌾': [
        'Weibchen',
        ':woman_farmer:',
        ':farmer:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🌾': [
        'Person Bauer',
        ':person_farmer:',
        ':farmer:',
        ':person:'
    ],
    '👨{{skin_tone}}‍‍⚖️': [
        'Mann-Richter',
        ':man_judge:',
        ':judge:',
        ':man:'
    ],
    '👩{{skin_tone}}‍‍⚖️': [
        'Frauen-Richter',
        ':woman_judge:',
        ':judge:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍‍⚖️': [
        'Person Richter',
        ':person_judge:',
        ':judge:',
        ':person:'
    ],
    '👨{{skin_tone}}‍‍🏫': [
        'Man-Lehrer',
        ':man_teacher:',
        ':teacher:',
        ':man:'
    ],
    '👩{{skin_tone}}‍‍🏫': [
        'weibliche Lehrerin',
        ':woman_teacher:',
        ':teacher:',
        ':woman:'
    ],
    '🧑‍{{skin_tone}}‍‍🏫': [
        'Person-Lehrer',
        ':person_teacher:',
        ':teacher:',
        ':person:'
    ],
    '👨{{skin_tone}}‍🎓': [
        'Man-Student',
        ':man_student:',
        ':student:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🎓': [
        'weibliche Schülerin',
        ':woman_student:',
        ':student:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🎓': [
        'Teilnehmer/in',
        ':person_student:',
        ':student:',
        ':person:'
    ],
    '👨{{skin_tone}}‍⚕️': [
        'Mann Gesundheitsarbeiter',
        ':man_health_worker:',
        ':health_worker:',
        'Männlicher Arzt',
        'Männliche Krankenschwester',
        ':man:'
    ],
    '👩{{skin_tone}}‍⚕️': [
        'Frauen Gesundheitsarbeiter',
        ':woman_health_worker:',
        ':health_worker:',
        'Weiblicher Arzt',
        'Weibliche Krankenschwester',
        ':woman:'
    ],
    '🧑‍{{skin_tone}}‍⚕️': [
        'Persönlicher Gesundheitsarbeiter',
        ':person_health_worker:',
        ':health_worker:',
        'Person-Doktor',
        'Personen-Krankenschwester',
        ':person:'
    ],
    '🤷{{skin_tone}}‍♂️': [
        'Mann Scheuklappen',
        ':man_shrugging:',
        ':shrugging:',
        'idk Mann',
        'dunno',
        ':man:'
    ],
    '🤷{{skin_tone}}‍♀️': [
        'Frauen-Scheuklappen',
        ':woman_shrugging:',
        ':shrugging:',
        'idk Frau',
        'dunno',
        ':woman:'
    ],
    '🤷{{skin_tone}}': [
        'Personen-Scheuklappen',
        ':person_shrugging:',
        ':shrugging:',
        'idk Person',
        'dunno',
        ':person:'
    ],
    '🤦{{skin_tone}}‍♂️': [
        'Gesichtsbemalung',
        ':man_facepalming:',
        ':facepalming:',
        ':man:'
    ],
    '🤦{{skin_tone}}‍♀️': [
        'Frauengesichtsalzen',
        ':woman_facepalming:',
        ':facepalming:',
        ':woman:'
    ],
    '🤦{{skin_tone}}': [
        'Persönliches Gesichtsalmen',
        ':person_facepalming:',
        ':facepalming:',
        ':person:'
    ],
    '🙇{{skin_tone}}‍‍♂️': [
        'Mann Bowing',
        ':man_bowing:',
        ':bowing:',
        ':man:'
    ],
    '🙇{{skin_tone}}‍‍♀️': [
        'Frauen Bowing',
        ':woman_bowing:',
        ':bowing:',
        ':woman:'
    ],
    '🙇{{skin_tone}}': [
        'Person Bowing',
        ':person_bowing:',
        ':bowing:',
        ':person:'
    ],
    '🧏{{skin_tone}}‍♂️': [
        'Gehörloser Mann',
        ':deaf_man:',
        ':deaf:',
        ':man:'
    ],
    '🧏{{skin_tone}}‍‍♀️': [
        'Gehörlose Frau',
        ':deaf_woman:',
        ':deaf:',
        ':woman:'
    ],
    '🧏{{skin_tone}}': [
        'Gehörlose Person',
        ':deaf_person:',
        ':deaf:',
        ':person:'
    ],
    '🙋{{skin_tone}}‍‍♂️': [
        'Mensch, der die Hand hebt',
        ':man_raising_hand:',
        'Ein glücklicher Mann erhebt eine Hand',
        ':raising_hand:',
        ':man:'
    ],
    '🙋{{skin_tone}}‍♀️': [
        'Frauenerziehende Hand',
        ':woman_raising_hand:',
        'Glückliche Frau erheben eine Hand',
        ':raising_hand:',
        ':woman:'
    ],
    '🙋{{skin_tone}}': [
        'Mensch, der die Hand hebt',
        ':person_raising_hand:',
        'Fröhliche Person die eine Hand hebt',
        ':raising_hand:',
        ':person:'
    ],
    '💁{{skin_tone}}‍♂️': [
        'Hand Trinkgelder',
        ':man_tipping_hand:',
        'Informationsschalter Mann',
        ':tipping_hand:',
        ':man:'
    ],
    '💁{{skin_tone}}‍♀️': [
        'Frau-Tipping-Hand',
        ':woman_tipping_hand:',
        'Informationsschalter Frau',
        ':tipping_hand:',
        ':woman:'
    ],
    '💁{{skin_tone}}': [
        'Person Trinkgelder Hand',
        ':person_tipping_hand:',
        'Informationsschalter Person',
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
        'Frau Geste OK',
        ':woman_gesturing_ok:',
        ':gesturing_ok:',
        ':woman:'
    ],
    '🙆{{skin_tone}}': [
        'Person Gesten OK',
        ':person_gesturing_ok:',
        ':gesturing_ok:',
        ':person:'
    ],
    '🙅{{skin_tone}}‍♂️': [
        'Nein',
        ':man_gesturing_no:',
        ':gesturing_no:',
        ':man:'
    ],
    '🙅{{skin_tone}}‍♀️': [
        'Frauen-Geste Nein',
        ':woman_gesturing_no:',
        ':gesturing_no:',
        ':woman:'
    ],
    '🙅{{skin_tone}}': [
        'Person Gesten Nein',
        ':person_gesturing_no:',
        ':gesturing_no:',
        ':person:'
    ],
    '🙎{{skin_tone}}‍♂️': [
        'Mann Pausen',
        ':man_pouting:',
        ':pouting:',
        ':man:'
    ],
    '🙎{{skin_tone}}‍‍♀️': [
        'Frauen-Pausen',
        ':woman_pouting:',
        ':pouting:',
        ':woman:'
    ],
    '🙎{{skin_tone}}': [
        'Personen-Pausen',
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
        'Frau Frowning',
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
    '🧟‍‍♂️': [
        'Mann Zombie',
        ':man_zombie:',
        ':zombie:',
        ':man:'
    ],
    '🧟‍‍♀️': [
        'Frauenzombie',
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
        'Mann wandern',
        ':man_walking:',
        ':walking:',
        ':man:'
    ],
    '🚶{{skin_tone}}‍♀️': [
        'Frauen wandern',
        ':woman_walking:',
        ':walking:',
        ':woman:'
    ],
    '🚶{{skin_tone}}': [
        'Person Wandern',
        ':person_walking:',
        ':walking:',
        ':person:'
    ],
    '🧍{{skin_tone}}‍♂️': [
        'Mann Stehen',
        ':man_standing:',
        ':standing:',
        ':man:'
    ],
    '🧍{{skin_tone}}‍♀️': [
        'Stehende Frau',
        ':woman_standing:',
        ':standing:',
        ':woman:'
    ],
    '🧍{{skin_tone}}': [
        'Person Stehen',
        ':person_standing:',
        ':standing:',
        ':person:'
    ],
    '🧎{{skin_tone}}‍♂️': [
        'Mann Knieten',
        ':man_kneeling:',
        ':kneeling:',
        ':man:'
    ],
    '🧎{{skin_tone}}‍♀️': [
        'Frauenkneelung',
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
        'Mann mit weißem Rohr',
        ':man_with_white_cane:',
        ':white_cane:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🦯': [
        'Frau mit weißem Cane',
        ':woman_with_white_cane:',
        ':white_cane:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🦯': [
        'Person mit weißem Cane',
        ':person_with_white_cane:',
        ':white_cane:',
        ':person:'
    ],
    '👨{{skin_tone}}‍🦼': [
        'Mann im motorisierten Rollstuhl',
        ':man_in_motorized_wheelchair:',
        ':motorized_wheelchair:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🦼': [
        'Frau im motorisierten Rollstuhl',
        ':woman_in_motorized_wheelchair:',
        ':motorized_wheelchair:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🦼': [
        'Person im motorisierten Rollstuhl',
        ':person_in_motorized_wheelchair:',
        ':motorized_wheelchair:',
        ':person:'
    ],
    '👨{{skin_tone}}‍🦽': [
        'Mann im manuellen Rollstuhl',
        ':man_manual_wheelchair:',
        ':manual_wheelchair:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🦽': [
        'Frau im manuellen Rollstuhl',
        ':woman_manual_wheelchair:',
        ':manual_wheelchair:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🦽': [
        'Person im manuellen Rollstuhl',
        ':person_manual_wheelchair:',
        ':manual_wheelchair:',
        ':person:'
    ],
    '👯‍♂️': [
        'Männer mit Hasen Ohren',
        ':men_with_bunny_hears:',
        ':bunny_ears:',
        ':man:'
    ],
    '👯‍♀️': [
        'Frauen mit Hasen-Ohren',
        ':women_with_bunny_hears:',
        ':bunny_ears:',
        ':woman:'
    ],
    '👯': [
        'Leute mit Hasen-Ohren',
        ':people_with_bunny_hears:',
        ':bunny_ears:',
        ':person:'
    ],
    '🕴️{{skin_tone}}': [
        'Levitative Person im Anzug',
        ':person_in_suit_levitating:',
        'Schwebender Mann',
        'Rude Junge',
        'Walt Jabsco',
        'Mann in Business Anzug Levitating',
        ':person:'
    ],
    '🧖{{skin_tone}}‍♂️': [
        'Mann im Dampfbad',
        ':man_in_steamy_room:',
        ':steamy_room:',
        'Mann in der Sauna',
        ':man:'
    ],
    '🧖{{skin_tone}}‍♀️': [
        'Frau im Dampfbad',
        ':woman_in_steamy_room:',
        ':steamy_room:',
        'Frau in Sauna',
        ':woman:'
    ],
    '🧖{{skin_tone}}': [
        'Person in Dampfbad',
        ':person_in_steamy_room:',
        ':steamy_room:',
        'Person in Sauna',
        ':person:'
    ],
    '👫{{skin_tone}}': [
        'Frauen und Mann halten Hände',
        ':woman_and_man_holding_hands:',
        ':holding_hands:',
        'Heterosexuelles Paar',
        'Geradliniges Paar',
        'Männer und Frauen halten Hände',
        ':woman:'
    ],
    '👬{{skin_tone}}': [
        'Männer halten Hände',
        ':holding_hands:',
        ':men_holding_hands:',
        'Schwulen-Paar',
        'Zwei Männer Haltehands',
        ':man:'
    ],
    '👭{{skin_tone}}': [
        'Frauen, die Hände halten',
        ':holding_hands:',
        ':women_holding_hands:',
        'Lesbisches Paar',
        'Zwei Frauen, die Hände halten',
        ':woman:'
    ],
    '🧑‍🤝‍🧑': [
        'Personen die Hände halten',
        ':holding_hands:',
        ':people_holding_hands:',
        'Zwei Personen, die Hände halten',
        'Gender Inclusive Paar',
        'Neutrales Paar Geschlecht',
        'Geschlecht nicht konformes Paar',
        ':person:'
    ],
    '👨‍👩‍👦': [
        'Familie mit Mutter, Vater und Sohn',
        ':family_with_mother_father_and_son:',
        'Familie: Man, Frau, Junge'
    ],
    '👨‍👩‍👧': [
        'Familie mit Mutter, Vater und Tochter',
        ':family_with_mother_father_and_daughter:',
        'Familie: Man, Frau, Mädchen'
    ],
    '👨‍👩‍👧‍👦': [
        'Familie mit Mutter, Vater, Sohn und Tochter',
        ':family_with_mother_father_son_and_daughter:',
        'Familie: Man, Frau, Mädchen, Junge'
    ],
    '👨‍👩‍👦‍👦': [
        'Familie mit Mutter, Vater und zwei Söhne',
        ':family_with_mother_father_and_two_sons:',
        'Familie: Man, Frau, Jung, Junge'
    ],
    '👨‍👩‍👧‍👧': [
        'Familie mit Mutter, Vater und zwei Töchter',
        ':family_with_mother_father_and_two_daughters:',
        'Familie: Man, Frau, Mädchen, Mädchen'
    ],
    '👨‍👨‍👦': [
        'Familie mit zwei Vätern und Sohn',
        ':family_with_two_fathers_and_son:',
        'Familie: Mensch, Mensch, Junge',
        ':man:'
    ],
    '👨‍👨‍👧': [
        'Familie mit zwei Vätern und Tochter',
        ':family_with_two_fathers_and_daughter:',
        'Familie: Mensch, Mensch, Mädchen,',
        ':man:'
    ],
    '👨‍👨‍👧‍👦': [
        'Familie mit zwei Vätern, Sohn und Tochter',
        ':family_with_two_fathers_son_and_daughter:',
        'Familie: Man, Man, Mädchen, Junge',
        ':man:'
    ],
    '👨‍👨‍👦‍👦': [
        'Familie mit zwei Vätern und zwei Söhnen',
        ':family_with_two_fathers_and_two_sons:',
        'Familie: Man, Man, Boy, Junge',
        ':man:'
    ],
    '👨‍👨‍👧‍👧': [
        'Familie mit zwei Vätern und zwei Töchter',
        ':family_with_two_fathers_and_two_daughters:',
        'Familie: Man, Man, Mädchen, Mädchen',
        ':man:'
    ],
    '👩‍👩‍👦': [
        'Familie mit zwei Müttern und Sohn',
        ':family_with_two_mothers_and_son:',
        'Familie: Frau, Frau, Junge',
        ':woman:'
    ],
    '👩‍👩‍👧': [
        'Familie mit zwei Müttern und Tochter',
        ':family_with_two_mothers_and_daughter:',
        'Familie: Frau, Frau, Mädchen',
        ':woman:'
    ],
    '👩‍👩‍👧‍👦': [
        'Familie mit zwei Müttern, Sohn und Tochter',
        ':family_with_two_mothers_son_and_daughter:',
        'Familie: Frau, Frau, Mädchen, Junge',
        ':woman:'
    ],
    '👩‍👩‍👦‍👦': [
        'Familie mit zwei Müttern und zwei Söhnen',
        ':family_with_two_mothers_and_two_sons:',
        'Familie: Frau, Frau, Jung, Junge',
        ':woman:'
    ],
    '👩‍👩‍👧‍👧': [
        'Familie mit zwei Müttern und zwei Töchter',
        ':family_with_two_mothers_and_two_daughters:',
        'Familie: Frau, Frau, Mädchen, Mädchen',
        ':woman:'
    ],
    '👨‍👦': [
        'Familie mit Vater und Sohn',
        ':family_with_father_and_son:',
        'Familie: Man, Junge',
        ':man:'
    ],
    '👨‍👧': [
        'Familie mit Vater und Tochter',
        ':family_with_father_and_daughter:',
        'Familie: Mensch, Mädchen,',
        ':man:'
    ],
    '👨‍👦‍👦': [
        'Familie mit Vater und zwei Söhne',
        ':family_with_father_and_two_sons:',
        'Familie: Man, Jung, Junge',
        ':man:'
    ],
    '👨‍👧‍👦': [
        'Familie mit Vater, Sohn und Tochter',
        ':family_with_father_son_and_daughter:',
        'Familie: Man, Mädchen, Junge',
        ':man:'
    ],
    '👨‍👧‍👧': [
        'Familie mit Vater und zwei Töchter',
        ':family_with_father_and_two_daughters:',
        'Familie: Man, Mädchen, Mädchen',
        ':man:'
    ],
    '👩‍👦': [
        'Familie mit Mutter und Sohn',
        ':family_with_mother_and_son:',
        'Familie: Frau, Junge',
        ':woman:'
    ],
    '👩‍👧': [
        'Familie mit Mutter und Tochter',
        ':family_with_mother_and_daughter:',
        'Familie: Frau, Mädchen',
        ':woman:'
    ],
    '👩‍👦‍👦': [
        'Familie mit Mutter und zwei Söhne',
        ':family_with_mother_and_two_sons:',
        'Familie: Frau, Jung, Junge',
        ':woman:'
    ],
    '👩‍👧‍👦': [
        'Familie mit Mutter, Sohn und Tochter',
        ':family_with_mother_son_and_daughter:',
        'Familie: Frau, Mädchen, Junge',
        ':woman:'
    ],
    '👩‍👧‍👧': [
        'Familie mit Mutter und zwei Töchter',
        ':family_with_mother_and_two_daughters:',
        'Familie: Frau, Mädchen, Mädchen',
        ':woman:'
    ],
    '💑{{skin_tone}}': [
        'Paar mit Herz',
        ':couple_with_heart:',
        'Paar in Liebe',
        'Liebevolles Paar',
        'Neutrales Paar Geschlecht',
        ':person:'
    ],
    '👩‍❤️‍👨': [
        'Mann und Frau mit Herz',
        ':man_and_woman_with_heart:',
        'Paar in Liebe',
        'Liebevolles Paar',
        'Paar mit Herz'
    ],
    '👨‍❤️‍👨': [
        'Zwei Männer mit Herz',
        ':two_men_with_heart:',
        'Paar mit Herz: Mensch, Mann',
        ':man:'
    ],
    '👩‍❤️‍👩': [
        'Zwei Frauen mit Herz',
        ':two_women_with_heart:',
        'Paar mit Herz: Frau, Frau',
        ':woman:'
    ],
    '💏{{skin_tone}}': [
        'Paarküsse',
        ':couple_kissing:',
        'Kuss',
        'Geschlechtsneutrales Paar Kissing',
        ':person:'
    ],
    '👩‍❤️‍💋‍👨': [
        'Mann und Frau Küssen',
        ':man_and_woman_kissing:'
    ],
    '👨‍❤️‍💋‍👨': [
        'Zwei Männer Küssen',
        ':two_men_kissing:',
        'Mann und Mann küssen',
        ':man:'
    ],
    '👩‍❤️‍💋‍👩': [
        'Zwei Frauen küssen',
        ':two_women_kissing:',
        'Frauen und Frauen Küssen',
        ':woman:'
    ],
    '💆{{skin_tone}}‍♂️': [
        'Man bekomme Kopfmassage',
        ':man_getting_head_massage:',
        ':getting_head_massage:',
        ':man:'
    ],
    '💆{{skin_tone}}‍♀️': [
        'Frauen bekommen Kopfmassage',
        ':woman_getting_head_massage:',
        ':getting_head_massage:',
        ':woman:'
    ],
    '💆{{skin_tone}}': [
        'Person bekommt Kopfmassage',
        ':person_getting_head_massage:',
        ':getting_head_massage:',
        ':person:'
    ],
    '💇{{skin_tone}}‍♂️': [
        'Mann Haircut',
        ':man_getting_haircut:',
        ':getting_haircut:',
        ':man:'
    ],
    '💇{{skin_tone}}‍♀️': [
        'Frauen bekommen Haarschnitt',
        ':woman_getting_haircut:',
        ':getting_haircut:',
        ':woman:'
    ],
    '💇{{skin_tone}}': [
        'Person Haircut bekommen',
        ':person_getting_haircut:',
        ':getting_haircut:',
        ':person:'
    ],
    '🛌{{skin_tone}}': [
        'Schlafende Unterkunft',
        ':sleeping_accommodation:',
        'Person im Bett',
        'Person schlafen'
    ],
    '🧌': [
        'Troll',
        ':troll:'
    ],
    '👺': [
        'Goblin',
        ':goblin:',
        'Lange Nase',
        'Rote Maske',
        'Tengu',
        'Japanischer Goblin'
    ]
};
/*animals*/
emojis_language[lang][4] = {
    '😺': [
        'Grinningkatze',
        ':happy_cat:',
        ':smiling_cat:',
        '::):',
        'Fröhliche Katze',
        'Lächelnde Katze',
        'Glückliche Katzenfigur',
        'Lächelnde Katzenfigur mit offenem Mund'
    ],
    '😸': [
        'Traubenkatze mit lächelnden Augen',
        ':grinning_cat:',
        '::D:',
        'Grinningkatze',
        'Fröhliche Katze',
        'Traubenkatze Gesicht'
    ],
    '😹': [
        'Katze mit Tränen der Freude',
        ':laughing_cat:',
        '::):',
        'Glückliche Tränenkatze',
        'Lachende Katze'
    ],
    '😻': [
        'Lächelnde Katze mit Herzaugen',
        ':heart_eyes_cat:',
        ':*.*:',
        'Herzaugenkatze',
        'Liebende Katze',
        'Lächelnde Katzenfigur mit Herz geformten Augen'
    ],
    '😼': [
        'Katze mit Wry Lächeln',
        ':cat_with_wry_smile:',
        'Smirking Katze',
        'Smirking Katzenfigur',
        'Katze Gesicht mit Wry Lächeln'
    ],
    '😽': [
        'Kusskatze',
        ':kissing_cat:',
        '::*:',
        'Küsende Katzenfigur',
        'Katzen-Gesicht mit geschlossenen Augen küssen'
    ],
    '🙀': [
        'Tragekatze',
        ':weary_cat:',
        '::O:',
        'Verarmte Katze',
        'Schreien Katze',
        'Katzenfigur Schreien in Angst',
        'Katzen-Gesicht'
    ],
    '😿': [
        'Weinende Katze',
        ':crying_cat:',
        '::(:',
        'Traurige Katze',
        'Weinende Katzenfigur'
    ],
    '😾': [
        'Pouting Katze',
        ':pouting_cat:',
        'Grumpy Cat',
        'Katzenfigur'
    ],
    '🙈': [
        'See-No-bösartiger Affe',
        'Affen',
        ':see-no-evil_mokey:',
        ':see_no_evil_mokey:',
        ':monkey:',
        'Mizaru',
        'Affenabdeckung'
    ],
    '🙉': [
        'Hear-No-bösartiger Affe',
        'Affen',
        ':hear-no-evil_monkey:',
        ':hear_no_evil_monkey:',
        ':monkey:',
        'Kikazaru',
        'Affenabdeckung'
    ],
    '🙊': [
        'Bösartiger Affe sprechen',
        'Affen',
        ':speak-no-evil_monkey:',
        ':speak_no_evil_monkey:',
        ':monkey:',
        'Iwazaru',
        'Affe-Covering-Mund',
        'Kein Sprechen'
    ],
    '🐵': [
        'Affenfackel',
        ':monkey_face:',
        'Affen',
        'Affenkopf'
    ],
    '🐒': [
        'Affen',
        ':monkey:',
        'Frecher Affen'
    ],
    '🦍': [
        'Gorilla',
        ':gorilla:'
    ],
    '🐶': [
        'Hundegesicht',
        ':dog_face:',
        'Hund',
        'Welpe'
    ],
    '🐕': [
        'Hund',
        ':dog:',
        'Doggo',
        'Akita Inu'
    ],
    '🦮': [
        'Augenhund sehen',
        ':seeing_eye_dog:',
        'Guide Hund'
    ],
    '🐕‍🦺': [
        'Service-Hund',
        ':service_dog:'
    ],
    '🐩': [
        'Poodle',
        ':poodle:',
        'Hund',
        'Miniatur-Poodle',
        'Standard Poodle',
        'Spielzeug-Poodle'
    ],
    '🐺': [
        'Wolf',
        ':wolf:',
        'Wolfsgesicht',
        ':gray:',
        ':grey:'
    ],
    '🦊': [
        'Fuchs',
        ':fox:',
        'Fuchs Gesicht',
        ':orange:'
    ],
    '🦝': [
        'Raccoon',
        ':raccoon:'
    ],
    '🐱': [
        'Katzenfigur',
        ':cat_face:',
        ':3',
        'Kätzchen',
        'Jörg'
    ],
    '🐈': [
        'Katze',
        ':cat:',
        'Hauskatze',
        'Katze',
        'Housecat'
    ],
    '🐈‍⬛': [
        'Schwarze Katze',
        ':black_cat:',
        ':black:'
    ],
    '🦁': [
        'Löwe',
        ':lion:',
        'Löwe Gesicht'
    ],
    '🐯': [
        'Tiger-Gesicht',
        ':tiger_face:',
        'Niedriger Tiger'
    ],
    '🐅': [
        'Tiger',
        ':tiger:',
        'Bengaltiger Tiger'
    ],
    '🐆': [
        'Leopard',
        ':leopard:',
        'Afrikanischer Leopard',
        'Jaguar'
    ],
    '🐴': [
        'Pferdegesicht',
        ':horse_face:',
        'Pferdekopf'
    ],
    '🐎': [
        'Pferd',
        ':horse:',
        'Galoppierendes Pferd',
        'Rennpferd'
    ],
    '🦄': [
        'Einhorn',
        ':unicorn:',
        'Einhorn Gesicht'
    ],
    '🦓': [
        'Zebra',
        ':zebra:',
        'Zebra Gesicht',
        ':white:',
        ':black:'
    ],
    '🦌': [
        'Hirsch',
        ':deer:',
        'Buck',
        'Rentier',
        'Stag'
    ],
    '🐮': [
        'Kuh Gesicht',
        ':cow_face:',
        'Kuh',
        'Glückliche Kuh'
    ],
    '🐂': [
        'Ox',
        ':ox:',
        'Bulle',
        'Bullock',
        'Ochsen',
        'Lenker'
    ],
    '🐃': [
        'Wasserbüffel',
        ':water_buffalo:',
        'Buffalo',
        'Binnenwasserbüffel'
    ],
    '🐄': [
        'Kuh',
        ':cow:',
        'Milchkuh'
    ],
    '🐷': [
        'Schweinefleisch',
        ':pig_fase:',
        'Schwein',
        'Schweinekopf',
        ':pink:'
    ],
    '🐖': [
        'Schwein',
        ':pig:',
        'Haufen',
        'Sow',
        ':pink:'
    ],
    '🐗': [
        'Wildschwein',
        ':boar:',
        'Warthog',
        'Wildschwein',
        'Wildschwein'
    ],
    '🐽': [
        'Schwein Nase',
        ':pig_nose:'
    ],
    '🐏': [
        'Ram',
        ':ram:',
        'Schafe'
    ],
    '🐑': [
        'Ewe',
        ':ewe:',
        'Lamb',
        'Schafe'
    ],
    '🐐': [
        'Ziege',
        ':goat:'
    ],
    '🐪': [
        'Marie',
        ':camel:',
        'Arabischer Kamel',
        'Dromedärkamel',
        'Eins-Spindel-Kamel'
    ],
    '🐫': [
        'Zwei-Hump-Kamel',
        ':two-hump_camel:',
        ':two_hump_camel:',
        'Asiatischer Kamel',
        'Bactrian Kamel'
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
        'Elefanten',
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
        'Maus-Gesicht',
        ':mouse_face:',
        'Maus'
    ],
    '🐁': [
        'Maus',
        ':mouse:',
        'Dennis',
        'Nagetiere',
        'Mäuse'
    ],
    '🐀': [
        'Ratte',
        ':rat:',
        'Nagetiere'
    ],
    '🐹': [
        'Hamster',
        ':hamster:',
        'Hamster Gesicht'
    ],
    '🐰': [
        'Kaninchen-Gesicht',
        ':rabbit_face:',
        'Osterhasen'
    ],
    '🐇': [
        'Kaninchen',
        'Bunny',
        ':rabbit:',
        'Hasenkaninchen'
    ],
    '🐿️': [
        'Chipmunk',
        ':chipmunk:',
        'Eichhörnchen'
    ],
    '🦔': [
        'Hedgehog',
        ':hedgehog:'
    ],
    '🦇': [
        'Fledermaus',
        ':bat:',
        'Batman',
        ':black:'
    ],
    '🐻': [
        'Bär',
        ':bear:',
        'Bären Gesicht',
        'Teddy Bär',
        ':brown:'
    ],
    '🐨': [
        'Koala',
        ':koala:',
        'Koala-Gesicht'
    ],
    '🐼': [
        'Panda',
        ':panda:',
        'Panda Gesicht'
    ],
    '🦘': [
        'Kangaroo',
        ':kangaroo:',
        'Roo'
    ],
    '🦡': [
        'Abzeichen',
        ':badger:'
    ],
    '🦃': [
        'Türkei',
        ':turkey:',
        'Thanksgiving Türkei',
        'Wilde Türkei'
    ],
    '🐔': [
        'Huhn',
        ':chicken:',
        'Hen'
    ],
    '🐓': [
        'Hannah',
        ':cock:',
        'Rooster',
        'Cockerel'
    ],
    '🐣': [
        'Brütenkäse',
        ':hatching_chick:',
        'Babyhuhn',
        'Hühnerbrüten',
        ':yellow:'
    ],
    '🐤': [
        'Baby Kick',
        ':baby_chick:',
        'Gelber Vogel',
        ':yellow:'
    ],
    '🐥': [
        'Babykäse vor der Haube',
        ':front_baby_chick:',
        'Baby Kick',
        'Stehender Witz',
        ':yellow:'
    ],
    '🐦': [
        'Vogel',
        ':bird:'
    ],
    '🐧': [
        'Penguin',
        ':penguin:'
    ],
    '🕊️': [
        'Taube',
        ':Dove:',
        'Taube des Friedens',
        ':white:'
    ],
    '🦅': [
        'Adler',
        ':Eagle:',
        'Kahlenadler'
    ],
    '🦆': [
        'Ente',
        ':Duck:'
    ],
    '🦢': [
        'Schwan',
        ':swan:',
        ':white:'
    ],
    '🦉': [
        'Eule',
        ':owl:',
        ':brown:'
    ],
    '🦚': [
        'Friedhof',
        ':peacock:'
    ],
    '🦜': [
        'Papagei',
        ':parrot:'
    ],
    '🐸': [
        'Frosch',
        ':frog:',
        'Toad',
        'Froschgefahr',
        ':green:'
    ],
    '🐊': [
        'Krokodil',
        ':crocodile:',
        'Alligator',
        'Kreuz',
        ':green:'
    ],
    '🐢': [
        'Schildkröte',
        ':turtle:',
        'Tortoise',
        ':green:'
    ],
    '🦎': [
        'Echse',
        ':lizard:',
        'Günther',
        ':green:'
    ],
    '🐍': [
        'Schlange',
        ':snake:',
        'Schlange'
    ],
    '🐲': [
        'Drachenfigur',
        ':dragon_face:',
        'Drachenkopf'
    ],
    '🐉': [
        'Drache',
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
        'Wal ausspucken',
        ':spouting_whale:',
        'Niedrigwal'
    ],
    '🐋': [
        'Wal',
        ':whale:'
    ],
    '🐬': [
        'Delphine',
        ':dolphin:'
    ],
    '🐟': [
        'Fisch',
        ':fish:',
        'Süßwasserfisch'
    ],
    '🐠': [
        'Tropischer Fisch',
        ':tropical_fish:',
        'Fisch',
        'Gelber Kuhfisch'
    ],
    '🐡': [
        'Blowfish',
        ':blowfish:',
        'Fugu',
        'Pufferfisch'
    ],
    '🦈': [
        'Hai',
        ':shark:',
        'Großer Weißer Hai'
    ],
    '🐙': [
        'Oktopus',
        ':octopus:'
    ],
    '🐚': [
        'Spiralhülle',
        ':spiral_shell:',
        'Saisons',
        'Schale'
    ],
    '🐌': [
        'Nagel',
        ':snail:',
        'Slug',
        'Gartenschlinge'
    ],
    '🦋': [
        'Schmetterling',
        ':butterfly:'
    ],
    '🐛': [
        'Bug',
        ':bug:',
        'Catersäule',
        'Insekten'
    ],
    '🐜': [
        'Ant',
        ':ant:',
        'Bug',
        'Insekten'
    ],
    '🐝': [
        'Honigbiene',
        ':honeybee:',
        'Biene',
        'Bumblebee',
        ':yellow:',
        ':black:'
    ],
    '🐞': [
        'Lady Käfer',
        ':lady_beetle:',
        'Ladybird',
        'Ladybug',
        'Bug'
    ],
    '🦗': [
        'Cricket',
        ':cricket:',
        'Grasshopper'
    ],
    '🕷️': [
        'Spinne',
        ':spider:'
    ],
    '🦂': [
        'Skorpion',
        ':scorpion:'
    ],
    '🦟': [
        'Mücke',
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
        'Garnelen',
        ':shrimp:',
        'Prawn'
    ],
    '🦑': [
        'Tintenfisch',
        ':squid:'
    ],
    '🦧': [
        'Orangutan',
        ':orangutan:'
    ],
    '🦥': [
        'Faultier',
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
        'Biber',
        ':beaver:'
    ],
    '🐻‍❄️': [
        'Eisbär',
        ':polar_bear:',
        ':white:'
    ],
    '🦤': [
        'Dodo',
        ':dodo:'
    ],
    '🦭': [
        'Siegel',
        ':seal:'
    ],
    '🪲': [
        'Käfer',
        ':beetle:'
    ],
    '🪳': [
        'Kakaos',
        ':cockroach:'
    ],
    '🪰': [
        'Fliegen',
        ':fly:'
    ],
    '🪱': [
        'Wurm',
        ':worm:'
    ],
    '🦩': [
        'Flamingo',
        ':flamingo:'
    ],
    '🪹': [
        'Leeres Nest',
        ':empty_nest:',
        'Vögel',
        'Zuhause'
    ],
    '🪺': [
        'Nest mit Eiern',
        ':nest_with_eggs:',
        'Vögel',
        'Zuhause'
    ]
};
/*symbols*/
emojis_language[lang][5] = {
    '💘': [
        'Herz mit Pfeil',
        ':heart_with_arrow:',
        'Amor Pfeil',
        'Lovestruck',
        ':pink:'
    ],
    '💝': [
        'Herz mit Ribbon',
        ':heart_with_ribbon:',
        'Schokoladenkiste',
        'Geschenkbox',
        'Geschenkherz',
        ':red:'
    ],
    '💖': [
        'Sparkling Heart',
        ':sparkling_heart:',
        'Sparkle-Herz',
        'Funkelndes Herz',
        'Sterne Herz',
        ':pink:'
    ],
    '💗': [
        'Wachendes Herz',
        ':growing_heart:',
        'Mehrere Herzen',
        'Dreifaches Herz',
        ':pink:'
    ],
    '💓': [
        'Schlagen Herz',
        ':beating_heart:',
        'Herzalarm',
        'Heartbeat',
        'Wifi Herz',
        ':pink:'
    ],
    '💞': [
        'Revolving Hearts',
        ':revolving_hearts:',
        'Zwei Herzen',
        ':pink:'
    ],
    '💕': [
        'Zwei Herzen',
        ':two_hearts:',
        'Kleine Herzen',
        'Zwei rosa Herzen',
        ':pink:'
    ],
    '💟': [
        'Herz Dekoration',
        ':heart_decoration:',
        ':purple:'
    ],
    '❣️': [
        'Herz-Aufruhr',
        ':heart_exclamation:',
        'Herz über Punkt',
        'Rotes Herz als Aufruhrzeichen',
        'Schweres Herz Anrufezeichen Ornament',
        ':red:'
    ],
    '💔': [
        'Zerbrochenes Herz',
        ':broken_heart:',
        'Zerbrechendes Herz',
        'Brokenherz',
        'Herz kaputt',
        ':red:'
    ],
    '❤️': [
        'Ich liebe dich',
        ':red_heart:',
        'Rotes Herz',
        'Herz',
        'Liebesherz',
        'Rotes Herz',
        ':red:'
    ],
    '🧡': [
        'Oranges Herz',
        ':orange_heart:',
        'Ich liebe dich',
        ':orange:'
    ],
    '💛': [
        'Gelbes Herz',
        ':yellow_heart:',
        '#1 BF Snapchat',
        'Gold Herz',
        'Ich liebe dich',
        ':yellow:'
    ],
    '💚': [
        'Grünes Herz',
        ':green_heart:',
        'Eifersüchtiges Herz',
        'Ich liebe dich',
        ':green:'
    ],
    '💙': [
        'Blaues Herz',
        ':blue_heart:',
        'Ich liebe dich',
        ':blue:'
    ],
    '💜': [
        'Violettes Herz',
        ':purple_heart:',
        'Ich liebe dich',
        ':purple:'
    ],
    '🖤': [
        'Schwarzes Herz',
        ':black_heart:',
        'Dunkles Herz',
        'Ich liebe dich',
        ':black:'
    ],
    '🤍': [
        'Weißes Herz',
        ':white_heart:',
        'Ich liebe dich',
        ':white:'
    ],
    '🤎': [
        'Braunes Herz',
        ':brown_heart:',
        'Ich liebe dich',
        ':brown:'
    ],
    '💯': [
        'Hundert Punkte',
        ':hundred_points:',
        '100',
        '%',
        'Behalte es 100',
        'Perfekte Punktzahl',
        'Hundert Punkte Symbol'
    ],
    '💬': [
        'Sprechballon',
        ':speech_balloon:',
        'Chatblase',
        'Sprechblase',
        ':white:'
    ],
    '💭': [
        'Gedankenballon',
        ':thought_balloon:',
        'Denkende Blase',
        'Gedankenblase',
        ':white:'
    ],
    '💤': [
        'Zzz',
        ':zzz:',
        'Schlafzeit',
        'Langem',
        'Schlaf',
        'Schlafschild',
        'Schlafsymbol'
    ],
    '♠': [
        'Spade-Anzug',
        ':spade_suit:',
        'Spades',
        'Black Spade Suit'
    ],
    '♥': [
        'Herz-Anzug',
        ':heart_suit:',
        'Karte mit Herz',
        'Herzen',
        'Schwarzes Herz Anzug'
    ],
    '♦': [
        'Diamant-Anzug',
        ':diamond_suit:',
        'Diamanten',
        'Schwarzer Diamant-Anzug'
    ],
    '♣': [
        'Klub-Anzug',
        ':club_suit:',
        'Vereine',
        'Schwarzclub-Anzug'
    ],
    '🏧': [
        'Geldautomaten-Schild',
        ':atm_sign:',
        'Geldautomat',
        'Automatisierte Telleer Maschine',
        ':blue:'
    ],
    '🎧': [
        'Kopfhörer',
        ':headphone:',
        'Kopfhörer',
        'iPod',
        'Kopfhörer'
    ],
    '🎵': [
        'Musiknotiz',
        ':musical_note:',
        'Belichtetes Paar achter Notizen',
        'Belichtetes Paar Quaver',
        'Musiknotiz'
    ],
    '🎶': [
        'Musiknotizen',
        ':musical_notes:',
        'Musik',
        'Musiknotizen',
        'Singen',
        'Mehrere Musiknotizen'
    ],
    '🔔': [
        'Glocke',
        ':bell:',
        'Freiheitsglocke',
        'Ringer',
        'Hochzeitsglocke',
        ':yellow:'
    ],
    '🔕': [
        'Glocke mit Hieb',
        ':bell_with_slash:',
        'Benachrichtigungen',
        'Klingelton deaktiviert',
        'Stumme Glocke',
        'Glocke mit Abbruch Strich',
        ':yellow:'
    ],
    '🔈': [
        'Lautsprecher niedriger Lautstärke',
        ':speaker_low_volum:',
        'Lautstärke',
        'Sprecher'
    ],
    '🔉': [
        'Lautsprecher Mittlere Lautstärke',
        ':speaker_medium_volume:',
        'Lautstärke reduzieren',
        'Lautsprecher mit mittlerer Lautstärke',
        'Lautsprecher mit einer Klangwelle'
    ],
    '🔊': [
        'Lautsprecher Hohe Lautstärke',
        ':speaker_high_volume:',
        'Lautstärke erhöhen',
        'Lautsprecher mit drei Schallwellen'
    ],
    '🔇': [
        'Lautsprecher stumm',
        ':muted_speaker:',
        'Lautstärke stumm',
        'Lautsprecher mit Abbruch Strich'
    ],
    '📢': [
        'Loudspeaker',
        ':loudspeaker:',
        'Mitteilung',
        'PA System',
        'Öffentliche Adresse Lautsprecher'
    ],
    '⛔': [
        'Kein Eintrag',
        ':no_entry:',
        ':red:'
    ],
    '🚫': [
        'Verboten',
        ':prohibited:',
        'Gesperrt',
        'Kreis-Backslash',
        'Nein',
        'Roter Kreis überschritten',
        'Eingeschränkt',
        'Kein Eintragszeichen',
        ':red:'
    ],
    '🚳': [
        'Keine Fahrräder',
        ':no_bicycles:',
        'Kein Fahrradschild',
        ':red:',
        ':black:'
    ],
    '🚭': [
        'Kein Rauchen',
        ':no_smoking:',
        'Kein Rauchen Symbol',
        ':red:',
        ':black:'
    ],
    '🚯': [
        'Kein Abfall',
        ':no_littering:',
        'Nicht ohne Wurfsymbol',
        ':red:',
        ':black:'
    ],
    '🚱': [
        'Nicht Trinkwasser',
        ':non-potable_water:',
        ':non_potable_water:',
        'Kein Wasser',
        'Kein Trinkwasser',
        'Nicht-Trinkwasser-Symbol',
        ':red:',
        ':black:'
    ],
    '🚷': [
        'Keine Fußgänger',
        ':no_pedestrians:',
        'Keine Personen',
        'Kein Wandern',
        ':red:',
        ':black:'
    ],
    '🔞': [
        'Niemand unter achtzehn',
        ':no_one_under_18:',
        'NSFW',
        'Niemand unter achtzehn Symbol',
        '18',
        ':red:',
        ':black:'
    ],
    '📵': [
        'Keine Mobiltelefone',
        ':no_mobile_phones:',
        'Keine Handys',
        'Keine Telefone',
        'Kein Smartphone',
        ':red:',
        ':black:'
    ],
    '☢️': [
        'Radioactive',
        ':radioactive:',
        'Internationales Strahlungssymbol',
        'Nukleare',
        'Radioaktives Schild',
        ':orange:'
    ],
    '☣️': [
        'Biohazard',
        ':biohazard:',
        'Biohazard Schild',
        ':orange:'
    ],
    '⬆️': [
        'Pfeil oben',
        ':up_arrow_button:',
        'Pfeil nach oben',
        'Aufwärts schwarzer Pfeil',
        ':blue:'
    ],
    '↗️': [
        'Pfeilschaltfläche oben rechts',
        ':up-right_arrow_button:',
        ':up_right_arrow_button:',
        'Diagonaler Pfeil oben rechts',
        'Nordost-Pfeil',
        ':blue:'
    ],
    '➡️': [
        'Pfeilschaltfläche rechts',
        ':right_arrow_button:',
        'Pfeil nach rechts',
        'Schwarzer Pfeil rechts',
        ':blue:'
    ],
    '↘️': [
        'Pfeilschaltfläche unten rechts',
        ':down-right_arrow_button:',
        ':down_right_arrow_button:',
        'Diagonaler Pfeil runter/rechts',
        'Südostpfeil',
        ':blue:'
    ],
    '⬇️': [
        'Pfeilschaltfläche',
        ':down_arrow_button:',
        'Pfeil nach unten',
        'Abwärtsschwarzer Pfeil',
        ':blue:'
    ],
    '↙️': [
        'Pfeil runter-links',
        ':down-left_arrow_button:',
        ':down_left_arrow_button:',
        'Diagonaler Pfeil runter-links',
        'Südwestpfeil',
        ':blue:'
    ],
    '⬅️': [
        'Pfeiltaste links',
        ':left_arrow_button:',
        'Pfeil nach links',
        'Linker schwarzer Pfeil',
        ':blue:'
    ],
    '↖️': [
        'Pfeiltaste oben links',
        ':up-left_arrow_button:',
        ':up_left_arrow_button:',
        'Diagonaler Pfeil oben links',
        'Nordwestpfeil',
        ':blue:'
    ],
    '↕️': [
        'Pfeiltaste oben',
        ':up-down_arrow_button:',
        ':up_down_arrow_button:',
        'Vertikale Pfeile',
        'Pfeil nach oben',
        ':blue:'
    ],
    '↔️': [
        'Pfeilschaltfläche links rechts',
        ':left-right_arrow_button:',
        ':left_right_arrow_button:',
        'Horizontale Pfeile',
        'Seitliche Pfeile',
        'Rechter Pfeil links',
        ':blue:'
    ],
    '↩️': [
        'Linksknopf des rechten Pfeiles',
        ':right_arrow_curving_left_button:',
        'E-Mail Antwort',
        'Linker gebogener Pfeil',
        'Pfeil links mit Hook',
        ':blue:'
    ],
    '↪️': [
        'Linkspfeil Kurven-Rechts Taste',
        ':left_arrow_curving_right_button:',
        'E-Mail-Weiterleitung',
        'Rechter gebogener Pfeil',
        'Rechter Pfeil mit Hook',
        ':blue:'
    ],
    '⤴️': [
        'Rechter Pfeil Kurven-Knopf',
        ':right_arrow_curving_up_button:',
        'Pfeil zeigt nach rechts und Kurven nach oben',
        ':blue:'
    ],
    '⤵️': [
        'Rechter Pfeil Kurven-unten Taste',
        ':right_arrow_curving_down_button:',
        'Gebogener Pfeil nach unten',
        'Pfeil zeigt nach rechts und Kurven nach unten',
        ':blue:'
    ],
    '🔃': [
        'Vertikale Pfeile im Uhrzeigersinn',
        ':clockwise_vertical_button:',
        'Im Uhrzeigersinn abwärts und höher öffnen Kreispfeile',
        ':blue:'
    ],
    '🔄': [
        'Pfeiltaste gegen den Uhrzeigersinn',
        ':counterclockwise_button:',
        'Aktualisieren',
        'Drehen',
        'Wechseln',
        'Gegen Uhrzeigersinn Pfeile',
        'Abwärts- und aufwärtsgerichtete Kreispfeile nach oben nach oben',
        ':blue:'
    ],
    '🔙': [
        'Pfeil hinten',
        ':back_arrow:',
        'Zurück',
        'Zurück mit Links-Pfeil oben',
        ':black:'
    ],
    '🔚': [
        'Endpfeil',
        ':end_arrow:',
        'Ende',
        'Ende mit Links-Pfeil oben',
        ':black:'
    ],
    '🔛': [
        'An! Pfeil',
        ':on_arrow:',
        'An',
        'Weiter mit Aufrufezeichen mit linker rechter Pfeil oben',
        ':black:'
    ],
    '🔜': [
        'Bald Pfeil',
        ':soon_arrow:',
        'Bald',
        'Bald mit dem rechten Pfeil oben',
        ':black:'
    ],
    '🔝': [
        'Oberer Pfeil',
        ':top_arrow:',
        'Oben',
        'Oben mit Aufwärtspfeil oben',
        ':black:'
    ],
    '🛐': [
        'Andachtsort',
        ':place_of_worship:',
        'Religiöses Gebäude',
        ':purple:'
    ],
    '⚛️': [
        'Atom-Symbol',
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
        'Stern von David',
        ':star_of_david:',
        'Magen David',
        ':purple:'
    ],
    '☸️': [
        'Dharma-Rad',
        ':wheel_of_dharma:',
        'Helm',
        ':purple:'
    ],
    '☯️': [
        'Yin Yang',
        ':yin_yang:',
        ':purple:'
    ],
    '✝️': [
        'Lateinisches Kreuz',
        ':latin_cross:',
        'Christliches Kreuz',
        ':purple:'
    ],
    '☦️': [
        'Orthodoxes Kreuz',
        ':orthodox_cross:',
        ':purple:'
    ],
    '☪️': [
        'Stern und Halbmond',
        ':star_and_crescent:',
        ':purple:'
    ],
    '☮️': [
        'Friedenssymbol',
        ':peace:',
        'Friedensschild',
        ':purple:'
    ],
    '🕎': [
        'Menora',
        ':menorah:',
        'Candelabrum',
        'Kerzen',
        'Chanukiah',
        'Menora',
        'Menorah mit neun Zweigen',
        ':purple:'
    ],
    '🔯': [
        'Gepunkteter sechspunkteter Stern',
        ':dotted_six-pointed_star:',
        ':dotted_six_pointed_star:',
        'Sechs Punkte mit mittlerem Punkt',
        ':purple:'
    ],
    '♈': [
        'Trauben',
        ':aries:',
        ':zodiac:',
        'Sternzeichen',
        ':purple:'
    ],
    '♉': [
        'Taurus',
        ':taurus:',
        ':zodiac:',
        'Sternzeichen',
        ':purple:'
    ],
    '♊': [
        'Gemini',
        ':gemini:',
        ':zodiac:',
        'Sternzeichen',
        ':purple:'
    ],
    '♋': [
        'Krebs',
        ':cancer:',
        ':zodiac:',
        'Sternzeichen',
        ':purple:'
    ],
    '♌': [
        'Leo',
        ':leo:',
        ':zodiac:',
        'Sternzeichen',
        ':purple:'
    ],
    '♍': [
        'Jungfrau',
        ':virgo:',
        ':zodiac:',
        'Sternzeichen',
        ':purple:'
    ],
    '♎': [
        'Bibliotheken',
        ':libra:',
        ':zodiac:',
        'Sternzeichen',
        ':purple:'
    ],
    '♏': [
        'Skorpion',
        ':scorpio:',
        ':zodiac:',
        'Skorpion',
        'Sternzeichen',
        ':purple:'
    ],
    '♐': [
        'Sagittarius',
        ':sagittarius:',
        ':zodiac:',
        'Sternzeichen',
        ':purple:'
    ],
    '♑': [
        'Capricorn',
        ':capricorn:',
        ':zodiac:',
        'Sternzeichen',
        ':purple:'
    ],
    '♒': [
        'Aquarius',
        ':aquarius:',
        ':zodiac:',
        'Sternzeichen',
        ':purple:'
    ],
    '♓': [
        'Pisces',
        ':pisces:',
        ':zodiac:',
        'Sternzeichen',
        ':purple:'
    ],
    '⛎': [
        'Ophiuchus',
        ':ophiuchus:',
        ':zodiac:',
        'Sternzeichen',
        ':purple:'
    ],
    '⏭️': [
        'Symbol vorwärts springen',
        'Schwarzes Rechts-Punkt Doppeltes Dreieck mit vertikaler Leiste',
        ':skip_forward_button:',
        'Nächster Track Button',
        ':blue:'
    ],
    '⏮️': [
        'Rückwärtssymbol überspringen',
        'Schwarzes linkes Dreieck mit vertikaler Leiste',
        ':skip_backward_button:',
        'Letzter Track Button',
        'Vorheriger Track',
        ':blue:'
    ],
    '⏯️': [
        'Wiedergabe oder Pause Button',
        'Schwarzes rechtes Dreieck mit doppelter vertikaler Leiste',
        ':play_button:',
        ':pause_button:',
        ':play_or_pause_button:',
        'Spielsymbol',
        'Symbol pausieren',
        ':blue:'
    ],
    '🔀': [
        'Track-Button mischen',
        ':shuffle_tracks_button:',
        'Pfeil nach rechts verdreht',
        ':blue:'
    ],
    '🔁': [
        'Wiederholen Taste',
        ':repeat_button:',
        'Schleifensymbol',
        'Retweet',
        'Im Uhrzeigersinn rechts und links öffnen Kreispfeile',
        ':blue:'
    ],
    '🔂': [
        'Einzelne Taste wiederholen',
        ':repeat_single_button:',
        'Kreispfeile mit Nummer 1',
        'Loop Einmal Symbol',
        'Einzelnes Spursymbol wiederholen',
        'Im Uhrzeigersinn rechts und links öffnen Kreispfeile mit einem umkreisten Ein-Overlay',
        ':blue:'
    ],
    '▶️': [
        'Play-Button',
        ':play_button:',
        'Rechtes Dreieck',
        'Dreieck mit rechter Markierung',
        'Schwarzes Rechtes Dreieck',
        ':blue:'
    ],
    '◀️': [
        'Reverse Taste',
        ':reverse_button:',
        'Linkes Dreieck',
        'Linkes Dreieck',
        'Schwarzes linkes Dreieck',
        ':blue:'
    ],
    '🔼': [
        'Aufwärtstaste',
        ':upwards_button:',
        'Dreieck hoch',
        'Dreieck oben',
        'Aufsteigend kleines Rotes Dreieck',
        ':blue:'
    ],
    '🔽': [
        'Abwärts-Button',
        ':downwards_button:',
        'Unten Dreieck',
        'Dreieck nach unten',
        'Kleines Rotes Dreieck nach unten',
        ':blue:'
    ],
    '⏩': [
        'Schnell-Weiterleiten-Schaltfläche',
        ':fast-forward_button:',
        ':fast_forward_button:',
        'Schnelle Weiterleitung',
        'Schnelles Vorwärtssymbol',
        'Schwarzes Rechts-Punkte-Doppeldreieck',
        ':blue:'
    ],
    '⏪': [
        'Fast Reverse Button',
        ':fast_reverse_button:',
        'Rewind',
        'Symbol wiederherstellen',
        'Schwarzes linkes Dreieck',
        ':blue:'
    ],
    '⏫': [
        'Schnell-Up-Button',
        ':fast_up_button:',
        'Doppeltes Dreieck oben',
        'Schwarzes Auf-Punkte-Doppeldreieck',
        ':blue:'
    ],
    '⏬': [
        'Schnell unten Button',
        ':fast_down_button:',
        'Doppeltes Dreieck nach unten',
        'Schwarzes Down-Punkte-Doppeldreieck',
        ':blue:'
    ],
    '⏹️': [
        'Stop-Taste',
        ':stop_button:',
        'Stoppen',
        'Symbol stoppen',
        'Schwarzes Quadrat für Stopp',
        ':blue:'
    ],
    '⏏️': [
        'Knopf auswerfen',
        ':eject_button:',
        'Eject Symbol',
        ':blue:'
    ],
    '🎦': [
        'Kino',
        ':cinema_button:',
        'Kinobildschirm',
        'Filme',
        'Film',
        'Kinosymbol',
        'Aufnahme',
        ':blue:'
    ],
    '📶': [
        'Antennenstangen',
        ':antenna_bars_button:',
        'Empfangbalken',
        'Signalstärke',
        'Stairs',
        'Signalstärke Symbol',
        'Antenne mit Balken',
        ':blue:'
    ],
    '✖️': [
        'Multiplizieren',
        ':multiply:',
        'Zeit',
        'Multiplikationssymbol',
        'Schwere Vervielfältigung X',
        ':black:'
    ],
    '➕': [
        'Plus',
        ':plus:',
        'Plus-Symbol',
        'Schweres Plus-Schild',
        ':black:'
    ],
    '➖': [
        'Minus',
        ':minus:',
        'Minus Symbol',
        'Schweres Minus-Schild',
        ':black:'
    ],
    '➗': [
        'Aufteilen',
        ':divide:',
        'Teilungssymbol',
        'Schwere Division Schild',
        ':black:'
    ],
    '🟰': [
        'Schweres Gleiches Schild',
        ':heavy_equals_sign:',
        'Gleich',
        'Ergebnis',
        ':black:'
    ],
    '♾️': [
        'Unendlichkeit',
        ':infinity:',
        'Dauerhaftes Papierschild'
    ],
    '‼️': [
        'Doppeltes Aufrufezeichen',
        ':double_exclamation_mark:',
        'Rotes Doppelausrustungszeichen',
        ':red:'
    ],
    '⁉️': [
        'Fragezeichen für Spannung',
        ':exclamation_question_mark:',
        'Rote Aufruhrmarke und Fragezeichen',
        ':red:'
    ],
    '❓': [
        'Fragezeichen',
        ':question_mark:',
        'Rote Fragezeichen',
        'Schwarzes Fragezeichen Ornament',
        ':red:'
    ],
    '❔': [
        'Weiße Fragezeichen',
        ':white_question_mark:',
        ':question_mark:',
        'Weiße Fragezeichen',
        'Weißes Fragezeichen Ornament',
        ':white:'
    ],
    '❗': [
        'Aufrufezeichen',
        ':exclamation_mark:',
        'Rotes Aufruhrzeichen',
        'Schweres Aufruhrzeichensymbol',
        ':red:'
    ],
    '❕': [
        'Weiße Ausrufezeichen',
        ':white_exclamation_mark:',
        ':exclamation_mark:',
        'Weiße Ausrufezeichen Ornament',
        ':white:'
    ],
    '⭕': [
        'Hohler Roter Kreis',
        ':hollow_red_circle:',
        'Kreis',
        'Richtig',
        'Roter Kreis',
        'Kreiszeichen',
        'Schwerer großer Kreis',
        ':red:'
    ],
    '☑️': [
        'Kontrollkästchen mit Check',
        ':check_box_with_check:',
        'V',
        'Checkbox',
        'Check-in-Box prüfen',
        'Stimmzettel mit Überprüfung'
    ],
    '✔️': [
        'Prüfzeichen',
        ':check_mark:',
        'V',
        'Prüfen',
        'Ticken',
        'Checkmark',
        'Schwere Prüfzeichen',
        ':black:'
    ],
    '❌': [
        'Kreuzzeichen',
        ':cross_mark:',
        'Kreuz',
        'X',
        ':red:'
    ],
    '✅': [
        'Markierungsschaltfläche prüfen',
        ':check_mark_button:',
        'V',
        'Grünes Prüfzeichen',
        'Grüner Tick',
        'Prüfzeichen',
        'Weißes Schwere Prüfzeichen',
        ':green:'
    ],
    '❎': [
        'Cross-Marker Button',
        ':cross_mark_button:',
        'Kreuz',
        'X',
        'X-Zeichen',
        'Negatives Quadrat Kreuzzeichen',
        ':green:'
    ],
    '#️⃣': [
        'Tastenkürzel Schild',
        ':hash_key:',
        '#',
        'Hash-Schlüssel',
        'Hashtag',
        'Oktothorpe',
        'Pfund Schlüssel',
        'Nummernschild',
        ':blue:'
    ],
    '*️⃣': [
        'Keycap Asterisk',
        ':asterisk:',
        'Stern-Tastenkappe',
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
        'Keycap Ziffern eins'
    ],
    '2️⃣': [
        'Nummer 2',
        ':number_2:',
        'Zwei Keycap Ziffern'
    ],
    '3️⃣': [
        'Nummer 3',
        ':number_3:',
        'Tastenkürzel Drei'
    ],
    '4️⃣': [
        'Nummer 4',
        ':number_4:',
        'Tastenkürzel Vier'
    ],
    '5️⃣': [
        'Nummer 5',
        ':number_5:',
        'Keycap fünf Ziffern'
    ],
    '6️⃣': [
        'Nummer 6',
        ':number_6:',
        'Keycap Sechs Ziffern'
    ],
    '7️⃣': [
        'Nummer 7',
        ':number_7:',
        'Keycap Digit Seven'
    ],
    '8️⃣': [
        'Nummer 8',
        ':number_8:',
        'Tastenkürzel Acht'
    ],
    '9️⃣': [
        'Nummer 9',
        ':number_9:',
        'Tastenkürzel Neun'
    ],
    '🔟': [
        'Nummer 10',
        ':number_10:',
        'Keycap: 10',
        '10',
        'Zehn Keycap Ziffern'
    ],
    '🔠': [
        'Input Latin Uppercase',
        ':input_latin_uppercase:',
        'ABCD',
        'Großbuchstaben',
        'Symbol für Großbuchstaben eingeben',
        'Symbol für lateinische Großbuchstaben eingeben',
        ':blue:'
    ],
    '🔡': [
        'Input Latin Lowercase',
        ':input_latin_lowercase:',
        'abcd',
        'Kleinbuchstaben',
        'Eingabesymbol für Kleinbuchstaben',
        'Eingabesymbol für kleine lateinische Buchstaben',
        ':blue:'
    ],
    '🔢': [
        'Input Numbers',
        ':input_numbers:',
        '1234',
        'Nummern',
        'Numeric Input',
        'Eingabesymbol für Zahlen',
        ':blue:'
    ],
    '🔣': [
        'Symbol für Symbole eingeben',
        ':input_symbols:',
        'Symbole',
        'Symboleingabe',
        ':blue:'
    ],
    '🔤': [
        'Input Latin Letters',
        ':input_latin_letters:',
        'abc',
        'Alphabet',
        'Briefe',
        'Eingabesymbol für Buchstaben',
        'Symbol für lateinische Buchstaben eingeben',
        ':blue:'
    ],
    '🅰️': [
        'Eine Taste (Blood Typ)',
        ':a_blood:',
        'Bluttyp A',
        'Buchstabe A',
        'Negativer Quadrat lateinischer Kapitalbuchstabe A',
        ':red:'
    ],
    '🆎': [
        'AB Button (Blood Typ)',
        ':ab_blood:',
        'Buchstaben AB',
        'Blut-Typ AB',
        'Negative Quadrate AB',
        ':red:'
    ],
    '🅱️': [
        'B-Taste (Blood Typ)',
        ':b_blood:',
        'Buchstabe B',
        'Bluttyp B',
        'Negativer Quadrierter lateinischer Kapitalbuchstabe B',
        ':red:'
    ],
    '🆑': [
        'CL Taste',
        ':cl_button:',
        'Leeren',
        'Lösche Taste',
        'CL-Zeichen',
        'Quadriertes CL',
        'Buchstaben CL',
        ':red:'
    ],
    '🆒': [
        'Cool-Button',
        ':cool_button:',
        'Kühler Platz',
        'Kühles Schild',
        'Quadrierte Cool',
        ':blue:'
    ],
    '🆓': [
        'Freier Button',
        ':free_button:',
        'Kostenlos',
        'Kostenloses Schild',
        'Quadrat frei',
        ':blue:'
    ],
    'ℹ️': [
        'Informationen',
        ':info_button:',
        'Info',
        'Kleinbuchstaben I',
        'Touristische Informationen',
        'Informationsquelle',
        ':blue:'
    ],
    '🆔': [
        'ID-Taste',
        ':id_button:',
        'ID',
        'Identifikation',
        'Identifikationszeichen',
        'Quadratierte ID',
        ':purple:'
    ],
    '🆕': [
        'Neuer Button',
        ':new_button:',
        'Neu',
        'Neues Schild',
        'Quadratiert neu',
        ':blue:'
    ],
    '🅾️': [
        'O Taste (Blood Typ)',
        ':0_blood:',
        'Bluttyp O',
        '0',
        'Negativer Quadrierter lateinischer Kapitalbuchstaben',
        'Buchstabe O',
        ':red:'
    ],
    '🆗': [
        'OK-Taste',
        ':ok_button:',
        'OK',
        'Okay',
        'Quadrat',
        'OK-Signal',
        'Quadrat OK',
        ':blue:'
    ],
    '🅿️': [
        'P-Taste',
        ':p_button:',
        ':parking_sign:',
        'Parkschild',
        'Negativer Quadrierter lateinischer Kapitalbuchstaben',
        'Buchstabe P',
        ':blue:'
    ],
    '🆘': [
        'SOS-Taste',
        ':sos_button:',
        'Notsignal',
        'Notfall',
        'SOS',
        'SOS-Signatur',
        'Quadratierte SOS',
        'Hilfe',
        ':red:'
    ],
    '🆙': [
        'Up! Button',
        ':up_button:',
        'Level höher',
        'Hoch',
        'Anmelden',
        'Quadratiert nach oben mit Aufrufezeichen',
        ':blue:'
    ],
    '🆚': [
        'Vs Button',
        ':vs_button:',
        'Quadrierte Vs',
        ':orange:'
    ],
    '🆖': [
        'NG Taste',
        ':ng_button:',
        'Quadrierte NG',
        'Kein gutes Zeichen',
        'Nicht gut',
        ':ng:',
        'Blooper',
        ':blue:'
    ],
    '🔴': [
        'Roter Kreis',
        ':red_circle:',
        'Großer Roter Kreis',
        ':red:'
    ],
    '🟠': [
        'Oranger Kreis',
        ':orange_circle:',
        'Großer Orangener Kreis',
        ':orange:'
    ],
    '🟡': [
        'Gelber Kreis',
        ':yellow_circle:',
        'Großer Gelber Kreis',
        ':yellow:'
    ],
    '🟢': [
        'Grüner Kreis',
        ':green_circle:',
        'Großer Grüner Kreis',
        ':green:'
    ],
    '🔵': [
        'Blauer Kreis',
        ':blue_circle:',
        'Großer blauer Kreis',
        ':blue:'
    ],
    '🟣': [
        'Violette Kreis',
        ':purple_circle:',
        'Großer lila Kreis',
        ':purple:'
    ],
    '🟤': [
        'Brauner Kreis',
        ':brown_circle:',
        'Großer brauner Kreis',
        ':brown:'
    ],
    '⚫': [
        'Schwarzer Kreis',
        ':black_circle:',
        'Mittlerer Schwarzer Kreis',
        ':black:'
    ],
    '⚪': [
        'Weißer Kreis',
        ':white_circle:',
        'Mittlerer weißer Kreis',
        ':white:'
    ],
    '🟥': [
        'Roter Platz',
        ':red_square:',
        'Großes Rotes Quadrat',
        ':red:'
    ],
    '🟧': [
        'Oranges Quadrat',
        ':orange_square:',
        'Großes Oranges Quadrat',
        ':orange:'
    ],
    '🟨': [
        'Gelbes Quadrat',
        ':yellow_square:',
        'Großes Gelbes Quadrat',
        ':yellow:'
    ],
    '🟩': [
        'Grüner Platz',
        ':green_square:',
        'Großes Grünes Quadrat',
        ':green:'
    ],
    '🟦': [
        'Blaues Quadrat',
        ':blue_square:',
        'Großes blaues Quadrat',
        ':blue:'
    ],
    '🟪': [
        'Violettes Quadrat',
        ':purple_square:',
        'Großes lila Quadrat',
        ':purple:'
    ],
    '🟫': [
        'Brauner Platz',
        ':brown_square:',
        'Großer brauner Platz',
        ':brown:'
    ],
    '⬛': [
        'Schwarzes großes Quadrat',
        ':black_large_square:',
        ':black:'
    ],
    '⬜': [
        'Weißer großer Platz',
        ':white_large_square:',
        ':white:'
    ],
    '◼️': [
        'Schwarzes mittleres Quadrat',
        ':black_medium_square:',
        ':black:'
    ],
    '◻️': [
        'Weißer Mittlerer Platz',
        ':white_medium_square:',
        ':white:'
    ],
    '◾': [
        'Schwarzes mittleres Quadrat',
        ':black_medium_small_square:',
        ':black:'
    ],
    '◽': [
        'Weißer mittlerer kleiner Platz',
        ':white_medium_small_square:',
        ':white:'
    ],
    '▪️': [
        'Schwarzes Kleines Quadrat',
        ':black_small_square:',
        ':black:'
    ],
    '▫️': [
        'Weißer kleiner Platz',
        ':white_small_square:',
        ':white:'
    ],
    '💠': [
        'Diamantform mit einem Punkt im Inneren',
        ':diamond_shape_with_dot:',
        'Schnitt',
        'Diamantblume',
        'Kawaii'
    ],
    '🔶': [
        'Große Orange Diamant',
        ':large_orange_diamond:',
        ':orange:'
    ],
    '🔷': [
        'Großer Blauer Diamant',
        ':large_blue_diamond:',
        ':blue:'
    ],
    '🔸': [
        'Kleiner Oranger Diamant',
        ':small_orange_diamond:',
        ':orange:'
    ],
    '🔹': [
        'Kleiner blauer Diamant',
        ':small_blue_diamond:',
        ':blue:'
    ],
    '🔺': [
        'Rotes Dreieck nach oben aufgezeigt',
        ':red_triangle_pointed_up:',
        'Rotes Dreieck oben',
        ':red:'
    ],
    '🔻': [
        'Rotes Dreieck nach unten',
        ':red_triangle_pointed_down:',
        'Rotes Dreieck nach unten',
        ':red:'
    ],
    '🔳': [
        'Weißes Quadrat Button',
        ':white_square_button:',
        ':white:',
        ':black:'
    ],
    '🔲': [
        'Schwarzes Quadrat Button',
        ':black_square_button:',
        ':white:',
        ':black:'
    ],
    '©️': [
        'Copyright',
        ':copyright:',
        ':c:',
        'Copyright-Zeichen'
    ],
    '®️': [
        'Registriert',
        ':registered:',
        ':r:',
        'Registriertes Schild'
    ],
    '™️': [
        'Warenzeichen',
        ':trade_mark:',
        ':tm:',
        'Warenzeichen',
        'Warenzeichenzeichen'
    ],
    '🛅': [
        'Linkes Gepäck',
        ':left_luggage:',
        'Beutel mit Schlüssel',
        'Gesperrter Koffer',
        ':blue:'
    ],
    '🛄': [
        'Gepäckforderung',
        ':baggage_claim:',
        ':blue:'
    ],
    '🛃': [
        'Zoll',
        ':customs:',
        ':blue:'
    ],
    '🛂': [
        'Passkontrolle',
        ':passport_control:',
        'Rahmenkontrolle',
        ':blue:'
    ],
    '🚰': [
        'Trinkwassersymbol',
        ':potable_water_symbol:',
        'Durst',
        'Durstig',
        'Wasserhahn',
        'Wasserhahn'
    ],
    '🇦': [
        'Buchstabe A',
        ':letter_a:',
        ':a:',
        'Regionaler Indikator Symbol Buchstabe A'
    ],
    '🇧': [
        'Buchstabe B',
        ':letter_b:',
        ':b:',
        'Regionaler Indikator Symbol Buchstabe B'
    ],
    '🇨': [
        'Buchstabe C',
        ':letter_c:',
        ':c:',
        'Regionaler Indikator Symbol Buchstabe C'
    ],
    '🇩': [
        'Buchstabe D',
        ':letter_d:',
        ':d:',
        'Regionaler Indikator Symbol Buchstabe D'
    ],
    '🇪': [
        'Buchstabe E',
        ':letter_e:',
        ':e:',
        'Regionaler Indikator Symbol Buchstabe E'
    ],
    '🇫': [
        'Buchstabe F',
        ':letter_f:',
        ':f:',
        'Regionaler Indikator Symbol Buchstabe F'
    ],
    '🇬': [
        'Buchstabe G',
        ':letter_g:',
        ':g:',
        'Regionaler Indikator Symbol Buchstabe G'
    ],
    '🇭': [
        'Buchstabe H',
        ':letter_h:',
        ':h:',
        'Regionaler Indikator Symbol Buchstabe H'
    ],
    '🇮': [
        'Brief I',
        ':letter_i:',
        ':i:',
        'Regionaler Indikator Symbol Buchstabe I'
    ],
    '🇯': [
        'Buchstabe J',
        ':letter_j:',
        ':j:',
        'Regionaler Indikator Symbol Buchstabe J'
    ],
    '🇰': [
        'Buchstabe K',
        ':letter_k:',
        ':k:',
        'Regionaler Indikator Symbol Buchstabe K'
    ],
    '🇱': [
        'Buchstabe L',
        ':letter_l:',
        ':l:',
        'Regionaler Indikator Symbol Buchstabe L'
    ],
    '🇲': [
        'Buchstabe M',
        ':letter_m:',
        ':m:',
        'Regionaler Indikator Symbol Buchstabe M'
    ],
    '🇳': [
        'Buchstabe N',
        ':letter_n:',
        ':n:',
        'Regionaler Indikator Symbol Buchstabe N'
    ],
    '🇴': [
        'Buchstabe O',
        ':letter_o:',
        ':o:',
        'Regionaler Indikator Symbol Buchstabe O'
    ],
    '🇵': [
        'Buchstabe P',
        ':letter_p:',
        ':p:',
        'Regionaler Indikator Symbol Buchstabe P'
    ],
    '🇶': [
        'Buchstabe Q',
        ':letter_q:',
        ':q:',
        'Regionaler Indikator Symbol Buchstabe Q'
    ],
    '🇷': [
        'Buchstabe R',
        ':letter_r:',
        ':r:',
        'Regionaler Indikator Symbol Buchstabe R'
    ],
    '🇸': [
        'Buchstabe S',
        ':letter_s:',
        ':s:',
        'Regionaler Indikator Symbol Buchstabe S'
    ],
    '🇹': [
        'Buchstabe T',
        ':letter_t:',
        ':t:',
        'Regionaler Indikator Symbol Buchstabe T'
    ],
    '🇺': [
        'Buchstabe U',
        ':letter_u:',
        ':u:',
        'Regionaler Indikator Symbol Buchstabe U'
    ],
    '🇻': [
        'Buchstabe V',
        ':letter_v:',
        ':v:',
        'Regionaler Indikator Symbol Buchstabe V'
    ],
    '🇼': [
        'Buchstabe W',
        ':letter_w:',
        ':w:',
        'Regionaler Indikator Symbol Buchstabe W'
    ],
    '🇽': [
        'Buchstabe X',
        ':letter_x:',
        ':x:',
        'Regionaler Indikator Symbol Buchstabe X'
    ],
    '🇾': [
        'Brief Y',
        ':letter_y:',
        ':y:',
        'Regionaler Indikator Symbol Buchstabe Y'
    ],
    '🇿': [
        'Buchstabe Z',
        ':letter_z:',
        ':z:',
        'Regionaler Indikator Symbol Buchstabe Z'
    ],
    '💌': [
        'Liebesbrief',
        ':love_letter:',
        'Herzumschlag',
        'Flirtnachricht'
    ],
    '🚮': [
        'Wurf in sein Platz-Symbol setzen',
        ':put_litter_in_bing_sign:',
        'Wurf im Bin Schild',
        'Wurf in den Papierkorb legen',
        'Person mit Papierkorb'
    ],
    '♿': [
        'Rollstuhlsymbol',
        ':wheelchair_symbol:',
        'Barrierefreies Badezimmer'
    ],
    '🚹': [
        'Männer-Symbol',
        ':mens_symbol:',
        'Männer-Symbol',
        'Männer-Toilette',
        'Männlicher Ruheraum',
        'Männliche WC',
        ':blue:'
    ],
    '🚺': [
        'Frauensymbol',
        ':womens_symbol:',
        'Frauensymbol',
        'Damen-Toilette',
        'Weibliche Restraum',
        'Famale WC',
        ':purple:',
        ':pink:'
    ],
    '🚻': [
        'Ruheraum',
        ':restroom:',
        'Badezimmerschild',
        'Toilettenschild',
        'WC Schild',
        ':blue:'
    ],
    '🚼': [
        'Baby-Symbol',
        ':baby_symbol:',
        'Baby Change-Station',
        'Baby Änderungssymbol',
        'Krankenschwester',
        ':orange:'
    ],
    '🚾': [
        'Wasserschrank',
        ':wc:',
        'KW',
        'Toilette WC',
        ':blue:'
    ],
    '⚠️': [
        'Warnzeichen',
        ':warning_sign:',
        'Alarmsymbol',
        ':yellow:'
    ],
    '🚸': [
        'Kinder überqueren',
        ':children_crossing:',
        'Kinder überqueren',
        'Schulübergang',
        ':yellow:'
    ],
    '🔅': [
        'Symbol für niedrige Helligkeit',
        ':low_brightness_symbol:',
        'Dimmen-Taste',
        'Helligkeit verringern'
    ],
    '🔆': [
        'Symbol für hohe Helligkeit',
        ':high_brightness_symbol:',
        'Helligkeit erhöhen',
        'Heller Button'
    ],
    '📳': [
        'Vibrationsmodus',
        ':vibration_mode:',
        'Telefon-Herz',
        'Lautlos-Modus',
        ':orange:'
    ],
    '📴': [
        'Handy aus',
        ':mobile_phone_off:',
        ':orange:'
    ],
    '〰️': [
        'Welle',
        'Wellenschlag',
        ':wave:'
    ],
    '💱': [
        'Währungstausch',
        ':currency_exchange:'
    ],
    '💲': [
        'Schwere Dollar-Schild',
        ':dollar_symbol:',
        'Dollar',
        'Dollar-Schild'
    ],
    '♻️': [
        'Schwarzes universelles Recyclingsymbol',
        ':recycling_symbol:',
        'Recycling-Symbol',
        'Papierkorblogo',
        ':green:'
    ],
    '🔱': [
        'Dreizack Emblem',
        ':trident_emblem:',
        'Pitchfork',
        'Dreizack'
    ],
    '📛': [
        'Namensschild',
        ':name_badge:',
        'Tofu in Feuer',
        'Name Tag',
        'Feuertag'
    ],
    '🔰': [
        'Japanisches Symbol für Anfänger',
        ':japanese_symbol_beginner:',
        'Shoshinsha Zeichen',
        'Gelbes grünes Schild',
        ':green:',
        ':yellow:'
    ],
    '➰': [
        'Kurve Schleife',
        ':curly_loop:',
        'Curling-Schleife',
        'Schleife'
    ],
    '➿': [
        'Doppelte geschweifte Schleife',
        ':double_curly_loop:',
        'Doppelte Curling-Schleife',
        'Voicemail'
    ],
    '〽️': [
        'Artikelwechselzeichen',
        ':part_alternation_mark:',
        'M',
        'McDonalds'
    ],
    '✳️': [
        'Acht Gespielte Asterisk',
        ':eight_spoked_asterisk:',
        ':green:'
    ],
    '✴️': [
        'Acht schwarzer Stern',
        ':eight_pointed_star:',
        'Orange Stern',
        'Acht markierter Stern',
        ':orange:'
    ],
    '❇️': [
        'Sparkle',
        ':sparkle:',
        ':green:'
    ],
    'Ⓜ️': [
        'Gekreist M',
        'Umgesiedelter lateinischer Kapitalbuchstabe M',
        ':circled_m:',
        'Metro',
        ':blue:'
    ],
    '🈁': [
        'Japanisches Wortschild bedeutet hier',
        'Squared Katakana Koko',
        ':japanese_here:',
        'Hier',
        'Ziel',
        ':blue:'
    ],
    '🈂️': [
        'Japanisch Signifikant Service oder Service Charge',
        'Squared Katakana Sa',
        ':japanese_service:',
        ':blue:'
    ],
    '🈷️': [
        'Japanisch Signifikant monatlicher Betrag',
        'Quadratischer CJK Einheitlicher Ideograph 6708',
        ':japanese_monthly_amouny:',
        'Radikal 74',
        '月',
        ':orange:'
    ],
    '🈶': [
        'Japanische Signatur bedeutet nicht kostenlos',
        'Quadratischer CJK Einheitlicher Ideograph 6709',
        ':japanese_own:',
        'Eigene',
        '有',
        ':orange:'
    ],
    '🈯': [
        'Japanische Signalbedeutung reserviert',
        'Quadrierter CJK Einheitlicher Ideograph 6307',
        ':japanese_reserved:',
        'Finger Punkt',
        '指',
        ':green:'
    ],
    '🉐': [
        'Japanisch Signifikant Schnäppchen',
        'Gekreuzter Ideograph Vorteil',
        ':japanese_acquire:',
        'Anfordern',
        '得',
        ':red:'
    ],
    '🈹': [
        'Japanisch Signifikantenrabatt',
        'Quadrierter CJK Einheitlicher Ideograph 5272',
        ':japanese_discount:',
        'Schnäppchenverkauf',
        '割',
        ':red:'
    ],
    '🈚': [
        'Japanisches Signieren bedeutet kostenlos',
        'Quadratierter CJK Einheitlicher Ideograph 7121',
        ':japanese_lacking:',
        'Fehlend',
        '無',
        ':orange:'
    ],
    '🈲': [
        'Japanische Signalbedeutung verboten',
        'Quadratierter CJK Einheitlicher Ideograph 7981',
        ':japanese_prohibited:',
        'Forbid',
        '禁',
        ':red:'
    ],
    '🉑': [
        'Japanische Signalbedeutung akzeptabel',
        'Gekreuzter Ideograph akzeptieren',
        ':japanese_accept:',
        'Akzeptieren',
        ':orange:'
    ],
    '🈸': [
        'Japanische Signalbedeutungsanwendung',
        'Quadratischer CJK Einheitlicher Ideographen - 7533',
        ':japanese_application_form:',
        'Bewerbungsformular',
        'Affen',
        'Anfrage',
        '申',
        ':orange:'
    ],
    '🈴': [
        'Japanische Signalbedeutung Passing (Grade)',
        'Quadrierter CJK Einheitlicher Ideograph 5408',
        ':japanese_agreement:',
        'Vereinbarung',
        '合',
        ':red:'
    ],
    '🈳': [
        'Japanische Signatur Bedeutungsfertigkeit',
        'Quadrierter CJK Einheitlicher Ideograph 7a7a',
        ':japanese_available:',
        'Leer und verfügbar',
        '空',
        ':blue:'
    ],
    '㊗️': [
        'Japanisch signierte Bedeutung Herzlichen Glückwunsch',
        'Kreise Ideograph Glückwunsch',
        ':japanese_congratulations:',
        ':red:'
    ],
    '㊙️': [
        'Gekreistes Ideographie-Geheimnis',
        ':japanese_secret:',
        'Japanisches Signalgeheimnis',
        'Geheimnis',
        ':red:'
    ],
    '🈺': [
        'Japanische Signalsignale für Unternehmen öffnen',
        'Quadrierter CJK Einheitlicher Ideograph - 55b6',
        ':japanese_open_for_business:',
        'Arbeit',
        '営',
        ':orange:'
    ],
    '🈵': [
        'Japanisches Signalsignal; Kein freier Raum',
        'Quadrierter CJK Einheitlicher Ideograph 6e80',
        ':japanese_full:',
        'Voll',
        '満',
        ':red:'
    ],
    '🔘': [
        'Radio-Button',
        ':radio_button:'
    ],
    '🛑': [
        'Stoppschild',
        ':stop_sign:',
        'Achteckiges Zeichen',
        ':red:'
    ],
    '⚕️': [
        'Medizinisches Symbol',
        ':medical_symbol:',
        'Aesculapius',
        'Asklepios',
        'Asklepiusstab',
        'Mitarbeiter von Aesculapius'
    ],
    '🛗': [
        'Lift',
        ':elevator:',
        ':lift:',
        'Aufzug'
    ],
    '⚧️': [
        'Transgender Symbol',
        ':transgender_sign:'
    ],
    '♂️': [
        'Männliches Schild',
        ':male_sign:',
        'Mensch-Symbol',
        'Mars Symbol'
    ],
    '♀️': [
        'Weibliches Schild',
        ':female_sign:',
        'Frauensymbol',
        'Venus Symbol'
    ]
};
/*food and drinks*/
emojis_language[lang][6] = {
    '🍇': [
        'Trauben',
        ':grapes:',
        'Trauben',
        ':purple:'
    ],
    '🍈': [
        'Melone',
        ':melon:',
        'Cantaloupe',
        'Honigtaun',
        'Muskmelone'
    ],
    '🍉': [
        'Wassermelone',
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
        'Lemon',
        ':lemon:',
        'Limonade',
        ':yellow:'
    ],
    '🍌': [
        'Bananen',
        ':banana:',
        'Plantagen',
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
        'Roter Apfel',
        ':red_apple:',
        ':apple:',
        'Roter köstlicher Apfel',
        ':red:'
    ],
    '🍏': [
        'Grüner Apfel',
        ':green_apple:',
        ':apple:',
        'Goldener leckerer Apfel',
        'Granny Smith Apfel',
        ':green:'
    ],
    '🍐': [
        'Birne',
        ':pear:'
    ],
    '🍑': [
        'Pfirsich',
        ':peach:',
        'Unten',
        'Apfel',
        ':orange:',
        ':pink:'
    ],
    '🍒': [
        'Kirschen',
        ':cherry:',
        'Kirsche',
        'Wilde Kirsche',
        ':red:'
    ],
    '🍓': [
        'Erdbeere',
        ':strawberry:',
        ':red:'
    ],
    '🥝': [
        'Kiwi-Obst',
        ':kiwi:',
        'Chinesische Goosebeere',
        'Kiwi',
        'Kiwifruit',
        ':green:'
    ],
    '🍅': [
        'Tomate',
        ':tomato:',
        ':red:'
    ],
    '🥥': [
        'Kokosnuss',
        ':coconut:',
        'Cocoanut'
    ],
    '🥑': [
        'Avocado',
        ':avocado:',
        ':green:'
    ],
    '🍆': [
        'Eipflanze',
        ':eggplant:',
        ':aubergine:',
        'Aubergine',
        'Phallisch',
        'Violettes Gemüse',
        ':purple:'
    ],
    '🥔': [
        'Kartoffel',
        ':potato:',
        'Gebackene Kartoffel',
        'Idaho Kartoffel'
    ],
    '🥕': [
        'Zuckerbrot',
        ':carrot:',
        ':orange:'
    ],
    '🌽': [
        'Ohr des Mais',
        ':ear_of_corn:',
        'Mais',
        'Mais auf dem Kob',
        'Mais',
        'Ohr des Mais'
    ],
    '🌶️': [
        'Heißer Pfeffer',
        ':hot_pepper:',
        'Chili Pepper',
        'Gewürzig',
        ':red:'
    ],
    '🥒': [
        'Gurke',
        ':cucumber:',
        'Gherkin',
        'Auswählen',
        ':green:'
    ],
    '🥬': [
        'Laubgrün',
        ':leafy_green:',
        'Bok Choy',
        'Chinesischer Kohl',
        'Cos Lettuce',
        'Romaine Salz',
        'Laubige Grüne',
        ':green:'
    ],
    '🥦': [
        'Brokkoli',
        ':broccoli:',
        ':green:'
    ],
    '🍄': [
        'Pilz',
        ':mushroom:',
        'Schinken',
        'Toadstool'
    ],
    '🥜': [
        'Peanuts',
        ':peanuts:',
        'Nüsse',
        ':brown:'
    ],
    '🌰': [
        'Kastanie',
        ':chestnut:',
        'Acorn',
        'Nuss',
        ':brown:'
    ],
    '🍞': [
        'Brot',
        ':bread:',
        'Brotlau',
        ':brown:'
    ],
    '🥐': [
        'Croissant',
        ':croissant:',
        ':brown:'
    ],
    '🥖': [
        'Baguettebrot',
        ':baguette_bread:',
        'Französisches Brot',
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
        'Pfannkuchen',
        ':pancakes:',
        'Cre<unk> pes',
        'Hotcakes',
        ':yellow:'
    ],
    '🧀': [
        'Käse Keil',
        ':cheese_wedge:',
        'Käse',
        ':yellow:'
    ],
    '🍖': [
        'Fleisch auf Knochen',
        ':meat_on_bone:',
        'BBQ',
        'Grill',
        'Manga-Fleisch',
        ':red:'
    ],
    '🍗': [
        'Poultry Leg',
        ':poultry_leg:',
        'Trommelstich',
        'Türkei Bein',
        ':red:'
    ],
    '🥩': [
        'Fleischschnitt',
        ':cut_of_meat:',
        'Fleisch',
        'Steak',
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
        'Französische Pommes',
        ':french_fries:',
        'Chips',
        'Pommes',
        'McDonalds Pommes',
        ':yellow:'
    ],
    '🍕': [
        'Pizza',
        ':pizza:',
        'Pepperoni Pizza',
        'Stück Pizza',
        ':red:'
    ],
    '🌭': [
        'Heißer Hund',
        ':hot_dog:',
        'Hotdog',
        'Wurst',
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
        'Wrap'
    ],
    '🥙': [
        'Gefülltes Flatbread',
        ':stuffed_flatbread:',
        'Doner Kebab',
        'Gyro',
        'Shawarma',
        'Pita Sandwich'
    ],
    '🍳': [
        'Kochen',
        ':cooking:',
        'Frühstück',
        'Gebratenes Ei',
        'Bratpfanne'
    ],
    '🥘': [
        'Flachland der Nahrung',
        ':shallow_pan_of_food:',
        'Paella',
        'Nahrungspfanne'
    ],
    '🍲': [
        'Topf der Nahrung',
        ':pot_of_food:',
        'Schüssel des Essens',
        'Suppe',
        'Eintopf'
    ],
    '🥣': [
        'Schüssel mit Löffel',
        ':bowl_with_spoon:',
        'Getreideschüssel'
    ],
    '🥗': [
        'Grüner Salat',
        ':green_salad:',
        'Salat',
        ':green:'
    ],
    '🍿': [
        'Popcorn',
        ':popcorn:',
        'Popping-Mais'
    ],
    '🧂': [
        'Salz',
        ':salt:',
        'Salz Shaker',
        ':white:'
    ],
    '🥫': [
        'Konservierte Lebensmittel',
        ':canned_food:',
        'Dose Nahrung',
        'Zinndose',
        'Gezähmte Nahrung'
    ],
    '🍱': [
        'Bento Box',
        ':bento_box:',
        'Lunchbox'
    ],
    '🍘': [
        'Reisknacker',
        ':rice_cracker:',
        'Cracker'
    ],
    '🍙': [
        'Reiskugel',
        ':rice_ball:',
        'Onigiri'
    ],
    '🍚': [
        'Gekochter Reis',
        ':cooked_rice:',
        'Gekochte Reis',
        'Reis',
        'Kugel des Reis',
        'Dämpfter Reis'
    ],
    '🍛': [
        'Krustenreis',
        ':curry_rice:',
        'Krug',
        'Indianisches Essen',
        'Curry und Reis'
    ],
    '🍜': [
        'Steaming Schüssel',
        ':steaming_bowl:',
        'Nudeln',
        'Nudeln mit Chopsticks',
        'Ramen'
    ],
    '🍝': [
        'Spaghetti',
        ':spaghetti:',
        'Pasta'
    ],
    '🍠': [
        'Geröstete Süßkartoffel',
        ':roasted_sweet_potato:',
        'Süße Kartoffel',
        'Jam'
    ],
    '🍢': [
        'Jörg',
        ':oden:',
        'Kebab',
        'Spießer'
    ],
    '🍣': [
        'Sushi',
        ':sushi:',
        'Sashimi',
        'Meeresfrüchte',
        ':pink:'
    ],
    '🍤': [
        'Gebratener Garnelen',
        ':fried_shrimp:',
        'Gebratener Prawn',
        'Shrimp-Temura'
    ],
    '🍥': [
        'Fisch Kuchen mit Swirl',
        ':fish_cake_with_swirl:',
        'Fischkuchen',
        'Pink Swirl'
    ],
    '🥮': [
        'Mondkuchen',
        ':moon_cake:',
        'Mondkuchen'
    ],
    '🍡': [
        'Dango',
        ':dango:',
        'Dessert Stich',
        'Rosa weiße grüne Kugeln'
    ],
    '🥟': [
        'Knödel',
        ':dumpling:',
        'Empanada',
        'Pierogi'
    ],
    '🥠': [
        'Glückskekse',
        ':fortune_cookie:'
    ],
    '🥡': [
        'Takeout Box',
        ':takeout_box:',
        'Chinesische Nahrungsbox',
        'Oyster Pail'
    ],
    '🍦': [
        'Weiches Eis',
        ':soft_ice_cream:',
        'Herr Whippy',
        'Weiche Serve'
    ],
    '🍧': [
        'Gesäßtes Eis',
        ':shaved_ice:',
        'Schnee Klinge'
    ],
    '🍨': [
        'Eis',
        ':ice_cream:',
        'Schüssel aus Eis',
        'Dessert'
    ],
    '🍩': [
        'Doughnut',
        ':doughnut:',
        'Donut'
    ],
    '🍪': [
        'Cookie',
        ':cookie:',
        'Kekse',
        'Schokoladen-Chipkekse',
        ':brown:'
    ],
    '🎂': [
        'Geburtstagskuchen',
        ':birthday_cake:',
        'Geburtstag',
        'Kuchen',
        'Kuchen mit Kerzen'
    ],
    '🍰': [
        'Kurzkuchen',
        ':shortcake:',
        'Kuchen',
        'Stück Kuchen',
        'Erdbeeren-Kurzkuchen'
    ],
    '🧁': [
        'Cupcake',
        ':cupcake:',
        'Feenkuchen'
    ],
    '🥧': [
        'Pie',
        ':pie:'
    ],
    '🍫': [
        'Schokoladenplatte',
        ':chocolate_bar:',
        'Zuckerstange',
        'Schokolade',
        ':brown:'
    ],
    '🍬': [
        'Zuckerbrot',
        ':candy:',
        'Lilly',
        'Süß'
    ],
    '🍭': [
        'Lollipop',
        ':lollipop:',
        'Sauger'
    ],
    '🍮': [
        'Custard',
        ':custard:',
        'Creme Caramel',
        'Dessert',
        'Flan',
        'Pödding'
    ],
    '🍯': [
        'Honigtopf',
        ':honey_pot:',
        'Honig',
        'Topf',
        ':yellow:'
    ],
    '🍼': [
        'Baby-Flasche',
        ':baby_bottle:',
        'Flaschenfütterung'
    ],
    '🥛': [
        'Glas Milch',
        ':glass_of_milk:',
        'Milch',
        ':white:'
    ],
    '☕': [
        'Heißes Getränk',
        ':hot_beverage:',
        'Kaffee',
        'Espresso',
        'Heiße Schokolade',
        'Tee'
    ],
    '🍵': [
        'Teacup ohne Handle',
        ':green_tea:',
        'Grüner Tee',
        'Matcha',
        'Matcha-Grüner Tee',
        ':green:'
    ],
    '🍶': [
        'Sake',
        ':sake:',
        'Flasche',
        'Reiswein',
        'Sake Flasche und Cup'
    ],
    '🍾': [
        'Flasche mit Popping Cork',
        ':champagne:',
        'Feier',
        'Champagne',
        'Sekt Wein'
    ],
    '🍷': [
        'Weinglas',
        ':wine_glass:',
        'Alkohol',
        'Roter Wein',
        'Wein'
    ],
    '🍸': [
        'Cocktailglas',
        ':cocktail_glass:',
        'Cocktail',
        'Martini'
    ],
    '🍹': [
        'Tropischer Drink',
        ':tropical_drink:',
        'Fruchtschlag',
        'Tiki Trinken'
    ],
    '🍺': [
        'Bierteppich',
        ':beer_mug:',
        'Bier',
        'Bier Stein',
        ':yellow:'
    ],
    '🍻': [
        'Klinkende Bier-Mugs',
        ':clinking_beer_mugs:',
        'Bier',
        'Grüße'
    ],
    '🥂': [
        'Brille blinkt',
        ':clinking_glasses:',
        'Feier',
        'Champagnerbrille',
        'Grüße'
    ],
    '🥃': [
        'Tumbler Glas',
        ':tumbler_glass:',
        'Bourbon',
        'Liköre',
        'Rum',
        'Whisky',
        'Whisky'
    ],
    '🥤': [
        'Pokal mit Stroh',
        ':cup_with_straw:',
        'Milchshake',
        'Smoothie',
        'Soda-Pop',
        'Weiches Trinken'
    ],
    '🥢': [
        'Chopsticks',
        ':chopsticks:'
    ],
    '🍽️': [
        'Gabeln und Messer mit Platte',
        ':fork_and_knife_with_plate:',
        'Abendessen',
        ':white:',
        ':gray:',
        ':grey:'
    ],
    '🍴': [
        'Fork und Messer',
        ':fork_and_knife:',
        'Besteck',
        'Messer und Fork',
        'Silberware',
        ':gray:',
        ':grey:'
    ],
    '🥄': [
        'Löffel',
        ':spoon:',
        ':gray:',
        ':grey:'
    ],
    '🧄': [
        'Knoblauch',
        ':garlic:'
    ],
    '🧅': [
        'Zwiebel',
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
        'Butter',
        ':butter:'
    ],
    '🦪': [
        'Oyster',
        ':oyster:'
    ],
    '🧃': [
        'Getränkebox',
        ':beverage_box:',
        'Saftkiste'
    ],
    '🧉': [
        'Mate Drink',
        ':mate_drink:',
        'Chimarra<unk> o',
        'Cimarrón',
        'Yerba-Matt'
    ],
    '🫒': [
        'Olivenöl',
        ':olive:',
        ':green:'
    ],
    '🫐': [
        'Heidelbeeren',
        ':blueberries:',
        ':blue:'
    ],
    '🫑': [
        'Glockenpfeffer',
        ':bell_pepper:',
        ':green:'
    ],
    '🫓': [
        'Flatbread',
        ':flatbread:'
    ],
    '🫔': [
        'Tamal',
        ':tamale:',
        'Tamal'
    ],
    '🫕': [
        'Fondue',
        ':fondue:'
    ],
    '🧋': [
        'Bubble Tee',
        ':boba:',
        'Boba'
    ],
    '🧊': [
        'Eiswürfel',
        ':ice_cube:'
    ],
    '🫘': [
        'Bohnen',
        'Blähungen',
        ':beans:',
        'Kaffeebohnen',
        'Spill the beans'
    ],
    '🫗': [
        'Flüssigkeit ausgießen',
        ':puring_liquid:',
        'Trinken',
        'Wasser'
    ]
};
/*flags*/
emojis_language[lang][7] = {
    '🏁': [
        'Chequered Flagge',
        ':chequered_flag:',
        'Geprüfte Flagge',
        'Gittermädchen',
        'Rennflagge',
        ':black:',
        ':white:'
    ],
    '🚩': [
        'Dreiecksflagge',
        ':triangular_flag:',
        'Markierung am Pole',
        'Rote Flagge',
        'Dreieckige Flagge im Beitrag',
        ':red:'
    ],
    '🎌': [
        'Kreuzte Flaggen',
        ':crossed_flags:',
        'Zwei Flaggen'
    ],
    '🏴': [
        'Schwarze Flagge',
        ':black_flag:',
        'Wende schwarze Flagge',
        ':black:'
    ],
    '🏳️': [
        'Weiße Flagge',
        ':white_flag:',
        'Weiße Flagge winken',
        ':white:'
    ],
    '🏳️‍🌈': [
        'Regenbogenflagge',
        ':rainbow_flag:',
        'Pride Flag',
        'LGBT',
        'LGBTQIA+',
        'Schwul',
        'Transgender',
        'Lesbian',
        'Asexuell',
        'Queer'
    ],
    '🏳️‍⚧️': [
        'Transgender Flagge',
        ':transgender_flag:',
        'Blau, Pink und Weiße Flagge',
        'Trans Fahne'
    ],
    '🏴‍☠️': [
        'Piratenflagge',
        ':pirate_flag:',
        'Jolly Roger',
        ':black:'
    ],
    '🇺🇳': [
        'Flagge der Vereinten Nationen',
        ':un:',
        'Flagge: Vereinten Nationen'
    ],
    '🇪🇺': [
        'Flagge der Europäischen Union',
        ':eu:',
        'Flagge: Europäische Union',
        'EU Flag'
    ],
    '🇦🇨': [
        'Flagge der Aufstiegsinsel',
        ':ac:'
    ],
    '🇦🇩': [
        'Flagge von Andorra',
        ':ad:',
        'Andorran Flag'
    ],
    '🇦🇪': [
        'Flagge der Vereinigten Arabischen Emirate',
        ':ae:',
        'Emirati Flag',
        'VAE Flagge'
    ],
    '🇦🇫': [
        'Flagge Afghanistans',
        ':af:',
        'Afghan Flag'
    ],
    '🇦🇬': [
        'Flagge von Antigua & Barbuda',
        ':ag:'
    ],
    '🇦🇮': [
        'Flagge von Anguilla',
        ':ai:',
        'Angillan Flagge'
    ],
    '🇦🇱': [
        'Flagge Albaniens',
        ':al:',
        'Albanische Flagge'
    ],
    '🇦🇲': [
        'Flagge von Armenien',
        ':am:',
        'Armenische Flagge'
    ],
    '🇦🇴': [
        'Flagge Angolas',
        ':ao:',
        'Angolanische Flagge'
    ],
    '🇦🇶': [
        'Flagge der Antarktis',
        ':aq:',
        'Antarktisflagge'
    ],
    '🇦🇷': [
        'Flagge Argentiniens',
        ':ar:',
        'Argentinische Flagge'
    ],
    '🇦🇸': [
        'Flagge des amerikanischen Samoa',
        ':as:',
        'American Samoan Flag'
    ],
    '🇦🇹': [
        'Österreichische Flagge',
        ':at:',
        'Austrian Flag'
    ],
    '🇦🇺': [
        'Flagge von Australien',
        ':au:',
        'Aussie Flagge',
        'Australische Flagge'
    ],
    '🇦🇼': [
        'Flagge von Aruba',
        ':aw:',
        'Aruban Flagge'
    ],
    '🇦🇽': [
        'Flagge der A<unk> land-Inseln',
        ':ax:',
        'A<unk> land Flagge'
    ],
    '🇦🇿': [
        'Flagge von Aserbaidschan',
        ':az:',
        'Aserbaidschan-Flagge'
    ],
    '🇧🇦': [
        'Flagge von Bosnien und Herzegowina',
        ':ba:'
    ],
    '🇧🇧': [
        'Flagge von Barbados',
        ':bb:',
        'Barbadische Flagge',
        'Bajanische Flagge'
    ],
    '🇧🇩': [
        'Flagge von Bangladesch',
        ':bd:',
        'Bangladeshi Flag'
    ],
    '🇧🇪': [
        'Flagge von Belgien',
        ':be:',
        'Belgische Flagge'
    ],
    '🇧🇫': [
        'Flagge von Burkina Faso',
        ':bf:',
        'Burkinabe Flagge'
    ],
    '🇧🇬': [
        'Flagge von Bulgarien',
        ':bg:',
        'Bulgarische Flagge'
    ],
    '🇧🇭': [
        'Flagge von Bahrain',
        ':bh:',
        'Bahrani-Flagge',
        'Bahrain Flagge'
    ],
    '🇧🇮': [
        'Flagge von Burundi',
        ':bi:',
        'Burundian Flag'
    ],
    '🇧🇯': [
        'Flagge von Benin',
        ':bj:',
        'Beninesische Flagge'
    ],
    '🇧🇱': [
        'Flagge von St. Barthe<unk> lemy',
        ':bl:',
        'Flagge: St. Barthe<unk> lemy'
    ],
    '🇧🇲': [
        'Flagge von Bermuda',
        ':bm:',
        'Bermudan Flag'
    ],
    '🇧🇳': [
        'Flagge von Brunei',
        ':bn:',
        'Bruneiische Flagge'
    ],
    '🇧🇴': [
        'Flagge von Bolivien',
        ':bo:',
        'Bolivian Flag'
    ],
    '🇧🇶': [
        'Flagge der karibischen Niederlande',
        ':bq:',
        'Bonaire'
    ],
    '🇧🇷': [
        'Flagge von Brasilien',
        ':br:',
        'Brasilianische Flagge'
    ],
    '🇧🇸': [
        'Flagge der Bahamas',
        ':bs:',
        'Bahamas Flagge'
    ],
    '🇧🇹': [
        'Flagge von Bhutan',
        ':bt:',
        'Bhutanesische Flagge'
    ],
    '🇧🇻': [
        'Flagge der Bouvet-Insel',
        ':bv:',
        'Flagge: Bouvet-Insel'
    ],
    '🇧🇼': [
        'Flagge von Botswana',
        ':bw:',
        'Batswana Flag'
    ],
    '🇧🇾': [
        'Flagge von Belarus',
        ':by:',
        'Belarussische Flagge'
    ],
    '🇧🇿': [
        'Flagge von Belize',
        ':bz:',
        'Belizeanische Flagge'
    ],
    '🇨🇦': [
        'Flagge Kanadas',
        'Kanadische Flagge',
        ':ca:'
    ],
    '🇨🇨': [
        'Flagge von Cocos (Keeling) Inseln',
        ':cc:'
    ],
    '🇨🇩': [
        'Flag of Congo - Kinshasa',
        ':cd:'
    ],
    '🇨🇫': [
        'Flagge der Zentralafrikanischen Republik',
        ':cf:',
        'Zentralafrikanische Flagge'
    ],
    '🇨🇬': [
        'Flagge des Kongo - Brazzaville',
        ':cg:'
    ],
    '🇨🇭': [
        'Flagge der Schweiz',
        ':ch:',
        'Rotes Kreuz',
        'Schweizer Flagge'
    ],
    '🇨🇮': [
        'Flagge der Elfenbeinküste',
        ':ci:',
        'Flag: Côte d’Ivoire'
    ],
    '🇨🇰': [
        'Flagge von Cookinseln',
        ':ck:',
        'Koch-Islander-Flagge'
    ],
    '🇨🇱': [
        'Flagge von Chile',
        ':cl:',
        'Chilenische Flagge'
    ],
    '🇨🇲': [
        'Flagge von Kamerun',
        ':cm:',
        'Kamerunische Flagge'
    ],
    '🇨🇳': [
        'Flagge Chinas',
        ':cn:',
        'Chinesische Flagge'
    ],
    '🇨🇴': [
        'Flagge Kolumbiens',
        ':co:',
        'Kolumbianische Flagge'
    ],
    '🇨🇵': [
        'Flagge der Clipperton-Insel',
        ':cp:',
        'Flagge: Clipperton-Insel'
    ],
    '🇨🇷': [
        'Flagge von Costa Rica',
        ':cr:',
        'Costa Rica Flagge'
    ],
    '🇨🇺': [
        'Flagge Kubas',
        ':cu:',
        'Kubanische Flagge'
    ],
    '🇨🇻': [
        'Flagge des Kap Verde',
        ':cv:',
        'Kap Verdian Flagge'
    ],
    '🇨🇼': [
        'Fahne von Curac<unk> ao',
        ':cw:',
        'Curaçaoan Flag'
    ],
    '🇨🇽': [
        'Flagge der Weihnachtsinsel',
        ':cx:',
        'Weihnachts-Inselflagge'
    ],
    '🇨🇾': [
        'Flagge Zyperns',
        ':cy:',
        'Zyprische Flagge'
    ],
    '🇨🇿': [
        'Tschechische Flagge',
        ':cz:',
        'Tschechische Flagge'
    ],
    '🇩🇪': [
        'Flagge von Deutschland',
        ':de:',
        'Deutsche Flagge',
        'Deutsche Flagge'
    ],
    '🇩🇬': [
        'Flagge von Diego Garcia',
        ':dg:',
        'Flagge: Diego Garcia'
    ],
    '🇩🇯': [
        'Flagge von Dschibuti',
        ':dj:',
        'Djibouti Flag',
        'Djiboutian Flag'
    ],
    '🇩🇰': [
        'Dänemark Flagge',
        ':dk:',
        'Dänische Flagge'
    ],
    '🇩🇲': [
        'Flagge von Dominica',
        ':dm:'
    ],
    '🇩🇴': [
        'Flagge der Dominikanischen Republik',
        ':do:',
        'Dom Rep Flagge',
        'Dominikanische Flagge'
    ],
    '🇩🇿': [
        'Flagge Algeriens',
        ':dz:',
        'Algerian Flag'
    ],
    '🇪🇦': [
        'Flagge von Ceuta & Melilla',
        ':ea:',
        'Flagge von Melilla',
        'Flagge von Ceuta',
        'Flag: Ceuta & Melilla'
    ],
    '🇪🇨': [
        'Flagge von Ecuador',
        ':ec:',
        'Ecuadorian Flag'
    ],
    '🇪🇪': [
        'Flagge Estlands',
        ':ee:',
        'Estnische Flagge'
    ],
    '🇪🇬': [
        'Flagge Ägyptens',
        ':eg:',
        'Ägyptische Flagge'
    ],
    '🇪🇭': [
        'Flagge der Westsahara',
        ':eh:',
        'Westsahara-Flagge'
    ],
    '🇪🇷': [
        'Flagge von Eritrea',
        ':er:',
        'Eritrean Flag'
    ],
    '🇪🇹': [
        'Flagge Äthiopiens',
        ':et:',
        'Ethiopian Flag'
    ],
    '🇪🇸': [
        'Flagge Spaniens',
        ':es:',
        'Spanische Flagge'
    ],
    '🇫🇮': [
        'Finnische Flagge',
        ':fi:',
        'Finnische Flagge'
    ],
    '🇫🇯': [
        'Fidschi Flagge',
        ':fj:',
        'Fijian Flag'
    ],
    '🇫🇰': [
        'Flagge der Falklandinseln',
        ':fk:',
        'Falklander Flagge'
    ],
    '🇫🇲': [
        'Flagge von Mikronesien',
        ':fm:',
        'Mikronesische Flagge'
    ],
    '🇫🇴': [
        'Flagge der Färöer Inseln',
        ':fo:',
        'Faroe Islander Flag'
    ],
    '🇫🇷': [
        'Flagge von Frankreich',
        ':fr:',
        'Französische Flagge'
    ],
    '🇬🇦': [
        'Flagge von Gabun',
        ':ga:',
        'Gabunesische Flagge'
    ],
    '🇬🇧': [
        'Flagge Großbritanniens',
        ':gb:',
        'Britische Flagge',
        'Großbritannien',
        'Union Jack',
        'TN'
    ],
    '🏴󠁧󠁢󠁥󠁮󠁧󠁿󠁧󠁢󠁥󠁮󠁧󠁿': [
        'Flagge Englands',
        ':england:',
        'St. Georges Kreuz',
        'Englische Flagge'
    ],
    '🏴󠁧󠁢󠁷󠁬󠁳󠁿󠁧󠁢󠁷󠁬󠁳󠁿': [
        'Flagge von Wales',
        ':wales:',
        'Walisische Flagge',
        'Roter Drache',
        'Baner Cymru',
        'Y Ddraig Goch'
    ],
    '🏴󠁧󠁢󠁳󠁣󠁴󠁿󠁧󠁢󠁳󠁣󠁴󠁿': [
        'Flagge von Schottland',
        ':scotland:',
        'Schottische Flagge',
        'St. Andrews-Kreuz',
        'Saltire'
    ],
    '🇬🇩': [
        'Flagge von Grenada',
        ':gd:',
        'Grenadische Flagge'
    ],
    '🇬🇪': [
        'Flagge von Georgien',
        ':ge:',
        'Georgische Flagge'
    ],
    '🇬🇫': [
        'Flagge von Französisch-Guayana',
        ':gf:',
        'Französisch-guineische Flagge'
    ],
    '🇬🇬': [
        'Flagge von Guernsey',
        ':gg:',
        'Guernsey Flag'
    ],
    '🇬🇭': [
        'Flagge von Ghana',
        ':gh:',
        'Ghanaische Flagge'
    ],
    '🇬🇮': [
        'Flagge von Gibraltar',
        ':gi:',
        'Gibraltar Flagge'
    ],
    '🇬🇱': [
        'Flagge von Grönland',
        ':gl:',
        'Greenlandic Flag'
    ],
    '🇬🇲': [
        'Flagge von Gambia',
        ':gm:',
        'Gambian Flag'
    ],
    '🇬🇳': [
        'Flagge von Guinea',
        ':gn:',
        'Guinean Flag'
    ],
    '🇬🇵': [
        'Flagge von Guadeloupe',
        ':gp:',
        'Guadeloupean Flagge'
    ],
    '🇬🇶': [
        'Flagge Äquatorialguineas',
        ':gq:',
        'Equatorial Guinean Flag',
        'Äquatoguineische Flagge'
    ],
    '🇬🇷': [
        'Flagge Griechenlands',
        ':gr:',
        'Griechische Flagge'
    ],
    '🇬🇸': [
        'Flagge von Südgeorgien und den südlichen Sandwichinseln',
        ':gs:'
    ],
    '🇬🇹': [
        'Flagge von Guatemala',
        ':gt:',
        'Guatemalan Flag'
    ],
    '🇬🇺': [
        'Flagge von Guam',
        ':gu:',
        'Guamanische Flagge',
        'Chamorro-Flagge'
    ],
    '🇬🇼': [
        'Flagge von Guinea-Bissau',
        ':gw:',
        'Guinea-Bissau Flag'
    ],
    '🇬🇾': [
        'Flagge von Guyana',
        ':gy:',
        'Guyanesische Flagge'
    ],
    '🇭🇰': [
        'Flagge Hongkongs SAR China',
        ':hk:',
        'Hongkong-Flagge'
    ],
    '🇭🇲': [
        'Flagge von Heard & McDonald-Inseln',
        ':hm:',
        'Flagge: Heard & McDonald-Inseln'
    ],
    '🇭🇳': [
        'Flagge von Honduras',
        ':hn:',
        'Honduras Flagge'
    ],
    '🇭🇷': [
        'Flagge Kroatiens',
        ':hr:',
        'Kroatische Flagge'
    ],
    '🇭🇹': [
        'Flagge von Haiti',
        ':ht:',
        'Haitian Flag'
    ],
    '🇭🇺': [
        'Flagge Ungarns',
        ':hu:',
        'Ungarische Flagge'
    ],
    '🇮🇨': [
        'Flagge der Kanarischen Inseln',
        ':ic:'
    ],
    '🇮🇩': [
        'Flagge von Indonesien',
        ':id:',
        'Indonesische Flagge'
    ],
    '🇮🇪': [
        'Irische Flagge',
        ':ie:',
        'Irische Flagge'
    ],
    '🇮🇱': [
        'Flagge Israels',
        ':il:',
        'Israelische Flagge'
    ],
    '🇮🇲': [
        'Flagge der Insel Man',
        ':im:',
        'Manx Flag'
    ],
    '🇮🇳': [
        'Flagge Indiens',
        ':in:',
        'Indische Flagge'
    ],
    '🇮🇴': [
        'Flagge des britischen Territoriums im Indischen Ozean',
        ':io:',
        'Britisches Territorium im Indischen Ozean'
    ],
    '🇮🇶': [
        'Flagge des Irak',
        ':iq:',
        'Iraqi Flag'
    ],
    '🇮🇷': [
        'Flagge des Iran',
        ':ir:',
        'Iranische Flagge'
    ],
    '🇮🇸': [
        'Flagge von Island',
        ':is:',
        'Isländische Flagge'
    ],
    '🇮🇹': [
        'Flagge Italiens',
        ':it:',
        'Italienische Flagge'
    ],
    '🇯🇪': [
        'Markierung von Jersey',
        ':je:',
        'Trikot-Flagge'
    ],
    '🇯🇲': [
        'Flagge von Jamaika',
        ':jm:',
        'Jamaikanische Flagge'
    ],
    '🇯🇴': [
        'Flagge von Jordanien',
        ':jo:',
        'Jordanische Flagge'
    ],
    '🇯🇵': [
        'Flagge von Japan',
        ':jp:',
        'Japanische Flagge'
    ],
    '🇰🇪': [
        'Flagge Kenias',
        ':ke:',
        'Kenianische Flagge'
    ],
    '🇰🇬': [
        'Flagge Kirgisistans',
        ':kg:',
        'Kyrgyzstani Flag'
    ],
    '🇰🇭': [
        'Flagge Kambodschas',
        ':kh:',
        'Kambodschanische Flagge'
    ],
    '🇰🇮': [
        'Flagge von Kiribati',
        ':ki:',
        'I-Kiribati Flagge'
    ],
    '🇰🇲': [
        'Flagge von Komoren',
        ':km:',
        'Komorenflagge'
    ],
    '🇰🇳': [
        'Flagge von St. Kitts & Nevis',
        ':kn:'
    ],
    '🇰🇵': [
        'Flagge Nordkoreas',
        ':kp:',
        'Nordkoreanische Flagge'
    ],
    '🇰🇷': [
        'Flagge Südkoreas',
        ':kr:',
        'Südkoreanische Flagge'
    ],
    '🇰🇼': [
        'Flagge von Kuwait',
        ':kw:',
        'Kuwaiti Flag'
    ],
    '🇰🇾': [
        'Flagge der Kaimaninseln',
        ':ky:',
        'Kaymanische Flagge'
    ],
    '🇰🇿': [
        'Flagge Kasachstans',
        ':kz:',
        'Kazakhstani Flag',
        'Kazakh Flag'
    ],
    '🇱🇦': [
        'Flagge von Laos',
        ':la:',
        'Laotische Flagge',
        'Lao-Flagge'
    ],
    '🇱🇧': [
        'Fahne des Libanon',
        ':lb:',
        'Libanesische Flagge'
    ],
    '🇱🇨': [
        'Flagge von St. Lucia',
        ':lc:'
    ],
    '🇱🇮': [
        'Flagge Liechtensteins',
        ':lt:',
        'Liechtensteiner Flagge'
    ],
    '🇱🇰': [
        'Flagge von Sri Lanka',
        ':lk:',
        'Sri-Lanka-Flagge'
    ],
    '🇱🇷': [
        'Flagge von Liberia',
        ':lr:',
        'Liberianische Flagge'
    ],
    '🇱🇸': [
        'Flag of Lesotho',
        ':ls:',
        'Basotho Flag'
    ],
    '🇱🇹': [
        'Litauische Flagge',
        ':lt:',
        'Litauische Flagge'
    ],
    '🇱🇺': [
        'Luxemburgische Flagge',
        ':lu:',
        'Luxemburgische Flagge'
    ],
    '🇱🇻': [
        'Flagge Lettlands',
        ':lv:',
        'Lettische Flagge'
    ],
    '🇱🇾': [
        'Flagge von Libyen',
        ':ly:',
        'Libysche Flagge'
    ],
    '🇲🇦': [
        'Flagge von Marokko',
        ':ma:',
        'Marokkanische Flagge'
    ],
    '🇲🇨': [
        'Flagge von Monaco',
        ':mc:',
        'Mone<unk> gasque Flagge'
    ],
    '🇲🇩': [
        'Flagge der Republik Moldau',
        ':md:',
        'Moldau-Flagge'
    ],
    '🇲🇪': [
        'Flagge von Montenegro',
        ':me:',
        'Montenegrinische Flagge'
    ],
    '🇲🇫': [
        'Markierung von St. Martin',
        ':mf:',
        'Flag: St. Martin'
    ],
    '🇲🇬': [
        'Flagge von Madagaskar',
        ':mg:',
        'Madagascan Flag'
    ],
    '🇲🇭': [
        'Flagge der Marshall-Inseln',
        ':mh:',
        'Marshallese-Flagge'
    ],
    '🇲🇰': [
        'Flagge Mazedoniens',
        ':mk:',
        'Makedonische Flagge'
    ],
    '🇲🇱': [
        'Flagge von Mali',
        ':ml:',
        'Malische Flagge'
    ],
    '🇲🇲': [
        'Flagge von Myanmar (Burma)',
        ':mm:',
        'Myanmarische Flagge',
        'Flagge für Birma',
        'Birmanische Flagge'
    ],
    '🇲🇳': [
        'Flagge der Mongolei',
        ':mn:',
        'Mongolische Flagge'
    ],
    '🇲🇴': [
        'Flagge Macaus Sar China',
        ':mo:',
        'Macanische Flagge'
    ],
    '🇲🇵': [
        'Flagge der Nördlichen Marianen-Inseln',
        ':mp:',
        'Mikronesische Flagge'
    ],
    '🇲🇶': [
        'Flagge von Martinique',
        ':mq:',
        'Schlangenflagge von Martinique',
        'Martiniquais Flagge'
    ],
    '🇲🇷': [
        'Flagge von Mauretanien',
        ':mr:',
        'Mauretanische Flagge'
    ],
    '🇲🇸': [
        'Flag of Montserrat',
        ':ms:',
        'Montserratian Flag'
    ],
    '🇲🇹': [
        'Flagge von Malta',
        ':mt:',
        'Maltese Flag'
    ],
    '🇲🇺': [
        'Flag of Mauritius',
        ':mu:',
        'Mauritius Flagge'
    ],
    '🇲🇻': [
        'Flagge der Malediven',
        ':mv:',
        'Malediven Flagge'
    ],
    '🇲🇼': [
        'Flagge von Malawi',
        ':mw:',
        'Malawian Flag'
    ],
    '🇲🇽': [
        'Flagge von Mexiko',
        ':mx:',
        'Mexikanische Flagge'
    ],
    '🇲🇾': [
        'Flagge von Malaysia',
        ':my:',
        'Malaysian Flag'
    ],
    '🇲🇿': [
        'Flagge von Mosambik',
        ':mz:',
        'Mosambikanische Flagge'
    ],
    '🇳🇦': [
        'Flagge Namibias',
        ':na:',
        'Namibian Flag'
    ],
    '🇳🇨': [
        'Flagge Neukaledonien',
        ':nc:',
        'Neue Kaledonische Flagge'
    ],
    '🇳🇪': [
        'Flagge von Niger',
        ':ne:',
        'Nigeria-Flagge'
    ],
    '🇳🇫': [
        'Flagge der Norfolk-Insel',
        ':nf:',
        'Norfolk-Inselflagge'
    ],
    '🇳🇬': [
        'Flagge Nigerias',
        ':ng:',
        'Nigerianische Flagge'
    ],
    '🇳🇮': [
        'Flag of Nicaragua',
        ':ni:',
        'Nicaraguan Flag'
    ],
    '🇳🇱': [
        'Flagge der Niederlande',
        ':nl:',
        'Niederländische Flagge',
        'Holland'
    ],
    '🇳🇴': [
        'norwegische Flagge',
        ':no:',
        'Norwegische Flagge'
    ],
    '🇳🇵': [
        'Flagge von Nepal',
        ':np:',
        'Nepalesische Flagge'
    ],
    '🇳🇷': [
        'Flagge von Nauru',
        ':nr:',
        'Nauruan Flag'
    ],
    '🇳🇺': [
        'Flagge von Niue',
        ':nu:',
        'Niuean Flag'
    ],
    '🇳🇿': [
        'Flagge Neuseelands',
        ':nz:',
        'Kiwi Flagge'
    ],
    '🇴🇲': [
        'Flagge von Oman',
        ':om:',
        'Omani Flagge'
    ],
    '🇵🇦': [
        'Flagge von Panama',
        ':pa:',
        'Panamanische Flagge'
    ],
    '🇵🇪': [
        'Flagge von Peru',
        ':pe:',
        'Peruanische Flagge'
    ],
    '🇵🇫': [
        'Flagge der Französischen Polynesien',
        ':pf:',
        'Französische polynesische Flagge'
    ],
    '🇵🇬': [
        'Flagge von Papua-Neuguinea',
        ':pg:',
        'PNG-Flagge',
        'Papua New Guinean Flag'
    ],
    '🇵🇭': [
        'Flagge der Philippinen',
        ':ph:'
    ],
    '🇵🇰': [
        'Flagge von Pakistan',
        ':pk:',
        'Pakistanische Flagge'
    ],
    '🇵🇱': [
        'Flagge Polens',
        ':pl:',
        'Polnische Flagge'
    ],
    '🇵🇲': [
        'Flagge von Saint Pierre & Miquelon',
        ':pm:'
    ],
    '🇵🇳': [
        'Fahne von Pitcairn',
        ':pn:'
    ],
    '🇵🇷': [
        'Flagge von Puerto Rico',
        ':pr:',
        'Puerto Rica Flagge'
    ],
    '🇵🇸': [
        'Flagge der palästinensischen Gebiete',
        ':ps:',
        'Palestine'
    ],
    '🇵🇹': [
        'Flagge von Portugal',
        ':pt:',
        'Portugiesisch Flagge'
    ],
    '🇵🇼': [
        'Flagge von Palau',
        ':pw:',
        'Palauan Flagge'
    ],
    '🇵🇾': [
        'Flagge von Paraguay',
        ':py:',
        'Paraguayan Flag'
    ],
    '🇶🇦': [
        'Flagge von Katar',
        ':qa:',
        'Katari-Flagge'
    ],
    '🇷🇪': [
        'Flagge von Re<unk> union',
        ':re:',
        'Re<unk> Gewerkschaftsflagge'
    ],
    '🇷🇴': [
        'Flagge Rumäniens',
        ':ro:',
        'Rumänische Flagge'
    ],
    '🇷🇸': [
        'Flagge Serbiens',
        ':rs:',
        'Serbische Flagge'
    ],
    '🇷🇺': [
        'Flagge von Russland',
        ':ru:',
        'Russische Flagge'
    ],
    '🇷🇼': [
        'Flag of Rwanda',
        ':rw:',
        'Rwandan Flag'
    ],
    '🇸🇦': [
        'Flagge Saudi-Arabiens',
        ':sa:',
        'Saudi-Arabien-Flagge'
    ],
    '🇸🇧': [
        'Flagge der Salomonen',
        ':sb:',
        'Salomon Islander Flagge'
    ],
    '🇸🇨': [
        'Flagge der Seychellen',
        ':sc:',
        'Seychellois Flag'
    ],
    '🇸🇩': [
        'Flagge des Sudan',
        ':sd:',
        'Sudanese Flag'
    ],
    '🇸🇪': [
        'Flagge Schwedens',
        ':se:',
        'Schwedische Flagge'
    ],
    '🇸🇬': [
        'Flagge von Singapur',
        ':sg:',
        'Singapurische Flagge'
    ],
    '🇸🇭': [
        'Flagge von St. Helena',
        ':sh:'
    ],
    '🇸🇮': [
        'Flagge Sloweniens',
        ':si:',
        'Slowenische Flagge'
    ],
    '🇸🇯': [
        'Flagge von Spitzbergen & Jan Mayen',
        ':sj:'
    ],
    '🇸🇰': [
        'Flagge der Slowakei',
        ':sk:',
        'Slowakische Flagge',
        'Slovakian Flag'
    ],
    '🇸🇱': [
        'Flagge von Sierra Leone',
        ':sl:',
        'Sierra Leonean Flag'
    ],
    '🇸🇲': [
        'Markierung von San Marino',
        ':sm:',
        'Sammarinesische Flagge'
    ],
    '🇸🇳': [
        'Flagge des Senegal',
        ':sn:',
        'Sengalesische Flagge'
    ],
    '🇸🇴': [
        'Flagge von Somalia',
        ':so:',
        'Somalian Flag'
    ],
    '🇸🇷': [
        'Flagge von Suriname',
        ':sr:',
        'Surinamer Flagge'
    ],
    '🇸🇸': [
        'Flagge des Südsudan',
        ':ss:',
        'Südsudanesische Flagge'
    ],
    '🇸🇹': [
        'Flagge von Sa<unk> o Tome<unk> & Pri<unk> ncipe',
        ':st:'
    ],
    '🇸🇻': [
        'Flagge von El Salvador',
        ':sv:',
        'El Salvadoranische Flagge'
    ],
    '🇸🇽': [
        'Flagge von Sint Maarten',
        ':sx:'
    ],
    '🇸🇾': [
        'Syrien-Flagge',
        ':sy:',
        'Syrische Flagge'
    ],
    '🇸🇿': [
        'Markierung von Swasiland',
        ':sz:',
        'Eswatini Flagge'
    ],
    '🇹🇦': [
        'Flag of Tristan Da Cunha',
        ':ta:'
    ],
    '🇹🇨': [
        'Flagge der Türken & Caicos Inseln',
        ':tc:'
    ],
    '🇹🇩': [
        'Flagge des Tschad',
        ':td:',
        'Tschadische Flagge'
    ],
    '🇹🇫': [
        'Flagge französischer Südgebiete',
        ':tf:',
        'Französische Südflagge'
    ],
    '🇹🇬': [
        'Togo Markierung',
        ':tg:',
        'Togolese Flag'
    ],
    '🇹🇭': [
        'Flagge von Thailand',
        ':th:',
        'Thailändische Flagge'
    ],
    '🇹🇯': [
        'Flagge von Tadschikistan',
        ':tj:',
        'Tadschik-Flagge'
    ],
    '🇹🇰': [
        'Markierung von Tokelau',
        ':tk:',
        'Tokelauische Flagge'
    ],
    '🇹🇱': [
        'Flagge von Timor-Leste',
        ':tl:',
        'Timor-Leste Flagge',
        'Osttimoresische Flagge'
    ],
    '🇹🇲': [
        'Flagge von Turkmenistan',
        ':tm:',
        'Turkmen Flag'
    ],
    '🇹🇳': [
        'Flagge von Tunesien',
        ':tn:',
        'Tunesische Flagge'
    ],
    '🇹🇴': [
        'Flagge von Tonga',
        ':to:',
        'Tongan Flag'
    ],
    '🇹🇷': [
        'Flagge der Türkei',
        ':tr:',
        'Türkische Flagge'
    ],
    '🇹🇹': [
        'Flagge von Trinidad & Tobago',
        ':tt:'
    ],
    '🇹🇻': [
        'Flagge von Tuvalu',
        ':tv:',
        'Tuvaluanische Flagge'
    ],
    '🇹🇼': [
        'Flagge Taiwans',
        ':tw:',
        'Taiwanesische Flagge'
    ],
    '🇹🇿': [
        'Flagge Tansanias',
        ':tz:',
        'Tanzanian Flag'
    ],
    '🇺🇦': [
        'Flagge der Ukraine',
        ':ua:',
        'Ukrainische Flagge'
    ],
    '🇺🇬': [
        'Flagge Ugandas',
        ':ug:',
        'Uganda-Flagge'
    ],
    '🇺🇲': [
        'Fahne: Amerikanische Außeninseln',
        ':um:'
    ],
    '🇺🇸': [
        'Flagge der Vereinigten Staaten',
        ':us:',
        'Amerikanische Flagge',
        'USA-Flagge'
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
        'Flagge des Heiligen Stuhls',
        ':va:',
        'Vanticanien Flagge'
    ],
    '🇻🇨': [
        'Flagge von St. Vincent & Grenadinen',
        ':vc:'
    ],
    '🇻🇪': [
        'Flagge Venezuelas',
        ':ve:',
        'venezolanische Flagge'
    ],
    '🇻🇬': [
        'Flagge der britischen Jungferninseln',
        ':vg:',
        'Britische Jungferninselflagge'
    ],
    '🇻🇮': [
        'Flagge der US-Jungferninseln',
        ':vi:',
        'US Jungferninseln Flagge'
    ],
    '🇻🇳': [
        'Flagge Vietnams',
        ':vn:',
        'Vietnamesische Flagge'
    ],
    '🇻🇺': [
        'Flag of Vanuatu',
        ':vu:',
        'Ni-Vanuatu Flag'
    ],
    '🇼🇫': [
        'Flagge von Wallis & Futuna',
        ':wf:'
    ],
    '🇼🇸': [
        'Flagge von Samoa',
        ':ws:',
        'Samoan Flag'
    ],
    '🇽🇰': [
        'Flagge des Kosovo',
        ':xk:',
        'Kosovar Flag'
    ],
    '🇾🇪': [
        'Flagge des Jemen',
        ':ye:',
        'Jemen-Flagge'
    ],
    '🇾🇹': [
        'Flagge von Mayotte',
        ':yt:',
        'Mayotte Flagge'
    ],
    '🇿🇦': [
        'Flagge Südafrikas',
        ':za:',
        'Südafrikanische Flagge'
    ],
    '🇿🇲': [
        'Flagge von Sambia',
        ':zm:',
        'Zambian Flag'
    ],
    '🇿🇼': [
        'Flagge Simbabwes',
        ':zw:',
        'Simbabwes Flagge',
        'Zim Flagge'
    ]
};
/*sports*/
emojis_language[lang][8] = {
    '🧗{{skin_tone}}‍♂️': [
        'Mann Klettern',
        ':man_climbing:',
        ':climbing:',
        'Männlicher Felskletterer',
        'Mann Kletterer',
        ':man:'
    ],
    '🧗{{skin_tone}}‍♀️': [
        'Frauen Klettern',
        ':woman_climbing:',
        ':climbing:',
        'Weiblicher Felskletterer',
        'Frauenkletterin',
        ':woman:'
    ],
    '🧗{{skin_tone}}': [
        'Person Klettern',
        ':person_climbing:',
        ':climbing:',
        'Mensch-Fels-Kletterer',
        'Person Kletterer',
        ':person:'
    ],
    '🏇{{skin_tone}}': [
        'Pferderennen',
        ':horse_racing:',
        'Pferderennen',
        'Joachim'
    ],
    '⛷{{skin_tone}}‍️': [
        'Skifahrer',
        ':skier:'
    ],
    '🏂{{skin_tone}}‍': [
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
        'Frauen-Golfer',
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
        'Mann Surfer',
        ':man_surfer:',
        ':surfer:',
        ':man:'
    ],
    '🏄{{skin_tone}}‍♀️': [
        'Frauen-Surfer',
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
        'Manövrierboot',
        ':man_rowing_boat:',
        ':rowing_boat:',
        ':man:'
    ],
    '🚣{{skin_tone}}‍♀️': [
        'Damenrührenboot',
        ':woman_rowing_boat:',
        ':rowing_boat:',
        ':woman:'
    ],
    '🚣{{skin_tone}}': [
        'Person rührendes Boot',
        ':person_rowing_boat:',
        ':rowing_boat:',
        ':person:'
    ],
    '🏊{{skin_tone}}‍♂️': [
        'Mann Schwimmen',
        ':man_swimming:',
        ':swimming:',
        'Mann Schwimmer',
        ':man:'
    ],
    '🏊{{skin_tone}}‍♀️': [
        'Frauen Schwimmen',
        ':woman_swimming:',
        ':swimming:',
        'Frauen-Schwimmer',
        ':woman:'
    ],
    '🏊{{skin_tone}}': [
        'Person Schwimmen',
        ':person_swimming:',
        ':swimming:',
        'Person Schwimmer',
        ':person:'
    ],
    '⛹{{skin_tone}}‍️‍♂️': [
        'Mann springende Kugel',
        ':man_bouncing_ball:',
        ':bouncing_ball:',
        'Mann Basketballspieler',
        ':man:'
    ],
    '⛹️{{skin_tone}}‍♀️': [
        'Frauen springender Ball',
        ':woman_bouncing_ball:',
        ':boucing_ball:',
        'Damen-Basketball Spieler',
        ':woman:'
    ],
    '⛹️{{skin_tone}}': [
        'Person Bouncing Kugel',
        ':person_bouncing_ball:',
        ':boucing_ball:',
        'Person Basketballspieler',
        ':person:'
    ],
    '🏋️{{skin_tone}}‍♂️': [
        'Mann heben Gewichtungen',
        ':man_lifting_weights:',
        ':lifting_weights:',
        'Mann Gewichtslifter',
        ':man:'
    ],
    '🏋️{{skin_tone}}‍♀️': [
        'Gewichtung der Frau',
        ':woman_lifting_weights:',
        ':lifting_weights:',
        'Frauen-Gewichtslifter',
        ':woman:'
    ],
    '🏋️{{skin_tone}}': [
        'Persönliches Hebungsgewicht',
        ':person_lifting_weights:',
        ':lifting_weights:',
        'Personengewicht',
        ':person:'
    ],
    '🚴{{skin_tone}}‍♂️': [
        'Mann Radfahren',
        ':man_biking:',
        ':biking:',
        'Mann Radfahrer',
        'Männlicher Cyclist',
        ':man:'
    ],
    '🚴{{skin_tone}}‍♀️': [
        'Frauen-Bike',
        ':woman_biking:',
        ':biking:',
        'Frauen-Radfahrer',
        'Weiblicher Zyklist',
        ':woman:'
    ],
    '🚴{{skin_tone}}': [
        'Personenradfahren',
        ':person_biking:',
        ':biking:',
        'Personenradfahrer',
        'Personenradfahrer',
        ':person:'
    ],
    '🚵{{skin_tone}}‍♂️': [
        'Mann Mountainbiken',
        ':man_mountain_bike:',
        ':mountain_bike:',
        'Mann Bergfahrer',
        ':man:'
    ],
    '🚵{{skin_tone}}‍♀️': [
        'Frauen Mountainbiken',
        ':woman_mountain_bike:',
        ':mountain_bike:',
        'Frau Mountainbiker',
        ':woman:'
    ],
    '🚵{{skin_tone}}': [
        'Person Mountainbiken',
        ':person_mountain_bike:',
        ':mountain_bike:',
        'Person Mountainbiker',
        ':person:'
    ],
    '🤸{{skin_tone}}‍♂️': [
        'Mann Kartradfahren',
        ':man_cartwheeling:',
        ':cartwheeling:',
        'Man Doing Warenkorb Rad',
        ':man:'
    ],
    '🤸{{skin_tone}}‍♀️': [
        'Weibchen',
        ':woman_cartwheeling:',
        ':cartwheeling:',
        'Frauen-Doing-Wagenrad',
        ':woman:'
    ],
    '🤸{{skin_tone}}': [
        'Person Kartwheeling',
        ':person_cartwheeling:',
        ':cartwheeling:',
        'Person Doing Warenkorb Rad',
        ':person:'
    ],
    '🤼‍♂️': [
        'Männer Wrestling',
        ':men_wrestling:',
        ':wrestling:',
        'Ringen',
        'Wrestler',
        ':man:'
    ],
    '🤼‍♀️': [
        'Frauen ringen',
        ':women_wrestling:',
        ':wrestling:',
        'Ringen',
        'Wrestler',
        ':woman:'
    ],
    '🤼': [
        'Leute ringen',
        ':people_wrestling:',
        ':wrestling:',
        'Ringen',
        'Wrestler',
        ':person:'
    ],
    '🤽{{skin_tone}}‍♂️': [
        'Mann spielt Wasser-Polo',
        ':man_playing_water_polo:',
        ':playing_water_polo:',
        ':man:'
    ],
    '🤽{{skin_tone}}‍♀️': [
        'Frauen-Wasser-Polo',
        ':woman_playing_water_polo:',
        ':playing_water_polo:',
        ':woman:'
    ],
    '🤽{{skin_tone}}': [
        'Person, die Wasser-Polo spielt',
        ':person_playing_water_polo:',
        ':playing_water_polo:',
        ':person:'
    ],
    '🤾{{skin_tone}}‍♂️': [
        'Mann spielt Handball',
        ':man_playing_handball:',
        ':playing_handball:',
        ':man:'
    ],
    '🤾{{skin_tone}}‍♀️': [
        'Frauen-Spielhandball',
        ':woman_playing_handball:',
        ':playing_handball:',
        ':woman:'
    ],
    '🤾{{skin_tone}}': [
        'Spieler spielen Handball',
        ':person_playing_handball:',
        ':playing_handball:',
        ':person:'
    ],
    '🤹{{skin_tone}}‍♂️': [
        'Mangelschmiede',
        ':man_juggling:',
        ':juggling:',
        'Männlicher Juggler',
        ':man:'
    ],
    '🤹{{skin_tone}}‍♀️': [
        'Frauen-Jugging',
        ':woman_juggling:',
        ':juggling:',
        'Weiblicher Juggler',
        ':woman:'
    ],
    '🤹{{skin_tone}}': [
        'Personen-Juggen',
        ':person_juggling:',
        ':juggling:',
        'Person Juggler',
        ':person:'
    ],
    '🧘{{skin_tone}}‍♂️': [
        'Mann in Lotus Position',
        ':man_lotus_position:',
        ':lotus_position:',
        'Meditation',
        'Zen',
        'Kreuz Bein',
        'Yoga',
        ':man:'
    ],
    '🧘{{skin_tone}}‍♀️': [
        'Frau in Lotus Position',
        ':woman_lotus_position:',
        ':lotus_position:',
        'Meditation',
        'Zen',
        'Kreuz Bein',
        'Yoga',
        ':woman:'
    ],
    '🧘{{skin_tone}}': [
        'Person in Lotus Position',
        ':person_Lotus:_Position',
        ':lotus_position:',
        'Meditation',
        'Zen',
        'Kreuz Bein',
        'Yoga',
        ':person:'
    ],
    '🏃{{skin_tone}}‍♂️': [
        'Mann läuft',
        ':man_running:',
        ':running:',
        ':man:'
    ],
    '🏃{{skin_tone}}‍♀️': [
        'Frau läuft',
        ':woman_running:',
        ':running:',
        ':woman:'
    ],
    '🏃{{skin_tone}}': [
        'Person läuft',
        ':person_running:',
        ':running:',
        ':person:'
    ],
    '🕺{{skin_tone}}': [
        'Mensch-Tanz',
        ':man_dancing:',
        ':dancing:',
        ':man:'
    ],
    '💃{{skin_tone}}': [
        'Frauentanz',
        ':woman_dancing:',
        ':dancing:',
        ':woman:'
    ],
    '🤺': [
        'Personenzaunen',
        ':person_fencing:',
        'Fänger',
        ':fencing:'
    ],
    '🏆': [
        'Trophäe',
        ':trophy:',
        'Meisterschaft',
        'Sieger',
        ':gold:',
        ':yellow:'
    ],
    '🏅': [
        'Sport-Medaille',
        ':sports_medal:',
        ':medal:',
        ':gold:',
        ':yellow:'
    ],
    '🥇': [
        '1. Platz Medaille',
        ':first_place_medal:',
        ':gold_medal:',
        'Erster Platz Medaille',
        'Goldmedaille',
        ':yellow:',
        ':gold:'
    ],
    '🥈': [
        '2. Platz Medaille',
        ':second_place_medal:',
        ':silver_medal:',
        'Zweiter Platz Medaille',
        'Silbermedaille',
        ':gray:',
        ':grey:',
        ':silver:'
    ],
    '🥉': [
        '3. Platz Medaille',
        ':third_place_medal:',
        ':bronze_medal:',
        '3. Platz Medaille',
        'Bronze-Medaille',
        ':brown:',
        ':bronze:'
    ],
    '⚽': [
        'Fußball',
        ':football:',
        'Fußball',
        ':white:',
        ':black:'
    ],
    '⚾': [
        'Baseball',
        ':baseball:',
        'Softball',
        ':white:'
    ],
    '🥎': [
        'Softball',
        ':softball:',
        ':yellow:'
    ],
    '🏀': [
        'Basketball',
        ':basketball:',
        ':orange:',
        'Basketball und Hoop'
    ],
    '🏐': [
        'Volleyball',
        ':volleyball:',
        ':white:'
    ],
    '🏈': [
        'Amerikanischer Fußball',
        ':american_football:',
        'Fußball',
        'Gridiron',
        'Superbowle',
        ':brown:'
    ],
    '🏉': [
        'Rugby-Fußball',
        ':rugby:',
        'Fußball',
        'Liga',
        'Rugby',
        'Union'
    ],
    '🎾': [
        'Tennis',
        ':tennis:',
        ':ball:',
        'Kugel',
        'Raster',
        'Racquet',
        ':yellow:'
    ],
    '🥏': [
        'Flying Disk',
        ':flying_disk:',
        'Frisbee'
    ],
    '🎳': [
        'Bowling',
        ':bowling:',
        'Pins',
        'Skitzel',
        'Zehn Pin Bowling'
    ],
    '🏏': [
        'Cricket',
        ':cricket:',
        'Fledermaus',
        'Kugel'
    ],
    '🏑': [
        'Feldhockey',
        ':field_hockey:',
        'Kugel',
        'Legen'
    ],
    '🏒': [
        'Eishockey',
        ':ice_hockey:',
        'Kugel',
        'Legen'
    ],
    '🥍': [
        'Lacrosse',
        ':lacrosse:',
        'Kugel',
        'Legen',
        ':red:'
    ],
    '🏓': [
        'Ping Pong',
        ':ping_pong:',
        ':table_tennis:',
        'Tischtennis',
        'Kugel',
        'Paddle'
    ],
    '🏸': [
        'Badminton',
        ':badminton:',
        'Shuttlecock',
        'Racquet'
    ],
    '🥊': [
        'Boxhandschuh',
        ':boxing_glove:',
        ':red:'
    ],
    '🥋': [
        'Kampfkünste Uniform',
        ':martial_arts_uniform:',
        ':judo:',
        ':karate:',
        ':kung_fu:',
        'Lila',
        'Karate',
        'Kung fu'
    ],
    '⛳': [
        'Flagge in Loch',
        ':flag_in_hole:',
        ':golf_flag:',
        'Golfflagge'
    ],
    '⛸️': [
        'Eislaufen',
        ':ice_skate:',
        'Eislaufen'
    ],
    '🎣': [
        'Fischerei',
        ':fishing:',
        'Pole',
        'Fisch',
        'Angelrute'
    ],
    '🎽': [
        'Laufendes Hemd',
        ':running_shirt:',
        'Einzel',
        'Schräg'
    ],
    '🎿': [
        'Ski',
        ':skis:',
        'Skifahren',
        'Boot'
    ],
    '🛷': [
        'Schlitten',
        ':sled:'
    ],
    '🥌': [
        'Curling-Stein',
        ':curling_stone:'
    ],
    '🎯': [
        'Direkter Treffer',
        ':direct_hit:',
        'Bogenschießen',
        'Bullseye',
        'Dylan'
    ],
    '🎱': [
        'Pool 8 Kugel',
        ':pool_8_ball:',
        'Cue Kugel',
        'Snooker',
        'Billard',
        ':black:'
    ],
    '🎮': [
        'Videospiel-Controller',
        ':video_game_controller:',
        ':playstation:',
        ':xbox:',
        'Playstation',
        'Xbox',
        'Gamepad',
        'Wii U'
    ],
    '♟️': [
        'Schwarzer Schachpfoten',
        ':black_chess_pawn:',
        ':black:'
    ],
    '🏹': [
        'Bogen und Pfeil',
        ':arch:',
        'Bogen'
    ],
    '🥅': [
        'Ziel Netz',
        ':goal_net:'
    ],
    '🀄': [
        'Mahjong-Roter Drache',
        ':mahjong:',
        'Mahjong',
        'Mahjong Tile',
        '中',
        'Mahjong Tile Roter Drache'
    ],
    '🎴': [
        'Blumenspielkarten',
        ':flower_playing_cards:',
        'Kartenstapel',
        'Hanafuda',
        'Hwatu',
        'Karten abspielen'
    ]
};
/*travel and places*/
emojis_language[lang][9] = {
    '🚂': [
        'Dampflokomotive',
        ':steam_train:',
        'Dampfzug',
        'Lokomotive'
    ],
    '🚃': [
        'Eisenbahnwagen',
        ':railway_car:',
        'Eisenbahn',
        'Eisenbahn',
        'Eisenbahn',
        'Eisenbahnwagen'
    ],
    '🚄': [
        'Hochgeschwindigkeitszug',
        ':high_speed_train:'
    ],
    '🚅': [
        'Kugelzug',
        ':bullet_train:',
        'Shinkansen',
        'Hochgeschwindigkeitszug mit Kugelnase'
    ],
    '🚆': [
        'Zug',
        ':train:'
    ],
    '🚇': [
        'Unterirdisch',
        ':underground:',
        'Röhre',
        'Metro',
        'U-Bahn'
    ],
    '🚈': [
        'Lichtschiene',
        ':light_rail:',
        'Zug'
    ],
    '🚊': [
        'Straßenbahn',
        ':tram:'
    ],
    '🚝': [
        'Monorail',
        ':monorail:',
        'Zug'
    ],
    '🚞': [
        'Bergbahn',
        ':mountain_railway:',
        'Funicular',
        'Zug und Berg'
    ],
    '🚋': [
        'Straßenbahn',
        ':tram_car:'
    ],
    '🚌': [
        'Bus',
        ':bus:',
        'Trainer'
    ],
    '🚍': [
        'Laufender Bus',
        ':front_of_bus:',
        'Vorderer Bus'
    ],
    '🚎': [
        'Trolleybus',
        ':trolleybus:',
        'Elektro-Bus'
    ],
    '🚐': [
        'Minibus',
        ':minibus:',
        'Kleinwagen',
        'Personen-Mover'
    ],
    '🚑': [
        'Krankenwagen',
        ':ambulance:'
    ],
    '🚒': [
        'Feuermaschine',
        ':fire_engine:',
        'Feuerwehr',
        'Feuerwehrwagen'
    ],
    '🚓': [
        'Polizeiwagen',
        ':police_car:',
        'Bullenwagen',
        'Seite des Polizeiwagens'
    ],
    '🚔': [
        'Laufendes Polizeiauto',
        ':front_of_police_car:',
        'Vorderseite des Polizeiwagens',
        'Bullenwagen'
    ],
    '🚕': [
        'Taxi',
        ':taxi:',
        'New York Taxi',
        'Taxistand'
    ],
    '🚖': [
        'Taxi',
        ':front_of_taxi:',
        'Anstehendes Taxi',
        'Vordere Taxifahrt'
    ],
    '🚗': [
        'Auto',
        ':car:',
        'Rotes Auto',
        'Autoseite',
        'Auto'
    ],
    '🚘': [
        'Kommendes Automobil',
        ':front_of_car:',
        'Rotes Auto',
        'Vorderseite des Wagens'
    ],
    '🚚': [
        'Lieferwagen',
        ':lorry:',
        'Lkw'
    ],
    '🚛': [
        'Lkw ausrichten',
        ':articulated_lorry:',
        'Grüner Lastwagen'
    ],
    '🚜': [
        'Traktor',
        ':tractor:',
        'Farm'
    ],
    '🛻': [
        'Lastwagen abholen',
        ':pickup_truck:'
    ],
    '🏎️': [
        'Rennwagen',
        ':racing_car:',
        'F1',
        'Formel 1',
        'Rennwagen'
    ],
    '🏍️': [
        'Motorrad',
        ':motorbike:',
        'Motorrad'
    ],
    '🛵': [
        'Motorroller',
        ':motor_scooter:',
        'Vespa',
        'Motorrad',
        'Motorrad'
    ],
    '🛺': [
        'Auto-Rickshaw',
        ':auto_rickshaw:',
        'Tuk Tuk'
    ],
    '🚲': [
        'Fahrrad',
        ':bike:',
        'Fahrrad'
    ],
    '🛴': [
        'Kick-Scooter',
        ':kick_scooter:'
    ],
    '⛵': [
        'Segelboot',
        ':sailboat:',
        'Dinghy',
        'Yacht'
    ],
    '🚤': [
        'Speedboot',
        ':speedboat:',
        'Motorboot',
        'Motorboot'
    ],
    '🛳️': [
        'Passagierschiff',
        ':passenger_ship:'
    ],
    '⛴️': [
        'Fähre',
        ':ferry:'
    ],
    '🛥️': [
        'Motorboot',
        ':motor_boat:'
    ],
    '🚢': [
        'Kreuzfahrtschiff',
        ':cruise_ship:'
    ],
    '✈️': [
        'Flugzeug',
        ':airplane:',
        'Aeroplane'
    ],
    '🛩️': [
        'Kleines Flugzeug',
        ':small_airplane:',
        'Kleines Flugzeug'
    ],
    '🚁': [
        'Hubschrauber',
        ':helicopter:'
    ],
    '🚟': [
        'Bahnunterbrechung',
        ':suspension_railway:'
    ],
    '🚠': [
        'Bergbahn',
        ':mountain_cableway:'
    ],
    '🚡': [
        'Luftbahnstrecke',
        ':aerial_tramway:',
        'Seilbahn',
        'Gondola',
        'Seilbahn'
    ],
    '🛰️': [
        'Satellit',
        ':satellite:'
    ],
    '🚀': [
        'Rakete',
        ':rocket:',
        'Space Shuttle'
    ],
    '🛸': [
        'Flying Saucer',
        ':flying_saucer:',
        'UFO'
    ],
    '🚉': [
        'Bahnhof',
        ':train_station:',
        'Zugplattform'
    ],
    '🚏': [
        'Bushaltestelle',
        ':bus_stop:'
    ],
    '🛣️': [
        'Autobahn',
        ':motorway:',
        'Straße',
        'Autobahn',
        'Interstate'
    ],
    '🛤️': [
        'Bahnstrecke',
        ':railway_track:'
    ],
    '🛫': [
        'Abflug des Flugzeugs',
        ':airplane_departure:',
        'Abheben'
    ],
    '🛬': [
        'Ankunft des Flugzeugs',
        ':airplane_arrival:',
        'Flugzeug Ankunft',
        'Landung'
    ],
    '🗾': [
        'Karte von Japan',
        ':map_of_japan:'
    ],
    '⛰️': [
        'Berg',
        ':mountain:'
    ],
    '🏔️': [
        'Schnee bedeckter Berg',
        ':snow_capped_mountain:'
    ],
    '🌋': [
        'Vulkan',
        ':volcano:'
    ],
    '🗻': [
        'Mount Fuji',
        ':mount_fuji:',
        'Fuji-san'
    ],
    '🏕️': [
        'Zelten',
        ':camping:',
        'Campingplatz'
    ],
    '🏖️': [
        'Strand mit Umbrella',
        ':beach_with_umbrella:'
    ],
    '🏜️': [
        'Desert',
        ':desert:'
    ],
    '🏝️': [
        'Wüsteninsel',
        ':desert_island:'
    ],
    '🏞️': [
        'Nationalpark',
        ':national_park:'
    ],
    '🏟️': [
        'Stadion',
        ':stadium:',
        'Tribüne',
        'Sportstadion'
    ],
    '🏛️': [
        'Klassisches Gebäude',
        ':classical_building:',
        'Griechisch',
        'Rom'
    ],
    '🏗️': [
        'Gebäudebau',
        ':building_construction:',
        'Krane'
    ],
    '🏘️': [
        'Häuser Gebäude',
        ':houses_building:',
        'Häusergruppe'
    ],
    '🏚️': [
        'Renovierungsarbeiten',
        ':old_house:',
        'Verlassenes Haus',
        'Altes Haus',
        'Gejagtes Haus'
    ],
    '🏠': [
        'Startseite',
        ':home:',
        'Hausbau'
    ],
    '🏡': [
        'Haus mit Garten',
        ':house_with_garden:',
        'Haus und Baum'
    ],
    '🏢': [
        'Bürogebäude',
        ':office_building:',
        'Stadtgebäude',
        'Hochwertiges Gebäude'
    ],
    '🏣': [
        'Japanische Post',
        ':japanese_post_office:',
        'Japanisches Postzeichen'
    ],
    '🏤': [
        'Post',
        ':european_post_office:',
        'Europäisches Postamt'
    ],
    '🏥': [
        'Krankenhaus',
        ':hospital:',
        'E',
        'A&E',
        'Notfallraum',
        'Unfall und Notfall',
        'Rotes Kreuz',
        'Medizinisch'
    ],
    '🏦': [
        'Bank',
        ':bank:',
        'BK',
        'Bakkureru',
        'Bankzweig',
        'Bakkureru'
    ],
    '🏨': [
        'Hotel',
        ':hotel:',
        'Unterkunft',
        'H Gebäude'
    ],
    '🏩': [
        'Hotel lieben',
        ':love_hotel:',
        'Liebesherz Hotel'
    ],
    '🏪': [
        'Convenience Store',
        ':convenience_store:',
        '24-Stunden Store',
        '7-Elf',
        'Eckenladen',
        'Kwik-E-Mart'
    ],
    '🏫': [
        'Schule',
        ':school:',
        'Uhrturm',
        'Grundlegende hohe Mitte'
    ],
    '🏬': [
        'Kaufhaus',
        ':department_store:',
        'Einkaufszentrum',
        'Shop'
    ],
    '🏭': [
        'Fabrik',
        ':factory:',
        'Industrielle',
        'Industrie',
        'Verschmutzung',
        'Smog'
    ],
    '🏯': [
        'Japanische Burg',
        ':japanese_castle:',
        'Festung'
    ],
    '🏰': [
        'Europäische Burg',
        ':european_castle:',
        'Turrets'
    ],
    '💒': [
        'Kirchenherz',
        ':church_heart:',
        'Kirchliche Hochzeit',
        'Ehe'
    ],
    '🗼': [
        'Tokyo Turm',
        ':tokyo_tower:',
        'Eiffelturm',
        'Roter Turm'
    ],
    '🗽': [
        'Freiheitsstatue',
        ':statue_of_liberty:',
        'New York'
    ],
    '⛪': [
        'Kirchengebäude',
        ':church_building:',
        'Kreuz'
    ],
    '🕌': [
        'Moschee',
        ':mosque:',
        'Kuppeldach',
        'Minaret'
    ],
    '🛕': [
        'Hindu-Tempel',
        ':hindu_temple:'
    ],
    '🕍': [
        'Synagoge',
        ':synagogue:',
        'Jüdisch',
        'Synagog',
        'Tempel'
    ],
    '⛩️': [
        'Shinto-Schrein',
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
        'Umbrella auf dem Boden',
        ':beach_umbrella:',
        'Strandumbrella'
    ],
    '🌄': [
        'Sonnenaufgang über den Bergen',
        ':sunrise_over_mountains:',
        'Morgen',
        'Sonnenaufgang'
    ],
    '🌅': [
        'Sonnenaufgang',
        ':sunrise:',
        ':sunset:',
        'Sonnenuntergang'
    ],
    '🌆': [
        'Stadtbild bei Dämmerung',
        ':cityscape_at_dusk:',
        'Orange Himmelsstadt',
        'Dämmerungsstadt'
    ],
    '🌇': [
        'Sonnenuntergang über Gebäude',
        ':sunset_over_buildings:',
        'Stadt Sonnenuntergang'
    ],
    '🌃': [
        'Nacht mit Sternen',
        ':night_with_stars:',
        'Stadt in der Nacht',
        'Sternen-Nacht'
    ],
    '🗿': [
        'Moai',
        ':moai:',
        'Osterinselstatue',
        'Menschliche Felsenschnitzerei',
        'Moyai-Statue'
    ],
    '🌠': [
        'Shooting Star',
        ':shooting_star:',
        'Wenn du dir einen Stern wünschst',
        'Meteoroid'
    ],
    '🌌': [
        'Milchstraße',
        ':milky_way:',
        'Galaxie',
        'Nachthimmel',
        'Raum',
        'Sterne',
        'Universum'
    ],
    '🎑': [
        'Mondansicht Zeremonie',
        ':moon_viewing_ceremony:',
        'Gras, Knödel und Mond',
        'Ernte Mond',
        'Mittel-Herbst-Festival',
        'Tsukimi'
    ],
    '🛖': [
        'Hütte',
        ':hut:'
    ],
    '🎢': [
        'Roller Coaster',
        ':roller_coaster:',
        'Achterbahn',
        'Themenpark'
    ],
    '🛝': [
        'Spielplatz-Folie',
        ':playground_slide:',
        'Baby',
        'Kinder'
    ]
};
/*technologies (smartphones, laptops, etc.) and office*/
emojis_language[lang][10] = {
    '⌚': [
        'Beobachten',
        ':watch:',
        'Timepiece',
        'Apfelwache'
    ],
    '⏰': [
        'Wecker',
        ':alarm_clock:'
    ],
    '⏱️': [
        'Stoppuhr',
        ':stopwatch:'
    ],
    '⏲️': [
        'Timer Uhr',
        ':timer_clock:'
    ],
    '🕰️': [
        'Mantelstückuhr',
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
        'Studio-Mikrofon',
        ':studio_microphone:'
    ],
    '🎚️': [
        'Level Slider',
        ':level_slider:'
    ],
    '🎛️': [
        'Kontrollknopf',
        ':control_knobs:'
    ],
    '📻': [
        'Radio',
        ':radio:',
        'Digital-Radio',
        'Drahtlos'
    ],
    '📱': [
        'Handy',
        ':mobile_phone:',
        'Smartphone',
        'Isabel',
        'Handy'
    ],
    '📲': [
        'Mobiltelefon mit Pfeil nach rechts links',
        ':phone_call:',
        'Telefonanruf',
        'Auf Telefon verweisen'
    ],
    '☎️': [
        'Schwarzes Telefon',
        ':rotary_phone:',
        'Rotary-Telefon',
        ':red:'
    ],
    '📞': [
        'Telefonempfänger',
        ':phone:',
        'Handset',
        'Telefon',
        ':black:'
    ],
    '📟': [
        'Pager',
        ':pager:',
        'Piepser',
        'Brecher'
    ],
    '📠': [
        'Faxgerät',
        ':fax_machine:',
        'Facsimile',
        'Fax'
    ],
    '🔋': [
        'Akku',
        ':battery:',
        'AA Batterie',
        'Telefon-Akku'
    ],
    '🔌': [
        'Elektrischer Stecker',
        ':power_cable:',
        'AC Adaptor',
        'Stromkabel',
        'Stromstecker'
    ],
    '💻': [
        'Laptop',
        ':laptop:',
        'Notizbuch',
        'Personal Computer',
        'PN',
        'MacBook',
        'Oberfläche'
    ],
    '🖥️': [
        'Desktop-Computer',
        ':desktop_computer:',
        'iMac',
        'PN'
    ],
    '🖨️': [
        'Drucker',
        ':printer:'
    ],
    '⌨️': [
        'Keyboard',
        ':keyboard:'
    ],
    '🖱️': [
        'Computermaus',
        ':computer_mouse:',
        'Drei-Tasten-Maus'
    ],
    '🖲️': [
        'Trackball',
        ':trackball:'
    ],
    '💽': [
        'Computer-Disk',
        ':blu_ray:',
        'Minidisc',
        'CD',
        'DVD',
        'Blu-ray',
        'BD'
    ],
    '💾': [
        'Diskette',
        ':floppy_disk:',
        '3,5 Diskette',
        'Platte'
    ],
    '💿': [
        'Optische Festplatte',
        ':cd:',
        'CD',
        'CD-ROM',
        'Kompakte Disc'
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
        'Filmkamera',
        'Hollywood',
        'Film'
    ],
    '🎞️': [
        'Filmbilder',
        ':film_frames:'
    ],
    '📽️': [
        'Filmprojektor',
        ':film_projector:'
    ],
    '📺': [
        'Fernsehen',
        ':tv:',
        'TM'
    ],
    '📷': [
        'Digitalkamera',
        ':digital_camera:'
    ],
    '📸': [
        'Kamera mit Blitz',
        ':camera_flash:'
    ],
    '📹': [
        'Videokamera',
        ':video_camera:',
        'Camcorder'
    ],
    '📼': [
        'Videokassette',
        ':vhs:',
        'VHS',
        'VCR',
        'Videoband',
        'Videokassette'
    ],
    '💳': [
        'Kreditkarte',
        ':credit_card:',
        'Debitkarte',
        'AMEX',
        'Diners Club',
        'American Express',
        'Mastercard',
        'VISA-Karte'
    ],
    '📧': [
        'E-Mail',
        ':email:',
        'E-Mail'
    ],
    '📨': [
        'Eingehender Umschlag',
        ':incoming_envelope:',
        'Umschlag mit Zeilen',
        'Schneller Umschlag'
    ],
    '📩': [
        'Umschlag mit Abwärtspfeil oben',
        ':insert_in_envelope:',
        'Pfeilumschlag nach unten',
        'In Umschlag einfügen'
    ],
    '📤': [
        'Outbox-Tray',
        ':outbox_tray:'
    ],
    '📥': [
        'Posteingang',
        ':inbox_tray:'
    ],
    '📮': [
        'Postfach',
        ':postbox:'
    ],
    '📁': [
        'Dateiordner',
        ':file_folder:',
        'Ordner',
        'Verzeichnis',
        'Dateiordner geschlossen'
    ],
    '📂': [
        'Dateiordner öffnen',
        ':open_file_folder:',
        'Verzeichnis'
    ],
    '🗂️': [
        'Kartenindex-Splitter',
        ':card_index_dividers:'
    ],
    '📅': [
        'Kalender',
        ':calendar:',
        '17. Juli',
        'Welt-Emoji-Tag'
    ],
    '🗓️': [
        'Spiralkalender Pad',
        ':spiral_calendar_pad:'
    ],
    '📆': [
        'Tear-Off Kalender',
        ':day_calendar:',
        'Tageskalender',
        'Tischkalender'
    ],
    '📈': [
        'Diagramm erhöhen',
        ':increasing_chart:',
        'Positives Diagramm',
        'Auf-Punkte-Diagramm',
        'Diagramm mit Aufwärtstrend'
    ],
    '📉': [
        'Diagramm verringern',
        ':decreasing_chart:',
        'Negatives Diagramm',
        'Abwärtsdiagramm',
        'Diagramm mit Abwärtstrend'
    ],
    '📊': [
        'Balkendiagramm',
        ':bar_chart:',
        'Balkendiagramm'
    ],
    '📌': [
        'Pushpin',
        ':pushpin:',
        'Thumb Tack',
        ':red:'
    ],
    '📋': [
        'Zwischenablage',
        ':clipboard:'
    ],
    '📍': [
        'Runden Pushpin',
        ':round_pushpin:',
        'Pin fallen gelassen',
        'Kartenpin',
        'Pin',
        'Roter Pin',
        ':red:'
    ],
    '📎': [
        'Papierclip',
        ':paperclip:',
        'Clippy'
    ],
    '📏': [
        'Geradliniger Regler',
        ':straight_ruler:'
    ],
    '📐': [
        'Dreiecksregel',
        ':triangular_ruler:',
        'Dreiecksregel'
    ],
    '✂️': [
        'Schere',
        ':scissors:',
        'Schneiden'
    ],
    '✏️': [
        'Stift',
        ':pencil:',
        'Blei Stift'
    ],
    '✒️': [
        'Schwarzer Nib',
        ':black_nib:',
        'Pen Nib',
        'Brunnenstift'
    ],
    '🖋️': [
        'Brunnenstift',
        ':fountain_pen:',
        'Fontäne unten links'
    ],
    '🖊️': [
        'Stift',
        ':pen:',
        'Kugelpunkt unten links',
        'Kugelschreiberstift'
    ],
    '🖌️': [
        'Pinsel',
        ':paintbrush:',
        'Pinsel',
        'Malerpinsel unten links'
    ],
    '🖍️': [
        'Crayon',
        ':crayon:',
        'Crayon unten links'
    ],
    '📝': [
        'Notiz',
        ':memo:',
        'Memorandum',
        'Notiz',
        'Bleistift und Papier'
    ],
    '🗑️': [
        'Abfallpapierkorb',
        ':wastepaper_basket:',
        'Mülldose',
        'Papierkorb',
        'Papierkorb'
    ],
    '📡': [
        'Satellitenantenne',
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
        'Wissenschaft'
    ],
    '📭': [
        'Öffne Postfach mit niedriger Flagge',
        ':open_mailbox_lowered:'
    ],
    '📬': [
        'Öffne Postfach mit Raised Flag',
        ':open_mailbox_raised:',
        'Mailbox öffnen'
    ],
    '📪': [
        'Geschlossenes Postfach mit niedrigerer Flagge',
        ':closed_mailbox_lowered:'
    ],
    '📫': [
        'Geschlossenes Postfach mit erhöhter Flagge',
        ':closed_mailbox_raised:'
    ],
    '📰': [
        'Zeitschrift',
        ':newspaper:'
    ],
    '🗞️': [
        'Rolled-Up Zeitung',
        ':rolled_up_newspaper:',
        'Zeitungslieferung'
    ],
    '📄': [
        'Seite nach oben',
        ':printed_page:',
        'Gedruckte Seite'
    ],
    '📜': [
        'Scrollen',
        ':scroll:',
        'Grad',
        'Parchment'
    ],
    '📃': [
        'Seite mit Curl',
        ':curled_page:',
        'Curled Page',
        'Curly Page'
    ],
    '📓': [
        'Notizbuch',
        ':notebook:',
        'Schwarz-Weiß-Buch'
    ],
    '📔': [
        'Notizbuch mit dekorativem Cover',
        ':notebook_decorative_cover:'
    ],
    '📕': [
        'Geschlossenes Buch',
        ':closed_book:',
        'Rotes Buch',
        'Rotes Textbuch',
        ':red:'
    ],
    '📖': [
        'Buch öffnen',
        ':open_book:',
        'Buch',
        'Neu'
    ],
    '📗': [
        'Grünes Buch',
        ':green_book:',
        'Grünes Textbuch',
        ':green:'
    ],
    '📘': [
        'Blaues Buch',
        ':blue_book:',
        'Blaues Textbuch',
        ':blue:'
    ],
    '📙': [
        'Oranges Buch',
        ':orange_book:',
        'Oranges Textbuch',
        ':orange:'
    ],
    '📚': [
        'Bücher',
        ':books:',
        'Bücherhaufen',
        'Bücherstapel'
    ],
    '🗳️': [
        'Stimmzettel mit Abstimmung',
        ':ballot_box:',
        'Abstimmungsbox',
        'Abstimmungen'
    ],
    '🗄️': [
        'Datei-Schrank',
        ':file_cabinet:',
        'Aktenschränke'
    ],
    '🗃️': [
        'Karten-Datei-Box',
        ':card_file_box:'
    ],
    '🖇️': [
        'Verknüpfte Papierclips',
        ':linked_paperclips:',
        ':gray:',
        ':grey:'
    ]
};
/*clothes and accessories*/
emojis_language[lang][11] = {
    '👣': [
        'Fußabdrücke',
        ':footprints:',
        'Füße',
        'Fußschritte'
    ],
    '👓': [
        'Brille',
        ':glasses:',
        'Brille'
    ],
    '🕶️': [
        'Sonnenbrille',
        ':sunglasses:'
    ],
    '🥽': [
        'Brille',
        ':goggles:'
    ],
    '🥼': [
        'Labormantel',
        ':lab_coat:'
    ],
    '👔': [
        'Necktie',
        ':necktie:',
        'Geschäftliches Hemd',
        'Hemd und Tie'
    ],
    '👕': [
        'T-Shirt',
        ':t_shirt:',
        ':t-shirt:',
        'Tee Hemd',
        'Polo Hemd'
    ],
    '👖': [
        'Jeans',
        ':jeans:',
        'Denim',
        'Hose',
        'Hose'
    ],
    '🧣': [
        'Scarf',
        ':scarf:'
    ],
    '🧤': [
        'Handschuhe',
        ':gloves:'
    ],
    '🧥': [
        'Mantel',
        ':coat:'
    ],
    '🧦': [
        'Socks',
        ':socks:'
    ],
    '👗': [
        'Kleid',
        ':dress:',
        'Rock',
        'Günther'
    ],
    '👘': [
        'Kimono',
        ':kimono:',
        'Kleiderbügel',
        'Japanisches Kleid'
    ],
    '👙': [
        'Bikini',
        ':bikini:',
        'Bäder',
        'Badeanzug'
    ],
    '🩱': [
        'Einteiliger Schwimmanzug',
        'eine_Stück_Badeanzug',
        'einteilige_Badeanzug'
    ],
    '👚': [
        'Frauenkleidung',
        ':womans_clothes:',
        'Frauenkleidung',
        'Blouse',
        'Rosa Hemd',
        'Blouse'
    ],
    '👛': [
        'Geldbeutel',
        ':purse:',
        'Wallet'
    ],
    '👜': [
        'Handtasche',
        ':handbag:'
    ],
    '👝': [
        'Kupplungsbeutel',
        ':clutch_bag:',
        'Kupplung',
        'Kleiner Beutel',
        'Pouch'
    ],
    '🎒': [
        'Rucksack',
        ':backpack:',
        'Beutel',
        'Schultasche',
        'Schul-Satchel',
        'Rucksack'
    ],
    '👞': [
        'Mans Shoe',
        ':mans_shoe:',
        'Mans Shoe',
        'Schuh',
        'Braune Show',
        'Dress Show'
    ],
    '👟': [
        'Sportschuh',
        ':athletic_shoe:',
        'Laufender Schuh',
        'Sneaker',
        'Läufer',
        'Trainer',
        'Tennisschuh'
    ],
    '🥾': [
        'Wanderboot',
        ':hiking_boot:'
    ],
    '🥿': [
        'Flacher Schuh',
        ':flat_shoe:'
    ],
    '👠': [
        'High-Heeled Schuh',
        ':high_heeled_shoe:',
        ':high_heel:',
        'Stiletto',
        'High Heels'
    ],
    '👡': [
        'Frauen Sandal',
        ':womans_sandal:',
        'Frauen Sandal',
        'Fertiger Sandal',
        'Sandalen',
        'Sandal'
    ],
    '👢': [
        'Damenstiefel',
        ':Damen_Stiefel_',
        'Damenstiefel',
        'Cowgirl Stiefel',
        'Knie-Hochstiefel',
        'Schuhe gekuppelt'
    ],
    '👑': [
        'Krone',
        ':crown:',
        'König',
        'Königin',
        'Prinz',
        'Edgar',
        'Prinzessin',
        ':gold:',
        ':yellow:'
    ],
    '👒': [
        'Hut',
        ':hat:',
        'Frauen Hut',
        'Hut mit Bogen',
        'Damen Hut'
    ],
    '🎩': [
        'Oberer Hut',
        ':top_hat:',
        'Formaler Tragen',
        'Groom',
        ':black:'
    ],
    '🎓': [
        'Abschlusskappe',
        ':graduation_cap:',
        'Hochschule',
        'Absolvent',
        'Mörserbrett',
        'Universität',
        'Quadratische Akademie',
        ':black:'
    ],
    '🧢': [
        'Rechnungskappe',
        ':billed_cap:',
        'Baseball-Kappe'
    ],
    '⛑️': [
        'Helm mit weißem Kreuz',
        ':helmet_with_white_cross:',
        ':helmet_with_cross:',
        ':rescue_worker_helmet:',
        ':rescue_workers_helmet:',
        'Helm der Rettungsarbeiter',
        ':red:',
        ':white:'
    ],
    '💼': [
        'Briefkasten',
        ':briefcase:',
        'Koffer'
    ],
    '🎖️': [
        'Militär-Medaille',
        ':military_medal:',
        ':medal:',
        'Medaille',
        'Medaillon',
        'Militärische Dekoration'
    ],
    '📿': [
        'Gebetsperlen',
        ':prayer_beads:',
        'Dhikr Perlen',
        'Rosa Perlen'
    ],
    '🎗️': [
        'Erinnerungs-Ribbo',
        ':reminder_ribbo:'
    ],
    '🤿': [
        'Tauchmaske',
        ':diving_mask:'
    ],
    '🦺': [
        'Sicherheitsweste',
        ':safety_vest:'
    ],
    '🥻': [
        'Sari',
        ':sari:',
        'Salz',
        'Scharf'
    ],
    '🩲': [
        'Briefe',
        ':briefs:'
    ],
    '🩳': [
        'Shorts',
        ':shorts:'
    ],
    '🛼': [
        'Roller Skate',
        ':roller_skate:',
        'Inline-Skate',
        'Derby Roller'
    ],
    '🩴': [
        'Flop spiegeln',
        ':flip_flop:',
        'Thong Sandal'
    ],
    '🪖': [
        'Militärhelm',
        ':military_helmet:'
    ],
    '🩰': [
        'Ballettschuhe',
        ':ballet_shoes:',
        'Punkt-Schuh'
    ],
    '🩼': [
        'Crutch',
        ':crutch:'
    ]
};
/*hands and parts of body*/
emojis_language[lang][12] = {
    '👋{{skin_tone}}': [
        'Wenden Handschild',
        ':wave:',
        ':waving_hand:',
        'Abschied',
        'Handwelle',
        'Hallo',
        'Hi'
    ],
    '🖐️{{skin_tone}}': [
        'Hand mit Fingern Splay',
        ':hand_splayed:',
        ':raised_hand_with_fingers_splayed:',
        ':hand_with_fingers_splayed:',
        'Fünf Hand',
        'Gespielte Hand',
        'Verbesserte Hand mit Fingern Splayed'
    ],
    '🤚{{skin_tone}}': [
        'Gelöschte Handrücken',
        ':raised_back_of_hand:',
        ':back_of_hand:',
        'Hinterhand'
    ],
    '✋{{skin_tone}}': [
        'Gelöschte Hand',
        ':raised_hand:',
        ':hand:',
        'High Fünf',
        'Stoppen'
    ],
    '🖖{{skin_tone}}': [
        'Vulcan Salute',
        ':vulcan_salute:',
        'Spock',
        'Star Trek',
        'Gelöschte Hand mit Teilen zwischen Mittel- und Ringfinger'
    ],
    '👌{{skin_tone}}': [
        'OK Handzeichen',
        ':ok_hand:',
        'Okay',
        'Perfekt',
        'Ja'
    ],
    '✌️{{skin_tone}}': [
        'Siegeshand',
        ':victory_hand:',
        'Luftzitate',
        'Friedensschild',
        'V-Schild'
    ],
    '🤞{{skin_tone}}': [
        'Kreuzende Finger',
        ':crossed_fingers:',
        'Finger durchquert',
        'Viel Glück',
        'Hand mit Index und mittleren Fingern durchquert'
    ],
    '🤟{{skin_tone}}': [
        'Liebende Geste',
        ':love_you_gesture:',
        ':i_love_you_hand_sign:',
        'Ich liebe dich Handzeichen'
    ],
    '🤘{{skin_tone}}': [
        'Zeichen der Hörner',
        ':the_horns:',
        ':sign_of_the_horns:',
        ':metal:',
        'Teufelsfinger',
        'Schweres Metall',
        'Felsen an'
    ],
    '🤙{{skin_tone}}': [
        'Rufe mich Handzeichen an',
        ':call_me_hand:',
        ':call_me:',
        'Telefon-Hand',
        'Shaka'
    ],
    '🤏{{skin_tone}}': [
        'Pinkende Hand',
        ':pinching_hand:'
    ],
    '👈{{skin_tone}}': [
        'Rückhand-Indexpunkt links',
        ':backhand_index_pointing_left:',
        ':point_left:',
        'Weiße linke Rückhand-Index'
    ],
    '👉{{skin_tone}}': [
        'Rückhand-Indexpunkt rechts',
        ':backhand_index_pointing_right:',
        ':point_right:',
        'White-Right Pointing Rückhand-Index'
    ],
    '👆{{skin_tone}}': [
        'Rückhand-Indexpunkt nach oben',
        ':point_up_2:',
        ':backhand_index_pointing_up:',
        'Weiß-Up-Rückhand-Index',
        'Mittlerer Finger'
    ],
    '👇{{skin_tone}}': [
        'Rückhand-Indexpunkt nach unten',
        ':point_down:',
        ':backhand_index_pointing_down:',
        'Weißer Down-Rückhand-Index',
        'Unten zeigen'
    ],
    '☝{{skin_tone}}': [
        'Index Fingerzeiger nach oben',
        ':point_up:',
        ':index_pointing_up:',
        'Weiß-Up-Punkte-Index',
        'Geheimnis'
    ],
    '🖕{{skin_tone}}': [
        'Mittlerer Finger',
        ':middle_finger:',
        'Den Vogel umkehren',
        'Rude Finger',
        'Umgekehrte Hand mit Mittelfinger erweitert'
    ],
    '👍{{skin_tone}}': [
        'Thumbs Up Schild',
        ':thumbs_up_sign:',
        'Möge',
        'Ja'
    ],
    '👎{{skin_tone}}': [
        'Daumen ab Schild',
        ':thumbs_down_sign:',
        'Schlecht',
        'Dislike',
        'Nein'
    ],
    '✊{{skin_tone}}': [
        'Erhobene Faust',
        ':raised_fist:',
        'Faustpumpe'
    ],
    '👊{{skin_tone}}': [
        'Anstehende Faust',
        ':oncoming_fist:',
        'Bro Fist',
        'Brofist',
        'Faust-Bumpf',
        'Schlag',
        'Geschlossene Faust',
        'Fistiertes Handzeichen'
    ],
    '🤛{{skin_tone}}': [
        'Linke Faust Bump',
        ':left_fist_bump:'
    ],
    '🤜{{skin_tone}}': [
        'Rechte Faust Bumpf',
        ':right_fist:bump:'
    ],
    '🤌{{skin_tone}}': [
        'Gepanzerte Finger',
        ':pinched_fingers:',
        'Ma Che Vuoi',
        'Finger Geldbeutel'
    ],
    '👏{{skin_tone}}': [
        'Klapphand-Schild',
        ':cap:',
        ':clapping_hands:',
        'Beifall',
        'Clap',
        'Klappen',
        'Golfklap',
        'Beifall'
    ],
    '🙌{{skin_tone}}': [
        'Person die beide Hände in der Feier hebt',
        ':raised_hands:',
        ':raising_hands:',
        'Händeerhebung',
        'Waffen in der Luft',
        'Banzai',
        'Festivus-Wunder',
        'Hallelujah',
        'Lob Hände',
        'Zwei Hände'
    ],
    '👐{{skin_tone}}': [
        'Offene Hände Schild',
        ':open_hands_sign:',
        'Hub',
        'Jazzhands'
    ],
    '🤲{{skin_tone}}': [
        'Palmen zusammen',
        ':palms_up_together:',
        'Dua'
    ],
    '🤝{{skin_tone}}': [
        'Handshake',
        ':handshake:',
        'Schüttelnde Hände'
    ],
    '🙏{{skin_tone}}': [
        'Faltung Hände',
        ':folded_hands:',
        'Namaste',
        'Bitte',
        'Gebet',
        'Vielen Dank',
        'Person mit gefalteten Händen'
    ],
    '✍{{skin_tone}}': [
        'Schreibhand',
        ':writing_hand:'
    ],
    '🫱{{skin_tone}}': [
        'Rechter Hand',
        ':rightwards_hand:'
    ],
    '🫲{{skin_tone}}': [
        'Linke Hand',
        ':leftwards_hand:'
    ],
    '🫳{{skin_tone}}': [
        'Palm nach unten',
        ':palm_down_hand:'
    ],
    '🫴{{skin_tone}}': [
        'Hand hoch',
        ':palm_up_hand:'
    ],
    '🫰{{skin_tone}}': [
        'Hand mit Index Finger und Thumb gekreuzt',
        ':hand_with_index_finger_and_thumb_crossed:'
    ],
    '🫵{{skin_tone}}': [
        'Indexpunkte auf den Viewer',
        ':index_pointing_at_the_viewer:'
    ],
    '🫶{{skin_tone}}': [
        'Herzhände',
        ':heart_hands:',
        'Liebe'
    ],
    '💪{{skin_tone}}': [
        'Flexitierte Bizeps',
        ':flexed_biceps:',
        'Flexende Armmuskulatur',
        'Musle',
        'Stark'
    ],
    '🦵{{skin_tone}}': [
        'Bein',
        ':leg:'
    ],
    '🦶{{skin_tone}}': [
        'Fuß',
        ':foot:'
    ],
    '👂{{skin_tone}}': [
        'Ohr',
        ':ear:',
        'Ohren',
        'Hören',
        'Zuhören'
    ],
    '👃{{skin_tone}}': [
        'Nase',
        ':nose:',
        'Stacheln',
        'Schnippen',
        'Stinky'
    ],
    '🦻{{skin_tone}}': [
        'Ohr mit Hörhilfe',
        ':ear_with_hearing_aid:'
    ],
    '🧠': [
        'Hirn',
        ':brain:',
        ':pink:'
    ],
    '🦷': [
        'Zahn',
        ':tooth:',
        ':white:'
    ],
    '👀': [
        'Augen',
        ':eyes:',
        'Augenbrauen',
        'Shifty Augen',
        'Weisenaugen'
    ],
    '👁️': [
        'Auge',
        ':eye:',
        'Einzelauge'
    ],
    '👅': [
        'Zunge raus',
        ':tongue_out:',
        ':red:'
    ],
    '👄': [
        'Mund',
        ':mouth:',
        'Küßende Lippen',
        'Lippen',
        ':red:'
    ],
    '🫦': [
        'Biss-Lippe',
        ':biting_lip:',
        'Lippen',
        ':red:'
    ],
    '🫀': [
        'Anatomisches Herz',
        ':anatomical_heart:',
        ':red:'
    ],
    '🫁': [
        'Lungen',
        ':lungs:',
        ':red:'
    ],
    '🦾': [
        'Mechanischer Arm',
        ':mechanical_arm:',
        'Stark',
        ':gray:',
        ':grey:'
    ],
    '🦿': [
        'Mechanisches Bein',
        ':mechanical_leg:',
        ':gray:',
        ':grey:'
    ],
    '💅{{skin_tone}}': [
        'Nagelpolnisch',
        ':nail_polish:',
        'Finger',
        'Manicure',
        'Nonchalant'
    ],
    '🤳{{skin_tone}}': [
        'Selfie',
        ':selfie:',
        'Telefonkamera',
        'Selfie Hand'
    ]
};
/*other*/
emojis_language[lang][13] = {
    '💩': [
        'Poohaufen',
        ':pile_of_poo:',
        'Hundeschlamm',
        'Lächelnder Koop',
        ':brown:'
    ],
    '💋': [
        'Kusszeichen',
        ':kiss_mark:',
        'Küßende Lippen',
        ':red:'
    ],
    '🦴': [
        'Knochen',
        ':bone:'
    ],
    '🧳': [
        'Gepäck',
        ':luggage:',
        'Koffer'
    ],
    '🌂': [
        'Geschlossener Umbrella',
        ':closed_umbrella:',
        'Einklappter Umbrella',
        'Rosa Umbrella',
        ':pink:',
        ':purple:'
    ],
    '☂️': [
        'Umbrella',
        ':umbrella:',
        ':purple:'
    ],
    '☔': [
        'Umbrella mit Regendrops',
        ':umbrella_with_rain_drops:',
        ':umbrella:',
        'Regen',
        'Rainy'
    ],
    '🧵': [
        'Spool des Threads',
        ':spool_of_thread:'
    ],
    '🧶': [
        'Yarn-Kugel',
        ':ball_of_yarn:'
    ],
    '💄': [
        'Lipstick',
        ':lipstick:',
        'Lippenglänz',
        'Make-up',
        ':red:'
    ],
    '💍': [
        'Klingeln',
        ':ring:',
        'Diamantenring',
        'Engagement-Ring'
    ],
    '💎': [
        'Edelstein',
        ':gem_stone:',
        'Diamant',
        'Juwel',
        'Edelstein',
        'Juwel',
        ':blue:'
    ],
    '💥': [
        'Kollisionssymbol',
        ':collision_symbol:',
        'Knall',
        'Explodieren',
        'Auswirkung',
        'Roter Spark',
        'Explosion'
    ],
    '💫': [
        'Schwindel Symbol',
        ':dizzy_symbol:',
        'Kreis und Stern',
        ':yellow:'
    ],
    '💦': [
        'Spaltendes Schweißsymbol',
        'schweiss_drops',
        'schwitz_Tröpfchen',
        'Plewds',
        'Wasserspaltung',
        'Wassertropfen',
        ':blue:'
    ],
    '💨': [
        'Abwesend Dashing',
        ':dashing_away:',
        'Schnell',
        'Dampf',
        'Verdampfen',
        'Wind',
        'Strichsymbol',
        'Windböen'
    ],
    '🌬️': [
        'Windenergie',
        ':wind_face:',
        'Wind bläst',
        'Mutter Natur',
        'Wind bläst Gesicht',
        ':white:'
    ],
    '🐾': [
        'Pfoten Drucke',
        ':paw_prints:',
        'Katzenpfoten Drucke',
        'Hundepfote Drucke',
        'Kätzchen Pfoten Drucke',
        'Welpen Pfoten Drucke'
    ],
    '🕸️': [
        'Spinnennetz',
        ':spider_web:',
        'Cobweb',
        'Web',
        'Spinnennetz'
    ],
    '🦠': [
        'Mikrobe',
        ':microbe:',
        'Zelle',
        'Coronavirus',
        'COVID-19',
        'Jörg',
        'Mikroorganismus',
        'Virus',
        ':green:'
    ],
    '💐': [
        'Blumenstrauß',
        ':bouquet_of_flowers:'
    ],
    '🌍': [
        'Globe zeigt Europa-Afrika an',
        ':globe_showing_europe_africa:',
        ':earth_africa:',
        'Erde',
        'Globe',
        'Planet',
        'Welt',
        'Globe zeigt Europa und Afrika',
        ':blue:'
    ],
    '🌎': [
        'Globe zeigt Amerika',
        ':globe_showing_americas:',
        ':earth_americas:',
        'Erde',
        'Globe',
        'Planet',
        'Welt',
        ':blue:'
    ],
    '🌏': [
        'Globe zeigt Asien-Australien',
        ':globe_showing_asia_australia:',
        ':earth_asia:',
        'Erde',
        'Globe',
        'Planet',
        'Welt',
        'Globe Asien und Australien',
        ':blue:'
    ],
    '🌐': [
        'Globe mit Meridians',
        ':globe_with_meridians:',
        'Internet',
        'World Wide Web',
        'WWW'
    ],
    '🌑': [
        'Neues Mondsymbol',
        ':new_moon:',
        'Dunkelmond',
        'Schattenmond',
        'Solar-Eclipse',
        ':black:'
    ],
    '🌒': [
        'Wachsendes Crescent Mond Symbol',
        ':waxing_crescent_moon:',
        ':yellow:',
        ':black:'
    ],
    '🌓': [
        'Symbol des ersten Quartals Mondes',
        ':first_quarter_moon:',
        ':yellow:',
        ':black:'
    ],
    '🌔': [
        'Wachsendes Gibböses Mondsymbol',
        ':moon:',
        ':waxing_gibbous_moon:',
        ':yellow:',
        ':black:'
    ],
    '🌕': [
        'Vollmond-Symbol',
        ':full_moon:',
        ':yellow:'
    ],
    '🌖': [
        'Flüchtiges Gibböses Mondsymbol',
        ':waning_gibbous_moon:',
        ':yellow:',
        ':black:'
    ],
    '🌗': [
        'Symbol des letzten Viertelmondes',
        ':last_quarter_moon:',
        ':yellow:',
        ':black:'
    ],
    '🌘': [
        'Flüchtiges Crescent Mond Symbol',
        ':waning_crescent_moon:',
        ':yellow:',
        ':black:'
    ],
    '🌙': [
        'Halbmond',
        ':crescent_moon:',
        ':yellow:'
    ],
    '🌚': [
        'Neuer Mond mit Gesicht',
        ':new_moon_with_face:',
        'Gruseliger Mond',
        'Dunkelmond-Gesicht',
        'Molester Mond',
        ':black:',
        ':gray:',
        ':grey:'
    ],
    '🌝': [
        'Vollmond mit Gesicht',
        ':full_moon_with_face:',
        'Moonface',
        'Smiley-Mond',
        'Lächelnder Mond',
        ':yellow:'
    ],
    '🌛': [
        'Erstes Viertelmond mit Gesicht',
        ':first_quarter_moon_with_face:',
        ':first_quarter_moon_face:',
        ':yellow:'
    ],
    '🌜': [
        'Letztes Viertelmond mit Gesicht',
        ':last_quarter_moon_with_face:',
        ':last_quarter_moon_face:',
        ':yellow:'
    ],
    '🌞': [
        'Sonne mit Gesicht',
        ':sun_with_face:',
        'Smiley-Sonne',
        'Sunface',
        'Lächelnde Sonne',
        ':yellow:'
    ],
    '☀️': [
        'Sonne',
        ':sun:',
        'Sonnenschein',
        ':yellow:'
    ],
    '⭐': [
        'Stern',
        ':star:',
        'Weißer mittlerer Stern',
        ':yellow:'
    ],
    '🌟': [
        'Leuchtender Stern',
        ':glowing_star:',
        'Glanzender Stern',
        ':yellow:'
    ],
    '☁️': [
        'Wolke',
        ':cloud:',
        'bewölkt',
        'Überfüllt',
        ':white:'
    ],
    '⛅': [
        'Sonne hinter der Cloud',
        ':thunder_cloud_and_rain:',
        ':thunder_cloud_rain:',
        ':cloud_with_lightning_and_rain:',
        ':white:'
    ],
    '⛈️': [
        'Wolke mit Blitz und Regen',
        ':thunder_cloud_and_rain:',
        ':thunder_cloud_rain:',
        ':cloud_with_lightning_and_rain:',
        'Donner Wolke und Regen',
        ':white:'
    ],
    '🌤️': [
        'Weiße Sonne mit kleiner Wolke',
        ':mostly_sunny:',
        ':sun_behind_small_cloud:',
        ':sun_small_cloud:',
        ':white_sun_small_cloud:',
        ':white_sun_with_small_cloud:',
        ':white:'
    ],
    '🌥️': [
        'Sonne hinter der großen Cloud',
        ':sun_behind_large_cloud:',
        'Weiße Sonne hinter der Wolke',
        ':white:'
    ],
    '🌦️': [
        'Weiße Sonne hinter der Wolke mit Regen',
        ':sun_behind_rain_cloud:',
        ':partly_sunny_rain:',
        ':white_sun_rain_cloud:',
        ':white_sun_behind_cloud_with_rain:',
        ':white:'
    ],
    '🌧️': [
        'Wolke mit Regen',
        ':cloud_with_rain:',
        ':white:'
    ],
    '🌨️': [
        'Wolke mit Schnee',
        ':cloud_with_snow:',
        ':white:'
    ],
    '🌩️': [
        'Wolke mit Blitz',
        ':cloud_with_lightning:',
        ':white:'
    ],
    '🌪️': [
        'Tornado',
        ':tornado:',
        'Wolke mit Tornado'
    ],
    '🌫️': [
        'Fog',
        ':fag:',
        ':white:',
        ':gray:',
        ':grey:'
    ],
    '🌈': [
        'Regenbogen',
        ':rainbow:',
        'Schwulen-Stolz',
        'Primärer Regenbogen',
        'LGBTQIA+',
        'LGBT+'
    ],
    '❄️': [
        'Schneeflocken',
        ':snowflake:',
        'Schnee',
        'Schnee',
        ':white:'
    ],
    '🌀': [
        'Zyklon',
        ':cyclone:',
        'Hurrikan',
        'Spirale',
        'Wirbel',
        'Tornado'
    ],
    '⚡': [
        'Hochspannungszeichen',
        ':high_voltage_sign:',
        'Blitzschlag',
        'Donnerblitz',
        'Hohe Spannung'
    ],
    '☃️': [
        'Schneemann',
        ':snowman:',
        'Schneemann mit Schneeflocken',
        ':white:'
    ],
    '⛄': [
        'Schneemann ohne Schnee',
        'Schneemann_ohne Schnee',
        ':snowman:',
        'Frostiger Schneemann',
        'Olaf',
        'Schneemann',
        ':white:'
    ],
    '☄️': [
        'Komet',
        ':comet:'
    ],
    '🔥': [
        'Feuer',
        ':fire:',
        'Flamme',
        'Heiß',
        'Lit',
        'Snapstreak',
        ':red:'
    ],
    '💧': [
        'Droplet',
        ':droplet:',
        'Wasser',
        'Wassertropfen',
        ':blue:'
    ],
    '✨': [
        'Funkeln',
        ':sparkles:',
        'Glanz',
        'Shiny',
        'Neu'
    ],
    '🌊': [
        'Wasserwelle',
        ':water_wave:',
        'Strand',
        'Ozeanwelle',
        'Meer',
        ':blue:'
    ],
    '🎄': [
        'Weihnachtsbaum',
        'weihnacht_baum',
        'Weihnachten',
        'Weihnachtsbaum',
        ':green:'
    ],
    '🎃': [
        'Kürbislaterne',
        'jack_o_Laterne',
        'Halloween',
        'Kürbis',
        ':orange:'
    ],
    '🌻': [
        'Sonnenblume',
        ':sunflower:',
        'Gelbe Blume',
        ':yellow:'
    ],
    '🌼': [
        'Blossom',
        ':blossom:',
        'Blühende Blume',
        'Daisy',
        'Gelbe Blume',
        ':yellow:'
    ],
    '🌷': [
        'Tulip',
        ':tulip:',
        ':pink:'
    ],
    '🌹': [
        'Rosenblume',
        ':rose_flower:',
        'Rote Rose',
        ':red:'
    ],
    '☘️': [
        'Schamfelsen',
        ':shamrock:',
        'Klee',
        'Trefoil',
        ':green:'
    ],
    '🍀': [
        'Vier Blattkleid',
        ':four_leaf_clover:',
        'Klee',
        'Irland',
        'Glück',
        'Glücksspiel',
        ':green:'
    ],
    '🌸': [
        'Cherry Blossom',
        ':cherry_blossom:',
        'Rosa Blume',
        'Sakura',
        ':pink:'
    ],
    '💮': [
        'Weiße Blume',
        ':white_flower:',
        'Cherry Blossom',
        'Doily Papier',
        'Gut Fertig Stempel',
        ':white:'
    ],
    '🌺': [
        'Hibiscus',
        ':hibiscus:',
        ':red:'
    ],
    '🏵️': [
        'Rosette',
        ':rosette:',
        ':orange:',
        ':yellow:'
    ],
    '🌱': [
        'Seedling',
        ':seedling:',
        'Frühling',
        'Sprout',
        'Vernichten',
        ':green:'
    ],
    '🌲': [
        'Immergrüner Baum',
        ':evergreen_tree:',
        'Fierbaum',
        'Kiefernbaum',
        ':green:'
    ],
    '🌳': [
        'Dezimalbaum',
        ':deciduous_tree:',
        'Abgerundeter Baum',
        ':green:'
    ],
    '🌴': [
        'Palm',
        ':palm_tree:',
        'Kokosnussbaum',
        ':green:'
    ],
    '🎋': [
        'Tanabata-Baum',
        ':tanabata_tree:',
        'Tanabata',
        'Wunschbaum'
    ],
    '🎍': [
        'Kiefer Dekoration',
        ':pine_decoration:',
        'Bambus',
        'Kadomatsu',
        'Neujahr Dekoration'
    ],
    '🌵': [
        'Cactus',
        ':cactus:',
        'Desert',
        ':green:'
    ],
    '🌾': [
        'Reiss-Schafe',
        ':sheaf_of_rice:',
        'Ernte',
        'Landwirtschaft',
        'Weizen',
        'Ohr des Reis'
    ],
    '🌿': [
        'Kräuter',
        ':herb:',
        'Ernte',
        'Pflanze',
        ':green:'
    ],
    '🍁': [
        'Ahornblätter',
        ':maple_leaf:',
        'Kanada',
        'Kanadisch',
        'Ahorn',
        ':brown:'
    ],
    '🍂': [
        'Verdorbenes Blatt',
        ':fallen_leaf:',
        'Herbstblätter',
        'Herbstblätter',
        'Braune Blätter',
        'Fallblätter',
        'Gefallene Blätter',
        ':brown:'
    ],
    '🍃': [
        'Blätterfluttern im Wind',
        ':leaf_fluttering_in_wind:',
        ':leaves:',
        'Grüne Blätter',
        'Frühling',
        ':green:'
    ],
    '🪴': [
        'Topfpflanze',
        ':potted_plant:',
        ':green:'
    ],
    '🪸': [
        'Korallen',
        ':coral:',
        'Klimawandel'
    ],
    '🪷': [
        'Lotus',
        ':lotus:',
        'Reinheit',
        'Schönheit',
        'Ruhe',
        'Gelassenheit'
    ],
    '🔑': [
        'Schlüssel',
        ':key:',
        'Goldschlüssel',
        ':gold:',
        ':yellow:'
    ],
    '🗝️': [
        'Alter Schlüssel',
        ':old_key:',
        ':brown:'
    ],
    '🔨': [
        'Hammer',
        ':hammer:',
        'Klauenhammer',
        'Handyman',
        'Werkzeug'
    ],
    '⛏️': [
        'Auswählen',
        ':pick:',
        'Spitzhacke'
    ],
    '🪓': [
        'Axt',
        ':axe:'
    ],
    '🪚': [
        'Zimmermannssäge',
        ':carpentry_saw:'
    ],
    '🪛': [
        'Schraubendreher',
        ':screwdriver:'
    ],
    '🪝': [
        'Haken',
        ':hook:'
    ],
    '🪠': [
        'Plunger',
        ':plunger:'
    ],
    '🪣': [
        'Eimer',
        ':bucket:'
    ],
    '🔩': [
        'Nuss und Bolzen',
        ':nut_and_bolt:',
        'Bolzen',
        'Schraube',
        ':gray:',
        ':grey:'
    ],
    '🗜️': [
        'Klammer',
        ':clamp:',
        'Tisch-Vice',
        'WinZip',
        'Komprimierung',
        ':gray:',
        ':grey:'
    ],
    '🔒': [
        'Gesperrt',
        ':locked:',
        'Geschlossenes Schloss',
        'Schloß'
    ],
    '🔓': [
        'Entsperrt',
        ':unlocked:',
        'Padlock öffnen',
        'Öffne Sperre'
    ],
    '🔏': [
        'Gesperrt mit Stift',
        ':locked_with_pen:',
        'Sperren und Stift',
        'Mit Brunnenstift sperren',
        'Mit Tintenstift sperren'
    ],
    '🔐': [
        'Mit Schlüssel gesperrt',
        ':locked_with_key:',
        'Geschlossene Sperre mit Schlüssel'
    ],
    '🗡️': [
        'Dagger',
        ':dagger:',
        'Messerwaffe',
        ':gray:',
        ':grey:'
    ],
    '⚔️': [
        'Gekreuzte Schwerter',
        ':crossed_swords:',
        ':gray:',
        ':grey:'
    ],
    '🔫': [
        'Pistol',
        ':pistol:',
        'Waffe',
        'Revolver',
        'Squirtpistole',
        'Wasserpistole',
        'Wasserpistole'
    ],
    '🧰': [
        'Werkzeugkasten',
        ':toolbox:',
        ':red:'
    ],
    '🧲': [
        'Magnet',
        ':magnet:',
        ':red:'
    ],
    '⛓️': [
        'Ketten',
        ':chains:'
    ],
    '💉': [
        'Syringe',
        ':syringe:',
        'Blutspende',
        'Bluttest',
        'Nadel',
        'Impfung'
    ],
    '🧬': [
        'DNS',
        ':dna:',
        'DNS-Doppelhelix'
    ],
    '🧪': [
        'Röhre testen',
        ':test_tube:',
        ':green:'
    ],
    '🛏️': [
        'Bett',
        ':bed:',
        'Schlafzimmer'
    ],
    '🛋️': [
        'Couch und Lampe',
        ':couch_and_lamp:',
        'Lounge',
        'Setting',
        'Sofa'
    ],
    '🪑': [
        'Stuhl',
        ':chair:'
    ],
    '🚪': [
        'Tür',
        ':door:',
        'Tür',
        'Haustür'
    ],
    '🪟': [
        'Fenster',
        ':window:'
    ],
    '🪜': [
        'Leiter',
        ':ladder:'
    ],
    '🪞': [
        'Spiegeln',
        ':mirror:'
    ],
    '🚽': [
        'Toilette',
        ':toilet:',
        'Badezimmer',
        'Loo',
        'Ruheraum',
        'KW'
    ],
    '🚿': [
        'Duschen',
        ':shower:',
        'Duschkopf'
    ],
    '🛁': [
        'Badewanne',
        ':bathtub:',
        'Luftblase'
    ],
    '🧴': [
        'Lotion Flasche',
        ':location_bottle:'
    ],
    '🧷': [
        'Sicherheits-Pin',
        ':safety_pin:',
        ':gray:',
        ':grey:'
    ],
    '🧺': [
        'Korb',
        ':basket:',
        ':brown:'
    ],
    '🧻': [
        'Papierrollen',
        ':roll_of_paper:',
        'Toilettenpapier',
        ':white:'
    ],
    '🧼': [
        'Seifenbalken',
        ':bar_of_soap:'
    ],
    '🧽': [
        'Schwamm',
        ':sponge:',
        ':yellow:'
    ],
    '🧯': [
        'Feuerlöscher',
        ':fire_extinguisher:',
        ':red:'
    ],
    '🚬': [
        'Zigarette',
        ':cigarette:',
        'Rauchsymbol'
    ],
    '⚰️': [
        'Coffin',
        ':coffin:',
        'Casket',
        'Beerdigung',
        ':brown:'
    ],
    '⚱️': [
        'Beerdigungsurne',
        ':funeral_urn:',
        'Vase'
    ],
    '🛡️': [
        'Schild',
        ':shield:'
    ],
    '⚙️': [
        'Ausrüstung',
        ':gear:',
        'Einstellungen',
        'Optionen',
        ':gray:',
        ':grey:'
    ],
    '⚖️': [
        'Saldo Skalierung',
        ':balance_scale:',
        'Maßstäbe der Gerechtigkeit'
    ],
    '🔗': [
        'Link',
        ':link:',
        'Kette',
        'Hyperlink',
        'Verknüpfte Kette',
        ':gray:',
        ':grey:'
    ],
    '💀': [
        'Schädel',
        ':skull:',
        'Tod',
        'Grauer Schädel',
        'Skelett',
        ':white:'
    ],
    '☠️': [
        'Schädel und Kreuzknochen',
        ':skull_and_crossbones:',
        ':white:'
    ],
    '🎡': [
        'Ferris Rad',
        ':ferris_wheel:',
        'Großrad',
        'Fairgroundl',
        'Beobachtungsrad'
    ],
    '⛽': [
        'Kraftstoffpumpe',
        'kraftstoff_pumpe:',
        'Öl',
        'Benzin',
        'Gas',
        ':red:'
    ],
    '🚨': [
        'Polizeiwagen Revolving Light',
        ':rotating_light:',
        ':police_police_car:',
        'Notlicht',
        'Blinkendes Licht',
        'Siren',
        ':red:'
    ],
    '🚥': [
        'Horizontale Ampel',
        ':horizontal_traffic_light:',
        ':green:',
        ':red:',
        ':yellow:',
        ':orange:'
    ],
    '🚦': [
        'Vertikale Ampel',
        ':vertical_traffic_light:',
        ':green:',
        ':red:',
        ':yellow:',
        ':orange:'
    ],
    '⚓': [
        'Admiralitätsmuster-Anker',
        ':anchor:',
        'Fischer'
    ],
    '🚧': [
        'Bauschild',
        ':construction_sign:',
        'Schwarzes und gelbes gestreiftes Schild',
        ':yellow:',
        ':black:'
    ],
    '🪂': [
        'Parachute',
        ':parachute:'
    ],
    '💺': [
        'Sitzplatz',
        ':seat:',
        'Busflugzeug Zugflugzeug'
    ],
    '🪐': [
        'Samuel',
        ':saturn:'
    ],
    '🎆': [
        'Feuerwerk',
        ':fireworks:',
        'Explosion'
    ],
    '🎇': [
        'Senko Hanabi',
        ':senko_hanabi:',
        'Feuerwerksparkler'
    ],
    '💷': [
        'Pfund Banknote',
        ':pound:',
        ':pound_banknote:',
        '£20 Notiz',
        'Zwanzig Quid Notiz',
        'Banknote mit Pfund Schild',
        ':purple:'
    ],
    '💶': [
        'Euro Banknote',
        ':euro:',
        ':euro_banknote:',
        '100 € Notiz',
        'Banknote mit Euro-Schild',
        ':blue:'
    ],
    '💵': [
        'Dollar-Banknote',
        ':dollar:',
        ':dollar_banknote:',
        '$1 Notiz',
        'Banknote mit Dollar-Signal',
        'Dollar-Rechnung',
        'Amerikanischer Dollar',
        ':green:'
    ],
    '💴': [
        'Yen Banknote',
        ':yen:',
        ':yen_banknote:',
        '¥1000 Notiz',
        'Yen Notiz',
        'Banknote mit Yen Schild',
        ':yellow:'
    ],
    '⛺': [
        'Lagerzelt',
        ':camping_tent:'
    ],
    '⛲': [
        'Fontäne',
        ':fountain:',
        'Wassermerkmal',
        'Wasserbrunnen',
        'Parken'
    ],
    '💰': [
        'Geldbeutel',
        ':money_bag:',
        'Geldbeutel',
        'Reiche',
        '$'
    ],
    '💸': [
        'Geld mit Flügeln',
        ':money_with_wings:',
        'Fliegengeld',
        ' Verlierendes Geld'
    ],
    '🏷️': [
        'Label Tag',
        ':label_tag:'
    ],
    '🔖': [
        'Lesezeichen',
        ':bookmark:',
        'Preis Tag',
        'Markierung'
    ],
    '📑': [
        'Lesezeichen-Tabs',
        ':bookmark_tabs:',
        ':white:'
    ],
    '📯': [
        'Posthorn',
        ':postal_horn:',
        'Bugle',
        'Französisches Horn'
    ],
    '🪁': [
        'Kite',
        ':kite:',
        ':purple:'
    ],
    '🪀': [
        'Yo-Y',
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
        'Feier',
        'Party Hut'
    ],
    '🎈': [
        'Ballon',
        ':balloon:',
        'Gruppe',
        'Roter Ballon',
        ':red:'
    ],
    '🌡️': [
        'Thermometer',
        ':thermometer:',
        'Heißes Wetter',
        'Temperatur',
        ':red:'
    ],
    '🛢️': [
        'Öltrummel',
        ':oil_drum:'
    ],
    '💣': [
        'Bombe',
        ':bomb:'
    ],
    '🔪': [
        'Küchenmesser',
        ':kitchen_knife:',
        'Messer',
        'Metzgermesser',
        'Hocho'
    ],
    '🏺': [
        'Amphora',
        ':amphora:',
        'Narr',
        'Vase'
    ],
    '🗺️': [
        'Weltkarte',
        ':world_map:'
    ],
    '🎼': [
        'Musical Punktzahl',
        ':musical_score:',
        'Plattenmusik',
        'Treble Clef'
    ],
    '🎬': [
        'Klappenbrett',
        ':clapper_board:',
        'Schneide',
        'Aktion',
        'Regisseur',
        'Film Schiefer'
    ],
    '🎻': [
        'Geige',
        ':violin:',
        'Streichquartett',
        'Kleinste Geige der Welt'
    ],
    '🎺': [
        'Trompete',
        ':trumpet:',
        'Horn',
        'Jazz'
    ],
    '🎸': [
        'Gitarre',
        ':guitar:',
        'Akustische Gitarre',
        'Bass-Gitarre',
        'Elektrische Gitarre'
    ],
    '🎷': [
        'Saxophon',
        ':saxophone:',
        'Jazz',
        'Sax'
    ],
    '🥁': [
        'Trommel',
        ':drum:',
        'Trommel mit Trommeln'
    ],
    '🎹': [
        'Klavier',
        ':piano:',
        'Musiktastatur',
        ':white:',
        ':black:'
    ],
    '🪕': [
        'Banjo',
        ':banjo:'
    ],
    '🪗': [
        'Akkordeon',
        ':accordion:'
    ],
    '🪘': [
        'Lange Trommel',
        ':long_drum:'
    ],
    '🎨': [
        'Interpretenpalette',
        ':artist_palette:',
        'Kunst',
        'Malerei'
    ],
    '🧩': [
        'Puzzleteil',
        ':puzzle_piece:',
        'Puzzleteil',
        ':green:'
    ],
    '🎲': [
        'Spiel sterben',
        ':game_die:',
        'Würfel',
        ':white:'
    ],
    '🎭': [
        'Darstellende Kunst',
        'performing_arts',
        'Theater',
        'Theater',
        'Drama-Masken',
        'Griechische Theatermasken',
        'Tragedy und komische Masken',
        'Venedig'
    ],
    '🔍': [
        'Vergrößertes Glas links',
        ':mag:',
        ':magnifying_glass_tilted_left:',
        'Magnifier',
        'Suchsymbol',
        'Linkes Vergrößerungsglas',
        'Suchen',
        ':transparent:'
    ],
    '🔎': [
        'Vergrößertes Glas rechts gekachelt',
        ':mag_right:',
        ':magnifying_glass_tilted_right:',
        'Magnifier',
        'Suchsymbol',
        'Rechts-Punkt-Vergrößerungsglas',
        'Suchen',
        ':transparent:'
    ],
    '⌛': [
        'Stundenglas erledigt',
        ':hourglass:',
        ':hourglass_done:',
        'Stundenglas'
    ],
    '⏳': [
        'Stundenglas nicht fertig',
        ':hourglass_flowing_sand:',
        ':hourglass_not_done:',
        'Stundenglas mit fließendem Sand'
    ],
    '🕐': [
        'Eine OClock',
        ':clock1:',
        ':one_oclock:',
        'Uhr Gesicht 1 OClock',
        ':gray:',
        ':grey:'
    ],
    '🕜': [
        'Uhr Gesicht 1 bis 30 Uhr',
        ':clock130:',
        ':one_thirty:',
        ':gray:',
        ':grey:'
    ],
    '🕑': [
        'Zwei OClock',
        ':clock2:',
        ':two_oclock:',
        'Uhren Gesicht zwei Uhr',
        ':gray:',
        ':grey:'
    ],
    '🕝': [
        'Uhr-Gesicht Zwei-Dreißig',
        ':clock230:',
        ':two_thirty:',
        ':gray:',
        ':grey:'
    ],
    '🕒': [
        'Drei Uhr',
        ':clock3:',
        ':three_oclock:',
        'Uhr Gesicht drei Uhr',
        ':gray:',
        ':grey:'
    ],
    '🕞': [
        'Uhr Gesicht drei-dreißig',
        ':clock330:',
        ':three_thirty:',
        ':gray:',
        ':grey:'
    ],
    '🕓': [
        'Vier OClock',
        ':clock4:',
        ':four_oclock:',
        'Vier Uhr Uhr',
        ':gray:',
        ':grey:'
    ],
    '🕟': [
        'Uhr Gesicht Vier-Dreißig',
        ':clock430:',
        ':four_thirty:',
        ':gray:',
        ':grey:'
    ],
    '🕔': [
        'Fünf Uhr',
        ':clock5:',
        ':five_oclock:',
        'Fünf Uhr Uhr OClock',
        ':gray:',
        ':grey:'
    ],
    '🕠': [
        'Uhr-Gesicht Fünf-Dreißig',
        ':clock530:',
        ':five_thirty:',
        ':gray:',
        ':grey:'
    ],
    '🕕': [
        'Sechs Uhr',
        ':clock6:',
        ':size_oclock:',
        'Sechs Uhr OClock Gesicht',
        ':gray:',
        ':grey:'
    ],
    '🕡': [
        'Uhr Gesicht Sechs-Dreißig',
        ':clock630:',
        ':six_thirty:',
        ':gray:',
        ':grey:'
    ],
    '🕖': [
        'Sieben Uhr',
        ':clock7:',
        ':seven_oclock:',
        'Uhr Gesicht Sieben OClock',
        ':gray:',
        ':grey:'
    ],
    '🕢': [
        'Uhr-Gesicht Sieben-Dreißig',
        ':clock730:',
        ':sever_thirty:',
        ':gray:',
        ':grey:'
    ],
    '🕗': [
        'Acht Uhr',
        ':clock8:',
        ':eight_oclock:',
        'Uhr Gesicht acht Uhr',
        ':gray:',
        ':grey:'
    ],
    '🕣': [
        'Uhr Gesicht acht-dreißig',
        ':clock830:',
        ':eight_thirty:',
        ':gray:',
        ':grey:'
    ],
    '🕘': [
        'Neun OClock',
        ':clock9:',
        ':nine_clock:',
        'Neun Uhr Uhr OClock',
        ':gray:',
        ':grey:'
    ],
    '🕤': [
        'Uhr Gesicht neundreißig',
        ':clock930:',
        ':nine_thirty:',
        ':gray:',
        ':grey:'
    ],
    '🕙': [
        'Zehn Uhr',
        ':clock10:',
        ':ten_oclock:',
        'Zehn Uhr OClock',
        ':gray:',
        ':grey:'
    ],
    '🕥': [
        'Zehn - dreißig Uhr',
        ':clock1030:',
        ':ten_thirty:',
        ':gray:',
        ':grey:'
    ],
    '🕚': [
        'Eleven OClock',
        ':click11:',
        ':eleven_oclock:',
        'Uhr Gesicht elf OClock',
        ':gray:',
        ':grey:'
    ],
    '🕦': [
        'Uhr-Gesicht elf bis dreißig',
        ':clock1130:',
        ':eleven_thirty:',
        ':gray:',
        ':grey:'
    ],
    '🕛': [
        'Zwölf OClock',
        ':clock12:',
        ':twelve_oclock:',
        'OClock Gesicht Zwölf Uhr',
        ':gray:',
        ':grey:'
    ],
    '🕧': [
        'Uhr-Gesicht Zwölf-Dreißig',
        ':clock1230:',
        ':twelve_thirty:',
        ':gray:',
        ':grey:'
    ],
    '♨️': [
        'Heiße Quellen',
        ':hot_springs:',
        'Onsen',
        'Dampf',
        ':red:'
    ],
    '💈': [
        'Barberpol',
        ':barber_pole:',
        'Barberladen',
        'Barbers-Streifen',
        'Friseur',
        ':blue:',
        ':red:'
    ],
    '🎪': [
        'Zirkuszelt',
        ':circus_tent:',
        'Großer Oben',
        'Zirkus'
    ],
    '💢': [
        'Zorn Symbol',
        ':anger_symbol:',
        'Zorn Schild',
        'Venenpop',
        ':red:'
    ],
    '🗯️': [
        'Bubble des rechten Zorns',
        ':right_anger_bubble:',
        ':anger_right:',
        'Zig Zag Bubble',
        'Wütende Sprechblase',
        ':white:'
    ],
    '💊': [
        'Pill',
        ':pill:',
        'Kapsel',
        'Tablets',
        'Drogen',
        ':yellow:',
        ':red:'
    ],
    '🎎': [
        'Puppen',
        ':dolls:',
        'Hinamatsuri',
        'Imperiale Puppen',
        'Japanische Puppen'
    ],
    '🎏': [
        'Carp Streamer',
        ':carp_streamer:',
        'Fischflagge',
        'Koinobori',
        'Windsocken'
    ],
    '🎐': [
        'Windschwamm',
        ':wind_chime:',
        'Furin',
        'Gelee',
        'Windglocke'
    ],
    '🎀': [
        'Ribbon-Bogen',
        ':ribbon_bow:',
        'Rosa Bogen',
        'Bogen',
        ':pink:'
    ],
    '🎁': [
        'Gewickeltes Geschenk',
        ':wrapped_gift:',
        'Geburtstag Geschenk',
        'Weihnachtsgeschenk',
        'Geschenk',
        'Geschenkbox',
        'Präsent',
        'Geschenk ummantelt'
    ],
    '🎫': [
        'Ticket',
        ':ticket:',
        'Ticket-Stub',
        'World Tour Ticket'
    ],
    '🃏': [
        'Joker',
        ':joker:',
        'Joker-Karte',
        'Karten Black Joker spielen'
    ],
    '💡': [
        'Glühbirne',
        ':light_bulb:',
        'Idee',
        'Elektrische Glühbirne'
    ],
    '🔦': [
        'Taschenlampe',
        ':flashlight:',
        'Fackel',
        'Elektrische Fackel'
    ],
    '🏮': [
        'Laterne Rotes Papier',
        ':izakaya_lantern:',
        ':lantern:',
        ':red_paper_lantern:',
        'Asiatische Laterne',
        'Japanische Laterne',
        'Rote Laterne',
        'Izakaja Laterne',
        ':red:'
    ],
    '📦': [
        'Paket',
        ':package:',
        'Kiste',
        'Paket',
        ':brown:'
    ],
    '📇': [
        'Karte indexieren',
        ':card_index:',
        'Rolodex',
        'Systemkarte',
        'Kartenindex'
    ],
    '🕳️': [
        'Loch',
        ':hole:',
        ':black:'
    ],
    '👁️‍🗨️': [
        'Ich bin Zeuge',
        ':eye_in_speech_bubble:',
        ':eye_speech_bubble:',
        ':eye-in-speech-bubble:',
        'Auge in Sprechblase'
    ],
    '⚜️': [
        'Fleur-de-lis',
        ':fleur_de_lis:',
        'Späher',
        'Neue Orleans Heilige'
    ],
    '⚗️': [
        'Alembic',
        ':alembic:'
    ],
    '🕯️': [
        'Kerze',
        ':candle:',
        ':white:'
    ],
    '🖼️': [
        'Gerahmtes Bild',
        ':framed_picture:',
        'Malerei',
        'Bilderrahmen',
        'Rahmen mit Bild'
    ],
    '🛍️': [
        'Einkaufstaschen',
        ':shopping_bags:'
    ],
    '🎟️': [
        'Eintrittskarten',
        ':admission_tickets:'
    ],
    '🛎️': [
        'Bellhop Bell',
        ':bellhop_bell:',
        ':yellow:',
        ':gold:'
    ],
    '🧾': [
        'Beleg',
        ':receipt:',
        ':white:'
    ],
    '🧮': [
        'Abacus',
        ':abacus:'
    ],
    '🧫': [
        'Petri Disch',
        ':petri_dish:'
    ],
    '🧹': [
        'Broom',
        ':broom:',
        'Pinsel',
        'Wischen',
        ':yellow:'
    ],
    '🎰': [
        'Slot-Maschine',
        ':slot_machine:',
        'Kasino',
        'Obstmaschine',
        'Spielen',
        'Poker-Maschine'
    ],
    '🦽': [
        'Manueller Rollstuhl',
        ':manual_wheelchair:',
        ':wheelchair:'
    ],
    '🦼': [
        'Motorischer Rollstuhl',
        ':motorized_wheelchair:'
    ],
    '🪔': [
        'Diya-Lampe',
        ':diya_lamp:'
    ],
    '🦯': [
        'White Cane',
        ':whie_cane:'
    ],
    '🩸': [
        'Bluttropfen',
        ':drop_of_blood:',
        ':red:'
    ],
    '🩹': [
        'Kleber Verband',
        ':adhesive_bandage:'
    ],
    '🩺': [
        'Stethoskop',
        ':stethoscope:'
    ],
    '🪶': [
        'Feder',
        ':feather:'
    ],
    '🪤': [
        'Mausfalle',
        ':mouse_trap:'
    ],
    '🫖': [
        'Teapot',
        ':teapot:'
    ],
    '🪨': [
        'Felsen',
        ':rock:',
        ':gray:',
        ':grey:'
    ],
    '🪵': [
        'Holz',
        ':wood:',
        ':brown:'
    ],
    '🪄': [
        'Zauberstab',
        ':magin_wand:'
    ],
    '🔮': [
        'Kristallkugel',
        ':crystal_ball:',
        'Clairvoyant',
        'Glücksgeschenk',
        'Psychisch',
        'Violetter Kristall',
        ':purple:'
    ],
    '🪅': [
        'Pin<unk> ata',
        ':pinata:',
        ':piñata:'
    ],
    '🪆': [
        'Schachteln Puppen',
        ':nesting_dolls:',
        'Matryoschka'
    ],
    '🪡': [
        'Nähnadel',
        ':swing_needle:'
    ],
    '🪢': [
        'Knoten',
        ':knot:',
        ':red:',
        ':blue:'
    ],
    '🪙': [
        'Münze',
        ':coin:'
    ],
    '🪃': [
        'Boomerang',
        ':boomerang:',
        ':brown:'
    ],
    '🪥': [
        'Zahnbürste',
        ':toothbrush:'
    ],
    '🪦': [
        'Kopfstein',
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
        'Narr',
        ':jar:',
        ':transparent:'
    ],
    '🛞': [
        'Rad',
        ':wheel:',
        'Fahrzeuge',
        'Autos',
        ':black:'
    ],
    '🛟': [
        'Klingelboje',
        ':ring_buoy:',
        'Lebensretter',
        'Lebensring',
        'Boote',
        'Sicherheit',
        'Wasser',
        'Leben sparen',
        ':red:',
        ':white:'
    ],
    '🪬': [
        'Hamsa',
        ':hamsa:',
        'Islam',
        'Judaismus',
        'Buddhism',
        'Christentum',
        'Religionen',
        'Glück',
        'Schutz',
        'Anleitung',
        'Weibliche Kraft',
        'Glaube',
        ':blue:'
    ],
    '🪩': [
        'Kugel spiegeln',
        ':mirror_ball:',
        'Disco-Kugel'
    ],
    '🪫': [
        'Niedriger Akku',
        ':low_battery:',
        ':red:',
        'Energie',
        'Rot'
    ],
    '🩻': [
        'Röntgenstrahl',
        ':x_ray:',
        ':x-ray:',
        ':blue:'
    ],
    '🫧': [
        'Blasen',
        ':bubbles:',
        'Seife Suds',
        'Kohlenstoff',
        'Effervescent Personality',
        ':transparent:'
    ],
    '🪪': [
        'Identifikationskarte',
        ':identification_card:',
        'Identität',
        'Reisepass',
        'ID'
    ],
    '🧿': [
        'Nazar Amulet',
        ':nazar_amulet:',
        'Böses Auge',
        ':blue:'
    ],
    '🧸': [
        'Teddy Bär',
        ':teddy_bear:',
        'Spielzeug',
        ':brown:'
    ]
};