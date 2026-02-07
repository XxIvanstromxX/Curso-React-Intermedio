import ClientForm from './ClientForm';
import { useState } from 'react';

export default function ClientList({ clients }) {
  const [editingClient, setEditingClient] = useState(false);

  return (
    <ul>
      {clients.map((client) => (
        <li key={client.id}>
          {client.name} - {client.email} - {client.phone} - {client.jobArea}
          <button className="bg-red-500 rounded-md text-white ml-2.5 px-2 py-0.5 border-amber-50 border">
            Remove
          </button>
          {/*Boton Editar Cliente*/}
          <button
            onClick={() =>
              setEditingClient(editingClient === client.id ? false : client.id)
            }
          >
            {editingClient === client.id ? 'Cancelar' : 'Edit'}
          </button>
          {editingClient === client.id && (
            <ClientForm
              existingClient={client}
              onClose={() => {
                setEditingClient(false);
              }}
            />
          )}
        </li>
      ))}
    </ul>
  );
}
