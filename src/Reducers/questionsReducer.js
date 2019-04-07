
import {GET_QUESTIONS, ADD_QUESTION, ADD_QUESTION_ANSWER} from '../Actions/questions'
export default function questionsReducer(state={},action){
    switch(action.type){
        case GET_QUESTIONS:
        return{
            ...state,
            ...action.questions
        }
        case ADD_QUESTION:
        return{
            ...state,
            [action.question.id]:action.question
        }

        case ADD_QUESTION_ANSWER:
        return{
            ...state,
            [action.answer.qid]:{
                ...state[action.answer.qid],
                [action.answer.answer]:{
                    ...state[action.answer.qid][action.answer.answer],
                    votes: state[action.answer.qid][action.answer.answer].votes.concat(action.answer.user)
                    
                }
            }
            
        }


        default:
        return state
    }
}