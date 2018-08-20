const data = require('./dataManager')
const user = require('./login')

const eventForm = Object.create(null, {
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
                <label for="eventTitle">Event: </label>
                <input required type="text" id="eventTitle">
            </fieldset>
            <fieldset>
                <label for="eventLocation">When: </label>
                <input required type="date" id="eventDate">
            </fieldset>
            <fieldset>
                <label for="eventDetails">Details </label>
                <textarea id="eventDetails" id='eventDetail'></textarea>
                </fieldset>
            <button id="saveEventButton">Add Event</button>`
        }
    }
})
module.exports = eventForm