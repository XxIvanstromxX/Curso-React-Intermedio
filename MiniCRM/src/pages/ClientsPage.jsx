import ClientsList from '../components/clients/ClientList';
import ClientActions from '../components/clients/ClientActions';

export default function ClientsPage() {
  return (
    <div>
      <h1>Clients Management</h1>
      <ClientActions />
      <ClientsList />
    </div>
  );
}
