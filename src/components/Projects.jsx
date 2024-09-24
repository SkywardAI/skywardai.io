import { useEffect, useState } from "react";
import { projects } from "../utils/types";
import Markdown from 'react-markdown'
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";

export default function Projects() {
    const [ readme_list, setReadmeList ] = useState([]);
    const [ menu_open, toggleMenu ] = useState(false);
    const readme_ref = useRef(null);
    
    useEffect(()=>{
        (async function() {
            const readmes = [];
            for(const project in projects) {
                const { github_raw } = projects[project];
                if(!github_raw) continue;

                const req = await fetch(`${github_raw}README.md`);
                if(req.ok) {
                    const raw_readme = await req.text();
                    
                    readmes.push(
                        raw_readme
                        .replace(/\((\.\/|\/)([^)]+)\)/g, `(${github_raw}$2)`)
                        .replace(/\$\\rightarrow\$/g, '&rarr;')
                        .replace(/(<!-- .* -->)/g, '')
                    );
                } else {
                    //
                }
            }
            setReadmeList(readmes)
        })()
    }, [])

    return (
        <div className="projects-main">
            <div className={`sidebar${menu_open?' expand':''}`}>
                <div className={`menu-controller clickable`} onClick={()=>toggleMenu(!menu_open)}>
                    { menu_open ? <ChevronLeft /> : <ChevronRight /> }
                </div>
                {
                    Object.keys(projects).map((name, i)=>{
                        return (
                            <div 
                                key={`project-nav-${name}`} 
                                className="nav-item clickable"
                                onClick={()=>{
                                    const elem = document.getElementById(`readme-${i}`)
                                    readme_ref.current.scrollTo({
                                        top: elem.offsetTop, 
                                        behavior: 'smooth'
                                    })
                                }}
                            >{name}</div>
                        )
                    })
                }
            </div>
            <div className="readmes" ref={readme_ref}>
            {
                readme_list.map((readme, index )=>{
                    return (
                        <div className="readme" key={`readme-${index}`} id={`readme-${index}`}>
                            <Markdown>{ readme }</Markdown>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}