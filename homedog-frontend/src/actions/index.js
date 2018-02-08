import { adapter } from '../services';

export const fetchUser = () => dispatch => {
  dispatch({ type: 'ASYNC_START' });
  adapter.auth.getCurrentUser().then(user => {
    dispatch({ type: 'SET_CURRENT_USER', user });
  });
};

export const loginUser = (username, password, history) => dispatch => {
  dispatch({ type: 'ASYNC_START' });
  adapter.auth.login({ username, password }).then(user => {
    if (user.error) {
      dispatch({
        type: 'LOGIN_ERROR'
      })
      alert("Try Again")
    } else {
      localStorage.setItem('token', user.jwt);
      dispatch({ type: 'SET_CURRENT_USER', user });
      history.push('/profile');
    }
  });
};

export const fetchAllUsers = () => dispatch => {
  dispatch({ type: 'ASYNC_START' });
  adapter.auth.getAllUsers()
    .then(users => {
      dispatch({
        type: 'GET_ALL_USERS', users
      })
    })
}

export const loginNewUser = (data, history) => dispatch => {
  dispatch({ type: 'ASYNC_START' });
  adapter.auth.addUser(data).then(user => {
    localStorage.setItem('token', user.jwt);
    dispatch({ type: 'SET_CURRENT_USER', user });
    history.push('/profile');
  });

};

export const logoutUser = () => {
  localStorage.removeItem('token');
  return { type: 'LOGOUT_USER' };
};

export const fetchAllReservations = () => dispatch => {
  dispatch({ type: 'ASYNC_START' });
  adapter.reservations.fetchAllReservations()
    .then(reservations => {dispatch({
      type: 'GET_ALL_RESERVATIONS', reservations
    })
  })
};

export const addReservation = (data, history) => dispatch => {
  dispatch({ type: 'ASYNC_START' });
  adapter.reservations.addReservation(data)
    .then(reservation => {
      dispatch({ type: 'ADD_RESERVATION', reservation })
      history.push('/profile')
  });
};

export const addPet = (data, history) => dispatch => {
  dispatch({ type: 'ASYNC_START' });
  adapter.pets.addPet(data)
    .then(pet => dispatch({ type: 'ADD_PET', pet })
  )
  history.push('/mydogprof')
}

export const deletePet = (id) => dispatch => {
  dispatch({ type: 'ASYNC_START' });
  adapter.pets.deletePet(id)
    .then(pet =>
      dispatch({ type: 'DELETE_PET', pet })
    );
  alert("Deleted!")
}

export const deleteReservation = (id, history) => dispatch => {
  dispatch({ type: 'ASYNC_START' });
  adapter.reservations.deleteReservation(id)
    .then(reservation => {
      dispatch({ type: 'DELETE_RESERVATION', reservation })
    });
  alert("Deleted!")
  history.push('/profile')
}

export const addReview = (data) => dispatch => {
  dispatch({ type: 'ASYNC_START' });
  adapter.reviews.addReview(data)
    .then(review => {
      dispatch({ type: 'ADD_REVIEW', review })
  });
  alert("Review added! Thanks!")
}

export const updateUser = (id, data) => dispatch => {
  dispatch({ type: 'ASYNC_START' });
  adapter.auth.updateUser(id, data)
    .then(user => {
      dispatch({ type: 'UPDATE_USER', user })
    })
};
