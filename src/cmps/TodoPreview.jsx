import { useEffect, useState } from "react"
import { noteService } from "../service/note.service"
import editImg from '../assets/img/keep/edit.png'
import vImg from '../assets/img/keep/v.png'
import xImg from '../assets/img/keep/x.png'
import removeIcone from '../assets/img/keep/remove.png'
import { loadNotes } from "../store/note.action"
import { useDispatch } from "react-redux"

export const TodoPreview = ({ todo, note, idx }) => {
    const [isDone, setIsDone] = useState(todo.doneAt)
    const [isEdit, setIsEdit] = useState(false)
    const dispatch = useDispatch();

    useEffect(() => {

    })

    const toggleTodo = async (isDoneTodo) => {
        if (isDoneTodo) {
            setIsEdit(isEdit)
            setIsDone(true)
            await noteService.doneTodo(idx, isDone, note)
        } else {
            setIsEdit(isEdit)
            setIsDone(null)
        }
        toggleEdit()
    }

    const toggleEdit = () => {
        setIsEdit(!isEdit)
    }


    const onRemoveTodo = async () => {
        await noteService.removeTodo(note,idx)
        const notes = await noteService.query()
        dispatch(loadNotes(notes))
        //    eventBusService.emit('user-msg', 'todo removed successfully')
    }


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