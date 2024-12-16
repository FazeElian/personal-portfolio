import React from 'react'

// Styles for this component
import "../assets/css/components/TitleSection.css";

import { Element } from 'react-scroll';

const TitleSection = (props) => {
    return (
        <Element className="cont-title-section bg-transparent font-poppins" name={props.name}>
            <div className="title-section" style={{ borderBottom: props.border }}>
                {props.titleIcon &&
                    <img src={props.titleIcon} alt="" />
                }
                <h2 className={ `bg-transparent ${props.classTitle}` }>{props.title}</h2>
            </div>
        </Element>
    )
}

export default TitleSection