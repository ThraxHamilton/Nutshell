const APIobject = {}

/*
    Purpose: Make GET request to API to retrieve data
*/
APIObject.getUser = () => {
    return fetch("http://localhost:8088/user")
        .then(response => response.json());
}