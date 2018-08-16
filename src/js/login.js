console.log("AD2000");
const FormManager = Object.create(null, {
    // clearForm: {
    //     value: () => {
    //         document.querySelector("#username").value = ""
    //         document.querySelector("#email").value = ""
    //     }
    // },
    createNewForm: {
        value: () => {
            return `
        <fieldset>
            <label for="username">Username:</label>
            <input required type="text" id="username">
        </fieldset>
        <fieldset>
            <label for="email">Email</label>
            <textarea id="email"></textarea>
            </fieldset>
        <button id="register">Register</button>
        <button id='login'>Login</button>`
        }
    }
})
module.exports = FormManager
