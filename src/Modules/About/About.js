import React from "react";
import Footer from "../Common/Footer/Footer";
import TascCompanyInformation from "../Home/Components/TascCompanyInformation/TascCompanyInformation";
import LandingSection from "../../Modules/Common/LandingPage/LandingSection";
import Navbar from "../Common/Navbar/Navbar";
import AdvancedFeatures from "./Components/ADVANCEDFEATURES/AdvancedFeatures";
import TascActivity from "./Components/TascActivity/TascActivity";
import { useSelector } from "react-redux";
function Home() {
  const { currentLocal } = useSelector((state) => state.currentLocal);
  
  return (
    <div>
      <Navbar activePage={currentLocal.navbar.aboutus} />
      <LandingSection activePage="About us" />
      <TascCompanyInformation state={"about"}/>
      <TascActivity />
      <AdvancedFeatures />
      <Footer activeState="about" />
    </div>
  );
}

export default Home;
