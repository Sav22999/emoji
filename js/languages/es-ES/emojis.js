// descriptions took from Emojipedia.org
lang = 'es';
//use i18n language code of the browser, more details: https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/i18n/LanguageCode
titles_language[lang] = {
    '🔍': 'Resultados',
    '🕒': 'Emojis más utilizados',
    '😀': 'Sonrisas',
    '🙋': 'Personas',
    '🦊': 'Animales',
    '🅰️': 'Símbolos',
    '🍎': 'Comida y bebidas',
    '🏳️‍🌈': 'Banderas',
    '🏊': 'Deportes',
    '✈️': 'Viajes y lugares',
    '🖱️': 'Tecnologías y oficina',
    '👗': 'Ropa y accesorios',
    '🖐️': 'Manos y partes del cuerpo',
    '🛎️': 'Otro'
};
emojis_language[lang] = [];
/*search*/
emojis_language[lang][0] = {};
/*smileys*/
emojis_language[lang][2] = {
    '😀': [
        'Rostro sonriente',
        ':grinning:',
        ':grinning_face:',
        '::):',
        'Cara feliz',
        'Cara carita'
    ],
    '😃': [
        'Mezclar cara con ojos grandes',
        ':smiley:',
        ':grinning_face_with_big_eyes:',
        '::D:',
        'Cara feliz',
        'Cara carita',
        'Sonreyendo cara con Open Mouth'
    ],
    '😄': [
        'Sonar cara con ojos sonrientes',
        ':smile:',
        ':grinning_face_with_smiling_eyes:',
        'Cara feliz',
        'Cara carita',
        'Molinear cara con ojos asombrosos',
        'Cara sonriente con la boca abierta y los ojos sonrientes'
    ],
    '😁': [
        'Cara con ojos sonrientes',
        ':grin:',
        ':beaming_face_with_smiling_eyes:',
        'Sonar cara con ojos sonrientes'
    ],
    '😆': [
        'Molinear cara de asedio',
        ':grinning_squinting_face:',
        ':xD:',
        ':><:',
        'Gran sonrisa',
        'Sonrisa de ojos cerrados',
        'Risas',
        'Molinear cara con ojos cerrados',
        'Cara sonriente con Boca Abierta y Ojos Abiertos'
    ],
    '😅': [
        'Sonreír cara con sucio',
        ':happy_sweat:',
        'Ejercicio',
        'Sweat Feliz',
        'Sonar cara con ojos asombrosos y gota de sucio',
        'Sonriendo cara con Boca Abierta y Sweat Frío'
    ],
    '🤣': [
        'ROFL',
        ':rofl:',
        'Rugging on the Floor Rughing'
    ],
    '😂': [
        'Cara con lágrimas de alegría',
        ':lol:',
        'Risas',
        'Llorar risa',
        'Tears de risa',
        'LOL'
    ],
    '🙂': [
        'Cara ligeramente sonriente',
        ':smile:',
        '::):',
        'Un poco feliz',
        'Esto es bueno'
    ],
    '🙃': [
        'Cara hacia arriba',
        ':upside-down_face:',
        ':upside_down_face:',
        'Sarcasm',
        'Silly',
        'Cara al revés'
    ],
    '😉': [
        'Cara de guiño',
        ':winking:',
        ':;):',
        'Vestido',
        'Cara Bruja',
        'Cara de guijarro'
    ],
    '😊': [
        'Cara sonriente con ojos sonrientes',
        ':smiling_face:',
        ':^^:',
        'Cara feliz',
        'Sonrisa',
        'Cara carita'
    ],
    '😇': [
        'Sonriendo cara con Halo',
        ':smiling_angel:',
        'Angel',
        'Halo'
    ],
    '🥰': [
        'Cara sonriente con corazones',
        ':smiling_hearts:',
        'En amor cara',
        'Cara sonriente con ojos sonrientes y tres corazones'
    ],
    '😍': [
        'Cara sonriente con Ojos Corazones',
        ':smiling_heart-eyes:',
        ':smiling_heart_eyes:',
        ':*.*:',
        'Ojos del Corazón',
        'Cara del Corazón',
        'Cara sonriente con Ojos con Forma del Corazón'
    ],
    '🤩': [
        'Estrella',
        ':star_eyes:',
        'Excitada',
        'Ojos Estrellas',
        'Ojo estrellado',
        'Cara Wow',
        'Cara con ojos estrellados',
        'Rostro cara con ojos de estrella'
    ],
    '😘': [
        'Golpear a un beso',
        ':kissing_face:',
        '::*:',
        '::-*:',
        'Golpear a un beso',
        'Beso Explosivo',
        'Beso',
        'Lanzamiento facial de un beso'
    ],
    '😗': [
        'Cara besadora',
        ':kissing_face:',
        '::*:',
        '::-*:',
        'Cara de Pato',
        'Kissy Face',
        'Silbar'
    ],
    '☺️': [
        'Cara sonriente',
        ':smiling_face:',
        'Cara feliz',
        'Cara carita',
        'Sonriendo',
        'Cara sonriente blanca'
    ],
    '😚': [
        'Cara besadora con ojos cerrados',
        ':kissing_face:',
        'Beso cara',
        'Kissy Face'
    ],
    '😙': [
        'Beso cara con ojos sonrientes',
        ':kissing_face:',
        'Beso cara',
        'Kissy',
        'Silbar:',
        'Silbar'
    ],
    '😋': [
        'Alimento de salvavidas faciales',
        ':savoring_face:',
        'Adecuar',
        'Hambre',
        'Sonriendo labios de pulverización facial',
        'Alimentos deliciosos con caras',
        'Yum Yum'
    ],
    '😛': [
        'Cara con lengua',
        ':tongue_face:',
        '::P:',
        'Tranquilo',
        'Cara de lengua',
        'Lengua fuera',
        'Cara con la lengua Stuck-Out'
    ],
    '😜': [
        'Cara de guiño con lengua',
        ':winking:',
        ':;P:',
        'Loco',
        'Cara loca',
        'Winking cara con Lengua Stuck-Out',
        'Cara con la lengua Stuck-Out y el ojo de guiño'
    ],
    '🤪': [
        'Zany Face',
        ':crazy_face:',
        'Ojos locos',
        'Excitada',
        'Salvaje',
        'Goofy Face',
        'Rostro sonriente con un gran y un ojo pequeño'
    ],
    '😝': [
        'Cara de cuadrilátero con lengua',
        ':tongue_face:',
        ':xP:',
        'Lengua fuera',
        'Cara con la lengua atascada y los ojos cerrados',
        'Cara con la Lengua Stuck-Out y los ojos cerrados'
    ],
    '🤑': [
        'Cara de boca de dinero',
        ':money-mouth_face:',
        ':money_mouth_face:',
        '::$:',
        'Señal de Ojos del Dólar',
        'Cara del dinero',
        'Rico'
    ],
    '🤗': [
        'Cara abrazada',
        ':hugging_face:',
        'Enchufe',
        'Abrazo',
        'Abrazos',
        'Feliz rostro con las manos abrazadas'
    ],
    '🤭': [
        'Vaya,',
        ':oops:',
        'Cara con la boca de la mano',
        'Sonriendo cara con Ojos sonrientes y Boca de cobertura a mano'
    ],
    '🤫': [
        'Shh',
        ':shushing_face:',
        'Amerecer',
        'Cara aplastante',
        'h',
        'Descanso',
        'Silencio',
        'Silenciar',
        'Cara con dedos cubriendo labios cerrados'
    ],
    '🤔': [
        'Qué',
        ':thinking_face:',
        '?',
        'Hmm',
        'Cara de Pensamiento',
        'Pulgar Chin',
        'Pensador',
        'Sombra de Lanzamiento'
    ],
    '🤐': [
        'Zip',
        ':zip_face:',
        'Cara zipper-Mouth',
        'Labios sellados',
        'Labios sellados',
        'Zip',
        'Cara con una boca Zipper'
    ],
    '🤨': [
        'Cara con Ceja Aumentada',
        ':face_with_raised_eyebrow:',
        'Colberto',
        'La roca',
        'Cara con Cisco Aumentado',
        'Cara con una fila recortada'
    ],
    '😐': [
        'Cara neutral',
        ':neutral_face:',
        ':|',
        'Cara con boca atrasada',
        'Straight cara'
    ],
    '😑': [
        'Cara sin Expresión',
        ':expressionless_face:',
        '-_-',
        'Cara con boca atrasada',
        'Cara atrasada'
    ],
    '😶': [
        'Cara sin boca',
        ':face_without_mouth:',
        'Cara en blanco',
        'Sin voz',
        'Silencio',
        'Silenciar'
    ],
    '😏': [
        'Cara de Smirking',
        ':smirking_face:',
        'Flirting',
        'Cara sexual',
        'Cara de taza',
        'Sonrisa sugerida'
    ],
    '😒': [
        'Cara Unamusada',
        ':unamused_face:',
        'Insatisfecho',
        'Meh',
        'Ojo lateral',
        'Sin impresionar'
    ],
    '🙄': [
        'Cara con Ojos Rolling',
        ':face_with_rolling_eye:',
        ':eye_roll:',
        'Rol de ojos'
    ],
    '😬': [
        'Cara molesta',
        ':awkward:',
        'Desconcertante',
        'Eek',
        'Pie en montura',
        'Nervioso',
        'Snapchat Mutual #1 Mejor Amigo'
    ],
    '🤥': [
        'Cara de mentira',
        ':lying_face:',
        'Mentiro',
        'Nariz larga',
        'Pinocchio'
    ],
    '😌': [
        'Cara aliviada',
        ':relieved_face:',
        'Contenido',
        'Embutado'
    ],
    '😔': [
        'Disculpe',
        ':sad_face:',
        'Cara Pensora',
        'Pensar',
        'Triste',
        'Sábanas',
        'Lamentable',
        'Cara Pensora Triste'
    ],
    '😪': [
        'Cara dormida',
        ':sleepy_face:',
        'Tear lateral',
        'Burbuja de niebla'
    ],
    '🤤': [
        'Saliva',
        ':saliva_face:',
        'Drooling Face',
        'Drool'
    ],
    '😴': [
        'Cara dormida',
        ':sleeping_face:',
        ':zzz:',
        'Zzz',
        'Cara de sueño',
        'Snoring',
        'Cara Zzz'
    ],
    '🥱': [
        'Cara de Yawning',
        ':yawning_face:'
    ],
    '😷': [
        'Cara con máscara médica',
        ':face_with_medical_mask:',
        'Coronavirus',
        'COVID-19',
        'Cara de máscara',
        'Máscara quirúrgica'
    ],
    '🤒': [
        'Cara con medidor',
        ':face_with_thermometer:',
        ':sick:',
        ':ill:',
        'Ill',
        'enfermo'
    ],
    '🤕': [
        'Cara con la lanza de cabeza',
        ':face_with_head-bandage:',
        ':face_with_head_bandage:',
        'Cabeza abanderada',
        'Torpeza',
        'Heridos'
    ],
    '🤢': [
        'Cara Nauseada',
        ':nauseated_face:',
        'Disgusto',
        'Cara verde',
        'Vómito',
        ':green:'
    ],
    '🤮': [
        'Vómito facial',
        ':face_vomiting:',
        'Lanzar',
        'Bleah',
        'Bleurgh',
        'Yuku',
        'Yuck',
        'Ed',
        'Lanzar',
        'Arrojar',
        'Vómito',
        'Cara con Vómito de boca abierta'
    ],
    '🤧': [
        'Cara estornudante',
        ':sneezing_face:',
        'Gesundheit'
    ],
    '🥵': [
        'Cara caliente',
        ':hot_face:',
        'Cara sobrecalentada',
        ':red:'
    ],
    '🥶': [
        'Cara fría',
        ':cold_face:',
        'Herramienta',
        'Frío',
        'Cara congelante',
        ':blue:'
    ],
    '🥴': [
        'Cara sanguinaria',
        ':woozy_face:',
        'Cara borracha',
        'Cara con ojos desiguales y boca ondulada'
    ],
    '😵': [
        'Dizzy Face',
        ':dizzy_face:',
        'Cara de ojos cruzados',
        'Cara de ojos espirales'
    ],
    '🤯': [
        'Cabeza Explotadora',
        ':exploding_head:',
        'Golpe mental',
        'Cara impactada con la cabeza explotadora'
    ],
    '🤠': [
        'Sombrero oscuro cara',
        ':cowboy_hat_face:',
        'Peluquero',
        'Cara de Peluquero',
        'Cara con sombrero Cowboy'
    ],
    '🥳': [
        'Cara de fiesta',
        ':partying_face:',
        'Cara de Fiesta',
        'Cara con cuerno de fiesta y sombrero de fiesta'
    ],
    '😎': [
        'Cara sonriente con vidrios de sol',
        ':smiling_face_with_sunglasses:',
        'Herramienta',
        'Mejores amigos mutuos (Snapchat)',
        'Gafas de Sol'
    ],
    '🤓': [
        'Cara Nerd',
        ':nerd_face:',
        'Nerdy'
    ],
    '🧐': [
        'Cara con monóculo',
        ':face_with_monocle:'
    ],
    '😕': [
        'Cara confundida',
        ':confused_face:',
        '::/:',
        '::S:',
        'Sin plusvalía',
        'Rompecabezas'
    ],
    '😟': [
        'Cara adorada',
        ':worried_face:',
        '::(:',
        'Triste',
        'Sábanas'
    ],
    '🙁': [
        'Cara ligeramente gélida',
        ':slightly_frowning_face:',
        '::(:',
        'Poco triste'
    ],
    '☹️': [
        'Cara Gélida',
        ':frowning_face:',
        '::(:',
        'Megafrown',
        'Cara Gélida Blanca'
    ],
    '😮': [
        'Vaya,',
        ':wow:',
        '::O:',
        '¡Oh mi!',
        'Cara con la boca abierta',
        'Abrir boca',
        'Sorprendido rostro con la boca abierta'
    ],
    '😯': [
        'Cara Despejada',
        ':husked_face:',
        '::O:',
        'Sorpresa',
        'Cara Sorpresa'
    ],
    '😲': [
        'Cara impactada',
        ':shocked_face:',
        '::O:',
        'Vaya,',
        'Cara Astonizada',
        'Cara borracha',
        'Cara de Gasting'
    ],
    '😳': [
        'Cara destellada',
        ':flushed_face:',
        '::$:',
        'Cara aplastante',
        'Embarazado',
        'Vergüenza',
        'Cara con ojos abiertos anchos'
    ],
    '🥺': [
        'Cara alardeada',
        ':pleading_face:',
        '::(:',
        'Grabando',
        'Ojos lustrosos',
        'Simp',
        'Cara con Ojos Preferentes'
    ],
    '😦': [
        'Cara de Frowning con Open Mouth',
        ':frowning_face_with_open_mouth:',
        ':D::',
        'Gamba'
    ],
    '😨': [
        'Asustado',
        ':scared:',
        ':D::',
        'Cara temible',
        'Sorprendido'
    ],
    '😰': [
        'Cara angustiosa con sucio',
        ':anxious_face_with_sweat:',
        'Cara azul',
        'Cara preocupada',
        'Cara Nerviosa',
        'Cara con Boca Abierta y Sweat Frío'
    ],
    '😥': [
        'Triste, pero aliviado rostro',
        ':sad_but_relieved_face:',
        '::(:',
        'Suavizado de ceja',
        'Rostro decepcionado pero aliviado'
    ],
    '😢': [
        'Cara de llanto',
        ':crying_face:',
        '::(:',
        'Llorando',
        'Tear'
    ],
    '😭': [
        'Cara de grito fuerte',
        ':loudly_crying_face:',
        'Bawling',
        'Llorando',
        'Tears tristes',
        'Sobbing'
    ],
    '😱': [
        'Llorar rostro en el miedo',
        ':face_screaming_in_fear:',
        'Hogar solo',
        'Grillar',
        'Cara gritada'
    ],
    '😖': [
        'Cara Confundida',
        ':confounded_face:',
        'Boca plagadora',
        'Cara desgarrada'
    ],
    '😣': [
        'Cara persistente',
        ':persevering_face:',
        'Cara indefensa',
        'Ojos desgarrados'
    ],
    '😞': [
        'Cara desdesignada',
        ':disappointed_face:',
        '::(:',
        'Triste',
        'Sábanas'
    ],
    '😓': [
        'Bajar la cara con suavizado',
        ':downcast_face_with_sweat:',
        'Trabajo duro',
        'Rostro triste',
        'Cara con Sweat Frío'
    ],
    '😩': [
        'Cara vestida',
        ':weary_face:',
        'Rostro de Distrito',
        'Lanzamiento'
    ],
    '😫': [
        'Cara cansada',
        ':tired_face:',
        'Agotado',
        'Arriba',
        'Rostro de Distrito'
    ],
    '😤': [
        'Cara con vapor de nariz',
        ':face_with_steam_from_nose:',
        'Transmisión de Grievances',
        'Frustrado',
        'Cara loca',
        'En vapor',
        'Enfantando con la cara de la ira'
    ],
    '😡': [
        'Cara de Pouting',
        ':pouting_face:',
        'Cara enojada',
        'Cara Grumple',
        'Cara loca',
        'Cara Roja',
        ':red:'
    ],
    '😠': [
        'Cara enojada',
        ':angry_face:',
        'Enojado',
        'Cara Grumple'
    ],
    '🤬': [
        'Llevando',
        ':swearing:',
        '@#$%&!',
        'Cara con los Symbols en boca',
        'Cursiva',
        'Custodia',
        'Grawlix',
        'Cara con los Symbols sobre la boca',
        'Cara seria con Symbols cubriendo la boca',
        ':red:'
    ],
    '🥲': [
        'Sonriendo cara con Tear',
        ':smiling_face_with_tear:'
    ],
    '😮‍💨': [
        'Exhalación facial',
        ':face_exhaling:',
        'Salto'
    ],
    '😵‍💫': [
        'Cara con Ojos Espirales',
        ':face_with_spiral_eyes:',
        'Dizzy Face'
    ],
    '🥸': [
        'Cara disfrazada',
        ':disguised_face:'
    ],
    '🫠': [
        'Cara de fundición',
        ':melting_face:'
    ],
    '🫢': [
        'Cara con Ojos Abiertos y Manos sobre la Boca',
        ':face_with_open_eyes_and_hand_over_mouth:'
    ],
    '🫣': [
        'Cara con Ojo Pequeño',
        ':face_with_peeking_eye:'
    ],
    '🫡': [
        'Cara salteadora',
        ':saluting_face:',
        'Militar',
        'Ejército',
        'RAF',
        'Naval'
    ],
    '🫥': [
        'Cara de línea punteada',
        ':dotted_line_face:',
        ':transparent:'
    ],
    '🫤': [
        'Cara con boca Diagonal',
        ':face_with_diagonal_mouth:'
    ],
    '🥹': [
        'Tears de espalda para caras',
        ':face_holding_back_tears:'
    ],
    '😈': [
        'Sonriendo cara con cuernos',
        ':smiling_face_with_horns:',
        'Diablo',
        'Cuernos del Diablo',
        'Diablo Feliz',
        'Diablo Morado',
        'Diablo Rojo',
        ':purple:'
    ],
    '👿': [
        'Cara enojada con cuernos',
        ':angry_face_with_horns:',
        'Diablo',
        'Cuernos del Diablo',
        'Diablo Morado',
        'Goblin Morado',
        'Diablo triste',
        'Imp',
        ':morado'
    ],
    '🤡': [
        'Rostro Payaso',
        ':clown_face:',
        'Payaso Creepy',
        'Payaso malvado',
        'Payaso aterrador'
    ],
    '👽': [
        'Alien',
        ':alien:',
        'ET'
    ],
    '👾': [
        'Monstruo alienígena',
        ':alien_monster:',
        'Invasor espacial',
        'Monstruo de videojuego'
    ],
    '🤖': [
        'Robot',
        ':robot:',
        'Cara robótica'
    ],
    '👹': [
        'Ogre',
        ':ogre:',
        'Cara de máscara',
        'Oni',
        'Monstruo Rojo',
        'Ogro japonés',
        ':red:'
    ],
    '👻': [
        'Fantasma',
        ':ghost:',
        'Halloween'
    ],
    '🗣️': [
        'Cabeza de habla',
        ':speaking_head:',
        'Manciparse',
        'A lo largo',
        'Gritando',
        'Cabeza hablante en Silueta',
        ':blue:'
    ],
    '👤': [
        'Polvo en Silueta',
        ':bust_in_silhouette:',
        'Sombra',
        'Silhouette',
        'Usuario',
        'Silueta de persona',
        ':blue:'
    ],
    '🫂': [
        'Gente abrazando',
        ':people_hugging:',
        ':blue:'
    ],
    '👥': [
        'Bustos en Silueta',
        ':busts_in_silhouette:',
        'Sombras',
        'Silhouettes',
        'Usuarios',
        'Silueta de dos personas',
        ':blue:'
    ]
};
/*people*/
emojis_language[lang][3] = {
    '👶{{skin_tone}}': [
        'Bebé',
        ':baby:',
        'Hijo',
        'Todos'
    ],
    '🧒{{skin_tone}}': [
        'Hijo',
        ':child:',
        'Niño neutral de género'
    ],
    '👧{{skin_tone}}': [
        'Girl',
        ':girl:',
        ':woman:'
    ],
    '🧑{{skin_tone}}': [
        'Persona',
        ':person:',
        'Adulto neutral de género',
        'Adultos',
        ':person:'
    ],
    '🧑{{skin_tone}}': [
        'Persona: Barba',
        ':person_beard:',
        'Barba',
        'Persona portada',
        'Persona portada',
        ':person:'
    ],
    '🧑{{skin_tone}}‍🦰': [
        'Persona: pelo rojo',
        ':person_red_hair:',
        'Persona jengibre',
        'Cabeza de la persona',
        'Persona con pelo rojo',
        ':person:'
    ],
    '🧑{{skin_tone}}‍🦱': [
        'Persona: Pelo rizoso',
        ':person_curly_hair:',
        'Persona con pelo curvo',
        ':person:'
    ],
    '🧑{{skin_tone}}‍🦳': [
        'Persona: pelo blanco',
        ':person_white_hair:',
        'Persona con pelo gris',
        ':person:'
    ],
    '🧑{{skin_tone}}‍🦲': [
        'Persona: Calvo',
        ':person_bald:',
        'Persona sin pelo',
        ':person:'
    ],
    '👱{{skin_tone}}': [
        'Persona: Pelo rubio',
        ':person_blond_hair:',
        'Persona con pelo rubio',
        ':person:'
    ],
    '👨{{skin_tone}}': [
        'Hombre',
        ':man:',
        'Hombre',
        'Moustache Hombre',
        ':man:'
    ],
    '🧔{{skin_tone}}‍♂️': [
        'Hombre: Barba',
        ':man_beard:',
        'Barba',
        'Hombre con codo',
        'Persona portada',
        ':man:'
    ],
    '👨{{skin_tone}}‍🦰': [
        'Hombre: pelo rojo',
        ':man_red_hair:',
        'Jengibre',
        'Man Redhead',
        'Hombre con pelo rojo',
        ':man:'
    ],
    '👨{{skin_tone}}‍🦱': [
        'Hombre: Pelo rizoso',
        ':man_curly_hair:',
        'Hombre con pelo rizado',
        ':man:'
    ],
    '👨{{skin_tone}}‍🦳': [
        'Hombre: pelo blanco',
        ':man_white_hair:',
        'Hombre con pelo gris',
        ':man:'
    ],
    '👨{{skin_tone}}‍🦲': [
        'Hombre: Calvo',
        ':man_bald:',
        'Hombre sin pelo',
        ':man:'
    ],
    '👱{{skin_tone}}‍♂️': [
        'Hombre: Pelo rubio',
        ':man_blond_hair:',
        'Hombre con pelo rubio',
        ':man:'
    ],
    '👩{{skin_tone}}': [
        'Mujer',
        ':woman:',
        'Mujer',
        'Dama',
        'Mujer amarilla',
        ':woman:'
    ],
    '🧔{{skin_tone}}‍♀️': [
        'Mujeres: Barba',
        ':woman_beard:',
        'Barba',
        'Mujer con codo',
        ':woman:'
    ],
    '👩{{skin_tone}}‍🦰': [
        'Mujer: pelo rojo',
        ':woman_red_hair:',
        'Mujer jengibre',
        'Woman Redhead',
        'Mujer con pelo rojo',
        ':woman:'
    ],
    '👩{{skin_tone}}‍🦱': [
        'Mujer: Vello rizoso',
        ':woman_curly_hair:',
        'Mujer con pelo rizado',
        ':woman:'
    ],
    '👩{{skin_tone}}‍🦳': [
        'Mujer: pelo blanco',
        ':woman_white_hair:',
        'Mujer con pelo gris',
        ':woman:'
    ],
    '👩{{skin_tone}}‍🦲': [
        'Mujer: Calvo',
        ':woman_bald:',
        'Mujer sin pelo',
        ':woman:'
    ],
    '👱{{skin_tone}}‍♀️': [
        'Mujer: Cabello rubio',
        ':woman_blond_hair:',
        'Mujer con pelo rubio',
        ':woman:'
    ],
    '👴{{skin_tone}}': [
        'Hombre más antiguo',
        ':older_man:',
        ':older:',
        'Hombre anciano',
        'Grandpa',
        'Hombre Viejo',
        ':man:'
    ],
    '👵{{skin_tone}}': [
        'Mujer más antigua',
        ':older_woman:',
        ':older:',
        'Mujer anciana',
        'Abuela',
        'Nanna',
        'Vieja Dama',
        'Mujer Vieja',
        ':woman:'
    ],
    '🧓{{skin_tone}}': [
        'Persona más antigua',
        ':older_person:',
        ':older:',
        'Adulto anterior neutral de género',
        ':person:'
    ],
    '👼{{skin_tone}}': [
        'Ángel bebé',
        ':baby_angel:',
        'Angel',
        'Cherub',
        'Cupido',
        'Ponto'
    ],
    '👨{{skin_tone}}‍🎄': [
        'Santa Claus',
        ':santa_claus:',
        'San Nicolás',
        'Sinterklaas',
        'Papá Noel',
        ':man:'
    ],
    '👩{{skin_tone}}‍🎄': [
        'Señora Claus',
        ':mrs_claus:',
        'Madre Navidad',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🎄': [
        'Claus Mx',
        ':mx_clause:',
        'Navidad de persona',
        ':person:'
    ],
    '🤴{{skin_tone}}': [
        'Príncipe',
        ':price:',
        ':man:'
    ],
    '👸{{skin_tone}}': [
        'Príncipe',
        ':pricess:',
        'Girl rubia',
        'Girl con corona',
        'Girl con Tiara',
        ':woman:'
    ],
    '🫅{{skin_tone}}': [
        'Persona con Corona',
        ':person_with_crown:',
        ':person:'
    ],
    '👳{{skin_tone}}‍♂️': [
        'Turbán de Hombre',
        ':man_wearing_turban:',
        ':wearing_turban:',
        'Árabe',
        'Musulmanes',
        'Sikh',
        'Turbán',
        ':man:'
    ],
    '👳{{skin_tone}}‍♀️': [
        'Turbán de mujeres',
        ':woman_wearing_turban:',
        ':wearing_turban:',
        'Árabe',
        'Musulmanes',
        'Sikh',
        'Turbán',
        ':woman:'
    ],
    '👳{{skin_tone}}': [
        'Turbán para personas',
        ':person_wearing_turban:',
        ':wearing_turban:',
        'Árabe',
        'Musulmanes',
        'Sikh',
        'Turbán',
        ':person:'
    ],
    '👲{{skin_tone}}': [
        'Persona con capucha',
        ':person_with_skullcap:',
        'Hombre asiático',
        'Hombre con tope chino',
        'Hombre con Gua Pi Mao',
        ':person:'
    ],
    '🧕{{skin_tone}}': [
        'Mujer con bufanda de cabeza',
        ':woman_with_headscarf:',
        'Hijab',
        'Persona con Headscarf',
        ':woman:'
    ],
    '🤵{{skin_tone}}‍♀️': [
        'Hombre en Tuxedo',
        ':man_in_tuxedo:',
        ':tuxedo:',
        'Groom',
        'Traje de hombre',
        'Comienza',
        ':man:'
    ],
    '🤵{{skin_tone}}‍♂️': [
        'Mujer en Tuxedo',
        ':woman_in_tuxedo:',
        ':tuxedo:',
        'Groom',
        'Mujer con traje',
        'Comienza',
        ':woman:'
    ],
    '🤵{{skin_tone}}': [
        'Persona en Tuxedo',
        ':person_in_tuxedo:',
        ':tuxedo:',
        'Groom',
        'Persona con traje',
        'Comienza',
        ':person:'
    ],
    '👰{{skin_tone}}‍♂️': [
        'Hombre con velo',
        ':man_with_veil:',
        ':veil:',
        'Comienza',
        'Bridegroom',
        'Matrimonio',
        ':man:'
    ],
    '👰{{skin_tone}}‍♀️': [
        'Mujer con velo',
        ':woman_with_veil:',
        ':veil:',
        'Comienza',
        'Novia',
        'Bruda con velo',
        'Matrimonio',
        ':woman:'
    ],
    '👰{{skin_tone}}': [
        'Persona con velo',
        ':person_with_veil:',
        ':veil:',
        'Comienza',
        'Matrimonio',
        ':person:'
    ],
    '👨{{skin_tone}}‍🍼': [
        'Bebé para alimentar al hombre',
        ':man_feeding_baby:',
        ':feeding_baby:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🍼': [
        'Niños de alimentación femenina',
        ':woman_feeding_baby:',
        ':feeding_baby:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🍼': [
        'Bebé de alimentación personal',
        ':person_feeding_baby:',
        ':feeding_baby:',
        ':person:'
    ],
    '🥷': [
        'Ninja',
        ':ninja:'
    ],
    '🫃{{skin_tone}}': [
        'Hombre impaciente',
        ':pregnant_man:',
        ':pregnant:',
        'Preguntas',
        ':man:'
    ],
    '🤰{{skin_tone}}': [
        'Mujer Pregunta',
        ':pregnant_woman:',
        ':pregnant:',
        'Preguntas',
        'Dama Pregunta',
        ':woman:'
    ],
    '🫄{{skin_tone}}': [
        'Persona Pregunta',
        ':pregnant_person:',
        ':pregnant:',
        'Preguntas',
        ':person:'
    ],
    '🤱{{skin_tone}}‍': [
        'Alimentación de pecho',
        ':breast-feeding:',
        ':breast_feeding:',
        'Lactancia materna'
    ],
    '🦸{{skin_tone}}‍♂️': [
        'Superhéroe hombre',
        ':man_superhero:',
        ':superhero:',
        ':man:'
    ],
    '🦸{{skin_tone}}‍♀️': [
        'Superhéroe femenino',
        ':woman_superhero:',
        ':superhero:',
        ':woman:'
    ],
    '🦸{{skin_tone}}': [
        'Superhéroe de persona',
        ':person_superhero:',
        ':superhero:',
        ':person:'
    ],
    '🦹{{skin_tone}}‍♂️': [
        'Supervillano hombre',
        ':man_supervillain:',
        ':supervillain:',
        ':man:'
    ],
    '🦹{{skin_tone}}‍♀️': [
        'Supervillana femenina',
        ':woman_supervillain:',
        ':supervillain:',
        ':woman:'
    ],
    '🦹{{skin_tone}}': [
        'Supervillano de la persona',
        ':person_supervillain:',
        ':supervillain:',
        ':person:'
    ],
    '🧙{{skin_tone}}‍♂️': [
        'Mago Hombre',
        ':man_mage:',
        ':mage:',
        'Sorcerer',
        'Asistente',
        ':man:'
    ],
    '🧙{{skin_tone}}‍♀️': [
        'Mago femenino',
        ':woman_mage:',
        ':mage:',
        'Bruja',
        'Hechicero',
        'Asistente',
        ':woman:'
    ],
    '🧙{{skin_tone}}': [
        'Mago de la persona',
        ':person_mage:',
        ':mage:',
        'Asistente',
        ':mage:',
        ':person:'
    ],
    '🧚{{skin_tone}}‍♂️': [
        'Hada de hombre',
        ':man_fairy:',
        ':fairy:',
        ':man:'
    ],
    '🧚{{skin_tone}}‍♀️': [
        'Hada femenina',
        ':woman_fairy:',
        ':fairy:',
        ':woman:'
    ],
    '🧚{{skin_tone}}': [
        'Hada de la persona',
        ':person_fairy:',
        ':fairy:',
        ':person:'
    ],
    '🧛{{skin_tone}}‍♂️': [
        'Vampiro hombre',
        ':man_vampire:',
        ':vampire:',
        'Drácula',
        ':man:'
    ],
    '🧛{{skin_tone}}‍♀️': [
        'Vampiro femenino',
        ':woman_vampire:',
        ':vampire:',
        ':woman:'
    ],
    '🧛{{skin_tone}}': [
        'Vampiro de la persona',
        ':person_vampire:',
        ':vampire:',
        ':person:'
    ],
    '🧜{{skin_tone}}‍♂️': [
        'Mermán',
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
        'Elfo hombre',
        ':man_elf:',
        ':elf:',
        ':man:'
    ],
    '🧝{{skin_tone}}‍♀️': [
        'Elfo de Mujer',
        ':woman_elf:',
        ':elf:',
        ':woman:'
    ],
    '🧝{{skin_tone}}': [
        'Persona Elf',
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
        'Persona Genie',
        ':person_genie:',
        ':genie:',
        ':person:'
    ],
    '🕵️{{skin_tone}}‍♂️': [
        'Detective hombre',
        ':man_detective:',
        ':detective:',
        'Ojo privado',
        'Sleuth',
        'Espía',
        'Man Sleuth',
        'Sueño o espía',
        '007',
        'Inspector',
        ':man:'
    ],
    '🕵️{{skin_tone}}‍♀️': [
        'Detective de mujeres',
        ':woman_detective:',
        ':detective:',
        'Ojo privado',
        'Sleuth',
        'Espía',
        'Sueño femenino',
        'Sueño o espía',
        '007',
        'Inspector',
        ':woman:'
    ],
    '🕵{{skin_tone}}': [
        'Detectividad de la persona',
        ':person_detective:',
        ':detective:',
        'Ojo privado',
        'Sleuth',
        'Espía',
        'Sueño de la persona',
        'Sueño o espía',
        '007',
        'Inspector',
        ':person:'
    ],
    '💂{{skin_tone}}‍♂️': [
        'Hombre: Guardia',
        ':man_guard:',
        ':guard:',
        'Guardián británico',
        'Guardia de Pies',
        ':man:'
    ],
    '💂{{skin_tone}}‍♀️': [
        'Mujer: Guardia',
        ':woman_guard:',
        ':guard:',
        'Guardián británico',
        'Guardia de Pies',
        ':woman:'
    ],
    '💂{{skin_tone}}': [
        'Persona: Guardia',
        ':person_guard:',
        ':guard:',
        'Guardián británico',
        'Guardia de Pies',
        ':person:'
    ],
    '👮{{skin_tone}}‍♂️': [
        'Oficial de policía',
        ':man_police_officer:',
        ':police_officer:',
        'Cola',
        'Policía',
        'Policía',
        ':man:'
    ],
    '👮{{skin_tone}}‍♀️': [
        'Policía de Mujer',
        ':woman_police_officer:',
        ':police_officer:',
        'Cola',
        'Policía',
        'Policía',
        ':woman:'
    ],
    '👮{{skin_tone}}': [
        'Oficial de policía',
        ':person_police_officer:',
        ':police_officer:',
        'Cola',
        'Policía',
        ':person:'
    ],
    '👨{{skin_tone}}‍🚒': [
        'Luchador bombero',
        ':man_firefighter:',
        ':firefighter:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🚒': [
        'Bomberos de mujeres',
        ':woman_firefighter:',
        ':firefighter:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🚒': [
        'Bombero de la persona',
        ':person_firefighter:',
        ':firefighter:',
        ':person:'
    ],
    '👨{{skin_tone}}‍✈️': [
        'Pilote de hombre',
        ':man_pilot:',
        ':pilot:',
        ':man:'
    ],
    '👩{{skin_tone}}‍✈️': [
        'Pilote femenino',
        ':woman_pilot:',
        ':pilot:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍✈️': [
        'Pilote de la persona',
        ':person_pilot:',
        ':pilot:',
        ':person:'
    ],
    '👨{{skin_tone}}‍💻': [
        'Tecólogo hombre',
        ':man_technologist:',
        ':technologist:',
        'Tecólogo hombre',
        ':man:'
    ],
    '👩{{skin_tone}}‍💻': [
        'Tecólogo femenino',
        ':woman_technologist:',
        ':technologist:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍💻': [
        'Tecnólogo de la persona',
        ':person_technologist:',
        ':technologist:',
        ':person:'
    ],
    '👨{{skin_tone}}‍🎤': [
        'Cantante de hombre',
        ':man_singer:',
        ':singer:',
        'Bowie',
        'Aladdin Sane',
        ':man:'
    ],
    '👩{{skin_tone}}‍🎤': [
        'Cantante femenina',
        ':woman_singer:',
        ':singer:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🎤': [
        'Cantante de la persona',
        ':person_singer:',
        ':singer:',
        ':person:'
    ],
    '👨{{skin_tone}}‍🎨': [
        'Artista Hombre',
        ':man_artist:',
        ':artist:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🎨': [
        'Artista femenino',
        ':woman_artist:',
        ':artist:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🎨': [
        'Artista de la persona',
        ':person_artist:',
        ':artist:',
        ':person:'
    ],
    '👷{{skin_tone}}‍♂️': [
        'Trabajador Construcción Hombre',
        ':man_contruction_worker:',
        ':contruction_worker:',
        ':man:'
    ],
    '👷{{skin_tone}}‍♀️': [
        'Trabajador de Construcción Mujer',
        ':woman_contruction_worker:',
        ':contruction_worker:',
        ':woman:'
    ],
    '👷{{skin_tone}}': [
        'Trabajador de Construcción de Persona',
        ':person_contruction_worker:',
        ':contruction_worker:',
        ':person:'
    ],
    '👨{{skin_tone}}‍🚀': [
        'Astronauta hombre',
        ':man_astronaut:',
        ':astronaut:',
        'Cosmonauta de hombre',
        ':man:'
    ],
    '👩{{skin_tone}}‍🚀': [
        'Astronauta femenina',
        ':woman_astronaut:',
        ':astronaut:',
        'Cosmonauta femenina',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🚀': [
        'Astronauta de la persona',
        ':person_astronaut:',
        ':astronaut:',
        'Cosmonauta Persona',
        ':person:'
    ],
    '👨{{skin_tone}}‍🔬': [
        'Científico hombre',
        ':man_scientist:',
        ':scientist:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🔬': [
        'Científico femenino',
        ':woman_scientist:',
        ':scientist:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🔬': [
        'Científico de la persona',
        ':person_scientist:',
        ':scientist:',
        ':person:'
    ],
    '👨{{skin_tone}}‍💼': [
        'Trabajador de Oficina',
        ':man_office_worker:',
        ':office_worker:',
        'CEO',
        'Empresario',
        ':man:'
    ],
    '👩{{skin_tone}}‍💼': [
        'Oficina de Trabajadores',
        ':woman_office_worker:',
        ':office_worker:',
        'Empresaria',
        'CEO',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍💼': [
        'Oficina de Trabajador',
        ':person_office_worker:',
        ':office_worker:',
        'Negocio',
        'CEO',
        ':person:'
    ],
    '👨{{skin_tone}}‍🏭': [
        'Trabajador de la Fábrica del Hombre',
        ':man_factory_worker:',
        ':factory_worker:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🏭': [
        'Trabajador Fábrica de Mujeres',
        ':woman_factory_worker:',
        ':factory_worker:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🏭': [
        'Trabajador de Fábrica de Personas',
        ':person_factory_worker:',
        ':factory_worker:',
        ':person:'
    ],
    '👨{{skin_tone}}‍🔧': [
        'Mecánica',
        ':man_mechanic:',
        ':mechanic:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🔧': [
        'Mecánica femenina',
        ':woman_mechanic:',
        ':mechanic:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🔧': [
        'Mecánica de la persona',
        ':person_mechanic:',
        ':mechanic:',
        ':person:'
    ],
    '👨{{skin_tone}}‍🍳': [
        'Cocina de hombre',
        ':man_cook:',
        ':cook:',
        'Chef Hombre',
        'Chef masculino',
        ':man:'
    ],
    '👩{{skin_tone}}‍🍳': [
        'Cocina femenina',
        ':woman_cook:',
        ':cook:',
        'Chef femenino',
        'Chef femenino',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🍳': [
        'Cocina de la persona',
        ':person_cook:',
        ':cook:',
        'Chef de Persona',
        ':person:'
    ],
    '👨{{skin_tone}}‍🌾': [
        'Granjero',
        ':man_farmer:',
        ':farmer:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🌾': [
        'Mujer agricultora',
        ':woman_farmer:',
        ':farmer:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🌾': [
        'Granjero de personas',
        ':person_farmer:',
        ':farmer:',
        ':person:'
    ],
    '👨{{skin_tone}}‍‍⚖️': [
        'Judge Hombre',
        ':man_judge:',
        ':judge:',
        ':man:'
    ],
    '👩{{skin_tone}}‍‍⚖️': [
        'Judge femenino',
        ':woman_judge:',
        ':judge:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍‍⚖️': [
        'Judge de Persona',
        ':person_judge:',
        ':judge:',
        ':person:'
    ],
    '👨{{skin_tone}}‍‍🏫': [
        'Profesor hombre',
        ':man_teacher:',
        ':teacher:',
        ':man:'
    ],
    '👩{{skin_tone}}‍‍🏫': [
        'Profesora',
        ':woman_teacher:',
        ':teacher:',
        ':woman:'
    ],
    '🧑‍{{skin_tone}}‍‍🏫': [
        'Profesor de Persona',
        ':person_teacher:',
        ':teacher:',
        ':person:'
    ],
    '👨{{skin_tone}}‍🎓': [
        'Estudiante hombre',
        ':man_student:',
        ':student:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🎓': [
        'Estudiante',
        ':woman_student:',
        ':student:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🎓': [
        'Estudiante de la persona',
        ':person_student:',
        ':student:',
        ':person:'
    ],
    '👨{{skin_tone}}‍⚕️': [
        'Trabajador de Salud del Hombre',
        ':man_health_worker:',
        ':health_worker:',
        'Médico masculino',
        'Vivienda masculina',
        ':man:'
    ],
    '👩{{skin_tone}}‍⚕️': [
        'Trabajador de la Salud',
        ':woman_health_worker:',
        ':health_worker:',
        'Doctor femenino',
        'Enfermedad femenina',
        ':woman:'
    ],
    '🧑‍{{skin_tone}}‍⚕️': [
        'Trabajador de Salud de Persona',
        ':person_health_worker:',
        ':health_worker:',
        'Doctor en Persona',
        'Enfermedad de la persona',
        ':person:'
    ],
    '🤷{{skin_tone}}‍♂️': [
        'Camarón de hombre',
        ':man_shrugging:',
        ':shrugging:',
        'hombre idk',
        'dunno',
        ':man:'
    ],
    '🤷{{skin_tone}}‍♀️': [
        'Camarón de mujeres',
        ':woman_shrugging:',
        ':shrugging:',
        'mujer idk',
        'dunno',
        ':woman:'
    ],
    '🤷{{skin_tone}}': [
        'Camarón de la persona',
        ':person_shrugging:',
        ':shrugging:',
        'idk persona',
        'dunno',
        ':person:'
    ],
    '🤦{{skin_tone}}‍♂️': [
        'Hombre Facepalming',
        ':man_facepalming:',
        ':facepalming:',
        ':man:'
    ],
    '🤦{{skin_tone}}‍♀️': [
        'Facepalming femenino',
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
    '🙇{{skin_tone}}‍‍♂️': [
        'Golpe de hombre',
        ':man_bowing:',
        ':bowing:',
        ':man:'
    ],
    '🙇{{skin_tone}}‍‍♀️': [
        'Amortiguación de mujeres',
        ':woman_bowing:',
        ':bowing:',
        ':woman:'
    ],
    '🙇{{skin_tone}}': [
        'Persona',
        ':person_bowing:',
        ':bowing:',
        ':person:'
    ],
    '🧏{{skin_tone}}‍♂️': [
        'Hombre sordo',
        ':deaf_man:',
        ':deaf:',
        ':man:'
    ],
    '🧏{{skin_tone}}‍‍♀️': [
        'Mujer sorda',
        ':deaf_woman:',
        ':deaf:',
        ':woman:'
    ],
    '🧏{{skin_tone}}': [
        'Persona sorda',
        ':deaf_person:',
        ':deaf:',
        ':person:'
    ],
    '🙋{{skin_tone}}‍‍♂️': [
        'Mano asfixiante',
        ':man_raising_hand:',
        'Feliz Hombre que levanta una mano',
        ':raising_hand:',
        ':man:'
    ],
    '🙋{{skin_tone}}‍♀️': [
        'Mano Mejoradora',
        ':woman_raising_hand:',
        'Felices mujeres que levantan una mano',
        ':raising_hand:',
        ':woman:'
    ],
    '🙋{{skin_tone}}': [
        'Mano en aumento de la persona',
        ':person_raising_hand:',
        'Feliz Persona que levanta una mano',
        ':raising_hand:',
        ':person:'
    ],
    '💁{{skin_tone}}‍♂️': [
        'Mano Tipping Hombre',
        ':man_tipping_hand:',
        'Information Desk Man',
        ':tipping_hand:',
        ':man:'
    ],
    '💁{{skin_tone}}‍♀️': [
        'Mano Tipping Mujeres',
        ':woman_tipping_hand:',
        'Escritorio de Información Mujeres',
        ':tipping_hand:',
        ':woman:'
    ],
    '💁{{skin_tone}}': [
        'Mano de Tipping Persona',
        ':person_tipping_hand:',
        'Persona del Escritorio de Información',
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
        'Gestos de mujeres bien',
        ':woman_gesturing_ok:',
        ':gesturing_ok:',
        ':woman:'
    ],
    '🙆{{skin_tone}}': [
        'Gesto de persona bien',
        ':person_gesturing_ok:',
        ':gesturing_ok:',
        ':person:'
    ],
    '🙅{{skin_tone}}‍♂️': [
        'Gestos de Hombre No',
        ':man_gesturing_no:',
        ':gesturing_no:',
        ':man:'
    ],
    '🙅{{skin_tone}}‍♀️': [
        'Gestos de mujeres No',
        ':woman_gesturing_no:',
        ':gesturing_no:',
        ':woman:'
    ],
    '🙅{{skin_tone}}': [
        'Persona Gestando No',
        ':person_gesturing_no:',
        ':gesturing_no:',
        ':person:'
    ],
    '🙎{{skin_tone}}‍♂️': [
        'Puertas de hombre',
        ':man_pouting:',
        ':pouting:',
        ':man:'
    ],
    '🙎{{skin_tone}}‍‍♀️': [
        'Puertas femeninas',
        ':woman_pouting:',
        ':pouting:',
        ':woman:'
    ],
    '🙎{{skin_tone}}': [
        'Pouting de la persona',
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
        'Frowning femenino',
        ':woman_frowining:',
        ':frowining:',
        ':woman:'
    ],
    '🙍{{skin_tone}}': [
        'Congelación de la persona',
        ':person_frowining:',
        ':frowining:',
        ':person:'
    ],
    '🧟‍‍♂️': [
        'Hombre Zombie',
        ':man_zombie:',
        ':zombie:',
        ':man:'
    ],
    '🧟‍‍♀️': [
        'Zombie femenino',
        ':woman_zombie:',
        ':zombie:',
        ':woman:'
    ],
    '🧟': [
        'Persona Zombie',
        ':person_zombie:',
        ':zombie:',
        ':person:'
    ],
    '🚶{{skin_tone}}‍♂️': [
        'Caminata de hombres',
        ':man_walking:',
        ':walking:',
        ':man:'
    ],
    '🚶{{skin_tone}}‍♀️': [
        'Caminata femenina',
        ':woman_walking:',
        ':walking:',
        ':woman:'
    ],
    '🚶{{skin_tone}}': [
        'Persona caminando',
        ':person_walking:',
        ':walking:',
        ':person:'
    ],
    '🧍{{skin_tone}}‍♂️': [
        'Hombre de pie',
        ':man_standing:',
        ':standing:',
        ':man:'
    ],
    '🧍{{skin_tone}}‍♀️': [
        'Hombre de pie',
        ':woman_standing:',
        ':standing:',
        ':woman:'
    ],
    '🧍{{skin_tone}}': [
        'Persona en pie',
        ':person_standing:',
        ':standing:',
        ':person:'
    ],
    '🧎{{skin_tone}}‍♂️': [
        'Rarrodillado',
        ':man_kneeling:',
        ':kneeling:',
        ':man:'
    ],
    '🧎{{skin_tone}}‍♀️': [
        'Rarrodillado femenino',
        ':woman_kneeling:',
        ':kneeling:',
        ':woman:'
    ],
    '🧎{{skin_tone}}': [
        'Cortadura de persona',
        ':person_kneeling:',
        ':kneeling:',
        ':person:'
    ],
    '👨{{skin_tone}}‍🦯': [
        'Hombre con bastón blanco',
        ':man_with_white_cane:',
        ':white_cane:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🦯': [
        'Mujer con bastón blanco',
        ':woman_with_white_cane:',
        ':white_cane:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🦯': [
        'Persona con bastón blanco',
        ':person_with_white_cane:',
        ':white_cane:',
        ':person:'
    ],
    '👨{{skin_tone}}‍🦼': [
        'Silla de ruedas motorizada',
        ':man_in_motorized_wheelchair:',
        ':motorized_wheelchair:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🦼': [
        'Mujer en Silla de Rueda Motorizada',
        ':woman_in_motorized_wheelchair:',
        ':motorized_wheelchair:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🦼': [
        'Persona en silla de rueda motorizada',
        ':person_in_motorized_wheelchair:',
        ':motorized_wheelchair:',
        ':person:'
    ],
    '👨{{skin_tone}}‍🦽': [
        'Hombre en silla de rueda manual',
        ':man_manual_wheelchair:',
        ':manual_wheelchair:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🦽': [
        'Mujer en silla de rueda manual',
        ':woman_manual_wheelchair:',
        ':manual_wheelchair:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🦽': [
        'Persona en silla de rueda manual',
        ':person_manual_wheelchair:',
        ':manual_wheelchair:',
        ':person:'
    ],
    '👯‍♂️': [
        'Hombres con Olas Bunny',
        ':men_with_bunny_hears:',
        ':bunny_ears:',
        ':man:'
    ],
    '👯‍♀️': [
        'Mujeres con Olas Bunny',
        ':women_with_bunny_hears:',
        ':bunny_ears:',
        ':woman:'
    ],
    '👯': [
        'Personas con Olas de Bunny',
        ':people_with_bunny_hears:',
        ':bunny_ears:',
        ':person:'
    ],
    '🕴️{{skin_tone}}': [
        'Persona con traje de Levitating',
        ':person_in_suit_levitating:',
        'Hombre flotante',
        'Niño Ruda',
        'Walt Jabsco',
        'Hombre en Traje de Negocio Levitando',
        ':person:'
    ],
    '🧖{{skin_tone}}‍♂️': [
        'Hombre en sala de vapor',
        ':man_in_steamy_room:',
        ':steamy_room:',
        'Hombre en Sauna',
        ':man:'
    ],
    '🧖{{skin_tone}}‍♀️': [
        'Mujer en sala de vapor',
        ':woman_in_steamy_room:',
        ':steamy_room:',
        'Mujer en Sauna',
        ':woman:'
    ],
    '🧖{{skin_tone}}': [
        'Persona en sala de vapor',
        ':person_in_steamy_room:',
        ':steamy_room:',
        'Persona en Sauna',
        ':person:'
    ],
    '👫{{skin_tone}}': [
        'Mujeres y Hombres sosteniendo manos',
        ':woman_and_man_holding_hands:',
        ':holding_hands:',
        'Pareja Heterosexual',
        'Pareja Straight',
        'Manos sostenidas para hombre y mujer',
        ':woman:'
    ],
    '👬{{skin_tone}}': [
        'Manos sostenidas',
        ':holding_hands:',
        ':men_holding_hands:',
        'Pareja Gay',
        'Dos manos sostenidas',
        ':man:'
    ],
    '👭{{skin_tone}}': [
        'Mujeres que sostienen manos',
        ':holding_hands:',
        ':women_holding_hands:',
        'Pareja Lesbiana',
        'Dos mujeres sosteniendo las manos',
        ':woman:'
    ],
    '🧑‍🤝‍🧑': [
        'Gente sosteniendo manos',
        ':holding_hands:',
        ':people_holding_hands:',
        'Dos personas sosteniendo las manos',
        'Pareja Inclusiva de género',
        'Pareja neutral de género',
        'Género no conforming pareja',
        ':person:'
    ],
    '👨‍👩‍👦': [
        'Familia con Madre, Padre e Hijo',
        ':family_with_mother_father_and_son:',
        'Familia: Hombre, Mujer, Niño'
    ],
    '👨‍👩‍👧': [
        'Familia con Madre, Padre e Hija',
        ':family_with_mother_father_and_daughter:',
        'Familia: Hombre, Mujeres, Girl'
    ],
    '👨‍👩‍👧‍👦': [
        'Familia con Madre, Padre, Hijo e Hija',
        ':family_with_mother_father_son_and_daughter:',
        'Familia: Hombre, Mujer, Girl, Niño'
    ],
    '👨‍👩‍👦‍👦': [
        'Familia con Madre, Padre y dos Hijos',
        ':family_with_mother_father_and_two_sons:',
        'Familia: Hombre, Mujer, Niño, Niño'
    ],
    '👨‍👩‍👧‍👧': [
        'Familia con Madre, Padre y dos Hijas',
        ':family_with_mother_father_and_two_daughters:',
        'Familia: Hombre, Mujer, Girl, Girl'
    ],
    '👨‍👨‍👦': [
        'Familia con dos Padres e Hijo',
        ':family_with_two_fathers_and_son:',
        'Familia: Hombre, Hombre, Niño',
        ':man:'
    ],
    '👨‍👨‍👧': [
        'Familia con Dos Padres e Hija',
        ':family_with_two_fathers_and_daughter:',
        'Familia: Hombre, Hombre, Girl',
        ':man:'
    ],
    '👨‍👨‍👧‍👦': [
        'Familia con Dos Padres, Hijo e Hija',
        ':family_with_two_fathers_son_and_daughter:',
        'Familia: Hombre, Hombre, Girl, Chico',
        ':man:'
    ],
    '👨‍👨‍👦‍👦': [
        'Familia con dos papas y dos hijos',
        ':family_with_two_fathers_and_two_sons:',
        'Familia: Hombre, Hombre, Niño, Niño',
        ':man:'
    ],
    '👨‍👨‍👧‍👧': [
        'Familia con dos Padres y dos Hijas',
        ':family_with_two_fathers_and_two_daughters:',
        'Familia: Hombre, Hombre, Girl, Girl',
        ':man:'
    ],
    '👩‍👩‍👦': [
        'Familia con dos madres e hielo',
        ':family_with_two_mothers_and_son:',
        'Familia: Mujeres, Mujeres, Niños',
        ':woman:'
    ],
    '👩‍👩‍👧': [
        'Familia con dos madres e hija',
        ':family_with_two_mothers_and_daughter:',
        'Familia: Mujeres, Mujeres, Girl',
        ':woman:'
    ],
    '👩‍👩‍👧‍👦': [
        'Familia con dos madres, hijo e hija',
        ':family_with_two_mothers_son_and_daughter:',
        'Familia: Mujeres, Mujeres, Girl, Niño',
        ':woman:'
    ],
    '👩‍👩‍👦‍👦': [
        'Familia con dos madres y dos hijos',
        ':family_with_two_mothers_and_two_sons:',
        'Familia: Mujeres, Mujeres, Niño, Niño',
        ':woman:'
    ],
    '👩‍👩‍👧‍👧': [
        'Familia con dos madres y dos hijas',
        ':family_with_two_mothers_and_two_daughters:',
        'Familia: Mujeres, Mujeres, Girl, Girl',
        ':woman:'
    ],
    '👨‍👦': [
        'Familia con Padre e Hijo',
        ':family_with_father_and_son:',
        'Familia: Hombre, Niño',
        ':man:'
    ],
    '👨‍👧': [
        'Familia con Padre e hija',
        ':family_with_father_and_daughter:',
        'Familia: Hombre, Girl',
        ':man:'
    ],
    '👨‍👦‍👦': [
        'Familia con padre y dos hijos',
        ':family_with_father_and_two_sons:',
        'Familia: Hombre, Niño, Niño',
        ':man:'
    ],
    '👨‍👧‍👦': [
        'Familia con Padre, Hijo e Hija',
        ':family_with_father_son_and_daughter:',
        'Familia: Hombre, Girl, Chico',
        ':man:'
    ],
    '👨‍👧‍👧': [
        'Familia con Padre y dos Hijas',
        ':family_with_father_and_two_daughters:',
        'Familia: Hombre, Girl, Girl',
        ':man:'
    ],
    '👩‍👦': [
        'Familia con Madre e Hijo',
        ':family_with_mother_and_son:',
        'Familia: Mujer, Niño',
        ':woman:'
    ],
    '👩‍👧': [
        'Familia con madre e hija',
        ':family_with_mother_and_daughter:',
        'Familia: Mujeres, Girl',
        ':woman:'
    ],
    '👩‍👦‍👦': [
        'Familia con madre y dos hijos',
        ':family_with_mother_and_two_sons:',
        'Familia: Mujeres, Niños, Niños',
        ':woman:'
    ],
    '👩‍👧‍👦': [
        'Familia con Madre, Hijo e Hija',
        ':family_with_mother_son_and_daughter:',
        'Familia: Mujeres, Girl, Niño',
        ':woman:'
    ],
    '👩‍👧‍👧': [
        'Familia con Madre y Dos Hijas',
        ':family_with_mother_and_two_daughters:',
        'Familia: Mujeres, Girl, Girl',
        ':woman:'
    ],
    '💑{{skin_tone}}': [
        'Parejo con Corazón',
        ':couple_with_heart:',
        'Parejas enamoradas',
        'Pareja Amante',
        'Pareja neutral de género',
        ':person:'
    ],
    '👩‍❤️‍👨': [
        'Hombre y mujer con corazón',
        ':man_and_woman_with_heart:',
        'Parejas enamoradas',
        'Pareja Amante',
        'Parejo con Corazón'
    ],
    '👨‍❤️‍👨': [
        'Dos hombres con corazón',
        ':two_men_with_heart:',
        'Junto con el Corazón: Hombre, Hombre',
        ':man:'
    ],
    '👩‍❤️‍👩': [
        'Dos mujeres con corazón',
        ':two_women_with_heart:',
        'Parejo con el corazón: mujer, mujer',
        ':woman:'
    ],
    '💏{{skin_tone}}': [
        'Beso de pareja',
        ':couple_kissing:',
        'Beso',
        'Beso de pareja neutral de género',
        ':person:'
    ],
    '👩‍❤️‍💋‍👨': [
        'Beso hombre y mujer',
        ':man_and_woman_kissing:'
    ],
    '👨‍❤️‍💋‍👨': [
        'Dos besos',
        ':two_men_kissing:',
        'Beso hombre y hombre',
        ':man:'
    ],
    '👩‍❤️‍💋‍👩': [
        'Dos mujeres besando',
        ':two_women_kissing:',
        'Besos de mujeres y mujeres',
        ':woman:'
    ],
    '💆{{skin_tone}}‍♂️': [
        'Massage de cabeza para hombre',
        ':man_getting_head_massage:',
        ':getting_head_massage:',
        ':man:'
    ],
    '💆{{skin_tone}}‍♀️': [
        'Massage de cabeza femenina',
        ':woman_getting_head_massage:',
        ':getting_head_massage:',
        ':woman:'
    ],
    '💆{{skin_tone}}': [
        'Persona obteniendo mago de cabeza',
        ':person_getting_head_massage:',
        ':getting_head_massage:',
        ':person:'
    ],
    '💇{{skin_tone}}‍♂️': [
        'Cortador de cabello',
        ':man_getting_haircut:',
        ':getting_haircut:',
        ':man:'
    ],
    '💇{{skin_tone}}‍♀️': [
        'Peinado femenino',
        ':woman_getting_haircut:',
        ':getting_haircut:',
        ':woman:'
    ],
    '💇{{skin_tone}}': [
        'Corte de pelo para personas',
        ':person_getting_haircut:',
        ':getting_haircut:',
        ':person:'
    ],
    '🛌{{skin_tone}}': [
        'Alojamiento dormido',
        ':sleeping_accommodation:',
        'Persona en la cama',
        'Suspensión de la persona'
    ],
    '🧌': [
        'Troll',
        ':troll:'
    ],
    '👺': [
        'Goblin',
        ':goblin:',
        'Cara de la nariz larga',
        'Máscara Roja',
        'Tengu',
        'Goblin Japonés'
    ]
};
/*animals*/
emojis_language[lang][4] = {
    '😺': [
        'Gato sonriente',
        ':happy_cat:',
        ':smiling_cat:',
        '::):',
        'Gato Feliz',
        'Gato sonriente',
        'Cara Feliz Gato',
        'Sonriendo Cara Gat con Open Mouth'
    ],
    '😸': [
        'Gato sonriente con ojos sonrientes',
        ':grinning_cat:',
        '::D:',
        'Gato sonriente',
        'Gato Feliz',
        'Gato sonriente cara'
    ],
    '😹': [
        'Gato con lágrimas de alegría',
        ':laughing_cat:',
        '::):',
        'Feliz Gato Tears',
        'Gato de reposo'
    ],
    '😻': [
        'Gato sonriente con ojos corazonados',
        ':heart_eyes_cat:',
        ':*.*:',
        'Gato Ojos del Corazón',
        'Gato amante',
        'Cara del gato sonriente con ojos moldeados por el corazón'
    ],
    '😼': [
        'Gato con Sonrisa Bruja',
        ':cat_with_wry_smile:',
        'Gato de Smirking',
        'Cara del Gato Smirking',
        'Cara gato con sonrisa salvaje'
    ],
    '😽': [
        'Gato besador',
        ':kissing_cat:',
        '::*:',
        'Gato besador cara',
        'Gato besador cara con ojos cerrados'
    ],
    '🙀': [
        'Gato vestido',
        ':weary_cat:',
        '::O:',
        'Gato Asustado',
        'Gato gritante',
        'Llorar caras gato en el miedo',
        'Cara gato vestido'
    ],
    '😿': [
        'Gato Llorando',
        ':crying_cat:',
        '::(:',
        'Gato triste',
        'Cara gato llorando'
    ],
    '😾': [
        'Gato pudor',
        ':pouting_cat:',
        'Grumpy Cat',
        'Cara del gato que puta'
    ],
    '🙈': [
        'Ver Mono No-Malvado',
        'Mono',
        ':see-no-evil_mokey:',
        ':see_no_evil_mokey:',
        ':monkey:',
        'Mizarú',
        'Ojos de cubierto de mono'
    ],
    '🙉': [
        'Escuchar Mono No-Malvado',
        'Mono',
        ':hear-no-evil_monkey:',
        ':hear_no_evil_monkey:',
        ':monkey:',
        'Kikazaru',
        'Ojos de cubierto de monos'
    ],
    '🙊': [
        'Habla-No-Mono Malvado',
        'Mono',
        ':speak-no-evil_monkey:',
        ':speak_no_evil_monkey:',
        ':monkey:',
        'Iwazaro',
        'Boca de la cubierta de monos',
        'Sin hablar'
    ],
    '🐵': [
        'Cara del mono',
        ':monkey_face:',
        'Mono',
        'Cabeza de mono'
    ],
    '🐒': [
        'Mono',
        ':monkey:',
        'Mono Cheeky'
    ],
    '🦍': [
        'Gorilla',
        ':gorilla:'
    ],
    '🐶': [
        'Cara de perro',
        ':dog_face:',
        'Perro',
        'Cachorro'
    ],
    '🐕': [
        'Perro',
        ':dog:',
        'Doggo',
        'Akita Inu'
    ],
    '🦮': [
        'Perro de Ojo',
        ':seeing_eye_dog:',
        'Perro Guía'
    ],
    '🐕‍🦺': [
        'Servicio de perro',
        ':service_dog:'
    ],
    '🐩': [
        'Poodle',
        ':poodle:',
        'Perro',
        'Poodle de Miniatura',
        'Poodle Estándar',
        'Puñetazo de juguete'
    ],
    '🐺': [
        'Lobo',
        ':wolf:',
        'Cara de lobo',
        ':gray:',
        ':grey:'
    ],
    '🦊': [
        'Zorro',
        ':fox:',
        'Cara zorro',
        ':orange:'
    ],
    '🦝': [
        'Cañón',
        ':raccoon:'
    ],
    '🐱': [
        'Cara gato',
        ':cat_face:',
        ':3',
        'Gatito',
        'Gatito'
    ],
    '🐈': [
        'Gato',
        ':cat:',
        'Gato doméstico',
        'Felino',
        'Casa'
    ],
    '🐈‍⬛': [
        'Gato negro',
        ':black_cat:',
        ':black:'
    ],
    '🦁': [
        'León',
        ':lion:',
        'Cara de León'
    ],
    '🐯': [
        'Cara Tigre',
        ':tiger_face:',
        'Tigre lindo'
    ],
    '🐅': [
        'Tigre',
        ':tiger:',
        'Tigre bengala'
    ],
    '🐆': [
        'Leopard',
        ':leopard:',
        'Leopardo africano',
        'Jaguar'
    ],
    '🐴': [
        'Cara del caballo',
        ':horse_face:',
        'Cabeza de caballo'
    ],
    '🐎': [
        'Caballo',
        ':horse:',
        'Caballo galopante',
        'Caballo'
    ],
    '🦄': [
        'Unicornio',
        ':unicorn:',
        'Cara de Unicornio'
    ],
    '🦓': [
        'Zebra',
        ':zebra:',
        'Cara de Zow',
        ':white:',
        ':black:'
    ],
    '🦌': [
        'Ciervo',
        ':deer:',
        'Pato',
        'Reno',
        'Stag'
    ],
    '🐮': [
        'Cara de vaca',
        ':cow_face:',
        'Vaca',
        'Vaca Feliz'
    ],
    '🐂': [
        'Ox',
        ':ox:',
        'Toro',
        'Bulloco',
        'Oxeno',
        'Pie'
    ],
    '🐃': [
        'Buffalo de agua',
        ':water_buffalo:',
        'Búfalo',
        'Buffalo de agua doméstico'
    ],
    '🐄': [
        'Vaca',
        ':cow:',
        'Vaca lechera'
    ],
    '🐷': [
        'Cara de cerdo',
        ':pig_fase:',
        'Cerdo',
        'Cabeza de cerdo',
        ':pink:'
    ],
    '🐖': [
        'Cerdo',
        ':pig:',
        'Hog',
        'Sow',
        ':pink:'
    ],
    '🐗': [
        'Jabalí',
        ':boar:',
        'Warthog',
        'Jabalí salvaje',
        'Cerdo Salvaje'
    ],
    '🐽': [
        'Nariz de cerdo',
        ':pig_nose:'
    ],
    '🐏': [
        'Ram',
        ':ram:',
        'Hoja'
    ],
    '🐑': [
        'Ewe',
        ':ewe:',
        'Lamb',
        'Hoja'
    ],
    '🐐': [
        'Cabra',
        ':goat:'
    ],
    '🐪': [
        'Camello',
        ':camel:',
        'Camello árabe',
        'Camello Dromedario',
        'Camello de un solo volcado'
    ],
    '🐫': [
        'Camello de dos jorobas',
        ':two-hump_camel:',
        ':two_hump_camel:',
        'Camello asiático',
        'Camello de Bactriano'
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
        'Cara del ratón',
        ':mouse_face:',
        'Ratón'
    ],
    '🐁': [
        'Ratón',
        ':mouse:',
        'Ratón dorado',
        'Rodente',
        'Ratones'
    ],
    '🐀': [
        'Rata',
        ':rat:',
        'Rodente'
    ],
    '🐹': [
        'Hámster',
        ':hamster:',
        'Cara hámster'
    ],
    '🐰': [
        'Cara de Conejo',
        ':rabbit_face:',
        'Bunny de Pascua'
    ],
    '🐇': [
        'Conejo',
        'Bunny',
        ':rabbit:',
        'Conejo de Bunny'
    ],
    '🐿️': [
        'Chipmunk',
        ':chipmunk:',
        'Ardilla'
    ],
    '🦔': [
        'Césped',
        ':hedgehog:'
    ],
    '🦇': [
        'Batio',
        ':bat:',
        'Batán',
        ':black:'
    ],
    '🐻': [
        'Oso',
        ':bear:',
        'Cara del oso',
        'Oso Teddy',
        ':brown:'
    ],
    '🐨': [
        'Koala',
        ':koala:',
        'Cara de Koala'
    ],
    '🐼': [
        'Panda',
        ':panda:',
        'Cara de Panda'
    ],
    '🦘': [
        'Canguro',
        ':kangaroo:',
        'Roo'
    ],
    '🦡': [
        'Insignia',
        ':badger:'
    ],
    '🦃': [
        'Pavo',
        ':turkey:',
        'Gracias a Turquía',
        'Pavo Salvaje'
    ],
    '🐔': [
        'Pollo',
        ':chicken:',
        'Hen'
    ],
    '🐓': [
        'Caché',
        ':cock:',
        'Rooster',
        'Cockerel'
    ],
    '🐣': [
        'Pollo eclosionante',
        ':hatching_chick:',
        'Pollo bebé',
        'Sombreado de pollo',
        ':yellow:'
    ],
    '🐤': [
        'Pollo bebé',
        ':baby_chick:',
        'Ave Amarilla',
        ':yellow:'
    ],
    '🐥': [
        'Pollo bebé frontal',
        ':front_baby_chick:',
        'Pollo bebé',
        'Pollo de pie',
        ':yellow:'
    ],
    '🐦': [
        'Pájaro',
        ':bird:'
    ],
    '🐧': [
        'Penguin',
        ':penguin:'
    ],
    '🕊️': [
        'Amor',
        ':Dove:',
        'Amor de la paz',
        ':white:'
    ],
    '🦅': [
        'Águila',
        ':Eagle:',
        'Águila calva'
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
        'Búho',
        ':owl:',
        ':brown:'
    ],
    '🦚': [
        'Peaco',
        ':peacock:'
    ],
    '🦜': [
        'Loro',
        ':parrot:'
    ],
    '🐸': [
        'Rana',
        ':frog:',
        'Sapo',
        'Rana de Rana',
        ':green:'
    ],
    '🐊': [
        'Cocodrilo',
        ':crocodile:',
        'Aligador',
        'Croc',
        ':green:'
    ],
    '🐢': [
        'Tortuga',
        ':turtle:',
        'Tortoise',
        ':green:'
    ],
    '🦎': [
        'Lagarto',
        ':lizard:',
        'Gecko',
        ':green:'
    ],
    '🐍': [
        'Serpiente',
        ':snake:',
        'Serpiente'
    ],
    '🐲': [
        'Cara del Dragón',
        ':dragon_face:',
        'Cabeza de Dragón'
    ],
    '🐉': [
        'Dragón',
        ':dragon:'
    ],
    '🦕': [
        'Saurópodo',
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
        'Ballena pomposa',
        ':spouting_whale:',
        'Ballena linda'
    ],
    '🐋': [
        'Ballena',
        ':whale:'
    ],
    '🐬': [
        'Delfín',
        ':dolphin:'
    ],
    '🐟': [
        'Pescado',
        ':fish:',
        'Pez de agua fresca'
    ],
    '🐠': [
        'Pez tropical',
        ':tropical_fish:',
        'Pescado',
        'Pez amarillo-azul'
    ],
    '🐡': [
        'Pez Brillante',
        ':blowfish:',
        'Fugu',
        'Pez calabaza'
    ],
    '🦈': [
        'Shark',
        ':shark:',
        'Gran Shark Blanco'
    ],
    '🐙': [
        'Octubre',
        ':octopus:'
    ],
    '🐚': [
        'Proyectil Espiral',
        ':spiral_shell:',
        'Caparazón',
        'Concha'
    ],
    '🐌': [
        'Caracol',
        ':snail:',
        'Slug',
        'Caracol del jardín'
    ],
    '🦋': [
        'Mariposa',
        ':butterfly:'
    ],
    '🐛': [
        'Fallo',
        ':bug:',
        'Oruga',
        'Insecto'
    ],
    '🐜': [
        'Ant',
        ':ant:',
        'Fallo',
        'Insecto'
    ],
    '🐝': [
        'Abeja',
        ':honeybee:',
        'Abeba',
        'Bumblebee',
        ':yellow:',
        ':black:'
    ],
    '🐞': [
        'Escarabajo',
        ':lady_beetle:',
        'Ladybird',
        'Ladybug',
        'Fallo'
    ],
    '🦗': [
        'Cricket',
        ':cricket:',
        'Hierba'
    ],
    '🕷️': [
        'Araña',
        ':spider:'
    ],
    '🦂': [
        'Escorpión',
        ':scorpion:'
    ],
    '🦟': [
        'Mosquito',
        ':mosquito:',
        ':black:'
    ],
    '🦀': [
        'Tocar',
        ':crab:',
        ':red:'
    ],
    '🦞': [
        'Lobo',
        ':lobster:'
    ],
    '🦐': [
        'Camarón',
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
        'Esquilo',
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
        'Bisón',
        ':bison:'
    ],
    '🦣': [
        'Mamá',
        ':mammoth:',
        ':brown:'
    ],
    '🦫': [
        'Castor',
        ':beaver:'
    ],
    '🐻‍❄️': [
        'Oso polar',
        ':polar_bear:',
        ':white:'
    ],
    '🦤': [
        'Dodo',
        ':dodo:'
    ],
    '🦭': [
        'Sello',
        ':seal:'
    ],
    '🪲': [
        'Escarabajo',
        ':beetle:'
    ],
    '🪳': [
        'Coca roca',
        ':cockroach:'
    ],
    '🪰': [
        'Vuela',
        ':fly:'
    ],
    '🪱': [
        'Gusano',
        ':worm:'
    ],
    '🦩': [
        'Flamingo',
        ':flamingo:'
    ],
    '🪹': [
        'Nido vacío',
        ':empty_nest:',
        'Aves',
        'Inicio'
    ],
    '🪺': [
        'Nido con huevos',
        ':nest_with_eggs:',
        'Aves',
        'Inicio'
    ]
};
/*symbols*/
emojis_language[lang][5] = {
    '💘': [
        'Corazón con flecha',
        ':heart_with_arrow:',
        'Flecha de Cupido',
        'Lovestruck',
        ':pink:'
    ],
    '💝': [
        'Corazón con cinta',
        ':heart_with_ribbon:',
        'Caja de chocolate',
        'Caja de regalo',
        'Corazón de regalo',
        ':red:'
    ],
    '💖': [
        'Sparkling Heart',
        ':sparkling_heart:',
        'Corazón de chispa',
        'Corazón brillante',
        'Corazón de estrellas',
        ':pink:'
    ],
    '💗': [
        'Corazón que crece',
        ':growing_heart:',
        'Múltiples corazones',
        'Corazón Triple',
        ':pink:'
    ],
    '💓': [
        'Corazón batiendo',
        ':beating_heart:',
        'Alarma Corazón',
        'Heartbeat',
        'Corazón Wifi',
        ':pink:'
    ],
    '💞': [
        'Corazones en revolución',
        ':revolving_hearts:',
        'Dos corazones',
        ':pink:'
    ],
    '💕': [
        'Dos corazones',
        ':two_hearts:',
        'Corazones pequeños',
        'Dos corazones rosa',
        ':pink:'
    ],
    '💟': [
        'Decoración del corazón',
        ':heart_decoration:',
        ':purple:'
    ],
    '❣️': [
        'Exclamación del corazón',
        ':heart_exclamation:',
        'Corazón por encima de punto',
        'Corazón Rojo como marca de exclusión',
        'Corazón pesado sin adorno de marca de exclusión',
        ':red:'
    ],
    '💔': [
        'Corazón roto',
        ':broken_heart:',
        'Corazón rompiente',
        'Bravos',
        'Corazón roto',
        ':red:'
    ],
    '❤️': [
        'Te amo',
        ':red_heart:',
        'Corazón Rojo',
        'Corazón',
        'Corazón de amor',
        'Corazón Rojo',
        ':red:'
    ],
    '🧡': [
        'Corazón Naranja',
        ':orange_heart:',
        'Te amo',
        ':orange:'
    ],
    '💛': [
        'Corazón amarillo',
        ':yellow_heart:',
        '#1 Snapchat BF',
        'Corazón de oro',
        'Te amo',
        ':yellow:'
    ],
    '💚': [
        'Corazón Verde',
        ':green_heart:',
        'Corazón celoso',
        'Te amo',
        ':green:'
    ],
    '💙': [
        'Corazón azul',
        ':blue_heart:',
        'Te amo',
        ':blue:'
    ],
    '💜': [
        'Corazón morado',
        ':purple_heart:',
        'Te amo',
        ':purple:'
    ],
    '🖤': [
        'Corazón Negro',
        ':black_heart:',
        'Corazón Oscuro',
        'Te amo',
        ':black:'
    ],
    '🤍': [
        'Corazón Blanco',
        ':white_heart:',
        'Te amo',
        ':white:'
    ],
    '🤎': [
        'Corazón marrón',
        ':brown_heart:',
        'Te amo',
        ':brown:'
    ],
    '💯': [
        'Cien puntos',
        ':hundred_points:',
        '100',
        '%',
        'Mantenerlo 100',
        'Puntuación perfecta',
        'Símbolo de Cien Puntos'
    ],
    '💬': [
        'Globo de voz',
        ':speech_balloon:',
        'Burbuja de Chat',
        'Burbuja de voz',
        ':white:'
    ],
    '💭': [
        'Globo Pensado',
        ':thought_balloon:',
        'Pensando Bubble',
        'Burbuja de Pensamiento',
        ':white:'
    ],
    '💤': [
        'Zzz',
        ':zzz:',
        'Tiempo de cama',
        'Apoya',
        'Dormir',
        'Señal de sueño',
        'Símbolo de dormir'
    ],
    '♠': [
        'Traje de palo',
        ':spade_suit:',
        'Spades',
        'Black Spade Suit'
    ],
    '♥': [
        'Traje de Corazón',
        ':heart_suit:',
        'Tarjeta con corazón',
        'Corazones',
        'Traje de Corazón Negro'
    ],
    '♦': [
        'Traje de Diamante',
        ':diamond_suit:',
        'Diamantes',
        'Traje de Diamante Negro'
    ],
    '♣': [
        'Traje de Club',
        ':club_suit:',
        'Clubes',
        'Traje de Club Negro'
    ],
    '🏧': [
        'Cartel ATM',
        ':atm_sign:',
        'ATM',
        'Máquina automatizada de Telleer',
        ':blue:'
    ],
    '🎧': [
        'Headphone',
        ':headphone:',
        'Auricular',
        'iPod',
        'Auriculares'
    ],
    '🎵': [
        'Nota musical',
        ':musical_note:',
        'Par de Octavo Notas',
        'Par de cuádruples con vigas',
        'Nota de Música'
    ],
    '🎶': [
        'Notas musicales',
        ':musical_notes:',
        'Música',
        'Notas de Música',
        'Cantar',
        'Múltiples notas musicales'
    ],
    '🔔': [
        'Campana',
        ':bell:',
        'Campana de libertad',
        'Ringer',
        'Campana',
        ':yellow:'
    ],
    '🔕': [
        'Campana con barra',
        ':bell_with_slash:',
        'Notificaciones',
        'Teléfono desactivado',
        'Campana silenciada',
        'Campana con trazo de cancelación',
        ':yellow:'
    ],
    '🔈': [
        'Volumen bajo del altavoz',
        ':speaker_low_volum:',
        'Volumen',
        'Altavoz'
    ],
    '🔉': [
        'Volumen Medio del Altavoz',
        ':speaker_medium_volume:',
        'Reducir volumen',
        'Altavoz con volumen medio',
        'Altavoz con una onda de sonido'
    ],
    '🔊': [
        'Volumen Alto Altavoz',
        ':speaker_high_volume:',
        'Aumentar volumen',
        'Altavoz con tres ondas sonoras'
    ],
    '🔇': [
        'Altavoz silenciado',
        ':muted_speaker:',
        'Silenciar volumen',
        'Altavoz con trazo de cancelación'
    ],
    '📢': [
        'Loudspeaker',
        ':loudspeaker:',
        'Anuncio',
        'Sistema PA',
        'Altavoz de dirección pública'
    ],
    '⛔': [
        'Sin Entrada',
        ':no_entry:',
        ':red:'
    ],
    '🚫': [
        'Prohibida',
        ':prohibited:',
        'Baneado',
        'Trasera de Círculo',
        'No',
        'Círculo Rojo Cruzado',
        'Restringido',
        'No hay signo de entrada',
        ':red:'
    ],
    '🚳': [
        'Sin bicicletas',
        ':no_bicycles:',
        'Señal de Bicicletas',
        ':red:',
        ':black:'
    ],
    '🚭': [
        'Sin fumar',
        ':no_smoking:',
        'Símbolo sin tabaco',
        ':red:',
        ':black:'
    ],
    '🚯': [
        'Sin Camadera',
        ':no_littering:',
        'No Sin Camada Símbolo',
        ':red:',
        ':black:'
    ],
    '🚱': [
        'Agua no Potable',
        ':non-potable_water:',
        ':non_potable_water:',
        'Sin agua',
        'Sin agua potable',
        'Símbolo de Agua No Potable',
        ':red:',
        ':black:'
    ],
    '🚷': [
        'No hay peatones',
        ':no_pedestrians:',
        'No hay gente',
        'Sin andar',
        ':red:',
        ':black:'
    ],
    '🔞': [
        'Nadie menor de 18 años',
        ':no_one_under_18:',
        'NSFW',
        'Nadie debajo de dieciocho símbolos',
        '18',
        ':red:',
        ':black:'
    ],
    '📵': [
        'No hay teléfonos móviles',
        ':no_mobile_phones:',
        'No hay teléfonos móviles',
        'Sin teléfonos',
        'Sin Smartphones',
        ':red:',
        ':black:'
    ],
    '☢️': [
        'Radioactive',
        ':radioactive:',
        'Símbolo de radiación internacional',
        'Nuclear',
        'Señal Radioactiva',
        ':orange:'
    ],
    '☣️': [
        'Bioriesgo',
        ':biohazard:',
        'Señal de Bioriesgo',
        ':orange:'
    ],
    '⬆️': [
        'Botón de flecha arriba',
        ':up_arrow_button:',
        'Punto de flecha arriba',
        'Flecha negra ascendente',
        ':blue:'
    ],
    '↗️': [
        'Botón de flecha derecha arriba',
        ':up-right_arrow_button:',
        ':up_right_arrow_button:',
        'Flecha Diagonal hacia arriba derecha',
        'Flecha noreste',
        ':blue:'
    ],
    '➡️': [
        'Botón de flecha derecha',
        ':right_arrow_button:',
        'Puntuación de flecha derecha',
        'Flecha negra hacia la derecha',
        ':blue:'
    ],
    '↘️': [
        'Botón de flecha derecha abajo',
        ':down-right_arrow_button:',
        ':down_right_arrow_button:',
        'Flecha de abajo derecha diagonal',
        'Flecha sureste',
        ':blue:'
    ],
    '⬇️': [
        'Botón de flecha abajo',
        ':down_arrow_button:',
        'Puntuación de flecha abajo',
        'Flecha negra descendente',
        ':blue:'
    ],
    '↙️': [
        'Botón de flecha abajo izquierda',
        ':down-left_arrow_button:',
        ':down_left_arrow_button:',
        'Flecha de abajo izquierda diagonal',
        'Flecha sudoeste',
        ':blue:'
    ],
    '⬅️': [
        'Botón de flecha izquierda',
        ':left_arrow_button:',
        'Punto izquierdo de flecha',
        'Flecha negra izquierda',
        ':blue:'
    ],
    '↖️': [
        'Botón de flecha superior izquierda',
        ':up-left_arrow_button:',
        ':up_left_arrow_button:',
        'Flecha Diagonal arriba-izquierda',
        'Flecha noroeste',
        ':blue:'
    ],
    '↕️': [
        'Botón Arriba Flecha Abajo',
        ':up-down_arrow_button:',
        ':up_down_arrow_button:',
        'Flechas verticales',
        'Flecha Abajo',
        ':blue:'
    ],
    '↔️': [
        'Botón izquierdo-derecha de flecha',
        ':left-right_arrow_button:',
        ':left_right_arrow_button:',
        'Flechas horizontales',
        'Flechas lateral',
        'Flecha derecha izquierda',
        ':blue:'
    ],
    '↩️': [
        'Botón izquierdo de curva de flecha derecha',
        ':right_arrow_curving_left_button:',
        'Respuesta por email',
        'Flecha curvada izquierda',
        'Flecha de izquierda con Hook',
        ':blue:'
    ],
    '↪️': [
        'Botón derecho de curvatura de flecha izquierda',
        ':left_arrow_curving_right_button:',
        'Reenviar Email',
        'Flecha curvada derecha',
        'Flecha hacia la derecha con Hook',
        ':blue:'
    ],
    '⤴️': [
        'Botón de curvatura de flecha derecha',
        ':right_arrow_curving_up_button:',
        'Punto de flecha hacia la derecha y curva hacia arriba',
        ':blue:'
    ],
    '⤵️': [
        'Botón Abajo de curvatura de flecha derecha',
        ':right_arrow_curving_down_button:',
        'Flecha abajo curvada',
        'Puntuación de flechas hacia la derecha y curva hacia abajo',
        ':blue:'
    ],
    '🔃': [
        'Botón de flechas verticales en sentido horario',
        ':clockwise_vertical_button:',
        'Mezclar hacia abajo y hacia arriba flechas abiertas hacia abajo y hacia arriba',
        ':blue:'
    ],
    '🔄': [
        'Botón de flechas en sentido contrario',
        ':counterclockwise_button:',
        'Refrescar',
        'Rotar',
        'Cambiar',
        'Flechas a la izquierda',
        'Fuente hacia abajo y hacia arriba hacia arriba en sentido antihorario',
        ':blue:'
    ],
    '🔙': [
        'Flecha trasera',
        ':back_arrow:',
        'Atrás',
        'Volver con flecha izquierda arriba',
        ':black:'
    ],
    '🔚': [
        'Fin flecha',
        ':end_arrow:',
        'Fin',
        'Finalizar con flecha izquierda superior',
        ':black:'
    ],
    '🔛': [
        '¡Enseguido! Flecha',
        ':on_arrow:',
        'En',
        'Encender con marca de exclusión con flecha derecha izquierda superior',
        ':black:'
    ],
    '🔜': [
        'Flecha pronto',
        ':soon_arrow:',
        'Pronto',
        'Pronto con flecha superior hacia la derecha',
        ':black:'
    ],
    '🔝': [
        'Flecha superior',
        ':top_arrow:',
        'Subir',
        'Arriba con flecha hacia arriba',
        ':black:'
    ],
    '🛐': [
        'Lugar de adoración',
        ':place_of_worship:',
        'Edificio religioso',
        ':purple:'
    ],
    '⚛️': [
        'Símbolo Átomo',
        ':atom_symbol:',
        ':purple:'
    ],
    '🕉️': [
        'Símbolo Om',
        ':om_symbol:',
        'Om',
        'Aumkara',
        'Omkara',
        'Pranava',
        ':purple:'
    ],
    '✡️': [
        'Estrella de David',
        ':star_of_david:',
        'David Magen',
        ':purple:'
    ],
    '☸️': [
        'Rueda de Dharma',
        ':wheel_of_dharma:',
        'Yelmo',
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
        'Cruz cristiana',
        ':purple:'
    ],
    '☦️': [
        'Cruz ortodoxa',
        ':orthodox_cross:',
        ':purple:'
    ],
    '☪️': [
        'Estrella y media',
        ':star_and_crescent:',
        ':purple:'
    ],
    '☮️': [
        'Símbolo de paz',
        ':peace:',
        'Cartel de Paz',
        ':purple:'
    ],
    '🕎': [
        'Menorah',
        ':menorah:',
        'Candelabrum',
        'Cándulas',
        'Chanukia',
        'Menorah',
        'Menorah con nueve ramas',
        ':purple:'
    ],
    '🔯': [
        'Estrella punteada de seis puntos',
        ':dotted_six-pointed_star:',
        ':dotted_six_pointed_star:',
        'Seis estrellas punteadas con punto medio',
        ':purple:'
    ],
    '♈': [
        'Aries',
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
        'Cancer',
        ':cancer:',
        ':zodiac:',
        'Zodíaco',
        ':purple:'
    ],
    '♌': [
        'León',
        ':leo:',
        ':zodiac:',
        'Zodíaco',
        ':purple:'
    ],
    '♍': [
        'Virgo',
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
        'Escorpio',
        ':scorpio:',
        ':zodiac:',
        'Escorpio',
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
        'Capricorno',
        ':capricorn:',
        ':zodiac:',
        'Zodíaco',
        ':purple:'
    ],
    '♒': [
        'Acuario',
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
        'Saltar símbolo adelante',
        'Triángulo doble de punto derecho negro con barra vertical',
        ':skip_forward_button:',
        'Botón siguiente de pista',
        ':blue:'
    ],
    '⏮️': [
        'Saltar Símbolo Retroceso',
        'Triángulo doble de puntos izquierdo negro con barra vertical',
        ':skip_backward_button:',
        'Botón de última pista',
        'Pista anterior',
        ':blue:'
    ],
    '⏯️': [
        'Reproducir o pausar el botón',
        'Triángulo de puntaje derecho negro con doble barra vertical',
        ':play_button:',
        ':pause_button:',
        ':play_or_pause_button:',
        'Reproducir símbolo',
        'Pausar símbolo',
        ':blue:'
    ],
    '🔀': [
        'Botón Aleatorio de Pistas',
        ':shuffle_tracks_button:',
        'Flechas retorcidas hacia la derecha',
        ':blue:'
    ],
    '🔁': [
        'Repetir botón',
        ':repeat_button:',
        'Símbolo de bucle',
        'Retwittear',
        'Derecha a la derecha y izquierda flechas abiertas del círculo abierto',
        ':blue:'
    ],
    '🔂': [
        'Repetir botón único',
        ':repeat_single_button:',
        'Flechas de Círculo con número 1',
        'Bucle Una vez que el símbolo',
        'Repetir símbolo de pista única',
        'A la derecha y a la izquierda se encuentran las flechas de círculo abierto con una capa corclada',
        ':blue:'
    ],
    '▶️': [
        'Reproducir Botón',
        ':play_button:',
        'Triángulo derecho',
        'Triángulo de puntaje derecho',
        'Triángulo de puntaje derecho negro',
        ':blue:'
    ],
    '◀️': [
        'Botón Invertir',
        ':reverse_button:',
        'Triángulo izquierdo',
        'Triángulo de punto izquierdo',
        'Triángulo de puntaje izquierdo negro',
        ':blue:'
    ],
    '🔼': [
        'Botón Arriba',
        ':upwards_button:',
        'Triángulo Arriba',
        'Triángulo ascendente de puntaje',
        'Triángulo rojo pequeño con punta ascendente',
        ':blue:'
    ],
    '🔽': [
        'Botón Abajo',
        ':downwards_button:',
        'Triángulo abajo',
        'Triángulo descendente',
        'Triángulo Rojo Pequeño de Punto de Bajar',
        ':blue:'
    ],
    '⏩': [
        'Botón de avance rápido',
        ':fast-forward_button:',
        ':fast_forward_button:',
        'Avance rápido',
        'Símbolo de avance rápido',
        'Triángulo doble de puntaje derecho negro',
        ':blue:'
    ],
    '⏪': [
        'Fast Reverse Button',
        ':fast_reverse_button:',
        'Rewind',
        'Rebobinar símbolo',
        'Triángulo doble de puntaje izquierdo negro',
        ':blue:'
    ],
    '⏫': [
        'Botón Rápido',
        ':fast_up_button:',
        'Triángulo doble de puntaje superior',
        'Triángulo doble de puntos ascendentes negros',
        ':blue:'
    ],
    '⏬': [
        'Botón Abajo',
        ':fast_down_button:',
        'Triángulo doble de puntos bajos',
        'Triángulo doble descendente negro',
        ':blue:'
    ],
    '⏹️': [
        'Botón de parada',
        ':stop_button:',
        'Parar',
        'Detener símbolo',
        'Cuadrado negro para detener',
        ':blue:'
    ],
    '⏏️': [
        'Botón Eyectar',
        ':eject_button:',
        'Eject Symbol',
        ':blue:'
    ],
    '🎦': [
        'Cinema',
        ':cinema_button:',
        'Pantalla de Cinema',
        'Películas',
        'Película',
        'Símbolo de Cinema',
        'Grabando',
        ':blue:'
    ],
    '📶': [
        'Barras de antena',
        ':antenna_bars_button:',
        'Barras de vigilancia',
        'Intensidad de señal',
        'Stairs',
        'Símbolo de fuerza de señal',
        'Antena con barras',
        ':blue:'
    ],
    '✖️': [
        'Multiplicar',
        ':multiply:',
        'Veces',
        'Símbolo de multiplicación',
        'Multiplicación X pesada',
        ':black:'
    ],
    '➕': [
        'Plus',
        ':plus:',
        'Símbolo Plus',
        'Cartel de Heavy Plus',
        ':black:'
    ],
    '➖': [
        'Minus',
        ':minus:',
        'Minus Symbol',
        'Cartel pesado menos',
        ':black:'
    ],
    '➗': [
        'Dividir',
        ':divide:',
        'Símbolo de división',
        'Cartel de División Pesada',
        ':black:'
    ],
    '🟰': [
        'Cartel de Equales Pesados',
        ':heavy_equals_sign:',
        'Iguales',
        'Resultado',
        ':black:'
    ],
    '♾️': [
        'Infinidad',
        ':infinity:',
        'Cartel Permanente de Papel'
    ],
    '‼️': [
        'Marca de doble exclusión',
        ':double_exclamation_mark:',
        'Marca de doble exclusión roja',
        ':red:'
    ],
    '⁉️': [
        'Marca de Exclamación de Pregunta',
        ':exclamation_question_mark:',
        'Marca de Exclamación Roja y Marca de Pregunta',
        ':red:'
    ],
    '❓': [
        'Marca de Pregunta',
        ':question_mark:',
        'Marca de Pregunta Roja',
        'Ornamento de la pregunta negra',
        ':red:'
    ],
    '❔': [
        'Marca de pregunta blanca',
        ':white_question_mark:',
        ':question_mark:',
        'Marca de pregunta blanca',
        'Ornamento de la pregunta blanca',
        ':white:'
    ],
    '❗': [
        'Marca de exclusión',
        ':exclamation_mark:',
        'Marca de Exclamación Roja',
        'Símbolo de marca de exclusión pesada',
        ':red:'
    ],
    '❕': [
        'Marca de exclusión blanca',
        ':white_exclamation_mark:',
        ':exclamation_mark:',
        'Ornamento de marca de exclusión blanca',
        ':white:'
    ],
    '⭕': [
        'Círculo rojo hueco',
        ':hollow_red_circle:',
        'Círculo',
        'Corregido',
        'Círculo Rojo',
        'Marca del círculo',
        'Círculo grande pesado',
        ':red:'
    ],
    '☑️': [
        'Caja con verificación',
        ':check_box_with_check:',
        'V',
        'Casilla',
        'Marcar como casilla',
        'Caja de votos con cheque'
    ],
    '✔️': [
        'Marcar marca',
        ':check_mark:',
        'V',
        'Comprobar',
        'Marcar',
        'Checkmark',
        'Marca de verificación pesada',
        ':black:'
    ],
    '❌': [
        'Marca cruzada',
        ':cross_mark:',
        'Cruzado',
        'X',
        ':red:'
    ],
    '✅': [
        'Marcar botón',
        ':check_mark_button:',
        'V',
        'Marca verde',
        'Tick verde',
        'Marcar marca',
        'Marca pesada blanca',
        ':green:'
    ],
    '❎': [
        'Botón de marca cruzada',
        ':cross_mark_button:',
        'Cruzado',
        'X',
        'Marca X',
        'Marca cruz negativa cuadrada',
        ':green:'
    ],
    '#️⃣': [
        'Señal de Número de teclado',
        ':hash_key:',
        '#',
        'Clave Hash',
        'Etiqueta',
        'Octubre',
        'Llave de Libra',
        'Signo de número',
        ':blue:'
    ],
    '*️⃣': [
        'Keycap Asterisk',
        ':asterisk:',
        'Gorro de teclas estrella',
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
        'Digito uno del tapón clave'
    ],
    '2️⃣': [
        'Número 2',
        ':number_2:',
        'Dígito de Teclado Dos'
    ],
    '3️⃣': [
        'Número 3',
        ':number_3:',
        'Digito del tapón de teclas tres'
    ],
    '4️⃣': [
        'Número 4',
        ':number_4:',
        'Cuatro dígitos del cabezal'
    ],
    '5️⃣': [
        'Número 5',
        ':number_5:',
        'Resumen clave de cinco dígitos'
    ],
    '6️⃣': [
        'Número 6',
        ':number_6:',
        'Seis dígitos'
    ],
    '7️⃣': [
        'Número 7',
        ':number_7:',
        'Keycap Digit Seven'
    ],
    '8️⃣': [
        'Número 8',
        ':number_8:',
        'Digito del tapón del teclado Ocho'
    ],
    '9️⃣': [
        'Número 9',
        ':number_9:',
        'Ninc dígito de gorra'
    ],
    '🔟': [
        'Número 10',
        ':number_10:',
        'Keycap: 10',
        '10',
        'Digito del tapón angular diez'
    ],
    '🔠': [
        'Input Latin Uppercase',
        ':input_latin_uppercase:',
        'ABCD',
        'Mayúsculas',
        'Símbolo de entrada para letras mayúsculas',
        'Símbolo de entrada para letras de capital latinas',
        ':blue:'
    ],
    '🔡': [
        'Input Latin Lowercase',
        ':input_latin_lowercase:',
        'abcd',
        'Minúsculas',
        'Símbolo de entrada para minúsculas',
        'Símbolo de entrada para letras pequeñas latinas',
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
        'Símbolo de entrada para Symbols',
        ':input_symbols:',
        'Símbolos',
        'Entrada del símbolo',
        ':blue:'
    ],
    '🔤': [
        'Input Latin Letters',
        ':input_latin_letters:',
        'abr',
        'Alfabeto',
        'Letras',
        'Símbolo de entrada para letras',
        'Símbolo de entrada para letras latinas',
        ':blue:'
    ],
    '🅰️': [
        'Un botón (Tipo de sangre)',
        ':a_blood:',
        'Tipo de sangre A',
        'Letra A',
        'Carta de capital latino negativa A',
        ':red:'
    ],
    '🆎': [
        'Botón AB (Tipo de sangre)',
        ':ab_blood:',
        'Letras AB',
        'Tipo de sangre AB',
        'AB negativo cuadrado',
        ':red:'
    ],
    '🅱️': [
        'Botón B (Tipo de sangre)',
        ':b_blood:',
        'Letra B',
        'Tipo de sangre B',
        'Carta B de Capital latina con cuadrados negativos',
        ':red:'
    ],
    '🆑': [
        'Botón de CL',
        ':cl_button:',
        'Claro',
        'Borrar botón',
        'Señal de CL',
        'CL cuadrado',
        'Letras CL',
        ':red:'
    ],
    '🆒': [
        'Botón de paja',
        ':cool_button:',
        'Plaza de la herramienta',
        'Señal de Cool',
        'Herramienta cuadrada',
        ':blue:'
    ],
    '🆓': [
        'Botón libre',
        ':free_button:',
        'Gratis',
        'Señal Gratis',
        'Gratis',
        ':blue:'
    ],
    'ℹ️': [
        'Información',
        ':info_button:',
        'Información',
        'Minúsculas I',
        'Información turística',
        'Fuente de información',
        ':blue:'
    ],
    '🆔': [
        'Botón ID',
        ':id_button:',
        'ID',
        'Identificación',
        'Señal de identificación',
        'ID cuadrado',
        ':purple:'
    ],
    '🆕': [
        'Nuevo botón',
        ':new_button:',
        'Nuevo',
        'Nuevo cartel',
        'Nuevo cuadrado',
        ':blue:'
    ],
    '🅾️': [
        'Botón O (Tipo de sangre)',
        ':0_blood:',
        'Tipo de sangre O',
        '0',
        'Carta Capital latina cuadrada negativa',
        'Letra O',
        ':red:'
    ],
    '🆗': [
        'Botón OK',
        ':ok_button:',
        'OK',
        'Vale',
        'Cuadrado',
        'Firma OK',
        'Cuadrado bien',
        ':blue:'
    ],
    '🅿️': [
        'Botón P',
        ':p_button:',
        ':parking_sign:',
        'Cartel de estacionamiento',
        'Carta Capital latina cuadrada negativa',
        'Letra P',
        ':blue:'
    ],
    '🆘': [
        'Botón SOS',
        ':sos_button:',
        'Señal del Distrito',
        'Emergencia',
        'SOS',
        'Señal SOS',
        'SOS cuadrados',
        'Ayuda',
        ':red:'
    ],
    '🆙': [
        '¡Arriba! Botón',
        ':up_button:',
        'Subir de nivel',
        'Subir',
        'Firma',
        'Cuadrado con marca de exclusión',
        ':blue:'
    ],
    '🆚': [
        'Botón Vs',
        ':vs_button:',
        'Vs cuadrados',
        ':orange:'
    ],
    '🆖': [
        'Botón NG',
        ':ng_button:',
        'GNN cuadrado',
        'Sin signo bueno',
        'No Bueno',
        ':ng:',
        'Blooper',
        ':blue:'
    ],
    '🔴': [
        'Círculo Rojo',
        ':red_circle:',
        'Círculo rojo grande',
        ':red:'
    ],
    '🟠': [
        'Círculo naranja',
        ':orange_circle:',
        'Círculo naranja grande',
        ':orange:'
    ],
    '🟡': [
        'Círculo amarillo',
        ':yellow_circle:',
        'Círculo Amarillo Grande',
        ':yellow:'
    ],
    '🟢': [
        'Círculo verde',
        ':green_circle:',
        'Círculo verde grande',
        ':green:'
    ],
    '🔵': [
        'Círculo azul',
        ':blue_circle:',
        'Círculo azul grande',
        ':blue:'
    ],
    '🟣': [
        'Círculo Morado',
        ':purple_circle:',
        'Círculo púrpura grande',
        ':purple:'
    ],
    '🟤': [
        'Círculo marrón',
        ':brown_circle:',
        'Círculo marrón grande',
        ':brown:'
    ],
    '⚫': [
        'Círculo negro',
        ':black_circle:',
        'Círculo negro medio',
        ':black:'
    ],
    '⚪': [
        'Círculo blanco',
        ':white_circle:',
        'Círculo Blanco Medio',
        ':white:'
    ],
    '🟥': [
        'Plaza Roja',
        ':red_square:',
        'Cuadrado rojo grande',
        ':red:'
    ],
    '🟧': [
        'Cuadrado Naranja',
        ':orange_square:',
        'Cuadrado naranja grande',
        ':orange:'
    ],
    '🟨': [
        'Cuadrado amarillo',
        ':yellow_square:',
        'Cuadrado amarillo grande',
        ':yellow:'
    ],
    '🟩': [
        'Cuadrado verde',
        ':green_square:',
        'Cuadrado verde grande',
        ':green:'
    ],
    '🟦': [
        'Plaza Azul',
        ':blue_square:',
        'Cuadrado azul grande',
        ':blue:'
    ],
    '🟪': [
        'Cuadrado morado',
        ':purple_square:',
        'Cuadrado púrpura grande',
        ':purple:'
    ],
    '🟫': [
        'Cuadrado marrón',
        ':brown_square:',
        'Cuadrado marrón grande',
        ':brown:'
    ],
    '⬛': [
        'Cuadrado grande negro',
        ':black_large_square:',
        ':black:'
    ],
    '⬜': [
        'Cuadrado grande blanco',
        ':white_large_square:',
        ':white:'
    ],
    '◼️': [
        'Plaza Media Negra',
        ':black_medium_square:',
        ':black:'
    ],
    '◻️': [
        'Plaza Blanca Media',
        ':white_medium_square:',
        ':white:'
    ],
    '◾': [
        'Cuadrado pequeño mediano negro',
        ':black_medium_small_square:',
        ':black:'
    ],
    '◽': [
        'Cuadrado pequeño mediano blanco',
        ':white_medium_small_square:',
        ':white:'
    ],
    '▪️': [
        'Cuadrado pequeño negro',
        ':black_small_square:',
        ':black:'
    ],
    '▫️': [
        'Cuadrado pequeño blanco',
        ':white_small_square:',
        ':white:'
    ],
    '💠': [
        'Forma de diamante con un punto interior',
        ':diamond_shape_with_dot:',
        'Cutenacidad',
        'Flor de diamante',
        'Kawaii'
    ],
    '🔶': [
        'Diamante naranja grande',
        ':large_orange_diamond:',
        ':orange:'
    ],
    '🔷': [
        'Diamante azul grande',
        ':large_blue_diamond:',
        ':blue:'
    ],
    '🔸': [
        'Diamante Naranja pequeño',
        ':small_orange_diamond:',
        ':orange:'
    ],
    '🔹': [
        'Diamante azul pequeño',
        ':small_blue_diamond:',
        ':blue:'
    ],
    '🔺': [
        'Triángulo rojo apuntado',
        ':red_triangle_pointed_up:',
        'Triángulo rojo ascendente',
        ':red:'
    ],
    '🔻': [
        'Triángulo rojo punteado abajo',
        ':red_triangle_pointed_down:',
        'Triángulo rojo de punto de abajo',
        ':red:'
    ],
    '🔳': [
        'Botón cuadrado blanco',
        ':white_square_button:',
        ':white:',
        ':black:'
    ],
    '🔲': [
        'Botón cuadrado negro',
        ':black_square_button:',
        ':white:',
        ':black:'
    ],
    '©️': [
        'Copyright',
        ':copyright:',
        ':c:',
        'Cartel de Copyright'
    ],
    '®️': [
        'Registrado',
        ':registered:',
        ':r:',
        'Señal registrada'
    ],
    '™️': [
        'Marca',
        ':trade_mark:',
        ':tm:',
        'Marca',
        'Señal de marca'
    ],
    '🛅': [
        'Maletín izquierdo',
        ':left_luggage:',
        'Bag con clave',
        'Casilla Bloqueada',
        ':blue:'
    ],
    '🛄': [
        'Reclamo de maletas',
        ':baggage_claim:',
        ':blue:'
    ],
    '🛃': [
        'Aduanas',
        ':customs:',
        ':blue:'
    ],
    '🛂': [
        'Control de pasaporte',
        ':passport_control:',
        'Control del borde',
        ':blue:'
    ],
    '🚰': [
        'Símbolo de agua potable',
        ':potable_water_symbol:',
        'Sediento',
        'Sediento',
        'Grifo de agua',
        'Calabaza de agua'
    ],
    '🇦': [
        'Letra A',
        ':letter_a:',
        ':a:',
        'Carta A del indicador regional'
    ],
    '🇧': [
        'Letra B',
        ':letter_b:',
        ':b:',
        'Carta B del indicador regional'
    ],
    '🇨': [
        'Letra C',
        ':letter_c:',
        ':c:',
        'Carta C del indicador regional'
    ],
    '🇩': [
        'Letra D',
        ':letter_d:',
        ':d:',
        'Carta D del indicador regional'
    ],
    '🇪': [
        'Letra E',
        ':letter_e:',
        ':e:',
        'Carta E del símbolo regional del indicador'
    ],
    '🇫': [
        'Letra F',
        ':letter_f:',
        ':f:',
        'Carta F del indicador regional'
    ],
    '🇬': [
        'Letra G',
        ':letter_g:',
        ':g:',
        'Carta G del indicador regional'
    ],
    '🇭': [
        'Letra H',
        ':letter_h:',
        ':h:',
        'Carta H del símbolo regional del indicador'
    ],
    '🇮': [
        'Carta I',
        ':letter_i:',
        ':i:',
        'Carta de símbolos del indicador regional I'
    ],
    '🇯': [
        'Carta J',
        ':letter_j:',
        ':j:',
        'Indicador regional de símbolo J'
    ],
    '🇰': [
        'Letra K',
        ':letter_k:',
        ':k:',
        'Carta K del indicador regional'
    ],
    '🇱': [
        'Letra L',
        ':letter_l:',
        ':l:',
        'Carta L del indicador regional'
    ],
    '🇲': [
        'Letra M',
        ':letter_m:',
        ':m:',
        'Carta M del indicador regional'
    ],
    '🇳': [
        'Letra N',
        ':letter_n:',
        ':n:',
        'Carta N del indicador regional'
    ],
    '🇴': [
        'Letra O',
        ':letter_o:',
        ':o:',
        'Indicador regional de símbolo O'
    ],
    '🇵': [
        'Letra P',
        ':letter_p:',
        ':p:',
        'Carta P del símbolo del indicador regional'
    ],
    '🇶': [
        'Letra Q',
        ':letter_q:',
        ':q:',
        'Indicador regional de símbolo Q'
    ],
    '🇷': [
        'Letra R',
        ':letter_r:',
        ':r:',
        'Indicador regional de símbolo R'
    ],
    '🇸': [
        'Letra S',
        ':letter_s:',
        ':s:',
        'Carta S del símbolo regional del indicador'
    ],
    '🇹': [
        'Letra T',
        ':letter_t:',
        ':t:',
        'Carta T del indicador regional'
    ],
    '🇺': [
        'Carta U',
        ':letter_u:',
        ':u:',
        'Carta U del indicador regional'
    ],
    '🇻': [
        'Letra V',
        ':letter_v:',
        ':v:',
        'Símbolo del indicador regional V'
    ],
    '🇼': [
        'Letra W',
        ':letter_w:',
        ':w:',
        'Carta de símbolos del indicador regional W'
    ],
    '🇽': [
        'Letra X',
        ':letter_x:',
        ':x:',
        'Indicador Regional del símbolo X'
    ],
    '🇾': [
        'Letra Y',
        ':letter_y:',
        ':y:',
        'Carta Y del símbolo del indicador regional'
    ],
    '🇿': [
        'Letra Z',
        ':letter_z:',
        ':z:',
        'Indicador regional de símbolo Z'
    ],
    '💌': [
        'Carta de amor',
        ':love_letter:',
        'Sobre Corazón',
        'Nota del amor'
    ],
    '🚮': [
        'Pon la Camada en su símbolo de lugar',
        ':put_litter_in_bing_sign:',
        'Camada en Señal de Papelera',
        'Coloca la Camada en la Basura',
        'Persona con Papelera'
    ],
    '♿': [
        'Silla de rueda',
        ':wheelchair_symbol:',
        'Batería Accesible'
    ],
    '🚹': [
        'Símbolo masculino',
        ':mens_symbol:',
        'Símbolo masculino',
        'Baño Mens',
        'Cuarto de baño masculino',
        'WC masculino',
        ':blue:'
    ],
    '🚺': [
        'Símbolo de mujeres',
        ':womens_symbol:',
        'Símbolo de mujeres',
        'Baño femenino',
        'Baño femenino',
        'Familiar WC',
        ':purple:',
        ':pink:'
    ],
    '🚻': [
        'Baño',
        ':restroom:',
        'Señal de Bathroom',
        'Cartel de baño',
        'Señal WC',
        ':blue:'
    ],
    '🚼': [
        'Símbolo bebé',
        ':baby_symbol:',
        'Estación de cambio de bebé',
        'Símbolo de cambio de bebé',
        'Vivero',
        ':orange:'
    ],
    '🚾': [
        'Closet de agua',
        ':wc:',
        'CR',
        'Baño WC',
        ':blue:'
    ],
    '⚠️': [
        'Señal de Advertencia',
        ':warning_sign:',
        'Símbolo de alerta',
        ':yellow:'
    ],
    '🚸': [
        'Descendientes',
        ':children_crossing:',
        'Chicos Cruzando',
        'Coincidiendo con la escuela',
        ':yellow:'
    ],
    '🔅': [
        'Símbolo bajo brillo',
        ':low_brightness_symbol:',
        'Botón oscuro',
        'Reducir brillo'
    ],
    '🔆': [
        'Símbolo de brillo alto',
        ':high_brightness_symbol:',
        'Aumentar brillo',
        'Botón brillante'
    ],
    '📳': [
        'Modo de vibración',
        ':vibration_mode:',
        'Corazón del teléfono',
        'Modo silencioso',
        ':orange:'
    ],
    '📴': [
        'Teléfono móvil apagado',
        ':mobile_phone_off:',
        ':orange:'
    ],
    '〰️': [
        'Onda',
        'Guión ondulado',
        ':wave:'
    ],
    '💱': [
        'Cambio de moneda',
        ':currency_exchange:'
    ],
    '💲': [
        'Cartel de Dólar Pesado',
        ':dollar_symbol:',
        'Dólar',
        'Cartel de Dólar'
    ],
    '♻️': [
        'Símbolo de reciclaje universal negro',
        ':recycling_symbol:',
        'Reciclando símbolo',
        'Reciclar Logo',
        ':green:'
    ],
    '🔱': [
        'Emblema Tridente',
        ':trident_emblem:',
        'Pitchfork',
        'Tridente'
    ],
    '📛': [
        'Insignia de nombre',
        ':name_badge:',
        'Tofu en fuego',
        'Nombre etiqueta',
        'Etiqueta de fuego'
    ],
    '🔰': [
        'Símbolo japonés para principiantes',
        ':japanese_symbol_beginner:',
        'Marca de Shoshinsha',
        'Escudo verde amarillo',
        ':green:',
        ':yellow:'
    ],
    '➰': [
        'Bucle rizado',
        ':curly_loop:',
        'Bucle de rizaje',
        'Bucle'
    ],
    '➿': [
        'Bucle doble de rizaje',
        ':double_curly_loop:',
        'Bucle de doble tiro',
        'Correo de voz'
    ],
    '〽️': [
        'Marca de Alternación Parte',
        ':part_alternation_mark:',
        'M',
        'McDonales'
    ],
    '✳️': [
        'Ocho Asterisco',
        ':eight_spoked_asterisk:',
        ':green:'
    ],
    '✴️': [
        'Ocho Estrella Negra Punteada',
        ':eight_pointed_star:',
        'Estrella Naranja',
        'Ocho Estrella Puntuada',
        ':orange:'
    ],
    '❇️': [
        'Chispa',
        ':sparkle:',
        ':green:'
    ],
    'Ⓜ️': [
        'M circuitos',
        'Carta Mayúsculas Latina Circled M',
        ':circled_m:',
        'Metro',
        ':blue:'
    ],
    '🈁': [
        'Señal de palabra japonesa aquí',
        'Squared Katakana Koko',
        ':japanese_here:',
        'Aquí',
        'Destino',
        ':blue:'
    ],
    '🈂️': [
        'Servicio Japonés de Firma o Carga de Servicio',
        'Squared Katakana Sa',
        ':japanese_service:',
        ':blue:'
    ],
    '🈷️': [
        'Cantidad mensual de señal japonesa',
        'Ideógrafo unificado CJK cuadrado - 6708',
        ':japanese_monthly_amouny:',
        'Radical 74',
        '月',
        ':orange:'
    ],
    '🈶': [
        'Firma japonesa no libre de carga',
        'Ideógrafo-6709 unificado CJK cuadrado',
        ':japanese_own:',
        'Propio',
        '有',
        ':orange:'
    ],
    '🈯': [
        'Firma japonesa reservada',
        'Ideógrafo unificado CJK cuadrado - 6307',
        ':japanese_reserved:',
        'Punto de Dedo',
        '指',
        ':green:'
    ],
    '🉐': [
        'Firma japonesa de ganga',
        'Ventaja de Ideografía Circlada',
        ':japanese_acquire:',
        'Adquirir',
        '得',
        ':red:'
    ],
    '🈹': [
        'Descuento de firma japonesa',
        'Ideógrafo-5272 unificado CJK cuadrado',
        ':japanese_discount:',
        'Venta de Negocios',
        '割',
        ':red:'
    ],
    '🈚': [
        'Firma japonesa libre de carga',
        'Ideografía unificada CJK cuadrado 7121',
        ':japanese_lacking:',
        'Falta',
        '無',
        ':orange:'
    ],
    '🈲': [
        'Firma japonesa Prohibida',
        'Ideógrafo-7981 unificado CJK cuadrado',
        ':japanese_prohibited:',
        'Forbid',
        '禁',
        ':red:'
    ],
    '🉑': [
        'Firma japonesa aceptable',
        'Aceptar Ideograph Circled',
        ':japanese_accept:',
        'Aceptar',
        ':orange:'
    ],
    '🈸': [
        'Solicitud de firma japonesa',
        'Ideógrafo unificado CJK cuadrado 7533',
        ':japanese_application_form:',
        'Formulario de solicitud',
        'Mono',
        'Solicitud',
        '申',
        ':orange:'
    ],
    '🈴': [
        'Pasado de señalización japonesa (Grade)',
        'Ideógrafo-5408 unificado CJK cuadrado',
        ':japanese_agreement:',
        'Acuerdo',
        '合',
        ':red:'
    ],
    '🈳': [
        'Vacanza de signo japonés',
        'Ideografía unificada CJK cuadrado 7a7a',
        ':japanese_available:',
        'Vacío y disponible',
        '空',
        ':blue:'
    ],
    '㊗️': [
        'Enhorabuena por la firma japonesa',
        'Ideograph Circled Enhorabuena',
        ':japanese_congratulations:',
        ':red:'
    ],
    '㊙️': [
        'Ideográfico clandestino secreto',
        ':japanese_secret:',
        'Señal japonesa secreta',
        'Secreto',
        ':red:'
    ],
    '🈺': [
        'Signo japonés abierto para negocios',
        'Ideógrafo unificado CJK cuadrado - 55b6',
        ':japanese_open_for_business:',
        'Trabajar',
        '営',
        ':orange:'
    ],
    '🈵': [
        'Firma japonesa completa de cumplimiento; sin vacío',
        'Ideografía unificada CJK cuadrado 6e80',
        ':japanese_full:',
        'Lleno',
        '満',
        ':red:'
    ],
    '🔘': [
        'Botón de radio',
        ':radio_button:'
    ],
    '🛑': [
        'Señal de parada',
        ':stop_sign:',
        'Señal octagonal',
        ':red:'
    ],
    '⚕️': [
        'Símbolo médico',
        ':medical_symbol:',
        'Aesculapio',
        'Asklepios',
        'Barra de Asclepio',
        'Personal de Aesculapius'
    ],
    '🛗': [
        'Actor',
        ':elevator:',
        ':lift:',
        'Ascensor'
    ],
    '⚧️': [
        'Símbolo transgénero',
        ':transgender_sign:'
    ],
    '♂️': [
        'Señal masculino',
        ':male_sign:',
        'Símbolo masculino',
        'Símbolo de Marte'
    ],
    '♀️': [
        'Cartel femenino',
        ':female_sign:',
        'Símbolo femenino',
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
        'Melón',
        ':melon:',
        'Cantaloupe',
        'Corona',
        'Mezclón'
    ],
    '🍉': [
        'Melón de agua',
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
        'Limón',
        ':lemon:',
        'Limonada',
        ':yellow:'
    ],
    '🍌': [
        'Banano',
        ':banana:',
        'Plantano',
        ':yellow:'
    ],
    '🍍': [
        'Piña',
        ':pineapple:'
    ],
    '🥭': [
        'Mango',
        ':mango:'
    ],
    '🍎': [
        'Manzana Roja',
        ':red_apple:',
        ':apple:',
        'Manzana Roja Deliciosa',
        ':red:'
    ],
    '🍏': [
        'Manzana Verde',
        ':green_apple:',
        ':apple:',
        'Manzana Deliciosa de Oro',
        'Manzana de Granny Smith',
        ':green:'
    ],
    '🍐': [
        'Pera',
        ':pear:'
    ],
    '🍑': [
        'Piñón',
        ':peach:',
        'Abajo',
        'Bota',
        ':orange:',
        ':pink:'
    ],
    '🍒': [
        'Cerezas',
        ':cherry:',
        'Cereza',
        'Cereza salvaje',
        ':red:'
    ],
    '🍓': [
        'Armadura',
        ':strawberry:',
        ':red:'
    ],
    '🥝': [
        'Fruta Kiwi',
        ':kiwi:',
        'Baya China',
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
        'Coco',
        ':coconut:',
        'Cocoanut'
    ],
    '🥑': [
        'Avocado',
        ':avocado:',
        ':green:'
    ],
    '🍆': [
        'berenjena',
        ':eggplant:',
        ':aubergine:',
        'Aubergine',
        'Phalcon',
        'Vegador morado',
        ':purple:'
    ],
    '🥔': [
        'Potata',
        ':potato:',
        'Potato Horneado',
        'Potato de Idaho'
    ],
    '🥕': [
        'Zanahoria',
        ':carrot:',
        ':orange:'
    ],
    '🌽': [
        'Gema del maíz',
        ':ear_of_corn:',
        'Maíz',
        'Maíz en la cacerola',
        'Maíz',
        'Gema del maíz'
    ],
    '🌶️': [
        'Pimienta caliente',
        ':hot_pepper:',
        'Pimienta de Chile',
        'Picante',
        ':red:'
    ],
    '🥒': [
        'pepino',
        ':cucumber:',
        'Gherkin',
        'Pico',
        ':green:'
    ],
    '🥬': [
        'Verde frondoso',
        ':leafy_green:',
        'Choy de Bloque',
        'Col chino',
        'Cos Lettuce',
        'Lechuga Romana',
        'Verdes frondosos',
        ':green:'
    ],
    '🥦': [
        'Brócoli',
        ':broccoli:',
        ':green:'
    ],
    '🍄': [
        'Seta',
        ':mushroom:',
        'Fragmento',
        'Toadstool'
    ],
    '🥜': [
        'Peanuts',
        ':peanuts:',
        'Nueces',
        ':brown:'
    ],
    '🌰': [
        'Castaño',
        ':chestnut:',
        'Acorno',
        'Nuez',
        ':brown:'
    ],
    '🍞': [
        'Papel',
        ':bread:',
        'Hoja de pan',
        ':brown:'
    ],
    '🥐': [
        'Croissant',
        ':croissant:',
        ':brown:'
    ],
    '🥖': [
        'Barbilla de Baguette',
        ':baguette_bread:',
        'Panilla francesa',
        'Bagueta',
        ':brown:'
    ],
    '🥨': [
        'Pretzel',
        ':pretzel:',
        ':brown:'
    ],
    '🥯': [
        'Báñel',
        ':bagel:',
        ':brown:'
    ],
    '🥞': [
        'Pantalones',
        ':pancakes:',
        'Crepes',
        'Pastel',
        ':yellow:'
    ],
    '🧀': [
        'Cuña de Queso',
        ':cheese_wedge:',
        'Queso',
        ':yellow:'
    ],
    '🍖': [
        'Carne en hueso',
        ':meat_on_bone:',
        'BBQ',
        'Barbacoa',
        'Carne de manga',
        ':red:'
    ],
    '🍗': [
        'Poultry Leg',
        ':poultry_leg:',
        'Batería',
        'Pata de Pavo',
        ':red:'
    ],
    '🥩': [
        'Corte de carne',
        ':cut_of_meat:',
        'Carne',
        'Filete',
        ':red:'
    ],
    '🥓': [
        'Bacón',
        ':bacon:',
        'Rashers',
        ':red:'
    ],
    '🍔': [
        'Hamburguesa',
        ':hamburger:',
        'Hamburguesa',
        'Cheeseburger'
    ],
    '🍟': [
        'Fritas francesas',
        ':french_fries:',
        'Fichas',
        'Vela',
        'Vitas de McDonalds',
        ':yellow:'
    ],
    '🍕': [
        'Pizza',
        ':pizza:',
        'Pizza Pepperoni',
        'Rebanada de pizza',
        ':red:'
    ],
    '🌭': [
        'Perro caliente',
        ':hot_dog:',
        'Perro Acceso',
        'Salchicha',
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
        'Envoltura'
    ],
    '🥙': [
        'Pan relleno',
        ':stuffed_flatbread:',
        'Doner Kebab',
        'Gyro',
        'Shawarma',
        'Pita Sandwich'
    ],
    '🍳': [
        'Cocina',
        ':cooking:',
        'Desayuno',
        'Huevo Frito',
        'Pan freír'
    ],
    '🥘': [
        'Suavizado de comida',
        ':shallow_pan_of_food:',
        'Paella',
        'Pan de comida'
    ],
    '🍲': [
        'Pozo de Comida',
        ':pot_of_food:',
        'Boco de comida',
        'Sopa',
        'Quemado'
    ],
    '🥣': [
        'Arco con cuchara',
        ':bowl_with_spoon:',
        'Ballón de basura'
    ],
    '🥗': [
        'Ensalada verde',
        ':green_salad:',
        'Ensalada',
        ':green:'
    ],
    '🍿': [
        'Palomitas',
        ':popcorn:',
        'Maíz poblado'
    ],
    '🧂': [
        'Sal',
        ':salt:',
        'Contaminador de sal',
        ':white:'
    ],
    '🥫': [
        'Alimento en lata',
        ':canned_food:',
        'Lata de Comida',
        'Lata de estaño',
        'Alimento de ceniza'
    ],
    '🍱': [
        'Caja de Bento',
        ':bento_box:',
        'Caja de Lunch'
    ],
    '🍘': [
        'Cracker de arroz',
        ':rice_cracker:',
        'Cracker'
    ],
    '🍙': [
        'Bola de arroz',
        ':rice_ball:',
        'Onigiri'
    ],
    '🍚': [
        'Arroz cocinado',
        ':cooked_rice:',
        'Arroz hervido',
        'Arroz',
        'Arco de Arroz',
        'Arroz al vapor'
    ],
    '🍛': [
        'Arroz de Curry',
        ':curry_rice:',
        'Rayo',
        'Comida india',
        'Curry y arroz'
    ],
    '🍜': [
        'Ballón en vapor',
        ':steaming_bowl:',
        'Niños',
        'Noodles con Chopsticks',
        'Ramen'
    ],
    '🍝': [
        'Spaghetti',
        ':spaghetti:',
        'Pasta'
    ],
    '🍠': [
        'Potato Dulce Tostado',
        ':roasted_sweet_potato:',
        'Potato Dulce',
        'Yam'
    ],
    '🍢': [
        'Odín',
        ':oden:',
        'Kebab',
        'Pinchazo'
    ],
    '🍣': [
        'Sushi',
        ':sushi:',
        'Sashimi',
        'Madera marina',
        ':pink:'
    ],
    '🍤': [
        'Camarón Frito',
        ':fried_shrimp:',
        'Dibujo Frito',
        'Camarón Tempura'
    ],
    '🍥': [
        'Pastel de pescado con remolino',
        ':fish_cake_with_swirl:',
        'Pez pastel',
        'Pink Swirl'
    ],
    '🥮': [
        'Pastel de la Luna',
        ':moon_cake:',
        'Pastel Lunar'
    ],
    '🍡': [
        'Dango',
        ':dango:',
        'Insertar palo',
        'Bolas blancas verdes rosas'
    ],
    '🥟': [
        'Dumpling',
        ':dumpling:',
        'Empanada',
        'Pierogi'
    ],
    '🥠': [
        'Galleta de la Fortuna',
        ':fortune_cookie:'
    ],
    '🥡': [
        'Caja de Takeout',
        ':takeout_box:',
        'Caja de comida china',
        'Oyster Pail'
    ],
    '🍦': [
        'Helado suave',
        ':soft_ice_cream:',
        'Sr. Whippy',
        'Servir suave'
    ],
    '🍧': [
        'Hielo afilado',
        ':shaved_ice:',
        'Cono de nieve'
    ],
    '🍨': [
        'Helado',
        ':ice_cream:',
        'Arco de Helado',
        'Insertar'
    ],
    '🍩': [
        'Castaña',
        ':doughnut:',
        'Donut'
    ],
    '🍪': [
        'Galleta',
        ':cookie:',
        'Biscuito',
        'Galleta de Chip de Chocolate',
        ':brown:'
    ],
    '🎂': [
        'Pastel de cumpleaños',
        ':birthday_cake:',
        'Cumpleaños',
        'Pastel',
        'Pastel con velas'
    ],
    '🍰': [
        'Pastel corto',
        ':shortcake:',
        'Pastel',
        'Pieza de pastel',
        'Tarta corta de paja'
    ],
    '🧁': [
        'Torta',
        ':cupcake:',
        'Pastel de Hadas'
    ],
    '🥧': [
        'Pie',
        ':pie:'
    ],
    '🍫': [
        'Barra de chocolate',
        ':chocolate_bar:',
        'Barra de caramelo',
        'Chocolate',
        ':brown:'
    ],
    '🍬': [
        'Caramelo',
        ':candy:',
        'Ligero',
        'Dulce'
    ],
    '🍭': [
        'Lollipop',
        ':lollipop:',
        'Sucesor'
    ],
    '🍮': [
        'Custardos',
        ':custard:',
        'Creme Caramel',
        'Insertar',
        'Flan',
        'Pudido'
    ],
    '🍯': [
        'Maceta de miel',
        ':honey_pot:',
        'Miel',
        'Jarra',
        ':yellow:'
    ],
    '🍼': [
        'Botella bebé',
        ':baby_bottle:',
        'Alimentación de Bottle'
    ],
    '🥛': [
        'Cristal de leche',
        ':glass_of_milk:',
        'Leche',
        ':white:'
    ],
    '☕': [
        'Bebida caliente',
        ':hot_beverage:',
        'Coffé',
        'Espresso',
        'Chocolate caliente',
        'Té'
    ],
    '🍵': [
        'Teacup sin manos',
        ':green_tea:',
        'Té verde',
        'Matcha',
        'Té verde Matcha',
        ':green:'
    ],
    '🍶': [
        'Sake',
        ':sake:',
        'Botella',
        'Vino de arroz',
        'Botella de Sake y Copa'
    ],
    '🍾': [
        'Botella con Corcho Poblador',
        ':champagne:',
        'Celebración',
        'Champagne',
        'Vino Chispeante'
    ],
    '🍷': [
        'Cristal de Vino',
        ':wine_glass:',
        'Alcohol',
        'Vino rojo',
        'Vino'
    ],
    '🍸': [
        'Cristal coco',
        ':cocktail_glass:',
        'Cola',
        'Martini'
    ],
    '🍹': [
        'Bebida tropical',
        ':tropical_drink:',
        'Mazo de fruta',
        'Bebida Tiki'
    ],
    '🍺': [
        'Jarra de cerveza',
        ':beer_mug:',
        'Cerveza',
        'Cerveza Stein',
        ':yellow:'
    ],
    '🍻': [
        'Mugs de cerveza de engranaje',
        ':clinking_beer_mugs:',
        'Cervezas',
        'Saludos'
    ],
    '🥂': [
        'Gafas de enlace',
        ':clinking_glasses:',
        'Celebración',
        'Vidrios de Champagne',
        'Saludos'
    ],
    '🥃': [
        'Cristal Tumbler',
        ':tumbler_glass:',
        'Coronel',
        'Liquor',
        'Rum',
        'Whisky',
        'Whisky'
    ],
    '🥤': [
        'Copa con Straw',
        ':cup_with_straw:',
        'Batido',
        'Suavizado',
        'Pop Soda',
        'Bebida suave'
    ],
    '🥢': [
        'Chopsticks',
        ':chopsticks:'
    ],
    '🍽️': [
        'Forja y cuchillo con placa',
        ':fork_and_knife_with_plate:',
        'Cena',
        ':white:',
        ':gray:',
        ':grey:'
    ],
    '🍴': [
        'Fork y cuchillo',
        ':fork_and_knife:',
        'Cubertería',
        'Cuchillo y bifurcación',
        'Vajilla',
        ':gray:',
        ':grey:'
    ],
    '🥄': [
        'Cuchara',
        ':spoon:',
        ':gray:',
        ':grey:'
    ],
    '🧄': [
        'Ajo',
        ':garlic:'
    ],
    '🧅': [
        'Aceite',
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
        'Mezcladora',
        ':butter:'
    ],
    '🦪': [
        'Oyster',
        ':oyster:'
    ],
    '🧃': [
        'Caja de bebida',
        ':beverage_box:',
        'Caja de jugo'
    ],
    '🧉': [
        'Bebida de Mate',
        ':mate_drink:',
        'Chimarrao',
        'Cimarrón',
        'Mate de Yerba'
    ],
    '🫒': [
        'Oliva',
        ':olive:',
        ':green:'
    ],
    '🫐': [
        'Arándanos',
        ':blueberries:',
        ':blue:'
    ],
    '🫑': [
        'Pimienta de Campanilla',
        ':bell_pepper:',
        ':green:'
    ],
    '🫓': [
        'Pan plano',
        ':flatbread:'
    ],
    '🫔': [
        'Tamal',
        ':tamale:',
        'Tamal'
    ],
    '🫕': [
        'Fondue',
        ':fondue:'
    ],
    '🧋': [
        'Té de burbuja',
        ':boba:',
        'Boba'
    ],
    '🧊': [
        'Cubo de hielo',
        ':ice_cube:'
    ],
    '🫘': [
        'Beans',
        'Flatulence',
        ':beans:',
        'Judías de Coffee',
        'Spill the beans'
    ],
    '🫗': [
        'Vertiendo líquido',
        ':puring_liquid:',
        'Vertiendo Bebida',
        'Agua'
    ]
};
/*flags*/
emojis_language[lang][7] = {
    '🏁': [
        'Bandera Codificada',
        ':chequered_flag:',
        'Bandera comprobada',
        'Girl de cuadrícula',
        'Bandera de carrera',
        ':black:',
        ':white:'
    ],
    '🚩': [
        'Bandera triangular',
        ':triangular_flag:',
        'Marcar en polo',
        'Bandera Roja',
        'Bandera triangular en poste',
        ':red:'
    ],
    '🎌': [
        'Banderas Cruzadas',
        ':crossed_flags:',
        'Dos banderas'
    ],
    '🏴': [
        'Bandera Negra',
        ':black_flag:',
        'Bandera Negra ondulada',
        ':black:'
    ],
    '🏳️': [
        'Bandera blanca',
        ':white_flag:',
        'Bandera Blanca ondulando',
        ':white:'
    ],
    '🏳️‍🌈': [
        'Bandera Arco Rainarco',
        ':rainbow_flag:',
        'Pride Flag',
        'LGBT',
        'LGBTQIA+',
        'Gay',
        'Transgénero',
        'Lesbian',
        'Asexual',
        'Queer'
    ],
    '🏳️‍⚧️': [
        'Bandera de transgénero',
        ':transgender_flag:',
        'Bandera Azul, Pink y Blanco',
        'Bandera Trans'
    ],
    '🏴‍☠️': [
        'Bandera pirata',
        ':pirate_flag:',
        'Roger Jolly',
        ':black:'
    ],
    '🇺🇳': [
        'Bandera de las Naciones Unidas',
        ':un:',
        'Bandera: Naciones Unidas'
    ],
    '🇪🇺': [
        'Bandera de la Unión Europea',
        ':eu:',
        'Bandera: Unión Europea',
        'EU Flag'
    ],
    '🇦🇨': [
        'Bandera de la Isla de Ascensión',
        ':ac:'
    ],
    '🇦🇩': [
        'Bandera de Andorra',
        ':ad:',
        'Andorran Flag'
    ],
    '🇦🇪': [
        'Bandera de Emiratos Árabes Unidos',
        ':ae:',
        'Emirati Flag',
        'Bandera UAE'
    ],
    '🇦🇫': [
        'Bandera de Afganistán',
        ':af:',
        'Afghan Flag'
    ],
    '🇦🇬': [
        'Bandera de Antigua y Barbuda',
        ':ag:'
    ],
    '🇦🇮': [
        'Bandera de Anguila',
        ':ai:',
        'Bandera de Anguila'
    ],
    '🇦🇱': [
        'Bandera de Albania',
        ':al:',
        'Bandera albanesa'
    ],
    '🇦🇲': [
        'Bandera de Armenia',
        ':am:',
        'Bandera de Armenia'
    ],
    '🇦🇴': [
        'Bandera de Angola',
        ':ao:',
        'Bandera de Angola'
    ],
    '🇦🇶': [
        'Bandera de la Antártida',
        ':aq:',
        'Bandera Antártica'
    ],
    '🇦🇷': [
        'Bandera de Argentina',
        ':ar:',
        'Bandera argentina'
    ],
    '🇦🇸': [
        'Bandera de Samoa Americana',
        ':as:',
        'American Samoan Flag'
    ],
    '🇦🇹': [
        'Bandera de Austria',
        ':at:',
        'Austrian Flag'
    ],
    '🇦🇺': [
        'Bandera de Australia',
        ':au:',
        'Bandera australiana',
        'Bandera australiana'
    ],
    '🇦🇼': [
        'Bandera de Aruba',
        ':aw:',
        'Bandera Arubana'
    ],
    '🇦🇽': [
        'Bandera de las Islas Tierras',
        ':ax:',
        'Bandera de tierra'
    ],
    '🇦🇿': [
        'Marca de baiyano',
        ':az:',
        'Bandera del azaí'
    ],
    '🇧🇦': [
        'Bandera de Bosnia y Herzegovina',
        ':ba:'
    ],
    '🇧🇧': [
        'Bandera de Barbados',
        ':bb:',
        'Bandera de Barbadia',
        'Bandera Bajan'
    ],
    '🇧🇩': [
        'Bandera de Bangladesh',
        ':bd:',
        'Bangladeshi Flag'
    ],
    '🇧🇪': [
        'Bandera de Bélgica',
        ':be:',
        'Bandera belga'
    ],
    '🇧🇫': [
        'Bandera de Burkina Faso',
        ':bf:',
        'Bandera de Burkinabe'
    ],
    '🇧🇬': [
        'Bandera de Bulgaria',
        ':bg:',
        'Bandera Búlgara'
    ],
    '🇧🇭': [
        'Bandera de Bahrein',
        ':bh:',
        'Bandera de Bahrani',
        'Bandera Bahrainiana'
    ],
    '🇧🇮': [
        'Marca de Burundi',
        ':bi:',
        'Burundian Flag'
    ],
    '🇧🇯': [
        'Marca de Benin',
        ':bj:',
        'Bandera benina'
    ],
    '🇧🇱': [
        'Bandera de San Bartolomé',
        ':bl:',
        'Bandera: San Bartolomé'
    ],
    '🇧🇲': [
        'Bandera de Bermudas',
        ':bm:',
        'Bermudan Flag'
    ],
    '🇧🇳': [
        'Bandera de Brunei',
        ':bn:',
        'Bandera de Bruneo'
    ],
    '🇧🇴': [
        'Bandera de Bolivia',
        ':bo:',
        'Bolivian Flag'
    ],
    '🇧🇶': [
        'Bandera de los Países Bajos del Caribe',
        ':bq:',
        'Bonaire'
    ],
    '🇧🇷': [
        'Bandera de Brasil',
        ':br:',
        'Bandera brasileña'
    ],
    '🇧🇸': [
        'Bandera de Bahamas',
        ':bs:',
        'Bandera de Bahamia'
    ],
    '🇧🇹': [
        'Bandera de Bhutan',
        ':bt:',
        'Bandera Bhutanesa'
    ],
    '🇧🇻': [
        'Bandera de la Isla Bouvet',
        ':bv:',
        'Bandera: Isla Bouvet'
    ],
    '🇧🇼': [
        'Bandera de Botsuana',
        ':bw:',
        'Batswana Flag'
    ],
    '🇧🇾': [
        'Bandera de Bielorrusia',
        ':by:',
        'Bandera bielorrusa'
    ],
    '🇧🇿': [
        'Bandera de Belice',
        ':bz:',
        'Bandera de Belice'
    ],
    '🇨🇦': [
        'Bandera de Canadá',
        'Bandera canadiense',
        ':ca:'
    ],
    '🇨🇨': [
        'Bandera de los Cocos (Keeling)',
        ':cc:'
    ],
    '🇨🇩': [
        'Flag of Congo - Kinshasa',
        ':cd:'
    ],
    '🇨🇫': [
        'Bandera de la República Centroafricana',
        ':cf:',
        'Bandera Centroafricana'
    ],
    '🇨🇬': [
        'Bandera del Congo - Brasil',
        ':cg:'
    ],
    '🇨🇭': [
        'Bandera de Suiza',
        ':ch:',
        'Cruz Roja',
        'Bandera suiza'
    ],
    '🇨🇮': [
        'Bandera de Costa de Marfil',
        ':ci:',
        'Flag: Côte d’Ivoire'
    ],
    '🇨🇰': [
        'Bandera de Islas Cook',
        ':ck:',
        'Bandera de Cook Islander'
    ],
    '🇨🇱': [
        'Bandera de Chile',
        ':cl:',
        'Bandera chilena'
    ],
    '🇨🇲': [
        'Bandera de Camerún',
        ':cm:',
        'Bandera de Camerún'
    ],
    '🇨🇳': [
        'Bandera de China',
        ':cn:',
        'Bandera China'
    ],
    '🇨🇴': [
        'Bandera de Colombia',
        ':co:',
        'Bandera colombiana'
    ],
    '🇨🇵': [
        'Bandera de la isla de Clipperton',
        ':cp:',
        'Bandera: Isla Clipperton'
    ],
    '🇨🇷': [
        'Bandera de Costa Rica',
        ':cr:',
        'Bandera costarricense'
    ],
    '🇨🇺': [
        'Bandera de Cuba',
        ':cu:',
        'Bandera cubana'
    ],
    '🇨🇻': [
        'Bandera de Cabo Verde',
        ':cv:',
        'Bandera de Cabo Verdiano'
    ],
    '🇨🇼': [
        'Bandera de Curacao',
        ':cw:',
        'Curaçaoan Flag'
    ],
    '🇨🇽': [
        'Bandera de la isla de Navidad',
        ':cx:',
        'Bandera de la Isla de Navidad'
    ],
    '🇨🇾': [
        'Bandera de Chipre',
        ':cy:',
        'Bandera chipriota'
    ],
    '🇨🇿': [
        'Bandera de la República Checa',
        ':cz:',
        'Bandera checa'
    ],
    '🇩🇪': [
        'Bandera de Alemania',
        ':de:',
        'Bandera de Deutsch',
        'Bandera alemana'
    ],
    '🇩🇬': [
        'Bandera de Diego García',
        ':dg:',
        'Bandera: Diego García'
    ],
    '🇩🇯': [
        'Bandera de Djibouti',
        ':dj:',
        'Djibouti Flag',
        'Djiboutian Flag'
    ],
    '🇩🇰': [
        'Bandera de Dinamarca',
        ':dk:',
        'Bandera danesa'
    ],
    '🇩🇲': [
        'Bandera de Dominica',
        ':dm:'
    ],
    '🇩🇴': [
        'Bandera de la República Dominicana',
        ':do:',
        'Bandera Dom Rep',
        'Bandera Dominicana'
    ],
    '🇩🇿': [
        'Bandera de Argelia',
        ':dz:',
        'Algerian Flag'
    ],
    '🇪🇦': [
        'Marca de Ceuta y Melilla',
        ':ea:',
        'Marca de Melilla',
        'Bandera de Ceuta',
        'Flag: Ceuta & Melilla'
    ],
    '🇪🇨': [
        'Bandera de Ecuador',
        ':ec:',
        'Ecuadorian Flag'
    ],
    '🇪🇪': [
        'Bandera de Estonia',
        ':ee:',
        'Bandera Estonia'
    ],
    '🇪🇬': [
        'Bandera de Egipto',
        ':eg:',
        'Bandera egipcia'
    ],
    '🇪🇭': [
        'Bandera de Sahara Occidental',
        ':eh:',
        'Bandera de Saharan Occidental'
    ],
    '🇪🇷': [
        'Bandera de Eritrea',
        ':er:',
        'Eritrean Flag'
    ],
    '🇪🇹': [
        'Bandera de Ethiopia',
        ':et:',
        'Ethiopian Flag'
    ],
    '🇪🇸': [
        'Bandera de España',
        ':es:',
        'Bandera española'
    ],
    '🇫🇮': [
        'Bandera de Finlandia',
        ':fi:',
        'Bandera Finlandesa'
    ],
    '🇫🇯': [
        'Bandera de Fiyi',
        ':fj:',
        'Fijian Flag'
    ],
    '🇫🇰': [
        'Bandera de las Islas Falkland',
        ':fk:',
        'Bandera Falklander'
    ],
    '🇫🇲': [
        'Bandera de Micronesia',
        ':fm:',
        'Bandera micronesiana'
    ],
    '🇫🇴': [
        'Bandera de las Islas Faroe',
        ':fo:',
        'Faroe Islander Flag'
    ],
    '🇫🇷': [
        'Bandera de Francia',
        ':fr:',
        'Bandera francesa'
    ],
    '🇬🇦': [
        'Bandera de Gabón',
        ':ga:',
        'Bandera Gabonesa'
    ],
    '🇬🇧': [
        'Bandera de Gran Bretaña',
        ':gb:',
        'Bandera británica',
        'Reino Unido',
        'Jack de Unión',
        'Reino Unido'
    ],
    '🏴󠁧󠁢󠁥󠁮󠁧󠁿󠁧󠁢󠁥󠁮󠁧󠁿': [
        'Bandera de Inglaterra',
        ':england:',
        'Cruce de San Georgia',
        'Bandera Inglesa'
    ],
    '🏴󠁧󠁢󠁷󠁬󠁳󠁿󠁧󠁢󠁷󠁬󠁳󠁿': [
        'Bandera de Gales',
        ':wales:',
        'Bandera galesa',
        'Dragón Rojo',
        'Baner Cymru',
        'Y Ddraig Goch'
    ],
    '🏴󠁧󠁢󠁳󠁣󠁴󠁿󠁧󠁢󠁳󠁣󠁴󠁿': [
        'Bandera de Escocia',
        ':scotland:',
        'Bandera escocesa',
        'Cruz de San Andrés',
        'Saludo'
    ],
    '🇬🇩': [
        'Marca de Granada',
        ':gd:',
        'Bandera de Granada'
    ],
    '🇬🇪': [
        'Bandera de Georgia',
        ':ge:',
        'Bandera de Georgia'
    ],
    '🇬🇫': [
        'Bandera de la Guayana Francesa',
        ':gf:',
        'Bandera francesa guineana'
    ],
    '🇬🇬': [
        'Bandera de Guernsey',
        ':gg:',
        'Guernsey Flag'
    ],
    '🇬🇭': [
        'Bandera de Ghana',
        ':gh:',
        'Bandera de Ghana'
    ],
    '🇬🇮': [
        'Marca de Gibraltar',
        ':gi:',
        'Bandera de Gibraltarian'
    ],
    '🇬🇱': [
        'Bandera de Groenlandia',
        ':gl:',
        'Greenlandic Flag'
    ],
    '🇬🇲': [
        'Bandera de Gambia',
        ':gm:',
        'Gambian Flag'
    ],
    '🇬🇳': [
        'Bandera de Guinea',
        ':gn:',
        'Guinean Flag'
    ],
    '🇬🇵': [
        'Bandera de Guadalupe',
        ':gp:',
        'Bandera de Guadalupe'
    ],
    '🇬🇶': [
        'Bandera de Guinea Ecuatorial',
        ':gq:',
        'Equatorial Guinean Flag',
        'Bandera ecuatoguineana'
    ],
    '🇬🇷': [
        'Bandera de Grecia',
        ':gr:',
        'Bandera griega'
    ],
    '🇬🇸': [
        'Bandera de Georgia del Sur y las Islas Sandwich del Sur',
        ':gs:'
    ],
    '🇬🇹': [
        'Bandera de Guatemala',
        ':gt:',
        'Guatemalan Flag'
    ],
    '🇬🇺': [
        'Bandera de Guam',
        ':gu:',
        'Bandera Guamana',
        'Bandera de Chamorro'
    ],
    '🇬🇼': [
        'Bandera de Guinea-Bissau',
        ':gw:',
        'Guinea-Bissau Flag'
    ],
    '🇬🇾': [
        'Bandera de Guyana',
        ':gy:',
        'Bandera Guyanesa'
    ],
    '🇭🇰': [
        'Bandera de Hong Kong SAR China',
        ':hk:',
        'Bandera de Hong Kong'
    ],
    '🇭🇲': [
        'Bandera de las Islas Heard y McDonald',
        ':hm:',
        'Bandera: Islas Heard y McDonald'
    ],
    '🇭🇳': [
        'Bandera de Honduras',
        ':hn:',
        'Bandera de Honduras'
    ],
    '🇭🇷': [
        'Bandera de Croacia',
        ':hr:',
        'Bandera croata'
    ],
    '🇭🇹': [
        'Bandera de Haiti',
        ':ht:',
        'Haitian Flag'
    ],
    '🇭🇺': [
        'Bandera de Hungría',
        ':hu:',
        'Bandera Húngara'
    ],
    '🇮🇨': [
        'Bandera de las Islas Canarias',
        ':ic:'
    ],
    '🇮🇩': [
        'Bandera de Indonesia',
        ':id:',
        'Bandera de Indonesia'
    ],
    '🇮🇪': [
        'Bandera de Irlanda',
        ':ie:',
        'Bandera irlandesa'
    ],
    '🇮🇱': [
        'Bandera de Israel',
        ':il:',
        'Bandera israelí'
    ],
    '🇮🇲': [
        'Marca de la Isla de Man',
        ':im:',
        'Manx Flag'
    ],
    '🇮🇳': [
        'Bandera de la India',
        ':in:',
        'Bandera india'
    ],
    '🇮🇴': [
        'Bandera del territorio británico del Océano Índico',
        ':io:',
        'Bandera británica del Océano Índico'
    ],
    '🇮🇶': [
        'Bandera de Irak',
        ':iq:',
        'Iraqi Flag'
    ],
    '🇮🇷': [
        'Bandera de Irán',
        ':ir:',
        'Bandera iraní'
    ],
    '🇮🇸': [
        'Bandera de Icelandia',
        ':is:',
        'Bandera islándica'
    ],
    '🇮🇹': [
        'Bandera de Italia',
        ':it:',
        'Bandera italiana'
    ],
    '🇯🇪': [
        'Bandera de Jersey',
        ':je:',
        'Bandera de Jersey'
    ],
    '🇯🇲': [
        'Bandera de Jamaica',
        ':jm:',
        'Bandera Jamaicana'
    ],
    '🇯🇴': [
        'Bandera de Jordán',
        ':jo:',
        'Bandera Jordana'
    ],
    '🇯🇵': [
        'Bandera de Japón',
        ':jp:',
        'Bandera japonesa'
    ],
    '🇰🇪': [
        'Bandera de Kenya',
        ':ke:',
        'Bandera de Kenyan'
    ],
    '🇰🇬': [
        'Bandera de Kyrgyzstan',
        ':kg:',
        'Kyrgyzstani Flag'
    ],
    '🇰🇭': [
        'Bandera de Camboya',
        ':kh:',
        'Bandera de Cambodies'
    ],
    '🇰🇮': [
        'Bandera de Kiribati',
        ':ki:',
        'Bandera I-Kiribati'
    ],
    '🇰🇲': [
        'Bandera de las Comoras',
        ':km:',
        'Bandera de Comoras'
    ],
    '🇰🇳': [
        'Bandera de Saint Kitts & Nevis',
        ':kn:'
    ],
    '🇰🇵': [
        'Bandera de Corea del Norte',
        ':kp:',
        'Bandera de Corea del Norte'
    ],
    '🇰🇷': [
        'Bandera de Corea del Sur',
        ':kr:',
        'Bandera de Corea del Sur'
    ],
    '🇰🇼': [
        'Bandera de Kuwait',
        ':kw:',
        'Kuwaiti Flag'
    ],
    '🇰🇾': [
        'Bandera de las Islas Caimán',
        ':ky:',
        'Bandera de Caimán'
    ],
    '🇰🇿': [
        'Bandera de Kazakhstán',
        ':kz:',
        'Kazakhstani Flag',
        'Kazakh Flag'
    ],
    '🇱🇦': [
        'Bandera de Laos',
        ':la:',
        'Bandera Laosiana',
        'Bandera Lao'
    ],
    '🇱🇧': [
        'Bandera del Líbano',
        ':lb:',
        'Bandera del Líbano'
    ],
    '🇱🇨': [
        'Bandera de Santa Lucía',
        ':lc:'
    ],
    '🇱🇮': [
        'Bandera de Liechtenstein',
        ':lt:',
        'Bandera de Liechtensteiner'
    ],
    '🇱🇰': [
        'Bandera de Sri Lanka',
        ':lk:',
        'Bandera de Sri Lanka'
    ],
    '🇱🇷': [
        'Bandera de Liberia',
        ':lr:',
        'Bandera de Liberia'
    ],
    '🇱🇸': [
        'Flag of Lesotho',
        ':ls:',
        'Basotho Flag'
    ],
    '🇱🇹': [
        'Bandera de Lithuania',
        ':lt:',
        'Bandera lituana'
    ],
    '🇱🇺': [
        'Bandera de Luxemburgo',
        ':lu:',
        'Bandera luxemburguesa'
    ],
    '🇱🇻': [
        'Bandera de Letonia',
        ':lv:',
        'Bandera letona'
    ],
    '🇱🇾': [
        'Bandera de Libia',
        ':ly:',
        'Bandera Libyan'
    ],
    '🇲🇦': [
        'Bandera de Marruecos',
        ':ma:',
        'Bandera marroquí'
    ],
    '🇲🇨': [
        'Bandera de Mónaco',
        ':mc:',
        'Bandera Monégica'
    ],
    '🇲🇩': [
        'Bandera de Moldavia',
        ':md:',
        'Bandera Moldova'
    ],
    '🇲🇪': [
        'Bandera de Montenegro',
        ':me:',
        'Bandera de Montenegrin'
    ],
    '🇲🇫': [
        'Bandera de San Martín',
        ':mf:',
        'Flag: St. Martin'
    ],
    '🇲🇬': [
        'Bandera de Madagascar',
        ':mg:',
        'Madagascan Flag'
    ],
    '🇲🇭': [
        'Bandera de las Islas Marshall',
        ':mh:',
        'Bandera de Mariscal'
    ],
    '🇲🇰': [
        'Bandera de Macedonia',
        ':mk:',
        'Bandera macedonia'
    ],
    '🇲🇱': [
        'Marca de Mali',
        ':ml:',
        'Bandera de Malia'
    ],
    '🇲🇲': [
        'Bandera de Myanmar (Birmania)',
        ':mm:',
        'Bandera de Myanmaresa',
        'Bandera para Birmania',
        'Bandera birmana'
    ],
    '🇲🇳': [
        'Bandera de Mongolia',
        ':mn:',
        'Bandera mongol'
    ],
    '🇲🇴': [
        'Bandera de Macao Sar China',
        ':mo:',
        'Bandera macanesa'
    ],
    '🇲🇵': [
        'Bandera de las Islas Mariana del Norte',
        ':mp:',
        'Bandera micronesiana'
    ],
    '🇲🇶': [
        'Bandera de Martinique',
        ':mq:',
        'Bandera de serpiente de Martinique',
        'Bandera de Martiniquais'
    ],
    '🇲🇷': [
        'Bandera de itania',
        ':mr:',
        'Bandera de itano'
    ],
    '🇲🇸': [
        'Flag of Montserrat',
        ':ms:',
        'Montserratian Flag'
    ],
    '🇲🇹': [
        'Bandera de Malta',
        ':mt:',
        'Maltese Flag'
    ],
    '🇲🇺': [
        'Flag of Mauritius',
        ':mu:',
        'Bandera de titiano'
    ],
    '🇲🇻': [
        'Bandera de las Maldivas',
        ':mv:',
        'Bandera de Maldivas'
    ],
    '🇲🇼': [
        'Bandera de Malawi',
        ':mw:',
        'Malawian Flag'
    ],
    '🇲🇽': [
        'Bandera de México',
        ':mx:',
        'Bandera Mexicana'
    ],
    '🇲🇾': [
        'Bandera de Malasia',
        ':my:',
        'Malaysian Flag'
    ],
    '🇲🇿': [
        'Bandera de Mozambique',
        ':mz:',
        'Bandera Mozambiqueña'
    ],
    '🇳🇦': [
        'Bandera de Namibia',
        ':na:',
        'Namibian Flag'
    ],
    '🇳🇨': [
        'Marca de nueva calcárea',
        ':nc:',
        'Nueva bandera caledonia'
    ],
    '🇳🇪': [
        'Bandera de Nigeria',
        ':ne:',
        'Bandera de Nigeria'
    ],
    '🇳🇫': [
        'Bandera de la Isla Norfolk',
        ':nf:',
        'Bandera de Isla Norfolk'
    ],
    '🇳🇬': [
        'Bandera de Nigeria',
        ':ng:',
        'Bandera de Nigeria'
    ],
    '🇳🇮': [
        'Flag of Nicaragua',
        ':ni:',
        'Nicaraguan Flag'
    ],
    '🇳🇱': [
        'Bandera de Países Bajos',
        ':nl:',
        'Bandera holandesa',
        'Holanda'
    ],
    '🇳🇴': [
        'Bandera de Noruega',
        ':no:',
        'Bandera noruega'
    ],
    '🇳🇵': [
        'Bandera de Nepal',
        ':np:',
        'Bandera nepalesa'
    ],
    '🇳🇷': [
        'Bandera de Nauru',
        ':nr:',
        'Nauruan Flag'
    ],
    '🇳🇺': [
        'Bandera de Niue',
        ':nu:',
        'Niuean Flag'
    ],
    '🇳🇿': [
        'Bandera de Nueva Zelanda',
        ':nz:',
        'Bandera de Kiwi'
    ],
    '🇴🇲': [
        'Bandera de Omán',
        ':om:',
        'Bandera de Omani'
    ],
    '🇵🇦': [
        'Bandera de Panamá',
        ':pa:',
        'Bandera Panamana'
    ],
    '🇵🇪': [
        'Bandera del Perú',
        ':pe:',
        'Bandera peruana'
    ],
    '🇵🇫': [
        'Bandera de la Polinesia Francesa',
        ':pf:',
        'Bandera Polinesiana Francesa'
    ],
    '🇵🇬': [
        'Bandera de Papúa Nueva Guinea',
        ':pg:',
        'Bandera PNG',
        'Papua New Guinean Flag'
    ],
    '🇵🇭': [
        'Bandera de Filipinas',
        ':ph:'
    ],
    '🇵🇰': [
        'Bandera de Pakistán',
        ':pk:',
        'Bandera de istani'
    ],
    '🇵🇱': [
        'Bandera de Polonia',
        ':pl:',
        'Bandera polaca'
    ],
    '🇵🇲': [
        'Bandera de San Pedro y Miquelón',
        ':pm:'
    ],
    '🇵🇳': [
        'Bandera de Pitcairn',
        ':pn:'
    ],
    '🇵🇷': [
        'Bandera de Puerto Rico',
        ':pr:',
        'Bandera puertorriqueña'
    ],
    '🇵🇸': [
        'Bandera de los territorios palestinos',
        ':ps:',
        'Palestine'
    ],
    '🇵🇹': [
        'Bandera de Portugal',
        ':pt:',
        'Bandera de plata'
    ],
    '🇵🇼': [
        'Bandera de Palau',
        ':pw:',
        'Bandera de Palauan'
    ],
    '🇵🇾': [
        'Bandera de Paraguay',
        ':py:',
        'Paraguayan Flag'
    ],
    '🇶🇦': [
        'Marca de Qatar',
        ':qa:',
        'Bandera Qatari'
    ],
    '🇷🇪': [
        'Bandera de Reunión',
        ':re:',
        'Bandera Reunionnais'
    ],
    '🇷🇴': [
        'Bandera de Rumania',
        ':ro:',
        'Bandera Rumana'
    ],
    '🇷🇸': [
        'Bandera de Serbia',
        ':rs:',
        'Bandera Serbia'
    ],
    '🇷🇺': [
        'Bandera de Rusia',
        ':ru:',
        'Bandera Rusa'
    ],
    '🇷🇼': [
        'Flag of Rwanda',
        ':rw:',
        'Rwandan Flag'
    ],
    '🇸🇦': [
        'Bandera de Arabia Saudita',
        ':sa:',
        'Bandera de Arabia Saudita'
    ],
    '🇸🇧': [
        'Bandera de Salomón',
        ':sb:',
        'Bandera de Salomón'
    ],
    '🇸🇨': [
        'Bandera de las Seychelles',
        ':sc:',
        'Seychellois Flag'
    ],
    '🇸🇩': [
        'Bandera de Sudán',
        ':sd:',
        'Sudanese Flag'
    ],
    '🇸🇪': [
        'Bandera de Suecia',
        ':se:',
        'Bandera sueca'
    ],
    '🇸🇬': [
        'Bandera de Singapur',
        ':sg:',
        'Bandera de Singapur'
    ],
    '🇸🇭': [
        'Bandera de Santa Helena',
        ':sh:'
    ],
    '🇸🇮': [
        'Bandera de Eslovaquia',
        ':si:',
        'Bandera eslovena'
    ],
    '🇸🇯': [
        'Bandera de Svalbard y Jan Mayen',
        ':sj:'
    ],
    '🇸🇰': [
        'Bandera de Eslovaquia',
        ':sk:',
        'Bandera eslovaca',
        'Slovakian Flag'
    ],
    '🇸🇱': [
        'Bandera de Sierra Leona',
        ':sl:',
        'Sierra Leonean Flag'
    ],
    '🇸🇲': [
        'Bandera de San Marino',
        ':sm:',
        'Bandera Sammarinesa'
    ],
    '🇸🇳': [
        'Marca de Senegal',
        ':sn:',
        'Bandera sengalesa'
    ],
    '🇸🇴': [
        'Bandera de Somalia',
        ':so:',
        'Somalian Flag'
    ],
    '🇸🇷': [
        'Bandera de Surinam',
        ':sr:',
        'Bandera de Surinamer'
    ],
    '🇸🇸': [
        'Bandera del Sudán Meridional',
        ':ss:',
        'Bandera del Sudán Meridional'
    ],
    '🇸🇹': [
        'Bandera de Saúl Tome& Príncipe',
        ':st:'
    ],
    '🇸🇻': [
        'Bandera de El Salvador',
        ':sv:',
        'Bandera salvadoreña'
    ],
    '🇸🇽': [
        'Bandera de Sint Maarten',
        ':sx:'
    ],
    '🇸🇾': [
        'Bandera de Siria',
        ':sy:',
        'Bandera de Sirena'
    ],
    '🇸🇿': [
        'Bandera de Suazilandia',
        ':sz:',
        'Bandera de Eswatini'
    ],
    '🇹🇦': [
        'Flag of Tristan Da Cunha',
        ':ta:'
    ],
    '🇹🇨': [
        'Bandera de Turcos y Caicos',
        ':tc:'
    ],
    '🇹🇩': [
        'Bandera de Chad',
        ':td:',
        'Bandera de Chadian'
    ],
    '🇹🇫': [
        'Bandera de los territorios franceses del sur',
        ':tf:',
        'Bandera francesa de tierras del sur'
    ],
    '🇹🇬': [
        'Marca de Togo',
        ':tg:',
        'Togolese Flag'
    ],
    '🇹🇭': [
        'Bandera de Thailand',
        ':th:',
        'Bandera tailandesa'
    ],
    '🇹🇯': [
        'Bandera de Tayikistán',
        ':tj:',
        'Bandera de Tayik'
    ],
    '🇹🇰': [
        'Bandera de Tokelau',
        ':tk:',
        'Bandera de Tokelauan'
    ],
    '🇹🇱': [
        'Bandera de Timor-Leste',
        ':tl:',
        'Bandera Timor-Leste',
        'Bandera de Timor Oriental'
    ],
    '🇹🇲': [
        'Bandera de Turkmenistán',
        ':tm:',
        'Turkmen Flag'
    ],
    '🇹🇳': [
        'Bandera de Túnez',
        ':tn:',
        'Bandera de Túnez'
    ],
    '🇹🇴': [
        'Bandera de Tonga',
        ':to:',
        'Tongan Flag'
    ],
    '🇹🇷': [
        'Bandera de Turquía',
        ':tr:',
        'Bandera turca'
    ],
    '🇹🇹': [
        'Marca de Trinidad y Tobago',
        ':tt:'
    ],
    '🇹🇻': [
        'Marca de Tuvalu',
        ':tv:',
        'Bandera de Tuvaluan'
    ],
    '🇹🇼': [
        'Bandera de Taiwán',
        ':tw:',
        'Bandera taiwanesa'
    ],
    '🇹🇿': [
        'Bandera de Tanzania',
        ':tz:',
        'Tanzanian Flag'
    ],
    '🇺🇦': [
        'Bandera de Ucrania',
        ':ua:',
        'Bandera ucraniana'
    ],
    '🇺🇬': [
        'Bandera de Uganda',
        ':ug:',
        'Bandera Ugandana'
    ],
    '🇺🇲': [
        'Bandera: Islas de los Estados Unidos',
        ':um:'
    ],
    '🇺🇸': [
        'Bandera de Estados Unidos',
        ':us:',
        'Bandera Americana',
        'Bandera USA'
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
        'Bandera de la Santa Sede',
        ':va:',
        'Bandera de vanticaní'
    ],
    '🇻🇨': [
        'Bandera de San Vicente y Granadinas',
        ':vc:'
    ],
    '🇻🇪': [
        'Bandera de Venezuela',
        ':ve:',
        'Bandera de Venezuela'
    ],
    '🇻🇬': [
        'Bandera de las Islas Vírgenes Británicas',
        ':vg:',
        'Bandera de la Isla Virgen Británica'
    ],
    '🇻🇮': [
        'Bandera de las Islas Virgen de los Estados Unidos',
        ':vi:',
        'Bandera de la Isla Virgen de Estados Unidos'
    ],
    '🇻🇳': [
        'Bandera de Vietnam',
        ':vn:',
        'Bandera de nombre'
    ],
    '🇻🇺': [
        'Flag of Vanuatu',
        ':vu:',
        'Ni-Vanuatu Flag'
    ],
    '🇼🇫': [
        'Bandera de Wallis y Futuna',
        ':wf:'
    ],
    '🇼🇸': [
        'Bandera de Samoa',
        ':ws:',
        'Samoan Flag'
    ],
    '🇽🇰': [
        'Bandera de Kosovo',
        ':xk:',
        'Kosovar Flag'
    ],
    '🇾🇪': [
        'Bandera de Yemen',
        ':ye:',
        'Bandera Yemeni'
    ],
    '🇾🇹': [
        'Marca de Mayotte',
        ':yt:',
        'Bandera de Mayotte'
    ],
    '🇿🇦': [
        'Bandera de Sudáfrica',
        ':za:',
        'Bandera sudafricana'
    ],
    '🇿🇲': [
        'Bandera de Zambia',
        ':zm:',
        'Zambian Flag'
    ],
    '🇿🇼': [
        'Bandera de Zimbabue',
        ':zw:',
        'Bandera de Zimbabue',
        'Bandera Zim'
    ]
};
/*sports*/
emojis_language[lang][8] = {
    '🧗{{skin_tone}}‍♂️': [
        'Escalando hombre',
        ':man_climbing:',
        ':climbing:',
        'Escalador de roca macho',
        'Escalador hombre',
        ':man:'
    ],
    '🧗{{skin_tone}}‍♀️': [
        'Escalada de mujeres',
        ':woman_climbing:',
        ':climbing:',
        'Escalador de roca femenina',
        'Escalador femenino',
        ':woman:'
    ],
    '🧗{{skin_tone}}': [
        'Escalando en persona',
        ':person_climbing:',
        ':climbing:',
        'Escalador de roca',
        'Persona escaladora',
        ':person:'
    ],
    '🏇{{skin_tone}}': [
        'Carreras de caballos',
        ':horse_racing:',
        'Carrera de caballos',
        'Jockey'
    ],
    '⛷{{skin_tone}}‍️': [
        'Esquí',
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
        'Golfer femenino',
        ':woman_golfer:',
        ':golfer:',
        ':woman:'
    ],
    '🏌️{{skin_tone}}': [
        'Golfer de Persona',
        ':person_golfer:',
        ':golfer:',
        ':person:'
    ],
    '🏄{{skin_tone}}‍♂️': [
        'Surfista Hombre',
        ':man_surfer:',
        ':surfer:',
        ':man:'
    ],
    '🏄{{skin_tone}}‍♀️': [
        'Surfista',
        ':woman_surfer:',
        ':surfer:',
        ':woman:'
    ],
    '🏄{{skin_tone}}': [
        'Surfista de personas',
        ':person_surfer:',
        ':surfer:',
        ':person:'
    ],
    '🚣{{skin_tone}}‍♂️': [
        'Barco de caballo',
        ':man_rowing_boat:',
        ':rowing_boat:',
        ':man:'
    ],
    '🚣{{skin_tone}}‍♀️': [
        'Barco de cría femenino',
        ':woman_rowing_boat:',
        ':rowing_boat:',
        ':woman:'
    ],
    '🚣{{skin_tone}}': [
        'Barco de la persona',
        ':person_rowing_boat:',
        ':rowing_boat:',
        ':person:'
    ],
    '🏊{{skin_tone}}‍♂️': [
        'Natación de hombre',
        ':man_swimming:',
        ':swimming:',
        'Nadar hombre',
        ':man:'
    ],
    '🏊{{skin_tone}}‍♀️': [
        'Natación de mujeres',
        ':woman_swimming:',
        ':swimming:',
        'Nadador femenino',
        ':woman:'
    ],
    '🏊{{skin_tone}}': [
        'Natación de personas',
        ':person_swimming:',
        ':swimming:',
        'Nadador de personas',
        ':person:'
    ],
    '⛹{{skin_tone}}‍️‍♂️': [
        'Bola Rebotadora',
        ':man_bouncing_ball:',
        ':bouncing_ball:',
        'Jugador de baloncesto',
        ':man:'
    ],
    '⛹️{{skin_tone}}‍♀️': [
        'Bola de rebote de mujeres',
        ':woman_bouncing_ball:',
        ':boucing_ball:',
        'Jugador de Baloncesto',
        ':woman:'
    ],
    '⛹️{{skin_tone}}': [
        'Bola de rebote de la persona',
        ':person_bouncing_ball:',
        ':boucing_ball:',
        'Jugador de baloncesto de persona',
        ':person:'
    ],
    '🏋️{{skin_tone}}‍♂️': [
        'Influencias de elevación del hombre',
        ':man_lifting_weights:',
        ':lifting_weights:',
        'Elevador de peso masculino',
        ':man:'
    ],
    '🏋️{{skin_tone}}‍♀️': [
        'Influencias de elevación femeninas',
        ':woman_lifting_weights:',
        ':lifting_weights:',
        'Elevador de pesos femenino',
        ':woman:'
    ],
    '🏋️{{skin_tone}}': [
        'Influencias de elevación de la persona',
        ':person_lifting_weights:',
        ':lifting_weights:',
        'Elevador de peso',
        ':person:'
    ],
    '🚴{{skin_tone}}‍♂️': [
        'Bicicleta de hombre',
        ':man_biking:',
        ':biking:',
        'Ciclista hombre',
        'Ciclista masculino',
        ':man:'
    ],
    '🚴{{skin_tone}}‍♀️': [
        'Ciclismo femenino',
        ':woman_biking:',
        ':biking:',
        'Ciclista',
        'Ciclista femenina',
        ':woman:'
    ],
    '🚴{{skin_tone}}': [
        'Bicicleta Persona',
        ':person_biking:',
        ':biking:',
        'Ciclista de personas',
        'Ciclista de personas',
        ':person:'
    ],
    '🚵{{skin_tone}}‍♂️': [
        'Bicicleta de montaña',
        ':man_mountain_bike:',
        ':mountain_bike:',
        'Moteros de montaña',
        ':man:'
    ],
    '🚵{{skin_tone}}‍♀️': [
        'Ciclismo de montaña femenino',
        ':woman_mountain_bike:',
        ':mountain_bike:',
        'Moteros de montaña femeninos',
        ':woman:'
    ],
    '🚵{{skin_tone}}': [
        'Bicicleta de montaña de persona',
        ':person_mountain_bike:',
        ':mountain_bike:',
        'Moteros de montaña de personas',
        ':person:'
    ],
    '🤸{{skin_tone}}‍♂️': [
        'Rueda de carro',
        ':man_cartwheeling:',
        ':cartwheeling:',
        'Rueda de Carro',
        ':man:'
    ],
    '🤸{{skin_tone}}‍♀️': [
        'Carritos de mujeres',
        ':woman_cartwheeling:',
        ':cartwheeling:',
        'Rueda Doing femenina',
        ':woman:'
    ],
    '🤸{{skin_tone}}': [
        'Rueda de carro de persona',
        ':person_cartwheeling:',
        ':cartwheeling:',
        'Rueda Doing Persona',
        ':person:'
    ],
    '🤼‍♂️': [
        'Manipulación masculina',
        ':men_wrestling:',
        ':wrestling:',
        'Lluvias',
        'Trabajadores',
        ':man:'
    ],
    '🤼‍♀️': [
        'Mujeres en lucha',
        ':women_wrestling:',
        ':wrestling:',
        'Lluvias',
        'Trabajadores',
        ':woman:'
    ],
    '🤼': [
        'Personas que luchan',
        ':people_wrestling:',
        ':wrestling:',
        'Lluvias',
        'Trabajadores',
        ':person:'
    ],
    '🤽{{skin_tone}}‍♂️': [
        'Polo de Agua para Jugar Hombre',
        ':man_playing_water_polo:',
        ':playing_water_polo:',
        ':man:'
    ],
    '🤽{{skin_tone}}‍♀️': [
        'Polo de agua femenino',
        ':woman_playing_water_polo:',
        ':playing_water_polo:',
        ':woman:'
    ],
    '🤽{{skin_tone}}': [
        'Persona jugando Polo de Agua',
        ':person_playing_water_polo:',
        ':playing_water_polo:',
        ':person:'
    ],
    '🤾{{skin_tone}}‍♂️': [
        'Mano jugando a mano',
        ':man_playing_handball:',
        ':playing_handball:',
        ':man:'
    ],
    '🤾{{skin_tone}}‍♀️': [
        'Mujer jugando a la mano',
        ':woman_playing_handball:',
        ':playing_handball:',
        ':woman:'
    ],
    '🤾{{skin_tone}}': [
        'Persona jugando a la mano',
        ':person_playing_handball:',
        ':playing_handball:',
        ':person:'
    ],
    '🤹{{skin_tone}}‍♂️': [
        'Malabarista',
        ':man_juggling:',
        ':juggling:',
        'Jugador masculino',
        ':man:'
    ],
    '🤹{{skin_tone}}‍♀️': [
        'Malabarismo femenino',
        ':woman_juggling:',
        ':juggling:',
        'Jugador femenino',
        ':woman:'
    ],
    '🤹{{skin_tone}}': [
        'Malabarismo de la persona',
        ':person_juggling:',
        ':juggling:',
        'Jugador de personas',
        ':person:'
    ],
    '🧘{{skin_tone}}‍♂️': [
        'Hombre en posición de Lotus',
        ':man_lotus_position:',
        ':lotus_position:',
        'Meditación',
        'Zen',
        'Cruzado con piernas',
        'Yoga',
        ':man:'
    ],
    '🧘{{skin_tone}}‍♀️': [
        'Mujer en posición de Lotus',
        ':woman_lotus_position:',
        ':lotus_position:',
        'Meditación',
        'Zen',
        'Cruzado con piernas',
        'Yoga',
        ':woman:'
    ],
    '🧘{{skin_tone}}': [
        'Persona en posición de Lotus',
        ':person_lotus:_posición',
        ':lotus_position:',
        'Meditación',
        'Zen',
        'Cruzado con piernas',
        'Yoga',
        ':person:'
    ],
    '🏃{{skin_tone}}‍♂️': [
        'Hombre en ejecución',
        ':man_running:',
        ':running:',
        ':man:'
    ],
    '🏃{{skin_tone}}‍♀️': [
        'Mujer en ejecución',
        ':woman_running:',
        ':running:',
        ':woman:'
    ],
    '🏃{{skin_tone}}': [
        'Persona en ejecución',
        ':person_running:',
        ':running:',
        ':person:'
    ],
    '🕺{{skin_tone}}': [
        'Bailarín',
        ':man_dancing:',
        ':dancing:',
        ':man:'
    ],
    '💃{{skin_tone}}': [
        'Baile femenino',
        ':woman_dancing:',
        ':dancing:',
        ':woman:'
    ],
    '🤺': [
        'Valla de la persona',
        ':person_fencing:',
        'Alabardero',
        ':fencing:'
    ],
    '🏆': [
        'Trofeo',
        ':trophy:',
        'Campeonato',
        'Ganador',
        ':gold:',
        ':yellow:'
    ],
    '🏅': [
        'Medalla Deportiva',
        ':sports_medal:',
        ':medal:',
        ':gold:',
        ':yellow:'
    ],
    '🥇': [
        'Medalla de Primer Lugar',
        ':first_place_medal:',
        ':gold_medal:',
        'Medalla de Primer Lugar',
        'Medalla de Oro',
        ':yellow:',
        ':gold:'
    ],
    '🥈': [
        'Medalla de 2do lugar',
        ':second_place_medal:',
        ':silver_medal:',
        'Medalla de segundo lugar',
        'Medalla de Plata',
        ':gray:',
        ':grey:',
        ':silver:'
    ],
    '🥉': [
        'Medalla de 3er lugar',
        ':third_place_medal:',
        ':bronze_medal:',
        'Medalla del Tercer Lugar',
        'Medalla de Bronce',
        ':brown:',
        ':bronze:'
    ],
    '⚽': [
        'Football',
        ':football:',
        'Fútbol',
        ':white:',
        ':black:'
    ],
    '⚾': [
        'Béisbol',
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
        'Baloncesto',
        ':basketball:',
        ':orange:',
        'Baloncesto y Hoop'
    ],
    '🏐': [
        'Volleyball',
        ':volleyball:',
        ':white:'
    ],
    '🏈': [
        'Football americano',
        ':american_football:',
        'Football',
        'Gridiron',
        'Buzón',
        ':brown:'
    ],
    '🏉': [
        'Football de rugby',
        ':rugby:',
        'Football',
        'Liga',
        'Rugby',
        'Unión'
    ],
    '🎾': [
        'Tenis',
        ':tennis:',
        ':ball:',
        'Bola',
        'Caza',
        'Raceta',
        ':yellow:'
    ],
    '🥏': [
        'Disco Volador',
        ':flying_disk:',
        'Frisbeo'
    ],
    '🎳': [
        'Barrio',
        ':bowling:',
        'Pins',
        'Gatitos',
        'Diez Pin Bowling'
    ],
    '🏏': [
        'Cricket',
        ':cricket:',
        'Batio',
        'Bola'
    ],
    '🏑': [
        'Hockey de campo',
        ':field_hockey:',
        'Bola',
        'Palo'
    ],
    '🏒': [
        'Hockey del hielo',
        ':ice_hockey:',
        'Bola',
        'Palo'
    ],
    '🥍': [
        'Lacrosse',
        ':lacrosse:',
        'Bola',
        'Palo',
        ':red:'
    ],
    '🏓': [
        'Ping Pong',
        ':ping_pong:',
        ':table_tennis:',
        'Tenis de mesa',
        'Bola',
        'Paddle'
    ],
    '🏸': [
        'Badminton',
        ':badminton:',
        'Barajar',
        'Raceta'
    ],
    '🥊': [
        'Guante de caja',
        ':boxing_glove:',
        ':red:'
    ],
    '🥋': [
        'Artes marciales uniformes',
        ':martial_arts_uniform:',
        ':judo:',
        ':karate:',
        ':kung_fu:',
        'Judo',
        'Karate',
        'Kung fu'
    ],
    '⛳': [
        'Marca en agujero',
        ':flag_in_hole:',
        ':golf_flag:',
        'Bandera de golf'
    ],
    '⛸️': [
        'Patín de hielo',
        ':ice_skate:',
        'Patinaje'
    ],
    '🎣': [
        'Pesca',
        ':fishing:',
        'Polo',
        'Pescado',
        'Caña de pescar'
    ],
    '🎽': [
        'Camisa en ejecución',
        ':running_shirt:',
        'Singlet',
        'Sash'
    ],
    '🎿': [
        'Esquí',
        ':skis:',
        'Esquí',
        'Arrancar'
    ],
    '🛷': [
        'Sled',
        ':sled:'
    ],
    '🥌': [
        'Piedra de tiro',
        ':curling_stone:'
    ],
    '🎯': [
        'Golpe directo',
        ':direct_hit:',
        'Arquero',
        'Bullseye',
        'Dardos'
    ],
    '🎱': [
        'Pool 8 Bola',
        ':pool_8_ball:',
        'Bola de Cue',
        'Noticiero',
        'Billares',
        ':black:'
    ],
    '🎮': [
        'Controlador de videojuegos',
        ':video_game_controller:',
        ':playstation:',
        ':xbox:',
        'Playstation',
        'Xbox',
        'Gamepad',
        'Wii U'
    ],
    '♟️': [
        'Alamba de ajedrez negra',
        ':black_chess_pawn:',
        ':black:'
    ],
    '🏹': [
        'Arco y Flecha',
        ':arch:',
        'Arco'
    ],
    '🥅': [
        'Red de objetivo',
        ':goal_net:'
    ],
    '🀄': [
        'Dragón Rojo Mahjong',
        ':mahjong:',
        'Mahjong',
        'Mahjong Tile',
        '中',
        'Dragón Rojo Azulejo Mahjong'
    ],
    '🎴': [
        'Tarjetas de reproducción de flores',
        ':flower_playing_cards:',
        'Baraja de Tarjetas',
        'Hanafuda',
        'Hwatu',
        'Reproduciendo tarjetas'
    ]
};
/*travel and places*/
emojis_language[lang][9] = {
    '🚂': [
        'Locomotora de vapor',
        ':steam_train:',
        'Tren de vapor',
        'Locomotora de vía férrea'
    ],
    '🚃': [
        'Coche de Railway',
        ':railway_car:',
        'Coche',
        'Coche Railroad',
        'Carretera de vía férrea',
        'Vagón de vía férrea'
    ],
    '🚄': [
        'Tren de alta velocidad',
        ':high_speed_train:'
    ],
    '🚅': [
        'Tren de bala',
        ':bullet_train:',
        'Shinkansen',
        'Tren de alta velocidad con nariz de bala'
    ],
    '🚆': [
        'Entrenar',
        ':train:'
    ],
    '🚇': [
        'Subterráneo',
        ':underground:',
        'Tubo',
        'Metro',
        'Metro'
    ],
    '🚈': [
        'Raíl ligero',
        ':light_rail:',
        'Entrenar'
    ],
    '🚊': [
        'Tranvía',
        ':tram:'
    ],
    '🚝': [
        'Monorila',
        ':monorail:',
        'Entrenar'
    ],
    '🚞': [
        'Vía férrea de montaña',
        ':mountain_railway:',
        'Funicular',
        'Entrenar y Montaña'
    ],
    '🚋': [
        'Tranvía',
        ':tram_car:'
    ],
    '🚌': [
        'Autobús',
        ':bus:',
        'Tutor'
    ],
    '🚍': [
        'Autobús entrante',
        ':front_of_bus:',
        'Frontal del autobús'
    ],
    '🚎': [
        'Troleybus',
        ':trolleybus:',
        'Autobús eléctrico'
    ],
    '🚐': [
        'Minibus',
        ':minibus:',
        'Miniván',
        'Personas superiores'
    ],
    '🚑': [
        'Ambulancia',
        ':ambulance:'
    ],
    '🚒': [
        'Motor de fuego',
        ':fire_engine:',
        'Departamento de Fuego',
        'Camión de fuego'
    ],
    '🚓': [
        'Coche de policía',
        ':police_car:',
        'Coche',
        'Carretera de policía'
    ],
    '🚔': [
        'Coche de Policía entrante',
        ':front_of_police_car:',
        'Frontal de Policía',
        'Coche'
    ],
    '🚕': [
        'Taxi',
        ':taxi:',
        'Taxi neoyorquino',
        'Lado de taxi'
    ],
    '🚖': [
        'Taxi',
        ':front_of_taxi:',
        'Taxi entrante',
        'Frontal de Taxi'
    ],
    '🚗': [
        'Automóvil',
        ':car:',
        'Coche rojo',
        'Lado del coche',
        'Coche'
    ],
    '🚘': [
        'Automóvil entrante',
        ':front_of_car:',
        'Coche rojo',
        'Frente de coche'
    ],
    '🚚': [
        'Camión de entrega',
        ':lorry:',
        'Loro'
    ],
    '🚛': [
        'Lorry Articulado',
        ':articulated_lorry:',
        'Camión Verde'
    ],
    '🚜': [
        'Tractor',
        ':tractor:',
        'Granja'
    ],
    '🛻': [
        'Camión de recogida',
        ':pickup_truck:'
    ],
    '🏎️': [
        'Coche de carreras',
        ':racing_car:',
        'F1',
        'Fórmula 1',
        'Carrera'
    ],
    '🏍️': [
        'Motocicleta',
        ':motorbike:',
        'Motocicleta'
    ],
    '🛵': [
        'Scooter motor',
        ':motor_scooter:',
        'Vespa',
        'Motocicleta',
        'Motocicleta'
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
        'Patear patinador',
        ':kick_scooter:'
    ],
    '⛵': [
        'Barco de vela',
        ':sailboat:',
        'Dinghy',
        'Yate'
    ],
    '🚤': [
        'Barco de velocidad',
        ':speedboat:',
        'Barco de motor',
        'Barco eléctrico'
    ],
    '🛳️': [
        'Nave de pasajeros',
        ':passenger_ship:'
    ],
    '⛴️': [
        'Feliz',
        ':ferry:'
    ],
    '🛥️': [
        'Barco de motor',
        ':motor_boat:'
    ],
    '🚢': [
        'Crucero',
        ':cruise_ship:'
    ],
    '✈️': [
        'Avión',
        ':airplane:',
        'Aeroplane'
    ],
    '🛩️': [
        'Avión pequeño',
        ':small_airplane:',
        'Pequeño aeroplano'
    ],
    '🚁': [
        'Helicóptero',
        ':helicopter:'
    ],
    '🚟': [
        'Railway de suspensión',
        ':suspension_railway:'
    ],
    '🚠': [
        'Cañón de montaña',
        ':mountain_cableway:'
    ],
    '🚡': [
        'Tranvía aérea',
        ':aerial_tramway:',
        'Teléfono',
        'Gondola',
        'Vía'
    ],
    '🛰️': [
        'Satelite',
        ':satellite:'
    ],
    '🚀': [
        'Cohete',
        ':rocket:',
        'Ataque espacial'
    ],
    '🛸': [
        'platillo volador',
        ':flying_saucer:',
        'OVNI'
    ],
    '🚉': [
        'Estación de tren',
        ':train_station:',
        'Plataforma de tren'
    ],
    '🚏': [
        'Parada de bus',
        ':bus_stop:'
    ],
    '🛣️': [
        'Autopista',
        ':motorway:',
        'Camino',
        'Vía',
        'Interestado'
    ],
    '🛤️': [
        'Rastreo de Railway',
        ':railway_track:'
    ],
    '🛫': [
        'Salida del avión',
        ':airplane_departure:',
        'Despegar'
    ],
    '🛬': [
        'Llegada de avión',
        ':airplane_arrival:',
        'Aeronave que llega',
        'Terreno'
    ],
    '🗾': [
        'Mapa de Japón',
        ':map_of_japan:'
    ],
    '⛰️': [
        'Montaña',
        ':mountain:'
    ],
    '🏔️': [
        'Montaña con tope de nieve',
        ':snow_capped_mountain:'
    ],
    '🌋': [
        'Volcán',
        ':volcano:'
    ],
    '🗻': [
        'Montar Fuji',
        ':mount_fuji:',
        'Fuji-san'
    ],
    '🏕️': [
        'Camping',
        ':camping:',
        'Camping'
    ],
    '🏖️': [
        'Playa con Umbrella',
        ':beach_with_umbrella:'
    ],
    '🏜️': [
        'Desert',
        ':desert:'
    ],
    '🏝️': [
        'Isla del Desierto',
        ':desert_island:'
    ],
    '🏞️': [
        'Parque Nacional',
        ':national_park:'
    ],
    '🏟️': [
        'Estadio',
        ':stadium:',
        'Gran Soporte',
        'Estadio Deportivo'
    ],
    '🏛️': [
        'Edificio Clásico',
        ':classical_building:',
        'Griego',
        'Roma'
    ],
    '🏗️': [
        'Construcción',
        ':building_construction:',
        'Grúa'
    ],
    '🏘️': [
        'Edificios de Casas',
        ':houses_building:',
        'Grupo de Casas'
    ],
    '🏚️': [
        'Edificio abandonado de la casa',
        ':old_house:',
        'Casa abandonada',
        'Casa Vieja',
        'Casa embrujada'
    ],
    '🏠': [
        'Inicio',
        ':home:',
        'Edificio de Casa'
    ],
    '🏡': [
        'Casa con jardín',
        ':house_with_garden:',
        'Casa y árbol'
    ],
    '🏢': [
        'Edificio de oficina',
        ':office_building:',
        'Edificio de ciudad',
        'Edificio de alto ascenso'
    ],
    '🏣': [
        'Oficina de correos japonesa',
        ':japanese_post_office:',
        'Marca postal japonesa'
    ],
    '🏤': [
        'Oficina de correos',
        ':european_post_office:',
        'Oficina postal europea'
    ],
    '🏥': [
        'Hospital',
        ':hospital:',
        'E',
        'A&E',
        'Sala de Emergencia',
        'Accidente y emergencia',
        'Cruz Roja',
        'Médico'
    ],
    '🏦': [
        'Banco',
        ':bank:',
        'BK',
        'Bakkureru',
        'Rama bancaria',
        'Bakkureru'
    ],
    '🏨': [
        'Hotel',
        ':hotel:',
        'Alojamiento',
        'H Edificio'
    ],
    '🏩': [
        'Hotel encantado',
        ':love_hotel:',
        'Hotel amante del corazón'
    ],
    '🏪': [
        'Tienda de conveniencia',
        ':convenience_store:',
        'Tienda 24 horas',
        '7-11',
        'Tienda de esquina',
        'Kwik-E-Mart'
    ],
    '🏫': [
        'Escuela',
        ':school:',
        'Torre del reloj',
        'Medio El-Alto'
    ],
    '🏬': [
        'Grandes Tienda',
        ':department_store:',
        'Centro comercial',
        'Tienda'
    ],
    '🏭': [
        'Fábrica',
        ':factory:',
        'Industrial',
        'Industria',
        'Contaminar',
        'Humo'
    ],
    '🏯': [
        'Castillo Japonés',
        ':japanese_castle:',
        'Fortaleza'
    ],
    '🏰': [
        'Castillo Europeo',
        ':european_castle:',
        'Turrets'
    ],
    '💒': [
        'Corazón de la Iglesia',
        ':church_heart:',
        'Iglesias',
        'Matrimonio'
    ],
    '🗼': [
        'Torre Tokyo',
        ':tokyo_tower:',
        'Torre Eiffel',
        'Torre Roja'
    ],
    '🗽': [
        'Estatua de la libertad',
        ':statue_of_liberty:',
        'Nueva York'
    ],
    '⛪': [
        'Edificio de Iglesia',
        ':church_building:',
        'Cruzado'
    ],
    '🕌': [
        'Mezquita',
        ':mosque:',
        'Techo domado',
        'Minaret'
    ],
    '🛕': [
        'Templo hindú',
        ':hindu_temple:'
    ],
    '🕍': [
        'Synagogue',
        ':synagogue:',
        'Judío',
        'Synagog',
        'Templo'
    ],
    '⛩️': [
        'Santuario de Shinto',
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
        'Umbrella en tierra',
        ':beach_umbrella:',
        'Umbrella de playa'
    ],
    '🌄': [
        'Levantamiento sobre las montañas',
        ':sunrise_over_mountains:',
        'Mañana',
        'Aislamiento'
    ],
    '🌅': [
        'Aislamiento',
        ':sunrise:',
        ':sunset:',
        'Aislamiento'
    ],
    '🌆': [
        'Cityscape al atardecer',
        ':cityscape_at_dusk:',
        'Ciudad del cielo naranja',
        'Ciudad Oscuro'
    ],
    '🌇': [
        'Aislamiento sobre edificios',
        ':sunset_over_buildings:',
        'Aislamiento de Ciudad'
    ],
    '🌃': [
        'Noche con estrellas',
        ':night_with_stars:',
        'Ciudad por la noche',
        'Noche estrellada'
    ],
    '🗿': [
        'Moai',
        ':moai:',
        'Estatua de Isla de Pascua',
        'Taller de roca humana',
        'Estatua de Moyai'
    ],
    '🌠': [
        'Estrella de tiro',
        ':shooting_star:',
        'Cuando quieras una estrella',
        'Meteoroide'
    ],
    '🌌': [
        'Vía Láctea',
        ':milky_way:',
        'Galaxia',
        'Cielo Nocturno',
        'Espacio',
        'Estrellas',
        'Universo'
    ],
    '🎑': [
        'Ceremonia de visualización lunar',
        ':moon_viewing_ceremony:',
        'Hierba, Dumplings y Luna',
        'Cosechar Luna',
        'Festival de Medio-Otoño',
        'Tsukimi'
    ],
    '🛖': [
        'Choza',
        ':hut:'
    ],
    '🎢': [
        'Costera Roller',
        ':roller_coaster:',
        'Montaña RollerMounter',
        'Parque temático'
    ],
    '🛝': [
        'Diapositiva de Jugador',
        ':playground_slide:',
        'Bebé',
        'Niños'
    ]
};
/*technologies (smartphones, laptops, etc.) and office*/
emojis_language[lang][10] = {
    '⌚': [
        'Vigilar',
        ':watch:',
        'Tiempo',
        'Manzana reloj'
    ],
    '⏰': [
        'Reloj de alarma',
        ':alarm_clock:'
    ],
    '⏱️': [
        'Cronómetro',
        ':stopwatch:'
    ],
    '⏲️': [
        'Reloj temporizador',
        ':timer_clock:'
    ],
    '🕰️': [
        'Reloj Mantelpiece',
        ':mantelpiece_clock:'
    ],
    '🧭': [
        'Brújula',
        ':compass:'
    ],
    '🕹️': [
        'Joystick',
        ':joystick:'
    ],
    '🎙️': [
        'Micrófono Studio',
        ':studio_microphone:'
    ],
    '🎚️': [
        'Slider de nivel',
        ':level_slider:'
    ],
    '🎛️': [
        'Controlar Knobs',
        ':control_knobs:'
    ],
    '📻': [
        'Radio',
        ':radio:',
        'Radio digital',
        'Inalámbrica'
    ],
    '📱': [
        'Teléfono móvil',
        ':mobile_phone:',
        'Smartphone',
        'iPhone',
        'Teléfono'
    ],
    '📲': [
        'Teléfono móvil con flecha derecha a la izquierda',
        ':phone_call:',
        'Llamada telefónica',
        'Puntuando al teléfono'
    ],
    '☎️': [
        'Teléfono Negro',
        ':rotary_phone:',
        'Teléfono rotario',
        ':red:'
    ],
    '📞': [
        'Receptor de teléfono',
        ':phone:',
        'Handset',
        'Teléfono',
        ':black:'
    ],
    '📟': [
        'Pagador',
        ':pager:',
        'Tirador',
        'Durmiente'
    ],
    '📠': [
        'Máquina de fax',
        ':fax_machine:',
        'Facsimile',
        'Fax'
    ],
    '🔋': [
        'Batería',
        ':battery:',
        'Batería AA',
        'Batería del teléfono'
    ],
    '🔌': [
        'Plug eléctrico',
        ':power_cable:',
        'AC Adaptor',
        'Cable de energía',
        'Plug de energía'
    ],
    '💻': [
        'Portátil',
        ':laptop:',
        'Cuadro',
        'Ordenador Personal',
        'PC',
        'MacBook',
        'Superficie'
    ],
    '🖥️': [
        'Ordenador de escritorio',
        ':desktop_computer:',
        'iMac',
        'PC'
    ],
    '🖨️': [
        'Impresora',
        ':printer:'
    ],
    '⌨️': [
        'Keyboard',
        ':keyboard:'
    ],
    '🖱️': [
        'Ratón de computadora',
        ':computer_mouse:',
        'Ratón de tres botones'
    ],
    '🖲️': [
        'Trackball',
        ':trackball:'
    ],
    '💽': [
        'Disco de ordenador',
        ':blu_ray:',
        'Minidisc',
        'Cd',
        'DVD',
        'Blu-ray',
        'BD'
    ],
    '💾': [
        'Disco floppy',
        ':floppy_disk:',
        'Disco de 3.5',
        'Disco'
    ],
    '💿': [
        'Disco óptico',
        ':cd:',
        'Cd',
        'CD-ROM',
        'Disco de pacto'
    ],
    '📀': [
        'DVD',
        'DVD-ROM',
        ':dvd:',
        'Video DVD'
    ],
    '🎥': [
        'Cámara de película',
        ':movie_camera:',
        'Cámara de película',
        'Madera Vacía',
        'Película'
    ],
    '🎞️': [
        'Fotogramas de película',
        ':film_frames:'
    ],
    '📽️': [
        'Proyector de cine',
        ':film_projector:'
    ],
    '📺': [
        'Televisión',
        ':tv:',
        'Tv'
    ],
    '📷': [
        'Cámara digital',
        ':digital_camera:'
    ],
    '📸': [
        'Cámara con Flash',
        ':camera_flash:'
    ],
    '📹': [
        'Cámara de vídeo',
        ':video_camera:',
        'Cámara'
    ],
    '📼': [
        'Videocassette',
        ':vhs:',
        'VHS',
        'VCR',
        'Toque de vídeo',
        'Videocassette'
    ],
    '💳': [
        'Tarjeta de crédito',
        ':credit_card:',
        'Tarjeta de débito',
        'MÁS',
        'Diners Club',
        'American Express',
        'Mastercard',
        'Tarjeta VISA'
    ],
    '📧': [
        'Correo',
        ':email:',
        'E-mail'
    ],
    '📨': [
        'Sobre entrante',
        ':incoming_envelope:',
        'Sobre con líneas',
        'Sobre rápido'
    ],
    '📩': [
        'Sobre con flecha hacia abajo arriba',
        ':insert_in_envelope:',
        'Sobre de flecha abajo',
        'Insertar en el sobre'
    ],
    '📤': [
        'Bandeja de salida',
        ':outbox_tray:'
    ],
    '📥': [
        'Bandeja de entrada',
        ':inbox_tray:'
    ],
    '📮': [
        'Buzón',
        ':postbox:'
    ],
    '📁': [
        'Carpeta de archivos',
        ':file_folder:',
        'Carpeta',
        'Directorio',
        'Carpeta de archivo cerrada'
    ],
    '📂': [
        'Abrir carpeta de archivos',
        ':open_file_folder:',
        'Directorio'
    ],
    '🗂️': [
        'Dividers del índice de tarjeta',
        ':card_index_dividers:'
    ],
    '📅': [
        'Calendario',
        ':calendar:',
        '17 de julio',
        'Día Mundial de los Emoji'
    ],
    '🗓️': [
        'Alfombra de Calendario Espiral',
        ':spiral_calendar_pad:'
    ],
    '📆': [
        'Calendario de Tear-Off',
        ':day_calendar:',
        'Calendario del día',
        'Calendario de escritorio'
    ],
    '📈': [
        'Incrementando Gráfico',
        ':increasing_chart:',
        'Gráfico positivo',
        'Gráfico de puntaje',
        'Gráfico con tendencia ascendente'
    ],
    '📉': [
        'Disminución del gráfico',
        ':decreasing_chart:',
        'Gráfico negativo',
        'Gráfico de Punturas Abajo',
        'Gráfico con tendencia descendente'
    ],
    '📊': [
        'Gráfico de barras',
        ':bar_chart:',
        'Gráfico de barra'
    ],
    '📌': [
        'Pin',
        ':pushpin:',
        'Thumb Tack',
        ':red:'
    ],
    '📋': [
        'Portapapeles',
        ':clipboard:'
    ],
    '📍': [
        'Pin Redondear',
        ':round_pushpin:',
        'Pin soltado',
        'Fijar mapa',
        'Fijar',
        'Pin rojo',
        ':red:'
    ],
    '📎': [
        'Paperclip',
        ':paperclip:',
        'Clippy'
    ],
    '📏': [
        'Regla Straight',
        ':straight_ruler:'
    ],
    '📐': [
        'Regla triangular',
        ':triangular_ruler:',
        'Regla del triángulo'
    ],
    '✂️': [
        'Tijeras',
        ':scissors:',
        'Cortando'
    ],
    '✏️': [
        'Lápiz',
        ':pencil:',
        'Lápiz de cabeza'
    ],
    '✒️': [
        'Nib Negro',
        ':black_nib:',
        'Nib Pen',
        'Fuente Pen'
    ],
    '🖋️': [
        'Fuente Pen',
        ':fountain_pen:',
        'Fuente baja izquierda Pen'
    ],
    '🖊️': [
        'Pen',
        ':pen:',
        'Pen de balón inferior izquierdo',
        'Pen de Balón'
    ],
    '🖌️': [
        'Pintorería',
        ':paintbrush:',
        'Pincel',
        'Baja Pintbrush Izquierda'
    ],
    '🖍️': [
        'Crayon',
        ':crayon:',
        'Crayón inferior izquierdo'
    ],
    '📝': [
        'Nota',
        ':memo:',
        'Memorandum',
        'Nota',
        'Lápiz y papel'
    ],
    '🗑️': [
        'Cesta de Papel Residuales',
        ':wastepaper_basket:',
        'Lata de basura',
        'Papelera',
        'Lata de basura'
    ],
    '📡': [
        'Antena de Satellite',
        ':satellite_antenna:'
    ],
    '🔭': [
        'Telescopio',
        ':telescope:',
        'Sorprendente'
    ],
    '🔬': [
        'Microscopio',
        ':microscope:',
        'Magnify',
        'Ciencia'
    ],
    '📭': [
        'Abrir buzón con bandera baja',
        ':open_mailbox_lowered:'
    ],
    '📬': [
        'Abrir buzón con bandera aumentada',
        ':open_mailbox_raised:',
        'Abrir buzón'
    ],
    '📪': [
        'Buzón cerrado con bandera baja',
        ':closed_mailbox_lowered:'
    ],
    '📫': [
        'Buzón cerrado con bandera reforzada',
        ':closed_mailbox_raised:'
    ],
    '📰': [
        'Periódico',
        ':newspaper:'
    ],
    '🗞️': [
        'Periódico Roled-Up',
        ':rolled_up_newspaper:',
        'Entrega de periódicos'
    ],
    '📄': [
        'Página para arriba',
        ':printed_page:',
        'Página impresa'
    ],
    '📜': [
        'Desplazar',
        ':scroll:',
        'Grado',
        'Parchment'
    ],
    '📃': [
        'Página con Curl',
        ':curled_page:',
        'Curled Page',
        'Curly Page'
    ],
    '📓': [
        'Cuadro',
        ':notebook:',
        'Libro Blanco y negro'
    ],
    '📔': [
        'Gancho de notas con portada decorativa',
        ':notebook_decorative_cover:'
    ],
    '📕': [
        'Libro cerrado',
        ':closed_book:',
        'Libro rojo',
        'Texto rojo',
        ':red:'
    ],
    '📖': [
        'Abrir libro',
        ':open_book:',
        'Reservar',
        'Novel'
    ],
    '📗': [
        'Libro Verde',
        ':green_book:',
        'Texto verde',
        ':green:'
    ],
    '📘': [
        'Libro azul',
        ':blue_book:',
        'Libro de texto azul',
        ':blue:'
    ],
    '📙': [
        'Libro Naranja',
        ':orange_book:',
        'Texto naranja',
        ':orange:'
    ],
    '📚': [
        'Libros',
        ':books:',
        'Pila de libros',
        'Pila de libros'
    ],
    '🗳️': [
        'Boleta con boleta',
        ':ballot_box:',
        'Caja de votos',
        'Votaciones'
    ],
    '🗄️': [
        'Archivador',
        ':file_cabinet:',
        'Archivador'
    ],
    '🗃️': [
        'Caja de Archivo de Tarjeta',
        ':card_file_box:'
    ],
    '🖇️': [
        'Paperclips enlazados',
        ':linked_paperclips:',
        ':gray:',
        ':grey:'
    ]
};
/*clothes and accessories*/
emojis_language[lang][11] = {
    '👣': [
        'Huellas',
        ':footprints:',
        'Carácter',
        'Pasos a pie'
    ],
    '👓': [
        'Vidrios',
        ':glasses:',
        'Vidrios'
    ],
    '🕶️': [
        'Gafas de Sol',
        ':sunglasses:'
    ],
    '🥽': [
        'Gafas',
        ':goggles:'
    ],
    '🥼': [
        'Capa de laboratorio',
        ':lab_coat:'
    ],
    '👔': [
        'Necktie',
        ':necktie:',
        'Camisa de negocios',
        'Camisa y tie'
    ],
    '👕': [
        'Camiseta',
        ':t_shirt:',
        ':t-shirt:',
        'Camisa de Tee',
        'Camisa de polo'
    ],
    '👖': [
        'Vaqueros',
        ':jeans:',
        'Denim',
        'Pantalones',
        'Pantalones'
    ],
    '🧣': [
        'Scarf',
        ':scarf:'
    ],
    '🧤': [
        'Guantes',
        ':gloves:'
    ],
    '🧥': [
        'Capa',
        ':coat:'
    ],
    '🧦': [
        'Socks',
        ':socks:'
    ],
    '👗': [
        'Progreso',
        ':dress:',
        'Fragmento',
        'Abajo'
    ],
    '👘': [
        'Kimono',
        ':kimono:',
        'Vestido de Gown',
        'Progreso japonés'
    ],
    '👙': [
        'Bikini',
        ':bikini:',
        'Malditos',
        'Traje de baño'
    ],
    '🩱': [
        'Traje de baño de una sola pieza',
        'uno_palo_baño',
        'uno-piece_traje de baño'
    ],
    '👚': [
        'Ropa de mujeres',
        ':womans_clothes:',
        'Ropa de mujeres',
        'Blouse',
        'Camisa rosa',
        'Blouse'
    ],
    '👛': [
        'Bolsa',
        ':purse:',
        'Cartera'
    ],
    '👜': [
        'Bolsa',
        ':handbag:'
    ],
    '👝': [
        'Bolsa de Club',
        ':clutch_bag:',
        'Clubes',
        'Pequeña Bolsa',
        'Pouch'
    ],
    '🎒': [
        'Mochila',
        ':backpack:',
        'Bag',
        'Bolsa escolar',
        'Satchel escolar',
        'Rucksack'
    ],
    '👞': [
        'Mans Shoe',
        ':mans_shoe:',
        'Mans Shoe',
        'Zapato',
        'Mostrar marrón',
        'Mostrar progreso'
    ],
    '👟': [
        'Zapato atletico',
        ':athletic_shoe:',
        'Zapato en ejecución',
        'Sneaker',
        'Ejecutador',
        'Entrenador',
        'Zapato de tenis'
    ],
    '🥾': [
        'Arrancamiento',
        ':hiking_boot:'
    ],
    '🥿': [
        'Zapato plano',
        ':flat_shoe:'
    ],
    '👠': [
        'Zapato de tacón alto',
        ':high_heeled_shoe:',
        ':high_heel:',
        'Stiletto',
        'Tonos altos'
    ],
    '👡': [
        'Sandal de mujeres',
        ':womans_sandal:',
        'Sandal de mujeres',
        'Sandal de talón',
        'Arandales',
        'Sandal'
    ],
    '👢': [
        'Botas de mujeres',
        ':womans_boots_',
        'Botas de mujeres',
        'Botas de Cowgirl',
        'Botas altas de rodilla',
        'Botas de talón'
    ],
    '👑': [
        'Corona',
        ':crown:',
        'Rey',
        'Reina',
        'Príncipe',
        'Real',
        'Príncipe',
        ':gold:',
        ':yellow:'
    ],
    '👒': [
        'Sombrero',
        ':hat:',
        'Sombrero de mujeres',
        'Sombrero con arco',
        'Sombrero de damas'
    ],
    '🎩': [
        'Sombrero superior',
        ':top_hat:',
        'Vestido formal',
        'Groom',
        ':black:'
    ],
    '🎓': [
        'Límite de graduación',
        ':graduation_cap:',
        'Colegio',
        'Graduado',
        'Tablón de mortero',
        'Universidad',
        'Gorra Académica cuadrada',
        ':black:'
    ],
    '🧢': [
        'Gorra facturada',
        ':billed_cap:',
        'Gorra de béisbol'
    ],
    '⛑️': [
        'Casco con Cruz Blanca',
        ':helmet_with_white_cross:',
        ':helmet_with_cross:',
        ':rescue_worker_helmet:',
        ':rescue_workers_helmet:',
        'Casco de Trabajadores de Rescate',
        ':red:',
        ':white:'
    ],
    '💼': [
        'Favoritos',
        ':briefcase:',
        'Traje'
    ],
    '🎖️': [
        'Medalla Militar',
        ':military_medal:',
        ':medal:',
        'Medalla',
        'Medallón',
        'Decoración militar'
    ],
    '📿': [
        'Gotas de oración',
        ':prayer_beads:',
        'Perlas de Dhikr',
        'Perlas de Rosary'
    ],
    '🎗️': [
        'Ribbo de recordatorio',
        ':reminder_ribbo:'
    ],
    '🤿': [
        'Máscara de diversión',
        ':diving_mask:'
    ],
    '🦺': [
        'Chaleco de seguridad',
        ':safety_vest:'
    ],
    '🥻': [
        'Sari',
        ':sari:',
        'Saree',
        'Shari'
    ],
    '🩲': [
        'Brief',
        ':briefs:'
    ],
    '🩳': [
        'Acortes',
        ':shorts:'
    ],
    '🛼': [
        'Patín de Roller',
        ':roller_skate:',
        'Patín en línea',
        'Derby Roller'
    ],
    '🩴': [
        'Voltear Flop',
        ':flip_flop:',
        'Arenas de Thong'
    ],
    '🪖': [
        'Casco Militar',
        ':military_helmet:'
    ],
    '🩰': [
        'Zapatos de ballet',
        ':ballet_shoes:',
        'Zapato de Pointe'
    ],
    '🩼': [
        'Crutch',
        ':crutch:'
    ]
};
/*hands and parts of body*/
emojis_language[lang][12] = {
    '👋{{skin_tone}}': [
        'Señal de mano ondulada',
        ':wave:',
        ':waving_hand:',
        'Adiós',
        'Onda de mano',
        'Hola',
        'Hi'
    ],
    '🖐️{{skin_tone}}': [
        'Mano con dedos jugados',
        ':hand_splayed:',
        ':raised_hand_with_fingers_splayed:',
        ':hand_with_fingers_splayed:',
        'Cinco manos',
        'Mano jugada',
        'Mano criada con dedos jugados'
    ],
    '🤚{{skin_tone}}': [
        'Atrás de la mano criado',
        ':raised_back_of_hand:',
        ':back_of_hand:',
        'Retroceso'
    ],
    '✋{{skin_tone}}': [
        'Mano criada',
        ':raised_hand:',
        ':hand:',
        'Cinco Altos',
        'Parar'
    ],
    '🖖{{skin_tone}}': [
        'Vulcan Salute',
        ':vulcan_salute:',
        'Spock',
        'Star Trek',
        'Mano criada con parte entre el medio y los dedos del anillo'
    ],
    '👌{{skin_tone}}': [
        'Cartel de mano OK',
        ':ok_hand:',
        'Vale',
        'Perfecto',
        'Sí'
    ],
    '✌️{{skin_tone}}': [
        'Mano de Victoria',
        ':victory_hand:',
        'Cotizaciones aéreas',
        'Cartel de Paz',
        'Signo V'
    ],
    '🤞{{skin_tone}}': [
        'Dedos Cruzados',
        ':crossed_fingers:',
        'Dedos Cruzados',
        'Buena suerte',
        'Mano con índices y dedos medianos encontrados'
    ],
    '🤟{{skin_tone}}': [
        'Gesto Amor-Tú',
        ':love_you_gesture:',
        ':i_love_you_hand_sign:',
        'Te encanta el cartel de mano'
    ],
    '🤘{{skin_tone}}': [
        'Signo de los cuernos',
        ':the_horns:',
        ':sign_of_the_horns:',
        ':metal:',
        'Dedos del Diablo',
        'Metal pesado',
        'Roca encendida'
    ],
    '🤙{{skin_tone}}': [
        'Llámame firma de mano',
        ':call_me_hand:',
        ':call_me:',
        'Mano del teléfono',
        'Shaka'
    ],
    '🤏{{skin_tone}}': [
        'Mano apiladora',
        ':pinching_hand:'
    ],
    '👈{{skin_tone}}': [
        'Indice a la izquierda',
        ':backhand_index_pointing_left:',
        ':point_left:',
        'Índice blanco izquierdo en la parte trasera'
    ],
    '👉{{skin_tone}}': [
        'Indice a la derecha de puntaje a la espalda',
        ':backhand_index_pointing_right:',
        ':point_right:',
        'Índice blanco derecho de puntaje en la parte trasera'
    ],
    '👆{{skin_tone}}': [
        'Puntuación de índices a mano derecha',
        ':point_up_2:',
        ':backhand_index_pointing_up:',
        'Índice en la parte trasera de Punto Blanco Arriba',
        'Dedo medio'
    ],
    '👇{{skin_tone}}': [
        'Puntuación de índices en la parte inferior',
        ':point_down:',
        ':backhand_index_pointing_down:',
        'Índice blanco abajo de puntaje a la espalda',
        'Puntuación abajo'
    ],
    '☝{{skin_tone}}': [
        'Indice de apuntar con el dedo',
        ':point_up:',
        ':index_pointing_up:',
        'Índice de Puntuación de White Up',
        'Secreto'
    ],
    '🖕{{skin_tone}}': [
        'Dedo medio',
        ':middle_finger:',
        'Voltear el pájaro',
        'Dedo ruidoso',
        'Mano con dedos medianos extendidos'
    ],
    '👍{{skin_tone}}': [
        'Señal de Pulgares',
        ':thumbs_up_sign:',
        'Me gusta',
        'Sí'
    ],
    '👎{{skin_tone}}': [
        'Señal de pulgar abajo',
        ':thumbs_down_sign:',
        'Malo',
        'Dislike',
        'Nu'
    ],
    '✊{{skin_tone}}': [
        'Puño criado',
        ':raised_fist:',
        'Bomba de puño'
    ],
    '👊{{skin_tone}}': [
        'Puño entrante',
        ':oncoming_fist:',
        'Bro Fist',
        'Brofist',
        'Bump de puño',
        'Golpear',
        'Puño cerrado',
        'Cartel de mano con puñado'
    ],
    '🤛{{skin_tone}}': [
        'Bump del puño izquierdo',
        ':left_fist_bump:'
    ],
    '🤜{{skin_tone}}': [
        'Bump de puño derecho',
        ':right_fist:bump:'
    ],
    '🤌{{skin_tone}}': [
        'Dedos apilados',
        ':pinched_fingers:',
        'Ma Che Vuoi',
        'Bolsa de dedos'
    ],
    '👏{{skin_tone}}': [
        'Señal de manos aplastante',
        ':cap:',
        ':clapping_hands:',
        'Aplausos',
        'Clap',
        'Aplaudo',
        'Carra de golf',
        'Ronda de Aplausos'
    ],
    '🙌{{skin_tone}}': [
        'Persona que aumenta las dos manos en la Celebración',
        ':raised_hands:',
        ':raising_hands:',
        'Manos en aumento',
        'Armas en el aire',
        'Banzai',
        'Miráculo de Festivus',
        'Hallelujah',
        'Alabar manos',
        'Dos manos'
    ],
    '👐{{skin_tone}}': [
        'Abrir signo de manos',
        ':open_hands_sign:',
        'Enchufe',
        'Manos de Jazz'
    ],
    '🤲{{skin_tone}}': [
        'Palms arriba juntos',
        ':palms_up_together:',
        'Dua'
    ],
    '🤝{{skin_tone}}': [
        'Handshake',
        ':handshake:',
        'Manos agitadas'
    ],
    '🙏{{skin_tone}}': [
        'Manos plegadas',
        ':folded_hands:',
        'Namaste',
        'Por favor',
        'Oración',
        'Gracias.',
        'Persona con manos plegadas'
    ],
    '✍{{skin_tone}}': [
        'Mano Escritora',
        ':writing_hand:'
    ],
    '🫱{{skin_tone}}': [
        'Mano hacia la derecha',
        ':rightwards_hand:'
    ],
    '🫲{{skin_tone}}': [
        'Mano a la izquierda',
        ':leftwards_hand:'
    ],
    '🫳{{skin_tone}}': [
        'Mano Abajo',
        ':palm_down_hand:'
    ],
    '🫴{{skin_tone}}': [
        'Mano de palma arriba',
        ':palm_up_hand:'
    ],
    '🫰{{skin_tone}}': [
        'Mano con el dedo con el índice y el pulgar Cruzado',
        ':hand_with_index_finger_and_thumb_crossed:'
    ],
    '🫵{{skin_tone}}': [
        'Puntuación de índices en el visor',
        ':index_pointing_at_the_viewer:'
    ],
    '🫶{{skin_tone}}': [
        'Manos del corazón',
        ':heart_hands:',
        'Amor'
    ],
    '💪{{skin_tone}}': [
        'Biceps flexados',
        ':flexed_biceps:',
        'Musculares de brazo flexionantes',
        'Musle',
        'Fuerte'
    ],
    '🦵{{skin_tone}}': [
        'Pata',
        ':leg:'
    ],
    '🦶{{skin_tone}}': [
        'Alimento',
        ':foot:'
    ],
    '👂{{skin_tone}}': [
        'Gema',
        ':ear:',
        'Ojos',
        'Escuchando',
        'Escuchando'
    ],
    '👃{{skin_tone}}': [
        'Nariz',
        ':nose:',
        'Fundición',
        'Sniffing',
        'Stinky'
    ],
    '🦻{{skin_tone}}': [
        'Ear con ayuda de oído',
        ':ear_with_hearing_aid:'
    ],
    '🧠': [
        'Cerebro',
        ':brain:',
        ':pink:'
    ],
    '🦷': [
        'Diente',
        ':tooth:',
        ':white:'
    ],
    '👀': [
        'Ojos',
        ':eyes:',
        'Bolas',
        'Ojos Shifty',
        'Ojos sabios'
    ],
    '👁️': [
        'Ojo',
        ':eye:',
        'Ojo único'
    ],
    '👅': [
        'Lengua fuera',
        ':tongue_out:',
        ':red:'
    ],
    '👄': [
        'Boca',
        ':mouth:',
        'Labios besados',
        'Labios',
        ':red:'
    ],
    '🫦': [
        'Bitting labio',
        ':biting_lip:',
        'Labios',
        ':red:'
    ],
    '🫀': [
        'Corazón anatómico',
        ':anatomical_heart:',
        ':red:'
    ],
    '🫁': [
        'Trozos',
        ':lungs:',
        ':red:'
    ],
    '🦾': [
        'Brazo mecánico',
        ':mechanical_arm:',
        'Fuerte',
        ':gray:',
        ':grey:'
    ],
    '🦿': [
        'Pata mecánica',
        ':mechanical_leg:',
        ':gray:',
        ':grey:'
    ],
    '💅{{skin_tone}}': [
        'Polaco de uña',
        ':nail_polish:',
        'Dedos',
        'Manicure',
        'Nonchalant'
    ],
    '🤳{{skin_tone}}': [
        'Selfie',
        ':selfie:',
        'Cámara de teléfono',
        'Mano Selfie'
    ]
};
/*other*/
emojis_language[lang][13] = {
    '💩': [
        'Pila de Poo',
        ':pile_of_poo:',
        'Tierra de perro',
        'Arco sonriente',
        ':brown:'
    ],
    '💋': [
        'Beso Marca',
        ':kiss_mark:',
        'Labios besados',
        ':red:'
    ],
    '🦴': [
        'Hueso',
        ':bone:'
    ],
    '🧳': [
        'Maletín',
        ':luggage:',
        'Traje'
    ],
    '🌂': [
        'Ámbrella cerrada',
        ':closed_umbrella:',
        'Colapsado Umbrella',
        'Umbrella rosa',
        ':pink:',
        ':purple:'
    ],
    '☂️': [
        'Umbrella',
        ':umbrella:',
        ':purple:'
    ],
    '☔': [
        'Umbrella con gotas de lluvia',
        ':umbrella_with_rain_drops:',
        ':umbrella:',
        'Lluviando',
        'Rainy'
    ],
    '🧵': [
        'Spool del hilo',
        ':spool_of_thread:'
    ],
    '🧶': [
        'Bola de Yarn',
        ':ball_of_yarn:'
    ],
    '💄': [
        'Lipstick',
        ':lipstick:',
        'Brillo del labio',
        'Makeup',
        ':red:'
    ],
    '💍': [
        'Anillo',
        ':ring:',
        'Anillo de Diamante',
        'Anillo de compromiso'
    ],
    '💎': [
        'Piedra preciosa',
        ':gem_stone:',
        'Diamante',
        'Gema',
        'Gema',
        'Joya',
        ':blue:'
    ],
    '💥': [
        'Símbolo de colisión',
        ':collision_symbol:',
        'Bang',
        'Explotar',
        'Impacto',
        'Chispa Roja',
        'Explosión'
    ],
    '💫': [
        'Símbolo de Dizzy',
        ':dizzy_symbol:',
        'Círculo y estrella',
        ':yellow:'
    ],
    '💦': [
        'Símbolo de Sweat Arrojadizo',
        'suda_gotas',
        'sudader_gotas',
        'Plewds',
        'Agua aplastante',
        'Gotas de agua',
        ':blue:'
    ],
    '💨': [
        'Dashing Ausente',
        ':dashing_away:',
        'Rápido',
        'Vapor',
        'Vapor',
        'Viento',
        'Símbolo Dash',
        'Polvo de viento'
    ],
    '🌬️': [
        'Cara del viento',
        ':wind_face:',
        'Viento Brillante',
        'Naturaleza Madre',
        'Cara floreciente de viento',
        ':white:'
    ],
    '🐾': [
        'Impresiones Paw',
        ':paw_prints:',
        'Impresiones Paw de Gat',
        'Impresiones Paw de Perro',
        'Impresiones Paw de Kitten',
        'Impresiones Puppy Paw'
    ],
    '🕸️': [
        'Web de Spider',
        ':spider_web:',
        'Telaraña',
        'Web',
        'Tela de araña'
    ],
    '🦠': [
        'Microbios',
        ':microbe:',
        'Celda',
        'Coronavirus',
        'COVID-19',
        'Germen',
        'Microorganismo',
        'Virus',
        ':green:'
    ],
    '💐': [
        'Tienda de Flores',
        ':bouquet_of_flowers:'
    ],
    '🌍': [
        'Globo mostrando Europa-África',
        ':globe_showing_europe_africa:',
        ':earth_africa:',
        'Tierra',
        'Globo',
        'Planeta',
        'Mundo',
        'Globo mostrando a Europa y África',
        ':blue:'
    ],
    '🌎': [
        'Globo mostrando Américas',
        ':globe_showing_americas:',
        ':earth_americas:',
        'Tierra',
        'Globo',
        'Planeta',
        'Mundo',
        ':blue:'
    ],
    '🌏': [
        'Globe Showing Asia-Australia',
        ':globe_showing_asia_australia:',
        ':earth_asia:',
        'Tierra',
        'Globo',
        'Planeta',
        'Mundo',
        'Globe Showing Asia y Australia',
        ':blue:'
    ],
    '🌐': [
        'Globo con Meridianos',
        ':globe_with_meridians:',
        'Internet',
        'World Wide Web',
        'WWW'
    ],
    '🌑': [
        'Símbolo de Luna Nueva',
        ':new_moon:',
        'Luna Oscura',
        'Luna Sombra',
        'Eclipse solar',
        ':black:'
    ],
    '🌒': [
        'Símbolo de Luna Crescente de Cera',
        ':waxing_crescent_moon:',
        ':yellow:',
        ':black:'
    ],
    '🌓': [
        'Primer símbolo de Quarter Moon',
        ':first_quarter_moon:',
        ':yellow:',
        ':black:'
    ],
    '🌔': [
        'Símbolo de Luna Gibbous Waxing',
        ':moon:',
        ':waxing_gibbous_moon:',
        ':yellow:',
        ':black:'
    ],
    '🌕': [
        'Símbolo Luna Llena',
        ':full_moon:',
        ':yellow:'
    ],
    '🌖': [
        'Símbolo de Luna Gibbous Luna',
        ':waning_gibbous_moon:',
        ':yellow:',
        ':black:'
    ],
    '🌗': [
        'Último símbolo de Quarter Moon',
        ':last_quarter_moon:',
        ':yellow:',
        ':black:'
    ],
    '🌘': [
        'Símbolo de Luna Crescente Despertante',
        ':waning_crescent_moon:',
        ':yellow:',
        ':black:'
    ],
    '🌙': [
        'Luna Crescente',
        ':crescent_moon:',
        ':yellow:'
    ],
    '🌚': [
        'Luna Nueva con cara',
        ':new_moon_with_face:',
        'Luna espeluznante',
        'Cara de Luna Oscura',
        'Luna Molester',
        ':black:',
        ':gray:',
        ':grey:'
    ],
    '🌝': [
        'Luna llena con cara',
        ':full_moon_with_face:',
        'Moonface',
        'Luna Smiley',
        'Luna sonriente',
        ':yellow:'
    ],
    '🌛': [
        'Primer Quarter Luna con Cara',
        ':first_quarter_moon_with_face:',
        ':first_quarter_moon_face:',
        ':yellow:'
    ],
    '🌜': [
        'Última Luna con cara',
        ':last_quarter_moon_with_face:',
        ':last_quarter_moon_face:',
        ':yellow:'
    ],
    '🌞': [
        'Sol con cara',
        ':sun_with_face:',
        'Sol Smiley',
        'Sunface',
        'Sol sonriente',
        ':yellow:'
    ],
    '☀️': [
        'Sol',
        ':sun:',
        'Resplandor',
        ':yellow:'
    ],
    '⭐': [
        'Estrella',
        ':star:',
        'Estrella Media Blanca',
        ':yellow:'
    ],
    '🌟': [
        'Estrella brillante',
        ':glowing_star:',
        'Estrella brillante',
        ':yellow:'
    ],
    '☁️': [
        'Nube',
        ':cloud:',
        'Nublado',
        'Soberanía',
        ':white:'
    ],
    '⛅': [
        'Nube Behind Sol',
        ':thunder_cloud_and_rain:',
        ':thunder_cloud_rain:',
        ':cloud_with_lightning_and_rain:',
        ':white:'
    ],
    '⛈️': [
        'Nube con relámpago y lluvia',
        ':thunder_cloud_and_rain:',
        ':thunder_cloud_rain:',
        ':cloud_with_lightning_and_rain:',
        'Nube de truenos y lluvia',
        ':white:'
    ],
    '🌤️': [
        'Sol blanco con nube pequeña',
        ':mostly_sunny:',
        ':sun_behind_small_cloud:',
        ':sun_small_cloud:',
        ':white_sun_small_cloud:',
        ':white_sun_with_small_cloud:',
        ':white:'
    ],
    '🌥️': [
        'Nube grande del sol Behind',
        ':sun_behind_large_cloud:',
        'Nube del Sol Blanco Behind',
        ':white:'
    ],
    '🌦️': [
        'Blanco Sol Behind Cloud con lluvia',
        ':sun_behind_rain_cloud:',
        ':partly_sunny_rain:',
        ':white_sun_rain_cloud:',
        ':white_sun_behind_cloud_with_rain:',
        ':white:'
    ],
    '🌧️': [
        'Nube con lluvia',
        ':cloud_with_rain:',
        ':white:'
    ],
    '🌨️': [
        'Nube con nieve',
        ':cloud_with_snow:',
        ':white:'
    ],
    '🌩️': [
        'Nube con relámpago',
        ':cloud_with_lightning:',
        ':white:'
    ],
    '🌪️': [
        'Tornado',
        ':tornado:',
        'Nube con Tornado'
    ],
    '🌫️': [
        'Fog',
        ':fag:',
        ':white:',
        ':gray:',
        ':grey:'
    ],
    '🌈': [
        'Arco Rainbow',
        ':rainbow:',
        'Pasar Gay',
        'Arco Rainbow primario',
        'LGBTQIA+',
        'LGBT+'
    ],
    '❄️': [
        'Copo de nieve',
        ':snowflake:',
        'Nieve',
        'Nieve',
        ':white:'
    ],
    '🌀': [
        'Clonar',
        ':cyclone:',
        'Huracán',
        'Espiral',
        'Circuito',
        'Tornado'
    ],
    '⚡': [
        'Cartel de alto voltaje',
        ':high_voltage_sign:',
        'Rayo',
        'Tornillo',
        'Alto voltaje'
    ],
    '☃️': [
        'Muñeco de nieve',
        ':snowman:',
        'Muñeco de nieve con Copos de Nieve',
        ':white:'
    ],
    '⛄': [
        'Muñeco de nieve sin nieve',
        'nieve_sin_nieve',
        ':snowman:',
        'El muñeco de nieve',
        'Olaf',
        'Muñeco de nieve',
        ':white:'
    ],
    '☄️': [
        'Cometa',
        ':comet:'
    ],
    '🔥': [
        'Fuego',
        ':fire:',
        'Llama',
        'Calor',
        'Lit',
        'Racha',
        ':red:'
    ],
    '💧': [
        'Droplet',
        ':droplet:',
        'Agua',
        'Gota de agua',
        ':blue:'
    ],
    '✨': [
        'Chispas',
        ':sparkles:',
        'Brillo',
        'Shiny',
        'Nuevo'
    ],
    '🌊': [
        'Ola de agua',
        ':water_wave:',
        'Playa',
        'Ola del océano',
        'Mar',
        ':blue:'
    ],
    '🎄': [
        'Árbol de Navidad',
        'árbol de Navidad',
        'Navidad',
        'Árbol de Navidad',
        ':green:'
    ],
    '🎃': [
        'Farol de Jack',
        'linterna de jack',
        'Halloween',
        'Calabaza',
        ':orange:'
    ],
    '🌻': [
        'Flor aislante',
        ':sunflower:',
        'Flor amarilla',
        ':yellow:'
    ],
    '🌼': [
        'Blossom',
        ':blossom:',
        'Flor floreciente',
        'Daisy',
        'Flor amarilla',
        ':yellow:'
    ],
    '🌷': [
        'Tulip',
        ':tulip:',
        ':pink:'
    ],
    '🌹': [
        'Flor de rosas',
        ':rose_flower:',
        'Rosa Roja',
        ':red:'
    ],
    '☘️': [
        'Roca de chambre',
        ':shamrock:',
        'Trébol',
        'Espuma',
        ':green:'
    ],
    '🍀': [
        'Trébol de Cuatro Hojas',
        ':four_leaf_clover:',
        'Trébol',
        'Irlanda',
        'Suerte',
        'Fortuna',
        ':green:'
    ],
    '🌸': [
        'Cherry Blossom',
        ':cherry_blossom:',
        'Flor rosa',
        'Sakura',
        ':pink:'
    ],
    '💮': [
        'Flor blanca',
        ':white_flower:',
        'Cherry Blossom',
        'Papel Doily',
        'Sello bien hecho',
        ':white:'
    ],
    '🌺': [
        'Hibiscus',
        ':hibiscus:',
        ':red:'
    ],
    '🏵️': [
        'Roseta',
        ':rosette:',
        ':orange:',
        ':yellow:'
    ],
    '🌱': [
        'Seedling',
        ':seedling:',
        'Primavera',
        'Sprout',
        'Brote',
        ':green:'
    ],
    '🌲': [
        'Árbol Evergreen',
        ':evergreen_tree:',
        'Árbol del Fir',
        'Árbol de pino',
        ':green:'
    ],
    '🌳': [
        'Árbol caduco',
        ':deciduous_tree:',
        'Árbol redondeado',
        ':green:'
    ],
    '🌴': [
        'Árbol de palma',
        ':palm_tree:',
        'Árbol de Coco',
        ':green:'
    ],
    '🎋': [
        'Árbol de tanabata',
        ':tanabata_tree:',
        'Tanabata',
        'Árbol de deseos'
    ],
    '🎍': [
        'Decoración de pino',
        ':pine_decoration:',
        'Bambú',
        'Kadomatsu',
        'Decoración de Año Nuevo'
    ],
    '🌵': [
        'Cactus',
        ':cactus:',
        'Desert',
        ':green:'
    ],
    '🌾': [
        'Hoja de arroz',
        ':sheaf_of_rice:',
        'Recortar',
        'Agricultura',
        'Trigo',
        'Gema de arroz'
    ],
    '🌿': [
        'Hierba',
        ':herb:',
        'Recortar',
        'Planta',
        ':green:'
    ],
    '🍁': [
        'Hoja de Arce',
        ':maple_leaf:',
        'Canadá',
        'Canadiense',
        'Arce',
        ':brown:'
    ],
    '🍂': [
        'Hoja de Fallen',
        ':fallen_leaf:',
        'Hoja de Autumn',
        'Hojas de Autumn',
        'Hojas marrones',
        'Hojas de caída',
        'Hojas Fallen',
        ':brown:'
    ],
    '🍃': [
        'Flutamiento de hojas en viento',
        ':leaf_fluttering_in_wind:',
        ':leaves:',
        'Hojas Verdes',
        'Primavera',
        ':green:'
    ],
    '🪴': [
        'Planta en Maceta',
        ':potted_plant:',
        ':green:'
    ],
    '🪸': [
        'Coral',
        ':coral:',
        'Cambio climático'
    ],
    '🪷': [
        'Loto',
        ':lotus:',
        'Pureza',
        'Belleza',
        'Calmedad',
        'Serenidad'
    ],
    '🔑': [
        'Clave',
        ':key:',
        'Llave de Oro',
        ':gold:',
        ':yellow:'
    ],
    '🗝️': [
        'Llave antigua',
        ':old_key:',
        ':brown:'
    ],
    '🔨': [
        'Martillo',
        ':hammer:',
        'Martillo de Garra',
        'Handyman',
        'Herramienta'
    ],
    '⛏️': [
        'Escoger',
        ':pick:',
        'Pico'
    ],
    '🪓': [
        'Hacha',
        ':axe:'
    ],
    '🪚': [
        'Aviso de carpintería',
        ':carpentry_saw:'
    ],
    '🪛': [
        'Destornillador',
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
        'Cubo',
        ':bucket:'
    ],
    '🔩': [
        'Nuez y perno',
        ':nut_and_bolt:',
        'Rayo',
        'Tornillo',
        ':gray:',
        ':grey:'
    ],
    '🗜️': [
        'Limitar',
        ':clamp:',
        'Vice de Mesa',
        'WinZip',
        'Compresión',
        ':gray:',
        ':grey:'
    ],
    '🔒': [
        'Bloqueado',
        ':locked:',
        'Bloqueo cerrado',
        'Lápiz'
    ],
    '🔓': [
        'Desbloqueado',
        ':unlocked:',
        'Abrir Padlock',
        'Abrir bloqueo'
    ],
    '🔏': [
        'Bloqueado con Pen',
        ':locked_with_pen:',
        'Bloquear y Pen',
        'Bloquear con alfilera',
        'Bloquear con tinta'
    ],
    '🔐': [
        'Bloqueado con clave',
        ':locked_with_key:',
        'Bloqueo cerrado con clave'
    ],
    '🗡️': [
        'Dagger',
        ':dagger:',
        'Arma de cuchillo',
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
        'Revolver',
        'Arma de ardilla',
        'Ametralladora',
        'Pistola de agua'
    ],
    '🧰': [
        'Caja de herramientas',
        ':toolbox:',
        ':red:'
    ],
    '🧲': [
        'Imán',
        ':magnet:',
        ':red:'
    ],
    '⛓️': [
        'Cadenas',
        ':chains:'
    ],
    '💉': [
        'Syringe',
        ':syringe:',
        'Donación de sangre',
        'Prueba de sangre',
        'Aguja',
        'Vinculación'
    ],
    '🧬': [
        'ADN',
        ':dna:',
        'Doble hélice ADN'
    ],
    '🧪': [
        'Probar tubo',
        ':test_tube:',
        ':green:'
    ],
    '🛏️': [
        'Cama',
        ':bed:',
        'Cuarto de cama'
    ],
    '🛋️': [
        'Sofá y Lámpara',
        ':couch_and_lamp:',
        'Salón',
        'Ajuste',
        'Sofá'
    ],
    '🪑': [
        'Silla',
        ':chair:'
    ],
    '🚪': [
        'Puerta',
        ':door:',
        'Puerta',
        'Puerta delantera'
    ],
    '🪟': [
        'Ventana',
        ':window:'
    ],
    '🪜': [
        'Escalera',
        ':ladder:'
    ],
    '🪞': [
        'Mirror',
        ':mirror:'
    ],
    '🚽': [
        'Baño',
        ':toilet:',
        'Batrimonio',
        'Lojo',
        'Baño',
        'CR'
    ],
    '🚿': [
        'Mostrar',
        ':shower:',
        'Cabeza del programa'
    ],
    '🛁': [
        'Bañera',
        ':bathtub:',
        'Baño Bubble'
    ],
    '🧴': [
        'Botella de Loción',
        ':location_bottle:'
    ],
    '🧷': [
        'Fijar de seguridad',
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
        'Rol de papel',
        ':roll_of_paper:',
        'Papel de baño',
        ':white:'
    ],
    '🧼': [
        'Bar de jabón',
        ':bar_of_soap:'
    ],
    '🧽': [
        'Esponja',
        ':sponge:',
        ':yellow:'
    ],
    '🧯': [
        'Extinguisher de fuego',
        ':fire_extinguisher:',
        ':red:'
    ],
    '🚬': [
        'Cigareta',
        ':cigarette:',
        'Símbolo de humo'
    ],
    '⚰️': [
        'Coffin',
        ':coffin:',
        'Casket',
        'Funerario',
        ':brown:'
    ],
    '⚱️': [
        'Urna fúnebre',
        ':funeral_urn:',
        'Jarrón'
    ],
    '🛡️': [
        'Escudo',
        ':shield:'
    ],
    '⚙️': [
        'Equipo',
        ':gear:',
        'Ajustes',
        'Opciones',
        ':gray:',
        ':grey:'
    ],
    '⚖️': [
        'Escala de saldo',
        ':balance_scale:',
        'Escalas de justicia'
    ],
    '🔗': [
        'Enlace',
        ':link:',
        'Cadena',
        'Hiperenlace',
        'Cadena vinculada',
        ':gray:',
        ':grey:'
    ],
    '💀': [
        'Calavera',
        ':skull:',
        'Muerte',
        'Calavera gris',
        'Esqueleto',
        ':white:'
    ],
    '☠️': [
        'Cráneo y huesos rosados',
        ':skull_and_crossbones:',
        ':white:'
    ],
    '🎡': [
        'Rueda de Ferris',
        ':ferris_wheel:',
        'Rueda grande',
        'Fairgroundl',
        'Rueda de observación'
    ],
    '⛽': [
        'Bomba de combustible',
        'fuel_pump:',
        'Aceite',
        'Garganta',
        'Gas',
        ':red:'
    ],
    '🚨': [
        'Guerreros de Policía que revierten la luz',
        ':rotating_light:',
        ':police_police_car:',
        'Luz de emergencia',
        'Luz parpadeante',
        'Siren',
        ':red:'
    ],
    '🚥': [
        'Luz Tristal horizontal',
        ':horizontal_traffic_light:',
        ':green:',
        ':red:',
        ':yellow:',
        ':orange:'
    ],
    '🚦': [
        'Luz Vertical',
        ':vertical_traffic_light:',
        ':green:',
        ':red:',
        ':yellow:',
        ':orange:'
    ],
    '⚓': [
        'Ancla de Patrón de Admiralidad',
        ':anchor:',
        'Pescador'
    ],
    '🚧': [
        'Cartel de Construcción',
        ':construction_sign:',
        'Señal de rayas de rayas negras y amarillas',
        ':yellow:',
        ':black:'
    ],
    '🪂': [
        'Parachute',
        ':parachute:'
    ],
    '💺': [
        'Comer',
        ':seat:',
        'Avión de autobús aeroplano'
    ],
    '🪐': [
        'Saturno',
        ':saturn:'
    ],
    '🎆': [
        'Fuegos artificiales',
        ':fireworks:',
        'Explosión'
    ],
    '🎇': [
        'Senko Hanabi',
        ':senko_hanabi:',
        'Chispa de fuegos artificiales'
    ],
    '💷': [
        'Nota bancaria en libra',
        ':pound:',
        ':pound_banknote:',
        'Nota de £20',
        'Nota de Veinte Quid',
        'Cartel bancario con libra',
        ':purple:'
    ],
    '💶': [
        'Euro Banknote',
        ':euro:',
        ':euro_banknote:',
        'Nota de 100 €',
        'Banknote con Euro Sign',
        ':blue:'
    ],
    '💵': [
        'Nota bancaria de dólar',
        ':dollar:',
        ':dollar_banknote:',
        '$1 nota',
        'Nota bancaria con cartel de Dollar',
        'Factura de Dólar',
        'Dólar Americano',
        ':green:'
    ],
    '💴': [
        'Banca del Yen',
        ':yen:',
        ':yen_banknote:',
        'Nota de ¥1000',
        'Nota del yen',
        'Banknote con signo de Yen',
        ':yellow:'
    ],
    '⛺': [
        'Carpa de camping',
        ':camping_tent:'
    ],
    '⛲': [
        'Fuente',
        ':fountain:',
        'Característica del agua',
        'Fuente de agua',
        'Parque'
    ],
    '💰': [
        'Bolsa de dinero',
        ':money_bag:',
        'Bolsas de dinero',
        'Rico',
        '$'
    ],
    '💸': [
        'Dinero con Alas',
        ':money_with_wings:',
        'Moneda voladora',
        ' Perdiendo dinero'
    ],
    '🏷️': [
        'Etiqueta',
        ':label_tag:'
    ],
    '🔖': [
        'Marcador',
        ':bookmark:',
        'Etiqueta de precio',
        'Etiqueta'
    ],
    '📑': [
        'Pestañas de marcadores',
        ':bookmark_tabs:',
        ':white:'
    ],
    '📯': [
        'Cuerno Postal',
        ':postal_horn:',
        'Bugle',
        'Cuerno francés'
    ],
    '🪁': [
        'Cometa',
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
        'Poblador de fiesta',
        ':party_popper:',
        'Celebración',
        'Sombrero de fiesta'
    ],
    '🎈': [
        'Globo',
        ':balloon:',
        'Fiesta',
        'Globo Rojo',
        ':red:'
    ],
    '🌡️': [
        'Medidor',
        ':thermometer:',
        'Clima caliente',
        'Temperatura',
        ':red:'
    ],
    '🛢️': [
        'Tambor de aceite',
        ':oil_drum:'
    ],
    '💣': [
        'Bomba',
        ':bomb:'
    ],
    '🔪': [
        'Cuchillo de Kitchen',
        ':kitchen_knife:',
        'Cuchillo',
        'Cuchillo de carnicero',
        'Hocho'
    ],
    '🏺': [
        'Amphora',
        ':amphora:',
        'Jarra',
        'Jarrón'
    ],
    '🗺️': [
        'Mapa del Mundo',
        ':world_map:'
    ],
    '🎼': [
        'Puntuación musical',
        ':musical_score:',
        'Hoja de música',
        'Treble Clef'
    ],
    '🎬': [
        'Tablón de portapapeles',
        ':clapper_board:',
        'Cortar',
        'Accin',
        'Director',
        'Pizarra de película'
    ],
    '🎻': [
        'Viola',
        ':violin:',
        'Cuartato de cuerda',
        'Violina más pequeña del mundo'
    ],
    '🎺': [
        'Trompeta',
        ':trumpet:',
        'Cuerno',
        'Jazz'
    ],
    '🎸': [
        'Guitarra',
        ':guitar:',
        'Guitarra táctica',
        'Guitarra de Bass',
        'Guitarra eléctrica'
    ],
    '🎷': [
        'Saxofón',
        ':saxophone:',
        'Jazz',
        'Sax'
    ],
    '🥁': [
        'Tambor',
        ':drum:',
        'Tambor con bastones de tambor'
    ],
    '🎹': [
        'Piano',
        ':piano:',
        'Teclado musical',
        ':white:',
        ':black:'
    ],
    '🪕': [
        'Banjo',
        ':banjo:'
    ],
    '🪗': [
        'Acordión',
        ':accordion:'
    ],
    '🪘': [
        'Tambor largo',
        ':long_drum:'
    ],
    '🎨': [
        'Paleta de Artista',
        ':artist_palette:',
        'Arte',
        'Pintura'
    ],
    '🧩': [
        'Pieza de rompecabezas',
        ':puzzle_piece:',
        'Pieza rompecabezas',
        ':green:'
    ],
    '🎲': [
        'Partida Muerte',
        ':game_die:',
        'Dice',
        ':white:'
    ],
    '🎭': [
        'Artes escénicas',
        'performing_arts',
        'Teatro',
        'Teatro',
        'Máscaras de Drama',
        'Máscaras de teatro griego',
        'Máscaras de comedia y trágicas',
        'Venecia'
    ],
    '🔍': [
        'Lupa de cristal inclinada izquierda',
        ':mag:',
        ':magnifying_glass_tilted_left:',
        'Magnifier',
        'Icono de búsqueda',
        'Lupa de punta izquierda',
        'Buscar',
        ':transparent:'
    ],
    '🔎': [
        'Lupa de vidrio acoplada a la derecha',
        ':mag_right:',
        ':magnifying_glass_tilted_right:',
        'Magnifier',
        'Icono de búsqueda',
        'Lupa de punta derecha',
        'Buscar',
        ':transparent:'
    ],
    '⌛': [
        'Cristal de Horas Hecho',
        ':hourglass:',
        ':hourglass_done:',
        'Cristal de Horas'
    ],
    '⏳': [
        'Cristal de hora no hecho',
        ':hourglass_flowing_sand:',
        ':hourglass_not_done:',
        'Cristal de Horas con Arena Fluente'
    ],
    '🕐': [
        'Un OClock',
        ':clock1:',
        ':one_oclock:',
        'Reloj cara 1 OClock',
        ':gray:',
        ':grey:'
    ],
    '🕜': [
        'Reloj cara a una treinta',
        ':clock130:',
        ':one_thirty:',
        ':gray:',
        ':grey:'
    ],
    '🕑': [
        'Dos OClock',
        ':clock2:',
        ':two_oclock:',
        'Reloj cara dos OClock',
        ':gray:',
        ':grey:'
    ],
    '🕝': [
        'Reloj cara duo-treinta.',
        ':clock230:',
        ':two_thirty:',
        ':gray:',
        ':grey:'
    ],
    '🕒': [
        'Tres OClock',
        ':clock3:',
        ':three_oclock:',
        'Reloj cara tres oReloj',
        ':gray:',
        ':grey:'
    ],
    '🕞': [
        'Reloj cara tres-treinta',
        ':clock330:',
        ':three_thirty:',
        ':gray:',
        ':grey:'
    ],
    '🕓': [
        'Cuatro OClock',
        ':clock4:',
        ':four_oclock:',
        'Reloj cara cuatro OClock',
        ':gray:',
        ':grey:'
    ],
    '🕟': [
        'Cara del reloj Cuatro Treinta',
        ':clock430:',
        ':four_thirty:',
        ':gray:',
        ':grey:'
    ],
    '🕔': [
        'Cinco Reloj',
        ':clock5:',
        ':five_oclock:',
        'Cara del reloj Cinco OReloj',
        ':gray:',
        ':grey:'
    ],
    '🕠': [
        'Cara del reloj Cinco-Treinta',
        ':clock530:',
        ':five_thirty:',
        ':gray:',
        ':grey:'
    ],
    '🕕': [
        'Seis OClock',
        ':clock6:',
        ':size_oclock:',
        'Reloj facial Seis OClock',
        ':gray:',
        ':grey:'
    ],
    '🕡': [
        'Reloj cara seis - treinta',
        ':clock630:',
        ':six_thirty:',
        ':gray:',
        ':grey:'
    ],
    '🕖': [
        'Siete OClock',
        ':clock7:',
        ':seven_oclock:',
        'Reloj cara siete OClock',
        ':gray:',
        ':grey:'
    ],
    '🕢': [
        'Reloj cara Siete Treinta',
        ':clock730:',
        ':sever_thirty:',
        ':gray:',
        ':grey:'
    ],
    '🕗': [
        'Ocho OClock',
        ':clock8:',
        ':eight_oclock:',
        'Cara del reloj Ocho OClock',
        ':gray:',
        ':grey:'
    ],
    '🕣': [
        'Cara del reloj ochenta y treinta',
        ':clock830:',
        ':eight_thirty:',
        ':gray:',
        ':grey:'
    ],
    '🕘': [
        'Nueve Reloj',
        ':clock9:',
        ':nine_clock:',
        'Reloj facial nuevo OClock',
        ':gray:',
        ':grey:'
    ],
    '🕤': [
        'Reloj cara nueve-treinta',
        ':clock930:',
        ':nine_thirty:',
        ':gray:',
        ':grey:'
    ],
    '🕙': [
        'Diez OClock',
        ':clock10:',
        ':ten_oclock:',
        'Reloj cara diez oReloj',
        ':gray:',
        ':grey:'
    ],
    '🕥': [
        'Reloj con diez y treinta años',
        ':clock1030:',
        ':ten_thirty:',
        ':gray:',
        ':grey:'
    ],
    '🕚': [
        'Eleven OClock',
        ':click11:',
        ':eleven_oclock:',
        'Reloj cara once oReloj',
        ':gray:',
        ':grey:'
    ],
    '🕦': [
        'Cara del Reloj -Treinta',
        ':clock1130:',
        ':eleven_thirty:',
        ':gray:',
        ':grey:'
    ],
    '🕛': [
        'Doce OClock',
        ':clock12:',
        ':twelve_oclock:',
        'Reloj facial Doce Reloj',
        ':gray:',
        ':grey:'
    ],
    '🕧': [
        'Reloj cara Doce - Treinta',
        ':clock1230:',
        ':twelve_thirty:',
        ':gray:',
        ':grey:'
    ],
    '♨️': [
        'Primaveras calientes',
        ':hot_springs:',
        'Onsen',
        'Vapor',
        ':red:'
    ],
    '💈': [
        'Polo de Barber',
        ':barber_pole:',
        'Peluquería',
        'Rayas de Barberos',
        'Peluquería',
        ':blue:',
        ':red:'
    ],
    '🎪': [
        'Carpa de Circus',
        ':circus_tent:',
        'Arco Grande',
        'Circo'
    ],
    '💢': [
        'Símbolo de ira',
        ':anger_symbol:',
        'Señal de Ira',
        'Veta Pop',
        ':red:'
    ],
    '🗯️': [
        'Burbuja de ira derecha',
        ':right_anger_bubble:',
        ':anger_right:',
        'Zig Zag Bubble',
        'Burbuja de voz enojada',
        ':white:'
    ],
    '💊': [
        'Pill',
        ':pill:',
        'Cápsula',
        'Tablet',
        'Drogas',
        ':yellow:',
        ':red:'
    ],
    '🎎': [
        'Muñecos',
        ':dolls:',
        'Hinamatsuri',
        'Muñecas imperiales',
        'Dolls japoneses'
    ],
    '🎏': [
        'Streamer de carpa',
        ':carp_streamer:',
        'Bandera de Peces',
        'Koinobori',
        'Calcetines'
    ],
    '🎐': [
        'Chime Viento',
        ':wind_chime:',
        'Furin',
        'Medusa',
        'Campanilla de viento'
    ],
    '🎀': [
        'Arco de cinta',
        ':ribbon_bow:',
        'Arco rosa',
        'Arco',
        ':pink:'
    ],
    '🎁': [
        'Regalo envuelto',
        ':wrapped_gift:',
        'Regalo de cumpleaños',
        'Regalo de Navidad',
        'Regalo',
        'Caja de regalo',
        'Presente',
        'Regalo envuelto'
    ],
    '🎫': [
        'Ticket',
        ':ticket:',
        'Talón de tickets',
        'Ticket del Tour del Mundo'
    ],
    '🃏': [
        'Broma',
        ':joker:',
        'Tarjeta Joker',
        'Jugando Black Joker de Tarjeta'
    ],
    '💡': [
        'Lámpara',
        ':light_bulb:',
        'Idea',
        'Lámpara eléctrica'
    ],
    '🔦': [
        'Linterna',
        ':flashlight:',
        'Antorcha',
        'Antorcha eléctrica'
    ],
    '🏮': [
        'Farol de papel rojo',
        ':izakaya_lantern:',
        ':lantern:',
        ':red_paper_lantern:',
        'Farol asiático',
        'Farol japonés',
        'Farol rojo',
        'Farol Izakaya',
        ':red:'
    ],
    '📦': [
        'Paquete',
        ':package:',
        'Caja',
        'Parcela',
        ':brown:'
    ],
    '📇': [
        'Indexar tarjeta',
        ':card_index:',
        'Rolodex',
        'Tarjeta del sistema',
        'Índice de tarjeta'
    ],
    '🕳️': [
        'Agujero',
        ':hole:',
        ':black:'
    ],
    '👁️‍🗨️': [
        'Soy un testigo',
        ':eye_in_speech_bubble:',
        ':eye_speech_bubble:',
        ':eye-in-speech-bubble:',
        'Ojo en burbuja de voz'
    ],
    '⚜️': [
        'Fleur-de-lis',
        ':fleur_de_lis:',
        'Exploradores',
        'Santos de Nueva Orleáns'
    ],
    '⚗️': [
        'Alembic',
        ':alembic:'
    ],
    '🕯️': [
        'Cándalo',
        ':candle:',
        ':white:'
    ],
    '🖼️': [
        'Foto enmarcada',
        ':framed_picture:',
        'Pintura',
        'Fotografía',
        'Marco con foto'
    ],
    '🛍️': [
        'Bolsas de compras',
        ':shopping_bags:'
    ],
    '🎟️': [
        'Tickets de admisión',
        ':admission_tickets:'
    ],
    '🛎️': [
        'Bellhop Bell',
        ':bellhop_bell:',
        ':yellow:',
        ':gold:'
    ],
    '🧾': [
        'Recibo',
        ':receipt:',
        ':white:'
    ],
    '🧮': [
        'Abacus',
        ':abacus:'
    ],
    '🧫': [
        'Petri Petri',
        ':petri_dish:'
    ],
    '🧹': [
        'Escoba',
        ':broom:',
        'Pincel',
        'Barrido',
        ':yellow:'
    ],
    '🎰': [
        'Máquina de ranura',
        ':slot_machine:',
        'Casino',
        'Máquina de frutas',
        'Jugando',
        'Máquina de póquer'
    ],
    '🦽': [
        'Silla de rueda manual',
        ':manual_wheelchair:',
        ':wheelchair:'
    ],
    '🦼': [
        'Silla de rueda motorizada',
        ':motorized_wheelchair:'
    ],
    '🪔': [
        'Lámpara Diya',
        ':diya_lamp:'
    ],
    '🦯': [
        'White Cane',
        ':whie_cane:'
    ],
    '🩸': [
        'Gota de sangre',
        ':drop_of_blood:',
        ':red:'
    ],
    '🩹': [
        'Bandera Adhesiva',
        ':adhesive_bandage:'
    ],
    '🩺': [
        'Estetoscopio',
        ':stethoscope:'
    ],
    '🪶': [
        'Suavizado',
        ':feather:'
    ],
    '🪤': [
        'Trampa del ratón',
        ':mouse_trap:'
    ],
    '🫖': [
        'Teapot',
        ':teapot:'
    ],
    '🪨': [
        'Roca',
        ':rock:',
        ':gray:',
        ':grey:'
    ],
    '🪵': [
        'Madera',
        ':wood:',
        ':brown:'
    ],
    '🪄': [
        'Varita mágica',
        ':magin_wand:'
    ],
    '🔮': [
        'Bola de Cristal',
        ':crystal_ball:',
        'Clairvoyant',
        'Teller de la Fortuna',
        'Psiquia',
        'Cristal Morado',
        ':purple:'
    ],
    '🪅': [
        'Pingrata',
        ':pinata:',
        ':piñata:'
    ],
    '🪆': [
        'Anidando ollas',
        ':nesting_dolls:',
        'Matryoshka'
    ],
    '🪡': [
        'Aguja de costura',
        ':swing_needle:'
    ],
    '🪢': [
        'Nudo',
        ':knot:',
        ':red:',
        ':blue:'
    ],
    '🪙': [
        'Moneda',
        ':coin:'
    ],
    '🪃': [
        'Boomerang',
        ':boomerang:',
        ':brown:'
    ],
    '🪥': [
        'Brazo de sangre',
        ':toothbrush:'
    ],
    '🪦': [
        'Piedra',
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
        'Jarra',
        ':jar:',
        ':transparent:'
    ],
    '🛞': [
        'Rueda',
        ':wheel:',
        'Vehículos',
        'Carros',
        ':black:'
    ],
    '🛟': [
        'Boya de anillo',
        ':ring_buoy:',
        'Vida Preserver',
        'Anillo de vida',
        'Barcos',
        'Seguridad',
        'Agua',
        'Salvavidas',
        ':red:',
        ':white:'
    ],
    '🪬': [
        'Hamsa',
        ':hamsa:',
        'Islam',
        'Judaismo',
        'Buddhism',
        'Cristianidad',
        'Religiones',
        'Suerte',
        'Protección',
        'Guía',
        'Poder femenino',
        'Fat',
        ':blue:'
    ],
    '🪩': [
        'Bola de Mirror',
        ':mirror_ball:',
        'Discoteca'
    ],
    '🪫': [
        'Batería baja',
        ':low_battery:',
        ':red:',
        'Energía',
        'Rojo'
    ],
    '🩻': [
        'Rayo-X',
        ':x_ray:',
        ':x-ray:',
        ':blue:'
    ],
    '🫧': [
        'Burbujas',
        ':bubbles:',
        'Sudas de jabón',
        'Carbonación',
        'Personalidad efervescente',
        ':transparent:'
    ],
    '🪪': [
        'Tarjeta de identificación',
        ':identification_card:',
        'Identidad',
        'Pasaporte',
        'ID'
    ],
    '🧿': [
        'Nazar Amulet',
        ':nazar_amulet:',
        'Ojo Malvado',
        ':blue:'
    ],
    '🧸': [
        'Oso Teddy',
        ':teddy_bear:',
        'Juguete',
        ':brown:'
    ]
};