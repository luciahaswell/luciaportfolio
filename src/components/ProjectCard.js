import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ projectInfo }) => {

    return (
        <div className={`projectCard ${projectInfo.oddEven}`}
            style={{ backgroundColor: projectInfo.mainColor }}
        >
            <div className='projectWords'>
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
            <div className='projectVideoContainer'>
                <video className='projectVideo' loop muted autoPlay>
                    <source src={projectInfo.projectVideo} type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                    </div>
            </div>
            )
}

            export default ProjectCard;