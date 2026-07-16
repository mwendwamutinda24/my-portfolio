import HomePage from "./HomePage";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { useState } from "react";
import {
  FaBars,
  FaHome,
  FaProjectDiagram,
  FaEnvelope,
  FaCog,
  FaTachometerAlt,
  FaUser,
} from "react-icons/fa";
import homeImg from "../assets/image3.JPG";

function Dashboard() {
  const [showNav, setShowNav] = useState(false); 
    const dropdown = () => { setShowNav(!showNav); };

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
Dashboard.jsx (sidebar made responsive)
Add this <style> block right before the outer <> return (or anywhere inside the fragment), and wrap the sidebar markup as shown:
jsxfunction Dashboard() {
  const [showNav, setShowNav] = useState(false);
  const dropdown = () => setShowNav(!showNav);

  return (
    <>
      <style>{`
        .navbar2 { position: relative; z-index: 900; }
        .fahome h3 { cursor: pointer; }
        .navbars2 {
          position: absolute;
          top: 40px;
          left: 0;
          background: #111;
          border-radius: 10px;
          padding: 10px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          z-index: 950;
          min-width: 180px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }
        .navabarr a {
          display: flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          color: inherit;
          white-space: nowrap;
        }

        /* Desktop persistent sidebar visible, mobile hidden (dropdown used instead) */
        .navbars {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .dashboard-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 20px;
        }

        #myProjects, .home-response, .project-grid {
          overflow: visible !important;
          height: auto !important;
          max-height: none !important;
        }

        @media (max-width: 768px) {
          .homepage {
            flex-direction: column;
            text-align: center;
          }
          .navbars {
            display: none; /* rely on hamburger dropdown on smaller screens */
          }
          .dashboard-content {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .navbars2 {
            min-width: 150px;
            left: 0;
            right: 0;
            margin: 0 auto;
          }
        }
      `}</style>

      <div className="navbar2">
        <div className="fahome">
          <h3 onClick={dropdown}><FaBars /></h3>
          <hr />
        </div>

        {showNav && (
          <div className="navbars2">
            <div className="navabarr"><Link to="/"><FaHome /> Home</Link></div>
            <div className="navabarr"><Link to="/Dashboard"><MdDashboard /> Dashboard</Link></div>
            <div className="navabarr"><Link to="/about"><FaUser /> About</Link></div>
            <div className="navabarr"><Link to="/services"><FaCog /> Services</Link></div>
            <div className="navabarr"><Link to="/my-Projects"><FaProjectDiagram /> Projects</Link></div>
            <div className="navabarr"><Link to="/contact"><FaEnvelope /> Contact Me</Link></div>
            <div className="navabarr"><Link to="/Kelvin Mutinda (2).pdf"><FaTachometerAlt /> My Resume</Link></div>
          </div>
        )}
      </div>

      
    
    <div className="navbar2">
    
             <div className="fahome">
              <h3 onClick={dropdown}><FaBars /></h3>
              <hr/>
            </div>
    
              {showNav && (
              <div className="navbars2">
                <div className="navabarr"><Link to="/"><FaHome /> Home</Link></div>
                <div className="navabarr"><Link to="/Dashboard"><MdDashboard /> Dashboard</Link></div>
                <div className="navabarr"><Link to="/about"><FaUser /> About</Link></div>
                <div className="navabarr"><Link to="/services"><FaCog /> Services</Link></div>
                <div className="navabarr"><Link to="/my-Projects"><FaProjectDiagram /> Projects</Link></div>
                <div className="navabarr"><Link to="/contact"><FaEnvelope /> Contact Me</Link></div>
                <div className="navabarr"><Link to="/Kelvin Mutinda (2).pdf"><FaTachometerAlt /> My Resume</Link></div>
              </div>
            )}
            </div>
      <div className="home-response">
        {/* Profile Section */}
        <section id="home">
          <div className="homepage">
            <div className="home2">
              <img className="img" src={homeImg} alt="Kelvin Mutinda" />
            </div>
            <div className="Home1">
              <h2 style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                Kelvin Mutinda
                <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="#1DA1F2" // Twitter blue
  >
    <path d="M22.25 12c0 5.65-4.6 10.25-10.25 10.25S1.75 17.65 1.75 12 6.35 1.75 12 1.75 22.25 6.35 22.25 12zm-11.5 4.5l7-7-1.5-1.5-5.5 5.5-2.5-2.5-1.5 1.5 4 4z"/>
  </svg>
              </h2>
              <p>AI | Fullstack Engineer</p>
            </div>
          </div>

          {/* Navigation Sidebar */}
          <nav className="navbars">
            <div className="navabarr"><Link to="/"><FaHome /> Home</Link></div>
            <div className="navabarr"><Link to="/Dashboard"><MdDashboard /> Dashboard</Link></div>
            <div className="navabarr"><Link to="/about"><FaUser /> About</Link></div>
            <div className="navabarr"><Link to="/services"><FaCog /> Services</Link></div>
            <div className="navabarr"><Link to="/my-Projects"><FaProjectDiagram /> Projects</Link></div>
            <div className="navabarr"><Link to="/contact"><FaEnvelope /> Contact Me</Link></div>
            <div className="navabarr"><Link to="/Kelvin Mutinda (2).pdf"><FaTachometerAlt /> My Resume</Link></div>
          </nav>
        </section>


        <div className="dashboard">
          <h3>My Dashboard</h3>
          <p>
            Welcome to my professional dashboard. Built with <strong>React.js</strong> and
            <strong> Tailwind CSS</strong>, deployed on <strong>Vercel</strong>.
          </p>
          <hr />

          <div className="dashboard-content">
            <section className="skills">
              <h4>Skills Overview</h4>
              <ul>
                <li>Frontend: React, Vue, Angular, TailwindCSS</li>
                <li>Backend: Node.js, Express, Laravel, PHP,Springboot</li>
                <li>Databases: MongoDB, MySQL, Firebase,Postgre sql</li>
                <li>AI/ML: Python, TensorFlow, NLP</li>
                <li>Tools: Git, Figma, WordPress</li>
                <li>App development:React Native, Flutter(Dart)</li>
                <li>High perfomance Appliations:Java,C++</li>
              </ul>
            </section>

    
        
            <section className="services">
              <h4>Services I provide</h4>
            
              <ul>
                <li>Custom Web Development</li>
                <li>AI Integration & Automation</li>
                <li>UI/UX Design</li>
                <li>Deployment & Hosting</li>
                <li>Mobile App development(CrossPlatform and Android)</li>
                <li>Software design and Archtecture</li>
                <a href="/contact"><button class="cont2">Contact Me</button></a>
              </ul>
            </section>


            <section className="resume-summary">
              <h4>Resume Snapshot</h4>
              <p>
                3+ years of experience in fullstack engineering and AI development. 
                Skilled in building scalable, secure, and user-friendly platforms.
              </p>
              <Link to="/Resume" className="btn">View Full Resume</Link>
            </section>

            {/* Contact Section */}
            <section className="contact-info">
              <h4>Contact Information</h4>
              <p>Email: mwendwamutinda24@example.com</p>
              <p>Location: Mombasa, Kenya</p>
              <a href=" https://www.linkedin.com/in/kelvin-mwendwa-0b92063a"> https://www.linkedin.com/in/kelvin-mwendwa-0b92063a</a>
             
            
              <p>GitHub: <a href="">https://github.com/mwendwamutinda24</a></p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;


