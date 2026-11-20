// importing pages
import About from "./About";
import Projects from "./Projects";
import Education from "./Education";
import ContactMe from "./ContactMe";
import Skills from "./Skills";

// importing CSS
import "/src/styles/PageDisplay.css"

function PageDisplay({ activePage }){
    
    return(
    <div className="page-display">
        <div className="page-content">
            {activePage === "profile" && <About />}
            {activePage === "work" && <Projects />}
            {activePage === "education" && <Education />}
            {activePage === "contact" && <ContactMe />}
            {activePage === "skills" && <Skills />}
        </div>
    </div>
    )
}
export default PageDisplay;