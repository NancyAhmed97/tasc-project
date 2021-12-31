import React, { useEffect, useState } from "react";
import Navbar from "../Common/Navbar/Navbar";
import CompanySignup from "./Components/CompanySignup/CompanySignup";
// import UserSignup from "./Components/userSignup/UserSignup";
import "./Signup.css";
function Signup() {
  const [signupState, setSignupState] = useState("CompanySignup");
  useEffect(() => {
    if (localStorage.getItem("signupState") === "CompanySignup") {
      setSignupState("CompanySignup");
    }
  }, []);
  console.log(signupState);
  return (
    <div className="signup">
      <Navbar activePage="login" />
      <CompanySignup />
      {/* {signupState === "CompanySignup" ? <UserSignup /> : <CompanySignup />} */}
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
