import ClientsList from '../components/clients/ClientList';
import ClientActions from '../components/clients/ClientActions';
import { useClients } from '../hooks/useClients';

export default function ClientsPage() {
  const { clients, loading, error } = useClients();

  return (
    <div>
      <h1>Clients Management</h1>

      {loading && <p>Cargando Clientes...</p>}

      {error && <p>Error {error}</p>}

      <ClientActions />
      <ClientsList clients={clients} />
    </div>
  );
}
