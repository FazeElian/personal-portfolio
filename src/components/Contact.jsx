import emailjs from "emailjs-com";
import { toast, Toaster } from "sonner";
import { useState } from "react";

// Styles for this component
import "../assets/css/components/Contact.css";

// React scroll
import { Element } from 'react-scroll';

// Content translations
import { ContentTranslations } from '../utils/ContentTranslations';

// Custom hook for lang
import { useLanguage } from '../LanguageContext';

const Contact = () => {
    // Hook of the lang context
    const { lang } = useLanguage();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Send form with EmailJS
        emailjs
            .sendForm(
                "service_5eky2x4",
                "template_cb6326a",
                e.target,
                "y1o72__SVj2NlhgzC"
            )
            .then(
                (result) => {
                    if (lang === "es") {
                        toast.success("¡Mensaje enviado con éxito!")
                    } else {
                        toast.success("¡Message sent successfully!")
                    }

                    // Clear form
                    setFormData({
                        name: "",
                        email: "",
                        subject: "",
                        message: "",
                    });
                    e.target.reset();
                },
                (error) => {
                    if (lang === "es") {
                        toast.error("Ha ocurrido un error")
                    } else {
                        toast.error("An error has ocurred.")
                    }
                }
            );
    };

    return (
        <>
            <Element className="cont-contact font-poppins" name="contact">
                <div className="contact-data">
                    <h1 className="txt-white--dark-mode">{ContentTranslations[lang].ContactSection.Information.title}</h1>
                    <h2 className="txt-white-blue-gradient--dark-mode">
                        {ContentTranslations[lang].ContactSection.Information.description}
                    </h2>

                    <h3 className="txt-white--dark-mode">{ContentTranslations[lang].ContactSection.Information.groups[1].label}:</h3>
                    <h4 className="txt-gray--dark-mode">{ContentTranslations[lang].ContactSection.Information.groups[1].value}</h4>
                    
                    <h3 className="txt-white--dark-mode">{ContentTranslations[lang].ContactSection.Information.groups[2].label}:</h3>
                    <h4 className="txt-gray--dark-mode">{ContentTranslations[lang].ContactSection.Information.groups[2].value}</h4>

                    <div className="icons-contact-data">
                        {ContentTranslations[lang].ContactSection.Information.socialMedia.map((item) => (
                            <a href={item.url} target="blank" key={item.id}>
                                {item.icon}
                            </a>
                        ))}
                    </div>
                </div>
                <form name="contact" method="POST" className="send-message" onSubmit={handleSubmit}>
                    <h2 className="txt-white--dark-mode">{ContentTranslations[lang].ContactSection.SendAMessage.title}</h2>

                    {ContentTranslations[lang].ContactSection.SendAMessage.formInputs.map((item) => (
                        <div className="form-group" key={item.id}>
                            <label htmlFor={item.inputName} className="txt-white--dark-mode">{item.label}</label>
                            <input
                                type={item.inputType}
                                value={formData[item.inputName]}
                                className="txt-gray--dark-mode font-poppins"
                                name={item.inputName}
                                id={item.inputName}
                                placeholder={item.inputPlaceholder}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    ))}
                    <div className="form-group">
                        <label htmlFor="subject" className="txt-white--dark-mode">{ContentTranslations[lang].ContactSection.SendAMessage.subjectSelect.label}</label>
                        <select
                            name="subject"
                            id="subject"
                            className="txt-gray--dark-mode font-poppins"
                            required
                            onChange={handleChange}
                        >
                            <option value="" disabled selected>{ContentTranslations[lang].ContactSection.SendAMessage.subjectSelect.disabledOption}</option>
                            {ContentTranslations[lang].ContactSection.SendAMessage.subjectSelect.options.map((optionsItem) => (
                                <option value={optionsItem.content} key={optionsItem.content}>{optionsItem.content}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="message" className="txt-white--dark-mode">{ContentTranslations[lang].ContactSection.SendAMessage.message.label}</label>
                        <textarea
                            name="message"
                            id="message"
                            className="txt-gray--dark-mode font-poppins"
                            placeholder={ContentTranslations[lang].ContactSection.SendAMessage.message.placeholder}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button className="btn-submit font-poppins">
                        {ContentTranslations[lang].ContactSection.SendAMessage.button}
                    </button>
                </form>
            </Element>

            <Toaster position="top-center" richColors />
        </>
    )
}

export default Contact