import logo from "./logo.svg";
import "./assets/css/style.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Project from "./pages/Project";
import CreateProject from "./pages/CreateProject";
function App() {
  // здесь будет react router dom
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project/:id" element={<Project />} />
      <Route path="/createproject" element={<CreateProject />} />
    </Routes>
  );
}

export default App;
