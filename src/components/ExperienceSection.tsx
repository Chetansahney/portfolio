import { ArrowUpRight } from 'lucide-react';
import FadeIn from './FadeIn';
import { experience } from '../lib/data';

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="grid-lines relative bg-[#0C0C0C] px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32"
      style={{ overflowX: 'clip' }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading text-center font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Experience
        </h2>
      </FadeIn>

      <div className="mx-auto mt-14 flex max-w-4xl flex-col gap-4 sm:mt-20 sm:gap-5 md:mt-24">
        {experience.map((role, i) => (
          <FadeIn
            key={role.company}
            delay={i * 0.1}
            y={30}
            className="flex flex-col items-center rounded-[32px] border border-[#D7E2EA]/12 bg-[#D7E2EA]/[0.03] px-5 py-10 transition-colors duration-200 hover:border-[#D7E2EA]/25 sm:rounded-[40px] sm:px-8 sm:py-12 md:px-10 md:py-14"
          >
            <a
              href={role.href}
              target="_blank"
              rel="noreferrer"
              className={`logo-plate h-[96px] w-[210px] rounded-2xl transition-transform duration-300 hover:scale-[1.03] sm:h-[112px] sm:w-[250px] ${role.logoPad}`}
              title={role.company}
            >
              <img src={role.logo} alt={role.company} />
            </a>

            <div className="mt-5 text-[0.68rem] font-light uppercase tracking-[0.24em] text-[#646973] sm:text-xs">
              {role.period}
            </div>

            <h3
              className="mt-4 text-center font-medium uppercase leading-tight text-[#D7E2EA]"
              style={{ fontSize: 'clamp(1.15rem, 2.4vw, 2rem)' }}
            >
              {role.company}
            </h3>

            <p
              className="mt-1 text-center font-light uppercase tracking-wide text-[#BBCCD7]/70"
              style={{ fontSize: 'clamp(0.8rem, 1.4vw, 1.05rem)' }}
            >
              {role.title}
            </p>

            <a
              href={role.href}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center gap-1 text-[0.68rem] font-light uppercase tracking-[0.2em] text-[#646973] transition-colors duration-200 hover:text-[#D7E2EA] sm:text-xs"
            >
              {role.place}
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
            </a>

            <ul className="mt-7 flex w-full max-w-2xl flex-col gap-3">
              {role.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex gap-3 font-light leading-relaxed text-[#D7E2EA]/60"
                  style={{ fontSize: 'clamp(0.85rem, 1.5vw, 1.1rem)' }}
                >
                  <span className="mt-[0.7em] h-[5px] w-[5px] shrink-0 rounded-full bg-[#B600A8]" />
                  {bullet}
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-wrap justify-center gap-2">
              {role.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-[#D7E2EA]/20 px-3.5 py-1.5 text-[0.68rem] font-light uppercase tracking-[0.14em] text-[#BBCCD7] sm:text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
