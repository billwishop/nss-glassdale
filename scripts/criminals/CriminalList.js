

import { getCriminals, useCriminals } from "./CriminalProvider.js"
import { criminalCardMaker } from "./Criminal.js"



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