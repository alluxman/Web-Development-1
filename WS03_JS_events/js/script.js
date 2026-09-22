// Add your JavaScript solutions here.
// 1. Basic Click Events
function showTable() {
    const animal = "Tiger";
    const habitat = "Forest";
    const diet = "Carnivore";

    const table = `
        <table>
            <thead>
                <tr>
                    <th>Animal</th>
                    <th>Habitat</th>
                    <th>Diet</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${animal}</td>
                    <td>${habitat}</td>
                    <td>${diet}</td>
                </tr>
            </tbody>
        </table>
    `;

    const tableContainer = document.querySelector("#tableContainer");

    tableContainer.innerHTML = table;
}

// 2. Event listeners and DOM manipulation
const headings = document.querySelectorAll("h2");

headings[1].addEventListener("mouseover", function () {
    console.log("Stepped over me with a mouse!");
});

headings[0].addEventListener("click", function () {
    headings[0].style.color = "red";
    headings[0].textContent = "Bye bye mouse!";
});

// 3. Input events

const feedback = document.querySelector("#feedback");
const statusMessage = document.querySelector("#status");
const charcount = document.querySelector("#charcount");
const preview = document.querySelector("#preview");

feedback.addEventListener("focus", function () {
    statusMessage.textContent = "You are writing feedback...";
    statusMessage.style.color = "rgb(109, 107, 231)";
});

feedback.addEventListener("blur", function () {
    statusMessage.textContent = "";
    statusMessage.style.color = "#666";
});

feedback.addEventListener("input", function () {
    charcount.textContent = feedback.value.length + "/200";
    preview.textContent = feedback.value;
});

// 4. Form Submission

const feedbackForm = document.querySelector("#feedbackForm");

feedbackForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (feedback.value.length < 10 || feedback.value.length > 200) {
        statusMessage.textContent = "Feedback must be between 10 and 200 characters.";
        statusMessage.style.color = "red";
    }
    else {
        feedback.value = "";
        statusMessage.textContent = "Thank you for your feedback!";
    }
});

// 5. Keyboard Events

const keybox = document.querySelector("#keybox");
const keyinfo = document.querySelector("#keyinfo");

document.addEventListener("keydown", function (event) {
    console.log(event);

    keyinfo.textContent = "Key: " + event.key + ", Code: " + event.code;

    keybox.textContent = event.key;
    keybox.style.fontSize = "2em";
});