import React, { useEffect, useRef, useState } from "react";

type Slide = {
  id: number;
  pretitle?: string;
  title: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  image: string;
};

const SLIDES: Slide[] = [
  {
    id: 1,
    pretitle: "RESEARCH & TECHNOLOGY",
    title: "Pioneering Science For Global Progress",
    description:
      "We are dedicated to groundbreaking discoveries, scientific excellence, and technological advancements that shape the future of healthcare, environment, and industry.",
    ctaLabel: "VIEW RESEARCH",
    ctaHref: "#research",
    image:
      "/hero.webp",
  },
  {
    id: 2,
    pretitle: "INNOVATION",
    title: "Leading The Future Of Scientific Exploration",
    description:
      "Collaborating with world-class teams to accelerate discovery and deliver reproducible research outcomes at scale.",
    ctaLabel: "OUR SERVICES",
    ctaHref: "#services",
    image:
      "/hero1.webp",
  },
  {
    id: 3,
    pretitle: "DISCOVERY",
    title: "Transforming Ideas Into Real-World Solutions",
    description:
      "From concept to validation — we support your research journey with robust pipelines and expert partnerships.",
    ctaLabel: "CONTACT US",
    ctaHref: "#contact",
    image:
				"/hero.webp",
		},
];

const AUTOPLAY = 6000;

const HeroCarousel: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (paused) return;
    timerRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, AUTOPLAY);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length);
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % SLIDES.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const goTo = (i: number) => setIndex(i);


  return (
    <section
      className="relative pb-20"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      {/* Background slides */}
      <div className="relative">
        {SLIDES.map((s, i) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              i === index ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
            aria-hidden={i !== index}
          >
            <div
              className="w-full h-[700px] bg-center bg-cover"
              style={{
                backgroundImage: `url(${s.image})`,
              }}
            >
              {/* subtle white overlay to create pale left background like in image */}
              <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Foreground content */}
      <div className="relative z-20">
				<div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center h-[640px]">
          {/* Left text area */}
          <div className="lg:col-span-6">
            <div>
              <p className="text-[16px] leading-6 text-[#0c5adb] font-medium ">{SLIDES[index].pretitle}</p>
              <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-[#041424] leading-tight">
                {SLIDES[index].title}
              </h1>
              <p className="hidden sm:block mt-6 text-[#6B7280] text-[20px] leading-6 font-medium">{SLIDES[index].description}</p>

              <div className="mt-10 flex items-center gap-6">
                <a
                  href={SLIDES[index].ctaHref}
                  className="inline-flex items-center gap-3 bg-[#0c5adb] hover:bg-[#094bbd] text-white px-6.5 py-3 rounded-full text-[16px] font-medium uppercase"
                >
                  {SLIDES[index].ctaLabel}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M5 12h14M13 5l7 7-7 7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>

              </div>

              {/* indicators bottom-left like image (two outlines + one filled style) */}
              <div className="mt-8 ">
                <div className="flex items-center gap-3">
                  {SLIDES.map((_, i) => {
                    // mimic image style: small two circles and one filled (just dynamic)
                    const base =
                      i === index ? "w-3 h-3 rounded-full bg-blue-600" : "w-3 h-3 rounded-full border-2 border-blue-200";
                    return (
                      <button
                        key={i}
                        onClick={() => goTo(i)}
                        className={`${base} transition`}
                        aria-label={`Slide ${i + 1}`}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Right image area to show person & microscope (keeps part visible on right) */}
         
          {/* Mobile indicators under image / content for small screens */}
          {/* <div className="lg:hidden col-span-12 mt-6">
            <div className="flex items-center gap-3 justify-start">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`w-3 h-3 rounded-full transition ${i === index ? "bg-blue-600" : "bg-gray-300"}`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div> */}
        </div>
      </div>
			</div>
    </section>
  );
};

export default HeroCarousel;