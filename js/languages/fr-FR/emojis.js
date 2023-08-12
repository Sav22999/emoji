// descriptions took from Emojipedia.org
lang = 'fr';
//use i18n language code of the browser, more details: https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/i18n/LanguageCode
titles_language[lang] = {
    '🔍': 'Résultats',
    '🕒': 'Émoticônes les plus utilisés',
    '😀': 'Émoticône',
    '🙋': 'Personnes',
    '🦊': 'Animaux',
    '🅰️': 'Symboles',
    '🍎': 'Nourriture et boissons',
    '🏳️‍🌈': 'Drapeaux',
    '🏊': 'Sportif',
    '✈️': 'Voyage et lieux',
    '🖱️': 'Technologies et bureau',
    '👗': 'Vêtements et accessoires',
    '🖐️': 'Mains et parties du corps',
    '🛎️': 'Autre'
};
emojis_language[lang] = [];
/*search*/
emojis_language[lang][0] = {};
/*smileys*/
emojis_language[lang][2] = {
    '😀': [
        'Visage rieur',
        ':grinning:',
        ':grinning_face:',
        '::):',
        'Visage heureux',
        'Émoticône'
    ],
    '😃': [
        'Visage souriant avec de grands yeux',
        ':smiley:',
        ':grinning_face_with_big_eyes:',
        '::D:',
        'Visage heureux',
        'Émoticône',
        'Visage souriant avec bouche ouverte'
    ],
    '😄': [
        'Visage souriant avec les yeux souriants',
        ':smile:',
        ':grinning_face_with_smiling_eyes:',
        'Visage heureux',
        'Émoticône',
        'Souillant avec des yeux étincelants',
        'Visage souriant avec la bouche ouverte et les yeux souriants'
    ],
    '😁': [
        'Beaming Face avec des yeux souriants',
        ':grin:',
        ':beaming_face_with_smiling_eyes:',
        'Visage souriant avec les yeux souriants'
    ],
    '😆': [
        'Visage épineux',
        ':grinning_squinting_face:',
        ':xD:',
        ':><:',
        'Grand sourire',
        'Sourire aux yeux fermés',
        'Rire',
        'Visage souriant avec des yeux serrés',
        'Visage souriant avec bouche ouverte et yeux serrés'
    ],
    '😅': [
        'Sangsue avec sueur',
        ':happy_sweat:',
        'Exercice',
        'Sueur heureuse',
        'Grinning Face avec des yeux étincelants et une goutte de sueur',
        'Visage souriant avec bouche ouverte et sueur froide'
    ],
    '🤣': [
        'ROFL',
        ':rofl:',
        'Lancer sur le sol riant'
    ],
    '😂': [
        'Visage avec larmes de la joie',
        ':lol:',
        'Rire',
        'Cri riant',
        'Larmes riantes',
        'LOL'
    ],
    '🙂': [
        'Visage légèrement souriant',
        ':smile:',
        '::):',
        'Légèrement heureux',
        'C\'est bon'
    ],
    '🙃': [
        'Face à l\'envers vers le bas',
        ':upside-down_face:',
        ':upside_down_face:',
        'Sarcasm',
        'Silly',
        'Face vers le bas'
    ],
    '😉': [
        'Visage de clin d\'oeil',
        ':winking:',
        ':;):',
        'Clin d\'oeil',
        'Fais un clin d\'oeil',
        'Visage clignotant'
    ],
    '😊': [
        'Visage souriant avec les yeux souriants',
        ':smiling_face:',
        ':^^:',
        'Visage heureux',
        'Sourire',
        'Émoticône'
    ],
    '😇': [
        'Visage souriant avec Halo',
        ':smiling_angel:',
        'Ange',
        'Halo'
    ],
    '🥰': [
        'Visage souriant avec des cœurs',
        ':smiling_hearts:',
        'En Face d\'Amour',
        'Visage souriant avec les yeux souriants et les trois cœurs'
    ],
    '😍': [
        'Visage souriant avec les yeux de cœur',
        'love',
        ':smiling_heart-eyes:',
        ':smiling_heart_eyes:',
        ':*.*:',
        'Heart Eyes',
        'Heart Face',
        'Smiling Face with Heart-Shaped Eyes'
    ],
    '🤩': [
        'Sang-Étoile',
        ':star_eyes:',
        'Excité',
        'Yeux étoilés',
        'Œil étoilé',
        'Wow Face',
        'Visage aux yeux étoilés',
        'Grinning Face avec les yeux des étoiles'
    ],
    '😘': [
        'Visage soufflant un baiser',
        'love',
        ':kissing_face:',
        '::*:',
        '::-*:',
        'Blow A Kiss',
        'Blowing Kiss',
        'Kissing',
        'Face Throwing a Kiss'
    ],
    '😗': [
        'Visage embrassant',
        'kiss',
        ':kissing_face:',
        '::*:',
        '::-*:',
        'Duck Face',
        'Kissy Face',
        'Whistling'
    ],
    '☺️': [
        'Visage souriant',
        ':smiling_face:',
        'Visage heureux',
        'Émoticône',
        'Sourire',
        'Visage souriant blanc'
    ],
    '😚': [
        'Baiser la face avec les yeux fermés',
        ':kissing_face:',
        'Baiser la face',
        'Kissy Face'
    ],
    '😙': [
        'Baiser la face avec les yeux souriants',
        ':kissing_face:',
        'Baiser la face',
        'Kissy',
        'Siffler',
        'Siffler'
    ],
    '😋': [
        'Nourriture savoureuse face',
        ':savoring_face:',
        'Bonjour',
        'Affamé',
        'Lèvres lèvres souriantes',
        'Nourriture délicieuse face à face',
        'Yum Yum'
    ],
    '😛': [
        'Visage avec langue',
        ':tongue_face:',
        '::P:',
        'Joue',
        'Visage de langue',
        'Sortie de langue',
        'Visage avec langue bloquée'
    ],
    '😜': [
        'Visage du clin d\'oeil avec la langue',
        ':winking:',
        ':;P:',
        'Fou',
        'Visage fou',
        'Viser la face avec une langue bloquée',
        'Visage avec une langue bloquée et un clin d\'oeil'
    ],
    '🤪': [
        'Zany Face',
        ':crazy_face:',
        'Yeux fous',
        'Excité',
        'Sauvage',
        'Goofy Face',
        'Grinning Face avec un grand et un petit œil'
    ],
    '😝': [
        'Quadrant la face avec la langue',
        ':tongue_face:',
        ':xP:',
        'Sortie de la langue',
        'Face aux langages bloqués et aux yeux serrés',
        'Visage avec langue bloquée et yeux serrés'
    ],
    '🤑': [
        'Mâche-bouche',
        ':money-mouth_face:',
        ':money_mouth_face:',
        '::$:',
        'Yeux de Panneau Dollar',
        'Face d’argent',
        'Riche'
    ],
    '🤗': [
        'Visage d\'embrassage',
        ':hugging_face:',
        'Câlin',
        'Accrochage',
        'Câlins',
        'Un visage heureux avec des mains accablantes'
    ],
    '🤭': [
        'Oups',
        ':oops:',
        'Visage à mains nues',
        'Visage souriant avec les yeux souriants et la bouche recouverte à la main'
    ],
    '🤫': [
        'Shh',
        ':shushing_face:',
        'Écraser',
        'Ecrasement du visage',
        'Masquage',
        'Silencieux',
        'Silencieux',
        'Silencieux',
        'Visage avec les lèvres fermées couvertes par le doigt'
    ],
    '🤔': [
        'Qu\'est-ce que',
        ':thinking_face:',
        '?',
        'Hmm',
        'Visage Pensant',
        'Pouce de menton',
        'Réfléchisseur',
        'Lancer de l\'ombre'
    ],
    '🤐': [
        'Code postal',
        'silent',
        'silence',
        ':zip_face:',
        'Zipper-Mouth Face',
        'Lips Sealed',
        'Sealed Lips',
        'Zip It',
        'Face With a Zipper Mouth'
    ],
    '🤨': [
        'Visage avec sourcils levés',
        ':face_with_raised_eyebrow:',
        'Colbert',
        'Le Rocher',
        'Visage avec sourcils levés',
        'Visage avec un sourcil levé'
    ],
    '😐': [
        'Visage neutre',
        ':neutral_face:',
        ':|',
        'Face avec bouche droite',
        'Face droite'
    ],
    '😑': [
        'Visage sans expression',
        ':expressionless_face:',
        '-_-',
        'Face avec bouche droite',
        'Visage droit'
    ],
    '😶': [
        'Visage sans bouche',
        ':face_without_mouth:',
        'Visage vide',
        'Sans bouche',
        'Silencieux',
        'Silencieux'
    ],
    '😏': [
        'Visage souriant',
        ':smirking_face:',
        'Rinçage',
        'Visage sexuel',
        'Smug Face',
        'Sourire suggestif'
    ],
    '😒': [
        'Visage non utilisé',
        ':unamused_face:',
        'Mécontent',
        'Meh',
        'Œil latéral',
        'Sans impression'
    ],
    '🙄': [
        'Visage avec les yeux roulés',
        ':face_with_rolling_eye:',
        ':eye_roll:',
        'Rouleau des yeux'
    ],
    '😬': [
        'Visage grimaçant',
        ':awkward:',
        'Maladroit',
        'Eek',
        'Pied dans la montagne',
        'Nervous',
        'Snapchat Mutuel #1 Meilleur Ami'
    ],
    '🤥': [
        'Face de mensonge',
        ':lying_face:',
        'menteur',
        'Nez long',
        'Pinocchio'
    ],
    '😌': [
        'Visage retiré',
        ':relieved_face:',
        'Contenus',
        'Plein de plaisir'
    ],
    '😔': [
        'Désolé',
        ':sad_face:',
        'Visage Pensif',
        'Pensif',
        'Tristesse',
        'format@@0 Sadface',
        'Chagrin',
        'Visage pensif triste'
    ],
    '😪': [
        'Visage endormi',
        ':sleepy_face:',
        'Larme latérale',
        'Bulle de chat Snot'
    ],
    '🤤': [
        'Salive',
        ':saliva_face:',
        'Drooling Face',
        'Drool'
    ],
    '😴': [
        'Visage endormi',
        ':sleeping_face:',
        ':zzz:',
        'ZZ',
        'Visage de sommeil',
        'Arrondissement',
        'Zzz Face'
    ],
    '🥱': [
        'Visage d\'anéantissement',
        'tired',
        ':yawning_face:'
    ],
    '😷': [
        'Visage avec Masque Médical',
        'sick',
        'doc',
        ':face_with_medical_mask:',
        'Coronavirus',
        'COVID-19',
        'Mask Face',
        'Surgical Mask',
        'ill'
    ],
    '🤒': [
        'Visage avec Thermomètre',
        ':face_with_thermometer:',
        ':sick:',
        ':ill:',
        'Ill',
        'Malade'
    ],
    '🤕': [
        'Visage à la tête',
        'hospital',
        'sick',
        ':face_with_head-bandage:',
        ':face_with_head_bandage:',
        'Bandaged Head',
        'Clumsy',
        'Injured',
        'ill'
    ],
    '🤢': [
        'Visage nauséé',
        'sick',
        ':nauseated_face:',
        'Disgust',
        'Green Face',
        'Vomit',
        ':green:',
        'ill'
    ],
    '🤮': [
        'Vomissement de visage',
        'sick',
        ':face_vomiting:',
        'Spew',
        'Bleah',
        'Bleurgh',
        'Yuk',
        'Yuck',
        'Ew',
        'Spew',
        'Throwing Up',
        'Vomit',
        'Face with Open Mouth Vomiting',
        'ill'
    ],
    '🤧': [
        'Visage éternuant',
        'sick',
        ':sneezing_face:',
        'Gesundheit',
        'ill'
    ],
    '🥵': [
        'Visage chaud',
        ':hot_face:',
        'Visage surchauffé',
        ':red:'
    ],
    '🥶': [
        'Visage froid',
        ':cold_face:',
        'Cool',
        'Froideur',
        'Visage Glacant',
        ':blue:'
    ],
    '🥴': [
        'Visage Woozy',
        ':woozy_face:',
        'Visage ivre',
        'Visage avec les yeux inconnus et la bouche vague'
    ],
    '😵': [
        'Dizzy Face',
        ':dizzy_face:',
        'Visage des yeux de croix',
        'Visage des yeux en spirale'
    ],
    '🤯': [
        'Tête explosive',
        'boom',
        ':exploding_head:',
        'Mind Blown',
        'Shocked Face with Exploding Head'
    ],
    '🤠': [
        'Chapeau de Cowboy',
        ':cowboy_hat_face:',
        'Cowboy',
        'Visage de Cowboy',
        'Visage avec Chapeau de Cowboy'
    ],
    '🥳': [
        'Visage de groupe',
        ':partying_face:',
        'Visage de la fête',
        'Face à Corne de la fête et Chapeau de fête'
    ],
    '😎': [
        'Visage souriant avec lunettes de soleil',
        ':smiling_face_with_sunglasses:',
        'Cool',
        'Meilleurs amis mutuels (Snapchat)',
        'Lunettes de soleil'
    ],
    '🤓': [
        'Visage Nerd',
        ':nerd_face:',
        'Nerdy'
    ],
    '🧐': [
        'Visage avec monocle',
        ':face_with_monocle:'
    ],
    '😕': [
        'Visage confus',
        ':confused_face:',
        '::/:',
        '::S:',
        'Non pluss',
        'Problème'
    ],
    '😟': [
        'Visage inquiet',
        ':worried_face:',
        '::(:',
        'Tristesse',
        'format@@0 Sadface'
    ],
    '🙁': [
        'Visage légèrement froncé',
        ':slightly_frowning_face:',
        '::(:',
        'Légèrement triste'
    ],
    '☹️': [
        'Face frontale',
        ':frowning_face:',
        '::(:',
        'Megafrown',
        'Face de frondaison blanche'
    ],
    '😮': [
        'Wow',
        ':wow:',
        '::O:',
        'Oh mon!',
        'Visage avec bouche ouverte',
        'Bouche ouverte',
        'Visage Surprisé avec bouche ouverte'
    ],
    '😯': [
        'Visage purgé',
        ':husked_face:',
        '::O:',
        'Surprise',
        'Visage Surprisé'
    ],
    '😲': [
        'Face Électrisée',
        ':shocked_face:',
        '::O:',
        'Wow',
        'Visage étourdi',
        'Visage ivre',
        'Visage gastrique'
    ],
    '😳': [
        'Visage vidé',
        ':flushed_face:',
        '::$:',
        'Visage flottant',
        'Embarrassé',
        'Honte',
        'Visage avec des yeux ouverts larges'
    ],
    '🥺': [
        'Visage de tête',
        ':pleading_face:',
        '::(:',
        'mendicité',
        'Yeux brillants',
        'Simp',
        'Visage avec les Yeux Pleading'
    ],
    '😦': [
        'Frowning Face avec bouche ouverte',
        ':frowning_face_with_open_mouth:',
        ':D::',
        'Anéantissement'
    ],
    '😨': [
        'Effrayé',
        ':scared:',
        ':D::',
        'Visage effrayant',
        'Surprise'
    ],
    '😰': [
        'Visage angélique avec sueur',
        ':anxious_face_with_sweat:',
        'Visage bleu',
        'Visage inquiet',
        'Visage nerveux',
        'Visage avec bouche ouverte et sueur froide'
    ],
    '😥': [
        'Sad mais Retrait de la face',
        ':sad_but_relieved_face:',
        '::(:',
        'Sueur sourcil',
        'Visage dissolu mais soulagé'
    ],
    '😢': [
        'Visage pleurant',
        ':crying_face:',
        '::(:',
        'En pleurant',
        'Déchirure'
    ],
    '😭': [
        'Visage fort pleurant',
        ':loudly_crying_face:',
        'Bawling',
        'En pleurant',
        'Larmes tristes',
        'Sobbing'
    ],
    '😱': [
        'Cri de peur',
        ':face_screaming_in_fear:',
        'Accueil seul',
        'Cri',
        'Visage hurlant'
    ],
    '😖': [
        'Visage ConFondé',
        ':confounded_face:',
        'Bouche carquoisante',
        'Visage Scrunché'
    ],
    '😣': [
        'Visage persistant',
        ':persevering_face:',
        'Visage sans défense',
        'Yeux croustillés'
    ],
    '😞': [
        'Visage désavoué',
        ':disappointed_face:',
        '::(:',
        'Tristesse',
        'format@@0 Sadface'
    ],
    '😓': [
        'Descendre la face avec la sueur',
        ':downcast_face_with_sweat:',
        'Travail difficile',
        'Visage de la sueur triste',
        'Visage avec sueur froide'
    ],
    '😩': [
        'Visage Weary',
        ':weary_face:',
        'Visage Détraqué',
        'Muriers'
    ],
    '😫': [
        'Visage fatigué',
        ':tired_face:',
        'Épuisé',
        'Fed Up',
        'Visage Détraqué'
    ],
    '😤': [
        'Visage avec la vapeur du nez',
        ':face_with_steam_from_nose:',
        'Diffusion des griefs',
        'Frustré',
        'Visage fou',
        'Vaporisation',
        'Pousser avec la colère'
    ],
    '😡': [
        'Visage en mouvement',
        'fuck',
        ':pouting_face:',
        'Angry Face',
        'Grumpy Face',
        'Mad Face',
        'Red Face',
        ':red:'
    ],
    '😠': [
        'Visage en colère',
        ':angry_face:',
        'En colère',
        'Visage Grumpy'
    ],
    '🤬': [
        'Taillade',
        'fuck',
        ':swearing:',
        '@#$%&!',
        'Face with Symbols on Mouth',
        'Cursing',
        'Cussing',
        'Grawlix',
        'Face With Symbols Over Mouth',
        'Serious Face with Symbols Covering Mouth',
        ':red:'
    ],
    '🥲': [
        'Visage souriant avec larme',
        ':smiling_face_with_tear:'
    ],
    '😮‍💨': [
        'Exaltation de la face',
        ':face_exhaling:',
        'Cuire'
    ],
    '😵‍💫': [
        'Visage avec les yeux en spirale',
        ':face_with_spiral_eyes:',
        'Dizzy Face'
    ],
    '😶‍🌫️': [
        'Face in Clouds',
        'smoke',
        ':face_in_clouds:',
        'Brain Fog',
        'Forgetful',
        'Haze'
    ],
    '🥸': [
        'Visage déguisé',
        ':disguised_face:'
    ],
    '🫠': [
        'Fondu du visage',
        ':melting_face:'
    ],
    '🫢': [
        'Visage aux yeux ouverts et à la bouche',
        ':face_with_open_eyes_and_hand_over_mouth:'
    ],
    '🫣': [
        'Visage à l\'œil étincelant',
        ':face_with_peeking_eye:'
    ],
    '🫡': [
        'Visage de salut',
        ':saluting_face:',
        'Militaire',
        'Armée',
        'FRAF',
        'Navy'
    ],
    '🫥': [
        'Face de ligne en pointillé',
        ':dotted_line_face:',
        ':transparent:'
    ],
    '🫤': [
        'Visage avec bouche diagonale',
        ':face_with_diagonal_mouth:'
    ],
    '🥹': [
        'Larmes du dos maintenues',
        ':face_holding_back_tears:'
    ],
    //"🫨": ["Shaking Face", ":shaking_face:"],
    '😈': [
        'Visage souriant avec des cornes',
        ':smiling_face_with_horns:',
        'Diable',
        'Cornes du Diable',
        'Diable heureux',
        'Diable violet',
        'Diable rouge',
        ':purple:'
    ],
    '👿': [
        'Face en colère avec des cornes',
        ':angry_face_with_horns:',
        'Diable',
        'Cornes du Diable',
        'Diable violet',
        'Gobelin violet',
        'Diable triste',
        'Imp',
        ':purple:'
    ],
    '🤡': [
        'Visage de clown',
        ':clown_face:',
        'Clown effrayant',
        'Clown du mal',
        'Clown effrayant'
    ],
    '👽': [
        'Alien',
        ':alien:',
        'ET'
    ],
    '👾': [
        'Monstre alien',
        ':alien_monster:',
        'Envahisseur de l\'espace',
        'Monstre de jeu vidéo'
    ],
    '🤖': [
        'Robot',
        ':robot:',
        'Visage de robot'
    ],
    '👹': [
        'Ogre',
        ':ogre:',
        'Masque',
        'Oni',
        'Monstre Rouge',
        'Ogres japonais',
        ':red:'
    ],
    '👻': [
        'Fantôme',
        ':ghost:',
        'Halloween'
    ],
    '🗣️': [
        'Tête parlante',
        ':speaking_head:',
        'Plainte de Mansplaining',
        'Cri',
        'En criant',
        'Tête parlante dans la Silhouette',
        ':blue:'
    ],
    '👤': [
        'Poussière dans la Silhouette',
        ':bust_in_silhouette:',
        'Ombre',
        'Silhouette',
        'Utilisateur',
        'Silhouette de la personne',
        ':blue:'
    ],
    '🫂': [
        'Des gens en train de se câliner',
        ':people_hugging:',
        ':blue:'
    ],
    '👥': [
        'Busts dans la Silhouette',
        ':busts_in_silhouette:',
        'Ombres',
        'Silhouettes',
        'Utilisateurs',
        'Silhouette de deux personnes',
        ':blue:'
    ]
};
/*people*/
emojis_language[lang][3] = {
    '👶{{skin_tone}}': [
        'Bébé',
        ':baby:',
        'Enfant',
        'Enfant'
    ],
    '🧒{{skin_tone}}': [
        'Enfant',
        ':child:',
        'Sexe enfant neutre'
    ],
    '👧{{skin_tone}}': [
        'Fille',
        ':girl:',
        ':woman:'
    ],
    '🧑{{skin_tone}}': [
        'Personne',
        ':person:',
        'Sexe Neutre Adulte',
        'Adulte',
        ':person:'
    ],
    '🧑{{skin_tone}}': [
        'Personne : Barbe',
        ':person_beard:',
        'Barbe',
        'Personne Barbée',
        'Personne Barbée',
        ':person:'
    ],
    '🧑{{skin_tone}}‍🦰': [
        'Personne : Cheveux rouges',
        ':person_red_hair:',
        'Personne de Ginger',
        'Roux de la personne',
        'Personne avec des cheveux rouges',
        ':person:'
    ],
    '🧑{{skin_tone}}‍🦱': [
        'Personne: Cheveux bouclés',
        ':person_curly_hair:',
        'Personne aux cheveux bouclés',
        ':person:'
    ],
    '🧑{{skin_tone}}‍🦳': [
        'Personne: Cheveux blancs',
        ':person_white_hair:',
        'Personne aux cheveux gris',
        ':person:'
    ],
    '🧑{{skin_tone}}‍🦲': [
        'Personne : Chauve',
        ':person_bald:',
        'Personne sans cheveux',
        ':person:'
    ],
    '👱{{skin_tone}}': [
        'Personne: Cheveux blonds',
        ':person_blond_hair:',
        'Personnes avec des cheveux Blonde',
        ':person:'
    ],
    '👨{{skin_tone}}': [
        'Homme',
        ':man:',
        'Homme',
        'Homme de Moustache',
        ':man:'
    ],
    '🧔{{skin_tone}}‍♂️': [
        'Homme : Barbe',
        ':man_beard:',
        'Barbe',
        'Homme barbé',
        'Personne Barbée',
        ':man:'
    ],
    '👨{{skin_tone}}‍🦰': [
        'Homme : Cheveux rouges',
        ':man_red_hair:',
        'Gingembre',
        'Man Redhead',
        'Homme aux cheveux rouges',
        ':man:'
    ],
    '👨{{skin_tone}}‍🦱': [
        'Homme : Cheveux bouclés',
        ':man_curly_hair:',
        'Homme avec cheveux bouclés',
        ':man:'
    ],
    '👨{{skin_tone}}‍🦳': [
        'Homme : Cheveux blancs',
        ':man_white_hair:',
        'Homme avec cheveux gris',
        ':man:'
    ],
    '👨{{skin_tone}}‍🦲': [
        'Homme : Chauve',
        ':man_bald:',
        'Homme sans cheveux',
        ':man:'
    ],
    '👱{{skin_tone}}‍♂️': [
        'Homme : Cheveux blonds',
        ':man_blond_hair:',
        'Homme avec cheveux Blonde',
        ':man:'
    ],
    '👩{{skin_tone}}': [
        'Femme',
        ':woman:',
        'Femme',
        'Dame',
        'Femme jaune',
        ':woman:'
    ],
    '🧔{{skin_tone}}‍♀️': [
        'Femme: Barbe',
        ':woman_beard:',
        'Barbe',
        'Femme Barbée',
        ':woman:'
    ],
    '👩{{skin_tone}}‍🦰': [
        'Femme: Cheveux rouges',
        ':woman_red_hair:',
        'Ginger Femme',
        'Woman Redhead',
        'Femme aux cheveux rouges',
        ':woman:'
    ],
    '👩{{skin_tone}}‍🦱': [
        'Femme: Cheveux frisés',
        ':woman_curly_hair:',
        'Femme avec cheveux bouclés',
        ':woman:'
    ],
    '👩{{skin_tone}}‍🦳': [
        'Femme: Cheveux blancs',
        ':woman_white_hair:',
        'Femme aux cheveux gris',
        ':woman:'
    ],
    '👩{{skin_tone}}‍🦲': [
        'Femme: Chauve',
        ':woman_bald:',
        'Femme sans cheveux',
        ':woman:'
    ],
    '👱{{skin_tone}}‍♀️': [
        'Femme: Cheveux blonds',
        ':woman_blond_hair:',
        'Femme aux cheveux blonds',
        ':woman:'
    ],
    '👴{{skin_tone}}': [
        'Homme plus ancien',
        ':older_man:',
        ':older:',
        'Homme aîné',
        'Grandpa',
        'Vieux homme',
        ':man:'
    ],
    '👵{{skin_tone}}': [
        'Femme âgée',
        ':older_woman:',
        ':older:',
        'Femme âgée',
        'Grand-mère',
        'Nanna',
        'Vielle Dame',
        'Vielle Femme',
        ':woman:'
    ],
    '🧓{{skin_tone}}': [
        'Personne âgée',
        ':older_person:',
        ':older:',
        'Sexe Neutre Adulte',
        ':person:'
    ],
    '👼{{skin_tone}}': [
        'Bébé Ange',
        ':baby_angel:',
        'Ange',
        'Cherub',
        'Cupidon',
        'Rôle'
    ],
    '👨{{skin_tone}}‍🎄': [
        'Père Noël',
        ':santa_claus:',
        'Saint Nicolas',
        'Sinterklaas',
        'Père Noël',
        ':man:'
    ],
    '👩{{skin_tone}}‍🎄': [
        'Mme Claus',
        ':mrs_claus:',
        'Noël de la mère',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🎄': [
        'Mx Claus',
        ':mx_clause:',
        'Personne de Noël',
        ':person:'
    ],
    '🤴{{skin_tone}}': [
        'Prince',
        ':price:',
        ':man:'
    ],
    '👸{{skin_tone}}': [
        'Princesse',
        ':pricess:',
        'Fille Blonde',
        'Fille avec couronne',
        'Fille avec Tiara',
        ':woman:'
    ],
    '🫅{{skin_tone}}': [
        'Personne avec couronne',
        ':person_with_crown:',
        ':person:'
    ],
    '👳{{skin_tone}}‍♂️': [
        'Homme Portant un Turban',
        ':man_wearing_turban:',
        ':wearing_turban:',
        'Arabe',
        'Musulmans',
        'Sikh',
        'Turban',
        ':man:'
    ],
    '👳{{skin_tone}}‍♀️': [
        'Turban portatif féminin',
        ':woman_wearing_turban:',
        ':wearing_turban:',
        'Arabe',
        'Musulmans',
        'Sikh',
        'Turban',
        ':woman:'
    ],
    '👳{{skin_tone}}': [
        'Personnes qui portent un Turban',
        ':person_wearing_turban:',
        ':wearing_turban:',
        'Arabe',
        'Musulmans',
        'Sikh',
        'Turban',
        ':person:'
    ],
    '👲{{skin_tone}}': [
        'Personne avec un chapeau crânien',
        ':person_with_skullcap:',
        'Homme asiatique',
        'Homme avec casquette chinoise',
        'Homme avec Gua Pi Mao',
        ':person:'
    ],
    '🧕{{skin_tone}}': [
        'Femme avec foulard',
        ':woman_with_headscarf:',
        'Hijab',
        'Personne avec foulard',
        ':woman:'
    ],
    '🤵{{skin_tone}}‍♀️': [
        'Homme à Tuxedo',
        ':man_in_tuxedo:',
        ':tuxedo:',
        'Groom',
        'Homme en costume',
        'Mariage',
        ':man:'
    ],
    '🤵{{skin_tone}}‍♂️': [
        'Femme à Tuxedo',
        ':woman_in_tuxedo:',
        ':tuxedo:',
        'Groom',
        'Femme en costume',
        'Mariage',
        ':woman:'
    ],
    '🤵{{skin_tone}}': [
        'Personne à Tuxedo',
        ':person_in_tuxedo:',
        ':tuxedo:',
        'Groom',
        'Personne en costume',
        'Mariage',
        ':person:'
    ],
    '👰{{skin_tone}}‍♂️': [
        'Homme avec voile',
        ':man_with_veil:',
        ':veil:',
        'Mariage',
        'Époux',
        'Mariage',
        ':man:'
    ],
    '👰{{skin_tone}}‍♀️': [
        'Femme avec voile',
        ':woman_with_veil:',
        ':veil:',
        'Mariage',
        'Épouse',
        'Épouse de Voile',
        'Mariage',
        ':woman:'
    ],
    '👰{{skin_tone}}': [
        'Personne avec le Voile',
        ':person_with_veil:',
        ':veil:',
        'Mariage',
        'Mariage',
        ':person:'
    ],
    '👨{{skin_tone}}‍🍼': [
        'Bébé nourrissant de l\'homme',
        ':man_feeding_baby:',
        ':feeding_baby:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🍼': [
        'Bébé nourri par la femme',
        ':woman_feeding_baby:',
        ':feeding_baby:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🍼': [
        'Bébé nourrisson',
        ':person_feeding_baby:',
        ':feeding_baby:',
        ':person:'
    ],
    '🥷': [
        'Ninja',
        ':ninja:'
    ],
    '🫃{{skin_tone}}': [
        'Homme enceinte',
        ':pregnant_man:',
        ':pregnant:',
        'Grossesse',
        ':man:'
    ],
    '🤰{{skin_tone}}': [
        'Femme enceinte',
        ':pregnant_woman:',
        ':pregnant:',
        'Grossesse',
        'Dame enceinte',
        ':woman:'
    ],
    '🫄{{skin_tone}}': [
        'Personne enceinte',
        ':pregnant_person:',
        ':pregnant:',
        'Grossesse',
        ':person:'
    ],
    '🤱{{skin_tone}}‍': [
        'Nourriture maternelle',
        ':breast-feeding:',
        ':breast_feeding:',
        'allaitement maternel'
    ],
    '🦸{{skin_tone}}‍♂️': [
        'Superhéros homme',
        ':man_superhero:',
        ':superhero:',
        ':man:'
    ],
    '🦸{{skin_tone}}‍♀️': [
        'Superhéros Femme',
        ':woman_superhero:',
        ':superhero:',
        ':woman:'
    ],
    '🦸{{skin_tone}}': [
        'Superhéros de la personne',
        ':person_superhero:',
        ':superhero:',
        ':person:'
    ],
    '🦹{{skin_tone}}‍♂️': [
        'Supervilain homme',
        ':man_supervillain:',
        ':supervillain:',
        ':man:'
    ],
    '🦹{{skin_tone}}‍♀️': [
        'Supervilain femme',
        ':woman_supervillain:',
        ':supervillain:',
        ':woman:'
    ],
    '🦹{{skin_tone}}': [
        'Super-méchant',
        ':person_supervillain:',
        ':supervillain:',
        ':person:'
    ],
    '🧙{{skin_tone}}‍♂️': [
        'Mage de l\'homme',
        ':man_mage:',
        ':mage:',
        'Sorcerer',
        'Assistant',
        ':man:'
    ],
    '🧙{{skin_tone}}‍♀️': [
        'Mage Femme',
        ':woman_mage:',
        ':mage:',
        'Sorcière',
        'Sorcière',
        'Assistant',
        ':woman:'
    ],
    '🧙{{skin_tone}}': [
        'Mage de personne',
        ':person_mage:',
        ':mage:',
        'Assistant',
        ':mage:',
        ':person:'
    ],
    '🧚{{skin_tone}}‍♂️': [
        'Fée de l\'homme',
        ':man_fairy:',
        ':fairy:',
        ':man:'
    ],
    '🧚{{skin_tone}}‍♀️': [
        'Fée féminine',
        ':woman_fairy:',
        ':fairy:',
        ':woman:'
    ],
    '🧚{{skin_tone}}': [
        'Fée de personne',
        ':person_fairy:',
        ':fairy:',
        ':person:'
    ],
    '🧛{{skin_tone}}‍♂️': [
        'Vampire homme',
        ':man_vampire:',
        ':vampire:',
        'Dracula',
        ':man:'
    ],
    '🧛{{skin_tone}}‍♀️': [
        'Vampire féminin',
        ':woman_vampire:',
        ':vampire:',
        ':woman:'
    ],
    '🧛{{skin_tone}}': [
        'Vampire de personne',
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
        'Sirène',
        ':mermaid:',
        'Méramine',
        ':woman:'
    ],
    '🧜{{skin_tone}}': [
        'Merperson',
        ':merperson:',
        ':person:'
    ],
    '🧝{{skin_tone}}‍♂️': [
        'Elfe de l\'homme',
        ':man_elf:',
        ':elf:',
        ':man:'
    ],
    '🧝{{skin_tone}}‍♀️': [
        'Elfe Femme',
        ':woman_elf:',
        ':elf:',
        ':woman:'
    ],
    '🧝{{skin_tone}}': [
        'Elfe de personne',
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
        'Génie de personne',
        ':person_genie:',
        ':genie:',
        ':person:'
    ],
    '🕵️{{skin_tone}}‍♂️': [
        'Détective de l\'homme',
        ':man_detective:',
        ':detective:',
        'Œil privé',
        'Sleuth',
        'Espionnage',
        'Man Sleuth',
        'Sleuth ou Espion',
        '007',
        'Inspecteur',
        ':man:'
    ],
    '🕵️{{skin_tone}}‍♀️': [
        'Détective Femme',
        ':woman_detective:',
        ':detective:',
        'Œil privé',
        'Sleuth',
        'Espionnage',
        'Dormir la femme',
        'Sleuth ou Espion',
        '007',
        'Inspecteur',
        ':woman:'
    ],
    '🕵{{skin_tone}}': [
        'Détective de personne',
        ':person_detective:',
        ':detective:',
        'Œil privé',
        'Sleuth',
        'Espionnage',
        'Sommeil de personne',
        'Sleuth ou Espion',
        '007',
        'Inspecteur',
        ':person:'
    ],
    '💂{{skin_tone}}‍♂️': [
        'Homme : Garde',
        ':man_guard:',
        ':guard:',
        'Garde britannique',
        'Garde des pieds',
        ':man:'
    ],
    '💂{{skin_tone}}‍♀️': [
        'Femme : Garde',
        ':woman_guard:',
        ':guard:',
        'Garde britannique',
        'Garde des pieds',
        ':woman:'
    ],
    '💂{{skin_tone}}': [
        'Personne: Garde',
        ':person_guard:',
        ':guard:',
        'Garde britannique',
        'Garde des pieds',
        ':person:'
    ],
    '👮{{skin_tone}}‍♂️': [
        'Officier de Police',
        ':man_police_officer:',
        ':police_officer:',
        'Policier',
        'Police',
        'Policier',
        ':man:'
    ],
    '👮{{skin_tone}}‍♀️': [
        'Policier Femme',
        ':woman_police_officer:',
        ':police_officer:',
        'Policier',
        'Police',
        'Femme de police',
        ':woman:'
    ],
    '👮{{skin_tone}}': [
        'Officier de Police',
        ':person_police_officer:',
        ':police_officer:',
        'Policier',
        'Police',
        ':person:'
    ],
    '👨{{skin_tone}}‍🚒': [
        'Pompiers d\'homme',
        ':man_firefighter:',
        ':firefighter:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🚒': [
        'Femme pompière',
        ':woman_firefighter:',
        ':firefighter:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🚒': [
        'Personne pompier',
        ':person_firefighter:',
        ':firefighter:',
        ':person:'
    ],
    '👨{{skin_tone}}‍✈️': [
        'Pilote Homme',
        ':man_pilot:',
        ':pilot:',
        ':man:'
    ],
    '👩{{skin_tone}}‍✈️': [
        'Pilote Femme',
        ':woman_pilot:',
        ':pilot:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍✈️': [
        'Pilote de personne',
        ':person_pilot:',
        ':pilot:',
        ':person:'
    ],
    '👨{{skin_tone}}‍💻': [
        'Homme Technologue',
        ':man_technologist:',
        ':technologist:',
        'Homme Technologue',
        ':man:'
    ],
    '👩{{skin_tone}}‍💻': [
        'Femme technologue',
        ':woman_technologist:',
        ':technologist:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍💻': [
        'Technologue de personne',
        ':person_technologist:',
        ':technologist:',
        ':person:'
    ],
    '👨{{skin_tone}}‍🎤': [
        'Chanteur d\'homme',
        ':man_singer:',
        ':singer:',
        'Bowie',
        'Aladdin Sane',
        ':man:'
    ],
    '👩{{skin_tone}}‍🎤': [
        'Chanteur Femme',
        ':woman_singer:',
        ':singer:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🎤': [
        'Chanteur de personne',
        ':person_singer:',
        ':singer:',
        ':person:'
    ],
    '👨{{skin_tone}}‍🎨': [
        'Artiste homme',
        ':man_artist:',
        ':artist:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🎨': [
        'Artiste féminine',
        ':woman_artist:',
        ':artist:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🎨': [
        'Artiste',
        ':person_artist:',
        ':artist:',
        ':person:'
    ],
    '👷{{skin_tone}}‍♂️': [
        'Employé de la construction d\'homme',
        ':man_contruction_worker:',
        ':contruction_worker:',
        ':man:'
    ],
    '👷{{skin_tone}}‍♀️': [
        'Travailleur de la construction féminine',
        ':woman_contruction_worker:',
        ':contruction_worker:',
        ':woman:'
    ],
    '👷{{skin_tone}}': [
        'Employé de la construction',
        ':person_contruction_worker:',
        ':contruction_worker:',
        ':person:'
    ],
    '👨{{skin_tone}}‍🚀': [
        'Astronaute homme',
        ':man_astronaut:',
        ':astronaut:',
        'Cosmonaute de l\'homme',
        ':man:'
    ],
    '👩{{skin_tone}}‍🚀': [
        'Astronaute féminine',
        ':woman_astronaut:',
        ':astronaut:',
        'Cosmonaute des Femmes',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🚀': [
        'Astronaute',
        ':person_astronaut:',
        ':astronaut:',
        'Cosmonaute de personne',
        ':person:'
    ],
    '👨{{skin_tone}}‍🔬': [
        'Homme Scientifique',
        ':man_scientist:',
        ':scientist:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🔬': [
        'Femme scientifique',
        ':woman_scientist:',
        ':scientist:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🔬': [
        'Scientifique',
        ':person_scientist:',
        ':scientist:',
        ':person:'
    ],
    '👨{{skin_tone}}‍💼': [
        'Employé du bureau',
        ':man_office_worker:',
        ':office_worker:',
        'PDG',
        'Entrepreneur',
        ':man:'
    ],
    '👩{{skin_tone}}‍💼': [
        'Travailleur de bureau féminin',
        ':woman_office_worker:',
        ':office_worker:',
        'Entrepreneur',
        'PDG',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍💼': [
        'Employé du bureau',
        ':person_office_worker:',
        ':office_worker:',
        'Entreprise',
        'PDG',
        ':person:'
    ],
    '👨{{skin_tone}}‍🏭': [
        'Employé de l\'usine de l\'homme',
        ':man_factory_worker:',
        ':factory_worker:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🏭': [
        'Travailleur d\'usine féminine',
        ':woman_factory_worker:',
        ':factory_worker:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🏭': [
        'Employé de l\'usine',
        ':person_factory_worker:',
        ':factory_worker:',
        ':person:'
    ],
    '👨{{skin_tone}}‍🔧': [
        'Homme mécanicien',
        ':man_mechanic:',
        ':mechanic:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🔧': [
        'Mécanicien Femme',
        ':woman_mechanic:',
        ':mechanic:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🔧': [
        'Mécanique de la personne',
        ':person_mechanic:',
        ':mechanic:',
        ':person:'
    ],
    '👨{{skin_tone}}‍🍳': [
        'Cuisine d\'Homme',
        ':man_cook:',
        ':cook:',
        'Chef d\'homme',
        'Chef mâle',
        ':man:'
    ],
    '👩{{skin_tone}}‍🍳': [
        'Cuisine féminine',
        ':woman_cook:',
        ':cook:',
        'Chef Femme',
        'Chef Femme',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🍳': [
        'Cuisson de personne',
        ':person_cook:',
        ':cook:',
        'Chef de personne',
        ':person:'
    ],
    '👨{{skin_tone}}‍🌾': [
        'Homme agriculteur',
        ':man_farmer:',
        ':farmer:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🌾': [
        'Fermier Femme',
        ':woman_farmer:',
        ':farmer:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🌾': [
        'Fermier',
        ':person_farmer:',
        ':farmer:',
        ':person:'
    ],
    '👨{{skin_tone}}‍‍⚖️': [
        'Juge de l\'homme',
        ':man_judge:',
        ':judge:',
        ':man:'
    ],
    '👩{{skin_tone}}‍‍⚖️': [
        'Juge Femme',
        ':woman_judge:',
        ':judge:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍‍⚖️': [
        'Juge de la personne',
        ':person_judge:',
        ':judge:',
        ':person:'
    ],
    '👨{{skin_tone}}‍‍🏫': [
        'Professeur d\'homme',
        ':man_teacher:',
        ':teacher:',
        ':man:'
    ],
    '👩{{skin_tone}}‍‍🏫': [
        'Professeur de femme',
        ':woman_teacher:',
        ':teacher:',
        ':woman:'
    ],
    '🧑‍{{skin_tone}}‍‍🏫': [
        'Professeur de personne',
        ':person_teacher:',
        ':teacher:',
        ':person:'
    ],
    '👨{{skin_tone}}‍🎓': [
        'Etudiant de l\'homme',
        ':man_student:',
        ':student:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🎓': [
        'Étudiant Femme',
        ':woman_student:',
        ':student:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🎓': [
        'Étudiant',
        ':person_student:',
        ':student:',
        ':person:'
    ],
    '👨{{skin_tone}}‍⚕️': [
        'Travailleur de la santé humaine',
        ':man_health_worker:',
        ':health_worker:',
        'Médecin masculin',
        'Infirmière masculine',
        ':man:'
    ],
    '👩{{skin_tone}}‍⚕️': [
        'Travailleur en santé féminine',
        ':woman_health_worker:',
        ':health_worker:',
        'Médecin Femme',
        'Infirmière féminine',
        ':woman:'
    ],
    '🧑‍{{skin_tone}}‍⚕️': [
        'Employé de la santé',
        ':person_health_worker:',
        ':health_worker:',
        'Docteur en personne',
        'Infirmière',
        ':person:'
    ],
    '🤷{{skin_tone}}‍♂️': [
        'Éclaboussures de l\'homme',
        ':man_shrugging:',
        ':shrugging:',
        'homme de l\'idk',
        'dunno',
        ':man:'
    ],
    '🤷{{skin_tone}}‍♀️': [
        'Éclaboussures féminines',
        ':woman_shrugging:',
        ':shrugging:',
        'femme idk',
        'dunno',
        ':woman:'
    ],
    '🤷{{skin_tone}}': [
        'Écrasement de la personne',
        ':person_shrugging:',
        ':shrugging:',
        'personne idk',
        'dunno',
        ':person:'
    ],
    '🤦{{skin_tone}}‍♂️': [
        'Homme Facepalming',
        ':man_facepalming:',
        ':facepalming:',
        ':man:'
    ],
    '🤦{{skin_tone}}‍♀️': [
        'Femme Facepalming',
        ':woman_facepalming:',
        ':facepalming:',
        ':woman:'
    ],
    '🤦{{skin_tone}}': [
        'Personne Facepalming',
        ':person_facepalming:',
        ':facepalming:',
        ':person:'
    ],
    '🙇{{skin_tone}}‍‍♂️': [
        'Arc d\'homme',
        ':man_bowing:',
        ':bowing:',
        ':man:'
    ],
    '🙇{{skin_tone}}‍‍♀️': [
        'Arc féminin',
        ':woman_bowing:',
        ':bowing:',
        ':woman:'
    ],
    '🙇{{skin_tone}}': [
        'Arc de la personne',
        ':person_bowing:',
        ':bowing:',
        ':person:'
    ],
    '🧏{{skin_tone}}‍♂️': [
        'Homme Sourd',
        ':deaf_man:',
        ':deaf:',
        ':man:'
    ],
    '🧏{{skin_tone}}‍‍♀️': [
        'Femme Sourde',
        ':deaf_woman:',
        ':deaf:',
        ':woman:'
    ],
    '🧏{{skin_tone}}': [
        'Personne Sourde',
        ':deaf_person:',
        ':deaf:',
        ':person:'
    ],
    '🙋{{skin_tone}}‍‍♂️': [
        'Main de l\'Homme en levant',
        ':man_raising_hand:',
        'L\'homme heureux se lève une main',
        ':raising_hand:',
        ':man:'
    ],
    '🙋{{skin_tone}}‍♀️': [
        'Main de l\'élevage des femmes',
        ':woman_raising_hand:',
        'Joyeuse Femme à une main',
        ':raising_hand:',
        ':woman:'
    ],
    '🙋{{skin_tone}}': [
        'Main levée de la personne',
        ':person_raising_hand:',
        'Lever une main de la personne heureuse',
        ':raising_hand:',
        ':person:'
    ],
    '💁{{skin_tone}}‍♂️': [
        'Main à pourboire de l\'homme',
        ':man_tipping_hand:',
        'Ordinateur de bureau d\'information',
        ':tipping_hand:',
        ':man:'
    ],
    '💁{{skin_tone}}‍♀️': [
        'Main Tipping Femme',
        ':woman_tipping_hand:',
        'Bureau d\'information Femme',
        ':tipping_hand:',
        ':woman:'
    ],
    '💁{{skin_tone}}': [
        'Main de pourboire de personne',
        ':person_tipping_hand:',
        'Personne du bureau d\'information',
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
        'Gesture Femme OK',
        ':woman_gesturing_ok:',
        ':gesturing_ok:',
        ':woman:'
    ],
    '🙆{{skin_tone}}': [
        'Geste de personne OK',
        ':person_gesturing_ok:',
        ':gesturing_ok:',
        ':person:'
    ],
    '🙅{{skin_tone}}‍♂️': [
        'N° de geste de l\'homme',
        ':man_gesturing_no:',
        ':gesturing_no:',
        ':man:'
    ],
    '🙅{{skin_tone}}‍♀️': [
        'N° de geste féminin',
        ':woman_gesturing_no:',
        ':gesturing_no:',
        ':woman:'
    ],
    '🙅{{skin_tone}}': [
        'N° de geste de la personne',
        ':person_gesturing_no:',
        ':gesturing_no:',
        ':person:'
    ],
    '🙎{{skin_tone}}‍♂️': [
        'Poussage de l\'homme',
        ':man_pouting:',
        ':pouting:',
        ':man:'
    ],
    '🙎{{skin_tone}}‍‍♀️': [
        'Pousse de femme',
        ':woman_pouting:',
        ':pouting:',
        ':woman:'
    ],
    '🙎{{skin_tone}}': [
        'Pousse de personne',
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
        'Femme fronçant',
        ':woman_frowining:',
        ':frowining:',
        ':woman:'
    ],
    '🙍{{skin_tone}}': [
        'Frowning de personne',
        ':person_frowining:',
        ':frowining:',
        ':person:'
    ],
    '🧟‍‍♂️': [
        'Zombie de l\'homme',
        ':man_zombie:',
        ':zombie:',
        ':man:'
    ],
    '🧟‍‍♀️': [
        'Zombie Femme',
        ':woman_zombie:',
        ':zombie:',
        ':woman:'
    ],
    '🧟': [
        'Zombie de personne',
        ':person_zombie:',
        ':zombie:',
        ':person:'
    ],
    '🚶{{skin_tone}}‍♂️': [
        'Marche de l\'homme',
        ':man_walking:',
        ':walking:',
        ':man:'
    ],
    '🚶{{skin_tone}}‍♀️': [
        'Marche féminine',
        ':woman_walking:',
        ':walking:',
        ':woman:'
    ],
    '🚶{{skin_tone}}': [
        'Marche de personne',
        ':person_walking:',
        ':walking:',
        ':person:'
    ],
    '🧍{{skin_tone}}‍♂️': [
        'Homme debout',
        ':man_standing:',
        ':standing:',
        ':man:'
    ],
    '🧍{{skin_tone}}‍♀️': [
        'Femme debout',
        ':woman_standing:',
        ':standing:',
        ':woman:'
    ],
    '🧍{{skin_tone}}': [
        'Personnes debout',
        ':person_standing:',
        ':standing:',
        ':person:'
    ],
    '🧎{{skin_tone}}‍♂️': [
        'Homme à genoux',
        ':man_kneeling:',
        ':kneeling:',
        ':man:'
    ],
    '🧎{{skin_tone}}‍♀️': [
        'Femme à genoux',
        ':woman_kneeling:',
        ':kneeling:',
        ':woman:'
    ],
    '🧎{{skin_tone}}': [
        'Personnes à genoux',
        ':person_kneeling:',
        ':kneeling:',
        ':person:'
    ],
    '👨{{skin_tone}}‍🦯': [
        'Homme avec canne blanche',
        ':man_with_white_cane:',
        ':white_cane:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🦯': [
        'Femme avec canne blanche',
        ':woman_with_white_cane:',
        ':white_cane:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🦯': [
        'Personne avec la Canne Blanche',
        ':person_with_white_cane:',
        ':white_cane:',
        ':person:'
    ],
    '👨{{skin_tone}}‍🦼': [
        'Homme en fauteuil roulant motorisé',
        ':man_in_motorized_wheelchair:',
        ':motorized_wheelchair:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🦼': [
        'Femme en fauteuil roulant motorisé',
        ':woman_in_motorized_wheelchair:',
        ':motorized_wheelchair:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🦼': [
        'Personne en fauteuil roulant motorisé',
        ':person_in_motorized_wheelchair:',
        ':motorized_wheelchair:',
        ':person:'
    ],
    '👨{{skin_tone}}‍🦽': [
        'Homme en fauteuil roulant manuel',
        ':man_manual_wheelchair:',
        ':manual_wheelchair:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🦽': [
        'Femme en fauteuil roulant manuel',
        ':woman_manual_wheelchair:',
        ':manual_wheelchair:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🦽': [
        'Personne en fauteuil roulant manuel',
        ':person_manual_wheelchair:',
        ':manual_wheelchair:',
        ':person:'
    ],
    '👯‍♂️': [
        'Hommes aux Oreilles de Lapin',
        ':men_with_bunny_hears:',
        ':bunny_ears:',
        ':man:'
    ],
    '👯‍♀️': [
        'Femmes aux lanières',
        ':women_with_bunny_hears:',
        ':bunny_ears:',
        ':woman:'
    ],
    '👯': [
        'Personnes avec les lanières de lapin',
        ':people_with_bunny_hears:',
        ':bunny_ears:',
        ':person:'
    ],
    '🕴️{{skin_tone}}': [
        'Personne en costume lévitant',
        ':person_in_suit_levitating:',
        'Homme aéroglisseur',
        'Garçon de Rude',
        'Walt Jabsco',
        'Homme en costume d\'affaires lévitant',
        ':person:'
    ],
    '🧖{{skin_tone}}‍♂️': [
        'Homme dans la salle à vapeur',
        ':man_in_steamy_room:',
        ':steamy_room:',
        'Homme au sauna',
        ':man:'
    ],
    '🧖{{skin_tone}}‍♀️': [
        'Femme dans la salle à vapeur',
        ':woman_in_steamy_room:',
        ':steamy_room:',
        'Femme au sauna',
        ':woman:'
    ],
    '🧖{{skin_tone}}': [
        'Personne dans la salle à vapeur',
        ':person_in_steamy_room:',
        ':steamy_room:',
        'Personne dans le sauna',
        ':person:'
    ],
    '👫{{skin_tone}}': [
        'Main tendue féminine et homme',
        ':woman_and_man_holding_hands:',
        ':holding_hands:',
        'Couple hétérosexuel',
        'Couple droit',
        'Homme et Femme tenant les mains',
        ':woman:'
    ],
    '👬{{skin_tone}}': [
        'Main tendue masculine',
        ':holding_hands:',
        ':men_holding_hands:',
        'Couple gay',
        'Deux mains tendues masculines',
        ':man:'
    ],
    '👭{{skin_tone}}': [
        'Main tendue féminine',
        ':holding_hands:',
        ':women_holding_hands:',
        'Couple Lesbien',
        'Deux femmes tenant la main',
        ':woman:'
    ],
    '🧑‍🤝‍🧑': [
        'Personnes qui tiennent la main',
        ':holding_hands:',
        ':people_holding_hands:',
        'Deux personnes tenant la main',
        'Couple inclusif de genre',
        'Couple neutre de genre',
        'Couple de sexe non conforme',
        ':person:'
    ],
    '👨‍👩‍👦': [
        'Famille avec la Mère, le Père et le Fils',
        ':family_with_mother_father_and_son:',
        'Famille: Homme, Femme, Garçon'
    ],
    '👨‍👩‍👧': [
        'Famille avec la Mère, le Père et la Fille',
        ':family_with_mother_father_and_daughter:',
        'Famille: Homme, Femme, Fille'
    ],
    '👨‍👩‍👧‍👦': [
        'Famille avec Mère, Père, Fils et Fille',
        ':family_with_mother_father_son_and_daughter:',
        'Famille: Homme, Femme, Fille, Garçon'
    ],
    '👨‍👩‍👦‍👦': [
        'Famille avec la mère, le père et les deux fils',
        ':family_with_mother_father_and_two_sons:',
        'Famille: Homme, Femme, Garçon'
    ],
    '👨‍👩‍👧‍👧': [
        'Famille avec la mère, le père et les deux filles',
        ':family_with_mother_father_and_two_daughters:',
        'Famille: Homme, Femme, Fille'
    ],
    '👨‍👨‍👦': [
        'Famille avec deux pères et fils',
        ':family_with_two_fathers_and_son:',
        'Famille: Homme, Homme, Garçon',
        ':man:'
    ],
    '👨‍👨‍👧': [
        'Famille avec deux pères et filles',
        ':family_with_two_fathers_and_daughter:',
        'Famille: Homme, homme, fille',
        ':man:'
    ],
    '👨‍👨‍👧‍👦': [
        'Famille avec deux pères, fils et fille',
        ':family_with_two_fathers_son_and_daughter:',
        'Famille: Homme, Homme, Fille, Garçon',
        ':man:'
    ],
    '👨‍👨‍👦‍👦': [
        'Famille avec deux pères et deux fils',
        ':family_with_two_fathers_and_two_sons:',
        'Famille: Homme, homme, garçon',
        ':man:'
    ],
    '👨‍👨‍👧‍👧': [
        'Famille avec deux pères et deux filles',
        ':family_with_two_fathers_and_two_daughters:',
        'Famille: Homme, Homme, Fille',
        ':man:'
    ],
    '👩‍👩‍👦': [
        'Famille avec deux mères et fils',
        ':family_with_two_mothers_and_son:',
        'Famille: Femme, Femme, Garçon',
        ':woman:'
    ],
    '👩‍👩‍👧': [
        'Famille avec deux mères et filles',
        ':family_with_two_mothers_and_daughter:',
        'Famille: Femme, Femme, Fille',
        ':woman:'
    ],
    '👩‍👩‍👧‍👦': [
        'Famille avec deux mères, fils et fille',
        ':family_with_two_mothers_son_and_daughter:',
        'Famille: Femme, Femme, Fille, Garçon',
        ':woman:'
    ],
    '👩‍👩‍👦‍👦': [
        'Famille avec deux mères et deux fils',
        ':family_with_two_mothers_and_two_sons:',
        'Famille: Femme, Femme, Garçon',
        ':woman:'
    ],
    '👩‍👩‍👧‍👧': [
        'Famille avec deux mères et deux filles',
        ':family_with_two_mothers_and_two_daughters:',
        'Famille: Femme, Femme, Fille, Fille',
        ':woman:'
    ],
    '👨‍👦': [
        'Famille avec le Père et le Fils',
        ':family_with_father_and_son:',
        'Famille: Homme, Garçon',
        ':man:'
    ],
    '👨‍👧': [
        'Famille avec père et fille',
        ':family_with_father_and_daughter:',
        'Famille: Homme, Fille',
        ':man:'
    ],
    '👨‍👦‍👦': [
        'Famille avec le père et les deux fils',
        ':family_with_father_and_two_sons:',
        'Famille: Homme, garçon',
        ':man:'
    ],
    '👨‍👧‍👦': [
        'Famille avec Père, Fils et Fille',
        ':family_with_father_son_and_daughter:',
        'Famille: Homme, Fille, Garçon',
        ':man:'
    ],
    '👨‍👧‍👧': [
        'Famille avec le père et les deux filles',
        ':family_with_father_and_two_daughters:',
        'Famille: Homme, Fille',
        ':man:'
    ],
    '👩‍👦': [
        'Famille avec Mère et Fils',
        ':family_with_mother_and_son:',
        'Famille: Femme, Garçon',
        ':woman:'
    ],
    '👩‍👧': [
        'Famille avec mère et fille',
        ':family_with_mother_and_daughter:',
        'Famille: Femme, Fille',
        ':woman:'
    ],
    '👩‍👦‍👦': [
        'Famille avec mère et deux fils',
        ':family_with_mother_and_two_sons:',
        'Famille: Femme, Garçon, Garçon',
        ':woman:'
    ],
    '👩‍👧‍👦': [
        'Famille avec Mère, Fils et Fille',
        ':family_with_mother_son_and_daughter:',
        'Famille: Femme, Fille, Garçon',
        ':woman:'
    ],
    '👩‍👧‍👧': [
        'Famille avec mère et deux filles',
        ':family_with_mother_and_two_daughters:',
        'Famille: Femme, Fille, Fille',
        ':woman:'
    ],
    '💑{{skin_tone}}': [
        'Couple avec le cœur',
        ':couple_with_heart:',
        'Couple Amour',
        'Couple amoureux',
        'Couple neutre de genre',
        ':person:'
    ],
    '👩‍❤️‍👨': [
        'Homme et Femme avec cœur',
        ':man_and_woman_with_heart:',
        'Couple Amour',
        'Couple amoureux',
        'Couple avec le cœur'
    ],
    '👨‍❤️‍👨': [
        'Deux hommes avec cœur',
        ':two_men_with_heart:',
        'Couple avec Coeur: Homme, Homme',
        ':man:'
    ],
    '👩‍❤️‍👩': [
        'Deux femmes au cœur',
        ':two_women_with_heart:',
        'Couple avec cœur : Femme, Femme',
        ':woman:'
    ],
    '💏{{skin_tone}}': [
        'Baiser couple',
        ':couple_kissing:',
        'Baiser',
        'Baiser du couple neutre du genre',
        ':person:'
    ],
    '👩‍❤️‍💋‍👨': [
        'Baiser homme et femme',
        ':man_and_woman_kissing:'
    ],
    '👨‍❤️‍💋‍👨': [
        'Baiser deux hommes',
        ':two_men_kissing:',
        'Baiser homme et homme',
        ':man:'
    ],
    '👩‍❤️‍💋‍👩': [
        'Deux femmes embrassant',
        ':two_women_kissing:',
        'Femme et baiser féminin',
        ':woman:'
    ],
    '💆{{skin_tone}}‍♂️': [
        'Massage de la tête de l\'homme',
        ':man_getting_head_massage:',
        ':getting_head_massage:',
        ':man:'
    ],
    '💆{{skin_tone}}‍♀️': [
        'Massage de la tête des femmes',
        ':woman_getting_head_massage:',
        ':getting_head_massage:',
        ':woman:'
    ],
    '💆{{skin_tone}}': [
        'Massage de la tête de personne',
        ':person_getting_head_massage:',
        ':getting_head_massage:',
        ':person:'
    ],
    '💇{{skin_tone}}‍♂️': [
        'L\'homme se fait tailler des cheveux',
        ':man_getting_haircut:',
        ':getting_haircut:',
        ':man:'
    ],
    '💇{{skin_tone}}‍♀️': [
        'Coupe de cheveux féminine',
        ':woman_getting_haircut:',
        ':getting_haircut:',
        ':woman:'
    ],
    '💇{{skin_tone}}': [
        'Coupe de cheveux de la personne',
        ':person_getting_haircut:',
        ':getting_haircut:',
        ':person:'
    ],
    '🛌{{skin_tone}}': [
        'Hébergement de couchage',
        'tired',
        ':sleeping_accommodation:',
        'Person in Bed',
        'Person Sleeping'
    ],
    '🛀{{skin_tone}}': [
        'Person Taking Bath',
        'Bathing',
        ':bath:',
        ':person_taking_bath:',
        'Hot Bath',
        'Person Taking a Bath',
        'Bath',
        'Shower',
        'Soap'
    ],
    '🧌': [
        'Troll',
        ':troll:'
    ],
    '👺': [
        'Gobelin',
        ':goblin:',
        'Nez long',
        'Masque rouge',
        'Tengu',
        'Gobelin japonais'
    ]
};
/*animals*/
emojis_language[lang][4] = {
    '😺': [
        'Chat mouillant',
        ':happy_cat:',
        ':smiling_cat:',
        '::):',
        'Chat Joyeux',
        'Chat souriant',
        'format@@0 Happy Cat Face',
        'Cat visage souriant avec bouche ouverte'
    ],
    '😸': [
        'Chat souriant aux yeux souriants',
        ':grinning_cat:',
        '::D:',
        'Chat mouillant',
        'Chat Joyeux',
        'Visage de chat mouillant'
    ],
    '😹': [
        'Chat avec larmes de joie',
        ':laughing_cat:',
        '::):',
        'Cat Larmes Joyeuses',
        'Chat riant'
    ],
    '😻': [
        'Chat souriant avec les yeux de cœur',
        ':heart_eyes_cat:',
        ':*.*:',
        'Chat des yeux de cœur',
        'Chat Amoureux',
        'Cat souriant avec des yeux en forme de cœur'
    ],
    '😼': [
        'Chat avec Wry Smile',
        ':cat_with_wry_smile:',
        'Chat souriant',
        'Visage de chat rampant',
        'Visage de chat avec sourire de Wry'
    ],
    '😽': [
        'Chat embrassant',
        ':kissing_cat:',
        '::*:',
        'Face de chat embrassant',
        'Face de chat baiser avec les yeux fermés'
    ],
    '🙀': [
        'Chat Weary',
        ':weary_cat:',
        '::O:',
        'Chat effrayé',
        'Chat hurlant',
        'Cri du visage du chat dans la peur',
        'Visage de chat portatif'
    ],
    '😿': [
        'Chat pleurant',
        ':crying_cat:',
        '::(:',
        'Chat triste',
        'Visage de chat pleurant'
    ],
    '😾': [
        'Chat Poussant',
        ':pouting_cat:',
        'Grumpy Cat',
        'Visage de chat en mouvement'
    ],
    '🙈': [
        'Voir-No-Maléfique singe',
        'Singe',
        ':see-no-evil_mokey:',
        ':see_no_evil_mokey:',
        ':monkey:',
        'Mizaru',
        'Yeux recouverts de singes'
    ],
    '🙉': [
        'Singe Hear-No-Evil',
        'Singe',
        ':hear-no-evil_monkey:',
        ':hear_no_evil_monkey:',
        ':monkey:',
        'Kikazaru',
        'Oreilles de Couverture des Singes'
    ],
    '🙊': [
        'Speak-No-Evil Monkey',
        'Singe',
        ':speak-no-evil_monkey:',
        ':speak_no_evil_monkey:',
        ':monkey:',
        'Iwazaru',
        'Bouche de couverture singe',
        'Pas de parole'
    ],
    '🐵': [
        'Face singe',
        ':monkey_face:',
        'Singe',
        'Tête de singe'
    ],
    '🐒': [
        'Singe',
        ':monkey:',
        'Singe Cheeky'
    ],
    '🦍': [
        'Gorilla',
        ':gorilla:'
    ],
    '🐶': [
        'Visage de chien',
        ':dog_face:',
        'Chien',
        'Chiot'
    ],
    '🐕': [
        'Chien',
        ':dog:',
        'Doggo',
        'Akita Inu'
    ],
    '🦮': [
        'Visant le chien des yeux',
        ':seeing_eye_dog:',
        'Chien guide'
    ],
    '🐕‍🦺': [
        'Chien de service',
        ':service_dog:'
    ],
    '🐩': [
        'Poufle',
        ':poodle:',
        'Chien',
        'Pouille miniature',
        'Poufle standard',
        'Poodle de jouet'
    ],
    '🐺': [
        'Loup',
        ':wolf:',
        'Visage de loup',
        ':gray:',
        ':grey:'
    ],
    '🦊': [
        'Renard',
        ':fox:',
        'Visage du renard',
        ':orange:'
    ],
    '🦝': [
        'Raton laveur',
        ':raccoon:'
    ],
    '🐱': [
        'Visage de chat',
        ':cat_face:',
        ':3',
        'Chaton',
        'Chaton'
    ],
    '🐈': [
        'Chat',
        ':cat:',
        'Chat domestique',
        'Félix',
        'Maissecat'
    ],
    '🐈‍⬛': [
        'Chat Noir',
        ':black_cat:',
        ':black:'
    ],
    '🦁': [
        'Lion',
        ':lion:',
        'Visage du Lion'
    ],
    '🐯': [
        'Visage du tigre',
        ':tiger_face:',
        'Tigre Mignon'
    ],
    '🐅': [
        'Tigre',
        ':tiger:',
        'Tigre du Bengale'
    ],
    '🐆': [
        'Leopard',
        ':leopard:',
        'Léopard africain',
        'Jaguar'
    ],
    '🐴': [
        'Visage de cheval',
        ':horse_face:',
        'Tête de cheval'
    ],
    '🐎': [
        'Cheval',
        ':horse:',
        'Cheval galopant',
        'Cheval de course'
    ],
    '🦄': [
        'Licorne',
        ':unicorn:',
        'Visage de licorne'
    ],
    '🦓': [
        'Zebra',
        ':zebra:',
        'Visage zèbre',
        ':white:',
        ':black:'
    ],
    '🦌': [
        'Cerf',
        ':deer:',
        'Buck',
        'Renne',
        'Stag'
    ],
    '🐮': [
        'Visage de vache',
        ':cow_face:',
        'Vache',
        'Vache heureuse'
    ],
    '🐂': [
        'Oeuf',
        ':ox:',
        'Taureau',
        'Tauffage',
        'Océan',
        'Diriger'
    ],
    '🐃': [
        'Buffalo d\'eau',
        ':water_buffalo:',
        'Buffalo',
        'Buffal d\'Eau Domestique'
    ],
    '🐄': [
        'Vache',
        ':cow:',
        'Vache laitière'
    ],
    '🐷': [
        'Visage de cochon',
        ':pig_fase:',
        'Cochon',
        'Tête de cochon',
        ':pink:'
    ],
    '🐖': [
        'Cochon',
        ':pig:',
        'Porc',
        'Sow',
        ':pink:'
    ],
    '🐗': [
        'Sanglier',
        ':boar:',
        'Guerrier',
        'Sanglier sauvage',
        'Cochon sauvage'
    ],
    '🐽': [
        'Nez de cochon',
        ':pig_nose:'
    ],
    '🐏': [
        'Ram',
        ':ram:',
        'Mouton'
    ],
    '🐑': [
        'Ewe',
        ':ewe:',
        'Lamb',
        'Mouton'
    ],
    '🐐': [
        'Chèvre',
        ':goat:'
    ],
    '🐪': [
        'Chameau',
        ':camel:',
        'Chameau arabe',
        'Camelle Dromedaire',
        'Camouflage 1 Bump'
    ],
    '🐫': [
        'Camouflage à deux sauts',
        ':two-hump_camel:',
        ':two_hump_camel:',
        'Camel asiatique',
        'Camelle bactrienne'
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
        'Éléphant',
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
        'Visage de la souris',
        ':mouse_face:',
        'Souris'
    ],
    '🐁': [
        'Souris',
        ':mouse:',
        'Dormir',
        'Tentant',
        'Souris'
    ],
    '🐀': [
        'Rat',
        ':rat:',
        'Tentant'
    ],
    '🐹': [
        'Hamster',
        ':hamster:',
        'Visage de hamster'
    ],
    '🐰': [
        'Visage de Lapin',
        ':rabbit_face:',
        'lapin de Pâques'
    ],
    '🐇': [
        'Lapin',
        'Bunny',
        ':rabbit:',
        'Lapin de lapin'
    ],
    '🐿️': [
        'Chipmunk',
        ':chipmunk:',
        'Écureuil'
    ],
    '🦔': [
        'Hedgehog',
        ':hedgehog:'
    ],
    '🦇': [
        'Chauve-souris',
        ':bat:',
        'Batman',
        ':black:'
    ],
    '🐻': [
        'Ours',
        ':bear:',
        'Visage d\'ours',
        'Ours en peluche',
        ':brown:'
    ],
    '🐨': [
        'Koala',
        ':koala:',
        'Visage de Koala'
    ],
    '🐼': [
        'Panda',
        ':panda:',
        'Visage de panda'
    ],
    '🦘': [
        'Kangourou',
        ':kangaroo:',
        'Famille Roo'
    ],
    '🦡': [
        'blaireau',
        ':badger:'
    ],
    '🦃': [
        'La Turquie',
        ':turkey:',
        'Dinde d\'Action de grâce',
        'Turquie sauvage'
    ],
    '🐔': [
        'Poulet',
        ':chicken:',
        'Hen'
    ],
    '🐓': [
        'Cock',
        ':cock:',
        'Rooster',
        'Cockerel'
    ],
    '🐣': [
        'Poulet d\'éclosion',
        ':hatching_chick:',
        'Bébé Poulet',
        'Éclosion de poule',
        ':yellow:'
    ],
    '🐤': [
        'Poulet de bébé',
        ':baby_chick:',
        'Oiseau jaune',
        ':yellow:'
    ],
    '🐥': [
        'Poulet de bébé frontal',
        ':front_baby_chick:',
        'Poulet de bébé',
        'Poulet debout',
        ':yellow:'
    ],
    '🐦': [
        'Oiseau',
        ':bird:'
    ],
    '🐧': [
        'Penguin',
        ':penguin:'
    ],
    '🕊️': [
        'Colombe',
        ':Dove:',
        'Colombe de la paix',
        ':white:'
    ],
    '🦅': [
        'Aigle',
        ':Eagle:',
        'Aigle Chauve'
    ],
    '🦆': [
        'Canard',
        ':Duck:'
    ],
    '🦢': [
        'Cygne',
        ':swan:',
        ':white:'
    ],
    '🦉': [
        'Hibou',
        ':owl:',
        ':brown:'
    ],
    '🦚': [
        'Paon',
        ':peacock:'
    ],
    '🦜': [
        'Perroquet',
        ':parrot:'
    ],
    '🐸': [
        'Grenouille',
        ':frog:',
        'Trappe',
        'Face de grenouille',
        ':green:'
    ],
    '🐊': [
        'Crocodile',
        ':crocodile:',
        'Alligateur',
        'Croc',
        ':green:'
    ],
    '🐢': [
        'Tortue',
        ':turtle:',
        'Tortoise',
        ':green:'
    ],
    '🦎': [
        'Lézard',
        ':lizard:',
        'Gecko',
        ':green:'
    ],
    '🐍': [
        'Serpent',
        ':snake:',
        'Serpent'
    ],
    '🐲': [
        'Visage du Dragon',
        ':dragon_face:',
        'Tête de dragon'
    ],
    '🐉': [
        'Dragon',
        ':dragon:'
    ],
    '🦕': [
        'Sauropode',
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
        'Baleine époustouflante',
        ':spouting_whale:',
        'Baleine Mignonne'
    ],
    '🐋': [
        'Baleine',
        ':whale:'
    ],
    '🐬': [
        'Dauphin',
        ':dolphin:'
    ],
    '🐟': [
        'Poisson',
        ':fish:',
        'Poisson d\'eau douce'
    ],
    '🐠': [
        'Poisson tropical',
        ':tropical_fish:',
        'Poisson',
        'Poisson jaune-bleu'
    ],
    '🐡': [
        'Poisson-soufflet',
        ':blowfish:',
        'Fugu',
        'Poisson-globe'
    ],
    '🦈': [
        'Requin',
        ':shark:',
        'Grand requin blanc'
    ],
    '🐙': [
        'Pieuvre',
        ':octopus:'
    ],
    '🐚': [
        'Coquille spirale',
        ':spiral_shell:',
        'Enfer de mer',
        'Coquille'
    ],
    '🐌': [
        'Songes',
        ':snail:',
        'Limace',
        'Songle de jardin'
    ],
    '🦋': [
        'Papillon',
        ':butterfly:'
    ],
    '🐛': [
        'Bug',
        ':bug:',
        'Chariot',
        'Insecte'
    ],
    '🐜': [
        'Ant',
        ':ant:',
        'Bug',
        'Insecte'
    ],
    '🐝': [
        'Abeille de miel',
        ':honeybee:',
        'Abeille',
        'Bumblebee',
        ':yellow:',
        ':black:'
    ],
    '🐞': [
        'Scarabée dame',
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
        'Araignée',
        ':spider:'
    ],
    '🦂': [
        'Scorpion',
        ':scorpion:'
    ],
    '🦟': [
        'moustique',
        ':mosquito:',
        ':black:'
    ],
    '🦀': [
        'Crabe',
        ':crab:',
        ':red:'
    ],
    '🦞': [
        'Homard',
        ':lobster:'
    ],
    '🦐': [
        'Crevettes',
        ':shrimp:',
        'Prawn'
    ],
    '🦑': [
        'Calamar',
        ':squid:'
    ],
    '🦧': [
        'Orangutan',
        ':orangutan:'
    ],
    '🦥': [
        'Paresseux',
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
        'Mammouth',
        ':mammoth:',
        ':brown:'
    ],
    '🦫': [
        'Castor',
        ':beaver:'
    ],
    '🐻‍❄️': [
        'Ours polaire',
        ':polar_bear:',
        ':white:'
    ],
    '🦤': [
        'Dodo',
        ':dodo:'
    ],
    '🦭': [
        'Sceau',
        ':seal:'
    ],
    '🪲': [
        'Scarabée',
        ':beetle:'
    ],
    '🪳': [
        'Rugissement de coqs',
        ':cockroach:'
    ],
    '🪰': [
        'Vol',
        ':fly:'
    ],
    '🪱': [
        'Ver',
        ':worm:'
    ],
    '🦩': [
        'Flamant',
        ':flamingo:'
    ],
    '🪹': [
        'Nid vide',
        ':empty_nest:',
        'Oiseaux',
        'Accueil'
    ],
    '🪺': [
        'Nid avec des œufs',
        ':nest_with_eggs:',
        'Oiseaux',
        'Accueil'
    ]
};
/*symbols*/
emojis_language[lang][5] = {
    '💘': [
        'Coeur avec Flèche',
        ':heart_with_arrow:',
        'Flèche de Cupidon',
        'Lovestruck',
        ':pink:'
    ],
    '💝': [
        'Coeur avec ruban',
        ':heart_with_ribbon:',
        'Boîte de chocolat',
        'Coffret Cadeau',
        'Cadeau de coeur',
        ':red:'
    ],
    '💖': [
        'Sparkling Heart',
        ':sparkling_heart:',
        'Coeur étincelant',
        'Coeur étincelant',
        'Coeur des étoiles',
        ':pink:'
    ],
    '💗': [
        'Cœur grandissant',
        ':growing_heart:',
        'Cœur multiple',
        'Triple Coeur',
        ':pink:'
    ],
    '💓': [
        'Vaincre le cœur',
        ':beating_heart:',
        'Alarme cardiaque',
        'Heartbeat',
        'Coeur de Wifi',
        ':pink:'
    ],
    '💞': [
        'Coeurs tournants',
        ':revolving_hearts:',
        'Deux cœurs',
        ':pink:'
    ],
    '💕': [
        'Deux cœurs',
        ':two_hearts:',
        'Petits cœurs',
        'Deux cœurs roses',
        ':pink:'
    ],
    '💟': [
        'Décoration Coeur',
        ':heart_decoration:',
        ':purple:'
    ],
    '❣️': [
        'Exclamation cardiaque',
        ':heart_exclamation:',
        'Cœur au-dessus du point',
        'Coeur Rouge comme Marque d\'Exclamation',
        'Ornement de Marque d\'Exclamation de Coeur Lourd',
        ':red:'
    ],
    '💔': [
        'Cœur cassé',
        ':broken_heart:',
        'Cœur de rupture',
        'Cœur brisé',
        'Cœur cassé',
        ':red:'
    ],
    '❤️‍🩹': [
        'Mending Heart',
        ':mending_heart:',
        'Bandaged Heart',
        'Healing Heart',
        'Unbroken Heart',
        ':red:'
    ],
    '❤️‍🔥': [
        'Heart on Fire',
        ':heart_on_fire:',
        ':red:'
    ],
    '❤️': [
        'Je t\'aime',
        ':red_heart:',
        'Coeur Rouge',
        'Coeur',
        'Coeur d\'amour',
        'Coeur Rouge',
        ':red:'
    ],
    '🧡': [
        'Coeur Orange',
        ':orange_heart:',
        'Je t\'aime',
        ':orange:'
    ],
    '💛': [
        'Cœur jaune',
        ':yellow_heart:',
        'Snapchat #1 BF',
        'Coeur d\'Or',
        'Je t\'aime',
        ':yellow:'
    ],
    '💚': [
        'Coeur Vert',
        ':green_heart:',
        'Cœur jaloux',
        'Je t\'aime',
        ':green:'
    ],
    '💙': [
        'Cœur Bleu',
        ':blue_heart:',
        'Je t\'aime',
        ':blue:'
    ],
    '💜': [
        'Coeur Violet',
        ':purple_heart:',
        'Je t\'aime',
        ':purple:'
    ],
    '🖤': [
        'Coeur Noir',
        ':black_heart:',
        'Coeur Sombre',
        'Je t\'aime',
        ':black:'
    ],
    '🤍': [
        'Cœur blanc',
        ':white_heart:',
        'Je t\'aime',
        ':white:'
    ],
    '🤎': [
        'Coeur marron',
        ':brown_heart:',
        'Je t\'aime',
        ':brown:'
    ],
    //"🩷": ["Pink Heart", ":pink_heart:", "I Love You", ":pink:"],
    //"🩵": ["Light Blue Heart", ":lightblue_heart:", "I Love You", ":blue:"],
    //"🩶": ["Grey Heart","Gray Heart", ":grey_heart:",":gray_heart:", "I Love You", ":gray:", ":grey:"],
    '💯': [
        'Cent Points',
        ':hundred_points:',
        '100',
        '%',
        'Garder 100',
        'Score parfait',
        'Symbole de cent points'
    ],
    '💬': [
        'Ballon vocal',
        ':speech_balloon:',
        'Bulle de chat',
        'Bulle vocale',
        ':white:'
    ],
    '💭': [
        'Ballon de pensée',
        ':thought_balloon:',
        'Bulle de pensée',
        'Bulle de pensée',
        ':white:'
    ],
    '💤': [
        'ZZ',
        ':zzz:',
        'Temps de couchage',
        'Nageoire',
        'Sommeil',
        'Signe de sommeil',
        'Symbole de sommeil'
    ],
    '♠': [
        'Costume de paille',
        ':spade_suit:',
        'Spades',
        'Black Spade Suit'
    ],
    '♥': [
        'Costume Coeur',
        ':heart_suit:',
        'Carte avec cœur',
        'Coeurs',
        'Costume Coeur Noir'
    ],
    '♦': [
        'Costume en Diamant',
        ':diamond_suit:',
        'Diamants',
        'Costume en Diamant Noir'
    ],
    '♣': [
        'Costume de club',
        ':club_suit:',
        'Clubs',
        'Costume de Club Noir'
    ],
    '🏧': [
        'Panneau ATM',
        ':atm_sign:',
        'DAB',
        'Telleer automatique',
        ':blue:'
    ],
    '🎧': [
        'Casque',
        ':headphone:',
        'Écouteur',
        'iPod',
        'Écouteurs'
    ],
    '🎵': [
        'Note musicale',
        ':musical_note:',
        'Paire de huitième Notes à faisceau',
        'Paire de quavers à faisceaux',
        'Note de musique'
    ],
    '🎶': [
        'Notes musicales',
        ':musical_notes:',
        'Musique',
        'Notes de musique',
        'Chantage',
        'Notes musicales multiples'
    ],
    '🔔': [
        'Cloche',
        ':bell:',
        'Cloche de la Liberté',
        'Ringer',
        'Cloche de mariage',
        ':yellow:'
    ],
    '🔕': [
        'Cloche avec Slash',
        ':bell_with_slash:',
        'Notifications',
        'Sonnerie désactivée',
        'Cloche en sourdine',
        'Cloche avec trait d\'annulation',
        ':yellow:'
    ],
    '🔈': [
        'Volume faible du haut-parleur',
        ':speaker_low_volum:',
        'Volume',
        'Haut-parleur'
    ],
    '🔉': [
        'Volume moyen du haut-parleur',
        ':speaker_medium_volume:',
        'Réduire le volume',
        'Haut-parleur avec volume moyen',
        'Haut-parleur avec une seule vague sonore'
    ],
    '🔊': [
        'Haut volume du haut-parleur',
        ':speaker_high_volume:',
        'Augmenter le volume',
        'Haut-parleur avec trois vagues sonores'
    ],
    '🔇': [
        'Haut-parleur muet',
        ':muted_speaker:',
        'Couper le volume',
        'Haut-parleur avec trait d\'annulation'
    ],
    '📢': [
        'Loudspeaker',
        ':loudspeaker:',
        'Annonce',
        'Système de PA',
        'Haut-parleur d\'adresse publique'
    ],
    '⛔': [
        'Aucune entrée',
        ':no_entry:',
        ':red:'
    ],
    '🚫': [
        'Interdit',
        ':prohibited:',
        'Banni',
        'antislash cercle',
        'Non',
        'Cercle rouge croisé',
        'Restreint',
        'Pas de panneau d\'entrée',
        ':red:'
    ],
    '🚳': [
        'Pas de vélos',
        ':no_bicycles:',
        'Pas de pancarte cyclable',
        ':red:',
        ':black:'
    ],
    '🚭': [
        'Pas de fumée',
        ':no_smoking:',
        'Symbole de non-fumeur',
        ':red:',
        ':black:'
    ],
    '🚯': [
        'Pas de débordement',
        ':no_littering:',
        'Ne pas utiliser le symbole de la terreur',
        ':red:',
        ':black:'
    ],
    '🚱': [
        'Eau Non Potable',
        ':non-potable_water:',
        ':non_potable_water:',
        'Pas d\'eau',
        'Pas d\'eau potable',
        'Symbole de l\'eau non potable',
        ':red:',
        ':black:'
    ],
    '🚷': [
        'Pas de piétons',
        ':no_pedestrians:',
        'Aucune personne',
        'Pas de marche',
        ':red:',
        ':black:'
    ],
    '🔞': [
        'Personne de moins de dix-huit ans',
        ':no_one_under_18:',
        'NSFW',
        'Symbole de moins de dix-huit ans',
        '18',
        ':red:',
        ':black:'
    ],
    '📵': [
        'Aucun téléphone mobile',
        ':no_mobile_phones:',
        'Aucun téléphone cellulaire',
        'Aucun téléphone',
        'Aucun Smartphone',
        ':red:',
        ':black:'
    ],
    '☢️': [
        'Radioactive',
        ':radioactive:',
        'Symbole de rayonnement international',
        'Nucléaire',
        'Panneau radioactif',
        ':orange:'
    ],
    '☣️': [
        'Risque biologique',
        ':biohazard:',
        'Panneau "Biohazard"',
        ':orange:'
    ],
    '⬆️': [
        'Bouton Flèche vers le haut',
        ':up_arrow_button:',
        'Flèche pointant vers le haut',
        'Flèche noire vers le haut',
        ':blue:'
    ],
    '↗️': [
        'Bouton de flèche vers le haut à droite',
        ':up-right_arrow_button:',
        ':up_right_arrow_button:',
        'Flèche diagonale vers la droite',
        'Flèche nord-est',
        ':blue:'
    ],
    '➡️': [
        'Bouton de la flèche droite',
        ':right_arrow_button:',
        'Flèche à droite',
        'Flèche noire vers la droite',
        ':blue:'
    ],
    '↘️': [
        'Bouton de flèche vers le bas à droite',
        ':down-right_arrow_button:',
        ':down_right_arrow_button:',
        'Flèche diagonale vers le bas à droite',
        'Flèche sud-est',
        ':blue:'
    ],
    '⬇️': [
        'Bouton de la flèche vers le bas',
        ':down_arrow_button:',
        'Pointage de flèches vers le bas',
        'Flèche noire vers le bas',
        ':blue:'
    ],
    '↙️': [
        'Bouton de la flèche vers le bas gauche',
        ':down-left_arrow_button:',
        ':down_left_arrow_button:',
        'Flèche diagonale vers le bas gauche',
        'Flèche Sud-Ouest',
        ':blue:'
    ],
    '⬅️': [
        'Bouton de la flèche gauche',
        ':left_arrow_button:',
        'Flèche à gauche',
        'Flèche noire à gauche',
        ':blue:'
    ],
    '↖️': [
        'Bouton de la flèche vers le haut à gauche',
        ':up-left_arrow_button:',
        ':up_left_arrow_button:',
        'Flèche diagonale vers la gauche',
        'Flèche Nord-Ouest',
        ':blue:'
    ],
    '↕️': [
        'Bouton de la flèche vers le haut',
        ':up-down_arrow_button:',
        ':up_down_arrow_button:',
        'Flèches verticales',
        'Flèche vers le haut',
        ':blue:'
    ],
    '↔️': [
        'Bouton de flèche gauche-droite',
        ':left-right_arrow_button:',
        ':left_right_arrow_button:',
        'Flèches horizontales',
        'Flèches latérales',
        'Flèche gauche droite',
        ':blue:'
    ],
    '↩️': [
        'Bouton gauche de la flèche droite',
        ':right_arrow_curving_left_button:',
        'Répondre par e-mail',
        'Flèche courbée gauche',
        'Flèche gauche avec crochet',
        ':blue:'
    ],
    '↪️': [
        'Bouton de droite de la flèche gauche',
        ':left_arrow_curving_right_button:',
        'Envoi d\'email',
        'Flèche courbée droite',
        'Flèche à droite avec crochet',
        ':blue:'
    ],
    '⤴️': [
        'Bouton de courbe de la flèche droite vers le haut',
        ':right_arrow_curving_up_button:',
        'Flèche pointant vers la droite puis courbant vers le haut',
        ':blue:'
    ],
    '⤵️': [
        'Bouton vers le bas de la flèche droite',
        ':right_arrow_curving_down_button:',
        'Flèche incurvée vers le bas',
        'Flèche pointant vers la droite puis courbant vers le bas',
        ':blue:'
    ],
    '🔃': [
        'Bouton Flèches verticales dans le sens horaire',
        ':clockwise_vertical_button:',
        'Sens horaire vers le bas et vers le haut ouvrir des flèches circulaires',
        ':blue:'
    ],
    '🔄': [
        'Bouton Flèches dans le sens inverse des aiguilles d\'une montre',
        ':counterclockwise_button:',
        'Rafraîchir',
        'Faire pivoter',
        'Commuter',
        'Flèches dans le sens anti-horaire',
        'Flèches circulaires ouvertes vers le bas et vers le haut',
        ':blue:'
    ],
    '🔙': [
        'Flèche arrière',
        ':back_arrow:',
        'Précédent',
        'Retour avec flèche gauche au dessus',
        ':black:'
    ],
    '🔚': [
        'Fin de la Flèche',
        ':end_arrow:',
        'Fin',
        'Terminer avec la flèche gauche au dessus',
        ':black:'
    ],
    '🔛': [
        'Allumé! Flèche',
        ':on_arrow:',
        'Activé',
        'Activé avec le point d\'exclamation avec la flèche droite gauche ci-dessus',
        ':black:'
    ],
    '🔜': [
        'Bientôt Flèche',
        ':soon_arrow:',
        'Bientôt',
        'Bientôt avec des flèches à droite au dessus',
        ':black:'
    ],
    '🔝': [
        'Flèche du haut',
        ':top_arrow:',
        'En haut',
        'Top avec la flèche vers le haut au-dessus',
        ':black:'
    ],
    '🛐': [
        'Lieu de culte',
        ':place_of_worship:',
        'Bâtiment religieux',
        ':purple:'
    ],
    '⚛️': [
        'Symbole Atom',
        ':atom_symbol:',
        ':purple:'
    ],
    '🕉️': [
        'Symbole Om',
        ':om_symbol:',
        'Oui',
        'Aumkara',
        'Omkara',
        'Pranava',
        ':purple:'
    ],
    '✡️': [
        'Etoile de David',
        ':star_of_david:',
        'Magen David',
        ':purple:'
    ],
    '☸️': [
        'Roue du Dharma',
        ':wheel_of_dharma:',
        'Heaume',
        ':purple:'
    ],
    '☯️': [
        'Yin Yang',
        ':yin_yang:',
        ':purple:'
    ],
    '✝️': [
        'Croix latine',
        ':latin_cross:',
        'Croix chrétienne',
        ':purple:'
    ],
    '☦️': [
        'Croix orthodoxe',
        ':orthodox_cross:',
        ':purple:'
    ],
    '☪️': [
        'Étoile et Croissant de Lune',
        ':star_and_crescent:',
        ':purple:'
    ],
    '☮️': [
        'Symbole de la paix',
        ':peace:',
        'Panneau de Paix',
        ':purple:'
    ],
    '🕎': [
        'Menorah',
        ':menorah:',
        'Candelabrum',
        'Bougies',
        'Chanukiah',
        'Menorah',
        'Menorah avec neuf branches',
        ':purple:'
    ],
    '🔯': [
        'Étoile pointillée à six pointes',
        ':dotted_six-pointed_star:',
        ':dotted_six_pointed_star:',
        'Six étoiles pointues avec point central',
        ':purple:'
    ],
    //"🪯": ["Khanda", ":khanda:", "Sikhism", ":purple:"],
    '♈': [
        'Baies',
        ':aries:',
        ':zodiac:',
        'Zodiaque',
        ':purple:'
    ],
    '♉': [
        'Taurus',
        ':taurus:',
        ':zodiac:',
        'Zodiaque',
        ':purple:'
    ],
    '♊': [
        'Gemini',
        ':gemini:',
        ':zodiac:',
        'Zodiaque',
        ':purple:'
    ],
    '♋': [
        'Cancer',
        ':cancer:',
        ':zodiac:',
        'Zodiaque',
        ':purple:'
    ],
    '♌': [
        'Leo',
        ':leo:',
        ':zodiac:',
        'Zodiaque',
        ':purple:'
    ],
    '♍': [
        'Vierge',
        ':virgo:',
        ':zodiac:',
        'Zodiaque',
        ':purple:'
    ],
    '♎': [
        'Librairie',
        ':libra:',
        ':zodiac:',
        'Zodiaque',
        ':purple:'
    ],
    '♏': [
        'Scorpion',
        ':scorpio:',
        ':zodiac:',
        'Scorpion',
        'Zodiaque',
        ':purple:'
    ],
    '♐': [
        'Sagittarius',
        ':sagittarius:',
        ':zodiac:',
        'Zodiaque',
        ':purple:'
    ],
    '♑': [
        'Capricorne',
        ':capricorn:',
        ':zodiac:',
        'Zodiaque',
        ':purple:'
    ],
    '♒': [
        'Verseau',
        ':aquarius:',
        ':zodiac:',
        'Zodiaque',
        ':purple:'
    ],
    '♓': [
        'Pisces',
        ':pisces:',
        ':zodiac:',
        'Zodiaque',
        ':purple:'
    ],
    '⛎': [
        'Ophiuchus',
        ':ophiuchus:',
        ':zodiac:',
        'Zodiaque',
        ':purple:'
    ],
    '⏭️': [
        'Ignorer le symbole avant',
        'Triangle double à pointe droite noir avec barre verticale',
        ':skip_forward_button:',
        'Bouton de la piste suivante',
        ':blue:'
    ],
    '⏮️': [
        'Revenir en arrière',
        'Triangle double à gauche noir avec barre verticale',
        ':skip_backward_button:',
        'Bouton de la dernière piste',
        'Piste précédente',
        ':blue:'
    ],
    '⏯️': [
        'Bouton Lecture ou Pause',
        'Triangle à pointe droite noir avec barre verticale double',
        ':play_button:',
        ':pause_button:',
        ':play_or_pause_button:',
        'Jouer à Symbole',
        'Mettre en pause le symbole',
        ':blue:'
    ],
    '🔀': [
        'Bouton Lecture aléatoire des traces',
        ':shuffle_tracks_button:',
        'Flèches torsadées vers la droite',
        ':blue:'
    ],
    '🔁': [
        'Bouton de répétition',
        ':repeat_button:',
        'Symbole de boucle',
        'Retweet',
        'Ouverture de flèches circulaires dans le sens horaire à droite et à gauche',
        ':blue:'
    ],
    '🔂': [
        'Répéter un seul bouton',
        ':repeat_single_button:',
        'Cercle de flèches avec numéro 1',
        'Boucler le symbole Une fois',
        'Symbole de répétition d\'une piste unique',
        'Flèches ouvertes circulaires dans le sens horaire à droite et à gauche avec une superposition encerclée',
        ':blue:'
    ],
    '▶️': [
        'Bouton de lecture',
        ':play_button:',
        'Triangle droit',
        'Triangle pointant vers la droite',
        'Triangle noir à droite',
        ':blue:'
    ],
    '◀️': [
        'Bouton inversé',
        ':reverse_button:',
        'Triangle gauche',
        'Triangle pointant à gauche',
        'Triangle noir à gauche',
        ':blue:'
    ],
    '🔼': [
        'Bouton vers le haut',
        ':upwards_button:',
        'Triangle Haut',
        'Triangle vers le haut',
        'Petit triangle rouge pointant vers le haut',
        ':blue:'
    ],
    '🔽': [
        'Bouton vers le bas',
        ':downwards_button:',
        'Triangle Bas',
        'Triangle de pointage inférieur',
        'Petit triangle rouge vers le bas',
        ':blue:'
    ],
    '⏩': [
        'Bouton Avance Rapide',
        ':fast-forward_button:',
        ':fast_forward_button:',
        'Avance rapide',
        'Symbole d\'Avance Rapide',
        'Triangle double pointant vers la droite noir',
        ':blue:'
    ],
    '⏪': [
        'Fast Reverse Button',
        ':fast_reverse_button:',
        'Rewind',
        'Revenir en arrière',
        'Triangle double à gauche noir',
        ':blue:'
    ],
    '⏫': [
        'Bouton rapide vers le haut',
        ':fast_up_button:',
        'Triangle double vers le haut',
        'Triangle double à pointe noire',
        ':blue:'
    ],
    '⏬': [
        'Bouton rapide vers le bas',
        ':fast_down_button:',
        'Triangle double vers le bas',
        'Triangle double du point noir vers le bas',
        ':blue:'
    ],
    '⏹️': [
        'Bouton d\'arrêt',
        ':stop_button:',
        'Arrêter',
        'Arrêt du symbole',
        'Carré noir pour Stop',
        ':blue:'
    ],
    '⏏️': [
        'Bouton d\'éjection',
        ':eject_button:',
        'Eject Symbol',
        ':blue:'
    ],
    '🎦': [
        'Cinéma',
        ':cinema_button:',
        'Écran de cinéma',
        'Films',
        'Cinéma',
        'Symbole du cinéma',
        'Enregistrement en cours',
        ':blue:'
    ],
    '📶': [
        'Barres d\'antenne',
        ':antenna_bars_button:',
        'Barres de réception',
        'Force du signal',
        'Stairs',
        'Symbole de force du signal',
        'Antenne avec barres',
        ':blue:'
    ],
    '✖️': [
        'Multiplier',
        ':multiply:',
        'Nombre de fois',
        'Symbole de la multiplication',
        'Multiplication lourde X',
        ':black:'
    ],
    '➕': [
        'Plus',
        ':plus:',
        'Symbole Plus',
        'Panneau lourd Plus',
        ':black:'
    ],
    '➖': [
        'Minus',
        ':minus:',
        'Minus Symbol',
        'Panneau lourd Minus',
        ':black:'
    ],
    '➗': [
        'Diviser',
        ':divide:',
        'Symbole de division',
        'Panneau de division lourde',
        ':black:'
    ],
    '🟰': [
        'Panneau Égal Lourd',
        ':heavy_equals_sign:',
        'Egal',
        'Résultat',
        ':black:'
    ],
    '♾️': [
        'Infini',
        ':infinity:',
        'Panneau en papier permanent'
    ],
    '‼️': [
        'Marque de double Exclamation',
        ':double_exclamation_mark:',
        'Marque de double Exclamation Rouge',
        ':red:'
    ],
    '⁉️': [
        'Point de question d\'exclamation',
        ':exclamation_question_mark:',
        'Marque d\'exclamation rouge et point d\'interrogation',
        ':red:'
    ],
    '❓': [
        'Marque de questions',
        ':question_mark:',
        'Marque de question rouge',
        'Ornement de la note de question noire',
        ':red:'
    ],
    '❔': [
        'Point d\'interrogation blanc',
        ':white_question_mark:',
        ':question_mark:',
        'Point d\'interrogation blanc',
        'Ornement de la marque blanche de question',
        ':white:'
    ],
    '❗': [
        'Marque d\'Exclamation',
        ':exclamation_mark:',
        'Marque d\'Exclamation Rouge',
        'Symbole de marque d\'exclamation lourde',
        ':red:'
    ],
    '❕': [
        'Marque d\'Exclamation Blanche',
        ':white_exclamation_mark:',
        ':exclamation_mark:',
        'Ornement de Marque d\'Exclamation Blanche',
        ':white:'
    ],
    '⭕': [
        'Cercle rouge creux',
        ':hollow_red_circle:',
        'Cercle',
        'Corriger',
        'Cercle rouge',
        'Marque du cercle',
        'Grand cercle lourd',
        ':red:'
    ],
    '☑️': [
        'Cocher la case avec la case de contrôle',
        ':check_box_with_check:',
        'V',
        'Case à cocher',
        'Cocher dans la case à cocher',
        'Boîte aux urnes avec contrôle'
    ],
    '✔️': [
        'Cocher la note',
        ':check_mark:',
        'V',
        'Contrôler',
        'Cocher',
        'Checkmark',
        'Marque de contrôle lourde',
        ':black:'
    ],
    '❌': [
        'Marque de Croix',
        ':cross_mark:',
        'Croix',
        'X',
        ':red:'
    ],
    '✅': [
        'Bouton de la note',
        ':check_mark_button:',
        'V',
        'Marque de chèque vert',
        'Coche Verte',
        'Cocher la note',
        'Marque de contrôle blanche lourde',
        ':green:'
    ],
    '❎': [
        'Bouton croix',
        ':cross_mark_button:',
        'Croix',
        'X',
        'Marque X',
        'Marque de croix carrée négative',
        ':green:'
    ],
    '#️⃣': [
        'Panneau numérique Keycap',
        ':hash_key:',
        '#',
        'Clé de hachage',
        'Hashtag',
        'Octothorpe',
        'Clé livrée',
        'Panneau numérique',
        ':blue:'
    ],
    '*️⃣': [
        'Keycap Asterisk',
        ':asterisk:',
        'Casquette de clés Étoile',
        ':blue:'
    ],
    '0️⃣': [
        'Nombre 0',
        ':number_0:',
        'Keycap Digit Zero'
    ],
    '1️⃣': [
        'Numéro 1',
        ':number_1:',
        'Keycap Digit One'
    ],
    '2️⃣': [
        'Numéro 2',
        ':number_2:',
        'Keycap Digit Two'
    ],
    '3️⃣': [
        'Numéro 3',
        ':number_3:',
        'Keycap Digit Three'
    ],
    '4️⃣': [
        'Numéro 4',
        ':number_4:',
        'Chiffre Clavier 4'
    ],
    '5️⃣': [
        'Numéro 5',
        ':number_5:',
        'Chiffre Cinq Keycap'
    ],
    '6️⃣': [
        'Numéro 6',
        ':number_6:',
        'Chiffre Clavier Six'
    ],
    '7️⃣': [
        'Numéro 7',
        ':number_7:',
        'Keycap Digit Seven'
    ],
    '8️⃣': [
        'N° 8',
        ':number_8:',
        'Numéroter Huitième Numérotation'
    ],
    '9️⃣': [
        'N° 9',
        ':number_9:',
        'Keycap Digit Nine'
    ],
    '🔟': [
        'Numéro 10',
        ':number_10:',
        'Keycap: 10',
        '10',
        'Keycap Digit Ten'
    ],
    '🔠': [
        'Input Latin Uppercase',
        ':input_latin_uppercase:',
        'ABCD',
        'Majuscule',
        'Symbole d\'entrée pour lettres majuscules',
        'Symbole d\'entrée pour les lettres de la majuscule latine',
        ':blue:'
    ],
    '🔡': [
        'Input Latin Lowercase',
        ':input_latin_lowercase:',
        'abcd',
        'minuscule',
        'Symbole d\'entrée pour lettres minuscules',
        'Symbole d\'entrée pour les petites lettres latines',
        ':blue:'
    ],
    '🔢': [
        'Input Numbers',
        ':input_numbers:',
        '1234',
        'Numéros',
        'Numeric Input',
        'Symbole d\'entrée pour les nombres',
        ':blue:'
    ],
    '🔣': [
        'Symbole d\'entrée pour les Symboles',
        ':input_symbols:',
        'Symboles',
        'Entrée de symbole',
        ':blue:'
    ],
    '🔤': [
        'Input Latin Letters',
        ':input_latin_letters:',
        'abc',
        'Alphabet',
        'Lettres',
        'Symbole d\'entrée pour les lettres',
        'Symbole d\'entrée pour les lettres latines',
        ':blue:'
    ],
    '🅰️': [
        'Un bouton (Blood Type)',
        ':a_blood:',
        'Type de sang A',
        'Lettre A',
        'Lettre A de la capitale latine carrée négative',
        ':red:'
    ],
    '🆎': [
        'Bouton AB (Blood Type)',
        ':ab_blood:',
        'Lettres AB',
        'Type de sang AB',
        'Carré négatif AB',
        ':red:'
    ],
    '🅱️': [
        'Bouton B (Blood Type)',
        ':b_blood:',
        'Lettre B',
        'Type de sang B',
        'Lettre capitale latine carrée négative B',
        ':red:'
    ],
    '🆑': [
        'Bouton CL',
        ':cl_button:',
        'Nettoyer',
        'Bouton de nettoyage',
        'Panneau CL',
        'format@@0 Squared CL',
        'Lettres CL',
        ':red:'
    ],
    '🆒': [
        'Bouton de refroidissement',
        ':cool_button:',
        'Carré froid',
        'Signe cool',
        'Cool carré',
        ':blue:'
    ],
    '🆓': [
        'Bouton gratuit',
        ':free_button:',
        'Gratuit',
        'Panneau Libre',
        'Carré libre',
        ':blue:'
    ],
    'ℹ️': [
        'Information',
        ':info_button:',
        'Infos',
        'minuscule I',
        'Informations touristiques',
        'Source des informations',
        ':blue:'
    ],
    '🆔': [
        'Bouton ID',
        ':id_button:',
        'ID',
        'Identification',
        'Panneau d\'identification',
        'ID carré',
        ':purple:'
    ],
    '🆕': [
        'Nouveau bouton',
        ':new_button:',
        'Nouveau',
        'Nouveau panneau',
        'Nouveau carré',
        ':blue:'
    ],
    '🅾️': [
        'Bouton O (Blood Type)',
        ':0_blood:',
        'Type de sang O',
        '0',
        'Lettre capitale latine carrée négative',
        'Lettre O',
        ':red:'
    ],
    '🆗': [
        'Bouton OK',
        ':ok_button:',
        'OK',
        'Ok',
        'Carré',
        'Panneau OK',
        'Carré OK',
        ':blue:'
    ],
    '🅿️': [
        'Bouton P',
        ':p_button:',
        ':parking_sign:',
        'Panneau de stationnement',
        'Lettre capitale latine carrée négative',
        'Lettre P',
        ':blue:'
    ],
    '🆘': [
        'Bouton SOS',
        ':sos_button:',
        'Signal de détresse',
        'Urgence',
        'SOS',
        'Panneau SOS',
        'SOS carré',
        'Aide',
        ':red:'
    ],
    '🆙': [
        'Haut! Bouton',
        ':up_button:',
        'Niveau supérieur',
        'Monter',
        'Inscription haut',
        'Carré vers le haut avec un point d\'exclamation',
        ':blue:'
    ],
    '🆚': [
        'Bouton contre',
        ':vs_button:',
        'Carré contre',
        ':orange:'
    ],
    '🆖': [
        'Bouton NG',
        ':ng_button:',
        'NG carré',
        'Pas de bon signe',
        'Pas de bien',
        ':ng:',
        'Blooper',
        ':blue:'
    ],
    '🔴': [
        'Cercle rouge',
        ':red_circle:',
        'Grand cercle rouge',
        ':red:'
    ],
    '🟠': [
        'Cercle orange',
        ':orange_circle:',
        'Grand cercle orange',
        ':orange:'
    ],
    '🟡': [
        'Cercle jaune',
        ':yellow_circle:',
        'Grand cercle jaune',
        ':yellow:'
    ],
    '🟢': [
        'Cercle vert',
        ':green_circle:',
        'Grand cercle vert',
        ':green:'
    ],
    '🔵': [
        'Cercle Bleu',
        ':blue_circle:',
        'Grand cercle bleu',
        ':blue:'
    ],
    '🟣': [
        'Cercle violet',
        ':purple_circle:',
        'Grand cercle violet',
        ':purple:'
    ],
    '🟤': [
        'Cercle marron',
        ':brown_circle:',
        'Grand cercle marron',
        ':brown:'
    ],
    '⚫': [
        'Cercle Noir',
        ':black_circle:',
        'Cercle noir moyen',
        ':black:'
    ],
    '⚪': [
        'Cercle blanc',
        ':white_circle:',
        'Cercle blanc moyen',
        ':white:'
    ],
    '🟥': [
        'Carré rouge',
        ':red_square:',
        'Grand carré rouge',
        ':red:'
    ],
    '🟧': [
        'Carré orange',
        ':orange_square:',
        'Grand Carré Orange',
        ':orange:'
    ],
    '🟨': [
        'Carré jaune',
        ':yellow_square:',
        'Grand carré jaune',
        ':yellow:'
    ],
    '🟩': [
        'Carré vert',
        ':green_square:',
        'Grand Carré Vert',
        ':green:'
    ],
    '🟦': [
        'Carré Bleu',
        ':blue_square:',
        'Grand Carré Bleu',
        ':blue:'
    ],
    '🟪': [
        'Carré violet',
        ':purple_square:',
        'Grand carré pourpre',
        ':purple:'
    ],
    '🟫': [
        'Carré marron',
        ':brown_square:',
        'Grand carré marron',
        ':brown:'
    ],
    '⬛': [
        'Grand carré noir',
        ':black_large_square:',
        ':black:'
    ],
    '⬜': [
        'Grand carré blanc',
        ':white_large_square:',
        ':white:'
    ],
    '◼️': [
        'Carré moyen noir',
        ':black_medium_square:',
        ':black:'
    ],
    '◻️': [
        'Carré moyen blanc',
        ':white_medium_square:',
        ':white:'
    ],
    '◾': [
        'Petit carré noir et moyen',
        ':black_medium_small_square:',
        ':black:'
    ],
    '◽': [
        'Petit carré blanc et moyen',
        ':white_medium_small_square:',
        ':white:'
    ],
    '▪️': [
        'Petit Carré Noir',
        ':black_small_square:',
        ':black:'
    ],
    '▫️': [
        'Petit carré blanc',
        ':white_small_square:',
        ':white:'
    ],
    '💠': [
        'Forme en diamant avec un point à l\'intérieur',
        ':diamond_shape_with_dot:',
        'La mignonne',
        'Fleur de Diamant',
        'Kawaii'
    ],
    '🔶': [
        'Grand Diamant Orange',
        ':large_orange_diamond:',
        ':orange:'
    ],
    '🔷': [
        'Grand Diamant Bleu',
        ':large_blue_diamond:',
        ':blue:'
    ],
    '🔸': [
        'Petit Diamant Orange',
        ':small_orange_diamond:',
        ':orange:'
    ],
    '🔹': [
        'Petit Diamant Bleu',
        ':small_blue_diamond:',
        ':blue:'
    ],
    '🔺': [
        'Triangle rouge pointé vers le haut',
        ':red_triangle_pointed_up:',
        'Triangle rouge vers le haut',
        ':red:'
    ],
    '🔻': [
        'Triangle rouge pointé vers le bas',
        ':red_triangle_pointed_down:',
        'Triangle rouge vers le bas',
        ':red:'
    ],
    '🔳': [
        'Bouton du carré blanc',
        ':white_square_button:',
        ':white:',
        ':black:'
    ],
    '🔲': [
        'Bouton du carré noir',
        ':black_square_button:',
        ':white:',
        ':black:'
    ],
    '©️': [
        'Droit d\'auteur',
        ':copyright:',
        ':c:',
        'Panneau de droit d\'auteur'
    ],
    '®️': [
        'Enregistré',
        ':registered:',
        ':r:',
        'Panneau Enregistré'
    ],
    '™️': [
        'Marque commerciale',
        ':trade_mark:',
        ':tm:',
        'Marque commerciale',
        'Panneau de Marque Commerciale'
    ],
    '🛅': [
        'Bagages restants',
        ':left_luggage:',
        'Sac avec clé',
        'Suitcase verrouillée',
        ':blue:'
    ],
    '🛄': [
        'Revendication de bagages',
        ':baggage_claim:',
        ':blue:'
    ],
    '🛃': [
        'Douanes',
        ':customs:',
        ':blue:'
    ],
    '🛂': [
        'Contrôle du passeport',
        ':passport_control:',
        'Contrôle des bordures',
        ':blue:'
    ],
    //"🛜": ["Wireless", ":wireless:", ":wifi:", ":wi_fi:", "Wifi", "wi-fi", "wireless connection", ":blue:"],
    '🚰': [
        'Symbole de l\'eau potable',
        ':potable_water_symbol:',
        'Soif',
        'Assoiffé',
        'Robinet d\'eau',
        'Faucet d\'eau'
    ],
    '🇦': [
        'Lettre A',
        ':letter_a:',
        ':a:',
        'Lettre A de symbole de l\'indicateur régional'
    ],
    '🇧': [
        'Lettre B',
        ':letter_b:',
        ':b:',
        'Lettre de symbole de l\'indicateur régional B'
    ],
    '🇨': [
        'Lettre C',
        ':letter_c:',
        ':c:',
        'Lettre C de symbole de l\'indicateur régional'
    ],
    '🇩': [
        'Lettre D',
        ':letter_d:',
        ':d:',
        'Lettre D de symbole de l\'indicateur régional'
    ],
    '🇪': [
        'Lettre E',
        ':letter_e:',
        ':e:',
        'Lettre du symbole de l\'indicateur régional E'
    ],
    '🇫': [
        'Lettre F',
        ':letter_f:',
        ':f:',
        'Lettre F de symbole de l\'indicateur régional'
    ],
    '🇬': [
        'Lettre G',
        ':letter_g:',
        ':g:',
        'Lettre G du symbole de l\'indicateur régional'
    ],
    '🇭': [
        'Lettre H',
        ':letter_h:',
        ':h:',
        'Lettre du symbole de l\'indicateur régional H'
    ],
    '🇮': [
        'Lettre I',
        ':letter_i:',
        ':i:',
        'Lettre du symbole de l\'indicateur régional I'
    ],
    '🇯': [
        'Lettre J',
        ':letter_j:',
        ':j:',
        'Lettre de symbole de l\'indicateur régional J'
    ],
    '🇰': [
        'Lettre K',
        ':letter_k:',
        ':k:',
        'Lettre K de symbole de l\'indicateur régional'
    ],
    '🇱': [
        'Lettre L',
        ':letter_l:',
        ':l:',
        'Lettre du symbole de l\'indicateur régional L'
    ],
    '🇲': [
        'Lettre M',
        ':letter_m:',
        ':m:',
        'Lettre M du symbole de l\'indicateur régional'
    ],
    '🇳': [
        'Lettre N',
        ':letter_n:',
        ':n:',
        'Lettre du symbole de l\'indicateur régional N'
    ],
    '🇴': [
        'Lettre O',
        ':letter_o:',
        ':o:',
        'Lettre O du symbole de l\'indicateur régional'
    ],
    '🇵': [
        'Lettre P',
        ':letter_p:',
        ':p:',
        'Lettre P de symbole de l\'indicateur régional'
    ],
    '🇶': [
        'Lettre Q',
        ':letter_q:',
        ':q:',
        'Lettre Q de symbole de l\'indicateur régional'
    ],
    '🇷': [
        'Lettre R',
        ':letter_r:',
        ':r:',
        'Lettre R du symbole de l\'indicateur régional'
    ],
    '🇸': [
        'Lettre S',
        ':letter_s:',
        ':s:',
        'Lettre S de symbole de l\'indicateur régional'
    ],
    '🇹': [
        'Lettre T',
        ':letter_t:',
        ':t:',
        'Lettre T de symbole de l\'indicateur régional'
    ],
    '🇺': [
        'Lettre U',
        ':letter_u:',
        ':u:',
        'Lettre U de symbole de l\'indicateur régional'
    ],
    '🇻': [
        'Lettre V',
        ':letter_v:',
        ':v:',
        'Lettre du symbole de l\'indicateur régional V'
    ],
    '🇼': [
        'Lettre W',
        ':letter_w:',
        ':w:',
        'Lettre W du symbole de l\'indicateur régional'
    ],
    '🇽': [
        'Lettre X',
        ':letter_x:',
        ':x:',
        'Lettre du symbole de l\'indicateur régional X'
    ],
    '🇾': [
        'Lettre Y',
        ':letter_y:',
        ':y:',
        'Lettre du symbole de l\'indicateur régional Y'
    ],
    '🇿': [
        'Lettre Z',
        ':letter_z:',
        ':z:',
        'Lettre du symbole de l\'indicateur régional Z'
    ],
    '💌': [
        'Lettre d\'amour',
        ':love_letter:',
        'Enveloppe Coeur',
        'Flirtmessage'
    ],
    '🚮': [
        'Mettre le Litter dans son Symbole de Place',
        ':put_litter_in_bing_sign:',
        'Signe de la corbeille',
        'Mettre le Litter dans la Corbeille',
        'Personne avec la corbeille'
    ],
    '♿': [
        'Symbole du fauteuil roulant',
        ':wheelchair_symbol:',
        'Salle de bains accessible'
    ],
    '🚹': [
        'Symbole des hommes',
        ':mens_symbol:',
        'Symbole des hommes',
        'Toilet pour hommes',
        'Restroom masculin',
        'WC masculin',
        ':blue:'
    ],
    '🚺': [
        'Symbole de la femme',
        ':womens_symbol:',
        'Symbole de la femme',
        'Toilette pour femmes',
        'Restroom féminin',
        'Cave de Famille',
        ':purple:',
        ':pink:'
    ],
    '🚻': [
        'Restructuration',
        ':restroom:',
        'Panneau de la salle de bains',
        'Panneau de toilette',
        'Panneau WC',
        ':blue:'
    ],
    '🚼': [
        'Symbole du bébé',
        ':baby_symbol:',
        'Poste de changement de Bébé',
        'Symbole du changement de bébé',
        'Infirmière',
        ':orange:'
    ],
    '🚾': [
        'Armoire à eau',
        ':wc:',
        'Toiles',
        'WC de toilette',
        ':blue:'
    ],
    '⚠️': [
        'Panneau d\'avertissement',
        ':warning_sign:',
        'Symbole d\'alerte',
        ':yellow:'
    ],
    '🚸': [
        'Enfants en traversant',
        ':children_crossing:',
        'Croisement des enfants',
        'Croisement de l\'école',
        ':yellow:'
    ],
    '🔅': [
        'Symbole de faible luminosité',
        ':low_brightness_symbol:',
        'Bouton d\'atténuation',
        'Diminuer la luminosité'
    ],
    '🔆': [
        'Symbole de haute luminosité',
        ':high_brightness_symbol:',
        'Augmenter la luminosité',
        'Bouton lumineux'
    ],
    '📳': [
        'Mode vibreur',
        ':vibration_mode:',
        'Coeur du téléphone',
        'Mode silencieux',
        ':orange:'
    ],
    '📴': [
        'Téléphone mobile éteint',
        ':mobile_phone_off:',
        ':orange:'
    ],
    '〰️': [
        'Vague',
        'Tiret Vageux',
        ':wave:'
    ],
    '💱': [
        'Échange de devises',
        ':currency_exchange:'
    ],
    '💲': [
        'Panneau en dollar lourd',
        ':dollar_symbol:',
        'Dollar',
        'Panneau Dollar'
    ],
    '♻️': [
        'Symbole de recyclage noir universel',
        ':recycling_symbol:',
        'Symbole de recyclage',
        'Logo de recyclage',
        ':green:'
    ],
    '🔱': [
        'Emblème de Trident',
        ':trident_emblem:',
        'Fourche à fourche',
        'Trident'
    ],
    '📛': [
        'Nom du badge',
        ':name_badge:',
        'Tofu en feu',
        'Etiquette de Nom',
        'Etiquette de Feu'
    ],
    '🔰': [
        'Symbole japonais pour le débutant',
        ':japanese_symbol_beginner:',
        'Marque Shoshinsha',
        'Bouclier vert jaune',
        ':green:',
        ':yellow:'
    ],
    '➰': [
        'Boucle bouclée',
        ':curly_loop:',
        'Boucle de curling',
        'Boucle'
    ],
    '➿': [
        'Boucle double',
        ':double_curly_loop:',
        'Boucle Double Curling',
        'Courriel vocal'
    ],
    '〽️': [
        'Marque alternative de la pièce',
        ':part_alternation_mark:',
        'M',
        'McDonalds'
    ],
    '✳️': [
        'Huit Asterisk parlé.',
        ':eight_spoked_asterisk:',
        ':green:'
    ],
    '✴️': [
        'Huit étoiles noires pointues',
        ':eight_pointed_star:',
        'Étoile orange',
        'Huit étoiles pointées',
        ':orange:'
    ],
    '❇️': [
        'Étincelle',
        ':sparkle:',
        ':green:'
    ],
    'Ⓜ️': [
        'M cerclé',
        'Lettre M du capital latin encerclé',
        ':circled_m:',
        'Métro',
        ':blue:'
    ],
    '🈁': [
        'Signe de mot japonais signifiant ici',
        'Squared Katakana Koko',
        ':japanese_here:',
        'Ici',
        'Destination',
        ':blue:'
    ],
    '🈂️': [
        'Signe Japonaise signifiant Service ou Service Frais',
        'Squared Katakana Sa',
        ':japanese_service:',
        ':blue:'
    ],
    '🈷️': [
        'Montant mensuel du signe japonais',
        'format@@0 Squared CJK Unified Ideograph-6708',
        ':japanese_monthly_amouny:',
        '74 radicaux',
        '月',
        ':orange:'
    ],
    '🈶': [
        'Signe Japonais signifiant Non Gratuit',
        'format@@0 Squared CJK Unified Ideograph-6709',
        ':japanese_own:',
        'Propre',
        '有',
        ':orange:'
    ],
    '🈯': [
        'Signe Japonais Sens Réservé',
        'format@@0 Squared CJK Unified Ideograph-6307',
        ':japanese_reserved:',
        'Poignée du doigt',
        '指',
        ':green:'
    ],
    '🉐': [
        'Bargain de sens du signe japonais',
        'Avantage idéographe encerclé',
        ':japanese_acquire:',
        'Acquérir',
        '得',
        ':red:'
    ],
    '🈹': [
        'Remise sur le Signe Japonais',
        'format@@0 Squared CJK Unified Ideograph-5272',
        ':japanese_discount:',
        'Vente de Bargain',
        '割',
        ':red:'
    ],
    '🈚': [
        'Signe Japonais Gratuit',
        'format@@0 Squared CJK Unified Ideograph-7121',
        ':japanese_lacking:',
        'Manquant',
        '無',
        ':orange:'
    ],
    '🈲': [
        'Signe japonais interdit',
        'format@@0 Squared CJK Unified Ideograph-7981',
        ':japanese_prohibited:',
        'Forbid',
        '禁',
        ':red:'
    ],
    '🉑': [
        'Signe Japonais Acceptable',
        'Accepter l\'idéographe encerclé',
        ':japanese_accept:',
        'Accepter',
        ':orange:'
    ],
    '🈸': [
        'Application de sens du signe japonais',
        'format@@0 Squared CJK Unified Ideograph-7533',
        ':japanese_application_form:',
        'Formulaire de demande',
        'Singe',
        'Demander',
        '申',
        ':orange:'
    ],
    '🈴': [
        'Signe japonais signifiant passage (Grade)',
        'format@@0 Squared CJK Unified Ideograph-5408',
        ':japanese_agreement:',
        'Accord',
        '合',
        ':red:'
    ],
    '🈳': [
        'Signe japonais signifiant vacance',
        'format@@0 Squared CJK Unified Ideograph-7a7a',
        ':japanese_available:',
        'Vide et disponible',
        '空',
        ':blue:'
    ],
    '㊗️': [
        'Félicitations au Signe Japonais',
        'Félicitations idéographiques encerclées',
        ':japanese_congratulations:',
        ':red:'
    ],
    '㊙️': [
        'Secret de l\'idéographe encerclé',
        ':japanese_secret:',
        'Secret de la signification du signe japonais',
        'Secrète',
        ':red:'
    ],
    '🈺': [
        'Signe Japonais Sensant Ouvert pour les Entreprises',
        'Idéographe unifié CJK carré 55b6',
        ':japanese_open_for_business:',
        'Travail',
        '営',
        ':orange:'
    ],
    '🈵': [
        'Signe japonais signifiant plein; Pas de vacance',
        'format@@0 Squared CJK Unified Ideograph-6e80',
        ':japanese_full:',
        'Plein',
        '満',
        ':red:'
    ],
    '🔘': [
        'Bouton radio',
        ':radio_button:'
    ],
    '🛑': [
        'Panneau d\'arrêt',
        ':stop_sign:',
        'Panneau octogonal',
        ':red:'
    ],
    '⚕️': [
        'Symbole médical',
        ':medical_symbol:',
        'Esculapius',
        'Asklepios',
        'Sceptre d\'Asclepius',
        'Bâton d\'Aesculapius'
    ],
    '🛗': [
        'Élévateur',
        ':elevator:',
        ':lift:',
        'Ascenseur'
    ],
    '⚧️': [
        'Symbole transgenres',
        ':transgender_sign:'
    ],
    '♂️': [
        'Panneau masculin',
        ':male_sign:',
        'Symbole de l\'homme',
        'Symbole de Mars'
    ],
    '♀️': [
        'Panneau féminin',
        ':female_sign:',
        'Symbole de la femme',
        'Venus Symbol'
    ]
};
/*food and drinks*/
emojis_language[lang][6] = {
    '🍇': [
        'Raisins',
        ':grapes:',
        'Raisin',
        ':purple:'
    ],
    '🍈': [
        'Pastèque',
        ':melon:',
        'Cantaloupe',
        'Miel',
        'Muskmelon'
    ],
    '🍉': [
        'Pastèque',
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
        'Lemonade',
        ':yellow:'
    ],
    '🍌': [
        'Banane',
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
        'Pomme rouge',
        ':red_apple:',
        ':apple:',
        'Pomme délicieuse rouge',
        ':red:'
    ],
    '🍏': [
        'Pomme verte',
        ':green_apple:',
        ':apple:',
        'Pomme délicieuse dorée',
        'Pomme de Grand-Smith',
        ':green:'
    ],
    '🍐': [
        'Poire',
        ':pear:'
    ],
    '🍑': [
        'Pêche',
        ':peach:',
        'Bas',
        'format@@0 Butt',
        ':orange:',
        ':pink:'
    ],
    '🍒': [
        'Cerises',
        ':cherry:',
        'Cerise',
        'Fleur sauvage',
        ':red:'
    ],
    '🍓': [
        'Fraise',
        ':strawberry:',
        ':red:'
    ],
    '🥝': [
        'Fruit de Kiwi',
        ':kiwi:',
        'Baie de Goose Chinoise',
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
        'Noix de coco',
        ':coconut:',
        'Cocoanut'
    ],
    '🥑': [
        'Avocado',
        ':avocado:',
        ':green:'
    ],
    '🍆': [
        'Plante d\'Agneau',
        ':eggplant:',
        ':aubergine:',
        'Aubergine',
        'Phallique',
        'Légumes Violets',
        ':purple:'
    ],
    '🥔': [
        'Pomme de terre',
        ':potato:',
        'Patate cuite',
        'Idaho Patate'
    ],
    '🥕': [
        'Carotte',
        ':carrot:',
        ':orange:'
    ],
    '🌽': [
        'Oreille de maïs',
        ':ear_of_corn:',
        'Maïs',
        'Le maïs sur le crâne',
        'Maïs',
        'Oreille du Maïs'
    ],
    '🌶️': [
        'Poivron chaud',
        ':hot_pepper:',
        'Poivron de Chili',
        'Épicé',
        ':red:'
    ],
    '🥒': [
        'Concombre',
        ':cucumber:',
        'Gherkin',
        'Corniche',
        ':green:'
    ],
    '🥬': [
        'Vert feuillu',
        ':leafy_green:',
        'Choy Bok',
        'Chou chinois',
        'Cos Lettuce',
        'Laitue romaine',
        'Verts feuillus',
        ':green:'
    ],
    '🥦': [
        'Brocoli',
        ':broccoli:',
        ':green:'
    ],
    '🍄': [
        'Champignon',
        ':mushroom:',
        'Champignon',
        'Toadstool'
    ],
    '🥜': [
        'Peanuts',
        ':peanuts:',
        'Noix',
        ':brown:'
    ],
    '🌰': [
        'Châtaignier',
        ':chestnut:',
        'maïs',
        'Écrou',
        ':brown:'
    ],
    '🍞': [
        'Pain',
        ':bread:',
        'Pain de pain',
        ':brown:'
    ],
    '🥐': [
        'Croissant',
        ':croissant:',
        ':brown:'
    ],
    '🥖': [
        'Pain de Baguette',
        ':baguette_bread:',
        'Pain français',
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
        'Crêpes',
        ':pancakes:',
        'Créatures',
        'Gâteau Raccourci',
        ':yellow:'
    ],
    '🧀': [
        'Bord de fromage',
        ':cheese_wedge:',
        'Fromage',
        ':yellow:'
    ],
    '🍖': [
        'Viande en os',
        ':meat_on_bone:',
        'Barbecue',
        'Barbecue',
        'Viande de Manga',
        ':red:'
    ],
    '🍗': [
        'Poultry Leg',
        ':poultry_leg:',
        'Baton de tambour',
        'Jambe de Turquie',
        ':red:'
    ],
    '🥩': [
        'Découpe de Viande',
        ':cut_of_meat:',
        'Viande',
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
        'Frites françaises',
        ':french_fries:',
        'Jetons',
        'Frites',
        'Frites McDonalds',
        ':yellow:'
    ],
    '🍕': [
        'Pizza',
        ':pizza:',
        'Pizza de Pepperoni',
        'Tranche de pizza',
        ':red:'
    ],
    '🌭': [
        'Chien chaud',
        ':hot_dog:',
        'Hotdog',
        'Saucisse',
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
        'Envelopper'
    ],
    '🥙': [
        'Pain farci',
        ':stuffed_flatbread:',
        'Doner Kebab',
        'Gyro',
        'Shawarma',
        'Sandwich Pita'
    ],
    '🍳': [
        'Cuisine',
        ':cooking:',
        'Petit déjeuner',
        'Oeuf frit',
        'Poêle à frire'
    ],
    '🥘': [
        'Poêle peu profond de nourriture',
        ':shallow_pan_of_food:',
        'Paella',
        'Poêle de nourriture'
    ],
    '🍲': [
        'Pot de nourriture',
        ':pot_of_food:',
        'Bol de nourriture',
        'Soupe',
        'Ragoût'
    ],
    '🥣': [
        'Bol à cuillère',
        ':bowl_with_spoon:',
        'Bol de céréales'
    ],
    '🥗': [
        'Salade verte',
        ':green_salad:',
        'Salade',
        ':green:'
    ],
    '🍿': [
        'Pop-corn',
        ':popcorn:',
        'Poussière de maïs'
    ],
    '🧂': [
        'Sel',
        ':salt:',
        'format@@0 Salt Shaker',
        ':white:'
    ],
    '🥫': [
        'Nourriture en conserve',
        ':canned_food:',
        'Boîte de nourriture',
        'Boîte d\'Étain',
        'Nourriture étanche'
    ],
    '🍱': [
        'Boîte Bento',
        ':bento_box:',
        'Boîte à lunch'
    ],
    '🍘': [
        'Craqueur de riz',
        ':rice_cracker:',
        'Craqueur'
    ],
    '🍙': [
        'Boule de riz',
        ':rice_ball:',
        'Onigiri'
    ],
    '🍚': [
        'Riz cuit',
        ':cooked_rice:',
        'Riz bouilli',
        'Riz',
        'Bol de riz',
        'Riz à la vapeur'
    ],
    '🍛': [
        'Riz de Curry',
        ':curry_rice:',
        'Curry',
        'Nourriture indienne',
        'Curry et riz'
    ],
    '🍜': [
        'Bol à vapeur',
        ':steaming_bowl:',
        'Nouilles',
        'Nouilles avec baguettes',
        'Ramen'
    ],
    '🍝': [
        'Spaghetti',
        ':spaghetti:',
        'Pâtes'
    ],
    '🍠': [
        'Pomme de terre sucrée rôtie',
        ':roasted_sweet_potato:',
        'Pomme de terre sucrée',
        'Yam'
    ],
    '🍢': [
        'Oden',
        ':oden:',
        'Kebab',
        'Broche'
    ],
    '🍣': [
        'sushi',
        ':sushi:',
        'Sashimi',
        'Fruit de la mer',
        ':pink:'
    ],
    '🍤': [
        'Crevettes frites',
        ':fried_shrimp:',
        'Crête frite',
        'Tempura des crevettes'
    ],
    '🍥': [
        'Gâteau de poisson avec tourbillon',
        ':fish_cake_with_swirl:',
        'Gâteau aux poissons',
        'Pink Swirl'
    ],
    '🥮': [
        'Gâteau de Lune',
        ':moon_cake:',
        'Gâteau de Lune'
    ],
    '🍡': [
        'Dango',
        ':dango:',
        'Bâton de dessert',
        'Boules Vertes Roses'
    ],
    '🥟': [
        'Beignets',
        ':dumpling:',
        'Empanada',
        'Pierogi'
    ],
    '🥠': [
        'Cookie de Fortune',
        ':fortune_cookie:'
    ],
    '🥡': [
        'Boîte de décollage',
        ':takeout_box:',
        'Boîte-alimentaire chinoise',
        'Oyster Pail'
    ],
    '🍦': [
        'Crème glacée douce',
        ':soft_ice_cream:',
        'M. Whippy',
        'Serve doux'
    ],
    '🍧': [
        'Glace rasée',
        ':shaved_ice:',
        'Cône de neige'
    ],
    '🍨': [
        'Crème glacée',
        ':ice_cream:',
        'Bol de glace',
        'Dessert'
    ],
    '🍩': [
        'Noisette',
        ':doughnut:',
        'Donut'
    ],
    '🍪': [
        'Cookie',
        ':cookie:',
        'Biscuit',
        'Cookie de Puce de Chocolat',
        ':brown:'
    ],
    '🎂': [
        'Gâteau d\'anniversaire',
        ':birthday_cake:',
        'Date d\'anniversaire',
        'Gâteau',
        'Gâteau aux bougies'
    ],
    '🍰': [
        'Gâteau court',
        ':shortcake:',
        'Gâteau',
        'Pièce de gâteau',
        'Shortcake de fraise'
    ],
    '🧁': [
        'Gâteau à la coupe',
        ':cupcake:',
        'Gâteau aux fées'
    ],
    '🥧': [
        'Tarte à tarte',
        ':pie:'
    ],
    '🍫': [
        'Barre de chocolat',
        ':chocolate_bar:',
        'Barre de bonbons',
        'Chocolat',
        ':brown:'
    ],
    '🍬': [
        'Bonbons',
        ':candy:',
        'Tout le monde',
        'Doux'
    ],
    '🍭': [
        'Pop-Lollipop',
        ':lollipop:',
        'Sucker'
    ],
    '🍮': [
        'Pousse',
        ':custard:',
        'Creme Caramel',
        'Dessert',
        'Frappe',
        'Pudding'
    ],
    '🍯': [
        'Pot de miel',
        ':honey_pot:',
        'Miel',
        'Pot',
        ':yellow:'
    ],
    '🍼': [
        'Bouteille de bébé',
        ':baby_bottle:',
        'Alimentation en bouteille'
    ],
    '🥛': [
        'Verre de Lait',
        ':glass_of_milk:',
        'Lait',
        ':white:'
    ],
    '☕': [
        'Boissons chaudes',
        ':hot_beverage:',
        'Café',
        'Espresso',
        'Chocolat chaud',
        'Thé'
    ],
    '🍵': [
        'Thé sans poignée',
        ':green_tea:',
        'Thé vert',
        'Matcha',
        'Thé vert Matcha',
        ':green:'
    ],
    '🍶': [
        'Sake',
        ':sake:',
        'Bouteille',
        'Vin de riz',
        'Bouteille et coupe de saké'
    ],
    '🍾': [
        'Bouteille avec Cork Popping',
        ':champagne:',
        'Célébration',
        'Champagne',
        'Vin étincelant'
    ],
    '🍷': [
        'Verre à vin',
        ':wine_glass:',
        'Alcool',
        'Vin Rouge',
        'Vin'
    ],
    '🍸': [
        'Verre à cocktails',
        ':cocktail_glass:',
        'Cocktail',
        'Martini'
    ],
    '🍹': [
        'Boisson tropicale',
        ':tropical_drink:',
        'Coup de fruits',
        'Boisson de Tiki'
    ],
    '🍺': [
        'Tasse à bière',
        ':beer_mug:',
        'Bière',
        'Stein de bière',
        ':yellow:'
    ],
    '🍻': [
        'Tasses à bière à bières à patinage',
        ':clinking_beer_mugs:',
        'Bières',
        'Cordialement'
    ],
    '🥂': [
        'Lunettes à patinage',
        ':clinking_glasses:',
        'Célébration',
        'Lunettes de champagne',
        'Cordialement'
    ],
    '🥃': [
        'Verre de Tumbler',
        ':tumbler_glass:',
        'Bourbon',
        'Liqueur',
        'Rum',
        'Whiskey',
        'Whisky'
    ],
    '🥤': [
        'Coupe avec paille',
        ':cup_with_straw:',
        'Milkshake',
        'Lissage',
        'Pop de soude',
        'Boisson douce'
    ],
    '🥢': [
        'Baguettes',
        ':chopsticks:'
    ],
    '🍽️': [
        'Fork et Couteau avec Plaque',
        ':fork_and_knife_with_plate:',
        'Dîner',
        ':white:',
        ':gray:',
        ':grey:'
    ],
    '🍴': [
        'Fork et Couteau',
        ':fork_and_knife:',
        'Taillade',
        'Couteau et fourche',
        'Argent',
        ':gray:',
        ':grey:'
    ],
    '🥄': [
        'Cuillère',
        ':spoon:',
        ':gray:',
        ':grey:'
    ],
    '🧄': [
        'Ail',
        ':garlic:'
    ],
    '🧅': [
        'Oignon',
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
        'Beurre',
        ':butter:'
    ],
    '🦪': [
        'Huître',
        ':oyster:'
    ],
    '🧃': [
        'Boîte-boissons',
        ':beverage_box:',
        'Boîte de jus'
    ],
    '🧉': [
        'Boire au matelas',
        ':mate_drink:',
        'Chimarra',
        'Cimarrón',
        'Yerba Mate'
    ],
    '🫒': [
        'Olive',
        ':olive:',
        ':green:'
    ],
    '🫐': [
        'Myrtilles',
        ':blueberries:',
        ':blue:'
    ],
    '🫑': [
        'Poivron de la cloche',
        ':bell_pepper:',
        ':green:'
    ],
    '🫓': [
        'Pain',
        ':flatbread:'
    ],
    '🫔': [
        'Tamalé',
        ':tamale:',
        'tamoul'
    ],
    '🫕': [
        'Fondue',
        ':fondue:'
    ],
    '🧋': [
        'Thé bulle',
        ':boba:',
        'Boba'
    ],
    '🧊': [
        'Cube de glace',
        ':ice_cube:'
    ],
    '🫘': [
        'Beans',
        'Flatulence',
        ':beans:',
        'Fèves de café',
        'Spill the beans'
    ],
    '🫗': [
        'Verser du liquide',
        ':puring_liquid:',
        'Verser une boisson',
        'Eau'
    ]
};
/*flags*/
emojis_language[lang][7] = {
    '🏁': [
        'Drapeau Chequered',
        ':chequered_flag:',
        'Indicateur Dessiné',
        'Grille Fille',
        'Drapeau de course',
        ':black:',
        ':white:'
    ],
    '🚩': [
        'Drapeau triangulaire',
        ':triangular_flag:',
        'Drapeau sur le mât',
        'Drapeau rouge',
        'Drapeau triangulaire sur message',
        ':red:'
    ],
    '🎌': [
        'Drapeaux croisés',
        ':crossed_flags:',
        'Deux drapeaux'
    ],
    '🏴': [
        'Drapeau noir',
        ':black_flag:',
        'Drapeau noir agité',
        ':black:'
    ],
    '🏳️': [
        'Drapeau blanc',
        ':white_flag:',
        'Drapeau blanc agitant',
        ':white:'
    ],
    '🏳️‍🌈': [
        'Drapeau arc-en-ciel',
        ':rainbow_flag:',
        'Pride Flag',
        'LGBT',
        'LGBTQIA+',
        'Gai',
        'Transsexuel',
        'Lesbian',
        'Asexuel',
        'Queer'
    ],
    '🏳️‍⚧️': [
        'Indicateur de transgenres',
        ':transgender_flag:',
        'Bleu, rose et drapeau blanc',
        'Drapeau Trans'
    ],
    '🏴‍☠️': [
        'Drapeau Pirate',
        ':pirate_flag:',
        'Jolly Roger',
        ':black:'
    ],
    '🇺🇳': [
        'Drapeau des Nations Unies',
        ':un:',
        'Drapeau : Nations Unies'
    ],
    '🇪🇺': [
        'Drapeau de l\'Union européenne',
        ':eu:',
        'Drapeau : Union européenne',
        'EU Flag'
    ],
    '🇦🇨': [
        'Drapeau de l\'île de l\'Ascension',
        ':ac:'
    ],
    '🇦🇩': [
        'Drapeau d\'Andorre',
        ':ad:',
        'Andorran Flag'
    ],
    '🇦🇪': [
        'Drapeau des Émirats Arabes Unis',
        ':ae:',
        'Emirati Flag',
        'Drapeau Émirats Arabes Unis'
    ],
    '🇦🇫': [
        'Drapeau de l\'Afghanistan',
        ':af:',
        'Afghan Flag'
    ],
    '🇦🇬': [
        'Drapeau d\'Antigua-et-Barbuda',
        ':ag:'
    ],
    '🇦🇮': [
        'Drapeau d\'Anguilla',
        ':ai:',
        'Drapeau Anguillan'
    ],
    '🇦🇱': [
        'Drapeau de l\'Albanie',
        ':al:',
        'Drapeau albanais'
    ],
    '🇦🇲': [
        'Drapeau d\'Arménie',
        ':am:',
        'Drapeau d\'Arménie'
    ],
    '🇦🇴': [
        'Drapeau d\'Angola',
        ':ao:',
        'Drapeau angolais'
    ],
    '🇦🇶': [
        'Drapeau de l\'Antarctique',
        ':aq:',
        'Drapeau Antarctique'
    ],
    '🇦🇷': [
        'Drapeau de l\'Argentine',
        ':ar:',
        'Drapeau argentin'
    ],
    '🇦🇸': [
        'Drapeau des Samoa Américaines',
        ':as:',
        'American Samoan Flag'
    ],
    '🇦🇹': [
        'Drapeau de l\'Autriche',
        ':at:',
        'Austrian Flag'
    ],
    '🇦🇺': [
        'Drapeau de l\'Australie',
        ':au:',
        'Drapeau australien',
        'Drapeau australien'
    ],
    '🇦🇼': [
        'Drapeau d\'Aruba',
        ':aw:',
        'Drapeau Aruban'
    ],
    '🇦🇽': [
        'Drapeau des îles A<unk> land',
        ':ax:',
        'Drapeau A<unk> land'
    ],
    '🇦🇿': [
        'Drapeau d\'Azerbaïdjan',
        ':az:',
        'Drapeau azerbaïdjanais'
    ],
    '🇧🇦': [
        'Drapeau de la Bosnie-et-Herzégovine',
        ':ba:'
    ],
    '🇧🇧': [
        'Drapeau de la Barbade',
        ':bb:',
        'Drapeau Barbadien',
        'Drapeau Bajan'
    ],
    '🇧🇩': [
        'Drapeau du Bangladesh',
        ':bd:',
        'Bangladeshi Flag'
    ],
    '🇧🇪': [
        'Drapeau de la Belgique',
        ':be:',
        'Drapeau belge'
    ],
    '🇧🇫': [
        'Drapeau du Burkina Faso',
        ':bf:',
        'Drapeau Burkinabé'
    ],
    '🇧🇬': [
        'Drapeau de la Bulgarie',
        ':bg:',
        'Drapeau bulgare'
    ],
    '🇧🇭': [
        'Drapeau de Bahreïn',
        ':bh:',
        'Drapeau bahrani',
        'Drapeau bahreïnien'
    ],
    '🇧🇮': [
        'Drapeau du Burundi',
        ':bi:',
        'Burundian Flag'
    ],
    '🇧🇯': [
        'Drapeau du Bénin',
        ':bj:',
        'Drapeau béninais'
    ],
    '🇧🇱': [
        'Drapeau de Saint Barthélemy',
        ':bl:',
        'Drapeau : Saint-Barthélemy'
    ],
    '🇧🇲': [
        'Drapeau des Bermudes',
        ':bm:',
        'Bermudan Flag'
    ],
    '🇧🇳': [
        'Drapeau de Brunei',
        ':bn:',
        'Drapeau Brunéien'
    ],
    '🇧🇴': [
        'Drapeau de la Bolivie',
        ':bo:',
        'Bolivian Flag'
    ],
    '🇧🇶': [
        'Drapeau des Caraïbes Pays-Bas',
        ':bq:',
        'Bonaire'
    ],
    '🇧🇷': [
        'Drapeau du Brésil',
        ':br:',
        'Drapeau brésilien'
    ],
    '🇧🇸': [
        'Drapeau des Bahamas',
        ':bs:',
        'Drapeau bahamien'
    ],
    '🇧🇹': [
        'Drapeau du Bhoutan',
        ':bt:',
        'Drapeau bhoutanais'
    ],
    '🇧🇻': [
        'Drapeau de l\'île de Bouvet',
        ':bv:',
        'Drapeau : Île Bouvet'
    ],
    '🇧🇼': [
        'Drapeau du Botswana',
        ':bw:',
        'Batswana Flag'
    ],
    '🇧🇾': [
        'Drapeau de la Biélorussie',
        ':by:',
        'Drapeau biélorusse'
    ],
    '🇧🇿': [
        'Drapeau de Belize',
        ':bz:',
        'Drapeau Belizean'
    ],
    '🇨🇦': [
        'Drapeau du Canada',
        'Drapeau canadien',
        ':ca:'
    ],
    '🇨🇨': [
        'Drapeau des îles Cocos (Keeling)',
        ':cc:'
    ],
    '🇨🇩': [
        'Flag of Congo - Kinshasa',
        ':cd:'
    ],
    '🇨🇫': [
        'Drapeau de la République centrafricaine',
        ':cf:',
        'Drapeau centrafricain'
    ],
    '🇨🇬': [
        'Drapeau du Congo - Brazzaville',
        ':cg:'
    ],
    '🇨🇭': [
        'Drapeau suisse',
        ':ch:',
        'Croix Rouge',
        'Drapeau suisse'
    ],
    '🇨🇮': [
        'Drapeau de la Côte d\'Ivoire',
        ':ci:',
        'Flag: Côte d’Ivoire'
    ],
    '🇨🇰': [
        'Drapeau des îles Cook',
        ':ck:',
        'Drapeau de l\'Île Cook'
    ],
    '🇨🇱': [
        'Drapeau du Chili',
        ':cl:',
        'Drapeau chilien'
    ],
    '🇨🇲': [
        'Drapeau du Cameroun',
        ':cm:',
        'Drapeau camerounais'
    ],
    '🇨🇳': [
        'Drapeau de la Chine',
        ':cn:',
        'Drapeau Chinois'
    ],
    '🇨🇴': [
        'Drapeau de la Colombie',
        ':co:',
        'Drapeau colombien'
    ],
    '🇨🇵': [
        'Drapeau de l\'île Clipperton',
        ':cp:',
        'Drapeau : Île Clipperton'
    ],
    '🇨🇷': [
        'Drapeau du Costa Rica',
        ':cr:',
        'Drapeau costaricien'
    ],
    '🇨🇺': [
        'Drapeau de Cuba',
        ':cu:',
        'Drapeau cubain'
    ],
    '🇨🇻': [
        'Drapeau du Cap-Vert',
        ':cv:',
        'Drapeau du Cap-Verdien'
    ],
    '🇨🇼': [
        'Drapeau de Curaçao',
        ':cw:',
        'Curaçaoan Flag'
    ],
    '🇨🇽': [
        'Drapeau de l\'île de Noël',
        ':cx:',
        'Drapeau de l\'île de Noël'
    ],
    '🇨🇾': [
        'Drapeau de Chypre',
        ':cy:',
        'Drapeau chypriote'
    ],
    '🇨🇿': [
        'Drapeau de Tchéquie',
        ':cz:',
        'Drapeau tchèque'
    ],
    '🇩🇪': [
        'Drapeau de l\'Allemagne',
        ':de:',
        'Drapeau Deutsch',
        'Drapeau allemand'
    ],
    '🇩🇬': [
        'Drapeau de Diego Garcia',
        ':dg:',
        'Drapeau : Diego Garcia'
    ],
    '🇩🇯': [
        'Drapeau de Djibouti',
        ':dj:',
        'Djibouti Flag',
        'Djiboutian Flag'
    ],
    '🇩🇰': [
        'Drapeau du Danemark',
        ':dk:',
        'Drapeau danois'
    ],
    '🇩🇲': [
        'Drapeau de la Dominique',
        ':dm:'
    ],
    '🇩🇴': [
        'Drapeau de la République Dominicaine',
        ':do:',
        'Drapeau du dieu',
        'Drapeau Dominicain'
    ],
    '🇩🇿': [
        'Drapeau de l\'Algérie',
        ':dz:',
        'Algerian Flag'
    ],
    '🇪🇦': [
        'Drapeau de Ceuta & Melilla',
        ':ea:',
        'Drapeau de Melilla',
        'Drapeau de Ceuta',
        'Flag: Ceuta & Melilla'
    ],
    '🇪🇨': [
        'Drapeau de l\'Équateur',
        ':ec:',
        'Ecuadorian Flag'
    ],
    '🇪🇪': [
        'Drapeau de l\'Estonie',
        ':ee:',
        'Drapeau estonien'
    ],
    '🇪🇬': [
        'Drapeau de l\'Égypte',
        ':eg:',
        'Drapeau égyptien'
    ],
    '🇪🇭': [
        'Drapeau du Sahara occidental',
        ':eh:',
        'Drapeau du Sahara occidental'
    ],
    '🇪🇷': [
        'Drapeau d\'Érythrée',
        ':er:',
        'Eritrean Flag'
    ],
    '🇪🇹': [
        'Drapeau de l\'Éthiopie',
        ':et:',
        'Ethiopian Flag'
    ],
    '🇪🇸': [
        'Drapeau de l\'Espagne',
        ':es:',
        'Drapeau espagnol'
    ],
    '🇫🇮': [
        'Drapeau de la Finlande',
        ':fi:',
        'Drapeau finlandais'
    ],
    '🇫🇯': [
        'Drapeau des Fidji',
        ':fj:',
        'Fijian Flag'
    ],
    '🇫🇰': [
        'Drapeau des îles Malouines',
        ':fk:',
        'Drapeau Falklander'
    ],
    '🇫🇲': [
        'Drapeau de Micronésie',
        ':fm:',
        'Drapeau Micronésien'
    ],
    '🇫🇴': [
        'Drapeau des îles Féroé',
        ':fo:',
        'Faroe Islander Flag'
    ],
    '🇫🇷': [
        'Drapeau de la France',
        ':fr:',
        'Drapeau français'
    ],
    '🇬🇦': [
        'Drapeau du Gabon',
        ':ga:',
        'Drapeau gabonais'
    ],
    '🇬🇧': [
        'Drapeau de la Grande-Bretagne',
        ':gb:',
        'Drapeau britannique',
        'Royaume-Uni',
        'Jack de l\'Union',
        'RU'
    ],
    '🏴󠁧󠁢󠁥󠁮󠁧󠁿󠁧󠁢󠁥󠁮󠁧󠁿': [
        'Drapeau d\'Angleterre',
        ':england:',
        'Croix Saint-Georges',
        'Drapeau anglais'
    ],
    '🏴󠁧󠁢󠁷󠁬󠁳󠁿󠁧󠁢󠁷󠁬󠁳󠁿': [
        'Drapeau du Pays de Galles',
        ':wales:',
        'Drapeau gallois',
        'Dragon Rouge',
        'Baner Cymru',
        'Y Ddraig Goch'
    ],
    '🏴󠁧󠁢󠁳󠁣󠁴󠁿󠁧󠁢󠁳󠁣󠁴󠁿': [
        'Drapeau d\'Ecosse',
        ':scotland:',
        'Drapeau écossais',
        'Croix St Andrews',
        'Salentin'
    ],
    '🇬🇩': [
        'Drapeau de la Grenade',
        ':gd:',
        'Drapeau Grenadien'
    ],
    '🇬🇪': [
        'Drapeau de la Géorgie',
        ':ge:',
        'Drapeau géorgien'
    ],
    '🇬🇫': [
        'Drapeau de la Guyane française',
        ':gf:',
        'Drapeau Guinéen français'
    ],
    '🇬🇬': [
        'Drapeau de Guernesey',
        ':gg:',
        'Guernsey Flag'
    ],
    '🇬🇭': [
        'Drapeau du Ghana',
        ':gh:',
        'Drapeau ghanéen'
    ],
    '🇬🇮': [
        'Drapeau de Gibraltar',
        ':gi:',
        'Drapeau Gibraltaire'
    ],
    '🇬🇱': [
        'Drapeau du Groenland',
        ':gl:',
        'Greenlandic Flag'
    ],
    '🇬🇲': [
        'Drapeau de la Gambie',
        ':gm:',
        'Gambian Flag'
    ],
    '🇬🇳': [
        'Drapeau de la Guinée',
        ':gn:',
        'Guinean Flag'
    ],
    '🇬🇵': [
        'Drapeau de la Guadeloupe',
        ':gp:',
        'Drapeau guadeloupéen'
    ],
    '🇬🇶': [
        'Drapeau de Guinée équatoriale',
        ':gq:',
        'Equatorial Guinean Flag',
        'Drapeau équato-guinéen'
    ],
    '🇬🇷': [
        'Drapeau de la Grèce',
        ':gr:',
        'Drapeau grec'
    ],
    '🇬🇸': [
        'Drapeau de la Géorgie du Sud et des îles Sandwich du Sud',
        ':gs:'
    ],
    '🇬🇹': [
        'Drapeau du Guatemala',
        ':gt:',
        'Guatemalan Flag'
    ],
    '🇬🇺': [
        'Drapeau de Guam',
        ':gu:',
        'Drapeau guaméen',
        'Drapeau Chamorro'
    ],
    '🇬🇼': [
        'Drapeau de la Guinée-Bissau',
        ':gw:',
        'Guinea-Bissau Flag'
    ],
    '🇬🇾': [
        'Drapeau de la Guyane',
        ':gy:',
        'Drapeau guyanais'
    ],
    '🇭🇰': [
        'Drapeau de Hong Kong SAR Chine',
        ':hk:',
        'Drapeau Hong Kong'
    ],
    '🇭🇲': [
        'Drapeau des îles Heard & McDonald',
        ':hm:',
        'Drapeau : Îles Heard & McDonald'
    ],
    '🇭🇳': [
        'Drapeau du Honduras',
        ':hn:',
        'Drapeau Hondurien'
    ],
    '🇭🇷': [
        'Drapeau de la Croatie',
        ':hr:',
        'Drapeau croate'
    ],
    '🇭🇹': [
        'Drapeau d\'Haïti',
        ':ht:',
        'Haitian Flag'
    ],
    '🇭🇺': [
        'Drapeau de la Hongrie',
        ':hu:',
        'Drapeau hongrois'
    ],
    '🇮🇨': [
        'Drapeau des îles Canaries',
        ':ic:'
    ],
    '🇮🇩': [
        'Drapeau de l\'Indonésie',
        ':id:',
        'Drapeau indonésien'
    ],
    '🇮🇪': [
        'Drapeau de l\'Irlande',
        ':ie:',
        'Drapeau irlandais'
    ],
    '🇮🇱': [
        'Drapeau d\'Israël',
        ':il:',
        'Drapeau israélien'
    ],
    '🇮🇲': [
        'Drapeau de l\'île de Man',
        ':im:',
        'Manx Flag'
    ],
    '🇮🇳': [
        'Drapeau de l\'Inde',
        ':in:',
        'Drapeau Indien'
    ],
    '🇮🇴': [
        'Drapeau du territoire britannique de l\'océan Indien',
        ':io:',
        'Drapeau britannique de l\'océan Indien'
    ],
    '🇮🇶': [
        'Drapeau de l\'Irak',
        ':iq:',
        'Iraqi Flag'
    ],
    '🇮🇷': [
        'Drapeau de l’Iran',
        ':ir:',
        'Drapeau iranien'
    ],
    '🇮🇸': [
        'Drapeau de l\'Islande',
        ':is:',
        'Drapeau islandais'
    ],
    '🇮🇹': [
        'Drapeau de l\'Italie',
        ':it:',
        'Drapeau italien'
    ],
    '🇯🇪': [
        'Drapeau de Jersey',
        ':je:',
        'Drapeau de Jersey'
    ],
    '🇯🇲': [
        'Drapeau de la Jamaïque',
        ':jm:',
        'Drapeau jamaïcain'
    ],
    '🇯🇴': [
        'Drapeau de la Jordanie',
        ':jo:',
        'Drapeau jordanien'
    ],
    '🇯🇵': [
        'Drapeau du Japon',
        ':jp:',
        'Drapeau japonais'
    ],
    '🇰🇪': [
        'Drapeau du Kenya',
        ':ke:',
        'Drapeau kényan'
    ],
    '🇰🇬': [
        'Drapeau du Kirghizstan',
        ':kg:',
        'Kyrgyzstani Flag'
    ],
    '🇰🇭': [
        'Drapeau du Cambodge',
        ':kh:',
        'Drapeau cambodgien'
    ],
    '🇰🇮': [
        'Drapeau de Kiribati',
        ':ki:',
        'Drapeau I-Kiribati'
    ],
    '🇰🇲': [
        'Drapeau des Comores',
        ':km:',
        'Drapeau comorien'
    ],
    '🇰🇳': [
        'Drapeau de Saint-Christophe-et-Nevis',
        ':kn:'
    ],
    '🇰🇵': [
        'Drapeau de la Corée du Nord',
        ':kp:',
        'Drapeau nord-coréen'
    ],
    '🇰🇷': [
        'Drapeau de la Corée du Sud',
        ':kr:',
        'Drapeau sud-coréen'
    ],
    '🇰🇼': [
        'Drapeau du Koweït',
        ':kw:',
        'Kuwaiti Flag'
    ],
    '🇰🇾': [
        'Drapeau des îles Caïman',
        ':ky:',
        'Drapeau caymanien'
    ],
    '🇰🇿': [
        'Drapeau du Kazakhstan',
        ':kz:',
        'Kazakhstani Flag',
        'Kazakh Flag'
    ],
    '🇱🇦': [
        'Drapeau du Laos',
        ':la:',
        'Drapeau laotien',
        'Drapeau laotien'
    ],
    '🇱🇧': [
        'Drapeau du Liban',
        ':lb:',
        'Drapeau libanais'
    ],
    '🇱🇨': [
        'Drapeau de Sainte-Lucie',
        ':lc:'
    ],
    '🇱🇮': [
        'Drapeau du Liechtenstein',
        ':lt:',
        'Drapeau du Liechtensteiner'
    ],
    '🇱🇰': [
        'Drapeau du Sri Lanka',
        ':lk:',
        'Drapeau sri-lankais'
    ],
    '🇱🇷': [
        'Drapeau du Liberia',
        ':lr:',
        'Drapeau libérien'
    ],
    '🇱🇸': [
        'Flag of Lesotho',
        ':ls:',
        'Basotho Flag'
    ],
    '🇱🇹': [
        'Drapeau de la Lituanie',
        ':lt:',
        'Drapeau lituanien'
    ],
    '🇱🇺': [
        'Drapeau luxembourgeois',
        ':lu:',
        'Drapeau luxembourgeois'
    ],
    '🇱🇻': [
        'Drapeau de Lettonie',
        ':lv:',
        'Drapeau Letton'
    ],
    '🇱🇾': [
        'Drapeau de la Libye',
        ':ly:',
        'Drapeau libyen'
    ],
    '🇲🇦': [
        'Drapeau du Maroc',
        ':ma:',
        'Drapeau marocain'
    ],
    '🇲🇨': [
        'Drapeau de Monaco',
        ':mc:',
        'Drapeau monégasque'
    ],
    '🇲🇩': [
        'Drapeau de la Moldavie',
        ':md:',
        'Drapeau moldave'
    ],
    '🇲🇪': [
        'Drapeau du Monténégro',
        ':me:',
        'Drapeau Monténégrin'
    ],
    '🇲🇫': [
        'Drapeau de Saint Martin',
        ':mf:',
        'Flag: St. Martin'
    ],
    '🇲🇬': [
        'Drapeau de Madagascar',
        ':mg:',
        'Madagascan Flag'
    ],
    '🇲🇭': [
        'Drapeau des îles Marshall',
        ':mh:',
        'Drapeau Marshallais'
    ],
    '🇲🇰': [
        'Drapeau de la Macédoine',
        ':mk:',
        'Drapeau macédonien'
    ],
    '🇲🇱': [
        'Drapeau du Mali',
        ':ml:',
        'Drapeau malien'
    ],
    '🇲🇲': [
        'Drapeau du Myanmar (Birmanie)',
        ':mm:',
        'Drapeau du Myanmar',
        'Drapeau pour la Birmanie',
        'Drapeau birman'
    ],
    '🇲🇳': [
        'Drapeau de Mongolie',
        ':mn:',
        'Drapeau mongol'
    ],
    '🇲🇴': [
        'Drapeau de Macao Sar Chine',
        ':mo:',
        'Drapeau macanais'
    ],
    '🇲🇵': [
        'Drapeau des îles Mariannes du Nord',
        ':mp:',
        'Drapeau Micronésien'
    ],
    '🇲🇶': [
        'Drapeau de la Martinique',
        ':mq:',
        'Drapeau serpent de Martinique',
        'Drapeau Martiniquais'
    ],
    '🇲🇷': [
        'Drapeau de la Mauritanie',
        ':mr:',
        'Drapeau mauritanien'
    ],
    '🇲🇸': [
        'Flag of Montserrat',
        ':ms:',
        'Montserratian Flag'
    ],
    '🇲🇹': [
        'Drapeau de Malte',
        ':mt:',
        'Maltese Flag'
    ],
    '🇲🇺': [
        'Flag of Mauritius',
        ':mu:',
        'Drapeau Mauricien'
    ],
    '🇲🇻': [
        'Drapeau des Maldives',
        ':mv:',
        'Drapeau des Maldiviens'
    ],
    '🇲🇼': [
        'Drapeau du Malawi',
        ':mw:',
        'Malawian Flag'
    ],
    '🇲🇽': [
        'Drapeau du Mexique',
        ':mx:',
        'Drapeau mexicain'
    ],
    '🇲🇾': [
        'Drapeau de Malaisie',
        ':my:',
        'Malaysian Flag'
    ],
    '🇲🇿': [
        'Drapeau du Mozambique',
        ':mz:',
        'Drapeau mozambicain'
    ],
    '🇳🇦': [
        'Drapeau de la Namibie',
        ':na:',
        'Namibian Flag'
    ],
    '🇳🇨': [
        'Drapeau de la Nouvelle-Calédonie',
        ':nc:',
        'Nouveau drapeau calédonien'
    ],
    '🇳🇪': [
        'Drapeau du Niger',
        ':ne:',
        'Drapeau Nigérien'
    ],
    '🇳🇫': [
        'Drapeau de l\'île Norfolk',
        ':nf:',
        'Drapeau de l\'île Norfolk'
    ],
    '🇳🇬': [
        'Drapeau du Nigeria',
        ':ng:',
        'Drapeau nigérian'
    ],
    '🇳🇮': [
        'Flag of Nicaragua',
        ':ni:',
        'Nicaraguan Flag'
    ],
    '🇳🇱': [
        'Drapeau des Pays-Bas',
        ':nl:',
        'Drapeau néerlandais',
        'Hollande'
    ],
    '🇳🇴': [
        'Drapeau de la Norvège',
        ':no:',
        'Drapeau norvégien'
    ],
    '🇳🇵': [
        'Drapeau du Népal',
        ':np:',
        'Drapeau népalais'
    ],
    '🇳🇷': [
        'Drapeau de Nauru',
        ':nr:',
        'Nauruan Flag'
    ],
    '🇳🇺': [
        'Drapeau de Niue',
        ':nu:',
        'Niuean Flag'
    ],
    '🇳🇿': [
        'Drapeau de la Nouvelle-Zélande',
        ':nz:',
        'Drapeau Kiwi'
    ],
    '🇴🇲': [
        'Drapeau d\'Oman',
        ':om:',
        'Drapeau omanais'
    ],
    '🇵🇦': [
        'Drapeau du Panama',
        ':pa:',
        'Drapeau panaméen'
    ],
    '🇵🇪': [
        'Drapeau du Pérou',
        ':pe:',
        'Drapeau péruvien'
    ],
    '🇵🇫': [
        'Drapeau de la Polynésie Française',
        ':pf:',
        'Drapeau Polynésien français'
    ],
    '🇵🇬': [
        'Drapeau de la Papouasie - Nouvelle-Guinée',
        ':pg:',
        'Indicateur PNG',
        'Papua New Guinean Flag'
    ],
    '🇵🇭': [
        'Drapeau des Philippines',
        ':ph:'
    ],
    '🇵🇰': [
        'Drapeau du Pakistan',
        ':pk:',
        'Drapeau pakistanais'
    ],
    '🇵🇱': [
        'Drapeau de la Pologne',
        ':pl:',
        'Drapeau polonais'
    ],
    '🇵🇲': [
        'Drapeau de Saint Pierre & Miquelon',
        ':pm:'
    ],
    '🇵🇳': [
        'Drapeau de Pitcairn',
        ':pn:'
    ],
    '🇵🇷': [
        'Drapeau de Porto Rico',
        ':pr:',
        'Drapeau de Porto Rican'
    ],
    '🇵🇸': [
        'Drapeau des Territoires palestiniens',
        ':ps:',
        'Palestine'
    ],
    '🇵🇹': [
        'Drapeau du Portugal',
        ':pt:',
        'Drapeau portugais'
    ],
    '🇵🇼': [
        'Drapeau de Palau',
        ':pw:',
        'Drapeau Palauan'
    ],
    '🇵🇾': [
        'Drapeau du Paraguay',
        ':py:',
        'Paraguayan Flag'
    ],
    '🇶🇦': [
        'Drapeau du Qatar',
        ':qa:',
        'Drapeau Qatari'
    ],
    '🇷🇪': [
        'Drapeau de la Réunion',
        ':re:',
        'Drapeau Réunionnais'
    ],
    '🇷🇴': [
        'Drapeau de la Roumanie',
        ':ro:',
        'Drapeau roumain'
    ],
    '🇷🇸': [
        'Drapeau de Serbie',
        ':rs:',
        'Drapeau serbe'
    ],
    '🇷🇺': [
        'Drapeau de la Russie',
        ':ru:',
        'Drapeau Russe'
    ],
    '🇷🇼': [
        'Flag of Rwanda',
        ':rw:',
        'Rwandan Flag'
    ],
    '🇸🇦': [
        'Drapeau de l\'Arabie Saoudite',
        ':sa:',
        'Drapeau Arabe Saoudite'
    ],
    '🇸🇧': [
        'Drapeau des îles Salomon',
        ':sb:',
        'Drapeau de Salomon'
    ],
    '🇸🇨': [
        'Drapeau des Seychelles',
        ':sc:',
        'Seychellois Flag'
    ],
    '🇸🇩': [
        'Drapeau du Soudan',
        ':sd:',
        'Sudanese Flag'
    ],
    '🇸🇪': [
        'Drapeau de la Suède',
        ':se:',
        'Drapeau suédois'
    ],
    '🇸🇬': [
        'Drapeau de Singapour',
        ':sg:',
        'Drapeau singapourien'
    ],
    '🇸🇭': [
        'Drapeau de Sainte-Hélène',
        ':sh:'
    ],
    '🇸🇮': [
        'Drapeau de la Slovénie',
        ':si:',
        'Drapeau slovène'
    ],
    '🇸🇯': [
        'Drapeau de Svalbard & Jan Mayen',
        ':sj:'
    ],
    '🇸🇰': [
        'Drapeau de la Slovaquie',
        ':sk:',
        'Drapeau slovaque',
        'Slovakian Flag'
    ],
    '🇸🇱': [
        'Drapeau de la Sierra Leone',
        ':sl:',
        'Sierra Leonean Flag'
    ],
    '🇸🇲': [
        'Drapeau de Saint-Marin',
        ':sm:',
        'Drapeau sammarin'
    ],
    '🇸🇳': [
        'Drapeau du Sénégal',
        ':sn:',
        'Drapeau sengalais'
    ],
    '🇸🇴': [
        'Drapeau de la Somalie',
        ':so:',
        'Somalian Flag'
    ],
    '🇸🇷': [
        'Drapeau du Suriname',
        ':sr:',
        'Drapeau Surinamer'
    ],
    '🇸🇸': [
        'Drapeau du Sud-Soudan',
        ':ss:',
        'Drapeau sud-soudanais'
    ],
    '🇸🇹': [
        'Drapeau de Sa<unk> o Tomé & Príncipe',
        ':st:'
    ],
    '🇸🇻': [
        'Drapeau du Salvador',
        ':sv:',
        'Drapeau du Salvador'
    ],
    '🇸🇽': [
        'Drapeau de Saint-Martin',
        ':sx:'
    ],
    '🇸🇾': [
        'Drapeau de la Syrie',
        ':sy:',
        'Drapeau syrien'
    ],
    '🇸🇿': [
        'Drapeau du Swaziland',
        ':sz:',
        'Drapeau Eswatini'
    ],
    '🇹🇦': [
        'Flag of Tristan Da Cunha',
        ':ta:'
    ],
    '🇹🇨': [
        'Drapeau des îles Turques et Caïques',
        ':tc:'
    ],
    '🇹🇩': [
        'Drapeau du Tchad',
        ':td:',
        'Drapeau tchadien'
    ],
    '🇹🇫': [
        'Drapeau des territoires français du Sud',
        ':tf:',
        'Drapeau français des Terres du Sud'
    ],
    '🇹🇬': [
        'Drapeau du Togo',
        ':tg:',
        'Togolese Flag'
    ],
    '🇹🇭': [
        'Drapeau de la Thaïlande',
        ':th:',
        'Drapeau Thaï'
    ],
    '🇹🇯': [
        'Drapeau du Tadjikistan',
        ':tj:',
        'Drapeau du Tadjik'
    ],
    '🇹🇰': [
        'Drapeau de Tokelau',
        ':tk:',
        'Drapeau Tokelauan'
    ],
    '🇹🇱': [
        'Drapeau du Timor-Leste',
        ':tl:',
        'Drapeau du Timor-Leste',
        'Drapeau du Timor oriental'
    ],
    '🇹🇲': [
        'Drapeau du Turkménistan',
        ':tm:',
        'Turkmen Flag'
    ],
    '🇹🇳': [
        'Drapeau de la Tunisie',
        ':tn:',
        'Drapeau tunisien'
    ],
    '🇹🇴': [
        'Drapeau de Tonga',
        ':to:',
        'Tongan Flag'
    ],
    '🇹🇷': [
        'Drapeau de la Turquie',
        ':tr:',
        'Drapeau turc'
    ],
    '🇹🇹': [
        'Drapeau de Trinité-et-Tobago',
        ':tt:'
    ],
    '🇹🇻': [
        'Drapeau de Tuvalu',
        ':tv:',
        'Drapeau tuvaluan'
    ],
    '🇹🇼': [
        'Drapeau de Taïwan',
        ':tw:',
        'Drapeau taïwanais'
    ],
    '🇹🇿': [
        'Drapeau de la Tanzanie',
        ':tz:',
        'Tanzanian Flag'
    ],
    '🇺🇦': [
        'Drapeau de l’Ukraine',
        ':ua:',
        'Drapeau ukrainien'
    ],
    '🇺🇬': [
        'Drapeau de l\'Ouganda',
        ':ug:',
        'Drapeau ougandais'
    ],
    '🇺🇲': [
        'Drapeau : Îles éloignées des États-Unis',
        ':um:'
    ],
    '🇺🇸': [
        'Drapeau des États-Unis',
        ':us:',
        'Drapeau américain',
        'Drapeau américain'
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
        'Drapeau du Saint-Siège',
        ':va:',
        'Drapeau Vanticanien'
    ],
    '🇻🇨': [
        'Drapeau de Saint-Vincent-et-Grenadines',
        ':vc:'
    ],
    '🇻🇪': [
        'Drapeau du Venezuela',
        ':ve:',
        'Drapeau vénézuélien'
    ],
    '🇻🇬': [
        'Drapeau des îles Vierges britanniques',
        ':vg:',
        'Drapeau de l\'île Vierge Britannique'
    ],
    '🇻🇮': [
        'Drapeau des îles Vierges américaines',
        ':vi:',
        'Drapeau de l\'île Vierge des États-Unis'
    ],
    '🇻🇳': [
        'Drapeau du Viêt Nam',
        ':vn:',
        'Drapeau vietnamien'
    ],
    '🇻🇺': [
        'Flag of Vanuatu',
        ':vu:',
        'Ni-Vanuatu Flag'
    ],
    '🇼🇫': [
        'Drapeau de Wallis & Futuna',
        ':wf:'
    ],
    '🇼🇸': [
        'Drapeau de Samoa',
        ':ws:',
        'Samoan Flag'
    ],
    '🇽🇰': [
        'Drapeau du Kosovo',
        ':xk:',
        'Kosovar Flag'
    ],
    '🇾🇪': [
        'Drapeau du Yémen',
        ':ye:',
        'Drapeau yéménite'
    ],
    '🇾🇹': [
        'Drapeau de Mayotte',
        ':yt:',
        'Drapeau Mayotte'
    ],
    '🇿🇦': [
        'Drapeau de l\'Afrique du Sud',
        ':za:',
        'Drapeau sud-africain'
    ],
    '🇿🇲': [
        'Drapeau de la Zambie',
        ':zm:',
        'Zambian Flag'
    ],
    '🇿🇼': [
        'Drapeau du Zimbabwe',
        ':zw:',
        'Drapeau du Zimbabwe',
        'Drapeau Zim'
    ]
};
/*sports*/
emojis_language[lang][8] = {
    '🧗{{skin_tone}}‍♂️': [
        'Escalade de l\'homme',
        ':man_climbing:',
        ':climbing:',
        'Escalade masculine',
        'Escalade de l\'homme',
        ':man:'
    ],
    '🧗{{skin_tone}}‍♀️': [
        'Escalade féminine',
        ':woman_climbing:',
        ':climbing:',
        'Escalade féminine',
        'Escalade féminine',
        ':woman:'
    ],
    '🧗{{skin_tone}}': [
        'Escalade par personne',
        ':person_climbing:',
        ':climbing:',
        'Escaladeur de roche',
        'Escalade de personne',
        ':person:'
    ],
    '🏇{{skin_tone}}': [
        'Course de chevaux',
        ':horse_racing:',
        'Course de chevaux',
        'Jockey'
    ],
    '⛷{{skin_tone}}‍️': [
        'Skier',
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
        'Golfeur Femme',
        ':woman_golfer:',
        ':golfer:',
        ':woman:'
    ],
    '🏌️{{skin_tone}}': [
        'Golfeur',
        ':person_golfer:',
        ':golfer:',
        ':person:'
    ],
    '🏄{{skin_tone}}‍♂️': [
        'Surfeur homme',
        ':man_surfer:',
        ':surfer:',
        ':man:'
    ],
    '🏄{{skin_tone}}‍♀️': [
        'Surfeur féminin',
        ':woman_surfer:',
        ':surfer:',
        ':woman:'
    ],
    '🏄{{skin_tone}}': [
        'Surfeur',
        ':person_surfer:',
        ':surfer:',
        ':person:'
    ],
    '🚣{{skin_tone}}‍♂️': [
        'Bateau à Voile Homme',
        ':man_rowing_boat:',
        ':rowing_boat:',
        ':man:'
    ],
    '🚣{{skin_tone}}‍♀️': [
        'Bateau en voûte féminine',
        ':woman_rowing_boat:',
        ':rowing_boat:',
        ':woman:'
    ],
    '🚣{{skin_tone}}': [
        'Bateau à ramer de personne',
        ':person_rowing_boat:',
        ':rowing_boat:',
        ':person:'
    ],
    '🏊{{skin_tone}}‍♂️': [
        'Nager Homme',
        ':man_swimming:',
        ':swimming:',
        'Nageur homme',
        ':man:'
    ],
    '🏊{{skin_tone}}‍♀️': [
        'Nager Femme',
        ':woman_swimming:',
        ':swimming:',
        'Nageuse féminine',
        ':woman:'
    ],
    '🏊{{skin_tone}}': [
        'Nager en personne',
        ':person_swimming:',
        ':swimming:',
        'Nageur',
        ':person:'
    ],
    '⛹{{skin_tone}}‍️‍♂️': [
        'Balle rebondissante',
        ':man_bouncing_ball:',
        ':bouncing_ball:',
        'Joueur de basket-ball homme',
        ':man:'
    ],
    '⛹️{{skin_tone}}‍♀️': [
        'Balle rebondissante Femme',
        ':woman_bouncing_ball:',
        ':boucing_ball:',
        'Joueur de basket-ball féminin',
        ':woman:'
    ],
    '⛹️{{skin_tone}}': [
        'Balle rebondissante',
        ':person_bouncing_ball:',
        ':boucing_ball:',
        'Joueur de basket-ball',
        ':person:'
    ],
    '🏋️{{skin_tone}}‍♂️': [
        'Lever les poids des hommes',
        ':man_lifting_weights:',
        ':lifting_weights:',
        'Haut-poids de l\'homme',
        ':man:'
    ],
    '🏋️{{skin_tone}}‍♀️': [
        'Poids des femmes levantes',
        ':woman_lifting_weights:',
        ':lifting_weights:',
        'Poids de la femme',
        ':woman:'
    ],
    '🏋️{{skin_tone}}': [
        'Poids de levier de la personne',
        ':person_lifting_weights:',
        ':lifting_weights:',
        'Poids de la personne',
        ':person:'
    ],
    '🚴{{skin_tone}}‍♂️': [
        'Moto Homme',
        ':man_biking:',
        ':biking:',
        'Cycliste homme',
        'Cycliste mâle',
        ':man:'
    ],
    '🚴{{skin_tone}}‍♀️': [
        'Vélo féminin',
        ':woman_biking:',
        ':biking:',
        'Cycliste féminin',
        'Cycliste féminin',
        ':woman:'
    ],
    '🚴{{skin_tone}}': [
        'Vélo',
        ':person_biking:',
        ':biking:',
        'Cycliste',
        'Cycliste',
        ':person:'
    ],
    '🚵{{skin_tone}}‍♂️': [
        'Vélo de montagne de l\'homme',
        ':man_mountain_bike:',
        ':mountain_bike:',
        'Motards en montagne',
        ':man:'
    ],
    '🚵{{skin_tone}}‍♀️': [
        'Vélo de montagne féminin',
        ':woman_mountain_bike:',
        ':mountain_bike:',
        'Motards de montagne féminins',
        ':woman:'
    ],
    '🚵{{skin_tone}}': [
        'Vélo de montagne',
        ':person_mountain_bike:',
        ':mountain_bike:',
        'Personnes de Motards de montagne',
        ':person:'
    ],
    '🤸{{skin_tone}}‍♂️': [
        'Chariot d\'homme',
        ':man_cartwheeling:',
        ':cartwheeling:',
        'Roue de charpente de l\'homme',
        ':man:'
    ],
    '🤸{{skin_tone}}‍♀️': [
        'Chariot Femme',
        ':woman_cartwheeling:',
        ':cartwheeling:',
        'Roue de chariot Femme',
        ':woman:'
    ],
    '🤸{{skin_tone}}': [
        'Roue-voiture de la personne',
        ':person_cartwheeling:',
        ':cartwheeling:',
        'Person de la roue dentée',
        ':person:'
    ],
    '🤼‍♂️': [
        'Lutte des hommes',
        ':men_wrestling:',
        ':wrestling:',
        'Lutte',
        'Lutteurs',
        ':man:'
    ],
    '🤼‍♀️': [
        'Lutte contre les femmes',
        ':women_wrestling:',
        ':wrestling:',
        'Lutte',
        'Lutteurs',
        ':woman:'
    ],
    '🤼': [
        'Les gens luttent',
        ':people_wrestling:',
        ':wrestling:',
        'Lutte',
        'Lutteurs',
        ':person:'
    ],
    '🤽{{skin_tone}}‍♂️': [
        'Polo de l\'Homme Jouant à l\'eau',
        ':man_playing_water_polo:',
        ':playing_water_polo:',
        ':man:'
    ],
    '🤽{{skin_tone}}‍♀️': [
        'Polo d\'eau de jeu féminin',
        ':woman_playing_water_polo:',
        ':playing_water_polo:',
        ':woman:'
    ],
    '🤽{{skin_tone}}': [
        'Polo de la personne qui joue à l\'eau',
        ':person_playing_water_polo:',
        ':playing_water_polo:',
        ':person:'
    ],
    '🤾{{skin_tone}}‍♂️': [
        'Handball de jeu d\'homme',
        ':man_playing_handball:',
        ':playing_handball:',
        ':man:'
    ],
    '🤾{{skin_tone}}‍♀️': [
        'Femme à main jouant',
        ':woman_playing_handball:',
        ':playing_handball:',
        ':woman:'
    ],
    '🤾{{skin_tone}}': [
        'Personne qui joue au handball',
        ':person_playing_handball:',
        ':playing_handball:',
        ':person:'
    ],
    '🤹{{skin_tone}}‍♂️': [
        'Jonglerie de l\'homme',
        ':man_juggling:',
        ':juggling:',
        'Jongleur d\'homme',
        ':man:'
    ],
    '🤹{{skin_tone}}‍♀️': [
        'Jonglerie féminine',
        ':woman_juggling:',
        ':juggling:',
        'Jongleur féminin',
        ':woman:'
    ],
    '🤹{{skin_tone}}': [
        'Jongler avec une personne',
        ':person_juggling:',
        ':juggling:',
        'Jongleur de personne',
        ':person:'
    ],
    '🧘{{skin_tone}}‍♂️': [
        'Homme dans la position Lotus',
        ':man_lotus_position:',
        ':lotus_position:',
        'Méditation',
        'Zen',
        'Pantalon croisé',
        'Yoga',
        ':man:'
    ],
    '🧘{{skin_tone}}‍♀️': [
        'Position de la femme dans le lotus',
        ':woman_lotus_position:',
        ':lotus_position:',
        'Méditation',
        'Zen',
        'Pantalon croisé',
        'Yoga',
        ':woman:'
    ],
    '🧘{{skin_tone}}': [
        'Personne à la position Lotus',
        ':person_lotus:_position',
        ':lotus_position:',
        'Méditation',
        'Zen',
        'Pantalon croisé',
        'Yoga',
        ':person:'
    ],
    '🏃{{skin_tone}}‍♂️': [
        'Course d\'Hommes',
        ':man_running:',
        ':running:',
        ':man:'
    ],
    '🏃{{skin_tone}}‍♀️': [
        'Course de Femmes',
        ':woman_running:',
        ':running:',
        ':woman:'
    ],
    '🏃{{skin_tone}}': [
        'Personne en cours d\'exécution',
        ':person_running:',
        ':running:',
        ':person:'
    ],
    '🕺{{skin_tone}}': [
        'Danse de l\'homme',
        ':man_dancing:',
        ':dancing:',
        ':man:'
    ],
    '💃{{skin_tone}}': [
        'Danse féminine',
        ':woman_dancing:',
        ':dancing:',
        ':woman:'
    ],
    '🤺': [
        'Clôture de personne',
        ':person_fencing:',
        'Eclat',
        ':fencing:'
    ],
    '🏆': [
        'Trophée',
        ':trophy:',
        'Championnat',
        'Gagnant',
        ':gold:',
        ':yellow:'
    ],
    '🏅': [
        'Médaille de sport',
        ':sports_medal:',
        ':medal:',
        ':gold:',
        ':yellow:'
    ],
    '🥇': [
        'Médaille de la 1ère Place',
        ':first_place_medal:',
        ':gold_medal:',
        'Médaille de la première place',
        'Médaille d\'Or',
        ':yellow:',
        ':gold:'
    ],
    '🥈': [
        'Médaille de la 2ème Place',
        ':second_place_medal:',
        ':silver_medal:',
        'Médaille de la seconde place',
        'Médaille d\'Argent',
        ':gray:',
        ':grey:',
        ':silver:'
    ],
    '🥉': [
        'Médaille de la 3ème place',
        ':third_place_medal:',
        ':bronze_medal:',
        'Médaille de la troisième place',
        'Médaille de Bronze',
        ':brown:',
        ':bronze:'
    ],
    '⚽': [
        'Football',
        ':football:',
        'Football',
        ':white:',
        ':black:'
    ],
    '⚾': [
        'Baseball',
        ':baseball:',
        'Boule Softball',
        ':white:'
    ],
    '🥎': [
        'Boule Softball',
        ':softball:',
        ':yellow:'
    ],
    '🏀': [
        'Basket-ball',
        ':basketball:',
        ':orange:',
        'Basket-ball et Hoop'
    ],
    '🏐': [
        'Volley-ball',
        ':volleyball:',
        ':white:'
    ],
    '🏈': [
        'Football américain',
        ':american_football:',
        'Football',
        'Gridiron',
        'Superbol',
        ':brown:'
    ],
    '🏉': [
        'Rugby Football',
        ':rugby:',
        'Football',
        'La ligue',
        'Rugby',
        'Union'
    ],
    '🎾': [
        'Tennis',
        ':tennis:',
        ':ball:',
        'Balle',
        'Racket',
        'Racquet',
        ':yellow:'
    ],
    '🥏': [
        'Disque volant',
        ':flying_disk:',
        'Frisbee'
    ],
    '🎳': [
        'Bowling',
        ':bowling:',
        'Épingles',
        'Skittles',
        'Dix Pins de Bowling'
    ],
    '🏏': [
        'Cricket',
        ':cricket:',
        'Chauve-souris',
        'Balle'
    ],
    '🏑': [
        'Hockey de champ',
        ':field_hockey:',
        'Balle',
        'Bâton'
    ],
    '🏒': [
        'Hockey sur glace',
        ':ice_hockey:',
        'Balle',
        'Bâton'
    ],
    '🥍': [
        'Lacrosse',
        ':lacrosse:',
        'Balle',
        'Bâton',
        ':red:'
    ],
    '🏓': [
        'Ping Pong',
        ':ping_pong:',
        ':table_tennis:',
        'Tennis de table',
        'Balle',
        'Paddle'
    ],
    '🏸': [
        'Badminton',
        ':badminton:',
        'Shuttlecock',
        'Racquet'
    ],
    '🥊': [
        'Gants de boxe',
        ':boxing_glove:',
        ':red:'
    ],
    '🥋': [
        'Uniforme d\'arts martiaux',
        ':martial_arts_uniform:',
        ':judo:',
        ':karate:',
        ':kung_fu:',
        'Judo',
        'Karaté',
        'Kung Fu'
    ],
    '⛳': [
        'Signaler dans un trou',
        ':flag_in_hole:',
        ':golf_flag:',
        'Drapeau de golf'
    ],
    '⛸️': [
        'Patinage sur Glace',
        ':ice_skate:',
        'Patinage'
    ],
    '🎣': [
        'Pêche',
        ':fishing:',
        'Pôle',
        'Poisson',
        'Canne à pêche'
    ],
    '🎽': [
        'Chemise de Course',
        ':running_shirt:',
        'Singlet',
        'Ceinture'
    ],
    '🎿': [
        'Skis',
        ':skis:',
        'En cours de ski',
        'Démarrage'
    ],
    '🛷': [
        'Lèche',
        ':sled:'
    ],
    '🥌': [
        'Pierre de curling',
        ':curling_stone:'
    ],
    '🎯': [
        'Coup direct',
        ':direct_hit:',
        'Tir à l\'arc',
        'Bullseye',
        'Flèches'
    ],
    '🎱': [
        'Pool 8 Balle',
        ':pool_8_ball:',
        'Boule de Cue',
        'Snooker',
        'Billiards',
        ':black:'
    ],
    '🎮': [
        'Contrôleur de jeu vidéo',
        ':video_game_controller:',
        ':playstation:',
        ':xbox:',
        'Playstation',
        'Xbox',
        'Manette de jeu',
        'Wii U'
    ],
    '♟️': [
        'Pion d\'échecs noirs',
        ':black_chess_pawn:',
        ':black:'
    ],
    '🏹': [
        'Arc et Flèche',
        ':arch:',
        'Arche'
    ],
    '🥅': [
        'Filet d\'objectif',
        ':goal_net:'
    ],
    '🀄': [
        'Dragon Rouge de Mahjong',
        ':mahjong:',
        'Mahjong',
        'Mahjong Tile',
        '中',
        'Dragon Rouge de la tuile de Mahjong'
    ],
    '🎴': [
        'Cartes de jeu de fleurs',
        ':flower_playing_cards:',
        'Deck de cartes',
        'Hanafuda',
        'Hwatu',
        'Cartes de jeu'
    ]
};
/*travel and places*/
emojis_language[lang][9] = {
    '🚂': [
        'Locomotive à vapeur',
        ':steam_train:',
        'Train à vapeur',
        'Locomotive ferroviaire'
    ],
    '🚃': [
        'Voiture ferroviaire',
        ':railway_car:',
        'Voiture de fer',
        'Voiture ferroviaire',
        'Véhicule de fer',
        'Wagon ferroviaire'
    ],
    '🚄': [
        'Train à grande vitesse',
        ':high_speed_train:'
    ],
    '🚅': [
        'Train à balles',
        ':bullet_train:',
        'Shinkansen',
        'Train à grande vitesse avec nez de balle'
    ],
    '🚆': [
        'Former',
        ':train:'
    ],
    '🚇': [
        'Souterrain',
        ':underground:',
        'Tube',
        'Métro',
        'Métro'
    ],
    '🚈': [
        'Rail léger',
        ':light_rail:',
        'Former'
    ],
    '🚊': [
        'Tram',
        ':tram:'
    ],
    '🚝': [
        'Monorail',
        ':monorail:',
        'Former'
    ],
    '🚞': [
        'Chemin de fer de montagne',
        ':mountain_railway:',
        'Funicular',
        'Train et Montagne'
    ],
    '🚋': [
        'Tram Car',
        ':tram_car:'
    ],
    '🚌': [
        'Bus',
        ':bus:',
        'Coach'
    ],
    '🚍': [
        'Bus en cours',
        ':front_of_bus:',
        'Devant du bus'
    ],
    '🚎': [
        'Trolleybus',
        ':trolleybus:',
        'Bus électrique'
    ],
    '🚐': [
        'Minibus',
        ':minibus:',
        'Minivan',
        'Transporteur de personnes'
    ],
    '🚑': [
        'Ambulance',
        ':ambulance:'
    ],
    '🚒': [
        'Moteur de feu',
        ':fire_engine:',
        'Service d\'incendie',
        'Camion de Feu'
    ],
    '🚓': [
        'Voiture de police',
        ':police_car:',
        'Voiture Policier',
        'Voiture de police'
    ],
    '🚔': [
        'Voiture de police en cours',
        ':front_of_police_car:',
        'Devant de la voiture de police',
        'Voiture Policier'
    ],
    '🚕': [
        'Taxi',
        ':taxi:',
        'Taxi de New York',
        'Côté Taxi'
    ],
    '🚖': [
        'Taxi',
        ':front_of_taxi:',
        'Taxi à venir',
        'Devant du Taxi'
    ],
    '🚗': [
        'Automobile',
        ':car:',
        'Voiture rouge',
        'Côté voiture',
        'Voiture'
    ],
    '🚘': [
        'Automobile à venir',
        ':front_of_car:',
        'Voiture rouge',
        'Devant de la voiture'
    ],
    '🚚': [
        'Camion de livraison',
        ':lorry:',
        'Camion'
    ],
    '🚛': [
        'Lorry articulé',
        ':articulated_lorry:',
        'Camion Vert'
    ],
    '🚜': [
        'tracteur',
        ':tractor:',
        'Ferme'
    ],
    '🛻': [
        'Camion de ramassage',
        ':pickup_truck:'
    ],
    '🏎️': [
        'Voiture de course',
        ':racing_car:',
        'F1',
        'Formule 1',
        'Voiture de course'
    ],
    '🏍️': [
        'Moto',
        ':motorbike:',
        'Moto'
    ],
    '🛵': [
        'Trottinette motrice',
        ':motor_scooter:',
        'Vespa',
        'Vélo moteur',
        'Vélo moteur'
    ],
    '🛺': [
        'Rickshaw automatique',
        ':auto_rickshaw:',
        'Tuk Tuk'
    ],
    '🚲': [
        'Vélo',
        ':bike:',
        'Vélo'
    ],
    '🛴': [
        'Expulser la trottinette',
        ':kick_scooter:'
    ],
    '⛵': [
        'Voilier',
        ':sailboat:',
        'Dinghy',
        'Yacht'
    ],
    '🚤': [
        'Speedboat',
        ':speedboat:',
        'Bateau à moteur',
        'Bateau à moteur'
    ],
    '🛳️': [
        'Vaisseau Passager',
        ':passenger_ship:'
    ],
    '⛴️': [
        'Baies',
        ':ferry:'
    ],
    '🛥️': [
        'Bateau à moteur',
        ':motor_boat:'
    ],
    '🚢': [
        'Navire de croisière',
        ':cruise_ship:'
    ],
    '✈️': [
        'Avion',
        ':airplane:',
        'Aeroplane'
    ],
    '🛩️': [
        'Petit avion',
        ':small_airplane:',
        'Petit Aéroplan'
    ],
    '🚁': [
        'Hélicoptère',
        ':helicopter:'
    ],
    '🚟': [
        'Voie ferrée de suspension',
        ':suspension_railway:'
    ],
    '🚠': [
        'Téléphérique de montagne',
        ':mountain_cableway:'
    ],
    '🚡': [
        'Tramway aérien',
        ':aerial_tramway:',
        'Câble Car',
        'Gondola',
        'Voie ferrée'
    ],
    '🛰️': [
        'Satellite',
        ':satellite:'
    ],
    '🚀': [
        'Fusée',
        ':rocket:',
        'Navette Espace'
    ],
    '🛸': [
        'Saucer Volant',
        ':flying_saucer:',
        'OVNI'
    ],
    '🚉': [
        'Gare ferroviaire',
        ':train_station:',
        'Plateau de Train'
    ],
    '🚏': [
        'Arrêt de bus',
        ':bus_stop:'
    ],
    '🛣️': [
        'Autoroute',
        ':motorway:',
        'Route',
        'Autoroute',
        'Préfecture'
    ],
    '🛤️': [
        'Voie ferrée',
        ':railway_track:'
    ],
    '🛫': [
        'Départ avion',
        ':airplane_departure:',
        'Décollage'
    ],
    '🛬': [
        'Arrivée en avion',
        ':airplane_arrival:',
        'Avion Arrivé',
        'Atterrissage'
    ],
    '🗾': [
        'Carte du Japon',
        ':map_of_japan:'
    ],
    '⛰️': [
        'Montagne',
        ':mountain:'
    ],
    '🏔️': [
        'Montagne enneigée',
        ':snow_capped_mountain:'
    ],
    '🌋': [
        'Volcan',
        ':volcano:'
    ],
    '🗻': [
        'Mont Fuji',
        ':mount_fuji:',
        'Fuji-san'
    ],
    '🏕️': [
        'Camping',
        ':camping:',
        'Camping'
    ],
    '🏖️': [
        'Plage avec parapluie',
        ':beach_with_umbrella:'
    ],
    '🏜️': [
        'Desert',
        ':desert:'
    ],
    '🏝️': [
        'Île du Désert',
        ':desert_island:'
    ],
    '🏞️': [
        'Parc national',
        ':national_park:'
    ],
    '🏟️': [
        'Stade',
        ':stadium:',
        'Grand stand',
        'Stade de Sport'
    ],
    '🏛️': [
        'Bâtiment classique',
        ':classical_building:',
        'Grecque',
        'Rome'
    ],
    '🏗️': [
        'Construction de Bâtiment',
        ':building_construction:',
        'Grue'
    ],
    '🏘️': [
        'Bâtiments',
        ':houses_building:',
        'Groupe de Maisons'
    ],
    '🏚️': [
        'Déréguler le bâtiment de la maison',
        ':old_house:',
        'Maison abandonnée',
        'Vieille Maison',
        'Maison hantée'
    ],
    '🏠': [
        'Accueil',
        ':home:',
        'Bâtiment de maison'
    ],
    '🏡': [
        'Maison avec jardin',
        ':house_with_garden:',
        'Maison et arbre'
    ],
    '🏢': [
        'Immeuble de bureau',
        ':office_building:',
        'Bâtiment de la Ville',
        'Bâtiment haut de gamme'
    ],
    '🏣': [
        'Poste japonaise',
        ':japanese_post_office:',
        'Marque postale japonaise'
    ],
    '🏤': [
        'Bureau de poste',
        ':european_post_office:',
        'Poste européenne'
    ],
    '🏥': [
        'Hôpital',
        ':hospital:',
        'JE',
        'A&E',
        'Salle d\'urgence',
        'Accident et urgence',
        'Croix Rouge',
        'Médicale'
    ],
    '🏦': [
        'Bancaire',
        ':bank:',
        'BK',
        'Bakkureru',
        'Branche bancaire',
        'Bakkureru'
    ],
    '🏨': [
        'Hôtel',
        ':hotel:',
        'Hébergement',
        'Construction H'
    ],
    '🏩': [
        'Hôtel d\'amour',
        ':love_hotel:',
        'Hôtel Coeur d\'Amour'
    ],
    '🏪': [
        'Magasin de commodité',
        ':convenience_store:',
        'Boutique 24h',
        '7-Onze',
        'Magasin d\'angle',
        'Kwik-E-Mart'
    ],
    '🏫': [
        'École',
        ':school:',
        'Tour de l\'horloge',
        'Moyen élémentaire supérieur'
    ],
    '🏬': [
        'Magasin du Département',
        ':department_store:',
        'Centre commercial',
        'Magasins'
    ],
    '🏭': [
        'Usine',
        ':factory:',
        'Industriel',
        'Industrie',
        'Pollution',
        'Brouillard'
    ],
    '🏯': [
        'Château japonais',
        ':japanese_castle:',
        'Forteresse'
    ],
    '🏰': [
        'Château Européen',
        ':european_castle:',
        'Turrets'
    ],
    '💒': [
        'Coeur d\'église',
        ':church_heart:',
        'Mariage de l\'église',
        'Mariage'
    ],
    '🗼': [
        'Tour de Tokyo',
        ':tokyo_tower:',
        'Tour Eiffel',
        'Tour rouge'
    ],
    '🗽': [
        'Statue de la Liberté',
        ':statue_of_liberty:',
        'New York'
    ],
    '⛪': [
        'Bâtiment de l\'église',
        ':church_building:',
        'Croix'
    ],
    '🕌': [
        'Mosquée',
        ':mosque:',
        'Toit en dôme',
        'Minaret'
    ],
    '🛕': [
        'Temple hindou',
        ':hindu_temple:'
    ],
    '🕍': [
        'Synagogue',
        ':synagogue:',
        'Juif',
        'Synagog',
        'Temple'
    ],
    '⛩️': [
        'Sanctuaire du Shinto',
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
        'Parapluie au sol',
        ':beach_umbrella:',
        'Parapluie de plage'
    ],
    '🌄': [
        'Lever du soleil sur les montagnes',
        ':sunrise_over_mountains:',
        'Matin',
        'Lever du soleil'
    ],
    '🌅': [
        'Lever du soleil',
        ':sunrise:',
        ':sunset:',
        'Coucher du soleil'
    ],
    '🌆': [
        'Paysage urbain au crépuscule',
        ':cityscape_at_dusk:',
        'Ciel Orange',
        'Ville crépusculaire'
    ],
    '🌇': [
        'Bâtiments du coucher du soleil',
        ':sunset_over_buildings:',
        'Coucher du soleil de la ville'
    ],
    '🌃': [
        'Nuit avec étoiles',
        ':night_with_stars:',
        'Ville la nuit',
        'Nuit Étoilée'
    ],
    '🗿': [
        'Moai',
        ':moai:',
        'Statue de l\'île de Pâques',
        'Gravure de Roche Humaine',
        'Statue Moyai'
    ],
    '🌠': [
        'Étoile de tir',
        ':shooting_star:',
        'Quand vous souhaitez dans une étoile',
        'Météoroïde'
    ],
    '🌌': [
        'Voie lactée',
        ':milky_way:',
        'Galaxie',
        'Ciel de la nuit',
        'Espace libre',
        'Étoiles',
        'Univers'
    ],
    '🎑': [
        'Cérémonie d\'observation de la lune',
        ':moon_viewing_ceremony:',
        'Herbe, Beignets et Lune',
        'Récolter la Lune',
        'Fête de la Lune',
        'Tsukimi'
    ],
    '🛖': [
        'Cabane',
        ':hut:'
    ],
    '🎢': [
        'Coastre Roll-up',
        ':roller_coaster:',
        'Rollercoaster',
        'Parc d\'attractions'
    ],
    '🛝': [
        'Diapositive de terrain de jeu',
        ':playground_slide:',
        'Bébé',
        'Enfants'
    ]
};
/*technologies (smartphones, laptops, etc.) and office*/
emojis_language[lang][10] = {
    '⌚': [
        'Regarder',
        ':watch:',
        'Feuille de temps',
        'Montre Pomme'
    ],
    '⏰': [
        'Horloge alarme',
        ':alarm_clock:'
    ],
    '⏱️': [
        'Chronomètre',
        ':stopwatch:'
    ],
    '⏲️': [
        'Horloge de minuterie',
        ':timer_clock:'
    ],
    '🕰️': [
        'Horloge de Mantelpiece',
        ':mantelpiece_clock:'
    ],
    '🧭': [
        'Boussole',
        ':compass:'
    ],
    '🕹️': [
        'Joystick',
        ':joystick:'
    ],
    '🎙️': [
        'Microphone Studio',
        ':studio_microphone:'
    ],
    '🎚️': [
        'Curseur de niveau',
        ':level_slider:'
    ],
    '🎛️': [
        'Contrôler les Knobs',
        ':control_knobs:'
    ],
    '📻': [
        'Radio',
        ':radio:',
        'Radio numérique',
        'Sans-fil'
    ],
    '📱': [
        'Téléphone mobile',
        ':mobile_phone:',
        'Téléphone intelligent',
        'iPhone',
        'Téléphone cellulaire'
    ],
    '📲': [
        'Téléphone mobile avec Flèche droite à gauche',
        ':phone_call:',
        'Appel téléphonique',
        'Pointer vers le téléphone'
    ],
    '☎️': [
        'Téléphone noir',
        ':rotary_phone:',
        'Téléphone Rotatif',
        ':red:'
    ],
    '📞': [
        'Récepteur de téléphone',
        ':phone:',
        'Handset',
        'Téléphone',
        ':black:'
    ],
    '📟': [
        'Téléavertisseur',
        ':pager:',
        'Beeper',
        'Bleeper'
    ],
    '📠': [
        'Télécopieur',
        ':fax_machine:',
        'Facsimile',
        'Fax'
    ],
    '🔋': [
        'Batterie',
        ':battery:',
        'Batterie AA',
        'Batterie du téléphone'
    ],
    '🔌': [
        'Prise électrique',
        ':power_cable:',
        'AC Adaptor',
        'Câble d\'alimentation',
        'Prise d\'alimentation'
    ],
    '💻': [
        'Ordinateur portable',
        ':laptop:',
        'Carnet',
        'Ordinateur personnel',
        'Pc',
        'MacBook',
        'Surface'
    ],
    '🖥️': [
        'Ordinateur de bureau',
        ':desktop_computer:',
        'iMac',
        'Pc'
    ],
    '🖨️': [
        'Imprimante',
        ':printer:'
    ],
    '⌨️': [
        'Keyboard',
        ':keyboard:'
    ],
    '🖱️': [
        'Souris de l\'ordinateur',
        ':computer_mouse:',
        'Souris à trois boutons'
    ],
    '🖲️': [
        'Balle de Trackball',
        ':trackball:'
    ],
    '💽': [
        'Disque de l\'ordinateur',
        ':blu_ray:',
        'Minidisc',
        'CD',
        'Dvd',
        'Blu-ray',
        'BD'
    ],
    '💾': [
        'Disquette',
        ':floppy_disk:',
        'Disque de 3,5′′',
        'Disque'
    ],
    '💿': [
        'Disque optique',
        ':cd:',
        'CD',
        'CD-ROM',
        'Disque compact'
    ],
    '📀': [
        'Dvd',
        'DVD-ROM',
        ':dvd:',
        'Vidéo DVD'
    ],
    '🎥': [
        'Caméra de film',
        ':movie_camera:',
        'Caméra de film',
        'Hollywood',
        'Films'
    ],
    '🎞️': [
        'Cadres de film',
        ':film_frames:'
    ],
    '📽️': [
        'Projecteur de film',
        ':film_projector:'
    ],
    '📺': [
        'Télévision',
        ':tv:',
        'Télévision'
    ],
    '📷': [
        'Appareil photo numérique',
        ':digital_camera:'
    ],
    '📸': [
        'Caméra avec Flash',
        ':camera_flash:'
    ],
    '📹': [
        'Caméra Vidéo',
        ':video_camera:',
        'Caméra'
    ],
    '📼': [
        'Vidéocassette',
        ':vhs:',
        'VHS',
        'VCR',
        'Bande vidéo',
        'Vidéocassette'
    ],
    '💳': [
        'Carte de Crédit',
        ':credit_card:',
        'Carte de débit',
        'AMEX',
        'Diners Club',
        'American Express',
        'Mastercard',
        'Carte VISA'
    ],
    '📧': [
        'Courriel',
        ':email:',
        'Courriel'
    ],
    '📨': [
        'Enveloppe Entrante',
        ':incoming_envelope:',
        'Enveloppe avec des lignes',
        'Enveloppe rapide'
    ],
    '📩': [
        'Enveloppe avec Flèche vers le bas ci-dessus',
        ':insert_in_envelope:',
        'Enveloppe de la flèche vers le bas',
        'Insérer dans l\'Enveloppe'
    ],
    '📤': [
        'Boîte de réception',
        ':outbox_tray:'
    ],
    '📥': [
        'Boîte de réception',
        ':inbox_tray:'
    ],
    '📮': [
        'Boîte aux lettres',
        ':postbox:'
    ],
    '📁': [
        'Dossier de fichier',
        ':file_folder:',
        'Répertoire',
        'Répertoire',
        'Dossier de fichiers fermés'
    ],
    '📂': [
        'Ouvrir le dossier de fichier',
        ':open_file_folder:',
        'Répertoire'
    ],
    '🗂️': [
        'Diviseurs d\'indices de cartes',
        ':card_index_dividers:'
    ],
    '📅': [
        'Calendrier',
        ':calendar:',
        '17 Juillet',
        'Journée mondiale de l\'émoji'
    ],
    '🗓️': [
        'Pad du calendrier en spirale',
        ':spiral_calendar_pad:'
    ],
    '📆': [
        'Calendrier de déchirage',
        ':day_calendar:',
        'Calendrier du jour',
        'Calendrier de bureau'
    ],
    '📈': [
        'Augmentation du graphique',
        ':increasing_chart:',
        'Graphique positif',
        'Graphique pointant vers le haut',
        'Graphique avec tendance vers le haut'
    ],
    '📉': [
        'Diminution de la carte',
        ':decreasing_chart:',
        'Graphique négatif',
        'Graphique de pointe vers le bas',
        'Graphique avec tendance vers le bas'
    ],
    '📊': [
        'Graphique à barres',
        ':bar_chart:',
        'Graphique à barres'
    ],
    '📌': [
        'Pushpin',
        ':pushpin:',
        'Thumb Tack',
        ':red:'
    ],
    '📋': [
        'Presse-papiers',
        ':clipboard:'
    ],
    '📍': [
        'Pushpin rond',
        ':round_pushpin:',
        'Épingle abandonnée',
        'Épingle de la carte',
        'Épingler',
        'Épingle rouge',
        ':red:'
    ],
    '📎': [
        'Paperclip',
        ':paperclip:',
        'Clippy'
    ],
    '📏': [
        'Règle Droite',
        ':straight_ruler:'
    ],
    '📐': [
        'Règle triangulaire',
        ':triangular_ruler:',
        'Règle du Triangle'
    ],
    '✂️': [
        'Scissors',
        ':scissors:',
        'Couper'
    ],
    '✏️': [
        'Crayon',
        ':pencil:',
        'Crayon de plomb'
    ],
    '✒️': [
        'Nib noir',
        ':black_nib:',
        'Stylo Nib',
        'Fontaine de stylo'
    ],
    '🖋️': [
        'Fontaine de stylo',
        ':fountain_pen:',
        'Fontaine Gauche Bas'
    ],
    '🖊️': [
        'Stylo',
        ':pen:',
        'Stylo à bille gauche inférieur',
        'Stylo à bille'
    ],
    '🖌️': [
        'Pinceau',
        ':paintbrush:',
        'Brosse',
        'Pinceau inférieur gauche'
    ],
    '🖍️': [
        'Crayon',
        ':crayon:',
        'Ecrayon inférieur gauche'
    ],
    '📝': [
        'Mémo',
        ':memo:',
        'Memorandum',
        'Note',
        'Crayon et Papier'
    ],
    '🗑️': [
        'Panier en papier usé',
        ':wastepaper_basket:',
        'Boîte à ordures',
        'Corbeille',
        'Poubelle'
    ],
    '📡': [
        'Antenne satellite',
        ':satellite_antenna:'
    ],
    '🔭': [
        'Télescope',
        ':telescope:',
        'Stargazing'
    ],
    '🔬': [
        'Microscope',
        ':microscope:',
        'Magnify',
        'La science'
    ],
    '📭': [
        'Ouvrir la boîte aux lettres avec un drapeau réduit',
        ':open_mailbox_lowered:'
    ],
    '📬': [
        'Ouvrir la boîte aux lettres avec un drapeau élevé',
        ':open_mailbox_raised:',
        'Ouvrir la boîte aux lettres'
    ],
    '📪': [
        'Boîte aux lettres fermée avec drapeau réduit',
        ':closed_mailbox_lowered:'
    ],
    '📫': [
        'Boîte aux lettres fermée avec drapeau élevé',
        ':closed_mailbox_raised:'
    ],
    '📰': [
        'Journaux',
        ':newspaper:'
    ],
    '🗞️': [
        'Journal de décollage',
        ':rolled_up_newspaper:',
        'Livraison des journaux'
    ],
    '📄': [
        'Page face vers le haut',
        ':printed_page:',
        'Page imprimée'
    ],
    '📜': [
        'Défilement',
        ':scroll:',
        'Diplôme',
        'Parchment'
    ],
    '📃': [
        'Page avec Curl',
        ':curled_page:',
        'Curled Page',
        'Curly Page'
    ],
    '📓': [
        'Carnet',
        ':notebook:',
        'Livre noir et blanc'
    ],
    '📔': [
        'Bloc-notes avec couverture décorative',
        ':notebook_decorative_cover:'
    ],
    '📕': [
        'Livre fermé',
        ':closed_book:',
        'Livre Rouge',
        'Manuel rouge',
        ':red:'
    ],
    '📖': [
        'Livre Ouvert',
        ':open_book:',
        'Réserver',
        'Révélation'
    ],
    '📗': [
        'Livre vert',
        ':green_book:',
        'Manuel vert',
        ':green:'
    ],
    '📘': [
        'Livre Bleu',
        ':blue_book:',
        'Manuel bleu',
        ':blue:'
    ],
    '📙': [
        'Livre orange',
        ':orange_book:',
        'Manuel orange',
        ':orange:'
    ],
    '📚': [
        'Livres',
        ':books:',
        'Tas de Livres',
        'Pile de livres'
    ],
    '🗳️': [
        'Boîte aux urnes avec feuille',
        ':ballot_box:',
        'Boîte aux votes',
        'Vote'
    ],
    '🗄️': [
        'Cabinet de dossier',
        ':file_cabinet:',
        'Cabinet de dépôt'
    ],
    '🗃️': [
        'Boîte de fichiers de carte',
        ':card_file_box:'
    ],
    '🖇️': [
        'Clips de papier liés',
        ':linked_paperclips:',
        ':gray:',
        ':grey:'
    ]
};
/*clothes and accessories*/
emojis_language[lang][11] = {
    '👣': [
        'Empreintes',
        ':footprints:',
        'Pieds',
        'Étapes'
    ],
    '👓': [
        'Lunettes',
        ':glasses:',
        'Eveyglasses'
    ],
    '🕶️': [
        'Lunettes de soleil',
        ':sunglasses:'
    ],
    '🥽': [
        'Lunettes',
        ':goggles:'
    ],
    '🥼': [
        'Manteau de laboratoire',
        ':lab_coat:'
    ],
    '👔': [
        'Necktie',
        ':necktie:',
        'Chemise de commerce',
        'Chemise et cravate'
    ],
    '👕': [
        'T-shirt',
        ':t_shirt:',
        ':t-shirt:',
        'Chemise en tee',
        'Polo chemise'
    ],
    '👖': [
        'Jeans',
        ':jeans:',
        'Denim',
        'Pantalon',
        'Pantalon'
    ],
    '🧣': [
        'Scarf',
        ':scarf:'
    ],
    '🧤': [
        'Gants',
        ':gloves:'
    ],
    '🧥': [
        'Manteau',
        ':coat:'
    ],
    '🧦': [
        'Socks',
        ':socks:'
    ],
    '👗': [
        'Robe',
        ':dress:',
        'Jupe',
        'Toile'
    ],
    '👘': [
        'Kimono',
        ':kimono:',
        'Toge de toilette',
        'Robe japonaise'
    ],
    '👙': [
        'Bikini',
        ':bikini:',
        'Baigneurs',
        'Costume de bain'
    ],
    '🩱': [
        'Costume de bain en une pièce',
        '1 maillot de bain',
        'maillot de bain'
    ],
    '👚': [
        'Vêtements pour femmes',
        ':womans_clothes:',
        'Vêtements pour femmes',
        'Blouse',
        'Chemise rose',
        'Blouse'
    ],
    '👛': [
        'Porte-monnaie',
        ':purse:',
        'Portefeuille'
    ],
    '👜': [
        'Sac à main',
        ':handbag:'
    ],
    '👝': [
        'Sac d\'embrayage',
        ':clutch_bag:',
        'Embrayage',
        'Petit sac',
        'Pouch'
    ],
    '🎒': [
        'Sac à dos',
        ':backpack:',
        'Sac',
        'Sac d\'école',
        'Sacoche de l\'école',
        'Rucksack'
    ],
    '👞': [
        'Mans Shoe',
        ':mans_shoe:',
        'Mans Shoe',
        'Chaussure',
        'Show marron',
        'Série de costumes'
    ],
    '👟': [
        'Chaussure athlétique',
        ':athletic_shoe:',
        'Chaussure de Course',
        'Sneaker',
        'Coureur',
        'Entraîneur',
        'Chaussure de tennis'
    ],
    '🥾': [
        'Botte de randonnée',
        ':hiking_boot:'
    ],
    '🥿': [
        'Chaussure plate',
        ':flat_shoe:'
    ],
    '👠': [
        'Chaussure à haut talon',
        ':high_heeled_shoe:',
        ':high_heel:',
        'Stiletto',
        'talons hauts'
    ],
    '👡': [
        'Sandale féminine',
        ':womans_sandal:',
        'Sandale féminine',
        'Sandale à talon',
        'Sandales',
        'Sandal'
    ],
    '👢': [
        'Bottes pour femmes',
        ':womans_boots_',
        'Bottes pour femmes',
        'Bottes de Cowgirl',
        'Bottes hautes du genou',
        'Bottes à talon'
    ],
    '👑': [
        'Couronne',
        ':crown:',
        'Roi',
        'Reine',
        'Prince',
        'Royal',
        'Princesse',
        ':gold:',
        ':yellow:'
    ],
    '👒': [
        'Chapeau',
        ':hat:',
        'Chapeau Femme',
        'Chapeau avec arc',
        'Chapeau de dames'
    ],
    '🎩': [
        'Chapeau Haut',
        ':top_hat:',
        'Veste formelle',
        'Groom',
        ':black:'
    ],
    '🎓': [
        'Casquette de Graduation',
        ':graduation_cap:',
        'Ecole',
        'Diplômé',
        'Tableau de mortiers',
        'Université',
        'Casquette académique carrée',
        ':black:'
    ],
    '🧢': [
        'Casquette Facturée',
        ':billed_cap:',
        'Casquette de baseball'
    ],
    '⛑️': [
        'Casque avec Croix Blanche',
        ':helmet_with_white_cross:',
        ':helmet_with_cross:',
        ':rescue_worker_helmet:',
        ':rescue_workers_helmet:',
        'Casque de sauvetage des employés',
        ':red:',
        ':white:'
    ],
    '💼': [
        'Porte-documents',
        ':briefcase:',
        'Suitcase'
    ],
    '🎖️': [
        'Médaille Militaire',
        ':military_medal:',
        ':medal:',
        'Médaille',
        'Médaillon',
        'Décoration Militaire'
    ],
    '📿': [
        'Perles de prière',
        ':prayer_beads:',
        'Perles de Dhikr',
        'Perles Rosaires'
    ],
    '🎗️': [
        'Rappel Ribbo',
        ':reminder_ribbo:'
    ],
    '🤿': [
        'Masque de plongée',
        ':diving_mask:'
    ],
    '🦺': [
        'Gilet de sécurité',
        ':safety_vest:'
    ],
    '🥻': [
        'Sari',
        ':sari:',
        'Saree',
        'Shari'
    ],
    '🩲': [
        'Briques',
        ':briefs:'
    ],
    '🩳': [
        'Shorts',
        ':shorts:'
    ],
    '🛼': [
        'Patinage à Roulettes',
        ':roller_skate:',
        'Patinage en ligne',
        'Derby à rouleau'
    ],
    '🩴': [
        'Retourner le flop',
        ':flip_flop:',
        'Sandale Thong'
    ],
    '🪖': [
        'Casque militaire',
        ':military_helmet:'
    ],
    '🩰': [
        'Chaussures à Ballet',
        ':ballet_shoes:',
        'Chaussure de Pointe'
    ],
    '🩼': [
        'Crutch',
        ':crutch:'
    ]
};
/*hands and parts of body*/
emojis_language[lang][12] = {
    '👋{{skin_tone}}': [
        'Panneau à mains agaçantes',
        ':wave:',
        ':waving_hand:',
        'Au revoir',
        'Vague à la main',
        'Bonjour',
        'Hi'
    ],
    '🖐️{{skin_tone}}': [
        'Livrez avec les doigts en rafale',
        ':hand_splayed:',
        ':raised_hand_with_fingers_splayed:',
        ':hand_with_fingers_splayed:',
        'Cinq mains',
        'Coupé à la main',
        'Main levée avec doigts en rafale'
    ],
    '🤚{{skin_tone}}': [
        'Décollage de la main',
        ':raised_back_of_hand:',
        ':back_of_hand:',
        'Retour arrière'
    ],
    '✋{{skin_tone}}': [
        'Main levée',
        ':raised_hand:',
        ':hand:',
        'Haut Cinq',
        'Arrêter'
    ],
    '🖖{{skin_tone}}': [
        'Vulcan Salute',
        ':vulcan_salute:',
        'Spock',
        'Trek des étoiles',
        'Main levée avec une partie entre le milieu et les doigts de l\'anneau'
    ],
    '👌{{skin_tone}}': [
        'Panneau OK',
        ':ok_hand:',
        'Ok',
        'Parfait',
        'Oui'
    ],
    '✌️{{skin_tone}}': [
        'Main de Victoire',
        ':victory_hand:',
        'Devis de l\'air',
        'Panneau de Paix',
        'Panneau V'
    ],
    '🤞{{skin_tone}}': [
        'Doigts croisés',
        ':crossed_fingers:',
        'Doigts croisés',
        'Bonne chance',
        'Livrez avec l\'index et les doigts du milieu croisés'
    ],
    '🤟{{skin_tone}}': [
        'Geste d\'amour-vous',
        ':love_you_gesture:',
        ':i_love_you_hand_sign:',
        'Signe de la main Je t\'aime'
    ],
    '🤘{{skin_tone}}': [
        'Signe des cornes',
        ':the_horns:',
        ':sign_of_the_horns:',
        ':metal:',
        'Doigts du Diable',
        'Métal lourd',
        'Roche activée'
    ],
    '🤙{{skin_tone}}': [
        'Appelez-moi Signe à la main',
        ':call_me_hand:',
        ':call_me:',
        'Main de téléphone',
        'Shaka'
    ],
    '🤏{{skin_tone}}': [
        'Pincement à la main',
        ':pinching_hand:'
    ],
    '👈{{skin_tone}}': [
        'Indice de l\'index arrière à gauche',
        ':backhand_index_pointing_left:',
        ':point_left:',
        'Index du dos du pointeur gauche blanc'
    ],
    '👉{{skin_tone}}': [
        'Indice de pointage du dos à droite',
        ':backhand_index_pointing_right:',
        ':point_right:',
        'Index du dos de la pointe blanche à droite'
    ],
    '👆{{skin_tone}}': [
        'Indice de pointage vers le haut de l\'index',
        ':point_up_2:',
        ':backhand_index_pointing_up:',
        'Index du dos pointant le White Up',
        'Doigt du milieu'
    ],
    '👇{{skin_tone}}': [
        'Indice de pointage arrière vers le bas',
        ':point_down:',
        ':backhand_index_pointing_down:',
        'Index du dos du point blanc vers le bas',
        'Pointant vers le bas'
    ],
    '☝{{skin_tone}}': [
        'Indice de pointage vers le haut',
        ':point_up:',
        ':index_pointing_up:',
        'Index de pointage de White Up',
        'Secrète'
    ],
    '🖕{{skin_tone}}': [
        'Doigt du milieu',
        ':middle_finger:',
        'Retourner l\'oiseau',
        'Doigt Rude',
        'Main inversée avec le poignet moyen étendu'
    ],
    '👍{{skin_tone}}': [
        'Signe de pouce vers le haut',
        ':thumbs_up_sign:',
        'J\'aime',
        'Oui'
    ],
    '👎{{skin_tone}}': [
        'Panneau des vignettes vers le bas',
        ':thumbs_down_sign:',
        'Mauvais',
        'Dislike',
        'Non'
    ],
    '✊{{skin_tone}}': [
        'Poing élevé',
        ':raised_fist:',
        'Pompe de poing'
    ],
    '👊{{skin_tone}}': [
        'Poing à venir',
        ':oncoming_fist:',
        'Bro Fist',
        'Brofist',
        'Bump du poing',
        'Frappe',
        'Poing fermé',
        'Panneau Poing Poing'
    ],
    '🤛{{skin_tone}}': [
        'Bump du poing gauche',
        ':left_fist_bump:'
    ],
    '🤜{{skin_tone}}': [
        'Bump du poing droit',
        ':right_fist:bump:'
    ],
    '🤌{{skin_tone}}': [
        'Doigts pinçés',
        ':pinched_fingers:',
        'Ma Che Vuoi',
        'Doigts'
    ],
    '👏{{skin_tone}}': [
        'Embrasement du panneau des mains',
        ':cap:',
        ':clapping_hands:',
        'Applaudissements',
        'Clap',
        'Clapage',
        'Clapet de golf',
        'Cycle des applaudissements'
    ],
    '🙌{{skin_tone}}': [
        'Lever les deux mains en célébration',
        ':raised_hands:',
        ':raising_hands:',
        'Lever les mains',
        'Armes dans l\'air',
        'Banzai',
        'Miracle du Festival',
        'Hallelujah',
        'Mains louées',
        'Deux mains'
    ],
    '👐{{skin_tone}}': [
        'Ouvrir le panneau des mains',
        ':open_hands_sign:',
        'Câlin',
        'Mains de Jazz'
    ],
    '🤲{{skin_tone}}': [
        'Palmiers ensemble',
        ':palms_up_together:',
        'Dua'
    ],
    '🤝{{skin_tone}}': [
        'Handshake',
        ':handshake:',
        'Secouement des mains'
    ],
    '🙏{{skin_tone}}': [
        'Mains pliées',
        ':folded_hands:',
        'Namaste',
        'S\'il vous plaît',
        'Prière',
        'Merci',
        'Personne avec les mains pliées'
    ],
    '✍{{skin_tone}}': [
        'Main d\'écriture',
        ':writing_hand:'
    ],
    '🫱{{skin_tone}}': [
        'Main droite',
        ':rightwards_hand:'
    ],
    '🫲{{skin_tone}}': [
        'Main gauche',
        ':leftwards_hand:'
    ],
    '🫳{{skin_tone}}': [
        'Main de la paume',
        ':palm_down_hand:'
    ],
    '🫴{{skin_tone}}': [
        'Main paume vers le haut',
        ':palm_up_hand:'
    ],
    '🫰{{skin_tone}}': [
        'Livrez avec le doigt d\'index et le pouce croisé',
        ':hand_with_index_finger_and_thumb_crossed:'
    ],
    '🫵{{skin_tone}}': [
        'Indexer le pointage à la visionneuse',
        ':index_pointing_at_the_viewer:'
    ],
    '🫶{{skin_tone}}': [
        'Mains de cœur',
        ':heart_hands:',
        'Amour'
    ],
    '💪{{skin_tone}}': [
        'Biceps Flexed',
        ':flexed_biceps:',
        'Muscles des bras flexibles',
        'Musle',
        'Forte'
    ],
    '🦵{{skin_tone}}': [
        'Jambe',
        ':leg:'
    ],
    '🦶{{skin_tone}}': [
        'Pied',
        ':foot:'
    ],
    '👂{{skin_tone}}': [
        'Oreille',
        ':ear:',
        'Oreilles',
        'Audience',
        'Écoute'
    ],
    '👃{{skin_tone}}': [
        'Nez',
        ':nose:',
        'Imbriquer',
        'Sniffage',
        'Stinky'
    ],
    '🦻{{skin_tone}}': [
        'Oreille avec aide auditive',
        ':ear_with_hearing_aid:'
    ],
    '🧠': [
        'Cerveau',
        ':brain:',
        ':pink:'
    ],
    '🦷': [
        'Dent',
        ':tooth:',
        ':white:'
    ],
    '👀': [
        'Yeux',
        ':eyes:',
        'Boules d\'yeux',
        'Yeux bouleversants',
        'Yeux sages'
    ],
    '👁️': [
        'Oeil',
        ':eye:',
        'Œil unique'
    ],
    '👅': [
        'Sortie de la langue',
        ':tongue_out:',
        ':red:'
    ],
    '👄': [
        'Bouche',
        ':mouth:',
        'Lèvres embrassantes',
        'Lèvres',
        ':red:'
    ],
    '🫦': [
        'lèvres mordantes',
        ':biting_lip:',
        'Lèvres',
        ':red:'
    ],
    '🫀': [
        'Cœur anatomique',
        ':anatomical_heart:',
        ':red:'
    ],
    '🫁': [
        'Poumons',
        ':lungs:',
        ':red:'
    ],
    '🦾': [
        'Bras mécanique',
        ':mechanical_arm:',
        'Forte',
        ':gray:',
        ':grey:'
    ],
    '🦿': [
        'Jambe mécanique',
        ':mechanical_leg:',
        ':gray:',
        ':grey:'
    ],
    '💅{{skin_tone}}': [
        'Pointe polonaise',
        ':nail_polish:',
        'Doigts',
        'Manicure',
        'Nonchalant'
    ],
    '🤳{{skin_tone}}': [
        'Selfie',
        ':selfie:',
        'Caméra du téléphone',
        'Main de Selfie'
    ]
};
/*other*/
emojis_language[lang][13] = {
    '💩': [
        'Tas de Poo',
        ':pile_of_poo:',
        'Terre de chien',
        'Crotte souriante',
        ':brown:'
    ],
    '💋': [
        'Marque Baiser',
        ':kiss_mark:',
        'Lèvres embrassantes',
        ':red:'
    ],
    '🦴': [
        'Os',
        ':bone:'
    ],
    '🧳': [
        'Bagages',
        ':luggage:',
        'Suitcase'
    ],
    '🌂': [
        'Parapluie fermé',
        ':closed_umbrella:',
        'Parapluie réduit',
        'Parapluie rose',
        ':pink:',
        ':purple:'
    ],
    '☂️': [
        'Parapluie',
        ':umbrella:',
        ':purple:'
    ],
    '☔': [
        'Parapluie avec gouttes de pluie',
        ':umbrella_with_rain_drops:',
        ':umbrella:',
        'Pluie',
        'Rainy'
    ],
    '🧵': [
        'Slot de fil de discussion',
        ':spool_of_thread:'
    ],
    '🧶': [
        'Balle de Yarn',
        ':ball_of_yarn:'
    ],
    '💄': [
        'Lipstick',
        ':lipstick:',
        'Glose des lèvres',
        'Maquillage',
        ':red:'
    ],
    '💍': [
        'Sonnerie',
        ':ring:',
        'Bague en Diamant',
        'Bague d\'engagement'
    ],
    '💎': [
        'Gemme',
        ':gem_stone:',
        'Diamant',
        'Gemme',
        'Gemme',
        'Bijoux',
        ':blue:'
    ],
    '💥': [
        'Symbole de collision',
        ':collision_symbol:',
        'Bang',
        'Éclater',
        'Impact',
        'Étincelle rouge',
        'Explosion'
    ],
    '💫': [
        'Symbole étourdissant',
        ':dizzy_symbol:',
        'Cercle et étoile',
        ':yellow:'
    ],
    '💦': [
        'Symbole de la sueur éclaboussante',
        'format@@0 sweat_drops',
        'format@@0 sweat_droplets',
        'Pleins d\'appâts',
        'Éclaboussure d\'eau',
        'Gouttes d\'eau',
        ':blue:'
    ],
    '💨': [
        'Absent',
        ':dashing_away:',
        'Rapide',
        'Vapeur',
        'Vaporisation',
        'Vent',
        'Symbole du tableau de bord',
        'Rafale de vent'
    ],
    '🌬️': [
        'Visage du vent',
        ':wind_face:',
        'Vent soufflant',
        'Nature Mère',
        'Visage soufflant du vent',
        ':white:'
    ],
    '🐾': [
        'Impressions de pattes',
        ':paw_prints:',
        'Impression de pattes de chat',
        'Impression de pattes de chien',
        'Impression de pattes de chats',
        'Impression de pattes de chiot'
    ],
    '🕸️': [
        'Toile d\'araignée',
        ':spider_web:',
        'Toile oblique',
        'Web',
        'Toile d\'araignée'
    ],
    '🦠': [
        'Microbe',
        ':microbe:',
        'Cellule',
        'Coronavirus',
        'COVID-19',
        'Germe',
        'Microorganisme',
        'Virus',
        ':green:'
    ],
    '💐': [
        'Bouquet de fleurs',
        ':bouquet_of_flowers:'
    ],
    '🌍': [
        'Globe montrant Europe-Afrique',
        ':globe_showing_europe_africa:',
        ':earth_africa:',
        'Terre',
        'Globe',
        'Planète',
        'Monde',
        'Globe montrant l\'Europe et l\'Afrique',
        ':blue:'
    ],
    '🌎': [
        'Globe Show Americas',
        ':globe_showing_americas:',
        ':earth_americas:',
        'Terre',
        'Globe',
        'Planète',
        'Monde',
        ':blue:'
    ],
    '🌏': [
        'Globe montrant l\'Asie-Australie',
        ':globe_showing_asia_australia:',
        ':earth_asia:',
        'Terre',
        'Globe',
        'Planète',
        'Monde',
        'Globe montrant l\'Asie et l\'Australie',
        ':blue:'
    ],
    '🌐': [
        'Globe avec Meridians',
        ':globe_with_meridians:',
        'Internet',
        'World Wide Web',
        'WWW'
    ],
    '🌑': [
        'Nouveau symbole de lune',
        ':new_moon:',
        'Lune Sombre',
        'Lune des ombres',
        'Éclipse solaire',
        ':black:'
    ],
    '🌒': [
        'Symbole de lune du Croissant de Lune',
        ':waxing_crescent_moon:',
        ':yellow:',
        ':black:'
    ],
    '🌓': [
        'Symbole du premier quart de lune',
        ':first_quarter_moon:',
        ':yellow:',
        ':black:'
    ],
    '🌔': [
        'Symbole de la lune Gibbeuse cireuse',
        ':moon:',
        ':waxing_gibbous_moon:',
        ':yellow:',
        ':black:'
    ],
    '🌕': [
        'Symbole de la pleine lune',
        ':full_moon:',
        ':yellow:'
    ],
    '🌖': [
        'Symbole de la Lune Gibbous Waning',
        ':waning_gibbous_moon:',
        ':yellow:',
        ':black:'
    ],
    '🌗': [
        'Symbole du dernier quart de lune',
        ':last_quarter_moon:',
        ':yellow:',
        ':black:'
    ],
    '🌘': [
        'Symbole du Croissant de Lune Waning',
        ':waning_crescent_moon:',
        ':yellow:',
        ':black:'
    ],
    '🌙': [
        'Lune du Croissant de Lune',
        ':crescent_moon:',
        ':yellow:'
    ],
    '🌚': [
        'Nouvelle lune avec visage',
        ':new_moon_with_face:',
        'Lune effrayante',
        'Face de la Lune Sombre',
        'Lune de Molester',
        ':black:',
        ':gray:',
        ':grey:'
    ],
    '🌝': [
        'Pleine Lune avec visage',
        ':full_moon_with_face:',
        'Moonface',
        'Émoticône de la Lune',
        'Lune souriante',
        ':yellow:'
    ],
    '🌛': [
        'Premier quart de lune avec visage',
        ':first_quarter_moon_with_face:',
        ':first_quarter_moon_face:',
        ':yellow:'
    ],
    '🌜': [
        'Dernier quart de lune avec visage',
        ':last_quarter_moon_with_face:',
        ':last_quarter_moon_face:',
        ':yellow:'
    ],
    '🌞': [
        'Soleil avec visage',
        ':sun_with_face:',
        'Émoticône du Soleil',
        'Sunface',
        'Soleil souriant',
        ':yellow:'
    ],
    '☀️': [
        'Dim',
        ':sun:',
        'Éclat du soleil',
        ':yellow:'
    ],
    '⭐': [
        'Étoiles',
        ':star:',
        'Étoile blanche moyenne',
        ':yellow:'
    ],
    '🌟': [
        'Étoile rayonnante',
        ':glowing_star:',
        'Étoile brillante',
        ':yellow:'
    ],
    '☁️': [
        'Nuage',
        ':cloud:',
        'Nuageux',
        'Overcast',
        ':white:'
    ],
    '⛅': [
        'Soleil Derrière le nuage',
        ':thunder_cloud_and_rain:',
        ':thunder_cloud_rain:',
        ':cloud_with_lightning_and_rain:',
        ':white:'
    ],
    '⛈️': [
        'Nuage avec foudre et pluie',
        ':thunder_cloud_and_rain:',
        ':thunder_cloud_rain:',
        ':cloud_with_lightning_and_rain:',
        'Nuage de tonnerre et pluie',
        ':white:'
    ],
    '🌤️': [
        'Soleil blanc avec petit nuage',
        ':mostly_sunny:',
        ':sun_behind_small_cloud:',
        ':sun_small_cloud:',
        ':white_sun_small_cloud:',
        ':white_sun_with_small_cloud:',
        ':white:'
    ],
    '🌥️': [
        'Soleil Derrière le grand nuage',
        ':sun_behind_large_cloud:',
        'Soleil blanc Derrière le nuage',
        ':white:'
    ],
    '🌦️': [
        'Le soleil blanc derrière le nuage avec la pluie',
        ':sun_behind_rain_cloud:',
        ':partly_sunny_rain:',
        ':white_sun_rain_cloud:',
        ':white_sun_behind_cloud_with_rain:',
        ':white:'
    ],
    '🌧️': [
        'Nuage avec pluie',
        ':cloud_with_rain:',
        ':white:'
    ],
    '🌨️': [
        'Nuage avec neige',
        ':cloud_with_snow:',
        ':white:'
    ],
    '🌩️': [
        'Nuage avec la foudre',
        ':cloud_with_lightning:',
        ':white:'
    ],
    '🌪️': [
        'Tornade',
        ':tornado:',
        'Nuage avec Tornade'
    ],
    '🌫️': [
        'Fog',
        ':fag:',
        ':white:',
        ':gray:',
        ':grey:'
    ],
    '🌈': [
        'Arc en Ciel',
        ':rainbow:',
        'Fierté Gay',
        'Arc en Ciel Primaire',
        'LGBTQIA+',
        'LGBT+'
    ],
    '❄️': [
        'Flocon de neige',
        ':snowflake:',
        'Neige',
        'Neige',
        ':white:'
    ],
    '🌀': [
        'Cyclone',
        ':cyclone:',
        'Ouragan',
        'Spirale',
        'Tourbillon',
        'Tornade'
    ],
    '⚡': [
        'Panneau à haute tension',
        ':high_voltage_sign:',
        'Éclair',
        'Éclair de tonnerre',
        'Tension élevée'
    ],
    '☃️': [
        'Bonhomme de neige',
        ':snowman:',
        'Bonhomme de neige avec flocons',
        ':white:'
    ],
    '⛄': [
        'Bonhomme de neige sans neige',
        'format@@0 snowman_without_snow',
        ':snowman:',
        'Bonhomme de neige givré',
        'Olaf',
        'Bonhomme de neige',
        ':white:'
    ],
    '☄️': [
        'Comète',
        ':comet:'
    ],
    '🔥': [
        'Feu',
        ':fire:',
        'Flamme',
        'Chaud',
        'Lit',
        'Série instantanée',
        ':red:'
    ],
    '💧': [
        'Droplet',
        ':droplet:',
        'Eau',
        'Goutte d\'eau',
        ':blue:'
    ],
    '✨': [
        'Étincelles',
        ':sparkles:',
        'Paillette',
        'Shiny',
        'Nouveau'
    ],
    '🌊': [
        'Vague d\'eau',
        ':water_wave:',
        'Plage',
        'Vague de l\'océan',
        'La mer',
        ':blue:'
    ],
    '🎄': [
        'Arbre de Noël',
        'arborescence',
        'Noël',
        'Arbre de Noël',
        ':green:'
    ],
    '🎃': [
        'Citrouille-Lanterne',
        'format@@0 jack_o_lantern',
        'Halloween',
        'Citrouille',
        ':orange:'
    ],
    '🌻': [
        'Tournesol',
        ':sunflower:',
        'Fleur jaune',
        ':yellow:'
    ],
    '🌼': [
        'Blossom',
        ':blossom:',
        'Fleur florissante',
        'Daisy',
        'Fleur jaune',
        ':yellow:'
    ],
    '🌷': [
        'Tulip',
        ':tulip:',
        ':pink:'
    ],
    '🌹': [
        'Fleur de rose',
        ':rose_flower:',
        'Rose Rouge',
        ':red:'
    ],
    '☘️': [
        'Pierre de chamane',
        ':shamrock:',
        'Trèfle',
        'Fièvre du trésor',
        ':green:'
    ],
    '🍀': [
        'Trèfle à quatre feuilles',
        ':four_leaf_clover:',
        'Trèfle',
        'L\'Irlande',
        'Chanceux',
        'Fortune',
        ':green:'
    ],
    '🌸': [
        'Cherry Blossom',
        ':cherry_blossom:',
        'Fleur rose',
        'Sakura',
        ':pink:'
    ],
    '💮': [
        'Fleur blanche',
        ':white_flower:',
        'Cherry Blossom',
        'Papier Doly',
        'Tampon bien fait',
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
        'Graine',
        ':seedling:',
        'Printemps',
        'Sprout',
        'Propulsion',
        ':green:'
    ],
    '🌲': [
        'Arbre vert éternel',
        ':evergreen_tree:',
        'Arbre du sapin',
        'Pin',
        ':green:'
    ],
    '🌳': [
        'Arbre décimal',
        ':deciduous_tree:',
        'Arbre arrondi',
        ':green:'
    ],
    '🌴': [
        'Palmier',
        ':palm_tree:',
        'Arbre de noix de coco',
        ':green:'
    ],
    '🎋': [
        'Arbre de Tanabata',
        ':tanabata_tree:',
        'Tanabata',
        'Arbre de vœux'
    ],
    '🎍': [
        'Décoration de pin',
        ':pine_decoration:',
        'Bambou',
        'Kadomatsu',
        'Décoration du Nouvel An'
    ],
    '🌵': [
        'Cactus',
        ':cactus:',
        'Desert',
        ':green:'
    ],
    '🌾': [
        'Feuille de riz',
        ':sheaf_of_rice:',
        'Rogner',
        'Fermeture',
        'Blé',
        'Oreille de riz'
    ],
    '🌿': [
        'Herbe',
        ':herb:',
        'Rogner',
        'Plante',
        ':green:'
    ],
    '🍁': [
        'Feuille d\'érable',
        ':maple_leaf:',
        'Le Canada',
        'Canadien',
        'Érable',
        ':brown:'
    ],
    '🍂': [
        'Feuille tombée',
        ':fallen_leaf:',
        'Feuille d\'automne',
        'Feuilles d\'automne',
        'Feuilles marron',
        'Feuilles d\'automne',
        'Feuilles tombées',
        ':brown:'
    ],
    '🍃': [
        'Feuille flottant dans le vent',
        ':leaf_fluttering_in_wind:',
        ':leaves:',
        'Feuilles Vertes',
        'Printemps',
        ':green:'
    ],
    '🪴': [
        'Plante en pot',
        ':potted_plant:',
        ':green:'
    ],
    '🪸': [
        'Corail',
        ':coral:',
        'Changement climatique'
    ],
    '🪷': [
        'Lotus',
        ':lotus:',
        'Pureté',
        'Beauté',
        'Calme',
        'Sérénité'
    ],
    //"🪻": ["Hyacinth", ":hyacinth:", "Purple flower", ":purple:"],
    //"🫛": ["Pea Pod", ":pea_pod:", ":green:"],
    //"🫚": ["Ginger root", ":ginger:", "Spice", "Flavour", ":brown:"],
    '🔑': [
        'Clés',
        ':key:',
        'Clé d\'Or',
        ':gold:',
        ':yellow:'
    ],
    '🗝️': [
        'Ancienne clé',
        ':old_key:',
        ':brown:'
    ],
    '🔨': [
        'Marteau',
        ':hammer:',
        'Marteau de griffe',
        'Handyman',
        'Outil'
    ],
    '⛏️': [
        'Choisir',
        ':pick:',
        'Pioche'
    ],
    '🪓': [
        'Hache',
        ':axe:',
        'firefighter'
    ],
    '🪚': [
        'Scie de menuiserie',
        ':carpentry_saw:'
    ],
    '🪛': [
        'Tournevis',
        ':screwdriver:'
    ],
    '🪝': [
        'Crochet',
        ':hook:'
    ],
    '🪠': [
        'Plunger',
        ':plunger:'
    ],
    '🪣': [
        'Seau',
        ':bucket:'
    ],
    '🔩': [
        'Écrou et rouleau',
        ':nut_and_bolt:',
        'Bolt',
        'Vis',
        ':gray:',
        ':grey:'
    ],
    '🗜️': [
        'Ramper',
        ':clamp:',
        'Vice-président de la table',
        'WinZip',
        'Compression',
        ':gray:',
        ':grey:'
    ],
    '🔒': [
        'Verrouillé',
        ':locked:',
        'Verrouillage fermé',
        'Verrouillage'
    ],
    '🔓': [
        'Déverrouillé',
        ':unlocked:',
        'Ouvrir le cadenas',
        'Verrouillage Ouvert'
    ],
    '🔏': [
        'Verrouillé avec stylo',
        ':locked_with_pen:',
        'Verrouiller et stylo',
        'Verrouiller avec le stylet Fontaine',
        'Verrouiller avec stylo encre'
    ],
    '🔐': [
        'Verrouillé avec la clé',
        ':locked_with_key:',
        'Verrouillage fermé avec clé'
    ],
    '🗡️': [
        'Dagger',
        ':dagger:',
        'Arme de couteau',
        ':gray:',
        ':grey:'
    ],
    '⚔️': [
        'Épées croisées',
        ':crossed_swords:',
        ':gray:',
        ':grey:'
    ],
    '🔫': [
        'Pistol',
        ':pistol:',
        'Fusil',
        'Revolver',
        'Canon d\'écureuil',
        'Pistolet à eau',
        'Pistolet d\'eau'
    ],
    '🧰': [
        'Boîte à outils',
        ':toolbox:',
        ':red:'
    ],
    '🧲': [
        'Aimant',
        ':magnet:',
        ':red:'
    ],
    '⛓️': [
        'Chaînes',
        ':chains:'
    ],
    '💉': [
        'Syringe',
        ':syringe:',
        'Donation de sang',
        'Test sanguin',
        'Aiguille',
        'Vaccination',
        'blood',
        'sick',
        'ill'
    ],
    '🧬': [
        'ADN',
        ':dna:',
        'ADN double hélix'
    ],
    '🧪': [
        'Tube de test',
        ':test_tube:',
        ':green:'
    ],
    '🛏️': [
        'Lit',
        ':bed:',
        'Chambre à coucher'
    ],
    '🛋️': [
        'Canapé et Lampe',
        ':couch_and_lamp:',
        'Salon',
        'Réglages',
        'Canapé'
    ],
    '🪑': [
        'Chaise',
        ':chair:'
    ],
    '🚪': [
        'Porte',
        ':door:',
        'Chemin de la porte',
        'Porte avant'
    ],
    '🪟': [
        'Fenêtre',
        ':window:'
    ],
    '🪜': [
        'Échelle',
        ':ladder:'
    ],
    '🪞': [
        'Miroir',
        ':mirror:'
    ],
    '🚽': [
        'Toilette',
        ':toilet:',
        'Salle de bains',
        'Loo',
        'Restructuration',
        'Toiles',
        ':white:'
    ],
    '🚿': [
        'Douche',
        ':shower:',
        'Tête de douche',
        ':shower:'
    ],
    '🛁': [
        'Baignoire',
        ':bathtub:',
        'Bain de bulles',
        ':shower:'
    ],
    '🧴': [
        'Bouteille de lotion',
        ':location_bottle:'
    ],
    '🧷': [
        'Épingle de sécurité',
        ':safety_pin:',
        ':gray:',
        ':grey:'
    ],
    '🧺': [
        'Panier',
        ':basket:',
        ':brown:'
    ],
    '🧻': [
        'Rouleau de Papier',
        ':roll_of_paper:',
        'Papier de toilette',
        ':white:'
    ],
    '🧼': [
        'Barre de savon',
        ':bar_of_soap:'
    ],
    '🧽': [
        'Éponge',
        ':sponge:',
        ':yellow:'
    ],
    '🧯': [
        'Extincteur de feu',
        ':fire_extinguisher:',
        ':red:'
    ],
    '🚬': [
        'Cigarette',
        ':cigarette:',
        'Symbole de la fumée'
    ],
    '⚰️': [
        'Cercueil',
        ':coffin:',
        'Casket',
        'Funérailles',
        ':brown:'
    ],
    '⚱️': [
        'Urne funéraire',
        ':funeral_urn:',
        'Vase'
    ],
    '🛡️': [
        'Bouclier',
        ':shield:'
    ],
    '⚙️': [
        'Équipement',
        ':gear:',
        'Réglages',
        'Options',
        ':gray:',
        ':grey:'
    ],
    '⚖️': [
        'Échelle de solde',
        ':balance_scale:',
        'Écailles de la justice'
    ],
    '🔗': [
        'Lier',
        ':link:',
        'Chaîne',
        'Lien hypertexte',
        'Chaîne liée',
        ':gray:',
        ':grey:'
    ],
    '💀': [
        'Crâne',
        ':skull:',
        'Mort',
        'Crâne gris',
        'Squelette',
        ':white:'
    ],
    '☠️': [
        'Crâne et Os de croix',
        ':skull_and_crossbones:',
        ':white:'
    ],
    '🎡': [
        'Roue de Ferris',
        ':ferris_wheel:',
        'Grande roue',
        'Fairgroundl',
        'Roue d’observation'
    ],
    '⛽': [
        'Pompe de carburant',
        'pompe_combustible :',
        'Pétrole',
        'Essence',
        'Gaz',
        ':red:'
    ],
    '🚨': [
        'Voitures de police légères',
        ':rotating_light:',
        ':police_police_car:',
        'Lumière d\'urgence',
        'Lumière clignotante',
        'Siren',
        ':red:'
    ],
    '🚥': [
        'Feu de circulation horizontal',
        ':horizontal_traffic_light:',
        ':green:',
        ':red:',
        ':yellow:',
        ':orange:'
    ],
    '🚦': [
        'Feu de circulation vertical',
        ':vertical_traffic_light:',
        ':green:',
        ':red:',
        ':yellow:',
        ':orange:'
    ],
    '⚓': [
        'Schéma d\'ancrage d\'amirauté',
        ':anchor:',
        'pêcheur'
    ],
    '🚧': [
        'Panneau de construction',
        ':construction_sign:',
        'Panneau rayé noir et jaune',
        ':yellow:',
        ':black:'
    ],
    '🪂': [
        'Parachute',
        ':parachute:'
    ],
    '💺': [
        'Siège',
        ':seat:',
        'Avion de train d\'autobus'
    ],
    '🪐': [
        'Saturne',
        ':saturn:'
    ],
    '🎆': [
        'Feux d\'artifice',
        ':fireworks:',
        'Explosion'
    ],
    '🎇': [
        'Senko Hanabi',
        ':senko_hanabi:',
        'Feu d\'artifice'
    ],
    '💷': [
        'Pound Banknote',
        ':pound:',
        ':pound_banknote:',
        'Note de 20 £',
        'Note de Vingt Quid',
        'Billets de banque avec panneau livre sterling',
        ':purple:'
    ],
    '💶': [
        'Euro Banknote',
        ':euro:',
        ':euro_banknote:',
        'Note de 100 €',
        'Billet de banque avec panneau Euro',
        ':blue:'
    ],
    '💵': [
        'Billets en dollars',
        ':dollar:',
        ':dollar_banknote:',
        'Note $1',
        'Billets de banque avec panneau Dollar',
        'Facture en dollars',
        'Dollar américain',
        ':green:'
    ],
    '💴': [
        'Yen Banknote',
        ':yen:',
        ':yen_banknote:',
        'Note de 1000 yens',
        'Note de Yen',
        'Billet de banque avec panneau Yen',
        ':yellow:'
    ],
    '⛺': [
        'Tente de Camping',
        ':camping_tent:'
    ],
    '⛲': [
        'Fontaine',
        ':fountain:',
        'Fonctionnalité de l\'eau',
        'Fontaine d\'eau',
        'Stationner'
    ],
    '💰': [
        'Porte-monnaie',
        ':money_bag:',
        'Sacs d\'argent',
        'Riche',
        '$'
    ],
    '💸': [
        'Argent avec des Ailes',
        ':money_with_wings:',
        'Argent Volant',
        ' Perdre de l\'argent'
    ],
    '🏷️': [
        'Étiquette',
        ':label_tag:'
    ],
    '🔖': [
        'Marque-page',
        ':bookmark:',
        'Tags de prix',
        'Étiquette'
    ],
    '📑': [
        'Onglets de signet',
        ':bookmark_tabs:',
        ':white:'
    ],
    '📯': [
        'Corne postale',
        ':postal_horn:',
        'Bugle',
        'Corne française'
    ],
    '🪁': [
        'Cerf-volant',
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
        'Popper de fête',
        ':party_popper:',
        'Célébration',
        'Chapeau de fête'
    ],
    '🎈': [
        'Ballon',
        ':balloon:',
        'Soirée',
        'Ballon rouge',
        ':red:'
    ],
    '🌡️': [
        'Thermomètre',
        ':thermometer:',
        'Météo chaude',
        'Température',
        ':red:'
    ],
    '🛢️': [
        'Tambour de pétrole',
        ':oil_drum:'
    ],
    '💣': [
        'Bombe',
        ':bomb:',
        'boom'
    ],
    '🔪': [
        'Couteau de cuisine',
        ':kitchen_knife:',
        'Couteau',
        'Couteau de boucher',
        'Hocho'
    ],
    '🏺': [
        'Amphora',
        ':amphora:',
        'Jar',
        'Vase'
    ],
    '🗺️': [
        'Carte du Monde',
        ':world_map:'
    ],
    '🎼': [
        'Score musical',
        ':musical_score:',
        'Partitions musicales',
        'Treble Clef'
    ],
    '🎬': [
        'Planche de clappe',
        ':clapper_board:',
        'Couper',
        'Action',
        'Directeur',
        'Ardoise de film'
    ],
    '🎻': [
        'Violon',
        ':violin:',
        'Quatuor à cordes',
        'Violon le plus petit du monde'
    ],
    '🎺': [
        'Trumpet',
        ':trumpet:',
        'Corne',
        'Jazz.'
    ],
    '🎸': [
        'Guitare',
        ':guitar:',
        'Guitare acoustique',
        'Guitare basses',
        'Guitare électrique'
    ],
    '🎷': [
        'Saxophone',
        ':saxophone:',
        'Jazz.',
        'Sax'
    ],
    '🥁': [
        'Tambour',
        ':drum:',
        'Tambour à bâtonnets'
    ],
    '🎹': [
        'Piano',
        ':piano:',
        'Clavier musical',
        ':white:',
        ':black:'
    ],
    '🪕': [
        'Famille Banjo',
        ':banjo:'
    ],
    '🪗': [
        'Accordéon',
        ':accordion:'
    ],
    '🪘': [
        'Tambour long',
        ':long_drum:'
    ],
    '🎨': [
        'Palette d\'artistes',
        ':artist_palette:',
        'Art',
        'Peinture'
    ],
    '🧩': [
        'Pièce de puzzle',
        ':puzzle_piece:',
        'Pièce de puzzle de scie puzzle',
        ':green:'
    ],
    '🎲': [
        'Mort de jeu',
        ':game_die:',
        'Dés',
        ':white:'
    ],
    '🎭': [
        'Arts de la scène',
        'performance_arts',
        'Théâtre',
        'Théatre',
        'Masques de drame',
        'Masques de théâtre grec',
        'Masques tragiques et comiques',
        'Venise'
    ],
    '🔍': [
        'Agrandissement du verre incliné à gauche',
        ':mag:',
        ':magnifying_glass_tilted_left:',
        'Magnifier',
        'Icône de recherche',
        'Verre Magnifiant à gauche',
        'Chercher',
        ':transparent:'
    ],
    '🔎': [
        'Loupe de verre inclinée à droite',
        ':mag_right:',
        ':magnifying_glass_tilted_right:',
        'Magnifier',
        'Icône de recherche',
        'Verre Magnifiant à pointe droite',
        'Chercher',
        ':transparent:'
    ],
    '⌛': [
        'Verre horaire terminé',
        ':hourglass:',
        ':hourglass_done:',
        'Verre horaire'
    ],
    '⏳': [
        'Verre horaire non fait',
        ':hourglass_flowing_sand:',
        ':hourglass_not_done:',
        'Verre d\'hiver avec sable fluo'
    ],
    '🕐': [
        'Un OClock',
        ':clock1:',
        ':one_oclock:',
        'Verrouillage Horloge Face 1',
        ':gray:',
        ':grey:'
    ],
    '🕜': [
        'Face d\'horloge - Trente',
        ':clock130:',
        ':one_thirty:',
        ':gray:',
        ':grey:'
    ],
    '🕑': [
        'Deux OClock',
        ':clock2:',
        ':two_oclock:',
        'Horloge Face Deux Verrouillage',
        ':gray:',
        ':grey:'
    ],
    '🕝': [
        'Face de l\'horloge deux fois trente',
        ':clock230:',
        ':two_thirty:',
        ':gray:',
        ':grey:'
    ],
    '🕒': [
        'Trois OClock',
        ':clock3:',
        ':three_oclock:',
        'Horloge face trois OClock',
        ':gray:',
        ':grey:'
    ],
    '🕞': [
        'Visage de l\'horloge trois-trente',
        ':clock330:',
        ':three_thirty:',
        ':gray:',
        ':grey:'
    ],
    '🕓': [
        'Quatre OClock',
        ':clock4:',
        ':four_oclock:',
        'Horloge Face Quatre Verrouillage',
        ':gray:',
        ':grey:'
    ],
    '🕟': [
        'Visage de l\'horloge Quatre-trente',
        ':clock430:',
        ':four_thirty:',
        ':gray:',
        ':grey:'
    ],
    '🕔': [
        'Cinq OClock',
        ':clock5:',
        ':five_oclock:',
        'Horloge face à cinq',
        ':gray:',
        ':grey:'
    ],
    '🕠': [
        'Face d\'horloge cinq-trente',
        ':clock530:',
        ':five_thirty:',
        ':gray:',
        ':grey:'
    ],
    '🕕': [
        '6 OClock',
        ':clock6:',
        ':size_oclock:',
        'Horloge Face Six Verrouillage',
        ':gray:',
        ':grey:'
    ],
    '🕡': [
        'Face d\'horloge - Six-Trente',
        ':clock630:',
        ':six_thirty:',
        ':gray:',
        ':grey:'
    ],
    '🕖': [
        'Sept OClock',
        ':clock7:',
        ':seven_oclock:',
        'Horloge Face Seven',
        ':gray:',
        ':grey:'
    ],
    '🕢': [
        'Face d\'horloge Seven-Trente',
        ':clock730:',
        ':sever_thirty:',
        ':gray:',
        ':grey:'
    ],
    '🕗': [
        'Huit OClock',
        ':clock8:',
        ':eight_oclock:',
        'Horloge Face Huit Verrouillage',
        ':gray:',
        ':grey:'
    ],
    '🕣': [
        'Visage de l\'horloge des Huit - Trente',
        ':clock830:',
        ':eight_thirty:',
        ':gray:',
        ':grey:'
    ],
    '🕘': [
        'Neuf OClock',
        ':clock9:',
        ':nine_clock:',
        'Verrouillage Horloge Face Neuf',
        ':gray:',
        ':grey:'
    ],
    '🕤': [
        'Visage de l\'horloge à neuf et trente',
        ':clock930:',
        ':nine_thirty:',
        ':gray:',
        ':grey:'
    ],
    '🕙': [
        'Dix OClock',
        ':clock10:',
        ':ten_oclock:',
        'Verrouillage horloge face 10',
        ':gray:',
        ':grey:'
    ],
    '🕥': [
        'Face de l\'horloge Dix Trente',
        ':clock1030:',
        ':ten_thirty:',
        ':gray:',
        ':grey:'
    ],
    '🕚': [
        'Eleven OClock',
        ':click11:',
        ':eleven_oclock:',
        'Horloge Face Onze',
        ':gray:',
        ':grey:'
    ],
    '🕦': [
        'Face d\'horloge Onze - Trente',
        ':clock1130:',
        ':eleven_thirty:',
        ':gray:',
        ':grey:'
    ],
    '🕛': [
        'Douze OClock',
        ':clock12:',
        ':twelve_oclock:',
        'Horloge face douze verrous',
        ':gray:',
        ':grey:'
    ],
    '🕧': [
        'Face de l\'horloge - Douze - Trente',
        ':clock1230:',
        ':twelve_thirty:',
        ':gray:',
        ':grey:'
    ],
    '♨️': [
        'Sources thermales',
        ':hot_springs:',
        'Onsen',
        'Vapeur',
        ':red:'
    ],
    '💈': [
        'Pôle de Barbier',
        ':barber_pole:',
        'Barbier',
        'Rayures de Barbiers',
        'Coiffeur',
        ':blue:',
        ':red:'
    ],
    '🎪': [
        'Tente de cirque',
        ':circus_tent:',
        'Gros haut',
        'Circus'
    ],
    '💢': [
        'Symbole de colère',
        ':anger_symbol:',
        'Panneau de Colère',
        'Pop de Veine',
        ':red:'
    ],
    '🗯️': [
        'Bulle de Colère Droite',
        ':right_anger_bubble:',
        ':anger_right:',
        'Zig Zag Bubble',
        'Bulle de parole en colère',
        ':white:'
    ],
    '🗨️': [
        'Left Speech Bubble',
        ':left_speech_bubble:',
        ':speech_left:'
    ],
    '💊': [
        'Pill',
        ':pill:',
        'Capsule',
        'Tablette',
        'Médicaments',
        'Sick',
        'ill',
        ':yellow:',
        ':red:'
    ],
    '🎎': [
        'Poupées',
        ':dolls:',
        'Hinamatsuri',
        'Poupées Impériales',
        'Poupées Japonaises'
    ],
    '🎏': [
        'Streamer carpe',
        ':carp_streamer:',
        'Drapeau de poisson',
        'Koinobori',
        'Chaussettes de Vent'
    ],
    '🎐': [
        'Jeton de vent',
        ':wind_chime:',
        'Furin',
        'Méduse',
        'Cloche du vent'
    ],
    '🎀': [
        'Arc en ruban',
        ':ribbon_bow:',
        'Arc rose',
        'Arc',
        ':pink:'
    ],
    '🎁': [
        'Cadeau emballé',
        ':wrapped_gift:',
        'Cadeau d\'anniversaire',
        'Cadeau de Noël',
        'Cadeau',
        'Coffret Cadeau',
        'Présent',
        'Cadeau emballé'
    ],
    '🎫': [
        'Billet',
        ':ticket:',
        'Billet de ticket',
        'Ticket de Tour du Monde'
    ],
    '🃏': [
        'Joker',
        ':joker:',
        'Carte Joker',
        'Carte de jeu Joker Noir'
    ],
    '💡': [
        'Ampoule',
        ':light_bulb:',
        'Idée',
        'Ampoule électrique'
    ],
    '🔦': [
        'Lampe de poche',
        ':flashlight:',
        'Torche',
        'Torche électrique'
    ],
    '🏮': [
        'Lanterne de Papier Rouge',
        ':izakaya_lantern:',
        ':lantern:',
        ':red_paper_lantern:',
        'Lanterne asiatique',
        'Lanterne japonaise',
        'Lanterne rouge',
        'Lanterne d\'Izakaya',
        ':red:'
    ],
    '📦': [
        'Paquet',
        ':package:',
        'Boîte',
        'Colis',
        ':brown:'
    ],
    '📇': [
        'Index de la carte',
        ':card_index:',
        'Rolodex',
        'Carte système',
        'Index de la carte'
    ],
    '🕳️': [
        'Trou',
        ':hole:',
        ':black:'
    ],
    '👁️‍🗨️': [
        'Je suis un témoin',
        ':eye_in_speech_bubble:',
        ':eye_speech_bubble:',
        ':eye-in-speech-bubble:',
        'Bulle de chat Oeil'
    ],
    '⚜️': [
        'Fleur-de-lis',
        ':fleur_de_lis:',
        'Eclaireurs',
        'Saints de la Nouvelle-Orléans'
    ],
    '⚗️': [
        'Alembic',
        ':alembic:'
    ],
    '🕯️': [
        'Bougie',
        ':candle:',
        ':white:'
    ],
    '🖼️': [
        'Image encadrée',
        ':framed_picture:',
        'Peinture',
        'Cadre d\'image',
        'Cadre avec image'
    ],
    '🛍️': [
        'Sacs de vente',
        ':shopping_bags:'
    ],
    '🛒': [
        'Shopping Cart',
        ':shopping_cart:',
        'Shopping Trolley',
        ':shopping_trolley:',
        ':gray:',
        ':grey:'
    ],
    '🎟️': [
        'Billets d\'entrée',
        ':admission_tickets:'
    ],
    '🛎️': [
        'Bellhop Bell',
        ':bellhop_bell:',
        ':yellow:',
        ':gold:'
    ],
    '🧾': [
        'Reçu',
        ':receipt:',
        ':white:'
    ],
    '🧮': [
        'Abacus',
        ':abacus:'
    ],
    '🧫': [
        'Plat de Petri',
        ':petri_dish:'
    ],
    '🧹': [
        'Balai',
        ':broom:',
        'Brosse',
        'Balayage',
        ':yellow:'
    ],
    '🎰': [
        'Machine à Sous',
        ':slot_machine:',
        'Casino',
        'Machine à fruits',
        'Jeu',
        'Machine de Poker'
    ],
    '🦽': [
        'Fauteuil roulant manuel',
        ':manual_wheelchair:',
        ':wheelchair:'
    ],
    '🦼': [
        'Fauteuil roulant motorisé',
        ':motorized_wheelchair:'
    ],
    '🪔': [
        'Lampe Diya',
        ':diya_lamp:'
    ],
    '🦯': [
        'White Cane',
        ':whie_cane:'
    ],
    '🩸': [
        'Abandon de sang',
        ':drop_of_blood:',
        ':red:'
    ],
    '🩹': [
        'Bandage adhésif',
        ':adhesive_bandage:'
    ],
    '🩺': [
        'stéthoscope',
        ':stethoscope:'
    ],
    '🪶': [
        'Plume',
        ':feather:'
    ],
    '🪤': [
        'Piège à souris',
        ':mouse_trap:'
    ],
    '🫖': [
        'Teapot',
        ':teapot:'
    ],
    '🪨': [
        'Roche',
        ':rock:',
        ':gray:',
        ':grey:'
    ],
    '🪵': [
        'Bois',
        ':wood:',
        ':brown:'
    ],
    '🪄': [
        'Baguette magique',
        ':magin_wand:'
    ],
    '🔮': [
        'Balle de cristal',
        ':crystal_ball:',
        'Clairvoyant',
        'Vendeur de Fortune',
        'Psychique',
        'Cristal Violet',
        ':purple:'
    ],
    '🪅': [
        'Épinglé',
        ':pinata:',
        ':piñata:'
    ],
    '🪆': [
        'Poupées imbriquées',
        ':nesting_dolls:',
        'Matryoshka'
    ],
    '🪡': [
        'Aiguille de couture',
        ':swing_needle:'
    ],
    '🪢': [
        'Nœud',
        ':knot:',
        ':red:',
        ':blue:'
    ],
    '🪙': [
        'Pièce',
        ':coin:'
    ],
    '🪃': [
        'Boomerang',
        ':boomerang:',
        ':brown:'
    ],
    '🪥': [
        'Brosse à dents',
        ':toothbrush:'
    ],
    '🪦': [
        'Pierre de Tête',
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
        'Jar',
        ':jar:',
        ':transparent:'
    ],
    '🛞': [
        'Roue',
        ':wheel:',
        'Véhicules',
        'Voitures',
        ':black:'
    ],
    '🛟': [
        'Bouée de l\'anneau',
        ':ring_buoy:',
        'Réservoir de vie',
        'Anneau de Vie',
        'Bateaux',
        'Sécurité',
        'Eau',
        'Vie animale',
        ':red:',
        ':white:'
    ],
    '🪬': [
        'Hamsa',
        ':hamsa:',
        'Islam',
        'Judaïsme',
        'Buddhism',
        'Christianisme',
        'Religions',
        'Chance',
        'Protéger',
        'Orientation',
        'Puissance féminine',
        'Foi',
        ':blue:'
    ],
    '🪩': [
        'Balle miroir',
        ':mirror_ball:',
        'Boule Disco'
    ],
    '🪫': [
        'Batterie Faible',
        ':low_battery:',
        ':red:',
        'Énergie',
        'Rouge'
    ],
    '🩻': [
        'Rayon X',
        ':x_ray:',
        ':x-ray:',
        ':blue:'
    ],
    '🫧': [
        'Bulles',
        ':bubbles:',
        'Souds de savon',
        'Carbonation',
        'Personnalité Effervescente',
        ':transparent:'
    ],
    '🪪': [
        'Carte d\'identité',
        ':identification_card:',
        'Identité',
        'Passeport',
        'ID'
    ],
    '🧿': [
        'Nazar Amulet',
        ':nazar_amulet:',
        'Œil Maléfique',
        ':blue:'
    ],
    '🧸': [
        'Ours en peluche',
        ':teddy_bear:',
        'Jouet',
        ':brown:'
    ]
};