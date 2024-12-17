import React from 'react'

// Title section component
import TitleSection from './TitleSection';

// Styles for this component
import "../assets/css/components/Technologies.css";

// Framer motion
import { motion } from 'framer-motion';

// List
import TechnologiesList from '../utils/TechnologiesList';

// Content translations
import { ContentTranslations } from '../utils/ContentTranslations';

// Custom hook for lang
import { useLanguage } from '../LanguageContext';

const Technologies = () => {
    // Hook of the lang context
    const { lang } = useLanguage();

    return (
        <>
            {/* Title of the section component */}
            <TitleSection
                classTitle="txt-white-blue-gradient--dark-mode"
                title = {ContentTranslations[lang].TechnologiesSection.title}
                border = "1px solid #4FC3F7"
            />
            <div className="cont-technologies font-poppins">
                {TechnologiesList.map((item) => (
                    <motion.div
                        className="item-technologies"
                        key={item.id}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                            delay: item.delay,
                        }}
                    >
                        <img src={item.icon} alt={item.name} />
                        {item.name}
                    </motion.div>
                ))}
            </div>
        </>
    )
}

export default Technologies