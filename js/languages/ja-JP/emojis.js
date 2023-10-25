// descriptions took from Emojipedia.org
lang = 'ja';
//use i18n language code of the browser, more details: https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/i18n/LanguageCode
titles_language[lang] = {
    '🔍': '結果',
    '🕒': '最も使用される絵文字',
    '😀': 'スマイリー',
    '🙋': '人',
    '🦊': '動物',
    '🅰️': '記号',
    '🍎': '食べ物と飲み物',
    '🏳️‍🌈': 'フラグ',
    '🏊': 'スポーツ',
    '✈️': '旅行と場所',
    '🖱️': '技術とオフィス',
    '👗': '洋服・アクセサリー',
    '🖐️': '手と体の部品',
    '🛎️': 'その他'
};
emojis_language[lang] = [];
/*search*/
emojis_language[lang][0] = {};
/*smileys*/
emojis_language[lang][2] = {
    '😀': [
        'ニヤニヤ顔',
        ':grinning:',
        ':grinning_face:',
        '::):',
        '幸せな顔',
        '笑顔'
    ],
    '😃': [
        '大きな目でニヤニヤした顔',
        ':smiley:',
        ':grinning_face_with_big_eyes:',
        '::D:',
        '幸せな顔',
        '笑顔',
        '口を開けた笑顔'
    ],
    '😄': [
        '笑顔の瞳でニヤニヤする顔',
        ':smile:',
        ':grinning_face_with_smiling_eyes:',
        '幸せな顔',
        '笑顔',
        '目を細めてニヤニヤする顔',
        '開いている口とにこやかな目の笑顔'
    ],
    '😁': [
        'にこやかな目の笑顔',
        ':grin:',
        ':beaming_face_with_smiling_eyes:',
        '笑顔の瞳でニヤニヤする顔'
    ],
    '😆': [
        '目を細めてニヤニヤする顔',
        ':grinning_squinting_face:',
        ':xD:',
        ':><:',
        '満面の笑み',
        '目を閉じた笑顔',
        '笑う',
        'しっかり閉じられた目でニヤニヤする顔',
        '開いた口としっかりと閉じた目の笑顔'
    ],
    '😅': [
        '汗をかいて笑う顔',
        ':happy_sweat:',
        '運動',
        '汗をかいた笑顔',
        '目を細めて汗をかきながらニヤニヤする顔',
        '口を開けて冷や汗をかいた笑顔'
    ],
    '🤣': [
        'ROFL',
        ':rofl:',
        '笑いながら床を転げまわる'
    ],
    '😂': [
        '嬉し涙を流す顔',
        ':lol:',
        '笑う',
        '笑い泣き',
        '笑い涙',
        'LOL'
    ],
    '🙂': [
        '微笑む顔',
        ':smile:',
        '::):',
        '少しハッピー',
        '問題ない'
    ],
    '🙃': [
        '逆さまの顔',
        ':upside-down_face:',
        ':upside_down_face:',
        '皮肉',
        '馬鹿',
        '逆さまの顔'
    ],
    '😉': [
        'ウィンキングフェイス',
        ':winking:',
        ':;):',
        'ウィンク',
        'ウインク顔',
        'ウィンクした顔'
    ],
    '😊': [
        '笑顔の瞳で顔',
        ':smiling_face:',
        ':^^:',
        '幸せな顔',
        'スマイル',
        '笑顔'
    ],
    '😇': [
        'Haloで笑顔で顔',
        ':smiling_angel:',
        'Angel',
        'Halo'
    ],
    '🥰': [
        '心のある笑顔の顔',
        ':smiling_hearts:',
        'ラブフェイスで',
        '笑顔の瞳と3つの心で顔'
    ],
    '😍': [
        'ハートアイで笑顔で顔',
        'love',
        ':smiling_heart-eyes:',
        ':smiling_heart_eyes:',
        ':*.*:',
        'Heart Eyes',
        'Heart Face',
        'Smiling Face with Heart-Shaped Eyes'
    ],
    '🤩': [
        'Star-Strak',
        ':star_eyes:',
        '興奮しました',
        '星の目',
        'Starry Eyed',
        'うわー顔',
        '星の目と顔',
        '星の目でニヤニヤする顔'
    ],
    '😘': [
        '顔がキスを吹いている',
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
        'キス顔',
        'kiss',
        ':kissing_face:',
        '::*:',
        '::-*:',
        'Duck Face',
        'Kissy Face',
        'Whistling'
    ],
    '☺️': [
        '笑顔の顔',
        ':smiling_face:',
        '幸せな顔',
        '笑顔',
        '笑顔',
        '白い笑顔の顔'
    ],
    '😚': [
        '閉じた目でキスする顔',
        ':kissing_face:',
        'キス顔',
        'Kissy Face'
    ],
    '😙': [
        '笑顔の瞳でキスする',
        ':kissing_face:',
        'キス顔',
        'Kissy',
        '命令書',
        '命令中'
    ],
    '😋': [
        '食材を節約する',
        ':savoring_face:',
        'Goofy',
        'お腹が空いた',
        '微笑む顔舐め',
        '顔を満喫するおいしい料理',
        'Yum Yum'
    ],
    '😛': [
        '舌との顔',
        ':tongue_face:',
        '::P:',
        '生意気な',
        '舌の顔',
        'トゥングアウト',
        '立ち往生の舌と顔'
    ],
    '😜': [
        '舌とウインキングフェイス',
        ':winking:',
        ':;P:',
        'クレイジー',
        'クレイジーな顔',
        'スタックアウト舌とウインク顔',
        '立ち往生舌とウインキングアイとの顔'
    ],
    '🤪': [
        'Zany Face',
        ':crazy_face:',
        'クレイジーアイズ',
        '興奮しました',
        'Wild',
        'Goofy Face',
        '1つの大きな1つの小さな目でニヤニヤする顔'
    ],
    '😝': [
        '舌でしゃがんでいる顔',
        ':tongue_face:',
        ':xP:',
        'Tongue Out',
        '舌と緊密に閉じられた目との顔',
        '立ち往生の舌と密閉された目との顔'
    ],
    '🤑': [
        'お金の口の顔',
        ':money-mouth_face:',
        ':money_mouth_face:',
        '::$:',
        'ドル看板の目',
        'お金の顔',
        'Rich'
    ],
    '🤗': [
        '抱きしめる顔',
        ':hugging_face:',
        'ハグ',
        'ハグ中',
        'Hugs',
        '抱きしめる手で幸せな顔'
    ],
    '🤭': [
        'おっと',
        ':oops:',
        '手をつないで顔',
        '笑顔の瞳と口を覆う手の笑顔の顔'
    ],
    '🤫': [
        'Shh',
        ':shushing_face:',
        'Shush',
        'Shushing Face',
        'Hush',
        'Quiet',
        'サイレント',
        'サイレントモード',
        '指で蓋を閉めた唇を覆う顔'
    ],
    '🤔': [
        'What',
        ':thinking_face:',
        '?',
        'うーん...',
        '思考する顔',
        'チンヒモ',
        'シンカー',
        'スローシェード'
    ],
    '🤐': [
        '郵便番号',
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
        '上げられた眉と顔',
        ':face_with_raised_eyebrow:',
        'コルベール語',
        '岩',
        '上げられた眉で顔',
        '1つの眉を上げた顔'
    ],
    '😐': [
        '中立顔',
        ':neutral_face:',
        ':|',
        'ストレート口を持つ顔',
        'まっすぐに向きます'
    ],
    '😑': [
        '表現のない顔',
        ':expressionless_face:',
        '-_-',
        'ストレート口を持つ顔',
        'まっすぐな顔'
    ],
    '😶': [
        '口のない顔',
        ':face_without_mouth:',
        '空白の顔',
        'Mouthless',
        'サイレント',
        'サイレントモード'
    ],
    '😏': [
        '面を<unk>',
        ':smirking_face:',
        'フリrting',
        '性的な顔',
        'スマグ面',
        'おすすめの笑顔'
    ],
    '😒': [
        '名前のない顔',
        ':unamused_face:',
        '不満です',
        'Meh',
        'サイドアイ',
        '感動しない'
    ],
    '🙄': [
        'ローリングアイと顔',
        ':face_with_rolling_eye:',
        ':eye_roll:',
        'アイロール'
    ],
    '😬': [
        'Grimacing Face',
        ':awkward:',
        'Awkward',
        'Eek',
        '足元の山',
        '神経質な',
        'Snapchat相互の#1ベスト 友人'
    ],
    '🤥': [
        '横たわっている顔',
        ':lying_face:',
        'Liar',
        '長い鼻孔（長い鼻）',
        'Pinocchio'
    ],
    '😌': [
        '救助された顔',
        ':relieved_face:',
        'コンテンツ',
        '喜んでください'
    ],
    '😔': [
        '申し訳ありません',
        ':sad_face:',
        'Pensive Face',
        'Pensivo',
        '悲しいです',
        'Sadface',
        '悲しみに満ちた',
        '悲しい情熱的な顔'
    ],
    '😪': [
        '眠い顔',
        ':sleepy_face:',
        'サイドティール',
        '鼻バブル'
    ],
    '🤤': [
        'Saliva',
        ':saliva_face:',
        'Drooling Face',
        'Drool'
    ],
    '😴': [
        '眠れる顔',
        ':sleeping_face:',
        ':zzz:',
        'Zzz',
        '睡眠面',
        'いびき',
        'Zzz Face'
    ],
    '🥱': [
        'あくびの顔',
        'tired',
        ':yawning_face:'
    ],
    '😷': [
        '医療用マスクとの顔',
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
        '体温計と顔',
        ':face_with_thermometer:',
        ':sick:',
        ':ill:',
        'Ill',
        '病気なし'
    ],
    '🤕': [
        '頭包帯付き顔',
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
        '吐き気を引き起こした顔',
        'sick',
        ':nauseated_face:',
        'Disgust',
        'Green Face',
        'Vomit',
        ':green:',
        'ill'
    ],
    '🤮': [
        '顔の嘔吐物',
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
        'くしゃみ顔',
        'sick',
        ':sneezing_face:',
        'Gesundheit',
        'ill'
    ],
    '🥵': [
        'ホットフェイス',
        ':hot_face:',
        '過熱した顔',
        ':red:'
    ],
    '🥶': [
        '冷たい顔',
        ':cold_face:',
        'クール',
        '<unk>',
        '凍結面',
        ':blue:'
    ],
    '🥴': [
        'Woozy Face',
        ':woozy_face:',
        '酔った顔',
        '不規則な目とWavy Mouth との顔'
    ],
    '😵': [
        'Dizzy Face',
        ':dizzy_face:',
        '十字の目',
        '螺旋の目'
    ],
    '🤯': [
        '爆発する頭',
        'boom',
        ':exploding_head:',
        'Mind Blown',
        'Shocked Face with Exploding Head'
    ],
    '🤠': [
        'カウボーイハットの顔',
        ':cowboy_hat_face:',
        'カウボーイ',
        'カウボーイの顔',
        'カウボーイの帽子と顔'
    ],
    '🥳': [
        'パーティーの顔',
        ':partying_face:',
        'Party Face',
        'パーティーホーンとパーティーハットとの顔'
    ],
    '😎': [
        'サングラスで笑顔の顔',
        ':smiling_face_with_sunglasses:',
        'クール',
        '相互の親友（ナップチャット）',
        'サングラス(黒)'
    ],
    '🤓': [
        'オタクの顔',
        ':nerd_face:',
        'Nerdy'
    ],
    '🧐': [
        'モノクレとの顔',
        ':face_with_monocle:'
    ],
    '😕': [
        '混乱した顔',
        ':confused_face:',
        '::/:',
        '::S:',
        'Nonplused',
        'パズルを解き'
    ],
    '😟': [
        '不安な顔',
        ':worried_face:',
        '::(:',
        '悲しいです',
        'Sadface'
    ],
    '🙁': [
        'わずかに眉をひそめる顔',
        ':slightly_frowning_face:',
        '::(:',
        '少し悲しいです'
    ],
    '☹️': [
        '眉をひそめる顔',
        ':frowning_face:',
        '::(:',
        'メガフローン',
        '白色の眉をひそめる顔'
    ],
    '😮': [
        'Wow',
        ':wow:',
        '::O:',
        'ああ！',
        '口を開けて直面する',
        '口を開く',
        'オープン口でびっくりした顔'
    ],
    '😯': [
        '消音面',
        ':husked_face:',
        '::O:',
        'サプライズformat@@0',
        'びっくりした顔'
    ],
    '😲': [
        'ショックを受けた顔',
        ':shocked_face:',
        '::O:',
        'Wow',
        '立派な顔',
        '酔った顔',
        'Gasping Face'
    ],
    '😳': [
        '顔をフラッシュする',
        ':flushed_face:',
        '::$:',
        '顔の赤面',
        'Embarrassed',
        '恥ずかしさ',
        '広い目を持つ顔'
    ],
    '🥺': [
        '前に出る顔',
        ':pleading_face:',
        '::(:',
        '要求中',
        '艶やかな目',
        'Simp',
        '前髪の目と顔'
    ],
    '😦': [
        '口を開けて顔をしかめている',
        ':frowning_face_with_open_mouth:',
        ':D::',
        'あくびをする'
    ],
    '😨': [
        '怖い',
        ':scared:',
        ':D::',
        '恐怖の顔',
        'びっくりした'
    ],
    '😰': [
        '汗と不安な顔',
        ':anxious_face_with_sweat:',
        '青い顔',
        '心配している顔',
        '神経質な顔',
        'オープン口と冷たい汗との顔'
    ],
    '😥': [
        '悲しいけど救われた顔',
        ':sad_but_relieved_face:',
        '::(:',
        '眉毛',
        '失望しているが救われた顔'
    ],
    '😢': [
        '泣き顔',
        ':crying_face:',
        '::(:',
        '泣きます',
        'Tear'
    ],
    '😭': [
        '大声で泣く顔',
        ':loudly_crying_face:',
        'Bawling',
        '泣きます',
        '悲しい涙の数',
        'Sobbing'
    ],
    '😱': [
        '恐怖の中の顔の叫び声',
        ':face_screaming_in_fear:',
        'ホームアローン',
        'スクリーム',
        '絶叫面'
    ],
    '😖': [
        '確立された顔',
        ':confounded_face:',
        '震える口',
        'スクラッチされた顔'
    ],
    '😣': [
        '継続的な顔',
        ':persevering_face:',
        '無力な顔',
        'スクランチされた目'
    ],
    '😞': [
        '失望した顔',
        ':disappointed_face:',
        '::(:',
        '悲しいです',
        'Sadface'
    ],
    '😓': [
        '汗をかいて顔を滑らせ',
        ':downcast_face_with_sweat:',
        'ハードワーク',
        '悲しい汗の顔',
        '冷たい汗と向き合い'
    ],
    '😩': [
        'ウェアラブルフェイス',
        ':weary_face:',
        '困惑した顔',
        '嘆き'
    ],
    '😫': [
        '疲れた顔',
        ':tired_face:',
        '期限切れです',
        'Fed Up',
        '困惑した顔'
    ],
    '😤': [
        '鼻からの蒸気と顔',
        ':face_with_steam_from_nose:',
        '悲しみの空気',
        'フラストレーション',
        'マッドフェイス',
        '蒸し',
        '怒りの顔を抱きしめている'
    ],
    '😡': [
        'ポーティング顔',
        'fuck',
        ':pouting_face:',
        'Angry Face',
        'Grumpy Face',
        'Mad Face',
        'Red Face',
        ':red:'
    ],
    '😠': [
        '怒った顔',
        ':angry_face:',
        'Angry',
        '不機嫌な顔'
    ],
    '🤬': [
        '<unk>',
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
        '涙で顔を笑顔にする',
        ':smiling_face_with_tear:'
    ],
    '😮‍💨': [
        '顔を吐き',
        ':face_exhaling:',
        'ため息をつく。'
    ],
    '😵‍💫': [
        'スパイラルアイとの顔',
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
        '偽装した顔',
        ':disguised_face:'
    ],
    '🫠': [
        '溶ける顔',
        ':melting_face:'
    ],
    '🫢': [
        'オープンアイズと手をつないで顔',
        ':face_with_open_eyes_and_hand_over_mouth:'
    ],
    '🫣': [
        '顔を覗かせる目',
        ':face_with_peeking_eye:'
    ],
    '🫡': [
        '挨拶する顔',
        ':saluting_face:',
        'Militar',
        'Tropas',
        'RAF',
        '海軍format@@0'
    ],
    '🫥': [
        '点線の面',
        ':dotted_line_face:',
        ':transparent:'
    ],
    '🫤': [
        '対角線で対峙する',
        ':face_with_diagonal_mouth:'
    ],
    '🥹': [
        '背中の涙を向ける顔',
        ':face_holding_back_tears:'
    ],
    //"🫨": ["Shaking Face", ":shaking_face:"],
    '😈': [
        '角との笑顔の顔',
        ':smiling_face_with_horns:',
        'Devil',
        '悪魔の角',
        'Happy Devil',
        '紫色の悪魔たち',
        '赤き悪魔たち',
        ':purple:'
    ],
    '👿': [
        '角と怒っている顔',
        ':angry_face_with_horns:',
        'Devil',
        '悪魔の角',
        '紫色の悪魔たち',
        '紫色の小悪魔たち',
        'Sad Devil',
        'Imp',
        ':purple:'
    ],
    '🤡': [
        'ピエロの顔',
        ':clown_face:',
        '不気味なピエロ。',
        '邪悪なピエロ。',
        '怖いピエロ（ピエロ）'
    ],
    '👽': [
        'Alien',
        ':alien:',
        'ET'
    ],
    '👾': [
        'エイリアンモンスター',
        ':alien_monster:',
        'スペースインベーダー',
        'ビデオゲームモンスター'
    ],
    '🤖': [
        'Robot',
        ':robot:',
        'ロボットの顔'
    ],
    '👹': [
        'Ogre',
        ':ogre:',
        'マスクの顔',
        'Oni',
        '赤いモンスター',
        '日本のOgre',
        ':red:'
    ],
    '👻': [
        'おばけ',
        ':ghost:',
        'Halloween'
    ],
    '🗣️': [
        'スピーキングヘッド',
        ':speaking_head:',
        'Mansplaining',
        'Shout',
        'Shouting',
        'シルエットで話している頭',
        ':blue:'
    ],
    '👤': [
        'シルエットでバスト',
        ':bust_in_silhouette:',
        '影',
        'Silhouette',
        'ユーザー',
        'Silhouette of Person',
        ':blue:'
    ],
    '🫂': [
        '人を襲って',
        ':people_hugging:',
        ':blue:'
    ],
    '👥': [
        'シルエットのバスト',
        ':busts_in_silhouette:',
        '影',
        'Silhouettes',
        'ユーザー',
        '二人のシルエット。',
        ':blue:'
    ]
};
/*people*/
emojis_language[lang][3] = {
    '👶{{skin_tone}}': [
        '赤ちゃん',
        ':baby:',
        '子要素',
        'Toddler'
    ],
    '🧒{{skin_tone}}': [
        '子要素',
        ':child:',
        '性別中立子供'
    ],
    '👧{{skin_tone}}': [
        '女の子',
        ':girl:',
        ':woman:'
    ],
    '🧑{{skin_tone}}': [
        '人',
        ':person:',
        '性別中立大人',
        '大人',
        ':person:'
    ],
    '🧑{{skin_tone}}': [
        '人物：ひげ。',
        ':person_beard:',
        'ひげ（ひげ）',
        'ひげを生やした人',
        'ひげを生やした人',
        ':person:'
    ],
    '🧑{{skin_tone}}‍🦰': [
        '人物：赤い髪',
        ':person_red_hair:',
        'Ginger Person',
        'ユーザーのRedhead',
        '赤い髪をした人',
        ':person:'
    ],
    '🧑{{skin_tone}}‍🦱': [
        '人物：カーリー髪',
        ':person_curly_hair:',
        'カーリーヘアを持つ人',
        ':person:'
    ],
    '🧑{{skin_tone}}‍🦳': [
        '人物：白い髪',
        ':person_white_hair:',
        '灰色の髪をした人',
        ':person:'
    ],
    '🧑{{skin_tone}}‍🦲': [
        '人物：<unk>',
        ':person_bald:',
        '髪のない人',
        ':person:'
    ],
    '👱{{skin_tone}}': [
        '人物：金髪の髪',
        ':person_blond_hair:',
        '金髪を持つ人',
        ':person:'
    ],
    '👨{{skin_tone}}': [
        '男',
        ':man:',
        '男性',
        '口ひげ男',
        ':man:'
    ],
    '🧔{{skin_tone}}‍♂️': [
        '男性：ひげを生やし',
        ':man_beard:',
        'ひげ（ひげ）',
        '髭の男',
        'ひげを生やした人',
        ':man:'
    ],
    '👨{{skin_tone}}‍🦰': [
        '男性：赤い髪',
        ':man_red_hair:',
        'ジンジャーマン',
        'Man Redhead',
        '赤い髪をした男',
        ':man:'
    ],
    '👨{{skin_tone}}‍🦱': [
        '男性：カーリー髪',
        ':man_curly_hair:',
        'カーリーヘアの男',
        ':man:'
    ],
    '👨{{skin_tone}}‍🦳': [
        '男性：白い髪',
        ':man_white_hair:',
        '灰色の髪をした男',
        ':man:'
    ],
    '👨{{skin_tone}}‍🦲': [
        '男性：<unk>',
        ':man_bald:',
        '髪の無い男',
        ':man:'
    ],
    '👱{{skin_tone}}‍♂️': [
        '男性：金髪。',
        ':man_blond_hair:',
        '金髪の男',
        ':man:'
    ],
    '👩{{skin_tone}}': [
        '女性',
        ':woman:',
        '女性',
        'レディー',
        '黄色の女性',
        ':woman:'
    ],
    '🧔{{skin_tone}}‍♀️': [
        '女性：ひげを生やし',
        ':woman_beard:',
        'ひげ（ひげ）',
        '髭の女',
        ':woman:'
    ],
    '👩{{skin_tone}}‍🦰': [
        '女性：赤い髪',
        ':woman_red_hair:',
        '生姜の女',
        'Woman Redhead',
        '赤い髪をした女性',
        ':woman:'
    ],
    '👩{{skin_tone}}‍🦱': [
        '女性：カーリー髪',
        ':woman_curly_hair:',
        'カーリーヘアの女性',
        ':woman:'
    ],
    '👩{{skin_tone}}‍🦳': [
        '女性：白い髪',
        ':woman_white_hair:',
        '灰色の髪をした女性',
        ':woman:'
    ],
    '👩{{skin_tone}}‍🦲': [
        '女性：<unk>',
        ':woman_bald:',
        '髪のない女性',
        ':woman:'
    ],
    '👱{{skin_tone}}‍♀️': [
        '女性：金髪の髪',
        ':woman_blond_hair:',
        '金髪の女性',
        ':woman:'
    ],
    '👴{{skin_tone}}': [
        '年配の男',
        ':older_man:',
        ':older:',
        '年配の男',
        'Grandpa',
        'おっさん',
        ':man:'
    ],
    '👵{{skin_tone}}': [
        '年配の女性',
        ':older_woman:',
        ':older:',
        '年配女性',
        'おばあちゃん',
        'Nanna',
        '老女',
        '老女',
        ':woman:'
    ],
    '🧓{{skin_tone}}': [
        '古い人',
        ':older_person:',
        ':older:',
        '性別中立年上大人',
        ':person:'
    ],
    '👼{{skin_tone}}': [
        '赤ちゃんの天使',
        ':baby_angel:',
        'Angel',
        'Cherub',
        'キューピッド',
        'プット'
    ],
    '👨{{skin_tone}}‍🎄': [
        'サンタクロース語',
        ':santa_claus:',
        'セント・ニコラス島',
        'Sinterklaas',
        '父のクリスマス',
        ':man:'
    ],
    '👩{{skin_tone}}‍🎄': [
        'Claus',
        ':mrs_claus:',
        '母のクリスマス',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🎄': [
        'Mx Claus',
        ':mx_clause:',
        'クリスマスの人',
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
        'ブロンドの少女',
        'クラウンを持つ女の子',
        'ティアラ',
        ':woman:'
    ],
    '🫅{{skin_tone}}': [
        'クラウンを持つ人',
        ':person_with_crown:',
        ':person:'
    ],
    '👳{{skin_tone}}‍♂️': [
        'ターバンを着た男',
        ':man_wearing_turban:',
        ':wearing_turban:',
        'Arab',
        'ムスリム向け',
        'シーク語',
        'ターバン',
        ':man:'
    ],
    '👳{{skin_tone}}‍♀️': [
        'ターバンを着た女性',
        ':woman_wearing_turban:',
        ':wearing_turban:',
        'Arab',
        'ムスリム向け',
        'シーク語',
        'ターバン',
        ':woman:'
    ],
    '👳{{skin_tone}}': [
        'ターバンを装着している人',
        ':person_wearing_turban:',
        ':wearing_turban:',
        'Arab',
        'ムスリム向け',
        'シーク語',
        'ターバン',
        ':person:'
    ],
    '👲{{skin_tone}}': [
        'Skullcapを持つ人',
        ':person_with_skullcap:',
        'アジアン マン',
        '中国の帽子をかぶった男',
        'Guaのパイ毛を持つ男',
        ':person:'
    ],
    '🧕{{skin_tone}}': [
        'ヘッドスカーフを持つ女性',
        ':woman_with_headscarf:',
        'Hijab',
        'ヘッドスカーフを持つ人',
        ':woman:'
    ],
    '🤵{{skin_tone}}‍♀️': [
        'タキシードの男',
        ':man_in_tuxedo:',
        ':tuxedo:',
        'Groom',
        'スーツを着た男',
        'ウェディング',
        ':man:'
    ],
    '🤵{{skin_tone}}‍♂️': [
        'タキシードの女性',
        ':woman_in_tuxedo:',
        ':tuxedo:',
        'Groom',
        'スーツ姿の女性',
        'ウェディング',
        ':woman:'
    ],
    '🤵{{skin_tone}}': [
        'タキシードにいる人',
        ':person_in_tuxedo:',
        ':tuxedo:',
        'Groom',
        'スーツ姿の人物',
        'ウェディング',
        ':person:'
    ],
    '👰{{skin_tone}}‍♂️': [
        'ベールを着た男',
        ':man_with_veil:',
        ':veil:',
        'ウェディング',
        '花嫁部屋',
        '結婚',
        ':man:'
    ],
    '👰{{skin_tone}}‍♀️': [
        'ヴェールを持つ女性',
        ':woman_with_veil:',
        ':veil:',
        'ウェディング',
        '花嫁さん',
        'ベール付きの花嫁たち',
        '結婚',
        ':woman:'
    ],
    '👰{{skin_tone}}': [
        'ベールを持った人',
        ':person_with_veil:',
        ':veil:',
        'ウェディング',
        '結婚',
        ':person:'
    ],
    '👨{{skin_tone}}‍🍼': [
        '男性の餌やりの赤ちゃん',
        ':man_feeding_baby:',
        ':feeding_baby:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🍼': [
        '赤ちゃんに餌をやる女性',
        ':woman_feeding_baby:',
        ':feeding_baby:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🍼': [
        '餌やりの赤ちゃん',
        ':person_feeding_baby:',
        ':feeding_baby:',
        ':person:'
    ],
    '🥷': [
        'Ninja',
        ':ninja:'
    ],
    '🫃{{skin_tone}}': [
        '妊娠中の男',
        ':pregnant_man:',
        ':pregnant:',
        '妊娠',
        ':man:'
    ],
    '🤰{{skin_tone}}': [
        '妊娠中の女性',
        ':pregnant_woman:',
        ':pregnant:',
        '妊娠',
        '妊娠している女性',
        ':woman:'
    ],
    '🫄{{skin_tone}}': [
        '妊娠している人',
        ':pregnant_person:',
        ':pregnant:',
        '妊娠',
        ':person:'
    ],
    '🤱{{skin_tone}}‍': [
        '乳房への餌付け',
        ':breast-feeding:',
        ':breast_feeding:',
        '<unk>'
    ],
    '🦸{{skin_tone}}‍♂️': [
        'スーパーヒーロー男',
        ':man_superhero:',
        ':superhero:',
        ':man:'
    ],
    '🦸{{skin_tone}}‍♀️': [
        'スーパーヒーロー女',
        ':woman_superhero:',
        ':superhero:',
        ':woman:'
    ],
    '🦸{{skin_tone}}': [
        'スーパーヒーロー者',
        ':person_superhero:',
        ':superhero:',
        ':person:'
    ],
    '🦹{{skin_tone}}‍♂️': [
        '男の極悪者',
        ':man_supervillain:',
        ':supervillain:',
        ':man:'
    ],
    '🦹{{skin_tone}}‍♀️': [
        '女の極悪者',
        ':woman_supervillain:',
        ':supervillain:',
        ':woman:'
    ],
    '🦹{{skin_tone}}': [
        '超悪役者',
        ':person_supervillain:',
        ':supervillain:',
        ':person:'
    ],
    '🧙{{skin_tone}}‍♂️': [
        '男メイジ',
        ':man_mage:',
        ':mage:',
        'Sorcerer',
        'ウィザード',
        ':man:'
    ],
    '🧙{{skin_tone}}‍♀️': [
        '女のメイジ',
        ':woman_mage:',
        ':mage:',
        'Witch',
        'Sorceress',
        'ウィザード',
        ':woman:'
    ],
    '🧙{{skin_tone}}': [
        'Por Mage',
        ':person_mage:',
        ':mage:',
        'ウィザード',
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
        '女性の妖精たち',
        ':woman_fairy:',
        ':fairy:',
        ':woman:'
    ],
    '🧚{{skin_tone}}': [
        '妖精さん',
        ':person_fairy:',
        ':fairy:',
        ':person:'
    ],
    '🧛{{skin_tone}}‍♂️': [
        '男のヴァンパイア',
        ':man_vampire:',
        ':vampire:',
        'ドラキュラ',
        ':man:'
    ],
    '🧛{{skin_tone}}‍♀️': [
        '女ヴァンパイア',
        ':woman_vampire:',
        ':vampire:',
        ':woman:'
    ],
    '🧛{{skin_tone}}': [
        'ヴァンパイア',
        ':person_vampire:',
        ':vampire:',
        ':person:'
    ],
    '🧜{{skin_tone}}‍♂️': [
        'マーマン',
        ':merman:',
        'Merboy',
        ':man:'
    ],
    '🧜{{skin_tone}}‍♀️': [
        '人魚語',
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
        '男のエルフ',
        ':man_elf:',
        ':elf:',
        ':man:'
    ],
    '🧝{{skin_tone}}‍♀️': [
        '女妖精（へんへん）',
        ':woman_elf:',
        ':elf:',
        ':woman:'
    ],
    '🧝{{skin_tone}}': [
        'エルフ',
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
        'Genie 氏',
        ':person_genie:',
        ':genie:',
        ':person:'
    ],
    '🕵️{{skin_tone}}‍♂️': [
        '男のDetective',
        ':man_detective:',
        ':detective:',
        'プライベートアイ',
        'Sleuth',
        '<unk>',
        'Man Sleuth',
        '真実かスパイか',
        '007',
        'Inspector',
        ':man:'
    ],
    '🕵️{{skin_tone}}‍♀️': [
        '女性のDetective',
        ':woman_detective:',
        ':detective:',
        'プライベートアイ',
        'Sleuth',
        '<unk>',
        '女の<unk>',
        '真実かスパイか',
        '007',
        'Inspector',
        ':woman:'
    ],
    '🕵{{skin_tone}}': [
        '探偵者',
        ':person_detective:',
        ':detective:',
        'プライベートアイ',
        'Sleuth',
        '<unk>',
        'Sleuth',
        '真実かスパイか',
        '007',
        'Inspector',
        ':person:'
    ],
    '💂{{skin_tone}}‍♂️': [
        'Man: Guard',
        ':man_guard:',
        ':guard:',
        'ブリティッシュ・ガードマン',
        '足のガード',
        ':man:'
    ],
    '💂{{skin_tone}}‍♀️': [
        '女性：見張り人',
        ':woman_guard:',
        ':guard:',
        'ブリティッシュ・ガードマン',
        '足のガード',
        ':woman:'
    ],
    '💂{{skin_tone}}': [
        '人物：ガード',
        ':person_guard:',
        ':guard:',
        'ブリティッシュ・ガードマン',
        '足のガード',
        ':person:'
    ],
    '👮{{skin_tone}}‍♂️': [
        '警察官',
        ':man_police_officer:',
        ':police_officer:',
        'コップ',
        '警察',
        '警察官',
        ':man:'
    ],
    '👮{{skin_tone}}‍♀️': [
        '女警察官',
        ':woman_police_officer:',
        ':police_officer:',
        'コップ',
        '警察',
        '警察官語',
        ':woman:'
    ],
    '👮{{skin_tone}}': [
        '警察官',
        ':person_police_officer:',
        ':police_officer:',
        'コップ',
        '警察',
        ':person:'
    ],
    '👨{{skin_tone}}‍🚒': [
        '男の<unk>',
        ':man_firefighter:',
        ':firefighter:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🚒': [
        '女性の<unk>',
        ':woman_firefighter:',
        ':firefighter:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🚒': [
        '消防士（人）',
        ':person_firefighter:',
        ':firefighter:',
        ':person:'
    ],
    '👨{{skin_tone}}‍✈️': [
        '男のパイロット',
        ':man_pilot:',
        ':pilot:',
        ':man:'
    ],
    '👩{{skin_tone}}‍✈️': [
        '女性パイロット',
        ':woman_pilot:',
        ':pilot:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍✈️': [
        '人物パイロット',
        ':person_pilot:',
        ':pilot:',
        ':person:'
    ],
    '👨{{skin_tone}}‍💻': [
        '人間技術者。',
        ':man_technologist:',
        ':technologist:',
        '人間技術者。',
        ':man:'
    ],
    '👩{{skin_tone}}‍💻': [
        '女性技術者',
        ':woman_technologist:',
        ':technologist:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍💻': [
        'Por Tecnologia',
        ':person_technologist:',
        ':technologist:',
        ':person:'
    ],
    '👨{{skin_tone}}‍🎤': [
        'マンシンガー',
        ':man_singer:',
        ':singer:',
        'Bowie',
        'Aladdin Sane',
        ':man:'
    ],
    '👩{{skin_tone}}‍🎤': [
        '女のシンガー',
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
        'マンアーティスト',
        ':man_artist:',
        ':artist:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🎨': [
        '女性アーティスト',
        ':woman_artist:',
        ':artist:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🎨': [
        '人のアーティスト',
        ':person_artist:',
        ':artist:',
        ':person:'
    ],
    '👷{{skin_tone}}‍♂️': [
        '男性の建設ワーカー。',
        ':man_contruction_worker:',
        ':contruction_worker:',
        ':man:'
    ],
    '👷{{skin_tone}}‍♀️': [
        '女性建築作業員。',
        ':woman_contruction_worker:',
        ':contruction_worker:',
        ':woman:'
    ],
    '👷{{skin_tone}}': [
        '人造りのWorker',
        ':person_contruction_worker:',
        ':contruction_worker:',
        ':person:'
    ],
    '👨{{skin_tone}}‍🚀': [
        'マン宇宙飛行士format@@0',
        ':man_astronaut:',
        ':astronaut:',
        'コスモナート',
        ':man:'
    ],
    '👩{{skin_tone}}‍🚀': [
        '女宇宙飛行士format@@0',
        ':woman_astronaut:',
        ':astronaut:',
        '女性コスモノート',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🚀': [
        '宇宙飛行士(S)',
        ':person_astronaut:',
        ':astronaut:',
        '宇宙飛行士の皆さん',
        ':person:'
    ],
    '👨{{skin_tone}}‍🔬': [
        '人間サイエンティスト',
        ':man_scientist:',
        ':scientist:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🔬': [
        '女科学者。',
        ':woman_scientist:',
        ':scientist:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🔬': [
        '人物科学',
        ':person_scientist:',
        ':scientist:',
        ':person:'
    ],
    '👨{{skin_tone}}‍💼': [
        'マンオフィスワーカー。',
        ':man_office_worker:',
        ':office_worker:',
        'CEO',
        'ビジネスマン',
        ':man:'
    ],
    '👩{{skin_tone}}‍💼': [
        '女性オフィスワーカー（女性）',
        ':woman_office_worker:',
        ':office_worker:',
        'ビジネスウーマン',
        'CEO',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍💼': [
        'オフィスワーカー（人物）',
        ':person_office_worker:',
        ':office_worker:',
        'ビジネス',
        'CEO',
        ':person:'
    ],
    '👨{{skin_tone}}‍🏭': [
        '工場作業員format@@0',
        ':man_factory_worker:',
        ':factory_worker:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🏭': [
        'ウーマンファクトリー',
        ':woman_factory_worker:',
        ':factory_worker:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🏭': [
        '人物工場Worker',
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
        'Mechanic',
        ':person_mechanic:',
        ':mechanic:',
        ':person:'
    ],
    '👨{{skin_tone}}‍🍳': [
        '男のクック',
        ':man_cook:',
        ':cook:',
        '男シェフ。',
        '男性シェフ',
        ':man:'
    ],
    '👩{{skin_tone}}‍🍳': [
        '女の料理',
        ':woman_cook:',
        ':cook:',
        '女性シェフ',
        '女性シェフ',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🍳': [
        'クック人',
        ':person_cook:',
        ':cook:',
        '料理人',
        ':person:'
    ],
    '👨{{skin_tone}}‍🌾': [
        '男の<unk>',
        ':man_farmer:',
        ':farmer:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🌾': [
        '女性の<unk>',
        ':woman_farmer:',
        ':farmer:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🌾': [
        '人物の<unk>',
        ':person_farmer:',
        ':farmer:',
        ':person:'
    ],
    '👨{{skin_tone}}‍‍⚖️': [
        '男性ジャッジ',
        ':man_judge:',
        ':judge:',
        ':man:'
    ],
    '👩{{skin_tone}}‍‍⚖️': [
        '女ジャッジ',
        ':woman_judge:',
        ':judge:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍‍⚖️': [
        '判事（準）',
        ':person_judge:',
        ':judge:',
        ':person:'
    ],
    '👨{{skin_tone}}‍‍🏫': [
        '男の先生',
        ':man_teacher:',
        ':teacher:',
        ':man:'
    ],
    '👩{{skin_tone}}‍‍🏫': [
        '女性教師',
        ':woman_teacher:',
        ':teacher:',
        ':woman:'
    ],
    '🧑‍{{skin_tone}}‍‍🏫': [
        '教師者',
        ':person_teacher:',
        ':teacher:',
        ':person:'
    ],
    '👨{{skin_tone}}‍🎓': [
        '男性学生',
        ':man_student:',
        ':student:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🎓': [
        '女子学生',
        ':woman_student:',
        ':student:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🎓': [
        '生徒数',
        ':person_student:',
        ':student:',
        ':person:'
    ],
    '👨{{skin_tone}}‍⚕️': [
        'マンヘルスワーカー',
        ':man_health_worker:',
        ':health_worker:',
        '男性ドクター',
        'ナース男性format@@0',
        ':man:'
    ],
    '👩{{skin_tone}}‍⚕️': [
        '女性ヘルスワーカー',
        ':woman_health_worker:',
        ':health_worker:',
        '女性医師',
        '女性Nurse',
        ':woman:'
    ],
    '🧑‍{{skin_tone}}‍⚕️': [
        'ヘルスワーカー者',
        ':person_health_worker:',
        ':health_worker:',
        '医者者',
        'Nurse',
        ':person:'
    ],
    '🤷{{skin_tone}}‍♂️': [
        '男性の<unk>',
        ':man_shrugging:',
        ':shrugging:',
        'idk man',
        'dunno',
        ':man:'
    ],
    '🤷{{skin_tone}}‍♀️': [
        '女性の<unk>',
        ':woman_shrugging:',
        ':shrugging:',
        'idkwomen',
        'dunno',
        ':woman:'
    ],
    '🤷{{skin_tone}}': [
        '縮小している人',
        ':person_shrugging:',
        ':shrugging:',
        'idk person',
        'dunno',
        ':person:'
    ],
    '🤦{{skin_tone}}‍♂️': [
        '男性フェイスパリング',
        ':man_facepalming:',
        ':facepalming:',
        ':man:'
    ],
    '🤦{{skin_tone}}‍♀️': [
        '女性のフェイスパリング',
        ':woman_facepalming:',
        ':facepalming:',
        ':woman:'
    ],
    '🤦{{skin_tone}}': [
        'Facepalming',
        ':person_facepalming:',
        ':facepalming:',
        ':person:'
    ],
    '🙇{{skin_tone}}‍‍♂️': [
        'ボーイングマン',
        ':man_bowing:',
        ':bowing:',
        ':man:'
    ],
    '🙇{{skin_tone}}‍‍♀️': [
        '女性の<unk>',
        ':woman_bowing:',
        ':bowing:',
        ':woman:'
    ],
    '🙇{{skin_tone}}': [
        'ボイング者',
        ':person_bowing:',
        ':bowing:',
        ':person:'
    ],
    '🧏{{skin_tone}}‍♂️': [
        'ろう者の男',
        ':deaf_man:',
        ':deaf:',
        ':man:'
    ],
    '🧏{{skin_tone}}‍‍♀️': [
        'ろう者の女',
        ':deaf_woman:',
        ':deaf:',
        ':woman:'
    ],
    '🧏{{skin_tone}}': [
        'ろう者',
        ':deaf_person:',
        ':deaf:',
        ':person:'
    ],
    '🙋{{skin_tone}}‍‍♂️': [
        '手を上げる男',
        ':man_raising_hand:',
        '片手を上げるハッピーマン',
        ':raising_hand:',
        ':man:'
    ],
    '🙋{{skin_tone}}‍♀️': [
        '手を上げる女',
        ':woman_raising_hand:',
        '片手を上げる幸せな女性',
        ':raising_hand:',
        ':woman:'
    ],
    '🙋{{skin_tone}}': [
        '人物育ての手',
        ':person_raising_hand:',
        '一人の手を上げる幸せな人',
        ':raising_hand:',
        ':person:'
    ],
    '💁{{skin_tone}}‍♂️': [
        '男性の手を傾ける手',
        ':man_tipping_hand:',
        'インフォメーションデスクマン',
        ':tipping_hand:',
        ':man:'
    ],
    '💁{{skin_tone}}‍♀️': [
        '女性の手を傾ける手',
        ':woman_tipping_hand:',
        'インフォメーションデスクの女性',
        ':tipping_hand:',
        ':woman:'
    ],
    '💁{{skin_tone}}': [
        '人が手を傾けている',
        ':person_tipping_hand:',
        'インフォメーションデスク担当者',
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
        'ジェスチャー中の女性',
        ':woman_gesturing_ok:',
        ':gesturing_ok:',
        ':woman:'
    ],
    '🙆{{skin_tone}}': [
        'Gesting OK',
        ':person_gesturing_ok:',
        ':gesturing_ok:',
        ':person:'
    ],
    '🙅{{skin_tone}}‍♂️': [
        '男のジェスチャーいいえ',
        ':man_gesturing_no:',
        ':gesturing_no:',
        ':man:'
    ],
    '🙅{{skin_tone}}‍♀️': [
        'ジェスチャーする女性',
        ':woman_gesturing_no:',
        ':gesturing_no:',
        ':woman:'
    ],
    '🙅{{skin_tone}}': [
        'Gesturing No',
        ':person_gesturing_no:',
        ':gesturing_no:',
        ':person:'
    ],
    '🙎{{skin_tone}}‍♂️': [
        '男のポーティング',
        ':man_pouting:',
        ':pouting:',
        ':man:'
    ],
    '🙎{{skin_tone}}‍‍♀️': [
        '女流<unk>',
        ':woman_pouting:',
        ':pouting:',
        ':woman:'
    ],
    '🙎{{skin_tone}}': [
        'Pouting',
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
        '女性の眉毛',
        ':woman_frowining:',
        ':frowining:',
        ':woman:'
    ],
    '🙍{{skin_tone}}': [
        '眉をひそめている人',
        ':person_frowining:',
        ':frowining:',
        ':person:'
    ],
    '🧟‍‍♂️': [
        'マンゾンビ',
        ':man_zombie:',
        ':zombie:',
        ':man:'
    ],
    '🧟‍‍♀️': [
        '女のゾンビ',
        ':woman_zombie:',
        ':zombie:',
        ':woman:'
    ],
    '🧟': [
        'Zombie',
        ':person_zombie:',
        ':zombie:',
        ':person:'
    ],
    '🚶{{skin_tone}}‍♂️': [
        '男性がウォーキング中',
        ':man_walking:',
        ':walking:',
        ':man:'
    ],
    '🚶{{skin_tone}}‍♀️': [
        '女性の歩く',
        ':woman_walking:',
        ':walking:',
        ':woman:'
    ],
    '🚶{{skin_tone}}': [
        '歩いている人',
        ':person_walking:',
        ':walking:',
        ':person:'
    ],
    '🧍{{skin_tone}}‍♂️': [
        '立っている男',
        ':man_standing:',
        ':standing:',
        ':man:'
    ],
    '🧍{{skin_tone}}‍♀️': [
        '立っている女性',
        ':woman_standing:',
        ':standing:',
        ':woman:'
    ],
    '🧍{{skin_tone}}': [
        '立ち上がっている人',
        ':person_standing:',
        ':standing:',
        ':person:'
    ],
    '🧎{{skin_tone}}‍♂️': [
        '男のクネリング',
        ':man_kneeling:',
        ':kneeling:',
        ':man:'
    ],
    '🧎{{skin_tone}}‍♀️': [
        '女の<unk>',
        ':woman_kneeling:',
        ':kneeling:',
        ':woman:'
    ],
    '🧎{{skin_tone}}': [
        'Kneelink',
        ':person_kneeling:',
        ':kneeling:',
        ':person:'
    ],
    '👨{{skin_tone}}‍🦯': [
        '白杖を持った男',
        ':man_with_white_cane:',
        ':white_cane:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🦯': [
        '白杖を持つ女',
        ':woman_with_white_cane:',
        ':white_cane:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🦯': [
        '白杖を持つ人',
        ':person_with_white_cane:',
        ':white_cane:',
        ':person:'
    ],
    '👨{{skin_tone}}‍🦼': [
        '車椅子の男',
        ':man_in_motorized_wheelchair:',
        ':motorized_wheelchair:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🦼': [
        '車椅子の女',
        ':woman_in_motorized_wheelchair:',
        ':motorized_wheelchair:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🦼': [
        '車椅子に乗っている人',
        ':person_in_motorized_wheelchair:',
        ':motorized_wheelchair:',
        ':person:'
    ],
    '👨{{skin_tone}}‍🦽': [
        'マニュアル車椅子の男',
        ':man_manual_wheelchair:',
        ':manual_wheelchair:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🦽': [
        'マニュアル車椅子の女',
        ':woman_manual_wheelchair:',
        ':manual_wheelchair:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🦽': [
        'マニュアル車椅子にいる人',
        ':person_manual_wheelchair:',
        ':manual_wheelchair:',
        ':person:'
    ],
    '👯‍♂️': [
        'ウサギの耳を持つ男性',
        ':men_with_bunny_hears:',
        ':bunny_ears:',
        ':man:'
    ],
    '👯‍♀️': [
        'ウサギの耳を持つ女性',
        ':women_with_bunny_hears:',
        ':bunny_ears:',
        ':woman:'
    ],
    '👯': [
        'ウサギの耳を持つ人々',
        ':people_with_bunny_hears:',
        ':bunny_ears:',
        ':person:'
    ],
    '🕴️{{skin_tone}}': [
        'スーツのLevitating者',
        ':person_in_suit_levitating:',
        'ホバーマン',
        '失礼な男の子',
        'Walt Jabsco',
        'ビジネススーツの男がLevitating',
        ':person:'
    ],
    '🧖{{skin_tone}}‍♂️': [
        '蒸気のある部屋にいる男',
        ':man_in_steamy_room:',
        ':steamy_room:',
        'サウナの男',
        ':man:'
    ],
    '🧖{{skin_tone}}‍♀️': [
        '温かい部屋の女性',
        ':woman_in_steamy_room:',
        ':steamy_room:',
        'サウナの女',
        ':woman:'
    ],
    '🧖{{skin_tone}}': [
        'Steamy Roomにいる人',
        ':person_in_steamy_room:',
        ':steamy_room:',
        'サウナにいる人',
        ':person:'
    ],
    '👫{{skin_tone}}': [
        '女と男の手',
        ':woman_and_man_holding_hands:',
        ':holding_hands:',
        '異性愛のカップル',
        'ストレートカップル',
        '男と女の手',
        ':woman:'
    ],
    '👬{{skin_tone}}': [
        '手を握る男性たち',
        ':holding_hands:',
        ':men_holding_hands:',
        'ゲイカップル',
        '二人の男が手を握っている',
        ':man:'
    ],
    '👭{{skin_tone}}': [
        '手を握る女性',
        ':holding_hands:',
        ':women_holding_hands:',
        'レズビアンのカップル',
        '二人の女性の手',
        ':woman:'
    ],
    '🧑‍🤝‍🧑': [
        '手を握っている人',
        ':holding_hands:',
        ':people_holding_hands:',
        '手を握る二人',
        '男女インクルーシブなカップル',
        '性別中立カップル',
        '男女不適合のカップル',
        ':person:'
    ],
    '👨‍👩‍👦': [
        '母と父と子との家族',
        ':family_with_mother_father_and_son:',
        '家族：男、女、男の子'
    ],
    '👨‍👩‍👧': [
        '母との家族、父と娘',
        ':family_with_mother_father_and_daughter:',
        '家族：男、女、女の子'
    ],
    '👨‍👩‍👧‍👦': [
        '母、父、息子、娘との家族',
        ':family_with_mother_father_son_and_daughter:',
        '家族：男性、女性、少女、男の子'
    ],
    '👨‍👩‍👦‍👦': [
        '母と父と二人の息子と家族',
        ':family_with_mother_father_and_two_sons:',
        '家族：男性、女性、男の子、男の子'
    ],
    '👨‍👩‍👧‍👧': [
        '母親と父親と二人の娘',
        ':family_with_mother_father_and_two_daughters:',
        '家族：男、女、女、女の子'
    ],
    '👨‍👨‍👦': [
        '二人の父と息子を持つ家族',
        ':family_with_two_fathers_and_son:',
        '家族：男、男、男の子',
        ':man:'
    ],
    '👨‍👨‍👧': [
        '二人の父と娘との家族',
        ':family_with_two_fathers_and_daughter:',
        '家族：男性、女の子たち',
        ':man:'
    ],
    '👨‍👨‍👧‍👦': [
        '二人の父、息子、娘との家族',
        ':family_with_two_fathers_son_and_daughter:',
        '家族：男性、女の子、男の子',
        ':man:'
    ],
    '👨‍👨‍👦‍👦': [
        '二人の父と二人の息子を持つ家族',
        ':family_with_two_fathers_and_two_sons:',
        '家族：男性、男性、男の子、男の子',
        ':man:'
    ],
    '👨‍👨‍👧‍👧': [
        '二人の父と二人の娘を持つ家族',
        ':family_with_two_fathers_and_two_daughters:',
        '家族：男性、女の子、女の子',
        ':man:'
    ],
    '👩‍👩‍👦': [
        '二人の母と息子との家族',
        ':family_with_two_mothers_and_son:',
        '家族：女、女、男の子',
        ':woman:'
    ],
    '👩‍👩‍👧': [
        '二人の母と娘との家族',
        ':family_with_two_mothers_and_daughter:',
        '家族：女、女、女の子',
        ':woman:'
    ],
    '👩‍👩‍👧‍👦': [
        '二人の母との家族, 息子と娘.',
        ':family_with_two_mothers_son_and_daughter:',
        '家族：女、女、女、女、男の子',
        ':woman:'
    ],
    '👩‍👩‍👦‍👦': [
        '二人の母と二人の息子との家族',
        ':family_with_two_mothers_and_two_sons:',
        '家族：女、女、男の子、男の子',
        ':woman:'
    ],
    '👩‍👩‍👧‍👧': [
        '二人の母と二人の娘との家族',
        ':family_with_two_mothers_and_two_daughters:',
        '家族：女、女、女、女の子',
        ':woman:'
    ],
    '👨‍👦': [
        '父と息子との家族',
        ':family_with_father_and_son:',
        '家族：男、男の子',
        ':man:'
    ],
    '👨‍👧': [
        '父と娘との家族',
        ':family_with_father_and_daughter:',
        '家族：男、女の子',
        ':man:'
    ],
    '👨‍👦‍👦': [
        '父と二人の息子との家族',
        ':family_with_father_and_two_sons:',
        '家族：男、男、男の子',
        ':man:'
    ],
    '👨‍👧‍👦': [
        '父と息子と娘との家族',
        ':family_with_father_son_and_daughter:',
        'ファミリー：男性、女の子、男の子',
        ':man:'
    ],
    '👨‍👧‍👧': [
        '父と二人の娘との家族',
        ':family_with_father_and_two_daughters:',
        '家族：男、女、女の子',
        ':man:'
    ],
    '👩‍👦': [
        '母と息子との家族',
        ':family_with_mother_and_son:',
        '家族：女、男の子',
        ':woman:'
    ],
    '👩‍👧': [
        '母と娘との家族',
        ':family_with_mother_and_daughter:',
        '家族：女性、女の子',
        ':woman:'
    ],
    '👩‍👦‍👦': [
        '母と二人の息子との家族',
        ':family_with_mother_and_two_sons:',
        '家族：女性、男の子、男の子',
        ':woman:'
    ],
    '👩‍👧‍👦': [
        '母との家族, 息子と娘',
        ':family_with_mother_son_and_daughter:',
        'ファミリー：女、女、男の子',
        ':woman:'
    ],
    '👩‍👧‍👧': [
        '母と二人の娘との家族',
        ':family_with_mother_and_two_daughters:',
        '家族：女性、少女、女の子',
        ':woman:'
    ],
    '💑{{skin_tone}}': [
        'ハートを持つカップル',
        ':couple_with_heart:',
        '恋をするカップル',
        'Loving Couple',
        '性別中立カップル',
        ':person:'
    ],
    '👩‍❤️‍👨': [
        '心を持つ男と女',
        ':man_and_woman_with_heart:',
        '恋をするカップル',
        'Loving Couple',
        'ハートを持つカップル'
    ],
    '👨‍❤️‍👨': [
        'ハートを持つ二人の男性',
        ':two_men_with_heart:',
        'ハートを持つカップル：男、男',
        ':man:'
    ],
    '👩‍❤️‍👩': [
        'ハートを持つ二人の女性',
        ':two_women_with_heart:',
        'ハートとのカップル：女性、女性',
        ':woman:'
    ],
    '💏{{skin_tone}}': [
        'カップルキス',
        ':couple_kissing:',
        'キス',
        '性別中立カップルキス',
        ':person:'
    ],
    '👩‍❤️‍💋‍👨': [
        '男と女のキス',
        ':man_and_woman_kissing:'
    ],
    '👨‍❤️‍💋‍👨': [
        '二人の男のキス',
        ':two_men_kissing:',
        '男と男のキス',
        ':man:'
    ],
    '👩‍❤️‍💋‍👩': [
        '二人の女性のキス',
        ':two_women_kissing:',
        '女と女のキス',
        ':woman:'
    ],
    '💆{{skin_tone}}‍♂️': [
        '頭マッサージを受ける男',
        ':man_getting_head_massage:',
        ':getting_head_massage:',
        ':man:'
    ],
    '💆{{skin_tone}}‍♀️': [
        '頭マッサージを受ける女性',
        ':woman_getting_head_massage:',
        ':getting_head_massage:',
        ':woman:'
    ],
    '💆{{skin_tone}}': [
        'ヘッドマッサージを受ける人',
        ':person_getting_head_massage:',
        ':getting_head_massage:',
        ':person:'
    ],
    '💇{{skin_tone}}‍♂️': [
        '髪型を取得している男',
        ':man_getting_haircut:',
        ':getting_haircut:',
        ':man:'
    ],
    '💇{{skin_tone}}‍♀️': [
        '髪を切られる女性',
        ':woman_getting_haircut:',
        ':getting_haircut:',
        ':woman:'
    ],
    '💇{{skin_tone}}': [
        'Haircut を取得する人',
        ':person_getting_haircut:',
        ':getting_haircut:',
        ':person:'
    ],
    '🛌{{skin_tone}}': [
        '眠れる宿泊施設',
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
        '小悪魔たち',
        ':goblin:',
        '長い鼻の顔',
        '赤いマスク',
        'Tengu',
        '日本の<unk>'
    ]
};
/*animals*/
emojis_language[lang][4] = {
    '😺': [
        'ニヤニヤした猫',
        ':happy_cat:',
        ':smiling_cat:',
        '::):',
        '幸せな猫',
        '笑顔の猫',
        '幸せな猫の顔',
        '口を開けて笑顔の猫'
    ],
    '😸': [
        'ニヤニヤした猫と笑顔の目',
        ':grinning_cat:',
        '::D:',
        'ニヤニヤした猫',
        '幸せな猫',
        'ニヤニヤした猫'
    ],
    '😹': [
        '喜びの涙の猫',
        ':laughing_cat:',
        '::):',
        '幸せな涙猫',
        '笑っている猫'
    ],
    '😻': [
        '笑顔の猫とハートアイズ',
        ':heart_eyes_cat:',
        ':*.*:',
        'ハートアイズ 猫',
        '大好きな猫',
        '笑顔の猫の顔をハート型の目で'
    ],
    '😼': [
        'Wry Smile付きの猫',
        ':cat_with_wry_smile:',
        'ニャンコを<unk>',
        'ネコの顔を<unk>',
        'Wry Smileと猫の顔'
    ],
    '😽': [
        'キス猫',
        ':kissing_cat:',
        '::*:',
        'キスしている猫の顔',
        '閉じた目で猫の顔にキスする'
    ],
    '🙀': [
        'ウェアリー・キャット',
        ':weary_cat:',
        '::O:',
        '怖い猫',
        'Screaming Cat',
        '恐怖の猫の顔',
        'ウェアリー・キャットフェイス'
    ],
    '😿': [
        '泣いている猫',
        ':crying_cat:',
        '::(:',
        '悲しい猫',
        '泣いている猫の顔'
    ],
    '😾': [
        '追い払う猫',
        ':pouting_cat:',
        'Grumpy Cat',
        '猫の顔を<unk>'
    ],
    '🙈': [
        '悪のモンキーを見る',
        'モンキー',
        ':see-no-evil_mokey:',
        ':see_no_evil_mokey:',
        ':monkey:',
        'Mizaru',
        '猿の目を覆っている'
    ],
    '🙉': [
        '邪悪なモンキー',
        'モンキー',
        ':hear-no-evil_monkey:',
        ':hear_no_evil_monkey:',
        ':monkey:',
        'Kikazaru',
        '耳を覆うモンキー'
    ],
    '🙊': [
        '邪悪なモンキーを話す',
        'モンキー',
        ':speak-no-evil_monkey:',
        ':speak_no_evil_monkey:',
        ':monkey:',
        '岩猿（いわざる）',
        '口を覆うモンキー',
        '話していません'
    ],
    '🐵': [
        '猿の顔',
        ':monkey_face:',
        'モンキー',
        '猿の頭'
    ],
    '🐒': [
        'モンキー',
        ':monkey:',
        '生意気なモンキー'
    ],
    '🦍': [
        'Gorilla',
        ':gorilla:'
    ],
    '🐶': [
        '犬の顔',
        ':dog_face:',
        '犬',
        'Puppy'
    ],
    '🐕': [
        '犬',
        ':dog:',
        'Doggo',
        'Akita Inu'
    ],
    '🦮': [
        '目を見る犬',
        ':seeing_eye_dog:',
        'ガイド犬'
    ],
    '🐕‍🦺': [
        'サービス犬',
        ':service_dog:'
    ],
    '🐩': [
        'プードル語',
        ':poodle:',
        '犬',
        'ミニチュア・プードル',
        '標準のプードル',
        'おもちゃのプード'
    ],
    '🐺': [
        'ウルフ',
        ':wolf:',
        'オオカミの顔',
        ':gray:',
        ':grey:'
    ],
    '🦊': [
        'キツネ',
        ':fox:',
        'キツネの顔',
        ':orange:'
    ],
    '🦝': [
        'アライグマ',
        ':raccoon:'
    ],
    '🐱': [
        '猫の顔',
        ':cat_face:',
        ':3',
        '<unk>',
        'キティ'
    ],
    '🐈': [
        '猫',
        ':cat:',
        '家畜の猫',
        'フェリン語',
        'Housecat'
    ],
    '🐈‍⬛': [
        '黒い猫',
        ':black_cat:',
        ':black:'
    ],
    '🦁': [
        'ライオン（ライオン）',
        ':lion:',
        'ライオンの顔'
    ],
    '🐯': [
        'タイガーの顔',
        ':tiger_face:',
        'かわいいタイガー。'
    ],
    '🐅': [
        'Tiger',
        ':tiger:',
        'Bengal Tiger'
    ],
    '🐆': [
        'Leopard',
        ':leopard:',
        'アフリカのヒョウ',
        'Jaguar'
    ],
    '🐴': [
        'ウマの顔',
        ':horse_face:',
        '馬の頭'
    ],
    '🐎': [
        '馬',
        ':horse:',
        '疾走する馬',
        '競馬馬'
    ],
    '🦄': [
        'ユニコーン',
        ':unicorn:',
        'ユニコーンの顔'
    ],
    '🦓': [
        'Zebra',
        ':zebra:',
        'Zebra Face',
        ':white:',
        ':black:'
    ],
    '🦌': [
        '鹿（鹿）',
        ':deer:',
        'バック',
        'トナカイ語',
        'Stag'
    ],
    '🐮': [
        'ウシの顔',
        ':cow_face:',
        'ウシ',
        '幸せな牛'
    ],
    '🐂': [
        'Ox',
        ':ox:',
        '雄牛（雄牛）',
        'Bullock',
        'Oxen',
        'ステア'
    ],
    '🐃': [
        '水牛（水牛）',
        ':water_buffalo:',
        'Buffalo',
        '国産水牛車'
    ],
    '🐄': [
        'ウシ',
        ':cow:',
        '乳製品の牛'
    ],
    '🐷': [
        '豚の顔',
        ':pig_fase:',
        'Pig',
        '豚の頭',
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
        'イノシシ',
        ':boar:',
        'Warthlog',
        'イノシシ',
        '野生のブタちゃん'
    ],
    '🐽': [
        'Pig Nose',
        ':pig_nose:'
    ],
    '🐏': [
        'Ram',
        ':ram:',
        'ヒツキ'
    ],
    '🐑': [
        'Ewe',
        ':ewe:',
        'Lamb',
        'ヒツキ'
    ],
    '🐐': [
        'ヤギ',
        ':goat:'
    ],
    '🐪': [
        'ラクダの色',
        ':camel:',
        'アラビア・ラクダ語',
        'ドロメダリラクメル語',
        'ワンバンプ・ラクダ（ワンバンプ）'
    ],
    '🐫': [
        'ツーハンプラクダformat@@0',
        ':two-hump_camel:',
        ':two_hump_camel:',
        'アジアのラクダたち',
        'バクトリアのラクダです'
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
        'マウスの顔',
        ':mouse_face:',
        'マウス'
    ],
    '🐁': [
        'マウス',
        ':mouse:',
        'Dormouse',
        'げっ歯類',
        'マウス'
    ],
    '🐀': [
        'ラット語',
        ':rat:',
        'げっ歯類'
    ],
    '🐹': [
        'ハムスター',
        ':hamster:',
        'ハムスターの顔'
    ],
    '🐰': [
        'ウサギの顔',
        ':rabbit_face:',
        'イースターバニー'
    ],
    '🐇': [
        'ウサギ',
        'Bunny',
        ':rabbit:',
        'ウサギのウサギ（バニーウサギ）'
    ],
    '🐿️': [
        'Chipmon',
        ':chipmunk:',
        'Squirrel'
    ],
    '🦔': [
        'ヘッジホグ',
        ':hedgehog:'
    ],
    '🦇': [
        'バット語',
        ':bat:',
        'バットマン',
        ':black:'
    ],
    '🐻': [
        'Bear',
        ':bear:',
        '熊の顔',
        'テディベア',
        ':brown:'
    ],
    '🐨': [
        'コアラ',
        ':koala:',
        'コアラの顔'
    ],
    '🐼': [
        'Panda(パンダ)',
        ':panda:',
        'パンダの顔'
    ],
    '🦘': [
        'カンガルー',
        ':kangaroo:',
        'Roo'
    ],
    '🦡': [
        'Badger',
        ':badger:'
    ],
    '🦃': [
        'トルコ',
        ':turkey:',
        '感謝祭トルコ語',
        'ワイルドトルコ'
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
        'ハッチングひよこ',
        ':hatching_chick:',
        '赤ちゃんニワトリformat@@0',
        'ひよこ孵化',
        ':yellow:'
    ],
    '🐤': [
        '赤ちゃんひよこ',
        ':baby_chick:',
        '黄色の鳥',
        ':yellow:'
    ],
    '🐥': [
        '前面の赤ちゃんのひよこ',
        ':front_baby_chick:',
        '赤ちゃんひよこ',
        'ひよこ',
        ':yellow:'
    ],
    '🐦': [
        '鳥',
        ':bird:'
    ],
    '🐧': [
        'Penguin',
        ':penguin:'
    ],
    '🕊️': [
        'ハト語',
        ':Dove:',
        '平和の<unk>',
        ':white:'
    ],
    '🦅': [
        'Eagle',
        ':Eagle:',
        'ハゲワシ'
    ],
    '🦆': [
        'アヒル(Duck)',
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
        '孔石',
        ':peacock:'
    ],
    '🦜': [
        'オウム',
        ':parrot:'
    ],
    '🐸': [
        'カエル',
        ':frog:',
        'ヒキガエル',
        'カエルの顔',
        ':green:'
    ],
    '🐊': [
        'クロコダイル',
        ':crocodile:',
        'アリゲーター',
        'ワニ',
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
        'スネーク',
        ':snake:',
        'Serpent'
    ],
    '🐲': [
        'ドラゴンフェイス',
        ':dragon_face:',
        'ドラゴンヘッド'
    ],
    '🐉': [
        'ドラゴン',
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
        'クジラの発声',
        ':spouting_whale:',
        'かわいいクジラたち'
    ],
    '🐋': [
        'クジラ語',
        ':whale:'
    ],
    '🐬': [
        'Dolphin',
        ':dolphin:'
    ],
    '🐟': [
        '魚',
        ':fish:',
        '淡水魚'
    ],
    '🐠': [
        '熱帯魚',
        ':tropical_fish:',
        '魚',
        '黄色の魚'
    ],
    '🐡': [
        'Blowfish',
        ':blowfish:',
        'Fugu',
        'フグ'
    ],
    '🦈': [
        'シャーク',
        ':shark:',
        'グレートホワイトシャーク'
    ],
    '🐙': [
        'タコ語',
        ':octopus:'
    ],
    '🐚': [
        'スパイラルシェル',
        ':spiral_shell:',
        '貝殻か',
        'シェル'
    ],
    '🐌': [
        'カタツムリの',
        ':snail:',
        'スラグ',
        'ガーデンカタツムリformat@@0'
    ],
    '🦋': [
        'バタフライ語',
        ':butterfly:'
    ],
    '🐛': [
        'バグ',
        ':bug:',
        'キャタピラー',
        '昆虫（虫）'
    ],
    '🐜': [
        'Ant',
        ':ant:',
        'バグ',
        '昆虫（虫）'
    ],
    '🐝': [
        'ハニービー',
        ':honeybee:',
        'みつばち',
        'Bumblebee',
        ':yellow:',
        ':black:'
    ],
    '🐞': [
        'レディ・ビートル語',
        ':lady_beetle:',
        'Ladybird',
        'Ladybug',
        'バグ'
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
        'スコーピオン',
        ':scorpion:'
    ],
    '🦟': [
        'モスキート',
        ':mosquito:',
        ':black:'
    ],
    '🦀': [
        'カニ語',
        ':crab:',
        ':red:'
    ],
    '🦞': [
        'ロブスター',
        ':lobster:'
    ],
    '🦐': [
        'エビ（海老）',
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
        'スカンク',
        ':skunk:'
    ],
    '🦬': [
        'バイソン',
        ':bison:'
    ],
    '🦣': [
        'マンモス語',
        ':mammoth:',
        ':brown:'
    ],
    '🦫': [
        'ビーバー',
        ':beaver:'
    ],
    '🐻‍❄️': [
        'シロクマ',
        ':polar_bear:',
        ':white:'
    ],
    '🦤': [
        'Dodo',
        ':dodo:'
    ],
    '🦭': [
        '印章',
        ':seal:'
    ],
    '🪲': [
        'ビートル語',
        ':beetle:'
    ],
    '🪳': [
        'ゴキブリ語',
        ':cockroach:'
    ],
    '🪰': [
        'Fly',
        ':fly:'
    ],
    '🪱': [
        'ワーム',
        ':worm:'
    ],
    '🦩': [
        'Flamingo',
        ':flamingo:'
    ],
    '🪹': [
        '空のNest',
        ':empty_nest:',
        '鳥',
        'ホーム'
    ],
    '🪺': [
        '卵が付いているNest',
        ':nest_with_eggs:',
        '鳥',
        'ホーム'
    ]
};
/*symbols*/
emojis_language[lang][5] = {
    '💘': [
        '矢のある心',
        ':heart_with_arrow:',
        'キューピッド矢印',
        'Lovestruck',
        ':pink:'
    ],
    '💝': [
        'リボン付きハート',
        ':heart_with_ribbon:',
        'チョコレートボックス',
        'ギフトボックス',
        'ギフトハート',
        ':red:'
    ],
    '💖': [
        'Sparkling Heart',
        ':sparkling_heart:',
        'スパークルハート',
        'Sparkly Heart',
        'スターハート',
        ':pink:'
    ],
    '💗': [
        '成長する心',
        ':growing_heart:',
        '複数のハート',
        'トリプルハート',
        ':pink:'
    ],
    '💓': [
        'ビーティングハート',
        ':beating_heart:',
        'ハートアラーム',
        'Heartbeat',
        'Wi-Fiハート',
        ':pink:'
    ],
    '💞': [
        '回転する心',
        ':revolving_hearts:',
        '2つの心',
        ':pink:'
    ],
    '💕': [
        '2つの心',
        ':two_hearts:',
        '小さなハート',
        '2つのピンクのハート',
        ':pink:'
    ],
    '💟': [
        'ハートの装飾',
        ':heart_decoration:',
        ':purple:'
    ],
    '❣️': [
        'ハートの<unk>',
        ':heart_exclamation:',
        'ドットの上のハート',
        '感嘆符としての赤い心',
        '重心感嘆符オーナメント',
        ':red:'
    ],
    '💔': [
        '壊れたハート',
        ':broken_heart:',
        'ブレイキング・ハート',
        '壊れた心',
        '壊れた心',
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
        'あなたを愛しています',
        ':red_heart:',
        'レッドハート',
        'ハート',
        'Love Heart',
        'レッドハート',
        ':red:'
    ],
    '🧡': [
        'オレンジのハート',
        ':orange_heart:',
        'あなたを愛しています',
        ':orange:'
    ],
    '💛': [
        'イエローハート',
        ':yellow_heart:',
        '#1 BFSnapchat',
        'ゴールドハート',
        'あなたを愛しています',
        ':yellow:'
    ],
    '💚': [
        '緑のハート',
        ':green_heart:',
        '嫉妬の心',
        'あなたを愛しています',
        ':green:'
    ],
    '💙': [
        'ブルーハート',
        ':blue_heart:',
        'あなたを愛しています',
        ':blue:'
    ],
    '💜': [
        'パープルハート',
        ':purple_heart:',
        'あなたを愛しています',
        ':purple:'
    ],
    '🖤': [
        'ブラック ハート',
        ':black_heart:',
        'ダークハート',
        'あなたを愛しています',
        ':black:'
    ],
    '🤍': [
        'ホワイトハート',
        ':white_heart:',
        'あなたを愛しています',
        ':white:'
    ],
    '🤎': [
        '茶色のハート',
        ':brown_heart:',
        'あなたを愛しています',
        ':brown:'
    ],
    //"🩷": ["Pink Heart", ":pink_heart:", "I Love You", ":pink:"],
    //"🩵": ["Light Blue Heart", ":lightblue_heart:", "I Love You", ":blue:"],
    //"🩶": ["Grey Heart","Gray Heart", ":grey_heart:",":gray_heart:", "I Love You", ":gray:", ":grey:"],
    '💯': [
        '100ポイント',
        ':hundred_points:',
        '100',
        '%',
        '保持する 100',
        '完璧なスコア',
        '百点記号'
    ],
    '💬': [
        'Speech Balloon',
        ':speech_balloon:',
        'チャットバブル',
        'スピーチバブル',
        ':white:'
    ],
    '💭': [
        'Thought Balloon',
        ':thought_balloon:',
        '思考バブル',
        '思考バブル',
        ':white:'
    ],
    '💤': [
        'Zzz',
        ':zzz:',
        '就寝時間',
        'ボーリング',
        'スリープ',
        '眠れるサイン',
        '眠れるシンボル'
    ],
    '♠': [
        'スペードスーツ',
        ':spade_suit:',
        'Spades',
        'Black Spade Suit'
    ],
    '♥': [
        'ハートスーツ',
        ':heart_suit:',
        'ハート付きカード',
        'ハート',
        '黒いハートスーツ'
    ],
    '♦': [
        'ダイヤのスーツ',
        ':diamond_suit:',
        'Diamantes',
        'ブラックダイヤモンドスーツ'
    ],
    '♣': [
        'クラブスーツ',
        ':club_suit:',
        'クラブ',
        'ブラッククラブスーツ'
    ],
    '🏧': [
        'ATMサイン',
        ':atm_sign:',
        'ATM',
        '自動Telleer Machine',
        ':blue:'
    ],
    '🎧': [
        'Headphone',
        ':headphone:',
        'イヤフォン',
        'iPod',
        'ヘッドホン(ヘッドホン)'
    ],
    '🎵': [
        '音楽メモ',
        ':musical_note:',
        '8番目の音符のビーム',
        'ビームされた<unk>',
        '音楽メモ'
    ],
    '🎶': [
        '楽器ノート',
        ':musical_notes:',
        '音楽',
        'ミュージックノート',
        'カラオケモード',
        '複数のミュージカルノート'
    ],
    '🔔': [
        'ベル',
        ':bell:',
        '自由の鐘',
        'Ringer',
        '結婚式のベル',
        ':yellow:'
    ],
    '🔕': [
        'スラッシュでベル',
        ':bell_with_slash:',
        '通知',
        '着信音は無効です',
        'ミュートベル',
        '取り消しストローク付きベル',
        ':yellow:'
    ],
    '🔈': [
        'スピーカー低音量',
        ':speaker_low_volum:',
        '音量',
        'スピーカー'
    ],
    '🔉': [
        'スピーカー中音量（音量）',
        ':speaker_medium_volume:',
        '音量を減らす',
        '中音量のスピーカー',
        '1つの音波でスピーカー'
    ],
    '🔊': [
        'スピーカーの高音量',
        ':speaker_high_volume:',
        '音量を上げる',
        '3つの音波を伴うスピーカー'
    ],
    '🔇': [
        'ミュートされたスピーカー',
        ':muted_speaker:',
        'ボリュームをミュート',
        'Strokeをキャンセルしたスピーカー'
    ],
    '📢': [
        'Loudspeaker',
        ':loudspeaker:',
        'お知らせ',
        'PA システム',
        '公開アドレス ラウドスピーカー'
    ],
    '⛔': [
        'エントリなし',
        ':no_entry:',
        ':red:'
    ],
    '🚫': [
        '禁止',
        ':prohibited:',
        '禁止',
        '円のバックスラッシュ',
        'いいえ',
        '赤い円',
        '制限された',
        'エントリーサインがありません',
        ':red:'
    ],
    '🚳': [
        '自転車なし',
        ':no_bicycles:',
        'バイクサインなし',
        ':red:',
        ':black:'
    ],
    '🚭': [
        '禁煙中',
        ':no_smoking:',
        '禁煙シンボル',
        ':red:',
        ':black:'
    ],
    '🚯': [
        'ゴミなし',
        ':no_littering:',
        'ゴミ記号を使用しない',
        ':red:',
        ':black:'
    ],
    '🚱': [
        'Non-potable Water',
        ':non-potable_water:',
        ':non_potable_water:',
        '水なし',
        '飲料水なし',
        'Non-potable Water Symbol',
        ':red:',
        ':black:'
    ],
    '🚷': [
        '歩行者なし',
        ':no_pedestrians:',
        '人がいません',
        '歩行不可',
        ':red:',
        ':black:'
    ],
    '🔞': [
        '十八歳未満の人はいません',
        ':no_one_under_18:',
        'NSFW',
        '十八才未満のシンボルなし',
        '18',
        ':red:',
        ':black:'
    ],
    '📵': [
        '携帯電話がありません',
        ':no_mobile_phones:',
        '携帯電話がありません',
        '電話がありません',
        'スマートフォンがありません',
        ':red:',
        ':black:'
    ],
    '☢️': [
        'Radioactive',
        ':radioactive:',
        '国際放射線シンボル',
        '<unk>',
        '放射能サイン',
        ':orange:'
    ],
    '☣️': [
        'Biohazard',
        ':biohazard:',
        'バイオハザードのサイン',
        ':orange:'
    ],
    '⬆️': [
        '上矢印ボタン',
        ':up_arrow_button:',
        '上向き矢印キー',
        '上向きの黒い矢印',
        ':blue:'
    ],
    '↗️': [
        '右上矢印ボタン',
        ':up-right_arrow_button:',
        ':up_right_arrow_button:',
        '右上矢印（斜め）',
        '北東の矢印',
        ':blue:'
    ],
    '➡️': [
        '右矢印ボタン',
        ':right_arrow_button:',
        '右矢印キー',
        '黒い右翼矢印',
        ':blue:'
    ],
    '↘️': [
        '右下矢印ボタン',
        ':down-right_arrow_button:',
        ':down_right_arrow_button:',
        '右下向き矢印キー',
        '東南矢印',
        ':blue:'
    ],
    '⬇️': [
        '下矢印ボタン',
        ':down_arrow_button:',
        '下向き矢印キー',
        '下向き黒い矢印',
        ':blue:'
    ],
    '↙️': [
        '左下矢印ボタン',
        ':down-left_arrow_button:',
        ':down_left_arrow_button:',
        '斜め下向き矢印キー',
        '南西矢印',
        ':blue:'
    ],
    '⬅️': [
        '左矢印ボタン',
        ':left_arrow_button:',
        '左矢印の位置',
        '左側の黒い矢印',
        ':blue:'
    ],
    '↖️': [
        '上矢印ボタン',
        ':up-left_arrow_button:',
        ':up_left_arrow_button:',
        '上下矢印（斜め）',
        '北西の矢印',
        ':blue:'
    ],
    '↕️': [
        '上下矢印ボタン',
        ':up-down_arrow_button:',
        ':up_down_arrow_button:',
        '垂直矢印',
        '上下矢印',
        ':blue:'
    ],
    '↔️': [
        '左右矢印ボタン',
        ':left-right_arrow_button:',
        ':left_right_arrow_button:',
        '水平矢印',
        '横向き矢印キー',
        '左右矢印',
        ':blue:'
    ],
    '↩️': [
        '右矢印カーブの左ボタン',
        ':right_arrow_curving_left_button:',
        'メール返信',
        '左カーブ矢印',
        'フック付き左向きの矢印',
        ':blue:'
    ],
    '↪️': [
        '左矢印カーブ右ボタン',
        ':left_arrow_curving_right_button:',
        'メール転送',
        '右カーブ矢印',
        'フック付き右翼矢印',
        ':blue:'
    ],
    '⤴️': [
        '右矢印カーブ上ボタン',
        ':right_arrow_curving_up_button:',
        '右側の矢印を指して、上向きにカーブする',
        ':blue:'
    ],
    '⤵️': [
        '右矢印のカーブ下ボタン',
        ':right_arrow_curving_down_button:',
        '湾曲した下向き矢印',
        '右側の矢印を指して下向きにカーブする',
        ':blue:'
    ],
    '🔃': [
        '垂直方向の矢印ボタン',
        ':clockwise_vertical_button:',
        '時計回りの下向きと上向きの円の矢印を開く',
        ':blue:'
    ],
    '🔄': [
        '反時計回り矢印ボタン',
        ':counterclockwise_button:',
        '更新',
        '回転',
        '切り替え',
        'カウンター時計回りの矢印',
        '反時計回りの下向きおよび上向きの円の矢印キー',
        ':blue:'
    ],
    '🔙': [
        '戻る矢印',
        ':back_arrow:',
        '戻る',
        '左向きの矢印で戻る',
        ':black:'
    ],
    '🔚': [
        '終了矢印',
        ':end_arrow:',
        '終了',
        '左向きの矢印で終了する',
        ':black:'
    ],
    '🔛': [
        '矢印をつけてください',
        ':on_arrow:',
        'オン',
        '左右矢印が上記の感嘆符付きで',
        ':black:'
    ],
    '🔜': [
        'すぐに矢印',
        ':soon_arrow:',
        'まもなくです',
        'すぐに右向きの矢印を上に',
        ':black:'
    ],
    '🔝': [
        '上矢印キー',
        ':top_arrow:',
        '上',
        '上向きの矢印で上',
        ':black:'
    ],
    '🛐': [
        '拝殿',
        ':place_of_worship:',
        '宗教施設',
        ':purple:'
    ],
    '⚛️': [
        'アトムシンボル',
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
        'ダビデの星',
        ':star_of_david:',
        'Magen David',
        ':purple:'
    ],
    '☸️': [
        'ダルマのホイール',
        ':wheel_of_dharma:',
        'ヘルム',
        ':purple:'
    ],
    '☯️': [
        'Yin Yang',
        ':yin_yang:',
        ':purple:'
    ],
    '✝️': [
        'ラテンクロース',
        ':latin_cross:',
        'クリスチャンクロス',
        ':purple:'
    ],
    '☦️': [
        '正教会の十字形',
        ':orthodox_cross:',
        ':purple:'
    ],
    '☪️': [
        '星と<unk>',
        ':star_and_crescent:',
        ':purple:'
    ],
    '☮️': [
        '平和のシンボル',
        ':peace:',
        'ピースサイン',
        ':purple:'
    ],
    '🕎': [
        'Menorah',
        ':menorah:',
        'Candelabrum',
        'ロウソク語',
        'Chanukiah',
        'Menorah',
        'Menorah with Nine Branches',
        ':purple:'
    ],
    '🔯': [
        '点線で点線を引いた6つの星',
        ':dotted_six-pointed_star:',
        ':dotted_six_pointed_star:',
        '真ん中に点があるシックススター',
        ':purple:'
    ],
    //"🪯": ["Khanda", ":khanda:", "Sikhism", ":purple:"],
    '♈': [
        '牡羊座：',
        ':aries:',
        ':zodiac:',
        '干支format@@0',
        ':purple:'
    ],
    '♉': [
        'Taurus',
        ':taurus:',
        ':zodiac:',
        '干支format@@0',
        ':purple:'
    ],
    '♊': [
        'Gemini',
        ':gemini:',
        ':zodiac:',
        '干支format@@0',
        ':purple:'
    ],
    '♋': [
        '癌',
        ':cancer:',
        ':zodiac:',
        '干支format@@0',
        ':purple:'
    ],
    '♌': [
        'Leo',
        ':leo:',
        ':zodiac:',
        '干支format@@0',
        ':purple:'
    ],
    '♍': [
        '乙女座',
        ':virgo:',
        ':zodiac:',
        '干支format@@0',
        ':purple:'
    ],
    '♎': [
        '天秤座',
        ':libra:',
        ':zodiac:',
        '干支format@@0',
        ':purple:'
    ],
    '♏': [
        'Scorpio',
        ':scorpio:',
        ':zodiac:',
        'スコルピウス',
        '干支format@@0',
        ':purple:'
    ],
    '♐': [
        'Sagittarius',
        ':sagittarius:',
        ':zodiac:',
        '干支format@@0',
        ':purple:'
    ],
    '♑': [
        '山羊座',
        ':capricorn:',
        ':zodiac:',
        '干支format@@0',
        ':purple:'
    ],
    '♒': [
        'Aquarius',
        ':aquarius:',
        ':zodiac:',
        '干支format@@0',
        ':purple:'
    ],
    '♓': [
        'Pisces',
        ':pisces:',
        ':zodiac:',
        '干支format@@0',
        ':purple:'
    ],
    '⛎': [
        'へびつかみ',
        ':ophiuchus:',
        ':zodiac:',
        '干支format@@0',
        ':purple:'
    ],
    '⏭️': [
        '記号の転送をスキップ',
        '縦棒付きの二重三角形を黒の右向きにする',
        ':skip_forward_button:',
        '次のトラックボタン',
        ':blue:'
    ],
    '⏮️': [
        '記号を後ろにスキップする',
        '左向きに縦棒付きの二重三角形を黒くする',
        ':skip_backward_button:',
        '最後のトラックボタン',
        '前のトラック',
        ':blue:'
    ],
    '⏯️': [
        '再生または一時停止ボタン',
        '二重垂直バーを備えた黒の右向きの三角形を示します',
        ':play_button:',
        ':pause_button:',
        ':play_or_pause_button:',
        'シンボルを再生',
        'シンボルを一時停止',
        ':blue:'
    ],
    '🔀': [
        'トラックボタンをシャッフル',
        ':shuffle_tracks_button:',
        'ねじれた右向きの矢印',
        ':blue:'
    ],
    '🔁': [
        '繰り返しボタン',
        ':repeat_button:',
        'ループ記号',
        'リツイート',
        '右向き右向きと左向きの円の矢印を開く',
        ':blue:'
    ],
    '🔂': [
        'シングルボタンを繰り返す',
        ':repeat_single_button:',
        '数字1の円の矢印',
        'ループ・ワンス・シンボル',
        'シングルトラック記号を繰り返す',
        '時計回りの右向きと左向きの円形の矢印(円形で1つのオーバーレイ付き)',
        ':blue:'
    ],
    '▶️': [
        '再生ボタン',
        ':play_button:',
        '右の三角形',
        '右ポインティングトライアングル（三角形）',
        '黒い右点の三角形を示します',
        ':blue:'
    ],
    '◀️': [
        '逆ボタン',
        ':reverse_button:',
        '左トライアングル(三角形)',
        '左ポインティングトライアングルformat@@0',
        '左側の三角形（ブラック）',
        ':blue:'
    ],
    '🔼': [
        '上向きのボタン',
        ':upwards_button:',
        '三角形を上へ',
        '上向きの三角形を指定する',
        '上向き小さな赤の三角形を指します',
        ':blue:'
    ],
    '🔽': [
        '下向きボタン',
        ':downwards_button:',
        'ダウントライアングルformat@@0',
        '下向きの三角形を指定する',
        '下向き小さな赤の三角形を示します',
        ':blue:'
    ],
    '⏩': [
        '早送りボタン',
        ':fast-forward_button:',
        ':fast_forward_button:',
        '早送り',
        '早送りシンボル',
        '黒い右指向の二重三角形',
        ':blue:'
    ],
    '⏪': [
        'Fast Reverse Button',
        ':fast_reverse_button:',
        'Rewind',
        'Rewind Symbol',
        '左側の黒い三角形を示しています',
        ':blue:'
    ],
    '⏫': [
        '高速化ボタン',
        ':fast_up_button:',
        '上向きの二重三角形',
        '上向きの二重三角形（ブラックアップポイント）',
        ':blue:'
    ],
    '⏬': [
        '高速ダウンボタン',
        ':fast_down_button:',
        '下向きの二重の三角形を示します',
        '下向きの二重三角形（ブラックダウン）',
        ':blue:'
    ],
    '⏹️': [
        '停止ボタン',
        ':stop_button:',
        '停止',
        '記号を停止する',
        'ストップ用ブラックスクエア',
        ':blue:'
    ],
    '⏏️': [
        '取り出しボタン',
        ':eject_button:',
        'Eject Symbol',
        ':blue:'
    ],
    '🎦': [
        'Cinema',
        ':cinema_button:',
        'シネマスクリーン',
        '映画',
        '映画',
        'シネマシンボル',
        '録音中',
        ':blue:'
    ],
    '📶': [
        'アンテナバー',
        ':antenna_bars_button:',
        '受付バー',
        '電波強度',
        'Stairs',
        'シグナル強度シンボル',
        '棒付きアンテナ',
        ':blue:'
    ],
    '✖️': [
        'かけ算',
        ':multiply:',
        '回数',
        '乗算記号',
        '重いかけ算X',
        ':black:'
    ],
    '➕': [
        'プラス',
        ':plus:',
        'プラス記号',
        'ヘビープラスサイン',
        ':black:'
    ],
    '➖': [
        'Minus',
        ':minus:',
        'Minus Symbol',
        'ヘビーマイナスサイン',
        ':black:'
    ],
    '➗': [
        '分割',
        ':divide:',
        '分割記号',
        'ヘビーディビジョンサイン',
        ':black:'
    ],
    '🟰': [
        'ヘビーイコールサイン',
        ':heavy_equals_sign:',
        '等しい',
        '結果',
        ':black:'
    ],
    '♾️': [
        'Infinity',
        ':infinity:',
        '永続的な用紙のサイン'
    ],
    '‼️': [
        '二重表示マーク',
        ':double_exclamation_mark:',
        '赤色の二重感嘆符（じっこう）',
        ':red:'
    ],
    '⁉️': [
        '感嘆符の問題',
        ':exclamation_question_mark:',
        '赤の感嘆符と問題マーク',
        ':red:'
    ],
    '❓': [
        '問題マーク',
        ':question_mark:',
        '赤い問題マーク',
        '黒い質問マークのオーナメント',
        ':red:'
    ],
    '❔': [
        '白の問題マーク',
        ':white_question_mark:',
        ':question_mark:',
        '白の問題マーク',
        '白質問マークのオーナメント',
        ':white:'
    ],
    '❗': [
        '感嘆符：',
        ':exclamation_mark:',
        '赤色の感嘆符：',
        '重い感嘆符記号',
        ':red:'
    ],
    '❕': [
        '白の感嘆符（白い）',
        ':white_exclamation_mark:',
        ':exclamation_mark:',
        '白の感嘆符のオーナメント',
        ':white:'
    ],
    '⭕': [
        'Hollow Red Circle',
        ':hollow_red_circle:',
        '円',
        '正しい',
        '赤い円',
        'サークルマーク',
        'ヘビーラージサークル',
        ':red:'
    ],
    '☑️': [
        'チェックボックスのチェック',
        ':check_box_with_check:',
        'V',
        'Checkbox',
        'チェックインボックス',
        '小切手付きのバルロットボックス'
    ],
    '✔️': [
        'チェックマーク',
        ':check_mark:',
        'V',
        'チェック',
        'チェック',
        'Checkmark',
        '重量チェックマーク',
        ':black:'
    ],
    '❌': [
        '十字マーク',
        ':cross_mark:',
        'クロス',
        'X',
        ':red:'
    ],
    '✅': [
        'チェックボタン',
        ':check_mark_button:',
        'V',
        '緑色のチェックマーク',
        '緑色のティック（緑）',
        'チェックマーク',
        'ホワイトヘビーチェックマーク',
        ':green:'
    ],
    '❎': [
        'クロスマークボタン',
        ':cross_mark_button:',
        'クロス',
        'X',
        'X マーク',
        '負の正方形の十字マーク',
        ':green:'
    ],
    '#️⃣': [
        'キーキャップ番号サイン',
        ':hash_key:',
        '#',
        'ハッシュキー',
        'ハッシュタグ',
        'タクトソープ',
        'ポンドキー',
        '数字のサイン',
        ':blue:'
    ],
    '*️⃣': [
        'Keycap Asterisk',
        ':asterisk:',
        'スターキーキャップ',
        ':blue:'
    ],
    '0️⃣': [
        '数値 0',
        ':number_0:',
        'Keycap Digit Zero'
    ],
    '1️⃣': [
        '数値 1',
        ':number_1:',
        'キーキャップ桁1'
    ],
    '2️⃣': [
        '数値 2',
        ':number_2:',
        'キーキャップ桁2'
    ],
    '3️⃣': [
        '数値 3',
        ':number_3:',
        'キーキャップ桁3'
    ],
    '4️⃣': [
        '数値 4',
        ':number_4:',
        'キーキャップの桁4'
    ],
    '5️⃣': [
        '数値 5',
        ':number_5:',
        'キーキャップ桁5'
    ],
    '6️⃣': [
        '数値 6',
        ':number_6:',
        'キーキャップ桁6'
    ],
    '7️⃣': [
        '数値 7',
        ':number_7:',
        'Keycap Digit Seven'
    ],
    '8️⃣': [
        '数値 8',
        ':number_8:',
        'キーキャップ桁8'
    ],
    '9️⃣': [
        '9',
        ':number_9:',
        'キーキャップデジットナイン'
    ],
    '🔟': [
        '数値 10',
        ':number_10:',
        'Keycap: 10',
        '10',
        'キーキャップの桁数'
    ],
    '🔠': [
        'Input Latin Uppercase',
        ':input_latin_uppercase:',
        'ABCD',
        '大文字・小文字',
        '大文字の文字を入力してください',
        'ラテン文字の記号を入力',
        ':blue:'
    ],
    '🔡': [
        'Input Latin Lowercase',
        ':input_latin_lowercase:',
        'abcd',
        '小文字',
        '小文字の記号を入力',
        'ラテン文字の記号を入力',
        ':blue:'
    ],
    '🔢': [
        'Input Numbers',
        ':input_numbers:',
        '1234',
        '数値',
        'Numeric Input',
        '数値の記号を入力',
        ':blue:'
    ],
    '🔣': [
        '記号の入力記号',
        ':input_symbols:',
        '記号',
        '記号入力',
        ':blue:'
    ],
    '🔤': [
        'Input Latin Letters',
        ':input_latin_letters:',
        'abc',
        'アルファベット(&A)',
        '文字',
        '文字に記号を入力',
        'ラテン文字の記号を入力',
        ':blue:'
    ],
    '🅰️': [
        'A Button (Blood種類)',
        ':a_blood:',
        '血液型A',
        '文字 A',
        '負の四乗ラテン文字A',
        ':red:'
    ],
    '🆎': [
        'ABボタン（ブーッドタイプ）',
        ':ab_blood:',
        'AB文字',
        '血液型AB',
        '負の二乗AB',
        ':red:'
    ],
    '🅱️': [
        'Bボタン (ブロッドタイプ)',
        ':b_blood:',
        '文字 B',
        '血液型B',
        '負の四乗ラテン文字B',
        ':red:'
    ],
    '🆑': [
        'CL ボタン',
        ':cl_button:',
        'クリア',
        'クリアボタン',
        'CL サイン',
        '正方形CL',
        '文字 CL',
        ':red:'
    ],
    '🆒': [
        'クールボタン',
        ':cool_button:',
        'クールなスクエア',
        'クールなサイン',
        '四角いクール',
        ':blue:'
    ],
    '🆓': [
        'フリーボタン',
        ':free_button:',
        '無料',
        '無料のサイン',
        '2乗無料',
        ':blue:'
    ],
    'ℹ️': [
        '情報',
        ':info_button:',
        '情報',
        '小文字I',
        '観光情報',
        '情報ソース',
        ':blue:'
    ],
    '🆔': [
        'ID ボタン',
        ':id_button:',
        'ID',
        '識別',
        '識別記号',
        '正方形のID',
        ':purple:'
    ],
    '🆕': [
        '新しいボタン',
        ':new_button:',
        '新規作成',
        '新しいサイン',
        '四角形の新規作成',
        ':blue:'
    ],
    '🅾️': [
        'O ボタン (ブルドタイプ)',
        ':0_blood:',
        '血液型O',
        '0',
        '負の四角いラテン文字のキャピタル文字',
        '文字 O',
        ':red:'
    ],
    '🆗': [
        'OK ボタン',
        ':ok_button:',
        'OK',
        'OK',
        '正方形（正方形）',
        'OK',
        '四角形でOK',
        ':blue:'
    ],
    '🅿️': [
        'P ボタン',
        ':p_button:',
        ':parking_sign:',
        '駐車場のサイン',
        '負の四角いラテン文字のキャピタル文字',
        '文字 P',
        ':blue:'
    ],
    '🆘': [
        'SOSボタン',
        ':sos_button:',
        'シグナルを妨害する',
        'Emergency',
        'SOS',
        'SOSサイン',
        '平方SOS',
        'ヘルプ',
        ':red:'
    ],
    '🆙': [
        '上！ボタン',
        ':up_button:',
        'レベル アップ',
        '上へ',
        '上向きサイン',
        '感嘆符で二乗する',
        ':blue:'
    ],
    '🆚': [
        '対向ボタン',
        ':vs_button:',
        '正方形対数',
        ':orange:'
    ],
    '🆖': [
        'NGボタン',
        ':ng_button:',
        'Squared NG',
        '良い看板なし',
        '良いものはありません',
        ':ng:',
        'Bloper',
        ':blue:'
    ],
    '🔴': [
        '赤い円',
        ':red_circle:',
        '大きな赤い円',
        ':red:'
    ],
    '🟠': [
        'オレンジの円',
        ':orange_circle:',
        '大きなオレンジの円',
        ':orange:'
    ],
    '🟡': [
        '黄色の円',
        ':yellow_circle:',
        '大きな黄色の円',
        ':yellow:'
    ],
    '🟢': [
        '緑の円',
        ':green_circle:',
        '大きな緑色の円',
        ':green:'
    ],
    '🔵': [
        '青い円',
        ':blue_circle:',
        '大きな青い円',
        ':blue:'
    ],
    '🟣': [
        '紫色の円',
        ':purple_circle:',
        '大きな紫色の円',
        ':purple:'
    ],
    '🟤': [
        '茶色の円',
        ':brown_circle:',
        '大きな茶色の円',
        ':brown:'
    ],
    '⚫': [
        '黒い円',
        ':black_circle:',
        '中間の黒い円',
        ':black:'
    ],
    '⚪': [
        '白い円',
        ':white_circle:',
        '中間の白い円',
        ':white:'
    ],
    '🟥': [
        'レッドスクエア',
        ':red_square:',
        '大きな赤い広場',
        ':red:'
    ],
    '🟧': [
        'オレンジスクエア',
        ':orange_square:',
        '大きなオレンジスクエア',
        ':orange:'
    ],
    '🟨': [
        'イエロースクエア',
        ':yellow_square:',
        '大きな黄色の広場',
        ':yellow:'
    ],
    '🟩': [
        '緑の広場',
        ':green_square:',
        '大きな緑の広場',
        ':green:'
    ],
    '🟦': [
        'ブルースクエア',
        ':blue_square:',
        '大きなブルースクエア',
        ':blue:'
    ],
    '🟪': [
        'パープルスクエア',
        ':purple_square:',
        '大きな紫色のスクエア',
        ':purple:'
    ],
    '🟫': [
        '茶色の広場',
        ':brown_square:',
        '大きな茶色の広場',
        ':brown:'
    ],
    '⬛': [
        '黒い広場（大）',
        ':black_large_square:',
        ':black:'
    ],
    '⬜': [
        '白色の大きい広場',
        ':white_large_square:',
        ':white:'
    ],
    '◼️': [
        'ブラックミディアムスクエア',
        ':black_medium_square:',
        ':black:'
    ],
    '◻️': [
        'ホワイト・ミディアムスクエア',
        ':white_medium_square:',
        ':white:'
    ],
    '◾': [
        '中程度の小さな正方形（黒）',
        ':black_medium_small_square:',
        ':black:'
    ],
    '◽': [
        '白色の小さい正方形（中）',
        ':white_medium_small_square:',
        ':white:'
    ],
    '▪️': [
        '黒い小さい正方形（じっこう）',
        ':black_small_square:',
        ':black:'
    ],
    '▫️': [
        '白色の小さな正方形(S)',
        ':white_small_square:',
        ':white:'
    ],
    '💠': [
        '内側にドット付きのダイヤモンド形状',
        ':diamond_shape_with_dot:',
        'かわいいです',
        'ダイヤモンドの花',
        'カワイイ'
    ],
    '🔶': [
        '大型オレンジダイヤモンド',
        ':large_orange_diamond:',
        ':orange:'
    ],
    '🔷': [
        'ラージブルーダイヤモンド',
        ':large_blue_diamond:',
        ':blue:'
    ],
    '🔸': [
        'スモールオレンジダイヤモンド',
        ':small_orange_diamond:',
        ':orange:'
    ],
    '🔹': [
        'スモールブルーダイヤモンド',
        ':small_blue_diamond:',
        ':blue:'
    ],
    '🔺': [
        '赤い三角形が上に向かっています',
        ':red_triangle_pointed_up:',
        '上向きの赤の三角形を指します',
        ':red:'
    ],
    '🔻': [
        '赤の三角形が下向きになっています',
        ':red_triangle_pointed_down:',
        '下向きの赤の三角形を指定する',
        ':red:'
    ],
    '🔳': [
        '白の正方形ボタン',
        ':white_square_button:',
        ':white:',
        ':black:'
    ],
    '🔲': [
        '黒い正方形ボタン',
        ':black_square_button:',
        ':white:',
        ':black:'
    ],
    '©️': [
        '著作権',
        ':copyright:',
        ':c:',
        '著作権記号'
    ],
    '®️': [
        '登録済み',
        ':registered:',
        ':r:',
        '登録済みのサイン'
    ],
    '™️': [
        'トレードマーク',
        ':trade_mark:',
        ':tm:',
        '商標',
        '商標記号'
    ],
    '🛅': [
        '左の荷物format@@0',
        ':left_luggage:',
        '鍵付きバッグ',
        'ロックされたスーツケース',
        ':blue:'
    ],
    '🛄': [
        '手荷物の請求',
        ':baggage_claim:',
        ':blue:'
    ],
    '🛃': [
        '税関情報',
        ':customs:',
        ':blue:'
    ],
    '🛂': [
        'パスポートコントロール',
        ':passport_control:',
        '枠線コントロール',
        ':blue:'
    ],
    //"🛜": ["Wireless", ":wireless:", ":wifi:", ":wi_fi:", "Wifi", "wi-fi", "wireless connection", ":blue:"],
    '🚰': [
        '飲料水のシンボル',
        ':potable_water_symbol:',
        '渇き',
        'のど渇き',
        '浄水場',
        '水の<unk>'
    ],
    '🇦': [
        '文字 A',
        ':letter_a:',
        ':a:',
        '地域インジケータ記号A'
    ],
    '🇧': [
        '文字 B',
        ':letter_b:',
        ':b:',
        '地域インジケーターシンボルB'
    ],
    '🇨': [
        '文字 C',
        ':letter_c:',
        ':c:',
        '地域インジケータ記号C'
    ],
    '🇩': [
        '文字 D',
        ':letter_d:',
        ':d:',
        '地域インジケータ記号文字 D'
    ],
    '🇪': [
        '文字 E',
        ':letter_e:',
        ':e:',
        '地域インジケーターシンボル文字 E'
    ],
    '🇫': [
        '文字 F',
        ':letter_f:',
        ':f:',
        '地域インジケーターシンボル文字F'
    ],
    '🇬': [
        '文字 G',
        ':letter_g:',
        ':g:',
        '地域インジケータ記号文字 G'
    ],
    '🇭': [
        '文字 H',
        ':letter_h:',
        ':h:',
        '地域インジケータシンボル文字H'
    ],
    '🇮': [
        'レターI',
        ':letter_i:',
        ':i:',
        '地域インジケーターシンボルI'
    ],
    '🇯': [
        'Letter J',
        ':letter_j:',
        ':j:',
        'Regional Indicator Symbol letter J'
    ],
    '🇰': [
        '文字 K',
        ':letter_k:',
        ':k:',
        '地域インジケーターシンボル文字 K'
    ],
    '🇱': [
        '文字 L',
        ':letter_l:',
        ':l:',
        '地域インジケーターシンボル文字 L'
    ],
    '🇲': [
        '文字 M',
        ':letter_m:',
        ':m:',
        '地域インジケータシンボル文字M'
    ],
    '🇳': [
        '文字 N',
        ':letter_n:',
        ':n:',
        '地域インジケータ記号文字 N'
    ],
    '🇴': [
        '文字 O',
        ':letter_o:',
        ':o:',
        '地域インジケータシンボル文字 O'
    ],
    '🇵': [
        '文字 P',
        ':letter_p:',
        ':p:',
        '地域インジケータシンボル文字P'
    ],
    '🇶': [
        '手紙 Q',
        ':letter_q:',
        ':q:',
        '地域インジケータ記号文字 Q'
    ],
    '🇷': [
        '文字R',
        ':letter_r:',
        ':r:',
        '地域インジケータシンボル文字R'
    ],
    '🇸': [
        '文字 S',
        ':letter_s:',
        ':s:',
        '地域インジケータシンボル文字S'
    ],
    '🇹': [
        '文字 T',
        ':letter_t:',
        ':t:',
        '地域インジケータシンボル文字 T'
    ],
    '🇺': [
        '文字 U',
        ':letter_u:',
        ':u:',
        '地域インジケータシンボル文字U'
    ],
    '🇻': [
        '手紙 V',
        ':letter_v:',
        ':v:',
        '地域インジケータ記号V'
    ],
    '🇼': [
        'W文字',
        ':letter_w:',
        ':w:',
        '地域インジケータシンボル文字W'
    ],
    '🇽': [
        '文字 X',
        ':letter_x:',
        ':x:',
        '地域インジケータ記号X'
    ],
    '🇾': [
        '文字 Y',
        ':letter_y:',
        ':y:',
        '地域インジケータ記号の文字 Y'
    ],
    '🇿': [
        '文字 Z',
        ':letter_z:',
        ':z:',
        '地域インジケーター記号Z'
    ],
    '💌': [
        'ラブレター',
        ':love_letter:',
        'ハート封筒',
        '愛のメモ'
    ],
    '🚮': [
        '場所のシンボルにゴミを置く',
        ':put_litter_in_bing_sign:',
        'ゴミ箱のサイン',
        'ゴミ箱にゴミを置く',
        'ゴミ箱にいる人'
    ],
    '♿': [
        '車椅子シンボル',
        ':wheelchair_symbol:',
        'アクセス可能なトイレ'
    ],
    '🚹': [
        'メンズシンボル',
        ':mens_symbol:',
        'メンズシンボル',
        'メンズトイレ',
        '男性用トイレ',
        'WC男性format@@0',
        ':blue:'
    ],
    '🚺': [
        '女性のシンボル',
        ':womens_symbol:',
        '女性のシンボル',
        'レディーストイレ',
        '女性トイレ',
        'Famale VC',
        ':purple:',
        ':pink:'
    ],
    '🚻': [
        'トイレ',
        ':restroom:',
        'バスルームのサイン',
        'トイレのサイン',
        'WCサイン',
        ':blue:'
    ],
    '🚼': [
        '赤ちゃんシンボル',
        ':baby_symbol:',
        '赤ちゃん交換ステーション',
        '赤ちゃんの変更シンボル',
        '保育所',
        ':orange:'
    ],
    '🚾': [
        '水のクロセット',
        ':wc:',
        'WC（世界）',
        'トイレ WC',
        ':blue:'
    ],
    '⚠️': [
        '警告サイン',
        ':warning_sign:',
        'アラートシンボル',
        ':yellow:'
    ],
    '🚸': [
        '子どもクロッシング中',
        ':children_crossing:',
        'キッズクロス',
        '学校クロッシング（学校横断）',
        ':yellow:'
    ],
    '🔅': [
        '明るさが低い記号',
        ':low_brightness_symbol:',
        '薄暗いボタン',
        '明るさを減らす'
    ],
    '🔆': [
        '高輝度シンボル',
        ':high_brightness_symbol:',
        '明るさを上げる',
        '明るいボタン'
    ],
    '📳': [
        '振動モード',
        ':vibration_mode:',
        '電話のハート',
        'サイレントモード',
        ':orange:'
    ],
    '📴': [
        '携帯電話はオフ',
        ':mobile_phone_off:',
        ':orange:'
    ],
    '〰️': [
        'ウェーブ',
        'Wavy Dash',
        ':wave:'
    ],
    '💱': [
        '通貨交換',
        ':currency_exchange:'
    ],
    '💲': [
        'ヘビーダラーサイン',
        ':dollar_symbol:',
        'ドル',
        'ドル記号'
    ],
    '♻️': [
        'ブラックユニバーサルリサイクルシンボル',
        ':recycling_symbol:',
        'リサイクルシンボル',
        'リサイクルロゴ',
        ':green:'
    ],
    '🔱': [
        'トライデントバッジ',
        ':trident_emblem:',
        'Pitchfork',
        'Trident'
    ],
    '📛': [
        '名前バッジ',
        ':name_badge:',
        '火の上の豆腐です',
        'プレート',
        '火災タグ'
    ],
    '🔰': [
        '初級者向けの日本のシンボル',
        ':japanese_symbol_beginner:',
        '松新社マーク',
        '黄色の緑色のシールド',
        ':green:',
        ':yellow:'
    ],
    '➰': [
        'カーリーループ',
        ':curly_loop:',
        'カーリングループ',
        'ループ'
    ],
    '➿': [
        'ダブルカーリーループ',
        ':double_curly_loop:',
        'ダブルカーリングループ',
        'ボイスメール'
    ],
    '〽️': [
        'パートの代替マーク',
        ':part_alternation_mark:',
        'M',
        'マクドナルド語'
    ],
    '✳️': [
        '八つの口笛を吹いたアスタリスク',
        ':eight_spoked_asterisk:',
        ':green:'
    ],
    '✴️': [
        '8つの点のある黒い星',
        ':eight_pointed_star:',
        'オレンジの星',
        '8つのポイントスター',
        ':orange:'
    ],
    '❇️': [
        'スパーク',
        ':sparkle:',
        ':green:'
    ],
    'Ⓜ️': [
        '円を描いたM',
        '半角英数字M',
        ':circled_m:',
        'Metro',
        ':blue:'
    ],
    '🈁': [
        '日本語の単語標識の意味',
        'Squared Katakana Koko',
        ':japanese_here:',
        'ここ',
        '保存先',
        ':blue:'
    ],
    '🈂️': [
        '日本語サインの意味サービスまたはサービス料金',
        'Squared Katakana Sa',
        ':japanese_service:',
        ':blue:'
    ],
    '🈷️': [
        '和看板意味 月額額',
        'Squared CJK Unified Ideograph-6708',
        ':japanese_monthly_amouny:',
        'Radical 74',
        '月',
        ':orange:'
    ],
    '🈶': [
        '日本の看板は無料ではありません',
        '平方CJK統一Ideograph-6709',
        ':japanese_own:',
        '自分のもの',
        '有',
        ':orange:'
    ],
    '🈯': [
        '和看板意味 予約済み',
        '正方形CJK統一Ideograph-6307',
        ':japanese_reserved:',
        '指のポイント',
        '指',
        ':green:'
    ],
    '🉐': [
        '日本の看板の意味 Bargain',
        '円形のアイデアグラフの利点',
        ':japanese_acquire:',
        '取得する',
        '得',
        ':red:'
    ],
    '🈹': [
        '和看板の意味割引',
        '正方形CJK統一表記-5272',
        ':japanese_discount:',
        'バーゲンセール',
        '割',
        ':red:'
    ],
    '🈚': [
        '日本語看板の意味 無償で',
        '四角いCJK統一Ideograph-7121',
        ':japanese_lacking:',
        '欠けている',
        '無',
        ':orange:'
    ],
    '🈲': [
        '和印意味禁止（和記）',
        '正方形CJK統一表示-7981',
        ':japanese_prohibited:',
        'Forbid',
        '禁',
        ':red:'
    ],
    '🉑': [
        '日本語看板の意味 受け入れられます',
        '円形のアイデアを許可する',
        ':japanese_accept:',
        '同意する',
        ':orange:'
    ],
    '🈸': [
        '日本語看板の意味アプリケーション',
        '四角いCJK統合型Ideograph-7533',
        ':japanese_application_form:',
        '申請フォーム',
        'モンキー',
        'リクエスト',
        '申',
        ':orange:'
    ],
    '🈴': [
        '和看板意味 合格(属性)',
        '正方形CJK統一表示-5408',
        ':japanese_agreement:',
        '契約',
        '合',
        ':red:'
    ],
    '🈳': [
        '日本語サイン意味 空室',
        '正方形CJK統一Ideograph-7a7a',
        ':japanese_available:',
        '空で利用可能',
        '空',
        ':blue:'
    ],
    '㊗️': [
        '和看板の意味 おめでとうございます。',
        '円形のアイデアグラフおめでとう',
        ':japanese_congratulations:',
        ':red:'
    ],
    '㊙️': [
        '円形のアイデアシークレット',
        ':japanese_secret:',
        '和看板の意味の秘密',
        'シークレット',
        ':red:'
    ],
    '🈺': [
        '日本語サインはビジネスのために開かれています',
        '四角いCJK統一Ideograph-55b6',
        ':japanese_open_for_business:',
        '仕事',
        '営',
        ':orange:'
    ],
    '🈵': [
        '日本語サインインの意味が満たされました; 空室なし',
        'Squared CJK Unified Ideograph-6e80',
        ':japanese_full:',
        'フル',
        '満',
        ':red:'
    ],
    '🔘': [
        'Radio Button',
        ':radio_button:'
    ],
    '🛑': [
        '看板を停止する',
        ':stop_sign:',
        '八角記号',
        ':red:'
    ],
    '⚕️': [
        '医療シンボル',
        ':medical_symbol:',
        'Aesculapius',
        'Asklepios',
        'アスクレピウスのロッド',
        'Aesculapius のスタッフ'
    ],
    '🛗': [
        'エレベーター',
        ':elevator:',
        ':lift:',
        'リフト'
    ],
    '⚧️': [
        'トランスジェンダー記号',
        ':transgender_sign:'
    ],
    '♂️': [
        '男性サイン',
        ':male_sign:',
        '男のシンボル',
        'Mars Symbol'
    ],
    '♀️': [
        '女性のサイン',
        ':female_sign:',
        '女性のシンボル',
        'Venus Symbol'
    ]
};
/*food and drinks*/
emojis_language[lang][6] = {
    '🍇': [
        'ブドウ',
        ':grapes:',
        'ブドウ',
        ':purple:'
    ],
    '🍈': [
        'メロン語',
        ':melon:',
        'Cantaloupe',
        'ハニ露（はね）',
        'ムスクメロン語'
    ],
    '🍉': [
        'スイカ。',
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
        'レモネード',
        ':yellow:'
    ],
    '🍌': [
        'バナナ',
        ':banana:',
        'プランタイン',
        ':yellow:'
    ],
    '🍍': [
        'パイナップル（パイナップル）',
        ':pineapple:'
    ],
    '🥭': [
        'Mango',
        ':mango:'
    ],
    '🍎': [
        '赤のApple',
        ':red_apple:',
        ':apple:',
        '赤がおいしいリンゴです',
        ':red:'
    ],
    '🍏': [
        '緑のリンゴ（りんご）',
        ':green_apple:',
        ':apple:',
        '黄金のおいしいリンゴ（りんご）',
        'おばあちゃんスミスのApple',
        ':green:'
    ],
    '🍐': [
        '梨（ていね）',
        ':pear:'
    ],
    '🍑': [
        'ピーチ',
        ':peach:',
        '下揃え',
        'バット',
        ':orange:',
        ':pink:'
    ],
    '🍒': [
        'サクランボ',
        ':cherry:',
        '桜',
        '野生の桜',
        ':red:'
    ],
    '🍓': [
        'イチゴ',
        ':strawberry:',
        ':red:'
    ],
    '🥝': [
        'キウイフルーツ',
        ':kiwi:',
        'グースベリー',
        'Kiwi',
        'キウイフルーツ',
        ':green:'
    ],
    '🍅': [
        'トマト',
        ':tomato:',
        ':red:'
    ],
    '🥥': [
        'Coconut',
        ':coconut:',
        'Cocoanut'
    ],
    '🥑': [
        'アボカド',
        ':avocado:',
        ':green:'
    ],
    '🍆': [
        '茄子',
        ':eggplant:',
        ':aubergine:',
        'Aubergine',
        'Phallic',
        '紫色の野菜',
        ':purple:'
    ],
    '🥔': [
        'じゃがいも',
        ':potato:',
        'ベイクドポテト',
        'アイダホポテト'
    ],
    '🥕': [
        'ニンジン（ニンジン）',
        ':carrot:',
        ':orange:'
    ],
    '🌽': [
        'トウモロコシの耳',
        ':ear_of_corn:',
        'トウモロコシ（トウモロコシ）',
        'Cob のトウモロコシ。',
        'Maize',
        'Maizeの耳'
    ],
    '🌶️': [
        'Hot pepper',
        ':hot_pepper:',
        'チリ・ペッパー',
        'スパイシー',
        ':red:'
    ],
    '🥒': [
        'キュウリ（キュウリ）',
        ':cucumber:',
        'Gherkin',
        'Pickle',
        ':green:'
    ],
    '🥬': [
        'Leafy Green',
        ':leafy_green:',
        'Bok Choy',
        '中国のキャベツ（白菜）',
        'Cos Lettuce',
        'Romaine Lettuce',
        'Leafy Green',
        ':green:'
    ],
    '🥦': [
        'ブロッコリー語',
        ':broccoli:',
        ':green:'
    ],
    '🍄': [
        'キノコ',
        ':mushroom:',
        'Shroom',
        'Toadstool'
    ],
    '🥜': [
        'Peanuts',
        ':peanuts:',
        'ナット数',
        ':brown:'
    ],
    '🌰': [
        '栗色',
        ':chestnut:',
        'Acorn',
        'Nut',
        ':brown:'
    ],
    '🍞': [
        'パン',
        ':bread:',
        'パンのパン',
        ':brown:'
    ],
    '🥐': [
        'Croissant',
        ':croissant:',
        ':brown:'
    ],
    '🥖': [
        'バゲットパン',
        ':baguette_bread:',
        'フレンチパン',
        'バゲット',
        ':brown:'
    ],
    '🥨': [
        'Pretzel',
        ':pretzel:',
        ':brown:'
    ],
    '🥯': [
        'ベーグル',
        ':bagel:',
        ':brown:'
    ],
    '🥞': [
        'パンツ',
        ':pancakes:',
        'Cre<unk> pes',
        'ホットケーキ',
        ':yellow:'
    ],
    '🧀': [
        'チーズ ウェッジ型',
        ':cheese_wedge:',
        'チーズ',
        ':yellow:'
    ],
    '🍖': [
        '骨に生肉',
        ':meat_on_bone:',
        'バーベキューパーティー',
        'Barbecue',
        'マンガの肉',
        ':red:'
    ],
    '🍗': [
        'Poultry Leg',
        ':poultry_leg:',
        'ドラムスティック',
        'トルコの足',
        ':red:'
    ],
    '🥩': [
        '肉のカット',
        ':cut_of_meat:',
        '肉',
        'ステーキ',
        ':red:'
    ],
    '🥓': [
        'Bacon',
        ':bacon:',
        'Rashers',
        ':red:'
    ],
    '🍔': [
        'ハンバーグ',
        ':hamburger:',
        'バーガー',
        'チーズバーグ'
    ],
    '🍟': [
        'フレンチフライ',
        ':french_fries:',
        'チップ',
        'フライ',
        'マクドナルドフライ',
        ':yellow:'
    ],
    '🍕': [
        'ピザ',
        ':pizza:',
        'ペパロニピザ',
        'ピザのスライス。',
        ':red:'
    ],
    '🌭': [
        'ホット犬',
        ':hot_dog:',
        'Hotdog',
        'ソーセージformat@@0',
        ':red:'
    ],
    '🥪': [
        'Sandwich',
        ':sandwich:'
    ],
    '🌮': [
        'タコ',
        ':taco:'
    ],
    '🌯': [
        'Burrito',
        ':burrito:',
        '折り返す'
    ],
    '🥙': [
        'ぬいぐるみフラットブレッド',
        ':stuffed_flatbread:',
        'Doner Kebab',
        'Gyro',
        'Shawarma',
        'ピタサンドウィッチ'
    ],
    '🍳': [
        '料理',
        ':cooking:',
        '朝食',
        '炒めた卵',
        'フライパン'
    ],
    '🥘': [
        '食物の浅いパン',
        ':shallow_pan_of_food:',
        'Paella',
        '食べ物のパン'
    ],
    '🍲': [
        'Comida',
        ':pot_of_food:',
        '料理',
        'スープ',
        '煮込み'
    ],
    '🥣': [
        'スプーンとボウルに',
        ':bowl_with_spoon:',
        'シリアル丼'
    ],
    '🥗': [
        'グリーンサラダ',
        ':green_salad:',
        'サラダ',
        ':green:'
    ],
    '🍿': [
        'ポップコーン',
        ':popcorn:',
        'トウモロコシをポップアップ'
    ],
    '🧂': [
        '塩',
        ':salt:',
        'ソルトシェーカー',
        ':white:'
    ],
    '🥫': [
        'Canned Food',
        ':canned_food:',
        'Can of Food',
        '錫缶',
        'Tinned Food'
    ],
    '🍱': [
        '弁当箱',
        ':bento_box:',
        '弁当箱'
    ],
    '🍘': [
        '米職人。',
        ':rice_cracker:',
        'クラッカー'
    ],
    '🍙': [
        '米のボール',
        ':rice_ball:',
        'Onigiri'
    ],
    '🍚': [
        '炊き込みごご飯',
        ':cooked_rice:',
        '炊き',
        'ご飯',
        'ご飯の丼',
        '炊き込みご飯'
    ],
    '🍛': [
        'カレーライス',
        ':curry_rice:',
        'カレー',
        'インド料理',
        'カレーライス'
    ],
    '🍜': [
        '蒸している丼',
        ':steaming_bowl:',
        '麺',
        '箸の付いた麺',
        'ラーメン'
    ],
    '🍝': [
        'Spaghetti',
        ':spaghetti:',
        'パスタ（パスタ）'
    ],
    '🍠': [
        '甘いじゃがいも',
        ':roasted_sweet_potato:',
        '甘いじゃがいも',
        'Yam'
    ],
    '🍢': [
        'おでん（おでん）',
        ':oden:',
        'Kebab',
        'Skewer'
    ],
    '🍣': [
        '寿司',
        ':sushi:',
        'Sashimi',
        '<unk>',
        ':pink:'
    ],
    '🍤': [
        'エビ炒め',
        ':fried_shrimp:',
        'エビ炒め',
        '海老てんぷら（えびんぷら）'
    ],
    '🍥': [
        '渦巻きと魚のケーキ',
        ':fish_cake_with_swirl:',
        '魚ケーキ',
        'Pink Swirl'
    ],
    '🥮': [
        'ムーンケーキ',
        ':moon_cake:',
        'Mooncake'
    ],
    '🍡': [
        'Dango',
        ':dango:',
        'デザートスティック',
        '桃色の白緑色のボール'
    ],
    '🥟': [
        'ダンプ',
        ':dumpling:',
        'Empanada',
        'Pierogi'
    ],
    '🥠': [
        'フォーチュンクッキー',
        ':fortune_cookie:'
    ],
    '🥡': [
        'テイクアウトボックス',
        ':takeout_box:',
        'China Comida',
        'Oyster Pail'
    ],
    '🍦': [
        'ソフトアイスクリーム',
        ':soft_ice_cream:',
        'Whippy氏',
        'ソフトサーブ'
    ],
    '🍧': [
        'かき氷',
        ':shaved_ice:',
        'Snow Cone'
    ],
    '🍨': [
        'アイスクリーム',
        ':ice_cream:',
        'アイスクリームの丼',
        'デザート'
    ],
    '🍩': [
        'ドーナツ型',
        ':doughnut:',
        'Donut'
    ],
    '🍪': [
        'クッキー',
        ':cookie:',
        'ビスケット',
        'チョコレートチップクッキー',
        ':brown:'
    ],
    '🎂': [
        '誕生日ケーキ',
        ':birthday_cake:',
        '誕生日',
        'ケーキ',
        'ロウソク付きケーキ'
    ],
    '🍰': [
        'Shortcake',
        ':shortcake:',
        'ケーキ',
        'ケーキ',
        'ストロベリーショートケーキ'
    ],
    '🧁': [
        'カップケーキ',
        ':cupcake:',
        '妖精ケーキ'
    ],
    '🥧': [
        'Pie',
        ':pie:'
    ],
    '🍫': [
        'チョコレートバー',
        ':chocolate_bar:',
        'キャンディバー',
        'チョコレート',
        ':brown:'
    ],
    '🍬': [
        'Candy',
        ':candy:',
        'Lolly',
        'すてきな'
    ],
    '🍭': [
        'Lollipop',
        ':lollipop:',
        'サッカー'
    ],
    '🍮': [
        'カスタード',
        ':custard:',
        'Creme Caramel',
        'デザート',
        'Flan',
        'プディング'
    ],
    '🍯': [
        'はちみつポット',
        ':honey_pot:',
        'ハニー',
        'ポット',
        ':yellow:'
    ],
    '🍼': [
        '赤ちゃんのボトル',
        ':baby_bottle:',
        'ボトルの餌付け'
    ],
    '🥛': [
        'ガラス of Milk',
        ':glass_of_milk:',
        'ミルク',
        ':white:'
    ],
    '☕': [
        'ホット飲料',
        ':hot_beverage:',
        'コーヒー',
        'Espresso',
        'ホットチョコレート',
        'お茶format@@0'
    ],
    '🍵': [
        'ハンドルなしのティーカップ',
        ':green_tea:',
        '<unk>',
        'Matcha',
        '抹茶（抹茶）',
        ':green:'
    ],
    '🍶': [
        'Sake',
        ':sake:',
        'ボトル',
        '米のワイン',
        '酒瓶とカップ'
    ],
    '🍾': [
        'ポッピングコルク付きボトル',
        ':champagne:',
        '祝賀会',
        'Champagne',
        'スパークリングワイン'
    ],
    '🍷': [
        'ワインガラス',
        ':wine_glass:',
        'alcohol',
        '赤ワイン',
        'ワイン'
    ],
    '🍸': [
        'カクテルガラス',
        ':cocktail_glass:',
        'Cocktail',
        'マティーニ'
    ],
    '🍹': [
        'トロピカルドリンク',
        ':tropical_drink:',
        'フルーツポンプ',
        'ティキ・ドリンク'
    ],
    '🍺': [
        'ビールマグ',
        ':beer_mug:',
        'ビール',
        'ビールスタイン',
        ':yellow:'
    ],
    '🍻': [
        'クリンキングビールマグカップ',
        ':clinking_beer_mugs:',
        'ビール',
        '乾杯！'
    ],
    '🥂': [
        'Clinking Glasses',
        ':clinking_glasses:',
        '祝賀会',
        'シャンパングラス',
        '乾杯！'
    ],
    '🥃': [
        'タンブラーガラス',
        ':tumbler_glass:',
        'Bourbon',
        '酒',
        'Rum',
        'Whiskey',
        'Whisky'
    ],
    '🥤': [
        'ストローとカップ',
        ':cup_with_straw:',
        'ミルクシェイクformat@@0',
        'スムージー',
        'ソーダポップアップ',
        'ソフトドリンク'
    ],
    '🥢': [
        '箸の代わりに',
        ':chopsticks:'
    ],
    '🍽️': [
        'フォークとナイフ',
        ':fork_and_knife_with_plate:',
        'ディナー',
        ':white:',
        ':gray:',
        ':grey:'
    ],
    '🍴': [
        'フォークとナイフ',
        ':fork_and_knife:',
        'カトラリー',
        'ナイフとフォーク',
        'シルバーウェア',
        ':gray:',
        ':grey:'
    ],
    '🥄': [
        'スプーン',
        ':spoon:',
        ':gray:',
        ':grey:'
    ],
    '🧄': [
        'ガーリック',
        ':garlic:'
    ],
    '🧅': [
        'オニオンformat@@0',
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
        'バター',
        ':butter:'
    ],
    '🦪': [
        'オイスター',
        ':oyster:'
    ],
    '🧃': [
        '飲料箱',
        ':beverage_box:',
        'ジュースボックス'
    ],
    '🧉': [
        'メイトドリンク',
        ':mate_drink:',
        'Chimara_face:',
        'Cimarrón',
        'Yerba Mate'
    ],
    '🫒': [
        'オリーブ',
        ':olive:',
        ':green:'
    ],
    '🫐': [
        'ブルーベリー',
        ':blueberries:',
        ':blue:'
    ],
    '🫑': [
        'ベルペッパー',
        ':bell_pepper:',
        ':green:'
    ],
    '🫓': [
        'フラットブレッド',
        ':flatbread:'
    ],
    '🫔': [
        'Tamale',
        ':tamale:',
        'タマル語'
    ],
    '🫕': [
        'Fondue',
        ':fondue:'
    ],
    '🧋': [
        'バブルティー',
        ':boba:',
        'Boba'
    ],
    '🧊': [
        'アイスキューブ（アイスキューブ）',
        ':ice_cube:'
    ],
    '🫘': [
        'Beans',
        'Flatulence',
        ':beans:',
        'コーヒー豆',
        'Spill the beans'
    ],
    '🫗': [
        '液体を注ぎます',
        ':puring_liquid:',
        '飲み物を注入中',
        '水'
    ]
};
/*flags*/
emojis_language[lang][7] = {
    '🏁': [
        'Chequered Flag',
        ':chequered_flag:',
        'チェッカーフラグ',
        'グリッドガール',
        'レースの旗',
        ':black:',
        ':white:'
    ],
    '🚩': [
        '三角フラグ',
        ':triangular_flag:',
        'ポールにフラグ',
        '赤の旗',
        '投稿時の三角フラグ',
        ':red:'
    ],
    '🎌': [
        '交差フラグ',
        ':crossed_flags:',
        '二つのフラグ'
    ],
    '🏴': [
        '黒の旗',
        ':black_flag:',
        '黒旗を作っています',
        ':black:'
    ],
    '🏳️': [
        '白色の旗',
        ':white_flag:',
        '白い旗を紡ぎます',
        ':white:'
    ],
    '🏳️‍🌈': [
        '虹色の旗',
        ':rainbow_flag:',
        'Pride Flag',
        'LGBT',
        'LGBTQIA+',
        'ゲイ',
        'トランスジェンダー',
        'Lesbian',
        '無性者',
        'Queer'
    ],
    '🏳️‍⚧️': [
        'トランスジェンダーのフラグ',
        ':transgender_flag:',
        '青、ピンク、白のフラグ',
        'トランスフラグ'
    ],
    '🏴‍☠️': [
        '海賊の旗',
        ':pirate_flag:',
        'Jolly Roger',
        ':black:'
    ],
    '🇺🇳': [
        '国連の旗',
        ':un:',
        '国旗：国際連合（国連）'
    ],
    '🇪🇺': [
        '欧州連合の旗',
        ':eu:',
        'フラグ: EU(欧州連合)',
        'EU Flag'
    ],
    '🇦🇨': [
        'アセンション島の旗',
        ':ac:'
    ],
    '🇦🇩': [
        'アンドラの旗',
        ':ad:',
        'Andorran Flag'
    ],
    '🇦🇪': [
        'アラブ首長国連邦の旗',
        ':ae:',
        'Emirati Flag',
        'アラブ首長国連邦の旗'
    ],
    '🇦🇫': [
        'アフガニスタンの旗',
        ':af:',
        'Afghan Flag'
    ],
    '🇦🇬': [
        'アンティグア・バーブーダの旗',
        ':ag:'
    ],
    '🇦🇮': [
        'アンギラの旗',
        ':ai:',
        'アンギランの旗'
    ],
    '🇦🇱': [
        'アルバニアの旗',
        ':al:',
        'アルバニアの旗'
    ],
    '🇦🇲': [
        'アルメニアの旗',
        ':am:',
        'アルメニアの旗'
    ],
    '🇦🇴': [
        'アンゴラの旗',
        ':ao:',
        'アンゴラの旗'
    ],
    '🇦🇶': [
        '南極の旗',
        ':aq:',
        '南極の旗'
    ],
    '🇦🇷': [
        'アルゼンチンの旗',
        ':ar:',
        'アルゼンチンの旗'
    ],
    '🇦🇸': [
        'アメリカ領サモアの旗',
        ':as:',
        'American Samoan Flag'
    ],
    '🇦🇹': [
        'オーストリアの旗',
        ':at:',
        'Austrian Flag'
    ],
    '🇦🇺': [
        'オーストラリアの旗',
        ':au:',
        'オーストラリアの旗',
        'オーストラリアの旗'
    ],
    '🇦🇼': [
        'アルバの旗',
        ':aw:',
        'Aruban フラグ'
    ],
    '🇦🇽': [
        'アオランド諸島の旗',
        ':ax:',
        'A<unk> フラグ'
    ],
    '🇦🇿': [
        'アゼルバイジャンの旗',
        ':az:',
        'アゼルバイジャンの旗'
    ],
    '🇧🇦': [
        'ボスニア・ヘルツェゴビナの旗',
        ':ba:'
    ],
    '🇧🇧': [
        'バルバドスの旗',
        ':bb:',
        'Barbadianフラグ',
        'Bajan フラグ'
    ],
    '🇧🇩': [
        'バングラデシュの旗',
        ':bd:',
        'Bangladeshi Flag'
    ],
    '🇧🇪': [
        'ベルギーの旗',
        ':be:',
        'ベルギーの旗'
    ],
    '🇧🇫': [
        'ブルキナファソの旗',
        ':bf:',
        'ブルキナベの旗'
    ],
    '🇧🇬': [
        'ブルガリアの旗',
        ':bg:',
        'ブルガリアの旗'
    ],
    '🇧🇭': [
        'バーレーンの旗',
        ':bh:',
        'Bahrani フラグ',
        'バーレーンの旗'
    ],
    '🇧🇮': [
        'ブルンジの旗',
        ':bi:',
        'Burundian Flag'
    ],
    '🇧🇯': [
        'ベナンの旗',
        ':bj:',
        'ベニスの旗'
    ],
    '🇧🇱': [
        'サン・バルテオの旗',
        ':bl:',
        '旗：セントバーツレミー'
    ],
    '🇧🇲': [
        'バミューダの旗',
        ':bm:',
        'Bermudan Flag'
    ],
    '🇧🇳': [
        'ブルネイの旗',
        ':bn:',
        'ブルネイの旗'
    ],
    '🇧🇴': [
        'ボリビアの旗',
        ':bo:',
        'Bolivian Flag'
    ],
    '🇧🇶': [
        'カリブ海のオランダの旗',
        ':bq:',
        'Bonaire'
    ],
    '🇧🇷': [
        'ブラジルの旗',
        ':br:',
        'ブラジルの旗'
    ],
    '🇧🇸': [
        'バハマの旗',
        ':bs:',
        'バハマの旗'
    ],
    '🇧🇹': [
        'ブータンの旗',
        ':bt:',
        'ブータンの旗'
    ],
    '🇧🇻': [
        'ブーヴェ島の旗',
        ':bv:',
        'フラグ：ブーベ島'
    ],
    '🇧🇼': [
        'ボツワナの旗',
        ':bw:',
        'Batswana Flag'
    ],
    '🇧🇾': [
        'ベラルーシの旗',
        ':by:',
        'ベラルーシの旗'
    ],
    '🇧🇿': [
        'ベリーズの旗',
        ':bz:',
        'ベリーズの旗'
    ],
    '🇨🇦': [
        'カナダの旗',
        'カナダの旗',
        ':ca:'
    ],
    '🇨🇨': [
        'ココス諸島の旗',
        ':cc:'
    ],
    '🇨🇩': [
        'Flag of Congo - Kinshasa',
        ':cd:'
    ],
    '🇨🇫': [
        '中央アフリカ共和国の旗',
        ':cf:',
        '中央アフリカの旗'
    ],
    '🇨🇬': [
        'コンゴの旗 - ブラザビル',
        ':cg:'
    ],
    '🇨🇭': [
        'スイスの旗',
        ':ch:',
        '赤いクロス',
        'スイスの旗'
    ],
    '🇨🇮': [
        '象牙海岸の旗',
        ':ci:',
        'Flag: Côte d’Ivoire'
    ],
    '🇨🇰': [
        'クック諸島の旗',
        ':ck:',
        'クック諸島の旗'
    ],
    '🇨🇱': [
        'チリの旗',
        ':cl:',
        'チリの旗'
    ],
    '🇨🇲': [
        'カメルーンの旗',
        ':cm:',
        'カメルーンの旗'
    ],
    '🇨🇳': [
        '中国の旗',
        ':cn:',
        '中国の旗'
    ],
    '🇨🇴': [
        'コロンビアの旗',
        ':co:',
        'コロンビアの旗'
    ],
    '🇨🇵': [
        'クリッパートン島の旗',
        ':cp:',
        'フラグ: クリッパートン島'
    ],
    '🇨🇷': [
        'コスタリカの旗',
        ':cr:',
        'コスタリカの旗'
    ],
    '🇨🇺': [
        'キューバの旗',
        ':cu:',
        'キューバの旗'
    ],
    '🇨🇻': [
        'カーボベルデの旗',
        ':cv:',
        'カーボベルディアンの旗'
    ],
    '🇨🇼': [
        'CurracWebaoのフラグ',
        ':cw:',
        'Curaçaoan Flag'
    ],
    '🇨🇽': [
        'クリスマス島の旗',
        ':cx:',
        'クリスマスの島の旗'
    ],
    '🇨🇾': [
        'キプロスの旗',
        ':cy:',
        'キプロスの旗'
    ],
    '🇨🇿': [
        'チェコの旗',
        ':cz:',
        'チェコの旗'
    ],
    '🇩🇪': [
        'ドイツの旗',
        ':de:',
        'ドイツの旗',
        'ドイツの旗'
    ],
    '🇩🇬': [
        'ディエゴガルシアの旗',
        ':dg:',
        'フラグ: ディエゴ・ガルシア'
    ],
    '🇩🇯': [
        'ジブチの旗',
        ':dj:',
        'Djibouti Flag',
        'Djiboutian Flag'
    ],
    '🇩🇰': [
        'デンマークの旗',
        ':dk:',
        'デンマークの旗'
    ],
    '🇩🇲': [
        'ドミニカの旗',
        ':dm:'
    ],
    '🇩🇴': [
        'ドミニカ共和国の旗',
        ':do:',
        'Dom Rep Flag',
        'ドミニカ共和国の旗'
    ],
    '🇩🇿': [
        'アルジェリアの旗',
        ':dz:',
        'Algerian Flag'
    ],
    '🇪🇦': [
        'セウタとメリラの旗',
        ':ea:',
        'メリラの旗',
        'セウタの旗',
        'Flag: Ceuta & Melilla'
    ],
    '🇪🇨': [
        'エクアドルの旗',
        ':ec:',
        'Ecuadorian Flag'
    ],
    '🇪🇪': [
        'エストニアの旗',
        ':ee:',
        'エストニアの旗'
    ],
    '🇪🇬': [
        'エジプトの旗',
        ':eg:',
        'エジプトの旗'
    ],
    '🇪🇭': [
        '西サハラの旗',
        ':eh:',
        '西サハラの旗'
    ],
    '🇪🇷': [
        'エリトリアの旗',
        ':er:',
        'Eritrean Flag'
    ],
    '🇪🇹': [
        'エチオピアの旗',
        ':et:',
        'Ethiopian Flag'
    ],
    '🇪🇸': [
        'スペインの旗',
        ':es:',
        'スペインの旗'
    ],
    '🇫🇮': [
        'フィンランドの旗',
        ':fi:',
        'フィンランドのフラグ'
    ],
    '🇫🇯': [
        'フィジーの旗',
        ':fj:',
        'Fijian Flag'
    ],
    '🇫🇰': [
        'フォークランド諸島の旗',
        ':fk:',
        'フォークランダーフラグ'
    ],
    '🇫🇲': [
        'ミクロネシアの旗',
        ':fm:',
        'ミクロネシアの旗'
    ],
    '🇫🇴': [
        'フェロー諸島の旗',
        ':fo:',
        'Faroe Islander Flag'
    ],
    '🇫🇷': [
        'フランスの旗',
        ':fr:',
        'フランスの旗'
    ],
    '🇬🇦': [
        'ガボンの旗',
        ':ga:',
        'ガボンの旗'
    ],
    '🇬🇧': [
        'イギリスの旗',
        ':gb:',
        'イギリスの旗',
        'イギリス',
        'ユニオン・ジャック',
        '英国'
    ],
    '🏴󠁧󠁢󠁥󠁮󠁧󠁿󠁧󠁢󠁥󠁮󠁧󠁿': [
        'イギリスの旗',
        ':england:',
        '聖ジョルジュクロス',
        '英語のフラグ'
    ],
    '🏴󠁧󠁢󠁷󠁬󠁳󠁿󠁧󠁢󠁷󠁬󠁳󠁿': [
        'ウェールズの旗',
        ':wales:',
        'ウェールズの旗',
        'レッドドラゴン',
        'Baner Cymru',
        'Y Ddraig Goch'
    ],
    '🏴󠁧󠁢󠁳󠁣󠁴󠁿󠁧󠁢󠁳󠁣󠁴󠁿': [
        'スコットランドの旗',
        ':scotland:',
        'スコットランドの旗',
        'セント・アンドリュースクロス',
        'Saltire'
    ],
    '🇬🇩': [
        'グレナダの旗',
        ':gd:',
        'グレナディアンの旗'
    ],
    '🇬🇪': [
        'ジョージアの旗',
        ':ge:',
        'グルジアの旗'
    ],
    '🇬🇫': [
        'フランス領ギアナの旗',
        ':gf:',
        'フレンチギニアの旗'
    ],
    '🇬🇬': [
        'ガーンジーの旗',
        ':gg:',
        'Guernsey Flag'
    ],
    '🇬🇭': [
        'ガーナの旗',
        ':gh:',
        'ガーナの旗'
    ],
    '🇬🇮': [
        'ジブラルタルの旗',
        ':gi:',
        'ジブラルタルの旗'
    ],
    '🇬🇱': [
        'グリーンランドの旗',
        ':gl:',
        'Greenlandic Flag'
    ],
    '🇬🇲': [
        'ガンビアの旗',
        ':gm:',
        'Gambian Flag'
    ],
    '🇬🇳': [
        'ギニアの旗',
        ':gn:',
        'Guinean Flag'
    ],
    '🇬🇵': [
        'グアドループの旗',
        ':gp:',
        'グアドループの旗'
    ],
    '🇬🇶': [
        '赤道ギニアの旗',
        ':gq:',
        'Equatorial Guinean Flag',
        'Equatoguineanフラグ'
    ],
    '🇬🇷': [
        'ギリシャの旗',
        ':gr:',
        'ギリシャの旗'
    ],
    '🇬🇸': [
        'サウスジョージア・サウスサンドウィッチ諸島の旗',
        ':gs:'
    ],
    '🇬🇹': [
        'グアテマラの旗',
        ':gt:',
        'Guatemalan Flag'
    ],
    '🇬🇺': [
        'Guamのフラグ',
        ':gu:',
        'グアマニアの旗',
        'Chamorro フラグ'
    ],
    '🇬🇼': [
        'ギニアビサウの旗',
        ':gw:',
        'Guinea-Bissau Flag'
    ],
    '🇬🇾': [
        'ガイアナの旗',
        ':gy:',
        'ガイアナの旗'
    ],
    '🇭🇰': [
        '香港SAR中国の旗',
        ':hk:',
        '香港の旗'
    ],
    '🇭🇲': [
        'ハード&マクドナルド諸島の旗',
        ':hm:',
        'フラグ: ハード&マクドナルド諸島'
    ],
    '🇭🇳': [
        'ホンジュラスの旗',
        ':hn:',
        'ホンジュラスの旗'
    ],
    '🇭🇷': [
        'クロアチアの旗',
        ':hr:',
        'クロアチアの旗'
    ],
    '🇭🇹': [
        'ハイチの旗',
        ':ht:',
        'Haitian Flag'
    ],
    '🇭🇺': [
        'ハンガリーの旗',
        ':hu:',
        'ハンガリーの旗'
    ],
    '🇮🇨': [
        'カナリア諸島の旗',
        ':ic:'
    ],
    '🇮🇩': [
        'インドネシアの旗',
        ':id:',
        'インドネシアの旗'
    ],
    '🇮🇪': [
        'アイルランドの旗',
        ':ie:',
        'アイルランドの旗'
    ],
    '🇮🇱': [
        'イスラエルの旗',
        ':il:',
        'イスラエルの旗'
    ],
    '🇮🇲': [
        'マン島の旗',
        ':im:',
        'Manx Flag'
    ],
    '🇮🇳': [
        'インドの旗',
        ':in:',
        'インドの旗'
    ],
    '🇮🇴': [
        'イギリス領インド洋地域の旗',
        ':io:',
        'イギリス領インド洋フラグ'
    ],
    '🇮🇶': [
        'イラクの旗',
        ':iq:',
        'Iraqi Flag'
    ],
    '🇮🇷': [
        'イランの旗',
        ':ir:',
        'イランの旗'
    ],
    '🇮🇸': [
        'アイスランドの旗',
        ':is:',
        'アイスランドの旗'
    ],
    '🇮🇹': [
        'イタリアの旗',
        ':it:',
        'イタリアの旗'
    ],
    '🇯🇪': [
        'ジャージーの旗',
        ':je:',
        'ユニフォームフラグ'
    ],
    '🇯🇲': [
        'ジャマイカの旗',
        ':jm:',
        'ジャマイカの旗'
    ],
    '🇯🇴': [
        'ヨルダンの旗',
        ':jo:',
        'ヨルダンの旗'
    ],
    '🇯🇵': [
        '日本の旗',
        ':jp:',
        '日本の旗'
    ],
    '🇰🇪': [
        'ケニアの旗',
        ':ke:',
        'ケニアの旗'
    ],
    '🇰🇬': [
        'キルギスの旗',
        ':kg:',
        'Kyrgyzstani Flag'
    ],
    '🇰🇭': [
        'カンボジアの旗',
        ':kh:',
        'カンボジアの旗'
    ],
    '🇰🇮': [
        'キリバスの旗',
        ':ki:',
        'キリバスの旗'
    ],
    '🇰🇲': [
        'コモロの旗',
        ':km:',
        'コモロの旗'
    ],
    '🇰🇳': [
        'セントクリストファー・ネイビスの旗',
        ':kn:'
    ],
    '🇰🇵': [
        '北朝鮮の旗',
        ':kp:',
        '北朝鮮の旗'
    ],
    '🇰🇷': [
        '韓国の旗',
        ':kr:',
        '韓国の旗'
    ],
    '🇰🇼': [
        'クウェートの旗',
        ':kw:',
        'Kuwaiti Flag'
    ],
    '🇰🇾': [
        'ケイマン諸島の旗',
        ':ky:',
        'ケイマンの旗'
    ],
    '🇰🇿': [
        'カザフスタンの旗',
        ':kz:',
        'Kazakhstani Flag',
        'Kazakh Flag'
    ],
    '🇱🇦': [
        'ラオスの旗',
        ':la:',
        'ラオスの旗',
        'ラオスの旗'
    ],
    '🇱🇧': [
        'レバノンの旗',
        ':lb:',
        'レバノンの旗'
    ],
    '🇱🇨': [
        'セントルシアの旗',
        ':lc:'
    ],
    '🇱🇮': [
        'リヒテンシュタインの旗',
        ':lt:',
        'リヒテンシュタインの旗'
    ],
    '🇱🇰': [
        'スリランカの旗',
        ':lk:',
        'スリランカの旗'
    ],
    '🇱🇷': [
        'リベリアの旗',
        ':lr:',
        'リベリアの旗'
    ],
    '🇱🇸': [
        'Flag of Lesotho',
        ':ls:',
        'Basotho Flag'
    ],
    '🇱🇹': [
        'リトアニアの旗',
        ':lt:',
        'リトアニアの旗'
    ],
    '🇱🇺': [
        'ルクセンブルクの旗',
        ':lu:',
        'ルクセンブルクの旗'
    ],
    '🇱🇻': [
        'ラトビアの旗',
        ':lv:',
        'ラトビアの旗'
    ],
    '🇱🇾': [
        'リビアの旗',
        ':ly:',
        'リビアの旗'
    ],
    '🇲🇦': [
        'モロッコの旗',
        ':ma:',
        'モロッコの旗'
    ],
    '🇲🇨': [
        'モナコの旗',
        ':mc:',
        'モンガスクのフラグ'
    ],
    '🇲🇩': [
        'モルドバの旗',
        ':md:',
        'モルドバの旗'
    ],
    '🇲🇪': [
        'モンテネグロの旗',
        ':me:',
        'モンテネグロの旗'
    ],
    '🇲🇫': [
        'サン・マルタンの旗',
        ':mf:',
        'Flag: St. Martin'
    ],
    '🇲🇬': [
        'マダガスカルの旗',
        ':mg:',
        'Madagascan Flag'
    ],
    '🇲🇭': [
        'マーシャル諸島の旗',
        ':mh:',
        'Marshallese フラグ'
    ],
    '🇲🇰': [
        'マケドニアの旗',
        ':mk:',
        'マケドニアの旗'
    ],
    '🇲🇱': [
        'マリの旗',
        ':ml:',
        'マリの旗'
    ],
    '🇲🇲': [
        'ミャンマーの旗',
        ':mm:',
        'ミャンマー国営フラグ',
        'ビルマへのフラグ',
        'ビルマの旗'
    ],
    '🇲🇳': [
        'モンゴルの旗',
        ':mn:',
        'モンゴルの旗'
    ],
    '🇲🇴': [
        'マカオサル中国の旗',
        ':mo:',
        'マカンの旗'
    ],
    '🇲🇵': [
        '北マリアナ諸島の旗',
        ':mp:',
        'ミクロネシアの旗'
    ],
    '🇲🇶': [
        'マルティニークの旗',
        ':mq:',
        'マルティニークの蛇の旗',
        'Martinikaisフラグ'
    ],
    '🇲🇷': [
        'モーリタニアの旗',
        ':mr:',
        'モーリタニアの旗'
    ],
    '🇲🇸': [
        'Flag of Montserrat',
        ':ms:',
        'Montserratian Flag'
    ],
    '🇲🇹': [
        'マルタの旗',
        ':mt:',
        'Maltese Flag'
    ],
    '🇲🇺': [
        'Flag of Mauritius',
        ':mu:',
        'モーリシャスの旗'
    ],
    '🇲🇻': [
        'モルディブの旗',
        ':mv:',
        'モルディブの旗'
    ],
    '🇲🇼': [
        'マラウイの旗',
        ':mw:',
        'Malawian Flag'
    ],
    '🇲🇽': [
        'メキシコの旗',
        ':mx:',
        'メキシコの旗'
    ],
    '🇲🇾': [
        'マレーシアの旗',
        ':my:',
        'Malaysian Flag'
    ],
    '🇲🇿': [
        'モザンビークの旗',
        ':mz:',
        'モザンビークの旗'
    ],
    '🇳🇦': [
        'ナミビアの旗',
        ':na:',
        'Namibian Flag'
    ],
    '🇳🇨': [
        'ニューカレドニアの旗',
        ':nc:',
        'ニューカレドニアの旗'
    ],
    '🇳🇪': [
        'ニジェールの旗',
        ':ne:',
        'ナイジェリアの旗'
    ],
    '🇳🇫': [
        'ノーフォーク島の旗',
        ':nf:',
        'ノーフォーク島の旗'
    ],
    '🇳🇬': [
        'ナイジェリアの旗',
        ':ng:',
        'ナイジェリアの旗'
    ],
    '🇳🇮': [
        'Flag of Nicaragua',
        ':ni:',
        'Nicaraguan Flag'
    ],
    '🇳🇱': [
        'オランダの旗',
        ':nl:',
        'オランダの旗',
        'オランダ'
    ],
    '🇳🇴': [
        'ノルウェーの旗',
        ':no:',
        'ノルウェーの旗'
    ],
    '🇳🇵': [
        'ネパールの旗',
        ':np:',
        'ネパールの旗'
    ],
    '🇳🇷': [
        'ナウルの旗',
        ':nr:',
        'Nauruan Flag'
    ],
    '🇳🇺': [
        'ニウエの旗',
        ':nu:',
        'Niuean Flag'
    ],
    '🇳🇿': [
        'ニュージーランドの旗',
        ':nz:',
        'Kiwiフラグ'
    ],
    '🇴🇲': [
        'オマーンの旗',
        ':om:',
        'オマーンの旗'
    ],
    '🇵🇦': [
        'パナマの旗',
        ':pa:',
        'パナマの旗'
    ],
    '🇵🇪': [
        'ペルーの旗',
        ':pe:',
        'ペルーの旗'
    ],
    '🇵🇫': [
        'フランス領ポリネシアの旗',
        ':pf:',
        'フランス領ポリネシアの旗'
    ],
    '🇵🇬': [
        'パプアニューギニアの旗',
        ':pg:',
        'PNGフラグ',
        'Papua New Guinean Flag'
    ],
    '🇵🇭': [
        'フィリピンの旗',
        ':ph:'
    ],
    '🇵🇰': [
        'パキスタンの旗',
        ':pk:',
        'パキスタンの旗'
    ],
    '🇵🇱': [
        'ポーランドの旗',
        ':pl:',
        'ポーランドの旗'
    ],
    '🇵🇲': [
        'サンピエール島・ミクロン島の旗',
        ':pm:'
    ],
    '🇵🇳': [
        'ピトケアンの旗',
        ':pn:'
    ],
    '🇵🇷': [
        'プエルトリコの旗',
        ':pr:',
        'プエルトリコの旗'
    ],
    '🇵🇸': [
        'パレスチナ自治区の旗',
        ':ps:',
        'Palestine'
    ],
    '🇵🇹': [
        'ポルトガルの旗',
        ':pt:',
        'ポルトガルの旗'
    ],
    '🇵🇼': [
        'パラオの旗',
        ':pw:',
        'パラオの旗'
    ],
    '🇵🇾': [
        'パラグアイの旗',
        ':py:',
        'Paraguayan Flag'
    ],
    '🇶🇦': [
        'カタールの旗',
        ':qa:',
        'カタールの旗'
    ],
    '🇷🇪': [
        'Réunionのフラグ',
        ':re:',
        'Re\'unionnaisフラグ'
    ],
    '🇷🇴': [
        'ルーマニアの旗',
        ':ro:',
        'ルーマニアの旗'
    ],
    '🇷🇸': [
        'セルビアの旗',
        ':rs:',
        'セルビアの旗'
    ],
    '🇷🇺': [
        'ロシアの旗',
        ':ru:',
        'ロシアの旗'
    ],
    '🇷🇼': [
        'Flag of Rwanda',
        ':rw:',
        'Rwandan Flag'
    ],
    '🇸🇦': [
        'サウジアラビアの旗',
        ':sa:',
        'サウジアラビアの旗'
    ],
    '🇸🇧': [
        'ソロモン諸島の旗',
        ':sb:',
        'ソロモン諸島の旗'
    ],
    '🇸🇨': [
        'セイシェルの旗',
        ':sc:',
        'Seychellois Flag'
    ],
    '🇸🇩': [
        'スーダンの旗',
        ':sd:',
        'Sudanese Flag'
    ],
    '🇸🇪': [
        'スウェーデンの旗',
        ':se:',
        'スウェーデンの旗'
    ],
    '🇸🇬': [
        'シンガポールの旗',
        ':sg:',
        'シンガポールの旗'
    ],
    '🇸🇭': [
        'セントヘレナの旗',
        ':sh:'
    ],
    '🇸🇮': [
        'スロベニアの旗',
        ':si:',
        'スロベニアの旗'
    ],
    '🇸🇯': [
        'スヴァールバル諸島のフラグ & ヤン・マイエン島',
        ':sj:'
    ],
    '🇸🇰': [
        'スロバキアの旗',
        ':sk:',
        'スロバキアの旗',
        'Slovakian Flag'
    ],
    '🇸🇱': [
        'シエラレオネの旗',
        ':sl:',
        'Sierra Leonean Flag'
    ],
    '🇸🇲': [
        'サンマリノの旗',
        ':sm:',
        'Sammarinese Flag'
    ],
    '🇸🇳': [
        'セネガルの旗',
        ':sn:',
        'Sengalese Flag'
    ],
    '🇸🇴': [
        'ソマリアの旗',
        ':so:',
        'Somalian Flag'
    ],
    '🇸🇷': [
        'スリナムの旗',
        ':sr:',
        'スリナマーフラグ'
    ],
    '🇸🇸': [
        '南スーダンの旗',
        ':ss:',
        '南スーダンの旗'
    ],
    '🇸🇹': [
        'Safingo Tome\'s & Prie\'cipe のフラグ',
        ':st:'
    ],
    '🇸🇻': [
        'エルサルバドルの旗',
        ':sv:',
        'エルサルバドルの旗'
    ],
    '🇸🇽': [
        'シント・マールテンの旗',
        ':sx:'
    ],
    '🇸🇾': [
        'シリアの旗',
        ':sy:',
        'シリアの旗'
    ],
    '🇸🇿': [
        'スワジランドの旗',
        ':sz:',
        'エスワティーニの旗'
    ],
    '🇹🇦': [
        'Flag of Tristan Da Cunha',
        ':ta:'
    ],
    '🇹🇨': [
        'タークス・カイコス諸島の旗',
        ':tc:'
    ],
    '🇹🇩': [
        'チャドの旗',
        ':td:',
        'チャドの旗'
    ],
    '🇹🇫': [
        'フランス領サザンテリトリーの旗',
        ':tf:',
        'フランス領南国の旗'
    ],
    '🇹🇬': [
        'トーゴの旗',
        ':tg:',
        'Togolese Flag'
    ],
    '🇹🇭': [
        'タイの旗',
        ':th:',
        'タイのフラグ'
    ],
    '🇹🇯': [
        'タジキスタンの旗',
        ':tj:',
        'タジクの旗'
    ],
    '🇹🇰': [
        'トケラウの旗',
        ':tk:',
        'トケローアンフラグ'
    ],
    '🇹🇱': [
        '東ティモールのフラグ',
        ':tl:',
        '東ティモールのフラグ',
        '東ティモレスの旗'
    ],
    '🇹🇲': [
        'トルクメニスタンの旗',
        ':tm:',
        'Turkmen Flag'
    ],
    '🇹🇳': [
        'チュニジアの旗',
        ':tn:',
        'チュニジアの旗'
    ],
    '🇹🇴': [
        'トンガの旗',
        ':to:',
        'Tongan Flag'
    ],
    '🇹🇷': [
        'トルコの旗',
        ':tr:',
        'トルコの旗'
    ],
    '🇹🇹': [
        'トリニダード・トバゴの旗',
        ':tt:'
    ],
    '🇹🇻': [
        'ツバルの旗',
        ':tv:',
        'ツバルアンフラグ'
    ],
    '🇹🇼': [
        '台湾の旗',
        ':tw:',
        '台湾の旗'
    ],
    '🇹🇿': [
        'タンザニアの旗',
        ':tz:',
        'Tanzanian Flag'
    ],
    '🇺🇦': [
        'ウクライナの旗',
        ':ua:',
        'ウクライナの旗'
    ],
    '🇺🇬': [
        'ウガンダの旗',
        ':ug:',
        'ウガンダの旗'
    ],
    '🇺🇲': [
        '旗：アメリカ領外諸島',
        ':um:'
    ],
    '🇺🇸': [
        '米国の旗',
        ':us:',
        'アメリカの旗',
        '米国の旗'
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
        '聖所の旗',
        ':va:',
        'Vanticanienフラグ'
    ],
    '🇻🇨': [
        'セントビンセント・グレナディーンの旗',
        ':vc:'
    ],
    '🇻🇪': [
        'ベネズエラの旗',
        ':ve:',
        'ベネズエラの旗'
    ],
    '🇻🇬': [
        '英領ヴァージン諸島の旗',
        ':vg:',
        '英領ヴァージン諸島の旗'
    ],
    '🇻🇮': [
        '米領ヴァージン諸島の旗',
        ':vi:',
        '米領ヴァージン諸島の旗'
    ],
    '🇻🇳': [
        'ベトナムの旗',
        ':vn:',
        'ベトナムの旗'
    ],
    '🇻🇺': [
        'Flag of Vanuatu',
        ':vu:',
        'Ni-Vanuatu Flag'
    ],
    '🇼🇫': [
        'Wallis & Futuna の旗',
        ':wf:'
    ],
    '🇼🇸': [
        'サモアの旗',
        ':ws:',
        'Samoan Flag'
    ],
    '🇽🇰': [
        'コソボの旗',
        ':xk:',
        'Kosovar Flag'
    ],
    '🇾🇪': [
        'イエメンの旗',
        ':ye:',
        'イエメンの旗'
    ],
    '🇾🇹': [
        'マヨットの旗',
        ':yt:',
        'マヨットの旗'
    ],
    '🇿🇦': [
        '南アフリカの旗',
        ':za:',
        '南アフリカの旗'
    ],
    '🇿🇲': [
        'ザンビアの旗',
        ':zm:',
        'Zambian Flag'
    ],
    '🇿🇼': [
        'ジンバブエの旗',
        ':zw:',
        'ジンバブエの旗',
        '地獄の旗'
    ]
};
/*sports*/
emojis_language[lang][8] = {
    '🧗{{skin_tone}}‍♂️': [
        '男性クライミング中',
        ':man_climbing:',
        ':climbing:',
        '男性ロッククライマー',
        '男クライマー',
        ':man:'
    ],
    '🧗{{skin_tone}}‍♀️': [
        '女性クライミング中',
        ':woman_climbing:',
        ':climbing:',
        '女性ロッククライマー',
        '女性登山家',
        ':woman:'
    ],
    '🧗{{skin_tone}}': [
        '登山者',
        ':person_climbing:',
        ':climbing:',
        'ロッククライマー',
        '登山者',
        ':person:'
    ],
    '🏇{{skin_tone}}': [
        '競馬場',
        ':horse_racing:',
        '競馬レース',
        'Jockey'
    ],
    '⛷{{skin_tone}}‍️': [
        'スキーヤー語',
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
        '女性ゴルファー',
        ':woman_golfer:',
        ':golfer:',
        ':woman:'
    ],
    '🏌️{{skin_tone}}': [
        'ゴルファー',
        ':person_golfer:',
        ':golfer:',
        ':person:'
    ],
    '🏄{{skin_tone}}‍♂️': [
        'マンサーファー',
        ':man_surfer:',
        ':surfer:',
        ':man:'
    ],
    '🏄{{skin_tone}}‍♀️': [
        'ウーマンサーファー',
        ':woman_surfer:',
        ':surfer:',
        ':woman:'
    ],
    '🏄{{skin_tone}}': [
        '人物サーファー',
        ':person_surfer:',
        ':surfer:',
        ':person:'
    ],
    '🚣{{skin_tone}}‍♂️': [
        '男性ボートボートを漕いで',
        ':man_rowing_boat:',
        ':rowing_boat:',
        ':man:'
    ],
    '🚣{{skin_tone}}‍♀️': [
        '女性の漕ぎボート',
        ':woman_rowing_boat:',
        ':rowing_boat:',
        ':woman:'
    ],
    '🚣{{skin_tone}}': [
        'ボートボート(人物)',
        ':person_rowing_boat:',
        ':rowing_boat:',
        ':person:'
    ],
    '🏊{{skin_tone}}‍♂️': [
        '水泳男',
        ':man_swimming:',
        ':swimming:',
        '男の水泳家',
        ':man:'
    ],
    '🏊{{skin_tone}}‍♀️': [
        '女性の<unk>',
        ':woman_swimming:',
        ':swimming:',
        '水泳家',
        ':woman:'
    ],
    '🏊{{skin_tone}}': [
        'スイミング',
        ':person_swimming:',
        ':swimming:',
        'スイマー',
        ':person:'
    ],
    '⛹{{skin_tone}}‍️‍♂️': [
        '男のバウンスボール',
        ':man_bouncing_ball:',
        ':bouncing_ball:',
        '男のバスケットボールプレイヤー',
        ':man:'
    ],
    '⛹️{{skin_tone}}‍♀️': [
        '女性のバウンスボール',
        ':woman_bouncing_ball:',
        ':boucing_ball:',
        '女性バスケットボールプレイヤー',
        ':woman:'
    ],
    '⛹️{{skin_tone}}': [
        'ボウンスボール',
        ':person_bouncing_ball:',
        ':boucing_ball:',
        'バスケットボールプレイヤー',
        ':person:'
    ],
    '🏋️{{skin_tone}}‍♂️': [
        '男の持ち上げウエイト',
        ':man_lifting_weights:',
        ':lifting_weights:',
        '男性重量挙げ',
        ':man:'
    ],
    '🏋️{{skin_tone}}‍♀️': [
        '女性が持ち上げる重量',
        ':woman_lifting_weights:',
        ':lifting_weights:',
        '女性重量挙げ',
        ':woman:'
    ],
    '🏋️{{skin_tone}}': [
        '人リフトウエイト数',
        ':person_lifting_weights:',
        ':lifting_weights:',
        '人物の重量挙げ',
        ':person:'
    ],
    '🚴{{skin_tone}}‍♂️': [
        '男のバイク',
        ':man_biking:',
        ':biking:',
        '男のサイクリスト',
        '男性のサイクリスト',
        ':man:'
    ],
    '🚴{{skin_tone}}‍♀️': [
        '女性バイク',
        ':woman_biking:',
        ':biking:',
        '女のサイクリスト',
        '女性のCyclist',
        ':woman:'
    ],
    '🚴{{skin_tone}}': [
        'バイキング中の人',
        ':person_biking:',
        ':biking:',
        'サイクロスト',
        'サイクロスト',
        ':person:'
    ],
    '🚵{{skin_tone}}‍♂️': [
        'マンマウンテンバイク',
        ':man_mountain_bike:',
        ':mountain_bike:',
        '暴走族（高級）',
        ':man:'
    ],
    '🚵{{skin_tone}}‍♀️': [
        '女性マウンテンバイク',
        ':woman_mountain_bike:',
        ':mountain_bike:',
        '女山暴走家',
        ':woman:'
    ],
    '🚵{{skin_tone}}': [
        'マウンテンバイク',
        ':person_mountain_bike:',
        ':mountain_bike:',
        'マウンテンバイカー',
        ':person:'
    ],
    '🤸{{skin_tone}}‍♂️': [
        '男のカートホイール',
        ':man_cartwheeling:',
        ':cartwheeling:',
        '男がカートホイール',
        ':man:'
    ],
    '🤸{{skin_tone}}‍♀️': [
        '女のカートホイール',
        ':woman_cartwheeling:',
        ':cartwheeling:',
        'カートホイールをしている女性',
        ':woman:'
    ],
    '🤸{{skin_tone}}': [
        'カートホイール',
        ':person_cartwheeling:',
        ':cartwheeling:',
        'カートホイールをやっている人',
        ':person:'
    ],
    '🤼‍♂️': [
        '男性のレスリング中',
        ':men_wrestling:',
        ':wrestling:',
        'レッスリング',
        'レスラーズ',
        ':man:'
    ],
    '🤼‍♀️': [
        'レスリングの女性',
        ':women_wrestling:',
        ':wrestling:',
        'レッスリング',
        'レスラーズ',
        ':woman:'
    ],
    '🤼': [
        'レスリング中',
        ':people_wrestling:',
        ':wrestling:',
        'レッスリング',
        'レスラーズ',
        ':person:'
    ],
    '🤽{{skin_tone}}‍♂️': [
        '水のポロを遊ぶ男',
        ':man_playing_water_polo:',
        ':playing_water_polo:',
        ':man:'
    ],
    '🤽{{skin_tone}}‍♀️': [
        '水のポロをする女性',
        ':woman_playing_water_polo:',
        ':playing_water_polo:',
        ':woman:'
    ],
    '🤽{{skin_tone}}': [
        '水のポロをプレイしている人',
        ':person_playing_water_polo:',
        ':playing_water_polo:',
        ':person:'
    ],
    '🤾{{skin_tone}}‍♂️': [
        'ハンドボールをしている男',
        ':man_playing_handball:',
        ':playing_handball:',
        ':man:'
    ],
    '🤾{{skin_tone}}‍♀️': [
        'ハンドボールをしている女性',
        ':woman_playing_handball:',
        ':playing_handball:',
        ':woman:'
    ],
    '🤾{{skin_tone}}': [
        'ハンドボールをしている人',
        ':person_playing_handball:',
        ':playing_handball:',
        ':person:'
    ],
    '🤹{{skin_tone}}‍♂️': [
        'ジャグリング',
        ':man_juggling:',
        ':juggling:',
        '男性ジャグラー',
        ':man:'
    ],
    '🤹{{skin_tone}}‍♀️': [
        '女性ジャグリング',
        ':woman_juggling:',
        ':juggling:',
        '女性ジャグラー',
        ':woman:'
    ],
    '🤹{{skin_tone}}': [
        'ジャグリング',
        ':person_juggling:',
        ':juggling:',
        'Juggler',
        ':person:'
    ],
    '🧘{{skin_tone}}‍♂️': [
        'ロータス・ポジションにいる男',
        ':man_lotus_position:',
        ':lotus_position:',
        'Meditation',
        'Zen',
        '<unk>',
        'ヨガ（Yoga）',
        ':man:'
    ],
    '🧘{{skin_tone}}‍♀️': [
        '蓮の境内の女',
        ':woman_lotus_position:',
        ':lotus_position:',
        'Meditation',
        'Zen',
        '<unk>',
        'ヨガ（Yoga）',
        ':woman:'
    ],
    '🧘{{skin_tone}}': [
        'ロータスの位置',
        ':person_lotus:_position',
        ':lotus_position:',
        'Meditation',
        'Zen',
        '<unk>',
        'ヨガ（Yoga）',
        ':person:'
    ],
    '🏃{{skin_tone}}‍♂️': [
        '走っている男',
        ':man_running:',
        ':running:',
        ':man:'
    ],
    '🏃{{skin_tone}}‍♀️': [
        '走っている女性',
        ':woman_running:',
        ':running:',
        ':woman:'
    ],
    '🏃{{skin_tone}}': [
        '実行している人',
        ':person_running:',
        ':running:',
        ':person:'
    ],
    '🕺{{skin_tone}}': [
        '男のダンス',
        ':man_dancing:',
        ':dancing:',
        ':man:'
    ],
    '💃{{skin_tone}}': [
        '女のダンス',
        ':woman_dancing:',
        ':dancing:',
        ':woman:'
    ],
    '🤺': [
        '人物のフェンシング',
        ':person_fencing:',
        'ファンサー',
        ':fencing:'
    ],
    '🏆': [
        'トロフィー',
        ':trophy:',
        'Championship',
        '入賞者',
        ':gold:',
        ':yellow:'
    ],
    '🏅': [
        'スポーツの勲章',
        ':sports_medal:',
        ':medal:',
        ':gold:',
        ':yellow:'
    ],
    '🥇': [
        '勲章（1位）',
        ':first_place_medal:',
        ':gold_medal:',
        '勲章（一位）',
        'Medalha de Ouro',
        ':yellow:',
        ':gold:'
    ],
    '🥈': [
        'Medalha de 2位。',
        ':second_place_medal:',
        ':silver_medal:',
        'Medalha de Preta de seguintes',
        'Medalha de Prata',
        ':gray:',
        ':grey:',
        ':silver:'
    ],
    '🥉': [
        'Medalha de 3位.',
        ':third_place_medal:',
        ':bronze_medal:',
        'Medalha de 3位。',
        'Medalha Bronze',
        ':brown:',
        ':bronze:'
    ],
    '⚽': [
        'Football',
        ':football:',
        'サッカー',
        ':white:',
        ':black:'
    ],
    '⚾': [
        '野球（野球）',
        ':baseball:',
        'ソフトボール',
        ':white:'
    ],
    '🥎': [
        'ソフトボール',
        ':softball:',
        ':yellow:'
    ],
    '🏀': [
        'バスケット ボール',
        ':basketball:',
        ':orange:',
        'バスケットボールとフープ'
    ],
    '🏐': [
        'バレーボール',
        ':volleyball:',
        ':white:'
    ],
    '🏈': [
        'アメリカンサッカー',
        ':american_football:',
        'Football',
        'Gridiron',
        'スーパーボウル（上）',
        ':brown:'
    ],
    '🏉': [
        'ラグビーサッカー',
        ':rugby:',
        'Football',
        'リーグ',
        'Rugby',
        'ユニオン(Union)'
    ],
    '🎾': [
        '<unk>',
        ':tennis:',
        ':ball:',
        'ボール',
        'Racket',
        'ラケット（ラケット）',
        ':yellow:'
    ],
    '🥏': [
        'フライングディスク',
        ':flying_disk:',
        'フリスビー'
    ],
    '🎳': [
        'ボウリング',
        ':bowling:',
        'ピン',
        'Skittles',
        '10ピンボウリング'
    ],
    '🏏': [
        'Cricket',
        ':cricket:',
        'バット語',
        'ボール'
    ],
    '🏑': [
        'Field Hockey',
        ':field_hockey:',
        'ボール',
        'スティック'
    ],
    '🏒': [
        'アイスホッケー（アイスホッケー）',
        ':ice_hockey:',
        'ボール',
        'スティック'
    ],
    '🥍': [
        'ラクロス語',
        ':lacrosse:',
        'ボール',
        'スティック',
        ':red:'
    ],
    '🏓': [
        'Ping Pong',
        ':ping_pong:',
        ':table_tennis:',
        '卓球台',
        'ボール',
        'Paddle'
    ],
    '🏸': [
        'Badminton',
        ':badminton:',
        'Shuttlecock',
        'ラケット（ラケット）'
    ],
    '🥊': [
        'ボクシンググローブ',
        ':boxing_glove:',
        ':red:'
    ],
    '🥋': [
        '格闘技服',
        ':martial_arts_uniform:',
        ':judo:',
        ':karate:',
        ':kung_fu:',
        '<unk>',
        '空手',
        'カンフー語'
    ],
    '⛳': [
        'ホールでのフラグ',
        ':flag_in_hole:',
        ':golf_flag:',
        'ゴルフフラグ'
    ],
    '⛸️': [
        'アイススケート',
        ':ice_skate:',
        'スケート'
    ],
    '🎣': [
        '釣り',
        ':fishing:',
        '<unk>',
        '魚',
        '釣りロッド'
    ],
    '🎽': [
        'ランニングシャツ',
        ':running_shirt:',
        'Singlet',
        'サッシュ'
    ],
    '🎿': [
        'Skis',
        ':skis:',
        'スキー',
        'Boot'
    ],
    '🛷': [
        '<unk>',
        ':sled:'
    ],
    '🥌': [
        'カーリングストーン',
        ':curling_stone:'
    ],
    '🎯': [
        'ダイレクトヒット',
        ':direct_hit:',
        'アーチェリー',
        'Bullseye',
        'ダーツ語'
    ],
    '🎱': [
        'プール8ボール',
        ':pool_8_ball:',
        'キューボール',
        'スヌーカー',
        'ビリヤード',
        ':black:'
    ],
    '🎮': [
        'ビデオゲームコントローラ',
        ':video_game_controller:',
        ':playstation:',
        ':xbox:',
        'プレイステーション',
        'Xbox',
        'ゲームパッド',
        'Wii U'
    ],
    '♟️': [
        '黒いチェスのポーン（チェス）',
        ':black_chess_pawn:',
        ':black:'
    ],
    '🏹': [
        '弓と矢',
        ':arch:',
        'Arch'
    ],
    '🥅': [
        'ゴールネット',
        ':goal_net:'
    ],
    '🀄': [
        'Mahjong Red Dragon',
        ':mahjong:',
        'Mahjong',
        'Mahjong Tile',
        '中',
        '麻雀タイルレッドドラゴン'
    ],
    '🎴': [
        'フラワープレイカード',
        ':flower_playing_cards:',
        'カードのデッキ',
        'Hanafuda',
        'Hwatu',
        'プレイカード'
    ]
};
/*travel and places*/
emojis_language[lang][9] = {
    '🚂': [
        '蒸気機関車format@@0',
        ':steam_train:',
        'Steam Train',
        '鉄道'
    ],
    '🚃': [
        '鉄道の車',
        ':railway_car:',
        '鉄道',
        '鉄道車',
        '鉄道のキャリア',
        '鉄道'
    ],
    '🚄': [
        '高速鉄道',
        ':high_speed_train:'
    ],
    '🚅': [
        '新幹線列車format@@0',
        ':bullet_train:',
        'Shinkansen',
        '弾丸鼻付高速電車'
    ],
    '🚆': [
        'トレイン',
        ':train:'
    ],
    '🚇': [
        '地下へ',
        ':underground:',
        'チューブ',
        'Metro',
        'Subway'
    ],
    '🚈': [
        'ライトレール',
        ':light_rail:',
        'トレイン'
    ],
    '🚊': [
        'トラム',
        ':tram:'
    ],
    '🚝': [
        'モノレール',
        ':monorail:',
        'トレイン'
    ],
    '🚞': [
        '山岳鉄道',
        ':mountain_railway:',
        'Funicular',
        '列車と山'
    ],
    '🚋': [
        'トラムカー',
        ':tram_car:'
    ],
    '🚌': [
        'バス',
        ':bus:',
        'コーチformat@@0'
    ],
    '🚍': [
        '運行バス',
        ':front_of_bus:',
        'バスフロント'
    ],
    '🚎': [
        'トロリーバス',
        ':trolleybus:',
        '選挙バス'
    ],
    '🚐': [
        'Minibus',
        ':minibus:',
        'ミニバン',
        '人-<unk>'
    ],
    '🚑': [
        'Ambulance',
        ':ambulance:'
    ],
    '🚒': [
        '消防車',
        ':fire_engine:',
        '消防局',
        '消防車'
    ],
    '🚓': [
        'パトカー',
        ':police_car:',
        'コップカー',
        '警察車のサイド'
    ],
    '🚔': [
        '警察車',
        ':front_of_police_car:',
        '警察車両フロント',
        'コップカー'
    ],
    '🚕': [
        'タクシー',
        ':taxi:',
        'ニューヨークタクシー',
        'タクシーのサイド'
    ],
    '🚖': [
        'タクシー',
        ':front_of_taxi:',
        '進行中のタクシー',
        'タクシーフロント'
    ],
    '🚗': [
        '車',
        ':car:',
        '赤い車',
        '車のサイド',
        '車'
    ],
    '🚘': [
        '輸送車',
        ':front_of_car:',
        '赤い車',
        '車のフロント'
    ],
    '🚚': [
        '配送トラック',
        ':lorry:',
        'Lorry'
    ],
    '🚛': [
        'Articulated Lorry',
        ':articulated_lorry:',
        'グリーントラック'
    ],
    '🚜': [
        'トラクター',
        ':tractor:',
        'Farm'
    ],
    '🛻': [
        'ピックアップトラック',
        ':pickup_truck:'
    ],
    '🏎️': [
        'レーシングカー',
        ':racing_car:',
        'F1',
        '数式 1',
        'レースカー'
    ],
    '🏍️': [
        'バイク',
        ':motorbike:',
        'バイク'
    ],
    '🛵': [
        'モーター スクーターformat@@0',
        ':motor_scooter:',
        'Vespa',
        'モーター バイク',
        'モーター バイク'
    ],
    '🛺': [
        '自動Rickshaw',
        ':auto_rickshaw:',
        'Tuk Tuk'
    ],
    '🚲': [
        '自転車',
        ':bike:',
        'バイク'
    ],
    '🛴': [
        'キックスクーター',
        ':kick_scooter:'
    ],
    '⛵': [
        '帆船',
        ':sailboat:',
        'Dinghy',
        '遊覧車'
    ],
    '🚤': [
        'スピードボート',
        ':speedboat:',
        'モーターボート',
        'パワーボート'
    ],
    '🛳️': [
        '旅客船',
        ':passenger_ship:'
    ],
    '⛴️': [
        'フェリー',
        ':ferry:'
    ],
    '🛥️': [
        'モーターボート',
        ':motor_boat:'
    ],
    '🚢': [
        'クルーズ船',
        ':cruise_ship:'
    ],
    '✈️': [
        '<unk>',
        ':airplane:',
        'Aeroplane'
    ],
    '🛩️': [
        '小型機',
        ':small_airplane:',
        '小型<unk>'
    ],
    '🚁': [
        'ヘリコプター（ヘリコプター）',
        ':helicopter:'
    ],
    '🚟': [
        'サスペンション鉄道',
        ':suspension_railway:'
    ],
    '🚠': [
        'Mountain Cableway',
        ':mountain_cableway:'
    ],
    '🚡': [
        'Aerial Tramway',
        ':aerial_tramway:',
        'Cable car',
        'Gondola',
        'ロープウェイ'
    ],
    '🛰️': [
        '<unk>',
        ':satellite:'
    ],
    '🚀': [
        'ロケット弾',
        ':rocket:',
        'スペースシャット'
    ],
    '🛸': [
        'フライング・ソーサー',
        ':flying_saucer:',
        '僅用於中文'
    ],
    '🚉': [
        '駅',
        ':train_station:',
        'りば'
    ],
    '🚏': [
        'バス',
        ':bus_stop:'
    ],
    '🛣️': [
        '高速道路',
        ':motorway:',
        '道路',
        '<unk>',
        '州間'
    ],
    '🛤️': [
        '鉄道',
        ':railway_track:'
    ],
    '🛫': [
        '飛行機出発',
        ':airplane_departure:',
        '離陸中'
    ],
    '🛬': [
        '飛行機到着',
        ':airplane_arrival:',
        '飛行機到着中',
        'Landing'
    ],
    '🗾': [
        '日本の地図',
        ':map_of_japan:'
    ],
    '⛰️': [
        '山',
        ':mountain:'
    ],
    '🏔️': [
        '雪に覆われた山',
        ':snow_capped_mountain:'
    ],
    '🌋': [
        'Volcano',
        ':volcano:'
    ],
    '🗻': [
        '富士山',
        ':mount_fuji:',
        '富士山'
    ],
    '🏕️': [
        'キャンプ',
        ':camping:',
        'キャンプ'
    ],
    '🏖️': [
        '傘付きのビーチ',
        ':beach_with_umbrella:'
    ],
    '🏜️': [
        'Desert',
        ':desert:'
    ],
    '🏝️': [
        'デザート島',
        ':desert_island:'
    ],
    '🏞️': [
        '国立公園',
        ':national_park:'
    ],
    '🏟️': [
        'スタジアム',
        ':stadium:',
        'Grande stand',
        'スポーツスタジアム'
    ],
    '🏛️': [
        '古典的な建物',
        ':classical_building:',
        'ギリシア語',
        'ローマ'
    ],
    '🏗️': [
        'Construção de Construção',
        ':building_construction:',
        'クレーン'
    ],
    '🏘️': [
        'Edifícios de construção',
        ':houses_building:',
        '民家グループ'
    ],
    '🏚️': [
        'Derelictハウスビル',
        ':old_house:',
        '廃墟と化した家',
        '古い家',
        '幽霊の家'
    ],
    '🏠': [
        'ホーム',
        ':home:',
        '建物群'
    ],
    '🏡': [
        '庭付きの家',
        ':house_with_garden:',
        'ハウスとツリー'
    ],
    '🏢': [
        'オフィスビル',
        ':office_building:',
        '都市の建物',
        '高層ビル'
    ],
    '🏣': [
        '日本の郵便局',
        ':japanese_post_office:',
        '日本語の郵便番号'
    ],
    '🏤': [
        '郵便局',
        ':european_post_office:',
        'ヨーロッパ郵便局'
    ],
    '🏥': [
        '病院',
        ':hospital:',
        'ER',
        'A&E',
        '緊急通報室',
        '事故と緊急事態について',
        '赤いクロス',
        '医療'
    ],
    '🏦': [
        '銀行',
        ':bank:',
        'BK',
        'Bakkureru',
        '銀行支店',
        'Bakkureru'
    ],
    '🏨': [
        'ホテル',
        ':hotel:',
        '宿泊施設',
        'H Building'
    ],
    '🏩': [
        'ラブホテル',
        ':love_hotel:',
        'ラブハートホテル'
    ],
    '🏪': [
        'コンビニエンスストア',
        ':convenience_store:',
        '24時間ストア',
        '7-イレブン',
        '角の店',
        'Kwik-E-Mart'
    ],
    '🏫': [
        '学校',
        ':school:',
        '時計塔',
        '初級中等学校format@@0'
    ],
    '🏬': [
        '百貨店店',
        ':department_store:',
        'ショッピング センター',
        'ショップ'
    ],
    '🏭': [
        'ファクトリー',
        ':factory:',
        '工業用',
        '産業',
        '<unk>',
        'スモグ'
    ],
    '🏯': [
        '日本の城',
        ':japanese_castle:',
        'Fortress'
    ],
    '🏰': [
        'ヨーロッパの城',
        ':european_castle:',
        'Turrets'
    ],
    '💒': [
        '教会の心',
        ':church_heart:',
        '教会の結婚式',
        '結婚'
    ],
    '🗼': [
        '東京タワー',
        ':tokyo_tower:',
        'エッフェル塔',
        'レッドタワー'
    ],
    '🗽': [
        '自由の像',
        ':statue_of_liberty:',
        'ニューヨーク'
    ],
    '⛪': [
        '教会の建物',
        ':church_building:',
        'クロス'
    ],
    '🕌': [
        'Mosque',
        ':mosque:',
        'ドームの屋根',
        'Minaret'
    ],
    '🛕': [
        'ヒンドゥー寺',
        ':hindu_temple:'
    ],
    '🕍': [
        'シナゴーグ',
        ':synagogue:',
        'Jewish',
        'Synagog',
        'Temple'
    ],
    '⛩️': [
        '神社',
        ':shinto_shrine:',
        '上之道'
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
        '地上の傘。',
        ':beach_umbrella:',
        'ビーチアンブレラ'
    ],
    '🌄': [
        '山の向こうに日の出がある',
        ':sunrise_over_mountains:',
        '朝',
        '日の出（サンライズ）'
    ],
    '🌅': [
        '日の出（サンライズ）',
        ':sunrise:',
        ':sunset:',
        '日没'
    ],
    '🌆': [
        '夕暮れ時の都市の風景',
        ':cityscape_at_dusk:',
        'オレンジスカイシティ',
        '夕暮れの市'
    ],
    '🌇': [
        '建物の上に日没する',
        ':sunset_over_buildings:',
        '都会のサンセット'
    ],
    '🌃': [
        '星との夜',
        ':night_with_stars:',
        '夜間の都市',
        '星空の夜'
    ],
    '🗿': [
        'Moai',
        ':moai:',
        'イースター島の像',
        'ヒューマンロック彫刻format@@0',
        '母屋井像'
    ],
    '🌠': [
        'シューティングスター',
        ':shooting_star:',
        '星にしたいとき',
        'Meteoroid'
    ],
    '🌌': [
        '天の川',
        ':milky_way:',
        'Galaxy',
        '夜の空',
        'スペース',
        '星',
        '宇宙'
    ],
    '🎑': [
        '月見式',
        ':moon_viewing_ceremony:',
        '草、ダンプリング、月',
        '収穫の月',
        '中秋祭り',
        'Tsukimi'
    ],
    '🛖': [
        '小屋',
        ':hut:'
    ],
    '🎢': [
        'ジェットコースター',
        ':roller_coaster:',
        'ジェットコースター',
        'テーマパーク'
    ],
    '🛝': [
        'Playground Slide',
        ':playground_slide:',
        '赤ちゃん',
        '子供'
    ]
};
/*technologies (smartphones, laptops, etc.) and office*/
emojis_language[lang][10] = {
    '⌚': [
        '見る',
        ':watch:',
        '時計',
        'Apple Watch'
    ],
    '⏰': [
        '目覚まし時計',
        ':alarm_clock:'
    ],
    '⏱️': [
        'ストップウォッチ',
        ':stopwatch:'
    ],
    '⏲️': [
        'タイマー時計',
        ':timer_clock:'
    ],
    '🕰️': [
        'マントルピース時計',
        ':mantelpiece_clock:'
    ],
    '🧭': [
        'Compass',
        ':compass:'
    ],
    '🕹️': [
        'ジョイスティック',
        ':joystick:'
    ],
    '🎙️': [
        'スタジオマイク',
        ':studio_microphone:'
    ],
    '🎚️': [
        'レベルスライダー',
        ':level_slider:'
    ],
    '🎛️': [
        'コントロールノブ',
        ':control_knobs:'
    ],
    '📻': [
        'ラジオ',
        ':radio:',
        'デジタルラジオ',
        'ワイヤレス'
    ],
    '📱': [
        '携帯電話',
        ':mobile_phone:',
        'スマートフォン',
        'iPhone',
        '携帯電話'
    ],
    '📲': [
        '右向きの矢印付携帯電話',
        ':phone_call:',
        '電話',
        '携帯電話を指しています'
    ],
    '☎️': [
        '黒い電話',
        ':rotary_phone:',
        'ロータリー電話',
        ':red:'
    ],
    '📞': [
        '電話受信者',
        ':phone:',
        'Handset',
        '電話番号',
        ':black:'
    ],
    '📟': [
        'ペガー',
        ':pager:',
        'ビーパー',
        'ブリーパー'
    ],
    '📠': [
        'Faxマシン',
        ':fax_machine:',
        'Facsimile',
        'Fax'
    ],
    '🔋': [
        'バッテリー',
        ':battery:',
        'AAバッテリー',
        '端末のバッテリー'
    ],
    '🔌': [
        '電気プラグ',
        ':power_cable:',
        'AC Adaptor',
        '電源ケーブル',
        '電源プラグ'
    ],
    '💻': [
        'ノート PC',
        ':laptop:',
        'メモ帳',
        'パーソナルコンピュータ',
        'PC',
        'MacBook',
        'Surface'
    ],
    '🖥️': [
        'デスクトップ コンピュータ',
        ':desktop_computer:',
        'iMac',
        'PC'
    ],
    '🖨️': [
        'Printer',
        ':printer:'
    ],
    '⌨️': [
        'Keyboard',
        ':keyboard:'
    ],
    '🖱️': [
        'コンピューターマウス',
        ':computer_mouse:',
        '3つのボタンマウス'
    ],
    '🖲️': [
        'トラックボール',
        ':trackball:'
    ],
    '💽': [
        'コンピュータディスク',
        ':blu_ray:',
        'Minidisc',
        'CD',
        'DVD',
        'Blu-ray',
        'BD'
    ],
    '💾': [
        'フロッピーディスク',
        ':floppy_disk:',
        '3.5インチディスク',
        'ディスク'
    ],
    '💿': [
        '光学ディスク',
        ':cd:',
        'CD',
        'CD-ROM',
        'コンパクトディスク'
    ],
    '📀': [
        'DVD',
        'DVD-ROM',
        ':dvd:',
        'DVD ビデオ'
    ],
    '🎥': [
        'ムービーカメラ',
        ':movie_camera:',
        'フィルムカメラ',
        'Hollywood',
        '映画'
    ],
    '🎞️': [
        'フィルムフレーム',
        ':film_frames:'
    ],
    '📽️': [
        '映画プロジェクター',
        ':film_projector:'
    ],
    '📺': [
        'テレビ',
        ':tv:',
        'テレビ'
    ],
    '📷': [
        'デジタルカメラ',
        ':digital_camera:'
    ],
    '📸': [
        'フラッシュ付きカメラ',
        ':camera_flash:'
    ],
    '📹': [
        'ビデオカメラ',
        ':video_camera:',
        'ビデオ撮影'
    ],
    '📼': [
        'ビデオカセット',
        ':vhs:',
        'VHS',
        'VCR',
        'ビデオテープ',
        'ビデオカセット'
    ],
    '💳': [
        'クレジットカード',
        ':credit_card:',
        'デビットカード',
        'AMEX',
        'Diners Club',
        'American Express',
        'Mastercard',
        'VISAカード'
    ],
    '📧': [
        'メール',
        ':email:',
        'Eメールアドレス'
    ],
    '📨': [
        '封筒の着信',
        ':incoming_envelope:',
        'ライン付き封筒',
        '超高速封筒'
    ],
    '📩': [
        '下向きの矢印が上にある封筒',
        ':insert_in_envelope:',
        '下矢印封筒',
        '封筒に挿入'
    ],
    '📤': [
        '送信トレイ（送信トレイ）',
        ':outbox_tray:'
    ],
    '📥': [
        '受信トレイ トレイ',
        ':inbox_tray:'
    ],
    '📮': [
        '郵便箱',
        ':postbox:'
    ],
    '📁': [
        'ファイルフォルダ',
        ':file_folder:',
        'フォルダ',
        'ディレクトリ',
        'クローズされたファイルフォルダ'
    ],
    '📂': [
        'ファイルフォルダを開く',
        ':open_file_folder:',
        'ディレクトリ'
    ],
    '🗂️': [
        'カードインデックスDividers',
        ':card_index_dividers:'
    ],
    '📅': [
        'カレンダー',
        ':calendar:',
        '7月17日',
        '世界絵文字デー'
    ],
    '🗓️': [
        'スパイラルカレンダーパッド',
        ':spiral_calendar_pad:'
    ],
    '📆': [
        'Tear-Off カレンダー',
        ':day_calendar:',
        '日カレンダー',
        'デスクカレンダー'
    ],
    '📈': [
        'グラフの増加',
        ':increasing_chart:',
        '正のグラフ',
        '上向きのグラフ',
        '上向きのトレンドがあるチャート'
    ],
    '📉': [
        'グラフの減少',
        ':decreasing_chart:',
        '負のグラフ',
        '下向きのグラフ',
        '下方トレンドのあるチャート'
    ],
    '📊': [
        '棒グラフ',
        ':bar_chart:',
        'バーグラフ'
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
        '丸いプッシュピン',
        ':round_pushpin:',
        'ドロップされたピン',
        '地図ピン',
        'ピン留めする',
        '赤いピン',
        ':red:'
    ],
    '📎': [
        'ペーパークリップ',
        ':paperclip:',
        'クリップ'
    ],
    '📏': [
        '直線ルーラー',
        ':straight_ruler:'
    ],
    '📐': [
        '三角ルーラー',
        ':triangular_ruler:',
        'トライアングルルール'
    ],
    '✂️': [
        'はさみ',
        ':scissors:',
        '切り取り'
    ],
    '✏️': [
        'Pencil',
        ':pencil:',
        '鉛筆の鉛筆と'
    ],
    '✒️': [
        '黒のニブ',
        ':black_nib:',
        'ペンニブ',
        'ファウンテンペン'
    ],
    '🖋️': [
        'ファウンテンペン',
        ':fountain_pen:',
        '左下のファウンテンペン'
    ],
    '🖊️': [
        'ペン',
        ':pen:',
        '左下ボールポイントペン',
        'Ballpoint Pen'
    ],
    '🖌️': [
        'ペイントブラシ',
        ':paintbrush:',
        'ブラシ',
        '左下のブラシ'
    ],
    '🖍️': [
        'Crayon',
        ':crayon:',
        '左下クレヨン'
    ],
    '📝': [
        'メモ',
        ':memo:',
        'Memorandum',
        'メモ',
        '鉛筆と紙'
    ],
    '🗑️': [
        'Wastepaper のバスケット',
        ':wastepaper_basket:',
        'ガベージ缶',
        'ごみ箱（ごみ箱）',
        'ゴミ箱の缶'
    ],
    '📡': [
        '衛星アンテナ',
        ':satellite_antenna:'
    ],
    '🔭': [
        'Telescope',
        ':telescope:',
        'Stargazing'
    ],
    '🔬': [
        'マイクロスコープ',
        ':microscope:',
        'Magnify',
        '科学'
    ],
    '📭': [
        '低旗のメールボックスを開く',
        ':open_mailbox_lowered:'
    ],
    '📬': [
        '旗を掲げたメールボックスを開く',
        ':open_mailbox_raised:',
        'メールボックスを開く'
    ],
    '📪': [
        '旗の低いクローズされたメールボックス',
        ':closed_mailbox_lowered:'
    ],
    '📫': [
        '旗を掲げたクローズされたメールボックス',
        ':closed_mailbox_raised:'
    ],
    '📰': [
        '新聞',
        ':newspaper:'
    ],
    '🗞️': [
        'ロールアップ新聞',
        ':rolled_up_newspaper:',
        '新聞配信'
    ],
    '📄': [
        'Page Facing Up',
        ':printed_page:',
        '印刷ページ'
    ],
    '📜': [
        'スクロール',
        ':scroll:',
        '度',
        'Parchment'
    ],
    '📃': [
        'ページにカーソルを合わせて表示',
        ':curled_page:',
        'Curled Page',
        'Curly Page'
    ],
    '📓': [
        'メモ帳',
        ':notebook:',
        '白黒本'
    ],
    '📔': [
        '装飾的なカバー付きメモ帳（メモ帳）',
        ':notebook_decorative_cover:'
    ],
    '📕': [
        'クローズドブック',
        ':closed_book:',
        'レッドブック',
        '赤教科書format@@0',
        ':red:'
    ],
    '📖': [
        '本を開く',
        ':open_book:',
        '本',
        'Novel'
    ],
    '📗': [
        'グリーンブック',
        ':green_book:',
        'グリーン教科書format@@0',
        ':green:'
    ],
    '📘': [
        'ブルーブック',
        ':blue_book:',
        '青色の教科書。',
        ':blue:'
    ],
    '📙': [
        'オレンジの本',
        ':orange_book:',
        '橙色の教科書format@@0',
        ':orange:'
    ],
    '📚': [
        '本',
        ':books:',
        '本のパイル',
        '本のスタック'
    ],
    '🗳️': [
        'Ballot Box with Ballot',
        ':ballot_box:',
        '投票ボックス',
        '投票'
    ],
    '🗄️': [
        'File Cabinet',
        ':file_cabinet:',
        'キャビネットの提出中'
    ],
    '🗃️': [
        'カードファイルボックス',
        ':card_file_box:'
    ],
    '🖇️': [
        'クリップをリンクする',
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
        'フィート',
        'Footstep'
    ],
    '👓': [
        'ガラス',
        ':glasses:',
        'Eveyglasses'
    ],
    '🕶️': [
        'サングラス(黒)',
        ':sunglasses:'
    ],
    '🥽': [
        'ゴーグル',
        ':goggles:'
    ],
    '🥼': [
        'ラボコート',
        ':lab_coat:'
    ],
    '👔': [
        'Necktie',
        ':necktie:',
        'ビジネスシャツ',
        'シャツとネクタイ。'
    ],
    '👕': [
        'Tシャツ',
        ':t_shirt:',
        ':t-shirt:',
        'Tシャツ（シャツ）',
        'ポロシャツ'
    ],
    '👖': [
        'ジーンズ語',
        ':jeans:',
        'Denim',
        'パンツ',
        'ズボン'
    ],
    '🧣': [
        'Scarf',
        ':scarf:'
    ],
    '🧤': [
        'グローブ',
        ':gloves:'
    ],
    '🧥': [
        'コート',
        ':coat:'
    ],
    '🧦': [
        'Socks',
        ':socks:'
    ],
    '👗': [
        'ドレス',
        ':dress:',
        'スカート',
        'ガウン'
    ],
    '👘': [
        'Kimono',
        ':kimono:',
        'ドレッシングガウン',
        '日本のドレス'
    ],
    '👙': [
        'ビキニ',
        ':bikini:',
        'Bheres',
        'スイムスーツ'
    ],
    '🩱': [
        'ワンピース水着format@@0',
        'one_piece_swimsuit',
        'ワンピース_水着format@@0'
    ],
    '👚': [
        '女性の服',
        ':womans_clothes:',
        '女性の服',
        'Blouse',
        'ピンクのシャツ',
        'Blouse'
    ],
    '👛': [
        '財布',
        ':purse:',
        'ウォレット'
    ],
    '👜': [
        'Handbag',
        ':handbag:'
    ],
    '👝': [
        'クラッチバッグ',
        ':clutch_bag:',
        'クラッチ（クラッチ）',
        '小さいバッグ',
        'Pouch'
    ],
    '🎒': [
        'バックパック',
        ':backpack:',
        'バッグ',
        'スクールバッグ',
        '学校の<unk>',
        'Rucksack'
    ],
    '👞': [
        'Mans Shoe',
        ':mans_shoe:',
        'Mans Shoe',
        'シューズ',
        '茶色の表示',
        'ドレスショー'
    ],
    '👟': [
        'アスレチックシューズ',
        ':athletic_shoe:',
        'ランニングシューズ',
        'Sneaker',
        'Runner',
        'トレーナー',
        'テニスシューズ'
    ],
    '🥾': [
        'ハイキングブーツ',
        ':hiking_boot:'
    ],
    '🥿': [
        'フラットシューズ',
        ':flat_shoe:'
    ],
    '👠': [
        'ハイヒールシューズ',
        ':high_heeled_shoe:',
        ':high_heel:',
        'Stiletto',
        'ハイヒールformat@@0'
    ],
    '👡': [
        'レディースサンダルformat@@0',
        ':womans_sandal:',
        'レディースサンダルformat@@0',
        'ヒールサンダルformat@@0',
        'サンダルの数',
        'Sandal'
    ],
    '👢': [
        '女性のブーツ',
        ':womans_boots_',
        '女性のブーツ',
        'カウガールブーツ',
        '膝上ブーツ',
        'ヒールブーツ'
    ],
    '👑': [
        'クラウン',
        ':crown:',
        'キング',
        'クイーン',
        'Prince',
        'ロイヤル',
        'Princess',
        ':gold:',
        ':yellow:'
    ],
    '👒': [
        '帽子',
        ':hat:',
        '女性の帽子',
        '弓付きの帽子',
        'レディース帽子'
    ],
    '🎩': [
        'トップの帽子',
        ':top_hat:',
        '形式的な服',
        'Groom',
        ':black:'
    ],
    '🎓': [
        '卒業上限',
        ':graduation_cap:',
        '大学',
        'Graduate',
        'モルタルボード',
        '大学',
        '正方形のアカデミックキャップ',
        ':black:'
    ],
    '🧢': [
        '請求上限',
        ':billed_cap:',
        '野球キャップ'
    ],
    '⛑️': [
        '白十字ヘルメット。',
        ':helmet_with_white_cross:',
        ':helmet_with_cross:',
        ':rescue_worker_helmet:',
        ':rescue_workers_helmet:',
        'レスキューワーカーのヘルメット',
        ':red:',
        ':white:'
    ],
    '💼': [
        'ブリーフケース',
        ':briefcase:',
        'スーツケース'
    ],
    '🎖️': [
        'Medalha Militar',
        ':military_medal:',
        ':medal:',
        'Medalha',
        'Medallion',
        '軍隊の装飾'
    ],
    '📿': [
        '祈りの玉',
        ':prayer_beads:',
        'Dhikrビーズ。',
        'Rosary Beads'
    ],
    '🎗️': [
        'リブボのリマインダー',
        ':reminder_ribbo:'
    ],
    '🤿': [
        'ダイビングマスク',
        ':diving_mask:'
    ],
    '🦺': [
        'セーフティベスト',
        ':safety_vest:'
    ],
    '🥻': [
        'サリ語',
        ':sari:',
        'サリー',
        'シャリ'
    ],
    '🩲': [
        'ブリーフ',
        ':briefs:'
    ],
    '🩳': [
        'ショート',
        ':shorts:'
    ],
    '🛼': [
        'ローラースケート',
        ':roller_skate:',
        'インラインスケート',
        'ローラーダービー'
    ],
    '🩴': [
        'Flip Flop',
        ':flip_flop:',
        'トンサンダル（トンサンダル）'
    ],
    '🪖': [
        '軍用ヘルメット',
        ':military_helmet:'
    ],
    '🩰': [
        'バレエシューズ',
        ':ballet_shoes:',
        'ポイント・シューズ'
    ],
    '🩼': [
        'Crutch',
        ':crutch:'
    ]
};
/*hands and parts of body*/
emojis_language[lang][12] = {
    '👋{{skin_tone}}': [
        '手札を流しています',
        ':wave:',
        ':waving_hand:',
        'さようなら！',
        'Hand Wave',
        'こんにちは',
        'Hi'
    ],
    '🖐️{{skin_tone}}': [
        '指を使った手',
        ':hand_splayed:',
        ':raised_hand_with_fingers_splayed:',
        ':hand_with_fingers_splayed:',
        '5手',
        '広げられた手',
        '指を使って育てられた手'
    ],
    '🤚{{skin_tone}}': [
        '育てられた<unk>',
        ':raised_back_of_hand:',
        ':back_of_hand:',
        'Backhand'
    ],
    '✋{{skin_tone}}': [
        '育てた手',
        ':raised_hand:',
        ':hand:',
        'ハイファイブ',
        '停止'
    ],
    '🖖{{skin_tone}}': [
        'Vulcan Salute',
        ':vulcan_salute:',
        'Spock',
        'スタートレック',
        '中間と指輪の間の部分で手を上げた'
    ],
    '👌{{skin_tone}}': [
        'OK ハンドサイン',
        ':ok_hand:',
        'OK',
        '完璧な',
        'はい'
    ],
    '✌️{{skin_tone}}': [
        '勝利の手',
        ':victory_hand:',
        '空気の引用',
        'ピースサイン',
        'V サイン'
    ],
    '🤞{{skin_tone}}': [
        '交差したフィンガー',
        ':crossed_fingers:',
        '指が交差しました',
        '幸運を祈ります',
        '交差するインデックスと中指を持つ手'
    ],
    '🤟{{skin_tone}}': [
        'ラブユージェスチャー',
        ':love_you_gesture:',
        ':i_love_you_hand_sign:',
        '手札のサインが大好きです'
    ],
    '🤘{{skin_tone}}': [
        '角のサイン',
        ':the_horns:',
        ':sign_of_the_horns:',
        ':metal:',
        '悪魔のフィンガー',
        'ヘビー合金',
        'ロックオン'
    ],
    '🤙{{skin_tone}}': [
        '手札を呼んでください',
        ':call_me_hand:',
        ':call_me:',
        '電話の手',
        '釈迦語'
    ],
    '🤏{{skin_tone}}': [
        '手をピンチ中',
        ':pinching_hand:'
    ],
    '👈{{skin_tone}}': [
        'バックハンドインデックスが左を指しています',
        ':backhand_index_pointing_left:',
        ':point_left:',
        'ホワイト左ポインティングバックハンドインデックス'
    ],
    '👉{{skin_tone}}': [
        'バックハンドインデックス右を指定しています',
        ':backhand_index_pointing_right:',
        ':point_right:',
        'ホワイト右ポインティングバックハンドインデックス'
    ],
    '👆{{skin_tone}}': [
        'バックハンドインデックスが上を指摘しています',
        ':point_up_2:',
        ':backhand_index_pointing_up:',
        'ホワイトアップポインティングバックハンドインデックス',
        'Middle Finger'
    ],
    '👇{{skin_tone}}': [
        'バックハンドインデックスが下に向かっています',
        ':point_down:',
        ':backhand_index_pointing_down:',
        'ホワイトダウンポインティングバックハンドインデックス',
        '下に向かっています'
    ],
    '☝{{skin_tone}}': [
        'フィンガーポインティングのインデックス',
        ':point_up:',
        ':index_pointing_up:',
        'ホワイトアップポインティングインデックス',
        'シークレット'
    ],
    '🖕{{skin_tone}}': [
        'Middle Finger',
        ':middle_finger:',
        '鳥を反転させる',
        '失礼なフィンガー',
        '中指延長ハンドを逆にする'
    ],
    '👍{{skin_tone}}': [
        'Thumbs Up Sign',
        ':thumbs_up_sign:',
        'いいね！',
        'はい'
    ],
    '👎{{skin_tone}}': [
        'Thumbs Down Sign',
        ':thumbs_down_sign:',
        '不正です',
        'Dislike',
        'いいえ'
    ],
    '✊{{skin_tone}}': [
        'レイズフィスト',
        ':raised_fist:',
        '拳ポンプ'
    ],
    '👊{{skin_tone}}': [
        '近づいてきた拳。',
        ':oncoming_fist:',
        'Bro Fist',
        'Brofist',
        '拳バンプ',
        'Punch',
        '閉じた拳（閉じた拳）',
        '握られた手サイン'
    ],
    '🤛{{skin_tone}}': [
        '左拳バンプ。',
        ':left_fist_bump:'
    ],
    '🤜{{skin_tone}}': [
        '右拳バンプ',
        ':right_fist:bump:'
    ],
    '🤌{{skin_tone}}': [
        'ピンチされたフィンガー',
        ':pinched_fingers:',
        'Ma Che Vuoi',
        '指の財布'
    ],
    '👏{{skin_tone}}': [
        '拍手サイン',
        ':cap:',
        ':clapping_hands:',
        '拍手する',
        'Clap',
        '拍手中',
        'ゴルフクラップ',
        '拍手のラウンド'
    ],
    '🙌{{skin_tone}}': [
        'お祝いで両手を育てる者',
        ':raised_hands:',
        ':raising_hands:',
        '手を上げる。',
        'Armas In The Air',
        'Banzai',
        'フェスティバルミラクル',
        'Hallelujah',
        '手を褒めてください',
        'Two hands'
    ],
    '👐{{skin_tone}}': [
        '手札を開く',
        ':open_hands_sign:',
        'ハグ',
        'ジャズの手'
    ],
    '🤲{{skin_tone}}': [
        '手のひらを一緒に上げる',
        ':palms_up_together:',
        'Dua'
    ],
    '🤝{{skin_tone}}': [
        'Handshake',
        ':handshake:',
        '握手する'
    ],
    '🙏{{skin_tone}}': [
        '折りたたまれた手',
        ':folded_hands:',
        'Namaste',
        'ください',
        '祈り',
        'ありがとうございます',
        '手を折りたたんだ人'
    ],
    '✍{{skin_tone}}': [
        '手を書く',
        ':writing_hand:'
    ],
    '🫱{{skin_tone}}': [
        '右の手',
        ':rightwards_hand:'
    ],
    '🫲{{skin_tone}}': [
        '左の手',
        ':leftwards_hand:'
    ],
    '🫳{{skin_tone}}': [
        '手のひらダウン',
        ':palm_down_hand:'
    ],
    '🫴{{skin_tone}}': [
        '手のひらアップ',
        ':palm_up_hand:'
    ],
    '🫰{{skin_tone}}': [
        'インデックスフィンガーと親指を交差させた手',
        ':hand_with_index_finger_and_thumb_crossed:'
    ],
    '🫵{{skin_tone}}': [
        'ビューアでのインデックス',
        ':index_pointing_at_the_viewer:'
    ],
    '🫶{{skin_tone}}': [
        'ハートの手',
        ':heart_hands:',
        'Love'
    ],
    '💪{{skin_tone}}': [
        'Flexed Biceps',
        ':flexed_biceps:',
        '腕の筋肉を曲げ',
        'Musle',
        '強い'
    ],
    '🦵{{skin_tone}}': [
        '足',
        ':leg:'
    ],
    '🦶{{skin_tone}}': [
        '足',
        ':foot:'
    ],
    '👂{{skin_tone}}': [
        'Ear',
        ':ear:',
        'Ears',
        'ヒアリング',
        '聴いています'
    ],
    '👃{{skin_tone}}': [
        '鼻毛（なせ）',
        ':nose:',
        'においがする',
        'Sniff',
        'Stinky'
    ],
    '🦻{{skin_tone}}': [
        '耳に補聴器',
        ':ear_with_hearing_aid:'
    ],
    '🧠': [
        'ブレイン',
        ':brain:',
        ':pink:'
    ],
    '🦷': [
        '歯',
        ':tooth:',
        ':white:'
    ],
    '👀': [
        '目',
        ':eyes:',
        'アイボール',
        'Shifty Eyes',
        '賢い目'
    ],
    '👁️': [
        '目',
        ':eye:',
        'シングルアイ'
    ],
    '👅': [
        'Tongue Out',
        ':tongue_out:',
        ':red:'
    ],
    '👄': [
        '口',
        ':mouth:',
        'キスをしているLips',
        'Lips',
        ':red:'
    ],
    '🫦': [
        '噛み付いてるリップ',
        ':biting_lip:',
        'Lips',
        ':red:'
    ],
    '🫀': [
        '解剖心',
        ':anatomical_heart:',
        ':red:'
    ],
    '🫁': [
        'Lungs',
        ':lungs:',
        ':red:'
    ],
    '🦾': [
        'Mechanical Arms',
        ':mechanical_arm:',
        '強い',
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
        'ネイルポーランド語',
        ':nail_polish:',
        'フィンガー',
        'Manicure',
        'Nonchalant'
    ],
    '🤳{{skin_tone}}': [
        'セルフィー',
        ':selfie:',
        '携帯電話のカメラ',
        'セルフィー手'
    ]
};
/*other*/
emojis_language[lang][13] = {
    '💩': [
        'Pile of Poo',
        ':pile_of_poo:',
        '犬の土',
        '笑顔のウンコ',
        ':brown:'
    ],
    '💋': [
        'キスマーク',
        ':kiss_mark:',
        'キスをしているLips',
        ':red:'
    ],
    '🦴': [
        '骨',
        ':bone:'
    ],
    '🧳': [
        '荷物：',
        ':luggage:',
        'スーツケース'
    ],
    '🌂': [
        '閉鎖された傘（傘）',
        ':closed_umbrella:',
        '折りたたまれたアンブレラ',
        'ピンクのアンブレラ',
        ':pink:',
        ':purple:'
    ],
    '☂️': [
        '傘（傘）',
        ':umbrella:',
        ':purple:'
    ],
    '☔': [
        '雨滴付きの傘。',
        ':umbrella_with_rain_drops:',
        ':umbrella:',
        '雨',
        'Rainy'
    ],
    '🧵': [
        'スレッドのスプール',
        ':spool_of_thread:'
    ],
    '🧶': [
        'Yarn のボール',
        ':ball_of_yarn:'
    ],
    '💄': [
        'Lipstick',
        ':lipstick:',
        'リップグロス',
        'メイクアップ',
        ':red:'
    ],
    '💍': [
        '着信音',
        ':ring:',
        'ダイヤモンド リング',
        'エンゲージメントリング'
    ],
    '💎': [
        '宝石石',
        ':gem_stone:',
        'ダイヤモンド',
        '宝石',
        '宝石',
        '宝石',
        ':blue:'
    ],
    '💥': [
        '衝突記号',
        ':collision_symbol:',
        'Bang',
        '爆発',
        '影響',
        '赤色のSpark',
        '爆発'
    ],
    '💫': [
        '奇妙なシンボル',
        ':dizzy_symbol:',
        'サークルとスター',
        ':yellow:'
    ],
    '💦': [
        'Sweat Symbol のスプラッシュ・スイーツ',
        'sweat_drops',
        'sweat_droplet',
        'プレウズ',
        '水しぶき',
        '水滴（水滴）',
        ':blue:'
    ],
    '💨': [
        'Dashing Away',
        ':dashing_away:',
        '速い',
        'Steam',
        'Vaping',
        '風',
        'ダッシュ記号',
        '突風(突風)'
    ],
    '🌬️': [
        '風面',
        ':wind_face:',
        '吹く風',
        '母なる自然',
        '風が吹く顔',
        ':white:'
    ],
    '🐾': [
        '足の印刷',
        ':paw_prints:',
        '猫の足の版画',
        '犬の足の版画',
        '子猫の足の版画',
        '子犬の足の版画'
    ],
    '🕸️': [
        'スパイダーウェブ',
        ':spider_web:',
        'Cobweb',
        'ウェブ',
        'Spiderweb'
    ],
    '🦠': [
        'Microbe',
        ':microbe:',
        'セル',
        'Coronavirus',
        'COVID-19',
        'Germ',
        '微生物学',
        'ウイルス',
        ':green:'
    ],
    '💐': [
        '花のブーケ',
        ':bouquet_of_flowers:'
    ],
    '🌍': [
        'ヨーロッパとアフリカを示す',
        ':globe_showing_europe_africa:',
        ':earth_africa:',
        'Earth',
        'Globe',
        '惑星',
        'ワールド',
        'ヨーロッパとアフリカを示す',
        ':blue:'
    ],
    '🌎': [
        'アメリカ大陸を示すグローブ（グローブ）',
        ':globe_showing_americas:',
        ':earth_americas:',
        'Earth',
        'Globe',
        '惑星',
        'ワールド',
        ':blue:'
    ],
    '🌏': [
        'グローブショーアジア、オーストラリア',
        ':globe_showing_asia_australia:',
        ':earth_asia:',
        'Earth',
        'Globe',
        '惑星',
        'ワールド',
        'アジアとオーストラリアを示す',
        ':blue:'
    ],
    '🌐': [
        '子午線とともに<unk>',
        ':globe_with_meridians:',
        'インターネット',
        'World Wide Web',
        'WWW'
    ],
    '🌑': [
        'New Moon Symbol',
        ':new_moon:',
        '暗い月',
        '影の月',
        '日食の様子',
        ':black:'
    ],
    '🌒': [
        '三日月形シンボル',
        ':waxing_crescent_moon:',
        ':yellow:',
        ':black:'
    ],
    '🌓': [
        '第1四半期の月のシンボル',
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
        '有望な月シンボル',
        ':waning_gibbous_moon:',
        ':yellow:',
        ':black:'
    ],
    '🌗': [
        '最後の四半期の月のシンボル',
        ':last_quarter_moon:',
        ':yellow:',
        ':black:'
    ],
    '🌘': [
        '有望な三日月シンボル',
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
        '面を持つ新月',
        ':new_moon_with_face:',
        '不気味な月',
        '暗い月の顔',
        '痴漢の月',
        ':black:',
        ':gray:',
        ':grey:'
    ],
    '🌝': [
        '顔のある満月',
        ':full_moon_with_face:',
        'Moonface',
        'Smiley Moon',
        '微笑む月',
        ':yellow:'
    ],
    '🌛': [
        '顔を持つ第1四半期月',
        ':first_quarter_moon_with_face:',
        ':first_quarter_moon_face:',
        ':yellow:'
    ],
    '🌜': [
        '顔のある最後の四半期の月',
        ':last_quarter_moon_with_face:',
        ':last_quarter_moon_face:',
        ':yellow:'
    ],
    '🌞': [
        '面を持つ太陽',
        ':sun_with_face:',
        'Smiley Sun',
        'Sunface',
        '微笑む太陽',
        ':yellow:'
    ],
    '☀️': [
        '日',
        ':sun:',
        'サンシャイン',
        ':yellow:'
    ],
    '⭐': [
        'スター',
        ':star:',
        'ホワイト・スター（中型）',
        ':yellow:'
    ],
    '🌟': [
        '輝かしい星',
        ':glowing_star:',
        '輝く星',
        ':yellow:'
    ],
    '☁️': [
        'クラウド',
        ':cloud:',
        '曇り',
        '曇り',
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
        '雷雨クラウド対応',
        ':thunder_cloud_and_rain:',
        ':thunder_cloud_rain:',
        ':cloud_with_lightning_and_rain:',
        '雷雲と雨',
        ':white:'
    ],
    '🌤️': [
        '小さな雲のある白い太陽',
        ':mostly_sunny:',
        ':sun_behind_small_cloud:',
        ':sun_small_cloud:',
        ':white_sun_small_cloud:',
        ':white_sun_with_small_cloud:',
        ':white:'
    ],
    '🌥️': [
        '大きな雲の背後にある太陽',
        ':sun_behind_large_cloud:',
        '雲の背後にある白い太陽',
        ':white:'
    ],
    '🌦️': [
        '雨と雲の後ろの白い太陽',
        ':sun_behind_rain_cloud:',
        ':partly_sunny_rain:',
        ':white_sun_rain_cloud:',
        ':white_sun_behind_cloud_with_rain:',
        ':white:'
    ],
    '🌧️': [
        '雨のある雲',
        ':cloud_with_rain:',
        ':white:'
    ],
    '🌨️': [
        '雪のある雲',
        ':cloud_with_snow:',
        ':white:'
    ],
    '🌩️': [
        'Lightningクラウド対応',
        ':cloud_with_lightning:',
        ':white:'
    ],
    '🌪️': [
        'Tornado',
        ':tornado:',
        'Tornadoを使った雲'
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
        'ゲイプライド',
        'プライマリ・レインボー',
        'LGBTQIA+',
        'LGBT+'
    ],
    '❄️': [
        'スノーフレーク',
        ':snowflake:',
        '雪',
        '降雪',
        ':white:'
    ],
    '🌀': [
        'Cyclone',
        ':cyclone:',
        'Hurricane',
        'スパイラル',
        'Swirl Swirl',
        'Tornado'
    ],
    '⚡': [
        '高電圧サイン',
        ':high_voltage_sign:',
        '稲妻ボルト',
        'Thunderbolt',
        '高電圧'
    ],
    '☃️': [
        'Snowman',
        ':snowman:',
        'スノーフレークを持つスノーマン',
        ':white:'
    ],
    '⛄': [
        '雪のない雪の男',
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
        '<unk>',
        ':fire:',
        '炎',
        'ホット',
        'Lit',
        'Snapstreak',
        ':red:'
    ],
    '💧': [
        'Droplet',
        ':droplet:',
        '水',
        '水のドロップ',
        ':blue:'
    ],
    '✨': [
        'スパークルズ',
        ':sparkles:',
        '<unk>',
        'Shiny',
        '新規作成'
    ],
    '🌊': [
        '水の波',
        ':water_wave:',
        'ビーチ',
        'Ocean Wave',
        '海',
        ':blue:'
    ],
    '🎄': [
        'クリスマスツリー',
        'Christmas_tree',
        'クリスマス',
        'クリスマスの木',
        ':green:'
    ],
    '🎃': [
        'Jack-O-Lantern',
        'jack_o_lantan',
        'Halloween',
        'カボチャformat@@0',
        ':orange:'
    ],
    '🌻': [
        'ヒマワリ',
        ':sunflower:',
        '黄色の花',
        ':yellow:'
    ],
    '🌼': [
        'Blossom',
        ':blossom:',
        '花を咲かせます',
        'Daisy',
        '黄色の花',
        ':yellow:'
    ],
    '🌷': [
        'Tulip',
        ':tulip:',
        ':pink:'
    ],
    '🌹': [
        'バラの花',
        ':rose_flower:',
        'レッドローズ',
        ':red:'
    ],
    '☘️': [
        'シャムロック',
        ':shamrock:',
        'クローバー',
        'トレポイル',
        ':green:'
    ],
    '🍀': [
        '四つの葉のクローバー',
        ':four_leaf_clover:',
        'クローバー',
        'アイルランド',
        'Lucky',
        'Fortune',
        ':green:'
    ],
    '🌸': [
        'Cherry Blossom',
        ':cherry_blossom:',
        '桃色の花',
        'Sakura',
        ':pink:'
    ],
    '💮': [
        '白い花',
        ':white_flower:',
        'Cherry Blossom',
        '紙 Doily',
        'Well Done Stamp',
        ':white:'
    ],
    '🌺': [
        'Hibiscus',
        ':hibiscus:',
        ':red:'
    ],
    '🏵️': [
        'ロゼット',
        ':rosette:',
        ':orange:',
        ':yellow:'
    ],
    '🌱': [
        'シードリング',
        ':seedling:',
        '春',
        'Sprout',
        '発芽中',
        ':green:'
    ],
    '🌲': [
        'エバーグリーンの木',
        ':evergreen_tree:',
        'ノキの木',
        '松の木',
        ':green:'
    ],
    '🌳': [
        '落葉木',
        ':deciduous_tree:',
        '丸い木',
        ':green:'
    ],
    '🌴': [
        'ヤシの木',
        ':palm_tree:',
        'ココナッツの木',
        ':green:'
    ],
    '🎋': [
        '七夕の木',
        ':tanabata_tree:',
        'Tanabata',
        'ウィッシュツリー'
    ],
    '🎍': [
        '松の装飾',
        ':pine_decoration:',
        'Bamboo',
        '門松（門松）',
        '新年の装飾'
    ],
    '🌵': [
        'Cactus',
        ':cactus:',
        'Desert',
        ':green:'
    ],
    '🌾': [
        '米の<unk>',
        ':sheaf_of_rice:',
        'クロップ',
        '<unk>',
        '小麦（小麦）',
        '米の耳'
    ],
    '🌿': [
        'ハーブ',
        ':herb:',
        'クロップ',
        '植物',
        ':green:'
    ],
    '🍁': [
        'カエデの葉',
        ':maple_leaf:',
        'カナダ',
        'カナダ語',
        'カエデ語',
        ':brown:'
    ],
    '🍂': [
        '倒れた葉',
        ':fallen_leaf:',
        '秋の葉',
        '秋の葉',
        '茶色の葉',
        '秋の葉',
        '倒れた葉',
        ':brown:'
    ],
    '🍃': [
        '風の中の葉のフルタリング',
        ':leaf_fluttering_in_wind:',
        ':leaves:',
        '緑色の葉',
        '春',
        ':green:'
    ],
    '🪴': [
        '鉢植え',
        ':potted_plant:',
        ':green:'
    ],
    '🪸': [
        '珊瑚（サンゴ）',
        ':coral:',
        '<unk>'
    ],
    '🪷': [
        'Lotus',
        ':lotus:',
        '<unk>',
        'ビューティー',
        'Calmness',
        'Serenity'
    ],
    //"🪻": ["Hyacinth", ":hyacinth:", "Purple flower", ":purple:"],
    //"🫛": ["Pea Pod", ":pea_pod:", ":green:"],
    //"🫚": ["Ginger root", ":ginger:", "Spice", "Flavour", ":brown:"],
    '🔑': [
        'キー',
        ':key:',
        '金の鍵',
        ':gold:',
        ':yellow:'
    ],
    '🗝️': [
        '古いキー',
        ':old_key:',
        ':brown:'
    ],
    '🔨': [
        'ハンマー',
        ':hammer:',
        'クロウハンマー',
        'Handyman',
        'ツール'
    ],
    '⛏️': [
        '選択',
        ':pick:',
        'ツルハシ'
    ],
    '🪓': [
        '斧',
        ':axe:',
        'firefighter'
    ],
    '🪚': [
        'Carpentry Saw.',
        ':carpentry_saw:'
    ],
    '🪛': [
        'スクリュードライバ',
        ':screwdriver:'
    ],
    '🪝': [
        'フック',
        ':hook:'
    ],
    '🪠': [
        'Plunger',
        ':plunger:'
    ],
    '🪣': [
        'バケツ入りバケツ',
        ':bucket:'
    ],
    '🔩': [
        'ナットとボルト',
        ':nut_and_bolt:',
        'ボルト',
        'スクリップ',
        ':gray:',
        ':grey:'
    ],
    '🗜️': [
        'クランプ',
        ':clamp:',
        'テーブルバイス',
        'WinZip',
        '圧縮',
        ':gray:',
        ':grey:'
    ],
    '🔒': [
        'ロック中',
        ':locked:',
        'クローズされたロック',
        '南京錠format@@0'
    ],
    '🔓': [
        'ロック解除済み',
        ':unlocked:',
        '南京錠を開く',
        'ロックを開く'
    ],
    '🔏': [
        'ペンでロック',
        ':locked_with_pen:',
        'ロックとペン',
        '噴水ペンでロック',
        '水墨ペンでロック'
    ],
    '🔐': [
        '鍵でロック',
        ':locked_with_key:',
        'キーでロック'
    ],
    '🗡️': [
        'Dagger',
        ':dagger:',
        'ナイフ武器',
        ':gray:',
        ':grey:'
    ],
    '⚔️': [
        '十字の剣',
        ':crossed_swords:',
        ':gray:',
        ':grey:'
    ],
    '🔫': [
        'Pistol',
        ':pistol:',
        '銃',
        'リボルバー',
        '潮吹き銃',
        '水銃',
        'ウォーターピストル'
    ],
    '🧰': [
        'ツールバー',
        ':toolbox:',
        ':red:'
    ],
    '🧲': [
        'マグネット',
        ':magnet:',
        ':red:'
    ],
    '⛓️': [
        'チェーン',
        ':chains:'
    ],
    '💉': [
        'Syringe',
        ':syringe:',
        '献血量',
        '血液検査',
        'ニードル語',
        'Vaccination',
        'blood',
        'sick',
        'ill'
    ],
    '🧬': [
        'DNA',
        ':dna:',
        'DNA ダブルヘリックス'
    ],
    '🧪': [
        'テストチューブ',
        ':test_tube:',
        ':green:'
    ],
    '🛏️': [
        'ベッド',
        ':bed:',
        'ベッドルーム'
    ],
    '🛋️': [
        'カウチとランプ',
        ':couch_and_lamp:',
        'ラウンジ',
        'セット',
        '<unk>'
    ],
    '🪑': [
        'チェア（椅子）',
        ':chair:'
    ],
    '🚪': [
        'ドア',
        ':door:',
        'ドア',
        '玄関ドア'
    ],
    '🪟': [
        'ウィンドウ',
        ':window:'
    ],
    '🪜': [
        '梯子',
        ':ladder:'
    ],
    '🪞': [
        'ミラー',
        ':mirror:'
    ],
    '🚽': [
        'トイレ',
        ':toilet:',
        'バスルーム',
        'Loo',
        'トイレ',
        'WC（世界）',
        ':white:'
    ],
    '🚿': [
        'シャワー',
        ':shower:',
        'シャワーヘッド',
        ':shower:'
    ],
    '🛁': [
        'バスタブ',
        ':bathtub:',
        'バブルバス',
        ':shower:'
    ],
    '🧴': [
        'ローションボトル',
        ':location_bottle:'
    ],
    '🧷': [
        '安全ピン',
        ':safety_pin:',
        ':gray:',
        ':grey:'
    ],
    '🧺': [
        'バスケット',
        ':basket:',
        ':brown:'
    ],
    '🧻': [
        '紙のロール',
        ':roll_of_paper:',
        'トイレット紙',
        ':white:'
    ],
    '🧼': [
        '石鹸のバー',
        ':bar_of_soap:'
    ],
    '🧽': [
        'Sponge',
        ':sponge:',
        ':yellow:'
    ],
    '🧯': [
        '消火器',
        ':fire_extinguisher:',
        ':red:'
    ],
    '🚬': [
        'Cigarete',
        ':cigarette:',
        'スモークシンボル'
    ],
    '⚰️': [
        'Coffin',
        ':coffin:',
        'Casket',
        '葬儀（葬儀）',
        ':brown:'
    ],
    '⚱️': [
        '葬儀箱（葬儀用）',
        ':funeral_urn:',
        '花瓶の数'
    ],
    '🛡️': [
        'シールド',
        ':shield:'
    ],
    '⚙️': [
        '装備',
        ':gear:',
        '設定',
        'オプション',
        ':gray:',
        ':grey:'
    ],
    '⚖️': [
        'バランススケール',
        ':balance_scale:',
        '正義のスケール'
    ],
    '🔗': [
        'リンク',
        ':link:',
        'チェーン',
        'ハイパーリンク',
        'リンクされたチェーン',
        ':gray:',
        ':grey:'
    ],
    '💀': [
        'Skull',
        ':skull:',
        '死',
        '灰色の頭骨',
        'スケルトン',
        ':white:'
    ],
    '☠️': [
        '頭蓋骨と<unk>',
        ':skull_and_crossbones:',
        ':white:'
    ],
    '🎡': [
        '観覧車',
        ':ferris_wheel:',
        '大きなホイール',
        'Fairgroundl',
        '観測ホイール'
    ],
    '⛽': [
        '燃料ポンプ',
        'fuel_pump:',
        'オイル',
        'Petrol',
        'ガス',
        ':red:'
    ],
    '🚨': [
        '警察車両回転光',
        ':rotating_light:',
        ':police_police_car:',
        '非常用ライト',
        'ライトの書き込み',
        'Siren',
        ':red:'
    ],
    '🚥': [
        '横方向の信号機',
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
        'アドミラルティパターンアンカー',
        ':anchor:',
        'Fisherman'
    ],
    '🚧': [
        '建設記号',
        ':construction_sign:',
        '黒と黄色の縞模様のサイン',
        ':yellow:',
        ':black:'
    ],
    '🪂': [
        'Parachute',
        ':parachute:'
    ],
    '💺': [
        'シート',
        ':seat:',
        'バス飛行機列車<unk>'
    ],
    '🪐': [
        'サターン語',
        ':saturn:'
    ],
    '🎆': [
        '花火',
        ':fireworks:',
        '爆発'
    ],
    '🎇': [
        'Senko Hanabi',
        ':senko_hanabi:',
        '花火のスパーク ラー'
    ],
    '💷': [
        'ポンド紙幣format@@0',
        ':pound:',
        ':pound_banknote:',
        '£20ノート',
        '20クワッドノート',
        'ポンドサイン付き銀行券（ポンドサイン付き）',
        ':purple:'
    ],
    '💶': [
        'Euro Banknote',
        ':euro:',
        ':euro_banknote:',
        '€100ノート',
        'ユーロ記号付き紙幣（ユーロ記号付き）',
        ':blue:'
    ],
    '💵': [
        'ドル紙幣format@@0',
        ':dollar:',
        ':dollar_banknote:',
        '$1 ノート',
        'ドル記号付き紙幣format@@0',
        'ドル請求書',
        'アメリカ ドル',
        ':green:'
    ],
    '💴': [
        '円紙幣（円札）',
        ':yen:',
        ':yen_banknote:',
        '¥1000 注',
        '円ノート',
        '円サイン入り紙幣(円印付き)',
        ':yellow:'
    ],
    '⛺': [
        '駐屯テント（キャンプ）',
        ':camping_tent:'
    ],
    '⛲': [
        'ファウンテン（噴水）',
        ':fountain:',
        '水の特徴',
        '泉の水',
        '公園'
    ],
    '💰': [
        '現金バッグ',
        ':money_bag:',
        'Moneybags',
        'Rich',
        '$'
    ],
    '💸': [
        '翼を持ったお金',
        ':money_with_wings:',
        '空飛ぶお金',
        ' 損失した現金'
    ],
    '🏷️': [
        'ラベル タグ',
        ':label_tag:'
    ],
    '🔖': [
        'ブックマーク',
        ':bookmark:',
        '価格タグ',
        'タグ'
    ],
    '📑': [
        'タブをブックマーク',
        ':bookmark_tabs:',
        ':white:'
    ],
    '📯': [
        '郵便の角',
        ':postal_horn:',
        'Bugle',
        'フランス語の角'
    ],
    '🪁': [
        '凧（凧）',
        ':kite:',
        ':purple:'
    ],
    '🪀': [
        'ヨーヨー語',
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
        '祝賀会',
        'パーティーの帽子'
    ],
    '🎈': [
        'Balloon',
        ':balloon:',
        'パーティー',
        '赤色の風船format@@0',
        ':red:'
    ],
    '🌡️': [
        '体温計',
        ':thermometer:',
        '暑い天気',
        '温度',
        ':red:'
    ],
    '🛢️': [
        'オイル ドラム(ドラム)',
        ':oil_drum:'
    ],
    '💣': [
        'Bomba',
        ':bomb:',
        'boom'
    ],
    '🔪': [
        'キッチンナイフ',
        ':kitchen_knife:',
        'ナイフ',
        '肉屋のナイフ',
        'Hocho'
    ],
    '🏺': [
        'Amphora',
        ':amphora:',
        'Jar',
        '花瓶の数'
    ],
    '🗺️': [
        'ワールドマップ',
        ':world_map:'
    ],
    '🎼': [
        '楽器スコア',
        ':musical_score:',
        '楽譜の作成',
        'Treble Clef'
    ],
    '🎬': [
        'クラッパーボード',
        ':clapper_board:',
        '切り取り',
        'アクション',
        'ディレクター',
        'フィルムスレート'
    ],
    '🎻': [
        'バイオリン(バイオリン)',
        ':violin:',
        '弦楽四重奏曲',
        '世界最小バイオリン（世界最小）'
    ],
    '🎺': [
        'Trumpet',
        ':trumpet:',
        '角',
        'Jazz'
    ],
    '🎸': [
        'Guitar',
        ':guitar:',
        'Acoustic Guitar',
        'ベースのGuitar',
        'エレキGuitar'
    ],
    '🎷': [
        'サクソフォーン',
        ':saxophone:',
        'Jazz',
        'Sax'
    ],
    '🥁': [
        'Drum',
        ':drum:',
        'ドラムスティック付きドラム(Drumstick)'
    ],
    '🎹': [
        'Piano',
        ':piano:',
        '音楽キーボード',
        ':white:',
        ':black:'
    ],
    '🪕': [
        '番上（ばんじょう）',
        ':banjo:'
    ],
    '🪗': [
        'アコーディオン',
        ':accordion:'
    ],
    '🪘': [
        'ロングドラム(ロングドラム)',
        ':long_drum:'
    ],
    '🎨': [
        'アーティストパレット',
        ':artist_palette:',
        'アート',
        '絵画'
    ],
    '🧩': [
        'パズルの欠片',
        ':puzzle_piece:',
        'ジグソーパズルの欠片',
        ':green:'
    ],
    '🎲': [
        'ゲームダイス',
        ':game_die:',
        'ダイス',
        ':white:'
    ],
    '🎭': [
        'パフォーミングアート',
        'performing_arts',
        '劇場',
        '劇場',
        'ドラママスク',
        'ギリシャ劇場マスク',
        '悲劇と喜劇のマスク',
        'ヴェネツィア'
    ],
    '🔍': [
        '左に傾けられた拡大ガラス（拡大ガラス）',
        ':mag:',
        ':magnifying_glass_tilted_left:',
        'Magnifier',
        '検索アイコン',
        '左方向の拡大ガラス',
        '検索',
        ':transparent:'
    ],
    '🔎': [
        '右に傾けられた拡大鏡（虫眼鏡）',
        ':mag_right:',
        ':magnifying_glass_tilted_right:',
        'Magnifier',
        '検索アイコン',
        '右指向の拡大ガラス',
        '検索',
        ':transparent:'
    ],
    '⌛': [
        'Hourglass Done',
        ':hourglass:',
        ':hourglass_done:',
        'Hourglass'
    ],
    '⏳': [
        'Hourglass Not Done',
        ':hourglass_flowing_sand:',
        ':hourglass_not_done:',
        '流れる砂のある砂時計'
    ],
    '🕐': [
        'OClock',
        ':clock1:',
        ':one_oclock:',
        '時計 Face 1 OClock',
        ':gray:',
        ':grey:'
    ],
    '🕜': [
        '時計 Face 1 - 30',
        ':clock130:',
        ':one_thirty:',
        ':gray:',
        ':grey:'
    ],
    '🕑': [
        '2 OClock',
        ':clock2:',
        ':two_oclock:',
        '時計 Face 2 OClock',
        ':gray:',
        ':grey:'
    ],
    '🕝': [
        '2/30時計',
        ':clock230:',
        ':two_thirty:',
        ':gray:',
        ':grey:'
    ],
    '🕒': [
        '3 OClock',
        ':clock3:',
        ':three_oclock:',
        '時計 Face 3 OClock',
        ':gray:',
        ':grey:'
    ],
    '🕞': [
        '時計の顔 3 D',
        ':clock330:',
        ':three_thirty:',
        ':gray:',
        ':grey:'
    ],
    '🕓': [
        '4 OClock',
        ':clock4:',
        ':four_oclock:',
        '時計の顔 4 OClock',
        ':gray:',
        ':grey:'
    ],
    '🕟': [
        '時計の顔 4-30',
        ':clock430:',
        ':four_thirty:',
        ':gray:',
        ':grey:'
    ],
    '🕔': [
        '5 OClock',
        ':clock5:',
        ':five_oclock:',
        '時計の顔 5 OClock',
        ':gray:',
        ':grey:'
    ],
    '🕠': [
        '時計の顔 5-30',
        ':clock530:',
        ':five_thirty:',
        ':gray:',
        ':grey:'
    ],
    '🕕': [
        '6 OClock',
        ':clock6:',
        ':size_oclock:',
        '時計が6個のOClock',
        ':gray:',
        ':grey:'
    ],
    '🕡': [
        'クロックフェイス 6 x 30',
        ':clock630:',
        ':six_thirty:',
        ':gray:',
        ':grey:'
    ],
    '🕖': [
        '7 OClock',
        ':clock7:',
        ':seven_oclock:',
        '時計 Face 7 OClock',
        ':gray:',
        ':grey:'
    ],
    '🕢': [
        '時計の顔 (セブン) - 30',
        ':clock730:',
        ':sever_thirty:',
        ':gray:',
        ':grey:'
    ],
    '🕗': [
        '8 OClock',
        ':clock8:',
        ':eight_oclock:',
        '時計が8時に面しています',
        ':gray:',
        ':grey:'
    ],
    '🕣': [
        '時計の顔 8-30',
        ':clock830:',
        ':eight_thirty:',
        ':gray:',
        ':grey:'
    ],
    '🕘': [
        '9 OClock',
        ':clock9:',
        ':nine_clock:',
        '時計の顔 9 OClock',
        ':gray:',
        ':grey:'
    ],
    '🕤': [
        '時計の顔 9 - 30',
        ':clock930:',
        ':nine_thirty:',
        ':gray:',
        ':grey:'
    ],
    '🕙': [
        '10 OClock',
        ':clock10:',
        ':ten_oclock:',
        '時計の顔 10 Oclock',
        ':gray:',
        ':grey:'
    ],
    '🕥': [
        '時計の顔 10 分',
        ':clock1030:',
        ':ten_thirty:',
        ':gray:',
        ':grey:'
    ],
    '🕚': [
        'Eleven OClock',
        ':click11:',
        ':eleven_oclock:',
        '時計の顔 11 OClock',
        ':gray:',
        ':grey:'
    ],
    '🕦': [
        '面11-30時計',
        ':clock1130:',
        ':eleven_thirty:',
        ':gray:',
        ':grey:'
    ],
    '🕛': [
        '12 OClock',
        ':clock12:',
        ':twelve_oclock:',
        '時計の顔 12 Oクロック',
        ':gray:',
        ':grey:'
    ],
    '🕧': [
        '時計 format@@0 12 - 30',
        ':clock1230:',
        ':twelve_thirty:',
        ':gray:',
        ':grey:'
    ],
    '♨️': [
        '温泉',
        ':hot_springs:',
        'Onsen',
        'Steam',
        ':red:'
    ],
    '💈': [
        '理髪師',
        ':barber_pole:',
        '床屋ショップ',
        '床屋の縞模様。',
        '美容師',
        ':blue:',
        ':red:'
    ],
    '🎪': [
        'Circus Tent',
        ':circus_tent:',
        'ビッグトップ',
        'Circus'
    ],
    '💢': [
        '怒りのシンボル',
        ':anger_symbol:',
        '怒りのサイン',
        'Vein Pop',
        ':red:'
    ],
    '🗯️': [
        '右怒りバブル',
        ':right_anger_bubble:',
        ':anger_right:',
        'Zig Zag Bubble',
        '怒りの発音バブル',
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
        'カプセル',
        'タブレット',
        '薬',
        'Sick',
        'ill',
        ':yellow:',
        ':red:'
    ],
    '🎎': [
        '人形',
        ':dolls:',
        'Hinamatsuri',
        'インペリアルドール',
        '日本の人形'
    ],
    '🎏': [
        '鯉ストリーマー',
        ':carp_streamer:',
        '魚の旗',
        'Koinobori',
        'ウィンドソックス'
    ],
    '🎐': [
        '風の<unk>',
        ':wind_chime:',
        'Furin',
        'クラゲ語',
        '風のベル'
    ],
    '🎀': [
        'リボン弓',
        ':ribbon_bow:',
        'ピンクの弓',
        '弓',
        ':pink:'
    ],
    '🎁': [
        '包まれたギフト',
        ':wrapped_gift:',
        '誕生日プレゼント',
        'クリスマスプレゼント',
        'ギフト',
        'ギフトボックス',
        'プレゼント',
        'ラップされたプレゼント'
    ],
    '🎫': [
        'チケット',
        ':ticket:',
        'チケットのスタブ',
        'ワールドツアーチケット'
    ],
    '🃏': [
        'ジョーカー',
        ':joker:',
        'ジョーカーカード',
        'プレイ中のカードブラックジョーカー'
    ],
    '💡': [
        '電球（電球）',
        ':light_bulb:',
        'アイデア',
        '電球（電球）'
    ],
    '🔦': [
        'フラッシュライト',
        ':flashlight:',
        'トーチ',
        '電動トーチ'
    ],
    '🏮': [
        '赤い紙のランタン',
        ':izakaya_lantern:',
        ':lantern:',
        ':red_paper_lantern:',
        'アジアのランタン',
        '日本のランタン',
        '赤のランタン',
        '居酒屋燈籠',
        ':red:'
    ],
    '📦': [
        'パッケージ',
        ':package:',
        'Box',
        'Parcel',
        ':brown:'
    ],
    '📇': [
        'インデックス カード',
        ':card_index:',
        'Rolodex',
        'システムカード',
        'カードインデックス'
    ],
    '🕳️': [
        '穴',
        ':hole:',
        ':black:'
    ],
    '👁️‍🗨️': [
        '私は証人です',
        ':eye_in_speech_bubble:',
        ':eye_speech_bubble:',
        ':eye-in-speech-bubble:',
        'アイインスピーチバブル'
    ],
    '⚜️': [
        'Fleur-de-lis',
        ':fleur_de_lis:',
        'Patrulha',
        'New Orleans Saints'
    ],
    '⚗️': [
        'Alembic',
        ':alembic:'
    ],
    '🕯️': [
        'キャンドルformat@@0',
        ':candle:',
        ':white:'
    ],
    '🖼️': [
        '枠付きの画像',
        ':framed_picture:',
        '絵画',
        '画像フレーム',
        '画像付きフレーム'
    ],
    '🛍️': [
        'ショッピングバッグ',
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
        '入場券',
        ':admission_tickets:'
    ],
    '🛎️': [
        'Bellhop Bell',
        ':bellhop_bell:',
        ':yellow:',
        ':gold:'
    ],
    '🧾': [
        '領収書（受領）',
        ':receipt:',
        ':white:'
    ],
    '🧮': [
        'Abacus',
        ':abacus:'
    ],
    '🧫': [
        'ペトリ料理',
        ':petri_dish:'
    ],
    '🧹': [
        'ほうき',
        ':broom:',
        'ブラシ',
        'スイープ',
        ':yellow:'
    ],
    '🎰': [
        'スロットマシン',
        ':slot_machine:',
        'カジノ',
        'フルーツマシン',
        'Gambling',
        'ポーカーマシン'
    ],
    '🦽': [
        '車いすマニュアル（手動）',
        ':manual_wheelchair:',
        ':wheelchair:'
    ],
    '🦼': [
        '車椅子を電動化する',
        ':motorized_wheelchair:'
    ],
    '🪔': [
        'Diya Lamp',
        ':diya_lamp:'
    ],
    '🦯': [
        'White Cane',
        ':whie_cane:'
    ],
    '🩸': [
        '血のドロップ',
        ':drop_of_blood:',
        ':red:'
    ],
    '🩹': [
        '粘着性の包帯format@@0',
        ':adhesive_bandage:'
    ],
    '🩺': [
        '聴診器',
        ':stethoscope:'
    ],
    '🪶': [
        '羽',
        ':feather:'
    ],
    '🪤': [
        'マウストラップ(マウス)',
        ':mouse_trap:'
    ],
    '🫖': [
        'Teapot',
        ':teapot:'
    ],
    '🪨': [
        '岩',
        ':rock:',
        ':gray:',
        ':grey:'
    ],
    '🪵': [
        '木材',
        ':wood:',
        ':brown:'
    ],
    '🪄': [
        '魔法の杖format@@0',
        ':magin_wand:'
    ],
    '🔮': [
        'クリスタルボール',
        ':crystal_ball:',
        'Clairvoyant',
        'Fortune Teller',
        '<unk>',
        '紫色のクリスタル',
        ':purple:'
    ],
    '🪅': [
        'Pinningerata',
        ':pinata:',
        ':piñata:'
    ],
    '🪆': [
        'ネスティングドール',
        ':nesting_dolls:',
        'マトリョーシカ（マトリョーシカ）'
    ],
    '🪡': [
        '裁縫針（縫製針）',
        ':swing_needle:'
    ],
    '🪢': [
        '結び目',
        ':knot:',
        ':red:',
        ':blue:'
    ],
    '🪙': [
        'コイン',
        ':coin:'
    ],
    '🪃': [
        'Boomerang',
        ':boomerang:',
        ':brown:'
    ],
    '🪥': [
        '歯ブラシ',
        ':toothbrush:'
    ],
    '🪦': [
        'ヘッドストーン',
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
        'ホイール',
        ':wheel:',
        '改造車両',
        '車',
        ':black:'
    ],
    '🛟': [
        'リングブイ（リングブイ）',
        ':ring_buoy:',
        '生命を守る者',
        'ライフリング',
        'ボート',
        '安全',
        '水',
        'ライフセービング中',
        ':red:',
        ':white:'
    ],
    '🪬': [
        'Hamsa',
        ':hamsa:',
        'Islam',
        '<unk>',
        'Buddhism',
        'Christian',
        '宗教',
        '幸運な',
        '保護',
        'ガイド',
        'フェミニンな力',
        '信仰',
        ':blue:'
    ],
    '🪩': [
        'ミラーボール',
        ':mirror_ball:',
        'ディスコボール'
    ],
    '🪫': [
        '電池残量が少ないです。',
        ':low_battery:',
        ':red:',
        'エネルギー',
        '赤'
    ],
    '🩻': [
        'X-Ray',
        ':x_ray:',
        ':x-ray:',
        ':blue:'
    ],
    '🫧': [
        'バブル',
        ':bubbles:',
        'Soap Suds',
        'Carbonation',
        '効果的なパーソナリティ',
        ':transparent:'
    ],
    '🪪': [
        '身分証明カード',
        ':identification_card:',
        'Identity',
        'パスポート',
        'ID'
    ],
    '🧿': [
        'ナザール・ボンジュウ',
        ':nazar_amulet:',
        '邪悪な目',
        ':blue:'
    ],
    '🧸': [
        'テディベア',
        ':teddy_bear:',
        'おもちゃ',
        ':brown:'
    ]
};