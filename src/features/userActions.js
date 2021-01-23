import {USER_LOGIN,USER_LOGOUT} from './userConstant';

export const userlogin =(user)=>{
    return {
        type:USER_LOGIN,
        userLoaded:user
    }
}

export const userlogout =(user)=>{
    return {
        type:USER_LOGOUT,
        userLoaded:user
    }
}