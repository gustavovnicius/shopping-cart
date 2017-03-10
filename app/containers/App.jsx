import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from 'reducers';

const initialState = {};

const store = createStore(reducers, initialState);

const App = () => (
  <Provider store={store}>
    <div />
  </Provider>
  );

export default App;
