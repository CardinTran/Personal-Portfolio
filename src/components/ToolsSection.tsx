import { coursework } from '../data/education';
import { skills } from '../data/skills';
import './ToolsSection.css';

export function ToolsSection() {
  return (
    <section className="sheet" aria-labelledby="tools-heading">
      <h2 id="tools-heading">02 · Tools &amp; study</h2>
      <div className="tools">
        <dl className="tools__list">
          {skills.groups.map((group) => (
            <div key={group.label} className="tools__row">
              <dt className="mono muted">{group.label}</dt>
              <dd>{group.items.join(', ')}</dd>
            </div>
          ))}
          <div className="tools__row">
            <dt className="mono muted">Relevant Coursework</dt>
            <dd>{coursework.courses.join(', ')}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
