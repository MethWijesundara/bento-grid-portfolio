import React from 'react';

// importing fontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faTumblr, faSubstack } from '@fortawesome/free-brands-svg-icons';

// ENTER LINKS HERE
const email = "methw.dev@gmail.com";
const GitHub = "https://github.com/MethWijesundara";
const LinkedIn = "https://www.linkedin.com/in/meth-wijesundara/";
const Tumblr = "https://www.tumblr.com/blog/methwijesundara";
const SubStack = "https://methwijesundara.substack.com/notes";

const cardsData = [
    {
        label: "Get in touch with me through e-mail!",
        value: email,
        href: `mailto:${email}`,
        icon: faEnvelope
    },

    {
        label: "View My Projects on GitHub!",
        value: "GitHub",
        href: GitHub,
        icon: faGithub
    },

    {
        label: 'Connect with me on Linkedin! ',
        value: 'LinkedIn',
        href: LinkedIn,
        icon: faLinkedin
    },

    {
        label: 'Read my blogs on Tumblr',
        value: 'Tumblr',
        href: Tumblr,
        icon: faTumblr,
    },

    {
        label: 'Read my blogs on SubStack',
        value: 'SubStack',
        href: SubStack,
        icon: faSubstack,
    },
];

function ActionCards(){
    return(
        <section className='cards-container'>

            <h2>LINKS</h2>
            <div className='links-container'>
                {cardsData.map((card, index)=>(
                    <a
                        key={index}
                        href={card.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='action-card'
                    >
                        <div className='card'>

                            <FontAwesomeIcon
                                icon={card.icon}
                                className='card-icon'
                            />

                            <span className='card-label'>
                                {card.label} 
                                {/* <span className='arrow'>-</span> */}
                            </span>

                            {/* <span className='card-value'>
                                {card.value}
                            </span> */}

                            {/* <span className='arrow'>→</span> */}
                        </div>
                    </a>
                ))}

            </div>
        </section>
    );
}
export default ActionCards;