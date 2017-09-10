import React from 'react'

//import child component
import UserItemSearch from './UserItemSearch'
  

const UserSearch = (props) => {
    return(
        <div className='user-list-search__wrapper'>
            <h2>UserList</h2>
            {props.userResult.map(user => 
                <UserItemSearch
                    name = {user.name.first}
                    key = {user.email}
                />)}
        </div>
    )
}

export default UserSearch