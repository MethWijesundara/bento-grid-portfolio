// import CSS
import "/src/styles/ContactMe.css"

// import useState
import { useState } from "react";

function ContactMe(){

    const [method, setMethod] = useState("email");

    return(
        <section className="contact-container">
            <h2>4. Let's talk!</h2>
            <p>Have a project in mind or just want to say hello?</p>
            <p>I'd love to hear from you!</p>
            <br />
            <p>Choose your preferred way to reach me →</p>

            <div className="contact-options">
                <button 
                    className={method === "email" ? "selected" : ""}
                    onClick={() => setMethod("email")}>
                    <i className="fa-solid fa-envelope"></i> Email
                </button>

                <button 
                    className={method === "instagram" ? "selected" : ""}
                    onClick={() => setMethod("instagram")}>
                    <i className="fa-brands fa-instagram"></i> Instagram
                </button>
            </div>

            <div className="contact-message">
                <textarea
                    className="message-input"
                    placeholder = "Hey Meth! I came across your portfolio and..."
                    rows = "5"
                />
            </div>

            <button className="send-message">
                {method === "email" ? "Continue to Email" : "Copy & Open Instagram"}
            </button>
        </section>
    )
}

export default ContactMe;