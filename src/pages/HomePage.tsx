import { AboutPage } from './AboutPage';
import { ContactPage } from './ContactPage';
import { ProjectSection } from './ProjectsPage';

export function HomePage() {
  return (
    <>
      <AboutPage />
      <ProjectSection />
      <ContactPage principal={false} />
    </>
  );
}
