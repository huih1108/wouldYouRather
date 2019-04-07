
import {SET_USER, LOG_OUT} from '../Actions/setUser'
export default function setUserReducer(state=null,action){
    switch(action.type){
        case SET_USER:
        return action.authUser
        case LOG_OUT:
        return null
        default:
        return state
    }
}