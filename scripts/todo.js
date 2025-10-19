let tasks = [];

function addTask() {
  let input = document.getElementById("taskInput");
  let taskText = input.value.trim();
  if (taskText === "") return;

  let li = document.createElement("li");
  li.setAttribute('data-task', taskText);

  li.innerHTML = `
    <span>${taskText}</span> 
    <button onclick="deleteTask(this)">Delete</button>
  `;
  
  li.addEventListener("click", (e) => {
    if (e.target.tagName !== 'BUTTON') {
      li.classList.toggle("completed");
    }
  });
  
  document.getElementById("taskList").appendChild(li);
  tasks.push(taskText);
  input.value = "";
}

function deleteTask(button) {
  let li = button.parentElement;
  let taskTextToRemove = li.getAttribute('data-task');
  
  let index = tasks.indexOf(taskTextToRemove);
  if (index > -1) {
    tasks.splice(index, 1);
  }

  li.remove();
  
  console.log('Remaining tasks:', tasks);
}