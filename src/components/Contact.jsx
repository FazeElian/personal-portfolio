import React from 'react'

// Styles for this component
import "../assets/css/components/Contact.css";

// React icons
import { IoLogoGithub } from 'react-icons/io';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';

const Contact = () => {
    return (
        <div className="cont-contact font-poppins">
            <div className="contact-data">
                <h1 className="txt-white--dark-mode">Contact Information</h1>
                <h2 className="txt-white-blue-gradient--dark-mode">
                    Please feel free to contact me at any time. I will reply you as soon as possible!
                </h2>

                <h3 className="txt-white--dark-mode">Email:</h3>
                <h4 className="txt-gray--dark-mode">elianibarra77@gmail.com</h4>

                <h3 className="txt-white--dark-mode">Phone Number:</h3>
                <h4 className="txt-gray--dark-mode">+57 3203139618</h4>

                <div className="icons-contact-data">
                    <a href="https://github.com/" target="blank">
                        <IoLogoGithub
                            color="#BFBFBF"
                        />
                    </a>
                    <a href="https://linkedin.com/" target="blank">
                        <FaLinkedin
                            color="#BFBFBF"
                        />
                    </a>
                    <a href="https://instagram.com/" target="blank">
                        <FaInstagram
                            color="#BFBFBF"
                        />
                    </a>
                    <a href="https://instagram.com/" target="blank">
                        <RiTwitterXFill
                            color="#BFBFBF"
                        />
                    </a>
                </div>
            </div>
            <form action="" method="get" className="send-message">
                <h2 className="txt-white--dark-mode">Send a Message</h2>

                <div className="form-group">
                    <label htmlFor="name" className="txt-white--dark-mode">Name</label>
                    <input
                        type="text"
                        className="txt-gray--dark-mode font-poppins"
                        name="name"
                        id="name"
                        placeholder="Full name"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email" className="txt-white--dark-mode">Email</label>
                    <input
                        type="email"
                        className="txt-gray--dark-mode font-poppins"
                        name="email"
                        id="email"
                        placeholder="example@email.com"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="subject" className="txt-white--dark-mode">Subject</label>
                    <select
                        name="subject"
                        id="subject"
                        className="txt-gray--dark-mode font-poppins"
                        required
                    >
                        <option value="" disabled selected>Reason for contact</option>
                        <option value="job-opportunity">Job opportunity</option>
                        <option value="service-inquiry">Service inquiry</option>
                        <option value="freelance-colab">Freelance collaboration request</option>
                        <option value="consulting">Consulting or advising</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="message" className="txt-white--dark-mode">Message</label>
                    <textarea
                        name="message"
                        id="message"
                        className="txt-gray--dark-mode font-poppins"
                        placeholder="Leave your message here"
                        required
                    />
                </div>

                <button className="btn-submit font-poppins">
                    Send Message
                </button>
            </form>
        </div>
    )
}

export default Contact