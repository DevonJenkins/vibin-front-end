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

function addInstrumentToProfile(profileId, instrumentId) {
  return fetch(`${BASE_URL}/${profileId}/instruments/${instrumentId}`, {
    method:'PATCH',
    headers: new Headers({ 
      Authorization: `Bearer ${tokenService.getToken()}`
    }),
  })
  .then(res => res.json())
}

function addGenreToProfile(profileId, genreId) {
  return fetch(`${BASE_URL}/${profileId}/genres/${genreId}`, {
    method:'PATCH',
    headers: new Headers({ 
      Authorization: `Bearer ${tokenService.getToken()}`
    }),
  })
  .then(res => res.json())
}

function deleteInstrument(profileId, instrumentId) {
  return fetch(`${BASE_URL}/${profileId}/instruments/${instrumentId}`, {
    method: 'DELETE',
    headers: new Headers({
      Authorization: `Bearer ${tokenService.getToken()}`
    }),
  })
  .then(res => res.json())
}

function deleteGenre(profileId, genreId) {
  return fetch(`${BASE_URL}/${profileId}/genres/${genreId}`, {
    method: 'DELETE',
    headers: new Headers({
      Authorization: `Bearer ${tokenService.getToken()}`
    })
  })
  .then(res => res.json())
}

export { 
  getAllProfiles, 
  getProfile, 
  addInstrumentToProfile,
  addGenreToProfile,
  deleteInstrument,
  deleteGenre,
}
