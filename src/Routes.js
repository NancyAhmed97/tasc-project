import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Modules/Home/Home";
import About from "./Modules/About/About";
import Blog from "./Modules/Blog/Blog";
import Pricing from "./Modules/Price/Pricing";
import Contactus from "./Modules/Contactus/Contactus";
// import Login from "./Modules/Login/Login";
import Meeting from "./Modules/Meeting/Meeting";
// import { Redirect } from "react-router-dom";
// import { useSelector } from "react-redux";

function Routes() {
  // const { authorization } = useSelector((state) => state.authorization);
  // const isAuth = authorization.id ? true : false;
  return (
    <Route
      render={({ location }) => (
        <Switch location={location}>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/aboutus" render={() => <About />} />
          <Route path="/blog" render={() => <Blog />} />
          <Route path="/pricing" render={() => <Pricing />} />
          <Route path="/contactus" render={() => <Contactus />} />
          {/* <Route path="/login" render={() => <Login />} /> */}
          <Route path="/meeting" render={() => <Meeting />} />
        </Switch>
      )}
    />
  );
}

export default Routes;
