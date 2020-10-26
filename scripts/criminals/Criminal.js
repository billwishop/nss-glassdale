export const criminalCardMaker = (criminalObj) => {
    return `
     <section class="criminal" id="criminal--${criminalObj.id}">
        <h2 class="criminal__name">${criminalObj.name}</h2>
        <p class="criminal__age">Age: ${criminalObj.age}</p>
        <p class="criminal__crime">Crime: ${criminalObj.conviction}</p>
        <p class="criminal__start">Term start: ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</p>
        <p class="criminal__end">Term end: ${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</p>
        <button id="associates--${criminalObj.id}">Associate Alibis</button>
    </section>
`    
}



// add event hub listener for a click
// separate the button id and places it in an array
// use startWith() to target the button element
// new CustomEvent details will include criminalId
// dispatch the CustomEvent


const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", eventObj => {
    
    const [prefix, criminalId] = eventObj.target.id.split("--")

    if(eventObj.target.id.startsWith("associates--")) {
        console.log("alibi clicked")

        const alibiEvent = new CustomEvent("alibiButtonClicked", {
            detail: {
                criminalId: criminalId
            }
        })
        eventHub.dispatchEvent(alibiEvent)
    }
})