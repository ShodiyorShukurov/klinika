import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Toast from '../Toast'

const ContactFormSection: React.FC = () => {
	const { t } = useTranslation()
	const [form, setForm] = useState({ name: '', phone: '', message: '' })
	const [toastOpen, setToastOpen] = useState(false)
	const [isSubmitting, setIsSubmitting] = useState(false)

	useEffect(() => {
		if (!toastOpen) return
		const timer = setTimeout(() => setToastOpen(false), 2500)
		return () => clearTimeout(timer)
	}, [toastOpen])

	const onChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => setForm(s => ({ ...s, [e.target.name]: e.target.value }))

	const onPhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const digitsOnly = e.target.value.replace(/\D/g, '')
		setForm(s => ({ ...s, phone: digitsOnly }))
	}

	const onSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		const botToken = import.meta.env.VITE_BOT_TOKEN as string | undefined
		const chatId = import.meta.env.VITE_CHAT_ID as string | undefined
		if (!botToken || !chatId) {
			console.error('Missing Telegram bot token or chat id')
			return
		}

		const text = `Contact form\nIsm: ${form.name}\nTelefon: ${form.phone}\nXabar: ${form.message}`
		setIsSubmitting(true)
		try {
			const res = await fetch(
				`https://api.telegram.org/bot${botToken}/sendMessage`,
				{
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({
						chat_id: chatId,
						text,
					}),
				}
			)
			if (!res.ok) {
				throw new Error('Telegram request failed')
			}
			setForm({ name: '', phone: '', message: '' })
			setToastOpen(true)
		} catch (err) {
			console.error(err)
		} finally {
			setIsSubmitting(false)
		}
	}

	return (
		<>
			<div className='py-10'>
				<div className='container'>
					<div className='bg-[#F1F5FD] rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-stretch'>
						{/* Form */}
						<form onSubmit={onSubmit} className='flex-1 flex flex-col gap-4'>
							<span className='text-blue-600 font-medium uppercase text-sm mb-2'>
								{t('contactFormSection.pretitle')}
							</span>
							<h2 className='text-4xl font-bold text-[#041424] mb-6'>
								{t('contactFormSection.title')}
							</h2>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
								<input
									type='text'
									name='name'
									value={form.name}
									onChange={onChange}
									required
									placeholder={t('contactFormSection.namePlaceholder')}
									className='rounded-full px-6 py-3 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
								/>
								<input
									type='text'
									name='phone'
									value={form.phone}
									onChange={onPhoneChange}
									required
									inputMode='numeric'
									pattern='[0-9]*'
									placeholder={t('contactFormSection.phonePlaceholder')}
									className='rounded-full px-6 py-3 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
								/>
							</div>
							<textarea
								name='message'
								value={form.message}
								onChange={onChange}
								required
								placeholder={t('contactFormSection.messagePlaceholder')}
								className='rounded-2xl px-6 py-4 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[120px] mb-4'
							/>
							<button
								type='submit'
								disabled={isSubmitting}
								className='bg-blue-600 text-white rounded-full px-8 py-3 font-medium text-lg flex items-center gap-2 w-fit'
							>
								{isSubmitting
									? t('contactFormSection.sending')
									: t('contactFormSection.submit')}{' '}
								<span>&rarr;</span>
							</button>
						</form>
						{/* Image placeholder */}
						<div className='flex-1 flex items-center justify-center'>
							<img
								className='w-full h-[400px] md:h-[500px] rounded-2xl object-cover'
								src='/contact.webp'
								alt={t('contactFormSection.imageAlt')}
							/>
						</div>
					</div>
				</div>
			</div>
			<Toast
				open={toastOpen}
				message={t('contactFormSection.toast')}
				onClose={() => setToastOpen(false)}
			/>
		</>
	)
}

export default ContactFormSection
