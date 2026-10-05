import { describe, expect, it } from 'vitest';
import { allEntryIds, chronology } from './chronology';

describe('chronology', () => {
  const placed = chronology.flatMap((group) =>
    group.entries.map((item) => item.entry.id),
  );

  it('places every resume entry exactly once', () => {
    expect([...placed].sort()).toEqual([...allEntryIds].sort());
  });

  it('groups each entry under the year its printed start date names', () => {
    for (const group of chronology) {
      for (const { entry } of group.entries) {
        expect(entry.period.start.endsWith(group.year)).toBe(true);
      }
    }
  });

  it('lists year groups newest first', () => {
    const years = chronology.map((group) => Number(group.year));
    expect(years).toEqual([...years].sort((a, b) => b - a));
  });
});
