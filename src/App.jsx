import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Navbar from './components/Navbar/Navbar';
import AboutUs from './pages/AboutUs/AboutUs';
import BoardMembers from './pages/BoardMembers/BoardMembers';
import Collaborations from './pages/Collaborations/Collaborations';
import HomePage from "./pages/Home/HomePage";
import Footer from "./components/Footer/Footer";
import TeamPage from "./pages/TeamPage/TeamPage";
import ScrollToTop from "./components/ScrollToTop";
// import Announcements from "./pages/Announcements/Announcements";
// import Articles from "./pages/Articles/Articles";
// import TextPage from "./pages/TextPage/TextPage";
import Gallery from "./pages/Gallery/Gallery";

function AppContent() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hakkimizda" element={<AboutUs />} />
        <Route path="/Hakkımızda" element={<AboutUs />} />
        <Route path="/ekibimiz" element={<BoardMembers />} />
        <Route path="/Ekibimiz" element={<BoardMembers />} />
        <Route path="/isbirliklerimiz" element={<Collaborations />} />
        <Route path="/İşbirliklerimiz" element={<Collaborations />} />
        <Route path="/takim/:teamName" element={<TeamPage key={location.pathname} />} />
        <Route path="/Takım/:teamName" element={<TeamPage key={location.pathname} />} />
        <Route path="/Takim/:teamName" element={<TeamPage key={location.pathname} />} />
        <Route path="/galeri" element={<Gallery />} />
        <Route path="/Galeri" element={<Gallery />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
