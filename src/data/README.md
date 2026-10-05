# Approved application content

Every resume section is instantiated as typed records because every candidate design presents the same facts:

| File            | Records                                                   | Source IDs                                                      |
| --------------- | --------------------------------------------------------- | --------------------------------------------------------------- |
| `identity.ts`   | Name and published contact links                          | `RESUME-IDENTITY`                                               |
| `education.ts`  | Degree, minor, date, GPA; Expected label; coursework      | `RESUME-EDUCATION`, `OWNER-2026-10-05`, `RESUME-COURSEWORK`     |
| `experience.ts` | Experience entries; leadership                            | `RESUME-MIKEGPT`, `RESUME-TIGERRACING`, `RESUME-LEADERSHIP`     |
| `projects.ts`   | Projects and research, in resume order                    | `RESUME-SAFETY`, `RESUME-WANDERER`, `RESUME-VIRTUAL-TWIN`       |
| `skills.ts`     | Skill groups as printed                                   | `RESUME-SKILLS`                                                 |
| `chronology.ts` | Year-grouped presentation order and pending assets (D006) | IDs from the records above; `OWNER-2026-10-05` for placeholders |
| `types.ts`      | `SourceId`, `Entry`, and `Period` shared types            | —                                                               |

`highlights` hold resume bullets verbatim. Dates are stored exactly as printed (`'Jan. 2026'`, `'Present'`), never parsed into date objects. Phone and home address are deliberately absent (D005). Do not add empty schemas for content the resume does not supply.

Keep factual values and their provenance here, separate from presentation. Use stable source IDs from `docs/CONTENT.md` per record; add finer passage/bullet references when a record combines claims. Fields may be omitted when unknown. Keep source wording and presentation copy distinguishable when rewriting. Never treat a record's TypeScript validity as proof of truth.

Components render approved data; they do not infer achievements. Metadata and alt text are subject to the same rules. Changes to data and the content ledger should be reviewed together. Preserve date wording such as “Present” and ambiguous project attribution instead of deriving unsupported current status, employers, or credentials.
