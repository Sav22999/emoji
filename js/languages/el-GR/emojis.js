// descriptions took from Emojipedia.org
lang = 'el';
//use i18n language code of the browser, more details: https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/i18n/LanguageCode
titles_language[lang] = {
    '🔍': 'Αποτελέσματα',
    '🕒': 'Τα πιο συνηθισμένα emojis',
    '😀': 'Smileys',
    '🙋': 'Άτομα',
    '🦊': 'Ζώα',
    '🅰️': 'Σύμβολα',
    '🍎': 'Τρόφιμα και ποτά',
    '🏳️‍🌈': 'Σημαίες',
    '🏊': 'Αθλητισμός',
    '✈️': 'Ταξίδια και θέσεις',
    '🖱️': 'Τεχνολογίες και γραφεία',
    '👗': 'Ρούχα και αξεσουάρ',
    '🖐️': 'Χέρια και μέρη του σώματος',
    '🛎️': 'Άλλο'
};
emojis_language[lang] = [];
/*search*/
emojis_language[lang][0] = {};
/*smileys*/
emojis_language[lang][2] = {
    '😀': [
        'Grinning Πρόσωπο',
        ':grinning:',
        ':grinning_face:',
        '::):',
        'Ευτυχισμένο Πρόσωπο',
        'Χαμογελαστό Πρόσωπο'
    ],
    '😃': [
        'Grinning Πρόσωπο με μεγάλα μάτια',
        ':smiley:',
        ':grinning_face_with_big_eyes:',
        '::D:',
        'Ευτυχισμένο Πρόσωπο',
        'Χαμογελαστό Πρόσωπο',
        'Χαμογελώντας πρόσωπο με ανοιχτό στόμα'
    ],
    '😄': [
        'Grinning Πρόσωπο με Χαμογελώντας Μάτια',
        ':smile:',
        ':grinning_face_with_smiling_eyes:',
        'Ευτυχισμένο Πρόσωπο',
        'Χαμογελαστό Πρόσωπο',
        'Grinning Πρόσωπο Με Ματιά Squinting',
        'Χαμογελώντας πρόσωπο με ανοιχτό στόμα και χαμογελώντας μάτια'
    ],
    '😁': [
        'Ομαδοποίηση προσώπου με χαμογελαστά μάτια',
        ':grin:',
        ':beaming_face_with_smiling_eyes:',
        'Grinning Πρόσωπο με Χαμογελώντας Μάτια'
    ],
    '😆': [
        'Grinning Squinting Πρόσωπο',
        ':grinning_squinting_face:',
        ':xD:',
        ':><:',
        'Μεγάλο Grin',
        'Χαμόγελο Κλειστά Μάτια',
        'Γέλεια',
        'Grinning Πρόσωπο Με Στενά Κλειστά Μάτια',
        'Χαμογελαστό πρόσωπο με ανοιχτό στόμα και αισθητά κλειστά μάτια'
    ],
    '😅': [
        'Grinning Πρόσωπο με Sweat',
        ':happy_sweat:',
        'Άσκηση',
        'Ευτυχισμένος Φούρνος',
        'Grinning πρόσωπο με μάτια Squinting και Sweat Drop',
        'Χαμογελαστό πρόσωπο με ανοιχτό στόμα και κρύο ιδρώτα'
    ],
    '🤣': [
        'ROFL',
        ':rofl:',
        'Τροχαίο στο πάτωμα Γέλεια'
    ],
    '😂': [
        'Πρόσωπο με τα δάκρυα της χαράς',
        ':lol:',
        'Γέλεια',
        'Γέλια Κλάμα',
        'Γέλια Δάκρυα',
        'LOL'
    ],
    '🙂': [
        'Ελαφρώς Χαμογελώντας Πρόσωπο',
        ':smile:',
        '::):',
        'Ελαφρώς Ευτυχισμένο',
        'Αυτό Είναι Καλό'
    ],
    '🙃': [
        'Ανάποδο Πρόσωπο',
        ':upside-down_face:',
        ':upside_down_face:',
        'Sarcasm',
        'Silly',
        'Ανάποδο Πρόσωπο'
    ],
    '😉': [
        'Winking Πρόσωπο',
        ':winking:',
        ':;):',
        'Ροζ',
        'Ροζ Πρόσωπο',
        'Winky Πρόσωπο'
    ],
    '😊': [
        'Χαμογελώντας πρόσωπο με χαμογελαστά μάτια',
        ':smiling_face:',
        ':^^:',
        'Ευτυχισμένο Πρόσωπο',
        'Χαμόγελο',
        'Χαμογελαστό Πρόσωπο'
    ],
    '😇': [
        'Χαμογελαστό πρόσωπο με Halo',
        ':smiling_angel:',
        'Άγγελος',
        'Halo'
    ],
    '🥰': [
        'Χαμογελώντας πρόσωπο με καρδιές',
        ':smiling_hearts:',
        'Αγάπη Πρόσωπο',
        'Χαμογελώντας πρόσωπο με χαμογελαστά μάτια και τρεις καρδιές'
    ],
    '😍': [
        'Χαμογελαστό πρόσωπο με τα μάτια καρδιάς',
        'αγάπη',
        ':smiling_heart-eyes:',
        ':smiling_heart_eyes:',
        ':*.*:',
        'Μάτια Καρδιάς',
        'Καρδιά Πρόσωπο',
        'Χαμογελώντας πρόσωπο με μάτια σε σχήμα καρδιάς'
    ],
    '🤩': [
        'Αστέρι-Δομή',
        ':star_eyes:',
        'Ερεθισμένος',
        'Μάτια Με Αστέρια',
        'Έναστρο Eyed',
        'Όμορφο Πρόσωπο',
        'Πρόσωπο Με Τα Μάτια Του Έστρου',
        'Grinning Πρόσωπο με τα μάτια αστέρι'
    ],
    '😘': [
        'Πρόσωπο που ρέει ένα φιλί',
        'αγάπη',
        ':kissing_face:',
        '::*:',
        '::-*:',
        'Χτύπημα Ένα Φιλί',
        'Blowing Φιλί',
        'Φιλιά',
        'Πρόσωπο ρίχνοντας ένα φιλί'
    ],
    '😗': [
        'Φιλί Πρόσωπο',
        'φιλί',
        ':kissing_face:',
        '::*:',
        '::-*:',
        'Πάπιες Πρόσωπο',
        'Kissy Face',
        'Σφυρίχτρα'
    ],
    '☺️': [
        'Χαμογελώντας Πρόσωπο',
        ':smiling_face:',
        'Ευτυχισμένο Πρόσωπο',
        'Χαμογελαστό Πρόσωπο',
        'Χαμογελώντας',
        'Λευκό Χαμογελαστό Πρόσωπο'
    ],
    '😚': [
        'Φιλί πρόσωπο με κλειστά μάτια',
        ':kissing_face:',
        'Φιλί Πρόσωπο',
        'Kissy Face'
    ],
    '😙': [
        'Φιλί πρόσωπο με χαμογελώντας μάτια',
        ':kissing_face:',
        'Φιλί Πρόσωπο',
        'Kissy',
        'Σφυρίχτρα',
        'Σφυρίχτρα'
    ],
    '😋': [
        'Face Savoring Food',
        ':savoring_face:',
        'Goofy',
        'Πεινασμένος',
        'Χαμογελώντας Το Πρόσωπο Γλείφει Χείλη',
        'Προσώπου Σώζοντας Νόστιμα Τρόφιμα',
        'Yum Yum'
    ],
    '😛': [
        'Πρόσωπο με γλώσσα',
        ':tongue_face:',
        '::P:',
        'Τσιχούρι',
        'Πρόσωπο Γλώσσα',
        'Τόνγκου-Out',
        'Πρόσωπο με τη γλώσσα Stuck-Out'
    ],
    '😜': [
        'Winking Πρόσωπο με γλώσσα',
        ':winking:',
        ':;P:',
        'Τρελό',
        'Τρελό Πρόσωπο',
        'Winking Πρόσωπο Με Stuck-Out Γλώσσα',
        'Πρόσωπο με Stuck-Out γλώσσα και Winking Μάτι'
    ],
    '🤪': [
        'Zany Face',
        ':crazy_face:',
        'Τρελά Μάτια',
        'Ερεθισμένος',
        'Άγρια',
        'Goofy Face',
        'Grinning πρόσωπο με ένα μεγάλο και ένα μικρό μάτι'
    ],
    '😝': [
        'Squinting Πρόσωπο με γλώσσα',
        ':tongue_face:',
        ':xP:',
        'Έξοδος Γλώσσας',
        'Πρόσωπο με κολλήσει έξω γλώσσα και στριμωγμένα μάτια',
        'Πρόσωπο με Stuck-Out γλώσσα και Tightly-Closed Μάτια'
    ],
    '🤑': [
        'Πρόσωπο Μήνας-Στόματος',
        ':money-mouth_face:',
        ':money_mouth_face:',
        '::$:',
        'Δολάριο Σημάδι Μάτια',
        'Πρόσωπο Χρήματος',
        'Πλούσιο'
    ],
    '🤗': [
        'Σχολιάζοντας Πρόσωπο',
        ':hugging_face:',
        'Αγκαλιά',
        'Σχολιασμός',
        'Αγκαλιές',
        'Ευτυχισμένο Πρόσωπο Με Χέρια Hugging'
    ],
    '🤭': [
        'Ωχ',
        ':oops:',
        'Πρόσωπο με το χέρι πάνω από το στόμα',
        'Χαμογελώντας πρόσωπο με χαμογελαστά μάτια και χέρι κάλυψη στόμα'
    ],
    '🤫': [
        'Shh',
        ':shushing_face:',
        'Shush',
        'Shushing Πρόσωπο',
        'Θάμβος',
        'Ησυχία',
        'Σίγαση',
        'Αθόρυβο',
        'Πρόσωπο με κάλυψη δάχτυλου κλειστά χείλη'
    ],
    '🤔': [
        'Τι',
        ':thinking_face:',
        '?',
        'Χμμ',
        'Σκέψη Πρόσωπο',
        'Αντίχειρα Κακιού',
        'Σπινθηριστής',
        'Ρίψη Σκιάς'
    ],
    '🤐': [
        'Τ.Κ.',
        'σιωπηλό',
        'σίγαση',
        ':zip_face:',
        'Πρόσωπο Φερμουάρ-Στόματος',
        'Χείλη Σφραγισμένα',
        'Σφραγισμένα Χείλη',
        'Τ.Κ.',
        'Πρόσωπο με στόμιο φερμουάρ'
    ],
    '🤨': [
        'Πρόσωπο με ενισχυμένο φρύδι',
        ':face_with_raised_eyebrow:',
        'Colbert',
        'Ο Βράχος',
        'Πρόσωπο Με Αυξημένο Φρύδι',
        'Πρόσωπο με ένα φρύδι αυξήθηκε'
    ],
    '😐': [
        'Ουδέτερο Πρόσωπο',
        ':neutral_face:',
        ':|',
        'Πρόσωπο Με Ευθεία Στόμα',
        'Straight Faced'
    ],
    '😑': [
        'Χωρίς Εξπρεσιονίκες Πρόσωπο',
        ':expressionless_face:',
        '-_-',
        'Πρόσωπο Με Ευθεία Στόμα',
        'Ευθεία Πρόσωπο'
    ],
    '😶': [
        'Πρόσωπο Χωρίς Στόμα',
        ':face_without_mouth:',
        'Κενό Πρόσωπο',
        'Στόμα',
        'Σίγαση',
        'Αθόρυβο'
    ],
    '😏': [
        'Σμίκρυνση Πρόσωπο',
        ':smirking_face:',
        'Φλερτ',
        'Σεξουαλική Πρόσωπη',
        'Κούπα Πρόσωπο',
        'Προτεινόμενο Χαμόγελο'
    ],
    '😒': [
        'Unamused Πρόσωπο',
        ':unamused_face:',
        'Ανικανοποίητος',
        'Meh',
        'Πλευρική Μάτι',
        'Αισθητοποιημένο'
    ],
    '🙄': [
        'Πρόσωπο με τροχαίο μάτια',
        ':face_with_rolling_eye:',
        ':eye_roll:',
        'Μάτι Roll'
    ],
    '😬': [
        'Σύλληψη Πρόσωπο',
        ':awkward:',
        'Awkward',
        'Eek',
        'Πόδι Στο Βουνό',
        'Νευρικό',
        'Snapchat Αμοιβαία #1 Καλύτερος Φίλος'
    ],
    '🤥': [
        'Ψευδές Πρόσωπο',
        ':lying_face:',
        'Ψυχρός',
        'Μακρυά Μύτη',
        'Pinocchio'
    ],
    '😌': [
        'Ανακουφισμένο Πρόσωπο',
        ':relieved_face:',
        'Περιεχόμενο',
        'Ευχαριστημένος'
    ],
    '😔': [
        'Συγνώμη',
        ':sad_face:',
        'Pensive Πρόσωπο',
        'Pensive',
        'Λυπημένο',
        'Sadface',
        'Λυπημένος',
        'Λυπημένο Pensive Πρόσωπο'
    ],
    '😪': [
        'Υπνηλία Πρόσωπο',
        ':sleepy_face:',
        'Πλευρά-δάκρυ',
        'Χωρίς Φούσκα'
    ],
    '🤤': [
        'Σάλιο',
        ':saliva_face:',
        'Drooling Face',
        'Drool'
    ],
    '😴': [
        'Πρόσωπο Ύπνου',
        ':sleeping_face:',
        ':zzz:',
        'Zzz',
        'Πρόσωπο Ύπνου',
        'Ροχαλητό',
        'Zzz Πρόσωπο'
    ],
    '🥱': [
        'Πρόσωπο Αυγής',
        'κουρασμένος',
        ':yawning_face:'
    ],
    '😷': [
        'Πρόσωπο με ιατρική μάσκα',
        'άρρωστος',
        'doc',
        ':face_with_medical_mask:',
        'Coronavirus',
        'COVID-19',
        'Μάσκα Πρόσωπο',
        'Χειρουργική Μάσκα',
        'ill'
    ],
    '🤒': [
        'Πρόσωπο με θερμόμετρο',
        ':face_with_thermometer:',
        ':sick:',
        ':ill:',
        'Ill',
        'Άρωστο'
    ],
    '🤕': [
        'Πρόσωπο με Επικεφαλής',
        'νοσοκομείο',
        'άρρωστος',
        ':face_with_head-bandage:',
        ':face_with_head_bandage:',
        'Κεφαλή Εξανδρωμένου',
        'Αδέξιος',
        'Λείπει',
        'ill'
    ],
    '🤢': [
        'Ναυτία Πρόσωπο',
        'άρρωστος',
        ':nauseated_face:',
        'Αηδία',
        'Πράσινο Πρόσωπο',
        'Έμβος',
        ':green:',
        'ill'
    ],
    '🤮': [
        'Πρόσωπο Έμετος',
        'άρρωστος',
        ':face_vomiting:',
        'Σήκωσε',
        'Bleah',
        'Bleurgh',
        'Yuk',
        'Γιουκ',
        'EW',
        'Σήκωσε',
        'Πέτα Πάνω',
        'Έμβος',
        'Πρόσωπο με Ανοιχτό Στόμα Έμετος',
        'ill'
    ],
    '🤧': [
        'Φτάρνισμα Πρόσωπο',
        'άρρωστος',
        ':sneezing_face:',
        'Gesundheit',
        'ill'
    ],
    '🥵': [
        'Ζεστό Πρόσωπο',
        ':hot_face:',
        'Υπερθερμαινόμενο Πρόσωπο',
        ':red:'
    ],
    '🥶': [
        'Κρύο Πρόσωπο',
        ':cold_face:',
        'Ψυχρό',
        'Ψύξη',
        'Παγωμένο Πρόσωπο',
        ':blue:'
    ],
    '🥴': [
        'Woozy Πρόσωπο',
        ':woozy_face:',
        'Μεθυσμένος Πρόσωπο',
        'Πρόσωπο με Uneven Μάτια και Wavy Στόμα'
    ],
    '😵': [
        'Dizzy Face',
        ':dizzy_face:',
        'Διασταυρούμενα Μάτια Πρόσωπο',
        'Σπείρα Μάτια Πρόσωπο'
    ],
    '🤯': [
        'Κεφαλή Εκρήξεως',
        'έκρηξη',
        ':exploding_head:',
        'Μυαλό Φυσητό',
        'Σοκαρισμένο πρόσωπο με εκρηκτική κεφαλή'
    ],
    '🤠': [
        'Cowboy Καπέλο Πρόσωπο',
        ':cowboy_hat_face:',
        'Καουμπόι',
        'Cowboy Πρόσωπο',
        'Πρόσωπο με καουμπόι καπέλο'
    ],
    '🥳': [
        'Πρόσωπο Πάρτυ',
        ':partying_face:',
        'Πρόσωπο Πάρτυ',
        'Πρόσωπο με κέρατο πάρτι και καπέλο κόμμα'
    ],
    '😎': [
        'Χαμογελώντας πρόσωπο με γυαλιά ηλίου',
        ':smiling_face_with_sunglasses:',
        'Ψυχρό',
        'Αμοιβαία Καλύτεροι Φίλοι (Snapchat)',
        'Γυαλιά ηλίου'
    ],
    '🤓': [
        'Nerd Πρόσωπο',
        ':nerd_face:',
        'Nerdy'
    ],
    '🧐': [
        'Πρόσωπο με Monocle',
        ':face_with_monocle:'
    ],
    '😕': [
        'Συμπαγής Πρόσωπο',
        ':confused_face:',
        '::/:',
        '::S:',
        'Μη Συμπληρωμένο',
        'Παζλ'
    ],
    '😟': [
        'Ανησυχία Πρόσωπο',
        ':worried_face:',
        '::(:',
        'Λυπημένο',
        'Sadface'
    ],
    '🙁': [
        'Ελαφρώς Frowning Πρόσωπο',
        ':slightly_frowning_face:',
        '::(:',
        'Ελαφρώς Λυπημένος'
    ],
    '☹️': [
        'Frowning Πρόσωπο',
        ':frowning_face:',
        '::(:',
        'Megafrown',
        'Άσπρο Frowning Πρόσωπο'
    ],
    '😮': [
        'Ουάου',
        ':wow:',
        '::O:',
        'Ωχ μου!',
        'Πρόσωπο με Ανοιχτό Στόμα',
        'Άνοιγμα Στόματος',
        'Έκπληκτος Πρόσωπο Με Ανοιχτό Στόμα'
    ],
    '😯': [
        'Προωθημένο Πρόσωπο',
        ':husked_face:',
        '::O:',
        'Έκπληξη',
        'Έκπληξη Πρόσωπο'
    ],
    '😲': [
        'Σοκαρισμένο Πρόσωπο',
        ':shocked_face:',
        '::O:',
        'Ουάου',
        'Πέτρινο Πρόσωπο',
        'Μεθυσμένος Πρόσωπο',
        'Πρόσωπο Ανάφλεξης'
    ],
    '😳': [
        'Έξαψη Πρόσωπο',
        ':flushed_face:',
        '::$:',
        'Πρόσωπο Blushing',
        'Φθαρμένο',
        'Ντροπή',
        'Πρόσωπο Με Ευρεία Ανοιχτά Μάτια'
    ],
    '🥺': [
        'Δέσμευση Πρόσωπο',
        ':pleading_face:',
        '::(:',
        'Τρέξιμο',
        'Γυαλιστερά Μάτια',
        'Simp',
        'Πρόσωπο με χαραγμένα μάτια'
    ],
    '😦': [
        'Frowning Πρόσωπο με Ανοιχτό Στόμα',
        ':frowning_face_with_open_mouth:',
        ':D::',
        'Ιχθυοκαλλιέργεια'
    ],
    '😧': [
        'Anguished Face',
        ':anguished_face:',
        ':anguished:',
        ':D::',
        'Pained Face'
    ],
    '😨': [
        'Νοσηλευμένο',
        ':scared:',
        ':D::',
        'Φοβερό Πρόσωπο',
        'Έκπληξη'
    ],
    '😰': [
        'Άγρια Πρόσωπο με Sweat',
        ':anxious_face_with_sweat:',
        'Μπλε Πρόσωπο',
        'Ενδιαφερόμενο Πρόσωπο',
        'Νευρικό Πρόσωπο',
        'Πρόσωπο με Ανοιχτό Στόμα και Ψυχρό Ύφασμα'
    ],
    '😥': [
        'Λυπημένο αλλά Ανακουφισμένο Πρόσωπο',
        ':sad_but_relieved_face:',
        '::(:',
        'Φρύδι Sweat',
        'Απογοητευμένος αλλά Ανακουφισμένος Πρόσωπο'
    ],
    '😢': [
        'Κλαίνοντας Πρόσωπο',
        ':crying_face:',
        '::(:',
        'Κλάμα',
        'Δάκρυ'
    ],
    '😭': [
        'Έντονα Κλάμα Πρόσωπο',
        ':loudly_crying_face:',
        'Bawling',
        'Κλάμα',
        'Λυπημένα Δάκρυα',
        'Sobbing'
    ],
    '😱': [
        'Οδήγηση προσώπου στο φόβο',
        ':face_screaming_in_fear:',
        'Οικιακή Μόνο',
        'Scream',
        'Screaming Πρόσωπο'
    ],
    '😖': [
        'Σταθερό Πρόσωπο',
        ':confounded_face:',
        'Στόμα Quivering',
        'Ανακάτεμα Πρόσωπο'
    ],
    '😣': [
        'Διαρκής Πρόσωπο',
        ':persevering_face:',
        'Άχρηστο Πρόσωπο',
        'Ανακατεμένα Μάτια'
    ],
    '😞': [
        'Απογοητευμένο Πρόσωπο',
        ':disappointed_face:',
        '::(:',
        'Λυπημένο',
        'Sadface'
    ],
    '😓': [
        'Downcast Πρόσωπο με Sweat',
        ':downcast_face_with_sweat:',
        'Σκληρή Εργασία',
        'Λυπημένο Πρόσωπο Sweat',
        'Πρόσωπο με κρύο Sweat'
    ],
    '😩': [
        'Weary Πρόσωπο',
        ':weary_face:',
        'Παραβιασμένη Πρόσωπο',
        'Wailing'
    ],
    '😫': [
        'Κουρασμένο Πρόσωπο',
        ':tired_face:',
        'Εξαντλημένο',
        'Fed Επάνω',
        'Παραβιασμένη Πρόσωπο'
    ],
    '😤': [
        'Πρόσωπο με ατμό από μύτη',
        ':face_with_steam_from_nose:',
        'Αερισμός των Grievances',
        'Απογοητευμένος',
        'Mad Πρόσωπο',
        'Ατμός',
        'Huffing Με Πρόσωπο Θυμός'
    ],
    '😡': [
        'Προωθητικό Πρόσωπο',
        'fuck',
        ':pouting_face:',
        'Θυμωμένος Πρόσωπο',
        'Grumpy Πρόσωπο',
        'Mad Πρόσωπο',
        'Κόκκινο Πρόσωπο',
        ':red:'
    ],
    '😠': [
        'Θυμωμένος Πρόσωπο',
        ':angry_face:',
        'Θυμωμένος',
        'Grumpy Πρόσωπο'
    ],
    '🤬': [
        'Πουλερικά',
        'fuck',
        ':swearing:',
        '@#$%&!',
        'Πρόσωπο με σύμβολα στο στόμα',
        'Cursing',
        'Μείωση',
        'Grawlix',
        'Πρόσωπο Με Σύμβολα Πάνω Από Το Στόμα',
        'Σοβαρό πρόσωπο με σύμβολα που καλύπτουν το στόμα',
        ':red:'
    ],
    '🥲': [
        'Χαμογελώντας πρόσωπο με δάκρυ',
        ':smiling_face_with_tear:'
    ],
    '😮‍💨': [
        'Εκπνοή Προσώπου',
        ':face_exhaling:',
        'Ζυγός'
    ],
    '😵‍💫': [
        'Πρόσωπο με σπειροειδή μάτια',
        ':face_with_spiral_eyes:',
        'Dizzy Face'
    ],
    '😶‍🌫️': [
        'Πρόσωπο στα σύννεφα',
        'καπνός',
        ':face_in_clouds:',
        'Brain Fog',
        'Συγχαρητήρια',
        'Ομίχλη'
    ],
    '🥸': [
        'Μεταμφιεσμένο Πρόσωπο',
        ':disguised_face:'
    ],
    '🫠': [
        'Τήξη Πρόσωπο',
        ':melting_face:'
    ],
    '🫢': [
        'Πρόσωπο με ανοιχτά μάτια και χέρι πάνω από το στόμα',
        ':face_with_open_eyes_and_hand_over_mouth:'
    ],
    '🫣': [
        'Πρόσωπο με τα μάτια Peeking',
        ':face_with_peeking_eye:'
    ],
    '🫡': [
        'Αποτίμηση Προσώπου',
        ':saluting_face:',
        'Στρατιωτική',
        'Στρατός',
        'RAF',
        'Ναυτικό'
    ],
    '🫥': [
        'Πρόσωπο Με Διακεκομμένη Γραμμή',
        ':dotted_line_face:',
        ':transparent:'
    ],
    '🫤': [
        'Πρόσωπο με διαγώνιο στόμα',
        ':face_with_diagonal_mouth:'
    ],
    '🥹': [
        'Πρόσωπο Κρατώντας Πίσω Δάκρυα',
        ':face_holding_back_tears:'
    ],
    //"🫨": ["Shaking Face", ":shaking_face:"],
    '😈': [
        'Χαμογελώντας πρόσωπο με κέρατα',
        ':smiling_face_with_horns:',
        'Διάβολος',
        'Κέρατα Διάβολου',
        'Ευτυχισμένος Διάβολος',
        'Μωβ Διάβολος',
        'Κόκκινος Διάβολος',
        ':purple:'
    ],
    '👿': [
        'Θυμωμένος πρόσωπο με κέρατα',
        ':angry_face_with_horns:',
        'Διάβολος',
        'Κέρατα Διάβολου',
        'Μωβ Διάβολος',
        'Μωβ Γκομπλιν',
        'Λυπημένος Διάβολος',
        'Imp',
        ':purple:'
    ],
    '🤡': [
        'Πρόσωπο Κλόουν',
        ':clown_face:',
        'Ανατριχιαστικός Κλόουν',
        'Κακό Κλόουν',
        'Τρομακτικό Κλόουν'
    ],
    '👽': [
        'Εξωγήινος',
        ':alien:',
        'ET'
    ],
    '👾': [
        'Εξωγήινο Τέρας',
        ':alien_monster:',
        'Διάστημα Invader',
        'Τέρας Παιχνιδιού Βίντεο'
    ],
    '🤖': [
        'Robot',
        ':robot:',
        'Πρόσωπο Ρομπότ'
    ],
    '👹': [
        'Ogre',
        ':ogre:',
        'Μάσκα Πρόσωπο',
        'Oni',
        'Κόκκινο Τέρας',
        'Ogre Ιαπωνίας',
        ':red:'
    ],
    '👻': [
        'Φάντασμα',
        ':ghost:',
        'Halloween'
    ],
    '🗣️': [
        'Μιλώντας Κεφαλή',
        ':speaking_head:',
        'Mansplaining',
        'Shout',
        'Φωνή',
        'Μιλώντας κεφάλι στη σιλουέτα',
        ':blue:'
    ],
    '👤': [
        'Προτομή σε σιλουέτα',
        ':bust_in_silhouette:',
        'Σκιά',
        'Silhouette',
        'Χρήστης',
        'Σιλουέτα του ατόμου',
        ':blue:'
    ],
    '🫂': [
        'Άτομα Αγκαλιάζει',
        ':people_hugging:',
        ':blue:'
    ],
    '👥': [
        'Busts σε Σιλουέτα',
        ':busts_in_silhouette:',
        'Σκιές',
        'Silhouettes',
        'Χρήστες',
        'Σιλουέτα των δύο ατόμων',
        ':blue:'
    ]
};
/*people*/
emojis_language[lang][3] = {
    '👶{{skin_tone}}': [
        'Μωρό',
        ':baby:',
        'Παιδί',
        'Νήπιο'
    ],
    '🧒{{skin_tone}}': [
        'Παιδί',
        ':child:',
        'Φύλο Ουδέτερο Παιδί'
    ],
    '👧{{skin_tone}}': [
        'Κορίτσι',
        ':girl:',
        ':woman:'
    ],
    '🧑{{skin_tone}}': [
        'Πρόσωπο',
        ':person:',
        'Φύλο Ουδέτερο Ενήλικες',
        'Ενήλικες',
        ':person:'
    ],
    '🧑{{skin_tone}}': [
        'Πρόσωπο: Beard',
        ':person_beard:',
        'Αρκούδα',
        'Γενειοφόρος Άτομο',
        'Γενειοφόρος Άτομο',
        ':person:'
    ],
    '🧑{{skin_tone}}‍🦰': [
        'Πρόσωπο: Red Hair',
        ':person_red_hair:',
        'Πρόσωπο Τζίντζερ',
        'Πρόσωπο Redhead',
        'Πρόσωπο Με Κόκκινα Μαλλιά',
        ':person:'
    ],
    '🧑{{skin_tone}}‍🦱': [
        'Πρόσωπο: Curly Hair',
        ':person_curly_hair:',
        'Άτομο Με Σγουρά Μαλλιά',
        ':person:'
    ],
    '🧑{{skin_tone}}‍🦳': [
        'Πρόσωπο: White Hair',
        ':person_white_hair:',
        'Άτομο Με Γκρι Μαλλιά',
        ':person:'
    ],
    '🧑{{skin_tone}}‍🦲': [
        'Πρόσωπο: Bald',
        ':person_bald:',
        'Άτομο Χωρίς Μαλλιά',
        ':person:'
    ],
    '👱{{skin_tone}}': [
        'Πρόσωπο: Blond Μαλλιά',
        ':person_blond_hair:',
        'Πρόσωπο Με Ξανθά Μαλλιά',
        ':person:'
    ],
    '👨{{skin_tone}}': [
        'Άνθρωπος',
        ':man:',
        'Άντρας',
        'Moustache Άνθρωπος',
        ':man:'
    ],
    '🧔{{skin_tone}}‍♂️': [
        'Άνθρωπος: Αρκούδα',
        ':man_beard:',
        'Αρκούδα',
        'Γενειοφόρος Άνθρωπος',
        'Γενειοφόρος Άτομο',
        ':man:'
    ],
    '👨{{skin_tone}}‍🦰': [
        'Άνθρωπος: Κόκκινα Μαλλιά',
        ':man_red_hair:',
        'Άνθρωπος Τζίντζερ',
        'Man Redhead',
        'Άνθρωπος Με Κόκκινα Μαλλιά',
        ':man:'
    ],
    '👨{{skin_tone}}‍🦱': [
        'Άνθρωπος: Σγουρά Μαλλιά',
        ':man_curly_hair:',
        'Άνθρωπος Με Σγουρά Μαλλιά',
        ':man:'
    ],
    '👨{{skin_tone}}‍🦳': [
        'Άνθρωπος: Λευκό Μαλλιά',
        ':man_white_hair:',
        'Άνθρωπος Με Γκρι Μαλλιά',
        ':man:'
    ],
    '👨{{skin_tone}}‍🦲': [
        'Άνθρωπος: Φαλακρός',
        ':man_bald:',
        'Άνθρωπος Χωρίς Μαλλιά',
        ':man:'
    ],
    '👱{{skin_tone}}‍♂️': [
        'Άνθρωπος: Ξανθά Μαλλιά',
        ':man_blond_hair:',
        'Άνθρωπος Με Ξανθιά Μαλλιά',
        ':man:'
    ],
    '👩{{skin_tone}}': [
        'Γυναίκα',
        ':woman:',
        'Γυναίκα',
        'Κυρία',
        'Κίτρινη Γυναίκα',
        ':woman:'
    ],
    '🧔{{skin_tone}}‍♀️': [
        'Γυναίκα: Αρκούδα',
        ':woman_beard:',
        'Αρκούδα',
        'Γενειοφόρος Γυναίκα',
        ':woman:'
    ],
    '👩{{skin_tone}}‍🦰': [
        'Γυναίκα: Κόκκινα Μαλλιά',
        ':woman_red_hair:',
        'Γυναίκα Τζίντζερ',
        'Woman Redhead',
        'Γυναίκα Με Κόκκινα Μαλλιά',
        ':woman:'
    ],
    '👩{{skin_tone}}‍🦱': [
        'Γυναίκα: Σγουρά Μαλλιά',
        ':woman_curly_hair:',
        'Γυναίκα Με Σγουρά Μαλλιά',
        ':woman:'
    ],
    '👩{{skin_tone}}‍🦳': [
        'Γυναίκα: Λευκό Μαλλιά',
        ':woman_white_hair:',
        'Γυναίκα Με Γκρι Μαλλιά',
        ':woman:'
    ],
    '👩{{skin_tone}}‍🦲': [
        'Γυναίκα: Φαλακρός',
        ':woman_bald:',
        'Γυναίκα Χωρίς Μαλλιά',
        ':woman:'
    ],
    '👱{{skin_tone}}‍♀️': [
        'Γυναίκα: Ξανθά Μαλλιά',
        ':woman_blond_hair:',
        'Γυναίκα Με Ξανθιά Μαλλιά',
        ':woman:'
    ],
    '👴{{skin_tone}}': [
        'Παλαιότερος Άνθρωπος',
        ':older_man:',
        ':older:',
        'Ηλικιωμένος Άνθρωπος',
        'Grandpa',
        'Παλιός Άνθρωπος',
        ':man:'
    ],
    '👵{{skin_tone}}': [
        'Ηλικιωμένη Γυναίκα',
        ':older_woman:',
        ':older:',
        'Ηλικιωμένη Γυναίκα',
        'Γιαγιά',
        'Nanna',
        'Παλιά Κυρία',
        'Παλιά Γυναίκα',
        ':woman:'
    ],
    '🧓{{skin_tone}}': [
        'Παλαιότερο Άτομο',
        ':older_person:',
        ':older:',
        'Φύλο Ουδέτερο Παλαιότερο Ενήλικο',
        ':person:'
    ],
    '👼{{skin_tone}}': [
        'Βρεφικός Άγγελος',
        ':baby_angel:',
        'Άγγελος',
        'Cherub',
        'Έρωτας',
        'Πούτο'
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
        'Χριστούγεννα Πρόσωπο',
        ':person:'
    ],
    '🤴{{skin_tone}}': [
        'Πρίγκιπας',
        ':price:',
        ':man:'
    ],
    '👸{{skin_tone}}': [
        'Πριγκίπισσα',
        ':pricess:',
        'Ξανθό Κορίτσι',
        'Κορίτσι Με Κορώνα',
        'Κορίτσι Με Τιάρα',
        ':woman:'
    ],
    '🫅{{skin_tone}}': [
        'Πρόσωπο με Crown',
        ':person_with_crown:',
        ':person:'
    ],
    '👳{{skin_tone}}‍♂️': [
        'Άνθρωπος Που Φοράει Turban',
        ':man_wearing_turban:',
        ':wearing_turban:',
        'Αραβικά',
        'Μουσουλμανική',
        'Σικχ',
        'Turban',
        ':man:'
    ],
    '👳{{skin_tone}}‍♀️': [
        'Γυναίκα Που Φοράει Turban',
        ':woman_wearing_turban:',
        ':wearing_turban:',
        'Αραβικά',
        'Μουσουλμανική',
        'Σικχ',
        'Turban',
        ':woman:'
    ],
    '👳{{skin_tone}}': [
        'Πρόσωπο Που Φοράει Turban',
        ':person_wearing_turban:',
        ':wearing_turban:',
        'Αραβικά',
        'Μουσουλμανική',
        'Σικχ',
        'Turban',
        ':person:'
    ],
    '👲{{skin_tone}}': [
        'Άτομο Με Skullcap',
        ':person_with_skullcap:',
        'Ασιατικός Άνθρωπος',
        'Άνθρωπος Με Κινεζικό Καπέλο',
        'Άνθρωπος με τον Gua Pi Mao',
        ':person:'
    ],
    '🧕{{skin_tone}}': [
        'Γυναίκα με μαντίλα',
        ':woman_with_headscarf:',
        'Hijab',
        'Πρόσωπο με μαντίλα',
        ':woman:'
    ],
    '🤵{{skin_tone}}‍♀️': [
        'Άνθρωπος στο Tuxedo',
        ':man_in_tuxedo:',
        ':tuxedo:',
        'Groom',
        'Άνθρωπος Σε Κοστούμι',
        'Γάμος',
        ':man:'
    ],
    '🤵{{skin_tone}}‍♂️': [
        'Γυναίκα στο Tuxedo',
        ':woman_in_tuxedo:',
        ':tuxedo:',
        'Groom',
        'Γυναίκα Με Κοστούμι',
        'Γάμος',
        ':woman:'
    ],
    '🤵{{skin_tone}}': [
        'Πρόσωπο στο Tuxedo',
        ':person_in_tuxedo:',
        ':tuxedo:',
        'Groom',
        'Κοστούμι Προσώπου',
        'Γάμος',
        ':person:'
    ],
    '👰{{skin_tone}}‍♂️': [
        'Άνθρωπος με Veil',
        ':man_with_veil:',
        ':veil:',
        'Γάμος',
        'Bridegroom',
        'Γάμος',
        ':man:'
    ],
    '👰{{skin_tone}}‍♀️': [
        'Γυναίκα με λαχανικό',
        ':woman_with_veil:',
        ':veil:',
        'Γάμος',
        'Νύφη',
        'Νύφη με λαχανικό',
        'Γάμος',
        ':woman:'
    ],
    '👰{{skin_tone}}': [
        'Άτομο Με Veil',
        ':person_with_veil:',
        ':veil:',
        'Γάμος',
        'Γάμος',
        ':person:'
    ],
    '👨{{skin_tone}}‍🍼': [
        'Ο Άνθρωπος Διατροφή Μωρού',
        ':man_feeding_baby:',
        ':feeding_baby:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🍼': [
        'Γυναίκα Διατροφή Μωρού',
        ':woman_feeding_baby:',
        ':feeding_baby:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🍼': [
        'Μωρό Τροφοδοσίας Προσώπου',
        ':person_feeding_baby:',
        ':feeding_baby:',
        ':person:'
    ],
    '🥷': [
        'Νίντζα',
        ':ninja:'
    ],
    '🫃{{skin_tone}}': [
        'Έγκυος Άνθρωπος',
        ':pregnant_man:',
        ':pregnant:',
        'Κύηση',
        ':man:'
    ],
    '🤰{{skin_tone}}': [
        'Έγκυος Γυναίκα',
        ':pregnant_woman:',
        ':pregnant:',
        'Κύηση',
        'Έγκυος Κυρία',
        ':woman:'
    ],
    '🫄{{skin_tone}}': [
        'Έγκυος Πρόσωπο',
        ':pregnant_person:',
        ':pregnant:',
        'Κύηση',
        ':person:'
    ],
    '🤱{{skin_tone}}': [
        'Breast-Feeding',
        ':breast-feeding:',
        ':breast_feeding:',
        'Breastfeeding'
    ],
    '🦸{{skin_tone}}‍♂️': [
        'Άνθρωπος Superhero',
        ':man_superhero:',
        ':superhero:',
        ':man:'
    ],
    '🦸{{skin_tone}}‍♀️': [
        'Γυναίκα Superhero',
        ':woman_superhero:',
        ':superhero:',
        ':woman:'
    ],
    '🦸{{skin_tone}}': [
        'Πρόσωπο Superhero',
        ':person_superhero:',
        ':superhero:',
        ':person:'
    ],
    '🦹{{skin_tone}}‍♂️': [
        'Άνθρωπος Supervillain',
        ':man_supervillain:',
        ':supervillain:',
        ':man:'
    ],
    '🦹{{skin_tone}}‍♀️': [
        'Γυναίκα Supervillain',
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
        'Μάγος',
        ':man:'
    ],
    '🧙{{skin_tone}}‍♀️': [
        'Μάγος Γυναίκας',
        ':woman_mage:',
        ':mage:',
        'Μάγισσα',
        'Sorceress',
        'Μάγος',
        ':woman:'
    ],
    '🧙{{skin_tone}}': [
        'Πρόσωπο Mage',
        ':person_mage:',
        ':mage:',
        'Μάγος',
        ':mage:',
        ':person:'
    ],
    '🧚{{skin_tone}}‍♂️': [
        'Άνθρωπος Νεράιδα',
        ':man_fairy:',
        ':fairy:',
        ':man:'
    ],
    '🧚{{skin_tone}}‍♀️': [
        'Γαλακτοκομικά Γυναίκα',
        ':woman_fairy:',
        ':fairy:',
        ':woman:'
    ],
    '🧚{{skin_tone}}': [
        'Γαλακτοκομικό Πρόσωπο',
        ':person_fairy:',
        ':fairy:',
        ':person:'
    ],
    '🧛{{skin_tone}}‍♂️': [
        'Άνθρωπος Βαμπίρ',
        ':man_vampire:',
        ':vampire:',
        'Δράκουλας',
        ':man:'
    ],
    '🧛{{skin_tone}}‍♀️': [
        'Vampire Γυναίκας',
        ':woman_vampire:',
        ':vampire:',
        ':woman:'
    ],
    '🧛{{skin_tone}}': [
        'Άτομο Βαμπίρ',
        ':person_vampire:',
        ':vampire:',
        ':person:'
    ],
    '🧜{{skin_tone}}‍♂️': [
        'Μέρμαν',
        ':merman:',
        'Merboy',
        ':man:'
    ],
    '🧜{{skin_tone}}‍♀️': [
        'Γοργόνα',
        ':mermaid:',
        'Συγχώνευση',
        ':woman:'
    ],
    '🧜{{skin_tone}}': [
        'Merperson',
        ':merperson:',
        ':person:'
    ],
    '🧝{{skin_tone}}‍♂️': [
        'Άνθρωπος Elf',
        ':man_elf:',
        ':elf:',
        ':man:'
    ],
    '🧝{{skin_tone}}‍♀️': [
        'Elf Γυναίκας',
        ':woman_elf:',
        ':elf:',
        ':woman:'
    ],
    '🧝{{skin_tone}}': [
        'Άτομο Elf',
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
        'Ανιχνευτής Ανθρώπου',
        ':man_detective:',
        ':detective:',
        'Ιδιωτικό Μάτι',
        'Sleuth',
        'Κατασκόπων',
        'Man Sleuth',
        'Ύπνος ή κατάσκοπος',
        '007',
        'Επιθεωρητής',
        ':man:'
    ],
    '🕵️{{skin_tone}}‍♀️': [
        'Ανιχνευτής Γυναίκας',
        ':woman_detective:',
        ':detective:',
        'Ιδιωτικό Μάτι',
        'Sleuth',
        'Κατασκόπων',
        'Ύπνος Γυναίκας',
        'Ύπνος ή κατάσκοπος',
        '007',
        'Επιθεωρητής',
        ':woman:'
    ],
    '🕵{{skin_tone}}': [
        'Ανιχνευτής Πρόσωπο',
        ':person_detective:',
        ':detective:',
        'Ιδιωτικό Μάτι',
        'Sleuth',
        'Κατασκόπων',
        'Ύπνος Προσώπου',
        'Ύπνος ή κατάσκοπος',
        '007',
        'Επιθεωρητής',
        ':person:'
    ],
    '💂{{skin_tone}}‍♂️': [
        'Άνθρωπος: Φρουρός',
        ':man_guard:',
        ':guard:',
        'Βρετανός Φρουρός',
        'Φρουρά Πόδι',
        ':man:'
    ],
    '💂{{skin_tone}}‍♀️': [
        'Γυναίκα: Φρουρά',
        ':woman_guard:',
        ':guard:',
        'Βρετανός Φρουρός',
        'Φρουρά Πόδι',
        ':woman:'
    ],
    '💂{{skin_tone}}': [
        'Πρόσωπο: Φρουρά',
        ':person_guard:',
        ':guard:',
        'Βρετανός Φρουρός',
        'Φρουρά Πόδι',
        ':person:'
    ],
    '👮{{skin_tone}}‍♂️': [
        'Αστυνομικός Λειτουργός',
        ':man_police_officer:',
        ':police_officer:',
        'Cop',
        'Αστυνομία',
        'Πολιτικός',
        ':man:'
    ],
    '👮{{skin_tone}}‍♀️': [
        'Γυναίκα Αστυνομικός Αξιωματικός',
        ':woman_police_officer:',
        ':police_officer:',
        'Cop',
        'Αστυνομία',
        'Αστυνομική',
        ':woman:'
    ],
    '👮{{skin_tone}}': [
        'Αστυνομικός Λειτουργός',
        ':person_police_officer:',
        ':police_officer:',
        'Cop',
        'Αστυνομία',
        ':person:'
    ],
    '👨{{skin_tone}}‍🚒': [
        'Πυροσβέστης Του Ανθρώπου',
        ':man_firefighter:',
        ':firefighter:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🚒': [
        'Γυναικείο Πυροσβέστη',
        ':woman_firefighter:',
        ':firefighter:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🚒': [
        'Πυροσβέστης Πρόσωπο',
        ':person_firefighter:',
        ':firefighter:',
        ':person:'
    ],
    '👨{{skin_tone}}‍✈️': [
        'Άνθρωπος Πιλότος',
        ':man_pilot:',
        ':pilot:',
        ':man:'
    ],
    '👩{{skin_tone}}‍✈️': [
        'Γυναίκα Πιλότος',
        ':woman_pilot:',
        ':pilot:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍✈️': [
        'Πρόσωπο Πιλοτικό',
        ':person_pilot:',
        ':pilot:',
        ':person:'
    ],
    '👨{{skin_tone}}‍💻': [
        'Άνθρωπος Τεχνολόγος',
        ':man_technologist:',
        ':technologist:',
        'Άνθρωπος Τεχνολόγος',
        ':man:'
    ],
    '👩{{skin_tone}}‍💻': [
        'Γυναίκα Τεχνολόγος',
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
        'Τραγουδιστής Του Ανθρώπου',
        ':man_singer:',
        ':singer:',
        'Bowie',
        'Aladdin Sane',
        ':man:'
    ],
    '👩{{skin_tone}}‍🎤': [
        'Γυναίκα Τραγουδιστής',
        ':woman_singer:',
        ':singer:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🎤': [
        'Τραγουδιστής Πρόσωπο',
        ':person_singer:',
        ':singer:',
        ':person:'
    ],
    '👨{{skin_tone}}‍🎨': [
        'Άνθρωπος Καλλιτέχνης',
        ':man_artist:',
        ':artist:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🎨': [
        'Καλλιτέχνης Γυναίκας',
        ':woman_artist:',
        ':artist:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🎨': [
        'Καλλιτέχνης Πρόσωπου',
        ':person_artist:',
        ':artist:',
        ':person:'
    ],
    '👷{{skin_tone}}‍♂️': [
        'Εργάτης Κατασκευής Ανθρώπων',
        ':man_contruction_worker:',
        ':contruction_worker:',
        ':man:'
    ],
    '👷{{skin_tone}}‍♀️': [
        'Γυναίκα Εργάτης Κατασκευής',
        ':woman_contruction_worker:',
        ':contruction_worker:',
        ':woman:'
    ],
    '👷{{skin_tone}}': [
        'Εργάτης Κατασκευής Προσώπου',
        ':person_contruction_worker:',
        ':contruction_worker:',
        ':person:'
    ],
    '👨{{skin_tone}}‍🚀': [
        'Άνθρωπος Αστροναύτης',
        ':man_astronaut:',
        ':astronaut:',
        'Άνθρωπος Κοσμοναύτης',
        ':man:'
    ],
    '👩{{skin_tone}}‍🚀': [
        'Αστροναύτης Γυναίκας',
        ':woman_astronaut:',
        ':astronaut:',
        'Γυναίκα Cosmonaut',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🚀': [
        'Άτομο Αστροναύτη',
        ':person_astronaut:',
        ':astronaut:',
        'Πρόσωπο Cosmonaut',
        ':person:'
    ],
    '👨{{skin_tone}}‍🔬': [
        'Άνθρωπος Επιστήμονας',
        ':man_scientist:',
        ':scientist:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🔬': [
        'Γυναίκα Επιστήμονας',
        ':woman_scientist:',
        ':scientist:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🔬': [
        'Άνθρωπος Επιστήμονας',
        ':person_scientist:',
        ':scientist:',
        ':person:'
    ],
    '👨{{skin_tone}}‍💼': [
        'Υπάλληλος Του Man',
        ':man_office_worker:',
        ':office_worker:',
        'Διευθύνων Σύμβουλος',
        'Επιχειρηματίας',
        ':man:'
    ],
    '👩{{skin_tone}}‍💼': [
        'Γυναικεία Εργάτης Γραφείου',
        ':woman_office_worker:',
        ':office_worker:',
        'Επιχειρηματίας',
        'Διευθύνων Σύμβουλος',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍💼': [
        'Υπάλληλος Του Γραφείου',
        ':person_office_worker:',
        ':office_worker:',
        'Επιχείρηση',
        'Διευθύνων Σύμβουλος',
        ':person:'
    ],
    '👨{{skin_tone}}‍🏭': [
        'Εργαζόμενος Εργαζόμενος Άνθρωπος',
        ':man_factory_worker:',
        ':factory_worker:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🏭': [
        'Γυναίκα Εργαζόμενος',
        ':woman_factory_worker:',
        ':factory_worker:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🏭': [
        'Εργάτης Εργαζομένων',
        ':person_factory_worker:',
        ':factory_worker:',
        ':person:'
    ],
    '👨{{skin_tone}}‍🔧': [
        'Άνθρωπος Μηχανικός',
        ':man_mechanic:',
        ':mechanic:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🔧': [
        'Γυναικεία Μηχανική',
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
        'Άνθρωπος Cook',
        ':man_cook:',
        ':cook:',
        'Άνθρωπος Σεφ',
        'Αρσενικός Σεφ',
        ':man:'
    ],
    '👩{{skin_tone}}‍🍳': [
        'Μαγειρική Γυναίκας',
        ':woman_cook:',
        ':cook:',
        'Σεφ Γυναίκας',
        'Θηλυκός Σεφ',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🍳': [
        'Άτομο Μαγειρεύω',
        ':person_cook:',
        ':cook:',
        'Πρόσωπο Σεφ',
        ':person:'
    ],
    '👨{{skin_tone}}‍🌾': [
        'Άνθρωπος Αγρότης',
        ':man_farmer:',
        ':farmer:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🌾': [
        'Αγρότης Γυναίκας',
        ':woman_farmer:',
        ':farmer:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🌾': [
        'Αγρότης Προσώπου',
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
        'Μαθητής Άνθρωπος',
        ':man_student:',
        ':student:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🎓': [
        'Γυναίκα Μαθητής',
        ':woman_student:',
        ':student:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🎓': [
        'Μαθητής Άτομου',
        ':person_student:',
        ':student:',
        ':person:'
    ],
    '👨{{skin_tone}}‍⚕️': [
        'Εργαζόμενος Στην Υγεία Του Ανθρώπου',
        ':man_health_worker:',
        ':health_worker:',
        'Αρσενικό Γιατρός',
        'Αρσενικό Νοσοκόμα',
        ':man:'
    ],
    '👩{{skin_tone}}‍⚕️': [
        'Γυναίκα Εργαζόμενος Υγείας',
        ':woman_health_worker:',
        ':health_worker:',
        'Θηλυκός Γιατρός',
        'Γυναίκα Νοσοκόμα',
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
        'Άνθρωπος Shrugging',
        ':man_shrugging:',
        ':shrugging:',
        'idk άνθρωπος',
        'dunno',
        ':man:'
    ],
    '🤷{{skin_tone}}‍♀️': [
        'Γυναίκα Shrugging',
        ':woman_shrugging:',
        ':shrugging:',
        'εικονική γυναίκα',
        'dunno',
        ':woman:'
    ],
    '🤷{{skin_tone}}': [
        'Πρόσωπο Shrugging',
        ':person_shrugging:',
        ':shrugging:',
        'πρόσωπο idk',
        'dunno',
        ':person:'
    ],
    '🤦{{skin_tone}}‍♂️': [
        'Άνθρωπος Facepalming',
        ':man_facepalming:',
        ':facepalming:',
        ':man:'
    ],
    '🤦{{skin_tone}}‍♀️': [
        'Γυναίκα Facepalming',
        ':woman_facepalming:',
        ':facepalming:',
        ':woman:'
    ],
    '🤦{{skin_tone}}': [
        'Πρόσωπο Facepalming',
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
        'Πρόσωπο Bowing',
        ':person_bowing:',
        ':bowing:',
        ':person:'
    ],
    '🧏{{skin_tone}}‍♂️': [
        'Κωφός Άνθρωπος',
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
        'Κωφό Άτομο',
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
        'Γυναικεία Ανύψωση Χέρι',
        ':woman_raising_hand:',
        'Ευτυχισμένη Γυναίκα Αυξάνει Ένα Χέρι',
        ':raising_hand:',
        ':woman:'
    ],
    '🙋{{skin_tone}}': [
        'Άτομο Ανύψωση Χεριών',
        ':person_raising_hand:',
        'Ευτυχισμένο Το Πρόσωπο Αυξάνει Ένα Χέρι',
        ':raising_hand:',
        ':person:'
    ],
    '💁{{skin_tone}}‍♂️': [
        'Άνθρωπος Χέρι Συμβουλών',
        ':man_tipping_hand:',
        'Άνθρωπος Γραφείου Πληροφοριών',
        ':tipping_hand:',
        ':man:'
    ],
    '💁{{skin_tone}}‍♀️': [
        'Χέρι Συμβουλής Γυναίκας',
        ':woman_tipping_hand:',
        'Γυναίκα Γραφείου Πληροφοριών',
        ':tipping_hand:',
        ':woman:'
    ],
    '💁{{skin_tone}}': [
        'Χέρι Συμβουλής Πρόσωπο',
        ':person_tipping_hand:',
        'Πρόσωπο Γραφείου Πληροφοριών',
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
        'Απαγόρευση Γυναίκας Εντάξει',
        ':woman_gesturing_ok:',
        ':gesturing_ok:',
        ':woman:'
    ],
    '🙆{{skin_tone}}': [
        'Χειρονομία Προσώπου Εντάξει',
        ':person_gesturing_ok:',
        ':gesturing_ok:',
        ':person:'
    ],
    '🙅{{skin_tone}}‍♂️': [
        'Αριθ. Χειρονομίας Του Ανθρώπου',
        ':man_gesturing_no:',
        ':gesturing_no:',
        ':man:'
    ],
    '🙅{{skin_tone}}‍♀️': [
        'Χειρισμός Γυναίκας Αριθ.',
        ':woman_gesturing_no:',
        ':gesturing_no:',
        ':woman:'
    ],
    '🙅{{skin_tone}}': [
        'Αριθμός Χειρισμού Πρόσωπου',
        ':person_gesturing_no:',
        ':gesturing_no:',
        ':person:'
    ],
    '🙎{{skin_tone}}‍♂️': [
        'Ο Άνθρωπος Pouting',
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
        'Pouting Άτομο',
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
        'Γυναίκα Frowning',
        ':woman_frowining:',
        ':frowining:',
        ':woman:'
    ],
    '🙍{{skin_tone}}': [
        'Πρόσωπο Frowning',
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
        'Ζόμπι Άτομο',
        ':person_zombie:',
        ':zombie:',
        ':person:'
    ],
    '🚶{{skin_tone}}‍♂️': [
        'Άνθρωπος Περπάτημα',
        ':man_walking:',
        ':walking:',
        ':man:'
    ],
    '🚶{{skin_tone}}‍♀️': [
        'Γυναίκα Περπάτημα',
        ':woman_walking:',
        ':walking:',
        ':woman:'
    ],
    '🚶{{skin_tone}}': [
        'Περπάτημα Προσώπου',
        ':person_walking:',
        ':walking:',
        ':person:'
    ],
    '🧍{{skin_tone}}‍♂️': [
        'Άνθρωπος Στέκεται',
        ':man_standing:',
        ':standing:',
        ':man:'
    ],
    '🧍{{skin_tone}}‍♀️': [
        'Γυναίκα Μόνιμη',
        ':woman_standing:',
        ':standing:',
        ':woman:'
    ],
    '🧍{{skin_tone}}': [
        'Μόνιμο Πρόσωπο',
        ':person_standing:',
        ':standing:',
        ':person:'
    ],
    '🧎{{skin_tone}}‍♂️': [
        'Άνθρωπος Γονιμοποίηση',
        ':man_kneeling:',
        ':kneeling:',
        ':man:'
    ],
    '🧎{{skin_tone}}‍♀️': [
        'Γονάτωση Γυναίκας',
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
    '👨{{skin_tone}}‍🦯': [
        'Άνθρωπος με λευκό ζαχαροκάλαμο',
        ':man_with_white_cane:',
        ':white_cane:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🦯': [
        'Γυναίκα με λευκό ζαχαροκάλαμο',
        ':woman_with_white_cane:',
        ':white_cane:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🦯': [
        'Άτομο με λευκό ζαχαροκάλαμο',
        ':person_with_white_cane:',
        ':white_cane:',
        ':person:'
    ],
    '👨{{skin_tone}}‍🦼': [
        'Άνθρωπος σε μηχανοκίνητη αναπηρική καρέκλα',
        ':man_in_motorized_wheelchair:',
        ':motorized_wheelchair:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🦼': [
        'Γυναίκα σε Μηχανοκίνητη Αναπηρική Καρέκλα',
        ':woman_in_motorized_wheelchair:',
        ':motorized_wheelchair:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🦼': [
        'Άτομο σε μηχανοκίνητο αναπηρικό καροτσάκι',
        ':person_in_motorized_wheelchair:',
        ':motorized_wheelchair:',
        ':person:'
    ],
    '👨{{skin_tone}}‍🦽': [
        'Ο άνθρωπος σε χειρωνακτική αναπηρική καρέκλα',
        ':man_manual_wheelchair:',
        ':manual_wheelchair:',
        ':man:'
    ],
    '👩{{skin_tone}}‍🦽': [
        'Γυναίκα σε χειρωνακτική αναπηρική καρέκλα',
        ':woman_manual_wheelchair:',
        ':manual_wheelchair:',
        ':woman:'
    ],
    '🧑{{skin_tone}}‍🦽': [
        'Πρόσωπο σε χειρωνακτική αναπηρική καρέκλα',
        ':person_manual_wheelchair:',
        ':manual_wheelchair:',
        ':person:'
    ],
    '👯‍♂️': [
        'Άνδρες με αυτιά Bunny',
        ':men_with_bunny_hears:',
        ':bunny_ears:',
        ':man:'
    ],
    '👯‍♀️': [
        'Γυναίκες με Bunny αυτιά',
        ':women_with_bunny_hears:',
        ':bunny_ears:',
        ':woman:'
    ],
    '👯': [
        'Άνθρωποι με Αυτιά Bunny',
        ':people_with_bunny_hears:',
        ':bunny_ears:',
        ':person:'
    ],
    '🕴️{{skin_tone}}': [
        'Πρόσωπο σε επίπεδο κοστούμι',
        ':person_in_suit_levitating:',
        'Hovering Man',
        'Rude Boy',
        'Walt Jabsco',
        'Άνθρωπος σε Business Κοστούμι',
        ':person:'
    ],
    '🧖{{skin_tone}}‍♂️': [
        'Άνθρωπος στο Steamy Room',
        ':man_in_steamy_room:',
        ':steamy_room:',
        'Άνθρωπος στη Σάουνα',
        ':man:'
    ],
    '🧖{{skin_tone}}‍♀️': [
        'Γυναίκα στο Steamy Room',
        ':woman_in_steamy_room:',
        ':steamy_room:',
        'Γυναίκα στη Σάουνα',
        ':woman:'
    ],
    '🧖{{skin_tone}}': [
        'Πρόσωπο στο Steamy Room',
        ':person_in_steamy_room:',
        ':steamy_room:',
        'Πρόσωπο στη Σάουνα',
        ':person:'
    ],
    '👫{{skin_tone}}': [
        'Γυναίκα και άνθρωπος κρατώντας χέρια',
        ':woman_and_man_holding_hands:',
        ':holding_hands:',
        'Ετεροεξουαλικό Ζευγάρι',
        'Ευθεία Ζευγάρι',
        'Άνθρωπος και γυναίκα κρατώντας χέρια',
        ':woman:'
    ],
    '👬{{skin_tone}}': [
        'Ανδρικά Χέρια Εκμετάλλευσης',
        ':holding_hands:',
        ':men_holding_hands:',
        'Gay Ζευγάρι',
        'Δύο Άνδρες Κρατώντας Χέρια',
        ':man:'
    ],
    '👭{{skin_tone}}': [
        'Γυναικεία Χέρια Κρατώντας',
        ':holding_hands:',
        ':women_holding_hands:',
        'Λεσβιακό Ζευγάρι',
        'Δύο Γυναίκες Κρατώντας Τα Χέρια',
        ':woman:'
    ],
    '🧑‍🤝‍🧑': [
        'Άνθρωποι Που Κρατούν Χέρια',
        ':holding_hands:',
        ':people_holding_hands:',
        'Δύο Άνθρωποι Κρατώντας Χέρια',
        'Φύλο Περιεκτική Ζευγάρι',
        'Φύλο Ουδέτερο Ζευγάρι',
        'Φύλο Μη Συμμορφούμενο Ζευγάρι',
        ':person:'
    ],
    '👨‍👩‍👦': [
        'Οικογένεια με τη μητέρα, τον πατέρα και τον γιο',
        ':family_with_mother_father_and_son:',
        'Οικογένεια: Άνθρωπος, Γυναίκα, Αγόρι'
    ],
    '👨‍👩‍👧': [
        'Οικογένεια με μητέρα, πατέρα και κόρη',
        ':family_with_mother_father_and_daughter:',
        'Οικογένεια: Άνθρωπος, Γυναίκα, Κορίτσι'
    ],
    '👨‍👩‍👧‍👦': [
        'Οικογένεια με τη μητέρα, τον πατέρα, τον γιο και την κόρη',
        ':family_with_mother_father_son_and_daughter:',
        'Οικογένεια: Άνδρα, Γυναίκα, Κορίτσι, Αγόρι'
    ],
    '👨‍👩‍👦‍👦': [
        'Οικογένεια με τη μητέρα, τον πατέρα και δύο γιους',
        ':family_with_mother_father_and_two_sons:',
        'Οικογένεια: Άνθρωπος, Γυναίκα, Αγόρι, Αγόρι'
    ],
    '👨‍👩‍👧‍👧': [
        'Οικογένεια με τη μητέρα, τον πατέρα και δύο κόρες',
        ':family_with_mother_father_and_two_daughters:',
        'Οικογένεια: Άνθρωπος, Γυναίκα, Κορίτσι, Κορίτσι'
    ],
    '👨‍👨‍👦': [
        'Οικογένεια με δύο πατέρες και γιο',
        ':family_with_two_fathers_and_son:',
        'Οικογένεια: Άνθρωπος, Άνθρωπος, Αγόρι',
        ':man:'
    ],
    '👨‍👨‍👧': [
        'Οικογένεια με δύο πατέρες και κόρη',
        ':family_with_two_fathers_and_daughter:',
        'Οικογένεια: Άνθρωπος, Άνθρωπος, Κορίτσι',
        ':man:'
    ],
    '👨‍👨‍👧‍👦': [
        'Οικογένεια με δύο πατέρες, τον γιο και την κόρη',
        ':family_with_two_fathers_son_and_daughter:',
        'Οικογένεια: Άνθρωπος, Άνθρωπος, Κορίτσι, Αγόρι',
        ':man:'
    ],
    '👨‍👨‍👦‍👦': [
        'Οικογένεια με δύο πατέρες και δύο γιους',
        ':family_with_two_fathers_and_two_sons:',
        'Οικογένεια: Άνθρωπος, Άνθρωπος, Αγόρι, Αγόρι',
        ':man:'
    ],
    '👨‍👨‍👧‍👧': [
        'Οικογένεια με δύο πατέρες και δύο κόρες',
        ':family_with_two_fathers_and_two_daughters:',
        'Οικογένεια: Άνθρωπος, Άνθρωπος, Κορίτσι, Κορίτσι',
        ':man:'
    ],
    '👩‍👩‍👦': [
        'Οικογένεια με δύο μητέρες και γιο',
        ':family_with_two_mothers_and_son:',
        'Οικογένεια: Γυναίκα, Γυναίκα, Αγόρι',
        ':woman:'
    ],
    '👩‍👩‍👧': [
        'Οικογένεια με δύο μητέρες και κόρη',
        ':family_with_two_mothers_and_daughter:',
        'Οικογένεια: Γυναίκα, Γυναίκα, Κορίτσι',
        ':woman:'
    ],
    '👩‍👩‍👧‍👦': [
        'Οικογένεια με δύο μητέρες, Υιός και κόρη',
        ':family_with_two_mothers_son_and_daughter:',
        'Οικογένεια: Γυναίκα, Γυναίκα, Κορίτσι, Αγόρι',
        ':woman:'
    ],
    '👩‍👩‍👦‍👦': [
        'Οικογένεια με δύο μητέρες και δύο γιους',
        ':family_with_two_mothers_and_two_sons:',
        'Οικογένεια: Γυναίκα, Γυναίκα, Αγόρι, Αγόρι',
        ':woman:'
    ],
    '👩‍👩‍👧‍👧': [
        'Οικογένεια με δύο μητέρες και δύο κόρες',
        ':family_with_two_mothers_and_two_daughters:',
        'Οικογένεια: Γυναίκα, Γυναίκα, Κορίτσι, Κορίτσι',
        ':woman:'
    ],
    '👨‍👦': [
        'Οικογένεια με τον πατέρα και τον γιο',
        ':family_with_father_and_son:',
        'Οικογένεια: Άνθρωπος, Αγόρι',
        ':man:'
    ],
    '👨‍👧': [
        'Οικογένεια με τον πατέρα και την κόρη',
        ':family_with_father_and_daughter:',
        'Οικογένεια: Άνθρωπος, Κορίτσι',
        ':man:'
    ],
    '👨‍👦‍👦': [
        'Οικογένεια με τον πατέρα και δύο γιους',
        ':family_with_father_and_two_sons:',
        'Οικογένεια: Άνθρωπος, Αγόρι, Αγόρι',
        ':man:'
    ],
    '👨‍👧‍👦': [
        'Οικογένεια με τον πατέρα, τον γιο και την κόρη',
        ':family_with_father_son_and_daughter:',
        'Οικογένεια: Άνθρωπος, Κορίτσι, Αγόρι',
        ':man:'
    ],
    '👨‍👧‍👧': [
        'Οικογένεια με τον πατέρα και δύο κόρες',
        ':family_with_father_and_two_daughters:',
        'Οικογένεια: Άνθρωπος, Κορίτσι, Κορίτσι',
        ':man:'
    ],
    '👩‍👦': [
        'Οικογένεια με τη μητέρα και τον γιο',
        ':family_with_mother_and_son:',
        'Οικογένεια: Γυναίκα, Αγόρι',
        ':woman:'
    ],
    '👩‍👧': [
        'Οικογένεια με τη μητέρα και την κόρη',
        ':family_with_mother_and_daughter:',
        'Οικογένεια: Γυναίκα, Κορίτσι',
        ':woman:'
    ],
    '👩‍👦‍👦': [
        'Οικογένεια με τη μητέρα και δύο γιους',
        ':family_with_mother_and_two_sons:',
        'Οικογένεια: Γυναίκα, Αγόρι, Αγόρι',
        ':woman:'
    ],
    '👩‍👧‍👦': [
        'Οικογένεια με μητέρα, Υιός και κόρη',
        ':family_with_mother_son_and_daughter:',
        'Οικογένεια: Γυναίκα, Κορίτσι, Αγόρι',
        ':woman:'
    ],
    '👩‍👧‍👧': [
        'Οικογένεια με τη μητέρα και δύο κόρες',
        ':family_with_mother_and_two_daughters:',
        'Οικογένεια: Γυναίκα, Κορίτσι, Κορίτσι',
        ':woman:'
    ],
    '💑{{skin_tone}}': [
        'Ζευγάρι Με Καρδιά',
        ':couple_with_heart:',
        'Ζευγάρι Στην Αγάπη',
        'Ζευγάρι Αγάπης',
        'Φύλο Ουδέτερο Ζευγάρι',
        ':person:'
    ],
    '👩‍❤️‍👨': [
        'Άνθρωπος και γυναίκα με καρδιά',
        ':man_and_woman_with_heart:',
        'Ζευγάρι Στην Αγάπη',
        'Ζευγάρι Αγάπης',
        'Ζευγάρι Με Καρδιά'
    ],
    '👨‍❤️‍👨': [
        'Δύο Άνδρες Με Καρδιά',
        ':two_men_with_heart:',
        'Ζευγάρι με την καρδιά: Άνθρωπος, Άνθρωπος',
        ':man:'
    ],
    '👩‍❤️‍👩': [
        'Δύο Γυναίκες Με Καρδιά',
        ':two_women_with_heart:',
        'Ζευγάρι με καρδιά: Γυναίκα, Γυναίκα',
        ':woman:'
    ],
    '💏{{skin_tone}}': [
        'Ζευγάρι Φιλί',
        ':couple_kissing:',
        'Φιλί',
        'Φύλο Ουδέτερο Ζευγάρι Φιλί',
        ':person:'
    ],
    '👩‍❤️‍💋‍👨': [
        'Ο άνθρωπος και η γυναίκα φιλιά',
        ':man_and_woman_kissing:'
    ],
    '👨‍❤️‍💋‍👨': [
        'Δύο Άνδρες Φιλί',
        ':two_men_kissing:',
        'Άνθρωπος και ο άνθρωπος φιλιά',
        ':man:'
    ],
    '👩‍❤️‍💋‍👩': [
        'Δύο Γυναίκες Φιλί',
        ':two_women_kissing:',
        'Γυναίκα και γυναίκα φιλιά',
        ':woman:'
    ],
    '💆{{skin_tone}}‍♂️': [
        'Άνθρωπος Να πάρει Μασάζ Κεφάλι',
        ':man_getting_head_massage:',
        ':getting_head_massage:',
        ':man:'
    ],
    '💆{{skin_tone}}‍♀️': [
        'Γυναίκα Να πάρει Μασάζ Κεφάλι',
        ':woman_getting_head_massage:',
        ':getting_head_massage:',
        ':woman:'
    ],
    '💆{{skin_tone}}': [
        'Πρόσωπο Να πάρει Μασάζ Κεφάλι',
        ':person_getting_head_massage:',
        ':getting_head_massage:',
        ':person:'
    ],
    '💇{{skin_tone}}‍♂️': [
        'Άνθρωπος Getting Haircut',
        ':man_getting_haircut:',
        ':getting_haircut:',
        ':man:'
    ],
    '💇{{skin_tone}}‍♀️': [
        'Γυναίκα Getting Haircut',
        ':woman_getting_haircut:',
        ':getting_haircut:',
        ':woman:'
    ],
    '💇{{skin_tone}}': [
        'Πρόσωπο Getting Haircut',
        ':person_getting_haircut:',
        ':getting_haircut:',
        ':person:'
    ],
    '🛌{{skin_tone}}': [
        'Καταλύματα Ύπνου',
        'κουρασμένος',
        ':sleeping_accommodation:',
        'Πρόσωπο σε κρεβάτι',
        'Υπνηλία Άτομου'
    ],
    '🛀{{skin_tone}}': [
        'Πρόσωπο Που Λαμβάνει Μπανιέρα',
        'Κολύμβηση',
        ':bath:',
        ':person_taking_bath:',
        'Ζεστό Μπάνιο',
        'Πρόσωπο που παίρνει ένα μπάνιο',
        'Μπάνιο',
        'Ντους',
        'Σαπούνι',
        'Tidy',
        'Clean',
        'Scrub'
    ],
    '🧌': [
        'Troll',
        ':troll:'
    ],
    '👺': [
        'Γκομπλιν',
        ':goblin:',
        'Μακρύ Πρόσωπο Μύτης',
        'Κόκκινη Μάσκα',
        'Tengu',
        'Ιαπωνικά Goblin'
    ]
};
/*animals*/
emojis_language[lang][4] = {
    '😺': [
        'Grinning Cat',
        ':happy_cat:',
        ':smiling_cat:',
        '::):',
        'Χαρούμενη Γάτα',
        'Χαμογελώντας Γάτα',
        'Καλή Γάτα Πρόσωπο',
        'Χαμογελαστό πρόσωπο γάτα με ανοιχτό στόμα'
    ],
    '😸': [
        'Grinning γάτα με χαμογελαστά μάτια',
        ':grinning_cat:',
        '::D:',
        'Grinning Cat',
        'Χαρούμενη Γάτα',
        'Grinning Πρόσωπο Γάτας'
    ],
    '😹': [
        'Γάτα με τα δάκρυα της χαράς',
        ':laughing_cat:',
        '::):',
        'Χαρούμενη Δάκρυα Γάτα',
        'Γέλια Γάτα'
    ],
    '😻': [
        'Χαμογελώντας γάτα με Heart-Eyes',
        ':heart_eyes_cat:',
        ':*.*:',
        'Καρδιά Μάτια Γάτα',
        'Αγάπη Γάτα',
        'Χαμογελαστό πρόσωπο γάτα με μάτια σε σχήμα καρδιάς'
    ],
    '😼': [
        'Γάτα με Wry Smile',
        ':cat_with_wry_smile:',
        'Σμίκρυνση Γάτας',
        'Σμίκρυνση Πρόσωπο Γάτας',
        'Πρόσωπο γάτας με Wry Smile'
    ],
    '😽': [
        'Φιλί Γάτα',
        ':kissing_cat:',
        '::*:',
        'Φιλί Πρόσωπο Γάτα',
        'Φιλί προσώπου γάτα με κλειστά μάτια'
    ],
    '🙀': [
        'Weary Cat',
        ':weary_cat:',
        '::O:',
        'Στιλβωμένη Γάτα',
        'Γάτα Που Κρατάει',
        'Γάτα προσώπου που κρατάει στο φόβο',
        'Weary Cat Πρόσωπο'
    ],
    '😿': [
        'Κλαίνοντας Γάτα',
        ':crying_cat:',
        '::(:',
        'Λυπημένη Γάτα',
        'Κλαίνοντας Πρόσωπο Γάτας'
    ],
    '😾': [
        'Σπουδάζοντας Γάτα',
        ':pouting_cat:',
        'Grumpy Cat',
        'Pouting Πρόσωπο Γάτας'
    ],
    '🙈': [
        'See-No-Evil Μαϊμού',
        'Μαϊμού',
        ':see-no-evil_mokey:',
        ':see_no_evil_mokey:',
        ':monkey:',
        'Μιζάρου',
        'Μαϊμού Που Καλύπτει Τα Μάτια'
    ],
    '🙉': [
        'Καρδιά-Κακό Μαϊμού',
        'Μαϊμού',
        ':hear-no-evil_monkey:',
        ':hear_no_evil_monkey:',
        ':monkey:',
        'Kikazaru',
        'Μαϊμού Που Καλύπτει Αυτιά'
    ],
    '🙊': [
        'Χωρίς Ομιλία Μαϊμού',
        'Μαϊμού',
        ':speak-no-evil_monkey:',
        ':speak_no_evil_monkey:',
        ':monkey:',
        'Iwazaru',
        'Στόμα Κάλυψης Μαϊμού',
        'Χωρίς Ομιλία'
    ],
    '🐵': [
        'Πρόσωπο Πίθηκου',
        ':monkey_face:',
        'Μαϊμού',
        'Μαϊμού Κεφαλή'
    ],
    '🐒': [
        'Μαϊμού',
        ':monkey:',
        'Cheeky Πίθηκος'
    ],
    '🦍': [
        'Gorilla',
        ':gorilla:'
    ],
    '🐶': [
        'Πρόσωπο Σκύλου',
        ':dog_face:',
        'Σκύλος',
        'Κουτάβι'
    ],
    '🐕': [
        'Σκύλος',
        ':dog:',
        'Doggo',
        'Akita Inu'
    ],
    '🦮': [
        'Βλέποντας Τον Σκύλο Των Ματιών',
        ':seeing_eye_dog:',
        'Οδηγός Σκύλος'
    ],
    '🐕‍🦺': [
        'Σκύλος Υπηρεσίας',
        ':service_dog:'
    ],
    '🐩': [
        'Poodle',
        ':poodle:',
        'Σκύλος',
        'Μινιατούρα Poodle',
        'Τυπικό Poodle',
        'Poodle Παιχνιδιών'
    ],
    '🐺': [
        'Λύκος',
        ':wolf:',
        'Πρόσωπο Λύκου',
        ':gray:',
        ':grey:'
    ],
    '🦊': [
        'Αλεπού',
        ':fox:',
        'Πρόσωπο Αλεπού',
        ':orange:'
    ],
    '🦝': [
        'Ρακούν',
        ':raccoon:'
    ],
    '🐱': [
        'Πρόσωπο Γάτας',
        ':cat_face:',
        ':3',
        'Γατάκι',
        'Γατάκι'
    ],
    '🐈': [
        'Γάτα',
        ':cat:',
        'Εγχώρια Γάτα',
        'Αγριόχοιρος',
        'Χιούσεσατ'
    ],
    '🐈‍⬛': [
        'Μαύρη Γάτα',
        ':black_cat:',
        ':black:'
    ],
    '🦁': [
        'Λιοντάρι',
        ':lion:',
        'Πρόσωπο Λιονταριών'
    ],
    '🐯': [
        'Πρόσωπο Tiger',
        ':tiger_face:',
        'Χαριτωμένος Τίγρης'
    ],
    '🐅': [
        'Τίγρης',
        ':tiger:',
        'Τίγρης Της Βεγγάλης'
    ],
    '🐆': [
        'Leopard',
        ':leopard:',
        'Αφρικανική Λεοπάρδαλη',
        'Jaguar'
    ],
    '🐴': [
        'Πρόσωπο Άλογα',
        ':horse_face:',
        'Κεφαλή Άλογα'
    ],
    '🐎': [
        'Άλογα',
        ':horse:',
        'Άλογο Galloping',
        'Ιππόδρομος'
    ],
    '🦄': [
        'Μονόκερος',
        ':unicorn:',
        'Μονόκερο Πρόσωπο'
    ],
    '🦓': [
        'Zebra',
        ':zebra:',
        'Ζέβρα Πρόσωπο',
        ':white:',
        ':black:'
    ],
    '🦌': [
        'Ελάφια',
        ':deer:',
        'Buck',
        'Τάρανδος',
        'Stag'
    ],
    '🐮': [
        'Πρόσωπο Αγελάδας',
        ':cow_face:',
        'Αγελάδα',
        'Ευτυχισμένη Αγελάδα'
    ],
    '🐂': [
        'Ox',
        ':ox:',
        'Ταύρος',
        'Bullock',
        'Oxen',
        'Τιμόνι'
    ],
    '🐃': [
        'Μπουφάν Νερού',
        ':water_buffalo:',
        'Βουβάλι',
        'Μπουφάν Για Κατοικίδια Νερό'
    ],
    '🐄': [
        'Αγελάδα',
        ':cow:',
        'Γαλακτοκομική Αγελάδα'
    ],
    '🐷': [
        'Πρόσωπο Χοιρινό',
        ':pig_fase:',
        'Χοίροι',
        'Κεφαλή Χοίρου',
        ':pink:'
    ],
    '🐖': [
        'Χοίροι',
        ':pig:',
        'Χοκ',
        'Sow',
        ':pink:'
    ],
    '🐗': [
        'Κάπρου',
        ':boar:',
        'Warthog',
        'Αγριογούρουνο',
        'Άγρια Χοιροειδή'
    ],
    '🐽': [
        'Χοιρινό Μύτη',
        ':pig_nose:'
    ],
    '🐏': [
        'Ram',
        ':ram:',
        'Πρόβατα'
    ],
    '🐑': [
        'Ewe',
        ':ewe:',
        'Lamb',
        'Πρόβατα'
    ],
    '🐐': [
        'Αίγες',
        ':goat:'
    ],
    '🐪': [
        'Κάμελ',
        ':camel:',
        'Αραβική Καμέλ',
        'Καμήλα Του Χρυσού',
        'Κάμερα Με Ένα Χτύπημα'
    ],
    '🐫': [
        'Κάμελ Δύο Χυμών',
        ':two-hump_camel:',
        ':two_hump_camel:',
        'Ασιατική Καμήλα',
        'Καμήλα Bactrian'
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
        'Ελέφαντας',
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
        'Πρόσωπο Ποντικιού',
        ':mouse_face:',
        'Ποντίκι'
    ],
    '🐁': [
        'Ποντίκι',
        ':mouse:',
        'Δορμούζ',
        'Ποδόσφαιρο',
        'Ποντίκια'
    ],
    '🐀': [
        'Επίσπερμο',
        ':rat:',
        'Ποδόσφαιρο'
    ],
    '🐹': [
        'Χάμστερ',
        ':hamster:',
        'Πρόσωπο Χάμστερ'
    ],
    '🐰': [
        'Πρόσωπο Κουνέλι',
        ':rabbit_face:',
        'Λαγουδάκι Του Πάσχα'
    ],
    '🐇': [
        'Κουνέλι',
        'Bunny',
        ':rabbit:',
        'Κουνέλι Λαγού'
    ],
    '🐿️': [
        'Chipmunk',
        ':chipmunk:',
        'Σκίουρος'
    ],
    '🦔': [
        'Σκαντζόχοιρος',
        ':hedgehog:'
    ],
    '🦇': [
        'Νυχτερίδα',
        ':bat:',
        'Batman',
        ':black:'
    ],
    '🐻': [
        'Αρκούδα',
        ':bear:',
        'Όψη Αρκούδας',
        'Αρκουδάκι',
        ':brown:'
    ],
    '🐨': [
        'Κοάλα',
        ':koala:',
        'Πρόσωπο Koala'
    ],
    '🐼': [
        'Πάντα',
        ':panda:',
        'Πάντα Πρόσωπο'
    ],
    '🦘': [
        'Καγκουρό',
        ':kangaroo:',
        'Ρόο'
    ],
    '🦡': [
        'Έμβλημα',
        ':badger:'
    ],
    '🦃': [
        'Τουρκία',
        ':turkey:',
        'Τουρκία Των Ευχαριστιών',
        'Άγρια Τουρκία'
    ],
    '🐔': [
        'Κοτόπουλα',
        ':chicken:',
        'Hen'
    ],
    '🐓': [
        'Κοκκινίλα',
        ':cock:',
        'Rooster',
        'Κοκκινορέλη'
    ],
    '🐣': [
        'Τσεκούρι Εκκόλαψης',
        ':hatching_chick:',
        'Παιδικό Κοτόπουλο',
        'Επεκκόλαψη Γκόμενα',
        ':yellow:'
    ],
    '🐤': [
        'Μωρό Γκόμενα',
        ':baby_chick:',
        'Κίτρινο Πουλί',
        ':yellow:'
    ],
    '🐥': [
        'Μπροστινό Μωρό Γκόμενα',
        ':front_baby_chick:',
        'Μωρό Γκόμενα',
        'Μόνιμο Γκόμενα',
        ':yellow:'
    ],
    '🐦': [
        'Πουλί',
        ':bird:'
    ],
    '🐧': [
        'Penguin',
        ':penguin:'
    ],
    '🕊️': [
        'Περιστέρι',
        ':Dove:',
        'Περιστέρι της ειρήνης',
        ':white:'
    ],
    '🦅': [
        'Αετός',
        ':Eagle:',
        'Φαλακρός Αετός'
    ],
    '🦆': [
        'Πάπιες',
        ':Duck:'
    ],
    '🦢': [
        'Κύκνος',
        ':swan:',
        ':white:'
    ],
    '🦉': [
        'Κουκουβάγια',
        ':owl:',
        ':brown:'
    ],
    '🦚': [
        'Παγόψαρο',
        ':peacock:'
    ],
    '🦜': [
        'Παπαγάλος',
        ':parrot:'
    ],
    '🐸': [
        'Βάτραχος',
        ':frog:',
        'Φρύνος',
        'Πρόσωπο Βάτραχος',
        ':green:'
    ],
    '🐊': [
        'Κροκόδειλος',
        ':crocodile:',
        'Αλιγάτορας',
        'Κροκόδειλος',
        ':green:'
    ],
    '🐢': [
        'Χελώνα',
        ':turtle:',
        'Tortoise',
        ':green:'
    ],
    '🦎': [
        'Μάγος',
        ':lizard:',
        'Gecko',
        ':green:'
    ],
    '🐍': [
        'Φίδι',
        ':snake:',
        'Serpent'
    ],
    '🐲': [
        'Πρόσωπο Δράκου',
        ':dragon_face:',
        'Δράκος Κεφαλής'
    ],
    '🐉': [
        'Δράκος',
        ':dragon:'
    ],
    '🦕': [
        'Σαυρόποδα',
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
        'Σπασμένος Φάλαινα',
        ':spouting_whale:',
        'Χαριτωμένη Φάλαινα'
    ],
    '🐋': [
        'Φάλαινα',
        ':whale:'
    ],
    '🐬': [
        'Δελφίνι',
        ':dolphin:'
    ],
    '🐟': [
        'Ψάρια',
        ':fish:',
        'Ψάρια Γλυκού Νερού'
    ],
    '🐠': [
        'Τροπικά Ψάρια',
        ':tropical_fish:',
        'Ψάρια',
        'Κίτρινο Μπλε Ψάρι'
    ],
    '🐡': [
        'Φυσηψίες',
        ':blowfish:',
        'Fugu',
        'Pufferfish'
    ],
    '🦈': [
        'Καρχαρίας',
        ':shark:',
        'Μεγάλος Λευκός Καρχαρίας'
    ],
    '🐙': [
        'Χταπόδι',
        ':octopus:'
    ],
    '🐚': [
        'Σπειροειδές Κέλυφος',
        ':spiral_shell:',
        'Seashell',
        'Κέλυφος'
    ],
    '🐌': [
        'Σαλιγκάρι',
        ':snail:',
        'Slug',
        'Κήπος Σαλιγκάρι'
    ],
    '🦋': [
        'Πεταλούδα',
        ':butterfly:'
    ],
    '🐛': [
        'Σφάλμα',
        ':bug:',
        'Caterpillar',
        'Έντομο'
    ],
    '🐜': [
        'Ant',
        ':ant:',
        'Σφάλμα',
        'Έντομο'
    ],
    '🐝': [
        'Μέλισσα',
        ':honeybee:',
        'Μέλισσα',
        'Bumblebee',
        ':yellow:',
        ':black:'
    ],
    '🐞': [
        'Lady Beetle',
        ':lady_beetle:',
        'Ladybird',
        'Ladybug',
        'Σφάλμα'
    ],
    '🦗': [
        'Κρίκετ',
        ':cricket:',
        'Grasshopper'
    ],
    '🕷️': [
        'Αράχνη',
        ':spider:'
    ],
    '🦂': [
        'Σκορπιός',
        ':scorpion:'
    ],
    '🦟': [
        'Κουνούπι',
        ':mosquito:',
        ':black:'
    ],
    '🦀': [
        'Κάβουρας',
        ':crab:',
        ':red:'
    ],
    '🦞': [
        'Αστακός',
        ':lobster:'
    ],
    '🦐': [
        'Γαρίδα',
        ':shrimp:',
        'Prawn'
    ],
    '🦑': [
        'Καλαμάρι',
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
        'Βίσος',
        ':bison:'
    ],
    '🦣': [
        'Μαμούθ',
        ':mammoth:',
        ':brown:'
    ],
    '🦫': [
        'Κάστορας',
        ':beaver:'
    ],
    '🐻‍❄️': [
        'Πολική Αρκούδα',
        ':polar_bear:',
        ':white:'
    ],
    '🦤': [
        'Dodo',
        ':dodo:'
    ],
    '🦭': [
        'Σφραγίδα',
        ':seal:'
    ],
    '🪲': [
        'Σκαθάρι',
        ':beetle:'
    ],
    '🪳': [
        'Κατσαρίδα',
        ':cockroach:'
    ],
    '🪰': [
        'Πτήση',
        ':fly:'
    ],
    '🪱': [
        'Σκουλήκι',
        ':worm:'
    ],
    '🦩': [
        'Flamingo',
        ':flamingo:'
    ],
    '🪹': [
        'Άδειασμα Φωλιάς',
        ':empty_nest:',
        'Πτηνά',
        'Αρχική'
    ],
    '🪺': [
        'Φωλιά με αυγά',
        ':nest_with_eggs:',
        'Πτηνά',
        'Αρχική'
    ]
};
/*symbols*/
emojis_language[lang][5] = {
    '💘': [
        'Καρδιά με βέλος',
        ':heart_with_arrow:',
        'Βέλος Cupid',
        'Lovestruck',
        ':pink:'
    ],
    '💝': [
        'Καρδιά με κορδέλα',
        ':heart_with_ribbon:',
        'Κουτί Σοκολάτας',
        'Κουτί Δώρου',
        'Καρδιά Δώρου',
        ':red:'
    ],
    '💖': [
        'Sparkling Heart',
        ':sparkling_heart:',
        'Καρδιά Σπινθήρα',
        'Σπινθηρή Καρδιά',
        'Καρδιά Αστέρων',
        ':pink:'
    ],
    '💗': [
        'Αυξανόμενη Καρδιά',
        ':growing_heart:',
        'Πολλαπλή Καρδιά',
        'Τριπλή Καρδιά',
        ':pink:'
    ],
    '💓': [
        'Καρδιά Του Ξυλοδαρμού',
        ':beating_heart:',
        'Συναγερμός Καρδιάς',
        'Heartbeat',
        'Καρδιά Wi-Fi',
        ':pink:'
    ],
    '💞': [
        'Περιστρεφόμενες Καρδιές',
        ':revolving_hearts:',
        'Δύο Καρδιές',
        ':pink:'
    ],
    '💕': [
        'Δύο Καρδιές',
        ':two_hearts:',
        'Μικρές Καρδιές',
        'Δύο Ροζ Καρδιές',
        ':pink:'
    ],
    '💟': [
        'Διακόσμηση Καρδιών',
        ':heart_decoration:',
        ':purple:'
    ],
    '❣️': [
        'Φωνή Καρδιάς',
        ':heart_exclamation:',
        'Καρδιά Πάνω Από Την Τελεία',
        'Κόκκινη καρδιά ως ένδειξη θαυμασμού',
        'Βαριά Καρδιά Διακήρυξη Μαρκ Στολίδι',
        ':red:'
    ],
    '💔': [
        'Σπασμένη Καρδιά',
        ':broken_heart:',
        'Σπάζοντας Καρδιά',
        'Brokenhearted',
        'Καρδιά Σπασμένη',
        ':red:'
    ],
    '❤️‍🩹': [
        'Καρδιά Mending',
        ':mending_heart:',
        'Καρδιά Με Συγκρατημένη',
        'Καρδιά Θεραπείας',
        'Αδιάσπαστη Καρδιά',
        ':red:'
    ],
    '❤️‍🔥': [
        'Καρδιά στη φωτιά',
        ':heart_on_fire:',
        ':red:'
    ],
    '❤️': [
        'Σας Αγαπώ',
        ':red_heart:',
        'Κόκκινη Καρδιά',
        'Καρδιά',
        'Καρδιά Αγάπης',
        'Κόκκινη Καρδιά',
        ':red:'
    ],
    '🧡': [
        'Πορτοκαλί Καρδιά',
        ':orange_heart:',
        'Σας Αγαπώ',
        ':orange:'
    ],
    '💛': [
        'Κίτρινη Καρδιά',
        ':yellow_heart:',
        '#1 BF Snapchat',
        'Καρδιά Χρυσού',
        'Σας Αγαπώ',
        ':yellow:'
    ],
    '💚': [
        'Πράσινη Καρδιά',
        ':green_heart:',
        'Ζωντανή Καρδιά',
        'Σας Αγαπώ',
        ':green:'
    ],
    '💙': [
        'Μπλε Καρδιά',
        ':blue_heart:',
        'Σας Αγαπώ',
        ':blue:'
    ],
    '💜': [
        'Μωβ Καρδιά',
        ':purple_heart:',
        'Σας Αγαπώ',
        ':purple:'
    ],
    '🖤': [
        'Μαύρη Καρδιά',
        ':black_heart:',
        'Σκούρα Καρδιά',
        'Σας Αγαπώ',
        ':black:'
    ],
    '🤍': [
        'Λευκή Καρδιά',
        ':white_heart:',
        'Σας Αγαπώ',
        ':white:'
    ],
    '🤎': [
        'Καφέ Καρδιά',
        ':brown_heart:',
        'Σας Αγαπώ',
        ':brown:'
    ],
    //"🩷": ["Pink Heart", ":pink_heart:", "I Love You", ":pink:"],
    //"🩵": ["Light Blue Heart", ":lightblue_heart:", "I Love You", ":blue:"],
    //"🩶": ["Grey Heart","Gray Heart", ":grey_heart:",":gray_heart:", "I Love You", ":gray:", ":grey:"],
    '💯': [
        'Βαθμοί Εκατοντάδες',
        ':hundred_points:',
        '100',
        '%',
        'Κρατήστε Το 100',
        'Τέλεια Βαθμολογία',
        'Σύμβολο Εκατό Σημείων'
    ],
    '💬': [
        'Μπαλόνι Ομιλίας',
        ':speech_balloon:',
        'Φούσκα Συνομιλίας',
        'Φούσκα Ομιλίας',
        ':white:'
    ],
    '💭': [
        'Μπαλόνι Σκέψης',
        ':thought_balloon:',
        'Σκέψης Φούσκα',
        'Φούσκα Σκέψης',
        ':white:'
    ],
    '💤': [
        'Zzz',
        ':zzz:',
        'Υπνοώρα',
        'Βόραγο',
        'Αναστολή',
        'Υπογραφή Ύπνου',
        'Σύμβολο Ύπνου'
    ],
    '♠': [
        'Κοστούμι Μπαστούνι',
        ':spade_suit:',
        'Spades',
        'Black Spade Suit'
    ],
    '♥': [
        'Φυλή Καρδιάς',
        ':heart_suit:',
        'Κάρτα Με Καρδιά',
        'Καρδιές',
        'Μαύρη Καρδιά Κοστούμι'
    ],
    '♦': [
        'Διαμάντι Κοστούμι',
        ':diamond_suit:',
        'Διαμάντια',
        'Μαύρο Διαμάντι Κοστούμι'
    ],
    '♣': [
        'Κοστούμι Club',
        ':club_suit:',
        'Κλαμπ',
        'Μαύρο Κοστούμι Club'
    ],
    '🏧': [
        'Σημάδι ATM',
        ':atm_sign:',
        'ATM',
        'Αυτοματοποιημένη Μηχανή Τηλεειδοποίησης',
        ':blue:'
    ],
    '🎧': [
        'Ακουστικά',
        ':headphone:',
        'Ακουστικά',
        'iPod',
        'Ακουστικά'
    ],
    '🎵': [
        'Μουσική Σημείωση',
        ':musical_note:',
        'Beamed Ζευγάρι Της Όγδοης Σημειώσεις',
        'Δοκίμιο Ζευγάρι Quavers',
        'Μουσική Σημείωση'
    ],
    '🎶': [
        'Μουσικές Σημειώσεις',
        ':musical_notes:',
        'Μουσική',
        'Μουσικές Σημειώσεις',
        'Τραγούδι',
        'Πολλαπλές Μουσικές Σημειώσεις'
    ],
    '🔔': [
        'Κουδούνι',
        ':bell:',
        'Κουδούνι Ελευθερίας',
        'Ringer',
        'Κουδούνι Γάμου',
        ':yellow:'
    ],
    '🔕': [
        'Κουδούνι με κάθετο',
        ':bell_with_slash:',
        'Ειδοποιήσεις',
        'Ειδοποίηση Ήχου Απενεργοποιημένη',
        'Σίγαση Κουδουνιού',
        'Κουδούνι με ακύρωση εγκεφαλικό επεισόδιο',
        ':yellow:'
    ],
    '🔈': [
        'Χαμηλή Ένταση Ηχείου',
        ':speaker_low_volum:',
        'Όγκος',
        'Ηχείο'
    ],
    '🔉': [
        'Μέσος Όγκος Ηχείου',
        ':speaker_medium_volume:',
        'Μείωση Έντασης',
        'Ηχείο Με Μεσαία Ένταση',
        'Ηχείο με ένα ηχητικό κύμα'
    ],
    '🔊': [
        'Υψηλή Ένταση Ηχείου',
        ':speaker_high_volume:',
        'Αύξηση Έντασης',
        'Ηχείο με τρία ηχητικά κύματα'
    ],
    '🔇': [
        'Ηχείο Σε Σίγαση',
        ':muted_speaker:',
        'Σίγαση Έντασης',
        'Ηχείο με ακύρωση Stroke'
    ],
    '📢': [
        'Loudspeaker',
        ':loudspeaker:',
        'Ανακοίνωση',
        'Σύστημα PA',
        'Δημόσια Διεύθυνση Ηχείου'
    ],
    '⛔': [
        'Καμία Καταχώρηση',
        ':no_entry:',
        ':red:'
    ],
    '🚫': [
        'Απαγορεύεται',
        ':prohibited:',
        'Αποκλεισμένος',
        'Κύκλος Πίσω Κάθετος',
        'Όχι',
        'Κόκκινος Κύκλος Διασχισμένος',
        'Περιορισμένη',
        'Δεν Υπάρχει Υπογραφή Εισόδου',
        ':red:'
    ],
    '🚳': [
        'Χωρίς Ποδήλατα',
        ':no_bicycles:',
        'Δεν Υπάρχει Υπογραφή Ποδημάτων',
        ':red:',
        ':black:'
    ],
    '🚭': [
        'Μη Κάπνισμα',
        ':no_smoking:',
        'Μη Σύμβολο Καπνίσματος',
        ':red:',
        ':black:'
    ],
    '🚯': [
        'Χωρίς Λίτρα',
        ':no_littering:',
        'Δεν Υπάρχει Σύμβολο Litter',
        ':red:',
        ':black:'
    ],
    '🚱': [
        'Μη Πόσιμο Νερό',
        ':non-potable_water:',
        ':non_potable_water:',
        'Χωρίς Νερό',
        'Χωρίς Πόσιμο Νερό',
        'Μη Πόσιμο Σύμβολο Νερού',
        ':red:',
        ':black:'
    ],
    '🚷': [
        'Χωρίς Πεζούς',
        ':no_pedestrians:',
        'Χωρίς Άτομα',
        'Χωρίς Περπάτημα',
        ':red:',
        ':black:'
    ],
    '🔞': [
        'No One Under Eighteen',
        ':no_one_under_18:',
        'Ακατάλληλος',
        'Κανένας Κάτω Από Δεκαοκτώ Σύμβολο',
        '18',
        ':red:',
        ':black:'
    ],
    '📵': [
        'Χωρίς Κινητά Τηλέφωνα',
        ':no_mobile_phones:',
        'Χωρίς Κινητά Τηλέφωνα',
        'Δεν Υπάρχουν Τηλέφωνα',
        'Χωρίς Smartphones',
        ':red:',
        ':black:'
    ],
    '☢️': [
        'Radioactive',
        ':radioactive:',
        'Σύμβολο Διεθνούς Ακτινοβολίας',
        'Πυρηνικός',
        'Ραδιενεργός Σημάδι',
        ':orange:'
    ],
    '☣️': [
        'Βιοκίνδυνος',
        ':biohazard:',
        'Σημάδι Βιοκινδύνου',
        ':orange:'
    ],
    '⬆️': [
        'Κουμπί Πάνω Βέλος',
        ':up_arrow_button:',
        'Βαθμολογία Βέλους Πάνω',
        'Πάνω Μαύρο Βέλος',
        ':blue:'
    ],
    '↗️': [
        'Κουμπί Πάνω Δεξιού Βέλους',
        ':up-right_arrow_button:',
        ':up_right_arrow_button:',
        'Διαγώνια Πάνω Δεξιά Βέλος',
        'Βέλος Βορειοανατολικά',
        ':blue:'
    ],
    '➡️': [
        'Κουμπί Δεξιού Βέλους',
        ':right_arrow_button:',
        'Βαθμολογία Βέλους Δεξιά',
        'Μαύρο Δεξιόστροφο Βέλος',
        ':blue:'
    ],
    '↘️': [
        'Κουμπί Κάτω Δεξιού Βέλους',
        ':down-right_arrow_button:',
        ':down_right_arrow_button:',
        'Διαγώνια Κάτω Δεξιά Βέλος',
        'Βέλος Νοτιοανατολικής Ανατολής',
        ':blue:'
    ],
    '⬇️': [
        'Κάτω Κουμπί Βέλους',
        ':down_arrow_button:',
        'Βαθμολογία Βέλους Κάτω',
        'Κάτω Μαύρο Βέλος',
        ':blue:'
    ],
    '↙️': [
        'Κουμπί Κάτω Αριστερού Βέλους',
        ':down-left_arrow_button:',
        ':down_left_arrow_button:',
        'Διαγώνια Κάτω Αριστερά Βέλος',
        'Βέλος Νοτιοδυτικού',
        ':blue:'
    ],
    '⬅️': [
        'Κουμπί Αριστερού Βέλους',
        ':left_arrow_button:',
        'Βαθμολογία Βέλους Αριστερά',
        'Αριστερό Μαύρο Βέλος',
        ':blue:'
    ],
    '↖️': [
        'Κουμπί Πάνω Αριστερού Βέλους',
        ':up-left_arrow_button:',
        ':up_left_arrow_button:',
        'Διαγώνια Πάνω Αριστερά Βέλος',
        'Βέλος Βόρειας Δύσης',
        ':blue:'
    ],
    '↕️': [
        'Κουμπί Πάνω Βέλος',
        ':up-down_arrow_button:',
        ':up_down_arrow_button:',
        'Κατακόρυφα Βέλη',
        'Πάνω Κάτω Βέλος',
        ':blue:'
    ],
    '↔️': [
        'Αριστερό-Δεξί Κουμπί Βέλος',
        ':left-right_arrow_button:',
        ':left_right_arrow_button:',
        'Οριζόντια Βέλη',
        'Πλευρικά Βέλη',
        'Αριστερό Δεξί Βέλος',
        ':blue:'
    ],
    '↩️': [
        'Δεξί Βέλος Καμπύλη Αριστερό Κουμπί',
        ':right_arrow_curving_left_button:',
        'Απάντηση Email',
        'Αριστερό Κυρτό Βέλος',
        'Αριστερό βέλος με γάντζο',
        ':blue:'
    ],
    '↪️': [
        'Αριστερό Βέλος Καμπύλη Δεξί Κουμπί',
        ':left_arrow_curving_right_button:',
        'Email Μπροστά',
        'Δεξί Κυρτό Βέλος',
        'Δεξιό βέλος με γάντζο',
        ':blue:'
    ],
    '⤴️': [
        'Κουμπί Πάνω Δεξιού Βέλος',
        ':right_arrow_curving_up_button:',
        'Βέλος Που Δένει Δεξιά Μετά Καμπύλη Πάνω',
        ':blue:'
    ],
    '⤵️': [
        'Κουμπί Καμπύλης Δεξιού Βέλους',
        ':right_arrow_curving_down_button:',
        'Κυρτό Κάτω Βέλος',
        'Βέλος Που Δένει Δεξιά Μετά Καμπύλη Προς Τα Κάτω',
        ':blue:'
    ],
    '🔃': [
        'Δεξιόστροφα Κατακόρυφα Βέλη Κουμπί',
        ':clockwise_vertical_button:',
        'Δεξιόστροφα προς τα κάτω και προς τα άνω βέλη ανοικτού κύκλου',
        ':blue:'
    ],
    '🔄': [
        'Κουμπί Αριστερόστροφα Βέλη',
        ':counterclockwise_button:',
        'Ανανέωση',
        'Περιστροφή',
        'Εναλλαγή',
        'Αριστερόστροφα Βέλη',
        'Αριστερόστροφα προς τα κάτω και προς τα πάνω ανοιχτά βέλη κύκλου',
        ':blue:'
    ],
    '🔙': [
        'Πίσω Βέλος',
        ':back_arrow:',
        'Πίσω',
        'Πίσω με το αριστερό βέλος πάνω από',
        ':black:'
    ],
    '🔚': [
        'Τέλος Βέλος',
        ':end_arrow:',
        'Τέλος',
        'Τέλος με αριστερό βέλος πάνω από',
        ':black:'
    ],
    '🔛': [
        'Ενεργό! Βέλος',
        ':on_arrow:',
        'Ενεργό',
        'Ενεργό με Εξαιρετικό σημάδι με το αριστερό δεξί βέλος πάνω από',
        ':black:'
    ],
    '🔜': [
        'Σύντομα Βέλος',
        ':soon_arrow:',
        'Σύντομα',
        'Σύντομα με δεξιό βέλος πάνω από',
        ':black:'
    ],
    '🔝': [
        'Πάνω Βέλος',
        ':top_arrow:',
        'Πάνω',
        'Πάνω με πάνω βέλος πάνω από',
        ':black:'
    ],
    '🛐': [
        'Τόπος λατρείας',
        ':place_of_worship:',
        'Θρησκευτικό Κτίριο',
        ':purple:'
    ],
    '⚛️': [
        'Σύμβολο Ατόμου',
        ':atom_symbol:',
        ':purple:'
    ],
    '🕉️': [
        'Σύμβολο OS',
        ':om_symbol:',
        'Εμ',
        'Aumkara',
        'Omkara',
        'Pranava',
        ':purple:'
    ],
    '✡️': [
        'Αστέρι του David',
        ':star_of_david:',
        'Magen David',
        ':purple:'
    ],
    '☸️': [
        'Τροχός του Dharma',
        ':wheel_of_dharma:',
        'Χελμ',
        ':purple:'
    ],
    '☯️': [
        'Yin Yang',
        ':yin_yang:',
        ':purple:'
    ],
    '✝️': [
        'Λατινικός Σταυρός',
        ':latin_cross:',
        'Χριστιανικός Σταυρός',
        ':purple:'
    ],
    '☦️': [
        'Ορθόδοξος Σταυρός',
        ':orthodox_cross:',
        ':purple:'
    ],
    '☪️': [
        'Αστέρι και ημισέληνος',
        ':star_and_crescent:',
        ':purple:'
    ],
    '☮️': [
        'Σύμβολο Ειρήνης',
        ':peace:',
        'Σημάδι Ειρήνης',
        ':purple:'
    ],
    '🕎': [
        'Menorah',
        ':menorah:',
        'Candelabrum',
        'Κεριά',
        'Chanukiah',
        'Menorah',
        'Menorah με εννέα υποκαταστήματα',
        ':purple:'
    ],
    '🔯': [
        'Διάστικτο Αστέρι Με Έξι Σημεία',
        ':dotted_six-pointed_star:',
        ':dotted_six_pointed_star:',
        'Έξι Σημεία Αστέρι με Middle Dot',
        ':purple:'
    ],
    //"🪯": ["Khanda", ":khanda:", "Sikhism", ":purple:"],
    '♈': [
        'Κριός',
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
        'Καρκίνος',
        ':cancer:',
        ':zodiac:',
        'Zodiac',
        ':purple:'
    ],
    '♌': [
        'Λέων',
        ':leo:',
        ':zodiac:',
        'Zodiac',
        ':purple:'
    ],
    '♍': [
        'Παρθένος',
        ':virgo:',
        ':zodiac:',
        'Zodiac',
        ':purple:'
    ],
    '♎': [
        'Ζυγός',
        ':libra:',
        ':zodiac:',
        'Zodiac',
        ':purple:'
    ],
    '♏': [
        'Σκορπιός',
        ':scorpio:',
        ':zodiac:',
        'Σκορπιός',
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
        'Αιγόκερως',
        ':capricorn:',
        ':zodiac:',
        'Zodiac',
        ':purple:'
    ],
    '♒': [
        'Υδροχόος',
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
        'Παράκαμψη Μπροστά Σύμβολο',
        'Μαύρο δεξιόστροφο διπλό τρίγωνο με κάθετη μπάρα',
        ':skip_forward_button:',
        'Πλήκτρο Επόμενου Κομματιού',
        ':blue:'
    ],
    '⏮️': [
        'Παράκαμψη Συμβόλου Πίσω',
        'Μαύρο αριστερό σημείο διπλό τρίγωνο με κάθετη μπάρα',
        ':skip_backward_button:',
        'Κουμπί Τελευταίου Κομματιού',
        'Προηγούμενο Κομμάτι',
        ':blue:'
    ],
    '⏯️': [
        'Κουμπί αναπαραγωγής ή παύσης',
        'Μαύρο δεξιόστροφο τρίγωνο με διπλό κατακόρυφο μπαρ',
        ':play_button:',
        ':pause_button:',
        ':play_or_pause_button:',
        'Σύμβολο Παιχνιδιού',
        'Σύμβολο Παύσης',
        ':blue:'
    ],
    '🔀': [
        'Κουμπί Τυχαίας Αναπαραγωγής Κομματιών',
        ':shuffle_tracks_button:',
        'Twisted Δεξιά Βέλη',
        ':blue:'
    ],
    '🔁': [
        'Κουμπί Επανάληψης',
        ':repeat_button:',
        'Σύμβολο Βρόχου',
        'Retweet',
        'Δεξιόστροφα δεξιόστροφα και αριστερά βέλη ανοιχτού κύκλου',
        ':blue:'
    ],
    '🔂': [
        'Επανάληψη Μενού Κουμπιού',
        ':repeat_single_button:',
        'Κύκλος Βέλη Με Αριθμό 1',
        'Κύκλωμα Ένα Σύμβολο',
        'Επανάληψη Συμβόλου Ενιαίου Κομματιού',
        'Δεξιόστροφα Δεξιά και Αριστερά Ανοιχτά Βέλη Κύκλου με Κύκλο Μία Επικάλυψη',
        ':blue:'
    ],
    '▶️': [
        'Κουμπί Αναπαραγωγής',
        ':play_button:',
        'Δεξί Τρίγωνο',
        'Τρίγωνο Δεξιάς Σημείωσης',
        'Μαύρο Δεξιόστροφο Τρίγωνο',
        ':blue:'
    ],
    '◀️': [
        'Αντίστροφο Κουμπί',
        ':reverse_button:',
        'Αριστερό Τρίγωνο',
        'Αριστερό Σημείο Τρίγωνο',
        'Μαύρο Αριστερό Σημείο Τρίγωνο',
        ':blue:'
    ],
    '🔼': [
        'Κουμπί Πάνω',
        ':upwards_button:',
        'Πάνω Τρίγωνο',
        'Τριγωνικό Πάνω Σημείωμα',
        'Up-Pointing Μικρό Κόκκινο Τρίγωνο',
        ':blue:'
    ],
    '🔽': [
        'Κουμπί Προς Τα Κάτω',
        ':downwards_button:',
        'Κάτω Τρίγωνο',
        'Τρίγωνο Κάτω Σημείων',
        'Κάτω Από Το Μικρό Κόκκινο Τρίγωνο',
        ':blue:'
    ],
    '⏩': [
        'Κουμπί Γρήγορης Προώθησης',
        ':fast-forward_button:',
        ':fast_forward_button:',
        'Γρήγορη Μπροστά',
        'Σύμβολο Γρήγορης Προώθησης',
        'Μαύρο Δεξιόστροφο Διπλό Τρίγωνο',
        ':blue:'
    ],
    '⏪': [
        'Fast Reverse Button',
        ':fast_reverse_button:',
        'Rewind',
        'Επαναφορά Συμβόλου',
        'Μαύρο Αριστερό Σημείο Διπλό Τρίγωνο',
        ':blue:'
    ],
    '⏫': [
        'Γρήγορο Κουμπί',
        ':fast_up_button:',
        'Διπλό Τρίγωνο Up-Pointing',
        'Μαύρο Up-Pointing Διπλό Τρίγωνο',
        ':blue:'
    ],
    '⏬': [
        'Γρήγορο Κάτω Κουμπί',
        ':fast_down_button:',
        'Κάτω Από Το Διπλό Τρίγωνο',
        'Μαύρο Κάθετο Διπλό Τρίγωνο',
        ':blue:'
    ],
    '⏹️': [
        'Κουμπί Διακοπής',
        ':stop_button:',
        'Διακοπή',
        'Σύμβολο Διακοπής',
        'Μαύρο τετράγωνο για Stop',
        ':blue:'
    ],
    '⏏️': [
        'Κουμπί Εξαγωγής',
        ':eject_button:',
        'Eject Symbol',
        ':blue:'
    ],
    '🎦': [
        'Κινηματογράφος',
        ':cinema_button:',
        'Οθόνη Κινηματογράφου',
        'Ταινίες',
        'Ταινία',
        'Σύμβολο Κινηματογράφου',
        'Εγγραφή',
        ':blue:'
    ],
    '📶': [
        'Μπάρες Κεραίας',
        ':antenna_bars_button:',
        'Μπάρες Υποδοχής',
        'Ισχύς Σήματος',
        'Stairs',
        'Σύμβολο Δύναμης Σήματος',
        'Κεραία με Μπαρ',
        ':blue:'
    ],
    '✖️': [
        'Πολλαπλασιασμός',
        ':multiply:',
        'Φορές',
        'Σύμβολο Πολλαπλασιασμού',
        'Βαρύς Πολλαπλασιασμός X',
        ':black:'
    ],
    '➕': [
        'Συν',
        ':plus:',
        'Συν Σύμβολο',
        'Σημάδι Heavy Plus',
        ':black:'
    ],
    '➖': [
        'Minus',
        ':minus:',
        'Minus Symbol',
        'Σημάδι Βαρέων Μικρών',
        ':black:'
    ],
    '➗': [
        'Διαίρεση',
        ':divide:',
        'Σύμβολο Διαίρεσης',
        'Σημάδι Βαρέως Διαίρεσης',
        ':black:'
    ],
    '🟰': [
        'Σημάδι Βαρύ Ίσο',
        ':heavy_equals_sign:',
        'Ίσο',
        'Αποτέλεσμα',
        ':black:'
    ],
    '♾️': [
        'Άπειρο',
        ':infinity:',
        'Έγγραφο Μόνιμου Χαρτιού'
    ],
    '‼️': [
        'Διπλό Σήμα Φωνής',
        ':double_exclamation_mark:',
        'Κόκκινο Διπλό Επισήμανση',
        ':red:'
    ],
    '⁉️': [
        'Αναγνωριστικό Ερωτηματολογίου',
        ':exclamation_question_mark:',
        'Κόκκινο σημάδι θαυμασμού και ερωτηματικό',
        ':red:'
    ],
    '❓': [
        'Σήμανση Ερώτησης',
        ':question_mark:',
        'Κόκκινο Επισήμανση Ερωτήσεων',
        'Μαύρο Ερωτηματικό Σήμα Στολίδι',
        ':red:'
    ],
    '❔': [
        'Λευκή Ερώτηση Σημείωση',
        ':white_question_mark:',
        ':question_mark:',
        'Λευκή Ερώτηση Σημείωση',
        'Λευκό Ερωτηματικό Σήμα Στολίδι',
        ':white:'
    ],
    '❗': [
        'Αναγνωριστικό Σημείωση',
        ':exclamation_mark:',
        'Κόκκινο Αναγνωριστικό',
        'Σύμβολο Σημαδιού Βαρέως Εκφρασης',
        ':red:'
    ],
    '❕': [
        'Λευκό Επισήμανση Αναγνωριστικού',
        ':white_exclamation_mark:',
        ':exclamation_mark:',
        'Λευκό Διακήρυξη Μαρκ Στολίδι',
        ':white:'
    ],
    '⭕': [
        'Κοίλος Κόκκινος Κύκλος',
        ':hollow_red_circle:',
        'Κύκλος',
        'Σωστό',
        'Κόκκινος Κύκλος',
        'Σήμα Κύκλου',
        'Βαρύς Μεγάλος Κύκλος',
        ':red:'
    ],
    '☑️': [
        'Ελέγξτε το πλαίσιο με έλεγχο',
        ':check_box_with_check:',
        'V',
        'Πλαίσιο',
        'Επιλέξτε Σημείωση Στο Πλαίσιο',
        'Κιβώτιο με έλεγχο'
    ],
    '✔️': [
        'Ελέγξτε Σημείωση',
        ':check_mark:',
        'V',
        'Έλεγχος',
        'Τικ',
        'Checkmark',
        'Βαρύ Σήμα Ελέγχου',
        ':black:'
    ],
    '❌': [
        'Σταυρωτό Μαρκάρισμα',
        ':cross_mark:',
        'Σταυρός',
        'X',
        ':red:'
    ],
    '✅': [
        'Κουμπί Επιλογής',
        ':check_mark_button:',
        'V',
        'Σημείωση Πράσινου Ελέγχου',
        'Πράσινο Τικ',
        'Ελέγξτε Σημείωση',
        'Λευκό Βαρύ Σημάδι Ελέγχου',
        ':green:'
    ],
    '❎': [
        'Κουμπί Σταυρού Σημείου',
        ':cross_mark_button:',
        'Σταυρός',
        'X',
        'Σημείωση X',
        'Αρνητικό Τετράγωνο Σταυρό Σημάδι',
        ':green:'
    ],
    '#️⃣': [
        'Σημάδι Αριθμού Keycap',
        ':hash_key:',
        '#',
        'Κλειδί Hash',
        'Ταμπλό',
        'Οκτώβριος',
        'Κλειδί Λίρας',
        'Υπογραφή Αριθμού',
        ':blue:'
    ],
    '*️⃣': [
        'Keycap Asterisk',
        ':asterisk:',
        'Αστέρι Keycap',
        ':blue:'
    ],
    '0️⃣': [
        'Αριθμός 0',
        ':number_0:',
        'Keycap Digit Zero'
    ],
    '1️⃣': [
        'Αριθμός 1',
        ':number_1:',
        'Keycap Digit One'
    ],
    '2️⃣': [
        'Αριθμός 2',
        ':number_2:',
        'Πληκτρολόγιο Ψηφίο Δύο'
    ],
    '3️⃣': [
        'Αριθμός 3',
        ':number_3:',
        'Πλήκτρο Ψηφίου Τρία'
    ],
    '4️⃣': [
        'Αριθμός 4',
        ':number_4:',
        'Keycap Digit Τέσσερα'
    ],
    '5️⃣': [
        'Αριθμός 5',
        ':number_5:',
        'Keycap Digit Πέντε'
    ],
    '6️⃣': [
        'Αριθμός 6',
        ':number_6:',
        'Keycap Digit Έξι'
    ],
    '7️⃣': [
        'Αριθμός 7',
        ':number_7:',
        'Keycap Digit Seven'
    ],
    '8️⃣': [
        'Αριθμός 8',
        ':number_8:',
        'Keycap Digit Οκτώ'
    ],
    '9️⃣': [
        'Αριθμός 9',
        ':number_9:',
        'Keycap Digit Εννέα'
    ],
    '🔟': [
        'Αριθμός 10',
        ':number_10:',
        'Keycap: 10',
        '10',
        'Keycap Digit Δέκα'
    ],
    '🔠': [
        'Input Latin Uppercase',
        ':input_latin_uppercase:',
        'ABCD',
        'Κεφαλαία',
        'Σύμβολο εισαγωγής για κεφαλαία γράμματα',
        'Σύμβολο εισόδου για γράμματα λατινικής πρωτεύουσας',
        ':blue:'
    ],
    '🔡': [
        'Input Latin Lowercase',
        ':input_latin_lowercase:',
        'αβγδ',
        'Πεζά',
        'Σύμβολο εισόδου για πεζά γράμματα',
        'Σύμβολο εισόδου για τα λατινικά μικρά γράμματα',
        ':blue:'
    ],
    '🔢': [
        'Input Numbers',
        ':input_numbers:',
        '1234',
        'Αριθμοί',
        'Numeric Input',
        'Σύμβολο εισόδου για αριθμούς',
        ':blue:'
    ],
    '🔣': [
        'Σύμβολο εισόδου για σύμβολα',
        ':input_symbols:',
        'Σύμβολα',
        'Είσοδος Συμβόλου',
        ':blue:'
    ],
    '🔤': [
        'Input Latin Letters',
        ':input_latin_letters:',
        'αβγ',
        'Αλφάβητο',
        'Γράμματα',
        'Σύμβολο εισόδου για γράμματα',
        'Σύμβολο εισόδου για τα λατινικά γράμματα',
        ':blue:'
    ],
    '🅰️': [
        'Ένα Κουμπί (Τύπος Blood)',
        ':a_blood:',
        'Τύπος Αίματος Α',
        'Γράμμα A',
        'Αρνητική Τετραγωνισμένη Λατινική Πρωτεύουσα Γράμμα A',
        ':red:'
    ],
    '🆎': [
        'Κουμπί AB (τύπος πλημμύρας)',
        ':ab_blood:',
        'Γράμματα AB',
        'Τύπος Αίματος AB',
        'Αρνητική Τετραγωνική ΑΒ',
        ':red:'
    ],
    '🅱️': [
        'Κουμπί B (Τύπος Blood)',
        ':b_blood:',
        'Γράμμα B',
        'Τύπος Αίματος Β',
        'Αρνητική Τετραγωνισμένη Λατινική Πρωτεύουσα Γράμμα B',
        ':red:'
    ],
    '🆑': [
        'Κουμπί CL',
        ':cl_button:',
        'Εκκαθάριση',
        'Πλήκτρο Καθαρισμού',
        'Σημάδι CL',
        'Τετράγωνο CL',
        'Γράμματα CL',
        ':red:'
    ],
    '🆒': [
        'Κουμπί Ψυχρό',
        ':cool_button:',
        'Ψυχρό Τετράγωνο',
        'Πινακίδα Ψυχρής',
        'Τετράγωνο Δροσερό',
        ':blue:'
    ],
    '🆓': [
        'Πλήκτρο Ελεύθερο',
        ':free_button:',
        'Δωρεάν',
        'Δωρεάν Υπογραφή',
        'Τετράγωνο Ελεύθερο',
        ':blue:'
    ],
    'ℹ️': [
        'Πληροφορίες',
        ':info_button:',
        'Πληροφορίες',
        'Πεζά Ι',
        'Τουριστικές Πληροφορίες',
        'Πηγή Πληροφοριών',
        ':blue:'
    ],
    '🆔': [
        'Κουμπί ID',
        ':id_button:',
        'ID',
        'Ταυτοποίηση',
        'Σημάδι Αναγνώρισης',
        'Τετράγωνο Id',
        ':purple:'
    ],
    '🆕': [
        'Νέο Κουμπί',
        ':new_button:',
        'Νέο',
        'Νέα Πινακίδα',
        'Τετράγωνο Νέο',
        ':blue:'
    ],
    '🅾️': [
        'Κουμπί O (Τύπος Blood)',
        ':0_blood:',
        'Τύπος Αίματος O',
        '0',
        'Αρνητική Τετραγωνισμένη Λατινική Πρωτεύουσα Επιστολή',
        'Γράμμα O',
        ':red:'
    ],
    '🆗': [
        'Πλήκτρο OK',
        ':ok_button:',
        'Εντάξει',
        'Εντάξει',
        'Τετράγωνο',
        'Σημάδι OK',
        'Τετράγωνο Εντάξει',
        ':blue:'
    ],
    '🅿️': [
        'Κουμπί P',
        ':p_button:',
        ':parking_sign:',
        'Σημάδι Στάθμευσης',
        'Αρνητική Τετραγωνισμένη Λατινική Πρωτεύουσα Επιστολή',
        'Γράμμα P',
        ':blue:'
    ],
    '🆘': [
        'Κουμπί SOS',
        ':sos_button:',
        'Σήμα Επίδρασης',
        'Έκτακτη ανάγκη',
        'SOS',
        'Σημάδι SOS',
        'Τετράγωνο SOS',
        'Βοήθεια',
        ':red:'
    ],
    '🆙': [
        'Κουμπί Πάνω!',
        ':up_button:',
        'Ανανέωση Επιπέδου',
        'Επάνω',
        'Επάνω Εγγραφή',
        'Τετράγωνο επάνω με ένδειξη θαυμασμού',
        ':blue:'
    ],
    '🆚': [
        'Κουμπί VS',
        ':vs_button:',
        'Τετράγωνο Vs',
        ':orange:'
    ],
    '🆖': [
        'Πλήκτρο NG',
        ':ng_button:',
        'Τετράγωνο NG',
        'Καμία Καλή Σημάδια',
        'Όχι Καλό',
        ':ng:',
        'Blooper',
        ':blue:'
    ],
    '🔴': [
        'Κόκκινος Κύκλος',
        ':red_circle:',
        'Μεγάλος Κόκκινος Κύκλος',
        ':red:'
    ],
    '🟠': [
        'Πορτοκαλί Κύκλος',
        ':orange_circle:',
        'Μεγάλος Πορτοκαλί Κύκλος',
        ':orange:'
    ],
    '🟡': [
        'Κίτρινος Κύκλος',
        ':yellow_circle:',
        'Μεγάλος Κίτρινος Κύκλος',
        ':yellow:'
    ],
    '🟢': [
        'Πράσινος Κύκλος',
        ':green_circle:',
        'Μεγάλος Πράσινος Κύκλος',
        ':green:'
    ],
    '🔵': [
        'Μπλε Κύκλος',
        ':blue_circle:',
        'Μεγάλος Μπλε Κύκλος',
        ':blue:'
    ],
    '🟣': [
        'Μωβ Κύκλος',
        ':purple_circle:',
        'Μεγάλος Μοβ Κύκλος',
        ':purple:'
    ],
    '🟤': [
        'Καφέ Κύκλος',
        ':brown_circle:',
        'Μεγάλος Καφέ Κύκλος',
        ':brown:'
    ],
    '⚫': [
        'Μαύρος Κύκλος',
        ':black_circle:',
        'Μεσαίος Μαύρος Κύκλος',
        ':black:'
    ],
    '⚪': [
        'Λευκός Κύκλος',
        ':white_circle:',
        'Μεσαίος Λευκός Κύκλος',
        ':white:'
    ],
    '🟥': [
        'Κόκκινη Τετράγωνη',
        ':red_square:',
        'Μεγάλη Κόκκινη Πλατεία',
        ':red:'
    ],
    '🟧': [
        'Πορτοκαλί Τετράγωνο',
        ':orange_square:',
        'Μεγάλο Πορτοκαλί Τετράγωνο',
        ':orange:'
    ],
    '🟨': [
        'Κίτρινο Τετράγωνο',
        ':yellow_square:',
        'Μεγάλο Κίτρινο Τετράγωνο',
        ':yellow:'
    ],
    '🟩': [
        'Πράσινο Τετράγωνο',
        ':green_square:',
        'Μεγάλο Πράσινο Τετράγωνο',
        ':green:'
    ],
    '🟦': [
        'Μπλε Τετράγωνο',
        ':blue_square:',
        'Μεγάλο Μπλε Τετράγωνο',
        ':blue:'
    ],
    '🟪': [
        'Μωβ Τετράγωνο',
        ':purple_square:',
        'Μεγάλο Μωβ Τετράγωνο',
        ':purple:'
    ],
    '🟫': [
        'Καφέ Τετράγωνο',
        ':brown_square:',
        'Μεγάλο Καφέ Τετράγωνο',
        ':brown:'
    ],
    '⬛': [
        'Μαύρο Μεγάλο Τετράγωνο',
        ':black_large_square:',
        ':black:'
    ],
    '⬜': [
        'Λευκό Μεγάλο Τετράγωνο',
        ':white_large_square:',
        ':white:'
    ],
    '◼️': [
        'Μαύρο Μεσαίο Τετράγωνο',
        ':black_medium_square:',
        ':black:'
    ],
    '◻️': [
        'Λευκό Μεσαίο Τετράγωνο',
        ':white_medium_square:',
        ':white:'
    ],
    '◾': [
        'Μαύρο Μεσαίο Μικρό Τετράγωνο',
        ':black_medium_small_square:',
        ':black:'
    ],
    '◽': [
        'Λευκό Μεσαίο Μικρό Τετράγωνο',
        ':white_medium_small_square:',
        ':white:'
    ],
    '▪️': [
        'Μαύρο Μικρό Τετράγωνο',
        ':black_small_square:',
        ':black:'
    ],
    '▫️': [
        'Λευκό Μικρό Τετράγωνο',
        ':white_small_square:',
        ':white:'
    ],
    '💠': [
        'Διαμαντένιο σχήμα με ένα τελείωμα μέσα',
        ':diamond_shape_with_dot:',
        'Χωρητικότητα',
        'Διαμάντι Λουλούδι',
        'Χαβάη'
    ],
    '🔶': [
        'Μεγάλο Πορτοκαλί Διαμάντι',
        ':large_orange_diamond:',
        ':orange:'
    ],
    '🔷': [
        'Μεγάλο Μπλε Διαμάντι',
        ':large_blue_diamond:',
        ':blue:'
    ],
    '🔸': [
        'Μικρό Πορτοκαλί Διαμάντι',
        ':small_orange_diamond:',
        ':orange:'
    ],
    '🔹': [
        'Μικρό Μπλε Διαμάντι',
        ':small_blue_diamond:',
        ':blue:'
    ],
    '🔺': [
        'Κόκκινο Τρίγωνο Επισήμανση Πάνω',
        ':red_triangle_pointed_up:',
        'Κόκκινο Τρίγωνο Up-Pointing',
        ':red:'
    ],
    '🔻': [
        'Κόκκινο Τρίγωνο Επισήμανση Κάτω',
        ':red_triangle_pointed_down:',
        'Κόκκινο Τρίγωνο Κατεύθυνσης',
        ':red:'
    ],
    '🔳': [
        'Κουμπί Λευκού Τετράγωνου',
        ':white_square_button:',
        ':white:',
        ':black:'
    ],
    '🔲': [
        'Μαύρο Τετραγωνικό Κουμπί',
        ':black_square_button:',
        ':white:',
        ':black:'
    ],
    '©️': [
        'Πνευματικά δικαιώματα',
        ':copyright:',
        ':c:',
        'Σημάδι Πνευματικών Δικαιωμάτων'
    ],
    '®️': [
        'Εγγεγραμμένος',
        ':registered:',
        ':r:',
        'Εγγεγραμμένη Πινακίδα'
    ],
    '™️': [
        'Εμπορικό Σήμα',
        ':trade_mark:',
        ':tm:',
        'Εμπορικό Σήμα',
        'Σημάδι Εμπορικού Σημείου'
    ],
    '🛅': [
        'Αριστερές Αποσκευές',
        ':left_luggage:',
        'Τσάντα Με Κλειδί',
        'Κλειδωμένη Βαλίτσα',
        ':blue:'
    ],
    '🛄': [
        'Διεκδίκηση Αποσκευών',
        ':baggage_claim:',
        ':blue:'
    ],
    '🛃': [
        'Τελωνεία',
        ':customs:',
        ':blue:'
    ],
    '🛂': [
        'Έλεγχος Διαβατηρίου',
        ':passport_control:',
        'Έλεγχος Περιγράμματος',
        ':blue:'
    ],
    //"🛜": ["Wireless", ":wireless:", ":wifi:", ":wi_fi:", "Wifi", "wi-fi", "wireless connection", ":blue:"],
    '🚰': [
        'Σύμβολο Πόσιμου Νερού',
        ':potable_water_symbol:',
        'Δίψα',
        'Δίψα',
        'Βρύση Νερού',
        'Στρόφιγγα Νερού'
    ],
    '🇦': [
        'Γράμμα A',
        ':letter_a:',
        ':a:',
        'Περιφερειακός Δείκτης Σύμβολο Γράμμα Α'
    ],
    '🇧': [
        'Γράμμα B',
        ':letter_b:',
        ':b:',
        'Περιφερειακός Δείκτης Σύμβολο Γράμμα Β'
    ],
    '🇨': [
        'Γράμμα Γ',
        ':letter_c:',
        ':c:',
        'Περιφερειακός Δείκτης Σύμβολο Γράμμα Γ'
    ],
    '🇩': [
        'Γράμμα D',
        ':letter_d:',
        ':d:',
        'Περιφερειακός Δείκτης Σύμβολο Γράμμα Δ'
    ],
    '🇪': [
        'Γράμμα E',
        ':letter_e:',
        ':e:',
        'Περιφερειακός Δείκτης Σύμβολο Γράμμα E'
    ],
    '🇫': [
        'Γράμμα F',
        ':letter_f:',
        ':f:',
        'Περιφερειακός Δείκτης Σύμβολο Γράμμα F'
    ],
    '🇬': [
        'Γράμμα G',
        ':letter_g:',
        ':g:',
        'Περιφερειακός Δείκτης Σύμβολο Γράμμα G'
    ],
    '🇭': [
        'Γράμμα H',
        ':letter_h:',
        ':h:',
        'Περιφερειακός Δείκτης Σύμβολο Γράμμα H'
    ],
    '🇮': [
        'Γράμμα I',
        ':letter_i:',
        ':i:',
        'Περιφερειακός Δείκτης Σύμβολο Γράμμα I'
    ],
    '🇯': [
        'Γράμμα J',
        ':letter_j:',
        ':j:',
        'Περιφερειακός Δείκτης Σύμβολο Γράμμα J'
    ],
    '🇰': [
        'Γράμμα Κ',
        ':letter_k:',
        ':k:',
        'Περιφερειακός Δείκτης Σύμβολο Γράμμα K'
    ],
    '🇱': [
        'Γράμμα L',
        ':letter_l:',
        ':l:',
        'Περιφερειακός Δείκτης Σύμβολο Γράμμα L'
    ],
    '🇲': [
        'Γράμμα M',
        ':letter_m:',
        ':m:',
        'Περιφερειακός Δείκτης Σύμβολο Γράμμα M'
    ],
    '🇳': [
        'Γράμμα N',
        ':letter_n:',
        ':n:',
        'Περιφερειακός Δείκτης Σύμβολο Γράμμα N'
    ],
    '🇴': [
        'Γράμμα O',
        ':letter_o:',
        ':o:',
        'Περιφερειακός Δείκτης Σύμβολο Γράμμα O'
    ],
    '🇵': [
        'Γράμμα P',
        ':letter_p:',
        ':p:',
        'Περιφερειακός Δείκτης Σύμβολο Γράμμα P'
    ],
    '🇶': [
        'Γράμμα Q',
        ':letter_q:',
        ':q:',
        'Περιφερειακός Δείκτης Σύμβολο Γράμμα Q'
    ],
    '🇷': [
        'Γράμμα R',
        ':letter_r:',
        ':r:',
        'Περιφερειακός Δείκτης Σύμβολο Γράμμα R'
    ],
    '🇸': [
        'Γράμμα S',
        ':letter_s:',
        ':s:',
        'Περιφερειακός Δείκτης Σύμβολο Γράμμα S'
    ],
    '🇹': [
        'Γράμμα T',
        ':letter_t:',
        ':t:',
        'Περιφερειακός Δείκτης Σύμβολο Γράμμα T'
    ],
    '🇺': [
        'Γράμμα U',
        ':letter_u:',
        ':u:',
        'Περιφερειακός Δείκτης Σύμβολο Γράμμα U'
    ],
    '🇻': [
        'Γράμμα V',
        ':letter_v:',
        ':v:',
        'Περιφερειακός Δείκτης Σύμβολο Γράμμα V'
    ],
    '🇼': [
        'Γράμμα W',
        ':letter_w:',
        ':w:',
        'Περιφερειακός Δείκτης Σύμβολο Γράμμα W'
    ],
    '🇽': [
        'Γράμμα X',
        ':letter_x:',
        ':x:',
        'Περιφερειακός Δείκτης Σύμβολο Γράμμα X'
    ],
    '🇾': [
        'Γράμμα Y',
        ':letter_y:',
        ':y:',
        'Περιφερειακός Δείκτης Σύμβολο Γράμμα Y'
    ],
    '🇿': [
        'Γράμμα Z',
        ':letter_z:',
        ':z:',
        'Περιφερειακός Δείκτης Σύμβολο Γράμμα Z'
    ],
    '💌': [
        'Γράμμα Αγάπης',
        ':love_letter:',
        'Φάκελος Καρδιά',
        'Σημείωση Αγάπης'
    ],
    '🚮': [
        'Βάλτε Litter στο σύμβολο θέση του',
        ':put_litter_in_bing_sign:',
        'Πεταλούδα στο δοχείο',
        'Βάλτε Τον Κάδο Απορριμμάτων',
        'Άτομο Με Κάδο Απορριμμάτων'
    ],
    '♿': [
        'Σύμβολο Αναπηρικής Καρέκλας',
        ':wheelchair_symbol:',
        'Προσβάσιμο Μπάνιο'
    ],
    '🚹': [
        'Σύμβολο Ανδρών',
        ':mens_symbol:',
        'Σύμβολο Ανδρών',
        'Ανδρική Τουαλέτα',
        'Ανδρική Μετεωρολογία',
        'Αρσενικό WC',
        ':blue:'
    ],
    '🚺': [
        'Σύμβολο Γυναικών',
        ':womens_symbol:',
        'Σύμβολο Γυναικών',
        'Γυναικεία Τουαλέτα',
        'Γυναικεία Restroom',
        'Famale WC',
        ':purple:',
        ':pink:'
    ],
    '🚻': [
        'Restroom',
        ':restroom:',
        'Εγγραφή Μπάνιου',
        'Σημάδι Τουαλέτα',
        'Σημάδι WC',
        ':blue:'
    ],
    '🚼': [
        'Σύμβολο Μωρού',
        ':baby_symbol:',
        'Μωρό Αλλαγή Σταθμός',
        'Σύμβολο Αλλαγής Μωρού',
        'Φυτώριο',
        ':orange:'
    ],
    '🚾': [
        'Ντουλάπα Νερού',
        ':wc:',
        'WC',
        'WC Τουαλέτα',
        ':blue:'
    ],
    '⚠️': [
        'Προειδοποιητική Σημείωση',
        ':warning_sign:',
        'Σύμβολο Ειδοποίησης',
        ':yellow:'
    ],
    '🚸': [
        'Παιδιά Διασχίζοντας',
        ':children_crossing:',
        'Διέλευση Παιδιών',
        'Σχολική Διασταύρωση',
        ':yellow:'
    ],
    '🔅': [
        'Σύμβολο Χαμηλής Φωτεινότητας',
        ':low_brightness_symbol:',
        'Πλήκτρο Dim',
        'Μείωση Φωτεινότητας'
    ],
    '🔆': [
        'Σύμβολο Υψηλής Φωτεινότητας',
        ':high_brightness_symbol:',
        'Αύξηση Φωτεινότητας',
        'Φωτεινό Κουμπί'
    ],
    '📳': [
        'Λειτουργία Δόνησης',
        ':vibration_mode:',
        'Καρδιά Τηλεφώνου',
        'Λειτουργία Αθόρυβου',
        ':orange:'
    ],
    '📴': [
        'Κινητό Τηλέφωνο Ανενεργό',
        ':mobile_phone_off:',
        ':orange:'
    ],
    '〰️': [
        'Κύμα',
        'Κυματιστή Παύλα',
        ':wave:'
    ],
    '💱': [
        'Ανταλλαγή Συναλλάγματος',
        ':currency_exchange:'
    ],
    '💲': [
        'Βαρύ Δολλάριο',
        ':dollar_symbol:',
        'Δολάριο',
        'Σύμβολο Δολαρίου'
    ],
    '♻️': [
        'Μαύρο Καθολική Ανακύκλωση Σύμβολο',
        ':recycling_symbol:',
        'Σύμβολο Ανακύκλωσης',
        'Λογότυπο Ανακύκλωσης',
        ':green:'
    ],
    '🔱': [
        'Εμβλήμα Της Παρέμβασης',
        ':trident_emblem:',
        'Pitchfork',
        'Trident'
    ],
    '📛': [
        'Σήμα Ονόματος',
        ':name_badge:',
        'Tofu Στη Φωτιά',
        'Ετικέτα Ονόματος',
        'Ετικέτα Φωτιάς'
    ],
    '🔰': [
        'Ιαπωνικό σύμβολο για αρχάριους',
        ':japanese_symbol_beginner:',
        'Shoshinsha Mark',
        'Κίτρινη Πράσινη Ασπίδα',
        ':green:',
        ':yellow:'
    ],
    '➰': [
        'Σγουρό Κύκλωμα',
        ':curly_loop:',
        'Κύκλωμα Curling',
        'Επανάληψη'
    ],
    '➿': [
        'Διπλό Σγουρό Βρόχο',
        ':double_curly_loop:',
        'Διπλό Κύκλωμα Curling',
        'Τηλεφωνητής'
    ],
    '〽️': [
        'Σημείωση Εναλλακτικού Μέρους',
        ':part_alternation_mark:',
        'Μ',
        'McDonalds'
    ],
    '✳️': [
        'Οκτώ Spoked Asterisk',
        ':eight_spoked_asterisk:',
        ':green:'
    ],
    '✴️': [
        'Οκτώ Επισημασμένο Μαύρο Αστέρι',
        ':eight_pointed_star:',
        'Πορτοκαλί Αστέρι',
        'Οκτώ Σημεία Αστέρι',
        ':orange:'
    ],
    '❇️': [
        'Σπινθήρας',
        ':sparkle:',
        ':green:'
    ],
    'Ⓜ️': [
        'Κύκλωμα M',
        'Κύκλωμα Λατινικής Πρωτεύουσας Γράμμα M',
        ':circled_m:',
        'Μετρό',
        ':blue:'
    ],
    '🈁': [
        'Ιαπωνικά Σημείωση Λέξης Εδώ',
        'Squared Katakana Koko',
        ':japanese_here:',
        'Εδώ',
        'Προορισμός',
        ':blue:'
    ],
    '🈂️': [
        'Ιαπωνική Υπηρεσία Σημασίας ή Υπηρεσία Χρέωσης',
        'Squared Katakana Sa',
        ':japanese_service:',
        ':blue:'
    ],
    '🈷️': [
        'Ιαπωνική Σημασία Μηνιαίο Ποσό',
        'Τετράγωνη Ενοποιημένη Ιδεογραφία-6708 Cjk',
        ':japanese_monthly_amouny:',
        'Ριζοσπαστικό 74',
        '月',
        ':orange:'
    ],
    '🈶': [
        'Ιαπωνικό σημάδι σημαίνει δεν είναι δωρεάν',
        'Τετράγωνη Ενοποιημένη Ιδεογραφία-6709 Cjk',
        ':japanese_own:',
        'Ίδια',
        '有',
        ':orange:'
    ],
    '🈯': [
        'Ιαπωνική Σημασία Αποκλεισμένος',
        'Τετράγωνη Ενοποιημένη Ιδεογραφία-6307 Cjk',
        ':japanese_reserved:',
        'Σημείο Δακτυλίου',
        '指',
        ':green:'
    ],
    '🉐': [
        'Ιαπωνικά Σημασία Συναίνεση',
        'Πλεονέκτημα Κυκλικού Ιδεογράφου',
        ':japanese_acquire:',
        'Απόκτηση',
        '得',
        ':red:'
    ],
    '🈹': [
        'Ιαπωνική Νοηματική Έννοια Έκπτωση',
        'Τετράγωνο Cjk Ενοποιημένη Ιδεογραφία-5272',
        ':japanese_discount:',
        'Πώληση Οικονομίας',
        '割',
        ':red:'
    ],
    '🈚': [
        'Ιαπωνικό σημάδι σημαίνει χωρίς χρέωση',
        'Τετράγωνο Cjk Ενοποιημένη Ιδεογραφία-7121',
        ':japanese_lacking:',
        'Έλλειψη',
        '無',
        ':orange:'
    ],
    '🈲': [
        'Απαγορεύεται Η Ιάπωνη Σημασία Σηματοδοσίας',
        'Τετράγωνο Cjk Ενοποιημένη Ιδεογραφία-7981',
        ':japanese_prohibited:',
        'Forbid',
        '禁',
        ':red:'
    ],
    '🉑': [
        'Ιαπωνικά Σημαίνει Αποδεκτή',
        'Αποδοχή Κυκλικού Ιδεογράφου',
        ':japanese_accept:',
        'Αποδοχή',
        ':orange:'
    ],
    '🈸': [
        'Ιαπωνική Νοηματική Έννοια Εφαρμογή',
        'Τετράγωνη Ενοποιημένη Ιδεογραφία-7533 Cjk',
        ':japanese_application_form:',
        'Φόρμα Εφαρμογής',
        'Μαϊμού',
        'Αίτημα',
        '申',
        ':orange:'
    ],
    '🈴': [
        'Ιαπωνική Σημασία Περνώντας (Βαθμός)',
        'Τετράγωνο Cjk Ενοποιημένη Ιδεογραφία-5408',
        ':japanese_agreement:',
        'Συμφωνία',
        '合',
        ':red:'
    ],
    '🈳': [
        'Ιαπωνικά Σημαίνει Vacancy',
        'Τετράγωνο CJK Ενοποιημένη Ιδεογραφία-7a7a',
        ':japanese_available:',
        'Κενό και διαθέσιμο',
        '空',
        ':blue:'
    ],
    '㊗️': [
        'Ιαπωνικά Σημασία Συγχαρητήρια',
        'Ευθυγράμμιση Κυκλωμένου Ιδεογράφου',
        ':japanese_congratulations:',
        ':red:'
    ],
    '㊙️': [
        'Μυστικό Κυκλικού Ιδεογράφου',
        ':japanese_secret:',
        'Ιαπωνικά Σημαίνει Μυστικό',
        'Μυστικό',
        ':red:'
    ],
    '🈺': [
        'Ιαπωνικό σημάδι σημαίνει ανοικτή για επιχειρήσεις',
        'Τετράγωνο Cjk Ενοποιημένη Ιδεογραφία-55b6',
        ':japanese_open_for_business:',
        'Εργασία',
        '営',
        ':orange:'
    ],
    '🈵': [
        'Ιαπωνικά Σημαίνει Πλήρης; Όχι Vacancy',
        'Τετράγωνη Ενοποιημένη Ιδεογραφία-6e80 Cjk',
        ':japanese_full:',
        'Πλήρης',
        '満',
        ':red:'
    ],
    '🔘': [
        'Κουμπί Επιλογής',
        ':radio_button:'
    ],
    '🛑': [
        'Διακοπή Υπογραφής',
        ':stop_sign:',
        'Οκτάγωνη Πινακίδα',
        ':red:'
    ],
    '⚕️': [
        'Ιατρικό Σύμβολο',
        ':medical_symbol:',
        'Aesculapius',
        'Asklepios',
        'Ράβδος του Ασκληπιού',
        'Προσωπικό του Aesculapius'
    ],
    '🛗': [
        'Ανελκυστήρας',
        ':elevator:',
        ':lift:',
        'Ανύψωση'
    ],
    '⚧️': [
        'Σύμβολο Transgender',
        ':transgender_sign:'
    ],
    '♂️': [
        'Αρσενικό Υπογραφή',
        ':male_sign:',
        'Σύμβολο Ανθρώπου',
        'Σύμβολο Άρη'
    ],
    '♀️': [
        'Θηλυκό Πινακίδα',
        ':female_sign:',
        'Σύμβολο Γυναίκας',
        'Venus Symbol'
    ]
};
/*food and drinks*/
emojis_language[lang][6] = {
    '🍇': [
        'Σταφύλια',
        ':grapes:',
        'Σταφύλι',
        ':purple:'
    ],
    '🍈': [
        'Πεπόνι',
        ':melon:',
        'Cantaloupe',
        'Honeydew',
        'Καρπούζι'
    ],
    '🍉': [
        'Καρπούζι',
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
        'Λεμόνι',
        ':lemon:',
        'Λεμονάδα',
        ':yellow:'
    ],
    '🍌': [
        'Μπανάνα',
        ':banana:',
        'Πλανήτης',
        ':yellow:'
    ],
    '🍍': [
        'Ανανάς',
        ':pineapple:'
    ],
    '🥭': [
        'Mango',
        ':mango:'
    ],
    '🍎': [
        'Κόκκινο Μήλο',
        ':red_apple:',
        ':apple:',
        'Κόκκινο Νόστιμο Μήλο',
        ':red:'
    ],
    '🍏': [
        'Πράσινο Μήλο',
        ':green_apple:',
        ':apple:',
        'Χρυσό Νόστιμο Μήλο',
        'Γιαγιά Smith Apple',
        ':green:'
    ],
    '🍐': [
        'Αχλάδι',
        ':pear:'
    ],
    '🍑': [
        'Ροδάκινο',
        ':peach:',
        'Κάτω',
        'Πλήκτρο',
        ':orange:',
        ':pink:'
    ],
    '🍒': [
        'Κεράσια',
        ':cherry:',
        'Κεράσι',
        'Άγρια Κεράσι',
        ':red:'
    ],
    '🍓': [
        'Φράουλα',
        ':strawberry:',
        ':red:'
    ],
    '🥝': [
        'Ακτινίδια',
        ':kiwi:',
        'Κινέζικο Φραγκοστάφυλο',
        'Ακτινίδια',
        'Ακτινίδια',
        ':green:'
    ],
    '🍅': [
        'Ντομάτα',
        ':tomato:',
        ':red:'
    ],
    '🥥': [
        'Καρύδα',
        ':coconut:',
        'Cocoanut'
    ],
    '🥑': [
        'Αβοκάντο',
        ':avocado:',
        ':green:'
    ],
    '🍆': [
        'Μελιτζάνα',
        ':eggplant:',
        ':aubergine:',
        'Aubergine',
        'Φαλικό',
        'Μωβ Λαχανικά',
        ':purple:'
    ],
    '🥔': [
        'Πατάτες',
        ':potato:',
        'Ψημένη Πατάτα',
        'Πατάτα Του Αϊντάχο'
    ],
    '🥕': [
        'Καρότο',
        ':carrot:',
        ':orange:'
    ],
    '🌽': [
        'Αυτί καλαμποκιού',
        ':ear_of_corn:',
        'Καλαμπόκι',
        'Καλαμπόκι Στο Cob',
        'Καλαμπόκι',
        'Αυτί του αραβοσίτου'
    ],
    '🌶️': [
        'Ζεστό Πιπέρι',
        ':hot_pepper:',
        'Πιπέρι Τσίλι',
        'Πικάντικο',
        ':red:'
    ],
    '🥒': [
        'Αγγούρια',
        ':cucumber:',
        'Γκερκίνη',
        'Δέσιμο',
        ':green:'
    ],
    '🥬': [
        'Φυλλάδιο Πράσινο',
        ':leafy_green:',
        'Bok Choy',
        'Κινέζικο Λάχανο',
        'Cos Lettuce',
        'Μαρούλι Romaine',
        'Φυλλώδη Πράσινα',
        ':green:'
    ],
    '🥦': [
        'Μπρόκολα',
        ':broccoli:',
        ':green:'
    ],
    '🍄': [
        'Μανιτάρι',
        ':mushroom:',
        'Νεροκάρδαμο',
        'Toadstool'
    ],
    '🥜': [
        'Peanuts',
        ':peanuts:',
        'Καρποί',
        ':brown:'
    ],
    '🌰': [
        'Κάστανα',
        ':chestnut:',
        'Βελανίδι',
        'Καρύδα',
        ':brown:'
    ],
    '🍞': [
        'Ψωμί',
        ':bread:',
        'Κύπελλο Ψωμιού',
        ':brown:'
    ],
    '🥐': [
        'Croissant',
        ':croissant:',
        ':brown:'
    ],
    '🥖': [
        'Ψωμί Μπαγκέτα',
        ':baguette_bread:',
        'Γαλλικό Ψωμί',
        'Μπαγκέτα',
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
        'Τηγανίτες',
        ':pancakes:',
        'Crepes',
        'Χοτάκια',
        ':yellow:'
    ],
    '🧀': [
        'Σφήνα Τυριού',
        ':cheese_wedge:',
        'Τυρί',
        ':yellow:'
    ],
    '🍖': [
        'Κρέας στα οστά',
        ':meat_on_bone:',
        'BBQ',
        'Μπάρμπεκιου',
        'Κρέας Μάνγκα',
        ':red:'
    ],
    '🍗': [
        'Poultry Leg',
        ':poultry_leg:',
        'Κρεβάτι',
        'Πόδι Τουρκίας',
        ':red:'
    ],
    '🥩': [
        'Κόψτε το κρέας',
        ':cut_of_meat:',
        'Κρέας',
        'Μπριζόλα',
        ':red:'
    ],
    '🥓': [
        'Μπέικον',
        ':bacon:',
        'Rashers',
        ':red:'
    ],
    '🍔': [
        'Χάμπουργκερ',
        ':hamburger:',
        'Μπέργκερ',
        'Cheeseburger'
    ],
    '🍟': [
        'Γαλλικές Τηγανίτες',
        ':french_fries:',
        'Μάρκες',
        'Τηγανητές',
        'McDonalds Fries',
        ':yellow:'
    ],
    '🍕': [
        'Πίτσα',
        ':pizza:',
        'Pepperoni Πίτσα',
        'Φέτα πίτσας',
        ':red:'
    ],
    '🌭': [
        'Ζεστό Σκύλος',
        ':hot_dog:',
        'Hotdog',
        'Λουκάνικο',
        ':red:'
    ],
    '🥪': [
        'Σάντουιτς',
        ':sandwich:'
    ],
    '🌮': [
        'Taco',
        ':taco:'
    ],
    '🌯': [
        'Burrito',
        ':burrito:',
        'Αναδίπλωση'
    ],
    '🥙': [
        'Γεμιστό Flatbread',
        ':stuffed_flatbread:',
        'Doner Kebab',
        'Gyro',
        'Σατσέα',
        'Pita Sandwich'
    ],
    '🍳': [
        'Μαγειρική',
        ':cooking:',
        'Πρωινό',
        'Τηγανητό Αυγό',
        'Τηγάνι Pan'
    ],
    '🥘': [
        'Ακατέργαστο τηγάνι των τροφίμων',
        ':shallow_pan_of_food:',
        'Paella',
        'Pan του φαγητού'
    ],
    '🍲': [
        'Δοχείο των τροφίμων',
        ':pot_of_food:',
        'Μπολ Τροφίμων',
        'Σούπα',
        'Στιφάδο'
    ],
    '🥣': [
        'Μπολ με κουτάλι',
        ':bowl_with_spoon:',
        'Μπολ Δημητριακών'
    ],
    '🥗': [
        'Πράσινη Σαλάτα',
        ':green_salad:',
        'Σαλάτα',
        ':green:'
    ],
    '🍿': [
        'Ποπκόρν',
        ':popcorn:',
        'Αναδυόμενο Καλαμπόκι'
    ],
    '🧂': [
        'Αλάτι',
        ':salt:',
        'Αλάτι Shaker',
        ':white:'
    ],
    '🥫': [
        'Κονσερβοποιημένα Τρόφιμα',
        ':canned_food:',
        'Μπορεί από τρόφιμα',
        'Κονσέρβα Κασσίτερου',
        'Επικασσιτερωμένα Τρόφιμα'
    ],
    '🍱': [
        'Κιβώτιο Bento',
        ':bento_box:',
        'Μεσημεριανό Κουτί'
    ],
    '🍘': [
        'Πυροκροτητής Ρύζι',
        ':rice_cracker:',
        'Ρυθμιστής'
    ],
    '🍙': [
        'Μπάλα Ρύζι',
        ':rice_ball:',
        'Onigiri'
    ],
    '🍚': [
        'Μαγειρεμένο Ρύζι',
        ':cooked_rice:',
        'Βρασμένο Ρύζι',
        'Ρύζι',
        'Μπολ Ρύζι',
        'Ρύζι Με Ατμό'
    ],
    '🍛': [
        'Ρύζι Curry',
        ':curry_rice:',
        'Curry',
        'Ινδικά Τρόφιμα',
        'Curry και Ρύζι'
    ],
    '🍜': [
        'Μπολ Ατμού',
        ':steaming_bowl:',
        'Νούγιες',
        'Νούγιες Με Μοσχάρια',
        'Ramen'
    ],
    '🍝': [
        'Spaghetti',
        ':spaghetti:',
        'Ζυμαρικά'
    ],
    '🍠': [
        'Ψητό Γλυκό Πατάτα',
        ':roasted_sweet_potato:',
        'Γλυκά Πατάτα',
        'Yam'
    ],
    '🍢': [
        'Oden',
        ':oden:',
        'Kebab',
        'Σκάβες'
    ],
    '🍣': [
        'Σούσι',
        ':sushi:',
        'Sashimi',
        'Θαλασσινά',
        ':pink:'
    ],
    '🍤': [
        'Τηγανητές Γαρίδες',
        ':fried_shrimp:',
        'Τηγανητή Γαρίδα',
        'Tempura Γαρίδες'
    ],
    '🍥': [
        'Κέικ ψαριών με στροβιλισμό',
        ':fish_cake_with_swirl:',
        'Πίτα',
        'Pink Swirl'
    ],
    '🥮': [
        'Κέικ Σελήνης',
        ':moon_cake:',
        'Mooncake'
    ],
    '🍡': [
        'Dango',
        ':dango:',
        'Επιδόρπιο Ραβδί',
        'Ροζ Λευκό Πράσινο Μπάλες'
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
        'Πλαίσιο Απογείωσης',
        ':takeout_box:',
        'Κινεζικό Κουτί Τροφίμων',
        'Oyster Pail'
    ],
    '🍦': [
        'Μαλακό Παγωτό',
        ':soft_ice_cream:',
        'Whippy',
        'Απαλό Σερβίρισμα'
    ],
    '🍧': [
        'Ξυρισμένος Πάγος',
        ':shaved_ice:',
        'Κόμβος Χιονιού'
    ],
    '🍨': [
        'Παγωτό',
        ':ice_cream:',
        'Κύπελλο Παγωτού',
        'Επιδόρπιο'
    ],
    '🍩': [
        'Ντόνατ',
        ':doughnut:',
        'Donut'
    ],
    '🍪': [
        'Cookie',
        ':cookie:',
        'Μπισκότο',
        'Σοκολάτα Μπισκότα Chip',
        ':brown:'
    ],
    '🎂': [
        'Κέικ Γενεθλίων',
        ':birthday_cake:',
        'Γενέθλια',
        'Κέικ',
        'Κέικ Με Κεριά'
    ],
    '🍰': [
        'Σκόρδο',
        ':shortcake:',
        'Κέικ',
        'Κομμάτι Κέικ',
        'Φράουλα Κέικ'
    ],
    '🧁': [
        'Κύπελλο',
        ':cupcake:',
        'Γαλακτοκομικό Κέικ'
    ],
    '🥧': [
        'Πίτα',
        ':pie:'
    ],
    '🍫': [
        'Μπάρα Σοκολάτας',
        ':chocolate_bar:',
        'Μπάρα Καραμέλας',
        'Σοκολάτα',
        ':brown:'
    ],
    '🍬': [
        'Καραμέλα',
        ':candy:',
        'Lolly',
        'Γλυκό'
    ],
    '🍭': [
        'Lollipop',
        ':lollipop:',
        'Κορίτσι'
    ],
    '🍮': [
        'Κρέμα',
        ':custard:',
        'Creme Caramel',
        'Επιδόρπιο',
        'Φλόγα',
        'Πουτίγκα'
    ],
    '🍯': [
        'Μέλι Δοχείο',
        ':honey_pot:',
        'Μέλι',
        'Δοχείο',
        ':yellow:'
    ],
    '🍼': [
        'Μπουκάλι Μωρό',
        ':baby_bottle:',
        'Διατροφή Φιάλης'
    ],
    '🥛': [
        'Γυαλί από γάλα',
        ':glass_of_milk:',
        'Γάλα',
        ':white:'
    ],
    '☕': [
        'Ζεστό Ποτό',
        ':hot_beverage:',
        'Καφές',
        'Espresso',
        'Ζεστή Σοκολάτα',
        'Τσάι'
    ],
    '🍵': [
        'Teacup Χωρίς Λαβή',
        ':green_tea:',
        'Πράσινο Τσάι',
        'Matcha',
        'Matcha Πράσινο Τσάι',
        ':green:'
    ],
    '🍶': [
        'Sake',
        ':sake:',
        'Φιάλη',
        'Κρασί Ρύζι',
        'Μπουκάλι και κύπελλο Sake'
    ],
    '🍾': [
        'Μπουκάλι με Φελλό Popping',
        ':champagne:',
        'Εορτασμός',
        'Champagne',
        'Αφρώδης Οίνος'
    ],
    '🍷': [
        'Γυαλί Κρασιού',
        ':wine_glass:',
        'Αλκοόλ',
        'Κόκκινος Οίνος',
        'Οίνος'
    ],
    '🍸': [
        'Κοκτέιλ Γυαλί',
        ':cocktail_glass:',
        'Κοκτέιλ',
        'Μαρτίνι'
    ],
    '🍹': [
        'Τροπικό Ποτό',
        ':tropical_drink:',
        'Φρούτα Punch',
        'Tiki Ποτό'
    ],
    '🍺': [
        'Κούπα Μπύρας',
        ':beer_mug:',
        'Μπύρα',
        'Μπύρα Stein',
        ':yellow:'
    ],
    '🍻': [
        'Καλλυντικές Κούπες Μπύρας',
        ':clinking_beer_mugs:',
        'Μπύρες',
        'Επαφές'
    ],
    '🥂': [
        'Γυαλιά Ψεκασμού',
        ':clinking_glasses:',
        'Εορτασμός',
        'Γυαλιά Σαμπάνιας',
        'Επαφές'
    ],
    '🥃': [
        'Γυαλί Tumbler',
        ':tumbler_glass:',
        'Βουρβώνιο',
        'Υγρός',
        'Rum',
        'Ουίσκι',
        'Whisky'
    ],
    '🥤': [
        'Κύπελλο με Straw',
        ':cup_with_straw:',
        'Milkshake',
        'Smoothie',
        'Ποπ Σόδας',
        'Απαλό Ποτό'
    ],
    '🥢': [
        'Μοσχοκάρυδα',
        ':chopsticks:'
    ],
    '🍽️': [
        'Πιρούνι και μαχαίρι με πλάκα',
        ':fork_and_knife_with_plate:',
        'Δείπνο',
        ':white:',
        ':gray:',
        ':grey:'
    ],
    '🍴': [
        'Πηρούνι και μαχαίρι',
        ':fork_and_knife:',
        'Μαχαιροπήρουνα',
        'Μαχαίρι Και Πηρούνι',
        'Silverware',
        ':gray:',
        ':grey:'
    ],
    '🥄': [
        'Κουτάλι',
        ':spoon:',
        ':gray:',
        ':grey:'
    ],
    '🧄': [
        'Σκόρδα',
        ':garlic:'
    ],
    '🧅': [
        'Κρεμμύδι',
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
        'Βούτυρο',
        ':butter:'
    ],
    '🦪': [
        'Στρείδι',
        ':oyster:'
    ],
    '🧃': [
        'Κιβώτιο Ποτών',
        ':beverage_box:',
        'Κιβώτιο Χυμού'
    ],
    '🧉': [
        'Ματ Ποτό',
        ':mate_drink:',
        'Chimarraśo',
        'Cimarrón',
        'Ματ Yerba'
    ],
    '🫒': [
        'Ελιές',
        ':olive:',
        ':green:'
    ],
    '🫐': [
        'Μύρτιλλα',
        ':blueberries:',
        ':blue:'
    ],
    '🫑': [
        'Κουδούνι Πιπέρι',
        ':bell_pepper:',
        ':green:'
    ],
    '🫓': [
        'Πλατύψωμο',
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
        'Τσάι Φούσκα',
        ':boba:',
        'Boba'
    ],
    '🧊': [
        'Κύβος Πάγου',
        ':ice_cube:'
    ],
    '🫘': [
        'Beans',
        'Flatulence',
        ':beans:',
        'Κόκκοι καφέ',
        'Spill the beans'
    ],
    '🫗': [
        'Ρίχνει Υγρό',
        ':puring_liquid:',
        'Ρίχνει Ποτό',
        'Νερό'
    ]
};
/*flags*/
emojis_language[lang][7] = {
    '🏁': [
        'Σημαία Chequered',
        ':chequered_flag:',
        'Σημαία Καρό',
        'Κορίτσι Πλέγματος',
        'Αγωνιστική Σημαία',
        ':black:',
        ':white:'
    ],
    '🚩': [
        'Τριγωνική Σημαία',
        ':triangular_flag:',
        'Σημαία στον Πολωνό',
        'Κόκκινη Σημαία',
        'Τριγωνική σημαία κατά την ανάρτηση',
        ':red:'
    ],
    '🎌': [
        'Διασχισμένες Σημαίες',
        ':crossed_flags:',
        'Δύο Σημαίες'
    ],
    '🏴': [
        'Σημαία Μαύρης',
        ':black_flag:',
        'Κυματίζει Μαύρη Σημαία',
        ':black:'
    ],
    '🏳️': [
        'Σημαία Του Λευκού',
        ':white_flag:',
        'Κυματίζει Λευκή Σημαία',
        ':white:'
    ],
    '🏳️‍🌈': [
        'Σημαία Ουράνιο Τόξο',
        ':rainbow_flag:',
        'Pride Flag',
        'LGBT',
        'LGBTQIA+',
        'Ομοφυλόφιλος',
        'Τρανσφύλ',
        'Lesbian',
        'Ασεξουαλική',
        'Queer'
    ],
    '🏳️‍⚧️': [
        'Σημαία Transgender',
        ':transgender_flag:',
        'Μπλε, ροζ, και άσπρη σημαία',
        'Σημαία Trans',
        'Blue',
        'Pink'
    ],
    '🏴‍☠️': [
        'Σημαία Πειρατών',
        ':pirate_flag:',
        'Jolly Roger',
        ':black:',
        'Corsair',
        'Privateer',
        'Buccaneer'
    ],
    '🇺🇳': [
        'Σημαία των Ηνωμένων Εθνών',
        ':un:',
        'Σημαία: Ηνωμένα Έθνη'
    ],
    '🇪🇺': [
        'Σημαία της Ευρωπαϊκής Ένωσης',
        ':eu:',
        'Σημαία: Ευρωπαϊκή Ένωση',
        'EU Flag'
    ],
    '🇦🇨': [
        'Σημαία του νησιού',
        ':ac:'
    ],
    '🇦🇩': [
        'Σημαία της Ανδόρας',
        ':ad:',
        'Andorran Flag'
    ],
    '🇦🇪': [
        'Σημαία Ηνωμένων Αραβικών Εμιράτων',
        ':ae:',
        'Emirati Flag',
        'Σημαία Των ΗΑΕ'
    ],
    '🇦🇫': [
        'Σημαία του Αφγανιστάν',
        ':af:',
        'Afghan Flag'
    ],
    '🇦🇬': [
        'Σημαία της Αντίγκουα και Μπαρμπούντα',
        ':ag:'
    ],
    '🇦🇮': [
        'Σημαία της Ανγκουίλα',
        ':ai:',
        'Σημαία Ανγκουιλάν'
    ],
    '🇦🇱': [
        'Σημαία της Αλβανίας',
        ':al:',
        'Σημαία Αλβανίας'
    ],
    '🇦🇲': [
        'Σημαία της Αρμενίας',
        ':am:',
        'Σημαία Αρμενίας'
    ],
    '🇦🇴': [
        'Σημαία της Αγκόλας',
        ':ao:',
        'Σημαία Αγκόλας'
    ],
    '🇦🇶': [
        'Σημαία της Ανταρκτικής',
        ':aq:',
        'Σημαία Ανταρκτικής'
    ],
    '🇦🇷': [
        'Σημαία της Αργεντινής',
        ':ar:',
        'Σημαία Αργεντινής'
    ],
    '🇦🇸': [
        'Σημαία της Αμερικανικής Σαμόα',
        ':as:',
        'American Samoan Flag'
    ],
    '🇦🇹': [
        'Σημαία της Αυστρίας',
        ':at:',
        'Austrian Flag'
    ],
    '🇦🇺': [
        'Σημαία της Αυστραλίας',
        ':au:',
        'Σημαία Aussie',
        'Σημαία Αυστραλίας'
    ],
    '🇦🇼': [
        'Σημαία της Αρούμπα',
        ':aw:',
        'Σημαία Αρούμπα'
    ],
    '🇦🇽': [
        'Σημαία των Νήσων Aland',
        ':ax:',
        'Σημαία Αλονίας'
    ],
    '🇦🇿': [
        'Σημαία του Αζερμπαϊτζάν',
        ':az:',
        'Σημαία Αζερμπαϊτζάν'
    ],
    '🇧🇦': [
        'Σημαία της Βοσνίας-Ερζεγοβίνης',
        ':ba:'
    ],
    '🇧🇧': [
        'Σημαία του Μπαρμπάντος',
        ':bb:',
        'Σημαία Μπαρμπάντος',
        'Σημαία Μπαϊάν'
    ],
    '🇧🇩': [
        'Σημαία του Μπαγκλαντές',
        ':bd:',
        'Bangladeshi Flag'
    ],
    '🇧🇪': [
        'Σημαία του Βελγίου',
        ':be:',
        'Σημαία Βελγίου'
    ],
    '🇧🇫': [
        'Σημαία της Μπουρκίνα Φάσο',
        ':bf:',
        'Σημαία Burkinabe'
    ],
    '🇧🇬': [
        'Σημαία της Βουλγαρίας',
        ':bg:',
        'Σημαία Βουλγαρίας'
    ],
    '🇧🇭': [
        'Σημαία του Μπαχρέιν',
        ':bh:',
        'Σημαία Μπαχρέιν',
        'Σημαία Μπαχρέιν'
    ],
    '🇧🇮': [
        'Σημαία του Μπουρούντι',
        ':bi:',
        'Burundian Flag'
    ],
    '🇧🇯': [
        'Σημαία του Μπενίν',
        ':bj:',
        'Σημαία Μπενίνε'
    ],
    '🇧🇱': [
        'Σημαία του Αγίου Βαρθολομαίου',
        ':bl:',
        'Σημαία: Άγιος Βαρθολομαίος'
    ],
    '🇧🇲': [
        'Σημαία των Βερμούδων',
        ':bm:',
        'Bermudan Flag'
    ],
    '🇧🇳': [
        'Σημαία του Μπρουνέι',
        ':bn:',
        'Σημαία Μπρουνέι'
    ],
    '🇧🇴': [
        'Σημαία της Βολιβίας',
        ':bo:',
        'Bolivian Flag'
    ],
    '🇧🇶': [
        'Σημαία της Καραϊβικής',
        ':bq:',
        'Bonaire'
    ],
    '🇧🇷': [
        'Σημαία της Βραζιλίας',
        ':br:',
        'Σημαία Βραζιλίας'
    ],
    '🇧🇸': [
        'Σημαία του Μπαχάμες',
        ':bs:',
        'Σημαία Μπαχαμών'
    ],
    '🇧🇹': [
        'Σημαία του Μπουτάν',
        ':bt:',
        'Σημαία Μπουτάν'
    ],
    '🇧🇻': [
        'Σημαία του Νησιού Μπουβέ',
        ':bv:',
        'Σημαία: Νήσος Μπουβέ'
    ],
    '🇧🇼': [
        'Σημαία της Μποτσουάνα',
        ':bw:',
        'Batswana Flag'
    ],
    '🇧🇾': [
        'Σημαία της Λευκορωσίας',
        ':by:',
        'Σημαία Λευκορωσίας'
    ],
    '🇧🇿': [
        'Σημαία του Μπελίζε',
        ':bz:',
        'Σημαία Μπελίζε'
    ],
    '🇨🇦': [
        'Σημαία του Καναδά',
        'Σημαία Του Καναδά',
        ':ca:'
    ],
    '🇨🇨': [
        'Σημαία των Νήσων Κόκος (Κίλινγκ)',
        ':cc:'
    ],
    '🇨🇩': [
        'Flag of Congo - Kinshasa',
        ':cd:'
    ],
    '🇨🇫': [
        'Σημαία της Κεντροαφρικανικής Δημοκρατίας',
        ':cf:',
        'Σημαία Κεντρικής Αφρικής'
    ],
    '🇨🇬': [
        'Σημαία του Κονγκό - Μπραζαβίλ',
        ':cg:'
    ],
    '🇨🇭': [
        'Σημαία της Ελβετίας',
        ':ch:',
        'Ερυθρός Σταυρός',
        'Σημαία Ελβετίας'
    ],
    '🇨🇮': [
        'Σημαία της Ακτής Ελεφαντοστού',
        ':ci:',
        'Flag: Côte d’Ivoire'
    ],
    '🇨🇰': [
        'Σημαία των Νήσων Κουκ',
        ':ck:',
        'Σημαία Νήσων Κουκ'
    ],
    '🇨🇱': [
        'Σημαία της Χιλής',
        ':cl:',
        'Σημαία Χιλής'
    ],
    '🇨🇲': [
        'Σημαία του Καμερούν',
        ':cm:',
        'Σημαία Καμερούν'
    ],
    '🇨🇳': [
        'Σημαία της Κίνας',
        ':cn:',
        'Σημαία Της Κίνας'
    ],
    '🇨🇴': [
        'Σημαία της Κολομβίας',
        ':co:',
        'Σημαία Κολομβίας'
    ],
    '🇨🇵': [
        'Σημαία του Κλίπερτον',
        ':cp:',
        'Σημαία: Νήσος Κλίπερτον'
    ],
    '🇨🇷': [
        'Σημαία της Κόστα Ρίκα',
        ':cr:',
        'Σημαία Της Κόστα Ρίκα'
    ],
    '🇨🇺': [
        'Σημαία της Κούβας',
        ':cu:',
        'Κουβανική Σημαία'
    ],
    '🇨🇻': [
        'Σημαία του Πράσινου Ακρωτηρίου',
        ':cv:',
        'Σημαία Πράσινου Ακρωτηρίου'
    ],
    '🇨🇼': [
        'Σημαία του Κουρασάο',
        ':cw:',
        'Curaçaoan Flag'
    ],
    '🇨🇽': [
        'Σημαία του νησιού των Χριστουγέννων',
        ':cx:',
        'Σημαία Νήσων Των Χριστουγέννων'
    ],
    '🇨🇾': [
        'Σημαία της Κύπρου',
        ':cy:',
        'Σημαία Κύπρου'
    ],
    '🇨🇿': [
        'Σημαία της Τσεχίας',
        ':cz:',
        'Σημαία Τσεχίας'
    ],
    '🇩🇪': [
        'Σημαία της Γερμανίας',
        ':de:',
        'Σημαία Γερμανικά',
        'Σημαία Γερμανίας'
    ],
    '🇩🇬': [
        'Σημαία του Diego Garcia',
        ':dg:',
        'Σημαία: Ντιέγκο Γκαρσία'
    ],
    '🇩🇯': [
        'Σημαία του Τζιμπουτί',
        ':dj:',
        'Djibouti Flag',
        'Djiboutian Flag'
    ],
    '🇩🇰': [
        'Σημαία της Δανίας',
        ':dk:',
        'Σημαία Δανίας'
    ],
    '🇩🇲': [
        'Σημαία του Ντομίνικα',
        ':dm:'
    ],
    '🇩🇴': [
        'Σημαία της Δομινικανής Δημοκρατίας',
        ':do:',
        'Σημαία Dom Rep',
        'Σημαία Δομινικανής'
    ],
    '🇩🇿': [
        'Σημαία της Αλγερίας',
        ':dz:',
        'Algerian Flag'
    ],
    '🇪🇦': [
        'Σημαία της Θέουτας και Μελίγια',
        ':ea:',
        'Σημαία του Μελίγια',
        'Σημαία της Θέουτας',
        'Flag: Ceuta & Melilla'
    ],
    '🇪🇨': [
        'Σημαία του Ισημερινού',
        ':ec:',
        'Ecuadorian Flag'
    ],
    '🇪🇪': [
        'Σημαία της Εσθονίας',
        ':ee:',
        'Σημαία Εσθονίας'
    ],
    '🇪🇬': [
        'Σημαία της Αιγύπτου',
        ':eg:',
        'Σημαία Αιγύπτου'
    ],
    '🇪🇭': [
        'Σημαία της Δυτικής Σαχάρας',
        ':eh:',
        'Σημαία Δυτικής Σαχάρας'
    ],
    '🇪🇷': [
        'Σημαία της Ερυθραίας',
        ':er:',
        'Eritrean Flag'
    ],
    '🇪🇹': [
        'Σημαία της Αιθιοπίας',
        ':et:',
        'Ethiopian Flag'
    ],
    '🇪🇸': [
        'Σημαία της Ισπανίας',
        ':es:',
        'Σημαία Ισπανίας'
    ],
    '🇫🇮': [
        'Σημαία της Φινλανδίας',
        ':fi:',
        'Σημαία Φινλανδίας'
    ],
    '🇫🇯': [
        'Σημαία των Φίτζι',
        ':fj:',
        'Fijian Flag'
    ],
    '🇫🇰': [
        'Σημαία των Νήσων Φώκλαντ',
        ':fk:',
        'Σημαία Falklander'
    ],
    '🇫🇲': [
        'Σημαία της Μικρονησίας',
        ':fm:',
        'Σημαία Μικρονησίας'
    ],
    '🇫🇴': [
        'Σημαία των Νήσων Φερόε',
        ':fo:',
        'Faroe Islander Flag'
    ],
    '🇫🇷': [
        'Σημαία της Γαλλίας',
        ':fr:',
        'Σημαία Γαλλίας'
    ],
    '🇬🇦': [
        'Σημαία της Γκαμπόν',
        ':ga:',
        'Σημαία Γκαμπόν'
    ],
    '🇬🇧': [
        'Σημαία της Μεγάλης Βρετανίας',
        ':gb:',
        'Βρετανική Σημαία',
        'Ηνωμένο Βασίλειο',
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
        'Σημαία της Γρενάδας',
        ':gd:',
        'Σημαία Γρενάδας'
    ],
    '🇬🇪': [
        'Σημαία της Γεωργίας',
        ':ge:',
        'Σημαία Γεωργίας'
    ],
    '🇬🇫': [
        'Σημαία της Γαλλικής Γουιάνας',
        ':gf:',
        'Σημαία Γαλλικής Γουινέας'
    ],
    '🇬🇬': [
        'Σημαία του Γκέρνσεϊ',
        ':gg:',
        'Guernsey Flag'
    ],
    '🇬🇭': [
        'Σημαία της Γκάνα',
        ':gh:',
        'Σημαία Γκάνα'
    ],
    '🇬🇮': [
        'Σημαία του Γιβραλτάρ',
        ':gi:',
        'Σημαία Γιβραλτάρ'
    ],
    '🇬🇱': [
        'Σημαία της Γροιλανδίας',
        ':gl:',
        'Greenlandic Flag'
    ],
    '🇬🇲': [
        'Σημαία της Γκάμπια',
        ':gm:',
        'Gambian Flag'
    ],
    '🇬🇳': [
        'Σημαία της Γουινέας',
        ':gn:',
        'Guinean Flag'
    ],
    '🇬🇵': [
        'Σημαία της Γουαδελούπης',
        ':gp:',
        'Σημαία Γουαδελούπης'
    ],
    '🇬🇶': [
        'Σημαία της Ισημερινής Γουινέας',
        ':gq:',
        'Equatorial Guinean Flag',
        'Σημαία Ισημερινού'
    ],
    '🇬🇷': [
        'Σημαία της Ελλάδας',
        ':gr:',
        'Σημαία Ελλάδας'
    ],
    '🇬🇸': [
        'Σημαία της Νότιας Γεωργίας και των Νήσων Νότιων Σάντουιτς',
        ':gs:'
    ],
    '🇬🇹': [
        'Σημαία της Γουατεμάλας',
        ':gt:',
        'Guatemalan Flag'
    ],
    '🇬🇺': [
        'Σημαία του Γκουάμ',
        ':gu:',
        'Σημαία Γουαμανίας',
        'Σημαία Τσάμορρο'
    ],
    '🇬🇼': [
        'Σημαία της Γουινέας-Μπισάου',
        ':gw:',
        'Guinea-Bissau Flag'
    ],
    '🇬🇾': [
        'Σημαία της Γουιάνας',
        ':gy:',
        'Σημαία Γουιάνας'
    ],
    '🇭🇰': [
        'Σημαία του Χονγκ Κονγκ SAR Κίνα',
        ':hk:',
        'Σημαία Χονγκ Κονγκ'
    ],
    '🇭🇲': [
        'Σημαία των Νήσων Χερντ και Μακντόναλντ',
        ':hm:',
        'Σημαία: Νήσοι Χερντ & Μακντόναλντ'
    ],
    '🇭🇳': [
        'Σημαία της Ονδούρας',
        ':hn:',
        'Σημαία Ονδούρας'
    ],
    '🇭🇷': [
        'Σημαία της Κροατίας',
        ':hr:',
        'Σημαία Κροατίας'
    ],
    '🇭🇹': [
        'Σημαία της Αϊτής',
        ':ht:',
        'Haitian Flag'
    ],
    '🇭🇺': [
        'Σημαία της Ουγγαρίας',
        ':hu:',
        'Σημαία Ουγγαρίας'
    ],
    '🇮🇨': [
        'Σημαία των Καναρίων Νήσων',
        ':ic:'
    ],
    '🇮🇩': [
        'Σημαία της Ταϊλάνδης',
        ':id:',
        'Σημαία Ινδονησίας'
    ],
    '🇮🇪': [
        'Σημαία της Ιρλανδίας',
        ':ie:',
        'Σημαία Ιρλανδίας'
    ],
    '🇮🇱': [
        'Σημαία του Ισραήλ',
        ':il:',
        'Σημαία Ισραήλ'
    ],
    '🇮🇲': [
        'Σημαία της νήσου του Μαν',
        ':im:',
        'Manx Flag'
    ],
    '🇮🇳': [
        'Σημαία της Ινδίας',
        ':in:',
        'Σημαία Ινδίας'
    ],
    '🇮🇴': [
        'Σημαία του βρετανικού εδάφους του Ινδικού Ωκεανού',
        ':io:',
        'Σημαία Βρετανικού Ωκεανού'
    ],
    '🇮🇶': [
        'Σημαία του Ιράκ',
        ':iq:',
        'Iraqi Flag'
    ],
    '🇮🇷': [
        'Σημαία του Ιράν',
        ':ir:',
        'Σημαία Του Ιράν'
    ],
    '🇮🇸': [
        'Σημαία της Ισλανδίας',
        ':is:',
        'Σημαία Ισλανδίας'
    ],
    '🇮🇹': [
        'Σημαία της Ιταλίας',
        ':it:',
        'Σημαία Ιταλίας'
    ],
    '🇯🇪': [
        'Σημαία του Τζέρσεϊ',
        ':je:',
        'Σημαία Τζέρσεϊ'
    ],
    '🇯🇲': [
        'Σημαία της Τζαμάικα',
        ':jm:',
        'Σημαία Τζαμάικας'
    ],
    '🇯🇴': [
        'Σημαία της Ιορδανίας',
        ':jo:',
        'Σημαία Ιορδανίας'
    ],
    '🇯🇵': [
        'Σημαία της Ιαπωνίας',
        ':jp:',
        'Σημαία Ιαπωνίας'
    ],
    '🇰🇪': [
        'Σημαία της Κένυας',
        ':ke:',
        'Σημαία Κένυας'
    ],
    '🇰🇬': [
        'Σημαία της Κιργιζίας',
        ':kg:',
        'Kyrgyzstani Flag'
    ],
    '🇰🇭': [
        'Σημαία της Καμπότζης',
        ':kh:',
        'Σημαία Καμπότζης'
    ],
    '🇰🇮': [
        'Σημαία του Κιριμπάτι',
        ':ki:',
        'Σημαία Ι-Κιριμπάτι'
    ],
    '🇰🇲': [
        'Σημαία των Κομορών',
        ':km:',
        'Σημαία Κομορών'
    ],
    '🇰🇳': [
        'Σημαία του Αγίου Χριστόφορου και Νέβις',
        ':kn:'
    ],
    '🇰🇵': [
        'Σημαία της Βόρειας Κορέας',
        ':kp:',
        'Σημαία Βόρειας Κορέας'
    ],
    '🇰🇷': [
        'Σημαία της Νότιας Κορέας',
        ':kr:',
        'Σημαία Νότιας Κορέας'
    ],
    '🇰🇼': [
        'Σημαία του Κουβέιτ',
        ':kw:',
        'Kuwaiti Flag'
    ],
    '🇰🇾': [
        'Σημαία των Νήσων Καϊμάν',
        ':ky:',
        'Σημαία Καυμανίας'
    ],
    '🇰🇿': [
        'Σημαία του Καζακστάν',
        ':kz:',
        'Kazakhstani Flag',
        'Kazakh Flag'
    ],
    '🇱🇦': [
        'Σημαία του Λάος',
        ':la:',
        'Σημαία Του Λάος',
        'Σημαία Λάος'
    ],
    '🇱🇧': [
        'Σημαία του Λιβάνου',
        ':lb:',
        'Σημαία Λιβάνου'
    ],
    '🇱🇨': [
        'Σημαία της Αγίας Λουκίας',
        ':lc:'
    ],
    '🇱🇮': [
        'Σημαία του Λιχτενστάιν',
        ':lt:',
        'Σημαία Λιχτενστάιν'
    ],
    '🇱🇰': [
        'Σημαία της Σρι Λάνκα',
        ':lk:',
        'Σημαία Σρι Λάνκα'
    ],
    '🇱🇷': [
        'Σημαία της Λιβερίας',
        ':lr:',
        'Σημαία Λιβερίας'
    ],
    '🇱🇸': [
        'Flag of Lesotho',
        ':ls:',
        'Basotho Flag'
    ],
    '🇱🇹': [
        'Σημαία της Λιθουανίας',
        ':lt:',
        'Σημαία Λιθουανίας'
    ],
    '🇱🇺': [
        'Σημαία του Λουξεμβούργου',
        ':lu:',
        'Σημαία Λουξεμβούργου'
    ],
    '🇱🇻': [
        'Σημαία της Λετονίας',
        ':lv:',
        'Σημαία Λετονίας'
    ],
    '🇱🇾': [
        'Σημαία της Λιβύης',
        ':ly:',
        'Σημαία Λιβύης'
    ],
    '🇲🇦': [
        'Σημαία του Μαρόκου',
        ':ma:',
        'Σημαία Μαρόκου'
    ],
    '🇲🇨': [
        'Σημαία του Μονακό',
        ':mc:',
        'Σημαία Mone\'gasque'
    ],
    '🇲🇩': [
        'Σημαία της Μολδαβίας',
        ':md:',
        'Σημαία Μολδαβίας'
    ],
    '🇲🇪': [
        'Σημαία του Μαυροβουνίου',
        ':me:',
        'Σημαία Μαυροβουνίου'
    ],
    '🇲🇫': [
        'Σημαία του Αγίου Μαρτίνου',
        ':mf:',
        'Flag: St. Martin'
    ],
    '🇲🇬': [
        'Σημαία της Μαδαγασκάρης',
        ':mg:',
        'Madagascan Flag'
    ],
    '🇲🇭': [
        'Σημαία των Νήσων Μάρσαλ',
        ':mh:',
        'Σημαία Marshallese'
    ],
    '🇲🇰': [
        'Σημαία της Μακεδονίας',
        ':mk:',
        'Σλαβομακεδονική Σημαία'
    ],
    '🇲🇱': [
        'Σημαία του Μάλι',
        ':ml:',
        'Σημαία Μάλι'
    ],
    '🇲🇲': [
        'Σημαία του Μιανμάρ (Βιρμανία)',
        ':mm:',
        'Σημαία Μιανμάρεσε',
        'Σημαία Για Τη Βιρμανία',
        'Σημαία Βιρμανίας'
    ],
    '🇲🇳': [
        'Σημαία της Μογγολίας',
        ':mn:',
        'Σημαία Μογγολίας'
    ],
    '🇲🇴': [
        'Σημαία του Μακάο Σαρ Κίνα',
        ':mo:',
        'Σημαία Μακάο'
    ],
    '🇲🇵': [
        'Σημαία των Νήσων Βόρειες Μαριάνες',
        ':mp:',
        'Σημαία Μικρονησίας'
    ],
    '🇲🇶': [
        'Σημαία της Μαρτινίκας',
        ':mq:',
        'Σημαία της Μαρτινίκας',
        'Σημαία Μαρτινίκα'
    ],
    '🇲🇷': [
        'Σημαία της Μαυριτανίας',
        ':mr:',
        'Σημαία Μαυριτανίας'
    ],
    '🇲🇸': [
        'Flag of Montserrat',
        ':ms:',
        'Montserratian Flag'
    ],
    '🇲🇹': [
        'Σημαία της Μάλτας',
        ':mt:',
        'Maltese Flag'
    ],
    '🇲🇺': [
        'Flag of Mauritius',
        ':mu:',
        'Σημαία Μαυρίκιου'
    ],
    '🇲🇻': [
        'Σημαία της Μαλδίβας',
        ':mv:',
        'Σημαία Μαλδίβας'
    ],
    '🇲🇼': [
        'Σημαία του Μαλάουι',
        ':mw:',
        'Malawian Flag'
    ],
    '🇲🇽': [
        'Σημαία του Μεξικού',
        ':mx:',
        'Σημαία Μεξικού'
    ],
    '🇲🇾': [
        'Σημαία της Μαλαισίας',
        ':my:',
        'Malaysian Flag'
    ],
    '🇲🇿': [
        'Σημαία της Μοζαμβίκης',
        ':mz:',
        'Σημαία Μοζαμβίκης'
    ],
    '🇳🇦': [
        'Σημαία της Ναμίμπια',
        ':na:',
        'Namibian Flag'
    ],
    '🇳🇨': [
        'Σημαία της Νέας Καληδονίας',
        ':nc:',
        'Σημαία Νέας Καληδονίας'
    ],
    '🇳🇪': [
        'Σημαία του Νίγηρα',
        ':ne:',
        'Σημαία Νιγηρίας'
    ],
    '🇳🇫': [
        'Σημαία του Νησιού',
        ':nf:',
        'Σημαία Νησιού Νόρφολκ'
    ],
    '🇳🇬': [
        'Σημαία της Νιγηρίας',
        ':ng:',
        'Σημαία Νιγηρίας'
    ],
    '🇳🇮': [
        'Flag of Nicaragua',
        ':ni:',
        'Nicaraguan Flag'
    ],
    '🇳🇱': [
        'Σημαία της Ολλανδίας',
        ':nl:',
        'Σημαία Ολλανδίας',
        'Ολλανδία'
    ],
    '🇳🇴': [
        'Σημαία της Νορβηγίας',
        ':no:',
        'Σημαία Νορβηγίας'
    ],
    '🇳🇵': [
        'Σημαία του Νεπάλ',
        ':np:',
        'Σημαία Νεπάλ'
    ],
    '🇳🇷': [
        'Σημαία του Ναούρου',
        ':nr:',
        'Nauruan Flag'
    ],
    '🇳🇺': [
        'Σημαία της Νιούε',
        ':nu:',
        'Niuean Flag'
    ],
    '🇳🇿': [
        'Σημαία της Νέας Ζηλανδίας',
        ':nz:',
        'Σημαία Ακτινιδίων'
    ],
    '🇴🇲': [
        'Σημαία του Ομάν',
        ':om:',
        'Σημαία Ομάνι'
    ],
    '🇵🇦': [
        'Σημαία του Παναμά',
        ':pa:',
        'Σημαία Παναμά'
    ],
    '🇵🇪': [
        'Σημαία του Περού',
        ':pe:',
        'Σημαία Περού'
    ],
    '🇵🇫': [
        'Σημαία της Γαλλικής Πολυνησίας',
        ':pf:',
        'Σημαία Γαλλικής Πολυνησίας'
    ],
    '🇵🇬': [
        'Σημαία της Παπουασίας-Νέας Γουινέας',
        ':pg:',
        'Σημαία PNG',
        'Papua New Guinean Flag'
    ],
    '🇵🇭': [
        'Σημαία των Φιλιππίνων',
        ':ph:'
    ],
    '🇵🇰': [
        'Σημαία του Πακιστάν',
        ':pk:',
        'Σημαία Πακιστάν'
    ],
    '🇵🇱': [
        'Σημαία της Πολωνίας',
        ':pl:',
        'Σημαία Πολωνίας'
    ],
    '🇵🇲': [
        'Σημαία του Σαιν Πιέρ και Μικελόν',
        ':pm:'
    ],
    '🇵🇳': [
        'Σημαία του Πίτκαιρν',
        ':pn:'
    ],
    '🇵🇷': [
        'Σημαία του Πουέρτο Ρίκο',
        ':pr:',
        'Σημαία Πουέρτο Ρίκο'
    ],
    '🇵🇸': [
        'Σημαία των Παλαιστινιακών Εδαφών',
        ':ps:',
        'Palestine'
    ],
    '🇵🇹': [
        'Σημαία της Πορτογαλίας',
        ':pt:',
        'Σημαία Πορτογαλίας'
    ],
    '🇵🇼': [
        'Σημαία του Παλάου',
        ':pw:',
        'Σημαία Παλάουαν'
    ],
    '🇵🇾': [
        'Σημαία της Παραγουάης',
        ':py:',
        'Paraguayan Flag'
    ],
    '🇶🇦': [
        'Σημαία του Κατάρ',
        ':qa:',
        'Σημαία Κατάρ'
    ],
    '🇷🇪': [
        'Σημαία της Ρεϊνιόν',
        ':re:',
        'Σημαία Ρεϊνιοννές'
    ],
    '🇷🇴': [
        'Σημαία της Ρουμανίας',
        ':ro:',
        'Σημαία Ρουμανίας'
    ],
    '🇷🇸': [
        'Σημαία της Σερβίας',
        ':rs:',
        'Σημαία Σερβίας'
    ],
    '🇷🇺': [
        'Σημαία της Ρωσίας',
        ':ru:',
        'Σημαία Ρωσίας'
    ],
    '🇷🇼': [
        'Flag of Rwanda',
        ':rw:',
        'Rwandan Flag'
    ],
    '🇸🇦': [
        'Σημαία της Σαουδικής Αραβίας',
        ':sa:',
        'Σημαία Σαουδικής Αραβίας'
    ],
    '🇸🇧': [
        'Σημαία των Νήσων Σολομώντος',
        ':sb:',
        'Σημαία Νήσων Σολομώντος'
    ],
    '🇸🇨': [
        'Σημαία των Σεϋχελλών',
        ':sc:',
        'Seychellois Flag'
    ],
    '🇸🇩': [
        'Σημαία του Σουδάν',
        ':sd:',
        'Sudanese Flag'
    ],
    '🇸🇪': [
        'Σημαία της Σουηδίας',
        ':se:',
        'Σουηδική Σημαία'
    ],
    '🇸🇬': [
        'Σημαία της Σιγκαπούρης',
        ':sg:',
        'Σημαία Σιγκαπούρης'
    ],
    '🇸🇭': [
        'Σημαία της Αγίας Ελένης',
        ':sh:'
    ],
    '🇸🇮': [
        'Σημαία της Σλοβενίας',
        ':si:',
        'Σημαία Σλοβενίας'
    ],
    '🇸🇯': [
        'Σημαία του Σβάλμπαρντ & Γιαν Μαγιέν',
        ':sj:'
    ],
    '🇸🇰': [
        'Σημαία της Σλοβακίας',
        ':sk:',
        'Σημαία Σλοβακίας',
        'Slovakian Flag'
    ],
    '🇸🇱': [
        'Σημαία της Σιέρα Λεόνε',
        ':sl:',
        'Sierra Leonean Flag'
    ],
    '🇸🇲': [
        'Σημαία του Αγίου Μαρίνου',
        ':sm:',
        'Σημαία Σαμμαρινής'
    ],
    '🇸🇳': [
        'Σημαία της Σενεγάλης',
        ':sn:',
        'Σημαία Της Σενεγάλης'
    ],
    '🇸🇴': [
        'Σημαία της Σομαλίας',
        ':so:',
        'Somalian Flag'
    ],
    '🇸🇷': [
        'Σημαία του Σουρινάμ',
        ':sr:',
        'Σημαία Σουρινάμ'
    ],
    '🇸🇸': [
        'Σημαία του Νότιου Σουδάν',
        ':ss:',
        'Σημαία Νότιου Σουδάν'
    ],
    '🇸🇹': [
        'Σημαία του Σάο Τομέ & Πρίνσιπε',
        ':st:'
    ],
    '🇸🇻': [
        'Σημαία του Ελ Σαλβαδόρ',
        ':sv:',
        'Σημαία Ελ Σαλβαδόρα'
    ],
    '🇸🇽': [
        'Σημαία του Αγίου Μαρτίνου',
        ':sx:'
    ],
    '🇸🇾': [
        'Σημαία της Συρίας',
        ':sy:',
        'Σημαία Συρίας'
    ],
    '🇸🇿': [
        'Σημαία της Σουαζιλάνδης',
        ':sz:',
        'Σημαία Eswatini'
    ],
    '🇹🇦': [
        'Flag of Tristan Da Cunha',
        ':ta:'
    ],
    '🇹🇨': [
        'Σημαία των Νήσων Τερκς και Κάικος',
        ':tc:'
    ],
    '🇹🇩': [
        'Σημαία του Τσαντ',
        ':td:',
        'Σημαία Του Τσαντ'
    ],
    '🇹🇫': [
        'Σημαία των Νότιων Γαλλικών Εδαφών',
        ':tf:',
        'Σημαία Νότιας Γαλλίας'
    ],
    '🇹🇬': [
        'Σημαία του Τόγκο',
        ':tg:',
        'Togolese Flag'
    ],
    '🇹🇭': [
        'Σημαία της Ταϊλάνδης',
        ':th:',
        'Σημαία Ταϊλάνδης'
    ],
    '🇹🇯': [
        'Σημαία του Τατζικιστάν',
        ':tj:',
        'Σημαία Τατζικιστάν'
    ],
    '🇹🇰': [
        'Σημαία του Τοκελάου',
        ':tk:',
        'Σημαία Τοκελάου'
    ],
    '🇹🇱': [
        'Σημαία του Ανατολικού Τιμόρ',
        ':tl:',
        'Σημαία Ανατολικού Τιμόρ',
        'Σημαία Ανατολικού Τιμόρ'
    ],
    '🇹🇲': [
        'Σημαία του Τουρκμενιστάν',
        ':tm:',
        'Turkmen Flag'
    ],
    '🇹🇳': [
        'Σημαία της Τυνησίας',
        ':tn:',
        'Σημαία Τυνησίας'
    ],
    '🇹🇴': [
        'Σημαία της Τόνγκα',
        ':to:',
        'Tongan Flag'
    ],
    '🇹🇷': [
        'Σημαία της Τουρκίας',
        ':tr:',
        'Σημαία Τουρκίας'
    ],
    '🇹🇹': [
        'Σημαία του Τρινιντάντ και Τομπάγκο',
        ':tt:'
    ],
    '🇹🇻': [
        'Σημαία του Τουβαλού',
        ':tv:',
        'Σημαία Τουβαλούάν'
    ],
    '🇹🇼': [
        'Σημαία της Ταϊβάν',
        ':tw:',
        'Σημαία Ταϊβάν'
    ],
    '🇹🇿': [
        'Σημαία της Τανζανίας',
        ':tz:',
        'Tanzanian Flag'
    ],
    '🇺🇦': [
        'Σημαία της Ουκρανίας',
        ':ua:',
        'Σημαία Ουκρανίας'
    ],
    '🇺🇬': [
        'Σημαία της Ουγκάντας',
        ':ug:',
        'Σημαία Ουγκάντα'
    ],
    '🇺🇲': [
        'Σημαία: Απομακρυσμένες Νήσοι Των ΗΠΑ',
        ':um:'
    ],
    '🇺🇸': [
        'Σημαία των Ηνωμένων Πολιτειών',
        ':us:',
        'Αμερικανική Σημαία',
        'Σημαία ΗΠΑ'
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
        'Σημαία της Αγίας Έδρας',
        ':va:',
        'Σημαία Βαντικανιέν'
    ],
    '🇻🇨': [
        'Σημαία του Αγίου Βικεντίου και Γρεναδίνες',
        ':vc:'
    ],
    '🇻🇪': [
        'Σημαία της Βενεζουέλας',
        ':ve:',
        'Σημαία Βενεζουέλας'
    ],
    '🇻🇬': [
        'Σημαία των Βρετανικών Παρθένων Νήσων',
        ':vg:',
        'Σημαία Βρετανικής Παρθένου Νησιού'
    ],
    '🇻🇮': [
        'Σημαία των Παρθένων Νήσων των ΗΠΑ',
        ':vi:',
        'Σημαία Αμερικανών Παρθένων Νήσων'
    ],
    '🇻🇳': [
        'Σημαία του Βιετνάμ',
        ':vn:',
        'Σημαία Βιετνάμ'
    ],
    '🇻🇺': [
        'Flag of Vanuatu',
        ':vu:',
        'Ni-Vanuatu Flag'
    ],
    '🇼🇫': [
        'Σημαία της Ουώλλις και της Φουτούνας',
        ':wf:'
    ],
    '🇼🇸': [
        'Σημαία της Σαμόας',
        ':ws:',
        'Samoan Flag'
    ],
    '🇽🇰': [
        'Σημαία του Κοσσυφοπεδίου',
        ':xk:',
        'Kosovar Flag'
    ],
    '🇾🇪': [
        'Σημαία της Υεμένης',
        ':ye:',
        'Σημαία Υεμένης'
    ],
    '🇾🇹': [
        'Σημαία του Μαγιότ',
        ':yt:',
        'Σημαία Μαγιότ'
    ],
    '🇿🇦': [
        'Σημαία της Νότιας Αφρικής',
        ':za:',
        'Σημαία Νότιας Αφρικής'
    ],
    '🇿🇲': [
        'Σημαία της Ζάμπιας',
        ':zm:',
        'Zambian Flag'
    ],
    '🇿🇼': [
        'Σημαία της Ζιμπάμπουε',
        ':zw:',
        'Σημαία Ζιμπάμπουε',
        'Σημαία Zim'
    ]
};
/*sports*/
emojis_language[lang][8] = {
    '🧗{{skin_tone}}‍♂️': [
        'Άνθρωπος Αναρρίχηση',
        ':man_climbing:',
        ':climbing:',
        'Αρσενικό Rock Climber',
        'Άνθρωπος Αναρρίχηση',
        ':man:'
    ],
    '🧗{{skin_tone}}‍♀️': [
        'Γυναίκα Αναρρίχηση',
        ':woman_climbing:',
        ':climbing:',
        'Θηλυκό Rock Climber',
        'Γυναίκα Ορειβάτης',
        ':woman:'
    ],
    '🧗{{skin_tone}}': [
        'Αναρρίχηση Προσώπου',
        ':person_climbing:',
        ':climbing:',
        'Person Rock Climber',
        'Πρόσωπο Climber',
        ':person:'
    ],
    '🏇{{skin_tone}}': [
        'Ιπποδρομίες',
        ':horse_racing:',
        'Αγώνας Άλογα',
        'Jockey'
    ],
    '⛷{{skin_tone}}‍️': [
        'Σκιέρ',
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
        'Γκολφ Γυναίκας',
        ':woman_golfer:',
        ':golfer:',
        ':woman:'
    ],
    '🏌️{{skin_tone}}': [
        'Πρόσωπο Golfer',
        ':person_golfer:',
        ':golfer:',
        ':person:'
    ],
    '🏄{{skin_tone}}‍♂️': [
        'Άνθρωπος Surfer',
        ':man_surfer:',
        ':surfer:',
        ':man:'
    ],
    '🏄{{skin_tone}}‍♀️': [
        'Surfer Γυναίκας',
        ':woman_surfer:',
        ':surfer:',
        ':woman:'
    ],
    '🏄{{skin_tone}}': [
        'Πρόσωπο Surfer',
        ':person_surfer:',
        ':surfer:',
        ':person:'
    ],
    '🚣{{skin_tone}}‍♂️': [
        'Άνθρωπος Κωπηλασία Σκάφος',
        ':man_rowing_boat:',
        ':rowing_boat:',
        ':man:'
    ],
    '🚣{{skin_tone}}‍♀️': [
        'Γυναικείο Σκάφος Κωπηλασίας',
        ':woman_rowing_boat:',
        ':rowing_boat:',
        ':woman:'
    ],
    '🚣{{skin_tone}}': [
        'Σκάφος Που Κωπηλατεί',
        ':person_rowing_boat:',
        ':rowing_boat:',
        ':person:'
    ],
    '🏊{{skin_tone}}‍♂️': [
        'Κολύμβηση Ανθρώπου',
        ':man_swimming:',
        ':swimming:',
        'Κολυμβητής Άνθρωπος',
        ':man:'
    ],
    '🏊{{skin_tone}}‍♀️': [
        'Κολύμβηση Γυναίκας',
        ':woman_swimming:',
        ':swimming:',
        'Κολυμβητής Γυναίκας',
        ':woman:'
    ],
    '🏊{{skin_tone}}': [
        'Κολύμβηση Άτομου',
        ':person_swimming:',
        ':swimming:',
        'Κολυμβητής Προσώπου',
        ':person:'
    ],
    '⛹{{skin_tone}}‍️‍♂️': [
        'Άνθρωπος Αναπήδηση Μπάλα',
        ':man_bouncing_ball:',
        ':bouncing_ball:',
        'Παίκτης Του Man Μπάσκετ',
        ':man:'
    ],
    '⛹️{{skin_tone}}‍♀️': [
        'Γυναίκα Αναπήδηση Μπάλα',
        ':woman_bouncing_ball:',
        ':boucing_ball:',
        'Γυναίκα Παίκτης Μπάσκετ',
        ':woman:'
    ],
    '⛹️{{skin_tone}}': [
        'Πρόσωπο Αναπήδηση Μπάλα',
        ':person_bouncing_ball:',
        ':boucing_ball:',
        'Παίκτης Μπάσκετ Άτομου',
        ':person:'
    ],
    '🏋️{{skin_tone}}‍♂️': [
        'Άνθρωπος Ανύψωση Βάρη',
        ':man_lifting_weights:',
        ':lifting_weights:',
        'Άνθρωπος Weightlifter',
        ':man:'
    ],
    '🏋️{{skin_tone}}‍♀️': [
        'Γυναίκα Ανύψωση Βάρη',
        ':woman_lifting_weights:',
        ':lifting_weights:',
        'Γυναίκα Weightlifter',
        ':woman:'
    ],
    '🏋️{{skin_tone}}': [
        'Άτομο Ανύψωσης Βάρη',
        ':person_lifting_weights:',
        ':lifting_weights:',
        'Άτομο Weightlifter',
        ':person:'
    ],
    '🚴{{skin_tone}}‍♂️': [
        'Ποδηλασία Ανθρώπου',
        ':man_biking:',
        ':biking:',
        'Άνθρωπος Ποδηλάτης',
        'Αρσενικός Ποδηλάτης',
        ':man:'
    ],
    '🚴{{skin_tone}}‍♀️': [
        'Γυναίκα Ποδηλασία',
        ':woman_biking:',
        ':biking:',
        'Γυναίκα, Κυκλαδίτης',
        'Θηλυκός Κυκλαδίτης',
        ':woman:'
    ],
    '🚴{{skin_tone}}': [
        'Ποδηλασία Πρόσωπο',
        ':person_biking:',
        ':biking:',
        'Πρόσωπο Ποδηλασίας',
        'Πρόσωπο Ποδηλασίας',
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
        'Γυναίκα Ποδηλασία Στο Βουνό',
        ':woman_mountain_bike:',
        ':mountain_bike:',
        'Γυναίκα Βουνό Ποδήλατο',
        ':woman:'
    ],
    '🚵{{skin_tone}}': [
        'Άτομο Ορεινή Ποδηλασία',
        ':person_mountain_bike:',
        ':mountain_bike:',
        'Person Mountain Biker',
        ':person:'
    ],
    '🤸{{skin_tone}}‍♂️': [
        'Άνθρωπος Cartwheeling',
        ':man_cartwheeling:',
        ':cartwheeling:',
        'Άνθρωπος Κάνοντας Τροχός',
        ':man:'
    ],
    '🤸{{skin_tone}}‍♀️': [
        'Γυναίκα Cartwheeling',
        ':woman_cartwheeling:',
        ':cartwheeling:',
        'Γυναίκα Να Κάνει Τροχό',
        ':woman:'
    ],
    '🤸{{skin_tone}}': [
        'Cartwheeling Πρόσωπο',
        ':person_cartwheeling:',
        ':cartwheeling:',
        'Άτομο Που Κάνει Τροχό',
        ':person:'
    ],
    '🤼‍♂️': [
        'Άνδρες Πάλη',
        ':men_wrestling:',
        ':wrestling:',
        'Πάλη',
        'παλαιστές',
        ':man:'
    ],
    '🤼‍♀️': [
        'Γυναίκες Πάλη',
        ':women_wrestling:',
        ':wrestling:',
        'Πάλη',
        'παλαιστές',
        ':woman:'
    ],
    '🤼': [
        'Άνθρωποι Πάλη',
        ':people_wrestling:',
        ':wrestling:',
        'Πάλη',
        'παλαιστές',
        ':person:'
    ],
    '🤽{{skin_tone}}‍♂️': [
        'Άνθρωπος Παίζοντας Πόλο Νερού',
        ':man_playing_water_polo:',
        ':playing_water_polo:',
        ':man:'
    ],
    '🤽{{skin_tone}}‍♀️': [
        'Γυναίκα Που Παίζει Πόλο Νερού',
        ':woman_playing_water_polo:',
        ':playing_water_polo:',
        ':woman:'
    ],
    '🤽{{skin_tone}}': [
        'Πρόσωπο Παίζοντας Υδάτινο Πόλο',
        ':person_playing_water_polo:',
        ':playing_water_polo:',
        ':person:'
    ],
    '🤾{{skin_tone}}‍♂️': [
        'Άνθρωπος Παίζοντας Χάντμπολ',
        ':man_playing_handball:',
        ':playing_handball:',
        ':man:'
    ],
    '🤾{{skin_tone}}‍♀️': [
        'Γυναίκα Παίζοντας Χάντμπολ',
        ':woman_playing_handball:',
        ':playing_handball:',
        ':woman:'
    ],
    '🤾{{skin_tone}}': [
        'Άτομο Παίζοντας Χάντμπολ',
        ':person_playing_handball:',
        ':playing_handball:',
        ':person:'
    ],
    '🤹{{skin_tone}}‍♂️': [
        'Άνθρωπος Juggling',
        ':man_juggling:',
        ':juggling:',
        'Αρσενικό Juggler',
        ':man:'
    ],
    '🤹{{skin_tone}}‍♀️': [
        'Γυναίκα Juggling',
        ':woman_juggling:',
        ':juggling:',
        'Θηλυκό Juggler',
        ':woman:'
    ],
    '🤹{{skin_tone}}': [
        'Πρόσωπο Juggling',
        ':person_juggling:',
        ':juggling:',
        'Πρόσωπο Juggler',
        ':person:'
    ],
    '🧘{{skin_tone}}‍♂️': [
        'Ο άνθρωπος στη θέση Lotus',
        ':man_lotus_position:',
        ':lotus_position:',
        'Διαλογισμός',
        'Zen',
        'Σταυροειδής',
        'Γιόγκα',
        ':man:'
    ],
    '🧘{{skin_tone}}‍♀️': [
        'Γυναίκα στη θέση του Lotus',
        ':woman_lotus_position:',
        ':lotus_position:',
        'Διαλογισμός',
        'Zen',
        'Σταυροειδής',
        'Γιόγκα',
        ':woman:'
    ],
    '🧘{{skin_tone}}': [
        'Πρόσωπο στη θέση του Lotus',
        ':person_lotus:_position',
        ':lotus_position:',
        'Διαλογισμός',
        'Zen',
        'Σταυροειδής',
        'Γιόγκα',
        ':person:'
    ],
    '🏃{{skin_tone}}‍♂️': [
        'Ο Άνθρωπος Εκτελείται',
        ':man_running:',
        ':running:',
        ':man:'
    ],
    '🏃{{skin_tone}}‍♀️': [
        'Γυναίκα Εκτελείται',
        ':woman_running:',
        ':running:',
        ':woman:'
    ],
    '🏃{{skin_tone}}': [
        'Άτομο Που Εκτελείται',
        ':person_running:',
        ':running:',
        ':person:'
    ],
    '🕺{{skin_tone}}': [
        'Άνθρωπος Χορεύοντας',
        ':man_dancing:',
        ':dancing:',
        ':man:'
    ],
    '💃{{skin_tone}}': [
        'Χορός Γυναίκας',
        ':woman_dancing:',
        ':dancing:',
        ':woman:'
    ],
    '🤺': [
        'Ξιφασκία Προσώπου',
        ':person_fencing:',
        'Τοξοβόλος',
        ':fencing:'
    ],
    '🏆': [
        'Τρόπαιο',
        ':trophy:',
        'Πρωτάθλημα',
        'Νικητής',
        ':gold:',
        ':yellow:'
    ],
    '🏅': [
        'Μετάλλιο Αθλητισμού',
        ':sports_medal:',
        ':medal:',
        ':gold:',
        ':yellow:'
    ],
    '🥇': [
        'Μετάλλιο 1ης Θέσης',
        ':first_place_medal:',
        ':gold_medal:',
        'Μετάλλιο Πρώτης Θέσης',
        'Χρυσό Μετάλλιο',
        ':yellow:',
        ':gold:'
    ],
    '🥈': [
        '2η Θέση Μετάλλιο',
        ':second_place_medal:',
        ':silver_medal:',
        'Μετάλλιο Δεύτερης Θέσης',
        'Ασημένιο Μετάλλιο',
        ':gray:',
        ':grey:',
        ':silver:'
    ],
    '🥉': [
        '3η Θέση Μετάλλιο',
        ':third_place_medal:',
        ':bronze_medal:',
        'Τρίτο Μετάλλιο',
        'Χάλκινο Μετάλλιο',
        ':brown:',
        ':bronze:'
    ],
    '⚽': [
        'Ποδόσφαιρο',
        ':football:',
        'Ποδόσφαιρο',
        ':white:',
        ':black:'
    ],
    '⚾': [
        'Μπέιζμπολ',
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
        'Μπάσκετ',
        ':basketball:',
        ':orange:',
        'Μπάσκετ και Hoop'
    ],
    '🏐': [
        'Βόλεϊ',
        ':volleyball:',
        ':white:'
    ],
    '🏈': [
        'Αμερικάνικο Ποδόσφαιρο',
        ':american_football:',
        'Ποδόσφαιρο',
        'Gridiron',
        'Superbowl',
        ':brown:'
    ],
    '🏉': [
        'Ποδόσφαιρο Ράγκμπι',
        ':rugby:',
        'Ποδόσφαιρο',
        'Πρωτάθλημα',
        'Ράγκμπι',
        'Ένωση'
    ],
    '🎾': [
        'Τένις',
        ':tennis:',
        ':ball:',
        'Μπάλα',
        'Ρακέτα',
        'Λάκκα',
        ':yellow:'
    ],
    '🥏': [
        'Δίσκος Που Πετάνε',
        ':flying_disk:',
        'Frisbee'
    ],
    '🎳': [
        'Μπόουλινγκ',
        ':bowling:',
        'Καρφίτσες',
        'Πατάτες',
        'Δέκα Pin Μπόουλινγκ'
    ],
    '🏏': [
        'Κρίκετ',
        ':cricket:',
        'Νυχτερίδα',
        'Μπάλα'
    ],
    '🏑': [
        'Πεδίο Χόκεϊ',
        ':field_hockey:',
        'Μπάλα',
        'Ραβδί'
    ],
    '🏒': [
        'Χόκεϊ Στον Πάγο',
        ':ice_hockey:',
        'Μπάλα',
        'Ραβδί'
    ],
    '🥍': [
        'Λακρόζη',
        ':lacrosse:',
        'Μπάλα',
        'Ραβδί',
        ':red:'
    ],
    '🏓': [
        'Ping Pong',
        ':ping_pong:',
        ':table_tennis:',
        'Επιτραπέζιο Τένις',
        'Μπάλα',
        'Paddle'
    ],
    '🏸': [
        'Badminton',
        ':badminton:',
        'Κλείσιμο',
        'Λάκκα'
    ],
    '🥊': [
        'Γάντι Πυγμαχίας',
        ':boxing_glove:',
        ':red:'
    ],
    '🥋': [
        'Πολεμικές Τέχνες Ομοιόμορφη',
        ':martial_arts_uniform:',
        ':judo:',
        ':karate:',
        ':kung_fu:',
        'Τζούντο',
        'Καράτε',
        'Kung fu'
    ],
    '⛳': [
        'Σημαία στην Τρύπα',
        ':flag_in_hole:',
        ':golf_flag:',
        'Σημαία Γκολφ'
    ],
    '⛸️': [
        'Σελάχι Πάγου',
        ':ice_skate:',
        'Πατινάζ'
    ],
    '🎣': [
        'Αλιεία',
        ':fishing:',
        'Πολωνός',
        'Ψάρια',
        'Καλάμι Ψαρέματος'
    ],
    '🎽': [
        'Τρέξιμο Πουκάμισο',
        ':running_shirt:',
        'Singlet',
        'Sash'
    ],
    '🎿': [
        'Σκι',
        ':skis:',
        'Σκι',
        'Εκκίνηση'
    ],
    '🛷': [
        'Σφραγισμένο',
        ':sled:'
    ],
    '🥌': [
        'Πέτρα Κέρλινγκ',
        ':curling_stone:'
    ],
    '🎯': [
        'Απευθείας Χτύπημα',
        ':direct_hit:',
        'Τοξοβολία',
        'Bullseye',
        'Βελάκια'
    ],
    '🎱': [
        'Πισίνα 8 Μπάλα',
        ':pool_8_ball:',
        'Μπάλα Cue',
        'Σνούκερ',
        'Μπιλιάρδο',
        ':black:'
    ],
    '🎮': [
        'Ελεγκτής Παιχνιδιών Βίντεο',
        ':video_game_controller:',
        ':playstation:',
        ':xbox:',
        'Playstation',
        'Xbox',
        'Gamepad',
        'Wii U'
    ],
    '♟️': [
        'Πιόνι Μαύρου Σκάκι',
        ':black_chess_pawn:',
        ':black:'
    ],
    '🏹': [
        'Τόξο και βέλος',
        ':arch:',
        'Arch'
    ],
    '🥅': [
        'Δίκτυο Στόχου',
        ':goal_net:'
    ],
    '🀄': [
        'Κόκκινος Δράκος Mahjong',
        ':mahjong:',
        'Mahjong',
        'Mahjong Tile',
        '中',
        'Κόκκινος Δράκος Mahjong Πλακάκια'
    ],
    '🎴': [
        'Κάρτες Παίζοντας Λουλούδι',
        ':flower_playing_cards:',
        'Τράπουλα Με Φύλλα',
        'Hanafuda',
        'Hwatu',
        'Κάρτες Αναπαραγωγής'
    ]
};
/*travel and places*/
emojis_language[lang][9] = {
    '🚂': [
        'Ατμομηχανή',
        ':steam_train:',
        'Τρένο Ατμού',
        'Σιδηροδρομική Μηχανή'
    ],
    '🚃': [
        'Σιδηροδρομικό Αυτοκίνητο',
        ':railway_car:',
        'Railcar',
        'Σιδηροδρομικό Αυτοκίνητο',
        'Σιδηροδρομικές Μεταφορές',
        'Σιδηροδρομικό Βαγόνι'
    ],
    '🚄': [
        'Τρένο Υψηλής Ταχύτητας',
        ':high_speed_train:'
    ],
    '🚅': [
        'Τρένο Κουκκίδων',
        ':bullet_train:',
        'Shinkansen',
        'Τρένο υψηλής ταχύτητας με σφαίρα μύτης'
    ],
    '🚆': [
        'Τρένο',
        ':train:'
    ],
    '🚇': [
        'Υπόγεια',
        ':underground:',
        'Σωλήνας',
        'Μετρό',
        'Μετρό'
    ],
    '🚈': [
        'Ελαφριά Σιδηροδρομική Γραμμή',
        ':light_rail:',
        'Τρένο'
    ],
    '🚊': [
        'Τραμ',
        ':tram:'
    ],
    '🚝': [
        'Μονοκύμινο',
        ':monorail:',
        'Τρένο'
    ],
    '🚞': [
        'Σιδηρόδρομος Του Βουνού',
        ':mountain_railway:',
        'Funicular',
        'Τρένο Και Βουνό'
    ],
    '🚋': [
        'Αυτοκίνητο Τραμ',
        ':tram_car:'
    ],
    '🚌': [
        'Λεωφορείο',
        ':bus:',
        'Προπονητής'
    ],
    '🚍': [
        'Εισερχόμενο Λεωφορείο',
        ':front_of_bus:',
        'Μπροστά Από Λεωφορείο'
    ],
    '🚎': [
        'Trolleybus',
        ':trolleybus:',
        'Ηλεκτρικό Λεωφορείο'
    ],
    '🚐': [
        'Minibus',
        ':minibus:',
        'Minivan',
        'Άνθρωποι-Mover'
    ],
    '🚑': [
        'Ασθενοφόρο',
        ':ambulance:'
    ],
    '🚒': [
        'Μηχανή Φωτιάς',
        ':fire_engine:',
        'Πυροσβεστικό Τμήμα',
        'Πυροσβεστικό Φορτηγό'
    ],
    '🚓': [
        'Αυτοκίνητο Αστυνομίας',
        ':police_car:',
        'Αυτοκίνητο Cop',
        'Πλευρά Της Αστυνομίας Αυτοκίνητο'
    ],
    '🚔': [
        'Επερχόμενο Αστυνομικό Αυτοκίνητο',
        ':front_of_police_car:',
        'Μπροστά της Αστυνομίας Αυτοκίνητο',
        'Αυτοκίνητο Cop'
    ],
    '🚕': [
        'Ταξί',
        ':taxi:',
        'Ταξί Της Νέας Υόρκης',
        'Πλευρά Ταξί'
    ],
    '🚖': [
        'Ταξί',
        ':front_of_taxi:',
        'Εισερχόμενα Ταξί',
        'Μπροστά από ταξί'
    ],
    '🚗': [
        'Αυτοκίνητο',
        ':car:',
        'Κόκκινο Αυτοκίνητο',
        'Πλευρά Αυτοκινήτου',
        'Αυτοκίνητο'
    ],
    '🚘': [
        'Εισερχόμενο Αυτοκίνητο',
        ':front_of_car:',
        'Κόκκινο Αυτοκίνητο',
        'Μπροστά Του Αυτοκινήτου'
    ],
    '🚚': [
        'Φορτηγό Παράδοσης',
        ':lorry:',
        'Κοκκώδης'
    ],
    '🚛': [
        'Αρθρωτό Κορί',
        ':articulated_lorry:',
        'Πράσινο Φορτηγό'
    ],
    '🚜': [
        'Τρακτέρ',
        ':tractor:',
        'Αγρόκτημα'
    ],
    '🛻': [
        'Φορτηγό Παραλαβής',
        ':pickup_truck:'
    ],
    '🏎️': [
        'Αγωνιστικό Αυτοκίνητο',
        ':racing_car:',
        'F1',
        'Τύπος Ένα',
        'Αγώνας Αυτοκίνητο'
    ],
    '🏍️': [
        'Μοτοσικλέτα',
        ':motorbike:',
        'Μοτοσικλέτα'
    ],
    '🛵': [
        'Μοτέρ Σκούτερ',
        ':motor_scooter:',
        'Vespa',
        'Μοτέρ Ποδήλατο',
        'Μοτέρ Ποδήλατο'
    ],
    '🛺': [
        'Αυτόματο Rickshaw',
        ':auto_rickshaw:',
        'Tuk Tuk'
    ],
    '🚲': [
        'Ποδήλατο',
        ':bike:',
        'Ποδήλατο'
    ],
    '🛴': [
        'Kick Scooter',
        ':kick_scooter:'
    ],
    '⛵': [
        'Ιστιοφόρο',
        ':sailboat:',
        'Dinghy',
        'Σκάφος'
    ],
    '🚤': [
        'Ταχύπλοο',
        ':speedboat:',
        'Μηχανοκίνητο',
        'Powerboat'
    ],
    '🛳️': [
        'Επιβατικό Πλοίο',
        ':passenger_ship:'
    ],
    '⛴️': [
        'Πλοία',
        ':ferry:'
    ],
    '🛥️': [
        'Μηχανοκίνητο Σκάφος',
        ':motor_boat:'
    ],
    '🚢': [
        'Πλοίο Κρουαζιέρας',
        ':cruise_ship:'
    ],
    '✈️': [
        'Αεροπλάνο',
        ':airplane:',
        'Aeroplane'
    ],
    '🛩️': [
        'Μικρό Αεροπλάνο',
        ':small_airplane:',
        'Μικρό Αεροπλάνο'
    ],
    '🚁': [
        'Ελικόπτερο',
        ':helicopter:'
    ],
    '🚟': [
        'Αναστολή Σιδηροδρόμων',
        ':suspension_railway:'
    ],
    '🚠': [
        'Ορεινό Συρματόσχοινα',
        ':mountain_cableway:'
    ],
    '🚡': [
        'Εναέρια Τραμ',
        ':aerial_tramway:',
        'Καλώδιο Αυτοκινήτου',
        'Gondola',
        'Ροδόπη'
    ],
    '🛰️': [
        'Δορυφόρος',
        ':satellite:'
    ],
    '🚀': [
        'Πύραυλος',
        ':rocket:',
        'Διαστημική Μεταφορά'
    ],
    '🛸': [
        'Πετώντας Πιατάκι',
        ':flying_saucer:',
        'UFO'
    ],
    '🚉': [
        'Σιδηροδρομικός Σταθμός',
        ':train_station:',
        'Πλατφόρμα Εκπαίδευσης'
    ],
    '🚏': [
        'Διακοπή Λεωφορείου',
        ':bus_stop:'
    ],
    '🛣️': [
        'Αυτοκινητόδρομος',
        ':motorway:',
        'Δρόμος',
        'Αυτοκινητόδρομος',
        'Διαπολιτισμός'
    ],
    '🛤️': [
        'Σιδηροδρομικό Κομμάτι',
        ':railway_track:'
    ],
    '🛫': [
        'Αναχώρηση Αεροπλάνου',
        ':airplane_departure:',
        'Απογείωση'
    ],
    '🛬': [
        'Άφιξη Αεροπλάνου',
        ':airplane_arrival:',
        'Φτάνοντας Αεροπλάνο',
        'Προσγείωση'
    ],
    '🗾': [
        'Χάρτης για Ιαπωνία',
        ':map_of_japan:'
    ],
    '⛰️': [
        'Βουνό',
        ':mountain:'
    ],
    '🏔️': [
        'Χιονισμένο Βουνό',
        ':snow_capped_mountain:'
    ],
    '🌋': [
        'Ηφαίστειο',
        ':volcano:'
    ],
    '🗻': [
        'Φόρτωση Fuji',
        ':mount_fuji:',
        'Fuji-san'
    ],
    '🏕️': [
        'Κατασκήνωση',
        ':camping:',
        'Κάμπινγκ'
    ],
    '🏖️': [
        'Παραλία Με Ομπρέλα',
        ':beach_with_umbrella:'
    ],
    '🏜️': [
        'Desert',
        ':desert:'
    ],
    '🏝️': [
        'Νήσος Της Ερήμου',
        ':desert_island:'
    ],
    '🏞️': [
        'Εθνικό Πάρκο',
        ':national_park:'
    ],
    '🏟️': [
        'Στάδιο',
        ':stadium:',
        'Grandstand',
        'Αθλητικό Στάδιο'
    ],
    '🏛️': [
        'Κλασικό Κτίριο',
        ':classical_building:',
        'Ελληνικά',
        'Ρώμη'
    ],
    '🏗️': [
        'Κατασκευή Κτιρίων',
        ':building_construction:',
        'Γερανός'
    ],
    '🏘️': [
        'Σπίτια Κτίρια',
        ':houses_building:',
        'Ομάδα κατοικιών'
    ],
    '🏚️': [
        'Derelict Σπίτι Κτίριο',
        ':old_house:',
        'Εγκαταλελειμμένο Σπίτι',
        'Παλιό Σπίτι',
        'Στοιχειωμένο Σπίτι'
    ],
    '🏠': [
        'Αρχική',
        ':home:',
        'Κτίριο Κατοικίας'
    ],
    '🏡': [
        'Σπίτι Με Κήπο',
        ':house_with_garden:',
        'Σπίτι Και Δέντρο'
    ],
    '🏢': [
        'Κτίριο Γραφείου',
        ':office_building:',
        'Κτίριο Πόλης',
        'High-Rise Κτίριο'
    ],
    '🏣': [
        'Ιαπωνικά Ταχυδρομεία',
        ':japanese_post_office:',
        'Ιαπωνικό Ταχυδρομικό Μάρκο'
    ],
    '🏤': [
        'Ταχυδρομείο',
        ':european_post_office:',
        'Ευρωπαϊκό Ταχυδρομείο'
    ],
    '🏥': [
        'Νοσοκομείο',
        ':hospital:',
        'ER',
        'A&E',
        'Δωμάτιο Έκτακτης Ανάγκης',
        'Ατύχημα Και Έκτακτης Ανάγκης',
        'Ερυθρός Σταυρός',
        'Ιατρική'
    ],
    '🏦': [
        'Τράπεζα',
        ':bank:',
        'BK',
        'Bakkureru',
        'Υποκατάστημα Τράπεζας',
        'Bakkureru'
    ],
    '🏨': [
        'Ξενοδοχείο',
        ':hotel:',
        'Διαμονή',
        'H Κτίριο'
    ],
    '🏩': [
        'Ξενοδοχείο Αγάπης',
        ':love_hotel:',
        'Αγάπη Heart Hotel'
    ],
    '🏪': [
        'Κατάστημα Ευκολίας',
        ':convenience_store:',
        '24ωρο Κατάστημα',
        '7-Έντεκα',
        'Κατάστημα Γωνιών',
        'Kwik-E-Mart'
    ],
    '🏫': [
        'Σχολείο',
        ':school:',
        'Πύργος Ρολογιού',
        'Στοιχειώδη Υψηλή Μέση'
    ],
    '🏬': [
        'Τμήμα Καταστήματος',
        ':department_store:',
        'Εμπορικό Κέντρο',
        'Κατάστημα'
    ],
    '🏭': [
        'Εργοστάσιο',
        ':factory:',
        'Βιομηχανική',
        'Βιομηχανία',
        'Ρύπανση',
        'Κάπνισμα'
    ],
    '🏯': [
        'Ιαπωνικό Κάστρο',
        ':japanese_castle:',
        'Οχυρό'
    ],
    '🏰': [
        'Ευρωπαϊκό Κάστρο',
        ':european_castle:',
        'Turrets'
    ],
    '💒': [
        'Καρδιά Εκκλησίας',
        ':church_heart:',
        'Γάμος Της Εκκλησίας',
        'Γάμος'
    ],
    '🗼': [
        'Πύργος Του Τόκιο',
        ':tokyo_tower:',
        'Πύργος Του Άιφελ',
        'Κόκκινος Πύργος'
    ],
    '🗽': [
        'Άγαλμα της ελευθερίας',
        ':statue_of_liberty:',
        'Νέα Υόρκη'
    ],
    '⛪': [
        'Κτίριο Εκκλησίας',
        ':church_building:',
        'Σταυρός'
    ],
    '🕌': [
        'Τζαμί',
        ':mosque:',
        'Κυμαινόμενη Στέγη',
        'Minaret'
    ],
    '🛕': [
        'Ινδουιστικός Ναός',
        ':hindu_temple:'
    ],
    '🕍': [
        'Συναγωγή',
        ':synagogue:',
        'Εβραϊκή',
        'Synagog',
        'Ναός'
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
        'Ομπρέλα στο έδαφος',
        ':beach_umbrella:',
        'Ομπρέλα Παραλίας'
    ],
    '🌄': [
        'Ανατολή Ηλίου Πάνω Από Βουνά',
        ':sunrise_over_mountains:',
        'Πρωί',
        'Ανατολή'
    ],
    '🌅': [
        'Ανατολή',
        ':sunrise:',
        ':sunset:',
        'Ήλιος'
    ],
    '🌆': [
        'Αστικό τοπίο στο Dusk',
        ':cityscape_at_dusk:',
        'Πορτοκαλί Ουρανό Σίτι',
        'Σούρουπο Πόλη'
    ],
    '🌇': [
        'Ηλιοβασίλεμα Πάνω Από Κτίρια',
        ':sunset_over_buildings:',
        'City Sunset'
    ],
    '🌃': [
        'Νύχτα με αστέρια',
        ':night_with_stars:',
        'Πόλη Τη Νύχτα',
        'Έναστρο Νύχτα'
    ],
    '🗿': [
        'Moai',
        ':moai:',
        'Άγαλμα Του Πάσχα',
        'Human Rock Carving',
        'Άγαλμα Moyai'
    ],
    '🌠': [
        'Σκοποβολή Αστέρι',
        ':shooting_star:',
        'Όταν Επιθυμείτε Ένα Αστέρι',
        'Μετεωροειδές'
    ],
    '🌌': [
        'Γαλακτώδης Τρόπος',
        ':milky_way:',
        'Γαλαξίας',
        'Νυχτερινός Ουρανός',
        'Κενό',
        'Αστέρια',
        'Σύμπαν'
    ],
    '🎑': [
        'Τελετή Προβολής Σελήνης',
        ':moon_viewing_ceremony:',
        'Γρασίδι, Dumplings και Σελήνη',
        'Συγκομιδή Σελήνης',
        'Φεστιβάλ Μέσου Φθινοπώρου',
        'Tsukimi'
    ],
    '🛖': [
        'Καλύβα',
        ':hut:'
    ],
    '🎢': [
        'Roller Coaster',
        ':roller_coaster:',
        'Rollercoaster',
        'Θεματικό Πάρκο'
    ],
    '🛝': [
        'Σλάιντ Παιδικής Χαράς',
        ':playground_slide:',
        'Μωρό',
        'Παιδιά'
    ]
};
/*technologies (smartphones, laptops, etc.) and office*/
emojis_language[lang][10] = {
    '⌚': [
        'Παρακολούθηση',
        ':watch:',
        'Timepiece',
        'Apple Watch'
    ],
    '⏰': [
        'Ξυπνητήρι',
        ':alarm_clock:'
    ],
    '⏱️': [
        'Χρονόμετρο',
        ':stopwatch:'
    ],
    '⏲️': [
        'Ρολόι Χρονισμού',
        ':timer_clock:'
    ],
    '🕰️': [
        'Ρολόι Mantelpiece',
        ':mantelpiece_clock:'
    ],
    '🧭': [
        'Πυξίδα',
        ':compass:'
    ],
    '🕹️': [
        'Χειριστήριο',
        ':joystick:'
    ],
    '🎙️': [
        'Στούντιο Μικρόφωνο',
        ':studio_microphone:'
    ],
    '🎚️': [
        'Ρυθμιστικό Επιπέδου',
        ':level_slider:'
    ],
    '🎛️': [
        'Πλήκτρα Ελέγχου',
        ':control_knobs:'
    ],
    '📻': [
        'Ραδιόφωνο',
        ':radio:',
        'Ψηφιακό Ραδιόφωνο',
        'Ασύρματο'
    ],
    '📱': [
        'Κινητό Τηλέφωνο',
        ':mobile_phone:',
        'Έξυπνο',
        'iPhone',
        'Κινητό Τηλέφωνο',
        'Device'
    ],
    '📲': [
        'Κινητό τηλέφωνο με δεξιό βέλος στα αριστερά',
        ':phone_call:',
        'Κλήση Τηλεφώνου',
        'Δειγματοληψία Σε Τηλέφωνο'
    ],
    '☎️': [
        'Μαύρο Τηλέφωνο',
        ':rotary_phone:',
        'Περιστροφικό Τηλέφωνο',
        ':red:'
    ],
    '📞': [
        'Δέκτης Τηλεφώνου',
        ':phone:',
        'Handset',
        'Τηλέφωνο',
        ':black:',
        'Device'
    ],
    '📟': [
        'Βομβητής',
        ':pager:',
        'Μπισκότα',
        'Bleeper'
    ],
    '📠': [
        'Μηχανή Φαξ',
        ':fax_machine:',
        'Facsimile',
        'Φαξ'
    ],
    '🔋': [
        'Μπαταρία',
        ':battery:',
        'Αντιαεροπορική Μπαταρία',
        'Μπαταρία Τηλεφώνου'
    ],
    '🔌': [
        'Ηλεκτρικό Βούλωμα',
        ':power_cable:',
        'AC Adaptor',
        'Καλώδιο Ισχύος',
        'Σύνδεσμος Ισχύος'
    ],
    '💻': [
        'Φορητό',
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
        'Υπολογιστής Επιφάνειας Εργασίας',
        ':desktop_computer:',
        ':computer:',
        'iMac',
        'PC',
        'Device'
    ],
    '🖨️': [
        'Εκτυπωτές',
        ':printer:',
        'Device'
    ],
    '⌨️': [
        'Computer Keyboard',
        ':keyboard:',
        ':computer_keyboard:'
    ],
    '🖱️': [
        'Ποντίκι Υπολογιστή',
        ':computer_mouse:',
        'Τρεις Κουμπί Ποντίκι'
    ],
    '🖲️': [
        'Trackball',
        ':trackball:'
    ],
    '💽': [
        'Δίσκος Υπολογιστή',
        ':blu_ray:',
        'Minidisc',
        'CD',
        'DVD',
        'Blu-ray',
        'BD'
    ],
    '💾': [
        'Δίσκος Δισκέτας',
        ':floppy_disk:',
        '3.5′′ Δίσκος',
        'Δίσκος'
    ],
    '💿': [
        'Οπτικός Δίσκος',
        ':cd:',
        'CD',
        'CD-ROM',
        'Συμπαγής Δίσκος'
    ],
    '📀': [
        'DVD',
        'DVD- ROM',
        ':dvd:',
        'Βίντεο DVD'
    ],
    '🎥': [
        'Κάμερα Ταινίας',
        ':movie_camera:',
        'Φωτογραφική Μηχανή Κινηματογράφου',
        'Χόλιγουντ',
        'Ταινία'
    ],
    '🎞️': [
        'Πλαίσια Κινηματογράφου',
        ':film_frames:'
    ],
    '📽️': [
        'Προβολέας Κινηματογράφου',
        ':film_projector:'
    ],
    '📺': [
        'Τηλεόραση',
        ':tv:',
        'Τηλεόραση'
    ],
    '📷': [
        'Ψηφιακή Κάμερα',
        ':digital_camera:'
    ],
    '📸': [
        'Κάμερα με Flash',
        ':camera_flash:'
    ],
    '📹': [
        'Κάμερα Βίντεο',
        ':video_camera:',
        'Βιντεοκάμερα'
    ],
    '📼': [
        'Videocassette',
        ':vhs:',
        'ΙΑΣ',
        'VCR',
        'Βιντεοκασέτα',
        'Videocassette'
    ],
    '💳': [
        'Πιστωτική Κάρτα',
        ':credit_card:',
        'Χρεωστική Κάρτα',
        'AMEX',
        'Diners Club',
        'American Express',
        'Mastercard',
        'Κάρτα VISA'
    ],
    '📧': [
        'E-mail',
        ':email:',
        'E-mail'
    ],
    '📨': [
        'Εισερχόμενος Φάκελος',
        ':incoming_envelope:',
        'Φάκελος Με Γραμμές',
        'Γρήγορος Φάκελος'
    ],
    '📩': [
        'Φάκελος με κάτω βέλος πάνω από',
        ':insert_in_envelope:',
        'Κάτω Βέλος Φάκελος',
        'Εισαγωγή Σε Φάκελο'
    ],
    '📤': [
        'Δίσκος Εξερχομένων',
        ':outbox_tray:'
    ],
    '📥': [
        'Τροφοδότης Εισερχομένων',
        ':inbox_tray:'
    ],
    '📮': [
        'Postbox',
        ':postbox:'
    ],
    '📁': [
        'Φάκελος Αρχείου',
        ':file_folder:',
        'Φάκελος',
        'Κατάλογος',
        'Κλειστός Φάκελος Αρχείου'
    ],
    '📂': [
        'Άνοιγμα Φακέλου Αρχείων',
        ':open_file_folder:',
        'Κατάλογος'
    ],
    '🗂️': [
        'Διαχωριστικά Ευρετηρίου Κάρτας',
        ':card_index_dividers:'
    ],
    '📅': [
        'Ημερολόγιο',
        ':calendar:',
        '17 Ιουλίου',
        'Παγκόσμια Ημέρα Emoji'
    ],
    '🗓️': [
        'Σπείρα Ημερολόγιο Pad',
        ':spiral_calendar_pad:'
    ],
    '📆': [
        'Ημερολόγιο Tear-Off',
        ':day_calendar:',
        'Ημερολόγιο Ημέρας',
        'Ημερολόγιο Γραφείου'
    ],
    '📈': [
        'Αύξηση Γραφήματος',
        ':increasing_chart:',
        'Θετικό Γράφημα',
        'Πάνω Γράφημα Σημείωσης',
        'Γράφημα με τάση προς τα πάνω'
    ],
    '📉': [
        'Μείωση Γραφήματος',
        ':decreasing_chart:',
        'Αρνητικό Γράφημα',
        'Κάτω Από Το Γράφημα',
        'Διάγραμμα με τάση προς τα κάτω'
    ],
    '📊': [
        'Γράφημα Ράβδων',
        ':bar_chart:',
        'Γράφημα Ράβδων'
    ],
    '📌': [
        'Pushpin',
        ':pushpin:',
        'Thumb Tack',
        ':red:'
    ],
    '📋': [
        'Πρόχειρο',
        ':clipboard:'
    ],
    '📍': [
        'Στρογγυλό Pushpin',
        ':round_pushpin:',
        'Απορρίφθηκε Pin',
        'Καρφίτσωμα Χάρτη',
        'Καρφίτσα',
        'Κόκκινη Καρφίτσα',
        ':red:'
    ],
    '📎': [
        'Paperclip',
        ':paperclip:',
        'Αποκοπή'
    ],
    '📏': [
        'Ευθύς Κανόνας',
        ':straight_ruler:'
    ],
    '📐': [
        'Τριγωνικός Κυβερνήτης',
        ':triangular_ruler:',
        'Τριγωνικός Κυβερνήτης'
    ],
    '✂️': [
        'Ψαλίδι',
        ':scissors:',
        'Κοπή'
    ],
    '✏️': [
        'Μολύβι',
        ':pencil:',
        'Μολύβι Μολύβι'
    ],
    '✒️': [
        'Μαύρο Νιβ',
        ':black_nib:',
        'Πένα Nib',
        'Σιντριβάνι Πένα'
    ],
    '🖋️': [
        'Σιντριβάνι Πένα',
        ':fountain_pen:',
        'Κάτω Αριστερή Κρήνη Πένα'
    ],
    '🖊️': [
        'Πένα',
        ':pen:',
        'Κάτω Αριστερά Ballpoint Pen',
        'Ballpoint Pen'
    ],
    '🖌️': [
        'Βουρτσάκι',
        ':paintbrush:',
        'Πινέλο',
        'Κάτω Αριστερή Βουρτσάκι'
    ],
    '🖍️': [
        'Crayon',
        ':crayon:',
        'Κάτω Αριστερά Κραγιόν'
    ],
    '📝': [
        'Υπόμνημα',
        ':memo:',
        'Memorandum',
        'Σημείωση',
        'Μολύβι Και Χαρτί'
    ],
    '🗑️': [
        'Καλάθι Απορριμμάτων',
        ':wastepaper_basket:',
        'Δοχείο Απορριμμάτων',
        'Υποδοχή Ρουμπίνας',
        'Κάδος Απορριμμάτων'
    ],
    '📡': [
        'Δορυφορική Κεραία',
        ':satellite_antenna:'
    ],
    '🔭': [
        'Τηλεσκόπιο',
        ':telescope:',
        'Stargazing'
    ],
    '🔬': [
        'Μικροσκόπιο',
        ':microscope:',
        'Magnify',
        'Επιστήμη'
    ],
    '📭': [
        'Άνοιγμα γραμματοκιβωτίου με Χαμηλότερη Σημαία',
        ':open_mailbox_lowered:'
    ],
    '📬': [
        'Άνοιγμα γραμματοκιβωτίου με ανυψωμένη σημαία',
        ':open_mailbox_raised:',
        'Άνοιγμα Γραμματοκιβωτίου'
    ],
    '📪': [
        'Κλειστό γραμματοκιβώτιο με χαμηλή σημαία',
        ':closed_mailbox_lowered:'
    ],
    '📫': [
        'Κλειστό γραμματοκιβώτιο με ανυψωμένη σημαία',
        ':closed_mailbox_raised:'
    ],
    '📰': [
        'Εφημερίδα',
        ':newspaper:'
    ],
    '🗞️': [
        'Κύλιση Εφημερίδας',
        ':rolled_up_newspaper:',
        'Παράδοση Εφημερίδας'
    ],
    '📄': [
        'Σελίδα Που Αντιμετωπίζει',
        ':printed_page:',
        'Εκτυπωμένη Σελίδα'
    ],
    '📜': [
        'Κύλιση',
        ':scroll:',
        'Βαθμός',
        'Parchment'
    ],
    '📃': [
        'Σελίδα με μπούκλα',
        ':curled_page:',
        'Curled Page',
        'Curly Page'
    ],
    '📓': [
        'Σημειωματάριο',
        ':notebook:',
        'Μαύρο Και Άσπρο Βιβλίο'
    ],
    '📔': [
        'Σημειωματάριο με διακοσμητικό κάλυμμα',
        ':notebook_decorative_cover:'
    ],
    '📕': [
        'Κλειστό Βιβλίο',
        ':closed_book:',
        'Κόκκινο Βιβλίο',
        'Κόκκινο Βιβλίο',
        ':red:'
    ],
    '📖': [
        'Άνοιγμα Βιβλίου',
        ':open_book:',
        'Βιβλίο',
        'Νέα'
    ],
    '📗': [
        'Πράσινο Βιβλίο',
        ':green_book:',
        'Πράσινο Βιβλίο',
        ':green:'
    ],
    '📘': [
        'Μπλε Βιβλίο',
        ':blue_book:',
        'Μπλε Βιβλίο',
        ':blue:'
    ],
    '📙': [
        'Πορτοκαλί Βιβλίο',
        ':orange_book:',
        'Πορτοκαλί Βιβλίο',
        ':orange:'
    ],
    '📚': [
        'Βιβλία',
        ':books:',
        'Σωρός Βιβλίων',
        'Στοίβα Βιβλίων'
    ],
    '🗳️': [
        'Ballot Box με το Ballot',
        ':ballot_box:',
        'Πλαίσιο Ψηφοφορίας',
        'Ψηφοφορία'
    ],
    '🗄️': [
        'Γραφείο Αρχείου',
        ':file_cabinet:',
        'Γραφείο Καταχώρησης'
    ],
    '🗃️': [
        'Πλαίσιο Αρχείων Κάρτας',
        ':card_file_box:'
    ],
    '🖇️': [
        'Συνδεδεμένα Paperclips',
        ':linked_paperclips:',
        ':gray:',
        ':grey:'
    ]
};
/*clothes and accessories*/
emojis_language[lang][11] = {
    '👣': [
        'Υποτυπώματα',
        ':footprints:',
        'Πόδια',
        'Υποβήματα'
    ],
    '👓': [
        'Γυαλιά',
        ':glasses:',
        'Γυαλιά'
    ],
    '🕶️': [
        'Γυαλιά ηλίου',
        ':sunglasses:'
    ],
    '🥽': [
        'Γυαλιά',
        ':goggles:'
    ],
    '🥼': [
        'Παλτό Εργαστηρίου',
        ':lab_coat:'
    ],
    '👔': [
        'Necktie',
        ':necktie:',
        'Επαγγελματικό Μπλουζάκι',
        'Πουκάμισο Και γραβάτα'
    ],
    '👕': [
        'Μπλουζάκι',
        ':t_shirt:',
        ':t-shirt:',
        'Πουκάμισο Tee',
        'Μπλουζάκι Polo'
    ],
    '👖': [
        'Τζιν',
        ':jeans:',
        'Ντένιμ',
        'Παντελόνι',
        'Παντελόνια'
    ],
    '🧣': [
        'Scarf',
        ':scarf:'
    ],
    '🧤': [
        'Γάντια',
        ':gloves:'
    ],
    '🧥': [
        'Παλτό',
        ':coat:'
    ],
    '🧦': [
        'Socks',
        ':socks:'
    ],
    '👗': [
        'Φόρεμα',
        ':dress:',
        'Φούστα',
        'Φτιάξτε'
    ],
    '👘': [
        'Kimono',
        ':kimono:',
        'Φόρεμα Με Δέρμα',
        'Ιαπωνικό Φόρεμα'
    ],
    '👙': [
        'Μπικίνι',
        ':bikini:',
        'Λουτρά',
        'Μαγιό'
    ],
    '🩱': [
        'Μαγιό Ένα Κομμάτι',
        'one_piece_swimsuit',
        'one-piece_swimsuit'
    ],
    '👚': [
        'Γυναικεία Ρούχα',
        ':womans_clothes:',
        'Γυναικεία Ρούχα',
        'Blouse',
        'Ροζ Πουκάμισο',
        'Blouse'
    ],
    '👛': [
        'Χρέος',
        ':purse:',
        'Πορτοφόλι'
    ],
    '👜': [
        'Τσάντα',
        ':handbag:'
    ],
    '👝': [
        'Τσάντα Συμπλέκτη',
        ':clutch_bag:',
        'Συμπλέκτης',
        'Μικρή Τσάντα',
        'Pouch'
    ],
    '🎒': [
        'Σακίδιο',
        ':backpack:',
        'Σάκος',
        'Τσάντα Σχολείου',
        'Σχολείο Satchel',
        'Rucksack'
    ],
    '👞': [
        'Mans Shoe',
        ':mans_shoe:',
        'Mans Shoe',
        'Παπούτσι',
        'Καφέ Εμφάνιση',
        'Εμφάνιση Φόρεμα'
    ],
    '👟': [
        'Αθλητικό Παπούτσι',
        ':athletic_shoe:',
        'Τρέξιμο Παπούτσι',
        'Sneaker',
        'Δρομέας',
        'Εκπαιδευτής',
        'Παπούτσι Τένις'
    ],
    '🥾': [
        'Πεζοπορία Boot',
        ':hiking_boot:'
    ],
    '🥿': [
        'Επίπεδη Παπούτσι',
        ':flat_shoe:'
    ],
    '👠': [
        'Υψηλής Αναπηρίας Παπούτσι',
        ':high_heeled_shoe:',
        ':high_heel:',
        'Στιλέτο',
        'Υψηλή Τακούνια'
    ],
    '👡': [
        'Γυναικεία Σανδάλι',
        ':womans_sandal:',
        'Γυναικεία Σανδάλι',
        'Σανδάλι Με Κλήση',
        'Σανδάλια',
        'Sandal'
    ],
    '👢': [
        'Γυναικεία Μπότες',
        ':womans_boots_',
        'Γυναικεία Μπότες',
        'Cowgirl Μπότες',
        'Μπότες Γόνατο Υψηλή',
        'Κεφαλές Μπότες'
    ],
    '👑': [
        'Στέμμα',
        ':crown:',
        'Ρήγας',
        'Βασίλισσα',
        'Πρίγκιπας',
        'Βασιλικός',
        'Πριγκίπισσα',
        ':gold:',
        ':yellow:'
    ],
    '👒': [
        'Καπέλο',
        ':hat:',
        'Καπέλο Γυναικείων',
        'Καπέλο Με Τόξο',
        'Καπέλο Κυρίες'
    ],
    '🎩': [
        'Καπέλο',
        ':top_hat:',
        'Επίσημη Ένδυση',
        'Groom',
        ':black:'
    ],
    '🎓': [
        'Καπάκι Αποφοίτησης',
        ':graduation_cap:',
        'Κολέγιο',
        'Απόφοιτος',
        'Πίνακας Όλμου',
        'Πανεπιστήμιο',
        'Πλατεία Ακαδημαϊκό Καπέλο',
        ':black:'
    ],
    '🧢': [
        'Χρεωμένο Καπέλο',
        ':billed_cap:',
        'Καπέλο Του Μπέιζμπολ'
    ],
    '⛑️': [
        'Κράνος με Λευκό Σταυρό',
        ':helmet_with_white_cross:',
        ':helmet_with_cross:',
        ':rescue_worker_helmet:',
        ':rescue_workers_helmet:',
        'Εργαζόμενος Διάσωσης Κράνος',
        ':red:',
        ':white:'
    ],
    '💼': [
        'Χαρτοφύλακες',
        ':briefcase:',
        'Κοστούμια'
    ],
    '🎖️': [
        'Μετάλλιο Στρατού',
        ':military_medal:',
        ':medal:',
        'Μετάλλιο',
        'Μετάλλιο',
        'Στρατιωτική Διακόσμηση'
    ],
    '📿': [
        'Χάντρες Προσευχής',
        ':prayer_beads:',
        'Χάντρες Dhikr',
        'Χάντρες Ροζάριο'
    ],
    '🎗️': [
        'Υπενθύμιση Ribbo',
        ':reminder_ribbo:'
    ],
    '🤿': [
        'Μάσκα Κατάδυσης',
        ':diving_mask:'
    ],
    '🦺': [
        'Γιλέκο Ασφαλείας',
        ':safety_vest:'
    ],
    '🥻': [
        'Sari',
        ':sari:',
        'Saree',
        'Shari'
    ],
    '🩲': [
        'Σλιπ',
        ':briefs:',
        'Undies',
        'Underwear',
        'Underpants',
        'Jocks',
        'Panties'
    ],
    '🩳': [
        'Σορτς',
        ':shorts:'
    ],
    '🛼': [
        'Roller Skate',
        ':roller_skate:',
        'Ενσωματωμένο Σελάχι',
        'Κύλινδρος Derby'
    ],
    '🩴': [
        'Αναστροφή Πλακέτας',
        ':flip_flop:',
        'Thong Sandal'
    ],
    '🪖': [
        'Στρατιωτικό Κράνος',
        ':military_helmet:'
    ],
    '🩰': [
        'Παπούτσια Μπαλέτου',
        ':ballet_shoes:',
        'Παπούτσι Σημείων'
    ],
    '🩼': [
        'Crutch',
        ':crutch:'
    ]
};
/*hands and parts of body*/
emojis_language[lang][12] = {
    '👋{{skin_tone}}': [
        'Αποθήκευση Υπογραφής Χεριών',
        ':wave:',
        ':waving_hand:',
        'Αντίο',
        'Κύμα Χειρός',
        'Γεια',
        'Hi'
    ],
    '🖐️{{skin_tone}}': [
        'Χέρι με δάχτυλα έπαιξε',
        ':hand_splayed:',
        ':raised_hand_with_fingers_splayed:',
        ':hand_with_fingers_splayed:',
        'Πέντε Χέρι',
        'Χέρι Που Παίζεται',
        'Μεγαλωμένο χέρι με δάχτυλα Splayed'
    ],
    '🤚{{skin_tone}}': [
        'Αυξημένη πίσω πλευρά του χεριού',
        ':raised_back_of_hand:',
        ':back_of_hand:',
        'Πίσω'
    ],
    '✋{{skin_tone}}': [
        'Βελτιωμένο Χέρι',
        ':raised_hand:',
        ':hand:',
        'Υψηλή Πέντε',
        'Διακοπή'
    ],
    '🖖{{skin_tone}}': [
        'Vulcan Salute',
        ':vulcan_salute:',
        'Spock',
        'Star Trek',
        'Ενισχυμένο χέρι με μέρος μεταξύ της μέσης και δαχτυλίδι δάχτυλα'
    ],
    '👌{{skin_tone}}': [
        'Σημάδι Χεριού OK',
        ':ok_hand:',
        'Εντάξει',
        'Τέλειο',
        'Ναι'
    ],
    '✌️{{skin_tone}}': [
        'Χέρι Νίκης',
        ':victory_hand:',
        'Αερόσπασμα',
        'Σημάδι Ειρήνης',
        'V Υπογραφή'
    ],
    '🤞{{skin_tone}}': [
        'Διασχισμένα Δάχτυλα',
        ':crossed_fingers:',
        'Δάχτυλα Διασχισμένα',
        'Καλή Τύχη',
        'Χέρι με Ευρετήριο και Μεσαία Δάχτυλα Διασχισμένα'
    ],
    '🤟{{skin_tone}}': [
        'Χειρονομία Αγάπης-Εσείς',
        ':love_you_gesture:',
        ':i_love_you_hand_sign:',
        'Σας Αγαπώ Το Χέρι Υπογραφή'
    ],
    '🤘{{skin_tone}}': [
        'Σημάδι από τα κέρατα',
        ':the_horns:',
        ':sign_of_the_horns:',
        ':metal:',
        'Διάβολος Δάχτυλα',
        'Βαρύ Μέταλλο',
        'Ροκ Ενεργό'
    ],
    '🤙{{skin_tone}}': [
        'Καλέστε Με Το Χέρι Υπογραφή',
        ':call_me_hand:',
        ':call_me:',
        'Χέρι Τηλεφώνου',
        'Shaka'
    ],
    '🤏{{skin_tone}}': [
        'Τσιμπώντας Χέρι',
        ':pinching_hand:'
    ],
    '👈{{skin_tone}}': [
        'Πίσω Ευρετήριο Βαθμολόγησης Αριστερά',
        ':backhand_index_pointing_left:',
        ':point_left:',
        'Λευκό Αριστερό Σημείο Δείκτης Πίσω'
    ],
    '👉{{skin_tone}}': [
        'Πίσω Ευρετήριο Δειγματοληψίας Δεξιά',
        ':backhand_index_pointing_right:',
        ':point_right:',
        'Άσπρο Δεξί Δείκτης Ενδείξεων Πίσω'
    ],
    '👆{{skin_tone}}': [
        'Πίσω Ευρετήριο Πάνω',
        ':point_up_2:',
        ':backhand_index_pointing_up:',
        'Λευκή Σημείωση Δείκτης Πίσω',
        'Μεσαίο Δάχτυλο'
    ],
    '👇{{skin_tone}}': [
        'Πίσω Ευρετήριο Βαθμολόγησης Κάτω',
        ':point_down:',
        ':backhand_index_pointing_down:',
        'Λευκό Κάτω Βαθμολογία Πίσω Ευρετήριο',
        'Βαθμολογία Κάτω'
    ],
    '☝{{skin_tone}}': [
        'Δείκτης Δάχτυλου Που Εντάσσεται',
        ':point_up:',
        ':index_pointing_up:',
        'Δείκτης Λευκής Ανίχνευσης',
        'Μυστικό'
    ],
    '🖕{{skin_tone}}': [
        'Μεσαίο Δάχτυλο',
        ':middle_finger:',
        'Αναποδογύρισμα Του Πουλιού',
        'Γυμνό Δάχτυλο',
        'Αντίστροφο χέρι με Middle Finger Extended'
    ],
    '👍{{skin_tone}}': [
        'Εγγραφή Μικρογραφίας',
        ':thumbs_up_sign:',
        'Αρέσει',
        'Ναι'
    ],
    '👎{{skin_tone}}': [
        'Υπογραφή Μικρογραφιών',
        ':thumbs_down_sign:',
        'Κακό',
        'Dislike',
        'Όχι'
    ],
    '✊{{skin_tone}}': [
        'Αυξημένη Γροθιά',
        ':raised_fist:',
        'Αντλία Fist'
    ],
    '👊{{skin_tone}}': [
        'Επόμενη Γροθιά',
        ':oncoming_fist:',
        'Bro Fist',
        'Brofist',
        'Fist Bump',
        'Γροθιά',
        'Κλειστή Γροθιά',
        'Παγωμένη Σημάδι Χεριών'
    ],
    '🤛{{skin_tone}}': [
        'Αριστερό Χτύπημα Γροθιάς',
        ':left_fist_bump:'
    ],
    '🤜{{skin_tone}}': [
        'Δεξιά Γροθιά Χτύπημα',
        ':right_fist:bump:'
    ],
    '🤌{{skin_tone}}': [
        'Τσιμπημένα Δάχτυλα',
        ':pinched_fingers:',
        'Ma Che Vuoi',
        'Δακτύλιος Χρέος'
    ],
    '👏{{skin_tone}}': [
        'Σφραγίδα Χέρια',
        ':cap:',
        ':clapping_hands:',
        'Χειροκροτήματα',
        'Clap',
        'Σύλληψη',
        'Ράβδος Γκολφ',
        'Γύρος Χειροκροτήματα'
    ],
    '🙌{{skin_tone}}': [
        'Άτομο που σηκώνει και τα δύο χέρια στη γιορτή',
        ':raised_hands:',
        ':raising_hands:',
        'Ανύψωση Χέρια',
        'Όπλα Στον Αέρα',
        'Banzai',
        'Festivus Miracle',
        'Hallelujah',
        'Επαληθεύστε Τα Χέρια',
        'Δύο Χέρια'
    ],
    '👐{{skin_tone}}': [
        'Άνοιγμα Σημάδι Χέρια',
        ':open_hands_sign:',
        'Αγκαλιά',
        'Χέρια Τζαζ'
    ],
    '🤲{{skin_tone}}': [
        'Palms Up Together',
        ':palms_up_together:',
        'Dua'
    ],
    '🤝{{skin_tone}}': [
        'Handshake',
        ':handshake:',
        'Χέρια Κουνήματος'
    ],
    '🙏{{skin_tone}}': [
        'Πτυσσόμενα Χέρια',
        ':folded_hands:',
        'Namaste',
        'Παρακαλώ',
        'Προσευχή',
        'Σας Ευχαριστούμε',
        'Πρόσωπο με πτυσσόμενα χέρια'
    ],
    '✍{{skin_tone}}': [
        'Χέρι Γραφής',
        ':writing_hand:'
    ],
    '🫱{{skin_tone}}': [
        'Δεξιά Χέρι',
        ':rightwards_hand:'
    ],
    '🫲{{skin_tone}}': [
        'Αριστερό Χέρι',
        ':leftwards_hand:'
    ],
    '🫳{{skin_tone}}': [
        'Χέρι Παλμών',
        ':palm_down_hand:'
    ],
    '🫴{{skin_tone}}': [
        'Χέρι Παλμών',
        ':palm_up_hand:'
    ],
    '🫰{{skin_tone}}': [
        'Χέρι με Δείκτης Δάχτυλο και Αντίχειρα Διασχίστε',
        ':hand_with_index_finger_and_thumb_crossed:'
    ],
    '🫵{{skin_tone}}': [
        'Σημείο Ευρετηρίου στον Προβολέα',
        ':index_pointing_at_the_viewer:'
    ],
    '🫶{{skin_tone}}': [
        'Χέρια Καρδιάς',
        ':heart_hands:',
        'Αγάπη'
    ],
    '💪{{skin_tone}}': [
        'Flexed Biceps',
        ':flexed_biceps:',
        'Διάσπαση Των Μυών Βραχίονα',
        'Musle',
        'Ισχυρός'
    ],
    '🦵{{skin_tone}}': [
        'Σπόδι',
        ':leg:'
    ],
    '🦶{{skin_tone}}': [
        'Πόδι',
        ':foot:'
    ],
    '👂{{skin_tone}}': [
        'Αυτί',
        ':ear:',
        'Αυτιά',
        'Ακρόαση',
        'Ακρόαση'
    ],
    '👃{{skin_tone}}': [
        'Μύτη',
        ':nose:',
        'Μυρωδιά',
        'Sniffing',
        'Stinky'
    ],
    '🦻{{skin_tone}}': [
        'Αυτί με βαρηκοΐα',
        ':ear_with_hearing_aid:'
    ],
    '🧠': [
        'Εγκέφαλος',
        ':brain:',
        ':pink:'
    ],
    '🦷': [
        'Δόντι',
        ':tooth:',
        ':white:'
    ],
    '👀': [
        'Μάτια',
        ':eyes:',
        'Οφθαλμοί',
        'Αυξημένα Μάτια',
        'Σοφά Μάτια'
    ],
    '👁️': [
        'Μάτι',
        ':eye:',
        'Απλό Μάτι'
    ],
    '👅': [
        'Έξοδος Γλώσσας',
        ':tongue_out:',
        ':red:'
    ],
    '👄': [
        'Στόμα',
        ':mouth:',
        'Φιλιά Χείλη',
        'Χείλη',
        ':red:'
    ],
    '🫦': [
        'Biting Lip',
        ':biting_lip:',
        'Χείλη',
        ':red:'
    ],
    '🫀': [
        'Ανατομική Καρδιά',
        ':anatomical_heart:',
        ':red:'
    ],
    '🫁': [
        'πνεύμονες',
        ':lungs:',
        ':red:'
    ],
    '🦾': [
        'Μηχανικός Βραχίονας',
        ':mechanical_arm:',
        'Ισχυρός',
        ':gray:',
        ':grey:'
    ],
    '🦿': [
        'Μηχανικό Πέλμα',
        ':mechanical_leg:',
        ':gray:',
        ':grey:'
    ],
    '💅{{skin_tone}}': [
        'Πολωνικά Νύχια',
        ':nail_polish:',
        'Δάχτυλα',
        'Manicure',
        'Nonchalant'
    ],
    '🤳{{skin_tone}}': [
        'Selfie',
        ':selfie:',
        'Κάμερα Τηλεφώνου',
        'Χέρι Selfie'
    ]
};
/*other*/
emojis_language[lang][13] = {
    '💩': [
        'Σωρός του Poo',
        ':pile_of_poo:',
        'Χώμα Σκύλου',
        'Χαμογελαστό Βρόχο',
        ':brown:'
    ],
    '💋': [
        'Μάρκο Φιλί',
        ':kiss_mark:',
        'Φιλιά Χείλη',
        ':red:'
    ],
    '🦴': [
        'Κόκαλο',
        ':bone:'
    ],
    '🧳': [
        'Αποσκευές',
        ':luggage:',
        'Κοστούμια'
    ],
    '🌂': [
        'Κλειστή Ομπρέλα',
        ':closed_umbrella:',
        'Σύμπτυξη Ομπρέλλας',
        'Ροζ Ομπρέλα',
        ':pink:',
        ':purple:'
    ],
    '☂️': [
        'Ομπρέλα',
        ':umbrella:',
        ':purple:'
    ],
    '☔': [
        'Ομπρέλα με σταγόνες βροχής',
        ':umbrella_with_rain_drops:',
        ':umbrella:',
        'Βροχή',
        'Rainy'
    ],
    '🧵': [
        'Κόλπος του νήματος',
        ':spool_of_thread:'
    ],
    '🧶': [
        'Μπάλα του Νήματος',
        ':ball_of_yarn:'
    ],
    '💄': [
        'Lipstick',
        ':lipstick:',
        'Lip Gloss',
        'Μακιγιάζ',
        ':red:'
    ],
    '💍': [
        'Κουδούνισμα',
        ':ring:',
        'Διαμαντένιο Δαχτυλίδι',
        'Δακτύλιος Δέσμευσης'
    ],
    '💎': [
        'Πέτρα πολύτιμων λίθων',
        ':gem_stone:',
        'Διαμάντι',
        'Πολύτιμο',
        'Πολύτιμος Λίθος',
        'Κόσμημα',
        ':blue:'
    ],
    '💥': [
        'Σύμβολο Σύγκρουσης',
        ':collision_symbol:',
        'Μπανγκ',
        'Έκρηξη',
        'Επιπτώσεις',
        'Κόκκινος Σπαρνς',
        'Έκρηξη'
    ],
    '💫': [
        'Σύμβολο Dizzy',
        ':dizzy_symbol:',
        'Κύκλος Και Αστέρι',
        ':yellow:'
    ],
    '💦': [
        'Σύμβολο Splashing Sweat',
        'ιδρώτα_σταγόνες',
        'ιδρώτα_σταγονίδια',
        'Δεσμεύσεις',
        'Πλεονεκτήματα Νερού',
        'Σταγόνες Νερού',
        ':blue:'
    ],
    '💨': [
        'Dashing Μακριά',
        ':dashing_away:',
        'Γρήγορη',
        'Ατμός',
        'Ατμόπλοιο',
        'Άνεμος',
        'Dash Σύμβολο',
        'Σκουπίδια του ανέμου'
    ],
    '🌬️': [
        'Πρόσωπο Ανέμου',
        ':wind_face:',
        'Ισχυρός Άνεμος',
        'Μητέρα Φύση',
        'Άνεμος Blowing Πρόσωπο',
        ':white:'
    ],
    '🐾': [
        'Εκτυπώσεις Paw',
        ':paw_prints:',
        'Εκτυπώσεις Paw Γάτας',
        'Σκύλος Paw Εκτυπώσεις',
        'Kitten Paw Εκτυπώνει',
        'Puppy Paw Εκτυπώσεις'
    ],
    '🕸️': [
        'Ιστός Αράχνης',
        ':spider_web:',
        'Cobweb',
        'Ιστός',
        'Spiderweb'
    ],
    '🦠': [
        'Μικρόβιλος',
        ':microbe:',
        'Κελί',
        'Coronavirus',
        'COVID-19',
        'Γάμι',
        'Μικροοργανισμός',
        'Ιός',
        ':green:'
    ],
    '💐': [
        'Μπουκέτο Λουλουδιών',
        ':bouquet_of_flowers:'
    ],
    '🌍': [
        'Παρουσίαση Ευρώπης-Αφρικής',
        ':globe_showing_europe_africa:',
        ':earth_africa:',
        'Γη',
        'Σφαίρα',
        'Πλανήτης',
        'Κόσμος',
        'Παρουσίαση Ευρώπης και Αφρικής',
        ':blue:'
    ],
    '🌎': [
        'Παρουσίαση Της Αμερικής',
        ':globe_showing_americas:',
        ':earth_americas:',
        'Γη',
        'Σφαίρα',
        'Πλανήτης',
        'Κόσμος',
        ':blue:'
    ],
    '🌏': [
        'Εμφάνιση Ασίας-Αυστραλίας',
        ':globe_showing_asia_australia:',
        ':earth_asia:',
        'Γη',
        'Σφαίρα',
        'Πλανήτης',
        'Κόσμος',
        'Εμφάνιση Ασίας και Αυστραλίας',
        ':blue:'
    ],
    '🌐': [
        'Globe με Meridians',
        ':globe_with_meridians:',
        'Διαδίκτυο',
        'World Wide Web',
        'ΔΔΔ'
    ],
    '🌑': [
        'Σύμβολο Νέας Σελήνης',
        ':new_moon:',
        'Σκοτεινή Σελήνη',
        'Σελήνη Σκιάς',
        'Ηλιακή Έκλειψη',
        ':black:'
    ],
    '🌒': [
        'Σύμβολο Ημισελήνου Σελήνης Waxing',
        ':waxing_crescent_moon:',
        ':yellow:',
        ':black:'
    ],
    '🌓': [
        'Σύμβολο Πρώτου Τρίμηνου Σελήνης',
        ':first_quarter_moon:',
        ':yellow:',
        ':black:'
    ],
    '🌔': [
        'Σύμβολο Αμφίβολης Σελήνης Waxing',
        ':moon:',
        ':waxing_gibbous_moon:',
        ':yellow:',
        ':black:'
    ],
    '🌕': [
        'Σύμβολο Πανσελήνης',
        ':full_moon:',
        ':yellow:'
    ],
    '🌖': [
        'Σύμβολο Αμφίβολης Σελήνης',
        ':waning_gibbous_moon:',
        ':yellow:',
        ':black:'
    ],
    '🌗': [
        'Σύμβολο Τελευταίου Τρίμηνου Σελήνης',
        ':last_quarter_moon:',
        ':yellow:',
        ':black:'
    ],
    '🌘': [
        'Σύμβολο Της Ημισελήνου Φεγγαριών',
        ':waning_crescent_moon:',
        ':yellow:',
        ':black:'
    ],
    '🌙': [
        'Ημισέληνος Σελήνης',
        ':crescent_moon:',
        ':yellow:'
    ],
    '🌚': [
        'Νέα Σελήνη με Πρόσωπο',
        ':new_moon_with_face:',
        'Ανατριχιαστική Σελήνη',
        'Πρόσωπο Σκούρο Φεγγάρι',
        'Χονδρική Σελήνη',
        ':black:',
        ':gray:',
        ':grey:'
    ],
    '🌝': [
        'Πανσέληνος με πρόσωπο',
        ':full_moon_with_face:',
        'Moonface',
        'Smiley Σελήνη',
        'Χαμογελώντας Σελήνη',
        ':yellow:'
    ],
    '🌛': [
        'Πρώτο τρίμηνο Σελήνης με Πρόσωπο',
        ':first_quarter_moon_with_face:',
        ':first_quarter_moon_face:',
        ':yellow:'
    ],
    '🌜': [
        'Τελευταία Σελήνη Τρίμηνο με Πρόσωπο',
        ':last_quarter_moon_with_face:',
        ':last_quarter_moon_face:',
        ':yellow:'
    ],
    '🌞': [
        'Ήλιος με πρόσωπο',
        ':sun_with_face:',
        'Smiley Κυρ',
        'Sunface',
        'Χαμογελώντας Ήλιος',
        ':yellow:'
    ],
    '☀️': [
        'Κυρ',
        ':sun:',
        'Ηλιοφάνεια',
        ':yellow:'
    ],
    '⭐': [
        'Αστέρι',
        ':star:',
        'Λευκό Μεσαίο Αστέρι',
        ':yellow:'
    ],
    '🌟': [
        'Λαμπερό Αστέρι',
        ':glowing_star:',
        'Φωτεινό Αστέρι',
        ':yellow:'
    ],
    '☁️': [
        'Σύννεφο',
        ':cloud:',
        'Συννεφιά',
        'Overcast',
        ':white:'
    ],
    '⛅': [
        'Ο Ήλιος Πίσω Από Το Σύννεφο',
        ':thunder_cloud_and_rain:',
        ':thunder_cloud_rain:',
        ':cloud_with_lightning_and_rain:',
        ':white:'
    ],
    '⛈️': [
        'Σύννεφο με Lightning και βροχή',
        ':thunder_cloud_and_rain:',
        ':thunder_cloud_rain:',
        ':cloud_with_lightning_and_rain:',
        'Thunder Cloud και βροχή',
        ':white:'
    ],
    '🌤️': [
        'Λευκός ήλιος με μικρό σύννεφο',
        ':mostly_sunny:',
        ':sun_behind_small_cloud:',
        ':sun_small_cloud:',
        ':white_sun_small_cloud:',
        ':white_sun_with_small_cloud:',
        ':white:'
    ],
    '🌥️': [
        'Ήλιος Πίσω Από Μεγάλο Σύννεφο',
        ':sun_behind_large_cloud:',
        'Λευκό Ήλιο Πίσω Από Το Σύννεφο',
        ':white:'
    ],
    '🌦️': [
        'Λευκό ήλιο πίσω από το σύννεφο με βροχή',
        ':sun_behind_rain_cloud:',
        ':partly_sunny_rain:',
        ':white_sun_rain_cloud:',
        ':white_sun_behind_cloud_with_rain:',
        ':white:'
    ],
    '🌧️': [
        'Σύννεφο με βροχή',
        ':cloud_with_rain:',
        ':white:'
    ],
    '🌨️': [
        'Σύννεφο με χιόνι',
        ':cloud_with_snow:',
        ':white:'
    ],
    '🌩️': [
        'Σύννεφο με Lightning',
        ':cloud_with_lightning:',
        ':white:'
    ],
    '🌪️': [
        'Ανεμοστρόβιλος',
        ':tornado:',
        'Σύννεφο με Tornado'
    ],
    '🌫️': [
        'Fog',
        ':fag:',
        ':white:',
        ':gray:',
        ':grey:'
    ],
    '🌈': [
        'Ουράνιο Τόξο',
        ':rainbow:',
        'Ομοφυλοφιλική Υπερηφάνεια',
        'Πρωτεύον Ουράνιο Τόξο',
        'LGBTQIA+',
        'LGBT+'
    ],
    '❄️': [
        'Νιφάδα Χιονιού',
        ':snowflake:',
        'Χιόνι',
        'Χιόνι',
        ':white:'
    ],
    '🌀': [
        'Κυκλόνη',
        ':cyclone:',
        'Τυφώνας',
        'Σπείρα',
        'Περιστροφή',
        'Ανεμοστρόβιλος'
    ],
    '⚡': [
        'Σημάδι Υψηλής Τάσης',
        ':high_voltage_sign:',
        'Μπουλόνι Lightning',
        'Thunderbolt',
        'Υψηλή Τάση'
    ],
    '☃️': [
        'Χιονάνθρωπος',
        ':snowman:',
        'Χιονάνθρωπος με νιφάδες χιονιού',
        ':white:'
    ],
    '⛄': [
        'Χιονάνθρωπος Χωρίς Χιόνι',
        'snowman_without_snow',
        ':snowman:',
        'Frosty Ο Χιονάνθρωπος',
        'Olaf',
        'Χιονάνθρωπος',
        ':white:'
    ],
    '☄️': [
        'Κομήτης',
        ':comet:'
    ],
    '🔥': [
        'Φωτιά',
        ':fire:',
        'Φλόγα',
        'Ζεστό',
        'Lit',
        'Στιγμιότυπο',
        ':red:'
    ],
    '💧': [
        'Droplet',
        ':droplet:',
        'Νερό',
        'Πτώση Νερού',
        ':blue:'
    ],
    '✨': [
        'Σπινθήρες',
        ':sparkles:',
        'Γκλίτερ',
        'Shiny',
        'Νέο'
    ],
    '🌊': [
        'Κύμα Νερού',
        ':water_wave:',
        'Παραλία',
        'Ωκεάνιο Κύμα',
        'Θάλασσα',
        ':blue:'
    ],
    '🎄': [
        'Χριστουγεννιάτικο Δέντρο',
        'δέντρο_χριστά',
        'Χριστούγεννα',
        'Δέντρο Χριστουγέννων',
        ':green:'
    ],
    '🎃': [
        'Jack-O-Φανάρι',
        'jack_o_φανάρι',
        'Halloween',
        'Κολοκύθα',
        ':orange:'
    ],
    '🌻': [
        'Ηλίανθος',
        ':sunflower:',
        'Κίτρινο Λουλούδι',
        ':yellow:'
    ],
    '🌼': [
        'Blossom',
        ':blossom:',
        'Άνθος Λουλούδι',
        'Daisy',
        'Κίτρινο Λουλούδι',
        ':yellow:'
    ],
    '🌷': [
        'Tulip',
        ':tulip:',
        ':pink:'
    ],
    '🌹': [
        'Τριαντάφυλλο Λουλούδι',
        ':rose_flower:',
        'Κόκκινο Τριαντάφυλλο',
        ':red:'
    ],
    '☘️': [
        'Σαμπουάν',
        ':shamrock:',
        'Τριφύλλι',
        'Trefoil',
        ':green:'
    ],
    '🍀': [
        'Τριφύλλι Τέσσερα Φύλλα',
        ':four_leaf_clover:',
        'Τριφύλλι',
        'Ιρλανδία',
        'Τυχερός',
        'Τύχες',
        ':green:'
    ],
    '🌸': [
        'Cherry Blossom',
        ':cherry_blossom:',
        'Ροζ Λουλούδι',
        'Sakura',
        ':pink:'
    ],
    '💮': [
        'Λευκό Λουλούδι',
        ':white_flower:',
        'Cherry Blossom',
        'Χαρτί Doily',
        'Καλά Έγινε Σφραγίδα',
        ':white:'
    ],
    '🌺': [
        'Hibiscus',
        ':hibiscus:',
        ':red:'
    ],
    '🏵️': [
        'Ροζέτα',
        ':rosette:',
        ':orange:',
        ':yellow:'
    ],
    '🌱': [
        'Σπόρος',
        ':seedling:',
        'Άνοιξη',
        'Sprout',
        'Λαχανάκια',
        ':green:'
    ],
    '🌲': [
        'Evergreen Δέντρο',
        ':evergreen_tree:',
        'Δέντρο Ελαφιού',
        'Δέντρο Πεύκου',
        ':green:'
    ],
    '🌳': [
        'Αποφασιστικό Δέντρο',
        ':deciduous_tree:',
        'Στρογγυλεμένο Δέντρο',
        ':green:'
    ],
    '🌴': [
        'Δέντρο Φοίνικας',
        ':palm_tree:',
        'Δέντρο Καρύδας',
        ':green:'
    ],
    '🎋': [
        'Δέντρο Tanabata',
        ':tanabata_tree:',
        'Tanabata',
        'Δέντρο Επιθυμιών'
    ],
    '🎍': [
        'Διακόσμηση Πεύκου',
        ':pine_decoration:',
        'Μπαμπού',
        'Kadomatsu',
        'Διακόσμηση Νέου Έτους'
    ],
    '🌵': [
        'Cactus',
        ':cactus:',
        'Desert',
        ':green:'
    ],
    '🌾': [
        'Φύλλο του ρυζιού',
        ':sheaf_of_rice:',
        'Περικοπή',
        'Γεωργία',
        'Σίτος',
        'Αυτί του ρυζιού'
    ],
    '🌿': [
        'Βότανα',
        ':herb:',
        'Περικοπή',
        'Φυτό',
        ':green:'
    ],
    '🍁': [
        'Φύλλο Maple',
        ':maple_leaf:',
        'Καναδάς',
        'Καναδική',
        'Μοίρες',
        ':brown:'
    ],
    '🍂': [
        'Φύλλο Fallen',
        ':fallen_leaf:',
        'Φύλλο Φθινοπώρου',
        'Φύλλα Φθινοπώρου',
        'Καφέ Φύλλα',
        'Φύλλα Πτώσης',
        'Πεσμένα Φύλλα',
        ':brown:'
    ],
    '🍃': [
        'Φύλλο Fluttering σε Wind',
        ':leaf_fluttering_in_wind:',
        ':leaves:',
        'Πράσινα Φύλλα',
        'Άνοιξη',
        ':green:'
    ],
    '🪴': [
        'Φυτό Potted',
        ':potted_plant:',
        ':green:'
    ],
    '🪸': [
        'Κοράλλια',
        ':coral:',
        'Κλιματική αλλαγή'
    ],
    '🪷': [
        'Lotus',
        ':lotus:',
        'Καθαρότητα',
        'Ομορφιά',
        'Ηρεμία',
        'Γενοκτονία'
    ],
    //"🪻": ["Hyacinth", ":hyacinth:", "Purple flower", ":purple:"],
    //"🫛": ["Pea Pod", ":pea_pod:", ":green:"],
    //"🫚": ["Ginger root", ":ginger:", "Spice", "Flavour", ":brown:"],
    '🔑': [
        'Κλειδί',
        ':key:',
        'Χρυσό Κλειδί',
        ':gold:',
        ':yellow:'
    ],
    '🗝️': [
        'Παλιό Κλειδί',
        ':old_key:',
        ':brown:'
    ],
    '🔨': [
        'Σφυρί',
        ':hammer:',
        'Σφυρί Claw',
        'Handyman',
        'Εργαλείο'
    ],
    '⛏️': [
        'Επιλέξτε',
        ':pick:',
        'Αξίνα'
    ],
    '🪓': [
        'Τσεκούρια',
        ':axe:',
        'πυροσβέστης'
    ],
    '🪚': [
        'Πριόνι Ξυλουργικής',
        ':carpentry_saw:'
    ],
    '🪛': [
        'Κατσαβίδι',
        ':screwdriver:'
    ],
    '🪝': [
        'Άγκιστρο',
        ':hook:'
    ],
    '🪠': [
        'Plunger',
        ':plunger:'
    ],
    '🪣': [
        'Κουβάς',
        ':bucket:'
    ],
    '🔩': [
        'Καρύδα και Bolt',
        ':nut_and_bolt:',
        'Bolt',
        'Βίδα',
        ':gray:',
        ':grey:'
    ],
    '🗜️': [
        'Σφιγκτήρας',
        ':clamp:',
        'Πίνακας Vice',
        'WinZip',
        'Συμπίεση',
        ':gray:',
        ':grey:'
    ],
    '🔒': [
        'Κλειδωμένο',
        ':locked:',
        'Κλειδαριά Κλειδώματος',
        'Padlock'
    ],
    '🔓': [
        'Ξεκλείδωτο',
        ':unlocked:',
        'Άνοιγμα Padlock',
        'Άνοιγμα Κλειδώματος'
    ],
    '🔏': [
        'Κλειδωμένο με στυλό',
        ':locked_with_pen:',
        'Κλείδωμα Και Πένα',
        'Κλειδαριά Με Σιντριβάνι Στυλό',
        'Κλείδωμα με στυλό μελάνης'
    ],
    '🔐': [
        'Κλειδωμένο με κλειδί',
        ':locked_with_key:',
        'Κλειδαριά κλειδώματος με κλειδί'
    ],
    '🗡️': [
        'Dagger',
        ':dagger:',
        'Όπλο Μαχαίρι',
        ':gray:',
        ':grey:'
    ],
    '⚔️': [
        'Διασχισμένα Σπαθιά',
        ':crossed_swords:',
        ':gray:',
        ':grey:'
    ],
    '🔫': [
        'Pistol',
        ':pistol:',
        'Όπλο',
        'Περίστροφο',
        'Όπλο Μπλουζών',
        'Όπλο Νερού',
        'Πιστόλι Νερού'
    ],
    '🧰': [
        'Εργαλειοθήκη',
        ':toolbox:',
        ':red:'
    ],
    '🧲': [
        'Μαγνήτης',
        ':magnet:',
        ':red:'
    ],
    '⛓️': [
        'Αλυσίδες',
        ':chains:'
    ],
    '💉': [
        'Syringe',
        ':syringe:',
        'Δωρεά Αίματος',
        'Δοκιμή Αίματος',
        'Βελόνα',
        'Εμβολιασμός',
        'αίμα',
        'άρρωστος',
        'ill'
    ],
    '🧬': [
        'DNA',
        ':dna:',
        'DNA Double Helix'
    ],
    '🧪': [
        'Σωλήνας Δοκιμής',
        ':test_tube:',
        ':green:'
    ],
    '🛏️': [
        'Κρεβάτι',
        ':bed:',
        'Υπνοδωμάτιο'
    ],
    '🛋️': [
        'Καναπές και λάμπα',
        ':couch_and_lamp:',
        'Σαλόνι',
        'Ρύθμιση',
        'Καναπές'
    ],
    '🪑': [
        'Καρέκλα',
        ':chair:'
    ],
    '🚪': [
        'Πόρτα',
        ':door:',
        'Πόρτα',
        'Μπροστινή Πόρτα'
    ],
    '🪟': [
        'Παράθυρο',
        ':window:'
    ],
    '🪜': [
        'Σκάλα',
        ':ladder:'
    ],
    '🪞': [
        'Καθρέφτης',
        ':mirror:'
    ],
    '🚽': [
        'Τουαλέτα',
        ':toilet:',
        'Μπάνιο',
        'Loo',
        'Restroom',
        'WC',
        ':white:'
    ],
    '🚿': [
        'Ντους',
        ':shower:',
        'Κεφαλή Ντους',
        ':shower:'
    ],
    '🛁': [
        'Μπανιέρα',
        ':bathtub:',
        'Μπάνιο Με Φούσκα',
        ':shower:'
    ],
    '🧴': [
        'Φιάλη Λοσιόν',
        ':location_bottle:'
    ],
    '🧷': [
        'Καρφίτσα Ασφαλείας',
        ':safety_pin:',
        ':gray:',
        ':grey:'
    ],
    '🧺': [
        'Καλάθι',
        ':basket:',
        ':brown:'
    ],
    '🧻': [
        'Ρόλος του χαρτιού',
        ':roll_of_paper:',
        'Χαρτί Χαρτί Χαρτί',
        ':white:'
    ],
    '🧼': [
        'Ράβδος του σαπουνιού',
        ':bar_of_soap:',
        'Tidy',
        'Clean',
        'Scrub'
    ],
    '🧽': [
        'Σφουγγάρι',
        ':sponge:',
        ':yellow:'
    ],
    '🧯': [
        'Πυροσβεστήρας',
        ':fire_extinguisher:',
        ':red:'
    ],
    '🚬': [
        'Τσιγάρα',
        ':cigarette:',
        'Σύμβολο Καπνού'
    ],
    '⚰️': [
        'Φέρετρο',
        ':coffin:',
        'Casket',
        'Κηδεία',
        ':brown:'
    ],
    '⚱️': [
        'Ουρά Κηδείας',
        ':funeral_urn:',
        'Βάζο'
    ],
    '🛡️': [
        'Ασπίδα',
        ':shield:'
    ],
    '⚙️': [
        'Εργαλείο',
        ':gear:',
        'Ρυθμίσεις',
        'Επιλογές',
        ':gray:',
        ':grey:'
    ],
    '⚖️': [
        'Κλίμακα Ισορροπίας',
        ':balance_scale:',
        'Κλίμακες της δικαιοσύνης'
    ],
    '🔗': [
        'Σύνδεσμος',
        ':link:',
        'Αλυσίδα',
        'Υπερσύνδεσμος',
        'Συνδεδεμένη Αλυσίδα',
        ':gray:',
        ':grey:'
    ],
    '💀': [
        'Κρανίο',
        ':skull:',
        'Θάνατος',
        'Γκρι Κρανίο',
        'Σκελετός',
        ':white:'
    ],
    '☠️': [
        'Κρανίο και Σταυροκόκαλα',
        ':skull_and_crossbones:',
        ':white:'
    ],
    '🎡': [
        'Τροχός Τροχού',
        ':ferris_wheel:',
        'Μεγάλος Τροχός',
        'Fairgroundl',
        'Παρατήρηση Τροχού'
    ],
    '⛽': [
        'Αντλία Καυσίμου',
        'αντλία καυσίμου:',
        'Πετρέλαιο',
        'Βενζίνη',
        'Αέριο',
        ':red:'
    ],
    '🚨': [
        'Αστυνομία Αυτοκίνητα Περιστρεφόμενο Φως',
        ':rotating_light:',
        ':police_police_car:',
        'Φως Έκτακτης Ανάγκης',
        'Φως Που Αναβοσβήνει',
        'Siren',
        ':red:'
    ],
    '🚥': [
        'Φως Οριζόντιας Κυκλοφορίας',
        ':horizontal_traffic_light:',
        ':green:',
        ':red:',
        ':yellow:',
        ':orange:'
    ],
    '🚦': [
        'Φως Κατακόρυφης Κυκλοφορίας',
        ':vertical_traffic_light:',
        ':green:',
        ':red:',
        ':yellow:',
        ':orange:'
    ],
    '⚓': [
        'Αγκυροβολία Ναυάρχου Μοτίβο',
        ':anchor:',
        'Ψαράς'
    ],
    '🚧': [
        'Υπογραφή Κατασκευής',
        ':construction_sign:',
        'Μαύρο Και Κίτρινο Ριγέ Σημάδι',
        ':yellow:',
        ':black:'
    ],
    '🪂': [
        'Parachute',
        ':parachute:'
    ],
    '💺': [
        'Έδρα',
        ':seat:',
        'Λεωφορείο Αεροπλάνο Τρένο Αεροπλάνο'
    ],
    '🪐': [
        'Κρόνος',
        ':saturn:'
    ],
    '🎆': [
        'Πυροτεχνήματα',
        ':fireworks:',
        'Έκρηξη'
    ],
    '🎇': [
        'Senko Hanabi',
        ':senko_hanabi:',
        'Πυροτέχνημα Sparkler'
    ],
    '💷': [
        'Τραπεζογραμμάτιο Λίρας',
        ':pound:',
        ':pound_banknote:',
        '£20 Σημείωση',
        'Είκοσι Γρήγορη Σημείωση',
        'Τραπεζογραμμάτιο με σημάδι λίρας',
        ':purple:'
    ],
    '💶': [
        'Euro Banknote',
        ':euro:',
        ':euro_banknote:',
        '€100 Σημείωση',
        'Τραπεζογραμμάτιο με Ευρώ',
        ':blue:'
    ],
    '💵': [
        'Τραπεζογραμμάτιο Δολαρίου',
        ':dollar:',
        ':dollar_banknote:',
        '$1 Σημείωση',
        'Banknote with Dollar Sign',
        'Λογαριασμός Δολαρίου',
        'Δολάριο Αμερικής',
        ':green:'
    ],
    '💴': [
        'Τραπεζογραμμάτιο Γιεν',
        ':yen:',
        ':yen_banknote:',
        '◆ Σημείωση 1000',
        'Σημείωση Yen',
        'Banknote with Yen Sign',
        ':yellow:'
    ],
    '⛺': [
        'Σκηνή Κατασκήνωσης',
        ':camping_tent:'
    ],
    '⛲': [
        'Κρήνη',
        ':fountain:',
        'Χαρακτηριστικό Νερό',
        'Πηγή Νερού',
        'Πάρκο'
    ],
    '💰': [
        'Τσάντα Χρήματος',
        ':money_bag:',
        'Moneybags',
        'Πλούσιο',
        '$'
    ],
    '💸': [
        'Χρήματα με φτερά',
        ':money_with_wings:',
        'Πετώντας Χρήματα',
        ' Χάνοντας Χρήματα'
    ],
    '🏷️': [
        'Ετικέτα Ετικέτας',
        ':label_tag:'
    ],
    '🔖': [
        'Σελιδοδείκτης',
        ':bookmark:',
        'Ετικέτα Τιμής',
        'Ετικέτα'
    ],
    '📑': [
        'Καρτέλες Σελιδοδεικτών',
        ':bookmark_tabs:',
        ':white:'
    ],
    '📯': [
        'Ταχυδρομικό Κέρας',
        ':postal_horn:',
        'Bugle',
        'Γαλλικό Κέρας'
    ],
    '🪁': [
        'Kite',
        ':kite:',
        ':purple:'
    ],
    '🪀': [
        'Γιο-Γιο',
        ':yo_yo:',
        ':yo-yo:'
    ],
    '🎊': [
        'Confetti Ball',
        ':confetti_ball:',
        'Confetti'
    ],
    '🎉': [
        'Πάρτυ Popper',
        ':party_popper:',
        'Εορτασμός',
        'Καπέλο Πάρτυ'
    ],
    '🎈': [
        'Μπαλόνι',
        ':balloon:',
        'Πάρτι',
        'Κόκκινο Μπαλόνι',
        ':red:'
    ],
    '🌡️': [
        'Θερμόμετρο',
        ':thermometer:',
        'Ζεστός Καιρός',
        'Θερμοκρασία',
        ':red:'
    ],
    '🛢️': [
        'Βαρέλι Πετρελαίου',
        ':oil_drum:'
    ],
    '💣': [
        'Βόμβα',
        ':bomb:',
        'έκρηξη'
    ],
    '🔪': [
        'Μαχαίρι Κουζίνας',
        ':kitchen_knife:',
        'Μαχαίρι',
        'Μαχαίρι Κρεοπωλών',
        'Hocho'
    ],
    '🏺': [
        'Amphora',
        ':amphora:',
        'Βάζο',
        'Βάζο'
    ],
    '🗺️': [
        'Παγκόσμιος Χάρτης',
        ':world_map:'
    ],
    '🎼': [
        'Μουσική Βαθμολογία',
        ':musical_score:',
        'Μουσική Φύλλων',
        'Treble Clef'
    ],
    '🎬': [
        'Πίνακας Clapper',
        ':clapper_board:',
        'Αποκοπή',
        'Ενέργεια',
        'Διευθυντής',
        'Υλικό Κινηματογράφου'
    ],
    '🎻': [
        'Βιολίνη',
        ':violin:',
        'Κουαρτέτο Συμβολοσειράς',
        'Κόσμοι Μικρότερο Βιολί'
    ],
    '🎺': [
        'Τρομπέτα',
        ':trumpet:',
        'Κέρατο',
        'Τζαζ'
    ],
    '🎸': [
        'Κιθάρα',
        ':guitar:',
        'Ακουστική Κιθάρα',
        'Κιθάρα Μπάσου',
        'Ηλεκτρική Κιθάρα'
    ],
    '🎷': [
        'Σαξόφωνο',
        ':saxophone:',
        'Τζαζ',
        'Sax'
    ],
    '🥁': [
        'Τύμπανο',
        ':drum:',
        'Τύμπανο με drumsticks'
    ],
    '🎹': [
        'Πιάνο',
        ':piano:',
        'Μουσικό Πληκτρολόγιο',
        ':white:',
        ':black:'
    ],
    '🪕': [
        'Μπάνζο',
        ':banjo:'
    ],
    '🪗': [
        'Ακορντεόν',
        ':accordion:'
    ],
    '🪘': [
        'Μακρύ Τύμπανο',
        ':long_drum:'
    ],
    '🎨': [
        'Παλέτα Καλλιτέχνη',
        ':artist_palette:',
        'Τέχνη',
        'Ζωγραφική'
    ],
    '🧩': [
        'Κομμάτι Παζλ',
        ':puzzle_piece:',
        'Κομμάτι Παζλ',
        ':green:'
    ],
    '🎲': [
        'Πέθανε Παιχνιδιού',
        ':game_die:',
        'Ζάρια',
        ':white:'
    ],
    '🎭': [
        'Ερμηνεία Τεχνών',
        'εκτέλεση_τεχνών',
        'Θέατρο',
        'Θέατρο',
        'Μάσκες Δράμας',
        'Μάσκες Για Θέατρο',
        'Μάσκες Τραγωδίας και Κωμωδίας',
        'Βενετία'
    ],
    '🔍': [
        'Μεγεθυντικό Γυαλί Πλακέ Αριστερά',
        ':mag:',
        ':magnifying_glass_tilted_left:',
        'Magnifier',
        'Εικονίδιο Αναζήτησης',
        'Αριστερό Σημείο Μεγεθυντικό Γυαλί',
        'Εύρεση',
        ':transparent:'
    ],
    '🔎': [
        'Μεγεθυντικό Γυαλί Που Κλιαρίζεται Δεξιά',
        ':mag_right:',
        ':magnifying_glass_tilted_right:',
        'Magnifier',
        'Εικονίδιο Αναζήτησης',
        'Μεγεθυντικό Γυαλί Δεξιάς Σημείωσης',
        'Εύρεση',
        ':transparent:'
    ],
    '⌛': [
        'Hourglass Done',
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
        'Hourglass Δεν Έγινε',
        ':hourglass_flowing_sand:',
        ':hourglass_not_done:',
        'Hourglass με ρέοντας άμμο',
        'Busy',
        'Time',
        'Egg timer',
        'Flowing',
        'Sand Clock'
    ],
    '🕐': [
        'Ένα OClock',
        ':clock1:',
        ':one_oclock:',
        'Ρολόι Πρόσωπο One OClock',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕜': [
        'Ρολόι Πρόσωπο One-Thirty',
        ':clock130:',
        ':one_thirty:',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕑': [
        'Δύο OClock',
        ':clock2:',
        ':two_oclock:',
        'Ρολόι Πρόσωπο Δύο Oclock',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕝': [
        'Ρολόι Πρόσωπο Δύο-Τριάντα',
        ':clock230:',
        ':two_thirty:',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕒': [
        'Τρεις OClock',
        ':clock3:',
        ':three_oclock:',
        'Ρολόι Πρόσωπο Τρεις OClock',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕞': [
        'Ρολόι Πρόσωπο Τρία-Τριάντα',
        ':clock330:',
        ':three_thirty:',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕓': [
        'Τέσσερις OClock',
        ':clock4:',
        ':four_oclock:',
        'Ρολόι Πρόσωπο Τέσσερις Oclock',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕟': [
        'Ρολόι Πρόσωπο Τέσσερι-Τριάντα',
        ':clock430:',
        ':four_thirty:',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕔': [
        'Πέντε OClock',
        ':clock5:',
        ':five_oclock:',
        'Ρολόι Πρόσωπο Πέντε OClock',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕠': [
        'Πέντε-Τριάντα Πρόσωπο Ρολογιού',
        ':clock530:',
        ':five_thirty:',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕕': [
        'Έξι OClock',
        ':clock6:',
        ':size_oclock:',
        'Ρολόι Πρόσωπο Έξι OClock',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕡': [
        'Πρόσωπο Ρολόι Έξι-Τριάντα',
        ':clock630:',
        ':six_thirty:',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕖': [
        'Επτά OClock',
        ':clock7:',
        ':seven_oclock:',
        'Ρολόι Πρόσωπο Επτά OClock',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕢': [
        'Ρολόι Πρόσωπο Επτά-Τριάντα',
        ':clock730:',
        ':sever_thirty:',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕗': [
        'Οκτώ OClock',
        ':clock8:',
        ':eight_oclock:',
        'Οχτώ OClock Προσώπου Ρολογιού',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕣': [
        'Ογδόντα-Τριάντα Προσώπου Ρολογιού',
        ':clock830:',
        ':eight_thirty:',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕘': [
        'Εννέα OClock',
        ':clock9:',
        ':nine_clock:',
        'Πρόσωπο Ρολόι Εννέα OClock',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕤': [
        'Πρόσωπο Ρολόι Εννοί-Τριάντα',
        ':clock930:',
        ':nine_thirty:',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕙': [
        'Δέκα OClock',
        ':clock10:',
        ':ten_oclock:',
        'Ρολόι Πρόσωπο Δέκα OClock',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕥': [
        'Ρολόι Πρόσωπο Δεν-Τριάντα',
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
        'Ρολόι Πρόσωπο Έντεκα OClock',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕦': [
        'Ρολόι Πρόσωπο Έντεκα Τριάντα',
        ':clock1130:',
        ':eleven_thirty:',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕛': [
        'Δώδεκα OClock',
        ':clock12:',
        ':twelve_oclock:',
        'Ρολόι Πρόσωπο Δώδεκα OClock',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '🕧': [
        'Ρολόι Πρόσωπο Δώδεκα-Τριάντα',
        ':clock1230:',
        ':twelve_thirty:',
        ':gray:',
        ':grey:',
        'Time'
    ],
    '♨️': [
        'Καυτά ελατήρια',
        ':hot_springs:',
        'Onsen',
        'Ατμός',
        ':red:'
    ],
    '💈': [
        'Κόμβος Πολωνός',
        ':barber_pole:',
        'Κατάστημα Barber',
        'Κουδούνια Λωρίδες',
        'Κομμωτήριο',
        ':blue:',
        ':red:'
    ],
    '🎪': [
        'Σκηνή Τσίρκου',
        ':circus_tent:',
        'Μεγάλη Κορυφή',
        'Τσίρκο'
    ],
    '💢': [
        'Σύμβολο Θυμού',
        ':anger_symbol:',
        'Σημάδι Οργής',
        'Λαχανικό Ποπ',
        ':red:'
    ],
    '🗯️': [
        'Δεξιά Φούσκα Θυμού',
        ':right_anger_bubble:',
        ':anger_right:',
        'Zig Zag Bubble',
        'Θυμωμένος Φούσκα Ομιλίας',
        ':white:'
    ],
    '🗨️': [
        'Αριστερή Φούσκα Ομιλίας',
        ':left_speech_bubble:',
        ':speech_left:'
    ],
    '💊': [
        'Pill',
        ':pill:',
        'Καψάκιο',
        'Δισκίο',
        'Ναρκωτικά',
        'Άρωστο',
        'ill',
        ':yellow:',
        ':red:'
    ],
    '🎎': [
        'Κούκλες',
        ':dolls:',
        'Hinamatsuri',
        'Αυτοκρατορική Κούκλες',
        'Ιαπωνικές Κούκλες'
    ],
    '🎏': [
        'Ροή Carp',
        ':carp_streamer:',
        'Σημαία Ψαριών',
        'Koinobori',
        'Κάλτσες Ανέμου'
    ],
    '🎐': [
        'Καντράν Ανέμου',
        ':wind_chime:',
        'Furin',
        'Μέδουσες',
        'Κουδούνι Ανέμου'
    ],
    '🎀': [
        'Κορδέλα Τόξο',
        ':ribbon_bow:',
        'Ροζ Τόξο',
        'Τόξο',
        ':pink:'
    ],
    '🎁': [
        'Τυλιγμένο Δώρο',
        ':wrapped_gift:',
        'Παρόν Γενεθλίων',
        'Χριστουγεννιάτικο Δώρο',
        'Δώρο',
        'Κουτί Δώρου',
        'Παρόν',
        'Περιτυλιγμένο Παρόν'
    ],
    '🎫': [
        'Αίτημα',
        ':ticket:',
        'Stub Αιτήματος',
        'Εισιτήριο World Tour'
    ],
    '🃏': [
        'Τζόκερ',
        ':joker:',
        'Κάρτα Joker',
        'Παίζοντας Κάρτα Μαύρο Τζόκερ'
    ],
    '💡': [
        'Λαμπτήρας Φωτός',
        ':light_bulb:',
        'Ιδέα',
        'Ηλεκτρικός Λαμπτήρας'
    ],
    '🔦': [
        'Φακός',
        ':flashlight:',
        'Φακός',
        'Ηλεκτρικός Φακός'
    ],
    '🏮': [
        'Φανάρι Κόκκινου Χαρτιού',
        ':izakaya_lantern:',
        ':lantern:',
        ':red_paper_lantern:',
        'Ασιατικό Φανάρι',
        'Ιαπωνικό Φανάρι',
        'Κόκκινο Φανάρι',
        'Φανάρι Izakaya',
        ':red:'
    ],
    '📦': [
        'Πακέτο',
        ':package:',
        'Κουτί',
        'Δέμα',
        ':brown:'
    ],
    '📇': [
        'Κάρτα Ευρετηρίου',
        ':card_index:',
        'Rolodex',
        'Κάρτα Συστήματος',
        'Ευρετήριο Κάρτας'
    ],
    '🕳️': [
        'Τρύπα',
        ':hole:',
        ':black:'
    ],
    '👁️‍🗨️': [
        'Είμαι Ένας Μάρτυρας',
        ':eye_in_speech_bubble:',
        ':eye_speech_bubble:',
        ':eye-in-speech-bubble:',
        'Μάτι σε ομιλία Φούσκα'
    ],
    '⚜️': [
        'Fleur-de-lis',
        ':fleur_de_lis:',
        'Προσκόπια',
        'Άγιοι Της Νέας Ορλεάνης'
    ],
    '⚗️': [
        'Alembic',
        ':alembic:'
    ],
    '🕯️': [
        'Κερί',
        ':candle:',
        ':white:'
    ],
    '🖼️': [
        'Πλαισιωμένη Εικόνα',
        ':framed_picture:',
        'Ζωγραφική',
        'Πλαίσιο Εικόνας',
        'Πλαίσιο με εικόνα'
    ],
    '🛍️': [
        'Ψώνια Τσάντες',
        ':shopping_bags:'
    ],
    '🛒': [
        'Καλάθι Αγορών',
        ':shopping_cart:',
        'Καροτσάκι Αγορών',
        ':shopping_trolley:',
        ':gray:',
        ':grey:',
        'Market'
    ],
    '🎟️': [
        'Αιτήματα Εισαγωγής',
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
        'Απόδειξη',
        ':receipt:',
        ':white:',
        'Bill'
    ],
    '🧮': [
        'Abacus',
        ':abacus:'
    ],
    '🧫': [
        'Πιάτο Petri',
        ':petri_dish:'
    ],
    '🧹': [
        'Σκούρο',
        ':broom:',
        'Πινέλο',
        'Σάρωση',
        ':yellow:',
        'Tidy',
        'Clean'
    ],
    '🎰': [
        'Κουλοχέρη',
        ':slot_machine:',
        'Καζίνο',
        'Μηχανή Φρούτων',
        'Τυχερός',
        'Μηχανή Πόκερ'
    ],
    '🦽': [
        'Χειροκίνητη αναπηρική καρέκλα',
        ':manual_wheelchair:',
        ':wheelchair:'
    ],
    '🦼': [
        'Μηχανοκίνητη Αναπηρική Καρέκλα',
        ':motorized_wheelchair:'
    ],
    '🪔': [
        'Λαμπτήρας Diya',
        ':diya_lamp:'
    ],
    '🦯': [
        'White Cane',
        ':whie_cane:'
    ],
    '🩸': [
        'Πτώση του αίματος',
        ':drop_of_blood:',
        ':red:'
    ],
    '🩹': [
        'Κολλητικό Επίδεσμο',
        ':adhesive_bandage:'
    ],
    '🩺': [
        'Στεθοσκόπιο',
        ':stethoscope:'
    ],
    '🪶': [
        'Φτερό',
        ':feather:',
        'Animal'
    ],
    '🪤': [
        'Παγίδα Ποντικιού',
        ':mouse_trap:'
    ],
    '🫖': [
        'Teapot',
        ':teapot:'
    ],
    '🪨': [
        'Ροκ',
        ':rock:',
        ':gray:',
        ':grey:'
    ],
    '🪵': [
        'Ξύλο',
        ':wood:',
        ':brown:'
    ],
    '🪄': [
        'Μαγικό Ραβδί',
        ':magin_wand:'
    ],
    '🔮': [
        'Κρυστάλλινη Μπάλα',
        ':crystal_ball:',
        'Clairvoyant',
        'Τύχης Teller',
        'Ψυχική',
        'Μωβ Κρύσταλλο',
        ':purple:'
    ],
    '🪅': [
        'Πινγκάτα',
        ':pinata:',
        ':piñata:'
    ],
    '🪆': [
        'Εμφιαλώνοντας Κούκλες',
        ':nesting_dolls:',
        'Matryoshka'
    ],
    '🪡': [
        'Βελόνα Ράψιμο',
        ':swing_needle:'
    ],
    '🪢': [
        'Κόμβος',
        ':knot:',
        ':red:',
        ':blue:'
    ],
    '🪙': [
        'Κέρμα',
        ':coin:'
    ],
    '🪃': [
        'Boomerang',
        ':boomerang:',
        ':brown:'
    ],
    '🪥': [
        'Οδοντόβουρτσα',
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
        'Ξύρισμα',
        ':razor:'
    ],
    '🫙': [
        'Βάζο',
        ':jar:',
        ':transparent:'
    ],
    '🛞': [
        'Τροχός',
        ':wheel:',
        'Οχήματα',
        'Αυτοκίνητα',
        ':black:'
    ],
    '🛟': [
        'Σημείωση Δακτυλίου',
        ':ring_buoy:',
        'Επιφύλαξη Ζωής',
        'Σωσίβιο Δαχτυλίδι',
        'Σκάφη',
        'Ασφάλεια',
        'Νερό',
        'Εξοικονόμηση Ζωής',
        ':red:',
        ':white:'
    ],
    '🪬': [
        'Hamsa',
        ':hamsa:',
        'Islam',
        'Ιουδαϊσμός',
        'Buddhism',
        'Χριστιανισμός',
        'Θρησκείες',
        'Τύχη',
        'Προστασία',
        'Καθοδήγηση',
        'Θηλυκή Ισχύς',
        'Πίστη',
        ':blue:'
    ],
    '🪩': [
        'Μπάλα Καθρέφτη',
        ':mirror_ball:',
        'Ντίσκο Μπάλα'
    ],
    '🪫': [
        'Χαμηλή Μπαταρία',
        ':low_battery:',
        ':red:',
        'Ενέργεια',
        'Κόκκινο',
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
        'Φυσαλίδες',
        ':bubbles:',
        'Soap Suds',
        'Ανθρακούχο',
        'Αναβράζουσα Προσωπικότητα',
        ':transparent:'
    ],
    '🪪': [
        'Κάρτα Ταυτοποίησης',
        ':identification_card:',
        'Ταυτότητα',
        'Διαβατήριο',
        'ID',
        'Country',
        'Security',
        'Travel'
    ],
    '🧿': [
        'Nazar Amulet',
        ':nazar_amulet:',
        'Κακό Μάτι',
        ':blue:'
    ],
    '🧸': [
        'Αρκουδάκι',
        ':teddy_bear:',
        'Παιχνίδι',
        ':brown:',
        'Baby',
        'Child',
        'Children'
    ]
};