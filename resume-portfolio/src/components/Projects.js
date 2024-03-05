import React from 'react';

const Projects = () => {
    const projects = [
        {
            title: 'Project 1',
            description: 'This is the first project.',
            technologies: ['React', 'JavaScript', 'HTML', 'CSS'],
        },
        {
            title: 'Project 2',
            description: 'This is the second project.',
            technologies: ['Node.js', 'Express', 'MongoDB'],
        },
        {
            title: 'Project 3',
            description: 'This is the third project.',
            technologies: ['Vue.js', 'Firebase'],
        },
    ];

    return (
        <div>
            <h2>My Projects</h2>
            {projects.map((project, index) => (
                <div key={index}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <ul>
                        {project.technologies.map((technology, index) => (
                            <li key={index}>{technology}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Projects;