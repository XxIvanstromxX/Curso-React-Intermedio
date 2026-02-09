import ClientsList from '../components/clients/ClientList';
import ClientForm from '../components/clients/ClientForm';
import { useClients } from '../hooks/useClients';
import { useState } from 'react';

export default function ClientsPage() {
  const { clients, loading, error } = useClients();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto p-4 flex flex-col gap-4">
      <h1 className="text-3xl font-bold text-gray-700 mb-3">
        Clients Management
      </h1>

      <button
        onClick={() => setModalOpen(!modalOpen)}
        className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-md text-lg mb-4 self-end-safe"
      >
        Agregar Cliente
      </button>

      {loading && <p>Cargando Clientes...</p>}

      {error && <p>Error {error}</p>}

      {modalOpen && (
        <ClientForm existingClient={null} onClose={() => setModalOpen(false)} />
      )}
      <ClientsList clients={clients} />
    </div>
  );
}
