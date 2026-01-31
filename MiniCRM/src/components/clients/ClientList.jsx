import { useContext } from 'react';
import { ClientsContext } from '../../context/ClientsContext';

export default function ClientList() {
  const { state, dispatch } = useContext(ClientsContext);
  const { clients } = state;

  if (clients.length === 0) {
    return <p>No clients available.</p>;
  }

  return (
    <ul>
      {clients.map((client) => (
        <li key={client.id}>
          {client.name}
          <button
            onClick={() =>
              dispatch({ type: 'REMOVE_CLIENT', payload: client.id })
            }
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
}
