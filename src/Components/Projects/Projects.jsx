import React from "react";
import "./Projects.css";
import { FaReact, FaHardHat } from "react-icons/fa";
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import arun from '../../assets/img/arun.jpg';
import arun2 from '../../assets/img/arun2.jpg';
import arun3 from '../../assets/img/arun3.png';
import arun1 from '../../assets/img/arun1.jpg'
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different">Projects</h2>
        <div className="allProjects">
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={arun}
                    alt=''
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Men's Salon</h2>
                <p>
                 Designed and developed a Men's Salon website using HTML, CSS, and JavaScript, featuring booking functionality with a formatted email confirmation system.
                </p>
                <div>
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                  <FaReact />
                  <SiMaterialui />
                </div>
                <div>
                  <a
                    href="https://arunlead.github.io/CODSOFT/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/arunlead/CODSOFT.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={arun1}
                    alt="Image Generation App"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Jarvis Virtual Voice Assistant</h2>
                <p>
                Developed a Jarvis-inspired voice assistant using JavaScript for automated phone control and information retrieval, enhancing user interaction and device management capabilities
                </p>
                <div>
                  <DiCss3 />
                  <SiHtml5 />
                  <IoLogoJavascript />
                </div>
                <div>
                  <a
                    href="https://arunlead.github.io/jarvis/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/arunlead/jarvis.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={arun3}
                    alt="Image Generation App"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Portfolio</h2>
                <p>
                   Developed a personal portfolio website showcasing skills, projects, and contact information using HTML, CSS, and JavaScript to highlight achievements and professional capabilities.
                </p>
                <div>
                  <DiCss3 />
                  <SiHtml5 />
                  <IoLogoJavascript />
                </div>
                <div>
                  <a
                    href="https://arunlead.github.io/CODSOFT2/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/arunlead/CODSOFT2.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={arun2}
                    alt=""
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Calculator</h2>
                <p>
                Created a dynamic calculator web application using HTML, CSS, and JavaScript, enabling users to perform various calculations with intuitive user interface and functionality.
                </p>
                <div>
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                </div>
                <div>
                  <a
                    href="https://arunlead.github.io/CODSOFT3/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See it Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/arunlead/CODSOFT3.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
           </div>
           </div>
          

         
    </>
  );
};
