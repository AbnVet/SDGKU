const KEY_USERS = "users";
const KEY_LOGIN = "login";


function saveUser(user) {  

    let data = readUsers();
 
    data.push(user);

    let val = JSON.stringify(data); 
    localStorage.setItem(KEY_USERS, val);  
}


function readUsers() { //read
    let data = localStorage.getItem(KEY_USERS);
    if (!data) {
        return [];
    }    else {
    let list = JSON.parse(data); //parse string back into object
    return list;
    }
}

function clearUsers() {
    localStorage.removeItem(KEY_USERS);
}

function getLoggedIn() {
    let dataStr = localStorage.getItem(KEY_LOGIN);
    if (dataStr) {
    return JSON.parse(dataStr);
    }
    return null;
}


function saveLoggedIn(user) {
localStorage.setItem(KEY_LOGIN, JSON.stringify(user));
}

function logOut() {
    localStorage.removeItem(KEY_LOGIN);
}


function clearData() {
localStorage.clear();
}