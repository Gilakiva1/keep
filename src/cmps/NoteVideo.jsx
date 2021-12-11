import { NoteTools } from "./NoteTools";
import { TxtNote } from "./TxtNote";

const { useState } = require("react");


export const NoteVideo = (props) => {

    const [isEdit, setIsEdit] = useState(false)


    const youTubeFixed = () => {
        const note = props
        let { url } = props.info
        let fixedUrl = url.split('?v=')
        return `https://www.youtube.com/embed/${fixedUrl[1]}`
    }

    const note = this.props
    const backgroundColor = note.style

    return (
        <div style={backgroundColor} className="note-video" >
            {note.info.title && <TxtNote note={note} type="title"  />}
            <iframe src={youTubeFixed} frameBorder="0"></iframe>
            {note.info.txt && <TxtNote note={note} type="txt"  />}
            <NoteTools note={note}  />
        </div >
    )
}