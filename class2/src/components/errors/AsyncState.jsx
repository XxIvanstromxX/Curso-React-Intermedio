import { useState, useEffect } from 'react';

export default function AsyncState() {
  const [count, setCount] = useState(0);

  // Dos actualizaciones usando el valor "stale" de `count`, lo que provoca que solo se incremente una vez
  const handleClickError = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    console.log('handleClickError - console (stale):', count);
  };

  // Dos actualizaciones usando el actualizador funcional (cada llamada recibe el último estado)
  const handleClick = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    console.log('handleClick - console (stale):', count);
  };

  // Efecto para mostrar el valor actualizado de `count` después de cada renderizado
  useEffect(() => {
    console.log('useEffect - count actualizado:', count);
  }, [count]);

  return (
    <div className="justify-center py-5 bg-blue-300 rounded-md px-4 max-w-2xl mx-auto my-5">
      <p className="text-center text-2xl">Count: {count}</p>

      <div className="flex justify-center gap-3 mt-3">
        <button
          className="bg-green-300 w-40 rounded-xl"
          onClick={() => setCount((prev) => prev + 1)}
        >
          Increment (functional)
        </button>
        <button
          className="bg-green-500 text-white w-40 rounded-xl"
          onClick={handleClick}
        >
          Increment Twice (functional)
        </button>
        <button
          className="bg-red-500 text-white w-40 rounded-xl"
          onClick={handleClickError}
        >
          Increment Twice (stale)
        </button>
      </div>
    </div>
  );
}
