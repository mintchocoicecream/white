import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Infos = ({proj,shownF,projF}) => {
    const unShow = () => {
        shownF(false);
        projF("");
      }

    return(
        <>
        {proj==="css"&&(
            <div className="projForm">
                <div className="projTitle"><h2>CSS Layout Challenge</h2></div>
                <span className="projDate">2022.08.10 ~ 2022.09.07</span>
                <div className="projInfos">
                    <div className="projImgs">
                        <img src="https://i.imgur.com/qCE91Kf.gif" alt="cssImg"/>
                    </div>
                    <div className="projSkills">Scss, Gulp</div>
                    <div className="projDesc"><p>css 기법을 익히기 위한 클론 코딩 프로젝트. 먼저 scss로 작성한 다음, gulp를 활용하여 css로 변환하는 방식으로 작업했습니다. 5개의 포스터와 10개의 웹 사이트 레이아웃을 flexbox와 grid를 사용해서 반응형 웹으로 구현했습니다.</p></div>
                    <div className="projIcons">
                        <span>Web</span>
                    </div>
                </div>
                <span className="closedProj" onClick={unShow}><FontAwesomeIcon icon={faXmark}/></span>
            </div>
        )}
        {proj==="greene"&&(
            <div className="projForm">
                <div className="projTitle"><h2>GreenE</h2></div>
                <span className="projDate">2022.05.03 ~ 2022.05.21 (2022.07.27 ~ 2022.08.05 Update)</span>
                <div className="projInfos">
                    <div className="projImgs">
                        <img src="https://user-images.githubusercontent.com/64584574/182799141-4478206b-d7b6-4471-a8e5-649811d18cb7.gif" alt="greeneImg"/>
                    </div>
                    <div className="projSkills">Cavas API, VanillaJS, CSS3</div>
                    <div className="projDesc"><p>Javascript canvas API를 이용한 그림판 만들기 프로젝트. 바닐라 자바스크립트를 이용해서 간단한 웹 서비스를 구현하였고, 이를 통해 자바스크립트의 기본기뿐 아니라 인터렉티브한 기능에 대해 이해할 수 있게 되었습니다. 주요 기능으로 펜 그리기, 도형(사각형, 원형) 그리기, 색 채우기, 지우개, 이미지 추가, 텍스트 추가, 그림 저장이 있습니다.</p></div>
                    <div className="projIcons">
                        <span>Github</span>
                        <span>Web</span>
                    </div>
                </div>
                <span className="closedProj" onClick={unShow}><FontAwesomeIcon icon={faXmark}/></span>
            </div>
        )}
        {proj==="twitter"&&(
            <div className="projForm">
                <div className="projTitle"><h2>Twitter Clone</h2></div>
                <span className="projDate">2022.03.04 ~ 2022.04.01</span>
                <div className="projInfos">
                    <div className="projImgs">
                        <img src="https://user-images.githubusercontent.com/64584574/170199016-a4dfd52f-84bf-448a-bb38-57b6272cc538.gif" alt="twImg"/>
                    </div>
                    <div className="projSkills">ReactJS, React Router, Firebase</div>
                    <div className="projDesc"><p>ReactJS와 Firebase를 활용한 트위터 클론 코딩 프로젝트. ReactJS를 사용하면서 React Hooks와 React Router를 다루는 방식에 대해 익힐 수 있었습니다. 그리고 Firebase를 이용하여 realtime CRUD와 유저 인증을 진행하는 방법을 알게 되었습니다. 또한 Firestore를 사용해서 파일을 업로드하는 기능을 구현했습니다.</p></div>
                    <div className="projIcons">
                        <span>Github</span>
                        <span>Web</span>
                    </div>
                </div>
                <span className="closedProj" onClick={unShow}><FontAwesomeIcon icon={faXmark}/></span>
            </div>
        )}
        {proj==="kakao"&&(
            <div className="projForm">
                <div className="projTitle"><h2>Kakaotalk Clone</h2></div>
                <span className="projDate">2022.03.11 ~ 2022.03.28</span>
                <div className="projInfos">
                    <div className="projImgs">
                        <img src="https://user-images.githubusercontent.com/64584574/170182098-63571285-905d-4b6b-b548-1f9d0f8a0d79.gif" alt="kktImg"/>
                    </div>
                    <div className="projSkills">HTML5, CSS3, Javascript</div>
                    <div className="projDesc"><p>카카오톡 프론트엔드 클론 코딩 프로젝트. HTML5, CSS3, JavaScript만을 활용하여 기초적인 웹 서비스 구현에 대해 이해할 수 있었습니다. animation과 transition을 사용하고 flexbox로 display를 구성함으로써 기초적인 반응형 웹을 만드는 경험을 했습니다.</p></div>
                    <div className="projIcons">
                        <span>Github</span>
                        <span>Web</span>
                    </div>
                </div>
                <span className="closedProj" onClick={unShow}><FontAwesomeIcon icon={faXmark}/></span>
            </div>
        )}
        {proj==="zoom"&&(
            <div className="projForm">
                <div className="projTitle"><h2>Zoom Clone</h2></div>
                <span className="projDate">2022.02.14 ~ 2022.02.21</span>
                <div className="projInfos">
                    <div className="projImgs">
                        <img src="https://user-images.githubusercontent.com/64584574/170047438-3ae24e30-3913-47cc-81f2-958d42fa07b0.JPG" alt="zoomImg"/>
                    </div>
                    <div className="projSkills">NodeJS, WebRTC, SocketIO, Javscript</div>
                    <div className="projDesc"><p>NodeJS와 WebRTC를 활용한 줌 클론 코딩 프로젝트. SocketIO, WebRTC를 사용해서 영상 공유와 채팅 기능을 구현했습니다. 이 프로젝트를 통해 실시간 양방향 통신 기능을 구축하는 과정에 대해 알아갈 수 있었습니다.</p></div>
                    <div className="projIcons">
                        <span>Github</span>
                        <span>Web</span>
                    </div>
                </div>
                <span className="closedProj" onClick={unShow}><FontAwesomeIcon icon={faXmark}/></span>
            </div>
        )}
        {proj==="react"&&(
            <div className="projForm">
                <div className="projTitle"><h2>React Movie App</h2></div>
                <span className="projDate">2022.01.24 ~ 2022.02.08</span>
                <div className="projInfos">
                    <div className="projImgs">
                        <img src="https://user-images.githubusercontent.com/64584574/170031933-4a048159-86bb-4dab-af9f-644e621f484e.JPG" alt="reactImg"/>
                    </div>
                    <div className="projSkills">React, CSS3</div>
                    <div className="projDesc"><p>React를 활용한 영화 정보 웹 서비스 구현 프로젝트. 영화 정보 api를 불러와서 data fetching을 하고, useState와 JSX를 사용해서 화면을 구성하는 방법을 익혔습니다. 이 과정을 통해 리액트의 기본기에 대해 이해할 수 있게 되었습니다.</p></div>
                    <div className="projIcons">
                        <span>Github</span>
                        <span>Web</span>
                    </div>
                </div>
                <span className="closedProj" onClick={unShow}><FontAwesomeIcon icon={faXmark}/></span>
            </div>
        )}
        {proj==="chrome"&&(
            <div className="projForm">
                <div className="projTitle"><h2>Chrome App</h2></div>
                <span className="projDate">2022.01.10 ~ 2022.01.23</span>
                <div className="projInfos">
                    <div className="projImgs">
                        <img src="https://user-images.githubusercontent.com/64584574/169957553-87be53d9-99d9-4421-b8f2-6d9f0500c931.JPG" alt="greeneImg"/>
                    </div>
                    <div className="projSkills">HTML5, VanillaJS, CSS3</div>
                    <div className="projDesc"><p>Vanilla JS를 활용한 크롬 앱 만들기 프로젝트. localStorage를 사용해서 array와 object로 이루어진 간단한 DB를 구성했습니다. 그리고 이에 저장된 정보에서 필요한 요소를 불러와 화면에 나타냈습니다. 또한 DOM을 이용해서 html에 접근하여 elements를 다루는 방법에 대해 익힐 수 있었습니다.</p></div>
                    <div className="projIcons">
                        <span>Github</span>
                        <span>Web</span>
                    </div>
                </div>
                <span className="closedProj" onClick={unShow}><FontAwesomeIcon icon={faXmark}/></span>
            </div>
        )}
        {proj==="nvr"&&(
            <div className="projForm">
                <div className="projTitle"><h2>AI IP Camera NVR</h2></div>
                <span className="projDate">2021.04.19 ~ 2021.06.15</span>
                <div className="projInfos">
                    <div className="projImgs">
                    </div>
                    <div className="projSkills">Python, OpenCV, PoseEstimation, pyQt5, MariaDB</div>
                    <div className="projDesc"><p>개발팀 R&D 연구원. 실시간으로 움직이는 사람을 감지하는 IP카메라 NVR 프로그램 개발을 담당했습니다. IP카메라에서 실시간으로 촬영중인 영상은 openCV를 활용해서 불러온 뒤 자세 추정 오픈 소스를 적용시켰고, 이를 NVR 프로그램 화면에 띄웠습니다. NVR 프로그램은 윈도우 프로그램으로, Python과 pyQt5를 활용하여 UI를 구성했습니다. 그리고 실시간으로 녹화되는 영상은 mariaDB를 사용해서 적재했습니다.</p></div>
                    <div className="projIcons">
                        <span>PPT</span>
                    </div>
                </div>
                <span className="closedProj" onClick={unShow}><FontAwesomeIcon icon={faXmark}/></span>
            </div>
        )}
        {proj==="soulmovie"&&(
            <div className="projForm">
                <div className="projTitle"><h2>SoulMovie</h2></div>
                <span className="projDate">2020.06.16 ~ 2020.07.04</span>
                <div className="projInfos">
                    <div className="projImgs">
                        <img src="https://user-images.githubusercontent.com/64584574/102320528-c1f08180-3fbf-11eb-866b-c6f6ed49a62e.jpg" alt="soulmovieImg"/>
                    </div>
                    <div className="projSkills">Spring Framework, Java, JSP, Bootstrap, OracleDB</div>
                    <div className="projDesc"><p>SpringFramework을 이용한 영화 공유 웹 서비스 "SoulMovie" 만들기 팀 프로젝트. 총 6인으로 이루어진 팀에서 저는 UI 설계와 로그인 및 회원가입 기능 구현을 담당했습니다. 웹 페이지의 디자인은 오픈 소스인 Bootstrap에서 무료 탬플릿을 불러와 구현 중인 서비스의 전체적인 테마와 어울릴 수 있도록 jsp와 css를 변경하여 구성했습니다. 그리고 회원가입시 input을 통해 받은 회원 정보는 OracleDB에 저장하였고, 로그인시 입력 정보와 DB에 적재된 정보 사이의 일치 여부를 확인한 뒤 다음 과정으로 넘어갈 수 있도록 진행했습니다. 무엇보다 협업 프로젝트를 github desktop로 관리하면서 git으로 코드를 공유하고 활용하는 방법에 대해 익힐 수 있었습니다.</p></div>
                    <div className="projIcons">
                        <span>Github</span>
                        <span>PPT</span>
                    </div>
                </div>
                <span className="closedProj" onClick={unShow}><FontAwesomeIcon icon={faXmark}/></span>
            </div>
        )}
        {proj==="kbo"&&(
            <div className="projForm">
                <div className="projTitle"><h2>2020 KBO Data Analysis</h2></div>
                <span className="projDate">2020.07.24 ~ 2020.07.31</span>
                <div className="projInfos">
                    <div className="projImgs">
                    </div>
                    <div className="projSkills">Python, BeautifulSoup, Selenium, Pandas</div>
                    <div className="projDesc"><p>Python을 활용한 데이터 분석 "2020년도 한국 프로 야구 최종 승률 예측" 팀 프로젝트. 총 3인으로 구성된 팀에서 저는 데이터 수집과 전처리, 그리고 데이터 분석 및 ppt 제작을 담당했습니다. 가장 먼저 데이터 수집을 위해 구단 사이트에 게시된 경기 기록과 선수 기록을 BeautifulSoup와 Selenium을 사용해서 크롤링하여 수집했습니다. 그리고 구단 이름, 데이터 타입 변경, 결측치 처리와 같은 데이터 전처리 과정을 거쳤습니다. 단순회귀분석을 통해 전처리 과정을 거친 모든 데이터 컬럼과 팀 승률 사이의 상관계수를 측정했습니다.</p></div>
                    <div className="projIcons">
                        <span>Github</span>
                        <span>PPT</span>
                    </div>
                </div>
                <span className="closedProj" onClick={unShow}><FontAwesomeIcon icon={faXmark}/></span>
            </div>
        )}
        {proj==="anogan"&&(
            <div className="projForm">
                <div className="projTitle"><h2>AnoGAN System</h2></div>
                <span className="projDate">2020.10.22 ~ 2020.11.20</span>
                <div className="projInfos">
                    <div className="projImgs">
                        <img src="https://user-images.githubusercontent.com/64584574/192471007-f1966ea9-ca8f-4510-9b69-bb6a6c365934.PNG" alt="anoganImg"/>
                    </div>
                    <div className="projSkills">Python, DL, AnoGAN, PyQt5</div>
                    <div className="projDesc"><p>"AnoGAN을 활용한 자동차 핸들 오류 검출 시스템 개발" 팀 프로젝트. 총 3인으로 구성된 팀에서 저는 알고리즘 적용 및 활용과 프로그램 UI 제작을 담당했습니다. 가장 먼저 알고리즘 선정을 위해 Anomaly Detection에 대한 이해가 필요했고, 이와 관련된 국내외 논문과 활용 사례를 찾아보았습니다. AnoGAN 알고리즘을 채택한 후 입력 데이터의 정상/비정상을 판단하는 기준인 anomaly score를 계산하는 수식을 찾아 코드로 추가하는 작업을 진행했습니다. UI는 산업용 프로그램 제작에 많이 쓰이는 QtDesigner와 PyQt5를 활용하여 구성했습니다.</p></div>
                    <div className="projIcons">
                        <span>Github</span>
                        <span>PPT</span>
                    </div>
                </div>
                <span className="closedProj" onClick={unShow}><FontAwesomeIcon icon={faXmark}/></span>
            </div>
        )}
        </>
    )
}

export default Infos;