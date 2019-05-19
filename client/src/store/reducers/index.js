import { combineReducers } from 'redux';
import movies from './movies';
import movie from './movie';
import search from './search';

const rootReducer = combineReducers({ movies, movie, search });

export default rootReducer;
