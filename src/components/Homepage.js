import React from "react";
import Header from "../components/Header";
import ProjectCard from "./ProjectCard";
import projectData from "../data/projectData";
import Footer from "./Footer";



const Homepage = () => {

    return (
        <>
            <Header />
            <div className='homePage'>
                <div className='nameBubble'>
                    <h1>Hi - I'm Lucia Haswell</h1>
                </div>
                <img className='headshot'
                    src={require("../media/luciaHeadshot.png")}
                    alt="headshot"
                />
                <div className='descriptionBubble'>
                    <h3>I’m a Denver-based full stack designer with a knack for blending tech & artistry</h3>
                </div>
            </div>

            <div className='projectHomepage' id='projectsSection'>
                <h1 className='sideBarText'>PROJECTS</h1>
                <div className='content'>
                    {projectData.map((project) =>
                        <ProjectCard projectInfo={project} />
                    )}
                </div>
            </div>

            <div className='aboutMe' id="aboutMeSection">
                <h1 className='sideBarText'>ABOUT ME</h1>
                <div className='content'>
                    <div className='backgroundCard'>
                        <h1 className="aboutMeHeader">So, who am I?</h1>
                        <p>My educational background:</p>
                        <ul>
                            <li>Bachelor’s in Science in Statistics & Minor in Mathematics @  University of Central Florida</li>
                        </ul>
                        <br></br><br></br>
                        <p>My career background:</p>
                        <ul>
                            <li>Data Analytics/ Data Science Intern @ FINRA</li>
                            <li>Technology Consultant @ Continuus Technologies</li>
                            <li>Freelance Frontend Developer</li>
                        </ul>
                        <br></br><br></br>
                        <p>What I like to do in my free time:</p>
                        <ul>
                            <li>Paint</li>
                            <li>Draw</li>
                            <li>Yoga</li>
                            <li>Weight Lifting</li>
                            <li>Hang out with my dog</li>
                        </ul>
                        <br></br><br></br>
                        <p>After working in data for a bit,  I updated my trajectory to focus more on web development & design because of my desire to blend my technical expertise with my artistic eye.</p>
                        <br></br><br></br>
                        <p>My unique combination of analytical thinking and artistic sensibility allows me to approach design challenges from a holistic perspective. I am passionate about creating intuitive and visually appealing user experiences that seamlessly merge form and function.</p>
                        <br></br><br></br>
                        <p>If you want to create something extraordinary together, let's connect!</p>
                        <br></br><br></br>
                        <p>Want to learn more? --  <a className='resumeText' href='https://www.linkedin.com/in/lucia-haswell/overlay/1635540270604/single-media-viewer/?profileId=ACoAACaxIgsB1bSgGYzzL7wKQ9tK9JonL-F8M9c' target="_blank" rel="noreferrer">Download my Resume!</a></p>
                    </div>
                </div>
            </div>
            <Footer/>

        </>
    )

}

export default Homepage;

/*
import React from "react";
import Header from "../components/Header";


const Homepage = () =>{

    return(
        <>
        <Header/>
        <div className='homePage'>
            <div className='nameBubble'>
                <h1>LUCIA</h1>
                <h1>HASWELL</h1>
            </div>
            <img className='headshot' 
                src={require("../media/luciaHeadshot.png")} 
                alt="headshot"
            />
            <div className='descriptionBubble'>
                <h3>Denver Based</h3>
                <h3>Developer/Designer</h3>
            </div>
        </div>
        </>
    )

}

export default Homepage;
*/