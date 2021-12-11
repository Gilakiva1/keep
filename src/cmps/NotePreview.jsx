import { NoteImg } from "./NoteImg"
import { NoteTodos } from "./NoteTodos"
import { NoteTxt } from "./NoteTxt"
import { NoteVideo } from "./NoteVideo"

export const NotePreview = (props) => {


    const DynamicCmp = () => {
        switch (props.note.type) {
            case 'note-txt':
                return <NoteTxt {...props} />
            case 'note-img':
                return <NoteImg {...props} />
            case 'note-todos':
                return <NoteTodos {...props} />
            case 'note-video':
                return <NoteVideo {...props} />
            default:
                return <div>Error loading note</div>
        }
    }
    const { note } = props

    return (
        <DynamicCmp {...note} />
    )
}