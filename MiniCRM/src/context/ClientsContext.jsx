import { createContext, useReducer } from 'react';
import { clientsReducer, initialState } from '../reducers/clientsReducer';

export const ClientsContext = createContext();

export function ClientsProvider({ children }) {
  const [state, dispatch] = useReducer(clientsReducer, initialState);

  return (
    <ClientsContext.Provider value={{ state, dispatch }}>
      {children}
    </ClientsContext.Provider>
  );
}
