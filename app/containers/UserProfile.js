import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

//import action 
import userActions from '../redux/actions/UserAPIActions/usersAction'

//import child component
import User from '../components/UserAPI/User'

class UserProfile extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const data = this.props.location.query || []
        
        return(
            <div className='user-profile'>
                {Object.entries(data).length > 0 ? <User data ={data}/> : <h2>user not found</h2>}
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({action: bindActionCreators(userActions,dispatch)})


export default connect(null,mapDispatchToProps)(UserProfile)