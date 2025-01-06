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
        ':grinning:',
        ':grinning_face:',
        '::):',
        'Iloinen Kasvot',
        'Hymiö Kasvot'
    ],
    '😃': [
        'Grinning kasvot ja suuret silmät',
        ':smiley:',
        ':grinning_face_with_big_eyes:',
        '::D:',
        'Iloinen Kasvot',
        'Hymiö Kasvot',
        'Hymyilevä kasvot Open Mouth'
    ],
    '😄': [
        'Grinning kasvot hymyilevät silmät',
        ':smile:',
        ':grinning_face_with_smiling_eyes:',
        'Iloinen Kasvot',
        'Hymiö Kasvot',
        'Grinning Kasvot Ruiskuttamalla Silmät',
        'Hymyilevä kasvot suu- ja hymyilevillä silmillä'
    ],
    '😁': [
        'Beaming Face kanssa hymyilevät silmät',
        ':grin:',
        ':beaming_face_with_smiling_eyes:',
        'Grinning kasvot hymyilevät silmät'
    ],
    '😆': [
        'Grinning Jyrsivä Kasvot',
        ':grinning_squinting_face:',
        ':xD:',
        ':><:',
        'Iso Grin',
        'Suljetut Silmät -hymy',
        'Nauraa',
        'Grinning Kasvot Kireällä Suljetuilla Silmillä',
        'Hymyilevä kasvot suuaukolla ja tiukalla suljettuilla silmillä'
    ],
    '😅': [
        'Grinning kasvot hikoilla',
        ':happy_sweat:',
        'Liikunta',
        'Hyvää Hiki',
        'Grinning kasvot puristamalla silmät ja hikoilu Drop',
        'Hymyilemällä kasvot Open Mouth ja kylmä hikeä'
    ],
    '🤣': [
        'ROFL',
        ':rofl:',
        'Rullaa lattialla nauraa'
    ],
    '😂': [
        'Face kanssa Tears of Joy',
        ':lol:',
        'Nauraa',
        'Nauraa Itkemistä',
        'Nauraa Kynsiä',
        'LOL'
    ],
    '🙂': [
        'Hieman Hymyilevät Kasvot',
        ':smile:',
        '::):',
        'Hieman Onnellinen',
        'Tämä On Sakko'
    ],
    '🙃': [
        'Yläpuolella Alas Kasvot',
        ':upside-down_face:',
        ':upside_down_face:',
        'Sarcasm',
        'Silly',
        'Ylöspäin Alas Kasvot'
    ],
    '😉': [
        'Kasvojen Vetoaminen',
        ':winking:',
        ':;):',
        'Vie',
        'Vie Kasvot',
        'Winky Face'
    ],
    '😊': [
        'Hymyilevät kasvot hymyilevien silmien kanssa',
        ':smiling_face:',
        ':^^:',
        'Iloinen Kasvot',
        'Hymy',
        'Hymiö Kasvot'
    ],
    '😇': [
        'Hymyilevä kasvot Halon kanssa',
        ':smiling_angel:',
        'Enkeli',
        'Halo'
    ],
    '🥰': [
        'Hymyilevä kasvot sydämen kanssa',
        ':smiling_hearts:',
        'Rakkaudessa Kasvot',
        'Hymyilevät kasvot hymyilevillä silmillä ja kolmella sydämellä'
    ],
    '😍': [
        'Hymyilevä kasvot sydämen silmillä',
        'rakkaus',
        ':smiling_heart-eyes:',
        ':smiling_heart_eyes:',
        ':*.*:',
        'Sydän Silmät',
        'Sydän Kasvot',
        'Hymyilevä kasvot sydämen muotoisilla silmillä'
    ],
    '🤩': [
        'Tähtikuorma',
        ':star_eyes:',
        'Jännitetty',
        'Tähtien Silmät',
        'Tähti Eyed',
        'Wow Face',
        'Kasvot Starry Silmillä',
        'Grinning kasvot Star Eyesin kanssa'
    ],
    '😘': [
        'Kasvojen kyntä suudella',
        'rakkaus',
        ':kissing_face:',
        '::*:',
        '::-*:',
        'Blow Kiss',
        'Kirjoitettava Suudelma',
        'Suudella',
        'Kasvot Suudella heittäminen'
    ],
    '😗': [
        'Suudella Kasvolla',
        'suudella',
        ':kissing_face:',
        '::*:',
        '::-*:',
        'Ankan Kasvot',
        'Kissy Face',
        'Whistling'
    ],
    '☺️': [
        'Hymyilevä Kasvot',
        ':smiling_face:',
        'Iloinen Kasvot',
        'Hymiö Kasvot',
        'Hymy',
        'Valkoinen Hymyyttävä Kasvot'
    ],
    '😚': [
        'Kasvot suudella suljettujen silmien kanssa',
        ':kissing_face:',
        'Suudella Kasvot',
        'Kissy Face'
    ],
    '😙': [
        'Suudella kasvot hymyilevien silmien kanssa',
        ':kissing_face:',
        'Suudella Kasvot',
        'Kissy',
        'Vihellä',
        'Whistling'
    ],
    '😋': [
        'Kasvot Savoring Ruoka',
        ':savoring_face:',
        'Goofy',
        'Nälkäinen',
        'Hymyilevät Kasvojen Lisenssihuulet',
        'Face Säästää Herkullista Ruokaa',
        'Kumina Yum'
    ],
    '😛': [
        'Kasvot kielellä',
        ':tongue_face:',
        '::P:',
        'Cheeky',
        'Kielen Kasvot',
        'Kieli Ulos',
        'Kasvot Stuck-Out kielellä'
    ],
    '😜': [
        'Kasvot tuuletetaan kielellä',
        ':winking:',
        ':;P:',
        'Hullu',
        'Hullu Kasvot',
        'Vammoi Kasvot Stuck-Out Kieli',
        'Kasvot Stuck-Out kieli ja Winking silmä'
    ],
    '🤪': [
        'Zany Face',
        ':crazy_face:',
        'Hullu Silmät',
        'Jännitetty',
        'Luonnonvaraiset',
        'Goofy Face',
        'Grinning kasvot yhdellä suurella ja yhdellä pienellä silmällä'
    ],
    '😝': [
        'Ruiskutetaan kasvoja kielellä',
        ':tongue_face:',
        ':xP:',
        'Kieli Ulos',
        'Kasvot Stuck Out kieli ja tiukka suljettu silmät',
        'Kasvot Stuck-Out kielellä ja tiukalla suljetuilla silmillä'
    ],
    '🤑': [
        'Raha-Mouth Face',
        ':money-mouth_face:',
        ':money_mouth_face:',
        '::$:',
        'Dollarin Kylmäsilmät',
        'Raha Kasvot',
        'Rikas'
    ],
    '🤗': [
        'Hyljellä Kasvoa',
        ':hugging_face:',
        'Halaus',
        'Hyljellä',
        'Halatut',
        'Hyvää Kasvoa Hyljellä Kädet'
    ],
    '🤭': [
        'Hups',
        ':oops:',
        'Kasvot Hand Over Mouth',
        'Hymyilevä kasvot hymyilevien silmien ja käsikaton suuhun'
    ],
    '🤫': [
        'Shh',
        ':shushing_face:',
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
        ':thinking_face:',
        '?',
        'Hmm',
        'Ajatteleva Kasvot',
        'Chin Peukalo',
        'Ajattelija',
        'Heittää Varjo'
    ],
    '🤐': [
        'Postinumero',
        'hiljainen',
        'hiljaisuus',
        ':zip_face:',
        'Zipper-Mouth Kasvot',
        'Huulet Suljettu',
        'Sinetöidyt Huulet',
        'Postinumero',
        'Kasvot Vetoketju suuhun'
    ],
    '🤨': [
        'Kasvot koholla kulmakarva',
        ':face_with_raised_eyebrow:',
        'Colbert',
        'The Rock',
        'Kasvot Nousussa Kulma',
        'Kasvot yhdellä kulmakarmella koholla'
    ],
    '😐': [
        'Neutraali Kasvot',
        ':neutral_face:',
        ':|',
        'Kasvot Suoraan Suun',
        'Suoraan Pinnoitettu'
    ],
    '😑': [
        'Ilmeetön Kasvot',
        ':expressionless_face:',
        '-_-',
        'Kasvot Suoraan Suun',
        'Suora Kasvot'
    ],
    '😶': [
        'Kasvot Ilman Suun',
        ':face_without_mouth:',
        'Tyhjä Kasvot',
        'Mouthless',
        'Hiljaisuus',
        'Äänetön'
    ],
    '😏': [
        'Smirking Face',
        ':smirking_face:',
        'Flirttaus',
        'Seksuaalinen Kasvot',
        'Muistin Kasvot',
        'Ehdotettu Smile'
    ],
    '😒': [
        'Huvittelematon Kasvot',
        ':unamused_face:',
        'Lyhennetty',
        'Meh',
        'Sivusilmä',
        'Koskematon'
    ],
    '🙄': [
        'Kasvot pyörivillä silmillä',
        ':face_with_rolling_eye:',
        ':eye_roll:',
        'Silmien Rullaus'
    ],
    '😬': [
        'Grimacing Face',
        ':awkward:',
        'Awkward',
        'Eek',
        'Jalka Mounth',
        'Hermous',
        'Snapchat Mutual #1 Paras Ystävä'
    ],
    '🤥': [
        'Maa Kasvot',
        ':lying_face:',
        'Valo',
        'Pitkä Nenä',
        'Pinocchio'
    ],
    '😌': [
        'Nousittu Kasvot',
        ':relieved_face:',
        'Sisältö',
        'Miellyttävä'
    ],
    '😔': [
        'Anteeksi',
        ':sad_face:',
        'Pensive Face',
        'Pensiivinen',
        'Surullinen',
        'Sadface',
        'Surullinen',
        'Surullinen Pensive Face'
    ],
    '😪': [
        'Uni Kasvot',
        ':sleepy_face:',
        'Sivu-Revi',
        'Solmu Kupla'
    ],
    '🤤': [
        'Saliva',
        ':saliva_face:',
        'Drooling Face',
        'Drool'
    ],
    '😴': [
        'Nukkuva Kasvot',
        ':sleeping_face:',
        ':zzz:',
        'Zzz',
        'Uni Kasvot',
        'Kuorsaus',
        'Zzz Face'
    ],
    '🥱': [
        'Yawning Face',
        'väsynyt',
        ':yawning_face:'
    ],
    '😷': [
        'Kasvot lääketieteellisen naamio',
        'sairas',
        'doc',
        ':face_with_medical_mask:',
        'Koronavirus',
        'COVID-19',
        'Maskin Kasvot',
        'Kirurginen Maski',
        'ill'
    ],
    '🤒': [
        'Kasvot lämpömittarin kanssa',
        ':face_with_thermometer:',
        ':sick:',
        ':ill:',
        'Ill',
        'Sairas'
    ],
    '🤕': [
        'Kasvot pääsiimalla',
        'sairaala',
        'sairas',
        ':face_with_head-bandage:',
        ':face_with_head_bandage:',
        'Silmukka Päätä',
        'kömpelö',
        'Injured',
        'ill'
    ],
    '🤢': [
        'Pahoinvoitu Kasvot',
        'sairas',
        ':nauseated_face:',
        'Hämmästyttää',
        'Vihreä Kasvot',
        'Vomit',
        ':green:',
        'ill'
    ],
    '🤮': [
        'Face Oksentelu',
        'sairas',
        ':face_vomiting:',
        'Spew',
        'Bleah',
        'Bleurgh',
        'Yuk',
        'Yuck',
        'Ew',
        'Spew',
        'Heittää Ylöspäin',
        'Vomit',
        'Kasvot Open Mouth Oksentelu',
        'ill'
    ],
    '🤧': [
        'Aivastelu Kasvot',
        'sairas',
        ':sneezing_face:',
        'Gesundheit',
        'ill'
    ],
    '🥵': [
        'Kuumat Kasvot',
        ':hot_face:',
        'Ylikuumentunut Kasvot',
        ':red:'
    ],
    '🥶': [
        'Kylmä Kasvot',
        ':cold_face:',
        'Viileä',
        'Maustepippuri',
        'Jäätävää Kasvoa',
        ':blue:'
    ],
    '🥴': [
        'Woozy Face',
        ':woozy_face:',
        'Pudota Kasvot',
        'Kasvot epätasainen silmät ja Wavy Mouth'
    ],
    '😵': [
        'Dizzy Face',
        ':dizzy_face:',
        'Silmät Kasvot',
        'Spiral Silmät Kasvot'
    ],
    '🤯': [
        'Räjähtävä Päähaara',
        'puomi',
        ':exploding_head:',
        'Mieli Blown',
        'Shocked Face with Exploding Head'
    ],
    '🤠': [
        'Cowboy Hattu Kasvot',
        ':cowboy_hat_face:',
        'Cowboy',
        'Cowboy Face',
        'Kasvot Cowboy Hat'
    ],
    '🥳': [
        'Juhliminen Kasvot',
        ':partying_face:',
        'Juhlien Kasvot',
        'Kasvot puolueen sarvi ja Party Hat'
    ],
    '😎': [
        'Hymyilevä kasvot aurinkolasit',
        ':smiling_face_with_sunglasses:',
        'Viileä',
        'Keskinäiset Parhaat Ystävät (Snapchat)',
        'Aurinkolasit'
    ],
    '🤓': [
        'Nörtti Kasvot',
        ':nerd_face:',
        'Nerdy'
    ],
    '🧐': [
        'Kasvot Monoclella',
        ':face_with_monocle:'
    ],
    '😕': [
        'Hämmentynyt Kasvot',
        ':confused_face:',
        '::/:',
        '::S:',
        'Nonplusoimaton',
        'Päihtynyt'
    ],
    '😟': [
        'Huolestunut Kasvot',
        ':worried_face:',
        '::(:',
        'Surullinen',
        'Sadface'
    ],
    '🙁': [
        'Hieman Heittävät Kasvot',
        ':slightly_frowning_face:',
        '::(:',
        'Hieman Surullinen'
    ],
    '☹️': [
        'Frowning Face',
        ':frowning_face:',
        '::(:',
        'Megafrown',
        'Valkoinen Frowning Face'
    ],
    '😮': [
        'Vauva',
        ':wow:',
        '::O:',
        'Voi minä!',
        'Kasvot Open Mouth',
        'Avaa Etelä',
        'Yllättynyt Kasvot Open Mouth'
    ],
    '😯': [
        'Husettu Kasvot',
        ':husked_face:',
        '::O:',
        'Yllätys',
        'Yllättynyt Kasvot'
    ],
    '😲': [
        'Shocked Face',
        ':shocked_face:',
        '::O:',
        'Vauva',
        'Kiillotettu Kasvot',
        'Pudota Kasvot',
        'Kaasuputki Kasvot'
    ],
    '😳': [
        'Punoitettu Kasvot',
        ':flushed_face:',
        '::$:',
        'Punoitus Kasvot',
        'Irrotettu',
        'Häpeä',
        'Kasvot Leveällä Avoimella Silmällä'
    ],
    '🥺': [
        'Pleading Face',
        ':pleading_face:',
        '::(:',
        'Begging',
        'Kiiltävät Silmät',
        'Simp',
        'Kasvot nautinnollisilla silmillä'
    ],
    '😦': [
        'Frowning Face kanssa Open Mouth',
        ':frowning_face_with_open_mouth:',
        ':D::',
        'Yawning'
    ],
    '😧': [
        'Anguished Face',
        ':anguished_face:',
        ':anguished:',
        ':D::',
        'Pained Face'
    ],
    '😨': [
        'Pelottava',
        ':scared:',
        ':D::',
        'Pelkkä Kasvot',
        'Yllättynyt'
    ],
    '😰': [
        'Hauska kasvot hiivalla',
        ':anxious_face_with_sweat:',
        'Siniset Kasvot',
        'Aiheutetut Kasvot',
        'Hermostolliset Kasvot',
        'Kasvot Open Mouth ja kylmä hikeä'
    ],
    '😥': [
        'Surullinen mutta varjellut kasvot',
        ':sad_but_relieved_face:',
        '::(:',
        'Kulmakarvat',
        'Pettynyt, mutta varjellut kasvot'
    ],
    '😢': [
        'Itkeminen Kasvot',
        ':crying_face:',
        '::(:',
        'Yritetään',
        'Revi'
    ],
    '😭': [
        'Loukkaava Kasvot',
        ':loudly_crying_face:',
        'Bawling',
        'Yritetään',
        'Surulliset Kyyneleet',
        'Sobbing'
    ],
    '😱': [
        'Kasvojen huutuminen pelossa',
        ':face_screaming_in_fear:',
        'Koti Yksin',
        'Kierrä',
        'Näytön Kasvot'
    ],
    '😖': [
        'Kasvot Perustettu',
        ':confounded_face:',
        'Quivering Mouth',
        'Rajoitettu Kasvot'
    ],
    '😣': [
        'Jatkuva Kasvot',
        ':persevering_face:',
        'Helpoton Kasvot',
        'Rajoitetut Silmät'
    ],
    '😞': [
        'Pettynyt Kasvot',
        ':disappointed_face:',
        '::(:',
        'Surullinen',
        'Sadface'
    ],
    '😓': [
        'Downcast Face with Sweat',
        ':downcast_face_with_sweat:',
        'Kova Työ',
        'Surullinen Hiki Kasvot',
        'Kasvot kylmällä hiivalla'
    ],
    '😩': [
        'Weary Face',
        ':weary_face:',
        'Taistele Kasvot',
        'Herätys'
    ],
    '😫': [
        'Väsyneet Kasvot',
        ':tired_face:',
        'Exhasted',
        'Fed Ylös',
        'Taistele Kasvot'
    ],
    '😤': [
        'Kasvot Steam-kasvista nenästä',
        ':face_with_steam_from_nose:',
        'Epäkohtien ileminen',
        'Turhautunut',
        'Hullu Kasvot',
        'Höyryttäminen',
        'Huffing Anger Face'
    ],
    '😡': [
        'Kiinnitä Kasvot',
        'fuck',
        ':pouting_face:',
        'Vihainen Kasvot',
        'Grumpy Face',
        'Hullu Kasvot',
        'Punaiset Kasvot',
        ':red:'
    ],
    '😠': [
        'Vihainen Kasvot',
        ':angry_face:',
        'Vihainen',
        'Grumpy Face'
    ],
    '🤬': [
        'Kierretään',
        'fuck',
        ':swearing:',
        '@#$%&!',
        'Kasvot ja symbolit suun',
        'Hoitotyö',
        'Nostetaan',
        'Grawlix',
        'Kasvot Symbolit Yli Suun',
        'Vakava kasvot symbolit kaareva Suun',
        ':red:'
    ],
    '🥲': [
        'Hymyilevä kasvot ja repeämä',
        ':smiling_face_with_tear:'
    ],
    '😮‍💨': [
        'Kasvojen Hengittäminen',
        ':face_exhaling:',
        'Reisi'
    ],
    '😵‍💫': [
        'Kasvot spiraalisten silmien kanssa',
        ':face_with_spiral_eyes:',
        'Dizzy Face'
    ],
    '😶‍🌫️': [
        'Kasvot pilvissä',
        'savua',
        ':face_in_clouds:',
        'Brain Fog',
        'Unohtuisa',
        'Sumua'
    ],
    '🥸': [
        'Peitetyt Kasvot',
        ':disguised_face:'
    ],
    '🫠': [
        'Sulaminen Kasvot',
        ':melting_face:'
    ],
    '🫢': [
        'Kasvot Open Eyes ja käsi yli Etelä',
        ':face_with_open_eyes_and_hand_over_mouth:'
    ],
    '🫣': [
        'Kasvot Peekingin silmän kanssa',
        ':face_with_peeking_eye:'
    ],
    '🫡': [
        'Tervehdys Kasvot',
        ':saluting_face:',
        'Sotilaallinen',
        'Armeija',
        'RAF',
        'Laiva'
    ],
    '🫥': [
        'Pisteviiva Kasvot',
        ':dotted_line_face:',
        ':transparent:'
    ],
    '🫤': [
        'Kasvot diagonaalisen suun kanssa',
        ':face_with_diagonal_mouth:'
    ],
    '🥹': [
        'Kasvot Pidossa Taaksepäin',
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
        'Hymyilevä kasvot sarvten kanssa',
        ':smiling_face_with_horns:',
        'Devil',
        'Paha Sarvet',
        'Onnellinen Paholainen',
        'Violetti Paholainen',
        'Punainen Paholainen',
        ':purple:'
    ],
    '👿': [
        'Vihainen kasvot sarvten kanssa',
        ':angry_face_with_horns:',
        'Devil',
        'Paha Sarvet',
        'Violetti Paholainen',
        'Violetti Goblin',
        'Surullinen Paholainen',
        'Imp',
        ':purple:'
    ],
    '🤡': [
        'Kapina Kasvot',
        ':clown_face:',
        'Karmea Myrkkyä',
        'Paha Kynttilä',
        'Pelottava Kapina'
    ],
    '👽': [
        'Ulkomaalainen',
        ':alien:',
        'ET'
    ],
    '👾': [
        'Ulkomaalainen hirviö',
        ':alien_monster:',
        'Avaruusturva',
        'Videopeli Hirviö'
    ],
    '🤖': [
        'Robot',
        ':robot:',
        'Robottien Kasvot'
    ],
    '👹': [
        'Ogre',
        ':ogre:',
        'Maskin Kasvot',
        'Oni',
        'Punainen hirviö',
        'Japanilainen Ogre',
        ':red:'
    ],
    '👻': [
        'Ghost',
        ':ghost:',
        'Halloween'
    ],
    '🗣️': [
        'Puhuva Pää',
        ':speaking_head:',
        'Mansplaining',
        'Shout',
        'Huutaa',
        'Puhuminen Head in Silhouette',
        ':blue:'
    ],
    '👤': [
        'Bust in Silhouette',
        ':bust_in_silhouette:',
        'Varjo',
        'Silhouette',
        'Käyttäjä',
        'Henkilön siluetti',
        ':blue:'
    ],
    '🫂': [
        'Ihmiset Halaavat',
        ':people_hugging:',
        ':blue:'
    ],
    '👥': [
        'Busts in Silhouette',
        ':busts_in_silhouette:',
        'Varjot',
        'Silhouettes',
        'Käyttäjät',
        'Kahden ihmisen siluetti',
        ':blue:'
    ]
};
/*people*/
emojis_language[lang][3] = {
    '👶{{skin_tone}}': [
        'Vauva',
        ':baby:',
        'Lapsi',
        'Toddler'
    ],
    '🧒{{skin_tone}}': [
        'Lapsi',
        ':child:',
        'Sukupuoli Neutraali Lapsi'
    ],
    '👧{{skin_tone}}': [
        'Tyttö',
        ':girl:',
        ':woman:'
    ],
    '🧑{{skin_tone}}': [
        'Henkilö',
        ':person:',
        'Sukupuolen Neutraali Aikuinen',
        'Aikuinen',
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
        'Henkilö: Punainen Hiukset',
        ':person_red_hair:',
        'Inkivääri Henkilö',
        'Henkilö Punapää',
        'Henkilö Punaisella Hiudella',
        ':person:'
    ],
    '🧑{{skin_tone}}‍🦱': [
        'Henkilö: Hiukset',
        ':person_curly_hair:',
        'Henkilö Curly Hair',
        ':person:'
    ],
    '🧑{{skin_tone}}‍🦳': [
        'Henkilö: Valkoiset Hiukset',
        ':person_white_hair:',
        'Henkilö Harmaa Hiusten Kanssa',
        ':person:'
    ],
    '🧑{{skin_tone}}‍🦲': [
        'Henkilö: Kalju',
        ':person_bald:',
        'Henkilö Ei Hiuksia',
        ':person:'
    ],
    '👱{{skin_tone}}': [
        'Henkilö: Blond Hiukset',
        ':person_blond_hair:',
        'Henkilö Blonden Hiusten Kanssa',
        ':person:'
    ],
    '👨{{skin_tone}}': [
        'Mies',
        ':man:',
        'Mies',
        'Moustache Man',
        ':man:'
    ],
    '🧔{{skin_tone}}‍♂️': [
        'Mies: Karkea',
        ':man_beard:',
        'Koru',
        'Suunta Mies',
        'Suunta Henkilö',
        ':man:'
    ],
    '👨{{skin_tone}}‍🦰': [
        'Mies: Punainen Hiukset',
        ':man_red_hair:',
        'Inkivääri Mies',
        'Man Redhead',
        'Mies Punaisella Hiudella',
        ':man:'
    ],
    '👨{{skin_tone}}‍🦱': [
        'Mies: Curly Hiukset',
        ':man_curly_hair:',
        'Mies Curly Hiusten Kanssa',
        ':man:'
    ],
    '👨{{skin_tone}}‍🦳': [
        'Mies: Valkoiset Hiukset',
        ':man_white_hair:',
        'Mies Harmaan Hiusten Kanssa',
        ':man:'
    ],
    '👨{{skin_tone}}‍🦲': [
        'Miehet: Kalju',
        ':man_bald:',
        'Mies Ei Hiuksia',
        ':man:'
    ],
    '👱{{skin_tone}}‍♂️': [
        'Mies: Blond Hair',
        ':man_blond_hair:',
        'Mies Kanssa Blondi Hiukset',
        ':man:'
    ],
    '👩{{skin_tone}}': [
        'Nainen',
        ':woman:',
        'Nainen',
        'Lady',
        'Keltainen Nainen',
        ':woman:'
    ],
    '🧔{{skin_tone}}‍♀️': [
        'Nainen: Suunta',
        ':woman_beard:',
        'Koru',
        'Korkea Nainen',
        ':woman:'
    ],
    '👩{{skin_tone}}‍🦰': [
        'Nainen: Punainen Hius',
        ':woman_red_hair:',
        'Inkivääri Nainen',
        'Woman Redhead',
        'Nainen Punaisella Hiudella',
        ':woman:'
    ],
    '👩{{skin_tone}}‍🦱': [
        'Nainen: kihara Hiukset',
        ':woman_curly_hair:',
        'Nainen Curly Hair',
        ':woman:'
    ],
    '👩{{skin_tone}}‍🦳': [
        'Nainen: Valkoinen Hiukset',
        ':woman_white_hair:',
        'Nainen Harmaa Hiukset',
        ':woman:'
    ],
    '👩{{skin_tone}}‍🦲': [
        'Nainen: Kalju',
        ':woman_bald:',
        'Nainen Ei Hiuksia',
        ':woman:'
    ],
    '👱{{skin_tone}}‍♀️': [
        'Nainen: Blond Hair',
        ':woman_blond_hair:',
        'Nainen Blondi Hiukset',
        ':woman:'
    ],
    '👴{{skin_tone}}': [
        'Vanhempi Mies',
        ':older_man:',
        ':older:',
        'Iäkkäät Mies',
        'Grandpa',
        'Vanha Mies',
        ':man:'
    ],
    '👵{{skin_tone}}': [
        'Vanhempi Nainen',
        ':older_woman:',
        ':older:',
        'Iäkkäät Nainen',
        'Isoäiti',
        'Nanna',
        'Vanha Lady',
        'Vanha Nainen',
        ':woman:'
    ],
    '🧓{{skin_tone}}': [
        'Vanhempi Henkilö',
        ':older_person:',
        ':older:',
        'Sukupuolen Neutraali Vanhemmat Aikuiset',
        ':person:'
    ],
    '👼{{skin_tone}}': [
        'Vauvan Enkeli',
        ':baby_angel:',
        'Enkeli',
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
        'Henkilö Joulu',
        ':person:'
    ],
    '🤴{{skin_tone}}': [
        'Prinssi',
        ':price:',
        ':man:'
    ],
    '👸{{skin_tone}}': [
        'Prinsessa',
        ':pricess:',
        'Blondi Tyttö',
        'Tyttö Crown',
        'Tyttö Tiaran Kanssa',
        ':woman:'
    ],
    '🫅{{skin_tone}}': [
        'Henkilö jolla on kruunu',
        ':person_with_crown:',
        ':person:'
    ],
    '👳{{skin_tone}}‍♂️': [
        'Mies Käyttää Turbania',
        ':man_wearing_turban:',
        ':wearing_turban:',
        'Arabialainen',
        'Muslimi',
        'Sikh',
        'Turbaani',
        ':man:'
    ],
    '👳{{skin_tone}}‍♀️': [
        'Nainen Käyttää Turbania',
        ':woman_wearing_turban:',
        ':wearing_turban:',
        'Arabialainen',
        'Muslimi',
        'Sikh',
        'Turbaani',
        ':woman:'
    ],
    '👳{{skin_tone}}': [
        'Henkilö Käyttää Turbania',
        ':person_wearing_turban:',
        ':wearing_turban:',
        'Arabialainen',
        'Muslimi',
        'Sikh',
        'Turbaani',
        ':person:'
    ],
    '👲{{skin_tone}}': [
        'Henkilö Skullcapin Kanssa',
        ':person_with_skullcap:',
        'Aasialainen Mies',
        'Mies Kiinalaisen Suojan Kanssa',
        'Man with Gua Pi Mao',
        ':person:'
    ],
    '🧕{{skin_tone}}': [
        'Naiset, joilla on huivi',
        ':woman_with_headscarf:',
        'Hijab',
        'Henkilö jolla on huivi',
        ':woman:'
    ],
    '🤵{{skin_tone}}‍♀️': [
        'Tuxedon mies',
        ':man_in_tuxedo:',
        ':tuxedo:',
        'Groom',
        'Mies Maassa',
        'Häät',
        ':man:'
    ],
    '🤵{{skin_tone}}‍♂️': [
        'Nainen Tuxedossa',
        ':woman_in_tuxedo:',
        ':tuxedo:',
        'Groom',
        'Nainen Puvussa',
        'Häät',
        ':woman:'
    ],
    '🤵{{skin_tone}}': [
        'Tuxedossa oleva henkilö',
        ':person_in_tuxedo:',
        ':tuxedo:',
        'Groom',
        'Henkilö Puku',
        'Häät',
        ':person:'
    ],
    '👰{{skin_tone}}‍♂️': [
        'Miehen kanssa Veilissä',
        ':man_with_veil:',
        ':veil:',
        'Häät',
        'Sulhanen',
        'Avioliitto',
        ':man:'
    ],
    '👰{{skin_tone}}‍♀️': [
        'Nainen kanssa Veilin',
        ':woman_with_veil:',
        ':veil:',
        'Häät',
        'Morsian',
        'Morsian Veilin kanssa',
        'Avioliitto',
        ':woman:'
    ],
    '👰{{skin_tone}}': [
        'Henkilö Veilin Kanssa',
        ':person_with_veil:',
        ':veil:',
        'Häät',
        'Avioliitto',
        ':person:'
    ],
    '👨{{skin_tone}}‍🍼': [
        'Ihmisen Ruokinta Vauva',
        ':man_feeding_baby:',
        ':feeding_baby:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🍼': [
        'Naisen Ruokinta Vauva',
        ':woman_feeding_baby:',
        ':feeding_baby:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🍼': [
        'Henkilön Ruokinta Vauva',
        ':person_feeding_baby:',
        ':feeding_baby:',
        ':person:'
    ],
    '🥷': [
        'Ninja',
        ':ninja:'
    ],
    '🫃{{skin_tone}}': [
        'Raskaana Oleva Mies',
        ':pregnant_man:',
        ':pregnant:',
        'Raskaus',
        ':man:'
    ],
    '🤰{{skin_tone}}': [
        'Raskaana Oleva Nainen',
        ':pregnant_woman:',
        ':pregnant:',
        'Raskaus',
        'Raskaana Oleva Nainen',
        ':woman:'
    ],
    '🫄{{skin_tone}}': [
        'Raskaana Oleva Henkilö',
        ':pregnant_person:',
        ':pregnant:',
        'Raskaus',
        ':person:'
    ],
    '🤱{{skin_tone}}': [
        'Breast-Feeding',
        ':breast-feeding:',
        ':breast_feeding:',
        'Breastfeeding'
    ],
    '🦸{{skin_tone}}‍♂️': [
        'Man Supersankari',
        ':man_superhero:',
        ':superhero:',
        ':man:'
    ],
    '🦸{{skin_tone}}‍♀️': [
        'Nainen Supersankari',
        ':woman_superhero:',
        ':superhero:',
        ':woman:'
    ],
    '🦸{{skin_tone}}': [
        'Henkilö Supersankari',
        ':person_superhero:',
        ':superhero:',
        ':person:'
    ],
    '🦹{{skin_tone}}‍♂️': [
        'Mies Supervillain',
        ':man_supervillain:',
        ':supervillain:',
        ':man:'
    ],
    '🦹{{skin_tone}}‍♀️': [
        'Nainen Supervillain',
        ':woman_supervillain:',
        ':supervillain:',
        ':woman:'
    ],
    '🦹{{skin_tone}}': [
        'Henkilö Supervillain',
        ':person_supervillain:',
        ':supervillain:',
        ':person:'
    ],
    '🧙{{skin_tone}}‍♂️': [
        'Miehen Mage',
        ':man_mage:',
        ':mage:',
        'Sorcerer',
        'Velho',
        ':man:'
    ],
    '🧙{{skin_tone}}‍♀️': [
        'Nainen Mage',
        ':woman_mage:',
        ':mage:',
        'Noita',
        'Surullisuus',
        'Velho',
        ':woman:'
    ],
    '🧙{{skin_tone}}': [
        'Henkilö Mage',
        ':person_mage:',
        ':mage:',
        'Velho',
        ':mage:',
        ':person:'
    ],
    '🧚{{skin_tone}}‍♂️': [
        'Mies Fairy',
        ':man_fairy:',
        ':fairy:',
        ':man:'
    ],
    '🧚{{skin_tone}}‍♀️': [
        'Nainen Fairy',
        ':woman_fairy:',
        ':fairy:',
        ':woman:'
    ],
    '🧚{{skin_tone}}': [
        'Henkilö Fairy',
        ':person_fairy:',
        ':fairy:',
        ':person:'
    ],
    '🧛{{skin_tone}}‍♂️': [
        'Man Vampyyri',
        ':man_vampire:',
        ':vampire:',
        'Dracula',
        ':man:'
    ],
    '🧛{{skin_tone}}‍♀️': [
        'Nainen Vampyyri',
        ':woman_vampire:',
        ':vampire:',
        ':woman:'
    ],
    '🧛{{skin_tone}}': [
        'Henkilö Vampyyri',
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
        'Merenneito',
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
        'Miehen Elf',
        ':man_elf:',
        ':elf:',
        ':man:'
    ],
    '🧝{{skin_tone}}‍♀️': [
        'Nainen Härkä',
        ':woman_elf:',
        ':elf:',
        ':woman:'
    ],
    '🧝{{skin_tone}}': [
        'Henkilö Elf',
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
        'Henkilö Genie',
        ':person_genie:',
        ':genie:',
        ':person:'
    ],
    '🕵️{{skin_tone}}‍♂️': [
        'Man Detective',
        ':man_detective:',
        ':detective:',
        'Yksityinen Silmä',
        'Sleuth',
        'Vakooja',
        'Man Sleuth',
        'Sleuto tai vakooja',
        '007',
        'Tarkastaja',
        ':man:'
    ],
    '🕵️{{skin_tone}}‍♀️': [
        'Nainen Havaitseva',
        ':woman_detective:',
        ':detective:',
        'Yksityinen Silmä',
        'Sleuth',
        'Vakooja',
        'Naisen SleuthName',
        'Sleuto tai vakooja',
        '007',
        'Tarkastaja',
        ':woman:'
    ],
    '🕵{{skin_tone}}': [
        'Henkilö Havaitseva',
        ':person_detective:',
        ':detective:',
        'Yksityinen Silmä',
        'Sleuth',
        'Vakooja',
        'Henkilö Sleuth',
        'Sleuto tai vakooja',
        '007',
        'Tarkastaja',
        ':person:'
    ],
    '💂{{skin_tone}}‍♂️': [
        'Mies: Vartija',
        ':man_guard:',
        ':guard:',
        'Brittiläinen Guardsman',
        'Jalkojen Suojaus',
        ':man:'
    ],
    '💂{{skin_tone}}‍♀️': [
        'Nainen: Guard',
        ':woman_guard:',
        ':guard:',
        'Brittiläinen Guardsman',
        'Jalkojen Suojaus',
        ':woman:'
    ],
    '💂{{skin_tone}}': [
        'Henkilö: Vartija',
        ':person_guard:',
        ':guard:',
        'Brittiläinen Guardsman',
        'Jalkojen Suojaus',
        ':person:'
    ],
    '👮{{skin_tone}}‍♂️': [
        'Poliisin Päällikkö',
        ':man_police_officer:',
        ':police_officer:',
        'Cop',
        'Poliisi',
        'Poliisi',
        ':man:'
    ],
    '👮{{skin_tone}}‍♀️': [
        'Naisen Poliisin Toimittaja',
        ':woman_police_officer:',
        ':police_officer:',
        'Cop',
        'Poliisi',
        'Poliisi',
        ':woman:'
    ],
    '👮{{skin_tone}}': [
        'Poliisin Päällikkö',
        ':person_police_officer:',
        ':police_officer:',
        'Cop',
        'Poliisi',
        ':person:'
    ],
    '👨{{skin_tone}}‍🚒': [
        'Mies Palomiehen',
        ':man_firefighter:',
        ':firefighter:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🚒': [
        'Nainen Palomiehen',
        ':woman_firefighter:',
        ':firefighter:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🚒': [
        'Henkilö Palomiehen',
        ':person_firefighter:',
        ':firefighter:',
        ':person:'
    ],
    '👨{{skin_tone}}‍✈️': [
        'Miehen Pilotti',
        ':man_pilot:',
        ':pilot:',
        ':man:'
    ],
    '👩{{skin_tone}}‍✈️': [
        'Nainen Pilot',
        ':woman_pilot:',
        ':pilot:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍✈️': [
        'Henkilö Pilot',
        ':person_pilot:',
        ':pilot:',
        ':person:'
    ],
    '👨{{skin_tone}}‍💻': [
        'Man Technologist',
        ':man_technologist:',
        ':technologist:',
        'Man Technologist',
        ':man:'
    ],
    '👩{{skin_tone}}‍💻': [
        'Naisen Teknologia',
        ':woman_technologist:',
        ':technologist:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍💻': [
        'Henkilön Teknologia',
        ':person_technologist:',
        ':technologist:',
        ':person:'
    ],
    '👨{{skin_tone}}‍🎤': [
        'Miehen Laulaja',
        ':man_singer:',
        ':singer:',
        'Bowie',
        'Aladdin Sane',
        ':man:'
    ],
    '👩{{skin_tone}}‍🎤': [
        'Nainen Laulaja',
        ':woman_singer:',
        ':singer:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🎤': [
        'Henkilö Laulaja',
        ':person_singer:',
        ':singer:',
        ':person:'
    ],
    '👨{{skin_tone}}‍🎨': [
        'Man Artisti',
        ':man_artist:',
        ':artist:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🎨': [
        'Nainen Esittäjä',
        ':woman_artist:',
        ':artist:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🎨': [
        'Henkilön Esittäjä',
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
        'Naisen Rakennustyöntekijä',
        ':woman_contruction_worker:',
        ':contruction_worker:',
        ':woman:'
    ],
    '👷{{skin_tone}}': [
        'Henkilö Rakennustyöntekijä',
        ':person_contruction_worker:',
        ':contruction_worker:',
        ':person:'
    ],
    '👨{{skin_tone}}‍🚀': [
        'Mies Astronaut',
        ':man_astronaut:',
        ':astronaut:',
        'Man Cosmonaut',
        ':man:'
    ],
    '👩{{skin_tone}}‍🚀': [
        'Nainen Astronaut',
        ':woman_astronaut:',
        ':astronaut:',
        'Nainen Cosmonaut',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🚀': [
        'Henkilö Astronaut',
        ':person_astronaut:',
        ':astronaut:',
        'Henkilö Cosmonaut',
        ':person:'
    ],
    '👨{{skin_tone}}‍🔬': [
        'Miehen Tutkija',
        ':man_scientist:',
        ':scientist:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🔬': [
        'Naisen Tutkija',
        ':woman_scientist:',
        ':scientist:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🔬': [
        'Henkilö Tutkija',
        ':person_scientist:',
        ':scientist:',
        ':person:'
    ],
    '👨{{skin_tone}}‍💼': [
        'Man Office Worker',
        ':man_office_worker:',
        ':office_worker:',
        'Toimitusjohtaja',
        'Liikemies',
        ':man:'
    ],
    '👩{{skin_tone}}‍💼': [
        'Naisen Toimistotyöntekijä',
        ':woman_office_worker:',
        ':office_worker:',
        'Yrittäjä',
        'Toimitusjohtaja',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍💼': [
        'Henkilön Toimistotyöntekijä',
        ':person_office_worker:',
        ':office_worker:',
        'Liiketoiminta',
        'Toimitusjohtaja',
        ':person:'
    ],
    '👨{{skin_tone}}‍🏭': [
        'Man Factory Worker',
        ':man_factory_worker:',
        ':factory_worker:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🏭': [
        'Naisen Tehdastyöntekijä',
        ':woman_factory_worker:',
        ':factory_worker:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🏭': [
        'Henkilö Tehtaantyöntekijä',
        ':person_factory_worker:',
        ':factory_worker:',
        ':person:'
    ],
    '👨{{skin_tone}}‍🔧': [
        'Man Mekaniikka',
        ':man_mechanic:',
        ':mechanic:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🔧': [
        'Nainen Mekaaninen',
        ':woman_mechanic:',
        ':mechanic:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🔧': [
        'Henkilö Mekaaninen',
        ':person_mechanic:',
        ':mechanic:',
        ':person:'
    ],
    '👨{{skin_tone}}‍🍳': [
        'Mies Cook',
        ':man_cook:',
        ':cook:',
        'Miehen Kokki',
        'Miehen Kokki',
        ':man:'
    ],
    '👩{{skin_tone}}‍🍳': [
        'Nainen Kypsä',
        ':woman_cook:',
        ':cook:',
        'Nainen Kokki',
        'Naisen Kokki',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🍳': [
        'Henkilö Cook',
        ':person_cook:',
        ':cook:',
        'Henkilön Kokki',
        ':person:'
    ],
    '👨{{skin_tone}}‍🌾': [
        'Mies Viljelijä',
        ':man_farmer:',
        ':farmer:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🌾': [
        'Nainen Maanviljelijä',
        ':woman_farmer:',
        ':farmer:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🌾': [
        'Henkilö Maanviljelijä',
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
        'Ihmisen Opiskelija',
        ':man_student:',
        ':student:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🎓': [
        'Nainen Opiskelija',
        ':woman_student:',
        ':student:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🎓': [
        'Henkilö Opiskelija',
        ':person_student:',
        ':student:',
        ':person:'
    ],
    '👨{{skin_tone}}‍⚕️': [
        'Miehen Terveystyöntekijä',
        ':man_health_worker:',
        ':health_worker:',
        'Miehen Lääkäri',
        'Mies Sairaanhoitaja',
        ':man:'
    ],
    '👩{{skin_tone}}‍⚕️': [
        'Nainen Terveydenhuollon Työntekijä',
        ':woman_health_worker:',
        ':health_worker:',
        'Naisen Lääkäri',
        'Naisen Sairaanhoitaja',
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
        'Mies Kuivuminen',
        ':man_shrugging:',
        ':shrugging:',
        'idk mies',
        'dunno',
        ':man:'
    ],
    '🤷{{skin_tone}}‍♀️': [
        'Nainen Kuivuminen',
        ':woman_shrugging:',
        ':shrugging:',
        'idk nainen',
        'dunno',
        ':woman:'
    ],
    '🤷{{skin_tone}}': [
        'Henkilö Kuivuminen',
        ':person_shrugging:',
        ':shrugging:',
        'idk henkilö',
        'dunno',
        ':person:'
    ],
    '🤦{{skin_tone}}‍♂️': [
        'Ihmisen Kasvopalmulointi',
        ':man_facepalming:',
        ':facepalming:',
        ':man:'
    ],
    '🤦{{skin_tone}}‍♀️': [
        'Nainen Facepalming',
        ':woman_facepalming:',
        ':facepalming:',
        ':woman:'
    ],
    '🤦{{skin_tone}}': [
        'Henkilö Kasvot',
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
        'Henkilö Soutaminen',
        ':person_bowing:',
        ':bowing:',
        ':person:'
    ],
    '🧏{{skin_tone}}‍♂️': [
        'Deaf Man',
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
        'Deaf Henkilö',
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
        'Nainen Nousu Käsi',
        ':woman_raising_hand:',
        'Onnellinen Nainen Nousu Yksi Käsi',
        ':raising_hand:',
        ':woman:'
    ],
    '🙋{{skin_tone}}': [
        'Henkilö Käden Nousu',
        ':person_raising_hand:',
        'Iloinen Henkilö Yhdelle Kädelle',
        ':raising_hand:',
        ':person:'
    ],
    '💁{{skin_tone}}‍♂️': [
        'Miehen Tippaus Käsi',
        ':man_tipping_hand:',
        'Information Desk Man',
        ':tipping_hand:',
        ':man:'
    ],
    '💁{{skin_tone}}‍♀️': [
        'Naisen Tippaus Käsi',
        ':woman_tipping_hand:',
        'Information Desk Nainen',
        ':tipping_hand:',
        ':woman:'
    ],
    '💁{{skin_tone}}': [
        'Henkilö Tippaus Käsi',
        ':person_tipping_hand:',
        'Tietopisteen Henkilö',
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
        'Nainen Eletään OK',
        ':woman_gesturing_ok:',
        ':gesturing_ok:',
        ':woman:'
    ],
    '🙆{{skin_tone}}': [
        'Henkilö Eleet OK',
        ':person_gesturing_ok:',
        ':gesturing_ok:',
        ':person:'
    ],
    '🙅{{skin_tone}}‍♂️': [
        'Miehen Ele Ei',
        ':man_gesturing_no:',
        ':gesturing_no:',
        ':man:'
    ],
    '🙅{{skin_tone}}‍♀️': [
        'Naisen Eleen Ei',
        ':woman_gesturing_no:',
        ':gesturing_no:',
        ':woman:'
    ],
    '🙅{{skin_tone}}': [
        'Henkilö Eleen Nro',
        ':person_gesturing_no:',
        ':gesturing_no:',
        ':person:'
    ],
    '🙎{{skin_tone}}‍♂️': [
        'Miehen Kiinnitys',
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
        'Henkilö Suunta',
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
        'Nainen Frowning',
        ':woman_frowining:',
        ':frowining:',
        ':woman:'
    ],
    '🙍{{skin_tone}}': [
        'Henkilö Frowning',
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
        'Henkilö Zombi',
        ':person_zombie:',
        ':zombie:',
        ':person:'
    ],
    '🚶{{skin_tone}}‍♂️': [
        'Miehen Kävely',
        ':man_walking:',
        ':walking:',
        ':man:'
    ],
    '🚶{{skin_tone}}‍♀️': [
        'Nainen Kävely',
        ':woman_walking:',
        ':walking:',
        ':woman:'
    ],
    '🚶{{skin_tone}}': [
        'Henkilö Kävely',
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
        'Mies Seisoo',
        ':man_standing:',
        ':standing:',
        ':man:'
    ],
    '🧍{{skin_tone}}‍♀️': [
        'Nainen Seisoo',
        ':woman_standing:',
        ':standing:',
        ':woman:'
    ],
    '🧍{{skin_tone}}': [
        'Henkilö Seisoi',
        ':person_standing:',
        ':standing:',
        ':person:'
    ],
    '🧎{{skin_tone}}‍♂️': [
        'Mies Kneeling',
        ':man_kneeling:',
        ':kneeling:',
        ':man:'
    ],
    '🧎{{skin_tone}}‍♀️': [
        'Nainen Kneeling',
        ':woman_kneeling:',
        ':kneeling:',
        ':woman:'
    ],
    '🧎{{skin_tone}}': [
        'Henkilö Kneelink',
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
        'Mies valkoisella ruokalajilla',
        ':man_with_white_cane:',
        ':white_cane:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🦯': [
        'Nainen kanssa White Cane',
        ':woman_with_white_cane:',
        ':white_cane:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🦯': [
        'Henkilö jolla on valkoinen ruokalaji',
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
        'Mies moottoroidussa pyörätuolissa',
        ':man_in_motorized_wheelchair:',
        ':motorized_wheelchair:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🦼': [
        'Nainen moottoroidussa pyörätuolissa',
        ':woman_in_motorized_wheelchair:',
        ':motorized_wheelchair:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🦼': [
        'Moottorikäyttöisessä pyörätuolissa oleva henkilö',
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
        'Miehen käsikäyttöinen pyörätuoli',
        ':man_manual_wheelchair:',
        ':manual_wheelchair:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🦽': [
        'Nainen käsikirjassa pyörätuoli',
        ':woman_manual_wheelchair:',
        ':manual_wheelchair:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🦽': [
        'Henkilö, käsikäyttöinen pyörätuoli',
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
        'Miehet, joilla on pupu korva',
        ':men_with_bunny_hears:',
        ':bunny_ears:',
        ':man:'
    ],
    '👯‍♀️': [
        'Naiset Bunny Ears',
        ':women_with_bunny_hears:',
        ':bunny_ears:',
        ':woman:'
    ],
    '👯': [
        'Henkilöt, joilla on Bunny Ears',
        ':people_with_bunny_hears:',
        ':bunny_ears:',
        ':person:'
    ],
    '🕴️{{skin_tone}}': [
        'Suvun asukas Levitating',
        ':person_in_suit_levitating:',
        'Ihmisten Suojaaminen',
        'Rude Boy',
        'Walt Jabsco',
        'Man in Business Suit Levitating',
        ':person:'
    ],
    '🧖{{skin_tone}}‍♂️': [
        'Mies höyryssä huoneessa',
        ':man_in_steamy_room:',
        ':steamy_room:',
        'Saunan mies',
        ':man:'
    ],
    '🧖{{skin_tone}}‍♀️': [
        'Nainen höyryssä huoneessa',
        ':woman_in_steamy_room:',
        ':steamy_room:',
        'Nainen saunassa',
        ':woman:'
    ],
    '🧖{{skin_tone}}': [
        'Henkilö vaimeassa huoneessa',
        ':person_in_steamy_room:',
        ':steamy_room:',
        'Henkilö Saunassa',
        ':person:'
    ],
    '👫{{skin_tone}}': [
        'Nainen ja mies kädet',
        ':woman_and_man_holding_hands:',
        ':holding_hands:',
        'Heteroseksuaalinen Pari',
        'Suora Pari',
        'Mies ja nainen Holding kädet',
        ':woman:'
    ],
    '👬{{skin_tone}}': [
        'Miehet Pidossa Kädet',
        ':holding_hands:',
        ':men_holding_hands:',
        'Gay Pari',
        'Kaksi Miehtä Holding Kädet',
        ':man:'
    ],
    '👭{{skin_tone}}': [
        'Naiset Kädet Pidossa',
        ':holding_hands:',
        ':women_holding_hands:',
        'Lesbian Pariskunta',
        'Kaksi Naista Kädet',
        ':woman:'
    ],
    '🧑‍🤝‍🧑': [
        'Kädet Pidettävät Ihmiset',
        ':holding_hands:',
        ':people_holding_hands:',
        'Kaksi Ihmiset Pitävät Kädet',
        'Sukupuoli Inclusive Pariskunta',
        'Sukupuoli Neutraali Pariskunta',
        'Sukupuoli Vaatimaton Pari',
        ':person:'
    ],
    '🧑‍🧑‍🧒': [
        'Family: Adult, Adult, Child',
        ':family_adult_adult_child:',
        'Family: Person, Person, Child'
    ],
    '👨‍👩‍👦': [
        'Perhe Äitillä, Isällä ja Pojalla',
        ':family_with_mother_father_and_son:',
        'Perhe: Mies, Nainen, Poika'
    ],
    '👨‍👩‍👧': [
        'Perhe Äidin, Isän ja Tyttären kanssa',
        ':family_with_mother_father_and_daughter:',
        'Perhe: Mies, Nainen, Tyttö'
    ],
    '👨‍👨‍👦': [
        'Perhe kahden Isän ja Pojan kanssa',
        ':family_with_two_fathers_and_son:',
        'Perhe: Mies, Mies, Poika',
        ':man:'
    ],
    '👨‍👨‍👧': [
        'Perhe kahden Isän ja Tyttären kanssa',
        ':family_with_two_fathers_and_daughter:',
        'Perhe: Mies, Mies, Tyttö',
        ':man:'
    ],
    '👩‍👩‍👦': [
        'Perhe kaksi äitiä ja poika',
        ':family_with_two_mothers_and_son:',
        'Perhe: Nainen, Nainen, Poika',
        ':woman:'
    ],
    '👩‍👩‍👧': [
        'Perhe kahden äidin ja tyttären kanssa',
        ':family_with_two_mothers_and_daughter:',
        'Perhe: Nainen, Nainen, Tyttö',
        ':woman:'
    ],
    '🧑‍🧑‍🧒‍🧒': [
        'Family: Adult, Adult, Child, Child',
        ':family_adult_adult_child_child:',
        'Family: Person, Person, Child, Child'
    ],
    '👨‍👩‍👧‍👦': [
        'Perhe Äitien, Isän, Pojan ja Tyttären kanssa',
        ':family_with_mother_father_son_and_daughter:',
        'Perhe: Mies, Nainen, Tyttö, Poika'
    ],
    '👨‍👩‍👦‍👦': [
        'Perhe Äitien, Isän ja kahden Pojan kanssa',
        ':family_with_mother_father_and_two_sons:',
        'Perhe: Mies, Nainen, Poja, Poika'
    ],
    '👨‍👩‍👧‍👧': [
        'Perhe Äidin, Isän ja kahden Tyttären kanssa',
        ':family_with_mother_father_and_two_daughters:',
        'Perhe: Mies, Nainen, Tyttö, Tyttö'
    ],
    '👨‍👨‍👧‍👦': [
        'Perhe kahden Isän, Pojan ja Tyttären kanssa',
        ':family_with_two_fathers_son_and_daughter:',
        'Perhe: Mies, Mies, Tyttö, Poika',
        ':man:'
    ],
    '👨‍👨‍👦‍👦': [
        'Perhe kahden Isän ja kahden Pojan kanssa',
        ':family_with_two_fathers_and_two_sons:',
        'Perhe: Mies, Mies, poika, Poika',
        ':man:'
    ],
    '👨‍👨‍👧‍👧': [
        'Perhe kahden Isän ja kahden Tyttären kanssa',
        ':family_with_two_fathers_and_two_daughters:',
        'Perhe: Mies, Mies, Tyttö, Tyttö',
        ':man:'
    ],
    '👩‍👩‍👧‍👦': [
        'Perhe kahden äidin kanssa, poika ja tytär',
        ':family_with_two_mothers_son_and_daughter:',
        'Perhe: Nainen, Nainen, Tyttö, Poika',
        ':woman:'
    ],
    '👩‍👩‍👦‍👦': [
        'Perhe kaksi äitiä ja kaksi poikaa',
        ':family_with_two_mothers_and_two_sons:',
        'Perhe: Nainen, Nainen, Poja, Poika',
        ':woman:'
    ],
    '👩‍👩‍👧‍👧': [
        'Perhe kahden äidin ja kahden tyttären kanssa',
        ':family_with_two_mothers_and_two_daughters:',
        'Perhe: Nainen, Nainen, Tyttö, Tyttö',
        ':woman:'
    ],
    '🧑‍🧒': [
        'Family: Adult, Child',
        ':family_adult_child:',
        'Family: Person, Child'
    ],
    '👨‍👦': [
        'Perhe Isän ja Pojan kanssa',
        ':family_with_father_and_son:',
        'Perhe: Mies, Poika',
        ':man:'
    ],
    '👨‍👧': [
        'Perhe Isän ja tyttären kanssa',
        ':family_with_father_and_daughter:',
        'Perhe: Mies, Tyttö',
        ':man:'
    ],
    '👩‍👧': [
        'Perhe Äiti ja tytär',
        ':family_with_mother_and_daughter:',
        'Perhe: Nainen, Tyttö',
        ':woman:'
    ],
    '👨‍👧‍👧': [
        'Perhe Isän ja kahden Tyttären kanssa',
        ':family_with_father_and_two_daughters:',
        'Perhe: Mies, Tyttö, Tyttö',
        ':man:'
    ],
    '🧑‍🧒‍🧒': [
        'Family: Adult, Child, Child',
        ':family_adult_child_child:',
        'Family: Person, Child, Child'
    ],
    '👨‍👦‍👦': [
        'Perhe Isän ja kahden Pojan kanssa',
        ':family_with_father_and_two_sons:',
        'Perhe: Mies, poika, Poika',
        ':man:'
    ],
    '👨‍👧‍👦': [
        'Perhe Isän, Pojan ja Tyttären kanssa',
        ':family_with_father_son_and_daughter:',
        'Perhe: Mies, Tyttö, Poika',
        ':man:'
    ],
    '👩‍👦': [
        'Perhe Äidin ja Pojan kanssa',
        ':family_with_mother_and_son:',
        'Perhe: Nainen, Poika',
        ':woman:'
    ],
    '👩‍👦‍👦': [
        'Perhe Äiti ja kaksi poikaa',
        ':family_with_mother_and_two_sons:',
        'Perhe: Nainen, Poja, Poika',
        ':woman:'
    ],
    '👩‍👧‍👦': [
        'Perhe Äidin, Pojan ja Tyttären kanssa',
        ':family_with_mother_son_and_daughter:',
        'Perhe: Nainen, Tyttö, Poika',
        ':woman:'
    ],
    '👩‍👧‍👧': [
        'Perhe Äiti ja kaksi tytärtä',
        ':family_with_mother_and_two_daughters:',
        'Perhe: Nainen, Tyttö, Tyttö',
        ':woman:'
    ],
    '💑{{skin_tone}}': [
        'Pariskunta Sydämessä',
        ':couple_with_heart:',
        'Pari Rakkaudessa',
        'Rakastava Pariskunta',
        'Sukupuoli Neutraali Pariskunta',
        ':person:'
    ],
    '👩‍❤️‍👨': [
        'Ihminen ja nainen sydämen kanssa',
        ':man_and_woman_with_heart:',
        'Pari Rakkaudessa',
        'Rakastava Pariskunta',
        'Pariskunta Sydämessä'
    ],
    '👨‍❤️‍👨': [
        'Kaksi Miehtä Sydämellä',
        ':two_men_with_heart:',
        'Pariskunta sydämen kanssa: mies, mies',
        ':man:'
    ],
    '👩‍❤️‍👩': [
        'Kaksi Naiset Sydämessä',
        ':two_women_with_heart:',
        'Pari sydämen kanssa: Nainen, Nainen',
        ':woman:'
    ],
    '💏{{skin_tone}}': [
        'Pariskunta Suudella',
        ':couple_kissing:',
        'Suudelma',
        'Sukupuoli Neutraali Pariskunta Kissing',
        ':person:'
    ],
    '👩‍❤️‍💋‍👨': [
        'Mies ja nainen Kissing',
        ':man_and_woman_kissing:'
    ],
    '👨‍❤️‍💋‍👨': [
        'Kaksi Miehen Kissing',
        ':two_men_kissing:',
        'Mies ja Man Kissing',
        ':man:'
    ],
    '👩‍❤️‍💋‍👩': [
        'Kaksi Naista Kissing',
        ':two_women_kissing:',
        'Nainen ja nainen Kissing',
        ':woman:'
    ],
    '💆{{skin_tone}}‍♂️': [
        'Miehen Pään Hieronta',
        ':man_getting_head_massage:',
        ':getting_head_massage:',
        ':man:'
    ],
    '💆{{skin_tone}}‍♀️': [
        'Nainen Päähieronta',
        ':woman_getting_head_massage:',
        ':getting_head_massage:',
        ':woman:'
    ],
    '💆{{skin_tone}}': [
        'Henkilö Päähieron Saaminen',
        ':person_getting_head_massage:',
        ':getting_head_massage:',
        ':person:'
    ],
    '💇{{skin_tone}}‍♂️': [
        'Mies Hiusleikkuu',
        ':man_getting_haircut:',
        ':getting_haircut:',
        ':man:'
    ],
    '💇{{skin_tone}}‍♀️': [
        'Nainen Saada Hiusleikkauksia',
        ':woman_getting_haircut:',
        ':getting_haircut:',
        ':woman:'
    ],
    '💇{{skin_tone}}': [
        'Henkilö Hiustenleikkuun Saaminen',
        ':person_getting_haircut:',
        ':getting_haircut:',
        ':person:'
    ],
    '🛌{{skin_tone}}': [
        'Nukkuva Majoitus',
        'väsynyt',
        ':sleeping_accommodation:',
        'Henkilö sängyssä',
        'Henkilö Nukkuminen'
    ],
    '🛀{{skin_tone}}': [
        'Kylvöä Ottava Henkilö',
        'Uiminen',
        ':bath:',
        ':person_taking_bath:',
        'Kuuma Kylpy',
        'Henkilö joka ottaa kylvyn',
        'Kylpy',
        'Suihku',
        'Saippua',
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
        'Pitkä Nenäkasvot',
        'Punainen Maski',
        'Tengu',
        'Japanilainen Goblin'
    ]
};
/*animals*/
emojis_language[lang][4] = {
    '😺': [
        'Grinning Kissa',
        ':happy_cat:',
        ':smiling_cat:',
        '::):',
        'Onnellinen Kissa',
        'Hymyilevä Kissa',
        'Onnellinen Kissa Kasvot',
        'Hymyilevä kissa kasvot Open Mouth'
    ],
    '😸': [
        'Grinning kissa kanssa hymyilevät silmät',
        ':grinning_cat:',
        '::D:',
        'Grinning Kissa',
        'Onnellinen Kissa',
        'Grinning Kissa Kasvot'
    ],
    '😹': [
        'Kissa kanssa Tears of Joy',
        ':laughing_cat:',
        '::):',
        'Onnellinen Kissa',
        'Nauraa Kissa'
    ],
    '😻': [
        'Hymyilevä kissa sydämen silmin',
        ':heart_eyes_cat:',
        ':*.*:',
        'Sydän Silmät Kissa',
        'Rakastava Kissa',
        'Hymyilevä kissa kasvot sydämen muotoiset silmät'
    ],
    '😼': [
        'Kissa jossa Wry Smile',
        ':cat_with_wry_smile:',
        'Smirking Kissa',
        'Kissan Kasvot',
        'Cat Face with Wry Smile'
    ],
    '😽': [
        'Suudella Kissa',
        ':kissing_cat:',
        '::*:',
        'Kissing Cat Face',
        'Kissing Cat kasvot suljettujen silmien kanssa'
    ],
    '🙀': [
        'Weary Kissa',
        ':weary_cat:',
        '::O:',
        'Häikäisevä Kissa',
        'Kissa Huutaa',
        'Kissan kasvojen huumaaminen pelossa',
        'Weary Kissa Kasvot'
    ],
    '😿': [
        'Kissa Yritetään',
        ':crying_cat:',
        '::(:',
        'Surullinen Kissa',
        'Crying Kissa Kasvot'
    ],
    '😾': [
        'Kiinnitetään Kissa',
        ':pouting_cat:',
        'Grumpy Cat',
        'Kiinnityskissan Kasvot'
    ],
    '🙈': [
        'Katso Ei-Evil Apina',
        'Apina',
        ':see-no-evil_mokey:',
        ':see_no_evil_mokey:',
        ':monkey:',
        'Mizaru',
        'Monkey Covering Silmät'
    ],
    '🙉': [
        'Hear-No-Evil Apina',
        'Apina',
        ':hear-no-evil_monkey:',
        ':hear_no_evil_monkey:',
        ':monkey:',
        'Kikazaru',
        'Apina Kattavat Korvat'
    ],
    '🙊': [
        'Puhu Ei Evil Apina',
        'Apina',
        ':speak-no-evil_monkey:',
        ':speak_no_evil_monkey:',
        ':monkey:',
        'Iwazaru',
        'Monkey Covering Mouth',
        'Ei Puhumista'
    ],
    '🐵': [
        'Apina Kasvot',
        ':monkey_face:',
        'Apina',
        'Apina Päähaara'
    ],
    '🐒': [
        'Apina',
        ':monkey:',
        'Cheeky Apina'
    ],
    '🦍': [
        'Gorilla',
        ':gorilla:'
    ],
    '🐶': [
        'Koiran Kasvot',
        ':dog_face:',
        'Koira',
        'Pennu'
    ],
    '🐕': [
        'Koira',
        ':dog:',
        'Doggo',
        'Akita Inu'
    ],
    '🦮': [
        'Silmien Koiran Seeing',
        ':seeing_eye_dog:',
        'Opas Koira'
    ],
    '🐕‍🦺': [
        'Palvelun Koira',
        ':service_dog:'
    ],
    '🐩': [
        'Poodle',
        ':poodle:',
        'Koira',
        'Miniatyyri Poodle',
        'Vakio Poodle',
        'Lelu Poodle'
    ],
    '🐺': [
        'Susi',
        ':wolf:',
        'Susien Kasvot',
        ':gray:',
        ':grey:'
    ],
    '🦊': [
        'Kettu',
        ':fox:',
        'Kettu Kasvot',
        ':orange:'
    ],
    '🦝': [
        'Rokotus',
        ':raccoon:'
    ],
    '🐱': [
        'Kissa Kasvot',
        ':cat_face:',
        ':3',
        'Kitten',
        'Kitty'
    ],
    '🐈': [
        'Kissa',
        ':cat:',
        'Kissa Kotimaa',
        'Kenttä',
        'Talo'
    ],
    '🐈‍⬛': [
        'Musta Kissa',
        ':black_cat:',
        ':black:'
    ],
    '🦁': [
        'Leijona',
        ':lion:',
        'Lion Face'
    ],
    '🐯': [
        'Tiikerin Kasvot',
        ':tiger_face:',
        'Söpö Tiikeri'
    ],
    '🐅': [
        'Tiikeri',
        ':tiger:',
        'Bengal Tiger'
    ],
    '🐆': [
        'Leopard',
        ':leopard:',
        'Afrikan Leopardi',
        'Jaguar'
    ],
    '🐴': [
        'Hevosen Kasvot',
        ':horse_face:',
        'Hevosen Pää'
    ],
    '🐎': [
        'Hevonen',
        ':horse:',
        'Soiva Hevonen',
        'Racehorse'
    ],
    '🦄': [
        'Yksisarvinen',
        ':unicorn:',
        'Yksisarvinen Kasvot'
    ],
    '🦓': [
        'Zebra',
        ':zebra:',
        'Zebra Kasvot',
        ':white:',
        ':black:'
    ],
    '🦌': [
        'Peura',
        ':deer:',
        'Buck',
        'Poro',
        'Stag'
    ],
    '🐮': [
        'Lehmän Kasvot',
        ':cow_face:',
        'Lehmä',
        'Onnellinen Lehmä'
    ],
    '🐂': [
        'Härkä',
        ':ox:',
        'Bull',
        'Bullock',
        'Hapen',
        'Hehku'
    ],
    '🐃': [
        'Vesi Buffalo',
        ':water_buffalo:',
        'Buffalo',
        'Kotimaan Vesi Buffalo'
    ],
    '🐄': [
        'Lehmä',
        ':cow:',
        'Maidon Lehmä'
    ],
    '🐷': [
        'Sian Kasvot',
        ':pig_fase:',
        'Sika',
        'Sian Pää',
        ':pink:'
    ],
    '🐖': [
        'Sika',
        ':pig:',
        'Hog',
        'Sow',
        ':pink:'
    ],
    '🐗': [
        'Karju',
        ':boar:',
        'Warthog',
        'Villi Boar',
        'Luonnonvarainen Sika'
    ],
    '🐽': [
        'Sika Nose',
        ':pig_nose:'
    ],
    '🐏': [
        'Ram',
        ':ram:',
        'Lammas'
    ],
    '🐑': [
        'Ewe',
        ':ewe:',
        'Lamb',
        'Lammas'
    ],
    '🐐': [
        'Vuohi',
        ':goat:'
    ],
    '🐪': [
        'Kameli',
        ':camel:',
        'Arabian Kameli',
        'Dromedary Camel',
        'Yhden Bump Camel'
    ],
    '🐫': [
        'KaksiHump Camel',
        ':two-hump_camel:',
        ':two_hump_camel:',
        'Aasian Kameli',
        'Bactrian Camel'
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
        'Norsu',
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
        'Hiiren Kasvot',
        ':mouse_face:',
        'Hiiri'
    ],
    '🐁': [
        'Hiiri',
        ':mouse:',
        'Dormouse',
        'Jyrkkä',
        'Hiiret'
    ],
    '🐀': [
        'Arvo',
        ':rat:',
        'Jyrkkä'
    ],
    '🐹': [
        'hamsteri',
        ':hamster:',
        'hamsterin Kasvot'
    ],
    '🐰': [
        'Jäniksen Kasvot',
        ':rabbit_face:',
        'Pääsiäispupu'
    ],
    '🐇': [
        'Kani',
        'Bunny',
        ':rabbit:',
        'Pupu Kani'
    ],
    '🐿️': [
        'Chipmunk',
        ':chipmunk:',
        'Orava'
    ],
    '🦔': [
        'Hedgehog',
        ':hedgehog:'
    ],
    '🦇': [
        'Lepakko',
        ':bat:',
        'Batman',
        ':black:'
    ],
    '🐻': [
        'Karhu',
        ':bear:',
        'Karhu Kasvot',
        'Teddy Karhu',
        ':brown:'
    ],
    '🐨': [
        'Koala',
        ':koala:',
        'Koalan Kasvot'
    ],
    '🐼': [
        'Panda',
        ':panda:',
        'Panda Kasvot'
    ],
    '🦘': [
        'Kenguru',
        ':kangaroo:',
        'Roo'
    ],
    '🦡': [
        'Badger',
        ':badger:'
    ],
    '🦃': [
        'Turkki',
        ':turkey:',
        'Kiitospäivä Turkki',
        'Luonnonvaraiset Turkki'
    ],
    '🐔': [
        'Kana',
        ':chicken:',
        'Hen'
    ],
    '🐓': [
        'Cock',
        ':cock:',
        'Rooster',
        'Piparjuuret'
    ],
    '🐣': [
        'Haetaan Chickiä',
        ':hatching_chick:',
        'Vauva Kana',
        'Chick Hatching',
        'Egg',
        ':yellow:'
    ],
    '🥚': [
        'Egg',
        ':egg:'
    ],
    '🐤': [
        'Vauvan Chick',
        ':baby_chick:',
        'Keltainen Lintu',
        ':yellow:'
    ],
    '🐥': [
        'Etupuoli Vauva Chick',
        ':front_baby_chick:',
        'Vauvan Chick',
        'Seisova Chick',
        ':yellow:'
    ],
    '🐦': [
        'Lintu',
        ':bird:'
    ],
    '🐧': [
        'Penguin',
        ':penguin:'
    ],
    '🕊️': [
        'Dove',
        ':Dove:',
        'Rauhan kyyhky',
        ':white:'
    ],
    '🦅': [
        'Eagle',
        ':Eagle:',
        'Kalju Eagle'
    ],
    '🦆': [
        'Ankka',
        ':Duck:'
    ],
    '🦢': [
        'Joutsen',
        ':swan:',
        ':white:'
    ],
    '🦉': [
        'Pöllö',
        ':owl:',
        ':brown:'
    ],
    '🦚': [
        'Peacock',
        ':peacock:'
    ],
    '🦜': [
        'Papukaija',
        ':parrot:'
    ],
    '🐸': [
        'Sammakko',
        ':frog:',
        'Toad',
        'Sammakko Kasvot',
        ':green:'
    ],
    '🐊': [
        'Krokotiili',
        ':crocodile:',
        'Alligaattori',
        'Croc',
        ':green:'
    ],
    '🐢': [
        'Kilpikonna',
        ':turtle:',
        'Tortoise',
        ':green:'
    ],
    '🦎': [
        'Lzard',
        ':lizard:',
        'Gecko',
        ':green:'
    ],
    '🐍': [
        'Käärme',
        ':snake:',
        'Käärme'
    ],
    '🐲': [
        'Lohikäärmeen Kasvot',
        ':dragon_face:',
        'Lohikäärmeen Pää'
    ],
    '🐉': [
        'Lohikäärme',
        ':dragon:'
    ],
    '🦕': [
        'Sauropodi',
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
        'Spouting Whale',
        ':spouting_whale:',
        'Söpö Whale'
    ],
    '🐋': [
        'Valas',
        ':whale:'
    ],
    '🐬': [
        'Delfiini',
        ':dolphin:'
    ],
    '🐟': [
        'Kala',
        ':fish:',
        'Makean veden Kala'
    ],
    '🐠': [
        'Trooppinen Kala',
        ':tropical_fish:',
        'Kala',
        'Keltasininen Kala'
    ],
    '🐡': [
        'Blowfish',
        ':blowfish:',
        'Fugu',
        'Pallokala'
    ],
    '🦈': [
        'Hai',
        ':shark:',
        'Suuri Valkoinen Hai'
    ],
    '🐙': [
        'Meritursaat',
        ':octopus:'
    ],
    '🐚': [
        'Spiraalinen Tulkki',
        ':spiral_shell:',
        'Seashell',
        'Kuori'
    ],
    '🐌': [
        'Etana',
        ':snail:',
        'Slug',
        'Puutarhan Etana'
    ],
    '🦋': [
        'Perhonen',
        ':butterfly:'
    ],
    '🐛': [
        'Bugi',
        ':bug:',
        'Caterpillar',
        'Hyönteinen'
    ],
    '🐜': [
        'Ant',
        ':ant:',
        'Bugi',
        'Hyönteinen'
    ],
    '🐝': [
        'Hunajamehiläinen',
        ':honeybee:',
        'Mehiläinen',
        'Bumblebee',
        ':yellow:',
        ':black:'
    ],
    '🐞': [
        'Lady Punajuuri',
        ':lady_beetle:',
        'Ladybird',
        'Ladybug',
        'Bugi'
    ],
    '🦗': [
        'Kriketti',
        ':cricket:',
        'Grasshopper'
    ],
    '🕷️': [
        'Hämähäkki',
        ':spider:'
    ],
    '🦂': [
        'Skorpioni',
        ':scorpion:'
    ],
    '🦟': [
        'Mosquito',
        ':mosquito:',
        ':black:'
    ],
    '🦀': [
        'Taskurapu',
        ':crab:',
        ':red:'
    ],
    '🦞': [
        'Hummeri',
        ':lobster:'
    ],
    '🦐': [
        'Katkarapu',
        ':shrimp:',
        'Prawn'
    ],
    '🦑': [
        'Kalmari',
        ':squid:'
    ],
    '🦧': [
        'Orangutan',
        ':orangutan:'
    ],
    '🦥': [
        'Hidas',
        ':sloth:'
    ],
    '🦦': [
        'Otter',
        ':otter:'
    ],
    '🦨': [
        'Iho',
        ':skunk:'
    ],
    '🦬': [
        'Bison',
        ':bison:'
    ],
    '🦣': [
        'Mammutti',
        ':mammoth:',
        ':brown:'
    ],
    '🦫': [
        'Majakka',
        ':beaver:'
    ],
    '🐻‍❄️': [
        'Polar Karhu',
        ':polar_bear:',
        ':white:'
    ],
    '🦤': [
        'Dodo',
        ':dodo:'
    ],
    '🦭': [
        'Sinetti',
        ':seal:'
    ],
    '🪲': [
        'Kuoriainen',
        ':beetle:'
    ],
    '🪳': [
        'Cockroach',
        ':cockroach:'
    ],
    '🪰': [
        'Lento',
        ':fly:'
    ],
    '🪱': [
        'Mato',
        ':worm:'
    ],
    '🦩': [
        'Flamingo',
        ':flamingo:'
    ],
    '🪹': [
        'Tyhjä Pesä',
        ':empty_nest:',
        'Linnut',
        'Koti'
    ],
    '🪺': [
        'Pesä munilla',
        ':nest_with_eggs:',
        'Linnut',
        'Koti'
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
        'Sydämen kanssa nuoli',
        ':heart_with_arrow:',
        'Nuoli Cupid',
        'Lovestruck',
        ':pink:'
    ],
    '💝': [
        'Sydän nauhan kanssa',
        ':heart_with_ribbon:',
        'Suklaa Laatikko',
        'Lahja Laatikko',
        'Lahjan Sydän',
        ':red:'
    ],
    '💖': [
        'Sparkling Heart',
        ':sparkling_heart:',
        'Sparkle Sydän',
        'Sparkly Sydän',
        'Tähdet Sydän',
        ':pink:'
    ],
    '💗': [
        'Kasvava Sydän',
        ':growing_heart:',
        'Useita Sydämiä',
        'Kolmen Sydän',
        ':pink:'
    ],
    '💓': [
        'Syö Sydän',
        ':beating_heart:',
        'Sydän Hälytys',
        'Heartbeat',
        'Wifi Sydän',
        ':pink:'
    ],
    '💞': [
        'Kehittyvät Sydämet',
        ':revolving_hearts:',
        'Kaksi Sydäntä',
        ':pink:'
    ],
    '💕': [
        'Kaksi Sydäntä',
        ':two_hearts:',
        'Pienet Sydämet',
        'Kaksi Vaaleanpunaista Sydäntä',
        ':pink:'
    ],
    '💟': [
        'Sydän Koristelu',
        ':heart_decoration:',
        ':purple:'
    ],
    '❣️': [
        'Sydän Exklamaatio',
        ':heart_exclamation:',
        'Sydän Yläpuolella Pisteet',
        'Punainen sydän kuin Exclamation Mark',
        'Raskas Sydän Exclamation Mark Koriste',
        ':red:'
    ],
    '💔': [
        'Rikkinäinen Sydän',
        ':broken_heart:',
        'Sydämen Murtuminen',
        'Rikkinäinen',
        'Sydän Rikkinäinen',
        ':red:'
    ],
    '❤️‍🩹': [
        'Sydämen Meneminen',
        ':mending_heart:',
        'Kallistettu Sydän',
        'Parantava Sydän',
        'Murtumaton Sydän',
        ':red:'
    ],
    '❤️‍🔥': [
        'Sydän tulessa',
        ':heart_on_fire:',
        ':red:'
    ],
    '❤️': [
        'Rakastan Sinua',
        ':red_heart:',
        'Punainen Sydän',
        'Sydän',
        'Rakasta Sydäntä',
        'Punainen Sydän',
        ':red:'
    ],
    '🧡': [
        'Oranssi Sydän',
        ':orange_heart:',
        'Rakastan Sinua',
        ':orange:'
    ],
    '💛': [
        'Keltainen Sydän',
        ':yellow_heart:',
        '#1 BF Snapchat',
        'Kultainen Sydän',
        'Rakastan Sinua',
        ':yellow:'
    ],
    '💚': [
        'Vihreä Sydän',
        ':green_heart:',
        'Mustasukkainen Sydän',
        'Rakastan Sinua',
        ':green:'
    ],
    '💙': [
        'Sininen Sydän',
        ':blue_heart:',
        'Rakastan Sinua',
        ':blue:'
    ],
    '💜': [
        'Violetti Sydän',
        ':purple_heart:',
        'Rakastan Sinua',
        ':purple:'
    ],
    '🖤': [
        'Musta Sydän',
        ':black_heart:',
        'Tumma Sydän',
        'Rakastan Sinua',
        ':black:'
    ],
    '🤍': [
        'Valkoinen Sydän',
        ':white_heart:',
        'Rakastan Sinua',
        ':white:'
    ],
    '🤎': [
        'Ruskea Sydän',
        ':brown_heart:',
        'Rakastan Sinua',
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
        'Saavutetut Pisteet',
        ':hundred_points:',
        '100',
        '%',
        'Pidä 100',
        'Täydellinen Pistemäärä',
        'Sata Pisteitä Symboli'
    ],
    '💬': [
        'Puheen Ilmapallo',
        ':speech_balloon:',
        'Keskustelun Kupla',
        'Puheen Kupla',
        ':white:'
    ],
    '💭': [
        'Ajatus Ilmapallo',
        ':thought_balloon:',
        'Ajatteleva Kupla',
        'Ajatteli Kupla',
        ':white:'
    ],
    '💤': [
        'Zzz',
        ':zzz:',
        'Nukkumaanmenoaika',
        'Kyllästys',
        'Lepotila',
        'Nukkuva Kyltti',
        'Nukkuva Symboli'
    ],
    '♠': [
        'Spade Puku',
        ':spade_suit:',
        'Spades',
        'Black Spade Suit'
    ],
    '♥': [
        'Sydän Puku',
        ':heart_suit:',
        'Kortti Sydämessä',
        'Sydän',
        'Musta Sydän Puku'
    ],
    '♦': [
        'Timantti Puku',
        ':diamond_suit:',
        'Timantit',
        'Musta Timantti Puku'
    ],
    '♣': [
        'Klubin Puku',
        ':club_suit:',
        'Klubit',
        'Musta Klubi Puku'
    ],
    '🏧': [
        'ATM Allekirjoitus',
        ':atm_sign:',
        'ATM',
        'Automatisoitu Telleer Machine',
        ':blue:'
    ],
    '🎧': [
        'Kuuloke',
        ':headphone:',
        'Kuuloke',
        'iPod',
        'Kuulokkeet'
    ],
    '🎵': [
        'Musiikillinen Muistiinpano',
        ':musical_note:',
        'Kahdeksannen Huomautuksen Parametrit',
        'Kavioparit (Beamed Parit)',
        'Musiikin Muistiinpano'
    ],
    '🎶': [
        'Musikaaliset Muistilaput',
        ':musical_notes:',
        'Musiikki',
        'Musiikin Muistiinpanot',
        'Laulaminen',
        'Useita Muistia Muistia'
    ],
    '🔔': [
        'Äänimerkki',
        ':bell:',
        'Liberty Bell',
        'Ringer',
        'Hääkello',
        ':yellow:'
    ],
    '🔕': [
        'Kello ja Slash',
        ':bell_with_slash:',
        'Ilmoitukset',
        'Soittoääni: Ei Käytössä',
        'Mykistetty Kello',
        'Kello peruutus Stroke',
        ':yellow:'
    ],
    '🔈': [
        'Kaiutin Matala Äänenvoimakkuus',
        ':speaker_low_volum:',
        'Tilavuus',
        'Kaiutin'
    ],
    '🔉': [
        'Kaiutin Keskipitkä Äänenvoimakkuus',
        ':speaker_medium_volume:',
        'Vähennä Äänenvoimakkuutta',
        'Kaiutin Keskipitkällä Äänenvoimakkuudella',
        'One Sound Wave kaiutin'
    ],
    '🔊': [
        'Kaiutin Korkea Äänenvoimakkuus',
        ':speaker_high_volume:',
        'Lisää Äänenvoimakkuutta',
        'Kolme ääniaaltoa sisältävä kaiutin'
    ],
    '🔇': [
        'Mykistetty Kaiutin',
        ':muted_speaker:',
        'Mykistä Äänenvoimakkuus',
        'Kaiutin peruutus Stroke'
    ],
    '📢': [
        'Loudspeaker',
        ':loudspeaker:',
        'Ilmoitus',
        'PA Järjestelmä',
        'Julkinen Osoite Loudkaiutin'
    ],
    '⛔': [
        'Ei Merkintää',
        ':no_entry:',
        ':red:'
    ],
    '🚫': [
        'Kielletty',
        ':prohibited:',
        'Estetty',
        'Ympyrän Takaisinviiva',
        'Ei',
        'Punainen Ympyrä Ristikko',
        'Rajoitettu',
        'Ei Merkintöä',
        ':red:'
    ],
    '🚳': [
        'Ei Polkupyöriä',
        ':no_bicycles:',
        'Ei Polkupyörien Allekirjoitusta',
        ':red:',
        ':black:'
    ],
    '🚭': [
        'Ei Tupakointia',
        ':no_smoking:',
        'Ei Tupakointitunnusta',
        ':red:',
        ':black:'
    ],
    '🚯': [
        'Ei Littering',
        ':no_littering:',
        'Älä Älä Litter Symboli',
        ':red:',
        ':black:'
    ],
    '🚱': [
        'Ei-Juotollinen Vesi',
        ':non-potable_water:',
        ':non_potable_water:',
        'Ei Vettä',
        'Ei Juomavettä',
        'Ei-Potable Water Symboli',
        ':red:',
        ':black:'
    ],
    '🚷': [
        'Ei Jalankulkijoita',
        ':no_pedestrians:',
        'Ei Ihmisiä',
        'Ei Kävely',
        ':red:',
        ':black:'
    ],
    '🔞': [
        'Ei Alle kahdeksantoista',
        ':no_one_under_18:',
        'NSFW',
        'Ei Yhtään Alle kahdeksantoista Symboli',
        '18',
        ':red:',
        ':black:'
    ],
    '📵': [
        'Ei Matkapuhelimia',
        ':no_mobile_phones:',
        'Ei Solupuhelimia',
        'Ei Puhelimia',
        'Ei Älypuhelimia',
        ':red:',
        ':black:'
    ],
    '☢️': [
        'Radioactive',
        ':radioactive:',
        'Kansainvälinen Säteilymboli',
        'Ydinvoima',
        'Radioaktiivinen Kyltti',
        ':orange:'
    ],
    '☣️': [
        'Biovaara',
        ':biohazard:',
        'Biovaaran Merkki',
        ':orange:'
    ],
    '⬆️': [
        'Nuolinäppäin Ylöspäin',
        ':up_arrow_button:',
        'Nuoli Pisteytys Ylös',
        'Musta Nuoli Ylöspäin',
        ':blue:'
    ],
    '↗️': [
        'Nuolinäppäin Oikealle',
        ':up-right_arrow_button:',
        ':up_right_arrow_button:',
        'Vino Oikealle Ylöspäin',
        'Kaakkoinen Nuoli',
        ':blue:'
    ],
    '➡️': [
        'Nuolinäppäin Oikealle',
        ':right_arrow_button:',
        'Nuoli Osoittaa Oikealle',
        'Musta Oikeakulmainen Nuoli',
        ':blue:'
    ],
    '↘️': [
        'Alaoikealla Nuolinäppäin',
        ':down-right_arrow_button:',
        ':down_right_arrow_button:',
        'Vino Alas Oikea Nuoli',
        'Kaakkoinen Nuoli',
        ':blue:'
    ],
    '⬇️': [
        'Nuolinäppäin Alas',
        ':down_arrow_button:',
        'Nuoli Pisteytys Alas',
        'Musta Nuoli Alaspäin',
        ':blue:'
    ],
    '↙️': [
        'Alas Vasen Nuolinäppäin',
        ':down-left_arrow_button:',
        ':down_left_arrow_button:',
        'Vino Alas Vasen Nuoli',
        'Lounainen Nuoli',
        ':blue:'
    ],
    '⬅️': [
        'Nuolinäppäin Vasemmalle',
        ':left_arrow_button:',
        'Nuoli Osoittaa Vasemmalle',
        'Vasen Musta Nuoli',
        ':blue:'
    ],
    '↖️': [
        'Ylösvasen Nuolinäppäin',
        ':up-left_arrow_button:',
        ':up_left_arrow_button:',
        'Vino Ylösvasen Nuoli',
        'Lounainen Nuoli',
        ':blue:'
    ],
    '↕️': [
        'Nuolinäppäin Ylöspäin',
        ':up-down_arrow_button:',
        ':up_down_arrow_button:',
        'Pystysuorat Nuolet',
        'Nuoli Ylös Alas',
        ':blue:'
    ],
    '↔️': [
        'Nuolinäppäin Vasen Oikealle',
        ':left-right_arrow_button:',
        ':left_right_arrow_button:',
        'Vaakasuorat Nuolet',
        'Sivutiet Nuolet',
        'Nuoli Vasemmalle Oikealle',
        ':blue:'
    ],
    '↩️': [
        'Oikea Nuoli Kaareva Vasen Painike',
        ':right_arrow_curving_left_button:',
        'Lähetä Vastaus',
        'Vasen Kaareva Nuoli',
        'Vasen nuoli koukulla',
        ':blue:'
    ],
    '↪️': [
        'Nuolinäppäin Kaaree Oikealle',
        ':left_arrow_curving_right_button:',
        'Sähköposti Eteenpäin',
        'Oikea Kaareva Nuoli',
        'Nuoli oikealla koukulla',
        ':blue:'
    ],
    '⤴️': [
        'Nuolinäppäin Kaaree Ylös',
        ':right_arrow_curving_up_button:',
        'Nuoli Osoittaa Oikealle Sitten Kaareva Ylöspäin',
        ':blue:'
    ],
    '⤵️': [
        'Oikea Nuoli Kaareva Alas Painike',
        ':right_arrow_curving_down_button:',
        'Kaareva Nuoli',
        'Nuoli Osoittaa Oikealle Sitten Kaareva Alaspäin',
        ':blue:'
    ],
    '🔃': [
        'Pystysuora Nuolinäppäin Clockwise',
        ':clockwise_vertical_button:',
        'Myötäpäivään alaspäin ja ylöspäin avoimet nuolet',
        ':blue:'
    ],
    '🔄': [
        'Vastapäivään Nuolinäppäin',
        ':counterclockwise_button:',
        'Päivitä',
        'Kierrä',
        'Vaihda',
        'Vastapäivään Nuolet',
        'Anticlockwise alaspäin ja ylöspäin avoimet nuolet',
        ':blue:'
    ],
    '🔙': [
        'Nuoli Takaisin',
        ':back_arrow:',
        'Takaisin',
        'Takaisin vasemmalla nuoli yläpuolella',
        ':black:'
    ],
    '🔚': [
        'Nuoli Lopussa',
        ':end_arrow:',
        'Loppu',
        'Lopeta vasemmalla nuoli yläpuolella',
        ':black:'
    ],
    '🔛': [
        'Päällä! Nuoli',
        ':on_arrow:',
        'Päällä',
        'On kanssa Exclamation Mark vasen oikea nuoli yläpuolella',
        ':black:'
    ],
    '🔜': [
        'Pian Nuoli',
        ':soon_arrow:',
        'Pian',
        'Pian oikealla nuoli yläpuolella',
        ':black:'
    ],
    '🔝': [
        'Nuoli Yläpuolella',
        ':top_arrow:',
        'Ylhäällä',
        'Ylhäällä ylös nuoli yläpuolella',
        ':black:'
    ],
    '🛐': [
        'Palvonnan paikka',
        ':place_of_worship:',
        'Uskonnollinen Rakentaminen',
        ':purple:'
    ],
    '⚛️': [
        'Atomin Symboli',
        ':atom_symbol:',
        ':purple:'
    ],
    '🕉️': [
        'Om Symboli',
        ':om_symbol:',
        'Om',
        'Aumkara',
        'Omkara',
        'Pranava',
        ':purple:'
    ],
    '✡️': [
        'Daavidin tähti',
        ':star_of_david:',
        'Magen David',
        ':purple:'
    ],
    '☸️': [
        'Dharman pyörä',
        ':wheel_of_dharma:',
        'Helmi',
        ':purple:'
    ],
    '☯️': [
        'Yin Yang',
        ':yin_yang:',
        ':purple:'
    ],
    '✝️': [
        'Latinalainen Risti',
        ':latin_cross:',
        'Kristillinen Risti',
        ':purple:'
    ],
    '☦️': [
        'Ortodoksinen Risti',
        ':orthodox_cross:',
        ':purple:'
    ],
    '☪️': [
        'Tähti ja puolikuu',
        ':star_and_crescent:',
        ':purple:'
    ],
    '☮️': [
        'Rauhan Symboli',
        ':peace:',
        'Rauhan Allekirjoitus',
        ':purple:'
    ],
    '🕎': [
        'MenoraName',
        ':menorah:',
        'Candelabrum',
        'Kynttilät',
        'Chanukia',
        'MenoraName',
        'Menorah yhdeksän haaran kanssa',
        ':purple:'
    ],
    '🔯': [
        'Pilkullinen Kuusipisteinen Tähti',
        ':dotted_six-pointed_star:',
        ':dotted_six_pointed_star:',
        'Kuusi Pointed tähti keskipisteellä',
        ':purple:'
    ],
    '🪯': [
        'Khanda',
        ':khanda:',
        'Sikhism',
        ':purple:'
    ],
    '♈': [
        'Oinas',
        ':aries:',
        ':zodiac:',
        'Zodiaakki',
        ':purple:'
    ],
    '♉': [
        'Taurus',
        ':taurus:',
        ':zodiac:',
        'Zodiaakki',
        ':purple:'
    ],
    '♊': [
        'Gemini',
        ':gemini:',
        ':zodiac:',
        'Zodiaakki',
        ':purple:'
    ],
    '♋': [
        'Syöpä',
        ':cancer:',
        ':zodiac:',
        'Zodiaakki',
        ':purple:'
    ],
    '♌': [
        'Leo',
        ':leo:',
        ':zodiac:',
        'Zodiaakki',
        ':purple:'
    ],
    '♍': [
        'Neitsyt',
        ':virgo:',
        ':zodiac:',
        'Zodiaakki',
        ':purple:'
    ],
    '♎': [
        'Vaakat',
        ':libra:',
        ':zodiac:',
        'Zodiaakki',
        ':purple:'
    ],
    '♏': [
        'Skorpio',
        ':scorpio:',
        ':zodiac:',
        'Skorpius',
        'Zodiaakki',
        ':purple:'
    ],
    '♐': [
        'Sagittarius',
        ':sagittarius:',
        ':zodiac:',
        'Zodiaakki',
        ':purple:'
    ],
    '♑': [
        'Kauris',
        ':capricorn:',
        ':zodiac:',
        'Zodiaakki',
        ':purple:'
    ],
    '♒': [
        'Vesimies',
        ':aquarius:',
        ':zodiac:',
        'Zodiaakki',
        ':purple:'
    ],
    '♓': [
        'Pisces',
        ':pisces:',
        ':zodiac:',
        'Zodiaakki',
        ':purple:'
    ],
    '⛎': [
        'Ophiuchus',
        ':ophiuchus:',
        ':zodiac:',
        'Zodiaakki',
        ':purple:'
    ],
    '⏭️': [
        'Ohita Eteenpäin -symboli',
        'Musta Oikea-pisteinen kaksoiskolmio pystysuoralla palkilla',
        ':skip_forward_button:',
        'Seuraava Kappaleen Painike',
        ':blue:'
    ],
    '⏮️': [
        'Ohita Taaksepäin',
        'Musta vasemmanpuoleinen kaksoiskolmio ja pystysuora palkki',
        ':skip_backward_button:',
        'Viimeisin Kappaleen Painike',
        'Edellinen Kappale',
        ':blue:'
    ],
    '⏯️': [
        'Toista tai keskeytä painike',
        'Musta Oikea-pisteinen kolmio kaksinkertaisella pystysuoralla',
        ':play_button:',
        ':pause_button:',
        ':play_or_pause_button:',
        'Pelaa Symboli',
        'Keskeytä Symboli',
        ':blue:'
    ],
    '🔀': [
        'Sekoita Kappaleiden Painike',
        ':shuffle_tracks_button:',
        'Kierretyt Oikeanpuoleiset Nuolet',
        ':blue:'
    ],
    '🔁': [
        'Toista Painike',
        ':repeat_button:',
        'Silmukan Symboli',
        'Yritä Uudelleen',
        'Kelloittain oikeanpuoleiset ja vasen avoimet nuolet',
        ':blue:'
    ],
    '🔂': [
        'Toista Yksi Painike',
        ':repeat_single_button:',
        'Nuolet Numerolla 1',
        'Silmukka Kerran Symboli',
        'Toista Yksi Kappaleen Symboli',
        'Kelloittain oikeanpuoleiset ja vasen avoin ympyrä nuolet Circled yksi peitto',
        ':blue:'
    ],
    '▶️': [
        'Toista Painike',
        ':play_button:',
        'Oikea Kolmio',
        'Oikeanpuoleinen Kolmio',
        'Musta Oikea-Pisteen Kolmio',
        ':blue:'
    ],
    '◀️': [
        'Käänteinen Painike',
        ':reverse_button:',
        'Vasen Kolmio',
        'Vasen Pisteytys Kolmio',
        'Musta Vasen Pisteytys Kolmio',
        ':blue:'
    ],
    '🔼': [
        'Ylöspäin Painike',
        ':upwards_button:',
        'Ylös Kolmio',
        'Yläpisteytys Kolmio',
        'Ylös-Pisteytys Pieni Punainen Kolmio',
        ':blue:'
    ],
    '🔽': [
        'Alaspäin -Painike',
        ':downwards_button:',
        'Alas Kolmio',
        'Down Pisteytys Kolmio',
        'Ala-Pisteytys Pieni Punainen Kolmio',
        ':blue:'
    ],
    '⏩': [
        'Pika-Eteenpäin -Painike',
        ':fast-forward_button:',
        ':fast_forward_button:',
        'Nopea Eteenpäin',
        'Nopea Eteenpäin -Symboli',
        'Musta Oikea-Pisteytys Kaksoiskolmio',
        ':blue:'
    ],
    '⏪': [
        'Fast Reverse Button',
        ':fast_reverse_button:',
        'Rewind',
        'Rewind Symboli',
        'Musta Vasemmanpuoleinen Kaksoiskolmio',
        ':blue:'
    ],
    '⏫': [
        'Nopea Ylös -Painike',
        ':fast_up_button:',
        'Kaksinkertaisen Kolmion Ylös',
        'Musta Ylöspäin Kaksoiskolmio',
        ':blue:'
    ],
    '⏬': [
        'Nopea Alas Painike',
        ':fast_down_button:',
        'Down Pisteytys Kaksoiskolmio',
        'Musta Alas Pisteytys Kaksoiskolmio',
        ':blue:'
    ],
    '⏹️': [
        'Pysäytä Painike',
        ':stop_button:',
        'Pysäytä',
        'Pysäytä Symboli',
        'Musta neliö pysäyttääksesi',
        ':blue:'
    ],
    '⏏️': [
        'Poista Painike',
        ':eject_button:',
        'Eject Symbol',
        ':blue:'
    ],
    '🎦': [
        'Elokuva',
        ':cinema_button:',
        'Elokuva Näyttö',
        'Elokuvat',
        'Elokuva',
        'Elokuvan Symboli',
        'Nauhoitetaan',
        ':blue:'
    ],
    '📶': [
        'Antennin Baarit',
        ':antenna_bars_button:',
        'Vastaanottopalkkit',
        'Signaalin Vahvuus',
        'Stairs',
        'Signaalin Vahvuus Symboli',
        'Antenni ja tangot',
        ':blue:'
    ],
    '✖️': [
        'Kerrotaan',
        ':multiply:',
        'Kerrat',
        'Kerroksen Symboli',
        'Raskas Kerros X',
        ':black:'
    ],
    '➕': [
        'Plus',
        ':plus:',
        'Plus Symboli',
        'Raskas Plus -kyltti',
        ':black:'
    ],
    '➖': [
        'Minus',
        ':minus:',
        'Minus Symbol',
        'Raskas Minus Allekirjoitus',
        ':black:'
    ],
    '➗': [
        'Jaa',
        ':divide:',
        'Divisioonan Symboli',
        'Raskas Division Allekirjoitus',
        ':black:'
    ],
    '🟰': [
        'Raskas Yhtäsuuri Allekirjoitus',
        ':heavy_equals_sign:',
        'Yhtäsuuri',
        'Tulos',
        ':black:'
    ],
    '♾️': [
        'Loputon',
        ':infinity:',
        'Pysyvä Paperimerkki'
    ],
    '‼️': [
        'Kaksinkertaisen Exklamaation Merkki',
        ':double_exclamation_mark:',
        'Punainen Kaksinkertainen Exklamaatio Merkki',
        ':red:'
    ],
    '⁉️': [
        'Exklamaation Kysymysmerkki',
        ':exclamation_question_mark:',
        'Punainen Exclamation Mark ja kysymysmerkki',
        ':red:'
    ],
    '❓': [
        'Kysymys Merkki',
        ':question_mark:',
        'Punainen Kysymysmerkki',
        'Musta Kyselymerkki Koriste',
        ':red:'
    ],
    '❔': [
        'Valkoinen Kysymysmerkki',
        ':white_question_mark:',
        ':question_mark:',
        'Valkoinen Kysymysmerkki',
        'Valkoinen Kysymys Merkitse Koriste',
        ':white:'
    ],
    '❗': [
        'Exklamaation Merkki',
        ':exclamation_mark:',
        'Punaisen Exklamaation Merkki',
        'Raskas Exclamation Mark Symboli',
        ':red:'
    ],
    '❕': [
        'Valkoinen Exklamaation Merkki',
        ':white_exclamation_mark:',
        ':exclamation_mark:',
        'Valkoinen Exclamation Mark Koriste',
        ':white:'
    ],
    '⭕': [
        'Ontto Punainen Ympyrä',
        ':hollow_red_circle:',
        'Ympyrä',
        'Oikea',
        'Punainen Ympyrä',
        'Ympyrän Merkki',
        'Raskas Suuri Ympyrä',
        ':red:'
    ],
    '☑️': [
        'Tarkista laatikko tarkistetulla',
        ':check_box_with_check:',
        'V',
        'Valintaruutu',
        'Tarkista Merkitse Kohteeseen',
        'Tarkistettu Ballot Box'
    ],
    '✔️': [
        'Tarkista Merkki',
        ':check_mark:',
        'V',
        'Tarkista',
        'Kerää',
        'Checkmark',
        'Raskas Tarkastusmerkki',
        ':black:'
    ],
    '❌': [
        'Ristijälki',
        ':cross_mark:',
        'Risti',
        'X',
        ':red:'
    ],
    '✅': [
        'Tarkista Merkkipainike',
        ':check_mark_button:',
        'V',
        'Vihreä Tarkista Merkki',
        'Vihreä Tick',
        'Tarkista Merkki',
        'Valkoinen Raskas Tarkastusmerkki',
        ':green:'
    ],
    '❎': [
        'Ristijäljen Painike',
        ':cross_mark_button:',
        'Risti',
        'X',
        'X Merkki',
        'Negatiivinen Ristimerkki',
        ':green:'
    ],
    '#️⃣': [
        'Näppäimistön Numero Allekirjoitus',
        ':hash_key:',
        '#',
        'Hash Key',
        'Hashtag',
        'Lokakuutio',
        'Pound Key',
        'Numero Allekirjoitus',
        ':blue:'
    ],
    '*️⃣': [
        'Keycap Asterisk',
        ':asterisk:',
        'Tähden Näppäinkorkki',
        ':blue:'
    ],
    '0️⃣': [
        'Numero 0',
        ':number_0:',
        'Keycap Digit Zero'
    ],
    '1️⃣': [
        'Numero 1',
        ':number_1:',
        'Keycap Digit One'
    ],
    '2️⃣': [
        'Numero 2',
        ':number_2:',
        'Keycap Digit 2'
    ],
    '3️⃣': [
        'Numero 3',
        ':number_3:',
        'Keycap Digit Kolme'
    ],
    '4️⃣': [
        'Numero 4',
        ':number_4:',
        'Keycap Digit Neljä'
    ],
    '5️⃣': [
        'Numero 5',
        ':number_5:',
        'Keycap Digit Five'
    ],
    '6️⃣': [
        'Numero 6',
        ':number_6:',
        'Keycap Digit Kuusi'
    ],
    '7️⃣': [
        'Numero 7',
        ':number_7:',
        'Keycap Digit Seven'
    ],
    '8️⃣': [
        'Numero 8',
        ':number_8:',
        'Keycap Digit Eight'
    ],
    '9️⃣': [
        'Numero 9',
        ':number_9:',
        'Keycap Digit Yhdeksän'
    ],
    '🔟': [
        'Numero 10',
        ':number_10:',
        'Keycap: 10',
        '10',
        'Keycap Digit Kymmenen'
    ],
    '🔠': [
        'Input Latin Uppercase',
        ':input_latin_uppercase:',
        'ABCD',
        'Isot',
        'Sisääntulon symboli isoille kirjaimille',
        'Sisääntulon tunnus latinalaiselle pääkirjalle',
        ':blue:'
    ],
    '🔡': [
        'Input Latin Lowercase',
        ':input_latin_lowercase:',
        'abcd',
        'Pienet Kirjaimet',
        'Sisääntulon tunnus pienikokoisille kirjaimille',
        'Syöttötunnuksen latinalaiseen pieneen kirjaimeen',
        ':blue:'
    ],
    '🔢': [
        'Input Numbers',
        ':input_numbers:',
        '1234',
        'Numerot',
        'Numeric Input',
        'Numeroiden sisääntulon tunnus',
        ':blue:'
    ],
    '🔣': [
        'Sisääntulon symboli symbolit',
        ':input_symbols:',
        'Symbolit',
        'Symboli Sisääntulo',
        ':blue:'
    ],
    '🔤': [
        'Input Latin Letters',
        ':input_latin_letters:',
        'abc',
        'Aakkoset',
        'Kirjaimet',
        'Sisääntulon tunnus kirjaimille',
        'Sisääntulon tunnus latinalaisissa kirjaimissa',
        ':blue:'
    ],
    '🅰️': [
        'A Painike (loodityyppi)',
        ':a_blood:',
        'Veren Tyyppi A',
        'Kirje A',
        'Negatiivinen Latinalaisen Pääoman Kirje A',
        ':red:'
    ],
    '🆎': [
        'Ab-Painike (loodityyppi)',
        ':ab_blood:',
        'Kirjaimet AB',
        'Verityyppi AB',
        'Negatiivinen Squared AB',
        ':red:'
    ],
    '🅱️': [
        'B Painike (loodityyppi)',
        ':b_blood:',
        'Kirje B',
        'Verityyppi B',
        'Negatiivinen Latinalaisen Pääoman Kirje B',
        ':red:'
    ],
    '🆑': [
        'CL Painike',
        ':cl_button:',
        'Tyhjennä',
        'Tyhjennä Painike',
        'CL Allekirjoitus',
        'Neliöity CL',
        'Kirjaimet CL',
        ':red:'
    ],
    '🆒': [
        'Viileä Painike',
        ':cool_button:',
        'Kylmä Neliö',
        'Viileä Kyltti',
        'Squared Cool',
        ':blue:'
    ],
    '🆓': [
        'Ilmainen Painike',
        ':free_button:',
        'Ilmainen',
        'Ilmainen Allekirjoitus',
        'Neliöity Vapaa',
        ':blue:'
    ],
    'ℹ️': [
        'Tiedot',
        ':info_button:',
        'Tietoa',
        'Pienet Kirjaimet I',
        'Matkailun Tiedot',
        'Tiedon Lähde',
        ':blue:'
    ],
    '🆔': [
        'Tunnuksen Painike',
        ':id_button:',
        'ID',
        'Tunnistaminen',
        'Tunniste Allekirjoitus',
        'Neliön Tunnus',
        ':purple:'
    ],
    '🆕': [
        'Uusi Painike',
        ':new_button:',
        'Uusi',
        'Uusi Allekirjoitus',
        'Neliöity Uusi',
        ':blue:'
    ],
    '🅾️': [
        'O Painike (loodityyppi)',
        ':0_blood:',
        'Veren Tyyppi O',
        '0',
        'Negatiivinen Latinalaisen Pääoman Kirje',
        'Kirjain O',
        ':red:'
    ],
    '🆗': [
        'OK Painike',
        ':ok_button:',
        'OK',
        'Okei',
        'Neliö',
        'OK Allekirjoitus',
        'Neliöity OK',
        ':blue:'
    ],
    '🅿️': [
        'P Painike',
        ':p_button:',
        ':parking_sign:',
        'Pysäköinti Allekirjoitus',
        'Negatiivinen Latinalaisen Pääoman Kirje',
        'Kirje P',
        ':blue:'
    ],
    '🆘': [
        'Sos Painike',
        ':sos_button:',
        'Hätäsignaali',
        'Hätätila',
        'SOS',
        'Sos Allekirjoitus',
        'Neliöidyt SOS',
        'Ohje',
        ':red:'
    ],
    '🆙': [
        'Ylhäältä! Painike',
        ':up_button:',
        'Taso Ylös',
        'Ylös',
        'Ylös Allekirjoitus',
        'Squared Up with Exclamation Mark',
        ':blue:'
    ],
    '🆚': [
        'VS -painike',
        ':vs_button:',
        'Neljäs Vs',
        ':orange:'
    ],
    '🆖': [
        'Ng Painike',
        ':ng_button:',
        'Neliöity NG',
        'Ei Hyvä Allekirjoitus',
        'Ei Hyvä',
        ':ng:',
        'Blooper',
        ':blue:'
    ],
    '🔴': [
        'Punainen Ympyrä',
        ':red_circle:',
        'Suuri Punainen Ympyrä',
        ':red:'
    ],
    '🟠': [
        'Oranssi Ympyrä',
        ':orange_circle:',
        'Suuri Oranssi Ympyrä',
        ':orange:'
    ],
    '🟡': [
        'Keltainen Ympyrä',
        ':yellow_circle:',
        'Suuri Keltainen Ympyrä',
        ':yellow:'
    ],
    '🟢': [
        'Vihreä Ympyrä',
        ':green_circle:',
        'Suuri Vihreä Ympyrä',
        ':green:'
    ],
    '🔵': [
        'Sininen Ympyrä',
        ':blue_circle:',
        'Suuri Sininen Ympyrä',
        ':blue:'
    ],
    '🟣': [
        'Violetti Ympyrä',
        ':purple_circle:',
        'Suuri Violetti Ympyrä',
        ':purple:'
    ],
    '🟤': [
        'Ruskea Ympyrä',
        ':brown_circle:',
        'Suuri Ruskea Ympyrä',
        ':brown:'
    ],
    '⚫': [
        'Musta Ympyrä',
        ':black_circle:',
        'Keskikokoinen Musta Ympyrä',
        ':black:'
    ],
    '⚪': [
        'Valkoinen Ympyrä',
        ':white_circle:',
        'Keskikokoinen Valkoinen Ympyrä',
        ':white:'
    ],
    '🟥': [
        'Punainen Neliö',
        ':red_square:',
        'Suuri Punainen Neliö',
        ':red:'
    ],
    '🟧': [
        'Oranssi Neliö',
        ':orange_square:',
        'Suuri Oranssi Neliö',
        ':orange:'
    ],
    '🟨': [
        'Keltainen Neliö',
        ':yellow_square:',
        'Suuri Keltainen Neliö',
        ':yellow:'
    ],
    '🟩': [
        'Vihreä Neliö',
        ':green_square:',
        'Suuri Vihreä Neliö',
        ':green:'
    ],
    '🟦': [
        'Sininen Neliö',
        ':blue_square:',
        'Suuri Sininen Neliö',
        ':blue:'
    ],
    '🟪': [
        'Violetti Neliö',
        ':purple_square:',
        'Suuri Violetti Neliö',
        ':purple:'
    ],
    '🟫': [
        'Ruskea Neliö',
        ':brown_square:',
        'Suuri Ruskea Neliö',
        ':brown:'
    ],
    '⬛': [
        'Musta Suuri Neliö',
        ':black_large_square:',
        ':black:'
    ],
    '⬜': [
        'Valkoinen Suuri Neliö',
        ':white_large_square:',
        ':white:'
    ],
    '◼️': [
        'Musta Keskikokoinen Neliö',
        ':black_medium_square:',
        ':black:'
    ],
    '◻️': [
        'Valkoinen Keskikokoinen Neliö',
        ':white_medium_square:',
        ':white:'
    ],
    '◾': [
        'Musta Keskikokoinen Pieni Neliö',
        ':black_medium_small_square:',
        ':black:'
    ],
    '◽': [
        'Valkoinen Keskikokoinen Pieni Neliö',
        ':white_medium_small_square:',
        ':white:'
    ],
    '▪️': [
        'Musta Pieni Neliö',
        ':black_small_square:',
        ':black:'
    ],
    '▫️': [
        'Valkoinen Pieni Neliö',
        ':white_small_square:',
        ':white:'
    ],
    '💠': [
        'Timantti muoto, jossa Dot sisällä',
        ':diamond_shape_with_dot:',
        'Ruoansulatus',
        'Timantti Kukka',
        'Kavaiji'
    ],
    '🔶': [
        'Suuri Oranssi Timantti',
        ':large_orange_diamond:',
        ':orange:'
    ],
    '🔷': [
        'Suuri Sininen Timantti',
        ':large_blue_diamond:',
        ':blue:'
    ],
    '🔸': [
        'Pieni Oranssi Timantti',
        ':small_orange_diamond:',
        ':orange:'
    ],
    '🔹': [
        'Pieni Sininen Timantti',
        ':small_blue_diamond:',
        ':blue:'
    ],
    '🔺': [
        'Punainen Kolmio Pointed Ylös',
        ':red_triangle_pointed_up:',
        'Ylös Pisteytys Punainen Kolmio',
        ':red:'
    ],
    '🔻': [
        'Punainen Kolmio Pointed Alas',
        ':red_triangle_pointed_down:',
        'Down Pisteytys Punainen Kolmio',
        ':red:'
    ],
    '🔳': [
        'Valkoinen Neliön Painike',
        ':white_square_button:',
        ':white:',
        ':black:'
    ],
    '🔲': [
        'Musta Neliöpainike',
        ':black_square_button:',
        ':white:',
        ':black:'
    ],
    '©️': [
        'Tekijänoikeus',
        ':copyright:',
        ':c:',
        'Tekijänoikeus Allekirjoitus'
    ],
    '®️': [
        'Rekisteröity',
        ':registered:',
        ':r:',
        'Rekisteröity Allekirjoitus'
    ],
    '™️': [
        'Kauppanimi',
        ':trade_mark:',
        ':tm:',
        'Tavaramerkki',
        'Tavaramerkin Allekirjoitus'
    ],
    '🛅': [
        'Vasen Matkatavarat',
        ':left_luggage:',
        'Pussi Avain',
        'Lukitut Matkalaukut',
        ':blue:'
    ],
    '🛄': [
        'Matkatavaroiden Lunastaminen',
        ':baggage_claim:',
        ':blue:'
    ],
    '🛃': [
        'Tulli',
        ':customs:',
        ':blue:'
    ],
    '🛂': [
        'Passin Valvonta',
        ':passport_control:',
        'Reunan Ohjaus',
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
        'Potable Water Symboli',
        ':potable_water_symbol:',
        'Joni',
        'Juudas',
        'Vesi Napautus',
        'Vesihuolto'
    ],
    '🇦': [
        'Kirje A',
        ':letter_a:',
        ':a:',
        'Alueellisen Indikaattorin Tunnuskirjain A'
    ],
    '🇧': [
        'Kirje B',
        ':letter_b:',
        ':b:',
        'Alueellisen Indikaattorin Merkkikirje B'
    ],
    '🇨': [
        'Kirje C',
        ':letter_c:',
        ':c:',
        'Alueellisen Indikaattorin Merkkikirjain C'
    ],
    '🇩': [
        'Kirje D',
        ':letter_d:',
        ':d:',
        'Alueellisen Indikaattorin Tunnuskirjain D'
    ],
    '🇪': [
        'Kirje E',
        ':letter_e:',
        ':e:',
        'Alueellisen Indikaattorin Merkkikirjain E'
    ],
    '🇫': [
        'Kirje F',
        ':letter_f:',
        ':f:',
        'Alueellisen Indikaattorin Merkkikirjain F'
    ],
    '🇬': [
        'Kirje G',
        ':letter_g:',
        ':g:',
        'Alueellisen Indikaattorin Tunnuskirjain G'
    ],
    '🇭': [
        'Kirje H',
        ':letter_h:',
        ':h:',
        'Alueellisen Indikaattorin Tunnuskirjain H'
    ],
    '🇮': [
        'Kirje I',
        ':letter_i:',
        ':i:',
        'Alueellisen Indikaattorin Merkkikirjain I'
    ],
    '🇯': [
        'Kirje J',
        ':letter_j:',
        ':j:',
        'Alueellinen Indikaattori Symbol Letter J'
    ],
    '🇰': [
        'Kirje K',
        ':letter_k:',
        ':k:',
        'Alueellinen Indikaattori Symbol Letter K'
    ],
    '🇱': [
        'Kirjain L',
        ':letter_l:',
        ':l:',
        'Alueellisen Indikaattorin Merkkikirjain L'
    ],
    '🇲': [
        'Kirje M',
        ':letter_m:',
        ':m:',
        'Alueellisen Indikaattorin Merkkikirjain M'
    ],
    '🇳': [
        'Kirje N',
        ':letter_n:',
        ':n:',
        'Alueellisen Indikaattorin Tunnuskirjain N'
    ],
    '🇴': [
        'Kirjain O',
        ':letter_o:',
        ':o:',
        'Alueellisen Indikaattorin Tunnuskirjain O'
    ],
    '🇵': [
        'Kirje P',
        ':letter_p:',
        ':p:',
        'Alueellisen Indikaattorin Tunnuskirjain P'
    ],
    '🇶': [
        'Kirje Q',
        ':letter_q:',
        ':q:',
        'Alueellinen Merkkijonokirjain Q'
    ],
    '🇷': [
        'Kirje R',
        ':letter_r:',
        ':r:',
        'Alueellinen Merkkijonomerkki R'
    ],
    '🇸': [
        'Kirje S',
        ':letter_s:',
        ':s:',
        'Alueellisen Indikaattorin Merkkikirjain S'
    ],
    '🇹': [
        'Kirje T',
        ':letter_t:',
        ':t:',
        'Alueellinen Merkkijonomerkki T'
    ],
    '🇺': [
        'Kirje U',
        ':letter_u:',
        ':u:',
        'Alueellinen Indikaattori Symbol Letter U'
    ],
    '🇻': [
        'Kirje V',
        ':letter_v:',
        ':v:',
        'Alueellinen Merkkijonomerkki V'
    ],
    '🇼': [
        'Kirje W',
        ':letter_w:',
        ':w:',
        'Alueellinen Indikaattorin Merkkikirje W'
    ],
    '🇽': [
        'Kirje X',
        ':letter_x:',
        ':x:',
        'Alueellisen Indikaattorin Merkkikirje X'
    ],
    '🇾': [
        'Kirje Y',
        ':letter_y:',
        ':y:',
        'Alueellinen Indikaattorin Merkkikirjain Y'
    ],
    '🇿': [
        'Kirje Z',
        ':letter_z:',
        ':z:',
        'Alueellisen Indikaattorin Symbolin Kirje Z'
    ],
    '💌': [
        'Rakkaus Kirje',
        ':love_letter:',
        'Sydän Kirjekuori',
        'Rakasta Muistiinpano'
    ],
    '🚮': [
        'Laita pentue sen paikka symboli',
        ':put_litter_in_bing_sign:',
        'Pehmeä Bin Kirjaudu sisään',
        'Laita Vieras Roskakoriin',
        'Henkilö Roskakorilla'
    ],
    '♿': [
        'Pyörätuolin Symboli',
        ':wheelchair_symbol:',
        'Esteetön Kylpyhuone'
    ],
    '🚹': [
        'Miesten Symboli',
        ':mens_symbol:',
        'Miesten Symboli',
        'Miesten WC',
        'Miehen Restroom',
        'Miehen WC',
        ':blue:'
    ],
    '🚺': [
        'Naisten Symboli',
        ':womens_symbol:',
        'Naisten Symboli',
        'Naisten WC',
        'Naisen Restroom',
        'Famale WC',
        ':purple:',
        ':pink:'
    ],
    '🚻': [
        'Restroom',
        ':restroom:',
        'Kylpyhuoneen Allekirjoitus',
        'WC:n Allekirjoitus',
        'WC Allekirjoitus',
        ':blue:'
    ],
    '🚼': [
        'Vauvan Symboli',
        ':baby_symbol:',
        'Vauvan Muutosasema',
        'Vauvan Muutoksen Symboli',
        'Taimitarha',
        ':orange:'
    ],
    '🚾': [
        'Veden Suljin',
        ':wc:',
        'WC',
        'WC WC',
        ':blue:'
    ],
    '⚠️': [
        'Varoitus Merkki',
        ':warning_sign:',
        'Hälytyksen Symboli',
        ':yellow:'
    ],
    '🚸': [
        'Lasten Risteys',
        ':children_crossing:',
        'Lasten Risteys',
        'Koulun Ristiretki',
        ':yellow:'
    ],
    '🔅': [
        'Matalan Kirkkauden Symboli',
        ':low_brightness_symbol:',
        'Himmennä Painike',
        'Vähennä Kirkkautta'
    ],
    '🔆': [
        'Korkea Kirkkaus Symboli',
        ':high_brightness_symbol:',
        'Lisää Kirkkautta',
        'Kirkas Painike'
    ],
    '📳': [
        'Värinä Tila',
        ':vibration_mode:',
        'Puhelimen Sydän',
        'Äänetön Tila',
        ':orange:'
    ],
    '📴': [
        'Mobiilipuhelin Pois Käytöstä',
        ':mobile_phone_off:',
        ':orange:'
    ],
    '〰️': [
        'Aalto',
        'Wavy Dash',
        ':wave:'
    ],
    '💱': [
        'Valuutan Valuutta',
        ':currency_exchange:'
    ],
    '💲': [
        'Raskaan Dollarin Allekirjoitus',
        ':dollar_symbol:',
        'Dollari',
        'Dollarin Allekirjoitus'
    ],
    '♻️': [
        'Musta Universal Kierrätys Symboli',
        ':recycling_symbol:',
        'Kierrätystunnus',
        'Kierrätä Logo',
        ':green:'
    ],
    '🔱': [
        'Trident Tunnus',
        ':trident_emblem:',
        'Pitchfork',
        'Trident'
    ],
    '📛': [
        'Nimen Merkki',
        ':name_badge:',
        'Tofu Tulessa',
        'Nimi Tagi',
        'Tuli Tagi'
    ],
    '🔰': [
        'Japanin tunnus aloittelijalle',
        ':japanese_symbol_beginner:',
        'Shoshinsha Merkki',
        'Keltainen Vihreä Kilpi',
        ':green:',
        ':yellow:'
    ],
    '➰': [
        'Curly Silmukka',
        ':curly_loop:',
        'Curling Silmukka',
        'Silmukka'
    ],
    '➿': [
        'Kaksinkertainen Kiertosilmukka',
        ':double_curly_loop:',
        'KaksoisCurling Silmukka',
        'Vastaaja'
    ],
    '〽️': [
        'Osan Vaihtoehdon Merkki',
        ':part_alternation_mark:',
        'M',
        'McDonalds'
    ],
    '✳️': [
        'Kahdeksan Poimittua Asteriskia',
        ':eight_spoked_asterisk:',
        ':green:'
    ],
    '✴️': [
        'Kahdeksan Osoitettua Musta Tähti',
        ':eight_pointed_star:',
        'Oranssi Tähti',
        'Kahdeksan Osoitettua Tähti',
        ':orange:'
    ],
    '❇️': [
        'Sparkle',
        ':sparkle:',
        ':green:'
    ],
    'Ⓜ️': [
        'Kierretty M',
        'Circled Latin Capital Letter M',
        ':circled_m:',
        'Metro',
        ':blue:'
    ],
    '🈁': [
        'Japanin Sana Allekirjoitus Merkitys Täällä',
        'Squared Katakana Koko',
        ':japanese_here:',
        'Tässä',
        'Kohde',
        ':blue:'
    ],
    '🈂️': [
        'Japanilainen viittomamerkintä Palvelu tai palvelumaksu',
        'Squared Katakana Sa',
        ':japanese_service:',
        ':blue:'
    ],
    '🈷️': [
        'Japanin Allekirjoituksen Merkitys Kuukausittainen Määrä',
        'CJK Yhtenäinen Ideograph-6708',
        ':japanese_monthly_amouny:',
        'Radikaali 74',
        '月',
        ':orange:'
    ],
    '🈶': [
        'Japanilainen viittomamerkki, joka ei ole maksuton',
        'CJK Yhtenäinen Ideograph-6709',
        ':japanese_own:',
        'Oma',
        '有',
        ':orange:'
    ],
    '🈯': [
        'Japanilainen Allekirjoituksen Merkitys Varattu',
        'CJK Yhtenäinen Ideograph-6307',
        ':japanese_reserved:',
        'Sormen Piste',
        '指',
        ':green:'
    ],
    '🉐': [
        'Japanilainen Allekirjoituksen Merkitys',
        'Kierretyn Ideografin Edut',
        ':japanese_acquire:',
        'Hanki',
        '得',
        ':red:'
    ],
    '🈹': [
        'Japanin Allekirjoituksen Merkitys Alennus',
        'CJK Yhtenäinen Ideograph-5272',
        ':japanese_discount:',
        'Bargain Myynti',
        '割',
        ':red:'
    ],
    '🈚': [
        'Japanilainen kyltti Merkitys ilmaiseksi',
        'Neljäs CJK Unified Ideograph-7121',
        ':japanese_lacking:',
        'Puuttuu',
        '無',
        ':orange:'
    ],
    '🈲': [
        'Japanilainen Merkki Merkitys Kielletty',
        'Yhtenäinen CJK Unified Ideograph-7981',
        ':japanese_prohibited:',
        'Forbid',
        '禁',
        ':red:'
    ],
    '🉑': [
        'Japanin Allekirjoituksen Merkitys Hyväksyttävä',
        'Kierretty Ideograph Hyväksy',
        ':japanese_accept:',
        'Hyväksy',
        ':orange:'
    ],
    '🈸': [
        'Japanilainen Allekirjoituksen Merkitys Sovellus',
        'CJK Yhtenäinen Ideograph-7533',
        ':japanese_application_form:',
        'Sovelluslomake',
        'Apina',
        'Pyyntö',
        '申',
        ':orange:'
    ],
    '🈴': [
        'Japanilainen Allekirjoituksen Merkitys Syöttäminen (Luokka)',
        'CJK Yhtenäinen Ideograph-5408',
        ':japanese_agreement:',
        'Sopimus',
        '合',
        ':red:'
    ],
    '🈳': [
        'Japanilainen Merkitys Vacancy',
        'Yhtenäinen CJK Unified Ideograph-7a7A',
        ':japanese_available:',
        'Tyhjä ja käytettävissä',
        '空',
        ':blue:'
    ],
    '㊗️': [
        'Onnittelut Japanilaiselle Allekirjoitukselle',
        'Kierretty Ideograph Onnittelut',
        ':japanese_congratulations:',
        ':red:'
    ],
    '㊙️': [
        'Kierretty Ideograph Salaisuus',
        ':japanese_secret:',
        'Japanilainen Allekirjoituksen Salaisuus',
        'Salainen',
        ':red:'
    ],
    '🈺': [
        'Japanilainen viittomamerkintä Open for Business',
        'Neljäs CJK Unified Ideograph-55b6',
        ':japanese_open_for_business:',
        'Työ',
        '営',
        ':orange:'
    ],
    '🈵': [
        'Japanilainen Merkitys Täysi; Ei Vacancy',
        'Yhtenäinen CJK Unified Ideograph-6e80',
        ':japanese_full:',
        'Täysi',
        '満',
        ':red:'
    ],
    '🔘': [
        'Radion Painike',
        ':radio_button:'
    ],
    '🛑': [
        'Pysäytä Allekirjoitus',
        ':stop_sign:',
        'Oktatiivinen Kyltti',
        ':red:'
    ],
    '⚕️': [
        'Lääketieteellinen Symboli',
        ':medical_symbol:',
        'Aesculapius',
        'Asklepios',
        'Asclepius-suvun sauva',
        'Aesculapiuksen henkilöstö'
    ],
    '🛗': [
        'Hissi',
        ':elevator:',
        ':lift:',
        'Hissi'
    ],
    '⚧️': [
        'Transsukupuolinen Symboli',
        ':transgender_sign:'
    ],
    '♂️': [
        'Miehen Allekirjoitus',
        ':male_sign:',
        'Man Symboli',
        'Mars Symboli'
    ],
    '♀️': [
        'Naisen Allekirjoitus',
        ':female_sign:',
        'Nainen Symboli',
        'Venus Symbol'
    ]
};
/*food and drinks*/
emojis_language[lang][6] = {
    '🍇': [
        'Rypäleet',
        ':grapes:',
        'Viinirypäleet',
        ':purple:'
    ],
    '🍈': [
        'Meloni',
        ':melon:',
        'Cantaloupe',
        'Honeydew',
        'Muskmeloni'
    ],
    '🍉': [
        'Vesimeloni',
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
        'Sitruuna',
        ':lemon:',
        'Sitruunahappo',
        ':yellow:'
    ],
    '🍌': [
        'Banaani',
        ':banana:',
        'Plantain',
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
        'Punainen Apple',
        ':red_apple:',
        ':apple:',
        'Red Herkullinen Omena',
        ':red:'
    ],
    '🍏': [
        'Vihreä Osa',
        ':green_apple:',
        ':apple:',
        'Golden Delicious Omena',
        'Granny Smith Apple',
        ':green:'
    ],
    '🍐': [
        'Päärynät',
        ':pear:'
    ],
    '🍑': [
        'Persikka',
        ':peach:',
        'Alhaalla',
        'Butt',
        ':orange:',
        ':pink:'
    ],
    '🍒': [
        'Kirsikat',
        ':cherry:',
        'Kirsikka',
        'Luonnonvaraiset Kirsikat',
        ':red:'
    ],
    '🍓': [
        'Mansikka',
        ':strawberry:',
        ':red:'
    ],
    '🥝': [
        'Kiivihedelmät',
        ':kiwi:',
        'Kiinalainen Karviainen',
        'Kiivihedelmät',
        'Kiivit',
        ':green:'
    ],
    '🍅': [
        'Tomaatti',
        ':tomato:',
        ':red:'
    ],
    '🥥': [
        'Kookospähkinä',
        ':coconut:',
        'Cocoanut'
    ],
    '🥑': [
        'Avokado',
        ':avocado:',
        ':green:'
    ],
    '🍆': [
        'Munakoiso',
        ':eggplant:',
        ':aubergine:',
        'Aubergine',
        'Phallinen',
        'Violetti Kasvikset',
        ':purple:'
    ],
    '🥔': [
        'Peruna',
        ':potato:',
        'Kypsän Peruna',
        'Idahon Peruna'
    ],
    '🥕': [
        'Porkkana',
        ':carrot:',
        ':orange:'
    ],
    '🌽': [
        'Maissin korva',
        ':ear_of_corn:',
        'Maissi',
        'Maissi Cob',
        'Maissi',
        'Maissin korva'
    ],
    '🌶️': [
        'Kuuma Pippuri',
        ':hot_pepper:',
        'Chilipippuri',
        'Mausteena',
        ':red:'
    ],
    '🥒': [
        'Kurkku',
        ':cucumber:',
        'Pikkukurkku',
        'Papeli',
        ':green:'
    ],
    '🥬': [
        'Lehtivihreä',
        ':leafy_green:',
        'Bok Choy',
        'Kiinalainen Kaali',
        'Cos Lettuce',
        'Romaine Lettuce',
        'Lehtivihreät',
        ':green:'
    ],
    '🥦': [
        'Parsakaalit',
        ':broccoli:',
        ':green:'
    ],
    '🍋‍🟩': [
        'Lime',
        ':lime:',
        ':green:'
    ],
    '🍄': [
        'Sieni',
        ':mushroom:',
        'Paikka',
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
        'Pähkinät',
        ':brown:'
    ],
    '🌰': [
        'Kastanja',
        ':chestnut:',
        'Acorn',
        'Nut',
        ':brown:'
    ],
    '🍞': [
        'Leipä',
        ':bread:',
        'Leipäkuori (leivät)',
        ':brown:'
    ],
    '🥐': [
        'Croissant',
        ':croissant:',
        ':brown:'
    ],
    '🥖': [
        'Baguette Leipä',
        ':baguette_bread:',
        'Ranskalainen Leipä',
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
        'Pannukakut',
        ':pancakes:',
        'Kreeta',
        'Pikkukakut',
        ':yellow:'
    ],
    '🧀': [
        'Juuston Häät',
        ':cheese_wedge:',
        'Muikku',
        ':yellow:'
    ],
    '🍖': [
        'Luun liha',
        ':meat_on_bone:',
        'BBQ',
        'Grilli',
        'Mangan Liha',
        ':red:'
    ],
    '🍗': [
        'Poultry Leg',
        ':poultry_leg:',
        'Drumstick',
        'Turkin Jalka',
        ':red:'
    ],
    '🥩': [
        'Lihan leikkaus',
        ':cut_of_meat:',
        'Liha',
        'Pihvi',
        ':red:'
    ],
    '🥓': [
        'Pekoni',
        ':bacon:',
        'Rashers',
        ':red:'
    ],
    '🍔': [
        'Hampurilainen',
        ':hamburger:',
        'Burger',
        'Juustojäte'
    ],
    '🍟': [
        'Ranskalainen Fries',
        ':french_fries:',
        'Sirut',
        'Omenat',
        'McDonalds Fries',
        ':yellow:'
    ],
    '🍕': [
        'Pizza',
        ':pizza:',
        'Pepperoni Pizza',
        'Pizzan viipale',
        ':red:'
    ],
    '🌭': [
        'Kuuma Koira',
        ':hot_dog:',
        'Potkoira',
        'Makkara',
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
        'Rivitys'
    ],
    '🥙': [
        'Täytetty Taskukakku',
        ':stuffed_flatbread:',
        'Doner Kebab',
        'Gyro',
        'Shawarma',
        'Pita Sandwich'
    ],
    '🍳': [
        'Ruoanlaitto',
        ':cooking:',
        'Aamiainen',
        'Paistettu Muna',
        'Panimo Pan'
    ],
    '🥘': [
        'Matala Pan of Food',
        ':shallow_pan_of_food:',
        'Paella',
        'Ruoan pauna'
    ],
    '🍲': [
        'Ruuan laatikko',
        ':pot_of_food:',
        'Kulho Ruoka',
        'Keitto',
        'Varsi'
    ],
    '🥣': [
        'Kulho ja lusikka',
        ':bowl_with_spoon:',
        'Viljakulho'
    ],
    '🥗': [
        'Vihreä Salaatti',
        ':green_salad:',
        'Salaatti',
        ':green:'
    ],
    '🍿': [
        'Popcorn',
        ':popcorn:',
        'Popping Maissi'
    ],
    '🧂': [
        'Suola',
        ':salt:',
        'Suola Shaker',
        ':white:'
    ],
    '🥫': [
        'Säilötty Ruoka',
        ':canned_food:',
        'Voi ruokaa',
        'Tin Voi',
        'Säilötyt Ruoat'
    ],
    '🍱': [
        'Bento Box',
        ':bento_box:',
        'Lounas Laatikko'
    ],
    '🍘': [
        'Riisin Haltija',
        ':rice_cracker:',
        'Haltija'
    ],
    '🍙': [
        'Riisin Pallo',
        ':rice_ball:',
        'Onigiri'
    ],
    '🍚': [
        'Kypsennetty Riisi',
        ':cooked_rice:',
        'Keitetty Riisi',
        'Riisi',
        'Riisin Kulho',
        'Höyrytetty Riisi'
    ],
    '🍛': [
        'Curry Riisi',
        ':curry_rice:',
        'Curry',
        'Intialainen Ruoka',
        'Curry ja riisi'
    ],
    '🍜': [
        'Höyryttävä Kulho',
        ':steaming_bowl:',
        'Nuudelit',
        'Nuudelit Pikkutikkuilla',
        'Ramen'
    ],
    '🍝': [
        'Spaghetti',
        ':spaghetti:',
        'Pasta'
    ],
    '🍠': [
        'Paahdettu Makea Peruna',
        ':roasted_sweet_potato:',
        'Herkullinen Peruna',
        'Jamssit'
    ],
    '🍢': [
        'Oden',
        ':oden:',
        'Kebab',
        'Skewer'
    ],
    '🍣': [
        'Sushi',
        ':sushi:',
        'Sashimi',
        'Merenkulku',
        ':pink:'
    ],
    '🍤': [
        'Paistettu Katkarapu',
        ':fried_shrimp:',
        'Paistettu Katkarapu',
        'Katkarapu Tempura'
    ],
    '🍥': [
        'Kalakakku ja pyörre',
        ':fish_cake_with_swirl:',
        'Fishcake',
        'Pink Swirl'
    ],
    '🥮': [
        'Kuun Kakku',
        ':moon_cake:',
        'Kuun Kakku'
    ],
    '🍡': [
        'Dango',
        ':dango:',
        'Jälkiruoka Kiinni',
        'Vaaleanpunainen Valkoinen Pallot'
    ],
    '🥟': [
        'Dumpling',
        ':dumpling:',
        'Empanada',
        'Pierogi'
    ],
    '🥠': [
        'Fortune Cookie',
        ':fortune_cookie:'
    ],
    '🥡': [
        'Yritysosto Laatikko',
        ':takeout_box:',
        'Kiinalainen Elintarvikelaatikko',
        'Oyster Pail'
    ],
    '🍦': [
        'Pehmeä Jäätelö',
        ':soft_ice_cream:',
        'Whippy',
        'Pehmeä Palvelin'
    ],
    '🍧': [
        'Ravistettu Jää',
        ':shaved_ice:',
        'Lumi Cone'
    ],
    '🍨': [
        'Jäätelö',
        ':ice_cream:',
        'Kulho Jäätelöä',
        'Jälkiruoka'
    ],
    '🍩': [
        'Doughnut',
        ':doughnut:',
        'Donut'
    ],
    '🍪': [
        'Eväste',
        ':cookie:',
        'Keksit',
        'Suklaa Chip Eväste',
        ':brown:'
    ],
    '🎂': [
        'Syntymäpäivä Kakku',
        ':birthday_cake:',
        'Syntymäpäivä',
        'Kakku',
        'Kakku Kynttilällä'
    ],
    '🍰': [
        'Pikanäppäin',
        ':shortcake:',
        'Kakku',
        'Kakku Kappale',
        'Mansikan Shortcake'
    ],
    '🧁': [
        'Cupcake',
        ':cupcake:',
        'Fairy Kakku'
    ],
    '🥧': [
        'Pieni',
        ':pie:'
    ],
    '🍫': [
        'Suklaa Pylväs',
        ':chocolate_bar:',
        'Karkkipalkki',
        'Suklaa',
        ':brown:'
    ],
    '🍬': [
        'Karkki',
        ':candy:',
        'Lolly',
        'Suloinen'
    ],
    '🍭': [
        'Lollipop',
        ':lollipop:',
        'Ikäri'
    ],
    '🍮': [
        'Custard',
        ':custard:',
        'Creme Caramel',
        'Jälkiruoka',
        'Flantti',
        'Pudding'
    ],
    '🍯': [
        'Hunaja-ruoka',
        ':honey_pot:',
        'Hunaja',
        'Potti',
        ':yellow:'
    ],
    '🍼': [
        'Vauvan Pullo',
        ':baby_bottle:',
        'Pullon Ruokinta'
    ],
    '🥛': [
        'Maidon lasia',
        ':glass_of_milk:',
        'Maito',
        ':white:'
    ],
    '☕': [
        'Kuuma Juoma',
        ':hot_beverage:',
        'Kahvi',
        'Espresso',
        'Kuuma Suklaa',
        'Tee'
    ],
    '🍵': [
        'Opettaja Ilman Kahvaa',
        ':green_tea:',
        'Vihreä Tee',
        'Matcha',
        'Vihreä Matcha Tea',
        ':green:'
    ],
    '🍶': [
        'Sake',
        ':sake:',
        'Pullo',
        'Riisi Viini',
        'Sake Bottle ja Cup'
    ],
    '🍾': [
        'Pullo Popping Corkin kanssa',
        ':champagne:',
        'Juhla',
        'Champagne',
        'Kuohuviini'
    ],
    '🍷': [
        'Viini Lasi',
        ':wine_glass:',
        'Alkoholi',
        'Punaviini',
        'Viini'
    ],
    '🍸': [
        'Cocktail Lasi',
        ':cocktail_glass:',
        'Cocktail',
        'Martini'
    ],
    '🍹': [
        'Trooppinen Juoma',
        ':tropical_drink:',
        'HedelmÃ¤n Punkki',
        'Tiki-juoma'
    ],
    '🍺': [
        'Oluen Muki',
        ':beer_mug:',
        'Olut',
        'Olut Stein',
        ':yellow:'
    ],
    '🍻': [
        'Clinking Olut Mukit',
        ':clinking_beer_mugs:',
        'Oluet',
        'Huijaukset'
    ],
    '🥂': [
        'Ohjattavat Lasit',
        ':clinking_glasses:',
        'Juhla',
        'Samppanjan Lasit',
        'Huijaukset'
    ],
    '🥃': [
        'Tuuletin Lasi',
        ':tumbler_glass:',
        'Bourbon',
        'Liquor',
        'Rum',
        'Whiskey',
        'Whisky'
    ],
    '🥤': [
        'Cupin kanssa olki',
        ':cup_with_straw:',
        'Milkshake',
        'Smoothie',
        'Sooda Pop',
        'Pehmeä Juo'
    ],
    '🥢': [
        'Pikkutikkuja',
        ':chopsticks:'
    ],
    '🍽️': [
        'Haarukka ja veitsi levyllä',
        ':fork_and_knife_with_plate:',
        'Illallinen',
        ':white:',
        ':gray:',
        ':grey:'
    ],
    '🍴': [
        'Haarukka ja veitsi',
        ':fork_and_knife:',
        'Aterimet',
        'Veitsi Ja haarukka',
        'Hopeaohjelmisto',
        ':gray:',
        ':grey:'
    ],
    '🥄': [
        'Lusikka',
        ':spoon:',
        ':gray:',
        ':grey:'
    ],
    '🧄': [
        'Valkosipuli',
        ':garlic:'
    ],
    '🧅': [
        'Kepasipuli',
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
        'Voi',
        ':butter:'
    ],
    '🦪': [
        'Oyster',
        ':oyster:'
    ],
    '🧃': [
        'Juoma Laatikko',
        ':beverage_box:',
        'Mehiläislaatikko'
    ],
    '🧉': [
        'Mate Juo',
        ':mate_drink:',
        'Krimin niemimaa',
        'Cimarrón',
        'Yerba Mate'
    ],
    '🫒': [
        'Oliivit',
        ':olive:',
        ':green:'
    ],
    '🫐': [
        'Pensasmustikat',
        ':blueberries:',
        ':blue:'
    ],
    '🫑': [
        'Äänimerkki Pepperi',
        ':bell_pepper:',
        ':green:'
    ],
    '🫓': [
        'Taskuleipä',
        ':flatbread:'
    ],
    '🫔': [
        'Tamali',
        ':tamale:',
        'Tamaali'
    ],
    '🫕': [
        'Fondue',
        ':fondue:'
    ],
    '🧋': [
        'Kupla Tea',
        ':boba:',
        'Boba'
    ],
    '🧊': [
        'Ice Cube',
        ':ice_cube:'
    ],
    '🫘': [
        'Beans',
        'Flatulence',
        ':beans:',
        'Kahvipavut (silpimättömät)',
        'Spill the beans'
    ],
    '🫗': [
        'Pouring Liquid',
        ':puring_liquid:',
        'Pouring Drink',
        'Vesi'
    ]
};
/*flags*/
emojis_language[lang][7] = {
    '🏁': [
        'Huijatut Liput',
        ':chequered_flag:',
        'Checkered Flag',
        'Ruudukko Tyttö',
        'Kilpailun Lippu',
        ':black:',
        ':white:'
    ],
    '🚩': [
        'Kolmikulmainen Lippu',
        ':triangular_flag:',
        'Liputa kyynärpää',
        'Punainen Lippu',
        'Kolmikulmainen lippu postitse',
        ':red:'
    ],
    '🎌': [
        'Risteytetyt Liput',
        ':crossed_flags:',
        'Kaksi Lippua'
    ],
    '🏴': [
        'Musta Lippu',
        ':black_flag:',
        'Aaltoileva Musta Lippu',
        ':black:'
    ],
    '🏳️': [
        'Valkoinen Lippu',
        ':white_flag:',
        'Aaltoileva Valkoinen Lippu',
        ':white:'
    ],
    '🏳️‍🌈': [
        'Sateenkaaren Lippu',
        ':rainbow_flag:',
        'Pride Flag',
        'LGBT',
        'LGBTQIA+',
        'Gay',
        'Transsukupuolinen',
        'Lesbian',
        'Aseksaalinen',
        'Queer'
    ],
    '🏳️‍⚧️': [
        'Transsukupuolinen Lippu',
        ':transgender_flag:',
        'Sininen, vaaleanpunainen, valkoinen lippu',
        'Trans Lippu',
        'Blue',
        'Pink'
    ],
    '🏴‍☠️': [
        'Merirosvo Lippu',
        ':pirate_flag:',
        'Jolly Roger',
        ':black:',
        'Corsair',
        'Privateer',
        'Buccaneer'
    ],
    '🇺🇳': [
        'Yhdistyneiden Kansakuntien lippu',
        ':un:',
        'Lippu: Yhdistyneet Kansakunnat'
    ],
    '🇪🇺': [
        'Euroopan unionin lippu',
        ':eu:',
        'Lippu: Euroopan Unioni',
        'EU Flag'
    ],
    '🇦🇨': [
        'Ascension Islandin lippu',
        ':ac:'
    ],
    '🇦🇩': [
        'Andorran lippu',
        ':ad:',
        'Andorran Flag'
    ],
    '🇦🇪': [
        'Arabiemiirikuntien lippu',
        ':ae:',
        'Emirati Flag',
        'Arabiemiirikuntien Lippu'
    ],
    '🇦🇫': [
        'Afganistanin lippu',
        ':af:',
        'Afghan Flag'
    ],
    '🇦🇬': [
        'Antigua & Barbudan lippu',
        ':ag:'
    ],
    '🇦🇮': [
        'Anguillan lippu',
        ':ai:',
        'Anguillan Lippu'
    ],
    '🇦🇱': [
        'Albanian lippu',
        ':al:',
        'Albanian Lippu'
    ],
    '🇦🇲': [
        'Armenian lippu',
        ':am:',
        'Armenian Lippu'
    ],
    '🇦🇴': [
        'Angolan lippu',
        ':ao:',
        'Angolan Lippu'
    ],
    '🇦🇶': [
        'Antarktiksen lippu',
        ':aq:',
        'Antarktiksen Lippu'
    ],
    '🇦🇷': [
        'Argentiinan lippu',
        ':ar:',
        'Argentiinan Lippu'
    ],
    '🇦🇸': [
        'Amerikan Samoan lippu',
        ':as:',
        'American Samoan Flag'
    ],
    '🇦🇹': [
        'Itävallan lippu',
        ':at:',
        'Austrian Flag'
    ],
    '🇦🇺': [
        'Australian lippu',
        ':au:',
        'Aussie Lippu',
        'Australian Lippu'
    ],
    '🇦🇼': [
        'Aruban lippu',
        ':aw:',
        'Aruban Lippu'
    ],
    '🇦🇽': [
        'AŽanninsaarten lippu',
        ':ax:',
        'Maan Lippu'
    ],
    '🇦🇿': [
        'Azerbaidžanin lippu',
        ':az:',
        'Azerbaidžanin Lippu'
    ],
    '🇧🇦': [
        'Bosnia ja Hertsegovinan lippu',
        ':ba:'
    ],
    '🇧🇧': [
        'Barbadosin lippu',
        ':bb:',
        'Barbadianin Lippu',
        'Bajan Lippu'
    ],
    '🇧🇩': [
        'Bangladeshin lippu',
        ':bd:',
        'Bangladeshi Flag'
    ],
    '🇧🇪': [
        'Belgian lippu',
        ':be:',
        'Belgian Lippu'
    ],
    '🇧🇫': [
        'Burkina Fason lippu',
        ':bf:',
        'Burkinaben Lippu'
    ],
    '🇧🇬': [
        'Bulgarian lippu',
        ':bg:',
        'Bulgarian Lippu'
    ],
    '🇧🇭': [
        'Bahrainin lippu',
        ':bh:',
        'Bahraanin Lippu',
        'Bahrainin Lippu'
    ],
    '🇧🇮': [
        'Burundin lippu',
        ':bi:',
        'Burundian Flag'
    ],
    '🇧🇯': [
        'Beninin lippu',
        ':bj:',
        'Beninin Lippu'
    ],
    '🇧🇱': [
        'Saint Barthe- lemaatin lippu',
        ':bl:',
        'Lippu: St. Barthež lemy'
    ],
    '🇧🇲': [
        'Bermudan lippu',
        ':bm:',
        'Bermudan Flag'
    ],
    '🇧🇳': [
        'Brunein lippu',
        ':bn:',
        'Brunein Lippu'
    ],
    '🇧🇴': [
        'Bolivian lippu',
        ':bo:',
        'Bolivian Flag'
    ],
    '🇧🇶': [
        'Alankomaiden Karibian lippu',
        ':bq:',
        'Bonaire'
    ],
    '🇧🇷': [
        'Brasilian lippu',
        ':br:',
        'Brasilian Lippu'
    ],
    '🇧🇸': [
        'Bahaman lippu',
        ':bs:',
        'Bahaman Lippu'
    ],
    '🇧🇹': [
        'Bhutanin lippu',
        ':bt:',
        'Bhutanilainen Lippu'
    ],
    '🇧🇻': [
        'Bouvet Islandin lippu',
        ':bv:',
        'Lippu: Bouvet Island'
    ],
    '🇧🇼': [
        'Botswanan lippu',
        ':bw:',
        'Batswana Flag'
    ],
    '🇧🇾': [
        'Valko-Venäjän lippu',
        ':by:',
        'Valkovenäjän Lippu'
    ],
    '🇧🇿': [
        'Belizen lippu',
        ':bz:',
        'Belizean Flag'
    ],
    '🇨🇦': [
        'Kanadan lippu',
        'Kanadan Lippu',
        ':ca:'
    ],
    '🇨🇨': [
        'Cocoksen (Keeling) saarten lippu',
        ':cc:'
    ],
    '🇨🇩': [
        'Flag of Congo - Kinshasa',
        ':cd:'
    ],
    '🇨🇫': [
        'Keski-Afrikan tasavallan lippu',
        ':cf:',
        'Keski-Afrikan Lippu'
    ],
    '🇨🇬': [
        'Kongon lippu - Brazzaville',
        ':cg:'
    ],
    '🇨🇭': [
        'Sveitsin lippu',
        ':ch:',
        'Punainen Risti',
        'Sveitsin Lippu'
    ],
    '🇨🇮': [
        'Norsunluurannikon lippu',
        ':ci:',
        'Flag: Côte d’Ivoire'
    ],
    '🇨🇰': [
        'Cookinsaarten lippu',
        ':ck:',
        'Cook Islanderin Lippu'
    ],
    '🇨🇱': [
        'Chilen lippu',
        ':cl:',
        'Chilen Lippu'
    ],
    '🇨🇲': [
        'Kamerunin lippu',
        ':cm:',
        'Kamerunin Lippu'
    ],
    '🇨🇳': [
        'Kiinan lippu',
        ':cn:',
        'Kiinan Lippu'
    ],
    '🇨🇴': [
        'Kolumbian lippu',
        ':co:',
        'Kolumbian Lippu'
    ],
    '🇨🇵': [
        'Clipperton Islandin lippu',
        ':cp:',
        'Lippu: Clipperton Island'
    ],
    '🇨🇷': [
        'Costa Rican lippu',
        ':cr:',
        'Costa Rican Lippu'
    ],
    '🇨🇺': [
        'Kuuban lippu',
        ':cu:',
        'Kuuban Lippu'
    ],
    '🇨🇻': [
        'Kap Verden lippu',
        ':cv:',
        'Kap Verdian Lippu'
    ],
    '🇨🇼': [
        'Curac- aon lippu',
        ':cw:',
        'Curaçaoan Flag'
    ],
    '🇨🇽': [
        'Joulusaaren lippu',
        ':cx:',
        'Joulusaaren Lippu'
    ],
    '🇨🇾': [
        'Kyproksen lippu',
        ':cy:',
        'Kyproksen Lippu'
    ],
    '🇨🇿': [
        'Tšekin lippu',
        ':cz:',
        'Tšekin Lippu'
    ],
    '🇩🇪': [
        'Saksan lippu',
        ':de:',
        'Deutsch Flag',
        'Saksan Lippu'
    ],
    '🇩🇬': [
        'Diego Garcian lippu',
        ':dg:',
        'Lippu: Diego Garcia'
    ],
    '🇩🇯': [
        'Djiboutin lippu',
        ':dj:',
        'Djibouti Flag',
        'Djiboutian Flag'
    ],
    '🇩🇰': [
        'Tanskan lippu',
        ':dk:',
        'Tanskan Lippu'
    ],
    '🇩🇲': [
        'Dominican lippu',
        ':dm:'
    ],
    '🇩🇴': [
        'Dominikaanisen tasavallan lippu',
        ':do:',
        'Dom Rep -lippu',
        'Dominikaaninen Lippu'
    ],
    '🇩🇿': [
        'Algerian lippu',
        ':dz:',
        'Algerian Flag'
    ],
    '🇪🇦': [
        'Ceutan ja Melillan lippu',
        ':ea:',
        'Melillan lippu',
        'Ceutan lippu',
        'Flag: Ceuta & Melilla'
    ],
    '🇪🇨': [
        'Ecuadorin lippu',
        ':ec:',
        'Ecuadorian Flag'
    ],
    '🇪🇪': [
        'Viron lippu',
        ':ee:',
        'Viron Lippu'
    ],
    '🇪🇬': [
        'Egyptin lippu',
        ':eg:',
        'Egyptin Lippu'
    ],
    '🇪🇭': [
        'Länsi-Saharan lippu',
        ':eh:',
        'Länsi-Saharan Lippu'
    ],
    '🇪🇷': [
        'Eritrean lippu',
        ':er:',
        'Eritrean Flag'
    ],
    '🇪🇹': [
        'Etiopian lippu',
        ':et:',
        'Ethiopian Flag'
    ],
    '🇪🇸': [
        'Espanjan lippu',
        ':es:',
        'Espanjan Lippu'
    ],
    '🇫🇮': [
        'Suomen lippu',
        ':fi:',
        'Suomen Lippu'
    ],
    '🇫🇯': [
        'Fidžin lippu',
        ':fj:',
        'Fijian Flag'
    ],
    '🇫🇰': [
        'Falklandin saarten lippu',
        ':fk:',
        'Falklanderin Lippu'
    ],
    '🇫🇲': [
        'Mikronesian lippu',
        ':fm:',
        'Mikronesian Lippu'
    ],
    '🇫🇴': [
        'Färsaarten lippu',
        ':fo:',
        'Faroe Islander Flag'
    ],
    '🇫🇷': [
        'Ranskan lippu',
        ':fr:',
        'Ranskan Lippu'
    ],
    '🇬🇦': [
        'Gabonin lippu',
        ':ga:',
        'Gabonin Lippu'
    ],
    '🇬🇧': [
        'Ison-Britannian lippu',
        ':gb:',
        'Britannian Lippu',
        'Yhdistynyt Kuningaskunta',
        'Union Jack',
        'Iso-Britannia'
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
        'Grenadan lippu',
        ':gd:',
        'Grenadian Lippu'
    ],
    '🇬🇪': [
        'Georgian lippu',
        ':ge:',
        'Georgian Lippu'
    ],
    '🇬🇫': [
        'Ranskan Guyanan lippu',
        ':gf:',
        'Ranskan Guinean Lippu'
    ],
    '🇬🇬': [
        'Guernseyn lippu',
        ':gg:',
        'Guernsey Flag'
    ],
    '🇬🇭': [
        'Ghanan lippu',
        ':gh:',
        'Ghanan Lippu'
    ],
    '🇬🇮': [
        'Gibraltarin lippu',
        ':gi:',
        'Gibraltarin Lippu'
    ],
    '🇬🇱': [
        'Grönlannin lippu',
        ':gl:',
        'Greenlandic Flag'
    ],
    '🇬🇲': [
        'Gambian lippu',
        ':gm:',
        'Gambian Flag'
    ],
    '🇬🇳': [
        'Guinean lippu',
        ':gn:',
        'Guinean Flag'
    ],
    '🇬🇵': [
        'Guadeloupen lippu',
        ':gp:',
        'Guadeloupean Lippu'
    ],
    '🇬🇶': [
        'Päiväntasaajan Guinean lippu',
        ':gq:',
        'Equatorial Guinean Flag',
        'Equatoguinean Lippu'
    ],
    '🇬🇷': [
        'Kreikan lippu',
        ':gr:',
        'Kreikan Lippu'
    ],
    '🇬🇸': [
        'Etelä-Georgian ja eteläisten Sandwichsaarten lippu',
        ':gs:'
    ],
    '🇬🇹': [
        'Guatemalan lippu',
        ':gt:',
        'Guatemalan Flag'
    ],
    '🇬🇺': [
        'Guamin lippu',
        ':gu:',
        'Guayanan Lippu',
        'Chamorron Lippu'
    ],
    '🇬🇼': [
        'Guinea-Bissaun lippu',
        ':gw:',
        'Guinea-Bissau Flag'
    ],
    '🇬🇾': [
        'Guyanan lippu',
        ':gy:',
        'Guyanan Lippu'
    ],
    '🇭🇰': [
        'Hongkongin erityishallintoalueen Kiinan lippu',
        ':hk:',
        'Hongkongin Lippu'
    ],
    '🇭🇲': [
        'Heard & McDonald saarten lippu',
        ':hm:',
        'Lippu: Heard & McDonald Saaret'
    ],
    '🇭🇳': [
        'Hondurasin lippu',
        ':hn:',
        'Hondurasin Lippu'
    ],
    '🇭🇷': [
        'Kroatian lippu',
        ':hr:',
        'Kroatian Lippu'
    ],
    '🇭🇹': [
        'Haitin lippu',
        ':ht:',
        'Haitian Flag'
    ],
    '🇭🇺': [
        'Unkarin lippu',
        ':hu:',
        'Unkarin Lippu'
    ],
    '🇮🇨': [
        'Kanariansaarten lippu',
        ':ic:'
    ],
    '🇮🇩': [
        'Indonesian lippu',
        ':id:',
        'Indonesian Lippu'
    ],
    '🇮🇪': [
        'Irlannin lippu',
        ':ie:',
        'Irlannin Lippu'
    ],
    '🇮🇱': [
        'Israelin lippu',
        ':il:',
        'Israelin Lippu'
    ],
    '🇮🇲': [
        'Mansaaren lippu',
        ':im:',
        'Manx Flag'
    ],
    '🇮🇳': [
        'Intian lippu',
        ':in:',
        'Intian Lippu'
    ],
    '🇮🇴': [
        'Brittiläisen Intian valtameren alueen lippu',
        ':io:',
        'Brittiläinen Intian Valtameren Alueen Lippu'
    ],
    '🇮🇶': [
        'Irakin lippu',
        ':iq:',
        'Iraqi Flag'
    ],
    '🇮🇷': [
        'Iranin lippu',
        ':ir:',
        'Iranin Lippu'
    ],
    '🇮🇸': [
        'Islannin lippu',
        ':is:',
        'Islannin Lippu'
    ],
    '🇮🇹': [
        'Italian lippu',
        ':it:',
        'Italian Lippu'
    ],
    '🇯🇪': [
        'Jerseyn lippu',
        ':je:',
        'Jerseyn Lippu'
    ],
    '🇯🇲': [
        'Jamaikan lippu',
        ':jm:',
        'Jamaikan Lippu'
    ],
    '🇯🇴': [
        'Jordanian lippu',
        ':jo:',
        'Jordanian Lippu'
    ],
    '🇯🇵': [
        'Japanin lippu',
        ':jp:',
        'Japanin Lippu'
    ],
    '🇰🇪': [
        'Kenian lippu',
        ':ke:',
        'Kenian Lippu'
    ],
    '🇰🇬': [
        'Kirgisian lippu',
        ':kg:',
        'Kyrgyzstani Flag'
    ],
    '🇰🇭': [
        'Kambodžan lippu',
        ':kh:',
        'Kambodžan Lippu'
    ],
    '🇰🇮': [
        'Kiribatin lippu',
        ':ki:',
        'I-Kiribatin Lippu'
    ],
    '🇰🇲': [
        'Komorien lippu',
        ':km:',
        'Komorien Lippu'
    ],
    '🇰🇳': [
        'Saint Kitts & Nevisin lippu',
        ':kn:'
    ],
    '🇰🇵': [
        'Pohjois-Korean lippu',
        ':kp:',
        'Pohjois-Korean Lippu'
    ],
    '🇰🇷': [
        'Etelä-Korean lippu',
        ':kr:',
        'Etelä-Korean Lippu'
    ],
    '🇰🇼': [
        'Kuwaitin lippu',
        ':kw:',
        'Kuwaiti Flag'
    ],
    '🇰🇾': [
        'Caymansaarten lippu',
        ':ky:',
        'Caymanian Lippu'
    ],
    '🇰🇿': [
        'Kazakstanin lippu',
        ':kz:',
        'Kazakhstani Flag',
        'Kazakh Flag'
    ],
    '🇱🇦': [
        'Laosin lippu',
        ':la:',
        'Laotian Lippu',
        'Lao Lippu'
    ],
    '🇱🇧': [
        'Libanonin lippu',
        ':lb:',
        'Libanonin Lippu'
    ],
    '🇱🇨': [
        'Saint Lucian lippu',
        ':lc:'
    ],
    '🇱🇮': [
        'Liechtensteinin lippu',
        ':lt:',
        'Liechtensteinin Lippu'
    ],
    '🇱🇰': [
        'Sri Lankan lippu',
        ':lk:',
        'Sri Lankan Lippu'
    ],
    '🇱🇷': [
        'Liberian lippu',
        ':lr:',
        'Liberian Lippu'
    ],
    '🇱🇸': [
        'Flag of Lesotho',
        ':ls:',
        'Basotho Flag'
    ],
    '🇱🇹': [
        'Liettuan lippu',
        ':lt:',
        'Liettuan Lippu'
    ],
    '🇱🇺': [
        'Luxemburgin lippu',
        ':lu:',
        'Luxemburgin Lippu'
    ],
    '🇱🇻': [
        'Latvian lippu',
        ':lv:',
        'Latvian Lippu'
    ],
    '🇱🇾': [
        'Libyan lippu',
        ':ly:',
        'Libyan Lippu'
    ],
    '🇲🇦': [
        'Marokon lippu',
        ':ma:',
        'Marokon Lippu'
    ],
    '🇲🇨': [
        'Monacon lippu',
        ':mc:',
        'Rahan arvon gaskin lippu'
    ],
    '🇲🇩': [
        'Moldovan lippu',
        ':md:',
        'Moldovan Lippu'
    ],
    '🇲🇪': [
        'Montenegron lippu',
        ':me:',
        'Montenegron Lippu'
    ],
    '🇲🇫': [
        'Saint Martinin lippu',
        ':mf:',
        'Flag: St. Martin'
    ],
    '🇲🇬': [
        'Madagaskarin lippu',
        ':mg:',
        'Madagascan Flag'
    ],
    '🇲🇭': [
        'Marshallinsaarten lippu',
        ':mh:',
        'Marshallin Lippu'
    ],
    '🇲🇰': [
        'Makedonian lippu',
        ':mk:',
        'Makedonian Lippu'
    ],
    '🇲🇱': [
        'Malin lippu',
        ':ml:',
        'Malin Lippu'
    ],
    '🇲🇲': [
        'Myanmarin lippu (Burma)',
        ':mm:',
        'Myanmarin Lippu',
        'Lippu Burmaan',
        'Burman Lippu'
    ],
    '🇲🇳': [
        'Mongolian lippu',
        ':mn:',
        'Mongolian Lippu'
    ],
    '🇲🇴': [
        'Macau Sar Kiinan lippu',
        ':mo:',
        'Macaon Lippu'
    ],
    '🇲🇵': [
        'Pohjoisen Marianan lippu',
        ':mp:',
        'Mikronesian Lippu'
    ],
    '🇲🇶': [
        'Martiniquen lippu',
        ':mq:',
        'Martiniquen käärmelippu',
        'Martiniquais Lippu'
    ],
    '🇲🇷': [
        'Mauritanian lippu',
        ':mr:',
        'Mauritanian Lippu'
    ],
    '🇲🇸': [
        'Flag of Montserrat',
        ':ms:',
        'Montserratian Flag'
    ],
    '🇲🇹': [
        'Maltan lippu',
        ':mt:',
        'Maltese Flag'
    ],
    '🇲🇺': [
        'Flag of Mauritius',
        ':mu:',
        'Mauritian Lippu'
    ],
    '🇲🇻': [
        'Malediivien lippu',
        ':mv:',
        'Malediivien Lippu'
    ],
    '🇲🇼': [
        'Malawin lippu',
        ':mw:',
        'Malawian Flag'
    ],
    '🇲🇽': [
        'Meksikon lippu',
        ':mx:',
        'Meksikon Lippu'
    ],
    '🇲🇾': [
        'Malesian lippu',
        ':my:',
        'Malaysian Flag'
    ],
    '🇲🇿': [
        'Mosambikin lippu',
        ':mz:',
        'Mosambikin Lippu'
    ],
    '🇳🇦': [
        'Namibian lippu',
        ':na:',
        'Namibian Flag'
    ],
    '🇳🇨': [
        'Uuden-Kaledonian lippu',
        ':nc:',
        'Uusi Kaledonin Lippu'
    ],
    '🇳🇪': [
        'Nigerin lippu',
        ':ne:',
        'Nigerin Lippu'
    ],
    '🇳🇫': [
        'Norfolk Islandin lippu',
        ':nf:',
        'Norfolkin Saaren Lippu'
    ],
    '🇳🇬': [
        'Nigerian lippu',
        ':ng:',
        'Nigerian Lippu'
    ],
    '🇳🇮': [
        'Flag of Nicaragua',
        ':ni:',
        'Nicaraguan Flag'
    ],
    '🇳🇱': [
        'Alankomaiden lippu',
        ':nl:',
        'Alankomaiden Lippu',
        'Hollanti'
    ],
    '🇳🇴': [
        'Norjan lippu',
        ':no:',
        'Norjan Lippu'
    ],
    '🇳🇵': [
        'Nepalin lippu',
        ':np:',
        'Nepalin Lippu'
    ],
    '🇳🇷': [
        'Naurun lippu',
        ':nr:',
        'Nauruan Flag'
    ],
    '🇳🇺': [
        'Niuen lippu',
        ':nu:',
        'Niuean Flag'
    ],
    '🇳🇿': [
        'Uuden-Seelannin lippu',
        ':nz:',
        'Kiivi-lippu'
    ],
    '🇴🇲': [
        'Omanin lippu',
        ':om:',
        'Omanin Lippu'
    ],
    '🇵🇦': [
        'Panaman lippu',
        ':pa:',
        'Panaman Lippu'
    ],
    '🇵🇪': [
        'Perun lippu',
        ':pe:',
        'Perun Lippu'
    ],
    '🇵🇫': [
        'Ranskan Polynesian lippu',
        ':pf:',
        'Ranskan Polynesian Lippu'
    ],
    '🇵🇬': [
        'Papua-Uuden-Guinean lippu',
        ':pg:',
        'Png Lippu',
        'Papua New Guinean Flag'
    ],
    '🇵🇭': [
        'Filippiinien lippu',
        ':ph:'
    ],
    '🇵🇰': [
        'Pakistanin lippu',
        ':pk:',
        'Pakistanin Lippu'
    ],
    '🇵🇱': [
        'Puolan lippu',
        ':pl:',
        'Puolan Lippu'
    ],
    '🇵🇲': [
        'Saint Pierre ja Miquelonin lippu',
        ':pm:'
    ],
    '🇵🇳': [
        'Pitcairnin lippu',
        ':pn:'
    ],
    '🇵🇷': [
        'Puerto Ricon lippu',
        ':pr:',
        'Puerto Rican Lippu'
    ],
    '🇵🇸': [
        'Palestiinalaisalueiden lippu',
        ':ps:',
        'Palestine'
    ],
    '🇵🇹': [
        'Portugalin lippu',
        ':pt:',
        'Portugalin Lippu'
    ],
    '🇵🇼': [
        'Palaun lippu',
        ':pw:',
        'Palauan Lippu'
    ],
    '🇵🇾': [
        'Paraguayn lippu',
        ':py:',
        'Paraguayan Flag'
    ],
    '🇶🇦': [
        'Qatarin lippu',
        ':qa:',
        'Qatarin Lippu'
    ],
    '🇷🇪': [
        'Unionin lippu',
        ':re:',
        'Unionnais lippu'
    ],
    '🇷🇴': [
        'Romanian lippu',
        ':ro:',
        'Romanian Lippu'
    ],
    '🇷🇸': [
        'Serbian lippu',
        ':rs:',
        'Serbian Lippu'
    ],
    '🇷🇺': [
        'Venäjän lippu',
        ':ru:',
        'Venäjän Lippu'
    ],
    '🇷🇼': [
        'Flag of Rwanda',
        ':rw:',
        'Rwandan Flag'
    ],
    '🇸🇦': [
        'Saudi-Arabian lippu',
        ':sa:',
        'Saudi-Arabian Lippu'
    ],
    '🇸🇧': [
        'Salomonsaarten lippu',
        ':sb:',
        'Salomonsaaren Lippu'
    ],
    '🇸🇨': [
        'Seychellien lippu',
        ':sc:',
        'Seychellois Flag'
    ],
    '🇸🇩': [
        'Sudanin lippu',
        ':sd:',
        'Sudanese Flag'
    ],
    '🇸🇪': [
        'Ruotsin lippu',
        ':se:',
        'Ruotsin Lippu'
    ],
    '🇸🇬': [
        'Singaporen lippu',
        ':sg:',
        'Singaporen Lippu'
    ],
    '🇸🇭': [
        'Saint Helenan lippu',
        ':sh:'
    ],
    '🇸🇮': [
        'Slovenian lippu',
        ':si:',
        'Slovenian Lippu'
    ],
    '🇸🇯': [
        'Huippuvuorten ja Jan Mayenin lippu',
        ':sj:'
    ],
    '🇸🇰': [
        'Slovakian lippu',
        ':sk:',
        'Slovakian Lippu',
        'Slovakian Flag'
    ],
    '🇸🇱': [
        'Sierra Leonen lippu',
        ':sl:',
        'Sierra Leonean Flag'
    ],
    '🇸🇲': [
        'San Marinon lippu',
        ':sm:',
        'Sammariinin Lippu'
    ],
    '🇸🇳': [
        'Senegalin lippu',
        ':sn:',
        'Sengalin Lippu'
    ],
    '🇸🇴': [
        'Somalian lippu',
        ':so:',
        'Somalian Flag'
    ],
    '🇸🇷': [
        'Surinamin lippu',
        ':sr:',
        'Surinameerin Lippu'
    ],
    '🇸🇸': [
        'Etelä-Sudanin lippu',
        ':ss:',
        'Etelä-Sudanin Lippu'
    ],
    '🇸🇹': [
        'Lippu on SaŽo Tome- & PriŽncipe',
        ':st:'
    ],
    '🇸🇻': [
        'El Salvadorin lippu',
        ':sv:',
        'El Salvador Lippu'
    ],
    '🇸🇽': [
        'Sint Maartenin lippu',
        ':sx:'
    ],
    '🇸🇾': [
        'Syyrian lippu',
        ':sy:',
        'Syyrian Lippu'
    ],
    '🇸🇿': [
        'Swazimaan lippu',
        ':sz:',
        'Eswatinin Lippu'
    ],
    '🇹🇦': [
        'Flag of Tristan Da Cunha',
        ':ta:'
    ],
    '🇹🇨': [
        'Turks- ja Caicossaarten lippu',
        ':tc:'
    ],
    '🇹🇩': [
        'Tšadin lippu',
        ':td:',
        'Tšadin Lippu'
    ],
    '🇹🇫': [
        'Ranskan eteläisten alueiden lippu',
        ':tf:',
        'Ranskan Eteläisten Maiden Lippu'
    ],
    '🇹🇬': [
        'Togon lippu',
        ':tg:',
        'Togolese Flag'
    ],
    '🇹🇭': [
        'Thaimaan lippu',
        ':th:',
        'Thaimaan Lippu'
    ],
    '🇹🇯': [
        'Tadžikistanin lippu',
        ':tj:',
        'Tadžikistanin Lippu'
    ],
    '🇹🇰': [
        'Tokelaun lippu',
        ':tk:',
        'Tokelauan Lippu'
    ],
    '🇹🇱': [
        'Itä-Timorin ja Lesteen lippu',
        ':tl:',
        'Itä-Timorin Lippu',
        'Itä-Timorin Lippu'
    ],
    '🇹🇲': [
        'Turkmenistanin lippu',
        ':tm:',
        'Turkmen Flag'
    ],
    '🇹🇳': [
        'Tunisian lippu',
        ':tn:',
        'Tunisian Lippu'
    ],
    '🇹🇴': [
        'Tongan lippu',
        ':to:',
        'Tongan Flag'
    ],
    '🇹🇷': [
        'Turkin lippu',
        ':tr:',
        'Turkin Lippu'
    ],
    '🇹🇹': [
        'Trinidad ja Tobagon lippu',
        ':tt:'
    ],
    '🇹🇻': [
        'Tuvalun lippu',
        ':tv:',
        'Tuvaluan Lippu'
    ],
    '🇹🇼': [
        'Taiwanin lippu',
        ':tw:',
        'Taiwanin Lippu'
    ],
    '🇹🇿': [
        'Tansanian lippu',
        ':tz:',
        'Tanzanian Flag'
    ],
    '🇺🇦': [
        'Ukrainan lippu',
        ':ua:',
        'Ukrainan Lippu'
    ],
    '🇺🇬': [
        'Ugandan lippu',
        ':ug:',
        'Ugandan Lippu'
    ],
    '🇺🇲': [
        'Lippu: Yhdysvaltain Erillissaaret',
        ':um:'
    ],
    '🇺🇸': [
        'Amerikan yhdysvaltojen lippu',
        ':us:',
        'Amerikan Lippu',
        'Yhdysvaltain Lippu'
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
        'Pyhän istuimen lippu',
        ':va:',
        'Vanticanien Lippu'
    ],
    '🇻🇨': [
        'Saint Vincent & Grenadiinien lippu',
        ':vc:'
    ],
    '🇻🇪': [
        'Venezuelan lippu',
        ':ve:',
        'Venezuelan Lippu'
    ],
    '🇻🇬': [
        'Brittiläisten Neitsytsaarten lippu',
        ':vg:',
        'Brittiläisen Neitsytsaaren Lippu'
    ],
    '🇻🇮': [
        'Yhdysvaltain Neitsytsaarten lippu',
        ':vi:',
        'Yhdysvaltain Neitsytsaaren Lippu'
    ],
    '🇻🇳': [
        'Vietnamin lippu',
        ':vn:',
        'Vietnamin Lippu'
    ],
    '🇻🇺': [
        'Flag of Vanuatu',
        ':vu:',
        'Ni-Vanuatu Flag'
    ],
    '🇼🇫': [
        'Wallis & Futunan lippu',
        ':wf:'
    ],
    '🇼🇸': [
        'Samoan lippu',
        ':ws:',
        'Samoan Flag'
    ],
    '🇽🇰': [
        'Kosovon lippu',
        ':xk:',
        'Kosovar Flag'
    ],
    '🇾🇪': [
        'Jemenin lippu',
        ':ye:',
        'Jemenin Lippu'
    ],
    '🇾🇹': [
        'Mayotten lippu',
        ':yt:',
        'Mayotten Lippu'
    ],
    '🇿🇦': [
        'Etelä-Afrikan lippu',
        ':za:',
        'Etelä-Afrikan Lippu'
    ],
    '🇿🇲': [
        'Sambian lippu',
        ':zm:',
        'Zambian Flag'
    ],
    '🇿🇼': [
        'Zimbabwen lippu',
        ':zw:',
        'Zimbabwen Lippu',
        'Zim Lippu'
    ]
};
/*sports*/
emojis_language[lang][8] = {
    '🧗{{skin_tone}}‍♂️': [
        'Mies Kiipeily',
        ':man_climbing:',
        ':climbing:',
        'Mies Rock Climber',
        'Mies Kiipeilijä',
        ':man:'
    ],
    '🧗{{skin_tone}}‍♀️': [
        'Nainen Kiipeily',
        ':woman_climbing:',
        ':climbing:',
        'Nainen Rock Climber',
        'Nainen Kiipeilijä',
        ':woman:'
    ],
    '🧗{{skin_tone}}': [
        'Henkilö Kiipeily',
        ':person_climbing:',
        ':climbing:',
        'Henkilö Rock Climber',
        'Henkilö Climber',
        ':person:'
    ],
    '🏇{{skin_tone}}': [
        'Hevonen Racing',
        ':horse_racing:',
        'Hevosen Rotu',
        'Pitsi'
    ],
    '⛷{{skin_tone}}‍️': [
        'Hiihtäjä',
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
        'Nainen Golfer',
        ':woman_golfer:',
        ':golfer:',
        ':woman:'
    ],
    '🏌️{{skin_tone}}': [
        'Henkilö Golfer',
        ':person_golfer:',
        ':golfer:',
        ':person:'
    ],
    '🏄{{skin_tone}}‍♂️': [
        'Ihmisen Surferi',
        ':man_surfer:',
        ':surfer:',
        ':man:'
    ],
    '🏄{{skin_tone}}‍♀️': [
        'Nainen Surfer',
        ':woman_surfer:',
        ':surfer:',
        ':woman:'
    ],
    '🏄{{skin_tone}}': [
        'Henkilö Surfer',
        ':person_surfer:',
        ':surfer:',
        ':person:'
    ],
    '🚣{{skin_tone}}‍♂️': [
        'Miehen Soutuvene',
        ':man_rowing_boat:',
        ':rowing_boat:',
        ':man:'
    ],
    '🚣{{skin_tone}}‍♀️': [
        'Nainen Soutuvene',
        ':woman_rowing_boat:',
        ':rowing_boat:',
        ':woman:'
    ],
    '🚣{{skin_tone}}': [
        'Henkilö Soutuvene',
        ':person_rowing_boat:',
        ':rowing_boat:',
        ':person:'
    ],
    '🏊{{skin_tone}}‍♂️': [
        'Miehen Uinti',
        ':man_swimming:',
        ':swimming:',
        'Mies Uima',
        ':man:'
    ],
    '🏊{{skin_tone}}‍♀️': [
        'Nainen Uinti',
        ':woman_swimming:',
        ':swimming:',
        'Nainen Uima',
        ':woman:'
    ],
    '🏊{{skin_tone}}': [
        'Henkilö Uinti',
        ':person_swimming:',
        ':swimming:',
        'Henkilö Uimari',
        ':person:'
    ],
    '⛹{{skin_tone}}‍️‍♂️': [
        'Miehen Pallo',
        ':man_bouncing_ball:',
        ':bouncing_ball:',
        'Man Koripallo Pelaaja',
        ':man:'
    ],
    '⛹️{{skin_tone}}‍♀️': [
        'Nainen Bouncing Ball',
        ':woman_bouncing_ball:',
        ':boucing_ball:',
        'Nainen Koripallo Pelaaja',
        ':woman:'
    ],
    '⛹️{{skin_tone}}': [
        'Henkilö Bouncing Ball',
        ':person_bouncing_ball:',
        ':boucing_ball:',
        'Henkilö Koripallo Pelaaja',
        ':person:'
    ],
    '🏋️{{skin_tone}}‍♂️': [
        'Mies Nostopainot',
        ':man_lifting_weights:',
        ':lifting_weights:',
        'Miehen Painonnostin',
        ':man:'
    ],
    '🏋️{{skin_tone}}‍♀️': [
        'Naisen Nostopainot',
        ':woman_lifting_weights:',
        ':lifting_weights:',
        'Naisen Painonnostaja',
        ':woman:'
    ],
    '🏋️{{skin_tone}}': [
        'Henkilö Nostopainot',
        ':person_lifting_weights:',
        ':lifting_weights:',
        'Henkilö Painonnostaja',
        ':person:'
    ],
    '🚴{{skin_tone}}‍♂️': [
        'Miehen Pyöräily',
        ':man_biking:',
        ':biking:',
        'Man Cyclist',
        'Miehen Pyöräily',
        ':man:'
    ],
    '🚴{{skin_tone}}‍♀️': [
        'Nainen Pyöräily',
        ':woman_biking:',
        ':biking:',
        'Nainen Syklisti',
        'Naisen Syklisti',
        ':woman:'
    ],
    '🚴{{skin_tone}}': [
        'Henkilön Pyöräily',
        ':person_biking:',
        ':biking:',
        'Henkilö Pyöräilijä',
        'Henkilö Pyöräilijä',
        ':person:'
    ],
    '🚵{{skin_tone}}‍♂️': [
        'Miehen Vuorten Pyöräily',
        ':man_mountain_bike:',
        ':mountain_bike:',
        'Man Mountain Biker',
        ':man:'
    ],
    '🚵{{skin_tone}}‍♀️': [
        'Naisen Vuorten Pyöräily',
        ':woman_mountain_bike:',
        ':mountain_bike:',
        'Nainen Vuorikiipeilijä',
        ':woman:'
    ],
    '🚵{{skin_tone}}': [
        'Henkilö Vuorten Pyöräily',
        ':person_mountain_bike:',
        ':mountain_bike:',
        'Henkilö Vuorikiipeilijä',
        ':person:'
    ],
    '🤸{{skin_tone}}‍♂️': [
        'Man Cartwheeling',
        ':man_cartwheeling:',
        ':cartwheeling:',
        'Man Doing Cartwheel',
        ':man:'
    ],
    '🤸{{skin_tone}}‍♀️': [
        'Naisen Rintapyöräily',
        ':woman_cartwheeling:',
        ':cartwheeling:',
        'Nainen Ajopyörä',
        ':woman:'
    ],
    '🤸{{skin_tone}}': [
        'Henkilö Pyöräily',
        ':person_cartwheeling:',
        ':cartwheeling:',
        'Henkilö Ostoskori',
        ':person:'
    ],
    '🤼‍♂️': [
        'Miehet Paini',
        ':men_wrestling:',
        ':wrestling:',
        'Paini',
        'Painit',
        ':man:'
    ],
    '🤼‍♀️': [
        'Naiset Paini',
        ':women_wrestling:',
        ':wrestling:',
        'Paini',
        'Painit',
        ':woman:'
    ],
    '🤼': [
        'Ihmiset Paini',
        ':people_wrestling:',
        ':wrestling:',
        'Paini',
        'Painit',
        ':person:'
    ],
    '🤽{{skin_tone}}‍♂️': [
        'Mies Playing Water Polo',
        ':man_playing_water_polo:',
        ':playing_water_polo:',
        ':man:'
    ],
    '🤽{{skin_tone}}‍♀️': [
        'Nainen Leikkii Vesi Polo',
        ':woman_playing_water_polo:',
        ':playing_water_polo:',
        ':woman:'
    ],
    '🤽{{skin_tone}}': [
        'Henkilö Leikkii Vesi Polo',
        ':person_playing_water_polo:',
        ':playing_water_polo:',
        ':person:'
    ],
    '🤾{{skin_tone}}‍♂️': [
        'Mies Soi Käsipallo',
        ':man_playing_handball:',
        ':playing_handball:',
        ':man:'
    ],
    '🤾{{skin_tone}}‍♀️': [
        'Nainen Pelaa Käsipalloa',
        ':woman_playing_handball:',
        ':playing_handball:',
        ':woman:'
    ],
    '🤾{{skin_tone}}': [
        'Henkilö Käsipallon Pelissä',
        ':person_playing_handball:',
        ':playing_handball:',
        ':person:'
    ],
    '🤹{{skin_tone}}‍♂️': [
        'Mies Juggling',
        ':man_juggling:',
        ':juggling:',
        'Mies Juggler',
        ':man:'
    ],
    '🤹{{skin_tone}}‍♀️': [
        'Nainen Juggling',
        ':woman_juggling:',
        ':juggling:',
        'Nainen Juggler',
        ':woman:'
    ],
    '🤹{{skin_tone}}': [
        'Henkilö Juggling',
        ':person_juggling:',
        ':juggling:',
        'Henkilö Juggler',
        ':person:'
    ],
    '🧘{{skin_tone}}‍♂️': [
        'Mies Lotussijainnissa',
        ':man_lotus_position:',
        ':lotus_position:',
        'Meditaatio',
        'Zen',
        'Ristikko jalkainen',
        'Jooga',
        ':man:'
    ],
    '🧘{{skin_tone}}‍♀️': [
        'Nainen Lotus-asennossa',
        ':woman_lotus_position:',
        ':lotus_position:',
        'Meditaatio',
        'Zen',
        'Ristikko jalkainen',
        'Jooga',
        ':woman:'
    ],
    '🧘{{skin_tone}}': [
        'Henkilö Lotus-asennossa',
        ':person_lotus:_sijainti',
        ':lotus_position:',
        'Meditaatio',
        'Zen',
        'Ristikko jalkainen',
        'Jooga',
        ':person:'
    ],
    '🏃{{skin_tone}}‍♂️': [
        'Mies Käynnissä',
        ':man_running:',
        ':running:',
        ':man:'
    ],
    '🏃{{skin_tone}}‍♀️': [
        'Nainen Käynnissä',
        ':woman_running:',
        ':running:',
        ':woman:'
    ],
    '🏃{{skin_tone}}': [
        'Henkilö Käynnissä',
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
        'Mies Tanssi',
        ':man_dancing:',
        ':dancing:',
        ':man:'
    ],
    '💃{{skin_tone}}': [
        'Nainen Tanssi',
        ':woman_dancing:',
        ':dancing:',
        ':woman:'
    ],
    '🤺': [
        'Henkilö Miekkailu',
        ':person_fencing:',
        'Fancer',
        ':fencing:'
    ],
    '🏆': [
        'Palkinto',
        ':trophy:',
        'Mestaruus',
        'Voittaja',
        ':gold:',
        ':yellow:'
    ],
    '🏅': [
        'Urheilu Mitali',
        ':sports_medal:',
        ':medal:',
        ':gold:',
        ':yellow:'
    ],
    '🥇': [
        '1. Paikkamitali',
        ':first_place_medal:',
        ':gold_medal:',
        'Ensimmäisen Paikan Mitali',
        'Kultainen Mitali',
        ':yellow:',
        ':gold:'
    ],
    '🥈': [
        '2. Paikka Mitali',
        ':second_place_medal:',
        ':silver_medal:',
        'Toisen Paikan Mitali',
        'Hopea Mitaali',
        ':gray:',
        ':grey:',
        ':silver:'
    ],
    '🥉': [
        'Kolmas Paikkamitali',
        ':third_place_medal:',
        ':bronze_medal:',
        'Kolmannen Paikan Mitali',
        'Pronssimitali',
        ':brown:',
        ':bronze:'
    ],
    '⚽': [
        'Jalkapallo',
        ':football:',
        'Jalkapallo',
        ':white:',
        ':black:'
    ],
    '⚾': [
        'Baseball',
        ':baseball:',
        'Pehmeäpallo',
        ':white:'
    ],
    '🥎': [
        'Pehmeäpallo',
        ':softball:',
        ':yellow:'
    ],
    '🏀': [
        'Koripallo',
        ':basketball:',
        ':orange:',
        'Koripallo ja koukku'
    ],
    '🏐': [
        'Lentopallo',
        ':volleyball:',
        ':white:'
    ],
    '🏈': [
        'Amerikkalainen Jalkapallo',
        ':american_football:',
        'Jalkapallo',
        'Gridiron',
        'Yläkulho',
        ':brown:'
    ],
    '🏉': [
        'Rugby Jalkapallo',
        ':rugby:',
        'Jalkapallo',
        'Liiga',
        'Rugby',
        'Unioni'
    ],
    '🎾': [
        'Tennis',
        ':tennis:',
        ':ball:',
        'Pallo',
        'Racket',
        'Racquet',
        ':yellow:'
    ],
    '🥏': [
        'Lentävä Levy',
        ':flying_disk:',
        'Frisbee'
    ],
    '🎳': [
        'Keilailu',
        ':bowling:',
        'Pinssit',
        'Sarjakuvat',
        'Keilailu Kymmenen Pin-Keilausta'
    ],
    '🏏': [
        'Kriketti',
        ':cricket:',
        'Lepakko',
        'Pallo'
    ],
    '🏑': [
        'Kenttä Jääkiekko',
        ':field_hockey:',
        'Pallo',
        'Kiinni'
    ],
    '🏒': [
        'Jääkiekko Jääkiekko',
        ':ice_hockey:',
        'Pallo',
        'Kiinni'
    ],
    '🥍': [
        'Lacrosse',
        ':lacrosse:',
        'Pallo',
        'Kiinni',
        ':red:'
    ],
    '🏓': [
        'Ping Pong',
        ':ping_pong:',
        ':table_tennis:',
        'Taulukko Tennis',
        'Pallo',
        'Paddle'
    ],
    '🏸': [
        'Badminton',
        ':badminton:',
        'Sulkumäki',
        'Racquet'
    ],
    '🥊': [
        'Nyrkkeilyhanska',
        ':boxing_glove:',
        ':red:'
    ],
    '🥋': [
        'Martial Arts Uniform',
        ':martial_arts_uniform:',
        ':judo:',
        ':karate:',
        ':kung_fu:',
        'Judo',
        'Karaatti',
        'Kung fu'
    ],
    '⛳': [
        'Merkitse aukkoon',
        ':flag_in_hole:',
        ':golf_flag:',
        'Golf Lippu'
    ],
    '⛸️': [
        'Jään Luistelu',
        ':ice_skate:',
        'Luistelu'
    ],
    '🎣': [
        'Kalastus',
        ':fishing:',
        'Pole',
        'Kala',
        'Turskan Kalastustangot'
    ],
    '🎽': [
        'Juoksu Paita',
        ':running_shirt:',
        'Singlet',
        'Jakso'
    ],
    '🎿': [
        'Sketit',
        ':skis:',
        'Hiihto',
        'Käynnistys'
    ],
    '🛷': [
        'Sled',
        ':sled:'
    ],
    '🥌': [
        'Curling Kivi',
        ':curling_stone:'
    ],
    '🎯': [
        'Suora Osuma',
        ':direct_hit:',
        'Jousiammunta',
        'Bullseye',
        'Tikka'
    ],
    '🎱': [
        'Pool 8 -pallo',
        ':pool_8_ball:',
        'Cue Pallo',
        'Torkutin',
        'Biljardi',
        ':black:'
    ],
    '🎮': [
        'Videopeliohjain',
        ':video_game_controller:',
        ':playstation:',
        ':xbox:',
        'Playstaatio',
        'Xbox',
        'Peliohjain',
        'Wii U'
    ],
    '♟️': [
        'Musta Shakki Sotilas',
        ':black_chess_pawn:',
        ':black:'
    ],
    '🏹': [
        'Jousi ja nuoli',
        ':arch:',
        'Kaari'
    ],
    '🥅': [
        'Tavoite Netto',
        ':goal_net:'
    ],
    '🀄': [
        'Mahjong Punainen Lohikäärme',
        ':mahjong:',
        'Mahjong',
        'Mahjong Tile',
        '中',
        'Mahjong Tile Red Dragon'
    ],
    '🎴': [
        'Kukka Pelikortit',
        ':flower_playing_cards:',
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
        ':steam_train:',
        'Steamin Juna',
        'Rautateiden Veturi'
    ],
    '🚃': [
        'Rautateiden Autot',
        ':railway_car:',
        'Rautatie',
        'Raideliikenteen Autot',
        'Rautateiden Kuljetus',
        'Rautatievaunu Reg.'
    ],
    '🚄': [
        'Suurnopeusjuna',
        ':high_speed_train:'
    ],
    '🚅': [
        'Luotien Juna',
        ':bullet_train:',
        'Shinkansen',
        'Suurnopeusjuna Bullet Nose -laitteella'
    ],
    '🚆': [
        'Juna',
        ':train:'
    ],
    '🚇': [
        'Maanalainen',
        ':underground:',
        'Putki',
        'Metro',
        'Metro'
    ],
    '🚈': [
        'Kevyt Rautatie',
        ':light_rail:',
        'Juna'
    ],
    '🚊': [
        'Raitiovaunut',
        ':tram:'
    ],
    '🚝': [
        'Monorail',
        ':monorail:',
        'Juna'
    ],
    '🚞': [
        'Vuorten Rautatie',
        ':mountain_railway:',
        'Funicular',
        'Juna Ja Vuori'
    ],
    '🚋': [
        'Raitiovaunu Auto',
        ':tram_car:'
    ],
    '🚌': [
        'Bussi',
        ':bus:',
        'Valmentaja'
    ],
    '🚍': [
        'Saapuva Väylä',
        ':front_of_bus:',
        'Linja-autoliikenteen ETU'
    ],
    '🚎': [
        'Vaunu',
        ':trolleybus:',
        'Elektroninen Väylä'
    ],
    '🚐': [
        'Minibus',
        ':minibus:',
        'Minivini',
        'Ihmiset-Mover'
    ],
    '🚑': [
        'Ambulanssi',
        ':ambulance:'
    ],
    '🚒': [
        'Tulimoottori',
        ':fire_engine:',
        'Tuli Osasto',
        'Kuorma-auto Reg.'
    ],
    '🚓': [
        'Poliisi Auto',
        ':police_car:',
        'Cop Auto',
        'Police Car Side'
    ],
    '🚔': [
        'Tuleva Poliisiauto',
        ':front_of_police_car:',
        'Poliisiauton etuosa',
        'Cop Auto'
    ],
    '🚕': [
        'Taksi',
        ':taxi:',
        'New York Taksi',
        'Taksin Sivu'
    ],
    '🚖': [
        'Taksi',
        ':front_of_taxi:',
        'Saapuva Taksi',
        'Taksin etupuoli'
    ],
    '🚗': [
        'Auto',
        ':car:',
        'Punainen Auto',
        'Auton Sivu',
        'Auto'
    ],
    '🚘': [
        'Saapuva Automobile',
        ':front_of_car:',
        'Punainen Auto',
        'Auton Etupuoli'
    ],
    '🚚': [
        'Toimitus Truck',
        ':lorry:',
        'Kuorma'
    ],
    '🚛': [
        'Nivelöity Kuorma',
        ':articulated_lorry:',
        'Vihreä Kuorma-auto'
    ],
    '🚜': [
        'Traktori',
        ':tractor:',
        'Maatila'
    ],
    '🛻': [
        'Nouto Truck',
        ':pickup_truck:'
    ],
    '🏎️': [
        'Racing Car',
        ':racing_car:',
        'F1',
        'Kaava 1',
        'Kilpa-auto'
    ],
    '🏍️': [
        'Moottoripyörä',
        ':motorbike:',
        'Moottoripyörä'
    ],
    '🛵': [
        'Moottoripotkulauta',
        ':motor_scooter:',
        'Vespa',
        'Moottoripyörä',
        'Moottoripyörä'
    ],
    '🛺': [
        'Automaattinen Rickshaw',
        ':auto_rickshaw:',
        'Tuk Tuk'
    ],
    '🚲': [
        'Polkupyörä',
        ':bike:',
        'Pyörä'
    ],
    '🛴': [
        'Potkulauta',
        ':kick_scooter:'
    ],
    '⛵': [
        'Purjevene',
        ':sailboat:',
        'Dinghy',
        'Jahti'
    ],
    '🚤': [
        'Nopeusvene',
        ':speedboat:',
        'Moottorivene',
        'Moottorivene'
    ],
    '🛳️': [
        'Matkustajan Alus',
        ':passenger_ship:'
    ],
    '⛴️': [
        'Lautta',
        ':ferry:'
    ],
    '🛥️': [
        'Moottorivene',
        ':motor_boat:'
    ],
    '🚢': [
        'Risteilyalus',
        ':cruise_ship:'
    ],
    '✈️': [
        'Lentokone',
        ':airplane:',
        'Aeroplane'
    ],
    '🛩️': [
        'Pieni Lentokone',
        ':small_airplane:',
        'Pieni Lentokone'
    ],
    '🚁': [
        'Helikopteri',
        ':helicopter:'
    ],
    '🚟': [
        'Keskeytys Rautatie',
        ':suspension_railway:'
    ],
    '🚠': [
        'Vuoristoköysirata',
        ':mountain_cableway:'
    ],
    '🚡': [
        'Aerial Tramway',
        ':aerial_tramway:',
        'Kaapelin Auto',
        'Gondola',
        'Ropeway'
    ],
    '🛰️': [
        'Satelliitti',
        ':satellite:'
    ],
    '🚀': [
        'Raketti',
        ':rocket:',
        'Avaruussulku'
    ],
    '🛸': [
        'Lentävä Saucer',
        ':flying_saucer:',
        'UFO'
    ],
    '🚉': [
        'Junan Asema',
        ':train_station:',
        'Juna Alusta'
    ],
    '🚏': [
        'Bussin Pysäytys',
        ':bus_stop:'
    ],
    '🛣️': [
        'Moottoritie',
        ':motorway:',
        'Tie',
        'Valtatie',
        'Interstate'
    ],
    '🛤️': [
        'Rautateiden Rata',
        ':railway_track:'
    ],
    '🛫': [
        'Lentokoneen Lähtö',
        ':airplane_departure:',
        'Ota Pois'
    ],
    '🛬': [
        'Lentokoneen Saapuminen',
        ':airplane_arrival:',
        'Lentokone Saapuminen',
        'Lasku'
    ],
    '🗾': [
        'Japanin kartta',
        ':map_of_japan:'
    ],
    '⛰️': [
        'Vuori',
        ':mountain:'
    ],
    '🏔️': [
        'Lumikivitetty Vuori',
        ':snow_capped_mountain:'
    ],
    '🌋': [
        'Tulivuori',
        ':volcano:'
    ],
    '🗻': [
        'Yhdistä Fuji',
        ':mount_fuji:',
        'Fuji-san'
    ],
    '🏕️': [
        'Telttailu',
        ':camping:',
        'Leirintäalue'
    ],
    '🏖️': [
        'Ranta Sateenvarjo',
        ':beach_with_umbrella:'
    ],
    '🏜️': [
        'Desert',
        ':desert:'
    ],
    '🏝️': [
        'Aavikko Saari',
        ':desert_island:'
    ],
    '🏞️': [
        'Kansallispuisto',
        ':national_park:'
    ],
    '🏟️': [
        'Stadium',
        ':stadium:',
        'Isokasvi',
        'Urheilu Stadium'
    ],
    '🏛️': [
        'Klassinen Rakennus',
        ':classical_building:',
        'Kreikka',
        'Rooma'
    ],
    '🏗️': [
        'Rakennusten Rakentaminen',
        ':building_construction:',
        'Nosturi'
    ],
    '🏘️': [
        'Talot Rakennukset',
        ':houses_building:',
        'Talon ryhmä'
    ],
    '🏚️': [
        'Derelict House -rakennus',
        ':old_house:',
        'Hylätty Talo',
        'Vanha Talo',
        'Haunattu Talo'
    ],
    '🏠': [
        'Koti',
        ':home:',
        'Talon Rakennus'
    ],
    '🏡': [
        'Talo Puutarhalla',
        ':house_with_garden:',
        'Talo Ja Puu'
    ],
    '🏢': [
        'Toimiston Rakennus',
        ':office_building:',
        'Kaupungin Rakennus',
        'Korkea Nousu'
    ],
    '🏣': [
        'Japanin Postitoimisto',
        ':japanese_post_office:',
        'Japanin Postimerkki'
    ],
    '🏤': [
        'Posti Toimisto',
        ':european_post_office:',
        'Euroopan Postitoimisto'
    ],
    '🏥': [
        'Sairaala',
        ':hospital:',
        'ER',
        'A&E',
        'Hätätila',
        'Onnettomuus Ja Hätätilanne',
        'Punainen Risti',
        'Lääketieteellinen'
    ],
    '🏦': [
        'Pankki',
        ':bank:',
        'BK',
        'Bakkureru',
        'Pankin Sivukonttori',
        'Bakkureru'
    ],
    '🏨': [
        'Hotelli',
        ':hotel:',
        'Majoitus',
        'H Rakennus'
    ],
    '🏩': [
        'Rakkaus Hotelli',
        ':love_hotel:',
        'Love Heart Hotel'
    ],
    '🏪': [
        'Kätevä Kauppa',
        ':convenience_store:',
        '24-Tunnin Kauppa',
        '7–11',
        'Kulma Kauppa',
        'Kwik-E-Mart'
    ],
    '🏫': [
        'Koulu',
        ':school:',
        'Kellon Torni',
        'Elementary High Middle'
    ],
    '🏬': [
        'Osaston Kauppa',
        ':department_store:',
        'Ostoskeskus (Kauppakeskus)',
        'Kauppa'
    ],
    '🏭': [
        'Tehdas',
        ':factory:',
        'Teollisuus',
        'Teollisuus',
        'Saasteet',
        'Savu'
    ],
    '🏯': [
        'Japanin Linna',
        ':japanese_castle:',
        'Linnoitus'
    ],
    '🏰': [
        'Eurooppalainen Linna',
        ':european_castle:',
        'Turrets'
    ],
    '💒': [
        'Kirkon Sydän',
        ':church_heart:',
        'Kirkon Häät',
        'Avioliitto'
    ],
    '🗼': [
        'Tokion Torni',
        ':tokyo_tower:',
        'Eiffel-torni',
        'Punainen Torni'
    ],
    '🗽': [
        'Vapauden patsas',
        ':statue_of_liberty:',
        'New York'
    ],
    '⛪': [
        'Kirkon Rakennus',
        ':church_building:',
        'Risti'
    ],
    '🕌': [
        'Moski',
        ':mosque:',
        'Kuorittu Katto',
        'Minaret'
    ],
    '🛕': [
        'Hindu Temppeli',
        ':hindu_temple:'
    ],
    '🕍': [
        'Synagoga',
        ':synagogue:',
        'Juutalainen',
        'Synagog',
        'Temppeli'
    ],
    '⛩️': [
        'Shinto Shrine',
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
        'Sateenvarjo maassa',
        ':beach_umbrella:',
        'Ranta Sateenvarjo'
    ],
    '🌄': [
        'Auringonnousu Vuorten Yli',
        ':sunrise_over_mountains:',
        'Aamu',
        'Auringonnousu'
    ],
    '🌅': [
        'Auringonnousu',
        ':sunrise:',
        ':sunset:',
        'Auringonlasku'
    ],
    '🌆': [
        'Cityscape at Dusk',
        ':cityscape_at_dusk:',
        'Orange Sky City',
        'Dusk City'
    ],
    '🌇': [
        'Auringonlasku Rakennusten Yli',
        ':sunset_over_buildings:',
        'Kaupungin Auringonlasku'
    ],
    '🌃': [
        'Yö tähtien kanssa',
        ':night_with_stars:',
        'Kaupunki Yöllä',
        'Tähtikäs Yö'
    ],
    '🗿': [
        'Moai',
        ':moai:',
        'Pääsiäissaaren Patsas',
        'Ihmisen Rock Veistäminen',
        'Moyain Patsas'
    ],
    '🌠': [
        'Ammunta Tähti',
        ':shooting_star:',
        'Kun Haluat Tähtiä',
        'Meteoroidi'
    ],
    '🌌': [
        'Linnunrata',
        ':milky_way:',
        'Galaksi',
        'Yö Taivas',
        'Tila',
        'Tähdet',
        'Maailmankaikkeus'
    ],
    '🎑': [
        'Kuu Katselee Seremonia',
        ':moon_viewing_ceremony:',
        'Ruohot, huopat ja kuu',
        'Kerää Kuu',
        'Syksyn Välijuhlat',
        'Tsukimi'
    ],
    '🛖': [
        'Mökki',
        ':hut:'
    ],
    '🎢': [
        'Roller Coaster',
        ':roller_coaster:',
        'Rollercoaster',
        'Teemapuisto (teemapuisto)'
    ],
    '🛝': [
        'Leikkikenttä Liu\'uta',
        ':playground_slide:',
        'Vauva',
        'Lapset'
    ]
};
/*technologies (smartphones, laptops, etc.) and office*/
emojis_language[lang][10] = {
    '⌚': [
        'Tarkkaile',
        ':watch:',
        'Aikaväli',
        'Omenan Kello'
    ],
    '⏰': [
        'Hälytys Kello',
        ':alarm_clock:'
    ],
    '⏱️': [
        'Sekuntikello',
        ':stopwatch:'
    ],
    '⏲️': [
        'Ajastimen Kello',
        ':timer_clock:'
    ],
    '🕰️': [
        'Mantelpiece Kello',
        ':mantelpiece_clock:'
    ],
    '🧭': [
        'Kompassi',
        ':compass:'
    ],
    '🕹️': [
        'PeliohjainName',
        ':joystick:'
    ],
    '🎙️': [
        'Studio Mikrofoni',
        ':studio_microphone:'
    ],
    '🎚️': [
        'Tason Liukusäädin',
        ':level_slider:'
    ],
    '🎛️': [
        'Ohjaus Nyörät',
        ':control_knobs:'
    ],
    '📻': [
        'Radio',
        ':radio:',
        'Digitaalinen Radio',
        'Langaton'
    ],
    '📱': [
        'Matkapuhelin Puhelin',
        ':mobile_phone:',
        'Älypuhelin',
        'iPhone',
        'Solun Puhelin',
        'Device'
    ],
    '📲': [
        'Matkapuhelin, jossa oikealla nuoli vasemmalla',
        ':phone_call:',
        'Puhelin Puhelu',
        'Osoitetaan Puhelimeen'
    ],
    '☎️': [
        'Musta Puhelin',
        ':rotary_phone:',
        'Pyörivä Puhelin',
        ':red:'
    ],
    '📞': [
        'Puhelimen Vastaanottaja',
        ':phone:',
        'Handset',
        'Puhelin',
        ':black:',
        'Device'
    ],
    '📟': [
        'Hakulaite',
        ':pager:',
        'Piipuri',
        'Nukkuja'
    ],
    '📠': [
        'Faksi Kone',
        ':fax_machine:',
        'Facsimile',
        'Faksi'
    ],
    '🔋': [
        'Akku',
        ':battery:',
        'Aa Akku',
        'Puhelimen Akku'
    ],
    '🔌': [
        'Sähköpistoke',
        ':power_cable:',
        'AC Adaptor',
        'Virtakaapeli',
        'Virtapistoke'
    ],
    '💻': [
        'Kannettava',
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
        'Työpöydän Tietokone',
        ':desktop_computer:',
        ':computer:',
        'iMac',
        'PC',
        'Device'
    ],
    '🖨️': [
        'Tulostin',
        ':printer:',
        'Device'
    ],
    '⌨️': [
        'Computer Keyboard',
        ':keyboard:',
        ':computer_keyboard:'
    ],
    '🖱️': [
        'Tietokoneen Hiiri',
        ':computer_mouse:',
        'Kolmen Painikkeen Hiiri'
    ],
    '🖲️': [
        'Trackball',
        ':trackball:'
    ],
    '💽': [
        'Tietokone Levy',
        ':blu_ray:',
        'Minidisc',
        'CD',
        'DVD',
        'Blu-ray',
        'BD'
    ],
    '💾': [
        'Levyke Levy',
        ':floppy_disk:',
        '3,5′′ Levy',
        'Levy'
    ],
    '💿': [
        'Optinen Levy',
        ':cd:',
        'CD',
        'CD-ROM',
        'Kompakti Levy'
    ],
    '📀': [
        'DVD',
        'DVD-ROM',
        ':dvd:',
        'Dvd-Video'
    ],
    '🎥': [
        'Elokuvan Kamera',
        ':movie_camera:',
        'Elokuvan Kamera',
        'Hollywood',
        'Elokuva'
    ],
    '🎞️': [
        'Elokuvan Kehykset',
        ':film_frames:'
    ],
    '📽️': [
        'Elokuvaprojektori',
        ':film_projector:'
    ],
    '📺': [
        'Televisio',
        ':tv:',
        'Televisio'
    ],
    '📷': [
        'Digitaalinen Kamera',
        ':digital_camera:'
    ],
    '📸': [
        'Kamera salamalla',
        ':camera_flash:'
    ],
    '📹': [
        'Videon Kamera',
        ':video_camera:',
        'Videokamera'
    ],
    '📼': [
        'Videokasetti',
        ':vhs:',
        'VHS',
        'VCR',
        'Videon Nauha',
        'Videokasetti'
    ],
    '💳': [
        'Luottokortti',
        ':credit_card:',
        'Debet Kortti',
        'AMEX',
        'Diners Club',
        'American Express',
        'Mastercard',
        'VISA Kortti'
    ],
    '📧': [
        'Sähköposti',
        ':email:',
        'Sähköposti'
    ],
    '📨': [
        'Saapuva Kirjekuori',
        ':incoming_envelope:',
        'Kirjekuori Rivillä',
        'Nopea Kirjekuori'
    ],
    '📩': [
        'Kirjekuori alaspäin nuoli yläpuolella',
        ':insert_in_envelope:',
        'Nuolen Kirjekuori Alas',
        'Lisää Kirjekuoreen'
    ],
    '📤': [
        'Lähtevä Kaukalo',
        ':outbox_tray:'
    ],
    '📥': [
        'Saapuneet-Kansion Kaukalo',
        ':inbox_tray:'
    ],
    '📮': [
        'Postilaatikko',
        ':postbox:'
    ],
    '📁': [
        'Tiedosto Kansio',
        ':file_folder:',
        'Kansio',
        'Hakemisto',
        'Suljettu Tiedostokansio'
    ],
    '📂': [
        'Avaa Tiedostokansio',
        ':open_file_folder:',
        'Hakemisto'
    ],
    '🗂️': [
        'Korttiindeksin Jakajat',
        ':card_index_dividers:'
    ],
    '📅': [
        'Kalenteri',
        ':calendar:',
        '17. Heinäkuuta',
        'Maailman Emoji-Päivä'
    ],
    '🗓️': [
        'Spiral Kalenteri Pad',
        ':spiral_calendar_pad:'
    ],
    '📆': [
        'Tear-Off Kalenteri',
        ':day_calendar:',
        'Päivän Kalenteri',
        'Työpöydän Kalenteri'
    ],
    '📈': [
        'Kaavion Kasvaminen',
        ':increasing_chart:',
        'Positiivinen Kaavio',
        'Ylös Pisteytys Kaavio',
        'Kaavio ylöspäin -suuntauksella'
    ],
    '📉': [
        'Kaavion Vähentyminen',
        ':decreasing_chart:',
        'Negatiivinen Kaavio',
        'Alas Pisteytys Kaavio',
        'Kaavio alaspäin suuntauksella'
    ],
    '📊': [
        'Palkki Kaavio',
        ':bar_chart:',
        'Palkin Kaavio'
    ],
    '📌': [
        'Pushpin',
        ':pushpin:',
        'Thumb Tack',
        ':red:'
    ],
    '📋': [
        'Leikepöytä',
        ':clipboard:'
    ],
    '📍': [
        'Pyöreä Pushpin',
        ':round_pushpin:',
        'Pudotettu PIN-koodi',
        'Kartta PIN-koodi',
        'Kiinnitä',
        'Punainen Pin',
        ':red:'
    ],
    '📎': [
        'Paperiliitin',
        ':paperclip:',
        'Clippy'
    ],
    '📏': [
        'Suora Rullaus',
        ':straight_ruler:'
    ],
    '📐': [
        'Kolmikulmainen Ruler',
        ':triangular_ruler:',
        'Kolmio Ruler'
    ],
    '✂️': [
        'Sakset',
        ':scissors:',
        'Leikkaus'
    ],
    '✏️': [
        'Kynä',
        ':pencil:',
        'Lyijykynä'
    ],
    '✒️': [
        'Musta Nib',
        ':black_nib:',
        'Kynä Nib',
        'Suihkulähde Kynä'
    ],
    '🖋️': [
        'Suihkulähde Kynä',
        ':fountain_pen:',
        'Alempi Vasen Lähdekoodi Kynä'
    ],
    '🖊️': [
        'Kynä',
        ':pen:',
        'Alempi Vasemman Ballpoint Pen',
        'Ballpoint Pen'
    ],
    '🖌️': [
        'Maalinharja',
        ':paintbrush:',
        'Siveli',
        'Alavasen Paintbrush'
    ],
    '🖍️': [
        'Crayon',
        ':crayon:',
        'Alempi Vasen Ripustus'
    ],
    '📝': [
        'Muistio',
        ':memo:',
        'Memorandum',
        'Huomautus',
        'Kynsiili Ja Paperi'
    ],
    '🗑️': [
        'Jätepaperin Kori',
        ':wastepaper_basket:',
        'Roskat Voi',
        'Rubbish Bin',
        'Roskakori Voi'
    ],
    '📡': [
        'Satelliitti Antenni',
        ':satellite_antenna:'
    ],
    '🔭': [
        'Kaukoputki',
        ':telescope:',
        'Tärkkelys'
    ],
    '🔬': [
        'Mikroskooppi',
        ':microscope:',
        'Magnify',
        'Tiede'
    ],
    '📭': [
        'Avaa postilaatikko alaspäin lipulla',
        ':open_mailbox_lowered:'
    ],
    '📬': [
        'Avaa kansio korotetulla lipulla',
        ':open_mailbox_raised:',
        'Avaa Postilaatikko'
    ],
    '📪': [
        'Suljettu postilaatikko pienennetyllä lipulla',
        ':closed_mailbox_lowered:'
    ],
    '📫': [
        'Suljettu postilaatikko lisäämällä lippu',
        ':closed_mailbox_raised:'
    ],
    '📰': [
        'Sanomalehti',
        ':newspaper:'
    ],
    '🗞️': [
        'Valssattu Sanomalehti',
        ':rolled_up_newspaper:',
        'Sanomalehtien Toimitus'
    ],
    '📄': [
        'Sivu Ylös',
        ':printed_page:',
        'Tulostettu Sivu'
    ],
    '📜': [
        'Vieritä',
        ':scroll:',
        'Taso',
        'Parchment'
    ],
    '📃': [
        'Page with Curl',
        ':curled_page:',
        'Curled Page',
        'Curly Page'
    ],
    '📓': [
        'Muistikirja',
        ':notebook:',
        'Musta Ja Valkoinen Kirja'
    ],
    '📔': [
        'Muistikirja ja koriste kansi',
        ':notebook_decorative_cover:'
    ],
    '📕': [
        'Suljettu Kirja',
        ':closed_book:',
        'Punainen Kirja',
        'Punainen Oppikirja',
        ':red:'
    ],
    '📖': [
        'Avaa Kirja',
        ':open_book:',
        'Kirja',
        'Uusi'
    ],
    '📗': [
        'Vihreä Kirja',
        ':green_book:',
        'Vihreä Oppikirja',
        ':green:'
    ],
    '📘': [
        'Sininen Kirja',
        ':blue_book:',
        'Sininen Oppikirja',
        ':blue:'
    ],
    '📙': [
        'Oranssi Kirja',
        ':orange_book:',
        'Oranssi Oppikirja',
        ':orange:'
    ],
    '📚': [
        'Kirjat',
        ':books:',
        'Pileä Kirjoja',
        'Kirjojen Pino'
    ],
    '🗳️': [
        'Ballot Box Ballot',
        ':ballot_box:',
        'Ääni Laatikko',
        'Äänestys'
    ],
    '🗄️': [
        'Tiedostokaappi',
        ':file_cabinet:',
        'Hakemuskaappi'
    ],
    '🗃️': [
        'Kortin Tiedostolaatikko',
        ':card_file_box:'
    ],
    '🖇️': [
        'Linkitetyt Paperiliittimet',
        ':linked_paperclips:',
        ':gray:',
        ':grey:'
    ]
};
/*clothes and accessories*/
emojis_language[lang][11] = {
    '👣': [
        'Jalanjäljet',
        ':footprints:',
        'Jalat',
        'Jalanaskelmat'
    ],
    '👓': [
        'Silmälasit',
        ':glasses:',
        'Silmälasit'
    ],
    '🕶️': [
        'Aurinkolasit',
        ':sunglasses:'
    ],
    '🥽': [
        'Goggles',
        ':goggles:'
    ],
    '🥼': [
        'Lab Takki',
        ':lab_coat:'
    ],
    '👔': [
        'Necktie',
        ':necktie:',
        'Business Paita',
        'Paita Ja Solmio'
    ],
    '👕': [
        'T-Paita',
        ':t_shirt:',
        ':t-shirt:',
        'Tee Paita',
        'Polo Paita'
    ],
    '👖': [
        'Farkut',
        ':jeans:',
        'Denim',
        'Housut',
        'Housut'
    ],
    '🧣': [
        'Scarf',
        ':scarf:'
    ],
    '🧤': [
        'Käsineet',
        ':gloves:'
    ],
    '🧥': [
        'Takki',
        ':coat:'
    ],
    '🧦': [
        'Socks',
        ':socks:'
    ],
    '👗': [
        'Mekko',
        ':dress:',
        'Hame',
        'Gown'
    ],
    '👘': [
        'Kimono',
        ':kimono:',
        'Dressing Gown',
        'Japanilainen Mekko'
    ],
    '👙': [
        'Bikini',
        ':bikini:',
        'Uimarit',
        'Uimapuku'
    ],
    '🩱': [
        'Yksiosainen Uimapuku',
        'one_piece_swimpuku',
        'yksiosainen uimapuku'
    ],
    '👚': [
        'Naisten Vaatteet',
        ':womans_clothes:',
        'Naisten Vaatteet',
        'Blouse',
        'Vaaleanpunainen Paita',
        'Blouse'
    ],
    '👛': [
        'Kukkaro',
        ':purse:',
        'Lompakko'
    ],
    '👜': [
        'Käsilaukku',
        ':handbag:'
    ],
    '👝': [
        'Kytkin Pussi',
        ':clutch_bag:',
        'Kytkin',
        'Pieni Laukku',
        'Pouch'
    ],
    '🎒': [
        'Reppu',
        ':backpack:',
        'Pussi',
        'Koulun Laukku',
        'Koulun Satchel',
        'Rucksack'
    ],
    '👞': [
        'Mans Shoe',
        ':mans_shoe:',
        'Mans Shoe',
        'Kenkä',
        'Ruskea Sarja',
        'Mekko Näytä'
    ],
    '👟': [
        'Athletic Shoe',
        ':athletic_shoe:',
        'Käynnissä Oleva Kengä',
        'Sneaker',
        'Juoksija',
        'Kouluttaja',
        'Tenniskenkä'
    ],
    '🥾': [
        'Vaelluksen Käynnistys',
        ':hiking_boot:'
    ],
    '🥿': [
        'Tasainen Kengä',
        ':flat_shoe:'
    ],
    '👠': [
        'Korkea Kengä',
        ':high_heeled_shoe:',
        ':high_heel:',
        'Stiletto',
        'Korkeat Korot'
    ],
    '👡': [
        'Naiset Sandaali',
        ':womans_sandal:',
        'Naiset Sandaali',
        'Kallistettu Sandaali',
        'Sandaalit',
        'Sandal'
    ],
    '👢': [
        'Naisten Saappaat',
        ':womans_boots_',
        'Naisten Saappaat',
        'Cowgirl Saappaat',
        'Polven Korkeat Saappaat',
        'Kuoritut Saappaat'
    ],
    '👑': [
        'Kruunu',
        ':crown:',
        'Kuningas',
        'Kuningatar',
        'Prinssi',
        'Kuninkaallinen',
        'Prinsessa',
        ':gold:',
        ':yellow:'
    ],
    '👒': [
        'Hattu',
        ':hat:',
        'Naisten Hattu',
        'Hattu Jousella',
        'Naiset Hattu'
    ],
    '🎩': [
        'Ylhäällä Hattu',
        ':top_hat:',
        'Muodollinen Kuluminen',
        'Groom',
        ':black:'
    ],
    '🎓': [
        'Valmistumisen Suoja',
        ':graduation_cap:',
        'Kollegio',
        'Graduate',
        'Laastari Lauta',
        'Yliopisto',
        'Square Akateeminen Kanta',
        ':black:'
    ],
    '🧢': [
        'Laskutettu Kanta',
        ':billed_cap:',
        'Baseball Kanta'
    ],
    '⛑️': [
        'Kypärä valkoisella ristillä',
        ':helmet_with_white_cross:',
        ':helmet_with_cross:',
        ':rescue_worker_helmet:',
        ':rescue_workers_helmet:',
        'Pelastustyöntekijöiden Kypärä',
        ':red:',
        ':white:'
    ],
    '💼': [
        'Salkku',
        ':briefcase:',
        'Matkalaukku'
    ],
    '🎖️': [
        'Sotilasmitali',
        ':military_medal:',
        ':medal:',
        'Mitali',
        'Keskitaso',
        'Sotilaallinen Koristelu'
    ],
    '📿': [
        'Rukous Helmet',
        ':prayer_beads:',
        'Dhikr Helmet',
        'Rosary Helmet'
    ],
    '🎗️': [
        'Muistutus Ribbo',
        ':reminder_ribbo:'
    ],
    '🤿': [
        'Sukellusnaamio',
        ':diving_mask:'
    ],
    '🦺': [
        'Turvallisuus Vest',
        ':safety_vest:'
    ],
    '🥻': [
        'Sari',
        ':sari:',
        'Saareva',
        'Shari'
    ],
    '🩲': [
        'Lyhyet',
        ':briefs:',
        'Undies',
        'Underwear',
        'Underpants',
        'Jocks',
        'Panties'
    ],
    '🩳': [
        'Shortsit',
        ':shorts:'
    ],
    '🛼': [
        'Rullan Luistelu',
        ':roller_skate:',
        'Inline Luistelu',
        'Roller Derby'
    ],
    '🩴': [
        'Käännä Flop',
        ':flip_flop:',
        'Thong Sandal'
    ],
    '🪖': [
        'Sotilaallinen Kypärä',
        ':military_helmet:'
    ],
    '🩰': [
        'Ballet Kengät',
        ':ballet_shoes:',
        'Pointe Shoe'
    ],
    '🩼': [
        'Crutch',
        ':crutch:'
    ]
};
/*hands and parts of body*/
emojis_language[lang][12] = {
    '👋{{skin_tone}}': [
        'Waving Käsi -kyltti',
        ':wave:',
        ':waving_hand:',
        'Hyvästi',
        'Käsi Aalto',
        'Hei',
        'Hi'
    ],
    '🖐️{{skin_tone}}': [
        'Käsi sormien kanssa Splayed',
        ':hand_splayed:',
        ':raised_hand_with_fingers_splayed:',
        ':hand_with_fingers_splayed:',
        'Viisi Käsi',
        'Pelattu Käsi',
        'Raised käsi kanssa Fingers Splayed'
    ],
    '🤚{{skin_tone}}': [
        'Raised Back of Hand',
        ':raised_back_of_hand:',
        ':back_of_hand:',
        'Tausta'
    ],
    '✋{{skin_tone}}': [
        'Nostettu Käsi',
        ':raised_hand:',
        ':hand:',
        'Korkea Viisi',
        'Pysäytä'
    ],
    '🖖{{skin_tone}}': [
        'Vulcan Salute',
        ':vulcan_salute:',
        'Spock',
        'Tähti Trek',
        'Raised Hand kanssa Osa Välillä keski-ja rengas Fingers'
    ],
    '👌{{skin_tone}}': [
        'Ok Käsi Allekirjoitus',
        ':ok_hand:',
        'Okei',
        'Täydellinen',
        'Kyllä'
    ],
    '✌️{{skin_tone}}': [
        'Voitto Käsi',
        ':victory_hand:',
        'Ilmaa Koskevat Lainaukset',
        'Rauhan Allekirjoitus',
        'V Allekirjoitus'
    ],
    '🤞{{skin_tone}}': [
        'Risteytetyt Sormet',
        ':crossed_fingers:',
        'Sormien Risteytys',
        'Onnea',
        'Käsi indeksin ja Middle Fingers Crossed'
    ],
    '🤟{{skin_tone}}': [
        'Love-You Eleet',
        ':love_you_gesture:',
        ':i_love_you_hand_sign:',
        'Rakastan Sinua Käsi Allekirjoitus'
    ],
    '🤘{{skin_tone}}': [
        'Sarvten merkki',
        ':the_horns:',
        ':sign_of_the_horns:',
        ':metal:',
        'Devil Fingers',
        'Raskas Metalli',
        'Rock Päällä'
    ],
    '🤙{{skin_tone}}': [
        'Soita Minulle Käsi Allekirjoitus',
        ':call_me_hand:',
        ':call_me:',
        'Puhelimen Käsi',
        'Shaka'
    ],
    '🤏{{skin_tone}}': [
        'Puristava Käsi',
        ':pinching_hand:'
    ],
    '👈{{skin_tone}}': [
        'Taustahakemisto Osoittaa Vasemmalle',
        ':backhand_index_pointing_left:',
        ':point_left:',
        'Valkoinen Vasemmalle Osoittaen Taustan Indeksi'
    ],
    '👉{{skin_tone}}': [
        'Taustahakemisto Osoittaa Oikealle',
        ':backhand_index_pointing_right:',
        ':point_right:',
        'Valkoinen Oikea Osoittaa Taustan Indeksi'
    ],
    '👆{{skin_tone}}': [
        'Taustaindeksin Pisteytys Ylös',
        ':point_up_2:',
        ':backhand_index_pointing_up:',
        'Valkoinen Ylös Pointing Backhand Indeksi',
        'Keski Sormi'
    ],
    '👇{{skin_tone}}': [
        'Taustan Indeksi Pointing Alas',
        ':point_down:',
        ':backhand_index_pointing_down:',
        'Valkoinen Alas Pisteytys Backhand Indeksi',
        'Pisteytys Alas'
    ],
    '☝{{skin_tone}}': [
        'Indeksoi Sormen Pisteytys Ylös',
        ':point_up:',
        ':index_pointing_up:',
        'Valkoinen Ylös Pisteytys Indeksi',
        'Salainen'
    ],
    '🖕{{skin_tone}}': [
        'Keski Sormi',
        ':middle_finger:',
        'Flipping The Bird',
        'Rude Sormi',
        'Käänteinen käsi keski-sormella laajennettu'
    ],
    '👍{{skin_tone}}': [
        'Peukalot Ylös Kirjaudu',
        ':thumbs_up_sign:',
        'Tykkää',
        'Kyllä'
    ],
    '👎{{skin_tone}}': [
        'Peukalot Alas Allekirjoitus',
        ':thumbs_down_sign:',
        'Huono',
        'Dislike',
        'Ei'
    ],
    '✊{{skin_tone}}': [
        'Nostettu Fist',
        ':raised_fist:',
        'Fist Pumppu'
    ],
    '👊{{skin_tone}}': [
        'Saapuva Fist',
        ':oncoming_fist:',
        'Bro Fist',
        'Brofist',
        'Fist Bump',
        'Isku',
        'Suljettu Fist',
        'Nyrkkeilyn Käsi Allekirjoitus'
    ],
    '🤛{{skin_tone}}': [
        'Vasen Nyrkki Pumppu',
        ':left_fist_bump:'
    ],
    '🤜{{skin_tone}}': [
        'Oikea Fist Bump',
        ':right_fist:bump:'
    ],
    '🤌{{skin_tone}}': [
        'Puristetut Sormet',
        ':pinched_fingers:',
        'Ma Che Vuoi',
        'Sormen Kukkaro'
    ],
    '👏{{skin_tone}}': [
        'Papimisen Käsien Kyltti',
        ':cap:',
        ':clapping_hands:',
        'Suosionosoituksia',
        'Clap',
        'Taputus',
        'Golf Clap',
        'Pyöreä Suosionosoituksia'
    ],
    '🙌{{skin_tone}}': [
        'Henkilö nostaa molemmat kädet juhlissa',
        ':raised_hands:',
        ':raising_hands:',
        'Käsien nostaminen',
        'Aseet Ilmassa',
        'Banzai',
        'Festivus Ihme',
        'Hallelujah',
        'Kehua Kädet',
        'Kaksi Kättä'
    ],
    '👐{{skin_tone}}': [
        'Avaa Käsien Allekirjoitus',
        ':open_hands_sign:',
        'Halaus',
        'Jazz Kädet'
    ],
    '🤲{{skin_tone}}': [
        'Palmut Ylös Yhdessä',
        ':palms_up_together:',
        'Dua'
    ],
    '🤝{{skin_tone}}': [
        'Handshake',
        ':handshake:',
        'Ravistus Kädet'
    ],
    '🙏{{skin_tone}}': [
        'Taitettu Kädet',
        ':folded_hands:',
        'Namaste',
        'Ole hyvä',
        'Rukous',
        'Kiitos Olet',
        'Henkilö, jolla on taitettu kädet'
    ],
    '✍{{skin_tone}}': [
        'Kirjoitetaan Käsi',
        ':writing_hand:'
    ],
    '🫱{{skin_tone}}': [
        'Oikeanpuoleinen Käsi',
        ':rightwards_hand:'
    ],
    '🫲{{skin_tone}}': [
        'Vasen Käsi',
        ':leftwards_hand:'
    ],
    '🫳{{skin_tone}}': [
        'Palm Alas Käsi',
        ':palm_down_hand:'
    ],
    '🫴{{skin_tone}}': [
        'Palm ylös Käsi',
        ':palm_up_hand:'
    ],
    '🫰{{skin_tone}}': [
        'Hand with Index Finger ja peukalo Crossed',
        ':hand_with_index_finger_and_thumb_crossed:'
    ],
    '🫵{{skin_tone}}': [
        'Hakemisto osoittaa katsojan',
        ':index_pointing_at_the_viewer:'
    ],
    '🫶{{skin_tone}}': [
        'Sydän Kädet',
        ':heart_hands:',
        'Rakkaus'
    ],
    '💪{{skin_tone}}': [
        'Flexed Biceps',
        ':flexed_biceps:',
        'Taipuisat Varren Lihakset',
        'Musle',
        'Vahva'
    ],
    '🦵{{skin_tone}}': [
        'Jalka',
        ':leg:'
    ],
    '🦶{{skin_tone}}': [
        'Jalka',
        ':foot:'
    ],
    '👂{{skin_tone}}': [
        'Korva',
        ':ear:',
        'Korvat',
        'Kuulemistilaisuus',
        'Kuunteleminen'
    ],
    '👃{{skin_tone}}': [
        'Nenä',
        ':nose:',
        'Hajuvesi',
        'Nuuskinta',
        'Stinky'
    ],
    '🦻{{skin_tone}}': [
        'Kuulo-apua sisältävä korva',
        ':ear_with_hearing_aid:'
    ],
    '🧠': [
        'Aivot',
        ':brain:',
        ':pink:'
    ],
    '🦷': [
        'Hammas',
        ':tooth:',
        ':white:'
    ],
    '👀': [
        'Silmät',
        ':eyes:',
        'Silmämunat',
        'Shifty Silmät',
        'Viisas Silmä'
    ],
    '👁️': [
        'Silmä',
        ':eye:',
        'Yksittäinen Silmä'
    ],
    '👅': [
        'Kieli Ulos',
        ':tongue_out:',
        ':red:'
    ],
    '👄': [
        'Suun',
        ':mouth:',
        'Suuteltavat Huulet',
        'Huulet',
        ':red:'
    ],
    '🫦': [
        'Purentava Huuli',
        ':biting_lip:',
        'Huulet',
        ':red:'
    ],
    '🫀': [
        'Anatominen Sydän',
        ':anatomical_heart:',
        ':red:'
    ],
    '🫁': [
        'Keuhkot',
        ':lungs:',
        ':red:'
    ],
    '🦾': [
        'Mekaaninen Varsi',
        ':mechanical_arm:',
        'Vahva',
        ':gray:',
        ':grey:'
    ],
    '🦿': [
        'Mekaaninen Jalka',
        ':mechanical_leg:',
        ':gray:',
        ':grey:'
    ],
    '💅{{skin_tone}}': [
        'Nail Polish',
        ':nail_polish:',
        'Sormentimet',
        'Manicure',
        'Nonchalant'
    ],
    '🤳{{skin_tone}}': [
        'Selfie',
        ':selfie:',
        'Puhelimen Kamera',
        'Selfie Käsi'
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
        'Poon kasvi',
        ':pile_of_poo:',
        'Koiran Multa',
        'Hymyilevä Katto',
        ':brown:'
    ],
    '💋': [
        'Suudelman Merkki',
        ':kiss_mark:',
        'Suuteltavat Huulet',
        ':red:'
    ],
    '🦴': [
        'Lu',
        ':bone:'
    ],
    '🧳': [
        'Matkatavarat',
        ':luggage:',
        'Matkalaukku'
    ],
    '🌂': [
        'Suljettu Sateenvarjo',
        ':closed_umbrella:',
        'Tiivistetty Sateenvarjo',
        'Vaaleanpunainen Sateenvarjo',
        ':pink:',
        ':purple:'
    ],
    '☂️': [
        'Sateenvarjo',
        ':umbrella:',
        ':purple:'
    ],
    '☔': [
        'Sateenvarjo ja sadepisarat',
        ':umbrella_with_rain_drops:',
        ':umbrella:',
        'Saavutus',
        'Rainy'
    ],
    '🧵': [
        'Säikeen poiminta',
        ':spool_of_thread:'
    ],
    '🧶': [
        'Lanan pallo',
        ':ball_of_yarn:'
    ],
    '💄': [
        'Lipstick',
        ':lipstick:',
        'Huule Kiilto',
        'Meikki',
        ':red:'
    ],
    '💍': [
        'Soita',
        ':ring:',
        'Diamond Ring',
        'Sitoutumismekanismi'
    ],
    '💎': [
        'Gem kivi',
        ':gem_stone:',
        'Timantti',
        'Jalokivi',
        'Jalokivi',
        'Korianteri',
        ':blue:'
    ],
    '💥': [
        'Törmäyksen Symboli',
        ':collision_symbol:',
        'Bang',
        'Räjäytä',
        'Vaikutus',
        'Punainen Spark',
        'Räjähdys'
    ],
    '💫': [
        'Dizzy Symboli',
        ':dizzy_symbol:',
        'Ympyrä Ja Tähti',
        ':yellow:'
    ],
    '💦': [
        'Splashing Hiki Symboli',
        'sweat_drops',
        'sweat_droplets',
        'Plewdit',
        'Roiskeva Vesi',
        'Vesipisarat',
        ':blue:'
    ],
    '💨': [
        'Viihdytys Poissa',
        ':dashing_away:',
        'Nopea',
        'Höyry',
        'Vappaus',
        'Tuuli',
        'Dash Symboli',
        'Tuulen puristus'
    ],
    '🌬️': [
        'Tuulen Kasvot',
        ':wind_face:',
        'Puhallettava Tuuli',
        'Luontoäiti',
        'Tuulen Kirkastaminen Kasvot',
        ':white:'
    ],
    '🐾': [
        'Sotilaan Tulosteet',
        ':paw_prints:',
        'Kissa Sovitustulosteet',
        'Koiran Paw Tulostaa',
        'Kitten Paw Prints',
        'Puppy Sow Tulostaa'
    ],
    '🕸️': [
        'Hämähäkki Web',
        ':spider_web:',
        'Cobweb',
        'Verkko',
        'Spiderweb'
    ],
    '🦠': [
        'Mikrobi',
        ':microbe:',
        'Solu',
        'Koronavirus',
        'COVID-19',
        'Germ',
        'Mikro-organismi',
        'Virus',
        ':green:'
    ],
    '💐': [
        'Kukkakimppu Kukat',
        ':bouquet_of_flowers:'
    ],
    '🌍': [
        'Globe Näyttää Euroopan Ja Afrikan',
        ':globe_showing_europe_africa:',
        ':earth_africa:',
        'Maa',
        'Globe',
        'Planeetta',
        'Maailma',
        'Globe Showing Europe and Africa',
        ':blue:'
    ],
    '🌎': [
        'Globe Showing Americas',
        ':globe_showing_americas:',
        ':earth_americas:',
        'Maa',
        'Globe',
        'Planeetta',
        'Maailma',
        ':blue:'
    ],
    '🌏': [
        'Globe Näyttää Aasia-Australia',
        ':globe_showing_asia_australia:',
        ':earth_asia:',
        'Maa',
        'Globe',
        'Planeetta',
        'Maailma',
        'Globe Showing Asia and Australia',
        ':blue:'
    ],
    '🌐': [
        'Globe ja Meridians',
        ':globe_with_meridians:',
        'Internet',
        'Maailman Laaja Verkko',
        'WWW'
    ],
    '🌑': [
        'Uusi Kuu Symboli',
        ':new_moon:',
        'Tumma Kuu',
        'Varjo Kuu',
        'Solar Eclipse',
        ':black:'
    ],
    '🌒': [
        'Kasvava Kuun Symboli',
        ':waxing_crescent_moon:',
        ':yellow:',
        ':black:'
    ],
    '🌓': [
        'Ensimmäisen Neljännen Kuun Symboli',
        ':first_quarter_moon:',
        ':yellow:',
        ':black:'
    ],
    '🌔': [
        'Kasvava Kuu Symboli',
        ':moon:',
        ':waxing_gibbous_moon:',
        ':yellow:',
        ':black:'
    ],
    '🌕': [
        'Full Moon Symboli',
        ':full_moon:',
        ':yellow:'
    ],
    '🌖': [
        'Haluava Gibbous Kuu Symboli',
        ':waning_gibbous_moon:',
        ':yellow:',
        ':black:'
    ],
    '🌗': [
        'Viimeinen Neljännesvuosi Kuu Symboli',
        ':last_quarter_moon:',
        ':yellow:',
        ':black:'
    ],
    '🌘': [
        'Haluava Kuun Symboli',
        ':waning_crescent_moon:',
        ':yellow:',
        ':black:'
    ],
    '🌙': [
        'Kuu Crescent',
        ':crescent_moon:',
        ':yellow:'
    ],
    '🌚': [
        'Uusi kuu kasvoilla',
        ':new_moon_with_face:',
        'Hiipivä Kuu',
        'Tumma Kuu Kasvot',
        'Nuorempi Kuu',
        ':black:',
        ':gray:',
        ':grey:'
    ],
    '🌝': [
        'Täysi kuu kasvoilla',
        ':full_moon_with_face:',
        'Moonface',
        'Smiley Moon',
        'Hymyyttävä Kuu',
        ':yellow:'
    ],
    '🌛': [
        'Ensimmäinen neljäsosa Moon kasvoilla',
        ':first_quarter_moon_with_face:',
        ':first_quarter_moon_face:',
        ':yellow:'
    ],
    '🌜': [
        'Viimeinen neljäsosa Moon kasvoilla',
        ':last_quarter_moon_with_face:',
        ':last_quarter_moon_face:',
        ':yellow:'
    ],
    '🌞': [
        'Aurinko kasvoilla',
        ':sun_with_face:',
        'Hymy Su',
        'Sunface',
        'Hymyilevä Aurinko',
        ':yellow:'
    ],
    '☀️': [
        'Su',
        ':sun:',
        'Auringonpaiste',
        ':yellow:'
    ],
    '⭐': [
        'Tähti',
        ':star:',
        'Valkoinen Keskipitkä Tähti',
        ':yellow:'
    ],
    '🌟': [
        'Hehkuva Tähti',
        ':glowing_star:',
        'Shining Star',
        ':yellow:'
    ],
    '☁️': [
        'Pilvi',
        ':cloud:',
        'Pilvinen',
        'Pilvistä',
        ':white:'
    ],
    '⛅': [
        'Aurinko Pilven Takana',
        ':thunder_cloud_and_rain:',
        ':thunder_cloud_rain:',
        ':cloud_with_lightning_and_rain:',
        ':white:'
    ],
    '⛈️': [
        'Pilvi Lightning ja sade',
        ':thunder_cloud_and_rain:',
        ':thunder_cloud_rain:',
        ':cloud_with_lightning_and_rain:',
        'Thunder Cloud ja sade',
        ':white:'
    ],
    '🌤️': [
        'Valkoinen aurinko, jossa pieni pilvi',
        ':mostly_sunny:',
        ':sun_behind_small_cloud:',
        ':sun_small_cloud:',
        ':white_sun_small_cloud:',
        ':white_sun_with_small_cloud:',
        ':white:'
    ],
    '🌥️': [
        'Aurinko Suuren Pilven Takana',
        ':sun_behind_large_cloud:',
        'Valkoinen Aurinko Pilven Takana',
        ':white:'
    ],
    '🌦️': [
        'Valkoinen aurinko pilven takana sateella',
        ':sun_behind_rain_cloud:',
        ':partly_sunny_rain:',
        ':white_sun_rain_cloud:',
        ':white_sun_behind_cloud_with_rain:',
        ':white:'
    ],
    '🌧️': [
        'Pilvi sateella',
        ':cloud_with_rain:',
        ':white:'
    ],
    '🌨️': [
        'Pilvi lunta',
        ':cloud_with_snow:',
        ':white:'
    ],
    '🌩️': [
        'Pilvi Lightning kanssa',
        ':cloud_with_lightning:',
        ':white:'
    ],
    '🌪️': [
        'Tornado',
        ':tornado:',
        'Pilvi Tornadon kanssa'
    ],
    '🌫️': [
        'Fog',
        ':fag:',
        ':white:',
        ':gray:',
        ':grey:'
    ],
    '🌈': [
        'Sateenkaari',
        ':rainbow:',
        'Gay Pride',
        'Ensisijainen Sateenkaari',
        'LGBTQIA+',
        'LGBT+'
    ],
    '❄️': [
        'Lumihiutale',
        ':snowflake:',
        'Lumi',
        'Torni',
        ':white:'
    ],
    '🌀': [
        'Syklooni',
        ':cyclone:',
        'Hurrikaani',
        'Spiraali',
        'Pyöritä',
        'Tornado'
    ],
    '⚡': [
        'Korkea Jännitetunnus',
        ':high_voltage_sign:',
        'Salama Bolt',
        'Ukkospultti',
        'Korkea Jännite'
    ],
    '☃️': [
        'Lumiukko',
        ':snowman:',
        'Lumiukko Lumihiutaleilla',
        ':white:'
    ],
    '⛄': [
        'Lumiukko Ilman Lumiukkoa',
        'lumiukko_without_snow',
        ':snowman:',
        'Upea Lumiukko',
        'Olaf',
        'Lumiukko',
        ':white:'
    ],
    '☄️': [
        'Komeetta',
        ':comet:'
    ],
    '🔥': [
        'Tulipalo',
        ':fire:',
        'Liekki',
        'Kuuma',
        'Lit',
        'Snapstreak',
        ':red:'
    ],
    '💧': [
        'Droplet',
        ':droplet:',
        'Vesi',
        'Vesipisara',
        ':blue:'
    ],
    '✨': [
        'Sparkles',
        ':sparkles:',
        'Glitter',
        'Shiny',
        'Uusi'
    ],
    '🌊': [
        'Veden Aallo',
        ':water_wave:',
        'Ranta',
        'Valtameren Aalto',
        'Meri',
        ':blue:'
    ],
    '🎄': [
        'Joulukuusi',
        'joulupuut',
        'Joulu',
        'Xmas Puu',
        ':green:'
    ],
    '🎃': [
        'Jack-O-Lyhty',
        'jack_o_lyhty',
        'Halloween',
        'Kurpitsa',
        ':orange:'
    ],
    '🌻': [
        'Auringonkukka',
        ':sunflower:',
        'Keltainen Kukka',
        ':yellow:'
    ],
    '🌼': [
        'Blossom',
        ':blossom:',
        'Kukkiva Kukka',
        'Daisy',
        'Keltainen Kukka',
        ':yellow:'
    ],
    '🌷': [
        'Tulip',
        ':tulip:',
        ':pink:'
    ],
    '🌹': [
        'Ruusu Kukka',
        ':rose_flower:',
        'Punainen Ruusu',
        ':red:'
    ],
    '☘️': [
        'Shamrock',
        ':shamrock:',
        'Apila',
        'Trefoil',
        ':green:'
    ],
    '🍀': [
        'Neljä Lehtisapila',
        ':four_leaf_clover:',
        'Apila',
        'Irlanti',
        'Onnekas',
        'Fortune',
        ':green:'
    ],
    '🌸': [
        'Cherry Blossom',
        ':cherry_blossom:',
        'Vaaleanpunainen Kukka',
        'Sakura',
        ':pink:'
    ],
    '💮': [
        'Valkoinen Kukka',
        ':white_flower:',
        'Cherry Blossom',
        'Paperi Doilis',
        'Hyvin Tehty Leima',
        ':white:'
    ],
    '🌺': [
        'Hibiscus',
        ':hibiscus:',
        ':red:'
    ],
    '🏵️': [
        'Rosetti',
        ':rosette:',
        ':orange:',
        ':yellow:'
    ],
    '🌱': [
        'Seedling',
        ':seedling:',
        'Kevät',
        'Sprout',
        'Itäminen',
        ':green:'
    ],
    '🌲': [
        'Evergreen Puu',
        ':evergreen_tree:',
        'Fir Puu',
        'Mänty Puu',
        ':green:'
    ],
    '🌳': [
        'Lehtipuu',
        ':deciduous_tree:',
        'Pyöristetty Puu',
        ':green:'
    ],
    '🌴': [
        'Palm Puu',
        ':palm_tree:',
        'Kookospuu',
        ':green:'
    ],
    '🎋': [
        'Tanabata Puu',
        ':tanabata_tree:',
        'Tanabata',
        'Toiveluu'
    ],
    '🎍': [
        'Mänty Koristelu',
        ':pine_decoration:',
        'Bambu',
        'Kadomatsu',
        'Uuden Vuoden Koristelu'
    ],
    '🌵': [
        'Cactus',
        ':cactus:',
        'Desert',
        ':green:'
    ],
    '🌾': [
        'Riisin Sheaf',
        ':sheaf_of_rice:',
        'Rajaa',
        'Viljely',
        'Vehnä',
        'Riisin korva'
    ],
    '🌿': [
        'Yrtti',
        ':herb:',
        'Rajaa',
        'Kasvi',
        ':green:'
    ],
    '🍁': [
        'Vaahteran Lehti',
        ':maple_leaf:',
        'Kanada',
        'Kanadalainen',
        'Vaahto',
        ':brown:'
    ],
    '🍂': [
        'Kaasunainen Lehti',
        ':fallen_leaf:',
        'Syksyn Lehti',
        'Syksyn Lehdet',
        'Ruskeat Lehdet',
        'Pudonta Lehdet',
        'Kaatuneet Lehdet',
        ':brown:'
    ],
    '🍃': [
        'Leaf Fluttering in Wind',
        ':leaf_fluttering_in_wind:',
        ':leaves:',
        'Vihreät Lehdet',
        'Kevät',
        ':green:'
    ],
    '🪴': [
        'Pottettu Kasvi',
        ':potted_plant:',
        ':green:'
    ],
    '🪸': [
        'Koralli',
        ':coral:',
        'Ilmastonmuutos'
    ],
    '🪷': [
        'Lotus',
        ':lotus:',
        'Puhtaus',
        'Kauneus',
        'Rauhallisuus',
        'Tietoisuus'
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
        'Avain',
        ':key:',
        'Kultainen Avain',
        ':gold:',
        ':yellow:'
    ],
    '🗝️': [
        'Vanha Avain',
        ':old_key:',
        ':brown:'
    ],
    '🔨': [
        'Vasara',
        ':hammer:',
        'Claw Vasara',
        'Handyman',
        'Työkalu'
    ],
    '⛏️': [
        'Valitse',
        ':pick:',
        'Hakku'
    ],
    '🪓': [
        'Kirves',
        ':axe:',
        'palomiehen'
    ],
    '🪚': [
        'Kirvesmiehen Saha',
        ':carpentry_saw:'
    ],
    '🪛': [
        'Ruuvitalvi',
        ':screwdriver:'
    ],
    '🪝': [
        'Koukku',
        ':hook:'
    ],
    '🪠': [
        'Plunger',
        ':plunger:'
    ],
    '🪣': [
        'Ämpäri',
        ':bucket:'
    ],
    '🔩': [
        'Nut ja Bolt',
        ':nut_and_bolt:',
        'Bolt',
        'Ruuvi',
        ':gray:',
        ':grey:'
    ],
    '🗜️': [
        'Klamppu',
        ':clamp:',
        'Taulukko Vice',
        'WinZip',
        'Pakkaus',
        ':gray:',
        ':grey:'
    ],
    '🔒': [
        'Lukittu',
        ':locked:',
        'Suljettu Lukitus',
        'Padlock'
    ],
    '🔓': [
        'Avattu',
        ':unlocked:',
        'Avaa Padlock',
        'Avaa Lukitus'
    ],
    '🔏': [
        'Lukittu kynillä',
        ':locked_with_pen:',
        'Lukitse Ja Kynä',
        'Lukitse Lähdekynä Kanssa',
        'Lukitse mustekynällä'
    ],
    '🔐': [
        'Lukittu avaimella',
        ':locked_with_key:',
        'Suljettu lukitus avaimella'
    ],
    '🗡️': [
        'Dagger',
        ':dagger:',
        'Veitsi Aseen',
        ':gray:',
        ':grey:'
    ],
    '⚔️': [
        'Ristetyt Miekat',
        ':crossed_swords:',
        ':gray:',
        ':grey:'
    ],
    '🔫': [
        'Pistol',
        ':pistol:',
        'Gun',
        'Revolveri',
        'Squirt Gun',
        'Veden Aseet',
        'Veden Pistooli'
    ],
    '🧰': [
        'Työkalupakki',
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
        'Veren Lahjoitus',
        'Veren Testaus',
        'Neula',
        'Rokotus',
        'veri',
        'sairas',
        'ill'
    ],
    '🧬': [
        'DNA',
        ':dna:',
        'Dna Double Helix'
    ],
    '🧪': [
        'Testaa Putki',
        ':test_tube:',
        ':green:'
    ],
    '🛏️': [
        'Sänky',
        ':bed:',
        'Makuuhuone'
    ],
    '🛋️': [
        'Kupongi ja lamppu',
        ':couch_and_lamp:',
        'Lounge',
        'Settee',
        'Sohva'
    ],
    '🪑': [
        'Tuoli',
        ':chair:'
    ],
    '🚪': [
        'Ovi',
        ':door:',
        'Oviaukko',
        'Edessä Ovi'
    ],
    '🪟': [
        'Ikkuna',
        ':window:'
    ],
    '🪜': [
        'Tikkaat',
        ':ladder:'
    ],
    '🪞': [
        'Peilaa',
        ':mirror:'
    ],
    '🚽': [
        'WC',
        ':toilet:',
        'Kylpyhuone',
        'Loo',
        'Restroom',
        'WC',
        ':white:'
    ],
    '🚿': [
        'Suihku',
        ':shower:',
        'Suihkun Päähaara',
        ':shower:'
    ],
    '🛁': [
        'Kylpyamme,',
        ':bathtub:',
        'Kupla Kylpy',
        ':shower:'
    ],
    '🧴': [
        'Lotion Bottle',
        ':location_bottle:'
    ],
    '🧷': [
        'Turvallinen PIN-koodi',
        ':safety_pin:',
        ':gray:',
        ':grey:'
    ],
    '🧺': [
        'Kori',
        ':basket:',
        ':brown:'
    ],
    '🧻': [
        'Paperin asema',
        ':roll_of_paper:',
        'WC-paperi',
        ':white:'
    ],
    '🧼': [
        'Saippuan baari',
        ':bar_of_soap:',
        'Tidy',
        'Clean',
        'Scrub'
    ],
    '🧽': [
        'Sieni',
        ':sponge:',
        ':yellow:'
    ],
    '🧯': [
        'Palonsammutin',
        ':fire_extinguisher:',
        ':red:'
    ],
    '🚬': [
        'Savuke',
        ':cigarette:',
        'Savun Symboli'
    ],
    '⚰️': [
        'Kahvi',
        ':coffin:',
        'Casket',
        'Hautajaiset',
        ':brown:'
    ],
    '⚱️': [
        'Hautajaiset Urn',
        ':funeral_urn:',
        'Maljakko'
    ],
    '🛡️': [
        'Kilpi',
        ':shield:'
    ],
    '⚙️': [
        'Vaihde',
        ':gear:',
        'Asetukset',
        'Valinnat',
        ':gray:',
        ':grey:'
    ],
    '⚖️': [
        'Saldon Mittakaava',
        ':balance_scale:',
        'Oikeusasioiden laajuus'
    ],
    '⛓️': [
        'Ketjut',
        ':chains:'
    ],
    '🔗': [
        'Linkki',
        ':link:',
        'Ketju',
        'Hyperlinkki',
        'Linkitetty Ketju',
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
        'Pääkallo',
        ':skull:',
        'Kuolema',
        'Harmaa Pääkallo',
        'Luuranko',
        ':white:'
    ],
    '☠️': [
        'Kallo ja ristiluut',
        ':skull_and_crossbones:',
        ':white:'
    ],
    '🎡': [
        'Ferris Wheel',
        ':ferris_wheel:',
        'Iso Pyörä',
        'Fairgroundl',
        'Havaintopyörä'
    ],
    '⛽': [
        'Polttoaineen Pumppu',
        'polttoaine_pumppu:',
        'Öljy',
        'Bensiini',
        'Kaasu',
        ':red:'
    ],
    '🚨': [
        'Poliisiautot Kehittyvä Valo',
        ':rotating_light:',
        ':police_police_car:',
        'Hätävalo',
        'Vilkkuva Vaalea',
        'Siren',
        ':red:'
    ],
    '🚥': [
        'Vaakasuora Liikenne Valo',
        ':horizontal_traffic_light:',
        ':green:',
        ':red:',
        ':yellow:',
        ':orange:'
    ],
    '🚦': [
        'Pystysuora Liikennettä Koskeva Valo',
        ':vertical_traffic_light:',
        ':green:',
        ':red:',
        ':yellow:',
        ':orange:'
    ],
    '⚓': [
        'Admiralty Kuvio Ankkuri',
        ':anchor:',
        'Kalastaja'
    ],
    '🚧': [
        'Rakentamisen Allekirjoitus',
        ':construction_sign:',
        'Musta Ja Keltainen Raidallinen Kyltti',
        ':yellow:',
        ':black:'
    ],
    '🪂': [
        'Parachute',
        ':parachute:'
    ],
    '💺': [
        'Istuin',
        ':seat:',
        'Bussin Lentokone Junan Lentokone'
    ],
    '🪐': [
        'Saturnus',
        ':saturn:'
    ],
    '🎆': [
        'Ilotulitus',
        ':fireworks:',
        'Räjähdys'
    ],
    '🎇': [
        'Senko Hanabi',
        ':senko_hanabi:',
        'Ilotulitus Sparkler'
    ],
    '💷': [
        'Pound Banknote',
        ':pound:',
        ':pound_banknote:',
        '20 £ Huomautus',
        'Kaksikymmentä Quid-muistiota',
        'Seteli, jossa on punta',
        ':purple:',
        'Money'
    ],
    '💶': [
        'Euro Banknote',
        ':euro:',
        ':euro_banknote:',
        '100 € Muistiinpano',
        'Seteli, jossa on Euro Sign',
        ':blue:',
        'Money'
    ],
    '💵': [
        'Dollari Banknote',
        ':dollar:',
        ':dollar_banknote:',
        '$1 Huomautus',
        'Seteli, jossa on dollarimerkki',
        'Dollarin Lasku',
        'American Dollari',
        ':green:',
        'Money'
    ],
    '💴': [
        'Yen Banknote',
        ':yen:',
        ':yen_banknote:',
        '¼ 1000 Huomautus',
        'Jeni Huomautus',
        'Seteli, jossa on Yen Sign',
        ':yellow:',
        'Money'
    ],
    '⛺': [
        'Teltta',
        ':camping_tent:'
    ],
    '⛲': [
        'Suihkulähde',
        ':fountain:',
        'Veden Ominaisuus',
        'Veden Suihku',
        'Puisto'
    ],
    '💰': [
        'Raha Pussi',
        ':money_bag:',
        'Moneybags',
        'Rikas',
        '$'
    ],
    '💸': [
        'Raha siipeillä',
        ':money_with_wings:',
        'Lentävä Raha',
        ' Menettää Rahaa'
    ],
    '🏷️': [
        'Tunnisteen Tagi',
        ':label_tag:'
    ],
    '🔖': [
        'Kirjanmerkki',
        ':bookmark:',
        'Hinnan Tunniste',
        'Tunniste'
    ],
    '📑': [
        'Lisää Välilehdet Kirjanmerkkeihin',
        ':bookmark_tabs:',
        ':white:'
    ],
    '📯': [
        'Postinumero',
        ':postal_horn:',
        'Bugle',
        'Ranskan Sarvi'
    ],
    '🪁': [
        'Kite',
        ':kite:',
        ':purple:'
    ],
    '🪀': [
        'Jo-Yo',
        ':yo_yo:',
        ':yo-yo:'
    ],
    '🎊': [
        'Confetti Ball',
        ':confetti_ball:',
        'Confetti'
    ],
    '🎉': [
        'Puolueen Popperi',
        ':party_popper:',
        'Juhla',
        'Juhlahattu'
    ],
    '🎈': [
        'Ilmapallo',
        ':balloon:',
        'Juhlat',
        'Punainen Ilmapallo',
        ':red:'
    ],
    '🌡️': [
        'Lämpömittari',
        ':thermometer:',
        'Kuuma Sää',
        'Lämpötila',
        ':red:'
    ],
    '🛢️': [
        'Öljyä Rumpu',
        ':oil_drum:'
    ],
    '💣': [
        'Pommi',
        ':bomb:',
        'puomi'
    ],
    '🔪': [
        'Keittiö Veitsi',
        ':kitchen_knife:',
        'Veitsi',
        'Butchers Veitsi',
        'Hocho'
    ],
    '🏺': [
        'Amphora',
        ':amphora:',
        'Purkki',
        'Maljakko'
    ],
    '🗺️': [
        'Maailman Kartta',
        ':world_map:'
    ],
    '🎼': [
        'Musikaalinen Pisteet',
        ':musical_score:',
        'Sheet Musiikki',
        'Treble Clef'
    ],
    '🎬': [
        'Tappajan Lauta',
        ':clapper_board:',
        'Leikkaa',
        'Toiminto',
        'Johtaja',
        'Elokuvaliuske (filmi)'
    ],
    '🎻': [
        'Violiini',
        ':violin:',
        'Jousikvartetti',
        'Maailmat Pienin Violiini'
    ],
    '🎺': [
        'Trumpetti',
        ':trumpet:',
        'Sarvi',
        'Jazz'
    ],
    '🎸': [
        'Kitara',
        ':guitar:',
        'Akustinen Kitara',
        'Basso Kitara',
        'Sähkökitara'
    ],
    '🎷': [
        'Saksofoni',
        ':saxophone:',
        'Jazz',
        'Sax'
    ],
    '🥁': [
        'Rumpu',
        ':drum:',
        'Rumpuja ja rumpuja'
    ],
    '🎹': [
        'Piano',
        ':piano:',
        'Musikaalinen Näppäimistö',
        ':white:',
        ':black:'
    ],
    '🪕': [
        'Banjo',
        ':banjo:'
    ],
    '🪗': [
        'Haitari',
        ':accordion:'
    ],
    '🪘': [
        'Pitkä Rumpu',
        ':long_drum:'
    ],
    '🎨': [
        'Taiteilija Paletti',
        ':artist_palette:',
        'Taide',
        'Maalaus'
    ],
    '🧩': [
        'Pulmapala',
        ':puzzle_piece:',
        'Palapelipala Palapelipala',
        ':green:'
    ],
    '🎲': [
        'Peli Die',
        ':game_die:',
        'Dice',
        ':white:'
    ],
    '🎭': [
        'Esittäminen Taide',
        'performing_arts',
        'Teatteri',
        'Teatteri',
        'Draama Maskit',
        'Kreikkalainen Teatterin Maskit',
        'Tragedy and Comedy Masks',
        'Venetsia'
    ],
    '🔍': [
        'Suurennuslasi Kallistettu Vasemmalle',
        ':mag:',
        ':magnifying_glass_tilted_left:',
        'Magnifier',
        'Etsi Kuvake',
        'Vasemmanpuoleinen Suurennuslasi',
        'Etsi',
        ':transparent:'
    ],
    '🔎': [
        'Suurennuslasi Kallistettu Oikealle',
        ':mag_right:',
        ':magnifying_glass_tilted_right:',
        'Magnifier',
        'Etsi Kuvake',
        'Oikea-Pisteen Suurennuslasi',
        'Etsi',
        ':transparent:'
    ],
    '⌛': [
        'Hourglass Valmis',
        ':hourglass:',
        ':hourglass_done:',
        'Hourglass',
        'Time',
        'Egg timer',
        'Empty',
        'Ended',
        'Finished',
        'Sand Clock'
    ],
    '⏳': [
        'Tuntilasi Ei Valmis',
        ':hourglass_flowing_sand:',
        ':hourglass_not_done:',
        'Hourglass kanssa virtaava hiekka',
        'Busy',
        'Time',
        'Egg timer',
        'Flowing',
        'Sand Clock'
    ],
    '🕐': [
        'Yksi Kello',
        ':clock1:',
        ':one_oclock:',
        'Kello Kasvot Yksi Kello',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕜': [
        'Kello Kasvot Kolmekymmentä',
        ':clock130:',
        ':one_thirty:',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕑': [
        'Kaksi OKelloa',
        ':clock2:',
        ':two_oclock:',
        'Kello Kasvot Kaksi OKello',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕝': [
        'Kello Kasvot Kaksi-kolmekymmentä',
        ':clock230:',
        ':two_thirty:',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕒': [
        'Kolme OClock',
        ':clock3:',
        ':three_oclock:',
        'Kello Kasvot Kolme OKello',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕞': [
        'Kello Kasvot Kolme-kolmekymmentä',
        ':clock330:',
        ':three_thirty:',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕓': [
        'Neljä OClock',
        ':clock4:',
        ':four_oclock:',
        'Kello Kasvot Neljä OKello',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕟': [
        'Kello Kasvot Neljä-kolmekymmentä',
        ':clock430:',
        ':four_thirty:',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕔': [
        'Viisi OKelloa',
        ':clock5:',
        ':five_oclock:',
        'Kello Kasvot Viisi OKello',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕠': [
        'Kello Kasvot Viisi-kolmekymmentä',
        ':clock530:',
        ':five_thirty:',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕕': [
        'Kuusi OKello',
        ':clock6:',
        ':size_oclock:',
        'Kello Kasvot Kuusi OClock',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕡': [
        'Kello Kasvot Kuusi Kolmaskymmenes',
        ':clock630:',
        ':six_thirty:',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕖': [
        'Seitsemän OClock',
        ':clock7:',
        ':seven_oclock:',
        'Kello Kasvot Seitsemän OClock',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕢': [
        'Kello Kasvot Seitsemän-kolmekymmentä',
        ':clock730:',
        ':sever_thirty:',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕗': [
        'Kahdeksan Kello',
        ':clock8:',
        ':eight_oclock:',
        'Kello Kasvot Kahdeksan Kello',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕣': [
        'Kello Kasvot Kahdeksan–kolmekymmentä',
        ':clock830:',
        ':eight_thirty:',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕘': [
        'Yhdeksän OClock',
        ':clock9:',
        ':nine_clock:',
        'Kello Kasvot Yhdeksän OClock',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕤': [
        'Kello Kasvot Yhdeksän-kolmekymmentä',
        ':clock930:',
        ':nine_thirty:',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕙': [
        'Kymmenen OKello',
        ':clock10:',
        ':ten_oclock:',
        'Kello Kymmenen Kasvoa Kello',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕥': [
        'Kello Kasvot Kymmenen Kolmekymmentä',
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
        'Kello Kasvot Yksin OKello',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕦': [
        'Kello Kasvot Eleven-kolmekymmentä',
        ':clock1130:',
        ':eleven_thirty:',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕛': [
        'Kaksitoista OKello',
        ':clock12:',
        ':twelve_oclock:',
        'Kello Kasvot Kaksitoista OKello',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕧': [
        'Kello Kasvot Kaksoiskolmekymmentä',
        ':clock1230:',
        ':twelve_thirty:',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '♨️': [
        'Kuumat Lähteet',
        ':hot_springs:',
        'Onsen',
        'Höyry',
        ':red:'
    ],
    '💈': [
        'Kuoripavut (silvityt)',
        ':barber_pole:',
        'Barber Kauppa',
        'Barbers Stripes',
        'Kampaamo',
        ':blue:',
        ':red:'
    ],
    '🎪': [
        'Circus Teltta',
        ':circus_tent:',
        'Suuri Ylhäällä',
        'Sirkus'
    ],
    '💢': [
        'Anger Symboli',
        ':anger_symbol:',
        'Viha Allekirjoitus',
        'Vein Pop',
        ':red:'
    ],
    '🗯️': [
        'Oikea Viha Kupla',
        ':right_anger_bubble:',
        ':anger_right:',
        'Zig Zag Bubble',
        'Angry Speech Bubble',
        ':white:'
    ],
    '🗨️': [
        'Vasemman Puheen Kupla',
        ':left_speech_bubble:',
        ':speech_left:'
    ],
    '💊': [
        'Pill',
        ':pill:',
        'Kapseli',
        'Tabletti',
        'Huumausaineet',
        'Sairas',
        'ill',
        ':yellow:',
        ':red:'
    ],
    '🎎': [
        'Nuket',
        ':dolls:',
        'Hinamatsuri',
        'Imperiaaliset Nuket',
        'Japanin Nuket'
    ],
    '🎏': [
        'Carp StreamerComment',
        ':carp_streamer:',
        'Kalojen Lippu',
        'Koinobori',
        'Tuuli Sukat'
    ],
    '🎐': [
        'Tuulikalkki',
        ':wind_chime:',
        'Furin',
        'Pilkkupagelli',
        'Tuulen Äänimerkki'
    ],
    '🎀': [
        'Ribbon Bow',
        ':ribbon_bow:',
        'Vaaleanpunainen Jousi',
        'Jousi',
        ':pink:'
    ],
    '🎁': [
        'Kääritty Lahja',
        ':wrapped_gift:',
        'Syntymäpäivä Lahja',
        'Joulun Lahja',
        'Lahja',
        'Lahja Laatikko',
        'Läsnä',
        'Wrapped Present'
    ],
    '🎫': [
        'Tukipyyntö',
        ':ticket:',
        'Tukipyynnön Nuppi',
        'Maailman Kiertomatka Lippu'
    ],
    '🃏': [
        'Jokeri',
        ':joker:',
        'Joker-kortti',
        'Pelikortin Musta Jokeri'
    ],
    '💡': [
        'Vaalea Kupu',
        ':light_bulb:',
        'Idea',
        'Sähköinen Kevyt Kupu'
    ],
    '🔦': [
        'Taskulamppu',
        ':flashlight:',
        'Lamppu',
        'Sähköinen Lamppu'
    ],
    '🏮': [
        'Punainen Paperi Lyhty',
        ':izakaya_lantern:',
        ':lantern:',
        ':red_paper_lantern:',
        'Aasian Lyhty',
        'Japanilainen Lyhty',
        'Punainen Lyhty',
        'Izakaja Lyhty',
        ':red:'
    ],
    '📦': [
        'Paketti',
        ':package:',
        'Laatikko',
        'Paketti',
        ':brown:'
    ],
    '📇': [
        'Indeksoi Kortti',
        ':card_index:',
        'Rolodeksi',
        'Järjestelmän Kortti',
        'Kortin Indeksi'
    ],
    '🕳️': [
        'Reikä',
        ':hole:',
        ':black:'
    ],
    '👁️‍🗨️': [
        'MINÄ OLEN Todistus',
        ':eye_in_speech_bubble:',
        ':eye_speech_bubble:',
        ':eye-in-speech-bubble:',
        'Silmä puhetta Bubble'
    ],
    '⚜️': [
        'Fleur-de-lis',
        ':fleur_de_lis:',
        'Scoutit',
        'New Orleans Saints'
    ],
    '⚗️': [
        'Alembic',
        ':alembic:'
    ],
    '🕯️': [
        'Kynttilä',
        ':candle:',
        ':white:'
    ],
    '🖼️': [
        'Kehystetty Kuva',
        ':framed_picture:',
        'Maalaus',
        'Kuvan Kehys',
        'Kehys kuvan kanssa'
    ],
    '🛍️': [
        'Ostoskassit',
        ':shopping_bags:'
    ],
    '🛒': [
        'Ostoskori',
        ':shopping_cart:',
        'Ostosvaunu',
        ':shopping_trolley:',
        ':gray:',
        ':grey:',
        'Market'
    ],
    '🎟️': [
        'Pääsylippuja',
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
        'Kuitti',
        ':receipt:',
        ':white:',
        'Bill'
    ],
    '🧮': [
        'Abacus',
        ':abacus:'
    ],
    '🧫': [
        'Petri Ruoka',
        ':petri_dish:'
    ],
    '🧹': [
        'Lumi',
        ':broom:',
        'Siveli',
        'Pyyhkäise',
        ':yellow:',
        'Tidy',
        'Clean'
    ],
    '🎰': [
        'Paikka Kone',
        ':slot_machine:',
        'Kasino',
        'Hedelmäkone',
        'Uhkapeli',
        'Pokeri Kone'
    ],
    '🦽': [
        'Manuaalinen Pyörätuoli',
        ':manual_wheelchair:',
        ':wheelchair:',
        'invalid',
        'disability',
        'accessibility',
        'mobility'
    ],
    '🦼': [
        'Moottoroitu Pyörätuoli',
        ':motorized_wheelchair:',
        ':wheelchair:',
        'invalid',
        'disability',
        'accessibility',
        'mobility'
    ],
    '🪔': [
        'Diya Lamppu',
        ':diya_lamp:'
    ],
    '🦯': [
        'White Cane',
        ':whie_cane:'
    ],
    '🩸': [
        'Veren pudotus',
        ':drop_of_blood:',
        ':red:'
    ],
    '🩹': [
        'Liimaa Sandage',
        ':adhesive_bandage:'
    ],
    '🩺': [
        'Stetoskooppi',
        ':stethoscope:'
    ],
    '🪶': [
        'Sulka',
        ':feather:',
        'Animal'
    ],
    '🪤': [
        'Hiiren Ansa',
        ':mouse_trap:'
    ],
    '🫖': [
        'Teapot',
        ':teapot:'
    ],
    '🪨': [
        'Rock',
        ':rock:',
        ':gray:',
        ':grey:'
    ],
    '🪵': [
        'Puu',
        ':wood:',
        ':brown:'
    ],
    '🪄': [
        'Magic Wand',
        ':magin_wand:'
    ],
    '🔮': [
        'Kristallin Pallo',
        ':crystal_ball:',
        'Clairvoyant',
        'Fortune Teller',
        'Psyykkinen',
        'Violetti Kristalli',
        ':purple:'
    ],
    '🪅': [
        'Tynttiäata',
        ':pinata:',
        ':piñata:'
    ],
    '🪆': [
        'Nestävät Nuket',
        ':nesting_dolls:',
        'Matryoshka'
    ],
    '🪡': [
        'Ompelulanka',
        ':swing_needle:'
    ],
    '🪢': [
        'Solmu',
        ':knot:',
        ':red:',
        ':blue:'
    ],
    '🪙': [
        'Kolikko',
        ':coin:'
    ],
    '🪃': [
        'Boomerang',
        ':boomerang:',
        ':brown:'
    ],
    '🪥': [
        'Hammasharja',
        ':toothbrush:'
    ],
    '🪦': [
        'Päänkivi',
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
        'Purkki',
        ':jar:',
        ':transparent:'
    ],
    '🛞': [
        'Pyörä',
        ':wheel:',
        'Ajoneuvot',
        'Autot',
        ':black:'
    ],
    '🛟': [
        'Soittoääni',
        ':ring_buoy:',
        'Elämänsuojelija',
        'Elämän Rengas',
        'Veneet',
        'Turvallisuus',
        'Vesi',
        'Elämäntapa',
        ':red:',
        ':white:'
    ],
    '🪬': [
        'Hamsa',
        ':hamsa:',
        'Islam',
        'Juutalaisuus',
        'Buddhism',
        'Kristinusko',
        'Uskonnot',
        'Onnea',
        'Suojaus',
        'Ohjeet',
        'Feminiininen Teho',
        'Usko',
        ':blue:'
    ],
    '🪩': [
        'Peili Pallo',
        ':mirror_ball:',
        'Discon Pallo'
    ],
    '🪫': [
        'Akku Matalassa',
        ':low_battery:',
        ':red:',
        'Energia',
        'Punainen',
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
        'Kuplat',
        ':bubbles:',
        'Saippua Suolat',
        'Hiilto',
        'Tarkkaileva Persoonallisuus',
        ':transparent:'
    ],
    '🪪': [
        'Tunnistuskortti',
        ':identification_card:',
        'Identiteetti',
        'Passi',
        'ID',
        'Country',
        'Security',
        'Travel'
    ],
    '🧿': [
        'Nazar Amulet',
        ':nazar_amulet:',
        'Paha Silmä',
        ':blue:'
    ],
    '🧸': [
        'Teddy Karhu',
        ':teddy_bear:',
        'Lelu',
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