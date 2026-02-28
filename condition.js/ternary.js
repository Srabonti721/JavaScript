const age = 27;
// ------------------------- normal if else-------------------
// if(age >= 18){
//     console.log("vote dio");

// }
// else{
//     console.log("gumai thako");

// }
// ------------------------------simple ternary---------------------
// condition ? true : false
// age>=18?console.log("vote deta hobe"):console.log("gumai thako pora vote debo")

let price = 1000;
const isLeader = true;
// if (isLeader === true) {
//     if (price > 500) {
//         price /= 2;
//     }
//     else {
//         price = 0;
//     }
// }
// else {
//     price += 100;
// }
// console.log(price);

price = isLeader === true ? 
price > 500 ?
price /2: 0
: price + 1000;
