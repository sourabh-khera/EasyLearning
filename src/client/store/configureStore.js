import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools as compose } from 'redux-devtools-extension/developmentOnly';

const middlewares = [
  thunkMiddleware, // lets us dispatch() functions
];

export default function configureStore(reducers) {
  const store = createStore(
    reducers,
    compose(applyMiddleware(...middlewares)),
  );
  return store;
}
