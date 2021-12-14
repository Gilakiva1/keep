
export const NoteFilter = ({onSetFilter}) => {

    return (
        <select className="filters" onChange={onSetFilter} name="filters" id="filters">
            <option value="all">All</option>
            <option value="note-txt">Text</option>
            <option value="note-img">Image</option>
            <option value="note-todos">Todos</option>
            <option value="note-video"> video</option>
        </select>
    )

}