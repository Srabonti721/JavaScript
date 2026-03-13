const num = [1, 2, 3, 4, 5,  6, 7 ];
// console.log(num);
// num.reverse()
// console.log(num);
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const reverse = numbers.reverse();
// console.log(reverse);

const rev_num = [];
for(let n of num){
    // console.log(n);
    rev_num.unshift(n)
}
// console.log(rev_num);
const rev_num1 = [];
 for(let i = 0; i<numbers.length; i++){
    console.log(i);
    const num = numbers[i]
    rev_num1.unshift(num)
 }
 console.log(rev_num1);
 