import { useState } from "react"
import { noteService } from "../service/note.service"
import removeIcone from '../assets/img/keep/remove.png'
import bgc from '../assets/img/keep/bgc.png'
export const NoteTools = (props) => {

    const [color, setColor] = useState('')

    const onRemoveNote = () => {
        const note = props.note
        noteService.removeAllNote(note)
        props.loadNotes()
    }

    const onChangeColor = (ev) => {
        const note = props.note;
        var color = ev.target.value;
        noteService.changeColorNote(note, color)
        props.loadNotes()
    }

    const note = props.note
    return (
        <div className='note-tools'>
            <img className='edit-done' src={removeIcone} onClick={onRemoveNote} />
            <label htmlFor={note.id}><img src={bgc
            } /></label>
            <input id={note.id} className="bg-color" onChange={onChangeColor} type="color" value="#000000"></input>

        </div>
    )

}