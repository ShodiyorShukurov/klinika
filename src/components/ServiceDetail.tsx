import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

/**
 * ServiceDetail page
 * - responsive layout: content (left) + sticky sidebar (right) on lg
 * - mobile: stacked content
 *
 * Note: this is a self-contained demo component with mock data.
 * Replace mock data / images with real data or fetch from API by slug.
 */

type Service = {
  slug: string;
  title: string;
  excerpt: string;
  description: string;
  features: string[];
  images: string[];
  duration?: string;
  price?: string;
};

const MOCK_SERVICES: Service[] = [
  {
    slug: "oncology",
    title: "Общая Онкология",
    excerpt: "Комплексная диагностика и лечение онкологических заболеваний.",
    description:
      "Полное описание услуги: методы диагностики, современные протоколы лечения, мультидисциплинарный подход и сопровождение пациента. Здесь приводится подробная информация, результаты исследований и примеры клинической практики. В описание можно вставлять подпункты, таблицы и важные ссылки.",
    features: [
      "Молекулярная диагностика",
      "Индивидуальные планы лечения",
      "Поддержка исследований",
      "Постоперационный уход",
    ],
    images: [
      "https://images.unsplash.com/photo-1581091012184-7b9c0f7e0f69?w=1400&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580281657528-6c5f7c3d9b1d?w=1400&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719478184-5f2d6cc9f0b0?w=1400&q=80&auto=format&fit=crop",
    ],
    duration: "2–6 weeks (depends on protocol)",
    price: "From $1200",
  },
  // ...other services
];

const FAQS = [
  {
    q: "Как записаться на прием?",
    a: "Вы можете записаться через контактную форму справа или позвонить по телефону +1 800-001-658.",
  },
  {
    q: "Какая подготовка требуется перед процедурой?",
    a: "Подготовка зависит от типа обследования. После записи с вами свяжется координатор и даст детальные инструкции.",
  },
  {
    q: "Есть ли поддержка после лечения?",
    a: "Да, мы предоставляем сопровождение и реабилитационные программы.",
  },
];

const RelatedServices = [
  { title: "Общая хирургия", slug: "general-surgery", img: "https://images.unsplash.com/photo-1579154203451-2f3a4b9b0b4d?w=600&q=80&auto=format&fit=crop" },
  { title: "Маммология", slug: "mammology", img: "https://images.unsplash.com/photo-1556228720-1c9bde2f3b1b?w=600&q=80&auto=format&fit=crop" },
  { title: "Урология", slug: "urology", img: "https://images.unsplash.com/photo-1582719478184-5f2d6cc9f0b0?w=600&q=80&auto=format&fit=crop" },
];

