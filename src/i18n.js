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
            "join1": "Dear Friends and Family,",
            "join2": "Please join us to celebrate our wedding",
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
            "question1": "What to bring with you?",
            "answer1": "For your convenience, we recommend that you bring slippers with you",
            "question2": "Accommodation",
            "answer2": "For a family we rent a whole villa from Friday afternoon to Monday morning, for friends an apartment from Friday to Sunday near our villa (10 minutes by car)",
            "question3": "Thursday, Monday",
            "answer3": "В четвер ввечері прилітає частина родини, після чого вони зупиняться в Мілані на ночівлю. В п'ятницю зранку прогуляються центром Мілану і на обід будуть на віллі. В понеділок з раненького ранку більшість людей вилітає",
            "question4": "Wedding dress code",
            "answer4": "We will be glad if you support the light range with your outfits. Main color: light brown with a cream shade",
            "question5": "Gifts",
            "answer5": "Оскільки станом на зараз в нас досі немає житла, а також дорога додому буде далека, тому ми б просили утриматися від габаритних подарунків. Ваші побажання в конвертах будуть найкращими подарунками, які зможуть допомогти виповнити наші мрії",
            "question6": "Weather",
            "answer6": "It is expected to be 22°C during the day and 15°C at night, short-term rains are possible. In previous years, the temperature varied between 17-23°C during the day and 14-20°C at night",
          },
          "slider": {
            "heading": "Photo gallery"
          },
          "relax": {
            "Breakfast": "Breakfast",
            "Walking to a lake Annone": "Walking to a lake Annone",
            "Barbeque party": "Barbeque party"
          },
          "day1": {
            "time1": "8pm - 11am",
            "text1": "Walking in Milano",
            "time2": "1pm",
            "text2": "Villa Check-in",
            "time3": "2pm",
            "text3": "Light snack time",
            "time4": "6pm",
            "text4": "Dinner",
            "time5": "10pm",
            "text5": "Sleep well"
          },
          "day2": {
            "time1": "9am 30m",
            "text1": "Bride redemption, Ukrainian traditions",
            "time2": "10am 30m",
            "text2": "Departure from Villa Giani to church",
            "time3": "11am 30m",
            "text3": "Church",
            "time4": "12am 20m",
            "text4": "Walking in Como",
            "time5": "14am 20m",
            "text5": "Departure from Como to Villa Giani",
            "time6": "15am 30m",
            "text6": "Сongratulations to the new married couple",
            "time7": "16am 00m",
            "text7": "Celebration in a Villa Gianni"
          },
          "day3": {
            "time1": "11am",
            "text1": "Breakfast",
            "time2": "12pm",
            "text2": "Walking to a lake Annone",
            "time3": "1pm",
            "text3": "Barbeque party"
          },
          "day4": {
            "time1": "7am - 11am",
            "text1": "Departure from the villa",
          },
        }
      },
      de: {
        translation: {
          "navigation": {
            "home": "Hōm",
            "our-story": "Unsere Geschichte",
            "venue": "Veranstaltungsort",
            "itinerary": "Route",
            "FAQ": "FAQ",
            "photos": "Photos"
          },
          "home": {
            "join1": "Liebe Freunde und Familie",
            "join2": "Wir laden Sie zu unserer Hochzeit ein",
            "name": "Iryna & Yurii",
            "details": "13. Mai 2023  -  Annone di Brianza, Italien"
          },
          "our-story": {
            "heading": "Unsere Geschichte",
            "text1": "Im Herbst 2019 verfielen wir beide in den Rhythmus des Tanzes, der unser Leben um 180° drehte und bis heute nicht mehr loslässt",
            "text2": "Unser Paar ist noch nicht viele Jahre alt, aber zusammen haben wir es geschafft, die Pandemie, gemeinsame Reisen, Reparaturen, das Zusammenleben und die Trennung durch den Krieg zu überstehen",
            "text3": "Unsere Ehe ist der erste Stein beim Aufbau unserer Familie, unsere lange Reise auf dem Weg zu einem gemeinsamen Leben. Wir laden Sie ein, an diesem Tag dabei zu sein"
          },
          "church": {
            "church": "Ukrainische Griechisch-Katholische Kirche",
            "church-name": "Kirche San Donnino",
            "text": "Die Trauung wird von Pater Mykola aus Lemberg durchgeführt, der den Zweig der griechisch-katholischen Kirche in Komo leitet",
            "address": "Via Armando Diaz, 125",
            "address2": "Como, Italien"
          },
          "accomodation": {
            "apartment1": "Villa für eine Familie",
            "apartment1-description": "Die Villa Giani, ein Gebäude aus dem 18. Jahrhundert, befindet sich in Annone di Brianza in der Lombardei, inmitten eines weitläufigen Gartens mit Olivenbäumen. Während Ihres Aufenthalts in der Villa können Sie sich selbst als Schauspieler in einem der alten italienischen Filme vorstellen. Die Entfernung von der Villa Gianni zur Stadt Como beträgt 35 Minuten (24 km). Das Zentrum von Mailand, der Flughafen Mailand Bergamo, ist in 55 Minuten (46 km) zu erreichen. Der Flughafen Malpensa ist in 55 Minuten (66 km) zu erreichen. Lugano (Schweiz) ist in 65 Minuten (64 km) erreichbar. Nürnberg (Deutschland) ist in 6 Stunden (600 km) zu erreichen)",
            "apartment2": "Wohnung für Freunde",
            "apartment2-description": "Villa Maggie am Comer See, Via Sant'Antonio 15, 23864 Malta, Italien. Es dauert 12 Minuten mit dem Auto (10 km) von der Villa Giani. Moderne Appartements mit eigener Küche, Seeblick und bei korrekter Buchung mit Freibad"
          },
          "itinerary": {
            "heading": "Route",
            "day1": "Freitag, 12. Mai",
            "day2": "Samstag, 13. Mai",
            "day3": "Sonntag, 14. Mai",
            "day4": "Понеділок, 15 травня"
          },
          "faq": {
            "faq": "Відповіді на часті запитання",
            "question1": "Що взяти з собою",
            "answer1": "Для вашої зручності рекомендуємо вам взяти з собою тапочки",
            "question2": "Проживання",
            "answer2": "Для сім'ї ми орендуємо цілу віллу з обіду пятниці до ранку понеділка, для друзів апартаменти з пятниці по неділю неподалік нашої вілли (10хв їзди автомобілем)",
            "question3": "Четвер, Понеділок",
            "answer3": "В четвер ввечері прилітає частина родини, після чого вони зупиняться в Мілані на ночівлю. В п'ятницю зранку прогуляються центром Мілану і на обід будуть на віллі. В понеділок з раненького ранку більшість людей вилітає",
            "question4": "Весільний дрес код",
            "answer4": "Ми будемо раді, якщо своїми нарядами ви підтримаєте світлову гамму. Основний колір: світло-брунатний з кремовим відтінком",
            "question5": "Подарунки",
            "answer5": "Оскільки станом на зараз в нас досі немає житла, а також дорога додому буде далека, тому ми б просили утриматися від габаритних подарунків. Ваші побажання в конвертах будуть найкращими подарунками, які зможуть допомогти виповнити наші мрії",
            "question6": "Погода",
            "answer6": "Очікується 22°C вдень та 15°C вночі, можливі короткочасні опади. Попередні роки температура варіювалась 17-23°C вдень та 14-20°C вночі",
          },
          "slider": {
            "heading": "Фото галерея"
          },
          "relax": {
            "Breakfast": "Сніданок",
            "Walking to a lake Annone": "Прогулянка до Озера Анноне",
            "Barbeque party": "Барбекю"
          },
          "day1": {
            "time1": "8.00 - 11.00",
            "text1": "Прогулянка по Мілані",
            "time2": "13.00",
            "text2": "Заїзд на Віллу",
            "time3": "14.00",
            "text3": "Легкий перекус",
            "time4": "18.00",
            "text4": "Вечеря",
            "time5": "10pm",
            "text5": "Добраніч"
          },
          "day2": {
            "time1": "9am 30m",
            "text1": "Викуп нареченої, українські традиції",
            "time2": "10am 30m",
            "text2": "Виїзд з вілли до церкви",
            "time3": "11am 30m",
            "text3": "Шлюб в церкві",
            "time4": "12am 20m",
            "text4": "Прогулянка Комо",
            "time5": "14am 20m",
            "text5": "Виїзд з Комо до Вілли",
            "time6": "15am 30m",
            "text6": "Вітання молодят",
            "time7": "16am 00m",
            "text7": "Святкування"
          },
          "day3": {
            "time1": "11am",
            "text1": "Сніданок",
            "time2": "12pm",
            "text2": "Прогулянка до Озера Анноне",
            "time3": "1pm",
            "text3": "Барбекю"
          },
          "day4": {
            "time1": "7am-11am",
            "text1": "Виселення з Вілли",
          },
        }
      },
      ua: {
        translation: {
          "navigation": {
            "home": "Головна",
            "our-story": "Наша історія",
            "venue": "Місце",
            "itinerary": "Маршрут",
            "FAQ": "Запитання",
            "photos": "Фото"
          },
          "home": {
            "join1": "Шановні друзі та родино,",
            "join2": "Запрошуємо вас на наше весілля !",
            "name": "Ірина & Юрій",
            "details": "13 Травня 2023р  -  Annone di Brianza, Італія"
          },
          "our-story": {
            "heading": "Наша Історія",
            "text1": "Осінню 2019 року ми обоє закрутилися ритмі танцю, який обернув наше життя на 180° і не відпускає нас до тепер",
            "text2": "Нашій пара не багато років, але разом ми встигли пережили пандемію, спільних поїздок, ремонт, життя разом та розлуку війною",
            "text3": "Наш шлюб - це перший камінчик, в будівництві нашої сім'ї, нашої довгої подорожі дорогою в спільне життя. То ж запрошуємо вас долучитися до нас в цей день"
          },
          "venue": {
            "venue": "Місце проведення",
            "villa-name": "Вілла Джіані",
            "text": "Запрошуємо Вас, розділити з нами день створення нашої родини. В чудовому місці, яке ми полюбили з першої секунди, неподалік мальовничого італійського озера Анноне",
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
            "apartment1-description": "Вілла Джіані, будівля 18 століття розташована в Анноне-ді-Бріанца в регіоні Ломбардія, посеред просторого саду з оливковими деревами. Перебуваючи на віллі можна уявити себе актором одного із старих італійських фільмів. Відстань від вілли Джіанні до міста Комо становить 35хвилин (24 км). До центру Мілану, аеропорту Мілан Бергамо можна доїхати за 55 хвилин (46км). До аеропорту Malpensa можна доїхати за 55хв(66км). До Лугано ( Швейцарія ) можна доїхати за 65хв (64km).  До Нюрнберга ( Німеччина ) можна доїхати за 6годин ( 600km )",
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
            "answer1": "Для вашої зручності рекомендуємо вам взяти з собою тапочки",
            "question2": "Проживання",
            "answer2": "Для сім'ї ми орендуємо цілу віллу з обіду пятниці до ранку понеділка, для друзів апартаменти з пятниці по неділю неподалік нашої вілли (10хв їзди автомобілем)",
            "question3": "Четвер, Понеділок",
            "answer3": "В четвер ввечері прилітає частина родини, після чого вони зупиняться в Мілані на ночівлю. В п'ятницю зранку прогуляються центром Мілану і на обід будуть на віллі. В понеділок з раненького ранку більшість людей вилітає",
            "question4": "Весільний дрес код",
            "answer4": "Ми будемо раді, якщо своїми нарядами ви підтримаєте світлову гамму. Основний колір: світло-брунатний з кремовим відтінком",
            "question5": "Подарунки",
            "answer5": "Оскільки станом на зараз в нас досі немає житла, а також дорога додому буде далека, тому ми б просили утриматися від габаритних подарунків. Ваші побажання в конвертах будуть найкращими подарунками, які зможуть допомогти виповнити наші мрії",
            "question6": "Погода",
            "answer6": "Очікується 22°C вдень та 15°C вночі, можливі короткочасні опади. Попередні роки температура варіювалась 17-23°C вдень та 14-20°C вночі",
          },
          "slider": {
            "heading": "Фото галерея"
          },
          "relax": {
            "Breakfast": "Сніданок",
            "Walking to a lake Annone": "Прогулянка до Озера Анноне",
            "Barbeque party": "Барбекю"
          },
          "day1": {
            "time1": "8.00 - 11.00",
            "text1": "Прогулянка по Мілані",
            "time2": "13.00",
            "text2": "Заїзд на Віллу",
            "time3": "14.00",
            "text3": "Легкий перекус",
            "time4": "18.00",
            "text4": "Вечеря",
            "time5": "10pm",
            "text5": "Добраніч"
          },
          "day2": {
            "time1": "9am 30m",
            "text1": "Викуп нареченої, українські традиції",
            "time2": "10am 30m",
            "text2": "Виїзд з вілли до церкви",
            "time3": "11am 30m",
            "text3": "Шлюб в церкві",
            "time4": "12am 20m",
            "text4": "Прогулянка Комо",
            "time5": "14am 20m",
            "text5": "Виїзд з Комо до Вілли",
            "time6": "15am 30m",
            "text6": "Вітання молодят",
            "time7": "16am 00m",
            "text7": "Святкування"
          },
          "day3": {
            "time1": "11am",
            "text1": "Сніданок",
            "time2": "12pm",
            "text2": "Прогулянка до Озера Анноне",
            "time3": "1pm",
            "text3": "Барбекю"
          },
          "day4": {
            "time1": "7am-11am",
            "text1": "Виселення з Вілли",
          },
        }
      }
    }
  });

export default i18n;
