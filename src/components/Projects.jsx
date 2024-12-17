import React from 'react'

// Styles for this component
import "../assets/css/components/Projects.css";

// Title section component
import TitleSection from './TitleSection';

// Content translations
import { ContentTranslations } from '../utils/ContentTranslations';

// Custom hook for lang
import { useLanguage } from '../LanguageContext';
import { IoLogoGithub } from 'react-icons/io';

const Projects = () => {
    // Hook of the lang context
    const { lang } = useLanguage();

    return (
        <>
            {/* Title of the section component */}
            <TitleSection
                classTitle="txt-white-blue-gradient--dark-mode"
                title = "Projects"
                border = "1px solid #4FC3F7"
                name = "projects"
            />

            <div className="cont-projects font-poppins">
                {ContentTranslations[lang].ProjectsSection.items.map((item) => (
                    <div className="item-projects" key={item.id}>
                        <a href={item.url}><img src={item.img} alt={item.name} /></a>
                        <h2 className="txt-white--dark-mode"><a href={item.url}>{item.name}</a></h2>
                        <p className="txt-gray--dark-mode">{item.description}</p>

                        <div className="btm-item-projects">
                            <div className="technologies-bnt-item-projects">
                                {item.technologies.map((techItem) => (
                                    <img src={techItem.icon} key={techItem.id} alt="" />
                                ))}
                            </div>
                            <a href={item.urlRepo}>
                                <IoLogoGithub
                                    width="22px"
                                    height="22px"
                                    color="#BFBFBF"
                                />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Projects
