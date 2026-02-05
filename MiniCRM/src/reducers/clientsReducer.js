export const initialState = {
  clients: [],
  loading: false,
  error: null,
};

export function clientsReducer(state, action) {
  switch (action.type) {
    case 'FETCH_CLIENTS_START':
      return {
        ...state,
        loading: true,
        error: null,
      };

    case 'FETCH_CLIENTS_SUCCESS':
      return {
        ...state,
        loading: false,
        clients: action.payload,
      };

    case 'FETCH_CLIENTS_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case 'ADD_CLIENT':
      return {
        ...state,
        clients: [...state.clients, action.payload],
      };

    case 'REMOVE_CLIENT':
      return {
        ...state,
        clients: state.clients.filter((client) => client.id !== action.payload),
      };

    case 'UPDATE_CLIENT':
      return {
        ...state,
        clients: state.clients.map((client) =>
          client.id === action.payload.id ? action.payload : client,
        ),
      };
    default:
      return state;
  }
}
