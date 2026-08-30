const Skills = () =>{
    // Fill in your skills on the arrays.
    
    const Web_development = ['HTML', 'CSS', 'JavaScript', 'React.js'];
    const backend_development = ['Express.js', 'Node.js'];
    const programming_languages = ['🐍 Python', 'C', 'C#'];
    const database = ['MySQL', 'MongoDB', 'Azure']

    return(
        <section className="skills">

            <h2>SKILLS</h2>

            <div className="skills-container">
                <div className="skills-card">
                    <h3>Programming Languages</h3>
                    <div className="skills-grid">
                        {programming_languages.map((skill, index)=> (
                            <span key={index} className="skill-tag">{skill}</span>
                        ))}
                    </div>
                </div>

                <div className="skills-card">
                    <h3>Web Development</h3>
                    <div className="skills-grid">
                        {Web_development.map((skill, index)=> (
                            <span key={index} className="skill-tag">{skill}</span>
                        ))}
                    </div>
                </div>

                <div className="skills-card">
                    <h3>Backend Development</h3>
                    <div className="skills-grid">
                        {backend_development.map((skill, index)=> (
                            <span key={index} className="skill-tag">{skill}</span>
                        ))}
                    </div>
                </div>

                <div className="skills-card">
                    <h3>Databases</h3>
                    <div className="skills-grid">
                        {database.map((skill, index)=> (
                            <span key={index} className="skill-tag">{skill}</span>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    )
};

export default Skills;