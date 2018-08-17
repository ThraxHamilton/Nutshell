const data = require('./dataManager')
const user = require('./login')

const taskForm = Object.create(null, {
    // clearForm: {
    //     value: () => {
    //         document.querySelector("#username").value = ""
    //         document.querySelector("#email").value = ""
    //     }
    // },
    createNewForm: {
        value: () => {
            return  `
            <fieldset>
                <label for="taskTitle">To Do: </label>
                <input required type="text" id="taskTitle">
            </fieldset>
            <fieldset>
                <label for="taskDue">Finish By: </label>
                <input required type="date" id="taskDate">
            </fieldset>
            <fieldset>
                <label for="entryContent">Details: </label>
                <textarea id="taskContent" id='taskDetail'></textarea>
                </fieldset>
            <button id="saveTaskButton">Add Job</button>`
        }
    }
})
module.exports = taskForm