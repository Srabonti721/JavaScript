const persons = ["abul", "kabul", "tamul", "rabul", "babul", "gabul", "Awat", "Riya"];
const sortedPerson = persons.sort();
console.log(sortedPerson);

const numbers = [1,4,2,6,8,3,9,7,5];
const sortedNumber = numbers.sort();
// console.log(sortedNumber);
 
const num = [1, 4, 3, 6, 22, 77, 5, 9];
const num_ascending = [...num].sort(function(a, b) {return a - b});
const num_descending = [...num].sort(function(a, b) {return b - a});
console.log(num_ascending);
console.log(num_descending);
