import { useState } from "react"
import { NoteTools } from "./NoteTools"
import { TxtNote } from "./TxtNote"

export const NoteImg = (props) => {

    const [isEdit, setIsEdit] = useState()

    const toggleEdit = () => {
        setIsEdit(!isEdit)
    }

    const { note } = props
    const backgroundColor = note.style

    return (
        <div style={backgroundColor} className="note-img">
            <img className="image" src={note.info.url} alt="" />
            <TxtNote className="txt" note={note} type="txt" />
            <NoteTools note={note} />
        </div>
    )

}