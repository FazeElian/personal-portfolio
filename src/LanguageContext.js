import React, { createContext, useState, useContext } from 'react';

// Create the context
const LanguageContext = createContext();

// Provider of the context
export const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState("en");

    const toggleLanguage = () => {
        setLang(prevLang => (prevLang === "en" ? "es" : "en"));
    };

    return (
        <LanguageContext.Provider value={{ lang, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

// Custom hook for use the context
export const useLanguage = () => useContext(LanguageContext);