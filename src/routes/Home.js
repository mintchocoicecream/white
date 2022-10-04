import React, { useState } from "react";
import { Link } from "react-router-dom";
import Profile from "../components/Profile";
import Projects from "../components/Projects";

function Home() { 
    const [profile, setProfile] = useState(false);
    const [projects, setProjects] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    function onScroll(){
      if (document.body.scrollTop > 3 || document.documentElement.scrollTop > 3) {
        setScrolled(true);
      }else{
        setScrolled(false);
      }
    }
    window.onscroll = function() {onScroll()};

    function onHome(){
      if(profile===true | projects===true){
        setProfile(false);
        setProjects(false);
      }
    }

    function onProfile(){
      if(profile===false){
        setProfile(true);
        if(projects===true){
          setProjects(false);
        }
      }
    }

    function onProjects(){
      if(projects===false){
        setProjects(true);
        if(profile===true){
          setProfile(false);
        }
      }
    }

  return (
    <>  {scrolled===false?(
          <header>
          <Link to="/" onClick={onHome}>
              <h1>mintchoco<img src="https://user-images.githubusercontent.com/64584574/193460318-b843a071-9e88-4051-9a74-fb1c2dcc5e85.png" alt="MCI" />icecream</h1>
          </Link>
          <nav id="navs">
              <div>
                {profile===false ? (
                  <span onClick={onProfile}>Profile</span>
                ):(
                  <span className="onProfile" onClick={onProfile}>Profile</span>
                )}
              </div>
              <div>
                {projects===false ? (
                  <span onClick={onProjects}>Projects</span>
                ):(
                  <span className="onProjects" onClick={onProjects}>Projects</span>
                )}
                </div>
          </nav>
          </header>
        ):(
          <header className="onScrolled" onScroll={onScroll}>
            <Link to="/" onClick={onHome}>
                <h1>mintchoco<img src="https://user-images.githubusercontent.com/64584574/193460318-b843a071-9e88-4051-9a74-fb1c2dcc5e85.png" alt="MCI" />icecream</h1>
            </Link>
            <nav id="navs">
                <div>
                  {profile===false ? (
                    <span onClick={onProfile}>Profile</span>
                  ):(
                    <span className="onProfile" onClick={onProfile}>Profile</span>
                  )}
                </div>
                <div>
                  {projects===false ? (
                    <span onClick={onProjects}>Projects</span>
                  ):(
                    <span className="onProjects" onClick={onProjects}>Projects</span>
                  )}
                  </div>
            </nav>
          </header>
        )}
       
        {profile===false&projects===false && (
          <div className="main">
            <Profile />
            <Projects />
          </div>
        )}
        {profile===true &&(
          <div className="onlyProf">
            <Profile />
          </div>
        )}
        {projects===true && (
          <div className="onlyProj">
            <Projects />
          </div>          
        )}
    </>

    );
}

export default Home;