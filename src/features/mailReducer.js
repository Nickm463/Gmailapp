import {OPEN_SEND_MESSSAGE,CLOSE_SEND_MESSSAGE,SELECT_MAIL} from '../features/mailConstant'
import {initialState} from './initialState';


const mailReducer = (state= initialState,action)=>{
       switch(action.type){
         case OPEN_SEND_MESSSAGE : return {...state,sendMessageIsOpen : true}
         case CLOSE_SEND_MESSSAGE : return {...state,sendMessageIsOpen : false}
         case SELECT_MAIL: return {...state,selectedMail : action.payLoad}
         default  : return state
        }
       
}


export default mailReducer;