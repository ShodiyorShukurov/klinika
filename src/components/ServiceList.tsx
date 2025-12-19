import React from 'react'
import { Link } from 'react-router-dom'

type Service = {
	id: number
	title: string
	image: string
	slug: string
	excerpt?: string
}

const SERVICES: Service[] = [
	{
		id: 1,
		title: 'General Oncology',
		slug: 'oncology',
		image:
			'https://images.unsplash.com/photo-1581091012184-7b9c0f7e0f69?w=1200&q=80&auto=format&fit=crop',
		excerpt: 'Diagnosis and treatment of oncological diseases.',
	},
	{
		id: 2,
		title: 'General Surgery',
		slug: 'general-surgery',
		image:
			'https://images.unsplash.com/photo-1580281657528-6c5f7c3d9b1d?w=1200&q=80&auto=format&fit=crop',
		excerpt: 'Surgical and minimally invasive treatment methods.',
	},
	{
		id: 3,
		title: 'Gynecology',
		slug: 'gynecology',
		image:
			'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1200&q=80&auto=format&fit=crop',
		excerpt: 'Examinations, treatment and pregnancy management.',
	},
	{
		id: 4,
		title: 'Plastic Surgery',
		slug: 'plastic-surgery',
		image:
			'https://images.unsplash.com/photo-1579154203451-2f3a4b9b0b4d?w=1200&q=80&auto=format&fit=crop',
		excerpt: 'Reconstructive and aesthetic surgeries.',
	},
	{
		id: 5,
		title: 'Mammology',
		slug: 'mammology',
		image:
			'https://images.unsplash.com/photo-1556228720-1c9bde2f3b1b?w=1200&q=80&auto=format&fit=crop',
		excerpt: 'Diagnosis and treatment of breast diseases.',
	},
	{
		id: 6,
		title: 'Urology',
		slug: 'urology',
		image:
			'https://images.unsplash.com/photo-1582719478184-5f2d6cc9f0b0?w=1200&q=80&auto=format&fit=crop',
		excerpt: 'Urological examinations and surgical interventions.',
	},
]

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
	return (
		<article className='bg-white rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-1 transition overflow-hidden'>
			<Link
				to={`/services/${service.slug}`}
				className='block group'
				aria-label={service.title}
			>
				<div className='w-full h-44 md:h-56 bg-gray-100 overflow-hidden'>
					<img
						src={service.image}
						alt={service.title}
						className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
					/>
				</div>

				<div className='p-5'>
					<h3 className='text-center text-lg font-semibold text-slate-900'>
						{service.title}
					</h3>
					{service.excerpt && (
						<p className='mt-3 text-sm text-gray-600 text-center'>
							{service.excerpt}
						</p>
					)}
				</div>
			</Link>
		</article>
	)
}

const ServicesList: React.FC = () => {
	return (
		<main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
			<header className='text-center mb-10'>
				<p className='text-sm text-blue-600 font-medium'>OUR SERVICES</p>
				<h1 className='mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900'>
					Our Services
				</h1>
				<p className='mt-4 text-gray-600 max-w-2xl mx-auto'>
					We offer a wide range of medical services — from diagnostics to
					complex surgeries.
				</p>
			</header>

			<section>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
					{SERVICES.map(srv => (
						<ServiceCard key={srv.id} service={srv} />
					))}
				</div>
			</section>
		</main>
	)
}

export default ServicesList
