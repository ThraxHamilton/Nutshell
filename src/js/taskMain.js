const dataManager = require ('./dataManager')
const taskList = require ('./taskList')

function addTaskEListener(){ 
    console.log('hi')
    document.querySelector("#saveTaskButton").addEventListener("click", () => {
    const newTask = {
        task: document.querySelector("#taskTitle").value,
        details: document.querySelector("#taskDetails").value,
        dueBy: document.querySelector('#taskDate').value
    }
    dataManager.saveTaskInfo(newTask).then(() => {
        console.log(newTask)
        // newChat.clearForm()
        taskList()
    })
    
})}
module.exports = addTaskEListener