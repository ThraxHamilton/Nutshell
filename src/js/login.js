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
            <input required type="text" id="entryTitle">
        </fieldset>
        <fieldset>
            <label for="email">Email</label>
            <textarea id="entryContent"></textarea>
            </fieldset>
        <button id="submit">Submit</button>`
        }
    }
})
module.exports = FormManager
