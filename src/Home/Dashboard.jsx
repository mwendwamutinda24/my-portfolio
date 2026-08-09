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

const dashboardStyles = `
  * {
    box-sizing: border-box;
  }

  .dashboard-page {
    width: 100%;
    min-height: 100vh;
    padding: 30px;
    background: #f4f4f8;
  }

  /* Mobile hamburger */
  .navbar2 {
    position: relative;
    width: 100%;
    z-index: 1000;
    margin-bottom: 20px;
  }

  .fahome {
    display: none;
  }

  .fahome h3 {
    cursor: pointer;
    margin: 0;
  }

  .navbars2 {
    position: absolute;
    top: 40px;
    left: 0;
    background: #111;
    border-radius: 10px;
    padding: 12px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    z-index: 2000;
    min-width: 190px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }

  .navbars2 .navabarr a {
    color: white;
  }

  .navabarr a {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    color: inherit;
    white-space: nowrap;
  }

  /* MAIN PAGE LAYOUT */
  .home-response {
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;

    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 30px;
  }

  /* LEFT PROFILE + NAVIGATION */
  #home {
    flex: 0 1 250px;
    min-width: 220px;
    display: flex;
    flex-direction: column;
    gap: 25px;
  }

  .homepage {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }

  .home2 {
    width: 120px;
    height: 120px;
    flex-shrink: 0;
  }

  .home2 .img {
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 50%;
    display: block;
    border: 4px solid white;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
  }

  .Home1 {
    text-align: center;
  }

  .Home1 h2 {
    margin: 0;
    font-size: 27px;
  }

  .Home1 p {
    margin: 8px 0 0;
    color: #555;
    font-weight: 600;
  }

  /* SIDEBAR */
  .navbars {
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 10px;
  }

  .navbars .navabarr {
    width: 100%;
  }

  .navbars .navabarr a {
    width: 100%;
    min-height: 48px;
    padding: 12px 18px;
    border-radius: 30px;
    background: #ffffff;
    color: #111;
    font-weight: 600;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);
    transition: 0.2s ease;
  }

  .navbars .navabarr a:hover {
    background: #111;
    color: white;
    transform: translateX(3px);
  }

  /* MAIN DASHBOARD */
  .dashboard {
    flex: 1 1 700px;
    min-width: 0;
    width: 100%;
    background: #ffffff;
    border-radius: 20px;
    padding: 35px;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.07);
    overflow: visible;
  }

  .dashboard > h3 {
    margin: 0 0 10px;
    font-size: 28px;
    color: #111;
  }

  .dashboard > p {
    margin: 0 0 25px;
    color: #555;
    font-size: 16px;
    line-height: 1.6;
  }

  .dashboard > hr {
    border: 0;
    border-top: 1px solid #e5e5e5;
    margin: 0 0 25px;
  }

  /* FLEX DASHBOARD CARDS */
  .dashboard-content {
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    align-items: stretch;

    gap: 25px;

    overflow: visible;
  }

  /* EVERY DASHBOARD CARD */
  .dashboard-content > section {
    flex: 1 1 350px;
    min-width: 280px;
    max-width: 100%;

    padding: 25px;
    background: #ffffff;
    border: 1px solid #e8e8e8;
    border-radius: 16px;

    box-shadow: 0 3px 15px rgba(0, 0, 0, 0.06);

    overflow: visible;
  }

  .dashboard-content h4 {
    margin: 0 0 18px;
    font-size: 18px;
    text-transform: uppercase;
    color: #111;
  }

  .dashboard-content ul {
    margin: 0;
    padding-left: 20px;
  }

  .dashboard-content li {
    margin-bottom: 12px;
    line-height: 1.5;
    color: #444;
  }

  .dashboard-content p {
    color: #555;
    line-height: 1.7;
  }

  /* SERVICES */
  .services {
    flex: 1 1 350px;
  }

  .cont2 {
    display: block;
    margin-top: 20px;
    padding: 11px 35px;

    border: none;
    border-radius: 25px;

    background: #111;
    color: white;

    font-size: 15px;
    font-weight: 600;

    cursor: pointer;
    transition: 0.2s ease;
  }

  .cont2:hover {
    background: #333;
    transform: translateY(-2px);
  }

  /* RESUME */
  .resume-summary {
    flex: 1 1 350px;
  }

  .btn {
    display: inline-block;
    margin-top: 15px;
    padding: 10px 20px;
    background: #111;
    color: white;
    text-decoration: none;
    border-radius: 25px;
    font-weight: 600;
  }

  /* CONTACT */
  .contact-info {
    flex: 1 1 350px;
  }

  .contact-info a {
    color: #185FA5;
    word-break: break-word;
  }

  /* PREVENT LONG TEXT FROM BREAKING THE LAYOUT */
  .dashboard,
  .dashboard-content,
  .dashboard-content > section {
    overflow-wrap: break-word;
    word-wrap: break-word;
  }

  /* TABLET */
  @media (max-width: 1000px) {
    .dashboard-page {
      padding: 20px;
    }

    .home-response {
      gap: 20px;
    }

    #home {
      flex: 1 1 220px;
    }

    .dashboard {
      flex: 1 1 600px;
      padding: 25px;
    }

    .dashboard-content > section {
      flex: 1 1 300px;
    }
  }

  /* MOBILE */
  @media (max-width: 768px) {
    .dashboard-page {
      padding: 15px;
    }

    .fahome {
      display: block;
    }

    .navbars {
      display: none;
    }

    .home-response {
      flex-direction: column;
      align-items: stretch;
      gap: 20px;
    }

    #home {
      width: 100%;
      flex: 1 1 100%;
      align-items: center;
    }

    .homepage {
      flex-direction: row;
      justify-content: center;
      text-align: left;
    }

    .Home1 {
      text-align: left;
    }

    .dashboard {
      width: 100%;
      flex: 1 1 100%;
      padding: 20px;
    }

    .dashboard-content {
      flex-direction: row;
      flex-wrap: wrap;
    }

    .dashboard-content > section {
      flex: 1 1 100%;
      min-width: 100%;
    }
  }

  /* SMALL MOBILE */
  @media (max-width: 480px) {
    .dashboard-page {
      padding: 10px;
    }

    .dashboard {
      padding: 16px;
      border-radius: 12px;
    }

    .homepage {
      flex-direction: column;
      text-align: center;
    }

    .Home1 {
      text-align: center;
    }

    .dashboard > h3 {
      font-size: 23px;
    }

    .dashboard-content > section {
      padding: 18px;
    }

    .navbars2 {
      min-width: 160px;
    }
  }
`;

