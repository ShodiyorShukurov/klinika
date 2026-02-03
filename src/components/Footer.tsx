import { Instagram, Send, Youtube } from 'lucide-react'
import React from 'react'
import GoogleMapReact from 'google-map-react'
import { useTranslation } from 'react-i18next'

const MapMarker = ({
	title,
}: {
	lat: number
	lng: number
	title: string
}) => (
	<div className='text-red-600 text-3xl' title={title}>
		<svg width='32' height='40' viewBox='0 0 32 40' fill='none'>
			<circle cx='16' cy='16' r='9' fill='#D12C2C' />
		</svg>
	</div>
)

const Footer: React.FC = () => {
	const { t } = useTranslation()
	const tashkentCoordinates = {
		lat: 41.269801,
		lng: 69.201026,
	}

	return (
		<footer className='bg-[#041926] text-white'>
			<div className='container'>
				<div className='py-12 lg:py-16'>
					<div className='grid items-start gap-10 lg:grid-cols-[1fr_1.2fr]'>
						{/* Logo + desc + socials */}
						<div className='flex flex-col gap-6'>
							<img
								src='/footer-logo.webp'
								alt='Labostica Logo'
								className='w-50 object-contain'
							/>

							{/* <p className='text-[16px] font-medium text-slate-200 max-w-[520px]'>
								{t('footer.description')}
							</p> */}

							<div className='flex items-center gap-3'>
								<a
									href='https://www.youtube.com/@shavkatlor'
									aria-label='YouTube'
									target='_blank'
									className='w-10 h-10 rounded-full bg-white/95 flex items-center justify-center text-[#041926] hover:scale-105 transition'
								>
									<Youtube className='w-5 h-5' />
								</a>

								<a
									href='https://www.instagram.com/dr.shavkat_lor'
									aria-label='Instagram'
									target='_blank'
									className='w-10 h-10 rounded-full bg-white/95 flex items-center justify-center text-[#041926] hover:scale-105 transition'
								>
									<Instagram className='w-5 h-5' />
								</a>

								<a
									href='https://t.me/Shavkat_lor'
									aria-label='Telegram'
									target='_blank'
									className='w-10 h-10 rounded-full bg-white/95 flex items-center justify-center text-[#041926] hover:scale-105 transition'
								>
									<Send className='w-5 h-5' />
								</a>
							</div>
						</div>

						{/* Our Location */}
						<div className=''>
							<h3 className='text-white text-xl font-semibold mb-4'>
								{t('footer.locationTitle')}
							</h3>
							<div className='w-full h-64 sm:h-72 bg-gray-700 rounded-xl overflow-hidden'>
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
										title={t('footer.markerTitle', {
											lat: tashkentCoordinates.lat.toString(),
											lng: tashkentCoordinates.lng.toString(),
										})}
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
