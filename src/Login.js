import React from 'react';
import  './fontStyle/Login.css';
import  {auth,provider} from './firebase';
import {Button} from '@material-ui/core';
import {useDispatch} from 'react-redux';
import {userlogin} from './features/userActions';
function Login() {
    const dispatch = useDispatch();
    const signIn = ()=>{
            auth.signInWithPopup(provider)
            .then(({user})=>{
                dispatch(userlogin({
                    displayName: user.displayName,
                    email:user.email,
                    photoUrl:user.photoURL
                }))
            })
            .catch((error)=>{
                alert(error.message);
            })     
    }
    return (
        <div className='login'>
            <div className="login_container">
              <img src="/gplogo.png" />
               <Button color="primary" variant="contained" onClick={signIn}>Login</Button>
            </div>
        </div>
    )
}

export default Login
