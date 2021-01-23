import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { IconButton } from '@material-ui/core';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import './fontStyle/EmailRow.css';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {selectMail} from './features/mailActions';

function EmailRow({id,title,subject,description,time}) {
    const history = useHistory();
    const dispatch = useDispatch();
    
    const emailRowClickEvent =()=>{
        history.push("/Mail");
        dispatch(selectMail({id,title,subject,description,time}))
    }
    return (
        <div className="emailRow" onClick={emailRowClickEvent} >
            <div className="emailRow_options">
            <Checkbox/>
             <IconButton>
                 <StarBorderIcon/>
             </IconButton>
             <IconButton>
                 <LabelImportantIcon/>
             </IconButton>
            </div>
            <div className="emailRow_title">
               {title}
            </div>
            <div className="emailRow_message">
            <h4>
                {subject}
                 <span className="emailRow_description">
                      {description}
                 </span> 
            </h4>
           </div>
           <div className="emailRow_time">
              {time}
          </div>
        </div>
    )
}

export default EmailRow
