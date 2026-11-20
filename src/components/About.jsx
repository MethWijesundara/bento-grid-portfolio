// importing image
import profile_picture from "/images/chibi_male_character(3).jpg";

// importing use-state
import { useState } from "react";

function About(){
    // ENTER YOUR CONTENT HERE
    const ABOUT_CONTENT = "I am Meth Wijesundara ( yes, that's my name 😊 - It means showing kindness' in Buddhism). I'm an SL based web developer and I do design work on the side. I like coding and designing websites from scratch. Sometimes, I write Physics simulations and productivity software in Python and C during my free time. ";

    const [isOpen, setIsOpen] = useState(false);

    return(
        <section className="about-container" onClick={() => setIsOpen(!isOpen)}>
            <h2>1. Welcome to my portfolio!</h2>
            <div className="about-content-wrapper">
                <div className="about-left">
                    <h3>about me</h3>

                    <div className="about-left-top">
                        <img src={profile_picture} alt="about me profile picture" className="about-profile-picture"></img>
                        <div>
                            <p className="about-name">I'm <br /> Meth Wijesundara</p>
                            <p className="about-role">Software engineering student • Frontend developer</p>
                        </div>
                    </div>

                    <p className="about-content-paragraph">Yes, that's my first name :) [It means <i>loving kindness</i> in Buddhism]. I'm a Sri Lanka-based web developer and I do design work on the side. I like building websites from scratch. </p>
                    
                    <p className="about-content-paragraph">Sometimes, I write Physics simulations and productivity software in Python when I can find time, or when I feel like it. [Feel free to find them on <i>work</i> section.]</p>
                    <p className="about-content-paragraph"> Looking forward to working on web applications with you!</p>
                </div>

                <div className="about-right">
                    <h3>personal stats🧑🏻</h3> 
                    <br />
                    <p><strong>Pronouns → </strong>He/him</p>
                    {/* <p><strong>Age → </strong>23+</p> */}
                    <p><strong>Born → </strong>2003</p>
                    <p><strong>Favorite food rn → </strong>Chocolate cookies & Strawberry mojito</p>

                    <br /><br />
                    <h3>coding stats👾</h3>
                    <br />
                    <p><strong>Total projects done → </strong>10+</p>
                    <p><strong>Coding experience → </strong>3+ years</p>
                    <p><strong>Favorite technology → </strong>CSS</p>
                    <p><strong>Favorite programming language → </strong>Python</p>

                </div>
            </div>

            {/* <h2>Latest Project</h2> */}
            {/* <h2>Latest Article</h2> */}

        </section>
    )
}

export default About;