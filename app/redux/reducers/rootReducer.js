import { combineReducers } from 'redux'
import todoReducers from './TodoReducers/todoReducers'
import usersReducers from './UserAPIReducers/usersReducers'
import controlUserReducers from './UserAPIReducers/controlUserReducers'

const rootReducer = combineReducers({
    todo: todoReducers,
    users: usersReducers,
    controlUser: controlUserReducers
})

export default rootReducer