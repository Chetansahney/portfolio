import FadeIn from './FadeIn';
import AnimatedText from './AnimatedText';
import { ContactButton } from './Buttons';
import { profile } from '../lib/data';

const decor = [
  {
    src: '/decor/moon.webp',
    className:
      'absolute top-[2%] left-[0%] w-[84px] sm:left-[2%] sm:top-[4%] sm:w-[150px] md:left-[1%] md:w-[150px] xl:left-[4%] xl:w-[210px]',
    delay: 0.1,
    x: -80,
  },
  {
    src: '/decor/orb.webp',
    className:
      'absolute bottom-[4%] left-[0%] w-[74px] sm:bottom-[8%] sm:left-[6%] sm:w-[130px] md:left-[3%] md:w-[150px] xl:left-[8%] xl:w-[180px]',
    delay: 0.25,
    x: -80,
  },
  {
    src: '/decor/lego.webp',
    className:
      'absolute top-[2%] right-[0%] w-[84px] sm:right-[2%] sm:top-[4%] sm:w-[150px] md:right-[1%] md:w-[150px] xl:right-[4%] xl:w-[210px]',
    delay: 0.15,
    x: 80,
  },
  {
    src: '/decor/cursor.webp',
    className:
      'absolute bottom-[4%] right-[0%] w-[86px] sm:bottom-[8%] sm:right-[6%] sm:w-[150px] md:right-[3%] md:w-[170px] xl:right-[8%] xl:w-[210px]',
    delay: 0.3,
    x: 80,
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen flex-col items-center justify-center px-5 py-24 sm:px-8 md:px-10 md:py-32"
      style={{ overflowX: 'clip' }}
    >
      {decor.map((item) => (
        <FadeIn
          key={item.src}
          delay={item.delay}
          duration={0.9}
          x={item.x}
          y={0}
          className={`${item.className} pointer-events-none z-0`}
        >
          <img
            src={item.src}
            alt=""
            className="w-full select-none opacity-60 sm:opacity-100"
            draggable={false}
          />
        </FadeIn>
      ))}

      <div className="relative z-10 flex w-full flex-col items-center gap-10 sm:gap-14 md:gap-16">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading text-center font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        <AnimatedText
          text={profile.about}
          className="max-w-[560px] text-center font-medium leading-relaxed text-[#D7E2EA]"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
        />
      </div>

      <FadeIn delay={0.2} y={20} className="relative z-10 mt-16 sm:mt-20 md:mt-24">
        <ContactButton href="#contact" />
      </FadeIn>
    </section>
  );
}
