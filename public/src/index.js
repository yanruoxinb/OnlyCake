import React from 'react'; // eslint-disable-line no-unused-vars
import {render} from 'react-dom';
import AppUser from './components/AppUser';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import todoRequestMiddleware from './middlewares/todoRequestMiddleware';
import result from './reducers';
const store = createStore(
    result,
    applyMiddleware(todoRequestMiddleware)
);

store.dispatch({
  type: 'INIT'
});

render(
    <Provider store={store}>
      <AppUser/>
    </Provider>,
    document.getElementById('app')
);