import React from 'react'

type VideoCardProps = {
	id: string
	title: string
	description: string
	duration: string
	categoryLabel: string
	watchLabel: string
}

const VideoCard: React.FC<VideoCardProps> = ({
	id,
	title,
	description,
	duration,
	categoryLabel,
	watchLabel,
}) => {
	return (
		<article className='group bg-white rounded-3xl border border-[#e7edf5] overflow-hidden flex flex-col shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg'>
			<div className='relative aspect-video w-full bg-[#eef3f9]'>
				<iframe
					className='w-full h-full'
					src={id}
					title={title}
					loading='lazy'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
					allowFullScreen
				/>
				<div className='absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0c5adb] shadow-sm'>
					{categoryLabel}
				</div>
				<div className='absolute top-3 right-3 rounded-full bg-[#041424]/90 px-3 py-1 text-[11px] font-semibold text-white'>
					{duration}
				</div>
			</div>
			<div className='p-6 flex flex-col gap-3 flex-1'>
				<h3 className='text-lg font-semibold text-[#041424] leading-snug'>
					{title}
				</h3>
				<p className='text-sm text-[#5b6675] leading-relaxed'>
					{description}
				</p>
				<a
					className='mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[#0c5adb] hover:text-[#083f8d]'
					href={`https://www.youtube.com/watch?v=${id}`}
					target='_blank'
					rel='noreferrer'
				>
					{watchLabel}
					<span aria-hidden='true'>→</span>
				</a>
			</div>
		</article>
	)
}

export default VideoCard
