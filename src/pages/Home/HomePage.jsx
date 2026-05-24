import { useEffect } from "react";
import "./HomePage.scss";
import AboutSection from "./Sections/AboutSection/AboutSection";
import CollaborationSection from "./Sections/CollaborationSection/CollaborationSection";
import DepartmantSection from "./Sections/DepartmantSection/DepartmantSection";
import LandingPage from "./Sections/LandingPage/LandingPage";
import SummarySection from "./Sections/SummarySection/SummarySection";
import TeamSection from "./Sections/TeamSection/TeamSection";
import setPageTitle from "../../hooks/setPageTitle";

function HomePage() {
  setPageTitle("AYBÜ BİLTEK");

  return (
    <>
      <LandingPage />
      <AboutSection />
      <TeamSection />
      <DepartmantSection />
      <SummarySection />
      <CollaborationSection />
    </>
  );
}

export default HomePage;