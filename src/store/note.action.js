
export function loadNotes(notes,filterBy = '') {
    return (dispatch) => {
        dispatch({ type: 'SET_NOTES', notes })
    }

}

