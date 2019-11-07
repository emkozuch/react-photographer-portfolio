import React from 'react'
import '../Styles/Components/ContactForm-style.scss'

class ContactForm extends React.Component {
    render(){
        return(
            <div className="contact-form-container">
                <form>
                    <input placeholder="E-mail" type="email"/>
                    <textarea placeholder="Message"></textarea>
                    <button>Send</button>
                </form>

            </div>
        )
    }
}
export default ContactForm