import React from 'react';
import YourImage from '../images/image1.png'; 

const Home = () => {
    return (
        <div className="flex h-screen">
        <div className="flex-1 flex items-center justify-start p-8">
            <div>
            <h1 className="text-4xl font-bold mb-4">Alicia Lau</h1>
            <p className="text-xl mb-8">A former mechanical engineer turned full stack software engineer at Capital One, I bring a blend of technical diversity, a passion for learning, and creativity to the evolving tech landscape.</p>
            </div>
        </div>
        <div className="flex-1">
            <img src={YourImage} alt="Descriptive Alt Text" className="object-cover h-full w-full" />
        </div>
        </div>
    );
};

export default Home;