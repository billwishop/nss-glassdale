import { renderWitnessButton } from "./WitnessButton.js"
import { getWitnesses, useWitnesses } from "./WitnessDataProvider.js"
import { makeWitness } from "./Witness.js";


const contentElement = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("witnessButtonClicked", () => WitnessList())

export const WitnessList = () => {
    getWitnesses()
    .then(() => {
        const allWitnesses = useWitnesses()
        render(allWitnesses)
    })
}

const render = (witnessArray) => {
    let witnessHTMLRep = ""
    for (const witness of witnessArray) {
        witnessHTMLRep += makeWitness(witness)
    }
    contentElement.innerHTML = `
        <h2 class="header__witness">Witness Statements</h2>
        <div class ="witness__list">
            ${witnessHTMLRep}
        </div>    
        `
}


