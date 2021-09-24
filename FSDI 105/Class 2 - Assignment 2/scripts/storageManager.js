function saveUser(user) {  

    let data = readUsers();
 
    //merge
    data.push(user);

    let val = JSON.stringify(data); //parse into a JSON string
    localStorage.setItem("users",val);  //save
}

function readUsers() { 
    let data = localStorage.getItem("users");
    if (!data) {
        return [];
    } 
    else {
    let list = JSON.parse(data); 
    return list;
    }
}

function clearUsers() {
    localStorage.removeItem("users");
}

function clearData() {
    //WARNING: this will clear ALL data, not just users
localStorage.clear();
}