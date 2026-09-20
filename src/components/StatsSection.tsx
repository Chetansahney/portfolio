import FadeIn from './FadeIn';
import { stats } from '../lib/data';

/* Lives in its own strip rather than inside About: the row is wide, and inside
   About it ran straight through the corner 3D decor. */
export default function StatsSection() {
  return (
    <section
      className="relative bg-[#0C0C0C] px-5 pb-20 pt-4 sm:px-8 sm:pb-24 md:px-10 md:pb-28"
      style={{ overflowX: 'clip' }}
    >
      <div className="mx-auto grid w-full max-w-4xl grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
        {stats.map((stat, i) => (
          <FadeIn key={stat.label} delay={i * 0.08} y={24} className="text-center">
            <div
              className="hero-heading font-black leading-none"
              style={{ fontSize: 'clamp(2rem, 4.4vw, 3.4rem)' }}
            >
              {stat.value}
            </div>
            <div className="mx-auto mt-3 max-w-[180px] text-[0.7rem] font-light uppercase leading-snug tracking-[0.16em] text-[#646973] sm:text-xs">
              {stat.label}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
