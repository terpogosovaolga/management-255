import logo from "./logo.svg";
import "./assets/css/style.css";
import "./assets/css/news.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Project from "./pages/Project";
import CreateProject from "./pages/CreateProject";
import AdminPanel from "./pages/AdminPanel";
function App() {
  // здесь будет react router dom
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project/:id" element={<Project />} />
      <Route path="/createproject" element={<CreateProject />} />
      <Route path="/admin" element={<AdminPanel />} />
      <Route path="/admin/*" element={<AdminPanel />} />
    </Routes>
  );
}

export default App;
