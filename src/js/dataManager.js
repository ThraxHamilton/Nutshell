let dataManager = Object.create(null, {
    saveUserInfo: {
        value: (entry) => {
            return fetch("http://localhost:8088/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(entry)
            })
            console.log(saveUserInfo)
            .then(response => response.json())
        }
    },
    getUserInfo: {
        value: (entry) => {
            return fetch("http://localhost:8088/users", {
            })
                .then(response => response.json())
        }

    },
    // Save friends to API
    saveFriendInfo: {
        value: (entry) => {
            return fetch("http://localhost:8088/friends", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(entry)
            })
            console.log(saveUserInfo)
            .then(response => response.json())
        }
    },
    getFriendInfo: {
        value: (entry) => {
            return fetch("http://localhost:8088/friends", {
            })
                .then(response => response.json())
        }

    }
})

module.exports = dataManager