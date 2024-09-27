import Welcome from "./Welcome";
import Projects from "./Projects";
// import Customers from "./Customers";

export default function Home() {
    return (
        <div className="home">
            <Welcome />
            <Projects />
            {/* <Customers /> */}
        </div>
    )
}