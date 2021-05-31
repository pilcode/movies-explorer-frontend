const BASE_URL = process.env.REACT_APP_MOVIES_SERVER || 'https://api.nomoreparties.co/beatfilm-movies';


const defaultHeaders = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

function handleResponse(res) {
  if (res.ok) {
    return res.json()
  } else {
    return Promise.reject(res)
  }
}


export function getInitialCards() {
  return fetch(`${BASE_URL}/`, {
    headers: {
      ...defaultHeaders
    }
  })
    .then(handleResponse)
}



