import { AddNote } from "../cmps/AddNote"
import { NoteList } from "../cmps/NoteList"
import { noteService } from "../service/note.service"
import { useEffect, useState } from 'react';
import { NoteFilter } from "../cmps/NoteFilter";
import { useDispatch, useSelector } from "react-redux";
import { loadNotes } from "../store/note.action";

export const KeepApp = () => {

    const [filterBy, setFilterBy] = useState(null)
    const notes = useSelector(state => state.noteModule.notes)
    const dispatch = useDispatch();

    useEffect(async ()  => {
        const notes = await  noteService.query(filterBy)
        dispatch(loadNotes(notes,filterBy))
    }, [])

    const onSetFilter = async ({ target }) => {
        console.log('value', target.value);
        setFilterBy(target.value)
        dispatch(loadNotes(filterBy))
    }

    if (!notes) return <div>Loading...</div>
    return (
        <section className='note-app'>
            <AddNote />
            <NoteFilter onSetFilter={onSetFilter} />
            <NoteList notes={notes} />
        </section>
    )
}