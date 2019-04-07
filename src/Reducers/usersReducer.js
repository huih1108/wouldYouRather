
import {GET_USERS} from '../Actions/users'
import {ADD_QUESTION,ADD_QUESTION_ANSWER} from '../Actions/questions'
export default function usersReducer(state={},action){
    switch(action.type){
        case GET_USERS:
        return{
            ...state,
            ...action.users
        }
        case ADD_QUESTION_ANSWER:
        return{
            ...state,
            [action.answer.user]:{
                ...state[action.answer.user],
                answers:{
                    ...state[action.answer.user].answers,
                    [action.answer.qid]: action.answer.answer
                }
            }
        }
        case ADD_QUESTION:
        return{
            ...state,
            [action.question.author]:{
                ...state[action.question.author],
                questions: state[action.question.author].questions.concat(action.question.id)
            }
        }

        default:
        return state
    }
}