import FadeIn from './FadeIn';
import { expertise } from '../lib/data';

export default function ExpertiseSection() {
  return (
    <section
      className="relative rounded-t-[40px] bg-white px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
      style={{ overflowX: 'clip' }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="text-center font-black uppercase leading-none tracking-tight text-[#0C0C0C]"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Expertise
        </h2>
      </FadeIn>

      <div className="mx-auto mt-16 max-w-5xl sm:mt-20 md:mt-28">
        {expertise.map((item, i) => (
          <FadeIn
            key={item.name}
            delay={i * 0.1}
            y={30}
            className="border-t py-8 last:border-b sm:py-10 md:py-12"
            style={{ borderColor: 'rgba(12, 12, 12, 0.15)' }}
          >
            <div className="flex items-start gap-5 sm:gap-8 md:gap-12">
              <span
                className="shrink-0 font-black leading-none text-[#0C0C0C]"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>

              <div className="flex flex-col gap-2 pt-1 sm:gap-3 sm:pt-2">
                <h3
                  className="font-medium uppercase leading-tight text-[#0C0C0C]"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {item.name}
                </h3>
                <p
                  className="max-w-2xl font-light leading-relaxed text-[#0C0C0C]"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)', opacity: 0.6 }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
