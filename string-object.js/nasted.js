const collage = {
    name : "ABC",
    class : ["11", "12"],
    events : ["21 feb", "science fair", "16 december"],
    unique : {
        color : "blue",
        result: {
            GPA: "5",
            merit: "top"
        }
    }
}
delete collage.class;
console.log(collage.class);
collage.unique.result.merit="top top top"
console.log(collage["unique"]["result"]["merit"]);

collage.events[2] = "17 march";
console.log(collage.events[2]);
