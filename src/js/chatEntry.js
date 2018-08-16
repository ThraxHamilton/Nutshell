function createChatEntry(){
    return `<h1>${title}</h1>
            <p>${content}</p>
            <p>${date}</p>
            <button id="deleteButton--${id}">Delete</button>`;
}

module.exports = createChatEntry;