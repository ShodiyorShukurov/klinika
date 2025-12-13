import React, { useEffect, useState } from 'react'

type Testimonial = {
	id: number
	quote: string
	author: string
	role: string
	avatar: string
}

const TESTIMONIALS: Testimonial[] = [
	{
		id: 1,
		quote:
			'Focuses on diagnosing and managing disorders affecting the brain, spinal cord, and nervous system. Treats conditions like epilepsy, Parkinson’s disease, strokes, and multiple sclerosis, using tests and treatments for improved health.',
		author: 'Dr. John Miller',
		role: 'Neurologist',
		avatar:
			'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=400&q=80&auto=format&fit=crop',
	},
	{
		id: 2,
		quote:
			'Our collaboration led to breakthrough processes in lab automation, significantly improving turnaround times and reproducibility across multiple studies.',
		author: 'Dr. Sarah Lee',
		role: 'Lead Researcher',
		avatar:
			'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80&auto=format&fit=crop',
	},
	{
		id: 3,
		quote:
			'Their team demonstrated exemplary rigor and innovation in experimental design that translated directly into clinical insights.',
		author: 'Dr. Michael Smith',
		role: 'Clinical Scientist',
		avatar:
			'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&q=80&auto=format&fit=crop',
	},
]

const Testimonials: React.FC = () => {
	const [index, setIndex] = useState(0)
	const length = TESTIMONIALS.length

	// Auto-advance every 6 seconds
	useEffect(() => {
		const t = setInterval(() => {
			setIndex(i => (i + 1) % length)
		}, 6000)
		return () => clearInterval(t)
	}, [length])

	const goTo = (i: number) => setIndex(i)

	return (
		<section className='py-16'>
			<div className='container'>
				<div className='text-center mb-12'>
					<p className='text-[16px] leading-6 text-[#0c5adb] font-medium '>
						OUR TESTIMONIALS
					</p>
					<h2 className='mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#041424] leading-tight max-w-200 mx-auto'>
						Testimonials From Research & Industry Leaders
					</h2>
				</div>

				<div className='grid grid-cols-1 lg:grid-cols-12 gap-8 items-start'>
					{/* Left: testimonial card (spans 7 on lg) */}
					<div className='lg:col-span-8 h-full flex'>
						<div className='bg-[#f1f5fd] rounded-[10px] p-8  transition-all flex flex-col justify-between  w-full'>
							<p className='text-[#041424] text-[20px] leading-relaxed mt-10'>
								{TESTIMONIALS[index].quote}
							</p>

							<hr className='my-6 border-gray-200' />

							<div className='flex items-center justify-between'>
								<div className='flex items-center gap-4'>
									<img
										src={TESTIMONIALS[index].avatar}
										alt={TESTIMONIALS[index].author}
										className='w-16 h-16 sm:w-25 sm:h-25 rounded-full object-cover border-4 border-white shadow-sm'
									/>
									<div>
										<div className='text-[28px] leading-9 font-bold text-[#041424]'>
											{TESTIMONIALS[index].author}
										</div>
										<div className='text-[16px] leading-6 font-medium text-[#0C5ADB] uppercase tracking-wide'>
											{TESTIMONIALS[index].role}
										</div>
									</div>
								</div>

								{/* Small indicator / progress dots */}
								<div className='hidden sm:flex items-center gap-3'>
									{TESTIMONIALS.map((t, i) => (
										<button
											key={t.id}
											aria-label={`Go to testimonial ${i + 1}`}
											onClick={() => goTo(i)}
											className={`w-9 h-1.5 rounded-full transition-all ${
												i === index ? 'bg-[#0C5ADB]' : 'bg-gray-300'
											}`}
										/>
									))}
								</div>
							</div>

							{/* Mobile dots */}
							<div className='flex sm:hidden items-center justify-center gap-3 mt-6'>
								{TESTIMONIALS.map((t, i) => (
									<button
										key={t.id}
										aria-label={`Go to testimonial ${i + 1}`}
										onClick={() => goTo(i)}
										className={`w-8 h-1.5 rounded-full transition-all ${
											i === index ? 'bg-[#0C5ADB]' : 'bg-gray-300'
										}`}
									/>
								))}
							</div>
						</div>
					</div>

					{/* Right: image + reviews card (spans 5 on lg) */}
					<div className='lg:col-span-4'>
						<div className='rounded-2xl overflow-hidden shadow-lg'>
							<div className='relative'>
								<img
									src='/test.webp'
									alt='Scientist'
									className='w-full'
									style={{ height: 300 }}
								/>

								{/* Avatars stack */}
								<div className='absolute -bottom-8 left-0 right-0 flex items-center justify-center'>
									<div className='flex -space-x-3 '>
										<img
											src='https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=80&q=80&auto=format&fit=crop'
											className='w-15 h-15 rounded-full object-cover'
											alt='avatar1'
										/>
										<img
											src='https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&q=80&auto=format&fit=crop'
											className='w-15 h-15 rounded-full object-cover'
											alt='avatar2'
										/>
										<img
											src='https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&q=80&auto=format&fit=crop'
											className='w-15 h-15 rounded-full object-cover'
											alt='avatar3'
										/>
									</div>
								</div>
							</div>

							{/* Reviews panel */}
							<div className='bg-[#041424] text-white p-6 pt-12'>
								<div className='text-center'>
									<div className='text-2xl font-extrabold'>25k Reviews</div>
									<div className='mt-3 flex items-center justify-center gap-1'>
										{/* 4.5 stars */}
										{Array.from({ length: 5 }).map((_, i) => (
											<svg
												key={i}
												className={`w-5 h-5 ${
													i < 4 ? 'text-yellow-400' : 'text-yellow-400/60'
												}`}
												viewBox='0 0 20 20'
												fill='currentColor'
											>
												<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.286 3.966c.3.921-.755 1.688-1.54 1.118L10 15.347l-3.487 2.403c-.784.57-1.84-.197-1.54-1.118l1.286-3.966a1 1 0 00-.364-1.118L2.515 9.393c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69L9.05 2.927z' />
											</svg>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Testimonials
