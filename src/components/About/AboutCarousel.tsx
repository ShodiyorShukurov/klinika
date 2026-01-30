import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const AboutCarousel: React.FC = () => {
	const { t } = useTranslation()
	const images = [
		'/carousel/carousel1.png',
		'/carousel/carousel2.png',
		'/carousel/carousel3.png',
		'/carousel/carousel4.png',
		'/carousel/carousel5.png',
	]
	const [index, setIndex] = useState(0)

	useEffect(() => {
		if (images.length <= 1) return
		const timer = setInterval(() => {
			setIndex(prev => (prev + 1) % images.length)
		}, 5000)
		return () => clearInterval(timer)
	}, [images.length])

	const goPrev = () =>
		setIndex(prev => (prev - 1 + images.length) % images.length)
	const goNext = () => setIndex(prev => (prev + 1) % images.length)

	return (
		<section className='py-12 lg:py-16 bg-gradient-to-b from-[#F7FAFF] via-white to-[#EEF3FF]'>
			<div className='container'>
				<div className='text-center mb-10'>
					<p className='text-xs tracking-[0.35em] uppercase text-[#0c5adb] font-semibold'>
						{t('aboutPage.carousel.subtitle')}
					</p>
					<h2 className='mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0b1c2d]'>
						{t('aboutPage.carousel.title')}
					</h2>
				</div>

				<div className='relative overflow-hidden rounded-[28px] bg-white ring-1 ring-black/5 shadow-[0_25px_70px_rgba(15,23,42,0.12)]'>
					<div
						className='flex transition-transform duration-500 ease-out'
						style={{ transform: `translateX(-${index * 100}%)` }}
					>
						{images.map((src, i) => (
							<div key={src} className='min-w-full'>
								<div className='relative'>
									<img
										src={src}
										alt={`Carousel ${i + 1}`}
										className='w-full h-[260px] sm:h-[380px] lg:h-[480px] object-cover object-top'
										loading='lazy'
									/>
									<div className='absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-transparent' />
								</div>
							</div>
						))}
					</div>

					<button
						type='button'
						onClick={goPrev}
						aria-label='Previous slide'
						className='absolute left-5 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/90 text-slate-800 shadow-lg hover:bg-white'
					>
						<span className='sr-only'>Previous</span>
						<svg
							className='mx-auto h-5 w-5'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
						>
							<path
								d='M15 6l-6 6 6 6'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					</button>
					<button
						type='button'
						onClick={goNext}
						aria-label='Next slide'
						className='absolute right-5 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/90 text-slate-800 shadow-lg hover:bg-white'
					>
						<span className='sr-only'>Next</span>
						<svg
							className='mx-auto h-5 w-5'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
						>
							<path
								d='M9 6l6 6-6 6'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					</button>

					<div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full bg-black/30 px-3 py-1.5 backdrop-blur'>
						{images.map((_, i) => (
							<button
								key={`dot-${i}`}
								type='button'
								onClick={() => setIndex(i)}
								aria-label={`Go to slide ${i + 1}`}
								className={`h-2.5 w-2.5 rounded-full transition ${
									i === index ? 'bg-white' : 'bg-white/50'
								}`}
							/>
						))}
					</div>
				</div>

				<div className='mt-6 grid grid-cols-3 sm:grid-cols-6 gap-3'>
					{images.map((src, i) => (
						<button
							key={`thumb-${src}`}
							type='button'
							onClick={() => setIndex(i)}
							className={`overflow-hidden rounded-xl ring-1 transition ${
								i === index
									? 'ring-[#0c5adb]'
									: 'ring-black/10 hover:ring-black/30'
							}`}
						>
							<img
								src={src}
								alt={`Thumbnail ${i + 1}`}
								className='h-20 w-full object-cover'
								loading='lazy'
							/>
						</button>
					))}
				</div>
			</div>
		</section>
	)
}

export default AboutCarousel
