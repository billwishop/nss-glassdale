
export const NoteAsHTML = (note, criminal) => {
    // convert object to HTML string
    // return the string
    return `
        <section class="note">
        <h3>Suspect:</h3>
        <h4>${criminal.name}</h4>
        <p>${note.noteText}</p>
        <p>${new Date(note.timestamp).toLocaleDateString('en-US')}</p>
        <p>Author: ${note.author}</p>
        <button id="deleteNote--${note.id}">Delete</button>
        </section>
        `
}




