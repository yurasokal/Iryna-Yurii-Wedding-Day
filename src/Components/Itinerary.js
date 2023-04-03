import { useState } from 'react';
import Day from './Day';
import DaysPlanData from '../DaysPlanData';
import { useTranslation } from 'react-i18next';

const Itinerary = () => {
  const [activeDay, setActiveDay] = useState("FirstDay");
  const { t } = useTranslation();

  return (
    <div className="itinerary__wrapper">
        <div className="itinerary__heading">{t("itinerary.heading")}</div>
          <nav className="itinerary__days">
            <button
              className={activeDay === "FirstDay" ? "itinerary__active-button" : "itinerary__day-button"}
              onClick={() => setActiveDay("FirstDay")}>
              {t("itinerary.day1")}
            </button>
            <button 
              className={activeDay === "SecondDay" ? "itinerary__active-button" : "itinerary__day-button"}
              onClick={() => setActiveDay("SecondDay")}>
              {t("itinerary.day2")}
            </button>
            <button 
              className={activeDay === "ThirdDay" ? "itinerary__active-button" : "itinerary__day-button"}
              onClick={() => setActiveDay("ThirdDay")}>
              {t("itinerary.day3")}
            </button>
            <button
              className={activeDay === "FourthDay" ? "itinerary__active-button" : "itinerary__day-button"}
              onClick={() => setActiveDay("FourthDay")}>
              {t("itinerary.day4")}
            </button>
          </nav>
          <div className="itinerary__wedding-day-wrapper">
            {activeDay === "FirstDay" && <Day dayPlan={DaysPlanData} dayIndex="0"/>}
            {activeDay === "SecondDay" && <Day dayPlan={DaysPlanData} dayIndex="1"/>}
            {activeDay === "ThirdDay" && <Day dayPlan={DaysPlanData} dayIndex="2"/>}
            {activeDay === "FourthDay" && <Day dayPlan={DaysPlanData} dayIndex="3"/>}
          </div>
    </div>
  )
}

export default Itinerary;