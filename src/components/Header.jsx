import React, { useState, useEffect } from 'react'

// Styles for this component
import "../assets/css/components/Header.css";

// Images - icons
import Logo from "../assets/img/Logo.png";
import MenuIcon from "../assets/img/Menu.png";
import SpanishLanguageIcon from "../assets/img/SpanishLanguage.png";
import LightModeWhiteIcon from "../assets/img/LightModeWhite.png";
import HomeIcon from "../assets/img/Home.png";
import ExperienceIcon from "../assets/img/Experience.png";
import ServicesIcon from "../assets/img/Services.png";
import ProjectsIcon from "../assets/img/Projects.png";
import ContactIcon from "../assets/img/Contact.png";

// React scroll
import { Link } from "react-scroll";

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

    return (
        <header className="header">
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
                            Home
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
                            Experience
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
                            Services
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
                            Projects
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
                            Contact
                        </a>
                    </Link>
                </nav>
                <nav className="nav-lang-mode">
                    <button className="btn-nav-lang-mode font-poppins">
                        <img src={SpanishLanguageIcon} alt="" />
                        <h2>Change language</h2>
                    </button>
                    <button className="btn-nav-lang-mode font-poppins">
                        <img src={LightModeWhiteIcon} alt="" />
                        <h2>Change mode</h2>
                    </button>
                </nav>
            </nav>
            <button className="btn-tgl-menu" onClick={handleMenu}>
                <img src={MenuIcon} alt="" />
            </button>
        </header>
    )
}

export default Header