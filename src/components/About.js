import '../style.css'; // Make sure your CSS file paths are correct
import React, { useState } from 'react';
import { ReactComponent as SlugIcon } from '../slug-icon.svg';
import Parallax from 'parallax-js';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import logo from '../logo.png';
import TaglineTrail from './TaglineTrail';
import ParallaxBubble from './ParallaxBubbles';
import audioFile from '../slugtrition.wav';
import audioIcon from '../audio.svg';
import pancake from '../pancake.png';
import instagram from '../instagram.svg';
import linkedin from '../linkedin.svg';
import github from '../github.svg';
import varun from '../varunpfp.jpeg';
import harish from '../harish.webp';
import chahel from '../chahel.webp';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container flex justify-between items-center lg:justify-around">

                    {/* Hamburger Menu Button for Small Screens */}
                    <button
                        className="navbar-toggler order-2 lg:hidden"
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <svg width="40px" height="40px" viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg">
                            <path className={"line " + (isOpen ? "active top" : "")} d="M144.6 447.36h910.8v60H144.6z" />
                            <path className={"line " + (isOpen ? "active bottom" : "")} d="M144.6 692.64h910.8v60H144.6z" />
                        </svg>
                    </button>

                    {/* Left-side Links for Large Screens */}
                    <div className="hidden lg:flex flex-grow items-center justify-start order-1">
                        <ul className="navbar-nav flex">
                            <li className="nav-item mr-8">
                                <Link to="/about" className="nav-link hover-underline relative before:absolute before:inset-y-0 before:left-0 before:right-0 before:bg-blue-500 before:h-0.5 before:scale-x-0 before:origin-right before:transition-transform hover:before:scale-x-100 hover:before:origin-left">
                                    ABOUT
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/faq" className="nav-link hover-underline relative before:absolute before:inset-y-0 before:left-0 before:right-0 before:bg-blue-500 before:h-0.5 before:scale-x-0 before:origin-right before:transition-transform hover:before:scale-x-100 hover:before:origin-left">
                                    FAQs
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Logo for all screen sizes */}
                    <div className="order-3 lg:order-2">
                        <Link to="/" className="navbar-brand">
                            <img src={logo} alt="SLUGTRITION Logo" style={{ height: '50px' }} />
                        </Link>
                    </div>

                    {/* Right-side Links for Large Screens */}
                    <div className="hidden lg:flex flex-grow items-center justify-end order-4">
                        <ul className="navbar-nav flex">
                            <li className="nav-item mr-2">
                                <Link to="/sign-in" className="nav-link login-btn px-4 py-2 border-2 rounded-full">
                                    Login
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/sign-up" className="nav-link signup-btn px-4 py-2 border-2 rounded-full">
                                    Get Started
                                </Link>
                            </li>
                        </ul>

                    </div>
                    {/* Mobile Menu */}

                    {isOpen && (
                        <div className={`fixed inset-0 bg-blue-500 z-50 flex flex-col items-start lg:hidden order-5 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                            <button
                                className="text-white p-4 transition-transform duration-500"
                                onClick={() => setIsOpen(false)}
                                style={{ transform: isOpen ? 'scale(1.2)' : 'scale(1)' }} // Scale the button for visual effect
                            >
                                {/* SVG for the exit icon */}
                                <svg width="40px" height="40px" viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="white" d="m642.48 600 300.72-300.84c6.8789-7.6953 9.3203-18.383 6.4609-28.297-2.8555-9.918-10.605-17.668-20.523-20.523-9.9141-2.8594-20.602-0.41797-28.297 6.4609l-300.84 300.72-300.84-300.72c-7.6953-6.8789-18.383-9.3203-28.297-6.4609-9.918 2.8555-17.668 10.605-20.523 20.523-2.8594 9.9141-0.41797 20.602 6.4609 28.297l300.72 300.84-300.72 300.84c-5.5859 5.6328-8.7109 13.254-8.6953 21.188 0.019531 7.9336 3.1758 15.535 8.7891 21.145 5.6094 5.6094 13.211 8.7695 21.145 8.7891 7.9336 0.046874 15.551-3.1094 21.121-8.7617l300.84-300.72 300.84 300.72c5.5703 5.6523 13.188 8.8086 21.121 8.7617 7.9336-0.019532 15.535-3.1797 21.145-8.7891 5.6133-5.6094 8.7695-13.211 8.7891-21.145 0.015625-7.9336-3.1094-15.555-8.6953-21.188z" />
                                </svg>
                            </button>
                            {/* Add your mobile navigation links here */}
                            <Link to="/about" className="text-white p-4 mnlinks" onClick={() => setIsOpen(false)}>ABOUT</Link>
                            <Link to="/faq" className="text-white p-4 mnlinks" onClick={() => setIsOpen(false)}>FAQs</Link>
                            <div className="button-contain w-full px-4 flex flex-col items-start space-y-4 mt-4">
                                <Link to="/sign-in" onClick={() => setIsOpen(false)} className="button text-sm text-center nav-link px-6 py-2 text-black font-bold transition duration-300 ease-in-out rounded-full"
                                    style={{ backgroundColor: '#ffce32', color: 'inherit', textDecoration: 'inherit' }} // Removed the width
                                >Login</Link>
                                <Link to="/sign-up" onClick={() => setIsOpen(false)} className="button text-sm text-center nav-link px-6 py-2 text-black font-bold transition duration-300 ease-in-out rounded-full"
                                    style={{ backgroundColor: '#ffce32', color: 'inherit', textDecoration: 'inherit' }} // Removed the width
                                >Get Started</Link>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
};





// Footer Component
const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#f5f5f5', padding: '40px 0', borderTop: '1px solid #eaeaea', zIndex: 3 }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
                {/* Logo and tagline */}
                <div style={{ marginBottom: '30px' }}>
                    <img src={logo} alt="Slugtrition Logo" style={{ height: '60px', marginBottom: '20px' }} />
                    <p style={{ marginToåp: '10px', color: '#333', fontSize: '18px', fontWeight: '500' }}>Nourish your life with Slugtrition.</p>
                </div>

                {/* Navigation Links */}
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px', flexWrap: 'wrap' }}>
                    <a href="/about" style={{ margin: '0 15px', textDecoration: 'none', color: '#007bff', fontSize: '16px' }}>ABOUT</a>
                    <a href="/faq" style={{ margin: '0 15px', textDecoration: 'none', color: '#007bff', fontSize: '16px' }}>FAQs</a>
                    {/* Additional Links Here */}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '30px' }}>
                    <a href="http://www.linkedin.com" style={{ margin: '0 8px' }}>
                        <img src={linkedin} alt="Linkedin" style={{ height: '24px' }} />
                    </a>
                    <a href="http://www.github.com" style={{ margin: '0 8px' }}>
                        <img src={github} alt="Github" style={{ height: '24px' }} />
                    </a>
                    <a href="http://www.instagram.com" style={{ margin: '0 8px' }}>
                        <img src={instagram} alt="Instagram" style={{ height: '24px' }} />
                    </a>
                </div>

                {/* Copyright Information */}
                <div style={{ color: '#333', fontSize: '14px' }}>
                    <p>© 2024 Slugtrition. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

const AboutUs = () => {
    // Define an array of co-founder objects for easier management
    const coFounders = [
        {
            name: 'Varun Golusupudi',
            role: 'Co-Founder',
            imageUrl: varun, // Replace with actual image URL
            githubUrl: 'https://github.com/varungolusupudi', // Replace with actual GitHub URL
            linkedinUrl: 'https://www.linkedin.com/in/varun-golusupudi-966b88200/', // Replace with actual LinkedIn URL
            description: 'The visionary behind Slugtrition, Varun spearheaded the project and contributed to both front-end and back-end development.',
        },
        {
            name: 'Harish Dukkipati',
            role: 'Co-Founder',
            imageUrl: harish, // Replace with actual image URL
            githubUrl: 'https://github.com/harishdukkipati', // Replace with actual GitHub URL
            linkedinUrl: 'https://linkedin.com/in/harish-dukkipati/', // Replace with actual LinkedIn URL
            description: 'Harish, the back-end maestro, architected the server-side logic and database management for Slugtrition.',
        },
        {
            name: 'Anish Shivamurthy',
            role: 'Co-Founder',
            imageUrl: '', // Replace with actual image URL
            githubUrl: 'https://github.com/anishshivamurthy', // Replace with actual GitHub URL
            linkedinUrl: 'https://www.linkedin.com/in/anish-sivamurthy/', // Replace with actual LinkedIn URL
            description: 'Anish focused on creating a seamless user experience by developing the front-end with elegance and efficiency.',
        },
        {
            name: 'Chahel Nerusu',
            role: 'Co-Founder',
            imageUrl: chahel, // Replace with actual image URL
            githubUrl: 'https://github.com/ChahelNerusu', // Replace with actual GitHub URL
            linkedinUrl: 'https://www.linkedin.com/in/chahel-nerusu/', // Replace with actual LinkedIn URL
            description: 'Chahel, with his keen eye for design, crafted the front-end interface, ensuring an intuitive and attractive user experience.',
        },
        // ... Add other co-founders here with the same structure
    ];

    return (
        <>
            <Header />
            <div class="bg-white py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <div class="max-w-lg mx-auto text-center">
                    <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        About Slugtrition
                    </h2>
                    <hr class="my-4 border-gray-300" />
                    <p class="mt-4 text-lg leading-6 text-gray-600">
                        <strong>Slugtrition</strong> is a group of four <strong>UCSC students</strong> who were tired of having to plan out their meals everyday. Calculating calories, protein content, and carbohydrates everyday served to be a tedious task. As a result, they decided to make a <strong>dietary planner</strong> curated toward <strong>UCSC students</strong> that rely on the dining halls.
                    </p>
                </div>
                {/* Meet the Team */}
                <div className="mt-12">
                    <h3 className="text-2xl font-extrabold text-gray-900 text-center">
                        Meet the Co-Founders
                    </h3>
                    <hr className="my-4 border-gray-300 mx-auto w-1/4" />
                    <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
                        {coFounders.map((founder) => (
                            <div className="text-center" key={founder.name}>
                                <img
                                    className="w-24 h-24 rounded-full mx-auto"
                                    src={founder.imageUrl}
                                    alt={`Profile of ${founder.name}`}
                                />
                                <div className="mt-4 text-lg leading-6 font-medium text-gray-900">
                                    {founder.name}
                                </div>
                                <div className="mt-2 text-sm text-gray-500">
                                    {founder.role}
                                </div>
                                <p className="mt-2 text-xs text-gray-600" style={{ fontSize: '1rem' }}>
                                    {founder.description}
                                </p>
                                <div className="mt-4 flex justify-center space-x-3">
                                    <a href={founder.githubUrl} target="_blank" rel="noopener noreferrer">
                                        <img
                                            className="w-6 h-6"
                                            src={github} // Replace with actual GitHub icon URL
                                            alt="GitHub"
                                        />
                                    </a>
                                    <a href={founder.linkedinUrl} target="_blank" rel="noopener noreferrer">
                                        <img
                                            className="w-6 h-6"
                                            src={linkedin} // Replace with actual LinkedIn icon URL
                                            alt="LinkedIn"
                                        />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div >
            <Footer />
        </>
    );
};

export default AboutUs;
