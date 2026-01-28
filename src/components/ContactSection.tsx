import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

type FormState = {
	name: string
	phone: string
	appointment: string
	dentist: string
	date: string
	time: string
}

const ContactSection: React.FC = () => {
	const { t } = useTranslation()
	const [form, setForm] = useState<FormState>({
		name: '',
		phone: '',
		appointment: 'Consultation',
		dentist: 'Dr. David Brown',
		date: '',
		time: '',
	})

	const onChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => setForm(s => ({ ...s, [e.target.name]: e.target.value }))

	const onSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		// Hozircha demo: console.log. Backend bo'lsa shu yerda fetch/axios chaqirasiz.
		console.log('Form submitted', form)
		alert(t('contactSection.form.alert'))
	}

	return (
		<section className='py-12 bg-[#F1F5FD]'>
			<div className='container'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-start'>
					{/* LEFT: Title + paragraph + image */}
					<div className='order-1 lg:order-1'>
						<p className='text-[16px] leading-6 text-[#0c5adb] font-medium '>
							{t('contactSection.pretitle')}
						</p>
						<h3 className='mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#041424] leading-tight'>
							{t('contactSection.title')}
						</h3>
						{/* <p className='mt-2 text-[#686868] max-w-xl text-[16px] font-medium'>
							{t('contactSection.description')}
						</p> */}

						<div className='mt-8'>
							<img
								src='/contact.webp'
								alt={t('contactSection.imageAlt')}
								className='w-full rounded-xl shadow-sm object-cover'
								// style={{ height: 420 }}
							/>
						</div>
					</div>

					{/* RIGHT: Form card + Stats card */}
					<div className='order-2 lg:order-2 flex flex-col justify-between h-full gap-3'>
						{/* Form card */}
						<div className='bg-white rounded-[10px] p-6 sm:p-8 mb-6 lg:mb-0 h-full'>
							<h4 className='text-[32px] font-bold text-[#041424]'>
								{t('contactSection.form.title')}
							</h4>

							<form
								onSubmit={onSubmit}
								className='mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-4 text-[#041424]'
							>
								<div className='mb-6.5'>
									<label className='block text-[16px] font-medium text-[#041424] mb-2'>
										{t('contactSection.form.nameLabel')}
									</label>
									<input
										name='name'
										value={form.name}
										onChange={onChange}
										required
										placeholder={t('contactSection.form.namePlaceholder')}
										className='w-full bg-[#F1F5FD] rounded-full px-4 py-3 text-[16px] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200'
									/>
								</div>

								<div className='mb-6.5'>
									<label className='block text-[16px] font-medium text-[#041424] mb-2'>
										{t('contactSection.form.phoneLabel')}
									</label>
									<input
										name='phone'
										value={form.phone}
										onChange={onChange}
										required
										placeholder={t('contactSection.form.phonePlaceholder')}
										className='w-full bg-[#F1F5FD] rounded-full px-4 py-3 text-[16px] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200'
									/>
								</div>


								<div className='sm:col-span-2 mt-2'>
									<button
										type='submit'
										className='inline-flex items-center gap-3 bg-[#0c5adb] hover:bg-[#094bbd] text-white px-6.5 py-3 rounded-full text-[16px] font-medium uppercase'
									>
										{t('contactSection.form.submit')}
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
							</form>
						</div>

						{/* Stats card */}
						<div className='bg-[#0c5adb] text-white rounded-xl p-6 sm:p-8'>
							<div className='flex flex-col gap-6'>
						
									<h5 className='text-[28px] leading-8 sm:text-[40px] font-bold sm:leading-12'>
										{t('contactSection.stats.title')}
									</h5>
								

								<div className='flex gap-6 items-center flex-wrap justify-center'>
									<div className='text-center'>
										<div className='text-[48px] sm:text-[64px] font-extrabold'>1100+</div>
										<div className='text-sm opacity-90'>
											{t('contactSection.stats.item1')}
										</div>
									</div>
									<div className='text-center'>
										<div className='text-[48px] sm:text-[64px] font-extrabold'>200*</div>
										<div className='text-sm opacity-90'>
											{t('contactSection.stats.item2')}
										</div>
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

export default ContactSection
