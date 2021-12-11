import { NotePreview } from "./NotePreview"

export const NoteList = ({ notes }) => {

    return (
        <div className='note-list'>
            {notes.map(note => <NotePreview key={note.id} note={note} />)}
        </div>
    )
}