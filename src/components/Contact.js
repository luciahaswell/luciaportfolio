import React from "react";

const Contact = ({ theme }) => {
    return (
        <div className="section" id='contactSection'>
            <h2 className="sectionHeader">LET'S CONNECT!</h2>
            <div className="contactIconContainer">
                <a href="mailto:luciahaswell@gmail.com?subject=Lucia, Let's Connect!&body=Hi Lucia, I just came across your online website and would love to connect!">
                    <img className="icon contact" 
                        src={require(`../media/colors/${theme}/email.JPG`)} 
                        alt="email"
                        />
                </a>
                <a href='https://www.linkedin.com/in/lucia-haswell/' target='_blank' rel="noreferrer">
                    <img className="icon contact" 
                        src={require(`../media/colors/${theme}/linkedin.JPG`)} 
                        alt="linkedIn"
                        />
                </a>
                <a href='https://github.com/luciahaswell' target='_blank' rel="noreferrer">
                    <img className="icon contact" 
                        src={require(`../media/colors/${theme}/github.JPG`)} 
                        alt="github"
                        />
                </a>
            </div>
        </div>
    )
}

export default Contact;