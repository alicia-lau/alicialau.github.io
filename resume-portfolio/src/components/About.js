import React from 'react';
import IconGrid from './IconGrid';

const About = () => {
    return (
        <div className='my-8'>
            <h2 className='text-2xl font-bold mb-4 pt-'>About Me</h2>
            <div className="border-b-2 border-gray-300"></div> {/* Divider Line */}
            <p className='mt-4 text-lg text-gray-600'>
                Hi, I'm Alicia! Trained as a mechanical engineer and fueled by a passion for software engineering, I hold a Bachelor's of Science in Mechanical Engineering, complemented by a minor in Japanese from the University of Rochester.
                Embarking on a career path that melds rigorous engineering principles with cutting-edge software solutions, I have developed a profound enthusiasm for innovation and a commitment to lifelong learning.
                Now, as a dedicated software engineer at Capital One, where I completed the Technology Development Program (TDP) in February 2023, I apply a unique mix of disciplined engineering approach and creative problem-solving abilities.
            </p>
            <h2 className='text-2xl font-bold mb-4 pt-4'>Technologies and Skills</h2>
            <div className="border-b-2 border-gray-300"></div> {/* Divider Line */}
            <div className='pt-4'>
                <IconGrid />
            </div>
        </div>
    );
};

export default About;