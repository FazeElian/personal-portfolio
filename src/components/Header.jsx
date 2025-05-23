import React, { useState, useEffect } from 'react'

// Styles for this component
import "../assets/css/components/Header.css";

// Images - icons
import Logo from "../assets/img/Logo.webp";
import MenuIcon from "../assets/img/Menu.webp";
import SpanishLanguageIcon from "../assets/img/SpanishLanguage.webp";
import EnglishLanguageIcon from "../assets/img/EnglishLanguage.webp";
import HomeIcon from "../assets/img/Home.webp";
import ExperienceIcon from "../assets/img/Experience.webp";
import ServicesIcon from "../assets/img/Services.webp";
import ProjectsIcon from "../assets/img/Projects.webp";
import ContactIcon from "../assets/img/Contact.webp";

// React scroll
import { Link } from "react-scroll";

// Content translations
import { ContentTranslations } from '../utils/ContentTranslations';

// Lang custom hook
import { useLanguage } from '../LanguageContext';

// React icons
import { IoLogoGithub } from 'react-icons/io';

const Header = () => {
    const [ menu, setMenu ] = useState(false);

    const handleMenu = () => {
        setMenu(!menu);
    }

    // Hook to disable menu when user scrolls a certain amount
    useEffect(() => {
        const handleScrollMenu = () => {
            const scrollThreshold = 150; // Scroll Amount
            if (window.scrollY > scrollThreshold && menu) {
                setMenu(false);
            }
        };
        
        window.addEventListener('scroll', handleScrollMenu); // Adding Scroll Event
        
        return () => {
            window.removeEventListener('scroll', handleScrollMenu);
        };
    }, [menu]);

    const { lang, toggleLanguage } = useLanguage();  // Usar el hook del contexto

    const LanguageIcon = lang === "en" ? SpanishLanguageIcon : EnglishLanguageIcon;
    
    return (
        <header className="header bg-black--dark-mode">
            <nav className="nav-logo">
                <img src={Logo} alt="" />
            </nav>
            <nav className={ `nav-menu bg-black--dark-mode ${menu ? "active": ""} `}>
                <nav className="nav-list">
                    <Link
                        to="home"
                        className="item-nav-list"
                        smooth={true}
                        duration={400}
                        offset={-150}
                    >
                        <a href="/">
                            <img src={HomeIcon} alt="" />
                            {ContentTranslations[lang].NavMenu[1]}
                        </a>
                    </Link>
                    <Link
                        to="experience"
                        className="item-nav-list"
                        smooth={true}
                        duration={400}
                        offset={-80}
                    >
                        <a href="/">
                            <img src={ExperienceIcon} alt="" />
                            {ContentTranslations[lang].NavMenu[2]}
                        </a>
                    </Link>
                    <Link
                        to="services"
                        className="item-nav-list"
                        smooth={true}
                        duration={400}
                        offset={-80}
                    >
                        <a href="/">
                            <img src={ServicesIcon} alt="" />
                            {ContentTranslations[lang].NavMenu[3]}
                        </a>
                    </Link>
                    <Link
                        to="projects"
                        className="item-nav-list"
                        smooth={true}
                        duration={400}
                        offset={-80}
                    >
                        <a href="/">
                            <img src={ProjectsIcon} alt="" />
                            {ContentTranslations[lang].NavMenu[4]}
                        </a>
                    </Link>
                    <Link
                        to="contact"
                        className="item-nav-list"
                        smooth={true}
                        duration={400}
                        offset={-80}
                    >
                        <a href="/">
                            <img src={ContactIcon} alt="" />
                            {ContentTranslations[lang].NavMenu[5]}
                        </a>
                    </Link>
                </nav>
                <nav className="nav-lang-mode">
                    <button className="btn-nav-lang-mode font-poppins" onClick={toggleLanguage}>
                        <img src={LanguageIcon} alt="" />
                        <h2>{ContentTranslations[lang].NavMenu.lang}</h2>
                    </button>
                    <a href="https://github.com/FazeElian?tab=repositories" className="btn-nav-lang-mode font-poppins">
                        <IoLogoGithub
                            color="#BFBFBF"
                        />
                        <h2>{ContentTranslations[lang].NavMenu.github}</h2>
                    </a>
                </nav>
            </nav>
            <button className="btn-tgl-menu" onClick={handleMenu}>
                <img src={MenuIcon} alt="" />
            </button>
        </header>
    )
}

export default Header