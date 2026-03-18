function inchToFeet (inch){
const feet = inch / 12;
return feet;
}


function inchToFeet2 (inch){
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchRemainning =inch % 2;
    const result = feetFraction + " fit " + inchRemainning + " inch "
    return result;
}
const patluHeight = inchToFeet2(75);
console.log(patluHeight);

function mileToKilometer (mile){
const kilometer = mile * 1.60934;
return kilometer
}