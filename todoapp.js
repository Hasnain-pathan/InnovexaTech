const taskList = document.getElementById("task-list");
const newTaskInput = document.getElementById("new-task");

function addTask() {
  const taskText = newTaskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  // Add remove button
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "X";
  removeBtn.style.marginLeft = "10px";
  removeBtn.onclick = () => li.remove();

  li.appendChild(removeBtn);
  taskList.appendChild(li);

  newTaskInput.value = "";
}
