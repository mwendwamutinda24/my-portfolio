import aboutImg from "../assets/About.png";
import { FaHome, FaProjectDiagram, FaEnvelope, FaCog, FaBars, FaReact, FaNodeJs, FaTachometerAlt, FaUser } from "react-icons/fa";
import school from "../assets/Kanja.png";
import ecomerce from "../assets/image.png";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { 
  SiMysql, 
  SiLaravel, 
  SiTailwindcss, 
  SiNextdotjs, 
  SiJavascript,
  SiPython,
  SiStreamlit
} from "react-icons/si";
import homeImg from "../assets/image3.JPG";
import { useState } from "react";

const projects = [
  {
    href: "https://pinecreative2-mw4b.vercel.app",
    img: null,
    imgSrc: null,
    importedImg: "aboutImg",
    alt: "Pine Creative Project",
    title: "Pine Creative",
    tag: "Web Platform",
    tagColor: "#1DA1F2",
    description:
      "A custom static web platform for Pine Creative Company, designed to be the backbone of their services like web development, videography, and film production. It features a modern UI, full mobile responsiveness, and fast performance.",
    tools: [<FaNodeJs />, <FaReact />, <SiTailwindcss />, <SiJavascript />],
  },
  {
    href: "https://propel-company-ai-website-zkh2.vercel.app/",
    img: "/Propel.png",
    alt: "Propel Company AI Project",
    title: "Propel Company AI",
    tag: "Enterprise MVP",
    tagColor: "#7C3AED",
    description:
      "An enterprise-grade MVP designed to build trust through clarity, evidence, and minimalism. Features precision-engineered frontend with responsive navigation, hero sections, and forms aligned with enterprise standards.",
    tools: [<FaReact />, <SiTailwindcss />, <FaNodeJs />, <SiNextdotjs />],
  },
  {
    href: "https://exper-brain-4pi6.vercel.app/",
    img: "/Experbrain.png",
    alt: "ExperBrain Application",
    title: "ExperBrain",
    tag: "Enterprise App",
    tagColor: "#0F6E56",
    description:
      "A trust-driven enterprise application designed to streamline workflows with clarity, evidence, and user trust. Integrates authentication, structured data handling, and intuitive navigation for a professional-grade experience.",
    tools: [<SiLaravel />, <SiMysql />, <SiTailwindcss />, <SiJavascript />],
  },
  {
    href: "https://predictionsite-gr8r.vercel.app/",
    img: "./Ziggy Martoh.png",
    alt: "Prediction Platform",
    title: "Ziggy Match Predictions",
    tag: "MERN Stack",
    tagColor: "#D85A30",
    description:
      "A full-stack MERN prediction platform designed for seamless match insights and user engagement. Combines robust backend logic with a sleek, responsive interface, secure data handling, and real-time updates for admins and users.",
    tools: [<FaNodeJs />, <FaReact />, <SiTailwindcss />, <SiJavascript />],
  },
  {
    href: "https://femscan.streamlit.app/",
    img: null,
    alt: "FemScan AI Application",
    title: "FemScan AI",
    tag: "AI · Healthcare",
    tagColor: "#D4537E",
    description:
      "An AI-powered health screening tool built with Python and Streamlit that assists in the early detection of cervical and breast cancer. Leverages machine learning models to analyze input data and provide instant risk assessments, empowering women with accessible, data-driven health insights.",
    tools: [<SiPython />, <SiStreamlit />],
    isNew: true,
  },
  {
    href: "https://presidential-awards.vercel.app/",
    img: null,
    alt: "Presidential Awards Portal",
    title: "Presidential Awards Portal",
    tag: "Full Stack",
    tagColor: "#185FA5",
    description:
      "A prestigious digital platform for managing and showcasing Presidential Award nominations, recipients, and ceremonies. Features a clean, authoritative UI with secure admin controls, nominee tracking, real-time status updates, and a public-facing gallery of award laureates.",
    tools: [<FaReact />, <FaNodeJs />, <SiTailwindcss />, <SiJavascript />],
    isNew: true,
  },
  {
    href: "https://stephenkanjaportal.infinityfreeapp.com/",
    img: "./StephenKanja.jpg",
    alt: "School Portal",
    title: "Stephen Kanja School Portal",
    tag: "EdTech",
    tagColor: "#639922",
    description:
      "A PHP-based school portal with an interactive user interface and authentication for managing all school activities including fee payment, academic records, storing and retrieving results for learners, and tracking their progress.",
    tools: [<FaReact />, <FaNodeJs />, <SiTailwindcss />, <SiJavascript />],
  },
  {
    href: "https://www.usfederalaid.com/",
    img: "./FederalAid .png",
    alt: "Federal Aid Portal",
    title: "US Federal Aid Portal",
    tag: "MERN · FinTech",
    tagColor: "#533AB7",
    description:
      "A secure platform for managing student financial aid applications, tracking eligibility, processing awards, and offering real-time updates. Integrates authentication, responsive UI, and a robust backend for smooth aid record handling.",
    tools: [<FaReact />, <FaNodeJs />, <SiTailwindcss />, <SiJavascript />],
  },
];

