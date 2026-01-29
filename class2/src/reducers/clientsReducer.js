export const initialState = {
  clients: [],
};

export function clientsReducer(state, action) {
  switch (action.type) {
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
