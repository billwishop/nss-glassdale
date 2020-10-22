

// const notesContainer = document.querySelector(".nameOfContainer")

import { NoteAsHTML } from "./Note.js"
import { getNotes, useNotes } from "./NotesDataProvider.js"

const contentElement = document.querySelector(".notesContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("noteStateChanged", () => NoteList())


export const NoteList = () => {
    getNotes()
    .then(() => {
        const allNotes = useNotes()
        render(allNotes)
    })
}

const render = (notesArray) => {
    let notesHTMLRep = ""
    for (const note of notesArray) {
        notesHTMLRep += NoteAsHTML(note) 
    }
    contentElement.innerHTML = `
                ${notesHTMLRep}
            `
}