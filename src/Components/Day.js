// import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

const Day = ({ dayIndex }) => {
  const { t, i18n } = useTranslation();

  let daysPlanData = [
    [
      {
        time1: t("day1.time1"),
        text1: t("day1.text1"),
        time2: t("day1.time2"),
        text2: t("day1.text2"),
        time3: t("day1.time3"),
        text3: t("day1.text3"),
        time4: t("day1.time4"),
        text4: t("day1.text4"),
        time5: t("day1.time5"),
        text5: t("day1.text5"),
        id: "f0001"
      }
    ],
    [
      {
        time1: t("day2.time1"),
        text1: t("day2.text1"),
        time2: t("day2.time2"),
        text2: t("day2.text2"),
        time3: t("day2.time3"),
        text3: t("day2.text3"),
        time4: t("day2.time4"),
        text4: t("day2.text4"),
        time5: t("day2.time5"),
        text5: t("day2.text5"),
        time6: t("day2.time6"),
        text6: t("day2.text6"),
        time7: t("day2.time7"),
        text7: t("day2.text7"),
        id: "f0002"
      }
    ],
    [
      {
        time1: t("day3.time1"),
        text1: t("day3.text1"),
        time2: t("day3.time2"),
        text2: t("day3.text2"),
        time3: t("day3.time3"),
        text3: t("day3.text3"),
        id: "f0003"
      }
    ],
    [
      {
        time1: t("day4.time1"),
        text1: t("day4.text1"),
        id: "a0004"
      }
    ]
  ];  
  
  return (
    <div className="itinerary__wedding-day wedding-day">
      {daysPlanData[dayIndex].map(dayPlan =>
      <div key={dayPlan.id}>
        <div className="wedding-day__wrapper">
          <p className="wedding-day__time">{dayPlan.time1}</p>
          <div className="wedding-day__todo">
            <p className="wedding-day__todo-heading">{dayPlan.heading1}</p>
            <p className="wedding-day__todo-text">{dayPlan.text1}</p>
          </div>
          {/* <p className="wedding-day__todo-text">{dayPlan.textUA1}</p> */}
        </div>
        <div className="wedding-day__wrapper">
          <p className="wedding-day__time">{dayPlan.time2}</p>
          <div className="wedding-day__todo">
            <p className="wedding-day__todo-heading">{dayPlan.heading2}</p>
            <p className="wedding-day__todo-text">{dayPlan.text2}</p>
          </div>
          {/* <p className="wedding-day__todo-text">{dayPlan.textUA2}</p> */}
        </div>
        <div className="wedding-day__wrapper">
          <p className="wedding-day__time">{dayPlan.time3}</p>
          <div className="wedding-day__todo">
            <p className="wedding-day__todo-heading">{dayPlan.heading3}</p>
            <p className="wedding-day__todo-text">{dayPlan.text3}</p>
          </div>
          {/* <p className="wedding-day__todo-text">{dayPlan.textUA3}</p> */}
        </div>
        <div className="wedding-day__wrapper">
          <p className="wedding-day__time">{dayPlan.time4}</p>
          <div className="wedding-day__todo">
            <p className="wedding-day__todo-heading">{dayPlan.heading4}</p>
            <p className="wedding-day__todo-text">{dayPlan.text4}</p>
          </div>
          {/* <p className="wedding-day__todo-text">{dayPlan.textUA4}</p> */}
        </div>
        <div className="wedding-day__wrapper">
          <p className="wedding-day__time">{dayPlan.time5}</p>
          <div className="wedding-day__todo">
            <p className="wedding-day__todo-heading">{dayPlan.heading5}</p>
            <p className="wedding-day__todo-text">{dayPlan.text5}</p>
          </div>
          {/* <p className="wedding-day__todo-text">{dayPlan.textUA5}</p> */}
        </div>
        <div className="wedding-day__wrapper">
          <p className="wedding-day__time">{dayPlan.time6}</p>
          <div className="wedding-day__todo">
            <p className="wedding-day__todo-heading">{dayPlan.heading6}</p>
            <p className="wedding-day__todo-text">{dayPlan.text6}</p>
          </div>
          {/* <p className="wedding-day__todo-text">{dayPlan.textUA6}</p> */}
        </div>
        <div className="wedding-day__wrapper">
          <p className="wedding-day__time">{dayPlan.time7}</p>
          <div className="wedding-day__todo">
            <p className="wedding-day__todo-heading">{dayPlan.heading7}</p>
            <p className="wedding-day__todo-text">{dayPlan.text7}</p>
          </div>
          {/* <p className="wedding-day__todo-text">{dayPlan.textUA7}</p> */}
        </div>
      </div>
      )}
    </div>
  )
}

export default Day;
