import React from 'react'

const AboutContent: React.FC = () => {
	return (
		<section className='py-10 '>
		<div className="container">
				<div className='bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row gap-8'>
				{/* Image */}
				<div className='flex-shrink-0 w-full md:w-1/3 flex items-center justify-center'>
					<img
						src='https://placehold.co/400x300'
						alt='Klinika'
						className='rounded-xl w-full h-[220px] object-cover md:h-[260px] shadow-md'
					/>
				</div>
				{/* Content */}
				<div className='flex-1'>
					<h1 className='text-3xl md:text-4xl font-bold text-[#041424] mb-4 leading-tight'>
						Lor sentr, Lor klinika, Yunusobod lor, Chilonzor lor, Lor med sentr,
						Lor 24/7 Toshkent, Lor operasiya, Lazer sentr
					</h1>
					<h2 className='text-xl font-semibold text-blue-700 mb-3'>
						Biz dam olish kunlarisiz 24/7 ishlovchi Yunusobod va Chilonzordagi
						Lor sentr klinikamiz
					</h2>
					<p className='mb-4 text-gray-700'>
						<span className='font-bold'>
							Lor sentr, Lor klinika, Yunusobod lor, Chilonzor lor, Lor med
							sentr, Lor 24/7 Toshkent, Lor operasiya
						</span>
						, Lazer yordamida operasiya,{' '}
						<span className='font-bold'>Lazer sentr</span>, Lazer xirurgiya,
						quloqni lazer yordamida davolash, burunni lazer operasiyasi,
						endoskopik lazer yordamida septoplastika, endoskopik lazer
						vazatomiya.
					</p>
					<p className='mb-4 text-gray-700'>
						Otorinolaringolog (<span className='font-bold'>LOR</span>) – quloq,
						burun va tomoq kasalliklarini (halqum, traxeya, farenks) davolovchi
						shifokor. <span className='font-bold'>LOR</span> kasalliklarining
						asoratlari va surunkali shaklga o‘tish xavfini bartaraf etish uchun
						ularni o‘z vaqtida tashxislash muhimdir.{' '}
						<span className='font-bold'>LOR</span> 24/7 ning qismida siz
						malakali, tajribali otorinolaringologga o‘zingiz uchun qulay vaqtda,
						navbatlarsiz, so‘rovlar va tavsiyalarsiz tashrif buyurishingiz
						mumkin.
					</p>
					<h3 className='text-2xl font-bold text-[#041424] mb-3 mt-6'>
						Otorinolaringolog maslahati kimga kerak?
					</h3>
					<p className='mb-2 text-gray-700'>
						<span className='font-bold'>LOR</span> a’zolarining ishidagi
						buzilish belgilarini e’tiborsiz qoldirib bo‘lmaydi.
						Otorinolaringologga tashrifni kechiktirmaslik kerak!
					</p>
					<ul className='mb-4 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-gray-800'>
						<li className='flex items-center gap-2'>
							<span className='text-blue-600'>●</span> Burundagi shilliq
							qavatning qurishi, burun nafasida qiyinchilik;
						</li>
						<li className='flex items-center gap-2'>
							<span className='text-blue-600'>●</span> Uzoq muddatli burun
							oqishi yoki yo‘tal;
						</li>
						<li className='flex items-center gap-2'>
							<span className='text-blue-600'>●</span> Tez-tez burundan qon
							ketish;
						</li>
						<li className='flex items-center gap-2'>
							<span className='text-blue-600'>●</span> Yomon nafas;
						</li>
						<li className='flex items-center gap-2'>
							<span className='text-blue-600'>●</span> Uquning buzilishi,
							ertalab charchoq, bosh aylanish;
						</li>
						<li className='flex items-center gap-2'>
							<span className='text-blue-600'>●</span> Tez charchash;
						</li>
						<li className='flex items-center gap-2'>
							<span className='text-blue-600'>●</span> Horlama.
						</li>
					</ul>
					<div className='mb-4'>
						<span className='font-bold text-red-600'>Diqqat!</span> Quyidagi
						alomatlar uchun <span className='font-bold'>LOR</span> shifokorining
						shoshilinch maslahati zarur:
						<ul className='mt-2 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-gray-800'>
							<li className='flex items-center gap-2'>
								<span className='text-blue-600'>●</span> Sinuslarda og‘riq,
								yiringli oqim;
							</li>
							<li className='flex items-center gap-2'>
								<span className='text-blue-600'>●</span> Eshitish va hidlashning
								buzilishi;
							</li>
							<li className='flex items-center gap-2'>
								<span className='text-blue-600'>●</span> Quloqlarda g‘ayrioddiy
								oqim, shovqin, og‘riq yoki bosim;
							</li>
							<li className='flex items-center gap-2'>
								<span className='text-blue-600'>●</span> Tomoqning qizarishi,
								yutish qiyinligi, jag‘ ostidagi limfa tugunlarining shishishi.
							</li>
						</ul>
					</div>
					<div className='flex items-center gap-4 mt-6'>
						<a href='#' className='text-blue-600 hover:text-blue-800 text-2xl'>
							<i className='fab fa-facebook'></i>
						</a>
						<a
							href='#'
							className='text-orange-500 hover:text-orange-700 text-2xl'
						>
							<i className='fab fa-telegram'></i>
						</a>
						<a href='#' className='text-blue-500 hover:text-blue-700 text-2xl'>
							<i className='fab fa-linkedin'></i>
						</a>
					</div>
					{/* <div className='mt-8 text-center'>
						<a
							href='#contact'
							className='bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow transition-all'
						>
							Biz bilan bog'lanish
						</a>
					</div> */}
				</div>
			</div>
		</div>
		</section>
	)
}

export default AboutContent
