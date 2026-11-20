// importing CSS
import "/src/styles/Navbar.css";

// importing images
import moon_img from "/images/moon.png";
import profile_icon from "/images/profile_icon.png";
import work_icon from "/images/work_icon.png";
import timeline_icon from "/images/timeline_icon.png";
import contact_icon from "/images/email_icon.png";
import skills_icon from "/images/skills_icon.png";

function Navbar({ activePage, setActivePage }){
    return(
        <main className="navbar-container">
            <div className="navbar-top">
                <a onClick={() => setActivePage("profile")} 
                    className={`navbar-button ${activePage === "profile" ? "active" : ""}`}>
                    <img src={profile_icon} />
                    profile
                </a>
                {/* <a onClick={() => setActivePage("skills")} 
                className={`navbar-button ${activePage === "skills" ? "active" : ""}`}>
                    <img src={skills_icon} />
                    skills & tools
                </a> */}
                <a onClick={() => setActivePage("work")} 
                className={`navbar-button ${activePage === "work" ? "active" : ""}`}>
                    <img src={work_icon} />
                    work & skills
                </a>
                <a onClick={() => setActivePage("education")} 
                className={`navbar-button ${activePage === "education" ? "active" : ""}`}>
                    <img src={timeline_icon} />
                    timeline
                </a>
                

                <a onClick={() => setActivePage("contact")} 
                className={`navbar-button ${activePage === "contact" ? "active" : ""}`}>
                    <img src={contact_icon} />
                    contact me
                </a>



            </div>
        </main>
    );
}

export default Navbar;