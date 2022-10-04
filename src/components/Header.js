import React from "react";
import { Link } from "react-router-dom";

function Header(){
    return(
        <header>
            <Link to="/">
                <h1>mintchoco<img src="https://user-images.githubusercontent.com/64584574/193460318-b843a071-9e88-4051-9a74-fb1c2dcc5e85.png" alt="MCI" />icecream</h1>
            </Link>
            <nav id="navs">
                <div><span>Profile</span></div>
                <div><span>Projects</span></div>
            </nav>
        </header>
    )
}

export default Header;