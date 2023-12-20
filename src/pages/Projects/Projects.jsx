import react from "react";
import {data} from './components/dataProjects'
// import NavBar from "./components/NavBar";
import "./stylesProjects/project.css";
import Card from "./components/card/card";


function Projects() {

  const projects = data.map((project, index)=>
    <Card key={project.id*index} {...project}/>
  )
  
  return (
    <div className="containerCard bg-light-dark">
    <h1>Estos son algunos de mis proyectos</h1>
   
     <div className="contenedor">
     {projects}
     </div>
    </div>
  );
}

export default Projects
