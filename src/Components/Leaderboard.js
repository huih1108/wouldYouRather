import React, {Component} from 'react'
import { connect } from 'react-redux'
import User from './User'
import _ from 'lodash'

class Leaderboard extends Component{

    
    render(){
        const {users} = this.props
        let rank = 0
        console.log(users)
        console.log(typeof(users))
        let usersRanking
        let sortedUser
        // sortedUser = typeof(users)
    
        sortedUser = _.sortBy(users,(user) => 
        -(_.size(user.answers)+_.size(user.questions)))
         console.log(sortedUser)
         usersRanking = _.map(sortedUser, (user, index) => 
         <User key={user.id} user={user} rank={index+1} />)
        
        return(<div>{usersRanking}</div>)
    }

    

}

function mapStatetoProps(store){
    
    return{
        users: store.usersReducer
    }
        
}
export default connect(mapStatetoProps)(Leaderboard)