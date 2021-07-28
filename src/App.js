import "./App.css";
import Login from "./Components/Pages/Login";
import GoogleAuthentication from "./Components/GoogleAuthentication";
import Home from "./Components/Pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      {/* <GoogleAuthentication /> */}
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" component={() => <Home authorized={true} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
