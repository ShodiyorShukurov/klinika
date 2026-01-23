import { Route, Routes } from 'react-router-dom'
import HomePage from './page/HomePage'
import ServicePage from './page/ServicePage'
import ServiceDetails from './page/ServiceDetails'
import ContactUs from './page/ContactUs'

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/services' element={<ServicePage />} />
			<Route path="/services/:slug" element={<ServiceDetails />} />
			<Route path="/contact" element={<ContactUs />} />
		</Routes>
	)
}

export default App
