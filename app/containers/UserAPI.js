import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


//import action
import fetchData from '../redux/actions/fetchData'
import usersAction from '../redux/actions/UserAPIActions/usersAction'
import filterAction from '../redux/actions/UserAPIActions/controlUserAction'

//import bootstrap component
import {Row, Col, Button} from 'react-bootstrap'

//import css
import '../components/UserAPI/user.scss'

//import child component
import UserList from '../components/UserAPI/UserList'
import Control from '../components/UserAPI/Control'
import SearchBox from '../components/UserAPI/SearchBox'
import UserSearchList from '../components/UserAPI/UserSearchList'

class UserAPI extends Component {
    constructor(props){
        super(props)
        this.state = {
            searchText: ''
        }
    }

    componentWillMount(){
        this.getUserData()
    }

    getUserData() {
        const userURL = 'https://randomuser.me/api/?results=10'
        this.props.action.increase_page_get()
        this.props.fetchUsers(`${userURL}&page=${this.props.page}`)
    }

    render() {
        const { users, action, likeList, filter, typeFilter, typeGender ,match} = this.props
        const searchText = this.state.searchText
        const searchResult = users.filter(user=> user.name.first.indexOf(searchText)!==-1)

        return (
            <div className='container'>
                    <h2>USER API</h2>
                    <SearchBox onChangeHandle ={searchText=>this.setState({searchText})}/>
                    {searchResult.length > 0 && searchText.length > 0 && <UserSearchList userResult= {searchResult}/>}
                    <Control 
                        filterLike ={filter.filter} 
                        filterGender = {filter.gender} 
                        showFilter={typeFilter}
                        showGender={typeGender}
                    />

                    <UserList 
                        users={users} 
                        emotionEvent={action.emotionHandle} 
                        likeList = {likeList} 
                        removeEvent={action.remove}
                        showFilter={typeFilter} 
                        showGender={typeGender}
                        path = {match.url}
                    />
                    <Button  
                        bsSize='sm' 
                        bsStyle='primary' 
                        onClick={()=>this.getUserData()}
                    >
                    LOAD MORE
                    </Button>
            </div>
        )
    }
}

const mapStateToProps = state => Object.assign({},state.users,state.controlUser)
const mapDispatchToProps = dispatch => ({
    fetchUsers: url => dispatch(fetchData(url)),
    action: bindActionCreators(usersAction,dispatch),
    filter: bindActionCreators(filterAction,dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(UserAPI)