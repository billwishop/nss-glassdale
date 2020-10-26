
export const makeWitness = (witnessObj) => {
    return `
        <section class="witness" id="witness--${witnessObj.id}">
        <h2 class="witness__name">${witnessObj.name}</h2>
        <p class="witness__statement">${witnessObj.statements}</p> 
        </section>
    `
}