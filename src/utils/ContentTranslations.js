// Services Icons
import Service1 from "../assets/img/Service1.webp";
import Service2 from "../assets/img/Service2.webp";
import Service3 from "../assets/img/Service3.webp";
import Service4 from "../assets/img/Service4.webp";
import Service5 from "../assets/img/Service5.webp";
import Service6 from "../assets/img/Service6.webp";

// Projects
    // Images
    import EasyFinanceImg from "../assets/img/easy-finance.webp";
    import ExpedienteGaravitoImg from "../assets/img/expediente-garavito.webp";
    import AutosirisImg from "../assets/img/autosiris-prototype.webp";

    // Icons
    import HTMLIcon from "../assets/img/HTML.webp";
    import CSSIcon from "../assets/img/CSS.webp";
    import JavascriptIcon from "../assets/img/Javascript.webp";
    import TypescriptIcon from "../assets/img/Typescript.webp";
    import ReactIcon from "../assets/img/React.webp";
    import SassIcon from "../assets/img/SASS.webp";
    import NodeJsIcon from "../assets/img/NodeJs.webp";

// Social media icons
import { IoLogoGithub } from 'react-icons/io';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';

// CV Files
import CVEnglish from "../assets/docs/CV - Elián Ibarra (English).pdf";
import CVSpanish from "../assets/docs/CV - Elián Ibarra (Spanish).pdf";

