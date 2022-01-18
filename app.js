//String var

//let first_name = "James";
//let last_name = "Vandergriff"

//Input var

//let first_name = prompt("What is your name?");
//let last_name = prompt("What is your last name?");
//let full_name = first_name + " " + last_name;

//Number var

//let num1 = Number(prompt("First Number"));
//let num2 = Number(prompt("Second Number"));
//let ans = num1*num2;
//let sum = num2+num1

//let ans = sum-(sum*.3)

//Writing to page

//document.body.innerHTML=full_name;



let bill = Number(prompt("Total Bill?"));
let tax_bill = bill*1.07
let tip_bill = tax_bill*.05
let final_bill = (tax_bill + tip_bill).toFixed(2)
let ans = "Your final bill is $" + final_bill



document.body.innerHTML=ans;

