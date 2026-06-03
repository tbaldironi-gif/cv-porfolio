

export default function projectcard({ proyecto }) {
  return (
    <div className="project-card">
      <img src={proyecto.imagen} alt={proyecto.nombre} className="project-img" />
      <h3>{proyecto.nombre}</h3>
      <p>{proyecto.descripcion}</p>
      <div className="project-tech">
        {proyecto.tecnologias.map((tech, index) => (
          <span key={index} className="tech-badge">{tech}</span>
        ))}
      </div>
      <a href={proyecto.link} target="_blank" rel="noopener noreferrer" className="btn-primary">
        Ver proyecto
      </a>
    </div>
  )
}
