import type { Sourced } from './types';

interface SkillGroup {
  readonly label: string;
  readonly items: readonly string[];
}

// RESUME-SKILLS. A listed skill is not evidence that a given project used it,
// and no proficiency levels exist beyond the spoken-language labels.
export const skills = {
  sourceId: 'RESUME-SKILLS',
  groups: [
    {
      label: 'Languages',
      items: ['Python', 'C#', 'C', 'Java', 'JavaScript', 'TypeScript', 'SQL'],
    },
    {
      label: 'AI / Machine Learning',
      items: [
        'OpenAI API',
        'LLM Development',
        'Machine Learning',
        'AI Integration',
      ],
    },
    {
      label: 'Robotics / Simulation',
      items: [
        'ROS 2',
        'Unity',
        'ABB EGM',
        'RAPID',
        'RobotStudio',
        'VR Teleoperation',
        'Digital Twins',
      ],
    },
    {
      label: 'Web / Frameworks',
      items: ['React', 'Next.js', 'ASP.NET Core', 'HTML/CSS', 'PostgreSQL'],
    },
    {
      label: 'Testing / Tools',
      items: [
        'Vitest',
        'React Testing Library',
        'MSW',
        'Git',
        'GitHub',
        'Linux',
        'Microsoft Azure',
      ],
    },
    {
      label: 'Languages Spoken',
      items: ['English (Fluent)', 'Vietnamese (Conversational)'],
    },
  ],
} as const satisfies Sourced & { groups: readonly SkillGroup[] };
