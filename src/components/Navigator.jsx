import { Link, Outlet } from "react-router-dom";
import logo from "../media/logo.png"
import { List } from "react-bootstrap-icons";
import { useState } from "react";

export default function Navigator() {

    const [expandMenu, toggleExpand] = useState(false);

    return (
        <div>
            <div className="top-nav-bar">
                <Link onClick={()=>toggleExpand(false)} to={'/'} className="logo">
                    <img src={logo} alt="logo" />
                    <div>SkywardAI</div>
                </Link>
                <div className={`links${expandMenu?" expanded":""}`}>
                    <Link onClick={()=>toggleExpand(false)} to={'/about'} className="link">About</Link>
                    <Link onClick={()=>toggleExpand(false)} to={'/projects'} className="link">Projects</Link>
                    <Link onClick={()=>toggleExpand(false)} to={'/chat'} className="link">Chat</Link>
                    <Link onClick={()=>toggleExpand(false)} to={'/'} className="link">Collaborators</Link>
                    <Link onClick={()=>toggleExpand(false)} to={'/'} className="link">Links</Link>
                </div>
                <List className="hamburger-menu clickable" onClick={()=>toggleExpand(!expandMenu)} />
            </div>
            <div className="main">
                <Outlet />
                <div className="declaimer">Copyright &copy; 2024 SkywardAI. All rights reserved.</div>
            </div>
        </div>
    )
}