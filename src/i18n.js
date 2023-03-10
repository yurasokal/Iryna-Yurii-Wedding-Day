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
            "part1": '??ndere <1>src/App.js</1> und speichere um neu zu laden.',
            "part2": '?????????? & ???????? deutsch page'
          },
          "navigation": {
            "home": "H??m",
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
            "text1": "?? ???????????? 2019 ???????? ?????? ???????? ?????????????????? ?? ?????????? ?????????? ???????????? ?? ???? ?????????????????? ?????? ???? ??????????",
            "text2": "?????????? ???????? ?? ?????????????? ???????? ?? ???? ?????????? ????????, ?????? ?????????? ???? ???????????????? ????????????????, ???????????? ???????????????? ??????????????, ?????????? ?????????? ???? ?????????????? ????????????",
            "text3": "?????? ???????? - ???? ???????????? ????????????????, ?? ?????????????????????? ?????????? ??????'??, ?????????? ???????????? ???????????????? ?????????????? ?? ?????????????? ??????????. ???? ?? ???????????????????? ?????? ???????????????????? ???? ?????? ?? ?????? ????????"
          },
        }
      },
      ua: {
        translation: {
          "description": {
            "part1": '?????? <1>src/App.js</1> ??????????????',
            "part2": '?????????? & ????????. ???????????????? ????????????????'
          },
          "navigation": {
            "home": "??????????????",
            "our-story": "???????? ??????????????",
            "venue": "??????????",
            "itinerary": "??????????????",
            "FAQ": "??????????????????",
            "photos": "????????"
          },
          "home": {
            "join": "???????????????????? ?????? ???? ??????????????",
            "name": "?????????? & ????????",
            "details": "13 ???????????? 2023??  -  Annone di Brianza, ????????????"
          },
          "our-story": {
            "heading": "???????? ??????????????",
            "text1": "?? ???????????? 2019 ???????? ?????? ???????? ?????????????????? ?? ?????????? ?????????? ???????????? ?? ???? ?????????????????? ???? ??????????",
            "text2": "?????????? ???????? ?? ?????????????? ???????? ?? ???? ?????????? ????????, ?????? ?????????? ???? ???????????????? ????????????????, ???????????? ???????????????? ??????????????, ?????????? ?????????? ???? ?????????????? ????????????",
            "text3": "?????? ???????? - ???? ???????????? ????????????????, ?? ?????????????????????? ?????????? ??????'??, ?????????? ???????????? ???????????????? ?????????????? ?? ?????????????? ??????????. ???? ?? ???????????????????? ?????? ???????????????????? ???? ?????? ?? ?????? ????????"
          },
          "venue": {
            "venue": "?????????? ????????????????????",
            "villa-name": "?????????? ????????????",
            "text": "???????????????????? ?????? ?????????????????? ?? ???????? ???????? ?????????????????? ?????????? ????????????, ?? ???????????????? ??????????, ?????? ???? ???????????????? ?? ???????????? ?????????????? ?????????????????????? ??????, ?????????????????? ???????????????????????? ???????????????????????? ?????????? ????????????",
            "address": "Via Maggiore, 18, 23841",
            "address2": "Annone di Brianza LC, Italy"
          },
          "church": {
            "church": "???????????????????? ??????????-???????????????????? ????????????",
            "church-name": "???????????? ?????? ??????????????",
            "text": "?????????????????? ?????????? ???????? ?????????????????? ??????????'???????? ?????????? ????????????, ???????? ???????????????????? ?????????????????? ??????????-?????????????????????? ???????????? ?? ??.????????",
            "address": "Via Armando Diaz, 125",
            "address2": "????????, ????????????"
          },
          "accomodation": {
            "apartment1": "?????????? ?????? ??????'??",
            "apartment1-description": "?????????? ????????????, ?????????????? 18 ???????????????? ?????????????????????? ?? ????????????-????-?????????????? ?? ?????????????? ??????????????????, ?????????????? ???????????????????? ???????? ?? ???????????????????? ????????????????. ?????????????????????? ???? ?????????? ?????????? ???????????? ???????? ?????????????? ???????????? ???? ???????????? ?????????????????????? ??????????????. ???????????????? ?????? ?????????? Giani ???? ?????????? ???????? ?????????????????? 35???????????? (24 ????). ???? ???????????? ????????????, ?????????????????? ?????????? ?????????????? ?????????? ?????????????? ???? 55 ???????????? (46????). ???? ?????????????????? Malpensa ?????????? ?????????????? ???? 55????(66????). ???? ???????????? ( ?????????????????? ) ?????????? ?????????????? ???? 65???? (64km).  ???? ?????????????????? ( ?????????????????? ) ?????????? ?????????????? ???? 6?????????? ( 600km )",
            "apartment2": "?????????????????????? ?????? ????????????",
            "apartment2-description": "?????????? ?????????? ???? ?????????? ????????, Via Sant'Antonio 15, 23864 ????????????, ????????????. ?????? ?????????? ???????????? ???????????????? 12 ???????????????? ???????????? ?????????????????????? (10 ????). ?????????????? ?????????????????????? ???? ?????????? ????????????, ???????????????? ???? ?????????? ?? ???????? ???????????? ???????? ???????????? ?? ???????????????? ?????? ?????????????????? ??????????"
          },
          "itinerary": {
            "heading": "??????????????",
            "day1": "??????????????, 12 ????????????",
            "day2": "????????????, 13 ????????????",
            "day3": "????????????, 14 ????????????",
            "day4": "??????????????????, 15 ????????????"
          },
          "faq": {
            "faq": "?????????????????? ???? ?????????? ??????????????????",
            "question1": "???? ?????????? ?? ??????????",
            "answer1": "??????????????",
            "question2": "????????????, ??????????????????",
            "answer2": "?? ???????????? ?????????????? ???????????????? ?????????????? ????????????, ?????????? ???????? ???????? ???????????????????? ?? ???????????? ???? ??????????????. ?? ??'???????????? ???????????? ???????????????????????? ?????????????? ???????????? ?? ???? ???????? ???????????? ???? ??????????. ?? ?????????????????? ?? ???????????????????? ?????????? ?????????????????? ?????????? ??????????????",
            "question3": "??????????",
            "answer3": "?????? ??????'?? ???? ?????????????????? ???????? ?????????? ?? ?????????? ?????????????? ???? ?????????? ??????????????????, ?????? ???????????? ?????????????????????? ?? ?????????????? ???? ???????????? ?????????????????? ?????????? ?????????? (10???? ???????? ??????????????????????)",
            "question4": "",
            "answer4": "",
            "question5": "??????????????????",
            "answer5": "???????????????? ???????????? ???? ?????????? ?? ?????? ???????? ?????????? ??????????, ?? ?????????? ???????????? ???????????? ???????? ????????????, ???????? ?? ???? ???????? ?????????????? ???????????????????? ?????? ???????????????????? ???????????????????? ???? ???????????????????? ?????? ????????",
            "question6": "",
            "answer6": "",
          },
          "slider": {
            "heading": "???????? ??????????????"
          }
        }
      }
    }
  });

export default i18n;