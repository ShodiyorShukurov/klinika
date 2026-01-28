import { useTranslation } from 'react-i18next'

const LEFT_POINTS = [
	{
		titleKey: 'labProduct.left.1.title',
		descKey: 'labProduct.left.1.desc',
	},
	{
		titleKey: 'labProduct.left.2.title',
		descKey: 'labProduct.left.2.desc',
	},
]

const RIGHT_POINTS = [
	{
		titleKey: 'labProduct.right.1.title',
		descKey: 'labProduct.right.1.desc',
		icon: (
			<svg viewBox='0 0 24 24' className='w-7 h-7' fill='none'>
				<path
					d='M8 3h8a2 2 0 0 1 2 2v2H6V5a2 2 0 0 1 2-2Z'
					stroke='currentColor'
					strokeWidth='1.5'
					strokeLinecap='round'
				/>
				<path
					d='M6 7h12v9a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V7Z'
					stroke='currentColor'
					strokeWidth='1.5'
				/>
				<path
					d='M9 11h6M9 14.5h4'
					stroke='currentColor'
					strokeWidth='1.5'
					strokeLinecap='round'
				/>
			</svg>
		),
	},
	{
		titleKey: 'labProduct.right.2.title',
		descKey: 'labProduct.right.2.desc',
		icon: (
			<svg viewBox='0 0 24 24' className='w-7 h-7' fill='none'>
				<path
					d='M9 3h6l1 2h3v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5h3l1-2Z'
					stroke='currentColor'
					strokeWidth='1.5'
				/>
				<path
					d='M9 12l2 2 4-4'
					stroke='currentColor'
					strokeWidth='1.5'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</svg>
		),
	},
	{
		titleKey: 'labProduct.right.3.title',
		descKey: 'labProduct.right.3.desc',
		icon: (
			<svg viewBox='0 0 24 24' className='w-7 h-7' fill='none'>
				<path
					d='M9 3h6M10 3v4l-4 8a2 2 0 0 0 2 3h8a2 2 0 0 0 2-3l-4-8V3'
					stroke='currentColor'
					strokeWidth='1.5'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M8 11h8'
					stroke='currentColor'
					strokeWidth='1.5'
					strokeLinecap='round'
				/>
			</svg>
		),
	},
]

const LabProductSection = () => {
	const { t } = useTranslation()

	return (
		<section className='py-16'>
			<div className='container'>
				<div className='grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr_1fr]'>
					<div>
						<p className='text-[16px] leading-6 text-[#0c5adb] font-medium tracking-[0.25em] uppercase'>
							{t('labProduct.pretitle')}
						</p>
						<h2 className='mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#041424] leading-tight'>
							{t('labProduct.title')}
						</h2>
						{/* <p className='mt-5 text-[#6B7280] text-[16px] leading-7 max-w-xl'>
							{t('labProduct.description')}
						</p> */}

						<div className='mt-8 space-y-6'>
							{LEFT_POINTS.map(point => (
								<div key={point.titleKey} className='flex gap-4'>
									<div className='w-11 h-11 rounded-full bg-[#0c5adb] text-white flex items-center justify-center flex-shrink-0'>
										<svg viewBox='0 0 24 24' className='w-6 h-6' fill='none'>
											<path
												d='M20 6L9 17l-5-5'
												stroke='currentColor'
												strokeWidth='2'
												strokeLinecap='round'
												strokeLinejoin='round'
											/>
										</svg>
									</div>
									<div>
										<h3 className='text-[20px] font-semibold text-[#041424]'>
											{t(point.titleKey)}
										</h3>
										<p className='mt-2 text-[#6B7280] text-[15px] leading-6'>
											{t(point.descKey)}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>

					<div className='relative'>
						<div className='bg-white rounded-2xl overflow-hidden'>
							<img
								src='/for-you.webp'
								alt={t('labProduct.imageAlt')}
								className='w-full h-[420px] object-cover'
							/>
						</div>
					</div>

					<div className='space-y-8'>
						{RIGHT_POINTS.map((point, index) => (
							<div
								key={point.titleKey}
								className={`flex gap-4 ${
									index < RIGHT_POINTS.length - 1
										? 'border-b border-[#E5E7EB] pb-8'
										: ''
								}`}
							>
								<div className='w-16 h-16 rounded-full bg-[#EEF3FF] text-[#0c5adb] flex items-center justify-center flex-shrink-0'>
									{point.icon}
								</div>
								<div>
									<h3 className='text-[22px] font-semibold text-[#041424]'>
										{t(point.titleKey)}
									</h3>
									<p className='mt-2 text-[#6B7280] text-[15px] leading-6 max-w-sm'>
										{t(point.descKey)}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default LabProductSection
