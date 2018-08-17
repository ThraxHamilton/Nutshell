const taskEntry = require("./taskEntry");
const dataManager = require("./dataManager")

let outputElement = document.querySelector("#chatWindow");

function taskEntries() {
    outputElement.innerHTML = "";
    dataManager.getTaskInfo().then(result => {
        result.forEach(newTask => {
            let taskComponent= chatEntry(newTask.message, newTask.date, newTask.id);
            writeMessageToDOM(taskComponent);
        });
    })
}
function writeMessageToDOM(task) {
    outputElement.innerHTML += task
}

module.exports = listEntries;