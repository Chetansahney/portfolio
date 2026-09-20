import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import FadeIn from './FadeIn';
import { ContactButton, GhostButton } from './Buttons';
import { links, profile } from '../lib/data';

const platforms = [
  { src: '/logos/leetcode.svg', label: 'LeetCode', href: links.leetcode },
  { src: '/logos/codeforces.svg', label: 'Codeforces', href: links.codeforces },
  { src: '/logos/codechef.svg', label: 'CodeChef', href: links.codechef },
  { src: '/logos/kaggle.svg', label: 'Kaggle', href: links.kaggle },
];

export default function ContactSection() {
  return (
    <footer
      id="contact"
      className="relative bg-[#0C0C0C] px-5 pb-12 pt-16 sm:px-8 sm:pt-20 md:px-10 md:pt-28"
      style={{ overflowX: 'clip' }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="overflow-hidden">
          <FadeIn delay={0} y={40}>
            <h2 className="hero-heading w-full whitespace-nowrap text-center text-[13vw] font-black uppercase leading-none tracking-tight">
              let&apos;s build it
            </h2>
          </FadeIn>
        </div>

        <FadeIn delay={0.15} y={24} className="mt-10 flex flex-col items-center gap-6 sm:mt-14">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-3 font-light text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70"
            style={{ fontSize: 'clamp(0.95rem, 2vw, 1.5rem)' }}
          >
            <Mail className="h-5 w-5 shrink-0" strokeWidth={1.5} />
            {profile.email}
          </a>

          <div className="flex items-center gap-2 text-xs font-light uppercase tracking-[0.24em] text-[#646973] sm:text-sm">
            <MapPin className="h-4 w-4" strokeWidth={1.5} />
            {profile.location}
          </div>

          <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
            <GhostButton href={links.github}>
              <Github className="h-4 w-4" strokeWidth={2} />
              GitHub
            </GhostButton>
            <GhostButton href={links.linkedin}>
              <Linkedin className="h-4 w-4" strokeWidth={2} />
              LinkedIn
            </GhostButton>
            <ContactButton label="Email Me" href={`mailto:${profile.email}`} />
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {platforms.map((platform) => (
              <a
                key={platform.label}
                href={platform.href}
                target="_blank"
                rel="noreferrer"
                title={platform.label}
                className="grid h-12 w-12 place-items-center rounded-2xl border border-[#D7E2EA]/12 bg-[#D7E2EA]/[0.03] p-3 transition-colors duration-200 hover:bg-[#D7E2EA]/10"
              >
                <img src={platform.src} alt={platform.label} className="h-full w-full object-contain" />
              </a>
            ))}
          </div>
        </FadeIn>

        <div className="mt-16 flex flex-col items-center gap-2 border-t border-[#D7E2EA]/10 pt-8 text-center text-[0.65rem] font-light uppercase tracking-[0.22em] text-[#646973] sm:flex-row sm:justify-between sm:text-xs">
          <span>{profile.name}</span>
          <span>{profile.role} · Delhi, India</span>
        </div>
      </div>
    </footer>
  );
}
