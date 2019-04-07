import React, { Component } from 'react'
import { connect } from 'react-redux'
import {ProgressBar, Button} from 'react-bootstrap'
import {handleSaveQuestionAnswer} from '../Actions/questions'
import { Redirect } from 'react-router-dom'
import ErrorPage from './ErrorPage'
class QuestionDetails extends Component {
    
    state={
        checkOne: false,
        checkTwo: false
    }

    handleOnClickOptionOne=(e)=>{
        this.setState({
            checkOne:true,
            checkTwo:false
        })
    }

    handleOnClickOptionTwo=()=>{
        this.setState({
            checkOne:false,
            checkTwo:true
        })
    }

    handleSubmit=()=>{
        if(this.state.checkOne){
            console.log(this.props.question.id)
            this.props.handleSaveQuestionAnswer({
                user:this.props.user.id,
                answer:"optionOne",
                qid:this.props.question.id})
        }else{
            this.props.handleSaveQuestionAnswer({
                user:this.props.user.id,
                answer:"optionTwo",
                qid:this.props.question.id})
        }
    }

    render() {
        console.log(this.props.match.params)

        const{id} = this.props.match.params
        console.log(id)

        const { question, user,users,questions } = this.props
        console.log(Object.keys(questions).includes(id))
        console.log(Object.keys(questions))
        if(id && !Object.keys(questions).includes(id)){
             return <ErrorPage />
         }
         else{
        

        let optionOneVoted = question.optionOne.votes.includes(user.id)
        let optionTwoVoted = question.optionTwo.votes.includes(user.id)
        let optionOneVotes = question.optionOne.votes.length
        let optionTwoVotes = question.optionTwo.votes.length
        let totalVotes = optionOneVotes+optionTwoVotes
        let optionOnePercent = Math.round((optionOneVotes / totalVotes * 100))
        let optionTwoPercent = Math.round((optionTwoVotes / totalVotes * 100))
        let questionAnswered = optionOneVoted || optionTwoVoted
    

        return (<div>
             <img
                    src={users[question.author].avatarURL}
                    className='avatar'
                />
                {users[question.author].name} asks you
            <h3>Would you rather?</h3>

            <fieldset className={optionOneVoted?"question-voted":"question-unvoted"}>
            <legend>{optionOneVoted && <div className="vote-indicator"> You voted for: </div>}</legend>
            <input type="radio"  
            value={question.optionOne.text} 
            checked={optionOneVoted?optionOneVoted:this.state.checkOne} 
            disabled={questionAnswered}
            onChange={this.handleOnClickOptionOne}/>
            <label >{question.optionOne.text}</label>
            {questionAnswered &&
            <ProgressBar now={optionOnePercent} label={`${optionOneVotes} out of ${totalVotes} voted; ${optionOnePercent}%`} />
            }
            </fieldset>
            
            
            <fieldset className={optionTwoVoted?"question-voted":"question-unvoted"}>
            <legend>{optionTwoVoted && <div className="vote-indicator"> You voted for: </div>}</legend>
            
            <input type="radio"  
            value={question.optionTwo.text}
            checked={optionTwoVoted?optionTwoVoted:this.state.checkTwo} 
            disabled={questionAnswered}
            onChange={this.handleOnClickOptionTwo} />
            <label >{question.optionTwo.text}</label>
            {questionAnswered && 
            <ProgressBar now={optionTwoPercent} label={`${optionTwoVotes} out of ${totalVotes} voted; ${optionTwoPercent}%`} />
            }
            </fieldset>

            {!questionAnswered && <Button onClick={this.handleSubmit}>Submit</Button>}
            
        </div>)
    }
}

}

function mapStatetoProps(store, props) {
    const { id } = props.match.params
    console.log(id)
    return {
        question: store.questionsReducer[id],
        user: store.usersReducer[store.setUserReducer],
        questions: store.questionsReducer,
        users: store.usersReducer
    }
}

export default connect(mapStatetoProps,{handleSaveQuestionAnswer})(QuestionDetails)