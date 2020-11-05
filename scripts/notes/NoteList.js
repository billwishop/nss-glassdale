

// const notesContainer = document.querySelector(".nameOfContainer")

// import { NoteAsHTML } from "./Note.js"
import { getNotes, useNotes } from "./NotesDataProvider.js"
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
        
        return `
            <section class="note">
                <h3>Suspect:</h3>
                <h4>${relatedCriminal.name}</h4>
                <div>Author: ${note.author}</div>
                ${note.noteText}
                ${new Date(note.timestamp).toLocaleDateString('en-US')}
            </section>
        `
    }).join("")
}

export const NoteList = () => {
    getNotes()
        .then(getCriminals)
        .then(() => {
            const notes = useNotes()
            const criminals = useCriminals()
            render(notes, criminals)
        })
}



// const render = (notesArray) => {
//     let notesHTMLRep = ""
//     for (const note of notesArray) {
//         notesHTMLRep += NoteAsHTML(note) 
//     }
//     contentElement.innerHTML = `
//                 ${notesHTMLRep}
//             `
// }

// export const NoteList = () => {
//     getNotes()
//     .then(() => {
//         const allNotes = useNotes()
//         render(allNotes)
//     })
// }