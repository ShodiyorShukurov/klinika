import React from 'react'
import { useTranslation } from 'react-i18next'

type Service = {
	id: number
	title: string
	image: string
}

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
	return (
		<article className='group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100'>
			<div className='relative bg-gradient-to-br from-slate-50 to-white'>
				<div className='absolute top-3 left-3 w-10 h-10 rounded-full bg-[#0c5adb] text-white flex items-center justify-center font-bold text-[16px] shadow'>
					{String(service.id).padStart(2, '0')}
				</div>
				<div className='aspect-[4/3] p-4 flex items-center justify-center'>
					<img
						className='max-h-full w-full object-contain transition-transform duration-300 group-hover:scale-105'
						alt={service.title}
						src={service.image}
						loading='lazy'
					/>
				</div>
			</div>

			<div className='p-5'>
				<h3 className='text-[18px] font-semibold text-slate-900 leading-snug'>
					{service.title}
				</h3>
			</div>
		</article>
	)
}

const ServicesList: React.FC = () => {
	const { t } = useTranslation()
	const operations = t('operations.list', { returnObjects: true }) as string[]
	const services: Service[] = operations.map((title, idx) => ({
		id: idx + 1,
		title,
		image: `/services/${idx + 1}.jpg`,
	}))

	return (
		<main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
			<header className='text-center mb-12'>
				<p className='text-sm tracking-widest uppercase text-[#0c5adb] font-semibold'>
					{t('operations.pretitle')}
				</p>
				<h1 className='mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900'>
					{t('operations.title')}
				</h1>
				<p className='mt-4 text-gray-600 max-w-2xl mx-auto text-[16px] leading-6'>
					{t('operations.description')}
				</p>
			</header>

			<section>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
					{services.map(srv => (
						<ServiceCard
							key={srv.id}
							service={srv}
							// imageLabel={t('operations.imagePlaceholder')}
						/>
					))}
				</div>
			</section>
		</main>
	)
}

export default ServicesList
