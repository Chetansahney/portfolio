import HeroSection from './components/HeroSection';
import MarqueeSection from './components/MarqueeSection';
import AboutSection from './components/AboutSection';
import StatsSection from './components/StatsSection';
import ExperienceSection from './components/ExperienceSection';
import ExpertiseSection from './components/ExpertiseSection';
import ProjectsSection from './components/ProjectsSection';
import AchievementsSection from './components/AchievementsSection';
import ContactSection from './components/ContactSection';

export default function App() {
  return (
    <main className="bg-[#0C0C0C]" style={{ overflowX: 'clip' }}>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <StatsSection />
      <ExperienceSection />
      <ExpertiseSection />
      <ProjectsSection />
      <AchievementsSection />
      <ContactSection />
    </main>
  );
}
