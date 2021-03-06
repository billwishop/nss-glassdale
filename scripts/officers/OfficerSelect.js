
// Responsible for Officer drop down and broadcasting a change 

import { getOfficers, useOfficers } from "./OfficerProvider.js"

const officersFilterContainer = document.querySelector(".filters__officer")
const eventHub = document.querySelector(".container")

export const OfficerSelect = () => {
    console.log("OfficerSelect: Get data from API and render drop down to the DOM.")

    getOfficers().then(() => {
        const officersArray = useOfficers()
        console.log("officersArray within the .then()", officersArray)

        render(officersArray)

    })
    
}

const render = (officers) => {
    officersFilterContainer.innerHTML = `
            <select class="dropdown" id="officerSelect">
                <option value="0">Please select an officer...</option>
                ${officers.map(
                    officerObj => {
                        return `<option value="${officerObj.name}">${officerObj.name}</option>`
                    }
                ).join("")       
            }
            </select> 
    `
}


eventHub.addEventListener("change", (changeEvent) => {
    if(changeEvent.target.id === "officerSelect") {
        const officerSelectedEvent = new CustomEvent("officerSelected", {
            detail: {
                officerName: changeEvent.target.value
            }
        })
        
        eventHub.dispatchEvent(officerSelectedEvent)
    }
})
            
    