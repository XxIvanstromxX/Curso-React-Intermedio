import { useState } from 'react';

export default function Contador() {
  const [count, setCount] = useState(0);

  const handlerIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Contador: {count}</h2>
      <button onClick={handlerIncrement}>Incrementar</button>
    </div>
  );
}
