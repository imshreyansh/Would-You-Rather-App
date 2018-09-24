import  {AUTHENTICATE_USER} from '../actions/AuthenticatedUser'
import  {SIGN_OUT} from '../actions/AuthenticatedUser'


export default function authedUser(state = null, action) {
    switch (action.type) {
        case AUTHENTICATE_USER:
            return action.id
        case SIGN_OUT:
            return null
        default:
            return state
    }

}