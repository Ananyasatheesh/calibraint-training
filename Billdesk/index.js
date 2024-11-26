// // const axios = require("axios");
// import axios from "axios";
// async function createOrder() {
//   try {
//     const response = await axios.post(
//       "https://uat1.billdesk.com/u2/payments/ve1_2/orders/create",
//       {
//         orderid: "TEST00000090061",
//         mercid: "BDMERCID",
//         order_date: "2023-03-25T15:14:39+05:30",
//         amount: "29999.28",
//         currency: "356",
//         ru: "https://www.merchant.com",
//         itemcode: "DIRECT",
//         device: {
//           init_channel: "internet",
//           ip: "123.0.0.1",
//           user_agent:
//             "Mozilla/5.0 (Windows NT 10.0; WOW64; rv:51.0) Gecko/20100101 Firefox/51.0",
//           accept_header:
//             "application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
//         },
//       },
//       {
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//           traceid: generateTraceId(), // Add the traceid header here
//         },
//       }
//     );
//     console.log("Response:", response.data);
//   } catch (error) {
//     console.error(
//       "Error Response:",
//       error.response ? error.response.data : error.message
//     );
//   }
// }

// // Function to generate a unique trace ID
// function generateTraceId() {
//   return `TRACE-${Math.floor(Math.random() * 1000000000)}`;
// }

// createOrder();

// function outerFunction(outerVariable) {
//     return function innerFunction(innerVariable) {
//         console.log(`Outer Variable: ${outerVariable}`);
//         console.log(`Inner Variable: ${innerVariable}`);
//     };
// }
// const closure = outerFunction("outside");
// closure("inside");
// // Output:
// // Outer Variable: outside
// // Inner Variable: inside
// function makeFunc() {
//   const name = "Mozilla";
//   function displayName() {
//     console.log(name);
//   }
//   return displayName;
// }

// const myFunc = makeFunc();
// // myFunc();
// function epicGreeting(salutation){
//   return function(name){
//     return function(phrase){
//       return function(closingPunctuation){
//         return
//         `${salutation}, ${name}. ${phrase}${closingPunctuation}`
//         }
//     }
//    }
// }
// epicGreeting("Sup")("Neil")("You are the man")("!") // "Sup, Neil. You are the man!"

// {
//     let blockScoped = "I'm inside a block";
//     console.log(blockScoped); // Works
// }
// console.log(blockScoped); // Error: blockScoped is not defined

// for (var i = 0; i < 3; i++) {
//   setTimeout(function () {
//     console.log(i); // Logs 3 three times
//   }, 1000);
// }
// function fetchData(callback) {
//   setTimeout(function () {
//     const data = { id: 1, name: "Alice" }; // Data fetched
//     callback(data); // Invoking the callback with the fetched data
//   }, 2000); // Simulating a delay of 2 seconds
// }

// fetchData(function (data) {
//   console.log("Data received:", data); // Logs the fetched data
// });

// function stepOne(callback) {
//   setTimeout(() => callback(null, "Step One Completed"), 1000);
// }

// function stepTwo(callback) {
//   setTimeout(() => callback(null, "Step Two Completed"), 1000);
// }

// function stepThree(callback) {
//   setTimeout(() => callback(null, "Step Three Completed"), 1000);
// }

// stepOne((err, result) => {
//   if (err) return console.error(err);
//   console.log(result);
//   stepTwo((err, result) => {
//     if (err) return console.error(err);
//     console.log(result);
//     stepThree((err, result) => {
//       if (err) return console.error(err);
//       console.log(result);
//     });
//   });
// });


// //SET TIME OUT FUNCTION
// setTimeout(() => {
//   console.log("Executed after 3secs");
// }, 3000);

// setTimeout(function () {
//   console.log("Anonymous func executed after 4secs");
// }, 4000);

// function fiveSecFuncton() {
//   console.log("Executed after 5secs");
// }
// setTimeout(fiveSecFuncton, 5000);



// function sevenSecFunc(sec) {
//   return `Executed after ${sec}secs`;
// }
// const sevenSecId = setTimeout(() => console.log(sevenSecFunc(7)), 7000);
// // - clearTimeout(sevenSecId) --> when this is executed, setTimeout will never be executed. because settimeout is immediately executed and assigned to sevenSecId, so clearTimeOut() will be executed before callback executes
// // - when using a return value in a functon, the function must be explicitly invoked() in setTimeOut func.
// // - since it is invoked, it is executed immediately without waiting, so the return value is again wrapped inside another function



// // SET INTERVAL FUNCTION
// // to stop set interval we have to use clearInterval()
// even if let count is used, as it is lexical scope, it can be used inside function
// let count = 0;
// const intervalTimer = setInterval(() => {
//     console.log("Consoled for every 2secs");
//     count++;
//     if (count === 5) {
//       clearInterval(intervalTimer);
//     }
//   },2000);

// //USING SET TIME OUT AND SET INTERVAL IN SAME FUNCTION
// const intervalId = setInterval(() => {
//   console.log("This will run every second");
// }, 1000);

// // Stop the interval after 5 seconds
// setTimeout(() => {
//   clearInterval(intervalId);
//   console.log("Interval cleared");
// }, 5000); 
// //--> output: 
// //This will run every second (5 times) 
// //Interval cleared 


//PROMISE
// const promise = new Promise((res,rej) => {
//   setTimeout(()=>{
//     res("Data fetched successfully")
//   },2000)
// })
// promise.then((data)=>console.log(data));

//Event-emitter
//An event can be emitted many times
const EventEmitter = require('events');
const emitter = new EventEmitter();

// clickButtonEvent is registered, triggered using .emit()
emitter.on('clickButtonEvent',()=>{
  console.log("A button is clicked");
})
emitter.emit('clickButtonEvent');

//clickButtonWithParameter --> when a event is triggered with a parameter
emitter.on("clickButtonWithParameter",(eventName)=>{
  console.log(`${eventName} button is clicked`)
});
emitter.emit("clickButtonWithParameter",'Start');
emitter.emit("clickButtonWithParameter", "End");


//when removing an event, it should have same event name, same callback as its parameter
const data = function(info){
  console.log(`Say ${info}`)
}
emitter.on("calciOn",data);
emitter.emit("calciOn", "Hi calculator");
emitter.removeListener("calciOn",data);
emitter.emit("calciOn", "Hi calculator"); //this line won't execute as calciOn event is removed


// Event can be emitted only once
emitter.once("Timer",()=>{
  console.log("Timer starts only once");
})
emitter.emit("Timer");
emitter.emit("Timer"); // this won't execute as event is registered only once.

console.log(emitter.getMaxListeners())

// Define a listener function
const alist = () => console.log('A listener for event');

// Attach the listener to the 'event'
emitter.on('event', alist);

// Retrieve and display the listeners attached to 'event'
console.log(emitter.listeners('event')); // Output: [ [Function: listener] ]
