

import { getOfficers, useOfficers } from "./OfficerProvider.js"
import { officerCardMaker } from "./Officer.js"

export const OfficerList = () => {
    getOfficers().then(() => {
        const officers = useOfficers()

        let officerHTMLRep = ""

        for (const officerObj of officers) {
            officerHTMLRep += officerCardMaker(officerObj)
        }
        const contentElement = document.querySelector(".officersContainer")
        contentElement.innerHTML += officerHTMLRep
    })
}