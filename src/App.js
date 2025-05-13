// Components
import Header from "./components/Header";
import BannerPerson from "./components/BannerPerson";
import Experience from "./components/Experience";
import Services from "./components/Services";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Language context provider
import { LanguageProvider } from "./LanguageContext";

function App() {
  return (
    <>
      <LanguageProvider>
        {/* View components */}
        <Header />

        <main className="page-content">
          <BannerPerson />
          <Experience />
          <Services />
          <Technologies />
          <Projects />
          <br/>
          <br/>
          <Contact />
          <Footer />
        </main>
      </LanguageProvider>
    </>
  );
}

export default App;
