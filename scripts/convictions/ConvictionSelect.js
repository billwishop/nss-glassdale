

import { getConvictions, useConvictions} from "./ConvictionsProvider.js"

// where the HTML will be rendered
const contentTarget = document.querySelector(".filters__crime")

export const ConvictionSelect = () => {
    getConvictions().then(() => {
        const convictions = useConvictions()
        render(convictions)
    })
}

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