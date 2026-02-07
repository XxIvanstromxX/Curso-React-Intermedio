const API_URL = 'https://69840783885008c00dafdee6.mockapi.io/api/clients';

export async function getClients() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error fetching clients: ' + error.message);
  }
}

export const addClient = async (client) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(client),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error al añadir un client' + error);
  }
};

export const updateClient = async (id, client) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(client),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error al actualizar un client' + error);
  }
};

/*
Esto es un objeto de js
const objeto = {
  usuario: "usuario 1",
}
*/

/*
Esto es un JSON
{
  "usuario": "usuario 1",
}
*/

// Alternativa con .then() basada en promesas es menos recomendable
// function getClients(){
//     fetch(API_URL)
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error));
//     .finally(() => console.log('Fetch attempt finished'));
// }
