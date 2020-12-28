import React from "react";
import Header from "./Header";
import Banner from "./Banner";
import Middlesection from "./Middlesection";
import LivingSection from "./LivingSection";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Banner />
        <Middlesection />
        <LivingSection />
      </React.Fragment>
    );
  }
}

export default App;
