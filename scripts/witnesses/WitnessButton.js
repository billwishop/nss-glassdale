const contentTarget = document.querySelector(".witness__button")
const eventHub = document.querySelector(".container")

export const renderWitnessButton = () => {
    contentTarget.innerHTML = `
        <button id="witness__button">Witness Statements</button>
    `
} 

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "witness__button") {
        // 
        const customEvent = new CustomEvent("witnessButtonClicked", {
            detail: {}
        })
        eventHub.dispatchEvent(customEvent)
    }
})