import { useClients } from '../../hooks/useClients';
import { useState, useCallback, memo } from 'react';

function ClientDelete({ clientId }) {
  const { removeClient } = useClients();
  const [confirming, setConfirming] = useState(false);

  const handleDelete = useCallback(() => {
    removeClient(clientId);
  }, [removeClient, clientId]);

  return (
    <div>
      {!confirming ? (
        <button
          onClick={() => setConfirming(true)}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm"
        >
          Eliminar
        </button>
      ) : (
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-700">¿Confirma eliminar?</span>
          <button
            onClick={handleDelete}
            className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md text-sm"
          >
            Sí, eliminar
          </button>
          <button
            onClick={() => setConfirming(false)}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-3 py-1 rounded-md text-sm"
          >
            Cancelar
          </button>
        </div>
      )}
    </div>
  );
}

export default memo(ClientDelete);
