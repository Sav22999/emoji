// descriptions took from Emojipedia.org
lang = 'tr';
//use i18n language code of the browser, more details: https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/i18n/LanguageCode
titles_language[lang] = {
    '🔍': 'Sonuçlar',
    '🕒': 'En çok kullanılan emojiler',
    '😀': 'Yüz ifadeleri',
    '🙋': 'İnsanlar',
    '🦊': 'Hayvanlar',
    '🅰️': 'Semboller',
    '🍎': 'Yiyecek ve içecekler',
    '🏳️‍🌈': 'Bayraklar',
    '🏊': 'Spor dalları',
    '✈️': 'Seyehat ve yerler',
    '🖱️': 'Teknolojik alet ve ofis',
    '👗': 'Giysi ve aksesuarlar',
    '🖐️': 'Eller ve vücudun bölümleri',
    '🛎️': 'Diğer'
};
emojis_language[lang] = [];
/*search*/
emojis_language[lang][0] = {};
/*smileys*/
emojis_language[lang][2] = {
    '😀': [
        'Sırıtan yüz',
        ':grinning:',
        ':grinning_face:',
        '::):',
        'Mutlu Yüz',
        'Gülen Yüz'
    ],
    '😃': [
        'İri Gözlü Sırıtan Yüz',
        ':smiley:',
        ':grinning_face_with_big_eyes:',
        '::D:',
        'Mutlu Yüz',
        'Gülen Yüz',
        'Ağzı Açık Gülen Yüz'
    ],
    '😄': [
        'Gülen Gözlerle Sırıtan Yüz',
        ':smile:',
        ':grinning_face_with_smiling_eyes:',
        'Mutlu Yüz',
        'Gülen Yüz',
        'Gözleri Kısık Sırıtan Yüz',
        'Açık Ağızla ve Gülen Gözlerle Gülümseyen Yüz'
    ],
    '😁': [
        'Gülen Gözlerle Parlayan Yüz',
        ':grin:',
        ':beaming_face_with_smiling_eyes:',
        'Gülen Gözlerle Sırıtan Yüz'
    ],
    '😆': [
        'Gözleri Kısık Sırıtan Yüz',
        ':grinning_squinting_face:',
        ':xD:',
        ':><:',
        'Kocaman Sırıtma',
        'Gözler Kapalı Gülümseme',
        'Gülmek',
        'Sıkıca Kapalı Gözlerle Sırıtan Yüz',
        'Ağzı Açık ve Sıkıca Kapalı Gözlerle Gülümseyen Yüz'
    ],
    '😅': [
        'Terli Sırıtan Yüz',
        ':happy_sweat:',
        'Egzersiz',
        'Mutlu Terleme',
        'Kısık Gözlü ve Ter Damlalı Sırıtan Yüz',
        'Ağzı Açık ve Soğuk Terli Gülümseyen Yüz'
    ],
    '🤣': [
        'Gülmekten yerlere yatmak',
        ':rofl:',
        'Gülmekten Yerlerde Yuvarlanmak'
    ],
    '😂': [
        'Mutluluk Gözyaşlı Yüz',
        ':lol:',
        'Gülmek',
        'Ağlayarak Gülmek',
        'Gözyaşlarıyla Gülmek',
        'Gülme'
    ],
    '🙂': [
        'Hafif Gülümseyen Yüz',
        ':smile:',
        '::):',
        'Hafif Mutlu',
        'Her Şey Yolunda'
    ],
    '🙃': [
        'Ters Dönmüş Yüz',
        ':upside-down_face:',
        ':upside_down_face:',
        'Alay',
        'Şapşal',
        'Ters Dönmüş Yüz'
    ],
    '😉': [
        'Göz Kırpan Yüz',
        ':winking:',
        ':;):',
        'Göz Kırpmak',
        'Göz Kırpma Yüzü',
        'Gözü Kırpık Yüz'
    ],
    '😊': [
        'Gülen Gözlerle Gülümseyen Yüz',
        ':smiling_face:',
        ':^^:',
        'Mutlu Yüz',
        'Gülümsemek',
        'Gülen Yüz'
    ],
    '😇': [
        'Haleli Gülümseyen Yüz',
        ':smiling_angel:',
        'Melek',
        'Hale'
    ],
    '🥰': [
        'Kalpli Gülümseyen Yüz',
        ':smiling_hearts:',
        'Aşık Yüz',
        'Üç Tane Kalpli ve Gülen Gözlü Gülümseyen Surat'
    ],
    '😍': [
        'Gülen Gözlerle Gülümseyen Yüz',
        'love',
        ':smiling_heart-eyes:',
        ':smiling_heart_eyes:',
        ':*.*:',
        'Heart Eyes',
        'Heart Face',
        'Smiling Face with Heart-Shaped Eyes'
    ],
    '🤩': [
        'Büyülenmiş',
        ':star_eyes:',
        'Heyecanlı',
        'Yıldız Gözler',
        'Işıldayan Gözler',
        'Wow Face',
        'Face With Starry Eyes',
        'Grinning Face with Star Eyes'
    ],
    '😘': [
        'Face Blowing a Kiss',
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
        'Öpücük Atan Yüz',
        'kiss',
        ':kissing_face:',
        '::*:',
        '::-*:',
        'Duck Face',
        'Kissy Face',
        'Whistling'
    ],
    '☺️': [
        'Gülen Yüz',
        ':smiling_face:',
        'Mutlu Yüz',
        'Gülen Yüz',
        'Gülümsemek',
        'Hafif Gülümseyen Yüz'
    ],
    '😚': [
        'Gözleri Kapalı Öpücük',
        ':kissing_face:',
        'Kiss Face',
        'Öpücük Surat'
    ],
    '😙': [
        'Kissing Face with Smiling Eyes',
        ':kissing_face:',
        'Kiss Face',
        'Kissy',
        'Whistle',
        'Islık Çalmak'
    ],
    '😋': [
        'Face Savoring Food',
        ':savoring_face:',
        'Goofy',
        'Hungry',
        'Smiling Face Licking Lips',
        'Face Savouring Delicious Food',
        'Yum Yum'
    ],
    '😛': [
        'Face with Tongue',
        ':tongue_face:',
        '::P:',
        'Cheeky',
        'Tongue Face',
        'Tongue-Out',
        'Face with Stuck-Out Tongue'
    ],
    '😜': [
        'Winking Face with Tongue',
        ':winking:',
        ':;P:',
        'Crazy',
        'Crazy Face',
        'Winking Face With Stuck-Out Tongue',
        'Face with Stuck-Out Tongue and Winking Eye'
    ],
    '🤪': [
        'Zany Face',
        ':crazy_face:',
        'Crazy Eyes',
        'Heyecanlı',
        'Wild',
        'Goofy Face',
        'Grinning Face with One Large and One Small Eye'
    ],
    '😝': [
        'Squinting Face with Tongue',
        ':tongue_face:',
        ':xP:',
        'Tongue Out',
        'Face With Stuck Out Tongue and Tightly-Closed Eyes',
        'Face with Stuck-Out Tongue and Tightly-Closed Eyes'
    ],
    '🤑': [
        'Money-Mouth Face',
        ':money-mouth_face:',
        ':money_mouth_face:',
        '::$:',
        'Dollar Sign Eyes',
        'Money Face',
        'Rich'
    ],
    '🤗': [
        'Hugging Face',
        ':hugging_face:',
        'Hug',
        'Hugging',
        'Hugs',
        'Happy Face With Hugging Hands'
    ],
    '🤭': [
        'Oops',
        ':oops:',
        'Face with Hand Over Mouth',
        'Smiling Face with Smiling Eyes and Hand Covering Mouth'
    ],
    '🤫': [
        'Shh',
        ':shushing_face:',
        'Shush',
        'Shushing Face',
        'Hush',
        'Quiet',
        'Silence',
        'Silent',
        'Face with Finger Covering Closed Lips'
    ],
    '🤔': [
        'What',
        ':thinking_face:',
        '?',
        'Hmm',
        'Thinking Face',
        'Chin Thumb',
        'Thinker',
        'Throwing Shade'
    ],
    '🤐': [
        'Zip',
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
        'Face with Raised Eyebrow',
        ':face_with_raised_eyebrow:',
        'Colbert',
        'The Rock',
        'Face With Raised Eyebrow',
        'Face with One Eyebrow Raised'
    ],
    '😐': [
        'Neutral Face',
        ':neutral_face:',
        ':|',
        'Face With Straight Mouth',
        'Straight Faced'
    ],
    '😑': [
        'Expressionless Face',
        ':expressionless_face:',
        '-_-',
        'Face With Straight Mouth',
        'Straight Face'
    ],
    '😶': [
        'Face Without Mouth',
        ':face_without_mouth:',
        'Blank Face',
        'Mouthless',
        'Silence',
        'Silent'
    ],
    '😏': [
        'Smirking Face',
        ':smirking_face:',
        'Flirting',
        'Sexual Face',
        'Smug Face',
        'Suggestive Smile'
    ],
    '😒': [
        'Unamused Face',
        ':unamused_face:',
        'Dissatisfied',
        'Meh',
        'Side-Eye',
        'Unimpressed'
    ],
    '🙄': [
        'Face with Rolling Eyes',
        ':face_with_rolling_eye:',
        ':eye_roll:',
        'Eye Roll'
    ],
    '😬': [
        'Grimacing Face',
        ':awkward:',
        'Awkward',
        'Eek',
        'Foot In Mounth',
        'Nervous',
        'Snapchat Mutual #1 Best Friend'
    ],
    '🤥': [
        'Lying Face',
        ':lying_face:',
        'Liar',
        'Long Nose',
        'Pinocchio'
    ],
    '😌': [
        'Relieved Face',
        ':relieved_face:',
        'Content',
        'Pleased'
    ],
    '😔': [
        'Sorry',
        ':sad_face:',
        'Pensive Face',
        'Pensive',
        'Sad',
        'Sadface',
        'Sorrowful',
        'Sad Pensive Face'
    ],
    '😪': [
        'Sleepy Face',
        ':sleepy_face:',
        'Side-Tear',
        'Snot Bubble'
    ],
    '🤤': [
        'Saliva',
        ':saliva_face:',
        'Drooling Face',
        'Drool'
    ],
    '😴': [
        'Sleeping Face',
        ':sleeping_face:',
        ':zzz:',
        'Zzz',
        'Sleep Face',
        'Snoring',
        'Zzz Face'
    ],
    '🥱': [
        'Yawning Face',
        'tired',
        ':yawning_face:'
    ],
    '😷': [
        'Face with Medical Mask',
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
        'Face with Thermometer',
        ':face_with_thermometer:',
        ':sick:',
        ':ill:',
        'Ill',
        'Sick'
    ],
    '🤕': [
        'Face with Head-Bandage',
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
        'Nauseated Face',
        'sick',
        ':nauseated_face:',
        'Disgust',
        'Green Face',
        'Vomit',
        ':green:',
        'ill'
    ],
    '🤮': [
        'Face Vomiting',
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
        'Sneezing Face',
        'sick',
        ':sneezing_face:',
        'Gesundheit',
        'ill'
    ],
    '🥵': [
        'Hot Face',
        ':hot_face:',
        'Overheated Face',
        ':red:'
    ],
    '🥶': [
        'Cold Face',
        ':cold_face:',
        'Cool',
        'Chill',
        'Freezing Face',
        ':blue:'
    ],
    '🥴': [
        'Woozy Face',
        ':woozy_face:',
        'Drunk Face',
        'Face with Uneven Eyes and Wavy Mouth'
    ],
    '😵': [
        'Dizzy Face',
        ':dizzy_face:',
        'Cross Eyes Face',
        'Spiral Eyes Face'
    ],
    '🤯': [
        'Exploding Head',
        'boom',
        ':exploding_head:',
        'Mind Blown',
        'Shocked Face with Exploding Head'
    ],
    '🤠': [
        'Cowboy Hat Face',
        ':cowboy_hat_face:',
        'Cowboy',
        'Cowboy Face',
        'Face with Cowboy Hat'
    ],
    '🥳': [
        'Partying Face',
        ':partying_face:',
        'Party Face',
        'Face with Party Horn and Party Hat'
    ],
    '😎': [
        'Smiling Face with Sunglasses',
        ':smiling_face_with_sunglasses:',
        'Cool',
        'Mutual Best Friends (Snapchat)',
        'Güneş Gözlüğü'
    ],
    '🤓': [
        'Nerd Face',
        ':nerd_face:',
        'Nerdy'
    ],
    '🧐': [
        'Face with Monocle',
        ':face_with_monocle:'
    ],
    '😕': [
        'Confused Face',
        ':confused_face:',
        '::/:',
        '::S:',
        'Nonplussed',
        'Puzzled'
    ],
    '😟': [
        'Worried Face',
        ':worried_face:',
        '::(:',
        'Sad',
        'Sadface'
    ],
    '🙁': [
        'Slightly Frowning Face',
        ':slightly_frowning_face:',
        '::(:',
        'Slightly Sad'
    ],
    '☹️': [
        'Frowning Face',
        ':frowning_face:',
        '::(:',
        'Megafrown',
        'White Frowning Face'
    ],
    '😮': [
        'Wow',
        ':wow:',
        '::O:',
        'Oh my!',
        'Face with Open Mouth',
        'Open Mouth',
        'Surprised Face With Open Mouth'
    ],
    '😯': [
        'Hushed Face',
        ':husked_face:',
        '::O:',
        'Surprise',
        'Surprised Face'
    ],
    '😲': [
        'Shocked Face',
        ':shocked_face:',
        '::O:',
        'Wow',
        'Astonished Face',
        'Drunk Face',
        'Gasping Face'
    ],
    '😳': [
        'Flushed Face',
        ':flushed_face:',
        '::$:',
        'Blushing Face',
        'Embarrassed',
        'Shame',
        'Face With Wide Open Eyes'
    ],
    '🥺': [
        'Pleading Face',
        ':pleading_face:',
        '::(:',
        'Begging',
        'Glossy Eyes',
        'Simp',
        'Face with Pleading Eyes'
    ],
    '😦': [
        'Frowning Face with Open Mouth',
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
        'Scared',
        ':scared:',
        ':D::',
        'Fearful Face',
        'Surprised'
    ],
    '😰': [
        'Anxious Face with Sweat',
        ':anxious_face_with_sweat:',
        'Blue Face',
        'Concerned Face',
        'Nervous Face',
        'Face with Open Mouth and Cold Sweat'
    ],
    '😥': [
        'Sad but Relieved Face',
        ':sad_but_relieved_face:',
        '::(:',
        'Eyebrow Sweat',
        'Disappointed but Relieved Face'
    ],
    '😢': [
        'Crying Face',
        ':crying_face:',
        '::(:',
        'Crying',
        'Tear'
    ],
    '😭': [
        'Loudly Crying Face',
        ':loudly_crying_face:',
        'Bawling',
        'Crying',
        'Sad Tears',
        'Sobbing'
    ],
    '😱': [
        'Face Screaming in Fear',
        ':face_screaming_in_fear:',
        'Home Alone',
        'Scream',
        'Screaming Face'
    ],
    '😖': [
        'Confounded Face',
        ':confounded_face:',
        'Quivering Mouth',
        'Scrunched Face'
    ],
    '😣': [
        'Persevering Face',
        ':persevering_face:',
        'Helpless Face',
        'Scrunched Eyes'
    ],
    '😞': [
        'Disappointed Face',
        ':disappointed_face:',
        '::(:',
        'Sad',
        'Sadface'
    ],
    '😓': [
        'Downcast Face with Sweat',
        ':downcast_face_with_sweat:',
        'Hard Work',
        'Sad Sweat Face',
        'Face with Cold Sweat'
    ],
    '😩': [
        'Weary Face',
        ':weary_face:',
        'Distraught Face',
        'Wailing'
    ],
    '😫': [
        'Tired Face',
        ':tired_face:',
        'Exhausted',
        'Fed Up',
        'Distraught Face'
    ],
    '😤': [
        'Face with Steam From Nose',
        ':face_with_steam_from_nose:',
        'Airing of Grievances',
        'Frustrated',
        'Mad Face',
        'Steaming',
        'Huffing With Anger Face'
    ],
    '😡': [
        'Pouting Face',
        'fuck',
        ':pouting_face:',
        'Angry Face',
        'Grumpy Face',
        'Mad Face',
        'Red Face',
        ':red:'
    ],
    '😠': [
        'Angry Face',
        ':angry_face:',
        'Angry',
        'Grumpy Face'
    ],
    '🤬': [
        'Swearing',
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
        'Smiling Face with Tear',
        ':smiling_face_with_tear:'
    ],
    '😮‍💨': [
        'Face Exhaling',
        ':face_exhaling:',
        'Sigh'
    ],
    '😵‍💫': [
        'Face with Spiral Eyes',
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
        'Disguised Face',
        ':disguised_face:'
    ],
    '🫠': [
        'Melting Face',
        ':melting_face:'
    ],
    '🫢': [
        'Face with Open Eyes and Hand Over Mouth',
        ':face_with_open_eyes_and_hand_over_mouth:'
    ],
    '🫣': [
        'Face with Peeking Eye',
        ':face_with_peeking_eye:'
    ],
    '🫡': [
        'Saluting Face',
        ':saluting_face:',
        'Military',
        'Army',
        'RAF',
        'Navy'
    ],
    '🫥': [
        'Dotted Line Face',
        ':dotted_line_face:',
        ':transparent:'
    ],
    '🫤': [
        'Face with Diagonal Mouth',
        ':face_with_diagonal_mouth:'
    ],
    '🥹': [
        'Face Holding Back Tears',
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
        'Smiling Face with Horns',
        ':smiling_face_with_horns:',
        'Devil',
        'Devil Horns',
        'Happy Devil',
        'Purple Devil',
        'Red Devil',
        ':purple:'
    ],
    '👿': [
        'Angry Face with Horns',
        ':angry_face_with_horns:',
        'Devil',
        'Devil Horns',
        'Purple Devil',
        'Purple Goblin',
        'Sad Devil',
        'Imp',
        ':purple:'
    ],
    '🤡': [
        'Clown Face',
        ':clown_face:',
        'Creepy Clown',
        'Evil Clown',
        'Scary Clown'
    ],
    '👽': [
        'Alien',
        ':alien:',
        'ET'
    ],
    '👾': [
        'Alien Monster',
        ':alien_monster:',
        'Space Invader',
        'Video Game Monster'
    ],
    '🤖': [
        'Robot',
        ':robot:',
        'Robot Face'
    ],
    '👹': [
        'Ogre',
        ':ogre:',
        'Mask Face',
        'Oni',
        'Red Monster',
        'Japanese Ogre',
        ':red:'
    ],
    '👻': [
        'Ghost',
        ':ghost:',
        'Cadılar Bayramı'
    ],
    '🗣️': [
        'Speaking Head',
        ':speaking_head:',
        'Mansplaining',
        'Shout',
        'Shouting',
        'Speaking Head in Silhouette',
        ':blue:'
    ],
    '👤': [
        'Bust in Silhouette',
        ':bust_in_silhouette:',
        'Shadow',
        'Silhouette',
        'User',
        'Silhouette of Person',
        ':blue:'
    ],
    '🫂': [
        'People Hugging',
        ':people_hugging:',
        ':blue:'
    ],
    '👥': [
        'Busts in Silhouette',
        ':busts_in_silhouette:',
        'Shadows',
        'Silhouettes',
        'Users',
        'Silhouette of Two People',
        ':blue:'
    ]
};
/*people*/
emojis_language[lang][3] = {
    '👶{{skin_tone}}': [
        'Bebek',
        ':baby:',
        'Child',
        'Toddler'
    ],
    '🧒{{skin_tone}}': [
        'Child',
        ':child:',
        'Gender Neutral Child'
    ],
    '👧{{skin_tone}}': [
        'Girl',
        ':girl:',
        ':woman:'
    ],
    '🧑{{skin_tone}}': [
        'Person',
        ':person:',
        'Gender Neutral Adult',
        'Yetişkin',
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
        'Person: Red Hair',
        ':person_red_hair:',
        'Ginger Person',
        'Person Redhead',
        'Person With Red Hair',
        ':person:'
    ],
    '🧑{{skin_tone}}‍🦱': [
        'Person: Curly Hair',
        ':person_curly_hair:',
        'Person With Curly Hair',
        ':person:'
    ],
    '🧑{{skin_tone}}‍🦳': [
        'Person: White Hair',
        ':person_white_hair:',
        'Person With Gray Hair',
        ':person:'
    ],
    '🧑{{skin_tone}}‍🦲': [
        'Person: Bald',
        ':person_bald:',
        'Person With No Hair',
        ':person:'
    ],
    '👱{{skin_tone}}': [
        'Person: Blond Hair',
        ':person_blond_hair:',
        'Person With Blonde Hair',
        ':person:'
    ],
    '👨{{skin_tone}}': [
        'Man',
        ':man:',
        'Erkek',
        'Moustache Man',
        ':man:'
    ],
    '🧔{{skin_tone}}‍♂️': [
        'Man: Beard',
        ':man_beard:',
        'Beard',
        'Bearded Man',
        'Bearded Person',
        ':man:'
    ],
    '👨{{skin_tone}}‍🦰': [
        'Man: Red Hair',
        ':man_red_hair:',
        'Ginger Man',
        'Man Redhead',
        'Man With Red Hair',
        ':man:'
    ],
    '👨{{skin_tone}}‍🦱': [
        'Man: Curly Hair',
        ':man_curly_hair:',
        'Man With Curly Hair',
        ':man:'
    ],
    '👨{{skin_tone}}‍🦳': [
        'Man: White Hair',
        ':man_white_hair:',
        'Man With Gray Hair',
        ':man:'
    ],
    '👨{{skin_tone}}‍🦲': [
        'Man: Bald',
        ':man_bald:',
        'Man With No Hair',
        ':man:'
    ],
    '👱{{skin_tone}}‍♂️': [
        'Man: Blond Hair',
        ':man_blond_hair:',
        'Man With Blonde Hair',
        ':man:'
    ],
    '👩{{skin_tone}}': [
        'Woman',
        ':woman:',
        'Kadın',
        'Lady',
        'Yellow Woman',
        ':woman:'
    ],
    '🧔{{skin_tone}}‍♀️': [
        'Woman: Beard',
        ':woman_beard:',
        'Beard',
        'Bearded Woman',
        ':woman:'
    ],
    '👩{{skin_tone}}‍🦰': [
        'Woman: Red Hair',
        ':woman_red_hair:',
        'Ginger Woman',
        'Woman Redhead',
        'Woman With Red Hair',
        ':woman:'
    ],
    '👩{{skin_tone}}‍🦱': [
        'Woman: Curly Hair',
        ':woman_curly_hair:',
        'Woman With Curly Hair',
        ':woman:'
    ],
    '👩{{skin_tone}}‍🦳': [
        'Woman: White Hair',
        ':woman_white_hair:',
        'Woman With Gray Hair',
        ':woman:'
    ],
    '👩{{skin_tone}}‍🦲': [
        'Woman: Bald',
        ':woman_bald:',
        'Woman With No Hair',
        ':woman:'
    ],
    '👱{{skin_tone}}‍♀️': [
        'Woman: Blond Hair',
        ':woman_blond_hair:',
        'Woman With Blonde Hair',
        ':woman:'
    ],
    '👴{{skin_tone}}': [
        'Older Man',
        ':older_man:',
        ':older:',
        'Elderly Man',
        'Grandpa',
        'Old Man',
        ':man:'
    ],
    '👵{{skin_tone}}': [
        'Older Woman',
        ':older_woman:',
        ':older:',
        'Elderly Woman',
        'Grandma',
        'Nanna',
        'Old Lady',
        'Old Woman',
        ':woman:'
    ],
    '🧓{{skin_tone}}': [
        'Older Person',
        ':older_person:',
        ':older:',
        'Gender Neutral Older Adult',
        ':person:'
    ],
    '👼{{skin_tone}}': [
        'Baby Angel',
        ':baby_angel:',
        'Melek',
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
        'Person Christmas',
        ':person:'
    ],
    '🤴{{skin_tone}}': [
        'Prince',
        ':price:',
        ':man:'
    ],
    '👸{{skin_tone}}': [
        'Princess',
        ':pricess:',
        'Blonde Girl',
        'Girl With Crown',
        'Girl With Tiara',
        ':woman:'
    ],
    '🫅{{skin_tone}}': [
        'Person with Crown',
        ':person_with_crown:',
        ':person:'
    ],
    '👳{{skin_tone}}‍♂️': [
        'Man Wearing Turban',
        ':man_wearing_turban:',
        ':wearing_turban:',
        'Arab',
        'Muslim',
        'Sikh',
        'Turban',
        ':man:'
    ],
    '👳{{skin_tone}}‍♀️': [
        'Woman Wearing Turban',
        ':woman_wearing_turban:',
        ':wearing_turban:',
        'Arab',
        'Muslim',
        'Sikh',
        'Turban',
        ':woman:'
    ],
    '👳{{skin_tone}}': [
        'Person Wearing Turban',
        ':person_wearing_turban:',
        ':wearing_turban:',
        'Arab',
        'Muslim',
        'Sikh',
        'Turban',
        ':person:'
    ],
    '👲{{skin_tone}}': [
        'Person With Skullcap',
        ':person_with_skullcap:',
        'Asian Man',
        'Man With Chinese Cap',
        'Man with Gua Pi Mao',
        ':person:'
    ],
    '🧕{{skin_tone}}': [
        'Woman with Headscarf',
        ':woman_with_headscarf:',
        'Hijab',
        'Person with Headscarf',
        ':woman:'
    ],
    '🤵{{skin_tone}}‍♀️': [
        'Man in Tuxedo',
        ':man_in_tuxedo:',
        ':tuxedo:',
        'Damat',
        'Man In Suit',
        'Wedding',
        ':man:'
    ],
    '🤵{{skin_tone}}‍♂️': [
        'Woman in Tuxedo',
        ':woman_in_tuxedo:',
        ':tuxedo:',
        'Damat',
        'Woman In Suit',
        'Wedding',
        ':woman:'
    ],
    '🤵{{skin_tone}}': [
        'Person in Tuxedo',
        ':person_in_tuxedo:',
        ':tuxedo:',
        'Damat',
        'Person In Suit',
        'Wedding',
        ':person:'
    ],
    '👰{{skin_tone}}‍♂️': [
        'Man with Veil',
        ':man_with_veil:',
        ':veil:',
        'Wedding',
        'Bridegroom',
        'Marriage',
        ':man:'
    ],
    '👰{{skin_tone}}‍♀️': [
        'Woman with Veil',
        ':woman_with_veil:',
        ':veil:',
        'Wedding',
        'Bride',
        'Bride with Veil',
        'Marriage',
        ':woman:'
    ],
    '👰{{skin_tone}}': [
        'Person With Veil',
        ':person_with_veil:',
        ':veil:',
        'Wedding',
        'Marriage',
        ':person:'
    ],
    '👨{{skin_tone}}‍🍼': [
        'Man Feeding Baby',
        ':man_feeding_baby:',
        ':feeding_baby:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🍼': [
        'Woman Feeding Baby',
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
        'Pregnant Man',
        ':pregnant_man:',
        ':pregnant:',
        'Pregnancy',
        ':man:'
    ],
    '🤰{{skin_tone}}': [
        'Pregnant Woman',
        ':pregnant_woman:',
        ':pregnant:',
        'Pregnancy',
        'Pregnant Lady',
        ':woman:'
    ],
    '🫄{{skin_tone}}': [
        'Pregnant Person',
        ':pregnant_person:',
        ':pregnant:',
        'Pregnancy',
        ':person:'
    ],
    '🤱{{skin_tone}}': [
        'Breast-Feeding',
        ':breast-feeding:',
        ':breast_feeding:',
        'Breastfeeding'
    ],
    '🦸{{skin_tone}}‍♂️': [
        'Man Superhero',
        ':man_superhero:',
        ':superhero:',
        ':man:'
    ],
    '🦸{{skin_tone}}‍♀️': [
        'Woman Superhero',
        ':woman_superhero:',
        ':superhero:',
        ':woman:'
    ],
    '🦸{{skin_tone}}': [
        'Person Superhero',
        ':person_superhero:',
        ':superhero:',
        ':person:'
    ],
    '🦹{{skin_tone}}‍♂️': [
        'Man Supervillain',
        ':man_supervillain:',
        ':supervillain:',
        ':man:'
    ],
    '🦹{{skin_tone}}‍♀️': [
        'Woman Supervillain',
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
        'Man Mage',
        ':man_mage:',
        ':mage:',
        'Sorcerer',
        'Wizard',
        ':man:'
    ],
    '🧙{{skin_tone}}‍♀️': [
        'Woman Mage',
        ':woman_mage:',
        ':mage:',
        'Witch',
        'Sorceress',
        'Wizard',
        ':woman:'
    ],
    '🧙{{skin_tone}}': [
        'Person Mage',
        ':person_mage:',
        ':mage:',
        'Wizard',
        ':mage:',
        ':person:'
    ],
    '🧚{{skin_tone}}‍♂️': [
        'Man Fairy',
        ':man_fairy:',
        ':fairy:',
        ':man:'
    ],
    '🧚{{skin_tone}}‍♀️': [
        'Woman Fairy',
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
        'Man Vampire',
        ':man_vampire:',
        ':vampire:',
        'Dracula',
        ':man:'
    ],
    '🧛{{skin_tone}}‍♀️': [
        'Woman Vampire',
        ':woman_vampire:',
        ':vampire:',
        ':woman:'
    ],
    '🧛{{skin_tone}}': [
        'Person Vampire',
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
        'Mermaid',
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
        'Man Elf',
        ':man_elf:',
        ':elf:',
        ':man:'
    ],
    '🧝{{skin_tone}}‍♀️': [
        'Woman Elf',
        ':woman_elf:',
        ':elf:',
        ':woman:'
    ],
    '🧝{{skin_tone}}': [
        'Person Elf',
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
        'Man Detective',
        ':man_detective:',
        ':detective:',
        'Private Eye',
        'Sleuth',
        'Spy',
        'Man Sleuth',
        'Sleuth or Spy',
        '007',
        'Inspector',
        ':man:'
    ],
    '🕵️{{skin_tone}}‍♀️': [
        'Woman Detective',
        ':woman_detective:',
        ':detective:',
        'Private Eye',
        'Sleuth',
        'Spy',
        'Woman Sleuth',
        'Sleuth or Spy',
        '007',
        'Inspector',
        ':woman:'
    ],
    '🕵{{skin_tone}}': [
        'Person Detective',
        ':person_detective:',
        ':detective:',
        'Private Eye',
        'Sleuth',
        'Spy',
        'Person Sleuth',
        'Sleuth or Spy',
        '007',
        'Inspector',
        ':person:'
    ],
    '💂{{skin_tone}}‍♂️': [
        'Man: Guard',
        ':man_guard:',
        ':guard:',
        'British Guardsman',
        'Foot Guard',
        ':man:'
    ],
    '💂{{skin_tone}}‍♀️': [
        'Woman: Guard',
        ':woman_guard:',
        ':guard:',
        'British Guardsman',
        'Foot Guard',
        ':woman:'
    ],
    '💂{{skin_tone}}': [
        'Person: Guard',
        ':person_guard:',
        ':guard:',
        'British Guardsman',
        'Foot Guard',
        ':person:'
    ],
    '👮{{skin_tone}}‍♂️': [
        'Police Officer',
        ':man_police_officer:',
        ':police_officer:',
        'Cop',
        'Police',
        'Policeman',
        ':man:'
    ],
    '👮{{skin_tone}}‍♀️': [
        'Woman Police Officer',
        ':woman_police_officer:',
        ':police_officer:',
        'Cop',
        'Police',
        'Policewoman',
        ':woman:'
    ],
    '👮{{skin_tone}}': [
        'Police Officer',
        ':person_police_officer:',
        ':police_officer:',
        'Cop',
        'Police',
        ':person:'
    ],
    '👨{{skin_tone}}‍🚒': [
        'Man Firefighter',
        ':man_firefighter:',
        ':firefighter:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🚒': [
        'Woman Firefighter',
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
        'Man Pilot',
        ':man_pilot:',
        ':pilot:',
        ':man:'
    ],
    '👩{{skin_tone}}‍✈️': [
        'Woman Pilot',
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
        'Man Technologist',
        ':man_technologist:',
        ':technologist:',
        'Man Technologist',
        ':man:'
    ],
    '👩{{skin_tone}}‍💻': [
        'Woman Technologist',
        ':woman_technologist:',
        ':technologist:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍💻': [
        'Person Technologist',
        ':person_technologist:',
        ':technologist:',
        ':person:'
    ],
    '👨{{skin_tone}}‍🎤': [
        'Man Singer',
        ':man_singer:',
        ':singer:',
        'Bowie',
        'Aladdin Sane',
        ':man:'
    ],
    '👩{{skin_tone}}‍🎤': [
        'Woman Singer',
        ':woman_singer:',
        ':singer:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🎤': [
        'Person Singer',
        ':person_singer:',
        ':singer:',
        ':person:'
    ],
    '👨{{skin_tone}}‍🎨': [
        'Man Artist',
        ':man_artist:',
        ':artist:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🎨': [
        'Woman Artist',
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
        'Woman Construction Worker',
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
        'Man Astronaut',
        ':man_astronaut:',
        ':astronaut:',
        'Man Cosmonaut',
        ':man:'
    ],
    '👩{{skin_tone}}‍🚀': [
        'Woman Astronaut',
        ':woman_astronaut:',
        ':astronaut:',
        'Woman Cosmonaut',
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
        'Man Scientist',
        ':man_scientist:',
        ':scientist:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🔬': [
        'Woman Scientist',
        ':woman_scientist:',
        ':scientist:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🔬': [
        'Person Scientist',
        ':person_scientist:',
        ':scientist:',
        ':person:'
    ],
    '👨{{skin_tone}}‍💼': [
        'Man Office Worker',
        ':man_office_worker:',
        ':office_worker:',
        'CEO',
        'Businessman',
        ':man:'
    ],
    '👩{{skin_tone}}‍💼': [
        'Woman Office Worker',
        ':woman_office_worker:',
        ':office_worker:',
        'Businesswoman',
        'CEO',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍💼': [
        'Person Office Worker',
        ':person_office_worker:',
        ':office_worker:',
        'Business',
        'CEO',
        ':person:'
    ],
    '👨{{skin_tone}}‍🏭': [
        'Man Factory Worker',
        ':man_factory_worker:',
        ':factory_worker:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🏭': [
        'Woman Factory Worker',
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
        'Man Mechanic',
        ':man_mechanic:',
        ':mechanic:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🔧': [
        'Woman Mechanic',
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
        'Man Cook',
        ':man_cook:',
        ':cook:',
        'Man Chef',
        'Male Chef',
        ':man:'
    ],
    '👩{{skin_tone}}‍🍳': [
        'Woman Cook',
        ':woman_cook:',
        ':cook:',
        'Woman Chef',
        'Female Chef',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🍳': [
        'Person Cook',
        ':person_cook:',
        ':cook:',
        'Person Chef',
        ':person:'
    ],
    '👨{{skin_tone}}‍🌾': [
        'Man Farmer',
        ':man_farmer:',
        ':farmer:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🌾': [
        'Woman Farmer',
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
        'Man Student',
        ':man_student:',
        ':student:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🎓': [
        'Woman Student',
        ':woman_student:',
        ':student:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🎓': [
        'Person Student',
        ':person_student:',
        ':student:',
        ':person:'
    ],
    '👨{{skin_tone}}‍⚕️': [
        'Man Health Worker',
        ':man_health_worker:',
        ':health_worker:',
        'Male Doctor',
        'Male Nurse',
        ':man:'
    ],
    '👩{{skin_tone}}‍⚕️': [
        'Woman Health Worker',
        ':woman_health_worker:',
        ':health_worker:',
        'Female Doctor',
        'Female Nurse',
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
        'Woman Shrugging',
        ':woman_shrugging:',
        ':shrugging:',
        'idk woman',
        'dunno',
        ':woman:'
    ],
    '🤷{{skin_tone}}': [
        'Person Shrugging',
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
        'Woman Facepalming',
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
        'Person Bowing',
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
        'Woman Raising Hand',
        ':woman_raising_hand:',
        'Happy Woman Raising One Hand',
        ':raising_hand:',
        ':woman:'
    ],
    '🙋{{skin_tone}}': [
        'Person Raising Hand',
        ':person_raising_hand:',
        'Happy Person Raising One Hand',
        ':raising_hand:',
        ':person:'
    ],
    '💁{{skin_tone}}‍♂️': [
        'Man Tipping Hand',
        ':man_tipping_hand:',
        'Information Desk Man',
        ':tipping_hand:',
        ':man:'
    ],
    '💁{{skin_tone}}‍♀️': [
        'Woman Tipping Hand',
        ':woman_tipping_hand:',
        'Information Desk Woman',
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
        'Woman Gesturing OK',
        ':woman_gesturing_ok:',
        ':gesturing_ok:',
        ':woman:'
    ],
    '🙆{{skin_tone}}': [
        'Person Gesturing OK',
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
        'Woman Gesturing No',
        ':woman_gesturing_no:',
        ':gesturing_no:',
        ':woman:'
    ],
    '🙅{{skin_tone}}': [
        'Person Gesturing No',
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
        'Woman Frowning',
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
        'Man Walking',
        ':man_walking:',
        ':walking:',
        ':man:'
    ],
    '🚶{{skin_tone}}‍♀️': [
        'Woman Walking',
        ':woman_walking:',
        ':walking:',
        ':woman:'
    ],
    '🚶{{skin_tone}}': [
        'Person Walking',
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
        'Man Standing',
        ':man_standing:',
        ':standing:',
        ':man:'
    ],
    '🧍{{skin_tone}}‍♀️': [
        'Woman Standing',
        ':woman_standing:',
        ':standing:',
        ':woman:'
    ],
    '🧍{{skin_tone}}': [
        'Person Standing',
        ':person_standing:',
        ':standing:',
        ':person:'
    ],
    '🧎{{skin_tone}}‍♂️': [
        'Man Kneeling',
        ':man_kneeling:',
        ':kneeling:',
        ':man:'
    ],
    '🧎{{skin_tone}}‍♀️': [
        'Woman Kneeling',
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
        'Man with White Cane',
        ':man_with_white_cane:',
        ':white_cane:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🦯': [
        'Woman with White Cane',
        ':woman_with_white_cane:',
        ':white_cane:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🦯': [
        'Person with White Cane',
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
        'Man in Motorized Wheelchair',
        ':man_in_motorized_wheelchair:',
        ':motorized_wheelchair:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🦼': [
        'Woman in Motorized Wheelchair',
        ':woman_in_motorized_wheelchair:',
        ':motorized_wheelchair:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🦼': [
        'Person in Motorized Wheelchair',
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
        'Man in Manual Wheelchair',
        ':man_manual_wheelchair:',
        ':manual_wheelchair:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🦽': [
        'Woman in Manual Wheelchair',
        ':woman_manual_wheelchair:',
        ':manual_wheelchair:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🦽': [
        'Person in Manual Wheelchair',
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
        'Men with Bunny Ears',
        ':men_with_bunny_hears:',
        ':bunny_ears:',
        ':man:'
    ],
    '👯‍♀️': [
        'Women with Bunny Ears',
        ':women_with_bunny_hears:',
        ':bunny_ears:',
        ':woman:'
    ],
    '👯': [
        'People with Bunny Ears',
        ':people_with_bunny_hears:',
        ':bunny_ears:',
        ':person:'
    ],
    '🕴️{{skin_tone}}': [
        'Person in Suit Levitating',
        ':person_in_suit_levitating:',
        'Hovering Man',
        'Rude Boy',
        'Walt Jabsco',
        'Man in Business Suit Levitating',
        ':person:'
    ],
    '🧖{{skin_tone}}‍♂️': [
        'Man in Steamy Room',
        ':man_in_steamy_room:',
        ':steamy_room:',
        'Man in Sauna',
        ':man:'
    ],
    '🧖{{skin_tone}}‍♀️': [
        'Woman in Steamy Room',
        ':woman_in_steamy_room:',
        ':steamy_room:',
        'Woman in Sauna',
        ':woman:'
    ],
    '🧖{{skin_tone}}': [
        'Person in Steamy Room',
        ':person_in_steamy_room:',
        ':steamy_room:',
        'Person in Sauna',
        ':person:'
    ],
    '👫{{skin_tone}}': [
        'Woman and Man Holding Hands',
        ':woman_and_man_holding_hands:',
        ':holding_hands:',
        'Heterosexual Couple',
        'Straight Couple',
        'Man and Woman Holding Hands',
        ':woman:'
    ],
    '👬{{skin_tone}}': [
        'Men Holding Hands',
        ':holding_hands:',
        ':men_holding_hands:',
        'Gay Couple',
        'Two Men Holding Hands',
        ':man:'
    ],
    '👭{{skin_tone}}': [
        'Women Holding Hands',
        ':holding_hands:',
        ':women_holding_hands:',
        'Lesbian Couple',
        'Two Women Holding Hands',
        ':woman:'
    ],
    '🧑‍🤝‍🧑': [
        'People Holding Hands',
        ':holding_hands:',
        ':people_holding_hands:',
        'Two People Holding Hands',
        'Gender Inclusive Couple',
        'Gender Neutral Couple',
        'Gender Nonconforming Couple',
        ':person:'
    ],
    '🧑‍🧑‍🧒': [
        'Family: Adult, Adult, Child',
        ':family_adult_adult_child:',
        'Family: Person, Person, Child'
    ],
    '👨‍👩‍👦': [
        'Family With Mother, Father and Son',
        ':family_with_mother_father_and_son:',
        'Family: Man, Woman, Boy'
    ],
    '👨‍👩‍👧': [
        'Family With Mother, Father and Daughter',
        ':family_with_mother_father_and_daughter:',
        'Family: Man, Woman, Girl'
    ],
    '👨‍👨‍👦': [
        'Family With Two Fathers and Son',
        ':family_with_two_fathers_and_son:',
        'Family: Man, Man, Boy',
        ':man:'
    ],
    '👨‍👨‍👧': [
        'Family With Two Fathers and Daughter',
        ':family_with_two_fathers_and_daughter:',
        'Family: Man, Man, Girl',
        ':man:'
    ],
    '👩‍👩‍👦': [
        'Family With Two Mothers and Son',
        ':family_with_two_mothers_and_son:',
        'Family: Woman, Woman, Boy',
        ':woman:'
    ],
    '👩‍👩‍👧': [
        'Family With Two Mothers and Daughter',
        ':family_with_two_mothers_and_daughter:',
        'Family: Woman, Woman, Girl',
        ':woman:'
    ],
    '🧑‍🧑‍🧒‍🧒': [
        'Family: Adult, Adult, Child, Child',
        ':family_adult_adult_child_child:',
        'Family: Person, Person, Child, Child'
    ],
    '👨‍👩‍👧‍👦': [
        'Family With Mother, Father, Son and Daughter',
        ':family_with_mother_father_son_and_daughter:',
        'Family: Man, Woman, Girl, Boy'
    ],
    '👨‍👩‍👦‍👦': [
        'Family With Mother, Father and Two Sons',
        ':family_with_mother_father_and_two_sons:',
        'Family: Man, Woman, Boy, Boy'
    ],
    '👨‍👩‍👧‍👧': [
        'Family With Mother, Father and Two Daughters',
        ':family_with_mother_father_and_two_daughters:',
        'Family: Man, Woman, Girl, Girl'
    ],
    '👨‍👨‍👧‍👦': [
        'Family With Two Fathers, Son and Daughter',
        ':family_with_two_fathers_son_and_daughter:',
        'Family: Man, Man, Girl, Boy',
        ':man:'
    ],
    '👨‍👨‍👦‍👦': [
        'Family With Two Fathers and Two Sons',
        ':family_with_two_fathers_and_two_sons:',
        'Family: Man, Man, Boy, Boy',
        ':man:'
    ],
    '👨‍👨‍👧‍👧': [
        'Family With Two Fathers and Two Daughters',
        ':family_with_two_fathers_and_two_daughters:',
        'Family: Man, Man, Girl, Girl',
        ':man:'
    ],
    '👩‍👩‍👧‍👦': [
        'Family With Two Mothers, Son and Daughter',
        ':family_with_two_mothers_son_and_daughter:',
        'Family: Woman, Woman, Girl, Boy',
        ':woman:'
    ],
    '👩‍👩‍👦‍👦': [
        'Family With Two Mothers and Two Sons',
        ':family_with_two_mothers_and_two_sons:',
        'Family: Woman, Woman, Boy, Boy',
        ':woman:'
    ],
    '👩‍👩‍👧‍👧': [
        'Family With Two Mothers and Two Daughters',
        ':family_with_two_mothers_and_two_daughters:',
        'Family: Woman, Woman, Girl, Girl',
        ':woman:'
    ],
    '🧑‍🧒': [
        'Family: Adult, Child',
        ':family_adult_child:',
        'Family: Person, Child'
    ],
    '👨‍👦': [
        'Family With Father and Son',
        ':family_with_father_and_son:',
        'Family: Man, Boy',
        ':man:'
    ],
    '👨‍👧': [
        'Family With Father and Daughter',
        ':family_with_father_and_daughter:',
        'Family: Man, Girl',
        ':man:'
    ],
    '👩‍👧': [
        'Family With Mother and Daughter',
        ':family_with_mother_and_daughter:',
        'Family: Woman, Girl',
        ':woman:'
    ],
    '👨‍👧‍👧': [
        'Family With Father and Two Daughters',
        ':family_with_father_and_two_daughters:',
        'Family: Man, Girl, Girl',
        ':man:'
    ],
    '🧑‍🧒‍🧒': [
        'Family: Adult, Child, Child',
        ':family_adult_child_child:',
        'Family: Person, Child, Child'
    ],
    '👨‍👦‍👦': [
        'Family With Father and Two Sons',
        ':family_with_father_and_two_sons:',
        'Family: Man, Boy, Boy',
        ':man:'
    ],
    '👨‍👧‍👦': [
        'Family With Father, Son and Daughter',
        ':family_with_father_son_and_daughter:',
        'Family: Man, Girl, Boy',
        ':man:'
    ],
    '👩‍👦': [
        'Family With Mother and Son',
        ':family_with_mother_and_son:',
        'Family: Woman, Boy',
        ':woman:'
    ],
    '👩‍👦‍👦': [
        'Family With Mother and Two Sons',
        ':family_with_mother_and_two_sons:',
        'Family: Woman, Boy, Boy',
        ':woman:'
    ],
    '👩‍👧‍👦': [
        'Family With Mother, Son and Daughter',
        ':family_with_mother_son_and_daughter:',
        'Family: Woman, Girl, Boy',
        ':woman:'
    ],
    '👩‍👧‍👧': [
        'Family With Mother and Two Daughters',
        ':family_with_mother_and_two_daughters:',
        'Family: Woman, Girl, Girl',
        ':woman:'
    ],
    '💑{{skin_tone}}': [
        'Couple With Heart',
        ':couple_with_heart:',
        'Couple In Love',
        'Loving Couple',
        'Gender Neutral Couple',
        ':person:'
    ],
    '👩‍❤️‍👨': [
        'Man and Woman With Heart',
        ':man_and_woman_with_heart:',
        'Couple In Love',
        'Loving Couple',
        'Couple With Heart'
    ],
    '👨‍❤️‍👨': [
        'Two Men With Heart',
        ':two_men_with_heart:',
        'Couple with Heart: Man, Man',
        ':man:'
    ],
    '👩‍❤️‍👩': [
        'Two Women With Heart',
        ':two_women_with_heart:',
        'Couple with Heart: Woman, Woman',
        ':woman:'
    ],
    '💏{{skin_tone}}': [
        'Couple Kissing',
        ':couple_kissing:',
        'Kiss',
        'Gender Neutral Couple Kissing',
        ':person:'
    ],
    '👩‍❤️‍💋‍👨': [
        'Man and Woman Kissing',
        ':man_and_woman_kissing:'
    ],
    '👨‍❤️‍💋‍👨': [
        'Two Men Kissing',
        ':two_men_kissing:',
        'Man and Man Kissing',
        ':man:'
    ],
    '👩‍❤️‍💋‍👩': [
        'Two Women Kissing',
        ':two_women_kissing:',
        'Woman and Woman Kissing',
        ':woman:'
    ],
    '💆{{skin_tone}}‍♂️': [
        'Man Getting Head Massage',
        ':man_getting_head_massage:',
        ':getting_head_massage:',
        ':man:'
    ],
    '💆{{skin_tone}}‍♀️': [
        'Woman Getting Head Massage',
        ':woman_getting_head_massage:',
        ':getting_head_massage:',
        ':woman:'
    ],
    '💆{{skin_tone}}': [
        'Person Getting Head Massage',
        ':person_getting_head_massage:',
        ':getting_head_massage:',
        ':person:'
    ],
    '💇{{skin_tone}}‍♂️': [
        'Man Getting Haircut',
        ':man_getting_haircut:',
        ':getting_haircut:',
        ':man:'
    ],
    '💇{{skin_tone}}‍♀️': [
        'Woman Getting Haircut',
        ':woman_getting_haircut:',
        ':getting_haircut:',
        ':woman:'
    ],
    '💇{{skin_tone}}': [
        'Person Getting Haircut',
        ':person_getting_haircut:',
        ':getting_haircut:',
        ':person:'
    ],
    '🛌{{skin_tone}}': [
        'Sleeping Accommodation',
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
        'Soap',
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
        'Long Nose Face',
        'Red Mask',
        'Tengu',
        'Japanese Goblin'
    ]
};
/*animals*/
emojis_language[lang][4] = {
    '😺': [
        'Grinning Cat',
        ':happy_cat:',
        ':smiling_cat:',
        '::):',
        'Happy Cat',
        'Smiling Cat',
        'Happy Cat Face',
        'Smiling Cat Face with Open Mouth'
    ],
    '😸': [
        'Grinning Cat with Smiling Eyes',
        ':grinning_cat:',
        '::D:',
        'Grinning Cat',
        'Happy Cat',
        'Grinning Cat Face'
    ],
    '😹': [
        'Cat with Tears of Joy',
        ':laughing_cat:',
        '::):',
        'Happy Tears Cat',
        'Laughing Cat'
    ],
    '😻': [
        'Smiling Cat with Heart-Eyes',
        ':heart_eyes_cat:',
        ':*.*:',
        'Heart Eyes Cat',
        'Loving Cat',
        'Smiling Cat Face with Heart-Shaped Eyes'
    ],
    '😼': [
        'Cat with Wry Smile',
        ':cat_with_wry_smile:',
        'Smirking Cat',
        'Smirking Cat Face',
        'Cat Face with Wry Smile'
    ],
    '😽': [
        'Kissing Cat',
        ':kissing_cat:',
        '::*:',
        'Kissing Cat Face',
        'Kissing Cat Face with Closed Eyes'
    ],
    '🙀': [
        'Weary Cat',
        ':weary_cat:',
        '::O:',
        'Scared Cat',
        'Screaming Cat',
        'Cat Face Screaming in Fear',
        'Weary Cat Face'
    ],
    '😿': [
        'Crying Cat',
        ':crying_cat:',
        '::(:',
        'Sad Cat',
        'Crying Cat Face'
    ],
    '😾': [
        'Pouting Cat',
        ':pouting_cat:',
        'Grumpy Cat',
        'Pouting Cat Face'
    ],
    '🙈': [
        'See-No-Evil Monkey',
        'Monkey',
        ':see-no-evil_mokey:',
        ':see_no_evil_mokey:',
        ':monkey:',
        'Mizaru',
        'Monkey Covering Eyes'
    ],
    '🙉': [
        'Hear-No-Evil Monkey',
        'Monkey',
        ':hear-no-evil_monkey:',
        ':hear_no_evil_monkey:',
        ':monkey:',
        'Kikazaru',
        'Monkey Covering Ears'
    ],
    '🙊': [
        'Speak-No-Evil Monkey',
        'Monkey',
        ':speak-no-evil_monkey:',
        ':speak_no_evil_monkey:',
        ':monkey:',
        'Iwazaru',
        'Monkey Covering Mouth',
        'No Speaking'
    ],
    '🐵': [
        'Monkey Face',
        ':monkey_face:',
        'Monkey',
        'Monkey Head'
    ],
    '🐒': [
        'Monkey',
        ':monkey:',
        'Cheeky Monkey'
    ],
    '🦍': [
        'Gorilla',
        ':gorilla:'
    ],
    '🐶': [
        'Dog Face',
        ':dog_face:',
        'Dog',
        'Puppy'
    ],
    '🐕': [
        'Dog',
        ':dog:',
        'Doggo',
        'Akita Inu'
    ],
    '🦮': [
        'Seeing Eye Dog',
        ':seeing_eye_dog:',
        'Guide Dog'
    ],
    '🐕‍🦺': [
        'Service Dog',
        ':service_dog:'
    ],
    '🐩': [
        'Poodle',
        ':poodle:',
        'Dog',
        'Miniature Poodle',
        'Standard Poodle',
        'Toy Poodle'
    ],
    '🐺': [
        'Wolf',
        ':wolf:',
        'Wolf Face',
        ':gray:',
        ':grey:'
    ],
    '🦊': [
        'Fox',
        ':fox:',
        'Fox Face',
        ':orange:'
    ],
    '🦝': [
        'Raccoon',
        ':raccoon:'
    ],
    '🐱': [
        'Cat Face',
        ':cat_face:',
        ':3',
        'Kitten',
        'Kitty'
    ],
    '🐈': [
        'Cat',
        ':cat:',
        'Domestic Cat',
        'Feline',
        'Housecat'
    ],
    '🐈‍⬛': [
        'Black Cat',
        ':black_cat:',
        ':black:'
    ],
    '🦁': [
        'Lion',
        ':lion:',
        'Lion Face'
    ],
    '🐯': [
        'Tiger Face',
        ':tiger_face:',
        'Cute Tiger'
    ],
    '🐅': [
        'Tiger',
        ':tiger:',
        'Bengal Tiger'
    ],
    '🐆': [
        'Leopard',
        ':leopard:',
        'African Leopard',
        'Jaguar'
    ],
    '🐴': [
        'Horse Face',
        ':horse_face:',
        'Horse Head'
    ],
    '🐎': [
        'Horse',
        ':horse:',
        'Galloping Horse',
        'Racehorse'
    ],
    '🦄': [
        'Unicorn',
        ':unicorn:',
        'Unicorn Face'
    ],
    '🦓': [
        'Zebra',
        ':zebra:',
        'Zebra Face',
        ':white:',
        ':black:'
    ],
    '🦌': [
        'Deer',
        ':deer:',
        'Buck',
        'Reindeer',
        'Stag'
    ],
    '🐮': [
        'Cow Face',
        ':cow_face:',
        'Cow',
        'Happy Cow'
    ],
    '🐂': [
        'Ox',
        ':ox:',
        'Bull',
        'Bullock',
        'Oxen',
        'Steer'
    ],
    '🐃': [
        'Water Buffalo',
        ':water_buffalo:',
        'Buffalo',
        'Domestic Water Buffalo'
    ],
    '🐄': [
        'Cow',
        ':cow:',
        'Dairy Cow'
    ],
    '🐷': [
        'Pig Face',
        ':pig_fase:',
        'Pig',
        'Pig Head',
        ':pink:'
    ],
    '🐖': [
        'Pig',
        ':pig:',
        'Hog',
        'Sow',
        ':pink:'
    ],
    '🐗': [
        'Boar',
        ':boar:',
        'Warthog',
        'Wild Boar',
        'Wild Pig'
    ],
    '🐽': [
        'Pig Nose',
        ':pig_nose:'
    ],
    '🐏': [
        'Ram',
        ':ram:',
        'Sheep'
    ],
    '🐑': [
        'Ewe',
        ':ewe:',
        'Lamb',
        'Sheep'
    ],
    '🐐': [
        'Goat',
        ':goat:'
    ],
    '🐪': [
        'Camel',
        ':camel:',
        'Arabian Camel',
        'Dromedary Camel',
        'One-Bump Camel'
    ],
    '🐫': [
        'Two-Hump Camel',
        ':two-hump_camel:',
        ':two_hump_camel:',
        'Asian Camel',
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
        'Elephant',
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
        'Mouse Face',
        ':mouse_face:',
        'Mouse'
    ],
    '🐁': [
        'Mouse',
        ':mouse:',
        'Dormouse',
        'Rodent',
        'Mice'
    ],
    '🐀': [
        'Rat',
        ':rat:',
        'Rodent'
    ],
    '🐹': [
        'Hamster',
        ':hamster:',
        'Hamster Face'
    ],
    '🐰': [
        'Rabbit Face',
        ':rabbit_face:',
        'Easter Bunny'
    ],
    '🐇': [
        'Rabbit',
        'Bunny',
        ':rabbit:',
        'Bunny Rabbit'
    ],
    '🐿️': [
        'Chipmunk',
        ':chipmunk:',
        'Squirrel'
    ],
    '🦔': [
        'Hedgehog',
        ':hedgehog:'
    ],
    '🦇': [
        'Bat',
        ':bat:',
        'Batman',
        ':black:'
    ],
    '🐻': [
        'Bear',
        ':bear:',
        'Bear Face',
        'Teddy Bear',
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
        'Badger',
        ':badger:'
    ],
    '🦃': [
        'Turkey',
        ':turkey:',
        'Thanksgiving Turkey',
        'Wild Turkey'
    ],
    '🐔': [
        'Chicken',
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
        'Hatching Chick',
        ':hatching_chick:',
        'Baby Chicken',
        'Chick Hatching',
        ':yellow:'
    ],
    '🐤': [
        'Baby Chick',
        ':baby_chick:',
        'Yellow Bird',
        ':yellow:'
    ],
    '🐥': [
        'Front-Facing Baby Chick',
        ':front_baby_chick:',
        'Baby Chick',
        'Standing Chick',
        ':yellow:'
    ],
    '🐦': [
        'Bird',
        ':bird:'
    ],
    '🐧': [
        'Penguin',
        ':penguin:'
    ],
    '🕊️': [
        'Dove',
        ':Dove:',
        'Dove of Peace',
        ':white:'
    ],
    '🦅': [
        'Eagle',
        ':Eagle:',
        'Bald Eagle'
    ],
    '🦆': [
        'Duck',
        ':Duck:'
    ],
    '🦢': [
        'Swan',
        ':swan:',
        ':white:'
    ],
    '🦉': [
        'Owl',
        ':owl:',
        ':brown:'
    ],
    '🦚': [
        'Peacock',
        ':peacock:'
    ],
    '🦜': [
        'Parrot',
        ':parrot:'
    ],
    '🐸': [
        'Frog',
        ':frog:',
        'Toad',
        'Frog Face',
        ':green:'
    ],
    '🐊': [
        'Crocodile',
        ':crocodile:',
        'Alligator',
        'Croc',
        ':green:'
    ],
    '🐢': [
        'Turtle',
        ':turtle:',
        'Tortoise',
        ':green:'
    ],
    '🦎': [
        'Lizard',
        ':lizard:',
        'Gecko',
        ':green:'
    ],
    '🐍': [
        'Snake',
        ':snake:',
        'Serpent'
    ],
    '🐲': [
        'Dragon Face',
        ':dragon_face:',
        'Dragon Head'
    ],
    '🐉': [
        'Dragon',
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
        'Spouting Whale',
        ':spouting_whale:',
        'Cute Whale'
    ],
    '🐋': [
        'Whale',
        ':whale:'
    ],
    '🐬': [
        'Dolphin',
        ':dolphin:'
    ],
    '🐟': [
        'Fish',
        ':fish:',
        'Freshwater Fish'
    ],
    '🐠': [
        'Tropical Fish',
        ':tropical_fish:',
        'Fish',
        'Yellow-Blue Fish'
    ],
    '🐡': [
        'Blowfish',
        ':blowfish:',
        'Fugu',
        'Pufferfish'
    ],
    '🦈': [
        'Shark',
        ':shark:',
        'Great White Shark'
    ],
    '🐙': [
        'Octopus',
        ':octopus:'
    ],
    '🐚': [
        'Spiral Shell',
        ':spiral_shell:',
        'Seashell',
        'Shell'
    ],
    '🐌': [
        'Snail',
        ':snail:',
        'Slug',
        'Garden Snail'
    ],
    '🦋': [
        'Butterfly',
        ':butterfly:'
    ],
    '🐛': [
        'Bug',
        ':bug:',
        'Caterpillar',
        'Insect'
    ],
    '🐜': [
        'Ant',
        ':ant:',
        'Bug',
        'Insect'
    ],
    '🐝': [
        'Honeybee',
        ':honeybee:',
        'Bee',
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
        'Spider',
        ':spider:'
    ],
    '🦂': [
        'Scorpion',
        ':scorpion:'
    ],
    '🦟': [
        'Mosquito',
        ':mosquito:',
        ':black:'
    ],
    '🦀': [
        'Crab',
        ':crab:',
        ':red:'
    ],
    '🦞': [
        'Lobster',
        ':lobster:'
    ],
    '🦐': [
        'Shrimp',
        ':shrimp:',
        'Prawn'
    ],
    '🦑': [
        'Squid',
        ':squid:'
    ],
    '🦧': [
        'Orangutan',
        ':orangutan:'
    ],
    '🦥': [
        'Sloth',
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
        'Mammoth',
        ':mammoth:',
        ':brown:'
    ],
    '🦫': [
        'Beaver',
        ':beaver:'
    ],
    '🐻‍❄️': [
        'Polar Bear',
        ':polar_bear:',
        ':white:'
    ],
    '🦤': [
        'Dodo',
        ':dodo:'
    ],
    '🦭': [
        'Seal',
        ':seal:'
    ],
    '🪲': [
        'Beetle',
        ':beetle:'
    ],
    '🪳': [
        'Cockroach',
        ':cockroach:'
    ],
    '🪰': [
        'Fly',
        ':fly:'
    ],
    '🪱': [
        'Worm',
        ':worm:'
    ],
    '🦩': [
        'Flamingo',
        ':flamingo:'
    ],
    '🪹': [
        'Empty Nest',
        ':empty_nest:',
        'Birds',
        'Ana Sayfa'
    ],
    '🪺': [
        'Nest with Eggs',
        ':nest_with_eggs:',
        'Birds',
        'Ana Sayfa'
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
        'Heart with Arrow',
        ':heart_with_arrow:',
        'Cupid Arrow',
        'Lovestruck',
        ':pink:'
    ],
    '💝': [
        'Heart with Ribbon',
        ':heart_with_ribbon:',
        'Chocolate Box',
        'Hediye Kutusu',
        'Gift Heart',
        ':red:'
    ],
    '💖': [
        'Sparkling Heart',
        ':sparkling_heart:',
        'Sparkle Heart',
        'Sparkly Heart',
        'Stars Heart',
        ':pink:'
    ],
    '💗': [
        'Growing Heart',
        ':growing_heart:',
        'Multiple Heart',
        'Triple Heart',
        ':pink:'
    ],
    '💓': [
        'Beating Heart',
        ':beating_heart:',
        'Heart Alarm',
        'Heartbeat',
        'Wifi Heart',
        ':pink:'
    ],
    '💞': [
        'Revolving Hearts',
        ':revolving_hearts:',
        'Two Hearts',
        ':pink:'
    ],
    '💕': [
        'Two Hearts',
        ':two_hearts:',
        'Small Hearts',
        'Two Pink Hearts',
        ':pink:'
    ],
    '💟': [
        'Heart Decoration',
        ':heart_decoration:',
        ':purple:'
    ],
    '❣️': [
        'Heart Exclamation',
        ':heart_exclamation:',
        'Heart Above Dot',
        'Red Heart As an Exclamation Mark',
        'Heavy Heart Exclamation Mark Ornament',
        ':red:'
    ],
    '💔': [
        'Broken Heart',
        ':broken_heart:',
        'Breaking Heart',
        'Brokenhearted',
        'Heart Broken',
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
        'I Love You',
        ':red_heart:',
        'Red Heart',
        'Heart',
        'Love Heart',
        'Red Heart',
        ':red:'
    ],
    '🧡': [
        'Orange Heart',
        ':orange_heart:',
        'I Love You',
        ':orange:'
    ],
    '💛': [
        'Yellow Heart',
        ':yellow_heart:',
        '#1 BF Snapchat',
        'Gold Heart',
        'I Love You',
        ':yellow:'
    ],
    '💚': [
        'Green Heart',
        ':green_heart:',
        'Jealous Heart',
        'I Love You',
        ':green:'
    ],
    '💙': [
        'Blue Heart',
        ':blue_heart:',
        'I Love You',
        ':blue:'
    ],
    '💜': [
        'Purple Heart',
        ':purple_heart:',
        'I Love You',
        ':purple:'
    ],
    '🖤': [
        'Black Heart',
        ':black_heart:',
        'Dark Heart',
        'I Love You',
        ':black:'
    ],
    '🤍': [
        'White Heart',
        ':white_heart:',
        'I Love You',
        ':white:'
    ],
    '🤎': [
        'Brown Heart',
        ':brown_heart:',
        'I Love You',
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
        'Hundred Points',
        ':hundred_points:',
        '100',
        '%',
        'Keep It 100',
        'Perfect Score',
        'Hundred Points Symbol'
    ],
    '💬': [
        'Speech Balloon',
        ':speech_balloon:',
        'Chat Bubble',
        'Speech Bubble',
        ':white:'
    ],
    '💭': [
        'Thought Balloon',
        ':thought_balloon:',
        'Thinking Bubble',
        'Thought Bubble',
        ':white:'
    ],
    '💤': [
        'Zzz',
        ':zzz:',
        'Bedtime',
        'Boring',
        'Sleep',
        'Sleeping Sign',
        'Sleeping Symbol'
    ],
    '♠': [
        'Spade Suit',
        ':spade_suit:',
        'Spades',
        'Black Spade Suit'
    ],
    '♥': [
        'Heart Suit',
        ':heart_suit:',
        'Card With Heart',
        'Hearts',
        'Black Heart Suit'
    ],
    '♦': [
        'Diamond Suit',
        ':diamond_suit:',
        'Diamonds',
        'Black Diamond Suit'
    ],
    '♣': [
        'Club Suit',
        ':club_suit:',
        'Clubs',
        'Black Club Suit'
    ],
    '🏧': [
        'ATM Sign',
        ':atm_sign:',
        'ATM',
        'Automated Telleer Machine',
        ':blue:'
    ],
    '🎧': [
        'Headphone',
        ':headphone:',
        'Earphone',
        'iPod',
        'Headphones'
    ],
    '🎵': [
        'Musical Note',
        ':musical_note:',
        'Beamed Pair Of Eighth Notes',
        'Beamed Pair Of Quavers',
        'Music Note'
    ],
    '🎶': [
        'Musical Notes',
        ':musical_notes:',
        'Music',
        'Music Notes',
        'Singing',
        'Multiple Musical Notes'
    ],
    '🔔': [
        'Bell',
        ':bell:',
        'Liberty Bell',
        'Ringer',
        'Wedding Bell',
        ':yellow:'
    ],
    '🔕': [
        'Bell with Slash',
        ':bell_with_slash:',
        'Bildirimler',
        'Ringer Disabled',
        'Muted Bell',
        'Bell with Cancellation Stroke',
        ':yellow:'
    ],
    '🔈': [
        'Speaker Low Volume',
        ':speaker_low_volum:',
        'Volume',
        'Speaker'
    ],
    '🔉': [
        'Speaker Medium Volume',
        ':speaker_medium_volume:',
        'Reduce Volume',
        'Speaker With Medium Volume',
        'Speaker with One Sound Wave'
    ],
    '🔊': [
        'Speaker High Volume',
        ':speaker_high_volume:',
        'Increase Volume',
        'Speaker with Three Sound Waves'
    ],
    '🔇': [
        'Muted Speaker',
        ':muted_speaker:',
        'Mute Volume',
        'Speaker with Cancellation Stroke'
    ],
    '📢': [
        'Loudspeaker',
        ':loudspeaker:',
        'Announcement',
        'PA System',
        'Public Address Loudspeaker'
    ],
    '⛔': [
        'No Entry',
        ':no_entry:',
        ':red:'
    ],
    '🚫': [
        'Prohibited',
        ':prohibited:',
        'Banned',
        'Circle Backslash',
        'Hayır',
        'Red Circle Crossed',
        'Restricted',
        'No Entry Sign',
        ':red:'
    ],
    '🚳': [
        'No Bicycles',
        ':no_bicycles:',
        'No Bikes Sign',
        ':red:',
        ':black:'
    ],
    '🚭': [
        'No Smoking',
        ':no_smoking:',
        'No Smoking Symbol',
        ':red:',
        ':black:'
    ],
    '🚯': [
        'No Littering',
        ':no_littering:',
        'Do Not No Litter Symbol',
        ':red:',
        ':black:'
    ],
    '🚱': [
        'Non-Potable Water',
        ':non-potable_water:',
        ':non_potable_water:',
        'No Water',
        'No Drinking Water',
        'Non-Potable Water Symbol',
        ':red:',
        ':black:'
    ],
    '🚷': [
        'No Pedestrians',
        ':no_pedestrians:',
        'No People',
        'No Walking',
        ':red:',
        ':black:'
    ],
    '🔞': [
        'No One Under Eighteen',
        ':no_one_under_18:',
        'NSFW',
        'No One Under Eighteen Symbol',
        '18',
        ':red:',
        ':black:'
    ],
    '📵': [
        'No Mobile Phones',
        ':no_mobile_phones:',
        'No Cell Phones',
        'No Phones',
        'No Smartphones',
        ':red:',
        ':black:'
    ],
    '☢️': [
        'Radioactive',
        ':radioactive:',
        'International Radiation Symbol',
        'Nuclear',
        'Radioactive Sign',
        ':orange:'
    ],
    '☣️': [
        'Biohazard',
        ':biohazard:',
        'Biohazard Sign',
        ':orange:'
    ],
    '⬆️': [
        'Up Arrow Button',
        ':up_arrow_button:',
        'Arrow Pointing Up',
        'Upwards Black Arrow',
        ':blue:'
    ],
    '↗️': [
        'Up-Right Arrow Button',
        ':up-right_arrow_button:',
        ':up_right_arrow_button:',
        'Diagonal Up-Right Arrow',
        'North East Arrow',
        ':blue:'
    ],
    '➡️': [
        'Right Arrow Button',
        ':right_arrow_button:',
        'Arrow Pointing Right',
        'Black Rightwards Arrow',
        ':blue:'
    ],
    '↘️': [
        'Down-Right Arrow Button',
        ':down-right_arrow_button:',
        ':down_right_arrow_button:',
        'Diagonal Down-Right Arrow',
        'South East Arrow',
        ':blue:'
    ],
    '⬇️': [
        'Down Arrow Button',
        ':down_arrow_button:',
        'Arrow Pointing Down',
        'Downwards Black Arrow',
        ':blue:'
    ],
    '↙️': [
        'Down-Left Arrow Button',
        ':down-left_arrow_button:',
        ':down_left_arrow_button:',
        'Diagonal Down-Left Arrow',
        'South West Arrow',
        ':blue:'
    ],
    '⬅️': [
        'Left Arrow Button',
        ':left_arrow_button:',
        'Arrow Pointing Left',
        'Leftwards Black Arrow',
        ':blue:'
    ],
    '↖️': [
        'Up-Left Arrow Button',
        ':up-left_arrow_button:',
        ':up_left_arrow_button:',
        'Diagonal Up-Left Arrow',
        'North West Arrow',
        ':blue:'
    ],
    '↕️': [
        'Up-Down Arrow Button',
        ':up-down_arrow_button:',
        ':up_down_arrow_button:',
        'Vertical Arrows',
        'Up Down Arrow',
        ':blue:'
    ],
    '↔️': [
        'Left-Right Arrow Button',
        ':left-right_arrow_button:',
        ':left_right_arrow_button:',
        'Horizontal Arrows',
        'Sideways Arrows',
        'Left Right Arrow',
        ':blue:'
    ],
    '↩️': [
        'Right Arrow Curving Left Button',
        ':right_arrow_curving_left_button:',
        'Email Reply',
        'Left Curved Arrow',
        'Leftwards Arrow with Hook',
        ':blue:'
    ],
    '↪️': [
        'Left Arrow Curving Right Button',
        ':left_arrow_curving_right_button:',
        'Email Forward',
        'Right Curved Arrow',
        'Rightwards Arrow with Hook',
        ':blue:'
    ],
    '⤴️': [
        'Right Arrow Curving Up Button',
        ':right_arrow_curving_up_button:',
        'Arrow Pointing Rightwards Then Curving Upwards',
        ':blue:'
    ],
    '⤵️': [
        'Right Arrow Curving Down Button',
        ':right_arrow_curving_down_button:',
        'Curved Down Arrow',
        'Arrow Pointing Rightwards Then Curving Downwards',
        ':blue:'
    ],
    '🔃': [
        'Clockwise Vertical Arrows Button',
        ':clockwise_vertical_button:',
        'Clockwise Downwards and Upwards Open Circle Arrows',
        ':blue:'
    ],
    '🔄': [
        'Counterclockwise Arrows Button',
        ':counterclockwise_button:',
        'Refresh',
        'Rotate',
        'Switch',
        'Counter-Clockwise Arrows',
        'Anticlockwise Downwards and Upwards Open Circle Arrows',
        ':blue:'
    ],
    '🔙': [
        'Back Arrow',
        ':back_arrow:',
        'Back',
        'Back with Leftwards Arrow Above',
        ':black:'
    ],
    '🔚': [
        'End Arrow',
        ':end_arrow:',
        'End',
        'End with Leftwards Arrow Above',
        ':black:'
    ],
    '🔛': [
        'On! Arrow',
        ':on_arrow:',
        'On',
        'On with Exclamation Mark with Left Right Arrow Above',
        ':black:'
    ],
    '🔜': [
        'Soon Arrow',
        ':soon_arrow:',
        'Soon',
        'Soon with Rightwards Arrow Above',
        ':black:'
    ],
    '🔝': [
        'Top Arrow',
        ':top_arrow:',
        'Top',
        'Top with Upwards Arrow Above',
        ':black:'
    ],
    '🛐': [
        'Place of Worship',
        ':place_of_worship:',
        'Religious Building',
        ':purple:'
    ],
    '⚛️': [
        'Atom Symbol',
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
        'Star of David',
        ':star_of_david:',
        'Magen David',
        ':purple:'
    ],
    '☸️': [
        'Wheel of Dharma',
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
        'Latin Cross',
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
        'Star and Crescent',
        ':star_and_crescent:',
        ':purple:'
    ],
    '☮️': [
        'Peace Symbol',
        ':peace:',
        'Peace Sign',
        ':purple:'
    ],
    '🕎': [
        'Menorah',
        ':menorah:',
        'Candelabrum',
        'Candles',
        'Chanukiah',
        'Menorah',
        'Menorah with Nine Branches',
        ':purple:'
    ],
    '🔯': [
        'Dotted Six-Pointed Star',
        ':dotted_six-pointed_star:',
        ':dotted_six_pointed_star:',
        'Six Pointed Star with Middle Dot',
        ':purple:'
    ],
    '🪯': [
        'Khanda',
        ':khanda:',
        'Sikhism',
        ':purple:'
    ],
    '♈': [
        'Aries',
        ':aries:',
        ':zodiac:',
        'Zodiac',
        ':purple:'
    ],
    '♉': [
        'Taurus',
        ':taurus:',
        ':zodiac:',
        'Zodiac',
        ':purple:'
    ],
    '♊': [
        'Gemini',
        ':gemini:',
        ':zodiac:',
        'Zodiac',
        ':purple:'
    ],
    '♋': [
        'Cancer',
        ':cancer:',
        ':zodiac:',
        'Zodiac',
        ':purple:'
    ],
    '♌': [
        'Leo',
        ':leo:',
        ':zodiac:',
        'Zodiac',
        ':purple:'
    ],
    '♍': [
        'Virgo',
        ':virgo:',
        ':zodiac:',
        'Zodiac',
        ':purple:'
    ],
    '♎': [
        'Libra',
        ':libra:',
        ':zodiac:',
        'Zodiac',
        ':purple:'
    ],
    '♏': [
        'Scorpio',
        ':scorpio:',
        ':zodiac:',
        'Scorpius',
        'Zodiac',
        ':purple:'
    ],
    '♐': [
        'Sagittarius',
        ':sagittarius:',
        ':zodiac:',
        'Zodiac',
        ':purple:'
    ],
    '♑': [
        'Capricorn',
        ':capricorn:',
        ':zodiac:',
        'Zodiac',
        ':purple:'
    ],
    '♒': [
        'Aquarius',
        ':aquarius:',
        ':zodiac:',
        'Zodiac',
        ':purple:'
    ],
    '♓': [
        'Pisces',
        ':pisces:',
        ':zodiac:',
        'Zodiac',
        ':purple:'
    ],
    '⛎': [
        'Ophiuchus',
        ':ophiuchus:',
        ':zodiac:',
        'Zodiac',
        ':purple:'
    ],
    '⏭️': [
        'Skip Forward Symbol',
        'Black Right-Pointing Double Triangle with Vertical Bar',
        ':skip_forward_button:',
        'Next Track Button',
        ':blue:'
    ],
    '⏮️': [
        'Skip Backward Symbol',
        'Black Left-Pointing Double Triangle with Vertical Bar',
        ':skip_backward_button:',
        'Last Track Button',
        'Previous Track',
        ':blue:'
    ],
    '⏯️': [
        'Play or Pause Button',
        'Black Right-Pointing Triangle with Double Vertical Bar',
        ':play_button:',
        ':pause_button:',
        ':play_or_pause_button:',
        'Play Symbol',
        'Pause Symbol',
        ':blue:'
    ],
    '🔀': [
        'Shuffle Tracks Button',
        ':shuffle_tracks_button:',
        'Twisted Rightwards Arrows',
        ':blue:'
    ],
    '🔁': [
        'Repeat Button',
        ':repeat_button:',
        'Loop Symbol',
        'Retweet',
        'Clockwise Rightwards and Leftwards Open Circle Arrows',
        ':blue:'
    ],
    '🔂': [
        'Repeat Single Button',
        ':repeat_single_button:',
        'Circle Arrows With Number 1',
        'Loop Once Symbol',
        'Repeat Single Track Symbol',
        'Clockwise Rightwards and Leftwards Open Circle Arrows with Circled One Overlay',
        ':blue:'
    ],
    '▶️': [
        'Play Button',
        ':play_button:',
        'Right Triangle',
        'Right-Pointing Triangle',
        'Black Right-Pointing Triangle',
        ':blue:'
    ],
    '◀️': [
        'Reverse Button',
        ':reverse_button:',
        'Left Triangle',
        'Left-Pointing Triangle',
        'Black Left-Pointing Triangle',
        ':blue:'
    ],
    '🔼': [
        'Upwards Button',
        ':upwards_button:',
        'Up Triangle',
        'Up-Pointing Triangle',
        'Up-Pointing Small Red Triangle',
        ':blue:'
    ],
    '🔽': [
        'Downwards Button',
        ':downwards_button:',
        'Down Triangle',
        'Down-Pointing Triangle',
        'Down-Pointing Small Red Triangle',
        ':blue:'
    ],
    '⏩': [
        'Fast-Forward Button',
        ':fast-forward_button:',
        ':fast_forward_button:',
        'Fast Forward',
        'Fast Forward Symbol',
        'Black Right-Pointing Double Triangle',
        ':blue:'
    ],
    '⏪': [
        'Fast Reverse Button',
        ':fast_reverse_button:',
        'Rewind',
        'Rewind Symbol',
        'Black Left-Pointing Double Triangle',
        ':blue:'
    ],
    '⏫': [
        'Fast Up Button',
        ':fast_up_button:',
        'Up-Pointing Double Triangle',
        'Black Up-Pointing Double Triangle',
        ':blue:'
    ],
    '⏬': [
        'Fast Down Button',
        ':fast_down_button:',
        'Down-Pointing Double Triangle',
        'Black Down-Pointing Double Triangle',
        ':blue:'
    ],
    '⏹️': [
        'Stop Button',
        ':stop_button:',
        'Stop',
        'Stop Symbol',
        'Black Square for Stop',
        ':blue:'
    ],
    '⏏️': [
        'Eject Button',
        ':eject_button:',
        'Eject Symbol',
        ':blue:'
    ],
    '🎦': [
        'Cinema',
        ':cinema_button:',
        'Cinema Screen',
        'Movies',
        'Film',
        'Cinema Symbol',
        'Recording',
        ':blue:'
    ],
    '📶': [
        'Antenna Bars',
        ':antenna_bars_button:',
        'Reception Bars',
        'Signal Strength',
        'Stairs',
        'Signal Strength Symbol',
        'Antenna with Bars',
        ':blue:'
    ],
    '✖️': [
        'Multiply',
        ':multiply:',
        'Times',
        'Multiplication Symbol',
        'Heavy Multiplication X',
        ':black:'
    ],
    '➕': [
        'Plus',
        ':plus:',
        'Plus Symbol',
        'Heavy Plus Sign',
        ':black:'
    ],
    '➖': [
        'Minus',
        ':minus:',
        'Minus Symbol',
        'Heavy Minus Sign',
        ':black:'
    ],
    '➗': [
        'Divide',
        ':divide:',
        'Division Symbol',
        'Heavy Division Sign',
        ':black:'
    ],
    '🟰': [
        'Heavy Equals Sign',
        ':heavy_equals_sign:',
        'Equals',
        'Result',
        ':black:'
    ],
    '♾️': [
        'Infinity',
        ':infinity:',
        'Permanent Paper Sign'
    ],
    '‼️': [
        'Double Exclamation Mark',
        ':double_exclamation_mark:',
        'Red Double Exclamation Mark',
        ':red:'
    ],
    '⁉️': [
        'Exclamation Question Mark',
        ':exclamation_question_mark:',
        'Red Exclamation Mark and Question Mark',
        ':red:'
    ],
    '❓': [
        'Question Mark',
        ':question_mark:',
        'Red Question Mark',
        'Black Question Mark Ornament',
        ':red:'
    ],
    '❔': [
        'White Question Mark',
        ':white_question_mark:',
        ':question_mark:',
        'White Question Mark',
        'White Question Mark Ornament',
        ':white:'
    ],
    '❗': [
        'Exclamation Mark',
        ':exclamation_mark:',
        'Red Exclamation Mark',
        'Heavy Exclamation Mark Symbol',
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
        'Hollow Red Circle',
        ':hollow_red_circle:',
        'Circle',
        'Correct',
        'Red Circle',
        'Circle Mark',
        'Heavy Large Circle',
        ':red:'
    ],
    '☑️': [
        'Check Box with Check',
        ':check_box_with_check:',
        'V',
        'Checkbox',
        'Check Mark In Box',
        'Ballot Box with Check'
    ],
    '✔️': [
        'Check Mark',
        ':check_mark:',
        'V',
        'Check',
        'Tick',
        'Checkmark',
        'Heavy Check Mark',
        ':black:'
    ],
    '❌': [
        'Cross Mark',
        ':cross_mark:',
        'Cross',
        'X',
        ':red:'
    ],
    '✅': [
        'Check Mark Button',
        ':check_mark_button:',
        'V',
        'Green Check Mark',
        'Green Tick',
        'Check Mark',
        'White Heavy Check Mark',
        ':green:'
    ],
    '❎': [
        'Cross Mark Button',
        ':cross_mark_button:',
        'Cross',
        'X',
        'X Mark',
        'Negative Squared Cross Mark',
        ':green:'
    ],
    '#️⃣': [
        'Keycap Number Sign',
        ':hash_key:',
        '#',
        'Hash Key',
        'Hashtag',
        'Octothorpe',
        'Pound Key',
        'Number Sign',
        ':blue:'
    ],
    '*️⃣': [
        'Keycap Asterisk',
        ':asterisk:',
        'Star Keycap',
        ':blue:'
    ],
    '0️⃣': [
        'Number 0',
        ':number_0:',
        'Keycap Digit Zero'
    ],
    '1️⃣': [
        'Number 1',
        ':number_1:',
        'Keycap Digit One'
    ],
    '2️⃣': [
        'Number 2',
        ':number_2:',
        'Keycap Digit Two'
    ],
    '3️⃣': [
        'Number 3',
        ':number_3:',
        'Keycap Digit Three'
    ],
    '4️⃣': [
        'Number 4',
        ':number_4:',
        'Keycap Digit Four'
    ],
    '5️⃣': [
        'Number 5',
        ':number_5:',
        'Keycap Digit Five'
    ],
    '6️⃣': [
        'Number 6',
        ':number_6:',
        'Keycap Digit Six'
    ],
    '7️⃣': [
        'Number 7',
        ':number_7:',
        'Keycap Digit Seven'
    ],
    '8️⃣': [
        'Number 8',
        ':number_8:',
        'Keycap Digit Eight'
    ],
    '9️⃣': [
        'Number 9',
        ':number_9:',
        'Keycap Digit Nine'
    ],
    '🔟': [
        'Number 10',
        ':number_10:',
        'Keycap: 10',
        '10',
        'Keycap Digit Ten'
    ],
    '🔠': [
        'Input Latin Uppercase',
        ':input_latin_uppercase:',
        'ABCD',
        'Uppercase',
        'Input Symbol for Uppercase Letters',
        'Input Symbol for Latin Capital Letters',
        ':blue:'
    ],
    '🔡': [
        'Input Latin Lowercase',
        ':input_latin_lowercase:',
        'abcd',
        'Lowercase',
        'Input Symbol for Lowercase Letters',
        'Input Symbol for Latin Small Letters',
        ':blue:'
    ],
    '🔢': [
        'Input Numbers',
        ':input_numbers:',
        '1234',
        'Numbers',
        'Numeric Input',
        'Input Symbol for Numbers',
        ':blue:'
    ],
    '🔣': [
        'Input Symbol for Symbols',
        ':input_symbols:',
        'Semboller',
        'Symbol Input',
        ':blue:'
    ],
    '🔤': [
        'Input Latin Letters',
        ':input_latin_letters:',
        'abc',
        'Alphabet',
        'Letters',
        'Input Symbol for Letters',
        'Input Symbol for Latin Letters',
        ':blue:'
    ],
    '🅰️': [
        'A Button (Blood Type)',
        ':a_blood:',
        'Blood Type A',
        'Letter A',
        'Negative Squared Latin Capital Letter A',
        ':red:'
    ],
    '🆎': [
        'AB Button (Blood Type)',
        ':ab_blood:',
        'Letters AB',
        'Blood Type AB',
        'Negative Squared AB',
        ':red:'
    ],
    '🅱️': [
        'B Button (Blood Type)',
        ':b_blood:',
        'Letter B',
        'Blood Type B',
        'Negative Squared Latin Capital Letter B',
        ':red:'
    ],
    '🆑': [
        'CL Button',
        ':cl_button:',
        'Clear',
        'Clear Button',
        'CL Sign',
        'Squared CL',
        'Letters CL',
        ':red:'
    ],
    '🆒': [
        'Cool Button',
        ':cool_button:',
        'Cool Square',
        'Cool Sign',
        'Squared Cool',
        ':blue:'
    ],
    '🆓': [
        'Free Button',
        ':free_button:',
        'Free',
        'Free Sign',
        'Squared Free',
        ':blue:'
    ],
    'ℹ️': [
        'Information',
        ':info_button:',
        'Bilgi',
        'Lowercase I',
        'Tourist Information',
        'Information Source',
        ':blue:'
    ],
    '🆔': [
        'ID Button',
        ':id_button:',
        'ID',
        'Identification',
        'Identification Sign',
        'Squared ID',
        ':purple:'
    ],
    '🆕': [
        'New Button',
        ':new_button:',
        'New',
        'New Sign',
        'Squared New',
        ':blue:'
    ],
    '🅾️': [
        'O Button (Blood Type)',
        ':0_blood:',
        'Blood Type O',
        '0',
        'Negative Squared Latin Capital Letter',
        'Letter O',
        ':red:'
    ],
    '🆗': [
        'OK Button',
        ':ok_button:',
        'Tamam',
        'Okay',
        'Square',
        'OK Sign',
        'Squared OK',
        ':blue:'
    ],
    '🅿️': [
        'P Button',
        ':p_button:',
        ':parking_sign:',
        'Parking Sign',
        'Negative Squared Latin Capital Letter',
        'Letter P',
        ':blue:'
    ],
    '🆘': [
        'SOS Button',
        ':sos_button:',
        'Distress Signal',
        'Emergency',
        'SOS',
        'SOS Sign',
        'Squared SOS',
        'Yardım',
        ':red:'
    ],
    '🆙': [
        'Up! Button',
        ':up_button:',
        'Level Up',
        'Up',
        'Up Sign',
        'Squared Up with Exclamation Mark',
        ':blue:'
    ],
    '🆚': [
        'Vs Button',
        ':vs_button:',
        'Squared Vs',
        ':orange:'
    ],
    '🆖': [
        'NG Button',
        ':ng_button:',
        'Squared NG',
        'No Good Sign',
        'No Good',
        ':ng:',
        'Blooper',
        ':blue:'
    ],
    '🔴': [
        'Red Circle',
        ':red_circle:',
        'Large Red Circle',
        ':red:'
    ],
    '🟠': [
        'Orange Circle',
        ':orange_circle:',
        'Large Orange Circle',
        ':orange:'
    ],
    '🟡': [
        'Yellow Circle',
        ':yellow_circle:',
        'Large Yellow Circle',
        ':yellow:'
    ],
    '🟢': [
        'Green Circle',
        ':green_circle:',
        'Large Green Circle',
        ':green:'
    ],
    '🔵': [
        'Blue Circle',
        ':blue_circle:',
        'Large Blue Circle',
        ':blue:'
    ],
    '🟣': [
        'Purple Circle',
        ':purple_circle:',
        'Large Purple Circle',
        ':purple:'
    ],
    '🟤': [
        'Brown Circle',
        ':brown_circle:',
        'Large Brown Circle',
        ':brown:'
    ],
    '⚫': [
        'Black Circle',
        ':black_circle:',
        'Medium Black Circle',
        ':black:'
    ],
    '⚪': [
        'White Circle',
        ':white_circle:',
        'Medium White Circle',
        ':white:'
    ],
    '🟥': [
        'Red Square',
        ':red_square:',
        'Large Red Square',
        ':red:'
    ],
    '🟧': [
        'Orange Square',
        ':orange_square:',
        'Large Orange Square',
        ':orange:'
    ],
    '🟨': [
        'Yellow Square',
        ':yellow_square:',
        'Large Yellow Square',
        ':yellow:'
    ],
    '🟩': [
        'Green Square',
        ':green_square:',
        'Large Green Square',
        ':green:'
    ],
    '🟦': [
        'Blue Square',
        ':blue_square:',
        'Large Blue Square',
        ':blue:'
    ],
    '🟪': [
        'Purple Square',
        ':purple_square:',
        'Large Purple Square',
        ':purple:'
    ],
    '🟫': [
        'Brown Square',
        ':brown_square:',
        'Large Brown Square',
        ':brown:'
    ],
    '⬛': [
        'Black Large Square',
        ':black_large_square:',
        ':black:'
    ],
    '⬜': [
        'White Large Square',
        ':white_large_square:',
        ':white:'
    ],
    '◼️': [
        'Black Medium Square',
        ':black_medium_square:',
        ':black:'
    ],
    '◻️': [
        'White Medium Square',
        ':white_medium_square:',
        ':white:'
    ],
    '◾': [
        'Black Medium Small Square',
        ':black_medium_small_square:',
        ':black:'
    ],
    '◽': [
        'White Medium Small Square',
        ':white_medium_small_square:',
        ':white:'
    ],
    '▪️': [
        'Black Small Square',
        ':black_small_square:',
        ':black:'
    ],
    '▫️': [
        'White Small Square',
        ':white_small_square:',
        ':white:'
    ],
    '💠': [
        'Diamond Shape with a Dot Inside',
        ':diamond_shape_with_dot:',
        'Cuteness',
        'Diamond Flower',
        'Kawaii'
    ],
    '🔶': [
        'Large Orange Diamond',
        ':large_orange_diamond:',
        ':orange:'
    ],
    '🔷': [
        'Large Blue Diamond',
        ':large_blue_diamond:',
        ':blue:'
    ],
    '🔸': [
        'Small Orange Diamond',
        ':small_orange_diamond:',
        ':orange:'
    ],
    '🔹': [
        'Small Blue Diamond',
        ':small_blue_diamond:',
        ':blue:'
    ],
    '🔺': [
        'Red Triangle Pointed Up',
        ':red_triangle_pointed_up:',
        'Up-Pointing Red Triangle',
        ':red:'
    ],
    '🔻': [
        'Red Triangle Pointed Down',
        ':red_triangle_pointed_down:',
        'Down-Pointing Red Triangle',
        ':red:'
    ],
    '🔳': [
        'White Square Button',
        ':white_square_button:',
        ':white:',
        ':black:'
    ],
    '🔲': [
        'Black Square Button',
        ':black_square_button:',
        ':white:',
        ':black:'
    ],
    '©️': [
        'Copyright',
        ':copyright:',
        ':c:',
        'Copyright Sign'
    ],
    '®️': [
        'Registered',
        ':registered:',
        ':r:',
        'Registered Sign'
    ],
    '™️': [
        'Trade Mark',
        ':trade_mark:',
        ':tm:',
        'Trademark',
        'Trade Mark Sign'
    ],
    '🛅': [
        'Left Luggage',
        ':left_luggage:',
        'Bag With Key',
        'Locked Suitcase',
        ':blue:'
    ],
    '🛄': [
        'Baggage Claim',
        ':baggage_claim:',
        ':blue:'
    ],
    '🛃': [
        'Customs',
        ':customs:',
        ':blue:'
    ],
    '🛂': [
        'Passport Control',
        ':passport_control:',
        'Border Control',
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
        'Potable Water Symbol',
        ':potable_water_symbol:',
        'Thirst',
        'Thirsty',
        'Water Tap',
        'Water Faucet'
    ],
    '🇦': [
        'Letter A',
        ':letter_a:',
        ':a:',
        'Regional Indicator Symbol Letter A'
    ],
    '🇧': [
        'Letter B',
        ':letter_b:',
        ':b:',
        'Regional Indicator Symbol Letter B'
    ],
    '🇨': [
        'Letter C',
        ':letter_c:',
        ':c:',
        'Regional Indicator Symbol Letter C'
    ],
    '🇩': [
        'Letter D',
        ':letter_d:',
        ':d:',
        'Regional Indicator Symbol Letter D'
    ],
    '🇪': [
        'Letter E',
        ':letter_e:',
        ':e:',
        'Regional Indicator Symbol Letter E'
    ],
    '🇫': [
        'Letter F',
        ':letter_f:',
        ':f:',
        'Regional Indicator Symbol Letter F'
    ],
    '🇬': [
        'Letter G',
        ':letter_g:',
        ':g:',
        'Regional Indicator Symbol Letter G'
    ],
    '🇭': [
        'Letter H',
        ':letter_h:',
        ':h:',
        'Regional Indicator Symbol Letter H'
    ],
    '🇮': [
        'Letter I',
        ':letter_i:',
        ':i:',
        'Regional Indicator Symbol Letter I'
    ],
    '🇯': [
        'Letter J',
        ':letter_j:',
        ':j:',
        'Regional Indicator Symbol Letter J'
    ],
    '🇰': [
        'Letter K',
        ':letter_k:',
        ':k:',
        'Regional Indicator Symbol Letter K'
    ],
    '🇱': [
        'Letter L',
        ':letter_l:',
        ':l:',
        'Regional Indicator Symbol Letter L'
    ],
    '🇲': [
        'Letter M',
        ':letter_m:',
        ':m:',
        'Regional Indicator Symbol Letter M'
    ],
    '🇳': [
        'Letter N',
        ':letter_n:',
        ':n:',
        'Regional Indicator Symbol Letter N'
    ],
    '🇴': [
        'Letter O',
        ':letter_o:',
        ':o:',
        'Regional Indicator Symbol Letter O'
    ],
    '🇵': [
        'Letter P',
        ':letter_p:',
        ':p:',
        'Regional Indicator Symbol Letter P'
    ],
    '🇶': [
        'Letter Q',
        ':letter_q:',
        ':q:',
        'Regional Indicator Symbol Letter Q'
    ],
    '🇷': [
        'Letter R',
        ':letter_r:',
        ':r:',
        'Regional Indicator Symbol Letter R'
    ],
    '🇸': [
        'Letter S',
        ':letter_s:',
        ':s:',
        'Regional Indicator Symbol Letter S'
    ],
    '🇹': [
        'Letter T',
        ':letter_t:',
        ':t:',
        'Regional Indicator Symbol Letter T'
    ],
    '🇺': [
        'Letter U',
        ':letter_u:',
        ':u:',
        'Regional Indicator Symbol Letter U'
    ],
    '🇻': [
        'Letter V',
        ':letter_v:',
        ':v:',
        'Regional Indicator Symbol Letter V'
    ],
    '🇼': [
        'Letter W',
        ':letter_w:',
        ':w:',
        'Regional Indicator Symbol Letter W'
    ],
    '🇽': [
        'Letter X',
        ':letter_x:',
        ':x:',
        'Regional Indicator Symbol Letter X'
    ],
    '🇾': [
        'Letter Y',
        ':letter_y:',
        ':y:',
        'Regional Indicator Symbol Letter Y'
    ],
    '🇿': [
        'Letter Z',
        ':letter_z:',
        ':z:',
        'Regional Indicator Symbol Letter Z'
    ],
    '💌': [
        'Love Letter',
        ':love_letter:',
        'Heart Envelope',
        'Love Note'
    ],
    '🚮': [
        'Put Litter in Its Place Symbol',
        ':put_litter_in_bing_sign:',
        'Litter in Bin Sign',
        'Put Litter In Trash',
        'Person With Trash'
    ],
    '♿': [
        'Wheelchair Symbol',
        ':wheelchair_symbol:',
        'Accessible Bathroom'
    ],
    '🚹': [
        'Mens Symbol',
        ':mens_symbol:',
        'Mens Symbol',
        'Mens Toilet',
        'Male Restroom',
        'Male WC',
        ':blue:'
    ],
    '🚺': [
        'Womens Symbol',
        ':womens_symbol:',
        'Womens Symbol',
        'Womens Toilet',
        'Female Restroom',
        'Famale WC',
        ':purple:',
        ':pink:'
    ],
    '🚻': [
        'Restroom',
        ':restroom:',
        'Bathroom Sign',
        'Toilet Sign',
        'WC Sign',
        ':blue:'
    ],
    '🚼': [
        'Baby Symbol',
        ':baby_symbol:',
        'Baby Change Station',
        'Baby Change Symbol',
        'Nursery',
        ':orange:'
    ],
    '🚾': [
        'Water Closet',
        ':wc:',
        'WC',
        'Toilet WC',
        ':blue:'
    ],
    '⚠️': [
        'Warning Sign',
        ':warning_sign:',
        'Alert Symbol',
        ':yellow:'
    ],
    '🚸': [
        'Children Crossing',
        ':children_crossing:',
        'Kids Crossing',
        'School Crossing',
        ':yellow:'
    ],
    '🔅': [
        'Low Brightness Symbol',
        ':low_brightness_symbol:',
        'Dim Button',
        'Decrease Brightness'
    ],
    '🔆': [
        'High Brightness Symbol',
        ':high_brightness_symbol:',
        'Increase Brightness',
        'Bright Button'
    ],
    '📳': [
        'Vibration Mode',
        ':vibration_mode:',
        'Phone Heart',
        'Silent Mode',
        ':orange:'
    ],
    '📴': [
        'Mobile Phone Off',
        ':mobile_phone_off:',
        ':orange:'
    ],
    '〰️': [
        'Wave',
        'Wavy Dash',
        ':wave:'
    ],
    '💱': [
        'Currency Exchange',
        ':currency_exchange:'
    ],
    '💲': [
        'Heavy Dollar Sign',
        ':dollar_symbol:',
        'Dollar',
        'Dollar Sign'
    ],
    '♻️': [
        'Black Universal Recycling Symbol',
        ':recycling_symbol:',
        'Recycling Symbol',
        'Recycle Logo',
        ':green:'
    ],
    '🔱': [
        'Trident Emblem',
        ':trident_emblem:',
        'Pitchfork',
        'Trident'
    ],
    '📛': [
        'Name Badge',
        ':name_badge:',
        'Tofu On Fire',
        'Name Tag',
        'Fire Tag'
    ],
    '🔰': [
        'Japanese Symbol for Beginner',
        ':japanese_symbol_beginner:',
        'Shoshinsha Mark',
        'Yellow Green Shield',
        ':green:',
        ':yellow:'
    ],
    '➰': [
        'Curly Loop',
        ':curly_loop:',
        'Curling Loop',
        'Loop'
    ],
    '➿': [
        'Double Curly Loop',
        ':double_curly_loop:',
        'Double Curling Loop',
        'Voicemail'
    ],
    '〽️': [
        'Part Alternation Mark',
        ':part_alternation_mark:',
        'M',
        'McDonalds'
    ],
    '✳️': [
        'Eight Spoked Asterisk',
        ':eight_spoked_asterisk:',
        ':green:'
    ],
    '✴️': [
        'Eight Pointed Black Star',
        ':eight_pointed_star:',
        'Orange Star',
        'Eight Pointed Star',
        ':orange:'
    ],
    '❇️': [
        'Sparkle',
        ':sparkle:',
        ':green:'
    ],
    'Ⓜ️': [
        'Circled M',
        'Circled Latin Capital Letter M',
        ':circled_m:',
        'Metro',
        ':blue:'
    ],
    '🈁': [
        'Japanese Word Sign Meaning Here',
        'Squared Katakana Koko',
        ':japanese_here:',
        'Here',
        'Destination',
        ':blue:'
    ],
    '🈂️': [
        'Japanese Sign Meaning Service or Service Charge',
        'Squared Katakana Sa',
        ':japanese_service:',
        ':blue:'
    ],
    '🈷️': [
        'Japanese Sign Meaning Monthly Amount',
        'Squared CJK Unified Ideograph-6708',
        ':japanese_monthly_amouny:',
        'Radical 74',
        '月',
        ':orange:'
    ],
    '🈶': [
        'Japanese Sign Meaning Not Free of Charge',
        'Squared CJK Unified Ideograph-6709',
        ':japanese_own:',
        'Own',
        '有',
        ':orange:'
    ],
    '🈯': [
        'Japanese Sign Meaning Reserved',
        'Squared CJK Unified Ideograph-6307',
        ':japanese_reserved:',
        'Finger Point',
        '指',
        ':green:'
    ],
    '🉐': [
        'Japanese Sign Meaning Bargain',
        'Circled Ideograph Advantage',
        ':japanese_acquire:',
        'Acquire',
        '得',
        ':red:'
    ],
    '🈹': [
        'Japanese Sign Meaning Discount',
        'Squared CJK Unified Ideograph-5272',
        ':japanese_discount:',
        'Bargain Sale',
        '割',
        ':red:'
    ],
    '🈚': [
        'Japanese Sign Meaning Free of Charge',
        'Squared CJK Unified Ideograph-7121',
        ':japanese_lacking:',
        'Lacking',
        '無',
        ':orange:'
    ],
    '🈲': [
        'Japanese Sign Meaning Prohibited',
        'Squared CJK Unified Ideograph-7981',
        ':japanese_prohibited:',
        'Forbid',
        '禁',
        ':red:'
    ],
    '🉑': [
        'Japanese Sign Meaning Acceptable',
        'Circled Ideograph Accept',
        ':japanese_accept:',
        'Accept',
        ':orange:'
    ],
    '🈸': [
        'Japanese Sign Meaning Application',
        'Squared CJK Unified Ideograph-7533',
        ':japanese_application_form:',
        'Application Form',
        'Monkey',
        'Request',
        '申',
        ':orange:'
    ],
    '🈴': [
        'Japanese Sign Meaning Passing (Grade)',
        'Squared CJK Unified Ideograph-5408',
        ':japanese_agreement:',
        'Agreement',
        '合',
        ':red:'
    ],
    '🈳': [
        'Japanese Sign Meaning Vacancy',
        'Squared CJK Unified Ideograph-7a7a',
        ':japanese_available:',
        'Empty and Available',
        '空',
        ':blue:'
    ],
    '㊗️': [
        'Japanese Sign Meaning Congratulations',
        'Circled Ideograph Congratulation',
        ':japanese_congratulations:',
        ':red:'
    ],
    '㊙️': [
        'Circled Ideograph Secret',
        ':japanese_secret:',
        'Japanese Sign Meaning Secret',
        'Secret',
        ':red:'
    ],
    '🈺': [
        'Japanese Sign Meaning Open for Business',
        'Squared CJK Unified Ideograph-55b6',
        ':japanese_open_for_business:',
        'Work',
        '営',
        ':orange:'
    ],
    '🈵': [
        'Japanese Sign Meaning Full; No Vacancy',
        'Squared CJK Unified Ideograph-6e80',
        ':japanese_full:',
        'Full',
        '満',
        ':red:'
    ],
    '🔘': [
        'Radio Button',
        ':radio_button:'
    ],
    '🛑': [
        'Stop Sign',
        ':stop_sign:',
        'Octagonal Sign',
        ':red:'
    ],
    '⚕️': [
        'Medical Symbol',
        ':medical_symbol:',
        'Aesculapius',
        'Asklepios',
        'Rod of Asclepius',
        'Staff of Aesculapius'
    ],
    '🛗': [
        'Elevator',
        ':elevator:',
        ':lift:',
        'Lift'
    ],
    '⚧️': [
        'Transgender Symbol',
        ':transgender_sign:'
    ],
    '♂️': [
        'Male Sign',
        ':male_sign:',
        'Man Symbol',
        'Mars Symbol'
    ],
    '♀️': [
        'Female Sign',
        ':female_sign:',
        'Woman Symbol',
        'Venus Symbol'
    ]
};
/*food and drinks*/
emojis_language[lang][6] = {
    '🍇': [
        'Grapes',
        ':grapes:',
        'Grape',
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
        'Watermelon',
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
        'Lemonade',
        ':yellow:'
    ],
    '🍌': [
        'Banana',
        ':banana:',
        'Plantain',
        ':yellow:'
    ],
    '🍍': [
        'Pineapple',
        ':pineapple:'
    ],
    '🥭': [
        'Mango',
        ':mango:'
    ],
    '🍎': [
        'Red Apple',
        ':red_apple:',
        ':apple:',
        'Red Delicious Apple',
        ':red:'
    ],
    '🍏': [
        'Green Apple',
        ':green_apple:',
        ':apple:',
        'Golden Delicious Apple',
        'Granny Smith Apple',
        ':green:'
    ],
    '🍐': [
        'Pear',
        ':pear:'
    ],
    '🍑': [
        'Peach',
        ':peach:',
        'Bottom',
        'Butt',
        ':orange:',
        ':pink:'
    ],
    '🍒': [
        'Cherries',
        ':cherry:',
        'Cherry',
        'Wild Cherry',
        ':red:'
    ],
    '🍓': [
        'Strawberry',
        ':strawberry:',
        ':red:'
    ],
    '🥝': [
        'Kiwi Fruit',
        ':kiwi:',
        'Chinese Gooseberry',
        'Kiwi',
        'Kiwifruit',
        ':green:'
    ],
    '🍅': [
        'Tomato',
        ':tomato:',
        ':red:'
    ],
    '🥥': [
        'Coconut',
        ':coconut:',
        'Cocoanut'
    ],
    '🥑': [
        'Avocado',
        ':avocado:',
        ':green:'
    ],
    '🍆': [
        'Eggplant',
        ':eggplant:',
        ':aubergine:',
        'Aubergine',
        'Phallic',
        'Purple Vegetable',
        ':purple:'
    ],
    '🥔': [
        'Potato',
        ':potato:',
        'Baked Potato',
        'Idaho Potato'
    ],
    '🥕': [
        'Carrot',
        ':carrot:',
        ':orange:'
    ],
    '🌽': [
        'Ear of Corn',
        ':ear_of_corn:',
        'Corn',
        'Corn On The Cob',
        'Maize',
        'Ear of Maize'
    ],
    '🌶️': [
        'Hot Pepper',
        ':hot_pepper:',
        'Chili Pepper',
        'Spicy',
        ':red:'
    ],
    '🥒': [
        'Cucumber',
        ':cucumber:',
        'Gherkin',
        'Pickle',
        ':green:'
    ],
    '🥬': [
        'Leafy Green',
        ':leafy_green:',
        'Bok Choy',
        'Chinese Cabbage',
        'Cos Lettuce',
        'Romaine Lettuce',
        'Leafy Greens',
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
        'Mushroom',
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
        'Nuts',
        ':brown:'
    ],
    '🌰': [
        'Chestnut',
        ':chestnut:',
        'Acorn',
        'Nut',
        ':brown:'
    ],
    '🍞': [
        'Bread',
        ':bread:',
        'Loaf Of Bread',
        ':brown:'
    ],
    '🥐': [
        'Croissant',
        ':croissant:',
        ':brown:'
    ],
    '🥖': [
        'Baguette Bread',
        ':baguette_bread:',
        'French Bread',
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
        'Pancakes',
        ':pancakes:',
        'Crêpes',
        'Hotcakes',
        ':yellow:'
    ],
    '🧀': [
        'Cheese Wedge',
        ':cheese_wedge:',
        'Cheese',
        ':yellow:'
    ],
    '🍖': [
        'Meat on Bone',
        ':meat_on_bone:',
        'BBQ',
        'Barbecue',
        'Manga Meat',
        ':red:'
    ],
    '🍗': [
        'Poultry Leg',
        ':poultry_leg:',
        'Drumstick',
        'Turkey Leg',
        ':red:'
    ],
    '🥩': [
        'Cut of Meat',
        ':cut_of_meat:',
        'Meat',
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
        'French Fries',
        ':french_fries:',
        'Chips',
        'Fries',
        'McDonalds Fries',
        ':yellow:'
    ],
    '🍕': [
        'Pizza',
        ':pizza:',
        'Pepperoni Pizza',
        'Slice of Pizza',
        ':red:'
    ],
    '🌭': [
        'Hot Dog',
        ':hot_dog:',
        'Hotdog',
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
        'Wrap'
    ],
    '🥙': [
        'Stuffed Flatbread',
        ':stuffed_flatbread:',
        'Doner Kebab',
        'Gyro',
        'Shawarma',
        'Pita Sandwich'
    ],
    '🍳': [
        'Cooking',
        ':cooking:',
        'Breakfast',
        'Fried Egg',
        'Frying Pan'
    ],
    '🥘': [
        'Shallow Pan of Food',
        ':shallow_pan_of_food:',
        'Paella',
        'Pan of Food'
    ],
    '🍲': [
        'Pot of Food',
        ':pot_of_food:',
        'Bowl Of Food',
        'Soup',
        'Stew'
    ],
    '🥣': [
        'Bowl with Spoon',
        ':bowl_with_spoon:',
        'Cereal Bowl'
    ],
    '🥗': [
        'Green Salad',
        ':green_salad:',
        'Salad',
        ':green:'
    ],
    '🍿': [
        'Popcorn',
        ':popcorn:',
        'Popping Corn'
    ],
    '🧂': [
        'Salt',
        ':salt:',
        'Salt Shaker',
        ':white:'
    ],
    '🥫': [
        'Canned Food',
        ':canned_food:',
        'Can of Food',
        'Tin Can',
        'Tinned Food'
    ],
    '🍱': [
        'Bento Box',
        ':bento_box:',
        'Lunch Box'
    ],
    '🍘': [
        'Rice Cracker',
        ':rice_cracker:',
        'Cracker'
    ],
    '🍙': [
        'Rice Ball',
        ':rice_ball:',
        'Onigiri'
    ],
    '🍚': [
        'Cooked Rice',
        ':cooked_rice:',
        'Boiled Rice',
        'Rice',
        'Bowl Of Rice',
        'Steamed Rice'
    ],
    '🍛': [
        'Curry Rice',
        ':curry_rice:',
        'Curry',
        'Indian Food',
        'Curry and Rice'
    ],
    '🍜': [
        'Steaming Bowl',
        ':steaming_bowl:',
        'Noodles',
        'Noodles With Chopsticks',
        'Ramen'
    ],
    '🍝': [
        'Spaghetti',
        ':spaghetti:',
        'Pasta'
    ],
    '🍠': [
        'Roasted Sweet Potato',
        ':roasted_sweet_potato:',
        'Sweet Potato',
        'Yam'
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
        'Seafood',
        ':pink:'
    ],
    '🍤': [
        'Fried Shrimp',
        ':fried_shrimp:',
        'Fried Prawn',
        'Shrimp Tempura'
    ],
    '🍥': [
        'Fish Cake with Swirl',
        ':fish_cake_with_swirl:',
        'Fishcake',
        'Pink Swirl'
    ],
    '🥮': [
        'Moon Cake',
        ':moon_cake:',
        'Mooncake'
    ],
    '🍡': [
        'Dango',
        ':dango:',
        'Dessert Stick',
        'Pink White Green Balls'
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
        'Takeout Box',
        ':takeout_box:',
        'Chinese Food Box',
        'Oyster Pail'
    ],
    '🍦': [
        'Soft Ice Cream',
        ':soft_ice_cream:',
        'Mr Whippy',
        'Soft Serve'
    ],
    '🍧': [
        'Shaved Ice',
        ':shaved_ice:',
        'Snow Cone'
    ],
    '🍨': [
        'Ice Cream',
        ':ice_cream:',
        'Bowl Of Ice Cream',
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
        'Biscuit',
        'Chocolate Chip Cookie',
        ':brown:'
    ],
    '🎂': [
        'Birthday Cake',
        ':birthday_cake:',
        'Birthday',
        'Cake',
        'Cake With Candles'
    ],
    '🍰': [
        'Shortcake',
        ':shortcake:',
        'Cake',
        'Piece Of Cake',
        'Strawberry Shortcake'
    ],
    '🧁': [
        'Cupcake',
        ':cupcake:',
        'Fairy Cake'
    ],
    '🥧': [
        'Pie',
        ':pie:'
    ],
    '🍫': [
        'Chocolate Bar',
        ':chocolate_bar:',
        'Candy Bar',
        'Chocolate',
        ':brown:'
    ],
    '🍬': [
        'Candy',
        ':candy:',
        'Lolly',
        'Sweet'
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
        'Honey Pot',
        ':honey_pot:',
        'Honey',
        'Pot',
        ':yellow:'
    ],
    '🍼': [
        'Baby Bottle',
        ':baby_bottle:',
        'Bottle Feeding'
    ],
    '🥛': [
        'Glass of Milk',
        ':glass_of_milk:',
        'Milk',
        ':white:'
    ],
    '☕': [
        'Hot Beverage',
        ':hot_beverage:',
        'Coffee',
        'Espresso',
        'Hot Chocolate',
        'Tea'
    ],
    '🍵': [
        'Teacup Without Handle',
        ':green_tea:',
        'Green Tea',
        'Matcha',
        'Matcha Green Tea',
        ':green:'
    ],
    '🍶': [
        'Sake',
        ':sake:',
        'Bottle',
        'Rice Wine',
        'Sake Bottle and Cup'
    ],
    '🍾': [
        'Bottle with Popping Cork',
        ':champagne:',
        'Celebration',
        'Champagne',
        'Sparkling Wine'
    ],
    '🍷': [
        'Wine Glass',
        ':wine_glass:',
        'Alcohol',
        'Red Wine',
        'Wine'
    ],
    '🍸': [
        'Cocktail Glass',
        ':cocktail_glass:',
        'Cocktail',
        'Martini'
    ],
    '🍹': [
        'Tropical Drink',
        ':tropical_drink:',
        'Fruit Punch',
        'Tiki Drink'
    ],
    '🍺': [
        'Beer Mug',
        ':beer_mug:',
        'Beer',
        'Beer Stein',
        ':yellow:'
    ],
    '🍻': [
        'Clinking Beer Mugs',
        ':clinking_beer_mugs:',
        'Beers',
        'Cheers'
    ],
    '🥂': [
        'Clinking Glasses',
        ':clinking_glasses:',
        'Celebration',
        'Champagne Glasses',
        'Cheers'
    ],
    '🥃': [
        'Tumbler Glass',
        ':tumbler_glass:',
        'Bourbon',
        'Liquor',
        'Rum',
        'Whiskey',
        'Whisky'
    ],
    '🥤': [
        'Cup with Straw',
        ':cup_with_straw:',
        'Milkshake',
        'Smoothie',
        'Soda Pop',
        'Soft Drink'
    ],
    '🥢': [
        'Chopsticks',
        ':chopsticks:'
    ],
    '🍽️': [
        'Fork and Knife with Plate',
        ':fork_and_knife_with_plate:',
        'Dinner',
        ':white:',
        ':gray:',
        ':grey:'
    ],
    '🍴': [
        'Fork and Knife',
        ':fork_and_knife:',
        'Cutlery',
        'Knife And Fork',
        'Silverware',
        ':gray:',
        ':grey:'
    ],
    '🥄': [
        'Spoon',
        ':spoon:',
        ':gray:',
        ':grey:'
    ],
    '🧄': [
        'Garlic',
        ':garlic:'
    ],
    '🧅': [
        'Onion',
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
        'Beverage Box',
        ':beverage_box:',
        'Juice Box'
    ],
    '🧉': [
        'Mate Drink',
        ':mate_drink:',
        'Chimarrão',
        'Cimarrón',
        'Yerba Mate'
    ],
    '🫒': [
        'Olive',
        ':olive:',
        ':green:'
    ],
    '🫐': [
        'Blueberries',
        ':blueberries:',
        ':blue:'
    ],
    '🫑': [
        'Bell Pepper',
        ':bell_pepper:',
        ':green:'
    ],
    '🫓': [
        'Flatbread',
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
        'Bubble Tea',
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
        'Coffee beans',
        'Spill the beans'
    ],
    '🫗': [
        'Pouring Liquid',
        ':puring_liquid:',
        'Pouring Drink',
        'Water'
    ]
};
/*flags*/
emojis_language[lang][7] = {
    '🏁': [
        'Chequered Flag',
        ':chequered_flag:',
        'Checkered Flag',
        'Grid Girl',
        'Racing Flag',
        ':black:',
        ':white:'
    ],
    '🚩': [
        'Triangular Flag',
        ':triangular_flag:',
        'Flag on Pole',
        'Red Flag',
        'Triangular Flag on Post',
        ':red:'
    ],
    '🎌': [
        'Crossed Flags',
        ':crossed_flags:',
        'Two Flags'
    ],
    '🏴': [
        'Black Flag',
        ':black_flag:',
        'Waving Black Flag',
        ':black:'
    ],
    '🏳️': [
        'White Flag',
        ':white_flag:',
        'Waving White Flag',
        ':white:'
    ],
    '🏳️‍🌈': [
        'Rainbow Flag',
        ':rainbow_flag:',
        'Pride Flag',
        'LGBT',
        'LGBTQIA+',
        'Gay',
        'Transgender',
        'Lesbian',
        'Asexual',
        'Queer'
    ],
    '🏳️‍⚧️': [
        'Transgender Flag',
        ':transgender_flag:',
        'Blue, Pink, and White Flag',
        'Trans Flag',
        'Blue',
        'Pink'
    ],
    '🏴‍☠️': [
        'Pirate Flag',
        ':pirate_flag:',
        'Jolly Roger',
        ':black:',
        'Corsair',
        'Privateer',
        'Buccaneer'
    ],
    '🇺🇳': [
        'Flag of United Nations',
        ':un:',
        'Flag: United Nations'
    ],
    '🇪🇺': [
        'Flag of European Union',
        ':eu:',
        'Flag: European Union',
        'EU Flag'
    ],
    '🇦🇨': [
        'Flag of Ascension Island',
        ':ac:'
    ],
    '🇦🇩': [
        'Flag of Andorra',
        ':ad:',
        'Andorran Flag'
    ],
    '🇦🇪': [
        'Flag of United Arab Emirates',
        ':ae:',
        'Emirati Flag',
        'UAE Flag'
    ],
    '🇦🇫': [
        'Flag of Afghanistan',
        ':af:',
        'Afghan Flag'
    ],
    '🇦🇬': [
        'Flag of Antigua & Barbuda',
        ':ag:'
    ],
    '🇦🇮': [
        'Flag of Anguilla',
        ':ai:',
        'Anguillan Flag'
    ],
    '🇦🇱': [
        'Flag of Albania',
        ':al:',
        'Albanian Flag'
    ],
    '🇦🇲': [
        'Flag of Armenia',
        ':am:',
        'Armenia Flag'
    ],
    '🇦🇴': [
        'Flag of Angola',
        ':ao:',
        'Angolan Flag'
    ],
    '🇦🇶': [
        'Flag of Antarctica',
        ':aq:',
        'Antarctic Flag'
    ],
    '🇦🇷': [
        'Flag of Argentina',
        ':ar:',
        'Argentinian Flag'
    ],
    '🇦🇸': [
        'Flag of American Samoa',
        ':as:',
        'American Samoan Flag'
    ],
    '🇦🇹': [
        'Flag of Austria',
        ':at:',
        'Austrian Flag'
    ],
    '🇦🇺': [
        'Flag of Australia',
        ':au:',
        'Aussie Flag',
        'Australian Flag'
    ],
    '🇦🇼': [
        'Flag of Aruba',
        ':aw:',
        'Aruban Flag'
    ],
    '🇦🇽': [
        'Flag of Åland Islands',
        ':ax:',
        'Åland Flag'
    ],
    '🇦🇿': [
        'Flag of Azerbaijan',
        ':az:',
        'Azerbaijani Flag'
    ],
    '🇧🇦': [
        'Flag of Bosnia & Herzegovina',
        ':ba:'
    ],
    '🇧🇧': [
        'Flag of Barbados',
        ':bb:',
        'Barbadian Flag',
        'Bajan Flag'
    ],
    '🇧🇩': [
        'Flag of Bangladesh',
        ':bd:',
        'Bangladeshi Flag'
    ],
    '🇧🇪': [
        'Flag of Belgium',
        ':be:',
        'Belgian Flag'
    ],
    '🇧🇫': [
        'Flag of Burkina Faso',
        ':bf:',
        'Burkinabe Flag'
    ],
    '🇧🇬': [
        'Flag of Bulgaria',
        ':bg:',
        'Bulgarian Flag'
    ],
    '🇧🇭': [
        'Flag of Bahrain',
        ':bh:',
        'Bahrani Flag',
        'Bahrainian Flag'
    ],
    '🇧🇮': [
        'Flag of Burundi',
        ':bi:',
        'Burundian Flag'
    ],
    '🇧🇯': [
        'Flag of Benin',
        ':bj:',
        'Beninese Flag'
    ],
    '🇧🇱': [
        'Flag of Saint Barthélemy',
        ':bl:',
        'Flag: St. Barthélemy'
    ],
    '🇧🇲': [
        'Flag of Bermuda',
        ':bm:',
        'Bermudan Flag'
    ],
    '🇧🇳': [
        'Flag of Brunei',
        ':bn:',
        'Bruneian Flag'
    ],
    '🇧🇴': [
        'Flag of Bolivia',
        ':bo:',
        'Bolivian Flag'
    ],
    '🇧🇶': [
        'Flag of Caribbean Netherlands',
        ':bq:',
        'Bonaire'
    ],
    '🇧🇷': [
        'Flag of Brazil',
        ':br:',
        'Brazilian Flag'
    ],
    '🇧🇸': [
        'Flag of Bahamas',
        ':bs:',
        'Bahamian Flag'
    ],
    '🇧🇹': [
        'Flag of Bhutan',
        ':bt:',
        'Bhutanese Flag'
    ],
    '🇧🇻': [
        'Flag of Bouvet Island',
        ':bv:',
        'Flag: Bouvet Island'
    ],
    '🇧🇼': [
        'Flag of Botswana',
        ':bw:',
        'Batswana Flag'
    ],
    '🇧🇾': [
        'Flag of Belarus',
        ':by:',
        'Belarusian Flag'
    ],
    '🇧🇿': [
        'Flag of Belize',
        ':bz:',
        'Belizean Flag'
    ],
    '🇨🇦': [
        'Flag of Canada',
        'Canadian Flag',
        ':ca:'
    ],
    '🇨🇨': [
        'Flag of Cocos (Keeling) Islands',
        ':cc:'
    ],
    '🇨🇩': [
        'Flag of Congo - Kinshasa',
        ':cd:'
    ],
    '🇨🇫': [
        'Flag of Central African Republic',
        ':cf:',
        'Central African Flag'
    ],
    '🇨🇬': [
        'Flag of Congo - Brazzaville',
        ':cg:'
    ],
    '🇨🇭': [
        'Flag of Switzerland',
        ':ch:',
        'Red Cross',
        'Swiss Flag'
    ],
    '🇨🇮': [
        'Flag of Ivory Coast',
        ':ci:',
        'Flag: Côte d’Ivoire'
    ],
    '🇨🇰': [
        'Flag of Cook Islands',
        ':ck:',
        'Cook Islander Flag'
    ],
    '🇨🇱': [
        'Flag of Chile',
        ':cl:',
        'Chilean Flag'
    ],
    '🇨🇲': [
        'Flag of Cameroon',
        ':cm:',
        'Cameroonian Flag'
    ],
    '🇨🇳': [
        'Flag of China',
        ':cn:',
        'Chinese Flag'
    ],
    '🇨🇴': [
        'Flag of Colombia',
        ':co:',
        'Colombian Flag'
    ],
    '🇨🇵': [
        'Flag of Clipperton Island',
        ':cp:',
        'Flag: Clipperton Island'
    ],
    '🇨🇷': [
        'Flag of Costa Rica',
        ':cr:',
        'Costa Rican Flag'
    ],
    '🇨🇺': [
        'Flag of Cuba',
        ':cu:',
        'Cuban Flag'
    ],
    '🇨🇻': [
        'Flag of Cape Verde',
        ':cv:',
        'Cape Verdian Flag'
    ],
    '🇨🇼': [
        'Flag of Curaçao',
        ':cw:',
        'Curaçaoan Flag'
    ],
    '🇨🇽': [
        'Flag of Christmas Island',
        ':cx:',
        'Christmas Island Flag'
    ],
    '🇨🇾': [
        'Flag of Cyprus',
        ':cy:',
        'Cypriot Flag'
    ],
    '🇨🇿': [
        'Flag of Czechia',
        ':cz:',
        'Czech Flag'
    ],
    '🇩🇪': [
        'Flag of Germany',
        ':de:',
        'Deutsch Flag',
        'German Flag'
    ],
    '🇩🇬': [
        'Flag of Diego Garcia',
        ':dg:',
        'Flag: Diego Garcia'
    ],
    '🇩🇯': [
        'Flag of Djibouti',
        ':dj:',
        'Djibouti Flag',
        'Djiboutian Flag'
    ],
    '🇩🇰': [
        'Flag of Denmark',
        ':dk:',
        'Danish Flag'
    ],
    '🇩🇲': [
        'Flag of Dominica',
        ':dm:'
    ],
    '🇩🇴': [
        'Flag of Dominican Republic',
        ':do:',
        'Dom Rep Flag',
        'Dominican Flag'
    ],
    '🇩🇿': [
        'Flag of Algeria',
        ':dz:',
        'Algerian Flag'
    ],
    '🇪🇦': [
        'Flag of Ceuta & Melilla',
        ':ea:',
        'Flag of Melilla',
        'Flag of Ceuta',
        'Flag: Ceuta & Melilla'
    ],
    '🇪🇨': [
        'Flag of Ecuador',
        ':ec:',
        'Ecuadorian Flag'
    ],
    '🇪🇪': [
        'Flag of Estonia',
        ':ee:',
        'Estonian Flag'
    ],
    '🇪🇬': [
        'Flag of Egypt',
        ':eg:',
        'Egyptian Flag'
    ],
    '🇪🇭': [
        'Flag of Western Sahara',
        ':eh:',
        'Western Saharan Flag'
    ],
    '🇪🇷': [
        'Flag of Eritrea',
        ':er:',
        'Eritrean Flag'
    ],
    '🇪🇹': [
        'Flag of Ethiopia',
        ':et:',
        'Ethiopian Flag'
    ],
    '🇪🇸': [
        'Flag of Spain',
        ':es:',
        'Spanish Flag'
    ],
    '🇫🇮': [
        'Flag of Finland',
        ':fi:',
        'Finnish Flag'
    ],
    '🇫🇯': [
        'Flag of Fiji',
        ':fj:',
        'Fijian Flag'
    ],
    '🇫🇰': [
        'Flag of Falkland Islands',
        ':fk:',
        'Falklander Flag'
    ],
    '🇫🇲': [
        'Flag of Micronesia',
        ':fm:',
        'Micronesian Flag'
    ],
    '🇫🇴': [
        'Flag of Faroe Islands',
        ':fo:',
        'Faroe Islander Flag'
    ],
    '🇫🇷': [
        'Flag of France',
        ':fr:',
        'French Flag'
    ],
    '🇬🇦': [
        'Flag of Gabon',
        ':ga:',
        'Gabonese Flag'
    ],
    '🇬🇧': [
        'Flag of Great Britain',
        ':gb:',
        'British Flag',
        'United Kingdom',
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
        'Flag of Grenada',
        ':gd:',
        'Grenadian Flag'
    ],
    '🇬🇪': [
        'Flag of Georgia',
        ':ge:',
        'Georgian Flag'
    ],
    '🇬🇫': [
        'Flag of French Guiana',
        ':gf:',
        'French Guinean Flag'
    ],
    '🇬🇬': [
        'Flag of Guernsey',
        ':gg:',
        'Guernsey Flag'
    ],
    '🇬🇭': [
        'Flag of Ghana',
        ':gh:',
        'Ghanaian Flag'
    ],
    '🇬🇮': [
        'Flag of Gibraltar',
        ':gi:',
        'Gibraltarian Flag'
    ],
    '🇬🇱': [
        'Flag of Greenland',
        ':gl:',
        'Greenlandic Flag'
    ],
    '🇬🇲': [
        'Flag of Gambia',
        ':gm:',
        'Gambian Flag'
    ],
    '🇬🇳': [
        'Flag of Guinea',
        ':gn:',
        'Guinean Flag'
    ],
    '🇬🇵': [
        'Flag of Guadeloupe',
        ':gp:',
        'Guadeloupean Flag'
    ],
    '🇬🇶': [
        'Flag of Equatorial Guinea',
        ':gq:',
        'Equatorial Guinean Flag',
        'Equatoguinean Flag'
    ],
    '🇬🇷': [
        'Flag of Greece',
        ':gr:',
        'Greek Flag'
    ],
    '🇬🇸': [
        'Flag of South Georgia & the South Sandwich Islands',
        ':gs:'
    ],
    '🇬🇹': [
        'Flag of Guatemala',
        ':gt:',
        'Guatemalan Flag'
    ],
    '🇬🇺': [
        'Flag of Guam',
        ':gu:',
        'Guamanian Flag',
        'Chamorro Flag'
    ],
    '🇬🇼': [
        'Flag of Guinea-Bissau',
        ':gw:',
        'Guinea-Bissau Flag'
    ],
    '🇬🇾': [
        'Flag of Guyana',
        ':gy:',
        'Guyanese Flag'
    ],
    '🇭🇰': [
        'Flag of Hong Kong SAR China',
        ':hk:',
        'Hong Kong Flag'
    ],
    '🇭🇲': [
        'Flag of Heard & McDonald Islands',
        ':hm:',
        'Flag: Heard & McDonald Islands'
    ],
    '🇭🇳': [
        'Flag of Honduras',
        ':hn:',
        'Honduran Flag'
    ],
    '🇭🇷': [
        'Flag of Croatia',
        ':hr:',
        'Croatian Flag'
    ],
    '🇭🇹': [
        'Flag of Haiti',
        ':ht:',
        'Haitian Flag'
    ],
    '🇭🇺': [
        'Flag of Hungary',
        ':hu:',
        'Hungarian Flag'
    ],
    '🇮🇨': [
        'Flag of Canary Islands',
        ':ic:'
    ],
    '🇮🇩': [
        'Flag of Indonesia',
        ':id:',
        'Indonesian Flag'
    ],
    '🇮🇪': [
        'Flag of Ireland',
        ':ie:',
        'Irish Flag'
    ],
    '🇮🇱': [
        'Flag of Israel',
        ':il:',
        'Israeli Flag'
    ],
    '🇮🇲': [
        'Flag of Isle of Man',
        ':im:',
        'Manx Flag'
    ],
    '🇮🇳': [
        'Flag of India',
        ':in:',
        'Indian Flag'
    ],
    '🇮🇴': [
        'Flag of British Indian Ocean Territory',
        ':io:',
        'British Indian Ocean Territory Flag'
    ],
    '🇮🇶': [
        'Flag of Iraq',
        ':iq:',
        'Iraqi Flag'
    ],
    '🇮🇷': [
        'Flag of Iran',
        ':ir:',
        'Iranian Flag'
    ],
    '🇮🇸': [
        'Flag of Iceland',
        ':is:',
        'Icelandic Flag'
    ],
    '🇮🇹': [
        'Flag of Italy',
        ':it:',
        'Italian Flag'
    ],
    '🇯🇪': [
        'Flag of Jersey',
        ':je:',
        'Jersey Flag'
    ],
    '🇯🇲': [
        'Flag of Jamaica',
        ':jm:',
        'Jamaican Flag'
    ],
    '🇯🇴': [
        'Flag of Jordan',
        ':jo:',
        'Jordanian Flag'
    ],
    '🇯🇵': [
        'Flag of Japan',
        ':jp:',
        'Japanese Flag'
    ],
    '🇰🇪': [
        'Flag of Kenya',
        ':ke:',
        'Kenyan Flag'
    ],
    '🇰🇬': [
        'Flag of Kyrgyzstan',
        ':kg:',
        'Kyrgyzstani Flag'
    ],
    '🇰🇭': [
        'Flag of Cambodia',
        ':kh:',
        'Cambodian Flag'
    ],
    '🇰🇮': [
        'Flag of Kiribati',
        ':ki:',
        'I-Kiribati Flag'
    ],
    '🇰🇲': [
        'Flag of Comoros',
        ':km:',
        'Comoran Flag'
    ],
    '🇰🇳': [
        'Flag of Saint Kitts & Nevis',
        ':kn:'
    ],
    '🇰🇵': [
        'Flag of North Korea',
        ':kp:',
        'North Korean Flag'
    ],
    '🇰🇷': [
        'Flag of South Korea',
        ':kr:',
        'South Korean Flag'
    ],
    '🇰🇼': [
        'Flag of Kuwait',
        ':kw:',
        'Kuwaiti Flag'
    ],
    '🇰🇾': [
        'Flag of Cayman Islands',
        ':ky:',
        'Caymanian Flag'
    ],
    '🇰🇿': [
        'Flag of Kazakhstan',
        ':kz:',
        'Kazakhstani Flag',
        'Kazakh Flag'
    ],
    '🇱🇦': [
        'Flag of Laos',
        ':la:',
        'Laotian Flag',
        'Lao Flag'
    ],
    '🇱🇧': [
        'Flag of Lebanon',
        ':lb:',
        'Lebanese Flag'
    ],
    '🇱🇨': [
        'Flag of Saint Lucia',
        ':lc:'
    ],
    '🇱🇮': [
        'Flag of Liechtenstein',
        ':lt:',
        'Liechtensteiner Flag'
    ],
    '🇱🇰': [
        'Flag of Sri Lanka',
        ':lk:',
        'Sri Lankan Flag'
    ],
    '🇱🇷': [
        'Flag of Liberia',
        ':lr:',
        'Liberian Flag'
    ],
    '🇱🇸': [
        'Flag of Lesotho',
        ':ls:',
        'Basotho Flag'
    ],
    '🇱🇹': [
        'Flag of Lithuania',
        ':lt:',
        'Lithuanian Flag'
    ],
    '🇱🇺': [
        'Flag of Luxembourg',
        ':lu:',
        'Luxembourger Flag'
    ],
    '🇱🇻': [
        'Flag of Latvia',
        ':lv:',
        'Latvian Flag'
    ],
    '🇱🇾': [
        'Flag of Libya',
        ':ly:',
        'Libyan Flag'
    ],
    '🇲🇦': [
        'Flag of Morocco',
        ':ma:',
        'Moroccan Flag'
    ],
    '🇲🇨': [
        'Flag of Monaco',
        ':mc:',
        'Monégasque Flag'
    ],
    '🇲🇩': [
        'Flag of Moldova',
        ':md:',
        'Moldovan Flag'
    ],
    '🇲🇪': [
        'Flag of Montenegro',
        ':me:',
        'Montenegrin Flag'
    ],
    '🇲🇫': [
        'Flag of Saint Martin',
        ':mf:',
        'Flag: St. Martin'
    ],
    '🇲🇬': [
        'Flag of Madagascar',
        ':mg:',
        'Madagascan Flag'
    ],
    '🇲🇭': [
        'Flag of Marshall Islands',
        ':mh:',
        'Marshallese Flag'
    ],
    '🇲🇰': [
        'Flag of Macedonia',
        ':mk:',
        'Macedonian Flag'
    ],
    '🇲🇱': [
        'Flag of Mali',
        ':ml:',
        'Malian Flag'
    ],
    '🇲🇲': [
        'Flag of Myanmar (Burma)',
        ':mm:',
        'Myanmarese Flag',
        'Flag For Burma',
        'Burmese Flag'
    ],
    '🇲🇳': [
        'Flag of Mongolia',
        ':mn:',
        'Mongolian Flag'
    ],
    '🇲🇴': [
        'Flag of Macau Sar China',
        ':mo:',
        'Macanese Flag'
    ],
    '🇲🇵': [
        'Flag of Northern Mariana Islands',
        ':mp:',
        'Micronesian Flag'
    ],
    '🇲🇶': [
        'Flag of Martinique',
        ':mq:',
        'Snake Flag of Martinique',
        'Martiniquais Flag'
    ],
    '🇲🇷': [
        'Flag of Mauritania',
        ':mr:',
        'Mauritanian Flag'
    ],
    '🇲🇸': [
        'Flag of Montserrat',
        ':ms:',
        'Montserratian Flag'
    ],
    '🇲🇹': [
        'Flag of Malta',
        ':mt:',
        'Maltese Flag'
    ],
    '🇲🇺': [
        'Flag of Mauritius',
        ':mu:',
        'Mauritian Flag'
    ],
    '🇲🇻': [
        'Flag of Maldives',
        ':mv:',
        'Maldivian Flag'
    ],
    '🇲🇼': [
        'Flag of Malawi',
        ':mw:',
        'Malawian Flag'
    ],
    '🇲🇽': [
        'Flag of Mexico',
        ':mx:',
        'Mexican Flag'
    ],
    '🇲🇾': [
        'Flag of Malaysia',
        ':my:',
        'Malaysian Flag'
    ],
    '🇲🇿': [
        'Flag of Mozambique',
        ':mz:',
        'Mozambican Flag'
    ],
    '🇳🇦': [
        'Flag of Namibia',
        ':na:',
        'Namibian Flag'
    ],
    '🇳🇨': [
        'Flag of New Caledonia',
        ':nc:',
        'New Caledonian Flag'
    ],
    '🇳🇪': [
        'Flag of Niger',
        ':ne:',
        'Nigerien Flag'
    ],
    '🇳🇫': [
        'Flag of Norfolk Island',
        ':nf:',
        'Norfolk Island Flag'
    ],
    '🇳🇬': [
        'Flag of Nigeria',
        ':ng:',
        'Nigerian Flag'
    ],
    '🇳🇮': [
        'Flag of Nicaragua',
        ':ni:',
        'Nicaraguan Flag'
    ],
    '🇳🇱': [
        'Flag of Netherlands',
        ':nl:',
        'Dutch Flag',
        'Holland'
    ],
    '🇳🇴': [
        'Flag of Norway',
        ':no:',
        'Norwegian Flag'
    ],
    '🇳🇵': [
        'Flag of Nepal',
        ':np:',
        'Nepalese Flag'
    ],
    '🇳🇷': [
        'Flag of Nauru',
        ':nr:',
        'Nauruan Flag'
    ],
    '🇳🇺': [
        'Flag of Niue',
        ':nu:',
        'Niuean Flag'
    ],
    '🇳🇿': [
        'Flag of New Zealand',
        ':nz:',
        'Kiwi Flag'
    ],
    '🇴🇲': [
        'Flag of Oman',
        ':om:',
        'Omani Flag'
    ],
    '🇵🇦': [
        'Flag of Panama',
        ':pa:',
        'Panamanian Flag'
    ],
    '🇵🇪': [
        'Flag of Peru',
        ':pe:',
        'Peruvian Flag'
    ],
    '🇵🇫': [
        'Flag of French Polynesia',
        ':pf:',
        'French Polynesian Flag'
    ],
    '🇵🇬': [
        'Flag of Papua New Guinea',
        ':pg:',
        'PNG Flag',
        'Papua New Guinean Flag'
    ],
    '🇵🇭': [
        'Flag of Philippines',
        ':ph:'
    ],
    '🇵🇰': [
        'Flag of Pakistan',
        ':pk:',
        'Pakistani Flag'
    ],
    '🇵🇱': [
        'Flag of Poland',
        ':pl:',
        'Polish Flag'
    ],
    '🇵🇲': [
        'Flag of Saint Pierre & Miquelon',
        ':pm:'
    ],
    '🇵🇳': [
        'Flag of Pitcairn',
        ':pn:'
    ],
    '🇵🇷': [
        'Flag of Puerto Rico',
        ':pr:',
        'Puerto Rican Flag'
    ],
    '🇵🇸': [
        'Flag of Palestinian Territories',
        ':ps:',
        'Palestine'
    ],
    '🇵🇹': [
        'Flag of Portugal',
        ':pt:',
        'Portugese Flag'
    ],
    '🇵🇼': [
        'Flag of Palau',
        ':pw:',
        'Palauan Flag'
    ],
    '🇵🇾': [
        'Flag of Paraguay',
        ':py:',
        'Paraguayan Flag'
    ],
    '🇶🇦': [
        'Flag of Qatar',
        ':qa:',
        'Qatari Flag'
    ],
    '🇷🇪': [
        'Flag of Réunion',
        ':re:',
        'Réunionnais Flag'
    ],
    '🇷🇴': [
        'Flag of Romania',
        ':ro:',
        'Romanian Flag'
    ],
    '🇷🇸': [
        'Flag of Serbia',
        ':rs:',
        'Serbian Flag'
    ],
    '🇷🇺': [
        'Flag of Russia',
        ':ru:',
        'Russian Flag'
    ],
    '🇷🇼': [
        'Flag of Rwanda',
        ':rw:',
        'Rwandan Flag'
    ],
    '🇸🇦': [
        'Flag of Saudi Arabia',
        ':sa:',
        'Saudi Arabian Flag'
    ],
    '🇸🇧': [
        'Flag of Solomon Islands',
        ':sb:',
        'Solomon Islander Flag'
    ],
    '🇸🇨': [
        'Flag of Seychelles',
        ':sc:',
        'Seychellois Flag'
    ],
    '🇸🇩': [
        'Flag of Sudan',
        ':sd:',
        'Sudanese Flag'
    ],
    '🇸🇪': [
        'Flag of Sweden',
        ':se:',
        'Swedish Flag'
    ],
    '🇸🇬': [
        'Flag of Singapore',
        ':sg:',
        'Singaporean Flag'
    ],
    '🇸🇭': [
        'Flag of Saint Helena',
        ':sh:'
    ],
    '🇸🇮': [
        'Flag of Slovenia',
        ':si:',
        'Slovenian Flag'
    ],
    '🇸🇯': [
        'Flag of Svalbard & Jan Mayen',
        ':sj:'
    ],
    '🇸🇰': [
        'Flag of Slovakia',
        ':sk:',
        'Slovak Flag',
        'Slovakian Flag'
    ],
    '🇸🇱': [
        'Flag of Sierra Leone',
        ':sl:',
        'Sierra Leonean Flag'
    ],
    '🇸🇲': [
        'Flag of San Marino',
        ':sm:',
        'Sammarinese Flag'
    ],
    '🇸🇳': [
        'Flag of Senegal',
        ':sn:',
        'Sengalese Flag'
    ],
    '🇸🇴': [
        'Flag of Somalia',
        ':so:',
        'Somalian Flag'
    ],
    '🇸🇷': [
        'Flag of Suriname',
        ':sr:',
        'Surinamer Flag'
    ],
    '🇸🇸': [
        'Flag of South Sudan',
        ':ss:',
        'South Sudanese Flag'
    ],
    '🇸🇹': [
        'Flag of São Tomé & Príncipe',
        ':st:'
    ],
    '🇸🇻': [
        'Flag of El Salvador',
        ':sv:',
        'El Salvadoran Flag'
    ],
    '🇸🇽': [
        'Flag of Sint Maarten',
        ':sx:'
    ],
    '🇸🇾': [
        'Flag of Syria',
        ':sy:',
        'Syrian Flag'
    ],
    '🇸🇿': [
        'Flag of Swaziland',
        ':sz:',
        'Eswatini Flag'
    ],
    '🇹🇦': [
        'Flag of Tristan Da Cunha',
        ':ta:'
    ],
    '🇹🇨': [
        'Flag of Turks & Caicos Islands',
        ':tc:'
    ],
    '🇹🇩': [
        'Flag of Chad',
        ':td:',
        'Chadian Flag'
    ],
    '🇹🇫': [
        'Flag of French Southern Territories',
        ':tf:',
        'French Southern Lands Flag'
    ],
    '🇹🇬': [
        'Flag of Togo',
        ':tg:',
        'Togolese Flag'
    ],
    '🇹🇭': [
        'Flag of Thailand',
        ':th:',
        'Thai Flag'
    ],
    '🇹🇯': [
        'Flag of Tajikistan',
        ':tj:',
        'Tajik Flag'
    ],
    '🇹🇰': [
        'Flag of Tokelau',
        ':tk:',
        'Tokelauan Flag'
    ],
    '🇹🇱': [
        'Flag of Timor-Leste',
        ':tl:',
        'Timor-Leste Flag',
        'East Timorese Flag'
    ],
    '🇹🇲': [
        'Flag of Turkmenistan',
        ':tm:',
        'Turkmen Flag'
    ],
    '🇹🇳': [
        'Flag of Tunisia',
        ':tn:',
        'Tunisian Flag'
    ],
    '🇹🇴': [
        'Flag of Tonga',
        ':to:',
        'Tongan Flag'
    ],
    '🇹🇷': [
        'Flag of Turkey',
        ':tr:',
        'Turkish Flag'
    ],
    '🇹🇹': [
        'Flag of Trinidad & Tobago',
        ':tt:'
    ],
    '🇹🇻': [
        'Flag of Tuvalu',
        ':tv:',
        'Tuvaluan Flag'
    ],
    '🇹🇼': [
        'Flag of Taiwan',
        ':tw:',
        'Taiwanese Flag'
    ],
    '🇹🇿': [
        'Flag of Tanzania',
        ':tz:',
        'Tanzanian Flag'
    ],
    '🇺🇦': [
        'Flag of Ukraine',
        ':ua:',
        'Ukrainian Flag'
    ],
    '🇺🇬': [
        'Flag of Uganda',
        ':ug:',
        'Ugandan Flag'
    ],
    '🇺🇲': [
        'Flag: U.S. Outlying Islands',
        ':um:'
    ],
    '🇺🇸': [
        'Flag of United States',
        ':us:',
        'American Flag',
        'USA Flag'
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
        'Flag of Holy See',
        ':va:',
        'Vanticanien Flag'
    ],
    '🇻🇨': [
        'Flag of Saint Vincent & Grenadines',
        ':vc:'
    ],
    '🇻🇪': [
        'Flag of Venezuela',
        ':ve:',
        'Venezuelan Flag'
    ],
    '🇻🇬': [
        'Flag of British Virgin Islands',
        ':vg:',
        'British Virgin Islander Flag'
    ],
    '🇻🇮': [
        'Flag of US Virgin Islands',
        ':vi:',
        'US Virgin Islander Flag'
    ],
    '🇻🇳': [
        'Flag of Vietnam',
        ':vn:',
        'Vietnamese Flag'
    ],
    '🇻🇺': [
        'Flag of Vanuatu',
        ':vu:',
        'Ni-Vanuatu Flag'
    ],
    '🇼🇫': [
        'Flag of Wallis & Futuna',
        ':wf:'
    ],
    '🇼🇸': [
        'Flag of Samoa',
        ':ws:',
        'Samoan Flag'
    ],
    '🇽🇰': [
        'Flag of Kosovo',
        ':xk:',
        'Kosovar Flag'
    ],
    '🇾🇪': [
        'Flag of Yemen',
        ':ye:',
        'Yemeni Flag'
    ],
    '🇾🇹': [
        'Flag of Mayotte',
        ':yt:',
        'Mayotte Flag'
    ],
    '🇿🇦': [
        'Flag of South Africa',
        ':za:',
        'South African Flag'
    ],
    '🇿🇲': [
        'Flag of Zambia',
        ':zm:',
        'Zambian Flag'
    ],
    '🇿🇼': [
        'Flag of Zimbabwe',
        ':zw:',
        'Zimbabwean Flag',
        'Zim Flag'
    ]
};
/*sports*/
emojis_language[lang][8] = {
    '🧗{{skin_tone}}‍♂️': [
        'Man Climbing',
        ':man_climbing:',
        ':climbing:',
        'Male Rock Climber',
        'Man Climber',
        ':man:'
    ],
    '🧗{{skin_tone}}‍♀️': [
        'Woman Climbing',
        ':woman_climbing:',
        ':climbing:',
        'Female Rock Climber',
        'Woman Climber',
        ':woman:'
    ],
    '🧗{{skin_tone}}': [
        'Person Climbing',
        ':person_climbing:',
        ':climbing:',
        'Person Rock Climber',
        'Person Climber',
        ':person:'
    ],
    '🏇{{skin_tone}}': [
        'Horse Racing',
        ':horse_racing:',
        'Horse Race',
        'Jockey'
    ],
    '⛷{{skin_tone}}‍️': [
        'Skier',
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
        'Woman Golfer',
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
        'Woman Surfer',
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
        'Man Rowing Boat',
        ':man_rowing_boat:',
        ':rowing_boat:',
        ':man:'
    ],
    '🚣{{skin_tone}}‍♀️': [
        'Woman Rowing Boat',
        ':woman_rowing_boat:',
        ':rowing_boat:',
        ':woman:'
    ],
    '🚣{{skin_tone}}': [
        'Person Rowing Boat',
        ':person_rowing_boat:',
        ':rowing_boat:',
        ':person:'
    ],
    '🏊{{skin_tone}}‍♂️': [
        'Man Swimming',
        ':man_swimming:',
        ':swimming:',
        'Man Swimmer',
        ':man:'
    ],
    '🏊{{skin_tone}}‍♀️': [
        'Woman Swimming',
        ':woman_swimming:',
        ':swimming:',
        'Woman Swimmer',
        ':woman:'
    ],
    '🏊{{skin_tone}}': [
        'Person Swimming',
        ':person_swimming:',
        ':swimming:',
        'Person Swimmer',
        ':person:'
    ],
    '⛹{{skin_tone}}‍️‍♂️': [
        'Man Bouncing Ball',
        ':man_bouncing_ball:',
        ':bouncing_ball:',
        'Man Basketball Player',
        ':man:'
    ],
    '⛹️{{skin_tone}}‍♀️': [
        'Woman Bouncing Ball',
        ':woman_bouncing_ball:',
        ':boucing_ball:',
        'Woman Basketball Player',
        ':woman:'
    ],
    '⛹️{{skin_tone}}': [
        'Person Bouncing Ball',
        ':person_bouncing_ball:',
        ':boucing_ball:',
        'Person Basketball Player',
        ':person:'
    ],
    '🏋️{{skin_tone}}‍♂️': [
        'Man Lifting Weights',
        ':man_lifting_weights:',
        ':lifting_weights:',
        'Man Weightlifter',
        ':man:'
    ],
    '🏋️{{skin_tone}}‍♀️': [
        'Woman Lifting Weights',
        ':woman_lifting_weights:',
        ':lifting_weights:',
        'Woman Weightlifter',
        ':woman:'
    ],
    '🏋️{{skin_tone}}': [
        'Person Lifting Weights',
        ':person_lifting_weights:',
        ':lifting_weights:',
        'Person Weightlifter',
        ':person:'
    ],
    '🚴{{skin_tone}}‍♂️': [
        'Man Biking',
        ':man_biking:',
        ':biking:',
        'Man Cyclist',
        'Male Cyclist',
        ':man:'
    ],
    '🚴{{skin_tone}}‍♀️': [
        'Woman Biking',
        ':woman_biking:',
        ':biking:',
        'Woman Cyclist',
        'Female Cyclist',
        ':woman:'
    ],
    '🚴{{skin_tone}}': [
        'Person Biking',
        ':person_biking:',
        ':biking:',
        'Person Cyclist',
        'Person Cyclist',
        ':person:'
    ],
    '🚵{{skin_tone}}‍♂️': [
        'Man Mountain Biking',
        ':man_mountain_bike:',
        ':mountain_bike:',
        'Man Mountain Biker',
        ':man:'
    ],
    '🚵{{skin_tone}}‍♀️': [
        'Woman Mountain Biking',
        ':woman_mountain_bike:',
        ':mountain_bike:',
        'Woman Mountain Biker',
        ':woman:'
    ],
    '🚵{{skin_tone}}': [
        'Person Mountain Biking',
        ':person_mountain_bike:',
        ':mountain_bike:',
        'Person Mountain Biker',
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
        'Woman Cartwheeling',
        ':woman_cartwheeling:',
        ':cartwheeling:',
        'Woman Doing Cartwheel',
        ':woman:'
    ],
    '🤸{{skin_tone}}': [
        'Person Cartwheeling',
        ':person_cartwheeling:',
        ':cartwheeling:',
        'Person Doing Cartwheel',
        ':person:'
    ],
    '🤼‍♂️': [
        'Men Wrestling',
        ':men_wrestling:',
        ':wrestling:',
        'Wrestling',
        'Wrestlers',
        ':man:'
    ],
    '🤼‍♀️': [
        'Women Wrestling',
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
        'Man Playing Water Polo',
        ':man_playing_water_polo:',
        ':playing_water_polo:',
        ':man:'
    ],
    '🤽{{skin_tone}}‍♀️': [
        'Woman Playing Water Polo',
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
        'Man Playing Handball',
        ':man_playing_handball:',
        ':playing_handball:',
        ':man:'
    ],
    '🤾{{skin_tone}}‍♀️': [
        'Woman Playing Handball',
        ':woman_playing_handball:',
        ':playing_handball:',
        ':woman:'
    ],
    '🤾{{skin_tone}}': [
        'Person Playing Handball',
        ':person_playing_handball:',
        ':playing_handball:',
        ':person:'
    ],
    '🤹{{skin_tone}}‍♂️': [
        'Man Juggling',
        ':man_juggling:',
        ':juggling:',
        'Male Juggler',
        ':man:'
    ],
    '🤹{{skin_tone}}‍♀️': [
        'Woman Juggling',
        ':woman_juggling:',
        ':juggling:',
        'Female Juggler',
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
        'Man in Lotus Position',
        ':man_lotus_position:',
        ':lotus_position:',
        'Meditation',
        'Zen',
        'Cross legged',
        'Yoga',
        ':man:'
    ],
    '🧘{{skin_tone}}‍♀️': [
        'Woman in Lotus Position',
        ':woman_lotus_position:',
        ':lotus_position:',
        'Meditation',
        'Zen',
        'Cross legged',
        'Yoga',
        ':woman:'
    ],
    '🧘{{skin_tone}}': [
        'Person in Lotus Position',
        ':person_lotus:_position',
        ':lotus_position:',
        'Meditation',
        'Zen',
        'Cross legged',
        'Yoga',
        ':person:'
    ],
    '🏃{{skin_tone}}‍♂️': [
        'Man Running',
        ':man_running:',
        ':running:',
        ':man:'
    ],
    '🏃{{skin_tone}}‍♀️': [
        'Woman Running',
        ':woman_running:',
        ':running:',
        ':woman:'
    ],
    '🏃{{skin_tone}}': [
        'Person Running',
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
        'Woman Dancing',
        ':woman_dancing:',
        ':dancing:',
        ':woman:'
    ],
    '🤺': [
        'Person Fencing',
        ':person_fencing:',
        'Fancer',
        ':fencing:'
    ],
    '🏆': [
        'Trophy',
        ':trophy:',
        'Championship',
        'Winner',
        ':gold:',
        ':yellow:'
    ],
    '🏅': [
        'Sports Medal',
        ':sports_medal:',
        ':medal:',
        ':gold:',
        ':yellow:'
    ],
    '🥇': [
        '1st Place Medal',
        ':first_place_medal:',
        ':gold_medal:',
        'First Place Medal',
        'Gold Medal',
        ':yellow:',
        ':gold:'
    ],
    '🥈': [
        '2nd Place Medal',
        ':second_place_medal:',
        ':silver_medal:',
        'Second Place Medal',
        'Silver Medal',
        ':gray:',
        ':grey:',
        ':silver:'
    ],
    '🥉': [
        '3rd Place Medal',
        ':third_place_medal:',
        ':bronze_medal:',
        'Third Place Medal',
        'Bronze Medal',
        ':brown:',
        ':bronze:'
    ],
    '⚽': [
        'Football',
        ':football:',
        'Soccer',
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
        'Basketball and Hoop'
    ],
    '🏐': [
        'Volleyball',
        ':volleyball:',
        ':white:'
    ],
    '🏈': [
        'American Football',
        ':american_football:',
        'Football',
        'Gridiron',
        'Superbowl',
        ':brown:'
    ],
    '🏉': [
        'Rugby Football',
        ':rugby:',
        'Football',
        'League',
        'Rugby',
        'Union'
    ],
    '🎾': [
        'Tennis',
        ':tennis:',
        ':ball:',
        'Ball',
        'Racket',
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
        'Skittles',
        'Ten Pin Bowling'
    ],
    '🏏': [
        'Cricket',
        ':cricket:',
        'Bat',
        'Ball'
    ],
    '🏑': [
        'Field Hockey',
        ':field_hockey:',
        'Ball',
        'Stick'
    ],
    '🏒': [
        'Ice Hockey',
        ':ice_hockey:',
        'Ball',
        'Stick'
    ],
    '🥍': [
        'Lacrosse',
        ':lacrosse:',
        'Ball',
        'Stick',
        ':red:'
    ],
    '🏓': [
        'Ping Pong',
        ':ping_pong:',
        ':table_tennis:',
        'Table Tennis',
        'Ball',
        'Paddle'
    ],
    '🏸': [
        'Badminton',
        ':badminton:',
        'Shuttlecock',
        'Racquet'
    ],
    '🥊': [
        'Boxing Glove',
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
        'Karate',
        'Kung fu'
    ],
    '⛳': [
        'Flag in Hole',
        ':flag_in_hole:',
        ':golf_flag:',
        'Golf Flag'
    ],
    '⛸️': [
        'Ice Skate',
        ':ice_skate:',
        'Skating'
    ],
    '🎣': [
        'Fishing',
        ':fishing:',
        'Pole',
        'Fish',
        'Fishing Rod'
    ],
    '🎽': [
        'Running Shirt',
        ':running_shirt:',
        'Singlet',
        'Sash'
    ],
    '🎿': [
        'Skis',
        ':skis:',
        'Skiing',
        'Boot'
    ],
    '🛷': [
        'Sled',
        ':sled:'
    ],
    '🥌': [
        'Curling Stone',
        ':curling_stone:'
    ],
    '🎯': [
        'Direct Hit',
        ':direct_hit:',
        'Archery',
        'Bullseye',
        'Darts'
    ],
    '🎱': [
        'Pool 8 Ball',
        ':pool_8_ball:',
        'Cue Ball',
        'Snooker',
        'Billiards',
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
        'Black Chess Pawn',
        ':black_chess_pawn:',
        ':black:'
    ],
    '🏹': [
        'Bow and Arrow',
        ':arch:',
        'Arch'
    ],
    '🥅': [
        'Goal Net',
        ':goal_net:'
    ],
    '🀄': [
        'Mahjong Red Dragon',
        ':mahjong:',
        'Mahjong',
        'Mahjong Tile',
        '中',
        'Mahjong Tile Red Dragon'
    ],
    '🎴': [
        'Flower Playing Cards',
        ':flower_playing_cards:',
        'Deck Of Cards',
        'Hanafuda',
        'Hwatu',
        'Playing Cards'
    ]
};
/*travel and places*/
emojis_language[lang][9] = {
    '🚂': [
        'Steam Locomotive',
        ':steam_train:',
        'Steam Train',
        'Railway Locomotive'
    ],
    '🚃': [
        'Railway Car',
        ':railway_car:',
        'Railcar',
        'Railroad Car',
        'Railway Carriage',
        'Railway Wagon'
    ],
    '🚄': [
        'High-Speed Train',
        ':high_speed_train:'
    ],
    '🚅': [
        'Bullet Train',
        ':bullet_train:',
        'Shinkansen',
        'High-Speed Train with Bullet Nose'
    ],
    '🚆': [
        'Train',
        ':train:'
    ],
    '🚇': [
        'Underground',
        ':underground:',
        'Tube',
        'Metro',
        'Subway'
    ],
    '🚈': [
        'Light Rail',
        ':light_rail:',
        'Train'
    ],
    '🚊': [
        'Tram',
        ':tram:'
    ],
    '🚝': [
        'Monorail',
        ':monorail:',
        'Train'
    ],
    '🚞': [
        'Mountain Railway',
        ':mountain_railway:',
        'Funicular',
        'Train And Mountain'
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
        'Oncoming Bus',
        ':front_of_bus:',
        'Front Of Bus'
    ],
    '🚎': [
        'Trolleybus',
        ':trolleybus:',
        'Electical Bus'
    ],
    '🚐': [
        'Minibus',
        ':minibus:',
        'Minivan',
        'People-Mover'
    ],
    '🚑': [
        'Ambulance',
        ':ambulance:'
    ],
    '🚒': [
        'Fire Engine',
        ':fire_engine:',
        'Fire Department',
        'Fire Truck'
    ],
    '🚓': [
        'Police Car',
        ':police_car:',
        'Cop Car',
        'Side Of Police Car'
    ],
    '🚔': [
        'Oncoming Police Car',
        ':front_of_police_car:',
        'Front of Police Car',
        'Cop Car'
    ],
    '🚕': [
        'Taxi',
        ':taxi:',
        'New York Taxi',
        'Side Of Taxi'
    ],
    '🚖': [
        'Taxi',
        ':front_of_taxi:',
        'Oncoming Taxi',
        'Front of Taxi'
    ],
    '🚗': [
        'Automobile',
        ':car:',
        'Red Car',
        'Side Of Car',
        'Car'
    ],
    '🚘': [
        'Oncoming Automobile',
        ':front_of_car:',
        'Red Car',
        'Front Of Car'
    ],
    '🚚': [
        'Delivery Truck',
        ':lorry:',
        'Lorry'
    ],
    '🚛': [
        'Articulated Lorry',
        ':articulated_lorry:',
        'Green Truck'
    ],
    '🚜': [
        'Tractor',
        ':tractor:',
        'Farm'
    ],
    '🛻': [
        'Pickup Truck',
        ':pickup_truck:'
    ],
    '🏎️': [
        'Racing Car',
        ':racing_car:',
        'F1',
        'Formula One',
        'Race Car'
    ],
    '🏍️': [
        'Motorbike',
        ':motorbike:',
        'Motorcycle'
    ],
    '🛵': [
        'Motor Scooter',
        ':motor_scooter:',
        'Vespa',
        'Motor Bike',
        'Motor Bike'
    ],
    '🛺': [
        'Auto Rickshaw',
        ':auto_rickshaw:',
        'Tuk Tuk'
    ],
    '🚲': [
        'Bicycle',
        ':bike:',
        'Bike'
    ],
    '🛴': [
        'Kick Scooter',
        ':kick_scooter:'
    ],
    '⛵': [
        'Sailboat',
        ':sailboat:',
        'Dinghy',
        'Yacht'
    ],
    '🚤': [
        'Speedboat',
        ':speedboat:',
        'Motorboat',
        'Powerboat'
    ],
    '🛳️': [
        'Passenger Ship',
        ':passenger_ship:'
    ],
    '⛴️': [
        'Ferry',
        ':ferry:'
    ],
    '🛥️': [
        'Motor Boat',
        ':motor_boat:'
    ],
    '🚢': [
        'Cruise Ship',
        ':cruise_ship:'
    ],
    '✈️': [
        'Airplane',
        ':airplane:',
        'Aeroplane'
    ],
    '🛩️': [
        'Small Airplane',
        ':small_airplane:',
        'Small Aeroplane'
    ],
    '🚁': [
        'Helicopter',
        ':helicopter:'
    ],
    '🚟': [
        'Suspension Railway',
        ':suspension_railway:'
    ],
    '🚠': [
        'Mountain Cableway',
        ':mountain_cableway:'
    ],
    '🚡': [
        'Aerial Tramway',
        ':aerial_tramway:',
        'Cable Car',
        'Gondola',
        'Ropeway'
    ],
    '🛰️': [
        'Satellite',
        ':satellite:'
    ],
    '🚀': [
        'Rocket',
        ':rocket:',
        'Space Shuttle'
    ],
    '🛸': [
        'Flying Saucer',
        ':flying_saucer:',
        'UFO'
    ],
    '🚉': [
        'Train Station',
        ':train_station:',
        'Train Platform'
    ],
    '🚏': [
        'Bus Stop',
        ':bus_stop:'
    ],
    '🛣️': [
        'Motorway',
        ':motorway:',
        'Road',
        'Highway',
        'Interstate'
    ],
    '🛤️': [
        'Railway Track',
        ':railway_track:'
    ],
    '🛫': [
        'Airplane Departure',
        ':airplane_departure:',
        'Taking Off'
    ],
    '🛬': [
        'Airplane Arrival',
        ':airplane_arrival:',
        'Airplane Arriving',
        'Landing'
    ],
    '🗾': [
        'Map of Japan',
        ':map_of_japan:'
    ],
    '⛰️': [
        'Mountain',
        ':mountain:'
    ],
    '🏔️': [
        'Snow Capped Mountain',
        ':snow_capped_mountain:'
    ],
    '🌋': [
        'Volcano',
        ':volcano:'
    ],
    '🗻': [
        'Mount Fuji',
        ':mount_fuji:',
        'Fuji-san'
    ],
    '🏕️': [
        'Camping',
        ':camping:',
        'Campsite'
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
        'Desert Island',
        ':desert_island:'
    ],
    '🏞️': [
        'National Park',
        ':national_park:'
    ],
    '🏟️': [
        'Stadium',
        ':stadium:',
        'Grandstand',
        'Sport Stadium'
    ],
    '🏛️': [
        'Classical Building',
        ':classical_building:',
        'Greek',
        'Rome'
    ],
    '🏗️': [
        'Building Construction',
        ':building_construction:',
        'Crane'
    ],
    '🏘️': [
        'Houses Buildings',
        ':houses_building:',
        'Group of Houses'
    ],
    '🏚️': [
        'Derelict House Building',
        ':old_house:',
        'Abandoned House',
        'Old House',
        'Haunted House'
    ],
    '🏠': [
        'Ana Sayfa',
        ':home:',
        'House Building'
    ],
    '🏡': [
        'House With Garden',
        ':house_with_garden:',
        'House And Tree'
    ],
    '🏢': [
        'Office Building',
        ':office_building:',
        'City Building',
        'High-Rise Building'
    ],
    '🏣': [
        'Japanese Post Office',
        ':japanese_post_office:',
        'Japanese Postal Mark'
    ],
    '🏤': [
        'Post Office',
        ':european_post_office:',
        'European Post Office'
    ],
    '🏥': [
        'Hospital',
        ':hospital:',
        'ER',
        'A&E',
        'Emergency Room',
        'Accident And Emergency',
        'Red Cross',
        'Medical'
    ],
    '🏦': [
        'Bank',
        ':bank:',
        'BK',
        'Bakkureru',
        'Bank Branch',
        'Bakkureru'
    ],
    '🏨': [
        'Hotel',
        ':hotel:',
        'Accommodation',
        'H Building'
    ],
    '🏩': [
        'Love Hotel',
        ':love_hotel:',
        'Love Heart Hotel'
    ],
    '🏪': [
        'Convenience Store',
        ':convenience_store:',
        '24-Hour Store',
        '7-Eleven',
        'Corner Shop',
        'Kwik-E-Mart'
    ],
    '🏫': [
        'School',
        ':school:',
        'Clock Tower',
        'Elementary High Middle'
    ],
    '🏬': [
        'Department Store',
        ':department_store:',
        'Shopping Center',
        'Shop'
    ],
    '🏭': [
        'Factory',
        ':factory:',
        'Industrial',
        'Industry',
        'Pollution',
        'Smog'
    ],
    '🏯': [
        'Japanese Castle',
        ':japanese_castle:',
        'Fortress'
    ],
    '🏰': [
        'European Castle',
        ':european_castle:',
        'Turrets'
    ],
    '💒': [
        'Church Heart',
        ':church_heart:',
        'Church Wedding',
        'Marriage'
    ],
    '🗼': [
        'Tokyo Tower',
        ':tokyo_tower:',
        'Eiffel Tower',
        'Red Tower'
    ],
    '🗽': [
        'Statue of Liberty',
        ':statue_of_liberty:',
        'New York'
    ],
    '⛪': [
        'Church Building',
        ':church_building:',
        'Cross'
    ],
    '🕌': [
        'Mosque',
        ':mosque:',
        'Domed Roof',
        'Minaret'
    ],
    '🛕': [
        'Hindu Temple',
        ':hindu_temple:'
    ],
    '🕍': [
        'Synagogue',
        ':synagogue:',
        'Jewish',
        'Synagog',
        'Temple'
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
        'Umbrella on Ground',
        ':beach_umbrella:',
        'Beach Umbrella'
    ],
    '🌄': [
        'Sunrise Over Mountains',
        ':sunrise_over_mountains:',
        'Morning',
        'Sunrise'
    ],
    '🌅': [
        'Sunrise',
        ':sunrise:',
        ':sunset:',
        'Sunset'
    ],
    '🌆': [
        'Cityscape at Dusk',
        ':cityscape_at_dusk:',
        'Orange Sky City',
        'Dusk City'
    ],
    '🌇': [
        'Sunset Over Buildings',
        ':sunset_over_buildings:',
        'City Sunset'
    ],
    '🌃': [
        'Night with Stars',
        ':night_with_stars:',
        'City At Night',
        'Starry Night'
    ],
    '🗿': [
        'Moai',
        ':moai:',
        'Easter Island Statue',
        'Human Rock Carving',
        'Moyai Statue'
    ],
    '🌠': [
        'Shooting Star',
        ':shooting_star:',
        'When You Wish Upon A Star',
        'Meteoroid'
    ],
    '🌌': [
        'Milky Way',
        ':milky_way:',
        'Galaxy',
        'Night Sky',
        'Space',
        'Stars',
        'Universe'
    ],
    '🎑': [
        'Moon Viewing Ceremony',
        ':moon_viewing_ceremony:',
        'Grass, Dumplings and Moon',
        'Harvest Moon',
        'Mid-Autumn Festival',
        'Tsukimi'
    ],
    '🛖': [
        'Hut',
        ':hut:'
    ],
    '🎢': [
        'Roller Coaster',
        ':roller_coaster:',
        'Rollercoaster',
        'Theme Park'
    ],
    '🛝': [
        'Playground Slide',
        ':playground_slide:',
        'Baby',
        'Children'
    ]
};
/*technologies (smartphones, laptops, etc.) and office*/
emojis_language[lang][10] = {
    '⌚': [
        'Watch',
        ':watch:',
        'Timepiece',
        'Apple Watch'
    ],
    '⏰': [
        'Alarm Clock',
        ':alarm_clock:'
    ],
    '⏱️': [
        'Stopwatch',
        ':stopwatch:'
    ],
    '⏲️': [
        'Timer Clock',
        ':timer_clock:'
    ],
    '🕰️': [
        'Mantelpiece Clock',
        ':mantelpiece_clock:'
    ],
    '🧭': [
        'Compass',
        ':compass:'
    ],
    '🕹️': [
        'Joystick',
        ':joystick:'
    ],
    '🎙️': [
        'Studio Microphone',
        ':studio_microphone:'
    ],
    '🎚️': [
        'Level Slider',
        ':level_slider:'
    ],
    '🎛️': [
        'Control Knobs',
        ':control_knobs:'
    ],
    '📻': [
        'Radio',
        ':radio:',
        'Digital Radio',
        'Wireless'
    ],
    '📱': [
        'Mobile Phone',
        ':mobile_phone:',
        'Smartphone',
        'iPhone',
        'Cell Phone',
        'Device'
    ],
    '📲': [
        'Mobile Phone with Rightwards Arrow at Left',
        ':phone_call:',
        'Phone Call',
        'Pointing To Phone'
    ],
    '☎️': [
        'Black Telephone',
        ':rotary_phone:',
        'Rotary Phone',
        ':red:'
    ],
    '📞': [
        'Telephone Receiver',
        ':phone:',
        'Handset',
        'Phone',
        ':black:',
        'Device'
    ],
    '📟': [
        'Pager',
        ':pager:',
        'Beeper',
        'Bleeper'
    ],
    '📠': [
        'Fax Machine',
        ':fax_machine:',
        'Facsimile',
        'Fax'
    ],
    '🔋': [
        'Battery',
        ':battery:',
        'AA Battery',
        'Phone Battery'
    ],
    '🔌': [
        'Electric Plug',
        ':power_cable:',
        'AC Adaptor',
        'Power Cable',
        'Power Plug'
    ],
    '💻': [
        'Laptop',
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
        'Desktop Computer',
        ':desktop_computer:',
        ':computer:',
        'iMac',
        'PC',
        'Device'
    ],
    '🖨️': [
        'Printer',
        ':printer:',
        'Device'
    ],
    '⌨️': [
        'Computer Keyboard',
        ':keyboard:',
        ':computer_keyboard:'
    ],
    '🖱️': [
        'Computer Mouse',
        ':computer_mouse:',
        'Three Button Mouse'
    ],
    '🖲️': [
        'Trackball',
        ':trackball:'
    ],
    '💽': [
        'Computer Disk',
        ':blu_ray:',
        'Minidisc',
        'CD',
        'DVD',
        'Blu-ray',
        'BD'
    ],
    '💾': [
        'Floppy Disk',
        ':floppy_disk:',
        '3.5″ Disk',
        'Disk'
    ],
    '💿': [
        'Optical Disk',
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
        'Movie Camera',
        ':movie_camera:',
        'Film Camera',
        'Hollywood',
        'Movie'
    ],
    '🎞️': [
        'Film Frames',
        ':film_frames:'
    ],
    '📽️': [
        'Film Projector',
        ':film_projector:'
    ],
    '📺': [
        'Television',
        ':tv:',
        'TV'
    ],
    '📷': [
        'Digital Camera',
        ':digital_camera:'
    ],
    '📸': [
        'Camera with Flash',
        ':camera_flash:'
    ],
    '📹': [
        'Video Camera',
        ':video_camera:',
        'Camcorder'
    ],
    '📼': [
        'Videocassette',
        ':vhs:',
        'VHS',
        'VCR',
        'Video Tape',
        'Videocassette'
    ],
    '💳': [
        'Credit Card',
        ':credit_card:',
        'Debit Card',
        'AMEX',
        'Diners Club',
        'American Express',
        'Mastercard',
        'VISA Card'
    ],
    '📧': [
        'E-Posta',
        ':email:',
        'Email'
    ],
    '📨': [
        'Incoming Envelope',
        ':incoming_envelope:',
        'Envelope With Lines',
        'Fast Envelope'
    ],
    '📩': [
        'Envelope with Downwards Arrow Above',
        ':insert_in_envelope:',
        'Down Arrow Envelope',
        'Insert In Envelope'
    ],
    '📤': [
        'Outbox Tray',
        ':outbox_tray:'
    ],
    '📥': [
        'Inbox Tray',
        ':inbox_tray:'
    ],
    '📮': [
        'Postbox',
        ':postbox:'
    ],
    '📁': [
        'File Folder',
        ':file_folder:',
        'Folder',
        'Directory',
        'Closed File Folder'
    ],
    '📂': [
        'Open File Folder',
        ':open_file_folder:',
        'Directory'
    ],
    '🗂️': [
        'Card Index Dividers',
        ':card_index_dividers:'
    ],
    '📅': [
        'Calendar',
        ':calendar:',
        'July 17',
        'World Emoji Day'
    ],
    '🗓️': [
        'Spiral Calendar Pad',
        ':spiral_calendar_pad:'
    ],
    '📆': [
        'Tear-Off Calendar',
        ':day_calendar:',
        'Day Calendar',
        'Desk Calendar'
    ],
    '📈': [
        'Chart Increasing',
        ':increasing_chart:',
        'Positive Chart',
        'Up Pointing Graph',
        'Chart with Upwards Trend'
    ],
    '📉': [
        'Chart Decreasing',
        ':decreasing_chart:',
        'Negative Chart',
        'Down Pointing Graph',
        'Chart with Downwards Trend'
    ],
    '📊': [
        'Bar Chart',
        ':bar_chart:',
        'Bar Graph'
    ],
    '📌': [
        'Pushpin',
        ':pushpin:',
        'Thumb Tack',
        ':red:'
    ],
    '📋': [
        'Clipboard',
        ':clipboard:'
    ],
    '📍': [
        'Round Pushpin',
        ':round_pushpin:',
        'Dropped Pin',
        'Map Pin',
        'Pin',
        'Red Pin',
        ':red:'
    ],
    '📎': [
        'Paperclip',
        ':paperclip:',
        'Clippy'
    ],
    '📏': [
        'Straight Ruler',
        ':straight_ruler:'
    ],
    '📐': [
        'Triangular Ruler',
        ':triangular_ruler:',
        'Triangle Ruler'
    ],
    '✂️': [
        'Scissors',
        ':scissors:',
        'Cutting'
    ],
    '✏️': [
        'Pencil',
        ':pencil:',
        'Lead Pencil'
    ],
    '✒️': [
        'Black Nib',
        ':black_nib:',
        'Pen Nib',
        'Fountain Pen'
    ],
    '🖋️': [
        'Fountain Pen',
        ':fountain_pen:',
        'Lower Left Fountain Pen'
    ],
    '🖊️': [
        'Pen',
        ':pen:',
        'Lower Left Ballpoint Pen',
        'Ballpoint Pen'
    ],
    '🖌️': [
        'Paintbrush',
        ':paintbrush:',
        'Brush',
        'Lower Left Paintbrush'
    ],
    '🖍️': [
        'Crayon',
        ':crayon:',
        'Lower Left Crayon'
    ],
    '📝': [
        'Memo',
        ':memo:',
        'Memorandum',
        'Note',
        'Pencil And Paper'
    ],
    '🗑️': [
        'Wastepaper Basket',
        ':wastepaper_basket:',
        'Garbage Can',
        'Rubbish Bin',
        'Trash Can'
    ],
    '📡': [
        'Satellite Antenna',
        ':satellite_antenna:'
    ],
    '🔭': [
        'Telescope',
        ':telescope:',
        'Stargazing'
    ],
    '🔬': [
        'Microscope',
        ':microscope:',
        'Magnify',
        'Science'
    ],
    '📭': [
        'Open Mailbox with Lowered Flag',
        ':open_mailbox_lowered:'
    ],
    '📬': [
        'Open Mailbox with Raised Flag',
        ':open_mailbox_raised:',
        'Open Mailbox'
    ],
    '📪': [
        'Closed Mailbox with Lowered Flag',
        ':closed_mailbox_lowered:'
    ],
    '📫': [
        'Closed Mailbox with Raised Flag',
        ':closed_mailbox_raised:'
    ],
    '📰': [
        'Newspaper',
        ':newspaper:'
    ],
    '🗞️': [
        'Rolled-Up Newspaper',
        ':rolled_up_newspaper:',
        'Newspaper Delivery'
    ],
    '📄': [
        'Page Facing Up',
        ':printed_page:',
        'Printed Page'
    ],
    '📜': [
        'Scroll',
        ':scroll:',
        'Degree',
        'Parchment'
    ],
    '📃': [
        'Page with Curl',
        ':curled_page:',
        'Curled Page',
        'Curly Page'
    ],
    '📓': [
        'Defter',
        ':notebook:',
        'Black And White Book'
    ],
    '📔': [
        'Desenli Kapaklı Defter',
        ':notebook_decorative_cover:'
    ],
    '📕': [
        'Kapalı Kitap',
        ':closed_book:',
        'Red Book',
        'Red Textbook',
        ':red:'
    ],
    '📖': [
        'Açık Kitap',
        ':open_book:',
        'Book',
        'Novel'
    ],
    '📗': [
        'Yeşil Kitap',
        ':green_book:',
        'Green Textbook',
        ':green:'
    ],
    '📘': [
        'Mavi Kitap',
        ':blue_book:',
        'Blue Textbook',
        ':blue:'
    ],
    '📙': [
        'Turuncu Kitap',
        ':orange_book:',
        'Orange Textbook',
        ':orange:'
    ],
    '📚': [
        'Kitaplar',
        ':books:',
        'Pile Of Books',
        'Stack Of Books'
    ],
    '🗳️': [
        'Ballot Box with Ballot',
        ':ballot_box:',
        'Vote Box',
        'Voting'
    ],
    '🗄️': [
        'File Cabinet',
        ':file_cabinet:',
        'Filing Cabinet'
    ],
    '🗃️': [
        'Card File Box',
        ':card_file_box:'
    ],
    '🖇️': [
        'Linked Paperclips',
        ':linked_paperclips:',
        ':gray:',
        ':grey:'
    ]
};
/*clothes and accessories*/
emojis_language[lang][11] = {
    '👣': [
        'Footprints',
        ':footprints:',
        'Feet',
        'Footsteps'
    ],
    '👓': [
        'Gözlük',
        ':glasses:',
        'Eveyglasses'
    ],
    '🕶️': [
        'Güneş Gözlüğü',
        ':sunglasses:'
    ],
    '🥽': [
        'Goggles',
        ':goggles:'
    ],
    '🥼': [
        'Lab Coat',
        ':lab_coat:'
    ],
    '👔': [
        'Necktie',
        ':necktie:',
        'Business Shirt',
        'Shirt And Tie'
    ],
    '👕': [
        'T-Shirt',
        ':t_shirt:',
        ':t-shirt:',
        'Tee Shirt',
        'Polo Shirt'
    ],
    '👖': [
        'Jeans',
        ':jeans:',
        'Denim',
        'Pants',
        'Trousers'
    ],
    '🧣': [
        'Atkı',
        ':scarf:'
    ],
    '🧤': [
        'Eldiven',
        ':gloves:'
    ],
    '🧥': [
        'Mont',
        ':coat:'
    ],
    '🧦': [
        'Çorap',
        ':socks:'
    ],
    '👗': [
        'Elbise',
        ':dress:',
        'Skirt',
        'Gown'
    ],
    '👘': [
        'Kimono',
        ':kimono:',
        'Dressing Gown',
        'Japanese Dress'
    ],
    '👙': [
        'Bikini',
        ':bikini:',
        'Bathers',
        'Swimsuit'
    ],
    '🩱': [
        'One-Piece Swimsuit',
        'one_piece_swimsuit',
        'one-piece_swimsuit'
    ],
    '👚': [
        'Womans Clothes',
        ':womans_clothes:',
        'Womans Clothes',
        'Blouse',
        'Pink Shirt',
        'Blouse'
    ],
    '👛': [
        'Çanta',
        ':purse:',
        'Wallet'
    ],
    '👜': [
        'El Çantası',
        ':handbag:'
    ],
    '👝': [
        'Clutch Bag',
        ':clutch_bag:',
        'Clutch',
        'Small Bag',
        'Pouch'
    ],
    '🎒': [
        'Sırt Çantası',
        ':backpack:',
        'Bag',
        'School Bag',
        'School Satchel',
        'Rucksack'
    ],
    '👞': [
        'Mans Shoe',
        ':mans_shoe:',
        'Mans Shoe',
        'Shoe',
        'Brown Show',
        'Dress Show'
    ],
    '👟': [
        'Athletic Shoe',
        ':athletic_shoe:',
        'Running Shoe',
        'Sneaker',
        'Runner',
        'Trainer',
        'Tennis Shoe'
    ],
    '🥾': [
        'Hiking Boot',
        ':hiking_boot:'
    ],
    '🥿': [
        'Flat Shoe',
        ':flat_shoe:'
    ],
    '👠': [
        'High-Heeled Shoe',
        ':high_heeled_shoe:',
        ':high_heel:',
        'Stiletto',
        'High Heels'
    ],
    '👡': [
        'Womans Sandal',
        ':womans_sandal:',
        'Womans Sandal',
        'Heeled Sandal',
        'Sandals',
        'Sandal'
    ],
    '👢': [
        'Womans Boots',
        ':womans_boots_',
        'Womans Boots',
        'Cowgirl Boots',
        'Knee High Boots',
        'Heeled Boots'
    ],
    '👑': [
        'Crown',
        ':crown:',
        'King',
        'Queen',
        'Prince',
        'Royal',
        'Princess',
        ':gold:',
        ':yellow:'
    ],
    '👒': [
        'Şapka',
        ':hat:',
        'Womans Hat',
        'Hat With Bow',
        'Ladies Hat'
    ],
    '🎩': [
        'Yüksek Şapka',
        ':top_hat:',
        'Formal Wear',
        'Groom',
        ':black:'
    ],
    '🎓': [
        'Graduation Cap',
        ':graduation_cap:',
        'College',
        'Graduate',
        'Mortar Board',
        'University',
        'Square Academic Cap',
        ':black:'
    ],
    '🧢': [
        'Billed Cap',
        ':billed_cap:',
        'Baseball Cap'
    ],
    '⛑️': [
        'Helmet with White Cross',
        ':helmet_with_white_cross:',
        ':helmet_with_cross:',
        ':rescue_worker_helmet:',
        ':rescue_workers_helmet:',
        'Rescue Workers Helmet',
        ':red:',
        ':white:'
    ],
    '💼': [
        'Briefcase',
        ':briefcase:',
        'Suitcase'
    ],
    '🎖️': [
        'Military Medal',
        ':military_medal:',
        ':medal:',
        'Medal',
        'Medallion',
        'Military Decoration'
    ],
    '📿': [
        'Prayer Beads',
        ':prayer_beads:',
        'Dhikr Beads',
        'Rosary Beads'
    ],
    '🎗️': [
        'Reminder Ribbo',
        ':reminder_ribbo:'
    ],
    '🤿': [
        'Diving Mask',
        ':diving_mask:'
    ],
    '🦺': [
        'Safety Vest',
        ':safety_vest:'
    ],
    '🥻': [
        'Sari',
        ':sari:',
        'Saree',
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
        'Roller Skate',
        ':roller_skate:',
        'Inline Skate',
        'Roller Derby'
    ],
    '🩴': [
        'Flip Flop',
        ':flip_flop:',
        'Thong Sandal'
    ],
    '🪖': [
        'Military Helmet',
        ':military_helmet:'
    ],
    '🩰': [
        'Ballet Shoes',
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
        'El Sallama İşareti',
        ':wave:',
        ':waving_hand:',
        'Goodbye',
        'Hand Wave',
        'Hello',
        'Hi'
    ],
    '🖐️{{skin_tone}}': [
        'Hand with Fingers Splayed',
        ':hand_splayed:',
        ':raised_hand_with_fingers_splayed:',
        ':hand_with_fingers_splayed:',
        'Five Hand',
        'Splayed Hand',
        'Raised Hand with Fingers Splayed'
    ],
    '🤚{{skin_tone}}': [
        'Raised Back of Hand',
        ':raised_back_of_hand:',
        ':back_of_hand:',
        'Backhand'
    ],
    '✋{{skin_tone}}': [
        'Raised Hand',
        ':raised_hand:',
        ':hand:',
        'High Five',
        'Stop'
    ],
    '🖖{{skin_tone}}': [
        'Vulcan Salute',
        ':vulcan_salute:',
        'Spock',
        'Star Trek',
        'Raised Hand with Part Between Middle and Ring Fingers'
    ],
    '👌{{skin_tone}}': [
        'OK Hand Sign',
        ':ok_hand:',
        'Okay',
        'Perfect',
        'Yes'
    ],
    '✌️{{skin_tone}}': [
        'Victory Hand',
        ':victory_hand:',
        'Air Quotes',
        'Peace Sign',
        'V Sign'
    ],
    '🤞{{skin_tone}}': [
        'Crossed Fingers',
        ':crossed_fingers:',
        'Fingers Crossed',
        'Good Luck',
        'Hand with Index and Middle Fingers Crossed'
    ],
    '🤟{{skin_tone}}': [
        'Love-You Gesture',
        ':love_you_gesture:',
        ':i_love_you_hand_sign:',
        'I Love You Hand Sign'
    ],
    '🤘{{skin_tone}}': [
        'Sign of the Horns',
        ':the_horns:',
        ':sign_of_the_horns:',
        ':metal:',
        'Devil Fingers',
        'Heavy Metal',
        'Rock On'
    ],
    '🤙{{skin_tone}}': [
        'Call Me Hand Sign',
        ':call_me_hand:',
        ':call_me:',
        'Phone Hand',
        'Shaka'
    ],
    '🤏{{skin_tone}}': [
        'Pinching Hand',
        ':pinching_hand:'
    ],
    '👈{{skin_tone}}': [
        'Backhand Index Pointing Left',
        ':backhand_index_pointing_left:',
        ':point_left:',
        'White Left Pointing Backhand Index'
    ],
    '👉{{skin_tone}}': [
        'Backhand Index Pointing Right',
        ':backhand_index_pointing_right:',
        ':point_right:',
        'White Right Pointing Backhand Index'
    ],
    '👆{{skin_tone}}': [
        'Backhand Index Pointing Up',
        ':point_up_2:',
        ':backhand_index_pointing_up:',
        'White Up Pointing Backhand Index',
        'Middle Finger'
    ],
    '👇{{skin_tone}}': [
        'Backhand Index Pointing Down',
        ':point_down:',
        ':backhand_index_pointing_down:',
        'White Down Pointing Backhand Index',
        'Pointing Down'
    ],
    '☝{{skin_tone}}': [
        'Index Finger Pointing Up',
        ':point_up:',
        ':index_pointing_up:',
        'White Up Pointing Index',
        'Secret'
    ],
    '🖕{{skin_tone}}': [
        'Middle Finger',
        ':middle_finger:',
        'Flipping The Bird',
        'Rude Finger',
        'Reversed Hand with Middle Finger Extended'
    ],
    '👍{{skin_tone}}': [
        'Thumbs Up Sign',
        ':thumbs_up_sign:',
        'Like',
        'Yes'
    ],
    '👎{{skin_tone}}': [
        'Thumbs Down Sign',
        ':thumbs_down_sign:',
        'Bad',
        'Dislike',
        'No'
    ],
    '✊{{skin_tone}}': [
        'Raised Fist',
        ':raised_fist:',
        'Fist Pump'
    ],
    '👊{{skin_tone}}': [
        'Oncoming Fist',
        ':oncoming_fist:',
        'Bro Fist',
        'Brofist',
        'Fist Bump',
        'Punch',
        'Closed Fist',
        'Fisted Hand Sign'
    ],
    '🤛{{skin_tone}}': [
        'Left Fist Bump',
        ':left_fist_bump:'
    ],
    '🤜{{skin_tone}}': [
        'Right Fist Bump',
        ':right_fist:bump:'
    ],
    '🤌{{skin_tone}}': [
        'Pinched Fingers',
        ':pinched_fingers:',
        'Ma Che Vuoi',
        'Finger Purse'
    ],
    '👏{{skin_tone}}': [
        'Clapping Hands Sign',
        ':cap:',
        ':clapping_hands:',
        'Applause',
        'Clap',
        'Clapping',
        'Golf Clap',
        'Round Of Applause'
    ],
    '🙌{{skin_tone}}': [
        'Person Raising Both Hands in Celebration',
        ':raised_hands:',
        ':raising_hands:',
        'Raising Hands',
        'Arms In The Air',
        'Banzai',
        'Festivus Miracle',
        'Hallelujah',
        'Praise Hands',
        'Two Hands'
    ],
    '👐{{skin_tone}}': [
        'Open Hands Sign',
        ':open_hands_sign:',
        'Hug',
        'Jazz Hands'
    ],
    '🤲{{skin_tone}}': [
        'Palms Up Together',
        ':palms_up_together:',
        'Dua'
    ],
    '🤝{{skin_tone}}': [
        'Handshake',
        ':handshake:',
        'Shaking Hands'
    ],
    '🙏{{skin_tone}}': [
        'Folded Hands',
        ':folded_hands:',
        'Namaste',
        'Please',
        'Prayer',
        'Thank You',
        'Person with Folded Hands'
    ],
    '✍{{skin_tone}}': [
        'Writing Hand',
        ':writing_hand:'
    ],
    '🫱{{skin_tone}}': [
        'Rightwards Hand',
        ':rightwards_hand:'
    ],
    '🫲{{skin_tone}}': [
        'Leftwards Hand',
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
        'Hand with Index Finger and Thumb Crossed',
        ':hand_with_index_finger_and_thumb_crossed:'
    ],
    '🫵{{skin_tone}}': [
        'Index Pointing at the Viewer',
        ':index_pointing_at_the_viewer:'
    ],
    '🫶{{skin_tone}}': [
        'Heart Hands',
        ':heart_hands:',
        'Love'
    ],
    '💪{{skin_tone}}': [
        'Flexed Biceps',
        ':flexed_biceps:',
        'Flexing Arm Muscles',
        'Musle',
        'Strong'
    ],
    '🦵{{skin_tone}}': [
        'Leg',
        ':leg:'
    ],
    '🦶{{skin_tone}}': [
        'Foot',
        ':foot:'
    ],
    '👂{{skin_tone}}': [
        'Kulak',
        ':ear:',
        'Ears',
        'Hearing',
        'Listening'
    ],
    '👃{{skin_tone}}': [
        'Burun',
        ':nose:',
        'Smelling',
        'Sniffing',
        'Stinky'
    ],
    '🦻{{skin_tone}}': [
        'Ear with Hearing Aid',
        ':ear_with_hearing_aid:'
    ],
    '🧠': [
        'Beyin',
        ':brain:',
        ':pink:'
    ],
    '🦷': [
        'Diş',
        ':tooth:',
        ':white:'
    ],
    '👀': [
        'Göz',
        ':eyes:',
        'Eyeballs',
        'Shifty Eyes',
        'Wise Eyes'
    ],
    '👁️': [
        'Eye',
        ':eye:',
        'Single Eye'
    ],
    '👅': [
        'Tongue Out',
        ':tongue_out:',
        ':red:'
    ],
    '👄': [
        'Mouth',
        ':mouth:',
        'Kissing Lips',
        'Lips',
        ':red:'
    ],
    '🫦': [
        'Biting Lip',
        ':biting_lip:',
        'Lips',
        ':red:'
    ],
    '🫀': [
        'Anatomical Heart',
        ':anatomical_heart:',
        ':red:'
    ],
    '🫁': [
        'Lungs',
        ':lungs:',
        ':red:'
    ],
    '🦾': [
        'Mechanical Arm',
        ':mechanical_arm:',
        'Strong',
        ':gray:',
        ':grey:'
    ],
    '🦿': [
        'Mechanical Leg',
        ':mechanical_leg:',
        ':gray:',
        ':grey:'
    ],
    '💅{{skin_tone}}': [
        'Nail Polish',
        ':nail_polish:',
        'Fingers',
        'Manicure',
        'Nonchalant'
    ],
    '🤳{{skin_tone}}': [
        'Selfie',
        ':selfie:',
        'Phone Camera',
        'Selfie Hand'
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
        'Pile of Poo',
        ':pile_of_poo:',
        'Dog Dirt',
        'Smiling Poop',
        ':brown:'
    ],
    '💋': [
        'Kiss Mark',
        ':kiss_mark:',
        'Kissing Lips',
        ':red:'
    ],
    '🦴': [
        'Kemik',
        ':bone:'
    ],
    '🧳': [
        'Luggage',
        ':luggage:',
        'Suitcase'
    ],
    '🌂': [
        'Closed Umbrella',
        ':closed_umbrella:',
        'Collapsed Umbrella',
        'Pink Umbrella',
        ':pink:',
        ':purple:'
    ],
    '☂️': [
        'Umbrella',
        ':umbrella:',
        ':purple:'
    ],
    '☔': [
        'Umbrella with Rain Drops',
        ':umbrella_with_rain_drops:',
        ':umbrella:',
        'Raining',
        'Rainy'
    ],
    '🧵': [
        'Spool of Thread',
        ':spool_of_thread:'
    ],
    '🧶': [
        'Ball of Yarn',
        ':ball_of_yarn:'
    ],
    '💄': [
        'Lipstick',
        ':lipstick:',
        'Lip Gloss',
        'Makeup',
        ':red:'
    ],
    '💍': [
        'Ring',
        ':ring:',
        'Diamond Ring',
        'Engagement Ring'
    ],
    '💎': [
        'Gem stone',
        ':gem_stone:',
        'Diamond',
        'Gem',
        'Gemstone',
        'Jewel',
        ':blue:'
    ],
    '💥': [
        'Collision Symbol',
        ':collision_symbol:',
        'Bang',
        'Explode',
        'Impact',
        'Red Spark',
        'Explosion'
    ],
    '💫': [
        'Dizzy Symbol',
        ':dizzy_symbol:',
        'Circle And Star',
        ':yellow:'
    ],
    '💦': [
        'Splashing Sweat Symbol',
        'sweat_drops',
        'sweat_droplets',
        'Plewds',
        'Splashing Water',
        'Water Drops',
        ':blue:'
    ],
    '💨': [
        'Dashing Away',
        ':dashing_away:',
        'Fast',
        'Steam',
        'Vaping',
        'Wind',
        'Dash Symbol',
        'Gust of Wind'
    ],
    '🌬️': [
        'Wind Face',
        ':wind_face:',
        'Blowing Wind',
        'Mother Nature',
        'Wind Blowing Face',
        ':white:'
    ],
    '🐾': [
        'Paw Prints',
        ':paw_prints:',
        'Cat Paw Prints',
        'Dog Paw Prints',
        'Kitten Paw Prints',
        'Puppy Paw Prints'
    ],
    '🕸️': [
        'Örümcek Ağı',
        ':spider_web:',
        'Cobweb',
        'Web',
        'Spiderweb'
    ],
    '🦠': [
        'Mikrop',
        ':microbe:',
        'Cell',
        'Coronavirus',
        'COVID-19',
        'Germ',
        'Microorganism',
        'Virus',
        ':green:'
    ],
    '💐': [
        'Çiçek Buketi',
        ':bouquet_of_flowers:'
    ],
    '🌍': [
        'Globe Showing Europe-Africa',
        ':globe_showing_europe_africa:',
        ':earth_africa:',
        'Earth',
        'Globe',
        'Planet',
        'World',
        'Globe Showing Europe and Africa',
        ':blue:'
    ],
    '🌎': [
        'Globe Showing Americas',
        ':globe_showing_americas:',
        ':earth_americas:',
        'Earth',
        'Globe',
        'Planet',
        'World',
        ':blue:'
    ],
    '🌏': [
        'Globe Showing Asia-Australia',
        ':globe_showing_asia_australia:',
        ':earth_asia:',
        'Earth',
        'Globe',
        'Planet',
        'World',
        'Globe Showing Asia and Australia',
        ':blue:'
    ],
    '🌐': [
        'Globe with Meridians',
        ':globe_with_meridians:',
        'Internet',
        'World Wide Web',
        'WWW'
    ],
    '🌑': [
        'New Moon Symbol',
        ':new_moon:',
        'Dark Moon',
        'Shadow Moon',
        'Solar Eclipse',
        ':black:'
    ],
    '🌒': [
        'Waxing Crescent Moon Symbol',
        ':waxing_crescent_moon:',
        ':yellow:',
        ':black:'
    ],
    '🌓': [
        'First Quarter Moon Symbol',
        ':first_quarter_moon:',
        ':yellow:',
        ':black:'
    ],
    '🌔': [
        'Waxing Gibbous Moon Symbol',
        ':moon:',
        ':waxing_gibbous_moon:',
        ':yellow:',
        ':black:'
    ],
    '🌕': [
        'Full Moon Symbol',
        ':full_moon:',
        ':yellow:'
    ],
    '🌖': [
        'Waning Gibbous Moon Symbol',
        ':waning_gibbous_moon:',
        ':yellow:',
        ':black:'
    ],
    '🌗': [
        'Last Quarter Moon Symbol',
        ':last_quarter_moon:',
        ':yellow:',
        ':black:'
    ],
    '🌘': [
        'Waning Crescent Moon Symbol',
        ':waning_crescent_moon:',
        ':yellow:',
        ':black:'
    ],
    '🌙': [
        'Crescent Moon',
        ':crescent_moon:',
        ':yellow:'
    ],
    '🌚': [
        'New Moon with Face',
        ':new_moon_with_face:',
        'Creepy Moon',
        'Dark Moon Face',
        'Molester Moon',
        ':black:',
        ':gray:',
        ':grey:'
    ],
    '🌝': [
        'Full Moon with Face',
        ':full_moon_with_face:',
        'Moonface',
        'Smiley Moon',
        'Smiling Moon',
        ':yellow:'
    ],
    '🌛': [
        'First Quarter Moon with Face',
        ':first_quarter_moon_with_face:',
        ':first_quarter_moon_face:',
        ':yellow:'
    ],
    '🌜': [
        'Last Quarter Moon with Face',
        ':last_quarter_moon_with_face:',
        ':last_quarter_moon_face:',
        ':yellow:'
    ],
    '🌞': [
        'Sun with Face',
        ':sun_with_face:',
        'Smiley Sun',
        'Sunface',
        'Smiling Sun',
        ':yellow:'
    ],
    '☀️': [
        'Sun',
        ':sun:',
        'Sunshine',
        ':yellow:'
    ],
    '⭐': [
        'Star',
        ':star:',
        'White Medium Star',
        ':yellow:'
    ],
    '🌟': [
        'Glowing Star',
        ':glowing_star:',
        'Shining Star',
        ':yellow:'
    ],
    '☁️': [
        'Cloud',
        ':cloud:',
        'Cloudy',
        'Overcast',
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
        'Cloud with Lightning and Rain',
        ':thunder_cloud_and_rain:',
        ':thunder_cloud_rain:',
        ':cloud_with_lightning_and_rain:',
        'Thunder Cloud and Rain',
        ':white:'
    ],
    '🌤️': [
        'White Sun with Small Cloud',
        ':mostly_sunny:',
        ':sun_behind_small_cloud:',
        ':sun_small_cloud:',
        ':white_sun_small_cloud:',
        ':white_sun_with_small_cloud:',
        ':white:'
    ],
    '🌥️': [
        'Sun Behind Large Cloud',
        ':sun_behind_large_cloud:',
        'White Sun Behind Cloud',
        ':white:'
    ],
    '🌦️': [
        'White Sun Behind Cloud with Rain',
        ':sun_behind_rain_cloud:',
        ':partly_sunny_rain:',
        ':white_sun_rain_cloud:',
        ':white_sun_behind_cloud_with_rain:',
        ':white:'
    ],
    '🌧️': [
        'Cloud with Rain',
        ':cloud_with_rain:',
        ':white:'
    ],
    '🌨️': [
        'Cloud with Snow',
        ':cloud_with_snow:',
        ':white:'
    ],
    '🌩️': [
        'Cloud with Lightning',
        ':cloud_with_lightning:',
        ':white:'
    ],
    '🌪️': [
        'Tornado',
        ':tornado:',
        'Cloud with Tornado'
    ],
    '🌫️': [
        'Fog',
        ':fag:',
        ':white:',
        ':gray:',
        ':grey:'
    ],
    '🌈': [
        'Rainbow',
        ':rainbow:',
        'Gay Pride',
        'Primary Rainbow',
        'LGBTQIA+',
        'LGBT+'
    ],
    '❄️': [
        'Snowflake',
        ':snowflake:',
        'Snow',
        'Snowing',
        ':white:'
    ],
    '🌀': [
        'Cyclone',
        ':cyclone:',
        'Hurricane',
        'Spiral',
        'Swirl',
        'Tornado'
    ],
    '⚡': [
        'High Voltage Sign',
        ':high_voltage_sign:',
        'Lightning Bolt',
        'Thunderbolt',
        'High Voltage'
    ],
    '☃️': [
        'Snowman',
        ':snowman:',
        'Snowman With Snowflakes',
        ':white:'
    ],
    '⛄': [
        'Snowman Without Snow',
        'snowman_without_snow',
        ':snowman:',
        'Frosty The Snowman',
        'Olaf',
        'Snowman',
        ':white:'
    ],
    '☄️': [
        'Comet',
        ':comet:'
    ],
    '🔥': [
        'Fire',
        ':fire:',
        'Flame',
        'Hot',
        'Lit',
        'Snapstreak',
        ':red:'
    ],
    '💧': [
        'Droplet',
        ':droplet:',
        'Water',
        'Water Drop',
        ':blue:'
    ],
    '✨': [
        'Sparkles',
        ':sparkles:',
        'Glitter',
        'Shiny',
        'New'
    ],
    '🌊': [
        'Water Wave',
        ':water_wave:',
        'Beach',
        'Ocean Wave',
        'Sea',
        ':blue:'
    ],
    '🎄': [
        'Noel Ağacı',
        'christmas_tree',
        'Christmas',
        'Xmas Tree',
        ':green:'
    ],
    '🎃': [
        'Jack-O-Lantern',
        'jack_o_lantern',
        'Halloween',
        'Pumpkin',
        ':orange:'
    ],
    '🌻': [
        'Ayçiçeği',
        ':sunflower:',
        'Yellow Flower',
        ':yellow:'
    ],
    '🌼': [
        'Çiçek',
        ':blossom:',
        'Blossoming Flower',
        'Daisy',
        'Yellow Flower',
        ':yellow:'
    ],
    '🌷': [
        'Lale',
        ':tulip:',
        ':pink:'
    ],
    '🌹': [
        'Gül',
        ':rose_flower:',
        'Red Rose',
        ':red:'
    ],
    '☘️': [
        'Shamrock',
        ':shamrock:',
        'Clover',
        'Trefoil',
        ':green:'
    ],
    '🍀': [
        'Four Leaf Clover',
        ':four_leaf_clover:',
        'Clover',
        'Ireland',
        'Lucky',
        'Fortune',
        ':green:'
    ],
    '🌸': [
        'Cherry Blossom',
        ':cherry_blossom:',
        'Pink Flower',
        'Sakura',
        ':pink:'
    ],
    '💮': [
        'White Flower',
        ':white_flower:',
        'Cherry Blossom',
        'Paper Doily',
        'Well Done Stamp',
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
        'Spring',
        'Sprout',
        'Sprouting',
        ':green:'
    ],
    '🌲': [
        'Evergreen Tree',
        ':evergreen_tree:',
        'Fir Tree',
        'Pine Tree',
        ':green:'
    ],
    '🌳': [
        'Deciduous Tree',
        ':deciduous_tree:',
        'Rounded Tree',
        ':green:'
    ],
    '🌴': [
        'Palm Tree',
        ':palm_tree:',
        'Coconut Tree',
        ':green:'
    ],
    '🎋': [
        'Tanabata Tree',
        ':tanabata_tree:',
        'Tanabata',
        'Wish Tree'
    ],
    '🎍': [
        'Pine Decoration',
        ':pine_decoration:',
        'Bamboo',
        'Kadomatsu',
        'New Year Decoration'
    ],
    '🌵': [
        'Cactus',
        ':cactus:',
        'Desert',
        ':green:'
    ],
    '🌾': [
        'Sheaf of Rice',
        ':sheaf_of_rice:',
        'Crop',
        'Farming',
        'Wheat',
        'Ear of Rice'
    ],
    '🌿': [
        'Herb',
        ':herb:',
        'Crop',
        'Plant',
        ':green:'
    ],
    '🍁': [
        'Maple Leaf',
        ':maple_leaf:',
        'Canada',
        'Canadian',
        'Maple',
        ':brown:'
    ],
    '🍂': [
        'Fallen Leaf',
        ':fallen_leaf:',
        'Autumn Leaf',
        'Autumn Leaves',
        'Brown Leaves',
        'Fall Leaves',
        'Fallen Leaves',
        ':brown:'
    ],
    '🍃': [
        'Leaf Fluttering in Wind',
        ':leaf_fluttering_in_wind:',
        ':leaves:',
        'Green Leaves',
        'Spring',
        ':green:'
    ],
    '🪴': [
        'Potted Plant',
        ':potted_plant:',
        ':green:'
    ],
    '🪸': [
        'Coral',
        ':coral:',
        'Climate change'
    ],
    '🪷': [
        'Lotus',
        ':lotus:',
        'Purity',
        'Beauty',
        'Calmness',
        'Serenity'
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
        'Key',
        ':key:',
        'Gold Key',
        ':gold:',
        ':yellow:'
    ],
    '🗝️': [
        'Old Key',
        ':old_key:',
        ':brown:'
    ],
    '🔨': [
        'Hammer',
        ':hammer:',
        'Claw Hammer',
        'Handyman',
        'Tool'
    ],
    '⛏️': [
        'Pick',
        ':pick:',
        'Pickaxe'
    ],
    '🪓': [
        'Axe',
        ':axe:',
        'firefighter'
    ],
    '🪚': [
        'Carpentry Saw',
        ':carpentry_saw:'
    ],
    '🪛': [
        'Screwdriver',
        ':screwdriver:'
    ],
    '🪝': [
        'Hook',
        ':hook:'
    ],
    '🪠': [
        'Plunger',
        ':plunger:'
    ],
    '🪣': [
        'Bucket',
        ':bucket:'
    ],
    '🔩': [
        'Nut and Bolt',
        ':nut_and_bolt:',
        'Bolt',
        'Screw',
        ':gray:',
        ':grey:'
    ],
    '🗜️': [
        'Clamp',
        ':clamp:',
        'Table Vice',
        'WinZip',
        'Compression',
        ':gray:',
        ':grey:'
    ],
    '🔒': [
        'Locked',
        ':locked:',
        'Closed Lock',
        'Padlock'
    ],
    '🔓': [
        'Unlocked',
        ':unlocked:',
        'Open Padlock',
        'Open Lock'
    ],
    '🔏': [
        'Locked with Pen',
        ':locked_with_pen:',
        'Lock And Pen',
        'Lock With Fountain Pen',
        'Lock with Ink Pen'
    ],
    '🔐': [
        'Locked with Key',
        ':locked_with_key:',
        'Closed Lock with Key'
    ],
    '🗡️': [
        'Dagger',
        ':dagger:',
        'Knife Weapon',
        ':gray:',
        ':grey:'
    ],
    '⚔️': [
        'Crossed Swords',
        ':crossed_swords:',
        ':gray:',
        ':grey:'
    ],
    '🔫': [
        'Pistol',
        ':pistol:',
        'Gun',
        'Revolver',
        'Squirt Gun',
        'Water Gun',
        'Water Pistol'
    ],
    '🧰': [
        'Toolbox',
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
        'Blood Donation',
        'Blood Test',
        'Needle',
        'Vaccination',
        'blood',
        'sick',
        'ill'
    ],
    '🧬': [
        'DNA',
        ':dna:',
        'DNA Double Helix'
    ],
    '🧪': [
        'Test Tube',
        ':test_tube:',
        ':green:'
    ],
    '🛏️': [
        'Bed',
        ':bed:',
        'Bedroom'
    ],
    '🛋️': [
        'Couch and Lamp',
        ':couch_and_lamp:',
        'Lounge',
        'Settee',
        'Sofa'
    ],
    '🪑': [
        'Chair',
        ':chair:'
    ],
    '🚪': [
        'Door',
        ':door:',
        'Doorway',
        'Front Door'
    ],
    '🪟': [
        'Window',
        ':window:'
    ],
    '🪜': [
        'Ladder',
        ':ladder:'
    ],
    '🪞': [
        'Mirror',
        ':mirror:'
    ],
    '🚽': [
        'Toilet',
        ':toilet:',
        'Bathroom',
        'Loo',
        'Restroom',
        'WC',
        ':white:'
    ],
    '🚿': [
        'Shower',
        ':shower:',
        'Shower Head',
        ':shower:'
    ],
    '🛁': [
        'Bathtub',
        ':bathtub:',
        'Bubble Bath',
        ':shower:'
    ],
    '🧴': [
        'Lotion Bottle',
        ':location_bottle:'
    ],
    '🧷': [
        'Safety Pin',
        ':safety_pin:',
        ':gray:',
        ':grey:'
    ],
    '🧺': [
        'Basket',
        ':basket:',
        ':brown:'
    ],
    '🧻': [
        'Roll of Paper',
        ':roll_of_paper:',
        'Toilet Paper',
        ':white:'
    ],
    '🧼': [
        'Bar of Soap',
        ':bar_of_soap:',
        'Tidy',
        'Clean',
        'Scrub'
    ],
    '🧽': [
        'Sponge',
        ':sponge:',
        ':yellow:'
    ],
    '🧯': [
        'Fire Extinguisher',
        ':fire_extinguisher:',
        ':red:'
    ],
    '🚬': [
        'Cigarette',
        ':cigarette:',
        'Smoke Symbol'
    ],
    '⚰️': [
        'Coffin',
        ':coffin:',
        'Casket',
        'Funeral',
        ':brown:'
    ],
    '⚱️': [
        'Funeral Urn',
        ':funeral_urn:',
        'Vase'
    ],
    '🛡️': [
        'Shield',
        ':shield:'
    ],
    '⚙️': [
        'Gear',
        ':gear:',
        'Settings',
        'Options',
        ':gray:',
        ':grey:'
    ],
    '⚖️': [
        'Balance Scale',
        ':balance_scale:',
        'Scales of Justice'
    ],
    '⛓️': [
        'Chains',
        ':chains:'
    ],
    '🔗': [
        'Link',
        ':link:',
        'Chain',
        'Hyperlink',
        'Linked Chain',
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
        'Skull',
        ':skull:',
        'Death',
        'Grey Skull',
        'Skeleton',
        ':white:'
    ],
    '☠️': [
        'Skull and Crossbones',
        ':skull_and_crossbones:',
        ':white:'
    ],
    '🎡': [
        'Ferris Wheel',
        ':ferris_wheel:',
        'Big Wheel',
        'Fairgroundl',
        'Observation Wheel'
    ],
    '⛽': [
        'Fuel Pump',
        'fuel_pump:',
        'Oil',
        'Petrol',
        'Gas',
        ':red:'
    ],
    '🚨': [
        'Police Cars Revolving Light',
        ':rotating_light:',
        ':police_police_car:',
        'Emergency Light',
        'Flashing Light',
        'Siren',
        ':red:'
    ],
    '🚥': [
        'Horizontal Traffic Light',
        ':horizontal_traffic_light:',
        ':green:',
        ':red:',
        ':yellow:',
        ':orange:'
    ],
    '🚦': [
        'Vertical Traffic Light',
        ':vertical_traffic_light:',
        ':green:',
        ':red:',
        ':yellow:',
        ':orange:'
    ],
    '⚓': [
        'Admiralty Pattern Anchor',
        ':anchor:',
        'Fisherman'
    ],
    '🚧': [
        'Construction Sign',
        ':construction_sign:',
        'Black And Yellow Striped Sign',
        ':yellow:',
        ':black:'
    ],
    '🪂': [
        'Parachute',
        ':parachute:'
    ],
    '💺': [
        'Seat',
        ':seat:',
        'Bus Airplane Train Aeroplane'
    ],
    '🪐': [
        'Saturn',
        ':saturn:'
    ],
    '🎆': [
        'Fireworks',
        ':fireworks:',
        'Explosion'
    ],
    '🎇': [
        'Senko Hanabi',
        ':senko_hanabi:',
        'Firework Sparkler'
    ],
    '💷': [
        'Pound Banknote',
        ':pound:',
        ':pound_banknote:',
        '£20 Note',
        'Twenty Quid Note',
        'Banknote with Pound Sign',
        ':purple:'
    ],
    '💶': [
        'Euro Banknote',
        ':euro:',
        ':euro_banknote:',
        '€100 Note',
        'Banknote with Euro Sign',
        ':blue:'
    ],
    '💵': [
        'Dollar Banknote',
        ':dollar:',
        ':dollar_banknote:',
        '$1 Note',
        'Banknote with Dollar Sign',
        'Dollar Bill',
        'American Dollar',
        ':green:'
    ],
    '💴': [
        'Yen Banknote',
        ':yen:',
        ':yen_banknote:',
        '¥1000 Note',
        'Yen Note',
        'Banknote with Yen Sign',
        ':yellow:'
    ],
    '⛺': [
        'Camping Tent',
        ':camping_tent:'
    ],
    '⛲': [
        'Fountain',
        ':fountain:',
        'Water Feature',
        'Water Fountain',
        'Park'
    ],
    '💰': [
        'Money Bag',
        ':money_bag:',
        'Moneybags',
        'Rich',
        '$'
    ],
    '💸': [
        'Money with Wings',
        ':money_with_wings:',
        'Flying Money',
        ' Losing Money'
    ],
    '🏷️': [
        'Label Tag',
        ':label_tag:'
    ],
    '🔖': [
        'Bookmark',
        ':bookmark:',
        'Price Tag',
        'Tag'
    ],
    '📑': [
        'Bookmark Tabs',
        ':bookmark_tabs:',
        ':white:'
    ],
    '📯': [
        'Postal Horn',
        ':postal_horn:',
        'Bugle',
        'French Horn'
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
        'Celebration',
        'Party Hat'
    ],
    '🎈': [
        'Balloon',
        ':balloon:',
        'Party',
        'Red Balloon',
        ':red:'
    ],
    '🌡️': [
        'Thermometer',
        ':thermometer:',
        'Hot Weather',
        'Temperature',
        ':red:'
    ],
    '🛢️': [
        'Oil Drum',
        ':oil_drum:'
    ],
    '💣': [
        'Bomb',
        ':bomb:',
        'boom'
    ],
    '🔪': [
        'Kitchen Knife',
        ':kitchen_knife:',
        'Knife',
        'Butchers Knife',
        'Hocho'
    ],
    '🏺': [
        'Amphora',
        ':amphora:',
        'Jar',
        'Vase'
    ],
    '🗺️': [
        'Dünya Haritası',
        ':world_map:'
    ],
    '🎼': [
        'Müzik Notası',
        ':musical_score:',
        'Sheet Music',
        'Treble Clef'
    ],
    '🎬': [
        'Klaket Tahtası',
        ':clapper_board:',
        'Cut',
        'Action',
        'Director',
        'Film Slate'
    ],
    '🎻': [
        'Keman',
        ':violin:',
        'String Quartet',
        'Worlds Smallest Violin'
    ],
    '🎺': [
        'Trompet',
        ':trumpet:',
        'Horn',
        'Jazz'
    ],
    '🎸': [
        'Gitar',
        ':guitar:',
        'Acoustic Guitar',
        'Bass Guitar',
        'Electric Guitar'
    ],
    '🎷': [
        'Saksafon',
        ':saxophone:',
        'Jazz',
        'Sax'
    ],
    '🥁': [
        'Davul',
        ':drum:',
        'Drum with Drumsticks'
    ],
    '🎹': [
        'Piyano',
        ':piano:',
        'Musical Keyboard',
        ':white:',
        ':black:'
    ],
    '🪕': [
        'Banjo',
        ':banjo:'
    ],
    '🪗': [
        'Akordeon',
        ':accordion:'
    ],
    '🪘': [
        'Uzun Davul',
        ':long_drum:'
    ],
    '🎨': [
        'Sanatçı Paleti',
        ':artist_palette:',
        'Art',
        'Painting'
    ],
    '🧩': [
        'Bulmaca Parçası',
        ':puzzle_piece:',
        'Jigsaw Puzzle Piece',
        ':green:'
    ],
    '🎲': [
        'Oyun Zarı',
        ':game_die:',
        'Dice',
        ':white:'
    ],
    '🎭': [
        'Performans Sanatları',
        'performing_arts',
        'Theatre',
        'Theater',
        'Drama Masks',
        'Greek Theatre Masks',
        'Tragedy and Comedy Masks',
        'Venice'
    ],
    '🔍': [
        'Sola Eğilmiş Büyüteç',
        ':mag:',
        ':magnifying_glass_tilted_left:',
        'Magnifier',
        'Search Icon',
        'Left-Pointing Magnifying Glass',
        'Find',
        ':transparent:'
    ],
    '🔎': [
        'Sağa Eğilmiş Büyüteç',
        ':mag_right:',
        ':magnifying_glass_tilted_right:',
        'Magnifier',
        'Search Icon',
        'Right-Pointing Magnifying Glass',
        'Find',
        ':transparent:'
    ],
    '⌛': [
        'Tamamlanmış Kum Saati',
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
        'Tamamlanmamış Kum Saati',
        ':hourglass_flowing_sand:',
        ':hourglass_not_done:',
        'Hourglass with Flowing Sand',
        'Busy',
        'Time',
        'Egg timer',
        'Flowing',
        'Sand Clock'
    ],
    '🕐': [
        'One OClock',
        ':clock1:',
        ':one_oclock:',
        'Clock Face One OClock',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕜': [
        'Bir Buçuğu Gösteren Saat',
        ':clock130:',
        ':one_thirty:',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕑': [
        'Two OClock',
        ':clock2:',
        ':two_oclock:',
        'Clock Face Two OClock',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕝': [
        'İki Buçuğu Gösteren Saat',
        ':clock230:',
        ':two_thirty:',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕒': [
        'Three OClock',
        ':clock3:',
        ':three_oclock:',
        'Clock Face Three OClock',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕞': [
        'Üç Buçuğu Gösteren Saat',
        ':clock330:',
        ':three_thirty:',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕓': [
        'Four OClock',
        ':clock4:',
        ':four_oclock:',
        'Clock Face Four OClock',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕟': [
        'Dört Buçuğu Gösteren Saat',
        ':clock430:',
        ':four_thirty:',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕔': [
        'Five OClock',
        ':clock5:',
        ':five_oclock:',
        'Clock Face Five OClock',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕠': [
        'Beş Buçuğu Gösteren Saat',
        ':clock530:',
        ':five_thirty:',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕕': [
        'Six OClock',
        ':clock6:',
        ':size_oclock:',
        'Clock Face Six OClock',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕡': [
        'Altı Buçuğu Gösteren Saat',
        ':clock630:',
        ':six_thirty:',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕖': [
        'Seven OClock',
        ':clock7:',
        ':seven_oclock:',
        'Clock Face Seven OClock',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕢': [
        'Yedi Buçuğu Gösteren Saat',
        ':clock730:',
        ':sever_thirty:',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕗': [
        'Eight OClock',
        ':clock8:',
        ':eight_oclock:',
        'Clock Face Eight OClock',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕣': [
        'Sekiz Buçuğu Gösteren Saat',
        ':clock830:',
        ':eight_thirty:',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕘': [
        'Nine OClock',
        ':clock9:',
        ':nine_clock:',
        'Clock Face Nine OClock',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕤': [
        'Dokuz Buçuğu Gösteren Saat',
        ':clock930:',
        ':nine_thirty:',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕙': [
        'Ten OClock',
        ':clock10:',
        ':ten_oclock:',
        'Clock Face Ten OClock',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕥': [
        'On Buçuğu Gösteren Saat',
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
        'Clock Face Eleven OClock',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕦': [
        'On Bir Buçuğu Gösteren Saat',
        ':clock1130:',
        ':eleven_thirty:',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕛': [
        'Twelve OClock',
        ':clock12:',
        ':twelve_oclock:',
        'Clock Face Twelve OClock',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕧': [
        'On İki Buçuğu Gösteren Saat',
        ':clock1230:',
        ':twelve_thirty:',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '♨️': [
        'Kaplıcalar',
        ':hot_springs:',
        'Onsen',
        'Steam',
        ':red:'
    ],
    '💈': [
        'Berber Direği',
        ':barber_pole:',
        'Barber Shop',
        'Barbers Stripes',
        'Hairdresser',
        ':blue:',
        ':red:'
    ],
    '🎪': [
        'Sirk Çadırı',
        ':circus_tent:',
        'Big Top',
        'Circus'
    ],
    '💢': [
        'Kızgınlık Sembolü',
        ':anger_symbol:',
        'Anger Sign',
        'Vein Pop',
        ':red:'
    ],
    '🗯️': [
        'Sağ Kızgın Konuşma Balonu',
        ':right_anger_bubble:',
        ':anger_right:',
        'Zig Zag Bubble',
        'Angry Speech Bubble',
        ':white:'
    ],
    '🗨️': [
        'Left Speech Bubble',
        ':left_speech_bubble:',
        ':speech_left:'
    ],
    '💊': [
        'Hap',
        ':pill:',
        'Capsule',
        'Tablet',
        'Drugs',
        'Sick',
        'ill',
        ':yellow:',
        ':red:'
    ],
    '🎎': [
        'Oyuncak Bebekler',
        ':dolls:',
        'Hinamatsuri',
        'Imperial Dolls',
        'Japanese Dolls'
    ],
    '🎏': [
        'Sazan Flama',
        ':carp_streamer:',
        'Fish Flag',
        'Koinobori',
        'Wind Socks'
    ],
    '🎐': [
        'Rüzgar Çanı',
        ':wind_chime:',
        'Furin',
        'Jellyfish',
        'Wind Bell'
    ],
    '🎀': [
        'Kurdele Fiyongu',
        ':ribbon_bow:',
        'Pink Bow',
        'Bow',
        ':pink:'
    ],
    '🎁': [
        'Hediye Paketi',
        ':wrapped_gift:',
        'Birthday Present',
        'Christmas Present',
        'Gift',
        'Gift Box',
        'Present',
        'Wrapped Present'
    ],
    '🎫': [
        'Bilet',
        ':ticket:',
        'Ticket Stub',
        'World Tour Ticket'
    ],
    '🃏': [
        'Joker',
        ':joker:',
        'Joker Card',
        'Playing Card Black Joker'
    ],
    '💡': [
        'Ampul',
        ':light_bulb:',
        'Idea',
        'Electric Light Bulb'
    ],
    '🔦': [
        'El Feneri',
        ':flashlight:',
        'Torch',
        'Electric Torch'
    ],
    '🏮': [
        'Kırmızı Kağıt Fener',
        ':izakaya_lantern:',
        ':lantern:',
        ':red_paper_lantern:',
        'Asian Lantern',
        'Japanese Lantern',
        'Red Lantern',
        'Izakaya Lantern',
        ':red:'
    ],
    '📦': [
        'Paket',
        ':package:',
        'Box',
        'Parcel',
        ':brown:'
    ],
    '📇': [
        'Dizin Kartı',
        ':card_index:',
        'Rolodex',
        'System Card',
        'Card Index'
    ],
    '🕳️': [
        'Delik',
        ':hole:',
        ':black:'
    ],
    '👁️‍🗨️': [
        'Görgü Tanığıyım',
        ':eye_in_speech_bubble:',
        ':eye_speech_bubble:',
        ':eye-in-speech-bubble:',
        'Eye in Speech Bubble'
    ],
    '⚜️': [
        'Zambak Şeklinde Arma',
        ':fleur_de_lis:',
        'Scouts',
        'New Orleans Saints'
    ],
    '⚗️': [
        'İmbik',
        ':alembic:'
    ],
    '🕯️': [
        'Mum',
        ':candle:',
        ':white:'
    ],
    '🖼️': [
        'Çerçeveli Resim',
        ':framed_picture:',
        'Painting',
        'Picture Frame',
        'Frame with Picture'
    ],
    '🛍️': [
        'Alışveriş Çantaları',
        ':shopping_bags:'
    ],
    '🛒': [
        'Shopping Cart',
        ':shopping_cart:',
        'Shopping Trolley',
        ':shopping_trolley:',
        ':gray:',
        ':grey:',
        'Market'
    ],
    '🎟️': [
        'Giriş Bileti',
        ':admission_tickets:',
        'Theater',
        'Theatre',
        'Party'
    ],
    '🛎️': [
        'Belboy Zili',
        ':bellhop_bell:',
        ':yellow:',
        ':gold:',
        'Hotel',
        'Reception'
    ],
    '🧾': [
        'Fiş',
        ':receipt:',
        ':white:',
        'Bill'
    ],
    '🧮': [
        'Abaküs',
        ':abacus:'
    ],
    '🧫': [
        'Petri Kabı',
        ':petri_dish:'
    ],
    '🧹': [
        'Süpürge',
        ':broom:',
        'Brush',
        'Sweep',
        ':yellow:',
        'Tidy',
        'Clean'
    ],
    '🎰': [
        'Kumar Makinesi',
        ':slot_machine:',
        'Casino',
        'Fruit Machine',
        'Gambling',
        'Poker Machine'
    ],
    '🦽': [
        'Manuel Tekerlekli Sandalye',
        ':manual_wheelchair:',
        ':wheelchair:',
        'invalid',
        'disability',
        'accessibility',
        'mobility'
    ],
    '🦼': [
        'Motorlu Tekerlekli Sandalye',
        ':motorized_wheelchair:',
        ':wheelchair:',
        'invalid',
        'disability',
        'accessibility',
        'mobility'
    ],
    '🪔': [
        'Diya Lamp',
        ':diya_lamp:'
    ],
    '🦯': [
        'Beyaz Baston',
        ':whie_cane:'
    ],
    '🩸': [
        'Kan Damlası',
        ':drop_of_blood:',
        ':red:'
    ],
    '🩹': [
        'Yara Bandı',
        ':adhesive_bandage:'
    ],
    '🩺': [
        'Stetoskop',
        ':stethoscope:'
    ],
    '🪶': [
        'Tüy',
        ':feather:',
        'Animal'
    ],
    '🪤': [
        'Fare Kapanı',
        ':mouse_trap:'
    ],
    '🫖': [
        'Demlik',
        ':teapot:'
    ],
    '🪨': [
        'Taş',
        ':rock:',
        ':gray:',
        ':grey:'
    ],
    '🪵': [
        'Odun',
        ':wood:',
        ':brown:'
    ],
    '🪄': [
        'Sihirli Değnek',
        ':magin_wand:'
    ],
    '🔮': [
        'Kristal Küre',
        ':crystal_ball:',
        'Clairvoyant',
        'Fortune Teller',
        'Psychic',
        'Purple Crystal',
        ':purple:'
    ],
    '🪅': [
        'Piñata',
        ':pinata:',
        ':piñata:'
    ],
    '🪆': [
        'İç İçe Geçen Oyuncak Bebek',
        ':nesting_dolls:',
        'Matryoshka'
    ],
    '🪡': [
        'Dikiş İğnesi',
        ':swing_needle:'
    ],
    '🪢': [
        'Düğüm',
        ':knot:',
        ':red:',
        ':blue:'
    ],
    '🪙': [
        'Madeni Para',
        ':coin:'
    ],
    '🪃': [
        'Bumerang',
        ':boomerang:',
        ':brown:'
    ],
    '🪥': [
        'Diş Fırçası',
        ':toothbrush:'
    ],
    '🪦': [
        'Mezar Taşı',
        ':headstone:',
        ':gray:',
        ':grey:'
    ],
    '🪧': [
        'Pankart',
        ':placard:'
    ],
    '🪒': [
        'Jilet',
        ':razor:'
    ],
    '🫙': [
        'Jar',
        ':jar:',
        ':transparent:'
    ],
    '🛞': [
        'Wheel',
        ':wheel:',
        'Vehicles',
        'Cars',
        ':black:'
    ],
    '🛟': [
        'Ring Buoy',
        ':ring_buoy:',
        'Life Preserver',
        'Life Ring',
        'Boats',
        'Safety',
        'Water',
        'Lifesaving',
        ':red:',
        ':white:'
    ],
    '🪬': [
        'Hamsa',
        ':hamsa:',
        'Islam',
        'Judaism',
        'Buddhism',
        'Christianity',
        'Religions',
        'Luck',
        'Protection',
        'Guidance',
        'Feminine Power',
        'Faith',
        ':blue:'
    ],
    '🪩': [
        'Mirror Ball',
        ':mirror_ball:',
        'Disco Ball'
    ],
    '🪫': [
        'Low Battery',
        ':low_battery:',
        ':red:',
        'Energy',
        'Red',
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
        'Bubbles',
        ':bubbles:',
        'Soap Suds',
        'Carbonation',
        'Effervescent Personality',
        ':transparent:'
    ],
    '🪪': [
        'Identification Card',
        ':identification_card:',
        'Identity',
        'Passport',
        'ID',
        'Country',
        'Security',
        'Travel'
    ],
    '🧿': [
        'Nazar Amulet',
        ':nazar_amulet:',
        'Evil Eye',
        ':blue:'
    ],
    '🧸': [
        'Teddy Bear',
        ':teddy_bear:',
        'Toy',
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