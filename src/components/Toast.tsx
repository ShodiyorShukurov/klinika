import React from 'react'

type ToastProps = {
	open: boolean
	message: string
	onClose?: () => void
}

const Toast: React.FC<ToastProps> = ({ open, message, onClose }) => {
	if (!open) return null

	return (
		<div className='fixed top-5 right-0 left-0 z-50 w-[100%] flex justify-center pointer-events-none'>
			<div className='bg-[#0c5a] text-white px-4 py-3 rounded-xl shadow-lg flex items-center gap-3'>
				<span className='text-sm font-semibold'>{message}</span>
				<button
					type='button'
					onClick={onClose}
					className='text-white/80 hover:text-white text-sm'
					aria-label='Close toast'
				>
					✕
				</button>
			</div>
		</div>
	)
}

export default Toast
