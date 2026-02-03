import About from '../components/About'
import CaseStudiesCarousel from '../components/CaseStudiesCarousel'
import ContactSection from '../components/ContactSection'
import Header from '../components/Header'
import HeroCarousel from '../components/HeroCarousel'
import HomeVideoShowcase from '../components/HomeVideoShowcase'
import LabProductSection from '../components/LabProductSection'
import Services from '../components/Services'
// import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

const HomePage = () => {
	return (
		<>
			<Header />
			<HeroCarousel />
			<About />
			<HomeVideoShowcase />
			<LabProductSection />
			<Services />
			<CaseStudiesCarousel />
			<ContactSection />
			{/* <Testimonials /> */}
			<Footer />
		</>
	)
}

export default HomePage
