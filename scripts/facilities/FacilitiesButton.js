// add button to <div class="facility__button"></div>

// identify where the button will go
const contentTarget = document.querySelector(".facility__button")

// function responsible for adding the button 
export const renderFacilityButton = () => {
    contentTarget.innerHTML = `
        <button id="facility__button">List Facilities</button>
    `
} 

const eventHub = document.querySelector(".container")

// click event on the facility button
eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "facility__button") {
        const customEvent = new CustomEvent("facilityButtonClicked", {
            detail: {}
        })
        eventHub.dispatchEvent(customEvent)
    }
})

