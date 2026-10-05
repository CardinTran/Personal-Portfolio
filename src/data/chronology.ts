import { experience, leadership } from './experience';
import { projects } from './projects';
import type { Entry } from './types';

/** Resume section an entry is printed under. */
export type Kind = 'Experience' | 'Project' | 'Leadership';

/**
 * Pending owner assets (OWNER-2026-10-05, item 3). Rendered as labelled
 * placeholders; no URL or visual has been supplied yet.
 */
export interface PendingAssets {
  readonly visual: boolean;
  readonly repository: boolean;
}

export interface ChronologyEntry {
  readonly kind: Kind;
  readonly entry: Entry;
  readonly pending?: PendingAssets;
}

export interface YearGroup {
  readonly year: string;
  readonly entries: readonly ChronologyEntry[];
}

const byId = new Map<string, ChronologyEntry>([
  ...experience.map(
    (entry) => [entry.id, { kind: 'Experience', entry }] as const,
  ),
  ...projects.map(
    (entry) =>
      [
        entry.id,
        { kind: 'Project', entry, pending: { visual: true, repository: true } },
      ] as const,
  ),
  ...leadership.map(
    (entry) => [entry.id, { kind: 'Leadership', entry }] as const,
  ),
]);

// D006: newest start year first. Within 2026, ongoing robotics and AI work
// leads; this order does not assert start order ("2026 – Present" has no month).
const order = [
  {
    year: '2026',
    ids: [
      'the-wanderer',
      'robotics-virtual-twin',
      'mikegpt',
      'ai-safety-reporting-assistant',
    ],
  },
  { year: '2025', ids: ['tigerracing'] },
  { year: '2021', ids: ['rising-dragon'] },
] as const;

export const chronology: readonly YearGroup[] = order.map(({ year, ids }) => ({
  year,
  entries: ids.map((id) => {
    const item = byId.get(id);
    if (!item) throw new Error(`Unknown chronology entry: ${id}`);
    return item;
  }),
}));

/** Every source entry, for completeness checks. */
export const allEntryIds: readonly string[] = [...byId.keys()];
