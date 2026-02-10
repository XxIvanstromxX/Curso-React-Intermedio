import ClientForm from './ClientForm';
import ClientDelete from './ClientDelete';
import { useState } from 'react';

export default function ClientList({ clients }) {
  const [editingClient, setEditingClient] = useState(false);

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {clients.map((client) => (
        <li
          key={client.id}
          className="bg-[#f9f9f9] rounded-xl shadow p-4 flex flex-col justify-between space-y-3"
        >
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              {client.name}
            </h3>
            <p className="text-sm text-gray-500">{client.jobArea}</p>
            <div className="mt-2 text-sm text-gray-600">
              <div>Email: {client.email}</div>
              <div>Phone: {client.phone}</div>
            </div>
          </div>

          <div className="flex items-center justify-end gap-2">
            <ClientDelete clientId={client.id} />

            <button
              onClick={() =>
                setEditingClient(
                  editingClient === client.id ? false : client.id,
                )
              }
              className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm"
            >
              Editar
            </button>
          </div>

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
