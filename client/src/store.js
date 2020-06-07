import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootRedcer from './reducers';

const initialState = {};

const middlware = [thunk];

const store = createStore(
	rootRedcer,
	initialState,
	composeWithDevTools(applyMiddleware(...middlware))
);

export default store;
