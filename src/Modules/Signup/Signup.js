import React, { useEffect, useState } from "react";
import Navbar from "../Common/Navbar/Navbar";
import CompanySignup from "./Components/CompanySignup/CompanySignup";
import UserSignup from "./Components/userSignup/UserSignup";
import "./Signup.css";
function Signup() {
  const [signupState, setSignupState] = useState("");
  useEffect(() => {
    if (localStorage.getItem("signupState") === "CompanySignup") {
      setSignupState("CompanySignup");
    }
  }, []);
  return (
    <div className="signup">
      <Navbar activePage="login" />
      {signupState === "CompanySignup" ? <UserSignup /> : <CompanySignup />}
      {/* {localStorage.getItem("signupState") === "CompanySignup" ||
      localStorage.getItem("signupState") !== "UserSignupContainer" ? (
        <UserSignup />
      ) : (
        <CompanySignup />
      )} */}
    </div>
  );
}

export default Signup;
