const topInput = document.getElementById("main-input");
const newInput = document.getElementById("new");
const completedInput = document.getElementById("complited");

topInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter" && topInput.value != null && topInput.value.match(/^ *$/) == null)
    {
      makeANewTask();
    }
});

function makeANewTask() {
  const tasksDiv = document.querySelector(".new-tasks");
  // creating new div for new tasks
  const newTaskDiv = document.createElement("div");
  newTaskDiv.classList.add("new-task-item")
  // creating new input 
  const newTaskInput = document.createElement("input");
  // setting input type
  newTaskInput.type = "checkbox";
  // creating p tag
  const newTaskpTag = document.createElement("p");
  // adding input tag in new task div
  newTaskDiv.appendChild(newTaskInput);
  // adding new task p tag in task div
  newTaskDiv.appendChild(newTaskpTag);
  // p tag inner html is now equal to input value
  newTaskpTag.innerHTML = topInput.value;
  // reseting input value
  topInput.value = "";
  tasksDiv.appendChild(newTaskDiv);
  // add event listener for checkbox
  newTaskInput.addEventListener("click", addingTaskToCompleted);
}

function addingTaskToCompleted(event) {
    let checked = false;
  let checkedTimeOut = null; 
  if (event.target.checked) {
      checkedTimeOut = setTimeout(() => {
    checked = true;
    if (event.target.checked && checked) {
      const complitedTasksDiv = document.querySelector(".completed-tasks");
      const newComplitedTask = document.createElement("p");
      complitedTasksDiv.appendChild(newComplitedTask);
      const pTag = event.target.parentNode.querySelector("p");
      newComplitedTask.innerHTML = pTag.innerHTML;
      event.target.parentNode.parentNode.removeChild(event.target.parentNode);
      setTimeout(() => {
        newComplitedTask.parentNode.removeChild(newComplitedTask);
      }, 5000);
    }
    }, 2000);
  } else {
      clearTimeout(checkedTimeOut);
      checked=false;
  }
}

