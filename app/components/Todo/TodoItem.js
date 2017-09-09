import React from 'react'

//import bootstrap component
import { Button, Col, Row } from 'react-bootstrap'

const TodoItem = props => {
    return (
        <div className='todo-item todo-item__wrapper'>
            <Row>
                <Col xs={12} sm={8}>
                    <h3 className='todo-item__text'>{props.text}</h3>
                </Col>
                <Col xs={12} sm={4}>
                    <div className='todo-item__action'>
                        <span className='fa fa-pencil-square-o' onClick = {() => props.editHandle(props.id,props.text)}></span>
                        <span className='fa fa-close' onClick={ () => props.removeHandle(props.id) }></span>
                        {props.completed ?
                            <span className='fa fa-undo' onClick={() => props.completeHandle(props.id)}></span>
                            : <span onClick={() => props.completeHandle(props.id)} className='fa fa-thumbs-o-up'></span>}
                    </div>
                    
                </Col>
            </Row>
            
            
        </div>
    )
}

export default TodoItem