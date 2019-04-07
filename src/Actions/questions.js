import { showLoading, hideLoading } from 'react-redux-loading'
import {saveQuestion, saveQuestionAnswer} from '../utils/api'

export const GET_QUESTIONS = "GET_QUESTIONS"
export const ADD_QUESTION = "ADD_QUESTION"
export const ADD_QUESTION_ANSWER= "ADD_QUESTION_ANSWER"



export function receiveQuestions(questions){
    return{
        type: GET_QUESTIONS,
        questions
    }
}

export function addQuestion(question){
    return{
        type: ADD_QUESTION,
        question
    }
}

export function addQuestionAnswer(answer){
    console.log("addQuestionAnswer")
    return{
        type: ADD_QUESTION_ANSWER,
        answer
    }
}

export function handleAddQuestion(question, callback){
    return (dispatch)=>{
        //const { optionOneText } = getState()
        //console.log(optionOneText)

    dispatch(showLoading())

    return saveQuestion({
        optionOneText:question.optionOneText,
        optionTwoText:question.optionTwoText,
         author: question.author

    })
      .then((questions) => dispatch(addQuestion(questions)))
      .then(() => dispatch(hideLoading()))
      .then(()=> callback())
    }
}

export function handleSaveQuestionAnswer(questionAnswer){
    return (dispatch)=>{

    dispatch(showLoading())

    return saveQuestionAnswer({
        authedUser:questionAnswer.user,
        qid:questionAnswer.qid,
        answer: questionAnswer.answer

    })
      .then(() => dispatch(addQuestionAnswer(questionAnswer)))
      .then(() => dispatch(hideLoading()))
      //.then(()=> callback())
    }
}

