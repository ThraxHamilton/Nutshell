function createChatEntry(message, date, id){
    return `
            <p>${message}</p>
            <p>${date}</p>
            <button id="deleteButton--${id}">Delete</button>`;
}

module.exports = createChatEntry;