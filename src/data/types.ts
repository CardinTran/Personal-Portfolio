/** Section IDs registered in docs/CONTENT.md. */
export type SourceId =
  | 'RESUME-IDENTITY'
  | 'RESUME-EDUCATION'
  | 'RESUME-COURSEWORK'
  | 'RESUME-MIKEGPT'
  | 'RESUME-TIGERRACING'
  | 'RESUME-SAFETY'
  | 'RESUME-WANDERER'
  | 'RESUME-VIRTUAL-TWIN'
  | 'RESUME-LEADERSHIP'
  | 'RESUME-SKILLS';

export interface Sourced {
  readonly sourceId: SourceId;
}

/** Date wording exactly as printed, e.g. `{ start: 'July 2025', end: 'Present' }`. */
export interface Period {
  readonly start: string;
  readonly end: string;
}

/**
 * A resume entry with bullets kept as source wording. Presentation rewrites
 * belong beside the component that uses them and must preserve this scope.
 */
export interface Entry extends Sourced {
  readonly id: string;
  readonly name: string;
  readonly role?: string;
  readonly period: Period;
  /** Right-column text under the date: a location or an affiliation. */
  readonly place?: string;
  /** Attribution printed in a project header, before any technology list. */
  readonly attribution?: string;
  readonly technologies?: readonly string[];
  readonly highlights: readonly string[];
}
