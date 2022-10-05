import React from "react";
import ProjectsImg from "./ProjectsImg";

function Projects(){
    return(
        <div className="mainPj">
            <div className="projects">
              <div className="project">
                <ProjectsImg />
                <span>CSS Layout Challenge</span>
              </div>
              <div className="project">
                <ProjectsImg />
                <span>GreenE</span>
              </div>
              <div className="project">
                <ProjectsImg />
                <span>Twitter Clone</span>
              </div>
              <div className="project">
                <ProjectsImg />
                <span>KakaoTalk Clone</span>
              </div>
              <div className="project">
                <ProjectsImg />
                <span>Zoom Clone</span>
              </div>
              <div className="project">
                <ProjectsImg />
                <span>React Movie App</span>
              </div>
              <div className="project">
              <ProjectsImg />
                <span>Chrome App</span>
              </div>
              <div className="project">
                <ProjectsImg />
                <span>AI IP Camera NVR</span>
              </div>
              <div className="project">
                <ProjectsImg />
                <span>SoulMovie</span>
              </div>
              <div className="project">
                <ProjectsImg />
                <span>2020 KBO Data Analysis</span>
              </div>
              <div className="project">
                <ProjectsImg />
                <span>AnoGAN System</span>
              </div>
              <div className="project mintchoco">
                <div className="projImg mintchocoice">
                  <img src="https://user-images.githubusercontent.com/64584574/194060629-75bb0dd7-5da8-4e2e-9033-94cc037eae03.png" alt="mintchoco" />
                </div>
                <span>mintchocoicecream</span>
              </div>
            </div>
          </div>
    )
}

export default Projects;