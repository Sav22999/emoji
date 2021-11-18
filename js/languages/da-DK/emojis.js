// descriptions took from Emojipedia.org
lang = 'da';
//use i18n language code of the browser, more details: https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/i18n/LanguageCode
titles_language[lang] = {
    '🔍': 'Resultater',
    '🕒': 'Mest anvendte emojis',
    '😀': 'Smileys',
    '🙋': 'Personer',
    '🦊': 'Dyr',
    '🅰️': 'Symboler',
    '🍎': 'Mad og drikkevarer',
    '🏳️‍🌈': 'Flag',
    '🏊': 'Sport',
    '✈️': 'Rejser og steder',
    '🖱️': 'Teknologier og kontor',
    '👗': 'Tøj og tilbehør',
    '🖐️': 'Hænder og dele til karrosseriet',
    '🛎️': 'Andet'
};
emojis_language[lang] = [];
/*search*/
emojis_language[lang][0] = {};
/*smileys*/
emojis_language[lang][2] = {
    '😀': [
        'Grinning Ansigt',
        ':)',
        'Glad Ansigt',
        'Smiley Ansigt'
    ],
    '😃': [
        'Grinning ansigt med store øjne',
        ':D',
        'Glad Ansigt',
        'Smiley Ansigt',
        'Smilende ansigt med Open Mouth'
    ],
    '😄': [
        'Grinning Ansigt med Smilende Øjne',
        'Glad Ansigt',
        'Smiley Ansigt',
        'Grinning Ansigt Med Squinting Øjne',
        'Smilende ansigt med Open Mouth og Smiling Øjne'
    ],
    '😁': [
        'Lysende ansigt med Smilende øjne',
        'Grinning Ansigt med Smilende Øjne'
    ],
    '😆': [
        'Grinning Squinting Ansigt',
        'xD',
        '><',
        'Stor Grin',
        'Lukket-Øjne Smile',
        'Lating',
        'Grinning Ansigt Med Stærkt Lukkede Øjne',
        'Smilende ansigt med åben Mouth og stramt lukkede øjne'
    ],
    '😅': [
        'Grinning Ansigt med Sved',
        'Motion',
        'Glad Sved',
        'Grinning Ansigt med Squinting Øjne og Sweat Drop',
        'Smilende ansigt med åben Mouth og kold sved'
    ],
    '🤣': [
        'ROFL',
        'Rullende på gulvet Lating'
    ],
    '😂': [
        'Ansigt med Tears af Glæde',
        'Lating',
        'Lating Græder',
        'Latende Tårer',
        'LOL'
    ],
    '🙂': [
        'Lidt Smilende Ansigt',
        ':)',
        'Lidt Glad',
        'Dette Er Fint'
    ],
    '🙃': [
        'Upside-Down Ansigt',
        'Sarcasm',
        'Silly',
        'Upside Nedad Ansigt'
    ],
    '😉': [
        'Vinkende Ansigt',
        ';)',
        'Vink',
        'Vink Ansigt',
        'Blinke Ansigt'
    ],
    '😊': [
        'Smilende ansigt med Smilende øjne',
        '^^',
        'Glad Ansigt',
        'Smil',
        'Smiley Ansigt'
    ],
    '😇': [
        'Smilende ansigt med Halo',
        'Engel',
        'Halo'
    ],
    '🥰': [
        'Smilende ansigt med hjerter',
        'I Kærlighed Ansigt',
        'Smilende ansigt med Smilende øjne og tre hjerter'
    ],
    '😍': [
        'Smilende ansigt med hjerte - øjne',
        '*.*',
        'Hjerte Øjne',
        'Hjerte Ansigt',
        'Smilende ansigt med hjerteformet øjne'
    ],
    '🤩': [
        'Stjerne-Struck',
        'Ophævet',
        'Stjerne Øjne',
        'Stjerneklar Eyed',
        'Wow Ansigt',
        'Ansigt Med Starry Eyes',
        'Grinning Ansigt med Star Eyes'
    ],
    '😘': [
        'Ansigt blæser et kys',
        ':*',
        ':-*',
        'Blæse Et Kys',
        'Blæsende Kys',
        'Kysser',
        'Ansigt Kaste et kys'
    ],
    '😗': [
        'Kysser Ansigt',
        ':*',
        ':-*',
        'Ænder Ansigt',
        'Kissy Face',
        'Fløjtning'
    ],
    '☺️': [
        'Smilende Ansigt',
        'Glad Ansigt',
        'Smiley Ansigt',
        'Smilende',
        'Hvid Smilende Ansigt'
    ],
    '😚': [
        'Kys ansigt med lukkede øjne',
        'Kys Ansigt',
        'Kissy Face'
    ],
    '😙': [
        'Kys ansigt med Smilende Øjne',
        'Kys Ansigt',
        'Kissy',
        'Fløjt',
        'Fløjtning'
    ],
    '😋': [
        'Ansigt Besparelse Mad',
        'Goofy',
        'Sulten',
        'Smilende Ansigt Licking Læber',
        'Ansigt At Gemme Lækker Mad',
        'Yum Yum'
    ],
    '😛': [
        'Ansigt med tunge',
        ':P',
        'Cheeky',
        'Tunge Ansigt',
        'Tongue-Out',
        'Ansigt med Stuck-Out tunge'
    ],
    '😜': [
        'Blinke ansigt med tunge',
        ';P',
        'Skøre',
        'Skøre Ansigt',
        'Bølger Ansigt Med Stuck-Out Tunge',
        'Ansigt med Stuck-Out tunge og Winking Øje'
    ],
    '🤪': [
        'Zany Face',
        'Skøre Øjne',
        'Ophævet',
        'Vilde',
        'Goofy Face',
        'Grinning ansigt med en stor og en lille øje'
    ],
    '😝': [
        'Kæmpende ansigt med tunge',
        'xP',
        'Tunge Ud',
        'Ansigt med Stuck Out tunge og stramt lukket øjne',
        'Ansigt med Stuck-Out tunge og Stærkt lukket øjne'
    ],
    '🤑': [
        'Money-Mouth Ansigt',
        ':$',
        'Dollar Sign Eyes',
        'Penge Ansigt',
        'Rig'
    ],
    '🤗': [
        'Graver Ansigt',
        'Kniv',
        'Gravning',
        'Bugserbåde',
        'Glad Ansigt Med Hugging Hænder'
    ],
    '🤭': [
        'Ups',
        'Ansigt med hånd over Mouth',
        'Smilende ansigt med Smilende øjne og hånd dækker Mouth'
    ],
    '🤫': [
        'Shh',
        'Skub',
        'Lukker Ansigt',
        'Formand',
        'Stille',
        'Tavshed',
        'Lydløs',
        'Ansigt med Finger dækker lukkede læber'
    ],
    '🤔': [
        'Hvad',
        '?',
        'Hmm',
        'Tænker Ansigt',
        'Chin Tommelfinger',
        'Tænker',
        'Kaste Skygge'
    ],
    '🤐': [
        'Postnummer',
        'Zipper-Mouth Ansigt',
        'Læber Forseglet',
        'Forseglede Læber',
        'Zip Det',
        'Ansigt med en lynlås Mouth'
    ],
    '🤨': [
        'Ansigt med hævet øjenbryn',
        'Colbert',
        'Klippen',
        'Ansigt Med Hævet Øjenbryn',
        'Ansigt med Én Øjenbryg Hævet'
    ],
    '😐': [
        'Neutral Ansigt',
        ':|',
        'Ansigt Med Lige Mundhed',
        'Lige Ansigt'
    ],
    '😑': [
        'Udtryksfri Ansigt',
        '-_-',
        'Ansigt Med Lige Mundhed',
        'Lige Ansigt'
    ],
    '😶': [
        'Ansigt Uden Mundhed',
        'Tom Ansigt',
        'Mundløs',
        'Tavshed',
        'Lydløs'
    ],
    '😏': [
        'Smirkende Ansigt',
        'Flirtende',
        'Seksuel Ansigt',
        'Smug Ansigt',
        'Foreslået Smil'
    ],
    '😒': [
        'Unamused Ansigt',
        'Utilfreds',
        'Meh',
        'Side-Øje',
        'Uimponeret'
    ],
    '🙄': [
        'Ansigt med rullende øjne',
        'Eye Roll'
    ],
    '😬': [
        'Grimacing Ansigt',
        'Akavet',
        'Eek',
        'Fod I Bjerget',
        'Nervesystemet',
        'Snapchat Mutual #1 Bedste Ven'
    ],
    '🤥': [
        'Liggende Ansigt',
        'Liar',
        'Lang Næse',
        'Pinocchio'
    ],
    '😌': [
        'Relieved Face',
        'Indhold',
        'Forpagtet'
    ],
    '😔': [
        'Beklager',
        'Pensive Ansigt',
        'Pensive',
        'Trist',
        'Sadface',
        'Sorg',
        'Trist Pensiv Ansigt'
    ],
    '😪': [
        'Søvnfuld Ansigt',
        'Side-Riv',
        'Snot Boble'
    ],
    '🤤': [
        'Saliva',
        'Drooling Face',
        'Drool'
    ],
    '😴': [
        'Søvn Ansigt',
        'Zzz',
        'Søvn Ansigt',
        'Snorken',
        'Zzz Ansigt'
    ],
    '🥱': ['Gaben Ansigt'],
    '😷': [
        'Ansigt med medicinsk maske',
        'Coronavirus',
        'COVID-19',
        'Maske Ansigt',
        'Kirurgisk Maske'
    ],
    '🤒': [
        'Ansigt med termometer',
        'Ill',
        'Syg'
    ],
    '🤕': [
        'Ansigt med head-bandage',
        'Båndet Hoved',
        'Klumse',
        'Tilfældet'
    ],
    '🤢': [
        'Kvalme Ansigt',
        'Afsky',
        'Grøn Ansigt',
        'Opkast'
    ],
    '🤮': [
        'Ansigt Opkastning',
        'Spew',
        'Bleah',
        'Bleurgh',
        'Yuk',
        'Yuck',
        'Øv',
        'Spew',
        'Kaster Op',
        'Opkast',
        'Ansigt med åben Mouth Opkastning'
    ],
    '🤧': [
        'Nysen Ansigt',
        'Gesundheit'
    ],
    '🥵': [
        'Varmt Ansigt',
        'Overophedet Ansigt'
    ],
    '🥶': [
        'Koldt Ansigt',
        'Kølig',
        'Kuldegysning',
        'Frysende Ansigt'
    ],
    '🥴': [
        'Woozy Ansigt',
        'Drik Ansigt',
        'Ansigt med Une Øjne og Wavy Mouth'
    ],
    '😵': [
        'Dizzy Face',
        'Kryds Øjne Ansigt',
        'Spiral Øjne Ansigt'
    ],
    '🤯': [
        'Eksploderende Hoved',
        'Sind Blown',
        'Chokket ansigt med eksploderende hoved'
    ],
    '🤠': [
        'Cowboy Hat Ansigt',
        'Cowboy',
        'Cowboy Ansigt',
        'Ansigt med Cowboy Hat'
    ],
    '🥳': [
        'Fest Ansigt',
        'Fest Ansigt',
        'Ansigt med Party Horn og Party Hat'
    ],
    '😎': [
        'Smilende ansigt med solbriller',
        'Kølig',
        'Gensidig Bedste Venner (Snapchat)',
        'Solbriller'
    ],
    '🤓': [
        'Nerd Ansigt',
        'Nerdy'
    ],
    '🧐': ['Ansigt med Monocle'],
    '😕': [
        'Forvirret Ansigt',
        ':/',
        ':S',
        'Ikke-plukket',
        'Puslespil'
    ],
    '😟': [
        'Bekymret Ansigt',
        ':(',
        'Trist',
        'Sadface'
    ],
    '🙁': [
        'Lidt Svende Ansigt',
        ':(',
        'Lidt Trist'
    ],
    '☹️': [
        'Svimmelhed Ansigt',
        ':(',
        'Megafrown',
        'Hvid Krævende Ansigt'
    ],
    '😮': [
        'Wow',
        ':O',
        'Åh mig!',
        'Ansigt med Open Mouth',
        'Åbn Mundhed',
        'Overrasket Ansigt Med Open Mouth'
    ],
    '😯': [
        'Neddæmpet Ansigt',
        ':O',
        'Overraskelse',
        'Overrasket Ansigt'
    ],
    '😲': [
        'Chokket Ansigt',
        ':O',
        'Wow',
        'Fortryllet Ansigt',
        'Drik Ansigt',
        'Gasping Ansigt'
    ],
    '😳': [
        'Skyllet Ansigt',
        ':$',
        'Blushing Ansigt',
        'Embarrasse',
        'Skam',
        'Ansigt Med Bredt Åbne Øjne'
    ],
    '🥺': [
        'Pleading Ansigt',
        ':(',
        'Begynder',
        'Glansfulde Øjne',
        'Simp',
        'Ansigt med Pleading Eyes'
    ],
    '😦': [
        'Bekæmpelse af ansigt med åben Mouth',
        'D:',
        'Gaben'
    ],
    '😨': [
        'Scared',
        'D:',
        'Fearful Ansigt',
        'Overrasket'
    ],
    '😰': [
        'Angst ansigt med sved',
        'Blå Ansigt',
        'Bekymret Ansigt',
        'Nervøsitet Ansigt',
        'Ansigt med Open Mouth og Kold Sweat'
    ],
    '😥': [
        'Trist, men levet ansigt',
        ':\'(',
        'Øjenbrynet Sved',
        'Skuffet men levet ansigt'
    ],
    '😢': [
        'Græder Ansigt',
        ':\'(',
        'Råber',
        'Riv'
    ],
    '😭': [
        'Kraftigt Grædende Ansigt',
        'Bawling',
        'Råber',
        'Trist Tårer',
        'Sobbing'
    ],
    '😱': [
        'Ansigt Screaming i frygt',
        'Hjem Alene',
        'Skrue',
        'Screaming Ansigt'
    ],
    '😖': [
        'Konfunderet Ansigt',
        'Bedragende Mundhed',
        'Skrab Ansigt'
    ],
    '😣': [
        'Vedvarende Ansigt',
        'Hjælpless Ansigt',
        'Skrab Øjne'
    ],
    '😞': [
        'Skuffet Ansigt',
        ':(',
        'Trist',
        'Sadface'
    ],
    '😓': [
        'Downcast Ansigt med Sved',
        'Hårdt Arbejde',
        'Trist Svedtendens Ansigt',
        'Ansigt med kold sved'
    ],
    '😩': [
        'Weary Ansigt',
        'Horisontal Ansigt',
        'Wailing'
    ],
    '😫': [
        'Træt Ansigt',
        'Udmattet',
        'Fed Op',
        'Horisontal Ansigt'
    ],
    '😤': [
        'Ansigt med Steam fra næse',
        'Luftning af Grievances',
        'Frustreret',
        'Gal Ansigt',
        'Dæmpning',
        'Huffing Med Vrede Ansigt'
    ],
    '😡': [
        'Kør Ansigt',
        'Vred Ansigt',
        'Grumpy Ansigt',
        'Gal Ansigt',
        'Rød Ansigt'
    ],
    '😠': [
        'Vred Ansigt',
        'Vred',
        'Grumpy Ansigt'
    ],
    '🤬': [
        'Kløende',
        '@#$%&!',
        'Ansigt med symboler på Mouth',
        'Forbandelse',
        'Kusser',
        'Grawlix',
        'Ansigt Med Symboler Over Mouth',
        'Seriøs ansigt med symboler dækker Mouth'
    ],
    '🥲': ['Smilende ansigt med rive'],
    '😮‍💨': [
        'Face Exhaling',
        'Sigh'
    ],
    '😵‍💫': [
        'Face with Spiral Eyes',
        'Dizzy Face'
    ],
    '🥸': ['Forklædt Ansigt'],
    '😈': [
        'Smilende ansigt med horn',
        'Djævel',
        'Djævelhorn',
        'Glad Djævelen',
        'Lilla Djævel',
        'Rød Djævel'
    ],
    '👿': [
        'Vred ansigt med horn',
        'Djævel',
        'Djævelhorn',
        'Lilla Djævel',
        'Lilla Goblin',
        'Trist Djævel',
        'Imp'
    ],
    '🤡': [
        'Klovt Ansigt',
        'Uhyggelig Klovn',
        'Evil Clown',
        'Scary Klovn'
    ],
    '👽': [
        'Udlænding',
        'ET'
    ],
    '👾': [
        'Alien Monster',
        'Mellemrum Invader',
        'Video Spil Monster'
    ],
    '🤖': [
        'Robot',
        'Robot Ansigt'
    ],
    '👹': [
        'Ogre',
        'Maske Ansigt',
        'Oni',
        'Rødt Monster',
        'Japansk Ogre'
    ],
    '👻': [
        'Spøgelse',
        'Halloween'
    ],
    '🗣️': [
        'Højttaler Hoved',
        'Mansplaining',
        'Replik',
        'Områb',
        'Taler hoved i Silhouette'
    ],
    '👤': [
        'Buste i Silhouette',
        'Skygge',
        'Silhouette',
        'Bruger',
        'Personens silhuet'
    ],
    '🫂': ['Folk Hugging'],
    '👥': [
        'Buster i Silhouette',
        'Skygger',
        'Silhouettes',
        'Brugere',
        'Silhouette af to mennesker'
    ]
};
/*people*/
emojis_language[lang][3] = {
    '👶{{skin_tone}}': [
        'Baby',
        'Barn',
        'Toddler'
    ],
    '🧒{{skin_tone}}': [
        'Barn',
        'Køn Neutral Barn'
    ],
    '👧{{skin_tone}}': ['Pige'],
    '🧑{{skin_tone}}': [
        'Person',
        'Køn Neutral Voksen',
        'Voksen'
    ],
    '👱{{skin_tone}}': [
        'Person: Blond Hår',
        'Blond',
        'Blonde',
        'Blond Mand',
        'Person med Blond hår',
        'Mand Med Blonde Hår'
    ],
    '👨{{skin_tone}}': [
        'Mand',
        'Mand',
        'Moustache Mand'
    ],
    '🧔{{skin_tone}}': [
        'Mennesk: Skæg',
        'Skæg',
        'Bjørnet Mand',
        'Medbragt Person'
    ],
    '👨{{skin_tone}}‍🦰': [
        'Man: Rød Hår',
        'Ingefær Mand',
        'Man Redhead',
        'Mand Med Røde Hår'
    ],
    '👨{{skin_tone}}‍🦱': [
        'Mand: Krøllet Hår',
        'Mand Med Krøllet Hår'
    ],
    '👨{{skin_tone}}‍🦳': [
        'Mand: Hvide Hår',
        'Mand Med Grå Hår'
    ],
    '👨{{skin_tone}}‍🦲': [
        'Mand: Skald',
        'Mand Med Ingen Hår'
    ],
    '👩{{skin_tone}}': [
        'Kvinde',
        'Kvinde',
        'Klar',
        'Gul Kvinde'
    ],
    '👩{{skin_tone}}‍🦰': [
        'Kvinde: Rød Hår',
        'Ingefær Kvinde',
        'Woman Redhead',
        'Kvinde Med Rød Hår'
    ],
    '👩{{skin_tone}}‍🦱': [
        'Kvinde: Krøllet Hår',
        'Kvinde Med Krøllet Hår'
    ],
    '👩{{skin_tone}}‍🦳': [
        'Kvinder: Hvidt Hår',
        'Kvinde Med Grå Hår'
    ],
    '👩{{skin_tone}}‍🦲': [
        'Kvinde: Sikket',
        'Kvinde Med Ingen Hår'
    ],
    '👱{{skin_tone}}‍♀️': [
        'Kvinde: Blond Hår',
        'Kvinde Med Blonde Hår'
    ],
    '👱{{skin_tone}}‍♂️': [
        'Man: Blond Hår',
        'Mand Med Blonde Hår'
    ],
    '🧓{{skin_tone}}‍': [
        'Ældre Person',
        'Køn Neutral Ældre Voksne'
    ],
    '👴{{skin_tone}}‍': [
        'Gammel Mand',
        'Ældre Mand',
        'Grandpa',
        'Ældre Mand'
    ],
    '👵{{skin_tone}}‍': [
        'Gammel Kvinde',
        'Ældre Kvinde',
        'Bedstemor',
        'Nanna',
        'Gammel Dame',
        'Ældre Kvinde'
    ],
    '👼{{skin_tone}}‍': [
        'Baby Engel',
        'Engel',
        'Cherub',
        'Amor',
        'Putto'
    ],
    '🎅{{skin_tone}}‍': [
        'Santa Claus',
        'Saint Nicholas',
        'Sinterklaas',
        'Far Jul'
    ],
    '🤶{{skin_tone}}‍': [
        'Fru Claus',
        'Moder Jul'
    ],
    '🤴{{skin_tone}}‍': ['Prins'],
    '👸{{skin_tone}}‍': [
        'Prinsesse',
        'Blonde Pige',
        'Pige Med Krone',
        'Pige Med Tiara'
    ],
    '👳{{skin_tone}}‍♂️': ['Mand Iført Turban'],
    '👳{{skin_tone}}‍♀️': ['Kvinde Iført Turban'],
    '👲{{skin_tone}}‍': [
        'Person Med Skullcap',
        'Asiatisk Mand',
        'Mand Med Kinesisk Hætte',
        'Mand med Gua Pi Mao'
    ],
    '🧕{{skin_tone}}‍': [
        'Kvinde med tørklæde',
        'Hijab',
        'Person med tørklæde'
    ],
    '🤵{{skin_tone}}‍': [
        'Person i Tuxedo',
        'Groom',
        'Mand I Jakkesæt',
        'Mand i Tuxedo'
    ],
    '👰{{skin_tone}}‍': [
        'Person, Med Slør',
        'Brud',
        'Brud med slør'
    ],
    '👰{{skin_tone}}‍♂️': ['Mand med slør'],
    '👰{{skin_tone}}‍♀️': ['Kvinde med slør'],
    '👩{{skin_tone}}‍🍼': ['Kvinde Feeding Baby'],
    '👨{{skin_tone}}‍🍼': ['Mand Fodring Baby'],
    '🥷': ['Ninja'],
    '🤰{{skin_tone}}‍': [
        'Gravid Kvinde',
        'Graviditet',
        'Gravid Lady'
    ],
    '🤱{{skin_tone}}‍': [
        'Amning',
        'Amning'
    ],
    '🦸{{skin_tone}}‍♂️': ['Mand Superhero'],
    '🦸{{skin_tone}}‍‍♀️': ['Kvinde Superhero'],
    '🦹{{skin_tone}}‍‍♂️': ['Man Supervillain'],
    '🦹{{skin_tone}}‍‍♀️': ['Kvinde Supervillain'],
    '🧙{{skin_tone}}‍': [
        'Mage',
        'Sorcerer',
        'Troldkarse',
        'Heks',
        'Guide'
    ],
    '🧙{{skin_tone}}‍‍♀️': [
        'Kvinde Mage',
        'Heks',
        'Troldkarse'
    ],
    '🧚{{skin_tone}}‍‍♂️': ['Mand Fe'],
    '🧚{{skin_tone}}‍♀️': ['Kvinde Fe'],
    '🧛{{skin_tone}}‍♂️': [
        'Man Vampyr',
        'Dracula'
    ],
    '🧛{{skin_tone}}‍‍♀️': ['Kvinde Vampyr'],
    '🧜{{skin_tone}}‍♂️': ['Merman'],
    '🧜{{skin_tone}}‍♀️': ['Havfrue'],
    '🧝{{skin_tone}}‍♂️': ['Mand Elf'],
    '🧝{{skin_tone}}‍♀️': ['Kvinde Elf'],
    '🧞‍♂️': ['Man Genie'],
    '🧞‍♀️': ['Woman Genie'],
    '🕵️{{skin_tone}}‍♂️': [
        'Mand Detektiv',
        'Privat Øje',
        'Sleuth',
        'Spy',
        'Man Sleuth',
        'Sleuth eller Spy',
        '007',
        'Inspektør'
    ],
    '🕵️{{skin_tone}}‍♀️': ['Kvinde Detektiv'],
    '💂{{skin_tone}}‍': [
        'Vagt',
        'Britisk Guardsman',
        'Fod Guard'
    ],
    '💂{{skin_tone}}‍‍♀️': ['Kvinde Vagt'],
    '👮{{skin_tone}}‍': [
        'Politibetjent',
        'Kop',
        'Politi',
        'Politikan',
        'Politikvinden'
    ],
    '👮{{skin_tone}}‍‍♀️': ['Kvinde Politiofficer'],
    '👨{{skin_tone}}‍🚒': ['Mand Brandmand'],
    '👩{{skin_tone}}‍‍🚒': ['Kvinde Brandmand'],
    '👨{{skin_tone}}‍‍✈️': ['Man Pilot'],
    '👩{{skin_tone}}‍‍✈️': ['Kvinde Pilot'],
    '👨{{skin_tone}}‍💻': [
        'Mand Teknolog',
        'Mand Teknolog'
    ],
    '👩{{skin_tone}}‍💻': ['Kvinde Teknolog'],
    '👨{{skin_tone}}‍🎤': [
        'Mand Singer',
        'Bowie',
        'Aladdin Sane'
    ],
    '👩{{skin_tone}}‍🎤': ['Kvinde Singer'],
    '👨{{skin_tone}}‍🎨': ['Mand Kunstner'],
    '👩{{skin_tone}}‍🎨': ['Kvinde Kunstner'],
    '👷{{skin_tone}}‍‍♂️': ['Mand Construction Worker'],
    '👷{{skin_tone}}‍‍♀️': ['Kvinde Konstruktionsarbejder'],
    '👨{{skin_tone}}‍‍🚀': [
        'Man Astronaut',
        'Man Cosmonaut'
    ],
    '👩{{skin_tone}}‍‍🚀': [
        'Kvinde Astronaut',
        'Kvinde Cosmonaut'
    ],
    '👨{{skin_tone}}‍‍🔬': ['Mand Forsker'],
    '👩{{skin_tone}}‍‍🔬': ['Kvinde Videnskabsmand'],
    '👨{{skin_tone}}‍💼': [
        'Mand Office Worker',
        'Direktør',
        'Forretningsmand'
    ],
    '👩{{skin_tone}}‍💼': [
        'Kvinde Kontorarbejder',
        'Forretningskvinde',
        'Direktør'
    ],
    '👨{{skin_tone}}‍🏭': ['Man Factory Worker'],
    '👩{{skin_tone}}‍‍🏭': ['Kvinde Factory Worker'],
    '👨{{skin_tone}}‍‍🔧': ['Mand Mekanisk'],
    '👩{{skin_tone}}‍‍🔧': ['Mekanisk Kvinde'],
    '👨{{skin_tone}}‍‍🍳': [
        'Mand Kokken',
        'Mand Chef',
        'Mand Kok'
    ],
    '👩{{skin_tone}}‍‍🍳': [
        'Kvinde Kokken',
        'Kvinde Chef',
        'Kvindelig Chef'
    ],
    '👨{{skin_tone}}‍‍🌾': ['Mand Landmand'],
    '👩{{skin_tone}}‍‍🌾': ['Kvinde Landmand'],
    '👨{{skin_tone}}‍‍⚖️': ['Mand Dommer'],
    '👩{{skin_tone}}‍‍⚖️': ['Kvinde Dommer'],
    '👨{{skin_tone}}‍‍🏫': ['Mand Lærer'],
    '👩{{skin_tone}}‍‍🏫': ['Kvinde Lærer'],
    '👨{{skin_tone}}‍🎓': ['Mand Elev'],
    '👩{{skin_tone}}‍🎓': ['Kvinde Elev'],
    '👨{{skin_tone}}‍‍⚕️': [
        'Mand Health Worker',
        'Mand Læge',
        'Mandlig Sygeplejerske'
    ],
    '👩{{skin_tone}}‍⚕️': [
        'Kvinde Health Worker',
        'Kvinde Læge',
        'Kvinde Sygeplejerske'
    ],
    '🤷{{skin_tone}}‍♂️': [
        'Mand Shrugging',
        'idk mand',
        'dunno'
    ],
    '🤷{{skin_tone}}‍♀️': [
        'Kvinde Shrugging',
        'idk kvinde',
        'dunno'
    ],
    '🤦{{skin_tone}}‍♂️': ['Mand Facepalming'],
    '🤦{{skin_tone}}‍♀️': ['Kvinde Facepalming'],
    '🙇{{skin_tone}}‍‍♂️': ['Mand Bue'],
    '🙇{{skin_tone}}‍‍♀️': ['Kvinde Bue'],
    '🧏{{skin_tone}}‍♂️': ['Død Mand'],
    '🧏{{skin_tone}}‍‍♀️': ['Død Kvinde'],
    '🙋{{skin_tone}}‍‍♂️': [
        'Mand Raising Hand',
        'Glad Mand Raising One Hand'
    ],
    '🙋{{skin_tone}}‍♀️': [
        'Kvinde Håb',
        'Glædelig Kvinde Raising One Hand'
    ],
    '💁{{skin_tone}}‍♂️': [
        'Mand Tipper Hånd',
        'Information Skrivebordsmand'
    ],
    '💁{{skin_tone}}‍♀️': [
        'Kvinde Tipping Hånd',
        'Information Skrivebord Kvinde'
    ],
    '🙆{{skin_tone}}‍♂️': ['Man Gesturing OK'],
    '🙆{{skin_tone}}‍♀️': ['Kvinde Gesturing OK'],
    '🙅{{skin_tone}}‍♂️': ['Mand Bevægelse Nr.'],
    '🙅{{skin_tone}}‍♀️': ['Kvinde Bevægelse Nr.'],
    '🙎{{skin_tone}}‍♂️': ['Mand Udflugt'],
    '🙎{{skin_tone}}‍‍♀️': ['Kvinde Udflugt'],
    '🙍{{skin_tone}}‍‍♂️': ['Man Frowning'],
    '🙍{{skin_tone}}‍‍♀️': ['Kvinde Frowning'],
    '🧟‍‍♂️': ['Mand Zombie'],
    '🧟‍‍♀️': ['Kvinde Zombie'],
    '🚶{{skin_tone}}‍♂️': ['Mand Går'],
    '🚶{{skin_tone}}‍♀️': ['Kvinde Gå'],
    '🧍{{skin_tone}}‍‍♂️': ['Mand Stående'],
    '🧍{{skin_tone}}‍‍♀️': ['Kvinde Stående'],
    '🧎{{skin_tone}}‍♂️': ['Mand Kneeling'],
    '🧎{{skin_tone}}‍‍♀️': ['Kvinde Kneeling'],
    '👨{{skin_tone}}‍🦯': ['Mand med Hvid sukkerrør'],
    '👩{{skin_tone}}‍🦯': ['Kvinde med hvid sukkerrør'],
    '👨{{skin_tone}}‍🦼': ['Mand i motoriseret kørestol'],
    '👩{{skin_tone}}‍🦼': ['Kvinde i motoriseret kørestol'],
    '👨{{skin_tone}}‍🦽': ['Mand i manuel kørestol'],
    '👩{{skin_tone}}‍🦽': ['Kvinde i manuel kørestol'],
    '👯‍♂️': ['Mænd med Bunny Ører'],
    '👯‍♀️': ['Kvinder med Bunny Ears'],
    '🕴️{{skin_tone}}‍': [
        'Person i Suit Levitating',
        'Vævende Mand',
        'Rude Dreng',
        'Walt Jabsco',
        'Mand i Business Suit Levitating'
    ],
    '🧖{{skin_tone}}‍♂️': [
        'Mand i Steamy Room',
        'Mand i Sauna'
    ],
    '🧖{{skin_tone}}‍♀️': [
        'Kvinde i dampet værelse',
        'Kvinde i Sauna'
    ],
    '👫{{skin_tone}}‍': [
        'Kvinde og mand Holding hænder',
        'Heteroseksuel Par',
        'Lige Par',
        'Mand og Kvinde Holding hænder'
    ],
    '👭{{skin_tone}}‍': [
        'Lesbisk Par',
        'Kvinder Holding Hænder',
        'To Kvinder Holding Hænder'
    ],
    '👬{{skin_tone}}‍': [
        'Mænd Holding Hænder',
        'Gay-par',
        'To Mænd Holding Hænder'
    ],
    '👨‍👩‍👦': [
        'Familie med mor, far og søn',
        'Familie: Mand, Kvinde, Dreng'
    ],
    '👨‍👩‍👧': [
        'Familie med mor, far og datter',
        'Familie: Mand, Kvinde, Pige'
    ],
    '👨‍👩‍👧‍👦': [
        'Familie med mor, Fader, Søn og Datter',
        'Familie: Mand, Kvinde, Pige, Dreng'
    ],
    '👨‍👩‍👦‍👦': [
        'Familie med mor, far og to sønner',
        'Familie: Mand, Kvinde, Dreng, Dreng'
    ],
    '👨‍👩‍👧‍👧': [
        'Familie med mor, far og to døtre',
        'Familie: Mand, Kvinde, Pige, Pige'
    ],
    '👨‍👨‍👦': [
        'Familie med to fædre og Søn',
        'Familie: Mand, Mand, Dreng'
    ],
    '👨‍👨‍👧': [
        'Familie med to fædre og Datter',
        'Familie: Mand, Mand, Pige'
    ],
    '👨‍👨‍👧‍👦': [
        'Familie med to fædre, Søn og Datter',
        'Familie: Mand, Mand, Girl, Dreng'
    ],
    '👨‍👨‍👦‍👦': [
        'Familie med to Fædre og to Sønner',
        'Familie: Mand, Mand, Dreng, Dreng'
    ],
    '👨‍👨‍👧‍👧': [
        'Familie med to fædre og to døtre',
        'Familie: Mand, Mand, Pige, Pige'
    ],
    '👩‍👩‍👦': [
        'Familie med to mødre og søn',
        'Familie: Kvinde, Kvinde, Dreng'
    ],
    '👩‍👩‍👧': [
        'Familie med to mødre og Datter',
        'Familie: Kvinde, Kvinde, Pige'
    ],
    '👩‍👩‍👧‍👦': [
        'Familie med to mødre, Søn og Datter',
        'Familie: Kvinde, Kvinde, Pige, Dreng'
    ],
    '👩‍👩‍👦‍👦': [
        'Familie med to mødre og to sønner',
        'Familie: Kvinde, Kvinde, Dreng, Dreng'
    ],
    '👩‍👩‍👧‍👧': [
        'Familie med to mødre og to døtre',
        'Familie: Kvinde, Kvinde, Pige, Pige'
    ],
    '👨‍👦': [
        'Familie med Fader og Søn',
        'Familie: Mand, Dreng'
    ],
    '👨‍👦‍👦': [
        'Familie: Mand, Dreng, Dreng',
        'Familie med Fader og to sønner'
    ],
    '👨‍👧': [
        'Familie med Fader og Datter',
        'Familie: Mand, Pige'
    ],
    '👨‍👧‍👦': [
        'Familie med Fader, Søn og Datter',
        'Familie: Mand, Pige, Dreng'
    ],
    '👨‍👧‍👧': [
        'Familie med Fader og to Datters',
        'Familie: Mand, Pige, Pige'
    ],
    '👩‍👦': [
        'Familie med mor og søn',
        'Familie: Kvinde, Dreng'
    ],
    '👩‍👦‍👦': [
        'Familie med mor og to sønner',
        'Familie: Kvinde, Dreng, Dreng'
    ],
    '👩‍👧': [
        'Familie med mor og Datter',
        'Familie: Kvinde, Pige'
    ],
    '👩‍👧‍👦': [
        'Familie med mor, søn og datter',
        'Familie: Kvinde, Pige, Dreng'
    ],
    '👩‍👧‍👧': [
        'Familie med Moder og to Dattere',
        'Familie: Kvinde, Pige, Pige'
    ],
    '💑': [
        'Par med hjerte',
        'Par I Kærlighed',
        'Kærlig Par',
        'Mand og kvinde med hjerte'
    ],
    '👨‍❤️‍👨': [
        'To Mænd Med Hjerte',
        'Par med hjerte: Mand, Mand'
    ],
    '👩‍❤️‍👩': [
        'To Kvinder Med Hjerte',
        'Par med hjerte: Kvinde, Kvinde'
    ],
    '💆{{skin_tone}}‍‍♂️': ['Mand Henter Hovedmassage'],
    '💆{{skin_tone}}‍♀️': ['Kvinde Getting Head Massage'],
    '💇{{skin_tone}}‍‍♂️': ['Mand Henter Haircut'],
    '💇{{skin_tone}}‍‍♀️': ['Kvinde Getting Haircut'],
    '🛌{{skin_tone}}‍': [
        'Sovende Overnatning',
        'Person, der er i seng',
        'Person Søvn'
    ]
};
/*animals*/
emojis_language[lang][4] = {
    '😺': [
        'Grinning Kat',
        ':)',
        'Glad Kat',
        'Smilende Kat',
        'Glad Kat Ansigt',
        'Smilende kat ansigt med Open Mouth'
    ],
    '😸': [
        'Grinning kat med Smiling Øjne',
        ':D',
        'Grinning Kat',
        'Glad Kat',
        'Skynning Kat Ansigt'
    ],
    '😹': [
        'Kat med Tears af Glæde',
        ':\')',
        'Glade Tårer Kat',
        'Latende Kat'
    ],
    '😻': [
        'Smilende kat med Heart-Eyes',
        '*.*',
        'Hjerte Øjne Kat',
        'Kærlig Kat',
        'Smilende kat ansigt med hjerteformet øjne'
    ],
    '😼': [
        'Kat med Wry Smile',
        'Smirkende Kat',
        'Smirkende Kat Ansigt',
        'Kat ansigt med Wry Smile'
    ],
    '😽': [
        'Kysse Kat',
        ':*',
        'Kys Kat Ansigt',
        'Kysse kat ansigt med lukkede øjne'
    ],
    '🙀': [
        'Weary Kat',
        ':O',
        'Scared Kat',
        'Screaming Kat',
        'Kat ansigt Screaming i frygt',
        'Weary Kat Ansigt'
    ],
    '😿': [
        'Græder Kat',
        ':\'(',
        'Trist Kat',
        'Græder Kat Ansigt'
    ],
    '😾': [
        'Kassér Kat',
        'Grumpy Cat',
        'Kattens Kat Ansigt'
    ],
    '🙈': [
        'Abe',
        'See-No-Evil Abe',
        'Mizaru',
        'Abe Dækker Øjne'
    ],
    '🙉': [
        'Abe',
        'Hear-No-Evil Monkey',
        'Kikazaru',
        'Abe Dækker Ører'
    ],
    '🙊': [
        'Abe',
        'Speak-No-Evil Monkey',
        'Iwazaru',
        'Abe Dækker Mundhed',
        'Ingen Tale'
    ],
    '🐵': [
        'Abe',
        'Abe Ansigt',
        'Abe Hoved'
    ],
    '🐒': [
        'Abe',
        'Cheeky Monkey'
    ],
    '🦍': ['Gorilla'],
    '🐶': [
        'Hund Ansigt',
        'Hund',
        'Hvalp'
    ],
    '🐕': [
        'Hund',
        'Doggo',
        'Akita Inu'
    ],
    '🦮': [
        'Se Øjenhund',
        'Guide Hund'
    ],
    '🐕‍🦺': ['Service Hund'],
    '🐩': [
        'Pudle',
        'Hund',
        'Miniaturepudle',
        'Standard Pudle',
        'Legetøjspudle'
    ],
    '🐺': [
        'Ulv',
        'Ulv Ansigt'
    ],
    '🦊': [
        'Ræv',
        'Ræv Ansigt'
    ],
    '🦝': ['Rakao'],
    '🐱': [
        'Kat Ansigt',
        ':3',
        'Killing',
        'Kitty'
    ],
    '🐈': [
        'Kat',
        'Indenlandsk Kat',
        'Feline',
        'Housecat'
    ],
    '🐈‍⬛': ['Sort Kat'],
    '🦁': [
        'Løve',
        'Løve Ansigt'
    ],
    '🐯': [
        'Tiger Ansigt',
        'Sød Tiger'
    ],
    '🐅': [
        'Tiger',
        'Bengal Tiger'
    ],
    '🐆': [
        'Leopard',
        'Afrikansk Leopard',
        'Jaguar'
    ],
    '🐴': [
        'Heste Ansigt',
        'Heste Hoved'
    ],
    '🐎': [
        'Heste',
        'Galopende Hest',
        'Racehest'
    ],
    '🦄': [
        'Enhjørning',
        'Enhjørning Ansigt'
    ],
    '🦓': [
        'Zebra',
        'Zebra Ansigt'
    ],
    '🦌': [
        'Hjorte',
        'Fejl',
        'Rensdyr',
        'Stag'
    ],
    '🐮': [
        'Ko Ansigt',
        'Ko',
        'Glad Ko'
    ],
    '🐂': [
        'Ox',
        'Tyr',
        'Bullock',
        'Oxen',
        'Styr'
    ],
    '🐃': [
        'Vand Buffalo',
        'Buffalo',
        'Indenlandsk Vandbuffalo'
    ],
    '🐄': [
        'Ko',
        'Mejeriko'
    ],
    '🐷': [
        'Pig Ansigt',
        'Svin',
        'Pig Hoved'
    ],
    '🐖': [
        'Svin',
        'Tåge',
        'Sow'
    ],
    '🐗': [
        'Vild',
        'Warthog',
        'Vildsvin',
        'Vildtlevende Svin'
    ],
    '🐽': ['Pig Nose'],
    '🐏': [
        'Ram',
        'Får'
    ],
    '🐑': [
        'Ewe',
        'Lamb',
        'Får'
    ],
    '🐐': ['Geder'],
    '🐪': [
        'Kamel',
        'Arabisk Kamel',
        'Dromedary Kamel',
        'En-Bump Kamel'
    ],
    '🐫': [
        'To-Hump Kamel',
        'Asiatisk Kamel',
        'Bactriansk Kamel'
    ],
    '🦙': [
        'Llama',
        'Alpaca'
    ],
    '🦒': [
        'Giraffe',
        'Giraffe Face'
    ],
    '🐘': ['Elefant'],
    '🦏': [
        'Rhinoceros',
        'Rhino'
    ],
    '🦛': [
        'Hippopotamus',
        'Hippo'
    ],
    '🐭': [
        'Mus Ansigt',
        'Mus'
    ],
    '🐁': [
        'Mus',
        'Dormus',
        'Gnavere',
        'Mis'
    ],
    '🐀': [
        'Rotte',
        'Gnavere'
    ],
    '🐹': [
        'hamster',
        'Hamster Ansigt'
    ],
    '🐰': [
        'Kanin Ansigt',
        'Påske Kanin'
    ],
    '🐇': [
        'Kanin',
        'Bunny',
        'Kanin Kanin'
    ],
    '🐿️': [
        'Chipmunk',
        'Egern'
    ],
    '🦔': ['Hedgehog'],
    '🦇': [
        'Flagermus',
        'Batman'
    ],
    '🐻': [
        'Bjørn',
        'Bjørne Ansigt',
        'Bamse Bjørn'
    ],
    '🐨': [
        'Koala',
        'Koala Ansigt'
    ],
    '🐼': [
        'Panda',
        'Panda Ansigt'
    ],
    '🦘': [
        'Kænguru',
        'Ro'
    ],
    '🦡': ['Grævling'],
    '🦃': [
        'Tyrkiet',
        'Thanksgiving Tyrkiet',
        'Vilde Kalkuner'
    ],
    '🐔': [
        'Kyllinger',
        'Hen'
    ],
    '🐓': [
        'Hagl',
        'Rooster',
        'Cockerel'
    ],
    '🐣': [
        'Hatching Chick',
        'Baby Kylling',
        'Chick Hatching'
    ],
    '🐤': [
        'Baby Chick',
        'Gul Fugl'
    ],
    '🐥': [
        'Front-Facing Baby Chick',
        'Baby Chick',
        'Stående Chick'
    ],
    '🐦': ['Fugl'],
    '🐧': ['Penguin'],
    '🕊️': [
        'Due',
        'Fred due'
    ],
    '🦅': [
        'Ørne',
        'Bald Ørn'
    ],
    '🦆': ['Ænder'],
    '🦢': ['Svane'],
    '🦉': ['Ugle'],
    '🦚': ['Peacock'],
    '🦜': ['Papegøje'],
    '🐸': [
        'Frø',
        'Tudse',
        'Frø Ansigt'
    ],
    '🐊': [
        'Krokodille',
        'Alligator',
        'Croc'
    ],
    '🐢': [
        'skildpadde',
        'Tortoise'
    ],
    '🦎': [
        'Lizard',
        'Gecko'
    ],
    '🐍': [
        'Slange',
        'Serpent'
    ],
    '🐲': [
        'Drage Ansigt',
        'Drage Hoved'
    ],
    '🐉': ['Drage'],
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
        'Spouting Hvaler',
        'Sød Hvale'
    ],
    '🐋': ['Hvaler'],
    '🐬': ['Dolphin'],
    '🐟': [
        'Fisk',
        'Ferskvand Fisk'
    ],
    '🐠': [
        'Tropisk Fisk',
        'Fisk',
        'Gulblå Fisk'
    ],
    '🐡': [
        'Blowfish',
        'Fugu',
        'Lundefisk'
    ],
    '🦈': [
        'Haj',
        'Stor Hvid Haj'
    ],
    '🐙': ['Blæksprutte'],
    '🐚': [
        'Spiral Shell',
        'Seashell',
        'Skal'
    ],
    '🐌': [
        'Snegle',
        'Snegl',
        'Have Snegle'
    ],
    '🦋': ['Sommerfugl'],
    '🐛': [
        'Fejl',
        'Caterpillar',
        'Insekt'
    ],
    '🐜': [
        'Ant',
        'Fejl',
        'Insekt'
    ],
    '🐝': [
        'Honningbi',
        'Bi',
        'Bumblebee'
    ],
    '🐞': [
        'Lady Bille',
        'Ladybird',
        'Ladybug',
        'Fejl'
    ],
    '🦗': [
        'Cricket',
        'Græshopper'
    ],
    '🕷️': ['Edderkop'],
    '🦂': ['Skorpion'],
    '🦟': ['Myg'],
    '🦀': ['Krabbe'],
    '🦞': ['Hummer'],
    '🦐': [
        'Rejer',
        'Prawn'
    ],
    '🦑': ['Blæksprutte'],
    '🦧': ['Orangutan'],
    '🦥': ['Sloth'],
    '🦦': ['Otter'],
    '🦨': ['Skunk'],
    '🦬': ['BisonName'],
    '🦣': ['Mammut'],
    '🦫': ['Bæver'],
    '🐻‍❄️': ['Isbjørn'],
    '🦤': ['Dodo'],
    '🦭': ['Forsegl'],
    '🪲': ['Bille'],
    '🪳': ['Kokerlak'],
    '🪰': ['Flyv'],
    '🪱': ['Orm'],
    '🦩': ['Flamingo']
};
/*symbols*/
emojis_language[lang][5] = {
    '💘': [
        'Hjerte med pil',
        'Amor Pil',
        'Lovestruck'
    ],
    '💝': [
        'Hjerte med bånd',
        'Chokolade Kasse',
        'Gavekasse',
        'Gave Hjerte'
    ],
    '💖': [
        'Sparkling Heart',
        'Sparkle Hjerte',
        'Sparkly Hjerte',
        'Stjerner Hjerte'
    ],
    '💗': [
        'Voksende Hjerte',
        'Multipel Hjerte',
        'Tredobbelt Hjerte'
    ],
    '💓': [
        'Svævende Hjerte',
        'Hjertealarm',
        'Heartbeat',
        'Wi-Fi Hjerte'
    ],
    '💞': [
        'Revolverende Hjerter',
        'To Hjerter'
    ],
    '💕': [
        'To Hjerter',
        'Små Hjerter',
        'To Lyserøde Hjerter'
    ],
    '💟': ['Hjertedekoration'],
    '❣️': [
        'Hjerte Præcisering',
        'Hjerte Over Dot',
        'Red Heart as an Exclamation Mark',
        'Kraftig Hjerte Erklæringsmærke Ornament'
    ],
    '💔': [
        'Ødelagt Hjerte',
        'Brydende Hjerte',
        'Brokenhearted',
        'Hjertebrud'
    ],
    '❤️': [
        'Jeg Elsker Dig',
        'Rødt Hjerte',
        'Hjerte',
        'Kærlighed Hjerte',
        'Rødt Hjerte'
    ],
    '🧡': [
        'Orange Hjerte',
        'Jeg Elsker Dig'
    ],
    '💛': [
        'Gult Hjerte',
        '#1 BF Snapchat',
        'Guld Hjerte',
        'Jeg Elsker Dig'
    ],
    '💚': [
        'Grøn Hjerte',
        'Jealous Hjerte',
        'Jeg Elsker Dig'
    ],
    '💙': [
        'Blåt Hjerte',
        'Jeg Elsker Dig'
    ],
    '💜': [
        'Lilla Hjerte',
        'Jeg Elsker Dig'
    ],
    '🖤': [
        'Sort Hjerte',
        'Mørkt Hjerte',
        'Jeg Elsker Dig'
    ],
    '🤍': [
        'Hvidt Hjerte',
        'Jeg Elsker Dig'
    ],
    '🤎': [
        'Brunt Hjerte',
        'Jeg Elsker Dig'
    ],
    '💯': [
        'Hundrede Point',
        '100',
        '%',
        'Behold 100',
        'Perfekt Score',
        'Hundrede Point Symbol'
    ],
    '💬': [
        'Tale Ballon',
        'Chat Boble',
        'Tale Boble'
    ],
    '💭': [
        'Tænkede Ballon',
        'Tænker Boble',
        'Tænkte Boble'
    ],
    '💤': [
        'Zzz',
        'Sengetid',
        'Hjulkrone',
        'Sove',
        'Søvnskilt',
        'Sovende Symbol'
    ],
    '♠️': [
        'Spade Dragt',
        'Spades',
        'Black Spade Suit'
    ],
    '♥️': [
        'Hjertedragt',
        'Kort Med Hjerte',
        'Hjerter',
        'Sort Hjertedragt'
    ],
    '♦️': [
        'Diamant Jakkesæt',
        'Diamanter',
        'Sort Diamant Dragt'
    ],
    '♣️': [
        'Klub Jakkesæt',
        'Klubber',
        'Sort Klub Jakke'
    ],
    '🏧': [
        'ATM Skilt',
        'ATM',
        'Automatiseret Telleer Machine'
    ],
    '🎵': [
        'Musikalsk Note',
        'Beamed Par Af Ottende Noter',
        'Beamed Par Quavers',
        'Musik Note'
    ],
    '🎶': [
        'Musikalske Noter',
        'Musik',
        'Musik Noter',
        'Sang',
        'Flere Musikalske Noter'
    ],
    '🔔': [
        'Klokke',
        'Frihed Bell',
        'Ringer',
        'Bryllup Bell'
    ],
    '🔕': [
        'Bell med skråstreg',
        'Notifikationer',
        'Ringeren Er Deaktiveret',
        'Lydløs Klokke',
        'Bell med afbestillingsstop'
    ],
    '🔈': [
        'Højttaler Lav Lydstyrke',
        'Lydstyrke',
        'Højttaler'
    ],
    '🔉': [
        'Højttaler Mellem Lydstyrke',
        'Reducér Lydstyrke',
        'Højttaler Med Mellem Lydstyrke',
        'Højttaler med én lydbølge'
    ],
    '🔊': [
        'Højttaler Høj Lydstyrke',
        'Forøg Lydstyrke',
        'Højttaler med tre lydbølger'
    ],
    '🔇': [
        'Lydløs Højttaler',
        'Lydløs Lydstyrke',
        'Højttaler med afbestillingsstop'
    ],
    '⛔': ['Ingen Indgang'],
    '🚫': [
        'Forbudt',
        'Udelukket',
        'Cirkel Baglæns Skråstreg',
        'Nej',
        'Rød Cirkel Krydset',
        'Begrænset',
        'Ingen Indgangstegn'
    ],
    '🚳': [
        'Ingen Cykler',
        'Ingen Cykler Log'
    ],
    '🚭': [
        'Rygning Ikke',
        'Rygesymbol Ikke'
    ],
    '🚯': [
        'Ingen Littering',
        'Ingen Littersymboler'
    ],
    '🚱': [
        'Ikke-Poterbart Vand',
        'Intet Vand',
        'Intet Drikkevand',
        'Non-Potable Water Symbol'
    ],
    '🚷': [
        'Ingen Fodgængere',
        'Ingen Mennesker',
        'Ingen Gåture'
    ],
    '🔞': [
        'Ingen Under Atten',
        'NSFW',
        'Ingen Under Atten Symbol',
        '18'
    ],
    '📵': [
        'Ingen Mobiltelefoner',
        'Ingen Mobiltelefoner',
        'Ingen Telefoner',
        'Ingen Smartphones'
    ],
    '☢️': [
        'Radioactive',
        'Internationalt Strålingssymbol',
        'Nuklear',
        'Radioaktivt Skilt'
    ],
    '☣️': [
        'Biohazard',
        'Biohazard Log'
    ],
    '⬆️': [
        'Pil Op',
        'Pil Retter Op',
        'Opad Sort Pil'
    ],
    '↗️': [
        'Op-Højre Pil',
        'Diagonal Op-Højre Pil',
        'Nordøstlig Pil'
    ],
    '➡️': [
        'Højre Pil',
        'Pil Retter Højre',
        'Sort Højre Pil'
    ],
    '↘️': [
        'Ned-Højre Pil',
        'Diagonal Ned-Højre Pil',
        'Sydøst Pil'
    ],
    '⬇️': [
        'Pil Ned',
        'Pil Peger Ned',
        'Nedad Sort Pil'
    ],
    '↙️': [
        'Ned-Venstre Pil',
        'Diagonal Ned-Venstre Pil',
        'Sydvestpil'
    ],
    '⬅️': [
        'Venstre Pil',
        'Pil Retter Til Venstre',
        'Venstre Sort Pil'
    ],
    '↖️': [
        'Op-Venstre Pil',
        'Diagonal Op-Venstre Pil',
        'Nordvestpil'
    ],
    '↕️': [
        'Pil Opad',
        'Lodrette Pile',
        'Pil Op Ned'
    ],
    '↔️': [
        'Venstre-Højre Pil',
        'Horisontale Pile',
        'Sidelænger Pile',
        'Venstre Højre Pil'
    ],
    '↩️': [
        'Højre Pil Buede Til Venstre',
        'E-Mail Svar',
        'Venstre Buet Pil',
        'Pil til venstre med krog'
    ],
    '↪️': [
        'Venstre Pil Kurver Højre',
        'Email Fremad',
        'Højre Buet Pil',
        'Højrepilen med krog'
    ],
    '⤴️': [
        'Højre Pil Buer Op',
        'Pil Retter Højre Derefter Bue Opad'
    ],
    '⤵️': [
        'Højre Pil Buede Ned',
        'Buet Pil Ned',
        'Pil Retter Højre Derefter Bue Nedad'
    ],
    '🔃': [
        'Lodrette Pile Med Uret',
        'Med uret Nedad og Opad Åbne Cirkel Pile'
    ],
    '🔄': [
        'Mod Uret Pile Knap',
        'Opdater',
        'Rotér',
        'Skift',
        'Mod Uret Pile',
        'Antikret med uret Nedad og Opad Åbne Cirkel Pile'
    ],
    '🔙': [
        'Pil Tilbage',
        'Tilbage',
        'Tilbage med venstre pil over'
    ],
    '🔚': [
        'Afslut Pil',
        'Slut',
        'Slut med venstre pil over'
    ],
    '🔛': [
        'Til! Pil',
        'Til',
        'Til med fræsning Markér med venstre højre pil ovenfor'
    ],
    '🔜': [
        'Snart Pil',
        'Snart',
        'Snart med højre pil over'
    ],
    '🔝': [
        'Pil Top',
        'Øverst',
        'Top med pil opad over'
    ],
    '🛐': [
        'Sted for tilbedelse',
        'Religiøs Bygning'
    ],
    '⚛️': ['Atom Symbol'],
    '🕉️': [
        'Om Symbol',
        'Om',
        'Aumkara',
        'Omkara',
        'Pranava'
    ],
    '✡️': [
        'Davids stjerne',
        'Magen David'
    ],
    '☸️': [
        'Hjul til Dharma',
        'Helm'
    ],
    '☯️': ['Yin Yang'],
    '✝️': [
        'Latinsk Kryds',
        'Kristen Kors'
    ],
    '☦️': ['Ortodokse Kryds'],
    '☪️': ['Stjerne og Halvmåne'],
    '☮️': [
        'Fred Symbol',
        'Fred Skilt'
    ],
    '🕎': [
        'Menorah',
        'Candelabrum',
        'Stearinlys',
        'Chanukiah',
        'Menorah',
        'Menorah med ni grene'
    ],
    '🔯': [
        'Punkteret Six-Spids Stjerne',
        'Seks spidse stjerne med Midterste Dot'
    ],
    '♈': [
        'Vædder',
        'Stjernetegn'
    ],
    '♉': [
        'Taurus',
        'Stjernetegn'
    ],
    '♊': [
        'Gemini',
        'Stjernetegn'
    ],
    '♋': [
        'Kræft',
        'Stjernetegn'
    ],
    '♌': [
        'Leo',
        'Stjernetegn'
    ],
    '♍': [
        'Jomfru:',
        'Stjernetegn'
    ],
    '♎': [
        'Bibliotek',
        'Stjernetegn'
    ],
    '♏': [
        'Skorpio',
        'Skorpius',
        'Stjernetegn'
    ],
    '♐': [
        'Sagittarius',
        'Stjernetegn'
    ],
    '♑': [
        'Stenbur',
        'Stjernetegn'
    ],
    '♒': [
        'Vandbærende',
        'Stjernetegn'
    ],
    '♓': [
        'Pisces',
        'Stjernetegn'
    ],
    '⛎': [
        'Ophiuchus',
        'Stjernetegn'
    ],
    '⏭️': [
        'Sort højre-pegende dobbelt trekant med lodret bar',
        'Spring Fremad Symbol Over',
        'Næste Spor Knap'
    ],
    '⏮️': [
        'Sort venstre-pegende dobbelt trekant med lodret bjælke',
        'Spring Tilbage Symbol Over',
        'Seneste Spor Knap',
        'Forrige Spor'
    ],
    '⏯️': [
        'Sort højre-pegende trekant med dobbelt lodret bar',
        'Afspil eller Pause knap',
        'Afspil Symbol',
        'Pause Symbol'
    ],
    '🔀': [
        'Bland Spor Knap',
        'Swisted Højre Pile'
    ],
    '🔁': [
        'Gentag Knap',
        'Loop Symbol',
        'Retweet',
        'Med uret Højre og venstre åbne cirkel pile'
    ],
    '🔂': [
        'Gentag Enkelt Knap',
        'Cirkel Pile Med Nummer 1',
        'Loop Once Symbol',
        'Gentag Single Track Symbol',
        'Med uret Højre og Venstre åbne cirkel pile med cirkel One Overlay'
    ],
    '▶️': [
        'Knappen Afspil',
        'Højre Trekant',
        'Højrepegende Trekant',
        'Sort Højrepegende Trekant'
    ],
    '◀️': [
        'Omvendt Knap',
        'Venstre Trekant',
        'Venstrepegende Trekant',
        'Sort Venstrepegende Trekant'
    ],
    '🔼': [
        'Knap opad',
        'Trekant Op',
        'Up-Pointing Trekant',
        'Up-Pointing Lille Rød Trekant'
    ],
    '🔽': [
        'Knappen Nedad',
        'Ned Trekant',
        'Down-Pointing Trekant',
        'Down-Pointing Lille Rød Trekant'
    ],
    '⏩': [
        'Knappen Hurtig-Fremad',
        'Hurtigt Fremad',
        'Symbol Hurtigt Fremad',
        'Sort Højrepegende Dobbelt Trekant'
    ],
    '⏪': [
        'Fast Reverse Button',
        'Rewind',
        'Genvinds Symbol',
        'Sort Venstrepegende Dobbelt Trekant'
    ],
    '⏫': [
        'Hurtig-Op Knap',
        'Up-Pointing Dobbelt Trekant',
        'Sort Up-Pointing Dobbelt Trekant'
    ],
    '⏬': [
        'Hurtig Ned Knap',
        'Down-Pointing Dobbelt Trekant',
        'Sort Down-Pointing Dobbelt Trekant'
    ],
    '⏹️': [
        'Knappen Stop',
        'Stop',
        'Stop Symbol',
        'Sort firkant til Stop'
    ],
    '⏏️': [
        'Skub Knap',
        'Eject Symbol'
    ],
    '🎦': [
        'Biograf',
        'Biograf Skærm',
        'Film',
        'Film',
        'Cinema Symbol',
        'Optager'
    ],
    '📶': [
        'Antenne Barer',
        'Modtagelsesbjælker',
        'Signal Styrke',
        'Stairs',
        'Symbol For Signalstyrke',
        'Antenne med barer'
    ],
    '✖️': [
        'Multiplikation',
        'Multiplikationssymbol',
        'Kraftig Multiplikation X'
    ],
    '➕': [
        'Plus',
        'Plus Symbol',
        'Kraftig Plus-skilt'
    ],
    '➖': [
        'Minus',
        'Minus Symbol',
        'Kraftig Minusskilt'
    ],
    '➗': [
        'Divider',
        'Division Symbol',
        'Kraftig Division Skilt'
    ],
    '♾️': [
        'Uendelighed',
        'Permanent Papirtegn'
    ],
    '‼️': [
        'Dobbelt Eksklusionsmærke',
        'Red Double Exclamation Mark'
    ],
    '⁉️': [
        'Exclamation Spørgsmål Mark',
        'Red Exclamation Mark og spørgsmål Mark'
    ],
    '❓': [
        'Markér Spørgsmål',
        'Rødt Spørgsmål Mark',
        'Sorte Spørgsmålstegn Ornament'
    ],
    '❔': [
        'Hvidt Spørgsmålstegn',
        'Hvidt Spørgsmålstegn',
        'Hvide Spørgsmålstegn Ornament'
    ],
    '❗': [
        'Eksklusionsmærke',
        'Rødt Eksklusionsmærke',
        'Kraftig Præcis Mærke Symbol'
    ],
    '❕': [
        'Hvid Eksklusionsmærke',
        'Hvid Eksklusionsmærke Ornament'
    ],
    '⭕': [
        'Hule Rød Cirkel',
        'Cirkel',
        'Korrekt',
        'Rød Cirkel',
        'Cirkel Markering',
        'Kraftig Stor Cirkel'
    ],
    '☑️': [
        'Tjek boks med tjek',
        'V',
        'Afkrydsningsfelt',
        'Markér Markér I Boksen',
        'Afstemningsboks med kontrol'
    ],
    '✔️': [
        'Markér Markér',
        'V',
        'Tjek',
        'Afkryds',
        'Checkmark',
        'Kraftig Markering'
    ],
    '❌': [
        'Krydsmarkering',
        'Kryds',
        'X'
    ],
    '✅': [
        'Markér Markeringsknap',
        'V',
        'Grøn Tjek Markering',
        'Grøn Tyk',
        'Markér Markér',
        'Hvidt Tung Tjek Markering'
    ],
    '❎': [
        'Knap For Krydsmarkering',
        'Kryds',
        'X',
        'X Markér',
        'Negativ Kvadreret Krydsmærke'
    ],
    '#️⃣': [
        'Keycap Nummer Skilt',
        '#',
        'Hash Nøgle',
        'Hashtag',
        'Oktober',
        'Pound Nøgle',
        'Nummer Skilt'
    ],
    '*️⃣': [
        'Keycap Asterisk',
        'Star Keycap'
    ],
    '0️⃣': [
        'Nummer 0',
        'Keycap Digit Zero'
    ],
    '1️⃣': [
        'Nummer 1',
        'Keycap Digit En'
    ],
    '2️⃣': [
        'Nummer 2',
        'Keycap Digit To'
    ],
    '3️⃣': [
        'Nummer 3',
        'Keycap Digit Tre'
    ],
    '4️⃣': [
        'Nummer 4',
        'Keycap Digit Fire'
    ],
    '5️⃣': [
        'Nummer 5',
        'Keycap Digit Fem'
    ],
    '6️⃣': [
        'Nummer 6',
        'Keycap Digit Seks'
    ],
    '7️⃣': [
        'Nummer 7',
        'Keycap Digit Seven'
    ],
    '8️⃣': [
        'Nummer 8',
        'Keycap Digit Otte'
    ],
    '9️⃣': [
        'Nummer 09',
        'Keycap Digit Ni'
    ],
    '🔟': [
        'Nummer 10',
        'Keycap: 10',
        '10',
        'Keycap Digit Ti'
    ],
    '🔠': [
        'Input Latin Uppercase',
        'ABCD',
        'Store',
        'Input symbol for store bogstaver',
        'Input Symbol for Latin Capital Letters'
    ],
    '🔡': [
        'Input Latin Lowercase',
        'abcd',
        'Små',
        'Input symbol for små bogstaver',
        'Inputsymbol for små latinske bogstaver'
    ],
    '🔢': [
        'Input Numbers',
        '1234',
        'Tal',
        'Numeric Input',
        'Input symbol for tal'
    ],
    '🔣': [
        'Input symbol for symboler',
        'Symboler',
        'Symbol Input'
    ],
    '🔤': [
        'Input Latin Letters',
        'abc',
        'Alfabet',
        'Bogstaver',
        'Input symbol for bogstaver',
        'Input symbol for latinske bogstaver'
    ],
    '🅰️': [
        'En Knap (Blood Type)',
        'Blodtype A',
        'Brev A',
        'Negativ Squared Latin Capital Letter A'
    ],
    '🆎': [
        'AB Knap (Blood Type)',
        'Bogstaver AB',
        'Blood Type AB',
        'Negativ Kvadreret AB'
    ],
    '🅱️': [
        'B Knap (Blood Type)',
        'Brev B',
        'Blod Type B',
        'Negativ Squared Latin Capital Letter B'
    ],
    '🆑': [
        'Knappen CL',
        'Ryd',
        'Ryd Knap',
        'CL Log',
        'Kvadreret CL',
        'Bogstaver CL'
    ],
    '🆒': [
        'Køl Knap',
        'Cool Firkant',
        'Cool Skilt',
        'Firkantede Køl'
    ],
    '🆓': [
        'Fri Knap',
        'Gratis',
        'Gratis Skilt',
        'Firkantet Gratis'
    ],
    'ℹ️': [
        'Information',
        'Info',
        'Små Og Små I',
        'Turist Information',
        'Information Kilde'
    ],
    '🆔': [
        'Id Knap',
        'ID',
        'Identifikation',
        'Identifikationstegn',
        'Kvadreret ID'
    ],
    '🆕': [
        'Ny Knap',
        'Ny',
        'Nyt Skilt',
        'Firkantet Ny'
    ],
    '🅾️': [
        'O Knap (Blood Type)',
        'Blodtype O',
        '0',
        'Negativt Squared Latin Capital Letter',
        'Brev O'
    ],
    '🆗': [
        'Knappen Ok',
        'Ok',
        'Okay',
        'Kvadrat',
        'Ok Skilt',
        'Kvadreret OK'
    ],
    '🅿️': [
        'P Knap',
        'Parkering Skilt',
        'Negativt Squared Latin Capital Letter',
        'Brev P'
    ],
    '🆘': [
        'Knappen SOS',
        'Nød Signal',
        'Nødsituation',
        'SOS',
        'SOS Signér',
        'Kvadrerede SOS',
        'Hjælp'
    ],
    '🆙': [
        'Op! Knap',
        'Niveau Op',
        'Op',
        'Tilmeld Dig',
        'Kvadreret op med ekskreameringsmærke'
    ],
    '🆚': [
        'Vs-knap',
        'Firkantede V\'er'
    ],
    '🆖': [
        'Ng Knap',
        'Kvadreret NG',
        'Intet Godt Skilt',
        'Ingen God',
        'NG',
        'Blooper'
    ],
    '🔴': [
        'Rød Cirkel',
        'Stor Rød Cirkel'
    ],
    '🟠': [
        'Orange Cirkel',
        'Stor Orange Cirkel'
    ],
    '🟡': [
        'Gul Cirkel',
        'Stor Gul Cirkel'
    ],
    '🟢': [
        'Grøn Cirkel',
        'Stor Grøn Cirkel'
    ],
    '🔵': [
        'Blå Cirkel',
        'Stor Blå Cirkel'
    ],
    '🟣': [
        'Lilla Cirkel',
        'Stor Lilla Cirkel'
    ],
    '🟤': [
        'Brun Cirkel',
        'Stor Brun Cirkel'
    ],
    '⚫': [
        'Sort Cirkel',
        'Mellem Sort Cirkel'
    ],
    '⚪': [
        'Hvid Cirkel',
        'Mellemstor Hvid Cirkel'
    ],
    '🟥': [
        'Rød Kvadrat',
        'Stor Rød Kvadrat'
    ],
    '🟧': [
        'Orange Firkant',
        'Stor Orange Firkant'
    ],
    '🟨': [
        'Gul Kvadrat',
        'Stor Gul Kvadrat'
    ],
    '🟩': [
        'Grøn Kvadrat',
        'Stor Grøn Plads'
    ],
    '🟦': [
        'Blå Kvadrat',
        'Stor Blå Kvadrat'
    ],
    '🟪': [
        'Lilla Kvadrat',
        'Stor Lilla Kvadrat'
    ],
    '🟫': [
        'Brun Kvadrat',
        'Stor Brun Kvadrat'
    ],
    '⬛': ['Sort Stor Kvadrat'],
    '⬜': ['Hvid Stor Kvadrat'],
    '◼️': ['Sort Mellemstor Firkant'],
    '◻️': ['Hvid Mellemstor Firkant'],
    '◾': ['Sort Medium Lille Kvadrat'],
    '◽': ['Hvid Mellemstor Lille Kvadrat'],
    '▪️': ['Sort Lille Kvadrat'],
    '▫️': ['Hvid Lille Kvadrat'],
    '💠': [
        'Diamant form med en Dot Inde',
        'Nysgerrighed',
        'Diamant Blomst',
        'Kawaii'
    ],
    '🔶': ['Stor Orange Diamant'],
    '🔷': ['Stor Blå Diamant'],
    '🔸': ['Lille Orange Diamant'],
    '🔹': ['Lille Blå Diamant'],
    '🔺': [
        'Rød Trekant Spids Op',
        'Up-Pointing Rød Trekant'
    ],
    '🔻': [
        'Rød Trekant Spids Ned',
        'Down-Pointing Rød Trekant'
    ],
    '🔳': ['Hvid Knap Knap'],
    '🔲': ['Sort Knap'],
    '©️': [
        'Ophavsret',
        'Copyright Log'
    ],
    '®️': [
        'Registreret',
        'Registreret Skilt'
    ],
    '™️': [
        'Handelsmærke',
        'TM',
        'Varemærke',
        'Handel Mark Skilt'
    ],
    '🛅': [
        'Venstre Bagage',
        'Kurv Med Nøgle',
        'Låst Kuffert'
    ],
    '🛄': ['Påstand Om Bagage'],
    '🛃': ['Told'],
    '🛂': [
        'Pas Kontrol',
        'Kant Kontrol'
    ],
    '🚰': [
        'Potable Water Symbol',
        'Tørst',
        'Tørst',
        'Vand Vandhane',
        'Vand Vandflugt'
    ],
    '🇦': [
        'Brev A',
        'Regional Indikator Symbol Letter A'
    ],
    '🇧': [
        'Brev B',
        'Regional Indikator Symbol Letter B'
    ],
    '🇨': [
        'Brev C',
        'Regional Indikator Symbol Letter C'
    ],
    '🇩': [
        'Brev D',
        'Regional Indikator Symbol Letter D'
    ],
    '🇪': [
        'Brev E',
        'Regional Indikator Symbol Letter E'
    ],
    '🇫': [
        'Brev F',
        'Regional Indikator Symbol Letter F'
    ],
    '🇬': [
        'Brev G',
        'Regional Indikator Symbol Letter G'
    ],
    '🇭': [
        'Brev H',
        'Regional Indikator Symbol Letter H'
    ],
    '🇮': [
        'Brev I',
        'Regional Indikator Symbol Letter I'
    ],
    '🇯': [
        'Brev J',
        'Regional Indikator Symbol Letter J'
    ],
    '🇰': [
        'Bogstav K',
        'Regional Indikator Symbol Letter K'
    ],
    '🇱': [
        'Brev L',
        'Regional Indikator Symbol Letter L'
    ],
    '🇲': [
        'Brev M',
        'Regional Indikator Symbol Letter M'
    ],
    '🇳': [
        'Bogstav N',
        'Regional Indikator Symbol Letter N'
    ],
    '🇴': [
        'Brev O',
        'Regional Indikator Symbol Letter O'
    ],
    '🇵': [
        'Brev P',
        'Regional Indikator Symbol Letter P'
    ],
    '🇶': [
        'Bogstav Q',
        'Regional Indikator Symbol Letter Q'
    ],
    '🇷': [
        'Bogstav R',
        'Regional Indikator Symbol Letter R'
    ],
    '🇸': [
        'Brev S',
        'Regional Indikator Symbol Letter S'
    ],
    '🇹': [
        'Brev T',
        'Regional Indikator Symbol Letter T'
    ],
    '🇺': [
        'Brev U',
        'Regional Indikator Symbol Letter U'
    ],
    '🇻': [
        'Brev V',
        'Regional Indikator Symbol Letter V'
    ],
    '🇼': [
        'Brev V',
        'Regional Indikator Symbol Letter W'
    ],
    '🇽': [
        'Bogstav X',
        'Regional Indikator Symbol Letter X'
    ],
    '🇾': [
        'Brev Y',
        'Regional Indikator Symbol Letter Y'
    ],
    '🇿': [
        'Brev Z',
        'Regional Indikator Symbol Letter Z'
    ],
    '💌': [
        'Kærlighed Brev',
        'Hjerte Konvolut',
        'Love Note'
    ],
    '🚮': [
        'Sæt kuld i sit stedsymbol',
        'Litter i Bin Log',
        'Sæt Litter I Papirkurv',
        'Person, Med Affald'
    ],
    '♿': [
        'Kørestol Symbol',
        'Tilgængeligt Badeværelse'
    ],
    '🚹': [
        'Herre Symbol',
        'Symbol Til Mænd',
        'Herre Toilet',
        'Mand Restroom',
        'Mand WC'
    ],
    '🚺': [
        'Dame Symbol',
        'Kvinders Symbol',
        'Dame Toilet',
        'Kvinde Restroom',
        'Familie WC'
    ],
    '🚻': [
        'Restroom',
        'Badeværelse Skilt',
        'Signér Til Toilet',
        'WC Skilt'
    ],
    '🚼': [
        'Baby Symbol',
        'Baby Change Station',
        'Baby Skift Symbol',
        'Sygeplejerske'
    ],
    '🚾': [
        'Vand Lukning',
        'WC',
        'Toilet WC'
    ],
    '⚠️': [
        'Advarselstegn',
        'Alarm Symbol'
    ],
    '🚸': [
        'Overførsel Af Børn',
        'Kids Krydsning',
        'Kørsel Af Skole'
    ],
    '🔅': [
        'Symbol For Lav Lysstyrke',
        'Knappen Dæmp',
        'Formindsk Lysstyrke'
    ],
    '🔆': [
        'Høj Lysstyrke Symbol',
        'Forøg Lysstyrke',
        'Lyse Knap'
    ],
    '📳': [
        'Vibrationstilstand',
        'Telefon Hjerte',
        'Lydløs Tilstand'
    ],
    '📴': ['Mobiltelefon Fra'],
    '〰️': [
        'Bølge',
        'Wavy Dash'
    ],
    '💱': ['Valutaveksling'],
    '💲': [
        'Kraftige Dollartegn',
        'Dollar',
        'Dollar Skilt'
    ],
    '♻️': [
        'Black Universal Recycling Symbol',
        'Genbrug Symbol',
        'Genbrug Logo'
    ],
    '🔱': [
        'Trident Emblem',
        'Pitchfork',
        'Trident'
    ],
    '📛': [
        'Navn Badge',
        'Tofu På Ild',
        'Navn Tag',
        'Brandmærke'
    ],
    '🔰': [
        'Japansk symbol for begyndere',
        'Shoshinsha Mark',
        'Gult Grønt Skjold'
    ],
    '➰': [
        'Krøllet Løkke',
        'Curling Loop',
        'Løkke'
    ],
    '➿': [
        'Dobbelt Krøllet Løkke',
        'Dobbelt Curling Loop',
        'Telefonsvarer'
    ],
    '〽️': [
        'Del Alternationsmærke',
        'Læ',
        'McDonald\'s'
    ],
    '✳️': ['Otte Spoked Asterisk'],
    '✴️': [
        'Otte Spids Sort Stjerne',
        'Orange Stjerne',
        'Otte Spids Stjerne'
    ],
    '❇️': ['Gnister'],
    'Ⓜ️': [
        'Kredsløb Latin Capital Letter M',
        'Cirklet M',
        'Metro',
        'Cirklet M'
    ],
    '🈁': [
        'Squared Katakana Koko',
        'Japansk Word-tegn Betydning Her',
        'Her',
        'Bestemmelse'
    ],
    '🈂️': [
        'Squared Katakana Sa',
        'Japansk tegn Betydning Service eller Service Charge'
    ],
    '🈷️': [
        'Squared CJK Unified Ideograph-6708',
        'Radikal 74',
        '月',
        'Japansk Skilt Betydning Månedlig Beløb'
    ],
    '🈶': [
        'Squared CJK Unified Ideograph-6709',
        'Japansk tegn betyder ikke Gratis for Charge',
        'Egen',
        '有'
    ],
    '🈯': [
        'Kvadreret CJK Unified Ideograph-6307',
        'Japansk Skilt Betydning Reserveret',
        'Fingerpunkt',
        '指'
    ],
    '🉐': [
        'Cirklede Ideograph Fordel',
        'Japansk Tegn Betydning Bargain',
        'Erhverv',
        '得'
    ],
    '🈹': [
        'Squared CJK Unified Ideograph-5272',
        'Japansk Tegn Betydning Rabat',
        'Bargain Salg',
        '割'
    ],
    '🈚': [
        'Squared CJK Unified Ideograph-7121',
        'Japansk tegn betyder fri for betaling',
        'Mangler',
        '無'
    ],
    '🈲': [
        'Kvadrerede CJK Unified Ideograph-7981',
        'Japansk Tegn Betydning Forbudt',
        'Forbid',
        '禁'
    ],
    '🉑': [
        'Circled Ideograph Accepter',
        'Japansk Tegn Betydning Acceptabel',
        'Accepter'
    ],
    '🈸': [
        'Squared CJK Unified Ideograph-7533',
        'Japansk Skilt Betydning Program',
        'Applikations Formular',
        'Abe',
        'Anmodning',
        '申'
    ],
    '🈴': [
        'Kvadreret CJK Unified Ideograph-5408',
        'Japansk Skilt Betydning Passing (Grad)',
        'Aftale',
        '合'
    ],
    '🈳': [
        'Kvadrerede CJK Unified Ideograph-7a7a',
        'Japansk Skilt Betydning Ledig',
        'Tom og tilgængelig',
        '空'
    ],
    '㊗️': [
        'Cirklet Ideograf Tillykke',
        'Japansk Tegn Betydning Tillykke'
    ],
    '㊙️': [
        'Cirklet Ideograph Hemmelighed',
        'Japansk Skilt Betydende Hemmelighed',
        'Hemmelighed'
    ],
    '🈺': [
        'Squared CJK Unified Ideograph-55b6',
        'Japansk tegn Betydning åben for erhvervslivet',
        'Arbejde',
        '営'
    ],
    '🈵': [
        'Squared CJK Unified Ideograph-6e80',
        'Japansk Skilt Betydning Full; Ingen Ledighed',
        'Fuld',
        '満'
    ],
    '🔘': ['Radioknap'],
    '🛑': [
        'Stop Signering',
        'ottekantet Log'
    ],
    '⚕️': [
        'Medicinsk Symbol',
        'Aesculapius',
        'Asklepios',
        'Rod af Asclepius',
        'Personale i Aesculapius'
    ],
    '🛗': [
        'Elevator',
        'Løft'
    ],
    '⚧️': ['Transkøns Symbol'],
    '♂️': [
        'Mand Signér',
        'Mand Symbol',
        'Mars Symbol'
    ],
    '♀️': [
        'Kvindelig Signering',
        'Kvinde Symbol',
        'Venus Symbol'
    ]
};
/*food and drinks*/
emojis_language[lang][6] = {
    '🍇': [
        'Druer',
        'Drue'
    ],
    '🍈': [
        'Melon',
        'Cantaloupe',
        'Honningdug',
        'Muskmelon'
    ],
    '🍉': ['Vandmelon'],
    '🍊': [
        'Tangerine',
        'Mandarin',
        'Orange'
    ],
    '🍋': [
        'Citron',
        'Citronade'
    ],
    '🍌': [
        'Banan',
        'Hisnit'
    ],
    '🍍': ['Ananas'],
    '🥭': ['Mango'],
    '🍎': [
        'Rød Æble',
        'Red Delicious Æble'
    ],
    '🍏': [
        'Grønt Æble',
        'Golden Delicious Æble',
        'Bedstemor Smith Æble'
    ],
    '🍐': ['Pære'],
    '🍑': [
        'Ferskner',
        'Bund',
        'Butt'
    ],
    '🍒': [
        'Kirsebær',
        'Kirsebær',
        'Vild Kirsebær'
    ],
    '🍓': ['Jordbær'],
    '🥝': [
        'Kiwifrugter',
        'Kinesisk Stikkelsbær',
        'Kiwifrugter',
        'Kiwifrugter'
    ],
    '🍅': ['Tomat'],
    '🥥': [
        'Kokosnødder',
        'Cocoanut'
    ],
    '🥑': ['Avocado'],
    '🍆': [
        'Aubergine',
        'Aubergine',
        'Phallisk',
        'Lilla Vegetabilske'
    ],
    '🥔': [
        'Kartoffel',
        'Bagt Kartoffel',
        'Idaho Kartoffel'
    ],
    '🥕': ['Gulerod'],
    '🌽': [
        'Øre af majs',
        'Majs',
        'Corn On The Cob',
        'Majs',
        'Øre af Majs'
    ],
    '🌶️': [
        'Hot Peber',
        'Chili Peber',
        'Krydderier'
    ],
    '🥒': [
        'Agurk',
        'Drueagurker',
        'Pickle'
    ],
    '🥬': [
        'Bladtræ Grøn',
        'Bok Choy',
        'Kinesisk kål',
        'Cos Lettuce',
        'Romaine Salat',
        'Leafy Greens'
    ],
    '🥦': ['Broccoli'],
    '🍄': [
        'Svamp',
        'Shroom',
        'Toadstool'
    ],
    '🥜': [
        'Peanuts',
        'Nødder'
    ],
    '🌰': [
        'Kastanje',
        'Acorn',
        'Møtrik'
    ],
    '🍞': [
        'Brød',
        'Loaf Af Brød'
    ],
    '🥐': ['Croissant'],
    '🥖': [
        'Baguette Brød',
        'Fransk Brød',
        'Baguette'
    ],
    '🥨': ['Pretzel'],
    '🥯': ['Bagel'],
    '🥞': [
        'Pandekager',
        'Kløe per',
        'Hotcakes'
    ],
    '🧀': [
        'Ost Kile',
        'Ost'
    ],
    '🍖': [
        'Kød på knogle',
        'BBQ',
        'Grill',
        'Manga Kød'
    ],
    '🍗': [
        'Poultry Leg',
        'Trommeskind',
        'Tyrkiet Ben'
    ],
    '🥩': [
        'Klip af kød',
        'Kød',
        'Bøf'
    ],
    '🥓': [
        'Bacon',
        'Rashers'
    ],
    '🍔': [
        'Hamburger',
        'Burger',
        'Osteburger'
    ],
    '🍟': [
        'Franske Frier',
        'Chips',
        'Frier',
        'McDonalds Fries'
    ],
    '🍕': [
        'Pizza',
        'Pepperoni Pizza',
        'Skive af Pizza'
    ],
    '🌭': [
        'Varm Hund',
        'Hotdog',
        'Pølse'
    ],
    '🥪': ['Sandwich'],
    '🌮': ['Taco'],
    '🌯': [
        'Burrito',
        'Ombryd'
    ],
    '🥙': [
        'Fyldt Fladbrød',
        'Doner Kebab',
        'Gyro',
        'Shawarma',
        'Pita Sandwich'
    ],
    '🍳': [
        'Madlavning',
        'Morgenmad',
        'Stegt Æg',
        'Fryser Pan'
    ],
    '🥘': [
        'Lavt fødevaregande',
        'Paella',
        'Pan af mad'
    ],
    '🍲': [
        'Krukke med mad',
        'Skål Med Fødevarer',
        'Suppe',
        'Gryde'
    ],
    '🥣': [
        'Skål med ske',
        'Kornskål'
    ],
    '🥗': [
        'Grøn Salat',
        'Salat'
    ],
    '🍿': [
        'Popcorn',
        'Popping Majs'
    ],
    '🧂': [
        'Salt',
        'Salt Shaker'
    ],
    '🥫': [
        'Dåse Mad',
        'Dåse af mad',
        'Tin Dåse',
        'Tinned Mad'
    ],
    '🍱': [
        'Bento Boks',
        'Frokost Boks'
    ],
    '🍘': [
        'Ris Cracker',
        'Cracker'
    ],
    '🍙': [
        'Ris Kugle',
        'Onigiri'
    ],
    '🍚': [
        'Tilberedt Ris',
        'Kogt Ris',
        'Ris',
        'Skål Af Ris',
        'Dampet Ris'
    ],
    '🍛': [
        'Karry Ris',
        'Karry',
        'Indisk Mad',
        'Karry og ris'
    ],
    '🍜': [
        'Steamingskål',
        'Nudler',
        'Nudler Med Chopsticks',
        'Ramen'
    ],
    '🍝': [
        'Spaghetti',
        'Pastaprodukter'
    ],
    '🍠': [
        'Brændt Sød Kartoffel',
        'Sød Kartoffel',
        'Yams'
    ],
    '🍢': [
        'Uden',
        'Kebab',
        'Skewer'
    ],
    '🍣': [
        'Sushi',
        'Sashimi',
        'Seafood'
    ],
    '🍤': [
        'Stegt Rejer',
        'Stegt Prawn',
        'Rejer Tempura'
    ],
    '🍥': [
        'Fisk kage med hvirvel',
        'Fiskekage',
        'Pink Swirl'
    ],
    '🥮': [
        'Måne Kage',
        'Månekage'
    ],
    '🍡': [
        'Dango',
        'Dessert Stick',
        'Pink White Green Balls'
    ],
    '🥟': [
        'Dumpling',
        'Empanada',
        'Pierogi'
    ],
    '🥠': ['Fortune Cookie'],
    '🥡': [
        'Takeout Boks',
        'Kinesisk Food Box',
        'Oyster Pail'
    ],
    '🍦': [
        'Blød Is',
        'Whippy',
        'Blød Server'
    ],
    '🍧': [
        'Barberet Is',
        'Sne Kone'
    ],
    '🍨': [
        'Is',
        'Skål Af Is',
        'Dessert'
    ],
    '🍩': [
        'Tørrede',
        'Donut'
    ],
    '🍪': [
        'Cookie',
        'Kiks',
        'Chokolade Chip Cookie'
    ],
    '🎂': [
        'Fødselsdag Kage',
        'Fødselsdag',
        'Kage',
        'Kage Med Stearinlys'
    ],
    '🍰': [
        'Genkage',
        'Kage',
        'Stykke Af Kage',
        'Jordbær Shortcake'
    ],
    '🧁': [
        'Cupcake',
        'Fe Kage'
    ],
    '🥧': ['Tærte'],
    '🍫': [
        'Chokolade Bar',
        'Slik Bar',
        'Chokolade'
    ],
    '🍬': [
        'Slik',
        'Lolly',
        'Sød'
    ],
    '🍭': [
        'Lollipop',
        'Sucker'
    ],
    '🍮': [
        'Custard',
        'Creme Caramel',
        'Dessert',
        'Man',
        'Budding'
    ],
    '🍯': [
        'Honning Pot',
        'Honning',
        'Gryde'
    ],
    '🍼': [
        'Baby Flaske',
        'Flaskefoder'
    ],
    '🥛': [
        'Glas af mælk',
        'Mælk'
    ],
    '☕': [
        'Varmt Drikkevarer',
        'Kaffe',
        'Espresso',
        'Varmt Chokolade',
        'Te'
    ],
    '🍵': [
        'Teacup Uden Håndtag',
        'Grøn Te',
        'Matcha',
        'Matcha Grøn Te'
    ],
    '🍶': [
        'Sake',
        'Flaske',
        'Ris Vin',
        'Sake Flaske og Cup'
    ],
    '🍾': [
        'Flaske med popping Cork',
        'Fejring',
        'Champagne',
        'Mousserende Vin'
    ],
    '🍷': [
        'Vin Glas',
        'Alkohol',
        'Rødvin',
        'Vin'
    ],
    '🍸': [
        'Cocktail Glas',
        'Cocktail',
        'Martini'
    ],
    '🍹': [
        'Tropisk Drik',
        'Frugt Punch',
        'Tiki Drik'
    ],
    '🍺': [
        'Øl Krus',
        'Øl',
        'Øl Stein'
    ],
    '🍻': [
        'Knipper Øl Krus',
        'Øl',
        'Hilsen'
    ],
    '🥂': [
        'Knipper Briller',
        'Fejring',
        'Champagne Briller',
        'Hilsen'
    ],
    '🥃': [
        'Tumbler Glas',
        'Bourbon',
        'Liquor',
        'Rum',
        'Whiskey',
        'Whisky'
    ],
    '🥤': [
        'Kop med Straw',
        'Milkshake',
        'Smoothie',
        'Soda Pop',
        'Blød Drik'
    ],
    '🥢': ['Chopsticks'],
    '🍽️': [
        'Gaffel og kniv med plade',
        'Middag'
    ],
    '🍴': [
        'Gafler og kniv',
        'Bestik',
        'Kniv Og Gaffel',
        'Sølvvarer'
    ],
    '🥄': ['Ske'],
    '🧄': ['Hvidløg'],
    '🧅': ['Løg'],
    '🧇': ['Waffle'],
    '🧆': ['Falafel'],
    '🧈': ['Smør'],
    '🦪': ['Østers'],
    '🧃': [
        'Drikkeboks',
        'Juice Boks'
    ],
    '🧉': [
        'Mate Drik',
        'Chimarraţo',
        'Cimarrón',
        'Yerba- Mate'
    ],
    '🫒': ['Oliven'],
    '🫐': ['Blåbær'],
    '🫑': ['Klokke Peber'],
    '🫓': ['Fladbrød'],
    '🫔': [
        'Tamale',
        'Tamal'
    ],
    '🫕': ['Fondue'],
    '🧋': [
        'Boble Te',
        'Boba'
    ],
    '🧊': ['Ice Cube']
};
/*flags*/
emojis_language[lang][7] = {
    '🏁': [
        'Snydt Flag',
        'Checkeret Flag',
        'Gitter Pige',
        'Racing Flag'
    ],
    '🚩': [
        'Trekantet Flag',
        'Markér på pol',
        'Rød Flag',
        'Trekantet flag på indlæg'
    ],
    '🎌': [
        'Krydsede Flag',
        'To Flag'
    ],
    '🏴': [
        'Sort Flag',
        'Bølger Sort Flag'
    ],
    '🏳️': [
        'Hvid Flag',
        'Bølger Hvid Flag'
    ],
    '🏳️‍🌈': [
        'Regnbue Flag',
        'Pride Flag'
    ],
    '🏳️‍⚧️': [
        'Transkøns Flag',
        'Blå, Pink, og hvid flag',
        'Trans Flag'
    ],
    '🏴‍☠️': [
        'Pirat Flag',
        'Jolly Roger'
    ],
    '🇺🇳': [
        'De Forenede Nationers flag',
        'FN',
        'Flag: Forenede Nationer'
    ],
    '🇪🇺': [
        'Den Europæiske Unions flag',
        'EU',
        'Flag: Den Europæiske Union',
        'EU Flag'
    ],
    '🇦🇨': [
        'Flag af Ascension Island',
        'AC'
    ],
    '🇦🇩': [
        'Andorras flag',
        'AD',
        'Andorran Flag'
    ],
    '🇦🇪': [
        'De Forenede Arabiske Emiraters flag',
        'AE',
        'Emirati Flag',
        'Forenede Arabiske Emirater Flag'
    ],
    '🇦🇫': [
        'Flag i Afghanistan',
        'AF',
        'Afghan Flag'
    ],
    '🇦🇬': [
        'Markering af Antigua & Barbuda',
        'AG'
    ],
    '🇦🇮': [
        'Markering af Anguilla',
        'AI',
        'Anguillansk Flag'
    ],
    '🇦🇱': [
        'Flag i Albanien',
        'AL',
        'Albansk Flag'
    ],
    '🇦🇲': [
        'Markering af Armenien',
        'AM',
        '🇦🇲'
    ],
    '🇦🇴': [
        'Angolas flag',
        'AO',
        'Angolansk Flag'
    ],
    '🇦🇶': [
        'Flag af Antarktis',
        'AQ',
        'Antarktiske Flag'
    ],
    '🇦🇷': [
        'Argentinas flag',
        'AR',
        'Argentinsk Flag'
    ],
    '🇦🇸': [
        'Markering af Amerikansk Samoa',
        'AS',
        'American Samoan Flag'
    ],
    '🇦🇹': [
        'Flag i Østrig',
        'AT',
        'Austrian Flag'
    ],
    '🇦🇺': [
        'Flag i Australien',
        'AU',
        'Aussie Flag',
        'Australsk Flag'
    ],
    '🇦🇼': [
        'Arubas flag',
        'AW',
        'Aruban Flag'
    ],
    '🇦🇽': [
        'Flagene på de øer, der er beliggende i det franske land',
        'AX',
        'Bland Flag'
    ],
    '🇦🇿': [
        'Aserbajdsjans flag',
        'AZ',
        'Aserbajdsjansk Flag'
    ],
    '🇧🇦': [
        'Flag i Bosnien-Hercegovina',
        'BA'
    ],
    '🇧🇧': [
        'Markering af Barbados',
        'BB',
        'Barbadiansk Flag',
        'Bajansk Flag'
    ],
    '🇧🇩': [
        'Bangladeshs flag',
        'BD',
        'Bangladeshi Flag'
    ],
    '🇧🇪': [
        'Belgiens flag',
        'BE',
        'Belgisk Flag'
    ],
    '🇧🇫': [
        'Flag af Burkina Faso',
        'BF',
        'Burkinabe Flag'
    ],
    '🇧🇬': [
        'Bulgariens flag',
        'BG',
        'Bulgarsk Flag'
    ],
    '🇧🇭': [
        'Flag Bahrain',
        'BH',
        'Bahrani Flag',
        'Bahrainsk Flag'
    ],
    '🇧🇮': [
        'Burundis flag',
        'BI',
        'Burundian Flag'
    ],
    '🇧🇯': [
        'Benins flag',
        'BJ',
        'Beninesisk Flag'
    ],
    '🇧🇱': [
        'Flag af Sankt Bartheţlemy',
        'BL',
        'Flag: St. Bartheślemy'
    ],
    '🇧🇲': [
        'Bermudas flag',
        'BM',
        'Bermudan Flag'
    ],
    '🇧🇳': [
        'Flag af Brunei',
        'Lot',
        'Bruneiansk Flag'
    ],
    '🇧🇴': [
        'Flag af Bolivia',
        'BO',
        'Bolivian Flag'
    ],
    '🇧🇶': [
        'Flag i Caribien Holland',
        'BQ',
        'Bonaire'
    ],
    '🇧🇷': [
        'Brasiliens flag',
        'BR',
        'Brasiliansk Flag'
    ],
    '🇧🇸': [
        'Flag af Bahamas',
        'Bahamansk Flag',
        'BS'
    ],
    '🇧🇹': [
        'Bhutans flag',
        'BT',
        'Bhutansk Flag'
    ],
    '🇧🇻': [
        'Flag af Bouvet Island',
        'BV',
        'Flag: Bouvet Island'
    ],
    '🇧🇼': [
        'Flag af Botswana',
        'BW',
        'Batswana Flag'
    ],
    '🇧🇾': [
        'Flag i Belarus',
        'VED',
        'Hviderussisk Flag'
    ],
    '🇧🇿': [
        'Markering af Belize',
        'BZ',
        'Belizean Flag'
    ],
    '🇨🇦': [
        'Canadas flag',
        'Canadisk Flag',
        'CA'
    ],
    '🇨🇨': [
        'Flag på Cocos (Keeling) Islands',
        'CC'
    ],
    '🇨🇩': [
        'Flag of Congo - Kinshasa',
        'Cd'
    ],
    '🇨🇫': [
        'Den Centralafrikanske Republiks flag',
        'CF',
        'Centralafrikansk Flag'
    ],
    '🇨🇬': [
        'Flag Congo - Brazzaville',
        'CG'
    ],
    '🇨🇭': [
        'Markering af Schweiz',
        'CH',
        'Røde Kors',
        'Schweizisk Flag'
    ],
    '🇨🇮': [
        'Markering af Elfenbenskysten',
        'CI',
        'Flag: Côte d’Ivoire'
    ],
    '🇨🇰': [
        'Markering af Cookøerne',
        'CK',
        'Kok Islander Flag'
    ],
    '🇨🇱': [
        'Chiles flag',
        'CL',
        'Chilensk Flag'
    ],
    '🇨🇲': [
        'Flag af Cameroun',
        'CM',
        'Camerounsk Flag'
    ],
    '🇨🇳': [
        'Markering af Kina',
        'KN',
        'Kinesisk Flag'
    ],
    '🇨🇴': [
        'Colombias flag',
        'CO',
        'Colombiansk Flag'
    ],
    '🇨🇵': [
        'Flag af Clipperton Island',
        'CP',
        'Flag: Clipperton Island'
    ],
    '🇨🇷': [
        'Markering af Costa Rica',
        'CR',
        'Costa Rica Flag'
    ],
    '🇨🇺': [
        'Cubas flag',
        'CU',
        'Cubansk Flag'
    ],
    '🇨🇻': [
        'Kap Verdes flag',
        'CV',
        'Kap Verdisk Flag'
    ],
    '🇨🇼': [
        'Markering af Curaçao',
        'CW',
        'Curaçaoan Flag'
    ],
    '🇨🇽': [
        'Juleøens flag',
        'CX',
        'Christmas Island Flag'
    ],
    '🇨🇾': [
        'Cyperns flag',
        'CY',
        'Cypriotisk Flag'
    ],
    '🇨🇿': [
        'Markering af Tjekkiet',
        'CZ',
        'Tjekkisk Flag'
    ],
    '🇩🇪': [
        'Tysk flag',
        'DE',
        'Deutsch Flag',
        'Tysk Flag'
    ],
    '🇩🇬': [
        'Markering af Diego Garcia',
        'DG',
        'Flag: Diego Garcia'
    ],
    '🇩🇯': [
        'Flag Djibouti',
        'DJ',
        'Djibouti Flag',
        'Djiboutian Flag'
    ],
    '🇩🇰': [
        'Danmarks flag',
        'DK',
        'Dansk Flag'
    ],
    '🇩🇲': [
        'Markering af Dominica',
        'DM'
    ],
    '🇩🇴': [
        'Den Dominikanske Republiks flag',
        'DO',
        'Dom Rep Flag',
        'Dominikanske Flag'
    ],
    '🇩🇿': [
        'Markering af Algeriet',
        'DZ',
        'Algerian Flag'
    ],
    '🇪🇦': [
        'Ceuta & Melillas flag',
        'Flag af Melilla',
        'Ceuta flag.',
        'EA',
        'Flag: Ceuta & Melilla'
    ],
    '🇪🇨': [
        'Ecuadors flag',
        'EC',
        'Ecuadorian Flag'
    ],
    '🇪🇪': [
        'Estlands flag',
        'EE',
        'Estisk Flag'
    ],
    '🇪🇬': [
        'Egyptens flag',
        'EG',
        'Egyptisk Flag'
    ],
    '🇪🇭': [
        'Markering af Vestsahara',
        'EH',
        'Vestsaharansk Flag'
    ],
    '🇪🇷': [
        'Eritreas flag',
        'ER',
        'Eritrean Flag'
    ],
    '🇪🇹': [
        'Etiopiens flag',
        'ET',
        'Ethiopian Flag'
    ],
    '🇪🇸': [
        'Spaniens flag',
        'ES',
        'Spansk Flag'
    ],
    '🇫🇮': [
        'Finlands flag',
        'FI',
        'Finsk Flag'
    ],
    '🇫🇯': [
        'Fijis flag',
        'FJ',
        'Fijian Flag'
    ],
    '🇫🇰': [
        'Flag på Falklandsøerne',
        'FK',
        'Falklander Flag'
    ],
    '🇫🇲': [
        'Flag af Mikronesien',
        'FM',
        'Mikronesisk Flag'
    ],
    '🇫🇴': [
        'Flag på Færøerne',
        'FO',
        'Faroe Islander Flag'
    ],
    '🇫🇷': [
        'Frankrigs flag',
        'FR',
        'Fransk Flag'
    ],
    '🇬🇦': [
        'Gabons flag',
        'GA',
        'Gabonesisk Flag'
    ],
    '🇬🇧': [
        'Det Forenede Kongeriges flag',
        'GB',
        'Britisk Flag',
        'Det Forenede Kongerige',
        'Union Jack',
        'UK'
    ],
    //"🏴󠁧󠁢󠁥󠁮󠁧󠁿": ["Flag of England", "St George's Cross", "English Flag"],
    //"🏴󠁧󠁢󠁷󠁬󠁳󠁿": ["Flag of Wales", "Welsh Flag", "Red Dragon", "Baner Cymru", "Y Ddraig Goch"],
    //"🏴󠁧󠁢󠁳󠁣󠁴󠁿": ["Flag of Scotland", "Scottish Flag", "St Andrew's Cross", "Saltire"],
    //"🏴󠁧󠁢󠁮󠁩󠁲󠁿": ["Flag of Northern Ireland"],
    '🇬🇩': [
        'Grenadas flag',
        'GD',
        'Grenadisk Flag'
    ],
    '🇬🇪': [
        'Georgiens flag',
        'GE',
        'Georgisk Flag'
    ],
    '🇬🇫': [
        'Fransk Guyanas flag',
        'GF',
        'Fransk Guineansk Flag'
    ],
    '🇬🇬': [
        'Flag af Guernsey',
        'GG',
        'Guernsey Flag'
    ],
    '🇬🇭': [
        'Markering af Ghana',
        'GH',
        'Ghanisk Flag'
    ],
    '🇬🇮': [
        'Gibraltars flag',
        'GI',
        'Gibraltarisk Flag'
    ],
    '🇬🇱': [
        'Grønlands flag',
        'GL',
        'Greenlandic Flag'
    ],
    '🇬🇲': [
        'Markering af Gambia',
        'GM',
        'Gambian Flag'
    ],
    '🇬🇳': [
        'Markering af Guinea',
        'GN',
        'Guinean Flag'
    ],
    '🇬🇵': [
        'Markering af Guadeloupe',
        'GP',
        'Guadeloupean Flag'
    ],
    '🇬🇶': [
        'Ækvatorialguineas flag',
        'GQ',
        'Equatorial Guinean Flag',
        'Equatoguineansk Flag'
    ],
    '🇬🇷': [
        'Grækenlands flag',
        'GR',
        'Græsk Flag'
    ],
    '🇬🇸': [
        'Flag South Georgia & South Sandwich Islands',
        'GS'
    ],
    '🇬🇹': [
        'Guatemalas flag',
        'GT',
        'Guatemalan Flag'
    ],
    '🇬🇺': [
        'Guams flag',
        'GU',
        'Guamansk Flag',
        'Chamorro Flag'
    ],
    '🇬🇼': [
        'Guinea-Bissaus flag',
        'GW',
        'Guinea-Bissau Flag'
    ],
    '🇬🇾': [
        'Guyanas flag',
        'GY',
        'Guyansk Flag'
    ],
    '🇭🇰': [
        'Flag af Hong Kong SAR Kina',
        'HK',
        'Hong Kong Flag'
    ],
    '🇭🇲': [
        'Flag of Heard & McDonald Islands',
        'HM',
        'Flag: Heard & McDonald Islands'
    ],
    '🇭🇳': [
        'Markering af Honduras',
        'HN',
        'Honduransk Flag'
    ],
    '🇭🇷': [
        'Kroatiens flag',
        'HR',
        'Kroatisk Flag'
    ],
    '🇭🇹': [
        'Markering af Haiti',
        'HT',
        'Haitian Flag'
    ],
    '🇭🇺': [
        'Ungarns flag',
        'HU',
        'Ungarsk Flag'
    ],
    '🇮🇨': [
        'De Kanariske Øers flag',
        'IC'
    ],
    '🇮🇩': [
        'Markering af Indonesien',
        'ID',
        'Indonesisk Flag'
    ],
    '🇮🇪': [
        'Irlands flag',
        'IE',
        'Irsk Flag'
    ],
    '🇮🇱': [
        'Israels flag',
        'IL',
        'Israelsk Flag'
    ],
    '🇮🇲': [
        'Flag af Isle of Man',
        'IM',
        'Manx Flag'
    ],
    '🇮🇳': [
        'Flag i Indien',
        'IND',
        'Indisk Flag'
    ],
    '🇮🇴': [
        'Markering af britiske områder i Det Indiske Ocean',
        'IO',
        'Britisk Territorium I Det Indiske Ocean'
    ],
    '🇮🇶': [
        'Markering af Irak',
        'IQ',
        'Iraqi Flag'
    ],
    '🇮🇷': [
        'Irans flag',
        'IR',
        'Iransk Flag'
    ],
    '🇮🇸': [
        'Markering af Island',
        'IS',
        'Islandsk Flag'
    ],
    '🇮🇹': [
        'Markering af Italien',
        'IT',
        'Italiensk Flag'
    ],
    '🇯🇪': [
        'Flag af Jersey',
        'JE',
        'Jersey Flag'
    ],
    '🇯🇲': [
        'Jamaicas flag',
        'JM',
        'Jamaicansk Flag'
    ],
    '🇯🇴': [
        'Jordanas flag',
        'JO',
        'Jordansk Flag'
    ],
    '🇯🇵': [
        'Japans flag',
        'JP',
        'Japansk Flag'
    ],
    '🇰🇪': [
        'Kenyas flag',
        'KE',
        'Kenyansk Flag'
    ],
    '🇰🇬': [
        'Kirgisistans flag',
        'KG',
        'Kyrgyzstani Flag'
    ],
    '🇰🇭': [
        'Cambodjas flag',
        'KH',
        'Cambodjansk Flag'
    ],
    '🇰🇮': [
        'Kiribati flaget',
        'KI',
        'I-Kiribati Flag'
    ],
    '🇰🇲': [
        'Comorernes flag',
        'KM',
        'Comorisk Flag'
    ],
    '🇰🇳': [
        'Saint Kitts & Nevis\' flag',
        'KN'
    ],
    '🇰🇵': [
        'Nordkoreas flag',
        'KP',
        'Nordkoreansk Flag'
    ],
    '🇰🇷': [
        'Sydkoreas flag',
        'KR',
        'Sydkoreansk Flag'
    ],
    '🇰🇼': [
        'Markering af Kuwait',
        'KW',
        'Kuwaiti Flag'
    ],
    '🇰🇾': [
        'Flag på Caymanøerne',
        'KY',
        'Caymanisk Flag'
    ],
    '🇰🇿': [
        'Kasakhstans flag',
        'KZ',
        'Kazakhstani Flag',
        'Kazakh Flag'
    ],
    '🇱🇦': [
        'Markering af Laos',
        'LA',
        'Laotisk Flag',
        'Lao Flag'
    ],
    '🇱🇧': [
        'Libanons flag',
        'LB',
        'Libanesisk Flag'
    ],
    '🇱🇨': [
        'Saint Lucias flag',
        'LC'
    ],
    '🇱🇮': [
        'Liechtensteins flag',
        'LI',
        'Liechtensteiner Flag'
    ],
    '🇱🇰': [
        'Sri Lankas flag',
        'LK',
        'Sri Lankansk Flag'
    ],
    '🇱🇷': [
        'Liberias flag',
        'LR',
        'Liberiansk Flag'
    ],
    '🇱🇸': [
        'Flag of Lesotho',
        'LS',
        'Basotho Flag'
    ],
    '🇱🇹': [
        'Litauens flag',
        'LT',
        'Litauisk Flag'
    ],
    '🇱🇺': [
        'Luxembourgs flag',
        'LU',
        'Luxembourger Flag'
    ],
    '🇱🇻': [
        'Letlands flag',
        'LV',
        'Lettisk Flag'
    ],
    '🇱🇾': [
        'Libyens flag',
        'KUN',
        'Libysk Flag'
    ],
    '🇲🇦': [
        'Markering af Marokko',
        'MA',
        'Marokkansk Flag'
    ],
    '🇲🇨': [
        'Markering af Monaco',
        'MC',
        'Mone gasque Flag'
    ],
    '🇲🇩': [
        'Moldovas flag',
        'MD',
        'Moldovisk Flag'
    ],
    '🇲🇪': [
        'Montenegros flag',
        'ME',
        'Montenegros Flag'
    ],
    '🇲🇫': [
        'Saint Martins flag',
        'MF',
        'Flag: St. Martin'
    ],
    '🇲🇬': [
        'Madagaskars flag',
        'MG',
        'Madagascan Flag'
    ],
    '🇲🇭': [
        'Marshalløernes flag',
        'MH',
        'Marshallesisk Flag'
    ],
    '🇲🇰': [
        'Makedoniens flag',
        'MK',
        'Makedonsk Flag'
    ],
    '🇲🇱': [
        'Mali flag',
        'ML',
        'Maliansk Flag'
    ],
    '🇲🇲': [
        'Myanmars flag (Burma)',
        'MM',
        'Myanmarese Flag',
        'Flag For Burma',
        'Burmesisk Flag'
    ],
    '🇲🇳': [
        'Mongoliets flag',
        'MN',
        'Mongolsk Flag'
    ],
    '🇲🇴': [
        'Flag Macau Sar Kina',
        'MO',
        'Macanesisk Flag'
    ],
    '🇲🇵': [
        'Flag på Northern Mariana Islands',
        'MP',
        'Mikronesisk Flag'
    ],
    '🇲🇶': [
        'Markering af Martinique',
        'MQ',
        'Slange flag af Martinique',
        'Martiniquais Flag'
    ],
    '🇲🇷': [
        'Mauretaniens flag',
        'MR',
        'Mauretansk Flag'
    ],
    '🇲🇸': [
        'Flag of Montserrat',
        'MS',
        'Montserratian Flag'
    ],
    '🇲🇹': [
        'Maltas flag',
        'MT',
        'Maltese Flag'
    ],
    '🇲🇺': [
        'Flag of Mauritius',
        'MU',
        'Mauritisk Flag'
    ],
    '🇲🇻': [
        'Markering af Maldiverne',
        'MV',
        'Maldiviansk Flag'
    ],
    '🇲🇼': [
        'Markering af Malawi',
        'MW',
        'Malawian Flag'
    ],
    '🇲🇽': [
        'Markering af Mexico',
        'MX',
        'Mexicansk Flag'
    ],
    '🇲🇾': [
        'Malaysias flag',
        'MIN',
        'Malaysian Flag'
    ],
    '🇲🇿': [
        'Markering af Mozambique',
        'MZ',
        'Mozambiquisk Flag'
    ],
    '🇳🇦': [
        'Flag af Namibia',
        'NA',
        'Namibian Flag'
    ],
    '🇳🇨': [
        'Flag af Ny Kaledonien',
        'NC',
        'Ny Kaledonien Flag'
    ],
    '🇳🇪': [
        'Niger flag flag',
        'NØ',
        'Nigeriansk Flag'
    ],
    '🇳🇫': [
        'Flag af Norfolk Island',
        'NF',
        'Norfolk Island Flag'
    ],
    '🇳🇬': [
        'Nigerias flag',
        'NG',
        'Nigeriansk Flag'
    ],
    '🇳🇮': [
        'Flag of Nicaragua',
        'NI',
        'Nicaraguan Flag'
    ],
    '🇳🇱': [
        'Nederlandenes flag',
        'NL',
        'Hollandsk Flag',
        'Holland'
    ],
    '🇳🇴': [
        'Norges flag',
        'NEJ',
        'Norsk Flag'
    ],
    '🇳🇵': [
        'Nepals flag',
        'NP',
        'Nepalesisk Flag'
    ],
    '🇳🇷': [
        'Markering af Nauru',
        'NR',
        'Nauruan Flag'
    ],
    '🇳🇺': [
        'Niues flag',
        'NU',
        'Niuean Flag'
    ],
    '🇳🇿': [
        'Flag i New Zealand',
        'NZ',
        'Kiwi-flag'
    ],
    '🇴🇲': [
        'Markering af Oman',
        'OM',
        'Omani Flag'
    ],
    '🇵🇦': [
        'Markering af Panama',
        'PA',
        'Panamansk Flag'
    ],
    '🇵🇪': [
        'Perus flag',
        'PE',
        'Peruviansk Flag'
    ],
    '🇵🇫': [
        'Flag af Fransk Polynesien',
        'PF',
        'Fransk Polynesisk Flag'
    ],
    '🇵🇬': [
        'Markering af Papua Ny Guinea',
        'PG',
        'PNG Flag',
        'Papua New Guinean Flag'
    ],
    '🇵🇭': [
        'Filippinernes flag',
        'PH'
    ],
    '🇵🇰': [
        'Flag Pakistan',
        'PK',
        'Pakistansk Flag'
    ],
    '🇵🇱': [
        'Polens flag',
        'PL',
        'Polsk Flag'
    ],
    '🇵🇲': [
        'Saint Pierres og Miquelons flag',
        'PM'
    ],
    '🇵🇳': [
        'Flag af Pitcairn',
        'PN'
    ],
    '🇵🇷': [
        'Flag Puerto Rico',
        'PR',
        'Puerto Ricansk Flag'
    ],
    '🇵🇸': [
        'Flag af palæstinensiske områder',
        'PS',
        'Palestine'
    ],
    '🇵🇹': [
        'Portugals flag',
        'PT',
        'Portugesisk Flag'
    ],
    '🇵🇼': [
        'Palaus flag',
        'PW',
        'Palauansk Flag'
    ],
    '🇵🇾': [
        'Paraguay-flaget',
        'PY',
        'Paraguayan Flag'
    ],
    '🇶🇦': [
        'Qatar-flaget',
        'QA',
        'Qataris Flag'
    ],
    '🇷🇪': [
        'Flag af Re-union',
        'RE',
        'Ret unionnais Flag'
    ],
    '🇷🇴': [
        'Rumæniens flag',
        'RO',
        'Rumænsk Flag'
    ],
    '🇷🇸': [
        'Flag i Serbien',
        'RS',
        'Serbisk Flag'
    ],
    '🇷🇺': [
        'Markering af Rusland',
        'RU',
        'Russisk Flag'
    ],
    '🇷🇼': [
        'Flag of Rwanda',
        'RW',
        'Rwandan Flag'
    ],
    '🇸🇦': [
        'Flag Saudi-Arabien',
        'SA',
        'Saudi-Arabiens Flag'
    ],
    '🇸🇧': [
        'Salomonøernes flag',
        'SB',
        'Salomon Islander Flag'
    ],
    '🇸🇨': [
        'Seychellernes flag',
        'SC',
        'Seychellois Flag'
    ],
    '🇸🇩': [
        'Flag i Sudan',
        'SD',
        'Sudanese Flag'
    ],
    '🇸🇪': [
        'Flag af Sverige',
        'SØ',
        'Svensk Flag'
    ],
    '🇸🇬': [
        'Markering af Singapore',
        'SG',
        'Singaporeansk Flag'
    ],
    '🇸🇭': [
        'Sankt Helenas flag',
        'SH'
    ],
    '🇸🇮': [
        'Sloveniens flag',
        'SI',
        'Slovensk Flag'
    ],
    '🇸🇯': [
        'Markering af Svalbard og Jan Mayen',
        'SJ'
    ],
    '🇸🇰': [
        'Slovakiets flag',
        'SK',
        'Slovakisk Flag',
        'Slovakian Flag'
    ],
    '🇸🇱': [
        'Markering af Sierra Leone',
        'SL',
        'Sierra Leonean Flag'
    ],
    '🇸🇲': [
        'San Marinos flag',
        'SM',
        'Sammarinesisk Flag'
    ],
    '🇸🇳': [
        'Flag af Senegal',
        'SN',
        'Sengalesisk Flag'
    ],
    '🇸🇴': [
        'Somalias flag',
        'SÅ',
        'Somalian Flag'
    ],
    '🇸🇷': [
        'Markering af Surinam',
        'SR',
        'Surinamer Flag'
    ],
    '🇸🇸': [
        'Det sydlige Sudans flag',
        'SS',
        'Sydsudansk Flag'
    ],
    '🇸🇹': [
        'Markering af Sařo Tomeřo og Priřncipe',
        'ST'
    ],
    '🇸🇻': [
        'Flag El Salvador',
        'SV',
        'El Salvadoransk Flag'
    ],
    '🇸🇽': [
        'Markering af Sint Maarten',
        'SX'
    ],
    '🇸🇾': [
        'Syriens flag',
        'SY',
        'Syrisk Flag'
    ],
    '🇸🇿': [
        'Markering af Swaziland',
        'SZ',
        'Eswatini Flag'
    ],
    '🇹🇦': [
        'Flag of Tristan Da Cunha',
        'TA'
    ],
    '🇹🇨': [
        'Tyrkisk flag og Caicosøerne',
        'TC'
    ],
    '🇹🇩': [
        'Flag af Tchad',
        'TD',
        'Chadiansk Flag'
    ],
    '🇹🇫': [
        'Flag af franske sydlige områder',
        'TF',
        'Franske Sydlige Lands Flag'
    ],
    '🇹🇬': [
        'Togos flag',
        'TG',
        'Togolese Flag'
    ],
    '🇹🇭': [
        'Thailands flag',
        'TH',
        'Thailandsk Flag'
    ],
    '🇹🇯': [
        'Tadsjikistans flag',
        'TJ',
        'Tajikisk Flag'
    ],
    '🇹🇰': [
        'Markering af Tokelau',
        'TK',
        'Tokelausk Flag'
    ],
    '🇹🇱': [
        'Timor-Lestes flag',
        'TL',
        'Timor-Leste Flag',
        'Østtimors Flag'
    ],
    '🇹🇲': [
        'Markering af Turkmenistan',
        'TM',
        'Turkmen Flag'
    ],
    '🇹🇳': [
        'Tunesiens flag',
        'TN',
        'Tunesisk Flag'
    ],
    '🇹🇴': [
        'Tongas flag',
        'TIL',
        'Tongan Flag'
    ],
    '🇹🇷': [
        'Markering af Tyrkiet',
        'TR',
        'Tyrkisk Flag'
    ],
    '🇹🇹': [
        'Trinidad & Tobagos flag',
        'TT'
    ],
    '🇹🇻': [
        'Markering af Tuvalu',
        'Tv',
        'Tuvaluansk Flag'
    ],
    '🇹🇼': [
        'Taiwans flag',
        'TW',
        'Taiwansk Flag'
    ],
    '🇹🇿': [
        'Flag af Tanzania',
        'TZ',
        'Tanzanian Flag'
    ],
    '🇺🇦': [
        'Ukraines flag',
        'UA',
        'Ukrainsk Flag'
    ],
    '🇺🇬': [
        'Flag af Uganda',
        'UG',
        'Ugandisk Flag'
    ],
    '🇺🇲': [
        'Flag: Amerikanske Oversøiske Øer',
        'UM'
    ],
    '🇺🇸': [
        'Markering af USA',
        'USA',
        'Amerikansk Flag',
        'USA Flag'
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
        'Flag af Hellig Sjæl',
        'VA',
        'Vanticanien Flag'
    ],
    '🇻🇨': [
        'Saint Vincent & Grenadinernes flag',
        'VC'
    ],
    '🇻🇪': [
        'Venezuelas flag',
        'VE',
        'Venezuelansk Flag'
    ],
    '🇻🇬': [
        'De Britiske Jomfruøers flag',
        'VG',
        'Britisk Jomfru Islander Flag'
    ],
    '🇻🇮': [
        'De Amerikanske Jomfruøers flag',
        'VI',
        'US Virgin Islander Flag'
    ],
    '🇻🇳': [
        'Markering af Vietnam',
        'VN',
        'Vietnamesisk Flag'
    ],
    '🇻🇺': [
        'Flag of Vanuatu',
        'VU',
        'Ni-Vanuatu Flag'
    ],
    '🇼🇫': [
        'Markering af Wallis & Futuna',
        'WF'
    ],
    '🇼🇸': [
        'Samoas flag',
        'WS',
        'Samoan Flag'
    ],
    '🇽🇰': [
        'Markering af Kosovo',
        'XK',
        'Kosovar Flag'
    ],
    '🇾🇪': [
        'Yemens flag',
        'YE',
        'Yemens Flag'
    ],
    '🇾🇹': [
        'Markering af Mayotte',
        'YT',
        'Mayotte Flag'
    ],
    '🇿🇦': [
        'Sydafrikas flag',
        'ZA',
        'Sydafrikansk Flag'
    ],
    '🇿🇲': [
        'Zambias flag',
        'ZM',
        'Zambian Flag'
    ],
    '🇿🇼': [
        'Zimbabwes flag',
        'ZW',
        'Zimbabwisk Flag',
        'Zim Flag'
    ]
};
/*sports*/
emojis_language[lang][8] = {
    '🧗{{skin_tone}}‍‍♂️': [
        'Mand Klatring',
        'Mand Rock Climber',
        'Mand Klimber'
    ],
    '🧗{{skin_tone}}‍‍♀️': [
        'Kvinde Klatring',
        'Kvindelig Rock Climber',
        'Kvinde Klimber'
    ],
    '🏇{{skin_tone}}‍': [
        'Hest Racing',
        'Race For Heste',
        'Jockey'
    ],
    '⛷{{skin_tone}}‍️': ['Skiløber'],
    '🏂{{skin_tone}}‍': ['Snowboarder'],
    '🏌️{{skin_tone}}‍♂️': ['Man Golfer'],
    '🏌️{{skin_tone}}‍♀️': ['Kvinde Golfer'],
    '🏄{{skin_tone}}‍♂️': ['Mand Surfer'],
    '🏄{{skin_tone}}‍♀️': ['Kvinde Surfer'],
    '🚣{{skin_tone}}‍‍♂️': ['Mand Roning Båd'],
    '🚣{{skin_tone}}‍‍♀️': ['Kvinde Roning Båd'],
    '🏊{{skin_tone}}‍‍♂️': [
        'Mand Svømning',
        'Mand Svømmer'
    ],
    '🏊{{skin_tone}}‍‍♀️': [
        'Kvinde Svømning',
        'Kvinde Svømmer'
    ],
    '⛹{{skin_tone}}‍️‍♂️': [
        'Man Bouncing Ball',
        'Man Basketball Spiller'
    ],
    '⛹️{{skin_tone}}‍♀️': [
        'Kvinde Bouncing Ball',
        'Kvinde Basketball Player'
    ],
    '🏋️{{skin_tone}}‍♂️': [
        'Mand Løftning Vægter',
        'Mand Vægtløfter'
    ],
    '🏋️{{skin_tone}}‍♀️': [
        'Kvinde Løftevægte',
        'Kvinde Vægtløfter'
    ],
    '🚴{{skin_tone}}‍♂️': [
        'Mand Cykling',
        'Mand Cyclist',
        'Mand Cyclist'
    ],
    '🚴{{skin_tone}}‍♀️': [
        'Kvinde Cykling',
        'Kvinde Cykelliste',
        'Kvinde Cyklist'
    ],
    '🚵{{skin_tone}}‍♂️': [
        'Mand Mountain Biking',
        'Mand Mountain Biker'
    ],
    '🚵{{skin_tone}}‍♀️': [
        'Kvinde Mountain Biking',
        'Kvinde Mountain Biker'
    ],
    '🤸{{skin_tone}}‍♂️': [
        'Mand Kartwheeling',
        'Mand Doing Cartwheel'
    ],
    '🤸{{skin_tone}}‍♀️': [
        'Kvinde Kartwheeling',
        'Kvinde Doing Papirhjul'
    ],
    '🤼': [
        'Folk Bryder',
        'Brydning',
        'Brydere'
    ],
    '🤽{{skin_tone}}‍♂️': ['Mand, Der Spiller Vand Polo'],
    '🤽{{skin_tone}}‍♀️': ['Kvinde Spille Vand Polo'],
    '🤾{{skin_tone}}‍♂️': ['Mand Afspiller Håndbold'],
    '🤾{{skin_tone}}‍♀️': ['Kvinde Spiller Håndbold'],
    '🤹{{skin_tone}}‍♂️': [
        'Mand Jonglering',
        'Mand Jongler'
    ],
    '🤹{{skin_tone}}‍♀️': [
        'Kvinde Juggling',
        'Kvinde Jongler'
    ],
    '🧘{{skin_tone}}‍♂️': ['Mand i Lotus Position'],
    '🧘{{skin_tone}}‍♀️': ['Kvinde i Lotus position'],
    '🏃{{skin_tone}}‍♂️': ['Mand Kører'],
    '🏃{{skin_tone}}‍♀️': ['Kvinde Kører'],
    '🕺{{skin_tone}}‍': ['Mand Dansning'],
    '💃{{skin_tone}}‍': ['Kvinde Dans'],
    '🤺': [
        'Person Fægtning',
        'Kræft'
    ],
    '🏆': [
        'Trofæ',
        'Mesterskab',
        'Vinder'
    ],
    '🏅': ['Sports Medalje'],
    '🥇': [
        '1. Sted Medalje',
        'Første Sted Medalje',
        'Guld Medalje'
    ],
    '🥈': [
        '2. Sted Medalje',
        'Andet Sted Medal',
        'Sølv Medalje'
    ],
    '🥉': [
        '3. Sted Medalje',
        'Tredje Sted Medal',
        'Bronze Medalje'
    ],
    '⚽': [
        'Fodbold',
        'Fodbold'
    ],
    '⚾': [
        'Baseball',
        'Blød',
        'Hvid'
    ],
    '🥎': [
        'Blød',
        'Gul'
    ],
    '🏀': [
        'Basketball',
        'Orange',
        'Basketball og Hoop'
    ],
    '🏐': ['Volleyball'],
    '🏈': [
        'Amerikansk Fodbold',
        'Fodbold',
        'Gridiron',
        'Superbowl'
    ],
    '🏉': [
        'Rugby Fodbold',
        'Fodbold',
        'Liga',
        'Rugby',
        'Union'
    ],
    '🎾': [
        'Tennis',
        'Kugle',
        'Racket',
        'Racquet'
    ],
    '🥏': [
        'Flyvende Disk',
        'Frisbee'
    ],
    '🎳': [
        'Bowling',
        'Stifter',
        'Skittles',
        'Ti Pin Bowling'
    ],
    '🏏': [
        'Cricket',
        'Flagermus',
        'Kugle'
    ],
    '🏑': [
        'Felt Hockey',
        'Kugle',
        'Hold'
    ],
    '🏒': [
        'Ishockey',
        'Kugle',
        'Hold'
    ],
    '🥍': [
        'Lacrosse',
        'Kugle',
        'Hold'
    ],
    '🏓': [
        'Ping Pong',
        'Bordtennis',
        'Kugle',
        'Paddle'
    ],
    '🏸': [
        'Badminton',
        'Shuttlecock',
        'Racquet'
    ],
    '🥊': ['Boxing Handske'],
    '🥋': [
        'Uniform For Kampsport',
        'Judo',
        'Karate',
        'Kung fu'
    ],
    '⛳': [
        'Markér i hul',
        'Golf Flag'
    ],
    '⛸️': [
        'Is Skate',
        'Skøjteløb'
    ],
    '🎣': [
        'Fiskeri',
        'Stang',
        'Fisk',
        'Fiskerestel'
    ],
    '🎽': [
        'Kørende Skjorte',
        'Singlet',
        'Bånd'
    ],
    '🎿': [
        'Ski',
        'Skiløb',
        'Start'
    ],
    '🛷': ['Sled'],
    '🥌': ['Krøllende Sten'],
    '🎯': [
        'Direkte Hit',
        'Bueskydning',
        'Bullseye',
        'Dart'
    ],
    '🎱': [
        'Pool 8 Ball',
        'Cue Ball',
        'Snooker',
        'Billard'
    ],
    '🎮': [
        'Videospil Controller',
        'Afspilningsstation',
        'Xbox',
        'Gamepad',
        'Wii U'
    ],
    '♟️': ['Sort Skak Bonde'],
    '🏹': [
        'Bue og pil',
        'Arch'
    ],
    '🥅': ['Mål Netto'],
    '🀄': [
        'Mahjong Rød Drage',
        'Mahjong',
        'Mahjong Tile',
        '中',
        'Mahjong Tile Rød Drage'
    ],
    '🎴': [
        'Blomster Afspilningskort',
        'Dæk Kort',
        'Hanafuda',
        'Hwatu',
        'Afspiller Kort'
    ]
};
/*travel and places*/
emojis_language[lang][9] = {
    '🚂': [
        'Steam Lokomotiv',
        'Steam Tog',
        'Lokomotiv Til Jernbane'
    ],
    '🚃': [
        'Jernbane Bil',
        'Jernbane',
        'Jernbane Bil',
        'Jernbanetransport',
        'Jernbanevogn'
    ],
    '🚄': ['Højhastighedstog'],
    '🚅': [
        'Bullet Tog',
        'Shinkansen',
        'Højhastighedstog med kuglenæse'
    ],
    '🚆': ['Tog'],
    '🚇': [
        'Underjordisk',
        'Rør',
        'Metro',
        'Undervej'
    ],
    '🚈': [
        'Let Skinner',
        'Tog'
    ],
    '🚊': ['Sporvogn'],
    '🚝': [
        'Monorail',
        'Tog'
    ],
    '🚞': [
        'Bjergbaner',
        'Funicular',
        'Tog Og Bjerg'
    ],
    '🚋': ['Sporvogn Bil'],
    '🚌': [
        'Bus',
        'Træner'
    ],
    '🚍': [
        'Kommende Bus',
        'Buskens Front'
    ],
    '🚎': [
        'Trolleybus',
        'Elektrisk Bus'
    ],
    '🚐': [
        'Minibus',
        'Minivan',
        'Menneske-Mover'
    ],
    '🚑': ['Ambulance'],
    '🚒': [
        'Brand Motor',
        'Brand Afdeling',
        'Brandbil'
    ],
    '🚓': [
        'Politi Bil',
        'Cop Bil',
        'Side Af Politi Bil'
    ],
    '🚔': [
        'Kommende Politibil',
        'Front of Politi Car',
        'Cop Bil'
    ],
    '🚕': [
        'Taxa',
        'New York Taxi',
        'Side Af Taxi'
    ],
    '🚖': [
        'Taxa',
        'Kommende Taxa',
        'Front of Taxi'
    ],
    '🚗': [
        'Bil',
        'Rød Bil',
        'Side Af Bil'
    ],
    '🚘': [
        'Kommende Automobil',
        'Rød Bil',
        'Bil Front'
    ],
    '🚚': [
        'Levering Lastbil',
        'Lastbil'
    ],
    '🚛': [
        'Leddelt Lastbil',
        'Grøn Lastbil'
    ],
    '🚜': [
        'Traktor',
        'Gård'
    ],
    '🛻': ['Afhentning Lastbil'],
    '🏎️': [
        'Racing Bil',
        'F1',
        'Formel 1',
        'Race Bil'
    ],
    '🏍️': [
        'Motorcykel',
        'Motorcykel'
    ],
    '🛵': [
        'Motor Scooter',
        'Vespa',
        'Motor Cykel',
        'Motor Cykel'
    ],
    '🛺': [
        'Automatisk Rickshaw',
        'Tuk Tuk'
    ],
    '🚲': [
        'Cykel',
        'Cykel'
    ],
    '🛴': ['Spark Løbehjul'],
    '⛵': [
        'Sejlbåde',
        'Dinghy',
        'Yacht'
    ],
    '🚤': [
        'Speedboat',
        'Motorbåd',
        'Kraftbåd'
    ],
    '🛳️': ['Passagerskib'],
    '⛴️': ['Færge'],
    '🛥️': ['Motor Båd'],
    '🚢': ['Krydstogtskib'],
    '✈️': [
        'Fly',
        'Aeroplane'
    ],
    '🛩️': [
        'Lille Fly',
        'Lille Fly'
    ],
    '🚁': ['Helikopter'],
    '🚟': ['Suspension Af Jernbaner'],
    '🚠': ['Mountain Cableway'],
    '🚡': [
        'Antenne Tramway',
        'Kabel Bil',
        'Gondola',
        'Ropeway'
    ],
    '🛰️': ['Satellit'],
    '🚀': [
        'Raket',
        'Mellemrum Shuttle'
    ],
    '🛸': [
        'Flyvende Saucer',
        'UFO'
    ],
    '🚉': [
        'Togstation',
        'Platform Af Tog'
    ],
    '🚏': ['Bus Stop'],
    '🛣️': [
        'Motorvej',
        'Vej',
        'Motorvej',
        'Interstate'
    ],
    '🛤️': ['Jernbane Spor'],
    '🛫': [
        'Flyafgang',
        'Aftagning'
    ],
    '🛬': [
        'Fly Ankomst',
        'Fly Ankommer',
        'Landing'
    ],
    '🗾': ['Kort over Japan'],
    '⛰️': ['Bjerg'],
    '🏔️': ['Sne Cappet Mountain'],
    '🌋': ['Vulkan'],
    '🗻': [
        'Montér Fuji',
        'Fuji-san'
    ],
    '🏕️': [
        'Camping',
        'Campingplads'
    ],
    '🏖️': ['Strand Med Paraply'],
    '🏜️': ['Desert'],
    '🏝️': ['Ørken Ø'],
    '🏞️': ['National Park'],
    '🏟️': [
        'Stadion',
        'Grandstand',
        'Sport Stadion'
    ],
    '🏛️': [
        'Klassisk Bygning',
        'Græsk',
        'Rom'
    ],
    '🏗️': [
        'Byggeri Konstruktion',
        'Krane'
    ],
    '🏘️': [
        'Huse Bygninger',
        'Gruppe af huse'
    ],
    '🏚️': [
        'Derelict House Building',
        'Forladt Hus',
        'Det Gamle Hus',
        'Hjemsøgt Hus'
    ],
    '🏠': [
        'Hjem',
        'Husets Bygning'
    ],
    '🏡': [
        'Hus Med Have',
        'Hus Og Træ'
    ],
    '🏢': [
        'Kontor Bygning',
        'Byens Bygning',
        'High-Rise Building'
    ],
    '🏣': [
        'Japansk Indlægskontor',
        'Japansk Postmærke'
    ],
    '🏤': [
        'Indlæg Kontor',
        'Det Europæiske Postkontor'
    ],
    '🏥': [
        'Hospital',
        'ER',
        'A&E',
        'Nødlokalet',
        'Ulykke Og Nødsituation',
        'Røde Kors',
        'Medicinsk'
    ],
    '🏦': [
        'Bank',
        'BK',
        'Bakkureru',
        'Bank Branch',
        'Bakkureru'
    ],
    '🏨': [
        'Hotel',
        'Overnatning',
        'H Bygning'
    ],
    '🏩': [
        'Kærlighed Hotel',
        'Kærlighed Heart Hotel'
    ],
    '🏪': [
        'Bekvemmelighed Butik',
        '24-Timers Butik',
        '7-11',
        'Hjørne Shop',
        'Kwik-E-Mart'
    ],
    '🏫': [
        'Skole',
        'Ur Tårn',
        'Elementær Høj Middel'
    ],
    '🏬': [
        'Afdeling Butik',
        'Shopping Center',
        'Butik'
    ],
    '🏭': [
        'Fabrik',
        'Industrien',
        'Industri',
        'Forurening',
        'Smog'
    ],
    '🏯': [
        'Japansk Slot',
        'Fort'
    ],
    '🏰': [
        'Europæisk Slot',
        'Turrets'
    ],
    '💒': [
        'Kirke Hjerte',
        'Bryllup Kirke',
        'Ægteskab'
    ],
    '🗼': [
        'Tokyo Tower',
        'Eiffeltårnet',
        'Rødt Tårn'
    ],
    '🗽': [
        'Statue af frihed',
        'New York'
    ],
    '⛪': [
        'Kirke Bygning',
        'Kryds'
    ],
    '🕌': [
        'Moské',
        'Domed Tag',
        'Minaret'
    ],
    '🛕': ['Hindu Tempel'],
    '🕍': [
        'Synagoge',
        'Jødisk',
        'Synagog',
        'Tempel'
    ],
    '⛩️': [
        'Shinto Shrine',
        'Kami-no-michi'
    ],
    '🕋': [
        'Kaaba',
        'Mecca'
    ],
    '🏙️': ['Cityscape'],
    '⛱️': [
        'Paraply på jorden',
        'Strand Paraply'
    ],
    '🌄': [
        'Solopgang Over Bjerge',
        'Morgen',
        'Solopgang'
    ],
    '🌅': [
        'Solopgang',
        'Solnedgang'
    ],
    '🌆': [
        'Bybillede på Dusk',
        'Orange Sky City',
        'Dusk By'
    ],
    '🌇': [
        'Solnedgang Over Bygninger',
        'By Solnedgang'
    ],
    '🌃': [
        'Nat med stjerner',
        'By Om Natten',
        'Stjerneklar Nat'
    ],
    '🗿': [
        'Moai',
        'Påskeøens Statue',
        'Human Rock Carving',
        'Moyai Statue'
    ],
    '🌠': [
        'Skydning Stjerne',
        'Når Du Ønsker Efter En Stjerne',
        'Meteoroid'
    ],
    '🌌': [
        'Mælkevej',
        'Galakse',
        'Nat Himmel',
        'Mellemrum',
        'Stjerner',
        'Univers'
    ],
    '🎑': [
        'Måne Visning Ceremony',
        'Græs, Dumplings og Månen',
        'Høst Måne',
        'Midtefterårsfestival',
        'Tsukimi'
    ],
    '🛖': ['Høm'],
    '🎢': [
        'Rulle Coaster',
        'Rollercoaster',
        'Tema Park'
    ]
};
/*technologies (smartphones, laptops, etc.) and office*/
emojis_language[lang][10] = {
    '⌚': [
        'Se',
        'Tidsstykke',
        'Apple Watch'
    ],
    '⏰': ['Alarm Ur'],
    '⏱️': ['Stopur'],
    '⏲️': ['Timer Ur'],
    '🕰️': ['Mantelpiece Ur'],
    '🧭': ['Kompas'],
    '🕹️': ['Joystick'],
    '🎙️': ['Studio Mikrofon'],
    '🎚️': ['Niveau Slider'],
    '🎛️': ['Kontrolknapper'],
    '📻': [
        'Radio',
        'Digital Radio',
        'Trådløs'
    ],
    '📱': [
        'Mobiltelefon',
        'Smartphone',
        'iPhone',
        'Mobiltelefon'
    ],
    '📲': [
        'Mobiltelefon med højre pil på venstre side',
        'Telefon Opkald',
        'Peger Til Telefon'
    ],
    '☎️': [
        'Sort Telefon',
        'Roterende Telefon',
        'Rød'
    ],
    '📞': [
        'Telefon Modtager',
        'Handset',
        'Telefon',
        'Sort'
    ],
    '📟': [
        'Personsøger',
        'Bieper',
        'Bleeper'
    ],
    '📠': [
        'Fax Maskine',
        'Facsimile',
        'Fax'
    ],
    '🔋': [
        'Batteri',
        'AA Batteri',
        'Telefon Batteri'
    ],
    '🔌': [
        'Elektrisk Plug',
        'AC Adaptor',
        'Strømkabel',
        'Strøm Plug'
    ],
    '💻': [
        'Bærbar',
        'Notesbog',
        'Personlig Computer',
        'PC',
        'MacBook',
        'Overflade'
    ],
    '🖥️': [
        'Desktop Computer',
        'iMac',
        'PC'
    ],
    '🖨️': ['Printer'],
    '⌨️': ['Keyboard'],
    '🖱️': [
        'Computer Mus',
        'Tre Knap Mus'
    ],
    '🖲️': ['Trackball'],
    '💽': [
        'Computer Disk',
        'Minidisc',
        'Cd',
        'Dvd',
        'Blu-ray',
        'BD'
    ],
    '💾': [
        'Diskettedrev',
        '3.5′′ Disk',
        'Disk'
    ],
    '💿': [
        'Optisk Disk',
        'Cd',
        'Cd- ROM',
        'Kompakt Disk'
    ],
    '📀': [
        'Dvd',
        'DVD- ROM',
        'Dvd Video'
    ],
    '🎥': [
        'Film Kamera',
        'Film Kamera',
        'Hollywood',
        'Film'
    ],
    '🎞️': ['Film Rammer'],
    '📽️': ['Filmprojektor'],
    '📺': [
        'Fjernsyn',
        'Tv'
    ],
    '📷': ['Digitalt Kamera'],
    '📸': ['Kamera med Flash'],
    '📹': [
        'Videokamera',
        'Videokamera'
    ],
    '📼': [
        'Videokassette',
        'VHS',
        'VCR',
        'Video- Bånd',
        'Videokassette'
    ],
    '💳': [
        'Kreditkort',
        'Debet Kort',
        'AMEX',
        'Diners Club',
        'Amerikansk Express',
        'Mastercard',
        'VISA-kort'
    ],
    '📧': [
        'E-mail',
        'E-mail'
    ],
    '📨': [
        'Indgående Konvolut',
        'Konvolut Med Linjer',
        'Hurtig Konvolut'
    ],
    '📩': [
        'Konvolut med nedadgående pil over',
        'Pil Konvolut Ned',
        'Indsæt I Konvolut'
    ],
    '📤': ['Udbakke'],
    '📥': ['Indbakke'],
    '📮': ['Postkasse'],
    '📁': [
        'Fil Mappe',
        'Mappe',
        'Mappe',
        'Lukket Filmappe'
    ],
    '📂': [
        'Åbn Filmappe',
        'Mappe'
    ],
    '🗂️': ['Card Index Dividers'],
    '📅': [
        'Kalender',
        '17. Juli',
        'Verden Emoji-dag'
    ],
    '🗓️': ['Spiral Kalender Pad'],
    '📆': [
        'Tear-Off Kalender',
        'Dag Kalender',
        'Skrivebordskalender'
    ],
    '📈': [
        'Forøgelse Af Diagram',
        'Positivt Diagram',
        'Retning Af Graf',
        'Diagram med opadgående tendens'
    ],
    '📉': [
        'Kortnedgang',
        'Negativ Diagram',
        'Grafen For Punkter',
        'Diagram med nedadgående tendens'
    ],
    '📊': [
        'Bjælke Diagram',
        'Linje Graf'
    ],
    '📌': [
        'Pushpin',
        'Thumb Tack'
    ],
    '📋': ['Udklipsholder'],
    '📍': [
        'Rund Pushpin',
        'Dropped Pin',
        'Kort Pin',
        'Fastgør',
        'Rød Stift'
    ],
    '📎': [
        'Papirclip',
        'Clippy'
    ],
    '📏': ['Lige Hersker'],
    '📐': [
        'Trekantet Hersker',
        'Trekantlineal'
    ],
    '✂️': [
        'Saks',
        'Klip'
    ],
    '✏️': [
        'Blyant',
        'Lead Blyant'
    ],
    '✒️': [
        'Sort Nib',
        'Pen Nib',
        'Springvand Pen'
    ],
    '🖋️': [
        'Springvand Pen',
        'Nederste Venstre Springvand Pen'
    ],
    '🖊️': [
        'Pen',
        'Nederste Venstre Kuglepen',
        'Kuglepen Pen'
    ],
    '🖌️': [
        'Pensel',
        'Børste',
        'Nedre Venstre Pensel'
    ],
    '🖍️': [
        'Crayon',
        'Nedre Venstre Crayon'
    ],
    '📝': [
        'Memo',
        'Memorandum',
        'Bemærkning',
        'Blyant Og Papir'
    ],
    '🗑️': [
        'Indkøbskurv',
        'Skrald Dåse',
        'Rubbish Bin',
        'Papirkurven Dåse'
    ],
    '📡': ['Satellit Antenne'],
    '🔭': [
        'Teleskop',
        'Stjernekigger'
    ],
    '🔬': [
        'Mikroskop',
        'Magnify',
        'Videnskab'
    ],
    '📭': ['Åbn postkasse med sænket flag'],
    '📬': [
        'Åbn postkasse med hævet flag',
        'Åbn Postkasse'
    ],
    '📪': ['Lukket postkasse med sænket flag'],
    '📫': ['Lukket postkasse med hævet flag'],
    '📰': ['Avis'],
    '🗞️': [
        'Rolled-Up Avis',
        'Avis Levering'
    ],
    '📄': [
        'Side Vender Op',
        'Trykt Side'
    ],
    '📜': [
        'Rul',
        'Grad',
        'Parchment'
    ],
    '📃': [
        'Side med Curl',
        'Curled Page',
        'Curly Page'
    ],
    '📓': [
        'Notesbog',
        'Sort Og Hvid Bog'
    ],
    '📔': ['Notesbog med dekorativ omslag'],
    '📕': [
        'Lukket Bog',
        'Rød Bog',
        'Rød Tekstbog'
    ],
    '📖': [
        'Åbn Bog',
        'Bog',
        'Novel'
    ],
    '📗': [
        'Grøn Bog',
        'Grønt Tekstbog'
    ],
    '📘': [
        'Blå Bog',
        'Blå Tekstbog'
    ],
    '📙': [
        'Orange Bog',
        'Orange Tekstbog'
    ],
    '📚': [
        'Bøger',
        'Bøger Pile',
        'Stak Af Bøger'
    ],
    '🗳️': [
        'Ballot Box med Ballot',
        'Stemmeboks',
        'Afstemning'
    ],
    '🗄️': [
        'Filkabinet',
        'Indkapsling Kabinet'
    ],
    '🗃️': ['Kort Fil Boks'],
    '🖇️': ['Sammenkædede Paperclips']
};
/*clothes and accessories*/
emojis_language[lang][11] = {
    '👣': [
        'Fodspor',
        'Fod',
        'Fodtrin'
    ],
    '👓': [
        'Briller',
        'Eveybriller'
    ],
    '🕶️': ['Solbriller'],
    '🥽': ['Goggles'],
    '🥼': ['Lab Frakke'],
    '👔': [
        'Necktie',
        'Forretningshirt',
        'Shirt And Tie'
    ],
    '👕': [
        'T-Shirt',
        'Tee Shirt',
        'Polo Shirt'
    ],
    '👖': [
        'Jeans',
        'Denim',
        'Bukser',
        'Bukser'
    ],
    '🧣': ['Scarf'],
    '🧤': ['Handsker'],
    '🧥': ['Frakke'],
    '🧦': ['Socks'],
    '👗': [
        'Kjole',
        'Nederdel',
        'Ned'
    ],
    '👘': [
        'Kimono',
        'Dressing Gown',
        'Japansk Kjole'
    ],
    '👙': [
        'Bikini',
        'badende',
        'Badedragt'
    ],
    '🩱': ['Ét Stykke Svømning'],
    '👚': [
        'Kvinde Tøj',
        'Blouse',
        'Lyserød Skjorte',
        'Blouse'
    ],
    '👛': [
        'Pung',
        'Tegnebog'
    ],
    '👜': ['Håndtaske'],
    '👝': [
        'Koblingspose',
        'Kobling',
        'Lille Taske',
        'Pouch'
    ],
    '🎒': [
        'Rygsæk',
        'Pose',
        'Skoletaske',
        'Skole Satchel',
        'Rucksack'
    ],
    '👞': [
        'Mans Shoe',
        'Sko',
        'Brun Serie',
        'Kjole Vis'
    ],
    '👟': [
        'Atletisk Sko',
        'Kørende Sko',
        'Sneaker',
        'Løber',
        'Træner',
        'Tennis Sko'
    ],
    '🥾': ['Vandretur Boot'],
    '🥿': ['Flad Sko'],
    '👠': [
        'High-Heeled Sko',
        'Stiletto',
        'Høje Hæle'
    ],
    '👡': [
        'Kvinde Sandal',
        'Hæklet Sandal',
        'Saldals'
    ],
    '👢': [
        'Kvinde Støvler',
        'Cowgirl Støvler',
        'Høje Støvler I Knæ',
        'Hælede Støvler'
    ],
    '👑': [
        'Krone',
        'Konge',
        'Dronning',
        'Prins',
        'Kongelig',
        'Prinsesse'
    ],
    '👒': [
        'Hat',
        'Kvinde Hat',
        'Hat Med Bue',
        'Dame Hat'
    ],
    '🎩': [
        'Top Hat',
        'Formelt Slid',
        'Groom'
    ],
    '🎓': [
        'Graduering Cap',
        'Kollegiet',
        'Graduate',
        'Mørtel Bræt',
        'Universitet',
        'Firkantet Akademisk Cap'
    ],
    '🧢': [
        'Faktureret Hætte',
        'Baseball Cap'
    ],
    '⛑️': [
        'Hjelm med hvid kors',
        'Redning Arbejderhjelm'
    ],
    '💼': [
        'Kort',
        'Kuffert'
    ],
    '🎖️': [
        'Militær Medalje',
        'Medalje',
        'Medaljon',
        'Militær Dekoration'
    ],
    '📿': [
        'Bøn Perler',
        'Dhikr Perler',
        'Rosenkrans'
    ],
    '🎗️': ['Påmindelse Ribbo'],
    '🤿': ['Dykning Maske'],
    '🦺': ['Sikkerhed Vest'],
    '🥻': [
        'Sari',
        'Saree',
        'Shari'
    ],
    '🩲': ['Korte'],
    '🩳': ['Korte'],
    '🛼': [
        'Rulle Skate',
        'Inline Skate',
        'Rulle Derby'
    ],
    '🩴': [
        'Vend Flop',
        'Trusse Sandal'
    ],
    '🪖': ['Militær Hjelm'],
    '🩰': [
        'Ballet Sko',
        'Pointe Sko'
    ]
};
/*hands and parts of body*/
emojis_language[lang][12] = {
    '👋{{skin_tone}}': [
        'Venter Håndskilt',
        'Farvel',
        'Hånd Bølge',
        'Hej',
        'Hi'
    ],
    '🖐️{{skin_tone}}': [
        'Hånd med Fingers Splayed',
        'Fem Hånd',
        'Splayed Hand',
        'Raised Hand med Fingers Splayed'
    ],
    '🤚{{skin_tone}}‍': [
        'Startet bagside af hånd',
        'Baghånd'
    ],
    '✋{{skin_tone}}‍': [
        'Forhøjet Hånd',
        'Høj Fem',
        'Stop'
    ],
    '🖖{{skin_tone}}‍': [
        'Vulcan Salute',
        'Spock',
        'Stjerne Trek',
        'Hævet hånd med del mellem midterste og Ring Fingers'
    ],
    '👌{{skin_tone}}‍': [
        'OK Hånd Signér',
        'Okay',
        'Perfekt',
        'Ja'
    ],
    '✌️{{skin_tone}}‍': [
        'Sejr Hånd',
        'Luft Tilbud',
        'Fred Skilt',
        'V Skilt'
    ],
    '🤞{{skin_tone}}‍': [
        'Krydsede Fingre',
        'Fingre Krydset',
        'Held Og Lykke',
        'Hånd med indeks og mellemste Fingers krydsede'
    ],
    '🤟{{skin_tone}}‍': [
        'Kærlighed-You Bevægelse',
        'Jeg Elsker Dig Håndskilt'
    ],
    '🤘{{skin_tone}}‍': [
        'Signering af hornene',
        'Devil Fingre',
        'Kraftig Metal',
        'Rock Til'
    ],
    '🤙{{skin_tone}}‍': [
        'Ring Til Mig Hånd',
        'Telefon Hånd',
        'Shaka'
    ],
    '🤏{{skin_tone}}‍': ['Knib Hånd'],
    '👈{{skin_tone}}‍': [
        'Bagside Indeks Retning Til Venstre',
        'Hvidt Venstrepegende Baghåndsindeks'
    ],
    '👉{{skin_tone}}‍': [
        'Bagside Indeks Retter Højre',
        'Hvidt Højrepegende Baghåndindeks'
    ],
    '👆{{skin_tone}}‍': [
        'Bagside Indeks Retning Op',
        'White Up Pointing Backhand Index',
        'Midterste Finger'
    ],
    '👇{{skin_tone}}‍': [
        'Bagside Indeks Retning Ned',
        'White Down Pointing Backhand Index',
        'Retter Ned'
    ],
    '☝{{skin_tone}}‍️': [
        'Indeks Fingerpegning Op',
        'White Up Pointing Indeks',
        'Hemmelighed'
    ],
    '🖕{{skin_tone}}‍': [
        'Midterste Finger',
        'Vend Fuglen',
        'Rude Finger',
        'Omvendt hånd med Midterfinger udvidet'
    ],
    '👍{{skin_tone}}‍': [
        'Thumbs Up Tilmeld',
        'Ligesom',
        'Ja'
    ],
    '👎{{skin_tone}}‍': [
        'Tommelfinger Ned Skilt',
        'Dårlig',
        'Dislike',
        'Nej'
    ],
    '✊{{skin_tone}}‍': [
        'Hævet knytnæve',
        'Næppe Pumpe'
    ],
    '👊{{skin_tone}}‍': [
        'Kommende Næse',
        'Bro Fist',
        'Brofist',
        'Næppe Hop',
        'Stanse',
        'Lukket Knæve',
        'Fisted Håndskilt'
    ],
    '🤛{{skin_tone}}‍': ['Venstre Nederst'],
    '🤜{{skin_tone}}‍': ['Højre Fist Hop'],
    '🤌{{skin_tone}}‍': [
        'Sammensatte Fingre',
        'Ma Che Vuoi',
        'Fingerpung'
    ],
    '👏{{skin_tone}}‍': [
        'Clapping Hænder Signering',
        'Bifald',
        'Clap',
        'Klemme',
        'Golf Klap',
        'Runde Bifald'
    ],
    '🙌{{skin_tone}}‍': [
        'Person Raising begge hænder i fejring',
        'Stigende Hænder',
        'Våben I Luften',
        'Banzai',
        'Festivus Mirakel',
        'Hallelujah',
        'Hæv Hænder',
        'To Hænder'
    ],
    '👐{{skin_tone}}‍': [
        'Åbn Hænder Signering',
        'Kniv',
        'Jazz Hænder'
    ],
    '🤲{{skin_tone}}‍': [
        'Palmer Op Sammen',
        'Dua'
    ],
    '🤝{{skin_tone}}‍': [
        'Handshake',
        'Rystende Hænder'
    ],
    '🙏{{skin_tone}}‍': [
        'Foldede Hænder',
        'Namaste',
        'Venligst',
        'Bøn',
        'Tak',
        'Person med foldede hænder'
    ],
    '✍{{skin_tone}}‍️': ['Brænder Hånd'],
    '💪{{skin_tone}}‍': [
        'Bøjelige Biceps',
        'Flexing Arm Muscles',
        'Musle',
        'Stærk'
    ],
    '🦵{{skin_tone}}‍': ['Ben'],
    '🦶{{skin_tone}}‍': ['Fod'],
    '👂{{skin_tone}}‍': [
        'Øre',
        'Ører',
        'Høring',
        'Lytter'
    ],
    '👃{{skin_tone}}‍': [
        'Næse',
        'Smelling',
        'Sniffing',
        'Stinky'
    ],
    '🧠': ['Hjerne'],
    '🦷': ['Tand'],
    '👀': [
        'Øjne',
        'Øjenbolde',
        'Shifty Øjne',
        'Vise Øjne'
    ],
    '👁️': [
        'Øjne',
        'Enkelt Øje'
    ],
    '👅': ['Tunge Ud'],
    '👄': [
        'Mundhed',
        'Kys Læber',
        'Læber'
    ],
    '🫀': ['Anatomisk Hjerte'],
    '🫁': ['Lunger'],
    '🦾': ['Mekanisk Arm'],
    '🦿': ['Mekanisk Ben']
};
/*other*/
emojis_language[lang][13] = {
    '💩': [
        'Pile of Poo',
        'Hund Jord',
        'Smilende Poop'
    ],
    '💋': [
        'Kys Mark',
        'Kys Læber'
    ],
    '💅': [
        'Søm Polsk',
        'Fingre',
        'Manicure',
        'Nonchalant'
    ],
    '🤳': [
        'Selfie',
        'Telefon Kamera',
        'Selfie Hand'
    ],
    '🦴': ['Knogle'],
    '🧳': [
        'Bagage',
        'Kuffert'
    ],
    '🌂': [
        'Lukket Paraply',
        'Sammenfoldet Paraply',
        'Lyserød Paraply'
    ],
    '☂️': ['Paraply'],
    '☔': [
        'Paraply med regndråber',
        'Regnweather Condition',
        'Rainy'
    ],
    '🧵': ['Spool af tråd'],
    '🧶': ['Garnkugle'],
    '💄': [
        'Lipstick',
        'Lomme Glans',
        'Makeup'
    ],
    '💍': [
        'Ring',
        'Diamant Ring',
        'Engagement Ring'
    ],
    '💎': [
        'Gem stone',
        'Diamond',
        'Gem',
        'Gemstone',
        'Jewel'
    ],
    '💥': [
        'Kollisions-symbol',
        'Bang',
        'Eksplodere',
        'Virkning',
        'Rød Gnister',
        'Eksplosion'
    ],
    '💫': [
        'Dizzy Symbol',
        'Cirkel Og Stjerne'
    ],
    '💦': [
        'Splashing Sweat Symbol',
        'Plewds',
        'Splastering Af Vand',
        'Vanddråber'
    ],
    '💨': [
        'Dashing Væk',
        'Hurtig',
        'Damp',
        'Dæmpning',
        'Vind',
        'Dash Symbol',
        'Vindmølle med vind'
    ],
    '🌬️': [
        'Vind Ansigt',
        'Blødende Vind',
        'Moder Natur',
        'Vind Blødende Ansigt'
    ],
    '🐾': [
        'Paw Prints',
        'Kat Paw Prints',
        'Hundepote Prints',
        'Kitten Paw Prints',
        'Hvalp Paw Prints'
    ],
    '🕸️': [
        'Edderkop Web',
        'Cobweb',
        'Web',
        'Spiderweb'
    ],
    '🦠': [
        'Mikrobe',
        'Celle',
        'Coronavirus',
        'COVID-19',
        'Kim',
        'Mikroorganisme',
        'Virus'
    ],
    '💐': ['Blomster Buket'],
    '🌍': [
        'Globe Viser Europa- Afrika',
        'Jord',
        'Globe',
        'Planet',
        'Verden',
        'Globe Viser Europa og Afrika'
    ],
    '🌎': [
        'Globe Viser Amerika',
        'Jord',
        'Globe',
        'Planet',
        'Verden'
    ],
    '🌏': [
        'Globe Viser Asia-Australien',
        'Jord',
        'Globe',
        'Planet',
        'Verden',
        'Globe Viser Asien og Australien'
    ],
    '🌐': [
        'Globe med Meridians',
        'Internet',
        'World Wide Web',
        'WWW'
    ],
    '🌑': [
        'New Moon Symbol',
        'Mørk Måne',
        'Skygge Måne',
        'Solar Eclipse'
    ],
    '🌒': ['Voksende Halvmånesymbol'],
    '🌓': ['Første Kvarter Måne Symbol'],
    '🌔': ['Voksende Gibbous Moon Symbol'],
    '🌕': ['Fuld Måne Symbol'],
    '🌖': ['Waning Gibbous Moon Symbol'],
    '🌗': ['Sidste Kvarter Måne Symbol'],
    '🌘': ['Aftagende Halvmåne Symbol'],
    '🌙': ['Halvmåne'],
    '🌚': [
        'Ny måne med ansigt',
        'Uhyggelig Måne',
        'Mørk Måne Ansigt',
        'Molester Moon'
    ],
    '🌝': [
        'Fuld måne med ansigt',
        'Moonface',
        'Smiley Månen',
        'Smilende Måne'
    ],
    '🌛': ['Første kvartal måne med ansigt'],
    '🌜': ['Sidste kvarter måne med ansigt'],
    '🌞': [
        'Søn med Ansigt',
        'Smiley Sol',
        'Sunface',
        'Smilende Sol'
    ],
    '☀️': [
        'Søn',
        'Solskin'
    ],
    '⭐': [
        'Stjerne',
        'Hvid Mellem Stjerne'
    ],
    '🌟': [
        'Glødende Stjerne',
        'Den Lysende Stjerne'
    ],
    '☁️': [
        'Sky',
        'Overskyet',
        'Overskyet'
    ],
    '⛅': ['Sol Bag Sky'],
    '⛈️': [
        'Sky med lynnedslag og regn',
        'Tordenskyen og regnweather condition'
    ],
    '🌤️': ['Hvid Sol med Lille Sky'],
    '🌥️': [
        'Sol Bag Stor Sky',
        'Hvid Sol Bag Sky'
    ],
    '🌦️': ['Hvid Sol Bag Sky med Regn'],
    '🌧️': ['Sky med regn'],
    '🌨️': ['Sky med sne'],
    '🌩️': ['Sky med Lightning'],
    '🌪️': [
        'Tornado',
        'Cloud med Tornado'
    ],
    '🌫️': ['Fog'],
    '🌈': [
        'Regnbue',
        'Gay Pride',
        'Primær Regnbue'
    ],
    '❄️': [
        'Snefnug',
        'Sne',
        'Sne'
    ],
    '🌀': [
        'Cyclon',
        'Orkan',
        'Spiral',
        'Hvirvel',
        'Tornado'
    ],
    '⚡': [
        'Høj Spændingsskilt',
        'Lyn Bolt',
        'Thunderbolt',
        'Højspænding'
    ],
    '☃️': [
        'Snemand',
        'Snemand Med Snefnug'
    ],
    '⛄': [
        'Snemand Uden Sne',
        'Frosty Snemanden',
        'Olaf',
        'Snemand'
    ],
    '☄️': ['Komet'],
    '🔥': [
        'Ild',
        'Flamme',
        'Varm',
        'Lit',
        'Snapstreak'
    ],
    '💧': [
        'Droplet',
        'Vand',
        'Vand Drop'
    ],
    '✨': [
        'Sparkles',
        'Glitter',
        'Shiny',
        'Ny'
    ],
    '🌊': [
        'Vandbølge',
        'Strand',
        'Ocean Wave',
        'Hav'
    ],
    '🎄': [
        'Juletræ',
        'Jul',
        'Xmas Træ'
    ],
    '🎃': [
        'Jack-O-Lantern',
        'Halloween',
        'Græskar'
    ],
    '🌻': [
        'Solsikke',
        'Gul Blomst'
    ],
    '🌼': [
        'Blossom',
        'Blossoming Blomst',
        'Daisy',
        'Gul Blomst'
    ],
    '🌷': ['Tulip'],
    '🌹': [
        'Rose Blomst',
        'Rød Rose'
    ],
    '☘️': [
        'Shamrock',
        'Kløver',
        'Trefoil'
    ],
    '🍀': [
        'Fire Bladkløver',
        'Kløver',
        'Irland',
        'Heldig',
        'Fortune'
    ],
    '🌸': [
        'Cherry Blossom',
        'Lyserød Blomst',
        'Sakura'
    ],
    '💮': [
        'Hvid Blomst',
        'Cherry Blossom',
        'Papir Doily',
        'Veludført Stempel'
    ],
    '🌺': ['Hibiscus'],
    '🏵️': ['Rosette'],
    '🌱': [
        'Frø',
        'Forår',
        'Sprout',
        'Spropper'
    ],
    '🌲': [
        'Stedgrønt Træ',
        'Fir Træ',
        'Fyrretræ'
    ],
    '🌳': [
        'LÃ¸vfÃ¦ldende Træ',
        'Afrundet Træ'
    ],
    '🌴': [
        'Palme Træ',
        'Kokosnød Træ'
    ],
    '🎋': [
        'Tanabata Træ',
        'Tanabata',
        'Ønske Træ'
    ],
    '🎍': [
        'Fyrretræ Dekoration',
        'Bambus',
        'Kadomatsu',
        'Nytår Dekoration'
    ],
    '🌵': [
        'Cactus',
        'Desert'
    ],
    '🌾': [
        'Sheaf ris',
        'Beskær',
        'Landbrug',
        'Hvede',
        'Øre af ris'
    ],
    '🌿': [
        'Urter',
        'Beskær',
        'Plante'
    ],
    '🍁': [
        'Maple Leaf',
        'Canada',
        'Canadisk',
        'Ahorn'
    ],
    '🍂': [
        'Fallen Leaf',
        'Efterår Leaf',
        'Efteråret Blade',
        'Brun Blade',
        'Efterår Blade',
        'Efterladte Blade'
    ],
    '🍃': [
        'Leaf Fluttering i Vind',
        'Grønne Blade',
        'Forår'
    ],
    '🪴': ['Potteplanter'],
    '🔑': [
        'Nøgle',
        'Guld Nøgle'
    ],
    '🗝️': ['Gammel Nøgle'],
    '🔨': [
        'Hammer',
        'Klo Hammer',
        'Handyman',
        'Værktøj'
    ],
    '⛏️': [
        'Vælg',
        'Hakke'
    ],
    '🪓': ['Økse'],
    '🪚': ['Tømrer Savl'],
    '🪛': ['Skruetrækker'],
    '🪝': ['Krog'],
    '🪠': ['Plunger'],
    '🪣': ['Spand'],
    '🔩': [
        'Møtrik og bolt',
        'Taxify',
        'Skrue'
    ],
    '🗜️': [
        'Tang',
        'Tabel Vice',
        'WinZip',
        'Komprimering'
    ],
    '🔒': [
        'Låst',
        'Lukket Lås',
        'Hængelås'
    ],
    '🔓': [
        'Oplåst',
        'Åbn Padlock',
        'Åbn Lås'
    ],
    '🔏': [
        'Låst med pen',
        'Lås Og Pennen',
        'Lås Med Springvand Pen',
        'Lås med blæk Pen'
    ],
    '🔐': [
        'Låst med nøgle',
        'Lukket lås med nøgle'
    ],
    '🗡️': [
        'Dagger',
        'Kniv Våben'
    ],
    '⚔️': ['Krydset Sværd'],
    '🔫': [
        'Pistol',
        'Pistol',
        'Revolver',
        'Sprøjtepistol',
        'Vandpistol',
        'Vand Pistol'
    ],
    '🧰': ['Værktøjskasse'],
    '🧲': ['Magnet'],
    '⛓️': ['Kæder'],
    '💉': [
        'Syringe',
        'Bloddonation',
        'Blodtest',
        'Nål',
        'Vaccination'
    ],
    '🧬': [
        'DNA',
        'DNA Double Helix'
    ],
    '🧪': ['Testrør'],
    '🛏️': [
        'Seng',
        'Soveværelse'
    ],
    '🛋️': [
        'Couch og lampe',
        'Lounge',
        'Settee',
        'Sofa'
    ],
    '🪑': ['Formand'],
    '🚪': [
        'Dør',
        'Dørvej',
        'Front Dør'
    ],
    '🪟': ['Vindue'],
    '🪜': ['Stige'],
    '🪞': ['Spejl'],
    '🚽': [
        'Toilet',
        'Badeværelse',
        'Loo',
        'Restroom',
        'WC'
    ],
    '🚿': [
        'Brusebad',
        'Brusebad Hoved'
    ],
    '🛁': [
        'Badekar',
        'Boble Bad'
    ],
    '🧴': ['Lotion Flaske'],
    '🧷': ['Sikkerhedsnåle'],
    '🧺': ['Kurv'],
    '🧻': [
        'Rulle af papir',
        'Papir'
    ],
    '🧼': ['Bar af sæbe'],
    '🧽': ['Svamp'],
    '🧯': ['Brandslukker'],
    '🚬': [
        'CigaretName',
        'Røg Symbol'
    ],
    '⚰️': [
        'Kaffe',
        'Casket',
        'Begravelse'
    ],
    '⚱️': [
        'Begravelsesurn',
        'Vase'
    ],
    '🛡️': ['Skjold'],
    '⚙️': [
        'Redskab',
        'Indstillinger',
        'Indstillinger'
    ],
    '⚖️': [
        'Saldo Skala',
        'Retsvæsenets skalaer'
    ],
    '🔗': [
        'Link',
        'Kæde',
        'Hyperlink',
        'Sammenkædet Kæde'
    ],
    '💀': [
        'Kranium',
        'Død',
        'Grå Kranium',
        'Skelet'
    ],
    '☠️': ['Kranium og krydsknogler'],
    '🦻': ['Øre med høreapparat'],
    '🎡': [
        'Ferris Wheel',
        'Stort Hjul',
        'Fairgroundl',
        'Observation Hjul'
    ],
    '⛽': [
        'Brændstofpumpe',
        'Olie',
        'Benzin',
        'Gas'
    ],
    '🚨': [
        'Politi Cars Revolving Light',
        'Nødlys',
        'Blinkende Lys',
        'Siren'
    ],
    '🚥': ['Vandret Trafiklys'],
    '🚦': ['Lodret Trafiklys'],
    '⚓': [
        'Admiralty Mønster Anker',
        'Fisker'
    ],
    '🚧': [
        'Konstruktion Skilt',
        'Sort Og Gul Stribet Skilt'
    ],
    '🪂': ['Parachute'],
    '💺': [
        'Sæde',
        'Bus Flyvemaskinens Flyvemaskiner'
    ],
    '🪐': ['Saturn'],
    '🎆': [
        'Fyrværkeri',
        'Eksplosion'
    ],
    '🎇': [
        'Senko Hanabi',
        'Fyrværkeri Sparkler'
    ],
    '💷': [
        'Pund Seddel',
        '£20 Note',
        'Tyve Quid Note',
        'Seddel med pund tegn'
    ],
    '💶': [
        'Euro Banknote',
        '€100 Note',
        'Seddel med Euro Sign'
    ],
    '💵': [
        'Dollar Seddel',
        '$1 Note',
        'Seddel med Dollar Sign',
        'Dollarregning',
        'Amerikansk Dollar'
    ],
    '💴': [
        'Yen Seddel',
        'Ž1000 Note',
        'Yen Note',
        'Seddel med Yen Sign'
    ],
    '⛺': ['Camping Telt'],
    '⛲': [
        'Springvand',
        'Vand Funktion',
        'Vandspringvand',
        'Parker'
    ],
    '💰': [
        'Penge Taske',
        'Moneybags',
        'Rig',
        '$'
    ],
    '💸': [
        'Money with Wings',
        'Flying Money',
        ' Losing Money'
    ],
    '🏷️': ['Etiket Mærke'],
    '🔖': [
        'Bogmærke',
        'Pris Tag',
        'Mærke'
    ],
    '📑': ['Bogmærke Faneblade'],
    '📯': [
        'Posthorn',
        'Bugle',
        'Fransk Horn'
    ],
    '🪁': ['Git'],
    '🪀': ['Yo-Yo'],
    '🎊': [
        'Confetti Ball',
        'Confetti'
    ],
    '🎉': [
        'Party Popper',
        'Fejring',
        'Fest Hat'
    ],
    '🎈': [
        'Ballon',
        'Fest',
        'Rød Ballon'
    ],
    '🌡️': [
        'Termometer',
        'Varmt Vejr',
        'Temperatur'
    ],
    '🛢️': ['Olie Tromme'],
    '💣': ['Bombe'],
    '🔪': [
        'Køkken Kniv',
        'Kniv',
        'Butchers Kniv',
        'Hocho'
    ],
    '🏺': [
        'Amphora',
        'Krukke',
        'Vase'
    ],
    '🗺️': ['Verdenskort'],
    '🎼': [
        'Musikalsk Score',
        'Noter Musik',
        'Treble Clef'
    ],
    '🎬': [
        'Clapper Tavle',
        'Klip',
        'Handling',
        'Direktør',
        'Film Skifer'
    ],
    '🎻': [
        'Violin',
        'Streng Kvartet',
        'Verdens Mindste Violin'
    ],
    '🎺': [
        'Trompet',
        'Horn',
        'Jazz'
    ],
    '🎸': [
        'Guitar',
        'Akustisk Guitar',
        'Basguitar',
        'Elektrisk Guitar'
    ],
    '🎷': [
        'Saxofon',
        'Jazz',
        'Sax'
    ],
    '🥁': [
        'Tromme',
        'Tromme med trommestikker'
    ],
    '🎹': [
        'Klaver',
        'Musikalsk Tastatur'
    ],
    '🪕': ['Banjo'],
    '🪗': ['Harmonika'],
    '🪘': ['Lang Tromme'],
    '🎨': [
        'Kunstner Palet',
        'Kunst',
        'Maleri'
    ],
    '🧩': [
        'Puslespil Stykke',
        'Puslespil Piece'
    ],
    '🎲': [
        'Spillet Dø',
        'Terninger'
    ],
    '🎭': [
        'Udfører Kunst',
        'Teater',
        'Teater',
        'Drama Masker',
        'Græsk Teater Masker',
        'Tragedie og komedie Masker',
        'Venedig'
    ],
    '🔍': [
        'Forstørrelsesglas Vippet Venstre',
        'Magnifier',
        'Søg Ikon',
        'Forstørrelsesglas Til Venstrepegende',
        'Find'
    ],
    '🔎': [
        'Forstørrelsesglas Vippet Højre',
        'Magnifier',
        'Søg Ikon',
        'Højrepegende Forstørrelsesglas',
        'Find'
    ],
    '⌛': [
        'Timeglas Færdig',
        'Timeglas'
    ],
    '⏳': [
        'Timeglas Ikke Færdig',
        'Time glas med Flowing Sand'
    ],
    '🕐': [
        'Én O\'Ur',
        'Ur Ansigt En O\'Ur'
    ],
    '🕜': ['Ur Ansigt Entredive'],
    '🕑': [
        'To O\'Ur',
        'Ur Ansigt To O\'Ur'
    ],
    '🕝': ['Ur Ansigt To-Tredive'],
    '🕒': [
        'Tre O\'Ur',
        'Ur Ansigt Tre O\'Ur'
    ],
    '🕞': ['Ur Ansigt Tre-Tredive'],
    '🕓': [
        'Fire O\'Ur',
        'Ur Ansigt Fire O\'Ur'
    ],
    '🕟': ['Ur Ansigt Fire Tredive'],
    '🕔': [
        'Fem O\'Ur',
        'Ur Ansigt Fem O\'Ur'
    ],
    '🕠': ['Ur Ansigt Fem Tredive'],
    '🕕': [
        'Seks Ur',
        'Ur Ansigt Seks O\'Ur'
    ],
    '🕡': ['Ur Ansigt Seks-Tredive'],
    '🕖': [
        'Syv O\'Ur',
        'Ur Ansigt Syv O\'Ur'
    ],
    '🕢': ['Ur Ansigt Syv-Tredive'],
    '🕗': [
        'Otte O\'Ur',
        'Ur Ansigt Otte Os Ur'
    ],
    '🕣': ['Ur Ansigt Ott-Tredive'],
    '🕘': [
        'Ni O\'Ur',
        'Ur Ansigt Ni O\'Ur'
    ],
    '🕤': ['Ur Ansigt Ni Tredive'],
    '🕙': [
        'Ti O\'Ur',
        'Ur Ansigt Ti O\'Ur'
    ],
    '🕥': ['Ur Ansigt Ten-Tredive'],
    '🕚': [
        'Elleve O\'Ur',
        'Ur Ansigt Elleve O\'Ur'
    ],
    '🕦': ['Ur Ansigt Eleven-Tredive'],
    '🕛': [
        'Tolv Ur',
        'Ur Ansigt Tolv O\'Ur'
    ],
    '🕧': ['Ur Ansigt Tolv-Tredive'],
    '♨️': [
        'Varme Fjedre',
        'Onsen',
        'Damp'
    ],
    '💈': [
        'Barber Pole',
        'Barber Butik',
        'Barbers Striber',
        'Frisør'
    ],
    '🎪': [
        'Cirkus Telt',
        'Stor Top',
        'Cirkus'
    ],
    '💢': [
        'Vrede Symbol',
        'Vrede Skilt',
        'Vein Pop'
    ],
    '🗯️': [
        'Højre Vrede Boble',
        'Zig Zag Bubble',
        'Vred Tale Bubble'
    ],
    '💊': [
        'Pill',
        'Kapsler',
        'Tablet',
        'Stoffer'
    ],
    '🎎': [
        'Dukker',
        'Hinamatsuri',
        'Imperial Dukker',
        'Japanske Dukker'
    ],
    '🎏': [
        'Karpe Streamer',
        'Fisk Flag',
        'Koinobori',
        'Vindsokker'
    ],
    '🎐': [
        'Vind Chime',
        'Furin',
        'Jellyfish',
        'Vind Bell'
    ],
    '🎀': [
        'Bånd Bue',
        'Lyserød Bue',
        'Bue'
    ],
    '🎁': [
        'Indpakket Gave',
        'Fødselsdag Præsentation',
        'Julegave',
        'Gave',
        'Gavekasse',
        'Nuværende',
        'Indpakket Gave'
    ],
    '🎫': [
        'Bestilling',
        'Bestilling Stub',
        'World Tour Billet'
    ],
    '🃏': [
        'Joker',
        'Joker- Kort',
        'Afspilning Kort Sort Joker'
    ],
    '💡': [
        'Lys Pære',
        'Idé',
        'Elektrisk Lyspærer'
    ],
    '🔦': [
        'Lommelygte',
        'Lommelygte',
        'Elektrisk Lommelygte'
    ],
    '🏮': [
        'Rødt Papir Lanterne',
        'Asiatisk Lanterne',
        'Japansk Lanterne',
        'Rød Lanterne',
        'Lanterne Izakaya'
    ],
    '📦': [
        'Pakke',
        'Boks',
        'Pakke'
    ],
    '📇': [
        'Indeks Kort',
        'Rolodex',
        'System Kort',
        'Kort Indeks'
    ],
    '🕳️': ['Hul'],
    '👁️‍🗨️': [
        'Jeg Er Et Vidne',
        'Øjne i taleboble'
    ],
    '⚜️': [
        'Fleur-de-lis',
        'Scouts',
        'New Orleans Saints'
    ],
    '⚗️': ['Alembic'],
    '🕯️': ['Lys'],
    '🖼️': [
        'Billede Indrammet',
        'Maleri',
        'Billedramme',
        'Ramme med billede'
    ],
    '🛍️': ['Indkøbsposer'],
    '🎟️': ['Adgang Bestillinger'],
    '🛎️': ['Bellhop Bell'],
    '🧾': ['Kvittering'],
    '🧮': ['Abacus'],
    '🧫': ['Petri Tallerken'],
    '🧹': [
        'Broom',
        'Børste',
        'Sweep'
    ],
    '🎰': [
        'Spilleautomat',
        'Kasino',
        'Frugt Machine',
        'Spil',
        'Poker Machine'
    ],
    '🦽': ['Manuel Kørestol'],
    '🦼': ['Motoriseret Kørestol'],
    '🪔': ['Diya Lampe'],
    '🦯': ['White Cane'],
    '🩸': ['Drop of Blood'],
    '🩹': ['Selvklæbende Bandage'],
    '🩺': ['Stetoskop'],
    '🪶': ['Fjer'],
    '🪤': ['Musefælde'],
    '🫖': ['Teapot'],
    '🪨': ['Sten'],
    '🪵': ['Træ'],
    '🪄': ['Magisk Stav'],
    '🔮': [
        'Crystal Ball',
        'Clairvoyant',
        'Fortune Teller',
        'Psychic',
        'Purple Crystal'
    ],
    '🪅': ['Pinţata'],
    '🪆': [
        'Indlejrede Dukker',
        'Matryoshka'
    ],
    '🪡': ['Synål'],
    '🪢': ['Knude'],
    '🪙': ['Mønt'],
    '🪃': ['Boomerang'],
    '🪥': ['Tandbørste'],
    '🪦': ['Hovedsten'],
    '🪧': ['Placard'],
    '🪒': ['Razor']
};