import AboutContent from '../components/About/AboutContent'
import AboutCarousel from '../components/About/AboutCarousel'
import AboutHero from '../components/About/Hero'
import Footer from '../components/Footer'
import Header from '../components/Header'

const About = () => {
	return (
		<>
			<Header />
			<AboutHero />
			<AboutContent />
			<AboutCarousel />
			<Footer />
		</>
	)
}

export default About
