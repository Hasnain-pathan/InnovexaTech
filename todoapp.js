document.addEventListener("DOMContentLoaded", () => {
  const taskList = document.getElementById("task-list");
  const newTaskInput = document.getElementById("new-task");

  window.addTask = function () {
    const taskText = newTaskInput.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");
    li.textContent = taskText;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "X";
    removeBtn.onclick = () => li.remove();

    li.appendChild(removeBtn);
    taskList.appendChild(li);

    newTaskInput.value = "";
  };
});
