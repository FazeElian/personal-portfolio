import React from 'react'

// Styles for this component
import "../assets/css/components/Experience.css";

// Title section component
import TitleSection from './TitleSection';

// Images - icons
import ExperienceIcon from "../assets/img/Experience.png";
import CompanyIcon from "../assets/img/Company.png";

const Experience = () => {
    return (
        <>
            {/* Title of the section component */}
            <TitleSection
                titleIcon = {ExperienceIcon}
                title = "Experience"
            />

            <div className="cont-experience font-poppins">
                <div className="company-experience">
                    <div className="cont-company--company-experience txt-white--dark-mode">
                        <img src={CompanyIcon} alt="" />
                        <h1>BPM Consulting SAS</h1>
                    </div>
                    <h2 className="txt-white-blue-gradient--dark-mode">Front-End Web Developer</h2>
                    <h3 className="txt-white--dark-mode">October 2023 - April - 2024</h3>
                </div>
                <div className="functions-experience">
                    <h2 className="txt-white--dark-mode">Functions Performed:</h2>
                    <ul className="list--functions-experience">
                        <li className="txt-gray--dark-mode">
                            Development of responsive interfaces for different devices.
                        </li>
                        <li className="txt-gray--dark-mode">
                            Efficient implementation and management of dynamic and validated forms.
                        </li>
                        <li className="txt-gray--dark-mode">
                            Creation of user interfaces using Bootstrap components.
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Experience