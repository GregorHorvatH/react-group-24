import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { HashRouter as Router } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import { store, persistor } from './reducer/store';

ReactDOM.render(
  <Router>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <App />
      {/* </PersistGate> */}
    </Provider>
  </Router>,
  document.getElementById('root'),
);
