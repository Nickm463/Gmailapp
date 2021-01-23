import React from 'react';
import './fontStyle/SendMail.css';
import CloseIcon from '@material-ui/icons/Close';
import {Button} from '@material-ui/core';
import {useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import {closeSendMail} from './features/mailActions';
import {db} from './firebase';
import firebase from 'firebase';
function SendMail() {
    const dispatch = useDispatch();
    const {register,handleSubmit,watch,errors} = useForm();
    const onSubmit = (formData)=>{
        // console.log(data);
        db.collection('emails').add(
           {
             to: formData.to,
             subject:formData.subject,
             message:formData.message,
             timestamp: firebase.firestore.FieldValue.serverTimestamp()
           }    
        );
        dispatch(closeSendMail());
    }
    return (
        <div className="sendMail">
            <div className="sendMail_header">
                <h3>New Message</h3>
                 <CloseIcon  className="sendMail_close"  onClick={()=>dispatch(closeSendMail())} />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name='to' placeholder="To" type="email" ref={register({required:true})} />
                 {errors.to && <p className="sendMail_error">To is required</p>}
                <input name='subject' placeholder="Subject" type="text" ref={register({required:true})}  />
                {errors.subject && <p className="sendMail_error">subject is required</p>}
                <input name='message' placeholder="Message..." className="sendMail_message" type="text" ref={register({required:true})} />
                {errors.message && <p className="sendMail_error">message is required</p>}
                   <div className="sendMail_options">
                      <Button 
                      className="sendMail_send"
                      variant="contained"
                      color="primary"
                      type="submit"
                      >
                      Send
                      </Button>
                   </div>
            </form>
        </div>
    )
}

export default SendMail
