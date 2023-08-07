// descriptions took from Emojipedia.org
lang = 'ru';
//use i18n language code of the browser, more details: https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/i18n/LanguageCode
titles_language[lang] = {
    '🔍': 'Результаты',
    '🕒': 'Часто используемые эмодзи',
    '😀': 'Смайлы',
    '🙋': 'Люди',
    '🦊': 'Животные',
    '🅰️': 'Символы',
    '🍎': 'Еда и напитки',
    '🏳️‍🌈': 'Флаги',
    '🏊': 'Спорт',
    '✈️': 'Путешествия и места',
    '🖱️': 'Технологии и офисы',
    '👗': 'Одежда и аксессуары',
    '🖐️': 'Руки и части тела',
    '🛎️': 'Другое'
};
emojis_language[lang] = [];
/*search*/
emojis_language[lang][0] = {};
/*smileys*/
emojis_language[lang][2] = {
    '😀': [
        'Смеющееся лицо',
        ':grinning:',
        ':grinning_face:',
        '::):',
        'Счастливое лицо',
        'Смайлик'
    ],
    '😃': [
        'Ухмыляющееся лицо с большими глазами',
        ':smiley:',
        ':grinning_face_with_big_eyes:',
        '::D:',
        'Счастливое лицо',
        'Смайлик',
        'Улыбающееся лицо с открытыми ромами'
    ],
    '😄': [
        'Улыбающееся лицо с улыбками глаза',
        ':smile:',
        ':grinning_face_with_smiling_eyes:',
        'Счастливое лицо',
        'Смайлик',
        'Смеющееся лицо с прищуренными глазами',
        'Улыбающееся лицо с Open Mouth and Smiling Eyes'
    ],
    '😁': [
        'Выбивая лицо улыбчивым глазом',
        ':grin:',
        ':beaming_face_with_smiling_eyes:',
        'Улыбающееся лицо с улыбками глаза'
    ],
    '😆': [
        'Угловая дрожащая лицо',
        ':grinning_squinting_face:',
        ':xD:',
        ':><:',
        'Большая решетка',
        'Улыбка закрытых глаз',
        'Смех',
        'Ухмывающееся лицо с острыми закрытыми глаза',
        'Улыбающееся лицо с открытым махом и остро закрытые глаза'
    ],
    '😅': [
        'Ухмыляющееся лицо с потом',
        ':happy_sweat:',
        'Упражнения',
        'Счастливый пот',
        'Глубинная грань с увлажняющими глазками и пот каплей',
        'Улыбающееся лицо с открытым рвом и холодным потом'
    ],
    '🤣': [
        'ROFL',
        ':rofl:',
        'Поворачивание на Смехе Флора'
    ],
    '😂': [
        'Лицо со Страхами Радости',
        ':lol:',
        'Смех',
        'Смешивающийся плач',
        'Смешивающиеся Tears',
        'ЛИНА'
    ],
    '🙂': [
        'Немного улыбающееся лицо',
        ':smile:',
        '::):',
        'Счастливый',
        'Это отлично'
    ],
    '🙃': [
        'Сверху вниз лицо',
        ':upside-down_face:',
        ':upside_down_face:',
        'Sarcasm',
        'Silly',
        'Вверх по лицу'
    ],
    '😉': [
        'Радужная Лицо',
        ':winking:',
        ':;):',
        'Ветвь',
        'Волшебное лицо',
        'Волшебное лицо'
    ],
    '😊': [
        'Улыбающееся лицо с улыбками глаза',
        ':smiling_face:',
        ':^^:',
        'Счастливое лицо',
        'Улыбка',
        'Смайлик'
    ],
    '😇': [
        'Улыбающееся лицо с Halo',
        ':smiling_angel:',
        'Ангел',
        'Хало'
    ],
    '🥰': [
        'Улыбающееся лицо с сердцами',
        ':smiling_hearts:',
        'В лице Любви',
        'Улыбающееся лицо с улыбками глаз и тремя сердцами'
    ],
    '😍': [
        'Улыбающееся лицо с сердечными глазами',
        'love',
        ':smiling_heart-eyes:',
        ':smiling_heart_eyes:',
        ':*.*:',
        'Heart Eyes',
        'Heart Face',
        'Smiling Face with Heart-Shaped Eyes'
    ],
    '🤩': [
        'Звёздный Удар',
        ':star_eyes:',
        'Раздано',
        'Звездные глаза',
        'Звёздный Воздушный',
        'Вау лицо',
        'Лицо со Звездными Глазами',
        'Ухмыляющееся лицо со звездами'
    ],
    '😘': [
        'Лицо плавает поцелуй',
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
        'Поцелуй лицо',
        'kiss',
        ':kissing_face:',
        '::*:',
        '::-*:',
        'Duck Face',
        'Kissy Face',
        'Whistling'
    ],
    '☺️': [
        'Улыбающееся лицо',
        ':smiling_face:',
        'Счастливое лицо',
        'Смайлик',
        'Улыбка',
        'Белые улыбающиеся лица'
    ],
    '😚': [
        'Поцелуй лицо с закрытыми глаза',
        ':kissing_face:',
        'Поцелуй лицо',
        'Kissy Face'
    ],
    '😙': [
        'Поцелуй лицо с улыбками глаз',
        ':kissing_face:',
        'Поцелуй лицо',
        'Kissy',
        'Свист',
        'Свист'
    ],
    '😋': [
        'Еда для сохранения лиц',
        ':savoring_face:',
        'Хорошо',
        'Голодные',
        'Улыбающиеся Липсы для распознавания лица',
        'Лицо сберегающая еда',
        'Юм-Юм'
    ],
    '😛': [
        'Лицо с языком',
        ':tongue_face:',
        '::P:',
        'Чики',
        'Язык лица',
        'Тонги',
        'Лицо с Трюк-Out Язык'
    ],
    '😜': [
        'Пылающее лицо с языком',
        ':winking:',
        ':;P:',
        'Безумный',
        'Безумное лицо',
        'Пылающая Лицо с Трюк-Оттенком Языка',
        'Лицо с оттенком языка и глаз Жука'
    ],
    '🤪': [
        'Zany Face',
        ':crazy_face:',
        'Сумасшедшие глаза',
        'Раздано',
        'Дикий',
        'Goofy Face',
        'Угловая грань с одним большим и одним маленьким глазом'
    ],
    '😝': [
        'Сжатие лица с языком',
        ':tongue_face:',
        ':xP:',
        'Язык вне',
        'Face With Stuck Out Tongue and Tightly-closed Eyes',
        'Лицо с Трюк-Оттенком Языка и Высоко-Закрытые Глаза'
    ],
    '🤑': [
        'Лицо Деньги-Мышь',
        ':money-mouth_face:',
        ':money_mouth_face:',
        '::$:',
        'Глаза Dollar Sign',
        'Денежное лицо',
        'Богатый'
    ],
    '🤗': [
        'Грязное лицо',
        ':hugging_face:',
        'Хуг',
        'Разбойники',
        'Обрезы',
        'Счастливая лицо с руками'
    ],
    '🤭': [
        'Упс',
        ':oops:',
        'Лицо с рукой над мышью',
        'Улыбающееся лицо с улыбками глаз и рукавными обложками'
    ],
    '🤫': [
        'Шч',
        ':shushing_face:',
        'Шуш',
        'Грязное лицо',
        'Хуш',
        'Тихий',
        'Тишина',
        'Без звука',
        'Лицо с крыльями пальцев'
    ],
    '🤔': [
        'Что',
        ':thinking_face:',
        '?',
        'Гмм',
        'Мыслительное лицо',
        'Пистолет подбородка',
        'Тонкий',
        'Метательный Тень'
    ],
    '🤐': [
        'Почтовый индекс',
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
        'Лицо с Радостными бровями',
        ':face_with_raised_eyebrow:',
        'Колберт',
        'Рок',
        'Лицо с Raised yebrow',
        'Сраженное лицо с одной бровей'
    ],
    '😐': [
        'Нейтральное Лицо',
        ':neutral_face:',
        ':|',
        'Лицо с прямым мутом',
        'Прямое лицо'
    ],
    '😑': [
        'Бесвыразительное лицо',
        ':expressionless_face:',
        '-_-',
        'Лицо с прямым мутом',
        'Прямое лицо'
    ],
    '😶': [
        'Лицо без рта',
        ':face_without_mouth:',
        'Пустое лицо',
        'Бесшумный',
        'Тишина',
        'Без звука'
    ],
    '😏': [
        'Ухмыляющееся лицо',
        ':smirking_face:',
        'Флирт',
        'Сексуальное лицо',
        'Мусовое лицо',
        'Предположительная улыбка'
    ],
    '😒': [
        'Unamused лицо',
        ':unamused_face:',
        'Недовольство',
        'Мяч',
        'Боково-Глаз',
        'Невпечатлен'
    ],
    '🙄': [
        'Лицо с Rolling Eyes',
        ':face_with_rolling_eye:',
        ':eye_roll:',
        'Рулон глаз'
    ],
    '😬': [
        'Грязное лицо',
        ':awkward:',
        'Неловкий',
        'Eek',
        'Пешком в горе',
        'Нерви',
        'Взаимный Snapchat #1 Лучший друг'
    ],
    '🤥': [
        'Летящее лицо',
        ':lying_face:',
        'Лиар',
        'Длинный нос',
        'Pinocchio'
    ],
    '😌': [
        'Преданные лица',
        ':relieved_face:',
        'Содержание',
        'Плюс'
    ],
    '😔': [
        'Извините',
        ':sad_face:',
        'Пенсионное лицо',
        'Пенсионный',
        'Грустно',
        'Садовое лицо',
        'Сжатый',
        'Грустное Пансион'
    ],
    '😪': [
        'Сладкое лицо',
        ':sleepy_face:',
        'Боковой уголок',
        'Сообщения Снег'
    ],
    '🤤': [
        'Слюна',
        ':saliva_face:',
        'Drooling Face',
        'Drool'
    ],
    '😴': [
        'Спящее лицо',
        ':sleeping_face:',
        ':zzz:',
        'Zzz',
        'Спящее лицо',
        'Приращение',
        'Zzzz-лицо'
    ],
    '🥱': [
        'Яростное лицо',
        'tired',
        ':yawning_face:'
    ],
    '😷': [
        'Лицо с медицинской маской',
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
        'Лицо с термометром',
        ':face_with_thermometer:',
        ':sick:',
        ':ill:',
        'Ill',
        'Играть'
    ],
    '🤕': [
        'Лицо с лоббированием',
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
        'Кошмарная лицо',
        'sick',
        ':nauseated_face:',
        'Disgust',
        'Green Face',
        'Vomit',
        ':green:',
        'ill'
    ],
    '🤮': [
        'Лицевой рвоты',
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
        'Грязное Лицо',
        'sick',
        ':sneezing_face:',
        'Gesundheit',
        'ill'
    ],
    '🥵': [
        'Горячее лицо',
        ':hot_face:',
        'Перегретое лицо',
        ':red:'
    ],
    '🥶': [
        'Холодное лицо',
        ':cold_face:',
        'Крутой',
        'Холод',
        'Заморозка лица',
        ':blue:'
    ],
    '🥴': [
        'Вузное лицо',
        ':woozy_face:',
        'Одежда лица',
        'Лицо с глаз Uneven Eyes и волшебным рвом'
    ],
    '😵': [
        'Dizzy Face',
        ':dizzy_face:',
        'Крест глаз лицо',
        'Спиральное Глаз Лицо'
    ],
    '🤯': [
        'Взрывающаяся голова',
        'boom',
        ':exploding_head:',
        'Mind Blown',
        'Shocked Face with Exploding Head'
    ],
    '🤠': [
        'Шляпа Ковбоя',
        ':cowboy_hat_face:',
        'Ковбой',
        'Ковбоя лицо',
        'Лицо с шапкой Ковбоя'
    ],
    '🥳': [
        'Частичное лицо',
        ':partying_face:',
        'Вечеринка',
        'Лицо с рогом и шапкой вечеринки'
    ],
    '😎': [
        'Улыбающееся лицо с солнцезащитными очками',
        ':smiling_face_with_sunglasses:',
        'Крутой',
        'Взаимные лучшие друзья (Snapchat)',
        'Солнечные очки'
    ],
    '🤓': [
        'Нердное лицо',
        ':nerd_face:',
        'Nerdy'
    ],
    '🧐': [
        'Лицо с Моноклем',
        ':face_with_monocle:'
    ],
    '😕': [
        'Запутавшееся лицо',
        ':confused_face:',
        '::/:',
        '::S:',
        'Неплюшевые',
        'Головоломка'
    ],
    '😟': [
        'Заблуждающееся лицо',
        ':worried_face:',
        '::(:',
        'Грустно',
        'Садовое лицо'
    ],
    '🙁': [
        'Немного Затонувшее лицо',
        ':slightly_frowning_face:',
        '::(:',
        'Немного грустно'
    ],
    '☹️': [
        'Затопленное лицо',
        ':frowning_face:',
        '::(:',
        'Мегароун',
        'Белый стреляющий лицо'
    ],
    '😮': [
        'Вау',
        ':wow:',
        '::O:',
        'О, мой!',
        'Лицо с Открытым Мылом',
        'Открыть рот',
        'Удивленное лицо с открытым матом'
    ],
    '😯': [
        'Наклоненное лицо',
        ':husked_face:',
        '::O:',
        'Сюрприз',
        'Удивленное лицо'
    ],
    '😲': [
        'Шокированное лицо',
        ':shocked_face:',
        '::O:',
        'Вау',
        'Закалённое лицо',
        'Одежда лица',
        'Сжигание лица'
    ],
    '😳': [
        'Сгибаемое лицо',
        ':flushed_face:',
        '::$:',
        'Окраска лица',
        'Смущенное',
        'Сэм',
        'Лицо с широкими открытыми глазами'
    ],
    '🥺': [
        'Оформление лица',
        ':pleading_face:',
        '::(:',
        'Начало',
        'Глянцевые глаза',
        'Simp',
        'Лицо с Pleading Eyes'
    ],
    '😦': [
        'Затопленное лицо с Открытым Мылом',
        ':frowning_face_with_open_mouth:',
        ':D::',
        'Явня'
    ],
    '😨': [
        'Борется',
        ':scared:',
        ':D::',
        'Богатое лицо',
        'Удивленный'
    ],
    '😰': [
        'Ядовитое лицо с потом',
        ':anxious_face_with_sweat:',
        'Синее лицо',
        'Связанное лицо',
        'Нервное лицо',
        'Лицо с Open Mouth и холодным потом'
    ],
    '😥': [
        'Грустно, но возвышенное лицо',
        ':sad_but_relieved_face:',
        '::(:',
        'Пот бровей',
        'Разочарость, но уязвимое лицо'
    ],
    '😢': [
        'Плачущее лицо',
        ':crying_face:',
        '::(:',
        'Плачу',
        'Зуб'
    ],
    '😭': [
        'Глубокое плачущее лицо',
        ':loudly_crying_face:',
        'Bawling',
        'Плачу',
        'Грустные тайры',
        'Sobbing'
    ],
    '😱': [
        'Кричащее лицо в страхе',
        ':face_screaming_in_fear:',
        'Домашний',
        'Крик',
        'Кричащее лицо'
    ],
    '😖': [
        'Основанная лицо',
        ':confounded_face:',
        'Оглядывающаяся Мышь',
        'Забитое лицо'
    ],
    '😣': [
        'Настойчивое лицо',
        ':persevering_face:',
        'Беспомощное лицо',
        'Забитые глаза'
    ],
    '😞': [
        'Неопознанное лицо',
        ':disappointed_face:',
        '::(:',
        'Грустно',
        'Садовое лицо'
    ],
    '😓': [
        'Скачивание лица с потом',
        ':downcast_face_with_sweat:',
        'Жесткая работа',
        'Грустное лицо пота',
        'Лицо с холодным потом'
    ],
    '😩': [
        'Богатое лицо',
        ':weary_face:',
        'Рассеянное лицо',
        'Крыло'
    ],
    '😫': [
        'Усталое лицо',
        ':tired_face:',
        'Изгнанный',
        'Откормить',
        'Рассеянное лицо'
    ],
    '😤': [
        'Лицо с паром из носа',
        ':face_with_steam_from_nose:',
        'Воздух гривенс',
        'Разочарованный',
        'Безумное лицо',
        'Steaming',
        'Грязь с гневом'
    ],
    '😡': [
        'Пистолет лица',
        'fuck',
        ':pouting_face:',
        'Angry Face',
        'Grumpy Face',
        'Mad Face',
        'Red Face',
        ':red:'
    ],
    '😠': [
        'Злое лицо',
        ':angry_face:',
        'Злой',
        'Грязное лицо'
    ],
    '🤬': [
        'Подношение',
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
        'Улыбающееся лицо с улыбкой',
        ':smiling_face_with_tear:'
    ],
    '😮‍💨': [
        'Выдержка лица',
        ':face_exhaling:',
        'Сидро'
    ],
    '😵‍💫': [
        'Лицо Спиральными Глазами',
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
        'Замаскированное лицо',
        ':disguised_face:'
    ],
    '🫠': [
        'Тающее лицо',
        ':melting_face:'
    ],
    '🫢': [
        'Лицо с открытыми глазами и прикрытым ртом',
        ':face_with_open_eyes_and_hand_over_mouth:'
    ],
    '🫣': [
        'Подглядывающее лицо',
        ':face_with_peeking_eye:'
    ],
    '🫡': [
        'Лицо с приветствием',
        ':saluting_face:',
        'Военный',
        'Армия',
        'Так точно',
        'Флот'
    ],
    '🫥': [
        'Пунктирное лицо',
        ':dotted_line_face:',
        ':transparent:'
    ],
    '🫤': [
        'Лицо с диагональным ртом',
        ':face_with_diagonal_mouth:'
    ],
    '🥹': [
        'Лицо сдерживает слёзы',
        ':face_holding_back_tears:'
    ],
    //"🫨": ["Shaking Face", ":shaking_face:"],
    '😈': [
        'Улыбающееся лицо с рогами',
        ':smiling_face_with_horns:',
        'Дьявол',
        'Рога дьявола',
        'Счастливая Дьявола',
        'Фиолетовый Дьявол',
        'Красная Дьявола',
        ':purple:'
    ],
    '👿': [
        'Злое лицо с рогами',
        ':angry_face_with_horns:',
        'Дьявол',
        'Рога дьявола',
        'Фиолетовый Дьявол',
        'Фиолетовый Гоблин',
        'Грустный Дьявол',
        'Imp',
        ':purple:'
    ],
    '🤡': [
        'Клоун лицо',
        ':clown_face:',
        'Жуткий клоун',
        'Злой клоун',
        'Страшный клоун'
    ],
    '👽': [
        'Инопланетяне',
        ':alien:',
        'ET'
    ],
    '👾': [
        'Монстр Инопланетян',
        ':alien_monster:',
        'Захватчики космоса',
        'Видеоигра монстр'
    ],
    '🤖': [
        'Robot',
        ':robot:',
        'Робот Лицо'
    ],
    '👹': [
        'Ogre',
        ':ogre:',
        'Маска лица',
        'Oni',
        'Красный монстр',
        'Японский Огр',
        ':red:'
    ],
    '👻': [
        'Призрак',
        ':ghost:',
        'Halloween'
    ],
    '🗣️': [
        'Выступающая голова',
        ':speaking_head:',
        'Mansplaining',
        'Кричать',
        'Кричать',
        'Выступающая голова в Силуэте',
        ':blue:'
    ],
    '👤': [
        'Удар в Силуэте',
        ':bust_in_silhouette:',
        'Тень',
        'Silhouette',
        'Пользователь',
        'Силуэт лица',
        ':blue:'
    ],
    '🫂': [
        'Разбойники людей',
        ':people_hugging:',
        ':blue:'
    ],
    '👥': [
        'Бусы в Силуэте',
        ':busts_in_silhouette:',
        'Тени',
        'Silhouettes',
        'Пользователи',
        'Силуэт из двух человек',
        ':blue:'
    ]
};
/*people*/
emojis_language[lang][3] = {
    '👶{{skin_tone}}': [
        'Дети',
        ':baby:',
        'Дочерний',
        'Малышка'
    ],
    '🧒{{skin_tone}}': [
        'Дочерний',
        ':child:',
        'Нейтральный ребенок'
    ],
    '👧{{skin_tone}}': [
        'Девочка',
        ':girl:',
        ':woman:'
    ],
    '🧑{{skin_tone}}': [
        'Лицо',
        ':person:',
        'Нейтральный Пол',
        'Взрослый',
        ':person:'
    ],
    '🧑{{skin_tone}}': [
        'Человек борода',
        ':person_beard:',
        'Борода',
        'Человек с бородой',
        'Человек с бородой',
        ':person:'
    ],
    '🧑{{skin_tone}}‍🦰': [
        'Человек красные волосы',
        ':person_red_hair:',
        'Рыжий человек',
        'Рыжеволосый человек',
        'Человек с рыжими волосами',
        ':person:'
    ],
    '🧑{{skin_tone}}‍🦱': [
        'Человек кудрявые волосы',
        ':person_curly_hair:',
        'Человек с кудрявыми волосами',
        ':person:'
    ],
    '🧑{{skin_tone}}‍🦳': [
        'Седой человек',
        ':person_white_hair:',
        'Человек с седыми волосами',
        ':person:'
    ],
    '🧑{{skin_tone}}‍🦲': [
        'Лысый человек',
        ':person_bald:',
        'Человек без волос',
        ':person:'
    ],
    '👱{{skin_tone}}': [
        'Лиц: Надувная Прическа',
        ':person_blond_hair:',
        'Человек с волосами блондина',
        ':person:'
    ],
    '👨{{skin_tone}}': [
        'Человек',
        ':man:',
        'Муж',
        'Мудрец',
        ':man:'
    ],
    '🧔{{skin_tone}}‍♂️': [
        'Человек: Борода',
        ':man_beard:',
        'Борода',
        'Борода',
        'Человек с бородой',
        ':man:'
    ],
    '👨{{skin_tone}}‍🦰': [
        'Человек: Красная волоса',
        ':man_red_hair:',
        'Жанна',
        'Man Redhead',
        'Человек с красными волосами',
        ':man:'
    ],
    '👨{{skin_tone}}‍🦱': [
        'Человек: Куристые волосы',
        ':man_curly_hair:',
        'Человек с прямыми волосами',
        ':man:'
    ],
    '👨{{skin_tone}}‍🦳': [
        'Человек: Белые Волосы',
        ':man_white_hair:',
        'Человек с серой волос',
        ':man:'
    ],
    '👨{{skin_tone}}‍🦲': [
        'Человек: Блюда',
        ':man_bald:',
        'Человек с без волос',
        ':man:'
    ],
    '👱{{skin_tone}}‍♂️': [
        'Человек: волосы на Blond',
        ':man_blond_hair:',
        'Человек с волосами на Blonde',
        ':man:'
    ],
    '👩{{skin_tone}}': [
        'Женская',
        ':woman:',
        'Женская',
        'Леди',
        'Желтая женщина',
        ':woman:'
    ],
    '🧔{{skin_tone}}‍♀️': [
        'Женщина: Борода',
        ':woman_beard:',
        'Борода',
        'Богатая женщина',
        ':woman:'
    ],
    '👩{{skin_tone}}‍🦰': [
        'Женщина: красная волоса',
        ':woman_red_hair:',
        'Жанна',
        'Woman Redhead',
        'Женщина с красными волосами',
        ':woman:'
    ],
    '👩{{skin_tone}}‍🦱': [
        'Женщина: Яростные волосы',
        ':woman_curly_hair:',
        'Женщина с яростными волосами',
        ':woman:'
    ],
    '👩{{skin_tone}}‍🦳': [
        'Женщина: Белые волосы',
        ':woman_white_hair:',
        'Женщина с серой волос',
        ':woman:'
    ],
    '👩{{skin_tone}}‍🦲': [
        'Женщина: Бальд',
        ':woman_bald:',
        'Женщина без волос',
        ':woman:'
    ],
    '👱{{skin_tone}}‍♀️': [
        'Женщина: голубые волосы',
        ':woman_blond_hair:',
        'Женщина с волосами Blonde',
        ':woman:'
    ],
    '👴{{skin_tone}}': [
        'Старший человек',
        ':older_man:',
        ':older:',
        'Пожилой мужчина',
        'Grandpa',
        'Старик',
        ':man:'
    ],
    '👵{{skin_tone}}': [
        'Пожилая женщина',
        ':older_woman:',
        ':older:',
        'Пожилая женщина',
        'Бабушка',
        'Нанна',
        'Старая леди',
        'Старая женщина',
        ':woman:'
    ],
    '🧓{{skin_tone}}': [
        'Пожилой человек',
        ':older_person:',
        ':older:',
        'Нейтральный Пол пожилого взрослых',
        ':person:'
    ],
    '👼{{skin_tone}}': [
        'Детский Ангел',
        ':baby_angel:',
        'Ангел',
        'Cherub',
        'Купидон',
        'Путто'
    ],
    '👨{{skin_tone}}‍🎄': [
        'Санта-Клаус',
        ':santa_claus:',
        'Сент-Николас',
        'Sinterklaas',
        'Отец Рождество',
        ':man:'
    ],
    '👩{{skin_tone}}‍🎄': [
        'Г-жа Клаус',
        ':mrs_claus:',
        'Рождество Матерь',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🎄': [
        'Mx Клаус',
        ':mx_clause:',
        'Рождество',
        ':person:'
    ],
    '🤴{{skin_tone}}': [
        'Принц',
        ':price:',
        ':man:'
    ],
    '👸{{skin_tone}}': [
        'Принцесса',
        ':pricess:',
        'Девочка из Блонда',
        'Девочка с Короной',
        'Девочка с Тиарой',
        ':woman:'
    ],
    '🫅{{skin_tone}}': [
        'Человек с Короной',
        ':person_with_crown:',
        ':person:'
    ],
    '👳{{skin_tone}}‍♂️': [
        'Человек в Тюрбане',
        ':man_wearing_turban:',
        ':wearing_turban:',
        'Арабский',
        'Мусульманский',
        'Сикх',
        'Турбан',
        ':man:'
    ],
    '👳{{skin_tone}}‍♀️': [
        'Женщина в Тюрбане',
        ':woman_wearing_turban:',
        ':wearing_turban:',
        'Арабский',
        'Мусульманский',
        'Сикх',
        'Турбан',
        ':woman:'
    ],
    '👳{{skin_tone}}': [
        'Человек, надевающий Турбан',
        ':person_wearing_turban:',
        ':wearing_turban:',
        'Арабский',
        'Мусульманский',
        'Сикх',
        'Турбан',
        ':person:'
    ],
    '👲{{skin_tone}}': [
        'Человек с черепным капюшоном',
        ':person_with_skullcap:',
        'Азиатский мужчина',
        'Человек с китайской шапкой',
        'Человек с Гуа Мао',
        ':person:'
    ],
    '🧕{{skin_tone}}': [
        'Женщина с шарфом',
        ':woman_with_headscarf:',
        'Hijab',
        'Человек с платьем',
        ':woman:'
    ],
    '🤵{{skin_tone}}‍♀️': [
        'Человек в Tuxedo',
        ':man_in_tuxedo:',
        ':tuxedo:',
        'Groom',
        'Человек в костюме',
        'Свадьба',
        ':man:'
    ],
    '🤵{{skin_tone}}‍♂️': [
        'Женщина в Tuxedo',
        ':woman_in_tuxedo:',
        ':tuxedo:',
        'Groom',
        'Женщина в костюме',
        'Свадьба',
        ':woman:'
    ],
    '🤵{{skin_tone}}': [
        'Лицо в Tuxedo',
        ':person_in_tuxedo:',
        ':tuxedo:',
        'Groom',
        'Лицо в костюме',
        'Свадьба',
        ':person:'
    ],
    '👰{{skin_tone}}‍♂️': [
        'Человек с Veil',
        ':man_with_veil:',
        ':veil:',
        'Свадьба',
        'Невестная комната',
        'Брак',
        ':man:'
    ],
    '👰{{skin_tone}}‍♀️': [
        'Женщина с Veil',
        ':woman_with_veil:',
        ':veil:',
        'Свадьба',
        'Невеста',
        'Невеста с Veil',
        'Брак',
        ':woman:'
    ],
    '👰{{skin_tone}}': [
        'Лицо с Veil',
        ':person_with_veil:',
        ':veil:',
        'Свадьба',
        'Брак',
        ':person:'
    ],
    '👨{{skin_tone}}‍🍼': [
        'Подача человека малыша',
        ':man_feeding_baby:',
        ':feeding_baby:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🍼': [
        'Женское кормление малыша',
        ':woman_feeding_baby:',
        ':feeding_baby:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🍼': [
        'Покормление ребенка',
        ':person_feeding_baby:',
        ':feeding_baby:',
        ':person:'
    ],
    '🥷': [
        'Ниндзя',
        ':ninja:'
    ],
    '🫃{{skin_tone}}': [
        'Беременный',
        ':pregnant_man:',
        ':pregnant:',
        'Беременность',
        ':man:'
    ],
    '🤰{{skin_tone}}': [
        'Беременная женщина',
        ':pregnant_woman:',
        ':pregnant:',
        'Беременность',
        'Беременная Госпожа',
        ':woman:'
    ],
    '🫄{{skin_tone}}': [
        'Беременное лицо',
        ':pregnant_person:',
        ':pregnant:',
        'Беременность',
        ':person:'
    ],
    '🤱{{skin_tone}}‍': [
        'Нагрудное кормление',
        ':breast-feeding:',
        ':breast_feeding:',
        'Грудное вскармливание'
    ],
    '🦸{{skin_tone}}‍♂️': [
        'Мужчина Супергерой',
        ':man_superhero:',
        ':superhero:',
        ':man:'
    ],
    '🦸{{skin_tone}}‍♀️': [
        'Супергерой женщины',
        ':woman_superhero:',
        ':superhero:',
        ':woman:'
    ],
    '🦸{{skin_tone}}': [
        'Супергерой',
        ':person_superhero:',
        ':superhero:',
        ':person:'
    ],
    '🦹{{skin_tone}}‍♂️': [
        'Мужчина Супервиль',
        ':man_supervillain:',
        ':supervillain:',
        ':man:'
    ],
    '🦹{{skin_tone}}‍♀️': [
        'Женский Супервиль',
        ':woman_supervillain:',
        ':supervillain:',
        ':woman:'
    ],
    '🦹{{skin_tone}}': [
        'Лицо Супервилла',
        ':person_supervillain:',
        ':supervillain:',
        ':person:'
    ],
    '🧙{{skin_tone}}‍♂️': [
        'Маг человека',
        ':man_mage:',
        ':mage:',
        'Sorcerer',
        'Волшебник',
        ':man:'
    ],
    '🧙{{skin_tone}}‍♀️': [
        'Женский маг',
        ':woman_mage:',
        ':mage:',
        'Ведьма',
        'Волшебство',
        'Волшебник',
        ':woman:'
    ],
    '🧙{{skin_tone}}': [
        'Маг Лица',
        ':person_mage:',
        ':mage:',
        'Волшебник',
        ':mage:',
        ':person:'
    ],
    '🧚{{skin_tone}}‍♂️': [
        'Мужская фея',
        ':man_fairy:',
        ':fairy:',
        ':man:'
    ],
    '🧚{{skin_tone}}‍♀️': [
        'Женская фея',
        ':woman_fairy:',
        ':fairy:',
        ':woman:'
    ],
    '🧚{{skin_tone}}': [
        'Человеческая Фея',
        ':person_fairy:',
        ':fairy:',
        ':person:'
    ],
    '🧛{{skin_tone}}‍♂️': [
        'Человек Вампир',
        ':man_vampire:',
        ':vampire:',
        'Дракула',
        ':man:'
    ],
    '🧛{{skin_tone}}‍♀️': [
        'Женский вампир',
        ':woman_vampire:',
        ':vampire:',
        ':woman:'
    ],
    '🧛{{skin_tone}}': [
        'Вампир',
        ':person_vampire:',
        ':vampire:',
        ':person:'
    ],
    '🧜{{skin_tone}}‍♂️': [
        'Мерман',
        ':merman:',
        'Merboy',
        ':man:'
    ],
    '🧜{{skin_tone}}‍♀️': [
        'Русалка',
        ':mermaid:',
        'Слияние',
        ':woman:'
    ],
    '🧜{{skin_tone}}': [
        'Merperson',
        ':merperson:',
        ':person:'
    ],
    '🧝{{skin_tone}}‍♂️': [
        'Человеческий Эльф',
        ':man_elf:',
        ':elf:',
        ':man:'
    ],
    '🧝{{skin_tone}}‍♀️': [
        'Женский эльф',
        ':woman_elf:',
        ':elf:',
        ':woman:'
    ],
    '🧝{{skin_tone}}': [
        'Эльф лица',
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
        'Гений человека',
        ':person_genie:',
        ':genie:',
        ':person:'
    ],
    '🕵️{{skin_tone}}‍♂️': [
        'Детектив человека',
        ':man_detective:',
        ':detective:',
        'Частный глаз',
        'Sleuth',
        'Шпионаж',
        'Man Sleuth',
        'Шляпа или шпион',
        '007',
        'Инспектор',
        ':man:'
    ],
    '🕵️{{skin_tone}}‍♀️': [
        'Женский детектив',
        ':woman_detective:',
        ':detective:',
        'Частный глаз',
        'Sleuth',
        'Шпионаж',
        'Женское одеяние',
        'Шляпа или шпион',
        '007',
        'Инспектор',
        ':woman:'
    ],
    '🕵{{skin_tone}}': [
        'Детектив',
        ':person_detective:',
        ':detective:',
        'Частный глаз',
        'Sleuth',
        'Шпионаж',
        'Слаут',
        'Шляпа или шпион',
        '007',
        'Инспектор',
        ':person:'
    ],
    '💂{{skin_tone}}‍♂️': [
        'Человек: Страж',
        ':man_guard:',
        ':guard:',
        'Британский гвардия',
        'Защита для ног',
        ':man:'
    ],
    '💂{{skin_tone}}‍♀️': [
        'Женщина: Страж',
        ':woman_guard:',
        ':guard:',
        'Британский гвардия',
        'Защита для ног',
        ':woman:'
    ],
    '💂{{skin_tone}}': [
        'Человек: Страж',
        ':person_guard:',
        ':guard:',
        'Британский гвардия',
        'Защита для ног',
        ':person:'
    ],
    '👮{{skin_tone}}‍♂️': [
        'Полицейский сотрудник',
        ':man_police_officer:',
        ':police_officer:',
        'Коп',
        'Полиция',
        'Полицейский',
        ':man:'
    ],
    '👮{{skin_tone}}‍♀️': [
        'Женский полицейский сотрудник',
        ':woman_police_officer:',
        ':police_officer:',
        'Коп',
        'Полиция',
        'Полицейский',
        ':woman:'
    ],
    '👮{{skin_tone}}': [
        'Полицейский сотрудник',
        ':person_police_officer:',
        ':police_officer:',
        'Коп',
        'Полиция',
        ':person:'
    ],
    '👨{{skin_tone}}‍🚒': [
        'Пожарные Пожары',
        ':man_firefighter:',
        ':firefighter:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🚒': [
        'Пожарные Пожары',
        ':woman_firefighter:',
        ':firefighter:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🚒': [
        'Пожарные лица',
        ':person_firefighter:',
        ':firefighter:',
        ':person:'
    ],
    '👨{{skin_tone}}‍✈️': [
        'Человек Пилот',
        ':man_pilot:',
        ':pilot:',
        ':man:'
    ],
    '👩{{skin_tone}}‍✈️': [
        'Женский пилот',
        ':woman_pilot:',
        ':pilot:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍✈️': [
        'Лицо Пилота',
        ':person_pilot:',
        ':pilot:',
        ':person:'
    ],
    '👨{{skin_tone}}‍💻': [
        'Специалист по мужчинам',
        ':man_technologist:',
        ':technologist:',
        'Специалист по мужчинам',
        ':man:'
    ],
    '👩{{skin_tone}}‍💻': [
        'Женский технолог',
        ':woman_technologist:',
        ':technologist:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍💻': [
        'Технолог',
        ':person_technologist:',
        ':technologist:',
        ':person:'
    ],
    '👨{{skin_tone}}‍🎤': [
        'Мужчина Певец',
        ':man_singer:',
        ':singer:',
        'Bowie',
        'Aladdin Sane',
        ':man:'
    ],
    '👩{{skin_tone}}‍🎤': [
        'Женский певец',
        ':woman_singer:',
        ':singer:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🎤': [
        'Певица',
        ':person_singer:',
        ':singer:',
        ':person:'
    ],
    '👨{{skin_tone}}‍🎨': [
        'Мужчина художника',
        ':man_artist:',
        ':artist:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🎨': [
        'Женский художник',
        ':woman_artist:',
        ':artist:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🎨': [
        'Художник',
        ':person_artist:',
        ':artist:',
        ':person:'
    ],
    '👷{{skin_tone}}‍♂️': [
        'Рабочий мужчина',
        ':man_contruction_worker:',
        ':contruction_worker:',
        ':man:'
    ],
    '👷{{skin_tone}}‍♀️': [
        'Женский работник',
        ':woman_contruction_worker:',
        ':contruction_worker:',
        ':woman:'
    ],
    '👷{{skin_tone}}': [
        'Работник персонажа',
        ':person_contruction_worker:',
        ':contruction_worker:',
        ':person:'
    ],
    '👨{{skin_tone}}‍🚀': [
        'Человек астронавт',
        ':man_astronaut:',
        ':astronaut:',
        'Космонавт человека',
        ':man:'
    ],
    '👩{{skin_tone}}‍🚀': [
        'Женский астронавт',
        ':woman_astronaut:',
        ':astronaut:',
        'Женский космонавт',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🚀': [
        'Астронавт',
        ':person_astronaut:',
        ':astronaut:',
        'космонавт лица',
        ':person:'
    ],
    '👨{{skin_tone}}‍🔬': [
        'Ученый человек',
        ':man_scientist:',
        ':scientist:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🔬': [
        'Женщина Учёная',
        ':woman_scientist:',
        ':scientist:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🔬': [
        'Учёный человек',
        ':person_scientist:',
        ':scientist:',
        ':person:'
    ],
    '👨{{skin_tone}}‍💼': [
        'Рабочий мужчина',
        ':man_office_worker:',
        ':office_worker:',
        'Генеральный директор',
        'Бизнесмен',
        ':man:'
    ],
    '👩{{skin_tone}}‍💼': [
        'Работник женского офиса',
        ':woman_office_worker:',
        ':office_worker:',
        'Бизнесмен',
        'Генеральный директор',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍💼': [
        'Лицо Офисный Работник',
        ':person_office_worker:',
        ':office_worker:',
        'Бизнес',
        'Генеральный директор',
        ':person:'
    ],
    '👨{{skin_tone}}‍🏭': [
        'Работник мужского завода',
        ':man_factory_worker:',
        ':factory_worker:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🏭': [
        'Работник женского завода',
        ':woman_factory_worker:',
        ':factory_worker:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🏭': [
        'Работник персоны',
        ':person_factory_worker:',
        ':factory_worker:',
        ':person:'
    ],
    '👨{{skin_tone}}‍🔧': [
        'Человек Механический',
        ':man_mechanic:',
        ':mechanic:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🔧': [
        'Женский механизм',
        ':woman_mechanic:',
        ':mechanic:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🔧': [
        'Механическая личность',
        ':person_mechanic:',
        ':mechanic:',
        ':person:'
    ],
    '👨{{skin_tone}}‍🍳': [
        'Человек повак',
        ':man_cook:',
        ':cook:',
        'Шеф-повар',
        'Мужской шеф-повар',
        ':man:'
    ],
    '👩{{skin_tone}}‍🍳': [
        'Женский повар',
        ':woman_cook:',
        ':cook:',
        'Женский шеф-повар',
        'Женский повар',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🍳': [
        'Человек Кук',
        ':person_cook:',
        ':cook:',
        'Человек повара',
        ':person:'
    ],
    '👨{{skin_tone}}‍🌾': [
        'Фермер мужчина',
        ':man_farmer:',
        ':farmer:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🌾': [
        'Женский фермер',
        ':woman_farmer:',
        ':farmer:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🌾': [
        'Человеческий фермер',
        ':person_farmer:',
        ':farmer:',
        ':person:'
    ],
    '👨{{skin_tone}}‍‍⚖️': [
        'Мужчина',
        ':man_judge:',
        ':judge:',
        ':man:'
    ],
    '👩{{skin_tone}}‍‍⚖️': [
        'Женский судья',
        ':woman_judge:',
        ':judge:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍‍⚖️': [
        'Личный судья',
        ':person_judge:',
        ':judge:',
        ':person:'
    ],
    '👨{{skin_tone}}‍‍🏫': [
        'Учитель мужчин',
        ':man_teacher:',
        ':teacher:',
        ':man:'
    ],
    '👩{{skin_tone}}‍‍🏫': [
        'Женщина-учитель',
        ':woman_teacher:',
        ':teacher:',
        ':woman:'
    ],
    '🧑‍{{skin_tone}}‍‍🏫': [
        'Учитель',
        ':person_teacher:',
        ':teacher:',
        ':person:'
    ],
    '👨{{skin_tone}}‍🎓': [
        'Человек студент',
        ':man_student:',
        ':student:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🎓': [
        'Женщины-студенты',
        ':woman_student:',
        ':student:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🎓': [
        'Человек студент',
        ':person_student:',
        ':student:',
        ':person:'
    ],
    '👨{{skin_tone}}‍⚕️': [
        'Здоровье человека',
        ':man_health_worker:',
        ':health_worker:',
        'Мужской доктор',
        'Мужская сестра',
        ':man:'
    ],
    '👩{{skin_tone}}‍⚕️': [
        'Женский медицинский работник',
        ':woman_health_worker:',
        ':health_worker:',
        'Женский доктор',
        'Женская медсестра',
        ':woman:'
    ],
    '🧑‍{{skin_tone}}‍⚕️': [
        'Здоровый Работник',
        ':person_health_worker:',
        ':health_worker:',
        'Человек врач',
        'Медсестра',
        ':person:'
    ],
    '🤷{{skin_tone}}‍♂️': [
        'Человек шкура',
        ':man_shrugging:',
        ':shrugging:',
        'мужчина поклонников',
        'dunno',
        ':man:'
    ],
    '🤷{{skin_tone}}‍♀️': [
        'Женское ружье',
        ':woman_shrugging:',
        ':shrugging:',
        'ид женщина',
        'dunno',
        ':woman:'
    ],
    '🤷{{skin_tone}}': [
        'Персона плеча',
        ':person_shrugging:',
        ':shrugging:',
        'питомник',
        'dunno',
        ':person:'
    ],
    '🤦{{skin_tone}}‍♂️': [
        'Лицевой палец человека',
        ':man_facepalming:',
        ':facepalming:',
        ':man:'
    ],
    '🤦{{skin_tone}}‍♀️': [
        'Женский Лицевой Глаз',
        ':woman_facepalming:',
        ':facepalming:',
        ':woman:'
    ],
    '🤦{{skin_tone}}': [
        'Лицо Facepalming',
        ':person_facepalming:',
        ':facepalming:',
        ':person:'
    ],
    '🙇{{skin_tone}}‍‍♂️': [
        'Человек раздув',
        ':man_bowing:',
        ':bowing:',
        ':man:'
    ],
    '🙇{{skin_tone}}‍‍♀️': [
        'Женщина',
        ':woman_bowing:',
        ':bowing:',
        ':woman:'
    ],
    '🙇{{skin_tone}}': [
        'Человек Bowing',
        ':person_bowing:',
        ':bowing:',
        ':person:'
    ],
    '🧏{{skin_tone}}‍♂️': [
        'Мудрец',
        ':deaf_man:',
        ':deaf:',
        ':man:'
    ],
    '🧏{{skin_tone}}‍‍♀️': [
        'Мудрец',
        ':deaf_woman:',
        ':deaf:',
        ':woman:'
    ],
    '🧏{{skin_tone}}': [
        'Человек глухих',
        ':deaf_person:',
        ':deaf:',
        ':person:'
    ],
    '🙋{{skin_tone}}‍‍♂️': [
        'Ручная рука',
        ':man_raising_hand:',
        'Счастливый человек вздохнувший одну руку',
        ':raising_hand:',
        ':man:'
    ],
    '🙋{{skin_tone}}‍♀️': [
        'Женщина за руку',
        ':woman_raising_hand:',
        'Счастливого женского восхождения',
        ':raising_hand:',
        ':woman:'
    ],
    '🙋{{skin_tone}}': [
        'Розыгрыш',
        ':person_raising_hand:',
        'Счастливого человека поднять одну руку',
        ':raising_hand:',
        ':person:'
    ],
    '💁{{skin_tone}}‍♂️': [
        'Рука подсказки',
        ':man_tipping_hand:',
        'Человек Информационного Стола',
        ':tipping_hand:',
        ':man:'
    ],
    '💁{{skin_tone}}‍♀️': [
        'Подсказка для женщин',
        ':woman_tipping_hand:',
        'Женское информационное бюро',
        ':tipping_hand:',
        ':woman:'
    ],
    '💁{{skin_tone}}': [
        'Подсказка о человеке',
        ':person_tipping_hand:',
        'Лицо информационной службы',
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
        'Женская одежда ОК',
        ':woman_gesturing_ok:',
        ':gesturing_ok:',
        ':woman:'
    ],
    '🙆{{skin_tone}}': [
        'Человек ОК',
        ':person_gesturing_ok:',
        ':gesturing_ok:',
        ':person:'
    ],
    '🙅{{skin_tone}}‍♂️': [
        'Мужчина нет',
        ':man_gesturing_no:',
        ':gesturing_no:',
        ':man:'
    ],
    '🙅{{skin_tone}}‍♀️': [
        'Нет женского одежды',
        ':woman_gesturing_no:',
        ':gesturing_no:',
        ':woman:'
    ],
    '🙅{{skin_tone}}': [
        'Пожирающий Нет',
        ':person_gesturing_no:',
        ':gesturing_no:',
        ':person:'
    ],
    '🙎{{skin_tone}}‍♂️': [
        'Мускулин',
        ':man_pouting:',
        ':pouting:',
        ':man:'
    ],
    '🙎{{skin_tone}}‍‍♀️': [
        'Женский питомник',
        ':woman_pouting:',
        ':pouting:',
        ':woman:'
    ],
    '🙎{{skin_tone}}': [
        'Личный Поут',
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
        'Женское утопление',
        ':woman_frowining:',
        ':frowining:',
        ':woman:'
    ],
    '🙍{{skin_tone}}': [
        'Стрелок человека',
        ':person_frowining:',
        ':frowining:',
        ':person:'
    ],
    '🧟‍‍♂️': [
        'Зомби человека',
        ':man_zombie:',
        ':zombie:',
        ':man:'
    ],
    '🧟‍‍♀️': [
        'Женский зомби',
        ':woman_zombie:',
        ':zombie:',
        ':woman:'
    ],
    '🧟': [
        'Зомби',
        ':person_zombie:',
        ':zombie:',
        ':person:'
    ],
    '🚶{{skin_tone}}‍♂️': [
        'Человек Холдинг',
        ':man_walking:',
        ':walking:',
        ':man:'
    ],
    '🚶{{skin_tone}}‍♀️': [
        'Женская прогулка',
        ':woman_walking:',
        ':walking:',
        ':woman:'
    ],
    '🚶{{skin_tone}}': [
        'Прогулка по человеку',
        ':person_walking:',
        ':walking:',
        ':person:'
    ],
    '🧍{{skin_tone}}‍♂️': [
        'Стоящий человек',
        ':man_standing:',
        ':standing:',
        ':man:'
    ],
    '🧍{{skin_tone}}‍♀️': [
        'Постоянная женщина',
        ':woman_standing:',
        ':standing:',
        ':woman:'
    ],
    '🧍{{skin_tone}}': [
        'Находящийся человек',
        ':person_standing:',
        ':standing:',
        ':person:'
    ],
    '🧎{{skin_tone}}‍♂️': [
        'Коленовый Человек',
        ':man_kneeling:',
        ':kneeling:',
        ':man:'
    ],
    '🧎{{skin_tone}}‍♀️': [
        'Женский коленок',
        ':woman_kneeling:',
        ':kneeling:',
        ':woman:'
    ],
    '🧎{{skin_tone}}': [
        'Лицо Kneelink',
        ':person_kneeling:',
        ':kneeling:',
        ':person:'
    ],
    '👨{{skin_tone}}‍🦯': [
        'Человек с белым тростником',
        ':man_with_white_cane:',
        ':white_cane:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🦯': [
        'Женщины с белой тростницей',
        ':woman_with_white_cane:',
        ':white_cane:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🦯': [
        'Человек с белой тростницей',
        ':person_with_white_cane:',
        ':white_cane:',
        ':person:'
    ],
    '👨{{skin_tone}}‍🦼': [
        'Человек в Моторизированном Коляске',
        ':man_in_motorized_wheelchair:',
        ':motorized_wheelchair:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🦼': [
        'Женщина в Моторизованном Коляске',
        ':woman_in_motorized_wheelchair:',
        ':motorized_wheelchair:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🦼': [
        'Лицо в Моторизованном Коляске',
        ':person_in_motorized_wheelchair:',
        ':motorized_wheelchair:',
        ':person:'
    ],
    '👨{{skin_tone}}‍🦽': [
        'Человек в ручном коляске',
        ':man_manual_wheelchair:',
        ':manual_wheelchair:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🦽': [
        'Женщина в ручном коляске',
        ':woman_manual_wheelchair:',
        ':manual_wheelchair:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🦽': [
        'Человек в ручном кресле-коляске',
        ':person_manual_wheelchair:',
        ':manual_wheelchair:',
        ':person:'
    ],
    '👯‍♂️': [
        'Мужчины с Кроликовыми Ушами',
        ':men_with_bunny_hears:',
        ':bunny_ears:',
        ':man:'
    ],
    '👯‍♀️': [
        'Женщины, имеющие уши кролика',
        ':women_with_bunny_hears:',
        ':bunny_ears:',
        ':woman:'
    ],
    '👯': [
        'Люди с ушами кролика',
        ':people_with_bunny_hears:',
        ':bunny_ears:',
        ':person:'
    ],
    '🕴️{{skin_tone}}': [
        'Лицо в костюмах Левитация',
        ':person_in_suit_levitating:',
        'Хоулинг',
        'Руди-Мальчик',
        'Walt Jabsco',
        'Левитация в бизнес костюме',
        ':person:'
    ],
    '🧖{{skin_tone}}‍♂️': [
        'Человек в парижском кабинете',
        ':man_in_steamy_room:',
        ':steamy_room:',
        'Человек в сауне',
        ':man:'
    ],
    '🧖{{skin_tone}}‍♀️': [
        'Женщина в парижской комнате',
        ':woman_in_steamy_room:',
        ':steamy_room:',
        'Женщины в Сауне',
        ':woman:'
    ],
    '🧖{{skin_tone}}': [
        'Человек в парижском кабинете',
        ':person_in_steamy_room:',
        ':steamy_room:',
        'Лицо в Сауне',
        ':person:'
    ],
    '👫{{skin_tone}}': [
        'Руки «Женщина и мужчина»',
        ':woman_and_man_holding_hands:',
        ':holding_hands:',
        'Гетеросексуальная пара',
        'Прямая пара',
        'Мужчины и женские руки',
        ':woman:'
    ],
    '👬{{skin_tone}}': [
        'Мужчины Холдинг Руки',
        ':holding_hands:',
        ':men_holding_hands:',
        'Пара Гей',
        'Два Мужчины Холдинг Руки',
        ':man:'
    ],
    '👭{{skin_tone}}': [
        'Женщины-холдинги рук',
        ':holding_hands:',
        ':women_holding_hands:',
        'Лесбийская пара',
        'Две женщины с руками',
        ':woman:'
    ],
    '🧑‍🤝‍🧑': [
        'Люди, владеющие руками',
        ':holding_hands:',
        ':people_holding_hands:',
        'Две люди владеют руками',
        'Гендерная пара',
        'Безгендерная пара',
        'Несоответствие половой принадлежности',
        ':person:'
    ],
    '👨‍👩‍👦': [
        'Семья с Материей, Отцом и Сыном',
        ':family_with_mother_father_and_son:',
        'Семья: мужчина, женщина, мальчик'
    ],
    '👨‍👩‍👧': [
        'Семья с матерью, отцом и дочь',
        ':family_with_mother_father_and_daughter:',
        'Семья: мужчина, женщина, девочка'
    ],
    '👨‍👩‍👧‍👦': [
        'Семья с матерью, отцом, сыном и дочери',
        ':family_with_mother_father_son_and_daughter:',
        'Семья: Мужчина, Женщина, Девочка, Мальчик'
    ],
    '👨‍👩‍👦‍👦': [
        'Семья с матерью, отцом и двумя сынами',
        ':family_with_mother_father_and_two_sons:',
        'Семья: мужчина, женщина, мальчик, мальчик'
    ],
    '👨‍👩‍👧‍👧': [
        'Семья с матерью, отцом и двумя дочерями',
        ':family_with_mother_father_and_two_daughters:',
        'Семья: Мужчина, Женщина, Девочка'
    ],
    '👨‍👨‍👦': [
        'Семья с двумя отцами и Сыном',
        ':family_with_two_fathers_and_son:',
        'Семья: Человек, Человек, Мальчик',
        ':man:'
    ],
    '👨‍👨‍👧': [
        'Семья с двумя отцами и дочь',
        ':family_with_two_fathers_and_daughter:',
        'Семья: мужчина, мужчина, девушка',
        ':man:'
    ],
    '👨‍👨‍👧‍👦': [
        'Семья с двумя отцами, сыном и дочь',
        ':family_with_two_fathers_son_and_daughter:',
        'Семья: Мужчина, Ман, Девочка, Мальчик',
        ':man:'
    ],
    '👨‍👨‍👦‍👦': [
        'Семья с двумя отцами и двумя сынами',
        ':family_with_two_fathers_and_two_sons:',
        'Семья: мужчина, мужчина, мальчик, мальчик',
        ':man:'
    ],
    '👨‍👨‍👧‍👧': [
        'Семья с двумя отцом и двумя дочери',
        ':family_with_two_fathers_and_two_daughters:',
        'Семья: Мужчина, Мужчина, Девушка',
        ':man:'
    ],
    '👩‍👩‍👦': [
        'Семья с двумя матерями и сыном',
        ':family_with_two_mothers_and_son:',
        'Семья: женщина, женщина, мальчик',
        ':woman:'
    ],
    '👩‍👩‍👧': [
        'Семья с двумя матерями и дочь',
        ':family_with_two_mothers_and_daughter:',
        'Семья: женщина, женщина, девочка',
        ':woman:'
    ],
    '👩‍👩‍👧‍👦': [
        'Семья с двумя матерями, сын и дочь',
        ':family_with_two_mothers_son_and_daughter:',
        'Семья: Женщина, Девочка, Мальчик',
        ':woman:'
    ],
    '👩‍👩‍👦‍👦': [
        'Семья с двумя матерями и двумя сынами',
        ':family_with_two_mothers_and_two_sons:',
        'Семья: Женщина, мальчик, мальчик',
        ':woman:'
    ],
    '👩‍👩‍👧‍👧': [
        'Семья с двумя матерями и двумя дочери',
        ':family_with_two_mothers_and_two_daughters:',
        'Семья: Женщина, Женщина, Девочка',
        ':woman:'
    ],
    '👨‍👦': [
        'Семья с Отецом и Сыном',
        ':family_with_father_and_son:',
        'Семья: Человек, Мальчик',
        ':man:'
    ],
    '👨‍👧': [
        'Семья с Отец и Дочь',
        ':family_with_father_and_daughter:',
        'Семья: Мужчина, Девочка',
        ':man:'
    ],
    '👨‍👦‍👦': [
        'Семья с отцом и двумя сынами',
        ':family_with_father_and_two_sons:',
        'Семья: мужчина, мальчик, мальчик',
        ':man:'
    ],
    '👨‍👧‍👦': [
        'Семья с отцом, сыном и дочь',
        ':family_with_father_son_and_daughter:',
        'Семья: Мужчина, Девочка, Мальчик',
        ':man:'
    ],
    '👨‍👧‍👧': [
        'Семья с отцом и двумя дочерьми',
        ':family_with_father_and_two_daughters:',
        'Семья: Мужчина, Девочка, Девочка',
        ':man:'
    ],
    '👩‍👦': [
        'Семья с Матерью и Сыном',
        ':family_with_mother_and_son:',
        'Семья: Женщина, Мальчик',
        ':woman:'
    ],
    '👩‍👧': [
        'Семья с Матерью и Дочь',
        ':family_with_mother_and_daughter:',
        'Семья: женщина, девочка',
        ':woman:'
    ],
    '👩‍👦‍👦': [
        'Семья с матерью и двумя сынами',
        ':family_with_mother_and_two_sons:',
        'Семья: Женщина, мальчик, мальчик',
        ':woman:'
    ],
    '👩‍👧‍👦': [
        'Семья с Матери, Сыном и Дочь',
        ':family_with_mother_son_and_daughter:',
        'Семья: Женщина, Девочка, Мальчик',
        ':woman:'
    ],
    '👩‍👧‍👧': [
        'Семья с матерью и двумя дочерями',
        ':family_with_mother_and_two_daughters:',
        'Семья: Женщина, Девочка, Девочка',
        ':woman:'
    ],
    '💑{{skin_tone}}': [
        'Пара с сердцем',
        ':couple_with_heart:',
        'Пара в любви',
        'Влюблённая пара',
        'Безгендерная пара',
        ':person:'
    ],
    '👩‍❤️‍👨': [
        'Человек и женщина с сердцем',
        ':man_and_woman_with_heart:',
        'Пара в любви',
        'Влюблённая пара',
        'Пара с сердцем'
    ],
    '👨‍❤️‍👨': [
        'Два человека с сердцем',
        ':two_men_with_heart:',
        'Пара с сердцем: мужчина, мужчина',
        ':man:'
    ],
    '👩‍❤️‍👩': [
        'Две женщины с сердцем',
        ':two_women_with_heart:',
        'Пара с сердцем: женщина, женщина',
        ':woman:'
    ],
    '💏{{skin_tone}}': [
        'Пара целуется',
        ':couple_kissing:',
        'Поцелуй',
        'Поцелуй безгендерной пары',
        ':person:'
    ],
    '👩‍❤️‍💋‍👨': [
        'Мужчина и женщина целуются',
        ':man_and_woman_kissing:'
    ],
    '👨‍❤️‍💋‍👨': [
        'Два мужчины целуются',
        ':two_men_kissing:',
        'Мужчина целует мужчину',
        ':man:'
    ],
    '👩‍❤️‍💋‍👩': [
        'Две женщины целуются',
        ':two_women_kissing:',
        'Женщина целует женщину',
        ':woman:'
    ],
    '💆{{skin_tone}}‍♂️': [
        'Массаж головы мужчине',
        ':man_getting_head_massage:',
        ':getting_head_massage:',
        ':man:'
    ],
    '💆{{skin_tone}}‍♀️': [
        'Женский массаж головы',
        ':woman_getting_head_massage:',
        ':getting_head_massage:',
        ':woman:'
    ],
    '💆{{skin_tone}}': [
        'Массаж головы человеку',
        ':person_getting_head_massage:',
        ':getting_head_massage:',
        ':person:'
    ],
    '💇{{skin_tone}}‍♂️': [
        'Стригущийся мужчина',
        ':man_getting_haircut:',
        ':getting_haircut:',
        ':man:'
    ],
    '💇{{skin_tone}}‍♀️': [
        'Стригущаяся женщина',
        ':woman_getting_haircut:',
        ':getting_haircut:',
        ':woman:'
    ],
    '💇{{skin_tone}}': [
        'Стригущийся человек',
        ':person_getting_haircut:',
        ':getting_haircut:',
        ':person:'
    ],
    '🛌{{skin_tone}}': [
        'Спящее место',
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
        'Тролль',
        ':troll:'
    ],
    '👺': [
        'Гоблин',
        ':goblin:',
        'Лицо с длинным носом',
        'Красная маска',
        'Тэнгу',
        'Японский гоблин'
    ]
};
/*animals*/
emojis_language[lang][4] = {
    '😺': [
        'Идущий кот',
        ':happy_cat:',
        ':smiling_cat:',
        '::):',
        'Счастливый кот',
        'Улыбающийся кот',
        'Счастливое лицо кошки',
        'Улыбающийся кошачий лица с открытым матом'
    ],
    '😸': [
        'Улыбающийся кот с улыбкой глаз',
        ':grinning_cat:',
        '::D:',
        'Идущий кот',
        'Счастливый кот',
        'Ухмыляющееся лицо кота'
    ],
    '😹': [
        'Кошка с Tears от Радости',
        ':laughing_cat:',
        '::):',
        'Счастливая кошка',
        'Смешанный кот'
    ],
    '😻': [
        'Улыбающийся кот с сердечными глазами',
        ':heart_eyes_cat:',
        ':*.*:',
        'Сердечная кошка',
        'Любимый кот',
        'Улыбающийся кошачий глаз с сердцевиной'
    ],
    '😼': [
        'Кошка с Wry Smile',
        ':cat_with_wry_smile:',
        'Ухмывающая кошка',
        'Ухмывающая Кошка Лицо',
        'Кошачье лицо с Wry Smile'
    ],
    '😽': [
        'Поцелуй кот',
        ':kissing_cat:',
        '::*:',
        'Поцелуй кошачье лицо',
        'Поцелуй кошачье лицо с закрытыми глаза'
    ],
    '🙀': [
        'Оставшийся кот',
        ':weary_cat:',
        '::O:',
        'Спокойная кошка',
        'Кричащий кот',
        'Кричащие лица кот в страхе',
        'Богатый кот лица'
    ],
    '😿': [
        'Плачущий кот',
        ':crying_cat:',
        '::(:',
        'Грустный кот',
        'Плачущая Кошка Лицо'
    ],
    '😾': [
        'Ветви кот',
        ':pouting_cat:',
        'Grumpy Cat',
        'Пистолет кошачьего лица'
    ],
    '🙈': [
        'Видимо безбедная обезьяна',
        'Обезьяна',
        ':see-no-evil_mokey:',
        ':see_no_evil_mokey:',
        ':monkey:',
        'Мизару',
        'Глаза обложки обезьян'
    ],
    '🙉': [
        'Обезьяна Сердца',
        'Обезьяна',
        ':hear-no-evil_monkey:',
        ':hear_no_evil_monkey:',
        ':monkey:',
        'Kikazaru',
        'Покрытие обезьян уши'
    ],
    '🙊': [
        'Обезьяна Динамика',
        'Обезьяна',
        ':speak-no-evil_monkey:',
        ':speak_no_evil_monkey:',
        ':monkey:',
        'Ивазару',
        'Покрытие обезьян',
        'Нет произношения'
    ],
    '🐵': [
        'Обезьяна лицо',
        ':monkey_face:',
        'Обезьяна',
        'Голова обезьяны'
    ],
    '🐒': [
        'Обезьяна',
        ':monkey:',
        'Чики-обезьяны'
    ],
    '🦍': [
        'Gorilla',
        ':gorilla:'
    ],
    '🐶': [
        'Собака лицо',
        ':dog_face:',
        'Собака',
        'Щенок'
    ],
    '🐕': [
        'Собака',
        ':dog:',
        'Doggo',
        'Akita Inu'
    ],
    '🦮': [
        'Собака Глаза',
        ':seeing_eye_dog:',
        'Собака'
    ],
    '🐕‍🦺': [
        'Служебная собака',
        ':service_dog:'
    ],
    '🐩': [
        'Подол',
        ':poodle:',
        'Собака',
        'Миниатюра',
        'Стандартный Poodle',
        'Игрушки'
    ],
    '🐺': [
        'Волк',
        ':wolf:',
        'Волчье лицо',
        ':gray:',
        ':grey:'
    ],
    '🦊': [
        'Лиса',
        ':fox:',
        'Лисица Лисы',
        ':orange:'
    ],
    '🦝': [
        'Раккун',
        ':raccoon:'
    ],
    '🐱': [
        'Кошачье лицо',
        ':cat_face:',
        ':3',
        'Котёнок',
        'Китти'
    ],
    '🐈': [
        'Кошка',
        ':cat:',
        'Внутренний кот',
        'Кошачий',
        'Хьюсекат'
    ],
    '🐈‍⬛': [
        'Чёрный кот',
        ':black_cat:',
        ':black:'
    ],
    '🦁': [
        'Львов',
        ':lion:',
        'Лицо льва'
    ],
    '🐯': [
        'Тигр Лицо',
        ':tiger_face:',
        'Острый Тигр'
    ],
    '🐅': [
        'Тигр',
        ':tiger:',
        'Бенгальский Тигр'
    ],
    '🐆': [
        'Leopard',
        ':leopard:',
        'Африканский леопард',
        'Jaguar'
    ],
    '🐴': [
        'Лицо лошади',
        ':horse_face:',
        'Верховая голова'
    ],
    '🐎': [
        'Лошадь',
        ':horse:',
        'Галлопирующая лошадь',
        'Рацеконь'
    ],
    '🦄': [
        'Единорог',
        ':unicorn:',
        'Лицо Единорога'
    ],
    '🦓': [
        'Zebra',
        ':zebra:',
        'Лицо Зебры',
        ':white:',
        ':black:'
    ],
    '🦌': [
        'Олень',
        ':deer:',
        'Бак',
        'Олень',
        'Stag'
    ],
    '🐮': [
        'Коровное лицо',
        ':cow_face:',
        'Корова',
        'Счастливая корова'
    ],
    '🐂': [
        'Окс',
        ':ox:',
        'Бык',
        'Буллок',
        'Оксен',
        'Улей'
    ],
    '🐃': [
        'Буффало воды',
        ':water_buffalo:',
        'Баффало',
        'Буффало бытовой воды'
    ],
    '🐄': [
        'Корова',
        ':cow:',
        'Молочная корова'
    ],
    '🐷': [
        'Свиноградник',
        ':pig_fase:',
        'Свиньи',
        'Голова свиньи',
        ':pink:'
    ],
    '🐖': [
        'Свиньи',
        ':pig:',
        'Сэг',
        'Sow',
        ':pink:'
    ],
    '🐗': [
        'Кабан',
        ':boar:',
        'Вартог',
        'Дикий кабан',
        'Дикая свинья'
    ],
    '🐽': [
        'Свинонос',
        ':pig_nose:'
    ],
    '🐏': [
        'Ram',
        ':ram:',
        'Овца'
    ],
    '🐑': [
        'Ewe',
        ':ewe:',
        'Lamb',
        'Овца'
    ],
    '🐐': [
        'Козел',
        ':goat:'
    ],
    '🐪': [
        'Верблюд',
        ':camel:',
        'Арабский верблюд',
        'Верблюд Дромады',
        'Верблюд из одного бампа'
    ],
    '🐫': [
        'Верблюд с двумя намотками',
        ':two-hump_camel:',
        ':two_hump_camel:',
        'Азиатский верблюд',
        'Верблюд Бактрисы'
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
        'Слон',
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
        'Лицо мыши',
        ':mouse_face:',
        'Мышь'
    ],
    '🐁': [
        'Мышь',
        ':mouse:',
        'Дреммуз',
        'Грызун',
        'Миса'
    ],
    '🐀': [
        'Крысы',
        ':rat:',
        'Грызун'
    ],
    '🐹': [
        'Хамстер',
        ':hamster:',
        'Мастерское лицо'
    ],
    '🐰': [
        'Кролик лицо',
        ':rabbit_face:',
        'Пасхальный Кролик'
    ],
    '🐇': [
        'Кролик',
        'Bunny',
        ':rabbit:',
        'Кролик кролика'
    ],
    '🐿️': [
        'Чипмунк',
        ':chipmunk:',
        'Белка'
    ],
    '🦔': [
        'Хеджог',
        ':hedgehog:'
    ],
    '🦇': [
        'Летучие мыши',
        ':bat:',
        'Батман',
        ':black:'
    ],
    '🐻': [
        'Медведь',
        ':bear:',
        'Медведь',
        'Медведь Тедди',
        ':brown:'
    ],
    '🐨': [
        'Коала',
        ':koala:',
        'Коала лицо'
    ],
    '🐼': [
        'Панда',
        ':panda:',
        'Лицо Панды'
    ],
    '🦘': [
        'Кангуру',
        ':kangaroo:',
        'Роо'
    ],
    '🦡': [
        'Бадгер',
        ':badger:'
    ],
    '🦃': [
        'Турция',
        ':turkey:',
        'Индейка Благодарения',
        'Дикая Индюшка'
    ],
    '🐔': [
        'Курица',
        ':chicken:',
        'Hen'
    ],
    '🐓': [
        'Чат',
        ':cock:',
        'Rooster',
        'Коктейль'
    ],
    '🐣': [
        'Шутолящий цыпленок',
        ':hatching_chick:',
        'Младенная курица',
        'Шляпа Цык',
        ':yellow:'
    ],
    '🐤': [
        'Маленький Цыпленок',
        ':baby_chick:',
        'Жёлтая птица',
        ':yellow:'
    ],
    '🐥': [
        'Впереди гранатовый малыш',
        ':front_baby_chick:',
        'Маленький Цыпленок',
        'Мягкий Цыпленок',
        ':yellow:'
    ],
    '🐦': [
        'Птица',
        ':bird:'
    ],
    '🐧': [
        'Penguin',
        ':penguin:'
    ],
    '🕊️': [
        'Голубой',
        ':Dove:',
        'Голубой мира',
        ':white:'
    ],
    '🦅': [
        'Орел',
        ':Eagle:',
        'Чёрный орел'
    ],
    '🦆': [
        'Утка',
        ':Duck:'
    ],
    '🦢': [
        'Лебедь',
        ':swan:',
        ':white:'
    ],
    '🦉': [
        'Сова',
        ':owl:',
        ':brown:'
    ],
    '🦚': [
        'Павлин',
        ':peacock:'
    ],
    '🦜': [
        'Попугай',
        ':parrot:'
    ],
    '🐸': [
        'Лягушка',
        ':frog:',
        'Жаба',
        'Лягушка лицо',
        ':green:'
    ],
    '🐊': [
        'Крокодил',
        ':crocodile:',
        'Аллигатор',
        'Крок',
        ':green:'
    ],
    '🐢': [
        'Черепаха',
        ':turtle:',
        'Tortoise',
        ':green:'
    ],
    '🦎': [
        'Ящер',
        ':lizard:',
        'Гекко',
        ':green:'
    ],
    '🐍': [
        'Змея',
        ':snake:',
        'Змей'
    ],
    '🐲': [
        'Драконье лицо',
        ':dragon_face:',
        'Голова Дракона'
    ],
    '🐉': [
        'Дракон',
        ':dragon:'
    ],
    '🦕': [
        'Зауропод',
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
        'Прыгающий кит',
        ':spouting_whale:',
        'Сильный кит'
    ],
    '🐋': [
        'Кит',
        ':whale:'
    ],
    '🐬': [
        'Дельфин',
        ':dolphin:'
    ],
    '🐟': [
        'Рыба',
        ':fish:',
        'Свежеводная Рыба'
    ],
    '🐠': [
        'Тропическая Рыба',
        ':tropical_fish:',
        'Рыба',
        'Желто-синяя рыба'
    ],
    '🐡': [
        'Медуза',
        ':blowfish:',
        'Fugu',
        'Рыба-гриб'
    ],
    '🦈': [
        'Акула',
        ':shark:',
        'Отличная Белая Акула'
    ],
    '🐙': [
        'Осьминог',
        ':octopus:'
    ],
    '🐚': [
        'Спиральная раковина',
        ':spiral_shell:',
        'Сеасэль',
        'Ракушка'
    ],
    '🐌': [
        'Сногти',
        ':snail:',
        'Слаг',
        'Садовая ногти'
    ],
    '🦋': [
        'Бабочка',
        ':butterfly:'
    ],
    '🐛': [
        'Ошибка',
        ':bug:',
        'Гусеница',
        'Насекомые'
    ],
    '🐜': [
        'Ant',
        ':ant:',
        'Ошибка',
        'Насекомые'
    ],
    '🐝': [
        'Медовый',
        ':honeybee:',
        'Пчела',
        'Bumblebee',
        ':yellow:',
        ':black:'
    ],
    '🐞': [
        'Леди Жук',
        ':lady_beetle:',
        'Ladybird',
        'Ladybug',
        'Ошибка'
    ],
    '🦗': [
        'Крикет',
        ':cricket:',
        'Мягкий магазин'
    ],
    '🕷️': [
        'Паук',
        ':spider:'
    ],
    '🦂': [
        'Скорпион',
        ':scorpion:'
    ],
    '🦟': [
        'Москито',
        ':mosquito:',
        ':black:'
    ],
    '🦀': [
        'Краб',
        ':crab:',
        ':red:'
    ],
    '🦞': [
        'Лобстер',
        ':lobster:'
    ],
    '🦐': [
        'Креветка',
        ':shrimp:',
        'Prawn'
    ],
    '🦑': [
        'Кальмар',
        ':squid:'
    ],
    '🦧': [
        'Orangutan',
        ':orangutan:'
    ],
    '🦥': [
        'Лениво',
        ':sloth:'
    ],
    '🦦': [
        'Otter',
        ':otter:'
    ],
    '🦨': [
        'Скунк',
        ':skunk:'
    ],
    '🦬': [
        'Бсон',
        ':bison:'
    ],
    '🦣': [
        'Мамонт',
        ':mammoth:',
        ':brown:'
    ],
    '🦫': [
        'Бивер',
        ':beaver:'
    ],
    '🐻‍❄️': [
        'Полярный медведь',
        ':polar_bear:',
        ':white:'
    ],
    '🦤': [
        'Dodo',
        ':dodo:'
    ],
    '🦭': [
        'Печать',
        ':seal:'
    ],
    '🪲': [
        'Жук',
        ':beetle:'
    ],
    '🪳': [
        'Коктрак',
        ':cockroach:'
    ],
    '🪰': [
        'Летать',
        ':fly:'
    ],
    '🪱': [
        'Червь',
        ':worm:'
    ],
    '🦩': [
        'Фламинго',
        ':flamingo:'
    ],
    '🪹': [
        'Пустое гнездо',
        ':empty_nest:',
        'Птицы',
        'Главная'
    ],
    '🪺': [
        'Гнездо с яйцами',
        ':nest_with_eggs:',
        'Птицы',
        'Главная'
    ]
};
/*symbols*/
emojis_language[lang][5] = {
    '💘': [
        'Сердце со стрелой',
        ':heart_with_arrow:',
        'Стрела Купидона',
        'Lovestruck',
        ':pink:'
    ],
    '💝': [
        'Сердце с лентой',
        ':heart_with_ribbon:',
        'Шоколадная Коробка',
        'Подарок',
        'Подарочное Сердце',
        ':red:'
    ],
    '💖': [
        'Sparkling Heart',
        ':sparkling_heart:',
        'Искривленное Сердце',
        'Искренне сердце',
        'Звездное Сердце',
        ':pink:'
    ],
    '💗': [
        'Растущее сердце',
        ':growing_heart:',
        'Множественное сердце',
        'Тройное Сердце',
        ':pink:'
    ],
    '💓': [
        'Биение Сердца',
        ':beating_heart:',
        'Сердечная тревога',
        'Heartbeat',
        'Сердце Wifi',
        ':pink:'
    ],
    '💞': [
        'Революционные сердца',
        ':revolving_hearts:',
        'Два сердца',
        ':pink:'
    ],
    '💕': [
        'Два сердца',
        ':two_hearts:',
        'Маленькие сердца',
        'Два розовых сердца',
        ':pink:'
    ],
    '💟': [
        'Облик Сердца',
        ':heart_decoration:',
        ':purple:'
    ],
    '❣️': [
        'Восклицание Сердца',
        ':heart_exclamation:',
        'Сердце выше точки',
        'Красное сердце как восклицательный знак',
        'Марка "Восклицание Тяжелого сердца"',
        ':red:'
    ],
    '💔': [
        'Сломанное сердце',
        ':broken_heart:',
        'Нарушающее Сердце',
        'Брокхандр',
        'Сердце сломано',
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
        'Я люблю тебя',
        ':red_heart:',
        'Красное сердце',
        'Сердце',
        'Любовное сердце',
        'Красное сердце',
        ':red:'
    ],
    '🧡': [
        'Оранжевое сердце',
        ':orange_heart:',
        'Я люблю тебя',
        ':orange:'
    ],
    '💛': [
        'Желтое сердце',
        ':yellow_heart:',
        '#1 Snapchat ДП',
        'Золотое Сердце',
        'Я люблю тебя',
        ':yellow:'
    ],
    '💚': [
        'Зеленое сердце',
        ':green_heart:',
        'Честное Сердце',
        'Я люблю тебя',
        ':green:'
    ],
    '💙': [
        'Синее сердце',
        ':blue_heart:',
        'Я люблю тебя',
        ':blue:'
    ],
    '💜': [
        'Фиолетовое сердце',
        ':purple_heart:',
        'Я люблю тебя',
        ':purple:'
    ],
    '🖤': [
        'Чёрное сердце',
        ':black_heart:',
        'Темное сердце',
        'Я люблю тебя',
        ':black:'
    ],
    '🤍': [
        'Белые сердца',
        ':white_heart:',
        'Я люблю тебя',
        ':white:'
    ],
    '🤎': [
        'Коричневое сердце',
        ':brown_heart:',
        'Я люблю тебя',
        ':brown:'
    ],
    //"🩷": ["Pink Heart", ":pink_heart:", "I Love You", ":pink:"],
    //"🩵": ["Light Blue Heart", ":lightblue_heart:", "I Love You", ":blue:"],
    //"🩶": ["Grey Heart","Gray Heart", ":grey_heart:",":gray_heart:", "I Love You", ":gray:", ":grey:"],
    '💯': [
        'Очки заселения',
        ':hundred_points:',
        '100',
        '%',
        'Оставить 100',
        'Идеальный балл',
        'Символ точки заряда'
    ],
    '💬': [
        'Шар речи',
        ':speech_balloon:',
        'Сообщения',
        'Сообщения речи',
        ':white:'
    ],
    '💭': [
        'Мысль шара',
        ':thought_balloon:',
        'Сообщения для размышлений',
        'Сообщения Мысля',
        ':white:'
    ],
    '💤': [
        'Zzz',
        ':zzz:',
        'Время сна',
        'Собирается',
        'Сон',
        'Спящий знак',
        'Символ спящего режима'
    ],
    '♠': [
        'Костюм лопаты',
        ':spade_suit:',
        'Spades',
        'Black Spade Suit'
    ],
    '♥': [
        'Костюм сердца',
        ':heart_suit:',
        'Карта с сердцем',
        'Сердца',
        'Костюм Черного Сердца'
    ],
    '♦': [
        'Алмазный костюм',
        ':diamond_suit:',
        'Алмазы',
        'Черный алмазный костюм'
    ],
    '♣': [
        'Костюм клуба',
        ':club_suit:',
        'Клубы',
        'Черный Клубный Костюм'
    ],
    '🏧': [
        'Знак банкомата',
        ':atm_sign:',
        'Банкомат',
        'Автомат тележки',
        ':blue:'
    ],
    '🎧': [
        'Наушники',
        ':headphone:',
        'Наука',
        'iPod',
        'Наушники'
    ],
    '🎵': [
        'Музыкальная заметка',
        ':musical_note:',
        'Бирюзовая пара восьмых заметок',
        'Пучная пара кваров',
        'Музыкальная заметка'
    ],
    '🎶': [
        'Музыкальные заметки',
        ':musical_notes:',
        'Музыка',
        'Заметки о музыке',
        'Пение',
        'Несколько музыкальных заметок'
    ],
    '🔔': [
        'Колокольчик',
        ':bell:',
        'Колокол Свободы',
        'Ringer',
        'Свадебный Колокол',
        ':yellow:'
    ],
    '🔕': [
        'Колокольчик с слэшем',
        ':bell_with_slash:',
        'Уведомления',
        'Звонок отключен',
        'Заглушенный колокол',
        'Колокольчик с отметкой',
        ':yellow:'
    ],
    '🔈': [
        'Низкая громкость динамика',
        ':speaker_low_volum:',
        'Объем',
        'Динамик'
    ],
    '🔉': [
        'Средний объем динамика',
        ':speaker_medium_volume:',
        'Уменьшить громкость',
        'Динамик со средним объемом',
        'Динамик с одной звуковой волной'
    ],
    '🔊': [
        'Громкость динамика',
        ':speaker_high_volume:',
        'Увеличить громкость',
        'Динамик с тремя звуковыми волнами'
    ],
    '🔇': [
        'Заглушённый динамик',
        ':muted_speaker:',
        'Отключить звук',
        'Динамик с отменой штриха'
    ],
    '📢': [
        'Loudspeaker',
        ':loudspeaker:',
        'Объявление',
        'Система PA',
        'Общедоступный адрес громкий динамик'
    ],
    '⛔': [
        'Нет записи',
        ':no_entry:',
        ':red:'
    ],
    '🚫': [
        'Запрещено',
        ':prohibited:',
        'Забанен',
        'Круг обратный слэш',
        'Нет',
        'Круг Красный Перекрёсток',
        'Ограничено',
        'Нет знака входа',
        ':red:'
    ],
    '🚳': [
        'Нет велосипедов',
        ':no_bicycles:',
        'Нет Знака для Байкеров',
        ':red:',
        ':black:'
    ],
    '🚭': [
        'Нет курения',
        ':no_smoking:',
        'Нет символа курения',
        ':red:',
        ':black:'
    ],
    '🚯': [
        'Нет пометки',
        ':no_littering:',
        'Не использовать символ помета',
        ':red:',
        ':black:'
    ],
    '🚱': [
        'Непитьевая вода',
        ':non-potable_water:',
        ':non_potable_water:',
        'Нет воды',
        'Нет питьевой воды',
        'Символ "Неприемлемая вода"',
        ':red:',
        ':black:'
    ],
    '🚷': [
        'Нет пешеходов',
        ':no_pedestrians:',
        'Нет людей',
        'Нет прогулки',
        ':red:',
        ':black:'
    ],
    '🔞': [
        'Никто не старше 18 лет',
        ':no_one_under_18:',
        'NSFW',
        'Никто не имеет 18 символов',
        '18',
        ':red:',
        ':black:'
    ],
    '📵': [
        'Нет мобильных телефонов',
        ':no_mobile_phones:',
        'Нет сотовых телефонов',
        'Нет телефонов',
        'Нет смартфонов',
        ':red:',
        ':black:'
    ],
    '☢️': [
        'Radioactive',
        ':radioactive:',
        'Международный знак радиации',
        'Ядерный',
        'Радиоактивный знак',
        ':orange:'
    ],
    '☣️': [
        'Биоопасность',
        ':biohazard:',
        'Знак Биоопасности',
        ':orange:'
    ],
    '⬆️': [
        'Кнопка вверх',
        ':up_arrow_button:',
        'Стрелки вверх',
        'Черная стрелка вверх',
        ':blue:'
    ],
    '↗️': [
        'Кнопка "Вверх-Вправо"',
        ':up-right_arrow_button:',
        ':up_right_arrow_button:',
        'Диагональная вверх-правая стрелка',
        'Северо-Восточная Стрела',
        ':blue:'
    ],
    '➡️': [
        'Кнопка правой стрелки',
        ':right_arrow_button:',
        'Указание стрелок вправо',
        'Чёрная стрела справа',
        ':blue:'
    ],
    '↘️': [
        'Кнопка "Вниз"',
        ':down-right_arrow_button:',
        ':down_right_arrow_button:',
        'Диагональная нижняя стрелка вправо',
        'Юго-Восточная Стрела',
        ':blue:'
    ],
    '⬇️': [
        'Кнопка "Внизу"',
        ':down_arrow_button:',
        'Указание стрелок вниз',
        'Черная Стрелка Внизу',
        ':blue:'
    ],
    '↙️': [
        'Кнопка "Стрелка вниз"',
        ':down-left_arrow_button:',
        ':down_left_arrow_button:',
        'Диагональная стрелка вниз влево',
        'Юго-Западная Стрела',
        ':blue:'
    ],
    '⬅️': [
        'Кнопка "Влево"',
        ':left_arrow_button:',
        'Указание стрелок влево',
        'Слева черная стрела',
        ':blue:'
    ],
    '↖️': [
        'Кнопка "Вверх-Влево"',
        ':up-left_arrow_button:',
        ':up_left_arrow_button:',
        'Диагональная стрелка сверху влево',
        'Северо-Западная Стрела',
        ':blue:'
    ],
    '↕️': [
        'Кнопка вверх вниз',
        ':up-down_arrow_button:',
        ':up_down_arrow_button:',
        'Вертикальные стрелки',
        'Вверх по стрелке',
        ':blue:'
    ],
    '↔️': [
        'Кнопка "Влево вправо"',
        ':left-right_arrow_button:',
        ':left_right_arrow_button:',
        'Горизонтальные стрелки',
        'Стрелки на боках',
        'Стрелка вправо',
        ':blue:'
    ],
    '↩️': [
        'Кривирование правой стрелки влево',
        ':right_arrow_curving_left_button:',
        'Ответ по электронной почте',
        'Стрелка с кривой слева',
        'Стрелка влево с крюком',
        ':blue:'
    ],
    '↪️': [
        'Искривление правой кнопки левой стрелки',
        ':left_arrow_curving_right_button:',
        'Переслать письмо',
        'Стрелка с кривой вправо',
        'Стрела справа с крюком',
        ':blue:'
    ],
    '⤴️': [
        'Кнопка "Кривирование правой стрелки" вверх',
        ':right_arrow_curving_up_button:',
        'Стрелы, указывающие вправо после искривления вверх',
        ':blue:'
    ],
    '⤵️': [
        'Кнопка "Искривление вправо"',
        ':right_arrow_curving_down_button:',
        'Изогнутая стрелка вниз',
        'Стрелы, указывающие вправо после искривления вниз',
        ':blue:'
    ],
    '🔃': [
        'Вертикальная стрелка по часовой стрелке',
        ':clockwise_vertical_button:',
        'Стрелки вниз по часовой стрелке вверх и вниз',
        ':blue:'
    ],
    '🔄': [
        'Стрелки против часовой стрелки',
        ':counterclockwise_button:',
        'Обновить',
        'Повернуть',
        'Переключатель',
        'Против часовой стрелки',
        'Анти-по часовой стрелке вниз и вверх открытый круг стрелы',
        ':blue:'
    ],
    '🔙': [
        'Стрелка назад',
        ':back_arrow:',
        'Назад',
        'Назад с левой стрелой сверху',
        ':black:'
    ],
    '🔚': [
        'Конечная стрелка',
        ':end_arrow:',
        'Конец',
        'Конец с левой стрелой сверху',
        ':black:'
    ],
    '🔛': [
        'Вкл! Стрела',
        ':on_arrow:',
        'На',
        'На отметке восклицания с левой правой стрелой сверху',
        ':black:'
    ],
    '🔜': [
        'Скоро стрелка',
        ':soon_arrow:',
        'Скоро',
        'Скоро с правой стрелой выше',
        ':black:'
    ],
    '🔝': [
        'Верхняя стрелка',
        ':top_arrow:',
        'Сверху',
        'Вверх со стрелкой вверх над',
        ':black:'
    ],
    '🛐': [
        'Место поклонения',
        ':place_of_worship:',
        'Религиозное здание',
        ':purple:'
    ],
    '⚛️': [
        'Символ Atom',
        ':atom_symbol:',
        ':purple:'
    ],
    '🕉️': [
        'Символ Om',
        ':om_symbol:',
        'Ом',
        'Aumkara',
        'Omkara',
        'Pranava',
        ':purple:'
    ],
    '✡️': [
        'Звезда Дэвида',
        ':star_of_david:',
        'Маген Дэвид',
        ':purple:'
    ],
    '☸️': [
        'Колесо Дхармы',
        ':wheel_of_dharma:',
        'Шлем',
        ':purple:'
    ],
    '☯️': [
        'Yin Yang',
        ':yin_yang:',
        ':purple:'
    ],
    '✝️': [
        'Латинский крест',
        ':latin_cross:',
        'Христианский крест',
        ':purple:'
    ],
    '☦️': [
        'Православный Крест',
        ':orthodox_cross:',
        ':purple:'
    ],
    '☪️': [
        'Звезда и Полумесяц',
        ':star_and_crescent:',
        ':purple:'
    ],
    '☮️': [
        'Символ мира',
        ':peace:',
        'Знак мира',
        ':purple:'
    ],
    '🕎': [
        'Менора',
        ':menorah:',
        'Candelabrum',
        'Свечи',
        'Шанукя',
        'Менора',
        'Менора с Девятью Филиалами',
        ':purple:'
    ],
    '🔯': [
        'Шестиконечная звезда',
        ':dotted_six-pointed_star:',
        ':dotted_six_pointed_star:',
        'Шесть очков звезды со Средней Точкой',
        ':purple:'
    ],
    //"🪯": ["Khanda", ":khanda:", "Sikhism", ":purple:"],
    '♈': [
        'Орехи',
        ':aries:',
        ':zodiac:',
        'Зодиак',
        ':purple:'
    ],
    '♉': [
        'Taurus',
        ':taurus:',
        ':zodiac:',
        'Зодиак',
        ':purple:'
    ],
    '♊': [
        'Gemini',
        ':gemini:',
        ':zodiac:',
        'Зодиак',
        ':purple:'
    ],
    '♋': [
        'Рак',
        ':cancer:',
        ':zodiac:',
        'Зодиак',
        ':purple:'
    ],
    '♌': [
        'Лео',
        ':leo:',
        ':zodiac:',
        'Зодиак',
        ':purple:'
    ],
    '♍': [
        'Вирва',
        ':virgo:',
        ':zodiac:',
        'Зодиак',
        ':purple:'
    ],
    '♎': [
        'Библиотека',
        ':libra:',
        ':zodiac:',
        'Зодиак',
        ':purple:'
    ],
    '♏': [
        'Скорпио',
        ':scorpio:',
        ':zodiac:',
        'Скорпий',
        'Зодиак',
        ':purple:'
    ],
    '♐': [
        'Sagittarius',
        ':sagittarius:',
        ':zodiac:',
        'Зодиак',
        ':purple:'
    ],
    '♑': [
        'Козерог',
        ':capricorn:',
        ':zodiac:',
        'Зодиак',
        ':purple:'
    ],
    '♒': [
        'Акварий',
        ':aquarius:',
        ':zodiac:',
        'Зодиак',
        ':purple:'
    ],
    '♓': [
        'Pisces',
        ':pisces:',
        ':zodiac:',
        'Зодиак',
        ':purple:'
    ],
    '⛎': [
        'Офиух',
        ':ophiuchus:',
        ':zodiac:',
        'Зодиак',
        ':purple:'
    ],
    '⏭️': [
        'Пропустить символ вперед',
        'Чёрный правый треугольник с вертикальной полосой',
        ':skip_forward_button:',
        'Следующая кнопка трека',
        ':blue:'
    ],
    '⏮️': [
        'Пропустить задний символ',
        'Чёрный левый треугольник с вертикальной полосой',
        ':skip_backward_button:',
        'Последняя кнопка трека',
        'Предыдущий трек',
        ':blue:'
    ],
    '⏯️': [
        'Кнопка "Играть" или "Пауза"',
        'Черный правый треугольник с двойной вертикальной полосой',
        ':play_button:',
        ':pause_button:',
        ':play_or_pause_button:',
        'Воспроизвести символ',
        'Пауза',
        ':blue:'
    ],
    '🔀': [
        'Перемешать треки',
        ':shuffle_tracks_button:',
        'Скрученные правые стрелы',
        ':blue:'
    ],
    '🔁': [
        'Кнопка повтора',
        ':repeat_button:',
        'Символ цикла',
        'Ретвитнуть',
        'Стрелки открытого круга по часовой стрелке вправо и влево',
        ':blue:'
    ],
    '🔂': [
        'Повторить одну кнопку',
        ':repeat_single_button:',
        'Стрелки круга с числом 1',
        'Символ цикла один раз',
        'Повторите символ одного трека',
        'По часовой стрелке правой и левой стрелки Открытый круг стрелки с круговым одним наслоением',
        ':blue:'
    ],
    '▶️': [
        'Кнопка воспроизведения',
        ':play_button:',
        'Правый треугольник',
        'Правый треугольник',
        'Черный правый треугольник',
        ':blue:'
    ],
    '◀️': [
        'Кнопка обратная',
        ':reverse_button:',
        'Левый треугольник',
        'Левый треугольник',
        'Черный левый треугольник',
        ':blue:'
    ],
    '🔼': [
        'Кнопка вверх',
        ':upwards_button:',
        'Треугольник вверх',
        'Верхний треугольник',
        'Верхний указательный маленький красный треугольник',
        ':blue:'
    ],
    '🔽': [
        'Кнопка внизу',
        ':downwards_button:',
        'Нижний треугольник',
        'Нижний треугольник',
        'Понизить маленький красный треугольник',
        ':blue:'
    ],
    '⏩': [
        'Кнопка "Вперёд"',
        ':fast-forward_button:',
        ':fast_forward_button:',
        'Быстрая пересылка',
        'Символ "Быстрый вперёд"',
        'Чёрный правый треугольник',
        ':blue:'
    ],
    '⏪': [
        'Fast Reverse Button',
        ':fast_reverse_button:',
        'Rewind',
        'Символ перемотки',
        'Двойной треугольник с левой стороны',
        ':blue:'
    ],
    '⏫': [
        'Кнопка ускорения',
        ':fast_up_button:',
        'Верхний точный треугольник',
        'Чёрный верхний треугольник',
        ':blue:'
    ],
    '⏬': [
        'Кнопка Быстрая вниз',
        ':fast_down_button:',
        'Нижний треугольник',
        'Двойной треугольник с заниженной черной точкой',
        ':blue:'
    ],
    '⏹️': [
        'Кнопка остановки',
        ':stop_button:',
        'Остановить',
        'Остановить символ',
        'Чёрный квадрат для остановки',
        ':blue:'
    ],
    '⏏️': [
        'Кнопка Извлечения',
        ':eject_button:',
        'Eject Symbol',
        ':blue:'
    ],
    '🎦': [
        'Кино',
        ':cinema_button:',
        'Экран кино',
        'Фильмы',
        'Фильм',
        'Символ кинотеатра',
        'Запись',
        ':blue:'
    ],
    '📶': [
        'Панели антенны',
        ':antenna_bars_button:',
        'Панели приема',
        'Сила сигнала',
        'Stairs',
        'Символ силы сигнала',
        'Антенна с брусками',
        ':blue:'
    ],
    '✖️': [
        'Умножение',
        ':multiply:',
        'Раз',
        'Символ умножения',
        'Сильное умножение X',
        ':black:'
    ],
    '➕': [
        'Плюс',
        ':plus:',
        'Символ плюс',
        'Знак Тяжелого Плюса',
        ':black:'
    ],
    '➖': [
        'Minus',
        ':minus:',
        'Minus Symbol',
        'Знак тяжелого Минуса',
        ':black:'
    ],
    '➗': [
        'Разделить',
        ':divide:',
        'Символ раздела',
        'Знак Тяжелого Дивизиона',
        ':black:'
    ],
    '🟰': [
        'Знак Тяжелых Равен',
        ':heavy_equals_sign:',
        'Равно',
        'Результат',
        ':black:'
    ],
    '♾️': [
        'Бесконечность',
        ':infinity:',
        'Знак постоянной бумаги'
    ],
    '‼️': [
        'Отметка двойного восклицания',
        ':double_exclamation_mark:',
        'Красная отметка восклицания',
        ':red:'
    ],
    '⁉️': [
        'Восклицательный знак вопроса',
        ':exclamation_question_mark:',
        'Красная отметка восклицания и метка вопроса',
        ':red:'
    ],
    '❓': [
        'Метка вопроса',
        ':question_mark:',
        'Красная отметка вопроса',
        'Чёрный знак вопроса',
        ':red:'
    ],
    '❔': [
        'Белый вопрос',
        ':white_question_mark:',
        ':question_mark:',
        'Белый вопрос',
        'Белый вопрос отмечен орнаментом',
        ':white:'
    ],
    '❗': [
        'Восклицательный знак',
        ':exclamation_mark:',
        'Красная отметка восклицания',
        'Символ Тяжелой Восклицательной Марки',
        ':red:'
    ],
    '❕': [
        'Белый восклицательный знак',
        ':white_exclamation_mark:',
        ':exclamation_mark:',
        'Белый восклицательный знак орнамент',
        ':white:'
    ],
    '⭕': [
        'Красный Круг Холлоу',
        ':hollow_red_circle:',
        'Круг',
        'Правильно',
        'Красный круг',
        'Метка круга',
        'Тяжелый большой круг',
        ':red:'
    ],
    '☑️': [
        'Флажок с чеком',
        ':check_box_with_check:',
        'В',
        'Флажок',
        'Отметить флажком',
        'Блок голосования с чеком'
    ],
    '✔️': [
        'Отметить',
        ':check_mark:',
        'В',
        'Проверить',
        'Тик',
        'Checkmark',
        'Тяжелая чека',
        ':black:'
    ],
    '❌': [
        'Кросс-метка',
        ':cross_mark:',
        'Крест',
        'Х',
        ':red:'
    ],
    '✅': [
        'Проверить метку',
        ':check_mark_button:',
        'В',
        'Зелёная отметка',
        'Зелёный тик',
        'Отметить',
        'Белый тяжелый чек',
        ':green:'
    ],
    '❎': [
        'Кнопка перекрёстной отметки',
        ':cross_mark_button:',
        'Крест',
        'Х',
        'Отметить X',
        'Отрицательный крест в квадрате',
        ':green:'
    ],
    '#️⃣': [
        'Знак номера Keycap',
        ':hash_key:',
        '#',
        'Хэш ключа',
        'Хэштег',
        'Октябрьский',
        'Фунт Ключ',
        'Знак номера',
        ':blue:'
    ],
    '*️⃣': [
        'Keycap Asterisk',
        ':asterisk:',
        'Клавиша Звёзд',
        ':blue:'
    ],
    '0️⃣': [
        'Номер 0',
        ':number_0:',
        'Keycap Digit Zero'
    ],
    '1️⃣': [
        'Номер 1',
        ':number_1:',
        'Цифра клавиатуры 1'
    ],
    '2️⃣': [
        'Номер 2',
        ':number_2:',
        'Цифра второй клавиши'
    ],
    '3️⃣': [
        'Номер 3',
        ':number_3:',
        'Цифровая цифра шкафа 3'
    ],
    '4️⃣': [
        'Номер 4',
        ':number_4:',
        'Цветовая цифра шкафа 4'
    ],
    '5️⃣': [
        'Номер 5',
        ':number_5:',
        'Цифровая цифра шкафа пяти'
    ],
    '6️⃣': [
        'Номер 6',
        ':number_6:',
        'Шесть клавишных цифр'
    ],
    '7️⃣': [
        'Номер 7',
        ':number_7:',
        'Keycap Digit Seven'
    ],
    '8️⃣': [
        'Номер 8',
        ':number_8:',
        'Цветовая цифра шкафа'
    ],
    '9️⃣': [
        'Номер 9',
        ':number_9:',
        'Девять цифр шкафа'
    ],
    '🔟': [
        'Номер 10',
        ':number_10:',
        'Keycap: 10',
        '10',
        'Десять цифр шкафа'
    ],
    '🔠': [
        'Input Latin Uppercase',
        ':input_latin_uppercase:',
        'ABCD',
        'Прописные',
        'Введите символ для прописных букв',
        'Символ ввода для латинских столичных букв',
        ':blue:'
    ],
    '🔡': [
        'Input Latin Lowercase',
        ':input_latin_lowercase:',
        'abcd',
        'Строчные буквы',
        'Символ ввода для строчных букв',
        'Символ ввода для маленьких латинских букв',
        ':blue:'
    ],
    '🔢': [
        'Input Numbers',
        ':input_numbers:',
        '1234',
        'Числа',
        'Numeric Input',
        'Введите символ для цифр',
        ':blue:'
    ],
    '🔣': [
        'Введите символ для символов',
        ':input_symbols:',
        'Символы',
        'Ввод символа',
        ':blue:'
    ],
    '🔤': [
        'Input Latin Letters',
        ':input_latin_letters:',
        'abc',
        'Алфавит',
        'Буквы',
        'Символ ввода для букв',
        'Символ ввода для латинских букв',
        ':blue:'
    ],
    '🅰️': [
        'Кнопка (Blood Type)',
        ':a_blood:',
        'Кровь типа A',
        'Буква A',
        'Отрицательный квадрат латинской столицы A',
        ':red:'
    ],
    '🆎': [
        'Кнопка AB (Тип цикла)',
        ':ab_blood:',
        'Буквы AB',
        'Кровь типа AB',
        'Отрицательный квадрат AB',
        ':red:'
    ],
    '🅱️': [
        'Кнопка B (Blood Type)',
        ':b_blood:',
        'Буква B',
        'Кровь типа B',
        'Отрицательный квадрат латинской столицы буквы B',
        ':red:'
    ],
    '🆑': [
        'Кнопка КЛ',
        ':cl_button:',
        'Очистить',
        'Очистить кнопку',
        'Знак КЛ',
        'Квадрат CL',
        'Буквы CL',
        ':red:'
    ],
    '🆒': [
        'Холодная кнопка',
        ':cool_button:',
        'Крутой квадрат',
        'Крутая табличка',
        'Квадрат',
        ':blue:'
    ],
    '🆓': [
        'Бесплатная кнопка',
        ':free_button:',
        'Бесплатно',
        'Бесплатная табличка',
        'Без квадрата',
        ':blue:'
    ],
    'ℹ️': [
        'Информация',
        ':info_button:',
        'Инфо',
        'Строчная буква I',
        'Туристическая информация',
        'Источник информации',
        ':blue:'
    ],
    '🆔': [
        'Кнопка ID',
        ':id_button:',
        'ID',
        'Опознавательные обозначения',
        'Знак идентификации',
        'ID квадрата',
        ':purple:'
    ],
    '🆕': [
        'Новая кнопка',
        ':new_button:',
        'Новый',
        'Новый знак',
        'Новый квадрат',
        ':blue:'
    ],
    '🅾️': [
        'Кнопка O (Blood Type)',
        ':0_blood:',
        'Кровь типа O',
        '0',
        'Отрицательный квадрат латинской столицы',
        'Буква O',
        ':red:'
    ],
    '🆗': [
        'Кнопка OK',
        ':ok_button:',
        'ОК',
        'Окей',
        'Квадрат',
        'Знак ОК',
        'В квадрате ОК',
        ':blue:'
    ],
    '🅿️': [
        'Кнопка P',
        ':p_button:',
        ':parking_sign:',
        'Знак для парковки',
        'Отрицательный квадрат латинской столицы',
        'Буква P',
        ':blue:'
    ],
    '🆘': [
        'Кнопка SOS',
        ':sos_button:',
        'Сигнал бедствия',
        'Экстренная ситуация',
        'SOS',
        'Знак SOS',
        'В квадрате SOS',
        'Справка',
        ':red:'
    ],
    '🆙': [
        'Вверх! Кнопка',
        ':up_button:',
        'Повысить уровень',
        'Вверх',
        'Регистрация',
        'Квадрат с восклицательной маркой',
        ':blue:'
    ],
    '🆚': [
        'Кнопка Vs',
        ':vs_button:',
        'Квадрат V',
        ':orange:'
    ],
    '🆖': [
        'Кнопка NG',
        ':ng_button:',
        'Квадратный ПГ',
        'Нет Хорошего Знака',
        'Нет хорошего',
        ':ng:',
        'Блупер',
        ':blue:'
    ],
    '🔴': [
        'Красный круг',
        ':red_circle:',
        'Большой красный круг',
        ':red:'
    ],
    '🟠': [
        'Оранжевый круг',
        ':orange_circle:',
        'Большой оранжевый круг',
        ':orange:'
    ],
    '🟡': [
        'Желтый круг',
        ':yellow_circle:',
        'Большой жёлтый круг',
        ':yellow:'
    ],
    '🟢': [
        'Зелёный круг',
        ':green_circle:',
        'Большой зеленый круг',
        ':green:'
    ],
    '🔵': [
        'Синий круг',
        ':blue_circle:',
        'Большой синий круг',
        ':blue:'
    ],
    '🟣': [
        'Фиолетовый круг',
        ':purple_circle:',
        'Большой фиолетовый круг',
        ':purple:'
    ],
    '🟤': [
        'Коричневый круг',
        ':brown_circle:',
        'Большой коричневый круг',
        ':brown:'
    ],
    '⚫': [
        'Черный круг',
        ':black_circle:',
        'Средний черный круг',
        ':black:'
    ],
    '⚪': [
        'Белый круг',
        ':white_circle:',
        'Средний белый круг',
        ':white:'
    ],
    '🟥': [
        'Красный квадрат',
        ':red_square:',
        'Большой красный квадрат',
        ':red:'
    ],
    '🟧': [
        'Оранжевый квадрат',
        ':orange_square:',
        'Большой оранжевый квадрат',
        ':orange:'
    ],
    '🟨': [
        'Желтый квадрат',
        ':yellow_square:',
        'Большой жёлтый квадрат',
        ':yellow:'
    ],
    '🟩': [
        'Зеленый квадрат',
        ':green_square:',
        'Большой зеленый квадрат',
        ':green:'
    ],
    '🟦': [
        'Голубой квадрат',
        ':blue_square:',
        'Большой синий квадрат',
        ':blue:'
    ],
    '🟪': [
        'Фиолетовый квадрат',
        ':purple_square:',
        'Большой фиолетовый квадрат',
        ':purple:'
    ],
    '🟫': [
        'Коричневый квадрат',
        ':brown_square:',
        'Большой коричневый квадрат',
        ':brown:'
    ],
    '⬛': [
        'Площадь Чёрная',
        ':black_large_square:',
        ':black:'
    ],
    '⬜': [
        'Белая большая площадь',
        ':white_large_square:',
        ':white:'
    ],
    '◼️': [
        'Черная Средняя Площадь',
        ':black_medium_square:',
        ':black:'
    ],
    '◻️': [
        'Белая средняя площадь',
        ':white_medium_square:',
        ':white:'
    ],
    '◾': [
        'Черная средняя маленькая площадь',
        ':black_medium_small_square:',
        ':black:'
    ],
    '◽': [
        'Белая маленькая площадь',
        ':white_medium_small_square:',
        ':white:'
    ],
    '▪️': [
        'Площадь Чёрная',
        ':black_small_square:',
        ':black:'
    ],
    '▫️': [
        'Белая маленькая площадь',
        ':white_small_square:',
        ':white:'
    ],
    '💠': [
        'Алмазная фигура с Dot Inside',
        ':diamond_shape_with_dot:',
        'Утонченность',
        'Алмазный цветок',
        'Кавайи'
    ],
    '🔶': [
        'Большой оранжевый алмаз',
        ':large_orange_diamond:',
        ':orange:'
    ],
    '🔷': [
        'Большой синий алмаз',
        ':large_blue_diamond:',
        ':blue:'
    ],
    '🔸': [
        'Маленький оранжевый алмаз',
        ':small_orange_diamond:',
        ':orange:'
    ],
    '🔹': [
        'Маленький синий алмаз',
        ':small_blue_diamond:',
        ':blue:'
    ],
    '🔺': [
        'Ток красного треугольника вверх',
        ':red_triangle_pointed_up:',
        'Верхний красный треугольник',
        ':red:'
    ],
    '🔻': [
        'Ток красного треугольника вниз',
        ':red_triangle_pointed_down:',
        'Понизить красный треугольник',
        ':red:'
    ],
    '🔳': [
        'Кнопка белого квадрата',
        ':white_square_button:',
        ':white:',
        ':black:'
    ],
    '🔲': [
        'Кнопка Черного Квадрата',
        ':black_square_button:',
        ':white:',
        ':black:'
    ],
    '©️': [
        'Авторство',
        ':copyright:',
        ':c:',
        'Подпись авторских прав'
    ],
    '®️': [
        'Зарегистрирован',
        ':registered:',
        ':r:',
        'Зарегистрированный знак'
    ],
    '™️': [
        'Торговая марка',
        ':trade_mark:',
        ':tm:',
        'Торговая марка',
        'Торговый знак'
    ],
    '🛅': [
        'Левая кабака',
        ':left_luggage:',
        'Мешок с ключом',
        'Заблокированный чемодан',
        ':blue:'
    ],
    '🛄': [
        'Требование о багаже',
        ':baggage_claim:',
        ':blue:'
    ],
    '🛃': [
        'Таможня',
        ':customs:',
        ':blue:'
    ],
    '🛂': [
        'Контроль паспорта',
        ':passport_control:',
        'Контроль границы',
        ':blue:'
    ],
    //"🛜": ["Wireless", ":wireless:", ":wifi:", ":wi_fi:", "Wifi", "wi-fi", "wireless connection", ":blue:"],
    '🚰': [
        'Символ питьевой воды',
        ':potable_water_symbol:',
        'Жажда',
        'Жажда',
        'Водное касание',
        'Водозабор'
    ],
    '🇦': [
        'Буква A',
        ':letter_a:',
        ':a:',
        'Символ регионального индикатора A'
    ],
    '🇧': [
        'Буква B',
        ':letter_b:',
        ':b:',
        'Знак регионального индикатора буква B'
    ],
    '🇨': [
        'Буква C',
        ':letter_c:',
        ':c:',
        'Символ регионального индикатора C'
    ],
    '🇩': [
        'Буква D',
        ':letter_d:',
        ':d:',
        'Символ регионального индикатора буква D'
    ],
    '🇪': [
        'Буква E',
        ':letter_e:',
        ':e:',
        'Символ регионального индикатора E'
    ],
    '🇫': [
        'Буква F',
        ':letter_f:',
        ':f:',
        'Символ регионального индикатора F'
    ],
    '🇬': [
        'Буква G',
        ':letter_g:',
        ':g:',
        'Символ регионального индикатора G'
    ],
    '🇭': [
        'Буква H',
        ':letter_h:',
        ':h:',
        'Символ регионального индикатора H'
    ],
    '🇮': [
        'Буква I',
        ':letter_i:',
        ':i:',
        'Символ регионального индикатора'
    ],
    '🇯': [
        'Буква J',
        ':letter_j:',
        ':j:',
        'Символ регионального индикатора буква J'
    ],
    '🇰': [
        'Буква K',
        ':letter_k:',
        ':k:',
        'Символ регионального индикатора K'
    ],
    '🇱': [
        'Буква L',
        ':letter_l:',
        ':l:',
        'Символ регионального индикатора L'
    ],
    '🇲': [
        'Буква M',
        ':letter_m:',
        ':m:',
        'Символ регионального индикатора M'
    ],
    '🇳': [
        'Буква N',
        ':letter_n:',
        ':n:',
        'Символ регионального индикатора N'
    ],
    '🇴': [
        'Буква O',
        ':letter_o:',
        ':o:',
        'Символ регионального индикатора буква O'
    ],
    '🇵': [
        'Буква P',
        ':letter_p:',
        ':p:',
        'Символ регионального индикатора P'
    ],
    '🇶': [
        'Буква Q',
        ':letter_q:',
        ':q:',
        'Символ регионального индикатора буква Q'
    ],
    '🇷': [
        'Буква R',
        ':letter_r:',
        ':r:',
        'Символ регионального индикатора'
    ],
    '🇸': [
        'Буква S',
        ':letter_s:',
        ':s:',
        'Символ регионального индикатора S'
    ],
    '🇹': [
        'Буква T',
        ':letter_t:',
        ':t:',
        'Символ регионального индикатора T'
    ],
    '🇺': [
        'Буква U',
        ':letter_u:',
        ':u:',
        'Символ регионального индикатора'
    ],
    '🇻': [
        'Буква V',
        ':letter_v:',
        ':v:',
        'Символ регионального индикатора буква V'
    ],
    '🇼': [
        'Буква W',
        ':letter_w:',
        ':w:',
        'Символ регионального индикатора W'
    ],
    '🇽': [
        'Буква X',
        ':letter_x:',
        ':x:',
        'Символ регионального индикатора X'
    ],
    '🇾': [
        'Буква Y',
        ':letter_y:',
        ':y:',
        'Символ регионального индикатора Y'
    ],
    '🇿': [
        'Буква Z',
        ':letter_z:',
        ':z:',
        'Символ регионального индикатора Z'
    ],
    '💌': [
        'Любовное письмо',
        ':love_letter:',
        'Конверт Сердца',
        'Примечание о любви'
    ],
    '🚮': [
        'Поместить помет в его символ места',
        ':put_litter_in_bing_sign:',
        'Помет в корзине знак',
        'Поместить помет в корзину',
        'Человек с корзиной'
    ],
    '♿': [
        'Символ на колясках',
        ':wheelchair_symbol:',
        'Доступная ванная комната'
    ],
    '🚹': [
        'Символ Мужчины',
        ':mens_symbol:',
        'Символ Мужчины',
        'Мужчина',
        'Мужской Restroom',
        'Мужской WC',
        ':blue:'
    ],
    '🚺': [
        'Символ "Женщины"',
        ':womens_symbol:',
        'Символ "Женщины"',
        'Муалетка для женщин',
        'Женский сброс',
        'Прославленный WC',
        ':purple:',
        ':pink:'
    ],
    '🚻': [
        'Restroom',
        ':restroom:',
        'Табличка для ванной комнаты',
        'Табличка Туйлета',
        'Знак WC',
        ':blue:'
    ],
    '🚼': [
        'Символ "Малыш"',
        ':baby_symbol:',
        'Станция для смены младенцев',
        'Символ "Изменение ребенка"',
        'Медсерия',
        ':orange:'
    ],
    '🚾': [
        'Закрываемая Вода',
        ':wc:',
        'WC',
        'Туалет WC',
        ':blue:'
    ],
    '⚠️': [
        'Предупреждающий знак',
        ':warning_sign:',
        'Символ оповещения',
        ':yellow:'
    ],
    '🚸': [
        'Детский крест',
        ':children_crossing:',
        'Детский перекрёсток',
        'Школьный перекресток',
        ':yellow:'
    ],
    '🔅': [
        'Символ низкой яркости',
        ':low_brightness_symbol:',
        'Затемнить кнопку',
        'Уменьшить яркость'
    ],
    '🔆': [
        'Символ высокой яркости',
        ':high_brightness_symbol:',
        'Увеличить яркость',
        'Яркая кнопка'
    ],
    '📳': [
        'Режим вибрации',
        ':vibration_mode:',
        'Сердце телефона',
        'Беззвучный режим',
        ':orange:'
    ],
    '📴': [
        'Мобильный телефон выключен',
        ':mobile_phone_off:',
        ':orange:'
    ],
    '〰️': [
        'Волна',
        'Волшебный рывок',
        ':wave:'
    ],
    '💱': [
        'Обмен валют',
        ':currency_exchange:'
    ],
    '💲': [
        'Тяжелый долларовый знак',
        ':dollar_symbol:',
        'Доллар',
        'Знак Доллара'
    ],
    '♻️': [
        'Символ Universal Recycling',
        ':recycling_symbol:',
        'Символ металлосодержащих отходов',
        'Корзина логотип',
        ':green:'
    ],
    '🔱': [
        'Эмблема Трезубец',
        ':trident_emblem:',
        'Вилка',
        'Трезубец'
    ],
    '📛': [
        'Знак имени',
        ':name_badge:',
        'Тофу на огне',
        'Именная табличка',
        'Огненный тег'
    ],
    '🔰': [
        'Японский символ для новичка',
        ':japanese_symbol_beginner:',
        'Шошинша метка',
        'Желто-зелёный щит',
        ':green:',
        ':yellow:'
    ],
    '➰': [
        'Куристый цикл',
        ':curly_loop:',
        'Курирующий цикл',
        'Цикл'
    ],
    '➿': [
        'Двойной Курильный Хомут',
        ':double_curly_loop:',
        'Двойное Курирование',
        'Голосовая почта'
    ],
    '〽️': [
        'Метка Альтернативной части',
        ':part_alternation_mark:',
        'М',
        'МакДональдс'
    ],
    '✳️': [
        'Восемь замеченных Астериск',
        ':eight_spoked_asterisk:',
        ':green:'
    ],
    '✴️': [
        'Восемь очков чёрной звезды',
        ':eight_pointed_star:',
        'Оранжевая звезда',
        'Восемь очков звезды',
        ':orange:'
    ],
    '❇️': [
        'Искра',
        ':sparkle:',
        ':green:'
    ],
    'Ⓜ️': [
        'В спирали М',
        'Круглый стол "Латинская столица" М"',
        ':circled_m:',
        'Метро',
        ':blue:'
    ],
    '🈁': [
        'Японское значение знака слова здесь',
        'Squared Katakana Koko',
        ':japanese_here:',
        'Здесь',
        'Назначение',
        ':blue:'
    ],
    '🈂️': [
        'Японский знак Знак Смысл Сервис или Заряд Сервиса',
        'Squared Katakana Sa',
        ':japanese_service:',
        ':blue:'
    ],
    '🈷️': [
        'Сумма Знаков Японии за месяц',
        'В квадрате CJK унифицированная идеология-6708',
        ':japanese_monthly_amouny:',
        'Радикальные 74',
        '月',
        ':orange:'
    ],
    '🈶': [
        'Японское значение Знака не является бесплатным',
        'В квадрате CJK унифицированная идеология-6709',
        ':japanese_own:',
        'Свои',
        '有',
        ':orange:'
    ],
    '🈯': [
        'Японский знак значимости зарезервирован',
        'В квадрате CJK унифицированная идеология-6307',
        ':japanese_reserved:',
        'Точка пальца',
        '指',
        ':green:'
    ],
    '🉐': [
        'Японский знак Знак Смысл',
        'Преимущество в круглой идеографии',
        ':japanese_acquire:',
        'Приобрести',
        '得',
        ':red:'
    ],
    '🈹': [
        'Скидка "Знак Японии"',
        'В квадрате CJK унифицированная идеология-5272',
        ':japanese_discount:',
        'Продажа сделки',
        '割',
        ':red:'
    ],
    '🈚': [
        'Японский знак «Знак без зарядки»',
        'В квадрате CJK унифицированная идеология-7121',
        ':japanese_lacking:',
        'Отсутствует',
        '無',
        ':orange:'
    ],
    '🈲': [
        'Японское значение знаков запрещено',
        'В квадрате CJK унифицированная идеология-7981',
        ':japanese_prohibited:',
        'Forbid',
        '禁',
        ':red:'
    ],
    '🉑': [
        'Японский знак "Знак" Допустимо',
        'Принять в кругу идеограф',
        ':japanese_accept:',
        'Принять',
        ':orange:'
    ],
    '🈸': [
        'Японское значение Знака',
        'В квадрате CJK унифицированная идеография 7533',
        ':japanese_application_form:',
        'Форма заявки',
        'Обезьяна',
        'Запросить',
        '申',
        ':orange:'
    ],
    '🈴': [
        'Японский Знак Знака Проход (оценка)',
        'В квадрате CJK унифицированная идеология-5408',
        ':japanese_agreement:',
        'Соглашение',
        '合',
        ':red:'
    ],
    '🈳': [
        'Японский Знак Смысл Свободы',
        'Squared CJK Unified Ideograph-7a7a',
        ':japanese_available:',
        'Пусто и доступно',
        '空',
        ':blue:'
    ],
    '㊗️': [
        'Поздравляем Японский Знак Знака',
        'Окружённый идеограф',
        ':japanese_congratulations:',
        ':red:'
    ],
    '㊙️': [
        'Секретный секрет окружённого идеи',
        ':japanese_secret:',
        'Секрет Знака Японского Знака',
        'Секретный ключ',
        ':red:'
    ],
    '🈺': [
        'Японский знак "Открытый для бизнеса"',
        'Squared CJK Unified Ideograph-55b6',
        ':japanese_open_for_business:',
        'Работа',
        '営',
        ':orange:'
    ],
    '🈵': [
        'Японский Знак Знака Полное; Без Свободы',
        'В квадрате CJK унифицированная идеография-6e80',
        ':japanese_full:',
        'Полностью',
        '満',
        ':red:'
    ],
    '🔘': [
        'Кнопка Радио',
        ':radio_button:'
    ],
    '🛑': [
        'Знак Стоп',
        ':stop_sign:',
        'Символ Octagonal',
        ':red:'
    ],
    '⚕️': [
        'Символ Медицины',
        ':medical_symbol:',
        'Эскулапий',
        'Asklepios',
        'Жезл Asclepius',
        'Посох Эскулапия'
    ],
    '🛗': [
        'Лифт',
        ':elevator:',
        ':lift:',
        'Лифт'
    ],
    '⚧️': [
        'Символ транспола',
        ':transgender_sign:'
    ],
    '♂️': [
        'Мужская табличка',
        ':male_sign:',
        'Символ человека',
        'Символ Марса'
    ],
    '♀️': [
        'Женская табличка',
        ':female_sign:',
        'Символ женщины',
        'Venus Symbol'
    ]
};
/*food and drinks*/
emojis_language[lang][6] = {
    '🍇': [
        'Виноград',
        ':grapes:',
        'Виноград',
        ':purple:'
    ],
    '🍈': [
        'Дын',
        ':melon:',
        'Cantaloupe',
        'Медовая роса',
        'Мускмеон'
    ],
    '🍉': [
        'Арбуз',
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
        'Лимон',
        ':lemon:',
        'Лимонада',
        ':yellow:'
    ],
    '🍌': [
        'Банан',
        ':banana:',
        'Плантан',
        ':yellow:'
    ],
    '🍍': [
        'Ананас',
        ':pineapple:'
    ],
    '🥭': [
        'Mango',
        ':mango:'
    ],
    '🍎': [
        'Красное яблоко',
        ':red_apple:',
        ':apple:',
        'Красное Вкусное Яблоко',
        ':red:'
    ],
    '🍏': [
        'Зелёное яблоко',
        ':green_apple:',
        ':apple:',
        'Золотое Вкусное Яблоко',
        'Бабушка Смит',
        ':green:'
    ],
    '🍐': [
        'Груша',
        ':pear:'
    ],
    '🍑': [
        'Персик',
        ':peach:',
        'Внизу',
        'Мясо',
        ':orange:',
        ':pink:'
    ],
    '🍒': [
        'Вишни',
        ':cherry:',
        'Вишня',
        'Дикий Вишневый',
        ':red:'
    ],
    '🍓': [
        'Клубника',
        ':strawberry:',
        ':red:'
    ],
    '🥝': [
        'Фрукты Киви',
        ':kiwi:',
        'Китайский Гусберри',
        'Киви',
        'Кивифрукт',
        ':green:'
    ],
    '🍅': [
        'Томато',
        ':tomato:',
        ':red:'
    ],
    '🥥': [
        'Кокос',
        ':coconut:',
        'Cocoanut'
    ],
    '🥑': [
        'Авокадо',
        ':avocado:',
        ':green:'
    ],
    '🍆': [
        'Пасхальные Яйца',
        ':eggplant:',
        ':aubergine:',
        'Aubergine',
        'Звонок',
        'Фиолетовый овощной',
        ':purple:'
    ],
    '🥔': [
        'Картофель',
        ':potato:',
        'Пекарный Картофель',
        'Картофель Идахо'
    ],
    '🥕': [
        'Морковь',
        ':carrot:',
        ':orange:'
    ],
    '🌽': [
        'Уши кукурузы',
        ':ear_of_corn:',
        'Кукуруза',
        'Кукуруза на кобе',
        'Мейз',
        'Ухо кукурузы'
    ],
    '🌶️': [
        'Горячий перец',
        ':hot_pepper:',
        'Перец Чили',
        'Острая',
        ':red:'
    ],
    '🥒': [
        'Огурцы',
        ':cucumber:',
        'Геркин',
        'Выбирать',
        ':green:'
    ],
    '🥬': [
        'Листовый зеленый',
        ':leafy_green:',
        'Чехол бока',
        'Китайская капуста',
        'Cos Lettuce',
        'Роман Летучая',
        'Листовый зелёный',
        ':green:'
    ],
    '🥦': [
        'Брокколи',
        ':broccoli:',
        ':green:'
    ],
    '🍄': [
        'Гриб',
        ':mushroom:',
        'Гриб',
        'Toadstool'
    ],
    '🥜': [
        'Peanuts',
        ':peanuts:',
        'Орехи',
        ':brown:'
    ],
    '🌰': [
        'Каштан',
        ':chestnut:',
        'Акуруза',
        'Ноту',
        ':brown:'
    ],
    '🍞': [
        'Хлеб',
        ':bread:',
        'Корм хлеба',
        ':brown:'
    ],
    '🥐': [
        'Croissant',
        ':croissant:',
        ':brown:'
    ],
    '🥖': [
        'Багет Хлеб',
        ':baguette_bread:',
        'Французский хлеб',
        'Багет',
        ':brown:'
    ],
    '🥨': [
        'Pretzel',
        ':pretzel:',
        ':brown:'
    ],
    '🥯': [
        'Багель',
        ':bagel:',
        ':brown:'
    ],
    '🥞': [
        'Пансионаты',
        ':pancakes:',
        'Крепес',
        'Горячие торты',
        ':yellow:'
    ],
    '🧀': [
        'Сыр - Скос',
        ':cheese_wedge:',
        'Сыр',
        ':yellow:'
    ],
    '🍖': [
        'Кость мяса',
        ':meat_on_bone:',
        'Шашлыки',
        'Барбекю',
        'Мясо манги',
        ':red:'
    ],
    '🍗': [
        'Poultry Leg',
        ':poultry_leg:',
        'Барабан',
        'Нога Индейки',
        ':red:'
    ],
    '🥩': [
        'Вырезать мясо',
        ':cut_of_meat:',
        'Мясо',
        'Стейк',
        ':red:'
    ],
    '🥓': [
        'Бекон',
        ':bacon:',
        'Rashers',
        ':red:'
    ],
    '🍔': [
        'Гамбургер',
        ':hamburger:',
        'Бургер',
        'Чесебургер'
    ],
    '🍟': [
        'Французские Фри',
        ':french_fries:',
        'Фишки',
        'Фри',
        'Фри МакДональдс',
        ':yellow:'
    ],
    '🍕': [
        'Пицца',
        ':pizza:',
        'Пицца Пепперони',
        'Кусочек пиццы',
        ':red:'
    ],
    '🌭': [
        'Горячая собака',
        ':hot_dog:',
        'Хотдог',
        'Комбинация',
        ':red:'
    ],
    '🥪': [
        'Сэндвич',
        ':sandwich:'
    ],
    '🌮': [
        'Тако',
        ':taco:'
    ],
    '🌯': [
        'Burrito',
        ':burrito:',
        'Перенос'
    ],
    '🥙': [
        'Фаршированный плоский хлеб',
        ':stuffed_flatbread:',
        'Doner Kebab',
        'Gyro',
        'Шахфуя',
        'Пита Сэндвич'
    ],
    '🍳': [
        'Кулинария',
        ':cooking:',
        'Завтрак',
        'Жареное Яйцо',
        'Жаркий Пан'
    ],
    '🥘': [
        'Мелкий Пан еды',
        ':shallow_pan_of_food:',
        'Paella',
        'Пан еды'
    ],
    '🍲': [
        'Горшок с едой',
        ':pot_of_food:',
        'Боул еды',
        'Суп',
        'Рагу'
    ],
    '🥣': [
        'Боул со Spoon',
        ':bowl_with_spoon:',
        'Зерновой Боул'
    ],
    '🥗': [
        'Зелёный салат',
        ':green_salad:',
        'Салат',
        ':green:'
    ],
    '🍿': [
        'Попкорн',
        ':popcorn:',
        'Вспышка кукурузы'
    ],
    '🧂': [
        'Соль',
        ':salt:',
        'Соль Шейкер',
        ':white:'
    ],
    '🥫': [
        'Консервированная еда',
        ':canned_food:',
        'Канал из еды',
        'Танжкан',
        'Тонкая еда'
    ],
    '🍱': [
        'Бенто-коробка',
        ':bento_box:',
        'обеденный ящик'
    ],
    '🍘': [
        'Роз-крекер',
        ':rice_cracker:',
        'Трекер'
    ],
    '🍙': [
        'Рисовый мячик',
        ':rice_ball:',
        'Onigiri'
    ],
    '🍚': [
        'Жареный рис',
        ':cooked_rice:',
        'Вареный рис',
        'Рис',
        'Боул риса',
        'Паровой рис'
    ],
    '🍛': [
        'Рис карри',
        ':curry_rice:',
        'Карри',
        'Индийская еда',
        'Карри и Рис'
    ],
    '🍜': [
        'Паровой Боул',
        ':steaming_bowl:',
        'Опросы',
        'Надписи со спайками',
        'Рамен'
    ],
    '🍝': [
        'Spaghetti',
        ':spaghetti:',
        'Паста'
    ],
    '🍠': [
        'Жареный сладкий картофель',
        ':roasted_sweet_potato:',
        'Сладкий картофель',
        'Ям'
    ],
    '🍢': [
        'Оден',
        ':oden:',
        'Kebab',
        'Склейвер'
    ],
    '🍣': [
        'Суши',
        ':sushi:',
        'Sashimi',
        'Морепродукты',
        ':pink:'
    ],
    '🍤': [
        'Жареная креветка',
        ':fried_shrimp:',
        'Жареная правда',
        'Креветка Темпура'
    ],
    '🍥': [
        'Торт рыбы с вихрем',
        ':fish_cake_with_swirl:',
        'Рыбный пирог',
        'Pink Swirl'
    ],
    '🥮': [
        'Лунный Торт',
        ':moon_cake:',
        'Лунный торт'
    ],
    '🍡': [
        'Dango',
        ':dango:',
        'Десерт палка',
        'Розовые зеленые шары'
    ],
    '🥟': [
        'Пельмени',
        ':dumpling:',
        'Empanada',
        'Pierogi'
    ],
    '🥠': [
        'Печенье Удачи',
        ':fortune_cookie:'
    ],
    '🥡': [
        'Коробка с вылетом',
        ':takeout_box:',
        'Китайский ящик еды',
        'Oyster Pail'
    ],
    '🍦': [
        'Мягкое мороженое',
        ':soft_ice_cream:',
        'Г-н Whippy',
        'Мягкий сервер'
    ],
    '🍧': [
        'Шайный лёд',
        ':shaved_ice:',
        'Снежный конус'
    ],
    '🍨': [
        'Мороженое',
        ':ice_cream:',
        'Мороженое',
        'Десерт'
    ],
    '🍩': [
        'Ореховый',
        ':doughnut:',
        'Donut'
    ],
    '🍪': [
        'Печенье',
        ':cookie:',
        'Бисквит',
        'Шоколадная печенька',
        ':brown:'
    ],
    '🎂': [
        'Торт на день рождения',
        ':birthday_cake:',
        'День рождения',
        'Торт',
        'Торт с свечами'
    ],
    '🍰': [
        'Шорткет',
        ':shortcake:',
        'Торт',
        'Пирог',
        'Клубничный шорткет'
    ],
    '🧁': [
        'Кекс',
        ':cupcake:',
        'Фестивальный торт'
    ],
    '🥧': [
        'Пирог',
        ':pie:'
    ],
    '🍫': [
        'Шоколадная панель',
        ':chocolate_bar:',
        'Конфетный Бар',
        'Шоколад',
        ':brown:'
    ],
    '🍬': [
        'Конфеты',
        ':candy:',
        'Светлое',
        'Сладкий'
    ],
    '🍭': [
        'Ледяная попа',
        ':lollipop:',
        'Сукера'
    ],
    '🍮': [
        'Кустарник',
        ':custard:',
        'Creme Caramel',
        'Десерт',
        'Флан',
        'Пудинг'
    ],
    '🍯': [
        'Медовый горшок',
        ':honey_pot:',
        'Мед',
        'Горшок',
        ':yellow:'
    ],
    '🍼': [
        'Детская бутылка',
        ':baby_bottle:',
        'Бутылка корма'
    ],
    '🥛': [
        'Стекло молока',
        ':glass_of_milk:',
        'Молоко',
        ':white:'
    ],
    '☕': [
        'Горячие напитки',
        ':hot_beverage:',
        'Кофе',
        'Espresso',
        'Горячий шоколад',
        'Чай'
    ],
    '🍵': [
        'Teacup без ручки',
        ':green_tea:',
        'Зелёный Чай',
        'Matcha',
        'Мача Зелёный Чай',
        ':green:'
    ],
    '🍶': [
        'Sake',
        ':sake:',
        'Бутылка',
        'Рисовое вино',
        'Бутылка и Кубок'
    ],
    '🍾': [
        'Бутылка с всплывающей пробкой',
        ':champagne:',
        'Праздник',
        'Champagne',
        'Искрящее вино'
    ],
    '🍷': [
        'Виностекло',
        ':wine_glass:',
        'Алкоголь',
        'Красное вино',
        'Вино'
    ],
    '🍸': [
        'Коктейль',
        ':cocktail_glass:',
        'Коктейль',
        'Мартини'
    ],
    '🍹': [
        'Тропический напиток',
        ':tropical_drink:',
        'Фруктовый удар',
        'Тики'
    ],
    '🍺': [
        'Пивная Кружка',
        ':beer_mug:',
        'Пиво',
        'Улей пива',
        ':yellow:'
    ],
    '🍻': [
        'Наполняющие кружки пива',
        ':clinking_beer_mugs:',
        'Пиво',
        'Ветеры'
    ],
    '🥂': [
        'Наклонные очки',
        ':clinking_glasses:',
        'Праздник',
        'Шампанские очки',
        'Ветеры'
    ],
    '🥃': [
        'Стекло Обмотки',
        ':tumbler_glass:',
        'Бурбон',
        'Ликор',
        'Rum',
        'Виски',
        'Whisky'
    ],
    '🥤': [
        'Кубок с соломой',
        ':cup_with_straw:',
        'Молочный коктейль',
        'Смягчение',
        'Сода Поп',
        'Мягкий напиток'
    ],
    '🥢': [
        'Палочки',
        ':chopsticks:'
    ],
    '🍽️': [
        'Форк и нож с тарелкой',
        ':fork_and_knife_with_plate:',
        'Обед',
        ':white:',
        ':gray:',
        ':grey:'
    ],
    '🍴': [
        'Форк и нож',
        ':fork_and_knife:',
        'Выемка',
        'Нож и Форк',
        'Серебро',
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
        'Чеснок',
        ':garlic:'
    ],
    '🧅': [
        'Лук',
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
        'Масло',
        ':butter:'
    ],
    '🦪': [
        'Устрица',
        ':oyster:'
    ],
    '🧃': [
        'Коробка Напиток',
        ':beverage_box:',
        'Сочный ящик'
    ],
    '🧉': [
        'Маленький напиток',
        ':mate_drink:',
        'Чимаррахо',
        'Cimarrón',
        'Yerba Mate'
    ],
    '🫒': [
        'Олив',
        ':olive:',
        ':green:'
    ],
    '🫐': [
        'Черничная ягода',
        ':blueberries:',
        ':blue:'
    ],
    '🫑': [
        'Рассада колокольни',
        ':bell_pepper:',
        ':green:'
    ],
    '🫓': [
        'Плоский хлеб',
        ':flatbread:'
    ],
    '🫔': [
        'Тамале',
        ':tamale:',
        'Тамаль'
    ],
    '🫕': [
        'Fondue',
        ':fondue:'
    ],
    '🧋': [
        'Чай пузырьков',
        ':boba:',
        'Boba'
    ],
    '🧊': [
        'Куб льда',
        ':ice_cube:'
    ],
    '🫘': [
        'Beans',
        'Flatulence',
        ':beans:',
        'Кофейные бобы',
        'Spill the beans'
    ],
    '🫗': [
        'Насыпающий Жидкий',
        ':puring_liquid:',
        'Насыщенный напиток',
        'Вода'
    ]
};
/*flags*/
emojis_language[lang][7] = {
    '🏁': [
        'Чекообразный флаг',
        ':chequered_flag:',
        'Проверить флаг',
        'Сетка Девочки',
        'Гоночный Флаг',
        ':black:',
        ':white:'
    ],
    '🚩': [
        'Треугольный флаг',
        ':triangular_flag:',
        'Флаг полюса',
        'Красный флаг',
        'Треугольный флаг на пост',
        ':red:'
    ],
    '🎌': [
        'Скрещенные флаги',
        ':crossed_flags:',
        'Два флага'
    ],
    '🏴': [
        'Черный флаг',
        ':black_flag:',
        'Волнование чёрного флага',
        ':black:'
    ],
    '🏳️': [
        'Белый флаг',
        ':white_flag:',
        'Волнование белого флага',
        ':white:'
    ],
    '🏳️‍🌈': [
        'Флаг Радуги',
        ':rainbow_flag:',
        'Pride Flag',
        'ЛГБТ',
        'LGBTQIA+',
        'Гей',
        'Транспол',
        'Lesbian',
        'Асексуал',
        'Queer'
    ],
    '🏳️‍⚧️': [
        'Флаг Транспола',
        ':transgender_flag:',
        'Синий, розовый и белый флаг',
        'Транс флаг'
    ],
    '🏴‍☠️': [
        'Пиратский флаг',
        ':pirate_flag:',
        'Веселый Роджер',
        ':black:'
    ],
    '🇺🇳': [
        'Флаг Организации Объединенных Наций',
        ':un:',
        'Флаг: Организация Объединенных Наций'
    ],
    '🇪🇺': [
        'Флаг Европейского союза',
        ':eu:',
        'Флаг: Европейский союз',
        'EU Flag'
    ],
    '🇦🇨': [
        'Флаг Острова Вознесения',
        ':ac:'
    ],
    '🇦🇩': [
        'Флаг Андорры',
        ':ad:',
        'Andorran Flag'
    ],
    '🇦🇪': [
        'Флаг Объединенных Арабских Эмиратов',
        ':ae:',
        'Emirati Flag',
        'Флаг ОАЭ'
    ],
    '🇦🇫': [
        'Флаг Афганистана',
        ':af:',
        'Afghan Flag'
    ],
    '🇦🇬': [
        'Флаг Антигуа и Барбуды',
        ':ag:'
    ],
    '🇦🇮': [
        'Флаг Ангильи',
        ':ai:',
        'Флаг Ангильи'
    ],
    '🇦🇱': [
        'Флаг Албании',
        ':al:',
        'Флаг Албании'
    ],
    '🇦🇲': [
        'Флаг Армении',
        ':am:',
        'Флаг Армении'
    ],
    '🇦🇴': [
        'Флаг Анголы',
        ':ao:',
        'Ангольский флаг'
    ],
    '🇦🇶': [
        'Флаг Антарктиды',
        ':aq:',
        'Флаг Антарктики'
    ],
    '🇦🇷': [
        'Флаг Аргентины',
        ':ar:',
        'Аргентинский флаг'
    ],
    '🇦🇸': [
        'Флаг Американского Самоа',
        ':as:',
        'American Samoan Flag'
    ],
    '🇦🇹': [
        'Флаг Австрии',
        ':at:',
        'Austrian Flag'
    ],
    '🇦🇺': [
        'Флаг Австралии',
        ':au:',
        'Aussie флаг',
        'Австралийский флаг'
    ],
    '🇦🇼': [
        'Флаг Арубы',
        ':aw:',
        'Флаг Арубы'
    ],
    '🇦🇽': [
        'Флаг А<unk> лендских островов',
        ':ax:',
        'Флаг земли'
    ],
    '🇦🇿': [
        'Флаг Азербайджана',
        ':az:',
        'Азербайджанский флаг'
    ],
    '🇧🇦': [
        'Флаг Боснии и Герцеговины',
        ':ba:'
    ],
    '🇧🇧': [
        'Флаг Барбадоса',
        ':bb:',
        'Барбадосский флаг',
        'Флаг Байяна'
    ],
    '🇧🇩': [
        'Флаг Бангладеш',
        ':bd:',
        'Bangladeshi Flag'
    ],
    '🇧🇪': [
        'Флаг Бельгии',
        ':be:',
        'Флаг Бельгии'
    ],
    '🇧🇫': [
        'Флаг Буркина-Фасо',
        ':bf:',
        'Флаг Буркина-Фасо'
    ],
    '🇧🇬': [
        'Флаг Болгарии',
        ':bg:',
        'Болгарский флаг'
    ],
    '🇧🇭': [
        'Флаг Бахрейна',
        ':bh:',
        'Флаг Барани',
        'Флаг Бахрейна'
    ],
    '🇧🇮': [
        'Флаг Бурунди',
        ':bi:',
        'Burundian Flag'
    ],
    '🇧🇯': [
        'Флаг Бенина',
        ':bj:',
        'Бенинский флаг'
    ],
    '🇧🇱': [
        'Флаг Сен-Барте́леми',
        ':bl:',
        'Флаг: St. Barthélemy'
    ],
    '🇧🇲': [
        'Флаг Бермудских островов',
        ':bm:',
        'Bermudan Flag'
    ],
    '🇧🇳': [
        'Флаг Брунея',
        ':bn:',
        'Флаг Брунея'
    ],
    '🇧🇴': [
        'Флаг Боливии',
        ':bo:',
        'Bolivian Flag'
    ],
    '🇧🇶': [
        'Флаг Нидерландов Карибского бассейна',
        ':bq:',
        'Bonaire'
    ],
    '🇧🇷': [
        'Флаг Бразилии',
        ':br:',
        'Флаг Бразилии'
    ],
    '🇧🇸': [
        'Флаг Багамских Островов',
        ':bs:',
        'Флаг Багамских островов'
    ],
    '🇧🇹': [
        'Флаг Бутана',
        ':bt:',
        'Флаг Бутана'
    ],
    '🇧🇻': [
        'Флаг острова Буве',
        ':bv:',
        'Флаг: Остров Буве'
    ],
    '🇧🇼': [
        'Флаг Ботсваны',
        ':bw:',
        'Batswana Flag'
    ],
    '🇧🇾': [
        'Флаг Беларуси',
        ':by:',
        'Белорусский флаг'
    ],
    '🇧🇿': [
        'Флаг Белиза',
        ':bz:',
        'Белизский флаг'
    ],
    '🇨🇦': [
        'Флаг Канады',
        'Канадский флаг',
        ':ca:'
    ],
    '🇨🇨': [
        'Флаг Кокосовых Островов (Килинг)',
        ':cc:'
    ],
    '🇨🇩': [
        'Flag of Congo - Kinshasa',
        ':cd:'
    ],
    '🇨🇫': [
        'Флаг Центральноафриканской Республики',
        ':cf:',
        'Центральноафриканский флаг'
    ],
    '🇨🇬': [
        'Флаг Конго - Браззавиль',
        ':cg:'
    ],
    '🇨🇭': [
        'Флаг Швейцарии',
        ':ch:',
        'Красный Крест',
        'Флаг Швейцарии'
    ],
    '🇨🇮': [
        'Флаг Кот-д\'Ивуара',
        ':ci:',
        'Flag: Côte d’Ivoire'
    ],
    '🇨🇰': [
        'Флаг Кука',
        ':ck:',
        'Флаг Острова Кука'
    ],
    '🇨🇱': [
        'Флаг Чили',
        ':cl:',
        'Чилийский флаг'
    ],
    '🇨🇲': [
        'Флаг Камеруна',
        ':cm:',
        'Камерунский флаг'
    ],
    '🇨🇳': [
        'Флаг Китая',
        ':cn:',
        'Китайский флаг'
    ],
    '🇨🇴': [
        'Флаг Колумбии',
        ':co:',
        'Колумбийский флаг'
    ],
    '🇨🇵': [
        'Флаг острова Клиппертон',
        ':cp:',
        'Флаг: Остров Клиппертон'
    ],
    '🇨🇷': [
        'Флаг Коста-Рики',
        ':cr:',
        'Флаг Коста-Рики'
    ],
    '🇨🇺': [
        'Флаг Кубы',
        ':cu:',
        'Флаг Кубы'
    ],
    '🇨🇻': [
        'Флаг Кабо-Верде',
        ':cv:',
        'Флаг Кабо-Верде'
    ],
    '🇨🇼': [
        'Флаг Кюрасао',
        ':cw:',
        'Curaçaoan Flag'
    ],
    '🇨🇽': [
        'Флаг острова Рождество',
        ':cx:',
        'Флаг Острова Рождества'
    ],
    '🇨🇾': [
        'Флаг Кипра',
        ':cy:',
        'Флаг Кипраоты'
    ],
    '🇨🇿': [
        'Флаг Чехии',
        ':cz:',
        'Чешский флаг'
    ],
    '🇩🇪': [
        'Флаг Германии',
        ':de:',
        'Флаг Неокрепшего',
        'Флаг Немецкого'
    ],
    '🇩🇬': [
        'Флаг Диего Гарсия',
        ':dg:',
        'Флаг: Диего Гарсия'
    ],
    '🇩🇯': [
        'Флаг Джибути',
        ':dj:',
        'Djibouti Flag',
        'Djiboutian Flag'
    ],
    '🇩🇰': [
        'Флаг Дании',
        ':dk:',
        'Датский флаг'
    ],
    '🇩🇲': [
        'Флаг Доминики',
        ':dm:'
    ],
    '🇩🇴': [
        'Флаг Доминиканской Республики',
        ':do:',
        'Флаг Dom Rep',
        'Флаг Доминиканской Республики'
    ],
    '🇩🇿': [
        'Флаг Алжира',
        ':dz:',
        'Algerian Flag'
    ],
    '🇪🇦': [
        'Флаг Цеуты и Мелилья',
        ':ea:',
        'Флаг Мелилья',
        'Флаг Сеуты',
        'Flag: Ceuta & Melilla'
    ],
    '🇪🇨': [
        'Флаг Эквадора',
        ':ec:',
        'Ecuadorian Flag'
    ],
    '🇪🇪': [
        'Флаг Эстонии',
        ':ee:',
        'Эстонский флаг'
    ],
    '🇪🇬': [
        'Флаг Египта',
        ':eg:',
        'Египетский флаг'
    ],
    '🇪🇭': [
        'Флаг Западной Сахары',
        ':eh:',
        'Флаг Западной Сахары'
    ],
    '🇪🇷': [
        'Флаг Эритреи',
        ':er:',
        'Eritrean Flag'
    ],
    '🇪🇹': [
        'Флаг Эфиопии',
        ':et:',
        'Ethiopian Flag'
    ],
    '🇪🇸': [
        'Флаг Испании',
        ':es:',
        'Флаг Испанского'
    ],
    '🇫🇮': [
        'Флаг Финляндии',
        ':fi:',
        'Финский флаг'
    ],
    '🇫🇯': [
        'Флаг Фиджи',
        ':fj:',
        'Fijian Flag'
    ],
    '🇫🇰': [
        'Флаг Фолклендских островов',
        ':fk:',
        'Флаг Фолклендера'
    ],
    '🇫🇲': [
        'Флаг Микронезии',
        ':fm:',
        'Флаг Микронезии'
    ],
    '🇫🇴': [
        'Флаг Фарерских островов',
        ':fo:',
        'Faroe Islander Flag'
    ],
    '🇫🇷': [
        'Флаг Франции',
        ':fr:',
        'Флаг Франции'
    ],
    '🇬🇦': [
        'Флаг Габона',
        ':ga:',
        'Флаг Габона'
    ],
    '🇬🇧': [
        'Флаг Великобритании',
        ':gb:',
        'Флаг Великобритании',
        'Соединенное Королевство',
        'Джек-Юнион',
        'Англия'
    ],
    '🏴󠁧󠁢󠁥󠁮󠁧󠁿󠁧󠁢󠁥󠁮󠁧󠁿': [
        'Флаг Англии',
        ':england:',
        'Святой Жорж Крест',
        'Английский флаг'
    ],
    '🏴󠁧󠁢󠁷󠁬󠁳󠁿󠁧󠁢󠁷󠁬󠁳󠁿': [
        'Флаг Уэльса',
        ':wales:',
        'Флаг Уэльса',
        'Красный Дракон',
        'Baner Cymru',
        'Y Ddraig Goch'
    ],
    '🏴󠁧󠁢󠁳󠁣󠁴󠁿󠁧󠁢󠁳󠁣󠁴󠁿': [
        'Флаг Шотландии',
        ':scotland:',
        'Шотландский флаг',
        'Андреевский Крест',
        'Соленое'
    ],
    '🇬🇩': [
        'Флаг Гренады',
        ':gd:',
        'Флаг Гренадины'
    ],
    '🇬🇪': [
        'Флаг Грузии',
        ':ge:',
        'Флаг Грузии'
    ],
    '🇬🇫': [
        'Флаг Французской Гвианы',
        ':gf:',
        'Флаг Французской Гвинеи'
    ],
    '🇬🇬': [
        'Флаг Гернси',
        ':gg:',
        'Guernsey Flag'
    ],
    '🇬🇭': [
        'Флаг Ганы',
        ':gh:',
        'Флаг Ганы'
    ],
    '🇬🇮': [
        'Флаг Гибралтара',
        ':gi:',
        'Флаг Гибралтара'
    ],
    '🇬🇱': [
        'Флаг Гренландии',
        ':gl:',
        'Greenlandic Flag'
    ],
    '🇬🇲': [
        'Флаг Гамбии',
        ':gm:',
        'Gambian Flag'
    ],
    '🇬🇳': [
        'Флаг Гвинеи',
        ':gn:',
        'Guinean Flag'
    ],
    '🇬🇵': [
        'Флаг Гваделупы',
        ':gp:',
        'Гваделупеный флаг'
    ],
    '🇬🇶': [
        'Флаг Экваториальной Гвинеи',
        ':gq:',
        'Equatorial Guinean Flag',
        'Экватогиненезиновый флаг'
    ],
    '🇬🇷': [
        'Флаг Греции',
        ':gr:',
        'Греческий флаг'
    ],
    '🇬🇸': [
        'Флаг Южной Георгии и Южных Сандвичевых островов',
        ':gs:'
    ],
    '🇬🇹': [
        'Флаг Гватемалы',
        ':gt:',
        'Guatemalan Flag'
    ],
    '🇬🇺': [
        'Флаг Гуама',
        ':gu:',
        'Гуаманский флаг',
        'Флаг Чаморро'
    ],
    '🇬🇼': [
        'Флаг Гвинеи-Бисау',
        ':gw:',
        'Guinea-Bissau Flag'
    ],
    '🇬🇾': [
        'Флаг Гайаны',
        ':gy:',
        'Гайанский флаг'
    ],
    '🇭🇰': [
        'Флаг САР Гонконг Китай',
        ':hk:',
        'Флаг Гонконга'
    ],
    '🇭🇲': [
        'Флаг Херда и Макдональд',
        ':hm:',
        'Флаг: Острова Херд и Макдональд'
    ],
    '🇭🇳': [
        'Флаг Гондураса',
        ':hn:',
        'Гондурасский флаг'
    ],
    '🇭🇷': [
        'Флаг Хорватии',
        ':hr:',
        'Флаг Хорватии'
    ],
    '🇭🇹': [
        'Флаг Гаити',
        ':ht:',
        'Haitian Flag'
    ],
    '🇭🇺': [
        'Флаг Венгрии',
        ':hu:',
        'Флаг Венгрии'
    ],
    '🇮🇨': [
        'Флаг Канарских островов',
        ':ic:'
    ],
    '🇮🇩': [
        'Флаг Индонезии',
        ':id:',
        'Флаг Индонезии'
    ],
    '🇮🇪': [
        'Флаг Ирландии',
        ':ie:',
        'Ирландский флаг'
    ],
    '🇮🇱': [
        'Флаг Израиля',
        ':il:',
        'Израильский флаг'
    ],
    '🇮🇲': [
        'Флаг острова Мэн',
        ':im:',
        'Manx Flag'
    ],
    '🇮🇳': [
        'Флаг Индии',
        ':in:',
        'Индийский флаг'
    ],
    '🇮🇴': [
        'Флаг Британской территории в Индийском океане',
        ':io:',
        'Флаг Британской Территории Индийского океана'
    ],
    '🇮🇶': [
        'Флаг Ирака',
        ':iq:',
        'Iraqi Flag'
    ],
    '🇮🇷': [
        'Флаг Ирана',
        ':ir:',
        'Иранский флаг'
    ],
    '🇮🇸': [
        'Флаг Исландии',
        ':is:',
        'Исландский флаг'
    ],
    '🇮🇹': [
        'Флаг Италии',
        ':it:',
        'Флаг Итальянского'
    ],
    '🇯🇪': [
        'Флаг Джерси',
        ':je:',
        'Флаг Джерси'
    ],
    '🇯🇲': [
        'Флаг Ямайки',
        ':jm:',
        'Ямайский флаг'
    ],
    '🇯🇴': [
        'Флаг Иордании',
        ':jo:',
        'Флаг Иордании'
    ],
    '🇯🇵': [
        'Флаг Японии',
        ':jp:',
        'Японский флаг'
    ],
    '🇰🇪': [
        'Флаг Кении',
        ':ke:',
        'Кенийский флаг'
    ],
    '🇰🇬': [
        'Флаг Кыргызстана',
        ':kg:',
        'Kyrgyzstani Flag'
    ],
    '🇰🇭': [
        'Флаг Камбоджи',
        ':kh:',
        'Камбоджийский флаг'
    ],
    '🇰🇮': [
        'Флаг Кирибати',
        ':ki:',
        'Флаг I-Кирибати'
    ],
    '🇰🇲': [
        'Флаг Коморских Островов',
        ':km:',
        'Флаг Комора'
    ],
    '🇰🇳': [
        'Флаг Сент-Китс и Невис',
        ':kn:'
    ],
    '🇰🇵': [
        'Флаг Северной Кореи',
        ':kp:',
        'Флаг Северной Кореи'
    ],
    '🇰🇷': [
        'Флаг Южной Кореи',
        ':kr:',
        'Флаг Южнокорейского'
    ],
    '🇰🇼': [
        'Флаг Кувейта',
        ':kw:',
        'Kuwaiti Flag'
    ],
    '🇰🇾': [
        'Флаг Каймановых островов',
        ':ky:',
        'Флаг Кайманян'
    ],
    '🇰🇿': [
        'Флаг Казахстана',
        ':kz:',
        'Kazakhstani Flag',
        'Kazakh Flag'
    ],
    '🇱🇦': [
        'Флаг Лаоса',
        ':la:',
        'Лаосский флаг',
        'Лаосский флаг'
    ],
    '🇱🇧': [
        'Флаг Ливана',
        ':lb:',
        'Ливанский флаг'
    ],
    '🇱🇨': [
        'Флаг Сент-Люсии',
        ':lc:'
    ],
    '🇱🇮': [
        'Флаг Лихтенштейна',
        ':lt:',
        'Флаг Лихтенштейна'
    ],
    '🇱🇰': [
        'Флаг Шри-Ланки',
        ':lk:',
        'Флаг Шри-Ланки'
    ],
    '🇱🇷': [
        'Флаг Либерии',
        ':lr:',
        'Флаг Либерии'
    ],
    '🇱🇸': [
        'Flag of Lesotho',
        ':ls:',
        'Basotho Flag'
    ],
    '🇱🇹': [
        'Флаг Литвы',
        ':lt:',
        'Флаг Литвы'
    ],
    '🇱🇺': [
        'Флаг Люксембурга',
        ':lu:',
        'Люксембургский флаг'
    ],
    '🇱🇻': [
        'Флаг Латвии',
        ':lv:',
        'Латышский флаг'
    ],
    '🇱🇾': [
        'Флаг Ливии',
        ':ly:',
        'Флаг Ливии'
    ],
    '🇲🇦': [
        'Флаг Марокко',
        ':ma:',
        'Марокканский флаг'
    ],
    '🇲🇨': [
        'Флаг Монако',
        ':mc:',
        'Флаг Monégasque'
    ],
    '🇲🇩': [
        'Флаг Молдовы',
        ':md:',
        'Молдавский флаг'
    ],
    '🇲🇪': [
        'Флаг Черногории',
        ':me:',
        'Флаг Черногории'
    ],
    '🇲🇫': [
        'Флаг Сен-Мартена',
        ':mf:',
        'Flag: St. Martin'
    ],
    '🇲🇬': [
        'Флаг Мадагаскара',
        ':mg:',
        'Madagascan Flag'
    ],
    '🇲🇭': [
        'Флаг Маршалловых Островов',
        ':mh:',
        'Флаг Маршалли'
    ],
    '🇲🇰': [
        'Флаг Македонии',
        ':mk:',
        'Македонский флаг'
    ],
    '🇲🇱': [
        'Флаг Мали',
        ':ml:',
        'Флаг Мали'
    ],
    '🇲🇲': [
        'Флаг Мьянмы (Бирма)',
        ':mm:',
        'Флаг Мьянмы',
        'Флаг для Бирмы',
        'Бирманский флаг'
    ],
    '🇲🇳': [
        'Флаг Монголии',
        ':mn:',
        'Монгольский флаг'
    ],
    '🇲🇴': [
        'Флаг Макауса-Сар Китай',
        ':mo:',
        'Флаг Макаанца'
    ],
    '🇲🇵': [
        'Флаг Северных Марианских островов',
        ':mp:',
        'Флаг Микронезии'
    ],
    '🇲🇶': [
        'Флаг Мартиника',
        ':mq:',
        'Флаг змеи Мартиники',
        'Мартиникейский флаг'
    ],
    '🇲🇷': [
        'Флаг Мавритании',
        ':mr:',
        'Флаг Мавритании'
    ],
    '🇲🇸': [
        'Flag of Montserrat',
        ':ms:',
        'Montserratian Flag'
    ],
    '🇲🇹': [
        'Флаг Мальты',
        ':mt:',
        'Maltese Flag'
    ],
    '🇲🇺': [
        'Flag of Mauritius',
        ':mu:',
        'Флаг Маврикия'
    ],
    '🇲🇻': [
        'Флаг Мальдивских островов',
        ':mv:',
        'Мальдивский флаг'
    ],
    '🇲🇼': [
        'Флаг Малави',
        ':mw:',
        'Malawian Flag'
    ],
    '🇲🇽': [
        'Флаг Мексики',
        ':mx:',
        'Мексиканский флаг'
    ],
    '🇲🇾': [
        'Флаг Малайзии',
        ':my:',
        'Malaysian Flag'
    ],
    '🇲🇿': [
        'Флаг Мозамбика',
        ':mz:',
        'Мозамбикский флаг'
    ],
    '🇳🇦': [
        'Флаг Намибии',
        ':na:',
        'Namibian Flag'
    ],
    '🇳🇨': [
        'Флаг Новой Каледонии',
        ':nc:',
        'Флаг Новой Каледонии'
    ],
    '🇳🇪': [
        'Флаг Нигера',
        ':ne:',
        'Нигерийский флаг'
    ],
    '🇳🇫': [
        'Флаг острова Норфолк',
        ':nf:',
        'Флаг Острова Норфолк'
    ],
    '🇳🇬': [
        'Флаг Нигерии',
        ':ng:',
        'Флаг Нигерии'
    ],
    '🇳🇮': [
        'Flag of Nicaragua',
        ':ni:',
        'Nicaraguan Flag'
    ],
    '🇳🇱': [
        'Флаг Нидерландов',
        ':nl:',
        'Голландский флаг',
        'Голландия'
    ],
    '🇳🇴': [
        'Флаг Норвегии',
        ':no:',
        'Флаг Норвегии'
    ],
    '🇳🇵': [
        'Флаг Непала',
        ':np:',
        'Непальский флаг'
    ],
    '🇳🇷': [
        'Флаг Науру',
        ':nr:',
        'Nauruan Flag'
    ],
    '🇳🇺': [
        'Флаг Ниуэ',
        ':nu:',
        'Niuean Flag'
    ],
    '🇳🇿': [
        'Флаг Новой Зеландии',
        ':nz:',
        'Флаг Киви'
    ],
    '🇴🇲': [
        'Флаг Омана',
        ':om:',
        'Флаг Омани'
    ],
    '🇵🇦': [
        'Флаг Панамы',
        ':pa:',
        'Панамский флаг'
    ],
    '🇵🇪': [
        'Флаг Перу',
        ':pe:',
        'Перуанский флаг'
    ],
    '🇵🇫': [
        'Флаг Французской Полинезии',
        ':pf:',
        'Флаг Французского Полинезийского'
    ],
    '🇵🇬': [
        'Флаг Папуа— Новой Гвинеи',
        ':pg:',
        'Флаг PNG',
        'Papua New Guinean Flag'
    ],
    '🇵🇭': [
        'Флаг Филиппин',
        ':ph:'
    ],
    '🇵🇰': [
        'Флаг Пакистана',
        ':pk:',
        'Пакистанский флаг'
    ],
    '🇵🇱': [
        'Флаг Польши',
        ':pl:',
        'Флаг Польши'
    ],
    '🇵🇲': [
        'Флаг Сен-Пьер и Микелон',
        ':pm:'
    ],
    '🇵🇳': [
        'Флаг Питкэрна',
        ':pn:'
    ],
    '🇵🇷': [
        'Флаг Пуэрто-Рико',
        ':pr:',
        'Флаг Пуэрто-Рико'
    ],
    '🇵🇸': [
        'Флаг палестинских территорий',
        ':ps:',
        'Palestine'
    ],
    '🇵🇹': [
        'Флаг Португалии',
        ':pt:',
        'Флаг Португалии'
    ],
    '🇵🇼': [
        'Флаг Палау',
        ':pw:',
        'Флаг Палауана'
    ],
    '🇵🇾': [
        'Флаг Парагвая',
        ':py:',
        'Paraguayan Flag'
    ],
    '🇶🇦': [
        'Флаг Катара',
        ':qa:',
        'Флаг Катара'
    ],
    '🇷🇪': [
        'Флаг Ре́юньона',
        ':re:',
        'Флаг Réunionnais'
    ],
    '🇷🇴': [
        'Флаг Румынии',
        ':ro:',
        'Флаг Румынии'
    ],
    '🇷🇸': [
        'Флаг Сербии',
        ':rs:',
        'Сербский флаг'
    ],
    '🇷🇺': [
        'Флаг России',
        ':ru:',
        'Российский флаг'
    ],
    '🇷🇼': [
        'Flag of Rwanda',
        ':rw:',
        'Rwandan Flag'
    ],
    '🇸🇦': [
        'Флаг Саудовской Аравии',
        ':sa:',
        'Флаг Саудовской Аравии'
    ],
    '🇸🇧': [
        'Флаг Соломоновых Островов',
        ':sb:',
        'Флаг Соломоновых Островов'
    ],
    '🇸🇨': [
        'Флаг Сейшельских Островов',
        ':sc:',
        'Seychellois Flag'
    ],
    '🇸🇩': [
        'Флаг Судана',
        ':sd:',
        'Sudanese Flag'
    ],
    '🇸🇪': [
        'Флаг Швеции',
        ':se:',
        'Шведский флаг'
    ],
    '🇸🇬': [
        'Флаг Сингапура',
        ':sg:',
        'Флаг Сингапура'
    ],
    '🇸🇭': [
        'Флаг острова Святой Елены',
        ':sh:'
    ],
    '🇸🇮': [
        'Флаг Словении',
        ':si:',
        'Флаг Словении'
    ],
    '🇸🇯': [
        'Флаг Шпицбергена и Яна Майена',
        ':sj:'
    ],
    '🇸🇰': [
        'Флаг Словакии',
        ':sk:',
        'Словацкий флаг',
        'Slovakian Flag'
    ],
    '🇸🇱': [
        'Флаг Сьерра-Леоне',
        ':sl:',
        'Sierra Leonean Flag'
    ],
    '🇸🇲': [
        'Флаг Сан-Марино',
        ':sm:',
        'Флаг Sammarinese'
    ],
    '🇸🇳': [
        'Флаг Сенегала',
        ':sn:',
        'Флаг Сенгальского'
    ],
    '🇸🇴': [
        'Флаг Сомали',
        ':so:',
        'Somalian Flag'
    ],
    '🇸🇷': [
        'Флаг Суринама',
        ':sr:',
        'Флаг Суринамера'
    ],
    '🇸🇸': [
        'Флаг Южного Судана',
        ':ss:',
        'Флаг Южной Судана'
    ],
    '🇸🇹': [
        'Флаг Сан-Томе и При́нциле',
        ':st:'
    ],
    '🇸🇻': [
        'Флаг Сальвадора',
        ':sv:',
        'Флаг Сальвадора'
    ],
    '🇸🇽': [
        'Флаг Синт-Мартена',
        ':sx:'
    ],
    '🇸🇾': [
        'Флаг Сирии',
        ':sy:',
        'Сирийский флаг'
    ],
    '🇸🇿': [
        'Флаг Свазиленда',
        ':sz:',
        'Эсватинский флаг'
    ],
    '🇹🇦': [
        'Flag of Tristan Da Cunha',
        ':ta:'
    ],
    '🇹🇨': [
        'Флаг островов Тёркс и Кайкос',
        ':tc:'
    ],
    '🇹🇩': [
        'Флаг Чада',
        ':td:',
        'Чадский флаг'
    ],
    '🇹🇫': [
        'Флаг французских Южных территорий',
        ':tf:',
        'Флаг Южной Франции'
    ],
    '🇹🇬': [
        'Флаг Того',
        ':tg:',
        'Togolese Flag'
    ],
    '🇹🇭': [
        'Флаг Таиланда',
        ':th:',
        'Тайский флаг'
    ],
    '🇹🇯': [
        'Флаг Таджикистана',
        ':tj:',
        'Флаг таджика'
    ],
    '🇹🇰': [
        'Флаг Токелау',
        ':tk:',
        'Флаг Токелауна'
    ],
    '🇹🇱': [
        'Флаг Тимора-Лешти',
        ':tl:',
        'Флаг Тимора-Лешти',
        'Восточный тиморский флаг'
    ],
    '🇹🇲': [
        'Флаг Туркменистана',
        ':tm:',
        'Turkmen Flag'
    ],
    '🇹🇳': [
        'Флаг Туниса',
        ':tn:',
        'Флаг Туниса'
    ],
    '🇹🇴': [
        'Флаг Тонги',
        ':to:',
        'Tongan Flag'
    ],
    '🇹🇷': [
        'Флаг Турции',
        ':tr:',
        'Флаг Турции'
    ],
    '🇹🇹': [
        'Флаг Тринидада и Тобаго',
        ':tt:'
    ],
    '🇹🇻': [
        'Флаг Тувалу',
        ':tv:',
        'Флаг Тувалан-Тувалан-'
    ],
    '🇹🇼': [
        'Флаг Тайваня',
        ':tw:',
        'Тайваньский флаг'
    ],
    '🇹🇿': [
        'Флаг Танзании',
        ':tz:',
        'Tanzanian Flag'
    ],
    '🇺🇦': [
        'Флаг Украины',
        ':ua:',
        'Флаг Украины'
    ],
    '🇺🇬': [
        'Флаг Уганды',
        ':ug:',
        'Флаг Уганды'
    ],
    '🇺🇲': [
        'Флаг: Внешние Острова США',
        ':um:'
    ],
    '🇺🇸': [
        'Флаг Соединенных Штатов',
        ':us:',
        'Американский флаг',
        'Флаг США'
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
        'Флаг Святейшего Престола',
        ':va:',
        'Флаг Вантаниена'
    ],
    '🇻🇨': [
        'Флаг Сент-Винсента и Гренадин',
        ':vc:'
    ],
    '🇻🇪': [
        'Флаг Венесуэлы',
        ':ve:',
        'Венесуэльский флаг'
    ],
    '🇻🇬': [
        'Флаг Британских Виргинских островов',
        ':vg:',
        'Флаг Британского Виргинского острова'
    ],
    '🇻🇮': [
        'Флаг Виргинских островов США',
        ':vi:',
        'Флаг Виргинских островов США'
    ],
    '🇻🇳': [
        'Флаг Вьетнама',
        ':vn:',
        'Вьетнамский флаг'
    ],
    '🇻🇺': [
        'Flag of Vanuatu',
        ':vu:',
        'Ni-Vanuatu Flag'
    ],
    '🇼🇫': [
        'Флаг Уоллиса и Футуны',
        ':wf:'
    ],
    '🇼🇸': [
        'Флаг Самоа',
        ':ws:',
        'Samoan Flag'
    ],
    '🇽🇰': [
        'Флаг Косово',
        ':xk:',
        'Kosovar Flag'
    ],
    '🇾🇪': [
        'Флаг Йемена',
        ':ye:',
        'Йеменский флаг'
    ],
    '🇾🇹': [
        'Флаг Майотта',
        ':yt:',
        'Флаг Майотта'
    ],
    '🇿🇦': [
        'Флаг Южной Африки',
        ':za:',
        'Флаг Южной Африки'
    ],
    '🇿🇲': [
        'Флаг Замбии',
        ':zm:',
        'Zambian Flag'
    ],
    '🇿🇼': [
        'Флаг Зимбабве',
        ':zw:',
        'Флаг Зимбабве',
        'Zim флаг'
    ]
};
/*sports*/
emojis_language[lang][8] = {
    '🧗{{skin_tone}}‍♂️': [
        'Скалолазание',
        ':man_climbing:',
        ':climbing:',
        'Скалолазание для мужчин',
        'Скалолазание',
        ':man:'
    ],
    '🧗{{skin_tone}}‍♀️': [
        'Женский скалолаз',
        ':woman_climbing:',
        ':climbing:',
        'Женский скалолазатель',
        'Женский скалолазатель',
        ':woman:'
    ],
    '🧗{{skin_tone}}': [
        'Скалолазание',
        ':person_climbing:',
        ':climbing:',
        'Скалолазание',
        'Подъемник',
        ':person:'
    ],
    '🏇{{skin_tone}}': [
        'Конные гонки',
        ':horse_racing:',
        'Конная гонка',
        'Джокей'
    ],
    '⛷{{skin_tone}}‍️': [
        'Катание',
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
        'Женское золото',
        ':woman_golfer:',
        ':golfer:',
        ':woman:'
    ],
    '🏌️{{skin_tone}}': [
        'Лицо Золота',
        ':person_golfer:',
        ':golfer:',
        ':person:'
    ],
    '🏄{{skin_tone}}‍♂️': [
        'Сюрфер',
        ':man_surfer:',
        ':surfer:',
        ':man:'
    ],
    '🏄{{skin_tone}}‍♀️': [
        'Женский Сёрфер',
        ':woman_surfer:',
        ':surfer:',
        ':woman:'
    ],
    '🏄{{skin_tone}}': [
        'Человек Сёрфер',
        ':person_surfer:',
        ':surfer:',
        ':person:'
    ],
    '🚣{{skin_tone}}‍♂️': [
        'Мужская буксировочная лодка',
        ':man_rowing_boat:',
        ':rowing_boat:',
        ':man:'
    ],
    '🚣{{skin_tone}}‍♀️': [
        'Женская лодка',
        ':woman_rowing_boat:',
        ':rowing_boat:',
        ':woman:'
    ],
    '🚣{{skin_tone}}': [
        'Человеческое лезвие',
        ':person_rowing_boat:',
        ':rowing_boat:',
        ':person:'
    ],
    '🏊{{skin_tone}}‍♂️': [
        'Плавание для человека',
        ':man_swimming:',
        ':swimming:',
        'Человек пловца',
        ':man:'
    ],
    '🏊{{skin_tone}}‍♀️': [
        'Женский плавательный бассейн',
        ':woman_swimming:',
        ':swimming:',
        'Женское пловец',
        ':woman:'
    ],
    '🏊{{skin_tone}}': [
        'Плавание персоны',
        ':person_swimming:',
        ':swimming:',
        'Лепёшка',
        ':person:'
    ],
    '⛹{{skin_tone}}‍️‍♂️': [
        'Человеческий мяч',
        ':man_bouncing_ball:',
        ':bouncing_ball:',
        'Мужчина баскетболист',
        ':man:'
    ],
    '⛹️{{skin_tone}}‍♀️': [
        'Женский мяч отскакивания',
        ':woman_bouncing_ball:',
        ':boucing_ball:',
        'Женский баскетболист',
        ':woman:'
    ],
    '⛹️{{skin_tone}}': [
        'Человек прыгающий мяч',
        ':person_bouncing_ball:',
        ':boucing_ball:',
        'Человек баскетболист',
        ':person:'
    ],
    '🏋️{{skin_tone}}‍♂️': [
        'Вес подтяжки человека',
        ':man_lifting_weights:',
        ':lifting_weights:',
        'Человек весовой подъёмник',
        ':man:'
    ],
    '🏋️{{skin_tone}}‍♀️': [
        'Женский вес',
        ':woman_lifting_weights:',
        ':lifting_weights:',
        'Весовой подъёмник для женщин',
        ':woman:'
    ],
    '🏋️{{skin_tone}}': [
        'Вес подтяжки лица',
        ':person_lifting_weights:',
        ':lifting_weights:',
        'Весовой лифт человека',
        ':person:'
    ],
    '🚴{{skin_tone}}‍♂️': [
        'Велосипед человека',
        ':man_biking:',
        ':biking:',
        'Человеческий циклист',
        'Мужский циклист',
        ':man:'
    ],
    '🚴{{skin_tone}}‍♀️': [
        'Женский велосипед',
        ':woman_biking:',
        ':biking:',
        'Женский циклист',
        'Женский циклист',
        ':woman:'
    ],
    '🚴{{skin_tone}}': [
        'Велосипед',
        ':person_biking:',
        ':biking:',
        'Лицо циклиста',
        'Лицо циклиста',
        ':person:'
    ],
    '🚵{{skin_tone}}‍♂️': [
        'Велосипед для мужчин',
        ':man_mountain_bike:',
        ':mountain_bike:',
        'Байкеры из гор Человека',
        ':man:'
    ],
    '🚵{{skin_tone}}‍♀️': [
        'Женский горный велосипед',
        ':woman_mountain_bike:',
        ':mountain_bike:',
        'Убийца женской горы',
        ':woman:'
    ],
    '🚵{{skin_tone}}': [
        'Велосипед человека',
        ':person_mountain_bike:',
        ':mountain_bike:',
        'Байкеры Лидера',
        ':person:'
    ],
    '🤸{{skin_tone}}‍♂️': [
        'Кортик человека',
        ':man_cartwheeling:',
        ':cartwheeling:',
        'Мужчина делаем корзину',
        ':man:'
    ],
    '🤸{{skin_tone}}‍♀️': [
        'Женское кортилирование',
        ':woman_cartwheeling:',
        ':cartwheeling:',
        'Женское дежурное колесо',
        ':woman:'
    ],
    '🤸{{skin_tone}}': [
        'Колесо лица',
        ':person_cartwheeling:',
        ':cartwheeling:',
        'Колесо персон',
        ':person:'
    ],
    '🤼‍♂️': [
        'Мужчины Борьбы',
        ':men_wrestling:',
        ':wrestling:',
        'Борьба',
        'Борцы',
        ':man:'
    ],
    '🤼‍♀️': [
        'Женщины-борцы',
        ':women_wrestling:',
        ':wrestling:',
        'Борьба',
        'Борцы',
        ':woman:'
    ],
    '🤼': [
        'Борьба с людьми',
        ':people_wrestling:',
        ':wrestling:',
        'Борьба',
        'Борцы',
        ':person:'
    ],
    '🤽{{skin_tone}}‍♂️': [
        'Человек, играющий в воде Поло',
        ':man_playing_water_polo:',
        ':playing_water_polo:',
        ':man:'
    ],
    '🤽{{skin_tone}}‍♀️': [
        'Женское полотно игры в воде',
        ':woman_playing_water_polo:',
        ':playing_water_polo:',
        ':woman:'
    ],
    '🤽{{skin_tone}}': [
        'Человек, играющий в воду поло',
        ':person_playing_water_polo:',
        ':playing_water_polo:',
        ':person:'
    ],
    '🤾{{skin_tone}}‍♂️': [
        'Гандбол для человека',
        ':man_playing_handball:',
        ':playing_handball:',
        ':man:'
    ],
    '🤾{{skin_tone}}‍♀️': [
        'Женский гандбол',
        ':woman_playing_handball:',
        ':playing_handball:',
        ':woman:'
    ],
    '🤾{{skin_tone}}': [
        'Рукоятка для игры',
        ':person_playing_handball:',
        ':playing_handball:',
        ':person:'
    ],
    '🤹{{skin_tone}}‍♂️': [
        'Контрабандист',
        ':man_juggling:',
        ':juggling:',
        'Мужский Жонюшор',
        ':man:'
    ],
    '🤹{{skin_tone}}‍♀️': [
        'Женская контрабанда',
        ':woman_juggling:',
        ':juggling:',
        'Женский контрабандист',
        ':woman:'
    ],
    '🤹{{skin_tone}}': [
        'Контрабандирование',
        ':person_juggling:',
        ':juggling:',
        'Контрабандист',
        ':person:'
    ],
    '🧘{{skin_tone}}‍♂️': [
        'Позиция Лотоса',
        ':man_lotus_position:',
        ':lotus_position:',
        'Медитация',
        'Zen',
        'Перекрест ног',
        'Йога',
        ':man:'
    ],
    '🧘{{skin_tone}}‍♀️': [
        'Женщина в положении лотоса',
        ':woman_lotus_position:',
        ':lotus_position:',
        'Медитация',
        'Zen',
        'Перекрест ног',
        'Йога',
        ':woman:'
    ],
    '🧘{{skin_tone}}': [
        'Лицо в позиции лотоса',
        ':person_lotus:_position',
        ':lotus_position:',
        'Медитация',
        'Zen',
        'Перекрест ног',
        'Йога',
        ':person:'
    ],
    '🏃{{skin_tone}}‍♂️': [
        'Человек работает',
        ':man_running:',
        ':running:',
        ':man:'
    ],
    '🏃{{skin_tone}}‍♀️': [
        'Бегущая женщина',
        ':woman_running:',
        ':running:',
        ':woman:'
    ],
    '🏃{{skin_tone}}': [
        'Лицо запущено',
        ':person_running:',
        ':running:',
        ':person:'
    ],
    '🕺{{skin_tone}}': [
        'Танцы',
        ':man_dancing:',
        ':dancing:',
        ':man:'
    ],
    '💃{{skin_tone}}': [
        'Женские танцы',
        ':woman_dancing:',
        ':dancing:',
        ':woman:'
    ],
    '🤺': [
        'Лицо ограждения',
        ':person_fencing:',
        'Фансер',
        ':fencing:'
    ],
    '🏆': [
        'Трофей:',
        ':trophy:',
        'Чемпионат',
        'Победитель',
        ':gold:',
        ':yellow:'
    ],
    '🏅': [
        'Медаль "Спорт"',
        ':sports_medal:',
        ':medal:',
        ':gold:',
        ':yellow:'
    ],
    '🥇': [
        'Орден «1-е место»',
        ':first_place_medal:',
        ':gold_medal:',
        'Орден «Первое место»',
        'Золотая медаль',
        ':yellow:',
        ':gold:'
    ],
    '🥈': [
        'Орден «2-е место»',
        ':second_place_medal:',
        ':silver_medal:',
        'Орден «Второе место»',
        'Серебряная медаль',
        ':gray:',
        ':grey:',
        ':silver:'
    ],
    '🥉': [
        'Орден «3-е место»',
        ':third_place_medal:',
        ':bronze_medal:',
        'Орден «Третье место»',
        'Бронзовый медаль',
        ':brown:',
        ':bronze:'
    ],
    '⚽': [
        'Футбол',
        ':football:',
        'Футбол',
        ':white:',
        ':black:'
    ],
    '⚾': [
        'Бейсбол',
        ':baseball:',
        'Софтбол',
        ':white:'
    ],
    '🥎': [
        'Софтбол',
        ':softball:',
        ':yellow:'
    ],
    '🏀': [
        'Баскетбол',
        ':basketball:',
        ':orange:',
        'Баскетбол и Хоп'
    ],
    '🏐': [
        'Волейбол',
        ':volleyball:',
        ':white:'
    ],
    '🏈': [
        'Американский Футбол',
        ':american_football:',
        'Футбол',
        'Gridiron',
        'Суперчатка',
        ':brown:'
    ],
    '🏉': [
        'Футбол Регби',
        ':rugby:',
        'Футбол',
        'Лига',
        'Регби',
        'Союз'
    ],
    '🎾': [
        'Теннис',
        ':tennis:',
        ':ball:',
        'Мяч',
        'Ракета',
        'Ракет',
        ':yellow:'
    ],
    '🥏': [
        'Летающий диск',
        ':flying_disk:',
        'Фрисби'
    ],
    '🎳': [
        'Лук',
        ':bowling:',
        'Метки',
        'Скейтлы',
        'Десять Pin-Боулингов'
    ],
    '🏏': [
        'Крикет',
        ':cricket:',
        'Летучие мыши',
        'Мяч'
    ],
    '🏑': [
        'Хоккей поля',
        ':field_hockey:',
        'Мяч',
        'Палка'
    ],
    '🏒': [
        'Хоккей льда',
        ':ice_hockey:',
        'Мяч',
        'Палка'
    ],
    '🥍': [
        'Лакросс',
        ':lacrosse:',
        'Мяч',
        'Палка',
        ':red:'
    ],
    '🏓': [
        'Пинг-понг',
        ':ping_pong:',
        ':table_tennis:',
        'Настольный теннис',
        'Мяч',
        'Paddle'
    ],
    '🏸': [
        'Badminton',
        ':badminton:',
        'Шаттлэкк',
        'Ракет'
    ],
    '🥊': [
        'Боксерская перчатка',
        ':boxing_glove:',
        ':red:'
    ],
    '🥋': [
        'Униформа боевых искусств',
        ':martial_arts_uniform:',
        ':judo:',
        ':karate:',
        ':kung_fu:',
        'Дзюдо',
        'Карате',
        'Кунгфу'
    ],
    '⛳': [
        'Флаг в отверстии',
        ':flag_in_hole:',
        ':golf_flag:',
        'Флаг для гольфа'
    ],
    '⛸️': [
        'Ледяной Скат',
        ':ice_skate:',
        'Катание на коньках'
    ],
    '🎣': [
        'Рыболовство',
        ':fishing:',
        'Полюс',
        'Рыба',
        'Удочка'
    ],
    '🎽': [
        'Бегущая рубашка',
        ':running_shirt:',
        'Синглет',
        'Насыпь'
    ],
    '🎿': [
        'Скис',
        ':skis:',
        'Лыжи',
        'Засада'
    ],
    '🛷': [
        'Засеянный',
        ':sled:'
    ],
    '🥌': [
        'Камень Курирования',
        ':curling_stone:'
    ],
    '🎯': [
        'Прямое попадание',
        ':direct_hit:',
        'Лучник',
        'Bullseye',
        'Дартс'
    ],
    '🎱': [
        'Бассейн 8',
        ':pool_8_ball:',
        'Мяч Кью',
        'Снукер',
        'Бильярды',
        ':black:'
    ],
    '🎮': [
        'Игровой контроллер',
        ':video_game_controller:',
        ':playstation:',
        ':xbox:',
        'Плей-станции',
        'Xbox',
        'Геймпад',
        'Wii U'
    ],
    '♟️': [
        'Чёрная шахматная пешка',
        ':black_chess_pawn:',
        ':black:'
    ],
    '🏹': [
        'Лук и стрела',
        ':arch:',
        'Арка'
    ],
    '🥅': [
        'Сеть целей',
        ':goal_net:'
    ],
    '🀄': [
        'Красный Дракон Махонг',
        ':mahjong:',
        'Махонг',
        'Mahjong Tile',
        '中',
        'Красный Дракон Махон'
    ],
    '🎴': [
        'Цветочные игровые карты',
        ':flower_playing_cards:',
        'Колода карт',
        'Hanafuda',
        'Hwatu',
        'Играющие карты'
    ]
};
/*travel and places*/
emojis_language[lang][9] = {
    '🚂': [
        'Локомотив Пара',
        ':steam_train:',
        'Паровой поезд',
        'Железнодорожный локомотив'
    ],
    '🚃': [
        'Железнодорожный Автомобиль',
        ':railway_car:',
        'Рельсовая машина',
        'Железный автомобиль',
        'Железнодорожная перевозка',
        'Железнодорожный вагон'
    ],
    '🚄': [
        'Высокоскоростной поезд',
        ':high_speed_train:'
    ],
    '🚅': [
        'Пуля',
        ':bullet_train:',
        'Shinkansen',
        'Высокоскоростной поезд с пулевым носом'
    ],
    '🚆': [
        'Тренировка',
        ':train:'
    ],
    '🚇': [
        'Подземный',
        ':underground:',
        'Тюбе',
        'Метро',
        'Метро'
    ],
    '🚈': [
        'Легкие рельсы',
        ':light_rail:',
        'Тренировка'
    ],
    '🚊': [
        'Трамвай',
        ':tram:'
    ],
    '🚝': [
        'Монорельс',
        ':monorail:',
        'Тренировка'
    ],
    '🚞': [
        'Горная железная дорога',
        ':mountain_railway:',
        'Funicular',
        'Тренировка и Гора'
    ],
    '🚋': [
        'Трамвай',
        ':tram_car:'
    ],
    '🚌': [
        'Автобус',
        ':bus:',
        'Тренер'
    ],
    '🚍': [
        'Входящий автобус',
        ':front_of_bus:',
        'Передняя часть автобуса'
    ],
    '🚎': [
        'Троллейбус',
        ':trolleybus:',
        'Электрическая шина'
    ],
    '🚐': [
        'Minibus',
        ':minibus:',
        'Миневан',
        'Люди'
    ],
    '🚑': [
        'Амбуланс',
        ':ambulance:'
    ],
    '🚒': [
        'Огненный двигатель',
        ':fire_engine:',
        'Огненный отдел',
        'Огненный грузовик'
    ],
    '🚓': [
        'Полицейский автомобиль',
        ':police_car:',
        'Кооп-вагон',
        'Боковая полицейская машина'
    ],
    '🚔': [
        'Предстоящий Полицейский Автомобиль',
        ':front_of_police_car:',
        'Передняя полицейская машина',
        'Кооп-вагон'
    ],
    '🚕': [
        'Такси',
        ':taxi:',
        'Такси Нью-Йорк',
        'Грань Такси'
    ],
    '🚖': [
        'Такси',
        ':front_of_taxi:',
        'Предстоящие такси',
        'Передние такси'
    ],
    '🚗': [
        'Автомобиль',
        ':car:',
        'Красный автомобиль',
        'Бок автомобиля',
        'Автомобиль'
    ],
    '🚘': [
        'Предстоящий Автомобиль',
        ':front_of_car:',
        'Красный автомобиль',
        'Передний автомобиль'
    ],
    '🚚': [
        'Транспортер доставки',
        ':lorry:',
        'Лорри'
    ],
    '🚛': [
        'Сочлененный Лорри',
        ':articulated_lorry:',
        'Зелёный Грузовик'
    ],
    '🚜': [
        'Трактор',
        ':tractor:',
        'Ферма'
    ],
    '🛻': [
        'Подобрать Транспортер',
        ':pickup_truck:'
    ],
    '🏎️': [
        'Гоночная машина',
        ':racing_car:',
        'F1',
        'Формула 1',
        'Гоночный автомобиль'
    ],
    '🏍️': [
        'Мотоцикл',
        ':motorbike:',
        'Мотоцикл'
    ],
    '🛵': [
        'Моторный самокат',
        ':motor_scooter:',
        'Vespa',
        'Моторный велосипед',
        'Моторный велосипед'
    ],
    '🛺': [
        'Авторизатор',
        ':auto_rickshaw:',
        'Tuk Tuk'
    ],
    '🚲': [
        'Велосипед',
        ':bike:',
        'Велосипед'
    ],
    '🛴': [
        'Выгнать самокат',
        ':kick_scooter:'
    ],
    '⛵': [
        'Парусная лодка',
        ':sailboat:',
        'Динги',
        'Яхта'
    ],
    '🚤': [
        'Корабль',
        ':speedboat:',
        'Моторная лодка',
        'Парусная лодка'
    ],
    '🛳️': [
        'Пассажирский корабль',
        ':passenger_ship:'
    ],
    '⛴️': [
        'Паром',
        ':ferry:'
    ],
    '🛥️': [
        'Моторное судно',
        ':motor_boat:'
    ],
    '🚢': [
        'Круизный корабль',
        ':cruise_ship:'
    ],
    '✈️': [
        'Самолет',
        ':airplane:',
        'Aeroplane'
    ],
    '🛩️': [
        'Маленький самолет',
        ':small_airplane:',
        'Маленький Аэрополь'
    ],
    '🚁': [
        'Вертолет',
        ':helicopter:'
    ],
    '🚟': [
        'Приостановленная железная дорога',
        ':suspension_railway:'
    ],
    '🚠': [
        'Горная канатная дорога',
        ':mountain_cableway:'
    ],
    '🚡': [
        'Воздушный Трамвай',
        ':aerial_tramway:',
        'Кабельный автомобиль',
        'Gondola',
        'Рупуэй'
    ],
    '🛰️': [
        'Спутник',
        ':satellite:'
    ],
    '🚀': [
        'Ракета',
        ':rocket:',
        'Космический корабль'
    ],
    '🛸': [
        'Летающий кастрюль',
        ':flying_saucer:',
        'НЛО'
    ],
    '🚉': [
        'Железнодорожная станция',
        ':train_station:',
        'Тренировочная платформа'
    ],
    '🚏': [
        'Автобусная остановка',
        ':bus_stop:'
    ],
    '🛣️': [
        'Автострада',
        ':motorway:',
        'Дорога',
        'Шоссе',
        'Межштат'
    ],
    '🛤️': [
        'Железнодорожный путь',
        ':railway_track:'
    ],
    '🛫': [
        'Отправление самолета',
        ':airplane_departure:',
        'Взятие'
    ],
    '🛬': [
        'Прибытие в самолет',
        ':airplane_arrival:',
        'Прибытие самолета',
        'Посадка'
    ],
    '🗾': [
        'Карта Японии',
        ':map_of_japan:'
    ],
    '⛰️': [
        'Гора',
        ':mountain:'
    ],
    '🏔️': [
        'Снежная гора',
        ':snow_capped_mountain:'
    ],
    '🌋': [
        'Вулкан',
        ':volcano:'
    ],
    '🗻': [
        'Монтировать Фудзи',
        ':mount_fuji:',
        'Фудзи-сан'
    ],
    '🏕️': [
        'Кемпинг',
        ':camping:',
        'Кемпинг'
    ],
    '🏖️': [
        'Пляж с зонтиком',
        ':beach_with_umbrella:'
    ],
    '🏜️': [
        'Desert',
        ':desert:'
    ],
    '🏝️': [
        'Остров Пустыни',
        ':desert_island:'
    ],
    '🏞️': [
        'Национальный парк',
        ':national_park:'
    ],
    '🏟️': [
        'Стадион',
        ':stadium:',
        'Искусный',
        'Спортивный стадион'
    ],
    '🏛️': [
        'Строительство классики',
        ':classical_building:',
        'Греческий',
        'Рим'
    ],
    '🏗️': [
        'Строительство здания',
        ':building_construction:',
        'Кран'
    ],
    '🏘️': [
        'Дома',
        ':houses_building:',
        'Группа домов'
    ],
    '🏚️': [
        'Заброшенное здание дома',
        ':old_house:',
        'Заброшенный дом',
        'Старый дом',
        'Призрачный дом'
    ],
    '🏠': [
        'Главная',
        ':home:',
        'Здание дома'
    ],
    '🏡': [
        'Дом с садом',
        ':house_with_garden:',
        'Дом и Дерево'
    ],
    '🏢': [
        'Офисное здание',
        ':office_building:',
        'Постройка Города',
        'Строительство с высокой скоростью'
    ],
    '🏣': [
        'Японская почта',
        ':japanese_post_office:',
        'Японская почтовая марка'
    ],
    '🏤': [
        'Post Office',
        ':european_post_office:',
        'Европейское почтовое отделение'
    ],
    '🏥': [
        'Госпиталь',
        ':hospital:',
        'С',
        'A&E',
        'Экстренная комната',
        'Авария и экстренная ситуация',
        'Красный Крест',
        'Медицинский'
    ],
    '🏦': [
        'Банк',
        ':bank:',
        'BK',
        'Bakkureru',
        'Отделение банка',
        'Bakkureru'
    ],
    '🏨': [
        'Отель',
        ':hotel:',
        'Проживание',
        'H Здание'
    ],
    '🏩': [
        'Любовный отель',
        ':love_hotel:',
        'Любовное сердце'
    ],
    '🏪': [
        'Магазин Удобства',
        ':convenience_store:',
        'Магазин 24 часа',
        '7-Одиннадцать',
        'Угловой магазин',
        'Kwik-E-Mart'
    ],
    '🏫': [
        'Школа',
        ':school:',
        'Часовая башня',
        'Начальный высокий средний'
    ],
    '🏬': [
        'Универмаг',
        ':department_store:',
        'Торговый центр',
        'Магазин'
    ],
    '🏭': [
        'Фабрика',
        ':factory:',
        'Промышленные',
        'Промышленность',
        'Загрязнение',
        'Дым'
    ],
    '🏯': [
        'Японский замок',
        ':japanese_castle:',
        'Крепость'
    ],
    '🏰': [
        'Европейский замок',
        ':european_castle:',
        'Turrets'
    ],
    '💒': [
        'Церковное Сердце',
        ':church_heart:',
        'Свадьба Церкви',
        'Брак'
    ],
    '🗼': [
        'Токийская башня',
        ':tokyo_tower:',
        'Эйфелева башня',
        'Красная башня'
    ],
    '🗽': [
        'Статуя Свободы',
        ':statue_of_liberty:',
        'Нью-Йорк'
    ],
    '⛪': [
        'Церковное здание',
        ':church_building:',
        'Крест'
    ],
    '🕌': [
        'Мечеть',
        ':mosque:',
        'Доменная крыша',
        'Minaret'
    ],
    '🛕': [
        'Храм индусов',
        ':hindu_temple:'
    ],
    '🕍': [
        'Синагога',
        ':synagogue:',
        'Еврейский',
        'Synagog',
        'Храм'
    ],
    '⛩️': [
        'Синяя',
        ':shinto_shrine:',
        'Ками-не-миши'
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
        'Зонтик на земле',
        ':beach_umbrella:',
        'Зонтик пляжа'
    ],
    '🌄': [
        'Восход через горы',
        ':sunrise_over_mountains:',
        'Первая половина дня',
        'Восход'
    ],
    '🌅': [
        'Восход',
        ':sunrise:',
        ':sunset:',
        'Закат'
    ],
    '🌆': [
        'Циташ в Сумереке',
        ':cityscape_at_dusk:',
        'Оранжевый Небесный Город',
        'Город Сумерек'
    ],
    '🌇': [
        'Закат над зданиями',
        ':sunset_over_buildings:',
        'Закат Города'
    ],
    '🌃': [
        'Ночь со звездами',
        ':night_with_stars:',
        'Города ночью',
        'Звёздная ночь'
    ],
    '🗿': [
        'Moai',
        ':moai:',
        'Статуя Острова Пасхи',
        'Рокрезинг человека',
        'Статуя Мояй'
    ],
    '🌠': [
        'Стреляющая звезда',
        ':shooting_star:',
        'Когда вы желаете поставить звезду',
        'Метеороид'
    ],
    '🌌': [
        'Молочный путь',
        ':milky_way:',
        'Галактика',
        'Ночное Небо',
        'Пространство',
        'Звезды',
        'Вселенная'
    ],
    '🎑': [
        'Лунный Церемония',
        ':moon_viewing_ceremony:',
        'Трава, Дамблии и Луна',
        'Луна сбора урожая',
        'Праздник середины осени',
        'Tsukimi'
    ],
    '🛖': [
        'Хит',
        ':hut:'
    ],
    '🎢': [
        'Ролевый костер',
        ':roller_coaster:',
        'Горячие горки',
        'Парк тем'
    ],
    '🛝': [
        'Слайд игровая площадка',
        ':playground_slide:',
        'Дети',
        'Дети'
    ]
};
/*technologies (smartphones, laptops, etc.) and office*/
emojis_language[lang][10] = {
    '⌚': [
        'Смотреть',
        ':watch:',
        'Таймер',
        'Часы Apple'
    ],
    '⏰': [
        'Будильник',
        ':alarm_clock:'
    ],
    '⏱️': [
        'Таймер',
        ':stopwatch:'
    ],
    '⏲️': [
        'Часы таймера',
        ':timer_clock:'
    ],
    '🕰️': [
        'Часы Mantelpiece',
        ':mantelpiece_clock:'
    ],
    '🧭': [
        'Компас',
        ':compass:'
    ],
    '🕹️': [
        'Джойстик',
        ':joystick:'
    ],
    '🎙️': [
        'Студийный микрофон',
        ':studio_microphone:'
    ],
    '🎚️': [
        'Слайдер Уровня',
        ':level_slider:'
    ],
    '🎛️': [
        'Управлять нобами',
        ':control_knobs:'
    ],
    '📻': [
        'Радио',
        ':radio:',
        'Цифровое радио',
        'Беспроводной'
    ],
    '📱': [
        'Мобильный телефон',
        ':mobile_phone:',
        'Смартфон',
        'iPhone',
        'Мобильный телефон'
    ],
    '📲': [
        'Мобильный телефон с правой стрелкой влево',
        ':phone_call:',
        'Звонок',
        'Направляю на телефон'
    ],
    '☎️': [
        'Черный телефон',
        ':rotary_phone:',
        'Поворотный телефон',
        ':red:'
    ],
    '📞': [
        'Приемник телефона',
        ':phone:',
        'Handset',
        'Телефон',
        ':black:'
    ],
    '📟': [
        'Пейджер',
        ':pager:',
        'Пчела',
        'Спящий'
    ],
    '📠': [
        'Машина факса',
        ':fax_machine:',
        'Facsimile',
        'Факс'
    ],
    '🔋': [
        'Батарея',
        ':battery:',
        'Батарея АА',
        'Батарея телефона'
    ],
    '🔌': [
        'Электрическая розетка',
        ':power_cable:',
        'AC Adaptor',
        'Кабель питания',
        'Электродвигатель'
    ],
    '💻': [
        'Ноутбук',
        ':laptop:',
        'Ноутбук',
        'Персональный компьютер',
        'ПК',
        'МаксКнига',
        'Поверхность'
    ],
    '🖥️': [
        'Компьютер рабочего стола',
        ':desktop_computer:',
        'iMac',
        'ПК'
    ],
    '🖨️': [
        'Принтер',
        ':printer:'
    ],
    '⌨️': [
        'Keyboard',
        ':keyboard:'
    ],
    '🖱️': [
        'Машина компьютера',
        ':computer_mouse:',
        'Маска из трех кнопок'
    ],
    '🖲️': [
        'Трекбол',
        ':trackball:'
    ],
    '💽': [
        'Компьютерный диск',
        ':blu_ray:',
        'Minidisc',
        'КР',
        'DVD',
        'Голубой',
        'BD'
    ],
    '💾': [
        'Дисковод',
        ':floppy_disk:',
        '3.5 Ивурский диск',
        'Диск'
    ],
    '💿': [
        'Оптический диск',
        ':cd:',
        'КР',
        'CD-ROM',
        'Компактный диск'
    ],
    '📀': [
        'DVD',
        'DVD-ROM',
        ':dvd:',
        'Видео DVD'
    ],
    '🎥': [
        'Видео камера',
        ':movie_camera:',
        'Кинокамера',
        'Голливуд',
        'Фильм'
    ],
    '🎞️': [
        'Рамки для фильмов',
        ':film_frames:'
    ],
    '📽️': [
        'Проектор фильмов',
        ':film_projector:'
    ],
    '📺': [
        'Телевидение',
        ':tv:',
        'ТВ'
    ],
    '📷': [
        'Цифровая камера',
        ':digital_camera:'
    ],
    '📸': [
        'Камера с вспышкой',
        ':camera_flash:'
    ],
    '📹': [
        'Видеокамера',
        ':video_camera:',
        'Фотоаппарат'
    ],
    '📼': [
        'Видеоксет',
        ':vhs:',
        'VHS',
        'VCR',
        'Видео лента',
        'Видеоксет'
    ],
    '💳': [
        'Кредитная карта',
        ':credit_card:',
        'Дебетовая карта',
        'АМЕКС',
        'Diners Club',
        'American Express',
        'Mastercard',
        'VISA карта'
    ],
    '📧': [
        'Электронная почта',
        ':email:',
        'Почта'
    ],
    '📨': [
        'Входящий конверт',
        ':incoming_envelope:',
        'Конверт с строками',
        'Быстрый конверт'
    ],
    '📩': [
        'Конверт с стрелой вниз над',
        ':insert_in_envelope:',
        'Конверт стрелки вниз',
        'Добавить в конверт'
    ],
    '📤': [
        'Исходящий трек',
        ':outbox_tray:'
    ],
    '📥': [
        'Входящий трек',
        ':inbox_tray:'
    ],
    '📮': [
        'Почтовая панель',
        ':postbox:'
    ],
    '📁': [
        'Папка файлов',
        ':file_folder:',
        'Папка',
        'Каталог',
        'Закрытая папка'
    ],
    '📂': [
        'Открыть папку Файла',
        ':open_file_folder:',
        'Каталог'
    ],
    '🗂️': [
        'Деление индексов',
        ':card_index_dividers:'
    ],
    '📅': [
        'Календарь',
        ':calendar:',
        '17 июля',
        'День эмодзи мира'
    ],
    '🗓️': [
        'Спиральная панель календаря',
        ':spiral_calendar_pad:'
    ],
    '📆': [
        'Календарь Tear-Off',
        ':day_calendar:',
        'День Календарь',
        'Календарь'
    ],
    '📈': [
        'Увеличение графика',
        ':increasing_chart:',
        'Положительная диаграмма',
        'График баллов',
        'График с трендом вверх'
    ],
    '📉': [
        'Снижение графика',
        ':decreasing_chart:',
        'Отрицательный график',
        'График отдачи',
        'Диаграмма с трендом вниз'
    ],
    '📊': [
        'Гистограмма',
        ':bar_chart:',
        'График панели'
    ],
    '📌': [
        'Пушпинка',
        ':pushpin:',
        'Thumb Tack',
        ':red:'
    ],
    '📋': [
        'Буфер обмена',
        ':clipboard:'
    ],
    '📍': [
        'Круглый толчок',
        ':round_pushpin:',
        'Выброшенный маркер',
        'Прикрепить карту',
        'Закрепить',
        'Красная отметка',
        ':red:'
    ],
    '📎': [
        'Бумага-клип',
        ':paperclip:',
        'Клиппия'
    ],
    '📏': [
        'Прямое линейка',
        ':straight_ruler:'
    ],
    '📐': [
        'Треугольное отверстие',
        ':triangular_ruler:',
        'Правила треугольника'
    ],
    '✂️': [
        'Ножницы',
        ':scissors:',
        'Обрезка'
    ],
    '✏️': [
        'Карандаш',
        ':pencil:',
        'Ведущий карандаш'
    ],
    '✒️': [
        'Черный Ниб',
        ':black_nib:',
        'Pen Nib',
        'Фонтан ручка'
    ],
    '🖋️': [
        'Фонтан ручка',
        ':fountain_pen:',
        'Опустить левый фонтан'
    ],
    '🖊️': [
        'Перо',
        ':pen:',
        'Нижняя левая точка шара',
        'Перенос балла'
    ],
    '🖌️': [
        'Кисть',
        ':paintbrush:',
        'Кисть',
        'Нижняя левая кисть'
    ],
    '🖍️': [
        'Crayon',
        ':crayon:',
        'Нижний левый Ящик'
    ],
    '📝': [
        'Запоминание',
        ':memo:',
        'Memorandum',
        'Примечание',
        'Карандаш и бумага'
    ],
    '🗑️': [
        'Корзина отходов',
        ':wastepaper_basket:',
        'Банда мусора',
        'Рубашка',
        'Мусорная банка'
    ],
    '📡': [
        'Спутниковая антенна',
        ':satellite_antenna:'
    ],
    '🔭': [
        'Телескоп',
        ':telescope:',
        'Звёздный взгляд'
    ],
    '🔬': [
        'Микроскоп',
        ':microscope:',
        'Magnify',
        'Наука'
    ],
    '📭': [
        'Открыть почтовый ящик с низкоуровневым флагом',
        ':open_mailbox_lowered:'
    ],
    '📬': [
        'Открыть почтовый ящик с Поднятым Флагом',
        ':open_mailbox_raised:',
        'Открыть почтовый ящик'
    ],
    '📪': [
        'Закрытый почтовый ящик с низкоуровневым флагом',
        ':closed_mailbox_lowered:'
    ],
    '📫': [
        'Закрытый почтовый ящик с Поднятым Флагом',
        ':closed_mailbox_raised:'
    ],
    '📰': [
        'Газета',
        ':newspaper:'
    ],
    '🗞️': [
        'Растущая Газета',
        ':rolled_up_newspaper:',
        'Доставка газеты'
    ],
    '📄': [
        'Сверху страницы',
        ':printed_page:',
        'Печатная страница'
    ],
    '📜': [
        'Прокрутка',
        ':scroll:',
        'Степень',
        'Parchment'
    ],
    '📃': [
        'Страница с Curl',
        ':curled_page:',
        'Curled Page',
        'Curly Page'
    ],
    '📓': [
        'Ноутбук',
        ':notebook:',
        'Черная и белая книга'
    ],
    '📔': [
        'Ноутбук с декоративным обложкой',
        ':notebook_decorative_cover:'
    ],
    '📕': [
        'Закрытая книга',
        ':closed_book:',
        'Красная книга',
        'Красный учебник',
        ':red:'
    ],
    '📖': [
        'Открыть книгу',
        ':open_book:',
        'Книга',
        'Роман'
    ],
    '📗': [
        'Зеленая книга',
        ':green_book:',
        'Зелёный учебник',
        ':green:'
    ],
    '📘': [
        'Синяя книга',
        ':blue_book:',
        'Синий учебник',
        ':blue:'
    ],
    '📙': [
        'Оранжевая книга',
        ':orange_book:',
        'Оранжевый учебник',
        ':orange:'
    ],
    '📚': [
        'Книги',
        ':books:',
        'Куча книг',
        'Стек книг'
    ],
    '🗳️': [
        'Блок голосования с избирательным бюллетенем',
        ':ballot_box:',
        'Голос',
        'Голосование'
    ],
    '🗄️': [
        'Кабинет',
        ':file_cabinet:',
        'Подача кабинета'
    ],
    '🗃️': [
        'Файл карты',
        ':card_file_box:'
    ],
    '🖇️': [
        'Связанные бумагами',
        ':linked_paperclips:',
        ':gray:',
        ':grey:'
    ]
};
/*clothes and accessories*/
emojis_language[lang][11] = {
    '👣': [
        'Следы',
        ':footprints:',
        'Футы',
        'Шаги ног'
    ],
    '👓': [
        'Очки',
        ':glasses:',
        'Очки'
    ],
    '🕶️': [
        'Солнечные очки',
        ':sunglasses:'
    ],
    '🥽': [
        'Очки',
        ':goggles:'
    ],
    '🥼': [
        'Лаборатория',
        ':lab_coat:'
    ],
    '👔': [
        'Necktie',
        ':necktie:',
        'Деловая рубашка',
        'Рубашка и галстук'
    ],
    '👕': [
        'Футболка',
        ':t_shirt:',
        ':t-shirt:',
        'Рубашка с Пылем',
        'Поло рубашка'
    ],
    '👖': [
        'Джинсы',
        ':jeans:',
        'Деним',
        'Штаны',
        'Брюки'
    ],
    '🧣': [
        'Scarf',
        ':scarf:'
    ],
    '🧤': [
        'Перчатки',
        ':gloves:'
    ],
    '🧥': [
        'Пальто',
        ':coat:'
    ],
    '🧦': [
        'Socks',
        ':socks:'
    ],
    '👗': [
        'Платье',
        ':dress:',
        'Юбка',
        'Гаун'
    ],
    '👘': [
        'Kimono',
        ':kimono:',
        'Одежда Гаун',
        'Японское платье'
    ],
    '👙': [
        'Бикини',
        ':bikini:',
        'Ванны',
        'Пляжный костюм'
    ],
    '🩱': [
        'Древочный костюм',
        'одной_кусочкий/купальница',
        'один кусочковый плавучий костюм'
    ],
    '👚': [
        'Женская одежда',
        ':womans_clothes:',
        'Женская одежда',
        'Blouse',
        'Розовая рубашка',
        'Blouse'
    ],
    '👛': [
        'Кошелек',
        ':purse:',
        'Кошелек'
    ],
    '👜': [
        'Сумка',
        ':handbag:'
    ],
    '👝': [
        'Мешок сцепки',
        ':clutch_bag:',
        'Сцепление',
        'Маленький мешок',
        'Pouch'
    ],
    '🎒': [
        'Рюкзак',
        ':backpack:',
        'Сумка',
        'Школьная сумка',
        'Школьный сатчел',
        'Rucksack'
    ],
    '👞': [
        'Mans Shoe',
        ':mans_shoe:',
        'Mans Shoe',
        'Обувь',
        'Коричневый Шоу',
        'Шоу одежды'
    ],
    '👟': [
        'Атлетический Ботинок',
        ':athletic_shoe:',
        'Бегущий Ботинок',
        'Sneaker',
        'Спринтер',
        'Тренер',
        'Теннис Ботинок'
    ],
    '🥾': [
        'Пешеходные ботинки',
        ':hiking_boot:'
    ],
    '🥿': [
        'Плоский Обувь',
        ':flat_shoe:'
    ],
    '👠': [
        'Обувь с высокой температурой',
        ':high_heeled_shoe:',
        ':high_heel:',
        'Стилетто',
        'Высокие каблуки'
    ],
    '👡': [
        'Сандаль для женщин',
        ':womans_sandal:',
        'Сандаль для женщин',
        'Песочница',
        'Сандалии',
        'Sandal'
    ],
    '👢': [
        'Женские сапоги',
        ':Womans_ботинки_',
        'Женские сапоги',
        'Сапоги из коровы',
        'Высокие сапоги Колена',
        'Наклонные ботинки'
    ],
    '👑': [
        'Корона',
        ':crown:',
        'Король',
        'Королева',
        'Принц',
        'Королевский',
        'Принцесса',
        ':gold:',
        ':yellow:'
    ],
    '👒': [
        'Шляпа',
        ':hat:',
        'Женская шляпа',
        'Шляпа с луком',
        'Шляпа Дамы'
    ],
    '🎩': [
        'Верхняя шляпа',
        ':top_hat:',
        'Формальный Нос',
        'Groom',
        ':black:'
    ],
    '🎓': [
        'Шапка выпускников',
        ':graduation_cap:',
        'Колледж',
        'Выпускник',
        'Доска для минометов',
        'Университет',
        'Квадратная академическая шапка',
        ':black:'
    ],
    '🧢': [
        'Оплаченная кепка',
        ':billed_cap:',
        'Бейсбольная кепка'
    ],
    '⛑️': [
        'Шлем с белым крестом',
        ':helmet_with_white_cross:',
        ':helmet_with_cross:',
        ':rescue_worker_helmet:',
        ':rescue_workers_helmet:',
        'Шлем спасателей',
        ':red:',
        ':white:'
    ],
    '💼': [
        'Шкатулка',
        ':briefcase:',
        'Чехия'
    ],
    '🎖️': [
        'Военная медаль',
        ':military_medal:',
        ':medal:',
        'Медаль',
        'Медальон',
        'Военный облик'
    ],
    '📿': [
        'Молитвенный бисер',
        ':prayer_beads:',
        'Шарик Дикр',
        'Розари Шарик'
    ],
    '🎗️': [
        'Лента Напоминания',
        ':reminder_ribbo:'
    ],
    '🤿': [
        'Маска дайвинга',
        ':diving_mask:'
    ],
    '🦺': [
        'Безопасный жилет',
        ':safety_vest:'
    ],
    '🥻': [
        'Сари',
        ':sari:',
        'Сари',
        'Шари'
    ],
    '🩲': [
        'Брифинги',
        ':briefs:'
    ],
    '🩳': [
        'Шорты',
        ':shorts:'
    ],
    '🛼': [
        'Ролевые коньки',
        ':roller_skate:',
        'Встроенный коньк',
        'Роллер Дерби'
    ],
    '🩴': [
        'Флип Флоп',
        ':flip_flop:',
        'Сандаль'
    ],
    '🪖': [
        'Военный шлем',
        ':military_helmet:'
    ],
    '🩰': [
        'Балетные туфли',
        ':ballet_shoes:',
        'Точка Ботинок'
    ],
    '🩼': [
        'Crutch',
        ':crutch:'
    ]
};
/*hands and parts of body*/
emojis_language[lang][12] = {
    '👋{{skin_tone}}': [
        'Знак для Полосы',
        ':wave:',
        ':waving_hand:',
        'Прощай',
        'Ручная волна',
        'Привет',
        'Hi'
    ],
    '🖐️{{skin_tone}}': [
        'Рука с пальцами',
        ':hand_splayed:',
        ':raised_hand_with_fingers_splayed:',
        ':hand_with_fingers_splayed:',
        'Пять рук',
        'Сыграть руку',
        'Вызывается рукой с пальцами'
    ],
    '🤚{{skin_tone}}': [
        'Назад рукой',
        ':raised_back_of_hand:',
        ':back_of_hand:',
        'Задняя сторона'
    ],
    '✋{{skin_tone}}': [
        'Поднятая рука',
        ':raised_hand:',
        ':hand:',
        'Высокие пять',
        'Остановить'
    ],
    '🖖{{skin_tone}}': [
        'Vulcan Salute',
        ':vulcan_salute:',
        'Spock',
        'Звёздный Путь',
        'Вызывается рукой с частями между Средними и Кольцевыми пальцами'
    ],
    '👌{{skin_tone}}': [
        'ОК ручная подпись',
        ':ok_hand:',
        'Окей',
        'Идеально',
        'Да'
    ],
    '✌️{{skin_tone}}': [
        'Победа рука',
        ':victory_hand:',
        'Воздушные кавычки',
        'Знак мира',
        'Знак V'
    ],
    '🤞{{skin_tone}}': [
        'Скрещенные пальцы',
        ':crossed_fingers:',
        'Перекрест пальцев',
        'Удача',
        'Рука с индексом и средними пальцами перекрестила'
    ],
    '🤟{{skin_tone}}': [
        'Жест "Любовь"',
        ':love_you_gesture:',
        ':i_love_you_hand_sign:',
        'Я люблю тебя подписывать'
    ],
    '🤘{{skin_tone}}': [
        'Знак рогов',
        ':the_horns:',
        ':sign_of_the_horns:',
        ':metal:',
        'Злобные пальцы',
        'Тяжелый металл',
        'Камень на'
    ],
    '🤙{{skin_tone}}': [
        'Рука звонка',
        ':call_me_hand:',
        ':call_me:',
        'Рука телефона',
        'Шака'
    ],
    '🤏{{skin_tone}}': [
        'Привязка рук',
        ':pinching_hand:'
    ],
    '👈{{skin_tone}}': [
        'Задняя точка индекса слева',
        ':backhand_index_pointing_left:',
        ':point_left:',
        'Белый левый указатель фона'
    ],
    '👉{{skin_tone}}': [
        'Задняя точка указателя справа',
        ':backhand_index_pointing_right:',
        ':point_right:',
        'Белый правый указатель на заднем плане'
    ],
    '👆{{skin_tone}}': [
        'Задняя точка указателя',
        ':point_up_2:',
        ':backhand_index_pointing_up:',
        'Индекс очков Белого Вверх',
        'Средний палец'
    ],
    '👇{{skin_tone}}': [
        'Задняя точка вниз',
        ':point_down:',
        ':backhand_index_pointing_down:',
        'Белый нижний указатель фонового индекса',
        'Назначение вниз'
    ],
    '☝{{skin_tone}}': [
        'Индекс палец',
        ':point_up:',
        ':index_pointing_up:',
        'Индекс Очков Белого',
        'Секретный ключ'
    ],
    '🖕{{skin_tone}}': [
        'Средний палец',
        ':middle_finger:',
        'Переворот птицы',
        'Рудиный палец',
        'Вернуть руку с средним пальцем'
    ],
    '👍{{skin_tone}}': [
        'Подпись "Палец',
        ':thumbs_up_sign:',
        'Лайкнуть',
        'Да'
    ],
    '👎{{skin_tone}}': [
        'Знак "Палец Вниз"',
        ':thumbs_down_sign:',
        'Плохое',
        'Dislike',
        'Нет'
    ],
    '✊{{skin_tone}}': [
        'Поднятый кулак',
        ':raised_fist:',
        'Кулак'
    ],
    '👊{{skin_tone}}': [
        'Предстоящий кулак',
        ':oncoming_fist:',
        'Bro Fist',
        'Brofist',
        'Кулак кулака',
        'Удар',
        'Закрытый кулак',
        'Подпись из рук'
    ],
    '🤛{{skin_tone}}': [
        'Левый кулак',
        ':left_fist_bump:'
    ],
    '🤜{{skin_tone}}': [
        'Кулак справа',
        ':right_fist:bump:'
    ],
    '🤌{{skin_tone}}': [
        'Закрепленные пальцы',
        ':pinched_fingers:',
        'Ma Che Vuoi',
        'Кошельк пальца'
    ],
    '👏{{skin_tone}}': [
        'Знак рук',
        ':cap:',
        ':clapping_hands:',
        'Аппарат',
        'Clap',
        'Зажигание',
        'Захват Гольфа',
        'Круг апплиуза'
    ],
    '🙌{{skin_tone}}': [
        'Празднование обеих рук',
        ':raised_hands:',
        ':raising_hands:',
        'Рост рук',
        'Амуниция в воздухе',
        'Banzai',
        'Чудо Фестивуса',
        'Hallelujah',
        'Похвалить руки',
        'Две руки'
    ],
    '👐{{skin_tone}}': [
        'Знак открытых рук',
        ':open_hands_sign:',
        'Хуг',
        'Джазовые руки'
    ],
    '🤲{{skin_tone}}': [
        'Вверх ладони вместе',
        ':palms_up_together:',
        'Dua'
    ],
    '🤝{{skin_tone}}': [
        'Handshake',
        ':handshake:',
        'Встряхивание руками'
    ],
    '🙏{{skin_tone}}': [
        'Свернутые руки',
        ':folded_hands:',
        'Namaste',
        'Пожалуйста,',
        'Молитва',
        'Спасибо',
        'Человек с складывающимися руками'
    ],
    '✍{{skin_tone}}': [
        'Написание рук',
        ':writing_hand:'
    ],
    '🫱{{skin_tone}}': [
        'Правая рука',
        ':rightwards_hand:'
    ],
    '🫲{{skin_tone}}': [
        'Левая рука',
        ':leftwards_hand:'
    ],
    '🫳{{skin_tone}}': [
        'Палм вниз рука',
        ':palm_down_hand:'
    ],
    '🫴{{skin_tone}}': [
        'Вверх рукой',
        ':palm_up_hand:'
    ],
    '🫰{{skin_tone}}': [
        'Ручная рука с указателем пальца и пальца перекрещенная',
        ':hand_with_index_finger_and_thumb_crossed:'
    ],
    '🫵{{skin_tone}}': [
        'Указание индекса на просмотрщике',
        ':index_pointing_at_the_viewer:'
    ],
    '🫶{{skin_tone}}': [
        'Руки сердца',
        ':heart_hands:',
        'Любовь'
    ],
    '💪{{skin_tone}}': [
        'Искривленные бисеры',
        ':flexed_biceps:',
        'Плечевые мышцы',
        'Musle',
        'Крепкий'
    ],
    '🦵{{skin_tone}}': [
        'Нога',
        ':leg:'
    ],
    '🦶{{skin_tone}}': [
        'Пешком',
        ':foot:'
    ],
    '👂{{skin_tone}}': [
        'Ухо',
        ':ear:',
        'Уши',
        'Слушание',
        'Слушает'
    ],
    '👃{{skin_tone}}': [
        'Нос',
        ':nose:',
        'Пахучий',
        'Снижение',
        'Stinky'
    ],
    '🦻{{skin_tone}}': [
        'Уши с помощью слуха',
        ':ear_with_hearing_aid:'
    ],
    '🧠': [
        'Мозг',
        ':brain:',
        ':pink:'
    ],
    '🦷': [
        'Зуб',
        ':tooth:',
        ':white:'
    ],
    '👀': [
        'Глаза',
        ':eyes:',
        'Глазные яйца',
        'Свирепые глаза',
        'Мудрые глаза'
    ],
    '👁️': [
        'Око',
        ':eye:',
        'Одиночный глаз'
    ],
    '👅': [
        'Язык вне',
        ':tongue_out:',
        ':red:'
    ],
    '👄': [
        'Мышь',
        ':mouth:',
        'Поцелуи',
        'Липсы',
        ':red:'
    ],
    '🫦': [
        'Укус',
        ':biting_lip:',
        'Липсы',
        ':red:'
    ],
    '🫀': [
        'Анатомическое сердце',
        ':anatomical_heart:',
        ':red:'
    ],
    '🫁': [
        'Легкие',
        ':lungs:',
        ':red:'
    ],
    '🦾': [
        'Механическая Амуниция',
        ':mechanical_arm:',
        'Крепкий',
        ':gray:',
        ':grey:'
    ],
    '🦿': [
        'Механическая нога',
        ':mechanical_leg:',
        ':gray:',
        ':grey:'
    ],
    '💅{{skin_tone}}': [
        'Польский гвоздей',
        ':nail_polish:',
        'Палец',
        'Manicure',
        'Nonchalant'
    ],
    '🤳{{skin_tone}}': [
        'Селфи',
        ':selfie:',
        'Камера телефона',
        'Селфи Рука'
    ]
};
/*other*/
emojis_language[lang][13] = {
    '💩': [
        'Куча Пуо',
        ':pile_of_poo:',
        'Грязь собак',
        'Улыбающийся палец',
        ':brown:'
    ],
    '💋': [
        'Поцелуй Марк',
        ':kiss_mark:',
        'Поцелуи',
        ':red:'
    ],
    '🦴': [
        'Кость',
        ':bone:'
    ],
    '🧳': [
        'Багаж',
        ':luggage:',
        'Чехия'
    ],
    '🌂': [
        'Закрытый Зонтик',
        ':closed_umbrella:',
        'Свернутый Звонок',
        'Розовый зонтик',
        ':pink:',
        ':purple:'
    ],
    '☂️': [
        'Зонтик',
        ':umbrella:',
        ':purple:'
    ],
    '☔': [
        'Зонтик с дождями',
        ':umbrella_with_rain_drops:',
        ':umbrella:',
        'Дождь',
        'Rainy'
    ],
    '🧵': [
        'Спутник темы',
        ':spool_of_thread:'
    ],
    '🧶': [
        'Шар Ярна',
        ':ball_of_yarn:'
    ],
    '💄': [
        'Lipstick',
        ':lipstick:',
        'Кусок глосс',
        'Макияж',
        ':red:'
    ],
    '💍': [
        'Кольцо',
        ':ring:',
        'Алмазное кольцо',
        'Воинственное кольцо'
    ],
    '💎': [
        'Драгоценный камень',
        ':gem_stone:',
        'Алмазный',
        'Самоцвет',
        'Самоцветы',
        'Джевел',
        ':blue:'
    ],
    '💥': [
        'Символ столкновения',
        ':collision_symbol:',
        'Банг',
        'Взрывать',
        'Влияние',
        'Красный Искр',
        'Взрыв'
    ],
    '💫': [
        'Символ Диззи',
        ':dizzy_symbol:',
        'Круг и звезда',
        ':yellow:'
    ],
    '💦': [
        'Символ «Разрушитель»',
        'капли пота',
        'sweat_droplets',
        'Плеуды',
        'Взрывная вода',
        'Капли воды',
        ':blue:'
    ],
    '💨': [
        'Мягкое перемещение',
        ':dashing_away:',
        'Быстрое',
        'Пар',
        'Вэйвинг',
        'Ветер',
        'Символ Dash',
        'Порыв ветра'
    ],
    '🌬️': [
        'Ветерное лицо',
        ':wind_face:',
        'Воздуходушие',
        'Мать Природа',
        'Ветерное лицо',
        ':white:'
    ],
    '🐾': [
        'Лапчатые принты',
        ':paw_prints:',
        'Печать лапы кота',
        'Печать лапы собак',
        'Котёночные лапы',
        'Печать щенка лапы'
    ],
    '🕸️': [
        'Паук Веб',
        ':spider_web:',
        'Cobweb',
        'Веб',
        'Паук'
    ],
    '🦠': [
        'Микробе',
        ':microbe:',
        'Ген',
        'Коронавирус',
        'СОВЕРШИТЬ-19',
        'Шерм',
        'Микроорганизм',
        'Вирус',
        ':green:'
    ],
    '💐': [
        'Букет цветов',
        ':bouquet_of_flowers:'
    ],
    '🌍': [
        'Отображение глаза Европа-Африка',
        ':globe_showing_europe_africa:',
        ':earth_africa:',
        'Земля',
        'Глобус',
        'Планета',
        'Мир',
        'Globe Showing Europe and Africa',
        ':blue:'
    ],
    '🌎': [
        'Глобус отображает Америку',
        ':globe_showing_americas:',
        ':earth_americas:',
        'Земля',
        'Глобус',
        'Планета',
        'Мир',
        ':blue:'
    ],
    '🌏': [
        'Отображение глаза Азия-Австралия',
        ':globe_showing_asia_australia:',
        ':earth_asia:',
        'Земля',
        'Глобус',
        'Планета',
        'Мир',
        'Globe Showing Asia and Australia',
        ':blue:'
    ],
    '🌐': [
        'Глобус с Меридианами',
        ':globe_with_meridians:',
        'Интернет',
        'Всемирная паутина',
        'WWW'
    ],
    '🌑': [
        'Символ Новой Луны',
        ':new_moon:',
        'Темная Луна',
        'Теневая Луна',
        'Солнечный Затмение',
        ':black:'
    ],
    '🌒': [
        'Символ "Волшебный Полумесяц"',
        ':waxing_crescent_moon:',
        ':yellow:',
        ':black:'
    ],
    '🌓': [
        'Символ первой четверти Луны',
        ':first_quarter_moon:',
        ':yellow:',
        ':black:'
    ],
    '🌔': [
        'Символ "Волшебная Луна"',
        ':moon:',
        ':waxing_gibbous_moon:',
        ':yellow:',
        ':black:'
    ],
    '🌕': [
        'Символ Полной Луны',
        ':full_moon:',
        ':yellow:'
    ],
    '🌖': [
        'Символ "Жуткая Луна"',
        ':waning_gibbous_moon:',
        ':yellow:',
        ':black:'
    ],
    '🌗': [
        'Символ "Последняя четвертая Луна"',
        ':last_quarter_moon:',
        ':yellow:',
        ':black:'
    ],
    '🌘': [
        'Символ Странствующей Луны',
        ':waning_crescent_moon:',
        ':yellow:',
        ':black:'
    ],
    '🌙': [
        'Луна Полумесяца',
        ':crescent_moon:',
        ':yellow:'
    ],
    '🌚': [
        'Новая Луна с лицом',
        ':new_moon_with_face:',
        'Жуткая Луна',
        'Черное Лунное Лицо',
        'Лунная молекула',
        ':black:',
        ':gray:',
        ':grey:'
    ],
    '🌝': [
        'Полная Луна с лицом',
        ':full_moon_with_face:',
        'Moonface',
        'Смайлиная Луна',
        'Улыбающаяся луна',
        ':yellow:'
    ],
    '🌛': [
        'Первая четвертая луна с лицом',
        ':first_quarter_moon_with_face:',
        ':first_quarter_moon_face:',
        ':yellow:'
    ],
    '🌜': [
        'Последняя четвертая луна с лицом',
        ':last_quarter_moon_with_face:',
        ':last_quarter_moon_face:',
        ':yellow:'
    ],
    '🌞': [
        'Солнце с лица',
        ':sun_with_face:',
        'Смайлиное солнце',
        'Sunface',
        'Улыбающееся солнце',
        ':yellow:'
    ],
    '☀️': [
        'Вс',
        ':sun:',
        'Солнечный свет',
        ':yellow:'
    ],
    '⭐': [
        'Звезда',
        ':star:',
        'Белая звезда',
        ':yellow:'
    ],
    '🌟': [
        'Светящаяся звезда',
        ':glowing_star:',
        'Сияющая звезда',
        ':yellow:'
    ],
    '☁️': [
        'Облако',
        ':cloud:',
        'Облачно',
        'Оверлей',
        ':white:'
    ],
    '⛅': [
        'ВС за облаком',
        ':thunder_cloud_and_rain:',
        ':thunder_cloud_rain:',
        ':cloud_with_lightning_and_rain:',
        ':white:'
    ],
    '⛈️': [
        'Облако с Молниеносными и Дождями',
        ':thunder_cloud_and_rain:',
        ':thunder_cloud_rain:',
        ':cloud_with_lightning_and_rain:',
        'Облако грома и дождь',
        ':white:'
    ],
    '🌤️': [
        'Белое Солнце с Малым Облаком',
        ':mostly_sunny:',
        ':sun_behind_small_cloud:',
        ':sun_small_cloud:',
        ':white_sun_small_cloud:',
        ':white_sun_with_small_cloud:',
        ':white:'
    ],
    '🌥️': [
        'Солнце за большим облаком',
        ':sun_behind_large_cloud:',
        'Белое Солнце За Облаком',
        ':white:'
    ],
    '🌦️': [
        'Белое Солнце За Облаком с Дождем',
        ':sun_behind_rain_cloud:',
        ':partly_sunny_rain:',
        ':white_sun_rain_cloud:',
        ':white_sun_behind_cloud_with_rain:',
        ':white:'
    ],
    '🌧️': [
        'Облако с Дождем',
        ':cloud_with_rain:',
        ':white:'
    ],
    '🌨️': [
        'Облако со снегом',
        ':cloud_with_snow:',
        ':white:'
    ],
    '🌩️': [
        'Облако с Молниеносными',
        ':cloud_with_lightning:',
        ':white:'
    ],
    '🌪️': [
        'Торнадо',
        ':tornado:',
        'Облако с Tornado'
    ],
    '🌫️': [
        'Fog',
        ':fag:',
        ':white:',
        ':gray:',
        ':grey:'
    ],
    '🌈': [
        'Радуга',
        ':rainbow:',
        'Гордость Гей',
        'Первичная радуга',
        'LGBTQIA+',
        'ЛГБТ +'
    ],
    '❄️': [
        'Снежинка',
        ':snowflake:',
        'Снег',
        'Снег',
        ':white:'
    ],
    '🌀': [
        'Циклон',
        ':cyclone:',
        'Ураган',
        'Спираль',
        'Вихрь',
        'Торнадо'
    ],
    '⚡': [
        'Знак высокого напряжения',
        ':high_voltage_sign:',
        'Молния',
        'Молния Грома',
        'Высокое напряжение'
    ],
    '☃️': [
        'Снеговик',
        ':snowman:',
        'Снеговик со снежинками',
        ':white:'
    ],
    '⛄': [
        'Снеговик без снега',
        'снеговик_без снега',
        ':snowman:',
        'Ледяной Снеговик',
        'Olaf',
        'Снеговик',
        ':white:'
    ],
    '☄️': [
        'Комета',
        ':comet:'
    ],
    '🔥': [
        'Огонь',
        ':fire:',
        'Пламя',
        'Горячая',
        'Lit',
        'Серия снимков',
        ':red:'
    ],
    '💧': [
        'Droplet',
        ':droplet:',
        'Вода',
        'Падение воды',
        ':blue:'
    ],
    '✨': [
        'Искры',
        ':sparkles:',
        'Блестящий',
        'Shiny',
        'Новый'
    ],
    '🌊': [
        'Волна воды',
        ':water_wave:',
        'Пляж',
        'Океанская волна',
        'Море',
        ':blue:'
    ],
    '🎄': [
        'Рождественское дерево',
        'ромашка_дерево',
        'Рождество',
        'Рождественский Дерево',
        ':green:'
    ],
    '🎃': [
        'Як-О-Фонарь',
        'джек-фонарь',
        'Halloween',
        'Тыква',
        ':orange:'
    ],
    '🌻': [
        'Подсолнечник',
        ':sunflower:',
        'Жёлтый цветок',
        ':yellow:'
    ],
    '🌼': [
        'Blossom',
        ':blossom:',
        'Цветущий цветок',
        'Daisy',
        'Жёлтый цветок',
        ':yellow:'
    ],
    '🌷': [
        'Tulip',
        ':tulip:',
        ':pink:'
    ],
    '🌹': [
        'Розовый цветок',
        ':rose_flower:',
        'Красная Роза',
        ':red:'
    ],
    '☘️': [
        'Шамрок',
        ':shamrock:',
        'Клевер',
        'Трефоил',
        ':green:'
    ],
    '🍀': [
        'Четыре листового клевера',
        ':four_leaf_clover:',
        'Клевер',
        'Ирландия',
        'Счастливый',
        'Удача',
        ':green:'
    ],
    '🌸': [
        'Cherry Blossom',
        ':cherry_blossom:',
        'Розовый цветок',
        'Sakura',
        ':pink:'
    ],
    '💮': [
        'Белый цветок',
        ':white_flower:',
        'Cherry Blossom',
        'Бумага Двери',
        'Орден «Готово»',
        ':white:'
    ],
    '🌺': [
        'Hibiscus',
        ':hibiscus:',
        ':red:'
    ],
    '🏵️': [
        'Розет',
        ':rosette:',
        ':orange:',
        ':yellow:'
    ],
    '🌱': [
        'Саженец',
        ':seedling:',
        'Весна',
        'Sprout',
        'Прыжок',
        ':green:'
    ],
    '🌲': [
        'Вечнозелёное дерево',
        ':evergreen_tree:',
        'Дерево',
        'Сосновое дерево',
        ':green:'
    ],
    '🌳': [
        'Обильное Дерево',
        ':deciduous_tree:',
        'Округлённое дерево',
        ':green:'
    ],
    '🌴': [
        'Древо ладоней',
        ':palm_tree:',
        'Кокосовое дерево',
        ':green:'
    ],
    '🎋': [
        'Дерево Танабата',
        ':tanabata_tree:',
        'Tanabata',
        'Дерево желаний'
    ],
    '🎍': [
        'Сосна',
        ':pine_decoration:',
        'Бамбук',
        'Кадомацу',
        'Новогодний облик'
    ],
    '🌵': [
        'Cactus',
        ':cactus:',
        'Desert',
        ':green:'
    ],
    '🌾': [
        'Шуф риса',
        ':sheaf_of_rice:',
        'Обрезать',
        'Сельское хозяйство',
        'Пшеница',
        'Ухо риса'
    ],
    '🌿': [
        'Трава',
        ':herb:',
        'Обрезать',
        'Растение',
        ':green:'
    ],
    '🍁': [
        'Клен лист',
        ':maple_leaf:',
        'Канада',
        'Канадский',
        'Клен',
        ':brown:'
    ],
    '🍂': [
        'Падший лист',
        ':fallen_leaf:',
        'Осенний лист',
        'Осенние листья',
        'Коричневые листья',
        'Осенняя листва',
        'Падшие листья',
        ':brown:'
    ],
    '🍃': [
        'Листье фланца в ветре',
        ':leaf_fluttering_in_wind:',
        ':leaves:',
        'Зелёные листья',
        'Весна',
        ':green:'
    ],
    '🪴': [
        'Картофельное растение',
        ':potted_plant:',
        ':green:'
    ],
    '🪸': [
        'Корал',
        ':coral:',
        'Изменение климата'
    ],
    '🪷': [
        'Лотос',
        ':lotus:',
        'Чистота',
        'Красота',
        'Спокойствие',
        'Серьезность'
    ],
    //"🪻": ["Hyacinth", ":hyacinth:", "Purple flower", ":purple:"],
    //"🫛": ["Pea Pod", ":pea_pod:", ":green:"],
    //"🫚": ["Ginger root", ":ginger:", "Spice", "Flavour", ":brown:"],
    '🔑': [
        'Спецификация',
        ':key:',
        'Золотой Ключ',
        ':gold:',
        ':yellow:'
    ],
    '🗝️': [
        'Старый ключ',
        ':old_key:',
        ':brown:'
    ],
    '🔨': [
        'Молот',
        ':hammer:',
        'Молот из когтей',
        'Handyman',
        'Инструмент'
    ],
    '⛏️': [
        'Выбрать',
        ':pick:',
        'Кирка'
    ],
    '🪓': [
        'Топор',
        ':axe:',
        'firefighter'
    ],
    '🪚': [
        'Плотниковая пила',
        ':carpentry_saw:'
    ],
    '🪛': [
        'Водитель отвертки',
        ':screwdriver:'
    ],
    '🪝': [
        'Хук',
        ':hook:'
    ],
    '🪠': [
        'Plunger',
        ':plunger:'
    ],
    '🪣': [
        'Ведро',
        ':bucket:'
    ],
    '🔩': [
        'Нут и Болт',
        ':nut_and_bolt:',
        'Болт',
        'Винт',
        ':gray:',
        ':grey:'
    ],
    '🗜️': [
        'Клип',
        ':clamp:',
        'Таблица Vice',
        'WinZip',
        'Сжатие',
        ':gray:',
        ':grey:'
    ],
    '🔒': [
        'Заблокировано',
        ':locked:',
        'Закрытая блокировка',
        'Падлок'
    ],
    '🔓': [
        'Разблокирован',
        ':unlocked:',
        'Открыть Padlock',
        'Открыть блокировку'
    ],
    '🔏': [
        'Заблокировано ручкой',
        ':locked_with_pen:',
        'Заблокировать и Pen',
        'Заблокировать с фонтаном',
        'Заблокировать чернилами'
    ],
    '🔐': [
        'Заблокирован ключом',
        ':locked_with_key:',
        'Закрытая блокировка ключом'
    ],
    '🗡️': [
        'Dagger',
        ':dagger:',
        'Ножи-оружие',
        ':gray:',
        ':grey:'
    ],
    '⚔️': [
        'Скрещенные мечи',
        ':crossed_swords:',
        ':gray:',
        ':grey:'
    ],
    '🔫': [
        'Pistol',
        ':pistol:',
        'Пистолет',
        'Револьвер',
        'Пистолет',
        'Водная Пушка',
        'Водный пистолет'
    ],
    '🧰': [
        'Инструменты',
        ':toolbox:',
        ':red:'
    ],
    '🧲': [
        'Магнит',
        ':magnet:',
        ':red:'
    ],
    '⛓️': [
        'Цепи',
        ':chains:'
    ],
    '💉': [
        'Syringe',
        ':syringe:',
        'Вклад крови',
        'Тест крови',
        'Иглы',
        'Вакцинация',
        'blood',
        'sick',
        'ill'
    ],
    '🧬': [
        'ДНК',
        ':dna:',
        'Двойная Спираль ДНК'
    ],
    '🧪': [
        'Тестовая лампа',
        ':test_tube:',
        ':green:'
    ],
    '🛏️': [
        'Кровать',
        ':bed:',
        'Спальня'
    ],
    '🛋️': [
        'Диван и Лампа',
        ':couch_and_lamp:',
        'Лаунж',
        'Установи',
        'Диван'
    ],
    '🪑': [
        'Стул',
        ':chair:'
    ],
    '🚪': [
        'Дверь',
        ':door:',
        'Дверь',
        'Передняя дверь'
    ],
    '🪟': [
        'Окно',
        ':window:'
    ],
    '🪜': [
        'Лестница',
        ':ladder:'
    ],
    '🪞': [
        'Зеркало',
        ':mirror:'
    ],
    '🚽': [
        'Туалет',
        ':toilet:',
        'Ванная комната',
        'Лоо',
        'Restroom',
        'WC',
        ':white:'
    ],
    '🚿': [
        'Ливень',
        ':shower:',
        'Душевая голова',
        ':shower:'
    ],
    '🛁': [
        'Баттуб',
        ':bathtub:',
        'Пузырьковая ванна',
        ':shower:'
    ],
    '🧴': [
        'Бутылка лосьона',
        ':location_bottle:'
    ],
    '🧷': [
        'Безопасный пин',
        ':safety_pin:',
        ':gray:',
        ':grey:'
    ],
    '🧺': [
        'Корзина',
        ':basket:',
        ':brown:'
    ],
    '🧻': [
        'Roll of Paper',
        ':roll_of_paper:',
        'Туалетная бумага',
        ':white:'
    ],
    '🧼': [
        'Бар мыла',
        ':bar_of_soap:'
    ],
    '🧽': [
        'Sponge',
        ':sponge:',
        ':yellow:'
    ],
    '🧯': [
        'Огнетушитель',
        ':fire_extinguisher:',
        ':red:'
    ],
    '🚬': [
        'Сигарета',
        ':cigarette:',
        'Символ дыма'
    ],
    '⚰️': [
        'Гроб',
        ':coffin:',
        'Casket',
        'Похороны',
        ':brown:'
    ],
    '⚱️': [
        'Урн Похорон',
        ':funeral_urn:',
        'Ваза'
    ],
    '🛡️': [
        'Щит',
        ':shield:'
    ],
    '⚙️': [
        'Снаряжение',
        ':gear:',
        'Настройки',
        'Варианты',
        ':gray:',
        ':grey:'
    ],
    '⚖️': [
        'Масштаб баланса',
        ':balance_scale:',
        'Чешуя правосудия'
    ],
    '🔗': [
        'Ссылка',
        ':link:',
        'Цепь',
        'Гиперссылка',
        'Связанная цепь',
        ':gray:',
        ':grey:'
    ],
    '💀': [
        'Череп',
        ':skull:',
        'Смерть',
        'Серый череп',
        'Скелет',
        ':white:'
    ],
    '☠️': [
        'Череп и арбалет',
        ':skull_and_crossbones:',
        ':white:'
    ],
    '🎡': [
        'Колесо Ферриса',
        ':ferris_wheel:',
        'Большое колесо',
        'Fairgroundl',
        'Колесо наблюдения'
    ],
    '⛽': [
        'Топливный насос',
        'топлив_насос:',
        'Нефть',
        'Бензин',
        'Газ',
        ':red:'
    ],
    '🚨': [
        'Оборотный фонарь Полицейского Автомобиля',
        ':rotating_light:',
        ':police_police_car:',
        'Свет экстренной помощи',
        'Мигание света',
        'Siren',
        ':red:'
    ],
    '🚥': [
        'Горизонтальный светофор',
        ':horizontal_traffic_light:',
        ':green:',
        ':red:',
        ':yellow:',
        ':orange:'
    ],
    '🚦': [
        'Вертикальный светофор',
        ':vertical_traffic_light:',
        ':green:',
        ':red:',
        ':yellow:',
        ':orange:'
    ],
    '⚓': [
        'Адмиралтейский Якорь',
        ':anchor:',
        'Рыбак'
    ],
    '🚧': [
        'Знак Строительства',
        ':construction_sign:',
        'Черная и жёлтая Табличка',
        ':yellow:',
        ':black:'
    ],
    '🪂': [
        'Parachute',
        ':parachute:'
    ],
    '💺': [
        'Сиденье',
        ':seat:',
        'Поездка на автобусе'
    ],
    '🪐': [
        'Сатурн',
        ':saturn:'
    ],
    '🎆': [
        'Фейерверк',
        ':fireworks:',
        'Взрыв'
    ],
    '🎇': [
        'Senko Hanabi',
        ':senko_hanabi:',
        'Искривление Фейерверка'
    ],
    '💷': [
        'Фунт банкнота',
        ':pound:',
        ':pound_banknote:',
        'Примечание £20',
        'Примечание 20 кв. м.',
        'Банкнот с Фунт-Знаком',
        ':purple:'
    ],
    '💶': [
        'Euro Banknote',
        ':euro:',
        ':euro_banknote:',
        '€100 Нота',
        'Банковская накладная',
        ':blue:'
    ],
    '💵': [
        'Доллар Банкнот',
        ':dollar:',
        ':dollar_banknote:',
        'Примечание $1',
        'Банкноты с знаком доллара',
        'Доллар Билл',
        'Американский доллар',
        ':green:'
    ],
    '💴': [
        'Банкнот йен',
        ':yen:',
        ':yen_banknote:',
        '¥1000 Примечание',
        'Заметка йен',
        'Банкноты с знаком иен',
        ':yellow:'
    ],
    '⛺': [
        'Кемпинговая палатка',
        ':camping_tent:'
    ],
    '⛲': [
        'Фонтан',
        ':fountain:',
        'Водные возможности',
        'Водный фонтан',
        'Парк'
    ],
    '💰': [
        'Мешок',
        ':money_bag:',
        'Олигарх',
        'Богатый',
        '$'
    ],
    '💸': [
        'Деньги с крыльями',
        ':money_with_wings:',
        'Полет Деньги',
        ' Потеря денег'
    ],
    '🏷️': [
        'Метка метки',
        ':label_tag:'
    ],
    '🔖': [
        'Закладка',
        ':bookmark:',
        'Тег цены',
        'Тег'
    ],
    '📑': [
        'Закладки',
        ':bookmark_tabs:',
        ':white:'
    ],
    '📯': [
        'Почтовый рог',
        ':postal_horn:',
        'Bugle',
        'Французский рог'
    ],
    '🪁': [
        'Кайт',
        ':kite:',
        ':purple:'
    ],
    '🪀': [
        'Йо-Йо',
        ':yo_yo:',
        ':yo-yo:'
    ],
    '🎊': [
        'Confetti Ball',
        ':confetti_ball:',
        'Confetti'
    ],
    '🎉': [
        'Всплеск Вечеринки',
        ':party_popper:',
        'Праздник',
        'Вечеринка'
    ],
    '🎈': [
        'Шарик',
        ':balloon:',
        'Вечеринка',
        'Красный шар',
        ':red:'
    ],
    '🌡️': [
        'Термометр',
        ':thermometer:',
        'Горячая погода',
        'Температура',
        ':red:'
    ],
    '🛢️': [
        'Нефтяной барабан',
        ':oil_drum:'
    ],
    '💣': [
        'Бомба',
        ':bomb:',
        'boom'
    ],
    '🔪': [
        'Кухонный нож',
        ':kitchen_knife:',
        'Нож',
        'Нож Мясников',
        'Hocho'
    ],
    '🏺': [
        'Amphora',
        ':amphora:',
        'Джар',
        'Ваза'
    ],
    '🗺️': [
        'Карта мира',
        ':world_map:'
    ],
    '🎼': [
        'Музыкальный балл',
        ':musical_score:',
        'Листовая музыка',
        'Treble Clef'
    ],
    '🎬': [
        'Доска для цилиндров',
        ':clapper_board:',
        'Вырезать',
        'Действие',
        'Директор',
        'Пленка'
    ],
    '🎻': [
        'Скрипт',
        ':violin:',
        'Квартет строк',
        'Самый маленький скрипик в мире'
    ],
    '🎺': [
        'Труба',
        ':trumpet:',
        'Рог',
        'Джаз'
    ],
    '🎸': [
        'Гитар',
        ':guitar:',
        'Акустическая гитара',
        'Бас гитара',
        'Электрическая гитара'
    ],
    '🎷': [
        'Саксофон',
        ':saxophone:',
        'Джаз',
        'Сакс'
    ],
    '🥁': [
        'Барабан',
        ':drum:',
        'Барабан с барабанами'
    ],
    '🎹': [
        'Пианино',
        ':piano:',
        'Музыкальная клавиатура',
        ':white:',
        ':black:'
    ],
    '🪕': [
        'Банджо',
        ':banjo:'
    ],
    '🪗': [
        'Аккордеон',
        ':accordion:'
    ],
    '🪘': [
        'Длинный барабан',
        ':long_drum:'
    ],
    '🎨': [
        'Художник-палитра',
        ':artist_palette:',
        'Искусство',
        'Картина'
    ],
    '🧩': [
        'Часть головоломки',
        ':puzzle_piece:',
        'Головоломка',
        ':green:'
    ],
    '🎲': [
        'Кость игры',
        ':game_die:',
        'Кости',
        ':white:'
    ],
    '🎭': [
        'Выполнение искусств',
        'выполняет_арты',
        'Театр',
        'Театр',
        'Маски драмы',
        'Греческие маски театра',
        'Маски трагедии и комедии',
        'Венеция'
    ],
    '🔍': [
        'Увеличительное стекло - Левый',
        ':mag:',
        ':magnifying_glass_tilted_left:',
        'Magnifier',
        'Иконка поиска',
        'Увеличительное левое стекло',
        'Найти',
        ':transparent:'
    ],
    '🔎': [
        'Увеличительное стекло - справа',
        ':mag_right:',
        ':magnifying_glass_tilted_right:',
        'Magnifier',
        'Иконка поиска',
        'Усиление правого стекла',
        'Найти',
        ':transparent:'
    ],
    '⌛': [
        'Почасовой стакан',
        ':hourglass:',
        ':hourglass_done:',
        'Часы'
    ],
    '⏳': [
        'Не выбрано часовое стекло',
        ':hourglass_flowing_sand:',
        ':hourglass_not_done:',
        'Песочный Часовой Стеклянный Песок'
    ],
    '🕐': [
        'Один OClock',
        ':clock1:',
        ':one_oclock:',
        'Часы грани 1 OClock',
        ':gray:',
        ':grey:'
    ],
    '🕜': [
        'Часы лица один-тридцать',
        ':clock130:',
        ':one_thirty:',
        ':gray:',
        ':grey:'
    ],
    '🕑': [
        'Две OClock',
        ':clock2:',
        ':two_oclock:',
        'Часы лица 2 ОШИБКА',
        ':gray:',
        ':grey:'
    ],
    '🕝': [
        'Часы лица два-тридцать',
        ':clock230:',
        ':two_thirty:',
        ':gray:',
        ':grey:'
    ],
    '🕒': [
        'Три Окрака',
        ':clock3:',
        ':three_oclock:',
        'Часовой Град Три Окраха',
        ':gray:',
        ':grey:'
    ],
    '🕞': [
        'Часы лица тридцатьдесят',
        ':clock330:',
        ':three_thirty:',
        ':gray:',
        ':grey:'
    ],
    '🕓': [
        'Четыре очки',
        ':clock4:',
        ':four_oclock:',
        'Часы лица Four OClock',
        ':gray:',
        ':grey:'
    ],
    '🕟': [
        'Часы лица четыре-тридцать',
        ':clock430:',
        ':four_thirty:',
        ':gray:',
        ':grey:'
    ],
    '🕔': [
        'Пять Окраинов',
        ':clock5:',
        ':five_oclock:',
        'Часы граната 5 Осторожность',
        ':gray:',
        ':grey:'
    ],
    '🕠': [
        'Часы лица Пять-тридцать',
        ':clock530:',
        ':five_thirty:',
        ':gray:',
        ':grey:'
    ],
    '🕕': [
        'Шесть ОШИБКА',
        ':clock6:',
        ':size_oclock:',
        'Часы Лицо Шесть ОШИБКА',
        ':gray:',
        ':grey:'
    ],
    '🕡': [
        'Часы лица Шестьдесят тридцать',
        ':clock630:',
        ':six_thirty:',
        ':gray:',
        ':grey:'
    ],
    '🕖': [
        'Семь ОЧЕРЕВ',
        ':clock7:',
        ':seven_oclock:',
        'Часы - семерка OClock',
        ':gray:',
        ':grey:'
    ],
    '🕢': [
        'Часы лица седьмый-тридцать',
        ':clock730:',
        ':sever_thirty:',
        ':gray:',
        ':grey:'
    ],
    '🕗': [
        'Восемь Огласовки',
        ':clock8:',
        ':eight_oclock:',
        'Часы грани 8 Осторожность',
        ':gray:',
        ':grey:'
    ],
    '🕣': [
        'Часы лица восьмой-тридцать',
        ':clock830:',
        ':eight_thirty:',
        ':gray:',
        ':grey:'
    ],
    '🕘': [
        'Девять часов',
        ':clock9:',
        ':nine_clock:',
        'Девять часов часов',
        ':gray:',
        ':grey:'
    ],
    '🕤': [
        'Девять тридцать часов часов',
        ':clock930:',
        ':nine_thirty:',
        ':gray:',
        ':grey:'
    ],
    '🕙': [
        'Десять OClock',
        ':clock10:',
        ':ten_oclock:',
        'Часы - Десять OClock',
        ':gray:',
        ':grey:'
    ],
    '🕥': [
        'Тьма Часов Тридцатая',
        ':clock1030:',
        ':ten_thirty:',
        ':gray:',
        ':grey:'
    ],
    '🕚': [
        'Eleven OClock',
        ':click11:',
        ':eleven_oclock:',
        'Одиннадцатиглая часов часов',
        ':gray:',
        ':grey:'
    ],
    '🕦': [
        'Часы Лицо Одиннадцать',
        ':clock1130:',
        ':eleven_thirty:',
        ':gray:',
        ':grey:'
    ],
    '🕛': [
        'Двенадцать OClock',
        ':clock12:',
        ':twelve_oclock:',
        'Часы Двенадцать OClock',
        ':gray:',
        ':grey:'
    ],
    '🕧': [
        'Часы Двенадцать-тридцать',
        ':clock1230:',
        ':twelve_thirty:',
        ':gray:',
        ':grey:'
    ],
    '♨️': [
        'Горячие источники',
        ':hot_springs:',
        'Onsen',
        'Пар',
        ':red:'
    ],
    '💈': [
        'Барбер Полюс',
        ':barber_pole:',
        'Магазин Барберов',
        'Полосы Барберса',
        'Прическа',
        ':blue:',
        ':red:'
    ],
    '🎪': [
        'Цирковая палатка',
        ':circus_tent:',
        'Большой Верх',
        'Цирк'
    ],
    '💢': [
        'Символ гнева',
        ':anger_symbol:',
        'Знак гнева',
        'Поп жила',
        ':red:'
    ],
    '🗯️': [
        'Сообщения Правая Гнезда',
        ':right_anger_bubble:',
        ':anger_right:',
        'Zig Zag Bubble',
        'Яростный Сообщения',
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
        'Капсула',
        'Планшет',
        'Наркотики',
        'Sick',
        'ill',
        ':yellow:',
        ':red:'
    ],
    '🎎': [
        'Куклы',
        ':dolls:',
        'Hinamatsuri',
        'Куклы',
        'Японские куклы'
    ],
    '🎏': [
        'Стример Карп',
        ':carp_streamer:',
        'Флаг Рыбы',
        'Koinobori',
        'Ветеры'
    ],
    '🎐': [
        'Ветер',
        ':wind_chime:',
        'Furin',
        'Медуза',
        'Колокольчик ветра'
    ],
    '🎀': [
        'Лента лука',
        ':ribbon_bow:',
        'Розовый лук',
        'Лук',
        ':pink:'
    ],
    '🎁': [
        'Завернутый подарок',
        ':wrapped_gift:',
        'Подарок на день рождения',
        'Подарок Рождества',
        'Подарок',
        'Подарок',
        'Подарочный',
        'Упакованный подарок'
    ],
    '🎫': [
        'Билет',
        ':ticket:',
        'Заглушка тикета',
        'Билет мирового тура'
    ],
    '🃏': [
        'Джокер',
        ':joker:',
        'Карточка Джокера',
        'Играет в черный джойзер'
    ],
    '💡': [
        'Лампочка',
        ':light_bulb:',
        'Идея',
        'Электрическая лампа'
    ],
    '🔦': [
        'Фонарик',
        ':flashlight:',
        'Фонарь',
        'Электрический Факел'
    ],
    '🏮': [
        'Красный Бумажный Фонарь',
        ':izakaya_lantern:',
        ':lantern:',
        ':red_paper_lantern:',
        'Азиатский фонарь',
        'Японский фонарь',
        'Красный фонарь',
        'Изакая Фонарь',
        ':red:'
    ],
    '📦': [
        'Пакет',
        ':package:',
        'Блок',
        'Посылка',
        ':brown:'
    ],
    '📇': [
        'Карточка индекса',
        ':card_index:',
        'Роликс',
        'Системная карта',
        'Карточный индекс'
    ],
    '🕳️': [
        'Дыра',
        ':hole:',
        ':black:'
    ],
    '👁️‍🗨️': [
        'Я являюсь свидетелем',
        ':eye_in_speech_bubble:',
        ':eye_speech_bubble:',
        ':eye-in-speech-bubble:',
        'Сообщения Глаз в речи'
    ],
    '⚜️': [
        'Fleur-de-lis',
        ':fleur_de_lis:',
        'Разведчики',
        'Новый Орлеанский Святой'
    ],
    '⚗️': [
        'Alembic',
        ':alembic:'
    ],
    '🕯️': [
        'Свеча',
        ':candle:',
        ':white:'
    ],
    '🖼️': [
        'Картина в рамке',
        ':framed_picture:',
        'Картина',
        'Рамка для изображения',
        'Фрейм с изображением'
    ],
    '🛍️': [
        'Корзина',
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
        'Заявки на прием',
        ':admission_tickets:'
    ],
    '🛎️': [
        'Bellhop Bell',
        ':bellhop_bell:',
        ':yellow:',
        ':gold:'
    ],
    '🧾': [
        'Квитанция',
        ':receipt:',
        ':white:'
    ],
    '🧮': [
        'Abacus',
        ':abacus:'
    ],
    '🧫': [
        'Рыба-Петри',
        ':petri_dish:'
    ],
    '🧹': [
        'Мяч',
        ':broom:',
        'Кисть',
        'Сдвинуть',
        ':yellow:'
    ],
    '🎰': [
        'Игровой автомат',
        ':slot_machine:',
        'Казино',
        'Фруктовая машина',
        'Азартные игры',
        'Покерный Автомат'
    ],
    '🦽': [
        'Ручное кресло-коляска',
        ':manual_wheelchair:',
        ':wheelchair:'
    ],
    '🦼': [
        'Моторное кресло-коляска',
        ':motorized_wheelchair:'
    ],
    '🪔': [
        'Фонарь Дия',
        ':diya_lamp:'
    ],
    '🦯': [
        'White Cane',
        ':whie_cane:'
    ],
    '🩸': [
        'Кровь',
        ':drop_of_blood:',
        ':red:'
    ],
    '🩹': [
        'Фандаж адгезии',
        ':adhesive_bandage:'
    ],
    '🩺': [
        'Стетоскоп',
        ':stethoscope:'
    ],
    '🪶': [
        'Перо',
        ':feather:'
    ],
    '🪤': [
        'Ловушка мыши',
        ':mouse_trap:'
    ],
    '🫖': [
        'Teapot',
        ':teapot:'
    ],
    '🪨': [
        'Камень',
        ':rock:',
        ':gray:',
        ':grey:'
    ],
    '🪵': [
        'Дерево',
        ':wood:',
        ':brown:'
    ],
    '🪄': [
        'Волшебная палочка',
        ':magin_wand:'
    ],
    '🔮': [
        'Хрустальный шар',
        ':crystal_ball:',
        'Clairvoyant',
        'Счастливый Продавец',
        'Психический',
        'Фиолетовый кристалл',
        ':purple:'
    ],
    '🪅': [
        'Пиньята',
        ':pinata:',
        ':piñata:'
    ],
    '🪆': [
        'Вложенные Куклы',
        ':nesting_dolls:',
        'Матрешка'
    ],
    '🪡': [
        'Сшитая Игла',
        ':swing_needle:'
    ],
    '🪢': [
        'Узел',
        ':knot:',
        ':red:',
        ':blue:'
    ],
    '🪙': [
        'Монета',
        ':coin:'
    ],
    '🪃': [
        'Boomerang',
        ':boomerang:',
        ':brown:'
    ],
    '🪥': [
        'Кисть',
        ':toothbrush:'
    ],
    '🪦': [
        'Надгробие',
        ':headstone:',
        ':gray:',
        ':grey:'
    ],
    '🪧': [
        'Placard',
        ':placard:'
    ],
    '🪒': [
        'Бритвор',
        ':razor:'
    ],
    '🫙': [
        'Джар',
        ':jar:',
        ':transparent:'
    ],
    '🛞': [
        'Колесо',
        ':wheel:',
        'Автомобили',
        'Автомобили',
        ':black:'
    ],
    '🛟': [
        'Спасательный круг',
        ':ring_buoy:',
        'Хранитель Жизни',
        'Кольцо Жизни',
        'Лодки',
        'Безопасность',
        'Вода',
        'Сохранение жизни',
        ':red:',
        ':white:'
    ],
    '🪬': [
        'Хамса Амулет',
        ':hamsa:',
        'Islam',
        'Иудаизм',
        'Buddhism',
        'Христианство',
        'Религии',
        'Очки Удачи',
        'Защита',
        'Руководство',
        'Женская сила',
        'Вера',
        ':blue:'
    ],
    '🪩': [
        'Зеркальный шар',
        ':mirror_ball:',
        'Диско Шар'
    ],
    '🪫': [
        'Низкий заряд',
        ':low_battery:',
        ':red:',
        'Энергия',
        'Красный'
    ],
    '🩻': [
        'Рентген',
        ':x_ray:',
        ':x-ray:',
        ':blue:'
    ],
    '🫧': [
        'Пузыри',
        ':bubbles:',
        'Мыло сапоги',
        'Карбонат',
        'Деревянная личность',
        ':transparent:'
    ],
    '🪪': [
        'Идентификационная карточка',
        ':identification_card:',
        'Личность',
        'Паспорт',
        'ID'
    ],
    '🧿': [
        'Амулет Назар',
        ':nazar_amulet:',
        'Злой глаз',
        ':blue:'
    ],
    '🧸': [
        'Медведь Тедди',
        ':teddy_bear:',
        'Игрушка',
        ':brown:'
    ]
};