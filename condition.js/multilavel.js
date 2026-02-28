const price = 8000;
if(price >=5000){
const discount = price * 10 / 100;
const payAmount = price - discount;
console.log(payAmount);
}
else if(price > 2500){
const discount = price * 5 / 100;
const payAmount = price - discount;
console.log(payAmount);

}
else{
    console.log(price); 
}

const age = 79;
const riderPrice = 500;
if(age < 40 && riderPrice == 500){
const allRidesDiscount = riderPrice * 5 / 100;
const discountRides = riderPrice - allRidesDiscount;
console.log(discountRides);
}
else if(age >= 60 && riderPrice == 500 ){
 const allRidesDiscount = riderPrice * 10 / 100;
 const discountRides = riderPrice - allRidesDiscount;
 console.log(discountRides);

}
else{
    console.log(riderPrice);   
}