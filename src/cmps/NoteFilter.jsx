import { useState } from "react"

export const NoteFilter = (props) => {

    return (
        <select className="filters" onChange={props.onSetFilter} name="filters" id="filters">
            <option value="">All</option>
            <option value="note-txt">Text</option>
            <option value="note-img">Image</option>
            <option value="note-todos">Todos</option>
            <option value="note-video"> video</option>
        </select>
    )

}