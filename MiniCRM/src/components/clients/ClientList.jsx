export default function ClientList({ clients }) {
  return (
    <ul>
      {clients.map((client) => (
        <li key={client.id}>
          {client.name} - {client.email} - {client.phone} - {client.jobArea}
          <button className="bg-red-500 rounded-md text-white ml-2.5 px-2 py-0.5 border-amber-50 border">
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
}
