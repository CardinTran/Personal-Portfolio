import type { Entry } from './types';

// Resume order. The Wanderer and the Virtual Twin project are separate entries;
// do not merge their accomplishments without owner clarification.
export const projects = [
  {
    // "For Performance Contractors" does not establish employment or deployment.
    sourceId: 'RESUME-SAFETY',
    id: 'ai-safety-reporting-assistant',
    name: 'AI Safety Reporting Assistant',
    period: { start: 'Jan. 2026', end: 'May 2026' },
    technologies: [
      'React/Next.js',
      'ASP.NET Core',
      'C#',
      'PostgreSQL',
      'OpenAI API',
    ],
    highlights: [
      'Developed an AI-powered safety reporting assistant for Performance Contractors to help interpret incident reports and generate risk-focused safety insights.',
      'Built a full-stack application using React/Next.js, ASP.NET Core/C#, PostgreSQL, and OpenAI integration to support structured report intake, analysis, and response generation.',
    ],
  },
  {
    sourceId: 'RESUME-WANDERER',
    id: 'the-wanderer',
    name: 'The Wanderer – ABB GoFa',
    period: { start: '2026', end: 'Present' },
    attribution: 'RISE Lab, LSU',
    technologies: ['Unity', 'C#', 'ABB EGM', 'RobotStudio', 'RAPID', 'UDP'],
    highlights: [
      'Developed a Unity-to-ABB GoFa integration layer that translates virtual robot motion into Cartesian targets for real-time control through ABB Externally Guided Motion (EGM).',
      'Implemented coordinate transformations, quaternion handling, workspace validation, and UDP communication in C# to safely map Unity world poses to ABB robot poses.',
      'Integrated Unity with an ABB GoFa virtual controller in RobotStudio by adapting RAPID and EGM communication workflows for virtual-to-physical robot control and digital-twin research.',
    ],
  },
  {
    // Attribution does not establish NASA employment, a grant, or publication.
    sourceId: 'RESUME-VIRTUAL-TWIN',
    id: 'robotics-virtual-twin',
    name: 'Robotics Virtual Twin Research Project',
    period: { start: 'Jan. 2026', end: 'Present' },
    attribution: 'RISE Lab, LSU / NASA Research Project',
    highlights: [
      'Developed a robotic digital twin platform linking a physical robot with a Unity-based virtual environment and VR interface, enabling real-time robot visualization, control, and testing.',
      'Contributed to active localization and remote-operation research by integrating robotics hardware, sensor feedback, and simulation tools to support NASA-focused robotic exploration use cases.',
    ],
  },
] as const satisfies readonly Entry[];
