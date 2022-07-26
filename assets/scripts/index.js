
// Function definition
function findElementAndHandleEvent(element, textToAlert, typeOfEvent) {
  const myButton = document.getElementById(element);

  myButton.addEventListener(typeOfEvent, function () {
    alert(textToAlert);
  });
}

// Function call
findElementAndHandleEvent("header-button", "Uradice nesto", "click");
findElementAndHandleEvent("sedan", "Ponuda Sedana", "click");
findElementAndHandleEvent("truck", "Ponuda Kamioneta", "click");
findElementAndHandleEvent("suv/cross", "Ponuda SUV-ova", "click");
findElementAndHandleEvent("coupe", "ponude Coupe-ova", "click");
findElementAndHandleEvent("hatchback", "Ponuda  Hatchback-ova", "click");
findElementAndHandleEvent("van", "Ponuda Vanova", "click");
findElementAndHandleEvent("convertable", "Ponuda Kabrioleta", "click");
findElementAndHandleEvent("wagon", "Ponuda Karavana", "click");

findElementAndHandleEvent("fname", "Promenila se vrednost", "keyup");


fetch('https://jsonplaceholder.cypress.io/todos/1')
  .then(response => response.json())
  .then(function (json) {
    document.querySelector(".header-heading").textContent = json.title;
  });



// const headerButton = document.getElementById("header-button");

// headerButton.addEventListener("click", function () {
//   alert("Uradice nesto");
// });

// const sedanButton = document.getElementById("sedan");

// sedanButton.addEventListener("click", function () {
//   alert("Ponuda Sedana");
// });

// const truckButton = document.getElementById("truck");

// truckButton.addEventListener("click", function () {
//   alert("Ponuda Kamioneta");
// });

// const suvButton = document.getElementById("suv/cross");

// suvButton.addEventListener("click", function () {
//   alert("Ponuda SUV-ova");
// });

// const coupeButton = document.getElementById("coupe");

// coupeButton.addEventListener("click", function () {
//   alert("ponude Coupe-ova");
// });

// const hatchbackButton = document.getElementById("hatchback");

// hatchbackButton.addEventListener("click", function () {
//   alert("ponude Hatchback-ova");
// });

// const vanButton = document.getElementById("van");

// vanButton.addEventListener("click", function () {
//   alert("ponude Vanova");
// });

// const cabrioButton = document.getElementById("convertable");

// cabrioButton.addEventListener("click", function () {
//   alert("ponude Kabrioleta");
// });

// const wagonButton = document.getElementById("wagon");

// wagonButton.addEventListener("click", function () {
//   alert("ponude Karavana");
// });
