import { useReducer } from "react";


const initialState = { nombre: "", email: "", mensaje: "", errores: {} };

function reducer(state, action) {
  switch (action.type) {
    case "ACTUALIZAR_CAMPO":
      return { ...state, [action.campo]: action.valor };
    case "VALIDAR_CAMPO":
      return { ...state, errores: { ...state.errores, [action.campo]: action.error } };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

function validarCampo(campo, valor) {
  if (!valor) return "Este campo es obligatorio";
  if (campo === "email" && !/\S+@\S+\.\S+/.test(valor)) return "Email inválido";
  return "";
}

export default function ContactPage({ tema }) {
  const [form, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    const errores = {
      nombre: validarCampo("nombre", form.nombre),
      email: validarCampo("email", form.email),
      mensaje: validarCampo("mensaje", form.mensaje),
    };
    if (errores.nombre || errores.email || errores.mensaje) {
      dispatch({ type: "VALIDAR_CAMPO", campo: "nombre", error: errores.nombre });
      dispatch({ type: "VALIDAR_CAMPO", campo: "email", error: errores.email });
      dispatch({ type: "VALIDAR_CAMPO", campo: "mensaje", error: errores.mensaje });
      return;
    }
    alert("Mensaje enviado correctamente ✅");
    setTimeout(() => dispatch({ type: "RESET" }), 2000);
  };

  return (
    <section className={`container ${tema === "dark" ? "bg-dark text-light" : "bg-light"}`}>
      <h2>Contacto</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={form.nombre}
          onChange={(e) => dispatch({ type: "ACTUALIZAR_CAMPO", campo: "nombre", valor: e.target.value })}
          onBlur={(e) => dispatch({ type: "VALIDAR_CAMPO", campo: "nombre", error: validarCampo("nombre", e.target.value) })}
          className={form.errores.nombre ? "is-invalid" : form.nombre ? "is-valid" : ""}
        />
        <div className="invalid-feedback">{form.errores.nombre}</div>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => dispatch({ type: "ACTUALIZAR_CAMPO", campo: "email", valor: e.target.value })}
          onBlur={(e) => dispatch({ type: "VALIDAR_CAMPO", campo: "email", error: validarCampo("email", e.target.value) })}
          className={form.errores.email ? "is-invalid" : form.email ? "is-valid" : ""}
        />
        <div className="invalid-feedback">{form.errores.email}</div>

        <textarea
          name="mensaje"
          placeholder="Mensaje"
          value={form.mensaje}
          onChange={(e) => dispatch({ type: "ACTUALIZAR_CAMPO", campo: "mensaje", valor: e.target.value })}
          onBlur={(e) => dispatch({ type: "VALIDAR_CAMPO", campo: "mensaje", error: validarCampo("mensaje", e.target.value) })}
          className={form.errores.mensaje ? "is-invalid" : form.mensaje ? "is-valid" : ""}
        />
        <div className="invalid-feedback">{form.errores.mensaje}</div>

        <button type="submit" className="btn-primary">Enviar</button>
        <button type="button" className="btn-secondary" onClick={() => dispatch({ type: "RESET" })}>Borrar</button>
      </form>
    </section>
  );
}
