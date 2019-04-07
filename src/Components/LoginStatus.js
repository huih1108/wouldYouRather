import React, {Component} from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { Button } from 'react-bootstrap';
import {logOut} from '../Actions/setUser'

class LoginStatus extends Component{

    handleLogOut=()=>{
        this.props.logOut()
    }
    
    render(){
        const{user}=this.props
        return(
        <div className="loginstatus"> 
         <img
                    src={user.avatarURL}
                    className='avatar'
                />
                {user.name}
                <Button className="loginstatus-logoutbutton"
                onClick={this.handleLogOut}> Logout</Button>
        </div>)
    }

    

}

function mapStatetoProps({usersReducer},{authUser}){
   return{ user: usersReducer[authUser]}
}

export default connect(mapStatetoProps,{logOut})(LoginStatus)