export const officerCardMaker = (officerObj) => {
    return `
        <section class="officer" id="officer--${officerObj.id}">
            <p class="officer__name">${officerObj.name}</p>
        </section>
    `
}