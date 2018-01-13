import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import testReducer from './testReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  testReducer,
  fuelSavings,
  routing: routerReducer
});

export default rootReducer;
