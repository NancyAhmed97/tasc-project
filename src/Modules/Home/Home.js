import React from "react";
import Footer from "../Common/Footer/Footer";
import LandingPage from "../Home/Components/LandingPage/LandingPage";
import AccountingManager from "./Components/AccountingManager/AccountingManager";
import GeneralManager from "./Components/GeneralManager/GeneralManager";
import ITManager from "./Components/ITManager/ITManager";
import LatestPosts from "./Components/LatestPosts/LatestPosts";
import TascCompanyInformation from "./Components/TascCompanyInformation/TascCompanyInformation";
function Home() {
  return (
    <div>
      <LandingPage />
      <TascCompanyInformation />
      <GeneralManager />
      <AccountingManager />
      <ITManager />
      <h2 className="text-center mb-5" style={{fontSize:"30px",fontWeight:"bold",fontFamily:"Gotham"}}>Latest Posts</h2>
      <LatestPosts />
      <Footer activeState="home" />
    </div>
  );
}

export default Home;
