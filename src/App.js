import React from "react";
import "./App.css";
import "./css/slick.css";
import "./css/slick-theme.css";
import Similar from "./components/similar";
import Social from "./components/social";
import Before from "./components/before";
import After from "./components/after";
import Footer from "./components/footer";

function App() {
  return (
    <React.Fragment>
      <Before />
      <Social />
      <After />
      <Similar />
      <Footer />
    </React.Fragment>
  );
}

export default App;
