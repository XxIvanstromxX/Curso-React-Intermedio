import { useClients } from '../../hooks/useClients';
import { useState } from 'react';

export default function ClientForm({ existingClient, onClose }) {
  const { addNewClient, updateExistingClient } = useClients();
  const [clientData, setClientData] = useState(
    existingClient || {
      createdAt: new Date().toISOString(),
      name: '',
      phone: '',
      email: '',
      jobArea: 'General',
    },
  );

  const handleChange = (e) => {
    setClientData({ ...clientData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (existingClient) {
      updateExistingClient(existingClient.id, clientData);
      if (onClose) onClose();
    } else {
      addNewClient(clientData);
      setClientData({
        createdAt: new Date().toISOString(),
        name: '',
        phone: '',
        email: '',
        jobArea: '',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={clientData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={clientData.email}
        onChange={handleChange}
        required
      />
      <input
        type="phone"
        name="phone"
        placeholder="Phone"
        value={clientData.phone}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="jobArea"
        placeholder="Job Area"
        value={clientData.jobArea}
        onChange={handleChange}
      />

      <button type="submit">{existingClient ? 'Update' : 'Add'}</button>
    </form>
  );
}
