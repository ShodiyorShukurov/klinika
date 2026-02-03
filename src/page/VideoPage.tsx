import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Footer from '../components/Footer'
import Header from '../components/Header'
import VideoCard from '../components/Video/VideoCard'

type LocalizedTitle = {
	uz: string
	'uz-Cyrl': string
	ru: string
	en: string
}

type VideoItem = {
	videoUrl: string
	title: LocalizedTitle
	category: string
}

const videos: VideoItem[] = [
	{
		videoUrl: 'https://youtube.com/shorts/AFGAy55lT54?si=1neBdKqAhm09OG9X',
		title: {
			uz: 'Nafas olishi 100% tiklangan bemor',
			'uz-Cyrl': 'Нафас олиши 100% тикланган бемор',
			ru: 'Пациент с полностью восстановленным дыханием',
			en: 'Patient with fully restored breathing',
		},
		category: 'nose',
	},
	{
		videoUrl: 'https://youtube.com/shorts/UOsuyVqep-U?si=bos1ZgeDSdYiF3Pf',
		title: {
			uz: 'Erkin nafas olishni tiklagan bemor',
			'uz-Cyrl': 'Эркин нафас олишни тиклаган бемор',
			ru: 'Пациент с восстановленным свободным дыханием',
			en: 'Patient with restored free breathing',
		},
		category: 'nose',
	},
	{
		videoUrl: 'https://youtube.com/shorts/rtsl2PlkxRg?si=38OA0dZXi0dDc9OV',
		title: {
			uz: 'Nafas olishi yaxshi tiklangan bemor',
			'uz-Cyrl': 'Нафас олиши яхши тикланган бемор',
			ru: 'Пациент с отличным восстановлением дыхания',
			en: 'Patient with excellent breathing recovery',
		},
		category: 'nose',
	},
	{
		videoUrl: 'https://youtube.com/shorts/7Qb7FKtRjRM?si=Uef5vRKaIA12JLE1',
		title: {
			uz: 'Spreylardan xalos bo`lgan bemor',
			'uz-Cyrl': 'Спрейлардан халос бўлган бемор',
			ru: 'Пациент, отказавшийся от спреев',
			en: 'Patient no longer dependent on sprays',
		},
		category: 'nose',
	},
	{
		videoUrl: 'https://youtube.com/shorts/KUN8Zn9Z2jw?si=z7Fs1D_e7HEFCCNx',
		title: {
			uz: 'Burun operatsiyasidan keyingi natija',
			'uz-Cyrl': 'Бурун операциясидан кейинги натижа',
			ru: 'Результат после операции на носу',
			en: 'Result after nose surgery',
		},
		category: 'nose',
	},
	{
		videoUrl: 'https://youtube.com/shorts/pzMCU1N_nPI?si=KqTS5GtuJMZf2m4y',
		title: {
			uz: '5 yoshli bolada quloq muammosi',
			'uz-Cyrl': '5 ёшли болада қулоқ муаммоси',
			ru: 'Проблема с ухом у 5-летнего ребенка',
			en: 'Ear condition in a 5-year-old child',
		},
		category: 'ear',
	},
	{
		videoUrl: 'https://youtube.com/shorts/5Vozb6KczuA?si=xTnstBIMkR5sxSul',
		title: {
			uz: 'Quloq davolashdan keyingi natija',
			'uz-Cyrl': 'Қулоқ даволашдан кейинги натижа',
			ru: 'Результат после лечения уха',
			en: 'Result after ear treatment',
		},
		category: 'ear',
	},
	{
		videoUrl: 'https://youtube.com/shorts/KaoE4D067BI?si=_qo1V0afbc8kCw2j',
		title: {
			uz: 'Eshitishdagi muammo bartaraf etildi',
			'uz-Cyrl': 'Эшитишдаги муаммо бартараф этилди',
			ru: 'Проблема со слухом устранена',
			en: 'Hearing issue resolved',
		},
		category: 'ear',
	},
	{
		videoUrl: 'https://youtube.com/shorts/xeG49cmv5Wo?si=B4OcNwlqFq5QzZAo',
		title: {
			uz: 'Operatsiyadan keyin eshitish tiklandi',
			'uz-Cyrl': 'Операциядан кейин эшитиш тикланди',
			ru: 'Слух восстановлен после операции',
			en: 'Hearing restored after surgery',
		},
		category: 'ear',
	},
	{
		videoUrl: 'https://youtube.com/shorts/ScpJU7sjI7M?si=92MejFnxB6YpFeXC',
		title: {
			uz: 'Bolada eshitmaslik muammosi davolandi',
			'uz-Cyrl': 'Болада эшитмаслик муаммоси даволанди',
			ru: 'У ребенка устранена проблема со слухом',
			en: 'Child hearing issue treated',
		},
		category: 'ear',
	},
	{
		videoUrl: 'https://youtube.com/shorts/xvde33jR7RQ?si=Uq_txAvFfT1rXrMA',
		title: {
			uz: 'Quloqqa suniy suyakcha qoyish jarayoni',
			'uz-Cyrl': 'Қулоққа сунъий суякча қўйиш жараёни',
			ru: 'Процесс установки искусственной слуховой косточки',
			en: 'Artificial ossicle placement process',
		},
		category: 'ear',
	},
]

const categories = [
	'all',
	'nose',
	'ear',
	'bemor_fikri',
	'barotravma',
	'renoseptoplastika',
	'tonzillektomiya',
	'timpanoplastika',
	'adenotomiya',
	'adenoid',
	'gaymorit',
] as const

const normalizeLang = (value: string): 'uz' | 'uz-Cyrl' | 'ru' | 'en' => {
	if (value === 'uz' || value === 'uz-Cyrl' || value === 'ru' || value === 'en') {
		return value
	}
	if (value === 'uz-cyrl') return 'uz-Cyrl'
	return 'uz'
}

const VideoPage = () => {
	const { t, i18n } = useTranslation()
	const [activeCategory, setActiveCategory] = useState<string>('all')

	const currentLang = normalizeLang(i18n.resolvedLanguage || i18n.language)

	const getVideoTitle = (video: VideoItem, index: number) =>
		video.title[currentLang]?.trim() ||
		`${t('videoPage.fallback.title', { defaultValue: 'Bemor holati' })} #${index + 1}`

	const categoryOptions = useMemo(
		() =>
			categories.map((key) => ({
				key,
				label: t(`videoPage.categories.${key}`, { defaultValue: key }),
			})),
		[t]
	)

	const filteredVideos = useMemo(() => {
		if (activeCategory === 'all') {
			return videos
		}
		return videos.filter((video) => video.category === activeCategory)
	}, [activeCategory])

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
					<h2 className='text-4xl md:text-5xl font-bold mt-4'>
						{t('videoPage.hero.title')}
					</h2>
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
								{categoryOptions.map((category) => (
									<button
										key={category.key}
										type='button'
										onClick={() => setActiveCategory(category.key)}
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

					<div className='mt-10 grid gap-8 sm:grid-cols-2 xl:grid-cols-4'>
						{filteredVideos.map((video, index) => (
							<VideoCard
								key={video.videoUrl}
								videoUrl={video.videoUrl}
								title={getVideoTitle(video, index)}
								categoryLabel={t(`videoPage.categoryLabels.${video.category}`, {
									defaultValue: video.category,
								})}
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
