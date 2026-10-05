import { education, graduationStatus } from '../data/education';
import { identity } from '../data/identity';
import { FramesDiagram } from './frames/FramesDiagram';
import { ContactLinks } from './ContactLinks';
import './Hero.css';

// Statement sources: RESUME-VIRTUAL-TWIN 1, RESUME-WANDERER 1 (robots and
// virtual environments); RESUME-MIKEGPT 1, RESUME-SAFETY 1 (AI interfaces).
const STATEMENT =
  'I build software that links physical robots to virtual environments, and interfaces for AI systems.';

export function Hero() {
  return (
    <header className="hero">
      <div className="hero__intro">
        <h1 className="hero__name">{identity.name}</h1>
        <p className="hero__statement">{STATEMENT}</p>
        <dl className="hero__facts mono">
          <dt className="muted">Study</dt>
          <dd>
            {education.degree}, {education.minor}
          </dd>
          <dt className="muted">School</dt>
          <dd>
            {education.institution} · {graduationStatus.label} {education.date}
          </dd>
          <dt className="muted">GPA</dt>
          <dd>{education.gpa}</dd>
          <dt className="muted">Contact</dt>
          <dd>
            <ContactLinks />
          </dd>
        </dl>
      </div>
      <FramesDiagram />
    </header>
  );
}
