

import { getCriminals, useCriminals } from "./CriminalProvider.js"
import { criminalCardMaker } from "./Criminal.js"
import { useConvictions } from "../convictions/ConvictionsProvider.js"


const eventHub = document.querySelector(".container")

eventHub.addEventListener("crimeSelected", (event) => {
    

    if(event.detail.crimeThatWasChosen !== 0) {

        console.log("Crime has been selected.", event.detail.crimeThatWasChosen)

        const criminalsArray = useCriminals()
        console.log("array of criminals", criminalsArray)

        const convictionsArray = useConvictions()
        console.log("array of convictions", convictionsArray)

        const convictionThatWasChosen = convictionsArray.find(convictionObj => {
            return convictionObj.id === event.detail.crimeThatWasChosen
        })
        console.log("convictionThatWasChosen", convictionThatWasChosen)

        const filteredCriminalsArray = criminalsArray.filter(criminalObj => {
            return criminalObj.conviction === convictionThatWasChosen.name
        })
        console.log("filteredCriminalsArray", filteredCriminalsArray)
    
        render(filteredCriminalsArray)
    } 
})



const render = (filteredArray) => {
    let criminalsHTMLRep = ""
    for (const criminalObj of filteredArray) {
        criminalsHTMLRep += criminalCardMaker(criminalObj)
    }
    const contentElement = document.querySelector(".criminalsContainer")
    contentElement.innerHTML = `
        <section class="criminalsList">
            ${criminalsHTMLRep}
        </section>
        `
}


export const CriminalList = () => {
    getCriminals().then(() => {
        const criminals = useCriminals() 

        let criminalHTMLRep = ""

        for (const criminalObj of criminals) {
            criminalHTMLRep += criminalCardMaker(criminalObj)
        }
        const contentElement = document.querySelector(".criminalsContainer")
        contentElement.innerHTML += criminalHTMLRep
     } )
    
}