import React, {Component} from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

class User extends Component{

    
    render(){
        const {user, rank} = this.props
        let numQAnswered = _.size(user.answers)
        let numQAsked = _.size(user.questions)
        let totalQ = numQAnswered + numQAsked
        return(
        <div className="leaderboard-user">
        Rank #{rank}
             <img
                    src={user.avatarURL}
                    className='avatar'
                />
            {user.name}
            <div className="user-detail">
            <h4>total score {totalQ}</h4>
            <h6>questions answered {numQAnswered}</h6>
            <h6>questions asked {numQAsked}</h6>
            </div>
            

        </div>)
    }

    

}


export default connect()(User)