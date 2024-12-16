import React from 'react'

// Styles for this component
import "../assets/css/components/Projects.css";

// Title section component
import TitleSection from './TitleSection';

import ProjectExample from "../assets/img/ProjectExample.png";
import html from "../assets/img/HTML.png";
import css from "../assets/img/CSS.png";
import js from "../assets/img/Javascript.png";
import { IoLogoGithub } from "react-icons/io";

const Projects = () => {
    return (
        <>
            {/* Title of the section component */}
            <TitleSection
                classTitle="txt-white-blue-gradient--dark-mode"
                title = "Projects"
                border = "1px solid #4FC3F7"
            />

            <div className="cont-projects font-poppins">
                <div className="item-projects">
                    <img src={ProjectExample} alt="" />
                    <h2 className="txt-white--dark-mode">Name Project</h2>
                    <p className="txt-gray--dark-mode">Project Description, project description....</p>

                    <div className="btm-item-projects">
                        <div className="technologies-bnt-item-projects">
                            <img src={html} alt="" />
                            <img src={css} alt="" />
                            <img src={js} alt="" />
                        </div>
                        <a href="https://github.com/">
                            <IoLogoGithub
                                width="22px"
                                height="22px"
                                color="#BFBFBF"
                            />
                        </a>
                    </div>
                </div>
                <div className="item-projects">
                    <img src={ProjectExample} alt="" />
                    <h2 className="txt-white--dark-mode">Name Project</h2>
                    <p className="txt-gray--dark-mode">Project Description, project description....</p>

                    <div className="btm-item-projects">
                        <div className="technologies-bnt-item-projects">
                            <img src={html} alt="" />
                            <img src={css} alt="" />
                            <img src={js} alt="" />
                        </div>
                        <a href="https://github.com/">
                            <IoLogoGithub
                                width="22px"
                                height="22px"
                                color="#BFBFBF"
                            />
                        </a>
                    </div>
                </div>
                <div className="item-projects">
                    <img src={ProjectExample} alt="" />
                    <h2 className="txt-white--dark-mode">Name Project</h2>
                    <p className="txt-gray--dark-mode">Project Description, project description....</p>

                    <div className="btm-item-projects">
                        <div className="technologies-bnt-item-projects">
                            <img src={html} alt="" />
                            <img src={css} alt="" />
                            <img src={js} alt="" />
                        </div>
                        <a href="https://github.com/">
                            <IoLogoGithub
                                width="22px"
                                height="22px"
                                color="#BFBFBF"
                            />
                        </a>
                    </div>
                </div>
                <div className="item-projects">
                    <img src={ProjectExample} alt="" />
                    <h2 className="txt-white--dark-mode">Name Project</h2>
                    <p className="txt-gray--dark-mode">Project Description, project description....</p>

                    <div className="btm-item-projects">
                        <div className="technologies-bnt-item-projects">
                            <img src={html} alt="" />
                            <img src={css} alt="" />
                            <img src={js} alt="" />
                        </div>
                        <a href="https://github.com/">
                            <IoLogoGithub
                                width="22px"
                                height="22px"
                                color="#BFBFBF"
                            />
                        </a>
                    </div>
                </div>
                <div className="item-projects">
                    <img src={ProjectExample} alt="" />
                    <h2 className="txt-white--dark-mode">Name Project</h2>
                    <p className="txt-gray--dark-mode">Project Description, project description....</p>

                    <div className="btm-item-projects">
                        <div className="technologies-bnt-item-projects">
                            <img src={html} alt="" />
                            <img src={css} alt="" />
                            <img src={js} alt="" />
                        </div>
                        <a href="https://github.com/">
                            <IoLogoGithub
                                width="22px"
                                height="22px"
                                color="#BFBFBF"
                            />
                        </a>
                    </div>
                </div>
                <div className="item-projects">
                    <img src={ProjectExample} alt="" />
                    <h2 className="txt-white--dark-mode">Name Project</h2>
                    <p className="txt-gray--dark-mode">Project Description, project description....</p>

                    <div className="btm-item-projects">
                        <div className="technologies-bnt-item-projects">
                            <img src={html} alt="" />
                            <img src={css} alt="" />
                            <img src={js} alt="" />
                        </div>
                        <a href="https://github.com/">
                            <IoLogoGithub
                                width="22px"
                                height="22px"
                                color="#BFBFBF"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects
