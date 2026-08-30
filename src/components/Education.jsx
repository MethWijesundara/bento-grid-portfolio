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
            <h2 className='education-heading'>EDUCATION</h2>
            
            <div className='edu-item'>
                <p><i class="date">March 2023 - May 2025</i></p>
                <h3 className='uni-name'>BSc (Hons) Computer Science</h3>
                <p>NSBM Green University</p>
                
                <br />
                <p>Relevant Coursework :</p>
                <ul className='unordered-list'>
                    {courses.map((course, index)=>(
                        <li key={index}>{course}</li>
                    ))}
                </ul>
            </div>       

        </section>
    );
};

export default Education;