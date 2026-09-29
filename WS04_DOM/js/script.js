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

// Select the drop-down menu with 'querySelector()'
// Add a listener for the 'change' event
// Read the user's selection from the menu's 'value' property
// Change the animal's name, image, alternative text and description based on the selection
// Add a 'mouseenter' event listener to the image. It should add the CSS class image-highlight
// Add a 'mouseleave' event listener that removes the same CSS class
const animalSelect = document.querySelector("#animalSelect");
const animalName = document.querySelector("#animalName");
const animalImage = document.querySelector("#animalImage");
const animalDescription = document.querySelector("#animalDescription");

animalSelect.addEventListener("change", function () {
    const selectedAnimal = animalSelect.value;

    if (selectedAnimal === "elephant") {
        animalName.textContent = "Elephant";
        animalImage.src = "images/elephant.png";
        animalImage.alt = "Elephant";
        animalDescription.textContent = "Elephants are the world's largest land animals.";
    }
    else if (selectedAnimal === "tiger") {
        animalName.textContent = "Tiger";
        animalImage.src = "images/tiger.png";
        animalImage.alt = "Tiger";
        animalDescription.textContent = "Tigers are large wild cats with striped fur.";
    }
    else if (selectedAnimal === "penguin") {
        animalName.textContent = "Penguin";
        animalImage.src = "images/penguin.png";
        animalImage.alt = "Penguin";
        animalDescription.textContent = "Penguins are birds that cannot fly but are excellent swimmers.";
    }
    else if (selectedAnimal === "panda") {
        animalName.textContent = "Panda";
        animalImage.src = "images/panda.png";
        animalImage.alt = "Panda";
        animalDescription.textContent = "Pandas spend much of their time eating bamboo.";
    }
});

animalImage.addEventListener("mouseenter", function () {
    animalImage.classList.add("image-highlight");
});

animalImage.addEventListener("mouseleave", function () {
    animalImage.classList.remove("image-highlight");
});

        // Task 4 Adding animal observations

// Add a listener for the form's 'submit' event
// Prevent the form's default action with 'event.preventDefault()'
// Check that none of the fields are empty
// Create a new 't'r element for the table
// Create a separate 'td' element for each value
// Attach the new row to the table's 'tbody' element
const animalForm = document.querySelector("#animalForm");

const observationAnimal = document.querySelector("#observationAnimal");
const observationLocation = document.querySelector("#observationLocation");
const observationDate = document.querySelector("#observationDate");

const observationTableBody = document.querySelector("#observationTableBody");

animalForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const animal = observationAnimal.value;
    const location = observationLocation.value;
    const date = observationDate.value;

    if (animal === "" || location === "" || date === "") {
        alert("Please fill in all fields");
        return;
    }

    const row = document.createElement("tr");
    const animalCell = document.createElement("td");
    const locationCell = document.createElement("td");
    const dateCell = document.createElement("td");

    animalCell.textContent = animal;
    locationCell.textContent = location;
    dateCell.textContent = date;

    row.append(animalCell, locationCell, dateCell);
    observationTableBody.append(row);

});

