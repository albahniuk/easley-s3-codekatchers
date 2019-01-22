const urlCard = 'https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/';

const sendCard = (card) => fetch(urlCard, {
    method: 'POST',
    body: JSON.stringify(card),
    headers: {
      'content-type': 'application/json'
    },
  })
    .then(urlResponse => urlResponse.json())

export {sendCard};