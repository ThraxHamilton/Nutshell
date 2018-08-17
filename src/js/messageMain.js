const dataManager = require ('./dataManager')
const chatList = require ('./chatList')

function addMessageEListener(){
    document.querySelector("#sendMessage").addEventListener("click", () => {
    const newMessage = {
        message: document.querySelector("#message").value,
        date: Date.now()
    }
    dataManager.saveChatInfo(newMessage).then(() => {
        console.log(newMessage)
        // newChat.clearForm()
        chatList()
    })
    
})}
module.exports = addMessageEListener