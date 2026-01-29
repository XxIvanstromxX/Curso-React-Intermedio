import { useState } from 'react';

export function DerivateStateBad() {
  const [firstName, setFirstName] = useState('Ada');
  const [lastName, setLastName] = useState('Lovelace');
  const [fullName, setFullName] = useState('Ada Lovelace');

  const onChangeFirstName = (value) => {
    setFirstName(value);
    setFullName(value + ' ' + lastName); // riesgo de desincronía
  };

  return (
    <section className="border-2 flex flex-col gap-2 p-4 mb-4">
      <h3 className="text-center">❌ Mal: estado derivado</h3>
      <p className="text-center">
        Se guarda fullName además de firstName y lastName.
      </p>
      {/* UI mínima para disparar cambios */}
      <input
        className="border"
        value={firstName}
        onChange={(e) => onChangeFirstName(e.target.value)}
      />
      <input
        className="border"
        value={lastName}
        onChange={(e) => {
          setLastName(e.target.value);
          console.log(lastName);
        }}
      />
      <p className="text-center">{fullName}</p>
    </section>
  );
}

export function DerivateStateGood() {
  const [firstName, setFirstName] = useState('Ada');
  const [lastName, setLastName] = useState('Lovelace');

  const fullName = firstName + ' ' + lastName;

  return (
    <section className="border-2 flex flex-col gap-2 p-4">
      <h3 className="text-center">✅ Bien: calcular en el render</h3>
      <p className="text-center">
        fullName se calcula a partir de firstName y lastName.
      </p>
      <input
        className="border"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        className="border"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <p className="text-center">{fullName}</p>
    </section>
  );
}
