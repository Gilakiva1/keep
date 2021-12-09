import { useState } from "react"
import { NoteTools } from "./NoteTools"
import { TxtNote } from "./TxtNote"

export const NoteTxt = (props) => {

    const [isEdit, setIsEdit] = useState(false)
    const {note} = props
    const backgroundColor = note.style
    if (!note.info.title && !note.info.txt) return
    return (
        <div style={backgroundColor} className="note-txt" >
            {note.info.title && <TxtNote note={note} type="title" loadNotes={props.loadNotes} />}
            {note.info.txt && <TxtNote note={note} type="txt" loadNotes={props.loadNotes} />}
            <NoteTools note={note} loadNotes={props.loadNotes} />
        </div >
    )
}