# Portfolio factual content

> This document is the canonical factual source for portfolio content. Information displayed on the portfolio must be supported by this document or another explicitly approved source in the repository. Never invent missing personal information.

The resume remains the ultimate authority if this document and the resume conflict. This file is a structured extraction, not a license to expand claims.

## Source registry and provenance

- **RESUME:** `docs/Sep18 Resume Mark1.pdf`, page 1, supplied by the owner in the initial repository commit `7550b7b`. Full text extracted and checked against a rendered page during setup. Whitespace and PDF glyph extraction artifacts are normalized below; wording and factual scope are preserved.
- No additional biographical sources are approved. To add one, record its source ID, repository path, relevant passages/claim scope, owner approval reference/date, and relationship to the resume. Merely adding a file or discovering information online is not approval. Conflicts require owner resolution; an agent cannot silently override the resume.
- Each `RESUME-*` ID below denotes the corresponding page-1 section or entry. Application records cite these IDs, with bullet numbers if useful.

The filename does not establish a resume year or freshness date. “Present” is retained exactly as source wording, not independently verified current status. Education date wording is retained without asserting a completed degree. Skills listed generally are not evidence that a specific project used them. Do not infer proficiency levels beyond the explicit spoken-language labels.

## Identity and contact — RESUME-IDENTITY

- Name: Cardin Tran
- Location: Harvey, LA 70058
- Phone: (504)261-7446
- Email (visible text): ctran65@lsu.edu
- LinkedIn (visible text): linkedin.com/in/cardin-tran-a307742ab
- GitHub (visible text): github.com/CardinTran

**Link discrepancy:** the PDF's embedded hyperlink targets are `mailto:x@gmail.com`, `https://linkedin.com/in//`, and `https://github.com/`. They are placeholders inconsistent with the visible text. Use the visible addresses above if implementing links (`mailto:` for the displayed email and `https://` for the displayed web addresses). Do not copy the embedded targets or claim the destinations have been verified live. The phone/location are available facts, not requirements to publish every contact detail.

## Professional positioning

No standalone tagline or professional summary appears in the resume. Select positioning from supported roles and work below; do not invent seniority, specialization, years of experience, or a new job title. The portfolio's intended software engineering, AI, and robotics scope is a presentation direction; concrete claims must still cite the entries below.

## Education — RESUME-EDUCATION

- Institution/location: Louisiana State University (LSU), Baton Rouge, LA
- Date as written: May 2027
- Degree/minor as written: Bachelor of Science in Computer Science, Minor in Robotics Engineering
- GPA: 3.842

The resume does not explicitly label May 2027 as “expected” or “graduated.” Preserve its wording or request clarification when a status label is required.

### Relevant coursework — RESUME-COURSEWORK

Machine Learning and Data Analytics, Artificial Intelligence, LLM Development, Assistive Robotics, Advanced Data Structures, Operating Systems, Software Systems Development, Database Systems, Computer Organization and Design.

## Experience

### MikeGPT — RESUME-MIKEGPT

- Role: Frontend Software Engineer Intern
- Dates: June 2026 – Present
- Associated text under the date: Louisiana State University

1. Develop and maintain React interfaces for an AI/LLM platform, building reusable workflows for chat, agent configuration, administrative tools, skills, resources, databases, and file management.
2. Built frontend integration testing infrastructure with Vitest, React Testing Library, and MSW, covering APIs, authentication, routing, state transitions, and core user workflows.
3. Implemented real-time LLM streaming interfaces for tool execution and search sources, displaying interactive progress, source previews, and streamed responses.

Preserve the MikeGPT/LSU association as written; do not invent a separate company, employment arrangement, product URL, user count, or performance result.

### LSU TigerRacing FSAE — RESUME-TIGERRACING

- Role: Team Member
- Dates: July 2025 – Present
- Location: Baton Rouge, LA

1. Develop and maintain a React-based internal platform supporting member management, task tracking, and project coordination for a 60+ member Formula SAE organization.
2. Collaborate with engineering team leads to translate operational requirements into scalable software features, using Git and GitHub for version control and team-based development.

The 60+ figure describes organization membership, not software users, development-team size, or people managed by Cardin.

## Projects and research

### AI Safety Reporting Assistant — RESUME-SAFETY

