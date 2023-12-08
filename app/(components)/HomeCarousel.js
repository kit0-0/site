import Image from 'next/image';

const carouselData = [
  {
    image: '/carousel-1.jpg',
    alt: 'Image 1',
    title: 'Information Technology',
    description: 'We provide tailored solutions for your IT workforce needs, ensuring optimal results.',
  },
  {
    image: '/carousel-2.jpg',
    alt: 'Image 2',
    title: 'Healthcare',
    description: 'Discover the perfect fit for your healthcare staffing needs through our comprehensive services.',
  },
  {
    image: '/carousel-3.jpg',
    alt: 'Image 3',
    title: 'FMCG Workforce Solutions',
    description: 'BoostTech specializes in providing comprehensive permanent workforce solutions for the Fast-Moving Consumer Goods (FMCG) industry.',
  },
  {
    image: '/carousel-4.jpg',
    alt: 'Image 4',
    title: 'Education and Edtech',
    description: 'Our expertise lies in providing competent manpower to institutions and Edtech companies, ensuring the right talent for your organization\'s needs.',
  },
];

const HomeCarousel = () => {
  return (
    <div className="container-fluid p-0" id="home">


      <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          {/* Carousel Items */}
          {carouselData.map((item, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <Image src={item.image} alt={item.alt} width={1920} height={1080}   />
              <div  className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3">
                  <h1 className="display-1 text-white mb-md-4">{item.title}</h1>
                  <h5 className="text-white text-uppercase">{item.description}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Control Buttons */}
        <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default HomeCarousel;
