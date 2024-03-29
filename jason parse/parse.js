
const jsonString = '{"name" : "John", "age" : 30, "city" : "Dhaka"}'

console.log(jsonString);

const myObj = JSON.parse(jsonString);

// convert to valid object.

console.log(myObj);


console.log('=============');

const jsonText = '["BMW", "FORD", "FERRARY" ,"VOLVO"]'

console.log(jsonText);

// Convert to an valid array

const myArray = JSON.parse(jsonText);

console.log(myArray);


//==========Using the reviver function===========//


const text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';

const obj = JSON.parse(text,function(key, value){

    //console.log(`${key} - ${value}`);
    if (key == "birth"){
        return new Date(value);
    } 
        return value;
        
})

console.log(obj);