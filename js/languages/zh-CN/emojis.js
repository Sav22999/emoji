// descriptions took from Emojipedia.org
lang = 'zh-CN';
//use i18n language code of the browser, more details: https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/i18n/LanguageCode
titles_language[lang] = {
    '🔍': '结果',
    '🕒': '最常使用的 emoji',
    '😀': '表情符号',
    '🙋': '人物',
    '🦊': '动物',
    '🅰️': '符号',
    '🍎': '食物和饮料',
    '🏳️‍🌈': '标记',
    '🏊': '运动',
    '✈️': '旅行和地点',
    '🖱️': '技术和办公',
    '👗': '衣服和配饰',
    '🖐️': '手和身体部位',
    '🛎️': '其他'
};
emojis_language[lang] = [];
/*search*/
emojis_language[lang][0] = {};
/*smileys*/
emojis_language[lang][2] = {
    '😀': [
        '发明面',
        ':grinning:',
        ':grinning_face:',
        '::):',
        '快乐的面',
        '微笑的面'
    ],
    '😃': [
        '与大眼结晶面',
        ':smiley:',
        ':grinning_face_with_big_eyes:',
        '::D:',
        '快乐的面',
        '微笑的面',
        '使用打开鼠标的微笑面'
    ],
    '😄': [
        '与微笑眼睛结晶面',
        ':smile:',
        ':grinning_face_with_smiling_eyes:',
        '快乐的面',
        '微笑的面',
        '与正方形眼光结晶面',
        '露天鼠标和笑脸眼的微笑面'
    ],
    '😁': [
        '用微笑眼睛拍摄面具',
        ':grin:',
        ':beaming_face_with_smiling_eyes:',
        '与微笑眼睛结晶面'
    ],
    '😆': [
        '研磨面具',
        ':grinning_squinting_face:',
        ':xD:',
        ':><:',
        '大草地',
        '关闭眼睛微米',
        '正在进行中',
        '用很强的闭合眼光结晶面',
        '带有打开鼠标和极光闭合眼睛的笑脸。'
    ],
    '😅': [
        '与甜蜜的磨擦面具',
        ':happy_sweat:',
        '练习',
        '愉快的甜蜜。',
        '与正方形眼睛和甜蜜的滴味面',
        '使用打开鼠标和冷血的微笑面'
    ],
    '🤣': [
        'ROFL',
        ':rofl:',
        '在地板上滚动中'
    ],
    '😂': [
        '装饰耳朵的面',
        ':lol:',
        '正在进行中',
        '正在抓住的挑战',
        '正在抓住的小工具',
        'LOL'
    ],
    '🙂': [
        '轻微笑脸部',
        ':smile:',
        '::):',
        '稍微愉快的',
        '这是很好的'
    ],
    '🙃': [
        '上下面的面',
        ':upside-down_face:',
        ':upside_down_face:',
        'Sarcasm',
        'Silly',
        '上下面的面'
    ],
    '😉': [
        'Winking Face',
        ':winking:',
        ':;):',
        'Wink',
        '滑动面',
        'Winky 面'
    ],
    '😊': [
        '微笑眼睛的微笑面',
        ':smiling_face:',
        ':^^:',
        '快乐的面',
        '微笑的',
        '微笑的面'
    ],
    '😇': [
        '与Halo 的微笑面',
        ':smiling_angel:',
        '天线',
        '哈洛文'
    ],
    '🥰': [
        '有心的微笑面',
        ':smiling_hearts:',
        '在爱的脸上',
        '微笑眼睛和三个心胸的笑脸。'
    ],
    '😍': [
        '心眼的微笑面',
        '爱好',
        ':smiling_heart-eyes:',
        ':smiling_heart_eyes:',
        ':*.*:',
        '心眼镜',
        '心面',
        '心形眼睛的微笑面'
    ],
    '🤩': [
        '星结构体',
        ':star_eyes:',
        '兴奋的',
        '星眼镜',
        '干燥过来的',
        'Wow 面',
        'Starry Eyes 的面',
        '以星眼光结晶面'
    ],
    '😘': [
        '面部闪光一只基斯',
        '爱好',
        ':kissing_face:',
        '::*:',
        '::-*:',
        '蓝宝石座',
        'Blowing Kiss',
        '基斯化',
        '面部抛出一把基斯'
    ],
    '😗': [
        '连线面',
        '基斯',
        ':kissing_face:',
        '::*:',
        '::-*:',
        '杜克面具',
        'Kissy Face',
        '吹风'
    ],
    '☺️': [
        '微笑面具',
        ':smiling_face:',
        '快乐的面',
        '微笑的面',
        '微笑的',
        '白色笑脸部'
    ],
    '😚': [
        '用封闭眼睛穿面具',
        ':kissing_face:',
        '吉斯面具',
        'Kissy Face'
    ],
    '😙': [
        '与微笑眼睛连线',
        ':kissing_face:',
        '吉斯面具',
        'Kissy',
        '口哨手势',
        '吹风'
    ],
    '😋': [
        '面部防护食物（面部防护食品）',
        ':savoring_face:',
        '多夫文',
        '饥饿的',
        '微笑面色彩许可证Lips',
        '面部可节省的食物（美食）',
        'Yum Y'
    ],
    '😛': [
        'Tongue',
        ':tongue_face:',
        '::P:',
        '喜欢的',
        'Tongue 面具',
        'Tongue-Out',
        '被卡车出去的面具'
    ],
    '😜': [
        '使用Tongue 的Winking Face',
        ':winking:',
        ':;P:',
        '疯狂的',
        '疯狂的面',
        '带着被卡出去的冬季的Winking Face',
        '被卡车出门和温暖眼的面具'
    ],
    '🤪': [
        'Zany Face',
        ':crazy_face:',
        '疯狂眼镜',
        '兴奋的',
        '野生动物协会',
        'Goofy Face',
        '一只大眼和一只小眼的磨擦面'
    ],
    '😝': [
        '使用Tongue拍摄面具',
        ':tongue_face:',
        ':xP:',
        'Tongue Out',
        '被卡住出Tongue 和 Tightly-closed 眼睛的面',
        '被卡车出门和轻松封闭眼睛的面'
    ],
    '🤑': [
        '洗钱面具',
        ':money-mouth_face:',
        ':money_mouth_face:',
        '::$:',
        '美元签名眼',
        '金钱面',
        '丰富的'
    ],
    '🤗': [
        '悬浮面',
        ':hugging_face:',
        '色度',
        '正在休眠',
        'Hugs',
        '带有悬停之手的快乐面具'
    ],
    '🤭': [
        '哎呀。',
        ':oops:',
        '鼠标悬停的面',
        '微笑眼睛和手持盖子面具'
    ],
    '🤫': [
        'Shh',
        ':shushing_face:',
        '舒什文',
        '滑动面具',
        '高斯省',
        '静音',
        '静音',
        '静音',
        '指纹覆盖闭合列的面'
    ],
    '🤔': [
        '什么',
        ':thinking_face:',
        '?',
        '赫姆',
        '思考面',
        'Chin Thumb',
        '小贴士',
        '投掷阴影'
    ],
    '🤐': [
        '邮编',
        '静音',
        '静音',
        ':zip_face:',
        'Zipper-Mouth 面',
        '列已密送',
        '密封链接',
        '邮编',
        'Zipper 鼠标的面'
    ],
    '🤨': [
        '带有提升眼睛的面',
        ':face_with_raised_eyebrow:',
        '科尔伯特',
        '岩石',
        '带有提升眼睛的面',
        '用一只Eyebrow 提起的面'
    ],
    '😐': [
        '中性面',
        ':neutral_face:',
        ':|',
        '带直线鼠标的面',
        '直面'
    ],
    '😑': [
        '无表达式面',
        ':expressionless_face:',
        '-_-',
        '带直线鼠标的面',
        '直线'
    ],
    '😶': [
        '没有鼠标的面',
        ':face_without_mouth:',
        '空白面',
        '无鼠标的',
        '静音',
        '静音'
    ],
    '😏': [
        '精炼面具',
        ':smirking_face:',
        '平面化',
        '性面',
        '烟雾面',
        '有建议的表情'
    ],
    '😒': [
        '未损坏的面',
        ':unamused_face:',
        '不满意的',
        '小米',
        '侧边-眼色',
        '未刻录'
    ],
    '🙄': [
        '滚动眼睛的面',
        ':face_with_rolling_eye:',
        ':eye_roll:',
        '眼镜头'
    ],
    '😬': [
        '巨型面具',
        ':awkward:',
        '奥克沃德',
        'Eek',
        '步行赤道仪中',
        '内尔沃斯',
        'Snapchat相互#1 最好的朋友'
    ],
    '🤥': [
        '正在照亮面',
        ':lying_face:',
        '利奥尔',
        '长鼻子',
        'Pinocchio'
    ],
    '😌': [
        '放松的面',
        ':relieved_face:',
        '内容',
        '已租赁的'
    ],
    '😔': [
        '很抱歉！',
        ':sad_face:',
        '阴极面',
        '阴极化',
        '悲伤的',
        '悲伤者',
        '悲伤的',
        '悲伤的阴影面'
    ],
    '😪': [
        '睡眠面具',
        ':sleepy_face:',
        '侧边栏',
        '烧烤箱'
    ],
    '🤤': [
        '萨里瓦',
        ':saliva_face:',
        'Drooling Face',
        'Drool'
    ],
    '😴': [
        '睡眠',
        ':sleeping_face:',
        ':zzz:',
        'Zzz',
        '睡眠面',
        '立体中',
        'Zzzz 面'
    ],
    '🥱': [
        '黄色面具',
        '已装饰',
        ':yawning_face:'
    ],
    '😷': [
        '带医疗面具',
        '生病的',
        '欧文',
        ':face_with_medical_mask:',
        '科罗纳维鲁斯',
        'COVID-19',
        '遮罩面',
        '外科蒙版',
        'ill'
    ],
    '🤒': [
        '温度计的面',
        ':face_with_thermometer:',
        ':sick:',
        ':ill:',
        'Ill',
        '患病情况'
    ],
    '🤕': [
        '头带的面',
        '医院。',
        '生病的',
        ':face_with_head-bandage:',
        ':face_with_head_bandage:',
        '带状头',
        '淋巴细体',
        '伤害',
        'ill'
    ],
    '🤢': [
        '恶心的面',
        '生病的',
        ':nauseated_face:',
        '异常的',
        '绿色面',
        '雾',
        ':green:',
        'ill'
    ],
    '🤮': [
        '面部休眠',
        '生病的',
        ':face_vomiting:',
        '速率',
        'Bleah',
        'Bleurgh',
        '尤克',
        '尤克文',
        '欧文',
        '速率',
        '向上扔出',
        '雾',
        '开启鼠标挥动的面',
        'ill'
    ],
    '🤧': [
        '闪电面具',
        '生病的',
        ':sneezing_face:',
        'Gesundheit',
        'ill'
    ],
    '🥵': [
        '热门面',
        ':hot_face:',
        '过热的面',
        ':red:'
    ],
    '🥶': [
        '寒冷面',
        ':cold_face:',
        '很酷的',
        '箱子',
        '冻结面具',
        ':blue:'
    ],
    '🥴': [
        '木制面具',
        ':woozy_face:',
        '冲锋面',
        '面部与未知眼睛和Wavy Mouth'
    ],
    '😵': [
        'Dizzy Face',
        ':dizzy_face:',
        '十字眼睛面',
        '螺旋眼面'
    ],
    '🤯': [
        '爆炸头',
        '高亮',
        ':exploding_head:',
        'Mind Blown',
        '用爆炸头惊人的脸部'
    ],
    '🤠': [
        '奶牛帽面子',
        ':cowboy_hat_face:',
        '小牛座',
        '小牛面具',
        '弓箭头帽子'
    ],
    '🥳': [
        '派对面',
        ':partying_face:',
        '派对面',
        '对方角和派对帽子'
    ],
    '😎': [
        '使用日光镜的微笑面',
        ':smiling_face_with_sunglasses:',
        '很酷的',
        '相互最佳朋友 (Snapchat)',
        '阳光镜头'
    ],
    '🤓': [
        '无脸面',
        ':nerd_face:',
        'Nerdy'
    ],
    '🧐': [
        '单人面',
        ':face_with_monocle:'
    ],
    '😕': [
        '令人困惑的面',
        ':confused_face:',
        '::/:',
        '::S:',
        '未插图',
        '拼图'
    ],
    '😟': [
        '令人担忧的面',
        ':worried_face:',
        '::(:',
        '悲伤的',
        '悲伤者'
    ],
    '🙁': [
        '点燃面具',
        ':slightly_frowning_face:',
        '::(:',
        '轻度悲伤的'
    ],
    '☹️': [
        '拳头面',
        ':frowning_face:',
        '::(:',
        'Megafrow',
        '白化拳头面'
    ],
    '😮': [
        'Wow',
        ':wow:',
        '::O:',
        '哦，我！',
        '打开鼠标的面',
        '打开Mouth',
        '带着打开鼠标的惊讶的面'
    ],
    '😯': [
        '悬停的面',
        ':husked_face:',
        '::O:',
        '惊喜的',
        '惊喜的面'
    ],
    '😲': [
        '惊人的面',
        ':shocked_face:',
        '::O:',
        'Wow',
        '石化面具',
        '冲锋面',
        '汽油面具'
    ],
    '😳': [
        '刷新的面',
        ':flushed_face:',
        '::$:',
        'Blushing face',
        '已放入回收站',
        '可耻的',
        '带宽开眼睛的面'
    ],
    '🥺': [
        '弯曲面',
        ':pleading_face:',
        '::(:',
        '正在乞讨中',
        '光滑眼镜',
        'Simp',
        '带领眼睛的面'
    ],
    '😦': [
        '使用打开鼠标悬浮面',
        ':frowning_face_with_open_mouth:',
        ':D::',
        '青色'
    ],
    '😧': [
        'Anguished Face',
        ':anguished_face:',
        ':anguished:',
        ':D::',
        'Pained Face'
    ],
    '😨': [
        '受爱好',
        ':scared:',
        ':D::',
        '恐惧的脸部',
        '惊喜的'
    ],
    '😰': [
        '有汗水的迷幻面',
        ':anxious_face_with_sweat:',
        '蓝色面',
        '令人关注的面',
        '神经面',
        '开启鼠标和冷血液的面'
    ],
    '😥': [
        '伤心但宽松的面具',
        ':sad_but_relieved_face:',
        '::(:',
        '埃伊布鲁汗尤文',
        '已解冻但已放松的面'
    ],
    '😢': [
        '呼叫面',
        ':crying_face:',
        '::(:',
        '呼叫中',
        '泰尔'
    ],
    '😭': [
        '响亮的面具',
        ':loudly_crying_face:',
        'Bawling',
        '呼叫中',
        '悲伤的耳机',
        'Sobbing'
    ],
    '😱': [
        '恐惧中的面部屏幕',
        ':face_screaming_in_fear:',
        '单独首页',
        '屏幕显示',
        '屏幕外观'
    ],
    '😖': [
        '有信仰的面',
        ':confounded_face:',
        'QuifrowerMouth',
        '剪切的面'
    ],
    '😣': [
        '持久的面具',
        ':persevering_face:',
        '无助面具',
        '剪切眼镜'
    ],
    '😞': [
        '令人失望的面',
        ':disappointed_face:',
        '::(:',
        '悲伤的',
        '悲伤者'
    ],
    '😓': [
        '用甜蜜来下面的面具',
        ':downcast_face_with_sweat:',
        '艰苦工作',
        '悲伤的汗水面面',
        '寒冷淡的面'
    ],
    '😩': [
        '天气面',
        ':weary_face:',
        '令人困惑的面',
        '正在发送邮件'
    ],
    '😫': [
        '恐龙面体',
        ':tired_face:',
        '精致的',
        '上传的',
        '令人困惑的面'
    ],
    '😤': [
        '来自鼻子的蒸汽面面',
        ':face_with_steam_from_nose:',
        '求助于冤情：',
        '沮丧的',
        '疯狂的面',
        'Steaming',
        '用Anger面部居中'
    ],
    '😡': [
        '正在推送面',
        'fuck',
        ':pouting_face:',
        '愤怒的面',
        '毛皮面具',
        '疯狂的面',
        '红面',
        ':red:'
    ],
    '😠': [
        '愤怒的面',
        ':angry_face:',
        '愤怒的',
        '毛皮面具'
    ],
    '🤬': [
        '滑动中',
        'fuck',
        ':swearing:',
        '@#$%&!',
        '鼠标上带符号的面',
        '曲目',
        '正在计算',
        'Grawlix',
        '鼠标上面有符号的面',
        '带符号覆盖鼠标的严重面',
        ':red:'
    ],
    '🥲': [
        '带有泪水的微笑面',
        ':smiling_face_with_tear:'
    ],
    '😮‍💨': [
        '人脸Exhaling',
        ':face_exhaling:',
        '西格文'
    ],
    '😵‍💫': [
        '螺旋眼面',
        ':face_with_spiral_eyes:',
        'Dizzy Face'
    ],
    '😶‍🌫️': [
        '云端的面',
        '烟雾',
        ':face_in_clouds:',
        'Brain Fog',
        '难忘的',
        '薄雾'
    ],
    '🥸': [
        '伪装的面',
        ':disguised_face:'
    ],
    '🫠': [
        '融化的脸',
        ':melting_face:'
    ],
    '🫢': [
        '睁眼捂嘴的脸',
        ':face_with_open_eyes_and_hand_over_mouth:'
    ],
    '🫣': [
        '偷看一眼的脸',
        ':face_with_peeking_eye:'
    ],
    '🫡': [
        '致敬脸',
        ':saluting_face:',
        '军礼',
        '陆军',
        'RAF',
        '海军'
    ],
    '🫥': [
        '虚线脸',
        ':dotted_line_face:',
        ':transparent:'
    ],
    '🫤': [
        '斜嘴脸',
        ':face_with_diagonal_mouth:'
    ],
    '🥹': [
        '面部背部时钟',
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
        '马上的微笑面具',
        ':smiling_face_with_horns:',
        '恶魔者',
        '恶魔马',
        '快乐的魔法魔法魔法',
        '紫色恶魔者',
        '红色的魔法魔法',
        ':purple:'
    ],
    '👿': [
        '使用Horns感到愤怒的面',
        ':angry_face_with_horns:',
        '恶魔者',
        '恶魔马',
        '紫色恶魔者',
        '紫色Goblin',
        '悲惨的致命者',
        'Imp',
        ':purple:'
    ],
    '🤡': [
        '小花面',
        ':clown_face:',
        '爬行者',
        '恶魔爪子',
        'Scary Clown'
    ],
    '👽': [
        '外观',
        ':alien:',
        'ET'
    ],
    '👾': [
        '外星怪物',
        ':alien_monster:',
        '太空入侵者',
        '视频游戏怪物'
    ],
    '🤖': [
        'Robot',
        ':robot:',
        '机器人面'
    ],
    '👹': [
        'Ogre',
        ':ogre:',
        '遮罩面',
        'Oni',
        '红色怪物',
        '日语奥格雷文',
        ':red:'
    ],
    '👻': [
        '幽灵：',
        ':ghost:',
        'Halloween'
    ],
    '🗣️': [
        '扬声头',
        ':speaking_head:',
        '曼斯平原中',
        '舒特省',
        '缓存中',
        '在Silhouette演讲头',
        ':blue:'
    ],
    '👤': [
        '在Silhouette',
        ':bust_in_silhouette:',
        '阴影',
        'Silhouette',
        '用户',
        '人的Silhouette',
        ':blue:'
    ],
    '🫂': [
        '人民正在休眠',
        ':people_hugging:',
        ':blue:'
    ],
    '👥': [
        'Silhouette 中的忙碌案',
        ':busts_in_silhouette:',
        '阴影',
        'Silhouettes',
        '用户',
        '两个人的Silhouette',
        ':blue:'
    ]
};
/*people*/
emojis_language[lang][3] = {
    '👶{{skin_tone}}': [
        '婴儿数',
        ':baby:',
        '儿童',
        '待办事项'
    ],
    '🧒{{skin_tone}}': [
        '儿童',
        ':child:',
        '性别中立儿童'
    ],
    '👧{{skin_tone}}': [
        '女童',
        ':girl:',
        ':woman:'
    ],
    '🧑{{skin_tone}}': [
        '人员',
        ':person:',
        '性别中立的成年人',
        '成年人',
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
        '人：红色头发人',
        ':person_red_hair:',
        'Ginger 人员',
        '人员重头部',
        '红色头发的人',
        ':person:'
    ],
    '🧑{{skin_tone}}‍🦱': [
        '人: 草头发人',
        ':person_curly_hair:',
        '带有光头发的人',
        ':person:'
    ],
    '🧑{{skin_tone}}‍🦳': [
        '个人：白头发子',
        ':person_white_hair:',
        '带灰色头发的人',
        ':person:'
    ],
    '🧑{{skin_tone}}‍🦲': [
        '人: 气球',
        ':person_bald:',
        '没有头发的人',
        ':person:'
    ],
    '👱{{skin_tone}}': [
        '人：Blond Hair',
        ':person_blond_hair:',
        'Blonde Hair',
        ':person:'
    ],
    '👨{{skin_tone}}': [
        'Man',
        ':man:',
        '男性：',
        'Moustache Man',
        ':man:'
    ],
    '🧔{{skin_tone}}‍♂️': [
        '男人: 擦除',
        ':man_beard:',
        '碎心机',
        '束缚的人',
        '戴着手的人',
        ':man:'
    ],
    '👨{{skin_tone}}‍🦰': [
        '人类：红头发子',
        ':man_red_hair:',
        'Ginger Man',
        'Man Redhead',
        '带红头发的人',
        ':man:'
    ],
    '👨{{skin_tone}}‍🦱': [
        '人: 草头发人',
        ':man_curly_hair:',
        '带有草原头发的人',
        ':man:'
    ],
    '👨{{skin_tone}}‍🦳': [
        '人类：白头发子',
        ':man_white_hair:',
        '带灰色头发的人',
        ':man:'
    ],
    '👨{{skin_tone}}‍🦲': [
        '男人: 气球',
        ':man_bald:',
        '没有头发的人',
        ':man:'
    ],
    '👱{{skin_tone}}‍♂️': [
        '人类：Blond Hair',
        ':man_blond_hair:',
        '布伦德海尔人',
        ':man:'
    ],
    '👩{{skin_tone}}': [
        '妇女',
        ':woman:',
        '女',
        '女士们：',
        '黄色妇女',
        ':woman:'
    ],
    '🧔{{skin_tone}}‍♀️': [
        '妇女：戴尔德',
        ':woman_beard:',
        '碎心机',
        '戴面具的妇女',
        ':woman:'
    ],
    '👩{{skin_tone}}‍🦰': [
        '妇女：红色头发',
        ':woman_red_hair:',
        'Ginger 妇女',
        'Woman Redhead',
        '带红海的妇女',
        ':woman:'
    ],
    '👩{{skin_tone}}‍🦱': [
        '妇女：曲线头发',
        ':woman_curly_hair:',
        '带有曲线头发的妇女',
        ':woman:'
    ],
    '👩{{skin_tone}}‍🦳': [
        '妇女：白头发子',
        ':woman_white_hair:',
        '带灰色头发的妇女',
        ':woman:'
    ],
    '👩{{skin_tone}}‍🦲': [
        '妇女： 气球',
        ':woman_bald:',
        '没有头发的妇女',
        ':woman:'
    ],
    '👱{{skin_tone}}‍♀️': [
        '妇女： Blond Hair',
        ':woman_blond_hair:',
        'Blonde Hair 的妇女',
        ':woman:'
    ],
    '👴{{skin_tone}}': [
        '更老的人',
        ':older_man:',
        ':older:',
        '老年人',
        'Grandpa',
        '老人',
        ':man:'
    ],
    '👵{{skin_tone}}': [
        '老年妇女',
        ':older_woman:',
        ':older:',
        '老年妇女',
        '格朗德马',
        '纳纳',
        '老女士',
        '老妇女',
        ':woman:'
    ],
    '🧓{{skin_tone}}': [
        '老人',
        ':older_person:',
        ':older:',
        '性别中立的成年人',
        ':person:'
    ],
    '👼{{skin_tone}}': [
        '婴儿天线',
        ':baby_angel:',
        '天线',
        'Cherub',
        '杯子',
        '普托文'
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
        '人圣诞节',
        ':person:'
    ],
    '🤴{{skin_tone}}': [
        '王子',
        ':price:',
        ':man:'
    ],
    '👸{{skin_tone}}': [
        '公主',
        ':pricess:',
        'Blonde Girl',
        '女王之手',
        '女孩与Tiara',
        ':woman:'
    ],
    '🫅{{skin_tone}}': [
        '与王室联系的人员',
        ':person_with_crown:',
        ':person:'
    ],
    '👳{{skin_tone}}‍♂️': [
        '人类穿甲弹头',
        ':man_wearing_turban:',
        ':wearing_turban:',
        '阿拉伯语',
        'Muslim',
        '锡克',
        'Turban',
        ':man:'
    ],
    '👳{{skin_tone}}‍♀️': [
        '妇女问题听力炮塔',
        ':woman_wearing_turban:',
        ':wearing_turban:',
        '阿拉伯语',
        'Muslim',
        '锡克',
        'Turban',
        ':woman:'
    ],
    '👳{{skin_tone}}': [
        '人体穿甲弹夹',
        ':person_wearing_turban:',
        ':wearing_turban:',
        '阿拉伯语',
        'Muslim',
        '锡克',
        'Turban',
        ':person:'
    ],
    '👲{{skin_tone}}': [
        'Skullcap的人',
        ':person_with_skullcap:',
        '亚洲人',
        '华人帽子',
        '与Gua Pi Mao 有联系的人',
        ':person:'
    ],
    '🧕{{skin_tone}}': [
        '带头巾的妇女',
        ':woman_with_headscarf:',
        'Hijab',
        '头巾人',
        ':woman:'
    ],
    '🤵{{skin_tone}}‍♀️': [
        'Tuxedo中的人',
        ':man_in_tuxedo:',
        ':tuxedo:',
        'Groom',
        '在套装中',
        '婚礼中',
        ':man:'
    ],
    '🤵{{skin_tone}}‍♂️': [
        'Tuxedo中的妇女',
        ':woman_in_tuxedo:',
        ':tuxedo:',
        'Groom',
        '妇女在套装',
        '婚礼中',
        ':woman:'
    ],
    '🤵{{skin_tone}}': [
        'Tuxedo的人',
        ':person_in_tuxedo:',
        ':tuxedo:',
        'Groom',
        '待办人员',
        '婚礼中',
        ':person:'
    ],
    '👰{{skin_tone}}‍♂️': [
        '有韦尔的人',
        ':man_with_veil:',
        ':veil:',
        '婚礼中',
        '布里格罗姆',
        '婚姻状况',
        ':man:'
    ],
    '👰{{skin_tone}}‍♀️': [
        'Woman with Veil',
        ':woman_with_veil:',
        ':veil:',
        '婚礼中',
        '新增功能',
        '带着Veil彩礼。',
        '婚姻状况',
        ':woman:'
    ],
    '👰{{skin_tone}}': [
        '有韦尔的人',
        ':person_with_veil:',
        ':veil:',
        '婚礼中',
        '婚姻状况',
        ':person:'
    ],
    '👨{{skin_tone}}‍🍼': [
        '男人喂养婴儿数',
        ':man_feeding_baby:',
        ':feeding_baby:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🍼': [
        '妇女喂养婴儿问题',
        ':woman_feeding_baby:',
        ':feeding_baby:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🍼': [
        '人员喂养婴儿问题',
        ':person_feeding_baby:',
        ':feeding_baby:',
        ':person:'
    ],
    '🥷': [
        '宁加',
        ':ninja:'
    ],
    '🫃{{skin_tone}}': [
        '怀孕人',
        ':pregnant_man:',
        ':pregnant:',
        '怀孕情况',
        ':man:'
    ],
    '🤰{{skin_tone}}': [
        '怀孕妇女',
        ':pregnant_woman:',
        ':pregnant:',
        '怀孕情况',
        '怀孕女士',
        ':woman:'
    ],
    '🫄{{skin_tone}}': [
        '怀孕人员',
        ':pregnant_person:',
        ':pregnant:',
        '怀孕情况',
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
        '妇女超级英雄',
        ':woman_superhero:',
        ':superhero:',
        ':woman:'
    ],
    '🦸{{skin_tone}}': [
        '人员超级英雄',
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
        '妇女超级维利',
        ':woman_supervillain:',
        ':supervillain:',
        ':woman:'
    ],
    '🦹{{skin_tone}}': [
        '超维兰人',
        ':person_supervillain:',
        ':supervillain:',
        ':person:'
    ],
    '🧙{{skin_tone}}‍♂️': [
        'Man Mage',
        ':man_mage:',
        ':mage:',
        'Sorcerer',
        '向导',
        ':man:'
    ],
    '🧙{{skin_tone}}‍♀️': [
        '妇女魔法',
        ':woman_mage:',
        ':mage:',
        '巫师',
        '联谊会',
        '向导',
        ':woman:'
    ],
    '🧙{{skin_tone}}': [
        '人魔法',
        ':person_mage:',
        ':mage:',
        '向导',
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
        '妇女节奏：',
        ':woman_fairy:',
        ':fairy:',
        ':woman:'
    ],
    '🧚{{skin_tone}}': [
        '人员配对',
        ':person_fairy:',
        ':fairy:',
        ':person:'
    ],
    '🧛{{skin_tone}}‍♂️': [
        '男子吸血鬼的',
        ':man_vampire:',
        ':vampire:',
        '德拉库拉',
        ':man:'
    ],
    '🧛{{skin_tone}}‍♀️': [
        '妇女吸血鬼。',
        ':woman_vampire:',
        ':vampire:',
        ':woman:'
    ],
    '🧛{{skin_tone}}': [
        '吸血鬼人',
        ':person_vampire:',
        ':vampire:',
        ':person:'
    ],
    '🧜{{skin_tone}}‍♂️': [
        '梅尔曼',
        ':merman:',
        'Merboy',
        ':man:'
    ],
    '🧜{{skin_tone}}‍♀️': [
        '美人鱼座',
        ':mermaid:',
        '梅尔克',
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
        '妇女精灵省',
        ':woman_elf:',
        ':elf:',
        ':woman:'
    ],
    '🧝{{skin_tone}}': [
        '人精灵座',
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
        '人类基因组',
        ':person_genie:',
        ':genie:',
        ':person:'
    ],
    '🕵️{{skin_tone}}‍♂️': [
        '人检测',
        ':man_detective:',
        ':detective:',
        '私人眼镜',
        'Sleuth',
        '间谍活动',
        'Man Sleuth',
        '休闲或间谍活动',
        '007',
        '检查员',
        ':man:'
    ],
    '🕵️{{skin_tone}}‍♀️': [
        '妇女检测',
        ':woman_detective:',
        ':detective:',
        '私人眼镜',
        'Sleuth',
        '间谍活动',
        '妇女休眠',
        '休闲或间谍活动',
        '007',
        '检查员',
        ':woman:'
    ],
    '🕵{{skin_tone}}': [
        '人员检测',
        ':person_detective:',
        ':detective:',
        '私人眼镜',
        'Sleuth',
        '间谍活动',
        '人员休眠',
        '休闲或间谍活动',
        '007',
        '检查员',
        ':person:'
    ],
    '💂{{skin_tone}}‍♂️': [
        '男人: 卫士',
        ':man_guard:',
        ':guard:',
        '英军卫士',
        '英尺护卫器',
        ':man:'
    ],
    '💂{{skin_tone}}‍♀️': [
        '妇女：卫士',
        ':woman_guard:',
        ':guard:',
        '英军卫士',
        '英尺护卫器',
        ':woman:'
    ],
    '💂{{skin_tone}}': [
        '个人：卫士',
        ':person_guard:',
        ':guard:',
        '英军卫士',
        '英尺护卫器',
        ':person:'
    ],
    '👮{{skin_tone}}‍♂️': [
        '警务干事',
        ':man_police_officer:',
        ':police_officer:',
        '编译',
        '警察',
        '警察',
        ':man:'
    ],
    '👮{{skin_tone}}‍♀️': [
        '妇女警察',
        ':woman_police_officer:',
        ':police_officer:',
        '编译',
        '警察',
        '女警察',
        ':woman:'
    ],
    '👮{{skin_tone}}': [
        '警务干事',
        ':person_police_officer:',
        ':police_officer:',
        '编译',
        '警察',
        ':person:'
    ],
    '👨{{skin_tone}}‍🚒': [
        'Man 消防员',
        ':man_firefighter:',
        ':firefighter:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🚒': [
        '妇女消防员',
        ':woman_firefighter:',
        ':firefighter:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🚒': [
        '人员消防员',
        ':person_firefighter:',
        ':firefighter:',
        ':person:'
    ],
    '👨{{skin_tone}}‍✈️': [
        '人驾驶员',
        ':man_pilot:',
        ':pilot:',
        ':man:'
    ],
    '👩{{skin_tone}}‍✈️': [
        '妇女飞行员',
        ':woman_pilot:',
        ':pilot:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍✈️': [
        '人员飞行员',
        ':person_pilot:',
        ':pilot:',
        ':person:'
    ],
    '👨{{skin_tone}}‍💻': [
        '人技术师',
        ':man_technologist:',
        ':technologist:',
        '人技术师',
        ':man:'
    ],
    '👩{{skin_tone}}‍💻': [
        '妇女技术师',
        ':woman_technologist:',
        ':technologist:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍💻': [
        '人事技术师',
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
        '妇女歌手',
        ':woman_singer:',
        ':singer:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🎤': [
        '人歌手',
        ':person_singer:',
        ':singer:',
        ':person:'
    ],
    '👨{{skin_tone}}‍🎨': [
        '男艺人',
        ':man_artist:',
        ':artist:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🎨': [
        '女艺人',
        ':woman_artist:',
        ':artist:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🎨': [
        '人员艺人',
        ':person_artist:',
        ':artist:',
        ':person:'
    ],
    '👷{{skin_tone}}‍♂️': [
        '男建筑工',
        ':man_contruction_worker:',
        ':contruction_worker:',
        ':man:'
    ],
    '👷{{skin_tone}}‍♀️': [
        '妇女建筑工',
        ':woman_contruction_worker:',
        ':contruction_worker:',
        ':woman:'
    ],
    '👷{{skin_tone}}': [
        '建设工人',
        ':person_contruction_worker:',
        ':contruction_worker:',
        ':person:'
    ],
    '👨{{skin_tone}}‍🚀': [
        '人类宇航员',
        ':man_astronaut:',
        ':astronaut:',
        'Man Cosmonaut',
        ':man:'
    ],
    '👩{{skin_tone}}‍🚀': [
        '女宇航员',
        ':woman_astronaut:',
        ':astronaut:',
        '妇女宇航员',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🚀': [
        '人员宇航员',
        ':person_astronaut:',
        ':astronaut:',
        '宇航员',
        ':person:'
    ],
    '👨{{skin_tone}}‍🔬': [
        'Man Scientist',
        ':man_scientist:',
        ':scientist:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🔬': [
        '女性科学家：',
        ':woman_scientist:',
        ':scientist:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🔬': [
        '科学家人数',
        ':person_scientist:',
        ':scientist:',
        ':person:'
    ],
    '👨{{skin_tone}}‍💼': [
        'Man Office Workers',
        ':man_office_worker:',
        ':office_worker:',
        'CEO',
        '商人',
        ':man:'
    ],
    '👩{{skin_tone}}‍💼': [
        '妇女办公室工人',
        ':woman_office_worker:',
        ':office_worker:',
        '商界妇女',
        'CEO',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍💼': [
        '人事办公室工人',
        ':person_office_worker:',
        ':office_worker:',
        '业务',
        'CEO',
        ':person:'
    ],
    '👨{{skin_tone}}‍🏭': [
        '男工厂工人',
        ':man_factory_worker:',
        ':factory_worker:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🏭': [
        '妇女工厂工人',
        ':woman_factory_worker:',
        ':factory_worker:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🏭': [
        '人员工厂工人',
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
        '妇女机械师',
        ':woman_mechanic:',
        ':mechanic:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🔧': [
        '人机械师',
        ':person_mechanic:',
        ':mechanic:',
        ':person:'
    ],
    '👨{{skin_tone}}‍🍳': [
        'Man Cook',
        ':man_cook:',
        ':cook:',
        'Man Chef',
        '男性Chef',
        ':man:'
    ],
    '👩{{skin_tone}}‍🍳': [
        '妇女库克岛',
        ':woman_cook:',
        ':cook:',
        '妇女Chef',
        '女厨师',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🍳': [
        '人员 Cook',
        ':person_cook:',
        ':cook:',
        '人员厨师',
        ':person:'
    ],
    '👨{{skin_tone}}‍🌾': [
        '男农民：',
        ':man_farmer:',
        ':farmer:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🌾': [
        '妇女农民组织',
        ':woman_farmer:',
        ':farmer:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🌾': [
        '农夫人',
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
        '男学生',
        ':man_student:',
        ':student:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🎓': [
        '女学生',
        ':woman_student:',
        ':student:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🎓': [
        '人员学生',
        ':person_student:',
        ':student:',
        ':person:'
    ],
    '👨{{skin_tone}}‍⚕️': [
        '男保健工人',
        ':man_health_worker:',
        ':health_worker:',
        '男性博士',
        '男性Nurse',
        ':man:'
    ],
    '👩{{skin_tone}}‍⚕️': [
        '妇女保健工人',
        ':woman_health_worker:',
        ':health_worker:',
        '女博士',
        '女护士：',
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
        '男人收缩中',
        ':man_shrugging:',
        ':shrugging:',
        'idk 人',
        'dunno',
        ':man:'
    ],
    '🤷{{skin_tone}}‍♀️': [
        '妇女破裂中',
        ':woman_shrugging:',
        ':shrugging:',
        'idk 妇女',
        'dunno',
        ':woman:'
    ],
    '🤷{{skin_tone}}': [
        '正在切换人',
        ':person_shrugging:',
        ':shrugging:',
        'idk 人',
        'dunno',
        ':person:'
    ],
    '🤦{{skin_tone}}‍♂️': [
        '人脸道化',
        ':man_facepalming:',
        ':facepalming:',
        ':man:'
    ],
    '🤦{{skin_tone}}‍♀️': [
        '妇女脸谱化',
        ':woman_facepalming:',
        ':facepalming:',
        ':woman:'
    ],
    '🤦{{skin_tone}}': [
        '人员脸谱化',
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
        '人员托盘',
        ':person_bowing:',
        ':bowing:',
        ':person:'
    ],
    '🧏{{skin_tone}}‍♂️': [
        '死亡人',
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
        '死亡人员',
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
        '妇女提升手',
        ':woman_raising_hand:',
        '快乐的妇女举手',
        ':raising_hand:',
        ':woman:'
    ],
    '🙋{{skin_tone}}': [
        '人员提升手',
        ':person_raising_hand:',
        '欣喜的人提升一手',
        ':raising_hand:',
        ':person:'
    ],
    '💁{{skin_tone}}‍♂️': [
        'Man Tiping Hand',
        ':man_tipping_hand:',
        '问讯处人员',
        ':tipping_hand:',
        ':man:'
    ],
    '💁{{skin_tone}}‍♀️': [
        '妇女装配手',
        ':woman_tipping_hand:',
        '问讯处妇女',
        ':tipping_hand:',
        ':woman:'
    ],
    '💁{{skin_tone}}': [
        '人手套装',
        ':person_tipping_hand:',
        '问讯处人员',
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
        '妇女正在寻找OK',
        ':woman_gesturing_ok:',
        ':gesturing_ok:',
        ':woman:'
    ],
    '🙆{{skin_tone}}': [
        '玩家正在获取OK',
        ':person_gesturing_ok:',
        ':gesturing_ok:',
        ':person:'
    ],
    '🙅{{skin_tone}}‍♂️': [
        'Man Gesting 否',
        ':man_gesturing_no:',
        ':gesturing_no:',
        ':man:'
    ],
    '🙅{{skin_tone}}‍♀️': [
        '妇女测试中 否',
        ':woman_gesturing_no:',
        ':gesturing_no:',
        ':woman:'
    ],
    '🙅{{skin_tone}}': [
        '人员测试不可用',
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
        '人员Pouting',
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
        '妇女衰退。',
        ':woman_frowining:',
        ':frowining:',
        ':woman:'
    ],
    '🙍{{skin_tone}}': [
        '人员衰落中',
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
        '人员僵尸',
        ':person_zombie:',
        ':zombie:',
        ':person:'
    ],
    '🚶{{skin_tone}}‍♂️': [
        '人步行',
        ':man_walking:',
        ':walking:',
        ':man:'
    ],
    '🚶{{skin_tone}}‍♀️': [
        '妇女步行',
        ':woman_walking:',
        ':walking:',
        ':woman:'
    ],
    '🚶{{skin_tone}}': [
        '人员步行',
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
        'Man Standard',
        ':man_standing:',
        ':standing:',
        ':man:'
    ],
    '🧍{{skin_tone}}‍♀️': [
        '妇女常驻代表',
        ':woman_standing:',
        ':standing:',
        ':woman:'
    ],
    '🧍{{skin_tone}}': [
        '常驻人员',
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
        '女人的膝关卡',
        ':woman_kneeling:',
        ':kneeling:',
        ':woman:'
    ],
    '🧎{{skin_tone}}': [
        '人员Kneellink',
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
        '带白色冠军的人',
        ':man_with_white_cane:',
        ':white_cane:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🦯': [
        '带白冠军的妇女',
        ':woman_with_white_cane:',
        ':white_cane:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🦯': [
        '白色Cane 的人',
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
        '摩托化轮椅中的人',
        ':man_in_motorized_wheelchair:',
        ':motorized_wheelchair:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🦼': [
        '摩托化轮椅中的妇女',
        ':woman_in_motorized_wheelchair:',
        ':motorized_wheelchair:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🦼': [
        '摩托化轮椅中的人',
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
        '手工轮椅中的人',
        ':man_manual_wheelchair:',
        ':manual_wheelchair:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🦽': [
        '手工轮椅中的妇女',
        ':woman_manual_wheelchair:',
        ':manual_wheelchair:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🦽': [
        '手工轮椅上的人',
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
        'Bunny Ears 的男人',
        ':men_with_bunny_hears:',
        ':bunny_ears:',
        ':man:'
    ],
    '👯‍♀️': [
        'Bunny Ears 的妇女',
        ':women_with_bunny_hears:',
        ':bunny_ears:',
        ':woman:'
    ],
    '👯': [
        '有下水道的人',
        ':people_with_bunny_hears:',
        ':bunny_ears:',
        ':person:'
    ],
    '🕴️{{skin_tone}}': [
        '在套装中的人 Leviting',
        ':person_in_suit_levitating:',
        '悬停人',
        '粗暴的男孩组织',
        'Walt Jabsco',
        '男人参与商业套装',
        ':person:'
    ],
    '🧖{{skin_tone}}‍♂️': [
        '人在Steamy Room',
        ':man_in_steamy_room:',
        ':steamy_room:',
        '桑纳人',
        ':man:'
    ],
    '🧖{{skin_tone}}‍♀️': [
        'Steamy房间中的妇女',
        ':woman_in_steamy_room:',
        ':steamy_room:',
        'Sauna地区的妇女',
        ':woman:'
    ],
    '🧖{{skin_tone}}': [
        'Steam房间的人员',
        ':person_in_steamy_room:',
        ':steamy_room:',
        '萨纳地区的人',
        ':person:'
    ],
    '👫{{skin_tone}}': [
        '女人和男人持手',
        ':woman_and_man_holding_hands:',
        ':holding_hands:',
        '异性伴侣：',
        '直流双手',
        '男人和女人持手',
        ':woman:'
    ],
    '👬{{skin_tone}}': [
        '男人持手',
        ':holding_hands:',
        ':men_holding_hands:',
        'Gay Couple',
        '两名男子持手',
        ':man:'
    ],
    '👭{{skin_tone}}': [
        '女持手',
        ':holding_hands:',
        ':women_holding_hands:',
        'Lesbian couple',
        '两名女持手',
        ':woman:'
    ],
    '🧑‍🤝‍🧑': [
        '手持手',
        ':holding_hands:',
        ':people_holding_hands:',
        '两个人持手',
        '两性平等包容couple',
        '两性中立结合子',
        '不符合性别要求的伴侣关系',
        ':person:'
    ],
    '🧑‍🧑‍🧒': [
        'Family: Adult, Adult, Child',
        ':family_adult_adult_child:',
        'Family: Person, Person, Child'
    ],
    '👨‍👩‍👦': [
        '与母亲、父亲和松族的家庭',
        ':family_with_mother_father_and_son:',
        '家庭：男性、女性、男孩。'
    ],
    '👨‍👩‍👧': [
        '与母亲、父亲和女儿共同生活的家庭',
        ':family_with_mother_father_and_daughter:',
        '家庭： 男性、女性、女童'
    ],
    '👨‍👨‍👦': [
        '有两名父亲和男人的家庭',
        ':family_with_two_fathers_and_son:',
        '家庭： 男性，男性，男生：',
        ':man:'
    ],
    '👨‍👨‍👧': [
        '有两个父亲和女儿的家庭',
        ':family_with_two_fathers_and_daughter:',
        '家庭： 男性，男性，女童',
        ':man:'
    ],
    '👩‍👩‍👦': [
        '有两个母亲和子女的家庭',
        ':family_with_two_mothers_and_son:',
        '家庭： 妇女、妇女',
        ':woman:'
    ],
    '👩‍👩‍👧': [
        '有两个母亲和女儿的家庭',
        ':family_with_two_mothers_and_daughter:',
        '家庭： 妇女、妇女',
        ':woman:'
    ],
    '🧑‍🧑‍🧒‍🧒': [
        'Family: Adult, Adult, Child, Child',
        ':family_adult_adult_child_child:',
        'Family: Person, Person, Child, Child'
    ],
    '👨‍👩‍👧‍👦': [
        '带有母亲、父亲、松子和女儿的家庭',
        ':family_with_mother_father_son_and_daughter:',
        '家庭： 男人、女人、女童'
    ],
    '👨‍👩‍👦‍👦': [
        '带着母亲、父亲和两个儿子的家庭',
        ':family_with_mother_father_and_two_sons:',
        '家庭： 男人、女人、男人、男人和男人'
    ],
    '👨‍👩‍👧‍👧': [
        '与母亲、父亲和两名女儿的家庭',
        ':family_with_mother_father_and_two_daughters:',
        '家庭： 男人、女人、女童'
    ],
    '👨‍👨‍👧‍👦': [
        '有两个父亲、僧侣和女儿的家庭',
        ':family_with_two_fathers_son_and_daughter:',
        '家庭： 男人，男人，女孩，男人',
        ':man:'
    ],
    '👨‍👨‍👦‍👦': [
        '有两个父亲和两个儿子的家庭',
        ':family_with_two_fathers_and_two_sons:',
        '家庭：男人，男人，男人，男人，男孩子，男人',
        ':man:'
    ],
    '👨‍👨‍👧‍👧': [
        '有两名父亲和两名女儿的家庭',
        ':family_with_two_fathers_and_two_daughters:',
        '家庭：男人，男人，女人，女童',
        ':man:'
    ],
    '👩‍👩‍👧‍👦': [
        '有两名母亲、松子和女儿的家庭',
        ':family_with_two_mothers_son_and_daughter:',
        '家庭： 妇女、妇女、女孩、男孩；',
        ':woman:'
    ],
    '👩‍👩‍👦‍👦': [
        '有两个孩子的家庭',
        ':family_with_two_mothers_and_two_sons:',
        '家庭： 妇女、妇女、男童、男童。',
        ':woman:'
    ],
    '👩‍👩‍👧‍👧': [
        '有两名母亲和两名女儿的家庭',
        ':family_with_two_mothers_and_two_daughters:',
        '家庭： 妇女、妇女、女童',
        ':woman:'
    ],
    '🧑‍🧒': [
        'Family: Adult, Child',
        ':family_adult_child:',
        'Family: Person, Child'
    ],
    '👨‍👦': [
        '与神父和神父的家庭',
        ':family_with_father_and_son:',
        '家庭：男性，男人',
        ':man:'
    ],
    '👨‍👧': [
        '与父亲和女儿共同生活的家庭',
        ':family_with_father_and_daughter:',
        '家庭：男性，女童',
        ':man:'
    ],
    '👩‍👧': [
        '与母亲和女儿的家庭',
        ':family_with_mother_and_daughter:',
        '家庭： 妇女、女童',
        ':woman:'
    ],
    '👨‍👧‍👧': [
        '有父亲和两名女儿的家庭',
        ':family_with_father_and_two_daughters:',
        '家庭： 男性，女孩，',
        ':man:'
    ],
    '🧑‍🧒‍🧒': [
        'Family: Adult, Child, Child',
        ':family_adult_child_child:',
        'Family: Person, Child, Child'
    ],
    '👨‍👦‍👦': [
        '有父亲和两个儿子的家庭',
        ':family_with_father_and_two_sons:',
        '家庭：男人，男孩，男人',
        ':man:'
    ],
    '👨‍👧‍👦': [
        '与父亲、松子和女儿共同生活的家庭',
        ':family_with_father_son_and_daughter:',
        '家庭： 男性，女孩，男孩：',
        ':man:'
    ],
    '👩‍👦': [
        '与母子和女子的家庭',
        ':family_with_mother_and_son:',
        '家庭： 妇女、男孩；',
        ':woman:'
    ],
    '👩‍👦‍👦': [
        '与母亲和两个儿子的家庭',
        ':family_with_mother_and_two_sons:',
        '家庭： 妇女、男童、男童。',
        ':woman:'
    ],
    '👩‍👧‍👦': [
        '带有母亲、松子和女儿的家庭',
        ':family_with_mother_son_and_daughter:',
        '家庭： 妇女、女孩、男孩；',
        ':woman:'
    ],
    '👩‍👧‍👧': [
        '与母亲和两名女儿的家庭',
        ':family_with_mother_and_two_daughters:',
        '家庭： 妇女、女童',
        ':woman:'
    ],
    '💑{{skin_tone}}': [
        '带心的双手',
        ':couple_with_heart:',
        '爱情中的伴侣关系',
        '喜爱的双手',
        '两性中立结合子',
        ':person:'
    ],
    '👩‍❤️‍👨': [
        '爱心的男人和女人',
        ':man_and_woman_with_heart:',
        '爱情中的伴侣关系',
        '喜爱的双手',
        '带心的双手'
    ],
    '👨‍❤️‍👨': [
        '有心的两名男人',
        ':two_men_with_heart:',
        '与心同义：男，男人，男人',
        ':man:'
    ],
    '👩‍❤️‍👩': [
        '两名有心的妇女',
        ':two_women_with_heart:',
        '与心协力：妇女、妇女',
        ':woman:'
    ],
    '💏{{skin_tone}}': [
        '夫妇基座',
        ':couple_kissing:',
        '基斯',
        '两性中立的双胞胎基西',
        ':person:'
    ],
    '👩‍❤️‍💋‍👨': [
        '男人和女人基斯化',
        ':man_and_woman_kissing:'
    ],
    '👨‍❤️‍💋‍👨': [
        '两名男人按下',
        ':two_men_kissing:',
        '男人和男人基西',
        ':man:'
    ],
    '👩‍❤️‍💋‍👩': [
        '两名妇女基斯化',
        ':two_women_kissing:',
        '妇女和妇女基斯化',
        ':woman:'
    ],
    '💆{{skin_tone}}‍♂️': [
        'Man Getting Head Massage',
        ':man_getting_head_massage:',
        ':getting_head_massage:',
        ':man:'
    ],
    '💆{{skin_tone}}‍♀️': [
        '妇女获取头部的分布情况',
        ':woman_getting_head_massage:',
        ':getting_head_massage:',
        ':woman:'
    ],
    '💆{{skin_tone}}': [
        '个人获取头部分布图',
        ':person_getting_head_massage:',
        ':getting_head_massage:',
        ':person:'
    ],
    '💇{{skin_tone}}‍♂️': [
        '男人正在获得快车',
        ':man_getting_haircut:',
        ':getting_haircut:',
        ':man:'
    ],
    '💇{{skin_tone}}‍♀️': [
        '女人正在做出休闲动作',
        ':woman_getting_haircut:',
        ':getting_haircut:',
        ':woman:'
    ],
    '💇{{skin_tone}}': [
        '人员正在获取快照',
        ':person_getting_haircut:',
        ':getting_haircut:',
        ':person:'
    ],
    '🛌{{skin_tone}}': [
        '睡眠住宿',
        '已装饰',
        ':sleeping_accommodation:',
        '床上的人',
        '人员睡眠'
    ],
    '🛀{{skin_tone}}': [
        '人拿浴者',
        '浴室',
        ':bath:',
        ':person_taking_bath:',
        '热浴室',
        '人去浴室',
        '巴思文',
        '阵雨',
        '肥皂案',
        'Tidy',
        'Clean',
        'Scrub'
    ],
    '🧌': [
        'Troll',
        ':troll:'
    ],
    '👺': [
        '戈布林文',
        ':goblin:',
        '长鼻面',
        '红色蒙版',
        'Tengu',
        '日语哥布林文'
    ]
};
/*animals*/
emojis_language[lang][4] = {
    '😺': [
        '发明小猫座',
        ':happy_cat:',
        ':smiling_cat:',
        '::):',
        '快乐小节',
        '微笑之帽',
        '快乐的猫面',
        '开启鼠标时的笑脸帽'
    ],
    '😸': [
        '与微笑眼睛一起研制小猫。',
        ':grinning_cat:',
        '::D:',
        '发明小猫座',
        '快乐小节',
        '发明猫面'
    ],
    '😹': [
        '带有珍珠之帽子',
        ':laughing_cat:',
        '::):',
        '快乐的耳机帽',
        '正在抓着的帽'
    ],
    '😻': [
        '带有心眼的微笑帽',
        ':heart_eyes_cat:',
        ':*.*:',
        '爱心眼帽',
        '喜爱的猫子',
        '带有心形眼睛的微笑猫面'
    ],
    '😼': [
        '用Wry Smile来做猫子',
        ':cat_with_wry_smile:',
        '熔炼蛋糕点',
        '涂料猫面',
        '带有Wry Smile 的猫面'
    ],
    '😽': [
        '小猫座',
        ':kissing_cat:',
        '::*:',
        '小猫面具',
        '带着封闭眼睛的猫面'
    ],
    '🙀': [
        'Weary Cat',
        ':weary_cat:',
        '::O:',
        '可爱的猫子',
        '屏幕通话机',
        '恐惧中的猫脸截图',
        'Weary Cat Face'
    ],
    '😿': [
        '呼叫帽',
        ':crying_cat:',
        '::(:',
        '伤心小节',
        '正在响起的猫面'
    ],
    '😾': [
        '正在拍摄的杯子',
        ':pouting_cat:',
        'Grumpy Cat',
        '正在拍摄的猫面'
    ],
    '🙈': [
        '看看不见的魔法',
        '猴子',
        ':see-no-evil_mokey:',
        ':see_no_evil_mokey:',
        ':monkey:',
        '米扎鲁文',
        '专用封面眼镜'
    ],
    '🙉': [
        '心灵-黑客专钥',
        '猴子',
        ':hear-no-evil_monkey:',
        ':hear_no_evil_monkey:',
        ':monkey:',
        'Kikazaru',
        'Monkey 封面'
    ],
    '🙊': [
        '扬声器-黑客专钥',
        '猴子',
        ':speak-no-evil_monkey:',
        ':speak_no_evil_monkey:',
        ':monkey:',
        '伊瓦萨鲁文',
        'Monkey 封面Mouth',
        '没有发言'
    ],
    '🐵': [
        '猴子面',
        ':monkey_face:',
        '猴子',
        '蒙基头'
    ],
    '🐒': [
        '猴子',
        ':monkey:',
        'Cheeky Monkey'
    ],
    '🦍': [
        'Gorilla',
        ':gorilla:'
    ],
    '🐶': [
        '狗面具',
        ':dog_face:',
        '门',
        '小配对'
    ],
    '🐕': [
        '门',
        ':dog:',
        'Doggo',
        'Akita Inu'
    ],
    '🦮': [
        '看到眼门',
        ':seeing_eye_dog:',
        '导星门'
    ],
    '🐕‍🦺': [
        '服务门',
        ':service_dog:'
    ],
    '🐩': [
        '水果',
        ':poodle:',
        '门',
        '微型药水',
        '标准荷宝动付器',
        '玩具药水'
    ],
    '🐺': [
        '狼人',
        ':wolf:',
        '狼面',
        ':gray:',
        ':grey:'
    ],
    '🦊': [
        'Fox',
        ':fox:',
        'Fox 面',
        ':orange:'
    ],
    '🦝': [
        '竞技场',
        ':raccoon:'
    ],
    '🐱': [
        '猫头像',
        ':cat_face:',
        ':3',
        '开恩文',
        '基蒂文'
    ],
    '🐈': [
        '小猫座',
        ':cat:',
        '家居帽',
        '通道：',
        '休塞亚特'
    ],
    '🐈‍⬛': [
        '黑色笼子',
        ':black_cat:',
        ':black:'
    ],
    '🦁': [
        '狮子',
        ':lion:',
        '狮子面'
    ],
    '🐯': [
        '猛虎人面',
        ':tiger_face:',
        '剪切虎头'
    ],
    '🐅': [
        '老虎座',
        ':tiger:',
        'Bengal Tiger'
    ],
    '🐆': [
        'Leopard',
        ':leopard:',
        '非洲莱波德',
        'Jaguar'
    ],
    '🐴': [
        '马面',
        ':horse_face:',
        '马头'
    ],
    '🐎': [
        '马',
        ':horse:',
        '盖洛普马',
        '赛马'
    ],
    '🦄': [
        '独角兽人',
        ':unicorn:',
        '独角兽面'
    ],
    '🦓': [
        'Zebra',
        ':zebra:',
        'Zebra 面',
        ':white:',
        ':black:'
    ],
    '🦌': [
        '代尔',
        ':deer:',
        '圆石',
        '驯化者',
        'Stag'
    ],
    '🐮': [
        '牛面具',
        ':cow_face:',
        '牛座',
        '快乐的牛座'
    ],
    '🐂': [
        'xix',
        ':ox:',
        '公牛座',
        '布洛克',
        '牛津救济会',
        '钢铁公司'
    ],
    '🐃': [
        '水源Buffalo',
        ':water_buffalo:',
        '布法洛文',
        '家庭用水缓冲区'
    ],
    '🐄': [
        '牛座',
        ':cow:',
        '奶牛座'
    ],
    '🐷': [
        '猪面',
        ':pig_fase:',
        'Pig',
        '猪头',
        ':pink:'
    ],
    '🐖': [
        'Pig',
        ':pig:',
        '钩子',
        'Sow',
        ':pink:'
    ],
    '🐗': [
        '鲍尔文',
        ':boar:',
        '瓦瑟克',
        '野战靴子',
        '野猪座'
    ],
    '🐽': [
        '猪鼻子',
        ':pig_nose:'
    ],
    '🐏': [
        'Ram',
        ':ram:',
        '羊座'
    ],
    '🐑': [
        'Ewe',
        ':ewe:',
        'Lamb',
        '羊座'
    ],
    '🐐': [
        '山羊',
        ':goat:'
    ],
    '🐪': [
        '杰梅尔',
        ':camel:',
        'Arabian Camel',
        '投掷骆驼。',
        '一波出蛋糕点'
    ],
    '🐫': [
        '双跳蛋糕点',
        ':two-hump_camel:',
        ':two_hump_camel:',
        '亚美尔',
        '巴克特里安杰梅尔'
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
        '大师',
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
        '鼠标面',
        ':mouse_face:',
        '鼠标键'
    ],
    '🐁': [
        '鼠标键',
        ':mouse:',
        '多尔马',
        '罗森特',
        '米斯文'
    ],
    '🐀': [
        '干线',
        ':rat:',
        '罗森特'
    ],
    '🐹': [
        '哈姆斯特文',
        ':hamster:',
        '哈姆斯特面具'
    ],
    '🐰': [
        '狂犬病面',
        ':rabbit_face:',
        '复活节布尼'
    ],
    '🐇': [
        '拉比特',
        'Bunny',
        ':rabbit:',
        'Bunny Rabbit'
    ],
    '🐿️': [
        '奇普蒙克',
        ':chipmunk:',
        '潜水器'
    ],
    '🦔': [
        '赫德霍克',
        ':hedgehog:'
    ],
    '🦇': [
        '巴特',
        ':bat:',
        '巴特曼',
        ':black:'
    ],
    '🐻': [
        '熊座',
        ':bear:',
        '熊面',
        '泰迪熊座',
        ':brown:'
    ],
    '🐨': [
        '科拉',
        ':koala:',
        'Koala 面'
    ],
    '🐼': [
        '潘达文',
        ':panda:',
        '潘达面具'
    ],
    '🦘': [
        '坎加罗奥文',
        ':kangaroo:',
        'Roo'
    ],
    '🦡': [
        'Badger',
        ':badger:'
    ],
    '🦃': [
        '土耳其',
        ':turkey:',
        '向土耳其致谢。',
        '土耳其野生生物协会'
    ],
    '🐔': [
        '鸡肉',
        ':chicken:',
        'Hen'
    ],
    '🐓': [
        '岩石',
        ':cock:',
        'Rooster',
        '鸡肉'
    ],
    '🐣': [
        '正在聊天室',
        ':hatching_chick:',
        '婴儿鸡肉',
        '踢人帽',
        'Egg',
        ':yellow:'
    ],
    '🥚': [
        'Egg',
        ':egg:'
    ],
    '🐤': [
        '婴儿鸡肉',
        ':baby_chick:',
        '黄鸟类',
        ':yellow:'
    ],
    '🐥': [
        '前面的婴儿碎子',
        ':front_baby_chick:',
        '婴儿鸡肉',
        '立体胸甲',
        ':yellow:'
    ],
    '🐦': [
        '鸟类',
        ':bird:'
    ],
    '🐧': [
        'Penguin',
        ':penguin:'
    ],
    '🕊️': [
        '小门',
        ':Dove:',
        '和平之门',
        ':white:'
    ],
    '🦅': [
        '鹰座',
        ':Eagle:',
        'Bald Eagle'
    ],
    '🦆': [
        '杜克',
        ':Duck:'
    ],
    '🦢': [
        '天狼座',
        ':swan:',
        ':white:'
    ],
    '🦉': [
        'Owl',
        ':owl:',
        ':brown:'
    ],
    '🦚': [
        '建立和平',
        ':peacock:'
    ],
    '🦜': [
        '帕罗特',
        ':parrot:'
    ],
    '🐸': [
        '青色',
        ':frog:',
        'Toad',
        '青色面',
        ':green:'
    ],
    '🐊': [
        '裁剪式',
        ':crocodile:',
        '过敏者',
        '克罗克',
        ':green:'
    ],
    '🐢': [
        '乌特尔特',
        ':turtle:',
        'Tortoise',
        ':green:'
    ],
    '🦎': [
        '巫师',
        ':lizard:',
        '吉科',
        ':green:'
    ],
    '🐍': [
        '蛇座',
        ':snake:',
        '服务器'
    ],
    '🐲': [
        '龙面',
        ':dragon_face:',
        '龙头'
    ],
    '🐉': [
        '龙座',
        ':dragon:'
    ],
    '🦕': [
        '苏罗波德',
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
        '配偶鲸鱼',
        ':spouting_whale:',
        '剪切鲸鱼'
    ],
    '🐋': [
        '鲸鱼座',
        ':whale:'
    ],
    '🐬': [
        '海豚座',
        ':dolphin:'
    ],
    '🐟': [
        '鱼类',
        ':fish:',
        '淡水鱼'
    ],
    '🐠': [
        '热带鱼',
        ':tropical_fish:',
        '鱼类',
        '黄蓝色鱼'
    ],
    '🐡': [
        'Blowfish',
        ':blowfish:',
        'Fugu',
        '普费尔鱼'
    ],
    '🦈': [
        '鲨鱼座',
        ':shark:',
        '伟大的白鲨鱼座'
    ],
    '🐙': [
        '奥多普斯',
        ':octopus:'
    ],
    '🐚': [
        '螺旋式外壳',
        ':spiral_shell:',
        '西色尔',
        '外壳'
    ],
    '🐌': [
        '冰箱',
        ':snail:',
        '缩写',
        '花园的冰箱'
    ],
    '🦋': [
        '蝴蝶',
        ':butterfly:'
    ],
    '🐛': [
        '错误',
        ':bug:',
        '卡特皮尔',
        '昆特文'
    ],
    '🐜': [
        'Ant',
        ':ant:',
        '错误',
        '昆特文'
    ],
    '🐝': [
        '翁耶比',
        ':honeybee:',
        '蜜蜂：',
        'Bumblebee',
        ':yellow:',
        ':black:'
    ],
    '🐞': [
        '女人贝埃特',
        ':lady_beetle:',
        'Ladybird',
        'Ladybug',
        '错误'
    ],
    '🦗': [
        '板块',
        ':cricket:',
        'Grasshoper'
    ],
    '🕷️': [
        '蜘蛛的',
        ':spider:'
    ],
    '🦂': [
        '帝王座',
        ':scorpion:'
    ],
    '🦟': [
        '莫斯基多',
        ':mosquito:',
        ':black:'
    ],
    '🦀': [
        '克拉布',
        ':crab:',
        ':red:'
    ],
    '🦞': [
        '龙虾座',
        ':lobster:'
    ],
    '🦐': [
        '收缩图',
        ':shrimp:',
        'Prawn'
    ],
    '🦑': [
        '方形',
        ':squid:'
    ],
    '🦧': [
        'Orangutan',
        ':orangutan:'
    ],
    '🦥': [
        '槽位',
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
        '比森语',
        ':bison:'
    ],
    '🦣': [
        '曼莫斯',
        ':mammoth:',
        ':brown:'
    ],
    '🦫': [
        '海浪者',
        ':beaver:'
    ],
    '🐻‍❄️': [
        '极熊熊座',
        ':polar_bear:',
        ':white:'
    ],
    '🦤': [
        'Dodo',
        ':dodo:'
    ],
    '🦭': [
        '密碼',
        ':seal:'
    ],
    '🪲': [
        '节点数',
        ':beetle:'
    ],
    '🪳': [
        '科克罗克',
        ':cockroach:'
    ],
    '🪰': [
        '飞龙',
        ':fly:'
    ],
    '🪱': [
        '虫子',
        ':worm:'
    ],
    '🦩': [
        '火焰喷射器',
        ':flamingo:'
    ],
    '🪹': [
        '空排料',
        ':empty_nest:',
        '鸟类',
        '主页'
    ],
    '🪺': [
        '带蛋的排料',
        ':nest_with_eggs:',
        '鸟类',
        '主页'
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
        '用箭头爱心',
        ':heart_with_arrow:',
        '古代箭头',
        'Lovestruck',
        ':pink:'
    ],
    '💝': [
        '爱心带操作区',
        ':heart_with_ribbon:',
        '巧克力宝箱',
        '礼品箱',
        '礼物心',
        ':red:'
    ],
    '💖': [
        'Sparkling Heart',
        ':sparkling_heart:',
        'Sparkle 心',
        '圣心心',
        '星之心',
        ':pink:'
    ],
    '💗': [
        '正在成长心中',
        ':growing_heart:',
        '多个心',
        '三重心',
        ':pink:'
    ],
    '💓': [
        '殴打心',
        ':beating_heart:',
        '心报警',
        'Heartbeat',
        'Wifi心',
        ':pink:'
    ],
    '💞': [
        '旋转心',
        ':revolving_hearts:',
        '双心',
        ':pink:'
    ],
    '💕': [
        '双心',
        ':two_hearts:',
        '小心',
        '两只粉红色心',
        ':pink:'
    ],
    '💟': [
        '心情装饰',
        ':heart_decoration:',
        ':purple:'
    ],
    '❣️': [
        '心灵感子',
        ':heart_exclamation:',
        '点上方的心',
        '红心作为一个感叹号',
        '重型心脏采集标记Ornement',
        ':red:'
    ],
    '💔': [
        '破损的心',
        ':broken_heart:',
        '打破心',
        'Brokenheared',
        '心碎了',
        ':red:'
    ],
    '❤️‍🩹': [
        '正在创建心情',
        ':mending_heart:',
        '带色心',
        '治疗心',
        '不间断的心',
        ':red:'
    ],
    '❤️‍🔥': [
        '火上的爱好',
        ':heart_on_fire:',
        ':red:'
    ],
    '❤️': [
        '我喜欢你',
        ':red_heart:',
        '红心',
        '爱心',
        '爱心',
        '红心',
        ':red:'
    ],
    '🧡': [
        '橙色心',
        ':orange_heart:',
        '我喜欢你',
        ':orange:'
    ],
    '💛': [
        '黄色心',
        ':yellow_heart:',
        '#1 高炉快照',
        '黄金心',
        '我喜欢你',
        ':yellow:'
    ],
    '💚': [
        '绿色心',
        ':green_heart:',
        '焦耳心',
        '我喜欢你',
        ':green:'
    ],
    '💙': [
        '蓝色心',
        ':blue_heart:',
        '我喜欢你',
        ':blue:'
    ],
    '💜': [
        '紫色心',
        ':purple_heart:',
        '我喜欢你',
        ':purple:'
    ],
    '🖤': [
        '黑色心',
        ':black_heart:',
        '暗心',
        '我喜欢你',
        ':black:'
    ],
    '🤍': [
        '白心',
        ':white_heart:',
        '我喜欢你',
        ':white:'
    ],
    '🤎': [
        '棕色心',
        ':brown_heart:',
        '我喜欢你',
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
        '百分',
        ':hundred_points:',
        '100',
        '%',
        '保留 100',
        '完美得分',
        '百点符号'
    ],
    '💬': [
        '语音气球',
        ':speech_balloon:',
        '泡泡泡泡聊天',
        '语音泡包',
        ':white:'
    ],
    '💭': [
        '思想气球',
        ':thought_balloon:',
        '智能泡球',
        '智能弹头',
        ':white:'
    ],
    '💤': [
        'Zzz',
        ':zzz:',
        '睡眠时间',
        '着色',
        '睡眠',
        '睡眠',
        '睡眠符号'
    ],
    '♠': [
        '螺旋套装',
        ':spade_suit:',
        'Spades',
        'Black Spade Suit'
    ],
    '♥': [
        '心灵套装',
        ':heart_suit:',
        '带有心的卡',
        '爱好',
        '黑色心脏套装'
    ],
    '♦': [
        '钻石套装',
        ':diamond_suit:',
        '四. 钻石',
        '黑色钻石套装'
    ],
    '♣': [
        '俱乐部套装',
        ':club_suit:',
        'Clubs',
        '黑俱乐部套装'
    ],
    '🏧': [
        'ATM 标志',
        ':atm_sign:',
        '自动取款机',
        '自动望远镜机',
        ':blue:'
    ],
    '🎧': [
        '耳机',
        ':headphone:',
        '耳机',
        'iPod',
        '耳机'
    ],
    '🎵': [
        '音乐笔记',
        ':musical_note:',
        '八条笔记的贝塞尔配对',
        '怪物配对',
        '音乐笔记'
    ],
    '🎶': [
        '音乐笔记',
        ':musical_notes:',
        '音乐',
        '音乐笔记',
        '正在唱出',
        '多个音乐笔记'
    ],
    '🔔': [
        '铃声',
        ':bell:',
        '自由铃声',
        'Ringer',
        '婚礼铃声',
        ':yellow:'
    ],
    '🔕': [
        '带斜杠铃声',
        ':bell_with_slash:',
        '通知',
        '铃声已禁用',
        '静音铃声',
        '带有取消笔记的铃声',
        ':yellow:'
    ],
    '🔈': [
        '扬声器低音量',
        ':speaker_low_volum:',
        '音量',
        '扬声器'
    ],
    '🔉': [
        '扬声器中等音量',
        ':speaker_medium_volume:',
        '减少音量',
        '音量中等的扬声器',
        '扬声器有一波声波。'
    ],
    '🔊': [
        '扬声器高音量',
        ':speaker_high_volume:',
        '增加音量',
        '带有三波音频的扬声器'
    ],
    '🔇': [
        '静音扬声器',
        ':muted_speaker:',
        '静音音量',
        '带有取消笔记的扬声器'
    ],
    '📢': [
        'Loudspeaker',
        ':loudspeaker:',
        '通 知',
        'PA 系统',
        '公开讲话'
    ],
    '⛔': [
        '无条目',
        ':no_entry:',
        ':red:'
    ],
    '🚫': [
        '禁止的',
        ':prohibited:',
        '封禁',
        '圆形反斜线',
        '否',
        '红色圆环十字准线',
        '受限',
        '无条目签名',
        ':red:'
    ],
    '🚳': [
        '没有自行车',
        ':no_bicycles:',
        '没有Bikes签名',
        ':red:',
        ':black:'
    ],
    '🚭': [
        '无烟化',
        ':no_smoking:',
        '没有烟雾符号',
        ':red:',
        ':black:'
    ],
    '🚯': [
        '无闪烁',
        ':no_littering:',
        '不要垃圾符号',
        ':red:',
        ':black:'
    ],
    '🚱': [
        '不可用水',
        ':non-potable_water:',
        ':non_potable_water:',
        '无水',
        '无饮水',
        '不可用水符号',
        ':red:',
        ':black:'
    ],
    '🚷': [
        '无步行者',
        ':no_pedestrians:',
        '没有人',
        '无步行',
        ':red:',
        ':black:'
    ],
    '🔞': [
        '十八岁以下没有',
        ':no_one_under_18:',
        'NSFW',
        '十八个符号下没有',
        '18',
        ':red:',
        ':black:'
    ],
    '📵': [
        '无手机号码',
        ':no_mobile_phones:',
        '无手机号码',
        '无电话',
        '无智能手机',
        ':red:',
        ':black:'
    ],
    '☢️': [
        'Radioactive',
        ':radioactive:',
        '国际辐射符号',
        'B. 核部分: 第91页, 34',
        '放射性标志',
        ':orange:'
    ],
    '☣️': [
        '生物危险',
        ':biohazard:',
        '生物危害标志',
        ':orange:'
    ],
    '⬆️': [
        '上箭头按钮',
        ':up_arrow_button:',
        '向上箭头',
        '向上移动黑箭头',
        ':blue:'
    ],
    '↗️': [
        '右上箭头按钮',
        ':up-right_arrow_button:',
        ':up_right_arrow_button:',
        '对角向上箭头',
        '东北箭头',
        ':blue:'
    ],
    '➡️': [
        '右箭头按钮',
        ':right_arrow_button:',
        '右箭头',
        '右黑箭头',
        ':blue:'
    ],
    '↘️': [
        '向右箭头按钮',
        ':down-right_arrow_button:',
        ':down_right_arrow_button:',
        '右对角箭头',
        '东南箭头',
        ':blue:'
    ],
    '⬇️': [
        '向下箭头按钮',
        ':down_arrow_button:',
        '向下箭头',
        '向下的黑箭头',
        ':blue:'
    ],
    '↙️': [
        '左箭头按钮',
        ':down-left_arrow_button:',
        ':down_left_arrow_button:',
        '对角左箭头',
        '西南箭头',
        ':blue:'
    ],
    '⬅️': [
        '左箭头按钮',
        ':left_arrow_button:',
        '左箭头',
        '左侧黑箭头',
        ':blue:'
    ],
    '↖️': [
        '左上箭头按钮',
        ':up-left_arrow_button:',
        ':up_left_arrow_button:',
        '对角左箭头',
        '西北箭头',
        ':blue:'
    ],
    '↕️': [
        '向下箭头按钮',
        ':up-down_arrow_button:',
        ':up_down_arrow_button:',
        '垂直箭头',
        '向下箭头',
        ':blue:'
    ],
    '↔️': [
        '左箭头按钮',
        ':left-right_arrow_button:',
        ':left_right_arrow_button:',
        '水平箭头',
        '侧边箭头',
        '左右箭头',
        ':blue:'
    ],
    '↩️': [
        '右箭头曲线左键',
        ':right_arrow_curving_left_button:',
        '电子邮件回复',
        '左曲线箭头',
        '用钩子左箭头',
        ':blue:'
    ],
    '↪️': [
        '左箭头曲线右侧按钮',
        ':left_arrow_curving_right_button:',
        '电子邮件转发方式',
        '右曲线箭头',
        '用钩子向右箭头',
        ':blue:'
    ],
    '⤴️': [
        '右箭头向上曲线按钮',
        ':right_arrow_curving_up_button:',
        '向右箭头点数然后向上曲线',
        ':blue:'
    ],
    '⤵️': [
        '右箭头向下曲线按钮',
        ':right_arrow_curving_down_button:',
        '曲线下箭头',
        '向右箭头指针，然后向下曲线',
        ':blue:'
    ],
    '🔃': [
        '顺时针垂直箭头按钮',
        ':clockwise_vertical_button:',
        '顺时针向下和向上打开环形箭头',
        ':blue:'
    ],
    '🔄': [
        '逆时针箭头按钮',
        ':counterclockwise_button:',
        '刷新',
        '旋转',
        '交换机',
        '逆时针箭头',
        '逆时针向下和向上打开环形箭头',
        ':blue:'
    ],
    '🔙': [
        '后箭头',
        ':back_arrow:',
        '后退',
        '用左箭头返回上方',
        ':black:'
    ],
    '🔚': [
        '结束箭头',
        ':end_arrow:',
        '结束',
        '以左箭头结束',
        ':black:'
    ],
    '🔛': [
        '开了！箭头',
        ':on_arrow:',
        '开启',
        '带着右箭头右上标记开启。',
        ':black:'
    ],
    '🔜': [
        '很快箭头',
        ':soon_arrow:',
        '很快的',
        '很快使用右箭头',
        ':black:'
    ],
    '🔝': [
        '顶部箭头',
        ':top_arrow:',
        '顶端',
        '顶部与上箭头',
        ':black:'
    ],
    '🛐': [
        '礼拜地点',
        ':place_of_worship:',
        '宗教建设',
        ':purple:'
    ],
    '⚛️': [
        'Atom 符号',
        ':atom_symbol:',
        ':purple:'
    ],
    '🕉️': [
        'Om 符号',
        ':om_symbol:',
        '好的',
        'Aumkara',
        'Omkara',
        'Pranava',
        ':purple:'
    ],
    '✡️': [
        '大卫之星',
        ':star_of_david:',
        'Magen David',
        ':purple:'
    ],
    '☸️': [
        '达尔马之车',
        ':wheel_of_dharma:',
        '头盔',
        ':purple:'
    ],
    '☯️': [
        'Yin Yang',
        ':yin_yang:',
        ':purple:'
    ],
    '✝️': [
        '拉丁十字座',
        ':latin_cross:',
        '基督教十字勋章',
        ':purple:'
    ],
    '☦️': [
        '东正教十字座',
        ':orthodox_cross:',
        ':purple:'
    ],
    '☪️': [
        '星与新年',
        ':star_and_crescent:',
        ':purple:'
    ],
    '☮️': [
        '和平符号',
        ':peace:',
        '和平标志',
        ':purple:'
    ],
    '🕎': [
        '梅洛拉',
        ':menorah:',
        'Candelabrum',
        '糖果箱',
        '查努基亚',
        '梅洛拉',
        'Menorah 含九个分支',
        ':purple:'
    ],
    '🔯': [
        '虚拟六点星星',
        ':dotted_six-pointed_star:',
        ':dotted_six_pointed_star:',
        '中点星六点星。',
        ':purple:'
    ],
    '🪯': [
        'Khanda',
        ':khanda:',
        'Sikhism',
        ':purple:'
    ],
    '♈': [
        '阿里斯',
        ':aries:',
        ':zodiac:',
        '芝加哥州',
        ':purple:'
    ],
    '♉': [
        'Taurus',
        ':taurus:',
        ':zodiac:',
        '芝加哥州',
        ':purple:'
    ],
    '♊': [
        'Gemini',
        ':gemini:',
        ':zodiac:',
        '芝加哥州',
        ':purple:'
    ],
    '♋': [
        'Cancer',
        ':cancer:',
        ':zodiac:',
        '芝加哥州',
        ':purple:'
    ],
    '♌': [
        '莱奥文',
        ':leo:',
        ':zodiac:',
        '芝加哥州',
        ':purple:'
    ],
    '♍': [
        '维戈文',
        ':virgo:',
        ':zodiac:',
        '芝加哥州',
        ':purple:'
    ],
    '♎': [
        '利伯拉',
        ':libra:',
        ':zodiac:',
        '芝加哥州',
        ':purple:'
    ],
    '♏': [
        '斯波皮奥文',
        ':scorpio:',
        ':zodiac:',
        '巨型战利品',
        '芝加哥州',
        ':purple:'
    ],
    '♐': [
        'Sagittarius',
        ':sagittarius:',
        ':zodiac:',
        '芝加哥州',
        ':purple:'
    ],
    '♑': [
        '克里科恩文',
        ':capricorn:',
        ':zodiac:',
        '芝加哥州',
        ':purple:'
    ],
    '♒': [
        '水星座',
        ':aquarius:',
        ':zodiac:',
        '芝加哥州',
        ':purple:'
    ],
    '♓': [
        'Pisces',
        ':pisces:',
        ':zodiac:',
        '芝加哥州',
        ':purple:'
    ],
    '⛎': [
        '奥普丘斯',
        ':ophiuchus:',
        ':zodiac:',
        '芝加哥州',
        ':purple:'
    ],
    '⏭️': [
        '跳过转发符号',
        '带垂直条形的黑右双角三角形',
        ':skip_forward_button:',
        '下一曲目按钮',
        ':blue:'
    ],
    '⏮️': [
        '跳过后向符号',
        '带有垂直条形的黑色左双点三角形',
        ':skip_backward_button:',
        '最后曲目按钮',
        '上一曲目',
        ':blue:'
    ],
    '⏯️': [
        '播放或暂停按钮',
        '带有双垂直条形的黑色右点三角形',
        ':play_button:',
        ':pause_button:',
        ':play_or_pause_button:',
        '播放符号',
        '暂停符号',
        ':blue:'
    ],
    '🔀': [
        '随机曲目按钮',
        ':shuffle_tracks_button:',
        '右箭头',
        ':blue:'
    ],
    '🔁': [
        '重复按钮',
        ':repeat_button:',
        '循环符号',
        '转发器',
        '顺时针右向和左环开环形箭头',
        ':blue:'
    ],
    '🔂': [
        '重复单个按钮',
        ':repeat_single_button:',
        '有数字1的圆形箭头',
        '循环一次符号',
        '重复单轨符号',
        '顺时针右转和左手环形箭头带有圆形叠加的环形箭头',
        ':blue:'
    ],
    '▶️': [
        '播放按钮',
        ':play_button:',
        '右三角形',
        '右点三角形',
        '黑色右点三角形',
        ':blue:'
    ],
    '◀️': [
        '反向按钮',
        ':reverse_button:',
        '左三角形',
        '左指针三角形',
        '黑色左角三角形',
        ':blue:'
    ],
    '🔼': [
        '更新按钮',
        ':upwards_button:',
        '上三角形',
        '上点三角形',
        '上点小红三角形',
        ':blue:'
    ],
    '🔽': [
        '向下按钮',
        ':downwards_button:',
        '下三角形',
        '正在下点三角形',
        '低点红三角形',
        ':blue:'
    ],
    '⏩': [
        '快速转发按钮',
        ':fast-forward_button:',
        ':fast_forward_button:',
        '快速向导',
        '快速转发符号',
        '黑色右点双三角形',
        ':blue:'
    ],
    '⏪': [
        'Fast Reverse Button',
        ':fast_reverse_button:',
        'Rewind',
        '倒退符号',
        '黑色左双角三角形',
        ':blue:'
    ],
    '⏫': [
        '快速按钮',
        ':fast_up_button:',
        '双角三角形',
        '黑色上点双三角形',
        ':blue:'
    ],
    '⏬': [
        '快速向下按钮',
        ':fast_down_button:',
        '双角三角形',
        '黑色低点双三角形',
        ':blue:'
    ],
    '⏹️': [
        '停止按钮',
        ':stop_button:',
        '停止',
        '停止符号',
        '黑方正方形以停止',
        ':blue:'
    ],
    '⏏️': [
        '弹出按钮',
        ':eject_button:',
        'Eject Symbol',
        ':blue:'
    ],
    '🎦': [
        '电影座',
        ':cinema_button:',
        '电影屏幕',
        '电影',
        '胶片',
        '电影符号',
        '录制中',
        ':blue:'
    ],
    '📶': [
        '天线条',
        ':antenna_bars_button:',
        '接收栏',
        '信号强度',
        'Stairs',
        '信号强度符号',
        '带条的天线',
        ':blue:'
    ],
    '✖️': [
        '加成',
        ':multiply:',
        '时间',
        '乘号',
        '重型乘法 X',
        ':black:'
    ],
    '➕': [
        '加号',
        ':plus:',
        '加符号',
        '重加标志',
        ':black:'
    ],
    '➖': [
        'Minus',
        ':minus:',
        'Minus Symbol',
        '重型小标志牌',
        ':black:'
    ],
    '➗': [
        '拆分',
        ':divide:',
        'Division Symbol',
        '重型师标志',
        ':black:'
    ],
    '🟰': [
        '重平等标志',
        ':heavy_equals_sign:',
        '等于',
        '结果',
        ':black:'
    ],
    '♾️': [
        '无限的',
        ':infinity:',
        '永久性纸牌'
    ],
    '‼️': [
        '双采集标记',
        ':double_exclamation_mark:',
        '红色双采集标记',
        ':red:'
    ],
    '⁉️': [
        '探索问题标记',
        ':exclamation_question_mark:',
        '红采集标记和问题标记',
        ':red:'
    ],
    '❓': [
        '问题标记',
        ':question_mark:',
        '红色问题标记',
        '黑色问题标记排行',
        ':red:'
    ],
    '❔': [
        '白问题标记',
        ':white_question_mark:',
        ':question_mark:',
        '白问题标记',
        '白色问题标记Ornement',
        ':white:'
    ],
    '❗': [
        '曝光标记',
        ':exclamation_mark:',
        '红采集标记',
        '重型散布标记符号',
        ':red:'
    ],
    '❕': [
        '白色的装饰标记',
        ':white_exclamation_mark:',
        ':exclamation_mark:',
        '白色彩装饰',
        ':white:'
    ],
    '⭕': [
        'Hollow 红色圆',
        ':hollow_red_circle:',
        '圆圈',
        '正确',
        '红圆',
        '圆形标记',
        '重型大圆',
        ':red:'
    ],
    '☑️': [
        '勾选复选框',
        ':check_box_with_check:',
        '五',
        '复选框',
        '勾选框中标记',
        '带有选票的选票箱'
    ],
    '✔️': [
        '检查标记',
        ':check_mark:',
        '五',
        '检查',
        '刻度',
        'Checkmark',
        '重型检查标记',
        ':black:'
    ],
    '❌': [
        '交叉标记',
        ':cross_mark:',
        '十字线',
        'X',
        ':red:'
    ],
    '✅': [
        '检查标记按钮',
        ':check_mark_button:',
        '五',
        '绿色检查标记',
        '绿色梯子',
        '检查标记',
        '白色重型检查标记',
        ':green:'
    ],
    '❎': [
        '交叉标记按钮',
        ':cross_mark_button:',
        '十字线',
        'X',
        'X 标记',
        '正方形交叉标记',
        ':green:'
    ],
    '#️⃣': [
        '密钥号码签名',
        ':hash_key:',
        '#',
        '哈希键',
        '标签',
        '八十年代的胸甲',
        '磅密钥',
        '号码签名',
        ':blue:'
    ],
    '*️⃣': [
        'Keycap Asterisk',
        ':asterisk:',
        '星星按键值',
        ':blue:'
    ],
    '0️⃣': [
        '数字 0',
        ':number_0:',
        'Keycap Digit Zero'
    ],
    '1️⃣': [
        '数字1',
        ':number_1:',
        'Keycap 数字一个'
    ],
    '2️⃣': [
        '数字2',
        ':number_2:',
        'Keycap 数字二'
    ],
    '3️⃣': [
        '数字3',
        ':number_3:',
        'Keycap 数字3'
    ],
    '4️⃣': [
        '数字4',
        ':number_4:',
        'Keycap 数字四'
    ],
    '5️⃣': [
        '第 5 号',
        ':number_5:',
        'Keycap 数字5'
    ],
    '6️⃣': [
        '第 6 条',
        ':number_6:',
        'Keycap 数字6'
    ],
    '7️⃣': [
        '第 7 号',
        ':number_7:',
        'Keycap Digit Seven'
    ],
    '8️⃣': [
        '第 8 条',
        ':number_8:',
        'Keycap 数字8'
    ],
    '9️⃣': [
        '数字 9',
        ':number_9:',
        '密钥数字九'
    ],
    '🔟': [
        '第 10 条',
        ':number_10:',
        'Keycap: 10',
        '10',
        'Keycap 数字 10'
    ],
    '🔠': [
        'Input Latin Uppercase',
        ':input_latin_uppercase:',
        'ABCD',
        '大写',
        '大写字母输入符号',
        '拉丁字母输入符号',
        ':blue:'
    ],
    '🔡': [
        'Input Latin Lowercase',
        ':input_latin_lowercase:',
        '巴克德',
        '小写',
        '小写字母输入符号',
        '拉丁字母输入符号',
        ':blue:'
    ],
    '🔢': [
        'Input Numbers',
        ':input_numbers:',
        '1234',
        '数字',
        'Numeric Input',
        '数字输入符号',
        ':blue:'
    ],
    '🔣': [
        '符号输入符号',
        ':input_symbols:',
        '符号',
        '符号输入',
        ':blue:'
    ],
    '🔤': [
        'Input Latin Letters',
        ':input_latin_letters:',
        'bc',
        '字母表',
        '字母',
        '字母输入符号',
        '拉丁字母输入符号',
        ':blue:'
    ],
    '🅰️': [
        '按钮(布局类型)',
        ':a_blood:',
        '血型A',
        '第 A 条',
        '负平面拉丁字母A',
        ':red:'
    ],
    '🆎': [
        'AB 按钮(布局类型)',
        ':ab_blood:',
        '字母 AB',
        '血型AB',
        '负平方 AB',
        ':red:'
    ],
    '🅱️': [
        'B 按钮(布局类型)',
        ':b_blood:',
        '第 B 条',
        '血型B',
        '负平面拉丁字母B',
        ':red:'
    ],
    '🆑': [
        'CL 按钮',
        ':cl_button:',
        '清空',
        '清除按钮',
        'CL 标志',
        '平方 CL',
        '字母 CL',
        ':red:'
    ],
    '🆒': [
        '棉花按钮',
        ':cool_button:',
        '冷正方形',
        '很酷的标志',
        '正方形酷色',
        ':blue:'
    ],
    '🆓': [
        '免费按钮',
        ':free_button:',
        '免费的',
        '免费签名',
        '空闲平方',
        ':blue:'
    ],
    'ℹ️': [
        '信息',
        ':info_button:',
        '信息',
        '小写I',
        '旅游信息',
        '信息来源',
        ':blue:'
    ],
    '🆔': [
        'ID 按钮',
        ':id_button:',
        'ID',
        '1. 身份识别',
        '标识符',
        '方形ID',
        ':purple:'
    ],
    '🆕': [
        '新按钮',
        ':new_button:',
        '新的',
        '新建标志',
        '新建平方',
        ':blue:'
    ],
    '🅾️': [
        'O 按钮(布局类型)',
        ':0_blood:',
        '血型O',
        '0',
        '负平面拉丁文资本信',
        '字母O',
        ':red:'
    ],
    '🆗': [
        '确定按钮',
        ':ok_button:',
        '好的',
        '好的',
        '方形',
        '确定签名',
        '正方形',
        ':blue:'
    ],
    '🅿️': [
        'P按钮',
        ':p_button:',
        ':parking_sign:',
        '停车标志',
        '负平面拉丁文资本信',
        '信 P',
        ':blue:'
    ],
    '🆘': [
        'SOS按钮',
        ':sos_button:',
        '危难信号',
        '紧急情况',
        'SOS',
        'SOS 签名',
        'SOS 平方',
        '帮助',
        ':red:'
    ],
    '🆙': [
        '上传！按钮',
        ':up_button:',
        '等级向上',
        '上移',
        '上次注册',
        '用探险标记上方平方',
        ':blue:'
    ],
    '🆚': [
        'Vs 按钮',
        ':vs_button:',
        '平方',
        ':orange:'
    ],
    '🆖': [
        'NG 按钮',
        ':ng_button:',
        '平方 NG',
        '没有很好的标志',
        '不好',
        ':ng:',
        '环绕器',
        ':blue:'
    ],
    '🔴': [
        '红圆',
        ':red_circle:',
        '大红圆',
        ':red:'
    ],
    '🟠': [
        '橙色圆',
        ':orange_circle:',
        '大橙色圆圈',
        ':orange:'
    ],
    '🟡': [
        '黄色圆圈',
        ':yellow_circle:',
        '大黄色圆圈',
        ':yellow:'
    ],
    '🟢': [
        '绿色圆',
        ':green_circle:',
        '大绿色圆',
        ':green:'
    ],
    '🔵': [
        '蓝色圆圈',
        ':blue_circle:',
        '大蓝圆',
        ':blue:'
    ],
    '🟣': [
        '紫色圆',
        ':purple_circle:',
        '大型紫色圆',
        ':purple:'
    ],
    '🟤': [
        '棕色圆',
        ':brown_circle:',
        '大棕色圆',
        ':brown:'
    ],
    '⚫': [
        '黑色圆',
        ':black_circle:',
        '中等黑色圆',
        ':black:'
    ],
    '⚪': [
        '白圆',
        ':white_circle:',
        '中等白圆',
        ':white:'
    ],
    '🟥': [
        '红色方形',
        ':red_square:',
        '大红色正方形',
        ':red:'
    ],
    '🟧': [
        '橙色方形',
        ':orange_square:',
        '大橙色方形',
        ':orange:'
    ],
    '🟨': [
        '黄色方形',
        ':yellow_square:',
        '大黄色方形',
        ':yellow:'
    ],
    '🟩': [
        '绿色方形',
        ':green_square:',
        '大绿方形',
        ':green:'
    ],
    '🟦': [
        '蓝色方形',
        ':blue_square:',
        '大蓝色方形',
        ':blue:'
    ],
    '🟪': [
        '紫色方形',
        ':purple_square:',
        '大型紫色正方形',
        ':purple:'
    ],
    '🟫': [
        '棕色方形',
        ':brown_square:',
        '大棕色方形',
        ':brown:'
    ],
    '⬛': [
        '黑色大方形',
        ':black_large_square:',
        ':black:'
    ],
    '⬜': [
        '白色大方形',
        ':white_large_square:',
        ':white:'
    ],
    '◼️': [
        '黑色中方格',
        ':black_medium_square:',
        ':black:'
    ],
    '◻️': [
        '白中方格',
        ':white_medium_square:',
        ':white:'
    ],
    '◾': [
        '黑色中型小方形',
        ':black_medium_small_square:',
        ':black:'
    ],
    '◽': [
        '白中型小方形',
        ':white_medium_small_square:',
        ':white:'
    ],
    '▪️': [
        '黑色小方形',
        ':black_small_square:',
        ':black:'
    ],
    '▫️': [
        '白色小方形',
        ':white_small_square:',
        ':white:'
    ],
    '💠': [
        '钻石形状内有点的圆点',
        ':diamond_shape_with_dot:',
        '切割性',
        '钻石花板',
        '卡瓦尼'
    ],
    '🔶': [
        '大型橙色钻石公司',
        ':large_orange_diamond:',
        ':orange:'
    ],
    '🔷': [
        '大型蓝钻石公司',
        ':large_blue_diamond:',
        ':blue:'
    ],
    '🔸': [
        '小型橙色钻石公司',
        ':small_orange_diamond:',
        ':orange:'
    ],
    '🔹': [
        '小蓝宝石公司',
        ':small_blue_diamond:',
        ':blue:'
    ],
    '🔺': [
        '红色三角形指针上',
        ':red_triangle_pointed_up:',
        '上点红三角形',
        ':red:'
    ],
    '🔻': [
        '红色三角形下点',
        ':red_triangle_pointed_down:',
        '下点红三角形',
        ':red:'
    ],
    '🔳': [
        '白方按钮',
        ':white_square_button:',
        ':white:',
        ':black:'
    ],
    '🔲': [
        '黑方按钮',
        ':black_square_button:',
        ':white:',
        ':black:'
    ],
    '©️': [
        '版权所有',
        ':copyright:',
        ':c:',
        '版权签名'
    ],
    '®️': [
        '已注册',
        ':registered:',
        ':r:',
        '注册标志'
    ],
    '™️': [
        '交易标记',
        ':trade_mark:',
        ':tm:',
        '商标：',
        '交易标记标志'
    ],
    '🛅': [
        '左行李数',
        ':left_luggage:',
        '带密钥的包',
        '锁定套装',
        ':blue:'
    ],
    '🛄': [
        '行李索赔',
        ':baggage_claim:',
        ':blue:'
    ],
    '🛃': [
        'B. 海关事务',
        ':customs:',
        ':blue:'
    ],
    '🛂': [
        '护照管制',
        ':passport_control:',
        '边境管制',
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
        '饮用水符号',
        ':potable_water_symbol:',
        '第三次会议',
        '第三次会议',
        '水龙头',
        '水水'
    ],
    '🇦': [
        '第 A 条',
        ':letter_a:',
        ':a:',
        '区域指标编号字母A'
    ],
    '🇧': [
        '第 B 条',
        ':letter_b:',
        ':b:',
        '区域指标符号信B'
    ],
    '🇨': [
        '第 C 条',
        ':letter_c:',
        ':c:',
        '区域指标符号信C'
    ],
    '🇩': [
        '第 D 条',
        ':letter_d:',
        ':d:',
        '区域指标符号信 D'
    ],
    '🇪': [
        '第 E 条',
        ':letter_e:',
        ':e:',
        '区域指标编号字母E'
    ],
    '🇫': [
        '第 F 条',
        ':letter_f:',
        ':f:',
        '区域指标符号信F'
    ],
    '🇬': [
        '第 G 条',
        ':letter_g:',
        ':g:',
        '区域指标符号信G'
    ],
    '🇭': [
        '第 H 条',
        ':letter_h:',
        ':h:',
        '区域指标符号信 H'
    ],
    '🇮': [
        '信件一',
        ':letter_i:',
        ':i:',
        '区域指标编号I'
    ],
    '🇯': [
        '信件J',
        ':letter_j:',
        ':j:',
        '区域指标符号信J'
    ],
    '🇰': [
        '信件K',
        ':letter_k:',
        ':k:',
        '区域指标符号信K'
    ],
    '🇱': [
        '信 L',
        ':letter_l:',
        ':l:',
        '区域指标符号信L'
    ],
    '🇲': [
        '信 M',
        ':letter_m:',
        ':m:',
        '区域指标符号信M'
    ],
    '🇳': [
        '信 N',
        ':letter_n:',
        ':n:',
        '区域指标符号信N'
    ],
    '🇴': [
        '字母O',
        ':letter_o:',
        ':o:',
        '区域指标符号字母O'
    ],
    '🇵': [
        '信 P',
        ':letter_p:',
        ':p:',
        '区域指标符号 P'
    ],
    '🇶': [
        '第 Q 章',
        ':letter_q:',
        ':q:',
        '区域指标符号字母Q'
    ],
    '🇷': [
        '字母 R',
        ':letter_r:',
        ':r:',
        '区域指标符号信R'
    ],
    '🇸': [
        '第 S 条',
        ':letter_s:',
        ':s:',
        '区域指标符号信S'
    ],
    '🇹': [
        '字母 T',
        ':letter_t:',
        ':t:',
        '区域指标符号信T'
    ],
    '🇺': [
        '字母 U',
        ':letter_u:',
        ':u:',
        '区域指标编号字母U'
    ],
    '🇻': [
        '第 五 章',
        ':letter_v:',
        ':v:',
        '区域指标符号字母V'
    ],
    '🇼': [
        '字母 W',
        ':letter_w:',
        ':w:',
        '区域指标符号(W)'
    ],
    '🇽': [
        '字母 X',
        ':letter_x:',
        ':x:',
        '区域指标符号信X'
    ],
    '🇾': [
        '第 Y 条',
        ':letter_y:',
        ':y:',
        '区域指标符号字母Y'
    ],
    '🇿': [
        '字母 Z',
        ':letter_z:',
        ':z:',
        '区域指标符号信Z'
    ],
    '💌': [
        '喜欢的信',
        ':love_letter:',
        '心灵信封',
        '爱情笔记'
    ],
    '🚮': [
        '将垃圾放在其地方符号',
        ':put_litter_in_bing_sign:',
        '箱牌里的垃圾箱',
        '将垃圾放入回收站',
        '带垃圾的人'
    ],
    '♿': [
        '轮椅符号',
        ':wheelchair_symbol:',
        '可访问的浴室'
    ],
    '🚹': [
        '几分钟符号',
        ':mens_symbol:',
        '几分钟符号',
        'Mens厕所',
        '男性重生',
        '男性WC',
        ':blue:'
    ],
    '🚺': [
        '妇女符号',
        ':womens_symbol:',
        '妇女符号',
        '妇女厕所',
        '女性Restroom',
        'Famale WC',
        ':purple:',
        ':pink:'
    ],
    '🚻': [
        '重试',
        ':restroom:',
        '浴室标志',
        '厕所标志',
        'WC 签名',
        ':blue:'
    ],
    '🚼': [
        '婴儿符号',
        ':baby_symbol:',
        '婴儿更换站',
        '婴儿更改符号',
        '托儿所',
        ':orange:'
    ],
    '🚾': [
        '水箱',
        ':wc:',
        '西北地区',
        '厕所',
        ':blue:'
    ],
    '⚠️': [
        '警告标志',
        ':warning_sign:',
        '警报符号',
        ':yellow:'
    ],
    '🚸': [
        '儿童横道',
        ':children_crossing:',
        '正在跨越儿童',
        '学校交叉路由',
        ':yellow:'
    ],
    '🔅': [
        '低亮度符号',
        ':low_brightness_symbol:',
        '暗淡按钮',
        '降低亮度'
    ],
    '🔆': [
        '高亮度符号',
        ':high_brightness_symbol:',
        '增强亮度',
        '明亮按钮'
    ],
    '📳': [
        '振动模式',
        ':vibration_mode:',
        '手机心',
        '静音模式',
        ':orange:'
    ],
    '📴': [
        '手机已关闭',
        ':mobile_phone_off:',
        ':orange:'
    ],
    '〰️': [
        '波形',
        '瓦维·达什文',
        ':wave:'
    ],
    '💱': [
        '货币交易',
        ':currency_exchange:'
    ],
    '💲': [
        '重金签名',
        ':dollar_symbol:',
        '美元',
        '美元签名'
    ],
    '♻️': [
        '黑色通用回收符号',
        ':recycling_symbol:',
        '回收符号',
        '回收标志',
        ':green:'
    ],
    '🔱': [
        '三叉戟标志',
        ':trident_emblem:',
        '波切福克',
        '三叉戟'
    ],
    '📛': [
        '姓名徽章',
        ':name_badge:',
        '火上的Tofu',
        '名称标签',
        '火焰标签'
    ],
    '🔰': [
        '日本初学者符号',
        ':japanese_symbol_beginner:',
        'Shoshinsha 标记',
        '黄绿色盾',
        ':green:',
        ':yellow:'
    ],
    '➰': [
        '曲线循环',
        ':curly_loop:',
        '管理循环',
        '循环'
    ],
    '➿': [
        '双曲线循环',
        ':double_curly_loop:',
        '双曲线循环',
        '语音邮件'
    ],
    '〽️': [
        '备用标记部分',
        ':part_alternation_mark:',
        'M',
        '麦克唐纳州'
    ],
    '✳️': [
        '八个点星星',
        ':eight_spoked_asterisk:',
        ':green:'
    ],
    '✴️': [
        '八个点黑星',
        ':eight_pointed_star:',
        '橙色星星',
        '八个点星星',
        ':orange:'
    ],
    '❇️': [
        '萨帕克尔',
        ':sparkle:',
        ':green:'
    ],
    'Ⓜ️': [
        '圆形M',
        'Circled Latin Capital Letter M',
        ':circled_m:',
        '地铁公司',
        ':blue:'
    ],
    '🈁': [
        '日语字标志在这里的含义',
        'Squared Katakana Koko',
        ':japanese_here:',
        '在这里',
        '目标',
        ':blue:'
    ],
    '🈂️': [
        '日本标志意义服务或服务充电',
        'Squared Katakana Sa',
        ':japanese_service:',
        ':blue:'
    ],
    '🈷️': [
        '日本标志意义每月金额',
        'CJK 单一地形平方 6708',
        ':japanese_monthly_amouny:',
        '偏差 74',
        '月',
        ':orange:'
    ],
    '🈶': [
        '日本标志意义非免费的',
        'CJK 单一地形平面6709',
        ':japanese_own:',
        '自己的',
        '有',
        ':orange:'
    ],
    '🈯': [
        '日本标志意义保留',
        '正方形CJK统一地形学-6307',
        ':japanese_reserved:',
        '指针',
        '指',
        ':green:'
    ],
    '🉐': [
        '日本标志意义交易',
        '圆形意识形态优势',
        ':japanese_acquire:',
        '获取',
        '得',
        ':red:'
    ],
    '🈹': [
        '日本标志意义折扣',
        'CJK单一地形平方',
        ':japanese_discount:',
        '交易销售',
        '割',
        ':red:'
    ],
    '🈚': [
        '日本标志无需充电',
        'CJK单一地形平方',
        ':japanese_lacking:',
        '缺失的',
        '無',
        ':orange:'
    ],
    '🈲': [
        '禁止日本标志',
        '正方形CJK 单一地形-7981',
        ':japanese_prohibited:',
        'Forbid',
        '禁',
        ':red:'
    ],
    '🉑': [
        '日本标志意义可接受',
        '圆形意识形态接受',
        ':japanese_accept:',
        '接受',
        ':orange:'
    ],
    '🈸': [
        '日本标志意义应用程序',
        'CJK单一地形平方',
        ':japanese_application_form:',
        '应用程序表单',
        '猴子',
        '请求',
        '申',
        ':orange:'
    ],
    '🈴': [
        '日语标志意义传输(花旗)',
        '正方形CJK 统一地形学-5408',
        ':japanese_agreement:',
        '协议',
        '合',
        ':red:'
    ],
    '🈳': [
        '日本标志着出缺率',
        'CJK 单一地形平方-7a7a',
        ':japanese_available:',
        '空和可用',
        '空',
        ':blue:'
    ],
    '㊗️': [
        '日本标志性恭喜。',
        '圆形创意成员表示祝贺。',
        ':japanese_congratulations:',
        ':red:'
    ],
    '㊙️': [
        '圆形思想图密钥',
        ':japanese_secret:',
        '日本标志意义密钥',
        '密文',
        ':red:'
    ],
    '🈺': [
        '日语标志“开放供商务”',
        'CJK 单一地形平方 55b6',
        ':japanese_open_for_business:',
        '工作',
        '営',
        ':orange:'
    ],
    '🈵': [
        '日本标志意义已满；无缺性',
        '正方形CJK 统一地形学-6e80',
        ':japanese_full:',
        '完整的',
        '満',
        ':red:'
    ],
    '🔘': [
        '单选按钮',
        ':radio_button:'
    ],
    '🛑': [
        '停止签名',
        ':stop_sign:',
        '八角形标志',
        ':red:'
    ],
    '⚕️': [
        '医疗符号',
        ':medical_symbol:',
        'Aesculapus',
        'Asklepios',
        '阿斯克利皮乌斯之戒指',
        'Aesculapus 的法杖'
    ],
    '🛗': [
        '电梯器',
        ':elevator:',
        ':lift:',
        '升起'
    ],
    '⚧️': [
        '变形符号',
        ':transgender_sign:'
    ],
    '♂️': [
        '男性标志',
        ':male_sign:',
        '人符号',
        '火星符号'
    ],
    '♀️': [
        '女性标志',
        ':female_sign:',
        '妇女符号',
        'Venus Symbol'
    ]
};
/*food and drinks*/
emojis_language[lang][6] = {
    '🍇': [
        '图形',
        ':grapes:',
        '格瑞克',
        ':purple:'
    ],
    '🍈': [
        '梅伦文',
        ':melon:',
        'Cantaloupe',
        '哈尼得德',
        'Muskmelon'
    ],
    '🍉': [
        '西梅隆州',
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
        '莱蒙文',
        ':lemon:',
        '莱蒙纳德',
        ':yellow:'
    ],
    '🍌': [
        '香蕉色',
        ':banana:',
        '平板',
        ':yellow:'
    ],
    '🍍': [
        '线性苹果',
        ':pineapple:'
    ],
    '🥭': [
        'Mango',
        ':mango:'
    ],
    '🍎': [
        '红苹果',
        ':red_apple:',
        ':apple:',
        '红色美丽苹果',
        ':red:'
    ],
    '🍏': [
        '绿色苹果',
        ':green_apple:',
        ':apple:',
        '金色美味苹果',
        '格兰尼·史密斯苹果',
        ':green:'
    ],
    '🍐': [
        '宠物',
        ':pear:'
    ],
    '🍑': [
        '山羊',
        ':peach:',
        '底部',
        '布特特',
        ':orange:',
        ':pink:'
    ],
    '🍒': [
        '切里斯',
        ':cherry:',
        '渡子',
        '野生宝箱',
        ':red:'
    ],
    '🍓': [
        '草莓智能手势',
        ':strawberry:',
        ':red:'
    ],
    '🥝': [
        'Kiwi 水果',
        ':kiwi:',
        '中国山羊浆果',
        '基维文',
        '基维水果',
        ':green:'
    ],
    '🍅': [
        'Tomato',
        ':tomato:',
        ':red:'
    ],
    '🥥': [
        '椰子',
        ':coconut:',
        'Cocoanut'
    ],
    '🥑': [
        'Avocado',
        ':avocado:',
        ':green:'
    ],
    '🍆': [
        '鸡蛋',
        ':eggplant:',
        ':aubergine:',
        'Aubergine',
        '语句',
        '紫色蔬菜：',
        ':purple:'
    ],
    '🥔': [
        '土豆案',
        ':potato:',
        '巴克土豆',
        '爱达荷波塔'
    ],
    '🥕': [
        '胡萝卜师',
        ':carrot:',
        ':orange:'
    ],
    '🌽': [
        '玉米之耳的耳机',
        ':ear_of_corn:',
        '玉米',
        'Corn On the Cob',
        '玉米',
        '玉米之鹰座'
    ],
    '🌶️': [
        '热肽段',
        ':hot_pepper:',
        'Chili Pepper',
        '皮科文',
        ':red:'
    ],
    '🥒': [
        '黄瓜座',
        ':cucumber:',
        '格尔金文',
        '选取项',
        ':green:'
    ],
    '🥬': [
        '叶绿灯',
        ':leafy_green:',
        '靴子',
        '华人客车',
        'Cos Lettuce',
        'Romaine Lettuce',
        '叶绿人',
        ':green:'
    ],
    '🥦': [
        'Brocoli',
        ':broccoli:',
        ':green:'
    ],
    '🍋‍🟩': [
        'Lime',
        ':lime:',
        ':green:'
    ],
    '🍄': [
        '马歇尔室',
        ':mushroom:',
        '聊天室',
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
        '努特斯',
        ':brown:'
    ],
    '🌰': [
        '坚固的胸甲',
        ':chestnut:',
        'Acorn',
        '努特文',
        ':brown:'
    ],
    '🍞': [
        '面包',
        ':bread:',
        '面包图',
        ':brown:'
    ],
    '🥐': [
        'Croissant',
        ':croissant:',
        ':brown:'
    ],
    '🥖': [
        'Baguette 面包',
        ':baguette_bread:',
        '法语面包',
        '巴吉特',
        ':brown:'
    ],
    '🥨': [
        'Pretzel',
        ':pretzel:',
        ':brown:'
    ],
    '🥯': [
        '巴盖尔',
        ':bagel:',
        ':brown:'
    ],
    '🥞': [
        '南克',
        ':pancakes:',
        '爬行者',
        '热箱',
        ':yellow:'
    ],
    '🧀': [
        '奶酪[等腰斜面]',
        ':cheese_wedge:',
        '作弊模式',
        ':yellow:'
    ],
    '🍖': [
        '骨上的肉',
        ':meat_on_bone:',
        'BQ',
        'Barbecue',
        '曼加肉',
        ':red:'
    ],
    '🍗': [
        'Poultry Leg',
        ':poultry_leg:',
        '鼓棍子',
        '土耳其列克',
        ':red:'
    ],
    '🥩': [
        '切割肉',
        ':cut_of_meat:',
        '肉',
        '斯泰克',
        ':red:'
    ],
    '🥓': [
        '巴昆文',
        ':bacon:',
        'Rashers',
        ':red:'
    ],
    '🍔': [
        '汉堡语',
        ':hamburger:',
        'Burger',
        '谢斯伯格尔'
    ],
    '🍟': [
        '法国Fries',
        ':french_fries:',
        '奇普斯',
        '朋友',
        '麦克唐纳朋友',
        ':yellow:'
    ],
    '🍕': [
        '比萨文',
        ':pizza:',
        'Peperoni Pizza',
        '比萨的切片',
        ':red:'
    ],
    '🌭': [
        '热门',
        ':hot_dog:',
        '热点',
        '萨沃斯',
        ':red:'
    ],
    '🥪': [
        '桑威奇州',
        ':sandwich:'
    ],
    '🌮': [
        '塔科',
        ':taco:'
    ],
    '🌯': [
        'Burrito',
        ':burrito:',
        '换行'
    ],
    '🥙': [
        '填充平面包',
        ':stuffed_flatbread:',
        'Doner Kebab',
        'Gyro',
        '沙瓦尔马',
        '皮塔桑威奇州'
    ],
    '🍳': [
        '烹饪中',
        ':cooking:',
        '早餐',
        '好友蛋',
        '碎式平移'
    ],
    '🥘': [
        '浅色的食物平移',
        ':shallow_pan_of_food:',
        'Paella',
        '食物平移'
    ],
    '🍲': [
        '食物点',
        ':pot_of_food:',
        '食物之球',
        '灵魂声',
        '剑士'
    ],
    '🥣': [
        '与Spoon一起弓箭手',
        ':bowl_with_spoon:',
        '谷物弓箭手'
    ],
    '🥗': [
        '绿色沙拉德',
        ':green_salad:',
        '沙拉德',
        ':green:'
    ],
    '🍿': [
        '弹出色',
        ':popcorn:',
        '弹出玉米'
    ],
    '🧂': [
        '盐类',
        ':salt:',
        'Salt Shaker',
        ':white:'
    ],
    '🥫': [
        '预制的Ê³ÎïÏûºÄÊ³ÎïÏûºÄÊ³Îï²úÁ¿µÄÊ³Îï²úÁ¿£¬²úÁ¿´ÎïÏûºó£¬²ú²ú²úÁ¿³Îï²úÁ¿£¬²úÁ¿´ó²ú²úÁ¿·£¡',
        ':canned_food:',
        '食物罐头',
        'Tin Can',
        '美味的食物：'
    ],
    '🍱': [
        'Bento Box',
        ':bento_box:',
        '午餐箱'
    ],
    '🍘': [
        '大米切克尔',
        ':rice_cracker:',
        '破片机'
    ],
    '🍙': [
        '水稻球',
        ':rice_ball:',
        'Onigiri'
    ],
    '🍚': [
        '煮熟的水稻',
        ':cooked_rice:',
        '水稻水管',
        '水稻',
        '稻谷之球',
        'Steam稻子'
    ],
    '🍛': [
        '宵禁水稻：',
        ':curry_rice:',
        '库里文',
        '印度粮食公司',
        '柯里和稻米公司'
    ],
    '🍜': [
        'Steam步枪',
        ':steaming_bowl:',
        'Noodles',
        '带有聊天标志的噪音',
        '拉姆文'
    ],
    '🍝': [
        'Spaghetti',
        ':spaghetti:',
        '帕斯塔文'
    ],
    '🍠': [
        '旋转的甜蜜土豆',
        ':roasted_sweet_potato:',
        '甜蜜土豆',
        'Yam'
    ],
    '🍢': [
        '奥登省',
        ':oden:',
        'Kebab',
        '切换器'
    ],
    '🍣': [
        '苏希文',
        ':sushi:',
        'Sashimi',
        '1. 海食',
        ':pink:'
    ],
    '🍤': [
        '好斗的虾类',
        ':fried_shrimp:',
        '弗里德·普拉恩文',
        '虾Tempura'
    ],
    '🍥': [
        '鱼蛋糕与猪肉',
        ':fish_cake_with_swirl:',
        '鱼蛋糕！',
        'Pink Swirl'
    ],
    '🥮': [
        '月球蛋糕座',
        ':moon_cake:',
        '月考克'
    ],
    '🍡': [
        'Dango',
        ':dango:',
        '德斯特·斯克',
        '粉红色白色绿色球'
    ],
    '🥟': [
        '反转',
        ':dumpling:',
        'Empanada',
        'Pierogi'
    ],
    '🥠': [
        '幸运的 Cookie',
        ':fortune_cookie:'
    ],
    '🥡': [
        '弹出框',
        ':takeout_box:',
        '中国食物箱',
        'Oyster Pail'
    ],
    '🍦': [
        '软冰克里姆',
        ':soft_ice_cream:',
        '惠普先生',
        '软服务'
    ],
    '🍧': [
        'Shaved Ice',
        ':shaved_ice:',
        '雪锥形'
    ],
    '🍨': [
        '冰箱',
        ':ice_cream:',
        '冰激素之球',
        '德斯特'
    ],
    '🍩': [
        '坚固战利品',
        ':doughnut:',
        'Donut'
    ],
    '🍪': [
        'Cookie',
        ':cookie:',
        '比斯库伊特',
        '巧克力Chip Cookie',
        ':brown:'
    ],
    '🎂': [
        '生日蛋糕。',
        ':birthday_cake:',
        '生日',
        '蛋糕！',
        '蛋糕带糖果。'
    ],
    '🍰': [
        '短蛋糕！',
        ':shortcake:',
        '蛋糕！',
        '蛋糕块',
        '草莓短cake'
    ],
    '🧁': [
        '杯子',
        ':cupcake:',
        '美丽蛋糕！'
    ],
    '🥧': [
        'Pie',
        ':pie:'
    ],
    '🍫': [
        '巧克力条',
        ':chocolate_bar:',
        '糖果栏',
        '巧克力者',
        ':brown:'
    ],
    '🍬': [
        '糖果座',
        ':candy:',
        'Lolly',
        '甜蜜座'
    ],
    '🍭': [
        'Lollipop',
        ':lollipop:',
        '苏克尔'
    ],
    '🍮': [
        '库塔德',
        ':custard:',
        'Creme Caramel',
        '德斯特',
        '平兰',
        '正在推送'
    ],
    '🍯': [
        '蜂蜜Pot',
        ':honey_pot:',
        '蜂蜜。',
        '点数',
        ':yellow:'
    ],
    '🍼': [
        '婴儿瓶子',
        ':baby_bottle:',
        '瓶子饲料'
    ],
    '🥛': [
        '牛奶的玻璃子',
        ':glass_of_milk:',
        '牛奶座',
        ':white:'
    ],
    '☕': [
        '热饮料',
        ':hot_beverage:',
        '咖啡店',
        'Espresso',
        '霍科拉特',
        '茶色'
    ],
    '🍵': [
        '没有处理的Teacup',
        ':green_tea:',
        '绿色茶色',
        'Matcha',
        'Matcha Green Tea',
        ':green:'
    ],
    '🍶': [
        'Sake',
        ':sake:',
        '瓶子',
        '大米威尼',
        '萨克瓶和杯子'
    ],
    '🍾': [
        '带有弹出公司的瓶子',
        ':champagne:',
        '庆祝活动',
        'Champagne',
        '雪松葡萄酒座'
    ],
    '🍷': [
        '葡萄糖玻璃子',
        ':wine_glass:',
        '酒类',
        '红Wine',
        '威尼'
    ],
    '🍸': [
        '鸡尾酒玻璃子',
        ':cocktail_glass:',
        '鸡尾鱼',
        '马提尼'
    ],
    '🍹': [
        '热带饮料',
        ':tropical_drink:',
        '水果拳击手',
        'Tiki 饮料'
    ],
    '🍺': [
        '啤酒Mug',
        ':beer_mug:',
        '比尔',
        '啤酒Stein',
        ':yellow:'
    ],
    '🍻': [
        '闪烁啤酒Mugs',
        ':clinking_beer_mugs:',
        '比尔斯',
        '作弊模式'
    ],
    '🥂': [
        '闪烁眼镜',
        ':clinking_glasses:',
        '庆祝活动',
        'Champagne Glasses',
        '作弊模式'
    ],
    '🥃': [
        '突变玻璃板',
        ':tumbler_glass:',
        '博尔卡',
        '酒类',
        'Rum',
        'Whiskey',
        'Whisky'
    ],
    '🥤': [
        '带草的杯子',
        ':cup_with_straw:',
        '密尔克晃动',
        '平滑模式',
        '索达弹头',
        '软饮料'
    ],
    '🥢': [
        '棍子',
        ':chopsticks:'
    ],
    '🍽️': [
        '叉和刀带板',
        ':fork_and_knife_with_plate:',
        '餐厅',
        ':white:',
        ':gray:',
        ':grey:'
    ],
    '🍴': [
        'Fork 和 Knife',
        ':fork_and_knife:',
        '切换器',
        '刀和派生工具',
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
        '大尔文',
        ':garlic:'
    ],
    '🧅': [
        '奥尼昂州',
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
        '布特特',
        ':butter:'
    ],
    '🦪': [
        '奥斯特尔',
        ':oyster:'
    ],
    '🧃': [
        '饮料箱',
        ':beverage_box:',
        'Juice Box'
    ],
    '🧉': [
        '导师饮料',
        ':mate_drink:',
        '奇马尔拉沃索',
        'Cimarrón',
        '耶尔巴梅特'
    ],
    '🫒': [
        '橄榄色',
        ':olive:',
        ':green:'
    ],
    '🫐': [
        '蓝色浆果',
        ':blueberries:',
        ':blue:'
    ],
    '🫑': [
        '响铃肽段',
        ':bell_pepper:',
        ':green:'
    ],
    '🫓': [
        '平面包',
        ':flatbread:'
    ],
    '🫔': [
        '塔马勒语',
        ':tamale:',
        '塔迈尔'
    ],
    '🫕': [
        'Fondue',
        ':fondue:'
    ],
    '🧋': [
        '泡泡茶色',
        ':boba:',
        'Boba'
    ],
    '🧊': [
        '冰立方体',
        ':ice_cube:'
    ],
    '🫘': [
        'Beans',
        'Flatulence',
        ':beans:',
        '咖啡豆类',
        'Spill the beans'
    ],
    '🫗': [
        '吸血液量',
        ':puring_liquid:',
        '饮料',
        '水'
    ]
};
/*flags*/
emojis_language[lang][7] = {
    '🏁': [
        '廉价标志',
        ':chequered_flag:',
        '检查标记',
        '网格Girl',
        '竞赛标志',
        ':black:',
        ':white:'
    ],
    '🚩': [
        '三角标志',
        ':triangular_flag:',
        '在极地上标记',
        '红色标志',
        '帖子上的三角标志',
        ':red:'
    ],
    '🎌': [
        '交叉标志',
        ':crossed_flags:',
        '两个标志'
    ],
    '🏴': [
        '黑色标志',
        ':black_flag:',
        '挥舞黑标志',
        ':black:'
    ],
    '🏳️': [
        '白标志',
        ':white_flag:',
        '擦除白色标志',
        ':white:'
    ],
    '🏳️‍🌈': [
        '彩虹标志',
        ':rainbow_flag:',
        'Pride Flag',
        'LGBT',
        'LGBTQIA+',
        '盖伊文',
        '变形',
        'Lesbian',
        '阿塞克尔',
        'Queer'
    ],
    '🏳️‍⚧️': [
        '转发标志',
        ':transgender_flag:',
        '蓝色、粉红色和白旗。',
        'Trans 标志',
        'Blue',
        'Pink'
    ],
    '🏴‍☠️': [
        '海盗标志',
        ':pirate_flag:',
        'Jolly Roger',
        ':black:',
        'Corsair',
        'Privateer',
        'Buccaneer'
    ],
    '🇺🇳': [
        '联合国的标志',
        ':un:',
        '标志：联合国'
    ],
    '🇪🇺': [
        '欧洲联盟的标志',
        ':eu:',
        '旗帜：欧洲联盟',
        'EU Flag'
    ],
    '🇦🇨': [
        '阿森松岛标志',
        ':ac:'
    ],
    '🇦🇩': [
        '安道尔标志',
        ':ad:',
        'Andorran Flag'
    ],
    '🇦🇪': [
        '阿拉伯联合酋长国国旗a',
        ':ae:',
        'Emirati Flag',
        'UAE 标志'
    ],
    '🇦🇫': [
        '阿富汗标志',
        ':af:',
        'Afghan Flag'
    ],
    '🇦🇬': [
        '安提瓜和巴布达的标志',
        ':ag:'
    ],
    '🇦🇮': [
        '二. 安圭拉标志',
        ':ai:',
        '安圭拉标志'
    ],
    '🇦🇱': [
        '阿尔巴尼亚标志',
        ':al:',
        '阿尔巴尼亚标志'
    ],
    '🇦🇲': [
        '亚美尼亚标志',
        ':am:',
        '亚美尼亚标志'
    ],
    '🇦🇴': [
        '安哥拉标志',
        ':ao:',
        '安哥拉标志'
    ],
    '🇦🇶': [
        '南极海生委的标志',
        ':aq:',
        '南极标志'
    ],
    '🇦🇷': [
        '阿根廷标志',
        ':ar:',
        '阿根廷标志'
    ],
    '🇦🇸': [
        '美属萨摩亚国旗。',
        ':as:',
        'American Samoan Flag'
    ],
    '🇦🇹': [
        '奥地利标志',
        ':at:',
        'Austrian Flag'
    ],
    '🇦🇺': [
        '澳大利亚的标志',
        ':au:',
        'Aussie 标志',
        '澳大利亚标志'
    ],
    '🇦🇼': [
        '阿鲁巴的标志',
        ':aw:',
        '阿鲁巴标志'
    ],
    '🇦🇽': [
        '阿特兰群岛标志',
        ':ax:',
        '阿塞特兰标志'
    ],
    '🇦🇿': [
        '阿塞拜疆国旗案',
        ':az:',
        '阿塞拜疆标志'
    ],
    '🇧🇦': [
        '波斯尼亚和黑塞哥维那标志',
        ':ba:'
    ],
    '🇧🇧': [
        '巴巴多斯标志',
        ':bb:',
        '巴巴多斯标志',
        'Bajan 标志'
    ],
    '🇧🇩': [
        '孟加拉国的标志',
        ':bd:',
        'Bangladeshi Flag'
    ],
    '🇧🇪': [
        '比利时标志',
        ':be:',
        '比利时标志'
    ],
    '🇧🇫': [
        '布基纳法索的标志',
        ':bf:',
        '布基纳法索标志'
    ],
    '🇧🇬': [
        'Bulgaria',
        ':bg:',
        '保加利亚标志'
    ],
    '🇧🇭': [
        '巴林标志',
        ':bh:',
        '巴赫拉尼标志',
        '巴林标志'
    ],
    '🇧🇮': [
        '布隆迪标志',
        ':bi:',
        'Burundian Flag'
    ],
    '🇧🇯': [
        '贝宁标志',
        ':bj:',
        '贝宁标志'
    ],
    '🇧🇱': [
        '圣巴特莱米的标志',
        ':bl:',
        '旗帜：圣巴泰勒米'
    ],
    '🇧🇲': [
        '百慕大国旗a',
        ':bm:',
        'Bermudan Flag'
    ],
    '🇧🇳': [
        '文莱的标志',
        ':bn:',
        '布鲁尼安标志'
    ],
    '🇧🇴': [
        '玻利维亚标志',
        ':bo:',
        'Bolivian Flag'
    ],
    '🇧🇶': [
        '加勒比荷兰旗帜。',
        ':bq:',
        'Bonaire'
    ],
    '🇧🇷': [
        '巴西标志',
        ':br:',
        '巴西标志'
    ],
    '🇧🇸': [
        '巴哈马标志',
        ':bs:',
        '巴哈马标志'
    ],
    '🇧🇹': [
        '不丹的标志',
        ':bt:',
        '不丹标志'
    ],
    '🇧🇻': [
        '布维特岛国旗图',
        ':bv:',
        '旗帜：布维特岛'
    ],
    '🇧🇼': [
        '博茨瓦纳标志',
        ':bw:',
        'Batswana Flag'
    ],
    '🇧🇾': [
        '白俄罗斯国旗：',
        ':by:',
        '白俄罗斯标志'
    ],
    '🇧🇿': [
        '伯利兹标志',
        ':bz:',
        '伯利兹标志'
    ],
    '🇨🇦': [
        '加拿大标志',
        '加拿大标志',
        ':ca:'
    ],
    '🇨🇨': [
        '可可(基林)群岛',
        ':cc:'
    ],
    '🇨🇩': [
        'Flag of Congo - Kinshasa',
        ':cd:'
    ],
    '🇨🇫': [
        '中非共和国的标志',
        ':cf:',
        '中部非洲标志'
    ],
    '🇨🇬': [
        '刚果国旗-布拉柴维尔',
        ':cg:'
    ],
    '🇨🇭': [
        '瑞士标志',
        ':ch:',
        'Red Cross',
        '瑞士标志'
    ],
    '🇨🇮': [
        '象牙海岸标志',
        ':ci:',
        'Flag: Côte d’Ivoire'
    ],
    '🇨🇰': [
        '库克群岛的标志',
        ':ck:',
        '库克群岛岛民标志'
    ],
    '🇨🇱': [
        '智利标志',
        ':cl:',
        '智利标志'
    ],
    '🇨🇲': [
        '喀麦隆标志',
        ':cm:',
        '喀麦隆标志'
    ],
    '🇨🇳': [
        '中国标志',
        ':cn:',
        '中文标志'
    ],
    '🇨🇴': [
        '哥伦比亚标志',
        ':co:',
        '哥伦比亚标志'
    ],
    '🇨🇵': [
        '克利珀顿岛的标志',
        ':cp:',
        '旗帜： 克利珀顿岛'
    ],
    '🇨🇷': [
        '哥斯达黎加标志',
        ':cr:',
        '哥斯达黎加标志'
    ],
    '🇨🇺': [
        '古巴旗帜：',
        ':cu:',
        '古巴标志'
    ],
    '🇨🇻': [
        '佛得角标志',
        ':cv:',
        '佛得角标志'
    ],
    '🇨🇼': [
        '库拉索岛标志',
        ':cw:',
        'Curaçaoan Flag'
    ],
    '🇨🇽': [
        '圣诞岛标志',
        ':cx:',
        '圣诞岛标志'
    ],
    '🇨🇾': [
        '塞浦路斯标志',
        ':cy:',
        '塞浦路斯标志'
    ],
    '🇨🇿': [
        '捷克徽章',
        ':cz:',
        '捷克标志'
    ],
    '🇩🇪': [
        '德国标志',
        ':de:',
        'Deutsch 标志',
        '德国标志'
    ],
    '🇩🇬': [
        'Diego Garcia的标志',
        ':dg:',
        '旗帜： Diego Garcia'
    ],
    '🇩🇯': [
        '吉布提标志',
        ':dj:',
        'Djibouti Flag',
        'Djiboutian Flag'
    ],
    '🇩🇰': [
        '丹麦标志',
        ':dk:',
        '丹麦标志'
    ],
    '🇩🇲': [
        '多米尼克的标志',
        ':dm:'
    ],
    '🇩🇴': [
        '多米尼加共和国的标志',
        ':do:',
        'Tom Rep 标志',
        '多米尼加标志'
    ],
    '🇩🇿': [
        '阿尔及利亚的标志',
        ':dz:',
        'Algerian Flag'
    ],
    '🇪🇦': [
        '休达和梅利利亚标志',
        ':ea:',
        '梅利利亚的标志',
        '休达的标志',
        'Flag: Ceuta & Melilla'
    ],
    '🇪🇨': [
        '厄瓜多尔标志',
        ':ec:',
        'Ecuadorian Flag'
    ],
    '🇪🇪': [
        '爱沙尼亚标志',
        ':ee:',
        '爱沙尼亚标志'
    ],
    '🇪🇬': [
        '埃及标志',
        ':eg:',
        '埃及标志'
    ],
    '🇪🇭': [
        '2. 西撒哈拉旗帜。',
        ':eh:',
        '西撒哈拉标志'
    ],
    '🇪🇷': [
        '厄立特里亚的标志',
        ':er:',
        'Eritrean Flag'
    ],
    '🇪🇹': [
        '埃塞俄比亚标志',
        ':et:',
        'Ethiopian Flag'
    ],
    '🇪🇸': [
        '西班牙标志',
        ':es:',
        '西班牙标志'
    ],
    '🇫🇮': [
        '芬兰标志',
        ':fi:',
        '芬兰标志'
    ],
    '🇫🇯': [
        '斐济标志',
        ':fj:',
        'Fijian Flag'
    ],
    '🇫🇰': [
        '福克兰群岛的标志',
        ':fk:',
        'Falklander 标志'
    ],
    '🇫🇲': [
        '密克罗尼西亚标志',
        ':fm:',
        '密克罗尼西亚标志'
    ],
    '🇫🇴': [
        '法罗群岛标志',
        ':fo:',
        'Faroe Islander Flag'
    ],
    '🇫🇷': [
        '法国标志',
        ':fr:',
        '法国标志'
    ],
    '🇬🇦': [
        '加蓬标志',
        ':ga:',
        '加蓬标志'
    ],
    '🇬🇧': [
        '大不列颠标志',
        ':gb:',
        '英国标志',
        '联合王国',
        '联合杰克',
        '联合王国'
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
        '格林纳达的标志',
        ':gd:',
        '手榴弹标志'
    ],
    '🇬🇪': [
        '格鲁吉亚标志',
        ':ge:',
        '格鲁吉亚标志'
    ],
    '🇬🇫': [
        '法属圭亚那标志',
        ':gf:',
        '法国几内亚标志'
    ],
    '🇬🇬': [
        '格恩西岛的标志',
        ':gg:',
        'Guernsey Flag'
    ],
    '🇬🇭': [
        '加纳标志',
        ':gh:',
        '加纳标志'
    ],
    '🇬🇮': [
        '直布罗陀旗帜',
        ':gi:',
        '直布罗陀标志'
    ],
    '🇬🇱': [
        '格陵兰的标志',
        ':gl:',
        'Greenlandic Flag'
    ],
    '🇬🇲': [
        '冈比亚标志',
        ':gm:',
        'Gambian Flag'
    ],
    '🇬🇳': [
        '几内亚标志',
        ':gn:',
        'Guinean Flag'
    ],
    '🇬🇵': [
        '瓜德罗普的标志',
        ':gp:',
        '瓜德罗普恩标志'
    ],
    '🇬🇶': [
        '赤道几内亚的标志',
        ':gq:',
        'Equatorial Guinean Flag',
        '赤道仪标志'
    ],
    '🇬🇷': [
        '希腊标志',
        ':gr:',
        '希腊标志'
    ],
    '🇬🇸': [
        '南乔治亚岛和南桑威奇群岛',
        ':gs:'
    ],
    '🇬🇹': [
        '危地马拉标志',
        ':gt:',
        'Guatemalan Flag'
    ],
    '🇬🇺': [
        '关岛标志',
        ':gu:',
        '关岛标志',
        '查莫罗标志'
    ],
    '🇬🇼': [
        '几内亚比绍的标志',
        ':gw:',
        'Guinea-Bissau Flag'
    ],
    '🇬🇾': [
        '圭亚那的标志',
        ':gy:',
        '圭亚那标志'
    ],
    '🇭🇰': [
        '中国香港特别行政区标志',
        ':hk:',
        '香港标志'
    ],
    '🇭🇲': [
        '赫德和麦克唐纳群岛',
        ':hm:',
        '旗帜：赫德和麦克唐纳群岛'
    ],
    '🇭🇳': [
        '洪都拉斯国旗a',
        ':hn:',
        '洪都拉斯标志'
    ],
    '🇭🇷': [
        '克罗地亚标志',
        ':hr:',
        '克罗地亚标志'
    ],
    '🇭🇹': [
        '海地国旗组织',
        ':ht:',
        'Haitian Flag'
    ],
    '🇭🇺': [
        '匈牙利标志',
        ':hu:',
        '匈牙利标志'
    ],
    '🇮🇨': [
        '加那利群岛的标志',
        ':ic:'
    ],
    '🇮🇩': [
        '印度尼西亚标志',
        ':id:',
        '印度尼西亚标志'
    ],
    '🇮🇪': [
        '爱尔兰标志',
        ':ie:',
        '爱尔兰标志'
    ],
    '🇮🇱': [
        '以色列标志',
        ':il:',
        '以色列标志'
    ],
    '🇮🇲': [
        '马恩岛标志',
        ':im:',
        'Manx Flag'
    ],
    '🇮🇳': [
        '印度标志',
        ':in:',
        '印度标志'
    ],
    '🇮🇴': [
        '英属印度洋领土的标志',
        ':io:',
        '英属印度洋领土标志'
    ],
    '🇮🇶': [
        '2. 伊拉克标志',
        ':iq:',
        'Iraqi Flag'
    ],
    '🇮🇷': [
        '伊朗标志',
        ':ir:',
        '伊朗标志'
    ],
    '🇮🇸': [
        '冰岛标志',
        ':is:',
        '冰岛标志'
    ],
    '🇮🇹': [
        '意大利国旗：',
        ':it:',
        '意大利标志'
    ],
    '🇯🇪': [
        '泽西的标志',
        ':je:',
        '泽西岛标志'
    ],
    '🇯🇲': [
        '牙买加标志',
        ':jm:',
        '牙买加标志'
    ],
    '🇯🇴': [
        '约旦标志',
        ':jo:',
        '约旦标志'
    ],
    '🇯🇵': [
        '日本标志',
        ':jp:',
        '日本标志'
    ],
    '🇰🇪': [
        '肯尼亚标志',
        ':ke:',
        '肯尼亚标志'
    ],
    '🇰🇬': [
        '吉尔吉斯斯坦的标志',
        ':kg:',
        'Kyrgyzstani Flag'
    ],
    '🇰🇭': [
        '柬埔寨标志',
        ':kh:',
        '柬埔寨标志'
    ],
    '🇰🇮': [
        '基里巴斯的标志',
        ':ki:',
        'I-Kiribati 标志'
    ],
    '🇰🇲': [
        '科摩罗旗帜：',
        ':km:',
        '科摩罗标志'
    ],
    '🇰🇳': [
        '圣基茨和尼维斯的标志',
        ':kn:'
    ],
    '🇰🇵': [
        '北朝鲜的标志',
        ':kp:',
        '北朝鲜标志'
    ],
    '🇰🇷': [
        '南朝鲜的标志',
        ':kr:',
        '南朝鲜标志'
    ],
    '🇰🇼': [
        '科威特国旗a',
        ':kw:',
        'Kuwaiti Flag'
    ],
    '🇰🇾': [
        '开曼群岛的标志',
        ':ky:',
        '开曼标志'
    ],
    '🇰🇿': [
        '哈萨克斯坦标志',
        ':kz:',
        'Kazakhstani Flag',
        'Kazakh Flag'
    ],
    '🇱🇦': [
        '老挝的标志',
        ':la:',
        '老挝标志',
        '老挝标志'
    ],
    '🇱🇧': [
        '黎巴嫩标志',
        ':lb:',
        '黎巴嫩标志'
    ],
    '🇱🇨': [
        '圣卢西亚标志',
        ':lc:'
    ],
    '🇱🇮': [
        '列支敦士登标志',
        ':lt:',
        'Liechtensteiner 标志'
    ],
    '🇱🇰': [
        '斯里兰卡标志',
        ':lk:',
        '斯里兰卡标志'
    ],
    '🇱🇷': [
        '利比里亚国旗（利比里亚）',
        ':lr:',
        '利比里亚标志'
    ],
    '🇱🇸': [
        'Flag of Lesotho',
        ':ls:',
        'Basotho Flag'
    ],
    '🇱🇹': [
        '立陶宛的标志',
        ':lt:',
        '立陶宛标志'
    ],
    '🇱🇺': [
        '卢森堡标志',
        ':lu:',
        '卢森堡标志'
    ],
    '🇱🇻': [
        '拉脱维亚旗帜：',
        ':lv:',
        '拉脱维亚标志'
    ],
    '🇱🇾': [
        '利比亚标志',
        ':ly:',
        '利比亚标志'
    ],
    '🇲🇦': [
        '摩洛哥国旗案',
        ':ma:',
        '摩洛哥标志'
    ],
    '🇲🇨': [
        '摩纳哥标志',
        ':mc:',
        '摩纳哥公国标志'
    ],
    '🇲🇩': [
        '摩尔多瓦标志',
        ':md:',
        '摩尔多瓦标志'
    ],
    '🇲🇪': [
        '黑山的标志',
        ':me:',
        '黑山标志'
    ],
    '🇲🇫': [
        '圣马丁的标志',
        ':mf:',
        'Flag: St. Martin'
    ],
    '🇲🇬': [
        '马达加斯加的国旗：',
        ':mg:',
        'Madagascan Flag'
    ],
    '🇲🇭': [
        '马绍尔群岛的标志',
        ':mh:',
        '马歇尔标志'
    ],
    '🇲🇰': [
        '马其顿标志',
        ':mk:',
        '马其顿标志'
    ],
    '🇲🇱': [
        '马里标志',
        ':ml:',
        '马里标志'
    ],
    '🇲🇲': [
        '缅甸国旗（缅甸）',
        ':mm:',
        '缅甸标志',
        '缅甸的标志',
        '缅甸标志'
    ],
    '🇲🇳': [
        '蒙古国标志',
        ':mn:',
        '蒙古标志'
    ],
    '🇲🇴': [
        '中国澳门标志',
        ':mo:',
        'Macanese 标志'
    ],
    '🇲🇵': [
        '北马里亚纳群岛标志',
        ':mp:',
        '密克罗尼西亚标志'
    ],
    '🇲🇶': [
        '马提尼克标志',
        ':mq:',
        '马提尼克斯国旗的蛇座',
        '马提尼克斯标志'
    ],
    '🇲🇷': [
        '毛里塔尼亚国旗a',
        ':mr:',
        '毛里塔尼亚标志'
    ],
    '🇲🇸': [
        'Flag of Montserrat',
        ':ms:',
        'Montserratian Flag'
    ],
    '🇲🇹': [
        '马耳他标志',
        ':mt:',
        'Maltese Flag'
    ],
    '🇲🇺': [
        'Flag of Mauritius',
        ':mu:',
        '毛里求斯标志'
    ],
    '🇲🇻': [
        '马尔代夫的标志',
        ':mv:',
        '马尔代夫标志'
    ],
    '🇲🇼': [
        '马拉维的标志',
        ':mw:',
        'Malawian Flag'
    ],
    '🇲🇽': [
        '墨西哥标志',
        ':mx:',
        '墨西哥标志'
    ],
    '🇲🇾': [
        '马来西亚标志',
        ':my:',
        'Malaysian Flag'
    ],
    '🇲🇿': [
        '莫桑比克的标志',
        ':mz:',
        '莫桑比克标志'
    ],
    '🇳🇦': [
        '纳米比亚标志',
        ':na:',
        'Namibian Flag'
    ],
    '🇳🇨': [
        '新喀里多尼亚的标志',
        ':nc:',
        '新喀里多尼亚标志'
    ],
    '🇳🇪': [
        '尼日尔标志',
        ':ne:',
        'Nigeren 标志'
    ],
    '🇳🇫': [
        '诺福尔克岛的标志',
        ':nf:',
        '诺福尔克岛标志'
    ],
    '🇳🇬': [
        '尼日利亚国旗a',
        ':ng:',
        '尼日利亚标志'
    ],
    '🇳🇮': [
        'Flag of Nicaragua',
        ':ni:',
        'Nicaraguan Flag'
    ],
    '🇳🇱': [
        '荷兰标志',
        ':nl:',
        '荷兰标志',
        '霍兰'
    ],
    '🇳🇴': [
        '挪威标志',
        ':no:',
        '挪威标志'
    ],
    '🇳🇵': [
        '尼泊尔国旗a',
        ':np:',
        '尼泊尔标志'
    ],
    '🇳🇷': [
        '瑙鲁的标志',
        ':nr:',
        'Nauruan Flag'
    ],
    '🇳🇺': [
        '纽埃标志',
        ':nu:',
        'Niuean Flag'
    ],
    '🇳🇿': [
        '新西兰的标志',
        ':nz:',
        'Kiwi 标志'
    ],
    '🇴🇲': [
        '阿曼标志',
        ':om:',
        '阿曼标志'
    ],
    '🇵🇦': [
        '巴拿马标志',
        ':pa:',
        '巴拿马标志'
    ],
    '🇵🇪': [
        '秘鲁标志',
        ':pe:',
        '秘鲁标志'
    ],
    '🇵🇫': [
        '法属波利尼西亚旗标',
        ':pf:',
        '法属波利尼西亚标志'
    ],
    '🇵🇬': [
        '巴布亚新几内亚的国旗：',
        ':pg:',
        'PNG 标志',
        'Papua New Guinean Flag'
    ],
    '🇵🇭': [
        '菲律宾标志',
        ':ph:'
    ],
    '🇵🇰': [
        '巴基斯坦国旗（国旗）',
        ':pk:',
        '巴基斯坦标志'
    ],
    '🇵🇱': [
        '波兰标志',
        ':pl:',
        '波兰标志'
    ],
    '🇵🇲': [
        '圣皮埃尔和密克隆的标志',
        ':pm:'
    ],
    '🇵🇳': [
        '皮特凯恩国旗案',
        ':pn:'
    ],
    '🇵🇷': [
        '波多黎各旗帜',
        ':pr:',
        '波多黎各标志'
    ],
    '🇵🇸': [
        '巴勒斯坦领土的标志',
        ':ps:',
        'Palestine'
    ],
    '🇵🇹': [
        '葡萄牙的标志',
        ':pt:',
        '葡萄牙标志'
    ],
    '🇵🇼': [
        '帕劳的标志',
        ':pw:',
        '帕劳标志'
    ],
    '🇵🇾': [
        '巴拉圭标志',
        ':py:',
        'Paraguayan Flag'
    ],
    '🇶🇦': [
        '1. 卡塔尔标志',
        ':qa:',
        'Qatari 标志'
    ],
    '🇷🇪': [
        '留尼旺的标志',
        ':re:',
        'Reunionnais 标志'
    ],
    '🇷🇴': [
        '罗马尼亚标志',
        ':ro:',
        '罗马尼亚标志'
    ],
    '🇷🇸': [
        '塞尔维亚的标志',
        ':rs:',
        '塞尔维亚标志'
    ],
    '🇷🇺': [
        '俄罗斯标志',
        ':ru:',
        '俄国标志'
    ],
    '🇷🇼': [
        'Flag of Rwanda',
        ':rw:',
        'Rwandan Flag'
    ],
    '🇸🇦': [
        '沙特阿拉伯国旗a',
        ':sa:',
        '沙特阿拉伯标志'
    ],
    '🇸🇧': [
        '所罗门群岛的标志',
        ':sb:',
        'Solomon Islander flags'
    ],
    '🇸🇨': [
        '塞舌尔国旗案',
        ':sc:',
        'Seychellois Flag'
    ],
    '🇸🇩': [
        '苏丹标志',
        ':sd:',
        'Sudanese Flag'
    ],
    '🇸🇪': [
        '瑞典的标志',
        ':se:',
        '瑞典标志'
    ],
    '🇸🇬': [
        '新加坡的标志',
        ':sg:',
        '新加坡标志'
    ],
    '🇸🇭': [
        '3. 圣赫勒拿的旗子',
        ':sh:'
    ],
    '🇸🇮': [
        '斯洛文尼亚的标志',
        ':si:',
        '斯洛文尼亚标志'
    ],
    '🇸🇯': [
        '斯瓦尔巴和扬马延的标志',
        ':sj:'
    ],
    '🇸🇰': [
        '斯洛伐克的国旗：',
        ':sk:',
        '斯洛伐克标志',
        'Slovakian Flag'
    ],
    '🇸🇱': [
        '塞拉利昂标志',
        ':sl:',
        'Sierra Leonean Flag'
    ],
    '🇸🇲': [
        '圣马力诺标志',
        ':sm:',
        'Sammarinese 标志'
    ],
    '🇸🇳': [
        '塞内加尔标志',
        ':sn:',
        'Sengalese标志'
    ],
    '🇸🇴': [
        '索马里的标志',
        ':so:',
        'Somalian Flag'
    ],
    '🇸🇷': [
        '苏里南标志',
        ':sr:',
        '苏里南标志'
    ],
    '🇸🇸': [
        '苏丹南部的标志',
        ':ss:',
        '南苏丹标志'
    ],
    '🇸🇹': [
        'Saato Tomeconnectic & Principe 的标志',
        ':st:'
    ],
    '🇸🇻': [
        '萨尔瓦多标志',
        ':sv:',
        '萨尔瓦多标志'
    ],
    '🇸🇽': [
        '圣马丁的标志',
        ':sx:'
    ],
    '🇸🇾': [
        '叙利亚标志',
        ':sy:',
        '叙利亚标志'
    ],
    '🇸🇿': [
        '斯威士兰国旗号',
        ':sz:',
        'Eswatini 标志'
    ],
    '🇹🇦': [
        'Flag of Tristan Da Cunha',
        ':ta:'
    ],
    '🇹🇨': [
        '特克斯和凯科斯群岛',
        ':tc:'
    ],
    '🇹🇩': [
        '乍得标志',
        ':td:',
        '乍得标志'
    ],
    '🇹🇫': [
        '法属南方领土的标志',
        ':tf:',
        '法国南方土地标志'
    ],
    '🇹🇬': [
        '多哥标志',
        ':tg:',
        'Togolese Flag'
    ],
    '🇹🇭': [
        '泰国标志',
        ':th:',
        '泰国标志'
    ],
    '🇹🇯': [
        '塔吉克斯坦的标志',
        ':tj:',
        '塔吉克标志'
    ],
    '🇹🇰': [
        '托克劳国旗（托克劳）',
        ':tk:',
        '托克劳标志'
    ],
    '🇹🇱': [
        '东帝汶的标志',
        ':tl:',
        '东帝汶标志',
        '东帝汶标志'
    ],
    '🇹🇲': [
        '土库曼斯坦的标志',
        ':tm:',
        'Turkmen Flag'
    ],
    '🇹🇳': [
        '突尼斯标志',
        ':tn:',
        '突尼斯标志'
    ],
    '🇹🇴': [
        '汤加的标志',
        ':to:',
        'Tongan Flag'
    ],
    '🇹🇷': [
        '土耳其国旗案',
        ':tr:',
        '土耳其标志'
    ],
    '🇹🇹': [
        '特立尼达和多巴哥的国旗：',
        ':tt:'
    ],
    '🇹🇻': [
        '图瓦卢的标志',
        ':tv:',
        '图瓦卢标志'
    ],
    '🇹🇼': [
        '台湾标志',
        ':tw:',
        '台湾标志'
    ],
    '🇹🇿': [
        '坦桑尼亚标志',
        ':tz:',
        'Tanzanian Flag'
    ],
    '🇺🇦': [
        '乌克兰标志',
        ':ua:',
        '乌克兰标志'
    ],
    '🇺🇬': [
        '乌干达标志',
        ':ug:',
        '乌干达标志'
    ],
    '🇺🇲': [
        '旗帜：美国外围群岛',
        ':um:'
    ],
    '🇺🇸': [
        '美国标志',
        ':us:',
        '美国标志',
        '美国标志'
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
        '罗马教廷的标志',
        ':va:',
        'Vanticanien 标志'
    ],
    '🇻🇨': [
        '圣文森特和格林纳丁斯',
        ':vc:'
    ],
    '🇻🇪': [
        '委内瑞拉标志',
        ':ve:',
        '委内瑞拉标志'
    ],
    '🇻🇬': [
        '四. 英属维尔京群岛的标志',
        ':vg:',
        '四. 英属维尔京群岛的标志'
    ],
    '🇻🇮': [
        '美属维尔京群岛标志',
        ':vi:',
        '美属维尔京群岛旗帜'
    ],
    '🇻🇳': [
        '越南标志',
        ':vn:',
        '越南标志'
    ],
    '🇻🇺': [
        'Flag of Vanuatu',
        ':vu:',
        'Ni-Vanuatu Flag'
    ],
    '🇼🇫': [
        '瓦利斯和富图纳的标志',
        ':wf:'
    ],
    '🇼🇸': [
        '萨摩亚国旗：',
        ':ws:',
        'Samoan Flag'
    ],
    '🇽🇰': [
        '科索沃标志',
        ':xk:',
        'Kosovar Flag'
    ],
    '🇾🇪': [
        '也门标志',
        ':ye:',
        '也门标志'
    ],
    '🇾🇹': [
        '马约特的标志',
        ':yt:',
        '马约特标志'
    ],
    '🇿🇦': [
        '南非标志',
        ':za:',
        '南非标志'
    ],
    '🇿🇲': [
        '赞比亚标志',
        ':zm:',
        'Zambian Flag'
    ],
    '🇿🇼': [
        '津巴布韦标志',
        ':zw:',
        '津巴布韦标志',
        'Zim 标志'
    ]
};
/*sports*/
emojis_language[lang][8] = {
    '🧗{{skin_tone}}‍♂️': [
        '男人爬上',
        ':man_climbing:',
        ':climbing:',
        '男性岩石爬行',
        '人类爬行者',
        ':man:'
    ],
    '🧗{{skin_tone}}‍♀️': [
        '妇女爬上',
        ':woman_climbing:',
        ':climbing:',
        '女岩石爬行者',
        '妇女爬行',
        ':woman:'
    ],
    '🧗{{skin_tone}}': [
        '有人爬上',
        ':person_climbing:',
        ':climbing:',
        '人员岩石爬行',
        '守卫者',
        ':person:'
    ],
    '🏇{{skin_tone}}': [
        '马赛克',
        ':horse_racing:',
        '马比赛',
        'Jockey'
    ],
    '⛷{{skin_tone}}‍️': [
        '斯基尔',
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
        '妇女戈尔夫',
        ':woman_golfer:',
        ':golfer:',
        ':woman:'
    ],
    '🏌️{{skin_tone}}': [
        '高尔夫人',
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
        '妇女冲浪者',
        ':woman_surfer:',
        ':surfer:',
        ':woman:'
    ],
    '🏄{{skin_tone}}': [
        '人物Surfer',
        ':person_surfer:',
        ':surfer:',
        ':person:'
    ],
    '🚣{{skin_tone}}‍♂️': [
        '男人降落船',
        ':man_rowing_boat:',
        ':rowing_boat:',
        ':man:'
    ],
    '🚣{{skin_tone}}‍♀️': [
        '妇女发波船',
        ':woman_rowing_boat:',
        ':rowing_boat:',
        ':woman:'
    ],
    '🚣{{skin_tone}}': [
        '人员照射船',
        ':person_rowing_boat:',
        ':rowing_boat:',
        ':person:'
    ],
    '🏊{{skin_tone}}‍♂️': [
        '人游泳中',
        ':man_swimming:',
        ':swimming:',
        '人游泳者',
        ':man:'
    ],
    '🏊{{skin_tone}}‍♀️': [
        '妇女游泳。',
        ':woman_swimming:',
        ':swimming:',
        '妇女游泳者',
        ':woman:'
    ],
    '🏊{{skin_tone}}': [
        '人员游泳中',
        ':person_swimming:',
        ':swimming:',
        '人员游泳者',
        ':person:'
    ],
    '⛹{{skin_tone}}‍️‍♂️': [
        '男人弹出球',
        ':man_bouncing_ball:',
        ':bouncing_ball:',
        'Man 篮球玩家',
        ':man:'
    ],
    '⛹️{{skin_tone}}‍♀️': [
        '妇女弹出球',
        ':woman_bouncing_ball:',
        ':boucing_ball:',
        '妇女篮球玩家',
        ':woman:'
    ],
    '⛹️{{skin_tone}}': [
        '人员弹出球',
        ':person_bouncing_ball:',
        ':boucing_ball:',
        '人员篮球玩家',
        ':person:'
    ],
    '🏋️{{skin_tone}}‍♂️': [
        '人提升权重',
        ':man_lifting_weights:',
        ':lifting_weights:',
        '重量器',
        ':man:'
    ],
    '🏋️{{skin_tone}}‍♀️': [
        '妇女提升权重',
        ':woman_lifting_weights:',
        ':lifting_weights:',
        '妇女重力',
        ':woman:'
    ],
    '🏋️{{skin_tone}}': [
        '人员升起权重',
        ':person_lifting_weights:',
        ':lifting_weights:',
        '人员重力',
        ':person:'
    ],
    '🚴{{skin_tone}}‍♂️': [
        '人自行车',
        ':man_biking:',
        ':biking:',
        '摩托车手',
        '男性骑士',
        ':man:'
    ],
    '🚴{{skin_tone}}‍♀️': [
        '妇女自行车',
        ':woman_biking:',
        ':biking:',
        '妇女骑自行车者',
        '女骑士',
        ':woman:'
    ],
    '🚴{{skin_tone}}': [
        '人生自行车',
        ':person_biking:',
        ':biking:',
        '人气自行车手',
        '人气自行车手',
        ':person:'
    ],
    '🚵{{skin_tone}}‍♂️': [
        '人山地自行车',
        ':man_mountain_bike:',
        ':mountain_bike:',
        'Man Mountain Biker',
        ':man:'
    ],
    '🚵{{skin_tone}}‍♀️': [
        '妇女山地自行车',
        ':woman_mountain_bike:',
        ':mountain_bike:',
        '妇女山地比克',
        ':woman:'
    ],
    '🚵{{skin_tone}}': [
        '人山地自行车',
        ':person_mountain_bike:',
        ':mountain_bike:',
        '人山地比克',
        ':person:'
    ],
    '🤸{{skin_tone}}‍♂️': [
        'Man Cartwheeling',
        ':man_cartwheeling:',
        ':cartwheeling:',
        '人做购物车车',
        ':man:'
    ],
    '🤸{{skin_tone}}‍♀️': [
        '妇女购物车中',
        ':woman_cartwheeling:',
        ':cartwheeling:',
        '妇女做购物车车',
        ':woman:'
    ],
    '🤸{{skin_tone}}': [
        '个人购物车中',
        ':person_cartwheeling:',
        ':cartwheeling:',
        '人做购物车车',
        ':person:'
    ],
    '🤼‍♂️': [
        '男人的衣服',
        ':men_wrestling:',
        ':wrestling:',
        '衣服',
        '勇士座',
        ':man:'
    ],
    '🤼‍♀️': [
        '妇女的衣服',
        ':women_wrestling:',
        ':wrestling:',
        '衣服',
        '勇士座',
        ':woman:'
    ],
    '🤼': [
        '人的衣服',
        ':people_wrestling:',
        ':wrestling:',
        '衣服',
        '勇士座',
        ':person:'
    ],
    '🤽{{skin_tone}}‍♂️': [
        '人类正在玩水极管',
        ':man_playing_water_polo:',
        ':playing_water_polo:',
        ':man:'
    ],
    '🤽{{skin_tone}}‍♀️': [
        '妇女正在玩水Polo',
        ':woman_playing_water_polo:',
        ':playing_water_polo:',
        ':woman:'
    ],
    '🤽{{skin_tone}}': [
        '正在玩水花团的人',
        ':person_playing_water_polo:',
        ':playing_water_polo:',
        ':person:'
    ],
    '🤾{{skin_tone}}‍♂️': [
        '人类正在玩手球',
        ':man_playing_handball:',
        ':playing_handball:',
        ':man:'
    ],
    '🤾{{skin_tone}}‍♀️': [
        '妇女玩手球',
        ':woman_playing_handball:',
        ':playing_handball:',
        ':woman:'
    ],
    '🤾{{skin_tone}}': [
        '人玩手球',
        ':person_playing_handball:',
        ':playing_handball:',
        ':person:'
    ],
    '🤹{{skin_tone}}‍♂️': [
        '男人拼凑的',
        ':man_juggling:',
        ':juggling:',
        '男Juggler',
        ':man:'
    ],
    '🤹{{skin_tone}}‍♀️': [
        '妇女拼凑的工作',
        ':woman_juggling:',
        ':juggling:',
        '女玩具',
        ':woman:'
    ],
    '🤹{{skin_tone}}': [
        '人贩子游戏',
        ':person_juggling:',
        ':juggling:',
        '人员任务程序',
        ':person:'
    ],
    '🧘{{skin_tone}}‍♂️': [
        'Lotus 位置中的人',
        ':man_lotus_position:',
        ':lotus_position:',
        '默思科',
        'Zen',
        '交叉腿部',
        '尤加文',
        ':man:'
    ],
    '🧘{{skin_tone}}‍♀️': [
        'Lotus 位置上的妇女',
        ':woman_lotus_position:',
        ':lotus_position:',
        '默思科',
        'Zen',
        '交叉腿部',
        '尤加文',
        ':woman:'
    ],
    '🧘{{skin_tone}}': [
        'Lotus 位置的人',
        ':person_lotus:_位置',
        ':lotus_position:',
        '默思科',
        'Zen',
        '交叉腿部',
        '尤加文',
        ':person:'
    ],
    '🏃{{skin_tone}}‍♂️': [
        '男人正在运行',
        ':man_running:',
        ':running:',
        ':man:'
    ],
    '🏃{{skin_tone}}‍♀️': [
        '妇女正在运行',
        ':woman_running:',
        ':running:',
        ':woman:'
    ],
    '🏃{{skin_tone}}': [
        '正在运行的人',
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
        '人舞蹈组织',
        ':man_dancing:',
        ':dancing:',
        ':man:'
    ],
    '💃{{skin_tone}}': [
        '妇女舞蹈组织',
        ':woman_dancing:',
        ':dancing:',
        ':woman:'
    ],
    '🤺': [
        '人员栅栏',
        ':person_fencing:',
        '花园师',
        ':fencing:'
    ],
    '🏆': [
        '奖品',
        ':trophy:',
        '冠军',
        '获胜者',
        ':gold:',
        ':yellow:'
    ],
    '🏅': [
        '体育勋章',
        ':sports_medal:',
        ':medal:',
        ':gold:',
        ':yellow:'
    ],
    '🥇': [
        '一等勋章',
        ':first_place_medal:',
        ':gold_medal:',
        '首地勋章',
        '金质勋章',
        ':yellow:',
        ':gold:'
    ],
    '🥈': [
        '第二个地方勋章',
        ':second_place_medal:',
        ':silver_medal:',
        '二等勋章',
        '银质勋章',
        ':gray:',
        ':grey:',
        ':silver:'
    ],
    '🥉': [
        '第三地勋章',
        ':third_place_medal:',
        ':bronze_medal:',
        '第三地勋章',
        '青铜勋章',
        ':brown:',
        ':bronze:'
    ],
    '⚽': [
        '足球',
        ':football:',
        '足球员',
        ':white:',
        ':black:'
    ],
    '⚾': [
        '棒球',
        ':baseball:',
        '软球',
        ':white:'
    ],
    '🥎': [
        '软球',
        ':softball:',
        ':yellow:'
    ],
    '🏀': [
        '篮球',
        ':basketball:',
        ':orange:',
        '篮球和钩子'
    ],
    '🏐': [
        '排球',
        ':volleyball:',
        ':white:'
    ],
    '🏈': [
        '美国足球',
        ':american_football:',
        '足球',
        'Gridiron',
        '超级机器人',
        ':brown:'
    ],
    '🏉': [
        '橄榄球足球',
        ':rugby:',
        '足球',
        '联赛',
        '橄榄球',
        '联盟'
    ],
    '🎾': [
        '特尼斯',
        ':tennis:',
        ':ball:',
        '球',
        '棋盘',
        '雷克',
        ':yellow:'
    ],
    '🥏': [
        '飞行磁盘',
        ':flying_disk:',
        '弗里斯波文'
    ],
    '🎳': [
        '波林省',
        ':bowling:',
        'Pins',
        'Skittles',
        '十个Pin Bowling'
    ],
    '🏏': [
        '板块',
        ':cricket:',
        '巴特',
        '球'
    ],
    '🏑': [
        '字段曲目',
        ':field_hockey:',
        '球',
        '棍子'
    ],
    '🏒': [
        '冰箱',
        ':ice_hockey:',
        '球',
        '棍子'
    ],
    '🥍': [
        '拉克鲁塞文',
        ':lacrosse:',
        '球',
        '棍子',
        ':red:'
    ],
    '🏓': [
        'Ping Pong',
        ':ping_pong:',
        ':table_tennis:',
        'Tennis',
        '球',
        'Paddle'
    ],
    '🏸': [
        'Badminton',
        ':badminton:',
        '交错锁',
        '雷克'
    ],
    '🥊': [
        '盒式手套',
        ':boxing_glove:',
        ':red:'
    ],
    '🥋': [
        '武术是统一的',
        ':martial_arts_uniform:',
        ':judo:',
        ':karate:',
        ':kung_fu:',
        '犹太语',
        '卡莱特',
        '昆福文'
    ],
    '⛳': [
        '在洞里的标志',
        ':flag_in_hole:',
        ':golf_flag:',
        '高尔夫标志'
    ],
    '⛸️': [
        '冰皮肤',
        ':ice_skate:',
        '跳过'
    ],
    '🎣': [
        '钓鱼',
        ':fishing:',
        '极形',
        '鱼类',
        '钓鱼Rod'
    ],
    '🎽': [
        '正在运行衬irt',
        ':running_shirt:',
        '单声道',
        '散列'
    ],
    '🎿': [
        '皮肤',
        ':skis:',
        '滑雪',
        '启动'
    ],
    '🛷': [
        '已删除',
        ':sled:'
    ],
    '🥌': [
        '曲线石头',
        ':curling_stone:'
    ],
    '🎯': [
        '直接命中',
        ':direct_hit:',
        '弓箭手',
        'Bullseye',
        '暗色'
    ],
    '🎱': [
        '池8球',
        ':pool_8_ball:',
        'Cue 球',
        'Snooker',
        '十亿人',
        ':black:'
    ],
    '🎮': [
        '视频游戏控制器',
        ':video_game_controller:',
        ':playstation:',
        ':xbox:',
        '播放站',
        'Xbox',
        '游戏键盘',
        'Wii U'
    ],
    '♟️': [
        '黑色国际象棋Pawn',
        ':black_chess_pawn:',
        ':black:'
    ],
    '🏹': [
        '弓箭头',
        ':arch:',
        'Arch'
    ],
    '🥅': [
        '目标网络',
        ':goal_net:'
    ],
    '🀄': [
        'Mahjong Red Dragon',
        ':mahjong:',
        '马赫永文',
        'Mahjong Tile',
        '中',
        'Mahjong Tile Red Dragon'
    ],
    '🎴': [
        '花卉播放卡',
        ':flower_playing_cards:',
        '牌组',
        'Hanafuda',
        'Hwatu',
        '播放卡片'
    ]
};
/*travel and places*/
emojis_language[lang][9] = {
    '🚂': [
        '蒸汽机车',
        ':steam_train:',
        '蒸汽火车',
        '铁路机车'
    ],
    '🚃': [
        '铁路车',
        ':railway_car:',
        '铁路车',
        '铁路车',
        '铁路运输',
        '火车道'
    ],
    '🚄': [
        '高速火车',
        ':high_speed_train:'
    ],
    '🚅': [
        '子弹火车',
        ':bullet_train:',
        'Shinkansen',
        '高速列车带有子弹鼻子'
    ],
    '🚆': [
        '火车',
        ':train:'
    ],
    '🚇': [
        '地下系统',
        ':underground:',
        '管线',
        '地铁公司',
        '地板'
    ],
    '🚈': [
        '轻路车',
        ':light_rail:',
        '火车'
    ],
    '🚊': [
        '火车',
        ':tram:'
    ],
    '🚝': [
        '单车',
        ':monorail:',
        '火车'
    ],
    '🚞': [
        '山地铁道',
        ':mountain_railway:',
        'Funicular',
        '火车和山区'
    ],
    '🚋': [
        '火车车',
        ':tram_car:'
    ],
    '🚌': [
        '公交车',
        ':bus:',
        '教练员'
    ],
    '🚍': [
        '正在上传的总线',
        ':front_of_bus:',
        '公交车前'
    ],
    '🚎': [
        '托莱布斯',
        ':trolleybus:',
        '电子总线'
    ],
    '🚐': [
        'Minibus',
        ':minibus:',
        'Minivan',
        '人民-Mover'
    ],
    '🚑': [
        '救护车',
        ':ambulance:'
    ],
    '🚒': [
        '火焰引擎',
        ':fire_engine:',
        '消防局',
        '火车车'
    ],
    '🚓': [
        '警车',
        ':police_car:',
        '编程车',
        '警察车辆的侧面'
    ],
    '🚔': [
        '即将到来的警车',
        ':front_of_police_car:',
        '警察汽车前部',
        '编程车'
    ],
    '🚕': [
        '出租车',
        ':taxi:',
        '纽约出租车',
        '出租车方面'
    ],
    '🚖': [
        '出租车',
        ':front_of_taxi:',
        '待机出租车',
        '出租车前'
    ],
    '🚗': [
        '自行车',
        ':car:',
        '红车',
        '汽车的侧面',
        '车'
    ],
    '🚘': [
        '正在开机车',
        ':front_of_car:',
        '红车',
        '汽车前'
    ],
    '🚚': [
        '送货车',
        ':lorry:',
        '劳里'
    ],
    '🚛': [
        '虚构的彩色',
        ':articulated_lorry:',
        '绿色卡车'
    ],
    '🚜': [
        '拖拉机',
        ':tractor:',
        '农场'
    ],
    '🛻': [
        '拾取卡车',
        ':pickup_truck:'
    ],
    '🏎️': [
        '赛车',
        ':racing_car:',
        'F1',
        '公式一',
        '竞赛车'
    ],
    '🏍️': [
        '摩托车',
        ':motorbike:',
        '摩托车'
    ],
    '🛵': [
        '摩托计分器',
        ':motor_scooter:',
        'Vespa',
        '摩托车',
        '摩托车'
    ],
    '🛺': [
        '自动Rickshaw',
        ':auto_rickshaw:',
        'Tuk Tuk'
    ],
    '🚲': [
        '自行车',
        ':bike:',
        '自行车'
    ],
    '🛴': [
        '踢得分',
        ':kick_scooter:'
    ],
    '⛵': [
        '帆船',
        ':sailboat:',
        '丁希文',
        '雅赫特'
    ],
    '🚤': [
        'Speedboat',
        ':speedboat:',
        '摩托船',
        '电源船'
    ],
    '🛳️': [
        '客船',
        ':passenger_ship:'
    ],
    '⛴️': [
        '轮渡模式',
        ':ferry:'
    ],
    '🛥️': [
        '摩托车',
        ':motor_boat:'
    ],
    '🚢': [
        '游轮船',
        ':cruise_ship:'
    ],
    '✈️': [
        '飞行器',
        ':airplane:',
        'Aeroplane'
    ],
    '🛩️': [
        '小型飞行器',
        ':small_airplane:',
        '小气球座'
    ],
    '🚁': [
        '直升机',
        ':helicopter:'
    ],
    '🚟': [
        '暂停火车',
        ':suspension_railway:'
    ],
    '🚠': [
        '山地铁道',
        ':mountain_cableway:'
    ],
    '🚡': [
        '空中轨迹',
        ':aerial_tramway:',
        '电缆车',
        'Gondola',
        '路德路'
    ],
    '🛰️': [
        '卫星',
        ':satellite:'
    ],
    '🚀': [
        '火箭座',
        ':rocket:',
        '航天飞机：'
    ],
    '🛸': [
        '飞行撒克尔',
        ':flying_saucer:',
        'UFO'
    ],
    '🚉': [
        '火车站',
        ':train_station:',
        '火车平台'
    ],
    '🚏': [
        '公交车站',
        ':bus_stop:'
    ],
    '🛣️': [
        '高速路',
        ':motorway:',
        '道路',
        '高速道路',
        '州际关系'
    ],
    '🛤️': [
        '铁路轨迹',
        ':railway_track:'
    ],
    '🛫': [
        '飞行退出',
        ':airplane_departure:',
        '关闭'
    ],
    '🛬': [
        '飞机抵达时',
        ':airplane_arrival:',
        '飞机抵达中',
        '着陆中'
    ],
    '🗾': [
        '日本地图',
        ':map_of_japan:'
    ],
    '⛰️': [
        '山区',
        ':mountain:'
    ],
    '🏔️': [
        '雪盖的山区',
        ':snow_capped_mountain:'
    ],
    '🌋': [
        'Volcano',
        ':volcano:'
    ],
    '🗻': [
        '福吉神座骑士',
        ':mount_fuji:',
        '富吉桑文'
    ],
    '🏕️': [
        '露营模式',
        ':camping:',
        '露营区'
    ],
    '🏖️': [
        '带有伞形状的包围模式',
        ':beach_with_umbrella:'
    ],
    '🏜️': [
        'Desert',
        ':desert:'
    ],
    '🏝️': [
        '沙漠岛',
        ':desert_island:'
    ],
    '🏞️': [
        'National Park',
        ':national_park:'
    ],
    '🏟️': [
        '体育场',
        ':stadium:',
        '格朗德斯地',
        '体育场'
    ],
    '🏛️': [
        '古典建筑',
        ':classical_building:',
        '希腊语',
        '罗马'
    ],
    '🏗️': [
        '建筑工程',
        ':building_construction:',
        '克兰语'
    ],
    '🏘️': [
        '住房建筑',
        ':houses_building:',
        '房子组'
    ],
    '🏚️': [
        '废弃房屋建筑',
        ':old_house:',
        '被遗弃的屋子',
        '旧屋子',
        '哈恩德屋子'
    ],
    '🏠': [
        '主页',
        ':home:',
        '住房建筑'
    ],
    '🏡': [
        '有花园的屋子',
        ':house_with_garden:',
        '房子和树'
    ],
    '🏢': [
        'Office Building',
        ':office_building:',
        '城市建筑',
        '高升华建筑'
    ],
    '🏣': [
        '日本邮局',
        ':japanese_post_office:',
        '日本邮政标记'
    ],
    '🏤': [
        '邮局',
        ':european_post_office:',
        '欧洲邮局'
    ],
    '🏥': [
        '1 P-5, 1 P-4, 1 P-3,',
        ':hospital:',
        '东区',
        'A&E',
        '急救室',
        '意外事故和紧急情况',
        'Red Cross',
        '医疗服务'
    ],
    '🏦': [
        '银行',
        ':bank:',
        'BK',
        'Bakkureru',
        '银行分支',
        'Bakkureru'
    ],
    '🏨': [
        '酒店：',
        ':hotel:',
        '住宿',
        'H Building'
    ],
    '🏩': [
        '热门饭店',
        ':love_hotel:',
        '爱心饭店'
    ],
    '🏪': [
        '便捷商店',
        ':convenience_store:',
        '24小时商店',
        '7-11',
        '角店',
        'Kwik-E-Mart'
    ],
    '🏫': [
        '学校',
        ':school:',
        '时钟塔',
        '中小学高'
    ],
    '🏬': [
        '百货店',
        ':department_store:',
        '购物中心',
        '商店'
    ],
    '🏭': [
        '出厂商',
        ':factory:',
        '工业区',
        '工业',
        '污染',
        '烟雾'
    ],
    '🏯': [
        '日本城堡',
        ':japanese_castle:',
        '堡垒：'
    ],
    '🏰': [
        '欧洲城堡',
        ':european_castle:',
        'Turrets'
    ],
    '💒': [
        '教堂心',
        ':church_heart:',
        '教会婚礼：',
        '婚姻状况'
    ],
    '🗼': [
        '东京塔',
        ':tokyo_tower:',
        '埃菲尔塔',
        '红塔'
    ],
    '🗽': [
        '自由雕像',
        ':statue_of_liberty:',
        '纽约'
    ],
    '⛪': [
        '教堂建筑',
        ':church_building:',
        '十字线'
    ],
    '🕌': [
        '清真寺：',
        ':mosque:',
        'Domed屋顶',
        'Minaret'
    ],
    '🛕': [
        '印度教寺庙：',
        ':hindu_temple:'
    ],
    '🕍': [
        '犹太教士会',
        ':synagogue:',
        '犹太人',
        'Synagog',
        '圣殿：'
    ],
    '⛩️': [
        '暗影神器',
        ':shinto_shrine:',
        'Kami-nomichi'
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
        '地面上的伞状图',
        ':beach_umbrella:',
        '海滩伞状组织'
    ],
    '🌄': [
        '日升高山上',
        ':sunrise_over_mountains:',
        '上午',
        '日出模式'
    ],
    '🌅': [
        '日出模式',
        ':sunrise:',
        ':sunset:',
        '日落模式'
    ],
    '🌆': [
        '杜斯克的Cityscape',
        ':cityscape_at_dusk:',
        '橙色天空城',
        '杜斯克城'
    ],
    '🌇': [
        '日落在建筑物上',
        ':sunset_over_buildings:',
        '城市日记'
    ],
    '🌃': [
        '夜晚和星星',
        ':night_with_stars:',
        '城市晚间',
        '星座晚间'
    ],
    '🗿': [
        'Moai',
        ':moai:',
        '复活节岛雕像',
        '人类摇滚雕像',
        '莫耶雕像'
    ],
    '🌠': [
        '射星',
        ':shooting_star:',
        '当你想要一星时',
        '流星体'
    ],
    '🌌': [
        '银河路',
        ':milky_way:',
        '星系',
        '夜间天空',
        '空间',
        '星星',
        '宇宙模式'
    ],
    '🎑': [
        '月球视觉节',
        ':moon_viewing_ceremony:',
        'Grass, Dumplings and Moon',
        '收获月',
        '秋中节',
        'Tsukimi'
    ],
    '🛖': [
        '小区',
        ':hut:'
    ],
    '🎢': [
        '火花板',
        ':roller_coaster:',
        '滚刀车',
        '主题Park'
    ],
    '🛝': [
        '游乐场幻灯片',
        ':playground_slide:',
        '婴儿数',
        '儿童'
    ]
};
/*technologies (smartphones, laptops, etc.) and office*/
emojis_language[lang][10] = {
    '⌚': [
        '观察',
        ':watch:',
        '计时器',
        '苹果Watch'
    ],
    '⏰': [
        '闹钟时钟',
        ':alarm_clock:'
    ],
    '⏱️': [
        '秒表',
        ':stopwatch:'
    ],
    '⏲️': [
        '计时器时钟',
        ':timer_clock:'
    ],
    '🕰️': [
        '手工时钟',
        ':mantelpiece_clock:'
    ],
    '🧭': [
        '指南针',
        ':compass:'
    ],
    '🕹️': [
        '操纵杆座',
        ':joystick:'
    ],
    '🎙️': [
        '工作室麦克风',
        ':studio_microphone:'
    ],
    '🎚️': [
        '水平滑块',
        ':level_slider:'
    ],
    '🎛️': [
        '控制 Knobs',
        ':control_knobs:'
    ],
    '📻': [
        '收音机',
        ':radio:',
        '数字广播',
        '无线网络'
    ],
    '📱': [
        '手机号码',
        ':mobile_phone:',
        '智能手机',
        'iPhone',
        '手机号码',
        'Device'
    ],
    '📲': [
        '向左带右箭头的移动电话',
        ':phone_call:',
        '电话',
        '指向电话'
    ],
    '☎️': [
        '黑色电话',
        ':rotary_phone:',
        'Rotary 电话',
        ':red:'
    ],
    '📞': [
        '电话接收器',
        ':phone:',
        'Handset',
        '电话',
        ':black:',
        'Device'
    ],
    '📟': [
        '分页',
        ':pager:',
        '蜂鸣器',
        '睡眠者'
    ],
    '📠': [
        '传真机',
        ':fax_machine:',
        'Facsimile',
        '传真'
    ],
    '🔋': [
        '电量：',
        ':battery:',
        'AA电池',
        '手机电池'
    ],
    '🔌': [
        '电源插图',
        ':power_cable:',
        'AC Adaptor',
        '电源线',
        '电源插头'
    ],
    '💻': [
        '笔记本',
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
        '桌面电脑',
        ':desktop_computer:',
        ':computer:',
        'iMac',
        'PC',
        'Device'
    ],
    '🖨️': [
        '打印机',
        ':printer:',
        'Device'
    ],
    '⌨️': [
        'Computer Keyboard',
        ':keyboard:',
        ':computer_keyboard:'
    ],
    '🖱️': [
        '电脑鼠标：',
        ':computer_mouse:',
        '三个鼠标按钮'
    ],
    '🖲️': [
        '曲奇球',
        ':trackball:'
    ],
    '💽': [
        '电脑磁盘',
        ':blu_ray:',
        'Minidisc',
        'CD',
        'DVD',
        '蓝光线',
        'BD'
    ],
    '💾': [
        '软盘',
        ':floppy_disk:',
        '距离磁盘3.5分',
        '磁盘'
    ],
    '💿': [
        '光学磁盘',
        ':cd:',
        'CD',
        'CD-ROM',
        '紧凑盘片'
    ],
    '📀': [
        'DVD',
        'DVD-ROM',
        ':dvd:',
        'DVD 视频'
    ],
    '🎥': [
        '电影相机',
        ':movie_camera:',
        '影片相机',
        '好莱伍德',
        '电影'
    ],
    '🎞️': [
        '电影帧',
        ':film_frames:'
    ],
    '📽️': [
        '电影投影器',
        ':film_projector:'
    ],
    '📺': [
        '电视机',
        ':tv:',
        '电视机'
    ],
    '📷': [
        '数字相机',
        ':digital_camera:'
    ],
    '📸': [
        '带闪光灯的相机',
        ':camera_flash:'
    ],
    '📹': [
        '视频相机',
        ':video_camera:',
        '摄像机'
    ],
    '📼': [
        '视频素材',
        ':vhs:',
        'VHS',
        'VCR',
        '视频冲压器',
        '视频素材'
    ],
    '💳': [
        '信用卡',
        ':credit_card:',
        '借记卡',
        'AmEX',
        'Diners Club',
        '美国运势',
        '万事达卡',
        'VISA 卡'
    ],
    '📧': [
        '电子邮箱',
        ':email:',
        '电子邮件地址'
    ],
    '📨': [
        '传入信封',
        ':incoming_envelope:',
        '带线的信封',
        '快速信封'
    ],
    '📩': [
        '上方带下箭头的信封',
        ':insert_in_envelope:',
        '下箭头信封',
        '插入信封'
    ],
    '📤': [
        '发件箱托盘',
        ':outbox_tray:'
    ],
    '📥': [
        '收件箱托盘',
        ':inbox_tray:'
    ],
    '📮': [
        '邮箱地址',
        ':postbox:'
    ],
    '📁': [
        '文件文件夹',
        ':file_folder:',
        '文件夹',
        '目录',
        '关闭文件文件夹'
    ],
    '📂': [
        '打开文件文件夹',
        ':open_file_folder:',
        '目录'
    ],
    '🗂️': [
        '卡片索引分隔符',
        ':card_index_dividers:'
    ],
    '📅': [
        '日程表',
        ':calendar:',
        '7 月 17 日',
        '世界表情日'
    ],
    '🗓️': [
        '螺旋日历板',
        ':spiral_calendar_pad:'
    ],
    '📆': [
        '关机日历',
        ':day_calendar:',
        '日期日历',
        '桌面日历'
    ],
    '📈': [
        '图表增加',
        ':increasing_chart:',
        '正曲图',
        '向上点图',
        '向上趋势图'
    ],
    '📉': [
        '图表减少',
        ':decreasing_chart:',
        '负图',
        '下点数图',
        '向下趋势图'
    ],
    '📊': [
        '条形图',
        ':bar_chart:',
        '条形图'
    ],
    '📌': [
        'Pushpin',
        ':pushpin:',
        'Thumb Tack',
        ':red:'
    ],
    '📋': [
        '剪切板',
        ':clipboard:'
    ],
    '📍': [
        '圆形推送',
        ':round_pushpin:',
        '丢弃Pin',
        '地图密码',
        '置顶',
        '红色Pin',
        ':red:'
    ],
    '📎': [
        '纸片剪辑',
        ':paperclip:',
        '剪辑'
    ],
    '📏': [
        '直角标标',
        ':straight_ruler:'
    ],
    '📐': [
        '三角坐标标尺器',
        ':triangular_ruler:',
        '三角形标尺器'
    ],
    '✂️': [
        '扫描器',
        ':scissors:',
        '剪切中'
    ],
    '✏️': [
        '铅笔数',
        ':pencil:',
        '铅笔：'
    ],
    '✒️': [
        'Black Nib',
        ':black_nib:',
        'Pen Nib',
        '喷出笔数'
    ],
    '🖋️': [
        '喷出笔数',
        ':fountain_pen:',
        '降低左翼喷雾器 Pen'
    ],
    '🖊️': [
        '彭文',
        ':pen:',
        '降低左侧停靠点 Pen',
        'Ballpoint Pen'
    ],
    '🖌️': [
        '绘画笔图',
        ':paintbrush:',
        '画笔数',
        '降低左侧绘画笔数'
    ],
    '🖍️': [
        'Crayon',
        ':crayon:',
        '左下角时钟'
    ],
    '📝': [
        '备注',
        ':memo:',
        'Memorandum',
        '说明',
        '铅笔和纸'
    ],
    '🗑️': [
        '废纸篮子',
        ':wastepaper_basket:',
        '垃圾罐头',
        '橡树箱',
        '回收站'
    ],
    '📡': [
        '卫星天线',
        ':satellite_antenna:'
    ],
    '🔭': [
        '望远镜座',
        ':telescope:',
        'Stargazing'
    ],
    '🔬': [
        '微瞄准镜',
        ':microscope:',
        'Magnify',
        '科学'
    ],
    '📭': [
        '使用已放置的标志打开邮箱',
        ':open_mailbox_lowered:'
    ],
    '📬': [
        '使用提升标志打开邮箱',
        ':open_mailbox_raised:',
        '打开邮箱'
    ],
    '📪': [
        '带有已放置标志的封闭邮箱',
        ':closed_mailbox_lowered:'
    ],
    '📫': [
        '带有提升标志的封闭邮箱',
        ':closed_mailbox_raised:'
    ],
    '📰': [
        '报社',
        ':newspaper:'
    ],
    '🗞️': [
        '已滚动的新闻稿',
        ':rolled_up_newspaper:',
        '报纸发货'
    ],
    '📄': [
        '页面正在向上',
        ':printed_page:',
        '打印页面'
    ],
    '📜': [
        '滚动',
        ':scroll:',
        '度',
        'Parchment'
    ],
    '📃': [
        '带曲线的页面',
        ':curled_page:',
        'Curled Page',
        'Curly Page'
    ],
    '📓': [
        '笔记本',
        ':notebook:',
        '黑白书'
    ],
    '📔': [
        '带装饰封面的笔记本',
        ':notebook_decorative_cover:'
    ],
    '📕': [
        '已关闭的书',
        ':closed_book:',
        '红书',
        '红文本',
        ':red:'
    ],
    '📖': [
        '打开书',
        ':open_book:',
        '书',
        '新体'
    ],
    '📗': [
        '绿书',
        ':green_book:',
        '绿色文本',
        ':green:'
    ],
    '📘': [
        '蓝书',
        ':blue_book:',
        '蓝色文本',
        ':blue:'
    ],
    '📙': [
        '橙皮书',
        ':orange_book:',
        '橙色文本',
        ':orange:'
    ],
    '📚': [
        '书籍：',
        ':books:',
        '书库',
        '书店'
    ],
    '🗳️': [
        '带选票的选票箱',
        ':ballot_box:',
        '投票框',
        '表 决'
    ],
    '🗄️': [
        '文件机箱',
        ':file_cabinet:',
        '备案机箱'
    ],
    '🗃️': [
        '卡片文件框',
        ':card_file_box:'
    ],
    '🖇️': [
        '链接纸片素材',
        ':linked_paperclips:',
        ':gray:',
        ':grey:'
    ]
};
/*clothes and accessories*/
emojis_language[lang][11] = {
    '👣': [
        '足迹',
        ':footprints:',
        '英尺：',
        '足迹'
    ],
    '👓': [
        '眼镜',
        ':glasses:',
        '埃维眼镜头'
    ],
    '🕶️': [
        '阳光镜头',
        ':sunglasses:'
    ],
    '🥽': [
        'Goggles',
        ':goggles:'
    ],
    '🥼': [
        '实验室帽子',
        ':lab_coat:'
    ],
    '👔': [
        'Necktie',
        ':necktie:',
        '商业衬衫：',
        '衬衫和Tie'
    ],
    '👕': [
        'T-Shirt',
        ':t_shirt:',
        ':t-shirt:',
        'Tee Shirt',
        'Polo Shirt'
    ],
    '👖': [
        '犹太人',
        ':jeans:',
        '德尼姆',
        '裤子',
        '裤子'
    ],
    '🧣': [
        'Scarf',
        ':scarf:'
    ],
    '🧤': [
        '手套',
        ':gloves:'
    ],
    '🧥': [
        '金币',
        ':coat:'
    ],
    '🧦': [
        'Socks',
        ':socks:'
    ],
    '👗': [
        '衣服',
        ':dress:',
        '滑雪',
        '发光'
    ],
    '👘': [
        'Kimono',
        ':kimono:',
        '磨损渐变',
        '日语装饰'
    ],
    '👙': [
        '比基尼',
        ':bikini:',
        '浴器',
        '套装'
    ],
    '🩱': [
        '一块方块套装',
        '单片套装',
        '单件swimpace'
    ],
    '👚': [
        '妇女衣服',
        ':womans_clothes:',
        '妇女衣服',
        'Blouse',
        '粉红色衬衫。',
        'Blouse'
    ],
    '👛': [
        '紫色',
        ':purse:',
        '钱包'
    ],
    '👜': [
        '手提包',
        ':handbag:'
    ],
    '👝': [
        'Clutch 包',
        ':clutch_bag:',
        '剪辑',
        '小包',
        'Pouch'
    ],
    '🎒': [
        '背包',
        ':backpack:',
        '袋子',
        '学校包',
        '学校萨切尔学校',
        'Rucksack'
    ],
    '👞': [
        'Mans Shoe',
        ':mans_shoe:',
        'Mans Shoe',
        '鞋子',
        '棕色显示',
        '衣服显示'
    ],
    '👟': [
        '雅典鞋子',
        ':athletic_shoe:',
        '正在运行鞋子',
        'Sneaker',
        '运行器',
        '教练员',
        '网球鞋子'
    ],
    '🥾': [
        '步行启动',
        ':hiking_boot:'
    ],
    '🥿': [
        '平面鞋子',
        ':flat_shoe:'
    ],
    '👠': [
        '高加热鞋子',
        ':high_heeled_shoe:',
        ':high_heel:',
        '圣蒂莱托文',
        '高热点'
    ],
    '👡': [
        '妇女沙尔',
        ':womans_sandal:',
        '妇女沙尔',
        '加热沙尔',
        '沙兰',
        'Sandal'
    ],
    '👢': [
        '妇女靴子',
        ':womans_boots_',
        '妇女靴子',
        '奶牛靴子',
        '膝上型高靴子',
        '加热靴子'
    ],
    '👑': [
        '英雄座',
        ':crown:',
        '金头',
        '女王座',
        '亲王座',
        '皇家公司',
        '公主',
        ':gold:',
        ':yellow:'
    ],
    '👒': [
        '帽子',
        ':hat:',
        '妇女帽子',
        '带弓的帽子',
        '女士帽子'
    ],
    '🎩': [
        '顶部帽子',
        ':top_hat:',
        '正式的穿甲',
        'Groom',
        ':black:'
    ],
    '🎓': [
        '脱离帽子',
        ':graduation_cap:',
        '学院',
        '毕业生：',
        '化石板',
        '大学',
        '正方形学术帽子',
        ':black:'
    ],
    '🧢': [
        '账单帽子',
        ':billed_cap:',
        '棒球帽子'
    ],
    '⛑️': [
        '带白十字头盔',
        ':helmet_with_white_cross:',
        ':helmet_with_cross:',
        ':rescue_worker_helmet:',
        ':rescue_workers_helmet:',
        '救援人员头盔',
        ':red:',
        ':white:'
    ],
    '💼': [
        '公事包',
        ':briefcase:',
        '套装'
    ],
    '🎖️': [
        '军事勋章',
        ':military_medal:',
        ':medal:',
        '勋章',
        '梅达利昂州',
        '军事装饰'
    ],
    '📿': [
        '祈祷戴斯',
        ':prayer_beads:',
        'Dhikr Beads',
        'Rosary Beads'
    ],
    '🎗️': [
        '提醒Ribbo',
        ':reminder_ribbo:'
    ],
    '🤿': [
        '潜水面具',
        ':diving_mask:'
    ],
    '🦺': [
        '安全箱',
        ':safety_vest:'
    ],
    '🥻': [
        '萨里文',
        ':sari:',
        '沙雷文',
        '沙里文'
    ],
    '🩲': [
        '简介',
        ':briefs:',
        'Undies',
        'Underwear',
        'Underpants',
        'Jocks',
        'Panties'
    ],
    '🩳': [
        '短路',
        ':shorts:'
    ],
    '🛼': [
        '滚刀皮肤',
        ':roller_skate:',
        '内置滑块',
        '滚刀减速'
    ],
    '🩴': [
        '翻转浮点数',
        ':flip_flop:',
        'Thong Sandal'
    ],
    '🪖': [
        '军用头盔',
        ':military_helmet:'
    ],
    '🩰': [
        '芭蕾舞鞋子',
        ':ballet_shoes:',
        '有点鞋子'
    ],
    '🩼': [
        'Crutch',
        ':crutch:'
    ]
};
/*hands and parts of body*/
emojis_language[lang][12] = {
    '👋{{skin_tone}}': [
        '手动签名',
        ':wave:',
        ':waving_hand:',
        '再见',
        '手波波浪：',
        '您好',
        'Hi'
    ],
    '🖐️{{skin_tone}}': [
        '指针播放的手势',
        ':hand_splayed:',
        ':raised_hand_with_fingers_splayed:',
        ':hand_with_fingers_splayed:',
        '五手',
        '玩家之手',
        '使用指纹升起手'
    ],
    '🤚{{skin_tone}}': [
        '提升背部',
        ':raised_back_of_hand:',
        ':back_of_hand:',
        '背手'
    ],
    '✋{{skin_tone}}': [
        '升起手',
        ':raised_hand:',
        ':hand:',
        '高 5',
        '停止'
    ],
    '🖖{{skin_tone}}': [
        'Vulcan Salute',
        ':vulcan_salute:',
        'Spock',
        '星树座',
        '带着中间指针和指针之间部分提升的手'
    ],
    '👌{{skin_tone}}': [
        '好的手签名',
        ':ok_hand:',
        '好的',
        '完美的',
        '否'
    ],
    '✌️{{skin_tone}}': [
        '胜利之手',
        ':victory_hand:',
        '空运报价',
        '和平标志',
        'V 标志'
    ],
    '🤞{{skin_tone}}': [
        '跨越指针',
        ':crossed_fingers:',
        '指纹人横线',
        '祝你好运！',
        '使用索引和中间指针跨出'
    ],
    '🤟{{skin_tone}}': [
        '爱你的手势',
        ':love_you_gesture:',
        ':i_love_you_hand_sign:',
        '我喜欢你的手签名'
    ],
    '🤘{{skin_tone}}': [
        '马座',
        ':the_horns:',
        ':sign_of_the_horns:',
        ':metal:',
        '恶魔手指',
        '重型金属：',
        '摇滚开启'
    ],
    '🤙{{skin_tone}}': [
        '呼叫我的手签名',
        ':call_me_hand:',
        ':call_me:',
        '电话',
        '沙卡'
    ],
    '🤏{{skin_tone}}': [
        '粉红色的手',
        ':pinching_hand:'
    ],
    '👈{{skin_tone}}': [
        '背手索引左侧',
        ':backhand_index_pointing_left:',
        ':point_left:',
        '白色左指针背手索引'
    ],
    '👉{{skin_tone}}': [
        '背手索引右侧',
        ':backhand_index_pointing_right:',
        ':point_right:',
        '白色右点背手索引'
    ],
    '👆{{skin_tone}}': [
        '背手索引点数',
        ':point_up_2:',
        ':backhand_index_pointing_up:',
        '白上路点背手索引',
        '中间指针'
    ],
    '👇{{skin_tone}}': [
        '背手索引向下',
        ':point_down:',
        ':backhand_index_pointing_down:',
        '白下指针背手索引',
        '向下点数'
    ],
    '☝{{skin_tone}}': [
        '索引指针上移',
        ':point_up:',
        ':index_pointing_up:',
        '白升分索引',
        '密文'
    ],
    '🖕{{skin_tone}}': [
        '中间指针',
        ':middle_finger:',
        '翻转鸟类',
        '粗指针',
        '反向手，中间指甲扩展'
    ],
    '👍{{skin_tone}}': [
        '缩略图注册',
        ':thumbs_up_sign:',
        '赞',
        '否'
    ],
    '👎{{skin_tone}}': [
        '缩略图向下标志',
        ':thumbs_down_sign:',
        '坏的',
        'Dislike',
        '否'
    ],
    '✊{{skin_tone}}': [
        '提升拳头',
        ':raised_fist:',
        'Fist 水管'
    ],
    '👊{{skin_tone}}': [
        '即将到来的拳头',
        ':oncoming_fist:',
        'Bro Fist',
        'Brofist',
        'Fist Bump',
        '拳击中',
        '关闭Fist',
        '人手签名'
    ],
    '🤛{{skin_tone}}': [
        '左转跳转',
        ':left_fist_bump:'
    ],
    '🤜{{skin_tone}}': [
        '右Fist Bump',
        ':right_fis:bump:'
    ],
    '🤌{{skin_tone}}': [
        '粉红色指针',
        ':pinched_fingers:',
        'Ma Che Vuoi',
        '指针净化'
    ],
    '👏{{skin_tone}}': [
        '克隆手签名',
        ':cap:',
        ':clapping_hands:',
        'Applause',
        'Clap',
        '类名',
        '高尔夫拉普省',
        '一轮Applause'
    ],
    '🙌{{skin_tone}}': [
        '庆祝活动中的人提升双手',
        ':raised_hands:',
        ':raising_hands:',
        '提升手',
        'Air in The Air',
        'Banzai',
        '节奏奇迹色',
        'Hallelujah',
        '赞美助手',
        '双手'
    ],
    '👐{{skin_tone}}': [
        '打开手签名',
        ':open_hands_sign:',
        '色度',
        'Jazz助手'
    ],
    '🤲{{skin_tone}}': [
        '一起上面的手表',
        ':palms_up_together:',
        'Dua'
    ],
    '🤝{{skin_tone}}': [
        'Handshake',
        ':handshake:',
        '摇动手'
    ],
    '🙏{{skin_tone}}': [
        '折叠手',
        ':folded_hands:',
        'Namaste',
        '请稍后再试',
        '祈祷者',
        '谢谢您！',
        '被折叠的人'
    ],
    '✍{{skin_tone}}': [
        '写入手',
        ':writing_hand:'
    ],
    '🫱{{skin_tone}}': [
        '右手',
        ':rightwards_hand:'
    ],
    '🫲{{skin_tone}}': [
        '左手',
        ':leftwards_hand:'
    ],
    '🫳{{skin_tone}}': [
        '棕榈帽子',
        ':palm_down_hand:'
    ],
    '🫴{{skin_tone}}': [
        '掌上手',
        ':palm_up_hand:'
    ],
    '🫰{{skin_tone}}': [
        '使用索引指针和图姆布横线',
        ':hand_with_index_finger_and_thumb_crossed:'
    ],
    '🫵{{skin_tone}}': [
        '查看器的索引点数',
        ':index_pointing_at_the_viewer:'
    ],
    '🫶{{skin_tone}}': [
        '心手',
        ':heart_hands:',
        '爱好'
    ],
    '💪{{skin_tone}}': [
        '弹性的 Biceps',
        ':flexed_biceps:',
        '弹性臂骨',
        'Musle',
        '强度'
    ],
    '🦵{{skin_tone}}': [
        '腿部',
        ':leg:'
    ],
    '🦶{{skin_tone}}': [
        '英尺',
        ':foot:'
    ],
    '👂{{skin_tone}}': [
        '耳机',
        ':ear:',
        '耳机',
        '听讯',
        '正在监听'
    ],
    '👃{{skin_tone}}': [
        '鼻子',
        ':nose:',
        '熔化',
        '狙击手',
        'Stinky'
    ],
    '🦻{{skin_tone}}': [
        '用助听器耳机',
        ':ear_with_hearing_aid:'
    ],
    '🧠': [
        '脑图',
        ':brain:',
        ':pink:'
    ],
    '🦷': [
        '牙色',
        ':tooth:',
        ':white:'
    ],
    '👀': [
        '眼镜',
        ':eyes:',
        '埃伊博斯',
        'Shiftyes',
        'Wise 眼镜'
    ],
    '👁️': [
        '眼镜',
        ':eye:',
        '单眼镜'
    ],
    '👅': [
        'Tongue Out',
        ':tongue_out:',
        ':red:'
    ],
    '👄': [
        '鼠标：',
        ':mouth:',
        '按键利数',
        '精选',
        ':red:'
    ],
    '🫦': [
        '正在搭便车',
        ':biting_lip:',
        '精选',
        ':red:'
    ],
    '🫀': [
        '神经心',
        ':anatomical_heart:',
        ':red:'
    ],
    '🫁': [
        '经度',
        ':lungs:',
        ':red:'
    ],
    '🦾': [
        '机械臂部',
        ':mechanical_arm:',
        '强度',
        ':gray:',
        ':grey:'
    ],
    '🦿': [
        '机械护腿',
        ':mechanical_leg:',
        ':gray:',
        ':grey:'
    ],
    '💅{{skin_tone}}': [
        '尼尔·波兰文',
        ':nail_polish:',
        '指针',
        'Manicure',
        'Nonchalant'
    ],
    '🤳{{skin_tone}}': [
        '自拍照',
        ':selfie:',
        '手机相机',
        '自拍手'
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
        '狗泥土',
        '微笑药水',
        ':brown:'
    ],
    '💋': [
        '吉斯标记',
        ':kiss_mark:',
        '按键利数',
        ':red:'
    ],
    '🦴': [
        '骨头',
        ':bone:'
    ],
    '🧳': [
        '行李费',
        ':luggage:',
        '套装'
    ],
    '🌂': [
        '封闭的伞状组织',
        ':closed_umbrella:',
        '折叠伞状组织',
        '粉红色的伞子',
        ':pink:',
        ':purple:'
    ],
    '☂️': [
        '伞状组织',
        ':umbrella:',
        ':purple:'
    ],
    '☔': [
        '带雨滴的伞状图',
        ':umbrella_with_rain_drops:',
        ':umbrella:',
        '降雨量',
        'Rainy'
    ],
    '🧵': [
        '共享线程',
        ':spool_of_thread:'
    ],
    '🧶': [
        'Yarn 的球',
        ':ball_of_yarn:'
    ],
    '💄': [
        'Lipstick',
        ':lipstick:',
        '翻转',
        '弹夹',
        ':red:'
    ],
    '💍': [
        '铃声',
        ':ring:',
        '钻石戒指',
        '参与之铃声'
    ],
    '💎': [
        '钻石',
        ':gem_stone:',
        '钻石：',
        '吉姆',
        '石头',
        '珠尔',
        ':blue:'
    ],
    '💥': [
        '碰撞符号',
        ':collision_symbol:',
        '班克',
        '爆炸模式',
        '影响',
        '红色Spark',
        '爆炸模式'
    ],
    '💫': [
        'izzy 符号',
        ':dizzy_symbol:',
        '圆和星星',
        ':yellow:'
    ],
    '💦': [
        '散射血红符号',
        '血汗掉落数',
        '血汗滴数',
        '普莱德',
        '拆分水',
        '滴水',
        ':blue:'
    ],
    '💨': [
        '正在退出',
        ':dashing_away:',
        '快速的',
        'Steam',
        '减速',
        '向导',
        '破折号符号',
        '风雪'
    ],
    '🌬️': [
        '风扇面',
        ':wind_face:',
        'Blowing Wind',
        '母亲性质',
        '风吹面具',
        ':white:'
    ],
    '🐾': [
        '绘制打印',
        ':paw_prints:',
        '猫之Paw打印',
        '狗Paw打印',
        '拳头打印',
        '小狗Paw打印'
    ],
    '🕸️': [
        '蜘蛛网络',
        ':spider_web:',
        'Cobweb',
        'Web',
        'Spiderweb'
    ],
    '🦠': [
        'Microbe',
        ':microbe:',
        '单元格',
        '科罗纳维鲁斯',
        'COVID-19',
        '格姆',
        '微有机体',
        '病毒：',
        ':green:'
    ],
    '💐': [
        '花花板',
        ':bouquet_of_flowers:'
    ],
    '🌍': [
        '欧洲-非洲全球展示组织',
        ':globe_showing_europe_africa:',
        ':earth_africa:',
        '大地：',
        '环球座',
        '行星图',
        '世界',
        '全球展示欧洲和非洲',
        ':blue:'
    ],
    '🌎': [
        '全球展示美洲组织',
        ':globe_showing_americas:',
        ':earth_americas:',
        '大地：',
        '环球座',
        '行星图',
        '世界',
        ':blue:'
    ],
    '🌏': [
        '环球展示亚洲—澳大利亚',
        ':globe_showing_asia_australia:',
        ':earth_asia:',
        '大地：',
        '环球座',
        '行星图',
        '世界',
        '全球展示亚洲和澳大利亚',
        ':blue:'
    ],
    '🌐': [
        '与Meridian一起使用的球体',
        ':globe_with_meridians:',
        'B. Internet',
        '万维网',
        'WWW'
    ],
    '🌑': [
        '新月份符号',
        ':new_moon:',
        '暗月',
        '阴影月',
        '太阳影像',
        ':black:'
    ],
    '🌒': [
        'Waxing Crescent Moon 符号',
        ':waxing_crescent_moon:',
        ':yellow:',
        ':black:'
    ],
    '🌓': [
        '第一季度月符号',
        ':first_quarter_moon:',
        ':yellow:',
        ':black:'
    ],
    '🌔': [
        'Waxing Gibbous Moon 符号',
        ':moon:',
        ':waxing_gibbous_moon:',
        ':yellow:',
        ':black:'
    ],
    '🌕': [
        '满月符号',
        ':full_moon:',
        ':yellow:'
    ],
    '🌖': [
        'Waning Gibbous Moon 符号',
        ':waning_gibbous_moon:',
        ':yellow:',
        ':black:'
    ],
    '🌗': [
        '最后一季月符号',
        ':last_quarter_moon:',
        ':yellow:',
        ':black:'
    ],
    '🌘': [
        '行星月亮符号',
        ':waning_crescent_moon:',
        ':yellow:',
        ':black:'
    ],
    '🌙': [
        '月月',
        ':crescent_moon:',
        ':yellow:'
    ],
    '🌚': [
        '带面部的新月光',
        ':new_moon_with_face:',
        '爬行月',
        '暗月面',
        '摩列斯特月',
        ':black:',
        ':gray:',
        ':grey:'
    ],
    '🌝': [
        '全月球面面',
        ':full_moon_with_face:',
        'Moonface',
        '表情模式',
        '微笑月',
        ':yellow:'
    ],
    '🌛': [
        '第一个月的月球面面',
        ':first_quarter_moon_with_face:',
        ':first_quarter_moon_face:',
        ':yellow:'
    ],
    '🌜': [
        '最后四分之一的月球有面',
        ':last_quarter_moon_with_face:',
        ':last_quarter_moon_face:',
        ':yellow:'
    ],
    '🌞': [
        '太阳有面',
        ':sun_with_face:',
        '微笑阳光',
        'Sunface',
        '微笑的阳光',
        ':yellow:'
    ],
    '☀️': [
        '周日',
        ':sun:',
        '阳光',
        ':yellow:'
    ],
    '⭐': [
        '星标',
        ':star:',
        '白中星星',
        ':yellow:'
    ],
    '🌟': [
        '发光星',
        ':glowing_star:',
        '光辉星星',
        ':yellow:'
    ],
    '☁️': [
        '云端',
        ':cloud:',
        '多云',
        '阴极化',
        ':white:'
    ],
    '⛅': [
        '云端后面的太阳线',
        ':thunder_cloud_and_rain:',
        ':thunder_cloud_rain:',
        ':cloud_with_lightning_and_rain:',
        ':white:'
    ],
    '⛈️': [
        '带有闪电和降雨的云',
        ':thunder_cloud_and_rain:',
        ':thunder_cloud_rain:',
        ':cloud_with_lightning_and_rain:',
        '薄云雨量',
        ':white:'
    ],
    '🌤️': [
        '带小云的白天',
        ':mostly_sunny:',
        ':sun_behind_small_cloud:',
        ':sun_small_cloud:',
        ':white_sun_small_cloud:',
        ':white_sun_with_small_cloud:',
        ':white:'
    ],
    '🌥️': [
        '云端后面的太阳线',
        ':sun_behind_large_cloud:',
        '白太阳背部云端',
        ':white:'
    ],
    '🌦️': [
        '白太阳背后云有雨',
        ':sun_behind_rain_cloud:',
        ':partly_sunny_rain:',
        ':white_sun_rain_cloud:',
        ':white_sun_behind_cloud_with_rain:',
        ':white:'
    ],
    '🌧️': [
        '带雨的云',
        ':cloud_with_rain:',
        ':white:'
    ],
    '🌨️': [
        '带雪的云',
        ':cloud_with_snow:',
        ':white:'
    ],
    '🌩️': [
        '有闪电的云',
        ':cloud_with_lightning:',
        ':white:'
    ],
    '🌪️': [
        '龙卷风',
        ':tornado:',
        '带旋风的云'
    ],
    '🌫️': [
        'Fog',
        ':fag:',
        ':white:',
        ':gray:',
        ':grey:'
    ],
    '🌈': [
        '彩虹灯',
        ':rainbow:',
        'Gay 骄傲的',
        '主彩虹头',
        'LGBTQIA+',
        'LGBT+'
    ],
    '❄️': [
        '雪花',
        ':snowflake:',
        '雪',
        '下雪',
        ':white:'
    ],
    '🌀': [
        '摩托车',
        ':cyclone:',
        'B. 飓风情况',
        '螺旋线',
        '旋转图',
        '龙卷风'
    ],
    '⚡': [
        '高电压标志',
        ':high_voltage_sign:',
        '闪电箭头',
        '雷波尔特',
        '高电压'
    ],
    '☃️': [
        '雪人',
        ':snowman:',
        '带雪花的雪人',
        ':white:'
    ],
    '⛄': [
        '雪人没有雪',
        '雪人_without slow',
        ':snowman:',
        '冰雪人',
        'Olaf',
        '雪人',
        ':white:'
    ],
    '☄️': [
        '彗星',
        ':comet:'
    ],
    '🔥': [
        '火力',
        ':fire:',
        '火焰模式',
        '热点',
        'Lit',
        '斯纳普雷克',
        ':red:'
    ],
    '💧': [
        'Droplet',
        ':droplet:',
        '水',
        '滴水',
        ':blue:'
    ],
    '✨': [
        '撒克尔斯',
        ':sparkles:',
        'Glitter',
        'Shiny',
        '新的'
    ],
    '🌊': [
        '水波浪量',
        ':water_wave:',
        '海滩座',
        '海洋波浪量',
        'B. 海',
        ':blue:'
    ],
    '🎄': [
        '圣诞树',
        '史密斯树形',
        '圣诞岛',
        '圣诞树',
        ':green:'
    ],
    '🎃': [
        'Jack-O-Lantern',
        'jack_o_lantern',
        'Halloween',
        '南瓜文',
        ':orange:'
    ],
    '🌻': [
        '阳光花子',
        ':sunflower:',
        '黄色流',
        ':yellow:'
    ],
    '🌼': [
        'Blossom',
        ':blossom:',
        '鲜花花花板',
        'Daisy',
        '黄色流',
        ':yellow:'
    ],
    '🌷': [
        'Tulip',
        ':tulip:',
        ':pink:'
    ],
    '🌹': [
        '玫瑰花子',
        ':rose_flower:',
        '红色玫瑰。',
        ':red:'
    ],
    '☘️': [
        'Shamrock',
        ':shamrock:',
        'Clover',
        '特雷菲尔',
        ':green:'
    ],
    '🍀': [
        '四叶衣服',
        ':four_leaf_clover:',
        'Clover',
        '爱尔兰',
        '幸运的',
        '幸运的',
        ':green:'
    ],
    '🌸': [
        'Cherry Blossom',
        ':cherry_blossom:',
        '粉红色花子',
        'Sakura',
        ':pink:'
    ],
    '💮': [
        '白色花子',
        ':white_flower:',
        'Cherry Blossom',
        'Daily 纸',
        '干得好的印章',
        ':white:'
    ],
    '🌺': [
        'Hibiscus',
        ':hibiscus:',
        ':red:'
    ],
    '🏵️': [
        '罗塞特',
        ':rosette:',
        ':orange:',
        ':yellow:'
    ],
    '🌱': [
        '种子管理',
        ':seedling:',
        '春色',
        'Sprout',
        '剪切中',
        ':green:'
    ],
    '🌲': [
        '高绿色树',
        ':evergreen_tree:',
        '菲尔树',
        'Pine 树',
        ':green:'
    ],
    '🌳': [
        '腐化树',
        ':deciduous_tree:',
        '圆形树',
        ':green:'
    ],
    '🌴': [
        '棕榈树',
        ':palm_tree:',
        '椰子树',
        ':green:'
    ],
    '🎋': [
        '塔纳巴塔树',
        ':tanabata_tree:',
        'Tanabata',
        '愿望树'
    ],
    '🎍': [
        'Pine 装饰',
        ':pine_decoration:',
        '巴博文',
        '卡多马图文',
        '新年装饰'
    ],
    '🌵': [
        'Cactus',
        ':cactus:',
        'Desert',
        ':green:'
    ],
    '🌾': [
        '稻草人',
        ':sheaf_of_rice:',
        '裁剪：',
        '耕作中',
        '小米',
        '稻米之心'
    ],
    '🌿': [
        '草地',
        ':herb:',
        '裁剪：',
        '种植物',
        ':green:'
    ],
    '🍁': [
        '木制叶子',
        ':maple_leaf:',
        '加拿大',
        '加拿大',
        '马普尔',
        ':brown:'
    ],
    '🍂': [
        '亡灵叶子',
        ':fallen_leaf:',
        '自动导航叶子',
        '自动休眠',
        '棕色叶子',
        '深空树子',
        '亡灵叶子',
        ':brown:'
    ],
    '🍃': [
        '风力中的叶尘化',
        ':leaf_fluttering_in_wind:',
        ':leaves:',
        '绿色叶子',
        '春色',
        ':green:'
    ],
    '🪴': [
        '净化厂',
        ':potted_plant:',
        ':green:'
    ],
    '🪸': [
        '珊瑚状体',
        ':coral:',
        '气候变化'
    ],
    '🪷': [
        '洛图斯',
        ':lotus:',
        '纯度',
        '美容',
        '均匀度',
        '安宁度'
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
        '关键字',
        ':key:',
        '黄金密钥',
        ':gold:',
        ':yellow:'
    ],
    '🗝️': [
        '旧密钥',
        ':old_key:',
        ':brown:'
    ],
    '🔨': [
        '锤子',
        ':hammer:',
        'Claw Hammer',
        'Handyman',
        '工具'
    ],
    '⛏️': [
        '选择',
        ':pick:',
        '皮卡轴'
    ],
    '🪓': [
        '斧子',
        ':axe:',
        '消防员'
    ],
    '🪚': [
        '木匠锯子',
        ':carpentry_saw:'
    ],
    '🪛': [
        '屏幕驱动程序',
        ':screwdriver:'
    ],
    '🪝': [
        '钩子',
        ':hook:'
    ],
    '🪠': [
        'Plunger',
        ':plunger:'
    ],
    '🪣': [
        '桶数',
        ':bucket:'
    ],
    '🔩': [
        '努特和箭头',
        ':nut_and_bolt:',
        '箭头',
        '螺丝条',
        ':gray:',
        ':grey:'
    ],
    '🗜️': [
        '闪光灯',
        ':clamp:',
        'Table Vice',
        'WinZip',
        '压缩',
        ':gray:',
        ':grey:'
    ],
    '🔒': [
        '已锁定',
        ':locked:',
        '关闭锁定',
        'Padlock'
    ],
    '🔓': [
        '已解锁',
        ':unlocked:',
        '打开帕德锁',
        '打开锁定'
    ],
    '🔏': [
        '使用笔锁定',
        ':locked_with_pen:',
        '锁定和笔数',
        '用喷雾器锁定密码',
        '使用 Ink Pen 锁定'
    ],
    '🔐': [
        '使用密钥锁定',
        ':locked_with_key:',
        '使用密钥关闭锁定'
    ],
    '🗡️': [
        'Dagger',
        ':dagger:',
        '刀武器',
        ':gray:',
        ':grey:'
    ],
    '⚔️': [
        '十字剑',
        ':crossed_swords:',
        ':gray:',
        ':grey:'
    ],
    '🔫': [
        'Pistol',
        ':pistol:',
        '枪',
        '转手器',
        'Squirt 枪',
        '水枪',
        '水手枪'
    ],
    '🧰': [
        '工具箱',
        ':toolbox:',
        ':red:'
    ],
    '🧲': [
        '磁力网',
        ':magnet:',
        ':red:'
    ],
    '💉': [
        'Syringe',
        ':syringe:',
        '捐血活动',
        '血液测试',
        '针头',
        '接种情况',
        '鲜水',
        '生病的',
        'ill'
    ],
    '🧬': [
        'DNA',
        ':dna:',
        'DNA 双头盔'
    ],
    '🧪': [
        '测试管',
        ':test_tube:',
        ':green:'
    ],
    '🛏️': [
        '床位',
        ':bed:',
        '卧室'
    ],
    '🛋️': [
        '套餐和灯',
        ':couch_and_lamp:',
        '休息室',
        '设置者',
        '索法文'
    ],
    '🪑': [
        '主席',
        ':chair:'
    ],
    '🚪': [
        '门',
        ':door:',
        '门路',
        '前门'
    ],
    '🪟': [
        '窗口',
        ':window:'
    ],
    '🪜': [
        '梯子',
        ':ladder:'
    ],
    '🪞': [
        '镜像',
        ':mirror:'
    ],
    '🚽': [
        '厕所',
        ':toilet:',
        '浴室',
        '洛奥文',
        '重试',
        '西北地区',
        ':white:'
    ],
    '🚿': [
        '阵雨',
        ':shower:',
        '显示头',
        ':shower:'
    ],
    '🛁': [
        '巴塔图',
        ':bathtub:',
        '泡泡泡球',
        ':shower:'
    ],
    '🧴': [
        '搬运瓶子',
        ':location_bottle:'
    ],
    '🧷': [
        '安全密码',
        ':safety_pin:',
        ':gray:',
        ':grey:'
    ],
    '🧺': [
        '篮子',
        ':basket:',
        ':brown:'
    ],
    '🧻': [
        '纸卷',
        ':roll_of_paper:',
        '厕所纸',
        ':white:'
    ],
    '🧼': [
        '肥皂栏',
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
        '灭火器',
        ':fire_extinguisher:',
        ':red:'
    ],
    '🚬': [
        '香料',
        ':cigarette:',
        '烟雾符号'
    ],
    '⚰️': [
        '科芬文',
        ':coffin:',
        'Casket',
        '葬礼：',
        ':brown:'
    ],
    '⚱️': [
        '丧葬Urn',
        ':funeral_urn:',
        '花店'
    ],
    '🛡️': [
        '盾牌',
        ':shield:'
    ],
    '⚙️': [
        '宝箱',
        ':gear:',
        '设置',
        '备选方案',
        ':gray:',
        ':grey:'
    ],
    '⚖️': [
        '平衡比例',
        ':balance_scale:',
        '司法比例'
    ],
    '⛓️': [
        '链条',
        ':chains:'
    ],
    '🔗': [
        '链接',
        ':link:',
        '链条',
        '超链接',
        '链接的链接',
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
        '头骨',
        ':skull:',
        '亡语',
        '灰色头骨',
        '斯凯莱顿',
        ':white:'
    ],
    '☠️': [
        '头骨和骨头',
        ':skull_and_crossbones:',
        ':white:'
    ],
    '🎡': [
        '铁丝轮',
        ':ferris_wheel:',
        '大轮子',
        'Fairgroundl',
        '观察轮子'
    ],
    '⛽': [
        '燃料泵站',
        '燃料泵：',
        'D. 石油资源',
        'Petrol',
        '气体：',
        ':red:'
    ],
    '🚨': [
        '警察车环光灯',
        ':rotating_light:',
        ':police_police_car:',
        '紧急情况光',
        '闪光灯',
        'Siren',
        ':red:'
    ],
    '🚥': [
        '水平流量灯',
        ':horizontal_traffic_light:',
        ':green:',
        ':red:',
        ':yellow:',
        ':orange:'
    ],
    '🚦': [
        '垂直流光线',
        ':vertical_traffic_light:',
        ':green:',
        ':red:',
        ':yellow:',
        ':orange:'
    ],
    '⚓': [
        'Admiralty 模式锚点',
        ':anchor:',
        '渔夫人'
    ],
    '🚧': [
        '建筑标志',
        ':construction_sign:',
        '黑色黄色条纹标志',
        ':yellow:',
        ':black:'
    ],
    '🪂': [
        'Parachute',
        ':parachute:'
    ],
    '💺': [
        '头像',
        ':seat:',
        '总线飞行器Aeroplane'
    ],
    '🪐': [
        '土星',
        ':saturn:'
    ],
    '🎆': [
        '烟花',
        ':fireworks:',
        '爆炸模式'
    ],
    '🎇': [
        'Senko Hanabi',
        ':senko_hanabi:',
        '烟花火焰人'
    ],
    '💷': [
        '磅Banknote',
        ':pound:',
        ':pound_banknote:',
        '£¬»ñµÃ20便笺',
        '20个Quid 便笺',
        '带有磅标志的钞票',
        ':purple:',
        'Money'
    ],
    '💶': [
        'Euro Banknote',
        ':euro:',
        ':euro_banknote:',
        '100 欧元',
        '带有欧元标志的钞票',
        ':blue:',
        'Money'
    ],
    '💵': [
        '班克尔特元',
        ':dollar:',
        ':dollar_banknote:',
        '$1 注释',
        '用美元标志来记作钞票',
        '美元账单',
        '美国元',
        ':green:',
        'Money'
    ],
    '💴': [
        'Yen Banknote',
        ':yen:',
        ':yen_banknote:',
        '日记 1000个日记',
        'Yen 笔记',
        '带有Yen标志的钞票',
        ':yellow:',
        'Money'
    ],
    '⛺': [
        '露营帐单',
        ':camping_tent:'
    ],
    '⛲': [
        '喷雾器',
        ':fountain:',
        '水特征',
        '水喷雾器',
        '公园区'
    ],
    '💰': [
        'Money Bag',
        ':money_bag:',
        'Moneybags',
        '丰富的',
        '$'
    ],
    '💸': [
        '带花边的钱',
        ':money_with_wings:',
        '飞行钱',
        ' 失去资金'
    ],
    '🏷️': [
        '标签标签',
        ':label_tag:'
    ],
    '🔖': [
        '书签',
        ':bookmark:',
        '价格标签',
        '标签'
    ],
    '📑': [
        '书签标签',
        ':bookmark_tabs:',
        ':white:'
    ],
    '📯': [
        'Postal Horn',
        ':postal_horn:',
        'Bugle',
        '法属霍恩州'
    ],
    '🪁': [
        '基特文',
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
        '组队弹出器',
        ':party_popper:',
        '庆祝活动',
        '派对帽子'
    ],
    '🎈': [
        '气球',
        ':balloon:',
        '派对',
        '红色气球',
        ':red:'
    ],
    '🌡️': [
        '温度计',
        ':thermometer:',
        '热温度',
        '温度',
        ':red:'
    ],
    '🛢️': [
        '油鼓座',
        ':oil_drum:'
    ],
    '💣': [
        '炸弹数',
        ':bomb:',
        '高亮'
    ],
    '🔪': [
        '厨师刀',
        ':kitchen_knife:',
        '刀具',
        '编织者小刀',
        'Hocho'
    ],
    '🏺': [
        'Amphora',
        ':amphora:',
        '杰尔',
        '花店'
    ],
    '🗺️': [
        '世界地图',
        ':world_map:'
    ],
    '🎼': [
        '音乐得分',
        ':musical_score:',
        '乐谱音乐',
        'Treble Clef'
    ],
    '🎬': [
        '板甲板',
        ':clapper_board:',
        '剪辑',
        '行 动',
        'Director',
        '电影片段'
    ],
    '🎻': [
        '暴力的',
        ':violin:',
        'String Tests',
        '世界范围内最小的侵犯行为'
    ],
    '🎺': [
        '触发器',
        ':trumpet:',
        '角',
        '亚兹文'
    ],
    '🎸': [
        '吉他尔',
        ':guitar:',
        '音响吉塔',
        '低音吉他文',
        '电吉他的'
    ],
    '🎷': [
        '萨克斯语',
        ':saxophone:',
        '亚兹文',
        '萨克斯'
    ],
    '🥁': [
        '鼓座',
        ':drum:',
        '带鼓棍子'
    ],
    '🎹': [
        '钢琴座',
        ':piano:',
        '音乐键盘',
        ':white:',
        ':black:'
    ],
    '🪕': [
        '班霍文',
        ':banjo:'
    ],
    '🪗': [
        'Accordion',
        ':accordion:'
    ],
    '🪘': [
        '长鼓座',
        ':long_drum:'
    ],
    '🎨': [
        '艺术家色板',
        ':artist_palette:',
        'art',
        '绘画'
    ],
    '🧩': [
        '拼图块',
        ':puzzle_piece:',
        '拼图拼图',
        ':green:'
    ],
    '🎲': [
        '游戏死了',
        ':game_die:',
        '爱好',
        ':white:'
    ],
    '🎭': [
        '表演艺术：',
        '表演艺术中',
        '剧场',
        '剧集',
        '戏剧面具',
        '希腊剧院面具',
        '悲惨和巧妙的面具',
        '威尼斯州'
    ],
    '🔍': [
        '放大玻璃向左倾斜。',
        ':mag:',
        ':magnifying_glass_tilted_left:',
        'Magnifier',
        '搜索图标',
        '左指针放大镜',
        '查找',
        ':transparent:'
    ],
    '🔎': [
        '放大玻璃倾斜右侧',
        ':mag_right:',
        ':magnifying_glass_tilted_right:',
        'Magnifier',
        '搜索图标',
        '右点放大玻璃板',
        '查找',
        ':transparent:'
    ],
    '⌛': [
        '小时已完成',
        ':hourglass:',
        ':hourglass_done:',
        '小时数',
        'Time',
        'Egg timer',
        'Empty',
        'Ended',
        'Finished',
        'Sand Clock'
    ],
    '⏳': [
        '小时玻璃未完成',
        ':hourglass_flowing_sand:',
        ':hourglass_not_done:',
        '带花子的小时玻璃板',
        'Busy',
        'Time',
        'Egg timer',
        'Flowing',
        'Sand Clock'
    ],
    '🕐': [
        '一个 OClock',
        ':clock1:',
        ':one_oclock:',
        '时钟脸One OClock',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕜': [
        '一条时钟面',
        ':clock130:',
        ':one_thirty:',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕑': [
        '两次OClock',
        ':clock2:',
        ':two_oclock:',
        '时钟两面',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕝': [
        '时钟脸二十',
        ':clock230:',
        ':two_thirty:',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕒': [
        '三个OClock',
        ':clock3:',
        ':three_oclock:',
        '时钟三个OClock',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕞': [
        '时钟三面',
        ':clock330:',
        ':three_thirty:',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕓': [
        '四个OClock',
        ':clock4:',
        ':four_oclock:',
        '时钟四面',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕟': [
        '时钟面 Four-30',
        ':clock430:',
        ':four_thirty:',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕔': [
        '五个OClock',
        ':clock5:',
        ':five_oclock:',
        '锁屏时钟的五面',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕠': [
        '时钟脸五-三十天',
        ':clock530:',
        ':five_thirty:',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕕': [
        '6个OClock',
        ':clock6:',
        ':size_oclock:',
        '时钟面 OClock',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕡': [
        '时钟面',
        ':clock630:',
        ':six_thirty:',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕖': [
        '七个OClock',
        ':clock7:',
        ':seven_oclock:',
        '时钟脸7OClock',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕢': [
        '七十三个时钟',
        ':clock730:',
        ':sever_thirty:',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕗': [
        '八个OClock',
        ':clock8:',
        ':eight_oclock:',
        '时钟脸八个OClock',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕣': [
        '时钟脸八十',
        ':clock830:',
        ':eight_thirty:',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕘': [
        '九个OClock',
        ':clock9:',
        ':nine_clock:',
        '时钟脸九个OClock',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕤': [
        '时钟面部九至三十点',
        ':clock930:',
        ':nine_thirty:',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕙': [
        '十个OClock',
        ':clock10:',
        ':ten_oclock:',
        '时钟脸部Ten OClock',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕥': [
        '时钟脸部-三十度',
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
        '时钟脸十一 OClock',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕦': [
        '时钟脸十一',
        ':clock1130:',
        ':eleven_thirty:',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕛': [
        '十二个OClock',
        ':clock12:',
        ':twelve_oclock:',
        '时钟脸T12 OClock',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕧': [
        '时钟脸T12-30号',
        ':clock1230:',
        ':twelve_thirty:',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '♨️': [
        '热泉子',
        ':hot_springs:',
        'Onsen',
        'Steam',
        ':red:'
    ],
    '💈': [
        'Barber Pole',
        ':barber_pole:',
        '酒吧商店',
        '野蛮条数',
        '快餐店',
        ':blue:',
        ':red:'
    ],
    '🎪': [
        '电路帐单',
        ':circus_tent:',
        '大顶部',
        '圆形'
    ],
    '💢': [
        '角符号',
        ':anger_symbol:',
        '随机标志',
        'Vin Poop',
        ':red:'
    ],
    '🗯️': [
        '右角球队',
        ':right_anger_bubble:',
        ':anger_right:',
        'Zig Zag Bubble',
        '愤怒的语音泡器',
        ':white:'
    ],
    '🗨️': [
        '左语音泡栏',
        ':left_speech_bubble:',
        ':speech_left:'
    ],
    '💊': [
        'Pill',
        ':pill:',
        '胶片',
        '平板电脑',
        'B. 药物',
        '患病情况',
        'ill',
        ':yellow:',
        ':red:'
    ],
    '🎎': [
        'Dolls',
        ':dolls:',
        'Hinamatsuri',
        '帝国元',
        '日元数'
    ],
    '🎏': [
        '卡普流器',
        ':carp_streamer:',
        '鱼标志',
        'Koinobori',
        '风速时钟'
    ],
    '🎐': [
        '风雪',
        ':wind_chime:',
        'Furin',
        '杰利鱼',
        '风铃声'
    ],
    '🎀': [
        '操作区弓箭手',
        ':ribbon_bow:',
        '粉红色靴子',
        '弓箭手',
        ':pink:'
    ],
    '🎁': [
        '包装礼物',
        ':wrapped_gift:',
        '生日存在',
        '圣诞节礼物',
        '礼物',
        '礼品箱',
        '现职',
        '包装过的礼物'
    ],
    '🎫': [
        '服务单',
        ':ticket:',
        '工单图案',
        '世界旅游票'
    ],
    '🃏': [
        'Joker',
        ':joker:',
        'Joker 卡',
        '播放卡片黑色Joker'
    ],
    '💡': [
        '淡出散装物',
        ':light_bulb:',
        '意见',
        '电灯Bulb'
    ],
    '🔦': [
        '闪光灯',
        ':flashlight:',
        '火灯',
        '电火炮'
    ],
    '🏮': [
        '红纸灯',
        ':izakaya_lantern:',
        ':lantern:',
        ':red_paper_lantern:',
        'Asian Lantern',
        '日语Lantern',
        '红灯',
        'Izakaya Lantern',
        ':red:'
    ],
    '📦': [
        '包',
        ':package:',
        '框',
        '包子',
        ':brown:'
    ],
    '📇': [
        '索引卡',
        ':card_index:',
        '罗洛代克',
        '系统卡',
        '卡片索引'
    ],
    '🕳️': [
        '孔子',
        ':hole:',
        ':black:'
    ],
    '👁️‍🗨️': [
        '我是一名证人',
        ':eye_in_speech_bubble:',
        ':eye_speech_bubble:',
        ':eye-in-speech-bubble:',
        '语音中的眼镜'
    ],
    '⚜️': [
        'Fleur-de-lis',
        ':fleur_de_lis:',
        '童子军',
        '新Orleans Saints'
    ],
    '⚗️': [
        'Alembic',
        ':alembic:'
    ],
    '🕯️': [
        '康德尔',
        ':candle:',
        ':white:'
    ],
    '🖼️': [
        '帧图片',
        ':framed_picture:',
        '绘画',
        '图片帧',
        '带图片的帧'
    ],
    '🛍️': [
        '购物箱',
        ':shopping_bags:'
    ],
    '🛒': [
        '购物车',
        ':shopping_cart:',
        '购物',
        ':shopping_trolley:',
        ':gray:',
        ':grey:',
        'Market'
    ],
    '🎟️': [
        '接纳工单',
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
        '收款人',
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
        'Bloom',
        ':broom:',
        '画笔数',
        '扫描',
        ':yellow:',
        'Tidy',
        'Clean'
    ],
    '🎰': [
        '插槽机',
        ':slot_machine:',
        '赌场',
        '水果机',
        '赌场',
        '诗歌机机'
    ],
    '🦽': [
        '手工轮椅子',
        ':manual_wheelchair:',
        ':wheelchair:',
        'invalid',
        'disability',
        'accessibility',
        'mobility'
    ],
    '🦼': [
        '摩托化轮椅子',
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
        'White Cane',
        ':whie_cane:'
    ],
    '🩸': [
        '滴血量',
        ':drop_of_blood:',
        ':red:'
    ],
    '🩹': [
        '粘合片段',
        ':adhesive_bandage:'
    ],
    '🩺': [
        '立体运势',
        ':stethoscope:'
    ],
    '🪶': [
        '羽化',
        ':feather:',
        'Animal'
    ],
    '🪤': [
        '鼠标陷动',
        ':mouse_trap:'
    ],
    '🫖': [
        'Teapot',
        ':teapot:'
    ],
    '🪨': [
        '摇动',
        ':rock:',
        ':gray:',
        ':grey:'
    ],
    '🪵': [
        '木头',
        ':wood:',
        ':brown:'
    ],
    '🪄': [
        '魔法Wand',
        ':magin_wand:'
    ],
    '🔮': [
        '水晶球',
        ':crystal_ball:',
        'Clairvoyant',
        '财富调试器',
        '咨询师',
        '紫色水晶体',
        ':purple:'
    ],
    '🪅': [
        '皮纳塔文',
        ':pinata:',
        ':piñata:'
    ],
    '🪆': [
        '嵌套Dolls',
        ':nesting_dolls:',
        '马特罗什卡'
    ],
    '🪡': [
        '缝纫针头',
        ':swing_needle:'
    ],
    '🪢': [
        '库诺文',
        ':knot:',
        ':red:',
        ':blue:'
    ],
    '🪙': [
        '金币',
        ':coin:'
    ],
    '🪃': [
        'Boomerang',
        ':boomerang:',
        ':brown:'
    ],
    '🪥': [
        '牙刷子',
        ':toothbrush:'
    ],
    '🪦': [
        '头石',
        ':headstone:',
        ':gray:',
        ':grey:'
    ],
    '🪧': [
        'Placard',
        ':placard:'
    ],
    '🪒': [
        '拉索尔',
        ':razor:'
    ],
    '🫙': [
        '杰尔',
        ':jar:',
        ':transparent:'
    ],
    '🛞': [
        '滚轮',
        ':wheel:',
        '车辆',
        '小车',
        ':black:'
    ],
    '🛟': [
        '铃声',
        ':ring_buoy:',
        '生命保护者',
        '生命之环',
        '小船',
        '安全',
        '水',
        '挽救生活',
        ':red:',
        ':white:'
    ],
    '🪬': [
        'Hamsa',
        ':hamsa:',
        'Islam',
        '犹太教协会',
        'Buddhism',
        '基督教协会',
        'A. 宗教问题',
        '幸运的',
        '保护',
        '指导意见',
        '女性能量：',
        'Faith',
        ':blue:'
    ],
    '🪩': [
        '镜像球',
        ':mirror_ball:',
        '迪斯科球'
    ],
    '🪫': [
        '电量低',
        ':low_battery:',
        ':red:',
        '能源',
        '红色的',
        'Device',
        'Smartphone',
        'Computer',
        'Console'
    ],
    '🩻': [
        'X光线',
        ':x_ray:',
        ':x-ray:',
        ':blue:'
    ],
    '🫧': [
        '气球',
        ':bubbles:',
        '肥皂套装',
        '碳化',
        '热门个性',
        ':transparent:'
    ],
    '🪪': [
        '身份卡',
        ':identification_card:',
        '身份',
        '护照：',
        'ID',
        'Country',
        'Security',
        'Travel'
    ],
    '🧿': [
        'Nazar Amulet',
        ':nazar_amulet:',
        '邪恶之眼',
        ':blue:'
    ],
    '🧸': [
        '泰迪熊座',
        ':teddy_bear:',
        '玩具',
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