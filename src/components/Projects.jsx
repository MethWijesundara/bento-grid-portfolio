// importing images
import dna_to_rna_image from "/images/dna_to_rna.png";

function Projects(){

    // ENTER PROJECT DETAILS HERE
    const projects = [
        {
            id: '1',
            title: 'DNA → RNA Transcription',
            scale: "Small",
            tech: 'Python',
            date: 'August 2026',
            status: 'Completed',
            description: 'A small Python script that takes a DNA sequence as input and converts it to RNA.',
            github: 'https://github.com/MethWijesundara/DNA-to-RNA-transcription',
            theme: "Biology"
        },

        {
            id: '2',
            title: 'EduNova Landing Page',
            scale: "Medium",
            tech: 'HTML, CSS',
            date: 'May 2026',
            status: "Completed",
            description: 'A simple user interface for an educational platform.',
            github: 'https://github.com/MethWijesundara/EduNova-landing-page',
            theme: 'Education/Learning'
        },

        {
            id: '3',
            title: 'Automated Weather Notifier',
            scale: "Medium",
            tech: 'Python, OpenWeatherMap API',
            date: 'March 2026',
            status: "Completed",
            description: 'Fetches real-time weather data and sends a desktop notification with personalized advice.',
            github: 'https://github.com/MethWijesundara/automated-weather-notifier'
        },

        {
            id: '4',
            title: "Kinetic and Potential Energy Calculator",
            scale: "Small",
            tech: "Python",
            date: "February 2026",
            status: "Completed",
            description: "A simple Python script that calculates kinetic energy and potential energy when velocity, mass and height is entered. ",
            github: "https://github.com/MethWijesundara/motion-energy-calculator"
        }
    ]
    return(
        <section className="projects">
                <h2>2. featured work</h2>
            <div className="project-top">

                <div className="project-top-left">

                <h3>Discover some of the stuff I've been working on..</h3>
                <p>Most of my work so far has been related to frontend.</p>
                {/* <p>(Click on the cloud icon to view on github)</p> */}
                </div>

                <div className="project-top-right">
                    <div className="project-type-buttons-container">
                        <button>All</button>
                        <button>Frontend</button>
                        <button>Backend</button>
                        <button>Fullstack</button>
                        <button>Programming</button>
                    </div>
                </div>

            </div>

            {/* <p>[these buttons are not working so far]</p> */}
            <br />

            {projects.map((project)=>(

                <a 
                    key={project.id}
                    href={project.github}
                    className="project-card"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                
                <div className="project-card-left">

                    <h3 className="project-heading">
                        {project.title}
                    </h3>
                        <span className='tech'><strong>Skills⚡:  </strong>{project.tech}</span>

                    <br />
                    <br />
                    <p className='date'><strong>Last updated: </strong>{project.date}</p>
                    <p><strong>Theme: </strong>{project.theme}</p>

                    {/* Scale and Completion status */}
                    {/* <p className="scale-status">{project.scale} • {project.status}</p> */}
                    <br />
                    <p className='description'>
                        <strong>Description:</strong>
                        <br />
                        {project.description}</p>

                    <br />
                    <p className="project-image-credits"><i>Image credits: <a href="https://www.technologynetworks.com/genomics/articles/what-are-the-key-differences-between-dna-and-rna-296719">technologynetworks.com</a></i></p>
                </div>

                <div className="project-card-right">
                    <img src={dna_to_rna_image}></img>
                </div>

                    {/* View project + live demo* buttons */}
                    {/* <div className="project-buttons">

                        <a href={project.github} className='btn' target="_blank" rel='noopener noreferrer'>
                            <img src="/images/github_doodle.png" className="github_icon"></img>
                        </a>

                    </div> */}

                </a>
            ))}
        </section>
    );
}

export default Projects;