
// Function definition
function findElementAndHandleClick(buttonToBeClicked, textToAlert) {
  const myButton = document.getElementById(buttonToBeClicked);

  myButton.addEventListener("click", function () {
    alert(textToAlert);
  });
}

// Function call
findElementAndHandleClick("header-button", "Uradice nesto");
findElementAndHandleClick("sedan", "Ponuda Sedana");
findElementAndHandleClick("truck", "Ponuda Kamioneta");
findElementAndHandleClick("suv/cross", "Ponuda SUV-ova");
findElementAndHandleClick("coupe", "ponude Coupe-ova");
findElementAndHandleClick("hatchback", "Ponuda  Hatchback-ova");
findElementAndHandleClick("van", "Ponuda Vanova");
findElementAndHandleClick("convertable", "Ponuda Kabrioleta");
findElementAndHandleClick("wagon", "Ponuda Karavana");



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
