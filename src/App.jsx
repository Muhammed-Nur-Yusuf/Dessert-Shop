import { HashRouter, Routes, Route } from "react-router-dom";
import Dessertsbage from "./Dessertsbage.jsx";
import Yourcart from "./yourcart.jsx";
import './style.css';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Dessertsbage />} />
        <Route path="/yourcart" element={<Yourcart />} />
      </Routes>
    </HashRouter>
  );
}

export default App;



