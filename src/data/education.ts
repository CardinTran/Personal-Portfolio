import type { Sourced } from './types';

// RESUME-EDUCATION. "May 2027" is printed without "expected" or "graduated";
// do not label it either way without owner clarification.
export const education = {
  sourceId: 'RESUME-EDUCATION',
  institution: 'Louisiana State University (LSU)',
  location: 'Baton Rouge, LA',
  date: 'May 2027',
  degree: 'Bachelor of Science in Computer Science',
  minor: 'Minor in Robotics Engineering',
  gpa: '3.842',
} as const satisfies Sourced & Record<string, string>;

export const coursework = {
  sourceId: 'RESUME-COURSEWORK',
  courses: [
    'Machine Learning and Data Analytics',
    'Artificial Intelligence',
    'LLM Development',
    'Assistive Robotics',
    'Advanced Data Structures',
    'Operating Systems',
    'Software Systems Development',
    'Database Systems',
    'Computer Organization and Design',
  ],
} as const satisfies Sourced & { courses: readonly string[] };
