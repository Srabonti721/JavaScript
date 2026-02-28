// task 1
const burgerPrice = 501;
if(burgerPrice>500){
console.log("free coke");
}
else{
console.log("buy a new 30 taka coke");
}
// task 2
const weight = 80;
const height = 1.71;
const bmi = weight / (height * height)
console.log(bmi);
if(bmi<18.5){
    console.log("underweight");
}
else if(bmi>18.5 && bmi<=24.5){
    console.log("normal"); 
}
else if(bmi>25 && bmi<=29.9){
    console.log("overweight"); 
}
else{
    console.log("obese");   
}
// task 3
const mark = 65;
if(mark>=60 && mark <=69){
console.log("your result is D");
}
else if(mark>=70 && mark <=79 ){
console.log("your result is C");
}
else if(mark>=80 && mark <=89 ){
console.log("your result is B");
}
else if(mark>=90 && mark <=100 ){
console.log("your result is A");
}
else{
    console.log(" your result is F");  
}
