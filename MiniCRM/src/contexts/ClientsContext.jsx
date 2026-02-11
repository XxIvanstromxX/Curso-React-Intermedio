import { createContext, useReducer, useMemo } from 'react';
import { clientsReducer, initialState } from '../reducers/clientsReducer';

export const ClientsContext = createContext();

export function ClientsProvider({ children }) {
  const [state, dispatch] = useReducer(clientsReducer, initialState);

  const memoizedValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <ClientsContext.Provider value={memoizedValue}>
      {children}
    </ClientsContext.Provider>
  );
}
