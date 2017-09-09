const initialState = {
    todos: []
}

export default function todoReducers(state=initialState, action) {
    switch(action.type){
        case 'add_todo':
            return {
                todos: [
                    ...state.todos,
                    {
                        id: state.todos.length ,
                        text: action.text,
                        completed: false
                    } 
                ]
            }
        case 'edit_todo':
            return {
                todos: [
                    ...state.todos.map(todo =>   
                            todo.id ===action.id ? Object.assign({},todo,{
                                text: action.text,
                                completed: todo.completed
                            }) : todo
                    )
                ]
            }
        case 'remove_todo':
            return {
                todos: [
                    ...state.todos.filter(todo=>todo.id !==action.id)
                ]
            }
        case 'complete_todo':
            return {
                todos: [
                    ...state.todos.map(todo => todo.id === action.id ? Object.assign({},todo,{completed: !todo.completed}) : todo )
                ]
            }
        case 'complete_all':
            return {
                todos: [
                    state.todos.map(todo => console.log(todo))
                ]
            }
        case 'clear_all':
            return initialState
        default:
            return state
    }
}