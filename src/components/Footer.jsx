import React from 'react'

// Styles for this component
import "../assets/css/components/Footer.css";

// Content translations
import { ContentTranslations } from '../utils/ContentTranslations';

// Custom hook for lang
import { useLanguage } from '../LanguageContext';

const Footer = () => {
    // Hook of the lang context
    const { lang } = useLanguage();

    return (
        <footer className="footer font-poppins txt-white--dark-mode">
            {ContentTranslations[lang].Footer}
            <h2 className="txt-white-blue-gradient--dark-mode">
                Elián Ibarra
            </h2>
        </footer>
    )
}

export default Footer
