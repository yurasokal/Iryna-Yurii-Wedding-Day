// import React from 'react';

const Day = ({ dayPlan, dayIndex }) => {
  return (
    <div className="itinerary__wedding-day wedding-day">
      {dayPlan[dayIndex].map(dayPlan =>
      <>
      <div className="wedding-day__wrapper" key="dayPlan.id">
        <p className="wedding-day__time">{dayPlan.time1}</p>
        <div className="wedding-day__todo">
          <p className="wedding-day__todo-heading">{dayPlan.heading1}</p>
          <p className="wedding-day__todo-text">{dayPlan.text1}</p>
        </div>
      </div>
      <div className="wedding-day__wrapper" key="dayPlan.id">
        <p className="wedding-day__time">{dayPlan.time2}</p>
        <div className="wedding-day__todo">
          <p className="wedding-day__todo-heading">{dayPlan.heading2}</p>
          <p className="wedding-day__todo-text">{dayPlan.text2}</p>
        </div>
      </div>
      <div className="wedding-day__wrapper" key="dayPlan.id">
        <p className="wedding-day__time">{dayPlan.time3}</p>
        <div className="wedding-day__todo">
          <p className="wedding-day__todo-heading">{dayPlan.heading3}</p>
          <p className="wedding-day__todo-text">{dayPlan.text3}</p>
        </div>
      </div>
      <div className="wedding-day__wrapper" key="dayPlan.id">
        <p className="wedding-day__time">{dayPlan.time4}</p>
        <div className="wedding-day__todo">
          <p className="wedding-day__todo-heading">{dayPlan.heading4}</p>
          <p className="wedding-day__todo-text">{dayPlan.text4}</p>
        </div>
      </div>
      </>
      )}
    </div>
  )
}

export default Day;
