

// const notesContainer = document.querySelector(".nameOfContainer")

import { NoteAsHTML } from "./Note.js"
import { deleteNote, getNotes, useNotes } from "./NotesDataProvider.js"
import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js"

const contentElement = document.querySelector(".notesContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("noteStateChanged", () => NoteList())

// render function will take two arguments. 
// 1. Variable representing useNotes() 
// 2. Variable representing useCriminals()
const render = (noteCollection, criminalCollection) => {
    contentElement.innerHTML = noteCollection.map(note => {
        //use the stored criminalId to find the criminal name
        const relatedCriminal = criminalCollection.find(criminal => criminal.id === parseInt(note.criminalId))
    
      return NoteAsHTML(note, relatedCriminal)
     
    }).join("")
}

export const NoteList = () => {
    getNotes()
        .then(getCriminals)
        .then(() => {
            const notes = useNotes().reverse()
            const criminals = useCriminals()
            render(notes, criminals)
        })
}


// listens for delete button

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteNote--")) {
        const [prefix, id] = clickEvent.target.id.split("--")

        // delete function imported from NotesDataProvider
        deleteNote(id)
    }
})


