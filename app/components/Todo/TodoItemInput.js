import React, { Component} from 'react'

const TodoItemInput = (props) => {
    return (
        <div>
            <input type='text' onChange={e => props.getText(e.target.value)} placeholder={props.text} className='todo__input' onKeyPress={e=> e.key==='Enter' ? props.eventKeyPress() : false }/>
        </div>
    )
}

export default TodoItemInput