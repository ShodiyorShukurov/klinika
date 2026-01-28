import React from 'react'
import { useTranslation } from 'react-i18next'

const AboutHero: React.FC = () => {
	const { t } = useTranslation()

	return (
		<section
			className='relative flex flex-col justify-center items-center min-h-[350px] bg-cover bg-center'
			style={{ backgroundImage: "url('/about-img4.webp')" }}
		>
			<div
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
					width: '100%',
					height: '100%',
					background: 'rgba(34, 51, 73, 0.7)',
					zIndex: 1,
				}}
			/>
			<div className='relative z-10 text-center text-white w-full'>
				<h1 className='text-4xl md:text-5xl font-bold mb-4'>
					{t('aboutPage.hero.title')}
				</h1>
				<div className='flex justify-center items-center gap-2 text-lg'>
					<span>{t('aboutPage.hero.breadcrumbHome')}</span>
					<span className='font-bold'>&gt;</span>
					<span>{t('aboutPage.hero.breadcrumbCurrent')}</span>
				</div>
			</div>
		</section>
	)
}

export default AboutHero
