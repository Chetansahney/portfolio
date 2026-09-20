import { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { Github } from 'lucide-react';
import FadeIn from './FadeIn';
import { LiveProjectButton } from './Buttons';
import { projects, type Project } from '../lib/data';

function Card({
  project,
  index,
  total,
  progress,
}: {
  project: Project;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(progress, [index * (1 / total), 1], [1, targetScale]);

  return (
    <div className="sticky top-24 flex h-[85vh] items-start justify-center md:top-32">
      <motion.div
        style={{ scale, top: `${index * 28}px` }}
        className="relative w-full rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8"
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-8">
          <span
            className="hero-heading shrink-0 font-black leading-none"
            style={{ fontSize: 'clamp(2.6rem, 8vw, 116px)' }}
          >
            {String(index + 1).padStart(2, '0')}
          </span>

          <div className="flex-1">
            <div className="text-[0.65rem] font-light uppercase tracking-[0.28em] text-[#646973] sm:text-xs">
              {project.category}
            </div>
            <h3
              className="mt-1 font-medium uppercase leading-none text-[#D7E2EA]"
              style={{ fontSize: 'clamp(1.4rem, 3.4vw, 2.8rem)' }}
            >
              {project.name}
            </h3>
            <p
              className="mt-3 max-w-2xl font-light leading-relaxed text-[#D7E2EA]/55"
              style={{ fontSize: 'clamp(0.78rem, 1.25vw, 1rem)' }}
            >
              {project.blurb}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.metrics.map((metric) => (
                <span
                  key={metric}
                  className="rounded-full border border-[#D7E2EA]/20 px-3 py-1 text-[0.62rem] font-light uppercase tracking-[0.14em] text-[#BBCCD7] sm:text-[0.7rem]"
                >
                  {metric}
                </span>
              ))}
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-3">
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.name} on GitHub`}
              className="grid h-11 w-11 place-items-center rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] transition-colors duration-200 hover:bg-[#D7E2EA]/10 sm:h-12 sm:w-12"
            >
              <Github className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={2} />
            </a>
            <LiveProjectButton href={project.live} />
          </div>
        </div>

        <div className="mt-5 flex gap-3 sm:mt-6 sm:gap-4">
          <div className="flex w-[40%] flex-col gap-3 sm:gap-4">
            <img
              src={project.col1[0]}
              alt=""
              loading="lazy"
              className="w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: 'clamp(90px, 12vw, 180px)' }}
            />
            <img
              src={project.col1[1]}
              alt=""
              loading="lazy"
              className="w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: 'clamp(110px, 16vw, 250px)' }}
            />
          </div>
          <div className="w-[60%]">
            <img
              src={project.col2}
              alt=""
              loading="lazy"
              className="w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: 'clamp(212px, 28.75vw, 442px)' }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      id="work"
      className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 pb-32 pt-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:pb-40 sm:pt-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:pt-32"
      style={{ overflowX: 'clip' }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading text-center font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Work
        </h2>
      </FadeIn>

      <div ref={container} className="mx-auto mt-10 max-w-6xl sm:mt-14">
        {projects.map((project, i) => (
          <Card
            key={project.name}
            project={project}
            index={i}
            total={projects.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}
