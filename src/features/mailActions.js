import {OPEN_SEND_MESSSAGE,CLOSE_SEND_MESSSAGE,SELECT_MAIL} from '../features/mailConstant';


export const openSendMail = ()=>{
    return {
        type: OPEN_SEND_MESSSAGE
    }
}

export const closeSendMail = ()=>{
    return {
        type: CLOSE_SEND_MESSSAGE
    }
}

export const selectMail = (mail)=>{
    return {
        type: SELECT_MAIL,
        payLoad: mail
    }
}
