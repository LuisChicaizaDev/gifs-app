import { useState } from 'react';

// El nombre de un Custom hook debe empezar con 'use'
export const useCounter = (initialValue: number = 10) => {
  const [counter, setCounter] = useState(initialValue);

  const handleAdd = () => {
    setCounter((prev) => prev + 1); // Usa el valor previo para sumar correctamente en varias llamadas
  };

  const handleSubtract = () => {
    setCounter((prevState) => prevState - 1);
  };

  const handleReset = () => {
    setCounter(initialValue);
  };

  // Devolvemos un objeto literal
  return {
    // Props
    counter,

    // Methods
    handleAdd,
    handleSubtract,
    handleReset,
  };
};
