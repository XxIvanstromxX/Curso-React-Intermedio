import { useContext, useEffect } from 'react';
import { ClientsContext } from '../contexts/ClientsContext';
import { getClients } from '../services/clientsService';

export function useClients() {
  const { state, dispatch } = useContext(ClientsContext);

  useEffect(() => {
    // Arrow function asincrona para obtener los clientes
    const fetchClients = async () => {
      dispatch({ type: 'FETCH_CLIENTS_START' });
      try {
        const data = await getClients();
        dispatch({ type: 'FETCH_CLIENTS_SUCCESS', payload: data });
      } catch (error) {
        dispatch({ type: 'FETCH_CLIENTS_ERROR', payload: error.message });
      }
    };

    fetchClients();
  }, [dispatch]);

  return {
    clients: state.clients,
    loading: state.loading,
    error: state.error,
  };
}
