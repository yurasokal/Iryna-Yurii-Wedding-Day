import { useTranslation } from "react-i18next";

function Text() {
  const { t, i18n } = useTranslation();

  const myArray = [
    {
      time1: "11:00",
      text1: t('Breakfast'),
      time2: "12:00",
      text2: t('Walking to a lake Annone'),
      time3: "13:00",
      text3: t('Barbeque party'),
      id: "f0003"
    }
  ];

  return (
    <div className="faq block faqBlock" id="faq">
      {myArray.map((item) => (
        <div key={item.id}>
          <div>{item.time1}: {item.text1}</div>
          <div>{item.time2}: {item.text2}</div>
          <div>{item.time3}: {item.text3}</div>
        </div>
      ))}
    </div>
  )
}

export default Text;


