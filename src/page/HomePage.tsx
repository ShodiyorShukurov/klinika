import Header from '../components/Header'
import HeroCarousel from '../components/HeroCarousel'
import About from '../components/About'
import Services from '../components/Services'
import ContactSection from '../components/ContactSection'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

const HomePage = () => {
	return (
		<>
			<Header />
      <HeroCarousel />
			<About />
      <Services />
			<ContactSection />
			<Testimonials />
      <Footer />
		</>
	)
}

export default HomePage