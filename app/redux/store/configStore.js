import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/rootReducer'

const configStore = () => createStore(
    rootReducer,
    applyMiddleware(thunk)
)

export default configStore