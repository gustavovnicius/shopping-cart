import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from 'reducers';

const initialState = {};

const store = createStore(reducers, initialState, applyMiddleware(thunk));

const App = () => (
  <Provider store={store}>
    <div />
  </Provider>
  );

export default App;
