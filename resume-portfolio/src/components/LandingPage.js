import React from 'react';
import { FaLinkedin, FaGithub, FaPhoneAlt, FaFileAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const LandingPage = () => {
    return (
        <div className="flex items-center justify-between">
            <div>
                <div class="text-4xl font-bold mb-4 typing-animation border-r-2 overflow-hidden whitespace-nowrap ...">
                   > Alicia Lau
                </div>

                {/* <h1 className="text-4xl font-bold mb-4">Alicia Lau</h1> */}
                <div className="flex space-x-4 mb-4">
                    {/* LinkedIn Icon */}
                    <a href="https://www.linkedin.com/in/alicia-lau-077359109/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-grey-600 hover:text-blue-800 text-3xl" />
                    </a>

                    {/* GitHub Icon */}
                    <a href="https://github.com/alicia-lau" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-gray-800 hover:text-black text-3xl" />
                    </a>

                    {/* Email Icon */}
                    <a href="mailto:alicialau97@gmail.com">
                        <MdEmail className="text-gray-800 hover:text-black text-3xl" />
                    </a>

                    {/* Phone Icon */}
                    <a href="tel:+">
                        <FaPhoneAlt className="text-gray-800 hover:text-black text-3xl" />
                    </a>

                    {/* Resume Icon */}
                    <a href="https://drive.google.com/file/d/15Oz2OyeRkWrByjML9a2klICNYoyffvFn/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        <FaFileAlt className="text-gray-800 hover:text-black text-3xl" />
                    </a>

                </div>
                <p className="text-xl mb-8">A former mechanical engineer turned full stack software engineer at Capital One, I bring a blend of technical diversity, a passion for learning, and creativity to the evolving tech landscape.</p>
            </div>
            <div>
                {/* <img src={MySvg} alt="Description of SVG" /> */}
                <img src={`${process.env.PUBLIC_URL}/programmer.svg`} alt="Logo" className="h-150 w-150" />
            </div>
        </div>
    );
};

export default LandingPage;
