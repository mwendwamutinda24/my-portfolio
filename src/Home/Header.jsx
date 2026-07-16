import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <style>{`
        .header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 24px;
          position: sticky;
          top: 0;
          background: #0f0f0f;
          z-index: 1000;
        }
        .header1 a {
          color: #fff;
          font-size: 1.2rem;
          text-decoration: none;
        }
        .menu-icon {
          display: none;
          font-size: 26px;
          color: #fff;
          cursor: pointer;
          z-index: 1100;
        }
        .header2 {
          display: flex;
          gap: 28px;
        }
        .header2 a {
          color: #eee;
          text-decoration: none;
          font-size: 15px;
          transition: color 0.2s;
          white-space: nowrap;
        }
        .header2 a:hover {
          color: #d4af4a;
        }
        .close-icon {
          display: none;
        }

        @media (max-width: 900px) {
          .header2 {
            gap: 18px;
          }
        }

        @media (max-width: 768px) {
          .menu-icon {
            display: block;
          }
          .header2 {
            position: fixed;
            top: 0;
            right: -100%;
            height: 100vh;
            width: 70%;
            max-width: 300px;
            background: #111;
            flex-direction: column;
            align-items: flex-start;
            padding: 80px 24px;
            gap: 24px;
            transition: right 0.3s ease;
            z-index: 1050;
            box-shadow: -4px 0 20px rgba(0,0,0,0.4);
          }
          .header2.open {
            right: 0;
          }
          .header2 a {
            font-size: 16px;
            width: 100%;
          }
          .close-icon {
            display: block;
            position: absolute;
            top: 24px;
            right: 24px;
            font-size: 24px;
            color: #fff;
            cursor: pointer;
          }
        }

        @media (max-width: 400px) {
          .header {
            padding: 14px 16px;
          }
          .header2 {
            width: 85%;
          }
          .header1 a {
            font-size: 1rem;
          }
        }
      `}</style>

      <header className="header">
        <div className="header1">
          <Link to="#"><b>Kelvin Architect</b></Link>
        </div>

        {!isOpen && (
          <div className="menu-icon" onClick={toggleMenu}>
            ☰
          </div>
        )}

        <nav className={`header2 ${isOpen ? 'open' : ''}`}>
          {isOpen && (
            <div className="close-icon" onClick={toggleMenu}>
              ✖
            </div>
          )}
          <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact Me</a>
          <a href="#about" onClick={() => setIsOpen(false)}>About me</a>
          <a href="#myProjects" onClick={() => setIsOpen(false)}>Projects</a>
        </nav>
      </header>
    </>
  );
};

export default Header;
