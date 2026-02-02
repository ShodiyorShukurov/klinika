import Hero from '../components/Contact/Hero'
import ContactFormSection from '../components/ContactInfo/ContactFormSection'
// import ContactFormSection from '../components/ContactInfo/ContactFormSection'
import ContactInfoCards from '../components/ContactInfo/ContactInfoCards'
import Footer from '../components/Footer'
import Header from '../components/Header'
import GoogleMapReact from 'google-map-react'

const MapMarker = ({ lat, lng }: { lat: number; lng: number }) => (
	<div
		className='text-red-600 text-3xl'
		title={`Koordinatalar: ${lat}, ${lng}`}
	>
		<svg width='32' height='40' viewBox='0 0 32 40' fill='none'>
			<circle cx='16' cy='16' r='9' fill='#D12C2C' />
		</svg>
	</div>
)

const tashkentCoordinates = {
	lat: 41.269801,
	lng: 69.201026,
}

const ContactUs = () => {
	return (
		<>
			<Header />
			<Hero />
			<ContactInfoCards />
			<ContactFormSection />

			<div className='w-full h-[600px] bg-gray-700 rounded-md overflow-hidden' id='map'>
				<GoogleMapReact
					bootstrapURLKeys={{
						key: 'AIzaSyB01Ad7b4Dt3BsrUL13vLMZoRjRsSyGIeo',
					}}
					defaultCenter={tashkentCoordinates}
					defaultZoom={13}
				>
					<MapMarker
						lat={tashkentCoordinates.lat}
						lng={tashkentCoordinates.lng}
					/>
				</GoogleMapReact>
			</div>
			<Footer />
		</>
	)
}

export default ContactUs
