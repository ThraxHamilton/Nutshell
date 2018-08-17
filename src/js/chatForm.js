const data = require('./dataManager')
const user = require('./login')
// console.log('My Life')
const chatForm = Object.create(null, {
    // clearForm: {
    //     value: () => {
    //         document.querySelector("#username").value = ""
    //         document.querySelector("#email").value = ""
    //     }
    // },
    createNewForm: {
        value: () => {
            return `
            <div class="chatcontainer">
            <p>Hello. How are you today?</p>
             <span style="float:right;color:#aaa">11:00 <input id='message' type='text' id='message'/>
             <button id='sendMessage'>Send</button></span>
            </div>`
        }
    }
})
module.exports = chatForm