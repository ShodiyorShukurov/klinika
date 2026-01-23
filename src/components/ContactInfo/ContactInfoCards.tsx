import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'

const contactData = [
	{
		icon: <MapPin size={48} className='text-blue-600 mx-auto mb-4' />,
		title: 'Location',
		info: "Chilonzor 17-kvartal, Bunyodkor shoh ko'chasi 33/1",
		subInfo: '',
		link: {
			text: 'CHECK LOCATION',
			href: '#',
		},
	},
	{
		icon: <Phone size={48} className='text-blue-600 mx-auto mb-4' />,
		title: 'Phone',
		info: '+998 97 730 86 85',
		subInfo: '',
		link: {
			text: 'CALL NOW',
			href: 'tel:+998977308685',
		},
	},
	{
		icon: <Mail size={48} className='text-blue-600 mx-auto mb-4' />,
		title: 'Email',
		info: 'info@klinika.com',
		subInfo: 'Bizga email orqali murojaat qiling',
		link: {
			text: 'CONTACT US',
			href: 'mailto:info@klinika.com',
		},
	},
]

const ContactInfoCards: React.FC = () => {
	return (
		<div className='py-20'>
		<div className="container">
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
