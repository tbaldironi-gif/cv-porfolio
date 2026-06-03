import { useState, useEffect } from "react";

export function useLocalStorage(clave, valorInicial) {
  const [valor, setValor] = useState(() => {
    const item = localStorage.getItem(clave);
    return item ? JSON.parse(item) : valorInicial;
  });

  useEffect(() => {
    localStorage.setItem(clave, JSON.stringify(valor));
  }, [clave, valor]);

  return [valor, setValor];
}