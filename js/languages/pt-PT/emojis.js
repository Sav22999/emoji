// descriptions took from Emojipedia.org
lang = 'pt';
//use i18n language code of the browser, more details: https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/i18n/LanguageCode
titles_language[lang] = {
    '🔍': 'Resultados',
    '🕒': 'Emojis mais usados',
    '😀': 'Sorrisos',
    '🙋': 'Pessoas',
    '🦊': 'Animais',
    '🅰️': 'Símbolos',
    '🍎': 'Comida e bebidas',
    '🏳️‍🌈': 'Bandeiras',
    '🏊': 'Esportes',
    '✈️': 'Viagens e lugares',
    '🖱️': 'Tecnologias e escritório',
    '👗': 'Roupas e acessórios',
    '🖐️': 'Mãos e partes do corpo',
    '🛎️': 'Outros'
};
emojis_language[lang] = [];
/*search*/
emojis_language[lang][0] = {};
/*smileys*/
emojis_language[lang][2] = {
    '😀': [
        'Cara de Moinho',
        ':grinning:',
        ':grinning_face:',
        '::):',
        'Cara Feliz',
        'Rosto Sorridente'
    ],
    '😃': [
        'Rosto Espiral com Big Eyes',
        ':smiley:',
        ':grinning_face_with_big_eyes:',
        '::D:',
        'Cara Feliz',
        'Rosto Sorridente',
        'Cara sorridente com Boca Aberta'
    ],
    '😄': [
        'Cara moda com Olhos sorridentes',
        ':smile:',
        ':grinning_face_with_smiling_eyes:',
        'Cara Feliz',
        'Rosto Sorridente',
        'Rosto Mostente com Olhos Fantásticos',
        'Rosto sorridente com o Boco Aberto e Olhos Sorridentes'
    ],
    '😁': [
        'Cara de Beaming com Olhos sorridentes',
        ':grin:',
        ':beaming_face_with_smiling_eyes:',
        'Cara moda com Olhos sorridentes'
    ],
    '😆': [
        'Rosto Cintilante',
        ':grinning_squinting_face:',
        ':xD:',
        ':><:',
        'Sorriso Grande',
        'Sorriso de Olhos Fechados',
        'Risos',
        'Rosto suave com Olhos fechados oito vezes',
        'Rosto sorridente com o Boco Aberto e Olhos Fechados'
    ],
    '😅': [
        'Rosto Espiral com Suor',
        ':happy_sweat:',
        'Exercício',
        'Feliz suor',
        'Rosto Mostente com Olhos Fantásticos e Queda de Suor',
        'Rosto sorridente com Boco Aberto e Suor Frio'
    ],
    '🤣': [
        'ROFL',
        ':rofl:',
        'Rolando no chão'
    ],
    '😂': [
        'Rosto com Lágrimas de Alegria',
        ':lol:',
        'Risos',
        'Rindo o riso',
        'Lágrimas de Risos',
        'KKKR'
    ],
    '🙂': [
        'Cara Levemente Sorridente',
        ':smile:',
        '::):',
        'Levemente feliz',
        'Está tudo bem'
    ],
    '🙃': [
        'Cara Invertida',
        ':upside-down_face:',
        ':upside_down_face:',
        'Sarcasm',
        'Silly',
        'Rosto Invertido'
    ],
    '😉': [
        'Rosto Piscando',
        ':winking:',
        ':;):',
        'Piscar',
        'Rosto Piscada',
        'Rosto Piscando'
    ],
    '😊': [
        'Cara sorridente com Olhos sorridentes',
        ':smiling_face:',
        ':^^:',
        'Cara Feliz',
        'Sorriso',
        'Rosto Sorridente'
    ],
    '😇': [
        'Rosto sorridente com Halo',
        ':smiling_angel:',
        'Anjo',
        'Auréola'
    ],
    '🥰': [
        'Cara sorridente com Corações',
        ':smiling_hearts:',
        'Na cara de amor',
        'Cara sorridente com Olhos sorridentes e Três Corações'
    ],
    '😍': [
        'Cara sorridente com Coração-Eyes',
        'amor',
        ':smiling_heart-eyes:',
        ':smiling_heart_eyes:',
        ':*.*:',
        'Olhos de Coração',
        'Rosto de Coração',
        'Cara sorridente com Olhos em forma de Coração'
    ],
    '🤩': [
        'Star-Struck',
        ':star_eyes:',
        'Emocionado',
        'Olhos de Estrela',
        'Olhar estrelado',
        'Rosto Wow',
        'Rosto com Olhos Estrelados',
        'Rosto Espiral com Olhos Estelares'
    ],
    '😘': [
        'Rosto soprando um Beijo',
        'amor',
        ':kissing_face:',
        '::*:',
        '::-*:',
        'Sopro Um Beijo',
        'Beijo Brilhante',
        'Beijos',
        'Cara Arremessando um Beijo'
    ],
    '😗': [
        'Cara de Beijo',
        'beijo',
        ':kissing_face:',
        '::*:',
        '::-*:',
        'Carinha Pato',
        'Kissy Face',
        'Assovio'
    ],
    '☺️': [
        'Cara de Sorriso',
        ':smiling_face:',
        'Cara Feliz',
        'Rosto Sorridente',
        'Sorrindo',
        'Cara de Sorriso Branca'
    ],
    '😚': [
        'Cara de Beijo com Olhos Fechados',
        ':kissing_face:',
        'Cara de Beijo',
        'Kissy Face'
    ],
    '😙': [
        'Chising a cara com Olhos sorridentes',
        ':kissing_face:',
        'Cara de Beijo',
        'Kissy',
        'Assovio',
        'Assovio'
    ],
    '😋': [
        'Comida Selvagem Cara',
        ':savoring_face:',
        'Ótimo',
        'Faminto',
        'Sorrir Lábios de Rosto',
        'Comida Deliciosa Rosto',
        'Yum Yum'
    ],
    '😛': [
        'Rosto com Tongue',
        ':tongue_face:',
        '::P:',
        'Atrevido',
        'Cara de Língua',
        'Tongue-out',
        'Rosto com Tongue Preso'
    ],
    '😜': [
        'Rosto Piscando com Tongue',
        ':winking:',
        ':;P:',
        'Louco',
        'Rosto Louco',
        'Rosto Piscando com o Tongue preso',
        'Enfrente com Tongue Preso e Olho Piscando'
    ],
    '🤪': [
        'Zany Face',
        ':crazy_face:',
        'Olhos malucos',
        'Emocionado',
        'Selvagem',
        'Goofy Face',
        'Rosto Mostente com Um Olho Grande e Um Pequeno'
    ],
    '😝': [
        'Cara apartante com Tongue',
        ':tongue_face:',
        ':xP:',
        'Língua Fora',
        'Rosto com Tongue Preso e Olhos Fechados Noturnos',
        'Face com Tongue Preso e Olhos Fechados'
    ],
    '🤑': [
        'Cara de mês',
        ':money-mouth_face:',
        ':money_mouth_face:',
        '::$:',
        'Olhos de dólar',
        'Cara de Dinheiro',
        'Rico'
    ],
    '🤗': [
        'Rosto de Abraço',
        ':hugging_face:',
        'Abraço',
        'Abraçando',
        'Abraços',
        'Cara feliz com abraçar as Mãos'
    ],
    '🤭': [
        'Ops!',
        ':oops:',
        'Rosto com a mão toda',
        'Cara sorridente com Olhos sorridentes e Olhos cobertos da mão'
    ],
    '🤫': [
        'Shh',
        ':shushing_face:',
        'Filhote',
        'Rosto Esmagador',
        'Hush',
        'Silencioso',
        'Silêncio',
        'Silencioso',
        'Rosto com Cobertura Fechada de Lábios'
    ],
    '🤔': [
        'O',
        ':thinking_face:',
        '?',
        'Hmm',
        'Cara de Pensamento',
        'Polegar Queixo',
        'Pensador',
        'Sombra de Arremesso'
    ],
    '🤐': [
        'CEP',
        'silencioso',
        'silêncio',
        ':zip_face:',
        'Cara de Zipper-Boca',
        'Lábios Selados',
        'Lábios Selados',
        'É Zip',
        'Rosto com um Boco Zipper'
    ],
    '🤨': [
        'Face com sobrancelhas criadas',
        ':face_with_raised_eyebrow:',
        'Colberto',
        'A Rocha',
        'Rosto com sobrancelha criada',
        'Rosto com 1 sobrancelha levantada'
    ],
    '😐': [
        'Rosto Neutro',
        ':neutral_face:',
        ':|',
        'Rosto com Boca reta',
        'Enfrente Reto'
    ],
    '😑': [
        'Cara Impressionante',
        ':expressionless_face:',
        '-_-',
        'Rosto com Boca reta',
        'Rosto Horizontal'
    ],
    '😶': [
        'Rosto sem Boca',
        ':face_without_mouth:',
        'Rosto em branco',
        'Implacável',
        'Silêncio',
        'Silencioso'
    ],
    '😏': [
        'Cara Pistola',
        ':smirking_face:',
        'Desprezando',
        'Rosto Sexual',
        'Rosto de Caneca',
        'Sorriso sugerido'
    ],
    '😒': [
        'Face Não Nomeada',
        ':unamused_face:',
        'Insatisfeito',
        'Chato',
        'Olho Lateral',
        'Não-impresso'
    ],
    '🙄': [
        'Enfrente com Olhos Rolantes',
        ':face_with_rolling_eye:',
        ':eye_roll:',
        'Rolo de Olho'
    ],
    '😬': [
        'Rosto Gritante',
        ':awkward:',
        'Estranho',
        'Eek',
        'Pé na montanha',
        'Nervoso',
        'Snapchat Mutual #1 Melhor Amigo'
    ],
    '🤥': [
        'Rosto de Mentir',
        ':lying_face:',
        'Mentiroso',
        'Nariz Longo',
        'Pinocchio'
    ],
    '😌': [
        'Cara Viva',
        ':relieved_face:',
        'Conteúdo',
        'Prazer'
    ],
    '😔': [
        'Desculpa',
        ':sad_face:',
        'Rosto Pensivo',
        'Pensivo',
        'Triste',
        'Sela',
        'Desagradável',
        'Cara Pensiva Triste'
    ],
    '😪': [
        'Rosto Sonolento',
        ':sleepy_face:',
        'Lado-Lado',
        'Bolha de Snot'
    ],
    '🤤': [
        'Saliva',
        ':saliva_face:',
        'Drooling Face',
        'Drool'
    ],
    '😴': [
        'Rosto Dormindo',
        ':sleeping_face:',
        ':zzz:',
        'zzzz',
        'Cara de Sono',
        'Coragem',
        'Cara Zzz'
    ],
    '🥱': [
        'Cara de Yawning',
        'cansado',
        ':yawning_face:'
    ],
    '😷': [
        'Cara com Máscara Médica',
        'doente',
        'documento',
        ':face_with_medical_mask:',
        'Coronavírus',
        'COVID-19',
        'Rosto de Máscara',
        'Máscara Cirúrgica',
        'ill'
    ],
    '🤒': [
        'Rosto com Termômetro',
        ':face_with_thermometer:',
        ':sick:',
        ':ill:',
        'Ill',
        'Doente'
    ],
    '🤕': [
        'Rosto com Head-Bandage',
        'hospital',
        'doente',
        ':face_with_head-bandage:',
        ':face_with_head_bandage:',
        'Cabeça Bandida',
        'Desajeitado',
        'Ferido',
        'ill'
    ],
    '🤢': [
        'Rosto Nauseado',
        'doente',
        ':nauseated_face:',
        'Disgausa',
        'Rosto Verde',
        'Vômito',
        ':green:',
        'ill'
    ],
    '🤮': [
        'Cara Vômito',
        'doente',
        ':face_vomiting:',
        'Oração',
        'Bleah',
        'Bleurgh',
        'Yuk',
        'Caminhão',
        'BR',
        'Oração',
        'Levantamento em Cima',
        'Vômito',
        'Rosto com Vômito Aberto',
        'ill'
    ],
    '🤧': [
        'Face espirrante',
        'doente',
        ':sneezing_face:',
        'Gesundheit',
        'ill'
    ],
    '🥵': [
        'Cara Quente',
        ':hot_face:',
        'Cara superaquecida',
        ':red:'
    ],
    '🥶': [
        'Rosto Gelado',
        ':cold_face:',
        'Fresco',
        'Frio',
        'Rosto Congelante',
        ':blue:'
    ],
    '🥴': [
        'Cara de Woozy',
        ':woozy_face:',
        'Rosto Bêbado',
        'Rosto com Olhos Impecáveis e Boca Marinha'
    ],
    '😵': [
        'Dizzy Face',
        ':dizzy_face:',
        'Face dos Olhos Cruzados',
        'Rosto de Olhos Espirais'
    ],
    '🤯': [
        'Explodindo Cabeça',
        'boom',
        ':exploding_head:',
        'Explosão Mental',
        'Rosto Eletrificado com Cabeça Explosiva'
    ],
    '🤠': [
        'Chapéu de Cowboy',
        ':cowboy_hat_face:',
        'Caubói',
        'Rosto de Vaqueiro',
        'Carregue com Chapéu de Cowboy'
    ],
    '🥳': [
        'Cara de Partida',
        ':partying_face:',
        'Rosto de festa',
        'Rosto com Chifre de Festa e Chapéu de Festa'
    ],
    '😎': [
        'Cara sorridente com óculos de sol',
        ':smiling_face_with_sunglasses:',
        'Fresco',
        'Melhores Amigos em comum (Snapchat)',
        'Óculos de Sol'
    ],
    '🤓': [
        'Rosto Nerd',
        ':nerd_face:',
        'Nerdy'
    ],
    '🧐': [
        'Face com Monóculo',
        ':face_with_monocle:'
    ],
    '😕': [
        'Cara Confundida',
        ':confused_face:',
        '::/:',
        '::S:',
        'Nonpluscada',
        'Quebra-cabeça'
    ],
    '😟': [
        'Cara Preocupada',
        ':worried_face:',
        '::(:',
        'Triste',
        'Sela'
    ],
    '🙁': [
        'Cara de Inundação Levemente',
        ':slightly_frowning_face:',
        '::(:',
        'Um pouco triste'
    ],
    '☹️': [
        'Rosto de Substância',
        ':frowning_face:',
        '::(:',
        'Megafrown',
        'Cara de Inundação Branca'
    ],
    '😮': [
        'Uau',
        ':wow:',
        '::O:',
        'Ah, não!',
        'Rosto com Boca Aberta',
        'Boca aberta',
        'Rosto Surpreso com Boca Aberta'
    ],
    '😯': [
        'Rosto Espiral',
        ':husked_face:',
        '::O:',
        'Surpresa',
        'Rosto Surpreso'
    ],
    '😲': [
        'Rosto Eletrificado',
        ':shocked_face:',
        '::O:',
        'Uau',
        'Cara de Pedra',
        'Rosto Bêbado',
        'Rosto Difusão'
    ],
    '😳': [
        'Rosto Abandonado',
        ':flushed_face:',
        '::$:',
        'Cara envergonhada',
        'Envergonhado',
        'Vergonha',
        'Face com Olhos Abertos'
    ],
    '🥺': [
        'Cara de Esmagador',
        ':pleading_face:',
        '::(:',
        'Iniciando',
        'Olhos Lustrosos',
        'Simp',
        'Cara com Olhos Pleme'
    ],
    '😦': [
        'Rosto de Substância com Boca Aberta',
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
        'Assustado',
        ':scared:',
        ':D::',
        'Cara assustadora',
        'Surpreso'
    ],
    '😰': [
        'Cara Preguiçosa com Suor',
        ':anxious_face_with_sweat:',
        'Rosto Azul',
        'Rosto Preocupado',
        'Rosto Nervoso',
        'Rosto com Boco Aberto e Suor Frio'
    ],
    '😥': [
        'Cara Triste mas Assustada',
        ':sad_but_relieved_face:',
        '::(:',
        'Suor das Sobrancelhas',
        'Disnomeado, mas Relieved Face'
    ],
    '😢': [
        'Rosto Chorando',
        ':crying_face:',
        '::(:',
        'Chorando',
        'Lágrima'
    ],
    '😭': [
        'Cara gritante',
        ':loudly_crying_face:',
        'Bawling',
        'Chorando',
        'Lágrimas Triste',
        'Sobbing'
    ],
    '😱': [
        'Rosto parado com medo',
        ':face_screaming_in_fear:',
        'Apenas casa',
        'Grito',
        'Rosto Gritante'
    ],
    '😖': [
        'Cara Confundada',
        ':confounded_face:',
        'Boca Silenciosa',
        'Rosto Arrancado'
    ],
    '😣': [
        'Rosto Perseverante',
        ':persevering_face:',
        'Rosto Indefeso',
        'Olhos arranhados'
    ],
    '😞': [
        'Cara Desnomeada',
        ':disappointed_face:',
        '::(:',
        'Triste',
        'Sela'
    ],
    '😓': [
        'Rosto Downcast com Suor',
        ':downcast_face_with_sweat:',
        'Trabalho duro',
        'Rosto de suor triste',
        'Rosto com Suor Frio'
    ],
    '😩': [
        'Rosto Wear',
        ':weary_face:',
        'Cara Distraught',
        'Rua'
    ],
    '😫': [
        'Cara Cansada',
        ':tired_face:',
        'Exausto',
        'Fed Acima',
        'Cara Distraught'
    ],
    '😤': [
        'Rosto com vapor do Nose',
        ':face_with_steam_from_nose:',
        'Aparelhos de reclamações',
        'Frustrado',
        'Rosto Maluco',
        'Steaming',
        'Enfrente com a cara da Raiva'
    ],
    '😡': [
        'Descartar o rosto',
        'fuck',
        ':pouting_face:',
        'Rosto Raivoso',
        'Cara mal-humorada',
        'Rosto Maluco',
        'Rosto Vermelho',
        ':red:'
    ],
    '😠': [
        'Rosto Raivoso',
        ':angry_face:',
        'Irritado',
        'Cara mal-humorada'
    ],
    '🤬': [
        'Camisa',
        'fuck',
        ':swearing:',
        '@#$%&!',
        'Rosto com símbolos no Boco',
        'Maldição',
        'Disfarça',
        'Grawlix',
        'Cara com Símbolos sobre Boca',
        'Rosto sério com Símbolos Cobertura de Boca',
        ':red:'
    ],
    '🥲': [
        'Sorrir o rosto com lágrima',
        ':smiling_face_with_tear:'
    ],
    '😮‍💨': [
        'Esboço de rosto',
        ':face_exhaling:',
        'Coxa'
    ],
    '😵‍💫': [
        'Face com Olhos Espirais',
        ':face_with_spiral_eyes:',
        'Dizzy Face'
    ],
    '😶‍🌫️': [
        'Rosto nas Nuvens',
        'Fumaça',
        ':face_in_clouds:',
        'Brain Fog',
        'Esquecido',
        'Neblina'
    ],
    '🥸': [
        'Cara disfarçada',
        ':disguised_face:'
    ],
    '🫠': [
        'Rosto Derretido',
        ':melting_face:'
    ],
    '🫢': [
        'Rosto com Olhos abertos e Mão sobre a boca',
        ':face_with_open_eyes_and_hand_over_mouth:'
    ],
    '🫣': [
        'Cara com o Olho Pequeno',
        ':face_with_peeking_eye:'
    ],
    '🫡': [
        'Cara de Saudação',
        ':saluting_face:',
        'Militar',
        'Exército',
        'RAF',
        'Azul-marinho'
    ],
    '🫥': [
        'Face de Linha Pontilhada',
        ':dotted_line_face:',
        ':transparent:'
    ],
    '🫤': [
        'Rosto com Boca Diagonal',
        ':face_with_diagonal_mouth:'
    ],
    '🥹': [
        'Presa na Face nas Lágrimas Dorsais',
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
        'Cara sorridente com chifres',
        ':smiling_face_with_horns:',
        'Diabo',
        'Chifres do Demônio',
        'Feliz Diabo',
        'Demônio Roxo',
        'Diabo Vermelho',
        ':purple:'
    ],
    '👿': [
        'Rosto Raivoso com chifres',
        ':angry_face_with_horns:',
        'Diabo',
        'Chifres do Demônio',
        'Demônio Roxo',
        'Goblin roxo',
        'Demônio Triste',
        'Imp',
        ':purple:'
    ],
    '🤡': [
        'Rosto de Palhaço',
        ':clown_face:',
        'Palhaço Assustador',
        'Palhaço Maligno',
        'Palhaço Assustador'
    ],
    '👽': [
        'Alienígena',
        ':alien:',
        'ET'
    ],
    '👾': [
        'Monstro alienígena',
        ':alien_monster:',
        'Invasor Espacial',
        'Vídeo Game Monster'
    ],
    '🤖': [
        'Robot',
        ':robot:',
        'Rosto Robô'
    ],
    '👹': [
        'Ogre',
        ':ogre:',
        'Rosto de Máscara',
        'Oni',
        'Monstro vermelho',
        'Ogro Japonês',
        ':red:'
    ],
    '👻': [
        'Fantasma',
        ':ghost:',
        'Halloween'
    ],
    '🗣️': [
        'Cabeça de Falar',
        ':speaking_head:',
        'Mansplante',
        'Grito',
        'Grito',
        'Cabeça Falando em Silhouette',
        ':blue:'
    ],
    '👤': [
        'Poeira em Silhouette',
        ':bust_in_silhouette:',
        'Sombra',
        'Silhouette',
        'Usuário',
        'Silhuette de Pessoa',
        ':blue:'
    ],
    '🫂': [
        'Pessoas abraçando',
        ':people_hugging:',
        ':blue:'
    ],
    '👥': [
        'Busts em Silhouette',
        ':busts_in_silhouette:',
        'Sombras',
        'Silhouettes',
        'Utilizadores',
        'Silhueta de duas pessoas',
        ':blue:'
    ]
};
/*people*/
emojis_language[lang][3] = {
    '👶{{skin_tone}}': [
        'Bebê',
        ':baby:',
        'Filho(a)',
        'Criança'
    ],
    '🧒{{skin_tone}}': [
        'Filho(a)',
        ':child:',
        'Criança Neutra de Gênero'
    ],
    '👧{{skin_tone}}': [
        'Menina',
        ':girl:',
        ':woman:'
    ],
    '🧑{{skin_tone}}': [
        'Pessoa',
        ':person:',
        'Gênero Neutro Adult',
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
        'Pessoa: Cabelo Vermelho',
        ':person_red_hair:',
        'Pessoa Ginger',
        'Redhead de pessoa',
        'Pessoa com Cabelo Vermelho',
        ':person:'
    ],
    '🧑{{skin_tone}}‍🦱': [
        'Pessoa: Cabelo encaracolado',
        ':person_curly_hair:',
        'Pessoa com Cabelo Enfurecido',
        ':person:'
    ],
    '🧑{{skin_tone}}‍🦳': [
        'Pessoa: Cabelo branco',
        ':person_white_hair:',
        'Pessoa com Cabelo Cinzento',
        ':person:'
    ],
    '🧑{{skin_tone}}‍🦲': [
        'Pessoa: Cara',
        ':person_bald:',
        'Pessoa Sem Cabelo',
        ':person:'
    ],
    '👱{{skin_tone}}': [
        'Pessoa: Cabelo loiro',
        ':person_blond_hair:',
        'Pessoa com Cabelo Blonde',
        ':person:'
    ],
    '👨{{skin_tone}}': [
        'Homem',
        ':man:',
        'Masculino',
        'Homem Bigode',
        ':man:'
    ],
    '🧔{{skin_tone}}‍♂️': [
        'Cara: Barba',
        ':man_beard:',
        'Barba',
        'Homem Barbudo',
        'Pessoa Barbuda',
        ':man:'
    ],
    '👨{{skin_tone}}‍🦰': [
        'Cara: Cabelo Vermelho',
        ':man_red_hair:',
        'Homem Gengibre',
        'Man Redhead',
        'Homem com cabelo vermelho',
        ':man:'
    ],
    '👨{{skin_tone}}‍🦱': [
        'Homem: Cabelo encaracolado',
        ':man_curly_hair:',
        'Homem com cabelo encaracolado',
        ':man:'
    ],
    '👨{{skin_tone}}‍🦳': [
        'Cara: Cabelo branco',
        ':man_white_hair:',
        'Homem com Cabelo Cinzento',
        ':man:'
    ],
    '👨{{skin_tone}}‍🦲': [
        'Filho: Mandado',
        ':man_bald:',
        'Homem com Cabelo',
        ':man:'
    ],
    '👱{{skin_tone}}‍♂️': [
        'Cara: Cabelo loiro',
        ':man_blond_hair:',
        'Homem com Cabelo Loiro',
        ':man:'
    ],
    '👩{{skin_tone}}': [
        'Mulher',
        ':woman:',
        'Feminino',
        'Senhora',
        'Mulher Amarela',
        ':woman:'
    ],
    '🧔{{skin_tone}}‍♀️': [
        'Mulheres: Barba',
        ':woman_beard:',
        'Barba',
        'Mulher de Barba',
        ':woman:'
    ],
    '👩{{skin_tone}}‍🦰': [
        'Mulheres: Cabelo Vermelho',
        ':woman_red_hair:',
        'Mulheres de Gengibre',
        'Woman Redhead',
        'Mulher com Cabelo Vermelho',
        ':woman:'
    ],
    '👩{{skin_tone}}‍🦱': [
        'Mulheres: Cabelo encaracolado',
        ':woman_curly_hair:',
        'Mulher com Cabelo Enrolado',
        ':woman:'
    ],
    '👩{{skin_tone}}‍🦳': [
        'Mulheres: Cabelo Branco',
        ':woman_white_hair:',
        'Mulher com Cabelo Cinza',
        ':woman:'
    ],
    '👩{{skin_tone}}‍🦲': [
        'Mulheres: careca',
        ':woman_bald:',
        'Mulher Com Sem Cabelo',
        ':woman:'
    ],
    '👱{{skin_tone}}‍♀️': [
        'Mulheres: Cabelo loiro',
        ':woman_blond_hair:',
        'Mulher com Cabelo Blonde',
        ':woman:'
    ],
    '👴{{skin_tone}}': [
        'Homem Mais Velho',
        ':older_man:',
        ':older:',
        'Homem idoso',
        'Grandpa',
        'Homem Velho',
        ':man:'
    ],
    '👵{{skin_tone}}': [
        'Mulher mais velha',
        ':older_woman:',
        ':older:',
        'Mulher idosa',
        'Vovó',
        'nanna',
        'Senhora de Idade',
        'Mulher Velha',
        ':woman:'
    ],
    '🧓{{skin_tone}}': [
        'Pessoa mais velha',
        ':older_person:',
        ':older:',
        'Gênero Neutro Adulto Antigo',
        ':person:'
    ],
    '👼{{skin_tone}}': [
        'Anjo bebê',
        ':baby_angel:',
        'Anjo',
        'Cherub',
        'Cupido',
        'Colocar'
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
        'Pessoa de Natal',
        ':person:'
    ],
    '🤴{{skin_tone}}': [
        'Príncipe',
        ':price:',
        ':man:'
    ],
    '👸{{skin_tone}}': [
        'Princesa',
        ':pricess:',
        'Garota loira',
        'Coroa com garota',
        'Menina com Tiara',
        ':woman:'
    ],
    '🫅{{skin_tone}}': [
        'Pessoa com Coroa',
        ':person_with_crown:',
        ':person:'
    ],
    '👳{{skin_tone}}‍♂️': [
        'Turban de uso humano',
        ':man_wearing_turban:',
        ':wearing_turban:',
        'Árabe',
        'Muçulmano',
        'sikh',
        'Turban',
        ':man:'
    ],
    '👳{{skin_tone}}‍♀️': [
        'Mulher na turba de arrendamento',
        ':woman_wearing_turban:',
        ':wearing_turban:',
        'Árabe',
        'Muçulmano',
        'sikh',
        'Turban',
        ':woman:'
    ],
    '👳{{skin_tone}}': [
        'Pessoa usando turban',
        ':person_wearing_turban:',
        ':wearing_turban:',
        'Árabe',
        'Muçulmano',
        'sikh',
        'Turban',
        ':person:'
    ],
    '👲{{skin_tone}}': [
        'Pessoa com crânios',
        ':person_with_skullcap:',
        'Homem asiático',
        'Homem com Bona Chinesa',
        'Homem com Gua Pi Mao',
        ':person:'
    ],
    '🧕{{skin_tone}}': [
        'Mulher com lenço',
        ':woman_with_headscarf:',
        'Hijab',
        'Pessoa com headscarf',
        ':woman:'
    ],
    '🤵{{skin_tone}}‍♀️': [
        'Homem no Tuxedo',
        ':man_in_tuxedo:',
        ':tuxedo:',
        'Groom',
        'Roupa de Homem',
        'Casamento',
        ':man:'
    ],
    '🤵{{skin_tone}}‍♂️': [
        'Mulher no Tuxedo',
        ':woman_in_tuxedo:',
        ':tuxedo:',
        'Groom',
        'Feminino sob Roupa',
        'Casamento',
        ':woman:'
    ],
    '🤵{{skin_tone}}': [
        'Pessoa no Tuxedo',
        ':person_in_tuxedo:',
        ':tuxedo:',
        'Groom',
        'Pessoa em terno',
        'Casamento',
        ':person:'
    ],
    '👰{{skin_tone}}‍♂️': [
        'Man com Veil',
        ':man_with_veil:',
        ':veil:',
        'Casamento',
        'Noite',
        'Casamento',
        ':man:'
    ],
    '👰{{skin_tone}}‍♀️': [
        'Mulher com Veil',
        ':woman_with_veil:',
        ':veil:',
        'Casamento',
        'Noiva',
        'Noiva com Veil',
        'Casamento',
        ':woman:'
    ],
    '👰{{skin_tone}}': [
        'Pessoa com Veil',
        ':person_with_veil:',
        ':veil:',
        'Casamento',
        'Casamento',
        ':person:'
    ],
    '👨{{skin_tone}}‍🍼': [
        'Bebê humano em alimentação',
        ':man_feeding_baby:',
        ':feeding_baby:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🍼': [
        'Mulher Bebê Alimentador',
        ':woman_feeding_baby:',
        ':feeding_baby:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🍼': [
        'Pessoa alimentando bebê',
        ':person_feeding_baby:',
        ':feeding_baby:',
        ':person:'
    ],
    '🥷': [
        'Ilimitado',
        ':ninja:'
    ],
    '🫃{{skin_tone}}': [
        'Homem grávida',
        ':pregnant_man:',
        ':pregnant:',
        'Gravidez',
        ':man:'
    ],
    '🤰{{skin_tone}}': [
        'Mulher grávida',
        ':pregnant_woman:',
        ':pregnant:',
        'Gravidez',
        'Dama grávida',
        ':woman:'
    ],
    '🫄{{skin_tone}}': [
        'Pessoa grávida',
        ':pregnant_person:',
        ':pregnant:',
        'Gravidez',
        ':person:'
    ],
    '🤱{{skin_tone}}': [
        'Breast-Feeding',
        ':breast-feeding:',
        ':breast_feeding:',
        'Breastfeeding'
    ],
    '🦸{{skin_tone}}‍♂️': [
        'Herói do Homem',
        ':man_superhero:',
        ':superhero:',
        ':man:'
    ],
    '🦸{{skin_tone}}‍♀️': [
        'Super herói feminino',
        ':woman_superhero:',
        ':superhero:',
        ':woman:'
    ],
    '🦸{{skin_tone}}': [
        'Superherói Pessoa',
        ':person_superhero:',
        ':superhero:',
        ':person:'
    ],
    '🦹{{skin_tone}}‍♂️': [
        'Super vilão de homem',
        ':man_supervillain:',
        ':supervillain:',
        ':man:'
    ],
    '🦹{{skin_tone}}‍♀️': [
        'Mulher Supervillain',
        ':woman_supervillain:',
        ':supervillain:',
        ':woman:'
    ],
    '🦹{{skin_tone}}': [
        'Supervilão Pessoal',
        ':person_supervillain:',
        ':supervillain:',
        ':person:'
    ],
    '🧙{{skin_tone}}‍♂️': [
        'Mago Homem',
        ':man_mage:',
        ':mage:',
        'Sorcerer',
        'Assistente',
        ':man:'
    ],
    '🧙{{skin_tone}}‍♀️': [
        'Mago feminino',
        ':woman_mage:',
        ':mage:',
        'Bruxa',
        'Feiticeiro',
        'Assistente',
        ':woman:'
    ],
    '🧙{{skin_tone}}': [
        'Mago Pessoal',
        ':person_mage:',
        ':mage:',
        'Assistente',
        ':mage:',
        ':person:'
    ],
    '🧚{{skin_tone}}‍♂️': [
        'Fada do Homem',
        ':man_fairy:',
        ':fairy:',
        ':man:'
    ],
    '🧚{{skin_tone}}‍♀️': [
        'Fada feminina',
        ':woman_fairy:',
        ':fairy:',
        ':woman:'
    ],
    '🧚{{skin_tone}}': [
        'Fada Pessoal',
        ':person_fairy:',
        ':fairy:',
        ':person:'
    ],
    '🧛{{skin_tone}}‍♂️': [
        'Vampiro Homem',
        ':man_vampire:',
        ':vampire:',
        'Drácula',
        ':man:'
    ],
    '🧛{{skin_tone}}‍♀️': [
        'Vampiro feminino',
        ':woman_vampire:',
        ':vampire:',
        ':woman:'
    ],
    '🧛{{skin_tone}}': [
        'Vampiro Pessoal',
        ':person_vampire:',
        ':vampire:',
        ':person:'
    ],
    '🧜{{skin_tone}}‍♂️': [
        'Mercador',
        ':merman:',
        'Merboy',
        ':man:'
    ],
    '🧜{{skin_tone}}‍♀️': [
        'Sereia',
        ':mermaid:',
        'Fundir',
        ':woman:'
    ],
    '🧜{{skin_tone}}': [
        'Merperson',
        ':merperson:',
        ':person:'
    ],
    '🧝{{skin_tone}}‍♂️': [
        'Elfo Homem',
        ':man_elf:',
        ':elf:',
        ':man:'
    ],
    '🧝{{skin_tone}}‍♀️': [
        'Elfo Feminino',
        ':woman_elf:',
        ':elf:',
        ':woman:'
    ],
    '🧝{{skin_tone}}': [
        'Elfo Pessoal',
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
        'Gênio da pessoa',
        ':person_genie:',
        ':genie:',
        ':person:'
    ],
    '🕵️{{skin_tone}}‍♂️': [
        'Detetive humano',
        ':man_detective:',
        ':detective:',
        'Olho Privado',
        'Sleuth',
        'Espião',
        'Man Sleuth',
        'Sleuth ou Espião',
        '007',
        'Inspetor',
        ':man:'
    ],
    '🕵️{{skin_tone}}‍♀️': [
        'Mulher Detetive',
        ':woman_detective:',
        ':detective:',
        'Olho Privado',
        'Sleuth',
        'Espião',
        'Adormecido feminino',
        'Sleuth ou Espião',
        '007',
        'Inspetor',
        ':woman:'
    ],
    '🕵{{skin_tone}}': [
        'Detetive de pessoa',
        ':person_detective:',
        ':detective:',
        'Olho Privado',
        'Sleuth',
        'Espião',
        'Suspensão Pessoal',
        'Sleuth ou Espião',
        '007',
        'Inspetor',
        ':person:'
    ],
    '💂{{skin_tone}}‍♂️': [
        'Homem: Guarda',
        ':man_guard:',
        ':guard:',
        'Guarda Britânico',
        'Guarda de Pé',
        ':man:'
    ],
    '💂{{skin_tone}}‍♀️': [
        'Mulheres: Guarda',
        ':woman_guard:',
        ':guard:',
        'Guarda Britânico',
        'Guarda de Pé',
        ':woman:'
    ],
    '💂{{skin_tone}}': [
        'Pessoa: Guarda',
        ':person_guard:',
        ':guard:',
        'Guarda Britânico',
        'Guarda de Pé',
        ':person:'
    ],
    '👮{{skin_tone}}‍♂️': [
        'Oficial de polícia',
        ':man_police_officer:',
        ':police_officer:',
        'Policial',
        'Policia',
        'Policiano',
        ':man:'
    ],
    '👮{{skin_tone}}‍♀️': [
        'Oficial da Polícia feminina',
        ':woman_police_officer:',
        ':police_officer:',
        'Policial',
        'Policia',
        'Polícia',
        ':woman:'
    ],
    '👮{{skin_tone}}': [
        'Oficial de polícia',
        ':person_police_officer:',
        ':police_officer:',
        'Policial',
        'Policia',
        ':person:'
    ],
    '👨{{skin_tone}}‍🚒': [
        'Bombeiro Homem',
        ':man_firefighter:',
        ':firefighter:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🚒': [
        'Mulher como Bombeiro',
        ':woman_firefighter:',
        ':firefighter:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🚒': [
        'Bombeiro Pessoa',
        ':person_firefighter:',
        ':firefighter:',
        ':person:'
    ],
    '👨{{skin_tone}}‍✈️': [
        'Piloto Homem',
        ':man_pilot:',
        ':pilot:',
        ':man:'
    ],
    '👩{{skin_tone}}‍✈️': [
        'Piloto Mulher',
        ':woman_pilot:',
        ':pilot:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍✈️': [
        'Piloto Pessoal',
        ':person_pilot:',
        ':pilot:',
        ':person:'
    ],
    '👨{{skin_tone}}‍💻': [
        'Tecnologia de Homem',
        ':man_technologist:',
        ':technologist:',
        'Tecnologia de Homem',
        ':man:'
    ],
    '👩{{skin_tone}}‍💻': [
        'Tecnologia Mulher',
        ':woman_technologist:',
        ':technologist:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍💻': [
        'Tecnologia da Pessoa',
        ':person_technologist:',
        ':technologist:',
        ':person:'
    ],
    '👨{{skin_tone}}‍🎤': [
        'Man cantor',
        ':man_singer:',
        ':singer:',
        'Bowie',
        'Aladdin Sane',
        ':man:'
    ],
    '👩{{skin_tone}}‍🎤': [
        'Cantor feminino',
        ':woman_singer:',
        ':singer:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🎤': [
        'Cantor Pessoal',
        ':person_singer:',
        ':singer:',
        ':person:'
    ],
    '👨{{skin_tone}}‍🎨': [
        'Artista de Homem',
        ':man_artist:',
        ':artist:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🎨': [
        'Artista Mulher',
        ':woman_artist:',
        ':artist:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🎨': [
        'Artista Pessoa',
        ':person_artist:',
        ':artist:',
        ':person:'
    ],
    '👷{{skin_tone}}‍♂️': [
        'Trabalhador de Construção',
        ':man_contruction_worker:',
        ':contruction_worker:',
        ':man:'
    ],
    '👷{{skin_tone}}‍♀️': [
        'Mulher Trabalhadora de Construção',
        ':woman_contruction_worker:',
        ':contruction_worker:',
        ':woman:'
    ],
    '👷{{skin_tone}}': [
        'Trabalhador de Construção Pessoal',
        ':person_contruction_worker:',
        ':contruction_worker:',
        ':person:'
    ],
    '👨{{skin_tone}}‍🚀': [
        'Astronauta de Homem',
        ':man_astronaut:',
        ':astronaut:',
        'Cosmonauta de Homem',
        ':man:'
    ],
    '👩{{skin_tone}}‍🚀': [
        'Mulher astronauta',
        ':woman_astronaut:',
        ':astronaut:',
        'Mulher Cosmonauta',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🚀': [
        'Astronauta Pessoa',
        ':person_astronaut:',
        ':astronaut:',
        'Pessoa Cosmonauta',
        ':person:'
    ],
    '👨{{skin_tone}}‍🔬': [
        'Cientista de Homem',
        ':man_scientist:',
        ':scientist:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🔬': [
        'Cientista Mulher',
        ':woman_scientist:',
        ':scientist:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🔬': [
        'Cientista de pessoa',
        ':person_scientist:',
        ':scientist:',
        ':person:'
    ],
    '👨{{skin_tone}}‍💼': [
        'Trabalhador do Escritório',
        ':man_office_worker:',
        ':office_worker:',
        'CEO',
        'Empresário',
        ':man:'
    ],
    '👩{{skin_tone}}‍💼': [
        'Mulher Trabalhadora Escritório',
        ':woman_office_worker:',
        ':office_worker:',
        'Empresário',
        'CEO',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍💼': [
        'Trabalhador de Escritório pessoal',
        ':person_office_worker:',
        ':office_worker:',
        'Empresas',
        'CEO',
        ':person:'
    ],
    '👨{{skin_tone}}‍🏭': [
        'Trabalhador de Fábrica',
        ':man_factory_worker:',
        ':factory_worker:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🏭': [
        'Trabalhador de Fábrica',
        ':woman_factory_worker:',
        ':factory_worker:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🏭': [
        'Pessoa que trabalha na fábrica',
        ':person_factory_worker:',
        ':factory_worker:',
        ':person:'
    ],
    '👨{{skin_tone}}‍🔧': [
        'Mecânico de Homem',
        ':man_mechanic:',
        ':mechanic:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🔧': [
        'Mulher Mecânica',
        ':woman_mechanic:',
        ':mechanic:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🔧': [
        'Pessoa Mecânica',
        ':person_mechanic:',
        ':mechanic:',
        ':person:'
    ],
    '👨{{skin_tone}}‍🍳': [
        'Cozinheiro Humano',
        ':man_cook:',
        ':cook:',
        'Chefe de Homem',
        'Chefe Masculino',
        ':man:'
    ],
    '👩{{skin_tone}}‍🍳': [
        'Cozinheiro Mulher',
        ':woman_cook:',
        ':cook:',
        'Chefe da Mulher',
        'Chef Feminino',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🍳': [
        'Cozinheiro Pessoal',
        ':person_cook:',
        ':cook:',
        'Chefe Pessoa',
        ':person:'
    ],
    '👨{{skin_tone}}‍🌾': [
        'Fazendeiro Homem',
        ':man_farmer:',
        ':farmer:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🌾': [
        'Fazendeiro Mulher',
        ':woman_farmer:',
        ':farmer:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🌾': [
        'Fazendeiro Pessoa',
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
        'Aluno homem',
        ':man_student:',
        ':student:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🎓': [
        'Estudante feminino',
        ':woman_student:',
        ':student:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🎓': [
        'Estudante de pessoa',
        ':person_student:',
        ':student:',
        ':person:'
    ],
    '👨{{skin_tone}}‍⚕️': [
        'Trabalhador de Saúde do Homem',
        ':man_health_worker:',
        ':health_worker:',
        'Doutor Masculino',
        'Enfermeira Masculina',
        ':man:'
    ],
    '👩{{skin_tone}}‍⚕️': [
        'Mulher Trabalhadora de Saúde',
        ':woman_health_worker:',
        ':health_worker:',
        'Doutor Feminino',
        'Nurse Feminina',
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
        'Shrugging de Homem',
        ':man_shrugging:',
        ':shrugging:',
        'homem idk',
        'dunno',
        ':man:'
    ],
    '🤷{{skin_tone}}‍♀️': [
        'Mulher em Shrugging',
        ':woman_shrugging:',
        ':shrugging:',
        'idk mulher',
        'dunno',
        ':woman:'
    ],
    '🤷{{skin_tone}}': [
        'Shrugging de pessoa',
        ':person_shrugging:',
        ':shrugging:',
        'dar pessoa',
        'dunno',
        ':person:'
    ],
    '🤦{{skin_tone}}‍♂️': [
        'Pelúcia do Homem',
        ':man_facepalming:',
        ':facepalming:',
        ':man:'
    ],
    '🤦{{skin_tone}}‍♀️': [
        'Fidelidade feminina',
        ':woman_facepalming:',
        ':facepalming:',
        ':woman:'
    ],
    '🤦{{skin_tone}}': [
        'Facial Pessoa',
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
        'Pessoa Bowing',
        ':person_bowing:',
        ':bowing:',
        ':person:'
    ],
    '🧏{{skin_tone}}‍♂️': [
        'Homem Inferior',
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
        'Pessoa Indiferente',
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
        'Mão Criadora de Mulher',
        ':woman_raising_hand:',
        'Feliz Mulher Gerente Uma Mão',
        ':raising_hand:',
        ':woman:'
    ],
    '🙋{{skin_tone}}': [
        'Pessoa que levanta a mão',
        ':person_raising_hand:',
        'Feliz Pessoa que levanta uma Mão',
        ':raising_hand:',
        ':person:'
    ],
    '💁{{skin_tone}}‍♂️': [
        'Ponta de Homem',
        ':man_tipping_hand:',
        'Homem do Centro de Informações',
        ':tipping_hand:',
        ':man:'
    ],
    '💁{{skin_tone}}‍♀️': [
        'Mão fêmea de gorjeta',
        ':woman_tipping_hand:',
        'Mulher do Centro de Informação',
        ':tipping_hand:',
        ':woman:'
    ],
    '💁{{skin_tone}}': [
        'Ponta de Pessoa',
        ':person_tipping_hand:',
        'Informação do Desk',
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
        'Mulher Gesto OK',
        ':woman_gesturing_ok:',
        ':gesturing_ok:',
        ':woman:'
    ],
    '🙆{{skin_tone}}': [
        'Gesto de pessoa OK',
        ':person_gesturing_ok:',
        ':gesturing_ok:',
        ':person:'
    ],
    '🙅{{skin_tone}}‍♂️': [
        'Gesto de Homem',
        ':man_gesturing_no:',
        ':gesturing_no:',
        ':man:'
    ],
    '🙅{{skin_tone}}‍♀️': [
        'Mulher Gesto Não',
        ':woman_gesturing_no:',
        ':gesturing_no:',
        ':woman:'
    ],
    '🙅{{skin_tone}}': [
        'Gesto Pessoa Não',
        ':person_gesturing_no:',
        ':gesturing_no:',
        ':person:'
    ],
    '🙎{{skin_tone}}‍♂️': [
        'Poupar Homem',
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
        'Poupando pessoa',
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
        'Mulher Vagando',
        ':woman_frowining:',
        ':frowining:',
        ':woman:'
    ],
    '🙍{{skin_tone}}': [
        'Pessoa Frowning',
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
        'Zumbi Pessoa',
        ':person_zombie:',
        ':zombie:',
        ':person:'
    ],
    '🚶{{skin_tone}}‍♂️': [
        'Homem caminhando',
        ':man_walking:',
        ':walking:',
        ':man:'
    ],
    '🚶{{skin_tone}}‍♀️': [
        'Mulher Caminhando',
        ':woman_walking:',
        ':walking:',
        ':woman:'
    ],
    '🚶{{skin_tone}}': [
        'Pessoa que anda',
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
        'Homem de Pé',
        ':man_standing:',
        ':standing:',
        ':man:'
    ],
    '🧍{{skin_tone}}‍♀️': [
        'Mulher em Pé',
        ':woman_standing:',
        ':standing:',
        ':woman:'
    ],
    '🧍{{skin_tone}}': [
        'Pessoa Permanente',
        ':person_standing:',
        ':standing:',
        ':person:'
    ],
    '🧎{{skin_tone}}‍♂️': [
        'Ajoelhamento de Homem',
        ':man_kneeling:',
        ':kneeling:',
        ':man:'
    ],
    '🧎{{skin_tone}}‍♀️': [
        'Mulher ajoelhada',
        ':woman_kneeling:',
        ':kneeling:',
        ':woman:'
    ],
    '🧎{{skin_tone}}': [
        'Kneelink de pessoa',
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
        'Homem com Bengala Branca',
        ':man_with_white_cane:',
        ':white_cane:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🦯': [
        'Mulher com Bengala Branca',
        ':woman_with_white_cane:',
        ':white_cane:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🦯': [
        'Pessoa com a Bengala Branca',
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
        'Mulher em Cadeira Motorizada',
        ':woman_in_motorized_wheelchair:',
        ':motorized_wheelchair:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🦼': [
        'Pessoa em Motorized Wheelchair',
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
        'Homem no Manual Wheelchair',
        ':man_manual_wheelchair:',
        ':manual_wheelchair:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🦽': [
        'Mulher na 4x4 manual',
        ':woman_manual_wheelchair:',
        ':manual_wheelchair:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🦽': [
        'Pessoa em cadeirante manual',
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
        'Homens com Orelhas de Coelho',
        ':men_with_bunny_hears:',
        ':bunny_ears:',
        ':man:'
    ],
    '👯‍♀️': [
        'Mulheres com Orelhas de Coelho',
        ':women_with_bunny_hears:',
        ':bunny_ears:',
        ':woman:'
    ],
    '👯': [
        'Pessoas com Orelhas de Coelho',
        ':people_with_bunny_hears:',
        ':bunny_ears:',
        ':person:'
    ],
    '🕴️{{skin_tone}}': [
        'Pessoa do Traje Levitador',
        ':person_in_suit_levitating:',
        'Homem Hover',
        'Menino ruim',
        'Walt Jabsco',
        'Homem de Traje de Levitação de Negócios',
        ':person:'
    ],
    '🧖{{skin_tone}}‍♂️': [
        'Homem na sala de Steam',
        ':man_in_steamy_room:',
        ':steamy_room:',
        'Homem em Sauna',
        ':man:'
    ],
    '🧖{{skin_tone}}‍♀️': [
        'Mulher na sala de Steamy',
        ':woman_in_steamy_room:',
        ':steamy_room:',
        'Mulher em Sauna',
        ':woman:'
    ],
    '🧖{{skin_tone}}': [
        'Pessoa na Sala Steam',
        ':person_in_steamy_room:',
        ':steamy_room:',
        'Pessoa em Sauna',
        ':person:'
    ],
    '👫{{skin_tone}}': [
        'Mulher e Comandante do Homem',
        ':woman_and_man_holding_hands:',
        ':holding_hands:',
        'Couple heterossexual',
        'Casal Reto',
        'Homem e Mulheres com Mãos Holding',
        ':woman:'
    ],
    '👬{{skin_tone}}': [
        'Mãos Seguras dos Homens',
        ':holding_hands:',
        ':men_holding_hands:',
        'Couple Gay',
        'Duas Mãos Seguras dos Homens',
        ':man:'
    ],
    '👭{{skin_tone}}': [
        'Mulheres segurando Mãos',
        ':holding_hands:',
        ':women_holding_hands:',
        'Couple lésbica',
        'Duas mulheres segurando as Mãos',
        ':woman:'
    ],
    '🧑‍🤝‍🧑': [
        'Pessoas segurando Mãos',
        ':holding_hands:',
        ':people_holding_hands:',
        'Duas pessoas segurando as Mãos',
        'Casal Inclusivo do Gênero',
        'Casal Neutro de Gênero',
        'Gênero Duplo não conformado',
        ':person:'
    ],
    '🧑‍🧑‍🧒': [
        'Family: Adult, Adult, Child',
        ':family_adult_adult_child:',
        'Family: Person, Person, Child'
    ],
    '👨‍👩‍👦': [
        'Família com Mãe, Pai e Filho',
        ':family_with_mother_father_and_son:',
        'Família: Homem, Mulheres, Menino'
    ],
    '👨‍👩‍👧': [
        'Família com Mãe, Pai e Filhote',
        ':family_with_mother_father_and_daughter:',
        'Família: Homem, Mulher, Menina'
    ],
    '👨‍👨‍👦': [
        'Família com Dois Pais e Filhos',
        ':family_with_two_fathers_and_son:',
        'Família: Homem, Homem',
        ':man:'
    ],
    '👨‍👨‍👧': [
        'Família com Dois Pais e Rachaduras',
        ':family_with_two_fathers_and_daughter:',
        'Família: Homem, Homem e Menina',
        ':man:'
    ],
    '👩‍👩‍👦': [
        'Família com duas mães e filho',
        ':family_with_two_mothers_and_son:',
        'Família: Mulheres, Mulher, Menino',
        ':woman:'
    ],
    '👩‍👩‍👧': [
        'Família com duas mães e filhas',
        ':family_with_two_mothers_and_daughter:',
        'Família: Mulheres, Mulher, Menina',
        ':woman:'
    ],
    '🧑‍🧑‍🧒‍🧒': [
        'Family: Adult, Adult, Child, Child',
        ':family_adult_adult_child_child:',
        'Family: Person, Person, Child, Child'
    ],
    '👨‍👩‍👧‍👦': [
        'Família com mãe, pai, Filho e Filho',
        ':family_with_mother_father_son_and_daughter:',
        'Família: Homem, Mulhere, Menina, Menino'
    ],
    '👨‍👩‍👦‍👦': [
        'Família com Mãe, Pai e Dois Filhos',
        ':family_with_mother_father_and_two_sons:',
        'Família: Homem, Mulheres, Menino, menino'
    ],
    '👨‍👩‍👧‍👧': [
        'Família com Mãe, Pai e Dois Filhos',
        ':family_with_mother_father_and_two_daughters:',
        'Família: Homem, Mulher, Menina, Menina'
    ],
    '👨‍👨‍👧‍👦': [
        'Família com dois pais, Filho e Filho',
        ':family_with_two_fathers_son_and_daughter:',
        'Família: Homem, Homem, Menino, Menino, Menino',
        ':man:'
    ],
    '👨‍👨‍👦‍👦': [
        'Família com Dois Pais e Dois Filhos',
        ':family_with_two_fathers_and_two_sons:',
        'Família: Homem, Homem, Menino, menino',
        ':man:'
    ],
    '👨‍👨‍👧‍👧': [
        'Família com Dois Pais e Dois Filhos',
        ':family_with_two_fathers_and_two_daughters:',
        'Família: Homem, Homem, Menina, Menina',
        ':man:'
    ],
    '👩‍👩‍👧‍👦': [
        'Família com duas mães, Filho e Filho',
        ':family_with_two_mothers_son_and_daughter:',
        'Família: Mulheres, Mulher, Menina, Menino',
        ':woman:'
    ],
    '👩‍👩‍👦‍👦': [
        'Família com duas mães e duas lentes',
        ':family_with_two_mothers_and_two_sons:',
        'Família: Mulheres, Mulheres, Menino, Menino',
        ':woman:'
    ],
    '👩‍👩‍👧‍👧': [
        'Família com duas mães e duas filhas',
        ':family_with_two_mothers_and_two_daughters:',
        'Família: Mulheres, Mulher, Menina, Menina',
        ':woman:'
    ],
    '🧑‍🧒': [
        'Family: Adult, Child',
        ':family_adult_child:',
        'Family: Person, Child'
    ],
    '👨‍👦': [
        'Família com Pai e Filho',
        ':family_with_father_and_son:',
        'Família: Homem, Menino',
        ':man:'
    ],
    '👨‍👧': [
        'Família Com Pai e Paído',
        ':family_with_father_and_daughter:',
        'Família: Homem, Menina',
        ':man:'
    ],
    '👩‍👧': [
        'Família com Mãe e Filhote',
        ':family_with_mother_and_daughter:',
        'Família: Mulher, Menina',
        ':woman:'
    ],
    '👨‍👧‍👧': [
        'Família Com Pai e Dois Filhos',
        ':family_with_father_and_two_daughters:',
        'Família: Homem, Menina, Menina',
        ':man:'
    ],
    '🧑‍🧒‍🧒': [
        'Family: Adult, Child, Child',
        ':family_adult_child_child:',
        'Family: Person, Child, Child'
    ],
    '👨‍👦‍👦': [
        'Família com Pai e Dois Filhos',
        ':family_with_father_and_two_sons:',
        'Família: Homem, Menino, Menino',
        ':man:'
    ],
    '👨‍👧‍👦': [
        'Família com pai, Filho e Filho',
        ':family_with_father_son_and_daughter:',
        'Família: Homem, Menino, Menino',
        ':man:'
    ],
    '👩‍👦': [
        'Família com Mãe e Filho',
        ':family_with_mother_and_son:',
        'Família: Mulher, Menino',
        ':woman:'
    ],
    '👩‍👦‍👦': [
        'Família com Mãe e Dois Sons',
        ':family_with_mother_and_two_sons:',
        'Família: Mulheres, Menino, Menino',
        ':woman:'
    ],
    '👩‍👧‍👦': [
        'Família Com Mãe, Filho e Filho',
        ':family_with_mother_son_and_daughter:',
        'Família: Mulheres, Menina, Menino',
        ':woman:'
    ],
    '👩‍👧‍👧': [
        'Família com Mãe e Duas Filhas',
        ':family_with_mother_and_two_daughters:',
        'Família: Mulheres, Menina, Menina',
        ':woman:'
    ],
    '💑{{skin_tone}}': [
        'Casal com Coração',
        ':couple_with_heart:',
        'Duplo com amor',
        'Amor de Couple',
        'Casal Neutro de Gênero',
        ':person:'
    ],
    '👩‍❤️‍👨': [
        'Homem e Mulher com Coração',
        ':man_and_woman_with_heart:',
        'Duplo com amor',
        'Amor de Couple',
        'Casal com Coração'
    ],
    '👨‍❤️‍👨': [
        'Dois homens com coração',
        ':two_men_with_heart:',
        'Casal com Coração: Homem, Homem',
        ':man:'
    ],
    '👩‍❤️‍👩': [
        'Duas Mulheres com Coração',
        ':two_women_with_heart:',
        'Dupla com Heart: Mulher, Mulher',
        ':woman:'
    ],
    '💏{{skin_tone}}': [
        'Beijo Duplo',
        ':couple_kissing:',
        'Beijo',
        'Gênero Neutro Kissing',
        ':person:'
    ],
    '👩‍❤️‍💋‍👨': [
        'Homem e Mulher Beijando',
        ':man_and_woman_kissing:'
    ],
    '👨‍❤️‍💋‍👨': [
        'Dois homens Kissing',
        ':two_men_kissing:',
        'Homem e Homem Kissing',
        ':man:'
    ],
    '👩‍❤️‍💋‍👩': [
        'Duas Mulheres Beijando',
        ':two_women_kissing:',
        'Mulher e Mulher Beijando',
        ':woman:'
    ],
    '💆{{skin_tone}}‍♂️': [
        'Massagem do homem que recebe cabeça',
        ':man_getting_head_massage:',
        ':getting_head_massage:',
        ':man:'
    ],
    '💆{{skin_tone}}‍♀️': [
        'Mulher obtendo massagem',
        ':woman_getting_head_massage:',
        ':getting_head_massage:',
        ':woman:'
    ],
    '💆{{skin_tone}}': [
        'Pessoa pegando massagem na cabeça',
        ':person_getting_head_massage:',
        ':getting_head_massage:',
        ':person:'
    ],
    '💇{{skin_tone}}‍♂️': [
        'Homem Cuidado Cortado',
        ':man_getting_haircut:',
        ':getting_haircut:',
        ':man:'
    ],
    '💇{{skin_tone}}‍♀️': [
        'Mulher Recebendo Penteado',
        ':woman_getting_haircut:',
        ':getting_haircut:',
        ':woman:'
    ],
    '💇{{skin_tone}}': [
        'Pessoa pegando cabelo',
        ':person_getting_haircut:',
        ':getting_haircut:',
        ':person:'
    ],
    '🛌{{skin_tone}}': [
        'Acomodação Dormente',
        'cansado',
        ':sleeping_accommodation:',
        'Pessoa na cama',
        'Pessoa dormindo'
    ],
    '🛀{{skin_tone}}': [
        'Pessoa tomando banho',
        'Banheira',
        ':bath:',
        ':person_taking_bath:',
        'Banho Quente',
        'Pessoa tomando um banho',
        'Banho',
        'Chuveiro',
        'Sabonete',
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
        'Rosto longo do Nariz',
        'Máscara Vermelha',
        'Tengu',
        'Goblin japonês'
    ]
};
/*animals*/
emojis_language[lang][4] = {
    '😺': [
        'Gato Esmagador',
        ':happy_cat:',
        ':smiling_cat:',
        '::):',
        'Gato Feliz',
        'Gato sorridente',
        'Cara de Gato Feliz',
        'Sorrindo o Gato cara com Boca Aberta'
    ],
    '😸': [
        'Gato Esmeraldo com Olhos sorridentes',
        ':grinning_cat:',
        '::D:',
        'Gato Esmagador',
        'Gato Feliz',
        'Cara de Gato'
    ],
    '😹': [
        'Gato com Lágrimas de Alegria',
        ':laughing_cat:',
        '::):',
        'Gato de Lágrimas Feliz',
        'Gato de Riso'
    ],
    '😻': [
        'Gato sorridente com Coração-Eyes',
        ':heart_eyes_cat:',
        ':*.*:',
        'Gato de Olhos do Coração',
        'Gato Amador',
        'Olhos sorridentes com Olhos em forma de coração'
    ],
    '😼': [
        'Gato com sorriso de Wry',
        ':cat_with_wry_smile:',
        'Gato piscante',
        'Cara de Gato Pistoleiro',
        'Rosto de Gato com sorriso'
    ],
    '😽': [
        'Beijando Gato',
        ':kissing_cat:',
        '::*:',
        'Cara de Gato Beijado',
        'Beijando o rosto do gato com olhos fechados'
    ],
    '🙀': [
        'Gato Weary',
        ':weary_cat:',
        '::O:',
        'Gato Assustado',
        'Gato Impressionante',
        'Fantasia Gato com medo',
        'Cara de Gato Weary'
    ],
    '😿': [
        'Gato Chorando',
        ':crying_cat:',
        '::(:',
        'Gato Triste',
        'Rosto de Gato Chorando'
    ],
    '😾': [
        'Poupar Gato',
        ':pouting_cat:',
        'Grumpy Cat',
        'Poucando o rosto do gato'
    ],
    '🙈': [
        'Macaco Sei-No-Mal',
        'Macaco',
        ':see-no-evil_mokey:',
        ':see_no_evil_mokey:',
        ':monkey:',
        'Município',
        'Olhos cobertos do macaco'
    ],
    '🙉': [
        'Macaco Coração-Nô-Mal',
        'Macaco',
        ':hear-no-evil_monkey:',
        ':hear_no_evil_monkey:',
        ':monkey:',
        'Kikazaru',
        'Cobertura do Macaco'
    ],
    '🙊': [
        'Macaco Falar No-Mal',
        'Macaco',
        ':speak-no-evil_monkey:',
        ':speak_no_evil_monkey:',
        ':monkey:',
        'Assistente',
        'Buraco Coberto de Boca',
        'Sem fala'
    ],
    '🐵': [
        'Rosto de Macaco',
        ':monkey_face:',
        'Macaco',
        'Cabeça de Macaco'
    ],
    '🐒': [
        'Macaco',
        ':monkey:',
        'Macaco Atrevido'
    ],
    '🦍': [
        'Gorilla',
        ':gorilla:'
    ],
    '🐶': [
        'Rosto de Cachorro',
        ':dog_face:',
        'Cachorro',
        'Filhote'
    ],
    '🐕': [
        'Cachorro',
        ':dog:',
        'Doggo',
        'Akita Inu'
    ],
    '🦮': [
        'Vendo Cachorro Olho',
        ':seeing_eye_dog:',
        'Cachorro Guia'
    ],
    '🐕‍🦺': [
        'Serviço de Cachorro',
        ':service_dog:'
    ],
    '🐩': [
        'Poodle',
        ':poodle:',
        'Cachorro',
        'Miniatura do Poodle',
        'Poodle padrão',
        'Pistola de Brinquedo'
    ],
    '🐺': [
        'Lobo',
        ':wolf:',
        'Rosto de lobo',
        ':gray:',
        ':grey:'
    ],
    '🦊': [
        'Raposa',
        ':fox:',
        'Rosto de Raposa',
        ':orange:'
    ],
    '🦝': [
        'Guaxinim',
        ':raccoon:'
    ],
    '🐱': [
        'Rosto de Gato',
        ':cat_face:',
        ':3',
        'Gatinho',
        'Gatinho'
    ],
    '🐈': [
        'Gato',
        ':cat:',
        'Gato doméstico',
        'Felino',
        'Castelo-seco'
    ],
    '🐈‍⬛': [
        'Gato Preto',
        ':black_cat:',
        ':black:'
    ],
    '🦁': [
        'Leão',
        ':lion:',
        'Rosto de Leão'
    ],
    '🐯': [
        'Rosto de Tigre',
        ':tiger_face:',
        'Tigre Fofo'
    ],
    '🐅': [
        'Tigre',
        ':tiger:',
        'Tigre Bengala'
    ],
    '🐆': [
        'Leopard',
        ':leopard:',
        'Leopardo africano',
        'Jaguar'
    ],
    '🐴': [
        'Cara de Cavalo',
        ':horse_face:',
        'Cabeça de Cavalo'
    ],
    '🐎': [
        'Cavalo',
        ':horse:',
        'Cavalo Galloping',
        'Cavalo'
    ],
    '🦄': [
        'Unicórnio',
        ':unicorn:',
        'Rosto de unicórnio'
    ],
    '🦓': [
        'Zebra',
        ':zebra:',
        'Cara Zebra',
        ':white:',
        ':black:'
    ],
    '🦌': [
        'Cervo',
        ':deer:',
        'Bater',
        'Rena',
        'Stag'
    ],
    '🐮': [
        'Rosto de vaca',
        ':cow_face:',
        'Vaca',
        'Vaca feliz'
    ],
    '🐂': [
        'T-Ox',
        ':ox:',
        'Touro',
        'Bullock',
        'Oxigênio',
        'Direção'
    ],
    '🐃': [
        'Búfalo de Água',
        ':water_buffalo:',
        'Búfalo',
        'Buffalo de Água Doméstica'
    ],
    '🐄': [
        'Vaca',
        ':cow:',
        'Vaca do Demônio'
    ],
    '🐷': [
        'Rosto de Porco',
        ':pig_fase:',
        'Porco',
        'Cabeça de Porco',
        ':pink:'
    ],
    '🐖': [
        'Porco',
        ':pig:',
        'Balanço',
        'Sow',
        ':pink:'
    ],
    '🐗': [
        'Javali',
        ':boar:',
        'Javali',
        'Javali Selvagem',
        'Porco Selvagem'
    ],
    '🐽': [
        'Porco Nariz',
        ':pig_nose:'
    ],
    '🐏': [
        'Ram',
        ':ram:',
        'Ovelha'
    ],
    '🐑': [
        'Ewe',
        ':ewe:',
        'Lamb',
        'Ovelha'
    ],
    '🐐': [
        'Cabra',
        ':goat:'
    ],
    '🐪': [
        'Camelo',
        ':camel:',
        'Camelo Arábico',
        'Camelo Dromedário',
        'Camelo Um-Bump'
    ],
    '🐫': [
        'Camelo dois úmidos',
        ':two-hump_camel:',
        ':two_hump_camel:',
        'Camelo Asiático',
        'Camelo bactriano'
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
        'Rosto do Mouse',
        ':mouse_face:',
        'Mouse'
    ],
    '🐁': [
        'Mouse',
        ':mouse:',
        'Dorrato',
        'Roedor',
        'Rato'
    ],
    '🐀': [
        'Rato',
        ':rat:',
        'Roedor'
    ],
    '🐹': [
        'Ladrão',
        ':hamster:',
        'Rosto do Hamster'
    ],
    '🐰': [
        'Rosto de Coelho',
        ':rabbit_face:',
        'Coelhinho da Páscoa'
    ],
    '🐇': [
        'Coelho',
        'Bunny',
        ':rabbit:',
        'Coelho Coelho'
    ],
    '🐿️': [
        'Chipmunk',
        ':chipmunk:',
        'Esquilo'
    ],
    '🦔': [
        'Ouriço',
        ':hedgehog:'
    ],
    '🦇': [
        'Morcego',
        ':bat:',
        'Batman',
        ':black:'
    ],
    '🐻': [
        'Urso',
        ':bear:',
        'Rosto de Urso',
        'Ursinho de peluche',
        ':brown:'
    ],
    '🐨': [
        'Coala',
        ':koala:',
        'Coala Cara'
    ],
    '🐼': [
        'Panda',
        ':panda:',
        'Rosto Panda'
    ],
    '🦘': [
        'Canguru',
        ':kangaroo:',
        'Roo'
    ],
    '🦡': [
        'Distintivo',
        ':badger:'
    ],
    '🦃': [
        'Turquia',
        ':turkey:',
        'Peru assado',
        'Peru Selvagem'
    ],
    '🐔': [
        'Galinha',
        ':chicken:',
        'Hen'
    ],
    '🐓': [
        'Cocar',
        ':cock:',
        'Rooster',
        'Cockerel'
    ],
    '🐣': [
        'Encubador de Pintinho',
        ':hatching_chick:',
        'Bebê Galinha',
        'Chuva de Pintinho',
        ':yellow:'
    ],
    '🐤': [
        'Filhote de Galinha',
        ':baby_chick:',
        'Pássaro amarelo',
        ':yellow:'
    ],
    '🐥': [
        'Bico de Frente Bebê',
        ':front_baby_chick:',
        'Filhote de Galinha',
        'Ponta de Palha',
        ':yellow:'
    ],
    '🐦': [
        'Pássaro',
        ':bird:'
    ],
    '🐧': [
        'Penguin',
        ':penguin:'
    ],
    '🕊️': [
        'Cassino',
        ':Dove:',
        'Davi da Paz',
        ':white:'
    ],
    '🦅': [
        'Águia',
        ':Eagle:',
        'Águia de Má'
    ],
    '🦆': [
        'Pato',
        ':Duck:'
    ],
    '🦢': [
        'Cisne',
        ':swan:',
        ':white:'
    ],
    '🦉': [
        'Coruja',
        ':owl:',
        ':brown:'
    ],
    '🦚': [
        'Pavão',
        ':peacock:'
    ],
    '🦜': [
        'Papagaio',
        ':parrot:'
    ],
    '🐸': [
        'Sapo',
        ':frog:',
        'Sapo',
        'Rosto de Sapo',
        ':green:'
    ],
    '🐊': [
        'Crocodilo',
        ':crocodile:',
        'Peixe-Jacaré',
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
        'Lagarto',
        ':lizard:',
        'Goanna',
        ':green:'
    ],
    '🐍': [
        'Cobra',
        ':snake:',
        'Serpente'
    ],
    '🐲': [
        'Rosto do Dragão',
        ':dragon_face:',
        'Cabeça de dragão'
    ],
    '🐉': [
        'Dragão',
        ':dragon:'
    ],
    '🦕': [
        'Saurópode',
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
        'Baleia perspicaz',
        ':spouting_whale:',
        'Baleia Fofa'
    ],
    '🐋': [
        'Baleia',
        ':whale:'
    ],
    '🐬': [
        'Golfinho',
        ':dolphin:'
    ],
    '🐟': [
        'Peixe',
        ':fish:',
        'Peixe de Água Fresca'
    ],
    '🐠': [
        'Peixe Tropical',
        ':tropical_fish:',
        'Peixe',
        'Peixe Amarelo-Cola'
    ],
    '🐡': [
        'Blowfish',
        ':blowfish:',
        'Fugu',
        'Baiacu'
    ],
    '🦈': [
        'Tubarão',
        ':shark:',
        'Grande Tubarão Branco'
    ],
    '🐙': [
        'Polvo',
        ':octopus:'
    ],
    '🐚': [
        'Casco Espiral',
        ':spiral_shell:',
        'Concha',
        'Concha'
    ],
    '🐌': [
        'Caracol',
        ':snail:',
        'Permalink',
        'Caracol de Jardim'
    ],
    '🦋': [
        'Borboleta',
        ':butterfly:'
    ],
    '🐛': [
        'Inseto',
        ':bug:',
        'Lagarta',
        'Inseto'
    ],
    '🐜': [
        'Ant',
        ':ant:',
        'Inseto',
        'Inseto'
    ],
    '🐝': [
        'Abelha',
        ':honeybee:',
        'Abelha',
        'Bumblebee',
        ':yellow:',
        ':black:'
    ],
    '🐞': [
        'Dama de Besouro',
        ':lady_beetle:',
        'Ladybird',
        'Ladybug',
        'Inseto'
    ],
    '🦗': [
        'Críquete',
        ':cricket:',
        'Gafanhoto'
    ],
    '🕷️': [
        'Aranha',
        ':spider:'
    ],
    '🦂': [
        'Escorpião',
        ':scorpion:'
    ],
    '🦟': [
        'Mosquito',
        ':mosquito:',
        ':black:'
    ],
    '🦀': [
        'Caranguejo',
        ':crab:',
        ':red:'
    ],
    '🦞': [
        'Lagosta',
        ':lobster:'
    ],
    '🦐': [
        'Camarão',
        ':shrimp:',
        'Prawn'
    ],
    '🦑': [
        'Lula',
        ':squid:'
    ],
    '🦧': [
        'Orangutan',
        ':orangutan:'
    ],
    '🦥': [
        'Preguiça',
        ':sloth:'
    ],
    '🦦': [
        'Otter',
        ':otter:'
    ],
    '🦨': [
        'Rascunho',
        ':skunk:'
    ],
    '🦬': [
        'Veneno',
        ':bison:'
    ],
    '🦣': [
        'Mamute',
        ':mammoth:',
        ':brown:'
    ],
    '🦫': [
        'Castor',
        ':beaver:'
    ],
    '🐻‍❄️': [
        'Urso polar',
        ':polar_bear:',
        ':white:'
    ],
    '🦤': [
        'Dodo',
        ':dodo:'
    ],
    '🦭': [
        'Selo',
        ':seal:'
    ],
    '🪲': [
        'Besouro',
        ':beetle:'
    ],
    '🪳': [
        'Barata',
        ':cockroach:'
    ],
    '🪰': [
        'Voar',
        ':fly:'
    ],
    '🪱': [
        'Minhoca',
        ':worm:'
    ],
    '🦩': [
        'Flamingo',
        ':flamingo:'
    ],
    '🪹': [
        'Ninho Vazio',
        ':empty_nest:',
        'Aves',
        'Início'
    ],
    '🪺': [
        'Aninhar com Ovos',
        ':nest_with_eggs:',
        'Aves',
        'Início'
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
        'Coração com Flecha',
        ':heart_with_arrow:',
        'Flecha Cupido',
        'Lovestruck',
        ':pink:'
    ],
    '💝': [
        'Coração com Fita',
        ':heart_with_ribbon:',
        'Caixa de Chocolate',
        'Caixa de Presente',
        'Coração do Presente',
        ':red:'
    ],
    '💖': [
        'Sparkling Heart',
        ':sparkling_heart:',
        'Coração Cintilante',
        'Coração Brilhante',
        'Coração das Estrelas',
        ':pink:'
    ],
    '💗': [
        'Coração Crescente',
        ':growing_heart:',
        'Coração Múltiplo',
        'Coração Triplo',
        ':pink:'
    ],
    '💓': [
        'Coração Batido',
        ':beating_heart:',
        'Alarme de Coração',
        'Heartbeat',
        'Coração de Wifi',
        ':pink:'
    ],
    '💞': [
        'Corações Revolutores',
        ':revolving_hearts:',
        'Dois corações',
        ':pink:'
    ],
    '💕': [
        'Dois corações',
        ':two_hearts:',
        'Corações Pequenas',
        'Dois corações rosa',
        ':pink:'
    ],
    '💟': [
        'Decoração de Coração',
        ':heart_decoration:',
        ':purple:'
    ],
    '❣️': [
        'Exclamação de Coração',
        ':heart_exclamation:',
        'Coração Acima do Ponto',
        'Coração Vermelho como Marca de Exclamação',
        'Marca de Exclamação de Coração Pesado',
        ':red:'
    ],
    '💔': [
        'Coração Quebrado',
        ':broken_heart:',
        'Coração Quebrado',
        'Brokenheared',
        'Coração Quebrado',
        ':red:'
    ],
    '❤️‍🩹': [
        'Coração Mendente',
        ':mending_heart:',
        'Coração Bandido',
        'Coração de Cura',
        'Coração Inquebrável',
        ':red:'
    ],
    '❤️‍🔥': [
        'Coração em Fogo',
        ':heart_on_fire:',
        ':red:'
    ],
    '❤️': [
        'Eu amo você',
        ':red_heart:',
        'Coração Vermelho',
        'Coração',
        'Coração de Amor',
        'Coração Vermelho',
        ':red:'
    ],
    '🧡': [
        'Coração Laranja',
        ':orange_heart:',
        'Eu amo você',
        ':orange:'
    ],
    '💛': [
        'Coração Amarelo',
        ':yellow_heart:',
        '#1 BF Snapchat',
        'Coração Dourado',
        'Eu amo você',
        ':yellow:'
    ],
    '💚': [
        'Coração Verde',
        ':green_heart:',
        'Coração Júlio',
        'Eu amo você',
        ':green:'
    ],
    '💙': [
        'Coração Azul',
        ':blue_heart:',
        'Eu amo você',
        ':blue:'
    ],
    '💜': [
        'Coração Roxo',
        ':purple_heart:',
        'Eu amo você',
        ':purple:'
    ],
    '🖤': [
        'Coração Preto',
        ':black_heart:',
        'Coração Negro',
        'Eu amo você',
        ':black:'
    ],
    '🤍': [
        'Coração Branco',
        ':white_heart:',
        'Eu amo você',
        ':white:'
    ],
    '🤎': [
        'Coração Marrom',
        ':brown_heart:',
        'Eu amo você',
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
        'Pontos Cem',
        ':hundred_points:',
        '100',
        '%',
        'Mantenha 100',
        'Pontuação Perfeita',
        'Símbolo de Pontos Cem'
    ],
    '💬': [
        'Balão de fala',
        ':speech_balloon:',
        'Bolha de Chat',
        'Bolha de fala',
        ':white:'
    ],
    '💭': [
        'Balão Pensado',
        ':thought_balloon:',
        'Bolha de Pensamento',
        'Bolha de Pensamento',
        ':white:'
    ],
    '💤': [
        'zzzz',
        ':zzz:',
        'Cama',
        'Enchente',
        'Suspender',
        'Placa de Dormir',
        'Símbolo de Dormir'
    ],
    '♠': [
        'Roupa de Pá',
        ':spade_suit:',
        'Spades',
        'Black Spade Suit'
    ],
    '♥': [
        'Roupa de Coração',
        ':heart_suit:',
        'Cartão com Coração',
        'Corações',
        'Roupa do Coração Negro'
    ],
    '♦': [
        'Roupa de Diamante',
        ':diamond_suit:',
        'Diamantes',
        'Roupa de Diamante Preto'
    ],
    '♣': [
        'Roupa de Clube',
        ':club_suit:',
        'Clubes',
        'Armadura do Clube Preto'
    ],
    '🏧': [
        'Registro de ATM',
        ':atm_sign:',
        'caixa',
        'Máquina de telemóvel automatizada',
        ':blue:'
    ],
    '🎧': [
        'Fone',
        ':headphone:',
        'Ganho',
        'iPod',
        'Fones'
    ],
    '🎵': [
        'Nota Musical',
        ':musical_note:',
        'Par de oitavas notas Beamed',
        'Par de Quavers Beamed',
        'Nota musical'
    ],
    '🎶': [
        'Notas Musicais',
        ':musical_notes:',
        'Música',
        'Notas Musicais',
        'Cantando',
        'Múltiplas Notas Musicais'
    ],
    '🔔': [
        'Sino',
        ':bell:',
        'Sino da Liberdade',
        'Ringer',
        'Sino de Casamento',
        ':yellow:'
    ],
    '🔕': [
        'Sino com Golpe',
        ':bell_with_slash:',
        'notificações',
        'Campainha desativada',
        'Sino Silenciado',
        'Sino com Golpe de Cancelamento',
        ':yellow:'
    ],
    '🔈': [
        'Volume baixo do Alto-falante',
        ':speaker_low_volum:',
        'Volume',
        'Alto-falante'
    ],
    '🔉': [
        'Volume médio do alto-falante',
        ':speaker_medium_volume:',
        'Reduzir Volume',
        'Alto-falante com volume médio',
        'Alto-falante com uma onda de som'
    ],
    '🔊': [
        'Volume alto do alto-falante',
        ':speaker_high_volume:',
        'Aumentar Volume',
        'Alto-falante com três ondas de som'
    ],
    '🔇': [
        'Alto-falante silenciado',
        ':muted_speaker:',
        'Volume do Mudo',
        'Alto-falante com Golpe de Cancelamento'
    ],
    '📢': [
        'Loudspeaker',
        ':loudspeaker:',
        'Anúncio',
        'Sistema PA',
        'Endereço Público Loudspeaker'
    ],
    '⛔': [
        'Nenhuma entrada',
        ':no_entry:',
        ':red:'
    ],
    '🚫': [
        'Proibido',
        ':prohibited:',
        'Banido',
        'Barra invertida circular',
        'Não',
        'Círculo Vermelho Cruzado',
        'Restrito',
        'Sem Placa de Entrada',
        ':red:'
    ],
    '🚳': [
        'Nenhum Biclo',
        ':no_bicycles:',
        'Sem Placa de Bicicletas',
        ':red:',
        ':black:'
    ],
    '🚭': [
        'Sem Fumar',
        ':no_smoking:',
        'Nenhum símbolo fumante',
        ':red:',
        ':black:'
    ],
    '🚯': [
        'Sem Litagem',
        ':no_littering:',
        'Não há símbolos Litter',
        ':red:',
        ':black:'
    ],
    '🚱': [
        'Água não potável',
        ':non-potable_water:',
        ':non_potable_water:',
        'Sem Água',
        'Nenhuma Água Potável',
        'Símbolo de água não potável',
        ':red:',
        ':black:'
    ],
    '🚷': [
        'Sem pedestres',
        ':no_pedestrians:',
        'Nenhuma pessoa',
        'Sem caminhada',
        ':red:',
        ':black:'
    ],
    '🔞': [
        'Nenhum com menos de dezoito',
        ':no_one_under_18:',
        'NSFW',
        'Nenhum dos menores dezoito símbolos',
        '18',
        ':red:',
        ':black:'
    ],
    '📵': [
        'Sem Celulares',
        ':no_mobile_phones:',
        'Sem telefones celulares',
        'Sem telefones',
        'Nenhum Smartphone',
        ':red:',
        ':black:'
    ],
    '☢️': [
        'Radioactive',
        ':radioactive:',
        'Símbolo de radiação internacional',
        'nuclear',
        'Placa Radioativa',
        ':orange:'
    ],
    '☣️': [
        'Biorisco',
        ':biohazard:',
        'Sinal de Biorisco',
        ':orange:'
    ],
    '⬆️': [
        'Botão para cima',
        ':up_arrow_button:',
        'Pontaria das flechas',
        'Seta Preta para cima',
        ':blue:'
    ],
    '↗️': [
        'Botão de seta superior direito',
        ':up-right_arrow_button:',
        ':up_right_arrow_button:',
        'Seta diagonal para cima-direita',
        'Flecha do Noroeste',
        ':blue:'
    ],
    '➡️': [
        'Botão da seta direita',
        ':right_arrow_button:',
        'Flecha Encantando à Direita',
        'Flecha da Direita Negra',
        ':blue:'
    ],
    '↘️': [
        'Botão de seta para baixo direito',
        ':down-right_arrow_button:',
        ':down_right_arrow_button:',
        'Seta diagonal para baixo direito',
        'Seta Sudoeste',
        ':blue:'
    ],
    '⬇️': [
        'Botão para baixo',
        ':down_arrow_button:',
        'Seta apontando para baixo',
        'Seta Preta para Baixo',
        ':blue:'
    ],
    '↙️': [
        'Botão de seta para baixo esquerdo',
        ':down-left_arrow_button:',
        ':down_left_arrow_button:',
        'Seta diagonal para baixo esquerdo',
        'Seta Sudoeste',
        ':blue:'
    ],
    '⬅️': [
        'Botão da seta esquerda',
        ':left_arrow_button:',
        'Pontaria de Flechas à Esquerda',
        'Seta Preta da Esquerda',
        ':blue:'
    ],
    '↖️': [
        'Botão de seta superior esquerdo',
        ':up-left_arrow_button:',
        ':up_left_arrow_button:',
        'Seta diagonal acima-esquerda',
        'Seta a Noroeste',
        ':blue:'
    ],
    '↕️': [
        'Botão de seta para baixo',
        ':up-down_arrow_button:',
        ':up_down_arrow_button:',
        'Setas verticais',
        'Seta para baixo acima',
        ':blue:'
    ],
    '↔️': [
        'Botão Esquerdo - Direita',
        ':left-right_arrow_button:',
        ':left_right_arrow_button:',
        'Setas horizontais',
        'Flechas laterais',
        'Seta Esquerda Direita',
        ':blue:'
    ],
    '↩️': [
        'Botão direito da curva de seta esquerda',
        ':right_arrow_curving_left_button:',
        'Resposta por e-mail',
        'Seta Curvada Esquerda',
        'Seta esquerda com Hook',
        ':blue:'
    ],
    '↪️': [
        'Botão esquerdo da curva direita',
        ':left_arrow_curving_right_button:',
        'Encaminhamento de E-mail',
        'Seta Curva Direita',
        'Seta para a direita com Hook',
        ':blue:'
    ],
    '⤴️': [
        'Botão de Curvação da Seta Direita',
        ':right_arrow_curving_up_button:',
        'Seta apontando para a direita e depois curvendo para cima',
        ':blue:'
    ],
    '⤵️': [
        'Botão de Curvação da Seta Direita',
        ':right_arrow_curving_down_button:',
        'Seta para baixo curva',
        'Seta apontando para a direita e depois curvando para baixo',
        ':blue:'
    ],
    '🔃': [
        'Botão de setas verticais no sentido horário',
        ':clockwise_vertical_button:',
        'No sentido horário para baixo e para cima abrem setas do círculo',
        ':blue:'
    ],
    '🔄': [
        'Botão de setas anti-horário',
        ':counterclockwise_button:',
        'atualizar',
        'Rotacionar',
        'Interruptor',
        'Flechas Anti-horária',
        'Anticlock-wise para baixo e para cima abrem setas do círculo',
        ':blue:'
    ],
    '🔙': [
        'Seta traseira',
        ':back_arrow:',
        'Anterior',
        'De volta com Seta da Esquerda Acima',
        ':black:'
    ],
    '🔚': [
        'Seta final',
        ':end_arrow:',
        'Término',
        'Final com seta para a esquerda acima',
        ':black:'
    ],
    '🔛': [
        'Ligado! Seta',
        ':on_arrow:',
        'Ligado',
        'Ativado com o Marcador de Exclamação com seta direita esquerda acima',
        ':black:'
    ],
    '🔜': [
        'Seta em breve',
        ':soon_arrow:',
        'Em breve',
        'Em breve com seta para a direita acima',
        ':black:'
    ],
    '🔝': [
        'Seta superior',
        ':top_arrow:',
        'Superior',
        'Topo com seta para cima acima',
        ':black:'
    ],
    '🛐': [
        'Local de Adoração',
        ':place_of_worship:',
        'Construção Religiosa',
        ':purple:'
    ],
    '⚛️': [
        'Símbolo do tom',
        ':atom_symbol:',
        ':purple:'
    ],
    '🕉️': [
        'Símbolo de Om',
        ':om_symbol:',
        'Milha',
        'Aumkara',
        'Omkara',
        'Pranava',
        ':purple:'
    ],
    '✡️': [
        'Estrela de David',
        ':star_of_david:',
        'David Magen',
        ':purple:'
    ],
    '☸️': [
        'Roda de Dharma',
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
        'Cruz latina',
        ':latin_cross:',
        'Cruz Cristã',
        ':purple:'
    ],
    '☦️': [
        'Cruz Ortodoxa',
        ':orthodox_cross:',
        ':purple:'
    ],
    '☪️': [
        'Estrela e Crescente',
        ':star_and_crescent:',
        ':purple:'
    ],
    '☮️': [
        'Símbolo de Paz',
        ':peace:',
        'Placa de Paz',
        ':purple:'
    ],
    '🕎': [
        'Menoras',
        ':menorah:',
        'Candelabrum',
        'Velas',
        'Chanukias',
        'Menoras',
        'Menorah com Nove Galhos',
        ':purple:'
    ],
    '🔯': [
        'Estrela Pontilhada Sex-Pontilhada',
        ':dotted_six-pointed_star:',
        ':dotted_six_pointed_star:',
        'Seis Estrelas Encantadas com Ponto Médio',
        ':purple:'
    ],
    '🪯': [
        'Khanda',
        ':khanda:',
        'Sikhism',
        ':purple:'
    ],
    '♈': [
        'Carneiro',
        ':aries:',
        ':zodiac:',
        'Zodíaco',
        ':purple:'
    ],
    '♉': [
        'Taurus',
        ':taurus:',
        ':zodiac:',
        'Zodíaco',
        ':purple:'
    ],
    '♊': [
        'Gemini',
        ':gemini:',
        ':zodiac:',
        'Zodíaco',
        ':purple:'
    ],
    '♋': [
        'Câncer',
        ':cancer:',
        ':zodiac:',
        'Zodíaco',
        ':purple:'
    ],
    '♌': [
        'Léo',
        ':leo:',
        ':zodiac:',
        'Zodíaco',
        ':purple:'
    ],
    '♍': [
        'Vírus',
        ':virgo:',
        ':zodiac:',
        'Zodíaco',
        ':purple:'
    ],
    '♎': [
        'Libra',
        ':libra:',
        ':zodiac:',
        'Zodíaco',
        ':purple:'
    ],
    '♏': [
        'Escorpião',
        ':scorpio:',
        ':zodiac:',
        'Escorpião',
        'Zodíaco',
        ':purple:'
    ],
    '♐': [
        'Sagittarius',
        ':sagittarius:',
        ':zodiac:',
        'Zodíaco',
        ':purple:'
    ],
    '♑': [
        'Capricórnio',
        ':capricorn:',
        ':zodiac:',
        'Zodíaco',
        ':purple:'
    ],
    '♒': [
        'Aquário',
        ':aquarius:',
        ':zodiac:',
        'Zodíaco',
        ':purple:'
    ],
    '♓': [
        'Pisces',
        ':pisces:',
        ':zodiac:',
        'Zodíaco',
        ':purple:'
    ],
    '⛎': [
        'Ophiuchus',
        ':ophiuchus:',
        ':zodiac:',
        'Zodíaco',
        ':purple:'
    ],
    '⏭️': [
        'Pular símbolo de encaminhamento',
        'Pontilhado Direito Preto Duplo Triângulo com Barra Vertical',
        ':skip_forward_button:',
        'Botão Seguinte Faixa',
        ':blue:'
    ],
    '⏮️': [
        'Pular Símbolo Backward',
        'Ponto Esquerdo Preto Duplo Triângulo com Barra Vertical',
        ':skip_backward_button:',
        'Último botão da faixa',
        'Faixa Anterior',
        ':blue:'
    ],
    '⏯️': [
        'Botão de reprodução ou pausa',
        'Triângulo pontiagudo à direita preto com barra vertical dupla',
        ':play_button:',
        ':pause_button:',
        ':play_or_pause_button:',
        'Reproduzir símbolo',
        'Pausar símbolo',
        ':blue:'
    ],
    '🔀': [
        'Botão Misturar Faixas',
        ':shuffle_tracks_button:',
        'Setas para direita enrodadas',
        ':blue:'
    ],
    '🔁': [
        'Botão Repetir',
        ':repeat_button:',
        'Símbolo de loop',
        'Retweetar',
        'Clockwise à direita e à esquerda setas do círculo aberto',
        ':blue:'
    ],
    '🔂': [
        'Botão Repetir único',
        ':repeat_single_button:',
        'Setas circulares com número 1',
        'Repetir uma vez Símbolo',
        'Repetir símbolo de faixa única',
        'Anti-horária à direita e à esquerda setas de círculo abertas com uma sobreposição circular',
        ':blue:'
    ],
    '▶️': [
        'Botão Tocar',
        ':play_button:',
        'Triângulo direito',
        'Triângulo do Ponto-Direito',
        'Triângulo de Ponteiro direito preto',
        ':blue:'
    ],
    '◀️': [
        'Botão Invertido',
        ':reverse_button:',
        'Triângulo esquerdo',
        'Triângulo Esquerdo',
        'Triângulo esquerdo preto',
        ':blue:'
    ],
    '🔼': [
        'Botão para cima',
        ':upwards_button:',
        'Acima do Triângulo',
        'Entusiastecer Triângulo',
        'Pequeno Triângulo Vermelho Encantado',
        ':blue:'
    ],
    '🔽': [
        'Botão para baixo',
        ':downwards_button:',
        'Triângulo de baixo',
        'Triângulo negativo',
        'Pequeno triângulo vermelho abaixo',
        ':blue:'
    ],
    '⏩': [
        'Botão Rápido',
        ':fast-forward_button:',
        ':fast_forward_button:',
        'Avançar rapidamente',
        'Símbolo de encaminhamento rápido',
        'Triângulo duplo do Direito Preto',
        ':blue:'
    ],
    '⏪': [
        'Fast Reverse Button',
        ':fast_reverse_button:',
        'Rewind',
        'Repetir Símbolo',
        'Triângulo duplo do ponto esquerdo preto',
        ':blue:'
    ],
    '⏫': [
        'Botão de aceleração',
        ':fast_up_button:',
        'Entusiastecer o Triângulo Duplo',
        'Triângulo duplo pontiagudo preto para cima',
        ':blue:'
    ],
    '⏬': [
        'Botão de Acesso Rápido',
        ':fast_down_button:',
        'Entendendo o Triângulo Duplo',
        'Triângulo duplo pontiagudo preto para baixo',
        ':blue:'
    ],
    '⏹️': [
        'Botão Parar',
        ':stop_button:',
        'Interromper',
        'Parar Símbolo',
        'Quadrado Preto para Parar',
        ':blue:'
    ],
    '⏏️': [
        'Botão de Ejetar',
        ':eject_button:',
        'Eject Symbol',
        ':blue:'
    ],
    '🎦': [
        'Cinema',
        ':cinema_button:',
        'Tela de cinema',
        'Filmes',
        'Filme',
        'Símbolo de cinema',
        'Gravação',
        ':blue:'
    ],
    '📶': [
        'Barras de Antena',
        ':antenna_bars_button:',
        'Barras de recepção',
        'Força do sinal',
        'Stairs',
        'Símbolo de Força',
        'Antena com Bares',
        ':blue:'
    ],
    '✖️': [
        'Multiplique',
        ':multiply:',
        'Horários',
        'Símbolo de multiplicação',
        'Multiplicação Pesada X',
        ':black:'
    ],
    '➕': [
        'Mais',
        ':plus:',
        'Símbolo Plus',
        'Sinal Pesado Plus',
        ':black:'
    ],
    '➖': [
        'Minus',
        ':minus:',
        'Minus Symbol',
        'Placa de Minus Pesada',
        ':black:'
    ],
    '➗': [
        'Divisão',
        ':divide:',
        'Símbolo de Divisão',
        'Sinal de Divisão Pesado',
        ':black:'
    ],
    '🟰': [
        'Sinal Pesado de Igual',
        ':heavy_equals_sign:',
        'iguais',
        'Resultado',
        ':black:'
    ],
    '♾️': [
        'Infinito',
        ':infinity:',
        'Placa de Papel Permanente'
    ],
    '‼️': [
        'Marco de Exclamação Duplo',
        ':double_exclamation_mark:',
        'Marca de exclamação dupla vermelha',
        ':red:'
    ],
    '⁉️': [
        'Ponto de interrogação exclamação',
        ':exclamation_question_mark:',
        'Marco de exclamação vermelho e ponto de interrogação',
        ':red:'
    ],
    '❓': [
        'Ponto de interrogação',
        ':question_mark:',
        'Ponto de Pergunta Vermelho',
        'Ponto de Perguntas Preto Ornamento',
        ':red:'
    ],
    '❔': [
        'Ponto de interrogação branco',
        ':white_question_mark:',
        ':question_mark:',
        'Ponto de interrogação branco',
        'Ponto de Pergunta Branco',
        ':white:'
    ],
    '❗': [
        'Marca de exclamação',
        ':exclamation_mark:',
        'Marca de exclamação vermelha',
        'Símbolo do Marco de Exclamação Pesado',
        ':red:'
    ],
    '❕': [
        'Marca de exclamação branca',
        ':white_exclamation_mark:',
        ':exclamation_mark:',
        'Marco de Exclamação Branco',
        ':white:'
    ],
    '⭕': [
        'Círculo Vermelho Oco',
        ':hollow_red_circle:',
        'Círculo',
        'Corrigir',
        'Círculo vermelho',
        'Marca circular',
        'Círculo Grande Pesado',
        ':red:'
    ],
    '☑️': [
        'Selecionar caixa com verificação',
        ':check_box_with_check:',
        'V',
        'Checkbox',
        'Marcar na caixa',
        'Caixa de Balas com Verificação'
    ],
    '✔️': [
        'Checar Marca',
        ':check_mark:',
        'V',
        'Verificar',
        'Visto',
        'Checkmark',
        'Marca de Verificação Pesada',
        ':black:'
    ],
    '❌': [
        'Marca de Cruz',
        ':cross_mark:',
        'Cruzar',
        'X',
        ':red:'
    ],
    '✅': [
        'Botão de Marcar',
        ':check_mark_button:',
        'V',
        'Marca de Verificação verde',
        'Marcador Verde',
        'Checar Marca',
        'Marca de Verificação pesada branca',
        ':green:'
    ],
    '❎': [
        'Botão Cross Mark',
        ':cross_mark_button:',
        'Cruzar',
        'X',
        'Marca X',
        'Marca Quadrada Negativa Cruzada',
        ':green:'
    ],
    '#️⃣': [
        'Sinal de número Keycap',
        ':hash_key:',
        '#',
        'Chave de hash',
        'Palavras-chave',
        'Político',
        'Chave da Libra',
        'Sinal de números',
        ':blue:'
    ],
    '*️⃣': [
        'Keycap Asterisk',
        ':asterisk:',
        'Teclado de Estrela',
        ':blue:'
    ],
    '0️⃣': [
        'Número 0',
        ':number_0:',
        'Keycap Digit Zero'
    ],
    '1️⃣': [
        'Número 1',
        ':number_1:',
        'Keycap 1 dígito'
    ],
    '2️⃣': [
        'Número 2',
        ':number_2:',
        'Keycap Dois Dígitos'
    ],
    '3️⃣': [
        'Número 3',
        ':number_3:',
        'Keycap Dígitos Três'
    ],
    '4️⃣': [
        'Número 4',
        ':number_4:',
        'Quarto Dígitos Keycap'
    ],
    '5️⃣': [
        'Número 5',
        ':number_5:',
        'Tecla Cinco Dígitos'
    ],
    '6️⃣': [
        'Número 6',
        ':number_6:',
        'Teclado Seis Dígitos'
    ],
    '7️⃣': [
        'Número 7',
        ':number_7:',
        'Keycap Digit Seven'
    ],
    '8️⃣': [
        'Número 8',
        ':number_8:',
        'Dígitos Keycap'
    ],
    '9️⃣': [
        'Número 9',
        ':number_9:',
        'Keycap 9 dígitos'
    ],
    '🔟': [
        'Número 10',
        ':number_10:',
        'Keycap: 10',
        '10',
        'Limite de Dígitos 10'
    ],
    '🔠': [
        'Input Latin Uppercase',
        ':input_latin_uppercase:',
        'ABCD',
        'Maiúscula',
        'Símbolo de entrada para letras maiúsculas',
        'Símbolo de entrada para letras latinas',
        ':blue:'
    ],
    '🔡': [
        'Input Latin Lowercase',
        ':input_latin_lowercase:',
        'abcd',
        'Minúsculo',
        'Símbolo de entrada para Letras Minúsculas',
        'Símbolo de entrada para letras pequenas latinas',
        ':blue:'
    ],
    '🔢': [
        'Input Numbers',
        ':input_numbers:',
        '1234',
        'Números',
        'Numeric Input',
        'Símbolo de entrada para números',
        ':blue:'
    ],
    '🔣': [
        'Símbolo de entrada para símbolos',
        ':input_symbols:',
        'Símbolos',
        'Entrada de Símbolo',
        ':blue:'
    ],
    '🔤': [
        'Input Latin Letters',
        ':input_latin_letters:',
        'abc',
        'Alfabeto',
        'Letras',
        'Símbolo de entrada para letras',
        'Símbolo de entrada para letras latinas',
        ':blue:'
    ],
    '🅰️': [
        'Um Botão (Tipo de Sangue)',
        ':a_blood:',
        'Tipo de sangue A',
        'Letra A',
        'Carta de Capital Latina Quadrada Negativa A',
        ':red:'
    ],
    '🆎': [
        'Botão AB (Tipo de Sangue)',
        ':ab_blood:',
        'AB Letras',
        'Tipo de sangue AB',
        'AB ao quadrado negativo',
        ':red:'
    ],
    '🅱️': [
        'Botão B (Tipo de Sangue)',
        ':b_blood:',
        'Letra B',
        'Tipo de sangue B',
        'Carta de Capital Latina quadrada negativa B',
        ':red:'
    ],
    '🆑': [
        'Botão CL',
        ':cl_button:',
        'Limpar',
        'Botão Limpar',
        'Sinal CL',
        'quadrilhoado',
        'Letras GC',
        ':red:'
    ],
    '🆒': [
        'Botão Legal',
        ':cool_button:',
        'Quadrado Legal',
        'Placa Legal',
        'Refrigerante à Praça',
        ':blue:'
    ],
    '🆓': [
        'Botão Livre',
        ':free_button:',
        'Gratuito',
        'Sinal Gratuito',
        'Quadrado Grátis',
        ':blue:'
    ],
    'ℹ️': [
        'Informacao',
        ':info_button:',
        'Informações',
        'Minúscula I',
        'Informações turísticas',
        'Fonte da informação',
        ':blue:'
    ],
    '🆔': [
        'Botão ID',
        ':id_button:',
        'ID',
        'Identificação',
        'Sinal de identificação',
        'ID Squared',
        ':purple:'
    ],
    '🆕': [
        'Botão Novo',
        ':new_button:',
        'Novidades',
        'Novo Sinal',
        'Agendar Novo',
        ':blue:'
    ],
    '🅾️': [
        'Botão O (Tipo Sangue)',
        ':0_blood:',
        'Tipo de sangue O',
        '0',
        'Carta de Capital Latina Quadrada Negativa',
        'Letra O',
        ':red:'
    ],
    '🆗': [
        'Botão OK',
        ':ok_button:',
        'OK',
        'OK',
        'Quadrado',
        'OK-Sign',
        'Quadrado OK',
        ':blue:'
    ],
    '🅿️': [
        'Botão P',
        ':p_button:',
        ':parking_sign:',
        'Placa de Estacionamento',
        'Carta de Capital Latina Quadrada Negativa',
        'Letra P',
        ':blue:'
    ],
    '🆘': [
        'Botão SOS',
        ':sos_button:',
        'Sinal de socorro',
        'Emergência',
        'SOS',
        'Sinal de SOS',
        'SOS Squared',
        'Socorro',
        ':red:'
    ],
    '🆙': [
        'Botão Up!',
        ':up_button:',
        'Subiu de Nível',
        'Acima',
        'Inscrição Acima',
        'Agachado com marca de exclamação',
        ':blue:'
    ],
    '🆚': [
        'Botão Vs',
        ':vs_button:',
        'Quadrado Vs',
        ':orange:'
    ],
    '🆖': [
        'Botão de NG',
        ':ng_button:',
        'NG ao quadrado',
        'Sem sinal bom',
        'Não Bom',
        ':ng:',
        'Sangramento',
        ':blue:'
    ],
    '🔴': [
        'Círculo vermelho',
        ':red_circle:',
        'Círculo Vermelho Grande',
        ':red:'
    ],
    '🟠': [
        'Círculo Laranja',
        ':orange_circle:',
        'Círculo Laranja Grande',
        ':orange:'
    ],
    '🟡': [
        'Círculo Amarelo',
        ':yellow_circle:',
        'Círculo Amarelo Grande',
        ':yellow:'
    ],
    '🟢': [
        'Círculo Verde',
        ':green_circle:',
        'Círculo Verde Grande',
        ':green:'
    ],
    '🔵': [
        'Círculo azul',
        ':blue_circle:',
        'Círculo Azul Grande',
        ':blue:'
    ],
    '🟣': [
        'Círculo Roxo',
        ':purple_circle:',
        'Círculo Roxo Grande',
        ':purple:'
    ],
    '🟤': [
        'Círculo Marrom',
        ':brown_circle:',
        'Círculo Marrom Grande',
        ':brown:'
    ],
    '⚫': [
        'Círculo preto',
        ':black_circle:',
        'Círculo Preto Médio',
        ':black:'
    ],
    '⚪': [
        'Círculo Branco',
        ':white_circle:',
        'Círculo Branco Médio',
        ':white:'
    ],
    '🟥': [
        'Praça Vermelha',
        ':red_square:',
        'Grande Quadrado Vermelho',
        ':red:'
    ],
    '🟧': [
        'Quadrado Laranja',
        ':orange_square:',
        'Grande quadrado laranja',
        ':orange:'
    ],
    '🟨': [
        'Praça Amarela',
        ':yellow_square:',
        'Grande Praça Amarela',
        ':yellow:'
    ],
    '🟩': [
        'Quadrado verde',
        ':green_square:',
        'Grande Quadrado Verde',
        ':green:'
    ],
    '🟦': [
        'Quadrado Azul',
        ':blue_square:',
        'Grande quadrado azul',
        ':blue:'
    ],
    '🟪': [
        'Quadrado Roxo',
        ':purple_square:',
        'Grande Quadrado Roxo',
        ':purple:'
    ],
    '🟫': [
        'Quadrado Marrom',
        ':brown_square:',
        'Grande Quadrado Marrom',
        ':brown:'
    ],
    '⬛': [
        'Praça Grande Preta',
        ':black_large_square:',
        ':black:'
    ],
    '⬜': [
        'Praça Grande Branca',
        ':white_large_square:',
        ':white:'
    ],
    '◼️': [
        'Quadrado Médio Preto',
        ':black_medium_square:',
        ':black:'
    ],
    '◻️': [
        'Quadrado Médio Branco',
        ':white_medium_square:',
        ':white:'
    ],
    '◾': [
        'Pequeno Quadrado Médio Negro',
        ':black_medium_small_square:',
        ':black:'
    ],
    '◽': [
        'Quadrado pequeno e médio branco',
        ':white_medium_small_square:',
        ':white:'
    ],
    '▪️': [
        'Quadrado pequeno preto',
        ':black_small_square:',
        ':black:'
    ],
    '▫️': [
        'Quadrado pequeno branco',
        ':white_small_square:',
        ':white:'
    ],
    '💠': [
        'Forma de Diamante com um Ponto dentro',
        ':diamond_shape_with_dot:',
        'Cortesia',
        'Flor de Diamante',
        'kawaii'
    ],
    '🔶': [
        'Diamante Laranja Grande',
        ':large_orange_diamond:',
        ':orange:'
    ],
    '🔷': [
        'Diamante azul grande',
        ':large_blue_diamond:',
        ':blue:'
    ],
    '🔸': [
        'Diamante Laranja Pequeno',
        ':small_orange_diamond:',
        ':orange:'
    ],
    '🔹': [
        'Diamante Azul Pequeno',
        ':small_blue_diamond:',
        ':blue:'
    ],
    '🔺': [
        'Triângulo vermelho apontado para cima',
        ':red_triangle_pointed_up:',
        'Triângulo vermelho ascendente',
        ':red:'
    ],
    '🔻': [
        'Triângulo vermelho encalhado para baixo',
        ':red_triangle_pointed_down:',
        'Triângulo vermelho negativo',
        ':red:'
    ],
    '🔳': [
        'Botão Branco quadrado',
        ':white_square_button:',
        ':white:',
        ':black:'
    ],
    '🔲': [
        'Botão quadrado preto',
        ':black_square_button:',
        ':white:',
        ':black:'
    ],
    '©️': [
        'Direitos autorais',
        ':copyright:',
        ':c:',
        'Placa de Direitos Autorais'
    ],
    '®️': [
        'Registrado',
        ':registered:',
        ':r:',
        'Sinal Registrado'
    ],
    '™️': [
        'Marca do Comércio',
        ':trade_mark:',
        ':tm:',
        'Marca',
        'Marca de Comércio'
    ],
    '🛅': [
        'Bagagem Esquerda',
        ':left_luggage:',
        'Saco com Chave',
        'Mala Trancada',
        ':blue:'
    ],
    '🛄': [
        'Reivindicação de Bagagem',
        ':baggage_claim:',
        ':blue:'
    ],
    '🛃': [
        'Alfândegas',
        ':customs:',
        ':blue:'
    ],
    '🛂': [
        'Controle de Passaportes',
        ':passport_control:',
        'Controle de Borda',
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
        'Símbolo de água potable',
        ':potable_water_symbol:',
        'Sede',
        'Sede',
        'Torneira de Água',
        'Fauceta de Água'
    ],
    '🇦': [
        'Letra A',
        ':letter_a:',
        ':a:',
        'Símbolo do indicador regional A'
    ],
    '🇧': [
        'Letra B',
        ':letter_b:',
        ':b:',
        'Símbolo do indicador regional B'
    ],
    '🇨': [
        'Letra C',
        ':letter_c:',
        ':c:',
        'Símbolo do indicador regional C'
    ],
    '🇩': [
        'Letra D',
        ':letter_d:',
        ':d:',
        'Símbolo do indicador regional D'
    ],
    '🇪': [
        'Letra E',
        ':letter_e:',
        ':e:',
        'Símbolo do indicador regional E'
    ],
    '🇫': [
        'Letra F',
        ':letter_f:',
        ':f:',
        'Símbolo do indicador regional F'
    ],
    '🇬': [
        'Letra G',
        ':letter_g:',
        ':g:',
        'Símbolo do indicador regional G'
    ],
    '🇭': [
        'Letra H',
        ':letter_h:',
        ':h:',
        'Símbolo do indicador regional H'
    ],
    '🇮': [
        'Letra I',
        ':letter_i:',
        ':i:',
        'Símbolo do indicador regional I'
    ],
    '🇯': [
        'Letra J',
        ':letter_j:',
        ':j:',
        'Símbolo de indicador regional J Letra'
    ],
    '🇰': [
        'Letra K',
        ':letter_k:',
        ':k:',
        'Símbolo do indicador regional K'
    ],
    '🇱': [
        'Letra L',
        ':letter_l:',
        ':l:',
        'Símbolo do indicador regional L'
    ],
    '🇲': [
        'Letra M',
        ':letter_m:',
        ':m:',
        'Símbolo do indicador regional M'
    ],
    '🇳': [
        'Letra N',
        ':letter_n:',
        ':n:',
        'Símbolo do indicador regional N'
    ],
    '🇴': [
        'Letra O',
        ':letter_o:',
        ':o:',
        'Símbolo de símbolo regional O'
    ],
    '🇵': [
        'Letra P',
        ':letter_p:',
        ':p:',
        'Símbolo de Símbolo Regional P'
    ],
    '🇶': [
        'Letra Q',
        ':letter_q:',
        ':q:',
        'Símbolo de Símbolo Regional Q'
    ],
    '🇷': [
        'Letra R',
        ':letter_r:',
        ':r:',
        'Símbolo de Símbolo Regional R'
    ],
    '🇸': [
        'Letra S',
        ':letter_s:',
        ':s:',
        'Símbolo do indicador regional S'
    ],
    '🇹': [
        'Letra T',
        ':letter_t:',
        ':t:',
        'Símbolo do indicador regional T'
    ],
    '🇺': [
        'Letra U',
        ':letter_u:',
        ':u:',
        'Símbolo do indicador regional U'
    ],
    '🇻': [
        'Letra V',
        ':letter_v:',
        ':v:',
        'Símbolo do indicador regional V'
    ],
    '🇼': [
        'Letra W',
        ':letter_w:',
        ':w:',
        'Símbolo do indicador regional W'
    ],
    '🇽': [
        'Letra X',
        ':letter_x:',
        ':x:',
        'Símbolo do indicador regional X'
    ],
    '🇾': [
        'Letra Y',
        ':letter_y:',
        ':y:',
        'Símbolo do indicador regional Y'
    ],
    '🇿': [
        'Letra Z',
        ':letter_z:',
        ':z:',
        'Símbolo de Símbolo Regional Z'
    ],
    '💌': [
        'Carta de Amor',
        ':love_letter:',
        'Envelope de Coração',
        'Nota de Amor'
    ],
    '🚮': [
        'Coloque Litter em seu símbolo de lugar',
        ':put_litter_in_bing_sign:',
        'Litro no Litro de Lixo',
        'Coloque Litro na Lixeira',
        'Pessoa com Lixeira'
    ],
    '♿': [
        'Símbolo de cadeirante',
        ':wheelchair_symbol:',
        'Banheiro Acessível'
    ],
    '🚹': [
        'Símbolo de Masculino',
        ':mens_symbol:',
        'Símbolo de Masculino',
        'Banheiro de Homens',
        'Banheiro Masculino',
        'WC Masculino',
        ':blue:'
    ],
    '🚺': [
        'Símbolo de Mulher',
        ':womens_symbol:',
        'Símbolo de Mulher',
        'Banheiro de Mulheres',
        'Bastão Feminino',
        'CM Família',
        ':purple:',
        ':pink:'
    ],
    '🚻': [
        'Banheiro',
        ':restroom:',
        'Placa de banheiro',
        'Placa de banheiro',
        'Sinal WC',
        ':blue:'
    ],
    '🚼': [
        'Símbolo Bebê',
        ':baby_symbol:',
        'Filhote de Estação de Troca',
        'Símbolo de mudança bebê',
        'Viveiro',
        ':orange:'
    ],
    '🚾': [
        'Armário de Água',
        ':wc:',
        'Banheiro',
        'Banheiro WC',
        ':blue:'
    ],
    '⚠️': [
        'Sinal de Aviso',
        ':warning_sign:',
        'Simbolo de Alerta',
        ':yellow:'
    ],
    '🚸': [
        'Cruzamento de crianças',
        ':children_crossing:',
        'Passagem por Crianças',
        'Cruzamento na Escola',
        ':yellow:'
    ],
    '🔅': [
        'Símbolo de Brilho Baixo',
        ':low_brightness_symbol:',
        'Botão escurecer',
        'Diminuir o brilho'
    ],
    '🔆': [
        'Símbolo de Alto Brilho',
        ':high_brightness_symbol:',
        'Aumentar o brilho',
        'Botão Brilhante'
    ],
    '📳': [
        'Modo de vibração',
        ':vibration_mode:',
        'Coração do Telefone',
        'Modo silencioso',
        ':orange:'
    ],
    '📴': [
        'Telefone celular desligado',
        ':mobile_phone_off:',
        ':orange:'
    ],
    '〰️': [
        'Rondas',
        'Dash da Marinha',
        ':wave:'
    ],
    '💱': [
        'Câmbio de Moeda',
        ':currency_exchange:'
    ],
    '💲': [
        'Sinal de Dólar Pesado',
        ':dollar_symbol:',
        'Dólar',
        'Sinal de Dólar'
    ],
    '♻️': [
        'Símbolo de Reciclagem Universal Preto',
        ':recycling_symbol:',
        'Símbolo de Reciclagem',
        'Lixeira Logo',
        ':green:'
    ],
    '🔱': [
        'Emblema do Tridente',
        ':trident_emblem:',
        'Forquinho',
        'Tridente'
    ],
    '📛': [
        'Distintivo de nome',
        ':name_badge:',
        'Tofu no fogo',
        'Tag do Nome',
        'Tag de Fogo'
    ],
    '🔰': [
        'Símbolo japonês para iniciante',
        ':japanese_symbol_beginner:',
        'Marca de Shoshinsha',
        'Escudo Verde Amarelo',
        ':green:',
        ':yellow:'
    ],
    '➰': [
        'Repetição Encouraçada',
        ':curly_loop:',
        'Laço Curador',
        'Repetir'
    ],
    '➿': [
        'Ciclo Duplo',
        ':double_curly_loop:',
        'Loop de Curador Duplo',
        'Correio'
    ],
    '〽️': [
        'Marca de Alternação de Parte',
        ':part_alternation_mark:',
        'MM',
        'McDonalds'
    ],
    '✳️': [
        'Oito Asterisk falado',
        ':eight_spoked_asterisk:',
        ':green:'
    ],
    '✴️': [
        'Oito Estrela Preta Pontida',
        ':eight_pointed_star:',
        'Estrela Laranja',
        'Oito Estrela Enpotada',
        ':orange:'
    ],
    '❇️': [
        'Brilhante',
        ':sparkle:',
        ':green:'
    ],
    'Ⓜ️': [
        'M circulado',
        'Carta de Capital Latina circulada M',
        ':circled_m:',
        'Metrô',
        ':blue:'
    ],
    '🈁': [
        'Assinatura de Palavra Japonesa significa aqui',
        'Squared Katakana Koko',
        ':japanese_here:',
        'aqui',
        'Destino',
        ':blue:'
    ],
    '🈂️': [
        'Assinatura japonesa com serviço ou taxa de serviço',
        'Squared Katakana Sa',
        ':japanese_service:',
        ':blue:'
    ],
    '🈷️': [
        'Assinatura japonesa significa valor mensal',
        'Ideógrafo unificado CJK Quadrado',
        ':japanese_monthly_amouny:',
        'Radical 74',
        '月',
        ':orange:'
    ],
    '🈶': [
        'Assinatura japonesa significa não grátis de carga',
        'Ideógrafo unificado CJK Quadrado',
        ':japanese_own:',
        'Própria',
        '有',
        ':orange:'
    ],
    '🈯': [
        'Assinatura Japonesa Reservada',
        'Ideógrafo unificado CJK Quadrado -6307',
        ':japanese_reserved:',
        'Ponto de dedo',
        '指',
        ':green:'
    ],
    '🉐': [
        'Sinal de Japonês Significado Bargain',
        'Vantagem Ideógrafa Circled',
        ':japanese_acquire:',
        'Adquirir',
        '得',
        ':red:'
    ],
    '🈹': [
        'Assinatura japonesa significa desconto',
        'Ideógrafo unificado CJK quadrado-5272',
        ':japanese_discount:',
        'Liquidação de barganha',
        '割',
        ':red:'
    ],
    '🈚': [
        'Assinatura japonesa significa grátis de carga',
        'Ideógrafo unificado CJK quadrado-7121',
        ':japanese_lacking:',
        'Falta',
        '無',
        ':orange:'
    ],
    '🈲': [
        'Assinatura japonesa significa proibida',
        'Ideógrafo unificado CJK quadrado-7981',
        ':japanese_prohibited:',
        'Forbid',
        '禁',
        ':red:'
    ],
    '🉑': [
        'Assinatura japonesa significa aceitável',
        'Aceitar Ideógrafo Círculo',
        ':japanese_accept:',
        'Aceitar',
        ':orange:'
    ],
    '🈸': [
        'Assinatura Japonesa - Aplicativo',
        'Ideógrafo unificado CJK Quadrado -7533',
        ':japanese_application_form:',
        'Formulário de Aplicação',
        'Macaco',
        'Pedir',
        '申',
        ':orange:'
    ],
    '🈴': [
        'Assinatura Japonesa Passando (Grade)',
        'Ideógrafo unificado CJK Quadrado',
        ':japanese_agreement:',
        'Acordo',
        '合',
        ':red:'
    ],
    '🈳': [
        'Placa Japonesa Significada Vacancia',
        'Ideógrafo unificado CJK Quadrado',
        ':japanese_available:',
        'Vazio e disponível',
        '空',
        ':blue:'
    ],
    '㊗️': [
        'Assinatura japonesa significa parabéns',
        'Ideógrafo de Círculo Parabéns',
        ':japanese_congratulations:',
        ':red:'
    ],
    '㊙️': [
        'Segredo de Ideógrafo Círculo',
        ':japanese_secret:',
        'Assinatura Japonesa significa Segredo',
        'Segredo',
        ':red:'
    ],
    '🈺': [
        'Assinatura japonesa significa aberto para negócios',
        'Ideógrafo unificado CJK quadrado-55b6',
        ':japanese_open_for_business:',
        'Trabalho',
        '営',
        ':orange:'
    ],
    '🈵': [
        'Placa de Japonês Significado Completo; Sem Vagas',
        'Ideógrafo unificado CJK Quadrado',
        ':japanese_full:',
        'Completo',
        '満',
        ':red:'
    ],
    '🔘': [
        'Botão de Rádio',
        ':radio_button:'
    ],
    '🛑': [
        'Placa de Parada',
        ':stop_sign:',
        'Placa Octagonal',
        ':red:'
    ],
    '⚕️': [
        'Símbolo Médico',
        ':medical_symbol:',
        'Aesculapius',
        'Asklepios',
        'Cajado de Asclepius',
        'Cajado de Aesculapius'
    ],
    '🛗': [
        'Elevador',
        ':elevator:',
        ':lift:',
        'Elevador'
    ],
    '⚧️': [
        'Símbolo transgênero',
        ':transgender_sign:'
    ],
    '♂️': [
        'Placa Masculina',
        ':male_sign:',
        'Símbolo Homem',
        'Símbolo de Marte'
    ],
    '♀️': [
        'Placa Feminina',
        ':female_sign:',
        'Símbolo Mulher',
        'Venus Symbol'
    ]
};
/*food and drinks*/
emojis_language[lang][6] = {
    '🍇': [
        'Uvas',
        ':grapes:',
        'Uva',
        ':purple:'
    ],
    '🍈': [
        'Melancia',
        ':melon:',
        'Cantaloupe',
        'Melão',
        'Melancia'
    ],
    '🍉': [
        'melancia',
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
        'Limão',
        ':lemon:',
        'Limonada',
        ':yellow:'
    ],
    '🍌': [
        'Banana',
        ':banana:',
        'Planta',
        ':yellow:'
    ],
    '🍍': [
        'Abacaxi',
        ':pineapple:'
    ],
    '🥭': [
        'Mango',
        ':mango:'
    ],
    '🍎': [
        'Maçã vermelha',
        ':red_apple:',
        ':apple:',
        'Maçã Deliciosa Vermelha',
        ':red:'
    ],
    '🍏': [
        'Maçã Verde',
        ':green_apple:',
        ':apple:',
        'Maçã Deliciosa Dourada',
        'Granny Smith Apple',
        ':green:'
    ],
    '🍐': [
        'Pêra',
        ':pear:'
    ],
    '🍑': [
        'Pêssego',
        ':peach:',
        'Inferior',
        'Coronha',
        ':orange:',
        ':pink:'
    ],
    '🍒': [
        'Cerejas',
        ':cherry:',
        'Cereja',
        'Cereja Selvagem',
        ':red:'
    ],
    '🍓': [
        'Morango',
        ':strawberry:',
        ':red:'
    ],
    '🥝': [
        'Fruta Kiwi',
        ':kiwi:',
        'Gooseberry Chinês',
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
        'Coco',
        ':coconut:',
        'Cocoanut'
    ],
    '🥑': [
        'Abacate',
        ':avocado:',
        ':green:'
    ],
    '🍆': [
        'Berinjela',
        ':eggplant:',
        ':aubergine:',
        'Aubergine',
        'Phallic',
        'Vegetal Roxo',
        ':purple:'
    ],
    '🥔': [
        'Batata',
        ':potato:',
        'Batata assada',
        'Batata de Idaho'
    ],
    '🥕': [
        'Cenoura',
        ':carrot:',
        ':orange:'
    ],
    '🌽': [
        'Orelha de milho',
        ':ear_of_corn:',
        'Milho',
        'Milho na pelagem',
        'Milho',
        'Olho de Milze'
    ],
    '🌶️': [
        'Pimenta Quente',
        ':hot_pepper:',
        'Pimenta de Chili',
        'Picante',
        ':red:'
    ],
    '🥒': [
        'Pecubador',
        ':cucumber:',
        'Gherkin',
        'Picles',
        ':green:'
    ],
    '🥬': [
        'Verde frondoso',
        ':leafy_green:',
        'Escolha do Bok',
        'Repolho Chinês',
        'Cos Lettuce',
        'Alface Romana',
        'Verdes frondosos',
        ':green:'
    ],
    '🥦': [
        'Brócolis',
        ':broccoli:',
        ':green:'
    ],
    '🍋‍🟩': [
        'Lime',
        ':lime:',
        ':green:'
    ],
    '🍄': [
        'Cogumelo',
        ':mushroom:',
        'Cogumelo',
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
        'Nozes',
        ':brown:'
    ],
    '🌰': [
        'Castanho',
        ':chestnut:',
        'Bolota',
        'Porca',
        ':brown:'
    ],
    '🍞': [
        'Pão',
        ':bread:',
        'Pão de Pão',
        ':brown:'
    ],
    '🥐': [
        'Croissant',
        ':croissant:',
        ':brown:'
    ],
    '🥖': [
        'Pão de Baguette',
        ':baguette_bread:',
        'Pão francês',
        'Baguete',
        ':brown:'
    ],
    '🥨': [
        'Pretzel',
        ':pretzel:',
        ':brown:'
    ],
    '🥯': [
        'Baga',
        ':bagel:',
        ':brown:'
    ],
    '🥞': [
        'Panquecas',
        ':pancakes:',
        'Crianças',
        'Bolos Quentes',
        ':yellow:'
    ],
    '🧀': [
        'Cunha de Queijo',
        ':cheese_wedge:',
        'Queijo',
        ':yellow:'
    ],
    '🍖': [
        'Carne com osso',
        ':meat_on_bone:',
        'Churrasco',
        'Churrasqueira',
        'Carne de Mangá',
        ':red:'
    ],
    '🍗': [
        'Poultry Leg',
        ':poultry_leg:',
        'Baqueta',
        'Perna Perna Perna',
        ':red:'
    ],
    '🥩': [
        'Corte de Carne',
        ':cut_of_meat:',
        'Carne',
        'Bife',
        ':red:'
    ],
    '🥓': [
        'Bacon',
        ':bacon:',
        'Rashers',
        ':red:'
    ],
    '🍔': [
        'Hambúrguer',
        ':hamburger:',
        'Hambúrguer',
        'Cheeseburger'
    ],
    '🍟': [
        'Batatas fritas',
        ':french_fries:',
        'Fichas',
        'Fritas',
        'Batatas Fritas do McDonalds',
        ':yellow:'
    ],
    '🍕': [
        'pizza',
        ':pizza:',
        'Pizza Pepperoni',
        'Fatia de Pizza',
        ':red:'
    ],
    '🌭': [
        'Cachorro Quente',
        ':hot_dog:',
        'Cachorro-quente',
        'Linguiça',
        ':red:'
    ],
    '🥪': [
        'Sanduíche',
        ':sandwich:'
    ],
    '🌮': [
        'Taco',
        ':taco:'
    ],
    '🌯': [
        'Burrito',
        ':burrito:',
        'Ajustar'
    ],
    '🥙': [
        'Flatpão Recheado',
        ':stuffed_flatbread:',
        'Doner Kebab',
        'Gyro',
        'Shawarma',
        'Pita Sanduíche'
    ],
    '🍳': [
        'Cozinha',
        ':cooking:',
        'Quebra-cabeça',
        'Ovo Frito',
        'Frita Pan'
    ],
    '🥘': [
        'Vala Lenta de Comida',
        ':shallow_pan_of_food:',
        'Paella',
        'Panela de Comida'
    ],
    '🍲': [
        'Pote de Comida',
        ':pot_of_food:',
        'Tigela de Comida',
        'Sopa',
        'Ensopado'
    ],
    '🥣': [
        'Tigela com Colheita',
        ':bowl_with_spoon:',
        'Tigela de Cereal'
    ],
    '🥗': [
        'Salada Verde',
        ':green_salad:',
        'Salada',
        ':green:'
    ],
    '🍿': [
        'Pipoca',
        ':popcorn:',
        'Estourando milho'
    ],
    '🧂': [
        'Sal',
        ':salt:',
        'format@@0 Salt Shaker',
        ':white:'
    ],
    '🥫': [
        'Comida enlatada',
        ':canned_food:',
        'Lata de Comida',
        'Lata de Estanho',
        'Comida Tinta'
    ],
    '🍱': [
        'Caixa de Bento',
        ':bento_box:',
        'Caixa de almoço'
    ],
    '🍘': [
        'Quebra Rosa',
        ':rice_cracker:',
        'Rachadura'
    ],
    '🍙': [
        'Bola de arroz',
        ':rice_ball:',
        'Onigiri'
    ],
    '🍚': [
        'Arroz assado',
        ':cooked_rice:',
        'Arroz Cozido',
        'Arroz',
        'Tigela de arroz',
        'Arroz Steamed'
    ],
    '🍛': [
        'Arroz Ursso',
        ':curry_rice:',
        'Cavalgar',
        'Alimentos indianos',
        'Curry e Arroz'
    ],
    '🍜': [
        'Tigela de Steaming',
        ':steaming_bowl:',
        'Macarrão',
        'Macarrão com pauzinhos',
        'Ramen'
    ],
    '🍝': [
        'Spaghetti',
        ':spaghetti:',
        'Maciço'
    ],
    '🍠': [
        'Batata Doce assada',
        ':roasted_sweet_potato:',
        'Batata Doce',
        'Sim'
    ],
    '🍢': [
        'Inferior',
        ':oden:',
        'Kebab',
        'Espeto'
    ],
    '🍣': [
        'Sushi',
        ':sushi:',
        'Sashimi',
        'Marisco',
        ':pink:'
    ],
    '🍤': [
        'Camarão Frito',
        ':fried_shrimp:',
        'Praia Frita',
        'Tempura de camarão'
    ],
    '🍥': [
        'Bolo de Peixe com Redemoinho',
        ':fish_cake_with_swirl:',
        'Bolo de peixe',
        'Pink Swirl'
    ],
    '🥮': [
        'Bolo da Lua',
        ':moon_cake:',
        'Bolo da Lua'
    ],
    '🍡': [
        'Dango',
        ':dango:',
        'Graveto da sobremesa',
        'Bolas verdes brancas rosa'
    ],
    '🥟': [
        'Bolinho',
        ':dumpling:',
        'Empanada',
        'Pierogi'
    ],
    '🥠': [
        'Biscoito da Sorte',
        ':fortune_cookie:'
    ],
    '🥡': [
        'Caixa de Takeout',
        ':takeout_box:',
        'Comida chinesa',
        'Oyster Pail'
    ],
    '🍦': [
        'Sorvete Macio',
        ':soft_ice_cream:',
        'Senhor Deputado Whippy',
        'Servo Suave'
    ],
    '🍧': [
        'Sombreado de Gelo',
        ':shaved_ice:',
        'Cone de Neve'
    ],
    '🍨': [
        'Sorvete de Sorvete',
        ':ice_cream:',
        'Tigela de sorvete',
        'Sobremesa'
    ],
    '🍩': [
        'Rosquinha',
        ':doughnut:',
        'Donut'
    ],
    '🍪': [
        'Biscoito',
        ':cookie:',
        'Biscoito',
        'Biscoito de Chocolate',
        ':brown:'
    ],
    '🎂': [
        'Bolo de aniversário',
        ':birthday_cake:',
        'Aniversário',
        'Bolo',
        'Bolo com velas'
    ],
    '🍰': [
        'Atalho',
        ':shortcake:',
        'Bolo',
        'Pedaço de Bolo',
        'Atalho de morango'
    ],
    '🧁': [
        'Cupcake',
        ':cupcake:',
        'Bolo Mágico'
    ],
    '🥧': [
        'Torta',
        ':pie:'
    ],
    '🍫': [
        'Barra de Chocolate',
        ':chocolate_bar:',
        'Barra de Doces',
        'Chocolate',
        ':brown:'
    ],
    '🍬': [
        'Doces',
        ':candy:',
        'Adolescente',
        'Doce'
    ],
    '🍭': [
        'Pirulito',
        ':lollipop:',
        'Sugador'
    ],
    '🍮': [
        'Rodapé',
        ':custard:',
        'Creme Caramel',
        'Sobremesa',
        'Flã',
        'Pudim'
    ],
    '🍯': [
        'Pote de mel',
        ':honey_pot:',
        'Mel',
        'Vaso',
        ':yellow:'
    ],
    '🍼': [
        'Garrafa de bebê',
        ':baby_bottle:',
        'Alimentação da garrafa'
    ],
    '🥛': [
        'Copo de leite',
        ':glass_of_milk:',
        'Leite',
        ':white:'
    ],
    '☕': [
        'Bebida Quente',
        ':hot_beverage:',
        'Café',
        'Espresso',
        'Chocolate quente',
        'Chá'
    ],
    '🍵': [
        'Teacup Sem Manipulação',
        ':green_tea:',
        'Chá Verde',
        'Matcha',
        'Chá Verde Matcha',
        ':green:'
    ],
    '🍶': [
        'Sake',
        ':sake:',
        'Garrafa',
        'Vinho Arroz',
        'Garrafa de Saque e Copa'
    ],
    '🍾': [
        'Garrafa com Cork Estourando',
        ':champagne:',
        'Celebração',
        'Champagne',
        'Vinho Brilhante'
    ],
    '🍷': [
        'Vidro Vinho',
        ':wine_glass:',
        'Álcool',
        'Vinho Vermelho',
        'Vinho'
    ],
    '🍸': [
        'Vidro Caudabrava',
        ':cocktail_glass:',
        'Coquetel',
        'Martini'
    ],
    '🍹': [
        'Bebida Tropical',
        ':tropical_drink:',
        'Soco de frutas',
        'Tiki Beink'
    ],
    '🍺': [
        'Caneca de Cerveja',
        ':beer_mug:',
        'Cerveja',
        'Lingote de Cerveja',
        ':yellow:'
    ],
    '🍻': [
        'Canecas de Cerveja Ardentes',
        ':clinking_beer_mugs:',
        'Cerveja',
        'Saudações'
    ],
    '🥂': [
        'Óculos Ardentes',
        ':clinking_glasses:',
        'Celebração',
        'Óculos de champanhe',
        'Saudações'
    ],
    '🥃': [
        'Vidro Tumbler',
        ':tumbler_glass:',
        'Bourbon',
        'Líquor',
        'Rum',
        'Bigode',
        'Whisky'
    ],
    '🥤': [
        'Copo com palha',
        ':cup_with_straw:',
        'Milkshake',
        'Suavização',
        'Pop de refrigerante',
        'Bebida Suave'
    ],
    '🥢': [
        'Chopsticks',
        ':chopsticks:'
    ],
    '🍽️': [
        'Garfo e Faca com Couraça',
        ':fork_and_knife_with_plate:',
        'Jantar',
        ':white:',
        ':gray:',
        ':grey:'
    ],
    '🍴': [
        'Faca e Fork',
        ':fork_and_knife:',
        'Talharia',
        'Faca e Garfo',
        'Prataria',
        ':gray:',
        ':grey:'
    ],
    '🥄': [
        'Colher',
        ':spoon:',
        ':gray:',
        ':grey:'
    ],
    '🧄': [
        'Alho',
        ':garlic:'
    ],
    '🧅': [
        'Cebola',
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
        'Manteiga',
        ':butter:'
    ],
    '🦪': [
        'Oyster',
        ':oyster:'
    ],
    '🧃': [
        'Caixa de Bebidas',
        ':beverage_box:',
        'Caixa de Suco'
    ],
    '🧉': [
        'Bebida Mate',
        ':mate_drink:',
        'Chimarra├o',
        'Cimarrón',
        'Imediato Yerba'
    ],
    '🫒': [
        'Verde-oliva',
        ':olive:',
        ':green:'
    ],
    '🫐': [
        'Mirtilos',
        ':blueberries:',
        ':blue:'
    ],
    '🫑': [
        'Pimenta de Bell',
        ':bell_pepper:',
        ':green:'
    ],
    '🫓': [
        'Flamejante',
        ':flatbread:'
    ],
    '🫔': [
        'tâmil',
        ':tamale:',
        'tâmil'
    ],
    '🫕': [
        'Fondue',
        ':fondue:'
    ],
    '🧋': [
        'Chá de Bolhas',
        ':boba:',
        'Boba'
    ],
    '🧊': [
        'Cubo de Gelo',
        ':ice_cube:'
    ],
    '🫘': [
        'Beans',
        'Flatulence',
        ':beans:',
        'Sementes de café',
        'Spill the beans'
    ],
    '🫗': [
        'colocando Liquid',
        ':puring_liquid:',
        'Bebida de fervor',
        'Água'
    ]
};
/*flags*/
emojis_language[lang][7] = {
    '🏁': [
        'Bandeira Cheada',
        ':chequered_flag:',
        'Bandeira Marcada',
        'Garota da Grade',
        'Bandeira de Corrida',
        ':black:',
        ':white:'
    ],
    '🚩': [
        'Bandeira Triangular',
        ':triangular_flag:',
        'Bandeira no Polo',
        'Bandeira Vermelha',
        'Bandeira Triangular no Poste',
        ':red:'
    ],
    '🎌': [
        'Bandeiras Cruzadas',
        ':crossed_flags:',
        'Duas bandeiras'
    ],
    '🏴': [
        'Bandeira Preta',
        ':black_flag:',
        'Abrindo a Bandeira Preta',
        ':black:'
    ],
    '🏳️': [
        'Bandeira Branca',
        ':white_flag:',
        'Ondulando a bandeira branca',
        ':white:'
    ],
    '🏳️‍🌈': [
        'Bandeira do Arco-íris',
        ':rainbow_flag:',
        'Pride Flag',
        'LGBT',
        'LGBTQIA+',
        'Gay',
        'Transgênero',
        'Lesbian',
        'Asexual',
        'Queer'
    ],
    '🏳️‍⚧️': [
        'Bandeira Transgênera',
        ':transgender_flag:',
        'Azul , rosa e bandeira branca',
        'Bandeira dos Trans',
        'Blue',
        'Pink'
    ],
    '🏴‍☠️': [
        'Bandeira do Pirata',
        ':pirate_flag:',
        'Jolly Roger',
        ':black:',
        'Corsair',
        'Privateer',
        'Buccaneer'
    ],
    '🇺🇳': [
        'Bandeira das Nações Unidas',
        ':un:',
        'Bandeira: Nações Unidas'
    ],
    '🇪🇺': [
        'Sinalizador da União Europeia',
        ':eu:',
        'Bandeira: União Europeia',
        'EU Flag'
    ],
    '🇦🇨': [
        'Bandeira da Ilha de Ascensão',
        ':ac:'
    ],
    '🇦🇩': [
        'Bandeira de Andorra',
        ':ad:',
        'Andorran Flag'
    ],
    '🇦🇪': [
        'Bandeira dos Emirados Árabes Unidos',
        ':ae:',
        'Emirati Flag',
        'Bandeira UAE'
    ],
    '🇦🇫': [
        'Bandeira do Afeganistão',
        ':af:',
        'Afghan Flag'
    ],
    '🇦🇬': [
        'Bandeira de Antígua e Barbuda',
        ':ag:'
    ],
    '🇦🇮': [
        'Bandeira de Anguilla',
        ':ai:',
        'Bandeira Anguillan'
    ],
    '🇦🇱': [
        'Bandeira da Albânia',
        ':al:',
        'Bandeira albanesa'
    ],
    '🇦🇲': [
        'Bandeira da Armênia',
        ':am:',
        'Bandeira da Armênia'
    ],
    '🇦🇴': [
        'Bandeira da Angola',
        ':ao:',
        'Bandeira angolana'
    ],
    '🇦🇶': [
        'Bandeira da Antártica',
        ':aq:',
        'Bandeira da Antártica'
    ],
    '🇦🇷': [
        'Bandeira da Argentina',
        ':ar:',
        'Bandeira argentina'
    ],
    '🇦🇸': [
        'Bandeira da Samoa Americana',
        ':as:',
        'American Samoan Flag'
    ],
    '🇦🇹': [
        'Bandeira da Áustria',
        ':at:',
        'Austrian Flag'
    ],
    '🇦🇺': [
        'Bandeira da Austrália',
        ':au:',
        'Bandeira de Aussie',
        'Bandeira Australiana'
    ],
    '🇦🇼': [
        'Bandeira de Aruba',
        ':aw:',
        'Bandeira de Aruban'
    ],
    '🇦🇽': [
        'Bandeira das Ilhas do Mundo',
        ':ax:',
        'Bandeira da Terra'
    ],
    '🇦🇿': [
        'Bandeira do Azerbaijão',
        ':az:',
        'Bandeira do Azerbaijão'
    ],
    '🇧🇦': [
        'Bandeira da Bósnia-Herzegovina',
        ':ba:'
    ],
    '🇧🇧': [
        'Bandeira de Barbados',
        ':bb:',
        'Bandeira dos Barbados',
        'Bandeira Bajan'
    ],
    '🇧🇩': [
        'Bandeira do Bangladesh',
        ':bd:',
        'Bangladeshi Flag'
    ],
    '🇧🇪': [
        'Bandeira da Bélgica',
        ':be:',
        'Bandeira belga'
    ],
    '🇧🇫': [
        'Bandeira do Burkina Faso',
        ':bf:',
        'Bandeira de Burkinabe'
    ],
    '🇧🇬': [
        'Bandeira da Bulgária',
        ':bg:',
        'Bandeira Búlgara'
    ],
    '🇧🇭': [
        'Bandeira do Barém',
        ':bh:',
        'Bandeira de Bahrani',
        'Bandeira do Barém'
    ],
    '🇧🇮': [
        'Bandeira do Burundi',
        ':bi:',
        'Burundian Flag'
    ],
    '🇧🇯': [
        'Bandeira do Benin',
        ':bj:',
        'Bandeira do Beninês'
    ],
    '🇧🇱': [
        'Bandeira de São Bartolto lemy',
        ':bl:',
        'Bandeira: São Barthe├lemy'
    ],
    '🇧🇲': [
        'Bandeira de Bermudas',
        ':bm:',
        'Bermudan Flag'
    ],
    '🇧🇳': [
        'Bandeira de Brunei',
        ':bn:',
        'Bandeira de Brunean'
    ],
    '🇧🇴': [
        'Bandeira da Bolívia',
        ':bo:',
        'Bolivian Flag'
    ],
    '🇧🇶': [
        'Bandeira da Holanda do Caribe',
        ':bq:',
        'Bonaire'
    ],
    '🇧🇷': [
        'Bandeira do Brasil',
        ':br:',
        'Bandeira do Brasil'
    ],
    '🇧🇸': [
        'Bandeira de Bahamas',
        ':bs:',
        'Bandeira de Bahamas'
    ],
    '🇧🇹': [
        'Bandeira de Butão',
        ':bt:',
        'Bandeira de Butanês'
    ],
    '🇧🇻': [
        'Bandeira da Ilha de Bouvet',
        ':bv:',
        'Bandeira: Ilha de Bouvet'
    ],
    '🇧🇼': [
        'Bandeira do Botswana',
        ':bw:',
        'Batswana Flag'
    ],
    '🇧🇾': [
        'Bandeira da Bielorrússia',
        ':by:',
        'Bandeira da Bielorrússia'
    ],
    '🇧🇿': [
        'Bandeira de Belize',
        ':bz:',
        'Bandeira do Belizean'
    ],
    '🇨🇦': [
        'Bandeira do Canadá',
        'Bandeira Canadense',
        ':ca:'
    ],
    '🇨🇨': [
        'Bandeira de Ilhas Cocos (Keeling)',
        ':cc:'
    ],
    '🇨🇩': [
        'Flag of Congo - Kinshasa',
        ':cd:'
    ],
    '🇨🇫': [
        'Bandeira da República Centro-Africana',
        ':cf:',
        'Bandeira da África Central'
    ],
    '🇨🇬': [
        'Bandeira do Congo - Brazzaville',
        ':cg:'
    ],
    '🇨🇭': [
        'Bandeira da Suíça',
        ':ch:',
        'Cruz Vermelha',
        'Bandeira suíça'
    ],
    '🇨🇮': [
        'Bandeira da Costa do Marfim',
        ':ci:',
        'Flag: Côte d’Ivoire'
    ],
    '🇨🇰': [
        'Bandeira das Ilhas Cook',
        ':ck:',
        'Bandeira de ilha cozida'
    ],
    '🇨🇱': [
        'Bandeira do Chile',
        ':cl:',
        'Bandeira chilena'
    ],
    '🇨🇲': [
        'Bandeira dos Camarões',
        ':cm:',
        'Bandeira de Camarões'
    ],
    '🇨🇳': [
        'Bandeira da China',
        ':cn:',
        'Bandeira Chinesa'
    ],
    '🇨🇴': [
        'Bandeira da Colômbia',
        ':co:',
        'Bandeira colombiana'
    ],
    '🇨🇵': [
        'Bandeira da Ilha Clipperton',
        ':cp:',
        'Bandeira: Ilha Clipperton'
    ],
    '🇨🇷': [
        'Bandeira da Costa Rica',
        ':cr:',
        'Bandeira da Costa Rica'
    ],
    '🇨🇺': [
        'Bandeira de Cuba',
        ':cu:',
        'Bandeira cubana'
    ],
    '🇨🇻': [
        'Bandeira de Cabo Verde',
        ':cv:',
        'Bandeira de Cabo Verdiano'
    ],
    '🇨🇼': [
        'Bandeira de Curaçāo ao',
        ':cw:',
        'Curaçaoan Flag'
    ],
    '🇨🇽': [
        'Bandeira da Ilha de Natal',
        ':cx:',
        'Bandeira da Ilha do Natal'
    ],
    '🇨🇾': [
        'Bandeira de Chipre',
        ':cy:',
        'Bandeira cipriota'
    ],
    '🇨🇿': [
        'Bandeira da Chequia',
        ':cz:',
        'Bandeira Tcheca'
    ],
    '🇩🇪': [
        'Bandeira da Alemanha',
        ':de:',
        'Bandeira da Deutsch',
        'Bandeira da Alemanha'
    ],
    '🇩🇬': [
        'Bandeira de Diego Garcia',
        ':dg:',
        'Bandeira: Diego Garcia'
    ],
    '🇩🇯': [
        'Bandeira de Djibouti',
        ':dj:',
        'Djibouti Flag',
        'Djiboutian Flag'
    ],
    '🇩🇰': [
        'Bandeira da Dinamarca',
        ':dk:',
        'Bandeira dinamarquesa'
    ],
    '🇩🇲': [
        'Bandeira de Dominica',
        ':dm:'
    ],
    '🇩🇴': [
        'Bandeira da República Dominicana',
        ':do:',
        'Bandeira do Dom',
        'Bandeira Dominicana'
    ],
    '🇩🇿': [
        'Bandeira da Argélia',
        ':dz:',
        'Algerian Flag'
    ],
    '🇪🇦': [
        'Bandeira de Ceuta e Melilha',
        ':ea:',
        'Bandeira de Melilla',
        'Bandeira de Ceuta',
        'Flag: Ceuta & Melilla'
    ],
    '🇪🇨': [
        'Bandeira do Equador',
        ':ec:',
        'Ecuadorian Flag'
    ],
    '🇪🇪': [
        'Bandeira da Estónia',
        ':ee:',
        'Bandeira Estoniana'
    ],
    '🇪🇬': [
        'Bandeira do Egito',
        ':eg:',
        'Bandeira Egípcia'
    ],
    '🇪🇭': [
        'Bandeira do Sara Ocidental',
        ':eh:',
        'Bandeira do Sara Ocidental'
    ],
    '🇪🇷': [
        'Bandeira da Eritreia',
        ':er:',
        'Eritrean Flag'
    ],
    '🇪🇹': [
        'Bandeira da Etiópia',
        ':et:',
        'Ethiopian Flag'
    ],
    '🇪🇸': [
        'Bandeira da Espanha',
        ':es:',
        'Bandeira Espanhola'
    ],
    '🇫🇮': [
        'Bandeira da Finlândia',
        ':fi:',
        'Bandeira finlandesa'
    ],
    '🇫🇯': [
        'Bandeira de Fiji',
        ':fj:',
        'Fijian Flag'
    ],
    '🇫🇰': [
        'Bandeira das Ilhas Falkland',
        ':fk:',
        'Bandeira do Falklander'
    ],
    '🇫🇲': [
        'Bandeira da Micronésia',
        ':fm:',
        'Bandeira Micronésia'
    ],
    '🇫🇴': [
        'Bandeira das Ilhas Faroe',
        ':fo:',
        'Faroe Islander Flag'
    ],
    '🇫🇷': [
        'Bandeira da França',
        ':fr:',
        'Bandeira da França'
    ],
    '🇬🇦': [
        'Bandeira de Gabão',
        ':ga:',
        'Bandeira Gabonesa'
    ],
    '🇬🇧': [
        'Bandeira da Grã-Bretanha',
        ':gb:',
        'Bandeira Britânica',
        'Reino Unido',
        'Union Jack',
        'RU'
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
        'Bandeira de Granada',
        ':gd:',
        'Bandeira de Granada'
    ],
    '🇬🇪': [
        'Bandeira da Geórgia',
        ':ge:',
        'Bandeira da Geórgia'
    ],
    '🇬🇫': [
        'Bandeira da Guiana Francesa',
        ':gf:',
        'Bandeira da Guiné Francesa'
    ],
    '🇬🇬': [
        'Bandeira de Guernsey',
        ':gg:',
        'Guernsey Flag'
    ],
    '🇬🇭': [
        'Bandeira do Gana',
        ':gh:',
        'Bandeira de Gana'
    ],
    '🇬🇮': [
        'Bandeira de Gibraltar',
        ':gi:',
        'Bandeira de Gibraltarian'
    ],
    '🇬🇱': [
        'Bandeira da Gronelândia',
        ':gl:',
        'Greenlandic Flag'
    ],
    '🇬🇲': [
        'Bandeira da Gâmbia',
        ':gm:',
        'Gambian Flag'
    ],
    '🇬🇳': [
        'Bandeira da Guiné',
        ':gn:',
        'Guinean Flag'
    ],
    '🇬🇵': [
        'Bandeira de Guadalupe',
        ':gp:',
        'Bandeira de Guadalupe'
    ],
    '🇬🇶': [
        'Bandeira da Guiné Equatorial',
        ':gq:',
        'Equatorial Guinean Flag',
        'Bandeira Equatoguineana'
    ],
    '🇬🇷': [
        'Bandeira da Grécia',
        ':gr:',
        'Bandeira Grega'
    ],
    '🇬🇸': [
        'Bandeira da Geórgia do Sul e das Ilhas Sandwich do Sul',
        ':gs:'
    ],
    '🇬🇹': [
        'Bandeira da Guatemala',
        ':gt:',
        'Guatemalan Flag'
    ],
    '🇬🇺': [
        'Bandeira de Guam',
        ':gu:',
        'Bandeira Guamaniana',
        'Bandeira do Chamorro'
    ],
    '🇬🇼': [
        'Bandeira da Guiné-Bissau',
        ':gw:',
        'Guinea-Bissau Flag'
    ],
    '🇬🇾': [
        'Bandeira da Guiana',
        ':gy:',
        'Bandeira da Guiana'
    ],
    '🇭🇰': [
        'Bandeira da RAE de Hong Kong China',
        ':hk:',
        'Bandeira de Hong Kong'
    ],
    '🇭🇲': [
        'Bandeira de Ilhas Heard e McDonald',
        ':hm:',
        'Bandeira: Ilhas Heard e McDonald'
    ],
    '🇭🇳': [
        'Bandeira de Honduras',
        ':hn:',
        'Bandeira da Hondurenha'
    ],
    '🇭🇷': [
        'Bandeira da Croácia',
        ':hr:',
        'Bandeira croata'
    ],
    '🇭🇹': [
        'Bandeira do Haiti',
        ':ht:',
        'Haitian Flag'
    ],
    '🇭🇺': [
        'Bandeira da Hungria',
        ':hu:',
        'Bandeira húngara'
    ],
    '🇮🇨': [
        'Bandeira das Ilhas Canárias',
        ':ic:'
    ],
    '🇮🇩': [
        'Bandeira da Indonésia',
        ':id:',
        'Bandeira Indonésia'
    ],
    '🇮🇪': [
        'Bandeira da Irlanda',
        ':ie:',
        'Bandeira irlandesa'
    ],
    '🇮🇱': [
        'Bandeira de Israel',
        ':il:',
        'Bandeira de Israel'
    ],
    '🇮🇲': [
        'Bandeira da Ilha de Man',
        ':im:',
        'Manx Flag'
    ],
    '🇮🇳': [
        'Bandeira da Índia',
        ':in:',
        'Bandeira Indiana'
    ],
    '🇮🇴': [
        'Bandeira do território do Oceano Índico Britânico',
        ':io:',
        'Bandeira do Território Índico Britânico'
    ],
    '🇮🇶': [
        'Bandeira do Iraque',
        ':iq:',
        'Iraqi Flag'
    ],
    '🇮🇷': [
        'Bandeira do Irão',
        ':ir:',
        'Bandeira Iraniana'
    ],
    '🇮🇸': [
        'Bandeira da Islândia',
        ':is:',
        'Bandeira Islandês'
    ],
    '🇮🇹': [
        'Bandeira da Itália',
        ':it:',
        'Bandeira Italiana'
    ],
    '🇯🇪': [
        'Bandeira da Camisa',
        ':je:',
        'Bandeira da Camisa'
    ],
    '🇯🇲': [
        'Bandeira da Jamaica',
        ':jm:',
        'Bandeira Jamaicana'
    ],
    '🇯🇴': [
        'Bandeira da Jordânia',
        ':jo:',
        'Bandeira da Jordânia'
    ],
    '🇯🇵': [
        'Bandeira do Japão',
        ':jp:',
        'Bandeira de Japonês'
    ],
    '🇰🇪': [
        'Bandeira do Quénia',
        ':ke:',
        'Bandeira queniana'
    ],
    '🇰🇬': [
        'Bandeira do Quirguizistão',
        ':kg:',
        'Kyrgyzstani Flag'
    ],
    '🇰🇭': [
        'Bandeira do Camboja',
        ':kh:',
        'Bandeira do Camboja'
    ],
    '🇰🇮': [
        'Bandeira de Kiribati',
        ':ki:',
        'Bandeira de I-Kiribati'
    ],
    '🇰🇲': [
        'Bandeira das Comores',
        ':km:',
        'Bandeira das Comores'
    ],
    '🇰🇳': [
        'Bandeira de São Cristóvão e Nevis',
        ':kn:'
    ],
    '🇰🇵': [
        'Bandeira da Coreia do Norte',
        ':kp:',
        'Bandeira da Coreia do Norte'
    ],
    '🇰🇷': [
        'Bandeira da Coreia do Sul',
        ':kr:',
        'Bandeira Sul-Coreana'
    ],
    '🇰🇼': [
        'Bandeira do Kuwait',
        ':kw:',
        'Kuwaiti Flag'
    ],
    '🇰🇾': [
        'Bandeira das Ilhas Cayman',
        ':ky:',
        'Bandeira Caymanana'
    ],
    '🇰🇿': [
        'Bandeira do Cazaquistão',
        ':kz:',
        'Kazakhstani Flag',
        'Kazakh Flag'
    ],
    '🇱🇦': [
        'Bandeira do Laos',
        ':la:',
        'Bandeira Laosiana',
        'Bandeira do Lao'
    ],
    '🇱🇧': [
        'Bandeira do Líbano',
        ':lb:',
        'Bandeira libanesa'
    ],
    '🇱🇨': [
        'Bandeira de Santa Lúcia',
        ':lc:'
    ],
    '🇱🇮': [
        'Bandeira do Liechtenstein',
        ':lt:',
        'Bandeira de Liechtensteiner'
    ],
    '🇱🇰': [
        'Bandeira do Sri Lanka',
        ':lk:',
        'Bandeira do Sri Lanka'
    ],
    '🇱🇷': [
        'Bandeira da Libéria',
        ':lr:',
        'Bandeira Liberiana'
    ],
    '🇱🇸': [
        'Flag of Lesotho',
        ':ls:',
        'Basotho Flag'
    ],
    '🇱🇹': [
        'Bandeira da Lituânia',
        ':lt:',
        'Bandeira lituana'
    ],
    '🇱🇺': [
        'Bandeira do Luxemburgo',
        ':lu:',
        'Bandeira do Luxemburgo'
    ],
    '🇱🇻': [
        'Bandeira da Letónia',
        ':lv:',
        'Bandeira Letã'
    ],
    '🇱🇾': [
        'Bandeira da Líbia',
        ':ly:',
        'Bandeira da Líbia'
    ],
    '🇲🇦': [
        'Bandeira do Marrocos',
        ':ma:',
        'Bandeira marroquina'
    ],
    '🇲🇨': [
        'Bandeira de Mônaco',
        ':mc:',
        'Bandeira de Monecome, gasque'
    ],
    '🇲🇩': [
        'Bandeira da Moldávia',
        ':md:',
        'Bandeira da Moldávia'
    ],
    '🇲🇪': [
        'Bandeira do Montenegro',
        ':me:',
        'Bandeira do montenegrino'
    ],
    '🇲🇫': [
        'Bandeira de São Martinho',
        ':mf:',
        'Flag: St. Martin'
    ],
    '🇲🇬': [
        'Bandeira de Madagáscar',
        ':mg:',
        'Madagascan Flag'
    ],
    '🇲🇭': [
        'Bandeira das Ilhas Marshall',
        ':mh:',
        'Bandeira Marshallesa'
    ],
    '🇲🇰': [
        'Bandeira da Macedónia',
        ':mk:',
        'Bandeira Macedônica'
    ],
    '🇲🇱': [
        'Bandeira do Mali',
        ':ml:',
        'Bandeira do Malian'
    ],
    '🇲🇲': [
        'Bandeira de Myanmar (Birmânia)',
        ':mm:',
        'Bandeira de Mianmar',
        'Bandeira para a Birmânia',
        'Bandeira birmanesa'
    ],
    '🇲🇳': [
        'Bandeira da Monglia',
        ':mn:',
        'Bandeira da Mongólia'
    ],
    '🇲🇴': [
        'Bandeira de Macau Sar China',
        ':mo:',
        'Bandeira Macanesa'
    ],
    '🇲🇵': [
        'Bandeira das Ilhas Marianas do Norte',
        ':mp:',
        'Bandeira Micronésia'
    ],
    '🇲🇶': [
        'Bandeira da Martinica',
        ':mq:',
        'Bandeira da cobra da Martinica',
        'Bandeira da Martinica'
    ],
    '🇲🇷': [
        'Bandeira da Mauritânia',
        ':mr:',
        'Bandeira da Mauritânia'
    ],
    '🇲🇸': [
        'Flag of Montserrat',
        ':ms:',
        'Montserratian Flag'
    ],
    '🇲🇹': [
        'Bandeira de Malta',
        ':mt:',
        'Maltese Flag'
    ],
    '🇲🇺': [
        'Flag of Mauritius',
        ':mu:',
        'Bandeira da Maurícia'
    ],
    '🇲🇻': [
        'Bandeira das Maldivas',
        ':mv:',
        'Bandeira de Maldição'
    ],
    '🇲🇼': [
        'Bandeira do Malawi',
        ':mw:',
        'Malawian Flag'
    ],
    '🇲🇽': [
        'Bandeira do México',
        ':mx:',
        'Bandeira Mexicana'
    ],
    '🇲🇾': [
        'Bandeira da Malásia',
        ':my:',
        'Malaysian Flag'
    ],
    '🇲🇿': [
        'Bandeira de Moçambique',
        ':mz:',
        'Bandeira de Moçambique'
    ],
    '🇳🇦': [
        'Bandeira da Namíbia',
        ':na:',
        'Namibian Flag'
    ],
    '🇳🇨': [
        'Bandeira da Nova Caledônia',
        ':nc:',
        'Novo Sinalizador Caledoniano'
    ],
    '🇳🇪': [
        'Bandeira do Níger',
        ':ne:',
        'Bandeira da Nigéria'
    ],
    '🇳🇫': [
        'Bandeira da Ilha Norfolk',
        ':nf:',
        'Bandeira da Ilha Norfolk'
    ],
    '🇳🇬': [
        'Bandeira da Nigéria',
        ':ng:',
        'Bandeira da Nigéria'
    ],
    '🇳🇮': [
        'Flag of Nicaragua',
        ':ni:',
        'Nicaraguan Flag'
    ],
    '🇳🇱': [
        'Bandeira da Holanda',
        ':nl:',
        'Bandeira holandesa',
        'Holanda'
    ],
    '🇳🇴': [
        'Bandeira da Noruega',
        ':no:',
        'Bandeira Norueguesa'
    ],
    '🇳🇵': [
        'Bandeira do Nepal',
        ':np:',
        'Bandeira nepalesa'
    ],
    '🇳🇷': [
        'Bandeira de Nauru',
        ':nr:',
        'Nauruan Flag'
    ],
    '🇳🇺': [
        'Bandeira de Niue',
        ':nu:',
        'Niuean Flag'
    ],
    '🇳🇿': [
        'Bandeira da Nova Zelândia',
        ':nz:',
        'Bandeira do Kiwi'
    ],
    '🇴🇲': [
        'Bandeira de Oman',
        ':om:',
        'Bandeira Omani'
    ],
    '🇵🇦': [
        'Bandeira do Panamá',
        ':pa:',
        'Bandeira Panamaniana'
    ],
    '🇵🇪': [
        'Bandeira do Peru',
        ':pe:',
        'Bandeira peruana'
    ],
    '🇵🇫': [
        'Bandeira da Polinésia Francesa',
        ':pf:',
        'Bandeira Polynesiana Francesa'
    ],
    '🇵🇬': [
        'Bandeira da Papuásia-Nova Guiné',
        ':pg:',
        'Bandeira PNG',
        'Papua New Guinean Flag'
    ],
    '🇵🇭': [
        'Bandeira das Filipinas',
        ':ph:'
    ],
    '🇵🇰': [
        'Bandeira do Paquistão',
        ':pk:',
        'Bandeira paquistanesa'
    ],
    '🇵🇱': [
        'Bandeira da Polônia',
        ':pl:',
        'Bandeira Polonesa'
    ],
    '🇵🇲': [
        'Bandeira de Saint Pierre e Miquelon',
        ':pm:'
    ],
    '🇵🇳': [
        'Bandeira do Pitcairn',
        ':pn:'
    ],
    '🇵🇷': [
        'Bandeira do Porto Rico',
        ':pr:',
        'Bandeira de Porto Ricano'
    ],
    '🇵🇸': [
        'Bandeira dos Territórios Palestinianos',
        ':ps:',
        'Palestine'
    ],
    '🇵🇹': [
        'Bandeira de Portugal',
        ':pt:',
        'Bandeira de Portugal'
    ],
    '🇵🇼': [
        'Bandeira de Palau',
        ':pw:',
        'Bandeira de Palauan'
    ],
    '🇵🇾': [
        'Bandeira do Paraguai',
        ':py:',
        'Paraguayan Flag'
    ],
    '🇶🇦': [
        'Bandeira do Catar',
        ':qa:',
        'Bandeira do Qatari'
    ],
    '🇷🇪': [
        'Bandeira da união de saneamento',
        ':re:',
        'Bandeira de unionnais'
    ],
    '🇷🇴': [
        'Bandeira da Romênia',
        ':ro:',
        'Bandeira Romena'
    ],
    '🇷🇸': [
        'Bandeira da Sérvia',
        ':rs:',
        'Bandeira Sérvia'
    ],
    '🇷🇺': [
        'Bandeira da Rússia',
        ':ru:',
        'Bandeira Russa'
    ],
    '🇷🇼': [
        'Flag of Rwanda',
        ':rw:',
        'Rwandan Flag'
    ],
    '🇸🇦': [
        'Bandeira da Arábia Saudita',
        ':sa:',
        'Bandeira da Arábia Saudita'
    ],
    '🇸🇧': [
        'Bandeira das Ilhas Salomão',
        ':sb:',
        'Bandeira da Ilha Salomão'
    ],
    '🇸🇨': [
        'Bandeira das Seychelles',
        ':sc:',
        'Seychellois Flag'
    ],
    '🇸🇩': [
        'Bandeira do Sudão',
        ':sd:',
        'Sudanese Flag'
    ],
    '🇸🇪': [
        'Bandeira da Suécia',
        ':se:',
        'Bandeira de Sueco'
    ],
    '🇸🇬': [
        'Bandeira de Singapura',
        ':sg:',
        'Bandeira de Singapura'
    ],
    '🇸🇭': [
        'Bandeira de Santa Helena',
        ':sh:'
    ],
    '🇸🇮': [
        'Bandeira da Eslovénia',
        ':si:',
        'Bandeira eslovena'
    ],
    '🇸🇯': [
        'Bandeira de Svalbard e Jan Mayen',
        ':sj:'
    ],
    '🇸🇰': [
        'Bandeira da Eslováquia',
        ':sk:',
        'Bandeira Eslovaca',
        'Slovakian Flag'
    ],
    '🇸🇱': [
        'Bandeira da Serra Leoa',
        ':sl:',
        'Sierra Leonean Flag'
    ],
    '🇸🇲': [
        'Bandeira de San Marino',
        ':sm:',
        'Bandeira Sammarinesa'
    ],
    '🇸🇳': [
        'Bandeira do Senegal',
        ':sn:',
        'Bandeira Sengalesa'
    ],
    '🇸🇴': [
        'Bandeira da Somália',
        ':so:',
        'Somalian Flag'
    ],
    '🇸🇷': [
        'Bandeira do Suriname',
        ':sr:',
        'Bandeira do Surinamer'
    ],
    '🇸🇸': [
        'Bandeira do Sudão do Sul',
        ':ss:',
        'Bandeira do Sul Sudanês'
    ],
    '🇸🇹': [
        'Bandeira de Sa├o Tome├& Primário',
        ':st:'
    ],
    '🇸🇻': [
        'Bandeira de El Salvador',
        ':sv:',
        'Bandeira de El Salvadoran'
    ],
    '🇸🇽': [
        'Bandeira de São Martinho',
        ':sx:'
    ],
    '🇸🇾': [
        'Bandeira da Síria',
        ':sy:',
        'Bandeira da Síria'
    ],
    '🇸🇿': [
        'Bandeira da Suazilândia',
        ':sz:',
        'Bandeira de Eswatini'
    ],
    '🇹🇦': [
        'Flag of Tristan Da Cunha',
        ':ta:'
    ],
    '🇹🇨': [
        'Bandeira das Ilhas Turcas e Caicos',
        ':tc:'
    ],
    '🇹🇩': [
        'Bandeira do Chade',
        ':td:',
        'Bandeira do Chade'
    ],
    '🇹🇫': [
        'Bandeira dos territórios franceses do sul',
        ':tf:',
        'Bandeira Francesa do Sul'
    ],
    '🇹🇬': [
        'Bandeira do Togo',
        ':tg:',
        'Togolese Flag'
    ],
    '🇹🇭': [
        'Bandeira da Tailândia',
        ':th:',
        'Bandeira Tailandesa'
    ],
    '🇹🇯': [
        'Bandeira do Tajiquistão',
        ':tj:',
        'Bandeira Tajique'
    ],
    '🇹🇰': [
        'Bandeira de Tokelau',
        ':tk:',
        'Bandeira do Tokelauan'
    ],
    '🇹🇱': [
        'Bandeira de Timor-Leste',
        ':tl:',
        'Bandeira Timor-Leste',
        'Bandeira de Timor Leste'
    ],
    '🇹🇲': [
        'Sinalizador do Turquemenistão',
        ':tm:',
        'Turkmen Flag'
    ],
    '🇹🇳': [
        'Bandeira da Tunísia',
        ':tn:',
        'Bandeira Tunisina'
    ],
    '🇹🇴': [
        'Bandeira de Tonga',
        ':to:',
        'Tongan Flag'
    ],
    '🇹🇷': [
        'Bandeira da Turquia',
        ':tr:',
        'Bandeira Turca'
    ],
    '🇹🇹': [
        'Bandeira de Trinidad e Tobago',
        ':tt:'
    ],
    '🇹🇻': [
        'Bandeira de Tuvalu',
        ':tv:',
        'Bandeira de Tuvaluan'
    ],
    '🇹🇼': [
        'Bandeira de Taiwan',
        ':tw:',
        'Bandeira de Taiwan'
    ],
    '🇹🇿': [
        'Bandeira da Tanzânia',
        ':tz:',
        'Tanzanian Flag'
    ],
    '🇺🇦': [
        'Bandeira da Ucrânia',
        ':ua:',
        'Bandeira ucraniana'
    ],
    '🇺🇬': [
        'Bandeira do Uganda',
        ':ug:',
        'Bandeira do Uganda'
    ],
    '🇺🇲': [
        'Bandeira: Ilhas Distantes dos EUA',
        ':um:'
    ],
    '🇺🇸': [
        'Bandeira dos Estados Unidos',
        ':us:',
        'Bandeira Americana',
        'Bandeira dos EUA'
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
        'Bandeira da Santa Sé',
        ':va:',
        'Bandeira Vanticana'
    ],
    '🇻🇨': [
        'Bandeira de São Vicente e Granadinas',
        ':vc:'
    ],
    '🇻🇪': [
        'Bandeira da Venezuela',
        ':ve:',
        'Bandeira da Venezuela'
    ],
    '🇻🇬': [
        'Bandeira das Ilhas Virgens Britânicas',
        ':vg:',
        'Bandeira da Virgem britânica'
    ],
    '🇻🇮': [
        'Bandeira das Ilhas Virgens dos EUA',
        ':vi:',
        'Bandeira da Virgem dos EUA'
    ],
    '🇻🇳': [
        'Bandeira do Vietname',
        ':vn:',
        'Bandeira vietnamita'
    ],
    '🇻🇺': [
        'Flag of Vanuatu',
        ':vu:',
        'Ni-Vanuatu Flag'
    ],
    '🇼🇫': [
        'Bandeira de Wallis e Futuna',
        ':wf:'
    ],
    '🇼🇸': [
        'Bandeira de Samoa',
        ':ws:',
        'Samoan Flag'
    ],
    '🇽🇰': [
        'Bandeira do Kosovo',
        ':xk:',
        'Kosovar Flag'
    ],
    '🇾🇪': [
        'Bandeira do Iémen',
        ':ye:',
        'Bandeira do Iémen'
    ],
    '🇾🇹': [
        'Bandeira de Mayotte',
        ':yt:',
        'Bandeira de Mayotte'
    ],
    '🇿🇦': [
        'Bandeira da África do Sul',
        ':za:',
        'Bandeira sul-africana'
    ],
    '🇿🇲': [
        'Bandeira da Zâmbia',
        ':zm:',
        'Zambian Flag'
    ],
    '🇿🇼': [
        'Bandeira do Zimbabué',
        ':zw:',
        'Bandeira do Zimbabwean',
        'Bandeira do Zim'
    ]
};
/*sports*/
emojis_language[lang][8] = {
    '🧗{{skin_tone}}‍♂️': [
        'Escalada de Homem',
        ':man_climbing:',
        ':climbing:',
        'Pedreiro de Rocha Masculino',
        'Escalador de Homem',
        ':man:'
    ],
    '🧗{{skin_tone}}‍♀️': [
        'Escalada feminina',
        ':woman_climbing:',
        ':climbing:',
        'Escalada de Rocha Feminina',
        'Escalada feminina',
        ':woman:'
    ],
    '🧗{{skin_tone}}': [
        'Escalada de pessoa',
        ':person_climbing:',
        ':climbing:',
        'format@@0 Person Rock Climber',
        'Escalador de Pessoas',
        ':person:'
    ],
    '🏇{{skin_tone}}': [
        'Corrida de Cavalos',
        ':horse_racing:',
        'Corrida de Cavalos',
        'Jóquei'
    ],
    '⛷{{skin_tone}}‍️': [
        'Esquiador',
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
        'Golfista Mulher',
        ':woman_golfer:',
        ':golfer:',
        ':woman:'
    ],
    '🏌️{{skin_tone}}': [
        'Golfador de Pessoa',
        ':person_golfer:',
        ':golfer:',
        ':person:'
    ],
    '🏄{{skin_tone}}‍♂️': [
        'Surfista de Homem',
        ':man_surfer:',
        ':surfer:',
        ':man:'
    ],
    '🏄{{skin_tone}}‍♀️': [
        'Surfista da Mulher',
        ':woman_surfer:',
        ':surfer:',
        ':woman:'
    ],
    '🏄{{skin_tone}}': [
        'Surfista de pessoa',
        ':person_surfer:',
        ':surfer:',
        ':person:'
    ],
    '🚣{{skin_tone}}‍♂️': [
        'Barco Rowing de Homem',
        ':man_rowing_boat:',
        ':rowing_boat:',
        ':man:'
    ],
    '🚣{{skin_tone}}‍♀️': [
        'Barco de Rebeldia',
        ':woman_rowing_boat:',
        ':rowing_boat:',
        ':woman:'
    ],
    '🚣{{skin_tone}}': [
        'Barco Rowing pessoal',
        ':person_rowing_boat:',
        ':rowing_boat:',
        ':person:'
    ],
    '🏊{{skin_tone}}‍♂️': [
        'Natação pelo homem',
        ':man_swimming:',
        ':swimming:',
        'Nadador de Homem',
        ':man:'
    ],
    '🏊{{skin_tone}}‍♀️': [
        'Mulher em Natação',
        ':woman_swimming:',
        ':swimming:',
        'Marinheiro feminino',
        ':woman:'
    ],
    '🏊{{skin_tone}}': [
        'Pessoa de Natação',
        ':person_swimming:',
        ':swimming:',
        'Nadador de pessoa',
        ':person:'
    ],
    '⛹{{skin_tone}}‍️‍♂️': [
        'Bola Saltitante de Homem',
        ':man_bouncing_ball:',
        ':bouncing_ball:',
        'Jogador de basquete',
        ':man:'
    ],
    '⛹️{{skin_tone}}‍♀️': [
        'Bola Saltitante das Mulheres',
        ':woman_bouncing_ball:',
        ':boucing_ball:',
        'Jogador de Basquete Mulher',
        ':woman:'
    ],
    '⛹️{{skin_tone}}': [
        'Bola Saltitante',
        ':person_bouncing_ball:',
        ':boucing_ball:',
        'Jogador de Basquete Pessoal',
        ':person:'
    ],
    '🏋️{{skin_tone}}‍♂️': [
        'Man Levantar Pesos',
        ':man_lifting_weights:',
        ':lifting_weights:',
        'Homem Pesador',
        ':man:'
    ],
    '🏋️{{skin_tone}}‍♀️': [
        'Mulher Levantando Pesos',
        ':woman_lifting_weights:',
        ':lifting_weights:',
        'Mulher Pesadelo',
        ':woman:'
    ],
    '🏋️{{skin_tone}}': [
        'Pessoa Levantando Pesos',
        ':person_lifting_weights:',
        ':lifting_weights:',
        'Peso Pessoal',
        ':person:'
    ],
    '🚴{{skin_tone}}‍♂️': [
        'Homem Bicicleta',
        ':man_biking:',
        ':biking:',
        'Ciclista de Homem',
        'Ciclista Masculino',
        ':man:'
    ],
    '🚴{{skin_tone}}‍♀️': [
        'Mulher Bicicleta',
        ':woman_biking:',
        ':biking:',
        'Ciclismo feminino',
        'Ciclismo Feminino',
        ':woman:'
    ],
    '🚴{{skin_tone}}': [
        'Pessoa de Bicicleta',
        ':person_biking:',
        ':biking:',
        'Ciclismo de pessoa',
        'Ciclismo de pessoa',
        ':person:'
    ],
    '🚵{{skin_tone}}‍♂️': [
        'Homem da Montanha Bike',
        ':man_mountain_bike:',
        ':mountain_bike:',
        'Homem montanhoso motociclista',
        ':man:'
    ],
    '🚵{{skin_tone}}‍♀️': [
        'Mulher Bicicleta da Montanha',
        ':woman_mountain_bike:',
        ':mountain_bike:',
        'Mulher motociclista da montanha',
        ':woman:'
    ],
    '🚵{{skin_tone}}': [
        'Pessoa Mountain Biking',
        ':person_mountain_bike:',
        ':mountain_bike:',
        'Pessoa montanha motociclista',
        ':person:'
    ],
    '🤸{{skin_tone}}‍♂️': [
        'Man Cartwheeling',
        ':man_cartwheeling:',
        ':cartwheeling:',
        'Cartucho Fazendo Carneiro',
        ':man:'
    ],
    '🤸{{skin_tone}}‍♀️': [
        'Mulher em Cartwheeling',
        ':woman_cartwheeling:',
        ':cartwheeling:',
        'Feminino Fabricante',
        ':woman:'
    ],
    '🤸{{skin_tone}}': [
        'Pessoa de Brinca',
        ':person_cartwheeling:',
        ':cartwheeling:',
        'Pessoa Fazendo Cartwheel',
        ':person:'
    ],
    '🤼‍♂️': [
        'Luta de Homens',
        ':men_wrestling:',
        ':wrestling:',
        'Lutando',
        'Lutadores',
        ':man:'
    ],
    '🤼‍♀️': [
        'Luta de Mulheres',
        ':women_wrestling:',
        ':wrestling:',
        'Lutando',
        'Lutadores',
        ':woman:'
    ],
    '🤼': [
        'Pessoas Lutando',
        ':people_wrestling:',
        ':wrestling:',
        'Lutando',
        'Lutadores',
        ':person:'
    ],
    '🤽{{skin_tone}}‍♂️': [
        'Polo de Água Jogadora de Homem',
        ':man_playing_water_polo:',
        ':playing_water_polo:',
        ':man:'
    ],
    '🤽{{skin_tone}}‍♀️': [
        'Mulher Jogando Água Polo',
        ':woman_playing_water_polo:',
        ':playing_water_polo:',
        ':woman:'
    ],
    '🤽{{skin_tone}}': [
        'Pessoa jogando água polo',
        ':person_playing_water_polo:',
        ':playing_water_polo:',
        ':person:'
    ],
    '🤾{{skin_tone}}‍♂️': [
        'Handball Jogador de Homem',
        ':man_playing_handball:',
        ':playing_handball:',
        ':man:'
    ],
    '🤾{{skin_tone}}‍♀️': [
        'Mulher Jogando Handball',
        ':woman_playing_handball:',
        ':playing_handball:',
        ':woman:'
    ],
    '🤾{{skin_tone}}': [
        'Handball de Jogador Pessoal',
        ':person_playing_handball:',
        ':playing_handball:',
        ':person:'
    ],
    '🤹{{skin_tone}}‍♂️': [
        'Homem Malvado',
        ':man_juggling:',
        ':juggling:',
        'Malabarista Masculino',
        ':man:'
    ],
    '🤹{{skin_tone}}‍♀️': [
        'Mulher no Juggling',
        ':woman_juggling:',
        ':juggling:',
        'Malabarista Feminino',
        ':woman:'
    ],
    '🤹{{skin_tone}}': [
        'Juggling Pessoal',
        ':person_juggling:',
        ':juggling:',
        'Malabarista Pessoal',
        ':person:'
    ],
    '🧘{{skin_tone}}‍♂️': [
        'Posição do homem no Lotus',
        ':man_lotus_position:',
        ':lotus_position:',
        'Meditação',
        'Zen',
        'Cruzamento legado',
        'ioga',
        ':man:'
    ],
    '🧘{{skin_tone}}‍♀️': [
        'Mulher em posição de lótus',
        ':woman_lotus_position:',
        ':lotus_position:',
        'Meditação',
        'Zen',
        'Cruzamento legado',
        'ioga',
        ':woman:'
    ],
    '🧘{{skin_tone}}': [
        'Pessoa na Posição do Lotus',
        ':person_lotus:_position',
        ':lotus_position:',
        'Meditação',
        'Zen',
        'Cruzamento legado',
        'ioga',
        ':person:'
    ],
    '🏃{{skin_tone}}‍♂️': [
        'Homem correndo',
        ':man_running:',
        ':running:',
        ':man:'
    ],
    '🏃{{skin_tone}}‍♀️': [
        'Mulher Correndo',
        ':woman_running:',
        ':running:',
        ':woman:'
    ],
    '🏃{{skin_tone}}': [
        'Pessoa em execução',
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
        'Dança de Homem',
        ':man_dancing:',
        ':dancing:',
        ':man:'
    ],
    '💃{{skin_tone}}': [
        'Dança da Mulher',
        ':woman_dancing:',
        ':dancing:',
        ':woman:'
    ],
    '🤺': [
        'Cercado Pessoal',
        ':person_fencing:',
        'Sanguinário',
        ':fencing:'
    ],
    '🏆': [
        'Troféu',
        ':trophy:',
        'Campeonato',
        'Vencedor',
        ':gold:',
        ':yellow:'
    ],
    '🏅': [
        'Medalha de Esporte',
        ':sports_medal:',
        ':medal:',
        ':gold:',
        ':yellow:'
    ],
    '🥇': [
        'Medalha do Primeiro Lugar',
        ':first_place_medal:',
        ':gold_medal:',
        'Primeiro colocar a medalha',
        'Medalha de Ouro',
        ':yellow:',
        ':gold:'
    ],
    '🥈': [
        'Segunda Colocação de Medalha',
        ':second_place_medal:',
        ':silver_medal:',
        'Segunda Lugar medalha',
        'Medalha de Prata',
        ':gray:',
        ':grey:',
        ':silver:'
    ],
    '🥉': [
        'Medalha de Terceiro Lugar',
        ':third_place_medal:',
        ':bronze_medal:',
        'Medalha do Terceiro Lugar',
        'Medalha de Bronze',
        ':brown:',
        ':bronze:'
    ],
    '⚽': [
        'Futebol',
        ':football:',
        'Futebol',
        ':white:',
        ':black:'
    ],
    '⚾': [
        'Beisebol',
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
        'Basquete',
        ':basketball:',
        ':orange:',
        'Basquete e Coco'
    ],
    '🏐': [
        'Vôlei',
        ':volleyball:',
        ':white:'
    ],
    '🏈': [
        'Futebol Americano',
        ':american_football:',
        'Futebol',
        'Gridiron',
        'Tigela',
        ':brown:'
    ],
    '🏉': [
        'Futebol de Rubi',
        ':rugby:',
        'Futebol',
        'Competição',
        'Rugby',
        'União'
    ],
    '🎾': [
        'Tênis',
        ':tennis:',
        ':ball:',
        'Bola',
        'Combustível',
        'Arcochete',
        ':yellow:'
    ],
    '🥏': [
        'Disco Voador',
        ':flying_disk:',
        'Frisbee'
    ],
    '🎳': [
        'Boliche',
        ':bowling:',
        'Alfinetes',
        'Skittles',
        'Dez Pino boliche'
    ],
    '🏏': [
        'Críquete',
        ':cricket:',
        'Morcego',
        'Bola'
    ],
    '🏑': [
        'Hóquei no campo',
        ':field_hockey:',
        'Bola',
        'Graveto'
    ],
    '🏒': [
        'Hóquei no Gelo',
        ':ice_hockey:',
        'Bola',
        'Graveto'
    ],
    '🥍': [
        'Lacrosta',
        ':lacrosse:',
        'Bola',
        'Graveto',
        ':red:'
    ],
    '🏓': [
        'Pingue-pongue',
        ':ping_pong:',
        ':table_tennis:',
        'Tênis de mesa',
        'Bola',
        'Paddle'
    ],
    '🏸': [
        'Badminton',
        ':badminton:',
        'Disparo',
        'Arcochete'
    ],
    '🥊': [
        'Luva de Boxing',
        ':boxing_glove:',
        ':red:'
    ],
    '🥋': [
        'Uniforme de Artes Marciais',
        ':martial_arts_uniform:',
        ':judo:',
        ':karate:',
        ':kung_fu:',
        'Judô',
        'Caratê',
        'Trigger fu'
    ],
    '⛳': [
        'Bandeira no Buraco',
        ':flag_in_hole:',
        ':golf_flag:',
        'Bandeira de golfe'
    ],
    '⛸️': [
        'Patinação no Gelo',
        ':ice_skate:',
        'Patinar'
    ],
    '🎣': [
        'Pesca',
        ':fishing:',
        'Campo',
        'Peixe',
        'Vara de pesca'
    ],
    '🎽': [
        'Camisa Correndo',
        ':running_shirt:',
        'Cingapura',
        'Cortar'
    ],
    '🎿': [
        'Esquiva',
        ':skis:',
        'Esquiando',
        'Inicialização'
    ],
    '🛷': [
        'Trenó',
        ':sled:'
    ],
    '🥌': [
        'Pedra com Curadoria',
        ':curling_stone:'
    ],
    '🎯': [
        'Golpe Direto',
        ':direct_hit:',
        'Arquearia',
        'Bullseye',
        'Dardos'
    ],
    '🎱': [
        'Bola de Piscina 8',
        ':pool_8_ball:',
        'Bola de marcação',
        'Novato',
        'Morcegos',
        ':black:'
    ],
    '🎮': [
        'Controle de Vídeo Game',
        ':video_game_controller:',
        ':playstation:',
        ':xbox:',
        'PlayStation',
        'Xbox',
        'Controle',
        'Wii U'
    ],
    '♟️': [
        'Peão de Xadrez Preto',
        ':black_chess_pawn:',
        ':black:'
    ],
    '🏹': [
        'Arco e Flecha',
        ':arch:',
        'Arquitetura'
    ],
    '🥅': [
        'Goal Líquido',
        ':goal_net:'
    ],
    '🀄': [
        'Dragão Vermelho Mahjong',
        ':mahjong:',
        'Mahjong',
        'Mahjong Tile',
        '中',
        'Dragão Vermelho de Telha Mahjong'
    ],
    '🎴': [
        'Cartas de Flor',
        ':flower_playing_cards:',
        'Baralho de Cartões',
        'Hanafuda',
        'Hwatu',
        'Cartas de reprodução'
    ]
};
/*travel and places*/
emojis_language[lang][9] = {
    '🚂': [
        'Locomotiva a vapor',
        ':steam_train:',
        'Trem Vapor',
        'Locomotiva ferroviária'
    ],
    '🚃': [
        'Carro ferroviário',
        ':railway_car:',
        'Trilho',
        'Carro Ferroviário',
        'Carruagem ferroviária',
        'Carroça Ferrovia'
    ],
    '🚄': [
        'Trem de Alta Velocidade',
        ':high_speed_train:'
    ],
    '🚅': [
        'Trem Balas',
        ':bullet_train:',
        'Shinkansen',
        'Trem de Alta Velocidade com Nariz de Balas'
    ],
    '🚆': [
        'Trem',
        ':train:'
    ],
    '🚇': [
        'Subterrâneo',
        ':underground:',
        'Tubo',
        'Metrô',
        'Metrô'
    ],
    '🚈': [
        'Trilho de Luz',
        ':light_rail:',
        'Trem'
    ],
    '🚊': [
        'Bonde',
        ':tram:'
    ],
    '🚝': [
        'Monotrilho',
        ':monorail:',
        'Trem'
    ],
    '🚞': [
        'Ferrovia da Montanha',
        ':mountain_railway:',
        'Funicular',
        'Treine e Montanha'
    ],
    '🚋': [
        'Carro de Tram',
        ':tram_car:'
    ],
    '🚌': [
        'Ônibus',
        ':bus:',
        'Professor'
    ],
    '🚍': [
        'Ônibus em andamento',
        ':front_of_bus:',
        'Frente do Ônibus'
    ],
    '🚎': [
        'Trolleybus',
        ':trolleybus:',
        'Ônibus Eleitoral'
    ],
    '🚐': [
        'Minibus',
        ':minibus:',
        'Minivan',
        'Pessoa'
    ],
    '🚑': [
        'Ambulância',
        ':ambulance:'
    ],
    '🚒': [
        'Motor de bombeiros',
        ':fire_engine:',
        'Departamento de incêndio',
        'Caminhão de bombeiros'
    ],
    '🚓': [
        'Carro da polícia',
        ':police_car:',
        'Carro Policial',
        'Lado do carro da polícia'
    ],
    '🚔': [
        'Carro de Polícia',
        ':front_of_police_car:',
        'Frente da Polícia Carro',
        'Carro Policial'
    ],
    '🚕': [
        'Táxi',
        ':taxi:',
        'Táxi de Nova York',
        'Lado de táxi'
    ],
    '🚖': [
        'Táxi',
        ':front_of_taxi:',
        'Táxi em andamento',
        'Frente de Táxi'
    ],
    '🚗': [
        'Automóvel',
        ':car:',
        'Carro Vermelho',
        'Lado do carro',
        'Carro'
    ],
    '🚘': [
        'Automóveis em andamento',
        ':front_of_car:',
        'Carro Vermelho',
        'Frente do carro'
    ],
    '🚚': [
        'Caminhão de entrega',
        ':lorry:',
        'Caminhão'
    ],
    '🚛': [
        'Lorde Articulado',
        ':articulated_lorry:',
        'Caminhão Verde'
    ],
    '🚜': [
        'Trator',
        ':tractor:',
        'Fazenda'
    ],
    '🛻': [
        'Caminhão de Retirada',
        ':pickup_truck:'
    ],
    '🏎️': [
        'Carro de Corrida',
        ':racing_car:',
        'F1',
        'Fórmula 1',
        'Carro de corrida'
    ],
    '🏍️': [
        'Moto',
        ':motorbike:',
        'Motocicleta'
    ],
    '🛵': [
        'Patrulha do Motor',
        ':motor_scooter:',
        'Vespa',
        'Motor Bicicleta',
        'Motor Bicicleta'
    ],
    '🛺': [
        'Auto Rickshaw',
        ':auto_rickshaw:',
        'Tuk Tuk'
    ],
    '🚲': [
        'Bicicleta',
        ':bike:',
        'Bicicleta'
    ],
    '🛴': [
        'Patrulha de Chute',
        ':kick_scooter:'
    ],
    '⛵': [
        'Veleiro',
        ':sailboat:',
        'Bote',
        'Yaques'
    ],
    '🚤': [
        'Barco Veloz',
        ':speedboat:',
        'Barco',
        'Barco'
    ],
    '🛳️': [
        'Navio de passageiros',
        ':passenger_ship:'
    ],
    '⛴️': [
        'Balsa',
        ':ferry:'
    ],
    '🛥️': [
        'Barco a Motor',
        ':motor_boat:'
    ],
    '🚢': [
        'Navio de cruzeiro',
        ':cruise_ship:'
    ],
    '✈️': [
        'Avião',
        ':airplane:',
        'Aeroplane'
    ],
    '🛩️': [
        'Avião Pequeno',
        ':small_airplane:',
        'Avião Pequeno'
    ],
    '🚁': [
        'Helicóptero',
        ':helicopter:'
    ],
    '🚟': [
        'Ferrovia de suspensão',
        ':suspension_railway:'
    ],
    '🚠': [
        'Cabo Montanha',
        ':mountain_cableway:'
    ],
    '🚡': [
        'Vestimenta Aérea',
        ':aerial_tramway:',
        'Carro a Cabo',
        'Gondola',
        'Correr'
    ],
    '🛰️': [
        'Satélite',
        ':satellite:'
    ],
    '🚀': [
        'Foguete',
        ':rocket:',
        'Fechamento Espacial'
    ],
    '🛸': [
        'Disco Voador',
        ':flying_saucer:',
        'OVNI'
    ],
    '🚉': [
        'Estação ferroviária',
        ':train_station:',
        'Plataforma de Treino'
    ],
    '🚏': [
        'Parada de ônibus',
        ':bus_stop:'
    ],
    '🛣️': [
        'Estrada',
        ':motorway:',
        'Estrada',
        'Rodovia',
        'Interestado'
    ],
    '🛤️': [
        'Faixa de Ferrovia',
        ':railway_track:'
    ],
    '🛫': [
        'Partida do avião',
        ':airplane_departure:',
        'Levando Desligamento'
    ],
    '🛬': [
        'Chegada de avião',
        ':airplane_arrival:',
        'Chegada de avião',
        'Pouso'
    ],
    '🗾': [
        'Mapa do Japão',
        ':map_of_japan:'
    ],
    '⛰️': [
        'Montanhas',
        ':mountain:'
    ],
    '🏔️': [
        'Montanha Chocada de Neve',
        ':snow_capped_mountain:'
    ],
    '🌋': [
        'Vulcão',
        ':volcano:'
    ],
    '🗻': [
        'Monte Fuji',
        ':mount_fuji:',
        'Fuji-san'
    ],
    '🏕️': [
        'Acampamento',
        ':camping:',
        'Acampamento'
    ],
    '🏖️': [
        'Praia com Guarda-chuva',
        ':beach_with_umbrella:'
    ],
    '🏜️': [
        'Desert',
        ':desert:'
    ],
    '🏝️': [
        'Ilha deserta',
        ':desert_island:'
    ],
    '🏞️': [
        'Parque Nacional',
        ':national_park:'
    ],
    '🏟️': [
        'Estádio',
        ':stadium:',
        'Avó',
        'Estádio de Esporte'
    ],
    '🏛️': [
        'Edifício Clássico',
        ':classical_building:',
        'Grego',
        'Roma'
    ],
    '🏗️': [
        'Construção construtiva',
        ':building_construction:',
        'Guindaste'
    ],
    '🏘️': [
        'Edifícios residenciais',
        ':houses_building:',
        'Grupo de Casas'
    ],
    '🏚️': [
        'Edifício Derelicado da Casa',
        ':old_house:',
        'Casa Abandonada',
        'Casa Velha',
        'Casa Assombrada'
    ],
    '🏠': [
        'Início',
        ':home:',
        'Edifício da Casa'
    ],
    '🏡': [
        'Jardim da Casa',
        ':house_with_garden:',
        'Casa e Árvore'
    ],
    '🏢': [
        'Edifício de escritório',
        ':office_building:',
        'Construção urbana',
        'Construção Alta'
    ],
    '🏣': [
        'Escritório de Correios Japoneses',
        ':japanese_post_office:',
        'Marca Postal japonesa'
    ],
    '🏤': [
        'Escritório de Correios',
        ':european_post_office:',
        'Escritório dos Correios Europeus'
    ],
    '🏥': [
        'Hospital',
        ':hospital:',
        'RA',
        'A&E',
        'Sala de emergência',
        'Acidente e emergência',
        'Cruz Vermelha',
        'Medicamentos'
    ],
    '🏦': [
        'Banco',
        ':bank:',
        'BK',
        'Bakkureru',
        'Agência Bancária',
        'Bakkureru'
    ],
    '🏨': [
        'Hotel',
        ':hotel:',
        'Acomodação',
        'Edifício H'
    ],
    '🏩': [
        'Hotel Amor',
        ':love_hotel:',
        'Hotel Coração Amado'
    ],
    '🏪': [
        'Loja de conveniência',
        ':convenience_store:',
        'Loja 24 horas',
        '7-Onze',
        'Loja de Canto',
        'Kwik-E-Mart'
    ],
    '🏫': [
        'Instituição',
        ':school:',
        'Torre do relógio',
        'Meio fundamental'
    ],
    '🏬': [
        'Loja de departamentos',
        ':department_store:',
        'Centro de Compras',
        'Comprar'
    ],
    '🏭': [
        'Fábrica',
        ':factory:',
        'Industriais',
        'Indústria',
        'Poluição',
        'Fumaça'
    ],
    '🏯': [
        'Castelo Japonês',
        ':japanese_castle:',
        'Fortaleza'
    ],
    '🏰': [
        'Castelo Europeu',
        ':european_castle:',
        'Turrets'
    ],
    '💒': [
        'Coração de Igreja',
        ':church_heart:',
        'Casamento de Igreja',
        'Casamento'
    ],
    '🗼': [
        'Torre de Tóquio',
        ':tokyo_tower:',
        'Torre Eiffel',
        'Torre Vermelha'
    ],
    '🗽': [
        'Estátua da Liberdade',
        ':statue_of_liberty:',
        'Nova Iorque'
    ],
    '⛪': [
        'Edifício de igreja',
        ':church_building:',
        'Cruzar'
    ],
    '🕌': [
        'Mesquita',
        ':mosque:',
        'Telhado Doméstico',
        'Minaret'
    ],
    '🛕': [
        'Templo hindu',
        ':hindu_temple:'
    ],
    '🕍': [
        'Sinagoga',
        ':synagogue:',
        'Judeus',
        'Synagog',
        'Templo'
    ],
    '⛩️': [
        'Santuário Brilhante',
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
        'Guarda-chuva no solo',
        ':beach_umbrella:',
        'Guarda-chuva de praia'
    ],
    '🌄': [
        'Montanhas do Sol',
        ':sunrise_over_mountains:',
        'Manhã',
        'Amanhecer'
    ],
    '🌅': [
        'Amanhecer',
        ':sunrise:',
        ':sunset:',
        'Ensolarado'
    ],
    '🌆': [
        'Cityscape no Crepúsculo',
        ':cityscape_at_dusk:',
        'Cidade Céu Laranja',
        'Cidade do Crepúsculo'
    ],
    '🌇': [
        'Pôr do sol',
        ':sunset_over_buildings:',
        'Pôr do Sol'
    ],
    '🌃': [
        'Noite com Estrelas',
        ':night_with_stars:',
        'Na noite',
        'Noite Estrelada'
    ],
    '🗿': [
        'Moai',
        ':moai:',
        'Estátua da Ilha de Páscoa',
        'Escultura de Rocha Humana',
        'Estátua de Moyai'
    ],
    '🌠': [
        'Estrela de tiro',
        ':shooting_star:',
        'Quando você deseja uma estrela',
        'Meteoroid'
    ],
    '🌌': [
        'Via Láctea',
        ':milky_way:',
        'Galáxia',
        'Céu Noturno',
        'Sala',
        'Favoritos',
        'Universo'
    ],
    '🎑': [
        'Cerimônia de visualização Lunar',
        ':moon_viewing_ceremony:',
        'Grama, Bolinhos e Lua',
        'Colheita Lunar',
        'Festival de Meio Outono',
        'Tsukimi'
    ],
    '🛖': [
        'Cabana',
        ':hut:'
    ],
    '🎢': [
        'Montanha Russa',
        ':roller_coaster:',
        'Montanha-russa',
        'Parque temático'
    ],
    '🛝': [
        'Deslizar do Playground',
        ':playground_slide:',
        'Bebê',
        'Crianças'
    ]
};
/*technologies (smartphones, laptops, etc.) and office*/
emojis_language[lang][10] = {
    '⌚': [
        'Acompanhar',
        ':watch:',
        'Fuso horário',
        'Relógio de Maçã'
    ],
    '⏰': [
        'Relógio do Alarme',
        ':alarm_clock:'
    ],
    '⏱️': [
        'Cronômetro',
        ':stopwatch:'
    ],
    '⏲️': [
        'Relógio Temporizador',
        ':timer_clock:'
    ],
    '🕰️': [
        'Relógio Mantelpiece',
        ':mantelpiece_clock:'
    ],
    '🧭': [
        'Bússola',
        ':compass:'
    ],
    '🕹️': [
        'Controle',
        ':joystick:'
    ],
    '🎙️': [
        'Microfone de estúdio',
        ':studio_microphone:'
    ],
    '🎚️': [
        'Nível de controle deslizante',
        ':level_slider:'
    ],
    '🎛️': [
        'Knobs de controle',
        ':control_knobs:'
    ],
    '📻': [
        'Rádio',
        ':radio:',
        'Rádio Digital',
        'Sem fio'
    ],
    '📱': [
        'Telefone Celular',
        ':mobile_phone:',
        'Smartphone',
        'iPhone',
        'Telefone Celular',
        'Device'
    ],
    '📲': [
        'Celular móvel com seta para direita à esquerda',
        ':phone_call:',
        'Chamada Telefônica',
        'Mostrando ao Telefone'
    ],
    '☎️': [
        'Telefone Negro',
        ':rotary_phone:',
        'Telefone rotativo',
        ':red:'
    ],
    '📞': [
        'Receptor de Telefone',
        ':phone:',
        'Handset',
        'Smartphone',
        ':black:',
        'Device'
    ],
    '📟': [
        'Paginação',
        ':pager:',
        'Feiticeiro',
        'Esfregão'
    ],
    '📠': [
        'Máquina de Fax',
        ':fax_machine:',
        'Facsimile',
        'Fax'
    ],
    '🔋': [
        'Bateria',
        ':battery:',
        'Bateria AA',
        'Bateria do telefone'
    ],
    '🔌': [
        'Plug Elétrico',
        ':power_cable:',
        'AC Adaptor',
        'Cabo de Energia',
        'Plug de Energia'
    ],
    '💻': [
        'Notebook',
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
        'Computador Computador',
        ':desktop_computer:',
        ':computer:',
        'iMac',
        'PC',
        'Device'
    ],
    '🖨️': [
        'Impressora',
        ':printer:',
        'Device'
    ],
    '⌨️': [
        'Computer Keyboard',
        ':keyboard:',
        ':computer_keyboard:'
    ],
    '🖱️': [
        'Mouse de computador',
        ':computer_mouse:',
        'Botão com três botões'
    ],
    '🖲️': [
        'Rastreador',
        ':trackball:'
    ],
    '💽': [
        'Disco Computador',
        ':blu_ray:',
        'Minidisc',
        'Esfriar',
        'DVD',
        'Blu-ray',
        'BD'
    ],
    '💾': [
        'Disquete de Disquete',
        ':floppy_disk:',
        '3.5➲ Disco',
        'Disco'
    ],
    '💿': [
        'Disco óptico',
        ':cd:',
        'Esfriar',
        'CD-ROM',
        'Disco compacto'
    ],
    '📀': [
        'DVD',
        'DVD-ROM',
        ':dvd:',
        'Vídeo de DVD'
    ],
    '🎥': [
        'Câmera cinematográfica',
        ':movie_camera:',
        'Câmera de Filmes',
        'Hollywood',
        'Filme'
    ],
    '🎞️': [
        'Molduras de Filme',
        ':film_frames:'
    ],
    '📽️': [
        'Projetor de Filmes',
        ':film_projector:'
    ],
    '📺': [
        'Televisão',
        ':tv:',
        'Televisão'
    ],
    '📷': [
        'Câmera Digital',
        ':digital_camera:'
    ],
    '📸': [
        'Câmera com Flash',
        ':camera_flash:'
    ],
    '📹': [
        'Câmera de Vídeo',
        ':video_camera:',
        'Camponês'
    ],
    '📼': [
        'Videocativo',
        ':vhs:',
        'VHS',
        'VCR',
        'Fita de Vídeo',
        'Videocativo'
    ],
    '💳': [
        'Cartão de Crédito',
        ':credit_card:',
        'Cartão de Débito',
        'AMEX',
        'Diners Club',
        'Cartão American Express',
        'Mastercard',
        'Cartão VISA'
    ],
    '📧': [
        'E-mail',
        ':email:',
        'e-mail'
    ],
    '📨': [
        'Envelope de entrada',
        ':incoming_envelope:',
        'Envelope com Linhas',
        'Envelope Rápido'
    ],
    '📩': [
        'Envelope com seta para baixo acima',
        ':insert_in_envelope:',
        'Envelope de seta para baixo',
        'Inserir no Envelope'
    ],
    '📤': [
        'Bandeja de saída',
        ':outbox_tray:'
    ],
    '📥': [
        'Bandeja de Entrada',
        ':inbox_tray:'
    ],
    '📮': [
        'Caixa',
        ':postbox:'
    ],
    '📁': [
        'Pasta de arquivos',
        ':file_folder:',
        'pasta',
        'Diretório',
        'Pasta de arquivo fechado'
    ],
    '📂': [
        'Abrir pasta de arquivos',
        ':open_file_folder:',
        'Diretório'
    ],
    '🗂️': [
        'Divisores de Índice do Cartão',
        ':card_index_dividers:'
    ],
    '📅': [
        'calendário',
        ':calendar:',
        '17 de julho',
        'Dia Mundial de Emoji'
    ],
    '🗓️': [
        'Calendário Espiral',
        ':spiral_calendar_pad:'
    ],
    '📆': [
        'Calendário de descanso',
        ':day_calendar:',
        'Calendário Dia',
        'Calendário de mesa'
    ],
    '📈': [
        'Aumentando o gráfico',
        ':increasing_chart:',
        'Gráfico positivo',
        'Gráfico Subindo Destacado',
        'Gráfico com tendência para cima'
    ],
    '📉': [
        'Redução de Gráfico',
        ':decreasing_chart:',
        'Gráfico Negativo',
        'Gráfico de Perfuração',
        'Gráfico com tendência para baixo'
    ],
    '📊': [
        'Gráfico de barras',
        ':bar_chart:',
        'Gráfico de barra'
    ],
    '📌': [
        'Empurrando',
        ':pushpin:',
        'Thumb Tack',
        ':red:'
    ],
    '📋': [
        'Área',
        ':clipboard:'
    ],
    '📍': [
        'Pushpin redondo',
        ':round_pushpin:',
        'Fixação Dropada',
        'Pin do Mapa',
        'PIN',
        'Fixar Vermelho',
        ':red:'
    ],
    '📎': [
        'Clipe',
        ':paperclip:',
        'Recorte'
    ],
    '📏': [
        'Regra reta',
        ':straight_ruler:'
    ],
    '📐': [
        'Régua Triangular',
        ':triangular_ruler:',
        'Régua Triangular'
    ],
    '✂️': [
        'Tesouras',
        ':scissors:',
        'Cortando'
    ],
    '✏️': [
        'Lápis',
        ':pencil:',
        'Lápis de Chumbo'
    ],
    '✒️': [
        'Nib Preto',
        ':black_nib:',
        'Nib do Pen',
        'Caneta de Fonte'
    ],
    '🖋️': [
        'Caneta de Fonte',
        ':fountain_pen:',
        'Fonte inferior esquerda Pen'
    ],
    '🖊️': [
        'Caneta',
        ':pen:',
        'Pen de ponto de bola esquerdo inferior',
        'Caneta de Bolinho'
    ],
    '🖌️': [
        'Pincel',
        ':paintbrush:',
        'Escova',
        'Diminuir o pincel esquerdo'
    ],
    '🖍️': [
        'Crayon',
        ':crayon:',
        'Inferior Crayon esquerdo'
    ],
    '📝': [
        'Lembrete',
        ':memo:',
        'Memorandum',
        'Observação',
        'Lápis e Papel'
    ],
    '🗑️': [
        'Cesto de lixo',
        ':wastepaper_basket:',
        'Lata de lixo',
        'Lixeira de Lixo',
        'Lata de lixo'
    ],
    '📡': [
        'Antena de Satélite',
        ':satellite_antenna:'
    ],
    '🔭': [
        'Telescópio',
        ':telescope:',
        'Negociação'
    ],
    '🔬': [
        'Microscópio',
        ':microscope:',
        'Magnify',
        'Ciências'
    ],
    '📭': [
        'Abrir caixa de correio com a Bandeira Carregada',
        ':open_mailbox_lowered:'
    ],
    '📬': [
        'Abrir caixa de correio com Bandeira levantada',
        ':open_mailbox_raised:',
        'Abrir caixa postal'
    ],
    '📪': [
        'Caixa Fechada com Bandeira Carregada',
        ':closed_mailbox_lowered:'
    ],
    '📫': [
        'Caixa de correio fechada com bandeira levantada',
        ':closed_mailbox_raised:'
    ],
    '📰': [
        'Newspaper',
        ':newspaper:'
    ],
    '🗞️': [
        'Newspaper Rolled-Up',
        ':rolled_up_newspaper:',
        'Entrega do Boletim'
    ],
    '📄': [
        'Página olhando para cima',
        ':printed_page:',
        'Página impressa'
    ],
    '📜': [
        'Percorrer',
        ':scroll:',
        'Graus',
        'Parchment'
    ],
    '📃': [
        'Página com Curl',
        ':curled_page:',
        'Curled Page',
        'Curly Page'
    ],
    '📓': [
        'Caderno',
        ':notebook:',
        'Livro Branco e Preto'
    ],
    '📔': [
        'Caderno com Capa Decorativa',
        ':notebook_decorative_cover:'
    ],
    '📕': [
        'Livro fechado',
        ':closed_book:',
        'Livro Vermelho',
        'Textbook Vermelho',
        ':red:'
    ],
    '📖': [
        'Livro Aberto',
        ':open_book:',
        'Reservar',
        'Novato'
    ],
    '📗': [
        'Livro Verde',
        ':green_book:',
        'Livro Verde',
        ':green:'
    ],
    '📘': [
        'Livro Azul',
        ':blue_book:',
        'Textbook Azul',
        ':blue:'
    ],
    '📙': [
        'Livro Laranja',
        ':orange_book:',
        'Livro Laranja',
        ':orange:'
    ],
    '📚': [
        'Livros',
        ':books:',
        'Pilha de livros',
        'Pilha de livros'
    ],
    '🗳️': [
        'Caixa de Balões com Ballot',
        ':ballot_box:',
        'Caixa de votação',
        'Votação'
    ],
    '🗄️': [
        'Gabinete de arquivos',
        ':file_cabinet:',
        'Gabinete de arquivo'
    ],
    '🗃️': [
        'Caixa de Cartão',
        ':card_file_box:'
    ],
    '🖇️': [
        'Paperclips vinculados',
        ':linked_paperclips:',
        ':gray:',
        ':grey:'
    ]
};
/*clothes and accessories*/
emojis_language[lang][11] = {
    '👣': [
        'Pegadas',
        ':footprints:',
        'Pés',
        'passos-pé'
    ],
    '👓': [
        'Óculos',
        ':glasses:',
        'Eveyóculos'
    ],
    '🕶️': [
        'Óculos de Sol',
        ':sunglasses:'
    ],
    '🥽': [
        'Óculos',
        ':goggles:'
    ],
    '🥼': [
        'Casaco de Laboratório',
        ':lab_coat:'
    ],
    '👔': [
        'Necktie',
        ':necktie:',
        'Camisa de Negócios',
        'Camisa e Empate'
    ],
    '👕': [
        'Camiseta',
        ':t_shirt:',
        ':t-shirt:',
        'Camisa Tee',
        'Camisa polo'
    ],
    '👖': [
        'Judeus',
        ':jeans:',
        'Jeans',
        'Calças',
        'Calça'
    ],
    '🧣': [
        'Scarf',
        ':scarf:'
    ],
    '🧤': [
        'Luvas',
        ':gloves:'
    ],
    '🧥': [
        'Casaco',
        ':coat:'
    ],
    '🧦': [
        'Socks',
        ':socks:'
    ],
    '👗': [
        'Vestido',
        ':dress:',
        'Saia',
        'Garra'
    ],
    '👘': [
        'Kimono',
        ':kimono:',
        'Roupa de Vestimento',
        'Vestido Japonês'
    ],
    '👙': [
        'Biquíni',
        ':bikini:',
        'Banheiros',
        'Roupa Natal'
    ],
    '🩱': [
        'Um-Galho de Peças',
        'uma_peça_roupa',
        'uma peça_roupa'
    ],
    '👚': [
        'Roupa de Mulheres',
        ':womans_clothes:',
        'Roupa de Mulheres',
        'Blouse',
        'Camisa Rosa',
        'Blouse'
    ],
    '👛': [
        'Carteira',
        ':purse:',
        'Carteira'
    ],
    '👜': [
        'Bolsa de mão',
        ':handbag:'
    ],
    '👝': [
        'Bolsa de Flauta',
        ':clutch_bag:',
        'Flauta',
        'Bolsa Pequena',
        'Pouch'
    ],
    '🎒': [
        'Mochila',
        ':backpack:',
        'Saco',
        'Bolsa de Escola',
        'Satchel da Escola',
        'Rucksack'
    ],
    '👞': [
        'Mans Shoe',
        ':mans_shoe:',
        'Mans Shoe',
        'Sapato',
        'Apresentação de Marrom',
        'Feira de Vestidos'
    ],
    '👟': [
        'Sapato Atlético',
        ':athletic_shoe:',
        'Sapato de Correndo',
        'Sneaker',
        'Corredor',
        'Treinador',
        'Sapato de tênis'
    ],
    '🥾': [
        'Bota de caminhadas',
        ':hiking_boot:'
    ],
    '🥿': [
        'Sapato Plano',
        ':flat_shoe:'
    ],
    '👠': [
        'Sapato de alta intensidade',
        ':high_heeled_shoe:',
        ':high_heel:',
        'Esttiletto',
        'Calcanhar Alto'
    ],
    '👡': [
        'Sangue das Mulheres',
        ':womans_sandal:',
        'Sangue das Mulheres',
        'Sandal Heeled',
        'Sandálias',
        'Sandal'
    ],
    '👢': [
        'Botas das Mulheres',
        ':womans_boots_',
        'Botas das Mulheres',
        'Botas de Vaqueira',
        'Botas Altas do Joelho',
        'Botas Talhadas'
    ],
    '👑': [
        'Coroa',
        ':crown:',
        'Rei',
        'Rainha',
        'Príncipe',
        'Real',
        'Princesa',
        ':gold:',
        ':yellow:'
    ],
    '👒': [
        'Chapéu',
        ':hat:',
        'Chapéu de Mulher',
        'Chapéu com Arco',
        'Chapéu das senhoras'
    ],
    '🎩': [
        'Chapéu do topo',
        ':top_hat:',
        'Wear formal',
        'Groom',
        ':black:'
    ],
    '🎓': [
        'Limite de Formatura',
        ':graduation_cap:',
        'Faculdade',
        'Graduar',
        'Placa de morteiro',
        'Universidade',
        'Boné acadêmico quadrado',
        ':black:'
    ],
    '🧢': [
        'Limite Faturado',
        ':billed_cap:',
        'Boné de beisebol'
    ],
    '⛑️': [
        'Capacete com Cruz Branca',
        ':helmet_with_white_cross:',
        ':helmet_with_cross:',
        ':rescue_worker_helmet:',
        ':rescue_workers_helmet:',
        'Capacete de Salvamento dos Trabalhadores',
        ':red:',
        ':white:'
    ],
    '💼': [
        'Maleta',
        ':briefcase:',
        'Mala'
    ],
    '🎖️': [
        'Medalha Militar',
        ':military_medal:',
        ':medal:',
        'Medalha',
        'Medalhão',
        'Decoração Militar'
    ],
    '📿': [
        'Oração de péssima',
        ':prayer_beads:',
        'Feixes de Dhikr',
        'Miçangas de Rosário'
    ],
    '🎗️': [
        'Lembrete Ribbo',
        ':reminder_ribbo:'
    ],
    '🤿': [
        'Máscara de Mergulho',
        ':diving_mask:'
    ],
    '🦺': [
        'Colete de Segurança',
        ':safety_vest:'
    ],
    '🥻': [
        'Sari',
        ':sari:',
        'Saree',
        'Shari'
    ],
    '🩲': [
        'Resumos',
        ':briefs:',
        'Undies',
        'Underwear',
        'Underpants',
        'Jocks',
        'Panties'
    ],
    '🩳': [
        'Bermuda',
        ':shorts:'
    ],
    '🛼': [
        'Patinagem de rolagem',
        ':roller_skate:',
        'Skate Embutido',
        'Rolagem Derby'
    ],
    '🩴': [
        'Inverter Flop',
        ':flip_flop:',
        'Sandália Thong'
    ],
    '🪖': [
        'Capacete Militar',
        ':military_helmet:'
    ],
    '🩰': [
        'Calçados de Ballet',
        ':ballet_shoes:',
        'Sapato de Pointe'
    ],
    '🩼': [
        'Crutch',
        ':crutch:'
    ]
};
/*hands and parts of body*/
emojis_language[lang][12] = {
    '👋{{skin_tone}}': [
        'Deixando a Mão Sinal',
        ':wave:',
        ':waving_hand:',
        'Tchau',
        'Onda de mão',
        'Olá!',
        'Hi'
    ],
    '🖐️{{skin_tone}}': [
        'Entregue com Dedos tocados',
        ':hand_splayed:',
        ':raised_hand_with_fingers_splayed:',
        ':hand_with_fingers_splayed:',
        'Cinco Mãos',
        'Mão Trançada',
        'Mão levantada com Dedos tocados'
    ],
    '🤚{{skin_tone}}': [
        'Traseiro levantado da Mão',
        ':raised_back_of_hand:',
        ':back_of_hand:',
        'Retroceder'
    ],
    '✋{{skin_tone}}': [
        'Mão levantada',
        ':raised_hand:',
        ':hand:',
        'Toca Aqui',
        'Interromper'
    ],
    '🖖{{skin_tone}}': [
        'Vulcan Salute',
        ':vulcan_salute:',
        'Spock',
        'Viagem Estrelada',
        'Mão levantada com Parte entre os Dedos do Meio e Anel'
    ],
    '👌{{skin_tone}}': [
        'Placa de Mão OK',
        ':ok_hand:',
        'OK',
        'Perfeito',
        'sim'
    ],
    '✌️{{skin_tone}}': [
        'Mão da Vitória',
        ':victory_hand:',
        'Cotações Aéreas',
        'Placa de Paz',
        'Placa V'
    ],
    '🤞{{skin_tone}}': [
        'Dedos Cruzados',
        ':crossed_fingers:',
        'Dedos Cruzados',
        'Boa Sorte',
        'Mão com Índice e Dedos do Meio Cruzados'
    ],
    '🤟{{skin_tone}}': [
        'Gesto do Amor',
        ':love_you_gesture:',
        ':i_love_you_hand_sign:',
        'Te amo Sinal de Mão'
    ],
    '🤘{{skin_tone}}': [
        'Sinal dos chifres',
        ':the_horns:',
        ':sign_of_the_horns:',
        ':metal:',
        'Dedos do Demônio',
        'Metal pesado',
        'Rock On'
    ],
    '🤙{{skin_tone}}': [
        'Me chame de Sinal',
        ':call_me_hand:',
        ':call_me:',
        'Mão do Telefone',
        'Shaka'
    ],
    '🤏{{skin_tone}}': [
        'Mão de pintura',
        ':pinching_hand:'
    ],
    '👈{{skin_tone}}': [
        'Pontaria do Índice de Backhand Esquerda',
        ':backhand_index_pointing_left:',
        ':point_left:',
        'Índice de fundo esquerdo esquerdo'
    ],
    '👉{{skin_tone}}': [
        'Pontaria do Índice de Backhand Direita',
        ':backhand_index_pointing_right:',
        ':point_right:',
        'Índice de fundo direito pontilhando fundo'
    ],
    '👆{{skin_tone}}': [
        'Subindo Índice de Backhand',
        ':point_up_2:',
        ':backhand_index_pointing_up:',
        'White Up Índice de Backhand',
        'Dedo Médio'
    ],
    '👇{{skin_tone}}': [
        'Índice de fundo apontando para baixo',
        ':point_down:',
        ':backhand_index_pointing_down:',
        'Índice de Backhand Pointing White Down',
        'Apontando para baixo'
    ],
    '☝{{skin_tone}}': [
        'Pontaria de dedo de índice',
        ':point_up:',
        ':index_pointing_up:',
        'Índice de Pontos Branco',
        'Segredo'
    ],
    '🖕{{skin_tone}}': [
        'Dedo Médio',
        ':middle_finger:',
        'Virar o Pássaro',
        'Dedo Maldito',
        'Mão Invertida com Dedo Médio Estendida'
    ],
    '👍{{skin_tone}}': [
        'Inscrição de miniaturas',
        ':thumbs_up_sign:',
        'Gostei',
        'sim'
    ],
    '👎{{skin_tone}}': [
        'Placa de miniaturas para baixo',
        ':thumbs_down_sign:',
        'Ruim',
        'Dislike',
        'Não'
    ],
    '✊{{skin_tone}}': [
        'Punho Levantado',
        ':raised_fist:',
        'Bomba do Punho'
    ],
    '👊{{skin_tone}}': [
        'Punho em andamento',
        ':oncoming_fist:',
        'Bro Fist',
        'Brofist',
        'Toco de Punho',
        'Soco',
        'Punho Fechado',
        'Sinal da Mão Fiscado'
    ],
    '🤛{{skin_tone}}': [
        'Toco de Punho Esquerdo',
        ':left_fist_bump:'
    ],
    '🤜{{skin_tone}}': [
        'Toco de Punho Direito',
        ':right_fist:bump:'
    ],
    '🤌{{skin_tone}}': [
        'Dedos Fixos',
        ':pinched_fingers:',
        'Ma Che Vuoi',
        'Carteira de dedos'
    ],
    '👏{{skin_tone}}': [
        'Sinal de Aplausos',
        ':cap:',
        ':clapping_hands:',
        'Aplausos',
        'Clap',
        'Aplaudir',
        'Aplauso de golfe',
        'Rodada de Aplausos'
    ],
    '🙌{{skin_tone}}': [
        'Pessoa Levantando as duas Mãos em Celebração',
        ':raised_hands:',
        ':raising_hands:',
        'Levantando as Mãos',
        'Armas no ar',
        'Banzai',
        'Milagre Festival',
        'Hallelujah',
        'Mãos dos Louvados',
        'Duas Mãos'
    ],
    '👐{{skin_tone}}': [
        'Placa de Mãos Abertas',
        ':open_hands_sign:',
        'Abraço',
        'Mãos de jazz'
    ],
    '🤲{{skin_tone}}': [
        'Palmas junto junto',
        ':palms_up_together:',
        'Dua'
    ],
    '🤝{{skin_tone}}': [
        'Handshake',
        ':handshake:',
        'Mãos agitadas'
    ],
    '🙏{{skin_tone}}': [
        'Mãos Dobradas',
        ':folded_hands:',
        'Namaste',
        'Por favor',
        'Oração',
        'Obrigado',
        'Pessoa com Mãos Dobradas'
    ],
    '✍{{skin_tone}}': [
        'Mão de escrita',
        ':writing_hand:'
    ],
    '🫱{{skin_tone}}': [
        'Mão da Esquerda',
        ':rightwards_hand:'
    ],
    '🫲{{skin_tone}}': [
        'Mão da Esquerda',
        ':leftwards_hand:'
    ],
    '🫳{{skin_tone}}': [
        'Mão da Palma Baixa',
        ':palm_down_hand:'
    ],
    '🫴{{skin_tone}}': [
        'Mão da Palma Cima',
        ':palm_up_hand:'
    ],
    '🫰{{skin_tone}}': [
        'Mão com dedo indicador e polegar cruzado',
        ':hand_with_index_finger_and_thumb_crossed:'
    ],
    '🫵{{skin_tone}}': [
        'Pontaria de índice no visualizador',
        ':index_pointing_at_the_viewer:'
    ],
    '🫶{{skin_tone}}': [
        'Mãos de Coração',
        ':heart_hands:',
        'Amar'
    ],
    '💪{{skin_tone}}': [
        'Chicotes Flexíveis',
        ':flexed_biceps:',
        'Músculos do Braço Flexível',
        'Musle',
        'Forte'
    ],
    '🦵{{skin_tone}}': [
        'Perna',
        ':leg:'
    ],
    '🦶{{skin_tone}}': [
        'Pé',
        ':foot:'
    ],
    '👂{{skin_tone}}': [
        'Ouvido',
        ':ear:',
        'Orelhas',
        'Aparelho',
        'Escutando'
    ],
    '👃{{skin_tone}}': [
        'Nariz',
        ':nose:',
        'Comcheiro',
        'Sniffing',
        'Stinky'
    ],
    '🦻{{skin_tone}}': [
        'Orelha com aparelho auditivo',
        ':ear_with_hearing_aid:'
    ],
    '🧠': [
        'Intelectual',
        ':brain:',
        ':pink:'
    ],
    '🦷': [
        'Dente',
        ':tooth:',
        ':white:'
    ],
    '👀': [
        'Olhos',
        ':eyes:',
        'Olhos',
        'Olhos Shifty',
        'Olhos Sábios'
    ],
    '👁️': [
        'Olho',
        ':eye:',
        'Olho Único'
    ],
    '👅': [
        'Língua Fora',
        ':tongue_out:',
        ':red:'
    ],
    '👄': [
        'Boca',
        ':mouth:',
        'Beijos Lábios',
        'Lábios',
        ':red:'
    ],
    '🫦': [
        'Pedaço de Lábio',
        ':biting_lip:',
        'Lábios',
        ':red:'
    ],
    '🫀': [
        'Coração Anatômico',
        ':anatomical_heart:',
        ':red:'
    ],
    '🫁': [
        'Pulmões',
        ':lungs:',
        ':red:'
    ],
    '🦾': [
        'Braço Mecânico',
        ':mechanical_arm:',
        'Forte',
        ':gray:',
        ':grey:'
    ],
    '🦿': [
        'Perna Mecânica',
        ':mechanical_leg:',
        ':gray:',
        ':grey:'
    ],
    '💅{{skin_tone}}': [
        'Prego polonês',
        ':nail_polish:',
        'Dedos',
        'Manicure',
        'Nonchalant'
    ],
    '🤳{{skin_tone}}': [
        'Selfie',
        ':selfie:',
        'Câmera do telefone',
        'Mão Selfie'
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
        'Pilha de Poo',
        ':pile_of_poo:',
        'Terra do Cachorro',
        'Cocô Sorridente',
        ':brown:'
    ],
    '💋': [
        'Marca de Beijo',
        ':kiss_mark:',
        'Beijos Lábios',
        ':red:'
    ],
    '🦴': [
        'Osso',
        ':bone:'
    ],
    '🧳': [
        'Bagagem',
        ':luggage:',
        'Mala'
    ],
    '🌂': [
        'Guarda-chuva Fechada',
        ':closed_umbrella:',
        'Guarda-chuva colapsada',
        'Guarda-chuva rosa',
        ':pink:',
        ':purple:'
    ],
    '☂️': [
        'Sombrinha',
        ':umbrella:',
        ':purple:'
    ],
    '☔': [
        'Guarda-chuva com Gotas de Chuva',
        ':umbrella_with_rain_drops:',
        ':umbrella:',
        'Chovendo',
        'Rainy'
    ],
    '🧵': [
        'Spool of Thread',
        ':spool_of_thread:'
    ],
    '🧶': [
        'Bola do Yarn',
        ':ball_of_yarn:'
    ],
    '💄': [
        'Lipstick',
        ':lipstick:',
        'Brilho dos lábios',
        'Maquiagem',
        ':red:'
    ],
    '💍': [
        'Campainha',
        ':ring:',
        'Anel de Diamante',
        'Anel de Compromisso'
    ],
    '💎': [
        'Pedra Preciosa',
        ':gem_stone:',
        'Diamante',
        'Gema',
        'Pedras preciosas',
        'Joia',
        ':blue:'
    ],
    '💥': [
        'Símbolo de Colisão',
        ':collision_symbol:',
        'Golpear',
        'Explodir',
        'Impacto',
        'Faísca Vermelha',
        'Explosão'
    ],
    '💫': [
        'Símbolo Tonto',
        ':dizzy_symbol:',
        'Círculo e Estrela',
        ':yellow:'
    ],
    '💦': [
        'Arremessando Símbolo Suor',
        'suor_drops',
        'suor_droplets',
        'Plewds',
        'Água Arremessável',
        'Gotas de Água',
        ':blue:'
    ],
    '💨': [
        'Ausente Veloz',
        ':dashing_away:',
        'Rápido',
        'Vapor',
        'Vapitador',
        'Vento',
        'Símbolo Dash',
        'Busto do Vento'
    ],
    '🌬️': [
        'Rosto do vento',
        ':wind_face:',
        'Vento soprado',
        'Mãe Natureza',
        'Rosto de vento',
        ':white:'
    ],
    '🐾': [
        'Impressões de Pata',
        ':paw_prints:',
        'Impressões de Pata de Gato',
        'Impressões de Pata para Cachorro',
        'Impressões da Pata de Gatinho',
        'Pinças de Filhote'
    ],
    '🕸️': [
        'Teia de Aranha',
        ':spider_web:',
        'Teia',
        'Web',
        'Aranha'
    ],
    '🦠': [
        'Microfone',
        ':microbe:',
        'Celular',
        'Coronavírus',
        'COVID-19',
        'Germão',
        'Microorganismo',
        'Vírus',
        ':green:'
    ],
    '💐': [
        'Buquê de Flores',
        ':bouquet_of_flowers:'
    ],
    '🌍': [
        'Globo exibindo Europa-África',
        ':globe_showing_europe_africa:',
        ':earth_africa:',
        'Terra',
        'Globo',
        'Planeta',
        'Mundo',
        'Globo mostrando Europa e África',
        ':blue:'
    ],
    '🌎': [
        'Globbe mostrando Américas',
        ':globe_showing_americas:',
        ':earth_americas:',
        'Terra',
        'Globo',
        'Planeta',
        'Mundo',
        ':blue:'
    ],
    '🌏': [
        'Globo exibindo Ásia-Austrália',
        ':globe_showing_asia_australia:',
        ':earth_asia:',
        'Terra',
        'Globo',
        'Planeta',
        'Mundo',
        'Globo exibindo a Ásia e a Austrália',
        ':blue:'
    ],
    '🌐': [
        'Globo com Meridianos',
        ':globe_with_meridians:',
        'Internet',
        'Web de Mundo Largo',
        'BAIXO'
    ],
    '🌑': [
        'Símbolo da Lua Nova',
        ':new_moon:',
        'Lua Negra',
        'Lua das Sombras',
        'Eclipse solar',
        ':black:'
    ],
    '🌒': [
        'Símbolo Lunar quebrado e crescente',
        ':waxing_crescent_moon:',
        ':yellow:',
        ':black:'
    ],
    '🌓': [
        'Símbolo do Primeiro trimestre Lunar',
        ':first_quarter_moon:',
        ':yellow:',
        ':black:'
    ],
    '🌔': [
        'Símbolo da Lua Waxing Gibbous',
        ':moon:',
        ':waxing_gibbous_moon:',
        ':yellow:',
        ':black:'
    ],
    '🌕': [
        'Símbolo Completo da Lua',
        ':full_moon:',
        ':yellow:'
    ],
    '🌖': [
        'Símbolo da Lua Mágica',
        ':waning_gibbous_moon:',
        ':yellow:',
        ':black:'
    ],
    '🌗': [
        'Símbolo da Lua do Último trimestre',
        ':last_quarter_moon:',
        ':yellow:',
        ':black:'
    ],
    '🌘': [
        'Símbolo Lunar Waning Crescent',
        ':waning_crescent_moon:',
        ':yellow:',
        ':black:'
    ],
    '🌙': [
        'Lua Crescente',
        ':crescent_moon:',
        ':yellow:'
    ],
    '🌚': [
        'Lua nova com rosto',
        ':new_moon_with_face:',
        'Lua Assustadora',
        'Rosto da Lua Negra',
        'Lua Flamejante',
        ':black:',
        ':gray:',
        ':grey:'
    ],
    '🌝': [
        'Lua cheia com rosto',
        ':full_moon_with_face:',
        'Moonface',
        'Sorridente Lunar',
        'Sorrir Lua',
        ':yellow:'
    ],
    '🌛': [
        'Primeiro trimestre da lua com rosto',
        ':first_quarter_moon_with_face:',
        ':first_quarter_moon_face:',
        ':yellow:'
    ],
    '🌜': [
        'Lua do último trimestre com rosto',
        ':last_quarter_moon_with_face:',
        ':last_quarter_moon_face:',
        ':yellow:'
    ],
    '🌞': [
        'Sol com Face',
        ':sun_with_face:',
        'Sol Sorridente',
        'Sunface',
        'Sol Sorridente',
        ':yellow:'
    ],
    '☀️': [
        'dom',
        ':sun:',
        'Luz Solar',
        ':yellow:'
    ],
    '⭐': [
        'Estrela',
        ':star:',
        'Estrela média branca',
        ':yellow:'
    ],
    '🌟': [
        'Estrela Brilhante',
        ':glowing_star:',
        'Estrela Brilhante',
        ':yellow:'
    ],
    '☁️': [
        'Nuvem',
        ':cloud:',
        'Nublado',
        'Nebuloso',
        ':white:'
    ],
    '⛅': [
        'Bastidores do Sol Cloud',
        ':thunder_cloud_and_rain:',
        ':thunder_cloud_rain:',
        ':cloud_with_lightning_and_rain:',
        ':white:'
    ],
    '⛈️': [
        'Nuvem com Raio e Chuva',
        ':thunder_cloud_and_rain:',
        ':thunder_cloud_rain:',
        ':cloud_with_lightning_and_rain:',
        'Trovão de Nuvem e Chuva',
        ':white:'
    ],
    '🌤️': [
        'Sol Branco com Pequena Nuvem',
        ':mostly_sunny:',
        ':sun_behind_small_cloud:',
        ':sun_small_cloud:',
        ':white_sun_small_cloud:',
        ':white_sun_with_small_cloud:',
        ':white:'
    ],
    '🌥️': [
        'Atraso do Sol em Nuvem Grande',
        ':sun_behind_large_cloud:',
        'Bastidores do Sol Branco',
        ':white:'
    ],
    '🌦️': [
        'Sol Branco atrás da Nuvem com Chuva',
        ':sun_behind_rain_cloud:',
        ':partly_sunny_rain:',
        ':white_sun_rain_cloud:',
        ':white_sun_behind_cloud_with_rain:',
        ':white:'
    ],
    '🌧️': [
        'Nuvem com Chuva',
        ':cloud_with_rain:',
        ':white:'
    ],
    '🌨️': [
        'Nuvem com Neve',
        ':cloud_with_snow:',
        ':white:'
    ],
    '🌩️': [
        'Nuvem com Lightning',
        ':cloud_with_lightning:',
        ':white:'
    ],
    '🌪️': [
        'Tornado',
        ':tornado:',
        'Nuvem com Tornado'
    ],
    '🌫️': [
        'Fog',
        ':fag:',
        ':white:',
        ':gray:',
        ':grey:'
    ],
    '🌈': [
        'Arco-íris',
        ':rainbow:',
        'Orgulho Gay',
        'Arco-Íris Primário',
        'LGBTQIA+',
        'LGBT+'
    ],
    '❄️': [
        'Floco de Neve',
        ':snowflake:',
        'Neve',
        'Nevando',
        ':white:'
    ],
    '🌀': [
        'Ciclone',
        ':cyclone:',
        'Furacão',
        'Espiral',
        'Redemoinho',
        'Tornado'
    ],
    '⚡': [
        'Sinal de Alta Tensão',
        ':high_voltage_sign:',
        'Raio Relâmpago',
        'Trovoada',
        'Alta tensão'
    ],
    '☃️': [
        'Boneco de neve',
        ':snowman:',
        'Boneco de neve com flocos de neve',
        ':white:'
    ],
    '⛄': [
        'Boneco de neve sem neve',
        'neve_sem_neve',
        ':snowman:',
        'O Boneco de Neve Gélido',
        'Olaf',
        'Boneco de neve',
        ':white:'
    ],
    '☄️': [
        'Cometa',
        ':comet:'
    ],
    '🔥': [
        'Disparar',
        ':fire:',
        'Chama',
        'Quente',
        'Lit',
        'Acompanhamento',
        ':red:'
    ],
    '💧': [
        'Droplet',
        ':droplet:',
        'Água',
        'Drop de Água',
        ':blue:'
    ],
    '✨': [
        'Brilhantes',
        ':sparkles:',
        'Brilho',
        'Shiny',
        'Novidades'
    ],
    '🌊': [
        'Onda de Água',
        ':water_wave:',
        'Praia',
        'Onda do Oceano',
        'Mar',
        ':blue:'
    ],
    '🎄': [
        'Árvore de Natal',
        'árvore_do-missa',
        'Natal',
        'Árvore de Natal',
        ':green:'
    ],
    '🎃': [
        'Jack-O-Lanterna',
        'bom_o_lanterna',
        'Halloween',
        'Abóbora',
        ':orange:'
    ],
    '🌻': [
        'Girassol',
        ':sunflower:',
        'Flor Amarela',
        ':yellow:'
    ],
    '🌼': [
        'Blossom',
        ':blossom:',
        'Flor florida',
        'Daisy',
        'Flor Amarela',
        ':yellow:'
    ],
    '🌷': [
        'Tulip',
        ':tulip:',
        ':pink:'
    ],
    '🌹': [
        'Flor de Rosa',
        ':rose_flower:',
        'Rosa Vermelha',
        ':red:'
    ],
    '☘️': [
        'Trevo',
        ':shamrock:',
        'Trevo',
        'Trefeil',
        ':green:'
    ],
    '🍀': [
        'Trevo de Quatro Folhas',
        ':four_leaf_clover:',
        'Trevo',
        'Irlanda',
        'Sorte',
        'Fortuna',
        ':green:'
    ],
    '🌸': [
        'Cherry Blossom',
        ':cherry_blossom:',
        'Flor Rosa',
        'Sakura',
        ':pink:'
    ],
    '💮': [
        'Flor branca',
        ':white_flower:',
        'Cherry Blossom',
        'Papel Doily',
        'Condecoração bem Feita',
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
        'Semeamento',
        ':seedling:',
        'Primavera',
        'Sprout',
        'Broto',
        ':green:'
    ],
    '🌲': [
        'Árvore Perene',
        ':evergreen_tree:',
        'Aros da Árvore',
        'Árvore do Pinheiro',
        ':green:'
    ],
    '🌳': [
        'Árvore Decidusta',
        ':deciduous_tree:',
        'Árvore Arredondada',
        ':green:'
    ],
    '🌴': [
        'Palma da Árvore',
        ':palm_tree:',
        'Árvore de Coco',
        ':green:'
    ],
    '🎋': [
        'Árvore de Tanabata',
        ':tanabata_tree:',
        'Tanabata',
        'Árvore de Desejos'
    ],
    '🎍': [
        'Decoração do Pinheiro',
        ':pine_decoration:',
        'Bambu',
        'Kadomatsu',
        'Decoração de Ano Novo'
    ],
    '🌵': [
        'Cactus',
        ':cactus:',
        'Desert',
        ':green:'
    ],
    '🌾': [
        'Folha de arroz',
        ':sheaf_of_rice:',
        'Recortar',
        'Agricultura',
        'Trigo',
        'Orelha de arroz'
    ],
    '🌿': [
        'Erva',
        ':herb:',
        'Recortar',
        'Planta',
        ':green:'
    ],
    '🍁': [
        'Folha de Bordo',
        ':maple_leaf:',
        'Canadá',
        'Canadense',
        'Bordo',
        ':brown:'
    ],
    '🍂': [
        'Folha Caída',
        ':fallen_leaf:',
        'Folha do Outono',
        'Folhas do Outono',
        'Folhas Marrom',
        'Folhas de Outono',
        'Folhas Caídas',
        ':brown:'
    ],
    '🍃': [
        'Folhagem no Vento',
        ':leaf_fluttering_in_wind:',
        ':leaves:',
        'Folhas Verdes',
        'Primavera',
        ':green:'
    ],
    '🪴': [
        'Vaso de Plantas',
        ':potted_plant:',
        ':green:'
    ],
    '🪸': [
        'Coral',
        ':coral:',
        'Alterações climatéricas'
    ],
    '🪷': [
        'Lótus',
        ':lotus:',
        'Pureza',
        'Beleza',
        'Calma',
        'Serenidade'
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
        'Chave',
        ':key:',
        'Chave de Ouro',
        ':gold:',
        ':yellow:'
    ],
    '🗝️': [
        'Chave Antiga',
        ':old_key:',
        ':brown:'
    ],
    '🔨': [
        'Martelo',
        ':hammer:',
        'Martelo da Garra',
        'Handyman',
        'Ferramenta'
    ],
    '⛏️': [
        'Escolher',
        ':pick:',
        'Picareta'
    ],
    '🪓': [
        'Machado',
        ':axe:',
        'bombeiros'
    ],
    '🪚': [
        'Serra de Carpintaria',
        ':carpentry_saw:'
    ],
    '🪛': [
        'Chave de tela',
        ':screwdriver:'
    ],
    '🪝': [
        'Gancho',
        ':hook:'
    ],
    '🪠': [
        'Plunger',
        ':plunger:'
    ],
    '🪣': [
        'Balde',
        ':bucket:'
    ],
    '🔩': [
        'Nut e Dardo',
        ':nut_and_bolt:',
        'Parafuso',
        'Parafuso',
        ':gray:',
        ':grey:'
    ],
    '🗜️': [
        'Grampo',
        ':clamp:',
        'Vício da Mesa',
        'WinZip',
        'Compactação',
        ':gray:',
        ':grey:'
    ],
    '🔒': [
        'Trancado',
        ':locked:',
        'Bloqueio fechado',
        'Padlock'
    ],
    '🔓': [
        'Desbloqueado',
        ':unlocked:',
        'Abrir Padlock',
        'Abrir bloqueio'
    ],
    '🔏': [
        'Travado com Caneta',
        ':locked_with_pen:',
        'Bloquear e Caneta',
        'Bloquear Com a Fonte Pen',
        'Bloquear com a Caneta de Tinta'
    ],
    '🔐': [
        'Travado com a chave',
        ':locked_with_key:',
        'Bloqueio fechado com chave'
    ],
    '🗡️': [
        'Dagger',
        ':dagger:',
        'Arma de Faca',
        ':gray:',
        ':grey:'
    ],
    '⚔️': [
        'Espadas Cruzadas',
        ':crossed_swords:',
        ':gray:',
        ':grey:'
    ],
    '🔫': [
        'Pistol',
        ':pistol:',
        'Arma',
        'Revôver',
        'Arma de Esquadrão',
        'Arma de Água',
        'Pistola d\'água'
    ],
    '🧰': [
        'Ferramentas',
        ':toolbox:',
        ':red:'
    ],
    '🧲': [
        'Ímã',
        ':magnet:',
        ':red:'
    ],
    '💉': [
        'Syringe',
        ':syringe:',
        'Doação de Sangue',
        'Teste de sangue',
        'Agulha',
        'Vacinação',
        'sangue',
        'doente',
        'ill'
    ],
    '🧬': [
        'DNA',
        ':dna:',
        'DNA de Helix Duplo'
    ],
    '🧪': [
        'Tubo de Teste',
        ':test_tube:',
        ':green:'
    ],
    '🛏️': [
        'Cama',
        ':bed:',
        'Quarto'
    ],
    '🛋️': [
        'Sofá e Lâmpada',
        ':couch_and_lamp:',
        'Salão',
        'Definição',
        'Sofá'
    ],
    '🪑': [
        'Cadeira',
        ':chair:'
    ],
    '🚪': [
        'Porta',
        ':door:',
        'Porta',
        'Porta Dianteira'
    ],
    '🪟': [
        'Janela',
        ':window:'
    ],
    '🪜': [
        'Escada',
        ':ladder:'
    ],
    '🪞': [
        'Espelhamento',
        ':mirror:'
    ],
    '🚽': [
        'Banheiro',
        ':toilet:',
        'Banheiro',
        'Loo',
        'Banheiro',
        'Banheiro',
        ':white:'
    ],
    '🚿': [
        'Chuveiro',
        ':shower:',
        'Cabeça de Chuva',
        ':shower:'
    ],
    '🛁': [
        'Banheira',
        ':bathtub:',
        'Banda de Bolha',
        ':shower:'
    ],
    '🧴': [
        'Garrafa de Loção',
        ':location_bottle:'
    ],
    '🧷': [
        'Pin de Segurança',
        ':safety_pin:',
        ':gray:',
        ':grey:'
    ],
    '🧺': [
        'Cesta',
        ':basket:',
        ':brown:'
    ],
    '🧻': [
        'Rolagem de papel',
        ':roll_of_paper:',
        'Papel higiênico',
        ':white:'
    ],
    '🧼': [
        'Barra de Sabonete',
        ':bar_of_soap:',
        'Tidy',
        'Clean',
        'Scrub'
    ],
    '🧽': [
        'Esponja',
        ':sponge:',
        ':yellow:'
    ],
    '🧯': [
        'Extintor de incêndio',
        ':fire_extinguisher:',
        ':red:'
    ],
    '🚬': [
        'Cigarro',
        ':cigarette:',
        'Símbolo de Fumaça'
    ],
    '⚰️': [
        'Caixão',
        ':coffin:',
        'Casket',
        'Funeral',
        ':brown:'
    ],
    '⚱️': [
        'Urna Funeral',
        ':funeral_urn:',
        'Vaso'
    ],
    '🛡️': [
        'Escudos',
        ':shield:'
    ],
    '⚙️': [
        'Engrenagem',
        ':gear:',
        'Confirgurações',
        'Opções',
        ':gray:',
        ':grey:'
    ],
    '⚖️': [
        'Escala do Saldo',
        ':balance_scale:',
        'Escalas da Justiça'
    ],
    '⛓️': [
        'Correntes',
        ':chains:'
    ],
    '🔗': [
        'Vincular',
        ':link:',
        'Corrente',
        'Hiperlink',
        'Corrente Vinculada',
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
        'Crânio',
        ':skull:',
        'Morte',
        'Crânio Cinza',
        'Esqueleto',
        ':white:'
    ],
    '☠️': [
        'Crânio e Balesteiras',
        ':skull_and_crossbones:',
        ':white:'
    ],
    '🎡': [
        'Roda gigante',
        ':ferris_wheel:',
        'Grande Roda',
        'Fairgroundl',
        'Roda de Observação'
    ],
    '⛽': [
        'Bomba de combustível',
        'bom_combustível:',
        'Óleo',
        'Abastecimento',
        'Gás',
        ':red:'
    ],
    '🚨': [
        'Luz Revolving Cars da Polícia',
        ':rotating_light:',
        ':police_police_car:',
        'Luz de emergência',
        'Luz Piscando',
        'Siren',
        ':red:'
    ],
    '🚥': [
        'Luz de tráfego horizontal',
        ':horizontal_traffic_light:',
        ':green:',
        ':red:',
        ':yellow:',
        ':orange:'
    ],
    '🚦': [
        'Luz de tráfego vertical',
        ':vertical_traffic_light:',
        ':green:',
        ':red:',
        ':yellow:',
        ':orange:'
    ],
    '⚓': [
        'Âncora Padrão de Admiração',
        ':anchor:',
        'Pescador'
    ],
    '🚧': [
        'Placa de construção',
        ':construction_sign:',
        'Placa Listrada Preta e Amarela',
        ':yellow:',
        ':black:'
    ],
    '🪂': [
        'Parachute',
        ':parachute:'
    ],
    '💺': [
        'Assento',
        ':seat:',
        'Avião de ônibus trem Aeroplane'
    ],
    '🪐': [
        'Saturno',
        ':saturn:'
    ],
    '🎆': [
        'Fogos',
        ':fireworks:',
        'Explosão'
    ],
    '🎇': [
        'Senko Hanabi',
        ':senko_hanabi:',
        'Fogo de artifício'
    ],
    '💷': [
        'Libra Banknote',
        ':pound:',
        ':pound_banknote:',
        'Nota de £20',
        'Nota de Vinte Quid',
        'Banknote com Sinal de Libra',
        ':purple:'
    ],
    '💶': [
        'Euro Banknote',
        ':euro:',
        ':euro_banknote:',
        'Nota de €100',
        'Banknote com Euro Sign',
        ':blue:'
    ],
    '💵': [
        'Banco em Dólar',
        ':dollar:',
        ':dollar_banknote:',
        '$1 Nota',
        'Banknote com Sinal de Dollar',
        'Bill em Dólar',
        'Dólar Americano',
        ':green:'
    ],
    '💴': [
        'Nota de iene',
        ':yen:',
        ':yen_banknote:',
        '「1000 Nota',
        'Nota de Iene',
        'Banco com sinal de Yen',
        ':yellow:'
    ],
    '⛺': [
        'Tenda de acampamento',
        ':camping_tent:'
    ],
    '⛲': [
        'Fonte',
        ':fountain:',
        'Característica da Água',
        'Fonte de água',
        'Estacionar'
    ],
    '💰': [
        'Bolsa de Dinheiro',
        ':money_bag:',
        'Sacolas',
        'Rico',
        '$'
    ],
    '💸': [
        'Dinheiro com Asas',
        ':money_with_wings:',
        'Dinheiro Voador',
        ' Perdendo Dinheiro'
    ],
    '🏷️': [
        'Etiqueta de Marcador',
        ':label_tag:'
    ],
    '🔖': [
        'Favorito',
        ':bookmark:',
        'Tag de Preço',
        'Etiqueta'
    ],
    '📑': [
        'Guias de favoritos',
        ':bookmark_tabs:',
        ':white:'
    ],
    '📯': [
        'Chifre Postal',
        ':postal_horn:',
        'Bugle',
        'Chifre francês'
    ],
    '🪁': [
        'Pipa',
        ':kite:',
        ':purple:'
    ],
    '🪀': [
        'Eu-Ai',
        ':yo_yo:',
        ':yo-yo:'
    ],
    '🎊': [
        'Confetti Ball',
        ':confetti_ball:',
        'Confetti'
    ],
    '🎉': [
        'Estourador de Festa',
        ':party_popper:',
        'Celebração',
        'Chapéu de Festa'
    ],
    '🎈': [
        'Balão',
        ':balloon:',
        'Festa',
        'Balão Vermelho',
        ':red:'
    ],
    '🌡️': [
        'Termômetro',
        ':thermometer:',
        'Clima Quente',
        'Temperatura',
        ':red:'
    ],
    '🛢️': [
        'Tambor de Óleo',
        ':oil_drum:'
    ],
    '💣': [
        'Bomba',
        ':bomb:',
        'boom'
    ],
    '🔪': [
        'Faca da cozinha',
        ':kitchen_knife:',
        'Faca',
        'Faca de Açougueiro',
        'Hocho'
    ],
    '🏺': [
        'Amphora',
        ':amphora:',
        'Pote',
        'Vaso'
    ],
    '🗺️': [
        'Mapa do Mundo',
        ':world_map:'
    ],
    '🎼': [
        'Pontuação Musical',
        ':musical_score:',
        'Folhas de música',
        'Treble Clef'
    ],
    '🎬': [
        'Quadro de Aplausores',
        ':clapper_board:',
        'Recortar',
        'Acão',
        'Diretor',
        'Ardósia de Filme'
    ],
    '🎻': [
        'Violeta',
        ':violin:',
        'Quarteto de frase',
        'Menor Violin no Mundo'
    ],
    '🎺': [
        'Trompete',
        ':trumpet:',
        'Chifre',
        'jazz'
    ],
    '🎸': [
        'Violão',
        ':guitar:',
        'Guitarra acústica',
        'Guitarra de Grave',
        'Guitarra Elétrica'
    ],
    '🎷': [
        'Saxofone',
        ':saxophone:',
        'jazz',
        'Sex'
    ],
    '🥁': [
        'Tambor',
        ':drum:',
        'Tambor com Drumsticks'
    ],
    '🎹': [
        'Piano',
        ':piano:',
        'Teclado Musical',
        ':white:',
        ':black:'
    ],
    '🪕': [
        'Banjo',
        ':banjo:'
    ],
    '🪗': [
        'Acordeão',
        ':accordion:'
    ],
    '🪘': [
        'Tambor Longo',
        ':long_drum:'
    ],
    '🎨': [
        'Paleta do Artista',
        ':artist_palette:',
        'Arte',
        'Pintura'
    ],
    '🧩': [
        'Pedaço de Quebra-cabeça',
        ':puzzle_piece:',
        'Pedaço de Quebra-cabeça',
        ':green:'
    ],
    '🎲': [
        'Morte de Jogo',
        ':game_die:',
        'Dado',
        ':white:'
    ],
    '🎭': [
        'Artes executantes',
        'artes_executando_',
        'Teatro',
        'Teatro',
        'Máscaras de Drama',
        'Máscaras de Teatro Grego',
        'Máscaras Tragédias e Comédia',
        'Veneza'
    ],
    '🔍': [
        'Ampliando Vidro Mentado à Esquerda',
        ':mag:',
        ':magnifying_glass_tilted_left:',
        'Magnifier',
        'Ícone de Busca',
        'Lupa Esquerda de Lupa',
        'Localizar',
        ':transparent:'
    ],
    '🔎': [
        'Ampliando Vidro Mentado à Direita',
        ':mag_right:',
        ':magnifying_glass_tilted_right:',
        'Magnifier',
        'Ícone de Busca',
        'Vidro Cintilante de Lupa Direita',
        'Localizar',
        ':transparent:'
    ],
    '⌛': [
        'Gema Horária Concluída',
        ':hourglass:',
        ':hourglass_done:',
        'Gema Horária',
        'Time',
        'Egg timer',
        'Empty',
        'Ended',
        'Finished',
        'Sand Clock'
    ],
    '⏳': [
        'O horario não está concluído',
        ':hourglass_flowing_sand:',
        ':hourglass_not_done:',
        'Vidro por hora com Areia Brilhante',
        'Busy',
        'Time',
        'Egg timer',
        'Flowing',
        'Sand Clock'
    ],
    '🕐': [
        'Um OClock',
        ':clock1:',
        ':one_oclock:',
        'Relógio face 1 OClock',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕜': [
        'Relógio Face Um-Trinta',
        ':clock130:',
        ':one_thirty:',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕑': [
        'Dois OClock',
        ':clock2:',
        ':two_oclock:',
        'Relógio face dois OClock',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕝': [
        'Relógio Face dois-Trinta',
        ':clock230:',
        ':two_thirty:',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕒': [
        'Três OClock',
        ':clock3:',
        ':three_oclock:',
        'Relógio face três OClock',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕞': [
        'Relógio Face Trinta',
        ':clock330:',
        ':three_thirty:',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕓': [
        'Quatro OClock',
        ':clock4:',
        ':four_oclock:',
        'Relógio Face Quatro OClock',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕟': [
        'Relógio Face Quatro Trinta',
        ':clock430:',
        ':four_thirty:',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕔': [
        'Cinco OClock',
        ':clock5:',
        ':five_oclock:',
        'Relógio Face 5 OClock',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕠': [
        'Relógio Face cinco-trinta',
        ':clock530:',
        ':five_thirty:',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕕': [
        'Seis OClock',
        ':clock6:',
        ':size_oclock:',
        'Relógio com Seis OClock',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕡': [
        'Relógio Face Seis-Trinta',
        ':clock630:',
        ':six_thirty:',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕖': [
        'Sete OClock',
        ':clock7:',
        ':seven_oclock:',
        'Cadastrado face do relógio',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕢': [
        'Relógio Face Seven-Trinta',
        ':clock730:',
        ':sever_thirty:',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕗': [
        'Oito OClock',
        ':clock8:',
        ':eight_oclock:',
        'Relógio com Oito OClock',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕣': [
        'Relógio Face Oita-Trinta',
        ':clock830:',
        ':eight_thirty:',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕘': [
        'Sete OClock',
        ':clock9:',
        ':nine_clock:',
        'Cinco Cara do Relógio',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕤': [
        'Relógio Face Nova-Trinta',
        ':clock930:',
        ':nine_thirty:',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕙': [
        'Dez OClock',
        ':clock10:',
        ':ten_oclock:',
        'Relógio face 10 OClock',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕥': [
        'Relógio Face Ten-Trinta',
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
        'Relógio Face Onze OClock',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕦': [
        'Relógio Face Onte-Trinta',
        ':clock1130:',
        ':eleven_thirty:',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕛': [
        'Doze OClock',
        ':clock12:',
        ':twelve_oclock:',
        'Relógio com Doze OClock',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕧': [
        'Relógio Face Doco-Trinta',
        ':clock1230:',
        ':twelve_thirty:',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '♨️': [
        'Primaveras Quentes',
        ':hot_springs:',
        'Onsen',
        'Vapor',
        ':red:'
    ],
    '💈': [
        'Polo de barbeiros',
        ':barber_pole:',
        'Loja de Barbeiros',
        'Listras de Barbeiros',
        'Cabeleireiro',
        ':blue:',
        ':red:'
    ],
    '🎪': [
        'Tenda de Circo',
        ':circus_tent:',
        'Topo grande',
        'Circo'
    ],
    '💢': [
        'Símbolo da Raiva',
        ':anger_symbol:',
        'Placa de Raiva',
        'Veia Pop',
        ':red:'
    ],
    '🗯️': [
        'Bolha da Fúria Direita',
        ':right_anger_bubble:',
        ':anger_right:',
        'Zig Zag Bubble',
        'Bolha de fala raivosa',
        ':white:'
    ],
    '🗨️': [
        'Bolha de fala esquerda',
        ':left_speech_bubble:',
        ':speech_left:'
    ],
    '💊': [
        'Pill',
        ':pill:',
        'Cápsula',
        'Tábua',
        'Drogas',
        'Doente',
        'ill',
        ':yellow:',
        ':red:'
    ],
    '🎎': [
        'Bonecas',
        ':dolls:',
        'Hinamatsuri',
        'Bonecas Imperiais',
        'Bonecas japonesas'
    ],
    '🎏': [
        'Transmissão Carp',
        ':carp_streamer:',
        'Bandeira de Peixe',
        'Koinobori',
        'Meias de vento'
    ],
    '🎐': [
        'Gordura de vento',
        ':wind_chime:',
        'Furin',
        'Água-viva',
        'Sino do Vento'
    ],
    '🎀': [
        'Arco da Fita',
        ':ribbon_bow:',
        'Arco Rosa',
        'Arco',
        ':pink:'
    ],
    '🎁': [
        'Presente Embrulhado',
        ':wrapped_gift:',
        'Presente de aniversário',
        'Presente de Natal',
        'Presente',
        'Caixa de Presente',
        'Presente',
        'Presente Envolvido'
    ],
    '🎫': [
        'Chamado',
        ':ticket:',
        'Bilhete de Bilhete',
        'Bilhete do Mundo Tour'
    ],
    '🃏': [
        'Fantasia',
        ':joker:',
        'Cartão do Coringa',
        'Jogando cartão preto do joker'
    ],
    '💡': [
        'Lâmpada clara',
        ':light_bulb:',
        'Ideia',
        'Lâmpada de Luz Elétrica'
    ],
    '🔦': [
        'Lanterna',
        ':flashlight:',
        'Lanterna',
        'Tocha Elétrica'
    ],
    '🏮': [
        'Lanterna de Papel Vermelha',
        ':izakaya_lantern:',
        ':lantern:',
        ':red_paper_lantern:',
        'Lanterna Asiática',
        'Lanterna Japonesa',
        'Lanterna Vermelha',
        'Lanterna do Izakaya',
        ':red:'
    ],
    '📦': [
        'Pacote',
        ':package:',
        'Cx',
        'Transportadora',
        ':brown:'
    ],
    '📇': [
        'Cartão de índice',
        ':card_index:',
        'Rolodex',
        'Cartão do Sistema',
        'Índice do Cartão'
    ],
    '🕳️': [
        'Buraco',
        ':hole:',
        ':black:'
    ],
    '👁️‍🗨️': [
        'Eu sou uma testemunha',
        ':eye_in_speech_bubble:',
        ':eye_speech_bubble:',
        ':eye-in-speech-bubble:',
        'Olho no Balão de Fala'
    ],
    '⚜️': [
        'Fleur-de-lis',
        ':fleur_de_lis:',
        'Espiões',
        'Novos Santo Orleanos'
    ],
    '⚗️': [
        'Alembic',
        ':alembic:'
    ],
    '🕯️': [
        'Vela',
        ':candle:',
        ':white:'
    ],
    '🖼️': [
        'Imagem da moldura',
        ':framed_picture:',
        'Pintura',
        'Moldura de Imagem',
        'Moldura com Imagem'
    ],
    '🛍️': [
        'Sacos de Compras',
        ':shopping_bags:'
    ],
    '🛒': [
        'Carrinho de Compras',
        ':shopping_cart:',
        'Carrinho de compras',
        ':shopping_trolley:',
        ':gray:',
        ':grey:',
        'Market'
    ],
    '🎟️': [
        'Tickets de Admissão',
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
        'Recibo',
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
        'Salão',
        ':broom:',
        'Escova',
        'Varredura',
        ':yellow:',
        'Tidy',
        'Clean'
    ],
    '🎰': [
        'Máquina de Slot',
        ':slot_machine:',
        'Cassino',
        'Máquina de frutas',
        'Jogatina',
        'Máquina do pôquer'
    ],
    '🦽': [
        'Roda manual',
        ':manual_wheelchair:',
        ':wheelchair:',
        'invalid',
        'disability',
        'accessibility',
        'mobility'
    ],
    '🦼': [
        'Cadeira Motorizada',
        ':motorized_wheelchair:',
        ':wheelchair:',
        'invalid',
        'disability',
        'accessibility',
        'mobility'
    ],
    '🪔': [
        'Lâmpada de Diya',
        ':diya_lamp:'
    ],
    '🦯': [
        'White Cane',
        ':whie_cane:'
    ],
    '🩸': [
        'Queda de Sangue',
        ':drop_of_blood:',
        ':red:'
    ],
    '🩹': [
        'Banda Adesiva',
        ':adhesive_bandage:'
    ],
    '🩺': [
        'Estetoscópio',
        ':stethoscope:'
    ],
    '🪶': [
        'Pena',
        ':feather:',
        'Animal'
    ],
    '🪤': [
        'Armadilha do Senhor Rato',
        ':mouse_trap:'
    ],
    '🫖': [
        'Teapot',
        ':teapot:'
    ],
    '🪨': [
        'Pedras',
        ':rock:',
        ':gray:',
        ':grey:'
    ],
    '🪵': [
        'Madeira',
        ':wood:',
        ':brown:'
    ],
    '🪄': [
        'Varinha Mágica',
        ':magin_wand:'
    ],
    '🔮': [
        'Bola de Cristal',
        ':crystal_ball:',
        'Clairvoyant',
        'Telador de Fortuna',
        'Psíquico',
        'Cristal Roxo',
        ':purple:'
    ],
    '🪅': [
        'Pinhata',
        ':pinata:',
        ':piñata:'
    ],
    '🪆': [
        'Aninhando Bonecas',
        ':nesting_dolls:',
        'Matrioshka'
    ],
    '🪡': [
        'Agulha de costura',
        ':swing_needle:'
    ],
    '🪢': [
        'Nó',
        ':knot:',
        ':red:',
        ':blue:'
    ],
    '🪙': [
        'Moeda',
        ':coin:'
    ],
    '🪃': [
        'Boomerang',
        ':boomerang:',
        ':brown:'
    ],
    '🪥': [
        'Entusiasmo',
        ':toothbrush:'
    ],
    '🪦': [
        'Cabeça',
        ':headstone:',
        ':gray:',
        ':grey:'
    ],
    '🪧': [
        'Placard',
        ':placard:'
    ],
    '🪒': [
        'Navalha',
        ':razor:'
    ],
    '🫙': [
        'Pote',
        ':jar:',
        ':transparent:'
    ],
    '🛞': [
        'Roda',
        ':wheel:',
        'Veículos',
        'Veículos',
        ':black:'
    ],
    '🛟': [
        'Boca de Anel',
        ':ring_buoy:',
        'Preservador de Vida',
        'Anel de Vida',
        'Barcos',
        'Segurança',
        'Água',
        'Levantamento',
        ':red:',
        ':white:'
    ],
    '🪬': [
        'Hamsa',
        ':hamsa:',
        'Islam',
        'Judaísmo',
        'Buddhism',
        'Cristianismo',
        'Religiões',
        'Sorte',
        'Proteção',
        'Orientação',
        'Poder Feminino',
        'Fé',
        ':blue:'
    ],
    '🪩': [
        'Bola espelhada',
        ':mirror_ball:',
        'Bola de discoteca'
    ],
    '🪫': [
        'Bateria baixa',
        ':low_battery:',
        ':red:',
        'Energia',
        'Vermelho',
        'Device',
        'Smartphone',
        'Computer',
        'Console'
    ],
    '🩻': [
        'Raio-X',
        ':x_ray:',
        ':x-ray:',
        ':blue:'
    ],
    '🫧': [
        'Bolhas',
        ':bubbles:',
        'Suds de Sabão',
        'Carbono',
        'Personalidade Effervescente',
        ':transparent:'
    ],
    '🪪': [
        'Cartão de identificação',
        ':identification_card:',
        'Identidade',
        'Passaporte',
        'ID',
        'Country',
        'Security',
        'Travel'
    ],
    '🧿': [
        'Nazar Amulet',
        ':nazar_amulet:',
        'Olho do Mal',
        ':blue:'
    ],
    '🧸': [
        'Ursinho de peluche',
        ':teddy_bear:',
        'Brinquedo',
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