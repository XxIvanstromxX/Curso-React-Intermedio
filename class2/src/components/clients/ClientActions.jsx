export default function ClientActions({ dispatch }) {
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
