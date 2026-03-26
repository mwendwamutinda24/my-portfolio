
import { FaHome, FaServicestack, FaProjectDiagram, FaEnvelope,FaCog } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaBars,FaReact, FaNodeJs, FaJava, FaPython, FaPhp, FaGitAlt,FaTachometerAlt,FaUser} from "react-icons/fa";
import { 
  SiMongodb, 
  SiMysql, 
  SiCplusplus, 
  SiLaravel, 
  SiTailwindcss, 
  SiAngular, 
  SiNextdotjs, 
  SiVuedotjs,
  SiFigma, 
  SiExpress ,
  SiJavascript ,
  SiFirebase,
  SiWordpress

} from "react-icons/si";

import homeImg from "../assets/image3.JPG";
import Intro from "./Intro";
import { useState } from "react";
<link href="/website/css/uicons-"
rel="stylesheet"></link>
const HomePage=()=>{
     const tools = [
      { name: "ReactJS", icon: <FaReact color="#61DBFB" /> },       
      { name: "ExpressJS", icon: <SiExpress color="#000000" /> },   
      { name: "NodeJS", icon: <FaNodeJs color="#68A063" /> },       // Node green
      { name: "MongoDB", icon: <SiMongodb color="#4DB33D" /> },     
      { name: "Java", icon: <FaJava color="#007396" /> },           
      { name: "MySQL", icon: <SiMysql color="#4479A1" /> },         
      { name: "Git", icon: <FaGitAlt color="#F1502F" /> },         
      { name: "C++", icon: <SiCplusplus color="#00599C" /> },       
      { name: "Python", icon: <FaPython color="#3776AB" /> },       
      { name: "Laravel", icon: <SiLaravel color="#FF2D20" /> },     
      { name: "PHP", icon: <FaPhp color="#777BB4" /> },             
      { name: "TailwindCSS", icon: <SiTailwindcss color="#38B2AC" /> }, 
      { name: "Angular", icon: <SiAngular color="#DD0031" /> },     
      { name: "Next.js", icon: <SiNextdotjs color="#000000" /> },  
      { name: "Vue.js", icon: <SiVuedotjs color="#42B883" /> },     
      { name: "Figma", icon: <SiFigma color="#F24E1E" /> },         
      { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
       { name: "Firebase", icon: <SiFirebase color="#F7DF1E" /> },
        { name: "WordPress", icon: <SiWordpress color="#141413" /> } 
    ];

    const [showNav, setShowNav] = useState(false); 
    const dropdown = () => { setShowNav(!showNav); };
    return(
        <>

        
         <div className="navbar2">

         <div className="fahome">
          <h3 onClick={dropdown}><FaBars /></h3>
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
                <img  className="img"src={homeImg}/>
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
       

         <div className="navbars">
                   <div className="navabarr">
                        <Link to="/"><FaHome /> Home</Link>
                   </div>
                   <div className="navabarr">
                 <Link to="/Dashboard">< MdDashboard/>Dashboard</Link>
                    </div>
                   <div className="navabarr">
                        <Link to="/about"><FaUser/> About</Link>
                   </div>
                     <div className="navabarr">
                       <Link to="/services"><FaCog/> Services</Link>
                   </div>
                   <div className="navabarr">
                       <Link to="/my-Projects"><FaProjectDiagram />Projects</Link>
                   </div>
                   <div className="navabarr">
                        <Link to="/contact">< FaEnvelope /> Contact Me</Link>
                   </div>
                     
                        <div className="navabarr">
                       <Link to="/Kelvin Mutinda (2).pdf"><FaTachometerAlt/>My Resume</Link>
                   </div>
                   </div>

        </section>
      
           <div className="intro">
      <h1>Hi, I am Kelvin Mutinda</h1>
      <ul className="li">
        <li>Based in Mombasa</li>
        <li>Kenya</li>
        <li>Working remotely</li>
      </ul>
      <p>
        I am an experienced Software and AI engineer with 4 years experience in Web development,
        Application development, Desktop dev and AI engineering. My passion is rooted in
        solving real-world complex problems and collaborating with teams to achieve greater heights
        with scalable, user intuitive and mobile responsive software.
      </p>
      <hr/>
        <div className="tools">
  <h2>Tools that I use</h2>
  <hr/>
  <div className="tool-list row-1">
    {tools.slice(0,7).map((tool, index) => (
      <div key={index} className="tool">
        {tool.icon}
        <span>{tool.name}</span>
      </div>
    ))}
  </div>
  <div className="tool-list row-2">
    {tools.slice(7,14).map((tool, index) => (
      <div key={index} className="tool">
        {tool.icon}
        <span>{tool.name}</span>
      </div>
    ))}
  </div>
  <div className="tool-list row-3">
    {tools.slice(14).map((tool, index) => (
      <div key={index} className="tool">
        {tool.icon}
        <span>{tool.name}</span>
      </div>
    ))}
  </div>
</div>
<div className="contact-me">
  <div className="working">
    <h2>What I have been working on</h2>
    <p>I assists brands,companies ,Institutions ,startups and clients in Engineering  and managing 
      their Softwares and Online presence for their Businesses  through use of strategic  Critical 
      Thinking and Problem solving </p>
  </div>
  <div className="open-to">
    <h2>Let's work together</h2>
    <p>I am Open to Freelance opportunities,Hit me and let's work together </p>
    <button className="freelance"><Link to ="/contact">Contact Me</Link></button>
  </div>
</div>

      <hr/>
               <div className="believe">
          <h2>Values that I  believe in</h2>
        </div>
    <div className="values">
    <div className="values1">
         <i class="fi fi-rr-marker"></i>
        <h2>Problem Solving</h2>
        <p>Approaching challenges with structured solutions.</p>
        <p>Breaking down complex issues into manageable steps.</p>
        <p>Delivering practical outcomes that create real impact.</p>
    </div>
    <div className="values2">
       
        <h2>Critical Thinking</h2>
        <p>Evaluating information with clarity and logic.</p>
        <p>Questioning assumptions to uncover deeper insights.</p>
        <p>Making decisions based on evidence and reasoning.</p>
    </div>
    <div className="values3">
       
        <h2>System Analysis</h2>
        <p>Understanding how components interact within a system.</p>
        <p>Identifying inefficiencies and opportunities for improvement.</p>
        <p>Designing scalable solutions that align with long-term goals.</p>
    </div>
</div>
    </div>
        </div>
        
        </>
       
       
    )
}

export default HomePage




