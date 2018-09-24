import {addUser} from '../api'
import {showLoading,hideLoading} from 'react-redux-loading-bar'
export const RECEIVE_USERS='RECEIVE_USERS'

export function receiveUsers(users){
    return{
        type:RECEIVE_USERS,
        users
    }
}

export function addNewUser(username,name,avatarURL){
    return(dispatch)=>{
        dispatch(showLoading())
        return addUser({username,name,avatarURL}).then((users)=>{
             dispatch(receiveUsers(users))
            dispatch(hideLoading())

        })
    }
}