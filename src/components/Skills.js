import React from "react";
import Header from "../components/Header";
import Footer from "./Footer";

const Skills = () => {

    return (
        <>
            <Header />
            <div className='skillsPage'>
                <div className='sideBar skillsSideBar'>
                    <h1 className='sideBarText'>SKILLS</h1>
                </div>
                <div className='content skillsContent'>
                    <div className='backgroundCard skills'>
                        <p>Web Development & Design:</p>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>UI Design</li>
                            <li>Photoshop</li>
                            <li>Figma</li>
                        </ul>
                        <br></br>
                        <p>Data Management & Analytics:</p>
                        <ul>
                            <li>SQL</li>
                            <li>Alteryx</li>
                            <li>Python</li>
                            <li>ThoughtSpot</li>
                            <li>Snowflake</li>
                        </ul>
                        <br></br>
                        <p>Product Management:</p>
                        <ul>
                            <li>JIRA</li>
                            <li>Confluence</li>
                        </ul>
                        <br></br>
                        <p>Soft Skills:</p>
                        <ul>
                            <li>Self-Sufficiency</li>
                            <li>Creativity</li>
                            <li>Communication</li>
                            <li>Adaptability</li>
                        </ul>
                        <br></br>
                        <p>Personality:</p>
                        <ul>
                            <li>Meyers-Briggs: ENFP</li>
                            <li>DiSC Profile: I-S</li>
                        </ul>
                        <br></br>
                        <p>Languages:</p>
                        <ul>
                            <li>English (Native)</li>
                            <li>Spanish</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Skills;