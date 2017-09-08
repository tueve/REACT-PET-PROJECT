import React, {Component} from 'react'
import {Switch,Route, BrowserRouter as Router} from 'react-router-dom'

// import Containers
import Homepage from './Homepage'
import TodoApp from './TodoApp'

//import Components
import NavRes from '../components/Nav/Nav'

class App extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
            <Router>
                <div>
                    <NavRes/>
                    <Switch>
                        <Route path='/' exact component={Homepage}/>
                        <Route path='/homepage' component={Homepage}/>
                        <Route path='/todo' component={TodoApp}/>
                        <Route render={()=>{return (<p>Not found</p>)}}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App