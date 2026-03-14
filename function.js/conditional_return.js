function isEven (number){
    if(number % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}
const num = isEven ( 2);
console.log(num);
console.log(isEven (5));

function isOdd (num){
    if(num % 2 === 1){
        return true;
    }
    return false;
}
console.log(isOdd(5));
console.log(isOdd(10));

