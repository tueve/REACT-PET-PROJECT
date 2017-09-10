import React,{Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ReactCSSTransitionGroup  from 'react-addons-css-transition-group'

//import actions 
import todosAction from '../redux/actions/TodoActions/todosAction'

//import css 
import '../components/Todo/todo.scss'

// import bootstrap component
import {Button, Col, Row, Modal} from 'react-bootstrap'
import { bootstrapUtils } from 'react-bootstrap/lib/utils'
bootstrapUtils.addStyle(Modal, 'custom-todo');

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
        const completedList = this.props.todo.todos.filter(todo => todo.completed === true)
        const todoList = this.props.todo.todos.filter(todo => todo.completed === false)
        const completedTodo = completedList.length
        const unoCompletedTodo = todoList.length
        const todoListWrapper = completedTodo > 0 ? (unoCompletedTodo > 0 ? 6 : 0 ) : 12
        const displayNone = unoCompletedTodo === 0 ? 'todo-action__item hide' : 'todo-action__item'

        return(
            <div>
                <div className='container'>
                <h2 className='todo-header'>TODO APP</h2>
                    <div className='todo-action__wrapper'>
                        <div className='todo-action__item add'>
                            <Button bsSize='sm' bsStyle="success" onClick={this.openModalAdd} block>ADD</Button>
                        </div>
                        <div className={displayNone}>
                            <Button bsSize='sm' bsStyle="danger" onClick={()=>this.props.action.clear_all()} block>CLEAR</Button>
                        </div>
                        <div className={displayNone}>
                            <Button bsSize='sm' bsStyle="primary" onClick={()=>this.props.action.complete_all()} block>COMPLETE</Button>
                        </div>
                    </div>
                    <Row>
                        <Col sm ={todoListWrapper}>
                            { unoCompletedTodo > 0 && <h2 className='todo-title'>TO DO LIST</h2> }
                            
                            <div className={unoCompletedTodo ? 'todo-list__wrapper' : '' } >
                                { todoList.map(todo =>
                                    <ReactCSSTransitionGroup
                                        transitionName="example"
                                        transitionAppear={true}
                                        transitionAppearTimeout={500}
                                        transitionEnter={false}
                                        transitionLeave={false}>
                                        <TodoItem 
                                            key={todo.id}
                                            id={todo.id} 
                                            completed={todo.completed} 
                                            text={todo.text}
                                            editHandle = {this.openModalEdit}
                                            removeHandle = {id => this.props.action.remove_todo(id)}
                                            completeHandle = {id => this.props.action.complete_todo(id) }
                                        />
                                    </ReactCSSTransitionGroup>
                                )}
                            </div>
                        </Col>
                        <Col sm ={12-todoListWrapper}>
                            { completedTodo > 0 && <h2 className='todo-title'>COMPLETED LIST</h2> }
                            <div className={completedTodo ? 'todo-list__wrapper completed': ''}>
                                { completedList.map(todo => 
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
                        bsStyle ='custom-todo'
                        >
                        <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title">ADD TODO</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <TodoItemInput getText = {text => this.setState({textTodo: text})} eventKeyPress = {this.addHandle}/>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button  bsSize='sm' bsStyle='success' onClick={this.addHandle}> ADD</Button>
                            <Button bsSize='sm'  bsStyle='warning' onClick={this.closeModalAdd}>CLOSE</Button>
                        </Modal.Footer>
                    </Modal>
                    <Modal
                        show={this.state.showModalEdit}
                        onHide={this.closeModalEdit}
                        container={this}
                        aria-labelledby="contained-modal-title"
                        bsStyle ='custom-todo'
                        >
                        <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title">EDIT TODO</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <TodoItemInput getText = {text => this.setState({textEdit: text})} text={this.state.textEdit} eventKeyPress = {this.editHandle}/>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button bsSize='sm' bsStyle='success' onClick={this.editHandle}> DONE</Button>
                            <Button bsSize='sm' bsStyle='warning' onClick={this.closeModalEdit}>CLOSE</Button>
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