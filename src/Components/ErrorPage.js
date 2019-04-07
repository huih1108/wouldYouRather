import React, {Component} from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { Button } from 'react-bootstrap';
import {logOut} from '../Actions/setUser'

class ErrorPage extends Component{

    
    render(){
        return(<h3>Sorry, the information you are requesting is not found.</h3>)
    }

    

}

export default ErrorPage