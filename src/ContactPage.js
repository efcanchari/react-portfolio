import React, { Component } from 'react';

class ContactPage extends Component {
    render() {
        return (
            <div>
                <h1>Contact Me</h1>
                <p>Email: your-email@example.com</p>
                <p>LinkedIn: your-linkedin-profile-link</p>
                <form>
                    <input type="text" placeholder="E. Frank C. Lapa" />
                    <input type="email" placeholder="frank.lapa@itexp.co.uk" />
                    <textarea placeholder="Please feel free to add your message"></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        );
    }
}

export default ContactPage;
