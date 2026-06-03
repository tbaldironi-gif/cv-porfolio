import { Routes, Route } from "react-router-dom";
import { useLocalStorage } from "./hooks/useLocalStorage";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import "./index.css";
import { useEffect } from "react";






function App() {

  const [tema, setTema] = useLocalStorage("tema", "light");


  const toggleTema = () => {
    setTema(tema === "light" ? "dark" : "light");
  };
   useEffect(() => {
    document.body.className = tema;
  }, [tema]);
  return (
    <>
      <Navbar tema={tema} toggleTema={toggleTema} />

      <Routes>
        <Route path="/" element={<HomePage tema={tema} toggleTema={toggleTema} />} />
        <Route path="/about" element={<AboutPage tema={tema} />} />
        <Route path="/projects" element={<ProjectsPage tema={tema} />} />
        <Route path="/contact" element={<ContactPage tema={tema} />} />
      </Routes>
    
  
  </>
  );
  


}

export default App;
