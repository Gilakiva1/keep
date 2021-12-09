import { AddNote } from "../cmps/AddNote"
import { NoteList } from "../cmps/NoteList"
import { noteService } from "../service/note.service"
import { useEffect, useState } from 'react';
import { NoteFilter } from "../cmps/NoteFilter";

export const KeepApp = () => {

    const [notes, setNotes] = useState([])
    const [filterBy, setFilterBy] = useState(null)

    useEffect(async () => {
        await loadNotes()
    }, [])

    const onSetFilter = async({target}) => {
        console.log('value',target.value);
        setFilterBy(target.value)
        await loadNotes()
    }

    const loadNotes = async () => {
        console.log('filterBy',filterBy);
        const currNotes = await noteService.query(filterBy)
        setNotes([...currNotes])
    }


    if (!notes) return <div>Loading...</div>
    return (
        <section className='note-app'>
            <AddNote loadNotes={loadNotes} />
            <NoteFilter onSetFilter={onSetFilter} />
            <NoteList notes={notes} loadNotes={loadNotes} />
        </section>
    )
}