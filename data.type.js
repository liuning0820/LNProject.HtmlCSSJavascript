/*
Javascript contains two data types: primitive type and object type. 
primitive type contains: number, string, boolean, null and undefined. 

*/

//number
0.1 + 0.2 === 0.3 //false

//string

//boolean, true or false

//null and undefined



//object, array, function

var flight = {
    airline : "Oceanic",
    number: 815,
    departure: {
        IATA : "SYD",
        time: "2016-9-22 14:50",
        city: "Sydney"
    }
}

// typeof flight.toString
// typeof flight.airline
// typeof flight.number
//Will not check the prototype chain
// flight.hasOwnProperty('toString')
// flight.hasOwnProperty("departure")


// var sayHello2= function () {
//     sayHello();
    
// };

// var sayHello3={
//     sh: sayHello
// };


var sayHello= function(){
        alert("Hi");
    };

    function hello(x){
                x();
        alert("你好");

    }

    // hello(sayHello);

    //callback
    hello(function(){
        alert("hello world");
    });
    
    
    
    




