
export const NoteAsHTML = (note, criminal) => {
    // convert object to HTML string
    // return the string
    return `
        <section class="note">
        <h3>Suspect:</h3>
        <h4>${criminal.name}</h4>
        <div>Author: ${note.author}</div>
        ${note.noteText}
        ${new Date(note.timestamp).toLocaleDateString('en-US')}
        <button id="deleteNote--${note.id}">Delete</button>
        </section>
        `
}




