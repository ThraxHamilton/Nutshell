const dataManager = require("./dataManager")
const login = require("./login.js")
const chatForm = require('./chatForm')
const newChat = require("./chatEntry.js")
const chatList = require('./chatList')
const tasks = require('./taskForm')
const addMessageEListener = require('./messageMain')
const addTaskEListenr = require('./taskMain')

console.log("login", login)
// Create event listener for login/register button
// Event listener to create new form
document.querySelector("#container").innerHTML = login.createNewForm()
document.querySelector("#register").addEventListener("click", addNewUser)
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
            // .filter creates a new array
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
// ^^^Save to session storage.^^^ ^^^^^^^^ Pretty similar to ^^^^^^^^
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
        if (!userObject) {
            alert('Incorrect Email or Username')
        }
        else {
            sessionStorage.setItem('activeUser', JSON.stringify(userObject))
        }
        // Hide login after..login.
        document.querySelector('#container').style.display = 'none';
        // Create chat timeline after hiding login form.
        document.querySelector("#chatWindow").innerHTML = chatForm.createNewForm()
        // Add task entry along with message enrty.
        document.querySelector("#taskForm").innerHTML = tasks.createNewForm()
        // New chat function.
        newChat()
        // New message input
        console.log(newChat)
        //document.querySelector('#newChat').innerHTML = newChat()
        addMessageEListener()
        addTaskEListenr()
    })
}







