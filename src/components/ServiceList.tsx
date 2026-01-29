import React from 'react'
import { useTranslation } from 'react-i18next'

type Service = {
	id: number
	title: string
}

const ServiceCard: React.FC<{ service: Service; imageLabel: string }> = ({
	service,
	imageLabel,
}) => {
	return (
		<article className='bg-white rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-1 transition overflow-hidden'>
			<div
				className='w-full h-40 sm:h-48 bg-slate-100 flex items-center justify-center text-slate-400 text-sm'
				role='img'
				aria-label={imageLabel}
			>
				{imageLabel}
			</div>
			<div className='p-5'>
				<h3 className='text-center text-lg font-semibold text-slate-900'>
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
	}))

	return (
		<main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
			<header className='text-center mb-10'>
				<p className='text-sm text-blue-600 font-medium'>
					{t('operations.pretitle')}
				</p>
				<h1 className='mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900'>
					{t('operations.title')}
				</h1>
				<p className='mt-4 text-gray-600 max-w-2xl mx-auto'>
					{t('operations.description')}
				</p>
			</header>

			<section>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
					{services.map(srv => (
						<ServiceCard
							key={srv.id}
							service={srv}
							imageLabel={t('operations.imagePlaceholder')}
						/>
					))}
				</div>
			</section>
		</main>
	)
}

export default ServicesList
