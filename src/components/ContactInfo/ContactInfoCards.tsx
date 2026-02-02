import { MapPin, Phone, Send } from 'lucide-react'
import React from 'react'
import { useTranslation } from 'react-i18next'

const ContactInfoCards: React.FC = () => {
	const { t } = useTranslation()
	const contactData = [
		{
			icon: <MapPin size={48} className='text-blue-600 mx-auto mb-4' />,
			title: t('contactInfo.location.title'),
			info: t('contactInfo.location.info'),
			subInfo: t('contactInfo.location.subInfo'),
			link: {
				text: t('contactInfo.location.linkText'),
				href: '#map',
			},
		},
		{
			icon: <Phone size={48} className='text-blue-600 mx-auto mb-4' />,
			title: t('contactInfo.phone.title'),
			info: t('contactInfo.phone.info'),
			subInfo: t('contactInfo.phone.subInfo'),
			link: {
				text: t('contactInfo.phone.linkText'),
				href: 'tel:+998903258600',
			},
		},
		{
			icon: <Send size={48} className='text-blue-600 mx-auto mb-4' />,
			title: t('contactInfo.telegram.title'),
			info: t('contactInfo.telegram.info'),
			subInfo: t('contactInfo.telegram.subInfo'),
			link: {
				text: t('contactInfo.telegram.linkText'),
				href: 'https://t.me/+998903258600',
			},
		},
	]

	return (
		<div className='py-20'>
			<div className='container'>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
					{contactData.map((item, idx) => (
						<div
							key={idx}
							className='bg-[#F1F5FD] rounded-xl p-8 shadow-sm flex flex-col items-start justify-between min-h-[260px]'
						>
							<div>{item.icon}</div>
							<h2 className='text-2xl font-bold mb-2 text-[#041424]'>
								{item.title}
							</h2>
							<p className='text-gray-700 mb-2'>{item.info}</p>
							{item.subInfo && (
								<p className='text-gray-500 mb-2 text-sm'>{item.subInfo}</p>
							)}
							<a
								href={item.link.href}
								className='mt-4 text-blue-600 font-medium hover:underline flex items-center gap-2'
							>
								{item.link.text} <span>&rarr;</span>
							</a>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default ContactInfoCards
