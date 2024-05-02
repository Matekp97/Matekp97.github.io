const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/nami.jpeg") {
    myImage.setAttribute("src", "images/nami2.jpeg");
  } else {
    myImage.setAttribute("src", "images/nami.jpeg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
  }

/*This first line of this block uses the negation operator (logical NOT, represented by the !) 
to check whether the name data exists. If not, the setUserName() function runs to create it. 
If it exists (that is, the user set a user name during a previous visit), we retrieve the stored 
name using getItem() and set the textContent of the heading to a string, plus the user's name, 
as we did inside setUserName(). */
if (!localStorage.getItem("name")) {
setUserName();
} else {
const storedName = localStorage.getItem("name");
myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
  };