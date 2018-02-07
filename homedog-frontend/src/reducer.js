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
