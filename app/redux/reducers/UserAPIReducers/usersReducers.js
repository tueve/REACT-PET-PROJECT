const initialState = {
    users: [],
    isLoading: false,
    hasError: false,
    likeList: [],
    page: 0
}

export default function usersReducers(state=initialState, action) {
    switch(action.type) {
        case 'remove':
            return Object.assign({},state,{
                users: state.users.filter(user => user.email !== action.email)
            })
        case 'increase_page': 
            return Object.assign({},state,{
                page: state.page+1
            })
        case 'emotion':
            return state.likeList.indexOf(action.email) === -1 ?  
            Object.assign({},state,{
                likeList: [
                    ...state.likeList,
                    action.email
                ]
            }) : 
            Object.assign({},state,{
                likeList: state.likeList.filter(email => email !== action.email)
            })

        case 'error':
            return Object.assign({},state,{hasError: action.hasError})
        case 'loading':
            return Object.assign({},state,{isLoading: action.isLoading})
        case 'get_user_data':
            return Object.assign({},state,{
                users: [
                    ...state.users,
                    ...action.users
                ]
            })
        default:
            return state
    }
}