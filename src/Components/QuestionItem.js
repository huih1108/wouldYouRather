import React, {Component} from 'react'
import {formatDate} from '../utils/helpers'
import { Link } from 'react-router-dom'

class QuestionItem extends Component{


    render(){
        const {question, user} = this.props
        return(
            <Link to={`/question/${question.id}`} className='question'>
            <div key={question.id} className="question-item">
                <img
                    src={user.avatarURL}
                    className='avatar'
                />
                <div>{user.name}</div>
                <div className="question-text">
                Would you rather {question.optionOne.text} or {question.optionTwo.text}
                </div>
                <div className="question-time">@{formatDate(question.timestamp)}</div>
                </div>
                </Link>)
    }

}

export default QuestionItem