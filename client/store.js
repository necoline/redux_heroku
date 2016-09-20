import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
    //takes 2 params and syncs  browserHistory and store
import { browserHistory } from 'react-router';
    //b.c its not in index.js
import thunk from 'redux-thunk';
import rootReducer from './reducers/index'; //allows us to dump all reducers together so they get compiled as one

const enhancers = compose( //enhancing redux
  applyMiddleware(thunk), //so we can may asynchonous calls and dispatch at the same time
  window.devToolsExtension ? window.devToolsExtension() : f => f
);
    //compose comes from redux

const store = createStore(rootReducer, {}, enhancers);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
