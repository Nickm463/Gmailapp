import {initialState} from './initialState';
import {USER_LOGIN,USER_LOGOUT} from './userConstant';

 const userReducer = (state=initialState,action)=>{
    switch(action.type){
        case USER_LOGIN : return {...state,user: action.userLoaded}
        case USER_LOGOUT : return {...state,user: action.userLoaded}
        default: return state
    }
}

export default userReducer;

