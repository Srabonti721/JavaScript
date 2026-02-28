const age = 10;
const ticket = 800;
const isStudent = true;
 if(age <= 12 ){
    console.log("free ticket");    
}
 else if( isStudent){
//  50% discount
const discount = ticket * 50 /100;
const payAmount = ticket - discount;
console.log(payAmount);
}

else if (age >= 60){
//  15% discount
const discount = ticket * 15 /100;
const payAmount = ticket - discount;
console.log(payAmount);
}
else{
    console.log(ticket);  
}