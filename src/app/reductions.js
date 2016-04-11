import Immutable, {List, Map} from 'immutable';
// import range from '../util/range';
// import shuffle from '../util/shuffle';

export const setState = (state, newState) => state.merge(newState);

export const replaceState = (state, newState) => newState || new Map();
