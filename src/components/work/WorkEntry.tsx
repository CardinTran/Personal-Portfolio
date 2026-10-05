import type { ChronologyEntry } from '../../data/chronology';

interface WorkEntryProps {
  readonly item: ChronologyEntry;
}

export function WorkEntry({ item }: WorkEntryProps) {
  const { kind, entry, pending } = item;
  const context = [entry.role, entry.attribution, entry.place].filter(Boolean);

  return (
    <article className="entry" id={entry.id}>
      <div className="entry__meta">
        <p className="entry__kind mono muted">{kind}</p>
        <h4 className="entry__name">{entry.name}</h4>
        <p className="mono">
          {entry.period.start} – {entry.period.end}
        </p>
        {context.length > 0 && (
          <p className="mono muted">{context.join(' · ')}</p>
        )}
        {entry.technologies && (
          <p className="entry__stack mono">{entry.technologies.join(' · ')}</p>
        )}
        {pending?.repository && (
          <p className="placeholder-note mono">
            Placeholder · repository link to be added
          </p>
        )}
      </div>
      <div className="entry__body">
        <ul>
          {entry.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
        {pending?.visual && (
          <div className="placeholder-visual mono" role="note">
            Placeholder · project visual to be supplied
          </div>
        )}
      </div>
    </article>
  );
}
