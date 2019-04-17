import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { getUsers } from '../Actions/users'
import { setUser } from '../Actions/setUser'
import { connect } from 'react-redux'
import _ from 'lodash'



class Login extends Component {
    state = {
        option: ''
    }

    componentDidMount() {
        this.props.getUsers()
        console.log('componentDidMount')
    }
    setOption = (e) => {
        this.setState({option: e.target.value})
    }
    authUser = () => {
        console.log(this.state.option)
        if(this.state.option.length==0){
            console.log(this.state.option)
            alert("Please select an option")
        } else{
        this.props.setUser(this.state.option)
        }

    }
    render() {
        const { users } = this.props
        let usersSelection
        if (_.size(users) > 0) {

            usersSelection = _.map(users, user => { return (<option value={user.id} key={user.id}>{user.name}</option>) })
        }

        return (
            <div className='login' >
                <div >Please select one of the users to login.</div>
                <select onChange={this.setOption}>
                    <option>..select one..</option>
                    {usersSelection}
                </select>
                <div>
                    <Button onClick={this.authUser}>submit</Button>
                </div>

            </div>
        )

    }


}

function mapStatetoProps(store) {
    return {
        users: store.usersReducer
    }
}


export default connect(mapStatetoProps, { getUsers, setUser })(Login)