import { useState } from "react";
import { Header } from "./Components/Header/Header";
import "./App.css";

function App() {
  return (
    <>
      <div className="nav-container">
        <a className="logo">PS Patt</a>
        <Header />
      </div>
      <div className="banner">
        <h2>Hello, I am a developer!</h2>
        <button>More</button>
      </div>
      <section id="about">
        <h3>About Me</h3>
      </section>
      <section id="proj">
        <h3>My Projects</h3>
      </section>
      <section id="hobby">
        <h3>My Other Interests</h3>
      </section>
    </>
  );
}

export default App;
