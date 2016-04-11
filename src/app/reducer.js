import {fromJS, List, Map} from 'immutable';
import * as reductions from './reductions.js';

export const defaultState = fromJS({
});

export const reducer = (state = defaultState, action) => {
  let act = action;
  console.log('action');
  switch(action.type){
    case 'SET_STATE': // merge the provided state into the current state
      return reductions.setState(state, action.state);
    case 'REPLACE_STATE': // replace the current state with the provided state entirely
      return reductions.replaceState(state, action.state);
    case 'RESET_STATE': // replace the current state with the default state
      return reductions.replaceState(state, defaultState);
  }
  return state;
}

export default reducer;
