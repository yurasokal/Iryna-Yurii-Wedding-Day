import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';


i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          "description": {
            "part1": 'Edit <1>src/App.js</1> and save to reload.',
            "part2": 'Iryna & Yurii wedding page'
          },
          "navigation": {
            "home": "Home",
            "our-story": "Our Story",
            "venue": "Venue",
            "itinerary": "Itinerary",
            "FAQ": "FAQ",
            "other": "Other"
          },
          "home": {
            "join": "Please join us to celebrate",
            "name": "Iryna & Yurii",
            "details": "May 13, 2023  -  Annone di Brianza, Italy"
          },
          "our-story": {
            "heading": "Our Story",
            "text1": "Feugiat pretium egestas enim blandit purus euismod. Feugiat magna aliquam lectus lectus eu amet. Eros, accumsan purus enim nascetur quam diam felis, fringilla varius. Quis purus nisl orci eu, ultrices. Purus pretium egestas ultricies tempus sit elit. Maecenas pellentesque sit eros vitae. Maecenas suspendisse tincidunt ullamcorper justo neque quis et, laoreet",
            "text2": "Vitae lacus, aliquet lorem mauris, sit dolor sodales. Nullam quam quis lorem dui tristique massa enim. Faucibus sed egestas mollis vivamus et sed sed.",
            "text3": "Feugiat magna aliquam lectus lectus eu amet. Eros, accumsan purus enim nascetur quam diam felis, fringilla varius. Quis purus nisl orci eu, ultrices. Purus pretium egestas ultricies tempus sit elit."
          },
          "venue": {
            "venue": "The Venue",
            "villa-name": "Villa Giani",
            "text": "Feugiat pretium egestas enim blandit purus euismod. Feugiat magna aliquam lectus lectus eu amet. Eros, accumsan purus enim nascetur quam diam felis, fringilla varius.",
            "address": "Via Maggiore, 18, 23841",
            "address2": "Annone di Brianza LC, Italy"
          },
          "accomodation": {
            "apartment1": "Hotel 1",
            "apartment1-description": "Feugiat pretium egestas enim blandit purus euismod. Feugiat magna aliquam lectus lectus eu amet. Eros, accumsan purus enim nascetur quam diam felis, fringilla varius.",
            "apartment2": "Hotel 2",
            "apartment2-description": "Feugiat pretium egestas enim blandit purus euismod. Feugiat magna aliquam lectus lectus eu amet. Eros, accumsan purus enim nascetur quam diam felis, fringilla varius."
          },
          "itinerary": {
            "day1": "Saturday, May 13",
            "day2": "Sunday, May 14",
            "day3": "Monday, May 15"
          }
        }
      },
      de: {
        translation: {
          "description": {
            "part1": 'Ändere <1>src/App.js</1> und speichere um neu zu laden.',
            "part2": 'Ірина & Юрій deutsch page'
          },
          "navigation": {
            "home": "Hōm",
            "our-story": "Unsere Geschichte",
            "venue": "Veranstaltungsort",
            "itinerary": "Route",
            "FAQ": "FAQ",
            "other": "Andere"
          },
          "home": {
            "join": "Bitte feiern Sie mit uns",
            "name": "Iryna & Yurii",
            "details": "13. Mai 2023  -  Annone di Brianza, Italien"
          }
        }
      },
      ua: {
        translation: {
          "description": {
            "part1": 'Укр <1>src/App.js</1> змінити',
            "part2": 'Ірина & Юрій. Весільна сторінка'
          },
          "navigation": {
            "home": "Домашня сторінка",
            "our-story": "Наша історія",
            "venue": "Місце проведення",
            "itinerary": "Маршрут",
            "FAQ": "Часті запитання",
            "other": "Інше"
          },
          "home": {
            "join": "Будь ласка, приєднуйтесь до нас, щоб відсвяткувати",
            "name": "Ірина & Юрій",
            "details": "13 Травня 2023р  -  Annone di Brianza, Італія"
          }
        }
      }
    }
  });

export default i18n;