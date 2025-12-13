import React from 'react'

type Service = {
	id: number
	title: string
	desc: string
	image: string
}

const SERVICES: Service[] = [
	{
		id: 1,
		title: 'Scientific Research',
		desc: 'Advanced experimental design, data analysis and publication support to accelerate scientific discovery across domains.',
		image:
			'https://images.unsplash.com/photo-1581091012184-7b9c0f7e0f69?w=1200&q=80&auto=format&fit=crop',
	},
	{
		id: 2,
		title: 'Process Optimization',
		desc: 'Optimization of laboratory workflows and automation solutions to increase throughput and reproducibility.',
		image:
			'https://images.unsplash.com/photo-1580281657528-6c5f7c3d9b1d?w=1200&q=80&auto=format&fit=crop',
	},
	{
		id: 3,
		title: 'Molecular Diagnostics',
		desc: 'High-sensitivity molecular assays and sequencing services for accurate diagnostics and research profiling.',
		image:
			'https://images.unsplash.com/photo-1582719478184-5f2d6cc9f0b0?w=1200&q=80&auto=format&fit=crop',
	},
	{
		id: 4,
		title: 'Quality Assurance',
		desc: 'Full QA/QC programs, method validation and compliance support to meet regulatory and industry standards.',
		image:
			'https://images.unsplash.com/photo-1581090463452-7a0a6b8f8bcd?w=1200&q=80&auto=format&fit=crop',
	},
]

const Services: React.FC = () => {
	return (
		<section className='py-16 bg-[#F1F5FD]'>
			<div className='container'>
				<div className='text-center mb-10'>
					<p className='text-[16px] leading-6 text-[#0c5adb] font-medium '>
						OUR SERVICES
					</p>
					<h2 className='mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#041424] leading-tight max-w-200 mx-auto'>
						Our Comprehensive Laboratory & Research Services
					</h2>
				</div>

				<div className='grid sm:grid-cols-2 gap-3 sm:gap-6'>
					{SERVICES.map((s, idx) => {
						const isEven = idx % 2 === 1
						return (
							<div
								key={s.id}
								className={`bg-white rounded-[10px] lg:flex lg:items-center lg:gap-6 p-6 sm:p-8 transition-transform hover:-translate-y-1 ${
									isEven ? 'lg:flex-row-reverse' : ''
								}`}
							>
								{/* Content */}
								<div className='mt-6 lg:mt-0 lg:flex-1 flex items-start flex-col-reverse lg:flex-row gap-6'>
									<div className='flex-1'>
										<div className='flex-shrink-0'>
											<div className='w-15 h-15 rounded-full bg-[#0c5adb] text-white flex items-center justify-center font-bold text-[24px] '>
												{String(s.id).padStart(2, '0')}
											</div>
										</div>
										<h3 className='mt-5 text-[28px] font-bold text-[#041424]'>
											{s.title}
										</h3>
										<p className='mt-3 text-[#6B7280] max-w-xl text-[16px] leading-6 font-medium'>{s.desc}</p>

										<div className='mt-6'>
											<a
												href='#'
												className='inline-flex items-center gap-3 bg-slate-900 text-white w-max px-4 py-2 rounded-full text-sm shadow hover:bg-slate-700 transition'
												aria-label={`Learn more about ${s.title}`}
											>
												<span>Learn More</span>
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
											</a>
										</div>
									</div>

									{/* Image */}
									<div className='w-full lg:w-1/2 flex-shrink-0'>
										<img
											src={s.image}
											alt={s.title}
											className='w-full h-56 sm:h-64 md:h-72 object-cover rounded-xl'
										/>
									</div>
								</div>
							</div>
						)
					})}
				</div>

				{/* Optional CTA below services */}
				<div className='mt-10 text-center'>
					<a
						href='#contact'
						className='inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-sm font-medium shadow'
					>
						View All Services
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
					</a>
				</div>
			</div>
		</section>
	)
}

export default Services
