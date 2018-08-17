function createTaskEntry(task, details, dueBy) {
return `
            <p>${task}</p>
            <p>${details}</p>
            <p>${dueBy}</p>`;
}
module.exports = createTaskEntry