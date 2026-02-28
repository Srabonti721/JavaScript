// task 4
const yourResult = 90;
const result = 80;
if (yourResult > 80) {
    if (result > 80 && result < 100) {
        console.log("go for a lunch");
    }
    else {
        if (result >= 60 && result <= 80) {
            console.log("good luck next time");
        }
        else {
            if (result >=40 && result <= 59) {
                console.log("friend's message unseen");
            }
            else {
                if (result <= 39) {
                    console.log("block friend");
                }
            }
        }
    }
}
else {
    console.log("home and sleep and act sad");
}
// --------------ono babe kora jai-------------
const myResult = 80;
const friendResult = 70;
if(myResult >=80){
 if(friendResult>80 && friendResult<100){
    console.log("go for a lunch"); 
 }
 else if(friendResult>=60 && friendResult<=80){
console.log("good luck next time");
 }
 else if(friendResult>=40 && friendResult<=59){
console.log("friend's message unseen");
 }
 else{
    console.log("blocked friend");
    
 }
//  else if(friendResult<=39){
// console.log("blocked friend");
//  }
}
else{
    console.log("home and sleep and act sad");
}