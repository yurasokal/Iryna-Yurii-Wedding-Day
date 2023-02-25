import { Collapse, Space } from 'antd';

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

function FAQ() {
  return (
    <div className="faq block faqBlock" id="faq">
      <div className="faq__heading">FAQ</div>
      <div className="container-fluid">
        <Space className="faq__wrapper" direction="vertical">
            <Collapse collapsible="header" defaultActiveKey={['2']}>
              <Panel header="This panel can only be collapsed by clicking text" key="1">
                <p>{text}</p>
              </Panel>
            </Collapse>
            <Collapse collapsible="header" defaultActiveKey={['2']}>
              <Panel header="Gifts" key="7">
                <p>{text}</p>
              </Panel>
            </Collapse>
            <Collapse collapsible="header" defaultActiveKey={['2']}>
              <Panel header="Thursday, Friday 11-12.05" key="3">
                <p>{text}</p>
              </Panel>
            </Collapse>
            <Collapse collapsible="header" defaultActiveKey={['2']}>
              <Panel header="What bring with you" key="4">
                <p>{text}</p>
              </Panel>
            </Collapse>
            <Collapse collapsible="header" defaultActiveKey={['2']}>
              <Panel header="This panel can only be collapsed by clicking text" key="5">
                <p>{text}</p>
              </Panel>
            </Collapse>
            <Collapse collapsible="header" defaultActiveKey={['2']}>
              <Panel header="Others" key="6">
                <p>{text}</p>
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
