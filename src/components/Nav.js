import React from "react";
import { Link } from "react-router-dom";

function Nav(){

    return(
        <nav id="navs">
            <span>
                <Link to="/profile">Profile</Link>
            </span>
            <span>
                <Link to="/projects">Projects</Link>
            </span>
        </nav>
    )
}

export default Nav;