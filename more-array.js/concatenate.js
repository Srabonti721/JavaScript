var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];
const num = numbers.join("");
// console.log(num);

// const statement = 'I am a hard working person';
// const split_statement = statement.split(" ");
// // console.log(split_statement);
// split_statement.reverse();
// const state = split_statement.join(" ")
// console.log(state);

// ------------------------------------------------- for--------------------------------------------
const statement = 'I am a hard working person';
const split_statement = statement.split(" ")
const reverse_statement = [];
// for (let i = 0; i < split_statement.length; i++) {
//     // console.log(i);
//     const state = split_statement[i];
//     reverse_statement.unshift(state);

// }
// //   console.log(reverse_statement);
// const join = reverse_statement.join(" ");
// console.log(join);
//  ---------------------------------------------- while --------------------------------------------
 let s = 0;
 while(s < split_statement.length){
 const state = split_statement[s];
 reverse_statement.unshift(state);
        s++
 }
//    console.log(reverse_statement);
   const joining = reverse_statement.join(" ");
console.log(joining);

 


