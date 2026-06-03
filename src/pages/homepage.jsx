import { Link } from "react-router-dom";
import SkillBadge from "../components/SkillBadge";

export default function HomePage({ tema, toggleTema }) {
 
  const nombre = "Tomas Hernan Baldironi";
  const titulo = "Analista de Sistemas y Tecnico Mecanico";
  const skills = ["React,", "JavaScript,", "Git,", "UML,", "Redes,", "Relevamiento de datos y","Documentación."];

  return (
    <section className={`container ${tema === "dark" ? "bg-dark text-light" : "bg-light"}`}>
      
      <h1 className="h1">{nombre}</h1>
      
      <p className="p">{titulo}</p>
      
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <SkillBadge key={index} skill={skill} />
        ))}
      </div>

     
      <Link  className="btn-primaryHP" to="/contact" >
        Ir a Contacto
      </Link>
      
      
    </section>
    
  
  );

 

}

