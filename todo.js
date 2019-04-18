//on load, hide buttons and form until + is clicked
  window.addEventListener("load", () => {
    document.getElementById('add-new-todo').hidden = true;
    document.getElementById('newbutton').hidden = true;




});



document.getElementById('todo-add').addEventListener("click", () => {
  document.getElementById('add-new-todo').hidden = false;
  document.getElementById('newbutton').hidden = false;
  document.getElementById('todo-add').style.visibility = "hidden";

});


//create and add to list, for submit button
const submit = document.getElementById('tasksubmit');
let taskArr = sessionStorage.getItem('tasks') ? JSON.parse(sessionStorage.getItem('tasks')) : [];
sessionStorage.setItem('tasks', JSON.stringify(taskArr));
const taskData = JSON.parse(sessionStorage.getItem('tasks'));


const inputEnter = document.getElementById('taskinput');
inputEnter.addEventListener("keypress", (event) => {
  if (event.keyCode == 13) {
    event.preventDefault();
    submit.click();
  }
})

function addTask(text) {

  const toList = document.getElementById('todo-list');
  const toComplete = document.getElementById('complete-list');
  let newTask = document.createElement('li');
  newTask.innerText = text;
  newTask.setAttribute("id", "todo-item");

  toList.appendChild(newTask);
  form.reset();


    newTask.addEventListener("click", (event) => {
    if (!newTask.classList.contains('line-through')) {
    newTask.classList.add('line-through');
    toComplete.appendChild(newTask);
  } else if (newTask.classList.contains('line-through')) {
        newTask.classList.remove('line-through');
        toList.appendChild(newTask);
}

})
}

submit.addEventListener("click", () => {
  const input = document.getElementById('taskinput');
  const value = input.value;
  if (input.value === "" || input.value === " ") {
      document.getElementById('alert').style.visibility = "visible";
  } else if (value) {
//add to storage data

    taskArr.push(value);
    sessionStorage.setItem('tasks', JSON.stringify(taskArr));

//add to list
    addTask(value);
    document.getElementById('alert').style.visibility = "hidden";
  }

})

taskData.forEach(task => {
  addTask(task);

})

const clearButton = document.getElementById('clearsubmit')
const fullList = document.getElementById('todo-list')
const compList = document.getElementById('complete-list')

clearButton.addEventListener('click', () => {
  sessionStorage.clear();
  while (fullList.firstChild) {
    fullList.removeChild(fullList.firstChild);
  }
  while (compList.firstChild) {
    compList.removeChild(compList.firstChild);
  }
})




























//i need for space you NASA
