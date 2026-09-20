import { useState } from 'react';
import { Check, Copy, Github, Linkedin, Mail, MapPin } from 'lucide-react';
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
  const [copied, setCopied] = useState(false);

  /* mailto: does nothing on a machine with no mail client configured, which is
     most people on Windows. Copying the address always works. */
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
    } catch {
      // Clipboard API needs a secure context; fall back to a temporary selection.
      const field = document.createElement('textarea');
      field.value = profile.email;
      field.setAttribute('readonly', '');
      field.style.position = 'fixed';
      field.style.opacity = '0';
      document.body.appendChild(field);
      field.select();
      document.execCommand('copy');
      document.body.removeChild(field);
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer
      id="contact"
      className="relative z-20 bg-[#0C0C0C] px-5 pb-12 pt-16 sm:px-8 sm:pt-20 md:px-10 md:pt-28"
      style={{ overflowX: 'clip' }}
    >
      {/* Full width, not inside the max-w-6xl column: at 13vw the wordmark is
          wider than 1152px and the container was clipping the final letters. */}
      <div className="overflow-hidden">
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading w-full whitespace-nowrap text-center text-[13vw] font-black uppercase leading-none tracking-tight">
            let&apos;s build it
          </h2>
        </FadeIn>
      </div>

      <div className="mx-auto max-w-6xl">
        <FadeIn delay={0.15} y={24} className="mt-10 flex flex-col items-center gap-6 sm:mt-14">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 font-light text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70"
              style={{ fontSize: 'clamp(0.95rem, 2vw, 1.5rem)' }}
            >
              <Mail className="h-5 w-5 shrink-0" strokeWidth={1.5} />
              {profile.email}
            </a>

            <button
              type="button"
              onClick={copyEmail}
              aria-label="Copy email address"
              className="inline-flex items-center gap-2 rounded-full border border-[#D7E2EA]/25 px-4 py-2 text-[0.65rem] font-light uppercase tracking-[0.18em] text-[#BBCCD7] transition-colors duration-200 hover:bg-[#D7E2EA]/10 sm:text-xs"
            >
              {copied ? (
                <Check className="h-3.5 w-3.5" strokeWidth={2} />
              ) : (
                <Copy className="h-3.5 w-3.5" strokeWidth={2} />
              )}
              {copied ? 'Copied' : 'Copy'}
            </button>
          </div>

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
