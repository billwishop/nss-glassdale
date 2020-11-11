import { facilityCardMaker } from "./Facility.js"
import { getFacilities, useFacilities } from "../facilities/FacilityProvider.js"
import { useCriminalFacilities } from "../facilities/CriminalFacilityProvider.js"
import { getCriminalFacilities } from "../facilities/CriminalFacilityProvider.js"
import { useCriminals, getCriminals } from "../criminals/CriminalProvider.js"


const contentElement = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("facilityButtonClicked", () => FacilityList())

const render = (facilities, allCriminals, relationships) => {
    // Step 1 - iterate facilities
    const matched = facilities.map((facilityObj) => {
    // Step 2 - Filter relationships to get only ones for this facility
        const criminalRelationshipsForThisFacility = relationships.filter(obj => obj.facilityId === facilityObj.id)
    // Step 3 - Convert the relationships criminals with map()
        const criminals = criminalRelationshipsForThisFacility.map(c => {
            const matchingCriminalObj = allCriminals.find(criminal => criminal.id === c.criminalId)
            return matchingCriminalObj
        })         
        return facilityCardMaker(facilityObj, criminals)
    }
    ).join("")

    contentElement.innerHTML = `
    <h2 class="header__facilities">Facilities</h2>
        <section class="facilitiesList">
            ${matched}
        </section>
    `
}

export const FacilityList = () => {
    getFacilities()
        .then(getCriminalFacilities)
        .then(getCriminals)
        .then(() => {
            const facilities = useFacilities()
            const crimFac = useCriminalFacilities()
            const criminals = useCriminals() 

            render(facilities, criminals, crimFac)
        })
}