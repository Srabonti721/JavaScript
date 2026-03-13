const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
// ----------------------------------------- for of reverse --------------------------
const rev_rev_colors = [];
for(const color of colors){
  rev_rev_colors.unshift(color)
}
//    console.log(rev_rev_colors);
//   -------------------------------------   for reverse --------------------------------
const reverse_colors = [];
for(let i = 0; i<colors.length; i++){
    // console.log(i);
    // console.log(colors[i]);
    const color = colors[i];
    reverse_colors.unshift(color)
}
// console.log(reverse_colors);
//             ----------------------------- decremantal eay of reverse -----------------------------
const rev_colors = [];
for(let i = colors.length - 1; i>=0; i--){
    // console.log(i);
    const color = colors[i];
    rev_colors.push(color)
}
// console.log(rev_colors);
//          ----------------------------    while reverse ---------------------------
const rev_color = [];
let j = 0;
while(j<colors.length){
// console.log(j);
const color = colors[j];
rev_color.unshift(color)
    j++
}
// console.log(rev_color);

// const numbers = [ 1, 2, 3, 4, 5 ,6];
// const reverse_number = [];
// for(let i = 0; i<numbers.length; i++){
//     const number = numbers[i];
//     reverse_number.unshift(number)
// }
//     console.log(reverse_number); 
