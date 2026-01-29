import { useState } from 'react';

export function DirectMutationState() {
  const [array, setArray] = useState([]);

  function handleClick() {
    array.push('Nuevo elemento');
    setArray(array);
    console.log('Array after push:', array);
  }

  return (
    <div>
      <h2>Direct Mutation of State Example</h2>
      <button className="border-2" onClick={handleClick}>
        Add Element
      </button>
      <ul>
        {array.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export function CorrectMutationState() {
  const [array, setArray] = useState([]);

  function handleClick() {
    setArray([...array, 'Nuevo elemento']);
  }

  return (
    <div>
      <h2>Correct Mutation of State Example</h2>
      <button onClick={handleClick}>Add Element</button>
      <ul>
        {array.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
