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
      <nav>
        <NavBar></NavBar>
      </nav>

      <main className="bg-light-blue">
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/MySkills" Component={MySkills} />
          <Route path="/Contact" Component={Contact} />
          <Route path="/Projects" Component={Projects} />
        </Routes>
      </main>
    </>
  );
}
      


export default App;
