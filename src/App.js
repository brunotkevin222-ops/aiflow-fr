import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicSite from "./pages/PublicSite";
import Playbook from "./pages/Playbook";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicSite />} />
        <Route path="/playbook/*" element={<Playbook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
