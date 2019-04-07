import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { Tab, Tabs } from 'react-bootstrap'
import QuestionItem from './QuestionItem'

class QuestionsPage extends Component {



    render() {
        let answered;
        let unanswered;
        const { questions, user, users } = this.props
        console.log(questions)
        console.log(user.questions.includes("8xf0y6ziyjabvozdd253nd"))
        answered = _.filter(questions, question => {
            console.log(Object.keys(user.answers))
            return Object.keys(user.answers).includes(question.id)
        }).sort((a,b,) => b.timestamp - a.timestamp)
        unanswered = _.filter(questions, question => {
            return !Object.keys(user.answers).includes(question.id)
        }).sort((a,b,) => b.timestamp - a.timestamp)

        
        //console.log(questions.filter(question => question.id ==="6ni6ok3ym7mf1p33lnez"))
        return (<div>
            <Tabs defaultActiveKey="unanswered">
                <Tab eventKey="unanswered" title="Unanswered Questions">

                    {unanswered && unanswered.map(question =>
                        
                        <div key={question.id}>
                        <QuestionItem question={question} user={users[question.author]} />
                            </div>)}
                </Tab>
                <Tab eventKey="answered" title="Answered Questions">
                    {answered && answered.map(question =>
                        <div key={question.id}>
                           <QuestionItem question={question} user={users[question.author]} /></div>)}
                </Tab>

            </Tabs>

        </div>)
    }

}

function mapStatetoProps(store) {

    return {
        questions: store.questionsReducer,
        user: store.usersReducer[store.setUserReducer],
        users: store.usersReducer
    }

}

export default connect(mapStatetoProps)(QuestionsPage)