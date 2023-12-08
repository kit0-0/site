// components/AboutUs.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faChartLine, faBalanceScale } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <div className="container-fluid p-0" id="aboutus">
      <div className="row g-0">
        <div className="col-lg-12 py-6 px-5">
          <h1 className="display-5 mb-4">
            Welcome To <span className="text-primary">BoostTech</span>
          </h1>
          <h4 className="text-primary mb-4">
            Empowering your journey towards success through exceptional talent acquisition.
          </h4>
          <p className="mb-4">
            Boost Tech Consulting was founded in 2017 with a vision to provide extensive and stable hiring solutions for middle and top management positions across industries and verticals PAN India & Globally. At BoostTech, we are dedicated to connecting exceptional talent with great opportunities. Whether you are a candidate seeking a new career path or an organization looking to find the perfect addition to your team, we are here to assist you every step of the way.
            <br/><br/>
            Our experienced team of recruiters understands the unique needs of both candidates and employers. We take the time to thoroughly understand your requirements, ensuring that we find the best fit for your specific goals and objectives. With our extensive network and resources, we strive to match top talent with the right opportunities, fostering successful partnerships that drive growth and success.
            <br/><br/>
            We believe in building long-term relationships, and our commitment to exceptional service extends beyond the initial placement. We provide ongoing support and guidance to candidates and employers alike, ensuring a smooth and rewarding experience for everyone involved.
          </p>
          {/* Add your button or other elements here */}
        </div>
        {/* The following section is commented out as it's not clear from your request if it should be included */}
        {/* <div className="col-lg-6">
          <div className="h-100 d-flex flex-column justify-content-center bg-primary p-5">
            <div className="d-flex text-white mb-5">
              <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white text-primary rounded-circle mx-auto mb-4" style={{ width: '60px', height: '60px' }}>
                <FontAwesomeIcon icon={faUserTie} className="fs-4" />
              </div>
              <div className="ps-4">
                <h3>Business Planning</h3>
                <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat ipsum lorem et sit sed stet lorem sit clita duo</p>
              </div>
            </div>
            <div className="d-flex text-white mb-5">
              <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white text-primary rounded-circle mx-auto mb-4" style={{ width: '60px', height: '60px' }}>
                <FontAwesomeIcon icon={faChartLine} className="fs-4" />
              </div>
              <div className="ps-4">
                <h3>Financial Analysis</h3>
                <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat ipsum lorem et sit sed stet lorem sit clita duo</p>
              </div>
            </div>
            <div className="d-flex text-white">
              <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white text-primary rounded-circle mx-auto mb-4" style={{ width: '60px', height: '60px' }}>
                <FontAwesomeIcon icon={faBalanceScale} className="fs-4" />
              </div>
              <div className="ps-4">
                <h3>Legal Advisory</h3>
                <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat ipsum lorem et sit sed stet lorem sit clita duo</p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default About;
