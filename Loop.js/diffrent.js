// diffrent way fo for loop 
// --------------------- for loop ------------
// odd number
// for(let s = 1 ; s<=10; s++){
//     if(s % 2 === 1){
//     console.log(s);
//     }
// }
// for(let s = 1 ; s<=10; s++){
//     if(s % 2 !== 0){
//     console.log(s);
//     }
// }
// for(let s = 1 ; s<=50; s++){
//     if(s % 3 === 0){
//     console.log(s);
//     }
// }
// bag ses 3 thakla
// for(let s = 1 ; s<=40; s++){
//     if(s % 3 === 0){
//     console.log(s);
//     }
// }
// for(let s = 1 ; s<=40; s++){
//     if(s % 5 === 0){
//     console.log(s);
//     }
// }
let total = 0;
for(let s = 1 ; s<=40; s++){
    if(s % 3 === 0){
    total = total + s;
    console.log(total);
    }
}
 console.log("total number is :",total);

// -------------- used while loop -----------------
// let j = 1;
// while(j<=10){
//     if(j % 2 === 1){       
//     console.log(j);
// }
//     j++;
// }
// let j = 1;
// while(j<=10){
//     if(j % 2 !== 0){       
//     console.log(j);
// }
//     j++;
// }
// let j = 1;
// while(j<=10){
//     if(j % 2 === 1){       
//     console.log(j);
// }
//     j+=2;
// }