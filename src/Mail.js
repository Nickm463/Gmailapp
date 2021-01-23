import React from 'react';
import './fontStyle/Mail.css';
import {useHistory} from 'react-router-dom';
import {IconButton} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import EmailIcon from '@material-ui/icons/Email';
import DeleteIcon from '@material-ui/icons/Delete';
import ErrorIcon from '@material-ui/icons/Error';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PrintIcon from '@material-ui/icons/Print';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import {useSelector} from 'react-redux';

function Mail(props) {
    const history = useHistory();
    const mail = useSelector(state=>state.mail.selectedMail);
    const goBackMailList = ()=>{
        history.push("/")
    }
    return (
        <div className="mail">
            <div className="mail_tools">
              <div className="mail_toolsLeft">
              <IconButton onClick={goBackMailList}>
                   <ArrowBackIcon />
                </IconButton>
               <IconButton>
                   <ErrorIcon />
                </IconButton>
               <IconButton>
                   <DeleteIcon />
                </IconButton>
               <IconButton>
                   <EmailIcon />
                </IconButton>
                <IconButton>
                   <WatchLaterIcon />
                </IconButton>
                <IconButton>
                   <CheckCircleIcon />
                </IconButton>
                <IconButton>
                   <LabelImportantIcon />
                </IconButton>
                <IconButton>
                   <MoreVertIcon />
                </IconButton>

              </div>
               <div className="mail_toolsRight">
                 <IconButton>
                     <UnfoldMoreIcon />
                 </IconButton>
                 <IconButton>
                     <PrintIcon />
                 </IconButton>
                 <IconButton>
                     <ExitToAppIcon />
                 </IconButton>
               </div>
            </div>
             <div className="mail_body">
               <div className="mail_bodyHeader">
                   <h2>{mail?.subject}</h2>
                   <LabelImportantIcon className="mail_important"></LabelImportantIcon>
                    <p>{mail?.title}</p>
                    <p className="mail_time">{mail?.time}</p>
               </div>
                <div className="mail_message">
                    <p>
                    {mail?.description}
                    </p>
                </div>
             </div>
        </div>
    )
}

export default Mail
