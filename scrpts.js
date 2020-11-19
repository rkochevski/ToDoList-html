// map all the elements
let listItems = document.querySelector("ul");
let btnAdd = document.querySelector("#add-btn");
// let btnDel = document.querySelectorAll("#delete-btn");

// togle class=checked on the list item
listItems.addEventListener('click', function (event) {
  // togle class=checked on the list item
  if (event.target.classList.contains("list-item")) {
    event.target.children[1].classList.toggle("checked");
  } else if (event.target.classList.contains("list-text")) {
    event.target.classList.toggle("checked");
    // delete list item if clicked on delete
  } else if (event.target.classList.contains("delete-btn")) {
    event.target.parentElement.remove();
  }
});

// create function for adding new To-Do in the list
function addToDoItem(todoValue) {
  // create the 'li' element and set it's attributes
  let listElement = document.createElement("li");
  listElement.setAttribute("class", "list-group-item list-item");
  // create the 'span' element and set it's attributes
  let spanElement = document.createElement("span");
  spanElement.setAttribute("class", "btn float-left my-auto oi oi-trash text-white delete-btn");
  spanElement.setAttribute("title", "trash");
  spanElement.setAttribute("aria-hidden", "true");
  // create the 'div' element and set it's attributes
  let divElement = document.createElement("div");
  divElement.setAttribute("class", "list-text my-auto");
  divElement.innerText = todoValue;

  // append the new elements to the list
  listElement.appendChild(spanElement);
  listElement.appendChild(divElement);
  listItems.appendChild(listElement);
}

// listen for Enter inside the text inpu field
function inputValue() {
  let newInput = document.querySelector(".text-item");
  newInput.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      if (newInput.value == "") {} else {
        addToDoItem(newInput.value);
        newInput.value = "";
      }
    }
  });
}

function addInputItem() {
  let inputElement = document.querySelector(".li-input");
  // if input element exists in the DOM, remove it
  if (inputElement) {
    inputElement.remove();
    // if input elmeent does not exists in the DOM, create it
  } else {
    // create the 'li' element and set it's attributes
    let inputListField = document.createElement("li");
    inputListField.setAttribute("class", "list-group-item list-item li-input");

    // create the 'input' element and set it's attributes
    let inputTextField = document.createElement("input");
    inputTextField.setAttribute("type", "text");
    inputTextField.setAttribute("class", "text-item");
    inputTextField.setAttribute("placeholder", "Add New Item");

    // insert the new elements in the DOM
    listItems.insertBefore(inputListField, listItems.firstChild);
    inputListField.appendChild(inputTextField);

    // add event listener on the input text field
    inputValue();
  }
}

// listen for click on the Add button
btnAdd.addEventListener('click', addInputItem);
