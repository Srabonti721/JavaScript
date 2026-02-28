/**
 * height = 5fut 5 inch
 * (5*0.3048)+(5*0.0254)
 * =1.524 + 0.127
 * =1.651 meter
 * 
 * 
 * alada niyom
 * height = 5fut 5 inch
 *  (5*12)
 * = 60 inch
 * (60+5)
 * =65 inch
 * (65 * 0.0254)
 * 1.651 meter
 */

// const weight = 70;
// const height = 2.14;
// const weight = 55;
// const height = 1.651;
const weight = 70;
const height = 1.83;
const bmi = weight / (height * height)
console.log(bmi);
if(bmi<18.5){
console.log("Underweight");
}
else if( bmi >= 18.5 && bmi <=24.9){
console.log("normal");
}
else if(bmi >= 25 && bmi <=29.9){
console.log("Overweight");
}
else{
    console.log("Obese");   
}