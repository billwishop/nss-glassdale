/*  
    Responsible for getting alibis related to a single 
    criminal and displaying them in a list. 
    Getting data from criminals json. known_associates.
*/

import { useCriminals } from "./CriminalProvider.js"


// listen for dispatch from criminal.js
// const foundCriminal = useCriminals().find(criminalObj => criminalObj.id === eventObj.detail.criminalId)


const eventHub = document.querySelector(".container")

export const alibiButtonFunction = () => { 

    eventHub.addEventListener("alibiButtonClicked", event => {
        console.log(event.detail.criminalId)

        const arrayOfCriminals = useCriminals()

        const foundCriminal = arrayOfCriminals.find((criminalObj) => {
            return criminalObj.id === parseInt(event.detail.criminalId)
        })
        console.log("foundCriminal", foundCriminal)
        render(foundCriminal)
    })
}


const render = (criminalObj) => {
    const alibiTarget = document.querySelector(`#alibi--${criminalObj.id}`)

    let person = 1

    alibiTarget.innerHTML = `
    <div class="alibi__list">
        ${criminalObj.known_associates.map(alibiObj => {
            return `
                <h4>Alibi ${person++}:</h4>
                <p>${alibiObj.name}</p>
                <p>Alibi: ${alibiObj.alibi}</p>
            `
        }).join("")}
    </div>
    `
}


