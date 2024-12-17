import React from 'react'

// Styles for this component
import "../assets/css/components/Services.css";

// Title section component
import TitleSection from './TitleSection'

// Images - icons
import ServicesIcon from "../assets/img/Services.png";

// Framer Motion
import { motion } from 'framer-motion';

// Content translations
import { ContentTranslations } from '../utils/ContentTranslations';

// Custom hook for lang
import { useLanguage } from '../LanguageContext';

const Services = () => {
    // Hook of the lang context
    const { lang } = useLanguage();

    return (
        <>
            {/* Title of the section component */}
            <TitleSection
                titleIcon = {ServicesIcon}
                title = "My Services"
                classTitle = "txt-white--dark-mode"
                name = "services"
            />

            <div className="cont-services font-poppins">
                {ContentTranslations[lang].ServicesSection.items.map((item) => (
                    <motion.div
                        className="item-services bg-black-light--dark-mode"
                        key={item.id}
                        whileHover={{ scale: 1.1 }}
                        transition={{
                            duration: .3,
                        }}
                    >
                        <div className="icon-item-services bg-gray--dark-mode">
                            <img src={item.icon} className="bg-transparent" alt={item.title} />
                        </div>
                        <h2 className="txt-white--dark-mode bg-transparent">{item.title}</h2>
                        <p className="txt-gray--dark-mode bg-transparent">{item.description}</p>
                    </motion.div>
                ))}
            </div>
        </>
    )
}

export default Services