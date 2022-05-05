// Setting up variables for our HTML elements using DOM selection
const form = document.getElementById("taskform");
const submitBtn = document.querySelector(".submit-form"); // Complex CSS query
const tasklist = document.getElementById("tasklist");
const taskInput = document.getElementById("taskInput");
const newTasksBtn = document.querySelector(".open-button");
const closeTasksBtn = document.querySelector(".close-button");

// Event listener for Button click
// This could also be form.addEventListener("submit", function() {...} )
submitBtn.addEventListener("click", function(event) {
  event.preventDefault(); // Not as necessary for button, but needed for form submit

  let task = form.elements.task.value; // could be swapped out for line below
  //let task = taskInput.value;

  let due = (new Date(form.elements.dueDate.value)).toLocaleDateString('en-GB');
  let completionTime = completionTimeInput.value;
  let priorityRating = priorityInput.value;
  let estimatedTime = estimatedTimeInput.value;

  // Call the addTask() function using
  addTask(task, due, completionTime, priorityRating, estimatedTime, false);

  // Log out the newly populated taskList everytime the button has been pressed
  console.log(taskList);
})

// Create an empty array to store our tasks
var taskList = [];

function addTask(taskDescription, dueDate, completionTime, priorityRating, estimatedTime, completionStatus) {
  let task = {
    taskDescription,
    dueDate,
    completionTime,
    priorityRating,
    estimatedTime,
    completionStatus
  };

  // Add the task to our array of tasks
  taskList.push(task);

  // Separate the DOM manipulation from the object creation logic
  renderTask(task);
}


// Function to display the item on the page
function renderTask(task) {

  //assigning classes to my task componenets so that I can style them seperately (in taskform.scss)
  task.dueDate.className = "dueStyle";
  task.completionTime.className = "dueStyle";
  task.estimatedTime.className = "estStyle";
  if (task.priorityRating == "Low") {
    task.priorityRating.className = "lowPriority";
  }
    else if (task.priorityRating == "Medium") {
    task.priorityRating.className = "medPriority";
    }
    else if (task.priorityRating == "High") {
    task.priorityRating.className = "highPriority";
    }

  let item = document.createElement("li");
  item.innerHTML = "<div class='render'>" + task.taskDescription + " " + task.dueDate + ", " + task.completionTime + " " + task.priorityRating + " " + task.estimatedTime + " min est." + "</div>";
  tasklist.appendChild(item);

  // Setup delete button DOM elements
  let delButton = document.createElement("button");
  let delButtonText = document.createTextNode("Delete");
  delButton.appendChild(delButtonText);
  item.appendChild(delButton); // Adds a delete button to every task

  // Listen for when the 
  delButton.addEventListener("click", function(event){
    item.remove(); // Remove the task item from the page when button clicked
    // Because we used 'let' to define the item, this will always delete the right element
  })
  
  // Clear the value of the input once the task has been added to the page
  form.reset();
}

//Task form pop-up

newTasksBtn.addEventListener("click", function(event) {
    taskform.style.display = "flex";
})

closeTasksBtn.addEventListener("click", function(event) {
    taskform.style.display = "none";
})