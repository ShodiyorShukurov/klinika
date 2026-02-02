import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Footer from '../components/Footer'
import Header from '../components/Header'
import VideoCard from '../components/Video/VideoCard'

type VideoItem = {
	id: string
	title: string
	category: 'nose' | 'ear' | 'throat' | 'allergy' | 'kids'
	description: string
	duration: string
}

const VideoPage = () => {
	const { t } = useTranslation()
	const [activeCategory, setActiveCategory] = useState<
		'all' | VideoItem['category']
	>('all')

	const videos: VideoItem[] = [
		{
			id: 'https://youtube.com/shorts/AFGAy55lT54?si=1neBdKqAhm09OG9X',
			title: "Burun bitishi: sabablar va uy sharoitida yengillik",
			category: 'nose',
			description:
				"Burun bitishi va nafas olish qiyinlashganda dastlabki yordam bo'yicha tavsiyalar.",
			duration: '6:12',
		},
		{
			id: 'k3iYd1Oj1Ak',
			title: "Burun poliplari: belgilari va davolash yo'llari",
			category: 'nose',
			description:
				"Poliplar qachon xavfli bo'ladi va endoskopik davolash haqida qisqacha.",
			duration: '8:40',
		},
		{
			id: 'V1Plm_5fA2o',
			title: "Quloq og'rig'i: qachon shifokorga murojaat qilish kerak?",
			category: 'ear',
			description:
				"Otit, og'riq, shovqin va eshitish pasayishi bo'lsa nima qilish kerak.",
			duration: '7:18',
		},
		{
			id: 'b4xS5gXc2Mk',
			title: "Tomoq yallig'lanishi: angina va faringit farqi",
			category: 'throat',
			description:
				"Antibiotiklar qachon kerak va qachon shart emasligi haqida.",
			duration: '5:52',
		},
		{
			id: 'y6N7q9Fh0Qs',
			title: 'Allergik rinit: mavsumiy va doimiy shakllar',
			category: 'allergy',
			description:
				"Allergiyaga bog'liq burun oqishi va aksirishning oldini olish usullari.",
			duration: '9:05',
		},
		{
			id: 'J8d0kq9mYbQ',
			title: "Bolalarda LOR muammolari: tez-tez uchraydigan holatlar",
			category: 'kids',
			description:
				"Bolalarda adenoid, quloq yallig'lanishi va doimiy shamollash haqida.",
			duration: '10:14',
		},
	]

	const categories = [
		{ key: 'all', label: t('videoPage.categories.all') },
		{ key: 'nose', label: t('videoPage.categories.nose') },
		{ key: 'ear', label: t('videoPage.categories.ear') },
		{ key: 'throat', label: t('videoPage.categories.throat') },
		{ key: 'allergy', label: t('videoPage.categories.allergy') },
		{ key: 'kids', label: t('videoPage.categories.kids') },
		{ key: 'kids', label: t('videoPage.categories.kids') },
		{ key: 'kids', label: t('videoPage.categories.kids') },
		{ key: 'kids', label: t('videoPage.categories.kids') },
		{ key: 'kids', label: t('videoPage.categories.kids') },
	] as const

	const filteredVideos = useMemo(() => {
		if (activeCategory === 'all') {
			return videos
		}
		return videos.filter((video) => video.category === activeCategory)
	}, [activeCategory, videos])

	return (
		<>
			<Header />

			<section
				className='relative flex flex-col justify-center items-center min-h-[320px] bg-cover bg-center'
				style={{ backgroundImage: "url('/about-img4.webp')" }}
			>
				<div className='absolute inset-0 bg-[#041424]/70' />
				<div className='relative z-10 text-center text-white w-full px-4'>
					<span className='uppercase tracking-[0.3em] text-sm'>
						{t('videoPage.hero.pretitle')}
					</span>
					<h1 className='text-4xl md:text-5xl font-bold mt-4'>
						{t('videoPage.hero.title')}
					</h1>
					<div className='flex justify-center items-center gap-2 text-lg mt-3'>
						<span>{t('videoPage.hero.breadcrumbHome')}</span>
						<span className='font-bold'>&gt;</span>
						<span>{t('videoPage.hero.breadcrumbCurrent')}</span>
					</div>
				</div>
			</section>

			<section className='py-12 bg-[#f7f9fb]'>
				<div className='container'>
					<div className='flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6'>
						<div>
							<p className='text-sm uppercase tracking-[0.3em] text-[#0c5adb]'>
								{t('videoPage.section.pretitle')}
							</p>
							<h2 className='text-3xl md:text-4xl font-semibold text-[#041424] mt-3'>
								{t('videoPage.section.title')}
							</h2>
							<p className='text-[#5b6675] mt-3 max-w-2xl'>
								{t('videoPage.section.description')}
							</p>
						</div>
						<div className='-mx-2 px-2 overflow-x-auto lg:overflow-visible'>
							<div className='flex gap-3 min-w-max lg:flex-wrap lg:min-w-0'>
								{categories.map((category) => (
									<button
										key={category.key}
										type='button'
										onClick={() =>
											setActiveCategory(category.key as typeof activeCategory)
										}
										className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
											activeCategory === category.key
												? 'bg-[#0c5adb] text-white shadow-md'
												: 'bg-white text-[#041424] border border-[#e4e9f0] hover:border-[#0c5adb] hover:text-[#0c5adb]'
										}`}
									>
										{category.label}
									</button>
								))}
							</div>
						</div>
					</div>

					<div className='mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
						{filteredVideos.map((video) => (
							<VideoCard
								key={video.id}
								id={video.id}
								title={video.title}
								description={video.description}
								duration={video.duration}
								categoryLabel={t(`videoPage.categoryLabels.${video.category}`)}
								watchLabel={t('videoPage.watchOnYoutube')}
							/>
						))}
					</div>

					{filteredVideos.length === 0 && (
						<div className='text-center text-[#5b6675] mt-10'>
							{t('videoPage.empty')}
						</div>
					)}
				</div>
			</section>

			<Footer />
		</>
	)
}

export default VideoPage
