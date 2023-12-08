import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCubes, faPercent, faSmileBeam, faUserTie } from '@fortawesome/free-solid-svg-icons';

const Features = () => {
  return (
    <div className="container-fluid py-6 px-5">
      <div className="text-center mx-auto mb-5" style={{ maxWidth: '600px' }}>
        <h1 className="display-5 mb-0">Why Choose Us!!!</h1>
        <hr className="w-25 mx-auto bg-primary" />
      </div>
      <div className="text-center mx-auto mb-" style={{ maxWidth: '1200px' }}>
        <p>In recent years, most of the companies have adopted technological ways of generating high-quality output. This has led to a huge demand for technical staff in the IT and Non-IT field. Unfortunately, there has been a massive gap between job seekers and the organization. Inability to find the right opportunity and employee harms both the candidate and the organization enormously. Boost Tech Consultancy came into existence to bridge this gap between job seekers and the organization so that the target can be achieved productively without losing time and money.</p>
      </div>
      <div className="row g-5">
        <div className="col-lg-4">
          <div className="row g-5">
            <div className="col-12">
              <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                <FontAwesomeIcon icon={faCubes} className="fs-4 text-white" />
              </div>
              <h3>Best In Industry</h3>
              <p className="mb-0">Unmatched excellence, industry's best. Unparalleled expertise, surpassing the rest.</p>
            </div>
            <div className="col-12">
              <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                <FontAwesomeIcon icon={faPercent} className="fs-4 text-white" />
              </div>
              <h3>99% Success Rate</h3>
              <p className="mb-0">With a remarkable 99% success rate, we consistently deliver outstanding results to our clients.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="d-block bg-primary h-100 text-center">
            <img className="img-fluid" src="process.png" alt="" />
            <div className="p-4">
              <p className="text-white mb-4 text-justfy">
                Our meticulous recruitment process attracts top talent through strategic sourcing, screening, and rigorous assessment. We present you with only the most qualified candidates, saving you time and effort. With our expertise, the process is efficient, effective, and tailored to your needs.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="row g-5">
            <div className="col-12">
              <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                <FontAwesomeIcon icon={faSmileBeam} className="fs-4 text-white" />
              </div>
              <h3>100% Happy Client</h3>
              <p className="mb-0">Our clients' happiness is our top priority, and we are proud to have a 100% satisfaction rate.</p>
            </div>
            <div className="col-12">
              <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                <FontAwesomeIcon icon={faUserTie} className="fs-4 text-white" />
              </div>
              <h3>Professional Advisors</h3>
              <p className="mb-0">Our team of professional advisors is here to provide expert guidance and support.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
