import * as tokenService from './tokenService'
const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/genres`

function create(genre) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: new Headers({ 
      'Content-Type': 'application/json', 
      Authorization: `Bearer ${tokenService.getToken()}` 
    }),
    body: JSON.stringify(genre),
  })
  .then(res => res.json())
  .catch(err => console.log(err))
}

async function getAllGenres() {
  return fetch(BASE_URL, {
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    }
  })
  .then(res => res.json())
}

export {
  create,
  getAllGenres
}