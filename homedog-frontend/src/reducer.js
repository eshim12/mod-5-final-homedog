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
    default:
      return state
  }
};

const allReservationsReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_ALL_RESERVATIONS':
      return action.reservations
    default:
      return state
  }
}

const rootReducer = combineReducers({
  auth: authReducer,
  users: allUsersReducer,
  reservations: allReservationsReducer
})

export default rootReducer
