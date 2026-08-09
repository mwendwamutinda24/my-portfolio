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
  FaTimes,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
} from "react-icons/fa";
import homeImg from "../assets/image3.JPG";

const NAV_LINKS = [
  { to: "/", icon: <FaHome />, label: "Home" },
  { to: "/Dashboard", icon: <MdDashboard />, label: "Dashboard" },
  { to: "/about", icon: <FaUser />, label: "About" },
  { to: "/services", icon: <FaCog />, label: "Services" },
  { to: "/my-Projects", icon: <FaProjectDiagram />, label: "Projects" },
  { to: "/contact", icon: <FaEnvelope />, label: "Contact Me" },
  { to: "/Kelvin Mutinda (2).pdf", icon: <FaTachometerAlt />, label: "My Resume" },
];

const dashboardStyles = [
  // ---- page shell ----
  ".dash-page { max-width: 1100px; margin: 0 auto; padding: 0 24px 60px; }",
  "@media (max-width: 640px) { .dash-page { padding: 0 16px 40px; } }",

  // ---- mobile hamburger + dropdown (hidden on desktop) ----
  ".navbar2 { position: fixed; top: 16px; right: 16px; z-index: 1200; display: none; }",
  "@media (max-width: 768px) { .navbar2 { display: block; } }",
  ".fahome h3 { cursor: pointer; margin: 0; background: #111; color: #fff; width: 44px; height: 44px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 18px; box-shadow: 0 4px 14px rgba(0,0,0,0.25); }",
  ".fahome hr { display: none; }",
  ".nav-backdrop { position: fixed; inset: 0; background: rgba(0,0,0,0.45); z-index: 1100; }",
  ".navbars2 { position: fixed; top: 70px; right: 16px; background: #111; border-radius: 14px; padding: 10px; display: flex; flex-direction: column; gap: 4px; z-index: 1200; min-width: 210px; box-shadow: 0 16px 40px rgba(0,0,0,0.4); }",
  ".navbars2 .navabarr a { padding: 10px 12px; border-radius: 8px; color: #ddd; font-size: 14.5px; }",
  ".navbars2 .navabarr a:hover { background: #222; color: #fff; }",

  // ---- desktop top nav (hidden on mobile) ----
  ".navbars { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; padding: 16px 0 22px; margin-bottom: 28px; border-bottom: 1px solid #ececec; }",
  "@media (max-width: 768px) { .navbars { display: none; } }",
  ".navbars .navabarr a { display: flex; align-items: center; gap: 7px; padding: 9px 16px; border-radius: 24px; background: #f4f4f5; color: #333; font-weight: 600; font-size: 13.5px; text-decoration: none; transition: background 0.2s ease, color 0.2s ease, transform 0.15s ease; }",
  ".navbars .navabarr a:hover { background: #111; color: #fff; transform: translateY(-1px); }",

  // ---- profile header ----
  ".homepage { display: flex; align-items: center; gap: 24px; padding-top: 24px; }",
  "@media (max-width: 640px) { .homepage { flex-direction: column; text-align: center; padding-top: 76px; gap: 14px; } }",
  ".home2 .img { width: 96px; height: 96px; border-radius: 50%; object-fit: cover; border: 3px solid #f0f0f0; box-shadow: 0 6px 18px rgba(0,0,0,0.08); }",
  ".Home1 h2 { font-size: 1.6rem; font-weight: 800; color: #111; margin: 0; }",
  ".Home1 p { color: #666; margin: 4px 0 0; font-size: 14.5px; }",

  // ---- dashboard card ----
  ".dashboard { background: #ffffff; border: 1px solid #ececec; border-radius: 18px; box-shadow: 0 4px 20px rgba(0,0,0,0.05); padding: 28px 30px; margin-top: 8px; }",
  "@media (max-width: 640px) { .dashboard { padding: 20px; border-radius: 14px; } }",
  ".dashboard h3 { font-size: 1.4rem; font-weight: 800; color: #111; margin: 0 0 8px; }",
  ".dashboard > p { color: #555; font-size: 14.5px; line-height: 1.6; margin: 0; }",
  ".dashboard hr { border: none; border-top: 1px solid #eee; margin: 20px 0; }",

  // ---- content grid: each section is its own block, never overlapping ----
  ".dashboard-content { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 18px; align-items: start; }",
  "@media (max-width: 640px) { .dashboard-content { grid-template-columns: 1fr; } }",
  ".dashboard-content section { background: #fafafa; border: 1px solid #efefef; border-radius: 14px; padding: 18px 20px; }",
  ".dashboard-content h4 { font-size: 14.5px; font-weight: 700; color: #111; margin: 0 0 12px; text-transform: uppercase; letter-spacing: 0.4px; }",
  ".dashboard-content ul { margin: 0; padding-left: 18px; display: flex; flex-direction: column; gap: 8px; }",
  ".dashboard-content li { font-size: 13.5px; color: #444; line-height: 1.5; }",
  ".dashboard-content p { font-size: 13.5px; color: #444; line-height: 1.6; margin: 0; }",

  // ---- services 'Contact Me' button ----
  ".cont2 { margin-top: 6px; background: #111; color: #fff; border: none; padding: 9px 18px; border-radius: 20px; font-size: 13px; font-weight: 600; cursor: pointer; transition: background 0.2s ease; }",
  ".cont2:hover { background: #333; }",

  // ---- resume-summary link ----
  ".resume-summary .btn { display: inline-block; margin-top: 10px; background: #d4af4a; color: #111; font-weight: 700; font-size: 13px; padding: 9px 18px; border-radius: 20px; text-decoration: none; transition: transform 0.15s ease; }",
  ".resume-summary .btn:hover { transform: translateY(-1px); }",

  // ---- contact info as icon pill links, not raw urls ----
  ".contact-info .contact-row { display: flex; align-items: center; gap: 8px; font-size: 13.5px; color: #444; margin: 0 0 8px; }",
  ".contact-info .contact-row svg { color: #d4af4a; flex-shrink: 0; }",
  ".contact-links { display: flex; flex-direction: column; gap: 8px; margin-top: 10px; }",
  ".link-pill { display: inline-flex; align-items: center; gap: 8px; padding: 8px 12px; border-radius: 10px; background: #fff; border: 1px solid #e5e5e5; color: #222; font-size: 13px; font-weight: 600; text-decoration: none; transition: border-color 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease; }",
  ".link-pill:hover { border-color: #111; transform: translateY(-1px); box-shadow: 0 6px 16px rgba(0,0,0,0.08); }",
  ".link-pill .link-icon { font-size: 15px; }",
  ".link-pill .link-ext { margin-left: auto; font-size: 10px; opacity: 0.5; }",
  ".link-pill.linkedin .link-icon { color: #0A66C2; }",
  ".link-pill.github .link-icon { color: #111; }",
].join(" ");