const MyProjects = () => {
  const [showNav, setShowNav] = useState(false);
  const dropdown = () => { setShowNav(!showNav); };

  return (
    <>
      <style>{`
        .project-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
          gap: 28px;
          padding: 12px 0 40px;
        }

        .project-card {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          background: #ffffff;
          border: 1px solid #e8e8e8;
          box-shadow: 0 2px 12px rgba(0,0,0,0.06);
          display: flex;
          flex-direction: column;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          text-decoration: none;
          color: inherit;
          cursor: pointer;
        }

        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 32px rgba(0,0,0,0.13);
        }

        .project-card:hover .card-overlay {
          opacity: 1;
        }

        .card-img-wrap {
          position: relative;
          width: 100%;
          height: 195px;
          background: linear-gradient(135deg, #f3f4f6 0%, #e9eaf0 100%);
          overflow: hidden;
          flex-shrink: 0;
        }

        .card-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.35s ease;
        }

        .project-card:hover .card-img-wrap img {
          transform: scale(1.04);
        }

        .card-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 48px;
          opacity: 0.25;
        }

        .card-overlay {
          position: absolute;
          inset: 0;
          background: rgba(10, 10, 30, 0.55);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.25s ease;
        }

        .card-overlay span {
          color: #fff;
          font-size: 15px;
          font-weight: 600;
          letter-spacing: 0.3px;
          border: 1.5px solid rgba(255,255,255,0.7);
          padding: 9px 22px;
          border-radius: 30px;
          backdrop-filter: blur(4px);
        }

        .card-new-badge {
          position: absolute;
          top: 12px;
          right: 12px;
          background: #22c55e;
          color: #fff;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.5px;
          padding: 3px 10px;
          border-radius: 20px;
          text-transform: uppercase;
          box-shadow: 0 2px 8px rgba(34,197,94,0.35);
        }

        .card-body {
          padding: 18px 20px 20px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          flex: 1;
        }

        .card-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 10px;
        }

        .card-title {
          font-size: 16px;
          font-weight: 700;
          color: #111;
          margin: 0;
          line-height: 1.3;
        }

        .card-tag {
          font-size: 11px;
          font-weight: 600;
          padding: 3px 10px;
          border-radius: 20px;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .card-desc {
          font-size: 13.5px;
          color: #555;
          line-height: 1.65;
          margin: 0;
          flex: 1;
        }

        .card-tools {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
          padding-top: 6px;
          border-top: 1px solid #f0f0f0;
          margin-top: 4px;
        }

        .card-tool-icon {
          font-size: 18px;
          color: #888;
          transition: color 0.2s;
        }

        .project-card:hover .card-tool-icon {
          color: #444;
        }

        #myProjects h2 {
          font-size: 2rem;
          font-weight: 800;
          color: #111;
          margin-bottom: 6px;
        }

        #myProjects > p {
          color: #666;
          font-size: 15px;
          margin-bottom: 20px;
        }

        #myProjects hr {
          border: none;
          border-top: 2px solid #eee;
          margin-bottom: 28px;
        }
      `}</style>

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
        <section id="home">
          <div className="homepage">
            <div className="home2">
              <img className="img" src={homeImg} alt="Kelvin Mutinda" />
            </div>
            <div className="Home1">
              <h2 style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                Kelvin Mutinda
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                  viewBox="0 0 24 24" fill="#1DA1F2">
                  <path d="M22.25 12c0 5.65-4.6 10.25-10.25 10.25S1.75 17.65 1.75 12 6.35 1.75 12 1.75 22.25 6.35 22.25 12zm-11.5 4.5l7-7-1.5-1.5-5.5 5.5-2.5-2.5-1.5 1.5 4 4z"/>
                </svg>
              </h2>
              <p>AI | Fullstack Engineer</p>
            </div>
          </div>

          <div className="navbars">
            <div className="navabarr"><Link to="/"><FaHome /> Home</Link></div>
            <div className="navabarr"><Link to="/Dashboard"><MdDashboard /> Dashboard</Link></div>
            <div className="navabarr"><Link to="/about"><FaUser /> About</Link></div>
            <div className="navabarr"><Link to="/services"><FaCog /> Services</Link></div>
            <div className="navabarr"><Link to="/my-Projects"><FaProjectDiagram /> Projects</Link></div>
            <div className="navabarr"><Link to="/contact"><FaEnvelope /> Contact Me</Link></div>
            <div className="navabarr"><Link to="/Kelvin Mutinda (2).pdf"><FaTachometerAlt /> My Resume</Link></div>
          </div>
        </section>

        <section id="myProjects">
          <h2>My Projects</h2>
          <p>Projects I've built across Fullstack, AI, Design, and Featured work</p>
          <hr />

          <div className="project-grid">
            {projects.map((project, i) => (
              
                key={i}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card"
              >
                <div className="card-img-wrap">
                  {project.importedImg === "aboutImg" ? (
                    <img src={aboutImg} alt={project.alt} />
                  ) : project.img ? (
                    <img src={project.img} alt={project.alt} />
                  ) : (
                    <div className="card-placeholder">🖥️</div>
                  )}
                  {project.isNew && <span className="card-new-badge">New</span>}
                  <div className="card-overlay">
                    <span>View Project ➜</span>
                  </div>
                </div>

                <div className="card-body">
                  <div className="card-header">
                    <p className="card-title">{project.title}</p>
                    <span
                      className="card-tag"
                      style={{
                        background: project.tagColor + "18",
                        color: project.tagColor,
                        border: `1px solid ${project.tagColor}33`,
                      }}
                    >
                      {project.tag}
                    </span>
                  </div>

                  <p className="card-desc">{project.description}</p>

                  <div className="card-tools">
                    {project.tools.map((icon, j) => (
                      <span key={j} className="card-tool-icon">{icon}</span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default MyProjects;
