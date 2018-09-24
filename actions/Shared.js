import { receiveUsers } from './Users'
import { getInitialData } from '../api'
import { receiveQuestions } from './Questions'
import {hideLoading, showLoading} from 'react-redux-loading-bar'
import {authenticateUser} from '../actions/AuthenticatedUser'

export function handleInitialData() {
  return (dispatch) => {
       dispatch(showLoading())
    return getInitialData()
      .then(({ authedUser,users, questions }) => {
        dispatch(receiveQuestions(questions))
        dispatch(receiveUsers(users))
        dispatch(authenticateUser(authedUser))
         dispatch(hideLoading())
      })
  }
}