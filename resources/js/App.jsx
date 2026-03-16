import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './include/Header';
import Footer from './include/Footer';
import Accueil from './pages/Accueil/Accueil';
import Contact from './pages/Contact/Contact';
import CurriculumVitae from './pages/Cv/CurriculumVitae';
import Projects from './pages/Projects/Projects';
import ProjectGallery from './pages/Projects/ProjectGallery';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col">
        <Header />

        <main className="flex-1 pt-24 pb-12">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <Routes>
              <Route path="/" element={<Accueil />} />
              <Route path="/cv" element={<CurriculumVitae />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectGallery />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;