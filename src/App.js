// Components
import Header from "./components/Header";
import BannerPerson from "./components/BannerPerson";

function App() {
  return (
    <>
      {/* View components */}
      <Header />

      <main className="page-content">
        <BannerPerson />
      </main>
    </>
  );
}

export default App;
