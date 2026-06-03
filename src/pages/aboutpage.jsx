import SkillBadge from "../components/SkillBadge";


export default function AboutPage({ tema }) {
  const experiencia = ["Trabajos Prácticos Facultativos"];
  const educacion = ["Universidad Cervantes", "Ipem y T Nº 352"];
  const habilidades = ["React,", "JavaScript,", "Git,", "UML,", "Redes,", "Relevamiento de datos y", "Documentación"];

  const descripcion =
    "Soy estudiante de Analista de Sistemas, técnico mecánico, herrero y soldador. Me apasiona la tecnología y el desarrollo de software, siempre estoy buscando aprender nuevas habilidades y mejorar mis conocimientos en el campo de la informática. Me considero una persona proactiva, responsable y con ganas de crecer profesionalmente.";

  return (
    <section className={`container ${tema === "dark" ? "bg-dark text-light" : "bg-light"}`}>
      <div className="about-section">
        <h2>Sobre mí</h2>
        <p className="descripcion">{descripcion}</p>
      </div>

      {experiencia.length > 0 && (
        <div className="about-section">
          <h3>Experiencia</h3>
          <ul >
            {experiencia.map((exp, i) => (
              <li key={i}>{exp}</li>
            ))}
          </ul>
        </div>
      )}

      {educacion.length > 0 ? (
        <div className="about-section">
          <h3>Educación</h3>
          <ul>
            {educacion.map((edu, i) => (
              <li key={i}>{edu}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No hay datos de educación disponibles.</p>
      )}

      <div className="about-section" >
        <h3>Habilidades</h3>
        <div className="skills-grid">
          {habilidades.map((hab, i) => (
            <SkillBadge key={i} skill={hab} />
          ))}
        </div>
        
      </div>
    </section>
  );
}
