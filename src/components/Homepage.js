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