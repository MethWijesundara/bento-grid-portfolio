import React from 'react';


const Education = () => {
    const courses=[
        'Data Structures & Algorithms',
        'OOP with C#',
        'Database Management',
        'Web Development',
        'Mobile App Development',
        'System Analysis'
    ];

    return(
        <section className='education'>
            <h2 className='education-heading'>my timeline</h2>
            <h3>What I've been upto..</h3>

            <div className='edu-item-container'>
                <div className='edu-item'>
                    <p><i class="date">February 2026 - Present</i></p>
                    <h3 className='uni-name'>Building projects on my own</h3>
                    <p>Independent studying</p>
                </div>
                
                <div className='edu-item'>
                    <p><i class="date">March 2023 - May 2025</i></p>
                    <h3 className='uni-name'>BSc (Hons) Computer Science</h3>
                    <p>NSBM Green University • University of Plymouth</p>
                    
                    <br />
                    <p>Relevant Coursework :</p>
                    <ul className='unordered-list'>
                        {courses.map((course, index)=>(
                            <li key={index}>{course}</li>
                        ))}
                    </ul>
                </div>       
            </div>

        </section>
    );
};

export default Education;