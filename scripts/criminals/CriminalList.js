

import { useCriminals } from "./CriminalProvider.js"
import { criminalCardMaker } from "./Criminal.js"
import { useConvictions } from "../convictions/ConvictionsProvider.js"
import { getFacilities, useFacilities } from "../facilities/FacilityProvider.js"
import { useCriminalFacilities } from "../facilities/CriminalFacilityProvider.js"
import { getCriminalFacilities } from "../facilities/CriminalFacilityProvider.js"

const eventHub = document.querySelector(".container")

eventHub.addEventListener("crimeSelected", (event) => {

    if(event.detail.crimeThatWasChosen !== 0) {

        const criminalsArray = useCriminals()
        const convictionsArray = useConvictions()

        const convictionThatWasChosen = convictionsArray.find(convictionObj => {
            return convictionObj.id === event.detail.crimeThatWasChosen
        })

        const filteredCriminalsArray = criminalsArray.filter(criminalObj => {
            return criminalObj.conviction === convictionThatWasChosen.name
        })
    
        const facilities = useFacilities()
        const crimFac = useCriminalFacilities()

        render(filteredCriminalsArray, facilities, crimFac)
    } 
})

eventHub.addEventListener("criminalButtonClicked", () => CriminalList())

eventHub.addEventListener("officerSelected", officerSelectedEventObj => {
    console.log("CriminalList: officerSelected custom event has been heard on the event hub")
    
    const selectedOfficerName = officerSelectedEventObj.detail.officerName
    console.log(selectedOfficerName)

    const criminalsArray = useCriminals()

    const filteredArrayCriminals = criminalsArray.filter(
        (criminalObj) => {
            if (criminalObj.arrestingOfficer === selectedOfficerName) {
                return true
            } else {
                return false
            }
        }
    )
    const facilities = useFacilities()
    const crimFac = useCriminalFacilities()

    render(filteredArrayCriminals, facilities, crimFac)
})



const render = (criminalsToRender, allFacilities, allRelationships) => {
  
   const contentElement = document.querySelector(".criminalsContainer")
    //     Step 1 - Iterate all criminals
   const matchedFacilities = criminalsToRender.map((criminalObj) => {
    //    Step 2 - Filter all relationships to get only ones for this criminal
            const facilityRelationshipsForThisCriminal = allRelationships.filter(cf => cf.criminalId === criminalObj.id)
    //    Step 3 - Convert the relationships to facilities with map()
            const facilities = facilityRelationshipsForThisCriminal.map(cf => {
                const matchingFacilityObject = allFacilities.find(facility => facility.id === cf.facilityId)
                return matchingFacilityObject
            })
            return criminalCardMaker(criminalObj, facilities)
        }
    ).join("")

    contentElement.innerHTML = `
    <h2 class="header__criminals">Criminals</h2>
        <section class="criminalsList">
        ${matchedFacilities}
        </section>
    `
}



export const CriminalList = () => {
    getFacilities()
        .then(getCriminalFacilities)
        .then(() => {
            const facilities = useFacilities()
            const crimFac = useCriminalFacilities()
            const criminals = useCriminals() 
            
        render(criminals, facilities, crimFac)
        }
    )
}



