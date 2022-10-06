import Accordion from 'react-bootstrap/Accordion';

function FAQ() {
  return (
    <>
    <h1 id="faqH">FAQ's</h1>
    <div className='acc'>
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>How to generate the token?</Accordion.Header>
        <Accordion.Body>
          For generating token, you just need to select the service and enter contact number, you can get an email of token number and time slot with necessary document.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>How we can come to know whether our token is generated or not?</Accordion.Header>
        <Accordion.Body>
          If you get an email with token number from e-Jan Seva Kendra, that means your token is generated.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Why we should use the website?</Accordion.Header>
        <Accordion.Body>
          In order to save time, we can use the website. We just need to choose service. just after doing this, we can enter mobile number , get OTP and time slot and necessary document via mail . This way we can save our time and also get to know which document we should carry along with us. 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Why Jan Seva Kendra CSC service portal?</Accordion.Header>
        <Accordion.Body>
        Jan Seva Kendra CSC Services Portal is an organization with the aim of providing better services, management solutions and financial solutions to the e-governance kiosk, educational institutes, etc. In pan India. At bg techno solutions, customer satisfaction is the top priority. 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>How are the working hours at Jan Seva Kendra?</Accordion.Header>
        <Accordion.Body>
        9 hours. From 7 am to 12 pm and 2 pm to 6 pm.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
    </>
  );
}

export default FAQ;