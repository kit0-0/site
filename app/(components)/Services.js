import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faChartPie, faChartLine, faChartArea, faBalanceScale, faHouseDamage } from '@fortawesome/free-solid-svg-icons';

const ServiceItem = ({ icon, title, description }) => (
  <div className="col-lg-4 col-md-6">
    <div className="service-item bg-secondary text-center px-5">
      <div className="d-flex align-items-center justify-content-center bg-primary text-white rounded-circle mx-auto mb-4" style={{ width: '90px', height: '90px' }}>
        <FontAwesomeIcon icon={icon} size="2x" />
      </div>
      <h3 className="mb-3">{title}</h3>
      <p className="mb-0">{description}</p>
    </div>
  </div>
);

const Services = () => {
  const services = [
    { icon: faUserTie, title: 'Multi-Level Sourcing', description: 'We provide end-to-end workforce sourcing solutions in different industries across all verticals and domains. Our years of excellence in providing recruitment solutions in various scopes have given enough confidence to many of our clients to employ us as their one and only recruitment vendor. Our experience, research and technology enable us to find the right talents quickly and cost-effectively.' },
    { icon: faChartPie, title: 'Executive Search Sourcing', description: 'We are a market leader in middle to top level recruitments. Companies love our approach and are always happy to provide us repeat business. Our vast knowledge base and the process which is AI-enabled, gives us a competitive edge, so clients prefer to engage with us for top level executive recruitments. Our long relationships with candidates and companies help us quickly bridge the gap and provide effectiveness to the entire process.' },
    { icon: faChartLine, title: 'Recruitment Solutions Consulting', description: 'Companies hire us to provide them extensive help for their recruitment drive. We act as a part of your HR team to optimize the process and help you in effective recruitments. We allocate dedicated resources so that you can focus on your core business while we undertake the recruitment activities for you. This becomes a win-win situation as you leverage our expertise while keeping the entire recruitment process internal.' },
    { icon: faChartArea, title: 'Contingent Staffing', description: 'We provide temporary technical workforce as per the organization’s requirement to act as a supplement to the company’s workforce. Hiring contingent staff is a tough job but not for us! Our team of hiring experts can swiftly arrange for the candidates that you have been seeking for your organization. This staffing is best for the organization of fluctuating nature as they require candidates for a short period. So, if you have one of these organizations, you may reach us for hiring candidates on time and in the budget.' },
    { icon: faBalanceScale, title: 'Contract to Hire', description: 'We are top providers of trained contract-to-hire employees to help you attain your organizational goals timely. Finding candidates to hire on a contract basis is a tough task but not for us, our professional HR members can effortlessly find the candidate as per your requirement. Mostly candidates on contract to hire have a possibility of getting a full-time job at the end of the tenure. The talent search that we do, you would surely want to hire them all.' },
    { icon: faHouseDamage, title: 'Training', description: 'We specialize in training the candidates and making them industry-ready to help them fulfill their as well as the organization’s goals. We organize customized training. We not only search for skilled manpower and make them reach their dream organization but also train recent graduates and candidates willing to learn new skills.' },
  ];

  return (
    <div className="container-fluid pt-6 px-5" id="services">
      <div className="text-center mx-auto mb-5" style={{ maxWidth: '600px' }}>
        <h1 className="display-5 mb-0">Services</h1>
        <hr className="w-25 mx-auto bg-primary" />
      </div>
      <div className="row g-5">
        {services.map((service, index) => (
          <ServiceItem key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
