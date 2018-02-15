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
    // debugger
      return { ...state, currentUser: {}, login_error: action.error };
    default:
      return state;
  }
};

const reviewsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_REVIEW':
      return [...state, action.review]
    default:
      return state
  }
}

const allUsersReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_ALL_USERS':
      return action.users
    case 'ADD_RESERVATION':
      const meme = state.find(x => x.id === action.reservation.pet_owner_id)
      meme.owner_reservations.push(action.reservation)
      const meh = state.filter(user=> user.id !== meme.id)
      return [...meh, meme]
    case 'DELETE_RESERVATION':
      const user = state.find(x => x.id === action.reservation.pet_owner_id)
      console.log("in reducer", user.owner_reservations);
      const userUpdate = user.owner_reservations.filter(x => x.id !== action.reservation.id)
      user.owner_reservations = userUpdate
      const allUsers = state.filter(x=> x.id !== user.id)
      return [...allUsers, user]
    case 'UPDATE_RESERVATION':
      const a = state.find(x => x.id === action.reservation.host_id)
      const rsrs = a.host_reservations.filter(x => x.id !== action.reservation.id)
      a.host_reservations = [...rsrs, action.reservation]
      const usrs = state.filter(x => x.id !== action.reservation.host_id)
      return [...usrs, a]
    case 'ADD_PET':
      const x = state.find(x => x.id === action.pet.pet_owner.id)
      x.pets.push(action.pet)
      const xs = state.filter(user=> user.id !== x.id)
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
    case 'UPDATE_RESERVATION':
      const rsrs = state.filter(x => x.id !== action.reservation.id)
      return [...rsrs, action.reservation]
    case 'ADD_REVIEW':
      const isolate = state.find(x => x.id === action.review.reservation_id)
      isolate.review = action.review
      debugger
      const otherRsrs = state.filter(x => x.id !== action.review.reservation_id )
      return [...otherRsrs, isolate]
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



const rootReducer = combineReducers({
  auth: authReducer,
  users: allUsersReducer,
  reservations: allReservationsReducer,
  pets: petsReducer,
  reviews: reviewsReducer
})

export default rootReducer
