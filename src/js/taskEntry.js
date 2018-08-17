function createTaskEntry(task, dueBy) {
return `
            <p>${task}</p>
            <p>${dueBy}</p>
            <button id="deleteButton--${id}">Delete</button>`;
}
module.exports = createTaskEntry