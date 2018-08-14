let dataManager = Object.create(null, {
    saveUserInfo: {
        value: (entry) => {
            return fetch("http://localhost:8088/user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(entry)
            })
            console.log(entry)
            .then(response => response.json())
        }
    },
    getUserInfo: {
        value: (entry) => {
            return fetch("http://localhost:8088/user", {
            })
                .then(response => response.json())
        }

    }
})

module.exports = dataManager