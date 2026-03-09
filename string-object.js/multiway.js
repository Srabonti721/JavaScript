const  persons  ={
    name:"sume",
    age: 22,
    salary: 25000,
    isjob: false,
    profession: "developer",
    "fav place": ["sundorbon", "bandorbon", "santmarten"]
}
// console.log(persons.name);
// dot notation . dot symbol diya object ar property value access kora
const baton = persons.salary;
console.log(baton);
// third bracket notation
console.log(persons["isjob"]);
const job = persons["isjob"];
console.log(job);
const place = persons["fav place"];
console.log(place);
 
const keyName = "profession";
console.log(persons[keyName]);

