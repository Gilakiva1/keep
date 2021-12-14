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
        await noteService.removeAllNote(note._id)
        const notes = await noteService.query()
        dispatch(loadNotes(notes))
    }

    const onChangeColor = async ({ target }) => {
        const note = props.note;
        var color = target.value;
        await noteService.changeColorNote(note, color)
        const currNotes = await noteService.query()
        dispatch(loadNotes(currNotes))
    }

    const note = props.note
    return (
        <div className='note-tools'>
            <img className='edit-done' src={removeIcone} onClick={onRemoveNote} />
            <label htmlFor={note._id}><img src={bgc} /></label>
            <input id={note._id} className="bg-color" onChange={onChangeColor} type="color" value="#000000"></input>

        </div>
    )

}