import React from 'react';
import './fontStyle/Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton,Avatar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { userlogout } from './features/userActions';
import { auth } from './firebase';

 const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3.4),
      height: theme.spacing(3.4),
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  }));
// const avatarStyle ={
//     margin: '.5em 0 0 .5em'
// }

function Header(props) {
    const classes = useStyles();
    const user = useSelector(state=>state.user.user);
    const dispatch = useDispatch();
    const signOut = ()=>{
        auth.signOut().then(()=>{
          dispatch(userlogout(null));
        })
    }
    return (
        <div className="header">
         <div className="header_left">
             <div>
             <IconButton>
                 <MenuIcon/>
             </IconButton>
             </div>
             <div>
             <img src="/gp.png" />
             </div>
         </div>

         <div className="header_middle">
        
         <SearchIcon/>
         <input placeholder="Search mail" type="text" />
         <ArrowDropDownIcon />
         </div>

         <div className="header_right">
             <IconButton>
                 <AppsIcon/>
             </IconButton>
             <IconButton>
                 <NotificationsIcon/>
             </IconButton>
             <Avatar onClick={signOut} src={user.photoUrl}   className={`${classes.small} avatarStyle`} />
               
         </div>
        
        </div>
    );
}

export default Header;