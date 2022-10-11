import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import ProjectsImg from "./ProjectsImg";

function Projects(){
  const [shown, setShown] = useState(false);
  const [proj, setProj] = useState("");

  const onShow = (e) =>{
    e.preventDefault();
    setShown(true);
    const parents = e.currentTarget.id;
    setProj(parents);
  }
  const unShow = () => {
    setShown(false);
    setProj("");
  }
    return(
        <div className="mainPj">
            <div className="projects">
              <div className="project" id="css" onClick={onShow}>
                <ProjectsImg showObj={shown}/>
                <span>CSS Layout Challenge</span>
              </div>
              <div className="project" id="greene" onClick={onShow}>
                <ProjectsImg />
                <span>GreenE</span>
              </div>
              <div className="project" id="twitter" onClick={onShow}>
                <ProjectsImg />
                <span>Twitter Clone</span>
              </div>
              <div className="project" id="kakao" onClick={onShow}>
                <ProjectsImg />
                <span>KakaoTalk Clone</span>
              </div>
              <div className="project" id="zoom" onClick={onShow}>
                <ProjectsImg />
                <span>Zoom Clone</span>
              </div>
              <div className="project" id="react" onClick={onShow}>
                <ProjectsImg />
                <span>React Movie App</span>
              </div>
              <div className="project" id="chrome" onClick={onShow}>
              <ProjectsImg />
                <span>Chrome App</span>
              </div>
              <div className="project" id="nvr" onClick={onShow}>
                <ProjectsImg />
                <span>AI IP Camera NVR</span>
              </div>
              <div className="project" id="soulmovie" onClick={onShow}>
                <ProjectsImg />
                <span>SoulMovie</span>
              </div>
              <div className="project" id="kbo" onClick={onShow}>
                <ProjectsImg />
                <span>2020 KBO Data Analysis</span>
              </div>
              <div className="project" id="anogan" onClick={onShow}>
                <ProjectsImg />
                <span>AnoGAN System</span>
              </div>
              <div className="project mintchoco">
                <div className="projImg mintchocoice">
                  <a href="https://mintchocoicecream.github.io/" >
                    <img src="https://user-images.githubusercontent.com/64584574/194060629-75bb0dd7-5da8-4e2e-9033-94cc037eae03.png" alt="mintchoco" />
                  </a>
                </div>
                <span>mintchocoicecream</span>
              </div>
              {shown&&(
                <div className="showProj">
                  {proj&& (
                    <div className="projForm">
                      <span>{proj}</span>
                      <span className="closedProj" onClick={unShow}><FontAwesomeIcon icon={faXmark}/></span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
    )
}

export default Projects;