import { useState } from "react"
import { NoteTools } from "./NoteTools"
import { TodoPreview } from "./TodoPreview"

export const NoteTodos = (props) => {
    const [isEdit, serIsEdit] = useState(false)

    const { note } = props
    const backgroundColor = note.style
    return (
        <div style={backgroundColor} className="todo-continuer">
            {note.info.label && <h1>{note.info.label}</h1>}
            {note.info.todos.map((todo, idx) => <TodoPreview key={Math.random()} todo={todo} idx={idx} id={note.id} />)}
            <NoteTools note={note} />
        </div>
    )
}