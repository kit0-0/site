import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

import HomeCarousel from "./(components)/HomeCarousel"
import Services from "./(components)/Services"
import TopHeader from './(components)/TopHeader';
import Menu from './(components)/Menu';
import About from './(components)/About';
import Features from './(components)/Features';
import Contact from './(components)/Contact';
import Footer from './(components)/Footer';
export default function Home() {
  return (
    <div>

    <TopHeader />
    <Menu />

    <HomeCarousel />
    <About />
    <Services />
    <Features />
    <Contact />

    <Footer />
    {/* Back to Top Button */}
    <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top">
        <FontAwesomeIcon icon={faArrowUp} />
      </a>
  </div>
  )
}
