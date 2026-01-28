import React, { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperType } from 'swiper'

// @ts-expect-error Missing type definitions for 'swiper/css'
import 'swiper/css'

const youtubeLinks = [
	'https://www.youtube.com/embed/TRdgSgS1ryc?si=tUNru4c1nifGU1tD',
	'https://www.youtube.com/embed/XLAbXPOf1yI?si=Iv90MYhbSYw9jejZ',
	'https://www.youtube.com/embed/lXqjBz9d2Nk?si=dAPTDomomAAsYx9Q',
	'https://www.youtube.com/embed/IauS3wBBtfU?si=Unm-4L6TPgUmUBwG',
	'https://www.youtube.com/embed/ekwsr2ZA6lU?si=kzFpj_XflWIBTlCE',
	'https://www.youtube.com/embed/mtYxulwcUXg?si=vF54tD4cHIiG5E2V',
	'https://www.youtube.com/embed/GYc055ll5m0?si=gIpCGC5ACDhvYK03',
]

const CaseStudiesCarousel: React.FC = () => {
	const { t } = useTranslation()
	const swiperRef = useRef<SwiperType | null>(null)

	const stopAutoplay = () => {
		swiperRef.current?.autoplay?.stop()
	}

	const startAutoplay = () => {
		swiperRef.current?.autoplay?.start()
	}

	return (
		<section className='w-full py-16 bg-[#0C5ADB] relative'>
			<div className='container mx-auto'>
				<div className='text-center mb-10'>
					<span className='text-white text-lg font-medium uppercase tracking-wide mb-2 block'>
						{t('caseStudies.pretitle')}
					</span>
					<h2 className='text-white text-4xl md:text-5xl font-bold leading-tight'>
						{t('caseStudies.title')}
					</h2>
				</div>

				<Swiper
					modules={[Autoplay]}
					onSwiper={swiper => {
						swiperRef.current = swiper
					}}
					spaceBetween={72}
					slidesPerView={4} // Auto o'rniga aniq raqam
					centeredSlides={false}
					loop={true}
					autoplay={{
						delay: 1, // 0 o'rniga 1
						disableOnInteraction: true,
						pauseOnMouseEnter: true,
					}}
					speed={2500} // Biroz sekinroq
					allowTouchMove={false}
					freeMode={true}
					breakpoints={{
						320: {
							slidesPerView: 1.5,
							spaceBetween: 32,
						},
						640: {
							slidesPerView: 2.5,
							spaceBetween: 40,
						},
						768: {
							slidesPerView: 3,
							spaceBetween: 72,
						},
						1024: {
							slidesPerView: 4,
							spaceBetween: 80,
						},
						1280: {
							slidesPerView: 5,
							spaceBetween: 80,
						},
					}}
				>
					{youtubeLinks.map((link, index) => (
						<SwiperSlide key={index}>
							{/* <div className='relative  group '> */}
							<div
								onMouseEnter={stopAutoplay}
								onMouseLeave={startAutoplay}
								onFocus={stopAutoplay}
								className='outline-none'
							>
								<iframe
									width='250'
									height='250'
									src={link}
									title={`YouTube video ${index + 1}`}
									allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
									allowFullScreen
									className='rounded-lg shadow-lg block'
								></iframe>
							</div>
							{/* </div> */}
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	)
}

export default CaseStudiesCarousel
