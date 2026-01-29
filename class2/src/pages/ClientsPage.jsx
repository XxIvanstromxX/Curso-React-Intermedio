import { useReducer } from 'react';
import { clientsReducer, initialState } from '../reducers/clientsReducer';
import ClientsList from '../components/clients/ClientList';
import ClientActions from '../components/clients/ClientActions';

export default function ClientsPage() {
  const [state, dispatch] = useReducer(clientsReducer, initialState);

  return (
    <div>
      <h1>Clients Management</h1>
      <ClientActions dispatch={dispatch} />
      <ClientsList clients={state.clients} dispatch={dispatch} />
    </div>
  );
}