function Dashboard() {
  const [showNav, setShowNav] = useState(false);

  const dropdown = () => {
    setShowNav(!showNav);
  };

  return (
    <>
      {/* IMPORTANT: Actually inject the CSS */}
      <style>{dashboardStyles}</style>

      <div className="dashboard-page">

        {/* MOBILE NAV */}
        <div className="navbar2">
          <div className="fahome">
            <h3 onClick={dropdown}>
              <FaBars />
            </h3>
          </div>

          {showNav && (
            <div className="navbars2">

              <div className="navabarr">
                <Link to="/">
                  <FaHome /> Home
                </Link>
              </div>

              <div className="navabarr">
                <Link to="/Dashboard">
                  <MdDashboard /> Dashboard
                </Link>
              </div>

              <div className="navabarr">
                <Link to="/about">
                  <FaUser /> About
                </Link>
              </div>

              <div className="navabarr">
                <Link to="/services">
                  <FaCog /> Services
                </Link>
              </div>

              <div className="navabarr">
                <Link to="/my-Projects">
                  <FaProjectDiagram /> Projects
                </Link>
              </div>

              <div className="navabarr">
                <Link to="/contact">
                  <FaEnvelope /> Contact Me
                </Link>
              </div>

              <div className="navabarr">
                <Link to="/Kelvin Mutinda (2).pdf">
                  <FaTachometerAlt /> My Resume
                </Link>
              </div>

            </div>
          )}
        </div>

        {/* MAIN FLEX CONTAINER */}
        <div className="home-response">

          {/* LEFT PROFILE */}
          <section id="home">

            <div className="homepage">

              <div className="home2">
                <img
                  className="img"
                  src={homeImg}
                  alt="Kelvin Mutinda"
                />
              </div>

              <div className="Home1">

                <h2
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  Kelvin Mutinda

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="#1DA1F2"
                  >
                    <path d="M22.25 12c0 5.65-4.6 10.25-10.25 10.25S1.75 17.65 1.75 12 6.35 1.75 12 1.75 22.25 6.35 22.25 12zm-11.5 4.5l7-7-1.5-1.5-5.5 5.5-2.5-2.5-2.5-2.5-1.5 1.5 4 4z" />
                  </svg>

                </h2>

                <p>AI | Fullstack Engineer</p>

              </div>

            </div>

            {/* SIDEBAR */}
            <nav className="navbars">

              <div className="navabarr">
                <Link to="/">
                  <FaHome /> Home
                </Link>
              </div>

              <div className="navabarr">
                <Link to="/Dashboard">
                  <MdDashboard /> Dashboard
                </Link>
              </div>

              <div className="navabarr">
                <Link to="/about">
                  <FaUser /> About
                </Link>
              </div>

              <div className="navabarr">
                <Link to="/services">
                  <FaCog /> Services
                </Link>
              </div>

              <div className="navabarr">
                <Link to="/my-Projects">
                  <FaProjectDiagram /> Projects
                </Link>
              </div>

              <div className="navabarr">
                <Link to="/contact">
                  <FaEnvelope /> Contact Me
                </Link>
              </div>

              <div className="navabarr">
                <Link to="/Kelvin Mutinda (2).pdf">
                  <FaTachometerAlt /> My Resume
                </Link>
              </div>

            </nav>

          </section>

          {/* DASHBOARD */}
          <main className="dashboard">

            <h3>My Dashboard</h3>

            <p>
              Welcome to my professional dashboard. Built with{" "}
              <strong>React.js</strong> and{" "}
              <strong>Tailwind CSS</strong>, deployed on{" "}
              <strong>Vercel</strong>.
            </p>

            <hr />

            {/* FLEX + FLEX WRAP */}
            <div className="dashboard-content">

              {/* SKILLS */}
              <section className="skills">

                <h4>Skills Overview</h4>

                <ul>
                  <li>
                    Frontend: React, Vue, Angular, TailwindCSS
                  </li>

                  <li>
                    Backend: Node.js, Express, Laravel, PHP, Springboot
                  </li>

                  <li>
                    Databases: MongoDB, MySQL, Firebase, Postgre SQL
                  </li>

                  <li>
                    AI/ML: Python, TensorFlow, NLP
                  </li>

                  <li>
                    Tools: Git, Figma, WordPress
                  </li>

                  <li>
                    App development: React Native, Flutter (Dart)
                  </li>

                  <li>
                    High performance Applications: Java, C++
                  </li>
                </ul>

              </section>

              {/* SERVICES */}
              <section className="services">

                <h4>Services I Provide</h4>

                <ul>

                  <li>Custom Web Development</li>

                  <li>AI Integration & Automation</li>

                  <li>UI/UX Design</li>

                  <li>Deployment & Hosting</li>

                  <li>
                    Mobile App Development
                    (CrossPlatform and Android)
                  </li>

                  <li>
                    Software Design and Architecture
                  </li>

                </ul>

                <Link to="/contact">
                  <button className="cont2">
                    Contact Me
                  </button>
                </Link>

              </section>

              {/* RESUME */}
              <section className="resume-summary">

                <h4>Resume Snapshot</h4>

                <p>
                  3+ years of experience in fullstack engineering
                  and AI development. Skilled in building scalable,
                  secure, and user-friendly platforms.
                </p>

                <Link to="/Resume" className="btn">
                  View Full Resume
                </Link>

              </section>

              {/* CONTACT */}
              <section className="contact-info">

                <h4>Contact Information</h4>

                <p>
                  Email: mwendwamutinda24@example.com
                </p>

                <p>
                  Location: Mombasa, Kenya
                </p>

                <p>
                  LinkedIn:
                  <br />

                  <a
                    href="https://www.linkedin.com/in/kelvin-mwendwa-0b92063a"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/kelvin-mwendwa-0b92063a
                  </a>
                </p>

                <p>
                  GitHub:
                  <br />

                  <a
                    href="https://github.com/mwendwamutinda24"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/mwendwamutinda24
                  </a>
                </p>

              </section>

            </div>

          </main>

        </div>

      </div>
    </>
  );
}

export default Dashboard;
