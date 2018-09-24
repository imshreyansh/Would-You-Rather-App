import {saveQuestion,saveQuestionAnswer} from '../api'
import {showLoading,hideLoading} from 'react-redux-loading-bar'
import {handleInitialData} from './Shared'

export const ADD_QUESTION='ADD_QUESTION'
export const RECEIVE_QUESTIONS='RECEIVE_QUESTIONS'
export const ADD_ANSWER_QUESTION='ADD_ANSWER_QUESTION'

export function addQuestion(question){
    return{
        type:ADD_QUESTION,
        question
    }
}

export function receiveQuestions(questions){
    return{
        type:RECEIVE_QUESTIONS,
        questions
    }
}

function addAnswerQuestion (authedUser, qid, answer) {
    return {
        type: ADD_ANSWER_QUESTION,
        authedUser,
        qid,
        answer
    }
}

export function handleAddQuestion(optionOneText, optionTwoText){
    return(dispatch,getState)=>{
    const{authedUser}=getState()
    dispatch(showLoading())
        return saveQuestion({
           optionOneText, optionTwoText,
            author:authedUser
        }).then((question) => {
                dispatch(addQuestion(question))
                dispatch(hideLoading())
            })
    }
}

export function handleAnswerQuestion(qid, answer) {
    return (dispatch, getState) => {
        const {authedUser} = getState()
        dispatch(showLoading())
        return saveQuestionAnswer(authedUser, qid, answer)
            .then(() => {
                dispatch(addAnswerQuestion(authedUser, qid, answer))
                dispatch(hideLoading())
            })
    }

}