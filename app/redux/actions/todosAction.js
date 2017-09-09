export default {
    add_todo: text => ({type:'add_todo', text}),
    edit_todo: (id,text) => ({type:'edit_todo', text, id }),
    remove_todo: id => ({type: 'remove_todo', id}),
    complete_todo: id => ({type: 'complete_todo', id}),
    complete_all: () => ({type: 'complete_all'}),
    clear_all: () => ({type: 'clear_all'})
}