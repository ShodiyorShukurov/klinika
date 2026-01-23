import React from 'react'

const ContactFormSection: React.FC = () => {
	return (
		<div className='py-10'>
			<div className="container">
				<div className='bg-[#F1F5FD] rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-stretch'>
				{/* Form */}
				<form className='flex-1 flex flex-col gap-4'>
					<span className='text-blue-600 font-medium uppercase text-sm mb-2'>
						What we offer
					</span>
					<h2 className='text-4xl font-bold text-[#041424] mb-6'>
						Request A Quote
					</h2>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
						<input
							type='text'
							placeholder='Your Name'
							className='rounded-full px-6 py-3 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
						/>
						<input
							type='email'
							placeholder='Your Email'
							className='rounded-full px-6 py-3 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
						/>
						<input
							type='text'
							placeholder='Phone Number'
							className='rounded-full px-6 py-3 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
						/>
						<input
							type='text'
							placeholder='Select Subject'
							className='rounded-full px-6 py-3 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
						/>
					</div>
					<textarea
						placeholder='Your Message'
						className='rounded-2xl px-6 py-4 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[120px] mb-4'
					/>
					<button
						type='submit'
						className='bg-blue-600 text-white rounded-full px-8 py-3 font-medium text-lg flex items-center gap-2 w-fit'
					>
						SEND MESSAGE <span>&rarr;</span>
					</button>
				</form>
				{/* Image placeholder */}
				<div className='flex-1 flex items-center justify-center'>
					{/* <div className='rounded-2xl bg-gray-200 flex items-center justify-center'> */}
						{/* Rasm joyi */}
						<img className='w-full h-[400px] md:h-[500px] rounded-2xl' src="/contact-form.webp" alt="form" />
					{/* </div>  */}
				</div>
			</div>
			</div>
		</div>
	)
}

export default ContactFormSection
