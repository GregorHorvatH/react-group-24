import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { HashRouter as Router } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import store from './reducer/store';

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root'),
);
