const chatEntry = require("./chatEntry");
const dataManager = require("./dataManager")


let outputElement = document.querySelector("#chatWindow");

function listEntries() {
    outputElement.innerHTML = "";
    dataManager.getChatInfo().then(result => {
        result.forEach(newMessage => {
            let messageComponent= chatEntry(newMessage.message, newMessage.date, newMessage.id);
            writeMessageToDOM(messageComponent);
        });
    })
}
function writeMessageToDOM(message) {
    outputElement.innerHTML += message
}


module.exports = listEntries;