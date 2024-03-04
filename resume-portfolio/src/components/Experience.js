import React from 'react';

const Experience = () => {
    const experiences = [
        {
            company: 'Capital One',
            totalDuration: '2020 - Present',
            roles: [
                {
                    position: 'Senior Associate Software Engineer',
                    duration: 'Feb 2022 - Present',
                    description: `
                        Provided CI/CD support using Git and GitHub for team-wide application configuration integration.
                        Managed infrastructure using Terraform for code-based provisioning.
                        Automated infrastructure provisioning and Docker deployment on AWS via OnePipeline.
                        Created and revised various configuration files, including Bogiefile, Gearsfile, Dockerfiles, and Jenkinsfiles.
                        Achieved AWS Solutions Architect Certification (May 16th, 2021).
                        Implemented NewRelic and Splunk for application performance monitoring, with email and Slack alerts for performance issues.
                    `
                },
                {
                    position: 'Associate Software Engineer',
                    duration: 'Feb 2021 - Feb 2022',
                    description: `
                        Provided CI/CD support using Git and GitHub for team-wide application configuration integration.
                        Managed infrastructure using Terraform for code-based provisioning.
                        Automated infrastructure provisioning and Docker deployment on AWS via OnePipeline.
                        Created and revised various configuration files, including Bogiefile, Gearsfile, Dockerfiles, and Jenkinsfiles.
                        Achieved AWS Solutions Architect Certification (May 16th, 2021).
                        Implemented NewRelic and Splunk for application performance monitoring, with email and Slack alerts for performance issues.
                    `
                },
                {
                    position: 'Capital One Developer Academy Associate',
                    duration: 'Aug 2020 - Feb 2021',
                    description: `
                        Developed single-page web applications using JavaScript (jQuery, Bootstrap), HTML/CSS, and RESTful patterns.
                        Created a fully-functional bubble shooter game with JavaScript and HTML/CSS.
                        Developed both non-relational and relational (SQL) databases; wrote SQL queries for data management.
                        Built a UI-friendly iOS lifestyle application using Swift, offering exercise and diet routines for registered users.
                        Integrated web APIs from third-party sites like Spoonacular.
                    `
                },
            ]
        },
        {
            company: 'Inatsuka Engineering LLC',
            totalDuration: 'July 2019 - August 2020',
            roles: [
                {
                    position: 'Mechanical Engineer',
                    duration: 'July 2019 - August 2020',
                    description: `
                        Designed and developed mechanical systems for commercial and residential buildings.
                        Created detailed CAD drawings for mechanical systems, including HVAC, plumbing, and fire protection.
                        Performed load calculations for heating and cooling systems.
                        Coordinated with architects and other engineers to ensure project success.
                    `
                }
            ]
        },
        {
            company: 'University of Rochester',
            totalDuration: 'August 2015 - May 2019',
            roles: [
                {
                    position: 'Mechanical Engineering Research Assistant',
                    duration: 'August 2018 - May 2019',
                    description: `
                        Conducted research on the mechanical properties of 3D-printed materials.
                        Designed and conducted experiments to test the mechanical properties of 3D-printed materials.
                        Analyzed data and presented findings to the research team.
                    `
                },
                {
                    position: 'Teaching Assistant',
                    duration: 'August 2016 - May 2019',
                    description: `
                        Assisted professors in grading assignments and exams.
                        Held office hours to help students with coursework.
                        Led review sessions for exams.
                    `
                }
            ]
        },
        {
            company: 'W.M. Keck Observatory',
            totalDuration: 'May 2018 - Aug 2018',
            roles: [
                {
                    position: 'Mechanical Engineering Intern',
                    duration: 'May 2018 - Aug 2018',
                    description: `
                        Designed and developed mechanical systems for the observatory.
                        Created detailed CAD drawings for mechanical systems.
                        Performed load calculations for mechanical systems.
                        Coordinated with other engineers to ensure project success.
                    `
                }
            ]
        },
    ];

    return (
        <div>
            {experiences.map((companyExp, companyIndex) => (
                <div key={companyIndex}>
                    <h2>{companyExp.company}</h2>
                    <p>Total Time Worked: {companyExp.totalDuration}</p>
                    {companyExp.roles.map((role, roleIndex) => (
                        <div key={roleIndex}>
                            <h3>{role.position}</h3>
                            <p>{role.duration}</p>
                            <ul>
                                {role.description.split('\n').map((line, lineIndex) => (
                                    line.trim() !== '' && <li key={lineIndex}>{line.trim()}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Experience;