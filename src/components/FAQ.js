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
import './faq.css';



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
          <a href="http://www.twitter.com" style={{ margin: '0 8px' }}>
            <img src={instagram} alt="Twitter" style={{ height: '24px' }} />
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



const FaqDropdownItem = ({ item, toggleItem, isExpanded }) => {
  return (
    <div className="mb-4 border-b border-gray-200">
      <button
        onClick={() => toggleItem(item.id)}
        className="flex justify-between items-center w-full py-4 px-6 text-left text-gray-800 bg-white hover:bg-gray-50 focus:outline-none"
      >
        <span className="font-medium">{item.question}</span>
        <svg
          className={`w-6 h-6 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      <div className={`transition-height duration-500 ease-in-out overflow-hidden ${isExpanded ? 'max-h-40' : 'max-h-0'}`}>
        <p className="py-2 px-6 text-gray-600 text-sm">{item.answer}</p>
      </div>
    </div>
  );
};

const ExpandMoreIcon = () => (
  <svg className="control-icon control-icon-expand" width="24" height="24" role="presentation">
    <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
);

const CloseIcon = () => (
  <svg className="control-icon control-icon-close" width="24" height="24" role="presentation">
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
);

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <details className="faq-details" open={isOpen} onToggle={() => setIsOpen(!isOpen)}>
      <summary className="faq-summary">
        {question}
        {isOpen ? <CloseIcon /> : <ExpandMoreIcon />}
      </summary>
      <p>{answer}</p>
    </details>
  );
};

const FAQSection = ({ faqs }) => {
  return (
    <div className='m-8'>
      <h2>Frequently Asked Questions</h2>
      {faqs.map(faq => (
        <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};


// Usage of FAQSection with slugtritionFAQs array
const App = () => {
  const slugtritionFAQs = [
    {
      id: 1,
      question: 'What is SLUGTRITION?',
      answer: 'SLUGTRITION is a UCSC based nutrition and wellness platform designed to help you lead a healthier lifestyle.'
    },
    {
      id: 2,
      question: 'How do I sign up for SLUGTRITION?',
      answer: 'You can sign up by clicking on the "Sign up" link in the navigation bar and following the registration process.'
    },
    {
      id: 4,
      question: 'Can I track my dietary habits on SLUGTRITION?',
      answer: 'Absolutely! SLUGTRITION offers tools to track your meals, caloric intake, and nutritional goals.'
    },
    {
      id: 5,
      question: 'How do I specify my dietary preferences?',
      answer: 'You can specify your dietary preferences by filling out the dietary preferences form on our website. Please provide as much detail as possible so we can tailor your dining hall menu plan to meet your needs.'
    },
    {
      id: 6,
      question: 'What happens after I submit my dietary preferences?',
      answer: 'Once you submit your dietary preferences, our algorithm will create a customized dining hall menu plan for you. This plan will be accessible through your Slugtrition account within a few days of submission.'
    },
    {
      id: 7,
      question: 'Can I change my dietary preferences after I’ve submitted the form?',
      answer: 'Yes, you can update your dietary preferences at any time by logging into your Slugtrition account and editing your profile.'
    },


    // Add more FAQs as needed
  ];

  return (
    <div  className="app">
      <Header />
      <main>
        {/* Other components or content can go here */}
        <FAQSection faqs={slugtritionFAQs} />
      </main>
      <Footer />
    </div>
  );
};

export default App;