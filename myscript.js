document.getElementById("submit").addEventListener("click", submit);

function submit() {
  event.preventDefault();
  let userInput = document.getElementById("inputF");
  let newList = document.createElement("li");
  newList.textContent = userInput.value;
  document.body.appendChild(newList);
  newList.id = "newDiv";


}

