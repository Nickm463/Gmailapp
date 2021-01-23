import './App.css';
import React ,{useEffect} from 'react';
import Header from './Header';
import SideBar from './SideBar';
import Mail from './Mail';
import EmailList from './EmailList';
import SendMail from './SendMail';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import Login from './Login';
import { auth } from './firebase';
import { userlogin } from './features/userActions';

function App() {
  const sendMessageIsOpen = useSelector(state=>state.mail.sendMessageIsOpen);
  const user = useSelector(state=>state.user.user);
  const dispatch =  useDispatch();
           
  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
       if(user){
         dispatch(userlogin({
          displayName: user.displayName,
          email:user.email,
          photoUrl:user.photoURL
         }))
       }
    })
  },[])


  return (
      <Router>
      {!user?(
        <Login/>
      ):
      <div className="app">
      <Header />
       <div className="app_body">
       <SideBar />
       <Switch>
         <Route path="/mail">
          <Mail/>
         </Route>
         <Route path="/">
          <EmailList/>
         </Route>
       </Switch>
       </div>
       {sendMessageIsOpen && <SendMail/>} 
    </div>
    }
      
    </Router>

    
  );
}

export default App;
