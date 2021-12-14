

import { httpService } from './http.service.js';
export const noteService = {
    query,
    doneTodo,
    removeTodo,
    setEditTxt,
    saveNewNote,
    removeAllNote,
    changeColorNote
}

async function changeColorNote(note, color) {
    let currStyle = note.style
    const currColor = {
        backgroundColor: color
    }
    currStyle = currColor
    await httpService.put(`note/todo/color/${note._id}`, currStyle)
}

function removeAllNote(noteId) {
    return httpService.delete(`note/${noteId}`)
}

async function saveNewNote(newNote) {
    var note
    if (newNote.type === 'note-txt') {
        note = {
            type: 'note-txt',
            isPinned: false,
            info: {
                title: newNote.title,
                txt: newNote.txt
            },
            style: {
                backgroundColor: '#a8e6cf'
            }
        }
    } else if (newNote.type === 'note-img') {

        note = {
            type: 'note-img',
            isPinned: false,
            info: {
                title: newNote.title,
                url: newNote.url,
                txt: newNote.txt
            },
            style: {
                backgroundColor: '#a8e6cf'
            }
        }
    } else if (newNote.type === 'note-todos') {
        note = {
            type: 'note-todos',
            info: {
                label: newNote.title,
                todos: addDoneAt(newNote.todos)
            },
            style: {
                backgroundColor: '#a8e6cf'
            }
        }
    } else if (newNote.type === 'note-video') {
        note = {
            type: 'note-video',
            isPinned: false,
            info: {
                title: newNote.title,
                url: newNote.url,
                txt: newNote.txt
            },
            style: {
                backgroundColor: '#a8e6cf'
            }
        }
    }
    await httpService.post('note', note)

}

function addDoneAt(todosNote) {
    var newTodos = []
    for (var i = 0; i < todosNote.length; i++) {
        newTodos.push({
            txt: todosNote[i],
            doneAt: null
        })
    }
    return newTodos

}

async function query(type = 'all') {
    const notes = await httpService.get(`note/${type}`)
    return notes
}


async function doneTodo(todosIdx, isDone, note) {
    let info = note.info
    if (isDone) info.todos[todosIdx].doneAt = true;
    else info.todos[todosIdx].doneAt = false
    await httpService.put(`note/todo/done/${note._id}`, info)
}

async function removeTodo(note, todoIdx) {
    let info = note.info
    info.todos.splice(todoIdx, 1)
    if (!info.todos.length) {
        removeAllNote(note._id)
    }
    await httpService.delete(`note/todo/${note._id}`, info)
}

async function setEditTxt(note, txt, type) {
    let currInfo = note.info
    currInfo[type] = txt
    httpService.put(`note/edit/${note._id}`, currInfo)
}
