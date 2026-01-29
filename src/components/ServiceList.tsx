import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Toast from './Toast'

type Service = {
	id: number
	title: string
	image: string
}

const ServiceCard: React.FC<{
	service: Service
	onUseService: (service: Service) => void
	ctaLabel: string
}> = ({ service, onUseService, ctaLabel }) => {
	return (
		<article className='group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100' onClick={()=>onUseService(service)}>
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
				<div className='mt-4'>
					<button
						type='button'
						onClick={() => onUseService(service)}
						className='inline-flex items-center gap-2 text-[#0c5adb] font-semibold text-sm hover:text-[#083f9c] transition'
					>
						{ctaLabel}
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
	const [selected, setSelected] = useState<Service | null>(null)
	const [form, setForm] = useState({ name: '', phone: '' })
	const [toastOpen, setToastOpen] = useState(false)
	const [isSubmitting, setIsSubmitting] = useState(false)

	useEffect(() => {
		if (!toastOpen) return
		const timer = setTimeout(() => setToastOpen(false), 2500)
		return () => clearTimeout(timer)
	}, [toastOpen])

	const openModal = (service: Service) => {
		setSelected(service)
		setForm({ name: '', phone: '' })
	}

	const closeModal = () => setSelected(null)

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		setForm(s => ({ ...s, [e.target.name]: e.target.value }))

	const onPhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const digitsOnly = e.target.value.replace(/\D/g, '')
		setForm(s => ({ ...s, phone: digitsOnly }))
	}

	const onSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		if (!selected) return
		const botToken = import.meta.env.VITE_BOT_TOKEN as string | undefined
		const chatId = import.meta.env.VITE_CHAT_ID as string | undefined
		if (!botToken || !chatId) {
			console.error('Missing Telegram bot token or chat id')
			return
		}
		const text = `Service request\nXizmat: ${selected.title}\nIsm: ${form.name}\nTelefon: ${form.phone}`
		setIsSubmitting(true)
		try {
			const res = await fetch(
				`https://api.telegram.org/bot${botToken}/sendMessage`,
				{
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({ chat_id: chatId, text }),
				}
			)
			if (!res.ok) throw new Error('Telegram request failed')
			setToastOpen(true)
			setSelected(null)
		} catch (err) {
			console.error(err)
		} finally {
			setIsSubmitting(false)
		}
	}

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
							onUseService={openModal}
							ctaLabel={t('operations.useService')}
						/>
					))}
				</div>
			</section>

			{selected && (
				<div className='fixed inset-0 z-50 flex items-center justify-center px-4'>
					<button
						type='button'
						className='absolute inset-0 bg-black/50'
						onClick={closeModal}
						aria-label={t('operations.modal.close')}
					/>
					<div className='relative w-full max-w-md bg-white rounded-2xl shadow-xl p-6 sm:p-8'>
						<div className='flex items-start justify-between gap-6'>
							<div>
								<h3 className='text-2xl font-bold text-[#041424]'>
									{t('operations.modal.title')}
								</h3>
								<p className='mt-2 text-[#6B7280] text-[15px] leading-6'>
									{selected.title}
								</p>
							</div>
							<button
								type='button'
								onClick={closeModal}
								className='text-slate-400 hover:text-slate-600'
								aria-label={t('operations.modal.close')}
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

						<form onSubmit={onSubmit} className='mt-6 space-y-4'>
							<div>
								<label className='text-sm font-medium text-[#041424]'>
									{t('operations.modal.nameLabel')}
								</label>
								<input
									type='text'
									name='name'
									value={form.name}
									onChange={onChange}
									required
									placeholder={t('operations.modal.namePlaceholder')}
									className='mt-2 w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0c5adb]'
								/>
							</div>
							<div>
								<label className='text-sm font-medium text-[#041424]'>
									{t('operations.modal.phoneLabel')}
								</label>
								<input
									type='tel'
									name='phone'
									value={form.phone}
									onChange={onPhoneChange}
									required
									inputMode='numeric'
									pattern='[0-9]*'
									placeholder={t('operations.modal.phonePlaceholder')}
									className='mt-2 w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0c5adb]'
								/>
							</div>

							<button
								type='submit'
								disabled={isSubmitting}
								className='w-full rounded-full bg-[#0c5adb] hover:bg-[#094bbd] text-white py-3 text-sm font-semibold uppercase'
							>
								{isSubmitting
									? t('operations.modal.sending')
									: t('operations.modal.submit')}
							</button>
						</form>
					</div>
				</div>
			)}
			<Toast
				open={toastOpen}
				message={t('operations.modal.toast')}
				onClose={() => setToastOpen(false)}
			/>
		</main>
	)
}

export default ServicesList
