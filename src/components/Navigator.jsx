import { Link, Outlet } from "react-router-dom";
import logo from "../media/logo.png"
import { genURL } from "../utils";

export default function Navigator() {
    return (
        <div>
            <div className="top-nav-bar">
                <Link to={genURL()} className="logo">
                    <img src={logo} alt="logo" />
                    <div>SkywardAI</div>
                </Link>
                <div className="links">
                    <Link to={genURL("about")} className="link">About</Link>
                    <Link to={genURL()} className="link">Projects</Link>
                    <Link to={genURL('chat')} className="link">Chat</Link>
                    <Link to={genURL()} className="link">Collaborators</Link>
                    <Link to={genURL()} className="link">Links</Link>
                </div>
            </div>
            <div className="main">
                <Outlet />
                <div className="declaimer">Copyright &copy; 2024 SkywardAI. All rights reserved.</div>
            </div>
        </div>
    )
}