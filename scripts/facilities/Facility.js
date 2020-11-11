// use class="facility"

export const facilityCardMaker = (facilityObj, criminalObj) => {
    return `
     <section class="facility" id="facility--${facilityObj.id}">
        <h2 class="facility__name">${facilityObj.facilityName}</h2>
        <p class="facility__securityLevel">Security Level: ${facilityObj.securityLevel}</p>
        <p class="facility__capacity">Capacity: ${facilityObj.capacity}</p>

        <h3>Criminals</h3>
        <ul>
            ${criminalObj.map(c => `<li>${c.name}</li>`).join("")}
        </ul>
    </section>
`    
}