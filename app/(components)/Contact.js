// components/Contact.js
import React from 'react';

const Contact = () => {
    return (
        <>
          <div className="container-fluid py-6 px-5">
            <div className="text-center mx-auto" style={{ maxWidth: '600px' }}>
              <h1 className="display-5 mb-0">Who Can Join Us!!!</h1>
              <hr className="w-25 mx-auto bg-primary" />
            </div>
            <div className="text-center mx-auto mb-" style={{ maxWidth: '1200px' }}>
              <h4>
                {' '}
                <b>We are Enabling Rewarding Engagement for Women.</b>
              </h4>
              <p>
                <br />
                They can work in an Eco-friendly way of work while gaining knowledge and can maintain work-life balance, without taking a career break.
              </p>
            </div>
          </div>
    
          <div className="container-fluid py-6 px-5" id="contactus">
            <div className="text-center mx-auto" style={{ maxWidth: '600px' }}>
              <h1 className="display-5 mb-0">Contact Us!!!</h1>
              <hr className="w-25 mx-auto bg-primary" />
            </div>
            <div className="text-center mx-auto mb-" style={{ maxWidth: '1200px' }}>
              <h4>
                For Enquiry : <b>shweta@boosttech.in</b>
              </h4>
              <h4>
                For Job : <b>hr@boosttech.in</b>
              </h4>
              <h4>
                Contact No. : <b>+91-9911947944</b>
              </h4>
            </div>
          </div>
        </>
      );
    };

export default Contact;
