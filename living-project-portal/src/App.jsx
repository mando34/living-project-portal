import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Sprint1 from "./pages/Sprint1";
import Sprint2 from "./pages/Sprint2";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/sprint-1" element={<Sprint1 />} />
          <Route path="/sprint-2" element={<Sprint2 />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* <Footer /> */}
    </div>
  );
}

export default App;