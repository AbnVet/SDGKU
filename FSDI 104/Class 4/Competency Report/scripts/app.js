//Object literal
var saloon={
    name:"Death From Above Grooming",
    address:{
        state:"Nevada",
        city:"Henderson",
        street:"1234 Rhine Luzon Ave",
        zip:"89044"
    },
    hours:{
        opening:"9:00 am",
        closing:"9:00 pm"
    },
    pets:[]
}

//name,age,gender,breed,service,owner,phone

var counter=0;

class Pet{

    constructor(name,age,gender,breed,service,owner,phone){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.breed=breed;
        this.service=service;
        this.owner=owner;
        this.phone=phone;
        this.id=counter++;
    }
}

//create pets
var scooby=new Pet("Scooby",60,"Male","Dane","Grooming","Shaggy","555-555-555");
saloon.pets.push(scooby);
var scrappy=new Pet("Scrappy",50,"Male","Mixed","Nails cut","Shaggy","555-555-555");
saloon.pets.push(scrappy);
var tweety=new Pet("Tweety Bird",100,"Male","Mixed","Nails cut","bugs bunny","999-555-555");
saloon.pets.push(tweety)

// getting tha values from the inputs
var txtName=document.getElementById('petName');
var txtAge=document.getElementById('petAge');
var txtGender=document.getElementById('petGender');
var txtBreed=document.getElementById('petBreed');
var txtService=document.getElementById('petService');
var txtOwner=document.getElementById('ownerName');
var txtPhone=document.getElementById('ownerPhone');

function register(){
    var thePet = new Pet(txtName.value,txtAge.value,txtGender.value,txtBreed.value,txtService.value,txtOwner.value,txtPhone.value);
    console.log(thePet);
    saloon.pets.push(thePet);
    clear();
    displayTable();
}

function clear(){
    txtName.value="";// clearing the input
    txtAge.value="";
    txtGender.value="";
    txtBreed.value="";
    txtOwner.value="";
    txtPhone.value="";
}

function display (){
    const petSection=document.getElementById('pets');
    var tmp ="";
    for (var i=0;i<saloon.pets.length;i++){
         tmp+= `<div class= "pet">
                    <h3>${saloon.pets[i].name} </h3>
                    <p>Age: ${saloon.pets[i].age} </p>
                    <p>Gender: ${saloon.pets[i].gender} </p>
                    <p>Breed: ${saloon.pets[i].breed} </p>
                    <p>Service: ${saloon.pets[i].service} </p>
                    <p>Owner Name: ${saloon.pets[i].owner} </p>
                    <p>Owner Number: ${saloon.pets[i].phone} </p>
         
                </div>`;

         console.log(tmp);
    }

    petSection.innerHTML=tmp;
}

function displayTable(){
//select the tbody section

    var table=document.getElementById("pets");

    // create a var tr

    var tr="";
    //travel the array
    for (var i=0;i<saloon.pets.length;i++){
        tr+=`
            <tr id=${saloon.pets[i].id}>
                <td>${saloon.pets[i].name} </td>
                <td>${saloon.pets[i].age} </td>
                <td>${saloon.pets[i].gender} </td>
                <td>${saloon.pets[i].breed} </td>
                <td>${saloon.pets[i].service} </td>
                <td>${saloon.pets[i].owner} </td>
                <td>${saloon.pets[i].phone} </td>
                <td onclick="deletePet(${saloon.pets[i].id})"><button> Delete</button> </td>
                
            </tr>
        
        `;
    }

    // insert the tr into the table
    table.innerHTML=tr;
}

function deletePet(id){
    var row=document.getElementById(id);
    row.remove(); //will remove element from html
    for (var i=0;i<saloon.pets.length;i++){
        var indexDelete; //variable to store the position
        if(saloon.pets[i].id===id){//search for id
            indexDelete=i; //update the position of value
        }
    }
    saloon.pets.splice(indexDelete,1) //will remove from array
}


function init(){
    console.log("app.js");
    displayTable();
// Hook Events - trigger functions here


}

window.onload=init;