const initialState = {
    notes: []
}

export function noteReducer(state = initialState, action) {
    var newState = state;
    switch (action.type) {
        case 'SET_NOTES':
            newState = { ...state, notes: [...action.notes] }
            break;
        case 'ADD_NOTES':
            newState = { ...state, notes: [...action.notes] }
            break;
        
            

    }
    // For debug:
    window.userState = newState;
    return newState;
}
