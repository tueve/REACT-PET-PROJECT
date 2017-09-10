import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

//import component
import UserItem from './UserItem'

const UserList = ({users, emotionEvent, likeList, removeEvent, showFilter, showGender, path}) => {
    let userList = showFilter === 'all' ? users : users.filter(user => likeList.indexOf(user.email) !== -1)
    userList = showGender === 'both' ? userList : userList.filter(user => user.gender ===showGender )
    return(
        <div>
            <div className='user-list__wrapper'>
                <ReactCSSTransitionGroup
                    transitionName='user-animation'
                    transitionEnterTimeout={1000}
                    transitionLeaveTimeout={1000}
                    className='user-list__wrapper'
                >
                    {userList.map(user=>
                            <UserItem
                                likeStatus = {likeList.indexOf(user.email)}
                                name = {user.name.first}
                                email = {user.email}
                                imgURL = {user.picture.large}
                                key = {user.email}
                                gender = {user.gender}
                                emotionEvent = {emotionEvent}
                                removeEvent = {removeEvent}
                                path = {path}
                                data = {user}
                            />
                        )}
                </ReactCSSTransitionGroup>
            </div>
        </div>
    )
}

export default UserList