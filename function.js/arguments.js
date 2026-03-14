function doubleIt (number){
    const double = number * 2 ;
    console.log(number, double);  
}
doubleIt(10);
console.log("i will call the function");
doubleIt(77);
console.log("------------------");
doubleIt(677);
console.log("-------------------");
const number = 34;
doubleIt(number);

function different (num1, num2) {
const totalNumber = num1 - num2;
console.log(num1 , num2 , "different :", totalNumber);

}
const fatherAge = 65;
const sonAge = 22;

different(fatherAge, sonAge);