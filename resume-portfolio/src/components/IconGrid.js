import React from 'react';
import { FaReact, FaVuejs, FaAngular, FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaBootstrap, FaServer, FaCode } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiMongodb, SiAmazonaws, SiPython, SiJira, SiPostman, SiPostgresql, SiDocker, SiGit, SiGithub } from 'react-icons/si';

const icons = [
  { component: FaReact, text: 'React' },
  { component: SiTypescript, text: 'TypeScript' },
  { component: FaVuejs, text: 'Vue.js' },
  { component: FaAngular, text: 'Angular' },
  { component: FaHtml5, text: 'HTML' },
  { component: FaCss3Alt, text: 'CSS' },
  { component: FaJsSquare, text: 'JavaScript' },
  { component: SiTailwindcss, text: 'Tailwind CSS' },
  { component: FaBootstrap, text: 'Bootstrap' },
  { component: SiMongodb, text: 'MongoDB' },
  { component: SiPostgresql, text: 'Postgres' },
  { component: FaNodeJs, text: 'Node.js' },
  { component: FaServer, text: 'Express' },
  { component: SiPostman, text: 'Postman' },
  { component: SiGit, text: 'Git' },
  { component: SiGithub, text: 'GitHub'},
  { component: SiJira, text: 'Jira' }, // Icon for Agile/Jira
  { component: SiPython, text: 'Python' }, // Icon for Python
  { component: SiAmazonaws, text: 'AWS' }, // Icon for AWS
  { component: FaCode, text: 'VSCode' }, // Icon for VSCode
  { component: SiDocker, text: 'Docker' } // Icon for Docker
];

function IconGrid() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {icons.map((icon, index) => (
        <div key={index} className="flex flex-col items-center">
          <icon.component size={48} />
          <span className="mt-2">{icon.text}</span>
        </div>
      ))}
    </div>
  );
}

export default IconGrid;
