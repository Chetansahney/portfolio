import { ArrowUpRight } from 'lucide-react';
import FadeIn from './FadeIn';
import { achievements, contestNote, platforms } from '../lib/data';

export default function AchievementsSection() {
  return (
    <section
      className="relative bg-[#0C0C0C] px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-28"
      style={{ overflowX: 'clip' }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading text-center font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(2.4rem, 9vw, 120px)' }}
        >
          Recognition
        </h2>
      </FadeIn>

      <div className="mx-auto mt-12 grid max-w-6xl gap-3 sm:mt-16 sm:gap-4 md:grid-cols-2">
        {achievements.map((item, i) => (
          <FadeIn
            key={item.label}
            delay={i * 0.08}
            y={26}
            className="flex items-start gap-5 rounded-3xl border border-[#D7E2EA]/12 bg-[#D7E2EA]/[0.03] p-5 sm:gap-6 sm:p-7"
          >
            <div className={`logo-plate h-14 w-14 shrink-0 rounded-2xl sm:h-16 sm:w-16 ${item.pad}`}>
              <img src={item.logo} alt="" />
            </div>
            <div>
              <h3
                className="font-medium uppercase leading-tight text-[#D7E2EA]"
                style={{ fontSize: 'clamp(0.95rem, 1.7vw, 1.3rem)' }}
              >
                {item.label}
              </h3>
              <p
                className="mt-2 font-light leading-relaxed text-[#D7E2EA]/50"
                style={{ fontSize: 'clamp(0.8rem, 1.3vw, 1rem)' }}
              >
                {item.note}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.1} y={20} className="mx-auto mt-14 max-w-6xl sm:mt-20">
        <p className="text-center text-[0.68rem] font-light uppercase tracking-[0.3em] text-[#646973] sm:text-xs">
          Competitive programming
        </p>
      </FadeIn>

      <div className="mx-auto mt-6 grid max-w-6xl gap-3 sm:mt-8 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {platforms.map((platform, i) => (
          <FadeIn key={platform.name} delay={i * 0.08} y={26} className="h-full">
            <a
              href={platform.href}
              target="_blank"
              rel="noreferrer"
              className="flex h-full flex-col rounded-3xl border border-[#D7E2EA]/12 bg-[#D7E2EA]/[0.03] p-5 transition-colors duration-200 hover:border-[#D7E2EA]/30 hover:bg-[#D7E2EA]/[0.06] sm:p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <div className={`logo-plate h-12 w-12 shrink-0 rounded-2xl ${platform.pad}`}>
                  <img src={platform.logo} alt="" />
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-[#646973]" strokeWidth={2} />
              </div>

              {/* Sized so the longest rank ("Specialist") still fits one line
                  inside a four-up card. */}
              <div
                className="hero-heading mt-5 break-words font-black uppercase leading-none"
                style={{ fontSize: 'clamp(1.35rem, 2.3vw, 1.95rem)' }}
              >
                {platform.rank}
              </div>

              <div className="mt-2 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-[#D7E2EA] sm:text-xs">
                {platform.name}
              </div>

              <p
                className="mt-3 font-light leading-relaxed text-[#D7E2EA]/45"
                style={{ fontSize: 'clamp(0.78rem, 1.15vw, 0.95rem)' }}
              >
                {platform.note}
              </p>

              <div className="mt-auto border-t border-[#D7E2EA]/10 pt-4 text-[0.65rem] font-light uppercase tracking-[0.18em] text-[#646973] sm:text-[0.7rem]">
                @{platform.handle}
              </div>
            </a>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.15} y={20} className="mx-auto mt-8 max-w-2xl">
        <p
          className="text-center font-light leading-relaxed text-[#D7E2EA]/45"
          style={{ fontSize: 'clamp(0.8rem, 1.3vw, 1rem)' }}
        >
          {contestNote}
        </p>
      </FadeIn>
    </section>
  );
}
