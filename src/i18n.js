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
          "navigation": {
            "home": "Home",
            "our-story": "Our Story",
            "venue": "Venue",
            "itinerary": "Itinerary",
            "FAQ": "FAQ",
            "photos": "Photos"
          },
          "home": {
            "join": "Please join us to celebrate",
            "name": "Iryna & Yurii",
            "details": "May 13, 2023  -  Annone di Brianza, Italy"
          },
          "our-story": {
            "heading": "Our Story",
            "text1": "In October 2019, we were both entangled in the rhythm of the bachata dance and have not let go until now",
            "text2": "We are not together for a really long time, but together we survived the pandemic, many trips together, life together and separation by war. Therefore, we believe that we are ready for this such a serious step",
            "text3": "Our marriage is the first stone in the construction of our family, our long journey on the road to a joint life. Therefore, we gladly invite you to join us on this day"
          },
          "venue": {
            "venue": "The Venue",
            "villa-name": "Villa Giani",
            "text": "We invite you to share with us the day of the creation of our family, in a wonderful place that we fell in love with from the first second of being there, near the picturesque Lake - Lago di Annone",
            "address": "Via Maggiore, 18, 23841",
            "address2": "Annone di Brianza LC, Italy"
          },
          "church": {
            "church": "Ukrainian Greek Catholic Church",
            "church-name": "Chiesa di San Donnino",
            "text": "The marriage ceremony will be conducted by Father Mykola from Lviv, who is in charge of the branch of the Greek Catholic Church in Como",
            "address": "Via Armando Diaz, 125",
            "address2": "22100 Como CO, Italy"
          },
          "accomodation": {
            "apartment1": "Villa for Family",
            "apartment1-description": "The 18th-century Villa Giani is located in Annone di Brianza in the Lombardy region, amidst a spacious garden with olive trees. While staying at the villa, you can imagine yourself as an actor from an old Italian film. The distance from Villa Giani to the city of Como is 35 minutes (24 km). The center of Milan, Milan Bergamo Airport can be reached in 55 minutes (46 km). Malpensa airport can be reached in 55 minutes (66 km). Lugano (Switzerland) can be reached in 65 minutes (64 km). Nuremberg (Germany) can be reached in 6 hours (600 km)",
            "apartment2": "Apartament for Friends",
            "apartment2-description": "Villa Maggie on Lake Como, Via Sant'Antonio 15, 23864 Malgrate, Italy. To Villa Giani 12min by car (10km). Modern apartments with their own kitchen, a view of the lake and, if the booking is correct, with an open-air swimming pool"
          },
          "itinerary": {
            "heading": "Itinerary",
            "day1": "Friday, May 12",
            "day2": "Saturday, May 13",
            "day3": "Sunday, May 14",
            "day4": "Monday, May 15"
          },
          "faq": {
            "faq": "FAQ",
            "question1": "What bring with you",
            "answer1": "kda kaksdnkasn dkanskdnaskldnasnd;kasndkl; asndknaskdnas;kdnkasndkasndk;asndk nask dnaskdn aksnd kansdkans dla",
            "question2": "Thursday, Monday",
            "answer2": "aaa",
            "question3": "",
            "answer3": "",
            "question4": "",
            "answer4": "",
            "question5": "Gifts",
            "answer5": "",
            "question6": "",
            "answer6": "",
          },
          "slider": {
            "heading": "Photo gallery"
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
            "photos": "Photos"
          },
          "home": {
            "join": "Bitte feiern Sie mit uns",
            "name": "Iryna & Yurii",
            "details": "13. Mai 2023  -  Annone di Brianza, Italien"
          },
          "our-story": {
            "heading": "Our Story",
            "text1": "В жовтні 2019 року нас обох закрутила в ритмі танцю бачата й не відпускає нас до тепер",
            "text2": "Нашій пара з одноого боку і не довго часу, але разом ми пережили пандемію, багато спільних поїздок, життя разом та розлуку війною",
            "text3": "Наш шлюб - це перший камінчик, в будівництві нашої сім'ї, нашої довгої подорожі дорогою в спільне життя. То ж запрошуємо вас долучитися до нас в цей день"
          },
        }
      },
      ua: {
        translation: {
          "description": {
            "part1": 'Укр <1>src/App.js</1> змінити',
            "part2": 'Ірина & Юрій. Весільна сторінка'
          },
          "navigation": {
            "home": "Головна",
            "our-story": "Наша історія",
            "venue": "Місце",
            "itinerary": "Маршрут",
            "FAQ": "Запитання",
            "photos": "Фото"
          },
          "home": {
            "join": "Запрошуємо вас на весілля",
            "name": "Ірина & Юрій",
            "details": "13 Травня 2023р  -  Annone di Brianza, Італія"
          },
          "our-story": {
            "heading": "Наша Історія",
            "text1": "В жовтні 2019 року нас обох закрутила в ритмі танцю бачата й не відпускає до тепер",
            "text2": "Нашій пара з одноого боку і не довго часу, але разом ми пережили пандемію, багато спільних поїздок, життя разом та розлуку війною",
            "text3": "Наш шлюб - це перший камінчик, в будівництві нашої сім'ї, нашої довгої подорожі дорогою в спільне життя. То ж запрошуємо вас долучитися до нас в цей день"
          },
          "venue": {
            "venue": "Місце проведення",
            "villa-name": "Вілла Джіані",
            "text": "Запрошуємо вас розділити з нами день створення нашої родини, в чудовому місці, яке ми полюбили з першої секунди перебування там, неподалік мальовничого італійського озера Анноне",
            "address": "Via Maggiore, 18, 23841",
            "address2": "Annone di Brianza LC, Italy"
          },
          "church": {
            "church": "Українська Греко-Католицька Церква",
            "church-name": "Церква Сан Донніно",
            "text": "Церемонію шлюбу буде проводити львів'янин отець Микола, який опікується осередком греко-католицької церкви в м.Комо",
            "address": "Via Armando Diaz, 125",
            "address2": "Комо, Італія"
          },
          "accomodation": {
            "apartment1": "Вілла для сім'ї",
            "apartment1-description": "Вілла Джіані, будівля 18 століття розташована в Анноне-ді-Бріанца в регіоні Ломбардія, посеред просторого саду з оливковими деревами. Перебуваючи на віллі можна уявити себе актором одного із старих італійських фільмів. Відстань від вілли Giani до міста Комо становить 35хвилин (24 км). До центру Мілану, аеропорту Мілан Бергамо можна доїхати за 55 хвилин (46км). До аеропорту Malpensa можна доїхати за 55хв(66км). До Лугано ( Швейцарія ) можна доїхати за 65хв (64km).  До Нюрнберга ( Німеччина ) можна доїхати за 6годин ( 600km )",
            "apartment2": "Апартаменти для друзів",
            "apartment2-description": "Вілла Меггі на озері Комо, Via Sant'Antonio 15, 23864 Мальта, Італія. Від Вілли Джіані потрібно 12 хвилинах дороги автомобілем (10 км). Сучасні апартаменти із своєю кухнею, виглядом на озеро і якщо букінг пише правду з басейном під відкритим небом"
          },
          "itinerary": {
            "heading": "Маршрут",
            "day1": "Пятниця, 12 травня",
            "day2": "Субота, 13 травня",
            "day3": "Неділя, 14 травня",
            "day4": "Понеділок, 15 травня"
          },
          "faq": {
            "faq": "Відповіді на часті запитання",
            "question1": "Що взяти з собою",
            "answer1": "Тапочки",
            "question2": "Четвер, понеділок",
            "answer2": "В четвер ввечері прилітає частина родини, після чого вони зупиняться в Мілані на ночівлю. В п'ятницю зранку прогуляються центром Мілану і на обід будуть на віллі. В понеділок з раненького ранку більшість людей вилітає",
            "question3": "Житло",
            "answer3": "Для сім'ї ми орендуємо цілу віллу з обіду пятниці до ранку понеділка, для друзів апартаменти з пятниці по неділю неподалік нашої вілли (10хв їзди автомобілем)",
            "question4": "",
            "answer4": "",
            "question5": "Подарунки",
            "answer5": "Оскільки станом на зараз в нас досі немає житла, а також дорога додому буде далека, тому б ми дуже просили утриматися від габаритних подарунків та подарунків для дому",
            "question6": "",
            "answer6": "",
          },
          "slider": {
            "heading": "Фото галерея"
          }
        }
      }
    }
  });

export default i18n;