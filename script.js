// Select the first <h1> element
const h1Element = document.querySelector("h1");

// Change the text content of the <h1>
h1Element.textContent = "New Heading Text";

// Change the color of the <h1>
h1Element.style.color = "blue"; // You can use any valid CSS color

const liElements = document.querySelectorAll("li");

// Use a for loop to iterate over each <li> element
for (let i = 0; i < liElements.length; i++) {
  liElements[i].style.color = "red"; // Change the text color to red
}

// Select all <th> elements
const thElements = document.getElementsByTagName("th");

// Loop through each <th> element and increase its font size
for (let i = 0; i < thElements.length; i++) {
  thElements[i].style.fontSize = "200px"; // Change to your desired font size
}
