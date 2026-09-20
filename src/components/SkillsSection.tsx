import FadeIn from './FadeIn';
import { skills } from '../lib/data';

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative bg-[#0C0C0C] px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-28"
      style={{ overflowX: 'clip' }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading text-center font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(2.6rem, 10vw, 140px)' }}
        >
          Skills
        </h2>
      </FadeIn>

      <div className="mx-auto mt-12 grid max-w-5xl gap-3 sm:mt-16 sm:gap-4 md:grid-cols-2">
        {skills.map((group, i) => (
          <FadeIn
            key={group.group}
            delay={i * 0.08}
            y={26}
            className="rounded-3xl border border-[#D7E2EA]/12 bg-[#D7E2EA]/[0.03] p-5 sm:p-7"
          >
            <h3 className="text-[0.7rem] font-medium uppercase tracking-[0.24em] text-[#646973] sm:text-xs">
              {group.group}
            </h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#D7E2EA]/20 px-3.5 py-1.5 text-[0.68rem] font-light uppercase tracking-[0.14em] text-[#BBCCD7] sm:text-xs"
                >
                  {item}
                </span>
              ))}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
