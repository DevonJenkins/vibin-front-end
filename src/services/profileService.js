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

function addInstrumentToProfile(instrumentId, profileId) {
  console.log('instrument id:', instrumentId)
  return fetch(`${BASE_URL}/${profileId}`, {
    method:'PATCH',
    headers: new Headers({ 
      'Content-Type': 'application/json',
      Authorization: `Bearer ${tokenService.getToken()}`
    }),
    body: JSON.stringify(instrumentId),
  })
  .then(res => res.json())
}

export { getAllProfiles, getProfile, addInstrumentToProfile }
