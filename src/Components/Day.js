// import React from 'react';

const Day = ({ dayPlan, dayIndex }) => {
  return (
    <div className="itinerary__wedding-day wedding-day">
      {dayPlan[dayIndex].map(dayPlan =>
      <div key={dayPlan.id}>
        <div className="wedding-day__wrapper">
          <p className="wedding-day__time">{dayPlan.time1}</p>
          <div className="wedding-day__todo">
            <p className="wedding-day__todo-heading">{dayPlan.heading1}</p>
            <p className="wedding-day__todo-text">{dayPlan.text1}</p>
          </div>
          <p className="wedding-day__todo-text">{dayPlan.textUA1}</p>
        </div>
        <div className="wedding-day__wrapper">
          <p className="wedding-day__time">{dayPlan.time2}</p>
          <div className="wedding-day__todo">
            <p className="wedding-day__todo-heading">{dayPlan.heading2}</p>
            <p className="wedding-day__todo-text">{dayPlan.text2}</p>
          </div>
          <p className="wedding-day__todo-text">{dayPlan.textUA2}</p>
        </div>
        <div className="wedding-day__wrapper">
          <p className="wedding-day__time">{dayPlan.time3}</p>
          <div className="wedding-day__todo">
            <p className="wedding-day__todo-heading">{dayPlan.heading3}</p>
            <p className="wedding-day__todo-text">{dayPlan.text3}</p>
          </div>
          <p className="wedding-day__todo-text">{dayPlan.textUA3}</p>
        </div>
        <div className="wedding-day__wrapper">
          <p className="wedding-day__time">{dayPlan.time4}</p>
          <div className="wedding-day__todo">
            <p className="wedding-day__todo-heading">{dayPlan.heading4}</p>
            <p className="wedding-day__todo-text">{dayPlan.text4}</p>
          </div>
          <p className="wedding-day__todo-text">{dayPlan.textUA4}</p>
        </div>
        <div className="wedding-day__wrapper">
          <p className="wedding-day__time">{dayPlan.time5}</p>
          <div className="wedding-day__todo">
            <p className="wedding-day__todo-heading">{dayPlan.heading5}</p>
            <p className="wedding-day__todo-text">{dayPlan.text5}</p>
          </div>
          <p className="wedding-day__todo-text">{dayPlan.textUA5}</p>
        </div>
        <div className="wedding-day__wrapper">
          <p className="wedding-day__time">{dayPlan.time6}</p>
          <div className="wedding-day__todo">
            <p className="wedding-day__todo-heading">{dayPlan.heading6}</p>
            <p className="wedding-day__todo-text">{dayPlan.text6}</p>
          </div>
          <p className="wedding-day__todo-text">{dayPlan.textUA6}</p>
        </div>
        <div className="wedding-day__wrapper">
          <p className="wedding-day__time">{dayPlan.time7}</p>
          <div className="wedding-day__todo">
            <p className="wedding-day__todo-heading">{dayPlan.heading7}</p>
            <p className="wedding-day__todo-text">{dayPlan.text7}</p>
          </div>
          <p className="wedding-day__todo-text">{dayPlan.textUA7}</p>
        </div>
      </div>
      )}
    </div>
  )
}

export default Day;
