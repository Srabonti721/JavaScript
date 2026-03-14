// function r man string hola
function evenSizeString(str) {
    const size = str.length;
    console.log(str, size);
    if (size % 2 === 0) {
        console.log("even size");

    }
    else {
        console.log("odd size");

    }
}
evenSizeString("Dhaka")
evenSizeString("faka")
// function r man boolean hola

function doubleOrTriple(number, double) {
    if (double === true) {
        const result = number * 2;
        return result;
    }
    else {
        const result = number * 3;
        return result;
    }
}

console.log(doubleOrTriple(5, true));
console.log(doubleOrTriple(5, false));

// function r man array hola
function numberOfElement (number){
    const num = number.length;
    // console.log(num);
    return num;
    
}
numberOfElement([12, 2, 4, 1,5,6,0])
// function r man object hola
function age (person){
    const personAge = person.age;
    // console.log(personAge);
    return personAge;
}
// age({age: 22})
const personAge = age({age: 33});
console.log(personAge);

