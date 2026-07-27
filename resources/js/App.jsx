import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Accueil from "./pages/Accueil";
import Contact from "./pages/Contact";
import CurriculumVitae from "./pages/CurriculumVitae";
import ProjectGallery from "./pages/ProjectGallery";
import Projects from "./pages/Projects";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50">
        <Header />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/cv" element={<CurriculumVitae />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectGallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
