const dataManager = require("./dataManager")
const login = require("./login.js")
console.log("login", login)
// Create event listener for login/register button
// document.querySelector("#register").addEventListener("click", (event) => {
    // Event listener to create new form
    document.querySelector("#container").innerHTML = login.createNewForm()
    document.querySelector("#register").addEventListener("click", addNewUser)
// })
document.querySelector("#login").addEventListener("click", loginSave)
// Event listener to submit and save to API
function addNewUser() {
    const newUser = {
        email: document.querySelector("#email").value,
        username: document.querySelector("#username").value,
    }
    console.log(newUser)
    // Save newUser to API database
    verifyUser(newUser)
}
// Function to verify unique email address
function verifyUser(newUser) {
    // Get all users using fetch()
    dataManager.getUserInfo()
        .then((users) => {
            const username = document.querySelector("#username").value
            const email = document.querySelector("#email").value
            // Filter function with 2 conditions for email and user
            const userFilter = users.filter((user) => {
                return username === user.username || email === user.email
            })
            // "if" statement to check length of array. 0=for new user; anything else "alert()"
            if (userFilter.length === 0) {
                // post user to API
                dataManager.saveUserInfo(newUser)
            }
            else {
                alert("Please choose another login")
            }
        })
}
// Save to session storage
    function loginSave() {
        const loginUser = {
            email: document.querySelector("#email").value,
            username: document.querySelector("#username").value,
        }
        dataManager.getUserInfo().then(users => {
            const userObject = users.find((user) => {
                return loginUser.username === user.username && loginUser.email === user.email
            })
            console.log(userObject)
            if (!userObject){
                alert('Incorrect Email or Username')
            }
            else {
                sessionStorage.setItem('activeUser', JSON.stringify(userObject))
            }
        })
    }


