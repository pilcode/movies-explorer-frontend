const BASE_URL = process.env.REACT_APP_MAIN_SERVER || 'http://localhost:3000';

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

export function register({name, email, password}) {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      ...defaultHeaders
    },
    body: JSON.stringify({
      'name': name,
      'email': email,
      'password': password
    })
  })
    .then(handleResponse)
}

export function login({email, password}) {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      ...defaultHeaders
    },
    body: JSON.stringify({
      'email': email,
      'password': password
    })
  })
    .then(handleResponse)
}

export function updateUser({name, email, token}) {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      ...defaultHeaders,
      'Authorization' : `Bearer ${ token }`,
    },
    body: JSON.stringify({
      'name': name,
      'email': email,
    })
  })
    .then(handleResponse)
}


export function getMe({token}) {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      ...defaultHeaders,
      'Authorization' : `Bearer ${ token }`,
    },
  })
    .then(handleResponse)
}

export function getSavedCards({token}) {
  return fetch(`${BASE_URL}/movies`, {
    method: 'GET',
    headers: {
      ...defaultHeaders,
      'Authorization' : `Bearer ${ token }`,
    },
  })
    .then(handleResponse)
}



export function likeCard({token, ...body}) {
  return fetch(`${BASE_URL}/movies`, {
    method: 'POST',
    headers: {
      ...defaultHeaders,
      'Authorization' : `Bearer ${ token }`,
    },
    body: JSON.stringify(body)
  })
    .then(handleResponse)

}


export function deleteCard({token, cardId}) {
  return fetch(`${BASE_URL}/movies/${cardId}`, {
    method: 'DELETE',
    headers: {
      ...defaultHeaders,
      'Authorization' : `Bearer ${ token }`,
    },
  })
    .then(handleResponse)
}

