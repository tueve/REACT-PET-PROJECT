import React,{Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import todosAction from '../redux/actions/todosAction'

//import css 
import '../components/Todo/todo.scss'

// import bootstrap component
import {Button, Col, Row, Modal} from 'react-bootstrap'

//import child component
import TodoItemInput from '../components/Todo/TodoItemInput'
import TodoItem from '../components/Todo/TodoItem'

class TodoApp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showModalAdd : false,
            showModalEdit: false,
            textTodo: '',
            textEdit: '',
            idEdit: 0
        }
        this.openModalAdd = this.openModalAdd.bind(this)
        this.closeModalAdd = this.closeModalAdd.bind(this)
        this.openModalEdit = this.openModalEdit.bind(this)
        this.closeModalEdit = this.closeModalEdit.bind(this)
        this.editHandle = this.editHandle.bind(this)
        this.addHandle = this.addHandle.bind(this)
    }

    openModalAdd() {this.setState({showModalAdd: true})}
    closeModalAdd(){this.setState({showModalAdd:false})}
    openModalEdit(idEdit,textEdit) {this.setState({showModalEdit: true, textEdit, idEdit})}
    closeModalEdit(){this.setState({showModalEdit:false})}
    editHandle(){
        this.props.action.edit_todo(this.state.idEdit,this.state.textEdit)
        this.closeModalEdit()
    }
    addHandle(){
        this.props.action.add_todo(this.state.textTodo)
        this.closeModalAdd()
    }

    render() {
        const completedTodo = this.props.todo.todos.filter(todo => todo.completed === true).length
        const unoCompletedTodo = this.props.todo.todos.filter(todo => todo.completed === false).length

        return(
            <div>
                <div className='container'>
                <h2 className='todo-header'>TODO APP</h2>
                    <Row>
                        <Col sm ={6}>
                            <h2>TO DO LIST</h2>
                            <div className={unoCompletedTodo ? 'todo-list__wrapper' : '' } >
                                { this.props.todo.todos.filter(todo => todo.completed === false).map(todo => 
                                    <TodoItem 
                                        key={todo.id}
                                        id={todo.id} 
                                        completed={todo.completed} 
                                        text={todo.text}
                                        editHandle = {this.openModalEdit}
                                        removeHandle = {id => this.props.action.remove_todo(id)}
                                        completeHandle = {id => this.props.action.complete_todo(id) }
                                        />
                                )}
                            </div>
                            <Button bsSize='sm' bsStyle="primary" onClick={this.openModalAdd}>add</Button>
                        </Col>
                        <Col sm ={6}>
                            <h2>COMPLETED LIST</h2>
                            <div className={completedTodo ? 'todo-list__wrapper completed': ''}>
                                { this.props.todo.todos.filter(todo => todo.completed === true).map(todo => 
                                    <TodoItem 
                                        key={todo.id}
                                        id={todo.id} 
                                        completed={todo.completed} 
                                        text={todo.text}
                                        editHandle = {this.openModalEdit}
                                        removeHandle = {id => this.props.action.remove_todo(id)}
                                        completeHandle = {id => this.props.action.complete_todo(id) }
                                        />
                                )}
                            </div>
                        </Col>
                    </Row>
                    <Modal
                        show={this.state.showModalAdd}
                        onHide={this.closeModalAdd}
                        container={this}
                        aria-labelledby="contained-modal-title"
                        >
                        <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title">ADD TODO</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <TodoItemInput getText = {text => this.setState({textTodo: text})}/>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button  bsSize='sm' onClick={this.addHandle}> ADD</Button>
                            <Button bsSize='sm' onClick={this.closeModalAdd}>CLOSE</Button>
                        </Modal.Footer>
                    </Modal>
                    <Modal
                        show={this.state.showModalEdit}
                        onHide={this.closeModalEdit}
                        container={this}
                        aria-labelledby="contained-modal-title"
                        >
                        <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title">EDIT TODO</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <TodoItemInput getText = {text => this.setState({textEdit: text})} text={this.state.textEdit}/>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button bsSize='sm' onClick={this.editHandle}> DONE</Button>
                            <Button bsSize='sm' onClick={this.closeModalEdit}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = state => ({ todo: state.todo })
const mapDispatchToProps = dispatch => ({action: bindActionCreators(todosAction,dispatch)})

export default connect(mapStateToProps,mapDispatchToProps)(TodoApp)