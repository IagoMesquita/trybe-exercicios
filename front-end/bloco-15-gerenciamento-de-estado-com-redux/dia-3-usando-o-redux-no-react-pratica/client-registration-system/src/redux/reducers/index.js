import { combineReducers } from 'redux';
import clientesReducer from './clientesReducer';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({ clientesReducer, loginReducer });

export default rootReducer;
