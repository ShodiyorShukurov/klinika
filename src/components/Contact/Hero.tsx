import React from 'react'
import { useTranslation } from 'react-i18next'


const Hero: React.FC = () => {
	const { t } = useTranslation()
	return (
		<section
			style={{
				backgroundImage: 'url(/about-img1.webp)',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				minHeight: '350px',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				position: 'relative',
			}}
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
			<div
				style={{
					position: 'relative',
					zIndex: 2,
					textAlign: 'center',
					color: '#fff',
				}}
			>
				<h1 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '1rem' }}>
					{t('contactPage.hero.title')}
				</h1>
				<div
					style={{
						fontSize: '1.2rem',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						gap: '0.5rem',
					}}
				>
					<span>{t('contactPage.hero.breadcrumbHome')}</span>
					<span style={{ fontWeight: 700 }}>&gt;</span>
					<span>{t('contactPage.hero.breadcrumbCurrent')}</span>
				</div>
			</div>
		</section>
	)
}

export default Hero
