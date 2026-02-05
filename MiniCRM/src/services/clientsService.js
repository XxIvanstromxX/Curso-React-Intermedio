const API_URL = 'https://69840783885008c00dafdee6.mockapi.io/api/clients';

export async function getClients() {
  try {
    const reponse = await fetch(API_URL);
    const data = await reponse.json();
    return data;
  } catch (error) {
    throw new Error('Error fetching clients: ' + error.message);
  }
}

// Alternativa con .then() basada en promesas es menos recomendable
// function getClients(){
//     fetch(API_URL)
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error));
//     .finally(() => console.log('Fetch attempt finished'));
// }
