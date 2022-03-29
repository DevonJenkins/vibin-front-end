import * as tokenService from './tokenService'
const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/instruments`

function create(instrument) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: new Headers({ 
      'Content-Type': 'application/json', 
      Authorization: `Bearer ${tokenService.getToken()}` 
    }),
    body: JSON.stringify(instrument),
  })
  .then(res => res.json())
  .catch(err => console.log(err))
}

function getAllInstruments() {
  return fetch(BASE_URL, {
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    }
  })
  .then(res => res.json())
}

function getProfileInstruments(ids) {
  const instruments = ids.map(id => fetch(`${BASE_URL}/${id}`))
  const instrumentObjects = Promise.all(instruments)
  console.log(instrumentObjects) 
  return instrumentObjects

  
   // .then(res => res.json())
}

export {
  create,
  getAllInstruments,
  getProfileInstruments
}