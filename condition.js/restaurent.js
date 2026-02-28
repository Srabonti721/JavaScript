const age = 50;
const price = 1000;
if(age <= 12){
console.log("you can eat for free");
}
else if(age >=70){
    // 50% discount
    const discount = price * 50 / 100;
    const payAmount = price -discount;
console.log(payAmount)
}
// 25% discount
else if(age >=60){
    const discount = price * 25 / 100;
    const payAmount = price - discount;
    console.log(payAmount);  
}
// 10 % discount
else if (age >= 50){
    const discount = price * 10 / 100;
    const payAmount = price - discount;
    console.log(payAmount);   
}
else{
    console.log(price);   
}