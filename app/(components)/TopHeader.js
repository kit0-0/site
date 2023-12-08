import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpen, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const TopHeader = () => {
  return (
    <div className="container-fluid bs-gray ps-5 pe-0 d-none d-lg-block">
      <div className="row gx-0">
        <div className="col-md-6 text-center text-lg-start mb-2 mb-lg-0">
          <div className="d-inline-flex align-items-center">
            <a className="text-body py-2 pe-3 border-end" href="#">
              <small></small>
            </a>
            {/* Add other links if needed */}
          </div>
        </div>
        <div className="col-md-6 text-center text-lg-end">
          <div className="position-relative d-inline-flex align-items-center bs-dark text-white top-shape px-5">
            <div className="me-3 pe-3 border-end py-2">
              <p className="m-0">
                <FontAwesomeIcon icon={faEnvelopeOpen} className="me-2" /> hr@boosttech.in
              </p>
            </div>
            <div className="py-2">
              <p className="m-0">
                <FontAwesomeIcon icon={faPhoneAlt} className="me-2" /> +91-9911947944
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
