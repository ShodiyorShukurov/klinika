const About = () => {
	const images = [
		'/about-img1.webp',
		'/about-img2.webp',
		'/about-img3.webp',
		'/about-img4.webp',
	]

	return (
		<section className=' py-12'>
			<div className='container'>
				<div className='lg:flex lg:items-center lg:gap-12'>
					{' '}
					{/* Left images */}{' '}
					<div className='relative lg:w-1/2'>
						{' '}
						<div className='grid grid-cols-2 gap-4 sm:gap-6'>
							{' '}
							<div className='rounded-xl overflow-hidden'>
								{' '}
								<img
									src={images[0]}
									alt='lab 1'
									className='w-full h-40 sm:h-56 md:h-72 object-cover'
								/>{' '}
							</div>{' '}
							<div className='rounded-xl overflow-hidden'>
								{' '}
								<img
									src={images[1]}
									alt='lab 2'
									className='w-full h-40 sm:h-56 md:h-72 object-cover'
								/>{' '}
							</div>
							<div className='rounded-xl overflow-hidden'>
								<img
									src={images[2]}
									alt='lab 3'
									className='w-full h-40 sm:h-56 md:h-72 object-cover'
								/>
							</div>
							<div className='rounded-xl overflow-hidden'>
								<img
									src={images[3]}
									alt='lab 4'
									className='w-full h-40 sm:h-56 md:h-72 object-cover'
								/>
							</div>
						</div>
						{/* Circular badge overlapping images */}
						<div
							className='
       absolute
       left-1/2 top-1/2
       -translate-x-1/2 -translate-y-1/2
     
       bg-blue-600
       w-20 h-20 md:w-34 md:h-34
       rounded-full flex items-center justify-center
       transform
			 p-6
     '
							aria-hidden='true'
						>
							{/* simple flask icon (SVG) */}
							<img src='/about.png' alt='about icon' width={130} height={130} />
						</div>
					</div>
					{/* Right content */}
					<div className='mt-10 lg:mt-0 lg:w-1/2'>
						<p className='text-[16px] leading-6 text-[#0c5adb] font-medium '>
							ABOUT US
						</p>
						<h2 className='mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#041424] leading-tight'>
							Leading The Future Of Scientific Exploration
						</h2>
						<p className='mt-6 text-[#686868] max-w-xl text-[16px] font-medium'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
							congue, diam ut hendrerit elementum, dolor metus eleifend erat,
							vitae scelerisque massa justo non dolor.
						</p>

						<ul className='mt-8 space-y-4'>
							{[
								'The Science Behind Our Success',
								'Innovating for a Better Tomorrow',
								'Beyond Boundaries: Our Scientific Mission',
								'Driven by Curiosity, Defined by Excellence',
								'Passion for Science, Commitment to Progress',
							].map(item => (
								<li key={item} className='flex items-start gap-3'>
									<svg
										className='w-6 h-6 text-blue-600 mt-1 flex-shrink-0'
										viewBox='0 0 24 24'
										fill='none'
									>
										<path
											d='M20 6L9 17l-5-5'
											stroke='currentColor'
											strokeWidth='2'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
									</svg>
									<span className='text-[16px] font-medium text-[#041424]'>
										{item}
									</span>
								</li>
							))}
						</ul>

						<div className='mt-8'>
							<a
								href='#'
								className='inline-flex items-center gap-3 bg-[#0c5adb] hover:bg-[#094bbd] text-white px-6.5 py-3 rounded-full text-[16px] font-medium uppercase'
							>
								View Research
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
				</div>
			</div>
		</section>
	)
}

export default About
