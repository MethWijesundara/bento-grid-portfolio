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
            <h2 className='education-heading'>3. my timeline</h2>
            
            <div className='education-major-qualification'>

                <h3>Major education qualifications</h3>
                <div className='edu-item'>
                        <h3 className='uni-name'>BSc(Hons) Computer Science</h3>
                        <p><i><strong>University of Plymouth • National School of Business Management (NSBM)</strong></i></p>
                        <p>Completed two years of CS coursework.</p>
                </div>
            </div>

            <div className='education-timeline'>

                <h3>What I've been upto..</h3>


                <div className='edu-item-container'>
                <div className='edu-item'>
                        <p><i class="date">2026 November</i></p>
                        <h3 className='uni-name'>Kalana Furniture</h3>
                        <p>Ragama road, Kadawatha.</p>
                        
                        <br />
                        <p>• Assitance with sales</p>
                        <p>• Keeping the shop tidy</p>
                </div>
                    <div className='edu-item'>
                        <p><i class="date">February 2026 - Present</i></p>
                        <h3 className='uni-name'>Building projects on my own</h3>
                        <p>Independent studying</p>
                    </div>
                    
                    <div className='edu-item'>
                        <p><i class="date">2025 November - 2026 January</i></p>
                        <h3 className='uni-name'>G.C.E Advanced Level (2nd attempt)</h3>
                        <p>Private applicant</p>
                        
                        <br />
                        <p>Results:</p>
                        <p>I.C.T → B, Combined Mathematics → C, Physics → S</p>
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

                    <div className='edu-item'>
                        <p><i class="date">2020 - 2023 February</i></p>
                        <h3 className='uni-name'>G.C.E Advanced Level (1st attempt)</h3>
                        <p>St. thomas college (Mount Lavinia)</p>
                        
                        <br />
                        <p>Results:</p>
                        <p>I.C.T → B, Combined Mathematics → S, Physics → S</p>
                    </div>

                    <div className='edu-item'>
                        <p><i class="date">2019 December</i></p>
                        <h3 className='uni-name'>G.C.E Ordinary Level</h3>
                        <p>St. thomas preparatory school (Colombo 03)</p>
                        
                        <br />
                        <p>Results: 9 "A" passes.</p>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default Education;