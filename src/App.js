// Components
import Header from "./components/Header";
import BannerPerson from "./components/BannerPerson";
import Experience from "./components/Experience";
import Services from "./components/Services";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";

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
      </main>
    </>
  );
}

export default App;
