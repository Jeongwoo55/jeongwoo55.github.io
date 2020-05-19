import React from "react";
import "./App.css";
import Landing from "./components/landing/landing.js";
import Navigation from "./components/navigation/navigation.js";
import About from "./components/about/about.js";
import Contacts from "./components/contacts/contacts.js";

function App() {
  return (
    // <div className="App">
    //   <Navigation />
    //   <Landing id="home"/>
    //   <About id="about" />
    //   <Contacts id="contacts"/>
    // </div>
    <div className="App">
      <Navigation />
      <Landing id="home"/>
      <About id="about" />
      <Contacts id="contacts"/>
    </div>
  );
}

export default App;
