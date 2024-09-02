import React from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../media/logo.png"

export default function Navigator() {
    return (
        <div>
            <div className="top-nav-bar">
                <Link to={'/'} className="logo">
                    <img src={logo} alt="logo" />
                    <div>SkywardAI</div>
                </Link>
                <div className="links">
                    <Link to={"/about"} className="link">About</Link>
                    <Link to={"/about"} className="link">Projects</Link>
                    <Link to={"/about"} className="link">Collaborators</Link>
                    <Link to={"/about"} className="link">Links</Link>
                </div>
            </div>
            <div className="main">
                <Outlet />
                <div className="declaimer">Copyright &copy; 2024 SkywardAI. All rights reserved.</div>
            </div>
        </div>
    )
}