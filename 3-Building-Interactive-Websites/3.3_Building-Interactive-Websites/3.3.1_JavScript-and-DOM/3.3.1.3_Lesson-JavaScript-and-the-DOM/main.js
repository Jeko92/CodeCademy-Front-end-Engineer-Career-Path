// 2/9 Tweak an Element
/* document.body.innerHTML =
  "<h1>This is now the heading of the body element</h1>"; */

// 3/9 Select and Modify Elements
/* document.querySelector('h1').innerHTML = 'Most popular Harry Potter characters';

document.getElementById('fourth').innerHTML = 'Professor Snape';

document.getElementsByClassName('slytherin')[0].innerHTML='Salazar Slytherin';

document.getElementsByTagName('li')[0].innerHTML = 'Dobby'; */

// 4/9 Style an Element
/* document.body.style.backgroundColor = "#201F2E";
document.querySelector(".heading").style.fontFamily = "Roboto"; */

// 5/9 Traversing the DOM
/* const first = document.body.children[0];
first.innerHTML = "BROWN BEARS ARE AWESOME!";
first.parentNode.style.backgroundColor = "beige"; */

// 6/9 Create and Insert Elements
/* const newAttraction = document.createElement("li");
newAttraction.id = "vespa";
newAttraction.innerHTML = "Rent a Vespa";
document.getElementById("italy-attractions").appendChild(newAttraction); */

// 7/9 Remove an Element
/* const elementToRemove = document.getElementById("vespa");
document.getElementById("italy-attractions").removeChild(elementToRemove); */

// 8/9 Add Click Interactivity
let element = document.querySelector("button");

function turnButtonTomato() {
  // Add code to turn button red
  element.style.backgroundColor = "tomato";
  element.style.color = "#fff";
  element.innerHTML = "Red Button";
}

element.onclick = turnButtonTomato;
