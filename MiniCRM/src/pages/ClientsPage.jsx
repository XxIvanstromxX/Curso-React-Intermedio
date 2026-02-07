import ClientsList from '../components/clients/ClientList';
import ClientForm from '../components/clients/ClientForm';
import { useClients } from '../hooks/useClients';
import { useState } from 'react';

export default function ClientsPage() {
  const { clients, loading, error } = useClients();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <h1>Clients Management</h1>

      <button onClick={() => setModalOpen(!modalOpen)}>
        {modalOpen ? 'Cancelar' : 'Agregar Cliente'}
      </button>

      {loading && <p>Cargando Clientes...</p>}

      {error && <p>Error {error}</p>}

      {modalOpen && <ClientForm existingClient={null} />}
      <ClientsList clients={clients} />
    </div>
  );
}
