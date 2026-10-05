import { Hero } from './components/Hero';
import { SiteFooter } from './components/SiteFooter';
import { ToolsSection } from './components/ToolsSection';
import { WorkSection } from './components/work/WorkSection';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to work
      </a>
      <Hero />
      <main id="main" tabIndex={-1}>
        <WorkSection />
        <ToolsSection />
      </main>
      <SiteFooter />
    </>
  );
}
