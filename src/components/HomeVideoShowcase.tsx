import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

type LocalizedTitle = {
	uz: string
	'uz-Cyrl': string
	ru: string
	en: string
}

type PreviewVideo = {
	videoUrl: string
	title: LocalizedTitle
}

const previewVideos: PreviewVideo[] = [
	{
		videoUrl: 'https://youtube.com/shorts/AFGAy55lT54?si=1neBdKqAhm09OG9X',
		title: {
			uz: 'Nafas olishi 100% tiklangan bemor',
			'uz-Cyrl': 'Нафас олиши 100% тикланган бемор',
			ru: 'Пациент с полностью восстановленным дыханием',
			en: 'Patient with fully restored breathing',
		},
	},
	{
		videoUrl: 'https://youtube.com/shorts/UOsuyVqep-U?si=bos1ZgeDSdYiF3Pf',
		title: {
			uz: 'Erkin nafas olishni tiklagan bemor',
			'uz-Cyrl': 'Эркин нафас олишни тиклаган бемор',
			ru: 'Пациент с восстановленным свободным дыханием',
			en: 'Patient with restored free breathing',
		},
	},
	{
		videoUrl: 'https://youtube.com/shorts/rtsl2PlkxRg?si=38OA0dZXi0dDc9OV',
		title: {
			uz: "Nafas olishi yaxshi tiklangan bemor",
			'uz-Cyrl': 'Нафас олиши яхши тикланган бемор',
			ru: 'Пациент с отличным восстановлением дыхания',
			en: 'Patient with excellent breathing recovery',
		},
	},
	{
		videoUrl: 'https://youtube.com/shorts/KUN8Zn9Z2jw?si=z7Fs1D_e7HEFCCNx',
		title: {
			uz: 'Burun operatsiyasidan keyingi natija',
			'uz-Cyrl': 'Бурун операциясидан кейинги натижа',
			ru: 'Результат после операции на носу',
			en: 'Result after nose surgery',
		},
	},
	{
		videoUrl: 'https://youtube.com/shorts/pzMCU1N_nPI?si=KqTS5GtuJMZf2m4y',
		title: {
			uz: '5 yoshli bolada quloq muammosi',
			'uz-Cyrl': '5 ёшли болада қулоқ муаммоси',
			ru: 'Проблема с ухом у 5-летнего ребенка',
			en: 'Ear condition in a 5-year-old child',
		},
	},
	{
		videoUrl: 'https://youtube.com/shorts/5Vozb6KczuA?si=xTnstBIMkR5sxSul',
		title: {
			uz: 'Quloq davolashdan keyingi natija',
			'uz-Cyrl': 'Қулоқ даволашдан кейинги натижа',
			ru: 'Результат после лечения уха',
			en: 'Result after ear treatment',
		},
	},
]

const YOUTUBE_ID_REGEX = /^[a-zA-Z0-9_-]{11}$/

const extractYouTubeId = (videoUrl: string): string | null => {
	if (YOUTUBE_ID_REGEX.test(videoUrl)) {
		return videoUrl
	}

	try {
		const parsed = new URL(videoUrl)
		const hostname = parsed.hostname.replace('www.', '')

		if (hostname === 'youtu.be') {
			return parsed.pathname.split('/').filter(Boolean)[0] ?? null
		}
		if (parsed.pathname.startsWith('/shorts/')) {
			return parsed.pathname.split('/').filter(Boolean)[1] ?? null
		}
		if (parsed.pathname === '/watch') {
			return parsed.searchParams.get('v')
		}
		if (parsed.pathname.startsWith('/embed/')) {
			return parsed.pathname.split('/').filter(Boolean)[1] ?? null
		}
	} catch {
		return null
	}

	return null
}

const normalizeLang = (value: string): 'uz' | 'uz-Cyrl' | 'ru' | 'en' => {
	if (value === 'uz' || value === 'uz-Cyrl' || value === 'ru' || value === 'en') {
		return value
	}
	if (value === 'uz-cyrl') return 'uz-Cyrl'
	return 'uz-Cyrl'
}

const HomeVideoShowcase = () => {
	const { t, i18n } = useTranslation()
	const lang = normalizeLang(i18n.resolvedLanguage || i18n.language)
	const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null)

	const cards = useMemo(
		() =>
			previewVideos.map((video) => {
				const id = extractYouTubeId(video.videoUrl)
				return {
					...video,
					thumbnail: id ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg` : '',
					embedUrl: id
						? `https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`
						: video.videoUrl,
				}
			}),
		[]
	)

	return (
		<section className='py-14 bg-white'>
			<div className='container'>
				<div className='text-center max-w-3xl mx-auto'>
					<p className='text-sm uppercase tracking-[0.3em] text-[#0c5adb]'>
						{t('homeVideos.pretitle', { defaultValue: 'VIDEO NAMUNALAR' })}
					</p>
					<h2 className='mt-3 text-3xl md:text-4xl font-semibold text-[#041424]'>
						{t('homeVideos.title', {
							defaultValue: "Bemorlar bo'yicha so'nggi videolar",
						})}
					</h2>
				</div>

				<div className='mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
					{cards.map((video) => (
						<article
							key={video.videoUrl}
							className='group rounded-2xl overflow-hidden border border-[#e4e9f0] bg-white shadow-sm hover:shadow-md transition-all'
						>
							<div className='relative aspect-video bg-[#e8eef7]'>
								{activeVideoUrl === video.videoUrl ? (
									<iframe
										className='w-full h-full'
										src={video.embedUrl}
										title={video.title[lang]}
										loading='lazy'
										allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
										allowFullScreen
									/>
								) : (
									<button
										type='button'
										onClick={() => setActiveVideoUrl(video.videoUrl)}
										className='relative w-full h-full'
										aria-label={`Play ${video.title[lang]}`}
									>
										{video.thumbnail ? (
											<img
												src={video.thumbnail}
												alt={video.title[lang]}
												className='w-full h-full object-cover'
												loading='lazy'
											/>
										) : (
											<div className='w-full h-full' />
										)}
										<div className='absolute inset-0 bg-black/25 group-hover:bg-black/35 transition-colors' />
										<span className='absolute inset-0 flex items-center justify-center'>
											<span className='inline-flex h-12 w-12 rounded-full bg-white/95 items-center justify-center shadow-lg'>
												<svg
													viewBox='0 0 24 24'
													width='18'
													height='18'
													fill='currentColor'
													className='ml-1 text-[#0c5adb]'
												>
													<path d='M8 5v14l11-7z' />
												</svg>
											</span>
										</span>
									</button>
								)}
							</div>
							<div className='p-5'>
								<h3 className='text-[17px] font-semibold text-[#041424] line-clamp-2 min-h-[3.2rem]'>
									{video.title[lang]}
								</h3>
							</div>
						</article>
					))}
				</div>

				<div className='mt-10 text-center'>
					<Link
						to='/videos'
						className='inline-flex items-center gap-2 rounded-full bg-[#0c5adb] hover:bg-[#094bbd] text-white px-7 py-3 text-sm font-semibold uppercase tracking-wide transition-colors'
					>
						{t('homeVideos.viewAll', { defaultValue: "Hammasini ko'rish" })}
						<span aria-hidden='true'>-&gt;</span>
					</Link>
				</div>
			</div>
		</section>
	)
}

export default HomeVideoShowcase
