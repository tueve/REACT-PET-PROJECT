// import dependency
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

// import component
import App from './containers/App'
import configStore from './redux/store/configStore'

//import SCSS file 
import './index.scss'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'

const store = configStore()

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'))