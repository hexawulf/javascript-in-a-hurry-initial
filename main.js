// ============================================================
// main.js - First JavaScript external file
// Learning: External JS files are linked via <script src="main.js">
// ============================================================

// ---- Menu Section ----

// console.log() outputs to the browser's Developer Console (F12)
console.log("This is the start of main.js");

// Functions: reusable blocks of code defined with 'function' keyword
// This function accepts a 'message' parameter and displays it as an alert popup
function testAlert(message) {
  alert(message);
}

// Calling the function with a string argument
testAlert("Welcome! This is an alert from main.js.");
// testAlert(4+5);  // JS evaluates the expression first, then passes 9

// getElementById(): selects a single element by its 'id' attribute
// .innerHTML: sets or gets the HTML content inside that element
document.getElementById("greeting").innerHTML = "Hello from main.js!";

// querySelector(): selects the FIRST element matching a CSS selector
// addEventListener(): attaches an event handler without overwriting existing ones
// "click" is the event type; the second argument is a callback function
document.querySelector("p#weather").addEventListener("click", function () {
  alert("p element clicked");
});

// classList.add() / .remove(): toggle CSS classes for show/hide navigation
document.querySelector("#open-nav-menu").addEventListener("click", function () {
  document.querySelector("header nav .wrapper").classList.add("nav-open");
});

document.querySelector("#close-nav-menu").addEventListener("click", function () {
  document.querySelector("header nav .wrapper").classList.remove("nav-open");
});

// ---- Variables & String Concatenation ----

// 'const' = constant, cannot be reassigned (use for values that won't change)
// 'let'   = block-scoped, can be reassigned (use for values that will change)
// 'var'   = function-scoped, older style (avoid in modern JS - use let/const)
const customer = "Jane Doe";
let balance = 500;

// String concatenation with the + operator
console.log("Hello, " + customer + ". Your balance is " + balance + ".");

// Updating a mutable variable
balance = balance + 250;

// Template literals: backticks (`) allow embedded expressions with ${...}
// Cleaner and more readable than + concatenation
console.log(`Hello, ${customer}. Your new balance is ${balance}.`);

// ---- Greeting Section (Udemy course - do not remove) ----

const greetingText = "Good morning, 0xWulf!";
const weatherCondition = "sunny";
const userLocation = "Oslo";
let temperature = 16.789; // must be mutable, so use let



//let weatherText = `The weather is ${weatherCondition} in ${userLocation} and it's ${celsiusToFahr(temperature).toFixed(1)} Degrees outside.`;
let celsiusText = `The weather is ${weatherCondition} in ${userLocation} and it's ${temperature.toFixed(1)} Degrees Celsius outside.`;
let fahrText = `The weather is ${weatherCondition} in ${userLocation} and it's ${celsiusToFahr(temperature).toFixed(1)} Degrees Fahrenheit outside.`;

console.log(greetingText);
console.log(celsiusText);
console.log(fahrText);

document.querySelector("h1#greeting").innerHTML = greetingText;
document.querySelector("p#weather").innerHTML = celsiusText;


function celsiusToFahr(temperature) {
  let fahr = (temperature * 9/5) + 32;
  //console.log(fahr);
  return fahr;
}
//alert("The temperature outside is " + celsiusToFahr(temperature).toFixed(1) + " Degrees Fahrenheit.");

document.querySelector(".weather-group").addEventListener("click", function(e){
if(e.target.id == "celsius"){
  document.querySelector("p#weather").innerHTML = celsiusText;
} else if (e.target.id == "fahr"){
  document.querySelector("p#weather").innerHTML = fahrText;
}
});


// ---- Clock section ----

setInterval(function(){
let localTime = new Date();
document.querySelector("span[data-time=hours]").textContent = localTime.getHours().toString().padStart(2,'0');
document.querySelector("span[data-time=minutes]").textContent = localTime.getMinutes().toString().padStart(2,'0');
document.querySelector("span[data-time=seconds]").textContent = localTime.getSeconds().toString().padStart(2,'0');
},1000);

/* 
Example of a for loop iterating over an array of animals
let animals = ["dog","cat","mouse","bird"];
for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
} */



//Gallery Section

//array of objects representing gallery images
const galleryImages = [
{  src: "./assets/gallery/image1.jpg", alt: "Thumbnail image 1" },
{ src: "./assets/gallery/image2.jpg", alt: "Thumbnail image 2" },
{ src: "./assets/gallery/image3.jpg", alt: "Thumbnail image 3" },
];

/* for (let i = 0; i < galleryImages.length; i++) {

  console.log(galleryImages[i]);
}
 */























// End of main.js
console.log("This is main.js end.");