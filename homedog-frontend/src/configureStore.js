import rootReducer from './reducer';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';


const configureStore = () => {
  return createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk));
};
export default configureStore;
//
