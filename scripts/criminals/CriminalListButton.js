// add button to <div class="criminal__button"></div>

// identify where the button will go
const contentTarget = document.querySelector(".criminal__button")

// function responsible for adding the button 
export const renderCriminalButton = () => {
    contentTarget.innerHTML = `
        <button id="criminal__button">List Criminals</button>
    `
} 

const eventHub = document.querySelector(".container")

// click event on the criminal button
eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "criminal__button") {
        const customEvent = new CustomEvent("criminalButtonClicked", {
            detail: {}
        })
        eventHub.dispatchEvent(customEvent)
    }
})