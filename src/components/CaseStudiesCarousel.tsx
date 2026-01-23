import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

// @ts-expect-error Missing type definitions for 'swiper/css'
import 'swiper/css'

const images = [
  'https://placehold.co/400x300',
  'https://placehold.co/400x300',
  'https://placehold.co/400x300',
  'https://placehold.co/400x300',
  'https://placehold.co/400x300',
  'https://placehold.co/400x300',
  'https://placehold.co/400x300',
  'https://placehold.co/400x300',
];

const CaseStudiesCarousel: React.FC = () => {
  return (
    <section className="w-full py-16 bg-[#0C5ADB] relative">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <span className="text-white text-lg font-medium uppercase tracking-wide mb-2 block">Case Studies</span>
          <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight">Transforming Ideas Into Scientific Achievements</h2>
        </div>

         <Swiper
					modules={[Autoplay]}
					spaceBetween={48}
					slidesPerView={4} // Auto o'rniga aniq raqam
					centeredSlides={false}
					loop={true}
					autoplay={{
						delay: 1, // 0 o'rniga 1
						disableOnInteraction: false,
						pauseOnMouseEnter: false,
					}}
					speed={2500} // Biroz sekinroq
					allowTouchMove={false}
					freeMode={true}
					breakpoints={{
						320: {
							slidesPerView: 1.5,
							spaceBetween: 24,
						},
						640: {
							slidesPerView: 2.5,
							spaceBetween: 32,
						},
						768: {
							slidesPerView: 3,
							spaceBetween: 40,
						},
						1024: {
							slidesPerView: 4,
							spaceBetween: 48,
						},
						1280: {
							slidesPerView: 5,
							spaceBetween: 48,
						},
					}}
				>
					{images.map((src, index) => (
						<SwiperSlide key={index}>
							<div
								className='flex items-center justify-center '
							>
								<img
									src={src}
									alt={`Partner ${index + 1}`}
									className='h-[300px] object-contain w-[300px]'
								/>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
        
      </div>
    </section>
  );
};

export default CaseStudiesCarousel;
