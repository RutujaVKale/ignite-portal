// import React, { useState } from "react";
// import MentorSchedule from "../Components/Mentor/MentorSchedule";

// const Home = () => {
//   return (
//     <div style={{ backgroundColor: "rgb(247, 242, 242)" }}>
//       <MentorSchedule />
//     </div>
//   );
// };

// export default Home;
import {
  Redirect,
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NavMenu from "../NavMenu";
import About from "./About";
import Schedule from "./Schedule";
import NewsLetter from "./NewsLetter";

const Home = ({ authorized }) => {
  if (!authorized) {
    return <Redirect to="/login" />;
  }
  return (
    <div>
      <Router>
        <NavMenu />
        <Switch>
          <Route path="/about">
            <About />
          </Route>

          <Route path="/Schedule">
            <Schedule />
          </Route>

          <Route path="/contact">
            <NewsLetter />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Home;
