import {TEST_MESSAGE} from '../constants/actionTypes';

const testReducer = (state = {}, action) => {
  switch (action.type) {
    case TEST_MESSAGE:
      return action.test;
    default:
      return state;
  }
};

export default testReducer;
