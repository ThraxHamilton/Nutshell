const dataManager = require ("./dataManager")

document.querySelector("#login").addEventListener("click",(event) => {
    // Get form field values
    // Create object from them
    // Add timestamp
    const newUser = {
    email: document.querySelector("#email").value,
    username: document.querySelector("#username").value,
    password: document.querySelector("#password").value
    }
    dataManager.saveUserInfo(newUser).then(() => {
    })
})