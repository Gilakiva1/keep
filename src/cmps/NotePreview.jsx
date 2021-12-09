import { NoteImg } from "./NoteImg"
import { NoteTodos } from "./NoteTodos"
import { NoteTxt } from "./NoteTxt"
import { NoteVideo } from "./NoteVideo"

export const NotePreview = (props) => {


    const DynamicCmp = () => {
        switch (props.note.type) {
            case 'note-txt':
                return <NoteTxt {...props} loadNotes={props.loadNotes} />
            case 'note-img':
                return <NoteImg {...props} loadNotes={props.loadNotes} />
            case 'note-todos':
                return <NoteTodos {...props} loadNotes={props.loadNotes} />
            case 'note-video':
                return <NoteVideo {...props} loadNotes={props.loadNotes} />
            default:
                return <div>Error loading note</div>
        }
    }
    const { note } = props

    return (
        <DynamicCmp {...note} />
    )
}