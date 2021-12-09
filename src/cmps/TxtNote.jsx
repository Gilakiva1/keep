import { useEffect, useState } from "react"
import { noteService } from "../service/note.service"
import editImg from '../assets/img/keep/edit.png'
import vImg from '../assets/img/keep/v.png'
import xImg from '../assets/img/keep/x.png'
import { useForm } from "../hooks/useForm"

export const TxtNote = (props) => {

    const [isEdit, setIsEdit] = useState(false)
    const [formField, handleChange] = useForm( {txt:props.note.info[props.type]} );

    const toggleEdit = () => {
        setIsEdit(!isEdit)
    }

    const saveEdit = () => {
        const note = props.note;
        const type = props.type

        if (!note.title && !note.info.txt) {
            noteService.removeNote(note.id)
            toggleEdit()
            props.loadNotes()
        }else {
            noteService.setEditTxt(txt, note.id, type)
        }
        toggleEdit()
        props.loadNotes()
    }

    const exitEditor = () => {
        toggleEdit()
    }

    const note = props.note;
    const type = props.type
    const {txt} = formField
    return (
        <div className="container flex">
            {note.info[type] && type === 'title' && !isEdit && <h1 className="title">{note.info.title}</h1>}
            {note.info[type] && type === 'txt' && !isEdit && <p className="txt">{note.info.txt}</p>}
            {note.info[type] && isEdit && <input name='txt' onChange={handleChange} type='text' value={txt} />}
            {note.info[type] && !isEdit && <img className="edit" src={editImg} onClick={toggleEdit} alt="" />}
            {note.info[type] && isEdit && <img className="edit-done" src={vImg} alt="" onClick={saveEdit} />}
            {note.info[type] && isEdit && <img className="edit-done" src={xImg} alt="" onClick={exitEditor} />}
        </div>
    )
}