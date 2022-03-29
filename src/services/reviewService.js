import * as tokenService from './tokenService'
const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/reviews`

function create(reviews) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: new Headers({ 
      'Content-Type': 'application/json', 
      Authorization: `Bearer ${tokenService.getToken()}` 
    }),
    body: JSON.stringify(reviews),
  })
  .then(res => res.json())
  .catch(err => console.log(err))
}

function getAllReviews() {
  return fetch(BASE_URL, {
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    }
  })
  .then(res => res.json())
}

export {
  create,
  getAllReviews
}