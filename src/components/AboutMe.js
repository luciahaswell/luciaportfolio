import React from "react";
import Header from "../components/Header";
import Footer from "./Footer";

const AboutMe = () => {

    return (
        <>
            <Header />
            <div className='aboutMe'>
                <div className='sideBar'>
                    <h1 className='sideBarText'>ABOUT ME</h1>
                </div>
                <div className='content'>
                    <div className='backgroundCard about'>
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
                        <p>If you're looking for someone who can bring a unique blend of analytical thinking, artistic sensibility, and a genuine love for problem-solving, I would love to connect and explore how we can create something extraordinary together!</p>
                        <br></br><br></br>
                        <p>Want more info? --  <a className='resumeText' href='../src/media/LuciaHaswellResume.pdf' download>Download my Resume!</a></p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AboutMe;