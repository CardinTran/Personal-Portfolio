import type { Sourced } from './types';

interface ContactLink {
  readonly label: string;
  /** Visible resume text; the PDF's embedded hyperlink targets are placeholders. */
  readonly display: string;
  readonly href: string;
}

// RESUME-IDENTITY. Phone and home address are resume facts but are not
// shipped in the bundle until the owner chooses to publish them (D005).
export const identity = {
  sourceId: 'RESUME-IDENTITY',
  name: 'Cardin Tran',
  links: [
    {
      label: 'Email',
      display: 'ctran65@lsu.edu',
      href: 'mailto:ctran65@lsu.edu',
    },
    {
      label: 'LinkedIn',
      display: 'linkedin.com/in/cardin-tran-a307742ab',
      href: 'https://linkedin.com/in/cardin-tran-a307742ab',
    },
    {
      label: 'GitHub',
      display: 'github.com/CardinTran',
      href: 'https://github.com/CardinTran',
    },
  ],
} as const satisfies Sourced & {
  name: string;
  links: readonly ContactLink[];
};
