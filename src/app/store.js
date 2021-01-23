import {applyMiddleware, createStore,combineReducers} from 'redux';
import mailReducer from '../features/mailReducer'; 
import userReducer from '../features/userReducer';
import logger from 'redux-logger';
import ThunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

const rootReducer= combineReducers({ mail: mailReducer , user : userReducer });


export const appStore = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger,ThunkMiddleware)))

