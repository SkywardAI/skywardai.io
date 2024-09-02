import React, { useState } from "react";
import { projects } from "../utils/types";
import { Link } from "react-router-dom";

export default function Home() {

    const [display_project, setDisplayProject] = useState(Object.keys(projects)[0]);

    return (
        <div className="home">
            <section className="welcome">
                <div className="title">Welcome to SkywardAI!</div>
                <div className="description">We are working hard to bring AI to everyone in the world, join us for AI revolution!</div>
            </section>
            <section className="projects">
                <div className="title">Checkout our projects</div>
                <div className="project-view">
                    <div className="tickets">
                        {
                            Object.keys(projects).map(name=>{
                                return (
                                    <div 
                                        className={`ticket clickable${display_project===name?' selected':""}`}
                                        key={`project-${name}`} onClick={()=>setDisplayProject(name)}
                                    >
                                        <div className="bg">{name}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="details">
                        <div className="title">{display_project}</div>
                        <div className="badgers">
                            {
                                projects[display_project].badgers &&
                                projects[display_project].badgers.map(badger=>{
                                    return <img src={badger} alt="badger" />
                                })
                            }
                        </div>
                        <div className="description">{projects[display_project].description}</div>
                        <div className="urls">
                            {projects[display_project].urls &&
                            projects[display_project].urls.map(({name, url})=>{
                                return (
                                    <Link 
                                        key={`${display_project}-url-${name}`} 
                                        to={url} target="_blank" className="url"
                                    >{name}</Link>
                                )
                            })}
                        </div>
                        {projects[display_project].video && <video src={projects[display_project].video} controls />}
                    </div>
                </div>
            </section>
        </div>
    )
}