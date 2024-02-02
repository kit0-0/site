import HomeCarousel from "./HomeCarousel"
import Services from "./Services"
import TopHeader from './TopHeader';
import Menu from './Menu';
import About from './About';
import Features from './Features';
import Contact from './Contact';
import Footer from './Footer';
import BackToTopButton from './BackToTopButton';
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
    <BackToTopButton />
  </div>
  )
}
