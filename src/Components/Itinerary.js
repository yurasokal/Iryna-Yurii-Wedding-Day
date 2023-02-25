import { useState } from 'react';
import Day from './Day';
import DaysPlanData from '../DaysPlanData';
import { useTranslation, Trans } from 'react-i18next';

const Itinerary = () => {
  const [activeDay, setActiveDay] = useState("FirstDay");
  const [activeHoverDay, setActiveHoverDay] = useState("");
  const { t, i18n } = useTranslation();

  return (
    <div className="itinerary__wrapper">
        <div className="itinerary__heading">Itinerary</div>
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
          </nav>
          <div className="itinerary__wedding-day-wrapper">
            {activeDay === "FirstDay" && <Day dayPlan={DaysPlanData} dayIndex="0"/>}
            {activeDay === "SecondDay" && <Day dayPlan={DaysPlanData} dayIndex="1"/>}
            {activeDay === "ThirdDay" && <Day dayPlan={DaysPlanData} dayIndex="2"/>}
          </div>
    </div>
  )
}

export default Itinerary;