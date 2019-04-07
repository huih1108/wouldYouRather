export const SET_USER = "SET_USER"
export const LOG_OUT = "LOG_OUT"

export function setUser(authUser){
    return{
        type: SET_USER,
        authUser
    }
}

export function logOut(){
    return{
        type: LOG_OUT
    }
}