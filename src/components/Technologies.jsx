import React from 'react'

// Title section component
import TitleSection from './TitleSection';

// Styles for this component
import "../assets/css/components/Technologies.css";

// Framer motion
import { motion } from 'framer-motion';

// List
import TechnologiesList from '../utils/TechnologiesList';

const Technologies = () => {
    return (
        <>
            {/* Title of the section component */}
            <TitleSection
                classTitle="txt-white-blue-gradient--dark-mode"
                title = "Technologies & Languages"
                border = "1px solid #4FC3F7"
            />
            <div className="cont-technologies font-poppins">
                {TechnologiesList.map((item) => (
                    <motion.div
                        className="item-technologies"
                        key={item.id}
                        whileHover={{ scale: 1.07, color: "#F5F8FF" }}
                        transition={{
                            duration: .15,
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