
const myObj = {name: "John", age: 30, city: "New York"};

console.log(myObj);

const stringify = JSON.stringify(myObj);

console.log(stringify);


//===============//
console.log('==================');

const arr = ["John", "Peter", "Sally", "Jane"];

const stringifyArr = JSON.stringify(arr);

console.log(stringifyArr);




// Storing data:

const myObject = {name: "John", age: 31, city: "New York"};

const myJSON = JSON.stringify(myObject);

//console.log(myJSON);

localStorage.setItem("testJSON", myJSON);

// Retrieving data:

let text = localStorage.getItem("testJSON");
let obj = JSON.parse(text);

const a = document.getElementById("demo")
a.innerHTML = obj.name;