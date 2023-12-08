import HomeCarousel from "./(components)/HomeCarousel"
import Services from "./(components)/Services"
import TopHeader from './(components)/TopHeader';
import Menu from './(components)/Menu';
import About from './(components)/About';
import Features from './(components)/Features';
import Contact from './(components)/Contact';
import Footer from './(components)/Footer';
import BackToTopButton from './(components)/BackToTopButton';
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
