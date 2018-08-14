const dataManager = require ("./dataManager")
// Create event listener for login/register button
document.querySelector("#register").addEventListener("click",(event) => {
    const newUser = {
    // Using Id's defined in login.html
    email: document.querySelector("#email").value,
    username: document.querySelector("#username").value,
    password: document.querySelector("#password").value
    }
    console.log(newUser)
    // Save newUser to API database
    dataManager.saveUserInfo(newUser).then(() => {
    })
})

