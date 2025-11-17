import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './include/Header';
import Footer from './include/Footer';
import Accueil from './components/Accueil/Accueil';
import Contact from './components/Contact/Contact';
import CurriculumVitae from './components/Cv/CurriculumVitae';
import Projects from './components/Projects/Projects';
import ProjectGallery  from './components/Projects/ProjectGallery';

function App() {
  return (
    <Router>
      <Header />
      <main className="p-4 mt-15 mb-15">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/Cv" element={<CurriculumVitae />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectGallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
