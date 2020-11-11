// <div class="note__button"></div>

const contentTarget = document.querySelector(".note__button")

export const renderHideNoteFormButton = () => {
    contentTarget.innerHTML = `
        <button id="hide__note__button">Hide Note Form</button>
    `
}

const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "hide__note__button") {
        const customEvent = new CustomEvent("hideNoteButtonClicked", {
            detail: {}
        })
        eventHub.dispatchEvent(customEvent)
        renderDisplayNoteFormButton()
    }
})

const renderDisplayNoteFormButton = () => {
    contentTarget.innerHTML = `
        <button id="display__note__button">Display Note Form</button>
    `
}

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "display__note__button") {
        const customEvent = new CustomEvent("displayNoteButtonClicked", {
            detail: {}
        })
        eventHub.dispatchEvent(customEvent)
        renderHideNoteFormButton()
    }
})