function Dashboard() {
  const [showNav, setShowNav] = useState(false);
  const dropdown = () => {
    setShowNav(!showNav);
  };

  return (
    <>
      <style>{dashboardStyles}</style>

      {/* Mobile-only hamburger + dropdown */}
      <div className="navbar2">
        <div className="fahome">
          <h3 onClick={dropdown}>{showNav ? <FaTimes /> : <FaBars />}</h3>
        </div>
      </div>

      {showNav && <div className="nav-backdrop" onClick={dropdown} />}

      {showNav && (
        <div className="navbars2">
          {NAV_LINKS.map((link) => (
            <div className="navabarr" key={link.to}>
              <Link to={link.to} onClick={() => setShowNav(false)}>
                {link.icon} {link.label}
              </Link>
            </div>
          ))}
        </div>
      )}

      <div className="dash-page">
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
                    fill="#1DA1F2"
                  >
                    <path d="M22.25 12c0 5.65-4.6 10.25-10.25 10.25S1.75 17.65 1.75 12 6.35 1.75 12 1.75 22.25 6.35 22.25 12zm-11.5 4.5l7-7-1.5-1.5-5.5 5.5-2.5-2.5-1.5 1.5 4 4z" />
                  </svg>
                </h2>
                <p>AI | Fullstack Engineer</p>
              </div>
            </div>

            {/* Desktop-only top nav */}
            <nav className="navbars">
              {NAV_LINKS.map((link) => (
                <div className="navabarr" key={link.to}>
                  <Link to={link.to}>
                    {link.icon} {link.label}
                  </Link>
                </div>
              ))}
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
                  <li>Backend: Node.js, Express, Laravel, PHP, Springboot</li>
                  <li>Databases: MongoDB, MySQL, Firebase, Postgre sql</li>
                  <li>AI/ML: Python, TensorFlow, NLP</li>
                  <li>Tools: Git, Figma, WordPress</li>
                  <li>App development: React Native, Flutter (Dart)</li>
                  <li>High performance Applications: Java, C++</li>
                </ul>
              </section>

              <section className="services">
                <h4>Services I provide</h4>
                <ul>
                  <li>Custom Web Development</li>
                  <li>AI Integration & Automation</li>
                  <li>UI/UX Design</li>
                  <li>Deployment & Hosting</li>
                  <li>Mobile App development (CrossPlatform and Android)</li>
                  <li>Software design and Architecture</li>
                </ul>
                <a href="/contact">
                  <button className="cont2">Contact Me</button>
                </a>
              </section>

              <section className="resume-summary">
                <h4>Resume Snapshot</h4>
                <p>
                  3+ years of experience in fullstack engineering and AI development.
                  Skilled in building scalable, secure, and user-friendly platforms.
                </p>
                <Link to="/Resume" className="btn">
                  View Full Resume
                </Link>
              </section>

              {/* Contact Section */}
              <section className="contact-info">
                <h4>Contact Information</h4>
                <p className="contact-row">
                  <FaEnvelope /> mwendwamutinda24@example.com
                </p>
                <p className="contact-row">
                  <FaMapMarkerAlt /> Mombasa, Kenya
                </p>

                <div className="contact-links">
                  <a
                    className="link-pill linkedin"
                    href="https://www.linkedin.com/in/kelvin-mwendwa-0b92063a"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="link-icon" />
                    LinkedIn
                    <FaExternalLinkAlt className="link-ext" />
                  </a>
                  <a
                    className="link-pill github"
                    href="https://github.com/mwendwamutinda24"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="link-icon" />
                    GitHub
                    <FaExternalLinkAlt className="link-ext" />
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
