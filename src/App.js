import { useSelector } from "react-redux";
import Header from "./components/Header";
import CountryDetails from "./components/CountryDetails";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  const dark = useSelector((state) => state.mode.dark);

  return (
    <div
      className={`min-w-screen min-h-screen ${
        dark
          ? "text-darkModeTextLightElements bg-darkBg"
          : "text-lightModeText bg-lightBg"
      }`}
    >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country-details/:name" element={<CountryDetails />} />
      </Routes>
    </div>
  );
}

export default App;
