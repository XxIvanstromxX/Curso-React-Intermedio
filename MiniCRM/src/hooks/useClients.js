import { useContext, useEffect } from 'react';
import { ClientsContext } from '../contexts/ClientsContext';
import {
  getClients,
  addClient,
  updateClient,
} from '../services/clientsService';

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

    if (!state.fetched) {
      fetchClients();
    }
  }, [dispatch, state.fetched]);

  const addNewClient = async (client) => {
    try {
      const newClient = await addClient(client);
      console.log('Nuevo usuario agregado: ' + client);
      dispatch({ type: 'ADD_CLIENT_SUCCESS', payload: newClient });
    } catch (error) {
      dispatch({ type: 'ADD_CLIENT_ERROR', payload: error.message });
    }
  };

  const updateExistingClient = async (id, client) => {
    try {
      const updatedClient = await updateClient(id, client);
      dispatch({ type: 'UPDATE_CLIENT_SUCCESS', payload: updatedClient });
    } catch (error) {
      dispatch({ type: 'UPDATE_CLIENT_ERROR', payload: error.message });
    }
  };

  return {
    clients: state.clients,
    loading: state.loading,
    error: state.error,
    addNewClient,
    updateExistingClient,
  };
}
