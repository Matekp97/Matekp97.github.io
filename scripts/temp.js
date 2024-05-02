const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

let myName;
myName = "Bob";
/* let myVariable = "Bob"; */

let iceCream = "chocolate";
if (iceCream === "chocolate") {
  alert("Yay, I love chocolate ice cream!");
} else {
  alert("Awwww, but chocolate is my favorite…");
}

function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
  }
multiply(4, 7);
multiply(20, 20);
multiply(0.5, 3);

let myVariable = document.querySelector("h1");
alert("hello!");

document.querySelector("html").addEventListener("click", function () {
    alert("Ouch! Stop poking me!");
  }); 
  /* Here we select the <html> element. We then call its addEventListener() 
  function, passing in the name of the event to listen to ('click') and a 
  function to run when the event happens.*/
  /*    document.querySelector("html").addEventListener("click", () => {
        alert("Ouch! Stop poking me!");
        });*/