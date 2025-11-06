// Sprachen

const deutsch = ["Freizeitangebote mit Ehrenamtlichen",
    "Zeit", "Montag", "Dienstag","Mittwoch", "Donnerstag", "Freitag", 
    "14:00", "Deutschkurs", "14:30", "Kreativangebot", 
    "Brettspiele", "Sport Workout für Männer", "15:30",
    "Sport Workout für Frauen"];

const englisch = ["Leisure activities with volunteers",
    "Time", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", 
    "14:00", "German course", "14:30", "Crafting", 
    "Board games", "Sports workout for men", "15:30",
    "Sports workout for women"];

const franzoesisch = ["Activités de loisirs avec des bénévoles",
    "Heure", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", 
    "14h00", "Cours d'allemand", "14h30", "Bricoler", 
    "Jeux de société", "Entraînement sportif pour hommes", "15h30",
    "Entraînement sportif pour femmes"];

const tuerkisch = ["Gönüllülerle birlikte yapılan boş zaman etkinlikleri",
    "Zaman", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", 
    "14:00", "Almanca kursu", "14:30", "Yaratıcı etkinlikler", 
    "Masa oyunları", "Erkekler için spor egzersizi", "15:30",
    "Kadınlar için spor egzersizi"];

const russisch = ["Досуг с волонтерами",
    "Время", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", 
    "14:00", "Курс немецкого языка", "14:30", "Творческие занятия", 
    "Настольные игры", "Спортивные упражнения для мужчин", "15:30",
    "Спортивные упражнения для женщин"];

const arabisch = ["أوقات الفراغ مع المتطوعين",
    "الوقت", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", 
    "الساعة 14:00", "دورة اللغة الألمانية", "الساعة 14:30", "أنشطة إبداعية", 
    "ألعاب لوحية", "رياضة للرجال", "الساعة 15:30",
    "رياضة للنساء"]

const farsi = ["فعالیت‌های اوقات فراغت با داوطلبان",
    "زمان", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنجشنبه", "جمعه",
    "ساعت ۲ بعد از ظهر", "دوره زبان آلمانی", "ساعت ۲:۳۰ بعد از ظهر", "فعالیت خلاقانه",
    "بازی‌های تخته‌ای", "ژیمناستیک برای آقایان", "ساعت ۳:۳۰ بعد از ظهر",
    "ژیمناستیک برای خانم‌ها"];

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
    for (let index = 0; index < 15; index++) {
        id = String(index);
        document.getElementById(id).innerHTML = liste[index];
    }
}

// Browser

// Brower Sprache
const sprache = navigator.language; // z.B. "de-DE"
console.log(sprache);

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

        // Fallback auf Englisch
        if (liste.length === 0) {
            liste = englisch;
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
