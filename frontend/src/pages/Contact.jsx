import React from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for your feedback! We will get back to you soon!");
        navigate('/');
    };

    return (
        <div>
            <section className="forms1" id="forms1">
                <div className="contenthead">
                    <h2>Contact Us</h2>
                </div>

                <div className="container1">

                    <div className="contactinfo">

                        <div className="contact-address">
                            <div className="text">
                                <h1>location</h1>
                                <br />
                                <li>123 NRGK, New York,</li>
                                <li>NY 10001</li>
                            </div>
                        </div>

                        <div className="contact-address">
                            <div className="text">
                                <h1>Communication</h1>
                                <br />
                                <li>Phone: +1 (123) 456-7890</li>
                                <li>Email: info@nrgk.com</li>
                            </div>
                        </div>

                        <div className="contact-address">
                            <div className="text">
                                <h1>Our Office</h1>
                                <br />
                                <p>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.7869409509653!2d76.8957767746574!3d10.903790489252824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85c95d3e828eb%3A0x2785cb4510629029!2sAmrita%20Vishwa%20Vidyapeetham%2C%20Coimbatore!5e0!3m2!1sen!2sin!4v1714853932896!5m2!1sen!2sin"
                                        width="600"
                                        height="400"
                                        style={{ border: 'outset 8px' }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Office Map"
                                    ></iframe>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="contactform">
                        <form onSubmit={handleSubmit}>
                            <h2>Send Us A Message!</h2>
                            <div className="inputBox">
                                <input type="text" required />
                                <span>Full Name</span>
                            </div>
                            <div className="inputBox">
                                <input type="text" required />
                                <span>Email</span>
                            </div>
                            <div className="inputBox">
                                <textarea required></textarea>
                                <span>Type your Message...</span>
                            </div>

                            <div className="inputBox">
                                <input type="submit" value="Send" />
                            </div>
                        </form>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Contact;
