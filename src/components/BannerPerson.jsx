import React from 'react'

// Styles for this component
import "../assets/css/components/BannerPerson.css";

// Images - icons
import ProfilePhotoExample from "../assets/img/ProfilePhotoExample.jpg";

// React icons
import { FaDownload } from 'react-icons/fa6';

const BannerPerson = () => {
    return (
        <div className="banner-person font-poppins" name="home">
            <img src={ProfilePhotoExample} alt="" />
            <h1 className="txt-white--dark-mode bg-transparent">Elián Ibarra</h1>
            <h2 className="txt-white-blue-gradient--dark-mode">Front-End Web Developer</h2>

            <p className="txt-gray--dark-mode bg-transparent">
                I create fluid, responsive and accessible user interfaces that bring web designs to life.
            </p>
            
            <a href="/" className="btn-cv font-poppins">
                Download CV
                <FaDownload />
            </a>
        </div>
    )
}

export default BannerPerson