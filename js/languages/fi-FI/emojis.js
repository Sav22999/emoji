// descriptions took from Emojipedia.org
lang = 'fi';
//use i18n language code of the browser, more details: https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/i18n/LanguageCode
titles_language[lang] = {
    '🔍': 'Tulokset',
    '🕒': 'Eniten käytetyt emojit',
    '😀': 'Hymiöt',
    '🙋': 'Ihmiset',
    '🦊': 'Eläimet',
    '🅰️': 'Symbolit',
    '🍎': 'Ruoka ja juoma',
    '🏳️‍🌈': 'Liput',
    '🏊': 'Urheilu',
    '✈️': 'Matkailu ja paikat',
    '🖱️': 'Teknologia ja toimisto',
    '👗': 'Vaatteet ja tarvikkeet',
    '🖐️': 'Kädet ja kehon osat',
    '🛎️': 'Muut'
};
emojis_language[lang] = [];
/*search*/
emojis_language[lang][0] = {};
/*smileys*/
emojis_language[lang][2] = {
    '😀': [
        'Grinning-Kasvot',
        ':)',
        'Iloinen Kasvot',
        'Hymiö Kasvot'
    ],
    '😃': [
        'Grinning kasvot ja suuret silmät',
        ':D',
        'Iloinen Kasvot',
        'Hymiö Kasvot',
        'Hymyilevä kasvot Open Mouth'
    ],
    '😄': [
        'Grinning kasvot hymyilevät silmät',
        'Iloinen Kasvot',
        'Hymiö Kasvot',
        'Grinning Kasvot Ruiskuttamalla Silmät',
        'Hymyilevä kasvot suu- ja hymyilevillä silmillä'
    ],
    '😁': [
        'Beaming Face kanssa hymyilevät silmät',
        'Grinning kasvot hymyilevät silmät'
    ],
    '😆': [
        'Grinning Jyrsivä Kasvot',
        'xD',
        '><',
        'Iso Grin',
        'Suljetut Silmät -hymy',
        'Nauraa',
        'Grinning Kasvot Kireällä Suljetuilla Silmillä',
        'Hymyilevä kasvot suuaukolla ja tiukalla suljettuilla silmillä'
    ],
    '😅': [
        'Grinning kasvot hikoilla',
        'Liikunta',
        'Hyvää Hiki',
        'Grinning kasvot puristamalla silmät ja hikoilu Drop',
        'Hymyilemällä kasvot Open Mouth ja kylmä hikeä'
    ],
    '🤣': [
        'ROFL',
        'Rullaa lattialla nauraa'
    ],
    '😂': [
        'Face kanssa Tears of Joy',
        'Nauraa',
        'Nauraa Itkemistä',
        'Nauraa Kynsiä',
        'LOL'
    ],
    '🙂': [
        'Hieman Hymyilevät Kasvot',
        ':)',
        'Hieman Onnellinen',
        'Tämä On Sakko'
    ],
    '🙃': [
        'Yläpuolella Alas Kasvot',
        'Sarcasm',
        'Silly',
        'Ylöspäin Alas Kasvot'
    ],
    '😉': [
        'Kasvojen Vetoaminen',
        ';)',
        'Vie',
        'Vie Kasvot',
        'Winky Face'
    ],
    '😊': [
        'Hymyilevät kasvot hymyilevien silmien kanssa',
        '^^',
        'Iloinen Kasvot',
        'Hymy',
        'Hymiö Kasvot'
    ],
    '😇': [
        'Hymyilevä kasvot Halon kanssa',
        'Enkeli',
        'Halo'
    ],
    '🥰': [
        'Hymyilevä kasvot sydämen kanssa',
        'Rakkaudessa Kasvot',
        'Hymyilevät kasvot hymyilevillä silmillä ja kolmella sydämellä'
    ],
    '😍': [
        'Hymyilevä kasvot sydämen silmillä',
        '*.*',
        'Sydän Silmät',
        'Sydän Kasvot',
        'Hymyilevä kasvot sydämen muotoisilla silmillä'
    ],
    '🤩': [
        'Tähtikuorma',
        'Jännitetty',
        'Tähtien Silmät',
        'Tähti Eyed',
        'Wow Face',
        'Kasvot Starry Silmillä',
        'Grinning kasvot Star Eyesin kanssa'
    ],
    '😘': [
        'Kasvojen kyntä suudella',
        ':*',
        ':-*',
        'Blow Kiss',
        'Kirjoitettava Suudelma',
        'Suudella',
        'Kasvot Suudella heittäminen'
    ],
    '😗': [
        'Suudella Kasvolla',
        ':*',
        ':-*',
        'Ankan Kasvot',
        'Kissy Face',
        'Whistling'
    ],
    '☺️': [
        'Hymyilevä Kasvot',
        'Iloinen Kasvot',
        'Hymiö Kasvot',
        'Hymy',
        'Valkoinen Hymyyttävä Kasvot'
    ],
    '😚': [
        'Kasvot suudella suljettujen silmien kanssa',
        'Suudella Kasvot',
        'Kissy Face'
    ],
    '😙': [
        'Suudella kasvot hymyilevien silmien kanssa',
        'Suudella Kasvot',
        'Kissy',
        'Vihellä',
        'Whistling'
    ],
    '😋': [
        'Kasvot Savoring Ruoka',
        'Goofy',
        'Nälkäinen',
        'Hymyilevät Kasvojen Lisenssihuulet',
        'Face Säästää Herkullista Ruokaa',
        'Kumina Yum'
    ],
    '😛': [
        'Kasvot kielellä',
        ':P',
        'Cheeky',
        'Kielen Kasvot',
        'Kieli Ulos',
        'Kasvot Stuck-Out kielellä'
    ],
    '😜': [
        'Kasvot tuuletetaan kielellä',
        ';P',
        'Hullu',
        'Hullu Kasvot',
        'Vammoi Kasvot Stuck-Out Kieli',
        'Kasvot Stuck-Out kieli ja Winking silmä'
    ],
    '🤪': [
        'Zany Face',
        'Hullu Silmät',
        'Jännitetty',
        'Luonnonvaraiset',
        'Goofy Face',
        'Grinning kasvot yhdellä suurella ja yhdellä pienellä silmällä'
    ],
    '😝': [
        'Ruiskutetaan kasvoja kielellä',
        'xP',
        'Kieli Ulos',
        'Kasvot Stuck Out kieli ja tiukka suljettu silmät',
        'Kasvot Stuck-Out kielellä ja tiukalla suljetuilla silmillä'
    ],
    '🤑': [
        'Raha-Mouth Face',
        ':$',
        'Dollarin Kylmäsilmät',
        'Raha Kasvot',
        'Rikas'
    ],
    '🤗': [
        'Hyljellä Kasvoa',
        'Halaus',
        'Hyljellä',
        'Halatut',
        'Hyvää Kasvoa Hyljellä Kädet'
    ],
    '🤭': [
        'Hups',
        'Kasvot Hand Over Mouth',
        'Hymyilevä kasvot hymyilevien silmien ja käsikaton suuhun'
    ],
    '🤫': [
        'Shh',
        'Shush',
        'Shushing Face',
        'Hush',
        'Hiljainen',
        'Hiljaisuus',
        'Äänetön',
        'Kasvot sormen peitto Suljettu huulet'
    ],
    '🤔': [
        'Mitä',
        '?',
        'Hmm',
        'Ajatteleva Kasvot',
        'Chin Peukalo',
        'Ajattelija',
        'Heittää Varjo'
    ],
    '🤐': [
        'Postinumero',
        'Zipper-Mouth Kasvot',
        'Huulet Suljettu',
        'Sinetöidyt Huulet',
        'Postinumero',
        'Kasvot Vetoketju suuhun'
    ],
    '🤨': [
        'Kasvot koholla kulmakarva',
        'Colbert',
        'The Rock',
        'Kasvot Nousussa Kulma',
        'Kasvot yhdellä kulmakarmella koholla'
    ],
    '😐': [
        'Neutraali Kasvot',
        ':|',
        'Kasvot Suoraan Suun',
        'Suoraan Pinnoitettu'
    ],
    '😑': [
        'Ilmeetön Kasvot',
        '-_-',
        'Kasvot Suoraan Suun',
        'Suora Kasvot'
    ],
    '😶': [
        'Kasvot Ilman Suun',
        'Tyhjä Kasvot',
        'Mouthless',
        'Hiljaisuus',
        'Äänetön'
    ],
    '😏': [
        'Smirking Face',
        'Flirttaus',
        'Seksuaalinen Kasvot',
        'Muistin Kasvot',
        'Ehdotettu Smile'
    ],
    '😒': [
        'Huvittelematon Kasvot',
        'Lyhennetty',
        'Meh',
        'Sivusilmä',
        'Koskematon'
    ],
    '🙄': [
        'Kasvot pyörivillä silmillä',
        'Silmien Rullaus'
    ],
    '😬': [
        'Grimacing Face',
        'Awkward',
        'Eek',
        'Jalka Mounth',
        'Hermous',
        'Snapchat Mutual #1 Paras Ystävä'
    ],
    '🤥': [
        'Maa Kasvot',
        'Valo',
        'Pitkä Nenä',
        'Pinocchio'
    ],
    '😌': [
        'Nousittu Kasvot',
        'Sisältö',
        'Miellyttävä'
    ],
    '😔': [
        'Anteeksi',
        'Pensive Face',
        'Pensiivinen',
        'Surullinen',
        'Sadface',
        'Surullinen',
        'Surullinen Pensive Face'
    ],
    '😪': [
        'Uni Kasvot',
        'Sivu-Revi',
        'Solmu Kupla'
    ],
    '🤤': [
        'Saliva',
        'Drooling Face',
        'Drool'
    ],
    '😴': [
        'Nukkuva Kasvot',
        'Zzz',
        'Uni Kasvot',
        'Kuorsaus',
        'Zzz Face'
    ],
    '🥱': ['Yawning Face'],
    '😷': [
        'Kasvot lääketieteellisen naamio',
        'Koronavirus',
        'COVID-19',
        'Maskin Kasvot',
        'Kirurginen Maski'
    ],
    '🤒': [
        'Kasvot lämpömittarin kanssa',
        'Ill',
        'Sairas'
    ],
    '🤕': [
        'Kasvot pääsiimalla',
        'Silmukka Päätä',
        'kömpelö',
        'Injured'
    ],
    '🤢': [
        'Pahoinvoitu Kasvot',
        'Hämmästyttää',
        'Vihreä Kasvot',
        'Vomit'
    ],
    '🤮': [
        'Face Oksentelu',
        'Spew',
        'Bleah',
        'Bleurgh',
        'Yuk',
        'Yuck',
        'Ew',
        'Spew',
        'Heittää Ylöspäin',
        'Vomit',
        'Kasvot Open Mouth Oksentelu'
    ],
    '🤧': [
        'Aivastelu Kasvot',
        'Gesundheit'
    ],
    '🥵': [
        'Kuumat Kasvot',
        'Ylikuumentunut Kasvot'
    ],
    '🥶': [
        'Kylmä Kasvot',
        'Viileä',
        'Maustepippuri',
        'Jäätävää Kasvoa'
    ],
    '🥴': [
        'Woozy Face',
        'Pudota Kasvot',
        'Kasvot epätasainen silmät ja Wavy Mouth'
    ],
    '😵': [
        'Dizzy Face',
        'Silmät Kasvot',
        'Spiral Silmät Kasvot'
    ],
    '🤯': [
        'Räjähtävä Päähaara',
        'Mieli Blown',
        'Shocked Face with Exploding Head'
    ],
    '🤠': [
        'Cowboy Hattu Kasvot',
        'Cowboy',
        'Cowboy Face',
        'Kasvot Cowboy Hat'
    ],
    '🥳': [
        'Juhliminen Kasvot',
        'Juhlien Kasvot',
        'Kasvot puolueen sarvi ja Party Hat'
    ],
    '😎': [
        'Hymyilevä kasvot aurinkolasit',
        'Viileä',
        'Keskinäiset Parhaat Ystävät (Snapchat)',
        'Aurinkolasit'
    ],
    '🤓': [
        'Nörtti Kasvot',
        'Nerdy'
    ],
    '🧐': ['Kasvot Monoclella'],
    '😕': [
        'Hämmentynyt Kasvot',
        ':/',
        ':S',
        'Nonplusoimaton',
        'Päihtynyt'
    ],
    '😟': [
        'Huolestunut Kasvot',
        ':(',
        'Surullinen',
        'Sadface'
    ],
    '🙁': [
        'Hieman Heittävät Kasvot',
        ':(',
        'Hieman Surullinen'
    ],
    '☹️': [
        'Frowning Face',
        ':(',
        'Megafrown',
        'Valkoinen Frowning Face'
    ],
    '😮': [
        'Vauva',
        ':O',
        'Voi minä!',
        'Kasvot Open Mouth',
        'Avaa Etelä',
        'Yllättynyt Kasvot Open Mouth'
    ],
    '😯': [
        'Husettu Kasvot',
        ':O',
        'Yllätys',
        'Yllättynyt Kasvot'
    ],
    '😲': [
        'Shocked Face',
        ':O',
        'Vauva',
        'Kiillotettu Kasvot',
        'Pudota Kasvot',
        'Kaasuputki Kasvot'
    ],
    '😳': [
        'Punoitettu Kasvot',
        ':$',
        'Punoitus Kasvot',
        'Irrotettu',
        'Häpeä',
        'Kasvot Leveällä Avoimella Silmällä'
    ],
    '🥺': [
        'Pleading Face',
        ':(',
        'Begging',
        'Kiiltävät Silmät',
        'Simp',
        'Kasvot nautinnollisilla silmillä'
    ],
    '😦': [
        'Frowning Face kanssa Open Mouth',
        'D:',
        'Yawning'
    ],
    '😨': [
        'Pelottava',
        'D:',
        'Pelkkä Kasvot',
        'Yllättynyt'
    ],
    '😰': [
        'Hauska kasvot hiivalla',
        'Siniset Kasvot',
        'Aiheutetut Kasvot',
        'Hermostolliset Kasvot',
        'Kasvot Open Mouth ja kylmä hikeä'
    ],
    '😥': [
        'Surullinen mutta varjellut kasvot',
        ':\'(',
        'Kulmakarvat',
        'Pettynyt, mutta varjellut kasvot'
    ],
    '😢': [
        'Itkeminen Kasvot',
        ':\'(',
        'Yritetään',
        'Revi'
    ],
    '😭': [
        'Loukkaava Kasvot',
        'Bawling',
        'Yritetään',
        'Surulliset Kyyneleet',
        'Sobbing'
    ],
    '😱': [
        'Kasvojen huutuminen pelossa',
        'Koti Yksin',
        'Kierrä',
        'Näytön Kasvot'
    ],
    '😖': [
        'Kasvot Perustettu',
        'Quivering Mouth',
        'Rajoitettu Kasvot'
    ],
    '😣': [
        'Jatkuva Kasvot',
        'Helpoton Kasvot',
        'Rajoitetut Silmät'
    ],
    '😞': [
        'Pettynyt Kasvot',
        ':(',
        'Surullinen',
        'Sadface'
    ],
    '😓': [
        'Downcast Face with Sweat',
        'Kova Työ',
        'Surullinen Hiki Kasvot',
        'Kasvot kylmällä hiivalla'
    ],
    '😩': [
        'Weary Face',
        'Taistele Kasvot',
        'Herätys'
    ],
    '😫': [
        'Väsyneet Kasvot',
        'Exhasted',
        'Fed Ylös',
        'Taistele Kasvot'
    ],
    '😤': [
        'Kasvot Steam-kasvista nenästä',
        'Epäkohtien ileminen',
        'Turhautunut',
        'Hullu Kasvot',
        'Höyryttäminen',
        'Huffing Anger Face'
    ],
    '😡': [
        'Kiinnitä Kasvot',
        'Vihainen Kasvot',
        'Grumpy Face',
        'Hullu Kasvot',
        'Punaiset Kasvot'
    ],
    '😠': [
        'Vihainen Kasvot',
        'Vihainen',
        'Grumpy Face'
    ],
    '🤬': [
        'Kierretään',
        '@#$%&!',
        'Kasvot ja symbolit suun',
        'Hoitotyö',
        'Nostetaan',
        'Grawlix',
        'Kasvot Symbolit Yli Suun',
        'Vakava kasvot symbolit kaareva Suun'
    ],
    '🥲': ['Hymyilevä kasvot ja repeämä'],
    '🥸': ['Peitetyt Kasvot'],
    '😈': [
        'Hymyilevä kasvot sarvten kanssa',
        'Devil',
        'Paha Sarvet',
        'Onnellinen Paholainen',
        'Violetti Paholainen',
        'Punainen Paholainen'
    ],
    '👿': [
        'Vihainen kasvot sarvten kanssa',
        'Devil',
        'Paha Sarvet',
        'Violetti Paholainen',
        'Violetti Goblin',
        'Surullinen Paholainen',
        'Imp'
    ],
    '🤡': [
        'Kapina Kasvot',
        'Karmea Myrkkyä',
        'Paha Kynttilä',
        'Pelottava Kapina'
    ],
    '👽': [
        'Ulkomaalainen',
        'ET'
    ],
    '👾': [
        'Ulkomaalainen hirviö',
        'Avaruusturva',
        'Videopeli Hirviö'
    ],
    '🤖': [
        'Robot',
        'Robottien Kasvot'
    ],
    '👹': [
        'Ogre',
        'Maskin Kasvot',
        'Oni',
        'Punainen hirviö',
        'Japanilainen Ogre'
    ],
    '👻': [
        'Ghost',
        'Halloween'
    ],
    '🗣️': [
        'Puhuva Pää',
        'Mansplaining',
        'Shout',
        'Huutaa',
        'Puhuminen Head in Silhouette'
    ],
    '👤': [
        'Bust in Silhouette',
        'Varjo',
        'Silhouette',
        'Käyttäjä',
        'Henkilön siluetti'
    ],
    '🫂': ['Ihmiset Halaavat'],
    '👥': [
        'Busts in Silhouette',
        'Varjot',
        'Silhouettes',
        'Käyttäjät',
        'Kahden ihmisen siluetti'
    ]
};
/*people*/
emojis_language[lang][3] = {
    '👶{{skin_tone}}': [
        'Vauva',
        'Lapsi',
        'Toddler'
    ],
    '🧒{{skin_tone}}': [
        'Lapsi',
        'Sukupuoli Neutraali Lapsi'
    ],
    '👧{{skin_tone}}': ['Tyttö'],
    '🧑{{skin_tone}}': [
        'Henkilö',
        'Sukupuolen Neutraali Aikuinen',
        'Aikuinen'
    ],
    '👱{{skin_tone}}': [
        'Henkilö: Blond Hiukset',
        'Joukkovelkakirja',
        'Blondi',
        'Joukkovelkakirja Mies',
        'Henkilö jolla on Blond Hair',
        'Mies Kanssa Blondi Hiukset'
    ],
    '👨{{skin_tone}}': [
        'Mies',
        'Mies',
        'Moustache Man'
    ],
    '🧔{{skin_tone}}': [
        'Mies: Karkea',
        'Koru',
        'Suunta Mies',
        'Suunta Henkilö'
    ],
    '👨{{skin_tone}}‍🦰': [
        'Mies: Punainen Hiukset',
        'Inkivääri Mies',
        'Man Redhead',
        'Mies Punaisella Hiudella'
    ],
    '👨{{skin_tone}}‍🦱': [
        'Mies: Curly Hiukset',
        'Mies Curly Hiusten Kanssa'
    ],
    '👨{{skin_tone}}‍🦳': [
        'Mies: Valkoiset Hiukset',
        'Mies Harmaan Hiusten Kanssa'
    ],
    '👨{{skin_tone}}‍🦲': [
        'Miehet: Kalju',
        'Mies Ei Hiuksia'
    ],
    '👩{{skin_tone}}': [
        'Nainen',
        'Nainen',
        'Lady',
        'Keltainen Nainen'
    ],
    '👩{{skin_tone}}‍🦰': [
        'Nainen: Punainen Hius',
        'Inkivääri Nainen',
        'Woman Redhead',
        'Nainen Punaisella Hiudella'
    ],
    '👩{{skin_tone}}‍🦱': [
        'Nainen: kihara Hiukset',
        'Nainen Curly Hair'
    ],
    '👩{{skin_tone}}‍🦳': [
        'Nainen: Valkoinen Hiukset',
        'Nainen Harmaa Hiukset'
    ],
    '👩{{skin_tone}}‍🦲': [
        'Nainen: Kalju',
        'Nainen Ei Hiuksia'
    ],
    '👱{{skin_tone}}‍♀️': [
        'Nainen: Blond Hair',
        'Nainen Blondi Hiukset'
    ],
    '👱{{skin_tone}}‍♂️': [
        'Mies: Blond Hair',
        'Mies Kanssa Blondi Hiukset'
    ],
    '🧓{{skin_tone}}‍': [
        'Vanhempi Henkilö',
        'Sukupuolen Neutraali Vanhemmat Aikuiset'
    ],
    '👴{{skin_tone}}‍': [
        'Vanha Mies',
        'Iäkkäät Mies',
        'Grandpa',
        'Vanhempi Mies'
    ],
    '👵{{skin_tone}}‍': [
        'Vanha Nainen',
        'Iäkkäät Nainen',
        'Isoäiti',
        'Nanna',
        'Vanha Lady',
        'Vanhempi Nainen'
    ],
    '👼{{skin_tone}}‍': [
        'Vauvan Enkeli',
        'Enkeli',
        'Cherub',
        'Cupid',
        'Putto'
    ],
    '🎅{{skin_tone}}‍': [
        'Santa Claus',
        'Saint Nicholas',
        'Sinterklaas',
        'Isä Joulu'
    ],
    '🤶{{skin_tone}}‍': [
        'Claus',
        'Äiti Joulu'
    ],
    '🤴{{skin_tone}}‍': ['Prinssi'],
    '👸{{skin_tone}}‍': [
        'Prinsessa',
        'Blondi Tyttö',
        'Tyttö Crown',
        'Tyttö Tiaran Kanssa'
    ],
    '👳{{skin_tone}}‍♂️': ['Mies Käyttää Turbania'],
    '👳{{skin_tone}}‍♀️': ['Nainen Käyttää Turbania'],
    '👲{{skin_tone}}‍': [
        'Henkilö Skullcapin Kanssa',
        'Aasialainen Mies',
        'Mies Kiinalaisen Suojan Kanssa',
        'Man with Gua Pi Mao'
    ],
    '🧕{{skin_tone}}‍': [
        'Naiset, joilla on huivi',
        'Hijab',
        'Henkilö jolla on huivi'
    ],
    '🤵{{skin_tone}}‍': [
        'Tuxedossa oleva henkilö',
        'Groom',
        'Mies Maassa',
        'Tuxedon mies'
    ],
    '👰{{skin_tone}}‍': [
        'Henkilö Veilin Kanssa',
        'Morsian',
        'Morsian Veilin kanssa'
    ],
    '👰{{skin_tone}}‍♂️': ['Miehen kanssa Veilissä'],
    '👰{{skin_tone}}‍♀️': ['Nainen kanssa Veilin'],
    '👩{{skin_tone}}‍🍼': ['Naisen Ruokinta Vauva'],
    '👨{{skin_tone}}‍🍼': ['Ihmisen Ruokinta Vauva'],
    '🥷': ['Ninja'],
    '🤰{{skin_tone}}‍': [
        'Raskaana Oleva Nainen',
        'Raskaus',
        'Raskaana Oleva Nainen'
    ],
    '🤱{{skin_tone}}‍': [
        'Rintojen Ruokinta',
        'Imetys'
    ],
    '🦸{{skin_tone}}‍♂️': ['Man Supersankari'],
    '🦸{{skin_tone}}‍‍♀️': ['Nainen Supersankari'],
    '🦹{{skin_tone}}‍‍♂️': ['Mies Supervillain'],
    '🦹{{skin_tone}}‍‍♀️': ['Nainen Supervillain'],
    '🧙{{skin_tone}}‍': [
        'Saldo',
        'Sorcerer',
        'Surullisuus',
        'Noita',
        'Velho'
    ],
    '🧙{{skin_tone}}‍‍♀️': [
        'Nainen Mage',
        'Noita',
        'Surullisuus'
    ],
    '🧚{{skin_tone}}‍‍♂️': ['Mies Fairy'],
    '🧚{{skin_tone}}‍♀️': ['Nainen Fairy'],
    '🧛{{skin_tone}}‍♂️': [
        'Man Vampyyri',
        'Dracula'
    ],
    '🧛{{skin_tone}}‍‍♀️': ['Nainen Vampyyri'],
    '🧜{{skin_tone}}‍♂️': ['Merman'],
    '🧜{{skin_tone}}‍♀️': ['Merenneito'],
    '🧝{{skin_tone}}‍♂️': ['Miehen Elf'],
    '🧝{{skin_tone}}‍♀️': ['Nainen Härkä'],
    '🧞‍♂️': ['Man Genie'],
    '🧞‍♀️': ['Woman Genie'],
    '🕵️{{skin_tone}}‍♂️': [
        'Man Detective',
        'Yksityinen Silmä',
        'Sleuth',
        'Vakooja',
        'Man Sleuth',
        'Sleuto tai vakooja',
        '007',
        'Tarkastaja'
    ],
    '🕵️{{skin_tone}}‍♀️': ['Nainen Havaitseva'],
    '💂{{skin_tone}}‍': [
        'Suojaus',
        'Brittiläinen Guardsman',
        'Jalkojen Suojaus'
    ],
    '💂{{skin_tone}}‍‍♀️': ['Naisen Vartija'],
    '👮{{skin_tone}}‍': [
        'Poliisin Päällikkö',
        'Cop',
        'Poliisi',
        'Poliisi',
        'Poliisi'
    ],
    '👮{{skin_tone}}‍‍♀️': ['Naisen Poliisin Toimittaja'],
    '👨{{skin_tone}}‍🚒': ['Mies Palomiehen'],
    '👩{{skin_tone}}‍‍🚒': ['Nainen Palomiehen'],
    '👨{{skin_tone}}‍‍✈️': ['Miehen Pilotti'],
    '👩{{skin_tone}}‍‍✈️': ['Nainen Pilot'],
    '👨{{skin_tone}}‍💻': [
        'Man Technologist',
        'Man Technologist'
    ],
    '👩{{skin_tone}}‍💻': ['Naisen Teknologia'],
    '👨{{skin_tone}}‍🎤': [
        'Miehen Laulaja',
        'Bowie',
        'Aladdin Sane'
    ],
    '👩{{skin_tone}}‍🎤': ['Nainen Laulaja'],
    '👨{{skin_tone}}‍🎨': ['Man Artisti'],
    '👩{{skin_tone}}‍🎨': ['Nainen Esittäjä'],
    '👷{{skin_tone}}‍‍♂️': ['Man Construction Worker'],
    '👷{{skin_tone}}‍‍♀️': ['Naisen Rakennustyöntekijä'],
    '👨{{skin_tone}}‍‍🚀': [
        'Mies Astronaut',
        'Man Cosmonaut'
    ],
    '👩{{skin_tone}}‍‍🚀': [
        'Nainen Astronaut',
        'Nainen Cosmonaut'
    ],
    '👨{{skin_tone}}‍‍🔬': ['Miehen Tutkija'],
    '👩{{skin_tone}}‍‍🔬': ['Naisen Tutkija'],
    '👨{{skin_tone}}‍💼': [
        'Man Office Worker',
        'Toimitusjohtaja',
        'Liikemies'
    ],
    '👩{{skin_tone}}‍💼': [
        'Naisen Toimistotyöntekijä',
        'Yrittäjä',
        'Toimitusjohtaja'
    ],
    '👨{{skin_tone}}‍🏭': ['Man Factory Worker'],
    '👩{{skin_tone}}‍‍🏭': ['Naisen Tehdastyöntekijä'],
    '👨{{skin_tone}}‍‍🔧': ['Man Mekaniikka'],
    '👩{{skin_tone}}‍‍🔧': ['Nainen Mekaaninen'],
    '👨{{skin_tone}}‍‍🍳': [
        'Mies Cook',
        'Miehen Kokki',
        'Miehen Kokki'
    ],
    '👩{{skin_tone}}‍‍🍳': [
        'Nainen Kypsä',
        'Nainen Kokki',
        'Naisen Kokki'
    ],
    '👨{{skin_tone}}‍‍🌾': ['Mies Viljelijä'],
    '👩{{skin_tone}}‍‍🌾': ['Nainen Maanviljelijä'],
    '👨{{skin_tone}}‍‍⚖️': ['Miehen Tuomari'],
    '👩{{skin_tone}}‍‍⚖️': ['Naisen Tuomari'],
    '👨{{skin_tone}}‍‍🏫': ['Miehen Opettaja'],
    '👩{{skin_tone}}‍‍🏫': ['Nainen Opettaja'],
    '👨{{skin_tone}}‍🎓': ['Ihmisen Opiskelija'],
    '👩{{skin_tone}}‍🎓': ['Nainen Opiskelija'],
    '👨{{skin_tone}}‍‍⚕️': [
        'Miehen Terveystyöntekijä',
        'Miehen Lääkäri',
        'Mies Sairaanhoitaja'
    ],
    '👩{{skin_tone}}‍⚕️': [
        'Nainen Terveydenhuollon Työntekijä',
        'Naisen Lääkäri',
        'Naisen Sairaanhoitaja'
    ],
    '🤷{{skin_tone}}‍♂️': [
        'Mies Kuivuminen',
        'idk mies',
        'dunno'
    ],
    '🤷{{skin_tone}}‍♀️': [
        'Nainen Kuivuminen',
        'idk nainen',
        'dunno'
    ],
    '🤦{{skin_tone}}‍♂️': ['Ihmisen Kasvopalmulointi'],
    '🤦{{skin_tone}}‍♀️': ['Nainen Facepalming'],
    '🙇{{skin_tone}}‍‍♂️': ['Mies Niittäminen'],
    '🙇{{skin_tone}}‍‍♀️': ['Nainen Leivonta'],
    '🧏{{skin_tone}}‍♂️': ['Deaf Man'],
    '🧏{{skin_tone}}‍‍♀️': ['Deaf Nainen'],
    '🙋{{skin_tone}}‍‍♂️': [
        'Ihminen Käsien Ylösnostaminen',
        'Iloinen Mies Nousu Yhtä Kättä'
    ],
    '🙋{{skin_tone}}‍♀️': [
        'Nainen Nousu Käsi',
        'Onnellinen Nainen Nousu Yksi Käsi'
    ],
    '💁{{skin_tone}}‍♂️': [
        'Miehen Tippaus Käsi',
        'Information Desk Man'
    ],
    '💁{{skin_tone}}‍♀️': [
        'Naisen Tippaus Käsi',
        'Information Desk Nainen'
    ],
    '🙆{{skin_tone}}‍♂️': ['Man Gesturing OK'],
    '🙆{{skin_tone}}‍♀️': ['Nainen Eletään OK'],
    '🙅{{skin_tone}}‍♂️': ['Miehen Ele Ei'],
    '🙅{{skin_tone}}‍♀️': ['Naisen Eleen Ei'],
    '🙎{{skin_tone}}‍♂️': ['Miehen Kiinnitys'],
    '🙎{{skin_tone}}‍‍♀️': ['Naisen Kiinnitys'],
    '🙍{{skin_tone}}‍‍♂️': ['Man Frowning'],
    '🙍{{skin_tone}}‍‍♀️': ['Nainen Frowning'],
    '🧟‍‍♂️': ['Man Zombi'],
    '🧟‍‍♀️': ['Nainen Zombi'],
    '🚶{{skin_tone}}‍♂️': ['Miehen Kävely'],
    '🚶{{skin_tone}}‍♀️': ['Nainen Kävely'],
    '🧍{{skin_tone}}‍‍♂️': ['Mies Seisoo'],
    '🧍{{skin_tone}}‍‍♀️': ['Nainen Seisoo'],
    '🧎{{skin_tone}}‍♂️': ['Mies Kneeling'],
    '🧎{{skin_tone}}‍‍♀️': ['Nainen Kneeling'],
    '👨{{skin_tone}}‍🦯': ['Mies valkoisella ruokalajilla'],
    '👩{{skin_tone}}‍🦯': ['Nainen kanssa White Cane'],
    '👨{{skin_tone}}‍🦼': ['Mies moottoroidussa pyörätuolissa'],
    '👩{{skin_tone}}‍🦼': ['Nainen moottoroidussa pyörätuolissa'],
    '👨{{skin_tone}}‍🦽': ['Miehen käsikäyttöinen pyörätuoli'],
    '👩{{skin_tone}}‍🦽': ['Nainen käsikirjassa pyörätuoli'],
    '👯‍♂️': ['Miehet, joilla on pupu korva'],
    '👯‍♀️': ['Naiset Bunny Ears'],
    '🕴️{{skin_tone}}‍': [
        'Suvun asukas Levitating',
        'Ihmisten Suojaaminen',
        'Rude Boy',
        'Walt Jabsco',
        'Man in Business Suit Levitating'
    ],
    '🧖{{skin_tone}}‍♂️': [
        'Mies höyryssä huoneessa',
        'Saunan mies'
    ],
    '🧖{{skin_tone}}‍♀️': [
        'Nainen höyryssä huoneessa',
        'Nainen saunassa'
    ],
    '👫{{skin_tone}}‍': [
        'Nainen ja mies kädet',
        'Heteroseksuaalinen Pari',
        'Suora Pari',
        'Mies ja nainen Holding kädet'
    ],
    '👭{{skin_tone}}‍': [
        'Lesbian Pariskunta',
        'Naiset Kädet Pidossa',
        'Kaksi Naista Kädet'
    ],
    '👬{{skin_tone}}‍': [
        'Miehet Pidossa Kädet',
        'Gay Pari',
        'Kaksi Miehtä Holding Kädet'
    ],
    '👨‍👩‍👦': [
        'Perhe Äitillä, Isällä ja Pojalla',
        'Perhe: Mies, Nainen, Poika'
    ],
    '👨‍👩‍👧': [
        'Perhe Äidin, Isän ja Tyttären kanssa',
        'Perhe: Mies, Nainen, Tyttö'
    ],
    '👨‍👩‍👧‍👦': [
        'Perhe Äitien, Isän, Pojan ja Tyttären kanssa',
        'Perhe: Mies, Nainen, Tyttö, Poika'
    ],
    '👨‍👩‍👦‍👦': [
        'Perhe Äitien, Isän ja kahden Pojan kanssa',
        'Perhe: Mies, Nainen, Poja, Poika'
    ],
    '👨‍👩‍👧‍👧': [
        'Perhe Äidin, Isän ja kahden Tyttären kanssa',
        'Perhe: Mies, Nainen, Tyttö, Tyttö'
    ],
    '👨‍👨‍👦': [
        'Perhe kahden Isän ja Pojan kanssa',
        'Perhe: Mies, Mies, Poika'
    ],
    '👨‍👨‍👧': [
        'Perhe kahden Isän ja Tyttären kanssa',
        'Perhe: Mies, Mies, Tyttö'
    ],
    '👨‍👨‍👧‍👦': [
        'Perhe kahden Isän, Pojan ja Tyttären kanssa',
        'Perhe: Mies, Mies, Tyttö, Poika'
    ],
    '👨‍👨‍👦‍👦': [
        'Perhe kahden Isän ja kahden Pojan kanssa',
        'Perhe: Mies, Mies, poika, Poika'
    ],
    '👨‍👨‍👧‍👧': [
        'Perhe kahden Isän ja kahden Tyttären kanssa',
        'Perhe: Mies, Mies, Tyttö, Tyttö'
    ],
    '👩‍👩‍👦': [
        'Perhe kaksi äitiä ja poika',
        'Perhe: Nainen, Nainen, Poika'
    ],
    '👩‍👩‍👧': [
        'Perhe kahden äidin ja tyttären kanssa',
        'Perhe: Nainen, Nainen, Tyttö'
    ],
    '👩‍👩‍👧‍👦': [
        'Perhe kahden äidin kanssa, poika ja tytär',
        'Perhe: Nainen, Nainen, Tyttö, Poika'
    ],
    '👩‍👩‍👦‍👦': [
        'Perhe kaksi äitiä ja kaksi poikaa',
        'Perhe: Nainen, Nainen, Poja, Poika'
    ],
    '👩‍👩‍👧‍👧': [
        'Perhe kahden äidin ja kahden tyttären kanssa',
        'Perhe: Nainen, Nainen, Tyttö, Tyttö'
    ],
    '👨‍👦': [
        'Perhe Isän ja Pojan kanssa',
        'Perhe: Mies, Poika'
    ],
    '👨‍👦‍👦': [
        'Perhe: Mies, poika, Poika',
        'Perhe Isän ja kahden Pojan kanssa'
    ],
    '👨‍👧': [
        'Perhe Isän ja tyttären kanssa',
        'Perhe: Mies, Tyttö'
    ],
    '👨‍👧‍👦': [
        'Perhe Isän, Pojan ja Tyttären kanssa',
        'Perhe: Mies, Tyttö, Poika'
    ],
    '👨‍👧‍👧': [
        'Perhe Isän ja kahden Tyttären kanssa',
        'Perhe: Mies, Tyttö, Tyttö'
    ],
    '👩‍👦': [
        'Perhe Äidin ja Pojan kanssa',
        'Perhe: Nainen, Poika'
    ],
    '👩‍👦‍👦': [
        'Perhe Äiti ja kaksi poikaa',
        'Perhe: Nainen, Poja, Poika'
    ],
    '👩‍👧': [
        'Perhe Äiti ja tytär',
        'Perhe: Nainen, Tyttö'
    ],
    '👩‍👧‍👦': [
        'Perhe Äidin, Pojan ja Tyttären kanssa',
        'Perhe: Nainen, Tyttö, Poika'
    ],
    '👩‍👧‍👧': [
        'Perhe Äiti ja kaksi tytärtä',
        'Perhe: Nainen, Tyttö, Tyttö'
    ],
    '💑': [
        'Pariskunta sydämen kanssa',
        'Pari Rakkaudessa',
        'Rakastava Pariskunta',
        'Ihminen ja nainen sydämen kanssa'
    ],
    '👨‍❤️‍👨': [
        'Kaksi Miehtä Sydämellä',
        'Pariskunta sydämen kanssa: mies, mies'
    ],
    '👩‍❤️‍👩': [
        'Kaksi Naiset Sydämessä',
        'Pari sydämen kanssa: Nainen, Nainen'
    ],
    '💆{{skin_tone}}‍‍♂️': ['Miehen Pään Hieronta'],
    '💆{{skin_tone}}‍♀️': ['Nainen Päähieronta'],
    '💇{{skin_tone}}‍‍♂️': ['Mies Hiusleikkuu'],
    '💇{{skin_tone}}‍‍♀️': ['Nainen Saada Hiusleikkauksia'],
    '🛌{{skin_tone}}‍': [
        'Nukkuva Majoitus',
        'Henkilö sängyssä',
        'Henkilö Nukkuminen'
    ]
};
/*animals*/
emojis_language[lang][4] = {
    '😺': [
        'Grinning Kissa',
        ':)',
        'Onnellinen Kissa',
        'Hymyilevä Kissa',
        'Onnellinen Kissa Kasvot',
        'Hymyilevä kissa kasvot Open Mouth'
    ],
    '😸': [
        'Grinning kissa kanssa hymyilevät silmät',
        ':D',
        'Grinning Kissa',
        'Onnellinen Kissa',
        'Grinning Kissa Kasvot'
    ],
    '😹': [
        'Kissa kanssa Tears of Joy',
        ':\')',
        'Onnellinen Kissa',
        'Nauraa Kissa'
    ],
    '😻': [
        'Hymyilevä kissa sydämen silmin',
        '*.*',
        'Sydän Silmät Kissa',
        'Rakastava Kissa',
        'Hymyilevä kissa kasvot sydämen muotoiset silmät'
    ],
    '😼': [
        'Kissa jossa Wry Smile',
        'Smirking Kissa',
        'Kissan Kasvot',
        'Cat Face with Wry Smile'
    ],
    '😽': [
        'Suudella Kissa',
        ':*',
        'Kissing Cat Face',
        'Kissing Cat kasvot suljettujen silmien kanssa'
    ],
    '🙀': [
        'Weary Kissa',
        ':O',
        'Häikäisevä Kissa',
        'Kissa Huutaa',
        'Kissan kasvojen huumaaminen pelossa',
        'Weary Kissa Kasvot'
    ],
    '😿': [
        'Kissa Yritetään',
        ':\'(',
        'Surullinen Kissa',
        'Crying Kissa Kasvot'
    ],
    '😾': [
        'Kiinnitetään Kissa',
        'Grumpy Cat',
        'Kiinnityskissan Kasvot'
    ],
    '🙈': [
        'Apina',
        'Katso Ei-Evil Apina',
        'Mizaru',
        'Monkey Covering Silmät'
    ],
    '🙉': [
        'Apina',
        'Hear-No-Evil Apina',
        'Kikazaru',
        'Apina Kattavat Korvat'
    ],
    '🙊': [
        'Apina',
        'Puhu Ei Evil Apina',
        'Iwazaru',
        'Monkey Covering Mouth',
        'Ei Puhumista'
    ],
    '🐵': [
        'Apina',
        'Apina Kasvot',
        'Apina Päähaara'
    ],
    '🐒': [
        'Apina',
        'Cheeky Apina'
    ],
    '🦍': ['Gorilla'],
    '🐶': [
        'Koiran Kasvot',
        'Koira',
        'Pennu'
    ],
    '🐕': [
        'Koira',
        'Doggo',
        'Akita Inu'
    ],
    '🦮': [
        'Silmien Koiran Seeing',
        'Opas Koira'
    ],
    '🐕‍🦺': ['Palvelun Koira'],
    '🐩': [
        'Poodle',
        'Koira',
        'Miniatyyri Poodle',
        'Vakio Poodle',
        'Lelu Poodle'
    ],
    '🐺': [
        'Susi',
        'Susien Kasvot'
    ],
    '🦊': [
        'Kettu',
        'Kettu Kasvot'
    ],
    '🦝': ['Rokotus'],
    '🐱': [
        'Kissa Kasvot',
        ':3',
        'Kitten',
        'Kitty'
    ],
    '🐈': [
        'Kissa',
        'Kissa Kotimaa',
        'Kenttä',
        'Talo'
    ],
    '🐈‍⬛': ['Musta Kissa'],
    '🦁': [
        'Leijona',
        'Lion Face'
    ],
    '🐯': [
        'Tiikerin Kasvot',
        'Söpö Tiikeri'
    ],
    '🐅': [
        'Tiikeri',
        'Bengal Tiger'
    ],
    '🐆': [
        'Leopard',
        'Afrikan Leopardi',
        'Jaguar'
    ],
    '🐴': [
        'Hevosen Kasvot',
        'Hevosen Pää'
    ],
    '🐎': [
        'Hevonen',
        'Soiva Hevonen',
        'Racehorse'
    ],
    '🦄': [
        'Yksisarvinen',
        'Yksisarvinen Kasvot'
    ],
    '🦓': [
        'Zebra',
        'Zebra Kasvot'
    ],
    '🦌': [
        'Peura',
        'Buck',
        'Poro',
        'Stag'
    ],
    '🐮': [
        'Lehmän Kasvot',
        'Lehmä',
        'Onnellinen Lehmä'
    ],
    '🐂': [
        'Härkä',
        'Bull',
        'Bullock',
        'Hapen',
        'Hehku'
    ],
    '🐃': [
        'Vesi Buffalo',
        'Buffalo',
        'Kotimaan Vesi Buffalo'
    ],
    '🐄': [
        'Lehmä',
        'Maidon Lehmä'
    ],
    '🐷': [
        'Sian Kasvot',
        'Sika',
        'Sian Pää'
    ],
    '🐖': [
        'Sika',
        'Hog',
        'Sow'
    ],
    '🐗': [
        'Karju',
        'Warthog',
        'Villi Boar',
        'Luonnonvarainen Sika'
    ],
    '🐽': ['Sika Nose'],
    '🐏': [
        'Ram',
        'Lammas'
    ],
    '🐑': [
        'Ewe',
        'Lamb',
        'Lammas'
    ],
    '🐐': ['Vuohi'],
    '🐪': [
        'Kameli',
        'Arabian Kameli',
        'Dromedary Camel',
        'Yhden Bump Camel'
    ],
    '🐫': [
        'KaksiHump Camel',
        'Aasian Kameli',
        'Bactrian Camel'
    ],
    '🦙': [
        'Llama',
        'Alpaca'
    ],
    '🦒': [
        'Giraffe',
        'Giraffe Face'
    ],
    '🐘': ['Norsu'],
    '🦏': [
        'Rhinoceros',
        'Rhino'
    ],
    '🦛': [
        'Hippopotamus',
        'Hippo'
    ],
    '🐭': [
        'Hiiren Kasvot',
        'Hiiri'
    ],
    '🐁': [
        'Hiiri',
        'Dormouse',
        'Jyrkkä',
        'Hiiret'
    ],
    '🐀': [
        'Arvo',
        'Jyrkkä'
    ],
    '🐹': [
        'hamsteri',
        'hamsterin Kasvot'
    ],
    '🐰': [
        'Jäniksen Kasvot',
        'Pääsiäispupu'
    ],
    '🐇': [
        'Kani',
        'Bunny',
        'Pupu Kani'
    ],
    '🐿️': [
        'Chipmunk',
        'Orava'
    ],
    '🦔': ['Hedgehog'],
    '🦇': [
        'Lepakko',
        'Batman'
    ],
    '🐻': [
        'Karhu',
        'Karhu Kasvot',
        'Teddy Karhu'
    ],
    '🐨': [
        'Koala',
        'Koalan Kasvot'
    ],
    '🐼': [
        'Panda',
        'Panda Kasvot'
    ],
    '🦘': [
        'Kenguru',
        'Roo'
    ],
    '🦡': ['Badger'],
    '🦃': [
        'Turkki',
        'Kiitospäivä Turkki',
        'Luonnonvaraiset Turkki'
    ],
    '🐔': [
        'Kana',
        'Hen'
    ],
    '🐓': [
        'Cock',
        'Rooster',
        'Piparjuuret'
    ],
    '🐣': [
        'Haetaan Chickiä',
        'Vauva Kana',
        'Chick Hatching'
    ],
    '🐤': [
        'Vauvan Chick',
        'Keltainen Lintu'
    ],
    '🐥': [
        'Etupuoli Vauva Chick',
        'Vauvan Chick',
        'Seisova Chick'
    ],
    '🐦': ['Lintu'],
    '🐧': ['Penguin'],
    '🕊️': [
        'Dove',
        'Rauhan kyyhky'
    ],
    '🦅': [
        'Eagle',
        'Kalju Eagle'
    ],
    '🦆': ['Ankka'],
    '🦢': ['Joutsen'],
    '🦉': ['Pöllö'],
    '🦚': ['Peacock'],
    '🦜': ['Papukaija'],
    '🐸': [
        'Sammakko',
        'Toad',
        'Sammakko Kasvot'
    ],
    '🐊': [
        'Krokotiili',
        'Alligaattori',
        'Croc'
    ],
    '🐢': [
        'Kilpikonna',
        'Tortoise'
    ],
    '🦎': [
        'Lzard',
        'Gecko'
    ],
    '🐍': [
        'Käärme',
        'Käärme'
    ],
    '🐲': [
        'Lohikäärmeen Kasvot',
        'Lohikäärmeen Pää'
    ],
    '🐉': ['Lohikäärme'],
    '🦕': [
        'Sauropodi',
        'Brachiosaurus',
        'Brontosaurus',
        'Dinosaur'
    ],
    '🦖': [
        'T-Rex',
        'Tyrannosaurus Rex'
    ],
    '🐳': [
        'Spouting Whale',
        'Söpö Whale'
    ],
    '🐋': ['Valas'],
    '🐬': ['Delfiini'],
    '🐟': [
        'Kala',
        'Makean veden Kala'
    ],
    '🐠': [
        'Trooppinen Kala',
        'Kala',
        'Keltasininen Kala'
    ],
    '🐡': [
        'Blowfish',
        'Fugu',
        'Pallokala'
    ],
    '🦈': [
        'Hai',
        'Suuri Valkoinen Hai'
    ],
    '🐙': ['Meritursaat'],
    '🐚': [
        'Spiraalinen Tulkki',
        'Seashell',
        'Kuori'
    ],
    '🐌': [
        'Etana',
        'Slug',
        'Puutarhan Etana'
    ],
    '🦋': ['Perhonen'],
    '🐛': [
        'Bugi',
        'Caterpillar',
        'Hyönteinen'
    ],
    '🐜': [
        'Ant',
        'Bugi',
        'Hyönteinen'
    ],
    '🐝': [
        'Hunajamehiläinen',
        'Mehiläinen',
        'Bumblebee'
    ],
    '🐞': [
        'Lady Punajuuri',
        'Ladybird',
        'Ladybug',
        'Bugi'
    ],
    '🦗': [
        'Kriketti',
        'Grasshopper'
    ],
    '🕷️': ['Hämähäkki'],
    '🦂': ['Skorpioni'],
    '🦟': ['Mosquito'],
    '🦀': ['Taskurapu'],
    '🦞': ['Hummeri'],
    '🦐': [
        'Katkarapu',
        'Prawn'
    ],
    '🦑': ['Kalmari'],
    '🦧': ['Orangutan'],
    '🦥': ['Hidas'],
    '🦦': ['Otter'],
    '🦨': ['Iho'],
    '🦬': ['Bison'],
    '🦣': ['Mammutti'],
    '🦫': ['Majakka'],
    '🐻‍❄️': ['Polar Karhu'],
    '🦤': ['Dodo'],
    '🦭': ['Sinetti'],
    '🪲': ['Kuoriainen'],
    '🪳': ['Cockroach'],
    '🪰': ['Lento'],
    '🪱': ['Mato'],
    '🦩': ['Flamingo']
};
/*symbols*/
emojis_language[lang][5] = {
    '💘': [
        'Sydämen kanssa nuoli',
        'Nuoli Cupid',
        'Lovestruck'
    ],
    '💝': [
        'Sydän nauhan kanssa',
        'Suklaa Laatikko',
        'Lahja Laatikko',
        'Lahjan Sydän'
    ],
    '💖': [
        'Sparkling Heart',
        'Sparkle Sydän',
        'Sparkly Sydän',
        'Tähdet Sydän'
    ],
    '💗': [
        'Kasvava Sydän',
        'Useita Sydämiä',
        'Kolmen Sydän'
    ],
    '💓': [
        'Syö Sydän',
        'Sydän Hälytys',
        'Heartbeat',
        'Wifi Sydän'
    ],
    '💞': [
        'Kehittyvät Sydämet',
        'Kaksi Sydäntä'
    ],
    '💕': [
        'Kaksi Sydäntä',
        'Pienet Sydämet',
        'Kaksi Vaaleanpunaista Sydäntä'
    ],
    '💟': ['Sydän Koristelu'],
    '❣️': [
        'Sydän Exklamaatio',
        'Sydän Yläpuolella Pisteet',
        'Punainen sydän kuin Exclamation Mark',
        'Raskas Sydän Exclamation Mark Koriste'
    ],
    '💔': [
        'Rikkinäinen Sydän',
        'Sydämen Murtuminen',
        'Rikkinäinen',
        'Sydän Rikkinäinen'
    ],
    '❤️': [
        'Rakastan Sinua',
        'Punainen Sydän',
        'Sydän',
        'Rakasta Sydäntä',
        'Punainen Sydän'
    ],
    '🧡': [
        'Oranssi Sydän',
        'Rakastan Sinua'
    ],
    '💛': [
        'Keltainen Sydän',
        '#1 BF Snapchat',
        'Kultainen Sydän',
        'Rakastan Sinua'
    ],
    '💚': [
        'Vihreä Sydän',
        'Mustasukkainen Sydän',
        'Rakastan Sinua'
    ],
    '💙': [
        'Sininen Sydän',
        'Rakastan Sinua'
    ],
    '💜': [
        'Violetti Sydän',
        'Rakastan Sinua'
    ],
    '🖤': [
        'Musta Sydän',
        'Tumma Sydän',
        'Rakastan Sinua'
    ],
    '🤍': [
        'Valkoinen Sydän',
        'Rakastan Sinua'
    ],
    '🤎': [
        'Ruskea Sydän',
        'Rakastan Sinua'
    ],
    '💯': [
        'Saavutetut Pisteet',
        '100',
        '%',
        'Pidä 100',
        'Täydellinen Pistemäärä',
        'Sata Pisteitä Symboli'
    ],
    '💬': [
        'Puheen Ilmapallo',
        'Keskustelun Kupla',
        'Puheen Kupla'
    ],
    '💭': [
        'Ajatus Ilmapallo',
        'Ajatteleva Kupla',
        'Ajatteli Kupla'
    ],
    '💤': [
        'Zzz',
        'Nukkumaanmenoaika',
        'Kyllästys',
        'Lepotila',
        'Nukkuva Kyltti',
        'Nukkuva Symboli'
    ],
    '♠️': [
        'Spade Puku',
        'Spades',
        'Black Spade Suit'
    ],
    '♥️': [
        'Sydän Puku',
        'Kortti Sydämessä',
        'Sydän',
        'Musta Sydän Puku'
    ],
    '♦️': [
        'Timantti Puku',
        'Timantit',
        'Musta Timantti Puku'
    ],
    '♣️': [
        'Klubin Puku',
        'Klubit',
        'Musta Klubi Puku'
    ],
    '🏧': [
        'ATM Allekirjoitus',
        'ATM',
        'Automatisoitu Telleer Machine'
    ],
    '🎵': [
        'Musiikillinen Muistiinpano',
        'Kahdeksannen Huomautuksen Parametrit',
        'Kavioparit (Beamed Parit)',
        'Musiikin Muistiinpano'
    ],
    '🎶': [
        'Musikaaliset Muistilaput',
        'Musiikki',
        'Musiikin Muistiinpanot',
        'Laulaminen',
        'Useita Muistia Muistia'
    ],
    '🔔': [
        'Äänimerkki',
        'Liberty Bell',
        'Ringer',
        'Hääkello'
    ],
    '🔕': [
        'Kello ja Slash',
        'Ilmoitukset',
        'Soittoääni: Ei Käytössä',
        'Mykistetty Kello',
        'Kello peruutus Stroke'
    ],
    '🔈': [
        'Kaiutin Matala Äänenvoimakkuus',
        'Tilavuus',
        'Kaiutin'
    ],
    '🔉': [
        'Kaiutin Keskipitkä Äänenvoimakkuus',
        'Vähennä Äänenvoimakkuutta',
        'Kaiutin Keskipitkällä Äänenvoimakkuudella',
        'One Sound Wave kaiutin'
    ],
    '🔊': [
        'Kaiutin Korkea Äänenvoimakkuus',
        'Lisää Äänenvoimakkuutta',
        'Kolme ääniaaltoa sisältävä kaiutin'
    ],
    '🔇': [
        'Mykistetty Kaiutin',
        'Mykistä Äänenvoimakkuus',
        'Kaiutin peruutus Stroke'
    ],
    '⛔': ['Ei Merkintää'],
    '🚫': [
        'Kielletty',
        'Estetty',
        'Ympyrän Takaisinviiva',
        'Ei',
        'Punainen Ympyrä Ristikko',
        'Rajoitettu',
        'Ei Merkintöä'
    ],
    '🚳': [
        'Ei Polkupyöriä',
        'Ei Polkupyörien Allekirjoitusta'
    ],
    '🚭': [
        'Ei Tupakointia',
        'Ei Tupakointitunnusta'
    ],
    '🚯': [
        'Ei Littering',
        'Älä Älä Litter Symboli'
    ],
    '🚱': [
        'Ei-Juotollinen Vesi',
        'Ei Vettä',
        'Ei Juomavettä',
        'Ei-Potable Water Symboli'
    ],
    '🚷': [
        'Ei Jalankulkijoita',
        'Ei Ihmisiä',
        'Ei Kävely'
    ],
    '🔞': [
        'Ei Alle kahdeksantoista',
        'NSFW',
        'Ei Yhtään Alle kahdeksantoista Symboli',
        '18'
    ],
    '📵': [
        'Ei Matkapuhelimia',
        'Ei Solupuhelimia',
        'Ei Puhelimia',
        'Ei Älypuhelimia'
    ],
    '☢️': [
        'Radioactive',
        'Kansainvälinen Säteilymboli',
        'Ydinvoima',
        'Radioaktiivinen Kyltti'
    ],
    '☣️': [
        'Biovaara',
        'Biovaaran Merkki'
    ],
    '⬆️': [
        'Nuoli Ylös',
        'Nuoli Pisteytys Ylös',
        'Musta Nuoli Ylöspäin'
    ],
    '↗️': [
        'Nuoli Ylösoikealle',
        'Vino Oikealle Ylöspäin',
        'Kaakkoinen Nuoli'
    ],
    '➡️': [
        'Nuoli Oikealle',
        'Nuoli Osoittaa Oikealle',
        'Musta Oikeakulmainen Nuoli'
    ],
    '↘️': [
        'Alaoikea Nuoli',
        'Vino Alas Oikea Nuoli',
        'Kaakkoinen Nuoli'
    ],
    '⬇️': [
        'Nuoli Alas',
        'Nuoli Pisteytys Alas',
        'Musta Nuoli Alaspäin'
    ],
    '↙️': [
        'Alas Vasemmalla Nuoli',
        'Vino Alas Vasen Nuoli',
        'Lounainen Nuoli'
    ],
    '⬅️': [
        'Nuoli Vasemmalle',
        'Nuoli Osoittaa Vasemmalle',
        'Vasen Musta Nuoli'
    ],
    '↖️': [
        'Nuoli Ylösvasemmalle',
        'Vino Ylösvasen Nuoli',
        'Lounainen Nuoli'
    ],
    '↕️': [
        'Nuoli Ylöspäin',
        'Pystysuorat Nuolet',
        'Nuoli Ylös Alas'
    ],
    '↔️': [
        'Nuoli Vasemmalle Oikealle',
        'Vaakasuorat Nuolet',
        'Sivutiet Nuolet',
        'Nuoli Vasemmalle Oikealle'
    ],
    '↩️': [
        'Nuoli Oikealle Kaareva Vasemmalle',
        'Lähetä Vastaus',
        'Vasen Kaareva Nuoli',
        'Vasen nuoli koukulla'
    ],
    '↪️': [
        'Nuoli Kaareu Oikealle',
        'Sähköposti Eteenpäin',
        'Oikea Kaareva Nuoli',
        'Nuoli oikealla koukulla'
    ],
    '⤴️': [
        'Nuoli Oikealle Kaareva',
        'Nuoli Osoittaa Oikealle Sitten Kaareva Ylöspäin'
    ],
    '⤵️': [
        'Oikea Nuoli Kaareva Alas',
        'Kaareva Nuoli',
        'Nuoli Osoittaa Oikealle Sitten Kaareva Alaspäin'
    ],
    '🔃': [
        'Pystysuunnassa Olevat Nuolet',
        'Myötäpäivään alaspäin ja ylöspäin avoimet nuolet'
    ],
    '🔄': [
        'Vastapäivään Nuolinäppäin',
        'Päivitä',
        'Kierrä',
        'Vaihda',
        'Vastapäivään Nuolet',
        'Anticlockwise alaspäin ja ylöspäin avoimet nuolet'
    ],
    '🔙': [
        'Nuoli Takaisin',
        'Takaisin',
        'Takaisin vasemmalla nuoli yläpuolella'
    ],
    '🔚': [
        'Nuoli Lopussa',
        'Loppu',
        'Lopeta vasemmalla nuoli yläpuolella'
    ],
    '🔛': [
        'Päällä! Nuoli',
        'Päällä',
        'On kanssa Exclamation Mark vasen oikea nuoli yläpuolella'
    ],
    '🔜': [
        'Pian Nuoli',
        'Pian',
        'Pian oikealla nuoli yläpuolella'
    ],
    '🔝': [
        'Nuoli Yläpuolella',
        'Ylhäällä',
        'Ylhäällä ylös nuoli yläpuolella'
    ],
    '🛐': [
        'Palvonnan paikka',
        'Uskonnollinen Rakentaminen'
    ],
    '⚛️': ['Atomin Symboli'],
    '🕉️': [
        'Om Symboli',
        'Om',
        'Aumkara',
        'Omkara',
        'Pranava'
    ],
    '✡️': [
        'Daavidin tähti',
        'Magen David'
    ],
    '☸️': [
        'Dharman pyörä',
        'Helmi'
    ],
    '☯️': ['Yin Yang'],
    '✝️': [
        'Latinalainen Risti',
        'Kristillinen Risti'
    ],
    '☦️': ['Ortodoksinen Risti'],
    '☪️': ['Tähti ja puolikuu'],
    '☮️': [
        'Rauhan Symboli',
        'Rauhan Allekirjoitus'
    ],
    '🕎': [
        'MenoraName',
        'Candelabrum',
        'Kynttilät',
        'Chanukia',
        'MenoraName',
        'Menorah yhdeksän haaran kanssa'
    ],
    '🔯': [
        'Pilkullinen Kuusipisteinen Tähti',
        'Kuusi Pointed tähti keskipisteellä'
    ],
    '♈': [
        'Oinas',
        'Zodiaakki'
    ],
    '♉': [
        'Taurus',
        'Zodiaakki'
    ],
    '♊': [
        'Gemini',
        'Zodiaakki'
    ],
    '♋': [
        'Syöpä',
        'Zodiaakki'
    ],
    '♌': [
        'Leo',
        'Zodiaakki'
    ],
    '♍': [
        'Neitsyt',
        'Zodiaakki'
    ],
    '♎': [
        'Vaakat',
        'Zodiaakki'
    ],
    '♏': [
        'Skorpio',
        'Skorpius',
        'Zodiaakki'
    ],
    '♐': [
        'Sagittarius',
        'Zodiaakki'
    ],
    '♑': [
        'Kauris',
        'Zodiaakki'
    ],
    '♒': [
        'Vesimies',
        'Zodiaakki'
    ],
    '♓': [
        'Pisces',
        'Zodiaakki'
    ],
    '⛎': [
        'Ophiuchus',
        'Zodiaakki'
    ],
    '⏭️': [
        'Musta Oikea-pisteinen kaksoiskolmio pystysuoralla palkilla',
        'Ohita Eteenpäin -symboli',
        'Seuraava Kappaleen Painike'
    ],
    '⏮️': [
        'Musta vasemmanpuoleinen kaksoiskolmio ja pystysuora palkki',
        'Ohita Taaksepäin',
        'Viimeisin Kappaleen Painike',
        'Edellinen Kappale'
    ],
    '⏯️': [
        'Musta Oikea-pisteinen kolmio kaksinkertaisella pystysuoralla',
        'Toista tai keskeytä painike',
        'Pelaa Symboli',
        'Keskeytä Symboli'
    ],
    '🔀': [
        'Sekoita Kappaleiden Painike',
        'Kierretyt Oikeanpuoleiset Nuolet'
    ],
    '🔁': [
        'Toista Painike',
        'Silmukan Symboli',
        'Yritä Uudelleen',
        'Kelloittain oikeanpuoleiset ja vasen avoimet nuolet'
    ],
    '🔂': [
        'Toista Yksi Painike',
        'Nuolet Numerolla 1',
        'Silmukka Kerran Symboli',
        'Toista Yksi Kappaleen Symboli',
        'Kelloittain oikeanpuoleiset ja vasen avoin ympyrä nuolet Circled yksi peitto'
    ],
    '▶️': [
        'Toista Painike',
        'Oikea Kolmio',
        'Oikeanpuoleinen Kolmio',
        'Musta Oikea-Pisteen Kolmio'
    ],
    '◀️': [
        'Käänteinen Painike',
        'Vasen Kolmio',
        'Vasen Pisteytys Kolmio',
        'Musta Vasen Pisteytys Kolmio'
    ],
    '🔼': [
        'Ylöspäin Painike',
        'Ylös Kolmio',
        'Yläpisteytys Kolmio',
        'Ylös-Pisteytys Pieni Punainen Kolmio'
    ],
    '🔽': [
        'Alaspäin -Painike',
        'Alas Kolmio',
        'Down Pisteytys Kolmio',
        'Ala-Pisteytys Pieni Punainen Kolmio'
    ],
    '⏩': [
        'Pika-Eteenpäin -Painike',
        'Nopea Eteenpäin',
        'Nopea Eteenpäin -Symboli',
        'Musta Oikea-Pisteytys Kaksoiskolmio'
    ],
    '⏪': [
        'Fast Reverse Button',
        'Rewind',
        'Rewind Symboli',
        'Musta Vasemmanpuoleinen Kaksoiskolmio'
    ],
    '⏫': [
        'Nopea Ylös -Painike',
        'Kaksinkertaisen Kolmion Ylös',
        'Musta Ylöspäin Kaksoiskolmio'
    ],
    '⏬': [
        'Nopea Alas Painike',
        'Down Pisteytys Kaksoiskolmio',
        'Musta Alas Pisteytys Kaksoiskolmio'
    ],
    '⏹️': [
        'Pysäytä Painike',
        'Pysäytä',
        'Pysäytä Symboli',
        'Musta neliö pysäyttääksesi'
    ],
    '⏏️': [
        'Poista Painike',
        'Eject Symbol'
    ],
    '🎦': [
        'Elokuva',
        'Elokuva Näyttö',
        'Elokuvat',
        'Elokuva',
        'Elokuvan Symboli',
        'Nauhoitetaan'
    ],
    '📶': [
        'Antennin Baarit',
        'Vastaanottopalkkit',
        'Signaalin Vahvuus',
        'Stairs',
        'Signaalin Vahvuus Symboli',
        'Antenni ja tangot'
    ],
    '✖️': [
        'Kerrotaan',
        'Kerroksen Symboli',
        'Raskas Kerros X'
    ],
    '➕': [
        'Plus',
        'Plus Symboli',
        'Raskas Plus -kyltti'
    ],
    '➖': [
        'Minus',
        'Minus Symbol',
        'Raskas Minus Allekirjoitus'
    ],
    '➗': [
        'Jaa',
        'Divisioonan Symboli',
        'Raskas Division Allekirjoitus'
    ],
    '♾️': [
        'Loputon',
        'Pysyvä Paperimerkki'
    ],
    '‼️': [
        'Kaksinkertaisen Exklamaation Merkki',
        'Punainen Kaksinkertainen Exklamaatio Merkki'
    ],
    '⁉️': [
        'Exklamaation Kysymysmerkki',
        'Punainen Exclamation Mark ja kysymysmerkki'
    ],
    '❓': [
        'Kysymys Merkki',
        'Punainen Kysymysmerkki',
        'Musta Kyselymerkki Koriste'
    ],
    '❔': [
        'Valkoinen Kysymysmerkki',
        'Valkoinen Kysymysmerkki',
        'Valkoinen Kysymys Merkitse Koriste'
    ],
    '❗': [
        'Exklamaation Merkki',
        'Punaisen Exklamaation Merkki',
        'Raskas Exclamation Mark Symboli'
    ],
    '❕': [
        'Valkoinen Exklamaation Merkki',
        'Valkoinen Exclamation Mark Koriste'
    ],
    '⭕': [
        'Ontto Punainen Ympyrä',
        'Ympyrä',
        'Oikea',
        'Punainen Ympyrä',
        'Ympyrän Merkki',
        'Raskas Suuri Ympyrä'
    ],
    '☑️': [
        'Tarkista laatikko tarkistetulla',
        'V',
        'Valintaruutu',
        'Tarkista Merkitse Kohteeseen',
        'Tarkistettu Ballot Box'
    ],
    '✔️': [
        'Tarkista Merkki',
        'V',
        'Tarkista',
        'Kerää',
        'Checkmark',
        'Raskas Tarkastusmerkki'
    ],
    '❌': [
        'Ristijälki',
        'Risti',
        'X'
    ],
    '✅': [
        'Tarkista Merkkipainike',
        'V',
        'Vihreä Tarkista Merkki',
        'Vihreä Tick',
        'Tarkista Merkki',
        'Valkoinen Raskas Tarkastusmerkki'
    ],
    '❎': [
        'Ristijäljen Painike',
        'Risti',
        'X',
        'X Merkki',
        'Negatiivinen Ristimerkki'
    ],
    '#️⃣': [
        'Näppäimistön Numero Allekirjoitus',
        '#',
        'Hash Key',
        'Hashtag',
        'Lokakuutio',
        'Pound Key',
        'Numero Allekirjoitus'
    ],
    '*️⃣': [
        'Keycap Asterisk',
        'Tähden Näppäinkorkki'
    ],
    '0️⃣': [
        'Numero 0',
        'Keycap Digit Zero'
    ],
    '1️⃣': [
        'Numero 1',
        'Keycap Digit One'
    ],
    '2️⃣': [
        'Numero 2',
        'Keycap Digit 2'
    ],
    '3️⃣': [
        'Numero 3',
        'Keycap Digit Kolme'
    ],
    '4️⃣': [
        'Numero 4',
        'Keycap Digit Neljä'
    ],
    '5️⃣': [
        'Numero 5',
        'Keycap Digit Five'
    ],
    '6️⃣': [
        'Numero 6',
        'Keycap Digit Kuusi'
    ],
    '7️⃣': [
        'Numero 7',
        'Keycap Digit Seven'
    ],
    '8️⃣': [
        'Numero 8',
        'Keycap Digit Eight'
    ],
    '9️⃣': [
        'Numero 09',
        'Keycap Digit Yhdeksän'
    ],
    '🔟': [
        'Numero 10',
        'Keycap: 10',
        '10',
        'Keycap Digit Kymmenen'
    ],
    '🔠': [
        'Input Latin Uppercase',
        'ABCD',
        'Isot',
        'Sisääntulon symboli isoille kirjaimille',
        'Sisääntulon tunnus latinalaiselle pääkirjalle'
    ],
    '🔡': [
        'Input Latin Lowercase',
        'abcd',
        'Pienet Kirjaimet',
        'Sisääntulon tunnus pienikokoisille kirjaimille',
        'Syöttötunnuksen latinalaiseen pieneen kirjaimeen'
    ],
    '🔢': [
        'Input Numbers',
        '1234',
        'Numerot',
        'Numeric Input',
        'Numeroiden sisääntulon tunnus'
    ],
    '🔣': [
        'Sisääntulon symboli symbolit',
        'Symbolit',
        'Symboli Sisääntulo'
    ],
    '🔤': [
        'Input Latin Letters',
        'abc',
        'Aakkoset',
        'Kirjaimet',
        'Sisääntulon tunnus kirjaimille',
        'Sisääntulon tunnus latinalaisissa kirjaimissa'
    ],
    '🅰️': [
        'A Painike (loodityyppi)',
        'Veren Tyyppi A',
        'Kirje A',
        'Negatiivinen Latinalaisen Pääoman Kirje A'
    ],
    '🆎': [
        'Ab-Painike (loodityyppi)',
        'Kirjaimet AB',
        'Verityyppi AB',
        'Negatiivinen Squared AB'
    ],
    '🅱️': [
        'B Painike (loodityyppi)',
        'Kirje B',
        'Verityyppi B',
        'Negatiivinen Latinalaisen Pääoman Kirje B'
    ],
    '🆑': [
        'CL Painike',
        'Tyhjennä',
        'Tyhjennä Painike',
        'CL Allekirjoitus',
        'Neliöity CL',
        'Kirjaimet CL'
    ],
    '🆒': [
        'Viileä Painike',
        'Kylmä Neliö',
        'Viileä Kyltti',
        'Squared Cool'
    ],
    '🆓': [
        'Ilmainen Painike',
        'Ilmainen',
        'Ilmainen Allekirjoitus',
        'Neliöity Vapaa'
    ],
    'ℹ️': [
        'Tiedot',
        'Tietoa',
        'Pienet Kirjaimet I',
        'Matkailun Tiedot',
        'Tiedon Lähde'
    ],
    '🆔': [
        'Tunnuksen Painike',
        'ID',
        'Tunnistaminen',
        'Tunniste Allekirjoitus',
        'Neliön Tunnus'
    ],
    '🆕': [
        'Uusi Painike',
        'Uusi',
        'Uusi Allekirjoitus',
        'Neliöity Uusi'
    ],
    '🅾️': [
        'O Painike (loodityyppi)',
        'Veren Tyyppi O',
        '0',
        'Negatiivinen Latinalaisen Pääoman Kirje',
        'Kirjain O'
    ],
    '🆗': [
        'OK Painike',
        'OK',
        'Okei',
        'Neliö',
        'OK Allekirjoitus',
        'Neliöity OK'
    ],
    '🅿️': [
        'P Painike',
        'Pysäköinti Allekirjoitus',
        'Negatiivinen Latinalaisen Pääoman Kirje',
        'Kirje P'
    ],
    '🆘': [
        'Sos Painike',
        'Hätäsignaali',
        'Hätätila',
        'SOS',
        'Sos Allekirjoitus',
        'Neliöidyt SOS',
        'Ohje'
    ],
    '🆙': [
        'Ylhäältä! Painike',
        'Taso Ylös',
        'Ylös',
        'Ylös Allekirjoitus',
        'Squared Up with Exclamation Mark'
    ],
    '🆚': [
        'VS -painike',
        'Neljäs Vs'
    ],
    '🆖': [
        'Ng Painike',
        'Neliöity NG',
        'Ei Hyvä Allekirjoitus',
        'Ei Hyvä',
        'NG',
        'Blooper'
    ],
    '🔴': [
        'Punainen Ympyrä',
        'Suuri Punainen Ympyrä'
    ],
    '🟠': [
        'Oranssi Ympyrä',
        'Suuri Oranssi Ympyrä'
    ],
    '🟡': [
        'Keltainen Ympyrä',
        'Suuri Keltainen Ympyrä'
    ],
    '🟢': [
        'Vihreä Ympyrä',
        'Suuri Vihreä Ympyrä'
    ],
    '🔵': [
        'Sininen Ympyrä',
        'Suuri Sininen Ympyrä'
    ],
    '🟣': [
        'Violetti Ympyrä',
        'Suuri Violetti Ympyrä'
    ],
    '🟤': [
        'Ruskea Ympyrä',
        'Suuri Ruskea Ympyrä'
    ],
    '⚫': [
        'Musta Ympyrä',
        'Keskikokoinen Musta Ympyrä'
    ],
    '⚪': [
        'Valkoinen Ympyrä',
        'Keskikokoinen Valkoinen Ympyrä'
    ],
    '🟥': [
        'Punainen Neliö',
        'Suuri Punainen Neliö'
    ],
    '🟧': [
        'Oranssi Neliö',
        'Suuri Oranssi Neliö'
    ],
    '🟨': [
        'Keltainen Neliö',
        'Suuri Keltainen Neliö'
    ],
    '🟩': [
        'Vihreä Neliö',
        'Suuri Vihreä Neliö'
    ],
    '🟦': [
        'Sininen Neliö',
        'Suuri Sininen Neliö'
    ],
    '🟪': [
        'Violetti Neliö',
        'Suuri Violetti Neliö'
    ],
    '🟫': [
        'Ruskea Neliö',
        'Suuri Ruskea Neliö'
    ],
    '⬛': ['Musta Suuri Neliö'],
    '⬜': ['Valkoinen Suuri Neliö'],
    '◼️': ['Musta Keskikokoinen Neliö'],
    '◻️': ['Valkoinen Keskikokoinen Neliö'],
    '◾': ['Musta Keskikokoinen Pieni Neliö'],
    '◽': ['Valkoinen Keskikokoinen Pieni Neliö'],
    '▪️': ['Musta Pieni Neliö'],
    '▫️': ['Valkoinen Pieni Neliö'],
    '💠': [
        'Timantti muoto, jossa Dot sisällä',
        'Ruoansulatus',
        'Timantti Kukka',
        'Kavaiji'
    ],
    '🔶': ['Suuri Oranssi Timantti'],
    '🔷': ['Suuri Sininen Timantti'],
    '🔸': ['Pieni Oranssi Timantti'],
    '🔹': ['Pieni Sininen Timantti'],
    '🔺': [
        'Punainen Kolmio Pointed Ylös',
        'Ylös Pisteytys Punainen Kolmio'
    ],
    '🔻': [
        'Punainen Kolmio Pointed Alas',
        'Down Pisteytys Punainen Kolmio'
    ],
    '🔳': ['Valkoinen Neliön Painike'],
    '🔲': ['Musta Neliöpainike'],
    '©️': [
        'Tekijänoikeus',
        'Tekijänoikeus Allekirjoitus'
    ],
    '®️': [
        'Rekisteröity',
        'Rekisteröity Allekirjoitus'
    ],
    '™️': [
        'Kauppanimi',
        'TM',
        'Tavaramerkki',
        'Tavaramerkin Allekirjoitus'
    ],
    '🛅': [
        'Vasen Matkatavarat',
        'Pussi Avain',
        'Lukitut Matkalaukut'
    ],
    '🛄': ['Matkatavaroiden Lunastaminen'],
    '🛃': ['Tulli'],
    '🛂': [
        'Passin Valvonta',
        'Reunan Ohjaus'
    ],
    '🚰': [
        'Potable Water Symboli',
        'Joni',
        'Juudas',
        'Vesi Napautus',
        'Vesihuolto'
    ],
    '🇦': [
        'Kirje A',
        'Alueellisen Indikaattorin Tunnuskirjain A'
    ],
    '🇧': [
        'Kirje B',
        'Alueellisen Indikaattorin Merkkikirje B'
    ],
    '🇨': [
        'Kirje C',
        'Alueellisen Indikaattorin Merkkikirjain C'
    ],
    '🇩': [
        'Kirje D',
        'Alueellisen Indikaattorin Tunnuskirjain D'
    ],
    '🇪': [
        'Kirje E',
        'Alueellisen Indikaattorin Merkkikirjain E'
    ],
    '🇫': [
        'Kirje F',
        'Alueellisen Indikaattorin Merkkikirjain F'
    ],
    '🇬': [
        'Kirje G',
        'Alueellisen Indikaattorin Tunnuskirjain G'
    ],
    '🇭': [
        'Kirje H',
        'Alueellisen Indikaattorin Tunnuskirjain H'
    ],
    '🇮': [
        'Kirje I',
        'Alueellisen Indikaattorin Merkkikirjain I'
    ],
    '🇯': [
        'Kirje J',
        'Alueellinen Indikaattori Symbol Letter J'
    ],
    '🇰': [
        'Kirje K',
        'Alueellinen Indikaattori Symbol Letter K'
    ],
    '🇱': [
        'Kirjain L',
        'Alueellisen Indikaattorin Merkkikirjain L'
    ],
    '🇲': [
        'Kirje M',
        'Alueellisen Indikaattorin Merkkikirjain M'
    ],
    '🇳': [
        'Kirje N',
        'Alueellisen Indikaattorin Tunnuskirjain N'
    ],
    '🇴': [
        'Kirjain O',
        'Alueellisen Indikaattorin Tunnuskirjain O'
    ],
    '🇵': [
        'Kirje P',
        'Alueellisen Indikaattorin Tunnuskirjain P'
    ],
    '🇶': [
        'Kirje Q',
        'Alueellinen Merkkijonokirjain Q'
    ],
    '🇷': [
        'Kirje R',
        'Alueellinen Merkkijonomerkki R'
    ],
    '🇸': [
        'Kirje S',
        'Alueellisen Indikaattorin Merkkikirjain S'
    ],
    '🇹': [
        'Kirje T',
        'Alueellinen Merkkijonomerkki T'
    ],
    '🇺': [
        'Kirje U',
        'Alueellinen Indikaattori Symbol Letter U'
    ],
    '🇻': [
        'Kirje V',
        'Alueellinen Merkkijonomerkki V'
    ],
    '🇼': [
        'Kirje W',
        'Alueellinen Indikaattorin Merkkikirje W'
    ],
    '🇽': [
        'Kirje X',
        'Alueellisen Indikaattorin Merkkikirje X'
    ],
    '🇾': [
        'Kirje Y',
        'Alueellinen Indikaattorin Merkkikirjain Y'
    ],
    '🇿': [
        'Kirje Z',
        'Alueellisen Indikaattorin Symbolin Kirje Z'
    ],
    '💌': [
        'Rakkaus Kirje',
        'Sydän Kirjekuori',
        'Rakasta Muistiinpano'
    ],
    '🚮': [
        'Laita pentue sen paikka symboli',
        'Pehmeä Bin Kirjaudu sisään',
        'Laita Vieras Roskakoriin',
        'Henkilö Roskakorilla'
    ],
    '♿': [
        'Pyörätuolin Symboli',
        'Esteetön Kylpyhuone'
    ],
    '🚹': [
        'Miesten Symboli',
        'Miesten Symboli',
        'Miesten WC',
        'Miehen Restroom',
        'Miehen WC'
    ],
    '🚺': [
        'Naisten Symboli',
        'Naisten Symboli',
        'Naisten WC',
        'Naisen Restroom',
        'Famale WC'
    ],
    '🚻': [
        'Restroom',
        'Kylpyhuoneen Allekirjoitus',
        'WC:n Allekirjoitus',
        'WC Allekirjoitus'
    ],
    '🚼': [
        'Vauvan Symboli',
        'Vauvan Muutosasema',
        'Vauvan Muutoksen Symboli',
        'Taimitarha'
    ],
    '🚾': [
        'Veden Suljin',
        'WC',
        'WC WC'
    ],
    '⚠️': [
        'Varoitus Merkki',
        'Hälytyksen Symboli'
    ],
    '🚸': [
        'Lasten Risteys',
        'Lasten Risteys',
        'Koulun Ristiretki'
    ],
    '🔅': [
        'Matalan Kirkkauden Symboli',
        'Himmennä Painike',
        'Vähennä Kirkkautta'
    ],
    '🔆': [
        'Korkea Kirkkaus Symboli',
        'Lisää Kirkkautta',
        'Kirkas Painike'
    ],
    '📳': [
        'Värinä Tila',
        'Puhelimen Sydän',
        'Äänetön Tila'
    ],
    '📴': ['Mobiilipuhelin Pois Käytöstä'],
    '〰️': [
        'Aalto',
        'Wavy Dash'
    ],
    '💱': ['Valuutan Valuutta'],
    '💲': [
        'Raskaan Dollarin Allekirjoitus',
        'Dollari',
        'Dollarin Allekirjoitus'
    ],
    '♻️': [
        'Musta Universal Kierrätys Symboli',
        'Kierrätystunnus',
        'Kierrätä Logo'
    ],
    '🔱': [
        'Trident Tunnus',
        'Pitchfork',
        'Trident'
    ],
    '📛': [
        'Nimen Merkki',
        'Tofu Tulessa',
        'Nimi Tagi',
        'Tuli Tagi'
    ],
    '🔰': [
        'Japanin tunnus aloittelijalle',
        'Shoshinsha Merkki',
        'Keltainen Vihreä Kilpi'
    ],
    '➰': [
        'Curly Silmukka',
        'Curling Silmukka',
        'Silmukka'
    ],
    '➿': [
        'Kaksinkertainen Kiertosilmukka',
        'KaksoisCurling Silmukka',
        'Vastaaja'
    ],
    '〽️': [
        'Osan Vaihtoehdon Merkki',
        'M',
        'McDonaldin'
    ],
    '✳️': ['Kahdeksan Poimittua Asteriskia'],
    '✴️': [
        'Kahdeksan Osoitettua Musta Tähti',
        'Oranssi Tähti',
        'Kahdeksan Osoitettua Tähti'
    ],
    '❇️': ['Sparkle'],
    'Ⓜ️': [
        'Circled Latin Capital Letter M',
        'Kierretty M',
        'Metro',
        'Kierretty M'
    ],
    '🈁': [
        'Squared Katakana Koko',
        'Japanin Sana Allekirjoitus Merkitys Täällä',
        'Tässä',
        'Kohde'
    ],
    '🈂️': [
        'Squared Katakana Sa',
        'Japanilainen viittomamerkintä Palvelu tai palvelumaksu'
    ],
    '🈷️': [
        'CJK Yhtenäinen Ideograph-6708',
        'Radikaali 74',
        '月',
        'Japanin Allekirjoituksen Merkitys Kuukausittainen Määrä'
    ],
    '🈶': [
        'CJK Yhtenäinen Ideograph-6709',
        'Japanilainen viittomamerkki, joka ei ole maksuton',
        'Oma',
        '有'
    ],
    '🈯': [
        'CJK Yhtenäinen Ideograph-6307',
        'Japanilainen Allekirjoituksen Merkitys Varattu',
        'Sormen Piste',
        '指'
    ],
    '🉐': [
        'Kierretyn Ideografin Edut',
        'Japanilainen Allekirjoituksen Merkitys',
        'Hanki',
        '得'
    ],
    '🈹': [
        'CJK Yhtenäinen Ideograph-5272',
        'Japanin Allekirjoituksen Merkitys Alennus',
        'Bargain Myynti',
        '割'
    ],
    '🈚': [
        'Neljäs CJK Unified Ideograph-7121',
        'Japanilainen kyltti Merkitys ilmaiseksi',
        'Puuttuu',
        '無'
    ],
    '🈲': [
        'Yhtenäinen CJK Unified Ideograph-7981',
        'Japanilainen Merkki Merkitys Kielletty',
        'Forbid',
        '禁'
    ],
    '🉑': [
        'Kierretty Ideograph Hyväksy',
        'Japanin Allekirjoituksen Merkitys Hyväksyttävä',
        'Hyväksy'
    ],
    '🈸': [
        'CJK Yhtenäinen Ideograph-7533',
        'Japanilainen Allekirjoituksen Merkitys Sovellus',
        'Sovelluslomake',
        'Apina',
        'Pyyntö',
        '申'
    ],
    '🈴': [
        'CJK Yhtenäinen Ideograph-5408',
        'Japanilainen Allekirjoituksen Merkitys Syöttäminen (Luokka)',
        'Sopimus',
        '合'
    ],
    '🈳': [
        'Yhtenäinen CJK Unified Ideograph-7a7A',
        'Japanilainen Merkitys Vacancy',
        'Tyhjä ja käytettävissä',
        '空'
    ],
    '㊗️': [
        'Kierretty Ideograph Onnittelut',
        'Onnittelut Japanilaiselle Allekirjoitukselle'
    ],
    '㊙️': [
        'Kierretty Ideograph Salaisuus',
        'Japanilainen Allekirjoituksen Salaisuus',
        'Salainen'
    ],
    '🈺': [
        'Neljäs CJK Unified Ideograph-55b6',
        'Japanilainen viittomamerkintä Open for Business',
        'Työ',
        '営'
    ],
    '🈵': [
        'Yhtenäinen CJK Unified Ideograph-6e80',
        'Japanilainen Merkitys Täysi; Ei Vacancy',
        'Täysi',
        '満'
    ],
    '🔘': ['Radion Painike'],
    '🛑': [
        'Pysäytä Allekirjoitus',
        'Oktatiivinen Kyltti'
    ],
    '⚕️': [
        'Lääketieteellinen Symboli',
        'Aesculapius',
        'Asklepios',
        'Asclepius-suvun sauva',
        'Aesculapiuksen henkilöstö'
    ],
    '🛗': [
        'Hissi',
        'Hissi'
    ],
    '⚧️': ['Transsukupuolinen Symboli'],
    '♂️': [
        'Miehen Allekirjoitus',
        'Man Symboli',
        'Mars Symboli'
    ],
    '♀️': [
        'Naisen Allekirjoitus',
        'Nainen Symboli',
        'Venus Symbol'
    ]
};
/*food and drinks*/
emojis_language[lang][6] = {
    '🍇': [
        'Rypäleet',
        'Viinirypäleet'
    ],
    '🍈': [
        'Meloni',
        'Cantaloupe',
        'Honeydew',
        'Muskmeloni'
    ],
    '🍉': ['Vesimeloni'],
    '🍊': [
        'Tangerine',
        'Mandarin',
        'Oranssi'
    ],
    '🍋': [
        'Sitruuna',
        'Sitruunahappo'
    ],
    '🍌': [
        'Banaani',
        'Plantain'
    ],
    '🍍': ['Ananas'],
    '🥭': ['Mango'],
    '🍎': [
        'Punainen Apple',
        'Red Herkullinen Omena'
    ],
    '🍏': [
        'Vihreä Osa',
        'Golden Delicious Omena',
        'Granny Smith Apple'
    ],
    '🍐': ['Päärynät'],
    '🍑': [
        'Persikka',
        'Alhaalla',
        'Butt'
    ],
    '🍒': [
        'Kirsikat',
        'Kirsikka',
        'Luonnonvaraiset Kirsikat'
    ],
    '🍓': ['Mansikka'],
    '🥝': [
        'Kiivihedelmät',
        'Kiinalainen Karviainen',
        'Kiivihedelmät',
        'Kiivit'
    ],
    '🍅': ['Tomaatti'],
    '🥥': [
        'Kookospähkinä',
        'Cocoanut'
    ],
    '🥑': ['Avokado'],
    '🍆': [
        'Munakoiso',
        'Aubergine',
        'Phallinen',
        'Violetti Kasvikset'
    ],
    '🥔': [
        'Peruna',
        'Kypsän Peruna',
        'Idahon Peruna'
    ],
    '🥕': ['Porkkana'],
    '🌽': [
        'Maissin korva',
        'Maissi',
        'Maissi Cob',
        'Maissi',
        'Maissin korva'
    ],
    '🌶️': [
        'Kuuma Pippuri',
        'Chilipippuri',
        'Mausteena'
    ],
    '🥒': [
        'Kurkku',
        'Pikkukurkku',
        'Papeli'
    ],
    '🥬': [
        'Lehtivihreä',
        'Bok Choy',
        'Kiinalainen Kaali',
        'Cos Lettuce',
        'Romaine Lettuce',
        'Lehtivihreät'
    ],
    '🥦': ['Parsakaalit'],
    '🍄': [
        'Sieni',
        'Paikka',
        'Toadstool'
    ],
    '🥜': [
        'Peanuts',
        'Pähkinät'
    ],
    '🌰': [
        'Kastanja',
        'Acorn',
        'Nut'
    ],
    '🍞': [
        'Leipä',
        'Leipäkuori (leivät)'
    ],
    '🥐': ['Croissant'],
    '🥖': [
        'Baguette Leipä',
        'Ranskalainen Leipä',
        'Baguette'
    ],
    '🥨': ['Pretzel'],
    '🥯': ['Bagel'],
    '🥞': [
        'Pannukakut',
        'Kreeta',
        'Pikkukakut'
    ],
    '🧀': [
        'Juuston Häät',
        'Muikku'
    ],
    '🍖': [
        'Luun liha',
        'BBQ',
        'Grilli',
        'Mangan Liha'
    ],
    '🍗': [
        'Poultry Leg',
        'Drumstick',
        'Turkin Jalka'
    ],
    '🥩': [
        'Lihan leikkaus',
        'Liha',
        'Pihvi'
    ],
    '🥓': [
        'Pekoni',
        'Rashers'
    ],
    '🍔': [
        'Hampurilainen',
        'Burger',
        'Juustojäte'
    ],
    '🍟': [
        'Ranskalainen Fries',
        'Sirut',
        'Omenat',
        'McDonald\'s Fries'
    ],
    '🍕': [
        'Pizza',
        'Pepperoni Pizza',
        'Pizzan viipale'
    ],
    '🌭': [
        'Kuuma Koira',
        'Potkoira',
        'Makkara'
    ],
    '🥪': ['Sandwich'],
    '🌮': ['Taco'],
    '🌯': [
        'Burrito',
        'Rivitys'
    ],
    '🥙': [
        'Täytetty Taskukakku',
        'Doner Kebab',
        'Gyro',
        'Shawarma',
        'Pita Sandwich'
    ],
    '🍳': [
        'Ruoanlaitto',
        'Aamiainen',
        'Paistettu Muna',
        'Panimo Pan'
    ],
    '🥘': [
        'Matala Pan of Food',
        'Paella',
        'Ruoan pauna'
    ],
    '🍲': [
        'Ruuan laatikko',
        'Kulho Ruoka',
        'Keitto',
        'Varsi'
    ],
    '🥣': [
        'Kulho ja lusikka',
        'Viljakulho'
    ],
    '🥗': [
        'Vihreä Salaatti',
        'Salaatti'
    ],
    '🍿': [
        'Popcorn',
        'Popping Maissi'
    ],
    '🧂': [
        'Suola',
        'Suola Shaker'
    ],
    '🥫': [
        'Säilötty Ruoka',
        'Voi ruokaa',
        'Tin Voi',
        'Säilötyt Ruoat'
    ],
    '🍱': [
        'Bento Box',
        'Lounas Laatikko'
    ],
    '🍘': [
        'Riisin Haltija',
        'Haltija'
    ],
    '🍙': [
        'Riisin Pallo',
        'Onigiri'
    ],
    '🍚': [
        'Kypsennetty Riisi',
        'Keitetty Riisi',
        'Riisi',
        'Riisin Kulho',
        'Höyrytetty Riisi'
    ],
    '🍛': [
        'Curry Riisi',
        'Curry',
        'Intialainen Ruoka',
        'Curry ja riisi'
    ],
    '🍜': [
        'Höyryttävä Kulho',
        'Nuudelit',
        'Nuudelit Pikkutikkuilla',
        'Ramen'
    ],
    '🍝': [
        'Spaghetti',
        'Pasta'
    ],
    '🍠': [
        'Paahdettu Makea Peruna',
        'Herkullinen Peruna',
        'Jamssit'
    ],
    '🍢': [
        'Oden',
        'Kebab',
        'Skewer'
    ],
    '🍣': [
        'Sushi',
        'Sashimi',
        'Merenkulku'
    ],
    '🍤': [
        'Paistettu Katkarapu',
        'Paistettu Katkarapu',
        'Katkarapu Tempura'
    ],
    '🍥': [
        'Kalakakku ja pyörre',
        'Fishcake',
        'Pink Swirl'
    ],
    '🥮': [
        'Kuun Kakku',
        'Kuun Kakku'
    ],
    '🍡': [
        'Dango',
        'Jälkiruoka Kiinni',
        'Vaaleanpunainen Valkoinen Pallot'
    ],
    '🥟': [
        'Dumpling',
        'Empanada',
        'Pierogi'
    ],
    '🥠': ['Fortune Cookie'],
    '🥡': [
        'Yritysosto Laatikko',
        'Kiinalainen Elintarvikelaatikko',
        'Oyster Pail'
    ],
    '🍦': [
        'Pehmeä Jäätelö',
        'Whippy',
        'Pehmeä Palvelin'
    ],
    '🍧': [
        'Ravistettu Jää',
        'Lumi Cone'
    ],
    '🍨': [
        'Jäätelö',
        'Kulho Jäätelöä',
        'Jälkiruoka'
    ],
    '🍩': [
        'Doughnut',
        'Donut'
    ],
    '🍪': [
        'Eväste',
        'Keksit',
        'Suklaa Chip Eväste'
    ],
    '🎂': [
        'Syntymäpäivä Kakku',
        'Syntymäpäivä',
        'Kakku',
        'Kakku Kynttilällä'
    ],
    '🍰': [
        'Pikanäppäin',
        'Kakku',
        'Kakku Kappale',
        'Mansikan Shortcake'
    ],
    '🧁': [
        'Cupcake',
        'Fairy Kakku'
    ],
    '🥧': ['Pieni'],
    '🍫': [
        'Suklaa Pylväs',
        'Karkkipalkki',
        'Suklaa'
    ],
    '🍬': [
        'Karkki',
        'Lolly',
        'Suloinen'
    ],
    '🍭': [
        'Lollipop',
        'Ikäri'
    ],
    '🍮': [
        'Custard',
        'Creme Caramel',
        'Jälkiruoka',
        'Flantti',
        'Pudding'
    ],
    '🍯': [
        'Hunaja-ruoka',
        'Hunaja',
        'Potti'
    ],
    '🍼': [
        'Vauvan Pullo',
        'Pullon Ruokinta'
    ],
    '🥛': [
        'Maidon lasia',
        'Maito'
    ],
    '☕': [
        'Kuuma Juoma',
        'Kahvi',
        'Espresso',
        'Kuuma Suklaa',
        'Tee'
    ],
    '🍵': [
        'Opettaja Ilman Kahvaa',
        'Vihreä Tee',
        'Matcha',
        'Vihreä Matcha Tea'
    ],
    '🍶': [
        'Sake',
        'Pullo',
        'Riisi Viini',
        'Sake Bottle ja Cup'
    ],
    '🍾': [
        'Pullo Popping Corkin kanssa',
        'Juhla',
        'Champagne',
        'Kuohuviini'
    ],
    '🍷': [
        'Viini Lasi',
        'Alkoholi',
        'Punaviini',
        'Viini'
    ],
    '🍸': [
        'Cocktail Lasi',
        'Cocktail',
        'Martini'
    ],
    '🍹': [
        'Trooppinen Juoma',
        'HedelmÃ¤n Punkki',
        'Tiki-juoma'
    ],
    '🍺': [
        'Oluen Muki',
        'Olut',
        'Olut Stein'
    ],
    '🍻': [
        'Clinking Olut Mukit',
        'Oluet',
        'Huijaukset'
    ],
    '🥂': [
        'Ohjattavat Lasit',
        'Juhla',
        'Samppanjan Lasit',
        'Huijaukset'
    ],
    '🥃': [
        'Tuuletin Lasi',
        'Bourbon',
        'Liquor',
        'Rum',
        'Whiskey',
        'Whisky'
    ],
    '🥤': [
        'Cupin kanssa olki',
        'Milkshake',
        'Smoothie',
        'Sooda Pop',
        'Pehmeä Juo'
    ],
    '🥢': ['Pikkutikkuja'],
    '🍽️': [
        'Haarukka ja veitsi levyllä',
        'Illallinen'
    ],
    '🍴': [
        'Haarukka ja veitsi',
        'Aterimet',
        'Veitsi Ja haarukka',
        'Hopeaohjelmisto'
    ],
    '🥄': ['Lusikka'],
    '🧄': ['Valkosipuli'],
    '🧅': ['Kepasipuli'],
    '🧇': ['Waffle'],
    '🧆': ['Falafel'],
    '🧈': ['Voi'],
    '🦪': ['Oyster'],
    '🧃': [
        'Juoma Laatikko',
        'Mehiläislaatikko'
    ],
    '🧉': [
        'Mate Juo',
        'Krimin niemimaa',
        'Cimarrón',
        'Yerba Mate'
    ],
    '🫒': ['Oliivit'],
    '🫐': ['Pensasmustikat'],
    '🫑': ['Äänimerkki Pepperi'],
    '🫓': ['Taskuleipä'],
    '🫔': [
        'Tamali',
        'Tamaali'
    ],
    '🫕': ['Fondue'],
    '🧋': [
        'Kupla Tea',
        'Boba'
    ],
    '🧊': ['Ice Cube']
};
/*flags*/
emojis_language[lang][7] = {
    '🏁': [
        'Huijatut Liput',
        'Checkered Flag',
        'Ruudukko Tyttö',
        'Kilpailun Lippu'
    ],
    '🚩': [
        'Kolmikulmainen Lippu',
        'Liputa kyynärpää',
        'Punainen Lippu',
        'Kolmikulmainen lippu postitse'
    ],
    '🎌': [
        'Risteytetyt Liput',
        'Kaksi Lippua'
    ],
    '🏴': [
        'Musta Lippu',
        'Aaltoileva Musta Lippu'
    ],
    '🏳️': [
        'Valkoinen Lippu',
        'Aaltoileva Valkoinen Lippu'
    ],
    '🏳️‍🌈': [
        'Sateenkaaren Lippu',
        'Pride Flag'
    ],
    '🏳️‍⚧️': [
        'Transsukupuolinen Lippu',
        'Sininen, vaaleanpunainen, valkoinen lippu',
        'Trans Lippu'
    ],
    '🏴‍☠️': [
        'Merirosvo Lippu',
        'Jolly Roger'
    ],
    '🇺🇳': [
        'Yhdistyneiden Kansakuntien lippu',
        'YK',
        'Lippu: Yhdistyneet Kansakunnat'
    ],
    '🇪🇺': [
        'Euroopan unionin lippu',
        'EU',
        'Lippu: Euroopan Unioni',
        'EU Flag'
    ],
    '🇦🇨': [
        'Ascension Islandin lippu',
        'AC'
    ],
    '🇦🇩': [
        'Andorran lippu',
        'AD',
        'Andorran Flag'
    ],
    '🇦🇪': [
        'Arabiemiirikuntien lippu',
        'AE',
        'Emirati Flag',
        'Arabiemiirikuntien Lippu'
    ],
    '🇦🇫': [
        'Afganistanin lippu',
        'AF',
        'Afghan Flag'
    ],
    '🇦🇬': [
        'Antigua & Barbudan lippu',
        'AG'
    ],
    '🇦🇮': [
        'Anguillan lippu',
        'AI',
        'Anguillan Lippu'
    ],
    '🇦🇱': [
        'Albanian lippu',
        'ALV',
        'Albanian Lippu'
    ],
    '🇦🇲': [
        'Armenian lippu',
        'AM',
        '🇦🇲'
    ],
    '🇦🇴': [
        'Angolan lippu',
        'AO',
        'Angolan Lippu'
    ],
    '🇦🇶': [
        'Antarktiksen lippu',
        'AQ',
        'Antarktiksen Lippu'
    ],
    '🇦🇷': [
        'Argentiinan lippu',
        'AR',
        'Argentiinan Lippu'
    ],
    '🇦🇸': [
        'Amerikan Samoan lippu',
        'AS',
        'American Samoan Flag'
    ],
    '🇦🇹': [
        'Itävallan lippu',
        'AT',
        'Austrian Flag'
    ],
    '🇦🇺': [
        'Australian lippu',
        'AU',
        'Aussie Lippu',
        'Australian Lippu'
    ],
    '🇦🇼': [
        'Aruban lippu',
        'AW',
        'Aruban Lippu'
    ],
    '🇦🇽': [
        'AŽanninsaarten lippu',
        'AX',
        'Maan Lippu'
    ],
    '🇦🇿': [
        'Azerbaidžanin lippu',
        'AZ',
        'Azerbaidžanin Lippu'
    ],
    '🇧🇦': [
        'Bosnia ja Hertsegovinan lippu',
        'BA'
    ],
    '🇧🇧': [
        'Barbadosin lippu',
        'Bt',
        'Barbadianin Lippu',
        'Bajan Lippu'
    ],
    '🇧🇩': [
        'Bangladeshin lippu',
        'BD',
        'Bangladeshi Flag'
    ],
    '🇧🇪': [
        'Belgian lippu',
        'BE',
        'Belgian Lippu'
    ],
    '🇧🇫': [
        'Burkina Fason lippu',
        'BF',
        'Burkinaben Lippu'
    ],
    '🇧🇬': [
        'Bulgarian lippu',
        'VS',
        'Bulgarian Lippu'
    ],
    '🇧🇭': [
        'Bahrainin lippu',
        'BH',
        'Bahraanin Lippu',
        'Bahrainin Lippu'
    ],
    '🇧🇮': [
        'Burundin lippu',
        'BI',
        'Burundian Flag'
    ],
    '🇧🇯': [
        'Beninin lippu',
        'BJ',
        'Beninin Lippu'
    ],
    '🇧🇱': [
        'Saint Barthe- lemaatin lippu',
        'BL',
        'Lippu: St. Barthež lemy'
    ],
    '🇧🇲': [
        'Bermudan lippu',
        'BM',
        'Bermudan Flag'
    ],
    '🇧🇳': [
        'Brunein lippu',
        'BN',
        'Brunein Lippu'
    ],
    '🇧🇴': [
        'Bolivian lippu',
        'BO',
        'Bolivian Flag'
    ],
    '🇧🇶': [
        'Alankomaiden Karibian lippu',
        'BQ',
        'Bonaire'
    ],
    '🇧🇷': [
        'Brasilian lippu',
        'BR',
        'Brasilian Lippu'
    ],
    '🇧🇸': [
        'Bahaman lippu',
        'Bahaman Lippu',
        'BS'
    ],
    '🇧🇹': [
        'Bhutanin lippu',
        'BT',
        'Bhutanilainen Lippu'
    ],
    '🇧🇻': [
        'Bouvet Islandin lippu',
        'BV',
        'Lippu: Bouvet Island'
    ],
    '🇧🇼': [
        'Botswanan lippu',
        'BW',
        'Batswana Flag'
    ],
    '🇧🇾': [
        'Valko-Venäjän lippu',
        'BY',
        'Valkovenäjän Lippu'
    ],
    '🇧🇿': [
        'Belizen lippu',
        'BZ',
        'Belizean Flag'
    ],
    '🇨🇦': [
        'Kanadan lippu',
        'Kanadan Lippu',
        'CA'
    ],
    '🇨🇨': [
        'Cocoksen (Keeling) saarten lippu',
        'CC'
    ],
    '🇨🇩': [
        'Flag of Congo - Kinshasa',
        'CD'
    ],
    '🇨🇫': [
        'Keski-Afrikan tasavallan lippu',
        'CF',
        'Keski-Afrikan Lippu'
    ],
    '🇨🇬': [
        'Kongon lippu - Brazzaville',
        'CG'
    ],
    '🇨🇭': [
        'Sveitsin lippu',
        'CH',
        'Punainen Risti',
        'Sveitsin Lippu'
    ],
    '🇨🇮': [
        'Norsunluurannikon lippu',
        'CI',
        'Flag: Côte d’Ivoire'
    ],
    '🇨🇰': [
        'Cookinsaarten lippu',
        'CK',
        'Cook Islanderin Lippu'
    ],
    '🇨🇱': [
        'Chilen lippu',
        'CL',
        'Chilen Lippu'
    ],
    '🇨🇲': [
        'Kamerunin lippu',
        'CM',
        'Kamerunin Lippu'
    ],
    '🇨🇳': [
        'Kiinan lippu',
        'YK',
        'Kiinan Lippu'
    ],
    '🇨🇴': [
        'Kolumbian lippu',
        'CO',
        'Kolumbian Lippu'
    ],
    '🇨🇵': [
        'Clipperton Islandin lippu',
        'CP',
        'Lippu: Clipperton Island'
    ],
    '🇨🇷': [
        'Costa Rican lippu',
        'CR',
        'Costa Rican Lippu'
    ],
    '🇨🇺': [
        'Kuuban lippu',
        'CU',
        'Kuuban Lippu'
    ],
    '🇨🇻': [
        'Kap Verden lippu',
        'CV',
        'Kap Verdian Lippu'
    ],
    '🇨🇼': [
        'Curac- aon lippu',
        'CW',
        'Curaçaoan Flag'
    ],
    '🇨🇽': [
        'Joulusaaren lippu',
        'CX',
        'Joulusaaren Lippu'
    ],
    '🇨🇾': [
        'Kyproksen lippu',
        'CY',
        'Kyproksen Lippu'
    ],
    '🇨🇿': [
        'Tšekin lippu',
        'CZ',
        'Tšekin Lippu'
    ],
    '🇩🇪': [
        'Saksan lippu',
        'DE',
        'Deutsch Flag',
        'Saksan Lippu'
    ],
    '🇩🇬': [
        'Diego Garcian lippu',
        'DG',
        'Lippu: Diego Garcia'
    ],
    '🇩🇯': [
        'Djiboutin lippu',
        'DJ',
        'Djibouti Flag',
        'Djiboutian Flag'
    ],
    '🇩🇰': [
        'Tanskan lippu',
        'DK',
        'Tanskan Lippu'
    ],
    '🇩🇲': [
        'Dominican lippu',
        'DM'
    ],
    '🇩🇴': [
        'Dominikaanisen tasavallan lippu',
        'DO',
        'Dom Rep -lippu',
        'Dominikaaninen Lippu'
    ],
    '🇩🇿': [
        'Algerian lippu',
        'DZ',
        'Algerian Flag'
    ],
    '🇪🇦': [
        'Ceutan ja Melillan lippu',
        'Melillan lippu',
        'Ceutan lippu',
        'EA',
        'Flag: Ceuta & Melilla'
    ],
    '🇪🇨': [
        'Ecuadorin lippu',
        'EC',
        'Ecuadorian Flag'
    ],
    '🇪🇪': [
        'Viron lippu',
        'EE',
        'Viron Lippu'
    ],
    '🇪🇬': [
        'Egyptin lippu',
        'EG',
        'Egyptin Lippu'
    ],
    '🇪🇭': [
        'Länsi-Saharan lippu',
        'EH',
        'Länsi-Saharan Lippu'
    ],
    '🇪🇷': [
        'Eritrean lippu',
        'ER',
        'Eritrean Flag'
    ],
    '🇪🇹': [
        'Etiopian lippu',
        'ET',
        'Ethiopian Flag'
    ],
    '🇪🇸': [
        'Espanjan lippu',
        'ES',
        'Espanjan Lippu'
    ],
    '🇫🇮': [
        'Suomen lippu',
        'FI',
        'Suomen Lippu'
    ],
    '🇫🇯': [
        'Fidžin lippu',
        'FJ',
        'Fijian Flag'
    ],
    '🇫🇰': [
        'Falklandin saarten lippu',
        'FK',
        'Falklanderin Lippu'
    ],
    '🇫🇲': [
        'Mikronesian lippu',
        'FM',
        'Mikronesian Lippu'
    ],
    '🇫🇴': [
        'Färsaarten lippu',
        'FO',
        'Faroe Islander Flag'
    ],
    '🇫🇷': [
        'Ranskan lippu',
        'FR',
        'Ranskan Lippu'
    ],
    '🇬🇦': [
        'Gabonin lippu',
        'GA',
        'Gabonin Lippu'
    ],
    '🇬🇧': [
        'Ison-Britannian lippu',
        'Gt',
        'Britannian Lippu',
        'Yhdistynyt Kuningaskunta',
        'Union Jack',
        'Iso-Britannia'
    ],
    //"🏴󠁧󠁢󠁥󠁮󠁧󠁿": ["Flag of England", "St George's Cross", "English Flag"],
    //"🏴󠁧󠁢󠁷󠁬󠁳󠁿": ["Flag of Wales", "Welsh Flag", "Red Dragon", "Baner Cymru", "Y Ddraig Goch"],
    //"🏴󠁧󠁢󠁳󠁣󠁴󠁿": ["Flag of Scotland", "Scottish Flag", "St Andrew's Cross", "Saltire"],
    //"🏴󠁧󠁢󠁮󠁩󠁲󠁿": ["Flag of Northern Ireland"],
    '🇬🇩': [
        'Grenadan lippu',
        'GD',
        'Grenadian Lippu'
    ],
    '🇬🇪': [
        'Georgian lippu',
        'GE',
        'Georgian Lippu'
    ],
    '🇬🇫': [
        'Ranskan Guyanan lippu',
        'GF',
        'Ranskan Guinean Lippu'
    ],
    '🇬🇬': [
        'Guernseyn lippu',
        'GG',
        'Guernsey Flag'
    ],
    '🇬🇭': [
        'Ghanan lippu',
        'GH',
        'Ghanan Lippu'
    ],
    '🇬🇮': [
        'Gibraltarin lippu',
        'GI',
        'Gibraltarin Lippu'
    ],
    '🇬🇱': [
        'Grönlannin lippu',
        'GL',
        'Greenlandic Flag'
    ],
    '🇬🇲': [
        'Gambian lippu',
        'GM',
        'Gambian Flag'
    ],
    '🇬🇳': [
        'Guinean lippu',
        'GN',
        'Guinean Flag'
    ],
    '🇬🇵': [
        'Guadeloupen lippu',
        'GP',
        'Guadeloupean Lippu'
    ],
    '🇬🇶': [
        'Päiväntasaajan Guinean lippu',
        'GQ',
        'Equatorial Guinean Flag',
        'Equatoguinean Lippu'
    ],
    '🇬🇷': [
        'Kreikan lippu',
        'GR',
        'Kreikan Lippu'
    ],
    '🇬🇸': [
        'Etelä-Georgian ja eteläisten Sandwichsaarten lippu',
        'GS'
    ],
    '🇬🇹': [
        'Guatemalan lippu',
        'GT',
        'Guatemalan Flag'
    ],
    '🇬🇺': [
        'Guamin lippu',
        'GU',
        'Guayanan Lippu',
        'Chamorron Lippu'
    ],
    '🇬🇼': [
        'Guinea-Bissaun lippu',
        'GW',
        'Guinea-Bissau Flag'
    ],
    '🇬🇾': [
        'Guyanan lippu',
        'GY',
        'Guyanan Lippu'
    ],
    '🇭🇰': [
        'Hongkongin erityishallintoalueen Kiinan lippu',
        'HK',
        'Hongkongin Lippu'
    ],
    '🇭🇲': [
        'Heard & McDonald saarten lippu',
        'HM',
        'Lippu: Heard & McDonald Saaret'
    ],
    '🇭🇳': [
        'Hondurasin lippu',
        'HN',
        'Hondurasin Lippu'
    ],
    '🇭🇷': [
        'Kroatian lippu',
        'HR',
        'Kroatian Lippu'
    ],
    '🇭🇹': [
        'Haitin lippu',
        'HT',
        'Haitian Flag'
    ],
    '🇭🇺': [
        'Unkarin lippu',
        'HU',
        'Unkarin Lippu'
    ],
    '🇮🇨': [
        'Kanariansaarten lippu',
        'IC'
    ],
    '🇮🇩': [
        'Indonesian lippu',
        'ID',
        'Indonesian Lippu'
    ],
    '🇮🇪': [
        'Irlannin lippu',
        'IE',
        'Irlannin Lippu'
    ],
    '🇮🇱': [
        'Israelin lippu',
        'IL',
        'Israelin Lippu'
    ],
    '🇮🇲': [
        'Mansaaren lippu',
        'IM',
        'Manx Flag'
    ],
    '🇮🇳': [
        'Intian lippu',
        'SISÄLLÄ',
        'Intian Lippu'
    ],
    '🇮🇴': [
        'Brittiläisen Intian valtameren alueen lippu',
        'IO',
        'Brittiläinen Intian Valtameren Alueen Lippu'
    ],
    '🇮🇶': [
        'Irakin lippu',
        'IQ',
        'Iraqi Flag'
    ],
    '🇮🇷': [
        'Iranin lippu',
        'IR',
        'Iranin Lippu'
    ],
    '🇮🇸': [
        'Islannin lippu',
        'IS',
        'Islannin Lippu'
    ],
    '🇮🇹': [
        'Italian lippu',
        'IT',
        'Italian Lippu'
    ],
    '🇯🇪': [
        'Jerseyn lippu',
        'JE',
        'Jerseyn Lippu'
    ],
    '🇯🇲': [
        'Jamaikan lippu',
        'JM',
        'Jamaikan Lippu'
    ],
    '🇯🇴': [
        'Jordanian lippu',
        'JO',
        'Jordanian Lippu'
    ],
    '🇯🇵': [
        'Japanin lippu',
        'JP',
        'Japanin Lippu'
    ],
    '🇰🇪': [
        'Kenian lippu',
        'KE',
        'Kenian Lippu'
    ],
    '🇰🇬': [
        'Kirgisian lippu',
        'KG',
        'Kyrgyzstani Flag'
    ],
    '🇰🇭': [
        'Kambodžan lippu',
        'KH',
        'Kambodžan Lippu'
    ],
    '🇰🇮': [
        'Kiribatin lippu',
        'KI',
        'I-Kiribatin Lippu'
    ],
    '🇰🇲': [
        'Komorien lippu',
        'KM',
        'Komorien Lippu'
    ],
    '🇰🇳': [
        'Saint Kitts & Nevisin lippu',
        'KN'
    ],
    '🇰🇵': [
        'Pohjois-Korean lippu',
        'KP',
        'Pohjois-Korean Lippu'
    ],
    '🇰🇷': [
        'Etelä-Korean lippu',
        'KR',
        'Etelä-Korean Lippu'
    ],
    '🇰🇼': [
        'Kuwaitin lippu',
        'KW',
        'Kuwaiti Flag'
    ],
    '🇰🇾': [
        'Caymansaarten lippu',
        'KY',
        'Caymanian Lippu'
    ],
    '🇰🇿': [
        'Kazakstanin lippu',
        'KZ',
        'Kazakhstani Flag',
        'Kazakh Flag'
    ],
    '🇱🇦': [
        'Laosin lippu',
        'LA',
        'Laotian Lippu',
        'Lao Lippu'
    ],
    '🇱🇧': [
        'Libanonin lippu',
        'Lt',
        'Libanonin Lippu'
    ],
    '🇱🇨': [
        'Saint Lucian lippu',
        'LC'
    ],
    '🇱🇮': [
        'Liechtensteinin lippu',
        'LI',
        'Liechtensteinin Lippu'
    ],
    '🇱🇰': [
        'Sri Lankan lippu',
        'LK',
        'Sri Lankan Lippu'
    ],
    '🇱🇷': [
        'Liberian lippu',
        'LR',
        'Liberian Lippu'
    ],
    '🇱🇸': [
        'Flag of Lesotho',
        'LS',
        'Basotho Flag'
    ],
    '🇱🇹': [
        'Liettuan lippu',
        'LT',
        'Liettuan Lippu'
    ],
    '🇱🇺': [
        'Luxemburgin lippu',
        'LU',
        'Luxemburgin Lippu'
    ],
    '🇱🇻': [
        'Latvian lippu',
        'LV',
        'Latvian Lippu'
    ],
    '🇱🇾': [
        'Libyan lippu',
        'LY',
        'Libyan Lippu'
    ],
    '🇲🇦': [
        'Marokon lippu',
        'MA',
        'Marokon Lippu'
    ],
    '🇲🇨': [
        'Monacon lippu',
        'MC',
        'Rahan arvon gaskin lippu'
    ],
    '🇲🇩': [
        'Moldovan lippu',
        'MD',
        'Moldovan Lippu'
    ],
    '🇲🇪': [
        'Montenegron lippu',
        'MINÄ',
        'Montenegron Lippu'
    ],
    '🇲🇫': [
        'Saint Martinin lippu',
        'MF',
        'Flag: St. Martin'
    ],
    '🇲🇬': [
        'Madagaskarin lippu',
        'MG',
        'Madagascan Flag'
    ],
    '🇲🇭': [
        'Marshallinsaarten lippu',
        'MH',
        'Marshallin Lippu'
    ],
    '🇲🇰': [
        'Makedonian lippu',
        'MK',
        'Makedonian Lippu'
    ],
    '🇲🇱': [
        'Malin lippu',
        'ML',
        'Malin Lippu'
    ],
    '🇲🇲': [
        'Myanmarin lippu (Burma)',
        'MM',
        'Myanmarin Lippu',
        'Lippu Burmaan',
        'Burman Lippu'
    ],
    '🇲🇳': [
        'Mongolian lippu',
        'MN',
        'Mongolian Lippu'
    ],
    '🇲🇴': [
        'Macau Sar Kiinan lippu',
        'Mi',
        'Macaon Lippu'
    ],
    '🇲🇵': [
        'Pohjoisen Marianan lippu',
        'MP',
        'Mikronesian Lippu'
    ],
    '🇲🇶': [
        'Martiniquen lippu',
        'MQ',
        'Martiniquen käärmelippu',
        'Martiniquais Lippu'
    ],
    '🇲🇷': [
        'Mauritanian lippu',
        'MR',
        'Mauritanian Lippu'
    ],
    '🇲🇸': [
        'Flag of Montserrat',
        'Jäsenvaltio',
        'Montserratian Flag'
    ],
    '🇲🇹': [
        'Maltan lippu',
        'MT',
        'Maltese Flag'
    ],
    '🇲🇺': [
        'Flag of Mauritius',
        'MU',
        'Mauritian Lippu'
    ],
    '🇲🇻': [
        'Malediivien lippu',
        'MV',
        'Malediivien Lippu'
    ],
    '🇲🇼': [
        'Malawin lippu',
        'MW',
        'Malawian Flag'
    ],
    '🇲🇽': [
        'Meksikon lippu',
        'MX',
        'Meksikon Lippu'
    ],
    '🇲🇾': [
        'Malesian lippu',
        'MINUN',
        'Malaysian Flag'
    ],
    '🇲🇿': [
        'Mosambikin lippu',
        'MZ',
        'Mosambikin Lippu'
    ],
    '🇳🇦': [
        'Namibian lippu',
        'NA',
        'Namibian Flag'
    ],
    '🇳🇨': [
        'Uuden-Kaledonian lippu',
        'NC',
        'Uusi Kaledonin Lippu'
    ],
    '🇳🇪': [
        'Nigerin lippu',
        'NE',
        'Nigerin Lippu'
    ],
    '🇳🇫': [
        'Norfolk Islandin lippu',
        'NF',
        'Norfolkin Saaren Lippu'
    ],
    '🇳🇬': [
        'Nigerian lippu',
        'NG',
        'Nigerian Lippu'
    ],
    '🇳🇮': [
        'Flag of Nicaragua',
        'NI',
        'Nicaraguan Flag'
    ],
    '🇳🇱': [
        'Alankomaiden lippu',
        'NL',
        'Alankomaiden Lippu'
    ],
    '🇳🇴': [
        'Norjan lippu',
        'EI',
        'Norjan Lippu'
    ],
    '🇳🇵': [
        'Nepalin lippu',
        'NP',
        'Nepalin Lippu'
    ],
    '🇳🇷': [
        'Naurun lippu',
        'NR',
        'Nauruan Flag'
    ],
    '🇳🇺': [
        'Niuen lippu',
        'NU',
        'Niuean Flag'
    ],
    '🇳🇿': [
        'Uuden-Seelannin lippu',
        'NZ',
        'Kiivi-lippu'
    ],
    '🇴🇲': [
        'Omanin lippu',
        'OM',
        'Omanin Lippu'
    ],
    '🇵🇦': [
        'Panaman lippu',
        'PA',
        'Panaman Lippu'
    ],
    '🇵🇪': [
        'Perun lippu',
        'PE',
        'Perun Lippu'
    ],
    '🇵🇫': [
        'Ranskan Polynesian lippu',
        'PF',
        'Ranskan Polynesian Lippu'
    ],
    '🇵🇬': [
        'Papua-Uuden-Guinean lippu',
        'PG',
        'Png Lippu',
        'Papua New Guinean Flag'
    ],
    '🇵🇭': [
        'Filippiinien lippu',
        'PH'
    ],
    '🇵🇰': [
        'Pakistanin lippu',
        'PK',
        'Pakistanin Lippu'
    ],
    '🇵🇱': [
        'Puolan lippu',
        'PL',
        'Puolan Lippu'
    ],
    '🇵🇲': [
        'Saint Pierre ja Miquelonin lippu',
        'PM'
    ],
    '🇵🇳': [
        'Pitcairnin lippu',
        'PN'
    ],
    '🇵🇷': [
        'Puerto Ricon lippu',
        'PR',
        'Puerto Rican Lippu'
    ],
    '🇵🇸': [
        'Palestiinalaisalueiden lippu',
        'PP',
        'Palestine'
    ],
    '🇵🇹': [
        'Portugalin lippu',
        'PT',
        'Portugalin Lippu'
    ],
    '🇵🇼': [
        'Palaun lippu',
        'PW',
        'Palauan Lippu'
    ],
    '🇵🇾': [
        'Paraguayn lippu',
        'PY',
        'Paraguayan Flag'
    ],
    '🇶🇦': [
        'Qatarin lippu',
        'QA',
        'Qatarin Lippu'
    ],
    '🇷🇪': [
        'Unionin lippu',
        'RE',
        'Unionnais lippu'
    ],
    '🇷🇴': [
        'Romanian lippu',
        'RO',
        'Romanian Lippu'
    ],
    '🇷🇸': [
        'Serbian lippu',
        'RS',
        'Serbian Lippu'
    ],
    '🇷🇺': [
        'Venäjän lippu',
        'RU',
        'Venäjän Lippu'
    ],
    '🇷🇼': [
        'Flag of Rwanda',
        'RW',
        'Rwandan Flag'
    ],
    '🇸🇦': [
        'Saudi-Arabian lippu',
        'SA',
        'Saudi-Arabian Lippu'
    ],
    '🇸🇧': [
        'Salomonsaarten lippu',
        'SB',
        'Salomonsaaren Lippu'
    ],
    '🇸🇨': [
        'Seychellien lippu',
        'SC',
        'Seychellois Flag'
    ],
    '🇸🇩': [
        'Sudanin lippu',
        'SD',
        'Sudanese Flag'
    ],
    '🇸🇪': [
        'Ruotsin lippu',
        'Kaakko',
        'Ruotsin Lippu'
    ],
    '🇸🇬': [
        'Singaporen lippu',
        'SG',
        'Singaporen Lippu'
    ],
    '🇸🇭': [
        'Saint Helenan lippu',
        'SH'
    ],
    '🇸🇮': [
        'Slovenian lippu',
        'SI',
        'Slovenian Lippu'
    ],
    '🇸🇯': [
        'Huippuvuorten ja Jan Mayenin lippu',
        'SJ'
    ],
    '🇸🇰': [
        'Slovakian lippu',
        'SK',
        'Slovakian Lippu',
        'Slovakian Flag'
    ],
    '🇸🇱': [
        'Sierra Leonen lippu',
        'SL',
        'Sierra Leonean Flag'
    ],
    '🇸🇲': [
        'San Marinon lippu',
        'SM',
        'Sammariinin Lippu'
    ],
    '🇸🇳': [
        'Senegalin lippu',
        'SN',
        'Sengalin Lippu'
    ],
    '🇸🇴': [
        'Somalian lippu',
        'SO',
        'Somalian Flag'
    ],
    '🇸🇷': [
        'Surinamin lippu',
        'SR',
        'Surinameerin Lippu'
    ],
    '🇸🇸': [
        'Etelä-Sudanin lippu',
        'SS',
        'Etelä-Sudanin Lippu'
    ],
    '🇸🇹': [
        'Lippu on SaŽo Tome- & PriŽncipe',
        'ST'
    ],
    '🇸🇻': [
        'El Salvadorin lippu',
        'SV',
        'El Salvador Lippu'
    ],
    '🇸🇽': [
        'Sint Maartenin lippu',
        'SX'
    ],
    '🇸🇾': [
        'Syyrian lippu',
        'SY',
        'Syyrian Lippu'
    ],
    '🇸🇿': [
        'Swazimaan lippu',
        'SZ',
        'Eswatinin Lippu'
    ],
    '🇹🇦': [
        'Flag of Tristan Da Cunha',
        'TA'
    ],
    '🇹🇨': [
        'Turks- ja Caicossaarten lippu',
        'TC'
    ],
    '🇹🇩': [
        'Tšadin lippu',
        'TD',
        'Tšadin Lippu'
    ],
    '🇹🇫': [
        'Ranskan eteläisten alueiden lippu',
        'TF',
        'Ranskan Eteläisten Maiden Lippu'
    ],
    '🇹🇬': [
        'Togon lippu',
        'TG',
        'Togolese Flag'
    ],
    '🇹🇭': [
        'Thaimaan lippu',
        'TH',
        'Thaimaan Lippu'
    ],
    '🇹🇯': [
        'Tadžikistanin lippu',
        'TJ',
        'Tadžikistanin Lippu'
    ],
    '🇹🇰': [
        'Tokelaun lippu',
        'TK',
        'Tokelauan Lippu'
    ],
    '🇹🇱': [
        'Itä-Timorin ja Lesteen lippu',
        'TL',
        'Itä-Timorin Lippu',
        'Itä-Timorin Lippu'
    ],
    '🇹🇲': [
        'Turkmenistanin lippu',
        'TM',
        'Turkmen Flag'
    ],
    '🇹🇳': [
        'Tunisian lippu',
        'TN',
        'Tunisian Lippu'
    ],
    '🇹🇴': [
        'Tongan lippu',
        'Päättyen',
        'Tongan Flag'
    ],
    '🇹🇷': [
        'Turkin lippu',
        'TR',
        'Turkin Lippu'
    ],
    '🇹🇹': [
        'Trinidad ja Tobagon lippu',
        'TT'
    ],
    '🇹🇻': [
        'Tuvalun lippu',
        'Televisio',
        'Tuvaluan Lippu'
    ],
    '🇹🇼': [
        'Taiwanin lippu',
        'TW',
        'Taiwanin Lippu'
    ],
    '🇹🇿': [
        'Tansanian lippu',
        'TZ',
        'Tanzanian Flag'
    ],
    '🇺🇦': [
        'Ukrainan lippu',
        'UA',
        'Ukrainan Lippu'
    ],
    '🇺🇬': [
        'Ugandan lippu',
        'UG',
        'Ugandan Lippu'
    ],
    '🇺🇲': [
        'Lippu: Yhdysvaltain Erillissaaret',
        'UM'
    ],
    '🇺🇸': [
        'Amerikan yhdysvaltojen lippu',
        'US',
        'Amerikan Lippu',
        'Yhdysvaltain Lippu'
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
        'Pyhän istuimen lippu',
        'VA',
        'Vanticanien Lippu'
    ],
    '🇻🇨': [
        'Saint Vincent & Grenadiinien lippu',
        'VC'
    ],
    '🇻🇪': [
        'Venezuelan lippu',
        'VE',
        'Venezuelan Lippu'
    ],
    '🇻🇬': [
        'Brittiläisten Neitsytsaarten lippu',
        'VG',
        'Brittiläisen Neitsytsaaren Lippu'
    ],
    '🇻🇮': [
        'Yhdysvaltain Neitsytsaarten lippu',
        'VI',
        'Yhdysvaltain Neitsytsaaren Lippu'
    ],
    '🇻🇳': [
        'Vietnamin lippu',
        'VN',
        'Vietnamin Lippu'
    ],
    '🇻🇺': [
        'Flag of Vanuatu',
        'VU',
        'Ni-Vanuatu Flag'
    ],
    '🇼🇫': [
        'Wallis & Futunan lippu',
        'WF'
    ],
    '🇼🇸': [
        'Samoan lippu',
        'WS',
        'Samoan Flag'
    ],
    '🇽🇰': [
        'Kosovon lippu',
        'XK',
        'Kosovar Flag'
    ],
    '🇾🇪': [
        'Jemenin lippu',
        'YE',
        'Jemenin Lippu'
    ],
    '🇾🇹': [
        'Mayotten lippu',
        'YT',
        'Mayotten Lippu'
    ],
    '🇿🇦': [
        'Etelä-Afrikan lippu',
        'ZA',
        'Etelä-Afrikan Lippu'
    ],
    '🇿🇲': [
        'Sambian lippu',
        'ZM',
        'Zambian Flag'
    ],
    '🇿🇼': [
        'Zimbabwen lippu',
        'ZW',
        'Zimbabwen Lippu',
        'Zim Lippu'
    ]
};
/*sports*/
emojis_language[lang][8] = {
    '🧗{{skin_tone}}‍‍♂️': [
        'Mies Kiipeily',
        'Mies Rock Climber',
        'Mies Kiipeilijä'
    ],
    '🧗{{skin_tone}}‍‍♀️': [
        'Nainen Kiipeily',
        'Nainen Rock Climber',
        'Nainen Kiipeilijä'
    ],
    '🏇{{skin_tone}}‍': [
        'Hevonen Racing',
        'Hevosen Rotu',
        'Pitsi'
    ],
    '⛷{{skin_tone}}‍️': ['Hiihtäjä'],
    '🏂{{skin_tone}}‍': ['Snowboarder'],
    '🏌️{{skin_tone}}‍♂️': ['Man Golfer'],
    '🏌️{{skin_tone}}‍♀️': ['Nainen Golfer'],
    '🏄{{skin_tone}}‍♂️': ['Ihmisen Surferi'],
    '🏄{{skin_tone}}‍♀️': ['Nainen Surfer'],
    '🚣{{skin_tone}}‍‍♂️': ['Miehen Soutuvene'],
    '🚣{{skin_tone}}‍‍♀️': ['Nainen Soutuvene'],
    '🏊{{skin_tone}}‍‍♂️': [
        'Miehen Uinti',
        'Mies Uima'
    ],
    '🏊{{skin_tone}}‍‍♀️': [
        'Nainen Uinti',
        'Nainen Uima'
    ],
    '⛹{{skin_tone}}‍️‍♂️': [
        'Miehen Pallo',
        'Man Koripallo Pelaaja'
    ],
    '⛹️{{skin_tone}}‍♀️': [
        'Nainen Bouncing Ball',
        'Nainen Koripallo Pelaaja'
    ],
    '🏋️{{skin_tone}}‍♂️': [
        'Mies Nostopainot',
        'Miehen Painonnostin'
    ],
    '🏋️{{skin_tone}}‍♀️': [
        'Naisen Nostopainot',
        'Naisen Painonnostaja'
    ],
    '🚴{{skin_tone}}‍♂️': [
        'Miehen Pyöräily',
        'Man Cyclist',
        'Miehen Pyöräily'
    ],
    '🚴{{skin_tone}}‍♀️': [
        'Nainen Pyöräily',
        'Nainen Syklisti',
        'Naisen Syklisti'
    ],
    '🚵{{skin_tone}}‍♂️': [
        'Miehen Vuorten Pyöräily',
        'Man Mountain Biker'
    ],
    '🚵{{skin_tone}}‍♀️': [
        'Naisen Vuorten Pyöräily',
        'Nainen Vuorikiipeilijä'
    ],
    '🤸{{skin_tone}}‍♂️': [
        'Man Cartwheeling',
        'Man Doing Cartwheel'
    ],
    '🤸{{skin_tone}}‍♀️': [
        'Naisen Rintapyöräily',
        'Nainen Ajopyörä'
    ],
    '🤼': [
        'Ihmiset Paini',
        'Paini',
        'Painit'
    ],
    '🤽{{skin_tone}}‍♂️': ['Mies Playing Water Polo'],
    '🤽{{skin_tone}}‍♀️': ['Nainen Leikkii Vesi Polo'],
    '🤾{{skin_tone}}‍♂️': ['Mies Soi Käsipallo'],
    '🤾{{skin_tone}}‍♀️': ['Nainen Pelaa Käsipalloa'],
    '🤹{{skin_tone}}‍♂️': [
        'Mies Juggling',
        'Mies Juggler'
    ],
    '🤹{{skin_tone}}‍♀️': [
        'Nainen Juggling',
        'Nainen Juggler'
    ],
    '🧘{{skin_tone}}‍♂️': ['Mies Lotussijainnissa'],
    '🧘{{skin_tone}}‍♀️': ['Nainen Lotus-asennossa'],
    '🏃{{skin_tone}}‍♂️': ['Mies Käynnissä'],
    '🏃{{skin_tone}}‍♀️': ['Nainen Käynnissä'],
    '🕺{{skin_tone}}‍': ['Mies Tanssi'],
    '💃{{skin_tone}}‍': ['Nainen Tanssi'],
    '🤺': [
        'Henkilö Miekkailu',
        'Fancer'
    ],
    '🏆': [
        'Palkinto',
        'Mestaruus',
        'Voittaja'
    ],
    '🏅': ['Urheilu Mitali'],
    '🥇': [
        '1. Paikkamitali',
        'Ensimmäisen Paikan Mitali',
        'Kultainen Mitali'
    ],
    '🥈': [
        '2. Paikka Mitali',
        'Toisen Paikan Mitali',
        'Hopea Mitaali'
    ],
    '🥉': [
        'Kolmas Paikkamitali',
        'Kolmannen Paikan Mitali',
        'Pronssimitali'
    ],
    '⚽': [
        'Jalkapallo',
        'Jalkapallo'
    ],
    '⚾': [
        'Baseball',
        'Pehmeäpallo',
        'Valkoinen'
    ],
    '🥎': [
        'Pehmeäpallo',
        'Keltainen'
    ],
    '🏀': [
        'Koripallo',
        'Oranssi',
        'Koripallo ja koukku'
    ],
    '🏐': ['Lentopallo'],
    '🏈': [
        'Amerikkalainen Jalkapallo',
        'Jalkapallo',
        'Gridiron',
        'Yläkulho'
    ],
    '🏉': [
        'Rugby Jalkapallo',
        'Jalkapallo',
        'Liiga',
        'Rugby',
        'Unioni'
    ],
    '🎾': [
        'Tennis',
        'Pallo',
        'Racket',
        'Racquet'
    ],
    '🥏': [
        'Lentävä Levy',
        'Frisbee'
    ],
    '🎳': [
        'Keilailu',
        'Pinssit',
        'Sarjakuvat',
        'Keilailu Kymmenen Pin-Keilausta'
    ],
    '🏏': [
        'Kriketti',
        'Lepakko',
        'Pallo'
    ],
    '🏑': [
        'Kenttä Jääkiekko',
        'Pallo',
        'Kiinni'
    ],
    '🏒': [
        'Jääkiekko Jääkiekko',
        'Pallo',
        'Kiinni'
    ],
    '🥍': [
        'Lacrosse',
        'Pallo',
        'Kiinni'
    ],
    '🏓': [
        'Ping Pong',
        'Taulukko Tennis',
        'Pallo',
        'Paddle'
    ],
    '🏸': [
        'Badminton',
        'Sulkumäki',
        'Racquet'
    ],
    '🥊': ['Nyrkkeilyhanska'],
    '🥋': [
        'Martial Arts Uniform',
        'Judo',
        'Karaatti',
        'Kung fu'
    ],
    '⛳': [
        'Merkitse aukkoon',
        'Golf Lippu'
    ],
    '⛸️': [
        'Jään Luistelu',
        'Luistelu'
    ],
    '🎣': [
        'Kalastus',
        'Pole',
        'Kala',
        'Turskan Kalastustangot'
    ],
    '🎽': [
        'Juoksu Paita',
        'Singlet',
        'Jakso'
    ],
    '🎿': [
        'Sketit',
        'Hiihto',
        'Käynnistys'
    ],
    '🛷': ['Sled'],
    '🥌': ['Curling Kivi'],
    '🎯': [
        'Suora Osuma',
        'Jousiammunta',
        'Bullseye',
        'Tikka'
    ],
    '🎱': [
        'Pool 8 -pallo',
        'Cue Pallo',
        'Torkutin',
        'Biljardi'
    ],
    '🎮': [
        'Videopeliohjain',
        'Playstaatio',
        'Xbox',
        'Peliohjain',
        'Wii U'
    ],
    '♟️': ['Musta Shakki Sotilas'],
    '🏹': [
        'Jousi ja nuoli',
        'Kaari'
    ],
    '🥅': ['Tavoite Netto'],
    '🀄': [
        'Mahjong Punainen Lohikäärme',
        'Mahjong',
        'Mahjong Tile',
        '中',
        'Mahjong Tile Red Dragon'
    ],
    '🎴': [
        'Kukka Pelikortit',
        'Korttien Paketti',
        'Hanafuda',
        'Hwatu',
        'Toistetaan Kortteja'
    ]
};
/*travel and places*/
emojis_language[lang][9] = {
    '🚂': [
        'Steamin Veturi',
        'Steamin Juna',
        'Rautateiden Veturi'
    ],
    '🚃': [
        'Rautateiden Autot',
        'Rautatie',
        'Raideliikenteen Autot',
        'Rautateiden Kuljetus',
        'Rautatievaunu Reg.'
    ],
    '🚄': ['Suurnopeusjuna'],
    '🚅': [
        'Luotien Juna',
        'Shinkansen',
        'Suurnopeusjuna Bullet Nose -laitteella'
    ],
    '🚆': ['Juna'],
    '🚇': [
        'Maanalainen',
        'Putki',
        'Metro',
        'Metro'
    ],
    '🚈': [
        'Kevyt Rautatie',
        'Juna'
    ],
    '🚊': ['Raitiovaunut'],
    '🚝': [
        'Monorail',
        'Juna'
    ],
    '🚞': [
        'Vuorten Rautatie',
        'Funicular',
        'Juna Ja Vuori'
    ],
    '🚋': ['Raitiovaunu Auto'],
    '🚌': [
        'Bussi',
        'Valmentaja'
    ],
    '🚍': [
        'Saapuva Väylä',
        'Linja-autoliikenteen ETU'
    ],
    '🚎': [
        'Vaunu',
        'Elektroninen Väylä'
    ],
    '🚐': [
        'Minibus',
        'Minivini',
        'Ihmiset-Mover'
    ],
    '🚑': ['Ambulanssi'],
    '🚒': [
        'Tulimoottori',
        'Tuli Osasto',
        'Kuorma-auto Reg.'
    ],
    '🚓': [
        'Poliisi Auto',
        'Cop Auto',
        'Police Car Side'
    ],
    '🚔': [
        'Tuleva Poliisiauto',
        'Poliisiauton etuosa',
        'Cop Auto'
    ],
    '🚕': [
        'Taksi',
        'New York Taksi',
        'Taksin Sivu'
    ],
    '🚖': [
        'Taksi',
        'Saapuva Taksi',
        'Taksin etupuoli'
    ],
    '🚗': [
        'Auto',
        'Punainen Auto',
        'Auton Sivu'
    ],
    '🚘': [
        'Saapuva Automobile',
        'Punainen Auto',
        'Auton Etupuoli'
    ],
    '🚚': [
        'Toimitus Truck',
        'Kuorma'
    ],
    '🚛': [
        'Nivelöity Kuorma',
        'Vihreä Kuorma-auto'
    ],
    '🚜': [
        'Traktori',
        'Maatila'
    ],
    '🛻': ['Nouto Truck'],
    '🏎️': [
        'Racing Car',
        'F1',
        'Kaava 1',
        'Kilpa-auto'
    ],
    '🏍️': [
        'Moottoripyörä',
        'Moottoripyörä'
    ],
    '🛵': [
        'Moottoripotkulauta',
        'Vespa',
        'Moottoripyörä',
        'Moottoripyörä'
    ],
    '🛺': [
        'Automaattinen Rickshaw',
        'Tuk Tuk'
    ],
    '🚲': [
        'Polkupyörä',
        'Pyörä'
    ],
    '🛴': ['Potkulauta'],
    '⛵': [
        'Purjevene',
        'Dinghy',
        'Jahti'
    ],
    '🚤': [
        'Nopeusvene',
        'Moottorivene',
        'Moottorivene'
    ],
    '🛳️': ['Matkustajan Alus'],
    '⛴️': ['Lautta'],
    '🛥️': ['Moottorivene'],
    '🚢': ['Risteilyalus'],
    '✈️': [
        'Lentokone',
        'Aeroplane'
    ],
    '🛩️': [
        'Pieni Lentokone',
        'Pieni Lentokone'
    ],
    '🚁': ['Helikopteri'],
    '🚟': ['Keskeytys Rautatie'],
    '🚠': ['Vuoristoköysirata'],
    '🚡': [
        'Aerial Tramway',
        'Kaapelin Auto',
        'Gondola',
        'Ropeway'
    ],
    '🛰️': ['Satelliitti'],
    '🚀': [
        'Raketti',
        'Avaruussulku'
    ],
    '🛸': [
        'Lentävä Saucer',
        'UFO'
    ],
    '🚉': [
        'Junan Asema',
        'Juna Alusta'
    ],
    '🚏': ['Bussin Pysäytys'],
    '🛣️': [
        'Moottoritie',
        'Tie',
        'Valtatie',
        'Interstate'
    ],
    '🛤️': ['Rautateiden Rata'],
    '🛫': [
        'Lentokoneen Lähtö',
        'Ota Pois'
    ],
    '🛬': [
        'Lentokoneen Saapuminen',
        'Lentokone Saapuminen',
        'Lasku'
    ],
    '🗾': ['Japanin kartta'],
    '⛰️': ['Vuori'],
    '🏔️': ['Lumikivitetty Vuori'],
    '🌋': ['Tulivuori'],
    '🗻': [
        'Yhdistä Fuji',
        'Fuji-san'
    ],
    '🏕️': [
        'Telttailu',
        'Leirintäalue'
    ],
    '🏖️': ['Ranta Sateenvarjo'],
    '🏜️': ['Desert'],
    '🏝️': ['Aavikko Saari'],
    '🏞️': ['Kansallispuisto'],
    '🏟️': [
        'Stadium',
        'Isokasvi',
        'Urheilu Stadium'
    ],
    '🏛️': [
        'Klassinen Rakennus',
        'Kreikka',
        'Rooma'
    ],
    '🏗️': [
        'Rakennusten Rakentaminen',
        'Nosturi'
    ],
    '🏘️': [
        'Talot Rakennukset',
        'Talon ryhmä'
    ],
    '🏚️': [
        'Derelict House -rakennus',
        'Hylätty Talo',
        'Vanha Talo',
        'Haunattu Talo'
    ],
    '🏠': [
        'Koti',
        'Talon Rakennus'
    ],
    '🏡': [
        'Talo Puutarhalla',
        'Talo Ja Puu'
    ],
    '🏢': [
        'Toimiston Rakennus',
        'Kaupungin Rakennus',
        'Korkea Nousu'
    ],
    '🏣': [
        'Japanin Postitoimisto',
        'Japanin Postimerkki'
    ],
    '🏤': [
        'Posti Toimisto',
        'Euroopan Postitoimisto'
    ],
    '🏥': [
        'Sairaala',
        'ER',
        'A&E',
        'Hätätila',
        'Onnettomuus Ja Hätätilanne',
        'Punainen Risti',
        'Lääketieteellinen'
    ],
    '🏦': [
        'Pankki',
        'BK',
        'Bakkureru',
        'Pankin Sivukonttori',
        'Bakkureru'
    ],
    '🏨': [
        'Hotelli',
        'Majoitus',
        'H Rakennus'
    ],
    '🏩': [
        'Rakkaus Hotelli',
        'Love Heart Hotel'
    ],
    '🏪': [
        'Kätevä Kauppa',
        '24-Tunnin Kauppa',
        '7–11',
        'Kulma Kauppa',
        'Kwik-E-Mart'
    ],
    '🏫': [
        'Koulu',
        'Kellon Torni',
        'Elementary High Middle'
    ],
    '🏬': [
        'Osaston Kauppa',
        'Ostoskeskus (Kauppakeskus)',
        'Kauppa'
    ],
    '🏭': [
        'Tehdas',
        'Teollisuus',
        'Teollisuus',
        'Saasteet',
        'Savu'
    ],
    '🏯': [
        'Japanin Linna',
        'Linnoitus'
    ],
    '🏰': [
        'Eurooppalainen Linna',
        'Turrets'
    ],
    '💒': [
        'Kirkon Sydän',
        'Kirkon Häät',
        'Avioliitto'
    ],
    '🗼': [
        'Tokion Torni',
        'Eiffel-torni',
        'Punainen Torni'
    ],
    '🗽': [
        'Vapauden patsas',
        'New York'
    ],
    '⛪': [
        'Kirkon Rakennus',
        'Risti'
    ],
    '🕌': [
        'Moski',
        'Kuorittu Katto',
        'Minaret'
    ],
    '🛕': ['Hindu Temppeli'],
    '🕍': [
        'Synagoga',
        'Juutalainen',
        'Synagog',
        'Temppeli'
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
        'Sateenvarjo maassa',
        'Ranta Sateenvarjo'
    ],
    '🌄': [
        'Auringonnousu Vuorten Yli',
        'Aamu',
        'Auringonnousu'
    ],
    '🌅': [
        'Auringonnousu',
        'Auringonlasku'
    ],
    '🌆': [
        'Cityscape at Dusk',
        'Orange Sky City',
        'Dusk City'
    ],
    '🌇': [
        'Auringonlasku Rakennusten Yli',
        'Kaupungin Auringonlasku'
    ],
    '🌃': [
        'Yö tähtien kanssa',
        'Kaupunki Yöllä',
        'Tähtikäs Yö'
    ],
    '🗿': [
        'Moai',
        'Pääsiäissaaren Patsas',
        'Ihmisen Rock Veistäminen',
        'Moyain Patsas'
    ],
    '🌠': [
        'Ammunta Tähti',
        'Kun Haluat Tähtiä',
        'Meteoroidi'
    ],
    '🌌': [
        'Linnunrata',
        'Galaksi',
        'Yö Taivas',
        'Tila',
        'Tähdet',
        'Maailmankaikkeus'
    ],
    '🎑': [
        'Kuu Katselee Seremonia',
        'Ruohot, huopat ja kuu',
        'Kerää Kuu',
        'Syksyn Välijuhlat',
        'Tsukimi'
    ],
    '🛖': ['Mökki'],
    '🎢': [
        'Roller Coaster',
        'Rollercoaster',
        'Teemapuisto (teemapuisto)'
    ]
};
/*technologies (smartphones, laptops, etc.) and office*/
emojis_language[lang][10] = {
    '⌚': [
        'Tarkkaile',
        'Aikaväli',
        'Omenan Kello'
    ],
    '⏰': ['Hälytys Kello'],
    '⏱️': ['Sekuntikello'],
    '⏲️': ['Ajastimen Kello'],
    '🕰️': ['Mantelpiece Kello'],
    '🧭': ['Kompassi'],
    '🕹️': ['PeliohjainName'],
    '🎙️': ['Studio Mikrofoni'],
    '🎚️': ['Tason Liukusäädin'],
    '🎛️': ['Ohjaus Nyörät'],
    '📻': [
        'Radio',
        'Digitaalinen Radio',
        'Langaton'
    ],
    '📱': [
        'Matkapuhelin Puhelin',
        'Älypuhelin',
        'iPhone',
        'Solun Puhelin'
    ],
    '📲': [
        'Matkapuhelin, jossa oikealla nuoli vasemmalla',
        'Puhelin Puhelu',
        'Osoitetaan Puhelimeen'
    ],
    '☎️': [
        'Musta Puhelin',
        'Pyörivä Puhelin',
        'Punainen'
    ],
    '📞': [
        'Puhelimen Vastaanottaja',
        'Handset',
        'Puhelin',
        'Musta'
    ],
    '📟': [
        'Hakulaite',
        'Piipuri',
        'Nukkuja'
    ],
    '📠': [
        'Faksi Kone',
        'Facsimile',
        'Faksi'
    ],
    '🔋': [
        'Akku',
        'Aa Akku',
        'Puhelimen Akku'
    ],
    '🔌': [
        'Sähköpistoke',
        'AC Adaptor',
        'Virtakaapeli',
        'Virtapistoke'
    ],
    '💻': [
        'Kannettava',
        'Muistikirja',
        'Henkilökohtainen Tietokone',
        'PC',
        'MacBook',
        'Pinta'
    ],
    '🖥️': [
        'Työpöydän Tietokone',
        'iMac',
        'PC'
    ],
    '🖨️': ['Tulostin'],
    '⌨️': ['Keyboard'],
    '🖱️': [
        'Tietokoneen Hiiri',
        'Kolmen Painikkeen Hiiri'
    ],
    '🖲️': ['Trackball'],
    '💽': [
        'Tietokone Levy',
        'Minidisc',
        'CD',
        'DVD',
        'Blu-ray',
        'BD'
    ],
    '💾': [
        'Levyke Levy',
        '3,5′′ Levy',
        'Levy'
    ],
    '💿': [
        'Optinen Levy',
        'CD',
        'CD-ROM',
        'Kompakti Levy'
    ],
    '📀': [
        'DVD',
        'DVD-ROM',
        'Dvd-Video'
    ],
    '🎥': [
        'Elokuvan Kamera',
        'Elokuvan Kamera',
        'Hollywood',
        'Elokuva'
    ],
    '🎞️': ['Elokuvan Kehykset'],
    '📽️': ['Elokuvaprojektori'],
    '📺': [
        'Televisio',
        'Televisio'
    ],
    '📷': ['Digitaalinen Kamera'],
    '📸': ['Kamera salamalla'],
    '📹': [
        'Videon Kamera',
        'Videokamera'
    ],
    '📼': [
        'Videokasetti',
        'VHS',
        'VCR',
        'Videon Nauha',
        'Videokasetti'
    ],
    '💳': [
        'Luottokortti',
        'Debet Kortti',
        'AMEX',
        'Diners Club',
        'American Express',
        'Mastercard',
        'VISA Kortti'
    ],
    '📧': [
        'Sähköposti',
        'Sähköposti'
    ],
    '📨': [
        'Saapuva Kirjekuori',
        'Kirjekuori Rivillä',
        'Nopea Kirjekuori'
    ],
    '📩': [
        'Kirjekuori alaspäin nuoli yläpuolella',
        'Nuolen Kirjekuori Alas',
        'Lisää Kirjekuoreen'
    ],
    '📤': ['Lähtevä Kaukalo'],
    '📥': ['Saapuneet-Kansion Kaukalo'],
    '📮': ['Postilaatikko'],
    '📁': [
        'Tiedosto Kansio',
        'Kansio',
        'Hakemisto',
        'Suljettu Tiedostokansio'
    ],
    '📂': [
        'Avaa Tiedostokansio',
        'Hakemisto'
    ],
    '🗂️': ['Korttiindeksin Jakajat'],
    '📅': [
        'Kalenteri',
        '17. Heinäkuuta',
        'Maailman Emoji-Päivä'
    ],
    '🗓️': ['Spiral Kalenteri Pad'],
    '📆': [
        'Tear-Off Kalenteri',
        'Päivän Kalenteri',
        'Työpöydän Kalenteri'
    ],
    '📈': [
        'Kaavion Kasvaminen',
        'Positiivinen Kaavio',
        'Ylös Pisteytys Kaavio',
        'Kaavio ylöspäin -suuntauksella'
    ],
    '📉': [
        'Kaavion Vähentyminen',
        'Negatiivinen Kaavio',
        'Alas Pisteytys Kaavio',
        'Kaavio alaspäin suuntauksella'
    ],
    '📊': [
        'Palkki Kaavio',
        'Palkin Kaavio'
    ],
    '📌': [
        'Pushpin',
        'Thumb Tack'
    ],
    '📋': ['Leikepöytä'],
    '📍': [
        'Pyöreä Pushpin',
        'Pudotettu PIN-koodi',
        'Kartta PIN-koodi',
        'Kiinnitä',
        'Punainen Pin'
    ],
    '📎': [
        'Paperiliitin',
        'Clippy'
    ],
    '📏': ['Suora Rullaus'],
    '📐': [
        'Kolmikulmainen Ruler',
        'Kolmio Ruler'
    ],
    '✂️': [
        'Sakset',
        'Leikkaus'
    ],
    '✏️': [
        'Kynä',
        'Lyijykynä'
    ],
    '✒️': [
        'Musta Nib',
        'Kynä Nib',
        'Suihkulähde Kynä'
    ],
    '🖋️': [
        'Suihkulähde Kynä',
        'Alempi Vasen Lähdekoodi Kynä'
    ],
    '🖊️': [
        'Kynä',
        'Alempi Vasemman Ballpoint Pen',
        'Ballpoint Pen'
    ],
    '🖌️': [
        'Maalinharja',
        'Siveli',
        'Alavasen Paintbrush'
    ],
    '🖍️': [
        'Crayon',
        'Alempi Vasen Ripustus'
    ],
    '📝': [
        'Muistio',
        'Memorandum',
        'Huomautus',
        'Kynsiili Ja Paperi'
    ],
    '🗑️': [
        'Jätepaperin Kori',
        'Roskat Voi',
        'Rubbish Bin',
        'Roskakori Voi'
    ],
    '📡': ['Satelliitti Antenni'],
    '🔭': [
        'Kaukoputki',
        'Tärkkelys'
    ],
    '🔬': [
        'Mikroskooppi',
        'Magnify',
        'Tiede'
    ],
    '📭': ['Avaa postilaatikko alaspäin lipulla'],
    '📬': [
        'Avaa kansio korotetulla lipulla',
        'Avaa Postilaatikko'
    ],
    '📪': ['Suljettu postilaatikko pienennetyllä lipulla'],
    '📫': ['Suljettu postilaatikko lisäämällä lippu'],
    '📰': ['Sanomalehti'],
    '🗞️': [
        'Valssattu Sanomalehti',
        'Sanomalehtien Toimitus'
    ],
    '📄': [
        'Sivu Ylös',
        'Tulostettu Sivu'
    ],
    '📜': [
        'Vieritä',
        'Taso',
        'Parchment'
    ],
    '📃': [
        'Page with Curl',
        'Curled Page',
        'Curly Page'
    ],
    '📓': [
        'Muistikirja',
        'Musta Ja Valkoinen Kirja'
    ],
    '📔': ['Muistikirja ja koriste kansi'],
    '📕': [
        'Suljettu Kirja',
        'Punainen Kirja',
        'Punainen Oppikirja'
    ],
    '📖': [
        'Avaa Kirja',
        'Kirja',
        'Uusi'
    ],
    '📗': [
        'Vihreä Kirja',
        'Vihreä Oppikirja'
    ],
    '📘': [
        'Sininen Kirja',
        'Sininen Oppikirja'
    ],
    '📙': [
        'Oranssi Kirja',
        'Oranssi Oppikirja'
    ],
    '📚': [
        'Kirjat',
        'Pileä Kirjoja',
        'Kirjojen Pino'
    ],
    '🗳️': [
        'Ballot Box Ballot',
        'Ääni Laatikko',
        'Äänestys'
    ],
    '🗄️': [
        'Tiedostokaappi',
        'Hakemuskaappi'
    ],
    '🗃️': ['Kortin Tiedostolaatikko'],
    '🖇️': ['Linkitetyt Paperiliittimet']
};
/*clothes and accessories*/
emojis_language[lang][11] = {
    '👣': [
        'Jalanjäljet',
        'Jalat',
        'Jalanaskelmat'
    ],
    '👓': [
        'Silmälasit',
        'Silmälasit'
    ],
    '🕶️': ['Aurinkolasit'],
    '🥽': ['Goggles'],
    '🥼': ['Lab Takki'],
    '👔': [
        'Necktie',
        'Business Paita',
        'Paita Ja Solmio'
    ],
    '👕': [
        'T-Paita',
        'Tee Paita',
        'Polo Paita'
    ],
    '👖': [
        'Farkut',
        'Denim',
        'Housut',
        'Housut'
    ],
    '🧣': ['Scarf'],
    '🧤': ['Käsineet'],
    '🧥': ['Takki'],
    '🧦': ['Socks'],
    '👗': [
        'Mekko',
        'Hame',
        'Gown'
    ],
    '👘': [
        'Kimono',
        'Dressing Gown',
        'Japanilainen Mekko'
    ],
    '👙': [
        'Bikini',
        'Uimarit',
        'Uimapuku'
    ],
    '🩱': ['Yksiosainen Uimapuku'],
    '👚': [
        'Naisten Vaatteet',
        'Blouse',
        'Vaaleanpunainen Paita',
        'Blouse'
    ],
    '👛': [
        'Kukkaro',
        'Lompakko'
    ],
    '👜': ['Käsilaukku'],
    '👝': [
        'Kytkin Pussi',
        'Kytkin',
        'Pieni Laukku',
        'Pouch'
    ],
    '🎒': [
        'Reppu',
        'Pussi',
        'Koulun Laukku',
        'Koulun Satchel',
        'Rucksack'
    ],
    '👞': [
        'Mans Shoe',
        'Kenkä',
        'Ruskea Sarja',
        'Mekko Näytä'
    ],
    '👟': [
        'Athletic Shoe',
        'Käynnissä Oleva Kengä',
        'Sneaker',
        'Juoksija',
        'Kouluttaja',
        'Tenniskenkä'
    ],
    '🥾': ['Vaelluksen Käynnistys'],
    '🥿': ['Tasainen Kengä'],
    '👠': [
        'Korkea Kengä',
        'Stiletto',
        'Korkeat Korot'
    ],
    '👡': [
        'Naiset Sandaali',
        'Kallistettu Sandaali',
        'Saldals'
    ],
    '👢': [
        'Naisten Saappaat',
        'Cowgirl Saappaat',
        'Polven Korkeat Saappaat',
        'Kuoritut Saappaat'
    ],
    '👑': [
        'Kruunu',
        'Kuningas',
        'Kuningatar',
        'Prinssi',
        'Kuninkaallinen',
        'Prinsessa'
    ],
    '👒': [
        'Hattu',
        'Naisten Hattu',
        'Hattu Jousella',
        'Naiset Hattu'
    ],
    '🎩': [
        'Ylhäällä Hattu',
        'Muodollinen Kuluminen',
        'Groom'
    ],
    '🎓': [
        'Valmistumisen Suoja',
        'Kollegio',
        'Graduate',
        'Laastari Lauta',
        'Yliopisto',
        'Square Akateeminen Kanta'
    ],
    '🧢': [
        'Laskutettu Kanta',
        'Baseball Kanta'
    ],
    '⛑️': [
        'Kypärä valkoisella ristillä',
        'Pelastustyöntekijän Kypärä'
    ],
    '💼': [
        'Salkku',
        'Matkalaukku'
    ],
    '🎖️': [
        'Sotilasmitali',
        'Mitali',
        'Keskitaso',
        'Sotilaallinen Koristelu'
    ],
    '📿': [
        'Rukous Helmet',
        'Dhikr Helmet',
        'Rosary Helmet'
    ],
    '🎗️': ['Muistutus Ribbo'],
    '🤿': ['Sukellusnaamio'],
    '🦺': ['Turvallisuus Vest'],
    '🥻': [
        'Sari',
        'Saareva',
        'Shari'
    ],
    '🩲': ['Lyhyet'],
    '🩳': ['Shortsit'],
    '🛼': [
        'Rullan Luistelu',
        'Inline Luistelu',
        'Roller Derby'
    ],
    '🩴': [
        'Käännä Flop',
        'Thong Sandal'
    ],
    '🪖': ['Sotilaallinen Kypärä'],
    '🩰': [
        'Ballet Kengät',
        'Pointe Shoe'
    ]
};
/*hands and parts of body*/
emojis_language[lang][12] = {
    '👋{{skin_tone}}': [
        'Waving Käsi -kyltti',
        'Hyvästi',
        'Käsi Aalto',
        'Hei',
        'Hi'
    ],
    '🖐️{{skin_tone}}': [
        'Käsi sormien kanssa Splayed',
        'Viisi Käsi',
        'Pelattu Käsi',
        'Raised käsi kanssa Fingers Splayed'
    ],
    '🤚{{skin_tone}}‍': [
        'Raised Back of Hand',
        'Tausta'
    ],
    '✋{{skin_tone}}‍': [
        'Nostettu Käsi',
        'Korkea Viisi',
        'Pysäytä'
    ],
    '🖖{{skin_tone}}‍': [
        'Vulcan Salute',
        'Spock',
        'Tähti Trek',
        'Raised Hand kanssa Osa Välillä keski-ja rengas Fingers'
    ],
    '👌{{skin_tone}}‍': [
        'Ok Käsi Allekirjoitus',
        'Okei',
        'Täydellinen',
        'Kyllä'
    ],
    '✌️{{skin_tone}}‍': [
        'Voitto Käsi',
        'Ilmaa Koskevat Lainaukset',
        'Rauhan Allekirjoitus',
        'V Allekirjoitus'
    ],
    '🤞{{skin_tone}}‍': [
        'Risteytetyt Sormet',
        'Sormien Risteytys',
        'Onnea',
        'Käsi indeksin ja Middle Fingers Crossed'
    ],
    '🤟{{skin_tone}}‍': [
        'Love-You Eleet',
        'Rakastan Sinua Käsi Allekirjoitus'
    ],
    '🤘{{skin_tone}}‍': [
        'Sarvten merkki',
        'Devil Fingers',
        'Raskas Metalli',
        'Rock Päällä'
    ],
    '🤙{{skin_tone}}‍': [
        'Soita Minulle Käsi Allekirjoitus',
        'Puhelimen Käsi',
        'Shaka'
    ],
    '🤏{{skin_tone}}‍': ['Puristava Käsi'],
    '👈{{skin_tone}}‍': [
        'Taustahakemisto Osoittaa Vasemmalle',
        'Valkoinen Vasemmalle Osoittaen Taustan Indeksi'
    ],
    '👉{{skin_tone}}‍': [
        'Taustahakemisto Osoittaa Oikealle',
        'Valkoinen Oikea Osoittaa Taustan Indeksi'
    ],
    '👆{{skin_tone}}‍': [
        'Taustaindeksin Pisteytys Ylös',
        'Valkoinen Ylös Pointing Backhand Indeksi',
        'Keski Sormi'
    ],
    '👇{{skin_tone}}‍': [
        'Taustan Indeksi Pointing Alas',
        'Valkoinen Alas Pisteytys Backhand Indeksi',
        'Pisteytys Alas'
    ],
    '☝{{skin_tone}}‍️': [
        'Indeksoi Sormen Pisteytys Ylös',
        'Valkoinen Ylös Pisteytys Indeksi',
        'Salainen'
    ],
    '🖕{{skin_tone}}‍': [
        'Keski Sormi',
        'Flipping The Bird',
        'Rude Sormi',
        'Käänteinen käsi keski-sormella laajennettu'
    ],
    '👍{{skin_tone}}‍': [
        'Peukalot Ylös Kirjaudu',
        'Tykkää',
        'Kyllä'
    ],
    '👎{{skin_tone}}‍': [
        'Peukalot Alas Allekirjoitus',
        'Huono',
        'Dislike',
        'Ei'
    ],
    '✊{{skin_tone}}‍': [
        'Nostettu Fist',
        'Fist Pumppu'
    ],
    '👊{{skin_tone}}‍': [
        'Saapuva Fist',
        'Bro Fist',
        'Brofist',
        'Fist Bump',
        'Isku',
        'Suljettu Fist',
        'Nyrkkeilyn Käsi Allekirjoitus'
    ],
    '🤛{{skin_tone}}‍': ['Vasen Nyrkki Pumppu'],
    '🤜{{skin_tone}}‍': ['Oikea Fist Bump'],
    '🤌{{skin_tone}}‍': [
        'Puristetut Sormet',
        'Ma Che Vuoi',
        'Sormen Kukkaro'
    ],
    '👏{{skin_tone}}‍': [
        'Papimisen Käsien Kyltti',
        'Suosionosoituksia',
        'Clap',
        'Taputus',
        'Golf Clap',
        'Pyöreä Suosionosoituksia'
    ],
    '🙌{{skin_tone}}‍': [
        'Henkilö nostaa molemmat kädet juhlissa',
        'Käsien nostaminen',
        'Aseet Ilmassa',
        'Banzai',
        'Festivus Ihme',
        'Hallelujah',
        'Kehua Kädet',
        'Kaksi Kättä'
    ],
    '👐{{skin_tone}}‍': [
        'Avaa Käsien Allekirjoitus',
        'Halaus',
        'Jazz Kädet'
    ],
    '🤲{{skin_tone}}‍': [
        'Palmut Ylös Yhdessä',
        'Dua'
    ],
    '🤝{{skin_tone}}‍': [
        'Handshake',
        'Ravistus Kädet'
    ],
    '🙏{{skin_tone}}‍': [
        'Taitettu Kädet',
        'Namaste',
        'Ole hyvä',
        'Rukous',
        'Kiitos Olet',
        'Henkilö, jolla on taitettu kädet'
    ],
    '✍{{skin_tone}}‍️': ['Kirjoitetaan Käsi'],
    '💪{{skin_tone}}‍': [
        'Flexed Biceps',
        'Taipuisat Varren Lihakset',
        'Musle',
        'Vahva'
    ],
    '🦵{{skin_tone}}‍': ['Jalka'],
    '🦶{{skin_tone}}‍': ['Jalka'],
    '👂{{skin_tone}}‍': [
        'Korva',
        'Korvat',
        'Kuulemistilaisuus',
        'Kuunteleminen'
    ],
    '👃{{skin_tone}}‍': [
        'Nenä',
        'Hajuvesi',
        'Nuuskinta',
        'Stinky'
    ],
    '🧠': ['Aivot'],
    '🦷': ['Hammas'],
    '👀': [
        'Silmät',
        'Silmämunat',
        'Shifty Silmät',
        'Viisas Silmä'
    ],
    '👁️': [
        'Silmä',
        'Yksittäinen Silmä'
    ],
    '👅': ['Kieli Ulos'],
    '👄': [
        'Suun',
        'Suuteltavat Huulet',
        'Huulet'
    ],
    '🫀': ['Anatominen Sydän'],
    '🫁': ['Keuhkot'],
    '🦾': ['Mekaaninen Varsi'],
    '🦿': ['Mekaaninen Jalka']
};
/*other*/
emojis_language[lang][13] = {
    '💩': [
        'Poon kasvi',
        'Koiran Multa',
        'Hymyilevä Katto'
    ],
    '💋': [
        'Suudelman Merkki',
        'Suuteltavat Huulet'
    ],
    '💅': [
        'Nail Polish',
        'Sormentimet',
        'Manicure',
        'Nonchalant'
    ],
    '🤳': [
        'Selfie',
        'Puhelimen Kamera',
        'Selfie Käsi'
    ],
    '🦴': ['Lu'],
    '🧳': [
        'Matkatavarat',
        'Matkalaukku'
    ],
    '🌂': [
        'Suljettu Sateenvarjo',
        'Tiivistetty Sateenvarjo',
        'Vaaleanpunainen Sateenvarjo'
    ],
    '☂️': ['Sateenvarjo'],
    '☔': [
        'Sateenvarjo ja sadepisarat',
        'Saavutus',
        'Rainy'
    ],
    '🧵': ['Säikeen poiminta'],
    '🧶': ['Lanan pallo'],
    '💄': [
        'Lipstick',
        'Huule Kiilto',
        'Meikki'
    ],
    '💍': [
        'Soita',
        'Diamond Ring',
        'Sitoutumismekanismi'
    ],
    '💥': [
        'Törmäyksen Symboli',
        'Bang',
        'Räjäytä',
        'Vaikutus',
        'Punainen Spark',
        'Räjähdys'
    ],
    '💫': [
        'Dizzy Symboli',
        'Ympyrä Ja Tähti'
    ],
    '💦': [
        'Splashing Hiki Symboli',
        'Plewdit',
        'Roiskeva Vesi',
        'Vesipisarat'
    ],
    '💨': [
        'Viihdytys Poissa',
        'Nopea',
        'Höyry',
        'Vappaus',
        'Tuuli',
        'Dash Symboli',
        'Tuulen puristus'
    ],
    '🌬️': [
        'Tuulen Kasvot',
        'Puhallettava Tuuli',
        'Luontoäiti',
        'Tuulen Kirkastaminen Kasvot'
    ],
    '🐾': [
        'Sotilaan Tulosteet',
        'Kissa Sovitustulosteet',
        'Koiran Paw Tulostaa',
        'Kitten Paw Prints',
        'Puppy Sow Tulostaa'
    ],
    '🕸️': [
        'Hämähäkki Web',
        'Cobweb',
        'Verkko',
        'Spiderweb'
    ],
    '🦠': [
        'Mikrobi',
        'Solu',
        'Koronavirus',
        'COVID-19',
        'Germ',
        'Mikro-organismi',
        'Virus'
    ],
    '💐': ['Kukkakimppu Kukat'],
    '🌍': [
        'Globe Näyttää Euroopan Ja Afrikan',
        'Maa',
        'Globe',
        'Planeetta',
        'Maailma',
        'Globe Showing Europe and Africa'
    ],
    '🌎': [
        'Globe Showing Americas',
        'Maa',
        'Globe',
        'Planeetta',
        'Maailma'
    ],
    '🌏': [
        'Globe Näyttää Aasia-Australia',
        'Maa',
        'Globe',
        'Planeetta',
        'Maailma',
        'Globe Showing Asia and Australia'
    ],
    '🌐': [
        'Globe ja Meridians',
        'Internet',
        'Maailman Laaja Verkko',
        'WWW'
    ],
    '🌑': [
        'Uusi Kuu Symboli',
        'Tumma Kuu',
        'Varjo Kuu',
        'Solar Eclipse'
    ],
    '🌒': ['Kasvava Kuun Symboli'],
    '🌓': ['Ensimmäisen Neljännen Kuun Symboli'],
    '🌔': ['Kasvava Kuu Symboli'],
    '🌕': ['Full Moon Symboli'],
    '🌖': ['Haluava Gibbous Kuu Symboli'],
    '🌗': ['Viimeinen Neljännesvuosi Kuu Symboli'],
    '🌘': ['Haluava Kuun Symboli'],
    '🌙': ['Kuu Crescent'],
    '🌚': [
        'Uusi kuu kasvoilla',
        'Hiipivä Kuu',
        'Tumma Kuu Kasvot',
        'Nuorempi Kuu'
    ],
    '🌝': [
        'Täysi kuu kasvoilla',
        'Moonface',
        'Smiley Moon',
        'Hymyyttävä Kuu'
    ],
    '🌛': ['Ensimmäinen neljäsosa Moon kasvoilla'],
    '🌜': ['Viimeinen neljäsosa Moon kasvoilla'],
    '🌞': [
        'Aurinko kasvoilla',
        'Hymy Su',
        'Sunface',
        'Hymyilevä Aurinko'
    ],
    '☀️': [
        'Su',
        'Auringonpaiste'
    ],
    '⭐': [
        'Tähti',
        'Valkoinen Keskipitkä Tähti'
    ],
    '🌟': [
        'Hehkuva Tähti',
        'Shining Star'
    ],
    '☁️': [
        'Pilvi',
        'Pilvinen',
        'Pilvistä'
    ],
    '⛅': ['Aurinko Pilven Takana'],
    '⛈️': [
        'Pilvi Lightning ja sade',
        'Thunder Cloud ja sade'
    ],
    '🌤️': ['Valkoinen aurinko, jossa pieni pilvi'],
    '🌥️': [
        'Aurinko Suuren Pilven Takana',
        'Valkoinen Aurinko Pilven Takana'
    ],
    '🌦️': ['Valkoinen aurinko pilven takana sateella'],
    '🌧️': ['Pilvi sateella'],
    '🌨️': ['Pilvi lunta'],
    '🌩️': ['Pilvi Lightning kanssa'],
    '🌪️': [
        'Tornado',
        'Pilvi Tornadon kanssa'
    ],
    '🌫️': ['Fog'],
    '🌈': [
        'Sateenkaari',
        'Gay Pride',
        'Ensisijainen Sateenkaari'
    ],
    '❄️': [
        'Lumihiutale',
        'Lumi',
        'Torni'
    ],
    '🌀': [
        'Syklooni',
        'Hurrikaani',
        'Spiraali',
        'Pyöritä',
        'Tornado'
    ],
    '⚡': [
        'Korkea Jännitetunnus',
        'Salama Bolt',
        'Ukkospultti',
        'Korkea Jännite'
    ],
    '☃️': [
        'Lumiukko',
        'Lumiukko Lumihiutaleilla'
    ],
    '⛄': [
        'Lumiukko Ilman Lumiukkoa',
        'Upea Lumiukko',
        'Olaf',
        'Lumiukko'
    ],
    '☄️': ['Komeetta'],
    '🔥': [
        'Tulipalo',
        'Liekki',
        'Kuuma',
        'Lit',
        'Snapstreak'
    ],
    '💧': [
        'Droplet',
        'Vesi',
        'Vesipisara'
    ],
    '✨': [
        'Sparkles',
        'Glitter',
        'Shiny',
        'Uusi'
    ],
    '🌊': [
        'Veden Aallo',
        'Ranta',
        'Valtameren Aalto',
        'Meri'
    ],
    '🎄': [
        'Joulukuusi',
        'Joulu',
        'Xmas Puu'
    ],
    '🎃': [
        'Jack-O-Lyhty',
        'Halloween',
        'Kurpitsa'
    ],
    '🌻': [
        'Auringonkukka',
        'Keltainen Kukka'
    ],
    '🌼': [
        'Blossom',
        'Kukkiva Kukka',
        'Daisy',
        'Keltainen Kukka'
    ],
    '🌷': ['Tulip'],
    '🌹': [
        'Ruusu Kukka',
        'Punainen Ruusu'
    ],
    '☘️': [
        'Shamrock',
        'Apila',
        'Trefoil'
    ],
    '🍀': [
        'Neljä Lehtisapila',
        'Apila',
        'Irlanti',
        'Onnekas',
        'Fortune'
    ],
    '🌸': [
        'Cherry Blossom',
        'Vaaleanpunainen Kukka',
        'Sakura'
    ],
    '💮': [
        'Valkoinen Kukka',
        'Cherry Blossom',
        'Paperi Doilis',
        'Hyvin Tehty Leima'
    ],
    '🌺': ['Hibiscus'],
    '🏵️': ['Rosetti'],
    '🌱': [
        'Seedling',
        'Kevät',
        'Sprout',
        'Itäminen'
    ],
    '🌲': [
        'Evergreen Puu',
        'Fir Puu',
        'Mänty Puu'
    ],
    '🌳': [
        'Lehtipuu',
        'Pyöristetty Puu'
    ],
    '🌴': [
        'Palm Puu',
        'Kookospuu'
    ],
    '🎋': [
        'Tanabata Puu',
        'Tanabata',
        'Toiveluu'
    ],
    '🎍': [
        'Mänty Koristelu',
        'Bambu',
        'Kadomatsu',
        'Uuden Vuoden Koristelu'
    ],
    '🌵': [
        'Cactus',
        'Desert'
    ],
    '🌾': [
        'Riisin Sheaf',
        'Rajaa',
        'Viljely',
        'Vehnä',
        'Riisin korva'
    ],
    '🌿': [
        'Yrtti',
        'Rajaa',
        'Kasvi'
    ],
    '🍁': [
        'Vaahteran Lehti',
        'Kanada',
        'Kanadalainen',
        'Vaahto'
    ],
    '🍂': [
        'Kaasunainen Lehti',
        'Syksyn Lehti',
        'Syksyn Lehdet',
        'Ruskeat Lehdet',
        'Pudonta Lehdet',
        'Kaatuneet Lehdet'
    ],
    '🍃': [
        'Leaf Fluttering in Wind',
        'Vihreät Lehdet',
        'Kevät'
    ],
    '🪴': ['Pottettu Kasvi'],
    '🔑': [
        'Avain',
        'Kultainen Avain'
    ],
    '🗝️': ['Vanha Avain'],
    '🔨': [
        'Vasara',
        'Claw Vasara',
        'Handyman',
        'Työkalu'
    ],
    '⛏️': [
        'Valitse',
        'Hakku'
    ],
    '🪓': ['Kirves'],
    '🪚': ['Kirvesmiehen Saha'],
    '🪛': ['Ruuvitalvi'],
    '🪝': ['Koukku'],
    '🪠': ['Plunger'],
    '🪣': ['Ämpäri'],
    '🔩': [
        'Nut ja Bolt',
        'Bolt',
        'Ruuvi'
    ],
    '🗜️': [
        'Klamppu',
        'Taulukko Vice',
        'WinZip',
        'Pakkaus'
    ],
    '🔒': [
        'Lukittu',
        'Suljettu Lukitus',
        'Padlock'
    ],
    '🔓': [
        'Avattu',
        'Avaa Padlock',
        'Avaa Lukitus'
    ],
    '🔏': [
        'Lukittu kynillä',
        'Lukitse Ja Kynä',
        'Lukitse Lähdekynä Kanssa',
        'Lukitse mustekynällä'
    ],
    '🔐': [
        'Lukittu avaimella',
        'Suljettu lukitus avaimella'
    ],
    '🗡️': [
        'Dagger',
        'Veitsi Aseen'
    ],
    '⚔️': ['Ristetyt Miekat'],
    '🔫': [
        'Pistol',
        'Gun',
        'Revolveri',
        'Squirt Gun',
        'Veden Aseet',
        'Veden Pistooli'
    ],
    '🧰': ['Työkalupakki'],
    '🧲': ['Magnet'],
    '⛓️': ['Ketjut'],
    '💉': [
        'Syringe',
        'Veren Lahjoitus',
        'Veren Testaus',
        'Neula',
        'Rokotus'
    ],
    '🧬': [
        'DNA',
        'Dna Double Helix'
    ],
    '🧪': ['Testaa Putki'],
    '🛏️': [
        'Sänky',
        'Makuuhuone'
    ],
    '🛋️': [
        'Kupongi ja lamppu',
        'Lounge',
        'Settee',
        'Sohva'
    ],
    '🪑': ['Tuoli'],
    '🚪': [
        'Ovi',
        'Oviaukko',
        'Edessä Ovi'
    ],
    '🪟': ['Ikkuna'],
    '🪜': ['Tikkaat'],
    '🪞': ['Peilaa'],
    '🚽': [
        'WC',
        'Kylpyhuone',
        'Loo',
        'Restroom',
        'WC'
    ],
    '🚿': [
        'Suihku',
        'Suihkun Päähaara'
    ],
    '🛁': [
        'Kylpyamme,',
        'Kupla Kylpy'
    ],
    '🧴': ['Lotion Bottle'],
    '🧷': ['Turvallinen PIN-koodi'],
    '🧺': ['Kori'],
    '🧻': [
        'Paperin asema',
        'WC-paperi'
    ],
    '🧼': ['Saippuan baari'],
    '🧽': ['Sieni'],
    '🧯': ['Palonsammutin'],
    '🚬': [
        'Savuke',
        'Savun Symboli'
    ],
    '⚰️': [
        'Kahvi',
        'Casket',
        'Hautajaiset'
    ],
    '⚱️': [
        'Hautajaiset Urn',
        'Maljakko'
    ],
    '🛡️': ['Kilpi'],
    '⚙️': [
        'Vaihde',
        'Asetukset',
        'Valinnat'
    ],
    '⚖️': [
        'Saldon Mittakaava',
        'Oikeusasioiden laajuus'
    ],
    '🔗': [
        'Linkki',
        'Ketju',
        'Hyperlinkki',
        'Linkitetty Ketju'
    ],
    '💀': [
        'Pääkallo',
        'Kuolema',
        'Harmaa Pääkallo',
        'Luuranko'
    ],
    '☠️': ['Kallo ja ristiluut'],
    '🦻': ['Kuulo-apua sisältävä korva'],
    '🎡': [
        'Ferris Wheel',
        'Iso Pyörä',
        'Fairgroundl',
        'Havaintopyörä'
    ],
    '⛽': [
        'Polttoaineen Pumppu',
        'Öljy',
        'Bensiini',
        'Kaasu'
    ],
    '🚨': [
        'Poliisiautot Kehittyvä Valo',
        'Hätävalo',
        'Vilkkuva Vaalea',
        'Siren'
    ],
    '🚥': ['Vaakasuora Liikenne Valo'],
    '🚦': ['Pystysuora Liikennettä Koskeva Valo'],
    '⚓': [
        'Admiralty Kuvio Ankkuri',
        'Kalastaja'
    ],
    '🚧': [
        'Rakentamisen Allekirjoitus',
        'Musta Ja Keltainen Raidallinen Kyltti'
    ],
    '🪂': ['Parachute'],
    '💺': [
        'Istuin',
        'Bussin Lentokone Junan Lentokone'
    ],
    '🪐': ['Saturnus'],
    '🎆': [
        'Ilotulitus',
        'Räjähdys'
    ],
    '🎇': [
        'Senko Hanabi',
        'Ilotulitus Sparkler'
    ],
    '💷': [
        'Pound Banknote',
        '20 £ Huomautus',
        'Kaksikymmentä Quid-muistiota',
        'Seteli, jossa on punta'
    ],
    '💶': [
        'Euro Banknote',
        '100 € Muistiinpano',
        'Seteli, jossa on Euro Sign'
    ],
    '💵': [
        'Dollari Banknote',
        '$1 Huomautus',
        'Seteli, jossa on dollarimerkki',
        'Dollarin Lasku',
        'American Dollari'
    ],
    '💴': [
        'Yen Banknote',
        '¼ 1000 Huomautus',
        'Jeni Huomautus',
        'Seteli, jossa on Yen Sign'
    ],
    '⛺': ['Teltta'],
    '⛲': [
        'Suihkulähde',
        'Veden Ominaisuus',
        'Veden Suihku',
        'Puisto'
    ],
    '💰': [
        'Raha Pussi',
        'Moneybags',
        'Rikas',
        '$'
    ],
    '🏷️': ['Tunnisteen Tagi'],
    '🔖': [
        'Kirjanmerkki',
        'Hinnan Tunniste',
        'Tunniste'
    ],
    '📑': ['Lisää Välilehdet Kirjanmerkkeihin'],
    '📯': [
        'Postinumero',
        'Bugle',
        'Ranskan Sarvi'
    ],
    '🪁': ['Kite'],
    '🪀': ['Jo-Yo'],
    '🎊': [
        'Confetti Ball',
        'Confetti'
    ],
    '🎉': [
        'Puolueen Popperi',
        'Juhla',
        'Juhlahattu'
    ],
    '🎈': [
        'Ilmapallo',
        'Juhlat',
        'Punainen Ilmapallo'
    ],
    '🌡️': [
        'Lämpömittari',
        'Kuuma Sää',
        'Lämpötila'
    ],
    '🛢️': ['Öljyä Rumpu'],
    '💣': ['Pommi'],
    '🔪': [
        'Keittiö Veitsi',
        'Veitsi',
        'Butchers Veitsi',
        'Hocho'
    ],
    '🏺': [
        'Amphora',
        'Purkki',
        'Maljakko'
    ],
    '🗺️': ['Maailman Kartta'],
    '🎼': [
        'Musikaalinen Pisteet',
        'Sheet Musiikki',
        'Treble Clef'
    ],
    '🎬': [
        'Tappajan Lauta',
        'Leikkaa',
        'Toiminto',
        'Johtaja',
        'Elokuvaliuske (filmi)'
    ],
    '🎻': [
        'Violiini',
        'Jousikvartetti',
        'Maailman Pienin Violiini'
    ],
    '🎺': [
        'Trumpetti',
        'Sarvi',
        'Jazz'
    ],
    '🎸': [
        'Kitara',
        'Akustinen Kitara',
        'Basso Kitara',
        'Sähkökitara'
    ],
    '🎷': [
        'Saksofoni',
        'Jazz',
        'Sax'
    ],
    '🥁': [
        'Rumpu',
        'Rumpuja ja rumpuja'
    ],
    '🎹': [
        'Piano',
        'Musikaalinen Näppäimistö'
    ],
    '🪕': ['Banjo'],
    '🪗': ['Haitari'],
    '🪘': ['Pitkä Rumpu'],
    '🎨': [
        'Taiteilija Paletti',
        'Taide',
        'Maalaus'
    ],
    '🧩': [
        'Pulmapala',
        'Palapelipala Palapelipala'
    ],
    '🎲': [
        'Peli Die',
        'Dice'
    ],
    '🎭': [
        'Esittäminen Taide',
        'Teatteri',
        'Teatteri',
        'Draama Maskit',
        'Kreikkalainen Teatterin Maskit',
        'Tragedy and Comedy Masks',
        'Venetsia'
    ],
    '🔍': [
        'Suurennuslasi Kallistettu Vasemmalle',
        'Magnifier',
        'Etsi Kuvake',
        'Vasemmanpuoleinen Suurennuslasi',
        'Etsi'
    ],
    '🔎': [
        'Suurennuslasi Kallistettu Oikealle',
        'Magnifier',
        'Etsi Kuvake',
        'Oikea-Pisteen Suurennuslasi',
        'Etsi'
    ],
    '⌛': [
        'Hourglass Valmis',
        'Hourglass'
    ],
    '⏳': [
        'Tuntilasi Ei Valmis',
        'Hourglass kanssa virtaava hiekka'
    ],
    '🕐': [
        'Yksi Kello',
        'Kello Kasvot Yksi O Kello'
    ],
    '🕜': ['Kello Kasvot Kolmekymmentä'],
    '🕑': [
        'Kaksi O\'Clock',
        'Kello Kasvot Kaksi O\'Clock'
    ],
    '🕝': ['Kello Kasvot Kaksi-kolmekymmentä'],
    '🕒': [
        'Kolme O\'Clock',
        'Kello Kasvot Kolme O\'Clock'
    ],
    '🕞': ['Kello Kasvot Kolme-kolmekymmentä'],
    '🕓': [
        'Neljä O\'Clock',
        'Kello Kasvot Neljä O Kello'
    ],
    '🕟': ['Kello Kasvot Neljä-kolmekymmentä'],
    '🕔': [
        'Viisi O \'Kello',
        'Kello Kasvot Viisi O\'Kello'
    ],
    '🕠': ['Kello Kasvot Viisi-kolmekymmentä'],
    '🕕': [
        'Kuusi O\'Clock',
        'Kello Kasvot Kuusi O\'Kello'
    ],
    '🕡': ['Kello Kasvot Kuusi Kolmaskymmenes'],
    '🕖': [
        'Seitsemän O\'Clock',
        'Kello Kasvot Seitsemän O\'Clock'
    ],
    '🕢': ['Kello Kasvot Seitsemän-kolmekymmentä'],
    '🕗': [
        'Kahdeksan Kello',
        'Kellon Kasvot Kahdeksan Kello'
    ],
    '🕣': ['Kello Kasvot Kahdeksan–kolmekymmentä'],
    '🕘': [
        'Yhdeksän O\'Clock',
        'Kello Kasvot Yhdeksän O\'Clock'
    ],
    '🕤': ['Kello Kasvot Yhdeksän-kolmekymmentä'],
    '🕙': [
        'Kymmenen O\'Clock',
        'Kello Kymmenen Kasvoa Kello'
    ],
    '🕥': ['Kello Kasvot Kymmenen Kolmekymmentä'],
    '🕚': [
        'Yksitoista O\'Clock',
        'Kello Kasvot Yksin O\'Clock'
    ],
    '🕦': ['Kello Kasvot Eleven-kolmekymmentä'],
    '🕛': [
        'Kaksitoista O\'Clock',
        'Kello Kasvot Kaksitoista O\'Kello'
    ],
    '🕧': ['Kello Kasvot Kaksoiskolmekymmentä'],
    '♨️': [
        'Kuumat Lähteet',
        'Onsen',
        'Höyry'
    ],
    '💈': [
        'Kuoripavut (silvityt)',
        'Barber Kauppa',
        'Barberin Raidat',
        'Kampaamo'
    ],
    '🎪': [
        'Circus Teltta',
        'Suuri Ylhäällä',
        'Sirkus'
    ],
    '💢': [
        'Anger Symboli',
        'Viha Allekirjoitus',
        'Vein Pop'
    ],
    '🗯️': [
        'Oikea Viha Kupla',
        'Zig Zag Bubble',
        'Angry Speech Bubble'
    ],
    '💊': [
        'Pill',
        'Kapseli',
        'Tabletti',
        'Huumausaineet'
    ],
    '🎎': [
        'Nuket',
        'Hinamatsuri',
        'Imperiaaliset Nuket',
        'Japanin Nuket'
    ],
    '🎏': [
        'Carp StreamerComment',
        'Kalojen Lippu',
        'Koinobori',
        'Tuuli Sukat'
    ],
    '🎐': [
        'Tuulikalkki',
        'Furin',
        'Pilkkupagelli',
        'Tuulen Äänimerkki'
    ],
    '🎀': [
        'Ribbon Bow',
        'Vaaleanpunainen Jousi',
        'Jousi'
    ],
    '🎁': [
        'Kääritty Lahja',
        'Syntymäpäivä Lahja',
        'Joulun Lahja',
        'Lahja',
        'Lahja Laatikko',
        'Läsnä',
        'Wrapped Present'
    ],
    '🎫': [
        'Tukipyyntö',
        'Tukipyynnön Nuppi',
        'Maailman Kiertomatka Lippu'
    ],
    '🃏': [
        'Jokeri',
        'Joker-kortti',
        'Pelikortin Musta Jokeri'
    ],
    '💡': [
        'Vaalea Kupu',
        'Idea',
        'Sähköinen Kevyt Kupu'
    ],
    '🔦': [
        'Taskulamppu',
        'Lamppu',
        'Sähköinen Lamppu'
    ],
    '🏮': [
        'Punainen Paperi Lyhty',
        'Aasian Lyhty',
        'Japanilainen Lyhty',
        'Punainen Lyhty',
        'Izakaja Lyhty'
    ],
    '📦': [
        'Paketti',
        'Laatikko',
        'Paketti'
    ],
    '📇': [
        'Indeksoi Kortti',
        'Rolodeksi',
        'Järjestelmän Kortti',
        'Kortin Indeksi'
    ],
    '🕳️': ['Reikä'],
    '👁️‍🗨️': [
        'MINÄ OLEN Todistus',
        'Silmä puhetta Bubble'
    ],
    '⚜️': [
        'Fleur-de-lis',
        'Scoutit',
        'New Orleans Saints'
    ],
    '⚗️': ['Alembic'],
    '🕯️': ['Kynttilä'],
    '🖼️': [
        'Kehystetty Kuva',
        'Maalaus',
        'Kuvan Kehys',
        'Kehys kuvan kanssa'
    ],
    '🛍️': ['Ostoskassit'],
    '🎟️': ['Pääsylippuja'],
    '🛎️': ['Bellhop Bell'],
    '🧾': ['Kuitti'],
    '🧮': ['Abacus'],
    '🧫': ['Petri Ruoka'],
    '🧹': [
        'Lumi',
        'Siveli',
        'Pyyhkäise'
    ],
    '🎰': [
        'Paikka Kone',
        'Kasino',
        'Hedelmäkone',
        'Uhkapeli',
        'Pokeri Kone'
    ],
    '🦽': ['Manuaalinen Pyörätuoli'],
    '🦼': ['Moottoroitu Pyörätuoli'],
    '🪔': ['Diya Lamppu'],
    '🦯': ['White Cane'],
    '🩸': ['Veren pudotus'],
    '🩹': ['Liimaa Sandage'],
    '🩺': ['Stetoskooppi'],
    '🪶': ['Sulka'],
    '🪤': ['Hiiren Ansa'],
    '🫖': ['Teapot'],
    '🪨': ['Rock'],
    '🪵': ['Puu'],
    '🪄': ['Magic Wand'],
    '🔮': [
        'Crystal Ball',
        'Clairvoyant',
        'Fortune Teller',
        'Psychic',
        'Purple Crystal'
    ],
    '🪅': ['Tynttiäata'],
    '🪆': [
        'Nestävät Nuket',
        'Matryoshka'
    ],
    '🪡': ['Ompelulanka'],
    '🪢': ['Solmu'],
    '🪙': ['Kolikko'],
    '🪃': ['Boomerang'],
    '🪥': ['Hammasharja'],
    '🪦': ['Päänkivi'],
    '🪧': ['Placard'],
    '🪒': ['Razor']
};