import { Collapse, Space } from 'antd';
import { useTranslation, Trans } from 'react-i18next';

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const colors = ['#f4eeed', '#efd9d1', '#ddb7ab', '#999b84', '#a0b2c2'];

function FAQ() {
  const { t, i18n } = useTranslation();

  return (
    <div className="faq block faqBlock" id="faq">
      <div className="faq__heading">{t("faq.faq")}</div>
      <div className="container-fluid">
        <Space className="faq__wrapper" direction="vertical">
            <Collapse collapsible="header" defaultActiveKey={['2']}>
              <Panel header={t("faq.question1")} key="1">
                <p className="faq__answer">{t("faq.answer1")}</p>
              </Panel>
            </Collapse>
            <Collapse collapsible="header" defaultActiveKey={['2']}>
              <Panel header={t("faq.question2")} key="7">
                <p className="faq__answer">{t("faq.answer2")}</p>
              </Panel>
            </Collapse>
            <Collapse collapsible="header" defaultActiveKey={['2']}>
              <Panel header={t("faq.question3")} key="3">
                <p className="faq__answer">{t("faq.answer3")}</p>
              </Panel>
            </Collapse>
            <Collapse collapsible="header" defaultActiveKey={['2']}>
              <Panel header={t("faq.question4")} key="4">
                <p className="faq__answer">{t("faq.answer4")}</p>
                <div className="faq__wedding-container">
                  <div className="faq__color-palette">
                    {colors.map((color, index) => (
                      <div
                        key={index}
                        className="faq__color-box"
                        style={{ backgroundColor: color }}
                      ></div>
                    ))}
                  </div>
                </div>
              </Panel>
            </Collapse>
            <Collapse collapsible="header" defaultActiveKey={['2']}>
              <Panel header={t("faq.question5")} key="5">
                <p className="faq__answer">{t("faq.answer5")}</p>
              </Panel>
            </Collapse>
            <Collapse collapsible="header" defaultActiveKey={['2']}>
              <Panel header={t("faq.question6")} key="6">
                <p className="faq__answer">{t("faq.answer6")}</p>
              </Panel>
            </Collapse>
          {/* <Collapse collapsible="icon" defaultActiveKey={['1']}>
            <Panel header="This panel can only be collapsed by clicking icon" key="1">
              <p>{text}</p>
            </Panel>
          </Collapse>
          <Collapse collapsible="disabled">
            <Panel header="This panel can't be collapsed" key="1">
              <p>{text}</p>
            </Panel>
          </Collapse> */}
        </Space>
      </div>
    </div>
  )
}

export default FAQ;
