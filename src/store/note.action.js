// import { storgeService } from "../service/storage.service";

import { noteService } from "../service/note.service"


export function loadNotes(notes,filterBy = '') {
    console.log(notes);
    return (dispatch) => {
        dispatch({ type: 'SET_NOTES', notes })
    }

}

