const dataManager = require("./dataManager")
const login = require("./login.js")
console.log("login", login)
// Create event listener for login/register button
document.querySelector("#register").addEventListener("click", (event)=> {
    // Event listener to create new form
    document.querySelector("#register-form").innerHTML = login.createNewForm()
    // Event listener to submit and save to API
    docoment.querySelector("#submit").addEventListener("click", (event) => {

        const newUser = {
            email: document.querySelector("#email").value,
            username: document.querySelector("#username").value,
        }
        console.log(newUser)
        // Save newUser to API database
        verifyUser()
    }
    ),
        // Function to verify unique email address
        function verifyUser() {
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
                    }
                    else {
                        alert("Please choose another login")
                    }
                })
        }
})