export const ContentTranslations = {
    en: {
        NavMenu: {
            1: "Home",
            2: "Experience",
            3: "Services",
            4: "Projects",
            5: "Contact",
            lang: "Change language",
            github: "Repositories",
        },
        BannerPerson: {
            role: "Full-Stack Web Developer",
            description: "I turn ideas into clear, efficient, and user-friendly web applications.",
            btnText: "Download CV",
            CVFile: CVEnglish,
        },
        ExperienceSection: {
            title: "Experience",
            company: "BPM Consulting SAS",
            role: "Front-End Web Developer",
            time: "October 2023 - April 2024",
            functionsPerformed: {
                title: "Functions Performed",
                1: "Development of responsive interfaces for different devices.",
                2: "Efficient implementation and management of dynamic and validated forms.",
                3: "Creation of user interfaces using Bootstrap components.",
            }
        },
        ServicesSection: {
            title: "My Services",
            items: [
                {
                    id: 1,
                    icon: Service1,
                    title: "Responsive Web Page Design and Development",
                    description: "Design and development of websites that adapt perfectly to any device (mobile, tablet, or computer), ensuring an attractive and functional user experience.",
                },
                {
                    id: 2,
                    icon: Service2,
                    title: "Web Solutions for Startups and SMEs",
                    description: "Development of websites and applications tailored to the needs and budgets of small businesses and startups looking to grow in the digital environment.",
                },
                {
                    id: 3,
                    icon: Service3,
                    title: "Custom Website Development",
                    description: "Transformation of ideas and designs into customized websites, optimized for speed, and aligned with the objectives of your business or project.",
                },
                {
                    id: 4,
                    icon: Service4,
                    title: "Development Interactive Web Applications",
                    description: "Development of dynamic web applications with interactive elements that provide users with a fluid and efficient experience.",
                },
                {
                    id: 5,
                    icon: Service5,
                    title: "Data Management and Administration Systems",
                    description: "Management of tools that facilitate the storage, consultation and administration of data for your business or project, optimizing your internal processes.",
                },
                {
                    id: 6,
                    icon: Service6,
                    title: "Development and Integration of Web APIs",
                    description: "Creation of services that allow different parts of your application to communicate and work in an integrated manner, facilitating the secure transfer of data.",
                },
            ],
        },
        TechnologiesSection: {
            title: "Technologies & Languages"
        },
        ProjectsSection: {
            title: "Projects",
            items: [
                {
                    id: 1,
                    img: EasyFinanceImg,
                    name: "Easy Finance",
                    url: "https://easyfinance.fun/",
                    urlRepo: "https://github.com/FazeElian/thesis_pj-easy_finance",
                    description: "Educational website that teaches finance to children through interactive games.",
                    technologies: [
                        {
                            id: 1,
                            icon: HTMLIcon,
                        },
                        {
                            id: 2,
                            icon: SassIcon,
                        },
                        {
                            id: 3,
                            icon: JavascriptIcon,
                        },
                        {
                            id: 4,
                            icon: ReactIcon
                        }
                    ]
                },
                {
                    id: 2,
                    img: ExpedienteGaravitoImg,
                    name: "Expediente Garavito",
                    url: "https://expediente-garavito.netlify.app/",
                    urlRepo: "https://github.com/FazeElian/expediente-garavito-tnt",
                    description: "Transmedia project with paranormal events at the Colombian School of Engineering.",
                    technologies: [
                        {
                            id: 1,
                            icon: HTMLIcon,
                        },
                        {
                            id: 2,
                            icon: CSSIcon,
                        },
                        {
                            id: 3,
                            icon: TypescriptIcon,
                        },
                        {
                            id: 4,
                            icon: ReactIcon
                        },
                        {
                            id: 5,
                            icon: NodeJsIcon
                        }
                    ]
                },
                {
                    id: 3,
                    img: AutosirisImg,
                    name: "AutOsiris",
                    url: "https://autosiris-prototype.netlify.app/#/admin/home",
                    urlRepo: "https://github.com/FazeElian/TPS_FDS-2671339-AutOsiris-SIW7/tree/react-main",
                    description: "Non-functional prototype of an app for managing sales, inventory, and products for a business.",
                    technologies: [
                        {
                            id: 1,
                            icon: HTMLIcon,
                        },
                        {
                            id: 2,
                            icon: CSSIcon,
                        },
                        {
                            id: 3,
                            icon: JavascriptIcon,
                        },
                        {
                            id: 4,
                            icon: ReactIcon
                        },
                    ]
                },
            ],
        },
        ContactSection: {
            Information: {
                title: "Contact Information",
                description: "Please feel free to contact me at any time. I will reply you as soon as possible!",
                groups: {
                    1: {
                        id: 1,
                        label: "Email",
                        value: "elianibarra77@gmail.com"
                    },
                    2: {
                        id: 2,
                        label: "Phone Number",
                        value: "+57 3203139618"
                    },
                },
                socialMedia: [
                    {
                        id: 1,
                        url: "https://github.com/FazeElian",
                        icon: <IoLogoGithub color="#BFBFBF" />
                    },
                    {
                        id: 2,
                        url: "https://www.linkedin.com/in/eli%C3%A1n-eduardo-ibarra-contreras-03b649268/",
                        icon: <FaLinkedin color="#BFBFBF" />
                    },
                    {
                        id: 3,
                        url: "https://www.instagram.com/dev.fazeelian/",
                        icon: <FaInstagram color="#BFBFBF" />
                    },
                    {
                        id: 4,
                        url: "https://x.com/Dev_Fazeelian",
                        icon: <RiTwitterXFill color="#BFBFBF" />
                    },
                ],
            },
            SendAMessage: {
                title: "Send a Message",
                formInputs: [
                    {
                        id: 1,
                        label: "Name",
                        inputName: "name",
                        inputType: "text",
                        inputPlaceholder: "Full name"
                    },
                    {
                        id: 2,
                        label: "Email",
                        inputName: "email",
                        inputType: "email",
                        inputPlaceholder: "example@email.com"
                    },
                ],
                subjectSelect: {
                    label: "Subject",
                    disabledOption: "Reason for contact",
                    options: [
                        {
                            id: 1,
                            value: "job-opportunity",
                            content: "Job opportunity",
                        },
                        {
                            id: 2,
                            value: "service-inquiry",
                            content: "Service inquiry",
                        },
                        {
                            id: 3,
                            value: "freelance-colab",
                            content: "Freelance collaboration request",
                        },
                        {
                            id: 4,
                            value: "consulting",
                            content: "Consulting or advising",
                        },
                    ],
                },
                message: {
                    label: "Message",
                    placeholder: "Leave your message here",
                },
                button: "Send Message"
            },
        },
        Footer: "Project designed and developed by", 
    },
    es: {
        NavMenu: {
            1: "Inicio",
            2: "Experiencia",
            3: "Servicios",
            4: "Proyectos",
            5: "Contacto",
            lang: "Cambiar idioma",
            github: "Repositorios",
        },
        BannerPerson: {
            role: "Desarrollador Web Full-Stack",
            description: "Transformo ideas en aplicaciones web claras, eficientes y fáciles de usar.",
            btnText: "Descargar CV",
            CVFile: CVSpanish,
        },
        ExperienceSection: {
            title: "Experiencia",
            company: "BPM Consulting SAS",
            role: "Desarrollador Web Front-End",
            time: "Octubre 2023 - Abril 2024",
            functionsPerformed: {
                title: "Funciones Desempeñadas",
                1: "Desarrollo de interfaces responsivas para diferentes dispositivos.",
                2: "Implementación y gestión eficiente de formularios dinámicos y validados.",
                3: "Creación de interfaces de usuario utilizando componentes Bootstrap.",
            }
        },
        ServicesSection: {
            title: "Mis Servicios",
            items: [
                {
                    id: 1,
                    icon: Service1,
                    title: "Diseño y Desarrollo de Páginas Web Responsive",
                    description: "Diseño y desarrollo de sitios web que se adaptan perfectamente a cualquier dispositivo (móvil, tablet, o computadora), asegurando una experiencia de usuario atractiva y funcional.",
                },
                {
                    id: 2,
                    icon: Service2,
                    title: "Soluciones Web para Startups y PyMEs",
                    description: "Desarrollo de sitios web y aplicaciones a la medida de las necesidades y presupuestos de pequeñas empresas y startups que buscan crecer en el entorno digital.",
                },
                {
                    id: 3,
                    icon: Service3,
                    title: "Desarrollos de Sitios Web a Medida",
                    description: "Transformación de ideas y diseños en sitios web personalizados, optimizados para la velocidad, y alineados con los objetivos de tu negocio o proyecto.",
                },
                {
                    id: 4,
                    icon: Service4,
                    title: "Desarrollo de Aplicaciones Web Interactivas",
                    description: "Desarrollo de aplicaciones web dinámicas con elementos interactivos que brindan a los usuarios una experiencia fluida y eficiente.",
                },
                {
                    id: 5,
                    icon: Service5,
                    title: "Sistemas de Gestión y Administración de Datos",
                    description: "Gestión de herramientas que facilitan el almacenamiento, consulta y administración de datos para su negocio o proyecto, optimizando sus procesos internos.",
                },
                {
                    id: 6,
                    icon: Service6,
                    title: "Desarrollo e Integración de APIs Web",
                    description: "Creación de servicios que permiten que distintas partes de su aplicación se comuniquen y trabajen de manera integrada, facilitando la transferencia segura de datos.",
                },
            ],
        },
        TechnologiesSection: {
            title: "Tecnologías y Lenguajes"
        },
        ProjectsSection: {
            title: "Proyectos",
            items: [
                {
                    id: 1,
                    img: EasyFinanceImg,
                    name: "Easy Finance",
                    url: "https://easyfinance.fun/",
                    urlRepo: "https://github.com/FazeElian/thesis_pj-easy_finance",
                    description: "Sitio web educativo que enseña finanzas a niños mediante juegos interactivos.",
                    technologies: [
                        {
                            id: 1,
                            icon: HTMLIcon,
                        },
                        {
                            id: 2,
                            icon: SassIcon,
                        },
                        {
                            id: 3,
                            icon: JavascriptIcon,
                        },
                        {
                            id: 4,
                            icon: ReactIcon
                        }
                    ]
                },
                {
                    id: 2,
                    img: ExpedienteGaravitoImg,
                    name: "Expediente Garavito",
                    url: "https://expediente-garavito.netlify.app/",
                    urlRepo: "https://github.com/FazeElian/expediente-garavito-tnt",
                    description: "Proyecto transmedia con eventos paranormales en la Escuela Colombiana de Ingeniería.",
                    technologies: [
                        {
                            id: 1,
                            icon: HTMLIcon,
                        },
                        {
                            id: 2,
                            icon: CSSIcon,
                        },
                        {
                            id: 3,
                            icon: TypescriptIcon,
                        },
                        {
                            id: 4,
                            icon: ReactIcon
                        },
                        {
                            id: 5,
                            icon: NodeJsIcon
                        }
                    ]
                },
                {
                    id: 3,
                    img: AutosirisImg,
                    name: "AutOsiris",
                    url: "https://autosiris-prototype.netlify.app/#/admin/home",
                    urlRepo: "https://github.com/FazeElian/TPS_FDS-2671339-AutOsiris-SIW7/tree/react-main",
                    description: "Prototipo no funcional de app para gestionar ventas, inventario y productos de un negocio.",
                    technologies: [
                        {
                            id: 1,
                            icon: HTMLIcon,
                        },
                        {
                            id: 2,
                            icon: CSSIcon,
                        },
                        {
                            id: 3,
                            icon: JavascriptIcon,
                        },
                        {
                            id: 4,
                            icon: ReactIcon
                        },
                    ]
                },
            ],
        },
        ContactSection: {
            Information: {
                title: "Información de Contacto",
                description: "No dudes en contactarme en cualquier momento. ¡Te responderé lo antes posible!",
                groups: {
                    1: {
                        id: 1,
                        label: "Correo Electrónico",
                        value: "elianibarra77@gmail.com"
                    },
                    2: {
                        id: 2,
                        label: "Número de Teléfono",
                        value: "+57 3203139618"
                    },
                },
                socialMedia: [
                    {
                        id: 1,
                        url: "https://github.com/FazeElian",
                        icon: <IoLogoGithub color="#BFBFBF" />
                    },
                    {
                        id: 2,
                        url: "https://www.linkedin.com/in/eli%C3%A1n-eduardo-ibarra-contreras-03b649268/",
                        icon: <FaLinkedin color="#BFBFBF" />
                    },
                    {
                        id: 3,
                        url: "https://www.instagram.com/dev.fazeelian/",
                        icon: <FaInstagram color="#BFBFBF" />
                    },
                    {
                        id: 4,
                        url: "https://x.com/Dev_Fazeelian",
                        icon: <RiTwitterXFill color="#BFBFBF" />
                    },
                ],
            },
            SendAMessage: {
                title: "Enviar un Mensaje",
                formInputs: [
                    {
                        id: 1,
                        label: "Nombre",
                        inputName: "name",
                        inputType: "text",
                        inputPlaceholder: "Nombre completo"
                    },
                    {
                        id: 2,
                        label: "Correo Electrónico",
                        inputName: "email",
                        inputType: "email",
                        inputPlaceholder: "ejemplo@email.com"
                    },
                ],
                subjectSelect: {
                    label: "Asunto",
                    disabledOption: "Motivo de contacto",
                    options: [
                        {
                            id: 1,
                            value: "job-opportunity",
                            content: "Oportunidad de trabajo",
                        },
                        {
                            id: 2,
                            value: "service-inquiry",
                            content: "Consulta sobre servicios",
                        },
                        {
                            id: 3,
                            value: "freelance-colab",
                            content: "Solicitud de colaboración freelance",
                        },
                        {
                            id: 4,
                            value: "consulting",
                            content: "Consultoría o asesoría",
                        },
                    ],
                },
                message: {
                    label: "Mensaje",
                    placeholder: "Deja tu mensaje aquí",
                },
                button: "Enviar Mensaje"
            },
        },
        Footer: "Proyecto diseñado y desarrollado por",  
    },
};