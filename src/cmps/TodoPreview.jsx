import { useEffect, useState } from "react"
import { noteService } from "../service/note.service"
import editImg from '../assets/img/keep/edit.png'
import vImg from '../assets/img/keep/v.png'
import xImg from '../assets/img/keep/x.png'

import removeIcone from '../assets/img/keep/remove.png'

export const TodoPreview = (props) => {
    const [isDone, setIsDone] = useState(false)
    const [isEdit, setIsEdit] = useState(false)

    useEffect(() => {
        const { todo } = props
        setIsDone(todo.doneAt)
    })

    const toggleTodo = (isDoneTodo) => {
        if (isDoneTodo) {
            setIsEdit(isEdit)
            setIsDone(Date.now())
        } else {
            setIsEdit(isEdit)
            setIsDone(null)
        }
        toggleEdit()
    }

    const toggleEdit = () => {
        setIsEdit(!isEdit)
    }


    const onRemoveTodo = () => {
        const { id } = props
        noteService.removeTodo(id, props.idx)
            .then(() => {
                props.loadNotes()
            })
        //    eventBusService.emit('user-msg', 'todo removed successfully')
    }

    const { todo } = props

    return (
        <div className="todos todo ">
            <span className={(isDone) ? 'todo-complete' : ''}>
                {todo.txt}
            </span>
            {!isEdit && <img className="edit" src={editImg} onClick={toggleEdit} alt="" />}
            {!isEdit && <img className="todo-done" src={removeIcone} onClick={onRemoveTodo} alt="" />}
            {isEdit && <img className="todo-done" src={vImg} onClick={() => { toggleTodo(true) }} alt="" />}
            {isEdit && <img className="todo-done" src={xImg} onClick={() => { toggleTodo(false) }} alt="" />}
        </div>
    )
}