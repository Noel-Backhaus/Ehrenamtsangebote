// Sprachen

const deutsch = ["Freizeitangebote mit Ehrenamtlichen",
    "Zeit", "Montag", "Dienstag","Mittwoch", "Donnerstag", "Freitag", 
    "11:00", "Kreativangebot", "14:00",
    "Brettspiele", "Deutschkurs", "14:30",
    "Sport Workout für Männer", "Sport Workout für Männer", "15:30",
    "Sport Workout für Frauen", "Sport Workout für Frauen"];

const englisch = ["Leisure Activities with Volunteers", 
    "Time", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", 
    "11:00", "Crafting", "14:00",
    "Board Games", "German course", "14:30",
    "Sport workout for men", "Sport workout for men", "15:30",
    "Sport workout for women", "Sport workout for women"];

const franzoesisch = ["Activités de loisirs avec des bénévoles", 
    "Heure", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", 
    "11h00", "Bricoler", "14h00",
    "Jeux de société", "Cours d'allemand ", "14h30",
    "Séance d'entraînement sportif pour hommes", "Séance d'entraînement sportif pour hommes", "15h30",
    "Séance d'entraînement sportif pour femmes", "Séance d'entraînement sportif pour femmes"];

const tuerkisch = ["Gönüllülerle birlikte boş zaman etkinlikleri", 
    "Saat", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", 
    "11:00", "Yaratıcı etkinlik", "14:00",
    "Masa oyunları", "Almanca kursu", "14:30",
    "Erkekler için spor egzersizi", "Erkekler için spor egzersizi", "15:30",
    "Kadınlar için spor egzersizi", "Kadınlar için spor egzersizi"];

const russisch = ["Досуг с волонтерами",  
    "Время", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", 
    "11:00", "Творческие занятия", "14:00",
    "Настольные игры", "Курс немецкого языка", "14:30",
    "Спортивная тренировка для мужчин", "Спортивная тренировка для мужчин", "15:30",
    "Спортивная тренировка для женщин", "Спортивная тренировка для женщин"];

const arabisch = ["أنشطة ترفيهية مع متطوعين", 
    "الوقت", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة",
    "11:00", "أنشطة إبداعية", "14:00",
    "ألعاب الطاولة", "دورة اللغة الألمانية", "14:30",
    "تدريب رياضي للرجال", "تدريب رياضي للرجال", "15:30",
    "تدريب رياضي للنساء", "تدريب رياضي للنساء"];

const farsi = ["فعالیت‌های اوقات فراغت با داوطلبان", 
    "زمان", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنجشنبه", "جمعه",
    "۱۱:۰۰ صبح", "فعالیت‌های خلاقانه", "۲:۰۰ بعد از ظهر",
    "بازی‌های تخته‌ای", "دوره زبان آلمانی", "۲:۳۰ بعد از ظهر",
    "ورزش مردان", "ورزش مردان", "۳:۳۰ بعد از ظهر",
    "ورزش زنان", "ورزش زنان"];

// Zuordnung Sprachen

let liste = [];
const kuerzel = ["de", "en", "fr", "tr", "ru", "ar", "fa"];
const sprachListen = {
    de: deutsch,
    en: englisch,
    fr: franzoesisch,
    tr: tuerkisch,
    ru: russisch,
    ar: arabisch,
    fa: farsi
};

// Titel 

const titles = ["Aktivitäten", "Activities", "activités", "faaliyetler", "деятельность", 
    "أنشطة", "فعالیت‌ها"]

// Zuordnung Begriffe 

function setLanguage() {
    for (let index = 0; index < 18; index++) {
        id = String(index);
        document.getElementById(id).innerHTML = liste[index];
    }
}

// Browser

// Brower Sprache
const sprache = navigator.language; // z.B. "de-DE"
console.log(sprache);
document.body.insertAdjacentHTML('beforeend', '<pre>' + navigator.language + '</pre>');

function browserLanguageSet() {
    let select = document.getElementById('languageSelect');
    if (select && (select.value === "" || select.value === null)) {  // Noch keine Sprache ausgewählt, Platzhalter ist aktiv
        // Sprachliste auswählen + Titel
        for (let index = 0; index < 7; index++) {
            if(sprache.includes(kuerzel[index]) && index !== -1) {
                liste = sprachListen[kuerzel[index]];
                document.title = titles[index];
            }
        }
        
        // Begriffe
        setLanguage();
    }
}

// Select 

function selectLanguageSet() {
    let select = document.getElementById('languageSelect');
    
    // Sprachliste auswählen
    if (select) {
        liste = sprachListen[select.value] || englisch;
    }

    // Begriffe
    setLanguage();
    
    // Titel
    for (index = 0; index < 7; index++) {
        if(kuerzel[index] == select.value && index !== -1) {
            document.title = titles[index];
        }
    }
}

// Steuerung

browserLanguageSet();
document.getElementById('languageSelect').addEventListener('change', function() {
    selectLanguageSet();
    browserLanguageSet();
});

