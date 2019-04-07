import {combineReducers} from 'redux'
import usersReducer from './usersReducer'
import setUserReducer from './setUserReducer'
import questionsReducer from './questionsReducer'
import {loadingBarReducer} from 'react-redux-loading'


export default combineReducers({
    usersReducer,
    setUserReducer,
    questionsReducer,
    loadingBar: loadingBarReducer
})