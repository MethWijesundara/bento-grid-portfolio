function About(){
    // ENTER YOUR CONTENT HERE
    const ABOUT_CONTENT = "I am Meth Wijesundara ( yes, that's my name 😊 ). I'm an SL based web developer/designer. I like coding and designing websites from scratch, and writing Physics simulations and productivity software in Python and C during my free time. "

    return(
        <section className="about-container">
            <h2>ABOUT</h2>
            <p className="paragraph">{ABOUT_CONTENT}</p>
        </section>
    )
}

export default About;