import { AddNote } from "../cmps/AddNote"
import { NoteList } from "../cmps/NoteList"
import { noteService } from "../service/note.service"
import { useEffect, useState } from 'react';
import { NoteFilter } from "../cmps/NoteFilter";
import { useDispatch, useSelector } from "react-redux";
import { loadNotes } from "../store/note.action";
import { userService } from "../service/user.service";

export const KeepApp = () => {

    const [filterBy, setFilterBy] = useState('')
    const notes = useSelector(state => state.noteModule.notes)
    const dispatch = useDispatch();
    const loggedInUser = useSelector(state => state.userModule.loggedInUser);

    useEffect(async () => {
        const notes = await noteService.query()
        dispatch(loadNotes(notes, filterBy))
    }, [])

    const onSetFilter = async ({ target }) => {
        setFilterBy(target.value)
        const notes = await noteService.query(target.value)
        dispatch(loadNotes(notes))
    }

    if (!notes) return <div>Loading...</div>
    return (
        <section className='note-app'>
            {
                loggedInUser &&
                < AddNote />
            }
            {loggedInUser &&<NoteFilter onSetFilter={onSetFilter} />}
            {loggedInUser &&<NoteList notes={notes} />}
        </section>
    )
}