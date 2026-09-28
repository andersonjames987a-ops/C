import { useState, useEffect } from 'react';
import logo from './assets/logo.png';
import clinicExterior from './assets/attachment4.jpg';
import receptionImg from './assets/attachment1.jpg';
import doctorImg from './assets/attachment2.jpg';
import ambulanceImg from './assets/attachment3.jpg';

const WHATSAPP_NUMBER = '919810911582';
const DISPLAY_NUMBER = '+91 98109 11582';

function buildWhatsAppLink(name = '', date = '', concern = '') {
  const msg = name
    ? `Hello Dr. HR Khan,\n\nI would like to book an appointment at New Life Medical Centre.\n\nName: ${name}\nPreferred Date: ${date}\nConcern: ${concern}\n\nThank you.`
    : `Hello Dr. HR Khan, I would like to book an appointment at New Life Medical Centre.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

const MAPS_DIRECTIONS_URL =
  'https://www.google.com/maps/dir/?api=1&destination=New+Life+Medical+Centre+Dr+HR+Khan+Delhi';
const MAPS_REVIEWS_URL =
  'https://www.google.com/maps/search/New+Life+Medical+Centre+Dr+HR+Khan+Delhi';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Location', href: '#location' },
  { label: 'Contact', href: '#contact' },
];

const services = [
  {
    icon: '🩺',
    title: 'General Medicine',
    desc: 'Diagnosis and treatment of acute and chronic illnesses. Expert OPD consultations for all age groups.',
  },
  {
    icon: '👶',
    title: 'Neonatal & Pediatric Care',
    desc: 'Specialized care for newborns and children. Equipped NICU with round-the-clock monitoring.',
  },
  {
    icon: '🤰',
    title: 'Maternity Services',
    desc: 'Comprehensive pre-natal, delivery, and post-natal care in a safe, supportive environment.',
  },
  {
    icon: '🚑',
    title: 'Emergency & Ambulance',
    desc: '24/7 emergency response with a dedicated ambulance for rapid patient transport.',
  },
  {
    icon: '💉',
    title: 'Vaccinations',
    desc: 'Full schedule of childhood and adult immunizations as per government and WHO guidelines.',
  },
  {
    icon: '🔬',
    title: 'Diagnostics & Pathology',
    desc: 'In-house lab tests, blood work, and rapid diagnostics for accurate, timely results.',
  },
];

const hours = [
  { day: 'Monday – Friday', time: '8:00 AM – 9:00 PM' },
  { day: 'Saturday', time: '8:00 AM – 8:00 PM' },
  { day: 'Sunday', time: '9:00 AM – 2:00 PM' },
  { day: 'Emergency', time: '24 / 7' },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [form, setForm] = useState({ name: '', date: '', concern: '' });

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(buildWhatsAppLink(form.name, form.date, form.concern), '_blank');
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">

      {/* ── Navbar ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur-sm py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-4">
          {/* Logo + Name */}
          <a href="#home" className="flex items-center gap-3 shrink-0">
            <img src={logo} alt="New Life Medical Centre Logo" className="h-12 w-12 object-contain" />
            <div className="leading-tight">
              <p className="font-bold text-blue-800 text-base leading-tight">Dr. H R Khan</p>
              <p className="text-green-700 text-xs font-semibold tracking-wide">New Life Medical Centre</p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-gray-600 hover:text-blue-700 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* WhatsApp CTA */}
          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-sm"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Book Appointment
          </a>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-3 shadow-lg">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={closeMenu}
                className="text-sm font-medium text-gray-700 hover:text-blue-700 py-1"
              >
                {l.label}
              </a>
            ))}
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white text-sm font-semibold px-4 py-2.5 rounded-full mt-2"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Book Appointment on WhatsApp
            </a>
          </div>
        )}
      </header>

      {/* ── Hero ── */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      >
        <img
          src={clinicExterior}
          alt="New Life Medical Centre exterior"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-blue-900/70 to-blue-800/50" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-block bg-green-500/20 border border-green-400/40 text-green-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 tracking-widest uppercase">
              Trusted Healthcare Since Years
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-3">
              Dr. H R Khan
            </h1>
            <p className="text-xl sm:text-2xl text-green-300 font-semibold mb-2">
              New Life Medical Centre
            </p>
            <p className="text-blue-100 text-sm mb-6 leading-relaxed max-w-md">
              Compassionate care for your entire family — from newborns to elders. General medicine,
              maternity, neonatal care, and 24/7 emergency services under one roof.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-full shadow-lg text-sm"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Book Appointment
              </a>
              <a
                href={MAPS_DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/40 text-white font-bold px-6 py-3 rounded-full text-sm"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Live Location
              </a>
            </div>

            {/* Quick stats */}
            <div className="flex flex-wrap gap-6 mt-10">
              {[['5000+', 'Patients Served'], ['24/7', 'Emergency Care'], ['15+', 'Years Experience']].map(
                ([num, label]) => (
                  <div key={label}>
                    <p className="text-2xl font-bold text-green-400">{num}</p>
                    <p className="text-xs text-blue-200 uppercase tracking-wide">{label}</p>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Hero card */}
          <div className="hidden md:block">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-white">
              <div className="flex items-center gap-4 mb-4">
                <img src={logo} alt="Logo" className="w-16 h-16 object-contain rounded-xl bg-white p-1" />
                <div>
                  <p className="font-bold text-lg leading-tight">Dr. H R Khan</p>
                  <p className="text-green-300 text-sm">New Life Medical Centre</p>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <span className="text-green-400 mt-0.5">✔</span>
                  <span>MBBS — General Physician & Medical Officer</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400 mt-0.5">✔</span>
                  <span>Specialist in Neonatal & Pediatric Care</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400 mt-0.5">✔</span>
                  <span>Maternity & Obstetric Services Available</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400 mt-0.5">✔</span>
                  <span>24/7 Emergency Response & Ambulance</span>
                </div>
              </div>
              <div className="mt-5 pt-4 border-t border-white/20 flex items-center gap-2">
                <svg className="w-4 h-4 text-green-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                </svg>
                <a href={`tel:${DISPLAY_NUMBER}`} className="text-green-300 font-semibold text-sm hover:text-white">
                  {DISPLAY_NUMBER}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Emergency Banner ── */}
      <div className="bg-red-600 text-white py-3 px-4 text-center">
        <p className="text-sm font-semibold flex flex-wrap items-center justify-center gap-2">
          <span>🚑 24/7 Emergency &amp; Ambulance Service Available</span>
          <span className="hidden sm:inline">—</span>
          <a href={`tel:${DISPLAY_NUMBER}`} className="underline underline-offset-2 hover:text-red-100">
            Call Now: {DISPLAY_NUMBER}
          </a>
        </p>
      </div>

      {/* ── About ── */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src={doctorImg}
              alt="Dr. HR Khan providing neonatal care"
              className="w-full rounded-2xl object-cover shadow-xl aspect-[4/5] object-top"
            />
            <div className="absolute -bottom-4 -right-4 bg-blue-800 text-white px-5 py-3 rounded-xl shadow-lg">
              <p className="text-2xl font-bold">15+</p>
              <p className="text-xs text-blue-200 uppercase tracking-wide">Years of Service</p>
            </div>
          </div>

          <div>
            <p className="text-green-600 font-semibold text-sm uppercase tracking-widest mb-2">About the Doctor</p>
            <h2 className="text-4xl font-bold text-blue-900 mb-4 leading-tight">
              Dr. H R Khan
            </h2>
            <p className="text-green-700 font-semibold mb-4">MBBS — General Physician & Medical Officer</p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Dr. H R Khan is a dedicated and experienced medical professional serving the community
              through New Life Medical Centre. With over 15 years of clinical practice, he specialises
              in general medicine, neonatal care, and maternal health — ensuring every patient receives
              personalised attention and evidence-based treatment.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              His clinic is equipped with modern diagnostic tools and staffed by a trained team committed
              to delivering compassionate healthcare at every step — from routine check-ups to complex
              emergency cases.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: '🏥', label: 'Modern Facility' },
                { icon: '👨‍👩‍👧', label: 'Family Healthcare' },
                { icon: '🔬', label: 'In-House Diagnostics' },
                { icon: '📞', label: 'Tele-Consultation' },
              ].map(({ icon, label }) => (
                <div key={label} className="flex items-center gap-3 bg-blue-50 rounded-xl px-4 py-3">
                  <span className="text-xl">{icon}</span>
                  <span className="text-sm font-medium text-blue-900">{label}</span>
                </div>
              ))}
            </div>

            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-full shadow-md text-sm"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Consult on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-green-600 font-semibold text-sm uppercase tracking-widest mb-2">What We Offer</p>
            <h2 className="text-4xl font-bold text-blue-900">Our Services</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm leading-relaxed">
              Comprehensive medical care for every member of your family, delivered with expertise and compassion.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-blue-100 group"
              >
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="text-lg font-bold text-blue-900 mb-2 group-hover:text-blue-700 transition-colors">
                  {s.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-green-600 font-semibold text-sm uppercase tracking-widest mb-2">Inside the Clinic</p>
            <h2 className="text-4xl font-bold text-blue-900">Our Facility</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: clinicExterior, alt: 'New Life Medical Centre exterior' },
              { src: receptionImg, alt: 'Reception and front desk' },
              { src: doctorImg, alt: 'Doctor providing neonatal care' },
              { src: ambulanceImg, alt: 'Clinic ambulance for emergency transport' },
            ].map(({ src, alt }) => (
              <div key={alt} className="relative overflow-hidden rounded-xl aspect-square bg-blue-50 group">
                <img
                  src={src}
                  alt={alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Book Appointment ── */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-green-400 font-semibold text-sm uppercase tracking-widest mb-2">Easy Booking</p>
            <h2 className="text-4xl font-bold mb-4">Book Your Appointment</h2>
            <p className="text-blue-200 text-sm leading-relaxed mb-6">
              Fill in the details below and we'll open WhatsApp with a pre-filled message straight to
              Dr. HR Khan's clinic. Quick, simple, and personal.
            </p>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-green-500/20 border border-green-400/40 flex items-center justify-center shrink-0">
                  <span className="text-green-400 text-xs font-bold">1</span>
                </div>
                <div>
                  <p className="font-semibold text-white">Fill the form</p>
                  <p className="text-blue-300">Enter your name, preferred date &amp; concern.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-green-500/20 border border-green-400/40 flex items-center justify-center shrink-0">
                  <span className="text-green-400 text-xs font-bold">2</span>
                </div>
                <div>
                  <p className="font-semibold text-white">Click "Book via WhatsApp"</p>
                  <p className="text-blue-300">WhatsApp opens with your message ready to send.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-green-500/20 border border-green-400/40 flex items-center justify-center shrink-0">
                  <span className="text-green-400 text-xs font-bold">3</span>
                </div>
                <div>
                  <p className="font-semibold text-white">Receive confirmation</p>
                  <p className="text-blue-300">The clinic team will confirm your slot promptly.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-white/10 rounded-xl border border-white/20 text-sm">
              <p className="text-blue-200 mb-1">Direct WhatsApp</p>
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 font-bold text-lg hover:text-green-300"
              >
                {DISPLAY_NUMBER}
              </a>
            </div>
          </div>

          {/* Booking Form */}
          <form
            onSubmit={handleBooking}
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl"
          >
            <h3 className="text-blue-900 text-xl font-bold mb-6">Patient Details</h3>

            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Your full name"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-400"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-1">Preferred Date *</label>
                <input
                  type="date"
                  required
                  value={form.date}
                  onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-400"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-1">Medical Concern</label>
                <textarea
                  rows={3}
                  placeholder="Brief description of your concern (optional)"
                  value={form.concern}
                  onChange={(e) => setForm((f) => ({ ...f, concern: e.target.value }))}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-400 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold py-3.5 rounded-xl shadow-md text-sm mt-2 transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Book via WhatsApp
              </button>

              <p className="text-center text-gray-400 text-xs">
                Opens WhatsApp with your details pre-filled. No app download needed on desktop.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* ── Location & Hours ── */}
      <section id="location" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-green-600 font-semibold text-sm uppercase tracking-widest mb-2">Find Us</p>
            <h2 className="text-4xl font-bold text-blue-900">Location &amp; Hours</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-96">
              <iframe
                title="New Life Medical Centre location"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://maps.google.com/maps?q=New+Life+Medical+Centre+Dr+HR+Khan&output=embed&z=15"
              />
            </div>

            {/* Hours + Actions */}
            <div className="flex flex-col justify-center gap-6">
              {/* Hours table */}
              <div className="bg-blue-50 rounded-2xl p-6">
                <h3 className="text-blue-900 font-bold text-lg mb-4 flex items-center gap-2">
                  <span>🕐</span> Clinic Hours
                </h3>
                <div className="space-y-3">
                  {hours.map(({ day, time }) => (
                    <div key={day} className="flex justify-between items-center text-sm border-b border-blue-100 pb-2 last:border-0 last:pb-0">
                      <span className="text-gray-600 font-medium">{day}</span>
                      <span className={`font-bold ${day === 'Emergency' ? 'text-red-600' : 'text-blue-800'}`}>
                        {time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Address */}
              <div className="bg-green-50 rounded-2xl p-6">
                <h3 className="text-blue-900 font-bold text-lg mb-3 flex items-center gap-2">
                  <span>📍</span> Address
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  New Life Medical Centre<br />
                  Dr. H R Khan (MBBS)<br />
                  Delhi, India
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={MAPS_DIRECTIONS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold px-4 py-2.5 rounded-full"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Get Directions
                  </a>
                  <a
                    href={`tel:${DISPLAY_NUMBER}`}
                    className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 text-sm font-semibold px-4 py-2.5 rounded-full"
                  >
                    <svg className="w-4 h-4 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {DISPLAY_NUMBER}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Google Reviews ── */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-green-600 font-semibold text-sm uppercase tracking-widest mb-2">Patient Feedback</p>
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Google Reviews</h2>
          <p className="text-gray-500 text-sm mb-8 max-w-md mx-auto">
            Hundreds of satisfied patients trust Dr. HR Khan and New Life Medical Centre. Read genuine
            reviews or share your own experience.
          </p>

          {/* Star display */}
          <div className="flex justify-center items-center gap-1 mb-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <svg key={i} className={`w-8 h-8 ${i <= 4 ? 'text-yellow-400' : 'text-yellow-300'}`} fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-blue-900 font-bold text-lg mb-1">4.8 / 5 Rating</p>
          <p className="text-gray-400 text-sm mb-8">Based on Google Reviews</p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={MAPS_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-full shadow text-sm"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Read Reviews on Google
            </a>
            <a
              href={MAPS_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 font-semibold px-6 py-3 rounded-full text-sm"
            >
              ✍️ Leave a Review
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-blue-950 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mb-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src={logo} alt="Logo" className="w-12 h-12 object-contain rounded-xl bg-white p-1" />
                <div>
                  <p className="font-bold text-white">Dr. H R Khan</p>
                  <p className="text-green-400 text-xs">New Life Medical Centre</p>
                </div>
              </div>
              <p className="text-blue-300 text-sm leading-relaxed">
                Compassionate, expert healthcare for every member of your family. Trusted by the community for over 15 years.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-sm uppercase tracking-widest text-blue-300 mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="text-blue-200 hover:text-white text-sm transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-sm uppercase tracking-widest text-blue-300 mb-4">Contact</h4>
              <div className="space-y-3 text-sm text-blue-200">
                <div className="flex items-start gap-2">
                  <span className="mt-0.5 shrink-0">📍</span>
                  <span>New Life Medical Centre, Delhi, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>📞</span>
                  <a href={`tel:${DISPLAY_NUMBER}`} className="hover:text-white">{DISPLAY_NUMBER}</a>
                </div>
                <div className="flex items-center gap-2">
                  <span>🟢</span>
                  <a
                    href={buildWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    WhatsApp: {DISPLAY_NUMBER}
                  </a>
                </div>
                <div className="flex items-start gap-2">
                  <span>🕐</span>
                  <span>Mon–Fri: 8 AM – 9 PM · Sat: 8 AM – 8 PM</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-blue-800 pt-6 text-center text-blue-400 text-xs">
            © {new Date().getFullYear()} New Life Medical Centre — Dr. H R Khan. All rights reserved.
          </div>
        </div>
      </footer>

      {/* ── Floating WhatsApp Button ── */}
      <a
        href={buildWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-xl flex items-center justify-center transition-transform hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  );
}
