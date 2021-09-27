errorOnForm = false;


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

//   return email,password,first,last,age,address,phone,payment,color;
}

function registerUser(){
  // if(errorOnForm)

    let email=$("#txtEmail").val();
    let password=$("#txtPassword").val();
    let first=$("#txtFirst").val();
    let last=$("#txtLast").val();
    let age=$("#txtAge").val();
    let address=$("#txtAddress").val();
    let phone=$("#txtPhone").val();
    let payment=$("#selPayment").val();
    let color=$("#selColor").val();

    let user = new User(email,password,first,last,age,address,phone,payment,color)    
    saveUser(user); //this function exists in storageManager
    setNavInfo(); //update the user counts
    readUsers();

}
    function clearForm()  {
  
 
    console.log(email,password,first,last,age,address,phone,payment,color);

}


function changeColor () {
    let color = $("#selColor").val();
    console.log("new color",color);

    $("#hForm").css("color",color); 
    

}

function validatePass() {
    let txtPass = $("#txtPassword");
    let password = txtPass.val();

    if (password.length < 5) {
       txtPass.css('border', '2px solid red');
        displayError("Error: Password too short");
        
    }

    else {
       txtPass.css("border", "1px solid rgb(133, 133, 133)");
        hideError();
    }
}


function validateFirstName() {
    let txtFirst = $("#txtFirst");
    let first = txtFirst.val();


    if (first = "") {
        displayError();
    }
    else {
        hideError();
    }
}


function displayError(text){
    $("#alertError").removeClass("hide").text(text);
    $("#btnSave").attr("disabled",true);
    errorOnForm = true;

}

function hideError() {
    $("#alertError").addClass("hide");
    $("#btnSave").attr("disabled",false);
    errorOnForm = false;
}





function init() {
console.log("Register Page");

  

    $("#btnSave").click( registerUser);



    $("#selColor").change(changeColor);

    $("#txtPassword").change(validatePass);

}

window.onload = init;


