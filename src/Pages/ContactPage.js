import React from 'react'
import '../Styles/Pages/ContactPage-style.scss'

import ContactForm from '../Components/ContactForm'

const ContactPage = () => {
    return (
        <div className="contact content-container">
            <div className="quote-container">
                <div className="quote">
                    <p><span className="colored">“</span>A portrait is not made in the camera but on either side of it.<span className="colored">“</span></p>
                    <span><span className="colored">—</span> Edward Steichen</span>
                </div>
            </div>
            <ContactForm />

        </div>


    )
}
export default ContactPage