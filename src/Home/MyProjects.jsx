import aboutImg from "../assets/About.png";
import {
  FaHome, FaProjectDiagram, FaEnvelope, FaCog, FaBars,
  FaReact, FaNodeJs, FaTachometerAlt, FaUser
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import {
  SiMysql, SiLaravel, SiTailwindcss, SiNextdotjs,
  SiJavascript, SiPython, SiStreamlit
} from "react-icons/si";
import homeImg from "../assets/image3.JPG";
import { useState } from "react";

const iconMap = {
  nodejs: <FaNodeJs />,
  react: <FaReact />,
  tailwind: <SiTailwindcss />,
  javascript: <SiJavascript />,
  mysql: <SiMysql />,
  laravel: <SiLaravel />,
  nextjs: <SiNextdotjs />,
  python: <SiPython />,
  streamlit: <SiStreamlit />,
};

// Presidential Awards project — styled preview card matching the dark gold UI
const PresidentialAwardsPreview = () => (
  <div style={{
    width: "100%", height: "100%",
    background: "#0a0a0a",
    display: "flex", flexDirection: "column",
    fontFamily: "Georgia, serif",
    overflow: "hidden",
    position: "relative",
  }}>
    {/* Header bar */}
    <div style={{
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "10px 14px",
      borderBottom: "1px solid #2a2a2a",
    }}>
      <div>
        <div style={{ color: "#b8962e", fontSize: "8px", letterSpacing: "2px", textTransform: "uppercase" }}>THE</div>
        <div style={{ color: "#d4af4a", fontSize: "12px", fontWeight: "700", letterSpacing: "0.5px" }}>Presidential Annual Awards</div>
      </div>
      <div style={{ display: "flex", gap: "6px" }}>
        <span style={{ background: "transparent", border: "1px solid #d4af4a", color: "#d4af4a", fontSize: "7px", padding: "3px 7px", borderRadius: "4px", letterSpacing: "1px" }}>0 VOTES CAST</span>
        <span style={{ background: "transparent", border: "1px solid #666", color: "#999", fontSize: "7px", padding: "3px 7px", borderRadius: "4px" }}>ADMIN ↗</span>
      </div>
    </div>
    {/* Nominee cards grid */}
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "6px", padding: "8px 10px", flex: 1 }}>
      {["Mariga Strong", "Jimmy", "Brayo", "Tonny"].map((name, i) => (
        <div key={i} style={{
          background: "#111",
          borderRadius: "8px",
          overflow: "hidden",
          border: "1px solid #222",
          display: "flex", flexDirection: "column",
        }}>
          <div style={{
            height: "60px",
            background: i === 0 ? "#1a1a1a" : `linear-gradient(135deg, #1e2a1e 0%, #2a3a2a 100%)`,
            position: "relative",
            display: "flex", alignItems: "flex-end", justifyContent: "center", paddingBottom: "4px",
          }}>
            <div style={{
              position: "absolute", top: "4px", right: "4px",
              background: "#222", color: "#999", fontSize: "7px",
              width: "14px", height: "14px", borderRadius: "50%",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>#{i + 1}</div>
            <span style={{ color: "#fff", fontSize: "8px", fontWeight: "600", textShadow: "0 1px 3px rgba(0,0,0,0.8)" }}>{name}</span>
          </div>
          <div style={{ padding: "5px 6px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <div style={{ color: "#d4af4a", fontSize: "10px", fontWeight: "700" }}>0</div>
              <div style={{ color: "#666", fontSize: "7px" }}>votes</div>
            </div>
            <button style={{
              background: "#d4af4a", color: "#000", fontSize: "6px",
              fontWeight: "700", padding: "3px 6px", borderRadius: "4px",
              border: "none", cursor: "pointer", letterSpacing: "0.5px",
            }}>VOTE NOW</button>
          </div>
        </div>
      ))}
    </div>
    {/* 5th card partial */}
    <div style={{ padding: "0 10px 8px", display: "flex", gap: "6px" }}>
      <div style={{
        width: "calc(25% - 4.5px)",
        background: "#111",
        borderRadius: "8px",
        overflow: "hidden",
        border: "1px solid #222",
      }}>
        <div style={{
          height: "60px",
          background: "linear-gradient(135deg, #1e2a1e 0%, #2a3a2a 100%)",
          position: "relative",
          display: "flex", alignItems: "flex-end", justifyContent: "center", paddingBottom: "4px",
        }}>
          <div style={{
            position: "absolute", top: "4px", right: "4px",
            background: "#222", color: "#999", fontSize: "7px",
            width: "14px", height: "14px", borderRadius: "50%",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>#5</div>
          <span style={{ color: "#fff", fontSize: "8px", fontWeight: "600" }}>Bamalekei</span>
        </div>
        <div style={{ padding: "5px 6px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <div style={{ color: "#d4af4a", fontSize: "10px", fontWeight: "700" }}>0</div>
            <div style={{ color: "#666", fontSize: "7px" }}>votes</div>
          </div>
          <button style={{
            background: "#d4af4a", color: "#000", fontSize: "6px",
            fontWeight: "700", padding: "3px 6px", borderRadius: "4px",
            border: "none", cursor: "pointer",
          }}>VOTE NOW</button>
        </div>
      </div>
    </div>
  </div>
);

// FemScan AI project — styled preview matching dark teal UI
const FemScanPreview = () => (
  <div style={{
    width: "100%", height: "100%",
    background: "linear-gradient(135deg, #0a1f1a 0%, #0d2b22 50%, #081a14 100%)",
    display: "flex", flexDirection: "column",
    fontFamily: "'Segoe UI', sans-serif",
    overflow: "hidden",
    position: "relative",
  }}>
    {/* Subtle radial glow */}
    <div style={{
      position: "absolute", top: "30%", left: "50%", transform: "translate(-50%, -50%)",
      width: "200px", height: "200px",
      background: "radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%)",
      pointerEvents: "none",
    }} />
    {/* Nav */}
    <div style={{
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "10px 16px",
      borderBottom: "1px solid rgba(16,185,129,0.15)",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
        <span style={{ fontSize: "12px" }}>🔬</span>
        <span style={{ color: "#6ee7b7", fontSize: "11px", fontWeight: "600" }}>FemScan AI</span>
      </div>
      <div style={{ display: "flex", gap: "6px" }}>
        {["1 · Screen", "2 · Analyse", "3 · Report"].map((label, i) => (
          <span key={i} style={{
            background: i === 0 ? "#10b981" : "rgba(16,185,129,0.15)",
            color: i === 0 ? "#fff" : "#6ee7b7",
            fontSize: "8px", fontWeight: "600",
            padding: "3px 8px", borderRadius: "20px",
            border: `1px solid ${i === 0 ? "#10b981" : "rgba(16,185,129,0.3)"}`,
          }}>{label}</span>
        ))}
      </div>
    </div>
    {/* Hero content */}
    <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "12px 20px", textAlign: "center" }}>
      <div style={{ color: "#10b981", fontSize: "8px", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "10px", fontWeight: "600" }}>
        AI-POWERED WOMEN'S HEALTH
      </div>
      <div style={{ color: "#fff", fontSize: "16px", fontWeight: "800", lineHeight: "1.2", marginBottom: "4px" }}>
        Cervical Cancer Screening
      </div>
      <div style={{ color: "#10b981", fontSize: "16px", fontWeight: "800", marginBottom: "10px" }}>
        Decision Support
      </div>
      <div style={{ color: "#9ca3af", fontSize: "9px", lineHeight: "1.6", maxWidth: "220px", marginBottom: "14px" }}>
        FemScan AI combines cytology image analysis, HPV risk scoring, and endometriosis symptom screening into a single triage workflow.
      </div>
      <button style={{
        background: "transparent",
        border: "1.5px solid #10b981",
        color: "#10b981",
        fontSize: "9px", fontWeight: "600",
        padding: "7px 18px", borderRadius: "6px",
        cursor: "pointer", letterSpacing: "0.3px",
      }}>Start Assessment →</button>
    </div>
  </div>
);

const projects = [
  {
    href: "https://pinecreative2-mw4b.vercel.app",
    renderCustom: null,
    useImported: true,
    img: null,
    alt: "Pine Creative Project",
    title: "Pine Creative",
    tag: "Web Platform",
    tagColor: "#1DA1F2",
    description:
      "A custom static web platform for Pine Creative Company, the backbone of their services like web development, videography, and film production. Features a modern UI, full mobile responsiveness, and fast performance.",
    tools: ["nodejs", "react", "tailwind", "javascript"],
    isNew: false,
  },
  {
    href: "https://propel-company-ai-website-zkh2.vercel.app/",
    renderCustom: null,
    useImported: false,
    img: "/Propel.png",
    alt: "Propel Company AI Project",
    title: "Propel Company AI",
    tag: "Enterprise MVP",
    tagColor: "#7C3AED",
    description:
      "An enterprise-grade MVP designed to build trust through clarity, evidence, and minimalism. Features precision-engineered frontend with responsive navigation, hero sections, and forms aligned with enterprise standards.",
    tools: ["react", "tailwind", "nodejs", "nextjs"],
    isNew: false,
  },
  {
    href: "https://exper-brain-4pi6.vercel.app/",
    renderCustom: null,
    useImported: false,
    img: "/Experbrain.png",
    alt: "ExperBrain Application",
    title: "ExperBrain",
    tag: "Enterprise App",
    tagColor: "#0F6E56",
    description:
      "A trust-driven enterprise application designed to streamline workflows with clarity, evidence, and user trust. Integrates authentication, structured data handling, and intuitive navigation for a professional-grade experience.",
    tools: ["laravel", "mysql", "tailwind", "javascript"],
    isNew: false,
  },
  {
    href: "https://predictionsite-gr8r.vercel.app/",
    renderCustom: null,
    useImported: false,
    img: "/Ziggy Martoh.png",
    alt: "Prediction Platform",
    title: "Ziggy Match Predictions",
    tag: "MERN Stack",
    tagColor: "#D85A30",
    description:
      "A full-stack MERN prediction platform for seamless match insights and user engagement. Combines robust backend logic with a sleek responsive interface, secure data handling, and real-time updates for admins and users.",
    tools: ["nodejs", "react", "tailwind", "javascript"],
    isNew: false,
  },
  {
    href: "https://femscan.streamlit.app/",
    renderCustom: "femscan",
    useImported: false,
    img: null,
    alt: "FemScan AI Application",
    title: "FemScan AI",
    tag: "AI · Healthcare",
    tagColor: "#D4537E",
    description:
      "An AI-powered health screening tool built with Python and Streamlit that assists in early detection of cervical and breast cancer. Leverages machine learning models to provide instant risk assessments, empowering women with accessible, data-driven health insights.",
    tools: ["python", "streamlit"],
    isNew: true,
  },
  {
    href: "https://presidential-awards.vercel.app/",
    renderCustom: "presidential",
    useImported: false,
    img: null,
    alt: "Presidential Awards Portal",
    title: "Presidential Awards Portal",
    tag: "Full Stack",
    tagColor: "#185FA5",
    description:
      "A prestigious digital platform for managing and showcasing Presidential Award nominations, recipients, and ceremonies. Features secure admin controls, nominee tracking, real-time status updates, and a public-facing gallery of award laureates.",
    tools: ["react", "nodejs", "tailwind", "javascript"],
    isNew: true,
  },
  {
    href: "https://stephenkanjaportal.infinityfreeapp.com/",
    renderCustom: null,
    useImported: false,
    img: "/StephenKanja.jpg",
    alt: "School Portal",
    title: "Stephen Kanja School Portal",
    tag: "EdTech",
    tagColor: "#639922",
    description:
      "A PHP-based school portal with interactive UI and authentication for managing school activities including fee payment, academic records, storing and retrieving results for learners, and tracking their progress.",
    tools: ["react", "nodejs", "tailwind", "javascript"],
    isNew: false,
  },
  {
    href: "https://www.usfederalaid.com/",
    renderCustom: null,
    useImported: false,
    img: "/FederalAid.png",
    alt: "Federal Aid Portal",
    title: "US Federal Aid Portal",
    tag: "MERN · FinTech",
    tagColor: "#533AB7",
    description:
      "A secure platform for managing student financial aid applications, tracking eligibility, processing awards, and offering real-time updates. Integrates authentication, responsive UI, and a robust backend for smooth aid record handling.",
    tools: ["react", "nodejs", "tailwind", "javascript"],
    isNew: false,
  },
];

const MyProjects = () => {
  const [showNav, setShowNav] = useState(false);

  const dropdown = () => {
    setShowNav(!showNav);
  };

  const renderImage = (project) => {
    if (project.renderCustom === "presidential") {
      return <PresidentialAwardsPreview />;
    }
    if (project.renderCustom === "femscan") {
      return <FemScanPreview />;
    }
    if (project.useImported) {
      return <img src={aboutImg} alt={project.alt} />;
    }
    if (project.img) {
      return <img src={project.img} alt={project.alt} />;
    }
    return <div className="card-placeholder">💻</div>;
  };

  return (
    <>
      <style>{`
        .project-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
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
        .project-card:hover .card-img-wrap img {
          transform: scale(1.04);
        }
        .project-card:hover .card-tool-icon {
          color: #444;
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
        .card-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 52px;
          opacity: 0.2;
        }
        .card-overlay {
          position: absolute;
          inset: 0;
          background: rgba(10,10,30,0.55);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.25s ease;
          z-index: 10;
        }
        .card-overlay span {
          color: #fff;
          font-size: 15px;
          font-weight: 600;
          letter-spacing: 0.3px;
          border: 1.5px solid rgba(255,255,255,0.7);
          padding: 9px 22px;
          border-radius: 30px;
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
          z-index: 11;
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

      <div className="home-response">
        <section id="home">
          <div className="homepage">
            <div className="home2">
              <img className="img" src={homeImg} alt="Kelvin Mutinda" />
            </div>
            <div className="Home1">
              <h2 style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                Kelvin Mutinda
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#1DA1F2">
                  <path d="M22.25 12c0 5.65-4.6 10.25-10.25 10.25S1.75 17.65 1.75 12 6.35 1.75 12 1.75 22.25 6.35 22.25 12zm-11.5 4.5l7-7-1.5-1.5-5.5 5.5-2.5-2.5-1.5 1.5 4 4z" />
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
          <p>Projects I have worked on across Fullstack, AI, Design, and Featured work</p>
          <hr />

          <div className="project-grid">
            {projects.map((project, i) => (
              <a
                key={i}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card"
              >
                <div className="card-img-wrap">
                  {renderImage(project)}
                  {project.isNew && (
                    <span className="card-new-badge">New</span>
                  )}
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
                        border: "1px solid " + project.tagColor + "33",
                      }}
                    >
                      {project.tag}
                    </span>
                  </div>

                  <p className="card-desc">{project.description}</p>

                  <div className="card-tools">
                    {project.tools.map((toolKey, j) => (
                      <span key={j} className="card-tool-icon">
                        {iconMap[toolKey]}
                      </span>
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
