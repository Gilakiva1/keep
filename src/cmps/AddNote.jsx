import { useEffect, useState } from "react"
import { useForm } from "../hooks/useForm"
import { noteService } from "../service/note.service"
import chatImg from '../assets/img/keep/chat.png'
import list from '../assets/img/keep/list1.png'
import AddImg from '../assets/img/keep/add-image.png'
import videoImg from '../assets/img/keep/video.png'
import { loadNotes } from "../store/note.action"
import { useDispatch } from "react-redux"

export const AddNote = (props) => {
    const todoIds = ['adsfgasdf', 'asdfvmadfskl', '23f245rf8urewf', 'adfsm=e3498r', '234234f89j4f3']
    const dispatch = useDispatch();

    const [type, setType] = useState('note-txt')
    const [todos, setTodos] = useState([''])
    const [isAdd, setIsAdd] = useState(false)
    const [formField, handleChange] = useForm({ title: '', url: '', txt: '' });

    const addTypeNote = (ev) => {
        const value = ev.target.name;
        setType(value)
    }

    const onSaveNewNote = async () => {
        const { url, title, txt } = formField
        if (type === 'note-todos' && !title && !txt && !todos) return
        if (type === 'note-txt' && !title && !txt) return
        if (!title && !txt && url) return
        await noteService.saveNewNote({ title, txt, type, url, todos, isAdd });
        const notes = await noteService.query()
        dispatch(loadNotes(notes))
    }



    const addTodo = () => {
        let currTodo = todos
        currTodo.push('')
        setTodos([...currTodo])

    }

    const handleTodo = ({ target }) => {
        let currTodos = [...todos]
        const idx = +target.name;
        currTodos[idx] = target.value
        setTodos(currTodos)
    }
    const { url, title, txt } = formField
    return (
        <form className="new-note" >
            <input className="title" name='title' value={title} onChange={handleChange} placeholder="Add New Title..." type="text" />
            {(type === 'note-img' || type === 'note-video') &&
                <input className="url" name='url' value={url} onChange={handleChange} placeholder="Add Url" type="text" />}
            {type === 'note-todos' &&

                todos.map((todo, idx) => {
                    return <input name={idx} key={todoIds[idx]} className="todos" value={todo} onChange={handleTodo} placeholder="Add Todo" type="text" />
                })}

            {type === 'note-todos' && <button type="button" onClick={addTodo}>+</button>}
            <input className="txt" name='txt' value={txt} onChange={handleChange} placeholder="Add New Text..." type="text" />
            <div className="tools flex">
                <img className={type === 'note-txt' ? 'mark' : ''} onClick={addTypeNote} name="note-txt" src={chatImg} alt="" />
                <img className={type === 'note-todos' ? 'mark' : ''} onClick={addTypeNote} name="note-todos" src={list} alt="" />
                <img className={type === 'note-img' ? 'mark' : ''} onClick={addTypeNote} name="note-img" src={AddImg} alt="" />
                <img className={type === 'note-video' ? 'mark' : ''} onClick={addTypeNote} name="note-video" src={videoImg} alt="" />
                <button onClick={onSaveNewNote} type="button">Add Note !</button>
            </div>
        </form>
    )
}