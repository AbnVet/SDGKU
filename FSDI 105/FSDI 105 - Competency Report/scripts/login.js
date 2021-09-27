function login() {
    let email =  $('#txtEmail').val();
    let password = $('#txtPassword').val();
  //  let firstName = $('')

    console.log(email, password);

        let usersList = readUsers();
        let found = false;
        for(let i=0; i < usersList.length; i++) {
            let user=usersList[i];
                     if(user.email === email && user.password === password) {
                         found = true;
                console.log("You are now logged in");      
                //send user to another page
       saveLoggedIn(user);
       window.location = "users.html";

            }
        }

        if(!found) {
            console.error("Invalid credentials");      
        $("#alertError").removeClass("hide");
        setTimeout(function() {
            $('#alertError').addClass("hide");
        },5000);
    }                    
}

function showProperDiv() {
    //load data
    let currentUser = getLoggedIn();
    if (currentUser) {
        //hide login form
        $('#loginForm').hide();
        $('#logoutForm').show();

$('#hEmail').text(currentUser.email);
$('#hName').text(currentUser.firstName + " " + currentUser.lastName)


        console.log(currentUser.email);
    } else {
        $('#loginForm').show();
        $('#logoutForm').hide();
    }
}

function init() {
console.log("Home Page");
showProperDiv();

$("#btnLogin").click(login);
$("#btnLogOut").click(function () {
    logOut();
    showProperDiv();
});


}

window.onload = init;







