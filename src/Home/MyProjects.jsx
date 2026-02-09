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
  SiJavascript
} from "react-icons/si";
import homeImg from "../assets/_MG_9971 (4).JPG";
import { useState } from "react";

const MyProjects = () => {
  const [showNav, setShowNav] = useState(false); 
  const dropdown = () => { setShowNav(!showNav); };

  return (
    <>
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
            <div className="navabarr"><Link to="/Resume"><FaTachometerAlt /> My Resume</Link></div>
          </div>
        )}
      </div>

      <div className="home-response">
        <section id="home">
          <div className="homepage">
            <div className="home2">
              <img className="img" src={homeImg} alt="Kelvin Mutinda"/>
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
            <div className="navabarr"><Link to="/Dashboard"><MdDashboard/> Dashboard</Link></div>
            <div className="navabarr"><Link to="/about"><FaUser/> About</Link></div>
            <div className="navabarr"><Link to="/services"><FaCog/> Services</Link></div>
            <div className="navabarr"><Link to="/my-Projects"><FaProjectDiagram /> Projects</Link></div>
            <div className="navabarr"><Link to="/contact"><FaEnvelope /> Contact Me</Link></div>
            <div className="navabarr"><Link to="/Resume"><FaTachometerAlt/> My Resume</Link></div>
          </div>
        </section>

        <section id="myProjects">
          <h2>My Projects</h2>
          <p>Projects that I have worked on both Fullstack, Designs and Featured</p>
          <hr/>
          <div className="myProject">

            {/* School Portal */}
            <a href="https://kelvinportal.infinityfreeapp.com/" target="_blank" rel="noopener noreferrer" className="project4">
              <img src={school} className="pine" alt="School Portal" />
              <p>
                This is a PHP-based school portal with an interactive user interface and authentication
                for managing all school activities including fee payment, academic records, storing and
                retrieving results for learners, and tracking their progress.
                <div className="toolsin">
                  <p className="toolin"><SiLaravel/></p>
                  <p className="toolin"><SiMysql/></p>
                  <p className="toolin"><SiTailwindcss/></p>
                  <p className="toolin"><SiJavascript/></p>
                </div>
              </p>
              <div className="overlay"><span>View Project ➜</span></div>
            </a>

            {/* Propel Company AI */}
            <a href="https://propel-company-ai-website-zkh2.vercel.app/" target="_blank" rel="noopener noreferrer" className="project4">
              <img src="/Propel.png" className="pine" alt="Propel Company AI Project" />
              <p>
                Propel Company AI is an enterprise-grade MVP designed to build trust through clarity,
                evidence, and minimalism. It features a precision-engineered frontend with responsive
                navigation, hero sections, and forms that align with enterprise standards. The platform
                integrates modern UI/UX principles to communicate reliability and professionalism,
                serving as a foundation for AI-driven business solutions.
                <div className="toolsin">
                  <p className="toolin"><FaReact/></p>
                  <p className="toolin"><SiTailwindcss/></p>
                  <p className="toolin"><FaNodeJs/></p>
                  <p className="toolin"><SiNextdotjs/></p>
                </div>
              </p>
              <div className="overlay"><span>View Project ➜</span></div>
            </a>
            
          <a
  href="https://kelvinportal.infinityfreeapp.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="project4"
>
  <img src={school} className="pine" alt="ExperBrain Application" />
  <p>
    ExperBrain is a trust-driven enterprise application designed to streamline
    workflows with clarity, evidence, and user trust. It integrates
    authentication, structured data handling, and intuitive navigation to
    deliver a professional-grade experience.
  </p>
  <div className="toolsin">
    <p className="toolin"><SiLaravel/></p>
    <p className="toolin"><SiMysql/></p>
    <p className="toolin"><SiTailwindcss/></p>
    <p className="toolin"><SiJavascript/></p>
  </div>
  <div className="overlay"><span>View Project ➜</span></div>
</a>


            {/* Pine Creative */}
            <a href="https://pinecreative2-mw4b.vercel.app" target="_blank" rel="noopener noreferrer" className="project4">
              <img src={aboutImg} className="pine" alt="Pine Creative Project" />
              <p>
                I built a custom static web platform for Pine Creative Company, designed to be the backbone
                of their services like web development, videography, and film production. It features a
                modern UI, full mobile responsiveness, and fast performance.
                <div className="toolsin">
                  <p className="toolin"><FaNodeJs/></p>
                  <p className="toolin"><FaReact/></p>
                  <p className="toolin"><SiTailwindcss/></p>
                  <p className="toolin"><SiJavascript/></p>
                </div>
              </p>
              <div className="overlay"><span>View Project ➜</span></div>
            </a>

            {/* E-commerce Platform */}
            <a href="https://stephenkanja.infinityfreeapp.com/" target="_blank" rel="noopener noreferrer" className="project4">
              <img src={ecomerce} className="pine" alt="E-commerce Platform" />
              <p>
                This is a Laravel-based e-commerce platform built for selling electronic products. It
                includes features such as product listings, shopping cart functionality, secure user
                authentication, and order management.
                <div className="toolsin">
                  <p className="toolin"><SiLaravel/></p>
                  <p className="toolin"><SiMysql/></p>
                  <p className="toolin"><SiTailwindcss/></p>
                  <p className="toolin"><SiJavascript/></p>
                </div>
              </p>
              <div className="overlay"><span>View Project ➜</span></div>
            </a>

          </div>
        </section>
      </div>
    </>
  );
};

export default MyProjects;






