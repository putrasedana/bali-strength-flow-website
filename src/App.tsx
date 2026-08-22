import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import MembershipsPage from "./pages/MembershipsPage";
import ClassesPage from "./pages/ClassesPage";
import TrainingPage from "./pages/TrainingPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <div className="min-h-screen bg-charcoal">
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/memberships" element={<MembershipsPage />} />
          <Route path="/classes" element={<ClassesPage />} />
          <Route path="/training" element={<TrainingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
