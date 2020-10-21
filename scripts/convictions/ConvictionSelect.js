

import { getConvictions, useConvictions} from "./ConvictionsProvider.js"

// where the HTML will be rendered
const contentTarget = document.querySelector(".filters__crime")
const eventHub = document.querySelector(".container")

// on the event hub, listen for a "change" event
eventHub.addEventListener("change", (changeEvent) => {
    // only do this if the crimeSelect element was change
    if (changeEvent.target.id === "crimeSelect") {
        // Create custom event 
        const customEvent = new CustomEvent("crimeSelected", {
            detail: {
                crimeThatWasChosen: parseInt(changeEvent.target.value)
            }
        })

        eventHub.dispatchEvent(customEvent)
    }
})


const render = convictionsCollection => {
    contentTarget.innerHTML = `
        <select class="dropdown" id="crimeSelect">
            <option value="0">Please select a crime...</option>
            ${convictionsCollection.map(
                convictionObj => {
                    return `<option value="${convictionObj.id}">${convictionObj.name}</option>`
                }
            ).join("")
        }
        </select>
        ` 
}

export const ConvictionSelect = () => {
    getConvictions().then(() => {
        const convictions = useConvictions()
        render(convictions)
    })
}