import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { orgLogos, stackLogos } from '../lib/data';

/** Copies of each set laid end to end. Four is enough that both rows stay
 *  covered edge-to-edge at any viewport while they travel. */
const COPIES = 4;

/** How much of one set each row travels over the section's visible life.
 *  Comfortably over 1 so every logo clears the viewport rather than merely
 *  straddling an edge. Verified at 390 / 768 / 1440 / 2560 wide. */
const TRAVEL = 1.45;

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  const [progress, setProgress] = useState(0);
  const [setWidths, setSetWidths] = useState({ a: 0, b: 0 });

  const measure = useCallback(() => {
    setSetWidths({
      a: (row1Ref.current?.scrollWidth ?? 0) / COPIES,
      b: (row2Ref.current?.scrollWidth ?? 0) / COPIES,
    });
  }, []);

  useLayoutEffect(() => {
    measure();
    const ro = new ResizeObserver(measure);
    if (row1Ref.current) ro.observe(row1Ref.current);
    if (row2Ref.current) ro.observe(row2Ref.current);
    return () => ro.disconnect();
  }, [measure]);

  useEffect(() => {
    // Progress 0 -> 1 as the section crosses the viewport, so the rows always
    // complete their travel no matter how tall the section or the screen is.
    const onScroll = () => {
      const node = sectionRef.current;
      if (!node) return;
      const { top, height } = node.getBoundingClientRect();
      const span = window.innerHeight + height;
      const p = (window.innerHeight - top) / span;
      setProgress(Math.min(1, Math.max(0, p)));
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const orgs = Array.from({ length: COPIES }, () => orgLogos).flat();
  const stack = Array.from({ length: COPIES }, () => stackLogos).flat();

  // Row 1 drifts right, row 2 drifts left; both start parked far enough in that
  // neither edge ever runs out of tiles.
  const x1 = -setWidths.a * (2 - TRAVEL * progress);
  const x2 = -setWidths.b * (1 + TRAVEL * progress);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0C0C0C] pb-10 pt-24 sm:pt-32 md:pt-40"
      style={{ overflowX: 'clip' }}
    >
      <div className="mb-8 px-5 sm:px-8 md:px-10">
        <p className="text-xs font-light uppercase tracking-[0.34em] text-[#646973] sm:text-sm">
          Teams, orgs and tools I have shipped with
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <div
          ref={row1Ref}
          className="flex w-max gap-3"
          style={{ transform: `translateX(${x1}px)`, willChange: 'transform' }}
        >
          {orgs.map((logo, i) => (
            <div
              key={`org-${i}`}
              className={`logo-plate h-[130px] w-[240px] shrink-0 rounded-2xl sm:h-[150px] sm:w-[280px] ${logo.pad}`}
              title={logo.alt}
            >
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>

        <div
          ref={row2Ref}
          className="flex w-max gap-3"
          style={{ transform: `translateX(${x2}px)`, willChange: 'transform' }}
        >
          {stack.map((logo, i) => (
            <div
              key={`stack-${i}`}
              className="flex h-[130px] w-[130px] shrink-0 items-center justify-center rounded-2xl border border-[#D7E2EA]/10 bg-[#D7E2EA]/[0.03] p-9 sm:h-[150px] sm:w-[150px]"
              title={logo.alt}
            >
              <img src={logo.src} alt={logo.alt} className="h-full w-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
