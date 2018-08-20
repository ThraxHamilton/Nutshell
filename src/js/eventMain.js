const dataManager = require ('./dataManager')
const eventList = require ('./eventList')


function addEventEListener(){ 
    console.log('hi')
    document.querySelector("#saveEventButton").addEventListener("click", () => {
    const newevent = {
        event: document.querySelector("#eventTitle").value,
        details: document.querySelector("#eventDetails").value,
        location: document.querySelector('#eventLocation').value
    }
    dataManager.saveeventInfo(newevent).then(() => {
        console.log(newevent)
        // newevent.clearForm()
        eventList()
    })
    
})}
module.exports = addEventEListener