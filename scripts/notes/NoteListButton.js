//<div class="button noteList__button"></div>


const contentTarget = document.querySelector(".noteList__button")

export const renderHideNoteListButton = () => {
    contentTarget.innerHTML = `
        <button id="hide__noteList__button">Hide Note List</button>
    `
}

const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "hide__noteList__button") {
        const customEvent = new CustomEvent("hideNoteList", {
            detail: {}
        })
        eventHub.dispatchEvent(customEvent)
        renderDisplayNoteListButton()
    }
})

const renderDisplayNoteListButton = () => {
    contentTarget.innerHTML = `
        <button id="display__noteList__button">Display Note List</button>
    `
}

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "display__noteList__button") {
        const customEvent = new CustomEvent("displayNoteList", {
            detail: {}
        })
        eventHub.dispatchEvent(customEvent)
        renderHideNoteListButton()
    }
})