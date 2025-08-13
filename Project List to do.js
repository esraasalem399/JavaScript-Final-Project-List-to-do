// add new task
document.getElementById("submitButt").addEventListener("click", function () {
  let input = document.getElementById("textInput").value.trim();
  if (input === "") return;

  let perantContener = document.createElement("li");

  let childContener = document.createTextNode(input);
  perantContener.appendChild(childContener);

  // delete button
  let perantButton = document.createElement("button");
  perantButton.textContent = "delete";
  perantButton.addEventListener("click", function () {
    perantContener.remove();
  });
  perantContener.appendChild(perantButton);

  // Checkbox
  let myCheckBoxParent = document.createElement("input");
  myCheckBoxParent.type = "checkbox";
  myCheckBoxParent.checked = false;
  perantContener.appendChild(myCheckBoxParent);

  document.getElementById("listContainer").appendChild(perantContener);
  document.getElementById("textInput").value = "";
});

// filterAll
document.getElementById("filterAll").addEventListener("click", function () {
  let tasks = document.querySelectorAll("#listContainer li");
  tasks.forEach((task) => (task.style.display = ""));
});

// filterComplete
document
  .getElementById("filterComplete")
  .addEventListener("click", function () {
    let tasks = document.querySelectorAll("#listContainer li");
    tasks.forEach((task) => {
      let checkbox = task.querySelector("input[type='checkbox']");
      task.style.display = checkbox && checkbox.checked ? "" : "none";
    });
  });

// filterIncomplete
document
  .getElementById("filterIncomplete")
  .addEventListener("click", function () {
    let tasks = document.querySelectorAll("#listContainer li");
    tasks.forEach((task) => {
      let checkbox = task.querySelector("input[type='checkbox']");
      task.style.display = checkbox && !checkbox.checked ? "" : "none";
    });
  });
