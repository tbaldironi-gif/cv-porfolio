import { Link } from "react-router-dom";
import propTypes from "prop-types";

export default function Navbar({ tema, toggleTema }) {
  return (
    <nav className={`navbar ${tema === "dark" ? "bg-dark text-light" : "bg-light"}`}>
      <div className="container navbar-content">
        <h1 className="logo">PORTFOLIO</h1>
        <ul className="nav-links">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/about">Sobre mí</Link></li>
          <li><Link to="/projects">Proyectos</Link></li>
          <li><Link to="/contact">Contacto</Link></li>
        </ul>
        <button onClick={toggleTema} className="btn-secondary">
          {tema === "dark" ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </nav>
  );
}
