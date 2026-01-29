import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

type Service = {
	id: number
	title: string
	image: string
}

const Services: React.FC = () => {
	const { t } = useTranslation()
	const operations = t('operations.list', { returnObjects: true }) as string[]
	const services: Service[] = operations.slice(8, 16).map((title, idx) => ({
		id: idx + 1,
		title,
		image: `/services/${idx + 8}.jpg`,
	}))

	return (
		<section className='py-16 bg-gradient-to-b from-[#F7FAFF] via-white to-[#F1F5FD]'>
			<div className='container'>
				<div className='text-center mb-12'>
					<p className='text-sm tracking-widest uppercase text-[#0c5adb] font-semibold'>
						{t('operations.pretitle')}
					</p>
					<h2 className='mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#041424] leading-tight max-w-3xl mx-auto'>
						{t('operations.title')}
					</h2>
					<p className='mt-4 text-[#6B7280] max-w-2xl mx-auto text-[16px] leading-6 font-medium'>
						{t('operations.description')}
					</p>
				</div>

				<div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>
					{services.map(s => {
						return (
							<div
								key={s.id}
								className='group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100'
							>
								<div className='relative'>
									<img
										src={s.image}
										alt={s.title}
										className='w-full h-44 object-cover transition-transform duration-300 group-hover:scale-105'
									/>
									<div className='absolute top-3 left-3 w-11 h-11 rounded-full bg-[#0c5adb] text-white flex items-center justify-center font-bold text-[18px] shadow'>
										{String(s.id).padStart(2, '0')}
									</div>
								</div>
								<div className='p-5'>
									<h3 className='text-[18px] font-semibold text-[#041424] leading-snug min-h-[3.5rem]'>
										{s.title}
									</h3>
									<div className='mt-4'>
										<Link
											to='/services'
											className='inline-flex items-center gap-2 text-[#0c5adb] font-semibold text-sm hover:text-[#083f9c] transition'
											aria-label={`${t('operations.cta')} - ${s.title}`}
										>
											<span>{t('operations.cta')}</span>
											<svg
												className='w-4 h-4'
												fill='none'
												stroke='currentColor'
												viewBox='0 0 24 24'
											>
												<path
													d='M5 12h14M13 5l7 7-7 7'
													strokeWidth='1.5'
													strokeLinecap='round'
													strokeLinejoin='round'
												/>
											</svg>
										</Link>
									</div>
								</div>
							</div>
						)
					})}
				</div>

				{/* Optional CTA below services */}
				<div className='mt-10 text-center'>
					<Link
						to='/services'
						className='inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-sm font-medium shadow'
					>
						{t('operations.ctaAll')}
						<svg
							className='w-4 h-4'
							fill='none'
							stroke='currentColor'
							viewBox='0 0 24 24'
						>
							<path
								d='M5 12h14M13 5l7 7-7 7'
								strokeWidth='1.5'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					</Link>
				</div>
			</div>
		</section>
	)
}

export default Services