const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  // find service or fallback
  const service = MOCK_SERVICES.find((s) => s.slug === slug) ?? MOCK_SERVICES[0];

  // gallery state
  const [current, setCurrent] = useState(0);
  // FAQ accordion
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-slate-500 mb-6" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li>/</li>
          <li><Link to="/services" className="hover:underline">Services</Link></li>
          <li>/</li>
          <li className="text-slate-800 font-medium">{service.title}</li>
        </ol>
      </nav>

      <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        {/* Left: content */}
        <div className="lg:col-span-8">
          {/* Hero image + title */}
          <div className="rounded-xl overflow-hidden shadow-sm">
            <div className="relative">
              <img src={service.images[0]} alt={service.title} className="w-full h-64 sm:h-96 object-cover" />
              <div className="absolute left-6 bottom-6 bg-white/60 backdrop-blur-sm rounded-md px-4 py-2">
                <span className="text-sm font-medium text-slate-900">{service.excerpt}</span>
              </div>
            </div>
          </div>

          <header className="mt-6">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">{service.title}</h1>
            <p className="mt-3 text-gray-600">{service.excerpt}</p>

            <div className="mt-4 flex gap-3">
              <a href="tel:+1800001658" className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm">
                Call Now
              </a>
              <a href="#request" className="inline-flex items-center gap-3 bg-white border border-slate-200 text-slate-900 px-4 py-2 rounded-full text-sm">
                Request Quote
              </a>
            </div>
          </header>

          {/* Detailed description */}
          <section className="mt-8 prose prose-slate max-w-none">
            <p>{service.description}</p>

            <h3 className="mt-6">What we offer</h3>
            <ul className="list-disc ml-6 mt-3">
              {service.features.map((f) => (
                <li key={f} className="text-gray-700">{f}</li>
              ))}
            </ul>
          </section>

          {/* Gallery */}
          <section className="mt-10">
            <h4 className="text-xl font-semibold mb-4">Gallery</h4>

            {/* Desktop grid */}
            <div className="hidden sm:grid sm:grid-cols-3 gap-4">
              {service.images.map((img, i) => (
                <button key={i} onClick={() => setCurrent(i)} className={`rounded-lg overflow-hidden shadow ${current === i ? "ring-4 ring-blue-100" : ""}`}>
                  <img src={img} alt={`${service.title} ${i+1}`} className="w-full h-40 object-cover" />
                </button>
              ))}
            </div>

            {/* Mobile carousel (simple) */}
            <div className="sm:hidden relative">
              <div className="h-64 overflow-hidden rounded-lg shadow">
                <img src={service.images[current]} alt={`${service.title} mobile`} className="w-full h-full object-cover" />
              </div>

              <div className="flex items-center justify-center gap-3 mt-3">
                {service.images.map((_, i) => (
                  <button key={i} onClick={() => setCurrent(i)} className={`w-2 h-2 rounded-full ${current === i ? "bg-blue-600" : "bg-gray-300"}`} />
                ))}
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section className="mt-10">
            <h4 className="text-xl font-semibold mb-4">Frequently Asked Questions</h4>
            <div className="space-y-3">
              {FAQS.map((f, i) => (
                <div key={i} className="border border-slate-100 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full text-left px-4 py-3 flex items-center justify-between bg-white"
                  >
                    <span className="font-semibold">{f.q}</span>
                    <span className="text-slate-500">{openFaq === i ? "−" : "+"}</span>
                  </button>
                  <div className={`px-4 pb-4 transition-max-height duration-300 overflow-hidden ${openFaq === i ? "max-h-96" : "max-h-0"}`}>
                    <p className="text-gray-700 mt-3">{f.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Related services */}
          <section className="mt-10">
            <h4 className="text-xl font-semibold mb-4">Related Services</h4>
            <div className="flex gap-4 overflow-x-auto pb-4">
              {RelatedServices.map((r) => (
                <Link key={r.slug} to={`/services/${r.slug}`} className="min-w-[220px] bg-white rounded-lg shadow-sm overflow-hidden">
                  <img src={r.img} alt={r.title} className="w-full h-32 object-cover" />
                  <div className="p-3">
                    <h5 className="text-sm font-semibold">{r.title}</h5>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>

        {/* Right: sticky sidebar on lg */}
        <aside className="lg:col-span-4 mt-10 lg:mt-0">
          <div className="lg:sticky lg:top-24 space-y-6">
            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
              <h5 className="text-lg font-semibold">Quick Facts</h5>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li><span className="font-medium">Duration:</span> {service.duration}</li>
                <li><span className="font-medium">Price:</span> {service.price}</li>
                <li><span className="font-medium">Availability:</span> On request</li>
              </ul>

              <div className="mt-4 flex flex-col gap-3">
                <a href="tel:+1800001658" className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md">
                  Call Clinic
                </a>
                <a href="#request" className="inline-flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-900 px-4 py-2 rounded-md">
                  Request Estimate
                </a>
              </div>
            </div>

            <div id="request" className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
              <h5 className="text-lg font-semibold">Request a Quote</h5>
              <p className="mt-2 text-sm text-gray-600">Fill basic info and our team will contact you shortly.</p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Request sent (demo).");
                }}
                className="mt-4 space-y-3"
              >
                <input className="w-full bg-gray-100 rounded-full px-4 py-2 text-sm" placeholder="Your name" required />
                <input className="w-full bg-gray-100 rounded-full px-4 py-2 text-sm" placeholder="Phone or Email" required />
                <button type="submit" className="w-full bg-blue-600 text-white px-4 py-2 rounded-full">Send Request</button>
              </form>
            </div>

            <div className="bg-white border rounded-xl p-4 text-sm text-gray-700 border-slate-200">
              <strong>Need urgent help?</strong>
              <p className="mt-2">Call our emergency line: <a href="tel:+1800001658" className="text-blue-600">+1 800-001-658</a></p>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default ServiceDetail;