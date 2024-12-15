import React, { useState } from 'react'

// Styles for this component
import "../assets/css/components/Header.css";

// Images - icons
import MenuIcon from "../assets/img/Menu.png";
import SpanishLanguageIcon from "../assets/img/SpanishLanguage.png";
import LightModeWhiteIcon from "../assets/img/LightModeWhite.png";
import HomeIcon from "../assets/img/Home.png";
import ExperienceIcon from "../assets/img/Experience.png";
import ServicesIcon from "../assets/img/Services.png";
import ProjectsIcon from "../assets/img/Projects.png";
import ContactIcon from "../assets/img/Contact.png";

const Header = () => {
    const [ menu, setMenu ] = useState(false);

    const handleMenu = () => {
        setMenu(!menu);
    }

    return (
        <header className="header bg-black--dark-mode">
            <nav className="nav-logo">
                <h1>Logo</h1>
            </nav>
            <nav className={ `nav-menu bg-black--dark-mode ${menu ? "active": ""} `}>
                <nav className="nav-list">
                    <li className="item-nav-list">
                        <a href="/">
                            <img src={HomeIcon} alt="" />
                            Home
                        </a>
                    </li>
                    <li className="item-nav-list">
                        <a href="/">
                            <img src={ExperienceIcon} alt="" />
                            Experience
                        </a>
                    </li>
                    <li className="item-nav-list">
                        <a href="/">
                            <img src={ServicesIcon} alt="" />
                            Services
                        </a>
                    </li>
                    <li className="item-nav-list">
                        <a href="/">
                            <img src={ProjectsIcon} alt="" />
                            Projects
                        </a>
                    </li>
                    <li className="item-nav-list">
                        <a href="/">
                            <img src={ContactIcon} alt="" />
                            Contact
                        </a>
                    </li>
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