document.getElementById("submit").addEventListener("click", submit);

function submit() {
  event.preventDefault();
  let userInput = document.getElementById("inputF");
  let newDiv = document.createElement("div");
  newDiv.textContent = userInput.value;
  document.body.appendChild(newDiv);
  newDiv.id = "newDiv";
}