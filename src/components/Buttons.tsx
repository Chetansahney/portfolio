import type { ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';

const gradient =
  'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)';

export function ContactButton({
  label = 'Contact Me',
  href,
  className = '',
}: {
  label?: string;
  href: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-block rounded-full px-8 py-3 text-xs font-medium uppercase tracking-widest text-white transition-transform duration-300 hover:scale-[1.03] sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base ${className}`}
      style={{
        background: gradient,
        boxShadow:
          '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
        outline: '2px solid #FFFFFF',
        outlineOffset: '-3px',
      }}
    >
      {label}
    </a>
  );
}

export function GhostButton({
  children,
  href,
  className = '',
}: {
  children: ReactNode;
  href: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] px-8 py-3 text-sm font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors duration-200 hover:bg-[#D7E2EA]/10 sm:px-10 sm:py-3.5 sm:text-base ${className}`}
    >
      {children}
    </a>
  );
}

export function LiveProjectButton({ href }: { href: string }) {
  return (
    <GhostButton href={href}>
      Live Project
      <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={2.5} />
    </GhostButton>
  );
}
