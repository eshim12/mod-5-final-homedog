import { combineReducers } from 'redux';

const initialState = { currentUser: {} };

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      const { id, username } = action.user;
      return { ...state, currentUser: { id, username } };
    case 'LOGOUT_USER':
      return { ...state, currentUser: {} };
    case 'LOGIN_ERROR':
      return { ...state, currentUser: {}, login_error: true };
    default:
      return state;
  }
};

const allUsersReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_ALL_USERS':
      return action.users
    case 'DELETE_RESERVATION':
      const user = state.find(x => x.id === action.reservation.pet_owner_id)
      const allUsers = state.filter(x=> x.id !== user.id)
      const userUpdate = user.owner_reservations.filter(x => x.id !== action.reservation.id)
      user.owner_reservations = userUpdate
      return [...allUsers, user]
    case 'ADD_PET':
      const x = state.find(x => x.id === action.pet.pet_owner.id)
      x.pets.push(action.pet)
      const xs = state.filter(x=> x.id !== x.id)
      return [...xs, x]
    case 'DELETE_PET':
      const xxs = state.find(x => x.id === action.pet.pet.pet_owner_id)
      const pets = xxs.pets.filter(pet => pet.id !== action.pet.pet.id)
      xxs.pets = pets
      const xxxs = state.filter(x => x.id !== xxs.id)
      return [...xxxs, xxs]
    case 'UPDATE_USER':
      const xes = state.filter(x => x.id!== action.user.id)
      return [...xes, action.user]
    default:
      return state
  }
};

const allReservationsReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_ALL_RESERVATIONS':
      return action.reservations
    case 'ADD_RESERVATION':
      return [...state, action.user]
    case 'DELETE_RESERVATION':
      const reservation = state.filter(rsr => rsr.id !== action.reservation.id)
      return reservation
    default:
      return state
  }
}

const petsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PET':
      return [...state, action.pet]
    case 'DELETE_PET':
      return state
    default:
      return state
  }
}

const reviewsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_REVIEW':
      return [...state, action.review]
    default:
      return state
  }
}

const rootReducer = combineReducers({
  auth: authReducer,
  users: allUsersReducer,
  reservations: allReservationsReducer,
  pets: petsReducer,
  reviews: reviewsReducer
})

export default rootReducer
