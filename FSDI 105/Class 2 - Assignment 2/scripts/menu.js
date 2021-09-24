function setNavInfo() {
    //get the array of users
    let list = readUsers();
    let count = list.length;    

    //update the label
    $(".menu-info > label").text(count + "users");

}
setNavInfo();