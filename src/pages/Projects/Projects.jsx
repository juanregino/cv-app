import react from "react";
import {data} from './components/dataProjects'
// import NavBar from "./components/NavBar";
import "./stylesProjects/project.css";
import Card from "./components/card";


function Projects() {

  const projects = data.map((product)=>
    <Card key={product.id} {...product}/>
  )
  console.log(projects)
  return (
    <div className="container container-center-element bg-light-dark">
     <div>{projects}</div>
    </div>
  );
}

export default Projects;
