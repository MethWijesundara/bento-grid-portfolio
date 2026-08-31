
function Projects(){

    // ENTER PROJECT DETAILS HERE
    const projects = [
        {
            id: '1',
            title: 'DNA → RNA Transcription',
            scale: "Small",
            tech: 'Python, Biology',
            date: 'August 2026',
            status: 'Completed',
            description: 'A small script that converts a DNA sequence to RNA.',
            github: 'https://github.com/MethWijesundara/DNA-to-RNA-transcription'
        },

        {
            id: '2',
            title: 'EduNova Landing Page',
            scale: "Medium",
            tech: 'HTML, CSS, ',
            date: 'May 2026',
            status: "Completed",
            description: 'A simple user interface for a learning platform.',
            github: 'https://github.com/MethWijesundara/EduNova-landing-page'
        },

        {
            id: 'id-3',
            title: 'Automated Weather Notifier',
            scale: "Medium",
            tech: 'Python, OpenWeatherMap API',
            date: 'March 2026',
            status: "Comepleted",
            description: 'Fetches real-time weather data and sends a desktop notification with personalized advice.',
            github: 'https://github.com/MethWijesundara/automated-weather-notifier'
        }
    ]
    return(
        <section className="projects">
            <h2>WORK</h2>

            {projects.map((project)=>(

                <div key={project.id} className='project-card'>

                    {/* Heading = Project name + tech stack */}
                    <h3 className="project">
                        {project.title}<span className='straight-line'> | </span>{''}
                        <span className='tech'>{project.tech}</span>
                    </h3>

                    {/* Duration/date of the project */}
                    <p className='date'>{project.date}</p>

                    {/* Project description */}
                    <p className='description'>{project.description}</p>

                    {/* View project + live demo* buttons */}
                    <div className="project-buttons">

                        <a href={project.github} className='btn' target="_blank" rel='noopener noreferrer'>
                            <img src="/images/github_doodle.png" className="github_icon"></img>
                        </a>

                    </div>

                </div>
            ))}
        </section>
    );
}

export default Projects;