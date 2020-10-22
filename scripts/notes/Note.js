
export const NoteAsHTML = (noteObj) => {
    // convert object to HTML string
    // return the string
    return `
        <div class="note">
            <h3>Author: ${noteObj.author}</h3>
            <p>Suspect: ${noteObj.suspect}</p>
            <p>Date of Interview: ${noteObj.dateOfInterview}</p>
            <p>Time Note Entered: ${new Date(noteObj.timestamp).toLocaleDateString('en-US')}</p>
            <p>Note: ${noteObj.note}</p>
        </div>
    `
}




