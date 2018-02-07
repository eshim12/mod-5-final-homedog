const API_ROOT = `http://localhost:3000/api/v1`;

const headers = {
  'Content-Type': 'application/json',
  'Accepts': 'application/json'
};

const getWithToken = url => {
  const token = localStorage.getItem('token');
  return fetch(url, {
    headers: { Authorization: token }
  }).then(res => res.json());
};

const getCurrentUser = () => {
  return getWithToken(`${API_ROOT}/current_user`);
};

const addUser = (data) => {
  return fetch(`${API_ROOT}/users`, {
    method: 'POST',
    headers,
    body: JSON.stringify(data) }
  )
  .then(res => res.json());
}

const getAllUsers = () => {
  return fetch(`${API_ROOT}/users`)
    .then(res => res.json())
}

const login = data => {
  return fetch(`${API_ROOT}/login/`, {
    method: 'POST',
    headers,
    body: JSON.stringify(data)
  }).then(res => res.json());
};

const fetchAllReservations = () => {
  return fetch(`${API_ROOT}/reservations`)
    .then(res => res.json())
}

const addReservation = (data) => {
  return fetch(`${API_ROOT}/reservations`, {
    method: 'POST',
    headers,
    body: JSON.stringify(data)
  }).then(res => res.json())
}

const deleteReservation = (id) => {
  const token = localStorage.getItem('token');
  return fetch(`${API_ROOT}/reservations/${id}`, {
    method: 'DELETE',
    headers: {headers, "Authorization": token}
  }).then(res => res.json())
}

const addReview = (data) => {
  fetch(`${API_ROOT}/reviews`, {
    method: 'POST',
    headers,
    body: JSON.stringify(data)
  }).then(res => res.json())
}

const addPet = (data) => {
  return fetch(`${API_ROOT}/pets`,{
    method: 'POST',
    headers,
    body: JSON.stringify(data)
  }).then(res => res.json())
}

export const adapter = {
  auth: {
    login,
    getCurrentUser,
    addUser,
    getAllUsers
  },
  reservations: {
    fetchAllReservations,
    addReservation,
    deleteReservation
  },
  pets: {
    addPet
  },
  reviews: {
    addReview
  }
};
