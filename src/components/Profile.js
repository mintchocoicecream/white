import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { faAnglesLeft, faAnglesRight, faAward, faLaptopCode, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Contact from "./Contact";

function Profile(){
  const [contact, setContact] = useState(false);
  const [pages, setPages] = useState(0);
  
  function onContact(){
    if(contact===false){
      setContact(true);
    }
  }
  function onClose(){
    setContact(false);
  }

  function handleLeft(){
    if(pages === 0){
      setPages(2)
    }else if(pages === 1){
      setPages(0)
    }else{
      setPages(1)
    }
  }
  function handleRight(){
    if(pages === 0){
      setPages(1)
    }else if(pages === 1){
      setPages(2)
    }else{
      setPages(0)
    }
  }
    return(
      <>
        <div className="mainProfile">
          {pages===0&&(
            <div className="profile">
              <div className="profileOne">
                <div className="profileImg">
                  <img src="https://user-images.githubusercontent.com/64584574/193724604-c8da3682-821c-4500-8c96-028a9bfa1f8e.jpg" alt="profileImage" />
                </div>
                <div className="profileName">
                  <h3>서현정</h3>
                  <p>Seo Hyunjeong</p>
                </div>
                <div className="profileJob">
                  <h5><FontAwesomeIcon icon={faLaptopCode}/>Web Dev(Front-End)</h5>
                </div>
                <div className="profileSkills">
                  <h4>Skills</h4>
                  <div>
                    <span>
                      <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="js" width={"28%"}/>
                      <p>Javascript</p>
                    </span>
                    <span>
                      <img src="https://cdn-icons-png.flaticon.com/512/520/520890.png" alt="react" width={"28%"}/>
                      <p>React</p>
                    </span>
                    <span>
                      <img src="https://cdn-icons-png.flaticon.com/512/5968/5968350.png" alt="python" width={"28%"}/>
                      <p>Python</p>
                    </span>
                    <span>
                      <img src="https://cdn-icons-png.flaticon.com/512/5968/5968381.png" alt="ts" width={"28%"}></img>
                      <p>Typescript</p>
                    </span>
                    <span>
                      <img src="https://img.icons8.com/color/344/html-5--v1.png" alt="html5" width={"35%"}></img>
                      <p>HTML5</p>
                    </span>
                    <span>
                      <img src="https://img.icons8.com/color/344/css3.png" alt="css3" width={"35%"}></img>
                      <p>CSS3</p>
                    </span>
                  </div>
                </div>
                <div className="contact">
                  <h4>Contact</h4>
                  <span onClick={onContact}>mintchocoicecream@gmail.com</span>
                </div>
                <div className="profileLinks">
                  <h4>Links</h4>
                  <div>
                    <a href="https://github.com/mintchocoicecream">github</a>
                    <a href="https://mintchocoicecream.notion.site/Dev-133e8a6d037449aeb49f616cc9836f78">notion</a>
                  </div>
                </div>
              </div>
              <div className="profileTwo">
                <div className="profileCareer">
                  <p>2021.04.19 ~ 2021.06.30</p>
                  <span>- (주)리안 개발팀 R&D 연구원</span>
                  <p>&nbsp;&nbsp;인공지능 IP 카메라 NVR 프로그램 개발 담당</p>
                </div>
                <div className="profileClass">
                  <p>2020.05.19 ~ 2020.11.22</p>
                  <span>- 머신러닝 개발자 양성 교육 과정 이수 <p>&nbsp;&nbsp;(소속: 한국품질재단)</p></span>
                </div>
                <div className="profileEdu">
                  <p>2013.03 ~ 2017.02</p>
                  <span>- 경상국립대학교 정보통신공학과</span>
                </div>
                <div className="profileCer">
                  <h4>Honors & Awards</h4>
                  <p><FontAwesomeIcon icon={faAward}></FontAwesomeIcon> 제 3회 산학협력 최종 프로젝트 경진대회 AI SW개발 분야 우수상 <span>(2020.12.18)</span></p>
                </div>
                <div className="profileCer">
                  <h4>Certificate</h4>
                  <p><FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon> JLPT N3 <span>(2022.08.10)</span></p>
                  <p><FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon> TOEIC 800 <span>(2020.10.10)</span></p>
                  <p><FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon> ADsP 데이터분석준전문가 <span>(2020.09.29)</span></p>
                </div>
              </div>
              {contact===true&&(
                  <div className="contactForms">
                    <Contact />
                    <div className="close">
                      <span onClick={onClose}><FontAwesomeIcon icon={faXmark} size={"xl"}></FontAwesomeIcon></span>
                    </div>
                  </div>
              )}
            </div>
          )}
          {pages===1&&(
            <div className="profile">1page 자소서, 취미</div>
          )}
          {pages===2&&(
            <div className="profile">2page</div>
          )}

        </div>
        <div className="arrows">
            <span onClick={handleLeft}><FontAwesomeIcon icon={faAnglesLeft} size="2x"/></span>
            <span onClick={handleRight}><FontAwesomeIcon icon={faAnglesRight} size="2x"/></span>
        </div>
      </>

    )
}

export default Profile;