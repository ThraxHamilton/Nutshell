const eventEntry = require("./eventEntry");
const dataManager = require("./dataManager")

let outputElement = document.querySelector("#eventWindow");

function eventEntries() {
    outputElement.innerHTML = "";
    dataManager.geteventInfo().then(result => {
        result.forEach(newevent => {
            let eventComponent= eventEntry(newevent.event, newevent.details, newevent.dueBy);
            writeMessageToDOM(eventComponent);
        });
    })
}
function writeMessageToDOM(event) {
    outputElement.innerHTML += event
}

module.exports = eventEntries;