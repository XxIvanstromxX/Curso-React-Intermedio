import { useContext } from 'react';
import { ClientsContext } from '../../contexts/ClientsContext';

export default function ClientActions() {
  const { dispatch } = useContext(ClientsContext);

  const handleAddClient = () => {
    const newClient = {
      id: Date.now(),
      name: 'New Client',
    };
    dispatch({ type: 'ADD_CLIENT', payload: newClient });
  };

  return (
    <div>
      <button onClick={handleAddClient}>Add Client</button>
    </div>
  );
}
