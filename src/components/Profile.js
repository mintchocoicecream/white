import React from "react";

function Profile(){
    return(
        <div className="mainProfile">
            <div className="profile">
              <div className="profileOne">
                <div className="profileImg">
                  <img src="https://user-images.githubusercontent.com/64584574/193724604-c8da3682-821c-4500-8c96-028a9bfa1f8e.jpg" alt="profileImage" />
                </div>
                <div className="profileName">
                  <h3>서현정</h3>
                  <p>Seo Hyunjeong</p>
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
                  <span>mintchocoicecream@gmail.com</span>
                </div>
                <div className="profileLinks">
                  <h4>Links</h4>
                  <div>
                    <span>github</span>
                    <span>notion</span>
                  </div>
                </div>
              </div>
              <div className="profileTwo">
                <div className="profileEdu">
                  <p>2013.03 ~ 2017.02</p>
                  <span>경상국립대학교 정보통신공학과</span>
                </div>
                <div className="profileClass">
                  <p>2020.05.19 ~ 2020.11.22</p>
                  <span>머신러닝 개발자 양성 교육 과정 이수 <p>(소속: 한국품질재단)</p></span>
                </div>
                <div className="profileCareer">
                  <p>2021.04.19 ~ 2021.06.30</p>
                  <span>(주)리안 개발팀 R&D 연구원</span>
                  <p>인공지능 IP 카메라 NVR 프로그램 개발 담당</p>
                  <p>사용 기술: Python, OpenCV, QtPy5, QtDesigner</p>
                </div>
                <div className="profileCer">
                  <h4>Certificate</h4>
                  <p>- JLPT N3 2022.08.10</p>
                  <p>- Toeic 800 2020.10.10</p>
                  <p>- AdsP 데이터분석준전문가 2020.09.29</p>
                </div>
              </div>
            </div>
          </div>
    )
}

export default Profile;