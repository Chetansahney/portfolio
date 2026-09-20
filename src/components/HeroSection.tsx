import FadeIn from './FadeIn';
import Magnet from './Magnet';
import HeroVisual from './HeroVisual';
import { ContactButton } from './Buttons';
import { heroPortrait, profile } from '../lib/data';

const nav = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
];

export default function HeroSection() {
  return (
    <section
      className="relative flex h-screen flex-col bg-[#0C0C0C]"
      style={{ overflowX: 'clip' }}
    >
      <FadeIn
        as="nav"
        delay={0}
        y={-20}
        className="relative z-20 flex items-center justify-between px-6 pt-6 md:px-10 md:pt-8"
      >
        {nav.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-sm font-medium uppercase tracking-wider text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70 md:text-lg lg:text-[1.4rem]"
          >
            {item.label}
          </a>
        ))}
      </FadeIn>

      <div className="relative z-20 overflow-hidden">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading mt-6 w-full whitespace-nowrap text-center text-[13.5vw] font-black uppercase leading-none tracking-tight sm:mt-4 sm:text-[14vw] md:-mt-5 md:text-[15vw] lg:text-[15.5vw]">
            hi, i&apos;m {profile.first}
          </h1>
        </FadeIn>
      </div>

      <div className="relative z-20 mt-auto flex items-end justify-between px-6 pb-7 md:px-10 sm:pb-8 md:pb-10">
        <FadeIn delay={0.35} y={20}>
          <p
            className="max-w-[160px] font-light uppercase leading-snug tracking-wide text-[#D7E2EA] sm:max-w-[220px] md:max-w-[280px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            {profile.tagline}
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton href="#contact" />
        </FadeIn>
      </div>

      {/* Positioning lives on this plain wrapper: Framer Motion writes its own
          `transform`, which would otherwise clobber the -translate-x-1/2.
          Centred in the band between the heading and the bottom bar. */}
      <div className="pointer-events-none absolute left-1/2 top-[54%] z-10 w-[300px] -translate-x-1/2 -translate-y-1/2 sm:w-[390px] md:w-[470px] lg:w-[540px]">
        <FadeIn delay={0.6} y={30}>
          <Magnet
            padding={150}
            strength={5}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
          >
            {heroPortrait ? (
              <img src={heroPortrait} alt="" className="w-full select-none" draggable={false} />
            ) : (
              <HeroVisual />
            )}
          </Magnet>
        </FadeIn>
      </div>
    </section>
  );
}
