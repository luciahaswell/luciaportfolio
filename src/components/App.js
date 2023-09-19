import React from "react";
import Homepage from "./Homepage";
import ProjectHomepage from "./ProjectHomepage";
import projectData from "../data/projectData";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import { Routes, Route } from 'react-router-dom';
import ProjectPage from "./ProjectPage";


const App = () => {


    return (
        <div>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/projects/*" element={<ProjectHomepage projectData={projectData} />} />
                <Route path="/projects/*" element />
                {projectData.map((project) => (
                    <Route
                        path={`projects/${project.projectName}`}
                        element={
                            <ProjectPage projectInfo={project}/>
                        }
                    />
                ))}
                <Route path="/aboutme" element={<AboutMe />} />
                <Route path="/skills" element={<Skills />} />
            </Routes>

        </div>
    )
}

export default App;




/*
import React, { useState } from "react";
import Header from "./Header";
import Splash from './Splash';
import AboutMe from "./AboutMe";
import Skills from './Skills';
import Projects from "./Projects";
import Contact from "./Contact";

const App = () => {
    const [theme, setTheme] = useState('orange');

    const colorChange = (event) => {
        setTheme(event.currentTarget.className.split(' ')[1])
    }

    return (
        <div>
            <Header theme={theme} />
            <Splash colorChange={colorChange} theme={theme} />
            <AboutMe theme={theme} />
            <Skills theme={theme} />
            <Projects />
            <Contact theme={theme} />
        </div>
    )
}

export default App;

*/