document.getElementById("submit").addEventListener("click", submit);
document.getElementById("delete").addEventListener("click", remove);
let label = document.getElementById("checkbox");
let counter = 1;
let store = localStorage.getItem("todos");

function submit() {
  event.preventDefault();
  let userInput = document.getElementById("inputF");
  let newList = document.createElement("li");
  if (userInput.value.length != 0 && counter <= 5) {
    newList.textContent = userInput.value;
    newList.id = "newDiv" + counter;
    label.appendChild(newList);

    let Checkbox = document.createElement("input");
    Checkbox.type = "checkbox";
    Checkbox.id = "check" + counter;
    newList.appendChild(Checkbox);

    counter += 1;
    localStorage.setItem("todos", userInput.value);
    /*let storage = localStorage.getItem("todos");
    console.log(storage)*/
  }
}

function remove() {
  event.preventDefault();

  for (let count = 1; count < counter; count++) {
    let checkbox = document.getElementById("check" + count);
    if (checkbox && checkbox.checked) {
      let element = document.getElementById("newDiv" + count);
      if (element) {
        element.remove();
        done();
      }
    }
  }
}

function done() {

  let finish = document.getElementById("finished");

  let store = localStorage.getItem("todos");

  if (store) {

    let tasks = store.split(',');

    tasks.forEach(function (task) {
      let finishedTasks = document.createElement("li");
      finishedTasks.textContent = task;
      finishedTasks.id = "finishedTasks"
      finish.appendChild(finishedTasks);
    });
  } else {
    console.log("No tasks found in localStorage.");
  }
}


