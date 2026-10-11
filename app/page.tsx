import { Nav } from '@/components/layout/Nav';
import { HeroSection } from '@/components/album/Hero';
import { WorkSection } from '@/components/album/Work';
import { ProjectsSection } from '@/components/album/Projects';
import { AboutSection } from '@/components/album/About';
import { ContactSection } from '@/components/album/Contact';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <HeroSection />
        <WorkSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </main>
    </>
  );
}
