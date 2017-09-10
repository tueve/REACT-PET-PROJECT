import React, {Component} from 'react'
import {browserHistory, Switch,Route, BrowserRouter as Router} from 'react-router-dom'

// import Containers
import Homepage from './Homepage'
import About from './About'
import TodoApp from './TodoApp'
import UserAPI from './UserAPI'
import UserProfile from './UserProfile'


//import Components
import NavRes from '../components/Nav/Nav'

class App extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
            <Router history={browserHistory}>
                <div>
                    <NavRes/>
                    <Switch>
                        <Route path='/' exact component={Homepage}/>
                        <Route path='/about' component={About} />
                        <Route path='/homepage' component={Homepage}/>
                        <Route path='/app/todo' component={TodoApp}/>
                        <Route path='/app/userapi'  exact component={UserAPI}/>
                        <Route path='/app/userapi/user' component={UserProfile}/>
                        <Route render={()=>{return (<p>Not found</p>)}}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App