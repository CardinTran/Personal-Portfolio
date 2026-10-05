import { chronology } from '../../data/chronology';
import { WorkEntry } from './WorkEntry';
import './Work.css';

export function WorkSection() {
  return (
    <section className="sheet" aria-labelledby="work-heading">
      <h2 id="work-heading">01 · Work</h2>
      <div>
        {chronology.map((group) => (
          <section
            key={group.year}
            className="year"
            aria-labelledby={`year-${group.year}`}
          >
            <h3 id={`year-${group.year}`} className="year__heading">
              {group.year}
            </h3>
            {group.entries.map((item) => (
              <WorkEntry key={item.entry.id} item={item} />
            ))}
          </section>
        ))}
      </div>
    </section>
  );
}
