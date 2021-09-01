/* console.log ("hello world!");
console.warn ("Warning.......");
console.error("Fatal Error!!!");
console.log ("eat a piece of pizza")
document.write ("Hello Javascript")
alert ("Hello world 123456789") */

console.log("Script that will prompt for variables and then calculate a total cost to include tax");



function productInput(){
    var productName=prompt("What would you like to purchase?:");
    var quantity=prompt("How many of this item would you like?");
    var price=prompt("Enter price of the item");

alert(`
You wanted a ${productName}. 
You ordered ${quantity} of them. 
Your initial cost is ${quantity*price}.
After taxes of 6.25%, your total will be ${quantity*price*6.25/100 + quantity*price}
`);

}

productInput();