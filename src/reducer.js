
const reducer = (state,action) => {
    switch (action.id) {
        case 'CLEAR_ALL':
            return []
        case 'ADD_USER':
            return [action.payload,...state]
    
        default:
            return state;
    }
    
}

export default reducer
