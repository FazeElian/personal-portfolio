import React from 'react'

// Styles for this component
import "../assets/css/components/Services.css";

// Title section component
import TitleSection from './TitleSection'

// Images - icons
import ServicesIcon from "../assets/img/Services.png";

// Items
import ServicesList from '../utils/ServicesList';

// Framer Motion
import { motion } from 'framer-motion';

const Services = () => {
    return (
        <>
            {/* Title of the section component */}
            <TitleSection
                titleIcon = {ServicesIcon}
                title = "Mis Servicios"
                classTitle = "txt-white--dark-mode"
            />

            <div className="cont-services font-poppins">
                {ServicesList.map((item) => (
                    <motion.div
                        className="item-services bg-black-light--dark-mode"
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