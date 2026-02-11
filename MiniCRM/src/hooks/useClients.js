import { useContext, useEffect, useCallback } from 'react';
import { ClientsContext } from '../contexts/ClientsContext';
import {
  getClients,
  addClient,
  updateClient,
  deleteClient,
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

  const addNewClient = useCallback(
    async (client) => {
      try {
        const newClient = await addClient(client);
        console.log('Nuevo usuario agregado: ' + client);
        dispatch({ type: 'ADD_CLIENT_SUCCESS', payload: newClient });
      } catch (error) {
        dispatch({ type: 'ADD_CLIENT_ERROR', payload: error.message });
      }
    },
    [dispatch],
  );

  const updateExistingClient = useCallback(
    async (id, client) => {
      try {
        const updatedClient = await updateClient(id, client);
        dispatch({ type: 'UPDATE_CLIENT_SUCCESS', payload: updatedClient });
      } catch (error) {
        dispatch({ type: 'UPDATE_CLIENT_ERROR', payload: error.message });
      }
    },
    [dispatch],
  );

  const removeClient = useCallback(
    async (id) => {
      try {
        await deleteClient(id);
        dispatch({ type: 'REMOVE_CLIENT_SUCCESS', payload: id });
      } catch (error) {
        dispatch({ type: 'REMOVE_CLIENT_ERROR', payload: error.message });
      }
    },
    [dispatch],
  );

  return {
    clients: state.clients,
    loading: state.loading,
    error: state.error,
    addNewClient,
    updateExistingClient,
    removeClient,
  };
}
