// let age = 17;

// if (age >= 18) {
//   console.log("u can vote!");
// } else {
//   console.log("u can't vote!");
// }

// let n = -1;

// if (n == 0) {
//   console.log("number of n == 0");
// } else if (n > 0) {
//   console.log("number of n > 0");
// } else {
//   console.log("number of n < 0");
// }

// let avg = 100;

// if (avg < 50) {

//   console.log("Grad F ");
// } else if (avg >= 50 && avg < 60) {
//   console.log("Grad E");
// } else if (avg >= 60 && avg < 70) {
//   console.log("Grad D");
// } else if (avg >= 70 && avg < 80) {
//   console.log("Grad C");
// } else if (avg >= 80 && avg < 90) {
//   console.log("Grad B");
// } else if (avg >= 90 && avg <= 100) {
//   console.log("Grad A");
// }

// }else if(avg >= 90 && avg <= 100){
//     console.log("Grad B");
// }

// let isCheck = true;

// isCheck == true ? console.log("Check it") : console.log("Not check");

// let check = isCheck == true ? "Check it" : "Not check";

// console.log(check);

let btn = document.getElementById("btn");
let box = document.getElementById("box");
let isCheck = true;

btn.addEventListener("click", function () {
  if (isCheck == true) {
    btn.style.backgroundColor = "blue";
    btn.style.color = "white";
    // btn.style.width = "600px";

    isCheck = false;

    box.style.width = "500px";
  } else {
    btn.style.backgroundColor = "red";
    btn.style.color = "white";

    isCheck = true;
    box.style.width = "100px";
  }
});
