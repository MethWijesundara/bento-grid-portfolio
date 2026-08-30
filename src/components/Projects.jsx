
function Projects(){

    // ENTER PROJECT DETAILS HERE
    const projects = [
        {
            id: '1',
            title: 'Renwu',
            tech: 'C , SQLite',
            date: 'August 2026',
            description: 'A simple CLI task manager built using C. It uses SQLite for storage.',
            github: ''
        },

        {
            id: '2',
            title: 'DAYLI',
            tech: 'Python , MySQL',
            date: 'July 15, 2026',
            description: 'A CLI journaling app',
            github: 'github-link-2'
        },

        {
            id: 'id-3',
            title: 'title-3',
            tech: 'tech-stack-3',
            date: 'date-3',
            description: 'description-3',
            github: 'github-link-3'
        }
    ]
    return(
        <section className="projects">
            <h2>WORK</h2>

            {projects.map((project)=>(

                <div key={project.id} className='project-card'>

                    {/* Heading = Project name + tech stack */}
                    <h3 className="project">
                        {project.title}<span className='straight-line'> • </span>{''}
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