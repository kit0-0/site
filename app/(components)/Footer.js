import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faEnvelopeOpen, faPhoneAlt, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <>
      <div className="container-fluid bg-dark-bt text-secondary p-5">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6">
            <h3 className="text-white mb-4">Quick Links</h3>
            <div className="d-flex flex-column justify-content-start">
              <a className="text-secondary mb-2" href="#home">
                <FontAwesomeIcon icon={faArrowRight} className="text-primary me-2" />
                Home
              </a>
              <a className="text-secondary mb-2" href="#aboutus">
                <FontAwesomeIcon icon={faArrowRight} className="text-primary me-2" />
                About Us
              </a>
              <a className="text-secondary mb-2" href="#services">
                <FontAwesomeIcon icon={faArrowRight} className="text-primary me-2" />
                Services
              </a>
              <a className="text-secondary" href="#contactus">
                <FontAwesomeIcon icon={faArrowRight} className="text-primary me-2" />
                Contact Us
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h3 className="text-white mb-4">Get In Touch</h3>
            <p className="mb-2">
            
            <FontAwesomeIcon icon={faLocationDot} className="text-primary me-2" />
              <b>Registered Office:</b> 1204, J Block, Sector - 78, Noida, UP, India
            </p>
            <p className="mb-2">
              Our Offices: Mumbai, Pune, Bangalore, Chennai, Hyderabad, Kolkata, Lucknow, Delhi.
            </p>
            <p className="mb-2">
              <FontAwesomeIcon icon={faEnvelopeOpen} className="text-primary me-2" />
              hr@boosttech.in
            </p>
            <p className="mb-0">
              <FontAwesomeIcon icon={faPhoneAlt} className="text-primary me-2" />
              +91-9911947944
            </p>
          </div>
          <div className="col-lg-3 col-md-6">
            <h3 className="text-white mb-4">Follow Us</h3>
            <div className="d-flex">
              <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-2" target="_blank" href="https://www.linkedin.com/company/boosttech/">
                <FontAwesomeIcon icon={faLinkedinIn} className="fw-normal" />
              </a>
              {/* Add other social media links as needed */}
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-dark text-secondary text-center border-top py-4 px-5" style={{ borderColor: 'rgba(256, 256, 256, .1) !important' }}>
        <p className="m-0">&copy; <a className="text-secondary border-bottom" href="#">BoostTech</a>. All Rights Reserved. Designed by <a className="text-secondary border-bottom" href="https://htmlcodex.com">HTML Codex</a></p>
      </div>
    </>
  );
};

export default Footer;
