import React from 'react'
import { useTranslation } from 'react-i18next'

const AboutContent: React.FC = () => {
	const { t } = useTranslation()
	const list = t('aboutPage.content.list', { returnObjects: true }) as string[]
	const alertList = t('aboutPage.content.alertList', {
		returnObjects: true,
	}) as string[]

	return (
		<section className='py-12 lg:py-16 bg-white'>
			<div className='container'>
				<div className='relative overflow-hidden rounded-[28px] bg-white text-[#0b1c2d] ring-1 ring-black/5 shadow-[0_20px_60px_rgba(15,23,42,0.08)]'>
					<div className='pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-[#2dd4bf]/10 blur-3xl'></div>
					<div className='pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-[#fbbf24]/10 blur-3xl'></div>

					<div className='grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 p-6 md:p-10'>
						{/* Video */}
						<div className='order-1 lg:order-1 lg:col-span-7'>
							<div className='rounded-3xl overflow-hidden shadow-[0_25px_70px_rgba(2,6,23,0.18)] bg-black'>
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
							<div className='mt-6 grid grid-cols-2 md:grid-cols-3 gap-4'>
								<img
									src='/about1.jpg'
									alt='About gallery 1'
									className='aspect-[4/3] w-full rounded-2xl object-cover ring-1 ring-black/10 shadow-sm'
								/>
								<img
									src='/about2.jpg'
									alt='About gallery 2'
									className='aspect-[4/3] w-full rounded-2xl object-cover ring-1 ring-black/10 shadow-sm'
								/>
								<img
									src='/about3.jpg'
									alt='About gallery 3'
									className='aspect-[4/3] w-full rounded-2xl object-cover ring-1 ring-black/10 shadow-sm'
								/>
							</div>

							<div className='mt-6 rounded-2xl border border-[#fbbf24]/25 bg-[#fbbf24]/10 p-5'>
								<div className='text-sm font-semibold uppercase tracking-[0.2em] text-[#b45309]'>
									{t('aboutPage.content.alertTitle')}
								</div>
								<p className='mt-2 text-slate-600'>
									{t('aboutPage.content.alertLead')}
								</p>
								<ul className='mt-3 grid grid-cols-1 gap-3 text-slate-700'>
									{alertList.map(item => (
										<li key={item} className='flex items-start gap-3'>
											<span className='mt-2 inline-block h-2 w-2 rounded-full bg-[#f59e0b]'></span>
											<span>{item}</span>
										</li>
									))}
								</ul>
							</div>
						</div>

						{/* Content */}
						<div className='order-2 lg:order-2 lg:col-span-5'>
							<h2 className='text-3xl md:text-4xl font-semibold leading-tight'>
								{t('aboutPage.content.title')}
							</h2>
							<p className='mt-3 text-sm uppercase tracking-[0.3em] text-[#0ea5a6]'>
								{t('aboutPage.content.subtitle')}
							</p>
							<p className='mt-6 text-slate-600'>
								{t('aboutPage.content.paragraph1')}
							</p>
							<p className='mt-4 text-slate-600'>
								{t('aboutPage.content.paragraph2')}
							</p>

							<div className='mt-8 rounded-2xl border border-black/10 bg-white p-5 shadow-sm'>
								<h3 className='text-xl font-semibold'>
									{t('aboutPage.content.sectionTitle')}
								</h3>
								<p className='mt-2 text-slate-600'>
									{t('aboutPage.content.sectionLead')}
								</p>
								<ul className='mt-4 grid grid-cols-1 gap-3 text-slate-700'>
									{list.map(item => (
										<li key={item} className='flex items-start gap-3'>
											<span className='mt-2 inline-block h-2 w-2 rounded-full bg-[#0ea5a6]'></span>
											<span>{item}</span>
										</li>
									))}
								</ul>
							</div>

							<div className='mt-8 flex flex-wrap items-center gap-4'>
								<a
									href='https://www.youtube.com/@endoloruz'
									className='rounded-full border border-black/15 px-4 py-2 text-sm uppercase tracking-[0.2em] text-slate-700 transition hover:border-black/40 hover:text-slate-900'
								>
									YouTube
								</a>
								<a
									href='https://www.instagram.com/shavkat_lor'
									className='rounded-full border border-black/15 px-4 py-2 text-sm uppercase tracking-[0.2em] text-slate-700 transition hover:border-black/40 hover:text-slate-900'
								>
									Instagram
								</a>
								<a
									href='https://t.me/+998977308685'
									className='rounded-full border border-black/15 px-4 py-2 text-sm uppercase tracking-[0.2em] text-slate-700 transition hover:border-black/40 hover:text-slate-900'
								>
									Telegram
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default AboutContent
