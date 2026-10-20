import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Sprint1 from "./pages/Sprint1";
import Sprint2 from "./pages/Sprint2";
import Sprint3 from "./pages/Sprint3";
import NotFound from "./pages/NotFound";
import ProjectCharter from "./pages/sprint1/ProjectCharter";
import BusinessStrategy from "./pages/sprint1/BusinessStrategy";
import MarketResearch from "./pages/sprint1/MarketResearch";
import ProjectEstimationStarter from "./pages/sprint2/ProjectEstimationStarter";
import EstimationDetails from "./pages/sprint2/EstimationDetails";
import OnePageBudget from "./pages/sprint2/OnePageBudget";
import ChangeNote from "./pages/sprint3/ChangeNote";
import EvidenceLog from "./pages/sprint3/EvidenceLog";
import CandidateRiskEntries from "./pages/sprint3/CanidateRiskEntries";


function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/sprint-1" element={<Sprint1 />} />
          <Route path="/sprint-1/project-charter" element={<ProjectCharter />}/>
          <Route path="/sprint-1/business-strategy" element={<BusinessStrategy />}/>
          <Route path="/sprint-1/market-research" element={<MarketResearch />}/>

          <Route path="/sprint-2" element={<Sprint2 />} />
          <Route path="/sprint-2/project-estimation-starter" element={<ProjectEstimationStarter />}/>
          <Route path="/sprint-2/estimation-details" element={<EstimationDetails />}/>
          <Route path="/sprint-2/one-page-budget" element={<OnePageBudget />}/>
          
          <Route path="/sprint-3" element={<Sprint3 />} />
          <Route path="/sprint-3/change-note" element={<ChangeNote />}/>
          <Route path="/sprint-3/evidence-log" element={<EvidenceLog />}/>
          <Route path="/sprint-3/candidate-risk-entries" element={<CandidateRiskEntries />}/>

          <Route path="*" element={<NotFound />} />
          
        </Routes>
      </main>

      {/* <Footer /> */}
    </div>
  );
}

export default App;