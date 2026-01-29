export default function ClientList({ clients, dispatch }) {
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
