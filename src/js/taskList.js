const taskEntry = require("./taskEntry");
const dataManager = require("./dataManager")

let outputElement = document.querySelector("#chatWindow");

function taskEntries() {
    outputElement.innerHTML = "";
    dataManager.getTaskInfo().then(result => {
        result.forEach(newTask => {
            let taskComponent= taskEntry(newTask.task, newTask.details, newTask.dueBy);
            writeMessageToDOM(taskComponent);
        });
    })
}
function writeMessageToDOM(task) {
    outputElement.innerHTML += task
}

module.exports = taskEntries;