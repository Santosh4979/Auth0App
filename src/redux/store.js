import { createStore, combineReducers } from 'redux';
import authReducer from './reducers';

const rootReducer = combineReducers({
  auth: authReducer,
  // other reducers if needed
});

const store = createStore(rootReducer);

export default store;
