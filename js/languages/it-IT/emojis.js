// descriptions took from Emojipedia.org
lang = 'it';
//use i18n language code of the browser, more details: https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/i18n/LanguageCode
titles_language[lang] = {
    '🔍': 'Risultati',
    '🕒': 'Emoji più usate',
    '😀': 'Smiley',
    '🙋': 'Persone',
    '🦊': 'Animali',
    '🅰️': 'Simboli',
    '🍎': 'Cibo e bevande',
    '🏳️‍🌈': 'Bandiere',
    '🏊': 'Sport',
    '✈️': 'Viaggi e luoghi',
    '🖱️': 'Tecnologie e ufficio',
    '👗': 'Vestiti e accessori',
    '🖐️': 'Mani e parti del corpo',
    '🛎️': 'Altro'
};
emojis_language[lang] = [];
/*search*/
emojis_language[lang][0] = {};
/*smileys*/
emojis_language[lang][2] = {
    '😀': [
        'Faccia sorridente',
        ':grinning:',
        ':grinning_face:',
        '::):',
        'Faccia felice',
        'Smiley sorridente'
    ],
    '😃': [
        'Faccia sorridente con grandi occhi',
        ':smiley:',
        ':grinning_face_with_big_eyes:',
        '::D:',
        'Faccia felice',
        'Faccia smiley',
        'Faccia che sorride con bocca aperta'
    ],
    '😄': [
        'Faccia sorridente con occhi sorridenti',
        ':smile:',
        ':grinning_face_with_smiling_eyes:',
        'Faccia felice',
        'Faccia smiley',
        'Faccia sorridente con occhi strabici',
        'Faccia sorridente con bocca aperta e occhi sorridenti'
    ],
    '😁': [
        'Faccia raggiunte con occhi sorridenti',
        ':grin:',
        ':beaming_face_with_smiling_eyes:',
        'Faccia sorridente con occhi sorridenti'
    ],
    '😆': [
        'Faccia sorridente strabica',
        ':grinning_squinting_face:',
        ':xD:',
        ':><:',
        'Grande sorriso',
        'Sorriso occhi chiusi',
        'Risata',
        'Faccia sorridente con occhi fermamente chiusi',
        'Faccia sorridente con la bocca aperta e gli occhi strettamente chiusi'
    ],
    '😅': [
        'Grinning Faccia con sudore',
        ':happy_sweat:',
        'Esercizio',
        'Sudore felice',
        'Grinning Faccia con Squinting Occhi e sudore goccia',
        'Faccia sorridente con bocca aperta e sudore freddo'
    ],
    '🤣': [
        'ROFL',
        ':rofl:',
        'Rotolando sul pavimento dalle risate'
    ],
    '😂': [
        'Faccia con le lacrime di gioia',
        ':lol:',
        'Risata',
        'Pianto Di Risate',
        'Lacrime Risate',
        'LOL'
    ],
    '🙂': [
        'Faccia Poco Sorridente',
        ':smile:',
        '::):',
        'Leggermente Felice',
        'Questo È Buono'
    ],
    '🙃': [
        'Viso Superiore',
        ':upside-down_face:',
        ':upside_down_face:',
        'Sarcasm',
        'Silly',
        'Faccia Superiore Giù'
    ],
    '😉': [
        'Viso Winking',
        ':winking:',
        ':;):',
        'Wink',
        'Faccia Di Wink',
        'Viso Winky'
    ],
    '😊': [
        'Faccia sorridente con occhi sorridenti',
        ':smiling_face:',
        ':^^:',
        'Faccia felice',
        'Sorriso',
        'Smiley sorridente'
    ],
    '😇': [
        'Faccia sorridente con Halo',
        ':smiling_angel:',
        'Angelo',
        'Halo'
    ],
    '🥰': [
        'Faccia sorridente con i cuori',
        ':smiling_hearts:',
        'In Amore Faccia',
        'Faccia sorridente con occhi sorridenti e tre cuori'
    ],
    '😍': [
        'Faccia sorridente con gli occhi cuori',
        'amore',
        ':smiling_heart-eyes:',
        ':smiling_heart_eyes:',
        ':*.*:',
        'Occhi Di Cuore',
        'Viso Cuore',
        'Faccia sorridente con occhi a forma di cuore'
    ],
    '🤩': [
        'Star-Struck',
        ':star_eyes:',
        'Eccitato',
        'Occhi Stella',
        'Eyed Stellato',
        'Viso Wow',
        'Faccia Con Occhi Stellati',
        'Grinning Faccia con Occhi Stella'
    ],
    '😘': [
        'Faccia che soffia un bacio',
        'amore',
        ':kissing_face:',
        '::*:',
        '::-*:',
        'Soffiare Un Bacio',
        'Bacio Soffiante',
        'Baciare',
        'Lanciare un bacio faccia'
    ],
    '😗': [
        'Faccia Di Bacio',
        'bacio',
        ':kissing_face:',
        '::*:',
        '::-*:',
        'Volto Anatra',
        'Kissy Face',
        'Whistling'
    ],
    '☺️': [
        'Faccia Sorridente',
        ':smiling_face:',
        'Faccia felice',
        'Faccia smiley',
        'Sorridente',
        'Viso Sorridente Bianco'
    ],
    '😚': [
        'Bacio faccia con occhi chiusi',
        ':kissing_face:',
        'Bacio Faccia',
        'Kissy Face'
    ],
    '😙': [
        'Bacio faccia con occhi sorridenti',
        ':kissing_face:',
        'Bacio Faccia',
        'Kissy',
        'Fischia',
        'Whistling'
    ],
    '😋': [
        'Face Savoring Food',
        ':savoring_face:',
        'Goofy',
        'Affamato',
        'Labbra Facciali Sorridenti',
        'Faccia Savouring Delicious Food',
        'Yum Yum'
    ],
    '😛': [
        'Faccia con la lingua',
        ':tongue_face:',
        '::P:',
        'Sfacciato',
        'Faccia Della Lingua',
        'Tongue-Out',
        'Faccia con la lingua bloccata'
    ],
    '😜': [
        'Occhiolare viso con la lingua',
        ':winking:',
        ':;P:',
        'Pazzo',
        'Faccia Pazzo',
        'Faccia Winking Con Lingua Bloccata-Fuori',
        'Faccia con Stuck-Out lingua e Occhio Winking'
    ],
    '🤪': [
        'Zany Face',
        ':crazy_face:',
        'Occhi Pazzo',
        'Eccitato',
        'Selvatico',
        'Goofy Face',
        'Grinning Faccia con un grande e un piccolo occhio'
    ],
    '😝': [
        'Squinting Faccia con lingua',
        ':tongue_face:',
        ':xP:',
        'Lingua Fuori',
        'Faccia con la lingua bloccata e gli occhi strettamente chiusi',
        'Faccia con la lingua bloccata e gli occhi strettamente chiusi'
    ],
    '🤑': [
        'Faccia Money-Mouth',
        ':money-mouth_face:',
        ':money_mouth_face:',
        '::$:',
        'Occhi Di Segno Dollari',
        'Volto Dei Soldi',
        'Ricco'
    ],
    '🤗': [
        'Faccia Abbronzante',
        ':hugging_face:',
        'Abbraccio',
        'Abbracciamento',
        'Abbracci',
        'Faccia Felice Con Mani Abbraccianti'
    ],
    '🤭': [
        'Oops',
        ':oops:',
        'Faccia con la mano sopra la bocca',
        'Faccia sorridente con occhi sorridenti e copertura a mano bocca'
    ],
    '🤫': [
        'Shh',
        ':shushing_face:',
        'Shush',
        'Frantumazione Faccia',
        'Hush',
        'Tranquillo',
        'Silenzio',
        'Silenzioso',
        'Faccia con copertura dito Labbra chiuse'
    ],
    '🤔': [
        'Cosa',
        ':thinking_face:',
        '?',
        'Hmm',
        'Faccia Di Pensiero',
        'Pollice Di Chin',
        'Pensatore',
        'Tonalità Da Lancio'
    ],
    '🤐': [
        'Zip',
        'silenzioso',
        'silenzio',
        ':zip_face:',
        'Viso Zipper-Mouth',
        'Labbra Sigillate',
        'Labbra Sigillate',
        'Zip It',
        'Faccia con una bocca di cerniera'
    ],
    '🤨': [
        'Faccia con sopracciglio alzato',
        ':face_with_raised_eyebrow:',
        'Colbert',
        'La Roccia',
        'Faccia Con Sopracciglio Cresciuto',
        'Faccia con un sopracciglio sollevato'
    ],
    '😐': [
        'Faccia Neutrale',
        ':neutral_face:',
        ':|',
        'Faccia Con Bocca Dritta',
        'Rivestito Dritto'
    ],
    '😑': [
        'Faccia Senza Espressione',
        ':expressionless_face:',
        '-_-',
        'Faccia Con Bocca Dritta',
        'Faccia Dritta'
    ],
    '😶': [
        'Faccia Senza Bocca',
        ':face_without_mouth:',
        'Faccia Vuota',
        'Mouthless',
        'Silenzio',
        'Silenzioso'
    ],
    '😏': [
        'Viso Smirking',
        ':smirking_face:',
        'Flirtare',
        'Faccia Sessuale',
        'Viso Di Smug',
        'Suggestive Smile'
    ],
    '😒': [
        'Viso Inutilizzato',
        ':unamused_face:',
        'Dispettato',
        'Meh',
        'Occhio Laterale',
        'Non Impresso'
    ],
    '🙄': [
        'Faccia con occhi rotolanti',
        ':face_with_rolling_eye:',
        ':eye_roll:',
        'Rotolo Occhi'
    ],
    '😬': [
        'Faccia Di Grimacing',
        ':awkward:',
        'Awkward',
        'Eek',
        'Piede In Montagna',
        'Nervoso',
        'Snapchat Mutual #1 Miglior Amico'
    ],
    '🤥': [
        'Faccia Sdraiata',
        ':lying_face:',
        'Bugiardo',
        'Naso Lungo',
        'Pinocchio'
    ],
    '😌': [
        'Faccia Sollevata',
        ':relieved_face:',
        'Contenuto',
        'Piacere'
    ],
    '😔': [
        'Spiacenti',
        ':sad_face:',
        'Faccia Pensiva',
        'Pensive',
        'Triste',
        'Sadface',
        'Addolorato',
        'Viso Pensivo Triste'
    ],
    '😪': [
        'Faccia Addormentata',
        ':sleepy_face:',
        'Lato',
        'Bolla Di Nodo'
    ],
    '🤤': [
        'Saliva',
        ':saliva_face:',
        'Drooling Face',
        'Drool'
    ],
    '😴': [
        'Viso Dormito',
        ':sleeping_face:',
        ':zzz:',
        'Zzz',
        'Dormire Faccia',
        'Russaggio',
        'Viso ZZZZ'
    ],
    '🥱': [
        'Viso Di Yawning',
        'stanchi',
        ':yawning_face:'
    ],
    '😷': [
        'Faccia con maschera medica',
        'malato',
        'doc',
        ':face_with_medical_mask:',
        'Coronavirus',
        'COVID-19',
        'Faccia Maschera',
        'Maschera Chirurgica',
        'ill'
    ],
    '🤒': [
        'Faccia con termometro',
        ':face_with_thermometer:',
        ':sick:',
        ':ill:',
        'Ill',
        'Malato'
    ],
    '🤕': [
        'Faccia con la fasciatura della testa',
        'ospedale',
        'malato',
        ':face_with_head-bandage:',
        ':face_with_head_bandage:',
        'Testa Fasciata',
        'Goffo',
        'Ferito',
        'ill'
    ],
    '🤢': [
        'Faccia Nauseata',
        'malato',
        ':nauseated_face:',
        'Disgusto',
        'Faccia Verde',
        'Vomit',
        ':green:',
        'ill'
    ],
    '🤮': [
        'Vomito Faccia',
        'malato',
        ':face_vomiting:',
        'Spew',
        'Bleah',
        'Bleurgh',
        'Yuk',
        'Yuck',
        'Ew',
        'Spew',
        'Lanciando Su',
        'Vomit',
        'Faccia con Open Mouth Vomiting',
        'ill'
    ],
    '🤧': [
        'Viso Di starnuti',
        'malato',
        ':sneezing_face:',
        'Gesundheit',
        'ill'
    ],
    '🥵': [
        'Faccia Calda',
        ':hot_face:',
        'Viso Overriscaldato',
        ':red:'
    ],
    '🥶': [
        'Faccia Fredda',
        ':cold_face:',
        'Freddo',
        'Ghiacciato',
        'Faccia Congelante',
        ':blue:'
    ],
    '🥴': [
        'Volto Woozy',
        ':woozy_face:',
        'Viso Ubriaco',
        'Faccia con Occhi Uneven e Bocca Ondata'
    ],
    '😵': [
        'Dizzy Face',
        ':dizzy_face:',
        'Occhi A Croce Faccia',
        'Occhi A Spirale Faccia'
    ],
    '🤯': [
        'Testa Esplosiva',
        'boom',
        ':exploding_head:',
        'Mente Soffiata',
        'Viso scioccato con testa esplosiva'
    ],
    '🤠': [
        'Cappello Cowboy Faccia',
        ':cowboy_hat_face:',
        'Cowboy',
        'Cowboy Faccia',
        'Faccia con Cowboy Cappello'
    ],
    '🥳': [
        'Faccia Partying',
        ':partying_face:',
        'Faccia Del Partito',
        'Faccia con Corno del Partito e Cappello del Partito'
    ],
    '😎': [
        'Faccia sorridente con occhiali da sole',
        ':smiling_face_with_sunglasses:',
        'Freddo',
        'Mutuo Migliori Amici (Snapchat)',
        'Occhiali Da Sole'
    ],
    '🤓': [
        'Faccia Nerd',
        ':nerd_face:',
        'Nerdy'
    ],
    '🧐': [
        'Faccia con Monocle',
        ':face_with_monocle:'
    ],
    '😕': [
        'Faccia Confusa',
        ':confused_face:',
        '::/:',
        '::S:',
        'Nonplussed',
        'Puzzled'
    ],
    '😟': [
        'Faccia Preoccupata',
        ':worried_face:',
        '::(:',
        'Triste',
        'Sadface'
    ],
    '🙁': [
        'Faccia Leggermente Frowning',
        ':slightly_frowning_face:',
        '::(:',
        'Leggermente Triste'
    ],
    '☹️': [
        'Frowning Facce',
        ':frowning_face:',
        '::(:',
        'Megafrown',
        'Volto Di Frowning Bianco'
    ],
    '😮': [
        'Wow',
        ':wow:',
        '::O:',
        'Oh mio!',
        'Faccia con la bocca aperta',
        'Apri Bocca',
        'Viso Sorpreso Con Bocca Aperta'
    ],
    '😯': [
        'Faccia Hushed',
        ':husked_face:',
        '::O:',
        'Sorpresa',
        'Faccia Sorprendente'
    ],
    '😲': [
        'Viso Scioccato',
        ':shocked_face:',
        '::O:',
        'Wow',
        'Volto Stupito',
        'Viso Ubriaco',
        'Faccia Gasping'
    ],
    '😳': [
        'Viso A Vampate',
        ':flushed_face:',
        '::$:',
        'Faccia Arrossente',
        'Imbarrato',
        'Vergogna',
        'Faccia Con Occhi Ampi Aperti'
    ],
    '🥺': [
        'Faccia Pieghevole',
        ':pleading_face:',
        '::(:',
        'Begging',
        'Occhi Lucidi',
        'Simp',
        'Faccia con gli occhi pieghevoli'
    ],
    '😦': [
        'Frowning Faccia con la bocca aperta',
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
        'Spaventato',
        ':scared:',
        ':D::',
        'Faccia Temibile',
        'Sorpreso'
    ],
    '😰': [
        'Volto ansioso con sudore',
        ':anxious_face_with_sweat:',
        'Faccia Blu',
        'Faccia Preoccupata',
        'Faccia Nervosa',
        'Faccia con aperto bocca e sudore freddo'
    ],
    '😥': [
        'Faccia triste ma alleviata',
        ':sad_but_relieved_face:',
        '::(:',
        'Sudore Del Sopracciglio',
        'Viso deluso ma alleviato'
    ],
    '😢': [
        'Faccia Pianto',
        ':crying_face:',
        '::(:',
        'Pianto',
        'Lacrima'
    ],
    '😭': [
        'Volto Pianto Luccicante',
        ':loudly_crying_face:',
        'Bawling',
        'Pianto',
        'Lacrime Tristi',
        'Sobbing'
    ],
    '😱': [
        'Faccia urlando nella paura',
        ':face_screaming_in_fear:',
        'Casa Da Solo',
        'Urlo',
        'Volto Urlante'
    ],
    '😖': [
        'Faccia Confondata',
        ':confounded_face:',
        'Bocca Quivering',
        'Faccia Scrunched'
    ],
    '😣': [
        'Faccia Perseverante',
        ':persevering_face:',
        'Volto Indifeso',
        'Occhi Scrunched'
    ],
    '😞': [
        'Viso Deluso',
        ':disappointed_face:',
        '::(:',
        'Triste',
        'Sadface'
    ],
    '😓': [
        'Viso giù con sudore',
        ':downcast_face_with_sweat:',
        'Lavoro Duro',
        'Viso Dolore Triste',
        'Faccia con sudore freddo'
    ],
    '😩': [
        'Faccia Paura',
        ':weary_face:',
        'Volto Distrottato',
        'Wailing'
    ],
    '😫': [
        'Faccia Stanco',
        ':tired_face:',
        'Esausto',
        'Fed Up',
        'Volto Distrottato'
    ],
    '😤': [
        'Faccia con vapore dal naso',
        ':face_with_steam_from_nose:',
        'Atterraggio delle avversità',
        'Fruttato',
        'Faccia Pazzo',
        'Vapore',
        'Huffing Con Rabbia Faccia'
    ],
    '😡': [
        'Faccia Di Pouting',
        'fuck',
        ':pouting_face:',
        'Faccia Arrabbiata',
        'Grumpy Face',
        'Faccia Pazzo',
        'Volto Rosso',
        ':red:'
    ],
    '😠': [
        'Faccia Arrabbiata',
        ':angry_face:',
        'Arrabbiato',
        'Grumpy Face'
    ],
    '🤬': [
        'Tendenza',
        'fuck',
        ':swearing:',
        '@#$%&!',
        'Faccia con i simboli sulla bocca',
        'Cursing',
        'Cussing',
        'Grawlix',
        'Faccia Con I Simboli Sulla Bocca',
        'Faccia seria con simboli che coprono la bocca',
        ':red:'
    ],
    '🥲': [
        'Faccia sorridente con lacrima',
        ':smiling_face_with_tear:'
    ],
    '😮‍💨': [
        'Espirazione Faccia',
        ':face_exhaling:',
        'Sospiro'
    ],
    '😵‍💫': [
        'Faccia con Occhi a Spirale',
        ':face_with_spiral_eyes:',
        'Dizzy Face'
    ],
    '😶‍🌫️': [
        'Faccia in nuvole',
        'fumo',
        ':face_in_clouds:',
        'Brain Fog',
        'Dimenticata',
        'Foschia'
    ],
    '🥸': [
        'Faccia Travestita',
        ':disguised_face:'
    ],
    '🫠': [
        'Faccia Di Fusione',
        ':melting_face:'
    ],
    '🫢': [
        'Faccia con Occhi Aperti e Mano Sopra Bocca',
        ':face_with_open_eyes_and_hand_over_mouth:'
    ],
    '🫣': [
        'Faccia con Occhio di Pechino',
        ':face_with_peeking_eye:'
    ],
    '🫡': [
        'Viso Di Salutazione',
        ':saluting_face:',
        'Militare',
        'Esercito',
        'RAF',
        'Marina'
    ],
    '🫥': [
        'Linea Punteggiata Faccia',
        ':dotted_line_face:',
        ':transparent:'
    ],
    '🫤': [
        'Faccia con la bocca diagonale',
        ':face_with_diagonal_mouth:'
    ],
    '🥹': [
        'Lacrime Posteriore Del Volto',
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
        'Faccia sorridente con le corna',
        ':smiling_face_with_horns:',
        'Diavolo',
        'Corna Del Diavolo',
        'Diavolo Felice',
        'Diavolo Viola',
        'Diavolo Rosso',
        ':purple:'
    ],
    '👿': [
        'Volto arrabbiato con le corna',
        ':angry_face_with_horns:',
        'Diavolo',
        'Corna Del Diavolo',
        'Diavolo Viola',
        'Goblin Viola',
        'Diavolo Triste',
        'Imp',
        ':purple:'
    ],
    '🤡': [
        'Volto Di Clown',
        ':clown_face:',
        'Pagliaccio Spaventoso',
        'Clown Malvagio',
        'Pagliaccio Spaventoso'
    ],
    '👽': [
        'Alieno',
        ':alien:',
        'ET'
    ],
    '👾': [
        'Mostro Alieno',
        ':alien_monster:',
        'Space Invader',
        'Mostro Di Videogiochi'
    ],
    '🤖': [
        'Robot',
        ':robot:',
        'Faccia Del Robot'
    ],
    '👹': [
        'Ogre',
        ':ogre:',
        'Faccia Maschera',
        'Oni',
        'Mostro Rosso',
        'Giapponese Ogre',
        ':red:'
    ],
    '👻': [
        'Fantasma',
        ':ghost:',
        'Halloween'
    ],
    '🗣️': [
        'Testa Parlante',
        ':speaking_head:',
        'Mansplaining',
        'Grida',
        'Grida',
        'Parlare testa in Silhouette',
        ':blue:'
    ],
    '👤': [
        'Busto in Silhouette',
        ':bust_in_silhouette:',
        'Ombra',
        'Silhouette',
        'Utente',
        'Silhouette di Persona',
        ':blue:'
    ],
    '🫂': [
        'Persone Abbraccianti',
        ':people_hugging:',
        ':blue:'
    ],
    '👥': [
        'Busti in Silhouette',
        ':busts_in_silhouette:',
        'Ombre',
        'Silhouettes',
        'Utenti',
        'Silhouette di due persone',
        ':blue:'
    ]
};
/*people*/
emojis_language[lang][3] = {
    '👶{{skin_tone}}': [
        'Bambino',
        ':baby:',
        'Figlio',
        'Toddler'
    ],
    '🧒{{skin_tone}}': [
        'Figlio',
        ':child:',
        'Genere Bambino Neutro'
    ],
    '👧{{skin_tone}}': [
        'Ragazza',
        ':girl:',
        ':woman:'
    ],
    '🧑{{skin_tone}}': [
        'Persona',
        ':person:',
        'Sesso Adulto Neutro',
        'Adulto',
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
        'Persona: Capelli Rossi',
        ':person_red_hair:',
        'Persona Di Zenzero',
        'Person Redhead',
        'Persona Con Capelli Rossi',
        ':person:'
    ],
    '🧑{{skin_tone}}‍🦱': [
        'Persona: Capelli Ricci',
        ':person_curly_hair:',
        'Persona Con Capelli Ricci',
        ':person:'
    ],
    '🧑{{skin_tone}}‍🦳': [
        'Persona: Capelli Bianchi',
        ':person_white_hair:',
        'Persona Con Capelli Grigi',
        ':person:'
    ],
    '🧑{{skin_tone}}‍🦲': [
        'Persona: Calva',
        ':person_bald:',
        'Persona Senza Capelli',
        ':person:'
    ],
    '👱{{skin_tone}}': [
        'Persona: Capelli Biondi',
        ':person_blond_hair:',
        'Persona Con Capelli Biondi',
        ':person:'
    ],
    '👨{{skin_tone}}': [
        'Uomo',
        ':man:',
        'Maschio',
        'Moustache Uomo',
        ':man:'
    ],
    '🧔{{skin_tone}}‍♂️': [
        'Uomo: Barba',
        ':man_beard:',
        'Barba',
        'Uomo Barbuto',
        'Persona Barbata',
        ':man:'
    ],
    '👨{{skin_tone}}‍🦰': [
        'Uomo: Capelli Rossi',
        ':man_red_hair:',
        'Uomo Di Zenzero',
        'Man Redhead',
        'Uomo Con Capelli Rossi',
        ':man:'
    ],
    '👨{{skin_tone}}‍🦱': [
        'Uomo: Capelli Ricci',
        ':man_curly_hair:',
        'Uomo Con Capelli Ricci',
        ':man:'
    ],
    '👨{{skin_tone}}‍🦳': [
        'Uomo: Capelli Bianchi',
        ':man_white_hair:',
        'Uomo Con Capelli Grigi',
        ':man:'
    ],
    '👨{{skin_tone}}‍🦲': [
        'Uomo: Calvo',
        ':man_bald:',
        'Uomo Senza Capelli',
        ':man:'
    ],
    '👱{{skin_tone}}‍♂️': [
        'Uomo: Capelli Biondi',
        ':man_blond_hair:',
        'Uomo Con Capelli Biondi',
        ':man:'
    ],
    '👩{{skin_tone}}': [
        'Donna',
        ':woman:',
        'Femmina',
        'Signora',
        'Donna Gialla',
        ':woman:'
    ],
    '🧔{{skin_tone}}‍♀️': [
        'Donna: Barba',
        ':woman_beard:',
        'Barba',
        'Donna Barbata',
        ':woman:'
    ],
    '👩{{skin_tone}}‍🦰': [
        'Donna: Capelli Rossi',
        ':woman_red_hair:',
        'Donna Zenzero',
        'Woman Redhead',
        'Donna Con Capelli Rossi',
        ':woman:'
    ],
    '👩{{skin_tone}}‍🦱': [
        'Donna: Capelli Ricci',
        ':woman_curly_hair:',
        'Donna Con Capelli Ricci',
        ':woman:'
    ],
    '👩{{skin_tone}}‍🦳': [
        'Donna: Capelli Bianchi',
        ':woman_white_hair:',
        'Donna Con Capelli Grigi',
        ':woman:'
    ],
    '👩{{skin_tone}}‍🦲': [
        'Donna: Calvo',
        ':woman_bald:',
        'Donna Senza Capelli',
        ':woman:'
    ],
    '👱{{skin_tone}}‍♀️': [
        'Donna: Capelli Biondi',
        ':woman_blond_hair:',
        'Donna Con Capelli Biondi',
        ':woman:'
    ],
    '👴{{skin_tone}}': [
        'Uomo Più Vecchio',
        ':older_man:',
        ':older:',
        'Uomo Anziano',
        'Grandpa',
        'Vecchio Uomo',
        ':man:'
    ],
    '👵{{skin_tone}}': [
        'Donna Anziana',
        ':older_woman:',
        ':older:',
        'Donna Anziana',
        'Nonna',
        'Nanna',
        'Vecchia Signora',
        'Vecchia Donna',
        ':woman:'
    ],
    '🧓{{skin_tone}}': [
        'Persona Anziana',
        ':older_person:',
        ':older:',
        'Sesso Neutro Anziano Adulto',
        ':person:'
    ],
    '👼{{skin_tone}}': [
        'Baby Angel',
        ':baby_angel:',
        'Angelo',
        'Cherub',
        'Cupido',
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
        'Natale Persona',
        ':person:'
    ],
    '🤴{{skin_tone}}': [
        'Principe',
        ':price:',
        ':man:'
    ],
    '👸{{skin_tone}}': [
        'Principessa',
        ':pricess:',
        'Ragazza Bionda',
        'Ragazza Con Corona',
        'Ragazza Tiara',
        ':woman:'
    ],
    '🫅{{skin_tone}}': [
        'Persona con la corona',
        ':person_with_crown:',
        ':person:'
    ],
    '👳{{skin_tone}}‍♂️': [
        'Uomo Indossare Turbano',
        ':man_wearing_turban:',
        ':wearing_turban:',
        'Arabo',
        'Musulmano',
        'Sikh',
        'Turbano',
        ':man:'
    ],
    '👳{{skin_tone}}‍♀️': [
        'Donna Indossare Turbano',
        ':woman_wearing_turban:',
        ':wearing_turban:',
        'Arabo',
        'Musulmano',
        'Sikh',
        'Turbano',
        ':woman:'
    ],
    '👳{{skin_tone}}': [
        'Persona Indossare Turbano',
        ':person_wearing_turban:',
        ':wearing_turban:',
        'Arabo',
        'Musulmano',
        'Sikh',
        'Turbano',
        ':person:'
    ],
    '👲{{skin_tone}}': [
        'Persona Con Cappuccio',
        ':person_with_skullcap:',
        'Uomo Asiatico',
        'Uomo Con Berretto Cinese',
        'Uomo con Gua Pi Mao',
        ':person:'
    ],
    '🧕{{skin_tone}}': [
        'Donna con foulard',
        ':woman_with_headscarf:',
        'Hijab',
        'Persona con foulard',
        ':woman:'
    ],
    '🤵{{skin_tone}}‍♀️': [
        'Uomo in Tuxedo',
        ':man_in_tuxedo:',
        ':tuxedo:',
        'Groom',
        'Uomo In Abito',
        'Matrimonio',
        ':man:'
    ],
    '🤵{{skin_tone}}‍♂️': [
        'Donna a Tuxedo',
        ':woman_in_tuxedo:',
        ':tuxedo:',
        'Groom',
        'Donna In Tuta',
        'Matrimonio',
        ':woman:'
    ],
    '🤵{{skin_tone}}': [
        'Persona a Tuxedo',
        ':person_in_tuxedo:',
        ':tuxedo:',
        'Groom',
        'Persona In Tuta',
        'Matrimonio',
        ':person:'
    ],
    '👰{{skin_tone}}‍♂️': [
        'Uomo con velo',
        ':man_with_veil:',
        ':veil:',
        'Matrimonio',
        'Sposo',
        'Matrimonio',
        ':man:'
    ],
    '👰{{skin_tone}}‍♀️': [
        'Donna con velo',
        ':woman_with_veil:',
        ':veil:',
        'Matrimonio',
        'Sposa',
        'Sposa con velo',
        'Matrimonio',
        ':woman:'
    ],
    '👰{{skin_tone}}': [
        'Persona Con Velo',
        ':person_with_veil:',
        ':veil:',
        'Matrimonio',
        'Matrimonio',
        ':person:'
    ],
    '👨{{skin_tone}}‍🍼': [
        'Uomo Nutrire Bambino',
        ':man_feeding_baby:',
        ':feeding_baby:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🍼': [
        'Donna Nutrire Bambino',
        ':woman_feeding_baby:',
        ':feeding_baby:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🍼': [
        'Persona Nutrire Il Bambino',
        ':person_feeding_baby:',
        ':feeding_baby:',
        ':person:'
    ],
    '🥷': [
        'Ninja',
        ':ninja:'
    ],
    '🫃{{skin_tone}}': [
        'Uomo Gravidante',
        ':pregnant_man:',
        ':pregnant:',
        'Gravidanza',
        ':man:'
    ],
    '🤰{{skin_tone}}': [
        'Donna In Gravidanza',
        ':pregnant_woman:',
        ':pregnant:',
        'Gravidanza',
        'Signora In Gravidanza',
        ':woman:'
    ],
    '🫄{{skin_tone}}': [
        'Persona In Gravidanza',
        ':pregnant_person:',
        ':pregnant:',
        'Gravidanza',
        ':person:'
    ],
    '🤱{{skin_tone}}': [
        'Breast-Feeding',
        ':breast-feeding:',
        ':breast_feeding:',
        'Breastfeeding'
    ],
    '🦸{{skin_tone}}‍♂️': [
        'Uomo Supereroe',
        ':man_superhero:',
        ':superhero:',
        ':man:'
    ],
    '🦸{{skin_tone}}‍♀️': [
        'Supereroe Donna',
        ':woman_superhero:',
        ':superhero:',
        ':woman:'
    ],
    '🦸{{skin_tone}}': [
        'Persona Supereroe',
        ':person_superhero:',
        ':superhero:',
        ':person:'
    ],
    '🦹{{skin_tone}}‍♂️': [
        'Uomo Supervillain',
        ':man_supervillain:',
        ':supervillain:',
        ':man:'
    ],
    '🦹{{skin_tone}}‍♀️': [
        'Donna Supervillain',
        ':woman_supervillain:',
        ':supervillain:',
        ':woman:'
    ],
    '🦹{{skin_tone}}': [
        'Persona Supervillain',
        ':person_supervillain:',
        ':supervillain:',
        ':person:'
    ],
    '🧙{{skin_tone}}‍♂️': [
        'Uomo Mago',
        ':man_mage:',
        ':mage:',
        'Sorcerer',
        'Wizard',
        ':man:'
    ],
    '🧙{{skin_tone}}‍♀️': [
        'Mago Donna',
        ':woman_mage:',
        ':mage:',
        'Strega',
        'Strega',
        'Wizard',
        ':woman:'
    ],
    '🧙{{skin_tone}}': [
        'Mago Della Persona',
        ':person_mage:',
        ':mage:',
        'Wizard',
        ':mage:',
        ':person:'
    ],
    '🧚{{skin_tone}}‍♂️': [
        'Fata Uomo',
        ':man_fairy:',
        ':fairy:',
        ':man:'
    ],
    '🧚{{skin_tone}}‍♀️': [
        'Fata Donna',
        ':woman_fairy:',
        ':fairy:',
        ':woman:'
    ],
    '🧚{{skin_tone}}': [
        'Person Fairy',
        ':person_fairy:',
        ':fairy:',
        ':person:'
    ],
    '🧛{{skin_tone}}‍♂️': [
        'Uomo Vampiro',
        ':man_vampire:',
        ':vampire:',
        'Dracula',
        ':man:'
    ],
    '🧛{{skin_tone}}‍♀️': [
        'Vampiro Donna',
        ':woman_vampire:',
        ':vampire:',
        ':woman:'
    ],
    '🧛{{skin_tone}}': [
        'Persona Vampiro',
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
        'Sirena',
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
        'Elfo Uomo',
        ':man_elf:',
        ':elf:',
        ':man:'
    ],
    '🧝{{skin_tone}}‍♀️': [
        'Elfo Donna',
        ':woman_elf:',
        ':elf:',
        ':woman:'
    ],
    '🧝{{skin_tone}}': [
        'Elfo Persona',
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
        'Genere Della Persona',
        ':person_genie:',
        ':genie:',
        ':person:'
    ],
    '🕵️{{skin_tone}}‍♂️': [
        'Detective Uomo',
        ':man_detective:',
        ':detective:',
        'Occhio Privato',
        'Sleuth',
        'Spia',
        'Man Sleuth',
        'Sonno o Spia',
        '007',
        'Ispettore',
        ':man:'
    ],
    '🕵️{{skin_tone}}‍♀️': [
        'Detective Donna',
        ':woman_detective:',
        ':detective:',
        'Occhio Privato',
        'Sleuth',
        'Spia',
        'Sonno Donna',
        'Sonno o Spia',
        '007',
        'Ispettore',
        ':woman:'
    ],
    '🕵{{skin_tone}}': [
        'Detective Personale',
        ':person_detective:',
        ':detective:',
        'Occhio Privato',
        'Sleuth',
        'Spia',
        'Persona Dormita',
        'Sonno o Spia',
        '007',
        'Ispettore',
        ':person:'
    ],
    '💂{{skin_tone}}‍♂️': [
        'Uomo: Guardia',
        ':man_guard:',
        ':guard:',
        'Guardiano Britannico',
        'Guardia Del Piede',
        ':man:'
    ],
    '💂{{skin_tone}}‍♀️': [
        'Donna: Guardia',
        ':woman_guard:',
        ':guard:',
        'Guardiano Britannico',
        'Guardia Del Piede',
        ':woman:'
    ],
    '💂{{skin_tone}}': [
        'Persona: Guardia',
        ':person_guard:',
        ':guard:',
        'Guardiano Britannico',
        'Guardia Del Piede',
        ':person:'
    ],
    '👮{{skin_tone}}‍♂️': [
        'Ufficiale Di Polizia',
        ':man_police_officer:',
        ':police_officer:',
        'Cop',
        'Polizia',
        'Poliziotto',
        ':man:'
    ],
    '👮{{skin_tone}}‍♀️': [
        'Ufficiale Di Polizia Donna',
        ':woman_police_officer:',
        ':police_officer:',
        'Cop',
        'Polizia',
        'Policewoman',
        ':woman:'
    ],
    '👮{{skin_tone}}': [
        'Ufficiale Di Polizia',
        ':person_police_officer:',
        ':police_officer:',
        'Cop',
        'Polizia',
        ':person:'
    ],
    '👨{{skin_tone}}‍🚒': [
        'Fuoco Uomo',
        ':man_firefighter:',
        ':firefighter:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🚒': [
        'Fuoco Donna',
        ':woman_firefighter:',
        ':firefighter:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🚒': [
        'Persona Fuoco',
        ':person_firefighter:',
        ':firefighter:',
        ':person:'
    ],
    '👨{{skin_tone}}‍✈️': [
        'Pilota Uomo',
        ':man_pilot:',
        ':pilot:',
        ':man:'
    ],
    '👩{{skin_tone}}‍✈️': [
        'Pilota Donna',
        ':woman_pilot:',
        ':pilot:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍✈️': [
        'Pilota Persona',
        ':person_pilot:',
        ':pilot:',
        ':person:'
    ],
    '👨{{skin_tone}}‍💻': [
        'Tecnologo Uomo',
        ':man_technologist:',
        ':technologist:',
        'Tecnologo Uomo',
        ':man:'
    ],
    '👩{{skin_tone}}‍💻': [
        'Tecnologo Donna',
        ':woman_technologist:',
        ':technologist:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍💻': [
        'Persona Tecnologa',
        ':person_technologist:',
        ':technologist:',
        ':person:'
    ],
    '👨{{skin_tone}}‍🎤': [
        'Cantante Uomo',
        ':man_singer:',
        ':singer:',
        'Bowie',
        'Aladdin Sane',
        ':man:'
    ],
    '👩{{skin_tone}}‍🎤': [
        'Cantante Donna',
        ':woman_singer:',
        ':singer:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🎤': [
        'Cantante Della Persona',
        ':person_singer:',
        ':singer:',
        ':person:'
    ],
    '👨{{skin_tone}}‍🎨': [
        'Artista Dell\'Uomo',
        ':man_artist:',
        ':artist:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🎨': [
        'Artista Donna',
        ':woman_artist:',
        ':artist:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🎨': [
        'Artista Della Persona',
        ':person_artist:',
        ':artist:',
        ':person:'
    ],
    '👷{{skin_tone}}‍♂️': [
        'Lavoratore Della Costruzione Dell\'Uomo',
        ':man_contruction_worker:',
        ':contruction_worker:',
        ':man:'
    ],
    '👷{{skin_tone}}‍♀️': [
        'Lavoratore Della Costruzione Donna',
        ':woman_contruction_worker:',
        ':contruction_worker:',
        ':woman:'
    ],
    '👷{{skin_tone}}': [
        'Lavoratore Della Costruzione',
        ':person_contruction_worker:',
        ':contruction_worker:',
        ':person:'
    ],
    '👨{{skin_tone}}‍🚀': [
        'Astronauta Uomo',
        ':man_astronaut:',
        ':astronaut:',
        'Uomo Cosmonaut',
        ':man:'
    ],
    '👩{{skin_tone}}‍🚀': [
        'Astronauta Donna',
        ':woman_astronaut:',
        ':astronaut:',
        'Cosmonaut Donna',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🚀': [
        'Persona Astronauta',
        ':person_astronaut:',
        ':astronaut:',
        'Persona Cosmonaut',
        ':person:'
    ],
    '👨{{skin_tone}}‍🔬': [
        'Scienziato Dell\'Uomo',
        ':man_scientist:',
        ':scientist:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🔬': [
        'Scienziato Donna',
        ':woman_scientist:',
        ':scientist:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🔬': [
        'Persona Scienziata',
        ':person_scientist:',
        ':scientist:',
        ':person:'
    ],
    '👨{{skin_tone}}‍💼': [
        'Man Office Worker',
        ':man_office_worker:',
        ':office_worker:',
        'Amministratore Delegato',
        'Imprenditore',
        ':man:'
    ],
    '👩{{skin_tone}}‍💼': [
        'Lavoratore Dell’Ufficio Donna',
        ':woman_office_worker:',
        ':office_worker:',
        'Imprenditore',
        'Amministratore Delegato',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍💼': [
        'Lavoratore Dell\'Ufficio Personale',
        ':person_office_worker:',
        ':office_worker:',
        'Business',
        'Amministratore Delegato',
        ':person:'
    ],
    '👨{{skin_tone}}‍🏭': [
        'Man Factory Worker',
        ':man_factory_worker:',
        ':factory_worker:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🏭': [
        'Lavoratore Della Fabbrica Donna',
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
        'Meccanico Man',
        ':man_mechanic:',
        ':mechanic:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🔧': [
        'Donna Meccanica',
        ':woman_mechanic:',
        ':mechanic:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🔧': [
        'Persona Meccanica',
        ':person_mechanic:',
        ':mechanic:',
        ':person:'
    ],
    '👨{{skin_tone}}‍🍳': [
        'Man Cook',
        ':man_cook:',
        ':cook:',
        'Chef Uomo',
        'Chef Maschio',
        ':man:'
    ],
    '👩{{skin_tone}}‍🍳': [
        'Donna Cuocere',
        ':woman_cook:',
        ':cook:',
        'Chef Donna',
        'Chef Femminile',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🍳': [
        'Person Cook',
        ':person_cook:',
        ':cook:',
        'Chef Personale',
        ':person:'
    ],
    '👨{{skin_tone}}‍🌾': [
        'Uomo Contadino',
        ':man_farmer:',
        ':farmer:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🌾': [
        'Contadino Donna',
        ':woman_farmer:',
        ':farmer:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🌾': [
        'Person Farmer',
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
        'Studente Uomo',
        ':man_student:',
        ':student:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🎓': [
        'Studente Donna',
        ':woman_student:',
        ':student:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🎓': [
        'Studente Persona',
        ':person_student:',
        ':student:',
        ':person:'
    ],
    '👨{{skin_tone}}‍⚕️': [
        'Uomo Operaio Salute',
        ':man_health_worker:',
        ':health_worker:',
        'Dottore Maschio',
        'Infermiera Maschile',
        ':man:'
    ],
    '👩{{skin_tone}}‍⚕️': [
        'Donne Salute',
        ':woman_health_worker:',
        ':health_worker:',
        'Dottore Femminile',
        'Infermiera Femminile',
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
        'uomo inattivo',
        'dunno',
        ':man:'
    ],
    '🤷{{skin_tone}}‍♀️': [
        'Shrugging Donna',
        ':woman_shrugging:',
        ':shrugging:',
        'donna idk',
        'dunno',
        ':woman:'
    ],
    '🤷{{skin_tone}}': [
        'Abbattimento Della Persona',
        ':person_shrugging:',
        ':shrugging:',
        'persona invalida',
        'dunno',
        ':person:'
    ],
    '🤦{{skin_tone}}‍♂️': [
        'Uomo Facepalming',
        ':man_facepalming:',
        ':facepalming:',
        ':man:'
    ],
    '🤦{{skin_tone}}‍♀️': [
        'Facepalming Donna',
        ':woman_facepalming:',
        ':facepalming:',
        ':woman:'
    ],
    '🤦{{skin_tone}}': [
        'Persona Facepalming',
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
        'Person Bowing',
        ':person_bowing:',
        ':bowing:',
        ':person:'
    ],
    '🧏{{skin_tone}}‍♂️': [
        'Uomo Sordo',
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
        'Persona Sorda',
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
        'Donna Che Cresce La Mano',
        ':woman_raising_hand:',
        'Felice Donna Che Cresce Una Mano',
        ':raising_hand:',
        ':woman:'
    ],
    '🙋{{skin_tone}}': [
        'Persona In Mano',
        ':person_raising_hand:',
        'Felice Persona Che Cresce Una Mano',
        ':raising_hand:',
        ':person:'
    ],
    '💁{{skin_tone}}‍♂️': [
        'Mano Di Suggerimento Uomo',
        ':man_tipping_hand:',
        'Informazioni Desk Uomo',
        ':tipping_hand:',
        ':man:'
    ],
    '💁{{skin_tone}}‍♀️': [
        'Mano Di Suggerimento Donna',
        ':woman_tipping_hand:',
        'Informazioni Scrivania Donna',
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
        'Donna Gesturing OK',
        ':woman_gesturing_ok:',
        ':gesturing_ok:',
        ':woman:'
    ],
    '🙆{{skin_tone}}': [
        'Gesto Persona Ok',
        ':person_gesturing_ok:',
        ':gesturing_ok:',
        ':person:'
    ],
    '🙅{{skin_tone}}‍♂️': [
        'Man Gesturing No',
        ':man_gesturing_no:',
        ':gesturing_no:',
        ':man:'
    ],
    '🙅{{skin_tone}}‍♀️': [
        'Donna Gesturing No',
        ':woman_gesturing_no:',
        ':gesturing_no:',
        ':woman:'
    ],
    '🙅{{skin_tone}}': [
        'Persona Gesting No',
        ':person_gesturing_no:',
        ':gesturing_no:',
        ':person:'
    ],
    '🙎{{skin_tone}}‍♂️': [
        'Pouting Uomo',
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
        'Frowning Donna',
        ':woman_frowining:',
        ':frowining:',
        ':woman:'
    ],
    '🙍{{skin_tone}}': [
        'Frowning Della Persona',
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
        'Zombie Persona',
        ':person_zombie:',
        ':zombie:',
        ':person:'
    ],
    '🚶{{skin_tone}}‍♂️': [
        'Man Walking',
        ':man_walking:',
        ':walking:',
        ':man:'
    ],
    '🚶{{skin_tone}}‍♀️': [
        'Camminare Donna',
        ':woman_walking:',
        ':walking:',
        ':woman:'
    ],
    '🚶{{skin_tone}}': [
        'Persona A Camminare',
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
        'Uomo In Stanza',
        ':man_standing:',
        ':standing:',
        ':man:'
    ],
    '🧍{{skin_tone}}‍♀️': [
        'Donna In Piedi',
        ':woman_standing:',
        ':standing:',
        ':woman:'
    ],
    '🧍{{skin_tone}}': [
        'Persona In Corso',
        ':person_standing:',
        ':standing:',
        ':person:'
    ],
    '🧎{{skin_tone}}‍♂️': [
        'L\'Uomo Inginocchiato',
        ':man_kneeling:',
        ':kneeling:',
        ':man:'
    ],
    '🧎{{skin_tone}}‍♀️': [
        'Inginocchiarsi Donna',
        ':woman_kneeling:',
        ':kneeling:',
        ':woman:'
    ],
    '🧎{{skin_tone}}': [
        'Ginocchiera Persona',
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
        'Uomo con canna bianca',
        ':man_with_white_cane:',
        ':white_cane:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🦯': [
        'Donna con canna bianca',
        ':woman_with_white_cane:',
        ':white_cane:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🦯': [
        'Persona con canna bianca',
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
        'Uomo in sedia a rotelle motorizzata',
        ':man_in_motorized_wheelchair:',
        ':motorized_wheelchair:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🦼': [
        'Donna in sedia a rotelle motorizzata',
        ':woman_in_motorized_wheelchair:',
        ':motorized_wheelchair:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🦼': [
        'Persona in sedia a rotelle motorizzata',
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
        'Uomo in sedia a rotelle manuale',
        ':man_manual_wheelchair:',
        ':manual_wheelchair:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🦽': [
        'Donna in sedia a rotelle manuale',
        ':woman_manual_wheelchair:',
        ':manual_wheelchair:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🦽': [
        'Persona in sedia a rotelle manuale',
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
        'Uomini con orecchi da coniglio',
        ':men_with_bunny_hears:',
        ':bunny_ears:',
        ':man:'
    ],
    '👯‍♀️': [
        'Donne con orecchi da coniglio',
        ':women_with_bunny_hears:',
        ':bunny_ears:',
        ':woman:'
    ],
    '👯': [
        'Persone con orecchi da coniglio',
        ':people_with_bunny_hears:',
        ':bunny_ears:',
        ':person:'
    ],
    '🕴️{{skin_tone}}': [
        'Persona in Abito Levitante',
        ':person_in_suit_levitating:',
        'Hovering Man',
        'Ragazzo Rude',
        'Walt Jabsco',
        'Uomo in Business (Abito) Levitante',
        ':person:'
    ],
    '🧖{{skin_tone}}‍♂️': [
        'Man in Steamy Room',
        ':man_in_steamy_room:',
        ':steamy_room:',
        'Uomo in Sauna',
        ':man:'
    ],
    '🧖{{skin_tone}}‍♀️': [
        'Donna in Steamy Room',
        ':woman_in_steamy_room:',
        ':steamy_room:',
        'Donna in Sauna',
        ':woman:'
    ],
    '🧖{{skin_tone}}': [
        'Persona in Steamy Room',
        ':person_in_steamy_room:',
        ':steamy_room:',
        'Persona in Sauna',
        ':person:'
    ],
    '👫{{skin_tone}}': [
        'Mani da donna e uomo',
        ':woman_and_man_holding_hands:',
        ':holding_hands:',
        'Coppia Eterosessuale',
        'Coppia Dritta',
        'Uomo e Donna Holding Mani',
        ':woman:'
    ],
    '👬{{skin_tone}}': [
        'Uomo Holding Mani',
        ':holding_hands:',
        ':men_holding_hands:',
        'Coppia Gay',
        'Due Uomini Holding Mani',
        ':man:'
    ],
    '👭{{skin_tone}}': [
        'Donne In Holding Mani',
        ':holding_hands:',
        ':women_holding_hands:',
        'Coppia Lesbiche',
        'Due Donne Che Holding Mani',
        ':woman:'
    ],
    '🧑‍🤝‍🧑': [
        'Mani Della Gente',
        ':holding_hands:',
        ':people_holding_hands:',
        'Due Persone Holding Mani',
        'Sesso Coppia Inclusiva',
        'Coppia Neutra Di Genere',
        'Sesso Coppia Non conforme',
        ':person:'
    ],
    '🧑‍🧑‍🧒': [
        'Family: Adult, Adult, Child',
        ':family_adult_adult_child:',
        'Family: Person, Person, Child'
    ],
    '👨‍👩‍👦': [
        'Famiglia con Madre, Padre e Figlio',
        ':family_with_mother_father_and_son:',
        'Famiglia: Uomo, Donna, Ragazzo'
    ],
    '👨‍👩‍👧': [
        'Famiglia con madre, padre e figlia',
        ':family_with_mother_father_and_daughter:',
        'Famiglia: Uomo, Donna, Ragazza'
    ],
    '👨‍👨‍👦': [
        'Famiglia con due Padri e Figlio',
        ':family_with_two_fathers_and_son:',
        'Famiglia: Uomo, Maschio, Ragazzo',
        ':man:'
    ],
    '👨‍👨‍👧': [
        'Famiglia con due padri e figlia',
        ':family_with_two_fathers_and_daughter:',
        'Famiglia: Uomo, Maschio, Ragazza',
        ':man:'
    ],
    '👩‍👩‍👦': [
        'Famiglia con due madri e figlio',
        ':family_with_two_mothers_and_son:',
        'Famiglia: Donna, Donna, Ragazzo',
        ':woman:'
    ],
    '👩‍👩‍👧': [
        'Famiglia con due madri e figlia',
        ':family_with_two_mothers_and_daughter:',
        'Famiglia: Donna, Donna, Ragazza',
        ':woman:'
    ],
    '🧑‍🧑‍🧒‍🧒': [
        'Family: Adult, Adult, Child, Child',
        ':family_adult_adult_child_child:',
        'Family: Person, Person, Child, Child'
    ],
    '👨‍👩‍👧‍👦': [
        'Famiglia con Madre, Padre, Figlio e Figlia',
        ':family_with_mother_father_son_and_daughter:',
        'Famiglia: Uomo, Donna, Ragazzo, Ragazzo'
    ],
    '👨‍👩‍👦‍👦': [
        'Famiglia con Madre, Padre e Due Figli',
        ':family_with_mother_father_and_two_sons:',
        'Famiglia: Uomo, Donna, Ragazzo, Ragazzo'
    ],
    '👨‍👩‍👧‍👧': [
        'Famiglia con Madre, Padre e Due Figlie',
        ':family_with_mother_father_and_two_daughters:',
        'Famiglia: Uomo, Donna, Ragazza, Ragazza'
    ],
    '👨‍👨‍👧‍👦': [
        'Famiglia con due Padri, Figlio e Figlia',
        ':family_with_two_fathers_son_and_daughter:',
        'Famiglia: Uomo, Uomo, Ragazzo, Ragazzo',
        ':man:'
    ],
    '👨‍👨‍👦‍👦': [
        'Famiglia con due padri e due figli',
        ':family_with_two_fathers_and_two_sons:',
        'Famiglia: Uomo, Maschio, Ragazzo, Ragazzo',
        ':man:'
    ],
    '👨‍👨‍👧‍👧': [
        'Famiglia con due Padri e due Figlie',
        ':family_with_two_fathers_and_two_daughters:',
        'Famiglia: Uomo, Uomo, Ragazza, Ragazza',
        ':man:'
    ],
    '👩‍👩‍👧‍👦': [
        'Famiglia con due madri, Figlio e figlia',
        ':family_with_two_mothers_son_and_daughter:',
        'Famiglia: Donna, Donna, Ragazza, Ragazzo',
        ':woman:'
    ],
    '👩‍👩‍👦‍👦': [
        'Famiglia con due madri e due figli',
        ':family_with_two_mothers_and_two_sons:',
        'Famiglia: Donna, Donna, Ragazzo, Ragazzo',
        ':woman:'
    ],
    '👩‍👩‍👧‍👧': [
        'Famiglia con due madri e due figlie',
        ':family_with_two_mothers_and_two_daughters:',
        'Famiglia: Donna, Donna, Ragazza, Ragazza',
        ':woman:'
    ],
    '🧑‍🧒': [
        'Family: Adult, Child',
        ':family_adult_child:',
        'Family: Person, Child'
    ],
    '👨‍👦': [
        'Famiglia con Padre e Figlio',
        ':family_with_father_and_son:',
        'Famiglia: Uomo, Ragazzo',
        ':man:'
    ],
    '👨‍👧': [
        'Famiglia con Padre e Figlia',
        ':family_with_father_and_daughter:',
        'Famiglia: Maschio, Ragazza',
        ':man:'
    ],
    '👩‍👧': [
        'Famiglia con Madre e Figlia',
        ':family_with_mother_and_daughter:',
        'Famiglia: Donna, Ragazza',
        ':woman:'
    ],
    '👨‍👧‍👧': [
        'Famiglia con Padre e due Figlie',
        ':family_with_father_and_two_daughters:',
        'Famiglia: Uomo, Ragazza, Ragazza',
        ':man:'
    ],
    '🧑‍🧒‍🧒': [
        'Family: Adult, Child, Child',
        ':family_adult_child_child:',
        'Family: Person, Child, Child'
    ],
    '👨‍👦‍👦': [
        'Famiglia con Padre e Due Figli',
        ':family_with_father_and_two_sons:',
        'Famiglia: Uomo, Ragazzo, Ragazzo',
        ':man:'
    ],
    '👨‍👧‍👦': [
        'Famiglia con Padre, Figlio e Figlia',
        ':family_with_father_son_and_daughter:',
        'Famiglia: Uomo, Ragazzo, Ragazzo',
        ':man:'
    ],
    '👩‍👦': [
        'Famiglia con Madre e Figlio',
        ':family_with_mother_and_son:',
        'Famiglia: Donna, Ragazzo',
        ':woman:'
    ],
    '👩‍👦‍👦': [
        'Famiglia con Madre e Due Figli',
        ':family_with_mother_and_two_sons:',
        'Famiglia: Donna, Ragazzo, Ragazzo',
        ':woman:'
    ],
    '👩‍👧‍👦': [
        'Famiglia con Madre, Figlio e Figlia',
        ':family_with_mother_son_and_daughter:',
        'Famiglia: Donna, Ragazza, Ragazzo',
        ':woman:'
    ],
    '👩‍👧‍👧': [
        'Famiglia con Madre e Due Figlie',
        ':family_with_mother_and_two_daughters:',
        'Famiglia: Donna, Ragazza, Ragazza',
        ':woman:'
    ],
    '💑{{skin_tone}}': [
        'Coppia Con Cuore',
        ':couple_with_heart:',
        'Coppia Innamorata',
        'Coppia Amante',
        'Coppia Neutra Di Genere',
        ':person:'
    ],
    '👩‍❤️‍👨': [
        'Uomo e Donna con Cuore',
        ':man_and_woman_with_heart:',
        'Coppia Innamorata',
        'Coppia Amante',
        'Coppia Con Cuore'
    ],
    '👨‍❤️‍👨': [
        'Due Uomini Con Cuore',
        ':two_men_with_heart:',
        'Coppia con Cuore: Uomo, Uomo',
        ':man:'
    ],
    '👩‍❤️‍👩': [
        'Due Donne Con Cuore',
        ':two_women_with_heart:',
        'Coppia con Cuore: Donna, Donna',
        ':woman:'
    ],
    '💏{{skin_tone}}': [
        'Coppia Bacio',
        ':couple_kissing:',
        'Bacio',
        'Sesso Coppia Neutrale Bacio',
        ':person:'
    ],
    '👩‍❤️‍💋‍👨': [
        'Baciare uomo e donna',
        ':man_and_woman_kissing:'
    ],
    '👨‍❤️‍💋‍👨': [
        'Due Uomini Baciare',
        ':two_men_kissing:',
        'Baciare uomo e uomo',
        ':man:'
    ],
    '👩‍❤️‍💋‍👩': [
        'Due Donne Baciare',
        ':two_women_kissing:',
        'Baciare donna e donna',
        ':woman:'
    ],
    '💆{{skin_tone}}‍♂️': [
        'Uomo Ottenere Massaggio Testa',
        ':man_getting_head_massage:',
        ':getting_head_massage:',
        ':man:'
    ],
    '💆{{skin_tone}}‍♀️': [
        'Donna Ottenere Massaggio Testa',
        ':woman_getting_head_massage:',
        ':getting_head_massage:',
        ':woman:'
    ],
    '💆{{skin_tone}}': [
        'Persona Che Ottenendo Massaggio Della Testa',
        ':person_getting_head_massage:',
        ':getting_head_massage:',
        ':person:'
    ],
    '💇{{skin_tone}}‍♂️': [
        'Uomo Ottenere Tagliateli',
        ':man_getting_haircut:',
        ':getting_haircut:',
        ':man:'
    ],
    '💇{{skin_tone}}‍♀️': [
        'Donna Come Taglio Di Capelli',
        ':woman_getting_haircut:',
        ':getting_haircut:',
        ':woman:'
    ],
    '💇{{skin_tone}}': [
        'Persona Come Tagliare I Capelli',
        ':person_getting_haircut:',
        ':getting_haircut:',
        ':person:'
    ],
    '🛌{{skin_tone}}': [
        'Dormire Alloggio',
        'stanchi',
        ':sleeping_accommodation:',
        'Persona a letto',
        'Persona Che Dorme'
    ],
    '🛀{{skin_tone}}': [
        'Bagno Della Persona',
        'Bagno',
        ':bath:',
        ':person_taking_bath:',
        'Bagno Caldo',
        'Persona che fa un bagno',
        'Bagno',
        'Doccia',
        'Sapone',
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
        'Faccia A Naso Lungo',
        'Maschera Rossa',
        'Tengu',
        'Goblin Giapponese'
    ]
};
/*animals*/
emojis_language[lang][4] = {
    '😺': [
        'Gatto Grinning',
        ':happy_cat:',
        ':smiling_cat:',
        '::):',
        'Gatto Felice',
        'Gatto Sorridente',
        'Faccia Gatto Felice',
        'Gatto sorridente faccia con bocca aperta'
    ],
    '😸': [
        'Gatto Grinning con occhi sorridenti',
        ':grinning_cat:',
        '::D:',
        'Gatto Grinning',
        'Gatto Felice',
        'Grinning Cat Faccia'
    ],
    '😹': [
        'Gatto con lacrime di gioia',
        ':laughing_cat:',
        '::):',
        'Gatto Di Lacrime Felice',
        'Gatto Di Risata'
    ],
    '😻': [
        'Gatto sorridente con Heart-Eyes',
        ':heart_eyes_cat:',
        ':*.*:',
        'Gatto Occhi Di Cuore',
        'Gatto Amante',
        'Faccia Gatto sorridente con occhi a forma di cuore'
    ],
    '😼': [
        'Gatto con sorriso Wry',
        ':cat_with_wry_smile:',
        'Gatto Smirking',
        'Smirking Gat Face',
        'Cat Faccia con il sorriso Wry'
    ],
    '😽': [
        'Gatto Del Bacio',
        ':kissing_cat:',
        '::*:',
        'Bacio Gatto Faccia',
        'Bacio viso gatto con occhi chiusi'
    ],
    '🙀': [
        'Gatto Indossabile',
        ':weary_cat:',
        '::O:',
        'Gatto Spaventato',
        'Gatto Urante',
        'Cat Face Urla nella paura',
        'Faccia Gatto Indossabile'
    ],
    '😿': [
        'Gatto Pianto',
        ':crying_cat:',
        '::(:',
        'Gatto Triste',
        'Faccia Gatto Pianto'
    ],
    '😾': [
        'Gatto Di Pouting',
        ':pouting_cat:',
        'Grumpy Cat',
        'Viso Gatto Pouting'
    ],
    '🙈': [
        'See-No-Malvagio Scimmia',
        'Scimmia',
        ':see-no-evil_mokey:',
        ':see_no_evil_mokey:',
        ':monkey:',
        'Mizaru',
        'Occhi Di Coprimento Scimmia'
    ],
    '🙉': [
        'Scimmia Hear-No-Malvagia',
        'Scimmia',
        ':hear-no-evil_monkey:',
        ':hear_no_evil_monkey:',
        ':monkey:',
        'Kikazaru',
        'Orecchie Di Coprimento Scimmia'
    ],
    '🙊': [
        'Speak-No-Malvagio Scimmia',
        'Scimmia',
        ':speak-no-evil_monkey:',
        ':speak_no_evil_monkey:',
        ':monkey:',
        'Iwazaru',
        'Monkey Covering Mouth',
        'No A Parlare'
    ],
    '🐵': [
        'Viso Di Scimmia',
        ':monkey_face:',
        'Scimmia',
        'Testa Di Scimmia'
    ],
    '🐒': [
        'Scimmia',
        ':monkey:',
        'Scimmia Sfacciata'
    ],
    '🦍': [
        'Gorilla',
        ':gorilla:'
    ],
    '🐶': [
        'Faccia Del Cane',
        ':dog_face:',
        'Cane',
        'Cucciolo'
    ],
    '🐕': [
        'Cane',
        ':dog:',
        'Doggo',
        'Akita Inu'
    ],
    '🦮': [
        'Vedere Cane Occhi',
        ':seeing_eye_dog:',
        'Cane Guida'
    ],
    '🐕‍🦺': [
        'Cane Di Servizio',
        ':service_dog:'
    ],
    '🐩': [
        'Poodle',
        ':poodle:',
        'Cane',
        'Poodle In Miniatura',
        'Poodle Standard',
        'Poodle Giocattolo'
    ],
    '🐺': [
        'Lupo',
        ':wolf:',
        'Volto Del Lupo',
        ':gray:',
        ':grey:'
    ],
    '🦊': [
        'Volpe',
        ':fox:',
        'Volpe Faccia',
        ':orange:'
    ],
    '🦝': [
        'Raccoon',
        ':raccoon:'
    ],
    '🐱': [
        'Faccia Gatto',
        ':cat_face:',
        ':3',
        'Gattino',
        'Kitty'
    ],
    '🐈': [
        'Gatto',
        ':cat:',
        'Gatto Nazionale',
        'Felina',
        'Housecat'
    ],
    '🐈‍⬛': [
        'Gatto Nero',
        ':black_cat:',
        ':black:'
    ],
    '🦁': [
        'Leone',
        ':lion:',
        'Viso Di Leone'
    ],
    '🐯': [
        'Faccia Tigre',
        ':tiger_face:',
        'Tigre Carina'
    ],
    '🐅': [
        'Tigre',
        ':tiger:',
        'Tigre Bengala'
    ],
    '🐆': [
        'Leopard',
        ':leopard:',
        'Leopardo Africano',
        'Jaguar'
    ],
    '🐴': [
        'Viso Di Cavallo',
        ':horse_face:',
        'Testa Di Cavallo'
    ],
    '🐎': [
        'Equini',
        ':horse:',
        'Cavallo Galloping',
        'Cavallo'
    ],
    '🦄': [
        'Unicorno',
        ':unicorn:',
        'Viso Unicorno'
    ],
    '🦓': [
        'Zebra',
        ':zebra:',
        'Viso Zebra',
        ':white:',
        ':black:'
    ],
    '🦌': [
        'Cervo',
        ':deer:',
        'Buck',
        'Renna',
        'Stag'
    ],
    '🐮': [
        'Viso Di Mucca',
        ':cow_face:',
        'Mucca',
        'Mucca Felice'
    ],
    '🐂': [
        'Ox',
        ':ox:',
        'Toro',
        'Bullock',
        'Ossano',
        'Steer'
    ],
    '🐃': [
        'Buffalo D\'Acqua',
        ':water_buffalo:',
        'Buffalo',
        'Buffalo Acqua Domestico'
    ],
    '🐄': [
        'Mucca',
        ':cow:',
        'Mucca Da Latte'
    ],
    '🐷': [
        'Viso Maiale',
        ':pig_fase:',
        'Maiale',
        'Testa Di Maiale',
        ':pink:'
    ],
    '🐖': [
        'Maiale',
        ':pig:',
        'Cane',
        'Sow',
        ':pink:'
    ],
    '🐗': [
        'Cinghiale',
        ':boar:',
        'Warthog',
        'Cinghiale Selvatico',
        'Maiale Selvatico'
    ],
    '🐽': [
        'Naso Di Maiale',
        ':pig_nose:'
    ],
    '🐏': [
        'Ram',
        ':ram:',
        'Ovini'
    ],
    '🐑': [
        'Ewe',
        ':ewe:',
        'Lamb',
        'Ovini'
    ],
    '🐐': [
        'Caprini',
        ':goat:'
    ],
    '🐪': [
        'Cammello',
        ':camel:',
        'Cammello Arabo',
        'Cammello Dromedary',
        'Cammello One-Bump'
    ],
    '🐫': [
        'Cammello Two-Hump',
        ':two-hump_camel:',
        ':two_hump_camel:',
        'Cammello Asiatico',
        'Cammello Bactriano'
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
        'Elefante',
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
        'Faccia Del Mouse',
        ':mouse_face:',
        'Mouse'
    ],
    '🐁': [
        'Mouse',
        ':mouse:',
        'Dormouse',
        'Rodente',
        'Topi'
    ],
    '🐀': [
        'Ratto',
        ':rat:',
        'Rodente'
    ],
    '🐹': [
        'Criceto',
        ':hamster:',
        'Viso Di Criceto'
    ],
    '🐰': [
        'Faccia Coniglio',
        ':rabbit_face:',
        'Coniglietto Di Pasqua'
    ],
    '🐇': [
        'Conigli',
        'Bunny',
        ':rabbit:',
        'Coniglio Coniglietto'
    ],
    '🐿️': [
        'Chipmunk',
        ':chipmunk:',
        'Scoiattolo'
    ],
    '🦔': [
        'Riccio',
        ':hedgehog:'
    ],
    '🦇': [
        'Pipistrello',
        ':bat:',
        'Batman',
        ':black:'
    ],
    '🐻': [
        'Orso',
        ':bear:',
        'Orso Faccia',
        'Orsacchiotto',
        ':brown:'
    ],
    '🐨': [
        'Koala',
        ':koala:',
        'Viso Di Koala'
    ],
    '🐼': [
        'Panda',
        ':panda:',
        'Faccia Panda'
    ],
    '🦘': [
        'Canguro',
        ':kangaroo:',
        'Roo'
    ],
    '🦡': [
        'Badger',
        ':badger:'
    ],
    '🦃': [
        'Turchia',
        ':turkey:',
        'Ringraziamento Turchia',
        'Tacchino Selvatico'
    ],
    '🐔': [
        'Pollo',
        ':chicken:',
        'Hen'
    ],
    '🐓': [
        'Gallo',
        ':gallo:',
        'Rooster',
        'Cockerel'
    ],
    '🐣': [
        'Hatching Chick',
        ':hatching_chick:',
        'Pollo Bambino',
        'Chick Hatching',
        ':yellow:'
    ],
    '🐤': [
        'Baby Chick',
        ':baby_chick:',
        'Uccello Giallo',
        ':yellow:'
    ],
    '🐥': [
        'Piccetto Front-Facing',
        ':front_baby_chick:',
        'Baby Chick',
        'Chick In Piedi',
        ':yellow:'
    ],
    '🐦': [
        'Uccello',
        ':bird:'
    ],
    '🐧': [
        'Penguin',
        ':penguin:'
    ],
    '🕊️': [
        'Colomba',
        ':Dove:',
        'Colomba della Pace',
        ':white:'
    ],
    '🦅': [
        'Aquila',
        ':Eagle:',
        'Aquila Calva'
    ],
    '🦆': [
        'Anatre',
        ':Duck:'
    ],
    '🦢': [
        'Cigno',
        ':swan:',
        ':white:'
    ],
    '🦉': [
        'Gufo',
        ':owl:',
        ':brown:'
    ],
    '🦚': [
        'Peacock',
        ':peacock:'
    ],
    '🦜': [
        'Pappagallo',
        ':parrot:'
    ],
    '🐸': [
        'Rana',
        ':frog:',
        'Carico',
        'Viso Di Rana',
        ':green:'
    ],
    '🐊': [
        'Coccodrillo',
        ':crocodile:',
        'Alligatore',
        'Croc',
        ':green:'
    ],
    '🐢': [
        'Tartaruga',
        ':turtle:',
        'Tortoise',
        ':green:'
    ],
    '🦎': [
        'Lucertola',
        ':lizard:',
        'Gecko',
        ':green:'
    ],
    '🐍': [
        'Serpente',
        ':snake:',
        'Serpente'
    ],
    '🐲': [
        'Faccia Del Drago',
        ':dragon_face:',
        'Testa Del Drago'
    ],
    '🐉': [
        'Drago',
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
        'Balena Sputante',
        ':spouting_whale:',
        'Balena Carina'
    ],
    '🐋': [
        'Balena',
        ':whale:'
    ],
    '🐬': [
        'Dolphin',
        ':dolphin:'
    ],
    '🐟': [
        'Pesce',
        ':fish:',
        'Acqua dolce Pesce'
    ],
    '🐠': [
        'Pesci Tropicali',
        ':tropical_fish:',
        'Pesce',
        'Pesce Giallo-Blu'
    ],
    '🐡': [
        'Blowfish',
        ':blowfish:',
        'Fugu',
        'Pufferfish'
    ],
    '🦈': [
        'Squalo',
        ':shark:',
        'Grande Squalo Bianco'
    ],
    '🐙': [
        'Polpo',
        ':octopus:'
    ],
    '🐚': [
        'Shell A Spirale',
        ':spiral_shell:',
        'Seashell',
        'Shell'
    ],
    '🐌': [
        'Chiocciola',
        ':snail:',
        'Slug',
        'Lumaca Da Giardino'
    ],
    '🦋': [
        'Farfalla',
        ':butterfly:'
    ],
    '🐛': [
        'Bug',
        ':bug:',
        'Caterpillar',
        'Insetto'
    ],
    '🐜': [
        'Ant',
        ':ant:',
        'Bug',
        'Insetto'
    ],
    '🐝': [
        'Ape',
        ':honeybee:',
        'Ape',
        'Bumblebee',
        ':yellow:',
        ':black:'
    ],
    '🐞': [
        'Lady Beetle',
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
        'Ragno',
        ':spider:'
    ],
    '🦂': [
        'Scorpione',
        ':scorpion:'
    ],
    '🦟': [
        'Zanzara',
        ':mosquito:',
        ':black:'
    ],
    '🦀': [
        'Granchio',
        ':crab:',
        ':red:'
    ],
    '🦞': [
        'Astici',
        ':lobster:'
    ],
    '🦐': [
        'Gamberetti',
        ':shrimp:',
        'Prawn'
    ],
    '🦑': [
        'Calamaro',
        ':squid:'
    ],
    '🦧': [
        'Orangutan',
        ':orangutan:'
    ],
    '🦥': [
        'Bradipo',
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
        'Beaver',
        ':beaver:'
    ],
    '🐻‍❄️': [
        'Orso Polare',
        ':polar_bear:',
        ':white:'
    ],
    '🦤': [
        'Dodo',
        ':dodo:'
    ],
    '🦭': [
        'Sigillo',
        ':seal:'
    ],
    '🪲': [
        'Coleottero',
        ':beetle:'
    ],
    '🪳': [
        'Scarafaggio',
        ':cockroach:'
    ],
    '🪰': [
        'Volo',
        ':fly:'
    ],
    '🪱': [
        'Verme',
        ':worm:'
    ],
    '🦩': [
        'Fenicottero',
        ':flamingo:'
    ],
    '🪹': [
        'Nido Vuoto',
        ':empty_nest:',
        'Uccelli',
        'Home'
    ],
    '🪺': [
        'Nido con uova',
        ':nest_with_eggs:',
        'Uccelli',
        'Home'
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
        'Cuore con freccia',
        ':heart_with_arrow:',
        'Freccia A Cupido',
        'Lovestruck',
        ':pink:'
    ],
    '💝': [
        'Cuore con nastro',
        ':heart_with_ribbon:',
        'Scatola Di Cioccolato',
        'Box Regalo',
        'Cuore Regalo',
        ':red:'
    ],
    '💖': [
        'Sparkling Heart',
        ':sparkling_heart:',
        'Cuore Scintillante',
        'Cuore Scintillante',
        'Cuore Di Stelle',
        ':pink:'
    ],
    '💗': [
        'Cuore Crescente',
        ':growing_heart:',
        'Cuore Multiplo',
        'Cuore Tripla',
        ':pink:'
    ],
    '💓': [
        'Battente Cuore',
        ':beating_heart:',
        'Allarme Cuore',
        'Heartbeat',
        'Cuore Wifi',
        ':pink:'
    ],
    '💞': [
        'Cuori Rivolti',
        ':revolving_hearts:',
        'Due Cuori',
        ':pink:'
    ],
    '💕': [
        'Due Cuori',
        ':two_hearts:',
        'Cuori Piccoli',
        'Due Cuori Rosa',
        ':pink:'
    ],
    '💟': [
        'Decorazione Cuore',
        ':heart_decoration:',
        ':purple:'
    ],
    '❣️': [
        'Esclamazione Cuore',
        ':heart_exclamation:',
        'Cuore Sopra Il Punto',
        'Cuore rosso come segno esclamativo',
        'Cuore Pesante Esclamazione Marchio Ornamento',
        ':red:'
    ],
    '💔': [
        'Cuore Rotto',
        ':broken_heart:',
        'Cuore Rompente',
        'Brokenheart',
        'Cuore Rotto',
        ':red:'
    ],
    '❤️‍🩹': [
        'Cuore Di Mendering',
        ':mending_heart:',
        'Cuore Bandato',
        'Cuore Curativo',
        'Cuore Inrotto',
        ':red:'
    ],
    '❤️‍🔥': [
        'Cuore sul fuoco',
        ':heart_on_fire:',
        ':red:'
    ],
    '❤️': [
        'Ti Amo',
        ':red_heart:',
        'Cuore Rosso',
        'Cuore',
        'Cuore D\'Amore',
        'Cuore Rosso',
        ':red:'
    ],
    '🧡': [
        'Cuore Arancione',
        ':orange_heart:',
        'Ti Amo',
        ':orange:'
    ],
    '💛': [
        'Cuore Giallo',
        ':yellow_heart:',
        '#1 Snapchat BF',
        'Cuore D\'Oro',
        'Ti Amo',
        ':yellow:'
    ],
    '💚': [
        'Cuore Verde',
        ':green_heart:',
        'Cuore Geloso',
        'Ti Amo',
        ':green:'
    ],
    '💙': [
        'Cuore Blu',
        ':blue_heart:',
        'Ti Amo',
        ':blue:'
    ],
    '💜': [
        'Cuore Viola',
        ':purple_heart:',
        'Ti Amo',
        ':purple:'
    ],
    '🖤': [
        'Cuore Nero',
        ':black_heart:',
        'Cuore Scuro',
        'Ti Amo',
        ':black:'
    ],
    '🤍': [
        'Cuore Bianco',
        ':white_heart:',
        'Ti Amo',
        ':white:'
    ],
    '🤎': [
        'Cuore Marrone',
        ':brown_heart:',
        'Ti Amo',
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
        'Centinaia Di Punti',
        ':hundred_points:',
        '100',
        '%',
        'Tienilo 100',
        'Punteggio Perfetto',
        'Simbolo Cento Punti'
    ],
    '💬': [
        'Palloncino Discorso',
        ':speech_balloon:',
        'Bolla Di Chat',
        'Bolla Vocale',
        ':white:'
    ],
    '💭': [
        'Palloncino Di Pensiero',
        ':thought_balloon:',
        'Bolla Di Pensiero',
        'Bolla Di Pensiero',
        ':white:'
    ],
    '💤': [
        'Zzz',
        ':zzz:',
        'Tempo di letto',
        'Noioso',
        'Sospensione',
        'Cartello Dormito',
        'Simbolo Sonno'
    ],
    '♠': [
        'Tuta Di Spade',
        ':spade_suit:',
        'Spades',
        'Black Spade Suit'
    ],
    '♥': [
        'Tuta Cuore',
        ':heart_suit:',
        'Carta Con Cuore',
        'Cuori',
        'Tuta Cuore Nero'
    ],
    '♦': [
        'Abito Di Diamante',
        ':diamond_suit:',
        'Diamanti',
        'Abito Di Diamante Nero'
    ],
    '♣': [
        'Abito Da Club',
        ':club_suit:',
        'Club',
        'Abito Club Nero'
    ],
    '🏧': [
        'Cartello Bancomat',
        ':atm_sign:',
        'Bancomat',
        'Macchina Automatica Telleer',
        ':blue:'
    ],
    '🎧': [
        'Cuffie',
        ':headphone:',
        'Auricolari',
        'iPod',
        'Cuffie'
    ],
    '🎵': [
        'Nota Musicale',
        ':musical_note:',
        'Beamed Coppia Di Ottava Note',
        'Coppia Di Travestiti Quavers',
        'Nota Musica'
    ],
    '🎶': [
        'Note Musicali',
        ':musical_notes:',
        'Musica',
        'Note Musicali',
        'Canto',
        'Note Musicali Multiple'
    ],
    '🔔': [
        'Campana',
        ':bell:',
        'Campana Della Libertà',
        'Ringer',
        'Campana Da Sposa',
        ':yellow:'
    ],
    '🔕': [
        'Campana con Slash',
        ':bell_with_slash:',
        'Notifiche',
        'Suoneria Disabilitata',
        'Campana Silenziata',
        'Campana con Tratto Annullamento',
        ':yellow:'
    ],
    '🔈': [
        'Volume Basso Altoparlante',
        ':speaker_low_volum:',
        'Volume',
        'Altoparlante'
    ],
    '🔉': [
        'Volume Medio Altoparlante',
        ':speaker_medium_volume:',
        'Riduci Volume',
        'Altoparlante Con Volume Medio',
        'Altoparlante con Onda Suono'
    ],
    '🔊': [
        'Altoparlante Alto Volume',
        ':speaker_high_volume:',
        'Aumenta Volume',
        'Altoparlante con tre onde sonore'
    ],
    '🔇': [
        'Altoparlante Silenziato',
        ':muted_speaker:',
        'Silenzia Volume',
        'Altoparlante con Cancellazione'
    ],
    '📢': [
        'Loudspeaker',
        ':loudspeaker:',
        'Annuncio',
        'Sistema PA',
        'Altoparlante Indirizzo Pubblico'
    ],
    '⛔': [
        'Nessuna Voce',
        ':no_entry:',
        ':red:'
    ],
    '🚫': [
        'Vietato',
        ':prohibited:',
        'Bannato',
        'Schienale Cerchio',
        'No',
        'Cerchio Rosso Incrociato',
        'Limitato',
        'Nessun Cartello Di Entrata',
        ':red:'
    ],
    '🚳': [
        'Senza Biciclette',
        ':no_bicycles:',
        'Nessun Cartello Bici',
        ':red:',
        ':black:'
    ],
    '🚭': [
        'Nessun Fumatore',
        ':no_smoking:',
        'Nessun Simbolo Di Fumo',
        ':red:',
        ':black:'
    ],
    '🚯': [
        'Nessuna Litterazione',
        ':no_littering:',
        'Non Nessun Simbolo Di Litter',
        ':red:',
        ':black:'
    ],
    '🚱': [
        'Acqua Non Potabile',
        ':non-potable_water:',
        ':non_potable_water:',
        'Nessuna Acqua',
        'Nessuna Acqua Potabile',
        'Simbolo Acqua Non Potabile',
        ':red:',
        ':black:'
    ],
    '🚷': [
        'Nessun Pedone',
        ':no_pedestrians:',
        'Nessuna Persona',
        'Nessuna Camminata',
        ':red:',
        ':black:'
    ],
    '🔞': [
        'Nessuno Sotto Diciotto',
        ':no_one_under_18:',
        'NSFW',
        'Nessuno Sotto Diciotto Simbolo',
        '18',
        ':red:',
        ':black:'
    ],
    '📵': [
        'Nessun Cellulare',
        ':no_mobile_phones:',
        'Nessun Cellulare',
        'Nessun Telefono',
        'Nessun Smartphone',
        ':red:',
        ':black:'
    ],
    '☢️': [
        'Radioactive',
        ':radioactive:',
        'Simbolo Internazionale Delle Radiazioni',
        'Nucleare',
        'Segno Radioattivo',
        ':orange:'
    ],
    '☣️': [
        'Biohazard',
        ':biohazard:',
        'Segno Biohazard',
        ':orange:'
    ],
    '⬆️': [
        'Pulsante Freccia Su',
        ':up_arrow_button:',
        'Puntamento Freccia Su',
        'Freccia Nera In Alto',
        ':blue:'
    ],
    '↗️': [
        'Pulsante Freccia Su-Destra',
        ':up-right_arrow_button:',
        ':up_right_arrow_button:',
        'Freccia Diagonale Su-Destra',
        'Freccia Nord-Est',
        ':blue:'
    ],
    '➡️': [
        'Pulsante Freccia Destra',
        ':right_arrow_button:',
        'Puntamento Freccia A Destra',
        'Freccia Dei Cappucci Neri',
        ':blue:'
    ],
    '↘️': [
        'Pulsante Freccia Giù Destra',
        ':down-right_arrow_button:',
        ':down_right_arrow_button:',
        'Freccia Diagonale Down Destra',
        'Freccia Sudorientale',
        ':blue:'
    ],
    '⬇️': [
        'Pulsante Freccia Giù',
        ':down_arrow_button:',
        'Puntamento Freccia Giù',
        'Freccia Nera Giù',
        ':blue:'
    ],
    '↙️': [
        'Pulsante Freccia Giù Sinistra',
        ':down-left_arrow_button:',
        ':down_left_arrow_button:',
        'Freccia Diagonale Giù Sinistra',
        'Freccia Sud-Ovest',
        ':blue:'
    ],
    '⬅️': [
        'Pulsante Freccia Sinistra',
        ':left_arrow_button:',
        'Puntamento Freccia A Sinistra',
        'Freccia Nera A Sinistra',
        ':blue:'
    ],
    '↖️': [
        'Pulsante Freccia Su Sinistra',
        ':up-left_arrow_button:',
        ':up_left_arrow_button:',
        'Freccia Diagonale Su-Sinistra',
        'Freccia Nord-Ovest',
        ':blue:'
    ],
    '↕️': [
        'Pulsante Freccia Su Giù',
        ':up-down_arrow_button:',
        ':up_down_arrow_button:',
        'Frecce Verticali',
        'Freccia Su Giù',
        ':blue:'
    ],
    '↔️': [
        'Pulsante Freccia Sinistra-Destra',
        ':left-right_arrow_button:',
        ':left_right_arrow_button:',
        'Frecce Orizzontali',
        'Frecce Laterali',
        'Freccia Sinistra Destra',
        ':blue:'
    ],
    '↩️': [
        'Freccia Destra Curving Pulsante Sinistro',
        ':right_arrow_curving_left_button:',
        'Risposta Email',
        'Freccia Curva Sinistra',
        'Freccia a sinistra con gancio',
        ':blue:'
    ],
    '↪️': [
        'Freccia Sinistra Curving Pulsante Destro',
        ':left_arrow_curving_right_button:',
        'Email Inoltra',
        'Freccia Curva Destra',
        'Freccia con gancio',
        ':blue:'
    ],
    '⤴️': [
        'Pulsante Curving Su Freccia Destra',
        ':right_arrow_curving_up_button:',
        'Frecce A Puntamento Dighe Quindi Curvare In Alto',
        ':blue:'
    ],
    '⤵️': [
        'Tasto Curva Freccia Destra Giù',
        ':right_arrow_curving_down_button:',
        'Freccia Curva Giù',
        'Frecce A Puntamento Dightwards Quindi Curving Downwards',
        ':blue:'
    ],
    '🔃': [
        'Pulsante Frecce Verticali In senso Orario',
        ':clockwise_vertical_button:',
        'Frecce del cerchio aperto in senso orario verso il basso e verso l\'alto',
        ':blue:'
    ],
    '🔄': [
        'Pulsante Frecce In senso antiorario',
        ':counterclockwise_button:',
        'Aggiorna',
        'Ruota',
        'Cambia',
        'Frecce In senso antiorario',
        'Frecce del cerchio aperto in senso antiorario verso il basso e verso l\'alto',
        ':blue:'
    ],
    '🔙': [
        'Freccia Posteriore',
        ':back_arrow:',
        'Indietro',
        'Indietro con freccia a sinistra sopra',
        ':black:'
    ],
    '🔚': [
        'Freccia Finale',
        ':end_arrow:',
        'Fine',
        'Termina con la freccia a sinistra sopra',
        ':black:'
    ],
    '🔛': [
        'Acceso! Freccia',
        ':on_arrow:',
        'Acceso',
        'Acceso con segno esclamativo con freccia destra sinistra sopra',
        ':black:'
    ],
    '🔜': [
        'Presto Freccia',
        ':soon_arrow:',
        'Presto',
        'Presto con freccia dei marci sopra',
        ':black:'
    ],
    '🔝': [
        'Freccia Superiore',
        ':top_arrow:',
        'Alto',
        'Top con freccia in alto',
        ':black:'
    ],
    '🛐': [
        'Luogo di culto',
        ':place_of_worship:',
        'Costruzione Religiosa',
        ':purple:'
    ],
    '⚛️': [
        'Simbolo Atom',
        ':atom_symbol:',
        ':purple:'
    ],
    '🕉️': [
        'Simbolo OM',
        ':om_symbol:',
        'Om',
        'Aumkara',
        'Omkara',
        'Pranava',
        ':purple:'
    ],
    '✡️': [
        'Stella di David',
        ':star_of_david:',
        'Magen David',
        ':purple:'
    ],
    '☸️': [
        'Ruota del Dharma',
        ':wheel_of_dharma:',
        'Elmo',
        ':purple:'
    ],
    '☯️': [
        'Yin Yang',
        ':yin_yang:',
        ':purple:'
    ],
    '✝️': [
        'Croce Latina',
        ':latin_cross:',
        'Croce Cristiana',
        ':purple:'
    ],
    '☦️': [
        'Croce Ortodossa',
        ':orthodox_cross:',
        ':purple:'
    ],
    '☪️': [
        'Stella e Mezzaluna',
        ':star_and_crescent:',
        ':purple:'
    ],
    '☮️': [
        'Simbolo Della Pace',
        ':peace:',
        'Segno Di Pace',
        ':purple:'
    ],
    '🕎': [
        'Menorah',
        ':menorah:',
        'Candelabrum',
        'Candele',
        'Chanukiah',
        'Menorah',
        'Menorah con nove rami',
        ':purple:'
    ],
    '🔯': [
        'Stella A 6 Puntini',
        ':dotted_six-pointed_star:',
        ':dotted_six_pointed_star:',
        'Stella a sei punti con punto centrale',
        ':purple:'
    ],
    '🪯': [
        'Khanda',
        ':khanda:',
        'Sikhism',
        ':purple:'
    ],
    '♈': [
        'Ariete',
        ':aries:',
        ':zodiac:',
        'Zodiaco',
        ':purple:'
    ],
    '♉': [
        'Taurus',
        ':taurus:',
        ':zodiac:',
        'Zodiaco',
        ':purple:'
    ],
    '♊': [
        'Gemini',
        ':gemini:',
        ':zodiac:',
        'Zodiaco',
        ':purple:'
    ],
    '♋': [
        'Cancro',
        ':cancer:',
        ':zodiac:',
        'Zodiaco',
        ':purple:'
    ],
    '♌': [
        'Leone',
        ':leo:',
        ':zodiac:',
        'Zodiaco',
        ':purple:'
    ],
    '♍': [
        'Vergine',
        ':virgo:',
        ':zodiac:',
        'Zodiaco',
        ':purple:'
    ],
    '♎': [
        'Bilancia',
        ':libra:',
        ':zodiac:',
        'Zodiaco',
        ':purple:'
    ],
    '♏': [
        'Scorpione',
        ':scorpio:',
        ':zodiac:',
        'Scorpione',
        'Zodiaco',
        ':purple:'
    ],
    '♐': [
        'Sagittarius',
        ':sagittarius:',
        ':zodiac:',
        'Zodiaco',
        ':purple:'
    ],
    '♑': [
        'Capricorno',
        ':capricorn:',
        ':zodiac:',
        'Zodiaco',
        ':purple:'
    ],
    '♒': [
        'Acquario',
        ':aquarius:',
        ':zodiac:',
        'Zodiaco',
        ':purple:'
    ],
    '♓': [
        'Pisces',
        ':pisces:',
        ':zodiac:',
        'Zodiaco',
        ':purple:'
    ],
    '⛎': [
        'Ofiuchus',
        ':ophiuchus:',
        ':zodiac:',
        'Zodiaco',
        ':purple:'
    ],
    '⏭️': [
        'Salta Simbolo Avanti',
        'Doppio triangolo destro nero con barra verticale',
        ':skip_forward_button:',
        'Pulsante Traccia Successiva',
        ':blue:'
    ],
    '⏮️': [
        'Salta Simbolo Indietro',
        'Doppio triangolo nero a sinistra con barra verticale',
        ':skip_backward_button:',
        'Ultimo Pulsante Traccia',
        'Traccia Precedente',
        ':blue:'
    ],
    '⏯️': [
        'Pulsante Riproduci o Pausa',
        'Triangolo destro nero con doppia barra verticale',
        ':play_button:',
        ':pause_button:',
        ':play_or_pause_button:',
        'Riproduci Simbolo',
        'Pausa Simbolo',
        ':blue:'
    ],
    '🔀': [
        'Casuale Pulsante Tracce',
        ':shuffle_tracks_button:',
        'Frecce Di Cappuccio',
        ':blue:'
    ],
    '🔁': [
        'Pulsante Ripeti',
        ':repeat_button:',
        'Simbolo Ciclo',
        'Retweet',
        'Frecce del cerchio aperto in senso orario e sinistro',
        ':blue:'
    ],
    '🔂': [
        'Ripeti Pulsante Singolo',
        ':repeat_single_button:',
        'Frecce Del Cerchio Con Numero 1',
        'Simbolo Ripeti Una Volta',
        'Ripeti Simbolo Della Singola Traccia',
        'Frecce a cerchio aperte con una sovrapposizione cerchiata in senso orario',
        ':blue:'
    ],
    '▶️': [
        'Pulsante Play',
        ':play_button:',
        'Triangolo Destro',
        'Triangolo Destro',
        'Triangolo Destro Nero',
        ':blue:'
    ],
    '◀️': [
        'Pulsante Inverso',
        ':reverse_button:',
        'Triangolo Sinistro',
        'Triangolo A Sinistra',
        'Triangolo Nero A Sinistra',
        ':blue:'
    ],
    '🔼': [
        'Pulsante In Alto',
        ':upwards_button:',
        'Triangolo Su',
        'Triangolo Superiore',
        'Piccolo Triangolo Rosso Superiore',
        ':blue:'
    ],
    '🔽': [
        'Pulsante Downwards',
        ':downwards_button:',
        'Triangolo Giù',
        'Triangolo Down Pointing',
        'Piccolo Triangolo Rosso Down Pointing',
        ':blue:'
    ],
    '⏩': [
        'Pulsante Rapido Avanti',
        ':fast-forward_button:',
        ':fast_forward_button:',
        'Avanti Veloce',
        'Simbolo Avanti Veloce',
        'Doppio Triangolo Destro Nero',
        ':blue:'
    ],
    '⏪': [
        'Fast Reverse Button',
        ':fast_reverse_button:',
        'Rewind',
        'Simbolo Riavvolgi',
        'Doppio Triangolo Nero A Sinistra',
        ':blue:'
    ],
    '⏫': [
        'Pulsante Veloce',
        ':fast_up_button:',
        'Doppio Triangolo Superiore',
        'Doppio Triangolo Superiore Nero',
        ':blue:'
    ],
    '⏬': [
        'Pulsante Giù Veloce',
        ':fast_down_button:',
        'Doppio Triangolo Down Pointing',
        'Doppio Triangolo Down Nero',
        ':blue:'
    ],
    '⏹️': [
        'Pulsante Di Ferma',
        ':stop_button:',
        'Ferma',
        'Ferma Simbolo',
        'Quadrato nero per arresto',
        ':blue:'
    ],
    '⏏️': [
        'Pulsante Espelli',
        ':eject_button:',
        'Eject Symbol',
        ':blue:'
    ],
    '🎦': [
        'Cinema',
        ':cinema_button:',
        'Sala Del Cinema',
        'Film',
        'Pellicola',
        'Simbolo Del Cinema',
        'Registrazione',
        ':blue:'
    ],
    '📶': [
        'Barre Di Antenna',
        ':antenna_bars_button:',
        'Barre Ricevimento',
        'Forza Del Segnale',
        'Stairs',
        'Simbolo Di Forza Del Segnale',
        'Antenna con barre',
        ':blue:'
    ],
    '✖️': [
        'Moltiplicatore',
        ':multiply:',
        'Volte',
        'Simbolo Di Moltiplicazione',
        'Moltiplicazione Pesante X',
        ':black:'
    ],
    '➕': [
        'Plus',
        ':plus:',
        'Simbolo Plus',
        'Heavy Plus Sign',
        ':black:'
    ],
    '➖': [
        'Minus',
        ':minus:',
        'Minus Symbol',
        'Segno Minus Pesante',
        ':black:'
    ],
    '➗': [
        'Dividi',
        ':divide:',
        'Simbolo Divisione',
        'Cartello Divisione Pesante',
        ':black:'
    ],
    '🟰': [
        'Segno Uguale Pesante',
        ':heavy_equals_sign:',
        'Uguale',
        'Risultato',
        ':black:'
    ],
    '♾️': [
        'Infinito',
        ':infinity:',
        'Cartello Di Carta Permanente'
    ],
    '‼️': [
        'Segnale Esclamativo Doppio',
        ':double_exclamation_mark:',
        'Marchio Esclamativo Doppio Rosso',
        ':red:'
    ],
    '⁉️': [
        'Segnale Domanda Esclamazione',
        ':exclamation_question_mark:',
        'Marchio esclamativo rosso e Marchio interrogativo',
        ':red:'
    ],
    '❓': [
        'Marchio Domanda',
        ':question_mark:',
        'Marchio Domanda Rossa',
        'Ornamento Del Marchio Domanda Nera',
        ':red:'
    ],
    '❔': [
        'Marchio Domanda Bianca',
        ':white_question_mark:',
        ':question_mark:',
        'Marchio Domanda Bianca',
        'Ornamento Del Marchio Domanda Bianco',
        ':white:'
    ],
    '❗': [
        'Marchio Esclamativo',
        ':exclamation_mark:',
        'Marchio Esclamativo Rosso',
        'Simbolo Marchio Esclamazione Pesante',
        ':red:'
    ],
    '❕': [
        'Marchio Esclamativo Bianco',
        ':white_exclamation_mark:',
        ':exclamation_mark:',
        'Esclamazione Bianca Marchio Ornamento',
        ':white:'
    ],
    '⭕': [
        'Cerchio Rosso Cavo',
        ':hollow_red_circle:',
        'Cerchio',
        'Correggi',
        'Cerchio Rosso',
        'Marchio Cerchio',
        'Cerchio Grande Pesante',
        ':red:'
    ],
    '☑️': [
        'Casella di controllo con controllo',
        ':check_box_with_check:',
        'V',
        'Checkbox',
        'Segna Nella Casella',
        'Ballot Box con controllo'
    ],
    '✔️': [
        'Segna Segna',
        ':check_mark:',
        'V',
        'Controlla',
        'Tick',
        'Checkmark',
        'Marchio Di Controllo Pesante',
        ':black:'
    ],
    '❌': [
        'Marchio Croce',
        ':cross_mark:',
        'Croce',
        'X',
        ':red:'
    ],
    '✅': [
        'Pulsante Segna',
        ':check_mark_button:',
        'V',
        'Marchio Di Controllo Verde',
        'Tick Verde',
        'Segna Segna',
        'Marchio Di Controllo Pesante Bianco',
        ':green:'
    ],
    '❎': [
        'Pulsante Contrassegno Croce',
        ':cross_mark_button:',
        'Croce',
        'X',
        'Marchio X',
        'Marchio Croce Quadrato Negativo',
        ':green:'
    ],
    '#️⃣': [
        'Cartello Numeri Keycap',
        ':hash_key:',
        '#',
        'Chiave Hash',
        'Hashtag',
        'Ottotorpo',
        'Chiave Sterlina',
        'Cartello Numeri',
        ':blue:'
    ],
    '*️⃣': [
        'Keycap Asterisk',
        ':asterisk:',
        'Keycap Stella',
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
        'Cifra Tastiera Uno'
    ],
    '2️⃣': [
        'Numero 2',
        ':number_2:',
        'Cifra Keycap Due'
    ],
    '3️⃣': [
        'Numero 3',
        ':number_3:',
        'Cifra Tastiera Tre'
    ],
    '4️⃣': [
        'Numero 4',
        ':number_4:',
        'Cifra Keycap Quattro'
    ],
    '5️⃣': [
        'Numero 5',
        ':number_5:',
        'Cifra Keycap Cinque'
    ],
    '6️⃣': [
        'Numero 6',
        ':number_6:',
        'Cifra Keycap Sei'
    ],
    '7️⃣': [
        'Numero 7',
        ':number_7:',
        'Keycap Digit Seven'
    ],
    '8️⃣': [
        'Numero 8',
        ':number_8:',
        'Cifra Keycap Otto'
    ],
    '9️⃣': [
        'Numero 9',
        ':number_9:',
        'Cifra Keycap Nove'
    ],
    '🔟': [
        'Numero 10',
        ':number_10:',
        'Keycap: 10',
        '10',
        'Keycap Digit Dieci'
    ],
    '🔠': [
        'Input Latin Uppercase',
        ':input_latin_uppercase:',
        'ABCD',
        'Maiuscolo',
        'Simbolo di ingresso per lettere maiuscole',
        'Simbolo di input per lettere maiuscole latine',
        ':blue:'
    ],
    '🔡': [
        'Input Latin Lowercase',
        ':input_latin_lowercase:',
        'abcd',
        'Minuscolo',
        'Simbolo di ingresso per lettere minuscole',
        'Simbolo di ingresso per piccole lettere latine',
        ':blue:'
    ],
    '🔢': [
        'Input Numbers',
        ':input_numbers:',
        '1234',
        'Numeri',
        'Numeric Input',
        'Simbolo di ingresso per i numeri',
        ':blue:'
    ],
    '🔣': [
        'Simbolo di ingresso per i simboli',
        ':input_symbols:',
        'Simboli',
        'Ingresso Simbolo',
        ':blue:'
    ],
    '🔤': [
        'Input Latin Letters',
        ':input_latin_letters:',
        'abc',
        'Alfabeto',
        'Lettere',
        'Simbolo di ingresso per lettere',
        'Simbolo di ingresso per lettere latine',
        ':blue:'
    ],
    '🅰️': [
        'Un Pulsante (Tipo Di Sangue)',
        ':a_blood:',
        'Tipo Di Sangue A',
        'Lettera A',
        'Lettera Di Capitale Latina Diretta Negativa A',
        ':red:'
    ],
    '🆎': [
        'Pulsante AB (tipo di sangue)',
        ':ab_blood:',
        'Lettere AB',
        'Tipo Di Sangue AB',
        'Squared Negativo AB',
        ':red:'
    ],
    '🅱️': [
        'Pulsante B (tipo di sangue)',
        ':b_blood:',
        'Lettera B',
        'Tipo Di Sangue B',
        'Capitale Latino Quadrato Negativo Lettera B',
        ':red:'
    ],
    '🆑': [
        'Pulsante CL',
        ':cl_button:',
        'Pulisci',
        'Pulisci Pulsante',
        'Cartello CL',
        'CL Quadrato',
        'Lettere CL',
        ':red:'
    ],
    '🆒': [
        'Pulsante Freddo',
        ':cool_button:',
        'Quadrato Freddo',
        'Cartello Freddo',
        'Freddo Quadrato',
        ':blue:'
    ],
    '🆓': [
        'Pulsante Libero',
        ':free_button:',
        'Gratis',
        'Firma Gratuita',
        'Squared Free',
        ':blue:'
    ],
    'ℹ️': [
        'Informazioni',
        ':info_button:',
        'Informazioni',
        'Minuscolo I',
        'Informazioni Turistiche',
        'Fonte Di Informazione',
        ':blue:'
    ],
    '🆔': [
        'Pulsante ID',
        ':id_button:',
        'ID',
        'Identificazione',
        'Cartello Di Identificazione',
        'Id Quadrato',
        ':purple:'
    ],
    '🆕': [
        'Nuovo Pulsante',
        ':new_button:',
        'Nuovo',
        'Nuovo Cartello',
        'Nuovo Quadrato',
        ':blue:'
    ],
    '🅾️': [
        'Pulsante O (tipo di sangue)',
        ':0_blood:',
        'Tipo Di Sangue O',
        '0',
        'Lettera Di Capitale Latina Quadrata Negativa',
        'Lettera O',
        ':red:'
    ],
    '🆗': [
        'Pulsante OK',
        ':ok_button:',
        'OK',
        'Ok',
        'Quadrato',
        'OK Sign',
        'Quadrato OK',
        ':blue:'
    ],
    '🅿️': [
        'Pulsante P',
        ':p_button:',
        ':parking_sign:',
        'Cartello Di Parcheggio',
        'Lettera Di Capitale Latina Quadrata Negativa',
        'Lettera P',
        ':blue:'
    ],
    '🆘': [
        'Pulsante SOS',
        ':sos_button:',
        'Segnale Di Emergenza',
        'Emergenza',
        'SOS',
        'Firma SOS',
        'SOS Quadrato',
        'Guida',
        ':red:'
    ],
    '🆙': [
        'Su! Pulsante',
        ':up_button:',
        'Livello Superiore',
        'Su',
        'Firma Su',
        'Quadrato su con segno esclamativo',
        ':blue:'
    ],
    '🆚': [
        'Pulsante Vs',
        ':vs_button:',
        'Vs Quadrato',
        ':orange:'
    ],
    '🆖': [
        'Pulsante GNN',
        ':ng_button:',
        'GN Quadrato',
        'Nessun Cartello Buono',
        'Nessun Buono',
        ':ng:',
        'Sanguinario',
        ':blue:'
    ],
    '🔴': [
        'Cerchio Rosso',
        ':red_circle:',
        'Cerchio Rosso Grande',
        ':red:'
    ],
    '🟠': [
        'Cerchio Arancione',
        ':orange_circle:',
        'Cerchio Arancione Grande',
        ':orange:'
    ],
    '🟡': [
        'Cerchio Giallo',
        ':yellow_circle:',
        'Cerchio Giallo Grande',
        ':yellow:'
    ],
    '🟢': [
        'Cerchio Verde',
        ':green_circle:',
        'Cerchio Verde Grande',
        ':green:'
    ],
    '🔵': [
        'Cerchio Blu',
        ':blue_circle:',
        'Cerchio Blu Grande',
        ':blue:'
    ],
    '🟣': [
        'Cerchio Viola',
        ':purple_circle:',
        'Cerchio Viola Grande',
        ':purple:'
    ],
    '🟤': [
        'Cerchio Marrone',
        ':brown_circle:',
        'Cerchio Marrone Grande',
        ':brown:'
    ],
    '⚫': [
        'Cerchio Nero',
        ':black_circle:',
        'Cerchio Nero Medio',
        ':black:'
    ],
    '⚪': [
        'Cerchio Bianco',
        ':white_circle:',
        'Cerchio Bianco Medio',
        ':white:'
    ],
    '🟥': [
        'Quadrato Rosso',
        ':red_square:',
        'Grande Quadrato Rosso',
        ':red:'
    ],
    '🟧': [
        'Quadrato Arancione',
        ':orange_square:',
        'Quadrato Arancione Grande',
        ':orange:'
    ],
    '🟨': [
        'Quadrato Giallo',
        ':yellow_square:',
        'Quadrato Giallo Grande',
        ':yellow:'
    ],
    '🟩': [
        'Quadrato Verde',
        ':green_square:',
        'Grande Quadrato Verde',
        ':green:'
    ],
    '🟦': [
        'Quadrato Blu',
        ':blue_square:',
        'Quadrato Blu Grande',
        ':blue:'
    ],
    '🟪': [
        'Quadrato Viola',
        ':purple_square:',
        'Quadrato Viola Grande',
        ':purple:'
    ],
    '🟫': [
        'Quadrato Marrone',
        ':brown_square:',
        'Quadrato Marrone Grande',
        ':brown:'
    ],
    '⬛': [
        'Quadrato Grande Nero',
        ':black_large_square:',
        ':black:'
    ],
    '⬜': [
        'Quadrato Grande Bianco',
        ':white_large_square:',
        ':white:'
    ],
    '◼️': [
        'Quadrato Medio Nero',
        ':black_medium_square:',
        ':black:'
    ],
    '◻️': [
        'Quadrato Medio Bianco',
        ':white_medium_square:',
        ':white:'
    ],
    '◾': [
        'Quadrato Medio Nero',
        ':black_medium_small_square:',
        ':black:'
    ],
    '◽': [
        'Quadrato Medio Bianco',
        ':white_medium_small_square:',
        ':white:'
    ],
    '▪️': [
        'Quadrato Nero Piccolo',
        ':black_small_square:',
        ':black:'
    ],
    '▫️': [
        'Quadrato Bianco Piccolo',
        ':white_small_square:',
        ':white:'
    ],
    '💠': [
        'Forma di diamante con un punto interno',
        ':diamond_shape_with_dot:',
        'Cuteness',
        'Fiore Di Diamante',
        'Kawaii'
    ],
    '🔶': [
        'Diamante Arancione Grande',
        ':large_orange_diamond:',
        ':orange:'
    ],
    '🔷': [
        'Diamante Blu Grande',
        ':large_blue_diamond:',
        ':blue:'
    ],
    '🔸': [
        'Diamante Arancione Piccolo',
        ':small_orange_diamond:',
        ':orange:'
    ],
    '🔹': [
        'Diamante Blu Piccolo',
        ':small_blue_diamond:',
        ':blue:'
    ],
    '🔺': [
        'Triangolo Rosso Puntato Su',
        ':red_triangle_pointed_up:',
        'Triangolo Rosso Superiore',
        ':red:'
    ],
    '🔻': [
        'Triangolo Rosso A Punto Giù',
        ':red_triangle_pointed_down:',
        'Triangolo Rosso Down Pointing',
        ':red:'
    ],
    '🔳': [
        'Pulsante Quadrato Bianco',
        ':white_square_button:',
        ':white:',
        ':black:'
    ],
    '🔲': [
        'Pulsante Quadrato Nero',
        ':black_square_button:',
        ':white:',
        ':black:'
    ],
    '©️': [
        'Copyright',
        ':copyright:',
        ':c:',
        'Cartello Copyright'
    ],
    '®️': [
        'Registrato',
        ':registered:',
        ':r:',
        'Firma Registrata'
    ],
    '™️': [
        'Marchio Commerciale',
        ':trade_mark:',
        ':tm:',
        'Marchio',
        'Segno Marchio'
    ],
    '🛅': [
        'Bagaglio Sinistro',
        ':left_luggage:',
        'Sacchetto Con Chiave',
        'Valigia Bloccata',
        ':blue:'
    ],
    '🛄': [
        'Richiesta Bagaglio',
        ':baggage_claim:',
        ':blue:'
    ],
    '🛃': [
        'Dogane',
        ':customs:',
        ':blue:'
    ],
    '🛂': [
        'Controllo Dei Passaporti',
        ':passport_control:',
        'Controllo Bordo',
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
        'Simbolo Acqua Potabile',
        ':potable_water_symbol:',
        'Sete',
        'Sete',
        'Rubinetto Dell\'Acqua',
        'Rubinetto Dell\'Acqua'
    ],
    '🇦': [
        'Lettera A',
        ':letter_a:',
        ':a:',
        'Simbolo Indicatore Regionale Lettera A'
    ],
    '🇧': [
        'Lettera B',
        ':letter_b:',
        ':b:',
        'Indicatore Regionale Simbolo Lettera B'
    ],
    '🇨': [
        'Lettera C',
        ':letter_c:',
        ':c:',
        'Indicatore Regionale Simbolo Lettera C'
    ],
    '🇩': [
        'Lettera D',
        ':letter_d:',
        ':d:',
        'Indicatore Regionale Simbolo Lettera D'
    ],
    '🇪': [
        'Lettera E',
        ':letter_e:',
        ':e:',
        'Indicatore Regionale Simbolo Lettera E'
    ],
    '🇫': [
        'Lettera F',
        ':letter_f:',
        ':f:',
        'Indicatore Regionale Simbolo Lettera F'
    ],
    '🇬': [
        'Lettera G',
        ':letter_g:',
        ':g:',
        'Indicatore Regionale Simbolo Lettera G'
    ],
    '🇭': [
        'Lettera H',
        ':letter_h:',
        ':h:',
        'Indicatore Regionale Simbolo Lettera H'
    ],
    '🇮': [
        'Lettera I',
        ':letter_i:',
        ':i:',
        'Indicatore Regionale Simbolo Lettera I'
    ],
    '🇯': [
        'Lettera J',
        ':letter_j:',
        ':j:',
        'Indicatore Regionale Simbolo Lettera J'
    ],
    '🇰': [
        'Lettera K',
        ':letter_k:',
        ':k:',
        'Indicatore Regionale Simbolo Lettera K'
    ],
    '🇱': [
        'Lettera L',
        ':letter_l:',
        ':l:',
        'Indicatore Regionale Simbolo Lettera L'
    ],
    '🇲': [
        'Lettera M',
        ':letter_m:',
        ':m:',
        'Indicatore Regionale Simbolo Lettera M'
    ],
    '🇳': [
        'Lettera N',
        ':letter_n:',
        ':n:',
        'Indicatore Regionale Simbolo Lettera N'
    ],
    '🇴': [
        'Lettera O',
        ':letter_o:',
        ':o:',
        'Indicatore Regionale Simbolo Lettera O'
    ],
    '🇵': [
        'Lettera P',
        ':letter_p:',
        ':p:',
        'Indicatore Regionale Simbolo Lettera P'
    ],
    '🇶': [
        'Lettera Q',
        ':letter_q:',
        ':q:',
        'Indicatore Regionale Simbolo Lettera Q'
    ],
    '🇷': [
        'Lettera R',
        ':letter_r:',
        ':r:',
        'Indicatore Regionale Simbolo Lettera R'
    ],
    '🇸': [
        'Lettera S',
        ':letter_s:',
        ':s:',
        'Indicatore Regionale Simbolo Lettera S'
    ],
    '🇹': [
        'Lettera T',
        ':letter_t:',
        ':t:',
        'Indicatore Regionale Simbolo Lettera T'
    ],
    '🇺': [
        'Lettera U',
        ':letter_u:',
        ':u:',
        'Indicatore Regionale Simbolo Lettera U'
    ],
    '🇻': [
        'Lettera V',
        ':letter_v:',
        ':v:',
        'Indicatore Regionale Simbolo Lettera V'
    ],
    '🇼': [
        'Lettera W',
        ':letter_w:',
        ':w:',
        'Indicatore Regionale Simbolo Lettera W'
    ],
    '🇽': [
        'Lettera X',
        ':letter_x:',
        ':x:',
        'Indicatore Regionale Simbolo Lettera X'
    ],
    '🇾': [
        'Lettera Y',
        ':letter_y:',
        ':y:',
        'Indicatore Regionale Simbolo Lettera Y'
    ],
    '🇿': [
        'Lettera Z',
        ':letter_z:',
        ':z:',
        'Indicatore Regionale Simbolo Lettera Z'
    ],
    '💌': [
        'Lettera D\'Amore',
        ':love_letter:',
        'Busta Cuore',
        'Nota D\'Amore'
    ],
    '🚮': [
        'Metti la litter nel suo simbolo di posizionamento',
        ':put_litter_in_bing_sign:',
        'Litter in Bin Sign',
        'Metti Litter Nel Cestino',
        'Persona Con Cestino'
    ],
    '♿': [
        'Simbolo sedia a rotelle',
        ':wheelchair_symbol:',
        'Bagno Accessibile'
    ],
    '🚹': [
        'Simbolo Uomini',
        ':mens_symbol:',
        'Simbolo Uomini',
        'Wc Da Uomo',
        'Restroom Maschio',
        'WC Maschio',
        ':blue:'
    ],
    '🚺': [
        'Simbolo Donna',
        ':womens_symbol:',
        'Simbolo Donna',
        'Toilette Donna',
        'Restroom Femminile',
        'Famale WC',
        ':purple:',
        ':pink:'
    ],
    '🚻': [
        'Restroom',
        ':restroom:',
        'Cartello Da Bagno',
        'Cartello Servizi igienici',
        'Segno WC',
        ':blue:'
    ],
    '🚼': [
        'Simbolo Del Bambino',
        ':baby_symbol:',
        'Baby Change Station',
        'Simbolo Cambio Bambino',
        'Vivaio',
        ':orange:'
    ],
    '🚾': [
        'Armadio Dell\'Acqua',
        ':wc:',
        'WC',
        'WC WC',
        ':blue:'
    ],
    '⚠️': [
        'Segnale Di Avvertimento',
        ':warning_sign:',
        'Simbolo Di Avviso',
        ':yellow:'
    ],
    '🚸': [
        'Attraversamento Bambini',
        ':children_crossing:',
        'Attraversamento Per Bambini',
        'Attraversamento Scuola',
        ':yellow:'
    ],
    '🔅': [
        'Simbolo Bassa Luminosità',
        ':low_brightness_symbol:',
        'Pulsante Diminuisci',
        'Diminuisci Luminosità'
    ],
    '🔆': [
        'Simbolo Di Alta Luminosità',
        ':high_brightness_symbol:',
        'Aumenta Luminosità',
        'Pulsante Luminoso'
    ],
    '📳': [
        'Modalità Vibrazione',
        ':vibration_mode:',
        'Cuore Del Telefono',
        'Modalità Silenziosa',
        ':orange:'
    ],
    '📴': [
        'Telefono Cellulare Disattivato',
        ':mobile_phone_off:',
        ':orange:'
    ],
    '〰️': [
        'Onda',
        'Wavy Dash',
        ':wave:'
    ],
    '💱': [
        'Cambio Valuta',
        ':currency_exchange:'
    ],
    '💲': [
        'Segno Dollaro Pesante',
        ':dollar_symbol:',
        'Dollaro',
        'Cartello Dollaro'
    ],
    '♻️': [
        'Simbolo Di Riciclaggio Universale Nero',
        ':recycling_symbol:',
        'Simbolo Di Riciclaggio',
        'Logo Di Riciclo',
        ':green:'
    ],
    '🔱': [
        'Emblema Tridente',
        ':trident_emblem:',
        'Forchetta',
        'Tridente'
    ],
    '📛': [
        'Distintivo Nome',
        ':name_badge:',
        'Tofu In Fuoco',
        'Nome Tag',
        'Tag Di Fuoco'
    ],
    '🔰': [
        'Simbolo giapponese per principianti',
        ':japanese_symbol_beginner:',
        'Shoshinsha Mark',
        'Scudo Verde Giallo',
        ':green:',
        ':yellow:'
    ],
    '➰': [
        'Ciclo Riccio',
        ':curly_loop:',
        'Ciclo Di Curling',
        'Ciclo'
    ],
    '➿': [
        'Doppio Ciclo Riccio',
        ':double_curly_loop:',
        'Doppio Ciclo Di Curling',
        'Segreteria'
    ],
    '〽️': [
        'Marchio Alternativo Parte',
        ':part_alternation_mark:',
        'M',
        'McDonalds'
    ],
    '✳️': [
        'Otto Asterisco Lanciato',
        ':eight_spoked_asterisk:',
        ':green:'
    ],
    '✴️': [
        'Otto Stella Nera A Punto',
        ':eight_pointed_star:',
        'Stella Arancione',
        'Otto Stella A Punto',
        ':orange:'
    ],
    '❇️': [
        'Scintillio',
        ':sparkle:',
        ':green:'
    ],
    'Ⓜ️': [
        'Cerchiato M',
        'Circolo Latino Capitale Lettera M',
        ':circled_m:',
        'Metropolitana',
        ':blue:'
    ],
    '🈁': [
        'Segno Parola Giapponese Significato Qui',
        'Squared Katakana Koko',
        ':japanese_here:',
        'Qui',
        'Destinazione',
        ':blue:'
    ],
    '🈂️': [
        'Giapponese Significato Servizio o Servizio di Servizio',
        'Squared Katakana Sa',
        ':japanese_service:',
        ':blue:'
    ],
    '🈷️': [
        'Segno Giapponese Significato Importo Mensile',
        'Squared CJK Unified Ideograph-6708',
        ':japanese_monthly_amouny:',
        'Radicale 74',
        '月',
        ':orange:'
    ],
    '🈶': [
        'Segno Giapponese Significato Non Gratuito',
        'Squared CJK Unified Ideograph-6709',
        ':japanese_own:',
        'Proprio',
        '有',
        ':orange:'
    ],
    '🈯': [
        'Segno Giapponese Significato Riservato',
        'Ideografo Unificato Cjk Quadrato-6307',
        ':japanese_reserved:',
        'Punto Dito',
        '指',
        ':green:'
    ],
    '🉐': [
        'Segno Giapponese Significato Affare',
        'Ideografo Cerchiato Vantaggio',
        ':japanese_acquire:',
        'Acquisisci',
        '得',
        ':red:'
    ],
    '🈹': [
        'Sconto Significato Segno Giapponese',
        'Ideografo Unificato Cjk Quadrato-5272',
        ':japanese_discount:',
        'Vendita Bargain',
        '割',
        ':red:'
    ],
    '🈚': [
        'Firma Giapponese Significato Gratuito',
        'Ideografo Unificato Cjk Quadrato-7121',
        ':japanese_lacking:',
        'Mancante',
        '無',
        ':orange:'
    ],
    '🈲': [
        'Segno Giapponese Significato Vietato',
        'Ideografo Unificato Cjk Quadrato-7981',
        ':japanese_prohibited:',
        'Forbid',
        '禁',
        ':red:'
    ],
    '🉑': [
        'Firma Giapponese Significato Accettabile',
        'Accetta Ideografo Cercato',
        ':japanese_accept:',
        'Accetta',
        ':orange:'
    ],
    '🈸': [
        'Applicazione Significato Segno Giapponese',
        'Ideografo Unificato Cjk Quadrato-7533',
        ':japanese_application_form:',
        'Modulo Di Domanda',
        'Scimmia',
        'Richiesta',
        '申',
        ':orange:'
    ],
    '🈴': [
        'Segno Giapponese Significato Passaggio (Grade)',
        'Ideografo Unificato Cjk Quadrato-5408',
        ':japanese_agreement:',
        'Accordo',
        '合',
        ':red:'
    ],
    '🈳': [
        'Segno Giapponese Significato Vacancy',
        'Squared CJK Unified Ideograph-7a7A',
        ':japanese_available:',
        'Vuoto e disponibile',
        '空',
        ':blue:'
    ],
    '㊗️': [
        'Segno Giapponese Significato Congratulazioni',
        'Complimenti Ideografici Cerchiati',
        ':japanese_congratulations:',
        ':red:'
    ],
    '㊙️': [
        'Segreto Ideografo Cercato',
        ':japanese_secret:',
        'Segno Giapponese Significato Segreto',
        'Segreto',
        ':red:'
    ],
    '🈺': [
        'Firma Giapponese Significato Aperto per Affari',
        'Ideografo Unificato Cjk Quadrato-55B6',
        ':japanese_open_for_business:',
        'Lavoro',
        '営',
        ':orange:'
    ],
    '🈵': [
        'Segno Giapponese Significato Pieno; Senza Vacanza',
        'Squared CJK Unified Ideograph-6e80',
        ':japanese_full:',
        'Pieno',
        '満',
        ':red:'
    ],
    '🔘': [
        'Pulsante Scelta',
        ':radio_button:'
    ],
    '🛑': [
        'Firma Di Interruzione',
        ':stop_sign:',
        'Segno Ottagonale',
        ':red:'
    ],
    '⚕️': [
        'Simbolo Medico',
        ':medical_symbol:',
        'Aesculapius',
        'Asklepios',
        'Bacchetta di Asclepius',
        'Personale di Aesculapius'
    ],
    '🛗': [
        'Ascensore',
        ':elevator:',
        ':lift:',
        'Ascensore'
    ],
    '⚧️': [
        'Simbolo Transgender',
        ':transgender_sign:'
    ],
    '♂️': [
        'Cartello Maschio',
        ':male_sign:',
        'Simbolo Uomo',
        'Simbolo Marte'
    ],
    '♀️': [
        'Cartello Femminile',
        ':female_sign:',
        'Simbolo Donna',
        'Venus Symbol'
    ]
};
/*food and drinks*/
emojis_language[lang][6] = {
    '🍇': [
        'Uva',
        ':grapes:',
        'Uva',
        ':purple:'
    ],
    '🍈': [
        'Melone',
        ':melon:',
        'Cantaloupe',
        'Honeydew',
        'Muskmelon'
    ],
    '🍉': [
        'Anguria',
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
        'Limone',
        ':lemon:',
        'Limonata',
        ':yellow:'
    ],
    '🍌': [
        'Banane',
        ':banana:',
        'Piantina',
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
        'Mela Rossa',
        ':red_apple:',
        ':apple:',
        'Red Delicious Apple',
        ':red:'
    ],
    '🍏': [
        'Mela Verde',
        ':green_apple:',
        ':apple:',
        'Golden Delicious Apple',
        'Nonna Smith Apple',
        ':green:'
    ],
    '🍐': [
        'Pera',
        ':pear:'
    ],
    '🍑': [
        'Pesca',
        ':peach:',
        'Basso',
        'Butt',
        ':orange:',
        ':pink:'
    ],
    '🍒': [
        'Ciliege',
        ':cherry:',
        'Ciliegia',
        'Ciliegia Selvatica',
        ':red:'
    ],
    '🍓': [
        'Fragola',
        ':strawberry:',
        ':red:'
    ],
    '🥝': [
        'Frutta Di Kiwi',
        ':kiwi:',
        'Uva spina',
        'Kiwi',
        'Kiwi',
        ':green:'
    ],
    '🍅': [
        'Pomodoro',
        ':tomato:',
        ':red:'
    ],
    '🥥': [
        'Cocco',
        ':coconut:',
        'Cocoanut'
    ],
    '🥑': [
        'Avocado',
        ':avocado:',
        ':green:'
    ],
    '🍆': [
        'Melanzane',
        ':eggplant:',
        ':aubergine:',
        'Aubergine',
        'Phallic',
        'Verdura Viola',
        ':purple:'
    ],
    '🥔': [
        'Patata',
        ':potato:',
        'Patata Al Forno',
        'Patata Ddaho'
    ],
    '🥕': [
        'Carota',
        ':carrot:',
        ':orange:'
    ],
    '🌽': [
        'Orecchio di mais',
        ':ear_of_corn:',
        'Mais',
        'Mais On The Cob',
        'Granturco',
        'Orecchio di mais'
    ],
    '🌶️': [
        'Pepe Caldo',
        ':hot_pepper:',
        'Peperoni Di Peperoncino',
        'Speziato',
        ':red:'
    ],
    '🥒': [
        'Cetriolo',
        ':cucumber:',
        'Cetriolini',
        'Piccone',
        ':green:'
    ],
    '🥬': [
        'Verde A Foglia',
        ':leafy_green:',
        'Bok Choy',
        'Cavolo Cinese',
        'Cos Lettuce',
        'Lattuga Romena',
        'Verdi A Foglia',
        ':green:'
    ],
    '🥦': [
        'Broccoli',
        ':broccoli:',
        ':green:'
    ],
    '🍋‍🟩': [
        'Lime',
        ':lime:',
        ':green:'
    ],
    '🍄': [
        'Fungo',
        ':mushroom:',
        'Shroom',
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
        'Dadi',
        ':brown:'
    ],
    '🌰': [
        'Castagne',
        ':chestnut:',
        'Acorn',
        'Dado',
        ':brown:'
    ],
    '🍞': [
        'Pane',
        ':bread:',
        'Pane Da Pane',
        ':brown:'
    ],
    '🥐': [
        'Croissant',
        ':croissant:',
        ':brown:'
    ],
    '🥖': [
        'Pane Baguette',
        ':baguette_bread:',
        'Pane Francese',
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
        'Frittelle',
        ':pancakes:',
        'Cre<unk> pes',
        'Hotcakes',
        ':yellow:'
    ],
    '🧀': [
        'Zeppa Di Formaggi',
        ':cheese_wedge:',
        'Formaggi',
        ':yellow:'
    ],
    '🍖': [
        'Carne sull\'osso',
        ':meat_on_bone:',
        'BBQ',
        'Barbecue',
        'Carne Di Manga',
        ':red:'
    ],
    '🍗': [
        'Poultry Leg',
        ':poultry_leg:',
        'Drumstick',
        'Gamba Tacchina',
        ':red:'
    ],
    '🥩': [
        'Taglio di carne',
        ':cut_of_meat:',
        'Carne',
        'Bistecca',
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
        'Fries Francesi',
        ':french_fries:',
        'Chips',
        'Fries',
        'McDonalds Fries',
        ':yellow:'
    ],
    '🍕': [
        'Pizza',
        ':pizza:',
        'Pizza Pepperoni',
        'Fetta di Pizza',
        ':red:'
    ],
    '🌭': [
        'Cane Caldo',
        ':hot_dog:',
        'Hotdog',
        'Salsiccia',
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
        'Avvolgi'
    ],
    '🥙': [
        'Pane Piatto Ripieno',
        ':stuffed_flatbread:',
        'Doner Kebab',
        'Gyro',
        'Shawarma',
        'Pita Sandwich'
    ],
    '🍳': [
        'Cucinare',
        ':cooking:',
        'Colazione',
        'Uovo Fritto',
        'Friggitrice'
    ],
    '🥘': [
        'Pan poco profondo del cibo',
        ':shallow_pan_of_food:',
        'Paella',
        'Pan del cibo'
    ],
    '🍲': [
        'Vaso di cibo',
        ':pot_of_food:',
        'Ciotola Di Alimenti',
        'Zuppa',
        'Stufato'
    ],
    '🥣': [
        'Ciotola con cucchiaio',
        ':bowl_with_spoon:',
        'Ciotola Di Cereali'
    ],
    '🥗': [
        'Insalata Verde',
        ':green_salad:',
        'Insalata',
        ':green:'
    ],
    '🍿': [
        'Popcorn',
        ':popcorn:',
        'Mais Popping'
    ],
    '🧂': [
        'Sale',
        ':salt:',
        'Salt Shaker',
        ':white:'
    ],
    '🥫': [
        'Cibo In Scatola',
        ':canned_food:',
        'Può di Cibo',
        'Stagno Può',
        'Cibo In Scatola'
    ],
    '🍱': [
        'Bento Box',
        ':bento_box:',
        'Pranzo Box'
    ],
    '🍘': [
        'Cracker Di Riso',
        ':rice_cracker:',
        'Cracker'
    ],
    '🍙': [
        'Palla Di Riso',
        ':rice_ball:',
        'Onigiri'
    ],
    '🍚': [
        'Riso Cotto',
        ':cooked_rice:',
        'Riso Bollito',
        'Riso',
        'Ciotola Di Riso',
        'Riso A Vapore'
    ],
    '🍛': [
        'Riso Di Curry',
        ':curry_rice:',
        'Curry',
        'Alimenti Indiani',
        'Curry e riso'
    ],
    '🍜': [
        'Ciotola A Vapore',
        ':steaming_bowl:',
        'Noodles',
        'Noodles Con Bacchette',
        'Ramen'
    ],
    '🍝': [
        'Spaghetti',
        ':spaghetti:',
        'Pasta'
    ],
    '🍠': [
        'Patata Dolce Arrosto',
        ':roasted_sweet_potato:',
        'Patata Dolce',
        'Igname'
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
        'Frutti',
        ':pink:'
    ],
    '🍤': [
        'Gamberetti Fritti',
        ':fried_shrimp:',
        'Gamberetto Fritto',
        'Tempura Dei Gamberetti'
    ],
    '🍥': [
        'Torta di pesce con vortice',
        ':fish_cake_with_swirl:',
        'Torta',
        'Pink Swirl'
    ],
    '🥮': [
        'Torta Lunare',
        ':moon_cake:',
        'Torta Lunare'
    ],
    '🍡': [
        'Dango',
        ':dango:',
        'Bastone Dessert',
        'Palle Bianco Rosa Verde'
    ],
    '🥟': [
        'Raviolamento',
        ':dumpling:',
        'Empanada',
        'Pierogi'
    ],
    '🥠': [
        'Biscotto Della Fortuna',
        ':fortune_cookie:'
    ],
    '🥡': [
        'Casella Di Ritiro',
        ':takeout_box:',
        'Scatola Cibo Cinese',
        'Oyster Pail'
    ],
    '🍦': [
        'Gelato Morbido',
        ':soft_ice_cream:',
        'Whippy',
        'Servizio Morbido'
    ],
    '🍧': [
        'Ghiaccio Rasato',
        ':shaved_ice:',
        'Cono Di Neve'
    ],
    '🍨': [
        'Gelato',
        ':ice_cream:',
        'Ciotola Di Gelato',
        'Dessert'
    ],
    '🍩': [
        'Ciambella',
        ':doughnut:',
        'Donut'
    ],
    '🍪': [
        'Cookie',
        ':cookie:',
        'Biscotto',
        'Biscotto Cioccolato',
        ':brown:'
    ],
    '🎂': [
        'Torta Di Compleanno',
        ':birthday_cake:',
        'Compleanno',
        'Torta',
        'Torta Con Candele'
    ],
    '🍰': [
        'Torta Corta',
        ':shortcake:',
        'Torta',
        'Pezzo Di Torta',
        'Dolcetto Alla Fragola'
    ],
    '🧁': [
        'Cupcake',
        ':cupcake:',
        'Torta Fata'
    ],
    '🥧': [
        'Torta',
        ':pie:'
    ],
    '🍫': [
        'Barra Al Cioccolato',
        ':chocolate_bar:',
        'Barra Di Caramelle',
        'Cioccolata',
        ':brown:'
    ],
    '🍬': [
        'Caramelle',
        ':candy:',
        'Lolly',
        'Dolce'
    ],
    '🍭': [
        'Lollipop',
        ':lollipop:',
        'Sucker'
    ],
    '🍮': [
        'Custard',
        ':custard:',
        'Creme Caramel',
        'Dessert',
        'Flan',
        'Pudding'
    ],
    '🍯': [
        'Pentola Del Miele',
        ':honey_pot:',
        'Miele',
        'Vaso',
        ':yellow:'
    ],
    '🍼': [
        'Bottiglia Del Bambino',
        ':baby_bottle:',
        'Alimentazione Della Bottiglia'
    ],
    '🥛': [
        'Vetro di latte',
        ':glass_of_milk:',
        'Latte',
        ':white:'
    ],
    '☕': [
        'Bevande Calde',
        ':hot_beverage:',
        'Caffè',
        'Espresso',
        'Cioccolato Caldo',
        'Tè'
    ],
    '🍵': [
        'Teacup Senza Maniglia',
        ':green_tea:',
        'Tè Verde',
        'Matcha',
        'Tè Verde Matcha',
        ':green:'
    ],
    '🍶': [
        'Sake',
        ':sake:',
        'Bottiglia',
        'Vino Di Riso',
        'Bottiglia di Sake e tazza'
    ],
    '🍾': [
        'Bottiglia con tappo popping',
        ':champagne:',
        'Celebrazione',
        'Champagne',
        'Vino Spumante'
    ],
    '🍷': [
        'Bicchiere Da Vino',
        ':wine_glass:',
        'Alcol',
        'Vino Rosso',
        'Vino'
    ],
    '🍸': [
        'Vetro Da Cocktail',
        ':cocktail_glass:',
        'Cocktail',
        'Martini'
    ],
    '🍹': [
        'Bevanda Tropicale',
        ':tropical_drink:',
        'Punch Di Frutta',
        'Bevanda Di Tiki'
    ],
    '🍺': [
        'Tazza Di Birra',
        ':beer_mug:',
        'Birra',
        'Birra Stein',
        ':yellow:'
    ],
    '🍻': [
        'Tazze Di Birra Attaccante',
        ':clinking_beer_mugs:',
        'Birre',
        'Saluti'
    ],
    '🥂': [
        'Occhiali Di Collegamento',
        ':clinking_glasses:',
        'Celebrazione',
        'Bicchieri Di Champagne',
        'Saluti'
    ],
    '🥃': [
        'Vetro Tumbler',
        ':tumbler_glass:',
        'Bourbon',
        'Liquore',
        'Rum',
        'Whiskey',
        'Whisky'
    ],
    '🥤': [
        'Coppa con paglia',
        ':cup_with_straw:',
        'Milkshake',
        'Smoothie',
        'Soda Pop',
        'Bevanda Morbida'
    ],
    '🥢': [
        'Bacchette',
        ':chopsticks:'
    ],
    '🍽️': [
        'Forchetta e coltello con piastra',
        ':fork_and_knife_with_plate:',
        'Cena',
        ':white:',
        ':gray:',
        ':grey:'
    ],
    '🍴': [
        'Forchetta e coltello',
        ':fork_and_knife:',
        'Posate',
        'Coltello E Forchetta',
        'Silverware',
        ':gray:',
        ':grey:'
    ],
    '🥄': [
        'Cucchiaio',
        ':spoon:',
        ':gray:',
        ':grey:'
    ],
    '🧄': [
        'Agli',
        ':garlic:'
    ],
    '🧅': [
        'Cipolla',
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
        'Burro',
        ':butter:'
    ],
    '🦪': [
        'Oyster',
        ':oyster:'
    ],
    '🧃': [
        'Bevanda Box',
        ':beverage_box:',
        'Scatola Di Succo'
    ],
    '🧉': [
        'Bevanda Di Mate',
        ':mate_drink:',
        'Chimarra<unk> o',
        'Cimarrón',
        'Yerba Mate'
    ],
    '🫒': [
        'Olive',
        ':olive:',
        ':green:'
    ],
    '🫐': [
        'Mirtilli',
        ':blueberries:',
        ':blue:'
    ],
    '🫑': [
        'Pepe Di Campana',
        ':bell_pepper:',
        ':green:'
    ],
    '🫓': [
        'Pane Piatto',
        ':flatbread:'
    ],
    '🫔': [
        'Tamale',
        ':tamale:',
        'Tamal'
    ],
    '🫕': [
        'Fondue',
        ':fondue:'
    ],
    '🧋': [
        'Tè Della Bolla',
        ':boba:',
        'Boba'
    ],
    '🧊': [
        'Cubo Di Ghiaccio',
        ':ice_cube:'
    ],
    '🫘': [
        'Beans',
        'Flatulence',
        ':beans:',
        'Chicchi di caffè',
        'Spill the beans'
    ],
    '🫗': [
        'Liquido Colorante',
        ':puring_liquid:',
        'Pouring Drink',
        'Acqua'
    ]
};
/*flags*/
emojis_language[lang][7] = {
    '🏁': [
        'Bandiera A Scacchi',
        ':chequered_flag:',
        'Contrassegno A Scacchi',
        'Grid Girl',
        'Bandiera Da Corsa',
        ':black:',
        ':white:'
    ],
    '🚩': [
        'Bandiera Triangolare',
        ':triangular_flag:',
        'Bandiera sul palo',
        'Bandiera Rossa',
        'Bandiera triangolare sul Post',
        ':red:'
    ],
    '🎌': [
        'Bandiere Incrociate',
        ':crossed_flags:',
        'Due Bandiere'
    ],
    '🏴': [
        'Bandiera Nera',
        ':black_flag:',
        'Bandiera Nera Ondata',
        ':black:'
    ],
    '🏳️': [
        'Bandiera Bianca',
        ':white_flag:',
        'Bandiera Bianco Ondulante',
        ':white:'
    ],
    '🏳️‍🌈': [
        'Bandiera Arcobaleno',
        ':rainbow_flag:',
        'Pride Flag',
        'LGBT',
        'LGBTQIA+',
        'Gay',
        'Transgender',
        'Lesbian',
        'Asessuale',
        'Queer'
    ],
    '🏳️‍⚧️': [
        'Bandiera Transgender',
        ':transgender_flag:',
        'Bandiera blu, rosa e bianca',
        'Bandiera Trans',
        'Blue',
        'Pink'
    ],
    '🏴‍☠️': [
        'Bandiera Pirata',
        ':pirate_flag:',
        'Jolly Roger',
        ':black:',
        'Corsair',
        'Privateer',
        'Buccaneer'
    ],
    '🇺🇳': [
        'Bandiera delle Nazioni Unite',
        ':un:',
        'Bandiera: Nazioni Unite'
    ],
    '🇪🇺': [
        'Bandiera dell\'Unione europea',
        ':eu:',
        'Bandiera: Unione Europea',
        'EU Flag'
    ],
    '🇦🇨': [
        'Bandiera dell\'Isola dell\'Ascensione',
        ':ac:'
    ],
    '🇦🇩': [
        'Bandiera di Andorra',
        ':ad:',
        'Andorran Flag'
    ],
    '🇦🇪': [
        'Bandiera degli Emirati Arabi Uniti',
        ':ae:',
        'Emirati Flag',
        'Bandiera EAU'
    ],
    '🇦🇫': [
        'Bandiera dell\'Afghanistan',
        ':af:',
        'Afghan Flag'
    ],
    '🇦🇬': [
        'Bandiera di Antigua e Barbuda',
        ':ag:'
    ],
    '🇦🇮': [
        'Bandiera di Anguilla',
        ':ai:',
        'Bandiera Di Anguillan'
    ],
    '🇦🇱': [
        'Bandiera dell\'Albania',
        ':al:',
        'Bandiera Albanese'
    ],
    '🇦🇲': [
        'Bandiera dell’Armenia',
        ':am:',
        'Bandiera Armenia'
    ],
    '🇦🇴': [
        'Bandiera dell\'Angola',
        ':ao:',
        'Bandiera Angolana'
    ],
    '🇦🇶': [
        'Bandiera dell\'Antartide',
        ':aq:',
        'Bandiera Antartica'
    ],
    '🇦🇷': [
        'Bandiera dell\'Argentina',
        ':ar:',
        'Bandiera Argentina'
    ],
    '🇦🇸': [
        'Bandiera della Samoa Americana',
        ':as:',
        'American Samoan Flag'
    ],
    '🇦🇹': [
        'Bandiera dell’Austria',
        ':at:',
        'Austrian Flag'
    ],
    '🇦🇺': [
        'Bandiera dell\'Australia',
        ':au:',
        'Bandiera Aussie',
        'Bandiera Australiana'
    ],
    '🇦🇼': [
        'Bandiera di Aruba',
        ':aw:',
        'Bandiera Aruban'
    ],
    '🇦🇽': [
        'Bandiera delle Isole A<unk> land',
        ':ax:',
        'Bandiera A<unk> land'
    ],
    '🇦🇿': [
        'Bandiera dell\'Azerbaigian',
        ':az:',
        'Bandiera Azerbaigian'
    ],
    '🇧🇦': [
        'Bandiera della Bosnia-Erzegovina',
        ':ba:'
    ],
    '🇧🇧': [
        'Bandiera delle Barbados',
        ':bb:',
        'Bandiera Barbadiana',
        'Bandiera Bajan'
    ],
    '🇧🇩': [
        'Bandiera del Bangladesh',
        ':bd:',
        'Bangladeshi Flag'
    ],
    '🇧🇪': [
        'Bandiera del Belgio',
        ':be:',
        'Bandiera Belga'
    ],
    '🇧🇫': [
        'Bandiera del Burkina Faso',
        ':bf:',
        'Bandiera Burkinabe'
    ],
    '🇧🇬': [
        'Bandiera della Bulgaria',
        ':bg:',
        'Bandiera Bulgara'
    ],
    '🇧🇭': [
        'Bandiera del Bahrain',
        ':bh:',
        'Bandiera Bahrani',
        'Bandiera Bahrainiana'
    ],
    '🇧🇮': [
        'Bandiera del Burundi',
        ':bi:',
        'Burundian Flag'
    ],
    '🇧🇯': [
        'Bandiera del Benin',
        ':bj:',
        'Bandiera Beninese'
    ],
    '🇧🇱': [
        'Bandiera di Saint Barthe<unk> lemy',
        ':bl:',
        'Bandiera: San Barteo'
    ],
    '🇧🇲': [
        'Bandiera delle Bermuda',
        ':bm:',
        'Bermudan Flag'
    ],
    '🇧🇳': [
        'Bandiera del Brunei',
        ':bn:',
        'Bandiera Bruneiana'
    ],
    '🇧🇴': [
        'Bandiera della Bolivia',
        ':bo:',
        'Bolivian Flag'
    ],
    '🇧🇶': [
        'Bandiera dei Caraibi Paesi Bassi',
        ':bq:',
        'Bonaire'
    ],
    '🇧🇷': [
        'Bandiera del Brasile',
        ':br:',
        'Bandiera Brasiliana'
    ],
    '🇧🇸': [
        'Bandiera delle Bahamas',
        ':bs:',
        'Bandiera Bahamiana'
    ],
    '🇧🇹': [
        'Bandiera del Bhutan',
        ':bt:',
        'Bandiera Bhutanese'
    ],
    '🇧🇻': [
        'Bandiera dell\'isola di Bouvet',
        ':bv:',
        'Bandiera: Isola Bouvet'
    ],
    '🇧🇼': [
        'Bandiera del Botswana',
        ':bw:',
        'Batswana Flag'
    ],
    '🇧🇾': [
        'Bandiera della Bielorussia',
        ':by:',
        'Bandiera Bielorussa'
    ],
    '🇧🇿': [
        'Bandiera del Belize',
        ':bz:',
        'Bandiera Belizea'
    ],
    '🇨🇦': [
        'Bandiera del Canada',
        'Bandiera Canadese',
        ':ca:'
    ],
    '🇨🇨': [
        'Bandiera delle Isole Cocos (Keeling)',
        ':cc:'
    ],
    '🇨🇩': [
        'Flag of Congo - Kinshasa',
        ':cd:'
    ],
    '🇨🇫': [
        'Bandiera della Repubblica Centrafricana',
        ':cf:',
        'Bandiera Centrafricana'
    ],
    '🇨🇬': [
        'Bandiera del Congo - Brazzaville',
        ':cg:'
    ],
    '🇨🇭': [
        'Bandiera della Svizzera',
        ':ch:',
        'Croce Rossa',
        'Bandiera Svizzera'
    ],
    '🇨🇮': [
        'Bandiera della Costa d\'Avorio',
        ':ci:',
        'Flag: Côte d’Ivoire'
    ],
    '🇨🇰': [
        'Bandiera delle Isole Cook',
        ':ck:',
        'Bandiera Dell\'Isola Di Cook'
    ],
    '🇨🇱': [
        'Bandiera del Cile',
        ':cl:',
        'Bandiera Cilena'
    ],
    '🇨🇲': [
        'Bandiera del Camerun',
        ':cm:',
        'Bandiera Camerunese'
    ],
    '🇨🇳': [
        'Bandiera della Cina',
        ':cn:',
        'Bandiera Cinese'
    ],
    '🇨🇴': [
        'Bandiera della Colombia',
        ':co:',
        'Bandiera Colombiana'
    ],
    '🇨🇵': [
        'Bandiera dell\'isola di Clipperton',
        ':cp:',
        'Bandiera: Clipperton Island'
    ],
    '🇨🇷': [
        'Bandiera della Costa Rica',
        ':cr:',
        'Bandiera Costa Rica'
    ],
    '🇨🇺': [
        'Bandiera di Cuba',
        ':cu:',
        'Bandiera Cubana'
    ],
    '🇨🇻': [
        'Bandiera di Capo Verde',
        ':cv:',
        'Bandiera Capo Verdian'
    ],
    '🇨🇼': [
        'Bandiera di Curac<unk> ao',
        ':cw:',
        'Curaçaoan Flag'
    ],
    '🇨🇽': [
        'Bandiera dell\'Isola di Natale',
        ':cx:',
        'Bandiera Isola Di Natale'
    ],
    '🇨🇾': [
        'Bandiera di Cipro',
        ':cy:',
        'Bandiera Cipriota'
    ],
    '🇨🇿': [
        'Bandiera della Czechia',
        ':cz:',
        'Bandiera Ceca'
    ],
    '🇩🇪': [
        'Bandiera della Germania',
        ':de:',
        'Bandiera Deutsch',
        'Bandiera Tedesca'
    ],
    '🇩🇬': [
        'Bandiera di Diego Garcia',
        ':dg:',
        'Bandiera: Diego Garcia'
    ],
    '🇩🇯': [
        'Bandiera di Gibuti',
        ':dj:',
        'Djibouti Flag',
        'Djiboutian Flag'
    ],
    '🇩🇰': [
        'Bandiera della Danimarca',
        ':dk:',
        'Bandiera Danese'
    ],
    '🇩🇲': [
        'Bandiera di Dominica',
        ':dm:'
    ],
    '🇩🇴': [
        'Bandiera della Repubblica Dominicana',
        ':do:',
        'Contrassegno Dom Rep',
        'Bandiera Dominicana'
    ],
    '🇩🇿': [
        'Bandiera dell\'Algeria',
        ':dz:',
        'Algerian Flag'
    ],
    '🇪🇦': [
        'Bandiera di Ceuta & Melilla',
        ':ea:',
        'Bandiera di Melilla',
        'Bandiera di Ceuta',
        'Flag: Ceuta & Melilla'
    ],
    '🇪🇨': [
        'Bandiera dell\'Ecuador',
        ':ec:',
        'Ecuadorian Flag'
    ],
    '🇪🇪': [
        'Bandiera dell\'Estonia',
        ':ee:',
        'Bandiera Estone'
    ],
    '🇪🇬': [
        'Bandiera dell\'Egitto',
        ':eg:',
        'Bandiera Egiziana'
    ],
    '🇪🇭': [
        'Bandiera del Sahara occidentale',
        ':eh:',
        'Bandiera Del Sahara Occidentale'
    ],
    '🇪🇷': [
        'Bandiera dell\'Eritrea',
        ':er:',
        'Eritrean Flag'
    ],
    '🇪🇹': [
        'Bandiera dell\'Etiopia',
        ':et:',
        'Ethiopian Flag'
    ],
    '🇪🇸': [
        'Bandiera della Spagna',
        ':es:',
        'Bandiera Spagnola'
    ],
    '🇫🇮': [
        'Bandiera della Finlandia',
        ':fi:',
        'Bandiera Finlandese'
    ],
    '🇫🇯': [
        'Bandiera delle Figi',
        ':fj:',
        'Fijian Flag'
    ],
    '🇫🇰': [
        'Bandiera delle Isole Falkland',
        ':fk:',
        'Bandiera Falklander'
    ],
    '🇫🇲': [
        'Bandiera della Micronesia',
        ':fm:',
        'Bandiera Micronesiana'
    ],
    '🇫🇴': [
        'Bandiera delle Isole Færøer',
        ':fo:',
        'Faroe Islander Flag'
    ],
    '🇫🇷': [
        'Bandiera della Francia',
        ':fr:',
        'Bandiera Francese'
    ],
    '🇬🇦': [
        'Bandiera del Gabon',
        ':ga:',
        'Bandiera Gabonese'
    ],
    '🇬🇧': [
        'Bandiera della Gran Bretagna',
        ':gb:',
        'Bandiera Britannica',
        'Regno Unito',
        'Union Jack',
        'UK'
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
        'Bandiera di Grenada',
        ':gd:',
        'Bandiera Grenadiana'
    ],
    '🇬🇪': [
        'Bandiera della Georgia',
        ':ge:',
        'Bandiera Georgiana'
    ],
    '🇬🇫': [
        'Bandiera della Guiana Francese',
        ':gf:',
        'Bandiera Della Guinea Francese'
    ],
    '🇬🇬': [
        'Bandiera di Guernsey',
        ':gg:',
        'Guernsey Flag'
    ],
    '🇬🇭': [
        'Bandiera del Ghana',
        ':gh:',
        'Bandiera Ghana'
    ],
    '🇬🇮': [
        'Bandiera di Gibilterra',
        ':gi:',
        'Bandiera Gibilterra'
    ],
    '🇬🇱': [
        'Bandiera della Groenlandia',
        ':gl:',
        'Greenlandic Flag'
    ],
    '🇬🇲': [
        'Bandiera della Gambia',
        ':gm:',
        'Gambian Flag'
    ],
    '🇬🇳': [
        'Bandiera della Guinea',
        ':gn:',
        'Guinean Flag'
    ],
    '🇬🇵': [
        'Bandiera della Guadalupa',
        ':gp:',
        'Bandiera Guadalupa'
    ],
    '🇬🇶': [
        'Bandiera della Guinea Equatoriale',
        ':gq:',
        'Equatorial Guinean Flag',
        'Bandiera Equatoguineana'
    ],
    '🇬🇷': [
        'Bandiera della Grecia',
        ':gr:',
        'Bandiera Greca'
    ],
    '🇬🇸': [
        'Bandiera della Georgia del Sud e delle Isole Sandwich del Sud',
        ':gs:'
    ],
    '🇬🇹': [
        'Bandiera del Guatemala',
        ':gt:',
        'Guatemalan Flag'
    ],
    '🇬🇺': [
        'Bandiera di Guam',
        ':gu:',
        'Bandiera Guamaniana',
        'Bandiera Chamorro'
    ],
    '🇬🇼': [
        'Bandiera della Guinea-Bissau',
        ':gw:',
        'Guinea-Bissau Flag'
    ],
    '🇬🇾': [
        'Bandiera della Guiana',
        ':gy:',
        'Bandiera Guyanese'
    ],
    '🇭🇰': [
        'Bandiera di Hong Kong SAR Cina',
        ':hk:',
        'Bandiera Di Hong Kong'
    ],
    '🇭🇲': [
        'Bandiera delle Isole Heard & McDonald',
        ':hm:',
        'Bandiera: Isole Heard & McDonald'
    ],
    '🇭🇳': [
        'Bandiera dell\'Honduras',
        ':hn:',
        'Bandiera Honduran'
    ],
    '🇭🇷': [
        'Bandiera della Croazia',
        ':hr:',
        'Bandiera Croata'
    ],
    '🇭🇹': [
        'Bandiera di Haiti',
        ':ht:',
        'Haitian Flag'
    ],
    '🇭🇺': [
        'Bandiera dell\'Ungheria',
        ':hu:',
        'Bandiera Ungherese'
    ],
    '🇮🇨': [
        'Bandiera delle Isole Canarie',
        ':ic:'
    ],
    '🇮🇩': [
        'Bandiera dell\'Indonesia',
        ':id:',
        'Bandiera Indonesiana'
    ],
    '🇮🇪': [
        'Bandiera dell\'Irlanda',
        ':ie:',
        'Bandiera Irlandese'
    ],
    '🇮🇱': [
        'Bandiera di Israele',
        ':il:',
        'Bandiera Israeliana'
    ],
    '🇮🇲': [
        'Bandiera dell\'Isola di Man',
        ':im:',
        'Manx Flag'
    ],
    '🇮🇳': [
        'Bandiera dell\'India',
        ':in:',
        'Bandiera Indiana'
    ],
    '🇮🇴': [
        'Bandiera del Territorio britannico dell\'Oceano Indiano',
        ':io:',
        'Bandiera Britannica Del Territorio Dell\'Oceano Indiano'
    ],
    '🇮🇶': [
        'Bandiera dell\'Iraq',
        ':iq:',
        'Iraqi Flag'
    ],
    '🇮🇷': [
        'Bandiera dell\'Iran',
        ':ir:',
        'Bandiera Iraniana'
    ],
    '🇮🇸': [
        'Bandiera dell\'Islanda',
        ':is:',
        'Bandiera Islandese'
    ],
    '🇮🇹': [
        'Bandiera d’Italia',
        ':it:',
        'Bandiera Italiana'
    ],
    '🇯🇪': [
        'Bandiera di Jersey',
        ':je:',
        'Bandiera Jersey'
    ],
    '🇯🇲': [
        'Bandiera della Giamaica',
        ':jm:',
        'Bandiera Giamaicana'
    ],
    '🇯🇴': [
        'Bandiera della Giordania',
        ':jo:',
        'Bandiera Giordana'
    ],
    '🇯🇵': [
        'Bandiera del Giappone',
        ':jp:',
        'Bandiera Giapponese'
    ],
    '🇰🇪': [
        'Bandiera del Kenya',
        ':ke:',
        'Bandiera Keniota'
    ],
    '🇰🇬': [
        'Bandiera del Kirghizistan',
        ':kg:',
        'Kyrgyzstani Flag'
    ],
    '🇰🇭': [
        'Bandiera della Cambogia',
        ':kh:',
        'Bandiera Cambogiana'
    ],
    '🇰🇮': [
        'Bandiera di Kiribati',
        ':ki:',
        'Bandiera I-Kiribati'
    ],
    '🇰🇲': [
        'Bandiera delle Comore',
        ':km:',
        'Bandiera Delle Comore'
    ],
    '🇰🇳': [
        'Bandiera di Saint Kitts e Nevis',
        ':kn:'
    ],
    '🇰🇵': [
        'Bandiera della Corea del Nord',
        ':kp:',
        'Bandiera Nordcoreana'
    ],
    '🇰🇷': [
        'Bandiera della Corea del Sud',
        ':kr:',
        'Bandiera Sudcoreana'
    ],
    '🇰🇼': [
        'Bandiera del Kuwait',
        ':kw:',
        'Kuwaiti Flag'
    ],
    '🇰🇾': [
        'Bandiera delle Isole Cayman',
        ':ky:',
        'Bandiera Di Caymanian'
    ],
    '🇰🇿': [
        'Bandiera del Kazakistan',
        ':kz:',
        'Kazakhstani Flag',
        'Kazakh Flag'
    ],
    '🇱🇦': [
        'Bandiera del Laos',
        ':la:',
        'Bandiera Laotiana',
        'Bandiera Del Lao'
    ],
    '🇱🇧': [
        'Bandiera del Libano',
        ':lb:',
        'Bandiera Libanese'
    ],
    '🇱🇨': [
        'Bandiera di Santa Lucia',
        ':lc:'
    ],
    '🇱🇮': [
        'Bandiera del Liechtenstein',
        ':lt:',
        'Bandiera Del Liechtensteiner'
    ],
    '🇱🇰': [
        'Bandiera dello Sri Lanka',
        ':lk:',
        'Bandiera Dello Sri Lanka'
    ],
    '🇱🇷': [
        'Bandiera della Liberia',
        ':lr:',
        'Bandiera Liberiana'
    ],
    '🇱🇸': [
        'Flag of Lesotho',
        ':ls:',
        'Basotho Flag'
    ],
    '🇱🇹': [
        'Bandiera della Lituania',
        ':lt:',
        'Bandiera Lituana'
    ],
    '🇱🇺': [
        'Bandiera del Lussemburgo',
        ':lu:',
        'Bandiera Del Lussemburgo'
    ],
    '🇱🇻': [
        'Bandiera della Lettonia',
        ':lv:',
        'Bandiera Lettone'
    ],
    '🇱🇾': [
        'Bandiera della Libia',
        ':ly:',
        'Bandiera Libica'
    ],
    '🇲🇦': [
        'Bandiera del Marocco',
        ':ma:',
        'Bandiera Marocchina'
    ],
    '🇲🇨': [
        'Bandiera di Monaco',
        ':mc:',
        'Bandiera Mone<unk> gasque'
    ],
    '🇲🇩': [
        'Bandiera della Moldova',
        ':md:',
        'Bandiera Moldava'
    ],
    '🇲🇪': [
        'Bandiera del Montenegro',
        ':me:',
        'Bandiera Del Montenegro'
    ],
    '🇲🇫': [
        'Bandiera di Saint Martin',
        ':mf:',
        'Flag: St. Martin'
    ],
    '🇲🇬': [
        'Bandiera del Madagascar',
        ':mg:',
        'Madagascan Flag'
    ],
    '🇲🇭': [
        'Bandiera delle Isole Marshall',
        ':mh:',
        'Bandiera Marshallese'
    ],
    '🇲🇰': [
        'Bandiera della Macedonia',
        ':mk:',
        'Bandiera Macedone'
    ],
    '🇲🇱': [
        'Bandiera del Mali',
        ':ml:',
        'Bandiera Maliana'
    ],
    '🇲🇲': [
        'Bandiera di Myanmar (Birmania)',
        ':mm:',
        'Bandiera Myanmarese',
        'Bandiera Per La Birmania',
        'Bandiera Birmana'
    ],
    '🇲🇳': [
        'Bandiera della Mongolia',
        ':mn:',
        'Bandiera Mongola'
    ],
    '🇲🇴': [
        'Bandiera di Macao Sar Cina',
        ':mo:',
        'Bandiera Macanese'
    ],
    '🇲🇵': [
        'Bandiera delle Isole Marianne Settentrionali',
        ':mp:',
        'Bandiera Micronesiana'
    ],
    '🇲🇶': [
        'Bandiera della Martinica',
        ':mq:',
        'Bandiera del serpente della Martinica',
        'Bandiera Martiniquais'
    ],
    '🇲🇷': [
        'Bandiera della Mauritania',
        ':mr:',
        'Bandiera Mauritana'
    ],
    '🇲🇸': [
        'Flag of Montserrat',
        ':ms:',
        'Montserratian Flag'
    ],
    '🇲🇹': [
        'Bandiera di Malta',
        ':mt:',
        'Maltese Flag'
    ],
    '🇲🇺': [
        'Flag of Mauritius',
        ':mu:',
        'Bandiera Mauritiana'
    ],
    '🇲🇻': [
        'Bandiera delle Maldive',
        ':mv:',
        'Bandiera Maldiviana'
    ],
    '🇲🇼': [
        'Bandiera del Malawi',
        ':mw:',
        'Malawian Flag'
    ],
    '🇲🇽': [
        'Bandiera del Messico',
        ':mx:',
        'Bandiera Messicana'
    ],
    '🇲🇾': [
        'Bandiera della Malaysia',
        ':my:',
        'Malaysian Flag'
    ],
    '🇲🇿': [
        'Bandiera del Mozambico',
        ':mz:',
        'Bandiera Mozambicana'
    ],
    '🇳🇦': [
        'Bandiera della Namibia',
        ':na:',
        'Namibian Flag'
    ],
    '🇳🇨': [
        'Bandiera della Nuova Caledonia',
        ':nc:',
        'Nuova Bandiera Caledonica'
    ],
    '🇳🇪': [
        'Bandiera del Niger',
        ':ne:',
        'Bandiera Nigerien'
    ],
    '🇳🇫': [
        'Bandiera dell\'isola di Norfolk',
        ':nf:',
        'Bandiera Isola Norfolk'
    ],
    '🇳🇬': [
        'Bandiera della Nigeria',
        ':ng:',
        'Bandiera Nigeriana'
    ],
    '🇳🇮': [
        'Flag of Nicaragua',
        ':ni:',
        'Nicaraguan Flag'
    ],
    '🇳🇱': [
        'Bandiera dei Paesi Bassi',
        ':nl:',
        'Bandiera Olandese',
        'Olanda'
    ],
    '🇳🇴': [
        'Bandiera della Norvegia',
        ':no:',
        'Bandiera Norvegese'
    ],
    '🇳🇵': [
        'Bandiera del Nepal',
        ':np:',
        'Bandiera Nepalese'
    ],
    '🇳🇷': [
        'Bandiera di Nauru',
        ':nr:',
        'Nauruan Flag'
    ],
    '🇳🇺': [
        'Bandiera di Niue',
        ':nu:',
        'Niuean Flag'
    ],
    '🇳🇿': [
        'Bandiera della Nuova Zelanda',
        ':nz:',
        'Bandiera Kiwi'
    ],
    '🇴🇲': [
        'Bandiera dell\'Oman',
        ':om:',
        'Bandiera Dell\'Omani'
    ],
    '🇵🇦': [
        'Bandiera di Panama',
        ':pa:',
        'Bandiera Panamense'
    ],
    '🇵🇪': [
        'Bandiera del Perù',
        ':pe:',
        'Bandiera Peruviana'
    ],
    '🇵🇫': [
        'Bandiera della Polinesia francese',
        ':pf:',
        'Bandiera Polinesiana Francese'
    ],
    '🇵🇬': [
        'Bandiera della Papua Nuova Guinea',
        ':pg:',
        'Bandiera PNG',
        'Papua New Guinean Flag'
    ],
    '🇵🇭': [
        'Bandiera delle Filippine',
        ':ph:'
    ],
    '🇵🇰': [
        'Bandiera del Pakistan',
        ':pk:',
        'Bandiera Pakistana'
    ],
    '🇵🇱': [
        'Bandiera della Polonia',
        ':pl:',
        'Bandiera Polacca'
    ],
    '🇵🇲': [
        'Bandiera di Saint Pierre e Miquelon',
        ':pm:'
    ],
    '🇵🇳': [
        'Bandiera di Pitcairn',
        ':pn:'
    ],
    '🇵🇷': [
        'Bandiera di Porto Rico',
        ':pr:',
        'Bandiera Portoricana'
    ],
    '🇵🇸': [
        'Bandiera dei Territori Palestinesi',
        ':ps:',
        'Palestine'
    ],
    '🇵🇹': [
        'Bandiera del Portogallo',
        ':pt:',
        'Bandiera Portoghese'
    ],
    '🇵🇼': [
        'Bandiera di Palau',
        ':pw:',
        'Bandiera Palauan'
    ],
    '🇵🇾': [
        'Bandiera del Paraguay',
        ':py:',
        'Paraguayan Flag'
    ],
    '🇶🇦': [
        'Bandiera del Qatar',
        ':qa:',
        'Bandiera Qatar'
    ],
    '🇷🇪': [
        'Bandiera di Re<unk> union',
        ':re:',
        'Bandiera di Reжunionnais'
    ],
    '🇷🇴': [
        'Bandiera della Romania',
        ':ro:',
        'Bandiera Rumena'
    ],
    '🇷🇸': [
        'Bandiera della Serbia',
        ':rs:',
        'Bandiera Serba'
    ],
    '🇷🇺': [
        'Bandiera della Russia',
        ':ru:',
        'Bandiera Russa'
    ],
    '🇷🇼': [
        'Flag of Rwanda',
        ':rw:',
        'Rwandan Flag'
    ],
    '🇸🇦': [
        'Bandiera dell\'Arabia Saudita',
        ':sa:',
        'Bandiera Araba Saudita'
    ],
    '🇸🇧': [
        'Bandiera delle Isole Salomone',
        ':sb:',
        'Bandiera Dell\'Isola Di Salomone'
    ],
    '🇸🇨': [
        'Bandiera delle Seychelles',
        ':sc:',
        'Seychellois Flag'
    ],
    '🇸🇩': [
        'Bandiera del Sudan',
        ':sd:',
        'Sudanese Flag'
    ],
    '🇸🇪': [
        'Bandiera della Svezia',
        ':se:',
        'Bandiera Svedese'
    ],
    '🇸🇬': [
        'Bandiera di Singapore',
        ':sg:',
        'Bandiera Di Singapore'
    ],
    '🇸🇭': [
        'Bandiera di Sant\'Elena',
        ':sh:'
    ],
    '🇸🇮': [
        'Bandiera della Slovenia',
        ':si:',
        'Bandiera Slovena'
    ],
    '🇸🇯': [
        'Bandiera di Svalbard e Jan Mayen',
        ':sj:'
    ],
    '🇸🇰': [
        'Bandiera della Slovacchia',
        ':sk:',
        'Bandiera Slovacca',
        'Slovakian Flag'
    ],
    '🇸🇱': [
        'Bandiera della Sierra Leone',
        ':sl:',
        'Sierra Leonean Flag'
    ],
    '🇸🇲': [
        'Bandiera di San Marino',
        ':sm:',
        'Bandiera Sammarinese'
    ],
    '🇸🇳': [
        'Bandiera del Senegal',
        ':sn:',
        'Bandiera Sengalese'
    ],
    '🇸🇴': [
        'Bandiera della Somalia',
        ':so:',
        'Somalian Flag'
    ],
    '🇸🇷': [
        'Bandiera del Suriname',
        ':sr:',
        'Bandiera Surinamer'
    ],
    '🇸🇸': [
        'Bandiera del Sud Sudan',
        ':ss:',
        'Bandiera Sudanese Del Sud'
    ],
    '🇸🇹': [
        'Bandiera di Sa<unk> o Tome<unk> & Pri<unk> ncipe',
        ':st:'
    ],
    '🇸🇻': [
        'Bandiera di El Salvador',
        ':sv:',
        'Bandiera El Salvadoran'
    ],
    '🇸🇽': [
        'Bandiera di Sint Maarten',
        ':sx:'
    ],
    '🇸🇾': [
        'Bandiera della Siria',
        ':sy:',
        'Bandiera Siriana'
    ],
    '🇸🇿': [
        'Bandiera dello Swaziland',
        ':sz:',
        'Bandiera Eswatini'
    ],
    '🇹🇦': [
        'Flag of Tristan Da Cunha',
        ':ta:'
    ],
    '🇹🇨': [
        'Bandiera delle Isole Turks e Caicos',
        ':tc:'
    ],
    '🇹🇩': [
        'Bandiera del Ciad',
        ':td:',
        'Bandiera Ciadiana'
    ],
    '🇹🇫': [
        'Bandiera dei territori francesi del sud',
        ':tf:',
        'Bandiera Terre Meridionali Francesi'
    ],
    '🇹🇬': [
        'Bandiera del Togo',
        ':tg:',
        'Togolese Flag'
    ],
    '🇹🇭': [
        'Bandiera della Thailandia',
        ':th:',
        'Bandiera Thailandese'
    ],
    '🇹🇯': [
        'Bandiera del Tagikistan',
        ':tj:',
        'Bandiera Tajik'
    ],
    '🇹🇰': [
        'Bandiera di Tokelau',
        ':tk:',
        'Bandiera Tokelauan'
    ],
    '🇹🇱': [
        'Bandiera di Timor Est',
        ':tl:',
        'Bandiera Timor-Leste',
        'Bandiera Timorese Orientale'
    ],
    '🇹🇲': [
        'Bandiera del Turkmenistan',
        ':tm:',
        'Turkmen Flag'
    ],
    '🇹🇳': [
        'Bandiera della Tunisia',
        ':tn:',
        'Bandiera Tunisina'
    ],
    '🇹🇴': [
        'Bandiera di Tonga',
        ':to:',
        'Tongan Flag'
    ],
    '🇹🇷': [
        'Bandiera della Turchia',
        ':tr:',
        'Bandiera Turca'
    ],
    '🇹🇹': [
        'Bandiera di Trinidad & Tobago',
        ':tt:'
    ],
    '🇹🇻': [
        'Bandiera di Tuvalu',
        ':tv:',
        'Bandiera Tuvaluan'
    ],
    '🇹🇼': [
        'Bandiera di Taiwan',
        ':tw:',
        'Bandiera Taiwanese'
    ],
    '🇹🇿': [
        'Bandiera della Tanzania',
        ':tz:',
        'Tanzanian Flag'
    ],
    '🇺🇦': [
        'Bandiera dell\'Ucraina',
        ':ua:',
        'Bandiera Ucraina'
    ],
    '🇺🇬': [
        'Bandiera dell\'Uganda',
        ':ug:',
        'Bandiera Ugandese'
    ],
    '🇺🇲': [
        'Bandiera: Isole Esterne Americane',
        ':um:'
    ],
    '🇺🇸': [
        'Bandiera degli Stati Uniti',
        ':us:',
        'Bandiera Americana',
        'Bandiera USA'
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
        'Bandiera della Santa Sede',
        ':va:',
        'Bandiera Vanticanien'
    ],
    '🇻🇨': [
        'Bandiera di Saint Vincent e Grenadine',
        ':vc:'
    ],
    '🇻🇪': [
        'Bandiera del Venezuela',
        ':ve:',
        'Bandiera Venezuelana'
    ],
    '🇻🇬': [
        'Bandiera delle Isole Vergini Britanniche',
        ':vg:',
        'Bandiera Britannica Della Vergine Islander'
    ],
    '🇻🇮': [
        'Bandiera delle Isole Vergini Americane',
        ':vi:',
        'Bandiera Dell\'Isola Vergine Americana'
    ],
    '🇻🇳': [
        'Bandiera del Vietnam',
        ':vn:',
        'Bandiera Vietnamita'
    ],
    '🇻🇺': [
        'Flag of Vanuatu',
        ':vu:',
        'Ni-Vanuatu Flag'
    ],
    '🇼🇫': [
        'Bandiera di Wallis & Futuna',
        ':wf:'
    ],
    '🇼🇸': [
        'Bandiera di Samoa',
        ':ws:',
        'Samoan Flag'
    ],
    '🇽🇰': [
        'Bandiera del Kosovo',
        ':xk:',
        'Kosovar Flag'
    ],
    '🇾🇪': [
        'Bandiera dello Yemen',
        ':ye:',
        'Bandiera Yemenita'
    ],
    '🇾🇹': [
        'Bandiera di Mayotte',
        ':yt:',
        'Bandiera Mayotte'
    ],
    '🇿🇦': [
        'Bandiera del Sudafrica',
        ':za:',
        'Bandiera Sudafricana'
    ],
    '🇿🇲': [
        'Bandiera dello Zambia',
        ':zm:',
        'Zambian Flag'
    ],
    '🇿🇼': [
        'Bandiera dello Zimbabwe',
        ':zw:',
        'Bandiera Dello Zimbabwe',
        'Bandiera Zim'
    ]
};
/*sports*/
emojis_language[lang][8] = {
    '🧗{{skin_tone}}‍♂️': [
        'Arrampicata Uomo',
        ':man_climbing:',
        ':climbing:',
        'Rock Climber Maschio',
        'Uomo Arrampicatore',
        ':man:'
    ],
    '🧗{{skin_tone}}‍♀️': [
        'Arrampicata Donna',
        ':woman_climbing:',
        ':climbing:',
        'Rock Climber Femminile',
        'Donna Climber',
        ':woman:'
    ],
    '🧗{{skin_tone}}': [
        'Arrampicata Della Persona',
        ':person_climbing:',
        ':climbing:',
        'Person Rock Climber',
        'Persona Climber',
        ':person:'
    ],
    '🏇{{skin_tone}}': [
        'Corse Di Cavallo',
        ':horse_racing:',
        'Corsa Di Cavallo',
        'Jockey'
    ],
    '⛷{{skin_tone}}‍️': [
        'Sciatore',
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
        'Golfista Donna',
        ':woman_golfer:',
        ':golfer:',
        ':woman:'
    ],
    '🏌️{{skin_tone}}': [
        'Persona Golfista',
        ':person_golfer:',
        ':golfer:',
        ':person:'
    ],
    '🏄{{skin_tone}}‍♂️': [
        'Surfer Uomo',
        ':man_surfer:',
        ':surfer:',
        ':man:'
    ],
    '🏄{{skin_tone}}‍♀️': [
        'Surfer Donna',
        ':woman_surfer:',
        ':surfer:',
        ':woman:'
    ],
    '🏄{{skin_tone}}': [
        'Persona Surfer',
        ':person_surfer:',
        ':surfer:',
        ':person:'
    ],
    '🚣{{skin_tone}}‍♂️': [
        'Barca A Canottaggio Uomo',
        ':man_rowing_boat:',
        ':rowing_boat:',
        ':man:'
    ],
    '🚣{{skin_tone}}‍♀️': [
        'Barca A Canottaggio Donna',
        ':woman_rowing_boat:',
        ':rowing_boat:',
        ':woman:'
    ],
    '🚣{{skin_tone}}': [
        'Barca A Canottaggio Persona',
        ':person_rowing_boat:',
        ':rowing_boat:',
        ':person:'
    ],
    '🏊{{skin_tone}}‍♂️': [
        'Nuoto Uomo',
        ':man_swimming:',
        ':swimming:',
        'Nuoto Uomo',
        ':man:'
    ],
    '🏊{{skin_tone}}‍♀️': [
        'Nuoto Donna',
        ':woman_swimming:',
        ':swimming:',
        'Nuoto Donna',
        ':woman:'
    ],
    '🏊{{skin_tone}}': [
        'Nuoto Persona',
        ':person_swimming:',
        ':swimming:',
        'Persona Nuotatore',
        ':person:'
    ],
    '⛹{{skin_tone}}‍️‍♂️': [
        'Man Bouncing Ball',
        ':man_bouncing_ball:',
        ':bouncing_ball:',
        'Giocatore Di Pallacanestro Uomo',
        ':man:'
    ],
    '⛹️{{skin_tone}}‍♀️': [
        'Donna Bouncing Ball',
        ':woman_bouncing_ball:',
        ':boucing_ball:',
        'Giocatore Di Pallacanestro Donna',
        ':woman:'
    ],
    '⛹️{{skin_tone}}': [
        'Palla Di Rimbalzo',
        ':person_bouncing_ball:',
        ':boucing_ball:',
        'Giocatore Di Pallacanestro Persona',
        ':person:'
    ],
    '🏋️{{skin_tone}}‍♂️': [
        'Pesi Di Sollevamento Uomo',
        ':man_lifting_weights:',
        ':lifting_weights:',
        'sollevatore Pesi Uomo',
        ':man:'
    ],
    '🏋️{{skin_tone}}‍♀️': [
        'Pesi Di Sollevamento Donna',
        ':woman_lifting_weights:',
        ':lifting_weights:',
        'Donna Weightlifter',
        ':woman:'
    ],
    '🏋️{{skin_tone}}': [
        'Pesi Di Sollevamento Persona',
        ':person_lifting_weights:',
        ':lifting_weights:',
        'Sollevatore Di Pesi',
        ':person:'
    ],
    '🚴{{skin_tone}}‍♂️': [
        'Bici Uomo',
        ':man_biking:',
        ':biking:',
        'Uomo Ciclista',
        'Ciclista Maschio',
        ':man:'
    ],
    '🚴{{skin_tone}}‍♀️': [
        'Ciclismo Donna',
        ':woman_biking:',
        ':biking:',
        'Ciclista Donna',
        'Ciclista Femminile',
        ':woman:'
    ],
    '🚴{{skin_tone}}': [
        'Persona In Bicicletta',
        ':person_biking:',
        ':biking:',
        'Persona Ciclista',
        'Persona Ciclista',
        ':person:'
    ],
    '🚵{{skin_tone}}‍♂️': [
        'Uomo Mountain Bike',
        ':man_mountain_bike:',
        ':mountain_bike:',
        'Uomo Mountain Biker',
        ':man:'
    ],
    '🚵{{skin_tone}}‍♀️': [
        'Donna Mountain Bike',
        ':woman_mountain_bike:',
        ':mountain_bike:',
        'Donna Mountain Biker',
        ':woman:'
    ],
    '🚵{{skin_tone}}': [
        'Persona Mountain Bike',
        ':person_mountain_bike:',
        ':mountain_bike:',
        'Persona Mountain Biker',
        ':person:'
    ],
    '🤸{{skin_tone}}‍♂️': [
        'Cartwheeling Uomo',
        ':man_cartwheeling:',
        ':cartwheeling:',
        'Uomo Che Fa Ruota Di Cartone',
        ':man:'
    ],
    '🤸{{skin_tone}}‍♀️': [
        'Cartella Donna',
        ':woman_cartwheeling:',
        ':cartwheeling:',
        'Donna Che Fa Ruota Di Cartone',
        ':woman:'
    ],
    '🤸{{skin_tone}}': [
        'Carrozzeria Persona',
        ':person_cartwheeling:',
        ':cartwheeling:',
        'Persona Che Fa Ruota Di Cartone',
        ':person:'
    ],
    '🤼‍♂️': [
        'Uomini Wrestling',
        ':men_wrestling:',
        ':wrestling:',
        'Wrestling',
        'Wrestlers',
        ':man:'
    ],
    '🤼‍♀️': [
        'Donne Wrestling',
        ':women_wrestling:',
        ':wrestling:',
        'Wrestling',
        'Wrestlers',
        ':woman:'
    ],
    '🤼': [
        'People Wrestling',
        ':people_wrestling:',
        ':wrestling:',
        'Wrestling',
        'Wrestlers',
        ':person:'
    ],
    '🤽{{skin_tone}}‍♂️': [
        'Uomo Giocare All\'Acqua Polo',
        ':man_playing_water_polo:',
        ':playing_water_polo:',
        ':man:'
    ],
    '🤽{{skin_tone}}‍♀️': [
        'Donna Giocare Ad Acqua Polo',
        ':woman_playing_water_polo:',
        ':playing_water_polo:',
        ':woman:'
    ],
    '🤽{{skin_tone}}': [
        'Persona Giocare A Polo D\'Acqua',
        ':person_playing_water_polo:',
        ':playing_water_polo:',
        ':person:'
    ],
    '🤾{{skin_tone}}‍♂️': [
        'Manopola Da Giocare',
        ':man_playing_handball:',
        ':playing_handball:',
        ':man:'
    ],
    '🤾{{skin_tone}}‍♀️': [
        'Handball Da Donna Giocante',
        ':woman_playing_handball:',
        ':playing_handball:',
        ':woman:'
    ],
    '🤾{{skin_tone}}': [
        'Pallamano Da Giocare',
        ':person_playing_handball:',
        ':playing_handball:',
        ':person:'
    ],
    '🤹{{skin_tone}}‍♂️': [
        'Juggling Uomo',
        ':man_juggling:',
        ':juggling:',
        'Juggler Maschio',
        ':man:'
    ],
    '🤹{{skin_tone}}‍♀️': [
        'Abbigliamento Di Donna',
        ':woman_juggling:',
        ':juggling:',
        'Juggler Femminile',
        ':woman:'
    ],
    '🤹{{skin_tone}}': [
        'Contrabbando Persona',
        ':person_juggling:',
        ':juggling:',
        'Juggler Persona',
        ':person:'
    ],
    '🧘{{skin_tone}}‍♂️': [
        'Posizione Man in Lotus',
        ':man_lotus_position:',
        ':lotus_position:',
        'Meditazione',
        'Zen',
        'Zampe incrociate',
        'Yoga',
        ':man:'
    ],
    '🧘{{skin_tone}}‍♀️': [
        'Donna in posizione Lotus',
        ':woman_lotus_position:',
        ':lotus_position:',
        'Meditazione',
        'Zen',
        'Zampe incrociate',
        'Yoga',
        ':woman:'
    ],
    '🧘{{skin_tone}}': [
        'Persona in posizione di Lotus',
        ':person_lotus:_position',
        ':lotus_position:',
        'Meditazione',
        'Zen',
        'Zampe incrociate',
        'Yoga',
        ':person:'
    ],
    '🏃{{skin_tone}}‍♂️': [
        'Uomo In Esecuzione',
        ':man_running:',
        ':running:',
        ':man:'
    ],
    '🏃{{skin_tone}}‍♀️': [
        'Donna In Esecuzione',
        ':woman_running:',
        ':running:',
        ':woman:'
    ],
    '🏃{{skin_tone}}': [
        'Persona In Esecuzione',
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
        'Man Dancing',
        ':man_dancing:',
        ':dancing:',
        ':man:'
    ],
    '💃{{skin_tone}}': [
        'Danza Donna',
        ':woman_dancing:',
        ':dancing:',
        ':woman:'
    ],
    '🤺': [
        'Recinzione Persona',
        ':person_fencing:',
        'Fanciulla',
        ':fencing:'
    ],
    '🏆': [
        'Trofeo',
        ':trophy:',
        'Campionato',
        'Vincitore',
        ':gold:',
        ':yellow:'
    ],
    '🏅': [
        'Medaglia Sportiva',
        ':sports_medal:',
        ':medal:',
        ':gold:',
        ':yellow:'
    ],
    '🥇': [
        'Medaglia 1° Posto',
        ':first_place_medal:',
        ':gold_medal:',
        'Medaglia Primo Posto',
        'Medaglia D\'Oro',
        ':yellow:',
        ':gold:'
    ],
    '🥈': [
        'Medaglia 2° Posto',
        ':second_place_medal:',
        ':silver_medal:',
        'Medaglia Secondo Posto',
        'Medaglia D\'Argento',
        ':gray:',
        ':grey:',
        ':silver:'
    ],
    '🥉': [
        'Medaglia Del Terzo Posto',
        ':third_place_medal:',
        ':bronze_medal:',
        'Medaglia Terzo Posto',
        'Medaglia Di Bronzo',
        ':brown:',
        ':bronze:'
    ],
    '⚽': [
        'Calcio',
        ':football:',
        'Calcio',
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
        'Pallacanestro',
        ':basketball:',
        ':orange:',
        'Pallacanestro e cerchio'
    ],
    '🏐': [
        'Pallavolo',
        ':volleyball:',
        ':white:'
    ],
    '🏈': [
        'Calcio Americano',
        ':american_football:',
        'Calcio',
        'Gridiron',
        'Superbowl',
        ':brown:'
    ],
    '🏉': [
        'Calcio Di Rugby',
        ':rugby:',
        'Calcio',
        'Lega',
        'Rugby',
        'Unione'
    ],
    '🎾': [
        'Tennis',
        ':tennis:',
        ':ball:',
        'Palla',
        'Racchetta',
        'Racchetta',
        ':yellow:'
    ],
    '🥏': [
        'Disco Volante',
        ':flying_disk:',
        'Frisbee'
    ],
    '🎳': [
        'Bowling',
        ':bowling:',
        'Pins',
        'Skittles',
        'Ten Pin Bowling'
    ],
    '🏏': [
        'Cricket',
        ':cricket:',
        'Pipistrello',
        'Palla'
    ],
    '🏑': [
        'Campo Hockey',
        ':field_hockey:',
        'Palla',
        'Bastone'
    ],
    '🏒': [
        'Hockey Su Ghiaccio',
        ':ice_hockey:',
        'Palla',
        'Bastone'
    ],
    '🥍': [
        'Lacrosse',
        ':lacrosse:',
        'Palla',
        'Bastone',
        ':red:'
    ],
    '🏓': [
        'Ping Pong',
        ':ping_pong:',
        ':table_tennis:',
        'Tennis Da Tavolo',
        'Palla',
        'Paddle'
    ],
    '🏸': [
        'Badminton',
        ':badminton:',
        'Shuttlecock',
        'Racchetta'
    ],
    '🥊': [
        'Guanto Da Boxe',
        ':boxing_glove:',
        ':red:'
    ],
    '🥋': [
        'Uniforme Di Arti Marziali',
        ':martial_arts_uniform:',
        ':judo:',
        ':karate:',
        ':kung_fu:',
        'Judo',
        'Karate',
        'Kung fu'
    ],
    '⛳': [
        'Bandiera in buco',
        ':flag_in_hole:',
        ':golf_flag:',
        'Bandiera Da Golf'
    ],
    '⛸️': [
        'Skate Di Ghiaccio',
        ':ice_skate:',
        'Pattinaggio'
    ],
    '🎣': [
        'Pesca',
        ':fishing:',
        'Palo',
        'Pesce',
        'Canne Da Pesca'
    ],
    '🎽': [
        'Camicia In Corsa',
        ':running_shirt:',
        'Singlet',
        'Sash'
    ],
    '🎿': [
        'Sci',
        ':skis:',
        'Sci',
        'Avvio'
    ],
    '🛷': [
        'Sled',
        ':sled:'
    ],
    '🥌': [
        'Pietra Curling',
        ':curling_stone:'
    ],
    '🎯': [
        'Colpo Diretto',
        ':direct_hit:',
        'Arco',
        'Bullseye',
        'Freccette'
    ],
    '🎱': [
        'Piscina 8 Palla',
        ':pool_8_ball:',
        'Palla Di Cue',
        'Snooker',
        'Biliardi',
        ':black:'
    ],
    '🎮': [
        'Controllore Di Video Gioco',
        ':video_game_controller:',
        ':playstation:',
        ':xbox:',
        'Playstation',
        'Xbox',
        'Gamepad',
        'Wii U'
    ],
    '♟️': [
        'Alba Di Scacchi Neri',
        ':black_chess_pawn:',
        ':black:'
    ],
    '🏹': [
        'Arco e freccia',
        ':arch:',
        'Arco'
    ],
    '🥅': [
        'Obiettivo Netto',
        ':goal_net:'
    ],
    '🀄': [
        'Drago Rosso Mahjong',
        ':mahjong:',
        'Mahjong',
        'Mahjong Tile',
        '中',
        'Mahjong Tile Drago Rosso'
    ],
    '🎴': [
        'Carte Da Giocare Fiore',
        ':flower_playing_cards:',
        'Carte Di Mazzo',
        'Hanafuda',
        'Hwatu',
        'Carte Da Riproduzione'
    ]
};
/*travel and places*/
emojis_language[lang][9] = {
    '🚂': [
        'Locomotiva A Vapore',
        ':steam_train:',
        'Treno A Vapore',
        'Locomotiva Ferroviaria'
    ],
    '🚃': [
        'Auto Ferroviaria',
        ':railway_car:',
        'Railcar',
        'Ferroviaria Automobile',
        'Trasporto Ferroviario',
        'Carro Ferroviario'
    ],
    '🚄': [
        'Treno Ad Alta Velocità',
        ':high_speed_train:'
    ],
    '🚅': [
        'Treno Proiettile',
        ':bullet_train:',
        'Shinkansen',
        'Treno ad alta velocità con naso di proiettile'
    ],
    '🚆': [
        'Treno',
        ':train:'
    ],
    '🚇': [
        'Sotterraneo',
        ':underground:',
        'Tubo',
        'Metropolitana',
        'Metropolitana'
    ],
    '🚈': [
        'Ferrovia Leggera',
        ':light_rail:',
        'Treno'
    ],
    '🚊': [
        'Tram',
        ':tram:'
    ],
    '🚝': [
        'Monorail',
        ':monorail:',
        'Treno'
    ],
    '🚞': [
        'Ferrovia Di Montagna',
        ':mountain_railway:',
        'Funicular',
        'Treno E Montagna'
    ],
    '🚋': [
        'Tram Car',
        ':tram_car:'
    ],
    '🚌': [
        'Bus',
        ':bus:',
        'Allenatore'
    ],
    '🚍': [
        'Bus In Arrivo',
        ':front_of_bus:',
        'Fronte Autobus'
    ],
    '🚎': [
        'Trolleybus',
        ':trolleybus:',
        'Bus Elettrico'
    ],
    '🚐': [
        'Minibus',
        ':minibus:',
        'Minivan',
        'People-Mover'
    ],
    '🚑': [
        'Ambulanza',
        ':ambulance:'
    ],
    '🚒': [
        'Motore Del Fuoco',
        ':fire_engine:',
        'Vigili Del Fuoco',
        'Camion Di Fuoco'
    ],
    '🚓': [
        'Auto Di Polizia',
        ':police_car:',
        'Cop Car',
        'Lato Di Polizia Auto'
    ],
    '🚔': [
        'Auto Di Polizia In Arrivo',
        ':front_of_police_car:',
        'Fronte della Polizia Auto',
        'Cop Car'
    ],
    '🚕': [
        'Taxi',
        ':taxi:',
        'Taxi New York',
        'Lato Taxi'
    ],
    '🚖': [
        'Taxi',
        ':front_of_taxi:',
        'Taxi In Arrivo',
        'Fronte del taxi'
    ],
    '🚗': [
        'Automobile',
        ':car:',
        'Auto Rossa',
        'Lato Automobile',
        'Auto'
    ],
    '🚘': [
        'Automobile In Arrivo',
        ':front_of_car:',
        'Auto Rossa',
        'Anteriore Di Auto'
    ],
    '🚚': [
        'Camion Di Consegna',
        ':lorry:',
        'Autocarro'
    ],
    '🚛': [
        'Autocarro Articolato',
        ':articulated_lorry:',
        'Camion Verde'
    ],
    '🚜': [
        'Trattore',
        ':tractor:',
        'Fattoria'
    ],
    '🛻': [
        'Camion Di Ritiro',
        ':pickup_truck:'
    ],
    '🏎️': [
        'Auto Da Corsa',
        ':racing_car:',
        'F1',
        'Formula Uno',
        'Auto Da Corsa'
    ],
    '🏍️': [
        'Moto',
        ':motorbike:',
        'Moto'
    ],
    '🛵': [
        'Motore Scooter',
        ':motor_scooter:',
        'Vespa',
        'Bici Da Motore',
        'Bici Da Motore'
    ],
    '🛺': [
        'Auto Rickshaw',
        ':auto_rickshaw:',
        'Tuk Tuk'
    ],
    '🚲': [
        'Bicicletta',
        ':bike:',
        'Bicicletta'
    ],
    '🛴': [
        'Kick Scooter',
        ':kick_scooter:'
    ],
    '⛵': [
        'Barca A vela',
        ':sailboat:',
        'Dinghy',
        'Yacht'
    ],
    '🚤': [
        'Speedboat',
        ':speedboat:',
        'Motoscafo',
        'Powerboat'
    ],
    '🛳️': [
        'Nave Passeggeri',
        ':passenger_ship:'
    ],
    '⛴️': [
        'Traghetti',
        ':ferry:'
    ],
    '🛥️': [
        'Barca A Motore',
        ':motor_boat:'
    ],
    '🚢': [
        'Nave Da Crociera',
        ':cruise_ship:'
    ],
    '✈️': [
        'Aereo',
        ':airplane:',
        'Aeroplane'
    ],
    '🛩️': [
        'Piccolo Aereo',
        ':small_airplane:',
        'Aereo Piccolo'
    ],
    '🚁': [
        'Elicottero',
        ':helicopter:'
    ],
    '🚟': [
        'Ferrovia Di Sospensione',
        ':suspension_railway:'
    ],
    '🚠': [
        'Cavo Di Montagna',
        ':mountain_cableway:'
    ],
    '🚡': [
        'Tramway Aereo',
        ':aerial_tramway:',
        'Cavo Automobile',
        'Gondola',
        'Ropeway'
    ],
    '🛰️': [
        'Satellite',
        ':satellite:'
    ],
    '🚀': [
        'Razzo',
        ':rocket:',
        'Navetta Dello Spazio'
    ],
    '🛸': [
        'Saucer Volante',
        ':flying_saucer:',
        'UFO'
    ],
    '🚉': [
        'Stazione Treni',
        ':train_station:',
        'Piattaforma Del Treno'
    ],
    '🚏': [
        'Fermata Bus',
        ':bus_stop:'
    ],
    '🛣️': [
        'Autostrada',
        ':motorway:',
        'Strada',
        'Autostrada',
        'Interstato'
    ],
    '🛤️': [
        'Pista Ferroviaria',
        ':railway_track:'
    ],
    '🛫': [
        'Partenza Aereo',
        ':airplane_departure:',
        'Prendersi Fuori'
    ],
    '🛬': [
        'Arrivo Aereo',
        ':airplane_arrival:',
        'Arrivo Aereo',
        'Atterraggio'
    ],
    '🗾': [
        'Mappa del Giappone',
        ':map_of_japan:'
    ],
    '⛰️': [
        'Montagna',
        ':mountain:'
    ],
    '🏔️': [
        'Montagna Cappata Neve',
        ':snow_capped_mountain:'
    ],
    '🌋': [
        'Vulcano',
        ':volcano:'
    ],
    '🗻': [
        'Monte Fuji',
        ':mount_fuji:',
        'Fuji-san'
    ],
    '🏕️': [
        'Campeggio',
        ':camping:',
        'Campeggio'
    ],
    '🏖️': [
        'Spiaggia Con Ombrello',
        ':beach_with_umbrella:'
    ],
    '🏜️': [
        'Desert',
        ':desert:'
    ],
    '🏝️': [
        'Isola Del Deserto',
        ':desert_island:'
    ],
    '🏞️': [
        'Parco Nazionale',
        ':national_park:'
    ],
    '🏟️': [
        'Stadio',
        ':stadium:',
        'Tribuna',
        'Stadio Sportivo'
    ],
    '🏛️': [
        'Edificio Classico',
        ':classical_building:',
        'Greco',
        'Roma'
    ],
    '🏗️': [
        'Costruzione Edifici',
        ':building_construction:',
        'Gru'
    ],
    '🏘️': [
        'Case Edifici',
        ':houses_building:',
        'Gruppo di Case'
    ],
    '🏚️': [
        'Edificio Di Casa Derelict',
        ':old_house:',
        'Casa Abbandonata',
        'Vecchia Casa',
        'Casa Infestata'
    ],
    '🏠': [
        'Home',
        ':home:',
        'Edificio Della Casa'
    ],
    '🏡': [
        'Casa Con Giardino',
        ':house_with_garden:',
        'Casa E Albero'
    ],
    '🏢': [
        'Edificio Ufficio',
        ':office_building:',
        'Costruzione Della Città',
        'Edificio High-Rise'
    ],
    '🏣': [
        'Ufficio Postale Giapponese',
        ':japanese_post_office:',
        'Marchio Postale Giapponese'
    ],
    '🏤': [
        'Ufficio Postale',
        ':european_post_office:',
        'Ufficio Postale Europeo'
    ],
    '🏥': [
        'Ospedale',
        ':hospital:',
        'ER',
        'A&E',
        'Sala Di Emergenza',
        'Incidente E Emergenza',
        'Croce Rossa',
        'Medico'
    ],
    '🏦': [
        'Banca',
        ':bank:',
        'BK',
        'Bakkureru',
        'Ramo Bancario',
        'Bakkureru'
    ],
    '🏨': [
        'Hotel',
        ':hotel:',
        'Alloggio',
        'H Edificio'
    ],
    '🏩': [
        'Hotel Amore',
        ':love_hotel:',
        'Love Heart Hotel'
    ],
    '🏪': [
        'Convenienza Negozio',
        ':convenience_store:',
        '24 Ore Negozio',
        '7-Undici',
        'Negozio Angolo',
        'Kwik-E-Mart'
    ],
    '🏫': [
        'Scuola',
        ':school:',
        'Torre Dell\'Orologio',
        'Alto Medio Elementare'
    ],
    '🏬': [
        'Reparto Negozio',
        ':department_store:',
        'Shopping Center',
        'Negozio'
    ],
    '🏭': [
        'Fabbrica',
        ':factory:',
        'Industriale',
        'Industria',
        'Inquinamento',
        'Smog'
    ],
    '🏯': [
        'Castello Giapponese',
        ':japanese_castle:',
        'Fortezza'
    ],
    '🏰': [
        'Castello Europeo',
        ':european_castle:',
        'Turrets'
    ],
    '💒': [
        'Cuore Della Chiesa',
        ':church_heart:',
        'Matrimonio Chiesa',
        'Matrimonio'
    ],
    '🗼': [
        'Torre Di Tokyo',
        ':tokyo_tower:',
        'Torre Eiffel',
        'Torre Rossa'
    ],
    '🗽': [
        'Statua della Libertà',
        ':statue_of_liberty:',
        'New York'
    ],
    '⛪': [
        'Edificio Della Chiesa',
        ':church_building:',
        'Croce'
    ],
    '🕌': [
        'Moschea',
        ':mosque:',
        'Tetto A Cupola',
        'Minaret'
    ],
    '🛕': [
        'Tempio Indù',
        ':hindu_temple:'
    ],
    '🕍': [
        'Sinagoga',
        ':synagogue:',
        'Ebraico',
        'Synagog',
        'Tempio'
    ],
    '⛩️': [
        'Santuario Shinto',
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
        'Ombrello a terra',
        ':beach_umbrella:',
        'Ombrello Da Spiaggia'
    ],
    '🌄': [
        'Alba Sulle Montagne',
        ':sunrise_over_mountains:',
        'Mattina',
        'Alba'
    ],
    '🌅': [
        'Alba',
        ':sunrise:',
        ':sunset:',
        'Tramonto'
    ],
    '🌆': [
        'Cityscape al crepuscolo',
        ':cityscape_at_dusk:',
        'Orange Sky City',
        'Dusk City'
    ],
    '🌇': [
        'Tramonto Sugli Edifici',
        ':sunset_over_buildings:',
        'Tramonto Della Città'
    ],
    '🌃': [
        'Notte con stelle',
        ':night_with_stars:',
        'Città Di Notte',
        'Notte Stellata'
    ],
    '🗿': [
        'Moai',
        ':moai:',
        'Statua Isola Di Pasqua',
        'Scultura Rock Umana',
        'Statua Di Moyai'
    ],
    '🌠': [
        'Shooting Star',
        ':shooting_star:',
        'Quando Desideri Su Una Stella',
        'Meteoroide'
    ],
    '🌌': [
        'Via Lattea',
        ':milky_way:',
        'Galaxy',
        'Cielo Notte',
        'Spazio',
        'Stelle',
        'Universo'
    ],
    '🎑': [
        'Cerimonia Di Visualizzazione Luna',
        ':moon_viewing_ceremony:',
        'Erba, Ravioli e Luna',
        'Raccogli Luna',
        'Festa Di Metà Autunno',
        'Tsukimi'
    ],
    '🛖': [
        'Capanna',
        ':hut:'
    ],
    '🎢': [
        'Roller Coaster',
        ':roller_coaster:',
        'Rollercoaster',
        'Parco A Tema'
    ],
    '🛝': [
        'Diapositiva Playground',
        ':playground_slide:',
        'Bambino',
        'Figli'
    ]
};
/*technologies (smartphones, laptops, etc.) and office*/
emojis_language[lang][10] = {
    '⌚': [
        'Osserva',
        ':watch:',
        'Orologio',
        'Apple Watch'
    ],
    '⏰': [
        'Sveglia Orologio',
        ':alarm_clock:'
    ],
    '⏱️': [
        'Cronometro',
        ':stopwatch:'
    ],
    '⏲️': [
        'Orologio Timer',
        ':timer_clock:'
    ],
    '🕰️': [
        'Orologio Mantelpiece',
        ':mantelpiece_clock:'
    ],
    '🧭': [
        'Bussola',
        ':compass:'
    ],
    '🕹️': [
        'Joystick',
        ':joystick:'
    ],
    '🎙️': [
        'Microfono Studio',
        ':studio_microphone:'
    ],
    '🎚️': [
        'Cursore Di Livello',
        ':level_slider:'
    ],
    '🎛️': [
        'Manopole Di Controllo',
        ':control_knobs:'
    ],
    '📻': [
        'Radio',
        ':radio:',
        'Radio Digitale',
        'Wireless'
    ],
    '📱': [
        'Telefono Cellulare',
        ':mobile_phone:',
        'Smartphone',
        'iPhone',
        'Telefono Cellulare',
        'Device'
    ],
    '📲': [
        'Telefono cellulare con freccia a sinistra',
        ':phone_call:',
        'Chiamata Telefonica',
        'Puntamento Al Telefono'
    ],
    '☎️': [
        'Telefono Nero',
        ':rotary_phone:',
        'Telefono Rotante',
        ':red:'
    ],
    '📞': [
        'Ricevitore Telefonico',
        ':phone:',
        'Handset',
        'Telefono',
        ':black:',
        'Device'
    ],
    '📟': [
        'Cercapersone',
        ':pager:',
        'Beeper',
        'Sanguisuga'
    ],
    '📠': [
        'Fax Macchina',
        ':fax_machine:',
        'Facsimile',
        'Fax'
    ],
    '🔋': [
        'Batteria',
        ':battery:',
        'Batteria AA',
        'Batteria Telefono'
    ],
    '🔌': [
        'Spina Elettrica',
        ':power_cable:',
        'AC Adaptor',
        'Cavo Di Alimentazione',
        'Spina Elettrica'
    ],
    '💻': [
        'Portatile',
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
        'Computer Desktop',
        ':desktop_computer:',
        ':computer:',
        'iMac',
        'PC',
        'Device'
    ],
    '🖨️': [
        'Stampante',
        ':printer:',
        'Device'
    ],
    '⌨️': [
        'Computer Keyboard',
        ':keyboard:',
        ':computer_keyboard:'
    ],
    '🖱️': [
        'Mouse Del Computer',
        ':computer_mouse:',
        'Mouse A Tre Pulsanti'
    ],
    '🖲️': [
        'Trackball',
        ':trackball:'
    ],
    '💽': [
        'Disco Del Computer',
        ':blu_ray:',
        'Minidisc',
        'CD',
        'DVD',
        'Blu-ray',
        'BD'
    ],
    '💾': [
        'Disco Floppy',
        ':floppy_disk:',
        'Disco 3.5′′',
        'Disco'
    ],
    '💿': [
        'Disco Ottico',
        ':cd:',
        'CD',
        'CD-ROM',
        'Compact Disc'
    ],
    '📀': [
        'DVD',
        'DVD-ROM',
        ':dvd:',
        'DVD Video'
    ],
    '🎥': [
        'Videocamera Film',
        ':movie_camera:',
        'Fotocamera Film',
        'Hollywood',
        'Film'
    ],
    '🎞️': [
        'Cornici Film',
        ':film_frames:'
    ],
    '📽️': [
        'Proiettore Film',
        ':film_projector:'
    ],
    '📺': [
        'Televisione',
        ':tv:',
        'TV'
    ],
    '📷': [
        'Fotocamera Digitale',
        ':digital_camera:'
    ],
    '📸': [
        'Fotocamera con Flash',
        ':camera_flash:'
    ],
    '📹': [
        'Videocamera',
        ':video_camera:',
        'Videocamera'
    ],
    '📼': [
        'Videocassette',
        ':vhs:',
        'VHS',
        'VCR',
        'Nastro Video',
        'Videocassette'
    ],
    '💳': [
        'Carta Di Credito',
        ':credit_card:',
        'Carta Di Debito',
        'AMEX',
        'Diners Club',
        'American Express',
        'Mastercard',
        'Carta VISA'
    ],
    '📧': [
        'E-Mail',
        ':email:',
        'Email'
    ],
    '📨': [
        'Busta In Entrata',
        ':incoming_envelope:',
        'Busta Con Righe',
        'Busta Veloce'
    ],
    '📩': [
        'Busta con freccia verso il basso sopra',
        ':insert_in_envelope:',
        'Busta Freccia Giù',
        'Inserisci Nella Busta'
    ],
    '📤': [
        'Vassoio In Uscita',
        ':outbox_tray:'
    ],
    '📥': [
        'Vassoio Posta In Arrivo',
        ':inbox_tray:'
    ],
    '📮': [
        'Postbox',
        ':postbox:'
    ],
    '📁': [
        'Cartella File',
        ':file_folder:',
        'Cartella',
        'Directory',
        'Cartella File Chiusa'
    ],
    '📂': [
        'Apri Cartella File',
        ':open_file_folder:',
        'Directory'
    ],
    '🗂️': [
        'Divisori Indice Carte',
        ':card_index_dividers:'
    ],
    '📅': [
        'Calendario',
        ':calendar:',
        '17 Luglio',
        'Giornata Mondiale Delle Emoji'
    ],
    '🗓️': [
        'Piazzola Calendario Spirale',
        ':spiral_calendar_pad:'
    ],
    '📆': [
        'Calendario Tear-Off',
        ':day_calendar:',
        'Calendario Giornale',
        'Calendario Da Scrivania'
    ],
    '📈': [
        'Incremento Grafico',
        ':increasing_chart:',
        'Grafico Positivo',
        'Grafico A Puntamento In Alto',
        'Grafico con tendenza verso l\'alto'
    ],
    '📉': [
        'Diminuzione Grafica',
        ':decreasing_chart:',
        'Grafico Negativo',
        'Grafico A Punto Giù',
        'Grafico con tendenza verso il basso'
    ],
    '📊': [
        'Grafico A Barre',
        ':bar_chart:',
        'Grafico A Barre'
    ],
    '📌': [
        'Pushpin',
        ':pushpin:',
        'Thumb Tack',
        ':red:'
    ],
    '📋': [
        'Appunti',
        ':clipboard:'
    ],
    '📍': [
        'Pushpin Rotondo',
        ':round_pushpin:',
        'Pin Caduto',
        'Pin Della Mappa',
        'Pin',
        'Perno Rosso',
        ':red:'
    ],
    '📎': [
        'Clip',
        ':paperclip:',
        'Clippy'
    ],
    '📏': [
        'Righello Dritto',
        ':straight_ruler:'
    ],
    '📐': [
        'Righello Triangolare',
        ':triangular_ruler:',
        'Righello Del Triangolo'
    ],
    '✂️': [
        'Forbici',
        ':scissors:',
        'Taglio'
    ],
    '✏️': [
        'Matita',
        ':pencil:',
        'Matita Di Piombo'
    ],
    '✒️': [
        'Nib Nero',
        ':black_nib:',
        'Penna Nib',
        'Penne Fontana'
    ],
    '🖋️': [
        'Penne Fontana',
        ':fountain_pen:',
        'Penne Fontana Sinistra Inferiore'
    ],
    '🖊️': [
        'Penna',
        ':pen:',
        'Penne A Sfera Sinistra Inferiore',
        'Penne A Sfera'
    ],
    '🖌️': [
        'Pennello',
        ':paintbrush:',
        'Pennello',
        'Basso Pennello A Sinistra'
    ],
    '🖍️': [
        'Crayon',
        ':crayon:',
        'Crayon Basso Sinistro'
    ],
    '📝': [
        'Memo',
        ':memo:',
        'Memorandum',
        'Nota',
        'Carta E Matita'
    ],
    '🗑️': [
        'Cestino Per Wastepaper',
        ':wastepaper_basket:',
        'Scatola Di Spazzatura',
        'Rubbish Bin',
        'Cestino Può'
    ],
    '📡': [
        'Antenna Satellitare',
        ':satellite_antenna:'
    ],
    '🔭': [
        'Telescopio',
        ':telescope:',
        'Stargazing'
    ],
    '🔬': [
        'Microscopio',
        ':microscope:',
        'Magnify',
        'Scienza'
    ],
    '📭': [
        'Apri cassetta postale con contrassegno abbassato',
        ':open_mailbox_lowered:'
    ],
    '📬': [
        'Apri cassetta postale con contrassegno alzato',
        ':open_mailbox_raised:',
        'Apri Mailbox'
    ],
    '📪': [
        'Cassetta postale chiusa con contrassegno abbassato',
        ':closed_mailbox_lowered:'
    ],
    '📫': [
        'Cassetta postale chiusa con contrassegno alzato',
        ':closed_mailbox_raised:'
    ],
    '📰': [
        'Giornale',
        ':newspaper:'
    ],
    '🗞️': [
        'Giornale Rolled-Up',
        ':rolled_up_newspaper:',
        'Consegna Del Giornale'
    ],
    '📄': [
        'Pagina A Visitare',
        ':printed_page:',
        'Pagina Stampata'
    ],
    '📜': [
        'Scorrimento',
        ':scroll:',
        'Grado',
        'Parchment'
    ],
    '📃': [
        'Pagina con ricciolo',
        ':curled_page:',
        'Curled Page',
        'Curly Page'
    ],
    '📓': [
        'Notebook',
        ':notebook:',
        'Libro Nero E Bianco'
    ],
    '📔': [
        'Notebook con copertina decorativa',
        ':notebook_decorative_cover:'
    ],
    '📕': [
        'Libro Chiuso',
        ':closed_book:',
        'Libro Rosso',
        'Libro Di Testo Rosso',
        ':red:'
    ],
    '📖': [
        'Apri Libro',
        ':open_book:',
        'Libro',
        'Novello'
    ],
    '📗': [
        'Libro Verde',
        ':green_book:',
        'Libro Di Testo Verde',
        ':green:'
    ],
    '📘': [
        'Libro Blu',
        ':blue_book:',
        'Libro Di Testo Blu',
        ':blue:'
    ],
    '📙': [
        'Libro Arancione',
        ':orange_book:',
        'Libro Di Testo Arancione',
        ':orange:'
    ],
    '📚': [
        'Libri',
        ':books:',
        'Pile Libri',
        'Pila Di Libri'
    ],
    '🗳️': [
        'Ballot Box con Ballot',
        ':ballot_box:',
        'Vota Box',
        'Votazione'
    ],
    '🗄️': [
        'File Cabinet',
        ':file_cabinet:',
        'Armadio Di Filing'
    ],
    '🗃️': [
        'Casella File Carta',
        ':card_file_box:'
    ],
    '🖇️': [
        'Paperclips Collegati',
        ':linked_paperclips:',
        ':gray:',
        ':grey:'
    ]
};
/*clothes and accessories*/
emojis_language[lang][11] = {
    '👣': [
        'Impronte',
        ':footprints:',
        'Piedi',
        'Tracce'
    ],
    '👓': [
        'Occhiali',
        ':glasses:',
        'Occhiali'
    ],
    '🕶️': [
        'Occhiali Da Sole',
        ':sunglasses:'
    ],
    '🥽': [
        'Occhiali',
        ':goggles:'
    ],
    '🥼': [
        'Cappotto Da Laboratorio',
        ':lab_coat:'
    ],
    '👔': [
        'Necktie',
        ':necktie:',
        'Camicia Da Lavoro',
        'Camicia E Cravatta'
    ],
    '👕': [
        'T-shirt',
        ':t_shirt:',
        ':t-shirt:',
        'Camicia Da Tee',
        'Polo Camicia'
    ],
    '👖': [
        'Jeans',
        ':jeans:',
        'Denim',
        'Pantaloni',
        'Pantaloni'
    ],
    '🧣': [
        'Scarf',
        ':scarf:'
    ],
    '🧤': [
        'Guanti',
        ':gloves:'
    ],
    '🧥': [
        'Cappotto',
        ':coat:'
    ],
    '🧦': [
        'Socks',
        ':socks:'
    ],
    '👗': [
        'Vestito',
        ':dress:',
        'Gonna',
        'Abito'
    ],
    '👘': [
        'Kimono',
        ':kimono:',
        'Abito Da Vestire',
        'Vestito Giapponese'
    ],
    '👙': [
        'Bikini',
        ':bikini:',
        'Bagni',
        'Costume Da Bagno'
    ],
    '🩱': [
        'Costume Da Bagno In Un Pezzo',
        'tuta una_pezza_costume',
        'tuta singola'
    ],
    '👚': [
        'Vestiti Donna',
        ':womans_clothes:',
        'Vestiti Donna',
        'Blouse',
        'Camicia Rosa',
        'Blouse'
    ],
    '👛': [
        'Borsa',
        ':purse:',
        'Portafoglio'
    ],
    '👜': [
        'Borsetta',
        ':handbag:'
    ],
    '👝': [
        'Pochette Frizione',
        ':clutch_bag:',
        'Frizione',
        'Borsa Piccola',
        'Pouch'
    ],
    '🎒': [
        'Zaino',
        ':backpack:',
        'Borsa',
        'Borsa Scuola',
        'Scuola Satchel',
        'Rucksack'
    ],
    '👞': [
        'Mans Shoe',
        ':mans_shoe:',
        'Mans Shoe',
        'Scarpa',
        'Mostra Marrone',
        'Mostra Vestito'
    ],
    '👟': [
        'Scarpa Atletica',
        ':athletic_shoe:',
        'Scarpa Da Corsa',
        'Sneaker',
        'Corridore',
        'Allenatore',
        'Scarpa Da Tennis'
    ],
    '🥾': [
        'Boot Da Escursione',
        ':hiking_boot:'
    ],
    '🥿': [
        'Scarpa Piatta',
        ':flat_shoe:'
    ],
    '👠': [
        'Scarpa Con Tacco Alto',
        ':high_heeled_shoe:',
        ':high_heel:',
        'Stiletto',
        'Tacchi Alti'
    ],
    '👡': [
        'Sandalo Donna',
        ':womans_sandal:',
        'Sandalo Donna',
        'Sandalo Con Tacco',
        'Sandali',
        'Sandal'
    ],
    '👢': [
        'Stivali Donna',
        ':womans_boots_',
        'Stivali Donna',
        'Stivali Cowgirl',
        'Stivali Alti Del Ginocchio',
        'Stivali Con Tacco'
    ],
    '👑': [
        'Corona',
        ':crown:',
        'Re',
        'Regina',
        'Principe',
        'Reale',
        'Principessa',
        ':gold:',
        ':yellow:'
    ],
    '👒': [
        'Cappello',
        ':hat:',
        'Cappello Donna',
        'Cappello Con Arco',
        'Cappello Da Donna'
    ],
    '🎩': [
        'Cappello Superiore',
        ':top_hat:',
        'Formal Wear',
        'Groom',
        ':black:'
    ],
    '🎓': [
        'Cappuccio Di Laurea',
        ':graduation_cap:',
        'Collegio',
        'Laureato',
        'Scheda Di Mortaio',
        'Università',
        'Cappellino Accademico Quadrato',
        ':black:'
    ],
    '🧢': [
        'Cappuccio Fatturato',
        ':billed_cap:',
        'Berretto Da Baseball'
    ],
    '⛑️': [
        'Elmo con Croce Bianca',
        ':helmet_with_white_cross:',
        ':helmet_with_cross:',
        ':rescue_worker_helmet:',
        ':rescue_workers_helmet:',
        'Elmetto Dei Lavoratori Di Salvataggio',
        ':red:',
        ':white:'
    ],
    '💼': [
        'Valigia',
        ':briefcase:',
        'Valigia'
    ],
    '🎖️': [
        'Medaglia Militare',
        ':military_medal:',
        ':medal:',
        'Medaglia',
        'Medaglione',
        'Decorazione Militare'
    ],
    '📿': [
        'Perline Di Preghiera',
        ':prayer_beads:',
        'Perline Dhikr',
        'Perline Di Rosario'
    ],
    '🎗️': [
        'Promemoria Ribbo',
        ':reminder_ribbo:'
    ],
    '🤿': [
        'Maschera Immersioni',
        ':diving_mask:'
    ],
    '🦺': [
        'Gilet Di Sicurezza',
        ':safety_vest:'
    ],
    '🥻': [
        'Sari',
        ':sari:',
        'Sarea',
        'Shari'
    ],
    '🩲': [
        'Slip',
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
        'Roller Skate',
        ':roller_skate:',
        'Skate Inline',
        'Roller Derby'
    ],
    '🩴': [
        'Capovolgi Flusso',
        ':flip_flop:',
        'Sandalo Perizoma'
    ],
    '🪖': [
        'Elmo Militare',
        ':military_helmet:'
    ],
    '🩰': [
        'Scarpe Da Balletto',
        ':ballet_shoes:',
        'Scarpa Pointe'
    ],
    '🩼': [
        'Crutch',
        ':crutch:'
    ]
};
/*hands and parts of body*/
emojis_language[lang][12] = {
    '👋{{skin_tone}}': [
        'Segno A Mano Ondata',
        ':wave:',
        ':waving_hand:',
        'Arrivederci',
        'Onda Mano',
        'Ciao',
        'Hi'
    ],
    '🖐️{{skin_tone}}': [
        'Mano con Dita giocata',
        ':hand_splayed:',
        ':raised_hand_with_fingers_splayed:',
        ':hand_with_fingers_splayed:',
        'Cinque Mani',
        'Mano Riprodotta',
        'Mano alzata con Dita giocata'
    ],
    '🤚{{skin_tone}}': [
        'Rialzato indietro della mano',
        ':raised_back_of_hand:',
        ':back_of_hand:',
        'Indietro'
    ],
    '✋{{skin_tone}}': [
        'Mano Crescita',
        ':raised_hand:',
        ':hand:',
        'Alta Cinque',
        'Ferma'
    ],
    '🖖{{skin_tone}}': [
        'Vulcan Salute',
        ':vulcan_salute:',
        'Spock',
        'Star Trek',
        'Mano alzata con parte tra il medio e Anello Dita'
    ],
    '👌{{skin_tone}}': [
        'OK Hand Sign',
        ':ok_hand:',
        'Ok',
        'Perfetto',
        'Sì'
    ],
    '✌️{{skin_tone}}': [
        'Mano Della Vittoria',
        ':victory_hand:',
        'Quotazioni Aeree',
        'Segno Di Pace',
        'Firma V'
    ],
    '🤞{{skin_tone}}': [
        'Dita Incrociate',
        ':crossed_fingers:',
        'Dita Incrociate',
        'Buona Fortuna',
        'Mano con indice e medie dita incrociate'
    ],
    '🤟{{skin_tone}}': [
        'Gesture Amore-You',
        ':love_you_gesture:',
        ':i_love_you_hand_sign:',
        'Ti Amo Il Segno Della Mano'
    ],
    '🤘{{skin_tone}}': [
        'Segno delle corna',
        ':the_horns:',
        ':sign_of_the_horns:',
        ':metal:',
        'Dita Del Diavolo',
        'Metallo Pesante',
        'Rock On'
    ],
    '🤙{{skin_tone}}': [
        'Chiamami Cartello Mano',
        ':call_me_hand:',
        ':call_me:',
        'Mano Del Telefono',
        'Shaka'
    ],
    '🤏{{skin_tone}}': [
        'Pinching Hand',
        ':pinching_hand:'
    ],
    '👈{{skin_tone}}': [
        'Punto Indice Indietro A Sinistra',
        ':backhand_index_pointing_left:',
        ':point_left:',
        'Indice Dorsale Bianco A Sinistra'
    ],
    '👉{{skin_tone}}': [
        'Punto Indice Indietro A Destra',
        ':backhand_index_pointing_right:',
        ':point_right:',
        'Indice Destro, Punto Destro, Bianco'
    ],
    '👆{{skin_tone}}': [
        'Puntamento Indice Indietro',
        ':point_up_2:',
        ':backhand_index_pointing_up:',
        'Indice Posteriore In Alto Bianco',
        'Dito Medio'
    ],
    '👇{{skin_tone}}': [
        'Puntamento Indice Indietro Giù',
        ':point_down:',
        ':backhand_index_pointing_down:',
        'Indice Posteriore In Giù Bianco',
        'Puntamento Giù'
    ],
    '☝{{skin_tone}}': [
        'Indice Puntamento Dito Su',
        ':point_up:',
        ':index_pointing_up:',
        'Indice Di Puntamento Bianco',
        'Segreto'
    ],
    '🖕{{skin_tone}}': [
        'Dito Medio',
        ':middle_finger:',
        'Capovolgere L\'Uccello',
        'Rude Finger',
        'Mano inversa con dito medio esteso'
    ],
    '👍{{skin_tone}}': [
        'Iscrizione Pollice Su',
        ':thumbs_up_sign:',
        'Like',
        'Sì'
    ],
    '👎{{skin_tone}}': [
        'Cartello Pollice Giù',
        ':thumbs_down_sign:',
        'Cattivo',
        'Dislike',
        'No'
    ],
    '✊{{skin_tone}}': [
        'Pugno Cresciuto',
        ':raised_fist:',
        'Pompa Pist'
    ],
    '👊{{skin_tone}}': [
        'Nebbia In Arrivo',
        ':oncoming_fist:',
        'Bro Fist',
        'Brofist',
        'Pist Bump',
        'Punch',
        'Pugno Chiuso',
        'Segno A Mano Fisted'
    ],
    '🤛{{skin_tone}}': [
        'Pugno Sinistro',
        ':left_fist_bump:'
    ],
    '🤜{{skin_tone}}': [
        'Pugno Destro',
        ':right_fist:bump:'
    ],
    '🤌{{skin_tone}}': [
        'Dita Pizzicate',
        ':pinched_fingers:',
        'Ma Che Vuoi',
        'Portafoglio Dito'
    ],
    '👏{{skin_tone}}': [
        'Cartello Delle Mani',
        ':cap:',
        ':clapping_hands:',
        'Applausi',
        'Clap',
        'Clapping',
        'Campo Da Golf',
        'Round Di Applausi'
    ],
    '🙌{{skin_tone}}': [
        'Persona che solleva entrambe le mani in Celebrazione',
        ':raised_hands:',
        ':raising_hands:',
        'Sollevamento Mani',
        'Armi In Aria',
        'Banzai',
        'Miracolo Festivus',
        'Hallelujah',
        'Lode Mani',
        'Due Mani'
    ],
    '👐{{skin_tone}}': [
        'Apri Cartello Mani',
        ':open_hands_sign:',
        'Abbraccio',
        'Mani Jazz'
    ],
    '🤲{{skin_tone}}': [
        'Palme Su Insieme',
        ':palms_up_together:',
        'Dua'
    ],
    '🤝{{skin_tone}}': [
        'Handshake',
        ':handshake:',
        'Mani Scuotenti'
    ],
    '🙏{{skin_tone}}': [
        'Mani Pieghevoli',
        ':folded_hands:',
        'Namaste',
        'Per Favore',
        'Preghiera',
        'Grazie',
        'Persona con mani pieghevoli'
    ],
    '✍{{skin_tone}}': [
        'Scrittura Mano',
        ':writing_hand:'
    ],
    '🫱{{skin_tone}}': [
        'Mano Di Rightwards',
        ':rightwards_hand:'
    ],
    '🫲{{skin_tone}}': [
        'Mano A Sinistra',
        ':leftwards_hand:'
    ],
    '🫳{{skin_tone}}': [
        'Palm Down Hand',
        ':palm_down_hand:'
    ],
    '🫴{{skin_tone}}': [
        'Palm Up Hand',
        ':palm_up_hand:'
    ],
    '🫰{{skin_tone}}': [
        'Mano con indice dito e pollice incrociato',
        ':hand_with_index_finger_and_thumb_crossed:'
    ],
    '🫵{{skin_tone}}': [
        'Puntamento dell\'indice al visore',
        ':index_pointing_at_the_viewer:'
    ],
    '🫶{{skin_tone}}': [
        'Mani Del Cuore',
        ':heart_hands:',
        'Amore'
    ],
    '💪{{skin_tone}}': [
        'Bicchieri Flessibili',
        ':flexed_biceps:',
        'Muscoli Del Braccio Flessibile',
        'Musle',
        'Forte'
    ],
    '🦵{{skin_tone}}': [
        'Gamba',
        ':leg:'
    ],
    '🦶{{skin_tone}}': [
        'Piede',
        ':foot:'
    ],
    '👂{{skin_tone}}': [
        'Orecchio',
        ':ear:',
        'Orecchie',
        'Audizione',
        'Ascolto'
    ],
    '👃{{skin_tone}}': [
        'Naso',
        ':nose:',
        'Odore',
        'Sniffing',
        'Stinky'
    ],
    '🦻{{skin_tone}}': [
        'Orecchio con apparecchio acustico',
        ':ear_with_hearing_aid:'
    ],
    '🧠': [
        'Cervello',
        ':brain:',
        ':pink:'
    ],
    '🦷': [
        'Dente',
        ':tooth:',
        ':white:'
    ],
    '👀': [
        'Occhi',
        ':eyes:',
        'Sopracciglia',
        'Occhi Shifty',
        'Occhi Saggi'
    ],
    '👁️': [
        'Occhio',
        ':eye:',
        'Occhio Singolo'
    ],
    '👅': [
        'Lingua Fuori',
        ':tongue_out:',
        ':red:'
    ],
    '👄': [
        'Bocca',
        ':mouth:',
        'Bacio Labbra',
        'Labbra',
        ':red:'
    ],
    '🫦': [
        'Labbro Morso',
        ':biting_lip:',
        'Labbra',
        ':red:'
    ],
    '🫀': [
        'Cuore Anatomico',
        ':anatomical_heart:',
        ':red:'
    ],
    '🫁': [
        'Polmoni',
        ':lungs:',
        ':red:'
    ],
    '🦾': [
        'Braccio Meccanico',
        ':mechanical_arm:',
        'Forte',
        ':gray:',
        ':grey:'
    ],
    '🦿': [
        'Gamba Meccanica',
        ':mechanical_leg:',
        ':gray:',
        ':grey:'
    ],
    '💅{{skin_tone}}': [
        'Smalto Unghie',
        ':nail_polish:',
        'Dita',
        'Manicure',
        'Nonchalant'
    ],
    '🤳{{skin_tone}}': [
        'Selfie',
        ':selfie:',
        'Fotocamera Telefono',
        'Mano Selfie'
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
        'Pile di Poo',
        ':pile_of_poo:',
        'Terra Cane',
        'Poop Sorridente',
        ':brown:'
    ],
    '💋': [
        'Marchio Bacio',
        ':kiss_mark:',
        'Bacio Labbra',
        ':red:'
    ],
    '🦴': [
        'Ossa',
        ':bone:'
    ],
    '🧳': [
        'Bagaglio',
        ':luggage:',
        'Valigia'
    ],
    '🌂': [
        'Ombrello Chiuso',
        ':closed_umbrella:',
        'Ombrello Chiuso',
        'Ombrello Rosa',
        ':pink:',
        ':purple:'
    ],
    '☂️': [
        'Ombrello',
        ':umbrella:',
        ':purple:'
    ],
    '☔': [
        'Ombrello con gocce di pioggia',
        ':umbrella_with_rain_drops:',
        ':umbrella:',
        'Pioggia',
        'Rainy'
    ],
    '🧵': [
        'Bobina di filo',
        ':spool_of_thread:'
    ],
    '🧶': [
        'Palla di filato',
        ':ball_of_yarn:'
    ],
    '💄': [
        'Lipstick',
        ':lipstick:',
        'Lucentezza Labbra',
        'Trucco',
        ':red:'
    ],
    '💍': [
        'Anello',
        ':ring:',
        'Anello Di Diamante',
        'Anello Di Impegno'
    ],
    '💎': [
        'Pietra gemma',
        ':gem_stone:',
        'Diamante',
        'Gemma',
        'Pietra Gemma',
        'Gioiello',
        ':blue:'
    ],
    '💥': [
        'Simbolo Collisione',
        ':collision_symbol:',
        'Bang',
        'Esplode',
        'Impatto',
        'Spark Rosso',
        'Esplosione'
    ],
    '💫': [
        'Simbolo Capogiri',
        ':dizzy_symbol:',
        'Cerchio E Stella',
        ':yellow:'
    ],
    '💦': [
        'Simbolo Sudore Splashing',
        'sudore_gocce',
        'sudore_goccioline',
        'Plewds',
        'Acqua Spruzzante',
        'Gocce D\'Acqua',
        ':blue:'
    ],
    '💨': [
        'Dashing Assente',
        ':dashing_away:',
        'Veloce',
        'Vapore',
        'Vaping',
        'Vento',
        'Simbolo Dash',
        'Gust del vento'
    ],
    '🌬️': [
        'Volto Vento',
        ':wind_face:',
        'Vento Soffiante',
        'Madre Natura',
        'Vento Che Soffia Faccia',
        ':white:'
    ],
    '🐾': [
        'Stampe Di Paw',
        ':paw_prints:',
        'Stampe Cat Paw',
        'Dog Paw Prints',
        'Stampe Zampa Per Gattini',
        'Stampe Puppy Paw'
    ],
    '🕸️': [
        'Spider Web',
        ':spider_web:',
        'Cobweb',
        'Web',
        'Spiderweb'
    ],
    '🦠': [
        'Microbe',
        ':microbe:',
        'Cella',
        'Coronavirus',
        'COVID-19',
        'Germe',
        'Microrganismo',
        'Virus',
        ':green:'
    ],
    '💐': [
        'Mazzo Di Fiori',
        ':bouquet_of_flowers:'
    ],
    '🌍': [
        'Globe Mostrando Europa-Africa',
        ':globe_showing_europe_africa:',
        ':earth_africa:',
        'Terra',
        'Globo',
        'Pianeta',
        'Mondo',
        'Globe Mostrando Europa e Africa',
        ':blue:'
    ],
    '🌎': [
        'Globe Mostrando Le Americhe',
        ':globe_showing_americas:',
        ':earth_americas:',
        'Terra',
        'Globo',
        'Pianeta',
        'Mondo',
        ':blue:'
    ],
    '🌏': [
        'Globo Mostrando Asia-Australia',
        ':globe_showing_asia_australia:',
        ':earth_asia:',
        'Terra',
        'Globo',
        'Pianeta',
        'Mondo',
        'Globe Mostrando Asia e Australia',
        ':blue:'
    ],
    '🌐': [
        'Globo con Meridiani',
        ':globe_with_meridians:',
        'Internet',
        'World Wide Web',
        'WWW'
    ],
    '🌑': [
        'Simbolo Nuova Luna',
        ':new_moon:',
        'Luna Oscura',
        'Luna Ombra',
        'Eclisse Solare',
        ':black:'
    ],
    '🌒': [
        'Simbolo Luna Mezzaluna Depilante',
        ':waxing_crescent_moon:',
        ':yellow:',
        ':black:'
    ],
    '🌓': [
        'Simbolo Luna Del Primo Quarto',
        ':first_quarter_moon:',
        ':yellow:',
        ':black:'
    ],
    '🌔': [
        'Simbolo Luna Gibbosa',
        ':moon:',
        ':waxing_gibbous_moon:',
        ':yellow:',
        ':black:'
    ],
    '🌕': [
        'Simbolo Luna Piena',
        ':full_moon:',
        ':yellow:'
    ],
    '🌖': [
        'Simbolo Luna Gibbosa Calante',
        ':waning_gibbous_moon:',
        ':yellow:',
        ':black:'
    ],
    '🌗': [
        'Simbolo Luna Ultimo Trimestre',
        ':last_quarter_moon:',
        ':yellow:',
        ':black:'
    ],
    '🌘': [
        'Simbolo Luna Mezzaluna Calante',
        ':waning_crescent_moon:',
        ':yellow:',
        ':black:'
    ],
    '🌙': [
        'Luna Mezzaluna',
        ':crescent_moon:',
        ':yellow:'
    ],
    '🌚': [
        'Luna nuova con volto',
        ':new_moon_with_face:',
        'Luna Spaventosa',
        'Volto Luna Oscura',
        'Molester Moon',
        ':black:',
        ':gray:',
        ':grey:'
    ],
    '🌝': [
        'Luna piena con volto',
        ':full_moon_with_face:',
        'Moonface',
        'Luna Smiley',
        'Luna Sorridente',
        ':yellow:'
    ],
    '🌛': [
        'Primo Quartiere Luna con Volto',
        ':first_quarter_moon_with_face:',
        ':first_quarter_moon_face:',
        ':yellow:'
    ],
    '🌜': [
        'Luna dell\'Ultimo Quarto con Volto',
        ':last_quarter_moon_with_face:',
        ':last_quarter_moon_face:',
        ':yellow:'
    ],
    '🌞': [
        'Sole con viso',
        ':sun_with_face:',
        'Sole Smiley',
        'Sunface',
        'Sole Sorridente',
        ':yellow:'
    ],
    '☀️': [
        'Sun',
        ':sun:',
        'Sunshine',
        ':yellow:'
    ],
    '⭐': [
        'Stella',
        ':star:',
        'Stella Media Bianca',
        ':yellow:'
    ],
    '🌟': [
        'Stella Luminosa',
        ':glowing_star:',
        'Stella Splendente',
        ':yellow:'
    ],
    '☁️': [
        'Cloud',
        ':cloud:',
        'Nuvoloso',
        'Coperto',
        ':white:'
    ],
    '⛅': [
        'Sun Behind Cloud',
        ':thunder_cloud_and_rain:',
        ':thunder_cloud_rain:',
        ':cloud_with_lightning_and_rain:',
        ':white:'
    ],
    '⛈️': [
        'Nuvola con Lightning e Pioggia',
        ':thunder_cloud_and_rain:',
        ':thunder_cloud_rain:',
        ':cloud_with_lightning_and_rain:',
        'Tuono Nuvola e Pioggia',
        ':white:'
    ],
    '🌤️': [
        'Sole bianco con nuvola piccola',
        ':mostly_sunny:',
        ':sun_behind_small_cloud:',
        ':sun_small_cloud:',
        ':white_sun_small_cloud:',
        ':white_sun_with_small_cloud:',
        ':white:'
    ],
    '🌥️': [
        'Sole Dietro Grande Nuvola',
        ':sun_behind_large_cloud:',
        'Sole Bianco Dietro Nuvola',
        ':white:'
    ],
    '🌦️': [
        'Il sole bianco dietro la nube con la pioggia',
        ':sun_behind_rain_cloud:',
        ':partly_sunny_rain:',
        ':white_sun_rain_cloud:',
        ':white_sun_behind_cloud_with_rain:',
        ':white:'
    ],
    '🌧️': [
        'Nuvola con pioggia',
        ':cloud_with_rain:',
        ':white:'
    ],
    '🌨️': [
        'Nuvola con neve',
        ':cloud_with_snow:',
        ':white:'
    ],
    '🌩️': [
        'Nuvola con fulmine',
        ':cloud_with_lightning:',
        ':white:'
    ],
    '🌪️': [
        'Tornado',
        ':tornado:',
        'Cloud con Tornado'
    ],
    '🌫️': [
        'Fog',
        ':fag:',
        ':white:',
        ':gray:',
        ':grey:'
    ],
    '🌈': [
        'Arcobaleno',
        ':rainbow:',
        'Orgoglio Gay',
        'Arcobaleno Primario',
        'LGBTQIA+',
        'LGBT+'
    ],
    '❄️': [
        'Fiocco Di Neve',
        ':snowflake:',
        'Neve',
        'Neve',
        ':white:'
    ],
    '🌀': [
        'Ciclone',
        ':cyclone:',
        'Uragano',
        'Spirale',
        'Vortice',
        'Tornado'
    ],
    '⚡': [
        'Segno Ad Alta Tensione',
        ':high_voltage_sign:',
        'Bullone Fulmine',
        'Thunderbolt',
        'Alta Tensione'
    ],
    '☃️': [
        'Pupazzo Di Neve',
        ':snowman:',
        'Uomo Di Neve Con Fiocchi Di Neve',
        ':white:'
    ],
    '⛄': [
        'Pupazzo Di Neve Senza Neve',
        'snowman_without_snow',
        ':snowman:',
        'Ghiacciato Il Pupazzo Di Neve',
        'Olaf',
        'Pupazzo Di Neve',
        ':white:'
    ],
    '☄️': [
        'Cometa',
        ':comet:'
    ],
    '🔥': [
        'Fuoco',
        ':fire:',
        'Fiamma',
        'Caldo',
        'Lit',
        'Snapstreak',
        ':red:'
    ],
    '💧': [
        'Droplet',
        ':droplet:',
        'Acqua',
        'Goccia D\'Acqua',
        ':blue:'
    ],
    '✨': [
        'Scintillio',
        ':sparkles:',
        'Glitter',
        'Shiny',
        'Nuovo'
    ],
    '🌊': [
        'Onda D\'Acqua',
        ':water_wave:',
        'Spiaggia',
        'Onda Dell\'Oceano',
        'Mare',
        ':blue:'
    ],
    '🎄': [
        'Albero Di Natale',
        'crristmas_albero',
        'Natale',
        'Albero Di Natale',
        ':green:'
    ],
    '🎃': [
        'Jack-O-Lanterna',
        'lanterna',
        'Halloween',
        'Zucca',
        ':orange:'
    ],
    '🌻': [
        'Girasole',
        ':sunflower:',
        'Fiore Giallo',
        ':yellow:'
    ],
    '🌼': [
        'Blossom',
        ':blossom:',
        'Fioritura Fiore',
        'Daisy',
        'Fiore Giallo',
        ':yellow:'
    ],
    '🌷': [
        'Tulip',
        ':tulip:',
        ':pink:'
    ],
    '🌹': [
        'Fiore Di Rosa',
        ':rose_flower:',
        'Rosa Rossa',
        ':red:'
    ],
    '☘️': [
        'Shamrock',
        ':shamrock:',
        'Trifoglio',
        'Trefoil',
        ':green:'
    ],
    '🍀': [
        'Quattro Foglie Trifoglio',
        ':four_leaf_clover:',
        'Trifoglio',
        'Irlanda',
        'Fortunato',
        'Fortuna',
        ':green:'
    ],
    '🌸': [
        'Cherry Blossom',
        ':cherry_blossom:',
        'Fiore Rosa',
        'Sakura',
        ':pink:'
    ],
    '💮': [
        'Fiore Bianco',
        ':white_flower:',
        'Cherry Blossom',
        'Carta Doily',
        'Timbro Ben Fatto',
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
        'Semina',
        ':seedling:',
        'Primavera',
        'Sprout',
        'Germogli',
        ':green:'
    ],
    '🌲': [
        'Albero Evergreen',
        ':evergreen_tree:',
        'Albero Di Abete',
        'Albero Di Pino',
        ':green:'
    ],
    '🌳': [
        'Albero Deciduo',
        ':deciduous_tree:',
        'Albero Arrotondato',
        ':green:'
    ],
    '🌴': [
        'Albero Di Palma',
        ':palm_tree:',
        'Albero Di Cocco',
        ':green:'
    ],
    '🎋': [
        'Albero Tanabata',
        ':tanabata_tree:',
        'Tanabata',
        'Albero Dei Desideri'
    ],
    '🎍': [
        'Decorazione Pino',
        ':pine_decoration:',
        'Bambù',
        'Kadomatsu',
        'Decorazione Capodanno'
    ],
    '🌵': [
        'Cactus',
        ':cactus:',
        'Desert',
        ':green:'
    ],
    '🌾': [
        'Fagiolo di riso',
        ':sheaf_of_rice:',
        'Ritaglia',
        'Agricoltura',
        'Frumento',
        'Orecchio di riso'
    ],
    '🌿': [
        'Erba',
        ':herb:',
        'Ritaglia',
        'Pianta',
        ':green:'
    ],
    '🍁': [
        'Foglia D\'Acero',
        ':maple_leaf:',
        'Canada',
        'Canadese',
        'Acero',
        ':brown:'
    ],
    '🍂': [
        'Foglia Caduta',
        ':fallen_leaf:',
        'Foglia D\'Autunno',
        'Foglie D\'Autunno',
        'Foglie Marroni',
        'Foglie Cadute',
        'Foglie Cadute',
        ':brown:'
    ],
    '🍃': [
        'Foglia Fluttering in Vento',
        ':leaf_fluttering_in_wind:',
        ':leaves:',
        'Foglie Verdi',
        'Primavera',
        ':green:'
    ],
    '🪴': [
        'Pianta In Vaso',
        ':potted_plant:',
        ':green:'
    ],
    '🪸': [
        'Corallo',
        ':coral:',
        'Cambiamenti climatici'
    ],
    '🪷': [
        'Loto',
        ':lotus:',
        'Purezza',
        'Bellezza',
        'Calma',
        'Serenità'
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
        'Chiave',
        ':key:',
        'Chiave D\'Oro',
        ':gold:',
        ':yellow:'
    ],
    '🗝️': [
        'Vecchia Chiave',
        ':old_key:',
        ':brown:'
    ],
    '🔨': [
        'Martello',
        ':hammer:',
        'Martello Artiglio',
        'Handyman',
        'Strumento'
    ],
    '⛏️': [
        'Scegli',
        ':pick:',
        'Piccone'
    ],
    '🪓': [
        'Ascia',
        ':axe:',
        'pompiere'
    ],
    '🪚': [
        'Sega Di Carpenteria',
        ':carpentry_saw:'
    ],
    '🪛': [
        'Cacciavite',
        ':screwdriver:'
    ],
    '🪝': [
        'Gancio',
        ':hook:'
    ],
    '🪠': [
        'Plunger',
        ':plunger:'
    ],
    '🪣': [
        'Secchio',
        ':bucket:'
    ],
    '🔩': [
        'Dado e dardi',
        ':nut_and_bolt:',
        'Dardi',
        'Vite',
        ':gray:',
        ':grey:'
    ],
    '🗜️': [
        'Morsetto',
        ':clamp:',
        'Vice Tabella',
        'WinZip',
        'Compressione',
        ':gray:',
        ':grey:'
    ],
    '🔒': [
        'Bloccato',
        ':locked:',
        'Blocco Chiuso',
        'Lucchetto'
    ],
    '🔓': [
        'Sbloccato',
        ':unlocked:',
        'Apri Lucchetto',
        'Apri Blocco'
    ],
    '🔏': [
        'Bloccato con penna',
        ':locked_with_pen:',
        'Blocco E Penna',
        'Blocca Con Penna Fontana',
        'Blocca con penna inchiostro'
    ],
    '🔐': [
        'Bloccato con chiave',
        ':locked_with_key:',
        'Blocco chiuso con chiave'
    ],
    '🗡️': [
        'Dagger',
        ':dagger:',
        'Arma A Coltello',
        ':gray:',
        ':grey:'
    ],
    '⚔️': [
        'Spade Incrociate',
        ':crossed_swords:',
        ':gray:',
        ':grey:'
    ],
    '🔫': [
        'Pistol',
        ':pistol:',
        'Cannone',
        'Revolver',
        'Pistola Spruzzata',
        'Cannone D\'Acqua',
        'Pistola D\'Acqua'
    ],
    '🧰': [
        'Toolbox',
        ':toolbox:',
        ':red:'
    ],
    '🧲': [
        'Magnete',
        ':magnet:',
        ':red:'
    ],
    '💉': [
        'Syringe',
        ':syringe:',
        'Donazione Di Sangue',
        'Test Del Sangue',
        'Ago',
        'Vaccinazione',
        'sangue',
        'malato',
        'ill'
    ],
    '🧬': [
        'DNA',
        ':dna:',
        'Dna Doppio Elica'
    ],
    '🧪': [
        'Tubo Di Prova',
        ':test_tube:',
        ':green:'
    ],
    '🛏️': [
        'Letto',
        ':bed:',
        'Camera'
    ],
    '🛋️': [
        'Divano e lampada',
        ':couch_and_lamp:',
        'Lounge',
        'Settee',
        'Divano'
    ],
    '🪑': [
        'Presidenza',
        ':chair:'
    ],
    '🚪': [
        'Porta',
        ':door:',
        'Porta',
        'Porta Anteriore'
    ],
    '🪟': [
        'Finestra',
        ':window:'
    ],
    '🪜': [
        'Scala',
        ':ladder:'
    ],
    '🪞': [
        'Specchio',
        ':mirror:'
    ],
    '🚽': [
        'Wc',
        ':toilet:',
        'Bagno',
        'Loo',
        'Restroom',
        'WC',
        ':white:'
    ],
    '🚿': [
        'Doccia',
        ':shower:',
        'Testa Doccia',
        ':shower:'
    ],
    '🛁': [
        'Vasca',
        ':bathtub:',
        'Bagno Della Bolla',
        ':shower:'
    ],
    '🧴': [
        'Bottiglia Di Lozione',
        ':location_bottle:'
    ],
    '🧷': [
        'Perno Di Sicurezza',
        ':safety_pin:',
        ':gray:',
        ':grey:'
    ],
    '🧺': [
        'Cesto',
        ':basket:',
        ':brown:'
    ],
    '🧻': [
        'Rotolo di carta',
        ':roll_of_paper:',
        'Carta igienica',
        ':white:'
    ],
    '🧼': [
        'Barra di sapone',
        ':bar_of_soap:',
        'Tidy',
        'Clean',
        'Scrub'
    ],
    '🧽': [
        'Spugna',
        ':sponge:',
        ':yellow:'
    ],
    '🧯': [
        'Estintore',
        ':fire_extinguisher:',
        ':red:'
    ],
    '🚬': [
        'Sigaretta',
        ':cigarette:',
        'Simbolo Di Fumo'
    ],
    '⚰️': [
        'Bara',
        ':coffin:',
        'Casket',
        'Funerale',
        ':brown:'
    ],
    '⚱️': [
        'Urna Funerale',
        ':funeral_urn:',
        'Vaso'
    ],
    '🛡️': [
        'Scudo',
        ':shield:'
    ],
    '⚙️': [
        'Attrezzo',
        ':gear:',
        'Impostazioni',
        'Opzioni',
        ':gray:',
        ':grey:'
    ],
    '⚖️': [
        'Bilanciamento Scala',
        ':balance_scale:',
        'Bilancia di giustizia'
    ],
    '⛓️': [
        'Catene',
        ':chains:'
    ],
    '🔗': [
        'Link',
        ':link:',
        'Catena',
        'Hyperlink',
        'Catena Collegata',
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
        'Teschio',
        ':skull:',
        'Morte',
        'Teschio Grigio',
        'Scheletro',
        ':white:'
    ],
    '☠️': [
        'Teschio e Crossbones',
        ':skull_and_crossbones:',
        ':white:'
    ],
    '🎡': [
        'Ruota Ferris',
        ':ferris_wheel:',
        'Ruota Grande',
        'Fairgroundl',
        'Rotella Di Osservazione'
    ],
    '⛽': [
        'Pompa Carburante',
        'pompa_carburante:',
        'Petrolio',
        'Benzina',
        'Gas',
        ':red:'
    ],
    '🚨': [
        'Polizia Auto Revolving Luce',
        ':rotating_light:',
        ':police_police_car:',
        'Luce Di Emergenza',
        'Lampeggiante Luce',
        'Siren',
        ':red:'
    ],
    '🚥': [
        'Traffico Orizzontale',
        ':horizontal_traffic_light:',
        ':green:',
        ':red:',
        ':yellow:',
        ':orange:'
    ],
    '🚦': [
        'Traffico Verticale',
        ':vertical_traffic_light:',
        ':green:',
        ':red:',
        ':yellow:',
        ':orange:'
    ],
    '⚓': [
        'Anchor Motivo Dell\'Ammiraglio',
        ':anchor:',
        'Pescatore'
    ],
    '🚧': [
        'Cartello Di Costruzione',
        ':construction_sign:',
        'Cartello A Strisce Nero E Giallo',
        ':yellow:',
        ':black:'
    ],
    '🪂': [
        'Parachute',
        ':parachute:'
    ],
    '💺': [
        'Sedile',
        ':seat:',
        'Autobus Aereo Treno Aereo'
    ],
    '🪐': [
        'Saturno',
        ':saturn:'
    ],
    '🎆': [
        'Fuochi D\'Artificio',
        ':fireworks:',
        'Esplosione'
    ],
    '🎇': [
        'Senko Hanabi',
        ':senko_hanabi:',
        'Sparkler Fuoco D\'Artificio'
    ],
    '💷': [
        'Banconota Sterlina',
        ':pound:',
        ':pound_banknote:',
        'Nota £20',
        'Twenty Quid Note',
        'Banconota con segno di sterlina',
        ':purple:'
    ],
    '💶': [
        'Euro Banknote',
        ':euro:',
        ':euro_banknote:',
        '€100 Nota',
        'Banconota con segno in euro',
        ':blue:'
    ],
    '💵': [
        'Banconota Dollaro',
        ':dollar:',
        ':dollar_banknote:',
        '$1 Nota',
        'Banconota con segno di dollaro',
        'Dollaro Bill',
        'Dollaro Americano',
        ':green:'
    ],
    '💴': [
        'Banconota Yen',
        ':yen:',
        ':yen_banknote:',
        '<unk> 1000 Nota',
        'Nota Yen',
        'Banconota con segno Yen',
        ':yellow:'
    ],
    '⛺': [
        'Tenda Da Campeggio',
        ':camping_tent:'
    ],
    '⛲': [
        'Fontana',
        ':fountain:',
        'Caratteristica Dell\'Acqua',
        'Fontana D\'Acqua',
        'Parco'
    ],
    '💰': [
        'Borsa Dei Soldi',
        ':money_bag:',
        'Moneybags',
        'Ricco',
        '$'
    ],
    '💸': [
        'Soldi con le ali',
        ':money_with_wings:',
        'Soldi In Volo',
        ' Perdere Denaro'
    ],
    '🏷️': [
        'Etichetta Etichetta',
        ':label_tag:'
    ],
    '🔖': [
        'Segnalibro',
        ':bookmark:',
        'Etichetta Prezzo',
        'Tag'
    ],
    '📑': [
        'Schede Segnalibri',
        ':bookmark_tabs:',
        ':white:'
    ],
    '📯': [
        'Corno Postale',
        ':postal_horn:',
        'Bugle',
        'Corno Francese'
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
        'Popper Del Partito',
        ':party_popper:',
        'Celebrazione',
        'Cappello Da Festa'
    ],
    '🎈': [
        'Palloncino',
        ':balloon:',
        'Festa',
        'Palloncino Rosso',
        ':red:'
    ],
    '🌡️': [
        'Termometro',
        ':thermometer:',
        'Meteo Caldo',
        'Temperatura',
        ':red:'
    ],
    '🛢️': [
        'Oil Drum',
        ':oil_drum:'
    ],
    '💣': [
        'Bomba',
        ':bomb:',
        'boom'
    ],
    '🔪': [
        'Coltello Da Cucina',
        ':kitchen_knife:',
        'Coltello',
        'Coltello Da Macellaio',
        'Hocho'
    ],
    '🏺': [
        'Amphora',
        ':amphora:',
        'Barattolo',
        'Vaso'
    ],
    '🗺️': [
        'Mappa Del Mondo',
        ':world_map:'
    ],
    '🎼': [
        'Punteggio Musicale',
        ':musical_score:',
        'Musica Spartiti',
        'Treble Clef'
    ],
    '🎬': [
        'Bordo Di Clapper',
        ':clapper_board:',
        'Taglia',
        'Azione',
        'Direttore',
        'Ardesia Del Film'
    ],
    '🎻': [
        'Violino',
        ':violin:',
        'Quartetto Di Stringa',
        'Mondo Più Piccolo Violino'
    ],
    '🎺': [
        'Tromba',
        ':trumpet:',
        'Corno',
        'Jazz'
    ],
    '🎸': [
        'Chitarra',
        ':guitar:',
        'Chitarra Acustica',
        'Chitarra Bassi',
        'Chitarra Elettrica'
    ],
    '🎷': [
        'Sassofono',
        ':saxophone:',
        'Jazz',
        'Sax'
    ],
    '🥁': [
        'Tamburo',
        ':drum:',
        'Tamburo con bastoncini'
    ],
    '🎹': [
        'Pianoforte',
        ':piano:',
        'Tastiera Musicale',
        ':white:',
        ':black:'
    ],
    '🪕': [
        'Banjo',
        ':banjo:'
    ],
    '🪗': [
        'Fisarmonica',
        ':accordion:'
    ],
    '🪘': [
        'Tamburo Lungo',
        ':long_drum:'
    ],
    '🎨': [
        'Tavolozza Artista',
        ':artist_palette:',
        'Arte',
        'Pittura'
    ],
    '🧩': [
        'Pezzo Puzzle',
        ':puzzle_piece:',
        'Pezzo Puzzle Puzzle',
        ':green:'
    ],
    '🎲': [
        'Partita Morta',
        ':game_die:',
        'Dadi',
        ':white:'
    ],
    '🎭': [
        'Arti Di Esecuzione',
        'performing_arts',
        'Teatro',
        'Teatro',
        'Maschere Drammatiche',
        'Maschere Teatro Greco',
        'Maschere tragedie e commedia',
        'Venezia'
    ],
    '🔍': [
        'Lente Di Ingrandimento Inclinato A Sinistra',
        ':mag:',
        ':magnifying_glass_tilted_left:',
        'Magnifier',
        'Cerca Icona',
        'Vetro Di Ingrandimento A Sinistra',
        'Trova',
        ':transparent:'
    ],
    '🔎': [
        'Vetro Di Ingrandimento Inclinato A Destra',
        ':mag_right:',
        ':magnifying_glass_tilted_right:',
        'Magnifier',
        'Cerca Icona',
        'Vetro Di Ingrandimento A Destro',
        'Trova',
        ':transparent:'
    ],
    '⌛': [
        'Vetro Orario Fatto',
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
        'Vetro Orario Non Fatto',
        ':hourglass_flowing_sand:',
        ':hourglass_not_done:',
        'Vetro orario con sabbia fluente',
        'Busy',
        'Time',
        'Egg timer',
        'Flowing',
        'Sand Clock'
    ],
    '🕐': [
        'Un OClock',
        ':clock1:',
        ':one_oclock:',
        'Orologio Faccia Un OClock',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕜': [
        'Orologio Faccia Una Trenta',
        ':clock130:',
        ':one_thirty:',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕑': [
        'Due OClock',
        ':clock2:',
        ':two_oclock:',
        'Orologio Faccia Due OClock',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕝': [
        'Orologio Faccia Due-Trenta',
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
        'Orologio Faccia Tre OClock',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕞': [
        'Volto Orologio Tre Trenta',
        ':clock330:',
        ':three_thirty:',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕓': [
        'Quattro OClock',
        ':clock4:',
        ':four_oclock:',
        'Orologio Faccia Quattro OClock',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕟': [
        'Orologio Faccia Quattro-Trenta',
        ':clock430:',
        ':four_thirty:',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕔': [
        'Cinque OClock',
        ':clock5:',
        ':five_oclock:',
        'Orologio Face Cinque OClock',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕠': [
        'Orologio Faccia Cinquementa',
        ':clock530:',
        ':five_thirty:',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕕': [
        'Sei OClock',
        ':clock6:',
        ':size_oclock:',
        'Orologio Faccia Sei OClock',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕡': [
        'Volto Orologio Sessi-Trenta',
        ':clock630:',
        ':six_thirty:',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕖': [
        'Sette OClock',
        ':clock7:',
        ':seven_oclock:',
        'Orologio Faccia Sette OClock',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕢': [
        'Orologio Faccia Sette-Trenta',
        ':clock730:',
        ':sever_thirty:',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕗': [
        'Otto OClock',
        ':clock8:',
        ':eight_oclock:',
        'Orologio Faccia Otto OClock',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕣': [
        'Orologio Faccia Ottobre-Trenta',
        ':clock830:',
        ':eight_thirty:',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕘': [
        'Nove OClock',
        ':clock9:',
        ':nine_clock:',
        'Orologio Faccia Nove OClock',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕤': [
        'Orologio Faccia Nove Trenta',
        ':clock930:',
        ':nine_thirty:',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕙': [
        'Dieci OClock',
        ':clock10:',
        ':ten_oclock:',
        'Orologio Viso Dieci OClock',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕥': [
        'Orologio Faccia Ten-Trenta',
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
        'Orologio Viso Undici OClock',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕦': [
        'Orologio Viso Undici Trenta',
        ':clock1130:',
        ':eleven_thirty:',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕛': [
        'Dodici OClock',
        ':clock12:',
        ':twelve_oclock:',
        'Orologio Faccia Dodici OClock',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕧': [
        'Orologio Volto Dodici-Trenta',
        ':clock1230:',
        ':twelve_thirty:',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '♨️': [
        'Molle Calde',
        ':hot_springs:',
        'Onsen',
        'Vapore',
        ':red:'
    ],
    '💈': [
        'Palo Barbiere',
        ':barber_pole:',
        'Negozio Di Barbiere',
        'Strisce Barberi',
        'Parrucchiere',
        ':blue:',
        ':red:'
    ],
    '🎪': [
        'Tenda Del Circo',
        ':circus_tent:',
        'Grande Top',
        'Circo'
    ],
    '💢': [
        'Simbolo Della Rabbia',
        ':anger_symbol:',
        'Cartello Della Rabbia',
        'Pop Vena',
        ':red:'
    ],
    '🗯️': [
        'Bubble Di Rabbia Destra',
        ':right_anger_bubble:',
        ':anger_right:',
        'Zig Zag Bubble',
        'Bolla Discorso Arrabbiato',
        ':white:'
    ],
    '🗨️': [
        'Bolla Vocale Sinistra',
        ':left_speech_bubble:',
        ':speech_left:'
    ],
    '💊': [
        'Pill',
        ':pill:',
        'Capsula',
        'Tablet',
        'Farmaci',
        'Malato',
        'ill',
        ':yellow:',
        ':red:'
    ],
    '🎎': [
        'Bambole',
        ':dolls:',
        'Hinamatsuri',
        'Bambole Imperiali',
        'Bambole Giapponesi'
    ],
    '🎏': [
        'Carp Streamer',
        ':carp_streamer:',
        'Bandiera Del Pesce',
        'Koinobori',
        'Calze Vento'
    ],
    '🎐': [
        'Wind Chime',
        ':wind_chime:',
        'Furin',
        'Meduse',
        'Campana Del Vento'
    ],
    '🎀': [
        'Arco Del Nastro',
        ':ribbon_bow:',
        'Arco Rosa',
        'Arco',
        ':pink:'
    ],
    '🎁': [
        'Regalo Avvolto',
        ':wrapped_gift:',
        'Regalo Compleanno',
        'Regalo Di Natale',
        'Regalo',
        'Box Regalo',
        'Presente',
        'Presente Avvolto'
    ],
    '🎫': [
        'Ticket',
        ':ticket:',
        'Ticket Stub',
        'World Tour Ticket'
    ],
    '🃏': [
        'Joker',
        ':joker:',
        'Joker Card',
        'Giocare A Carte Nero Joker'
    ],
    '💡': [
        'Lampadina',
        ':light_bulb:',
        'Idea',
        'Lampadina Elettrica'
    ],
    '🔦': [
        'Torcia',
        ':flashlight:',
        'Torcia',
        'Torcia Elettrica'
    ],
    '🏮': [
        'Lanterna Di Carta Rossa',
        ':izakaya_lantern:',
        ':lantern:',
        ':red_paper_lantern:',
        'Lanterna Asiatica',
        'Lanterna Giapponese',
        'Lanterna Rossa',
        'Lanterna Di Izakaya',
        ':red:'
    ],
    '📦': [
        'Pacchetto',
        ':package:',
        'Casella',
        'Parcel',
        ':brown:'
    ],
    '📇': [
        'Scheda Indice',
        ':card_index:',
        'Rolodex',
        'Scheda Di Sistema',
        'Indice Carta'
    ],
    '🕳️': [
        'Buca',
        ':hole:',
        ':black:'
    ],
    '👁️‍🗨️': [
        'Sono Testimone',
        ':eye_in_speech_bubble:',
        ':eye_speech_bubble:',
        ':eye-in-speech-bubble:',
        'Occhio nella bolla vocale'
    ],
    '⚜️': [
        'Fleur-de-lis',
        ':fleur_de_lis:',
        'Esploratori',
        'New Orleans Saints'
    ],
    '⚗️': [
        'Alembic',
        ':alembic:'
    ],
    '🕯️': [
        'Candela',
        ':candle:',
        ':white:'
    ],
    '🖼️': [
        'Immagine Inquadrata',
        ':framed_picture:',
        'Pittura',
        'Cornice Immagine',
        'Cornice con immagine'
    ],
    '🛍️': [
        'Shopping Borse',
        ':shopping_bags:'
    ],
    '🛒': [
        'Carrello Della spesa',
        ':shopping_cart:',
        'Carrello Shopping',
        ':shopping_trolley:',
        ':gray:',
        ':grey:',
        'Market'
    ],
    '🎟️': [
        'Biglietti Di Ingresso',
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
        'Ricevuta',
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
        'Scopa',
        ':broom:',
        'Pennello',
        'Spazzata',
        ':yellow:',
        'Tidy',
        'Clean'
    ],
    '🎰': [
        'Slot Machine',
        ':slot_machine:',
        'Casinò',
        'Macchina Da Frutta',
        'Gioco d\'azzardo',
        'Macchina Del Poker'
    ],
    '🦽': [
        'Sedia A Rotelle Manuale',
        ':manual_wheelchair:',
        ':wheelchair:',
        'invalid',
        'disability',
        'accessibility',
        'mobility'
    ],
    '🦼': [
        'Sedia A Rotelle Motorizzata',
        ':motorized_wheelchair:',
        ':wheelchair:',
        'invalid',
        'disability',
        'accessibility',
        'mobility'
    ],
    '🪔': [
        'Lampada Diya',
        ':diya_lamp:'
    ],
    '🦯': [
        'White Cane',
        ':whie_cane:'
    ],
    '🩸': [
        'Goccia di sangue',
        ':drop_of_blood:',
        ':red:'
    ],
    '🩹': [
        'Fasciatura Adesiva',
        ':adhesive_bandage:'
    ],
    '🩺': [
        'Stetoscopio',
        ':stethoscope:'
    ],
    '🪶': [
        'Piuma',
        ':feather:',
        'Animal'
    ],
    '🪤': [
        'Trappola Del Mouse',
        ':mouse_trap:'
    ],
    '🫖': [
        'Teapot',
        ':teapot:'
    ],
    '🪨': [
        'Roccia',
        ':rock:',
        ':gray:',
        ':grey:'
    ],
    '🪵': [
        'Legno',
        ':wood:',
        ':brown:'
    ],
    '🪄': [
        'Bacchetta Magica',
        ':magin_wand:'
    ],
    '🔮': [
        'Sfera di Cristallo',
        ':crystal_ball:',
        'Clairvoyant',
        'Fortune Teller',
        'Psichico',
        'Cristallo Viola',
        ':purple:'
    ],
    '🪅': [
        'Pin<unk> ata',
        ':pinata:',
        ':piñata:'
    ],
    '🪆': [
        'Bambole Di Nesting',
        ':nesting_dolls:',
        'Matrioshka'
    ],
    '🪡': [
        'Ago Da Cucire',
        ':swing_needle:'
    ],
    '🪢': [
        'Nodo',
        ':knot:',
        ':red:',
        ':blue:'
    ],
    '🪙': [
        'Moneta',
        ':coin:'
    ],
    '🪃': [
        'Boomerang',
        ':boomerang:',
        ':brown:'
    ],
    '🪥': [
        'Spazzolino',
        ':toothbrush:'
    ],
    '🪦': [
        'Headstone',
        ':headstone:',
        ':gray:',
        ':grey:'
    ],
    '🪧': [
        'Placard',
        ':placard:'
    ],
    '🪒': [
        'Rasoio',
        ':razor:'
    ],
    '🫙': [
        'Barattolo',
        ':jar:',
        ':transparent:'
    ],
    '🛞': [
        'Ruota',
        ':wheel:',
        'Veicoli',
        'Automobili',
        ':black:'
    ],
    '🛟': [
        'Anello Boa',
        ':ring_buoy:',
        'Conservatore Di Vita',
        'Anello Di Vita',
        'Barche',
        'Sicurezza',
        'Acqua',
        'Salvataggio',
        ':red:',
        ':white:'
    ],
    '🪬': [
        'Hamsa',
        ':hamsa:',
        'Islam',
        'Giudaismo',
        'Buddhism',
        'Cristianesimo',
        'Religioni',
        'Fortuna',
        'Protezione',
        'Orientamenti',
        'Potere Femminile',
        'Fede',
        ':blue:'
    ],
    '🪩': [
        'Sfera A Specchio',
        ':mirror_ball:',
        'Palla Da Discoteca'
    ],
    '🪫': [
        'Batteria Bassa',
        ':low_battery:',
        ':red:',
        'Energia',
        'Rosso',
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
        'Bolle',
        ':bubbles:',
        'Soap Suds',
        'Carbonato',
        'Personalità effervescente',
        ':transparent:'
    ],
    '🪪': [
        'Carta Di Identificazione',
        ':identification_card:',
        'Identità',
        'Passaporto',
        'ID',
        'Country',
        'Security',
        'Travel'
    ],
    '🧿': [
        'Nazar Amulet',
        ':nazar_amulet:',
        'Occhio Malvagio',
        ':blue:'
    ],
    '🧸': [
        'Orsacchiotto',
        ':teddy_bear:',
        'Giocattolo',
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