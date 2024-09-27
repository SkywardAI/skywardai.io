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
                    {/* <Link onClick={()=>toggleExpand(false)} to={'/about'} className="link">About</Link> */}
                    <Link onClick={()=>toggleExpand(false)} to={'/projects'} className="link clickable">Projects</Link>
                    <Link onClick={()=>toggleExpand(false)} to={'/chat'} className="link clickable">Try AI Chat</Link>
                    {/* <Link onClick={()=>toggleExpand(false)} to={'/'} className="link">Collaborators</Link> */}
                    {/* <div className="link clickable">More Links</div> */}
                    <Link to={'https://github.com/skywardai'} target="_blank" rel="noopener noreferrer" className="link clickable">Our GitHub</Link>
                    <Link to={'https://www.kaggle.com/aisuko'} target="_blank" rel="noopener noreferrer" className="link clickable">Our Kaggle</Link>
                    <Link to={'https://huggingface.co/aisuko'} target="_blank" rel="noopener noreferrer" className="link clickable">Our HuggingFace</Link>

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