const mobile = {
    brand : "sumsung",
    color : "blue",
    price : 35000,
    camera : "12mp",
    isNew : true,
}
for (const prop in mobile) {
    // console.log(prop);
    // console.log(mobile[prop]);  
}

const keys = Object.keys(mobile);
// console.log(keys);
for (const key of keys){
    // console.log(key, " - " , mobile[key]);
}
  const fridge = {
    brand : "hitachi",
    color : "gray black",
    price : 78000,
    isNew : false,
    width : 510
  }
  for ( const keyName in fridge){
    // console.log(keyName, " = " ,fridge[keyName]);
  }

  const props = Object.keys(fridge);
//   console.log(props);
  for (const prop of props){
    // console.log(prop);
    console.log(prop, "---" ,fridge[prop]);
    
  }
  