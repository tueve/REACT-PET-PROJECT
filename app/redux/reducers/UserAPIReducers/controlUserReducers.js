const initialState = {
    typeFilter: 'all',
    typeGender: 'both',

}

export default function controlFilter(state = initialState, action) {
    switch(action.type) {
        case 'showFilter':
            return Object.assign({},state,{
                typeFilter: action.typeFilter
            })
        case 'showGender':
            return Object.assign({},state,{
                typeGender: action.typeGender
            })
        default:
            return state
    }
}