import { useClients } from '../../hooks/useClients';
import { useState } from 'react';

export default function ClientForm({ existingClient, onClose }) {
  const { addNewClient, updateExistingClient } = useClients();
  const [clientData, setClientData] = useState(
    existingClient || {
      createdAt: new Date().toISOString(),
      name: '',
      phone: '',
      email: '',
      jobArea: 'General',
    },
  );

  const handleChange = (e) => {
    setClientData({ ...clientData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (existingClient) {
      updateExistingClient(existingClient.id, clientData);
      if (onClose) onClose();
    } else {
      addNewClient(clientData);
      setClientData({
        createdAt: new Date().toISOString(),
        name: '',
        phone: '',
        email: '',
        jobArea: '',
      });
      if (onClose) onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/40"
        onClick={() => onClose && onClose()}
      />

      <div className="relative z-10 w-full max-w-lg mx-4">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <button
            onClick={() => onClose && onClose()}
            className="absolute -top-3 -right-3 bg-gray-100 hover:bg-gray-200 rounded-full p-2 shadow"
            aria-label="Cerrar"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-700"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <h2 className="text-xl font-semibold mb-4">
            {existingClient ? 'Editar Cliente' : 'Agregar Cliente'}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={clientData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-200"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={clientData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-200"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={clientData.phone}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-200"
            />

            <input
              type="text"
              name="jobArea"
              placeholder="Job Area"
              value={clientData.jobArea}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-200"
            />

            <div className="flex items-center justify-end gap-2 mt-4">
              <button
                type="button"
                onClick={() => onClose && onClose()}
                className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
              >
                {existingClient ? 'Actualizar' : 'Agregar'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
