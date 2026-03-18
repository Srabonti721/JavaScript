function oddAverage(numbers) {
    const oddArray = [];
    for (const number of numbers) {
        if (number % 2 === 1) {
            // console.log(number);
            oddArray.push(number)
        }
    }
// console.log(oddArray);
let sum = 0;
for(const number of oddArray){
sum = sum + number;
}
const count = oddArray.length;
console.log(sum, count);
const avg = sum / count;
return avg
}
const numbers = [22, 77, 21, 13, 19, 96, 52];
const odd = oddAverage(numbers);
console.log(odd);
