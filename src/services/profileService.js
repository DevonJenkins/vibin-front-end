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
  return fetch(`${BASE_URL}/${profileId}/instruments`, {
    method:'PATCH',
    headers: new Headers({ 
      'Content-Type': 'application/json',
      Authorization: `Bearer ${tokenService.getToken()}`
    }),
    body: JSON.stringify(instrumentId),
  })
  .then(res => res.json())
}

function addGenreToProfile(genreId, profileId) {
  return fetch(`${BASE_URL}/${profileId}/genres`, {
    method:'PATCH',
    headers: new Headers({ 
      'Content-Type': 'application/json',
      Authorization: `Bearer ${tokenService.getToken()}`
    }),
    body: JSON.stringify(genreId),
  })
  .then(res => res.json())
}

function deleteInstrument(profileId, instrumentId) {

}


export { 
  getAllProfiles, 
  getProfile, 
  addInstrumentToProfile,
  addGenreToProfile,
}
