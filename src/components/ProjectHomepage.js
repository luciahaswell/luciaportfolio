import React from "react";
import ProjectCard from "./ProjectCard";
import Header from "../components/Header";
import Footer from "./Footer";

const ProjectHomepage = ({projectData}) =>{

    return(
        <>
        <Header/>
        <div className='projectHomepage'>
            <div className='sideBar projectHomepageSideBar'>
                <h1 className='sideBarText'>PROJECTS</h1>
            </div>
            <div className='content projectContent'>
                {projectData.map((project)=>
                    <ProjectCard projectInfo={project}/>
                )}
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default ProjectHomepage;