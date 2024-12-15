import React from 'react'

// Styles for this component
import "../assets/css/components/TitleSection.css";

const TitleSection = (props) => {
    return (
        <div className="cont-title-section bg-transparent font-poppins">
            <div className="title-section">
                <img src={props.titleIcon} alt="" />
                <h2 className="bg-transparent txt-white--dark-mode">{props.title}</h2>
            </div>
        </div>
    )
}

export default TitleSection