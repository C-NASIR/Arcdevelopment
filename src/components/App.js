import React, { useState } from "react";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import LandingPage from "./landingpage/LandingPage";
import { ThemeProvider } from "@material-ui/styles";
import theme from "../components/ui/Theme";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <LandingPage
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            exact
            path="/services"
            component={() => <div> Services </div>}
          />
          <Route
            exact
            path="/customsoftware"
            component={() => <div> Custom Software </div>}
          />
          <Route
            exact
            path="/mobileapps"
            component={() => <div> Android/IOS App Development </div>}
          />
          <Route
            exact
            path="/websites"
            component={() => <div> Websites </div>}
          />
          <Route
            exact
            path="/revolution"
            component={() => <div> The Revolution </div>}
          />
          <Route exact path="/about" component={() => <div> About us </div>} />
          <Route
            exact
            path="/contact"
            component={() => <div> Contact Us </div>}
          />
          <Route
            exact
            path="/estimate"
            component={() => <div> Estimate </div>}
          />
        </Switch>
        <Footer
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      </Router>
    </ThemeProvider>
  );
}

//this is something random staff
export default App;
