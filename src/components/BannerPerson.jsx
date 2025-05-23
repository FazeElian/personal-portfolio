import React from 'react'

// Styles for this component
import "../assets/css/components/BannerPerson.css";

// Images - icons
// import ProfilePhotoExample from "../assets/img/ProfilePhotoExample.webp";
import Avatar from "../assets/img/avatar.webp";

// React icons
import { FaDownload } from 'react-icons/fa6';

// Content translations
import { ContentTranslations } from '../utils/ContentTranslations';

// Custom hook for lang
import { useLanguage } from '../LanguageContext';

const BannerPerson = () => {
    // Hook of the lang context
    const { lang } = useLanguage();

    return (
        <div className="banner-person font-poppins" name="home">
            <img src={Avatar} alt="Elián Ibarra" />
            <h1 className="txt-white--dark-mode bg-transparent">Elián Ibarra</h1>
            <h2 className="txt-white-blue-gradient--dark-mode">{ContentTranslations[lang].BannerPerson.role}</h2>

            <p className="txt-gray--dark-mode bg-transparent">
                {ContentTranslations[lang].BannerPerson.description}
            </p>
            
            <a href={ContentTranslations[lang].BannerPerson.CVFile} className="btn-cv font-poppins" target="blank">
                {ContentTranslations[lang].BannerPerson.btnText}
                <FaDownload />
            </a>
        </div>
    )
}

export default BannerPerson