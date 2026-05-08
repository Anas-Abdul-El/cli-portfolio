//-------------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------------
// > File: src/commands/commandsMsg.ts
// > All the commands messages are stored in this file
// > created by @anas-abdul-el
//-------------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------------

export const help = `
                Available commands:
              - help: Show this help message
              - whoami: Learn more about me
              - what-is-this: Learn more about this project
              - skills -ls: List my skills
              - projects -ls: List my projects
              - gui: Visit my GUI portfolio
              - github: Visit my GitHub profile
              - whatido: Learn more about what I do
              - clear: Clear the terminal history`;

export const commandNotFound = (cmd: string) => `command not found: ${cmd}`;

export const whoAmI =
  "Anas Abdul El, a passionate software developer with a love for learning and creating. I have experience in various programming languages and frameworks, and I'm always eager to take on new challenges and expand my skill set.";

export const whatIsThis =
  'This is a cli protofolio project built using React and TypeScript. It simulates a terminal interface where users can enter commands to learn more about me and my work. The project is designed to showcase my skills in web development and provide an interactive way for visitors to explore my portfolio.';

export const skillsLs = `Skills:
- Programming Languages: JavaScript, TypeScript, Java
- Frameworks & Libraries: React, Node.js, Express, Next.js, Tailwind CSS
- Databases: MongoDB, MySQL, redis
- Version Control: Git
- animation: Framer Motion
- Tools: Git, Docker, Webpack, jest, vitest`;

export const projectsLs = `Projects:
1. Portfolio Website: A personal website built with React and TypeScript to showcase my skills and projects.
3. E-commerce Platform: A full-featured e-commerce platform for selling shoes with real-time inventory management and seamless checkout experience.
4. Gym SAAS: A full-featured gym saas platform for managing gyms and clients with real-time inventory management and seamless checkout experience.
5. landing page: a landing page for a company that creates websites for businesses.
6. Notes App: Notic is a simple and responsive Notes Web App built with Next.js and Tailwind CSS, designed to help users easily create, organize, and manage their notes in a clean and intuitive interface.`;

export const redirectingMsg = (site: string) => `Redirecting to my ${site}...`;

export const whatIdo = `
 - Frontend Development: Building responsive and performant web applications with React, TypeScript, and modern frameworks.
 - UI/UX Design: Creating intuitive and user-friendly interfaces with a focus on usability and accessibility.
 - Backend Development: Creating robust and scalable server-side applications with Node.js and Express.
 - Performance: Optimizing load times and runtime performance for seamless user experiences.
 - Modern Tools: Leveraging the latest tools and technologies to build cutting-edge solutions.
 - Continuous Learning: Staying up-to-date with industry trends and continuously improving my skills through learning and experimentation.`;
