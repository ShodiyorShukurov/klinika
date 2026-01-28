import React from 'react'
import { useTranslation } from 'react-i18next'

const AboutContent: React.FC = () => {
	const { t } = useTranslation()
	const list = t('aboutPage.content.list', { returnObjects: true }) as string[]
	const alertList = t('aboutPage.content.alertList', {
		returnObjects: true,
	}) as string[]

	return (
		<section className='py-10'>
			<div className='container'>
				<div className='bg-white rounded-2xl shadow-lg p-8'>
					<div className='grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-10 items-start'>
						{/* Content */}
						<div className='order-2 lg:order-1'>
							<h2 className='text-3xl md:text-4xl font-bold text-[#041424] mb-4 leading-tight'>
								{t('aboutPage.content.title')}
							</h2>
							<h2 className='text-xl font-semibold text-blue-700 mb-3'>
								{t('aboutPage.content.subtitle')}
							</h2>
							<p className='mb-4 text-gray-700'>
								{t('aboutPage.content.paragraph1')}
							</p>
							<p className='mb-4 text-gray-700'>
								{t('aboutPage.content.paragraph2')}
							</p>
							<h3 className='text-2xl font-bold text-[#041424] mb-3 mt-6'>
								{t('aboutPage.content.sectionTitle')}
							</h3>
							<p className='mb-2 text-gray-700'>
								{t('aboutPage.content.sectionLead')}
							</p>
							<ul className='mb-4 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-gray-800'>
								{list.map(item => (
									<li key={item} className='flex items-center gap-2'>
										<span className='text-blue-600'>●</span> {item}
									</li>
								))}
							</ul>
							<div className='mb-4'>
								<span className='font-bold text-red-600'>
									{t('aboutPage.content.alertTitle')}
								</span>{' '}
								{t('aboutPage.content.alertLead')}
								<ul className='mt-2 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-gray-800'>
									{alertList.map(item => (
										<li key={item} className='flex items-center gap-2'>
											<span className='text-blue-600'>●</span> {item}
										</li>
									))}
								</ul>
							</div>
							<div className='flex items-center gap-4 mt-6'>
								<a href='#' className='text-blue-600 hover:text-blue-800 text-2xl'>
									<i className='fab fa-facebook'></i>
								</a>
								<a
									href='#'
									className='text-orange-500 hover:text-orange-700 text-2xl'
								>
									<i className='fab fa-telegram'></i>
								</a>
								<a href='#' className='text-blue-500 hover:text-blue-700 text-2xl'>
									<i className='fab fa-linkedin'></i>
								</a>
							</div>
						</div>

						{/* Video */}
						<div className='order-1 lg:order-2 lg:sticky lg:top-24'>
							<div className='rounded-2xl overflow-hidden shadow-md bg-white'>
								<div className='aspect-video w-full'>
									<iframe
										width='100%'
										height='100%'
										src='https://www.youtube.com/embed/i1d-lO4rpeE'
										title={t('aboutPage.content.videoTitle')}
										allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
										referrerPolicy='strict-origin-when-cross-origin'
										allowFullScreen
										className='w-full h-full'
									></iframe>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default AboutContent
