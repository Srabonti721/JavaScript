// task 1
let day = 1;
while (day <= 60) {
    // console.log('I will invest at least 6 hrs every single day for next 60 days!', day);
    day++;
}
// task 2 odd even
// --------------------------- even -----------------
let number = 78;
while (number <= 98) {
    // console.log(number);   
    if (number % 2 === 0) {
        //   console.log("even number : ",number);
    }
    number++;
}
// ---------------- odd ---------------
  let oddNumber = 61;
  while(oddNumber<=100){
    // console.log(oddNumber);
    if(oddNumber % 2 !== 0){
        // console.log("odd number :",oddNumber);   
    }
    oddNumber++;
  }

// task 3 sum for all odd and even number
// ---------------------------sum even -----------------

// let num = 206;
// let sum = 0;
// while (num <= 311) {
//     // console.log(num);
//     if (num % 2 === 0) {
//         // console.log(num);  
//         sum = sum + num;
//     }
//     num++;
// }
// console.log("even number sum = ", sum);
// ---------------------------sum odd -----------------
let oddNum = 81;
let oddSum = 0;
while(oddNum<=331){
    // console.log(oddNum);
    if(oddNum % 2 !== 0){
        oddSum = oddSum + oddNum;      
    }
    oddNum++;
}
        console.log("odd number sum = ",oddSum); 