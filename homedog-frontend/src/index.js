import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import configureStore from './configureStore'

const store = configureStore()

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <Route path="/" component={App}/>
    </Provider>
  </Router>,
  document.getElementById('root')
);

registerServiceWorker();
