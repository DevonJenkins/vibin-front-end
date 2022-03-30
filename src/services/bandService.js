import * as tokenService from '../services/tokenService'

const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/bands`

function getAllBands() {
  return fetch(BASE_URL, {
    headers: { Authorization: `Bearer ${tokenService.getToken()}` },
  })
  .then( res => res.json())
}

function create(band) {
  console.log(band)
  return fetch(BASE_URL, {
    method: 'POST',
    headers: new Headers({ 
      'Content-Type': 'application/json', 
      Authorization: `Bearer ${tokenService.getToken()}` 
    }),
    body: JSON.stringify(band),
  })
  .then(res => res.json())
  .catch(err => console.log(err))
}

export {
  getAllBands,
  create
}