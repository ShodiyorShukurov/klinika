import { Instagram,  MapPin, Menu, X, Youtube } from 'lucide-react'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Header: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	return (
		<header>
			{/* Top bar */}
			<div className='header-top text-white bg-[#041424]'>
				<div className='container'>
					<div className='flex items-center justify-between text-sm py-3'>
						<div className='flex items-center gap-4'>
							{/* Social icons (simple SVGs) */}
							<a
								href='https://www.youtube.com/@endoloruz'
								aria-label='github'
								className='text-white hover:text-[#0c5adb] transition-all duration-300'
							>
								<Youtube size={20} />
							</a>
							<a
								href='https://www.instagram.com/shavkat_lor'
								aria-label='github'
								className='text-white hover:text-[#0c5adb] transition-all duration-300'
							>
								<Instagram size={16} />
							</a>
						</div>

						<div className='flex items-center gap-6'>
							<div className='flex items-center gap-2'>
								<MapPin size={16} className='text-[#0c5adb]' />
								<span className='hidden sm:inline text-[16px] font-medium'>
								Chilonzor 17-kvartal, Bunyodkor shoh ko'chasi 33/1
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Main navbar */}
			<div className='bg-white shadow-sm'>
				<div className='container'>
					<div className='flex items-center justify-between py-4'>
						{/* Logo */}
						<div className='flex items-center gap-4'>
							<div className='flex items-center'>
								<img src='/logo.png' alt='logo' width={80} height={65} />
							</div>
						</div>

						{/* Nav links - Desktop */}
						<nav className='hidden lg:flex flex-1 ml-10'>
							<ul className='flex gap-8 justify-center text-[16px] font-medium text-[#041424] uppercase'>
								<li>
									<NavLink to='/' className='hover:text-blue-600'>
										Home
									</NavLink>
								</li>
								<li>
									<NavLink to='/services' className='hover:text-blue-600'>
										Services
									</NavLink>
								</li>
								<li>
									<NavLink to='/contact' className='hover:text-blue-600'>
										Contact Us
									</NavLink>
								</li>
							</ul>
						</nav>

						{/* Right actions */}
						<div className='flex items-center gap-6'>
							<div className='hidden sm:flex items-center gap-4'>
								<div className='rounded-full bg-blue-50 p-3 text-[#0c5adb]'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='20'
										height='20'
										viewBox='0 0 24 24'
										fill='none'
										stroke='currentColor'
										strokeWidth='1'
										strokeLinecap='round'
										strokeLinejoin='round'
										// className='lucide lucide-phone-call-icon lucide-phone-call'
									>
										<path d='M13 2a9 9 0 0 1 9 9' />
										<path d='M13 6a5 5 0 0 1 5 5' />
										<path d='M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384' />
									</svg>
								</div>
								<div className='text-[16px] font-medium'>
									<a href="tel:+998977308685" className='text-[#041424]'>+998 97 730 86 85</a>
								</div>
							</div>

							{/* Burger menu button - Mobile */}
							<button
								onClick={toggleMenu}
								className='lg:hidden flex items-center justify-center text-[#041424]'
								aria-label='Toggle menu'
							>
								{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
							</button>

							{/* Plain CTA */}
							{/* <a
								href='#'
								className='inline-block bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700'
							>
								Get Quote
							</a> */}
						</div>
					</div>

					{/* Mobile menu */}
					{isMenuOpen && (
						<div className='lg:hidden border-t border-gray-200'>
							<nav className='py-4'>
								<ul className='flex flex-col gap-4 text-[16px] font-medium text-[#041424] uppercase'>
									<li>
										<NavLink
											to='/'
											onClick={() => setIsMenuOpen(false)}
											className='block py-2 px-4 hover:text-blue-600 hover:bg-gray-100 rounded'
										>
											Home
										</NavLink>
									</li>
									<li>
										<NavLink
											to='/services'
											onClick={() => setIsMenuOpen(false)}
											className='block py-2 px-4 hover:text-blue-600 hover:bg-gray-100 rounded'
										>
											Services
										</NavLink>
									</li>
									<li>
										<NavLink
											to='/blog'
											onClick={() => setIsMenuOpen(false)}
											className='block py-2 px-4 hover:text-blue-600 hover:bg-gray-100 rounded'
										>
											Blog
										</NavLink>
									</li>
									<li>
										<NavLink
											to='/contact'
											onClick={() => setIsMenuOpen(false)}
											className='block py-2 px-4 hover:text-blue-600 hover:bg-gray-100 rounded'
										>
											Contact Us
										</NavLink>
									</li>
								</ul>
							</nav>
						</div>
					)}
				</div>
			</div>
		</header>
	)
}

export default Header
