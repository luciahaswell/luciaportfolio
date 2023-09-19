import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({projectInfo}) => {

    return(
        <div className="projectCard" 
            style={{ backgroundColor: projectInfo.mainColor }}
        >
            <h1 style={{ color: projectInfo.accentColor }}>{projectInfo.projectName}</h1>
            <br></br>
            <p>{projectInfo.shortDescription}</p>
            <br></br>
            <p>Technologies Used: {projectInfo.techsUsed}</p>
            <br></br>
            <Link to={`/projects/${projectInfo.projectName}`}>
                <p className='readMore'>Read More...</p>
            </Link>
        </div>
    )
}

export default ProjectCard;