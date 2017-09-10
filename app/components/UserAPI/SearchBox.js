import React from 'react'

const SearchBox = (props) => {
    return (
        <div className='user-search__wrapper'>
            <input type='text' onChange={e=>props.onChangeHandle(e.target.value)}/>
            <span className='fa fa-search'></span>
        </div>
    )
}

export default SearchBox