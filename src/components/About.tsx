import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const About = () => {
	const { t } = useTranslation()
	const items = t('aboutSection.items', { returnObjects: true }) as string[]
	const [isModalOpen, setIsModalOpen] = useState(false)

	const images = [
		'/about-img1.webp',
		'/about-img2.webp',
		'/about-img3.webp',
		'/about-img4.webp',
	]

	useEffect(() => {
		if (!isModalOpen) return
		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') setIsModalOpen(false)
		}
		window.addEventListener('keydown', onKeyDown)
		return () => window.removeEventListener('keydown', onKeyDown)
	}, [isModalOpen])

	return (
		<section className='py-12'>
			<div className='container'>
				<div className='lg:flex lg:items-center lg:gap-12'>
					{/* Left images */}
					<div className='relative lg:w-1/2'>
						<div className='grid grid-cols-2 gap-4 sm:gap-6'>
							<div className='rounded-xl overflow-hidden'>
								<img
									src={images[0]}
									alt='lab 1'
									className='w-full h-40 sm:h-56 md:h-72 object-cover'
								/>
							</div>
							<div className='rounded-xl overflow-hidden'>
								<img
									src={images[1]}
									alt='lab 2'
									className='w-full h-40 sm:h-56 md:h-72 object-cover'
								/>
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
					</div>

					{/* Right content */}
					<div className='mt-10 lg:mt-0 lg:w-1/2'>
						<p className='text-[16px] leading-6 text-[#0c5adb] font-medium'>
							{t('aboutSection.pretitle')}
						</p>

						<h2 className='mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#041424] leading-tight'>
							{t('aboutSection.title')}
						</h2>

						<p className='mt-6 text-[#686868] max-w-xl text-[16px] font-medium'>
							{t('aboutSection.description')}
						</p>

						<ul className='mt-8 space-y-4'>
							{items.map(item => (
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
							<button
								type='button'
								onClick={() => setIsModalOpen(true)}
								className='inline-flex items-center gap-3 bg-[#0c5adb] hover:bg-[#094bbd] text-white px-6.5 py-3 rounded-full text-[16px] font-medium uppercase'
							>
								{t('aboutSection.cta')}
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
							</button>
						</div>
					</div>
				</div>
			</div>

			{isModalOpen && (
				<div className='fixed inset-0 z-50 flex items-center justify-center px-4'>
					<button
						type='button'
						className='absolute inset-0 bg-black/50'
						aria-label={t('aboutSection.modal.close')}
						onClick={() => setIsModalOpen(false)}
					/>

					<div
						role='dialog'
						aria-modal='true'
						aria-labelledby='about-modal-title'
						className='relative w-full max-w-lg bg-white rounded-2xl shadow-xl p-6 sm:p-8'
					>
						<div className='flex items-start justify-between gap-6'>
							<div>
								<h3
									id='about-modal-title'
									className='text-2xl font-bold text-[#041424]'
								>
									{t('aboutSection.modal.title')}
								</h3>
								<p className='mt-2 text-[#6B7280] text-[15px] leading-6'>
									{t('aboutSection.modal.description')}
								</p>
							</div>
							<button
								type='button'
								onClick={() => setIsModalOpen(false)}
								className='text-slate-400 hover:text-slate-600'
								aria-label={t('aboutSection.modal.close')}
							>
								<svg
									className='w-5 h-5'
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
								>
									<path
										d='M6 6l12 12M18 6l-12 12'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</svg>
							</button>
						</div>

						<form className='mt-6 space-y-4'>
							<div>
								<label className='text-sm font-medium text-[#041424]'>
									{t('aboutSection.modal.nameLabel')}
								</label>
								<input
									type='text'
									placeholder={t('aboutSection.modal.namePlaceholder')}
									className='mt-2 w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0c5adb]'
								/>
							</div>
							<div>
								<label className='text-sm font-medium text-[#041424]'>
									{t('aboutSection.modal.phoneLabel')}
								</label>
								<input
									type='tel'
									placeholder={t('aboutSection.modal.phonePlaceholder')}
									className='mt-2 w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0c5adb]'
								/>
							</div>

							<button
								type='button'
								onClick={() => setIsModalOpen(false)}
								className='w-full rounded-full bg-[#0c5adb] hover:bg-[#094bbd] text-white py-3 text-sm font-semibold uppercase'
							>
								{t('aboutSection.modal.submit')}
							</button>
						</form>
					</div>
				</div>
			)}
		</section>
	)
}

export default About
