import react from "react";
import {data} from './components/dataProjects'
// import NavBar from "./components/NavBar";
import "./stylesProjects/project.css";
import Card from "./components/card/card";


function Projects() {

  const projects = data.map((project)=>
    <Card key={project.id} {...project}/>
  )
  
  return (
    <div className="containerCard bg-light-dark">
     {projects}
    </div>
  );
}

export default Projects
