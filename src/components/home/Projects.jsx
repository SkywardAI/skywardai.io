import { useState } from "react";
import { projects } from "../../utils/types";
import { Link } from "react-router-dom";

export default function Projects() {

    const [display_project, setDisplayProject] = useState(Object.keys(projects)[0]);
    
    return (
        <section className="projects">
        <div className="title">Checkout our projects</div>
        <div className="project-view">
            <div className="tickets">
                {
                    Object.keys(projects).map(name=>{
                        return (
                            <div 
                                className={`ticket clickable${(display_project===name&&' selected')||""}`}
                                key={`project-${name}`} onClick={()=>setDisplayProject(name)}
                            >
                                <div className="bg">{name}</div>
                            </div>
                        )
                    })
                }
            </div>
            {Object.keys(projects).map(project=>{
                const { badges, description, urls, images, videos } = projects[project];
                return (
                    <div className={`details${(display_project===project&&" show")||""}`} key={`project-details-${project}`}>
                        <div className="title">{project}</div>
                        <div className="badges">
                            {
                                badges && badges.map((badge, index)=>{
                                    return <img key={`${project}-badge-${index}`} src={badge} alt="badge" />
                                })
                            }
                        </div>
                        <div className="description">{description}</div>
                        <div className="urls">
                            {urls && urls.map(({name, url})=>{
                                return (
                                    <Link 
                                        key={`${project}-url-${name}`} 
                                        to={url} target="_blank" className="url"
                                    >{name}</Link>
                                )
                            })}
                        </div>
                        {videos && videos.map((url, index) => <video src={url} controls key={`${project}-video-${index}`}/>)}
                        <div className="images">
                            { images && images.map((url, index) => <img src={url} alt="" key={`${project}-img-${index}`} />) }
                        </div>
                    </div>
                )
            })}
        </div>
        </section>
    )
}