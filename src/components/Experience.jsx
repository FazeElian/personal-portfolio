import React from 'react'

// Styles for this component
import "../assets/css/components/Experience.css";

// Title section component
import TitleSection from './TitleSection';

// Images - icons
import ExperienceIcon from "../assets/img/Experience.png";
import CompanyIcon from "../assets/img/Company.png";

// Content translations
import { ContentTranslations } from '../utils/ContentTranslations';

// Custom hook for lang
import { useLanguage } from '../LanguageContext';

const Experience = () => {
    // Hook of the lang context
    const { lang } = useLanguage();

    return (
        <>
            {/* Title of the section component */}
            <TitleSection
                titleIcon = {ExperienceIcon}
                title = {ContentTranslations[lang].ExperienceSection.title}
                classTitle = "txt-white--dark-mode"
                name = "experience"
            />

            <div className="cont-experience font-poppins">
                <div className="company-experience">
                    <div className="cont-company--company-experience txt-white--dark-mode">
                        <img src={CompanyIcon} alt="" />
                        <h1>{ContentTranslations[lang].ExperienceSection.company}</h1>
                    </div>
                    <h2 className="txt-white-blue-gradient--dark-mode">{ContentTranslations[lang].ExperienceSection.role}</h2>
                    <h3 className="txt-white--dark-mode">{ContentTranslations[lang].ExperienceSection.time}</h3>
                </div>
                <div className="functions-experience">
                    <h2 className="txt-white--dark-mode">{ContentTranslations[lang].ExperienceSection.functionsPerformed.title}:</h2>
                    <ul className="list--functions-experience">
                        <li className="txt-gray--dark-mode">
                            {ContentTranslations[lang].ExperienceSection.functionsPerformed[1]}
                        </li>
                        <li className="txt-gray--dark-mode">
                            {ContentTranslations[lang].ExperienceSection.functionsPerformed[2]}
                        </li>
                        <li className="txt-gray--dark-mode">
                            {ContentTranslations[lang].ExperienceSection.functionsPerformed[3]}
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Experience