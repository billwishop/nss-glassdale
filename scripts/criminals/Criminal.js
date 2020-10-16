export const criminalCardMaker = (criminalObj) => {
    return `
     <section class="criminal" id="criminal--${criminalObj.id}">
        <h2 class="criminal__name">${criminalObj.name}</h2>
        <p class="criminal__age">Age: ${criminalObj.age}</p>
        <p class="criminal__crime">Crime: ${criminalObj.conviction}</p>
        <p class="criminal__start">Term start: ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</p>
        <p class="criminal__end">Term end: ${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</p>
    </section>
`    
}



{/* 

    Name: name
    Age: age
    Crime: conviction
    Term start: incarceration.start
    Term end: incarceration.end
    
    */}