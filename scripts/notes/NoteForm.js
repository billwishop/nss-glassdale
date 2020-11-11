// render form html

import { saveNote } from "./NotesDataProvider.js"
import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")




const render = (criminals) => {
    contentTarget.innerHTML = `
        <input id="note--dateOfInterview" type="date" />
        <input id="note--author" type="text" placeholder="Your Name Here" />
         <select id="note--criminal" class="criminalSelect">
            <option value="0">Please select a criminal...</option>
            ${criminals.map(
                criminal => {
                    return `<option value="${criminal.id}">${criminal.name}</option>`
                }
            ).join("")
        }   
         </select>
        <textarea id="note--note" placeholder="Your Note Here"></textarea>
        <button id="saveNote">Save Note</button>
    `
}


eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "saveNote") {
        const dateOfInterview = document.querySelector("#note--dateOfInterview").value
        const author = document.querySelector("#note--author").value
        const criminalId = document.querySelector(".criminalSelect").value
        const noteText = document.querySelector("#note--note").value
        const timestamp = Date.now()

        const newNote = {
            dateOfInterview,
            timestamp,
            author,
            criminalId,
            noteText
        }

        saveNote(newNote)
   
    }
})


export const NoteForm = () => {
    getCriminals().then(() => { 
        const criminalArray = useCriminals()
        render(criminalArray)
    })
}

eventHub.addEventListener("hideNoteButtonClicked", () => {
    contentTarget.style.display = "none";
})

eventHub.addEventListener("displayNoteButtonClicked", () => {
    contentTarget.style.display = "";
})
