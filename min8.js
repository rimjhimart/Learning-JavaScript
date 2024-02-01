// Selecting an element by its ID
const elementById = document.querySelector('#yourElementId');

// Selecting an element by its class
const elementByClass = document.querySelector('.yourElementClass');

// Selecting an element by its tag name
const elementByTagName = document.querySelector('p'); // selects the first <p> element

// Selecting the first element that matches a more complex selector
const complexSelector = document.querySelector('ul li.active');

// Checking if an element was found
if (elementById) {
    // Do something with the selected element
}

// You can also modify the selected element
if (elementByClass) {
    elementByClass.textContent = 'New content';
}