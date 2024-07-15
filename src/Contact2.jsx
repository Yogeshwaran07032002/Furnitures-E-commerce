// src/components/ContactForm.js
import React, { useState } from 'react';
// import './ContactForm.css';


function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // For demonstration, we'll just log the data. In a real app, you'd send this data to your server.
        console.log(formData);
        alert('Message sent successfully!');
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            message: '',
        });
    };

    return (
        <div className="contact-form">

            <form onSubmit={handleSubmit}>
<div className='namesdiv'>
                <div className='finame'>
                    {/* <label> */}
                    First Name
                    <input
                        type="text" className='finame2'
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                    {/* </label> */}
                </div>
                <div className='liname'>
                    Last Name
                    <input
                        type="text" className='liname2'
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                </div>
                </div>
                <div className='messagesdiv'>
                    <div className='email'>
                    Email
                    <input
                        type="email"  className='email2'
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                 </div>
                 <div className='messages1'>
                    Message:
                    <textarea
                        name="message"  className='messages2'
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
            </div>
            <div className='butt'>
                <button type="submit">Send Message</button>
                </div>
                </div>
            </form>
        </div>
 
    );
    
}

export default ContactForm;
