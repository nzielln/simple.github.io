//overall
window.addEventListener("load", () => {
  document.getElementById('form').hidden = true;



});



document.getElementById('todo-add').addEventListener("click", () => {
  document.getElementById('form').hidden = false;
  document.getElementById('todo-add').style.visibility = "hidden";

});


//create and add to list, for submit button
const submit = document.getElementById('tasksubmit');
submit.addEventListener("click", () => {
  const input = document.getElementById('taskinput');
  const value = input.value;
  if (input.value === "" || input.value === " ") {
      document.getElementById('alert').style.visibility = "visible";
  } else if (value) {
    addTask(value);
    document.getElementById('alert').style.visibility = "hidden";
  }


});

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


document.getElementById('today').hidden = true;

document.getElementById('task-day').hidden = true;




























//i need for space you NASA