- Dates: Jan. 2026 – May 2026
- Header technologies: React/Next.js, ASP.NET Core, C#, PostgreSQL, OpenAI API

1. Developed an AI-powered safety reporting assistant for Performance Contractors to help interpret incident reports and generate risk-focused safety insights.
2. Built a full-stack application using React/Next.js, ASP.NET Core/C#, PostgreSQL, and OpenAI integration to support structured report intake, analysis, and response generation.

“For Performance Contractors” does not establish employment, commercial deployment, revenue, adoption, or measured safety outcomes.

### The Wanderer – ABB GoFa — RESUME-WANDERER

- Dates: 2026 – Present
- Header attribution/technologies as written: RISE Lab, LSU / Unity, C#, ABB EGM, RobotStudio, RAPID, UDP

1. Developed a Unity-to-ABB GoFa integration layer that translates virtual robot motion into Cartesian targets for real-time control through ABB Externally Guided Motion (EGM).
2. Implemented coordinate transformations, quaternion handling, workspace validation, and UDP communication in C# to safely map Unity world poses to ABB robot poses.
3. Integrated Unity with an ABB GoFa virtual controller in RobotStudio by adapting RAPID and EGM communication workflows for virtual-to-physical robot control and digital-twin research.

Do not upgrade virtual-controller integration into an unsupported physical deployment, safety certification, or quantitative latency/accuracy result.

### Robotics Virtual Twin Research Project — RESUME-VIRTUAL-TWIN

- Dates: Jan. 2026 – Present
- Header attribution as written: RISE Lab, LSU / NASA Research Project

1. Developed a robotic digital twin platform linking a physical robot with a Unity-based virtual environment and VR interface, enabling real-time robot visualization, control, and testing.
2. Contributed to active localization and remote-operation research by integrating robotics hardware, sensor feedback, and simulation tools to support NASA-focused robotic exploration use cases.

Preserve the attribution; it does not establish NASA employment, a grant, publication, mission deployment, or principal-investigator responsibility. Do not infer that this and The Wanderer are the same project or combine accomplishments without owner clarification.

## Leadership / extracurricular — RESUME-LEADERSHIP

### Rising Dragon Lion Dance Team

- Role: Head Captain
- Dates: Dec. 2021 – Present
- Location: Marrero, LA

1. Lead and coordinate a 42-member performance team, overseeing practices, training, and execution across frequent community, cultural, and private events.
2. Serve as the primary client liaison, managing scheduling, expectations, and logistics for weddings and festivals while directing real-time coordination during live performances (300+ volunteer hours).

The 42-member team and 300+ volunteer hours are supported here; they must not be reassigned to engineering work.

## Technical skills — RESUME-SKILLS

- Languages: Python, C#, C, Java, JavaScript, TypeScript, SQL
- AI / Machine Learning: OpenAI API, LLM Development, Machine Learning, AI Integration
- Robotics / Simulation: ROS 2, Unity, ABB EGM, RAPID, RobotStudio, VR Teleoperation, Digital Twins
- Web / Frameworks: React, Next.js, ASP.NET Core, HTML/CSS, PostgreSQL
- Testing / Tools: Vitest, React Testing Library, MSW, Git, GitHub, Linux, Microsoft Azure
- Languages Spoken: English (Fluent), Vietnamese (Conversational)

## Writing and omission rules

Strengthen clarity, confidence, hierarchy, and storytelling without adding scale, outcomes, responsibility, technologies, or complexity. A rewrite of “Implemented frontend integration tests” to “Built frontend integration tests” preserves scope; “Built enterprise infrastructure improving reliability by 40% across thousands of users” introduces unsupported facts. Even “critical workflows” or “infrastructure” requires source support. The MikeGPT entry actually supplies infrastructure and workflow detail; cite that entry when using it.

Numbers explicitly available here: GPA 3.842, 60+ organization members, 42-member performance team, 300+ volunteer hours, and the stated dates/contact values. Treat all other quantitative claims as unsupported unless supplied by an approved new source. Keep qualifiers such as “+” intact.

Publications, awards, certifications, project/demo/repository URLs, project screenshots, logos, research grants, revenue, user counts, and performance metrics are not supplied. Omit those claims; this absence does not mean the owner has none. No proficiency ratings, graduation status, project relationships, or missing dates should be guessed.
