// Components
import Header from "./components/Header";
import BannerPerson from "./components/BannerPerson";
import Experience from "./components/Experience";
import Services from "./components/Services";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* View components */}
      <Header />

      <main className="page-content">
        <BannerPerson />
        <Experience />
        <Services />
        <Technologies />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
