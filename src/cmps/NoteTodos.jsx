import { useState } from "react"
import { NoteTools } from "./NoteTools"
import { TodoPreview } from "./TodoPreview"
import { TxtNote } from "./TxtNote"

export const NoteTodos = (props) => {
    const [isEdit, serIsEdit] = useState(false)

    const { note } = props
    const backgroundColor = note.style
    return (
        <div style={backgroundColor} className="todo-continuer">
            {note.info.label && <TxtNote note={note} type="label" />}
            {note.info.todos.map((todo, idx) => <TodoPreview key={Math.random()} todo={todo} idx={idx} note={note} />)}
            <NoteTools note={note} />
        </div>
    )
}