import React from 'react';

const Projects = () => {
    const projects = [
        {
            title: 'Project 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            technologies: ['React', 'JavaScript', 'CSS'],
            githubLink: 'https://github.com/your-username/project-1',
            liveDemoLink: 'https://your-username.github.io/project-1',
        },
        {
            title: 'Project 2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            technologies: ['React', 'JavaScript', 'CSS'],
            githubLink: 'https://github.com/your-username/project-2',
            liveDemoLink: 'https://your-username.github.io/project-2',
        },
        // Add more projects here
    ];

    return (
        <div>
            <h2>Projects</h2>
            {projects.map((project, index) => (
                <div key={index}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <ul>
                        {project.technologies.map((technology, index) => (
                            <li key={index}>{technology}</li>
                        ))}
                    </ul>
                    <div>
                        <a href={project.githubLink}>GitHub</a>
                        <a href={project.liveDemoLink}>Live Demo</a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Projects;