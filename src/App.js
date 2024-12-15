// Components
import Header from "./components/Header";
import BannerPerson from "./components/BannerPerson";
import Experience from "./components/Experience";

function App() {
  return (
    <>
      {/* View components */}
      <Header />

      <main className="page-content">
        <BannerPerson />
        <Experience />
      </main>
    </>
  );
}

export default App;
