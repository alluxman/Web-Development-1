// Select → Listen → Change the DOM

        // Task 1 Changing content

// Change heading
const changeHeadingButton = document.querySelector("#changeHeadingButton");
const taskOneHeading = document.querySelector("#taskOneHeading");

changeHeadingButton.addEventListener("click", function () {
    taskOneHeading.textContent = "Updated heading!";
});

// Change style
const changeStyleButton  = document.querySelector("#changeStyleButton");

changeStyleButton.addEventListener("click", function () {
    taskOneHeading.classList.toggle("highlight");
});

// Change animal text
const changeTextButton = document.querySelector("#changeTextButton");
const animalText = document.querySelector("#animalText");

changeTextButton.addEventListener("click", function () {
    animalText.textContent = "Task 1: Changing content is done, move forward :-)";
});

// Bonus

        // Task 2 Creating elements with JavaScript

// Select the element below with the ID "animalContent"
const animalContent = document.querySelector("#animalContent");

// Create an 'h3' element containing the text "Animal of the Day"
// Add the CSS class "animal-heading" to the heading you created
const h3 = document.createElement("h3");

h3.textContent = "Animal of the Day";
h3.classList.add("animal-heading");

// Create a 'paragraph' describing an animal of your choice
const p = document.createElement("p");

p.textContent = "Today it's penguin!";

// Create an 'img' element and set its 'src' and 'alt' values
const img = document.createElement("img");

img.src = "images/penguin.png";
img.alt = "Penguin";

// Attach the elements to the page with 'append()'
animalContent.append(h3, p, img);

// Add event listeners to the buttons.
// The first button hides the animalContent element
// and the second button shows it again
const hideAnimalButton = document.querySelector("#hideAnimalButton");
const showAnimalButton = document.querySelector("#showAnimalButton");

hideAnimalButton.addEventListener("click", function () {
    animalContent.hidden = true;
});
showAnimalButton.addEventListener("click", function () {
    animalContent.hidden = false;
})

        // Task 3 Selecting an animal

// 