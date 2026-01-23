import { Instagram, Youtube } from 'lucide-react'
import React from 'react'
import GoogleMapReact from 'google-map-react'

// type NewsItem = {
// 	id: number
// 	title: string
// 	date: string
// 	image: string
// 	href?: string
// }

// const NEWS: NewsItem[] = [
// 	{
// 		id: 1,
// 		title: 'Discovering Science Through Precision And Dedication',
// 		date: 'MAY 5, 2024',
// 		image:
// 			'https://images.unsplash.com/photo-1581091012184-7b9c0f7e0f69?w=400&q=80&auto=format&fit=crop',
// 		href: '#',
// 	},
// 	{
// 		id: 2,
// 		title: 'Behind Every Experiment Lies A World Of Discovery',
// 		date: 'MAY 5, 2024',
// 		image:
// 			'https://images.unsplash.com/photo-1580281657528-6c5f7c3d9b1d?w=400&q=80&auto=format&fit=crop',
// 		href: '#',
// 	},
// ]

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

const Footer: React.FC = () => {

		const tashkentCoordinates = {
		lat: 41.269801,
		lng: 69.201026,
	}


	return (
		<footer className='bg-[#041926] text-white'>
			<div className='container'>
				<div className='py-12'>
					<div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
						{/* Logo + desc + socials */}
						<div>
							{/* Simple logo */}
							<img
								src='/footer-logo.webp'
								alt='Labostica Logo'
								className='w-50 object-contain'
							/>

							<p className='mt-4 text-[16px] font-medium text-slate-200 max-w-[500px]'>
								There are many variations of passages by injected humour
								randomised
							</p>

							<div className='mt-6 flex items-center gap-3'>
								<a
									href='https://www.youtube.com/@endoloruz'
									aria-label='Facebook'
									className='w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#041926] hover:scale-105 transition'
								>
									<Youtube className='w-5 h-5' />
								</a>

								<a
									href='https://www.instagram.com/shavkat_lor'
									aria-label='Instagram'
									className='w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#041926] hover:scale-105 transition'
								>
									<Instagram className='w-5 h-5' />
								</a>
							</div>
						</div>

						{/* Useful Links */}
						<div>
							<h4 className='text-lg font-semibold'>Useful Link</h4>
							<ul className='mt-4 space-y-3 text-[16px] font-medium text-slate-200'>
								<li className='flex items-start gap-3'>
									<span className='text-blue-300'>–</span>
									<a href='#' className='hover:underline'>
										About Us
									</a>
								</li>
								<li className='flex items-start gap-3'>
									<span className='text-blue-300'>–</span>
									<a href='#' className='hover:underline'>
										Our Services
									</a>
								</li>
								<li className='flex items-start gap-3'>
									<span className='text-blue-300'>–</span>
									<a href='#' className='hover:underline'>
										Our Process
									</a>
								</li>
								<li className='flex items-start gap-3'>
									<span className='text-blue-300'>–</span>
									<a href='#' className='hover:underline'>
										Our Team
									</a>
								</li>
								<li className='flex items-start gap-3'>
									<span className='text-blue-300'>–</span>
									<a href='#' className='hover:underline'>
										Contact Us
									</a>
								</li>
							</ul>
						</div>

						{/* Services */}
						<div>
							<h4 className='text-lg font-semibold'>Services</h4>
							<ul className='mt-4 space-y-3 text-sm text-slate-200'>
								<li className='flex items-start gap-3'>
									<span className='text-blue-300'>–</span>
									<a href='#' className='hover:underline'>
										Scientific Vision Hub
									</a>
								</li>
								<li className='flex items-start gap-3'>
									<span className='text-blue-300'>–</span>
									<a href='#' className='hover:underline'>
										Pathologycam Testing
									</a>
								</li>
								<li className='flex items-start gap-3'>
									<span className='text-blue-300'>–</span>
									<a href='#' className='hover:underline'>
										Quantum Analysis Labs
									</a>
								</li>
								<li className='flex items-start gap-3'>
									<span className='text-blue-300'>–</span>
									<a href='#' className='hover:underline'>
										Chemical Research
									</a>
								</li>
								<li className='flex items-start gap-3'>
									<span className='text-blue-300'>–</span>
									<a href='#' className='hover:underline'>
										Latest Technology
									</a>
								</li>
							</ul>
						</div>

						{/* Recent News */}
						<div>
					<h3 className='text-white font-semibold mb-4'>
						Our Location
					</h3>
					<div className='w-full h-40 bg-gray-700 rounded-md overflow-hidden'>
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
				</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
