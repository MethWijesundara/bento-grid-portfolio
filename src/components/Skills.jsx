const Skills = () =>{
    // Fill in your skills on the arrays.

    const skills = [
        {
            category: "Frontend",

            items: ["HTML", "CSS", "JavaScript", "React.js"]
        },

        {
            category: "Backend",
            items: ["SQL", "Flask"]
        },

        {
            category: "Programming languages",
            items: ["Python"]
        },

        {
            category: "Other tools",
            items: ["Git", "GitHub", "VS Code"]
        }
    ]

    return(
        <section className="skills-wrapper">

            <h2>2. The toolkit</h2>

            <div className="skills-container">

                {skills.map((group, index) =>(
                    <div key={index} className="skills-cards-container">

                        <div className="skills-card-heading">
                            <h3>{group.category}</h3>
                            
                        </div>

                        <div className="skills-grid">
                            {group.items.map((skill,i) => (
                                <span className="skill-tag" key={i}>
                                {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}

            </div>

        </section>
    )
};

export default Skills;