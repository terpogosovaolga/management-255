import logo from "./logo.svg";
import "./assets/css/style.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Project from "./pages/Project";
function App() {
  // здесь будет react router dom
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project/:id" element={<Project />} />
    </Routes>
  );
}

export default App;
