import react from "react";
import "./App.css";

import NavBar from "./components/NavBar";

import Projects from "./pages/Projects/Projects";
import HomePage from "./pages/Home/HomePage.jsx"
import MySkills from "./pages/MySkills/MySkills.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import { Route, Routes } from "react-router-dom";



function App() {
  return (
    <>
      <header>
        <nav>
          <NavBar></NavBar>
        </nav>
      </header>
      <main className="bg-light-blue">
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/my-skills" Component={MySkills} />
          <Route path="/contact" Component={Contact} />
          <Route path="/projects" Component={Projects} />
        </Routes>
      </main>
    </>
  );
}
      


export default App;
