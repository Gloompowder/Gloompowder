import React from 'react'

class Contact extends React.Component {
    render(){
        return(
            <div className ="outer-contact">
                <form className="Contact">
                    <h1>Contact</h1>
                    <label for="email">Email</label>
                    <br></br>
                    <input type="text" name = "email"/>
                    <br></br>
                    <label for="subject">Subject</label>
                    <br></br>
                    <input type= "text" name = "subject"></input>
                    <br></br>
                    <label for="Message">Message</label>
                    <br></br>
                    <input type="text-area" name="message"></input>
                    <br></br>
                    <input type="button" className="contact-button" value="Submit"/>
                </form>
            </div>
        )
    }
} 

export default Contact