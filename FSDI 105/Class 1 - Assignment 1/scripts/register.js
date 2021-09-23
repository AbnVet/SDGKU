//Function providing user details

function User(email,password,first,last,age,address,phone,payment,color) {
    this.email = email;
    this.password = password;
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.address = address;
    this.phoneNumber = phone;
    this.payment = payment;
    this.color = color;

}


//function that captures user information on registration
function registerUser(){
   

    let email=$("#txtEmail").val();
    let password=$("#txtPassword").val();
    let first=$("#txtFirst").val();
    let last=$("#txtLast").val();
    let age=$("#txtAge").val();
    let address=$("#txtAddress").val();
    let phone=$("#txtPhone").val();
    let payment=$("#txtselPayment").val();
    let color=$("#txtselColor").val();

    let user = new User(email,password,first,last,age,address,phone,payment,color)    
    saveUser(user); 

    readUsers();



    console.log(email,password,first,last,age,address,phone,payment,color);
    


function init() {
console.log("Register Page");

    $("#btnSave").click( registerUser);
    
}

window.onload = init;

}