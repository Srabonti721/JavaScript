function evenAverage (numbers){
    const evens = [];
for(const number of numbers){
    if(number % 2 === 0){
    // console.log(number);
    evens.push(number)
    }   
}
    console.log(evens);
    let sum = 0;
    for(const even of evens ){ 
        sum = sum + even;    
    }
    const count = evens.length
      console.log(sum, count); 
      const avg = sum / count;
      return avg;
}
const numbers = [12, 56, 71, 90, 34, 32, 11, 9, 15];
const evenNumber = evenAverage(numbers);
console.log("average even number is : ",evenNumber);
