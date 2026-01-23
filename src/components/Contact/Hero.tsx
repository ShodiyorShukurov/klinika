import React from 'react'


const Hero: React.FC = () => {
	return (
		<section
			style={{
				backgroundImage: 'url(/contact-bg.webp)',
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
					Contact Us
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
					<span>HOME</span>
					<span style={{ fontWeight: 700 }}>&gt;</span>
					<span>CONTACT US</span>
				</div>
			</div>
		</section>
	)
}

export default Hero
