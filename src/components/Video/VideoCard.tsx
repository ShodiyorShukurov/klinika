import React, { useMemo, useState } from 'react'

type VideoCardProps = {
	videoUrl: string
	title: string
	categoryLabel: string
	watchLabel: string
}

const YOUTUBE_ID_REGEX = /^[a-zA-Z0-9_-]{11}$/

const parseYoutubeVideo = (
	videoUrl: string
): { id: string | null; isShort: boolean } => {
	if (YOUTUBE_ID_REGEX.test(videoUrl)) {
		return { id: videoUrl, isShort: false }
	}

	try {
		const parsed = new URL(videoUrl)
		const hostname = parsed.hostname.replace('www.', '')

		if (hostname === 'youtu.be') {
			return {
				id: parsed.pathname.split('/').filter(Boolean)[0] ?? null,
				isShort: false,
			}
		}

		if (hostname === 'youtube.com' || hostname === 'm.youtube.com') {
			if (parsed.pathname.startsWith('/shorts/')) {
				return {
					id: parsed.pathname.split('/').filter(Boolean)[1] ?? null,
					isShort: true,
				}
			}

			if (parsed.pathname === '/watch') {
				return { id: parsed.searchParams.get('v'), isShort: false }
			}

			if (parsed.pathname.startsWith('/embed/')) {
				return {
					id: parsed.pathname.split('/').filter(Boolean)[1] ?? null,
					iwsShort: false,
				}
			}
		}
	} catch {
		return { id: null, isShort: false }
	}

	return { id: null, isShort: false }
}

const VideoCard: React.FC<VideoCardProps> = ({
	videoUrl,
	title,
	categoryLabel,
	watchLabel,
}) => {
	const [isPlaying, setIsPlaying] = useState(false)
	const { id: videoId, isShort } = parseYoutubeVideo(videoUrl)
	const watchUrl = videoId
		? `https://www.youtube.com/watch?v=${videoId}`
		: videoUrl
	const embedUrl = videoId
		? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`
		: videoUrl

	const thumbnailUrl = useMemo(() => {
		if (!videoId) {
			return ''
		}
		return `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`
	}, [videoId])

	const handlePreviewClick = () => {
		// Many regular YouTube videos disallow embedded playback (age/copyright),
		// so we keep inline playback for Shorts and open regular videos on YouTube.
		if (!isShort) {
			window.open(watchUrl, '_blank', 'noopener,noreferrer')
			return
		}
		setIsPlaying(true)
	}

	return (
		<article className='group bg-white rounded-2xl border border-[#e7edf5] overflow-hidden flex flex-col shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md'>
			<div className='relative block bg-[#eef3f9]'>
				<div className='w-full aspect-[3/4]'>
					{isPlaying ? (
						<iframe
							className='w-full h-full'
							src={embedUrl}
							title={title}
							loading='lazy'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen
						/>
					) : (
						<button
							type='button'
							onClick={handlePreviewClick}
							className='relative w-full h-full'
							aria-label={`Play ${title}`}
						>
							{thumbnailUrl ? (
								<img
									src={thumbnailUrl}
									alt={title}
									className='w-full h-full object-cover'
									loading='lazy'
								/>
							) : (
								<div className='w-full h-full bg-[#d8e3f1]' />
							)}
							<div className='absolute inset-0 bg-black/30' />
							<span className='absolute inset-0 flex items-center justify-center'>
								<span className='inline-flex h-14 w-14 rounded-full bg-white/95 items-center justify-center shadow-xl'>
									<svg
										viewBox='0 0 24 24'
										width='20'
										height='20'
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
				<div className='pointer-events-none absolute top-3 left-3 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0c5adb] shadow-sm'>
					{categoryLabel}
				</div>
				<div className='pointer-events-none absolute bottom-3 right-3 rounded-full bg-[#041424]/85 px-3 py-1 text-[11px] font-semibold text-white'>
					{isShort ? 'Shorts' : 'Video'}
				</div>
			</div>
			<div className='p-6 flex flex-col gap-3 flex-1'>
				<h3 className='text-lg font-semibold text-[#041424] leading-snug line-clamp-2 min-h-[3.5rem]'>
					{title}
				</h3>
				<a
					className='mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[#0c5adb] hover:text-[#083f8d]'
					href={watchUrl}
					target='_blank'
					rel='noreferrer'
				>
					{watchLabel}
					<span aria-hidden='true'>-&gt;</span>
				</a>
			</div>
		</article>
	)
}

export default VideoCard
