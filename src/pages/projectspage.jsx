import { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import data from "../data/proyectos.json";


export default function ProjectsPage({ tema }) {
  const [proyectos, setProyectos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setProyectos(data);
      setCargando(false);
    } catch (err) {
      setError("Error al cargar proyectos");
      setCargando(false);
    }
  }, []);

  if (cargando) return <p>Cargando proyectos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className={`container ${tema === "dark" ? "bg-dark text-light" : "bg-light"}`}>
      <h2>Proyectos</h2>
      <div className="projects-card">
        {proyectos.map((p) => (
          <ProjectCard key={p.id} proyecto={p} />
        ))}
      </div>
    </section>
  );
}
