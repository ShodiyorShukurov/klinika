import Header from './components/Header'
import About from './components/About'
import ContactSection from './components/ContactSection'
import Testimonials from './components/Testimonials'
import Services from './components/Services'
import HeroCarousel from './components/HeroCarousel'
import Footer from './components/Footer'

const App = () => {
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

export default App
