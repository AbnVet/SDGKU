

function saveUser(user) {  

    let data = readUsers();
 
    //merge
    data.push(user);

    //then save 
    let val = JSON.stringify(data); 
    localStorage.setItem("users",val);  
}



function readUsers() { //read
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

localStorage.clear();
}