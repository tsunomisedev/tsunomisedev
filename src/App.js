import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import HomeScreen from "./screen/HomeScreen";
import NavBar from "./components/Header";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <div>
          <Switch>
            <Route path="/" exact={true}>
              <SignIn />
            </Route>
            {/* <Route path="/home">
              <HomeScreen />
            </Route> */}
            {/* {User === false ? (
              <Route path="/login">
                <login />
              </Route>
            ) : (
              <Route path="/about" exact={true}>
                <About />
              </Route>
            )} */}

            <Route path="/home">
              <HomeScreen />
            </Route>
          </Switch>
        </div>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
