// Storing the selector for the enter, input and ul elements of the html...
let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");

// Function to get length of the input textbox
function inputLength() {
  return input.value.length;
}

function createListElement() {
  // Creating the input element
  let inputCheckBox = document.createElement("input");

  // Adding attributes to this input element before appending to li
  inputCheckBox.type = "checkbox";
  inputCheckBox.name = "listItem";

  // Creating li element
  let li = document.createElement("li");

  // Appending the input element to li
  li.appendChild(inputCheckBox);

  // Appending the text element given within checkbox...
  li.appendChild(document.createTextNode(input.value));

  // Creating delete button with class Name
  let deleteButton = document.createElement("button");
  deleteButton.className = "btn-delete";

  // Creating the i element for font awesome icon and setting its class name and attributes..
  let deleteIcon = document.createElement("i");
  deleteIcon.className = "fa fa-minus-circle";
  deleteIcon.setAttribute("aria-hidden", "true");

  // Appending the i element with the font awesome icon with the button element..
  deleteButton.appendChild(deleteIcon);

  // Appending the delete button element with li
  li.appendChild(deleteButton);

  //Appending li element to the parent node ul
  ul.appendChild(li);

  // Reseting the value inside the textbox for new entry...
  input.value = "";

  buttonListeners();
  deleteButtonsListeners();
}

// Function to add to list after mouse click
function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

// Function to add to list after pressing enter key in keyboard...
function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

// Function to toggle the done class for strikethrough effect...
function addStrikethrough() {
  if (this.checked) {
    this.parentNode.classList.toggle("done");
  } else if (this.checked === false) {
    this.parentNode.classList.toggle("done");
  }
}

function deleteListItem() {
  this.parentNode.parentNode.removeChild(this.parentNode);
}

// Event listener to execute the appropriate action after mouse click on the enter button
button.addEventListener("click", addListAfterClick);

// Event listener to execute the appropriate action after pressing enter key while in the input textbox
input.addEventListener("keypress", addListAfterKeypress);

// Storing selector for the checkbox buttons
let buttons;

// Function for Iterating through the selector to see if a click action is being performed on any one of the checkboxes
function buttonListeners() {
  buttons = document.querySelectorAll('input[name="listItem"]');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", addStrikethrough);
  }
}

buttonListeners();

let deleteButtons;

function deleteButtonsListeners() {
  deleteButtons = document.querySelectorAll("button[class='btn-delete']");
  for (let j = 0; j < deleteButtons.length; j++) {
    deleteButtons[j].addEventListener("click", deleteListItem);
  }
}

deleteButtonsListeners();
