import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ImageGallery from "./imageGallery";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}


const ProjectPage = ({ projectInfo }) => {

    const longDescriptionParagraphs = projectInfo.longDescription.split('\n').map((paragraph, index) => (
        <>
            <p key={index}>{paragraph}</p>
            <br></br>
        </>
    ));

    return (
        <>
            <ScrollToTop />
            <Header />
            <div className='projectPage'>
                <Link to="/"><h1 className='sideBarText project'>&#60;</h1></Link>
                <div className='content'>
                    <div className="projectShowcasePage"
                        style={{ backgroundColor: projectInfo.mainColor }}
                    >
                        <h1 style={{ color: projectInfo.accentColor }}>{projectInfo.projectName}</h1>
                        <div className='carouselContainer'>
                            <ImageGallery imageList={projectInfo.projectScreenshots} />
                        </div>
                        <p>Technologies Used: {projectInfo.techsUsed}</p>
                        <br></br>

                        <a className="projectLink"
                            href={projectInfo.gitHubLink}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <p>Go To Link</p>
                        </a>
                        <br></br>
                        <p>{longDescriptionParagraphs}</p>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default ProjectPage;