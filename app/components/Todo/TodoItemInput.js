import React, { Component} from 'react'

const TodoItemInput = (props) => {
    return (
        <div>
            <span className='fa fa-fw fa-question'></span>
            <input type='text' onChange={e => props.getText(e.target.value)} placeholder={props.text} className='todo__input'/>
        </div>
    )
}

export default TodoItemInput