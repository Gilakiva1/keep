import { useState } from "react"
import { noteService } from "../service/note.service"
import removeIcone from '../assets/img/keep/remove.png'
import bgc from '../assets/img/keep/bgc.png'
import { useDispatch } from "react-redux"
import { loadNotes } from "../store/note.action"
export const NoteTools = (props) => {

    const [color, setColor] = useState('')
    const dispatch = useDispatch();

    const onRemoveNote = async () => {
        const note = props.note
        noteService.removeAllNote(note._id)
        const notes = await noteService.query()
        dispatch(loadNotes(notes))
    }

    const note = props.note
    return (
        <div className='note-tools'>
            <img className='edit-done' src={removeIcone} onClick={onRemoveNote} />
        </div>
    )

}