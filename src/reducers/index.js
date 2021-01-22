import { darkMode } from './darkMode';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
    darkModeState: darkMode
})