// descriptions took from Emojipedia.org
lang = 'de-ch';
//use i18n language code of the browser, more details: https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/i18n/LanguageCode
titles_language[lang] = {
    '🔍': 'Ergebnisse',
    '🕒': 'Meist verwendete Emojis',
    '😀': 'Smileys',
    '🙋': 'Personen',
    '🦊': 'Tiere',
    '🅰️': 'Symbole',
    '🍎': 'Essen und Getränke',
    '🏳️‍🌈': 'Flags',
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
        ':)',
        'Glückliches Gesicht',
        'Smiley-Gesicht'
    ],
    '😃': [
        'Grinsendes Gesicht mit großen Augen',
        ':D',
        'Glückliches Gesicht',
        'Smiley-Gesicht',
        'Lächelndes Gesicht mit offenem Mund'
    ],
    '😄': [
        'Grinsendes Gesicht mit lächelnden Augen',
        'Glückliches Gesicht',
        'Smiley-Gesicht',
        'Grinsendes Gesicht mit schrumpfenden Augen',
        'Lächelndes Gesicht mit offenen Augen und lächelnden Augen'
    ],
    '😁': [
        'Strahlendes Gesicht mit lächelnden Augen',
        'Grinsendes Gesicht mit lächelnden Augen'
    ],
    '😆': [
        'Grinsendes blinzelndes Gesicht',
        'xD',
        '><',
        'Großes Grinsen',
        'Geschlossenes Auge Lächeln',
        'Lachend',
        'Grinsendes Gesicht mit dicht geschlossenen Augen',
        'Lächelndes Gesicht mit offenem Mund und dicht geschlossenen Augen'
    ],
    '😅': [
        'Grinnendes Gesicht mit Schweiß',
        'Übung',
        'Glücklicher Schweiß',
        'Grinsendes Gesicht mit blinzelnden Augen und Schweißtropfen',
        'Lächelndes Gesicht mit offenem Mund und kaltem Schweiß'
    ],
    '🤣': [
        'ROFL',
        'Auf dem Boden lachend rollen'
    ],
    '😂': [
        'Gesicht mit Freudentränen',
        'Lachen',
        'Weinend lachen',
        'Lachende Tränen',
        'LOL'
    ],
    '🙂': [
        'Leicht lächelndes Gesicht',
        ':)',
        'Etwas glücklich',
        'Alles gut'
    ],
    '🙃': [
        'Verkehrtes Gesicht',
        'Sarkasmus',
        'Albernd',
        'Verkehrtes Gesicht'
    ],
    '😉': [
        'Zwinkerndes Gesicht',
        ';)',
        'Zwinkern',
        'Zwinkern Gesicht',
        'Zwinkerndes Gesicht'
    ],
    '😊': [
        'Lächelndes Gesicht mit lächelnden Augen',
        '^^',
        'Glückliches Gesicht',
        'Lächeln',
        'Smiley-Gesicht'
    ],
    '😇': [
        'Lächelndes Gesicht mit Heiligenschein',
        'Engel',
        'Heiligenschein'
    ],
    '🥰': [
        'Lächelndes Gesicht mit Herzen',
        'Verliebtes Gesicht',
        'Lächelndes Gesicht mit lächelnden Augen und drei Herzen'
    ],
    '😍': [
        'Lächelndes Gesicht mit Herzaugen',
        '*.*',
        'Herz Augen',
        'Herz Gesicht',
        'Lächelndes Gesicht mit Herz geformten Augen'
    ],
    '🤩': [
        'Sternenhimmel',
        'Aufgeregt',
        'Sternaugen',
        'Sternenhimmel',
        'Wow Gesicht',
        'Gesicht mit Sternenhimmelaugen',
        'Grinsendes Gesicht mit Sternaugen'
    ],
    '😘': [
        'Gesicht mit Luftkuss',
        ':*',
        ':-*',
        'Einen Luftkuss geben',
        'Luftkuss',
        'Küssen',
        'Gesicht gibt einen Kuss'
    ],
    '😗': [
        'Küssendes Gesicht',
        ':*',
        ':-*',
        'Duck-Face',
        'Küssendes Gesicht',
        'Pfeifen'
    ],
    '☺️': [
        'Lächelndes Gesicht',
        'Glückliches Gesicht',
        'Smiley-Gesicht',
        'Lächeln',
        'Leicht lächelndes Gesicht'
    ],
    '😚': [
        'Küssendes Gesicht mit geschlossenen Augen',
        'Kuss-Gesicht',
        'Küssendes Gesicht'
    ],
    '😙': [
        'Küssendes Gesicht mit lächelnden Augen',
        'Kuss-Gesicht',
        'Küssend',
        'Pfeife',
        'Pfeifen'
    ],
    '😋': [
        'Gesicht genießt das Essen',
        'Albernd',
        'Hungrig',
        'Lächelndes Gesicht mit Zunge',
        'Gesicht genießt leckeres Essen',
        'Lecker'
    ],
    '😛': [
        'Gesicht mit Zunge',
        ':P',
        'Frech',
        'Zunge Gesicht',
        'Zunge raus',
        'Gesichter mit rausgestreckter Zunge'
    ],
    '😜': [
        'Zwinkendes Gesicht mit Zunge',
        ';P',
        'Verrückt',
        'Verrücktes Gesicht',
        'Winkende Seite mit steckender Tongue',
        'Gesichter mit Stuck-Out Tongue und Winking Eye'
    ],
    '🤪': [
        'Zany Face',
        'Verrückte Augen',
        'Aufgeregt',
        'Wilde',
        'Goofy Face',
        'Grinsendes Gesicht mit einem großen und einem kleinen Auge'
    ],
    '😝': [
        'Abschütterndes Gesicht mit Zunge',
        'xP',
        'Zunge raus',
        'Face with Stuck Out Tongue and streng Closed Eyes',
        'Gesichter mit fester Zunge und fest verschlossenen Augen'
    ],
    '🤑': [
        'Geld-und-Mund-Gesicht',
        ':$',
        'Dollar-Schild Augen',
        'Geld-Gesicht',
        'Reiche'
    ],
    '🤗': [
        'Rumpfendes Gesicht',
        'Hub',
        'Racheln',
        'Hengst',
        'Happy Face mit Hugging Hands'
    ],
    '🤭': [
        'Hoppla',
        'Gesicht mit Hand Over Mouth',
        'Lächelndes Gesicht mit lächelnden Augen und Hand-Covering-Mund'
    ],
    '🤫': [
        'Shh',
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
        '?',
        'Hmm',
        'Denkendes Gesicht',
        'Kinn-Vorschaubild',
        'Denker',
        'Werfender Schatten'
    ],
    '🤐': [
        'Zip',
        'Zipper-Mund Gesicht',
        'Gesiegelte Lippen',
        'Versiegelte Lippen',
        'Zip',
        'Gesicht mit Zipper Mund'
    ],
    '🤨': [
        'Gesicht mit erhöhter Augenbraue',
        'Jörg',
        'Der Felsen',
        'Gesicht mit erhöhter Augenbraue',
        'Gesicht mit einer Augenbraue erhöht'
    ],
    '😐': [
        'Neutrales Gesicht',
        ':|',
        'Gesicht mit geraden Mund',
        'Geradlinig'
    ],
    '😑': [
        'Ausdrucksloses Gesicht',
        '-_-',
        'Gesicht mit geraden Mund',
        'Geraden Gesicht'
    ],
    '😶': [
        'Gesicht ohne Mund',
        'Leeres Gesicht',
        'Mundlos',
        'Stille',
        'Stumm'
    ],
    '😏': [
        'Smirking Gesicht',
        'Flirt',
        'Sexuelles Gesicht',
        'Smug Gesicht',
        'Vorgeschlagenes Lächeln'
    ],
    '😒': [
        'Unamüsiertes Gesicht',
        'Unzufrieden',
        'Meh',
        'Seitenauge',
        'Nicht beeindruckt'
    ],
    '🙄': [
        'Gesicht mit Rollenden Augen',
        'Augenrolle'
    ],
    '😬': [
        'Grauendes Gesicht',
        'Awkward',
        'Eek',
        'Fuß in Berührung',
        'Nervus',
        'Snapchat Gegenseitig #1 Bester Freund'
    ],
    '🤥': [
        'Lügengesicht',
        'Lüge',
        'Lange Nase',
        'Pinocchio'
    ],
    '😌': [
        'Gelassenes Gesicht',
        'Inhalt',
        'Gefällt'
    ],
    '😔': [
        'Tut uns leid',
        'Pensives Gesicht',
        'Pensiv',
        'Traurig',
        'Sophie',
        'Traurig',
        'Trauriges Pensive-Gesicht'
    ],
    '😪': [
        'Schlafendes Gesicht',
        'Seiten-Tear',
        'Schneeblase'
    ],
    '🤤': [
        'Speichel',
        'Drooling Face',
        'Drool'
    ],
    '😴': [
        'Schlafendes Gesicht',
        'Zzz',
        'Schlaf Gesicht',
        'Schnarrend',
        'Zzz Gesicht'
    ],
    '🥱': ['Yawning-Gesicht'],
    '😷': [
        'Gesicht mit medizinischer Maske',
        'Coronavirus',
        'COVID-19',
        'Maske Gesicht',
        'Chirurgische Maske'
    ],
    '🤒': [
        'Gesicht mit Thermometer',
        'Ill',
        'Krank'
    ],
    '🤕': [
        'Gesicht mit Kopf-Bandage',
        'Verbandter Kopf',
        'Unhöflich',
        'Verletzte'
    ],
    '🤢': [
        'Geselliges Gesicht',
        'Abscheu',
        'Grüne Fläche',
        'Erbrechen'
    ],
    '🤮': [
        'Gesicht Erbrechen',
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
        'Gesundheit'
    ],
    '🥵': [
        'Heißes Gesicht',
        'Überhitztes Gesicht'
    ],
    '🥶': [
        'Kaltes Gesicht',
        'Kühl',
        'Kühl',
        'Gefrierendes Gesicht'
    ],
    '🥴': [
        'Wahnsinniges Gesicht',
        'Ertrunkenes Gesicht',
        'Gesicht mit Uneven Augen und Wavy Mund'
    ],
    '😵': [
        'Dizzy Face',
        'Cross-Augen Gesicht',
        'Spiralaugen Gesicht'
    ],
    '🤯': [
        'Explodierender Kopf',
        'Verstand Blown',
        'Schockiertes Gesicht mit explodierendem Kopf'
    ],
    '🤠': [
        'Cowboy Hut Gesicht',
        'Cowboy',
        'Cowboy-Gesicht',
        'Gesicht mit Cowboy Hut'
    ],
    '🥳': [
        'Partierendes Gesicht',
        'Party-Gesicht',
        'Gesicht mit Party Horn und Party Hut'
    ],
    '😎': [
        'Lächelndes Gesicht mit Sonnenbrille',
        'Kühl',
        'Gemeinsame beste Freunde (SnapChat)',
        'Sonnenbrille'
    ],
    '🤓': [
        'Nerd Gesicht',
        'Nerdy'
    ],
    '🧐': ['Gesicht mit Monokle'],
    '😕': [
        'Verwirrtes Gesicht',
        ':/',
        ':S',
        'Unplussed',
        'Verwirrt'
    ],
    '😟': [
        'Beunruhigtes Gesicht',
        ':(',
        'Traurig',
        'Sophie'
    ],
    '🙁': [
        'Leicht brüchiges Gesicht',
        ':(',
        'Leicht traurig'
    ],
    '☹️': [
        'Frowning Gesicht',
        ':(',
        'Megafrown',
        'Weiß brüchiges Gesicht'
    ],
    '😮': [
        'Wow',
        ':O',
        'Oh mich!',
        'Gesicht mit offenem Mund',
        'Mund öffnen',
        'Überraschtes Gesicht mit offenem Mund'
    ],
    '😯': [
        'Gehülltes Gesicht',
        ':O',
        'Überraschung',
        'Überraschtes Gesicht'
    ],
    '😲': [
        'Schockiertes Gesicht',
        ':O',
        'Wow',
        'Erschüttertes Gesicht',
        'Ertrunkenes Gesicht',
        'Giebelnde Fläche'
    ],
    '😳': [
        'Gespeichertes Gesicht',
        ':$',
        'Blushing Gesicht',
        'Verwurzelt',
        'Schande',
        'Gesicht mit breiten offenen Augen'
    ],
    '🥺': [
        'Pleitendes Gesicht',
        ':(',
        'Beginn',
        'Glänzende Augen',
        'Simp',
        'Gesicht mit Pleitenden Augen'
    ],
    '😦': [
        'Frowning Gesicht mit offenem Mund',
        'D:',
        'Yawning'
    ],
    '😨': [
        'Geborgen',
        'D:',
        'Furchtbares Gesicht',
        'Überrascht'
    ],
    '😰': [
        'Ängstliches Gesicht mit Schweiß',
        'Blaues Gesicht',
        'Beunruhigtes Gesicht',
        'Nervisches Gesicht',
        'Gesicht mit offenem Mund und kaltem Schweiß'
    ],
    '😥': [
        'Traurig, aber beruhigtes Gesicht',
        ':\'(',
        'Augenbrauen-Schweiß',
        'Unernennt, aber beruhigtes Gesicht'
    ],
    '😢': [
        'Weinendes Gesicht',
        ':\'(',
        'Weinen',
        'Tränen'
    ],
    '😭': [
        'Lauterweise weinend Gesicht',
        'Bawling',
        'Weinen',
        'Traurige Tränen',
        'Sobbing'
    ],
    '😱': [
        'Gesichtsschreien in Angst',
        'Alleinstehend',
        'Schreien',
        'Screaming Gesicht'
    ],
    '😖': [
        'Verwirrtes Gesicht',
        'Quivering Mund',
        'Zerklapptes Gesicht'
    ],
    '😣': [
        'Beharrliches Gesicht',
        'Hilfreich Gesicht',
        'Geschnittene Augen'
    ],
    '😞': [
        'Unbenanntes Gesicht',
        ':(',
        'Traurig',
        'Sophie'
    ],
    '😓': [
        'Abgestrahltes Gesicht mit Schweiß',
        'Harte Arbeit',
        'Trauriges Schweiß-Gesicht',
        'Gesicht mit kaltem Schweiß'
    ],
    '😩': [
        'Weary Gesicht',
        'Distraught Gesicht',
        'Flügel'
    ],
    '😫': [
        'Müde Gesicht',
        'Erschöpft',
        'Fed hoch',
        'Distraught Gesicht'
    ],
    '😤': [
        'Gesicht mit Steam aus der Nase',
        'Ausstrahlung von Grievances',
        'Frustriert',
        'Wahnsinniges Gesicht',
        'Steaming',
        'Huffing mit Zorn Gesicht'
    ],
    '😡': [
        'Pouting Gesicht',
        'Zorniges Gesicht',
        'Grumpe Gesicht',
        'Wahnsinniges Gesicht',
        'Rotes Gesicht'
    ],
    '😠': [
        'Zorniges Gesicht',
        'Zorn',
        'Grumpe Gesicht'
    ],
    '🤬': [
        'Schweißen',
        '@#$%&!',
        'Gesicht mit Symbolen am Mund',
        'Fluch',
        'Zuschneiden',
        'Grawlix',
        'Gesicht mit Symbole über Mund',
        'Seriöses Gesicht mit Symbolen Covering Mouth'
    ],
    '🥲': ['Lächelndes Gesicht mit Tear'],
    '😮‍💨': [
        'Face Exhaling',
        'Sigh'
    ],
    '😵‍💫': [
        'Face with Spiral Eyes',
        'Dizzy Face'
    ],
    '🥸': ['Verkleidtes Gesicht'],
    '😈': [
        'Lächelndes Gesicht mit Hörnern',
        'Teufel',
        'Teufelshörner',
        'Glücklicher Teufel',
        'Violette Teufel',
        'Roter Teufel'
    ],
    '👿': [
        'Wütendes Gesicht mit Hörnern',
        'Teufel',
        'Teufelshörner',
        'Violette Teufel',
        'Violette Goblin',
        'Trauriger Teufel',
        'Imp'
    ],
    '🤡': [
        'Clown Gesicht',
        'Gruseliger Clown',
        'Böses Clown',
        'Schrecklicher Clown'
    ],
    '👽': [
        'Alien',
        'ET'
    ],
    '👾': [
        'Alien Monster',
        'Weltraumeindringling',
        'Videospiel-Monster'
    ],
    '🤖': [
        'Robot',
        'Roboter Gesicht'
    ],
    '👹': [
        'Ogre',
        'Maske Gesicht',
        'Oni',
        'Rotes Monster',
        'Japanischer Oger'
    ],
    '👻': [
        'Geist',
        'Halloween'
    ],
    '🗣️': [
        'Sprechender Kopf',
        'Mansplaine',
        'Rufe',
        'Rufe',
        'Sprich Kopf in Silhouette'
    ],
    '👤': [
        'Büste in Silhouette',
        'Schatten',
        'Silhouette',
        'Benutzer',
        'Silhouette der Person'
    ],
    '🫂': ['Leute Huggen'],
    '👥': [
        'Büsten in Silhouette',
        'Schatten',
        'Silhouettes',
        'Benutzer',
        'Silhouette von zwei Personen'
    ]
};
/*people*/
emojis_language[lang][3] = {
    '👶{{skin_tone}}': [
        'Baby',
        'Kind',
        'Kleinling'
    ],
    '🧒{{skin_tone}}': [
        'Kind',
        'Geschlechtsneutrales Kind'
    ],
    '👧{{skin_tone}}': ['Mädchen'],
    '🧑{{skin_tone}}': [
        'Person',
        'Geschlechtsneutrale Erwachsene',
        'Erwachsene'
    ],
    '👱{{skin_tone}}': [
        'Person: Blond Haar',
        'Blonde',
        'Blonde',
        'Blonde Mann',
        'Person mit Blond Haar',
        'Mann mit Blondenhaar'
    ],
    '👨{{skin_tone}}': [
        'Mann',
        'Mann',
        'Moustache Mann'
    ],
    '🧔{{skin_tone}}': [
        'Man: Bart',
        'Bart',
        'Bearteter Mann',
        'Bearded Person'
    ],
    '👨{{skin_tone}}‍🦰': [
        'Man: Red Hair',
        'Ginger Man',
        'Man Redhead',
        'Man With Red Hair'
    ],
    '👨{{skin_tone}}‍🦱': [
        'Man: Curly Hair',
        'Man With Curly Hair'
    ],
    '👨{{skin_tone}}‍🦳': [
        'Man: White Hair',
        'Man With Gray Hair'
    ],
    '👨{{skin_tone}}‍🦲': [
        'Man: Bald',
        'Man With No Hair'
    ],
    '👩{{skin_tone}}': [
        'Frau',
        'Weiblich',
        'Dame',
        'Gelbe Frau'
    ],
    '👩{{skin_tone}}‍🦰': [
        'Woman: Red Hair',
        'Ginger Woman',
        'Woman Redhead',
        'Woman With Red Hair'
    ],
    '👩{{skin_tone}}‍🦱': [
        'Woman: Curly Hair',
        'Woman With Curly Hair'
    ],
    '👩{{skin_tone}}‍🦳': [
        'Woman: White Hair',
        'Woman With Gray Hair'
    ],
    '👩{{skin_tone}}‍🦲': [
        'Woman: Bald',
        'Woman With No Hair'
    ],
    '👱{{skin_tone}}‍♀️': [
        'Woman: Blond Hair',
        'Woman With Blonde Hair'
    ],
    '👱{{skin_tone}}‍♂️': [
        'Man: Blond Hair',
        'Man With Blonde Hair'
    ],
    '🧓{{skin_tone}}‍': [
        'Older Person',
        'Gender Neutral Older Adult'
    ],
    '👴{{skin_tone}}‍': [
        'Old Man',
        'Elderly Man',
        'Grandpa',
        'Older Man'
    ],
    '👵{{skin_tone}}‍': [
        'Old Woman',
        'Elderly Woman',
        'Grandma',
        'Nanna',
        'Old Lady',
        'Older Woman'
    ],
    '👼{{skin_tone}}‍': [
        'Baby Angel',
        'Angel',
        'Cherub',
        'Cupid',
        'Putto'
    ],
    '🎅{{skin_tone}}‍': [
        'Santa Claus',
        'Saint Nicholas',
        'Sinterklaas',
        'Father Christmas'
    ],
    '🤶{{skin_tone}}‍': [
        'Mrs Claus',
        'Mother Christmas'
    ],
    '🤴{{skin_tone}}‍': ['Prince'],
    '👸{{skin_tone}}‍': [
        'Princess',
        'Blonde Girl',
        'Girl With Crown',
        'Girl With Tiara'
    ],
    '👳{{skin_tone}}‍♂️': ['Man Wearing Turban'],
    '👳{{skin_tone}}‍♀️': ['Woman Wearing Turban'],
    '👲{{skin_tone}}‍': [
        'Person With Skullcap',
        'Asian Man',
        'Man With Chinese Cap',
        'Man with Gua Pi Mao'
    ],
    '🧕{{skin_tone}}‍': [
        'Woman with Headscarf',
        'Hijab',
        'Person with Headscarf'
    ],
    '🤵{{skin_tone}}‍': [
        'Person in Tuxedo',
        'Groom',
        'Man In Suit',
        'Man in Tuxedo'
    ],
    '👰{{skin_tone}}‍': [
        'Person With Veil',
        'Bride',
        'Bride with Veil'
    ],
    '👰{{skin_tone}}‍♂️': ['Man with Veil'],
    '👰{{skin_tone}}‍♀️': ['Woman with Veil'],
    '👩{{skin_tone}}‍🍼': ['Woman Feeding Baby'],
    '👨{{skin_tone}}‍🍼': ['Man Feeding Baby'],
    '🥷': ['Ninja'],
    '🤰{{skin_tone}}‍': [
        'Pregnant Woman',
        'Pregnancy',
        'Pregnant Lady'
    ],
    '🤱{{skin_tone}}‍': [
        'Breast-Feeding',
        'Breastfeeding'
    ],
    '🦸{{skin_tone}}‍♂️': ['Man Superhero'],
    '🦸{{skin_tone}}‍‍♀️': ['Woman Superhero'],
    '🦹{{skin_tone}}‍‍♂️': ['Man Supervillain'],
    '🦹{{skin_tone}}‍‍♀️': ['Woman Supervillain'],
    '🧙{{skin_tone}}‍': [
        'Mage',
        'Sorcerer',
        'Sorceress',
        'Witch',
        'Wizard'
    ],
    '🧙{{skin_tone}}‍‍♀️': [
        'Woman Mage',
        'Witch',
        'Sorceress'
    ],
    '🧚{{skin_tone}}‍‍♂️': ['Man Fairy'],
    '🧚{{skin_tone}}‍♀️': ['Woman Fairy'],
    '🧛{{skin_tone}}‍♂️': [
        'Man Vampire',
        'Dracula'
    ],
    '🧛{{skin_tone}}‍‍♀️': ['Woman Vampire'],
    '🧜{{skin_tone}}‍♂️': ['Merman'],
    '🧜{{skin_tone}}‍♀️': ['Mermaid'],
    '🧝{{skin_tone}}‍♂️': ['Man Elf'],
    '🧝{{skin_tone}}‍♀️': ['Woman Elf'],
    '🧞‍♂️': ['Man Genie'],
    '🧞‍♀️': ['Woman Genie'],
    '🕵️{{skin_tone}}‍♂️': [
        'Man Detective',
        'Private Eye',
        'Sleuth',
        'Spy',
        'Man Sleuth',
        'Sleuth or Spy',
        '007',
        'Inspector'
    ],
    '🕵️{{skin_tone}}‍♀️': ['Woman Detective'],
    '💂{{skin_tone}}‍': [
        'Guard',
        'British Guardsman',
        'Foot Guard'
    ],
    '💂{{skin_tone}}‍‍♀️': ['Woman Guard'],
    '👮{{skin_tone}}‍': [
        'Police Officer',
        'Cop',
        'Police',
        'Policeman',
        'Policewoman'
    ],
    '👮{{skin_tone}}‍‍♀️': ['Woman Police Officer'],
    '👨{{skin_tone}}‍🚒': ['Man Firefighter'],
    '👩{{skin_tone}}‍‍🚒': ['Woman Firefighter'],
    '👨{{skin_tone}}‍‍✈️': ['Man Pilot'],
    '👩{{skin_tone}}‍‍✈️': ['Woman Pilot'],
    '👨{{skin_tone}}‍💻': [
        'Man Technologist',
        'Man Technologist'
    ],
    '👩{{skin_tone}}‍💻': ['Woman Technologist'],
    '👨{{skin_tone}}‍🎤': [
        'Man Singer',
        'Bowie',
        'Aladdin Sane'
    ],
    '👩{{skin_tone}}‍🎤': ['Woman Singer'],
    '👨{{skin_tone}}‍🎨': ['Man Artist'],
    '👩{{skin_tone}}‍🎨': ['Woman Artist'],
    '👷{{skin_tone}}‍‍♂️': ['Man Construction Worker'],
    '👷{{skin_tone}}‍‍♀️': ['Woman Construction Worker'],
    '👨{{skin_tone}}‍‍🚀': [
        'Man Astronaut',
        'Man Cosmonaut'
    ],
    '👩{{skin_tone}}‍‍🚀': [
        'Woman Astronaut',
        'Woman Cosmonaut'
    ],
    '👨{{skin_tone}}‍‍🔬': ['Man Scientist'],
    '👩{{skin_tone}}‍‍🔬': ['Woman Scientist'],
    '👨{{skin_tone}}‍💼': [
        'Man Office Worker',
        'CEO',
        'Businessman'
    ],
    '👩{{skin_tone}}‍💼': [
        'Woman Office Worker',
        'Businesswoman',
        'CEO'
    ],
    '👨{{skin_tone}}‍🏭': ['Man Factory Worker'],
    '👩{{skin_tone}}‍‍🏭': ['Woman Factory Worker'],
    '👨{{skin_tone}}‍‍🔧': ['Man Mechanic'],
    '👩{{skin_tone}}‍‍🔧': ['Woman Mechanic'],
    '👨{{skin_tone}}‍‍🍳': [
        'Man Cook',
        'Man Chef',
        'Male Chef'
    ],
    '👩{{skin_tone}}‍‍🍳': [
        'Woman Cook',
        'Woman Chef',
        'Female Chef'
    ],
    '👨{{skin_tone}}‍‍🌾': ['Man Farmer'],
    '👩{{skin_tone}}‍‍🌾': ['Woman Farmer'],
    '👨{{skin_tone}}‍‍⚖️': ['Man Judge'],
    '👩{{skin_tone}}‍‍⚖️': ['Woman Judge'],
    '👨{{skin_tone}}‍‍🏫': ['Man Teacher'],
    '👩{{skin_tone}}‍‍🏫': ['Woman Teacher'],
    '👨{{skin_tone}}‍🎓': ['Man Student'],
    '👩{{skin_tone}}‍🎓': ['Woman Student'],
    '👨{{skin_tone}}‍‍⚕️': [
        'Man Health Worker',
        'Male Doctor',
        'Male Nurse'
    ],
    '👩{{skin_tone}}‍⚕️': [
        'Woman Health Worker',
        'Female Doctor',
        'Female Nurse'
    ],
    '🤷{{skin_tone}}‍♂️': [
        'Man Shrugging',
        'idk man',
        'dunno'
    ],
    '🤷{{skin_tone}}‍♀️': [
        'Woman Shrugging',
        'idk woman',
        'dunno'
    ],
    '🤦{{skin_tone}}‍♂️': ['Man Facepalming'],
    '🤦{{skin_tone}}‍♀️': ['Woman Facepalming'],
    '🙇{{skin_tone}}‍‍♂️': ['Man Bowing'],
    '🙇{{skin_tone}}‍‍♀️': ['Woman Bowing'],
    '🧏{{skin_tone}}‍♂️': ['Deaf Man'],
    '🧏{{skin_tone}}‍‍♀️': ['Deaf Woman'],
    '🙋{{skin_tone}}‍‍♂️': [
        'Man Raising Hand',
        'Happy Man Raising One Hand'
    ],
    '🙋{{skin_tone}}‍♀️': [
        'Woman Raising Hand',
        'Happy Woman Raising One Hand'
    ],
    '💁{{skin_tone}}‍♂️': [
        'Man Tipping Hand',
        'Information Desk Man'
    ],
    '💁{{skin_tone}}‍♀️': [
        'Woman Tipping Hand',
        'Information Desk Woman'
    ],
    '🙆{{skin_tone}}‍♂️': ['Man Gesturing OK'],
    '🙆{{skin_tone}}‍♀️': ['Woman Gesturing OK'],
    '🙅{{skin_tone}}‍♂️': ['Man Gesturing No'],
    '🙅{{skin_tone}}‍♀️': ['Woman Gesturing No'],
    '🙎{{skin_tone}}‍♂️': ['Man Pouting'],
    '🙎{{skin_tone}}‍‍♀️': ['Woman Pouting'],
    '🙍{{skin_tone}}‍‍♂️': ['Man Frowning'],
    '🙍{{skin_tone}}‍‍♀️': ['Woman Frowning'],
    '🧟‍‍♂️': ['Man Zombie'],
    '🧟‍‍♀️': ['Woman Zombie'],
    '🚶{{skin_tone}}‍♂️': ['Man Walking'],
    '🚶{{skin_tone}}‍♀️': ['Woman Walking'],
    '🧍{{skin_tone}}‍‍♂️': ['Man Standing'],
    '🧍{{skin_tone}}‍‍♀️': ['Woman Standing'],
    '🧎{{skin_tone}}‍♂️': ['Man Kneeling'],
    '🧎{{skin_tone}}‍‍♀️': ['Woman Kneeling'],
    '👨{{skin_tone}}‍🦯': ['Man with White Cane'],
    '👩{{skin_tone}}‍🦯': ['Woman with White Cane'],
    '👨{{skin_tone}}‍🦼': ['Man in Motorized Wheelchair'],
    '👩{{skin_tone}}‍🦼': ['Woman in Motorized Wheelchair'],
    '👨{{skin_tone}}‍🦽': ['Man in Manual Wheelchair'],
    '👩{{skin_tone}}‍🦽': ['Woman in Manual Wheelchair'],
    '👯‍♂️': ['Men with Bunny Ears'],
    '👯‍♀️': ['Women with Bunny Ears'],
    '🕴️{{skin_tone}}‍': [
        'Person in Suit Levitating',
        'Hovering Man',
        'Rude Boy',
        'Walt Jabsco',
        'Man in Business Suit Levitating'
    ],
    '🧖{{skin_tone}}‍♂️': [
        'Man in Steamy Room',
        'Man in Sauna'
    ],
    '🧖{{skin_tone}}‍♀️': [
        'Woman in Steamy Room',
        'Woman in Sauna'
    ],
    '👫{{skin_tone}}‍': [
        'Woman and Man Holding Hands',
        'Heterosexual Couple',
        'Straight Couple',
        'Man and Woman Holding Hands'
    ],
    '👭{{skin_tone}}‍': [
        'Lesbian Couple',
        'Women Holding Hands',
        'Two Women Holding Hands'
    ],
    '👬{{skin_tone}}‍': [
        'Men Holding Hands',
        'Gay Couple',
        'Two Men Holding Hands'
    ],
    '👨‍👩‍👦': [
        'Family With Mother, Father and Son',
        'Family: Man, Woman, Boy'
    ],
    '👨‍👩‍👧': [
        'Family With Mother, Father and Daughter',
        'Family: Man, Woman, Girl'
    ],
    '👨‍👩‍👧‍👦': [
        'Family With Mother, Father, Son and Daughter',
        'Family: Man, Woman, Girl, Boy'
    ],
    '👨‍👩‍👦‍👦': [
        'Family With Mother, Father and Two Sons',
        'Family: Man, Woman, Boy, Boy'
    ],
    '👨‍👩‍👧‍👧': [
        'Family With Mother, Father and Two Daughters',
        'Family: Man, Woman, Girl, Girl'
    ],
    '👨‍👨‍👦': [
        'Family With Two Fathers and Son',
        'Family: Man, Man, Boy'
    ],
    '👨‍👨‍👧': [
        'Family With Two Fathers and Daughter',
        'Family: Man, Man, Girl'
    ],
    '👨‍👨‍👧‍👦': [
        'Family With Two Fathers, Son and Daughter',
        'Family: Man, Man, Girl, Boy'
    ],
    '👨‍👨‍👦‍👦': [
        'Family With Two Fathers and Two Sons',
        'Family: Man, Man, Boy, Boy'
    ],
    '👨‍👨‍👧‍👧': [
        'Family With Two Fathers and Two Daughters',
        'Family: Man, Man, Girl, Girl'
    ],
    '👩‍👩‍👦': [
        'Family With Two Mothers and Son',
        'Family: Woman, Woman, Boy'
    ],
    '👩‍👩‍👧': [
        'Family With Two Mothers and Daughter',
        'Family: Woman, Woman, Girl'
    ],
    '👩‍👩‍👧‍👦': [
        'Family With Two Mothers, Son and Daughter',
        'Family: Woman, Woman, Girl, Boy'
    ],
    '👩‍👩‍👦‍👦': [
        'Family With Two Mothers and Two Sons',
        'Family: Woman, Woman, Boy, Boy'
    ],
    '👩‍👩‍👧‍👧': [
        'Family With Two Mothers and Two Daughters',
        'Family: Woman, Woman, Girl, Girl'
    ],
    '👨‍👦': [
        'Family With Father and Son',
        'Family: Man, Boy'
    ],
    '👨‍👦‍👦': [
        'Family: Man, Boy, Boy',
        'Family With Father and Two Sons'
    ],
    '👨‍👧': [
        'Family With Father and Daughter',
        'Family: Man, Girl'
    ],
    '👨‍👧‍👦': [
        'Family With Father, Son and Daughter',
        'Family: Man, Girl, Boy'
    ],
    '👨‍👧‍👧': [
        'Family With Father and Two Daughters',
        'Family: Man, Girl, Girl'
    ],
    '👩‍👦': [
        'Family With Mother and Son',
        'Family: Woman, Boy'
    ],
    '👩‍👦‍👦': [
        'Family With Mother and Two Sons',
        'Family: Woman, Boy, Boy'
    ],
    '👩‍👧': [
        'Family With Mother and Daughter',
        'Family: Woman, Girl'
    ],
    '👩‍👧‍👦': [
        'Family With Mother, Son and Daughter',
        'Family: Woman, Girl, Boy'
    ],
    '👩‍👧‍👧': [
        'Family With Mother and Two Daughters',
        'Family: Woman, Girl, Girl'
    ],
    '💑': [
        'Paar mit Herz',
        'Paar in Liebe',
        'Liebevolles Paar',
        'Mann und Frau mit Herz'
    ],
    '👨‍❤️‍👨': [
        'Two Men With Heart',
        'Couple with Heart: Man, Man'
    ],
    '👩‍❤️‍👩': [
        'Two Women With Heart',
        'Couple with Heart: Woman, Woman'
    ],
    '💆{{skin_tone}}‍‍♂️': ['Man Getting Head Massage'],
    '💆{{skin_tone}}‍♀️': ['Woman Getting Head Massage'],
    '💇{{skin_tone}}‍‍♂️': ['Man Getting Haircut'],
    '💇{{skin_tone}}‍‍♀️': ['Woman Getting Haircut'],
    '🛌{{skin_tone}}‍': [
        'Sleeping Accommodation',
        'Person in Bed',
        'Person Sleeping'
    ]
};
/*animals*/
emojis_language[lang][4] = {
    '😺': [
        'Grinningkatze',
        ':)',
        'Fröhliche Katze',
        'Lächelnde Katze',
        'Glückliche Katzenfigur',
        'Lächelnde Katzenfigur mit offenem Mund'
    ],
    '😸': [
        'Traubenkatze mit lächelnden Augen',
        ':D',
        'Grinningkatze',
        'Fröhliche Katze',
        'Traubenkatze Gesicht'
    ],
    '😹': [
        'Katze mit Tränen der Freude',
        ':\')',
        'Glückliche Tränenkatze',
        'Lachende Katze'
    ],
    '😻': [
        'Lächelnde Katze mit Herzaugen',
        '*.*',
        'Herzaugenkatze',
        'Liebende Katze',
        'Lächelnde Katzenfigur mit Herz geformten Augen'
    ],
    '😼': [
        'Katze mit Wry Lächeln',
        'Smirking Katze',
        'Smirking Katzenfigur',
        'Katze Gesicht mit Wry Lächeln'
    ],
    '😽': [
        'Kusskatze',
        ':*',
        'Küsende Katzenfigur',
        'Katzen-Gesicht mit geschlossenen Augen küssen'
    ],
    '🙀': [
        'Tragekatze',
        ':O',
        'Verarmte Katze',
        'Schreien Katze',
        'Katzenfigur Schreien in Angst',
        'Katzen-Gesicht'
    ],
    '😿': [
        'Weinende Katze',
        ':\'(',
        'Traurige Katze',
        'Weinende Katzenfigur'
    ],
    '😾': [
        'Pouting Katze',
        'Grumpy Cat',
        'Katzenfigur'
    ],
    '🙈': [
        'Affen',
        'See-No-bösartiger Affe',
        'Mizaru',
        'Affenabdeckung'
    ],
    '🙉': [
        'Affen',
        'Hear-No-bösartiger Affe',
        'Kikazaru',
        'Affenabdeckung'
    ],
    '🙊': [
        'Affen',
        'Bösartiger Affe sprechen',
        'Iwazaru',
        'Affe-Covering-Mund',
        'Kein Sprechen'
    ],
    '🐵': [
        'Affen',
        'Affenfackel',
        'Affenkopf'
    ],
    '🐒': [
        'Affen',
        'Frecher Affen'
    ],
    '🦍': ['Gorilla'],
    '🐶': [
        'Hundegesicht',
        'Hund',
        'Welpe'
    ],
    '🐕': [
        'Hund',
        'Doggo',
        'Akita Inu'
    ],
    '🦮': [
        'Augenhund sehen',
        'Guide Hund'
    ],
    '🐕‍🦺': ['Service Dog'],
    '🐩': [
        'Poodle',
        'Hund',
        'Miniatur-Poodle',
        'Standard Poodle',
        'Spielzeug-Poodle'
    ],
    '🐺': [
        'Wolf',
        'Wolfsgesicht'
    ],
    '🦊': [
        'Fuchs',
        'Fuchs Gesicht'
    ],
    '🦝': ['Raccoon'],
    '🐱': [
        'Katzenfigur',
        ':3',
        'Kätzchen',
        'Jörg'
    ],
    '🐈': [
        'Katze',
        'Hauskatze',
        'Katze',
        'Housecat'
    ],
    '🐈‍⬛': ['Black Cat'],
    '🦁': [
        'Löwe',
        'Löwe Gesicht'
    ],
    '🐯': [
        'Tiger-Gesicht',
        'Niedriger Tiger'
    ],
    '🐅': [
        'Tiger',
        'Bengaltiger Tiger'
    ],
    '🐆': [
        'Leopard',
        'Afrikanischer Leopard',
        'Jaguar'
    ],
    '🐴': [
        'Pferdegesicht',
        'Pferdekopf'
    ],
    '🐎': [
        'Pferd',
        'Galoppierendes Pferd',
        'Rennpferd'
    ],
    '🦄': [
        'Einhorn',
        'Einhorn Gesicht'
    ],
    '🦓': [
        'Zebra',
        'Zebra Gesicht'
    ],
    '🦌': [
        'Hirsch',
        'Buck',
        'Rentier',
        'Stag'
    ],
    '🐮': [
        'Kuh Gesicht',
        'Kuh',
        'Glückliche Kuh'
    ],
    '🐂': [
        'Ox',
        'Bulle',
        'Bullock',
        'Ochsen',
        'Lenker'
    ],
    '🐃': [
        'Wasserbüffel',
        'Buffalo',
        'Binnenwasserbüffel'
    ],
    '🐄': [
        'Kuh',
        'Milchkuh'
    ],
    '🐷': [
        'Schweinefleisch',
        'Schwein',
        'Schweinekopf'
    ],
    '🐖': [
        'Schwein',
        'Haufen',
        'Sow'
    ],
    '🐗': [
        'Wildschwein',
        'Warthog',
        'Wildschwein',
        'Wildschwein'
    ],
    '🐽': ['Schwein Nase'],
    '🐏': [
        'Ram',
        'Schafe'
    ],
    '🐑': [
        'Ewe',
        'Lamb',
        'Schafe'
    ],
    '🐐': ['Ziege'],
    '🐪': [
        'Marie',
        'Arabischer Kamel',
        'Dromedärkamel',
        'Eins-Spindel-Kamel'
    ],
    '🐫': [
        'Zwei-Hump-Kamel',
        'Asiatischer Kamel',
        'Bactrian Kamel'
    ],
    '🦙': [
        'Llama',
        'Alpaca'
    ],
    '🦒': [
        'Giraffe',
        'Giraffe Face'
    ],
    '🐘': ['Elefanten'],
    '🦏': [
        'Rhinoceros',
        'Rhino'
    ],
    '🦛': [
        'Hippopotamus',
        'Hippo'
    ],
    '🐭': [
        'Maus-Gesicht',
        'Maus'
    ],
    '🐁': [
        'Maus',
        'Dennis',
        'Nagetiere',
        'Mäuse'
    ],
    '🐀': [
        'Ratte',
        'Nagetiere'
    ],
    '🐹': [
        'Hamster',
        'Hamster Gesicht'
    ],
    '🐰': [
        'Kaninchen-Gesicht',
        'Osterhasen'
    ],
    '🐇': [
        'Kaninchen',
        'Bunny',
        'Hasenkaninchen'
    ],
    '🐿️': [
        'Chipmunk',
        'Eichhörnchen'
    ],
    '🦔': ['Hedgehog'],
    '🦇': [
        'Fledermaus',
        'Batman'
    ],
    '🐻': [
        'Bär',
        'Bären Gesicht',
        'Teddy Bär'
    ],
    '🐨': [
        'Koala',
        'Koala-Gesicht'
    ],
    '🐼': [
        'Panda',
        'Panda Gesicht'
    ],
    '🦘': [
        'Kangaroo',
        'Roo'
    ],
    '🦡': ['Abzeichen'],
    '🦃': [
        'Türkei',
        'Thanksgiving Türkei',
        'Wilde Türkei'
    ],
    '🐔': [
        'Huhn',
        'Hen'
    ],
    '🐓': [
        'Hannah',
        'Rooster',
        'Cockerel'
    ],
    '🐣': [
        'Brütenkäse',
        'Babyhuhn',
        'Hühnerbrüten'
    ],
    '🐤': [
        'Baby Kick',
        'Gelber Vogel'
    ],
    '🐥': [
        'Babykäse vor der Haube',
        'Baby Kick',
        'Stehender Witz'
    ],
    '🐦': ['Vogel'],
    '🐧': ['Penguin'],
    '🕊️': [
        'Taube',
        'Taube des Friedens'
    ],
    '🦅': [
        'Adler',
        'Kahlenadler'
    ],
    '🦆': ['Ente'],
    '🦢': ['Schwan'],
    '🦉': ['Eule'],
    '🦚': ['Friedhof'],
    '🦜': ['Papagei'],
    '🐸': [
        'Frosch',
        'Toad',
        'Froschgefahr'
    ],
    '🐊': [
        'Krokodil',
        'Alligator',
        'Kreuz'
    ],
    '🐢': [
        'Schildkröte',
        'Tortoise'
    ],
    '🦎': [
        'Echse',
        'Günther'
    ],
    '🐍': [
        'Schlange',
        'Schlange'
    ],
    '🐲': [
        'Drachenfigur',
        'Drachenkopf'
    ],
    '🐉': ['Drache'],
    '🦕': [
        'Sauropod',
        'Brachiosaurus',
        'Brontosaurus',
        'Dinosaur'
    ],
    '🦖': [
        'T-Rex',
        'Tyrannosaurus Rex'
    ],
    '🐳': [
        'Wal ausspucken',
        'Niedrigwal'
    ],
    '🐋': ['Wal'],
    '🐬': ['Delphine'],
    '🐟': [
        'Fisch',
        'Süßwasserfisch'
    ],
    '🐠': [
        'Tropischer Fisch',
        'Fisch',
        'Gelber Kuhfisch'
    ],
    '🐡': [
        'Blowfish',
        'Fugu',
        'Pufferfisch'
    ],
    '🦈': [
        'Hai',
        'Großer Weißer Hai'
    ],
    '🐙': ['Oktopus'],
    '🐚': [
        'Spiralhülle',
        'Saisons',
        'Schale'
    ],
    '🐌': [
        'Nagel',
        'Slug',
        'Gartenschlinge'
    ],
    '🦋': ['Schmetterling'],
    '🐛': [
        'Bug',
        'Catersäule',
        'Insekten'
    ],
    '🐜': [
        'Ant',
        'Bug',
        'Insekten'
    ],
    '🐝': [
        'Honigbiene',
        'Biene',
        'Bumblebee'
    ],
    '🐞': [
        'Lady Käfer',
        'Ladybird',
        'Ladybug',
        'Bug'
    ],
    '🦗': [
        'Cricket',
        'Grasshopper'
    ],
    '🕷️': ['Spinne'],
    '🦂': ['Skorpion'],
    '🦟': ['Mücke'],
    '🦀': ['Krabbe'],
    '🦞': ['Hummer'],
    '🦐': [
        'Garnelen',
        'Prawn'
    ],
    '🦑': ['Tintenfisch'],
    '🦧': ['Orangutan'],
    '🦥': ['Faultier'],
    '🦦': ['Otter'],
    '🦨': ['Skunk'],
    '🦬': ['Bison'],
    '🦣': ['Mammut'],
    '🦫': ['Biber'],
    '🐻‍❄️': ['Polar Bear'],
    '🦤': ['Dodo'],
    '🦭': ['Siegel'],
    '🪲': ['Käfer'],
    '🪳': ['Kakaos'],
    '🪰': ['Fliegen'],
    '🪱': ['Wurm'],
    '🦩': ['Flamingo']
};
/*symbols*/
emojis_language[lang][5] = {
    '💘': [
        'Herz mit Pfeil',
        'Amor Pfeil',
        'Lovestruck'
    ],
    '💝': [
        'Herz mit Ribbon',
        'Schokoladenkiste',
        'Geschenkbox',
        'Geschenkherz'
    ],
    '💖': [
        'Sparkling Heart',
        'Sparkle-Herz',
        'Funkelndes Herz',
        'Sterne Herz'
    ],
    '💗': [
        'Wachendes Herz',
        'Mehrere Herzen',
        'Dreifaches Herz'
    ],
    '💓': [
        'Schlagen Herz',
        'Herzalarm',
        'Heartbeat',
        'Wifi Herz'
    ],
    '💞': [
        'Revolving Hearts',
        'Zwei Herzen'
    ],
    '💕': [
        'Zwei Herzen',
        'Kleine Herzen',
        'Zwei rosa Herzen'
    ],
    '💟': ['Herz Dekoration'],
    '❣️': [
        'Herz-Aufruhr',
        'Herz über Punkt',
        'Rotes Herz als Aufruhrzeichen',
        'Schweres Herz Anrufezeichen Ornament'
    ],
    '💔': [
        'Zerbrochenes Herz',
        'Zerbrechendes Herz',
        'Brokenherz',
        'Herz kaputt'
    ],
    '❤️': [
        'Ich liebe dich',
        'Rotes Herz',
        'Herz',
        'Liebesherz',
        'Rotes Herz'
    ],
    '🧡': [
        'Oranges Herz',
        'Ich liebe dich'
    ],
    '💛': [
        'Gelbes Herz',
        '#1 BF Snapchat',
        'Gold Herz',
        'Ich liebe dich'
    ],
    '💚': [
        'Grünes Herz',
        'Eifersüchtiges Herz',
        'Ich liebe dich'
    ],
    '💙': [
        'Blaues Herz',
        'Ich liebe dich'
    ],
    '💜': [
        'Violettes Herz',
        'Ich liebe dich'
    ],
    '🖤': [
        'Schwarzes Herz',
        'Dunkles Herz',
        'Ich liebe dich'
    ],
    '🤍': [
        'Weißes Herz',
        'Ich liebe dich'
    ],
    '🤎': [
        'Braunes Herz',
        'Ich liebe dich'
    ],
    '💯': [
        'Hundert Punkte',
        '100',
        '%',
        'Behalte es 100',
        'Perfekte Punktzahl',
        'Hundert Punkte Symbol'
    ],
    '💬': [
        'Sprechballon',
        'Chatblase',
        'Sprechblase'
    ],
    '💭': [
        'Gedankenballon',
        'Denkende Blase',
        'Gedankenblase'
    ],
    '💤': [
        'Zzz',
        'Schlafzeit',
        'Langem',
        'Schlaf',
        'Schlafschild',
        'Schlafsymbol'
    ],
    '♠️': [
        'Spade-Anzug',
        'Spades',
        'Black Spade Suit'
    ],
    '♥️': [
        'Herz-Anzug',
        'Karte mit Herz',
        'Herzen',
        'Schwarzes Herz Anzug'
    ],
    '♦️': [
        'Diamant-Anzug',
        'Diamanten',
        'Schwarzer Diamant-Anzug'
    ],
    '♣️': [
        'Klub-Anzug',
        'Vereine',
        'Schwarzclub-Anzug'
    ],
    '🏧': [
        'Geldautomaten-Schild',
        'Geldautomat',
        'Automatisierte Telleer Maschine'
    ],
    '🎵': [
        'Musiknotiz',
        'Belichtetes Paar achter Notizen',
        'Belichtetes Paar Quaver',
        'Musiknotiz'
    ],
    '🎶': [
        'Musiknotizen',
        'Musik',
        'Musiknotizen',
        'Singen',
        'Mehrere Musiknotizen'
    ],
    '🔔': [
        'Glocke',
        'Freiheitsglocke',
        'Ringer',
        'Hochzeitsglocke'
    ],
    '🔕': [
        'Glocke mit Hieb',
        'Benachrichtigungen',
        'Klingelton deaktiviert',
        'Stumme Glocke',
        'Glocke mit Abbruch Strich'
    ],
    '🔈': [
        'Lautsprecher niedriger Lautstärke',
        'Lautstärke',
        'Sprecher'
    ],
    '🔉': [
        'Lautsprecher Mittlere Lautstärke',
        'Lautstärke reduzieren',
        'Lautsprecher mit mittlerer Lautstärke',
        'Lautsprecher mit einer Klangwelle'
    ],
    '🔊': [
        'Lautsprecher Hohe Lautstärke',
        'Lautstärke erhöhen',
        'Lautsprecher mit drei Schallwellen'
    ],
    '🔇': [
        'Lautsprecher stumm',
        'Lautstärke stumm',
        'Lautsprecher mit Abbruch Strich'
    ],
    '⛔': ['Kein Eintrag'],
    '🚫': [
        'Verboten',
        'Gesperrt',
        'Kreis-Backslash',
        'Nein',
        'Roter Kreis überschritten',
        'Eingeschränkt',
        'Kein Eintragszeichen'
    ],
    '🚳': [
        'Keine Fahrräder',
        'Kein Fahrradschild'
    ],
    '🚭': [
        'Kein Rauchen',
        'Kein Rauchen Symbol'
    ],
    '🚯': [
        'Kein Abfall',
        'Nicht ohne Wurfsymbol'
    ],
    '🚱': [
        'Nicht Trinkwasser',
        'Kein Wasser',
        'Kein Trinkwasser',
        'Nicht-Trinkwasser-Symbol'
    ],
    '🚷': [
        'Keine Fußgänger',
        'Keine Personen',
        'Kein Wandern'
    ],
    '🔞': [
        'Niemand unter achtzehn',
        'NSFW',
        'Niemand unter achtzehn Symbol',
        '18'
    ],
    '📵': [
        'Keine Mobiltelefone',
        'Keine Handys',
        'Keine Telefone',
        'Kein Smartphone'
    ],
    '☢️': [
        'Radioactive',
        'Internationales Strahlungssymbol',
        'Nukleare',
        'Radioaktives Schild'
    ],
    '☣️': [
        'Biohazard',
        'Biohazard Schild'
    ],
    '⬆️': [
        'Pfeil oben',
        'Pfeil nach oben',
        'Aufwärts schwarzer Pfeil'
    ],
    '↗️': [
        'Pfeil oben rechts',
        'Diagonaler Pfeil oben rechts',
        'Nordost-Pfeil'
    ],
    '➡️': [
        'Pfeil rechts',
        'Pfeil nach rechts',
        'Schwarzer Pfeil rechts'
    ],
    '↘️': [
        'Pfeil runter-rechts',
        'Diagonaler Pfeil runter/rechts',
        'Südostpfeil'
    ],
    '⬇️': [
        'Pfeil runter',
        'Pfeil nach unten',
        'Abwärtsschwarzer Pfeil'
    ],
    '↙️': [
        'Pfeil runter-links',
        'Diagonaler Pfeil runter-links',
        'Südwestpfeil'
    ],
    '⬅️': [
        'Pfeil links',
        'Pfeil nach links',
        'Linker schwarzer Pfeil'
    ],
    '↖️': [
        'Oben links Pfeil',
        'Diagonaler Pfeil oben links',
        'Nordwestpfeil'
    ],
    '↕️': [
        'Oberer Pfeil',
        'Vertikale Pfeile',
        'Pfeil nach oben'
    ],
    '↔️': [
        'Pfeil links rechts',
        'Horizontale Pfeile',
        'Seitliche Pfeile',
        'Rechter Pfeil links'
    ],
    '↩️': [
        'Linke Pfeilkurve nach rechts',
        'E-Mail Antwort',
        'Linker gebogener Pfeil',
        'Pfeil links mit Hook'
    ],
    '↪️': [
        'Linkspfeil Kurven-Rechts',
        'E-Mail-Weiterleitung',
        'Rechter gebogener Pfeil',
        'Rechter Pfeil mit Hook'
    ],
    '⤴️': [
        'Rechter Pfeil nach oben',
        'Pfeil zeigt nach rechts und Kurven nach oben'
    ],
    '⤵️': [
        'Rechter Pfeil Kurve runter',
        'Gebogener Pfeil nach unten',
        'Pfeil zeigt nach rechts und Kurven nach unten'
    ],
    '🔃': [
        'Vertikale Pfeile im Uhrzeigersinn',
        'Im Uhrzeigersinn abwärts und höher öffnen Kreispfeile'
    ],
    '🔄': [
        'Pfeiltaste gegen den Uhrzeigersinn',
        'Aktualisieren',
        'Drehen',
        'Wechseln',
        'Gegen Uhrzeigersinn Pfeile',
        'Abwärts- und aufwärtsgerichtete Kreispfeile nach oben nach oben'
    ],
    '🔙': [
        'Pfeil hinten',
        'Zurück',
        'Zurück mit Links-Pfeil oben'
    ],
    '🔚': [
        'Endpfeil',
        'Ende',
        'Ende mit Links-Pfeil oben'
    ],
    '🔛': [
        'An! Pfeil',
        'An',
        'Weiter mit Aufrufezeichen mit linker rechter Pfeil oben'
    ],
    '🔜': [
        'Bald Pfeil',
        'Bald',
        'Bald mit dem rechten Pfeil oben'
    ],
    '🔝': [
        'Oberer Pfeil',
        'Oben',
        'Oben mit Aufwärtspfeil oben'
    ],
    '🛐': [
        'Andachtsort',
        'Religiöses Gebäude'
    ],
    '⚛️': ['Atom-Symbol'],
    '🕉️': [
        'Om Symbol',
        'Om',
        'Aumkara',
        'Omkara',
        'Pranava'
    ],
    '✡️': [
        'Stern von David',
        'Magen David'
    ],
    '☸️': [
        'Dharma-Rad',
        'Helm'
    ],
    '☯️': ['Yin Yang'],
    '✝️': [
        'Lateinisches Kreuz',
        'Christliches Kreuz'
    ],
    '☦️': ['Orthodoxes Kreuz'],
    '☪️': ['Stern und Halbmond'],
    '☮️': [
        'Friedenssymbol',
        'Friedensschild'
    ],
    '🕎': [
        'Menora',
        'Candelabrum',
        'Kerzen',
        'Chanukiah',
        'Menora',
        'Menorah mit neun Zweigen'
    ],
    '🔯': [
        'Gepunkteter sechspunkteter Stern',
        'Sechs Punkte mit mittlerem Punkt'
    ],
    '♈': [
        'Trauben',
        'Sternzeichen'
    ],
    '♉': [
        'Taurus',
        'Sternzeichen'
    ],
    '♊': [
        'Gemini',
        'Sternzeichen'
    ],
    '♋': [
        'Krebs',
        'Sternzeichen'
    ],
    '♌': [
        'Leo',
        'Sternzeichen'
    ],
    '♍': [
        'Jungfrau',
        'Sternzeichen'
    ],
    '♎': [
        'Bibliotheken',
        'Sternzeichen'
    ],
    '♏': [
        'Skorpion',
        'Skorpion',
        'Sternzeichen'
    ],
    '♐': [
        'Sagittarius',
        'Sternzeichen'
    ],
    '♑': [
        'Capricorn',
        'Sternzeichen'
    ],
    '♒': [
        'Aquarius',
        'Sternzeichen'
    ],
    '♓': [
        'Pisces',
        'Sternzeichen'
    ],
    '⛎': [
        'Ophiuchus',
        'Sternzeichen'
    ],
    '⏭️': [
        'Schwarzes Rechts-Punkt Doppeltes Dreieck mit vertikaler Leiste',
        'Symbol vorwärts springen',
        'Nächster Track Button'
    ],
    '⏮️': [
        'Schwarzes linkes Dreieck mit vertikaler Leiste',
        'Rückwärtssymbol überspringen',
        'Letzter Track Button',
        'Vorheriger Track'
    ],
    '⏯️': [
        'Schwarzes rechtes Dreieck mit doppelter vertikaler Leiste',
        'Wiedergabe oder Pause Button',
        'Spielsymbol',
        'Symbol pausieren'
    ],
    '🔀': [
        'Track-Button mischen',
        'Pfeil nach rechts verdreht'
    ],
    '🔁': [
        'Wiederholen Taste',
        'Schleifensymbol',
        'Retweet',
        'Im Uhrzeigersinn rechts und links öffnen Kreispfeile'
    ],
    '🔂': [
        'Einzelne Taste wiederholen',
        'Kreispfeile mit Nummer 1',
        'Loop Einmal Symbol',
        'Einzelnes Spursymbol wiederholen',
        'Im Uhrzeigersinn rechts und links öffnen Kreispfeile mit einem umkreisten Ein-Overlay'
    ],
    '▶️': [
        'Play-Button',
        'Rechtes Dreieck',
        'Dreieck mit rechter Markierung',
        'Schwarzes Rechtes Dreieck'
    ],
    '◀️': [
        'Reverse Taste',
        'Linkes Dreieck',
        'Linkes Dreieck',
        'Schwarzes linkes Dreieck'
    ],
    '🔼': [
        'Aufwärtstaste',
        'Dreieck hoch',
        'Dreieck oben',
        'Aufsteigend kleines Rotes Dreieck'
    ],
    '🔽': [
        'Abwärts-Button',
        'Unten Dreieck',
        'Dreieck nach unten',
        'Kleines Rotes Dreieck nach unten'
    ],
    '⏩': [
        'Schnell-Weiterleiten-Schaltfläche',
        'Schnelle Weiterleitung',
        'Schnelles Vorwärtssymbol',
        'Schwarzes Rechts-Punkte-Doppeldreieck'
    ],
    '⏪': [
        'Fast Reverse Button',
        'Rewind',
        'Symbol wiederherstellen',
        'Schwarzes linkes Dreieck'
    ],
    '⏫': [
        'Schnell-Up-Button',
        'Doppeltes Dreieck oben',
        'Schwarzes Auf-Punkte-Doppeldreieck'
    ],
    '⏬': [
        'Schnell unten Button',
        'Doppeltes Dreieck nach unten',
        'Schwarzes Down-Punkte-Doppeldreieck'
    ],
    '⏹️': [
        'Stop-Taste',
        'Stoppen',
        'Symbol stoppen',
        'Schwarzes Quadrat für Stopp'
    ],
    '⏏️': [
        'Knopf auswerfen',
        'Eject Symbol'
    ],
    '🎦': [
        'Kino',
        'Kinobildschirm',
        'Filme',
        'Film',
        'Kinosymbol',
        'Aufnahme'
    ],
    '📶': [
        'Antennenstangen',
        'Empfangbalken',
        'Signalstärke',
        'Stairs',
        'Signalstärke Symbol',
        'Antenne mit Balken'
    ],
    '✖️': [
        'Multiplizieren',
        'Multiplikationssymbol',
        'Schwere Vervielfältigung X'
    ],
    '➕': [
        'Plus',
        'Plus-Symbol',
        'Schweres Plus-Schild'
    ],
    '➖': [
        'Minus',
        'Minus Symbol',
        'Schweres Minus-Schild'
    ],
    '➗': [
        'Aufteilen',
        'Teilungssymbol',
        'Schwere Division Schild'
    ],
    '♾️': [
        'Unendlichkeit',
        'Dauerhaftes Papierschild'
    ],
    '‼️': [
        'Doppeltes Aufrufezeichen',
        'Rotes Doppelausrustungszeichen'
    ],
    '⁉️': [
        'Fragezeichen für Spannung',
        'Rote Aufruhrmarke und Fragezeichen'
    ],
    '❓': [
        'Fragezeichen',
        'Rote Fragezeichen',
        'Schwarzes Fragezeichen Ornament'
    ],
    '❔': [
        'Weiße Fragezeichen',
        'Weiße Fragezeichen',
        'Weißes Fragezeichen Ornament'
    ],
    '❗': [
        'Aufrufezeichen',
        'Rotes Aufruhrzeichen',
        'Schweres Aufruhrzeichensymbol'
    ],
    '❕': [
        'Weiße Ausrufezeichen',
        'Weiße Ausrufezeichen Ornament'
    ],
    '⭕': [
        'Hohler Roter Kreis',
        'Kreis',
        'Richtig',
        'Roter Kreis',
        'Kreiszeichen',
        'Schwerer großer Kreis'
    ],
    '☑️': [
        'Kontrollkästchen mit Check',
        'V',
        'Checkbox',
        'Check-in-Box prüfen',
        'Stimmzettel mit Überprüfung'
    ],
    '✔️': [
        'Prüfzeichen',
        'V',
        'Prüfen',
        'Ticken',
        'Checkmark',
        'Schwere Prüfzeichen'
    ],
    '❌': [
        'Kreuzzeichen',
        'Kreuz',
        'X'
    ],
    '✅': [
        'Markierungsschaltfläche prüfen',
        'V',
        'Grünes Prüfzeichen',
        'Grüner Tick',
        'Prüfzeichen',
        'Weißes Schwere Prüfzeichen'
    ],
    '❎': [
        'Cross-Marker Button',
        'Kreuz',
        'X',
        'X-Zeichen',
        'Negatives Quadrat Kreuzzeichen'
    ],
    '#️⃣': [
        'Tastenkürzel Schild',
        '#',
        'Hash-Schlüssel',
        'Hashtag',
        'Oktothorpe',
        'Pfund Schlüssel',
        'Nummernschild'
    ],
    '*️⃣': [
        'Keycap Asterisk',
        'Stern-Tastenkappe'
    ],
    '0️⃣': [
        'Nummer 0',
        'Keycap Digit Zero'
    ],
    '1️⃣': [
        'Nummer 1',
        'Keycap Ziffern eins'
    ],
    '2️⃣': [
        'Nummer 2',
        'Zwei Keycap Ziffern'
    ],
    '3️⃣': [
        'Nummer 3',
        'Tastenkürzel Drei'
    ],
    '4️⃣': [
        'Nummer 4',
        'Tastenkürzel Vier'
    ],
    '5️⃣': [
        'Nummer 5',
        'Keycap fünf Ziffern'
    ],
    '6️⃣': [
        'Nummer 6',
        'Keycap Sechs Ziffern'
    ],
    '7️⃣': [
        'Nummer 7',
        'Keycap Digit Seven'
    ],
    '8️⃣': [
        'Nummer 8',
        'Tastenkürzel Acht'
    ],
    '9️⃣': [
        'Nummer 09',
        'Tastenkürzel Neun'
    ],
    '🔟': [
        'Nummer 10',
        'Keycap: 10',
        '10',
        'Zehn Keycap Ziffern'
    ],
    '🔠': [
        'Input Latin Uppercase',
        'ABCD',
        'Großbuchstaben',
        'Symbol für Großbuchstaben eingeben',
        'Symbol für lateinische Großbuchstaben eingeben'
    ],
    '🔡': [
        'Input Latin Lowercase',
        'abcd',
        'Kleinbuchstaben',
        'Eingabesymbol für Kleinbuchstaben',
        'Eingabesymbol für kleine lateinische Buchstaben'
    ],
    '🔢': [
        'Input Numbers',
        '1234',
        'Nummern',
        'Numeric Input',
        'Eingabesymbol für Zahlen'
    ],
    '🔣': [
        'Symbol für Symbole eingeben',
        'Symbole',
        'Symboleingabe'
    ],
    '🔤': [
        'Input Latin Letters',
        'abc',
        'Alphabet',
        'Briefe',
        'Eingabesymbol für Buchstaben',
        'Symbol für lateinische Buchstaben eingeben'
    ],
    '🅰️': [
        'Eine Taste (Blood Typ)',
        'Bluttyp A',
        'Buchstabe A',
        'Negativer Quadrat lateinischer Kapitalbuchstabe A'
    ],
    '🆎': [
        'AB Button (Blood Typ)',
        'Buchstaben AB',
        'Blut-Typ AB',
        'Negative Quadrate AB'
    ],
    '🅱️': [
        'B-Taste (Blood Typ)',
        'Buchstabe B',
        'Bluttyp B',
        'Negativer Quadrierter lateinischer Kapitalbuchstabe B'
    ],
    '🆑': [
        'CL Taste',
        'Leeren',
        'Lösche Taste',
        'CL-Zeichen',
        'Quadriertes CL',
        'Buchstaben CL'
    ],
    '🆒': [
        'Cool-Button',
        'Kühler Platz',
        'Kühles Schild',
        'Quadrierte Cool'
    ],
    '🆓': [
        'Freier Button',
        'Kostenlos',
        'Kostenloses Schild',
        'Quadrat frei'
    ],
    'ℹ️': [
        'Informationen',
        'Info',
        'Kleinbuchstaben I',
        'Touristische Informationen',
        'Informationsquelle'
    ],
    '🆔': [
        'ID-Taste',
        'ID',
        'Identifikation',
        'Identifikationszeichen',
        'Quadratierte ID'
    ],
    '🆕': [
        'Neuer Button',
        'Neu',
        'Neues Schild',
        'Quadratiert neu'
    ],
    '🅾️': [
        'O Taste (Blood Typ)',
        'Bluttyp O',
        '0',
        'Negativer Quadrierter lateinischer Kapitalbuchstaben',
        'Buchstabe O'
    ],
    '🆗': [
        'OK-Taste',
        'OK',
        'Okay',
        'Quadrat',
        'OK-Signal',
        'Quadrat OK'
    ],
    '🅿️': [
        'P-Taste',
        'Parkschild',
        'Negativer Quadrierter lateinischer Kapitalbuchstaben',
        'Buchstabe P'
    ],
    '🆘': [
        'SOS-Taste',
        'Notsignal',
        'Notfall',
        'SOS',
        'SOS-Signatur',
        'Quadratierte SOS',
        'Hilfe'
    ],
    '🆙': [
        'Up! Button',
        'Level höher',
        'Hoch',
        'Anmelden',
        'Quadratiert nach oben mit Aufrufezeichen'
    ],
    '🆚': [
        'Vs Button',
        'Quadrierte Vs'
    ],
    '🆖': [
        'NG Taste',
        'Quadrierte NG',
        'Kein gutes Zeichen',
        'Nicht gut',
        'NG',
        'Blooper'
    ],
    '🔴': [
        'Roter Kreis',
        'Großer Roter Kreis'
    ],
    '🟠': [
        'Oranger Kreis',
        'Großer Orangener Kreis'
    ],
    '🟡': [
        'Gelber Kreis',
        'Großer Gelber Kreis'
    ],
    '🟢': [
        'Grüner Kreis',
        'Großer Grüner Kreis'
    ],
    '🔵': [
        'Blauer Kreis',
        'Großer blauer Kreis'
    ],
    '🟣': [
        'Violette Kreis',
        'Großer lila Kreis'
    ],
    '🟤': [
        'Brauner Kreis',
        'Großer brauner Kreis'
    ],
    '⚫': [
        'Schwarzer Kreis',
        'Mittlerer Schwarzer Kreis'
    ],
    '⚪': [
        'Weißer Kreis',
        'Mittlerer weißer Kreis'
    ],
    '🟥': [
        'Roter Platz',
        'Großes Rotes Quadrat'
    ],
    '🟧': [
        'Oranges Quadrat',
        'Großes Oranges Quadrat'
    ],
    '🟨': [
        'Gelbes Quadrat',
        'Großes Gelbes Quadrat'
    ],
    '🟩': [
        'Grüner Platz',
        'Großes Grünes Quadrat'
    ],
    '🟦': [
        'Blaues Quadrat',
        'Großes blaues Quadrat'
    ],
    '🟪': [
        'Violettes Quadrat',
        'Großes lila Quadrat'
    ],
    '🟫': [
        'Brauner Platz',
        'Großer brauner Platz'
    ],
    '⬛': ['Schwarzes großes Quadrat'],
    '⬜': ['Weißer großer Platz'],
    '◼️': ['Schwarzes mittleres Quadrat'],
    '◻️': ['Weißer Mittlerer Platz'],
    '◾': ['Schwarzes mittleres Quadrat'],
    '◽': ['Weißer mittlerer kleiner Platz'],
    '▪️': ['Schwarzes Kleines Quadrat'],
    '▫️': ['Weißer kleiner Platz'],
    '💠': [
        'Diamantform mit einem Punkt im Inneren',
        'Schnitt',
        'Diamantblume',
        'Kawaii'
    ],
    '🔶': ['Große Orange Diamant'],
    '🔷': ['Großer Blauer Diamant'],
    '🔸': ['Kleiner Oranger Diamant'],
    '🔹': ['Kleiner blauer Diamant'],
    '🔺': [
        'Rotes Dreieck nach oben aufgezeigt',
        'Rotes Dreieck oben'
    ],
    '🔻': [
        'Rotes Dreieck nach unten',
        'Rotes Dreieck nach unten'
    ],
    '🔳': ['Weißes Quadrat Button'],
    '🔲': ['Schwarzes Quadrat Button'],
    '©️': [
        'Copyright',
        'Copyright-Zeichen'
    ],
    '®️': [
        'Registriert',
        'Registriertes Schild'
    ],
    '™️': [
        'Warenzeichen',
        'TM',
        'Warenzeichen',
        'Warenzeichenzeichen'
    ],
    '🛅': [
        'Linkes Gepäck',
        'Beutel mit Schlüssel',
        'Gesperrter Koffer'
    ],
    '🛄': ['Gepäckforderung'],
    '🛃': ['Zoll'],
    '🛂': [
        'Passkontrolle',
        'Rahmenkontrolle'
    ],
    '🚰': [
        'Trinkwassersymbol',
        'Durst',
        'Durstig',
        'Wasserhahn',
        'Wasserhahn'
    ],
    '🇦': [
        'Buchstabe A',
        'Regionaler Indikator Symbol Buchstabe A'
    ],
    '🇧': [
        'Buchstabe B',
        'Regionaler Indikator Symbol Buchstabe B'
    ],
    '🇨': [
        'Buchstabe C',
        'Regionaler Indikator Symbol Buchstabe C'
    ],
    '🇩': [
        'Buchstabe D',
        'Regionaler Indikator Symbol Buchstabe D'
    ],
    '🇪': [
        'Buchstabe E',
        'Regionaler Indikator Symbol Buchstabe E'
    ],
    '🇫': [
        'Buchstabe F',
        'Regionaler Indikator Symbol Buchstabe F'
    ],
    '🇬': [
        'Buchstabe G',
        'Regionaler Indikator Symbol Buchstabe G'
    ],
    '🇭': [
        'Buchstabe H',
        'Regionaler Indikator Symbol Buchstabe H'
    ],
    '🇮': [
        'Brief I',
        'Regionaler Indikator Symbol Buchstabe I'
    ],
    '🇯': [
        'Buchstabe J',
        'Regionaler Indikator Symbol Buchstabe J'
    ],
    '🇰': [
        'Buchstabe K',
        'Regionaler Indikator Symbol Buchstabe K'
    ],
    '🇱': [
        'Buchstabe L',
        'Regionaler Indikator Symbol Buchstabe L'
    ],
    '🇲': [
        'Buchstabe M',
        'Regionaler Indikator Symbol Buchstabe M'
    ],
    '🇳': [
        'Buchstabe N',
        'Regionaler Indikator Symbol Buchstabe N'
    ],
    '🇴': [
        'Buchstabe O',
        'Regionaler Indikator Symbol Buchstabe O'
    ],
    '🇵': [
        'Buchstabe P',
        'Regionaler Indikator Symbol Buchstabe P'
    ],
    '🇶': [
        'Buchstabe Q',
        'Regionaler Indikator Symbol Buchstabe Q'
    ],
    '🇷': [
        'Buchstabe R',
        'Regionaler Indikator Symbol Buchstabe R'
    ],
    '🇸': [
        'Buchstabe S',
        'Regionaler Indikator Symbol Buchstabe S'
    ],
    '🇹': [
        'Buchstabe T',
        'Regionaler Indikator Symbol Buchstabe T'
    ],
    '🇺': [
        'Buchstabe U',
        'Regionaler Indikator Symbol Buchstabe U'
    ],
    '🇻': [
        'Buchstabe V',
        'Regionaler Indikator Symbol Buchstabe V'
    ],
    '🇼': [
        'Buchstabe W',
        'Regionaler Indikator Symbol Buchstabe W'
    ],
    '🇽': [
        'Buchstabe X',
        'Regionaler Indikator Symbol Buchstabe X'
    ],
    '🇾': [
        'Brief Y',
        'Regionaler Indikator Symbol Buchstabe Y'
    ],
    '🇿': [
        'Buchstabe Z',
        'Regionaler Indikator Symbol Buchstabe Z'
    ],
    '💌': [
        'Liebesbrief',
        'Herzumschlag',
        'Flirtnachricht'
    ],
    '🚮': [
        'Wurf in sein Platz-Symbol setzen',
        'Wurf im Bin Schild',
        'Wurf in den Papierkorb legen',
        'Person mit Papierkorb'
    ],
    '♿': [
        'Rollstuhlsymbol',
        'Barrierefreies Badezimmer'
    ],
    '🚹': [
        'Männer-Symbol',
        'Männersymbol',
        'Männer-Toilette',
        'Männlicher Ruheraum',
        'Männliche WC'
    ],
    '🚺': [
        'Frauensymbol',
        'Damen Symbol',
        'Damen-Toilette',
        'Weibliche Restraum',
        'Famale WC'
    ],
    '🚻': [
        'Ruheraum',
        'Badezimmerschild',
        'Toilettenschild',
        'WC Schild'
    ],
    '🚼': [
        'Baby-Symbol',
        'Baby Change-Station',
        'Baby Änderungssymbol',
        'Krankenschwester'
    ],
    '🚾': [
        'Wasserschrank',
        'KW',
        'Toilette WC'
    ],
    '⚠️': [
        'Warnzeichen',
        'Alarmsymbol'
    ],
    '🚸': [
        'Kinder überqueren',
        'Kinder überqueren',
        'Schulübergang'
    ],
    '🔅': [
        'Symbol für niedrige Helligkeit',
        'Dimmen-Taste',
        'Helligkeit verringern'
    ],
    '🔆': [
        'Symbol für hohe Helligkeit',
        'Helligkeit erhöhen',
        'Heller Button'
    ],
    '📳': [
        'Vibrationsmodus',
        'Telefon-Herz',
        'Lautlos-Modus'
    ],
    '📴': ['Handy aus'],
    '〰️': [
        'Welle',
        'Wellenschlag'
    ],
    '💱': ['Währungstausch'],
    '💲': [
        'Schwere Dollar-Schild',
        'Dollar',
        'Dollar-Schild'
    ],
    '♻️': [
        'Schwarzes universelles Recyclingsymbol',
        'Recycling-Symbol',
        'Papierkorblogo'
    ],
    '🔱': [
        'Dreizack Emblem',
        'Pitchfork',
        'Dreizack'
    ],
    '📛': [
        'Namensschild',
        'Tofu in Feuer',
        'Name Tag',
        'Feuertag'
    ],
    '🔰': [
        'Japanisches Symbol für Anfänger',
        'Shoshinsha Zeichen',
        'Gelbes grünes Schild'
    ],
    '➰': [
        'Kurve Schleife',
        'Curling-Schleife',
        'Schleife'
    ],
    '➿': [
        'Doppelte geschweifte Schleife',
        'Doppelte Curling-Schleife',
        'Voicemail'
    ],
    '〽️': [
        'Artikelwechselzeichen',
        'M',
        'McDonalds'
    ],
    '✳️': ['Acht Gespielte Asterisk'],
    '✴️': [
        'Acht schwarzer Stern',
        'Orange Stern',
        'Acht markierter Stern'
    ],
    '❇️': ['Sparkle'],
    'Ⓜ️': [
        'Umgesiedelter lateinischer Kapitalbuchstabe M',
        'Gekreist M',
        'Metro',
        'Gekreist M'
    ],
    '🈁': [
        'Squared Katakana Koko',
        'Japanisches Wortschild bedeutet hier',
        'Hier',
        'Ziel'
    ],
    '🈂️': [
        'Squared Katakana Sa',
        'Japanisch Signifikant Service oder Service Charge'
    ],
    '🈷️': [
        'Quadratischer CJK Einheitlicher Ideograph 6708',
        'Radikal 74',
        '月',
        'Japanisch Signifikant monatlicher Betrag'
    ],
    '🈶': [
        'Quadratischer CJK Einheitlicher Ideograph 6709',
        'Japanische Signatur bedeutet nicht kostenlos',
        'Eigene',
        '有'
    ],
    '🈯': [
        'Quadrierter CJK Einheitlicher Ideograph 6307',
        'Japanische Signalbedeutung reserviert',
        'Finger Punkt',
        '指'
    ],
    '🉐': [
        'Gekreuzter Ideograph Vorteil',
        'Japanisch Signifikant Schnäppchen',
        'Anfordern',
        '得'
    ],
    '🈹': [
        'Quadrierter CJK Einheitlicher Ideograph 5272',
        'Japanisch Signifikantenrabatt',
        'Schnäppchenverkauf',
        '割'
    ],
    '🈚': [
        'Quadratierter CJK Einheitlicher Ideograph 7121',
        'Japanisches Signieren bedeutet kostenlos',
        'Fehlend',
        '無'
    ],
    '🈲': [
        'Quadratierter CJK Einheitlicher Ideograph 7981',
        'Japanische Signalbedeutung verboten',
        'Forbid',
        '禁'
    ],
    '🉑': [
        'Gekreuzter Ideograph akzeptieren',
        'Japanische Signalbedeutung akzeptabel',
        'Akzeptieren'
    ],
    '🈸': [
        'Quadratischer CJK Einheitlicher Ideographen - 7533',
        'Japanische Signalbedeutungsanwendung',
        'Bewerbungsformular',
        'Affen',
        'Anfrage',
        '申'
    ],
    '🈴': [
        'Quadrierter CJK Einheitlicher Ideograph 5408',
        'Japanische Signalbedeutung Passing (Grade)',
        'Vereinbarung',
        '合'
    ],
    '🈳': [
        'Quadrierter CJK Einheitlicher Ideograph 7a7a',
        'Japanische Signatur Bedeutungsfertigkeit',
        'Leer und verfügbar',
        '空'
    ],
    '㊗️': [
        'Kreise Ideograph Glückwunsch',
        'Japanisch signierte Bedeutung Herzlichen Glückwunsch'
    ],
    '㊙️': [
        'Gekreistes Ideographie-Geheimnis',
        'Japanisches Signalgeheimnis',
        'Geheimnis'
    ],
    '🈺': [
        'Quadrierter CJK Einheitlicher Ideograph - 55b6',
        'Japanische Signalsignale für Unternehmen öffnen',
        'Arbeit',
        '営'
    ],
    '🈵': [
        'Quadrierter CJK Einheitlicher Ideograph 6e80',
        'Japanisches Signalsignal; Kein freier Raum',
        'Voll',
        '満'
    ],
    '🔘': ['Radio-Button'],
    '🛑': [
        'Stoppschild',
        'Achteckiges Zeichen'
    ],
    '⚕️': [
        'Medizinisches Symbol',
        'Aesculapius',
        'Asklepios',
        'Asklepiusstab',
        'Mitarbeiter von Aesculapius'
    ],
    '🛗': [
        'Lift',
        'Aufzug'
    ],
    '⚧️': ['Transgender Symbol'],
    '♂️': [
        'Männliches Schild',
        'Mensch-Symbol',
        'Mars Symbol'
    ],
    '♀️': [
        'Weibliches Schild',
        'Frauensymbol',
        'Venus Symbol'
    ]
};
/*food and drinks*/
emojis_language[lang][6] = {
    '🍇': [
        'Trauben',
        'Trauben'
    ],
    '🍈': [
        'Melone',
        'Cantaloupe',
        'Honigtaun',
        'Muskmelone'
    ],
    '🍉': ['Wassermelone'],
    '🍊': [
        'Tangerine',
        'Mandarin',
        'Orange'
    ],
    '🍋': [
        'Lemon',
        'Limonade'
    ],
    '🍌': [
        'Bananen',
        'Plantagen'
    ],
    '🍍': ['Ananas'],
    '🥭': ['Mango'],
    '🍎': [
        'Roter Apfel',
        'Roter köstlicher Apfel'
    ],
    '🍏': [
        'Grüner Apfel',
        'Goldener leckerer Apfel',
        'Granny Smith Apfel'
    ],
    '🍐': ['Birne'],
    '🍑': [
        'Pfirsich',
        'Unten',
        'Apfel'
    ],
    '🍒': [
        'Kirschen',
        'Kirsche',
        'Wilde Kirsche'
    ],
    '🍓': ['Erdbeere'],
    '🥝': [
        'Kiwi-Obst',
        'Chinesische Goosebeere',
        'Kiwi',
        'Kiwifruit'
    ],
    '🍅': ['Tomate'],
    '🥥': [
        'Kokosnuss',
        'Cocoanut'
    ],
    '🥑': ['Avocado'],
    '🍆': [
        'Eipflanze',
        'Aubergine',
        'Phallisch',
        'Violettes Gemüse'
    ],
    '🥔': [
        'Kartoffel',
        'Gebackene Kartoffel',
        'Idaho Kartoffel'
    ],
    '🥕': ['Zuckerbrot'],
    '🌽': [
        'Ohr des Mais',
        'Mais',
        'Mais auf dem Kob',
        'Mais',
        'Ohr des Mais'
    ],
    '🌶️': [
        'Heißer Pfeffer',
        'Chili Pepper',
        'Gewürzig'
    ],
    '🥒': [
        'Gurke',
        'Gherkin',
        'Auswählen'
    ],
    '🥬': [
        'Laubgrün',
        'Bok Choy',
        'Chinesischer Kohl',
        'Cos Lettuce',
        'Romaine Salz',
        'Laubige Grüne'
    ],
    '🥦': ['Brokkoli'],
    '🍄': [
        'Pilz',
        'Schinken',
        'Toadstool'
    ],
    '🥜': [
        'Peanuts',
        'Nüsse'
    ],
    '🌰': [
        'Kastanie',
        'Acorn',
        'Nuss'
    ],
    '🍞': [
        'Brot',
        'Brotlau'
    ],
    '🥐': ['Croissant'],
    '🥖': [
        'Baguettebrot',
        'Französisches Brot',
        'Baguette'
    ],
    '🥨': ['Pretzel'],
    '🥯': ['Bagel'],
    '🥞': [
        'Pfannkuchen',
        'Cre<unk> pes',
        'Hotcakes'
    ],
    '🧀': [
        'Käse Keil',
        'Käse'
    ],
    '🍖': [
        'Fleisch auf Knochen',
        'BBQ',
        'Grill',
        'Manga-Fleisch'
    ],
    '🍗': [
        'Poultry Leg',
        'Trommelstich',
        'Türkei Bein'
    ],
    '🥩': [
        'Fleischschnitt',
        'Fleisch',
        'Steak'
    ],
    '🥓': [
        'Bacon',
        'Rashers'
    ],
    '🍔': [
        'Hamburger',
        'Burger',
        'Cheeseburger'
    ],
    '🍟': [
        'Französische Pommes',
        'Chips',
        'Pommes',
        'McDonalds Pommes'
    ],
    '🍕': [
        'Pizza',
        'Pepperoni Pizza',
        'Stück Pizza'
    ],
    '🌭': [
        'Heißer Hund',
        'Hotdog',
        'Wurst'
    ],
    '🥪': ['Sandwich'],
    '🌮': ['Taco'],
    '🌯': [
        'Burrito',
        'Wrap'
    ],
    '🥙': [
        'Gefülltes Flatbread',
        'Doner Kebab',
        'Gyro',
        'Shawarma',
        'Pita Sandwich'
    ],
    '🍳': [
        'Kochen',
        'Frühstück',
        'Gebratenes Ei',
        'Bratpfanne'
    ],
    '🥘': [
        'Flachland der Nahrung',
        'Paella',
        'Nahrungspfanne'
    ],
    '🍲': [
        'Topf der Nahrung',
        'Schüssel des Essens',
        'Suppe',
        'Eintopf'
    ],
    '🥣': [
        'Schüssel mit Löffel',
        'Getreideschüssel'
    ],
    '🥗': [
        'Grüner Salat',
        'Salat'
    ],
    '🍿': [
        'Popcorn',
        'Popping-Mais'
    ],
    '🧂': [
        'Salz',
        'Salz Shaker'
    ],
    '🥫': [
        'Konservierte Lebensmittel',
        'Dose Nahrung',
        'Zinndose',
        'Gezähmte Nahrung'
    ],
    '🍱': [
        'Bento Box',
        'Lunchbox'
    ],
    '🍘': [
        'Reisknacker',
        'Cracker'
    ],
    '🍙': [
        'Reiskugel',
        'Onigiri'
    ],
    '🍚': [
        'Gekochter Reis',
        'Gekochte Reis',
        'Reis',
        'Kugel des Reis',
        'Dämpfter Reis'
    ],
    '🍛': [
        'Krustenreis',
        'Krug',
        'Indianisches Essen',
        'Curry und Reis'
    ],
    '🍜': [
        'Steaming Schüssel',
        'Nudeln',
        'Nudeln mit Chopsticks',
        'Ramen'
    ],
    '🍝': [
        'Spaghetti',
        'Pasta'
    ],
    '🍠': [
        'Geröstete Süßkartoffel',
        'Süße Kartoffel',
        'Jam'
    ],
    '🍢': [
        'Jörg',
        'Kebab',
        'Spießer'
    ],
    '🍣': [
        'Sushi',
        'Sashimi',
        'Meeresfrüchte'
    ],
    '🍤': [
        'Gebratener Garnelen',
        'Gebratener Prawn',
        'Shrimp-Temura'
    ],
    '🍥': [
        'Fisch Kuchen mit Swirl',
        'Fischkuchen',
        'Pink Swirl'
    ],
    '🥮': [
        'Mondkuchen',
        'Mondkuchen'
    ],
    '🍡': [
        'Dango',
        'Dessert Stich',
        'Rosa weiße grüne Kugeln'
    ],
    '🥟': [
        'Knödel',
        'Empanada',
        'Pierogi'
    ],
    '🥠': ['Glückskekse'],
    '🥡': [
        'Takeout Box',
        'Chinesische Nahrungsbox',
        'Oyster Pail'
    ],
    '🍦': [
        'Weiches Eis',
        'Herr Whippy',
        'Weiche Serve'
    ],
    '🍧': [
        'Gesäßtes Eis',
        'Schnee Klinge'
    ],
    '🍨': [
        'Eis',
        'Schüssel aus Eis',
        'Dessert'
    ],
    '🍩': [
        'Doughnut',
        'Donut'
    ],
    '🍪': [
        'Cookie',
        'Kekse',
        'Schokoladen-Chipkekse'
    ],
    '🎂': [
        'Geburtstagskuchen',
        'Geburtstag',
        'Kuchen',
        'Kuchen mit Kerzen'
    ],
    '🍰': [
        'Kurzkuchen',
        'Kuchen',
        'Stück Kuchen',
        'Erdbeeren-Kurzkuchen'
    ],
    '🧁': [
        'Cupcake',
        'Feenkuchen'
    ],
    '🥧': ['Pie'],
    '🍫': [
        'Schokoladenplatte',
        'Zuckerstange',
        'Schokolade'
    ],
    '🍬': [
        'Zuckerbrot',
        'Lilly',
        'Süß'
    ],
    '🍭': [
        'Lollipop',
        'Sauger'
    ],
    '🍮': [
        'Custard',
        'Creme Caramel',
        'Dessert',
        'Flan',
        'Pödding'
    ],
    '🍯': [
        'Honigtopf',
        'Honig',
        'Topf'
    ],
    '🍼': [
        'Baby-Flasche',
        'Flaschenfütterung'
    ],
    '🥛': [
        'Glas Milch',
        'Milch'
    ],
    '☕': [
        'Heißes Getränk',
        'Kaffee',
        'Espresso',
        'Heiße Schokolade',
        'Tee'
    ],
    '🍵': [
        'Teacup ohne Handle',
        'Grüner Tee',
        'Matcha',
        'Matcha-Grüner Tee'
    ],
    '🍶': [
        'Sake',
        'Flasche',
        'Reiswein',
        'Sake Flasche und Cup'
    ],
    '🍾': [
        'Flasche mit Popping Cork',
        'Feier',
        'Champagne',
        'Sekt Wein'
    ],
    '🍷': [
        'Weinglas',
        'Alkohol',
        'Roter Wein',
        'Wein'
    ],
    '🍸': [
        'Cocktailglas',
        'Cocktail',
        'Martini'
    ],
    '🍹': [
        'Tropischer Drink',
        'Fruchtschlag',
        'Tiki Trinken'
    ],
    '🍺': [
        'Bierteppich',
        'Bier',
        'Bier Stein'
    ],
    '🍻': [
        'Klinkende Bier-Mugs',
        'Bier',
        'Grüße'
    ],
    '🥂': [
        'Brille blinkt',
        'Feier',
        'Champagnerbrille',
        'Grüße'
    ],
    '🥃': [
        'Tumbler Glas',
        'Bourbon',
        'Liköre',
        'Rum',
        'Whisky',
        'Whisky'
    ],
    '🥤': [
        'Pokal mit Stroh',
        'Milchshake',
        'Smoothie',
        'Soda-Pop',
        'Weiches Trinken'
    ],
    '🥢': ['Chopsticks'],
    '🍽️': [
        'Gabeln und Messer mit Platte',
        'Abendessen'
    ],
    '🍴': [
        'Fork und Messer',
        'Besteck',
        'Messer und Fork',
        'Silberware'
    ],
    '🥄': ['Löffel'],
    '🧄': ['Knoblauch'],
    '🧅': ['Zwiebel'],
    '🧇': ['Waffle'],
    '🧆': ['Falafel'],
    '🧈': ['Butter'],
    '🦪': ['Oyster'],
    '🧃': [
        'Getränkebox',
        'Saftkiste'
    ],
    '🧉': [
        'Mate Drink',
        'Chimarra<unk> o',
        'Cimarrón',
        'Yerba-Matt'
    ],
    '🫒': ['Olivenöl'],
    '🫐': ['Heidelbeeren'],
    '🫑': ['Glockenpfeffer'],
    '🫓': ['Flatbread'],
    '🫔': [
        'Tamal',
        'Tamal'
    ],
    '🫕': ['Fondue'],
    '🧋': [
        'Bubble Tee',
        'Boba'
    ],
    '🧊': ['Eiswürfel']
};
/*flags*/
emojis_language[lang][7] = {
    '🏁': [
        'Chequered Flagge',
        'Geprüfte Flagge',
        'Gittermädchen',
        'Rennflagge'
    ],
    '🚩': [
        'Dreiecksflagge',
        'Markierung am Pole',
        'Rote Flagge',
        'Dreieckige Flagge im Beitrag'
    ],
    '🎌': [
        'Kreuzte Flaggen',
        'Zwei Flaggen'
    ],
    '🏴': [
        'Schwarze Flagge',
        'Wende schwarze Flagge'
    ],
    '🏳️': [
        'Weiße Flagge',
        'Weiße Flagge winken'
    ],
    '🏳️‍🌈': [
        'Rainbow Flag',
        'Pride Flag'
    ],
    '🏳️‍⚧️': [
        'Transgender Flag',
        'Blue, Pink, and White Flag',
        'Trans Flag'
    ],
    '🏴‍☠️': [
        'Pirate Flag',
        'Jolly Roger'
    ],
    '🇺🇳': [
        'Flagge der Vereinten Nationen',
        'UN',
        'Flagge: Vereinten Nationen'
    ],
    '🇪🇺': [
        'Flagge der Europäischen Union',
        'EU',
        'Flagge: Europäische Union',
        'EU Flag'
    ],
    '🇦🇨': [
        'Flagge der Aufstiegsinsel',
        'AC'
    ],
    '🇦🇩': [
        'Flagge von Andorra',
        'AD',
        'Andorran Flag'
    ],
    '🇦🇪': [
        'Flagge der Vereinigten Arabischen Emirate',
        'AE',
        'Emirati Flag',
        'VAE Flagge'
    ],
    '🇦🇫': [
        'Flagge Afghanistans',
        'AF',
        'Afghan Flag'
    ],
    '🇦🇬': [
        'Flagge von Antigua & Barbuda',
        'AG'
    ],
    '🇦🇮': [
        'Flagge von Anguilla',
        'AI',
        'Angillan Flagge'
    ],
    '🇦🇱': [
        'Flagge Albaniens',
        'AL',
        'Albanische Flagge'
    ],
    '🇦🇲': [
        'Flagge von Armenien',
        'MT',
        '🇦🇲'
    ],
    '🇦🇴': [
        'Flagge Angolas',
        'KO',
        'Angolanische Flagge'
    ],
    '🇦🇶': [
        'Flagge der Antarktis',
        'AQ',
        'Antarktisflagge'
    ],
    '🇦🇷': [
        'Flagge Argentiniens',
        'AR',
        'Argentinische Flagge'
    ],
    '🇦🇸': [
        'Flagge des amerikanischen Samoa',
        'SF',
        'American Samoan Flag'
    ],
    '🇦🇹': [
        'Österreichische Flagge',
        'AT',
        'Austrian Flag'
    ],
    '🇦🇺': [
        'Flagge von Australien',
        'TU',
        'Aussie Flagge',
        'Australische Flagge'
    ],
    '🇦🇼': [
        'Flagge von Aruba',
        'PW',
        'Aruban Flagge'
    ],
    '🇦🇽': [
        'Flagge der A<unk> land-Inseln',
        'AX',
        'A<unk> land Flagge'
    ],
    '🇦🇿': [
        'Flagge von Aserbaidschan',
        'AZ',
        'Aserbaidschan-Flagge'
    ],
    '🇧🇦': [
        'Flagge von Bosnien und Herzegowina',
        'BA'
    ],
    '🇧🇧': [
        'Flagge von Barbados',
        'BB',
        'Barbadische Flagge',
        'Bajanische Flagge'
    ],
    '🇧🇩': [
        'Flagge von Bangladesch',
        'BD',
        'Bangladeshi Flag'
    ],
    '🇧🇪': [
        'Flagge von Belgien',
        'MIT',
        'Belgische Flagge'
    ],
    '🇧🇫': [
        'Flagge von Burkina Faso',
        'HF',
        'Burkinabe Flagge'
    ],
    '🇧🇬': [
        'Flagge von Bulgarien',
        'MZ',
        'Bulgarische Flagge'
    ],
    '🇧🇭': [
        'Flagge von Bahrain',
        'BH',
        'Bahrani-Flagge',
        'Bahrain Flagge'
    ],
    '🇧🇮': [
        'Flagge von Burundi',
        'BI',
        'Burundian Flag'
    ],
    '🇧🇯': [
        'Flagge von Benin',
        'PJ',
        'Beninesische Flagge'
    ],
    '🇧🇱': [
        'Flagge von St. Barthe<unk> lemy',
        'BL',
        'Flagge: St. Barthe<unk> lemy'
    ],
    '🇧🇲': [
        'Flagge von Bermuda',
        'KM',
        'Bermudan Flag'
    ],
    '🇧🇳': [
        'Flagge von Brunei',
        'KN',
        'Bruneiische Flagge'
    ],
    '🇧🇴': [
        'Flagge von Bolivien',
        'BO',
        'Bolivian Flag'
    ],
    '🇧🇶': [
        'Flagge der karibischen Niederlande',
        'HT',
        'Bonaire'
    ],
    '🇧🇷': [
        'Flagge von Brasilien',
        'BR',
        'Brasilianische Flagge'
    ],
    '🇧🇸': [
        'Flagge der Bahamas',
        'Bahamas Flagge',
        'PN'
    ],
    '🇧🇹': [
        'Flagge von Bhutan',
        'MT',
        'Bhutanesische Flagge'
    ],
    '🇧🇻': [
        'Flagge der Bouvet-Insel',
        'HV',
        'Flagge: Bouvet-Insel'
    ],
    '🇧🇼': [
        'Flagge von Botswana',
        'BW',
        'Batswana Flag'
    ],
    '🇧🇾': [
        'Flagge von Belarus',
        'VON',
        'Belarussische Flagge'
    ],
    '🇧🇿': [
        'Flagge von Belize',
        'MZ',
        'Belizeanische Flagge'
    ],
    '🇨🇦': [
        'Flagge Kanadas',
        'Kanadische Flagge',
        'CA'
    ],
    '🇨🇨': [
        'Flagge von Cocos (Keeling) Inseln',
        'CC'
    ],
    '🇨🇩': [
        'Flag of Congo - Kinshasa',
        'CD'
    ],
    '🇨🇫': [
        'Flagge der Zentralafrikanischen Republik',
        'KN',
        'Zentralafrikanische Flagge'
    ],
    '🇨🇬': [
        'Flagge des Kongo - Brazzaville',
        'CG'
    ],
    '🇨🇭': [
        'Flagge der Schweiz',
        'CH',
        'Rotes Kreuz',
        'Schweizer Flagge'
    ],
    '🇨🇮': [
        'Flagge der Elfenbeinküste',
        'CI',
        'Flag: Côte d’Ivoire'
    ],
    '🇨🇰': [
        'Flagge von Cookinseln',
        'KR',
        'Koch-Islander-Flagge'
    ],
    '🇨🇱': [
        'Flagge von Chile',
        'KL',
        'Chilenische Flagge'
    ],
    '🇨🇲': [
        'Flagge von Kamerun',
        'CM',
        'Kamerunische Flagge'
    ],
    '🇨🇳': [
        'Flagge Chinas',
        'KN',
        'Chinesische Flagge'
    ],
    '🇨🇴': [
        'Flagge Kolumbiens',
        'KO',
        'Kolumbianische Flagge'
    ],
    '🇨🇵': [
        'Flagge der Clipperton-Insel',
        'MP',
        'Flagge: Clipperton-Insel'
    ],
    '🇨🇷': [
        'Flagge von Costa Rica',
        'KR',
        'Costa Rica Flagge'
    ],
    '🇨🇺': [
        'Flagge Kubas',
        'CU',
        'Kubanische Flagge'
    ],
    '🇨🇻': [
        'Flagge des Kap Verde',
        'CV',
        'Kap Verdian Flagge'
    ],
    '🇨🇼': [
        'Fahne von Curac<unk> ao',
        'CW',
        'Curaçaoan Flag'
    ],
    '🇨🇽': [
        'Flagge der Weihnachtsinsel',
        'CX',
        'Weihnachts-Inselflagge'
    ],
    '🇨🇾': [
        'Flagge Zyperns',
        'CY',
        'Zyprische Flagge'
    ],
    '🇨🇿': [
        'Tschechische Flagge',
        'CZ',
        'Tschechische Flagge'
    ],
    '🇩🇪': [
        'Flagge von Deutschland',
        'SF',
        'Deutsche Flagge',
        'Deutsche Flagge'
    ],
    '🇩🇬': [
        'Flagge von Diego Garcia',
        'DG',
        'Flagge: Diego Garcia'
    ],
    '🇩🇯': [
        'Flagge von Dschibuti',
        'DJ',
        'Djibouti Flag',
        'Djiboutian Flag'
    ],
    '🇩🇰': [
        'Dänemark Flagge',
        'DK',
        'Dänische Flagge'
    ],
    '🇩🇲': [
        'Flagge von Dominica',
        'TM'
    ],
    '🇩🇴': [
        'Flagge der Dominikanischen Republik',
        'DN',
        'Dom Rep Flagge',
        'Dominikanische Flagge'
    ],
    '🇩🇿': [
        'Flagge Algeriens',
        'DZ',
        'Algerian Flag'
    ],
    '🇪🇦': [
        'Flagge von Ceuta & Melilla',
        'Flagge von Melilla',
        'Flagge von Ceuta',
        'EA',
        'Flag: Ceuta & Melilla'
    ],
    '🇪🇨': [
        'Flagge von Ecuador',
        'EC',
        'Ecuadorian Flag'
    ],
    '🇪🇪': [
        'Flagge Estlands',
        'EE',
        'Estnische Flagge'
    ],
    '🇪🇬': [
        'Flagge Ägyptens',
        'EG',
        'Ägyptische Flagge'
    ],
    '🇪🇭': [
        'Flagge der Westsahara',
        'PH',
        'Westsahara-Flagge'
    ],
    '🇪🇷': [
        'Flagge von Eritrea',
        'E',
        'Eritrean Flag'
    ],
    '🇪🇹': [
        'Flagge Äthiopiens',
        'ET',
        'Ethiopian Flag'
    ],
    '🇪🇸': [
        'Flagge Spaniens',
        'SR',
        'Spanische Flagge'
    ],
    '🇫🇮': [
        'Finnische Flagge',
        'FI',
        'Finnische Flagge'
    ],
    '🇫🇯': [
        'Fidschi Flagge',
        'PJ',
        'Fijian Flag'
    ],
    '🇫🇰': [
        'Flagge der Falklandinseln',
        'FK',
        'Falklander Flagge'
    ],
    '🇫🇲': [
        'Flagge von Mikronesien',
        'FM',
        'Mikronesische Flagge'
    ],
    '🇫🇴': [
        'Flagge der Färöer Inseln',
        'FO',
        'Faroe Islander Flag'
    ],
    '🇫🇷': [
        'Flagge von Frankreich',
        'FR',
        'Französische Flagge'
    ],
    '🇬🇦': [
        'Flagge von Gabun',
        'PN',
        'Gabunesische Flagge'
    ],
    '🇬🇧': [
        'Flagge Großbritanniens',
        'SF',
        'Britische Flagge',
        'Großbritannien',
        'Union Jack',
        'TN'
    ],
    //"🏴󠁧󠁢󠁥󠁮󠁧󠁿": ["Flag of England", "St George's Cross", "English Flag"],
    //"🏴󠁧󠁢󠁷󠁬󠁳󠁿": ["Flag of Wales", "Welsh Flag", "Red Dragon", "Baner Cymru", "Y Ddraig Goch"],
    //"🏴󠁧󠁢󠁳󠁣󠁴󠁿": ["Flag of Scotland", "Scottish Flag", "St Andrew's Cross", "Saltire"],
    //"🏴󠁧󠁢󠁮󠁩󠁲󠁿": ["Flag of Northern Ireland"],
    '🇬🇩': [
        'Flagge von Grenada',
        'GD',
        'Grenadische Flagge'
    ],
    '🇬🇪': [
        'Flagge von Georgien',
        'GE',
        'Georgische Flagge'
    ],
    '🇬🇫': [
        'Flagge von Französisch-Guayana',
        'GF',
        'Französisch-guineische Flagge'
    ],
    '🇬🇬': [
        'Flagge von Guernsey',
        'GG',
        'Guernsey Flag'
    ],
    '🇬🇭': [
        'Flagge von Ghana',
        'GH',
        'Ghanaische Flagge'
    ],
    '🇬🇮': [
        'Flagge von Gibraltar',
        'GI',
        'Gibraltar Flagge'
    ],
    '🇬🇱': [
        'Flagge von Grönland',
        'GL',
        'Greenlandic Flag'
    ],
    '🇬🇲': [
        'Flagge von Gambia',
        'MV',
        'Gambian Flag'
    ],
    '🇬🇳': [
        'Flagge von Guinea',
        'GN',
        'Guinean Flag'
    ],
    '🇬🇵': [
        'Flagge von Guadeloupe',
        'GP',
        'Guadeloupean Flagge'
    ],
    '🇬🇶': [
        'Flagge Äquatorialguineas',
        'GT',
        'Equatorial Guinean Flag',
        'Äquatoguineische Flagge'
    ],
    '🇬🇷': [
        'Flagge Griechenlands',
        'GR',
        'Griechische Flagge'
    ],
    '🇬🇸': [
        'Flagge von Südgeorgien und den südlichen Sandwichinseln',
        'GS'
    ],
    '🇬🇹': [
        'Flagge von Guatemala',
        'GT',
        'Guatemalan Flag'
    ],
    '🇬🇺': [
        'Flagge von Guam',
        'GU',
        'Guamanische Flagge',
        'Chamorro-Flagge'
    ],
    '🇬🇼': [
        'Flagge von Guinea-Bissau',
        'GW',
        'Guinea-Bissau Flag'
    ],
    '🇬🇾': [
        'Flagge von Guyana',
        'GY',
        'Guyanesische Flagge'
    ],
    '🇭🇰': [
        'Flagge Hongkongs SAR China',
        'KW',
        'Hongkong-Flagge'
    ],
    '🇭🇲': [
        'Flagge von Heard & McDonald-Inseln',
        'HM',
        'Flagge: Heard & McDonald-Inseln'
    ],
    '🇭🇳': [
        'Flagge von Honduras',
        'HN',
        'Honduras Flagge'
    ],
    '🇭🇷': [
        'Flagge Kroatiens',
        'HR',
        'Kroatische Flagge'
    ],
    '🇭🇹': [
        'Flagge von Haiti',
        'HT',
        'Haitian Flag'
    ],
    '🇭🇺': [
        'Flagge Ungarns',
        'HU',
        'Ungarische Flagge'
    ],
    '🇮🇨': [
        'Flagge der Kanarischen Inseln',
        'SF'
    ],
    '🇮🇩': [
        'Flagge von Indonesien',
        'ID',
        'Indonesische Flagge'
    ],
    '🇮🇪': [
        'Irische Flagge',
        'JH',
        'Irische Flagge'
    ],
    '🇮🇱': [
        'Flagge Israels',
        'IL',
        'Israelische Flagge'
    ],
    '🇮🇲': [
        'Flagge der Insel Man',
        'IM',
        'Manx Flag'
    ],
    '🇮🇳': [
        'Flagge Indiens',
        'MW',
        'Indische Flagge'
    ],
    '🇮🇴': [
        'Flagge des britischen Territoriums im Indischen Ozean',
        'IO',
        'Britisches Territorium im Indischen Ozean'
    ],
    '🇮🇶': [
        'Flagge des Irak',
        'IQ',
        'Iraqi Flag'
    ],
    '🇮🇷': [
        'Flagge des Iran',
        'IR',
        'Iranische Flagge'
    ],
    '🇮🇸': [
        'Flagge von Island',
        'SF',
        'Isländische Flagge'
    ],
    '🇮🇹': [
        'Flagge Italiens',
        'SF',
        'Italienische Flagge'
    ],
    '🇯🇪': [
        'Markierung von Jersey',
        'JU',
        'Trikot-Flagge'
    ],
    '🇯🇲': [
        'Flagge von Jamaika',
        'JM',
        'Jamaikanische Flagge'
    ],
    '🇯🇴': [
        'Flagge von Jordanien',
        'JO',
        'Jordanische Flagge'
    ],
    '🇯🇵': [
        'Flagge von Japan',
        'JP',
        'Japanische Flagge'
    ],
    '🇰🇪': [
        'Flagge Kenias',
        'KE',
        'Kenianische Flagge'
    ],
    '🇰🇬': [
        'Flagge Kirgisistans',
        'KG',
        'Kyrgyzstani Flag'
    ],
    '🇰🇭': [
        'Flagge Kambodschas',
        'KR',
        'Kambodschanische Flagge'
    ],
    '🇰🇮': [
        'Flagge von Kiribati',
        'KI',
        'I-Kiribati Flagge'
    ],
    '🇰🇲': [
        'Flagge von Komoren',
        'KM',
        'Komorenflagge'
    ],
    '🇰🇳': [
        'Flagge von St. Kitts & Nevis',
        'KN'
    ],
    '🇰🇵': [
        'Flagge Nordkoreas',
        'KP',
        'Nordkoreanische Flagge'
    ],
    '🇰🇷': [
        'Flagge Südkoreas',
        'KR',
        'Südkoreanische Flagge'
    ],
    '🇰🇼': [
        'Flagge von Kuwait',
        'KW',
        'Kuwaiti Flag'
    ],
    '🇰🇾': [
        'Flagge der Kaimaninseln',
        'MY',
        'Kaymanische Flagge'
    ],
    '🇰🇿': [
        'Flagge Kasachstans',
        'KZ',
        'Kazakhstani Flag',
        'Kazakh Flag'
    ],
    '🇱🇦': [
        'Flagge von Laos',
        'MH',
        'Laotische Flagge',
        'Lao-Flagge'
    ],
    '🇱🇧': [
        'Fahne des Libanon',
        'LB',
        'Libanesische Flagge'
    ],
    '🇱🇨': [
        'Flagge von St. Lucia',
        'LC'
    ],
    '🇱🇮': [
        'Flagge Liechtensteins',
        'LI',
        'Liechtensteiner Flagge'
    ],
    '🇱🇰': [
        'Flagge von Sri Lanka',
        'LR',
        'Sri-Lanka-Flagge'
    ],
    '🇱🇷': [
        'Flagge von Liberia',
        'LR',
        'Liberianische Flagge'
    ],
    '🇱🇸': [
        'Flag of Lesotho',
        'LS',
        'Basotho Flag'
    ],
    '🇱🇹': [
        'Litauische Flagge',
        'LT',
        'Litauische Flagge'
    ],
    '🇱🇺': [
        'Luxemburgische Flagge',
        'PN',
        'Luxemburgische Flagge'
    ],
    '🇱🇻': [
        'Flagge Lettlands',
        'LV',
        'Lettische Flagge'
    ],
    '🇱🇾': [
        'Flagge von Libyen',
        'MY',
        'Libysche Flagge'
    ],
    '🇲🇦': [
        'Flagge von Marokko',
        'MR',
        'Marokkanische Flagge'
    ],
    '🇲🇨': [
        'Flagge von Monaco',
        'MC',
        'Mone<unk> gasque Flagge'
    ],
    '🇲🇩': [
        'Flagge der Republik Moldau',
        'MP',
        'Moldau-Flagge'
    ],
    '🇲🇪': [
        'Flagge von Montenegro',
        'MU',
        'Montenegrinische Flagge'
    ],
    '🇲🇫': [
        'Markierung von St. Martin',
        'MW',
        'Flag: St. Martin'
    ],
    '🇲🇬': [
        'Flagge von Madagaskar',
        'MC',
        'Madagascan Flag'
    ],
    '🇲🇭': [
        'Flagge der Marshall-Inseln',
        'MH',
        'Marshallese-Flagge'
    ],
    '🇲🇰': [
        'Flagge Mazedoniens',
        'MK',
        'Makedonische Flagge'
    ],
    '🇲🇱': [
        'Flagge von Mali',
        'MP',
        'Malische Flagge'
    ],
    '🇲🇲': [
        'Flagge von Myanmar (Burma)',
        'KM',
        'Myanmarische Flagge',
        'Flagge für Birma',
        'Birmanische Flagge'
    ],
    '🇲🇳': [
        'Flagge der Mongolei',
        'MN',
        'Mongolische Flagge'
    ],
    '🇲🇴': [
        'Flagge Macaus Sar China',
        'MU',
        'Macanische Flagge'
    ],
    '🇲🇵': [
        'Flagge der Nördlichen Marianen-Inseln',
        'MP',
        'Mikronesische Flagge'
    ],
    '🇲🇶': [
        'Flagge von Martinique',
        'MQ',
        'Schlangenflagge von Martinique',
        'Martiniquais Flagge'
    ],
    '🇲🇷': [
        'Flagge von Mauretanien',
        'MR',
        'Mauretanische Flagge'
    ],
    '🇲🇸': [
        'Flag of Montserrat',
        'MP',
        'Montserratian Flag'
    ],
    '🇲🇹': [
        'Flagge von Malta',
        'MT',
        'Maltese Flag'
    ],
    '🇲🇺': [
        'Flag of Mauritius',
        'MU',
        'Mauritius Flagge'
    ],
    '🇲🇻': [
        'Flagge der Malediven',
        'MV',
        'Malediven Flagge'
    ],
    '🇲🇼': [
        'Flagge von Malawi',
        'MW',
        'Malawian Flag'
    ],
    '🇲🇽': [
        'Flagge von Mexiko',
        'MC',
        'Mexikanische Flagge'
    ],
    '🇲🇾': [
        'Flagge von Malaysia',
        'MY',
        'Malaysian Flag'
    ],
    '🇲🇿': [
        'Flagge von Mosambik',
        'MW',
        'Mosambikanische Flagge'
    ],
    '🇳🇦': [
        'Flagge Namibias',
        'MN',
        'Namibian Flag'
    ],
    '🇳🇨': [
        'Flagge Neukaledonien',
        'MC',
        'Neue Kaledonische Flagge'
    ],
    '🇳🇪': [
        'Flagge von Niger',
        'MU',
        'Nigeria-Flagge'
    ],
    '🇳🇫': [
        'Flagge der Norfolk-Insel',
        'NF',
        'Norfolk-Inselflagge'
    ],
    '🇳🇬': [
        'Flagge Nigerias',
        'NG',
        'Nigerianische Flagge'
    ],
    '🇳🇮': [
        'Flag of Nicaragua',
        'NI',
        'Nicaraguan Flag'
    ],
    '🇳🇱': [
        'Flagge der Niederlande',
        'NL',
        'Niederländische Flagge',
        'Holland'
    ],
    '🇳🇴': [
        'norwegische Flagge',
        'NO',
        'Norwegische Flagge'
    ],
    '🇳🇵': [
        'Flagge von Nepal',
        'NP',
        'Nepalesische Flagge'
    ],
    '🇳🇷': [
        'Flagge von Nauru',
        'MR',
        'Nauruan Flag'
    ],
    '🇳🇺': [
        'Flagge von Niue',
        'NU',
        'Niuean Flag'
    ],
    '🇳🇿': [
        'Flagge Neuseelands',
        'MZ',
        'Kiwi Flagge'
    ],
    '🇴🇲': [
        'Flagge von Oman',
        'OM',
        'Omani Flagge'
    ],
    '🇵🇦': [
        'Flagge von Panama',
        'PN',
        'Panamanische Flagge'
    ],
    '🇵🇪': [
        'Flagge von Peru',
        'PN',
        'Peruanische Flagge'
    ],
    '🇵🇫': [
        'Flagge der Französischen Polynesien',
        'PN',
        'Französische polynesische Flagge'
    ],
    '🇵🇬': [
        'Flagge von Papua-Neuguinea',
        'PG',
        'PNG-Flagge',
        'Papua New Guinean Flag'
    ],
    '🇵🇭': [
        'Flagge der Philippinen',
        'PH'
    ],
    '🇵🇰': [
        'Flagge von Pakistan',
        'PK',
        'Pakistanische Flagge'
    ],
    '🇵🇱': [
        'Flagge Polens',
        'PL',
        'Polnische Flagge'
    ],
    '🇵🇲': [
        'Flagge von Saint Pierre & Miquelon',
        'PN'
    ],
    '🇵🇳': [
        'Fahne von Pitcairn',
        'PN'
    ],
    '🇵🇷': [
        'Flagge von Puerto Rico',
        'PR',
        'Puerto Rica Flagge'
    ],
    '🇵🇸': [
        'Flagge der palästinensischen Gebiete',
        'PN',
        'Palestine'
    ],
    '🇵🇹': [
        'Flagge von Portugal',
        'PN',
        'Portugiesisch Flagge'
    ],
    '🇵🇼': [
        'Flagge von Palau',
        'PW',
        'Palauan Flagge'
    ],
    '🇵🇾': [
        'Flagge von Paraguay',
        'PY',
        'Paraguayan Flag'
    ],
    '🇶🇦': [
        'Flagge von Katar',
        'QA',
        'Katari-Flagge'
    ],
    '🇷🇪': [
        'Flagge von Re<unk> union',
        'RE',
        'Re<unk> Gewerkschaftsflagge'
    ],
    '🇷🇴': [
        'Flagge Rumäniens',
        'RO',
        'Rumänische Flagge'
    ],
    '🇷🇸': [
        'Flagge Serbiens',
        'RS',
        'Serbische Flagge'
    ],
    '🇷🇺': [
        'Flagge von Russland',
        'RU',
        'Russische Flagge'
    ],
    '🇷🇼': [
        'Flag of Rwanda',
        'RW',
        'Rwandan Flag'
    ],
    '🇸🇦': [
        'Flagge Saudi-Arabiens',
        'SA',
        'Saudi-Arabien-Flagge'
    ],
    '🇸🇧': [
        'Flagge der Salomonen',
        'SB',
        'Salomon Islander Flagge'
    ],
    '🇸🇨': [
        'Flagge der Seychellen',
        'SR',
        'Seychellois Flag'
    ],
    '🇸🇩': [
        'Flagge des Sudan',
        'SD',
        'Sudanese Flag'
    ],
    '🇸🇪': [
        'Flagge Schwedens',
        'SO',
        'Schwedische Flagge'
    ],
    '🇸🇬': [
        'Flagge von Singapur',
        'SG',
        'Singapurische Flagge'
    ],
    '🇸🇭': [
        'Flagge von St. Helena',
        'SO'
    ],
    '🇸🇮': [
        'Flagge Sloweniens',
        'SI',
        'Slowenische Flagge'
    ],
    '🇸🇯': [
        'Flagge von Spitzbergen & Jan Mayen',
        'SO'
    ],
    '🇸🇰': [
        'Flagge der Slowakei',
        'SK',
        'Slowakische Flagge',
        'Slovakian Flag'
    ],
    '🇸🇱': [
        'Flagge von Sierra Leone',
        'SL',
        'Sierra Leonean Flag'
    ],
    '🇸🇲': [
        'Markierung von San Marino',
        'SM',
        'Sammarinesische Flagge'
    ],
    '🇸🇳': [
        'Flagge des Senegal',
        'SN',
        'Sengalesische Flagge'
    ],
    '🇸🇴': [
        'Flagge von Somalia',
        'SO',
        'Somalian Flag'
    ],
    '🇸🇷': [
        'Flagge von Suriname',
        'SR',
        'Surinamer Flagge'
    ],
    '🇸🇸': [
        'Flagge des Südsudan',
        'SS',
        'Südsudanesische Flagge'
    ],
    '🇸🇹': [
        'Flagge von Sa<unk> o Tome<unk> & Pri<unk> ncipe',
        'SF'
    ],
    '🇸🇻': [
        'Flagge von El Salvador',
        'SV',
        'El Salvadoranische Flagge'
    ],
    '🇸🇽': [
        'Flagge von Sint Maarten',
        'SX'
    ],
    '🇸🇾': [
        'Syrien-Flagge',
        'SY',
        'Syrische Flagge'
    ],
    '🇸🇿': [
        'Markierung von Swasiland',
        'SZ',
        'Eswatini Flagge'
    ],
    '🇹🇦': [
        'Flag of Tristan Da Cunha',
        'TM'
    ],
    '🇹🇨': [
        'Flagge der Türken & Caicos Inseln',
        'SO'
    ],
    '🇹🇩': [
        'Flagge des Tschad',
        'TD',
        'Tschadische Flagge'
    ],
    '🇹🇫': [
        'Flagge französischer Südgebiete',
        'TM',
        'Französische Südflagge'
    ],
    '🇹🇬': [
        'Togo Markierung',
        'TG',
        'Togolese Flag'
    ],
    '🇹🇭': [
        'Flagge von Thailand',
        'SO',
        'Thailändische Flagge'
    ],
    '🇹🇯': [
        'Flagge von Tadschikistan',
        'TJ',
        'Tadschik-Flagge'
    ],
    '🇹🇰': [
        'Markierung von Tokelau',
        'TK',
        'Tokelauische Flagge'
    ],
    '🇹🇱': [
        'Flagge von Timor-Leste',
        'TL',
        'Timor-Leste Flagge',
        'Osttimoresische Flagge'
    ],
    '🇹🇲': [
        'Flagge von Turkmenistan',
        'TM',
        'Turkmen Flag'
    ],
    '🇹🇳': [
        'Flagge von Tunesien',
        'SR',
        'Tunesische Flagge'
    ],
    '🇹🇴': [
        'Flagge von Tonga',
        'ZU',
        'Tongan Flag'
    ],
    '🇹🇷': [
        'Flagge der Türkei',
        'SR',
        'Türkische Flagge'
    ],
    '🇹🇹': [
        'Flagge von Trinidad & Tobago',
        'TM'
    ],
    '🇹🇻': [
        'Flagge von Tuvalu',
        'TM',
        'Tuvaluanische Flagge'
    ],
    '🇹🇼': [
        'Flagge Taiwans',
        'TW',
        'Taiwanesische Flagge'
    ],
    '🇹🇿': [
        'Flagge Tansanias',
        'TZ',
        'Tanzanian Flag'
    ],
    '🇺🇦': [
        'Flagge der Ukraine',
        'UA',
        'Ukrainische Flagge'
    ],
    '🇺🇬': [
        'Flagge Ugandas',
        'UG',
        'Uganda-Flagge'
    ],
    '🇺🇲': [
        'Fahne: Amerikanische Außeninseln',
        'UM'
    ],
    '🇺🇸': [
        'Flagge der Vereinigten Staaten',
        'MN',
        'Amerikanische Flagge',
        'USA-Flagge'
    ],
    '🇺🇾': [
        'Flag of Uruguay',
        'UY',
        'Uruguayan Flag'
    ],
    '🇺🇿': [
        'Flag of Uzbekistan',
        'UZ',
        'Uzbekistani Flag',
        'Uzbek Flag'
    ],
    '🇻🇦': [
        'Flagge des Heiligen Stuhls',
        'VA',
        'Vanticanien Flagge'
    ],
    '🇻🇨': [
        'Flagge von St. Vincent & Grenadinen',
        'MC'
    ],
    '🇻🇪': [
        'Flagge Venezuelas',
        'KW',
        'venezolanische Flagge'
    ],
    '🇻🇬': [
        'Flagge der britischen Jungferninseln',
        'VW',
        'Britische Jungferninselflagge'
    ],
    '🇻🇮': [
        'Flagge der US-Jungferninseln',
        'MV',
        'US Jungferninseln Flagge'
    ],
    '🇻🇳': [
        'Flagge Vietnams',
        'VN',
        'Vietnamesische Flagge'
    ],
    '🇻🇺': [
        'Flag of Vanuatu',
        'VU',
        'Ni-Vanuatu Flag'
    ],
    '🇼🇫': [
        'Flagge von Wallis & Futuna',
        'MW'
    ],
    '🇼🇸': [
        'Flagge von Samoa',
        'MW',
        'Samoan Flag'
    ],
    '🇽🇰': [
        'Flagge des Kosovo',
        'XK',
        'Kosovar Flag'
    ],
    '🇾🇪': [
        'Flagge des Jemen',
        'YE',
        'Jemen-Flagge'
    ],
    '🇾🇹': [
        'Flagge von Mayotte',
        'YT',
        'Mayotte Flagge'
    ],
    '🇿🇦': [
        'Flagge Südafrikas',
        'TM',
        'Südafrikanische Flagge'
    ],
    '🇿🇲': [
        'Flagge von Sambia',
        'TM',
        'Zambian Flag'
    ],
    '🇿🇼': [
        'Flagge Simbabwes',
        'MW',
        'Simbabwes Flagge',
        'Zim Flagge'
    ]
};
/*sports*/
emojis_language[lang][8] = {
    '🧗{{skin_tone}}‍‍♂️': [
        'Man Climbing',
        'Male Rock Climber',
        'Man Climber'
    ],
    '🧗{{skin_tone}}‍‍♀️': [
        'Woman Climbing',
        'Female Rock Climber',
        'Woman Climber'
    ],
    '🏇{{skin_tone}}‍': [
        'Horse Racing',
        'Horse Race',
        'Jockey'
    ],
    '⛷{{skin_tone}}‍️': ['Skier'],
    '🏂{{skin_tone}}‍': ['Snowboarder'],
    '🏌️{{skin_tone}}‍♂️': ['Man Golfer'],
    '🏌️{{skin_tone}}‍♀️': ['Woman Golfer'],
    '🏄{{skin_tone}}‍♂️': ['Man Surfer'],
    '🏄{{skin_tone}}‍♀️': ['Woman Surfer'],
    '🚣{{skin_tone}}‍‍♂️': ['Man Rowing Boat'],
    '🚣{{skin_tone}}‍‍♀️': ['Woman Rowing Boat'],
    '🏊{{skin_tone}}‍‍♂️': [
        'Man Swimming',
        'Man Swimmer'
    ],
    '🏊{{skin_tone}}‍‍♀️': [
        'Woman Swimming',
        'Woman Swimmer'
    ],
    '⛹{{skin_tone}}‍️‍♂️': [
        'Man Bouncing Ball',
        'Man Basketball Player'
    ],
    '⛹️{{skin_tone}}‍♀️': [
        'Woman Bouncing Ball',
        'Woman Basketball Player'
    ],
    '🏋️{{skin_tone}}‍♂️': [
        'Man Lifting Weights',
        'Man Weightlifter'
    ],
    '🏋️{{skin_tone}}‍♀️': [
        'Woman Lifting Weights',
        'Woman Weightlifter'
    ],
    '🚴{{skin_tone}}‍♂️': [
        'Man Biking',
        'Man Cyclist',
        'Male Cyclist'
    ],
    '🚴{{skin_tone}}‍♀️': [
        'Woman Biking',
        'Woman Cyclist',
        'Female Cyclist'
    ],
    '🚵{{skin_tone}}‍♂️': [
        'Man Mountain Biking',
        'Man Mountain Biker'
    ],
    '🚵{{skin_tone}}‍♀️': [
        'Woman Mountain Biking',
        'Woman Mountain Biker'
    ],
    '🤸{{skin_tone}}‍♂️': [
        'Man Cartwheeling',
        'Man Doing Cartwheel'
    ],
    '🤸{{skin_tone}}‍♀️': [
        'Woman Cartwheeling',
        'Woman Doing Cartwheel'
    ],
    '🤼': [
        'Leute ringen',
        'Ringen',
        'Wrestler'
    ],
    '🤽{{skin_tone}}‍♂️': ['Man Playing Water Polo'],
    '🤽{{skin_tone}}‍♀️': ['Woman Playing Water Polo'],
    '🤾{{skin_tone}}‍♂️': ['Man Playing Handball'],
    '🤾{{skin_tone}}‍♀️': ['Woman Playing Handball'],
    '🤹{{skin_tone}}‍♂️': [
        'Man Juggling',
        'Male Juggler'
    ],
    '🤹{{skin_tone}}‍♀️': [
        'Woman Juggling',
        'Female Juggler'
    ],
    '🧘{{skin_tone}}‍♂️': [
        'Man in Lotus Position',
        'Meditation',
        'Zen',
        'Cross legged',
        'Yoga'
    ],
    '🧘{{skin_tone}}‍♀️': [
        'Woman in Lotus Position',
        'Meditation',
        'Zen',
        'Cross legged',
        'Yoga'
    ],
    '🏃{{skin_tone}}‍♂️': ['Man Running'],
    '🏃{{skin_tone}}‍♀️': ['Woman Running'],
    '🕺{{skin_tone}}‍': ['Man Dancing'],
    '💃{{skin_tone}}‍': ['Woman Dancing'],
    '🤺': [
        'Personenzaunen',
        'Fänger'
    ],
    '🏆': [
        'Trophäe',
        'Meisterschaft',
        'Sieger'
    ],
    '🏅': ['Sport-Medaille'],
    '🥇': [
        '1. Platz Medaille',
        'Erster Platz Medaille',
        'Goldmedaille'
    ],
    '🥈': [
        '2. Platz Medaille',
        'Zweiter Platz Medaille',
        'Silbermedaille'
    ],
    '🥉': [
        '3. Platz Medaille',
        '3. Platz Medaille',
        'Bronze-Medaille'
    ],
    '⚽': [
        'Fußball',
        'Fußball'
    ],
    '⚾': [
        'Baseball',
        'Softball',
        'Weiß'
    ],
    '🥎': [
        'Softball',
        'Gelb'
    ],
    '🏀': [
        'Basketball',
        'Orange',
        'Basketball und Hoop'
    ],
    '🏐': ['Volleyball'],
    '🏈': [
        'Amerikanischer Fußball',
        'Fußball',
        'Gridiron',
        'Superbowle'
    ],
    '🏉': [
        'Rugby-Fußball',
        'Fußball',
        'Liga',
        'Rugby',
        'Union'
    ],
    '🎾': [
        'Tennis',
        'Kugel',
        'Raster',
        'Racquet'
    ],
    '🥏': [
        'Flying Disk',
        'Frisbee'
    ],
    '🎳': [
        'Bowling',
        'Pins',
        'Skitzel',
        'Zehn Pin Bowling'
    ],
    '🏏': [
        'Cricket',
        'Fledermaus',
        'Kugel'
    ],
    '🏑': [
        'Feldhockey',
        'Kugel',
        'Legen'
    ],
    '🏒': [
        'Eishockey',
        'Kugel',
        'Legen'
    ],
    '🥍': [
        'Lacrosse',
        'Kugel',
        'Legen'
    ],
    '🏓': [
        'Ping Pong',
        'Tischtennis',
        'Kugel',
        'Paddle'
    ],
    '🏸': [
        'Badminton',
        'Shuttlecock',
        'Racquet'
    ],
    '🥊': ['Boxhandschuh'],
    '🥋': [
        'Kampfkünste Uniform',
        'Lila',
        'Karate',
        'Kung fu'
    ],
    '⛳': [
        'Flagge in Loch',
        'Golfflagge'
    ],
    '⛸️': [
        'Eislaufen',
        'Eislaufen'
    ],
    '🎣': [
        'Fischerei',
        'Pole',
        'Fisch',
        'Angelrute'
    ],
    '🎽': [
        'Laufendes Hemd',
        'Einzel',
        'Schräg'
    ],
    '🎿': [
        'Ski',
        'Skifahren',
        'Boot'
    ],
    '🛷': ['Schlitten'],
    '🥌': ['Curling-Stein'],
    '🎯': [
        'Direkter Treffer',
        'Bogenschießen',
        'Bullseye',
        'Dylan'
    ],
    '🎱': [
        'Pool 8 Kugel',
        'Cue Kugel',
        'Snooker',
        'Billard'
    ],
    '🎮': [
        'Videospiel-Controller',
        'Playstation',
        'Xbox',
        'Gamepad',
        'Wii U'
    ],
    '♟️': ['Schwarzer Schachpfoten'],
    '🏹': [
        'Bogen und Pfeil',
        'Bogen'
    ],
    '🥅': ['Ziel Netz'],
    '🀄': [
        'Mahjong-Roter Drache',
        'Mahjong',
        'Mahjong Tile',
        '中',
        'Mahjong Tile Roter Drache'
    ],
    '🎴': [
        'Blumenspielkarten',
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
        'Dampfzug',
        'Lokomotive'
    ],
    '🚃': [
        'Eisenbahnwagen',
        'Eisenbahn',
        'Eisenbahn',
        'Eisenbahn',
        'Eisenbahnwagen'
    ],
    '🚄': ['Hochgeschwindigkeitszug'],
    '🚅': [
        'Kugelzug',
        'Shinkansen',
        'Hochgeschwindigkeitszug mit Kugelnase'
    ],
    '🚆': ['Zug'],
    '🚇': [
        'Unterirdisch',
        'Röhre',
        'Metro',
        'U-Bahn'
    ],
    '🚈': [
        'Lichtschiene',
        'Zug'
    ],
    '🚊': ['Straßenbahn'],
    '🚝': [
        'Monorail',
        'Zug'
    ],
    '🚞': [
        'Bergbahn',
        'Funicular',
        'Zug und Berg'
    ],
    '🚋': ['Straßenbahn'],
    '🚌': [
        'Bus',
        'Trainer'
    ],
    '🚍': [
        'Laufender Bus',
        'Vorderer Bus'
    ],
    '🚎': [
        'Trolleybus',
        'Elektro-Bus'
    ],
    '🚐': [
        'Minibus',
        'Kleinwagen',
        'Personen-Mover'
    ],
    '🚑': ['Krankenwagen'],
    '🚒': [
        'Feuermaschine',
        'Feuerwehr',
        'Feuerwehrwagen'
    ],
    '🚓': [
        'Polizeiwagen',
        'Bullenwagen',
        'Seite des Polizeiwagens'
    ],
    '🚔': [
        'Laufendes Polizeiauto',
        'Vorderseite des Polizeiwagens',
        'Bullenwagen'
    ],
    '🚕': [
        'Taxi',
        'New York Taxi',
        'Taxistand'
    ],
    '🚖': [
        'Taxi',
        'Anstehendes Taxi',
        'Vordere Taxifahrt'
    ],
    '🚗': [
        'Auto',
        'Rotes Auto',
        'Autoseite'
    ],
    '🚘': [
        'Kommendes Automobil',
        'Rotes Auto',
        'Vorderseite des Wagens'
    ],
    '🚚': [
        'Lieferwagen',
        'Lkw'
    ],
    '🚛': [
        'Lkw ausrichten',
        'Grüner Lastwagen'
    ],
    '🚜': [
        'Traktor',
        'Farm'
    ],
    '🛻': ['Lastwagen abholen'],
    '🏎️': [
        'Rennwagen',
        'F1',
        'Formel 1',
        'Rennwagen'
    ],
    '🏍️': [
        'Motorrad',
        'Motorrad'
    ],
    '🛵': [
        'Motorroller',
        'Vespa',
        'Motorrad',
        'Motorrad'
    ],
    '🛺': [
        'Auto-Rickshaw',
        'Tuk Tuk'
    ],
    '🚲': [
        'Fahrrad',
        'Fahrrad'
    ],
    '🛴': ['Kick-Scooter'],
    '⛵': [
        'Segelboot',
        'Dinghy',
        'Yacht'
    ],
    '🚤': [
        'Speedboot',
        'Motorboot',
        'Motorboot'
    ],
    '🛳️': ['Passagierschiff'],
    '⛴️': ['Fähre'],
    '🛥️': ['Motorboot'],
    '🚢': ['Kreuzfahrtschiff'],
    '✈️': [
        'Flugzeug',
        'Aeroplane'
    ],
    '🛩️': [
        'Kleines Flugzeug',
        'Kleines Flugzeug'
    ],
    '🚁': ['Hubschrauber'],
    '🚟': ['Bahnunterbrechung'],
    '🚠': ['Bergbahn'],
    '🚡': [
        'Luftbahnstrecke',
        'Seilbahn',
        'Gondola',
        'Seilbahn'
    ],
    '🛰️': ['Satellit'],
    '🚀': [
        'Rakete',
        'Space Shuttle'
    ],
    '🛸': [
        'Flying Saucer',
        'UFO'
    ],
    '🚉': [
        'Bahnhof',
        'Zugplattform'
    ],
    '🚏': ['Bushaltestelle'],
    '🛣️': [
        'Autobahn',
        'Straße',
        'Autobahn',
        'Interstate'
    ],
    '🛤️': ['Bahnstrecke'],
    '🛫': [
        'Abflug des Flugzeugs',
        'Abheben'
    ],
    '🛬': [
        'Ankunft des Flugzeugs',
        'Flugzeug Ankunft',
        'Landung'
    ],
    '🗾': ['Karte von Japan'],
    '⛰️': ['Berg'],
    '🏔️': ['Schnee bedeckter Berg'],
    '🌋': ['Vulkan'],
    '🗻': [
        'Mount Fuji',
        'Fuji-san'
    ],
    '🏕️': [
        'Zelten',
        'Campingplatz'
    ],
    '🏖️': ['Strand mit Umbrella'],
    '🏜️': ['Desert'],
    '🏝️': ['Wüsteninsel'],
    '🏞️': ['Nationalpark'],
    '🏟️': [
        'Stadion',
        'Tribüne',
        'Sportstadion'
    ],
    '🏛️': [
        'Klassisches Gebäude',
        'Griechisch',
        'Rom'
    ],
    '🏗️': [
        'Gebäudebau',
        'Krane'
    ],
    '🏘️': [
        'Häuser Gebäude',
        'Häusergruppe'
    ],
    '🏚️': [
        'Renovierungsarbeiten',
        'Verlassenes Haus',
        'Altes Haus',
        'Gejagtes Haus'
    ],
    '🏠': [
        'Startseite',
        'Hausbau'
    ],
    '🏡': [
        'Haus mit Garten',
        'Haus und Baum'
    ],
    '🏢': [
        'Bürogebäude',
        'Stadtgebäude',
        'Hochwertiges Gebäude'
    ],
    '🏣': [
        'Japanische Post',
        'Japanisches Postzeichen'
    ],
    '🏤': [
        'Post',
        'Europäisches Postamt'
    ],
    '🏥': [
        'Krankenhaus',
        'E',
        'A&E',
        'Notfallraum',
        'Unfall und Notfall',
        'Rotes Kreuz',
        'Medizinisch'
    ],
    '🏦': [
        'Bank',
        'BK',
        'Bakkureru',
        'Bankzweig',
        'Bakkureru'
    ],
    '🏨': [
        'Hotel',
        'Unterkunft',
        'H Gebäude'
    ],
    '🏩': [
        'Hotel lieben',
        'Liebesherz Hotel'
    ],
    '🏪': [
        'Convenience Store',
        '24-Stunden Store',
        '7-Elf',
        'Eckenladen',
        'Kwik-E-Mart'
    ],
    '🏫': [
        'Schule',
        'Uhrturm',
        'Grundlegende hohe Mitte'
    ],
    '🏬': [
        'Kaufhaus',
        'Einkaufszentrum',
        'Shop'
    ],
    '🏭': [
        'Fabrik',
        'Industrielle',
        'Industrie',
        'Verschmutzung',
        'Smog'
    ],
    '🏯': [
        'Japanische Burg',
        'Festung'
    ],
    '🏰': [
        'Europäische Burg',
        'Turrets'
    ],
    '💒': [
        'Kirchenherz',
        'Kirchliche Hochzeit',
        'Ehe'
    ],
    '🗼': [
        'Tokyo Turm',
        'Eiffelturm',
        'Roter Turm'
    ],
    '🗽': [
        'Freiheitsstatue',
        'New York'
    ],
    '⛪': [
        'Kirchengebäude',
        'Kreuz'
    ],
    '🕌': [
        'Moschee',
        'Kuppeldach',
        'Minaret'
    ],
    '🛕': ['Hindu-Tempel'],
    '🕍': [
        'Synagoge',
        'Jüdisch',
        'Synagog',
        'Tempel'
    ],
    '⛩️': [
        'Shinto-Schrein',
        'Kami-no-michi'
    ],
    '🕋': [
        'Kaaba',
        'Mecca'
    ],
    '🏙️': ['Cityscape'],
    '⛱️': [
        'Umbrella auf dem Boden',
        'Strandumbrella'
    ],
    '🌄': [
        'Sonnenaufgang über den Bergen',
        'Morgen',
        'Sonnenaufgang'
    ],
    '🌅': [
        'Sonnenaufgang',
        'Sonnenuntergang'
    ],
    '🌆': [
        'Stadtbild bei Dämmerung',
        'Orange Himmelsstadt',
        'Dämmerungsstadt'
    ],
    '🌇': [
        'Sonnenuntergang über Gebäude',
        'Stadt Sonnenuntergang'
    ],
    '🌃': [
        'Nacht mit Sternen',
        'Stadt in der Nacht',
        'Sternen-Nacht'
    ],
    '🗿': [
        'Moai',
        'Osterinselstatue',
        'Menschliche Felsenschnitzerei',
        'Moyai-Statue'
    ],
    '🌠': [
        'Shooting Star',
        'Wenn du dir einen Stern wünschst',
        'Meteoroid'
    ],
    '🌌': [
        'Milchstraße',
        'Galaxie',
        'Nachthimmel',
        'Raum',
        'Sterne',
        'Universum'
    ],
    '🎑': [
        'Mondansicht Zeremonie',
        'Gras, Knödel und Mond',
        'Ernte Mond',
        'Mittel-Herbst-Festival',
        'Tsukimi'
    ],
    '🛖': ['Hütte'],
    '🎢': [
        'Roller Coaster',
        'Achterbahn',
        'Themenpark'
    ]
};
/*technologies (smartphones, laptops, etc.) and office*/
emojis_language[lang][10] = {
    '⌚': [
        'Beobachten',
        'Timepiece',
        'Apfelwache'
    ],
    '⏰': ['Wecker'],
    '⏱️': ['Stoppuhr'],
    '⏲️': ['Timer Uhr'],
    '🕰️': ['Mantelstückuhr'],
    '🧭': ['Kompass'],
    '🕹️': ['Joystick'],
    '🎙️': ['Studio-Mikrofon'],
    '🎚️': ['Level Slider'],
    '🎛️': ['Kontrollknopf'],
    '📻': [
        'Radio',
        'Digital-Radio',
        'Drahtlos'
    ],
    '📱': [
        'Handy',
        'Smartphone',
        'Isabel',
        'Handy'
    ],
    '📲': [
        'Mobiltelefon mit Pfeil nach rechts links',
        'Telefonanruf',
        'Auf Telefon verweisen'
    ],
    '☎️': [
        'Schwarzes Telefon',
        'Rotary-Telefon',
        'Rot'
    ],
    '📞': [
        'Telefonempfänger',
        'Handset',
        'Telefon',
        'Schwarz'
    ],
    '📟': [
        'Pager',
        'Piepser',
        'Brecher'
    ],
    '📠': [
        'Faxgerät',
        'Facsimile',
        'Fax'
    ],
    '🔋': [
        'Akku',
        'AA Batterie',
        'Telefon-Akku'
    ],
    '🔌': [
        'Elektrischer Stecker',
        'AC Adaptor',
        'Stromkabel',
        'Stromstecker'
    ],
    '💻': [
        'Laptop',
        'Notizbuch',
        'Personal Computer',
        'PN',
        'MacBook',
        'Oberfläche'
    ],
    '🖥️': [
        'Desktop-Computer',
        'iMac',
        'PN'
    ],
    '🖨️': ['Drucker'],
    '⌨️': ['Keyboard'],
    '🖱️': [
        'Computermaus',
        'Drei-Tasten-Maus'
    ],
    '🖲️': ['Trackball'],
    '💽': [
        'Computer-Disk',
        'Minidisc',
        'CD',
        'DVD',
        'Blu-ray',
        'BD'
    ],
    '💾': [
        'Diskette',
        '3,5 Diskette',
        'Platte'
    ],
    '💿': [
        'Optische Festplatte',
        'CD',
        'CD-ROM',
        'Kompakte Disc'
    ],
    '📀': [
        'DVD',
        'DVD-ROM',
        'DVD Video'
    ],
    '🎥': [
        'Filmkamera',
        'Filmkamera',
        'Hollywood',
        'Film'
    ],
    '🎞️': ['Filmbilder'],
    '📽️': ['Filmprojektor'],
    '📺': [
        'Fernsehen',
        'TM'
    ],
    '📷': ['Digitalkamera'],
    '📸': ['Kamera mit Blitz'],
    '📹': [
        'Videokamera',
        'Camcorder'
    ],
    '📼': [
        'Videokassette',
        'VHS',
        'VCR',
        'Videoband',
        'Videokassette'
    ],
    '💳': [
        'Kreditkarte',
        'Debitkarte',
        'AMEX',
        'Diners Club',
        'American Express',
        'Mastercard',
        'VISA-Karte'
    ],
    '📧': [
        'E-Mail',
        'E-Mail'
    ],
    '📨': [
        'Eingehender Umschlag',
        'Umschlag mit Zeilen',
        'Schneller Umschlag'
    ],
    '📩': [
        'Umschlag mit Abwärtspfeil oben',
        'Pfeilumschlag nach unten',
        'In Umschlag einfügen'
    ],
    '📤': ['Outbox-Tray'],
    '📥': ['Posteingang'],
    '📮': ['Postfach'],
    '📁': [
        'Dateiordner',
        'Ordner',
        'Verzeichnis',
        'Dateiordner geschlossen'
    ],
    '📂': [
        'Dateiordner öffnen',
        'Verzeichnis'
    ],
    '🗂️': ['Kartenindex-Splitter'],
    '📅': [
        'Kalender',
        '17. Juli',
        'Welt-Emoji-Tag'
    ],
    '🗓️': ['Spiralkalender Pad'],
    '📆': [
        'Tear-Off Kalender',
        'Tageskalender',
        'Tischkalender'
    ],
    '📈': [
        'Diagramm erhöhen',
        'Positives Diagramm',
        'Auf-Punkte-Diagramm',
        'Diagramm mit Aufwärtstrend'
    ],
    '📉': [
        'Diagramm verringern',
        'Negatives Diagramm',
        'Abwärtsdiagramm',
        'Diagramm mit Abwärtstrend'
    ],
    '📊': [
        'Balkendiagramm',
        'Balkendiagramm'
    ],
    '📌': [
        'Pushpin',
        'Thumb Tack'
    ],
    '📋': ['Zwischenablage'],
    '📍': [
        'Runden Pushpin',
        'Pin fallen gelassen',
        'Kartenpin',
        'Pin',
        'Roter Pin'
    ],
    '📎': [
        'Papierclip',
        'Clippy'
    ],
    '📏': ['Geradliniger Regler'],
    '📐': [
        'Dreiecksregel',
        'Dreiecksregel'
    ],
    '✂️': [
        'Schere',
        'Schneiden'
    ],
    '✏️': [
        'Stift',
        'Blei Stift'
    ],
    '✒️': [
        'Schwarzer Nib',
        'Pen Nib',
        'Brunnenstift'
    ],
    '🖋️': [
        'Brunnenstift',
        'Fontäne unten links'
    ],
    '🖊️': [
        'Stift',
        'Kugelpunkt unten links',
        'Kugelschreiberstift'
    ],
    '🖌️': [
        'Pinsel',
        'Pinsel',
        'Malerpinsel unten links'
    ],
    '🖍️': [
        'Crayon',
        'Crayon unten links'
    ],
    '📝': [
        'Notiz',
        'Memorandum',
        'Notiz',
        'Bleistift und Papier'
    ],
    '🗑️': [
        'Abfallpapierkorb',
        'Mülldose',
        'Papierkorb',
        'Papierkorb'
    ],
    '📡': ['Satellitenantenne'],
    '🔭': [
        'Teleskop',
        'Stargazing'
    ],
    '🔬': [
        'Mikroskop',
        'Magnify',
        'Wissenschaft'
    ],
    '📭': ['Öffne Postfach mit niedriger Flagge'],
    '📬': [
        'Öffne Postfach mit Raised Flag',
        'Mailbox öffnen'
    ],
    '📪': ['Geschlossenes Postfach mit niedrigerer Flagge'],
    '📫': ['Geschlossenes Postfach mit erhöhter Flagge'],
    '📰': ['Zeitschrift'],
    '🗞️': [
        'Rolled-Up Zeitung',
        'Zeitungslieferung'
    ],
    '📄': [
        'Seite nach oben',
        'Gedruckte Seite'
    ],
    '📜': [
        'Scrollen',
        'Grad',
        'Parchment'
    ],
    '📃': [
        'Seite mit Curl',
        'Curled Page',
        'Curly Page'
    ],
    '📓': [
        'Notizbuch',
        'Schwarz-Weiß-Buch'
    ],
    '📔': ['Notizbuch mit dekorativem Cover'],
    '📕': [
        'Geschlossenes Buch',
        'Rotes Buch',
        'Rotes Textbuch'
    ],
    '📖': [
        'Buch öffnen',
        'Buch',
        'Neu'
    ],
    '📗': [
        'Grünes Buch',
        'Grünes Textbuch'
    ],
    '📘': [
        'Blaues Buch',
        'Blaues Textbuch'
    ],
    '📙': [
        'Oranges Buch',
        'Oranges Textbuch'
    ],
    '📚': [
        'Bücher',
        'Bücherhaufen',
        'Bücherstapel'
    ],
    '🗳️': [
        'Stimmzettel mit Abstimmung',
        'Abstimmungsbox',
        'Abstimmungen'
    ],
    '🗄️': [
        'Datei-Schrank',
        'Aktenschränke'
    ],
    '🗃️': ['Karten-Datei-Box'],
    '🖇️': ['Verknüpfte Papierclips']
};
/*clothes and accessories*/
emojis_language[lang][11] = {
    '👣': [
        'Fußabdrücke',
        'Füße',
        'Fußschritte'
    ],
    '👓': [
        'Brille',
        'Brille'
    ],
    '🕶️': ['Sonnenbrille'],
    '🥽': ['Brille'],
    '🥼': ['Labormantel'],
    '👔': [
        'Necktie',
        'Geschäftliches Hemd',
        'Hemd und Tie'
    ],
    '👕': [
        'T-Shirt',
        'Tee Hemd',
        'Polo Hemd'
    ],
    '👖': [
        'Jeans',
        'Denim',
        'Hose',
        'Hose'
    ],
    '🧣': ['Scarf'],
    '🧤': ['Handschuhe'],
    '🧥': ['Mantel'],
    '🧦': ['Socks'],
    '👗': [
        'Kleid',
        'Rock',
        'Günther'
    ],
    '👘': [
        'Kimono',
        'Kleiderbügel',
        'Japanisches Kleid'
    ],
    '👙': [
        'Bikini',
        'Bäder',
        'Badeanzug'
    ],
    '🩱': ['Einteiliger Schwimmanzug'],
    '👚': [
        'Frauenkleidung',
        'Blouse',
        'Rosa Hemd',
        'Blouse'
    ],
    '👛': [
        'Geldbeutel',
        'Wallet'
    ],
    '👜': ['Handtasche'],
    '👝': [
        'Kupplungsbeutel',
        'Kupplung',
        'Kleiner Beutel',
        'Pouch'
    ],
    '🎒': [
        'Rucksack',
        'Beutel',
        'Schultasche',
        'Schul-Satchel',
        'Rucksack'
    ],
    '👞': [
        'Mans Shoe',
        'Schuh',
        'Braune Show',
        'Dress Show'
    ],
    '👟': [
        'Sportschuh',
        'Laufender Schuh',
        'Sneaker',
        'Läufer',
        'Trainer',
        'Tennisschuh'
    ],
    '🥾': ['Wanderboot'],
    '🥿': ['Flacher Schuh'],
    '👠': [
        'High-Heeled Schuh',
        'Stiletto',
        'High Heels'
    ],
    '👡': [
        'Frauen Sandal',
        'Fertiger Sandal',
        'Saldals'
    ],
    '👢': [
        'Damenstiefel',
        'Cowgirl Stiefel',
        'Knie-Hochstiefel',
        'Schuhe gekuppelt'
    ],
    '👑': [
        'Krone',
        'König',
        'Königin',
        'Prinz',
        'Edgar',
        'Prinzessin'
    ],
    '👒': [
        'Hut',
        'Frauen Hut',
        'Hut mit Bogen',
        'Damen Hut'
    ],
    '🎩': [
        'Oberer Hut',
        'Formaler Tragen',
        'Groom'
    ],
    '🎓': [
        'Abschlusskappe',
        'Hochschule',
        'Absolvent',
        'Mörserbrett',
        'Universität',
        'Quadratische Akademie'
    ],
    '🧢': [
        'Rechnungskappe',
        'Baseball-Kappe'
    ],
    '⛑️': [
        'Helm mit weißem Kreuz',
        'Helm der Rettung der Arbeiter'
    ],
    '💼': [
        'Briefkasten',
        'Koffer'
    ],
    '🎖️': [
        'Militär-Medaille',
        'Medaille',
        'Medaillon',
        'Militärische Dekoration'
    ],
    '📿': [
        'Gebetsperlen',
        'Dhikr Perlen',
        'Rosa Perlen'
    ],
    '🎗️': ['Erinnerungs-Ribbo'],
    '🤿': ['Tauchmaske'],
    '🦺': ['Sicherheitsweste'],
    '🥻': [
        'Sari',
        'Salz',
        'Scharf'
    ],
    '🩲': ['Briefe'],
    '🩳': ['Shorts'],
    '🛼': [
        'Roller Skate',
        'Inline-Skate',
        'Derby Roller'
    ],
    '🩴': [
        'Flop spiegeln',
        'Thong Sandal'
    ],
    '🪖': ['Militärhelm'],
    '🩰': [
        'Ballettschuhe',
        'Punkt-Schuh'
    ]
};
/*hands and parts of body*/
emojis_language[lang][12] = {
    '👋{{skin_tone}}': [
        'Wenden Handschild',
        'Abschied',
        'Handwelle',
        'Hallo',
        'Hi'
    ],
    '🖐️{{skin_tone}}': [
        'Hand mit Fingern Splay',
        'Fünf Hand',
        'Gespielte Hand',
        'Verbesserte Hand mit Fingern Splayed'
    ],
    '🤚{{skin_tone}}': [
        'Gelöschte Handrücken',
        'Hinterhand'
    ],
    '✋{{skin_tone}}': [
        'Gelöschte Hand',
        'High Fünf',
        'Stoppen'
    ],
    '🖖{{skin_tone}}': [
        'Vulcan Salute',
        'Spock',
        'Star Trek',
        'Gelöschte Hand mit Teilen zwischen Mittel- und Ringfinger'
    ],
    '👌{{skin_tone}}': [
        'OK Handzeichen',
        'Okay',
        'Perfekt',
        'Ja'
    ],
    '✌️{{skin_tone}}': [
        'Siegeshand',
        'Luftzitate',
        'Friedensschild',
        'V-Schild'
    ],
    '🤞{{skin_tone}}': [
        'Kreuzende Finger',
        'Finger durchquert',
        'Viel Glück',
        'Hand mit Index und mittleren Fingern durchquert'
    ],
    '🤟{{skin_tone}}': [
        'Liebende Geste',
        'Ich liebe dich Handzeichen'
    ],
    '🤘{{skin_tone}}': [
        'Zeichen der Hörner',
        'Teufelsfinger',
        'Schweres Metall',
        'Felsen an'
    ],
    '🤙{{skin_tone}}': [
        'Rufe mich Handzeichen an',
        'Telefon-Hand',
        'Shaka'
    ],
    '🤏{{skin_tone}}': ['Pinkende Hand'],
    '👈{{skin_tone}}': [
        'Rückhand-Indexpunkt links',
        'Weiße linke Rückhand-Index'
    ],
    '👉{{skin_tone}}': [
        'Rückhand-Indexpunkt rechts',
        'White-Right Pointing Rückhand-Index'
    ],
    '👆{{skin_tone}}': [
        'Rückhand-Indexpunkt nach oben',
        'Weiß-Up-Rückhand-Index',
        'Mittlerer Finger'
    ],
    '👇{{skin_tone}}': [
        'Rückhand-Indexpunkt nach unten',
        'Weißer Down-Rückhand-Index',
        'Unten zeigen'
    ],
    '☝{{skin_tone}}': [
        'Index Finger Pointing Up',
        'White Up Pointing Index',
        'Secret'
    ],
    '🖕{{skin_tone}}': [
        'Mittlerer Finger',
        'Den Vogel umkehren',
        'Rude Finger',
        'Umgekehrte Hand mit Mittelfinger erweitert'
    ],
    '👍{{skin_tone}}': [
        'Thumbs Up Schild',
        'Möge',
        'Ja'
    ],
    '👎{{skin_tone}}': [
        'Daumen ab Schild',
        'Schlecht',
        'Dislike',
        'Nein'
    ],
    '✊{{skin_tone}}': [
        'Erhobene Faust',
        'Faustpumpe'
    ],
    '👊{{skin_tone}}': [
        'Anstehende Faust',
        'Bro Fist',
        'Brofist',
        'Faust-Bumpf',
        'Schlag',
        'Geschlossene Faust',
        'Fistiertes Handzeichen'
    ],
    '🤛{{skin_tone}}': ['Linke Faust Bump'],
    '🤜{{skin_tone}}': ['Rechte Faust Bumpf'],
    '🤌{{skin_tone}}': [
        'Gepanzerte Finger',
        'Ma Che Vuoi',
        'Finger Geldbeutel'
    ],
    '👏{{skin_tone}}': [
        'Klapphand-Schild',
        'Beifall',
        'Clap',
        'Klappen',
        'Golfklap',
        'Beifall'
    ],
    '🙌{{skin_tone}}': [
        'Person die beide Hände in der Feier hebt',
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
        'Hub',
        'Jazzhands'
    ],
    '🤲{{skin_tone}}': [
        'Palmen zusammen',
        'Dua'
    ],
    '🤝{{skin_tone}}': [
        'Handshake',
        'Schüttelnde Hände'
    ],
    '🙏{{skin_tone}}': [
        'Faltung Hände',
        'Namaste',
        'Bitte',
        'Gebet',
        'Vielen Dank',
        'Person mit gefalteten Händen'
    ],
    '✍{{skin_tone}}': ['Writing Hand'],
    '💪{{skin_tone}}': [
        'Flexitierte Bizeps',
        'Flexende Armmuskulatur',
        'Musle',
        'Stark'
    ],
    '🦵{{skin_tone}}': ['Bein'],
    '🦶{{skin_tone}}': ['Fuß'],
    '👂{{skin_tone}}': [
        'Ohr',
        'Ohren',
        'Hören',
        'Aufnahme wird abgespielt'
    ],
    '👃{{skin_tone}}': [
        'Nase',
        'Stacheln',
        'Schnippen',
        'Stinky'
    ],
    '🧠': ['Brain'],
    '🦷': ['Zahn'],
    '👀': [
        'Augen',
        'Augenbrauen',
        'Shifty Augen',
        'Weisenaugen'
    ],
    '👁️': [
        'Auge',
        'Einzelauge'
    ],
    '👅': ['Zunge raus'],
    '👄': [
        'Mund',
        'Küßende Lippen',
        'Lippen'
    ],
    '🫀': ['Anatomisches Herz'],
    '🫁': ['Lungen'],
    '🦾': ['Mechanischer Arm'],
    '🦿': ['Mechanisches Bein']
};
/*other*/
emojis_language[lang][13] = {
    '💩': [
        'Poohaufen',
        'Hundeschlamm',
        'Lächelnder Koop'
    ],
    '💋': [
        'Kusszeichen',
        'Küßende Lippen'
    ],
    '💅': [
        'Nagelpolnisch',
        'Finger',
        'Manicure',
        'Nonchalant'
    ],
    '🤳': [
        'Selfie',
        'Telefonkamera',
        'Selfie Hand'
    ],
    '🦴': ['Knochen'],
    '🧳': [
        'Gepäck',
        'Koffer'
    ],
    '🌂': [
        'Geschlossener Umbrella',
        'Einklappter Umbrella',
        'Rosa Umbrella'
    ],
    '☂️': ['Umbrella'],
    '☔': [
        'Umbrella mit Regendrops',
        'Regen',
        'Rainy'
    ],
    '🧵': ['Spool des Threads'],
    '🧶': ['Yarn-Kugel'],
    '💄': [
        'Lipstick',
        'Lippenglänz',
        'Make-up'
    ],
    '💍': [
        'Klingeln',
        'Diamantenring',
        'Engagement-Ring'
    ],
    '💎': [
        'Edelstein',
        'Diamant',
        'Edelstein',
        'Edelstein',
        'Juwel'
    ],
    '💥': [
        'Kollisionssymbol',
        'Knall',
        'Explodieren',
        'Auswirkung',
        'Roter Spark',
        'Explosion'
    ],
    '💫': [
        'Schwindel Symbol',
        'Kreis und Stern'
    ],
    '💦': [
        'Spaltendes Schweißsymbol',
        'Plewds',
        'Wasserspaltung',
        'Wassertropfen'
    ],
    '💨': [
        'Abwesend Dashing',
        'Schnell',
        'Dampf',
        'Verdampfen',
        'Wind',
        'Strichsymbol',
        'Windböen'
    ],
    '🌬️': [
        'Windenergie',
        'Wind bläst',
        'Mutter Natur',
        'Wind bläst Gesicht'
    ],
    '🐾': [
        'Pfoten Drucke',
        'Katzenpfoten Drucke',
        'Hundepfote Drucke',
        'Kätzchen Pfoten Drucke',
        'Welpen Pfoten Drucke'
    ],
    '🕸️': [
        'Spinnennetz',
        'Cobweb',
        'Web',
        'Spinnennetz'
    ],
    '🦠': [
        'Mikrobe',
        'Zelle',
        'Coronavirus',
        'COVID-19',
        'Jörg',
        'Mikroorganismus',
        'Virus'
    ],
    '💐': ['Blumenstrauß'],
    '🌍': [
        'Globe zeigt Europa-Afrika an',
        'Erde',
        'Globe',
        'Planet',
        'Welt',
        'Globe zeigt Europa und Afrika'
    ],
    '🌎': [
        'Globe zeigt Amerika',
        'Erde',
        'Globe',
        'Planet',
        'Welt'
    ],
    '🌏': [
        'Globe zeigt Asien-Australien',
        'Erde',
        'Globe',
        'Planet',
        'Welt',
        'Globe Asien und Australien'
    ],
    '🌐': [
        'Globe mit Meridians',
        'Internet',
        'World Wide Web',
        'WWW'
    ],
    '🌑': [
        'Neues Mondsymbol',
        'Dunkelmond',
        'Schattenmond',
        'Solar-Eclipse'
    ],
    '🌒': ['Wachsendes Crescent Mond Symbol'],
    '🌓': ['Symbol des ersten Quartals Mondes'],
    '🌔': ['Wachsendes Gibböses Mondsymbol'],
    '🌕': ['Vollmond-Symbol'],
    '🌖': ['Flüchtiges Gibböses Mondsymbol'],
    '🌗': ['Symbol des letzten Viertelmondes'],
    '🌘': ['Flüchtiges Crescent Mond Symbol'],
    '🌙': ['Halbmond'],
    '🌚': [
        'Neuer Mond mit Gesicht',
        'Gruseliger Mond',
        'Dunkelmond-Gesicht',
        'Molester Mond'
    ],
    '🌝': [
        'Vollmond mit Gesicht',
        'Moonface',
        'Smiley-Mond',
        'Lächelnder Mond'
    ],
    '🌛': ['Erstes Viertelmond mit Gesicht'],
    '🌜': ['Letztes Viertelmond mit Gesicht'],
    '🌞': [
        'Sonne mit Gesicht',
        'Smiley-Sonne',
        'Sunface',
        'Lächelnde Sonne'
    ],
    '☀️': [
        'Sonne',
        'Sonnenschein'
    ],
    '⭐': [
        'Stern',
        'Weißer mittlerer Stern'
    ],
    '🌟': [
        'Leuchtender Stern',
        'Glanzender Stern'
    ],
    '☁️': [
        'Wolke',
        'bewölkt',
        'Überfüllt'
    ],
    '⛅': ['Sonne hinter der Cloud'],
    '⛈️': [
        'Wolke mit Blitz und Regen',
        'Donner Wolke und Regen'
    ],
    '🌤️': ['Weiße Sonne mit kleiner Wolke'],
    '🌥️': [
        'Sonne hinter der großen Cloud',
        'Weiße Sonne hinter der Wolke'
    ],
    '🌦️': ['Weiße Sonne hinter der Wolke mit Regen'],
    '🌧️': ['Wolke mit Regen'],
    '🌨️': ['Wolke mit Schnee'],
    '🌩️': ['Wolke mit Blitz'],
    '🌪️': [
        'Tornado',
        'Wolke mit Tornado'
    ],
    '🌫️': ['Fog'],
    '🌈': [
        'Regenbogen',
        'Schwulen-Stolz',
        'Primärer Regenbogen'
    ],
    '❄️': [
        'Schneeflocken',
        'Schnee',
        'Schnee'
    ],
    '🌀': [
        'Zyklon',
        'Hurrikan',
        'Spirale',
        'Wirbel',
        'Tornado'
    ],
    '⚡': [
        'Hochspannungszeichen',
        'Blitzschlag',
        'Donnerblitz',
        'Hohe Spannung'
    ],
    '☃️': [
        'Schneemann',
        'Schneemann mit Schneeflocken'
    ],
    '⛄': [
        'Schneemann ohne Schnee',
        'Frostiger Schneemann',
        'Olaf',
        'Schneemann'
    ],
    '☄️': ['Komet'],
    '🔥': [
        'Feuer',
        'Flamme',
        'Heiß',
        'Lit',
        'Snapstreak'
    ],
    '💧': [
        'Droplet',
        'Wasser',
        'Wassertropfen'
    ],
    '✨': [
        'Funkeln',
        'Glanz',
        'Shiny',
        'Neu'
    ],
    '🌊': [
        'Wasserwelle',
        'Strand',
        'Ozeanwelle',
        'Meer'
    ],
    '🎄': [
        'Weihnachtsbaum',
        'Weihnachten',
        'Weihnachtsbaum'
    ],
    '🎃': [
        'Kürbislaterne',
        'Halloween',
        'Kürbis'
    ],
    '🌻': [
        'Sonnenblume',
        'Gelbe Blume'
    ],
    '🌼': [
        'Blossom',
        'Blühende Blume',
        'Daisy',
        'Gelbe Blume'
    ],
    '🌷': ['Tulip'],
    '🌹': [
        'Rosenblume',
        'Rote Rose'
    ],
    '☘️': [
        'Schamfelsen',
        'Klee',
        'Trefoil'
    ],
    '🍀': [
        'Vier Blattkleid',
        'Klee',
        'Irland',
        'Glück',
        'Glücksspiel'
    ],
    '🌸': [
        'Cherry Blossom',
        'Rosa Blume',
        'Sakura'
    ],
    '💮': [
        'Weiße Blume',
        'Cherry Blossom',
        'Doily Papier',
        'Gut Fertig Stempel'
    ],
    '🌺': ['Hibiscus'],
    '🏵️': ['Rosette'],
    '🌱': [
        'Seedling',
        'Frühling',
        'Sprout',
        'Vernichten'
    ],
    '🌲': [
        'Immergrüner Baum',
        'Fierbaum',
        'Kiefernbaum'
    ],
    '🌳': [
        'Dezimalbaum',
        'Abgerundeter Baum'
    ],
    '🌴': [
        'Palm',
        'Kokosnussbaum'
    ],
    '🎋': [
        'Tanabata-Baum',
        'Tanabata',
        'Wunschbaum'
    ],
    '🎍': [
        'Kiefer Dekoration',
        'Bambus',
        'Kadomatsu',
        'Neujahr Dekoration'
    ],
    '🌵': [
        'Cactus',
        'Desert'
    ],
    '🌾': [
        'Reiss-Schafe',
        'Ernte',
        'Landwirtschaft',
        'Weizen',
        'Ohr des Reis'
    ],
    '🌿': [
        'Kräuter',
        'Ernte',
        'Pflanze'
    ],
    '🍁': [
        'Ahornblätter',
        'Kanada',
        'Kanadisch',
        'Ahorn'
    ],
    '🍂': [
        'Verdorbenes Blatt',
        'Herbstblätter',
        'Herbstblätter',
        'Braune Blätter',
        'Fallblätter',
        'Gefallene Blätter'
    ],
    '🍃': [
        'Blätterfluttern im Wind',
        'Grüne Blätter',
        'Frühling'
    ],
    '🪴': ['Topfpflanze'],
    '🔑': [
        'Schlüssel',
        'Goldschlüssel'
    ],
    '🗝️': ['Alter Schlüssel'],
    '🔨': [
        'Hammer',
        'Klauenhammer',
        'Handyman',
        'Werkzeug'
    ],
    '⛏️': [
        'Auswählen',
        'Spitzhacke'
    ],
    '🪓': ['Axt'],
    '🪚': ['Zimmermannssäge'],
    '🪛': ['Schraubendreher'],
    '🪝': ['Haken'],
    '🪠': ['Plunger'],
    '🪣': ['Eimer'],
    '🔩': [
        'Nuss und Bolzen',
        'Bolzen',
        'Schraube'
    ],
    '🗜️': [
        'Klammer',
        'Tisch-Vice',
        'WinZip',
        'Komprimierung'
    ],
    '🔒': [
        'Gesperrt',
        'Geschlossenes Schloss',
        'Schloß'
    ],
    '🔓': [
        'Entsperrt',
        'Padlock öffnen',
        'Öffne Sperre'
    ],
    '🔏': [
        'Gesperrt mit Stift',
        'Sperren und Stift',
        'Mit Brunnenstift sperren',
        'Mit Tintenstift sperren'
    ],
    '🔐': [
        'Mit Schlüssel gesperrt',
        'Geschlossene Sperre mit Schlüssel'
    ],
    '🗡️': [
        'Dagger',
        'Messerwaffe'
    ],
    '⚔️': ['Gekreuzte Schwerter'],
    '🔫': [
        'Pistol',
        'Waffe',
        'Revolver',
        'Squirtpistole',
        'Wasserpistole',
        'Wasserpistole'
    ],
    '🧰': ['Werkzeugkasten'],
    '🧲': ['Magnet'],
    '⛓️': ['Ketten'],
    '💉': [
        'Syringe',
        'Blutspende',
        'Bluttest',
        'Nadel',
        'Impfung'
    ],
    '🧬': [
        'DNS',
        'DNS-Doppelhelix'
    ],
    '🧪': ['Röhre testen'],
    '🛏️': [
        'Bett',
        'Schlafzimmer'
    ],
    '🛋️': [
        'Couch und Lampe',
        'Lounge',
        'Setting',
        'Sofa'
    ],
    '🪑': ['Stuhl'],
    '🚪': [
        'Tür',
        'Tür',
        'Haustür'
    ],
    '🪟': ['Fenster'],
    '🪜': ['Leiter'],
    '🪞': ['Spiegeln'],
    '🚽': [
        'Toilette',
        'Badezimmer',
        'Loo',
        'Ruheraum',
        'KW'
    ],
    '🚿': [
        'Duschen',
        'Duschkopf'
    ],
    '🛁': [
        'Badewanne',
        'Luftblase'
    ],
    '🧴': ['Lotion Flasche'],
    '🧷': ['Sicherheits-Pin'],
    '🧺': ['Korb'],
    '🧻': [
        'Papierrollen',
        'Toilettenpapier'
    ],
    '🧼': ['Seifenbalken'],
    '🧽': ['Schwamm'],
    '🧯': ['Feuerlöscher'],
    '🚬': [
        'Zigarette',
        'Rauchsymbol'
    ],
    '⚰️': [
        'Coffin',
        'Casket',
        'Beerdigung'
    ],
    '⚱️': [
        'Beerdigungsurne',
        'Vase'
    ],
    '🛡️': ['Schild'],
    '⚙️': [
        'Ausrüstung',
        'Einstellungen',
        'Optionen'
    ],
    '⚖️': [
        'Saldo Skalierung',
        'Maßstäbe der Gerechtigkeit'
    ],
    '🔗': [
        'Link',
        'Kette',
        'Hyperlink',
        'Verknüpfte Kette'
    ],
    '💀': [
        'Schädel',
        'Tod',
        'Grauer Schädel',
        'Skelett'
    ],
    '☠️': ['Schädel und Kreuzknochen'],
    '🦻': ['Ohr mit Hörhilfe'],
    '🎡': [
        'Ferris Rad',
        'Großrad',
        'Fairgroundl',
        'Beobachtungsrad'
    ],
    '⛽': [
        'Kraftstoffpumpe',
        'Öl',
        'Benzin',
        'Gas'
    ],
    '🚨': [
        'Polizeiwagen Revolving Light',
        'Notlicht',
        'Blinkendes Licht',
        'Siren'
    ],
    '🚥': ['Horizontale Ampel'],
    '🚦': ['Vertikale Ampel'],
    '⚓': [
        'Admiralitätsmuster-Anker',
        'Fischer'
    ],
    '🚧': [
        'Bauschild',
        'Schwarzes und gelbes gestreiftes Schild'
    ],
    '🪂': ['Parachute'],
    '💺': [
        'Sitzplatz',
        'Busflugzeug Zugflugzeug'
    ],
    '🪐': ['Samuel'],
    '🎆': [
        'Feuerwerk',
        'Explosion'
    ],
    '🎇': [
        'Senko Hanabi',
        'Feuerwerksparkler'
    ],
    '💷': [
        'Pfund Banknote',
        '£20 Notiz',
        'Zwanzig Quid Notiz',
        'Banknote mit Pfund Schild'
    ],
    '💶': [
        'Euro Banknote',
        '100 € Notiz',
        'Banknote mit Euro-Schild'
    ],
    '💵': [
        'Dollar-Banknote',
        '$1 Notiz',
        'Banknote mit Dollar-Signal',
        'Dollar-Rechnung',
        'Amerikanischer Dollar'
    ],
    '💴': [
        'Yen Banknote',
        '¥1000 Notiz',
        'Yen Notiz',
        'Banknote mit Yen Schild'
    ],
    '⛺': ['Lagerzelt'],
    '⛲': [
        'Fontäne',
        'Wassermerkmal',
        'Wasserbrunnen',
        'Parken'
    ],
    '💰': [
        'Geldbeutel',
        'Geldbeutel',
        'Reiche',
        '$'
    ],
    '💸': [
        'Geld mit Flügeln',
        'Fliegengeld',
        ' Verlierendes Geld'
    ],
    '🏷️': ['Label Tag'],
    '🔖': [
        'Lesezeichen',
        'Preis Tag',
        'Markierung'
    ],
    '📑': ['Lesezeichen-Tabs'],
    '📯': [
        'Posthorn',
        'Bugle',
        'Französisches Horn'
    ],
    '🪁': ['Kite'],
    '🪀': ['Yo-Y'],
    '🎊': [
        'Confetti Ball',
        'Confetti'
    ],
    '🎉': [
        'Party Popper',
        'Feier',
        'Party Hut'
    ],
    '🎈': [
        'Ballon',
        'Gruppe',
        'Roter Ballon'
    ],
    '🌡️': [
        'Thermometer',
        'Heißes Wetter',
        'Temperatur'
    ],
    '🛢️': ['Öltrummel'],
    '💣': ['Bombe'],
    '🔪': [
        'Küchenmesser',
        'Messer',
        'Metzgermesser',
        'Hocho'
    ],
    '🏺': [
        'Amphora',
        'Narr',
        'Vase'
    ],
    '🗺️': ['Weltkarte'],
    '🎼': [
        'Musical Punktzahl',
        'Plattenmusik',
        'Treble Clef'
    ],
    '🎬': [
        'Klappenbrett',
        'Schneide',
        'Aktion',
        'Regisseur',
        'Film Schiefer'
    ],
    '🎻': [
        'Geige',
        'Streichquartett',
        'Die kleinste Geige der Welt'
    ],
    '🎺': [
        'Trompete',
        'Horn',
        'Jazz'
    ],
    '🎸': [
        'Gitarre',
        'Akustische Gitarre',
        'Bass-Gitarre',
        'Elektrische Gitarre'
    ],
    '🎷': [
        'Saxophon',
        'Jazz',
        'Sax'
    ],
    '🥁': [
        'Trommel',
        'Trommel mit Trommeln'
    ],
    '🎹': [
        'Klavier',
        'Musiktastatur'
    ],
    '🪕': ['Banjo'],
    '🪗': ['Akkordeon'],
    '🪘': ['Lange Trommel'],
    '🎨': [
        'Interpretenpalette',
        'Kunst',
        'Malerei'
    ],
    '🧩': [
        'Puzzleteil',
        'Puzzleteil'
    ],
    '🎲': [
        'Spiel sterben',
        'Würfel'
    ],
    '🎭': [
        'Darstellende Kunst',
        'Theater',
        'Theater',
        'Drama-Masken',
        'Griechische Theatermasken',
        'Tragedy und komische Masken',
        'Venedig'
    ],
    '🔍': [
        'Vergrößertes Glas links',
        'Magnifier',
        'Suchsymbol',
        'Linkes Vergrößerungsglas',
        'Suchen'
    ],
    '🔎': [
        'Vergrößertes Glas rechts gekachelt',
        'Magnifier',
        'Suchsymbol',
        'Rechts-Punkt-Vergrößerungsglas',
        'Suchen'
    ],
    '⌛': [
        'Stundenglas erledigt',
        'Stundenglas'
    ],
    '⏳': [
        'Stundenglas nicht fertig',
        'Stundenglas mit fließendem Sand'
    ],
    '🕐': [
        'Eine Ohr Uhr',
        'Uhr Gesicht eins Ohruhr'
    ],
    '🕜': ['Uhr Gesicht 1 bis 30 Uhr'],
    '🕑': [
        'Zwei-Ohr Uhr',
        'Zwei Uhr Uhr Uhr'
    ],
    '🕝': ['Uhr-Gesicht Zwei-Dreißig'],
    '🕒': [
        'Drei Uhr',
        'Drei Uhr Uhr Uhr'
    ],
    '🕞': ['Uhr Gesicht drei-dreißig'],
    '🕓': [
        'Vier Uhr',
        'Vier Uhr Uhr'
    ],
    '🕟': ['Uhr Gesicht Vier-Dreißig'],
    '🕔': [
        'Fünf Uhr',
        'Fünf Uhr Uhr Uhr'
    ],
    '🕠': ['Uhr-Gesicht Fünf-Dreißig'],
    '🕕': [
        'Sechs Ohruhr',
        'Uhr Gesicht sechs Ohruhr'
    ],
    '🕡': ['Uhr Gesicht Sechs-Dreißig'],
    '🕖': [
        'Sieben Uhr',
        'Uhren Gesicht sieben Ohruhr'
    ],
    '🕢': ['Uhr-Gesicht Sieben-Dreißig'],
    '🕗': [
        'Acht Ohr Uhr',
        'Uhr acht Uhr Ohr'
    ],
    '🕣': ['Uhr Gesicht acht-dreißig'],
    '🕘': [
        'Neun Ohr Uhr',
        'Uhr Nine Ohruhr'
    ],
    '🕤': ['Uhr Gesicht neundreißig'],
    '🕙': [
        'Zehn O\'Clock',
        'Zehn Uhr Uhr Uhr'
    ],
    '🕥': ['Zehn - dreißig Uhr'],
    '🕚': [
        'Elf Ohr',
        'Uhr Gesicht elf Ohruhr'
    ],
    '🕦': ['Uhr-Gesicht elf bis dreißig'],
    '🕛': [
        'Zwölf Ohr',
        'Uhr Zwölf Ohrzeit'
    ],
    '🕧': ['Uhr-Gesicht Zwölf-Dreißig'],
    '♨️': [
        'Heiße Quellen',
        'Onsen',
        'Dampf'
    ],
    '💈': [
        'Barberpol',
        'Barberladen',
        'Barber\'s Streifen',
        'Friseur'
    ],
    '🎪': [
        'Zirkuszelt',
        'Großer Oben',
        'Zirkus'
    ],
    '💢': [
        'Zorn Symbol',
        'Zorn Schild',
        'Venenpop'
    ],
    '🗯️': [
        'Bubble des rechten Zorns',
        'Zig Zag Bubble',
        'Wütende Sprechblase'
    ],
    '💊': [
        'Pill',
        'Kapsel',
        'Tablets',
        'Drogen'
    ],
    '🎎': [
        'Puppen',
        'Hinamatsuri',
        'Imperiale Puppen',
        'Japanische Puppen'
    ],
    '🎏': [
        'Carp Streamer',
        'Fischflagge',
        'Koinobori',
        'Windsocken'
    ],
    '🎐': [
        'Windschwamm',
        'Furin',
        'Gelee',
        'Windglocke'
    ],
    '🎀': [
        'Ribbon-Bogen',
        'Rosa Bogen',
        'Bogen'
    ],
    '🎁': [
        'Gewickeltes Geschenk',
        'Geburtstag Geschenk',
        'Weihnachtsgeschenk',
        'Geschenk',
        'Geschenkbox',
        'Präsent',
        'Geschenk ummantelt'
    ],
    '🎫': [
        'Ticket',
        'Ticket-Stub',
        'World Tour Ticket'
    ],
    '🃏': [
        'Joker',
        'Joker-Karte',
        'Karten Black Joker spielen'
    ],
    '💡': [
        'Glühbirne',
        'Idee',
        'Elektrische Glühbirne'
    ],
    '🔦': [
        'Taschenlampe',
        'Fackel',
        'Elektrische Fackel'
    ],
    '🏮': [
        'Laterne Rotes Papier',
        'Asiatische Laterne',
        'Japanische Laterne',
        'Rote Laterne',
        'Izakaja Laterne'
    ],
    '📦': [
        'Paket',
        'Kiste',
        'Paket'
    ],
    '📇': [
        'Karte indexieren',
        'Rolodex',
        'Systemkarte',
        'Kartenindex'
    ],
    '🕳️': ['Loch'],
    '👁️‍🗨️': [
        'I Am A Witness',
        'Eye in Speech Bubble'
    ],
    '⚜️': [
        'Fleur-de-lis',
        'Späher',
        'Neue Orleans Heilige'
    ],
    '⚗️': ['Alembic'],
    '🕯️': ['Kerze'],
    '🖼️': [
        'Gerahmtes Bild',
        'Malerei',
        'Bilderrahmen',
        'Rahmen mit Bild'
    ],
    '🛍️': ['Einkaufstaschen'],
    '🎟️': ['Eintrittskarten'],
    '🛎️': ['Bellhop Bell'],
    '🧾': ['Beleg'],
    '🧮': ['Abacus'],
    '🧫': ['Petri Disch'],
    '🧹': [
        'Broom',
        'Pinsel',
        'Wischen'
    ],
    '🎰': [
        'Slot-Maschine',
        'Kasino',
        'Obstmaschine',
        'Spielen',
        'Poker-Maschine'
    ],
    '🦽': ['Manueller Rollstuhl'],
    '🦼': ['Motorischer Rollstuhl'],
    '🪔': ['Diya-Lampe'],
    '🦯': ['White Cane'],
    '🩸': ['Bluttropfen'],
    '🩹': ['Kleber Verband'],
    '🩺': ['Stethoskop'],
    '🪶': ['Feder'],
    '🪤': ['Mausfalle'],
    '🫖': ['Teapot'],
    '🪨': ['Felsen'],
    '🪵': ['Holz'],
    '🪄': ['Zauberstab'],
    '🔮': [
        'Kristallkugel',
        'Clairvoyant',
        'Glücksgeschenk',
        'Psychisch',
        'Violetter Kristall'
    ],
    '🪅': ['Pin<unk> ata'],
    '🪆': [
        'Schachteln Puppen',
        'Matryoschka'
    ],
    '🪡': ['Nähnadel'],
    '🪢': ['Knoten'],
    '🪙': ['Münze'],
    '🪃': ['Boomerang'],
    '🪥': ['Zahnbürste'],
    '🪦': ['Kopfstein'],
    '🪧': ['Placard'],
    '🪒': ['Razor']
};