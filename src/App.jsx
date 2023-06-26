import Home from "./pages/Home";
import Weather from "./pages/weather";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Weatherdata from "./pages/Weatherdata";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weatherdata" element={<Weatherdata />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
