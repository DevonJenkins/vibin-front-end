import * as tokenService from '../services/tokenService'

const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/profiles`

function getAllProfiles() {

  return fetch(BASE_URL, {
    headers: { Authorization: `Bearer ${tokenService.getToken()}` },
  })
  .then( res => res.json())
}

function getProfile(id) {
  
  return fetch(`${BASE_URL}/${id}`, {
    headers: { Authorization: `Bearer ${tokenService.getToken()}` },
  })
  .then(res => res.json())
}

function addInstrumentToProfile(id) {

  return fetch(`${BASE_URL}/${id}`, {
    method:'PATCH',
    headers: new Headers({ 
      'Content-Type': 'application/json',
      Authorization: `Bearer ${tokenService.getToken()}`

    }),
    body: JSON.stringify(id),
  })
  .then(res => res.json())
}

export { getAllProfiles, getProfile, addInstrumentToProfile }
